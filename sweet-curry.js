let mult2 = function (x) {
    return function (y) {
        return x * y
    };
};
let add3 = function (x) {
    return function (y) {
        return function (z) {
            return x + y + z
        };
    };
};
let sub4 = function (x) {
    return function (y) {
        return function (z) {
            return function (c) {
                return x - y - z - c
            };
        };
    };
};