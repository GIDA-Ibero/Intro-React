import heroes, { owners } from "./data/heroes";

const getHeroById = (id = 1) => heroes.find((heroe) => heroe.id === id);
const getHeroByOwner = (owner = 'Marvel') => heroes.filter((heroe) => heroe.owner === owner);

console.log(heroes);
console.log(owners);
console.log(getHeroById());
console.log(getHeroByOwner('DC'));