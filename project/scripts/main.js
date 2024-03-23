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
  accordionList[0].classList.add("active");
  accordionList[0].nextElementSibling.classList.add("active");
  function activeAccordion() {
    this.classList.toggle("active");
    this.nextElementSibling.classList.toggle("active");
  }

  accordionList.forEach((item) => {
    item.addEventListener("click", activeAccordion);
  });
}
initAccordion();
//---------------------------------------------------------------------
