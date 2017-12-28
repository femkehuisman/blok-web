var searchInput;
var searchItem;
var searchInputVisible;
var addButtons;
var itemsCounter;
var addImageSrc = "images/add_white.svg";
var deleteImageSrc = "images/comment_icon.svg";
var addAlt = "Toevoegen aan lijst";
var deleteAlt = "Verwijderen van lijst";
var addedCount = 0;
window.onload = function() {
    setup();
    searchItem.addEventListener("click", showSearch);
    searchInput.addEventListener("focusout", hideSearch);
    for (var i = 0; i < addButtons.length; i++) {
        var button = addButtons[i]
        button.addEventListener("click", function() {
            onAddClick(this);
        });
    }
}

function setup() {
    searchInput = false;
    searchInput = document.querySelector(".searchInput");
    searchItem = document.querySelector(".searchItem");
    addButtons = document.getElementsByClassName("addButton");
    itemsCounter = document.getElementById("itemsCounter");
}

function showSearch() {
    searchInput.classList.add('searchExpanded');
    searchInput.focus();
}

function hideSearch() {
    searchInput.classList.remove('searchExpanded');
    searchInput.blur();
}

function onAddClick(button) {
    if (button.alt == deleteAlt) {
        button.src = addImageSrc;
        button.alt = addAlt;
        addedCount--;
    } else {
        button.src = deleteImageSrc;
        button.alt = deleteAlt;
        addedCount++;
    }
    updateCounter();
}

function updateCounter() {
    if (addedCount == 0) {
        itemsCounter.style.visibility = "hidden";
    } else {
        itemsCounter.style.visibility = "visible";
        itemsCounter.innerText = addedCount;
    }
}