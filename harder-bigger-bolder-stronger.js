export function generateLetters() {
    var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    for (let i = 1; i <= 120; i++) {
        let div = document.createElement("div")
        let r = randomChars.charAt(Math.floor(Math.random() * randomChars.length))
        document.body.append(div)
        div.append(r)
        div.id = i
        document.getElementById(i).style.fontSize = (i + 11) + "px"
        if (i < 40) {
            document.getElementById(i).style.fontWeight = "300"
        }
        if (i >= 40 && i < 80) {
            document.getElementById(i).style.fontWeight = "400"
        }
        if ( i >= 80) {
            document.getElementById(i).style.fontWeight = "600"
        }
    }

}