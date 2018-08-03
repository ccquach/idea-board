import React from 'react';
import PropTypes from 'prop-types';
import IdeaTitle from './IdeaTitle';
import IdeaContent from './IdeaContent';

const IdeaForm = ({ title, content }) => {
  return (
    <form>
      <IdeaTitle title={title} />
      <IdeaContent content={content} />
    </form>
  );
};

IdeaForm.propType = {
  title: PropTypes.string,
  content: PropTypes.string
};

export default IdeaForm;
