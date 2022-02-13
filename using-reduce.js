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
        // console.log(array1);
        console.log("previous ", previousValue);
        console.log("current ", currentValue);

        let b
        if (currentValue % 2 == 0) {
            // console.log("d ", previousValue * currentValue, initialValue);
            b = previousValue * currentValue, initialValue
        } else {
            // console.log("C ", previousValue + currentValue, initialValue);

            b = previousValue + currentValue, initialValue
        }
        console.log("B ", b);

        return b
    });
    array1.shift()
    console.log(" ");
    return a
}
function funcExec(funcArray, n) {
    return funcArray.reduce((previousResult, fn) => fn(previousResult), n);
}