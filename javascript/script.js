/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

var addImageSrc = "images/add_white.svg";
var deleteImageSrc = "images/remove_white.png";
var addAlt = "Toevoegen aan lijst"; //Alt text die dient als herkenning voor het herkennen van een add button
var deleteAlt = "Verwijderen van lijst";  //Alt text die dient als herkenning voor het herkennen van een delete button
var addedCount = 0;

var searchInput = document.querySelector(".searchInput");
var searchItem = document.querySelector(".searchItem");

var addButtons = document.getElementsByClassName("addButton"); //array van alle "add" buttons
var itemsCounter = document.getElementById("itemsCounter");

searchItem.addEventListener("click", showSearch); //als er op SearchItem (zoekicoon) wordt geklikt wordt showSearch uitgevoerd
searchInput.addEventListener("focusout", hideSearch); // als de focus niet meer op het zoekveld is, wordt de functie hideSearch uitgevoerd

window.onload = function () {
    for (var i = 0; i < addButtons.length; i++) { //
        addButtons[i].addEventListener("click", function () {
            var button = this; //This is html button element
            onAddClick(button); //Geef het button html element mee aan functie
        });
    }
}

function showSearch() {
    searchInput.classList.add('searchExpanded');
    searchInput.focus(); //Zorg dat cursor erin komt
}

function hideSearch() {
    searchInput.classList.remove('searchExpanded');
    searchInput.blur(); //Zorg dat cursor verdwijnt
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
        itemsCounter.classList.remove('counterShown'); //Verstoppen wanneer count 0 is
    } else {
        itemsCounter.classList.add('counterShown');
        itemsCounter.innerText = addedCount; //added count als text zetten
    }
}
