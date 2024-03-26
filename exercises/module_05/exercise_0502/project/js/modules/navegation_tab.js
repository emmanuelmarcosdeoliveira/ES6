//---------------------------------------------------------------------
// function activeTabs
//---------------------------------------------------------------------
export default function activeTabs() {
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