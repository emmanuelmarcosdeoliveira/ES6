const frutas = ['Banana', 'Uva'];

frutas.hasOwnProperty('map'); // false
Array.hasOwnProperty('map'); // false
Array.prototype.hasOwnProperty('map'); // true

Array.prototype.propertyIsEnumerable('map'); // false
window.propertyIsEnumerable('innerHeight'); // true

const frutas1 = ['Banana', 'Uva'];

console.log(Array.prototype.isPrototypeOf(frutas1)); // true