import React from 'react';
import { Component } from 'react';

import corner from '../../assets/corner.png';
import profile from '../../assets/profile.png';
import news from '../../assets/news.png';
import logo from '../../assets/logo1.png';

class About extends Component{
    constructor(props) {
        super(props);
        this.state = {
            screen: 0,
            image: [corner, profile, news, profile],
            description: ['Finding Local Grounds near you & Paticipate in the Live Tournaments ',
            'Showcases your sport stats & you past games at you profile page',
            'All the Sports News Content, Local & International',
            'Create your own Sports Network']
        }
        
    }
    componentDidMount() {
        this.interval = setInterval(() => this.setState({ screen: (this.state.screen+1)%4 }), 5000);
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }

    active = (i, text) => {
        if(this.state.screen === i) {
            return (
            <div style={{paddingTop:'15px' ,color:'#d18100', textDecoration: 'underline'}}>
                {text}
            </div>
            );
        } else {
            return (
                <div style={{paddingTop:'15px' ,color:'black'}}>
                    {text}
                </div>
            );
        }
    }

    content = i => {
        switch(i) {
            case 0: return(this.active(
                    i,
                    'Find Local Grounds & Tournaments'
                    ));
            case 1: return(this.active(
                    i,
                    'Your Player Profile with verified stats & Trophies'
                    ));
            case 2: return(this.active(
                    i,
                    'Curated Sport News(Global & Local)'
                    ));
            case 3: return(this.active(
                    i,
                    'Sports Network for Players'
                    ));
            default: return null;
        }
    }


    render(){
        return(
            // eight:'600px'
                <div style={{ width :'100%', backgroundColor:'#ffffff' ,paddingLeft: '100px'}} id='about'>
                    <div style={{display:'flex'}}>
                        <div style={{fontFamily: 'Rubik',fontSize: '30px', color: '#000000',fontWeight: 'bold', paddingTop:'20px', display:'flex'}}>
                            About goplaybook
                        </div>
                        <img src={logo} style={{widht:'99px',height:'99px',marginLeft:'328px',paddingTop:'20px'}}/>
                    </div>

                    
                    <div style={{ borderRadius:'20px',paddingTop:'30px',paddingBottom:'30px',marginTop:'50px',marginRight:'125px'}}>
                    <div style={{display:'flex',paddingTop:'10px',color: '#000000', fontWeight: 'bold', fontFamily: 'Rubik',fontSize: '30px', display:'flex',paddingLeft:'122px'}}>
                    <div syle={{paddingRight:'5px'}}>"  </div>
                    goplaybook is your sports network app, where talent meets recognition !<br></br>
                    We are a digital scorebook, where you can follow live match updates. <br></br>
                    Find profiles of players, teams, and tournaments with verified stats only on the goplaybook app. "
                    </div>
                    </div>
                    
                    
                    {/* <div style={{display:'flex', width: '100%'}}>
                    <div style={{paddingTop:'40px' , color:'black', width:'100%'}}>
                        <div style={{fontWeight:'bold', display:'flex', fontFamily:'Rubik'}}>Key Features</div>
                        <div style={{fontFamily:'Rubik'}}> 
                            <div style={{display:'flex', fontFamily:'Rubik'}}>{this.content(0)}</div>
                            <div style={{display:'flex', fontFamily:'Rubik'}}>{this.content(1)}</div>
                            <div style={{display:'flex', fontFamily:'Rubik'}}>{this.content(2)}</div>
                            <div style={{display:'flex', fontFamily:'Rubik'}}>{this.content(3)}</div>
                            <div style={{backgroundColor:'#eaebec' , color:'black',marginTop: '150px', borderRadius:'70px'}}>
                                <div className={'d-flex w-50 p-4'} style={{display:'flex' ,flexWrap: 'wrap', height:'140px', justifyContent: 'center', alignItems: 'center',fontFamily:'Rubik'}}>
                                    {this.state.description[this.state.screen]}
                                </div>
                            </div>
                            <div className={'d-flex w-100 justify-content-end'} style={{marginTop: '-479px'}}>
                            <img src={`${this.state.image[this.state.screen]}`} alt='mobile view' style = {{width:'560px' ,height:'500px'}}/>
                            </div>
                        </div>              
                    </div>
                    </div> */}
                </div>
        );
    }
}

export default About;