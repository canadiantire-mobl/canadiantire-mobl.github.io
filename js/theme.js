AOS.init();

const slider = tns({
  container: '.team-members-list',
  items: 1,
  responsive: {
    1080: {
      items: 2,
      gutter: 20,
    },
    1450: {
      gutter: 67
    }
  },
  autoplay: false,
  arrowKeys: true,
  gutter: 100,
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

// Smooth scrolling polyfill
if (!("scrollBehavior" in document.documentElement.style) && !!seamless) {
  seamless.polyfill();

  const scrollToSelector = selector => {
    seamless.elementScrollIntoView(document.querySelector(selector), {
      behavior: "smooth"
    });
  }

  //scroll if pageload has hash
  if (window.location.hash) {
    scrollToSelector(window.location.hash);
  }

  //scroll on anchor click
  const anchorClickHandler = function(event) {
    if (event.target && event.target.hash) {
      event.preventDefault();
      scrollToSelector(event.target.hash);
    }
  }

  Array.prototype.forEach.call(document.getElementsByTagName('a'), element => {
    element.addEventListener('click', anchorClickHandler);
  });

}
