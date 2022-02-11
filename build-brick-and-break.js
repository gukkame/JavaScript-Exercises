export const build = (count) => {
    const body = document.querySelector('body')
    let i = 1
    let intervalID = setInterval(bricks, 10);
    function bricks(times) {
        let brick = document.createElement("div")
        brick.append(i)
        brick.id = "brick-" + i
        body.append(brick)
        if (i == count) {
            clearInterval(intervalID)
        }
        if (i % 3 == 2) {
            brick.dataset.foundation = true
        }
        i += 1
    }

}
export function repair() {
    for (let i = 0; i < arguments.length; i++) {
        let y = document.getElementById(arguments[i]);
        y.hasAttribute("data-foundation") ? y.dataset.repaired = "in progress" : y.dataset.repaired = true

    }
}
export function destroy() {
    let divlength = document.getElementsByTagName("div").length
    let y = document.getElementById("brick-" + divlength);
    y.remove();
}