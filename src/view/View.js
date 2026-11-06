class View {
    constructor(){
        this.homeContainer = document.querySelector(".home-container");
        this.mainContent = document.querySelector(".home-container__main-content");

        this.homeContainer.addEventListener('click', function(event){
            if(event.target.closest("#menu-toggle")){
                event.preventDefault();
                this.communicateMenuToggle(event);
            }
            else if(event.target.closest("#dark-mode-toggle")){
                event.preventDefault();
                this.communicateDarkModeToggle(event);
            }
            else if(event.target.closest("#show-developer-information-button")){
                event.preventDefault();
                this.communicateShowDeveloperInformationButton(event);
            }

            else if(event.target.closest(".developer-credit__close-button")){
                event.preventDefault();
                this.communicateCloseDeveloperInformationButton(event);
            }
        }.bind(this));
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

    toggleMenu(event){
        let homeContainer = event.target.closest('.home-container');
        let sidebar = homeContainer.querySelector('.home-container__sidebar');
        sidebar.classList.toggle("home-container__sidebar--hidden");
    }

    toggleDarkMode(event){
        let homeContainer = event.target.closest('.home-container');
        homeContainer.classList.toggle("home-container--light-mode");
    }

    showDeveloperInformation(event){
        let homeContainer = event.target.closest(".home-container");
        let backdrop = homeContainer.querySelector(".home-container__backdrop");
        let developerCreditDialog = homeContainer.querySelector(".home-container__developer-credit");

        backdrop.classList.toggle("home-container__backdrop--hidden");
        developerCreditDialog.classList.toggle("home-container__developer-credit--hidden");
    }

    closeDeveloperInformation(event){
        let homeContainer = event.target.closest(".home-container");
        let backdrop = homeContainer.querySelector(".home-container__backdrop");
        let developerCreditDialog = homeContainer.querySelector(".home-container__developer-credit");

        backdrop.classList.toggle("home-container__backdrop--hidden");
        developerCreditDialog.classList.toggle("home-container__developer-credit--hidden");
    }

    communicateMenuToggle(event){
        let wrappedRequest = this.wrapRequest("menuToggle", [event]);
        this.onRequest(wrappedRequest);
    }

    communicateDarkModeToggle(event){
        let wrappedRequest = this.wrapRequest("darkModeToggle", [event]);
        this.onRequest(wrappedRequest);
    }

    communicateShowDeveloperInformationButton(event){
        let wrappedRequest = this.wrapRequest("showDeveloperInformationButton", [event]);
        this.onRequest(wrappedRequest);
    }
    communicateCloseDeveloperInformationButton(event){
        let wrappedRequest = this.wrapRequest("closeDeveloperInformationButton", [event]);
        this.onRequest(wrappedRequest);
    }

    // ----- Controller Requests -----
    bindRequestCommunicator(callbackFromController){
        this.onRequest = callbackFromController;
    }

    wrapRequest(request, parameters){
        let wrappedRequest = {
            "request": request,
            "parameters": parameters
        };

        return wrappedRequest;
    }
}

module.exports = {View};