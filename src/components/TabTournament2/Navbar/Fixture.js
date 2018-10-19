import React from 'react';
import {
    Route,
    NavLink,
    HashRouter
  } from "react-router-dom";
  import FixtureCard from './Fixture/FixtureCard';

export default class Fixture extends React.Component{

    render(){
        return(
            <HashRouter>
            <div>
                <div id='GameWeek Section' style= {{paddingLeft:'40px',display:'flex',overflow:'auto',paddingTop:'15px', overflowY: 'hidden', width: '1185px', whiteSpace:'nowrap', }}>
                        <NavLink  to="/Fixture/GW1"> <div id="Game weeek 1" style={{padding:'7px',  paddingLeft:'17px', paddingRight:'50px',backgroundColor:'#2f8d2b', borderRadius:'15px', width:'130px', height:'35px', fontFamily:'Montserrat',fontWeight:'600',fontSize:'14px',color:'#FFFFFF', marginRight:'17px'}}> Gameweek 1</div>    </NavLink>
                        <NavLink to='/Fixture/GW2'>  <div  style={{paddingTop:'7px', paddingLeft:'17px', paddingRight:'50px' ,backgroundColor:'#efefef', borderRadius:'15px', width:'130px', height:'35px', fontFamily:'Montserrat',fontWeight:'600',fontSize:'14px',color:'#000000',marginRight:'17px'}}> Gameweek 2</div></NavLink>
                        <NavLink to='/Fixture/GW3'> <div  style={{paddingTop:'7px', paddingLeft:'17px', paddingRight:'50px', backgroundColor:'#efefef', borderRadius:'15px', width:'130px', height:'35px', fontFamily:'Montserrat',fontWeight:'600',fontSize:'14px',color:'#000000',marginRight:'17px'}}> Gameweek 3</div></NavLink>
                        <NavLink to='/Fixture/GW4'><div  style={{paddingTop:'7px', paddingLeft:'17px', paddingRight:'50px', backgroundColor:'#efefef', borderRadius:'15px', width:'130px', height:'35px', fontFamily:'Montserrat',fontWeight:'600',fontSize:'14px',color:'#000000',marginRight:'17px'}}> Gameweek 4</div></NavLink>
                        <NavLink to='/Fixture/GW5'> <div  style={{paddingTop:'7px', paddingLeft:'17px', paddingRight:'50px', backgroundColor:'#efefef', borderRadius:'15px', width:'130px', height:'35px', fontFamily:'Montserrat',fontWeight:'600',fontSize:'14px',color:'#000000',marginRight:'17px'}}> Gameweek 5</div></NavLink>
                        <NavLink to='/Fixture/GW6'> <div  style={{paddingTop:'7px', paddingLeft:'17px', paddingRight:'50px', backgroundColor:'#efefef', borderRadius:'15px', width:'130px', height:'35px', fontFamily:'Montserrat',fontWeight:'600',fontSize:'14px',color:'#000000',marginRight:'17px'}}> Gameweek 6</div></NavLink>
                        <NavLink to='/Fixture/GW7'> <div  style={{paddingTop:'7px', paddingLeft:'17px', paddingRight:'50px', backgroundColor:'#efefef', borderRadius:'15px', width:'130px', height:'35px', fontFamily:'Montserrat',fontWeight:'600',fontSize:'14px',color:'#000000',marginRight:'17px'}}> Gameweek 7</div></NavLink>
                        <NavLink to='/Fixture/GW8'> <div  style={{paddingTop:'7px', paddingLeft:'17px', paddingRight:'50px', backgroundColor:'#efefef', borderRadius:'15px', width:'130px', height:'35px', fontFamily:'Montserrat',fontWeight:'600',fontSize:'14px',color:'#000000',marginRight:'17px'}}> Gameweek 8</div></NavLink>
                        <NavLink to='/Fixture/GW9'><div  style={{paddingTop:'7px', paddingLeft:'17px', paddingRight:'50px', backgroundColor:'#efefef', borderRadius:'15px', width:'130px', height:'35px', fontFamily:'Montserrat',fontWeight:'600',fontSize:'14px',color:'#000000',marginRight:'17px'}}> Gameweek 9</div></NavLink>
                        <NavLink to='/Fixture/GW10'> <div  style={{paddingTop:'7px', paddingLeft:'17px', paddingRight:'50px', backgroundColor:'#efefef', borderRadius:'15px', width:'130px', height:'35px', fontFamily:'Montserrat',fontWeight:'600',fontSize:'14px',color:'#000000',marginRight:'17px'}}> Gameweek 10</div></NavLink>
                        <NavLink to='/Fixture/GW11'><div  style={{paddingTop:'7px', paddingLeft:'17px', paddingRight:'50px', backgroundColor:'#efefef', borderRadius:'15px', width:'130px', height:'35px', fontFamily:'Montserrat',fontWeight:'600',fontSize:'14px',color:'#000000',marginRight:'17px'}}> Gameweek 11</div></NavLink>

                </div>
                <div className="content"> 
                    <Route path= "/Fixture/GW1" component={FixtureCard} />
                    <Route path= "/Fixture/GW2" component={FixtureCard} />
                    <Route path= "/Fixture/GW3" component={FixtureCard} />
                    <Route path= "/Fixture/GW4" component={FixtureCard} />
                    <Route path= "/Fixture/GW5" component={FixtureCard} />
                    <Route path= "/Fixture/GW6" component={FixtureCard} />
                    <Route path= "/Fixture/GW7" component={FixtureCard} />
                    <Route path= "/Fixture/GW8" component={FixtureCard} />
                    <Route path= "/Fixture/GW9" component={FixtureCard} />
                    <Route path= "/Fixture/GW10" component={FixtureCard} />
                    <Route path= "/Fixture/GW11" component={FixtureCard} />
                </div>
            </div>
            </HashRouter>
        )
    }
    
}
