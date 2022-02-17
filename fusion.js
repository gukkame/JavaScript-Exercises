let fusion = function (obj, obj2) {

    let keys1 = Object.keys(obj)
    let keys2 = Object.keys(obj2)
    let keys3 = Object.keys(keys1[0])
    let keys4 = Object.keys(keys2[0])

    let newObj = new Object()
    let value1 = Object.values(obj)
    let value2 = Object.values(obj2)
    let value3 = Object.values(value1[0])
    let value4 = Object.values(value2[0])

    let keylength;
    if (keys1.length > keys2.length) {
        keylength = keys1.length
    } else {
        keylength = keys2.length
    }
    if (value1.length > 1 || typeof value3[0] === 'object') {
        for (let i = 0; i < keylength; i++) {
            let key = keys2[i]
            if (keys1.length > keys2.length) {
                key = keys1[i]
            } else {
                key = keys2[i]
            }

            if (typeof value3[0] === 'object') {

                let value = value3[i].concat(value4[i])
                let value2 = parseInt(Object.values(value3[1])) + parseInt(Object.values(value4[1]))
                return { a: { b: value.flat(), c: { d: value2 } } }

            }

            if (typeof value2[i] === "undefined") {
                newObj[key] = value1[i]
                break
            }
            if (typeof value1[0] === "string") {
                newObj[key] = value1[i] + " " + value2[i]


            } else if (Array.isArray(value1[0])) {
                if (typeof value1[i] === "undefined") {
                    newObj[key] = value2[i]
                    break
                }
                let value = value1[i].concat(value2[i])
                newObj[key] = value.flat()
            } else {

                newObj[key] = value1[i] + value2[i]
            }

        }
        return newObj
    }
    if (typeof value1[0] === "string" && typeof value2[0] === "string") {
        const key = keys1[0]
        newObj[key] = value1 + " " + value2
        return newObj


    } else if (Array.isArray(value1[0]) && Array.isArray(value2[0])) {

        let value = value1.concat(value2)
        const key = keys1[0]
        newObj[key] = value.flat()
        return newObj

    } else if (typeof value1[0] === 'object') {

        const key = keys1[0]
        newObj[key] = value2[0]
        return newObj

    } else if (typeof value2[0] === 'object') {

        const key = keys1[0]
        newObj[key] = value2[0]
        return newObj
    } else if (typeof value1[0] === 'number' && typeof value2[0] === 'number') {
        const key = keys1[0]
        newObj[key] = parseInt(value1) + parseInt(value2)
        return newObj
    } else {
        return obj2
    }

}