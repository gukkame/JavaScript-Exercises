function letterSpaceNumber(str) {

    const regex = /([a-z]|[A-Z])\s(\d(?=\s)|\d$|\d(?=\,)|\d(?=\.))/g;
    let found = str.match(regex);
    if (found == null) {
        return []
    }
    return found
}


console.log(letterSpaceNumber('He is 8 or 9 years old, not 10.'))
console.log(letterSpaceNumber('I like 7up.'))
console.log(letterSpaceNumber("It's 20 past 3"))
console.log(letterSpaceNumber('example 1, example 2'))
console.log(letterSpaceNumber(''))
console.log(letterSpaceNumber('Definitely 9.'))