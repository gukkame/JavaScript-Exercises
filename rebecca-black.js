function isFriday(date) {
    let day = date.getDay()
    if (day == 5)
        return true
    return false
}
function isWeekend(date) {
    let day = date.getDay()
    if (day == 0 || day == 6)
        return true
    return false
}

function isLeapYear(date) {
    let y = date.getYear()
    if (y % 4 == 0)
        return true
    return false
}

function isLastDayOfMonth(date) {
    var d = new Date(date.getYear(), date.getMonth() + 1, 0);
    console.log(date.getDate());
    console.log(d.getDate());
    if (date.getDate() == d.getDate())
        return true
    return false
}
// console.log(isLastDayOfMonth(new Date('2020-12-30')));