import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import Card from '../Card/Card';
import {header} from './styles';

import avijeet from '../../assets/avijeet.png';
import hero from '../../assets/hero.png';
import anupam from '../../assets/anupam.png';
import praveen from '../../assets/praveen.png';
import rashid from '../../assets/rashid.png';
import ca from '../../assets/ca.png';
import ajeet from '../../assets/ajeet.png';
import laksh from '../../assets/laksh.png';
import divyank from '../../assets/divyank.png';
import sameer from '../../assets/sameer.png';
import anonymus from '../../assets/anonymus.png';


export default class CarouselComponent extends Component {
    response ={
        "data": [
        {
        "Name": "Avijeet Singh Gumber",
        "Designation": "Founder & CEO,goplayook",
        "SportsType": "Football & Cricket",
        "image" : avijeet
        },
        {
        "Name": "Himanshu Tomar",
        "Designation": "Javascript Front-End Engineer",
        "SportsType": "Basketball",
        "image" : hero
        },
        {
        "Name": "Anupam Pareek",
        "Designation": "Product Design Head",
        "SportsType": "Football",
        "image":anupam
            },
        // ,
    ]
    }
    response1 ={
        "data" : [
            {
                "Name": "Praveen Verma",
                "Designation": "Lead Android Engineer",
                "SportsType": "Cricket",
                "image" :praveen
                        },
                {
                "Name": "Rashid Abdul Rahiman",
                "Designation": "Digital Marketing",
                "SportsType": "Football",
                "image" : rashid
                    },
                {
                    "Name": "Sameer Sharma",
                    "Designation": "Lead Backend Engineer",
                    "SportsType": "Cricket",
                    "image" :sameer
                        }
        ]
    }

    response2 ={
        "data" : [
            {
                "Name": "Ajeet Chaudhary",
                "Designation": "Business Analyst",
                "SportsType": "Cricket",
                "image" :ajeet
                        },
                {
                "Name": "Laksh Rajpal",
                "Designation": "Business Developer",
                "SportsType": "Football",
                "image":laksh

                    },
                {
                    "Name": "Gautam Kapoor",
                    "Designation": "Accounts & Finance",
                    "SportsType": "Football",
                    "image" :ca
                        }
        ]
    }

    response3 ={
        "data" : [
            {
                "Name": "Divyank Vijayvergia",
                "Designation": "Android Developer",
                "SportsType": "Cricket",
                "image" :divyank
                        },
            {
                "Name":"Sachin",
                "Designation":"iOS Developer",
                "SportsType":"Cricket",
                "image":anonymus
            },
            {
                "Name":"Nikhil",
                "Designation":"Backend Developer",
                "SportsType":"Cricket",
                "image":anonymus,
            },
            {
                "Name":"Manoj",
                "Designation":"React Developer",
                "SportsType":"Football",
                "image":anonymus

            }
        ]
    }
    
    slider = (i) =>{
        switch (i){
            case 1: return (
                <div style={{display:'flex', justifyContent: 'space-around', backgroundColor:'#32a027'}} className={"px-5 pb-5"}>
                {
                this.response.data.map(e=>
                    <Card Name= {e.Name} Designation={e.Designation}  SportsType={e.SportsType} image={e.image}/>)
                }
            </div>
            );
            case 2: return (
                <div style={{display:'flex', justifyContent: 'space-around', backgroundColor:'#32a027'}} className={"px-5 pb-5"}>
                {
                this.response1.data.map(e=>
                    <Card Name= {e.Name} Designation={e.Designation}  SportsType={e.SportsType} image={e.image}/>)
                }
            </div>
            );
            case 3: return (
                <div style={{display:'flex', justifyContent: 'space-around', backgroundColor:'#32a027'}} className={"px-5 pb-5"}>
                {
                this.response2.data.map(e=>
                    <Card Name= {e.Name} Designation={e.Designation}  SportsType={e.SportsType} image={e.image}/>)
                }
            </div>
            );
            case 4: return (
                <div style={{display:'flex', justifyContent: 'space-around', backgroundColor:'#32a027'}} className={"px-5 pb-5"}>
                {
                this.response3.data.map(e=>
                    <Card Name= {e.Name} Designation={e.Designation}  SportsType={e.SportsType} image={e.image}/>)
                }
            </div>
            );
            
        }
    }

    render() {
        return (
            <div style={{background: '#32a027'}}>
                <div style={{display :'flex',fontSize: '26px',fontWeight: 'bold', fontFamily:'Rubik', marginLeft:'100px', marginTop:'66px', paddingTop: '30px', color:'white'}}>
                    goplaybook Team
                </div>
                <div style={{display:'flex', paddingTop: '10px', color:'white'}}>
                    <div className={header}>The Reason why goplaybook exists today.</div>
                </div>
                    <Carousel
                        autoPlay
                        infiniteLoop
                        interval={3000}
                        showArrows={true}
                        showStatus={true}
                        showThumbs={false}
                    >
                        {this.slider(1)}
                        {this.slider(2)}
                        {this.slider(3)}
                        {this.slider(4)}
                    </Carousel>
            </div>
        );
    }
}
