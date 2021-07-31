const persona = {
  nombre: 'César',
  apellido: 'Arellano',
  edad: 21
};

const persona2 = { ...persona };

persona2.nombre = 'Toño';

console.log(persona);
console.log(persona2);