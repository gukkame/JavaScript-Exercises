let hasCity = function (country, cities) {
    return function (city) {
        console.log(cities);
        for (let i = 0; i < cities.length; i++) {
            if (city == cities[i]) {
                return city + " is a city from " + country
            }
        }
        return city + " is not a city from " + country
    };
};