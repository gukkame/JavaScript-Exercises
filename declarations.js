const escapeStr = "`\\/\"'"
const arr = [4, '2']
Object.freeze(arr);
const obj = {
    str: 'String',
    num: 0,
    bool: true,
    undef: undefined
}
Object.freeze(obj);
const nested = {
    arr: [4, undefined, '2'],
    obj: {
        str: 'String',
        num: 0,
        bool: true,
    }
}
console.log(nested.obj)

Object.freeze(nested);
Object.freeze(nested.obj);
Object.freeze(nested.arr);

