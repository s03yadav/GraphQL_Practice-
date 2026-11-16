import { ApolloProvider } from '@apollo/client/react'
import React from 'react'
import Home from './components/home'
import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'
import LazyQuery from './components/LazyQuery'

const client = new ApolloClient({
  link: new HttpLink({
    uri: import.meta.env.VITE_GRAPHQL_ENDPOINT
  }),
  cache: new InMemoryCache()
})

const App = () => {
  return (
    <>
      <ApolloProvider client={client}>
        {/* <Home /> */}
        < LazyQuery/>
      </ApolloProvider>
    </>
  )
}

export default App