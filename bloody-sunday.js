function bloodySunday(date) {
    const weekday = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


    let temp = new Date('0001-01-01')
    let day = (Math.abs((date.getTime() - temp.getTime())) / 1000 / 60 / 60 / 24) % 6
    return weekday[Math.floor(day)]

}
function timeTravel(obj) {
    obj.date.setHours(obj.hour)
    obj.date.setMinutes(obj.minute)
    obj.date.setSeconds(obj.second)
    return obj.date
}
