is.num = function (num) {
    if (typeof num == "number") {
        return true
    }
    return false
};
is.nan = function (x) {
    if (x !== x) {
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
    if (typeof num == "boolean") {
        return true
    }
    return false
};
is.undef = function (num) {
    if (typeof num === 'undefined') {
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
    if (typeof num === 'object' && !Array.isArray(num) && num !== null) {
        return true
    }
    return false
};
is.fun = function (num) {
    if (typeof num === 'function') {
        return typeof num
    }
    return false
};
is.truthy = function (num) {
    return num
};

is.falsy = function (num) {
    return !num
};

