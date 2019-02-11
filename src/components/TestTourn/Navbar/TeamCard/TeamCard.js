import React from 'react';

export default class TeamCard extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <div id="Team Image"><img src={this.props.Image}/></div>
                <div id ="Team Name">{this.props.Name}</div>
                <div id="Team City">{this.props.city}</div>
                {/* <div id="Team  Sport"></div> */}

            </div>
        );
    }
}