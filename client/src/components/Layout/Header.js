import React from 'react';
import styled from 'styled-components';

const Heading = styled.h1`
  font-family: 'Fredericka the Great', sans-serif;
  font-size: 6rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  text-align: center;
  margin: 4rem auto;
  opacity: 0.85;
`;

const Header = () => {
  return (
    <header className="row">
      <Heading>Idea Board</Heading>
    </header>
  );
};

export default Header;
