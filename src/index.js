// index.js
require('./index.css');
const {GameCollection} = require('./model/GameCollection.js');
const {View} = require('./view/View.js');

let currentGameCollection = new GameCollection();
let currentView = new View();
let titleToImageFilePaths = currentGameCollection.getTitleToImageFilePaths();

currentView.showGameDisplay(titleToImageFilePaths);