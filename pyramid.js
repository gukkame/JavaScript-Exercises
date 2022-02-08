
function pyramid(symbol, num) {
    let string = "";
    // External loop
    for (let i = 1; i <= num; i++) {
        // printing spaces
        for (let j = 1; j <= num - i; j++) {
            string += " ";
        }
        // printing star
        for (let k = 0; k < 2 * i - 1; k++) {
            string += symbol;
        }
        if (i != num) {
            string += "\n";
        }

    }
    return string
}
console.log(pyramid('a', 5));