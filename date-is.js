function isValid(d) {
    return d instanceof Date && !isNaN(new Date(d)) || typeof d === 'number' && !isNaN(new Date(d));
}
function isAfter(d1, d2) {
    if (!isValid(d1) || !isValid(d2)) {
        return false
    }
    if (d1 < d2 || d1 <= d2) {
        return false
    } else {
        return true
    }

}
function isBefore(d1, d2) {

    if (!isValid(d1) || !isValid(d2)) {
        return false
    }
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
