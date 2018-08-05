import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';

const Alert = styled.div`
  font-size: 1.4rem;
`;

export class Error extends Component {
  static propTypes = {
    errors: PropTypes.object.isRequired
  };

  render() {
    const { errors } = this.props;
    if (errors.message) {
      return <Alert className="alert alert-danger">{errors.message}</Alert>;
    }
    return <div />;
  }
}

const mapStateToProps = state => ({
  errors: state.errors
});

export default connect(
  mapStateToProps,
  null
)(Error);
