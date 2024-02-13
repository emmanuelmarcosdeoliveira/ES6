function initTabNav() {
  // Selecionado os elenentos
  const tabMenu = document.querySelectorAll(".js-tabmenu li");
  // Acima estou selecionado as li da classe js-tabmenu
  const tabContent = document.querySelectorAll(".js-tabcontent section");
  // Acima estou selecionado as Sections da classe de tb-content  que é cada seçào com as descrições de animais

  if (tabMenu.length && tabContent.length) {
    //-------------------------------------------------------------------------
    tabContent[0].classList.add("ativo");
    // Acima estamos fazendo com que ao carregar o html o item com o index 0 esteja sempre atvio

    //--------------------------------------------------------------------------
    // Criando a funçao para ativaçao da calsse ativo

    function activeTab(index) {
      tabContent.forEach((section) => {
        section.classList.remove("ativo");
      });
      // Acima estamos fazendo um loop forEach nos elementos (sections) e removendo a classe ativo de todos eles

      tabContent[index].classList.add("ativo");
      // Acima estou adicionado uma classe de ativo em todas as sections do array like
    }

    tabMenu.forEach((imagem, index) => {
      imagem.addEventListener("click", function () {
        activeTab(index);
        // Acima for cirado um  loop onde é passado por todas as imagens e seus index onde adicionamos um evento ao clicar na imagem é adicionado o index nas sectons
      });
    });
  }
}
initTabNav();

//-------------------------------------------------------------------------------

function initAccordion() {
  const accordionList = document.querySelectorAll(".js-accordion dt");

  if (accordionList.length) {
    accordionList[0].classList.add("ativo");
    accordionList[0].nextElementSibling.classList.add("ativo");

    function activeAccordion() {
      this.classList.toggle("ativo");
      this.nextElementSibling.classList.toggle("ativo");
    }

    accordionList.forEach((item) => {
      item.addEventListener("click", activeAccordion);
    });
  }
}
initAccordion();

//------------------------------------------------------------------------------------
function initScrollSuave() {
  const linksInternos = document.querySelectorAll(".js-menu a[href^='#']");
  console.log(linksInternos);

  function scrollToSection(e) {
    e.preventDefault();
    const href = e.currentTarget.getAttribute("href");
    const section = document.querySelector(href);
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    // forma alternativa
    // const top = section.offsetTop;
    // window.scrollTo({
    //   top: top,
    //   behavior: "smooth",
    // });
  }
  linksInternos.forEach((link) => {
    link.addEventListener("click", scrollToSection);
  });
}
initScrollSuave();

//--------------------------------------------------------------------------------------
