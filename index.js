import { renderer_start } from './modules/renderer.js';

renderer_start('clock');

document.getElementById('date')
    .appendChild(document.createElement('p'))
    .appendChild(document.createTextNode(
        (new Date()).toDateString()
    ));

console.log("Reached the end of index.js");
