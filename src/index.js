import _ from 'lodash';
import './style.scss';
import { monkey } from "./monkey";

function component() {
    const element = document.createElement('div');
  
    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');
    monkey();
    return element;
  }
  
  document.body.appendChild(component());