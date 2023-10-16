const htmlZone = document.getElementById("right-zone-html")
const cssZone = document.getElementById("right-zone-css")

const blocButton = document.getElementById("bloc-panel-button")
const styleButton = document.getElementById("style-panel-button")

const changePanel = (goTo) => {
    if (goTo === "style"){
        //Retirer la classe hidden à la zone CSS
        cssZone.classList.remove("hidden")
        //Ajouter la classe hidden à la zone des blocs html
        htmlZone.classList.add("hidden")

        //Ajouter la classe panel-not-active au bouton des blocs
        blocButton.classList.add("panel-not-active")
        //Ajouter la classe panel-not-active au bouton du style
        styleButton.classList.remove("panel-not-active")
    } else {
        //Retirer la classe hidden à la zone CSS
        cssZone.classList.add("hidden")
        //Ajouter la classe hidden à la zone des blocs html
        htmlZone.classList.remove("hidden")

        //Ajouter la classe panel-not-active au bouton des blocs
        blocButton.classList.remove("panel-not-active")
        //Ajouter la classe panel-not-active au bouton du style
        styleButton.classList.add("panel-not-active")
    }
}