import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';


//import Card from '../Card/Card';
import UserDetailsCard from '../UserDetailsCard/UserDetailsCard';
import tournamentCard from '../TournamentCard/TournamentCard';
import { Card, Icon, Image } from 'semantic-ui-react';
import { indicator, text, tab, underline, btn } from './styles';
import classNames from 'classnames';

//Importing from  TournamentCard Temporarily
import { boxShadow } from '../TournamentCard/styles';
import location from '../../assets/location.png';
import cricket from '../../assets/cricket.png';
import football from '../../assets/football.png';
import {
  Route,
  NavLink,
  HashRouter,
  Link,Switch
} from "react-router-dom";
import { BrowserRouter as Router } from 'react-router-dom'; 
import RootC from '../TestTourn/RootC';




import tourn1 from '../../assets/tourn1.jpg';
import tourn2 from '../../assets/tourn2.jpg';
import tourn3 from '../../assets/tourn3.jpg';
import ground1 from '../../assets/ground1.jpg';
import ground2 from '../../assets/ground2.jpg';
import ground3 from '../../assets/ground3.jpg';
import LandingPage from '../../screens/LandingPage';
export default class TournamentTab extends React.PureComponent {
  // state = {
  //   value: 0,
  // };

//Constructor to receive props from landing Page Data 
  constructor(props){
    super(props);
    this.state={
      value:0,
      data:null,
    }

}
  


clickHandler = value => {
    this.setState({ value });
  };
  TournamentCardResponse= {
    "data" :[{
      "Name": "Roots Premier League (Women)",
      "Location": "St.Andrews, Mumbai",
      "type": "Football",
      "image":tourn1
    },
    {
    "Name": "Adidas Creator League",
    "Location": "The Dome, Gurgaon",
    "type": "Football",
    "image":tourn2
  },{
    "Name": "Roots Premier League-N",
    "Location": "St.Andrews, Mumbai",
    "type": "Football",
    "image":tourn3
  }
  ]
  }

  GroundCardResponse= {
  "data" :[{
    "Name": "St. Andrews",
    "Location": "Mumbai",
    "type": "Football",
    "image": ground1
  },
  {
    "Name": "Quantum",
    "Location": "Delhi",
    "type": "Football",
    "image": ground2
  },{
    "Name": "Adidas- The Base",
    "Location": "Delhi",
    "type": "Football",
    "image": ground3
  }
  ]
}

//


// RootsCentral = () => {
//   fetch('52.66.194.65/api/tournament/v1/profile/?form_type=basic&tournament_id=143', {
//     method: 'GET',
//     headers:
//     {
//     'Authorization': 'Bearer iVX5i6BYXMBFD2gCR5HHG1jtJMuHJK',
//     'Content-Type': 'application/json',
//       }
// }).then( response => {return response.json();}).then(bluh=> 
// { this.setState=({
//   data:bluh
// })
//   console.log(bluh,'Data for the Tournament is coming in from the API Hitting URL') })
//   .catch(err => {console.log(err)});
// {<RootC blob="Bluh bitch"/>}
// }



//Tournaments Previously Done without the handling data with the API Integration Part 
  // tournaments = () => {
  //   return (
  // <div className={'d-flex flex-column w-100 align-items-center'}>
  //   <div style={{display : 'flex', justifyContent: 'space-between', width: '70%', marginLeft: '30px'}}>
  //     {
  //         this.state.value? this.GroundCardResponse.data.map((e,i)=>{return tournamentCard(e)}):this.TournamentCardResponse.data.map((e,i)=>{return tournamentCard(e)}) 
  //     }
  //   </div>
  //   <div className={'d-flex w-100 justify-content-center'} style={{color: 'white'}} >
  //   See All {this.state.value===0?'Tournaments':'Grounds'} >
  //   </div>
  // </div>
  // );
  // }

