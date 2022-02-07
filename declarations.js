const escapeStr = "`\\/\"'"
const arr = [4, undefined, '2']

const obj = {
    str: 'String',
    num: 0,
    bool: true,
    undef: undefined
}
const nested = {
    arr: arr,
    obj: { ...obj }
}
console.log(nested.arr[2])

Object.freeze(nested);
Object.freeze(arr);
Object.freeze(obj);