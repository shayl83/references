import React from 'react';
import MainWindow from './MainWindow.js';
import style from '../scss/main.scss';

//connects up to to index.js

export default class App extends React.Component {
    constructor(props) {
        super(props);
        //this.state = { counter: 0 };
        //this.state = {value: ''};
        // this.state = {
        //     imageVal:null,
        //     textVal:null
        // };
        //this.imageSubmit = this.imageSubmit.bind(this);
    }

    // imageSubmit(value, text) {
    //     //console.log("Value", value);
    //     this.setState({
    //         imageVal: value,
    //         textVal:text
    //     });
    // }

    render() {
        //these categories will come from user-inputted data eventually...somehow

        return (
            <div className="app-container">
                <header className="upload-header">
                    <div className="upload-title">
                        Choose a Team
                    </div>
                </header>
                <div>
                    <button>
                        {this.props.gameData.teams.gargoyles.title}
                    </button>
                    <button>
                        {this.props.gameData.teams.dragons.title}
                    </button>
                    <button>
                        {this.props.gameData.teams.kittens.title}
                    </button>
                </div>
                {/*<ImageUploader uploadSubmit={this.imageSubmit}>*/}
                    {/*<MainWindow*/}
                        {/*imageSrc={this.state.imageVal}*/}
                        {/*imageCat={this.state.textVal}*/}
                    {/*>*/}
                    {/*</MainWindow>*/}
                    {/*<Sidebar*/}
                        {/*category = {this.props.data.categories}*/}
                        {/*subCategory = {this.props.data.subCategories}*/}
                        {/*imageData = {this.props.data.imageData}*/}
                    {/*/>*/}
                {/*</ImageUploader>*/}
                <div className="clear"></div>
            </div>
        );
    }
}


