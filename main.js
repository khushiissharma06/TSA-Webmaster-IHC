// nav bar variables

let signInBtn = document.getElementById("signInBtn");
let logInBtn = document.getElementById("logInBtn");
let helloMsg = document.getElementById("helloMsg");

// nav bar links to different sections in HTML document
let homeNavBtn = document.getElementById("homeNavBtn");
let imagesNavBtn = document.getElementById("imagesNavBtn");
let communityHubNavBtn = document.getElementById("communityHubNavBtn");
let resourcesNavBtn = document.getElementById("resourcesNavBtn");
let monthlyHighlightsNavBtn = document.getElementById("monthlyHighlightsNavBtn");
let feedbackNavBtn = document.getElementById("feedbackNavBtn");

// declaring all pages/sections in HTML document

let homePage = document.getElementById("homePage");
let imagesPage = document.getElementById("imagesPage");
let communityHubPage = document.getElementById("communityHubPage");
let resourcesPage = document.getElementById("resourcesPage");
let monthlyHighlightsPage = document.getElementById("monthlyHighlightsPage");
let feedbackPage = document.getElementById("feedbackPage");
let signInPage = document.getElementById("signInPage");
let logInPage = document.getElementById("logInPage");
let formSubmittedPage = document.getElementById("formSubmittedPage");

// home page variables
// NOTE: for each of the pages, there were multiple buttons leading to the same page, so the naming convention we used was:
// 1. page user is being directed to
// 2. add on "Btn" to indicate it's a button
// 3. write what page the button is on at the end (ex: if a button to go home is on the images page, the name will be homeBtnImages)

let imageBtnHome = document.getElementById("imageBtnHome");
let communityHubBtnHome = document.getElementById("communityHubBtnHome");

// images page variables

// community hub page variables

let resourcesBtnHub = document.getElementById("resourcesBtnHub");
let imagesBtnHub = document.getElementById("imagesBtnHub");
let feedbackBtnHub = document.getElementById("feedbackBtnHub");

// feedback, sign in, and log in page variables

// making distinct variables for each page's button would be redundant, so using a class was the best solution
const formSubBtn = document.querySelectorAll(".formSubBtn");

// add event listener -- waits until the document's DOM has loaded before running any functions that wait for user input (ex: onclick functions)
document.addEventListener("DOMContentLoaded", function(){

// ------------------------------------------- nav button functions ------------------------------
    homeNavBtn.onclick = function(){
        showPage(homePage);
    }

    imagesNavBtn.onclick = function(){
        showPage(imagesPage);
    }

    communityHubNavBtn.onclick = function(){
        showPage(communityHubPage);
    }

    resourcesNavBtn.onclick = function(){}

// ------------------------------------------- home page functions ------------------------------


// ------------------------------------------- form submitted button function ------------------------------

});

function showPage(pageID){
    const allPages = document.querySelectorAll(".page");
    allPages.forEach((allPage) => {
        allPage.classList.remove('show');
        allPage.classList.add('hide');
    });

    pageID.classList.remove("hide");
    pageID.classList.add("show");
}

function saveSignIn(){
    const signInForm = document.getElementById("#signInForm");
    const signInSubmit = document.getElementById("#signInSubmit");
    signInSubmit.addEventListener("submit", function(e){
        e.preventDefault();
        console.log("Sign up processed");
    });

    let userName = document.getElementById("userName").value;
    let userEmail = document.getElementById("userEmail").value;
    let userPassword = document.getElementById("userPassword").value;
    let userBirthday = document.getElementById("userBirthday").value;

    if (!userName || !userEmail || !userPassword || !userBirthday){
        alert("Please fill out missing inputs.");
        return
    }
    
    let usersDatabase = JSON.parse(localStorage.getItem("userInfo")) || [];
    const emailExists = usersDatabase.some((user) => user.email === email);

    if (emailExists){
        alert("There is already an existing account with this email. Please sign in.");
        return
    }

    const userInfoDict = {
        userName: userName,
        userEmail: userEmail,
        userPassword: userPassword,
        userBirthday: userBirthday
    }

    usersDatabase.push(userInfoDict);

    localStorage.setItem("userInfo", JSON.stringify(usersDatabase));
    localStorage.setItem("userEmail")
}