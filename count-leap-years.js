function countLeapYears(date) {
    date = date.toString()
    let year = date.split(" ")
    let y = year[3]
    console.log(year[3]);

    y /= 4.13
    if (y < 0) {
        return 0
    }
    return Math.round(y)
}
console.log(countLeapYears(new Date('2020-01-01')));