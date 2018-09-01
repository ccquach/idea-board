import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Moment from 'react-moment';

import IdeaForm from './IdeaForm';
import IdeaRating from './IdeaRating';

// #region styles
const Card = styled.div`
  opacity: 0.85;
  color: #212121;
  position: relative;
  min-height: 25rem;
  border: none !important;
  box-shadow: 0 0.3rem 0.6rem rgba(0, 0, 0, 0.16),
    0 0.3rem 0.6rem rgba(0, 0, 0, 0.23);
  transition: all 0.2s ease-out;

  &:hover {
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.19),
      0 0.6rem 0.6rem rgba(0, 0, 0, 0.23);
    transform: scale(1.04);
  }
`;

const DeleteButton = styled.a.attrs({
  href: '#',
})`
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
    color: #c6426e;
  }
`;

const ArchiveButton = styled.button`
  position: absolute;
  bottom: 4rem;
  right: 1.5rem;
  transition: all 0.2s ease-out;
  opacity: ${props => (props.visible ? '1' : '0')};
`;

const DateBox = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 1.5rem 1.75rem;
`;
// #endregion

class Idea extends Component {
  state = {
    hover: false,
  };

  // hover handlers
  handleMouseIn = () => this.setState({ hover: true });
  handleMouseOut = () => this.setState({ hover: false });

  handleRemove = () => {
    this.props.removeIdea(this.props.id);
  };

  render() {
    const {
      id,
      title,
      content,
      rating,
      completed,
      updatedAt,
      updateIdea,
      style,
    } = this.props;

    return (
      // style comes from IdeaList TransitionMotion
      <div className="col-12 col-sm-6 col-md-4 col-lg-3" style={style}>
        <Card
          className="card mb-5"
          onMouseOver={this.handleMouseIn}
          onMouseOut={this.handleMouseOut}
          onMouseEnter={this.handleMouseIn}
          onMouseLeave={this.handleMouseOut}
        >
          <DeleteButton visible={this.state.hover} onClick={this.handleRemove}>
            &times;
          </DeleteButton>

          <IdeaForm
            id={id}
            title={title}
            content={content}
            updateIdea={updateIdea}
          />

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

Idea.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  rating: PropTypes.number.isRequired,
  completed: PropTypes.bool.isRequired,
  updatedAt: PropTypes.string.isRequired,
  removeIdea: PropTypes.func.isRequired,
  updateIdea: PropTypes.func.isRequired,
};

export default Idea;
