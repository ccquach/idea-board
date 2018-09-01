import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Layout from '../components/Layout/Layout';
import IdeaList from './Idea/IdeaList';
import NotFound from '../components/NotFound';

class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route exact path="/" component={IdeaList} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    );
  }
}

export default App;
