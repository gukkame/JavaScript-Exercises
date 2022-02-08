function multiply(num, times) {
    var n = num;
    let m = times;
    if (num < 0 && times < 0) {
        for (var i = 1; i < -times; i++) {
            num += n;
        }
        return Math.abs(num);
    } if (num <= 0 && times >= 0) {
        for (var i = 1; i < times; i++)
            num += n;
        return num;

    } if (num == 0) {
        return 0
    } else {
        for (var i = 1; i < num; i++)
            times += m;
        return times;
    }

}
function divide(a, b) {
    var sign = 1;
    if (a < 0) {
        a = -a;
        sign = -sign;
    }
    if (b < 0) {
        b = -b;
        sign = -sign;
    }
    var result = 0;
    while (a >= 0) {
        a -= b;
        result++;
    }
    return multiply(result - 1, sign);
}

function modulo(num, divisor) {
    let t = (num - multiply(divisor, parseInt(divide(num, divisor))));
    return t;
}

