function citiesOnly(arr) {

    const arrstr = arr.map(name => { return name.city })

    return arrstr
}
function upperCasingStates(arr) {
    const arrstr = arr.map(name => {
        let str = ""
        for (let i = 0; i < name.length; i++) {
            if (name[i] == " ") {
                str += " " + name[i + 1].toUpperCase()
                i++
            } else if (i == 0) {
                str += name[0].toUpperCase()
            } else {
                str += name[i]
            }
        }
        return str
    })
    return arrstr
}
function fahrenheitToCelsius(arr) {
    const arrstr = arr.map(item => {
        let str = item.match(/-?\d+/)[0]
        let i = parseInt(str);
        let num = (i - 32) * 5 / 9
        num = Math.floor(num)
        let str2 = num.toString();
        return str2 + "°C"
    })
    return arrstr
}
function trimTemp(arr) {
    const arrstr = arr.map(name => {
        let str = ""
        for (let i = 0; i < name.temperature.length; i++) {
            if (name.temperature[i] != " ") {

                str += name.temperature[i]
            }
        }
        name.temperature = str
        return name

    })
    return arrstr

}

function tempForecasts(arr) {
    const arrstr = arr.map(name => {
        let str = ""
        str = fahrenheitToCelsius([name.temperature]) + "elsius in " + name.city + ", " + upperCasingStates([name.state])
        return str
    })
    return arrstr
}
