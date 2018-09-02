import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import asyncComponent from '../hocs/asyncComponent';
import Layout from '../components/Layout/Layout';
import IdeaList from './Idea/IdeaList';

const AsyncNotFound = asyncComponent(() => import('../components/NotFound'));

class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route exact path="/" component={IdeaList} />
          <Route component={AsyncNotFound} />
        </Switch>
      </Layout>
    );
  }
}

export default App;
