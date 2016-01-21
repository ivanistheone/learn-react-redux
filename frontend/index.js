import App from './js/App';
require('file?name=[name].[ext]!./index.html');    // copies index.html to dist/

console.log('At the beginning of index.js');

var app = new App();
app.start();
app.render()

console.log('At the end of index.js');