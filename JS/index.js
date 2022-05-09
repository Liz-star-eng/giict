let sidebar = document.getElementById("mySidenav");
var body = document.getElementById("main-body");
var span = document.getElementById("span");

function openNav() {
  document.getElementById("mySidenav").style.width = "16%";
  body.style.marginRight = "16%";
  span.innerHTML = "Hide Side panel >>>";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  body.style.marginRight = "0";
  span.innerHTML = "Show Right Panel<<<";
}

//DROPDOWN
// const content = document.getElementById("a")
// a.style.backgroundColor = 'white';
// tippy("#dropdown", {
//   content: a.innerHTML,
//   allowHTML: true,
//   placement: "bottom",
//   animation: "fade",
//   interactive: true,
//  theme: 'light',
// });

collapsible();
