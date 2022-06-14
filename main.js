
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

"use strict";

function carousel() {
  let carouselSlider = document.querySelector(".carousel__slider");
  let list = document.querySelector(".carousel__list");
  let item = document.querySelectorAll(".carousel__item");
  let list2;

  const speed = 1;

  const width = list.offsetWidth;
  let x = 0;
  let x2 = width;

  function clone() {
    list2 = list.cloneNode(true);
    carouselSlider.appendChild(list2);
    list2.style.left = `${width}px`;
  }

  function moveFirst() {
    x -= speed;

    if (width >= Math.abs(x)) {
      list.style.left = `${x}px`;
    } else {
      x = width;
    }
  }

  function moveSecond() {
    x2 -= speed;

    if (list2.offsetWidth >= Math.abs(x2)) {
      list2.style.left = `${x2}px`;
    } else {
      x2 = width;
    }
  }

  clone();

  let a = setInterval(moveFirst, 10);
  let b = setInterval(moveSecond, 10);

  carouselSlider.addEventListener("mouseenter", hover);
  carouselSlider.addEventListener("mouseleave", unhover);
}

carousel();

