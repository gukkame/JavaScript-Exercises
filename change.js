const sourceObject = {
    num: 42,
    bool: true,
    str: 'some text',
    log: console.log,
}
let value2
function get(key) {
    switch (key) {
        case "num":
            return sourceObject.num
        case "bool":
            return sourceObject.bool
        case "str":
            return sourceObject.str
        case "log":
            return sourceObject.log
        default:
            return value2
    }
}
function set(key, value) {
    switch (key) {
        case "num":
            return sourceObject.num = value
        case "bool":
            return sourceObject.bool = value
        case "str":
            return sourceObject.str = value
        case "log":
            return sourceObject.log = value
        default:
            value2 = value
            return value
    }
}
// console.log(get('log'))
// console.log(set('log'))
// console.log(get('log'))