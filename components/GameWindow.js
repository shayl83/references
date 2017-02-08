/**
 * Created by shayl on 2/7/2017.
 */
import React from 'react';

//connects upward to App.js

export default class GameWindow extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
        return (
          <div>
             You chose: {this.props.playerTeam} {this.props.playerTeamName}
          </div>
        );
    }
}
