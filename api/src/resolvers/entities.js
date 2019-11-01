import { combineResolvers } from 'graphql-resolvers';
import { find } from 'lodash';
import BigInt from 'apollo-type-bigint';

import auth from './authorization';

const withAuth = resolver => combineResolvers(auth.isAuthenticated, resolver);

export default {
  Query: {
    allTweets: withAuth((parent, { take = 4, after }, { models }) => {
      return {
        tweets: models.tweets,
        cursor: null,
        hasMore: false,
      };
    }),
  },
  Tweet: {
    user: withAuth((parent, _, { models }) => {
      return find(models.users, { id: parent.user });
    }),
  },
  BigInt: new BigInt('safe')
};
