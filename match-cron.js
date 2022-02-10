function matchCron(str, date) {
    let counter = 0
    var mins = date.getMinutes();
    var hours = date.getHours();
    var dayofmonth = date.getDate();
    var month = date.getMonth() + 1;
    var dayofweek = date.getDay();
    let arr = str.split(" ")
    if (arr[0] == '*' || arr[0] == mins) {
        counter++
    }
    if (arr[1] == '*' || arr[1] == hours) {
        counter++
    }
    if (arr[2] == '*' || arr[2] == dayofmonth) {
        counter++
    }
    if (arr[3] == '*' || arr[3] == month) {
        counter++
    }
    if (arr[4] == '*' || arr[4] == dayofweek) {
        counter++
    }
    if (counter == 5) {
        return true
    }
    return false

}
console.log(matchCron('* * * * 1', new Date('2020-06-01 00:00:00')));