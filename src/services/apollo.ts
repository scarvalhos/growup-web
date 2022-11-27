import { ApolloClient, InMemoryCache } from '@apollo/client'

const apolloClient = new ApolloClient({
  uri: 'http://localhost:3333/',
  cache: new InMemoryCache(),
})

export { apolloClient }
