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
        this.state = {
          imageVal:null
        };
        this.imageSubmit = this.imageSubmit.bind(this);
    }

    imageSubmit(value) {
        //console.log("Value", value);
        this.setState({
            imageVal: value
        });
    }

    render() {
        //these categories will come from user-inputted data eventually...somehow
        //using fake data right now
        //at last I'm passing props down, maybe I'll move the image uploader into this area for now until I figure it out
        return (
            <div className="app-container">
                <header className="upload-header">
                    <div className="upload-title">
                        Upload an Image
                    </div>
                </header>
                <ImageUploader onSubmit={this.imageSubmit}>
                    <MainWindow
                        imageSrc={this.state.imageVal}
                    >
                    </MainWindow>
                    <Sidebar
                        category = {this.props.data.categories}
                        subCategory = {this.props.data.subCategories}
                        imageData = {this.props.data.imageData}
                    />
                </ImageUploader>
                <div className="clear"></div>
            </div>
        );
    }
}


