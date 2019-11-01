import 'dotenv/config';
import http from 'http';
import cors from 'cors';
import morgan from 'morgan';
import jwt from 'jsonwebtoken';
import express from 'express';
import { ApolloServer, AuthenticationError } from 'apollo-server-express';

import schema from './schema';
import resolvers from './resolvers';
import models from './models';

const app = express();
app.use(cors());
app.use(morgan('dev'));

const getUser = async token => {
  if (token) {
    try {
      const verified = await jwt.verify(token, process.env.SECRET);
      return verified;
    } catch (e) {
      throw new AuthenticationError('Your session expired. Sign in again.');
    }
  }

  return null;
};

const getRequestUser = req => getUser(req.headers.authorization);

const server = new ApolloServer({
  introspection: true,
  typeDefs: schema,
  resolvers,
  context: async ({ req, connection }) => {
    if (connection) {
      return connection.context;
    }

    if (req) {
      const me = await getRequestUser(req);
      return {
        models,
        me,
        secret: process.env.SECRET,
      };
    }

    return {};
  },
});

server.applyMiddleware({ app, path: '/graphql' });

const httpServer = http.createServer(app);

httpServer.listen(3001, () => {
  console.log(`Server listening ${3001}${server.graphqlPath}`);
});
