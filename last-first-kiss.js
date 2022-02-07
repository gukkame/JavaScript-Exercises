function first(p1) {
    p = [].concat(p1)
    l = p.length;
    i = p[0]
    if (l == 1) {
        i = p[0][0]
    }

    return i
}
function last(p1) {
    p = [].concat(p1)
    i = p.length;
    if (i == 1) {
        i = p[0].length
        i = p[0][0 + i - 1]
        return i
    }
    i = p[0 + i - 1]

    return i
}
function kiss(p) {
    const arr = [];
    arr.push(first(p), last(p))
    return arr
}
// console.log(kiss("gdadadadb"))
// console.log(kiss([7, 2, 3, 4, 99]))