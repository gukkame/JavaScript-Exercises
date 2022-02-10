function addWeek(date) {
    const weekday = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday", "secondMonday", "secondTuesday", "secondWednesday", "secondThursday", "secondFriday", "secondSaturday", "secondSunday"];


    let temp = new Date('0001-01-01')
    let day = (Math.abs((date.getTime() - temp.getTime())) / 1000 / 60 / 60 / 24) % 14
    return weekday[Math.floor(day)]

}
function timeTravel(obj) {
    obj.date.setHours(obj.hour)
    obj.date.setMinutes(obj.minute)
    obj.date.setSeconds(obj.second)
    return obj.date
}
// console.log(addWeek(new Date('0001-01-06')));//saturday
// console.log(addWeek(new Date('0001-01-11')));//secondThursday
// console.log(addWeek(new Date('1664-08-09')));//saturday
// console.log(addWeek(new Date('2048-12-07')));//monday


console.log(timeTravel({
    date: new Date('2020-05-29 01:28:02'),
    hour: 21,
    minute: 22,
    second: 22,
}).getTime())
console.log(new Date('2020-05-29 21:22:22').getTime());

console.log(timeTravel({
    date: new Date('2000-05-29 01:28:02'),
    hour: 21,
    minute: 22,
    second: 22,
}))
console.log(new Date('2020-05-29 21:22:22'));


