//* Snack 1

const biciclette = [
  { nome: "bici", peso_kg: 7 },
  { nome: "bici", peso_kg: 6 },
  { nome: "bici", peso_kg: 8 },
  { nome: "bici", peso_kg: 5 },
];

let biciLeggera = biciclette[0];

for (let i = 1; i < biciclette.length; i++) {
  if (biciclette[i].peso_kg < biciLeggera.peso_kg) {
    biciLeggera = biciclette[i];
  }
}

console.log(biciLeggera.peso_kg);

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

const squadreFalli = squadre.map(({ nome, falli }) => ({ nome, falli }));

console.table(squadreFalli);
