let filterEntries = function (obj, filterFunc) {
    let arr = Object.entries(obj)
    const filterArr = [];
    for (let i = 0; i < arr.length; i++) {
        const result = filterFunc(arr[i]);
        if (result) filterArr.push(arr[i]);
    }
    return Object.fromEntries(filterArr)

}

let mapEntries = function (obj, mapFunc) {
    let arr = Object.entries(obj)
    const mapArr = [];
    for (let i = 0; i < arr.length; i++) {
        const result = mapFunc(arr[i]);
        mapArr.push(result);
    }
    return Object.fromEntries(mapArr);
}

let reduceEntries = function (obj, reducer, initialValue) {
    let arr = Object.entries(obj)
    let flag = true
    let accumulator = flag ? arr[0][0] + arr[0][1] : initialValue + arr[0][0] + initialValue
    for (let i = 1; i < arr.length; i++) {
        accumulator = reducer(accumulator, arr[i], arr);
    }
    return accumulator;
}

let lowCarbs = function (obj) {
    let arr = Object.entries(obj)
    const filterArr = [];
    let arr2 = Object.entries(nutritionDB)
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr2[j][0] == arr[i][0]) {
                for (let k = 1; k < arr2[j].length; k = k + 2) {
                    let carbs = Object.entries(arr2[j][k])
                    if (arr[i][1] / 100 * carbs[2][1] < 50) {
                        filterArr.push(arr[i])
                    }
                }
            }
        }
    }
    return Object.fromEntries(filterArr)
}

let totalCalories = function (obj) {
    let arr = Object.entries(obj)
    const filterArr = [];
    let arr2 = Object.entries(nutritionDB)

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr2[j][0] == arr[i][0]) {
                for (let k = 1; k < arr2[j].length; k = k + 2) {
                    let carbs = Object.entries(arr2[j][k])
                    filterArr.push(carbs[0][1] * arr[i][1] / 100)

                }
            }
        }
    }
    const initialValue = 0;
    return Number(filterArr.reduce(
        (previousValue, currentValue) => previousValue + currentValue,
        initialValue
    ).toFixed(1));
}

let cartTotal = function (obj) {
    let final = {}
    for (const [key1, value1] of Object.entries(obj)) {
        let info = {}
        for (const [key2, value2] of Object.entries(nutritionDB[key1])) {
            info[key2] = Number((value2 * value1 / 100).toFixed(3))
        }
        final[key1] = info
    }
    return final
}