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
                    put whatever image I uploaded here as a thumbnail
                    <img src={this.props.imageSrc} />
                </div>
                <div className="main-image-view">
                    display big image I'm viewing for arting here mainwindow
                    has changed why hmr not working!!
                </div>
            </section>
        );
    }
}
