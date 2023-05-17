import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import Constants from 'expo-constants';

const env = Constants.expoConfig?.extra; // always undefined...
export const client = new ApolloClient({
  cache: new InMemoryCache(),
  defaultOptions: {
    query: {
      fetchPolicy: 'cache-first',
    },
  },
  link: createHttpLink({
    uri: env?.REACT_APP_GRAPHQL_API_URL || 'http://192.168.1.96:4000',
    credentials: 'include',
  }),
});
