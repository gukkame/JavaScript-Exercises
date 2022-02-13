function every(arr, fnc) {
    let res
    for(let i = 0; i < arr.length; i++) {
       if (fnc(arr[i])) {
           res = true
       } else {
           return false
       }   
    }
    return res
}
function some(arr, fnc) {
    for (let i = 0; i < arr.length; i++) {
        if (fnc(arr[i])) {
            return true
        }

    }
    return false
}
function none(arr, fnc) {
    let res
    for(let i = 0; i < arr.length; i++) {
       if (!fnc(arr[i])) {
           res = true
       } else {
           return false
       }   
    }
    return res

}