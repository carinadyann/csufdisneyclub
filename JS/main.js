//side nav
function openNav() {
    document.getElementById("mySidenav").style.width = "180px";
    document.getElementById("main").style.marginLeft = "180px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}

//contact
function copyFunction(emailId) {
    // Get the text field
    var copyText = document.getElementById(emailId).innerHTML;

    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText);

    // Alert the copied text
    alert('"' + copyText + '" was copied to your clipboard');
}

//slideshow
var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) { myIndex = 1 }
    x[myIndex - 1].style.display = "block";
    setTimeout(carousel, 4000); // Change image every 4 seconds
}

showDivs(myIndex);

function plusDivs(n) {
    showDivs(myIndex += n);
}

function currentDiv(n) {
    showDivs(myIndex = n);
}

//indicator
function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    if (n > x.length) { myIndex = 1 }
    if (n < 1) { myIndex = x.length }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" w3-white", "");
    }
    x[myIndex - 1].style.display = "block";
    dots[myIndex - 1].className += " w3-white";
}