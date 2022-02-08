function chunk(arr, n) {
    let l = arr.length
    let a = []
    let a2 = []
    for (let i = 0; i < arr.length; i++) {
        if (a.length == n) {
            a2.push(a);
            a = []
        }
        a.push(arr[i]);
    }
    a2.push(a);
    return a2
}
console.log(chunk(['a', 'b', 'c', 'd'], 2));