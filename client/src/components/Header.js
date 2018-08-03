import React from 'react';
import styled from 'styled-components';

const Heading = styled.h1`
  font-size: 4rem;
  font-weight: 300;
  letter-spacing: 2px;
  text-transform: uppercase;
  text-align: center;
  margin-top: 4rem;
`;

const Header = () => {
  return (
    <header>
      <Heading>Idea Board</Heading>
    </header>
  );
};

export default Header;
