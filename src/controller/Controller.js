// controller.js

const {View} = require("../view/View.js");
const {GameCollection} = require("../model/GameCollection.js");

class Controller{
    /**
     * 
     * @param {View} view 
     * @param {GameCollection} gameCollection 
     */
    constructor(){
        this.view = new View();
        this.gameCollection = new GameCollection();

        this.view.bindRequestCommunicator(this.processRequest.bind(this));
    }
    
    processRequest(){

    }

    handleShowGameDisplay(){
        let titleToImagePath = this.gameCollection.getTitleToImageFilePaths();
        this.view.showGameDisplay(titleToImagePath);
        return true;
    }
}

module.exports = {Controller};