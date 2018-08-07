// Import React
import React, { Component } from 'react';

// Import React Logo
import logo from './logo.svg';

// Import app styles
import './App.css';

// Import navigation Component
import Navigation from './components/Navigation';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />

        <img src={logo} className="App-logo" alt="logo" />
      </div>
    );
  }
}

export default App;
