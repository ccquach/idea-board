import React, { Component } from 'react';

import Sidebar from './Sidebar';
import Navbar from '../containers/Navbar';
import Error from '../containers/Error';
import IdeaList from '../containers/IdeaList';

class Main extends Component {
  state = {
    sort: { updatedAt: 'desc' },
    filter: ''
  };

  handleSort = sortObj => {
    this.setState({ sort: sortObj });
  };

  handleFilter = filter => {
    debugger;
    this.setState({ filter });
  };

  render() {
    const { sort, filter } = this.state;

    return (
      <div className="row">
        <div className="col-md-2">
          <Sidebar filter={filter} />
        </div>
        <div className="col-md-10">
          <Navbar onSort={this.handleSort} />
          <Error />
          <IdeaList sort={sort} filter={filter} />
        </div>
      </div>
    );
  }
}

export default Main;
