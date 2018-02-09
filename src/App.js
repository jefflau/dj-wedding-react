import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'

class App extends Component {
  render() {
    return (
      <div className="main-wrapper">
        <div className="phuket">
        </div>
        <div className="inner-wrapper">
          <Header />
          <div className="main">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
