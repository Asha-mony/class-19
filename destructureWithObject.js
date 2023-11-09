// Destructure
const student = {
    name : 'Asha',
    age : 20,
    id : 3,
    schoolname : 'RPI',
    role : 'CR'
}

const {name, id, role:position, schoolname} = student
console.log(position, name);

// console.log(student.name);
// console.log(student.id);
// console.log(student.role);


const numbers = [10, 20, 30]
// const [a, b, c] =numbers
const [, , c] =numbers
// console.log(a, b, c);
console.log(c);