import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { TransitionMotion, spring, presets } from 'react-motion';

import Idea from '../../components/Idea/Idea';
import { fetchIdeas, removeIdea, updateIdea } from '../../store/actions/ideas';
import { getFilteredData } from '../../utils/filters';
import { getSortedData } from '../../utils/sort';

class IdeaList extends Component {
  componentDidMount = () => {
    this.props.fetchIdeas();
  };

  // animation logic
  getStyles = () => {
    return this.props.ideas.map(idea => ({
      key: idea._id,
      style: {
        opacity: spring(1, presets.gentle),
        scale: spring(1, presets.gentle),
      },
      data: idea,
    }));
  };

  willEnter = () => ({
    opacity: 1,
    scale: 0.85,
  });

  render() {
    return (
      <TransitionMotion styles={this.getStyles()} willEnter={this.willEnter}>
        {styles =>
          styles.length ? (
            <div className="row mt-5" style={{ marginBottom: '20rem' }}>
              {styles.map(({ key, style, data }) => (
                <Idea
                  key={`${key}-transition`}
                  style={{
                    opacity: style.opacity,
                    transform: `scale(${style.scale})`,
                  }}
                  id={data._id}
                  title={data.title}
                  content={data.content}
                  rating={data.rating}
                  completed={data.completed}
                  updatedAt={data.updatedAt}
                  removeIdea={this.props.removeIdea}
                  updateIdea={this.props.updateIdea}
                />
              ))}
            </div>
          ) : (
            <p style={{ textAlign: 'center', fontSize: '1.4rem' }}>
              No ideas found.
            </p>
          )
        }
      </TransitionMotion>
    );
  }
}

IdeaList.propTypes = {
  ideas: PropTypes.arrayOf(PropTypes.object).isRequired,
  fetchIdeas: PropTypes.func.isRequired,
  removeIdea: PropTypes.func.isRequired,
  updateIdea: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  ideas: getSortedData(
    getFilteredData(state.ideas, state.utils.filter),
    state.utils.sort
  ),
});

export default connect(
  mapStateToProps,
  { fetchIdeas, removeIdea, updateIdea }
)(IdeaList);
