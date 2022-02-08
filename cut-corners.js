const num = [Math.PI, -Math.PI, Math.E, -Math.E, 0]

function round(n) {

    return r(n, 0)
}
function ceil(n) {

}
function floor(n) {

}
function trunc(num) {
    num = num * 100
    num = num / 100
    return num
}
function r(num, fixed) {
    var re = new RegExp('^-?\\d+(?:\.\\d{0,' + (fixed || -1) + '})?');
    return num.toString().match(re)[0];
}
console.log(num.map(round))
// console.log(num.map(ceil))
// console.log(num.map(floor))
console.log(num.map(trunc))