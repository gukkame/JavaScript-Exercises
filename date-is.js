function isValid(d) {
    if (new Date(d) > 0 && d instanceof Date) {
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

