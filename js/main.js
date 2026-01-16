//* Snack 1

const biciclette = [
  { nome: "bici", peso_kg: 7 },
  { nome: "bici", peso_kg: 6 },
  { nome: "bici", peso_kg: 8 },
  { nome: "bici", peso_kg: 5 },
];

biciclette.sort((a, b) => a.peso_kg - b.peso_kg);
console.log(biciclette[1].peso_kg);

//* Snack 2

const squadre = [
  { nome: "Juventus", punti: 0, falli: 0 },
  { nome: "Milan", punti: 0, falli: 0 },
  { nome: "Inter", punti: 0, falli: 0 },
  { nome: "Napoli", punti: 0, falli: 0 },
];

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

for (let scquadra of squadre) {
  scquadra.punti = randomNumber(10, 30);
  scquadra.falli = randomNumber(2, 10);
}

console.table(squadre)
