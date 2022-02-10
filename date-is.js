function isValid(d) {
    if (!isNaN(d) && d instanceof Date) {
        return true

    }
    return false
}
function isAfter(d1, d2) {
    if (d1 < d2 || d1 <= d2) {
        return false
    } else {
        return true
    }

}
function isBefore(d1, d2) {
    if (d1 < d2 || d1 <= d2) {
        return true
    } else {
        return false
    }
}
function isFuture(d) {
    let p = isValid(d)
    if (p == true && Date.now() < d) {
        return true
    }
    return false
}
function isPast(d) {
    let p = isValid(d)
    if (p == true && Date.now() > d) {
        return true
    }
    return false
}

const invalid = (callback, ary = 1) => {
    for (const s of [
        `new Date('')`,
        `new Date(NaN)`,
        `''`,
        `'2013-01-01'`,
        `NaN`,
    ]) {
        if (callback(...Array(ary).fill(eval(s)))) {
            throw Error(`${callback.name}(${s}) should be false`)
        }
    }
}

console.log(invalid(isValid));
// console.log(isFuture(new Date('1992-01-01')));
// console.log(isFuture(new Date(Date.now() + 1)));
// console.log(isFuture(new Date(2077, 11, 31)));



// console.log(isBefore(new Date(2321, 11, 21), new Date(Date.now())));console.log(isBefore(123123, 526));
// console.log(isBefore(new Date('1992-01-01'), new Date('1992-01-02')));

// console.log(isValid(new Date('December 17, 1995 03:24:00')));
// console.log(isValid(new Date(1488370835081)));
// console.log(isValid(new Date('1995-12-17T03:24:00').getTime()));