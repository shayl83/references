import React from 'react';
import TitleWindow from './TitleWindow.js';
import GameWindow from './GameWindow.js';


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
            playerTeam:null,
            playerTeamName:null,
            gameReady:false
        };
        this.startGame = this.startGame.bind(this);
    }
    //this comes up from <TeamChoice> and <TeamName> and lets us know at the app level what the player chose for each, which I can pass to gamewindow
    startGame(teamChoice, teamName){
        this.setState({
            playerTeam:teamChoice,
            playerTeamName:teamName,
            gameReady:true
        });
    }
    render() {
        //once everything is named, you can pass all the info into the "Game" component, and then do things from there next
        return (
            <div className="app-container">
                {/* if the state of the game is not ready, show title window */}
                {!this.state.gameReady ? <TitleWindow
                    startGame={this.startGame}
                    gameData={this.props.gameData}
                /> : null}
                {/* if the state of the game IS ready, show the game window */}
                {this.state.gameReady ? <GameWindow
                        gameData={this.props.gameData}
                        playerTeam={this.state.playerTeam}
                        playerTeamName={this.state.playerTeamName}
                /> : null}
                <div className="clear"></div>
            </div>
        );
    }
}


