import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { configureStore } from '../store';

import Header from '../components/Header';
import Main from './Main';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="container">
            <Header />
            <Main />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
