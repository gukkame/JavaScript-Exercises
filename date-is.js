function isValid(d) {

    return new Date(d).toString() !== 'Invalid Date';
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
    let p = new Date(d).toString() !== 'Invalid Date';
    if (p == true && Date.now() < d) {
        return true
    }
    return false
}
function isPast(date) {
    let p = new Date(d).toString() !== 'Invalid Date';
    if (p == true && Date.now() > d) {
        return true
    }
    return false
}

