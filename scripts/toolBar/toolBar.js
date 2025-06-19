import * as menu from "./menu.js"
import * as searchMenu from "./searchMenu.js"

export function create(){
    let searchBar = document.createElement("div")
    searchBar.id = "searchBar"
    searchBar.className = "not-selectable"
    document.body.appendChild(searchBar)


    menu.create()
    searchMenu.create()

}


