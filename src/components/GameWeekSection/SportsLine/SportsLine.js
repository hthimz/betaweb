import React from 'react';
import RenderToLayer from 'material-ui/internal/RenderToLayer';
import { HardwareMemory } from 'material-ui/svg-icons';


export default class SportsLine extends React.Component{
    match={
        "team2_name": "Rajasthan Royals",
        "status": true,
        "team1_id": 65,
        "team2_id": 68,
        "data": [
            {
                "player_name": null,
                "substitute_in": null,
                "goal_type": null,
                "foul_type": null,
                "winner": 65,
                "minute": 46,
                "team_id": null,
                "substitute_out": null,
                "status": "complete",
                "event": "FT",
                "feed_id": 386,
                "player_id": null,
                "team_name": null
            },
            {
                "player_name": null,
                "substitute_in": null,
                "goal_type": null,
                "foul_type": null,
                "winner": null,
                "minute": 9,
                "team_id": null,
                "substitute_out": null,
                "status": null,
                "event": "HT",
                "feed_id": 385,
                "player_id": null,
                "team_name": null
            },
            {
                "player_name": "Neha Bisht",
                "substitute_in": null,
                "goal_type": "self",
                "foul_type": null,
                "winner": null,
                "minute": 0,
                "team_id": 68,
                "substitute_out": null,
                "status": null,
                "event": "GOAL",
                "feed_id": 390,
                "player_id": 1014,
                "team_name": "Rajasthan Royals"
            },
            {
                "player_name": "Aman Jr",
                "substitute_in": null,
                "goal_type": "self",
                "foul_type": null,
                "winner": null,
                "minute": 0,
                "team_id": 65,
                "substitute_out": null,
                "status": null,
                "event": "GOAL",
                "feed_id": 388,
                "player_id": 1128,
                "team_name": "Mumbai Indians"
            },
            {
                "player_name": "Chetanya Arora",
                "substitute_in": null,
                "goal_type": "self",
                "foul_type": null,
                "winner": null,
                "minute": 0,
                "team_id": 68,
                "substitute_out": null,
                "status": null,
                "event": "GOAL",
                "feed_id": 384,
                "player_id": 124,
                "team_name": "Rajasthan Royals"
            },
            {
                "player_name": "Sameer",
                "substitute_in": null,
                "goal_type": "self",
                "foul_type": null,
                "winner": null,
                "minute": 0,
                "team_id": 65,
                "substitute_out": null,
                "status": null,
                "event": "GOAL",
                "feed_id": 382,
                "player_id": 3649,
                "team_name": "Mumbai Indians"
            },
            {
                "player_name": "parveena",
                "substitute_in": null,
                "goal_type": "self",
                "foul_type": null,
                "winner": null,
                "minute": 0,
                "team_id": 65,
                "substitute_out": null,
                "status": null,
                "event": "GOAL",
                "feed_id": 380,
                "player_id": 3650,
                "team_name": "Mumbai Indians"
            },
            {
                "player_name": null,
                "substitute_in": null,
                "goal_type": null,
                "foul_type": null,
                "winner": null,
                "minute": 0,
                "team_id": null,
                "substitute_out": null,
                "status": null,
                "event": "ST",
                "feed_id": 378,
                "player_id": null,
                "team_name": null
            }
        ],
        "team1_name": "Mumbai Indians"
    }





    Line=match=>{
        for(var i=match.data.length;i>=0;i--){
            console.log('This is the data =', i)
        }
        console.log('This is gameweek section Function call', this.match);
}
        render() {
        

        return (
            <div>
                {this.Line(this.match)} 
                    <div>
                            <div>
                                this is GameWeek Section
                            </div>
                    </div>
            </div>
        );
    }
}
