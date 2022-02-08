const num = [Math.PI, -Math.PI, Math.E, -Math.E, 0]

function round(n) {
    if (n > 0) {
        n = n + 0.4
    } else if (n < 0) {
        n = n - 0.4
    }
    return r(n, 0)
}
function floor(n) {
    return r(n, 0)
}
function trunc(num) {
    return r(num, 0)
}
function ceil(n) {
    if (n > 0) {
        n = n + 1
    }
    return r(n, 0)
}

function r(num, fixed) {
    var re = new RegExp('^-?\\d+(?:\.\\d{0,' + (fixed || -1) + '})?');
    return num.toString().match(re)[0];
}
console.log(num.map(round))
console.log(num.map(floor))
console.log(num.map(trunc))
console.log(num.map(ceil))