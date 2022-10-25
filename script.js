let burgerMenu = document.getElementById('burger-menu')
burgerMenu.addEventListener('click', () => {
  let navLinks = document.getElementById('nav-links')
  if (navLinks.style.display === 'block') {
    navLinks.style.display = 'none'
  } else {
    navLinks.style.display = 'block'
  }
})
