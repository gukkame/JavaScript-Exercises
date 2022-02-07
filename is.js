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
    if (is.num(num) && is.nan(num) && is.str(num) && is.bool(num) && is.undef(num) && is.def(num) && is.arr(num) && is.obj(num) && is.fun(num)) {
        return true
    }
    return false
};

is.falsy = function (num) {
    if (!is.num(num) || !is.nan(num)) {
        return true
    } else if (is.str(num) == false || is.undef(num) == false) {
        return true
    }
    return false

};

