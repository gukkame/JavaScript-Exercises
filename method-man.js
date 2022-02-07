function words(str) {
    return str.split(" ");
}
function sentence(arr) {
    return arr.join(" ")
}
function yell(str) {
    return str.toUpperCase()
}
function whisper(str) {
    return "*" + str.toLowerCase() + "*"
}
function capitalize(str) {
    str1 = ""
    for (let i = 0; i < str.length; i++) {
        if (i == 0) {
            str1 = str1 + str[0 + i].toUpperCase()
        } else {
            str1 = str1 + str[0 + i].toLowerCase()
        }
    }
    return str1
}
