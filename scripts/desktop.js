import * as toolBar from "./toolBar/toolBar.js"
import * as background from "./background.js"
import * as icon from "./icon.js"

export function create(){
    toolBar.create()
    background.create()

    icon.create("test1", 1, 1, "./assets/icon.png", "Ruben CV")
    icon.create("test2", 111, 1, "./assets/icon.png", "My PC")
    icon.create("test2", 1, 78, "./assets/icon.png", "Settings")
}