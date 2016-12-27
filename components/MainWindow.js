/**
 * Created by shayl on 12/24/2016.
 */
import React from 'react';
import style from '../scss/MainWindow.scss';

export default class MainWindow extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <section className="main-view">
                <div className="main-image-thumb">
                    {this.props.children}
                    <div>
                        <strong>{this.props.imageCat}</strong>
                    </div>
                </div>
                <div className="main-image-view">
                    <div><img src={this.props.imageSrc} /></div>
                </div>
            </section>
        );
    }
}
