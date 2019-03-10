import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MainContainer from './MainContainer.jsx'

class NotFound extends Component {
  render() {
    return (
      <MainContainer>
        <h1 className="page-header">{this.props.title}</h1>
        <Link className="navbar-brand" to="/">Please go back to home</Link>
      </MainContainer>
    );
  }
}

export default NotFound
