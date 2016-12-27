/**
 * Created by shayl on 12/24/2016.
 */
import React from 'react';
import style from '../scss/Sidebar.scss';

export default class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        this.getImageData = this.getImageData.bind(this);
    }
    getImageData(){
        console.log(this.props.imageData);
    }
    render() {

        return (
            <section className="sidebar">
                sidebar tree goes here
                <ul onClick={this.getImageData}>
                    {this.props.category.map(function(name, index){
                        return <li key={ index }>{name}</li>;
                    })}
                </ul>
                <ul>
                    {this.props.subCategory.map(function(name, index){
                        return <li key={ index }>{name}</li>;
                    })}
                </ul>
            </section>
        );
    }
}

