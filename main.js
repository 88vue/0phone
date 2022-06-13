
document.documentElement.setAttribute("data-theme", "light");

var checkbox = document.querySelector('.navbar .toggle-container input[name=theme]');
var logo = document.getElementById("logo")
checkbox.addEventListener("change", function () {
    if (this.checked) {
      document.documentElement.setAttribute("data-theme", "dark");
      logo.src = "images/logowhite.png";
    } else {
      document.documentElement.setAttribute("data-theme", "light");
      logo.src = "images/logoblack.png"
    }
  });
  

const primaryNav = document.querySelector('#navmenu');
const navToggle = document.querySelector('.mobile-nav-toggle');

navToggle.addEventListener('click', () => {
  const visibility = primaryNav.getAttribute('data-visible')
  if (visibility === 'false') {
    primaryNav.setAttribute('data-visible', true)
  } else if (visibility === "true") {
    primaryNav.setAttribute('data-visible', false)
  }
})


