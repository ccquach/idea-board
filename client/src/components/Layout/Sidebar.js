import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Aside = styled.aside`
  font-size: 1.6rem;
  margin: 2rem 0;
`;

class Sidebar extends Component {
  state = {
    completed: this.props.filter.completed,
  };

  handleFilter = (e, val) => {
    e.preventDefault();
    this.setState({ completed: val }, () => {
      this.props.handleFilter(this.state);
    });
  };

  countIdeas = () => {
    const { ideas } = this.props;
    const current = ideas.reduce((acc, next) => {
      if (!next.completed) acc++;
      return acc;
    }, 0);
    const archive = ideas.length - current;
    return { current, archive };
  };

  render() {
    const { completed } = this.state;
    const { current, archive } = this.countIdeas();

    const inactiveClasses =
      'list-group-item list-group-item-action list-group-item-light d-flex justify-content-between align-items-center';
    const activeClasses = [inactiveClasses, 'active'].join(' ');
    const badgeClasses = 'badge badge-light badge-pill';

    return (
      <Aside style={{ opacity: '.85' }}>
        <ul className="list-group">
          <a
            href=""
            className={completed ? inactiveClasses : activeClasses}
            onClick={e => this.handleFilter(e, false)}
          >
            Current
            <span className={badgeClasses}>{current}</span>
          </a>
          <a
            href=""
            className={completed ? activeClasses : inactiveClasses}
            onClick={e => this.handleFilter(e, true)}
          >
            Archive
            <span className={badgeClasses}>{archive}</span>
          </a>
        </ul>
      </Aside>
    );
  }
}

Sidebar.propTypes = {
  filter: PropTypes.shape({
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  handleFilter: PropTypes.func.isRequired,
  ideas: PropTypes.array.isRequired,
};

export default Sidebar;
