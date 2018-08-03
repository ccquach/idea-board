import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Idea from '../components/Idea';
import { fetchIdeas } from '../store/actions/ideas';

export class IdeaList extends Component {
  static propTypes = {
    ideas: PropTypes.arrayOf(PropTypes.object).isRequired,
    errors: PropTypes.object,
    fetchIdeas: PropTypes.func
  };

  componentDidMount = () => {
    this.props.fetchIdeas();
  };

  render() {
    const ideas = this.props.ideas.map(i => (
      <Idea
        key={i._id}
        title={i.title}
        content={i.content}
        rating={i.rating}
        createdAt={i.createdAt}
        updatedAt={i.updatedAt}
      />
    ));

    return <div className="row">{ideas}</div>;
  }
}

const mapStateToProps = state => ({
  ideas: state.ideas,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { fetchIdeas }
)(IdeaList);
