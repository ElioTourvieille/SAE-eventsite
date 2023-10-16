var konamiCode = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"];
var konamiCodePosition = 0;

document.addEventListener("keydown", function(e) {
    if (e.key === konamiCode[konamiCodePosition]) {
        konamiCodePosition++;
        if (konamiCodePosition === konamiCode.length) {
            konamiCodePosition = 0;
            lancerConfettis(); // Exécute la fonction lancerConfettis() si le code est correct
        }
    } else {
        konamiCodePosition = 0;
    }
});


function lancerConfettis() {
    var end = Date.now() + (2 * 1000); // Les confettis exploseront pendant 15 secondes

    (function frame() {
        // Si le temps est écoulé, arrête l'animation
        if (Date.now() > end) {
            return;
        }

        // Génère un confetti à chaque frame
        confetti({
            particleCount: 5, // Nombre de confettis à générer à chaque frame
            spread: 360, // Couvre toute la largeur (360 degrés)
            origin: { y: 0 } // Part du haut de l'écran
        });

        // Planifie la prochaine frame
        requestAnimationFrame(frame);
    }());
}
