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
        return (
            <div className="app-container">
                <header className="upload-header">
                    <div className="upload-title">
                        Upload an Image
                    </div>
                    <ImageUploader/>
                </header>
                <MainWindow />
                <Sidebar />
                <div className="clear"></div>
            </div>
        );
    }
}
