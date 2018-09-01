import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled, { css } from 'styled-components';

import NavItem from '../../components/Layout/NavItem';
import Sidebar from '../../components/Layout/Sidebar';
import SortMenu from '../../components/Layout/SortMenu';
import { fetchIdeas, addIdea } from '../../store/actions/ideas';
import { setSort, setFilter } from '../../store/actions/utils';

// #region styles
const mobileBlock = css`
  @media only screen and (max-width: 48rem) {
    display: block;
    width: 100%;
  }
`;

const NewButton = styled.button`
  padding: 1.25rem 3rem;
  text-transform: uppercase;
  font-size: 1.5rem;
  letter-spacing: 0.5px;
  ${mobileBlock};

  &:disabled {
    cursor: not-allowed;
  }
`;

const Flash = styled.div`
  display: inline-block;
  border-radius: 3px;
  background-color: rgba(245, 245, 245, 0.7);
  color: #642b73;
  font-size: 1.3rem;
  text-transform: uppercase;
  text-align: center;
  padding: 1rem 1.5rem;
  ${mobileBlock};
`;

// #endregion

class Navbar extends Component {
  handleNewIdea = () => {
    const newIdea = { title: 'New Idea', rating: 5 };
    this.props.addIdea(newIdea);
  };

  render() {
    const { flash, filter, ideas, setSort, setFilter } = this.props;
    return (
      <nav className="row d-flex justify-content-center align-items-center text-center">
        <NavItem>
          <Sidebar filter={filter} handleFilter={setFilter} ideas={ideas} />
        </NavItem>

        <NavItem>
          <NewButton
            className="btn btn-outline-light btn-lg"
            onClick={this.handleNewIdea}
            disabled={filter.completed ? true : false}
          >
            Add new idea
          </NewButton>
        </NavItem>

        <NavItem>
          <SortMenu handleSort={setSort} />
        </NavItem>

        <NavItem>{flash.message && <Flash>{flash.message}</Flash>}</NavItem>
      </nav>
    );
  }
}

Navbar.propTypes = {
  fetchIdeas: PropTypes.func.isRequired,
  addIdea: PropTypes.func.isRequired,
  flash: PropTypes.object.isRequired,
  setSort: PropTypes.func.isRequired,
  filter: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  flash: state.flash,
  filter: state.utils.filter,
  ideas: state.ideas,
});

export default connect(
  mapStateToProps,
  { fetchIdeas, addIdea, setSort, setFilter }
)(Navbar);
