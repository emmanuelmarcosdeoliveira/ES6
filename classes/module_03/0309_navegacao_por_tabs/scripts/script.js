const tabMenu = document.querySelectorAll(".js-tabmenu li");
const tabContent = document.querySelectorAll(".js-tabcontent section");

function activeTab(index) {
  tabContent.forEach((section) => {
    section.classList.remove("ativo");
  });

  tabContent[index].classList.add("ativo");
}

tabMenu.forEach((image, index) => {
  image.addEventListener("click", function () {
    activeTab(index);
  });
});
