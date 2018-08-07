import React, { Component } from 'react';
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

class IdeaContent extends Component {
  static propTypes = {
    content: PropTypes.string,
    updateIdea: PropTypes.func.isRequired
  };

  state = {
    content: this.props.content,
    isModified: false
  };

  handleChange = e => {
    if (e.target.value !== this.state.content)
      this.setState({ isModified: true });
    this.setState({ content: e.target.value });
  };

  handleUpdate = () => {
    if (this.state.isModified)
      this.props
        .updateIdea(this.state)
        .then(() => this.setState({ isModified: false }));
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

export default IdeaContent;
