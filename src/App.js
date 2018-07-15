import React, { Component } from 'react';
import { Router, browserHistory, Route, Link } from 'react-router';
import BrowserRouter from 'react-router-dom'
import logo from './lighten_up_world.svg';
import './App.css';

const HomePage = (props, context) => (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Lighten Up, World</h1>
        <h2>Home</h2>
          <label>
            <Link className="NavButton" to="/effects">Effects</Link>
          </label>
          <label>
            <Link className="NavButton" to="live_data">Live Data</Link>
          </label>
          <label>
            <Link className="NavButton" to="games">Games</Link>
          </label>
      </div>
    </div>
);

const Page = ({title}) => (
  <div className="App">
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1>{title}</h1>
    </div>
  </div>
);

const Effects = () => (
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
        <Route path="/" component={HomePage}/>
        <Route path="/effects" component={Effects}/>
        <Route path="/live_data" component={Live_Data}/>
        <Route path="/games" component={Games}/>
      </Router>
    );
  }
}

export default App
