import React, { Component } from 'react';


// Import styles
import './Navigation.css';

class Navigation extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark">
        <a href="" className="text-white">
          { this.props.title }
          <span className="badge badge-pill badge-light ml-2">{ this.props.nTareas }</span>
        </a>
      </nav>
    );
  }
}

export default Navigation;
