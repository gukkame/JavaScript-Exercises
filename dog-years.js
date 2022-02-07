function dogYears(name, s) {
    let earthAge = s / 31557000
    switch (name) {
        case "earth":
            return roundDown(earthAge * 7, 2)
        case "mercury":
            return roundDown((earthAge / 0.2408500 * 7), 2)
        case "venus":
            return roundDown((earthAge / 0.61519726 * 7), 2)
        case "mars":
            return roundDown((earthAge / 1.8808158 * 7), 2)
        case "jupiter":
            return roundDown((earthAge / 11.862615 * 7), 2)
        case "saturn":
            return roundDown((earthAge / 29.430000 * 7), 2)
        case "uranus":
            return roundDown((earthAge / 84.016846 * 7), 2)
        case "neptune":
            return roundDown((earthAge / 164.79132 * 7), 2)

    }
}
function roundDown(number, decimals) {
    decimals = decimals || 0;
    return (Math.floor(number * Math.pow(10, decimals)) / Math.pow(10, decimals));
}
console.log(dogYears('earth', 1000000000))