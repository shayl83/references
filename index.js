import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import style from './node_modules/node.normalize.scss/_normalize.scss';

//this page renders the actual app and passes in the top-level data (will also eventually pull in saved stuff from localstorage)
const gameData = {
    //title, health, strength, insanity, players
    teams: {
        team1: new Team('Gargoyles', 20, 20, 5, {
            //name, steroids
            player1:new Player('stacey',30),
            player2:new Player('shayl',20),
            player3:new Player('hyster',50)
        }),
        team2: new Team('Dragons', 30, 25, 10, {
            //name, steroids
            player1:new Player('stacey',0),
            player2:new Player('shayl',10),
            player3:new Player('hyster',50)
        }),
        team3: new Team('Kittens', 15, 5, 30, {
            //name, steroids
            player1:new Player('stacey',0),
            player2:new Player('shayl',10),
            player3:new Player('hyster',50)
        }),
        team4: new Team('Werewolves', 18, 35, 25, {
            //name, steroids
            player1:new Player('stacey',0),
            player2:new Player('shayl',10),
            player3:new Player('hyster',50)
        }),
    },
    //title, light, size
    arenas: {
        arena1: new Arena('cave', 2, 50),
        arena2: new Arena('beach', 20, 20),
    }
};
//each team is also going to eventually have an array of players to choose from, which will probably have stats of their own
//data constructors
function Team(title, health, strength, insanity, players){
    this.title = title;
    this.health = health;
    this.strenth = strength;
    this.insanity = insanity;
    this.players = players;
}
function Player(name, steroids){
    this.name = name;
    this.steroids = steroids;
}
function Arena(title, light, size){
    this.title = title;
    this.light = light;
    this.size = size;
}
console.log(gameData);
ReactDOM.render(
    <App
        gameData={gameData}
    />,
    document.getElementById('container')
);