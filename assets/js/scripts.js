// Menu button && Header scroll settings

let listIcon = document.querySelector('.bi-list');
let closeIcon = document.querySelector('.bi-x-lg');
let mobileMenu = document.querySelector('.mobile-menu');
let mobileMenuLinks = document.getElementsByClassName('mobile-menu--links');
let menuBtn = document.querySelector('.bi');

window.onscroll = function() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      document.querySelector("header").classList.add('bg-secondary');
      mobileMenu.classList.add('bg-secondary');
      for(let i = 0; i < mobileMenuLinks.length; i++) {
        mobileMenuLinks[i].classList.remove('fw-bold');
      }
    } else {
      document.querySelector("header").classList.remove('bg-secondary');
      mobileMenu.classList.remove('bg-secondary');
      for(let i = 0; i < mobileMenuLinks.length; i++) {
        mobileMenuLinks[i].classList.add('fw-bold');
      }
    }
};
// ==================> Change Desktop Menu links color and background-color on hover effect
changeDesktopMenuLinksStyle();

function changeDesktopMenuLinksStyle () {
  let desktopMenuLinks = document.querySelectorAll('.sp-class-animate--desktop-menu-links');

  for(let i = 0; i < desktopMenuLinks.length; i++) {
    desktopMenuLinks[i].addEventListener('mouseover', function () {
      desktopMenuLinks[i].classList.remove('text-white');
      desktopMenuLinks[i].classList.add('bg-white', 'text-secondary');
    })
  }
  for(let i = 0; i < desktopMenuLinks.length; i++) {
    desktopMenuLinks[i].addEventListener('mouseout', function () {
      desktopMenuLinks[i].classList.add('text-white');
      desktopMenuLinks[i].classList.remove('bg-white', 'text-secondary');
    })
  }
}

// Hide list icon
listIcon.addEventListener('click', () => {
  listIcon.classList.add('d-none');
  closeIcon.classList.remove('d-none');
  // Show mobile menu
  mobileMenu.classList.add('end-0');
});

// Hide close icon
closeIcon.addEventListener('click', () => {
  listIcon.classList.remove('d-none');
  closeIcon.classList.add('d-none');
  // close mobile menu
  mobileMenu.classList.remove('end-0');
});

if(window.screen.width >= 768) {
  listIcon.classList.remove('d-none');
  closeIcon.classList.add('d-none');
}

// Close mobile menu when clicked outside this one

document.addEventListener('click', (e) => {

    if(mobileMenu.classList.contains('end-0') && e.target !== menuBtn) {
        mobileMenu.classList.remove('end-0');
        closeIcon.classList.add('d-none');
        listIcon.classList.remove('d-none');
    }
});