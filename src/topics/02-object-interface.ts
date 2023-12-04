//ARREGLO DE STRING
const skills: string[] = ["Bash", "Counter", "Healing"];

//TIPO DE OBJETO COMPLETO
interface Character {
  name: string;
  hp: number;
  skills: string[];
  hometown?: string; // ? Significa que es opcional
}

//OBJETO de tipo Character
const strider: Character = {
  name: "Strider",
  hp: 100,
  skills: ["Bash", "Counter"],
};

strider.hometown = "Rivendell";

console.table(strider);

export {};
