/* ------------------ DISPLAY CSS PROPERTY BASED ON VISIBLE ----------------- */
function checkVisible() { // check what css properties should be displayed based on what's displayed on the screen
    const visibles = document.querySelectorAll(".web-page .added");
    visibles.forEach(visible => {
        if (!document.querySelector(`.property[data-for=${visible.id}]`)) return
        document.querySelector(`.property[data-for=${visible.id}]`).classList.remove("hidden");
    })
}

setInterval(() => { // kind of really ugly but instead of listening when something change on the screen just check it regulary enough
    checkVisible();
}, 100);


/* ------------------------ UPDATE PROPERTY WITH BTN ------------------------ */
function updatePropertyBtn(btn, property) {
    // get the parent with the data-for attribute (the main style one)
    let mainParent = btn.parentNode;
    for (let i = 0; i < 5; i++) {
        if (mainParent.getAttribute("data-for")) break;
        mainParent = mainParent.parentNode;
    }
    // get the targeted element who's style will be updated
    const target = document.getElementById(mainParent.getAttribute("data-for"));
    // remove the selected attributes from others btn
    btn.parentNode.querySelectorAll("button").forEach(styleBtn => styleBtn.removeAttribute("selected"));
    // select the right button
    btn.setAttribute("selected", "");
    // update the style property
    eval(`target.style.${property.type} = "${property.value}"`);
}


/* ------------------------ UPDATE PROPERTY W/ SLIDER ----------------------- */
function updatePropertySlider(slider, property) {
    // get the parent with the data-for attribute (the main style one)
    let mainParent = slider.parentNode;
    for (let i = 0; i < 5; i++) {
        if (mainParent.getAttribute("data-for")) break;
        mainParent = mainParent.parentNode;
    }
    // get the targeted element who's style will be updated
    const target = document.getElementById(mainParent.getAttribute("data-for"));
    // update the style
    console.log(property.type)
    eval(`target.style.${property.type} = "${slider.value/100}${property.unit}"`);
}

/* -------------------- listen for hover on element style ------------------- */
document.querySelectorAll("#right-zone-css .property").forEach(property => {
    property.addEventListener("mouseover", () => {
        const target = document.getElementById(property.getAttribute("data-for"));
        target.classList.add("hovered");
    });
    property.addEventListener("mouseleave", () => {
        const target = document.getElementById(property.getAttribute("data-for"));
        target.classList.remove("hovered");
    })
})