/**
 * Created by shayl on 2/6/2017.
 */
import React from 'react';

//connects upward to TitleWindow.js

export default class NameTeam extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            value: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event){
        this.setState({
            value: event.target.value
        });
    }
    handleSubmit(event){
        //let teamChoice = this.props.teamChoice;
        //let teamName = this.state.value;
        event.preventDefault();
        this.props.namedTeam(this.state.value);
        //this sends the player's overall choices up to the app.js file to gamewindow can use it
        //this.props.startGame(teamChoice, teamName);
    }
    render(){
        return (
        <form onSubmit={this.handleSubmit}>
              <div>Team species: {this.props.teamChoice}</div>
              <div>Name your team</div>
              <input type="text" onChange={this.handleChange} value={this.state.value} />
              <input type="submit" value="Submit" />
          </form>
        );
    }
}