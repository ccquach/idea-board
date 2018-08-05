import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Aside = styled.aside`
  height: 100%;
  font-size: 1.6rem;
`;

const Sidebar = () => {
  return (
    <Aside>
      <ul className="list-group">
        <a
          href=""
          className="list-group-item list-group-item-action d-flex justify-content-between align-items-center active"
        >
          Current
          <span className="badge badge-primary badge-pill">14</span>
        </a>
        <a
          href=""
          className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
        >
          Archive
          <span className="badge badge-primary badge-pill">14</span>
        </a>
      </ul>
    </Aside>
  );
};

Sidebar.propTypes = {
  filter: PropTypes.string.isRequired
};

export default Sidebar;
