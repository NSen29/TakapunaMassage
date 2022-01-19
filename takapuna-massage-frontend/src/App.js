import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import home from './pages/home';
import booking from './pages/booking';
import about from './pages/about';
import pricing from './pages/pricing';
import contact from './pages/contact';
import {Box, Button} from '@material-ui/core'

import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
    <h1> React Material UI | Layout | Box </h1>
    <Box component="span" clone style={{color:'red'}}>
    <Button>Testing</Button>
    </Box>
    </div>
  );
}

export default App
