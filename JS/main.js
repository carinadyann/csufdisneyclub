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