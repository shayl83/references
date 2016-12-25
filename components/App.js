import React from 'react';
import style from '../scss/main.scss';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        //this.state = { counter: 0 };
    }

    render() {
        return (
            <div className="app-container">
                <header>
                    <div className="test">Webpack is doing its thing with React and ES2015</div>
                    <div>stacey changed in intellij hi lance test</div>
                </header>
                <section className="main-image-view">
                    main image view here
                </section>
                <section className="sidebar">
                    sidebar tree
                    <ul>
                        <li>Category 1</li>
                        <li>Category 2</li>
                        <li>Category 3</li>
                    </ul>
                </section>
                <div className="clear"></div>
            </div>
        );
    }
}
