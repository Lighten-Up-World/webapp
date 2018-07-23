import React, { Component } from 'react';
import { Router, browserHistory, Route, Link } from 'react-router';
import logo from './lighten_up_world.svg';
import { effectNames, dataNames, gamesNames } from './buttonNames';
import FaHome from 'react-icons/lib/fa/home';
import './App.css';

const HomePage = (props, context) => (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Lighten Up, World</h1>
        <h2>Home</h2>
          <label>
            <Link className="NavButton"
                  to="/effects"
                  style={{ textDecoration: 'none' }}
            >Effects</Link>
          </label>
          <label>
            <Link className="NavButton"
                  to="/live_data"
                  style={{ textDecoration: 'none' }}
            >Live Data</Link>
          </label>
          <label>
            <Link className="NavButton"
                  to="/games"
                  style={{ textDecoration: 'none' }}
            >Games</Link>
          </label>
      </div>
    </div>
);

const PageHeader = ({title, buttons}) => (
  <div className="App">
    {/* TODO: add button to home screen */}
    <div className="App-header">
      <Link className="HomeButton" to="/" style={{ textDecoration: 'none' }}><FaHome /> Home </Link>
      <img src={logo} className="App-logo" alt="logo" />
      <h1>{title}</h1>
    </div>
    <Buttons buttons={buttons}/>
  </div>
);

class Buttons extends React.Component {

  renderButtons = (props) => {
    let buttonArr = [];

    for (let i = 0; i < this.props.buttons.length; i++) {
      buttonArr.push(
        <PageButton
          key={this.props.buttons[i].id}
          name={this.props.buttons[i].name}/>
      );
    };
    return buttonArr;
  };

  render() {
    return (
      <div>
        {this.renderButtons()}
      </div>
    );
  }
};

const PageButton = ({name}) => (
  <label>
    <button className="EffectButton">{name}</button>
  </label>
);

const Effects = () => (
  <PageHeader title="Effects" buttons={effectNames}/>
);

const Live_Data = (props) => (
  <PageHeader title="Live Data" buttons={dataNames}/>
);

const Games = (props) => (
  <PageHeader title="Games" buttons={gamesNames}/>
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
