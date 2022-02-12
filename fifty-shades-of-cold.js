import { colors } from './fifty-shades-of-cold.data.js'
export function generateClasses() {
    let arr = []
    for (let i = 0; i < colors.length; i++) {
        let css = '.' + colors[i] + ' { background: ' + colors[i] + '; }';
        arr.push(css)
    }
    let head = document.head || document.getElementsByTagName('head')[0]
    let style = document.createElement('style');
    head.appendChild(style);
    style.type = 'text/css';
    if (style.styleSheet) {
        style.styleSheet.cssText = arr;
    } else {
        for (let i = 0; i < colors.length; i++) {
            style.appendChild(document.createTextNode(arr[i]));
        }
    }

    head.appendChild(style);

}
export function generateColdShades() {
    const body = document.querySelector('body')
    for (let i = 0; i < colors.length; i++) {

        if ((/aqua|blue|turquoise|green|cyan|navy|purple/g).test(colors[i])) {

            let div = document.createElement("div")
            document.body.append(div)
            div.append(colors[i])
            div.classList.add(colors[i]);
        }
    }
}
export function choseShade(shade) {
    let div = document.getElementsByTagName("div")
    for (let i = 0; i < div.length; i++) {
        div[i].classList.replace( div[i].classList, shade)


    }
}