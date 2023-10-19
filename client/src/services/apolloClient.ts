import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
  cache: new InMemoryCache(
    {
      // addTypename: false
    }
  ),
  defaultOptions: {
    query: {
      fetchPolicy: 'cache-first',
    },
  },
  link: createHttpLink({
    uri: 'http://localhost:4000',
    credentials: 'include',
  }),
})

export default client
