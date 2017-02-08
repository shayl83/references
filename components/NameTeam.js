/**
 * Created by shayl on 2/6/2017.
 */
import React from 'react';

//connects upward to App.js

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
        event.preventDefault();
        this.props.onNameTeam(this.state.value);
    }
    render(){
        return (
        <form onSubmit={this.handleSubmit}>
              <div>Name your team</div>
              <input type="text" onChange={this.handleChange} value={this.state.value} />
              <input type="submit" value="Submit" />
          </form>
        );
    }
}