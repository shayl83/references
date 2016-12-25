import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import style from './node_modules/node.normalize.scss/_normalize.scss';

//this page just renders the actual app

ReactDOM.render(
    <App />,
    document.getElementById('container')
);