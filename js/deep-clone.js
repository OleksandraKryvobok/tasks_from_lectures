//-----------------1-----------------

const arr = [{name: 'Petya'}, {name: 'Fedya'}];
const newArr = JSON.parse(JSON.stringify(arr));

newArr[0].name = 'Katya';

console.log(arr);
console.log(newArr);

//-----------------2-----------------

const arr2 = [{name: 'Petya'}, {name: 'Fedya'}];
const newArr2 = _.cloneDeep(arr2);//lodash library from https://cdnjs.com/libraries/lodash.js

newArr2[0].name = 'Katya';

console.log(arr2);
console.log(newArr2);

/*-----------------3-----------------
  doesn't work!
*/

const arr3 = [{name: 'Petya'}, {name: 'Fedya'}];
const newArr3 = arr3.slice();

newArr3[0].name = 'Katya';

console.log(arr3);
console.log(newArr3);

/*-----------------4-----------------
  doesn't work!
*/

const arr4 = [{name: 'Petya'}, {name: 'Fedya'}];
const newArr4 = [...arr4];

newArr4[0].name = 'Katya';

console.log(arr4);
console.log(newArr4);


