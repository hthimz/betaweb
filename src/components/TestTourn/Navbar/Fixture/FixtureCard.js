import React from 'react';
import uppericon from '../../../../assets/Fixtures/upperIcon.png';
import team1 from '../../../../assets/Fixtures/team1.png';
import team2 from '../../../../assets/Fixtures/team2.png';



export default class FixtureCard extends React.Component{

render(){
return(
<div style={{paddingTop:'20px'}}> 
        <div style={{marginLeft:'66px',border:'solid 1.5px', borderColor:'#f2f2f2', width:'390px',height:'200px'}}>
                <div id='upper Section' style={{display:'flex'}}>
                <div id='Image Logo Area' style={{paddingLeft:'10px', paddingTop:'5px'}}><img style={{width:'35px', height:'35px'}} src={uppericon} /></div>
                <div id='Text Area' style={{paddingTop:'10px' , paddingLeft:'10px'}}>
                        <div id='upper Title Section' style={{fontWeight:'600', fontFamily:'Montserrat',fontSize:'9px' }}> Delhi Daredevil is playing Mumbai Indians</div>
                        <div id='upper Date section' style={{display:'flex', paddingTop:'2px'}}> <div style={{fontSize:'9px', fontWeight:'normal', color:'#828282'}}>21 Aug</div> <div style={{paddingLeft:'2px', paddingRight:'2px',fontSize:'9px', fontWeight:'normal', color:'#828282'}}>.</div> <div style={{fontSize:'9px', fontWeight:'normal', color:'#828282'}}>Battle Cup Championship</div></div>
                </div>   
                </div>
                <div style={{backgroundColor:'#efefef', height:'1.5px', marginTop:'5px'}}></div>
                
                <div id='Middle section' style= {{paddingTop:'10px' , display:'flex'  , justifyContent:'space-around'}}> 
                        <div id='Team 1 Image and Text'> 
                                <div id= 'image'> <img style= {{width:'60px', height:'60px'}} src={team1} /></div>
                                <div id='Name 1' style={{fontFamily:'Montserrat', fontSize:'9px',fontWeight:'bold',paddingTop:'10px'}}> Daredevil </div>
                        </div>
                        <div id='Score and versus'>
                                <div id='Versus Score' style={{display:'flex',width:'99px', justifyContent:'space-around',marginLeft:'34px'}}>
                                        <div id='Team 1 Score' style={{fontFamily:'Montserrat',fontWeight:'bold', color:'#373737'}}>2</div>
                                        <div id='Versus' style={{width:'20px',height:'20px',backgroundColor:'#287e21', borderRadius:'25px',color:'#FFFFFF',fontWeight:'bold', fontSize:'10px',paddingTop:'2px'}}>Vs</div>
                                        <div id='Team 2 Score'>1</div>
                                </div>
                                <div id='Live Status' style={{paddingTop:'2px',fontWeight:'bold',fontSize:'10px',fontFamily:'Montserrat',width:'60px',height:'22px',backgroundColor:'#a61c1c',color:'#FFFFFF',borderRadius:'20px',marginLeft:'53px',marginTop:'20px'}}>
                                Live
                                </div>
                        </div>
                        <div id='Team 2 Image and '>
                                <div id= 'image'> <img style= {{width:'60px', height:'60px'}} src={team2} /></div>
                                <div id='Name 2' style={{fontFamily:'Montserrat', fontSize:'9px',fontWeight:'bold', paddingTop:'10px'}}> Mumbai Indian </div>
                        </div>
                </div>
                
                <div style={{backgroundColor:'#efefef', height:'1.5px', marginTop:'15px'}}></div>
                <div id='Lower Section' style={{paddingTop:'10px',display:'flex', justifyContent:'space-around'}}>
                        <div style={{fontFamily:'Montserrat',fontWeight:'bold',fontSize:'14px'}}>Summary</div>
                        <div style={{height:'43px',marginTop:'-12px',width:'2.5px',backgroundColor:'#efefef'}}></div>
                        <div style={{fontFamily:'Montserrat',fontWeight:'bold',fontSize:'14px'}}>Share</div>
                </div>
                </div>    
        
        </div>
)
}

}