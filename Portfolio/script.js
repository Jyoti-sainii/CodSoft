var menu = document.getElementById("menu-img");
var navbar = document.getElementById("nav-bar");
navbar.style.width = "0px";
menu.onclick = function () {
  if (navbar.style.width == "0px") {
    navbar.style.width = "250px";
  } else {
    navbar.style.width = "0px";
  }
};
