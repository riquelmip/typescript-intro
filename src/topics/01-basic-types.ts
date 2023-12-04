//CONSTANTE:variable que no va a cambiar
const name: string = "Strider";

//Variable que solo maneja numeros o el string: 'FULL'
let hpPoints: number | "FULL" = 95;

//CONSTANTE BOOLEANA
const isAlive: boolean = true;

hpPoints = "FULL";

console.log({
  name,
  hpPoints,
  isAlive,
});

export {};
