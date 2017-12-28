var searchInput;
var searchItem;
var searchInputVisible;
window.onload = function() {
    setup();
    hideSearch();
    searchItem.addEventListener("click", showSearch);
    searchInput.addEventListener("focusout", hideSearch);
}

function setup() {
    searchInput = false;
    searchInput = document.getElementById("searchInput");
    searchItem = document.getElementById("searchItem");
}

function showSearch() {
    searchInput.style.display = "block";
    searchInput.focus();
}

function hideSearch() {
    searchInput.style.display = "none";
    searchInput.blur();
}