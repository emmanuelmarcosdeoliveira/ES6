const tabmenu = document.querySelectorAll(".js-tabmenu li");
console.log(tabmenu);
const tabContent = document.querySelectorAll(".js-tabcontent section");
console.log(tabContent);

function activeTab(index) {
  tabContent.forEach((index) => {
    index.classList.remove("ativo");
  });

  tabContent[index].classList.add("ativo");
}

tabmenu.forEach((image, index) => {
  image.addEventListener("click", () => {
    activeTab(index);
  });
});
