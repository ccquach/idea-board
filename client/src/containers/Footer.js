import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled, { css } from 'styled-components';

import { fetchQuote } from '../store/actions/quote';

const mobileBlock = css`
  @media only screen and (max-width: 36rem) {
    display: block;
    width: 90%;
    margin: 0 auto;
  }
`;

const Container = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  padding: 2rem;
  background-color: rgba(245, 245, 245, 0.7);
  text-align: center;
  font-size: 1.8rem;
  font-style: italic;
  letter-spacing: 0.25px;
  color: #212121;
`;

const Quote = styled.blockquote`
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

export class Footer extends Component {
  static propTypes = {
    quote: PropTypes.object.isRequired,
    fetchQuote: PropTypes.func.isRequired
  };

  componentDidMount = () => {
    this.props.fetchQuote();
  };

  render() {
    const { quote } = this.props;
    return (
      <Container className="container-fluid">
        <Quote>
          <Text className="mb-0">{quote.text}</Text>
        </Quote>
        <Author>
          <span className="mr-1">&mdash;</span>
          {quote.author}
        </Author>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  quote: state.quote
});

export default connect(
  mapStateToProps,
  { fetchQuote }
)(Footer);
