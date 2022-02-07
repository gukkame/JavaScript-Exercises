function first(p1) {
    return p1[p1.length - p1.length]
}
function last(p1) {
    return p1[p1.length - 1];
}
function kiss(p) {
    const arr = [];
    arr.push(last(p))
    arr.push(first(p))
    return arr

}
// console.log(kiss("gdadadadb"))
console.log(kiss([1, 2, 3, 4, 5, 6]))