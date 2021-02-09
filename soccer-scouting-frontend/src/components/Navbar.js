import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom'
import Players from './Players'
import Teams from './Teams'
import Bookmarked from './Bookmarked'

function Navbar() {
    return(
        <div>
            <Link to="/">Bookmarked </Link>
            <Link to="/players">Players </Link>
            <Link to="/teams">Teams </Link>
        </div>
    )
}

export default Navbar;