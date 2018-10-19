import React, { Component } from "react";
import {
    Route,
    NavLink,
    HashRouter
  } from "react-router-dom";

import Awards from './Navbar/Awards';
import Fixture from './Navbar/Fixture';
import Gallery from './Navbar/Gallery';
import Pointstable from './Navbar/PointsTable';
import Stats from './Navbar/Stats';
import Teams from './Navbar/Team';
import Information from './Navbar/Information';



class Navbar extends Component {
    render() {
    return (
        <HashRouter>
        <div style={{paddingTop:'15px'}}>
            <ul className="header" style={{display:'flex', listStyleType:'none', textDecoration:'none',textDecorationColor:'#FFF',textDecorationStyle:'bold', backgroundColor:'#38454f',justifyContent:'space-around',padding:'5px',color:'#FFF !important'}} >
            {/* <NavLink to="/"></NavLink> */}
            <li><NavLink to="/Info"> Information</NavLink></li>
            <li><NavLink to="/Fixture">Fixture</NavLink></li>
            <li><NavLink to="/Points">Points Table</NavLink></li>
            <li><NavLink to="/Stats">Stats</NavLink></li>
            <li><NavLink to="/Awards">Awards</NavLink></li>
            <li><NavLink to="/Team">Teams</NavLink></li>
            <li><NavLink to="/Gallery">Gallery</NavLink></li>
            </ul>
            
            <div className="content" style={{backgroundColor:'#FFFFFF'}}>
                    <Route exact path="/"/>
                    <Route path="/Info" component={Information}/>
                    <Route path="/Fixture" component= {Fixture}/>
                    <Route path="/Points" component= {Pointstable}/>
                    <Route path="/Stats" component= {Stats}/>
                    <Route path="/Awards" component= {Awards}/>
                    <Route path="/Team" component= {Teams}/>
                    <Route path="/Gallery" component= {Gallery}/>
            </div>
        </div>
        </HashRouter>
    );
    }
}

export default Navbar;