export const getArchitects = () => {
    let arr1, arr2, arr
    let y = document.getElementsByTagName("a");
    // for (let i = 0; i < y.length; i++) {
    // y[i].style.backgroundColor = "red";
    arr1 = Array.from(y);
    // }
    let x = document.getElementsByTagName("span");
    // for (let i = 0; i < x.length; i++) {
    // x[i].style.backgroundColor = "green";
    arr2 = Array.from(x);
    // }
    arr = [arr1, arr2]
    return arr
}
export const getClassical = () => {
    const arr1 = Array.from(document.getElementsByClassName('classical'));
    const arr2 = Array.from(document.querySelectorAll('.modern,.baroque'));//queryslectorall can handle more then one value
    let arr = [arr1, arr2]
    return arr
    //:not(.classical)'));
}
export const getActive = () => {
    const arr1 = Array.from(document.getElementsByClassName('active'));
    const arr2 = Array.from(document.querySelectorAll('a.classical:not(.active)'));
    let arr = [arr1, arr2]
    return arr
}
export const getBonannoPisano = () => {
    let y = document.getElementById("BonannoPisano");
    const arr2 = Array.from(document.querySelectorAll('a.classical.active:not(#BonannoPisano)'));
    let arr = [y, arr2]
    return arr
}