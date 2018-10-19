import React, {Compornent, Component} from 'react'
import Tim from '../../../assets/Tim.png';
import pam from '../../../assets/pam.png';

export default class Information extends React.Component{

    render(){
        return(
            <div id='Information Tab' style= {{backgorundColor:'#FFFFFF'}}>
                
                <div id='Top section'>
                                    <div id='upper flex' style ={{display:'flex', justifyContent:'space-between'}}>
                                            <div id='Tournament Category Section' style={{align:'left', paddingLeft:'66px',paddingTop:'20px'}}>
                                                <div style={{fontFamily:'Roboto', fontWeight:'bold',color:'#000000',fontSize:'20px'}}>
                                                    Tournament Category
                                                </div>
                                                <div style={{textAlign:'left', paddingTop:'8px',fontSize:'14px', fontWeight:'600'}}>
                                                    Sport
                                                </div>
                                                <div style={{textAlign:'left',fontSize:'16px',fontWeight:'bold'}}>
                                                    Football
                                                </div>
                                            </div>  
                                            <div id= 'This is Line Division' style={{marginLeft:'200px',backgroundColor:'#f6fbd0' ,height:'100px',width:'3px',marginTop:'10px'}}> </div>
                                            <div id='Tournament Duration Section' style={{textAlign:'left',paddingTop:'20px', marginRight:'230px'}}>
                                                <div style={{fontFamily:'Roboto', fontWeight:'bold',color:'#000000',fontSize:'20px'}}>Tournament Duration</div>
                                                <div style={{textAlign:'left', paddingTop:'8px',fontSize:'14px', fontWeight:'600'}}>Tournament Start Date</div>
                                                <div style={{textAlign:'left',fontSize:'16px',fontWeight:'bold'}}>28th Aug 2018</div>
                                            </div>

                                    </div>
                                    

                                    <div id='This is a Line Division after Tournament Category Section' style={{marginTop:'15px',marginLeft:'63px',backgroundColor:'#f6fbd0',width:'1050px',height:'3px'}}> </div>

                                    <div id='Mid Section' style={{display:'flex', justifyContent:'space-between'}}>
                                            <div id='Tournament Type Section' style={{paddingLeft:'66px',paddingTop:'20px'}}>
                                                <div style={{textAlign:'left', paddingTop:'8px',fontSize:'14px', fontWeight:'600'}}>Tournament Type</div>
                                                <div style={{fontFamily:'Roboto', fontWeight:'bold',color:'#000000',fontSize:'20px',textAlign:'left'}}>League</div>
                                            </div> 
                                            <div id= 'This is Line Division' style={{marginLeft:'276px',backgroundColor:'#f6fbd0' ,height:'100px',width:'3px',marginTop:'10px'}}> </div>
                                            <div id='Tournament End Date Section' style={{paddingTop:'20px',marginRight:'271px'}}>
                                                <div style={{textAlign:'left', paddingTop:'8px',fontSize:'14px', fontWeight:'600'}}>Tournament End Date</div>
                                                <div style={{fontFamily:'Roboto', fontWeight:'bold',color:'#000000',fontSize:'20px', textAlign:'left'}}>5th Oct 2018</div>
                                            </div> 
                                    </div>
                                    
                <div style={{marginTop:'15px',backgroundColor:'#f6fbd0',width:'1246px',height:'3px'}}></div>
                </div>
                
                <div id='Down Section'>
                        <div id ='Tournament Organizers Section'>
                                <div style={{fontFamily:'Roboto', fontWeight:'bold',color:'#000000',fontSize:'20px',display:'flex ',paddingLeft:'66px',paddingTop:'20px'}}>Tournament Organizers</div>
                                
                                
                                <div id='Flexing both organising People' style={{display:'flex',justifyContent:'space-between'}}>

                                                <div id = 'Textual PArt' style ={{display:'flex', paddingLeft:'66px', paddingTop:'15px', width:'500px'}}>
                                                        <div id='Organizers Image' ><img src={Tim} style = {{width:'50px',height:'50px'}} /></div>
                                                        <div id='Organizers Text and Description' style={{display:'flex', flexDirection:'column' , paddingLeft:'5px'}}>
                                                                <div id='Name' style={{textAlign:'left' ,fontSize:'14px', fontWeight:'bold'}}> Jim </div>
                                                                <div id='Description' style={{ textAlign:'left', fontSize:'12px',fontWeight:'600'}}>We organize tournaments on regular basis, don’t hesitate to contact us if you have any queries regarding any tournament</div>
                                                                <div style={{paddingTop:'5px'}}> <button style={{backgroundColor:'#228B22',borderRadius:'30px' ,height:'33px', width:'120px', fontSize:'11px',color:'#FFFFFF'}} >Contact Me</button> </div>
                                                        </div>
                                                </div>

                                                <div id = 'Textual PArt' style ={{display:'flex', paddingLeft:'66px', paddingTop:'15px', width:'500px'}}>
                                                        <div id='Organizers Image' ><img src={pam} style = {{width:'50px',height:'50px'}} /></div>
                                                        <div id='Organizers Text and Description' style={{display:'flex', flexDirection:'column' , paddingLeft:'5px'}}>
                                                                <div id='Name' style={{textAlign:'left' ,fontSize:'14px', fontWeight:'bold'}}> Anu </div>
                                                                <div id='Description' style={{ textAlign:'left', fontSize:'12px',fontWeight:'600'}}>We organize tournaments on regular basis, don’t hesitate to contact us if you have any queries regarding any tournament</div>
                                                                <div style={{paddingTop:'5px'}}> <button style={{backgroundColor:'#228B22',borderRadius:'30px' ,height:'33px', width:'120px', fontSize:'11px',color:'#FFFFFF'}} >Contact Me</button> </div>
                                                        </div>
                                                </div>   
                                </div> 
                            


                        </div>
                </div>
            </div>
        )
    }
    
}
