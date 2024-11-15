const boxmenu = document.querySelector('.line-box-header')

function windowScroll() {
  if (document.documentElement.scrollTop < 150) {
    boxmenu.classList.remove('scroll')
  }
  else {
    boxmenu.classList.add('scroll')
  }
}

window.addEventListener('scroll', windowScroll)