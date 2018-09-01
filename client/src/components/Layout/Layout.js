import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Particles from 'react-particles-js';

import Header from './Header';
import Navbar from '../../containers/Layout/Navbar';
import Main from '../../containers/Layout/Main';
import Footer from '../../containers/Layout/Footer';

const particleOptions = {
  particles: {
    number: {
      value: 80,
      density: { value_area: 800 },
    },
  },
};

const particleStyles = {
  width: '100%',
  zIndex: -1,
  position: 'fixed',
  top: 0,
  left: 0,
};

const Layout = props => {
  const navigation = props.location.pathname === '/' ? <Navbar /> : null;
  return (
    <div className="container">
      <Header />
      {navigation}
      <Main>{props.children}</Main>
      <Footer />
      <Particles params={particleOptions} style={particleStyles} />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default withRouter(Layout);
