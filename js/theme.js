var slider = tns({
  container: '.team-members-list',
  items: 2,
  autoplay: false,
  arrowKeys: true,
  gutter: 40,
  navPosition: 'after',
  controlsText: ['<div class="arrow-left" />', '<div class="arrow-right" />'],
});

/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function navOpenClose() {
  var x = document.getElementById("menu");
  if (x.className == "") {
    x.className += "responsive";
  } else {
    x.className = "";
  }
}