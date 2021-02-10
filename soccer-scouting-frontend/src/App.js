import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import Players from './components/Players'
import PlayersCard from './components/PlayersCard'
import Teams from './components/Teams'
import Navbar from './components/Navbar'
import Bookmarked from './components/Bookmarked'
import { fetchPlayersStart, fetchPlayersSuccess } from './actions/players'

class App extends React.Component {
  componentDidMount(){
    this.props.fetchPlayersStart()

    fetch('http://localhost:4000/players')
    .then(resp => resp.json())
    .then(playersArr => {
        console.log(playersArr)
        this.props.fetchPlayersSuccess(playersArr)
    })
  }

  render(){
  return (
    <Router>
    <ul>
      <li>
        <Link to="/">Bookmarked</Link>
      </li>
      <li>
        <Link to="/players">Players</Link>
      </li>
      <li>
        <Link to="/teams">Teams</Link>
      </li>
    </ul>
      <Switch>
      <Route path="/players">
        <Players />
      </Route>
      <Route path="/teams">
        <Teams />
      </Route>
      <Route path="/">
        <Bookmarked />
      </Route>
      </Switch>
    </Router>
  );
  }
}


const mapStateToProps = (state) => {
  return {
    loading: state.loading
  }
}

const mapDispatchToProps = {
  fetchPlayersStart: fetchPlayersStart,
  fetchPlayersSuccess: fetchPlayersSuccess
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
