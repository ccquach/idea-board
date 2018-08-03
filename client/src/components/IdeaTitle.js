import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Title = styled.input`
  border: none;
  font-size: 1.7rem;
  letter-spacing: 0.5px;
  text-align: center;
  color: #273c75;
  padding-right: 3rem;
  width: 100%;
`;

class IdeaTitle extends Component {
  static propTypes = {
    title: PropTypes.string,
    updateIdea: PropTypes.func
  };

  state = {
    title: this.props.title
  };

  render() {
    const { title } = this.state;
    return (
      <Title
        type="text"
        maxLength="20"
        className="card-header"
        value={title}
        onChange={e => this.setState({ title: e.target.value })}
        onBlur={() => this.props.updateIdea(this.state)}
      />
    );
  }
}

export default IdeaTitle;
