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
    rating: PropTypes.number
  };

  state = { rating: this.props.rating };

  render() {
    const { rating } = this.state;

    const icons = [];
    for (let i = 0; i < rating; i++) {
      icons.push(<Icon key={i} className="fas fa-lightbulb" />);
    }

    if (rating < 5) {
      for (let i = 0; i < MAX_RATING - rating; i++) {
        icons.push(<Icon key={i + rating} className="far fa-lightbulb" />);
      }
    }

    return <IconGroup>{icons}</IconGroup>;
  }
}

export default IdeaRating;
