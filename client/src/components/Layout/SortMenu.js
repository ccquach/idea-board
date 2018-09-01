import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Label = styled.label`
  font-size: 1.3rem;
`;

const Select = styled.select`
  font-size: 1.4rem;
`;

class SortMenu extends Component {
  handleChange = e => {
    const splitVal = e.target.value.split('_');
    const sortObj = { [splitVal[0]]: splitVal[1] };
    this.props.handleSort(sortObj);
  };

  render() {
    return (
      <form onSubmit={e => e.preventDefault()}>
        <Label htmlFor="sort">Sort by:</Label>
        <Select
          name="sort"
          id="sort"
          className="form-control form-control-lg"
          onChange={this.handleChange}
        >
          <option value="updatedAt_desc" defaultValue>
            Most recent
          </option>
          <option value="updatedAt_asc">Least recent</option>
          <option value="rating_desc">Highest rated</option>
          <option value="rating_asc">Lowest rated</option>
        </Select>
      </form>
    );
  }
}

SortMenu.propTypes = {
  handleSort: PropTypes.func.isRequired,
};

export default SortMenu;
