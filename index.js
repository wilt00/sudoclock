import { renderer_start } from './modules/renderer.js';

renderer_start('clock');

function updateDate() {
    document.getElementById('date')
        .appendChild(document.createElement('p'))
        .appendChild(document.createTextNode(
            (new Date()).toDateString()
        ));
}

updateDate();
// Repeat every minute
window.setInterval(updateDate, 60000);



console.log("Reached the end of index.js");
