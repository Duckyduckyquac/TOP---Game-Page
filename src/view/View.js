class View {
    constructor(){
        this.homeContainer = document.querySelector(".home-container");
        this.mainContent = document.querySelector(".home-container__main-content");

        this.homeContainer.addEventListener('click', function(){

        });
    }

    showGameDisplay(titleToImagePathObject){
        this.mainContent.innerHTML = this.#generateGameDisplay(titleToImagePathObject);
        return true;
    }
    
    #generateGameDisplay(titleToImagePathObject){
        let gameCards = this.#generateGameCards(titleToImagePathObject);

        let gameDisplay = `
        <ul class="main-content__game-display">
            ${gameCards}
        </ul>
        `;
        
        return gameDisplay;
    }

    /**
     * 
     * @param {Object} titleToImageObject 
     */
    #generateGameCards(titleToImagePathObject){
        let gameCards = ``;

        let titleAndImagePaths = Object.entries(titleToImagePathObject);
        for(let [title, imagePath] of titleAndImagePaths){
            let currentGameCard = `
            <li class="game-display__card">
                <img src="${imagePath}" alt="${title} image" class="card__image">
                <h1 class="card__h1">${title}</h1>
            </li>
            `;
            gameCards = gameCards + currentGameCard;
        }
        return gameCards;
    }

    // ----- Controller Requests -----
    bindRequestCommunicator(callbackFromController){
        this.onRequest = callbackFromController;
    }
}

module.exports = {View};