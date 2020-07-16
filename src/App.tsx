import React from 'react';
import { Router } from "@reach/router";
import { Welcome } from './pages/welcome';
import { Settings } from './pages/settings';
import { NotFound } from './pages/404';

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider
} from '@apollo/client';
import { CurrentUserProvider } from 'components/currentUser';
import { CurrentUserChecker } from 'components/currentUserChecker';


function App() {
  const client = new ApolloClient({
    uri: process.env.REACT_APP_GRAPHQL_URI,
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <div className="App">
      <CurrentUserProvider>
        <CurrentUserChecker>
            <Router>
              <Welcome path='/' />
              <Settings path='/settings/:name' />
              <NotFound default />
            </Router>
          </CurrentUserChecker>
        </CurrentUserProvider>
      </div>
    </ApolloProvider>
  );
}

export default App;
