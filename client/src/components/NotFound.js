import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// #region styles
const lightGrey = '#f5f5f5';

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;

const Title = styled.p`
  font-size: 8rem;
  letter-spacing: 2px;
  line-height: 1.2;
`;

const Subtitle = styled.p`
  font-size: 1.8rem;
`;

const Button = styled(Link)`
  display: inline-block;
  background-color: transparent;
  border: 2px solid ${lightGrey};
  border-radius: 3px;
  color: ${lightGrey};
  font-size: 1.5rem;
  letter-spacing: 1px;
  text-transform: uppercase;
  padding: 1rem 4rem;
  margin-top: 3rem;
  cursor: pointer;
  font-weight: 400;
  transition: all 0.3s ease-out;
  position: relative;

  &::before {
    content: '';
    background-color: ${lightGrey};
    border: 2px solid ${lightGrey};
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    transform: scaleY(0);
    transition: transform 0.4s ease-out,
      height 0.4s cubic-bezier(1, 0, 0, 1) 0.2s, background-color 0.1s ease-out;
    z-index: -1;
  }

  &:hover::before,
  &:active::before {
    transform: scaleY(1);
    background-color: ${lightGrey};
  }

  &:hover,
  &:active {
    text-decoration: none;
    color: #642b73;
  }
`;
// #endregion

const NotFound = () => {
  return (
    <Wrapper>
      <Title>404</Title>
      <Subtitle>Oops, the page you're looking for doesn't exist.</Subtitle>
      <Button to="/">Go home</Button>
    </Wrapper>
  );
};

export default NotFound;
