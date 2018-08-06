import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Aside = styled.aside`
  font-size: 1.6rem;
`;

class Sidebar extends Component {
  state = {
    completed: this.props.filter.completed
  };

  handleFilter = (e, val) => {
    e.preventDefault();
    this.setState(
      {
        completed: val
      },
      () => {
        this.props.onFilter(this.state);
      }
    );
  };

  render() {
    const { completed } = this.state;
    const { count } = this.props;
    const linkClasses =
      'list-group-item list-group-item-action d-flex justify-content-between align-items-center';

    return (
      <Aside>
        <ul className="list-group">
          <a
            href=""
            className={`${completed ? '' : 'active '}${linkClasses}`}
            onClick={e => this.handleFilter(e, false)}
          >
            Current
            <span className="badge badge-primary badge-pill">
              {count.current}
            </span>
          </a>
          <a
            href=""
            className={`${completed ? 'active ' : ''}${linkClasses}`}
            onClick={e => this.handleFilter(e, true)}
          >
            Archive
            <span className="badge badge-primary badge-pill">
              {count.archive}
            </span>
          </a>
        </ul>
      </Aside>
    );
  }
}

Sidebar.propTypes = {
  filter: PropTypes.object.isRequired,
  onFilter: PropTypes.func.isRequired,
  count: PropTypes.object.isRequired
};

export default Sidebar;
