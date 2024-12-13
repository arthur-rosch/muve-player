import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://api-muve-player.vercel.app/graphql',
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: 'https://api-muve-player.vercel.app/graphql',
  }),
});

export default client;
