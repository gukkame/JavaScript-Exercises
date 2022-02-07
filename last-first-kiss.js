function first(p1) {
    return p1[p1.length - p1.length]
}
function last(p1) {
    return p1[p1.length - 1];
}
function kiss(p) {
    const arr = [];
    return arr.push(first(p), last(p))

}
// console.log(kiss("gdadadadb"))
// console.log(first('salut'))