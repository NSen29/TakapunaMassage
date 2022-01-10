import React, { Component } from 'react';
import Link from 'react-router-dom/Link';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';


export class Navbar extends Component {
    render() {
        return (
            <AppBar>
                <Toolbar className="nav-container">
                    <Button color="inherit" component={Link} to="/">Home</Button>
                    <Button color="inherit" component={Link} to="/booking">Book now</Button>
                    <Button color="inherit" component={Link} to="/about">About us</Button>
                    <Button color="inherit" component={Link} to="/pricing">Pricing</Button>
                    <Button color="inherit" component={Link} to="/contact-us">Contact us</Button>
                </Toolbar>
            </AppBar>
        )
    }
}

export default Navbar
