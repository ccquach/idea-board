import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const MAX_RATING = 5;

const IconGroup = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 1.5rem 1.75rem;
`;

const Icon = styled.i`
  font-size: 2rem;
  color: #f9ca24;
`;

class IdeaRating extends Component {
  static propTypes = {
    rating: PropTypes.number,
    updateIdea: PropTypes.func
  };

  state = {
    rating: this.props.rating,
    display: this.props.rating
  };

  handleMouseEnter = val => {
    this.setState({ display: val });
  };

  handleMouseLeave = () => {
    this.setState({ display: this.state.rating });
  };

  handleClick = () => {
    this.setState({ rating: this.state.display }, () => {
      this.props.updateIdea({ rating: this.state.rating });
    });
  };

  render() {
    const { display } = this.state;

    const icons = [];
    // Full icons
    for (let i = 0; i < display; i++) {
      icons.push(
        <Icon
          key={i}
          className="fas fa-lightbulb"
          onMouseEnter={this.handleMouseEnter.bind(this, i + 1)}
          onMouseLeave={this.handleMouseLeave}
          onClick={this.handleClick}
        />
      );
    }
    // Empty icons
    if (display < 5) {
      for (let i = 0; i < MAX_RATING - display; i++) {
        icons.push(
          <Icon
            key={i + display}
            className="far fa-lightbulb"
            onMouseEnter={this.handleMouseEnter.bind(this, i + display + 1)}
            onMouseLeave={this.handleMouseLeave}
            onClick={this.handleClick}
          />
        );
      }
    }

    return <IconGroup>{icons}</IconGroup>;
  }
}

export default IdeaRating;
