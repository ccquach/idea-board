import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { fetchIdeas, addIdea } from '../store/actions/ideas';
import { setSort } from '../store/actions/utils';

const NavContainer = styled.nav`
  padding: 2rem 2.5rem;
`;

const NewButton = styled.button`
  padding: 1.5rem 4rem;
  text-transform: uppercase;
  font-size: 1.5rem;
  letter-spacing: 0.5px;
`;

const Flash = styled.div`
  display: inline-block;
  float: right;
  border-radius: 3px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  background-color: rgba(39, 60, 117, 0.8);
  color: #f1f1f1;
  font-size: 1.5rem;
  text-transform: uppercase;
  text-align: center;
  padding: 1.5rem 2rem;
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
    setSort: PropTypes.func.isRequired
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

  handleSort = e => {
    const splitVal = e.target.value.split('_');
    const sortObj = { [splitVal[0]]: splitVal[1] };
    this.props.setSort(sortObj);
  };

  render() {
    const { flash } = this.props;
    return (
      <NavContainer className="row">
        <div className="col-md-4">
          <NewButton
            className="btn btn-outline-primary btn-lg"
            onClick={this.handleNewIdea}
          >
            Add new idea
          </NewButton>
        </div>

        <div className="col-md-4">
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
  flash: state.flash
});

export default connect(
  mapStateToProps,
  { fetchIdeas, addIdea, setSort }
)(Navbar);
