//* Snack 1

const biciclette = [
  { nome: "bici", peso_kg: 7 },
  { nome: "bici", peso_kg: 6 },
  { nome: "bici", peso_kg: 8 },
  { nome: "bici", peso_kg: 5 },
];

biciclette.sort((a, b) => a.peso_kg - b.peso_kg);
console.log(biciclette[1].peso_kg);
