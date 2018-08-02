import React, { Component } from 'react';
import { Router, browserHistory, Route, Link } from 'react-router';
import logo from './lighten_up_world.svg';
import { effectNames, dataNames, gamesNames } from './buttonNames';
import { Snake } from './snake'
import {FaHome} from 'react-icons/lib/fa';
import './App.css';

const HomePage = (props, context) => (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Lighten Up, World</h1>
        <h2>Home</h2>
          <PageLink link="effects" cName="NavButton"/>
          <PageLink link="live_data" cName="NavButton" />
          <PageLink link="games" cName="NavButton" />
      </div>
    </div>
);

const EffectPage = ({title, buttons}) => (
  <div className="App">
    <div className="App-header">
      <Link className="HomeButton" to="/" style={{ textDecoration: 'none' }}><FaHome /> Home </Link>
      <img src={logo} className="App-logo" alt="logo" />
      <h1>{title}</h1>
    </div>
    <Buttons buttons={buttons}/>
  </div>
);

const GamesPage = ({title, buttons}) => (
  <div className="App">
    <div className="App-header">
      <Link className="HomeButton" to="/" style={{ textDecoration: 'none' }}><FaHome /> Home </Link>
      <img src={logo} className="App-logo" alt="logo" />
      <h1>{title}</h1>
    </div>
    <PageLink link="snake" cName="EffectButton"/>
    <PageLink link="risk" cName="EffectButton"/>
  </div>
);

class PageLink extends React.Component {
  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  render() {
    return(
      <label>
        <Link className={this.props.cName}
              to={"/" + this.props.link}
              style={{ textDecoration: 'none' }}
        >{this.capitalizeFirstLetter(this.props.link)}</Link>
      </label>
    );
  }
};

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
  <EffectPage title="Effects" buttons={effectNames}/>
);

const Live_Data = (props) => (
  <EffectPage title="Live Data" buttons={dataNames}/>
);

const Games = (props) => (
  <GamesPage title="Games" buttons={gamesNames}/>
);

{/* TODO: move to separate js file and import */}
const Risk = (props) => (
  <div className="blank">
    <h1>Risk</h1>
    {/* To Display:
      Number of troops, number of occupied countries,
      number of troops to deploy, outline of selected country and
      number of populated troops, colour/player who occupies selected country,
      Arrows to navigate countries.
       */}
  </div>
);

class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={HomePage}/>
        <Route path="/effects" component={Effects}/>
        <Route path="/live_data" component={Live_Data}/>
        <Route path="/games" component={Games}/>
        <Route path="/snake" component={Snake}/>
        <Route path="/risk" component={Risk}/>
      </Router>
    );
  }
}

export default App
