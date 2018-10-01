import React, { Component } from 'react';
import { Router, browserHistory, Route, Link } from 'react-router';
import logo from './lighten_up_world.svg';
import { effectNames, dataNames, gamesNames } from './buttonNames';
import { Snake } from './snake'
import { FaHome } from 'react-icons/lib/fa';
import './App.css';


const HomePage = (props, context) => (
  <div className="container">
    <div className="page-header" id="banner">
        <div className="row">
          <div className="col-lg-8 col-md-7 col-sm-6">
            <h1>Lighten Up, World</h1>
            <p className="lead">Representing Glow-bal data</p>
          </div>
        </div>
      </div>
    <div className="row">
      <div className="col-sm-6">
        <div className="card text-white bg-primary mb-3">
          <div className="card-body">
            <h5 className="card-title">Effects</h5>
            <p className="card-text">Make the world pretty.</p>
            <a href="effects" className="btn btn-secondary"> >> </a>
          </div>
        </div>
      </div>
      <div className="col-sm-6">
        <div className="card text-white bg-primary mb-3">
          <div className="card-body">
            <h5 className="card-title">Data</h5>
            <p className="card-text">Add a splash of information.</p>
            <a href="data" className="btn btn-secondary"> >> </a>
          </div>
        </div>
      </div>
    </div>
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item active" aria-current="page">Home</li>
      </ol>
    </nav>
  </div>
);

const EffectPage = ({title, buttons}) => (
  <div className="container">
    <div className="page-header" id="banner">
        <div className="row">
          <div className="col-lg-8 col-md-7 col-sm-6">
            <h1><a href="/">Lighten Up, World</a></h1>
            <p className="lead">Representing Glow-bal data</p>
          </div>
        </div>
      </div>
      <div className="jumbotron">
        <h1 className="display-3">{title}</h1>
        <hr className="my-4"/>
        <Buttons buttons={buttons}/>
      </div>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><a href="/">Home</a></li>
          <li className="breadcrumb-item active" aria-current="page">{title}</li>
        </ol>
      </nav>
  </div>
);

class EffectButton extends React.Component {
    sendCommand(name) {
        if ("WebSocket" in window) {
            const ws = new WebSocket("ws://world.map:9090");
            ws.onopen = function () {
              ws.send(this.props.id)
              ws.close();
            };
        } else {
            alert("WebSockets are not supported by your browser");
        }
    }

    render() {
        return (
          <div className="card col-sm-12 col-md-6 col-lg-4">
            <img className="card-img-top" src={"./img/sim_" + this.props.id + ".gif"}/>
              <div className="card-body text-center">
                <button type="button" className="btn btn-primary" onClick={() => {this.sendCommand(this.props.name)}}>{this.props.name}</button>
              </div>
          </div>
        );
    }
}

class Buttons extends React.Component {

  renderButtons = () => {
    let buttonArr = [];

    for (let i = 0; i < this.props.buttons.length; i++) {
      buttonArr.push(
        <EffectButton
          key={this.props.buttons[i].id}
          id={this.props.buttons[i].machine}
          name={this.props.buttons[i].name}/>
      );
    };
    return buttonArr;
  };

  render() {
    return (
      <div className="row">
        {this.renderButtons()}
      </div>
    );
  }
}

const Effects = () => (
  <EffectPage title="Effects" buttons={effectNames}/>
);

const Data = () => (
  <EffectPage title="Data" buttons={dataNames}/>
);

//const Games = () => (
//  <GamesPage title="Games" buttons={gamesNames}/>
//);

{/* TODO: move to separate js file and import */}
const Risk = (props) => (
  <div className="jumbotron">
    <h1 className="display-3">Risk!</h1>
    <p className="lead">To Display:
      Number of troops, number of occupied countries,
      number of troops to deploy, outline of selected country and
      number of populated troops, colour/player who occupies selected country,
      Arrows to navigate countries.</p>
    <hr className="my-4"/>
    <p>Coming Soon...</p>
  </div>
);

class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={HomePage}/>
        <Route path="/effects" component={Effects}/>
        <Route path="/data" component={Data}/>
          {/*<Route path="/games" component={Games}/>*/}
        <Route path="/snake" component={Snake}/>
        <Route path="/risk" component={Risk}/>
      </Router>
    );
  }
}

export default App
