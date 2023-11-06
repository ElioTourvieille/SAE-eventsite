const nav = document.querySelector("#nav-container");
nav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
        const target = document.querySelector(link.href.split("/")[link.href.split("/").length-1]);
        if (!target) return;
        if (!/added/.test(target.className)) {
            // alert("oups ça n'existe pas encore")
            Toastify({
                text: "Cet élément n'existe pas encore, veuillez l'ajouter",
                duration: 2000,
                gravity: "top", // `top` or `bottom`
                position: "right", // `left`, `center` or `right`
                className: "toast",
                style: {  },
            }).showToast();
            const elementAdder = document.querySelector(`.dragable[data-for=${target.id}]`);
            elementAdder.classList.add("hovered");
            setTimeout(() => elementAdder.classList.remove("hovered"), 1000);
            // console.log(elementAdder)
        }
        target.classList.add("hovered");
        setTimeout(() => target.classList.remove("hovered"), 1000);
    })
})