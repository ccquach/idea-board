import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Idea from '../components/Idea';
import { fetchIdeas, removeIdea, updateIdea } from '../store/actions/ideas';
import { getFilteredData } from '../utils/filters';
import { getSortedData } from '../utils/sort';

export class IdeaList extends Component {
  static propTypes = {
    ideas: PropTypes.arrayOf(PropTypes.object).isRequired,
    fetchIdeas: PropTypes.func.isRequired,
    removeIdea: PropTypes.func.isRequired,
    updateIdea: PropTypes.func.isRequired
  };

  componentDidMount = () => {
    this.props.fetchIdeas();
  };

  handleRemove = id => {
    this.props
      .removeIdea(id)
      .then(() => this.props.fetchIdeas())
      .catch(() => {
        return;
      });
  };

  render() {
    const ideasList = this.props.ideas.map(i => (
      <Idea
        key={i._id}
        title={i.title}
        content={i.content}
        rating={i.rating}
        completed={i.completed}
        updatedAt={i.updatedAt}
        removeIdea={this.handleRemove.bind(this, i._id)}
        updateIdea={this.props.updateIdea.bind(this, i._id)}
      />
    ));

    return <main className="row mt-5">{ideasList}</main>;
  }
}

const mapStateToProps = state => ({
  ideas: getSortedData(
    getFilteredData(state.ideas, state.utils.filter),
    state.utils.sort
  )
});

export default connect(
  mapStateToProps,
  { fetchIdeas, removeIdea, updateIdea }
)(IdeaList);
