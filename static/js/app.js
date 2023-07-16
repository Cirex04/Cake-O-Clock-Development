// Initial state
var home = 0;
var current_y = 0;
const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll("nav ul.pages li");
const navLi_1 = document.querySelectorAll("nav ul.pages-fixed li");
const categories = document.querySelectorAll("#menu li");
var menu_images = "{{item.id}}";

window.onload = function () {
  var allContentsHide = document.querySelectorAll(
    "#menu-items > .container > div"
  );

  allContentsHide.forEach(function (div) {
    div.style.display = "none";
  });

  document.getElementById("silogs").style.display = "block";
};

// adding scroll event
window.onscroll = function () {
  // detects new state and compares it with the new one
  var current = "";

  current_y = window.pageYOffset;
  if (home < current_y)
    document.querySelector(".fixed-navbar").classList.remove("active");
  else document.querySelector(".fixed-navbar").classList.add("active");
  home = current_y;

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLi.forEach((li) => {
    li.classList.remove("active");
    if (li.classList.contains(current)) {
      li.classList.add("active");
    }
  });

  navLi_1.forEach((li) => {
    li.classList.remove("active");
    if (li.classList.contains(current)) {
      li.classList.add("active");
    }
  });

  if (home == 0)
    document.querySelector(".fixed-navbar").classList.remove("active");
};

function checkClickFunc() {
  var checkbox = document.getElementById("check");
  if (checkbox.checked == true) checkbox.checked = false;
}

function clickCategory(category) {
  categories.forEach((li) => {
    if (li.classList.contains("selected-category"))
      li.classList.remove("selected-category");
    if (li.classList.contains(category)) {
      li.classList.add("selected-category");
    }
  });

  var allContentsHide = document.querySelectorAll(
    "#menu-items > .container > div"
  );

  allContentsHide.forEach(function (div) {
    div.style.display = "none";
  });

  var selectedContent = document.getElementById(category);
  selectedContent.style.display = "block";
}

document.onmouseover = function (e, getID) {
  var silog_len = document.getElementsByClassName("menu-label-silog").length;
  var coffee_len = document.getElementsByClassName("menu-label-coffee").length;
  var pasta_len = document.getElementsByClassName("menu-label-pasta").length;
  var tea_len = document.getElementsByClassName("menu-label-tea").length;

  for (i = 0, j = 1; i < silog_len; i++, j++) {
    var menu_item = document.getElementById("label-silog-" + j);

    if (e.target.id == menu_item.id) {
      var current = document.getElementById("image-silog-" + j);
      current.style.opacity = 1;
    } else {
      var current = document.getElementById("image-silog-" + j);
      current.style.opacity = 0;
    }
  }

  for (i = 0, j = 1; i < coffee_len; i++, j++) {
    var menu_item = document.getElementById("label-coffee-" + j);

    if (e.target.id == menu_item.id) {
      var current = document.getElementById("image-coffee-" + j);
      current.style.opacity = 1;
    } else {
      var current = document.getElementById("image-coffee-" + j);
      current.style.opacity = 0;
    }
  }

  for (i = 0, j = 1; i < pasta_len; i++, j++) {
    var menu_item = document.getElementById("label-pasta-" + j);

    if (e.target.id == menu_item.id) {
      var current = document.getElementById("image-pasta-" + j);
      current.style.opacity = 1;
    } else {
      var current = document.getElementById("image-pasta-" + j);
      current.style.opacity = 0;
    }
  }

  for (i = 0, j = 1; i < tea_len; i++, j++) {
    var menu_item = document.getElementById("label-tea-" + j);

    if (e.target.id == menu_item.id) {
      var current = document.getElementById("image-tea-" + j);
      current.style.opacity = 1;
    } else {
      var current = document.getElementById("image-tea-" + j);
      current.style.opacity = 0;
    }
  }
};
