// const str = 'hello'
// const arr = [1, 2, 1, 3]
// const obj = { x: 45, y: 75, radius: 24 }
// const set = new Set()
// const map = new Map()
// set.add(1)
// set.add(2)
// set.add(1)
// set.add(3)
// map.set('a', 1)
// map.set('b', 2)
// map.set(3, 'c')
// map.set(4, 'd')

function arrToSet(arr) {
    return new Set(arr);
}
function arrToStr(arr) {
    return arr.join("");
}
function setToArr(set) {
    return Array.from(set);
}
function setToStr(set) {
    return Array.from(set).join("")
}
function strToArr(str) {
    return str.split("");
}
function strToSet(str) {
    return new Set(str)
}
function mapToObj(map) {
    const obj = {};
    for (let [key, value] of map) {
        obj[key] = value;
    }
    return obj
}
function objToArr(obj) {
    return Object.keys(obj).map((key) => obj[key]);
}
function objToMap(obj) {
    return new Map(Object.entries(obj));
}
function arrToObj(arr) {
    return Object.assign({}, arr);
}
function strToObj(str) {
    return Object.assign({}, str);
}


function superTypeOf(str) {
    if (str instanceof Map) {
        return 'Map'
    }
    if (str instanceof Set) {
        return 'Set'
    }

    if (Array.isArray(str)) {
        return 'Array'
    }
    if (typeof str == "string") {
        return 'String'
    }
    if (str === null) {
        return 'null'
    }
    if (typeof str === 'object') {
        return 'Object'
    }

    if (typeof str === "NaN") {
        return 'Number'
    }
    if (typeof str === "number") {
        return 'Number'
    }
    return typeof str
}
