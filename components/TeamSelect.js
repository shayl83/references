/**
 * Created by shayl on 2/6/2017.
 */
import React from 'react';

//connects upward to App.js

export default class TeamSelect extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            choseTeam:false,
            teamChoice:null
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleConfirm = this.handleConfirm.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }

    handleClick(e){
        //let teamChoice = e.target.value;
        //this.props.choseTeam(e.target.value);
        this.setState({
            teamChoice: e.target.value,
            choseTeam:true
        });
    }
    //call choseTeam callback up to TitleWindow.js
    handleConfirm() {
        this.props.choseTeam(this.state.teamChoice);
    }
    //reset team choice if they choose no
    handleReset(){
        this.setState({
            choseTeam:false,
            teamChoice:null
        });
    }
    render(){
        let buttons = [];
        let teams = this.props.gameData.teams;
        let confirm = null;
        //check for buttons being needed
        if (!this.state.teamChoice){
            for (var team in teams){
                if (!teams.hasOwnProperty(team)){
                    continue;
                }
                let obj = teams[team];
                //when they click a team, the confirm button will show up, which will pass the value up if they click yes
                buttons.push(<button value={obj.title} key={obj.title} onClick={this.handleClick}>{obj.title}</button>);
            }
        }
        //if they have chosen a team show confirm
        if (this.state.choseTeam) {
            //if they chose a team, have a confirm button
            confirm = <div>You chose {this.state.teamChoice}. Is that correct?
                <button onClick={this.handleConfirm}>Yes</button> <button onClick={this.handleReset}>No!</button>
            </div>;
        }
        return (
            <div>
                {buttons}
                {confirm}
            </div>
        );
    }
}
