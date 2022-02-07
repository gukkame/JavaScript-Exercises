const escapeStr = "`\\/\"'"
const arr = [4, '2']

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
console.log(typeof nested.obj.str)

Object.freeze(nested);
Object.freeze(arr);
Object.freeze(obj);