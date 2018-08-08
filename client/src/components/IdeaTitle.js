import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Title = styled.input`
  border: none;
  font-size: 1.7rem;
  letter-spacing: 0.5px;
  text-align: center;
  color: #642b73;
  padding-right: 3rem;
  width: 100%;
`;

class IdeaTitle extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    updateIdea: PropTypes.func.isRequired
  };

  state = {
    title: this.props.title,
    prevTitle: this.props.title,
    isModified: false
  };

  handleChange = e => {
    if (e.target.value !== this.state.title)
      this.setState({ isModified: true });
    this.setState({ prevTitle: this.state.title });
    this.setState({ title: e.target.value });
  };

  handleUpdate = () => {
    if (this.state.isModified) {
      this.props
        .updateIdea(this.state)
        .then(() => this.setState({ isModified: false }))
        .catch(() => {
          this.setState({ title: this.state.prevTitle });
          return;
        });
    }
  };

  render() {
    const { title } = this.state;
    return (
      <Title
        type="text"
        maxLength="20"
        className="card-header"
        value={title}
        onChange={this.handleChange}
        onBlur={this.handleUpdate}
      />
    );
  }
}

export default IdeaTitle;
