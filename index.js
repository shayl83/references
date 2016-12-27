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
ReactDOM.render(
    <App
        data={fakeAppData}
    />,
    document.getElementById('container')
);