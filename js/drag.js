let firstMoved = false;
const webPage = document.querySelector(".web-page");
const moveHint = document.querySelector(".move-hint");

interact('.dragable')
    .draggable({
    inertia: true,
    modifiers: [
        interact.modifiers.restrictRect({
            restriction: document.querySelector('.ordered'),
            endOnly: true
        })
    ],
    listeners: {
        // call this function on every dragmove event
        move: dragMoveListener,
        end (event) {
            // check if moved to the right place
            const target = event.target;
            target.setAttribute('data-x', 0); // reset x move
            target.setAttribute('data-y', 0); // reset y move
            dragMoveListener(event);

            const endTarget = document.elementFromPoint(event.client.x, event.client.y);
            if (!endTarget) {
                target.setAttribute('data-x', 0); // reset x move
                target.setAttribute('data-y', 0); // reset y move
                dragMoveListener(event);
                return;
            };
            if ( isDescendant(document.querySelector(".left-zone"), endTarget) ) {
            // if (endTarget.className == "web-page" || endTarget.className == "move-hint" || endTarget.className == "") {
                // change between first page (ask to move) and webpage for the first time
                if (!firstMoved) {
                    firstMoved = true;
                    webPage.classList.remove("hidden");
                    moveHint.classList.add('hidden');
                }
                // handle drag and drop
                let forDisplay = target.getAttribute("data-for");
                //Handle the typescript element
                if (forDisplay === "header"){
                    typeIt.go()
                }
                // check if multiple element can be added
                if (target.getAttribute("data-number")) { // multiple added handle the number
                    let nb = parseInt(target.getAttribute("data-number")); // get the number
                    let forDisplayBase = forDisplay + "-";
                    while (document.getElementById(forDisplay + "-" + (nb + 1))) {
                        appendElement(forDisplayBase + nb)
                        nb++
                    }
                    target.removeAttribute("data-number");
                    target.classList.add("hidden");
                    target.classList.remove("dragable");
                    forDisplay += "-" + nb;
                } else { // only one remove just after dragged
                    target.classList.remove("dragable");
                    target.classList.add('hidden');
                }
                // everytime add the toDisplay
                if (document.getElementById(forDisplay)) {
                    appendElement(forDisplay)
                } else {
                    target.classList.add("dragable");
                    target.classList.remove('hidden');
                    alert("element pas lier!");
                }
            }
          }
    }
});

function appendElement(element) {
    document.getElementById(element).classList.remove("hidden");
    document.getElementById(element).classList.add("added");
    document.getElementById(element).style.animation = "appear 0.5s linear";
}

function dragMoveListener (event) {
    const target = event.target;
    // keep the dragged position in the data-x/data-y attributes
    let x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx;
    let y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

    // translate the element
    target.style.transform = 'translate(' + x + 'px, ' + y + 'px)';

    // update the posiion attributes
    target.setAttribute('data-x', x);
    target.setAttribute('data-y', y);
}

function isDescendant(parent, child) { // https://stackoverflow.com/questions/2234979/how-to-check-in-javascript-if-one-element-is-contained-within-another
    let node = child.parentNode;
    while (node != null) {
        if (node == parent) {
            return true;
        }
        node = node.parentNode;
    }
    return false;
}
