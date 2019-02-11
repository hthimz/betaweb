import React, {Compornent, Component} from 'react'
import avijeet from '../../../assets/avijeet.png';
export default class Stats extends React.Component{

render(){
return(
        <div>
                <div id='Top heading Section' style={{paddingLeft:'66px',paddingTop:'20px',display:'flex',fontFamily:'Roboto',fontWeight:'bold',color:'#000000',fontSize:'18px'}}>Tournament Statistics</div>
                <div style={{marginTop:'10px',width:'1.5px' ,backgroundColor:'#f6fbd0',width:'1246px',height:'3px'}}>
                <div id= 'Stats and Images '>
                        <div id='Top Score`r'>
                                <div id="Text" style={{fontFamily:'Roboto',fontWeight:'bold',fontSize:'18px',color:'#38454f'}}>Top Scorrer</div>
                                <div id= "Card" style={{ width:' 220px', height:' 290px',borderRadius:'15px',borderColor:' rgba(135, 135, 135, 0.25) ',borderWidth:'2px',borderStyle:'solid'}}>
                                        <div id= 'image'> <img style={{width:'117px',height:'125px', paddingTop:'10px'}} src= {avijeet} /> </div>
                                        <div id= 'Name' style={{fontFamily:'Helvetica',color:'#38454f',fontWeight:'bold',paddingTop:'15px', textShadow:'0 0 1px rgba(135, 135, 135, 0.25)'}}>Avijeet Singh Gumber</div>
                                        <div id= 'Team Name' style={{color:'38454f',fontSize:'12px', fontWeight:'bold',fontFamily:'Helvetica', textShadow:'0 0 1px'}}>Scorpions Blaster </div>
                                        <div id= 'Stats' style={{fontFamily:'Roboto',fontSize:'20px', fontWeight:'bold',color:'#38454f',paddingTop:'20px'}}>21 Goals</div>
                                </div>
                        </div>
                        <div id='Top Assists'></div>
                        <div id='Top Cleansheets'></div>
                        <div id='Most Tackles'></div>
                </div>
                
                </div>
        </div>
)
}

}
