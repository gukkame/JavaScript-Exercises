export function compose() {
    window.addEventListener("keydown", function (event) {
        const body = document.querySelector('body')
        let div = document.createElement("div");
        div.textContent = `${event.key}`;
        if (event.key === 'Backspace') {
            let divlength = document.getElementsByTagName("div").length
            let div = document.getElementsByTagName("div")
            div[divlength - 1].remove();
        } else if (event.key === 'Escape') {
            document.querySelectorAll("div").forEach((item) => {
                item.remove()
            })
        } else {
            document.body.append(div)
            let randomColor = Math.floor(Math.random() * 16777215).toString(16);
            div.style.backgroundColor = "#" + randomColor
            div.classList.add("note");
        }
    }, true);

}