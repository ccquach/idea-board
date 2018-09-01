import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Loading from '../../components/UI/Loading';
import Error from '../UI/Error';

class Main extends Component {
  render() {
    return (
      <div className="row">
        <div className="container">
          {this.props.loading.isFetching ? <Loading /> : null}
          <Error />
          {this.props.children}
        </div>
      </div>
    );
  }
}

Main.propTypes = {
  loading: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  loading: state.loading,
});

export default connect(mapStateToProps)(Main);
