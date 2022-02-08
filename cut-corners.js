const num = [Math.PI, -Math.PI, Math.E, -Math.E, 0]

function round(n) {
    if (n > 0) {
        n = n + 0.4
    } else if (n < 0) {
        n = n - 0.4
    }
    return n | 0
}
function floor(n) {
    if (n < 0) {
        n = n - 1
    }
    return n | 0
}
function trunc(x) {
    return x - x % 1;
}
function ceil(n) {
    if (n > 0) {
        n = n + 1
    }
    return n | 0
}
console.log(num.map(round))
console.log(num.map(floor))
console.log(num.map(trunc))
console.log(num.map(ceil))