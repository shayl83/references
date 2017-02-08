/**
 * Created by shayl on 2/7/2017.
 */
import React from 'react';
import TeamSelect from './TeamSelect.js';
import NameTeam from './NameTeam.js';

//connects upward to App.js

export default class TitleWindow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            teamChoice:null,
            teamName:null
        };
        this.choseTeam = this.choseTeam.bind(this);
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
    render(){
        return (
            <div>
                {/* if they haven't chosen a team, show teamchoice component, otherwise hide */}
                {!this.state.teamChoice ?
                    <TeamSelect
                        gameData={this.props.gameData}
                        choseTeam={this.choseTeam}
                /> : null}
                {/* if they HAVE chosen a team show name team component, otherwise hide - will return startGame when ready, which goes back up to app.js */}
                {this.state.teamChoice ?
                    <NameTeam
                        gameData={this.props.gameData}
                        namedTeam={this.namedTeam}
                        teamChoice={this.state.teamChoice}
                        startGame={this.props.startGame}
                /> : null}
            </div>
        );
    }
}