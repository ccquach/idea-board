import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Sidebar from '../components/Sidebar';
import Navbar from './Navbar';
import Error from './Error';
import IdeaList from './IdeaList';
import { setFilter } from '../store/actions/utils';

export class Main extends Component {
  static propTypes = {
    filter: PropTypes.object.isRequired,
    setFilter: PropTypes.func.isRequired
  };

  render() {
    const { filter, setFilter } = this.props;
    return (
      <div className="row">
        <div className="col-md-2">
          <Sidebar filter={filter} onFilter={setFilter} />
        </div>
        <div className="col-md-10">
          <Navbar />
          <Error />
          <IdeaList />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  filter: state.utils.filter
});

export default connect(
  mapStateToProps,
  { setFilter }
)(Main);
