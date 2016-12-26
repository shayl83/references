/**
 * Created by shayl on 12/24/2016.
 */
import React from 'react';
import style from '../scss/Sidebar.scss';

export default class Sidebar extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <section className="sidebar">
                sidebar tree
                <ul>
                    {this.props.category.map(function(name, index){
                        return <li key={ index }>{name}</li>;
                    })}
                </ul>
            </section>
        );
    }
}

