function RNA(str) {
    let s = ""
    for (let i = 0; i < str.length; i++) {
        if (str[i] == "G") {
            s = s + "C"
        }
        if (str[i] == "T") {
            s = s + "A"
        }
        if (str[i] == "A") {
            s = s + "U"
        }
        if (str[i] == "C") {
            s = s + "G"
        }
    }
    return s
}
function DNA(str) {
    let s = ""
    for (let i = 0; i < str.length; i++) {
        if (str[i] == "A") {
            s = s + "T"
        }
        if (str[i] == "U") {
            s = s + "A"
        }
        if (str[i] == "G") {
            s = s + "C"
        }
        if (str[i] == "C") {
            s = s + "G"
        }
    }
    return s
}

console.log(RNA(DNA('AUCG')))