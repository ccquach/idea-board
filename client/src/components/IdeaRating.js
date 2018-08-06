import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const MAX_RATING = 5;

const IconGroup = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 1.5rem 1.75rem;
  z-index: 100;
`;

const Icon = styled.i`
  font-size: 2rem;
  color: #f9ca24;
`;

class IdeaRating extends Component {
  static propTypes = {
    rating: PropTypes.number.isRequired,
    updateIdea: PropTypes.func.isRequired
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
    if (this.state.display !== this.state.rating)
      this.setState({ rating: this.state.display }, () => {
        this.props.updateIdea({ rating: this.state.rating });
      });
  };

  render() {
    const { display } = this.state;

    let icons = [];
    // Full icons
    for (let i = 1; i <= display; i++) {
      icons.push(
        <Icon
          key={i}
          className="fas fa-lightbulb"
          onMouseEnter={this.handleMouseEnter.bind(this, i)}
          onMouseLeave={this.handleMouseLeave}
          onClick={this.handleClick}
        />
      );
    }
    // Empty icons
    if (display < MAX_RATING) {
      for (let i = 1 + display; i <= MAX_RATING; i++) {
        icons.push(
          <Icon
            key={i}
            className="far fa-lightbulb"
            onMouseEnter={this.handleMouseEnter.bind(this, i)}
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
