
// const person = {
//     name: 'Rick',
//     age: 77,
//     country: 'US',
// }
let clone1 = {
    ...person
};
let clone2 = {
    ...person
};
person.age++
person.country = 'FR'

samePerson = person

console.log(typeof person)
console.log(typeof samePerson)