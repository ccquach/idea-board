import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { removeError } from '../../store/actions/errors';

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
  state = {
    title: this.props.title,
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.errors.message) return { title: nextProps.title };
    return null;
  }

  handleChange = e => {
    this.props.removeError();
    this.setState({ title: e.target.value });
  };

  handleUpdate = () => {
    if (this.state.title !== this.props.title)
      this.props.updateIdea(this.props.id, this.state);
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

IdeaTitle.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  updateIdea: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  errors: state.errors,
});

export default connect(
  mapStateToProps,
  { removeError }
)(IdeaTitle);
