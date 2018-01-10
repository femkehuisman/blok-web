/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

var searchInput = false;
var searchItem;
var searchInputVisible;
var addButtons;
var itemsCounter;
var addImageSrc = "images/add_white.svg";
var deleteImageSrc = "images/remove_white.png";
var addAlt = "Toevoegen aan lijst";
var deleteAlt = "Verwijderen van lijst";
var addedCount = 0;

function showSearch() {
    searchInput.classList.add('searchExpanded');
    searchInput.focus();
}

function hideSearch() {
    searchInput.classList.remove('searchExpanded');
    searchInput.blur();
}

//Aangeroepen bij het clicken op een add button. De geklikte button wordt meegegeven als "button"
function onAddClick(button) {
    if (button.alt === deleteAlt) {
        button.src = addImageSrc; //img weer terug naar plusje
        button.alt = addAlt; //alt text terug naar add alt text
        addedCount--; // -1 van het totaal af
    } else {
        button.src = deleteImageSrc;
        button.alt = deleteAlt;
        addedCount++;
    }
    updateCounterElement(); //update counter element in html
}

function updateCounterElement() {
    if (addedCount === 0) {
        itemsCounter.classList.add('counterHidden') //Verstoppen wanneer count 0 is
    } else {
        itemsCounter.classList.remove('counterHidden');
        itemsCounter.innerText = addedCount; //added count als text zetten
    }
}

function setup() {
    searchInput = document.querySelector(".searchInput");
    searchItem = document.querySelector(".searchItem");
    addButtons = document.getElementsByClassName("addButton"); //array van elementen met de class addButton
    itemsCounter = document.getElementById("itemsCounter");
}

window.onload = function () {
    setup();
    searchItem.addEventListener("click", showSearch); //als er op SearchItem (zoekicoon) wordt geklikt wordt showSearch uitgevoerd
    searchInput.addEventListener("focusout", hideSearch); // als de focus niet meer op het zoekveld is, wordt de functie hideSearch uitgevoerd
    for (var i = 0; i < addButtons.length; i++) { //
        var button = addButtons[i]
        button.addEventListener("click", function () {
            onAddClick(this);
        });
    }
}
