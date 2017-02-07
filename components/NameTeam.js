/**
 * Created by shayl on 2/6/2017.
 */
import React from 'react';

//connects upward to App.js

export default class NameTeam extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
          <div>
              <div>Name your team</div>
              <input type="text" />
              <button>Submit</button>
          </div>
        );
    }
}