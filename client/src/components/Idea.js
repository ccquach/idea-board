import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Moment from 'react-moment';

import IdeaForm from './IdeaForm';
import IdeaRating from './IdeaRating';

const Card = styled.div`
  position: relative;
  min-height: 25rem;
`;

const DeleteButton = styled.a`
  &:link,
  &:visited {
    text-decoration: none;
    color: #212121;
    position: absolute;
    top: 0.7rem;
    right: 1rem;
    font-size: 2rem;
    font-weight: 400;
    line-height: 1;
    cursor: pointer;
    transition: all 0.3s ease-out;
    opacity: ${props => (props.visible ? '1' : '0')};
  }

  &:hover,
  &:active {
    color: #e84118;
  }
`;

const ArchiveButton = styled.button`
  position: absolute;
  bottom: 4rem;
  right: 1.5rem;
  transition: opacity 0.3s ease-out;
  opacity: ${props => (props.visible ? '1' : '0')};
`;

const DateBox = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 1.5rem 1.75rem;
`;

class Idea extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    updatedAt: PropTypes.string.isRequired,
    removeIdea: PropTypes.func.isRequired,
    updateIdea: PropTypes.func.isRequired
  };

  state = {
    hover: false
  };

  render() {
    const {
      title,
      content,
      rating,
      completed,
      updatedAt,
      removeIdea,
      updateIdea
    } = this.props;

    return (
      <div className="col-12 col-sm-6 col-md-4 col-lg-3">
        <Card
          className="card mb-5"
          onMouseEnter={() => this.setState({ hover: true })}
          onMouseLeave={() => this.setState({ hover: false })}
        >
          <DeleteButton
            href="#"
            visible={this.state.hover}
            onClick={removeIdea}
          >
            &times;
          </DeleteButton>

          <IdeaForm title={title} content={content} updateIdea={updateIdea} />

          <ArchiveButton
            className="btn btn-outline-secondary"
            visible={this.state.hover}
            onClick={() => updateIdea({ completed: !completed })}
          >
            {completed ? 'Restore' : 'Archive'}
          </ArchiveButton>

          <IdeaRating rating={rating} updateIdea={updateIdea} />

          <DateBox>
            <Moment format="YYYY/MM/DD">{updatedAt}</Moment>
          </DateBox>
        </Card>
      </div>
    );
  }
}

export default Idea;
