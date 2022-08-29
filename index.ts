// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

showIcon();

function showIcon() {
  //Declaring Varibles
  const productName = 'Chilie Pieces';
  const scale = '250g';
  const price = '500 LKR';

  //Decalring the Map with String Key and Array with and Object
  let showIconMap = new Map<string, Array<Object>>();
  showIconMap.set('product001', []); //<-- '1' is now an empty array

  showIconMap.get('product001').push('Chillie'); // <-- now add to the array
  showIconMap.get('product001').push('100g');
  showIconMap.get('product001').push('500.00 LKR');

  showIconMap.set('product002', ['Saffron', '250g', '1000.00 LKR']);
  showIconMap.set('product003', [productName, scale, price]);

  //  console.log(
  //'Just testing the push function ' + showIconMap.get('product001')
  //);
  //console.log(
  //  'Just testing the retrieving a single element of an array ' +
  //    showIconMap.get('product001')[1]
  //); // <-- just 2nd Index

  //Loop for print data
  //if (this.labelsMap.has(name)) {
  // showIconMap.get('product001').forEach((lable) => {
  //   console.log('loop through single MAP ' + lable[0]);
  // });

  // for (let i = 0; i < showIconMap.size; i++) {
  //   console.log('Block statement execution no.' + i);
  // }

  //Solution 1 : Use built-in Map forEach function().
  // showIconMap.forEach(function (value, key) {
  //   console.log(`Map key is: ${key} and value is: ${value[1]}`);
  // });

  //Solution 2: Use ES6 [key,value] syntax
  for (let [key, value] of showIconMap) {
    console.log(`Map key is:${key} and value is:${value}`);
  }

  //Solution 3: Using Map entries method
  // for (let entry of showIconMap.entries()) {
  //   let mapKey = entry[0];
  //   let mapValue = entry[1];
  //   console.log(`Map key is:${mapKey} and value is:${mapValue}`);
  // }

  //Solution 4: Using Array.from() Map entries.
  // for (let entry of Array.from(showIconMap.entries())) {
  //   let mapKey = entry[0];
  //   let mapValue = entry[1];
  //   console.log(`Map key is:${mapKey} and value is:${mapValue}`);
  // }

  //https://stackoverflow.com/questions/61211329/array-map-function-not-able-to-push-object-in-simple-example
}

function mapExample1() {
  const enum Shape {
    Circle,
    Square,
  }

  let myMap = new Map<string, string>([
    ['key1', 'value1'],
    ['key2', 'value2'],
  ]);

  console.log(Shape['1']);
  console.log(myMap);
}

function mapExaple2() {
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
}
