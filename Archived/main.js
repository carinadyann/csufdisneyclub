//aboutUS
//References to DOM Elements
const prevBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");
const book = document.querySelector("#book");

//Business Logic
let currentLocation = 1;
let numOfPapers = 0;
let maxLocation = numOfPapers + 1;
var storePages = [];

//Event Listener
prevBtn.addEventListener("click", goPrevPage);
nextBtn.addEventListener("click", goNextPage);

function bookSetup(pages) {
    numOfPapers = pages
    //ex: const paper1 = document.querySelector("#p1");
    for (let i = 1; i <= pages; i++) {
        storePages.push(document.querySelector("#p" + i));
    }
}

function openBook() {
    book.style.tranform = "translateX(50%)";
    prevBtn.style.transform = "translateX(-180px)";
    nextbtn.style.transform = "translateX(180px)";
}

function closeBook(isAtBeginning) {
    if (isAtBeginning) {
        book.style.transform = "translateX(0%)";
    } else {
        book.style.transform = "translateX(100%)";
    }

    prevBtn.style.transform = "translateX(0px)";
    nextBtn.style.transform = "translateX(0px)";
}

function goNextPage() {
    if (currentLocation < maxLocation) {
        for (let i = 0; i < storePages.length; i++) {
            if (currentLocation == 0) {
                openBook();
                storePages[i].classList.add("flipped");
                storePages[i].style.zIndex = i + 1;
                break;
            } else if (currentLocation == (storePages.length - 1)) {
                storePages[i].classList.add("flipped");
                storePages[i].style.zIndex = i + 1;
                closeBook(false);
                break;
            } else {
                storePages[i].classList.add("flipped");
                storePages[i].style.zIndex = i + 1;
                break;
            }
        }
        currentLocation++;
    }
}

function goPrevPage() {
    if (currentLocation > 1) {
        for (let i = 0; i <= storePages.length; i++) {
            if (currentLocation == 1) {
                closeBook(true);
                storePages[i - 1].classList.remove("flipped");
                storePages[i - 1].style.zIndex = storePages.length - i;
                break;
            } else if (currentLocation == storePages.length) {
                storePages[i - 1].classList.remove("flipped");
                storePages[i - 1].style.zIndex = 1;
                break;
            } else {
                openBook();
                storePages[i].classList.add("flipped");
                storePages[i].style.zIndex = (storePages.length - 1) - i;
                break;
            }
        }
        currentLocation--;
    }
}
