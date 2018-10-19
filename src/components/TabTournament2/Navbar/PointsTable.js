import React, {Compornent, Component} from 'react'

export default class PointsTable extends React.Component{

    render(){
        return(
            <div style={{paddingLeft:'66px', fontFamily:'Montserrat', paddingRight:'66px'}}>
                <div id="Heading" style={{display:'flex' , fontFamily:'Roboto', fontWeight:'bold', paddingTop:'15px'}}>Points Table</div>
                    
                <div id='Wrapper' style={{paddingTop:'10px'}}>
                    <div id='Table Content' style={{display:'flex', backgroundColor:'#FFFFFF', justifyContent:'space-between', padding: '8px'}}> 
                        <div style={{color:'#2f8d2b', fontWeight:'bold', fontSize:'12px', width:'20px'}}>#</div>
                        <div style={{color:'#2f8d2b', fontWeight:'bold', fontSize:'12px',width:'350px', textAlign:"left"}}>Name</div>
                        <div style={{color:'#2f8d2b', fontWeight:'bold', fontSize:'12px',width:'20px'}}>P</div>
                        <div style={{color:'#2f8d2b', fontWeight:'bold', fontSize:'12px',width:'20px'}}>W</div>
                        <div style={{color:'#2f8d2b', fontWeight:'bold', fontSize:'12px',width:'20px'}}>L</div>
                        <div style={{color:'#2f8d2b', fontWeight:'bold', fontSize:'12px',width:'20px'}}>GD</div>
                        <div style={{color:'#2f8d2b', fontWeight:'bold', fontSize:'12px',width:'20px'}}>Pts</div>
                    </div>
                    <div id='Table Content' style={{display:'flex', backgroundColor:'#f2f2f2', justifyContent:'space-between', padding: '8px'}}> 
                        <div style={{color:'#000000', fontWeight:'bold', fontSize:'12px', width:'20px'}}>1</div>
                        <div style={{color:'#000000', fontWeight:'bold', fontSize:'12px',width:'350px', textAlign:"left"}}>This Is GoplayBook test Match</div>
                        <div style={{color:'#000000', fontWeight:'bold', fontSize:'12px',width:'20px'}}>4</div>
                        <div style={{color:'#000000', fontWeight:'bold', fontSize:'12px',width:'20px'}}>3</div>
                        <div style={{color:'#000000', fontWeight:'bold', fontSize:'12px',width:'20px'}}>1</div>
                        <div style={{color:'#000000', fontWeight:'bold', fontSize:'12px',width:'20px'}}>+24</div>
                        <div style={{color:'#000000', fontWeight:'bold', fontSize:'12px',width:'20px'}}>9</div>
                    </div>
                    <div id='Table Content' style={{display:'flex', backgroundColor:'#FFFFFF', justifyContent:'space-between', padding: '8px'}}> 
                        <div style={{color:'#000000', fontWeight:'bold', fontSize:'12px', width:'20px'}}>2</div>
                        <div style={{color:'#000000', fontWeight:'bold', fontSize:'12px',width:'350px', textAlign:"left"}}>Champions League</div>
                        <div style={{color:'#000000', fontWeight:'bold', fontSize:'12px',width:'20px'}}>4</div>
                        <div style={{color:'#000000', fontWeight:'bold', fontSize:'12px',width:'20px'}}>2</div>
                        <div style={{color:'#000000', fontWeight:'bold', fontSize:'12px',width:'20px'}}>2</div>
                        <div style={{color:'#000000', fontWeight:'bold', fontSize:'12px',width:'20px'}}>+2</div>
                        <div style={{color:'#000000', fontWeight:'bold', fontSize:'12px',width:'20px'}}>6</div>
                    </div>
                    <div id='Table Content' style={{display:'flex', backgroundColor:'#f2f2f2', justifyContent:'space-between', padding: '8px'}}> 
                        <div style={{color:'#000000', fontWeight:'bold', fontSize:'12px', width:'20px'}}>3</div>
                        <div style={{color:'#000000', fontWeight:'bold', fontSize:'12px',width:'350px', textAlign:"left"}}>Bhau Bhau</div>
                        <div style={{color:'#000000', fontWeight:'bold', fontSize:'12px',width:'20px'}}>4</div>
                        <div style={{color:'#000000', fontWeight:'bold', fontSize:'12px',width:'20px'}}>1</div>
                        <div style={{color:'#000000', fontWeight:'bold', fontSize:'12px',width:'20px'}}>3</div>
                        <div style={{color:'#000000', fontWeight:'bold', fontSize:'12px',width:'20px'}}>-1</div>
                        <div style={{color:'#000000', fontWeight:'bold', fontSize:'12px',width:'20px'}}>3</div>
                    </div>

                </div> 
                    

            </div>
        )
    }
    
}
