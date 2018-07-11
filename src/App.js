import React, { Component } from 'react';
import { Router, browserHistory, Route, Link } from 'react-router';
import logo from './lighten_up_world.svg';
import './App.css';

const Page = ({ title }) => (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Lighten Up, World</h1>
        <h2>{title}</h2>
      </div>
      <form>
        <label>
          <input class="NavButton" type="button" value="Effects"/>
        </label>
        <label>
          <input class="NavButton" type="button" value="Live Data"/>
        </label>
        <label>
          <input class="NavButton" type="button" value="Games"/>
        </label>
      </form>
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
