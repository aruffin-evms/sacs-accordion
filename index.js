const sidenav = document.getElementById("sidenav");
const main = document.getElementById("main");
const button = document.getElementById("button");

const levels = document.querySelectorAll(".sacs__menu-level");
const plusMinusIcons = document.querySelectorAll('.sacs__plus-minus-toggle')

// object for first level of nesting
const subLevels = {
  levelOne: document.getElementById("subLevelOne"),
  levelTwo: document.getElementById('subLevelTwo'),
  levelThree: document.getElementById('subLevelThree'),
  levelFour: document.getElementById('subLevelFour'),
  levelFive: document.getElementById('subLevelFive'),
  levelSix: document.getElementById('subLevelSix'),
  levelSeven: document.getElementById('subLevelSeven'),
  levelEight: document.getElementById('subLevelEight'),
  levelNine: document.getElementById('subLevelNine'),
  levelTen: document.getElementById('subLevelTen'),
  levelEleven: document.getElementById('subLevelEleven'),
}

const text = document.getElementById("text");

const menuWidth = 500;
const subLevelHeight = 500;
const subLevelInitHeight = 0;

// for init build
main.style.marginLeft = menuWidth + "px";

levels.forEach(function (level) {
  level.addEventListener("click", function () {
    level.classList.toggle("sacs__menu__opened");
    showSubLevel(this.id);

    if (!level.classList.contains("sacs__menu__opened")) {
      hideSubLevel(this.id);
    }
  });
});

plusMinusIcons.forEach(function(icon) {
  icon.addEventListener('click', function() {
    icon.classList.toggle('collapsed')
    console.log('click')
  })
})

button.addEventListener("click", showNav);
function hideNav() {
  sidenav.style.width = "0";
}

function showNav() {
  sidenav.style.width = menuWidth + "px";
  main.style.marginLeft = menuWidth + "px";
}

function showLevel(subLevel) {
  subLevel.style.height = subLevelHeight + 'px';
  // text.style.opacity = 1
  console.log(subLevel.id);
  console.log(subLevel.style.height);
}

function hideLevel(subLevel) {
  subLevel.style.height = subLevelInitHeight + "px";
}

function hideSubLevel(id) {
  switch (id) {
    case (id = "menuLevelOne"):
      hideLevel(subLevels.levelOne);
      break;

    case (id = "menuLevelTwo"):
      hideLevel(subLevels.levelTwo);
      break;

    case (id = "menuLevelThree"):
      hideLevel(subLevels.levelThree);
      break;

    case (id = "menuLevelFour"):
      hideLevel(subLevels.levelFour);
      break;

    case (id = "menuLevelFive"):
      hideLevel(subLevels.levelFive);
      break;

    case (id = "menuLevelSix"):
      hideLevel(subLevels.levelSix);
      break;

    case (id = "menuLevelSeven"):
      hideLevel(subLevels.levelSeven);
      break;

    case (id = "menuLevelEight"):
      hideLevel(subLevels.levelEight);
      break;

    case (id = "menuLevelNine"):
      hideLevel(subLevels.levelNine);
      break;

    case (id = "menuLevelTen"):
      hideLevel(subLevels.levelTen);
      break;

    case (id = "menuLevelEleven"):
      hideLevel(subLevels.levelEleven);
      break;

    default:
      break;
  }
}

function showSubLevel(id) {
  switch (id) {
    case (id = "menuLevelOne"):
      console.log("first called");
      showLevel(subLevels.levelOne);
      break;

    case (id = "menuLevelTwo"):
      showLevel(subLevels.levelTwo);
      break;

    case (id = "menuLevelThree"):
      showLevel(subLevels.levelThree);
      break;

    case (id = "menuLevelFour"):
      showLevel(subLevels.levelFour);
      break;

    case (id = "menuLevelFive"):
      showLevel(subLevels.levelFive);
      break;

    case (id = "menuLevelSix"):
      showLevel(subLevels.levelSix);
      break;

    case (id = "menuLevelSeven"):
      showLevel(subLevels.levelSeven);
      break;

    case (id = "menuLevelEight"):
      showLevel(subLevels.levelEight);
      break;

    case (id = "menuLevelNine"):
      showLevel(subLevels.levelNine);
      break;

    case (id = "menuLevelTen"):
      showLevel(subLevels.levelTen);
      break;

    case (id = "menuLevelEleven"):
      showLevel(subLevels.levelEleven);
      break;

    default:
      break;
  }
}
