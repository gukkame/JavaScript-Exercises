function triangle(symbol, num) {
    var line = "";
    for (var i = 1; i <= num; i++) {
        line += symbol.repeat(i)
        if (i != num) {
            line = line + "\n";
        }
    }
    return line;
}
console.log(triangle('a', 5));