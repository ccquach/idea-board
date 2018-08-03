import React from 'react';
import PropTypes from 'prop-types';
import IdeaTitle from './IdeaTitle';
import IdeaContent from './IdeaContent';

const IdeaForm = ({ title, content, updateIdea }) => {
  return (
    <form onSubmit={e => e.preventDefault()}>
      <IdeaTitle title={title} updateIdea={updateIdea} />
      <IdeaContent content={content} updateIdea={updateIdea} />
    </form>
  );
};

IdeaForm.propType = {
  title: PropTypes.string,
  content: PropTypes.string,
  updateIdea: PropTypes.func
};

export default IdeaForm;
