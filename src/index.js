// index.js
require('./index.css');
const {GameCollection} = require('./model/GameCollection.js');
const {View} = require('./view/View.js');
const {Controller} = require('./controller/Controller.js');

let currentController = new Controller();
currentController.handleShowGameDisplay();