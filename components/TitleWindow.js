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
                <TeamSelect
                    gameData={this.props.gameData}
                    choseTeam={this.choseTeam}
                />
                <NameTeam
                    gameData={this.props.gameData}
                    namedTeam={this.namedTeam}
                />
            </div>
        );
    }
}