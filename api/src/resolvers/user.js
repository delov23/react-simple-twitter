import jwt from 'jsonwebtoken';
import { AuthenticationError } from 'apollo-server';
import { find } from 'lodash';

const createToken = (user, secret, expiresIn) => {
  const { id, username, name, picture } = user;
  return jwt.sign({ id, username, name, picture }, secret, {
    expiresIn,
  });
};

export default {
  Query: {
    me: (parent, args, { models, me }) => {
      if (!me) {
        return null;
      }

      return find(models.users, { id: me.id });
    },
  },

  Mutation: {
    logIn: async (parent, { username }, { models, secret }) => {
      const user = find(models.users, { username });

      if (!user) {
        throw new AuthenticationError('Invalid credentials!');
      }

      return createToken(user, secret, '3h');
    },
  },
};
