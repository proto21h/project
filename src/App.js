import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import AuthForm from './Components/AuthForm/AuthForm';
import RegForm from './Components/RegForm/RegForm';
import Home from './Components/Home';
import './App.css';


class App extends Component {
  
  render() {
    return (
      <div className="app">
        <main className="main-container">
          <Router>
            <Switch>
              <Route exact path="/" component={Home} />          
              <Route path="/auth" component={AuthForm} />
              <Route path="/reg" component={RegForm} />
            </Switch>  
          </Router>
        </main>
      </div>
    )
  }
}

export default App;
