/**
 * Created by shayl on 2/11/2017.
 */

import React from 'react';

//this screen is where a player puts together their team from a list of choices
//will also show them how their team affects the stats of their team

export default class PlayerSelection extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        //console.log(this.props.teamSpecies.toLowerCase());
        let teamSpecies = this.props.teamSpecies.toLowerCase();
        let teamObj = this.props.gameData.teams[teamSpecies].players;
        let players = [];
        //console.log(teamObj);
        //get players from chosen team
        for (var player in teamObj){
            if(!teamObj.hasOwnProperty(player)){
                continue;
            }
            let obj = teamObj[player];
            players.push(<div key={obj.name}><div><strong>Player Name: {obj.name}</strong></div><div>Player Steroids: {obj.steroids}</div><hr/></div>);
        }
        return (
            <div>
                <div>Team Species: {this.props.teamSpecies}</div>
                <div>Team Name: {this.props.teamName}</div>
                Choose your players
                {players}
            </div>
        );
    }
}
