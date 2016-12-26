import React from 'react';
import MainWindow from './MainWindow.js';
import Sidebar from './Sidebar.js';
import ImageUploader from './ImageUploader';
import style from '../scss/main.scss';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        //this.state = { counter: 0 };
        //this.state = {value: ''};
    }

    render() {
        function handleClick(e){
            console.log(e);
        }
        //these categories will come from user-inputted data eventually...somehow
        //at last I'm passing props down, maybe I'll move the image uploader into this area for now until I figure it out
        let categories = ['animals', 'humans', 'monsters']
        return (
            <div className="app-container">
                <header className="upload-header">
                    <div className="upload-title">
                        Upload an Image
                    </div>
                </header>
                <ImageUploader>
                    <MainWindow imageSrc="http://lorempixel.com/400/200/">
                    </MainWindow>
                    <Sidebar
                        category={categories}
                    />
                </ImageUploader>
                <div className="clear"></div>
            </div>
        );
    }
}


