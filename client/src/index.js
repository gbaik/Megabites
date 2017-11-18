import React from 'react';
import { render } from 'react-dom';
import App from './App.jsx';

var touchsupport = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0)
if (!touchsupport){ // browser doesn't support touch
    document.documentElement.className += " non-touch"
}

render(<App/>, document.getElementById('root'));
