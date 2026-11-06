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
    
    processRequest(wrappedRequest){
        let request = wrappedRequest.request;
        let parameters = wrappedRequest.parameters;

        if(typeof request !== 'string'){
            return false;
        }

        switch(request){
            case "menuToggle":
                this.handleMenuToggle(parameters);
                break
            case "darkModeToggle":
                this.handleDarkModeToggle(parameters);
                break;
            case "showDeveloperInformationButton":
                this.handleshowDeveloperInformationButton(parameters);
                break;
            case "closeDeveloperInformationButton":
                this.handleCloseDeveloperInformationButton(parameters);
                break;
        }
    }
    handleMenuToggle(parameters){
        let event = parameters[0];
        this.view.toggleMenu(event);
    }
    handleDarkModeToggle(parameters){
        let event = parameters[0];
        this.view.toggleDarkMode(event);
    }
    handleshowDeveloperInformationButton(parameters){
        let event = parameters[0];
        this.view.showDeveloperInformation(event);
    }
    handleCloseDeveloperInformationButton(parameters){
        let event = parameters[0];
        this.view.closeDeveloperInformation(event);
    }

    handleShowGameDisplay(){
        let titleToImagePath = this.gameCollection.getTitleToImageFilePaths();
        this.view.showGameDisplay(titleToImagePath);
        return true;
    }
}

module.exports = {Controller};