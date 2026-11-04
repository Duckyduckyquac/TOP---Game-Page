class GameCollection {
    constructor(){
        this.titleToimageFilePaths = {
            "Dead as Disco": require("../assets/images/dead_as_disco.jpg"),
            "Hollow Knight Silksong": require("../assets/images/hollow_knight_silksong.jpg"),
            "Hollow Knight": require("../assets/images/hollow_knight.jpg"),
            "Limbus Company": require("../assets/images/limbus_company.jpg"),
            "Monster Hunter Rise": require("../assets/images/monster_hunter_rise.jpg"),
            "Slay The Spire": require("../assets/images/slay_the_spire.png"),
            "Stardew Valley": require("../assets/images/stardew_valley.png"),
            "Ultrakill": require("../assets/images/ultrakill.png")
        }
    }
    getTitleToImageFilePaths(){
        return this.titleToimageFilePaths;
    }
}

module.exports = {GameCollection};