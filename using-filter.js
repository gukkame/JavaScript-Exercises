
function filterShortStateName(words) {
    const arrstr = words.filter(word => word.length < 7)
    return arrstr
}
function filterStartVowel(words) {
    const arrstr = words.filter(word => {
        let vowel = ["A", 'E', 'I', 'O', 'U']
        for (let i = 0; i < vowel.length; i++) {
            if (word[0] == vowel[i]) {
                return word[0]
            }
        }
    })
    return arrstr
}
function filter5Vowels(words) {
    const arrstr = words.filter(word => {
        let counter = 0
        let vowel = ["A", 'E', 'I', 'O', 'U', "a", 'e', 'i', 'o', 'u']
        for (let j = 0; j < word.length; j++) {
            for (let i = 0; i < vowel.length; i++) {
                if (word[j] == vowel[i]) {
                    counter += 1
                }
                if (counter == 5) {
                    return word[0]
                }
            }
        }
    })
    return arrstr
}
function filter1DistinctVowel(words) {
    const arrstr = words.filter(word => {
        // let counter = 0
        let vowel = ["A", 'E', 'I', 'O', 'U', "a", 'e', 'i', 'o', 'u']
        let str = ""
        for (let j = 0; j < word.length; j++) {
            for (let i = 0; i < vowel.length; i++) {
                if (word[j] == vowel[i]) {
                    str += word[j]
                }
            }
        }
        const letters = new Set();
        str = str.toLowerCase()
        if (/^(.)\1+$/.test(str)) {
            return word
        }
    })
    return arrstr
}
function multiFilter(words) {
    const arrstr = words.filter(word => {
        let vowel = ["A", 'E', 'I', 'O', 'U', "a", 'e', 'i', 'o', 'u']
        let flag = false
        let flag2 = false
        for (let j = 0; j < word.tag.length; j++) {
            for (let i = 0; i < vowel.length; i++) {
                if (word.tag[j] == vowel[i]) {
                    flag = true
                }
                if (word.name[0] == vowel[i]) {
                    flag2 = true
                }

            }
        }

        if (word.capital.length > 7 && flag2 == false && flag == true && word.region != "South") {
            return word
        }
    })
    return arrstr
}