
export function create(){

    let background = document.createElement("div")
    background.id = "background"
    background.className = "not-selectable"
    background.style.setProperty("--height", "30px")
    document.body.appendChild(background)
}