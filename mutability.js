const person = {
    name: 'Rick',
    age: 77,
    country: 'US',
}

let clone1 = {
    ...person
};
clone2 = {
    ...person
};
person.age++
person.country = 'FR'
samePerson = {
    ...person
};
