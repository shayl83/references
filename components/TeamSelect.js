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
            teamReady:false
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e){
        // this.setState({
        //     choseTeam:true
        // });
        this.props.choseTeam(e.target.value);
    }
    render(){
        let buttons = [];
        let teams = this.props.gameData.teams;
        for (var team in teams){
            if (!teams.hasOwnProperty(team)){
                continue;
            }
            let obj = teams[team];
            buttons.push(<button value={obj.title} key={obj.title} onClick={this.handleClick}>{obj.title}</button>);
        }
        return (
            <div>
                {buttons}
            </div>
        );
    }
}
