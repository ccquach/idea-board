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
    updateIdea: PropTypes.func
  };

  state = { content: this.props.content };

  render() {
    const { content } = this.state;
    return (
      <Content
        rows="5"
        columns="3"
        maxLength="100"
        className="card-text"
        value={content}
        onChange={e => this.setState({ content: e.target.value })}
        onBlur={() => this.props.updateIdea(this.state)}
      />
    );
  }
}

export default IdeaContent;
