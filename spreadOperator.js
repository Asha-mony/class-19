const maxValue = Math.max(20, 30, 40, 100);
// console.log(maxValue);


const numbers = [10, 20, 30, 40, 50]
const maxNumberInArray = Math.min(...numbers)
// console.log(maxNumberInArray);

const a = 30;
const b = a;
// console.log(b);

const numbers2 =  [...numbers]
numbers.push(100)

console.log('Orginals Array', numbers);
console.log('DDuplicate Array', numbers);