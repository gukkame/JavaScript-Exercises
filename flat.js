let flat = function (arr, val=0) {
    let a = arr.reduce((acc, val) => acc.concat(val), []);
    for (let i = 0; i < a.length; i++) {
        if (val == 2) {
            let arr1 = arr.reduce((acc, val) => acc.concat(val), [])
            return arr1.reduce((acc, val) => acc.concat(val), [])
        }
        if (val == 3 || val == Infinity) {
            let arr1 = arr.reduce((acc, val) => acc.concat(val), [])
            let arr2 = arr1.reduce((acc, val) => acc.concat(val), [])
            return arr2.reduce((acc, val) => acc.concat(val), [])
        }
    }
return arr.reduce((acc, val) => acc.concat(val), []);
}