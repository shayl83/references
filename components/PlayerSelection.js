/**
 * Created by shayl on 2/11/2017.
 */

import React from 'react';

//this screen is where a player puts together their team from a list of choices
//will also show them how their team affects the stats of their team

export default class PlayerSelection extends React.Component{
    constructor(props){
        super(props);
        this.choosePlayer = this.choosePlayer.bind(this);
    }
    choosePlayer(players){

        let playerArr = [];
        playerArr.push(players);
        //not sure why this doesn't keep building the array and instead makes new ones with new values, assuming
        //that is even what's happening.
        //ok so it was a scoping thing because I was calling a new function each time, instead of it being inside
        //the render method
        console.log(playerArr);
    }
    render(){
        //console.log(this.props.teamSpecies.toLowerCase());

        let teamSpecies = this.props.teamSpecies.toLowerCase();
        let teamObj = this.props.gameData.teams[teamSpecies].players;
        let players = [];
        let playerArrDisplay = [];
        //this one will go back up with a callback prop
        //also need to limit them from choosing one more than once, also can only choose X number of players
        //can also remove
        //also it will calculate some sort of numbers crap
        let playerArrayData = [];
        let roster = {};
        //console.log(teamObj);
        //get players from chosen team
        Object.keys(teamObj).forEach(function(_item){

            roster[_item] = teamObj[_item];
        });
        console.log(roster);

        {/*for (var player in teamObj){*/}
            {/*if(!teamObj.hasOwnProperty(player)){*/}
                {/*continue;*/}
            {/*}*/}
            {/*let obj = teamObj[player];*/}
            {/*//console.log(obj);*/}

            {/*players.push(*/}
                {/*<div key={obj.name}>*/}
                    {/*<div>*/}
                        {/*<strong>Player Name: {obj.name}</strong>*/}
                    {/*</div>*/}
                    {/*<div>Player Steroids: {obj.steroids}</div>*/}
                    {/*<button onClick={*/}
        //                 ()=>{
        //                     playerArrayData.push(obj);
        //                     console.log(playerArrayData);
        //                     //playerSelection(obj);
        //                     //this also doesn't work the way I want
        //                     //playerChoice(obj);
        //                 }
        //             }>Select</button><hr/>
        //         </div>
        //     );
        // }

        return (
            <div>
                <div>Team Species: {this.props.teamSpecies}</div>
                <div>Team Name: {this.props.teamName}</div>
                Choose your players
                {players}
                <hr/>
                <div>You Chose:</div>
                <div>{playerArrDisplay}</div>
            </div>
        );
    }
}
const playerChoice = (obj) => {
    //yeah this does the same thing
    let playerArr = [];
    playerArr.push(obj);
    console.log(playerArr);
};