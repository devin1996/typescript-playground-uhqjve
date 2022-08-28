// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

const enum Shape {
  Circle,
  Square,
}

let myMap = new Map<string, string>([
  ['key1', 'value1'],
  ['key2', 'value2'],
]);

let map = new Map();

map.set('1', 'abhishek');
map.set(1, 'www.javatpoint.com');
map.set(true, 'bool1');
map.set('2', 'ajay');
map.set('4', ['ajay', '22', 'ed']);

console.log('Value1= ' + map.get(1));
console.log('Value2= ' + map.get('1'));
console.log('Key is Present= ' + map.has(3));
console.log('Size= ' + map.size);
console.log('Delete value= ' + map.delete(1));
console.log('New Size= ' + map.size);
console.log('Array= ' + map.get('4'));

//console.log(Shape['1']);
console.log(myMap);
let car: { type: string; model: string; year: number };

let myMapOne = new Map<string, Object>([
  ['key1', { value: d }],
  ['key2', 'value2'],
]);

var show;
