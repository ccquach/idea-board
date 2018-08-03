import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { configureStore } from '../store';
import styled from 'styled-components';

import IdeaList from './IdeaList';

const store = configureStore();

const Header = styled.h1`
  font-size: 4rem;
  font-weight: 300;
  letter-spacing: 2px;
  text-transform: uppercase;
  text-align: center;
  margin: 4rem 0;
`;

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="container">
            <Header>Idea Board</Header>
            <IdeaList />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
