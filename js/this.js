//-----------------1-----------------

// const counter = {
//     value: 0,
//     increment(value) {
//         console.log('increment -> this', this);
//         this.value += value;
//     },
//     decrement(value) {
//         console.log('decrement -> this', this);
//         this.value -= value;
//     }
// }

// const updateCounter = function (value, operation) {
//     operation(value);
// }

// updateCounter(10, counter.increment.call(counter));
// console.log(counter.value);
// updateCounter(5, counter.decrement.bind((counter)));
// console.log(counter.value);

//-----------------2-----------------

// const counterSec = {
//     value: 0,
//     decreaseValue() {
//         this.value -= 1;
//     },
//     increaseValue() {
//         this.value += 1;
//     }
// };

// const refs = {
//     decreaseBtn: document.querySelector('.js-decrement'),
//     increaseBtn: document.querySelector('.js-increment'),
//     valueEl: document.querySelector('.js-value'),
// };

// // console.log(refs.value.classList);



// refs.decreaseBtn.addEventListener('click', () =>{
//     counterSec.decreaseValue();
//     refs.valueEl.textContent = counter.value;
// });
// refs.increaseBtn.addEventListener('click', () => {
//     counterSec.increaseValue();
//     refs.valueEl.textContent = counter.value;
// });

/*-----------------3-----------------
we have Call, Apply, but no Bind. Create your own Bind
*/

// function sayHello(a, b) {
//     console.log(`Hello, ${this.name}!`, a + b);
// }

// const obj1 = { name: 'Vanya' };
// const obj2 = { name: 'Dima' };

// const fn1 = sayHello.bind(obj1);
// fn1(5, 8);

// function myBind(context, callback) {
//     return function(){
//         callback.apply(context, arguments);
//     }
// }

// const fn2 = myBind(obj2, sayHello);

// fn2(2, 2);


