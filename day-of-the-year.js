function dayOfTheYear(date) {

    let res = Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
    if (res < 0)
        return 1
    return res
}

console.log(dayOfTheYear(new Date('0001-01-01')));