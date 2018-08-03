import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Moment from 'react-moment';

import IdeaForm from './IdeaForm';
import IdeaRating from './IdeaRating';

const Card = styled.div`
  min-height: 25rem;
`;

const CloseButton = styled.a`
  &:link,
  &:active {
    text-decoration: none;
    color: inherit;
    position: absolute;
    top: 0.7rem;
    right: 1rem;
    font-size: 2rem;
    font-weight: 400;
    line-height: 1;
    cursor: pointer;
    transition: color 0.2s ease-out;
  }

  &:hover {
    color: #e84118;
  }
`;

const DateBox = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 1.5rem 1.75rem;
`;

const Idea = ({ title, content, rating, updatedAt }) => {
  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
      <Card className="card">
        <CloseButton href="#">&times;</CloseButton>
        <IdeaForm title={title} content={content} />
        <IdeaRating rating={rating} />
        <DateBox>
          <Moment format="YYYY/MM/DD">{updatedAt}</Moment>
        </DateBox>
      </Card>
    </div>
  );
};

Idea.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  rating: PropTypes.number,
  updatedAt: PropTypes.string
};

export default Idea;
