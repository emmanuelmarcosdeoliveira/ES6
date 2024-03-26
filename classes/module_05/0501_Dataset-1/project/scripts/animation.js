const div = document.querySelector("[data-width]");
console.log(div.dataset);
console.log(div.dataset.cor);
div.dataset.height = 1000;
console.log(div.dataset)

delete div.dataset.height
delete div.dataset.cor