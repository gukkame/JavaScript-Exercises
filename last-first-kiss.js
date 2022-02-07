function first(p1) {
    let p = [].concat(p1)
    let l = p.length;
    let i = p[0]
    if (l == 1) {
        i = p[0][0]
    }
    return i
}
function last(p1) {
    return p1[p1.length - 1];
}
function kiss(p) {
    const arr = [];
    arr.push(first(p), last(p))
    return arr
}
// console.log(kiss("gdadadadb"))
// console.log(last('salut'))