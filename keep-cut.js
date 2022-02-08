function cutFirst(str) {
    let result = [];
    for (let i = 2; i < str.length; i++) {
        result.push(str[i]);
    }
    return result.join("");
}
function cutLast(str) {
    let result = [];
    for (let i = 0; i < str.length - 2; i++) {
        result.push(str[i]);
    }
    return result.join("");
}
function cutFirstLast(str) {
    str = cutFirst(str)
    str = cutLast(str)
    return str
}
function keepFirst(str) {
    let result = [];
    for (let i = 0; i < 2; i++) {
        result.push(str[i]);
    }
    return result.join("");
}
function keepLast(str) {
    let result = [];
    for (let i = str.length - 2; i < str.length; i++) {
        result.push(str[i]);
    }
    return result.join("");
}
function keepFirstLast(str) {
    const s = str
    let str1 = keepFirst(s)
    let str2 = keepLast(s)
    if (str1 == str2) {
        return str1
    }
    return str1 + str2
}
console.log(keepFirstLast('abcdef'))