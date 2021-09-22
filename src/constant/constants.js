export const COLORS = {
  normal: "#A8A77A",
  fire: "#EE8130",
  water: "#6390F0",
  electric: "#F7D02C",
  grass: "#7AC74C",
  ice: "#96D9D6",
  fighting: "#C22E28",
  poison: "#A33EA1",
  ground: "#E2BF65",
  flying: "#A98FF3",
  psychic: "#F95587",
  bug: "#A6B91A",
  rock: "#B6A136",
  ghost: "#735797",
  dragon: "#6F35FC",
  dark: "#705746",
  steel: "#B7B7CE",
  fairy: "#D685AD",
};

export const POKE_LIST = [
  {
    id: 1,
    name: {
      english: "Bulbasaur",
    },
    type: ["Grass", "Poison"],
    base: {
      HP: 45,
      Attack: 49,
      Defense: 49,
      "Sp. Attack": 65,
      "Sp. Defense": 65,
      Speed: 45,
    },
  },
  {
    id: 2,
    name: {
      english: "Ivysaur",
    },
    type: ["Grass", "Poison"],
    base: {
      HP: 60,
      Attack: 62,
      Defense: 63,
      "Sp. Attack": 80,
      "Sp. Defense": 80,
      Speed: 60,
    },
  },
  {
    id: 3,
    name: {
      english: "Venusaur",
    },
    type: ["Grass", "Poison"],
    base: {
      HP: 80,
      Attack: 82,
      Defense: 83,
      "Sp. Attack": 100,
      "Sp. Defense": 100,
      Speed: 80,
    },
  },
  {
    id: 4,
    name: {
      english: "Charmander",
    },
    type: ["Fire"],
    base: {
      HP: 39,
      Attack: 52,
      Defense: 43,
      "Sp. Attack": 60,
      "Sp. Defense": 50,
      Speed: 65,
    },
  },
  {
    id: 5,
    name: {
      english: "Charmeleon",
    },
    type: ["Fire"],
    base: {
      HP: 58,
      Attack: 64,
      Defense: 58,
      "Sp. Attack": 80,
      "Sp. Defense": 65,
      Speed: 80,
    },
  },
  {
    id: 6,
    name: {
      english: "Charizard",
    },
    type: ["Fire", "Flying"],
    base: {
      HP: 78,
      Attack: 84,
      Defense: 78,
      "Sp. Attack": 109,
      "Sp. Defense": 85,
      Speed: 100,
    },
  },
  {
    id: 7,
    name: {
      english: "Squirtle",
    },
    type: ["Water"],
    base: {
      HP: 44,
      Attack: 48,
      Defense: 65,
      "Sp. Attack": 50,
      "Sp. Defense": 64,
      Speed: 43,
    },
  },
  {
    id: 8,
    name: {
      english: "Wartortle",
    },
    type: ["Water"],
    base: {
      HP: 59,
      Attack: 63,
      Defense: 80,
      "Sp. Attack": 65,
      "Sp. Defense": 80,
      Speed: 58,
    },
  },
  {
    id: 9,
    name: {
      english: "Blastoise",
    },
    type: ["Water"],
    base: {
      HP: 79,
      Attack: 83,
      Defense: 100,
      "Sp. Attack": 85,
      "Sp. Defense": 105,
      Speed: 78,
    },
  },
  {
    id: 10,
    name: {
      english: "Caterpie",
    },
    type: ["Bug"],
    base: {
      HP: 45,
      Attack: 30,
      Defense: 35,
      "Sp. Attack": 20,
      "Sp. Defense": 20,
      Speed: 45,
    },
  },
];

export const API_BASE_URL = "https://pokeapi.co/api/v2/pokemon/";
