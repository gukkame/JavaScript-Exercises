const escapeStr = "`\\/\"'"
const arr = [4, '2']
const obj = {
    str: String,
    num: Number,
    bool: Boolean,
    undef: undefined
}
const nested = {
    arr: arr,
    obj: obj
}
Object.freeze(nested);
Object.freeze(arr);
Object.freeze(obj);