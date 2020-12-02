const menuWidth = 500;
const subLevelMaxHeight = 5000;
const subLevelInitHeight = 0;

const sidenav = document.getElementById("sidenav");
const main = document.getElementById("main");
const button = document.getElementById("button");

const levels = document.querySelectorAll(".sacs__menu-level");
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


// first level of nesting
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

firstExToggle.addEventListener('click', function() {
  firstExToggle.innerHTML = 'remove'
  firstDocToggle.classList.toggle("docs-menu__open")

  if(!firstDocToggle.classList.contains('docs-menu__open')) {
    firstExToggle.innerHTML = 'add'
  }
})

secExToggle.addEventListener('click', function() {
  secExToggle.innerHTML = 'remove'

  secDocToggle.classList.toggle("docs-menu__open")
  
  if(!secDocToggle.classList.contains('docs-menu__open')) {
    secExToggle.innerHTML = 'add'
  }
})

thirdExToggle.addEventListener('click', function() {
  thirdExToggle.innerHTML = 'remove'

  thirdDocToggle.classList.toggle("docs-menu__open")
  
  if(!thirdDocToggle.classList.contains('docs-menu__open')) {
    thirdExToggle.innerHTML = 'add'
  }
})

fourthExToggle.addEventListener('click', function() {
  fourthExToggle.innerHTML = 'remove'

  fourthDocToggle.classList.toggle("docs-menu__open")
  
  if(!fourthDocToggle.classList.contains('docs-menu__open')) {
    fourthExToggle.innerHTML = 'add'
  }
})

fifthExToggle.addEventListener('click', function() {
  fifthExToggle.innerHTML = 'remove'

  fifthDocToggle.classList.toggle("docs-menu__open")
  
  if(!fifthDocToggle.classList.contains('docs-menu__open')) {
    fifthExToggle.innerHTML = 'add'
  }
})

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

// button.addEventListener("click", showNav);
// function hideNav() {
//   sidenav.style.width = "0";
// }

function showNav() {
  sidenav.style.width = menuWidth + "px";
  main.style.marginLeft = menuWidth + "px";
}

function showLevel(subLevel) {
  subLevel.style.maxHeight = subLevelMaxHeight + 'px';
  // subLevel.classList.add('active')
  // localStorage.setItem()
}

function hideLevel(subLevel) {
  subLevel.style.maxHeight = subLevelInitHeight + 'px';
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
