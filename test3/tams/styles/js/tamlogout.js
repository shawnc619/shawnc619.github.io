var done = 0;
var logoutImgs = new Array;
var logoutURLs = [
    "/pkmslogout"
];

function checkDone() {
    ++done;
    if (done == logoutURLs.length) {
        document.getElementById("logouttext").innerHTML = "You have now logged out.";
    }
}

function doLogouts() {
    for (i = 0; i < logoutURLs.length; i++) {
        logoutImgs[i] = new Image(1,1);
        logoutImgs[i].onload = checkDone;
        logoutImgs[i].onerror = checkDone;
        logoutImgs[i].src = logoutURLs[i];
    }
}
