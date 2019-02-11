import React, {Compornent, Component} from 'react'
import TeamCard from './TeamCard/TeamCard';
export default class Team extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data:this.props.teams,
            id:this.props.id,
        }
    }

    //Image Injector for the Team Images to be populated by the Data 
    imageInjector = () => {
        let table = [];
        let n=4;
        // Outer loop to create Main Row
        for (let i = 0; i < (n+2)/3; i++) {
            let children = []
            //Inner loop to create cParent For Loop
            for (let j = 0; j < 3 && this.props.teams.data[3*i+j]!==undefined; j++) {
              children.push(<td style={{margin:'50px'}}><TeamCard Image={this.data[3*i+j].image} Name={this.data[3*i+j].name} city={this.data[3*i+j].city} /></td>)
            }
            //Create the Children Loop
            table.push(<tr style={{display:'flex', justifyContent: 'start',width:'80%',height :'350px'}}>{children}</tr>)
        }
        return table;
    }

    render(){
        console.log("ID is coming in Tea",this.props.id);
        console.log("teams are coming in",this.props.teams)
        return(
                <div id= "Team Section ">
                {this.imageInjector()}
                </div>
        )
    }
    
}
