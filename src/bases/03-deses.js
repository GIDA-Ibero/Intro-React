const persona = {
  nombre: 'Tony',
  apellido: 'Stark',
  edad: 41,
  key: 'IronMan'
}

console.log(persona);

const { nombre:alias, apellido, edad, key } = persona;

console.log(alias);

const returnPerson = ({ nombre, key, range = 'Cap' }) => {
  return {
    nombre,
    key,
    range,
    ubicacion: {
      lat: 14.21,
      lng: 54.456
    }
  }
}

const nuevaPersona = returnPerson(persona);

const { ubicacion: { lat, lng } } = nuevaPersona;
console.log(lat, lng);

const personajes = ['Goku', 'Vegetta', 'Trunks'];

const [ , element2, element3 ] = personajes;
console.log(element2, element3);