import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { fetchIdeas, addIdea } from '../store/actions/ideas';

const NavContainer = styled.nav`
  padding: 2rem 2.5rem;
`;

const NewButton = styled.button`
  padding: 1.5rem 4rem;
  text-transform: uppercase;
  font-size: 1.5rem;
  letter-spacing: 0.5px;
`;

const Flash = styled.div`
  display: inline-block;
  float: right;
  border-radius: 3px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  background-color: rgba(39, 60, 117, 0.8);
  color: #f1f1f1;
  font-size: 1.5rem;
  text-transform: uppercase;
  text-align: center;
  padding: 1.5rem 2rem;
`;

export class Navbar extends Component {
  static propTypes = {
    fetchIdeas: PropTypes.func,
    addIdea: PropTypes.func,
    flash: PropTypes.object
  };

  handleNewIdea = () => {
    const newIdea = { title: 'New Idea', rating: 5 };
    this.props
      .addIdea(newIdea)
      .then(() => this.props.fetchIdeas())
      .catch(() => {
        return;
      });
  };

  render() {
    const { flash } = this.props;
    return (
      <NavContainer className="row">
        <div className="col-4">
          <NewButton
            className="btn btn-outline-primary btn-lg"
            onClick={this.handleNewIdea}
          >
            Add new idea
          </NewButton>
        </div>

        <div className="col-4" />

        <div className="col-4">
          {flash.message && <Flash>{flash.message}</Flash>}
        </div>
      </NavContainer>
    );
  }
}

const mapStateToProps = state => ({
  flash: state.flash
});

export default connect(
  mapStateToProps,
  { fetchIdeas, addIdea }
)(Navbar);
