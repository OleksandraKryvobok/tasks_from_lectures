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

const counter = {
    value: 0,
    decreaseValue() {
        this.value -= 1;
    },
    increaseValue() {
        this.value += 1;
    }
};

const refs = {
    decreaseBtn: document.querySelector('.js-decrement'),
    increaseBtn: document.querySelector('.js-increment'),
    valueEl: document.querySelector('.js-value'),
};

// console.log(refs.value.classList);



refs.decreaseBtn.addEventListener('click', () =>{
    counter.decreaseValue();
    refs.valueEl.textContent = counter.value;
});
refs.increaseBtn.addEventListener('click', () => {
    counter.increaseValue();
    refs.valueEl.textContent = counter.value;
});