  tournaments= () =>{
    return(
      
      <div style={{ display: 'flex', justifyContent:'space-around'}}>
      <NavLink  to="/TPL" style={{textDecoration:'none'}} >
        <div >
                <Card style= {{borderRadius: '12px', height: '311px', width: '270px'}} className={classNames(boxShadow, 'my-5')}>
                    <Image src= {this.TournamentCardResponse.data[0].image} style={{width: '100%',height:'200px', borderTopLeftRadius:'12px',borderTopRightRadius:'12px'}}/>
                        <div style = {{paddingLeft:'16px',display:'flex'}}>
                  <Card.Content>
                  <Card.Header style= {{fontFamily: 'Rubik',fontWeight:'600', marginTop: '16px',letterSpacing: 'normal', color: '#000'}}>{this.TournamentCardResponse.data[0].Name}</Card.Header>
                      <div>
                          <div className = {'d-flex mt-1'}>
                          {<div><img src={location} style={{height: '17px', width:'12px'}}/></div>}
                              <div><Card.Description className={'d-flex align-items-center'} style={{fontFamily: 'Rubik', color: '#565555', paddingLeft:'15px', fontSize:'0.8rem', height:'23px'}}>{this.TournamentCardResponse.data[0].Location}</Card.Description></div>
                          </div>
                          <div style={{display :'flex'}}>
                          {<div> <img src={cricket} style={{height: '14px', width:'14px'}}/> </div>}
                              <div className={'d-flex align-items-center'} style={{fontFamily: 'Rubik', color: '#565555', paddingLeft:'15px', fontSize:'0.8rem', height:'23px'}}><Card.Description>{this.TournamentCardResponse.data[0].type}</Card.Description></div>
                                  </div>
                              </div>
                          </Card.Content>
                      </div>
                  </Card>
          </div>
        </NavLink>
          
        <NavLink to="/ACL" style={{textDecoration:'none'}}>
          <div>
    <Card style={{borderRadius: '12px', height: '311px', width: '270px'}} className={classNames(boxShadow, 'my-5')}>
        <Image src={this.TournamentCardResponse.data[1].image} style={{width: '100%',height:'200px', borderTopLeftRadius:'12px',borderTopRightRadius:'12px'}}/>
        <div style = {{paddingLeft:'16px',display:'flex'}}>
            <Card.Content>
            <Card.Header style={{fontFamily: 'Rubik',fontWeight:'600', marginTop: '16px',letterSpacing: 'normal', color: '#000'}}>{this.TournamentCardResponse.data[1].Name}</Card.Header>
                <div>
                    <div className={'d-flex mt-1'}>
                    {<div><img src={location} style={{height: '17px', width:'12px'}}/></div>}
                        <div><Card.Description className={'d-flex align-items-center'} style={{fontFamily: 'Rubik', color: '#565555', paddingLeft:'15px', fontSize:'0.8rem', height:'23px'}}>{this.TournamentCardResponse.data[1].Location}</Card.Description></div>
                    </div>
                    <div style={{display :'flex'}}>
                    {<div><img src={football} style={{height: '14px', width:'14px'}}/></div>}
                        <div className={'d-flex align-items-center'} style={{fontFamily: 'Rubik', color: '#565555', paddingLeft:'15px', fontSize:'0.8rem', height:'23px'}}><Card.Description>{this.TournamentCardResponse.data[1].type}</Card.Description></div>
                    </div>
                </div>
            </Card.Content>
        </div>
    </Card>
    
          </div>
          </NavLink>  
          
          <NavLink to="/RPL" style={{textDecoration:'none'}}>
          <div>
      <Card style={{borderRadius: '12px', height: '311px', width: '270px'}} className={classNames(boxShadow, 'my-5')}>
        <Image src={this.TournamentCardResponse.data[2].image} style={{width: '100%',height:'200px', borderTopLeftRadius:'12px',borderTopRightRadius:'12px'}}/>
          <div style = {{paddingLeft:'16px',display:'flex'}}>
              <Card.Content>
                <Card.Header style={{fontFamily: 'Rubik',fontWeight:'600', marginTop: '16px',letterSpacing: 'normal', color: '#000'}}>{this.TournamentCardResponse.data[2].Name}</Card.Header>
                  <div>
                    <div className={'d-flex mt-1'}>
                    {<div><img src={location} style={{height: '17px', width:'12px'}}/></div>}
                        <div><Card.Description className={'d-flex align-items-center'} style={{fontFamily: 'Rubik', color: '#565555', paddingLeft:'15px', fontSize:'0.8rem', height:'23px'}}>{this.TournamentCardResponse.data[2].Location}</Card.Description></div>
                    </div>
                    <div style={{display :'flex'}}>
                    {<div><img src={football} style={{height: '14px', width:'14px'}}/></div>}
                        <div className={'d-flex align-items-center'} style={{fontFamily: 'Rubik', color: '#565555', paddingLeft:'15px', fontSize:'0.8rem', height:'23px'}}><Card.Description>{this.TournamentCardResponse.data[2].type}</Card.Description></div>
                    </div>
                </div>
            </Card.Content>
          </div>
        </Card>
    
          </div>
          </NavLink>

      </div>
      
      
    )
  }

  render() {
    return (
    <div style ={{width :'100%', paddingBottom:'20px', diaplay: 'flex', justifyContent: 'center', fontSize:'40px !important', backgroundColor:'#32a027'}}>
      <div style={{display :'flex',fontSize: '26px',fontWeight: 'bold', fontFamily:'Rubik', marginLeft:'100px',  paddingTop: '20px', color:'white'}}>
                    Tournaments
          </div>
        {/* //uncomment this line to include Tab in tournament section */}
      {/* <div className={tab}> */}
      
        {/* <div className={'d-flex flex-column align-items-center p-3'} style={{marginLeft:'130px'}}> */}
        {/* 0 is for tournaments */}
          {/* <button className={classNames(text, btn)} onClick={()=>this.clickHandler(0)}  >
            Tournaments
          </button> */}
{/*         This is the yellow bar CSS under the Tournament and Ground Section
          {
            this.state.value === 0 ?
            <div className={underline}></div>:
            <div className={underline} style={{backgroundColor:'#32a027'}}></div>
          } */}
        {/* </div> */}
        {/* <div className={'d-flex flex-column align-items-center p-3'} > */}
        {/* 1 is for grounds */}
          <button className={classNames(text, btn)} onClick={()=>this.clickHandler(1)}>
            {/* Grounds */}
          </button>
          {
            this.state.value === 1 ?
            <div className={underline}></div>:
            <div className={underline} style={{backgroundColor:'#32a027'}}></div>
          }
        {/* </div> */}
      {/* </div> */}
      {this.tournaments()}
    </div>
    );
  }
}
