import './App.css';
import './Login.css';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux'
import Login from './components/Login'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import Players from './components/Players'
import PlayersCard from './components/PlayersCard'
import Teams from './components/Teams'
import Navbar from './components/Navbar'
import Bookmarked from './components/Bookmarked'
import { fetchPlayersStart, fetchPlayersSuccess } from './actions/players'
import { fetchTeamsStart, fetchTeamsSuccess } from './actions/teams'

class App extends React.Component {


  componentDidMount(){
    this.props.fetchPlayersStart()

    fetch('http://localhost:4000/players')
    .then(resp => resp.json())
    .then(playersArr => {
      console.log(playersArr)
      
        this.props.fetchPlayersSuccess(playersArr)
    })

    this.props.fetchTeamsStart()

    fetch('http://localhost:4000/teams')
    .then(resp => resp.json())
    .then(teamsArr => {
      teamsArr.sort((a,b) => (a.position > b.position) ? 1 : ((b.position > a.position) ? -1 : 0))
      console.log(teamsArr)
        this.props.fetchTeamsSuccess(teamsArr)
    })
  }



  render(){

  return (
    <Router>
      <Navbar/>
      <Switch>
      <Route path="/players">
        <Players />
      </Route>
      <Route path="/teams">
        <Teams />
      </Route>
      <Route path="/login">
        <Login />
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
  fetchPlayersSuccess: fetchPlayersSuccess,
  fetchTeamsStart: fetchTeamsStart,
  fetchTeamsSuccess: fetchTeamsSuccess
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
