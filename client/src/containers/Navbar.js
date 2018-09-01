import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled, { css } from 'styled-components';

import { fetchIdeas, addIdea } from '../store/actions/ideas';
import { setSort } from '../store/actions/utils';

const mobileBlock = css`
  @media only screen and (max-width: 48rem) {
    display: block;
    width: 100%;
  }
`;

const NavContainer = styled.nav`
  padding: 2rem 2.5rem;
`;

const NewButton = styled.button`
  padding: 1.25rem 3rem;
  text-transform: uppercase;
  font-size: 1.5rem;
  letter-spacing: 0.5px;
  ${mobileBlock};
`;

const Flash = styled.div`
  display: inline-block;
  float: right;
  border-radius: 3px;
  background-color: rgba(245, 245, 245, 0.7);
  color: #642b73;
  font-size: 1.3rem;
  text-transform: uppercase;
  text-align: center;
  padding: 1rem 1.5rem;
  ${mobileBlock};
`;

const Label = styled.label`
  font-size: 1.3rem;
`;

const Select = styled.select`
  font-size: 1.4rem;
`;

export class Navbar extends Component {
  static propTypes = {
    fetchIdeas: PropTypes.func.isRequired,
    addIdea: PropTypes.func.isRequired,
    flash: PropTypes.object.isRequired,
    setSort: PropTypes.func.isRequired,
  };

  handleNewIdea = () => {
    const newIdea = { title: 'New Idea', rating: 5 };
    this.props.addIdea(newIdea);
  };

  handleSort = e => {
    const splitVal = e.target.value.split('_');
    const sortObj = { [splitVal[0]]: splitVal[1] };
    this.props.setSort(sortObj);
  };

  render() {
    const { flash, filter } = this.props;
    return (
      <NavContainer className="row d-flex justify-content-center align-items-center">
        <div className="col-md-4 mb-5 mb-md-0">
          <NewButton
            className="btn btn-outline-light btn-lg"
            onClick={this.handleNewIdea}
            disabled={filter.completed ? true : false}
          >
            Add new idea
          </NewButton>
        </div>

        <div className="col-md-4 mb-5 mb-md-0">
          <form onSubmit={e => e.preventDefault()}>
            <Label htmlFor="sort">Sort by:</Label>
            <Select
              name="sort"
              id="sort"
              className="form-control form-control-lg"
              onChange={this.handleSort}
            >
              <option value="updatedAt_desc" defaultValue>
                Most recent
              </option>
              <option value="updatedAt_asc">Least recent</option>
              <option value="rating_desc">Highest rated</option>
              <option value="rating_asc">Lowest rated</option>
            </Select>
          </form>
        </div>

        <div className="col-md-4">
          {flash.message && <Flash>{flash.message}</Flash>}
        </div>
      </NavContainer>
    );
  }
}

const mapStateToProps = state => ({
  flash: state.flash,
  filter: state.utils.filter,
});

export default connect(
  mapStateToProps,
  { fetchIdeas, addIdea, setSort }
)(Navbar);
