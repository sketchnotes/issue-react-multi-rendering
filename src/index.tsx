import React from 'react';
import ReactDOM from 'react-dom';

import { Router } from "@reach/router";
import { Welcome } from './pages/welcome';

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider
} from '@apollo/client';
import { CurrentUserProvider } from 'components/currentUser';
import { CurrentUserChecker } from 'components/currentUserChecker';

const App = () => {
  const client = new ApolloClient({
    uri: process.env.REACT_APP_GRAPHQL_URI,
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <CurrentUserProvider>
        <CurrentUserChecker>
          <Router>
            <Welcome path='/' />
          </Router>
        </CurrentUserChecker>
      </CurrentUserProvider>
    </ApolloProvider>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
