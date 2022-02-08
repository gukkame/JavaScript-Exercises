function split(str, sp) {
    let temp = "";
    let splitArray = [];
    console.log("rrr", sp)
    for (let i = 0; i < str.length; i++) {
        if (str[i] == sp[0] && str[i + 1] == sp[1]) {
            i = i + 2
            splitArray.push(temp);
            temp = "";
        } else if (str[i] != sp) {
            temp += str[i];
            if (str[i + 1] == sp || i == str.length - 1) {
                splitArray.push(temp);
                console.log(temp)
                temp = "";
            }
        }

    }
    return splitArray;
}
function join(arr, sep) {
    let result = '';
    for (var i = 0; i < arr.length; i++) {
        if (result) {
            result += sep;
        }
        result += arr[i];
    }
    return result;
}
console.log(join(['ee', 'ff', 'g', ''], ','))
console.log(join(['ggg', 'ddd', 'b'], ' - '))
console.log(join(['a', 'b', 'c'], ' '))