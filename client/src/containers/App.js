import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { configureStore } from '../store';
import Particles from 'react-particles-js';

import Header from '../components/Header';
import Main from './Main';
import Footer from './Footer';

const store = configureStore();

const particleOptions = {
  particles: {
    number: {
      value: 80,
      density: { value_area: 800 }
    }
  }
};

const particleStyles = {
  width: '100%',
  zIndex: -1,
  position: 'fixed',
  top: 0,
  left: 0
};

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="container">
            <Header />
            <Main />
            <Footer />
            <Particles params={particleOptions} style={particleStyles} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
