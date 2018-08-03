import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { fetchIdeas, addIdea } from '../store/actions/ideas';

const NavContainer = styled.nav`
  padding: 2rem 2.5rem;
`;

const NewButton = styled.button`
  border: none;
  border-radius: 3px;
  padding: 1.5rem 4rem;
  text-transform: uppercase;
  font-size: 1.5rem;
  letter-spacing: 0.5px;
  cursor: pointer;
`;

export class Navbar extends Component {
  static propTypes = {
    fetchIdeas: PropTypes.func,
    addIdea: PropTypes.func
  };

  handleNewIdea = () => {
    const newIdea = { title: 'New Idea', rating: 5 };
    this.props
      .addIdea(newIdea)
      .then(() => this.props.fetchIdeas())
      .catch(() => {
        return;
      });
  };

  render() {
    return (
      <NavContainer className="row">
        <NewButton onClick={this.handleNewIdea}>Add new idea</NewButton>
      </NavContainer>
    );
  }
}

const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
  { fetchIdeas, addIdea }
)(Navbar);
