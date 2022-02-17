let pick = function (obj, str) {
    let keys = Object.keys(obj)
    let values = Object.values(obj)
    let newObj = new Object()

    if (Array.isArray(str)) {
        for (let j = 0; j < keys.length; j++) {
            for (let i = 0; i < str.length; i++) {
                if (keys[j] == str[i]) {
                    const key = str[i]
                    newObj[key] = values[j]
                }
            }
        }
        return newObj
    }
    if (typeof str === "string") {
        for (let j = 0; j < keys.length; j++) {
            if (keys[j] == str) {
                const key = str
                newObj[key] = values[j]
            }
        }
        return newObj
    }
}

let omit = function (obj, str) {
    let keys = Object.keys(obj)
    let values = Object.values(obj)
    let newObj = new Object()


    if (Array.isArray(str)) {
        for (let j = 0; j < keys.length; j++) {
            let c = 0
            for (let i = 0; i < str.length; i++) {
                if (keys[j] != str[i]) {
                    c++
                    if (c == str.length) {
                        const key = keys[j]
                        newObj[key] = values[j]
                    }
                } else {
                    break
                }
            }
        }
        return newObj
    }
    if (typeof str === "string") {
        for (let j = 0; j < keys.length; j++) {
            if (keys[j] != str) {
                const key = keys[j]
                newObj[key] = values[j]
            } 
        }
        return newObj
    }

}