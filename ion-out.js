function ionOut(str) {
    let ion = /\w+tion/g;
    let arr = []
    // let result = str.match(ion)
    let result = str.match(ion)
    if (result == null) {
        return []
    }
    // console.log(result.join(" "))
    let r = result.join(" ")
    let str1 = r.replace(/ion/g, "")
    let str2 = str1.split(' ')
    return str2

}
// console.log(ionOut('attention, direction'));
// console.log(ionOut('promotion, provision'));
// console.log(ionOut('transfusion'));
// console.log(ionOut(' 1st position is the vision of the 2nd position'));