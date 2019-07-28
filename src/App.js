import React, { Component } from 'react';
import Auth from './auth/Auth';
import './App.css';

class App extends Component {
  
  render() {
    return (
      <div className="app">
        <main>
          <Auth />
        </main>
      </div>
    )
  }
}

export default App;
