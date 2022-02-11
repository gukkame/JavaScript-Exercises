import { styles } from './pimp-my-style.data.js'
export function pimp() {
    const btn = document.getElementsByTagName("button")

    var classList = btn[0].classList;
    if (classList.length == 16 || classList.contains("unpimp")) {
        console.log(classList.length);
        // let s = styles.length - classList.length
        // btn[0].classList.toggle("unpimp", classList.length > 0);
        if (classList.length == 2) {
            btn[0].classList.remove(classList[1]);
        }
        btn[0].classList.remove(classList[classList.length - 2]);

    }
    if (classList.length <= 16 && !classList.contains("unpimp")) {
        let s = styles.length - classList.length
        btn[0].classList.add(styles[14 - s]);
        if (classList.length == 16) {
            btn[0].classList.add("unpimp");
        }
    }

}