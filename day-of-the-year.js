function dayOfTheYear(date) {

    return  Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
}

console.log(dayOfTheYear(new Date('1664-08-09')));