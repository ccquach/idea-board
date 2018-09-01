import React, { PureComponent } from 'react';
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

class IdeaTitle extends PureComponent {
  static propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    updateIdea: PropTypes.func.isRequired,
  };

  state = {
    title: this.props.title,
  };

  handleChange = e => {
    this.setState({ title: e.target.value });
  };

  handleUpdate = () => {
    if (this.state.title !== this.props.title)
      this.props.updateIdea(this.props.id, this.state);
  };

  render() {
    const { title } = this.state;
    console.log(`[RE-RENDER] ${title}`);
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
