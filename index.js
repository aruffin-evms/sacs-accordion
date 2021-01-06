const menuWidth = 500

const main = document.getElementById("main")

const levels = document.querySelectorAll(".sacs__menu-level__wrapper")
const plusMinusIcons = document.querySelectorAll('.sacs__plus-minus-toggle')

const openMenu = document.getElementById('openMenu')
const closeMenu = document.getElementById('closeMenu')

function showOpenButton() {
  openMenu.style.visibility = 'visible'
  closeMenu.style.visibility = 'hidden'
}

function hideOpenButton() {
  openMenu.style.visibility = 'hidden'
  closeMenu.style.visibility = 'visible'
}

function showLevel(subLevel, icon) {
  subLevel.classList.toggle('show-level')
  icon.firstElementChild.innerHTML = 'remove'

  if(!subLevel.classList.contains('show-level')) {
    icon.firstElementChild.innerHTML = 'add'
  }
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
    level.classList.toggle("sacs__menu__opened")
    showLevel(this.nextElementSibling)

    if (!level.classList.contains("sacs__menu__opened")) {
      hideSubLevel(this.id)
    }
  })
})

plusMinusIcons.forEach(function(icon) {
  icon.addEventListener('click', function() {
    icon.classList.toggle('collapsed')
    showLevel(this.parentElement.nextElementSibling, this.parentElement.nextElementSibling.parentElement.firstElementChild)
  })
})

