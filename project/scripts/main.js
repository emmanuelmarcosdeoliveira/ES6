//---------------------------------------------------------------------
// function activeTabs
//---------------------------------------------------------------------
function activeTabs() {
  const tabMenu = document.querySelectorAll(".js-tabMenu li");
  const tabContent = document.querySelectorAll(".js-tabContent section");
  tabContent[0].classList.add("active");
  if (tabMenu.length && tabContent.length) {
    function activeTab(index) {
      tabContent.forEach((section) => {
        section.classList.remove("active");
      });
      tabContent[index].classList.add("active");
    }
    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener("click", () => {
        activeTab(index);
      });
    });
  }
}
activeTabs();
//---------------------------------------------------------------------
// function accordions-list
//---------------------------------------------------------------------
function initAccordion() {
  const accordionList = document.querySelectorAll(".js-accordion dt");
  const activeClass = "active";

  if (accordionList.length) {
    accordionList[0].classList.add(activeClass);
    accordionList[0].nextElementSibling.classList.add(activeClass);
    function activeAccordion() {
      this.classList.toggle(activeClass);
      this.nextElementSibling.classList.toggle(activeClass);
    }

    accordionList.forEach((item) => {
      item.addEventListener("click", activeAccordion);
    });
  }
}
initAccordion();
//---------------------------------------------------------------------
// Scroll suave link intenro
//---------------------------------------------------------------------
function initScroll() {
  const linksInterno = document.querySelectorAll('.js-menu a[href^="#"]');

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    //Alternative form
    // const top = section.offsetTop;
    // window.scrollTo({
    //   top: top,
    //   behavior: "smooth",
    // });
  }
  linksInterno.forEach((link) => {
    link.addEventListener("click", scrollToSection);
  });
}
initScroll();
//---------------------------------------------------------------------
// animation on Scroll
//---------------------------------------------------------------------
function initAnimationScroll() {
  const sections = document.querySelectorAll(".js-scroll");

  if (sections.length) {
    const windowMetade = window.innerHeight * 0.6;
    function animaScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = sectionTop - windowMetade < 0;
        if (isSectionVisible) {
          section.classList.add("active");
        } else {
          section.classList.remove("active");
        }
      });
    }
  }
  animaScroll();
  window.addEventListener("scroll", animaScroll);
}
initAnimationScroll();
//---------------------------------------------------------------------
