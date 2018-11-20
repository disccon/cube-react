import React from 'react';
import { render } from 'react-dom'
import App from "./Component/App/App";
// Fonts CSS
import './fonts/fonts.css';
//Reset CSS
import './css/reset.css';
//Style CSS
import './css/style.css';


render(
    <App/>,
document.getElementsByClassName('container')[0]
);