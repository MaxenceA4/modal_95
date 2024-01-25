// Get the modal
var btn = document.getElementById("myBtn");


var modal = document.getElementById('myModal');
let modalcontent = document.querySelector('.modal-content');

let reduceButton = document.querySelector('.reduce');
let fullScreenButton = document.querySelector('.fullscreen');
let closeButton = document.querySelector('.close');

let isFullScreen = false;

fullScreenButton.addEventListener('click', function () {
    if (isFullScreen) {
        // Rétablir les paramètres par défaut
        modalcontent.style.width = '80%';
        modalcontent.style.height = '50%';
    } else {
        // Passer en mode plein écran
        modalcontent.style.width = '99%';
        modalcontent.style.height = '95%';
    }

    // Inverser l'état de isFullScreen
    isFullScreen = !isFullScreen;
});

// When the user press F key, alert fichier; E key, alert edition; A key, alert affichage; I key, alert aide
document.addEventListener('keydown', function (event) {
    // TODO ajouter si et seulement si la modal est ouverte
    if (event.key === 'f') {
        alert('fichier');
    } else if (event.key === 'e') {
        alert('edition');
    } else if (event.key === 'a') {
        alert('affichage');
    } else if (event.key === 'i') {
        alert('aide');
    }
});

// When the user clicks the button, open the modal
btn.onclick = function () {
    modal.style.display = "flex"
};
// When the user clicks on X button, close the modal
closeButton.onclick = function () {
    modal.style.display = "none"
};
// When the user clicks on - button, reduce the modal
reduceButton.onclick = function () {
    modal.style.display = "none"
};


// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target === modal) {
        modal.style.display = "none"
    }
}