/*===== MENU SHOW =====*/
// 显示菜单栏　メニューバー表示させる
const navMenu = document.getElementById('nav-menu'),
  navToggel = document.getElementById('nav-toggle'),
  navClose = document.getElementById('nav-close');
/* Validate if constant exists */
if (navToggel) {
  navToggel.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
  });
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
}

/*==================== REMOVE MENU MOBILE ====================*/

const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
  const navMenu = document.getElementById('nav-menu');
  navMenu.classList.remove('show-menu');
}

navLink.forEach((n) => n.addEventListener('click', linkAction));

/*==================== ACCORDION SKILLS ====================*/
const frontSkillsToggle = document.getElementById('front-skills');
frontSkillsToggle.addEventListener('click', () => {
  if (frontSkillsToggle.classList.contains('skills__open')) {
    frontSkillsToggle.classList.replace('skills__open', 'skills__close');
  } else {
    frontSkillsToggle.classList.replace('skills__close', 'skills__open');
  }
});

const backSkillsToggle = document.getElementById('backend-skills');
backSkillsToggle.addEventListener('click', () => {
  if (backSkillsToggle.classList.contains('skills__open')) {
    backSkillsToggle.classList.replace('skills__open', 'skills__close');
  } else {
    backSkillsToggle.classList.replace('skills__close', 'skills__open');
  }
});

/*==================== QUALIFICATION TABS ====================*/

const tabs = document.querySelectorAll('[data-target]'),
  tabContents = document.querySelectorAll('[data-content]');

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.target);

    tabContents.forEach((tabContent) => {
      tabContent.classList.remove('qualification__active');
    });
    target.classList.add('qualification__active');

    tabs.forEach((tab) => {
      tab.classList.remove('qualification__active');
    });
    tab.classList.add('qualification__active');
  });
});

/*==================== SERVICES MODAL ====================*/

const modalViews = document.querySelectorAll('.services__modal'),
  modalBtns = document.querySelectorAll('.services__button'),
  modalCloses = document.querySelectorAll('.services__modal-close');

let modal = function (modalClick) {
  modalViews[modalClick].classList.add('active-modal');
};

modalBtns.forEach((modalBtn, i) => {
  modalBtn.addEventListener('click', () => {
    modal(i);
  });
});

modalCloses.forEach((modalClose) => {
  modalClose.addEventListener('click', () => {
    modalViews.forEach((modalView) => {
      modalView.classList.remove('active-modal');
    });
  });
});

/*==================== PORTFOLIO SWIPER  ====================*/
// https://codesandbox.io/s/gsqbs?file=/index.html:2157-2491
let swiperPortfolio = new Swiper('.portfolio__container', {
  cssMode: true,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  mousewheel: true,
  keyboard: true,
});

/*==================== CHANGE BACKGROUND HEADER ====================*/

function scrollHeader() {
  const nav = document.getElementById('header');
  if (this.scrollY >= 80) {
    nav.classList.add('scroll-header');
  } else {
    nav.classList.remove('scroll-header');
  }
}

window.addEventListener('scroll', scrollHeader);

/*==================== SHOW SCROLL UP ====================*/

function scrollUp() {
  const scrollUp = document.getElementById('scroll-up');
  if (this.scrollY >= 560) {
    scrollUp.classList.add('show-scroll');
  } else {
    scrollUp.classList.remove('show-scroll');
  }
}

window.addEventListener('scroll', scrollUp);

/*==================== DARK LIGHT THEME ====================*/

const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'fa-sun';

const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? 'fa-moon' : 'fa-sun';

if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](
    darkTheme
  );
  themeButton.classList[selectedIcon === 'fa-moon' ? 'add' : 'remove'](
    iconTheme
  );
}

themeButton.addEventListener('click', () => {
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);

  localStorage.setItem('selected-theme', getCurrentTheme());
  localStorage.setItem('selected-icon', getCurrentIcon());
});

/*==================== HEART ANIMATION ====================*/

const trigger = document.getElementById('heart-anime');
if (trigger) {
  trigger.addEventListener(
    'click',
    function () {
      this.classList.toggle('animate');
    },
    false
  );
}

/*==================== LANGUAGE SELECT ====================*/

const langSelect = document.getElementById('nav-language');

langSelect.onchange = (e) => {
  let index = langSelect.selectedIndex;
  let selectValue = langSelect.options[index].value;
  switch (selectValue) {
    case 'china':
      window.location.href = 'index_cn.html';
      break;
    case 'english':
      window.location.href = 'index_eg.html';
      break;
    default:
      window.location.href = 'index.html';
      break;
  }
};

/*==================== CONTACT FORM ====================*/
const form = document.getElementsByTagName('form')[0];

form.addEventListener('submit', contact, false);
function contact(e) {
  e.preventDefault();

  let target = e.target || e.srcElement;
  let i = 0;
  let message = '';

  for (i = 0; i < target.length; ++i) {
    if (target[i].type != 'text' && target[i].type != 'textarea') {
      continue;
    }
    message += target[i].name + '：' + target[i].value + '\r\n';
  }
  target.elements['body'].value = message;

  this.submit();
}

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const scrollY = window.pageYOffset;

    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50,
      sectionId = current.getAttribute('id');

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector('.nav__menu a[href*=' + sectionId + ']')
        .classList.add('active-link');
    } else {
      document
        .querySelector('.nav__menu a[href*=' + sectionId + ']')
        .classList.remove('active-link');
    }
  });
}

/*==================== SCROLLREVEAL ANIMATION ====================*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '10px',
  duration: 2500,
  delay: 400,
});

sr.reveal('#home');
sr.reveal('#about');
sr.reveal('#skills');
sr.reveal('#services');
sr.reveal('#qualification');
sr.reveal('#portfolio');
sr.reveal('#contact');
