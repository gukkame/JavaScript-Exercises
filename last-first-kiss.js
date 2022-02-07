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
    let p = [].concat(p1)
    let i = p.length;
    if (typeof p[0] == "function") {

        var ret = p[0].toString();
        ret = ret.substr('function '.length);
        ret = ret.substr(0, ret.indexOf('('));
        return ret;
    }
    // console.log("i", p)
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
// console.log(last([]))