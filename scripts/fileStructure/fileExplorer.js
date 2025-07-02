import * as displayWindow from "../icons/displayWindow.js"
import * as fileTree from "./fileTree.js"
import * as contentFunctions from "../icons/contentFunctions.js"

export function fileExplorer(location, windowName, windowId){
    let pdfIconPath = "files/this_pc/photos/folderIcon.webp"
    let canvas = displayWindow.create(windowId, windowName, pdfIconPath)

    openExplorerAtLocation(canvas, location)
}



function openExplorerAtLocation(canvas, location){
    canvas.textContent = "" //clears canvas

    let stagingArea = createExplorerStagingArea(location,canvas)
    canvas.appendChild(stagingArea)
    let SideBar = createExplorerSideBar(location, canvas)
    canvas.appendChild(SideBar)
}

function getFileChildren(location){
    let tree = fileTree.getFileTree()
    let currentFile = tree[location[0]]
    for (let i = 1; i<location.length; i++ ){
        currentFile = currentFile[location[i]]
    }

    if(!currentFile){return []}

    let children = []

    for (let i =0; i < Object.keys(currentFile).length; i++){
        children.push(location.concat(Object.keys(currentFile)[i]))
    }
    return children
}
function getFileItem(location){
    let tree = fileTree.getFileTree()
    let currentFile = tree[location[0]]
    for (let i = 1; i<location.length; i++ ){
        currentFile = currentFile[location[i]]
    }
    return currentFile
}



function createExplorerSideBar(location, canvas){
    let SideBar = document.createElement("div")
    SideBar.id = String(location) + "Sidebar"
    SideBar.className = "not-selectable fileExplorerSideBar"
    let SideBarBackground = document.createElement("div")
    SideBarBackground.id = String(location) + "SidebarBackground"
    SideBarBackground.className = "not-selectable fileExplorerSideBarBackground"
    SideBar.appendChild(SideBarBackground)

    let menuText = document.createElement("div")
    menuText.id = String(location) + "FileExplorerSideBarMenuText"
    menuText.className = "not-selectable fileExplorerSideBarMenuText"
    menuText.textContent = "Root\n\n\nNavigate\n\n\n\n\n\n\n\n\n\nPrevious\n\n\n\n "
    menuText.style.setProperty("--top", "10px")
    menuText.style.setProperty("--height", "calc(100% - 20px)")
    SideBar.appendChild(menuText)


    let ThisPC = createSideBarButton(" This PC", 25, 20, ["this_pc"], canvas)
    SideBar.appendChild(ThisPC)

    let Downloads = createSideBarButton(" Downloads ", 70, 20, ["this_pc","downloads"], canvas)
    SideBar.appendChild(Downloads)


    let documents = createSideBarButton(" Documents ", 95, 20, ["this_pc","documents"], canvas)
    SideBar.appendChild(documents)

    let photos = createSideBarButton(" Photos ", 120, 20, ["this_pc","photos"], canvas)
    SideBar.appendChild(photos)
    
    let videos = createSideBarButton(" Videos ", 145, 20,  ["this_pc","videos"], canvas)
    SideBar.appendChild(videos)

    let parentLocation = (location[0] == "this_pc") ? ["this_pc"]: location.slice(0,-1)
    let previous = createSideBarButton(" " + parentLocation[parentLocation.length-1].replace("_", " "), 220, 20, parentLocation, canvas)
    SideBar.appendChild(previous)


    return SideBar
}

function createSideBarButton(text, top, height, desination, canvas){
    let button = document.createElement("div")
    button.id = text.replace(/ /g, '') + "FileExplorerSideBarMenuText"
    button.className = "not-selectable fileExplorerSideBarMenuItem"
    button.textContent = text
    button.style.setProperty("--top", top + "px")
    button.style.setProperty("--height", height + "px")
    button.addEventListener("click", () => {openExplorerAtLocation(canvas, desination)})
    return button
}

function createExplorerStagingArea(location, canvas){
    let stagingArea = document.createElement("div")
    stagingArea.className = "not-selectable fileExplorerStagingArea"

    let children = getFileChildren(location)
    for(let i = 0; i<children.length; i++){
        stagingArea.appendChild(createStagingAreaItem(children[i], 5 + i*30, canvas))
    }
    
    return stagingArea
}

function createStagingAreaItem(location, top, canvas){
    let itemBase = document.createElement("div")
    itemBase.className = "fileExplorerStagingAreaItem not-selectable"
    itemBase.style.setProperty("--top", top + "px")

    let itemText = document.createElement("div")
    itemText.className = "not-selectable fileExplorerStagingAreaItemText"
    itemText.textContent = location[location.length-1]
    if (typeof(getFileItem(location)) == "object"){
        itemBase.addEventListener("click", () => {openExplorerAtLocation(canvas, location)})
    } else {
        itemBase.addEventListener("click", () => {contentFunctions.file(location, "resume")})
    }

    itemBase.appendChild(itemText)

    return itemBase
}