function id(p1) {
    return p1
}
function getLength(p1) {
    let p = [].concat(p1)
    i = p.length;
    if (i == 1) {
        i = p[0].length
    }
    return i
}
console.log(getLength([2, 21]))
