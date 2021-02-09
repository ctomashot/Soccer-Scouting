import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Players from './components/Players'
import Teams from './components/Teams'
import Navbar from './components/Navbar'
import Bookmarked from './components/Bookmarked'

class App extends React.Component {
  componentDidMount(){
    
  }

  render(){
  return (
    <main>
      <Navbar />
      <Switch>
        <Route path ='/' component={Bookmarked} exact/>
        <Route path ='/players' component={Players}/>
        <Route path ='/teams' component={Teams}/>
        <Route component={Error} />
      </Switch>
    </main>
  );
  }
}

export default App;
