let vowels = /[aeiou]/gi;
function vowelDots(str) {
    let str1 = ""
    let result = str.match(vowels);
    if (result == null) {
        return str
    }
    for (let i = 0; i < str.length; i++) {
        str1 += str[i]
        for (let j = 0; j < result.length; j++) {

            if (str[i] == result[j]) {
                str1 += "."
            }
        }
    }
    return str1

}

// console.log(vowelDots('something'));
// console.log(vowelDots(''));
// console.log(vowelDots('rhythm'))
// console.log(vowelDots('Algorithm'));