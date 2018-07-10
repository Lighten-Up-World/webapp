import React, { Component } from 'react';
import { Router, browserHistory, Route, Link } from 'react-router';
import logo from './logo.svg';
import './App.css';

const Page = ({ title }) => (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Lighten Up, World</h1>
        <h2>{title}</h2>
      </div>
      <p>
        <Link to="/">Effects</Link>
      </p>
      <p>
        <Link to="/live_data">Live Data</Link>
      </p>
      <p>
        <Link to="/games">Games</Link>
      </p>
    </div>
);

const Effects = (props) => (
  <Page title="Effects"/>
);

const Live_Data = (props) => (
  <Page title="Live Data"/>
);

const Games = (props) => (
  <Page title="Games"/>
);

class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Effects}/>
        <Route path="/live_data" component={Live_Data}/>
        <Route path="/games" component={Games}/>
      </Router>
    );
  }
}

export default App
