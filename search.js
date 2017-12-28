var searchInput;
var searchItem;
var searchInputVisible;
window.onload = function() {
    setup();
    searchItem.addEventListener("click", showSearch);
    searchInput.addEventListener("focusout", hideSearch);
}

function setup() {
    searchInput = false;
    searchInput = document.querySelector(".searchInput");
    searchItem = document.querySelector(".searchItem");
}

function showSearch() {
    searchInput.classList.add('searchExpanded');
    searchInput.focus();
}

function hideSearch() {
    searchInput.classList.remove('searchExpanded');
    searchInput.blur();
}