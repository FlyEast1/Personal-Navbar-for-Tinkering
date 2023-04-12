import React, {Component} from "react";
import { NavLink } from "react-router-dom";
import {Navbar, Nav} from 'react-bootstrap';


function Navigation() {
    return(
            <Navbar className="navbar">
                <NavLink style={{marginRight:'.5em'}} to='/'>Home {''}</NavLink>
                <NavLink style={{marginRight:'.5em'}} to='/Department'>Department {''}</NavLink>
                <NavLink style={{marginRight:'.5em'}} to='/Services'>Financial Services {''}</NavLink>
                <NavLink style={{marginRight:'.5em'}} to='/Contacts'>Contact Us {''}</NavLink>
            </Navbar>
    );
};

export default Navigation;