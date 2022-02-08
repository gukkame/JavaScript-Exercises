function nasa(n) {
    let s = ""

    for (let i = 1; i <= n; i++) {

        if (i % 3 == 0 && i % 5 == 0) {
            s = s + "NASA"
        } else if (i % 3 == 0) {
            s = s + "NA" + " "
        } else if (i % 5 == 0) {
            s = s + "SA" + " "
        } else {
            s = s + i.toString(10) + " ";
        }
    }

    return s
}
console.log(nasa(15))