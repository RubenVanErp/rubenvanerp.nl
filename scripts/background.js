
export function create(){

    let background = document.createElement("div")
    background.style.setProperty("background-image",  'url("./files/this_pc/photos/carinaBackground.png")')
    background.id = "background"
    background.className = "not-selectable"
    background.style.setProperty("--height", "30px")
    document.body.appendChild(background)
}