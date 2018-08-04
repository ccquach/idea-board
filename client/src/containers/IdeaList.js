import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Idea from '../components/Idea';
import { fetchIdeas, removeIdea, updateIdea } from '../store/actions/ideas';
import { getSortedData } from '../utils/sort';

export class IdeaList extends Component {
  static propTypes = {
    ideas: PropTypes.arrayOf(PropTypes.object).isRequired,
    fetchIdeas: PropTypes.func,
    removeIdea: PropTypes.func,
    updateIdea: PropTypes.func
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
    const ideas = this.props.ideas.map(i => (
      <Idea
        key={i._id}
        title={i.title}
        content={i.content}
        rating={i.rating}
        updatedAt={i.updatedAt}
        removeIdea={this.handleRemove.bind(this, i._id)}
        updateIdea={this.props.updateIdea.bind(this, i._id)}
      />
    ));

    return <main className="row mt-5">{ideas}</main>;
  }
}

const mapStateToProps = state => ({
  ideas: getSortedData(state.ideas, state.sort.sortObj)
});

export default connect(
  mapStateToProps,
  { fetchIdeas, removeIdea, updateIdea }
)(IdeaList);
