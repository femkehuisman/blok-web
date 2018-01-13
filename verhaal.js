var progress = 0;

window.addEventListener("scroll",
    function () {
        var top = window.pageYOffset;
        var docHeight = document.body.scrollHeight;
        var winHeight = window.innerHeight;
        var scrollHeight = (top) / (docHeight - winHeight);
        var newProgress = Math.round(scrollHeight * 100);
        if (newProgress > progress) {
            progress = newProgress;
            document.getElementById("progressIndicator").style.width = progress + "%";
        }
    }
);
