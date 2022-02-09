function sameAmount(str, r1, r2) {
    let result = str.match(r1);
    let result2 = str.match(r2);
    if (result.length == result2.length) {
        return true
    } else {
        return false
    }
}