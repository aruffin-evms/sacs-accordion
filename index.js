const menuWidth = 400;

const main = document.getElementById("main");

// create a node list of levels
const levels = document.querySelectorAll(".sacs__menu-level__wrapper");
// create a node list of icons
const plusMinusIcons = document.querySelectorAll(".sacs__plus-minus-toggle");

const openMenu = document.getElementById("openMenu");
const closeMenu = document.getElementById("closeMenu");

function showOpenButton() {
  setTimeout(() => {
    openMenu.style.visibility = "visible";
    closeMenu.style.visibility = "hidden";
  }, 900);
}

function hideOpenButton() {
  setTimeout(() => {
  openMenu.style.visibility = "hidden";
  closeMenu.style.visibility = "visible";
  }, 900);
}

function showLevel(subLevel, icon) {
  subLevel.classList.toggle("show-level");
  // change to minus icon
  icon.firstElementChild.innerHTML = "remove";

  // is this level open
  if (!subLevel.classList.contains("show-level")) {
    // change to plus icon
    icon.firstElementChild.innerHTML = "add";
  }
}

openMenu.addEventListener("click", function () {
  main.style.marginLeft = menuWidth + 'px';
  main.style.marginLeft = "400px";
  hideOpenButton();
});

closeMenu.addEventListener("click", function () {
  closeMenu.style.left = "80% !important";
  main.style.marginLeft = "0px";
  showOpenButton();
});

levels.forEach(function (level) {
  level.addEventListener("click", function () {
    level.classList.toggle("sacs__menu__opened");
    showLevel(this.nextElementSibling);
  });
});

plusMinusIcons.forEach(function (icon) {
  icon.addEventListener("click", function () {
    icon.classList.toggle("collapsed");
    showLevel(
      this.parentElement.nextElementSibling,
      this.parentElement.nextElementSibling.parentElement.firstElementChild
    );
  });
});
