const menuWidth = 500;
const subLevelMaxHeight = 5000;
const subLevelInitHeight = 0;

const sidenav = document.getElementById("sidenav");
const main = document.getElementById("main");
const button = document.getElementById("button");

// debugging 
const levels = document.querySelectorAll(".sacs__menu-level__wrapper");
const docs = document.querySelectorAll('.sacs__menu__docs')

const plusMinusIcons = document.querySelectorAll('.sacs__plus-minus-toggle')

const firstExToggle = document.getElementById('firstExToggle')
const firstDocToggle = document.getElementById('firstDocToggle')

const secExToggle = document.getElementById('secExToggle')
const secDocToggle = document.getElementById('secDocToggle')

const thirdExToggle = document.getElementById('thirdExToggle')
const thirdDocToggle = document.getElementById('thirdDocToggle')

const fourthExToggle = document.getElementById('fourthExToggle')
const fourthDocToggle = document.getElementById('fourthDocToggle')

const fifthExToggle = document.getElementById('fifthExToggle')
const fifthDocToggle = document.getElementById('fifthDocToggle')

const closeMenu = document.getElementById('closeMenu')
const triggerIcon = document.getElementById('triggerIcon')
const openMenu = document.getElementById('openMenu')

const sacsNav = document.querySelector('.sacs__navigate-articles')

// hide sacs nav on main page
function hideSacsNav() {
  if(window.location.href === 'https://www.evms.edu/sacscoc_2020/') {
    sacsNav.style.display = 'none'
  }
}

hideSacsNav()

function showParent() {
  console.log(this)
}

function showOpenButton() {
    openMenu.style.visibility = 'visible'
}

function hideOpenButton() {
  openMenu.style.visibility = 'hidden'
}

openMenu.addEventListener('click', function() {
  main.style.marginLeft = '440px'
  hideOpenButton()
})

closeMenu.addEventListener('click', function() {
  closeMenu.style.left = '80% !important'
  main.style.marginLeft = '0px'
  showOpenButton()
})

levels.forEach(function (level) {
  level.addEventListener("click", function () {
    level.classList.toggle("sacs__menu__opened");
    console.log(this.nextElementSibling)
    showLevel(this.nextElementSibling);

    if (!level.classList.contains("sacs__menu__opened")) {
      hideSubLevel(this.id);
    }
  });
});

plusMinusIcons.forEach(function(icon) {
  icon.addEventListener('click', function() {
    icon.classList.toggle('collapsed')
    console.log(this.parentNode.nextElementSibling)
    showLevel(this.parentNode.nextElementSibling)
  })
})

function hideNav() {
  sidenav.style.maxWidth = "0";
}

function showNav() {
  sidenav.style.maxWidth = menuWidth + "px";
}

function showLevel(subLevel) {
  subLevel.classList.toggle('show-level');
}

function hideLevel(subLevel) {
  subLevel.style.maxHeight = subLevelInitHeight + 'px';
}