const htmlZone = document.querySelector(".html")
const cssZone = document.querySelector(".css")

const blocButton = document.getElementById("bloc-btn")
const styleButton = document.getElementById("style-btn")

const rightZone = document.querySelector(".right-zone")
const appContainer = document.querySelector(".App")

const changePanel = (goTo) => {
    displayRightZone()
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


function hideRightZone() {
    rightZone.classList.add("slided");
    appContainer.style = "grid-template-columns: 1fr 0fr";
    setTimeout(() => appContainer.style = "grid-template-columns: 1fr 0", 200);
}
function displayRightZone() {
    appContainer.style = "";
    rightZone.classList.remove("slided");

}

document.querySelectorAll('.outline-hover').forEach(element => {
    element.addEventListener('click', () => {
        changePanel('style');
    });
  });
  