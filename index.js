import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import style from './node_modules/node.normalize.scss/_normalize.scss';

//this page just renders the actual app

const fakeAppData = {
    categories: [
        "Animals",
        "People",
        "Monsters",
        "Cartoons"
    ],
    subCategories: [
        "Hands",
        "Feet"
    ],
    imageData: [
        {
            imageID: 1,
            mainCategory: "Animals",
            subCategories: ["Cats", "Feet"],
            title: "Cat Feet",
            url:"http://lorempixel.com/400/200/cats"
        },
        {
            imageID: 2,
            mainCategory: "People",
            subCategories: ["Female", "Face"],
            title: "Female Human Feet",
            url:"http://lorempixel.com/400/200/"
        }

    ],
    defaultImage: "http://lorempixel.com/400/200/cats"
};
// class Team {
//     constructor(species, attributes, players){
//
//     }
// };

const gameData = {
    teams: {
        gargoyles: {
            title:'Gargoyles',
            health:1,
            strength:1,
            insanity:1
        },
        dragons: {
            title:'Dragons',
            health:1,
            strength:1,
            insanity:1
        },
        kittens: {
            title:'Kittens',
            health:1,
            strength:1,
            insanity:1
        }
    },
    arenas: {
        cave: {
            darkness:1,
            size:1
        },
        beach: {
            darkness:1,
            size:1
        }
    }
}

ReactDOM.render(
    <App
        gameData={gameData}
    />,
    document.getElementById('container')
);