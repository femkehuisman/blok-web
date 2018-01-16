window.addEventListener("scroll",
    function () {
        var top = window.pageYOffset; //positie top van het scherm ten opzichte van top van het document
        var docHeight = document.body.scrollHeight; // document totale hoogte
        var winHeight = window.innerHeight; // scherm totale hoogte
        var scrollHeight = (top) / (docHeight - winHeight); // scroll hoogte bijv. 0.5 is op de helft
        var progress = Math.round(scrollHeight * 100); // omrekenen naar procent
        document.getElementById("progressIndicator").style.width = progress + "%"; // progress indicator breedte naar percentage
        // Gebruik van style.width lijkt enige manier om breedte te zetten, of JQuery
    }
);
