import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switcher } from "react-router-dom";
import AuthForm from './Components/AuthForm/AuthForm';
import RegForm from './Components/RegForm/RegForm';
import './App.css';

class App extends Component {
  
  render() {
    return (
      <div className="app">
        <main className="main-container">
          <Router>
            <Route path="/auth" component={AuthForm} />
            <Route path="/reg" component={RegForm} />
          </Router>
        </main>
      </div>
    )
  }
}

export default App;
