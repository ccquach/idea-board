import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Sidebar from '../components/Sidebar';
import Navbar from './Navbar';
import Error from './Error';
import IdeaList from './IdeaList';
import Loading from '../components/Loading';
import { setFilter } from '../store/actions/utils';

class Main extends Component {
  countIdeas = ideas => {
    const current = ideas.reduce((acc, next) => {
      if (!next.completed) acc++;
      return acc;
    }, 0);
    const archive = ideas.length - current;
    return { current, archive };
  };

  render() {
    const { filter, setFilter, ideas, loading } = this.props;
    return (
      <div className="row">
        {loading.isFetching ? <Loading /> : null}
        <div className="col-lg-2">
          <Sidebar
            filter={filter}
            onFilter={setFilter}
            count={this.countIdeas(ideas)}
          />
        </div>
        <div className="col-lg-10">
          <Navbar />
          <Error />
          <IdeaList />
        </div>
      </div>
    );
  }
}

Main.propTypes = {
  filter: PropTypes.object.isRequired,
  setFilter: PropTypes.func.isRequired,
  loading: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  filter: state.utils.filter,
  ideas: state.ideas,
  loading: state.loading,
});

export default connect(
  mapStateToProps,
  { setFilter }
)(Main);
