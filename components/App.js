import React from 'react';
import TeamSelect from './TeamSelect.js';
import NameTeam from './NameTeam.js';
import style from '../scss/main.scss';

/*
 <App
    gameData={gameData}
 />
 */

//connects upward to to index.js

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            teamChoice:null,
            teamName:null,
            playerReady:false
        };

        this.choseTeam = this.choseTeam.bind(this);
        this.handleReady = this.handleReady.bind(this);
        this.namedTeam = this.namedTeam.bind(this);
    }

    choseTeam(team){
        //they chose this team so set the state to what it is
        this.setState({
            teamChoice:team
        });
    }
    namedTeam(teamName){
        //they named the team so set the state to what it is
        this.setState({
            teamName:teamName
        });
    }
    handleReady(e){
        if (e.target.value.indexOf('yes') >= 0){
            this.setState({
                playerReady:true
            });
        }
        else {
            this.setState({
                playerReady:false,
                teamChoice:null
            });
        }
    }

    render() {
        //these categories will come from user-inputted data eventually...somehow
        let youChose = null;
        let pickTeam = null;
        let nameTeam = null;

        //if the player is not ready and they haven't already picked a team, they can pick a team
        if (!this.state.playerReady && !this.state.teamChoice){
            pickTeam = <TeamSelect
                onTeamChoice={this.choseTeam}
                gameData={this.props.gameData}
            />;
        }
        //if the player is not ready but has picked a team, let them be ready
        if (!this.state.playerReady && this.state.teamChoice){
            youChose = <div>
                <div>You Chose Team {this.state.teamChoice}, Are you Ready?? </div>
                <button value="yes" onClick={this.handleReady}>Hell Yeah!</button>
                <button onClick={this.handleReady} value="no">NO!!! Wrong Team!</button>
            </div>;
        }
        //if the player is ready and has picked a team, its time to move on!
        if (this.state.playerReady && this.state.teamChoice) {
            nameTeam = <NameTeam
                onNameTeam={this.namedTeam}
            />;
        }
        //once everything is named, you can pass all the info into the "Game" component, and then do things from there next
        return (
            <div className="app-container">
                <header className="upload-header">
                    <div className="upload-title">
                        {this.state.teamChoice ? 'Team ' + this.state.teamChoice : 'Choose a Team'}
                    </div>
                </header>
                {pickTeam}
                {youChose}
                {nameTeam}
                <div className="clear"></div>
            </div>
        );
    }
}


