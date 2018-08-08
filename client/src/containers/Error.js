import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { TransitionMotion, spring, presets } from 'react-motion';
import { removeError } from '../store/actions/errors';

const Container = styled.div`
  position: relative;
  font-size: 1.4rem;
`;

const CloseButton = styled.span`
  position: absolute;
  top: 0.9rem;
  right: 1rem;
  line-height: 1;
  font-size: 2rem;
  cursor: pointer;
`;

export class Error extends Component {
  static propTypes = {
    errors: PropTypes.object.isRequired
  };

  handleClose = () => {
    this.props.removeError();
  };

  // animation logic
  getStyles = () =>
    this.props.errors.message
      ? [
          {
            key: `error-${Date.now()}`,
            style: {
              height: spring(42, presets.gentle),
              opacity: spring(1, presets.gentle)
            },
            data: this.props.errors
          }
        ]
      : [];

  willEnter = () => ({
    height: 0,
    opacity: 1
  });

  willLeave = () => ({
    height: spring(0),
    opacity: spring(0)
  });

  render() {
    return (
      <TransitionMotion
        styles={this.getStyles()}
        willEnter={this.willEnter}
        willLeave={this.willLeave}
      >
        {styles => (
          <div style={{ minHeight: '2rem' }}>
            {styles.map(({ key, style, data: { message } }) => (
              <Container
                className="alert alert-danger mb-0"
                role="alert"
                key={`${key}-transition`}
                style={style}
              >
                <p className="mb-0">
                  <strong>Error!</strong>
                  {message.split(':').slice(-1)[0]}
                </p>
                <CloseButton onClick={this.handleClose}>&times;</CloseButton>
              </Container>
            ))}
          </div>
        )}
      </TransitionMotion>
    );
  }
}

const mapStateToProps = state => ({
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { removeError }
)(Error);
