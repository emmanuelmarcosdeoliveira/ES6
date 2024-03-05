const linksInternos = document.querySelectorAll(".js-menu a[href^='#'] ");

function scrollToSection(e) {
  e.preventDefault();
  const href = e.currentTarget.getAttribute("href");
  const section = document.querySelector(href);
  section.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

linksInternos.forEach((links) => {
  links.addEventListener("click", scrollToSection);
});
