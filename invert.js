let invert = function (obj) {

    return Object.fromEntries(Object.entries(obj).map(a => a.reverse()))
}