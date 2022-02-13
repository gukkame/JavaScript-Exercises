function adder(array1, n = 0) {
    const initialValue = 0;
    let a = array1.reduce((previousValue, currentValue) => previousValue + currentValue, initialValue);
    return a + n
}
function sumOrMul(array1, n) {
    const initialValue = 0;
    if (typeof n !== "undefined") {
        array1.unshift(n)
    } else {
        array1.unshift(null)
    }
    console.log(array1);
    let a = array1.reduce((previousValue, currentValue) => {
        let b
        if (currentValue % 2 == 0) {
            b = previousValue * currentValue, initialValue
        } else {
            b = previousValue + currentValue, initialValue
        }
        return b
    });
    array1.shift()
    return a
}
function funcExec(funcArray, n) {
    return funcArray.reduce((previousResult, fn) => fn(previousResult), n);
}