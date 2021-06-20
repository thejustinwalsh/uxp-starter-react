import '@babel/polyfill';
import ReactDOM from 'react-dom';
import React from 'react';

import { core as psCore } from 'photoshop';
import App from './App';

// Render dialog to DOM, this will show the UI in the container, like a panel
ReactDOM.render(<App />, document.getElementById('root'));

function commandHello() {
  psCore.showAlert({ message: '👋 Hi!' });
}

// @ts-expect-error install menu on window
window.commandHello = commandHello;
