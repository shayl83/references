/**
 * Created by shayl on 2/6/2017.
 */
import React from 'react';

//connects upward to App.js

export default class TeamSelect extends React.Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e){
        this.props.choseTeam(e.target.value);
    }
    render(){
        return (
            <div>
                <button onClick={this.handleClick} value={this.props.gameData.teams.gargoyles.title}>
                    {this.props.gameData.teams.gargoyles.title}
                </button>
                <button onClick={this.handleClick} value={this.props.gameData.teams.dragons.title}>
                    {this.props.gameData.teams.dragons.title}
                </button>
                <button onClick={this.handleClick} value={this.props.gameData.teams.kittens.title}>
                    {this.props.gameData.teams.kittens.title}
                </button>
            </div>
        );
    }
}
