import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled, { css } from 'styled-components';

import { fetchQuote } from '../../store/actions/quote';

// #region styles
const mobileBlock = css`
  @media only screen and (max-width: 36rem) {
    display: block;
    width: 90%;
    margin: 0 auto;
  }
`;

const Container = styled.footer`
  position: fixed;
  bottom: ${props => (props.isOpen ? 0 : '-25%')};
  left: 0;
  padding: 2rem;
  background-color: rgba(245, 245, 245, 0.7);
  text-align: center;
  font-size: 1.5rem;
  font-style: italic;
  letter-spacing: 0.25px;
  color: #212121;
  transition: bottom 0.8s ease-out;
`;

const Quote = styled.blockquote`
  width: 70%;
  display: inline-block;
  margin-bottom: 0;
  ${mobileBlock};
`;

const Text = styled.p`
  display: inline-block;
  position: relative;

  &::before {
    content: '\\201c';
    line-height: 1;
    position: absolute;
    top: -3rem;
    left: -5rem;
    font-size: 15rem;
    font-family: sans-serif;
    color: rgba(33, 33, 33, 0.07);
  }
`;

const Author = styled.cite`
  font-size: 1.2rem;
  margin-left: 2rem;
  ${mobileBlock};
`;

const Toggle = styled.span`
  position: fixed;
  bottom: 1rem;
  right: 2.5rem;
  line-height: 1;
  font-style: normal;
  font-size: 4rem;
  color: ${props => (props.isOpen ? '#272727' : '#f5f5f5')};
  cursor: pointer;
  transform: ${props =>
    props.isOpen ? 'rotate(90deg)' : 'rotate(-90deg) translateY(-25%)'};
`;
// #endregion

class Footer extends Component {
  state = {
    isOpen: true,
  };

  componentDidMount = () => {
    this.props.fetchQuote();
  };

  handleToggle = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
    }));
  };

  render() {
    const { isOpen } = this.state;
    const { quote } = this.props;
    return (
      <Container className="container-fluid" isOpen={isOpen}>
        <Quote>
          <Text className="mb-0">{quote.text}</Text>
        </Quote>
        <Author>
          <span className="mr-1">&mdash;</span>
          {quote.author}
        </Author>
        <Toggle isOpen={isOpen} onClick={this.handleToggle}>
          &rsaquo;
        </Toggle>
      </Container>
    );
  }
}

Footer.propTypes = {
  quote: PropTypes.object.isRequired,
  fetchQuote: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  quote: state.quote,
});

export default connect(
  mapStateToProps,
  { fetchQuote }
)(Footer);
