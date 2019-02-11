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

    constructor(props){
        super(props);
        this.state={
            sponsor:this.props.sponsor,
            info:{},
            point:{},
            teams:{}
        }
    }
    
    points = () => {
        fetch(`http://52.66.194.65/api/football/tournament_point/?tournament_id=${this.props.baba}`, {
        method: 'GET',
        headers:
        {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer iVX5i6BYXMBFD2gCR5HHG1jtJMuHJK',
            }
    }).then( response => { let sir= response.json();
        return sir;
    }).then(body => {{this.setState({
        point:body
    })}}).catch(err => console.log(err, 'Error aa gaya Points mai'));
    }

    teams =()=>{
        fetch(`http://52.66.194.65/api/tournament/v1/profile/?form_type=teams&tournament_id=${this.props.baba}`, {
        method: 'GET',
        headers:
        {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer iVX5i6BYXMBFD2gCR5HHG1jtJMuHJK',
            }
    }).then( response => { let sisi= response.json();
        return sisi;
    }).then(blob => {{this.setState({
        teams:blob
    })}}).catch(err => console.log(err, 'Error aa gya Teams mai'));
    }

UNSAFE_componentWillMount()
                {
        this.points()
        console.log("Api Hit",this.state.point);
        this.teams()
                }
    
    render() {
    
        this.state.point;
        this.state.teams;
        
    return (
        <HashRouter>
        <div style={{paddingTop:'15px'}}>
        {/* {console.log("This is points Table In Navbar Man",this.state.point)} */}
        {console.log("This is Team Data ", this.state.teams)}
            <ul className="header" style={{display:'flex', listStyleType:'none', textDecoration:'none',textDecorationColor:'#FFF',textDecorationStyle:'bold', backgroundColor:'#38454f',justifyContent:'space-around',paddingLeft:'5px',padddingRight:'5px',paddingTop:'9px',paddingBottom:'9px',color:'#FFF !important',}} >
            {/* <NavLink to="/"></NavLink> */}
            <li><NavLink style= {{textDecoration:'none', color:"#fff",fontWeight:'bold'}} to="/Info"> Information</NavLink></li>
            {/* <li><NavLink to="/Fixture">Fixture</NavLink></li> */}
            <li><NavLink style= {{textDecoration:'none',color:'#fff',fontWeight:'bold'}} to="/Points">Points Table</NavLink></li>
            <li><NavLink style= {{textDecoration:'none',color:'#fff',fontWeight:'bold'}} to="/Stats">Stats</NavLink></li>
            {/* <li><NavLink to="/Awards">Awards</NavLink></li> */}
            <li><NavLink style= {{textDecoration:'none',color:'#fff',fontWeight:'bold'}} to="/Teams">Teams</NavLink></li>
            {/* <li><NavLink to="/Gallery">Gallery</NavLink></li> */}
            </ul>
            <div className="content" style={{backgroundColor:'#FFFFFF'}}>
                    <Route exact path="/"/>
                    {/* <Route path="/Info" component={Information}/> */}
                    <Route exact path="/Info" render={()=> { return <Information info={this.props.sponsor}/> }}/>
                    <Route path="/Fixture" component= {Fixture}/>
                    <Route path="/Points" render={()=>{ return <Pointstable points={this.state.point} id={this.props.id} /> }}/>
                    <Route path="/Stats"  render={()=>{return <Stats stats={this.stats} />}}/>
                    <Route path="/Awards" component= {Awards}/>
                    <Route path="/Teams" render = { ()=>{ return <Teams teams={this.state.team} id={this.props.id}/> }}/>
                    <Route path="/Gallery" component= {Gallery}/>
            </div>
        </div>
        </HashRouter>
    );
    }
}

export default Navbar;