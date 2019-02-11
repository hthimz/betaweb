import React, { Component} from 'react'

export default class PointsTable extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data:this.props.points
        }
    }

// fetching Data for the Team Points to be Populated
    // RootsCentral = () => {
    //     fetch('http://52.66.194.65/api/football/tournament_point/?tournament_id=143', {
    //     method: 'GET',
    //     headers:
    //     {
    //         'Content-Type': 'application/json',
    //         'Authorization': 'Bearer iVX5i6BYXMBFD2gCR5HHG1jtJMuHJK',
    //         }
    // }).then( response => { let sir= response.json();
    //     console.log(sir,'Trying Hard')
    //     return sir;
    // }).then(body => {{this.setState({
    //     data:body
    // })}console.log(body,'Score aa rha h ab')}).catch(err => console.log(err, 'Error aa gaya BC'));
    // }
    
// componentWillMount(){
// this.RootsCentral();
// console.log('The Event Has Triggered')
// }

// UNSAFE_componentWillMount(){
//     this.setState({
//         data:this.props.points
//     })
//     console.log(this.state.data,"Points Table Data Set")
// }

    render(){
        return(
            <div>
                {this.props.id > 145 ?  
                <div style={{paddingLeft:'66px', fontFamily:'Montserrat', paddingRight:'66px'}}>
                <div id="Heading" style={{display:'flex' , fontFamily:'Rubik', fontWeight:'bold', paddingTop:'15px'}}>Points Table - Adidas Creator League</div>
            {console.log('Points Table Props',this.state.data)} 
            <div id='This is a Line Division after Tournament Category Section' style={{marginTop:'15px',backgroundColor:'#f3f3f3',width:'1116px',height:'3px'}}> </div>

                <div id='Wrapper' style={{paddingTop:'10px'}}>
                    <div id='Table Content' style={{display:'flex', backgroundColor:'#FFFFFF', justifyContent:'space-between', padding: '8px'}}> 
                        <div style={{color:'#2f8d2b', fontWeight:'bold', fontSize:'12px', width:'20px'}}>#</div>
                        <div style={{color:'#2f8d2b', fontWeight:'bold', fontSize:'12px',width:'350px', textAlign:"left"}}>Names</div>
                        <div style={{color:'#2f8d2b', fontWeight:'bold', fontSize:'12px',width:'20px'}}>P</div>
                        <div style={{color:'#2f8d2b', fontWeight:'bold', fontSize:'12px',width:'20px'}}>W</div>
                        <div style={{color:'#2f8d2b', fontWeight:'bold', fontSize:'12px',width:'20px'}}>L</div>
                        <div style={{color:'#2f8d2b', fontWeight:'bold', fontSize:'12px',width:'20px'}}>GD</div>
                        <div style={{color:'#2f8d2b', fontWeight:'bold', fontSize:'12px',width:'20px'}}>Pts</div>
                    </div>
                    <div id='Table Content' style={{display:'flex', backgroundColor:'#f2f2f2', justifyContent:'space-between', padding: '8px'}}> 
                        <div style={{color:'#000000', fontWeight:'bold', fontSize:'12px', width:'20px'}}>1</div>
                        <div style={{color:'#000000', fontWeight:'bold', fontSize:'12px',width:'350px', textAlign:"left"}}>{this.props.points.data[0].team_name}</div>
                        <div style={{color:'#000000', fontWeight:'bold', fontSize:'12px',width:'20px'}}>{this.props.points.data[0].played}</div>
                        <div style={{color:'#000000', fontWeight:'bold', fontSize:'12px',width:'20px'}}>{this.props.points.data[0].won}</div>
                        <div style={{color:'#000000', fontWeight:'bold', fontSize:'12px',width:'20px'}}>{this.props.points.data[0].lost}</div>
                        <div style={{color:'#000000', fontWeight:'bold', fontSize:'12px',width:'20px'}}>{this.props.points.data[0].goaldifference}</div>
                        <div style={{color:'#000000', fontWeight:'bold', fontSize:'12px',width:'20px'}}>{this.props.points.data[0].points}</div>
                    </div>
                    <div id='Table Content' style={{display:'flex', backgroundColor:'#FFFFFF', justifyContent:'space-between', padding: '8px'}}> 
                        <div style={{color:'#000000', fontWeight:'bold', fontSize:'12px', width:'20px'}}>2</div>
                        <div style={{color:'#000000', fontWeight:'bold', fontSize:'12px',width:'350px', textAlign:"left"}}>{this.props.points.data[1].team_name}</div>
                        <div style={{color:'#000000', fontWeight:'bold', fontSize:'12px',width:'20px'}}>{this.props.points.data[1].played}</div>
                        <div style={{color:'#000000', fontWeight:'bold', fontSize:'12px',width:'20px'}}>{this.props.points.data[1].won}</div>
                        <div style={{color:'#000000', fontWeight:'bold', fontSize:'12px',width:'20px'}}>{this.props.points.data[1].lost}</div>
                        <div style={{color:'#000000', fontWeight:'bold', fontSize:'12px',width:'20px'}}>{this.props.points.data[1].goaldifference}</div>
                        <div style={{color:'#000000', fontWeight:'bold', fontSize:'12px',width:'20px'}}>{this.props.points.data[1].points}</div>
                    </div>
                    <div id='Table Content' style={{display:'flex', backgroundColor:'#f2f2f2', justifyContent:'space-between', padding: '8px'}}> 
                        <div style={{color:'#000000', fontWeight:'bold', fontSize:'12px', width:'20px'}}>3</div>
                        <div style={{color:'#000000', fontWeight:'bold', fontSize:'12px',width:'350px', textAlign:"left"}}>{this.props.points.data[2].team_name}</div>
                        <div style={{color:'#000000', fontWeight:'bold', fontSize:'12px',width:'20px'}}>{this.props.points.data[2].played}</div>
                        <div style={{color:'#000000', fontWeight:'bold', fontSize:'12px',width:'20px'}}>{this.props.points.data[2].won}</div>
                        <div style={{color:'#000000', fontWeight:'bold', fontSize:'12px',width:'20px'}}>{this.props.points.data[2].lost}</div>
                        <div style={{color:'#000000', fontWeight:'bold', fontSize:'12px',width:'20px'}}>{this.props.points.data[2].goaldifference}</div>
                        <div style={{color:'#000000', fontWeight:'bold', fontSize:'12px',width:'20px'}}>{this.props.points.data[2].points}</div>
                    </div>
                    <div id='Table Content' style={{display:'flex', backgroundColor:'#FFFFFF', justifyContent:'space-between', padding: '8px'}}> 
                        <div style={{color:'#000000', fontWeight:'bold', fontSize:'12px', width:'20px'}}>4</div>
                        <div style={{color:'#000000', fontWeight:'bold', fontSize:'12px',width:'350px', textAlign:"left"}}>{this.props.points.data[3].team_name}</div>
                        <div style={{color:'#000000', fontWeight:'bold', fontSize:'12px',width:'20px'}}>{this.props.points.data[3].played}</div>
                        <div style={{color:'#000000', fontWeight:'bold', fontSize:'12px',width:'20px'}}>{this.props.points.data[3].won}</div>
                        <div style={{color:'#000000', fontWeight:'bold', fontSize:'12px',width:'20px'}}>{this.props.points.data[3].lost}</div>
                        <div style={{color:'#000000', fontWeight:'bold', fontSize:'12px',width:'20px'}}>{this.props.points.data[3].goaldifference}</div>
                        <div style={{color:'#000000', fontWeight:'bold', fontSize:'12px',width:'20px'}}>{this.props.points.data[3].points}</div>
                    </div>
                    <div id='Table Content' style={{display:'flex', backgroundColor:'#f2f2f2', justifyContent:'space-between', padding: '8px'}}> 
                        <div style={{color:'#000000', fontWeight:'bold', fontSize:'12px', width:'20px'}}>5</div>
                        <div style={{color:'#000000', fontWeight:'bold', fontSize:'12px',width:'350px', textAlign:"left"}}>{this.props.points.data[4].team_name}</div>
                        <div style={{color:'#000000', fontWeight:'bold', fontSize:'12px',width:'20px'}}>{this.props.points.data[4].played}</div>
                        <div style={{color:'#000000', fontWeight:'bold', fontSize:'12px',width:'20px'}}>{this.props.points.data[4].won}</div>
                        <div style={{color:'#000000', fontWeight:'bold', fontSize:'12px',width:'20px'}}>{this.props.points.data[4].lost}</div>
                        <div style={{color:'#000000', fontWeight:'bold', fontSize:'12px',width:'20px'}}>{this.props.points.data[4].goaldifference}</div>
                        <div style={{color:'#000000', fontWeight:'bold', fontSize:'12px',width:'20px'}}>{this.props.points.data[4].points}</div>
                    </div>
                    <div id='Table Content' style={{display:'flex', backgroundColor:'#FFFFFF', justifyContent:'space-between', padding: '8px'}}> 
                        <div style={{color:'#000000', fontWeight:'bold', fontSize:'12px', width:'20px'}}>6</div>
                        <div style={{color:'#000000', fontWeight:'bold', fontSize:'12px',width:'350px', textAlign:"left"}}>{this.props.points.data[5].team_name}</div>
                        <div style={{color:'#000000', fontWeight:'bold', fontSize:'12px',width:'20px'}}>{this.props.points.data[5].played}</div>
                        <div style={{color:'#000000', fontWeight:'bold', fontSize:'12px',width:'20px'}}>{this.props.points.data[5].won}</div>
                        <div style={{color:'#000000', fontWeight:'bold', fontSize:'12px',width:'20px'}}>{this.props.points.data[5].lost}</div>
                        <div style={{color:'#000000', fontWeight:'bold', fontSize:'12px',width:'20px'}}>{this.props.points.data[5].goaldifference}</div>
                        <div style={{color:'#000000', fontWeight:'bold', fontSize:'12px',width:'20px'}}>{this.props.points.data[5].points}</div>
                    </div>
                    <div id='Table Content' style={{display:'flex', backgroundColor:'#f2f2f2', justifyContent:'space-between', padding: '8px'}}> 
                        <div style={{color:'#000000', fontWeight:'bold', fontSize:'12px', width:'20px'}}>7</div>
                        <div style={{color:'#000000', fontWeight:'bold', fontSize:'12px',width:'350px', textAlign:"left"}}>{this.props.points.data[6].team_name}</div>
                        <div style={{color:'#000000', fontWeight:'bold', fontSize:'12px',width:'20px'}}>{this.props.points.data[6].played}</div>
                        <div style={{color:'#000000', fontWeight:'bold', fontSize:'12px',width:'20px'}}>{this.props.points.data[6].won}</div>
                        <div style={{color:'#000000', fontWeight:'bold', fontSize:'12px',width:'20px'}}>{this.props.points.data[6].lost}</div>
                        <div style={{color:'#000000', fontWeight:'bold', fontSize:'12px',width:'20px'}}>{this.props.points.data[6].goaldifference}</div>
                        <div style={{color:'#000000', fontWeight:'bold', fontSize:'12px',width:'20px'}}>{this.props.points.data[6].points}</div>
                    </div>
                    <div id='Table Content' style={{display:'flex', backgroundColor:'#FFFFFF', justifyContent:'space-between', padding: '8px'}}> 
                        <div style={{color:'#000000', fontWeight:'bold', fontSize:'12px', width:'20px'}}>8</div>
                        <div style={{color:'#000000', fontWeight:'bold', fontSize:'12px',width:'350px', textAlign:"left"}}>{this.props.points.data[7].team_name}</div>
                        <div style={{color:'#000000', fontWeight:'bold', fontSize:'12px',width:'20px'}}>{this.props.points.data[7].played}</div>
                        <div style={{color:'#000000', fontWeight:'bold', fontSize:'12px',width:'20px'}}>{this.props.points.data[7].won}</div>
                        <div style={{color:'#000000', fontWeight:'bold', fontSize:'12px',width:'20px'}}>{this.props.points.data[7].lost}</div>
                        <div style={{color:'#000000', fontWeight:'bold', fontSize:'12px',width:'20px'}}>{this.props.points.data[7].goaldifference}</div>
                        <div style={{color:'#000000', fontWeight:'bold', fontSize:'12px',width:'20px'}}>{this.props.points.data[7].points}</div>
                    </div>
                    <div id='Table Content' style={{display:'flex', backgroundColor:'#f2f2f2', justifyContent:'space-between', padding: '8px'}}> 
                        <div style={{color:'#000000', fontWeight:'bold', fontSize:'12px', width:'20px'}}>9</div>
                        <div style={{color:'#000000', fontWeight:'bold', fontSize:'12px',width:'350px', textAlign:"left"}}>{this.props.points.data[8].team_name}</div>
                        <div style={{color:'#000000', fontWeight:'bold', fontSize:'12px',width:'20px'}}>{this.props.points.data[8].played}</div>
                        <div style={{color:'#000000', fontWeight:'bold', fontSize:'12px',width:'20px'}}>{this.props.points.data[8].won}</div>
                        <div style={{color:'#000000', fontWeight:'bold', fontSize:'12px',width:'20px'}}>{this.props.points.data[8].lost}</div>
                        <div style={{color:'#000000', fontWeight:'bold', fontSize:'12px',width:'20px'}}>{this.props.points.data[8].goaldifference}</div>
                        <div style={{color:'#000000', fontWeight:'bold', fontSize:'12px',width:'20px'}}>{this.props.points.data[8].points}</div>
                    </div>
                    <div id='Table Content' style={{display:'flex', backgroundColor:'#FFFFFF', justifyContent:'space-between', padding: '8px'}}> 
                        <div style={{color:'#000000', fontWeight:'bold', fontSize:'12px', width:'20px'}}>10</div>
                        <div style={{color:'#000000', fontWeight:'bold', fontSize:'12px',width:'350px', textAlign:"left"}}>{this.props.points.data[9].team_name}</div>
                        <div style={{color:'#000000', fontWeight:'bold', fontSize:'12px',width:'20px'}}>{this.props.points.data[9].played}</div>
                        <div style={{color:'#000000', fontWeight:'bold', fontSize:'12px',width:'20px'}}>{this.props.points.data[9].won}</div>
                        <div style={{color:'#000000', fontWeight:'bold', fontSize:'12px',width:'20px'}}>{this.props.points.data[9].lost}</div>
                        <div style={{color:'#000000', fontWeight:'bold', fontSize:'12px',width:'20px'}}>{this.props.points.data[9].goaldifference}</div>
                        <div style={{color:'#000000', fontWeight:'bold', fontSize:'12px',width:'20px'}}>{this.props.points.data[9].points}</div>
                    </div>
                    <div id='Table Content' style={{display:'flex', backgroundColor:'#f2f2f2', justifyContent:'space-between', padding: '8px'}}> 
                        <div style={{color:'#000000', fontWeight:'bold', fontSize:'12px', width:'20px'}}>11</div>
                        <div style={{color:'#000000', fontWeight:'bold', fontSize:'12px',width:'350px', textAlign:"left"}}>{this.props.points.data[10].team_name}</div>
                        <div style={{color:'#000000', fontWeight:'bold', fontSize:'12px',width:'20px'}}>{this.props.points.data[10].played}</div>
                        <div style={{color:'#000000', fontWeight:'bold', fontSize:'12px',width:'20px'}}>{this.props.points.data[10].won}</div>
                        <div style={{color:'#000000', fontWeight:'bold', fontSize:'12px',width:'20px'}}>{this.props.points.data[10].lost}</div>
                        <div style={{color:'#000000', fontWeight:'bold', fontSize:'12px',width:'20px'}}>{this.props.points.data[10].goaldifference}</div>
                        <div style={{color:'#000000', fontWeight:'bold', fontSize:'12px',width:'20px'}}>{this.props.points.data[10].points}</div>
                    </div>
                    <div id='Table Content' style={{display:'flex', backgroundColor:'#FFFFFF', justifyContent:'space-between', padding: '8px'}}> 
                        <div style={{color:'#000000', fontWeight:'bold', fontSize:'12px', width:'20px'}}>12</div>
                        <div style={{color:'#000000', fontWeight:'bold', fontSize:'12px',width:'350px', textAlign:"left"}}>{this.props.points.data[11].team_name}</div>
                        <div style={{color:'#000000', fontWeight:'bold', fontSize:'12px',width:'20px'}}>{this.props.points.data[11].played}</div>
                        <div style={{color:'#000000', fontWeight:'bold', fontSize:'12px',width:'20px'}}>{this.props.points.data[11].won}</div>
                        <div style={{color:'#000000', fontWeight:'bold', fontSize:'12px',width:'20px'}}>{this.props.points.data[11].lost}</div>
                        <div style={{color:'#000000', fontWeight:'bold', fontSize:'12px',width:'20px'}}>{this.props.points.data[11].goaldifference}</div>
                        <div style={{color:'#000000', fontWeight:'bold', fontSize:'12px',width:'20px'}}>{this.props.points.data[11].points}</div>
                    </div>
                    <div id='Table Content' style={{display:'flex', backgroundColor:'#f2f2f2', justifyContent:'space-between', padding: '8px'}}> 
                        <div style={{color:'#000000', fontWeight:'bold', fontSize:'12px', width:'20px'}}>13</div>
                        <div style={{color:'#000000', fontWeight:'bold', fontSize:'12px',width:'350px', textAlign:"left"}}>{this.props.points.data[12].team_name}</div>
                        <div style={{color:'#000000', fontWeight:'bold', fontSize:'12px',width:'20px'}}>{this.props.points.data[12].played}</div>
                        <div style={{color:'#000000', fontWeight:'bold', fontSize:'12px',width:'20px'}}>{this.props.points.data[12].won}</div>
                        <div style={{color:'#000000', fontWeight:'bold', fontSize:'12px',width:'20px'}}>{this.props.points.data[12].lost}</div>
                        <div style={{color:'#000000', fontWeight:'bold', fontSize:'12px',width:'20px'}}>{this.props.points.data[12].goaldifference}</div>
                        <div style={{color:'#000000', fontWeight:'bold', fontSize:'12px',width:'20px'}}>{this.props.points.data[12].points}</div>
                    </div>
                    <div id='Table Content' style={{display:'flex', backgroundColor:'#FFFFFF', justifyContent:'space-between', padding: '8px'}}> 
                        <div style={{color:'#000000', fontWeight:'bold', fontSize:'12px', width:'20px'}}>14</div>
                        <div style={{color:'#000000', fontWeight:'bold', fontSize:'12px',width:'350px', textAlign:"left"}}>{this.props.points.data[13].team_name}</div>
                        <div style={{color:'#000000', fontWeight:'bold', fontSize:'12px',width:'20px'}}>{this.props.points.data[13].played}</div>
                        <div style={{color:'#000000', fontWeight:'bold', fontSize:'12px',width:'20px'}}>{this.props.points.data[13].won}</div>
                        <div style={{color:'#000000', fontWeight:'bold', fontSize:'12px',width:'20px'}}>{this.props.points.data[13].lost}</div>
                        <div style={{color:'#000000', fontWeight:'bold', fontSize:'12px',width:'20px'}}>{this.props.points.data[13].goaldifference}</div>
                        <div style={{color:'#000000', fontWeight:'bold', fontSize:'12px',width:'20px'}}>{this.props.points.data[13].points}</div>
                    </div>
                    <div id='Table Content' style={{display:'flex', backgroundColor:'#f2f2f2', justifyContent:'space-between', padding: '8px'}}> 
                        <div style={{color:'#000000', fontWeight:'bold', fontSize:'12px', width:'20px'}}>15</div>
                        <div style={{color:'#000000', fontWeight:'bold', fontSize:'12px',width:'350px', textAlign:"left"}}>{this.props.points.data[14].team_name}</div>
                        <div style={{color:'#000000', fontWeight:'bold', fontSize:'12px',width:'20px'}}>{this.props.points.data[14].played}</div>
                        <div style={{color:'#000000', fontWeight:'bold', fontSize:'12px',width:'20px'}}>{this.props.points.data[14].won}</div>
                        <div style={{color:'#000000', fontWeight:'bold', fontSize:'12px',width:'20px'}}>{this.props.points.data[14].lost}</div>
                        <div style={{color:'#000000', fontWeight:'bold', fontSize:'12px',width:'20px'}}>{this.props.points.data[14].goaldifference}</div>
                        <div style={{color:'#000000', fontWeight:'bold', fontSize:'12px',width:'20px'}}>{this.props.points.data[14].points}</div>
                    </div>
                    <div id='Table Content' style={{display:'flex', backgroundColor:'#FFFFFF', justifyContent:'space-between', padding: '8px'}}> 
                        <div style={{color:'#000000', fontWeight:'bold', fontSize:'12px', width:'20px'}}>16</div>
                        <div style={{color:'#000000', fontWeight:'bold', fontSize:'12px',width:'350px', textAlign:"left"}}>{this.props.points.data[15].team_name}</div>
                        <div style={{color:'#000000', fontWeight:'bold', fontSize:'12px',width:'20px'}}>{this.props.points.data[15].played}</div>
                        <div style={{color:'#000000', fontWeight:'bold', fontSize:'12px',width:'20px'}}>{this.props.points.data[15].won}</div>
                        <div style={{color:'#000000', fontWeight:'bold', fontSize:'12px',width:'20px'}}>{this.props.points.data[15].lost}</div>
                        <div style={{color:'#000000', fontWeight:'bold', fontSize:'12px',width:'20px'}}>{this.props.points.data[15].goaldifference}</div>
                        <div style={{color:'#000000', fontWeight:'bold', fontSize:'12px',width:'20px'}}>{this.props.points.data[15].points}</div>
                    </div>

                </div> 
                    

            </div>
                :
                
                <div style={{paddingLeft:'66px', fontFamily:'Montserrat', paddingRight:'66px'}}>
                <div id="Heading" style={{display:'flex' , fontFamily:'Rubik', fontWeight:'bold', paddingTop:'15px'}}>Points Table - Roots Premier League</div>
                        {console.log('Points Table Props',this.state.data)}    
                        <div id='This is a Line Division after Tournament Category Section' style={{marginTop:'15px',backgroundColor:'#f3f3f3',width:'1116px',height:'3px'}}> </div>

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
                        <div style={{color:'#000000', fontWeight:'bold', fontSize:'12px',width:'350px', textAlign:"left"}}>{this.props.points.data[0].team_name}</div>
                        <div style={{color:'#000000', fontWeight:'bold', fontSize:'12px',width:'20px'}}>{this.props.points.data[0].played}</div>
                        <div style={{color:'#000000', fontWeight:'bold', fontSize:'12px',width:'20px'}}>{this.props.points.data[0].won}</div>
                        <div style={{color:'#000000', fontWeight:'bold', fontSize:'12px',width:'20px'}}>{this.props.points.data[0].lost}</div>
                        <div style={{color:'#000000', fontWeight:'bold', fontSize:'12px',width:'20px'}}>{this.props.points.data[0].goaldifference}</div>
                        <div style={{color:'#000000', fontWeight:'bold', fontSize:'12px',width:'20px'}}>{this.props.points.data[0].points}</div>
                    </div>
                    <div id='Table Content' style={{display:'flex', backgroundColor:'#FFFFFF', justifyContent:'space-between', padding: '8px'}}> 
                        <div style={{color:'#000000', fontWeight:'bold', fontSize:'12px', width:'20px'}}>2</div>
                        <div style={{color:'#000000', fontWeight:'bold', fontSize:'12px',width:'350px', textAlign:"left"}}>{this.props.points.data[1].team_name}</div>
                        <div style={{color:'#000000', fontWeight:'bold', fontSize:'12px',width:'20px'}}>{this.props.points.data[1].played}</div>
                        <div style={{color:'#000000', fontWeight:'bold', fontSize:'12px',width:'20px'}}>{this.props.points.data[1].won}</div>
                        <div style={{color:'#000000', fontWeight:'bold', fontSize:'12px',width:'20px'}}>{this.props.points.data[1].lost}</div>
                        <div style={{color:'#000000', fontWeight:'bold', fontSize:'12px',width:'20px'}}>{this.props.points.data[1].goaldifference}</div>
                        <div style={{color:'#000000', fontWeight:'bold', fontSize:'12px',width:'20px'}}>{this.props.points.data[1].points}</div>
                    </div>
                    <div id='Table Content' style={{display:'flex', backgroundColor:'#f2f2f2', justifyContent:'space-between', padding: '8px'}}> 
                        <div style={{color:'#000000', fontWeight:'bold', fontSize:'12px', width:'20px'}}>3</div>
                        <div style={{color:'#000000', fontWeight:'bold', fontSize:'12px',width:'350px', textAlign:"left"}}>{this.props.points.data[2].team_name}</div>
                        <div style={{color:'#000000', fontWeight:'bold', fontSize:'12px',width:'20px'}}>{this.props.points.data[2].played}</div>
                        <div style={{color:'#000000', fontWeight:'bold', fontSize:'12px',width:'20px'}}>{this.props.points.data[2].won}</div>
                        <div style={{color:'#000000', fontWeight:'bold', fontSize:'12px',width:'20px'}}>{this.props.points.data[2].lost}</div>
                        <div style={{color:'#000000', fontWeight:'bold', fontSize:'12px',width:'20px'}}>{this.props.points.data[2].goaldifference}</div>
                        <div style={{color:'#000000', fontWeight:'bold', fontSize:'12px',width:'20px'}}>{this.props.points.data[2].points}</div>
                    </div>
                    <div id='Table Content' style={{display:'flex', backgroundColor:'#FFFFFF', justifyContent:'space-between', padding: '8px'}}> 
                        <div style={{color:'#000000', fontWeight:'bold', fontSize:'12px', width:'20px'}}>4</div>
                        <div style={{color:'#000000', fontWeight:'bold', fontSize:'12px',width:'350px', textAlign:"left"}}>{this.props.points.data[3].team_name}</div>
                        <div style={{color:'#000000', fontWeight:'bold', fontSize:'12px',width:'20px'}}>{this.props.points.data[3].played}</div>
                        <div style={{color:'#000000', fontWeight:'bold', fontSize:'12px',width:'20px'}}>{this.props.points.data[3].won}</div>
                        <div style={{color:'#000000', fontWeight:'bold', fontSize:'12px',width:'20px'}}>{this.props.points.data[3].lost}</div>
                        <div style={{color:'#000000', fontWeight:'bold', fontSize:'12px',width:'20px'}}>{this.props.points.data[3].goaldifference}</div>
                        <div style={{color:'#000000', fontWeight:'bold', fontSize:'12px',width:'20px'}}>{this.props.points.data[3].points}</div>
                    </div>
                    <div id='Table Content' style={{display:'flex', backgroundColor:'#f2f2f2', justifyContent:'space-between', padding: '8px'}}> 
                        <div style={{color:'#000000', fontWeight:'bold', fontSize:'12px', width:'20px'}}>5</div>
                        <div style={{color:'#000000', fontWeight:'bold', fontSize:'12px',width:'350px', textAlign:"left"}}>{this.props.points.data[4].team_name}</div>
                        <div style={{color:'#000000', fontWeight:'bold', fontSize:'12px',width:'20px'}}>{this.props.points.data[4].played}</div>
                        <div style={{color:'#000000', fontWeight:'bold', fontSize:'12px',width:'20px'}}>{this.props.points.data[4].won}</div>
                        <div style={{color:'#000000', fontWeight:'bold', fontSize:'12px',width:'20px'}}>{this.props.points.data[4].lost}</div>
                        <div style={{color:'#000000', fontWeight:'bold', fontSize:'12px',width:'20px'}}>{this.props.points.data[4].goaldifference}</div>
                        <div style={{color:'#000000', fontWeight:'bold', fontSize:'12px',width:'20px'}}>{this.props.points.data[4].points}</div>
                    </div>
                    <div id='Table Content' style={{display:'flex', backgroundColor:'#FFFFFF', justifyContent:'space-between', padding: '8px'}}> 
                        <div style={{color:'#000000', fontWeight:'bold', fontSize:'12px', width:'20px'}}>6</div>
                        <div style={{color:'#000000', fontWeight:'bold', fontSize:'12px',width:'350px', textAlign:"left"}}>{this.props.points.data[5].team_name}</div>
                        <div style={{color:'#000000', fontWeight:'bold', fontSize:'12px',width:'20px'}}>{this.props.points.data[5].played}</div>
                        <div style={{color:'#000000', fontWeight:'bold', fontSize:'12px',width:'20px'}}>{this.props.points.data[5].won}</div>
                        <div style={{color:'#000000', fontWeight:'bold', fontSize:'12px',width:'20px'}}>{this.props.points.data[5].lost}</div>
                        <div style={{color:'#000000', fontWeight:'bold', fontSize:'12px',width:'20px'}}>{this.props.points.data[5].goaldifference}</div>
                        <div style={{color:'#000000', fontWeight:'bold', fontSize:'12px',width:'20px'}}>{this.props.points.data[5].points}</div>
                    </div>
                    <div id='Table Content' style={{display:'flex', backgroundColor:'#f2f2f2', justifyContent:'space-between', padding: '8px'}}> 
                        <div style={{color:'#000000', fontWeight:'bold', fontSize:'12px', width:'20px'}}>7</div>
                        <div style={{color:'#000000', fontWeight:'bold', fontSize:'12px',width:'350px', textAlign:"left"}}>{this.props.points.data[6].team_name}</div>
                        <div style={{color:'#000000', fontWeight:'bold', fontSize:'12px',width:'20px'}}>{this.props.points.data[6].played}</div>
                        <div style={{color:'#000000', fontWeight:'bold', fontSize:'12px',width:'20px'}}>{this.props.points.data[6].won}</div>
                        <div style={{color:'#000000', fontWeight:'bold', fontSize:'12px',width:'20px'}}>{this.props.points.data[6].lost}</div>
                        <div style={{color:'#000000', fontWeight:'bold', fontSize:'12px',width:'20px'}}>{this.props.points.data[6].goaldifference}</div>
                        <div style={{color:'#000000', fontWeight:'bold', fontSize:'12px',width:'20px'}}>{this.props.points.data[6].points}</div>
                    </div>
                    <div id='Table Content' style={{display:'flex', backgroundColor:'#FFFFFF', justifyContent:'space-between', padding: '8px'}}> 
                        <div style={{color:'#000000', fontWeight:'bold', fontSize:'12px', width:'20px'}}>8</div>
                        <div style={{color:'#000000', fontWeight:'bold', fontSize:'12px',width:'350px', textAlign:"left"}}>{this.props.points.data[7].team_name}</div>
                        <div style={{color:'#000000', fontWeight:'bold', fontSize:'12px',width:'20px'}}>{this.props.points.data[7].played}</div>
                        <div style={{color:'#000000', fontWeight:'bold', fontSize:'12px',width:'20px'}}>{this.props.points.data[7].won}</div>
                        <div style={{color:'#000000', fontWeight:'bold', fontSize:'12px',width:'20px'}}>{this.props.points.data[7].lost}</div>
                        <div style={{color:'#000000', fontWeight:'bold', fontSize:'12px',width:'20px'}}>{this.props.points.data[7].goaldifference}</div>
                        <div style={{color:'#000000', fontWeight:'bold', fontSize:'12px',width:'20px'}}>{this.props.points.data[7].points}</div>
                    </div>

                </div> 
                    

            </div>

                } 
            </div>
            
        )
    }
    
}
