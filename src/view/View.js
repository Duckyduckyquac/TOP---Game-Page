class View {
    constructor(){
        this.mainContent = document.querySelector(".home-container__main-content");
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
}

module.exports = {View};