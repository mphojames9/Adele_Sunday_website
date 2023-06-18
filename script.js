const closeMenuBtn = document.querySelector(".menuButton_close");
const menuBtn = document.querySelector(".menuButton");
const sideBar = document.getElementById("sideNavBar");
const headerUl = document.getElementById("menu_iteams-header");

menuBtn.addEventListener("click",openSideNav);
closeMenuBtn.addEventListener("click",closeSideNav);

//Opening the side navigation function
function openSideNav(){
    if (sideBar.classList.contains("sideNavBar_closed")) {
        sideBar.classList.remove("sideNavBar_closed");
        sideBar.classList.add("sideNavBar_open");
        headerUl.style.margin = "0";
    }

    else {
        sideBar.classList.add("sideNavBar_closed");
        headerUl.style.margin = " 0 auto ";
    }
}

//Closing the side navigation function
function closeSideNav(){
        sideBar.classList.add("sideNavBar_closed");
}