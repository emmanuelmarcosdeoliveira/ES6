var videoGames = ["Switch", "PS4", "Xbox", "3DS"];
for (i = 0; i < videoGames.length; i++) {
  console.log(videoGames[i]);
  if (videoGames[i] === "Xbox") {
    break;
  }
}

videoGames.forEach(function (i) {
  console.log(i);
});

var frutas = ["Banana", "Maça", "Uva", "Mexerica", "Pera"];
frutas.forEach(function (fruta, index, array) {
  frutas.pop();
  console.log(frutas);
});
