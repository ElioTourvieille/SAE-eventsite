/* ------------------------------- NAME SLIDER ------------------------------ */
const names = document.querySelector(".names");
let specificNames = names.querySelectorAll("*");
let translate = 0;
let namesMargin = names.getBoundingClientRect().left;

function updateText() {
    let delta = (Date.now() - lastUpdate)/1000; // delta time to have consistent speed regardless of refresh rates
    lastUpdate = Date.now();
    requestAnimationFrame(updateText);

    translate += 70 * delta; // each seconds move from 80px
    const rect = specificNames[1].getBoundingClientRect();
    names.style = "margin-left: -" + translate + "px"; // apply pos
    if (rect.left >= namesMargin) return; 
    // to put the first element in last pos when then second start disapearing (why second and first idk i tested like this it work with the first one totaly disapeatring creating glitch)
    names.appendChild(specificNames[0]);
    specificNames = names.querySelectorAll("*"); // updates names array after change
    translate = 0;
    names.style = "margin-left: -" + translate + "px"; // apply pos
    namesMargin = names.getBoundingClientRect().left; // doing this kind of overkill buut allow resize without reload (without start glitching)
}
let lastUpdate = Date.now();
requestAnimationFrame(updateText);