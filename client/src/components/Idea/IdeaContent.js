import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Content = styled.textarea`
  resize: none;
  border: none;
  font-size: 1.4rem;
  padding: 1.5rem 1.75rem;
  width: 95%;
  margin-left: 2.5%;
`;

class IdeaContent extends PureComponent {
  state = {
    content: this.props.content,
  };

  handleChange = e => {
    this.setState({ content: e.target.value });
  };

  handleUpdate = () => {
    if (this.state.content !== this.props.content)
      this.props.updateIdea(this.props.id, this.state);
  };

  render() {
    const { content } = this.state;
    return (
      <Content
        rows="5"
        columns="3"
        maxLength="100"
        className="card-text"
        value={content}
        onChange={this.handleChange}
        onBlur={this.handleUpdate}
      />
    );
  }
}

IdeaContent.propTypes = {
  id: PropTypes.string.isRequired,
  content: PropTypes.string,
  updateIdea: PropTypes.func.isRequired,
};

export default IdeaContent;
