is.num = function (num) {
    if (typeof num == "number") {
        return true
    }
    return false
};
is.nan = function (num) {
    if (num == isNaN) {
        return true
    }
    return false
};
is.str = function (num) {
    if (typeof num === "string") {
        return true
    }
    return false
};
is.bool = function (num) {
    if (typeof num === true) {
        return true
    }
    return false
};
is.undef = function (num) {
    if (typeof num === undefined) {
        return true
    }
    return false
};
is.def = function (num) {
    if (typeof num !== 'undefined') {
        return true
    }
    return false
};
is.arr = function (num) {
    if (Array.isArray(num)) {
        return true
    }
    return false
};
is.obj = function (num) {
    if (typeof str === 'object') {
        return true
    }
    return false
};
is.fun = function (num) {
    if (typeof num === 'function') {
        return true
    }
    return false
};
// is.truthy = function (num) {
//     if (typeof num === "numing") {
//         return true
//     }
//     return false
// };
// is.falsy = function (num) {
//     if (typeof num === "numing") {
//         return true
//     }
//     return false
// };

