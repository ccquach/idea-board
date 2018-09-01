import React from 'react';
import PropTypes from 'prop-types';

import IdeaTitle from '../../containers/Idea/IdeaTitle';
import IdeaContent from './IdeaContent';

const IdeaForm = ({ id, title, content, updateIdea }) => {
  return (
    <form onSubmit={e => e.preventDefault()}>
      <IdeaTitle id={id} title={title} updateIdea={updateIdea} />
      <IdeaContent id={id} content={content} updateIdea={updateIdea} />
    </form>
  );
};

IdeaForm.propType = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string,
  content: PropTypes.string,
  updateIdea: PropTypes.func,
};

export default IdeaForm;
