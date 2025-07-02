import * as displayWindow from "./displayWindow.js"


export function file(location, windowId){
    
    let documentPath = getStringPath(location)

    let pdfIconPath = "files/this_pc/photos/pdfIcon.png"
    let canvas = displayWindow.create(windowId, documentPath.slice(documentPath.lastIndexOf("\/")+1), pdfIconPath)

    let pdfView = document.createElement("embed")
    pdfView.id = windowId + "File"
    pdfView.className = "pdf"
    pdfView.src = documentPath

    canvas.appendChild(pdfView)
}

export function hyperLink(windowName, iconPath ,windowId, url){

    
    let pdfIconPath = iconPath
    let canvas = displayWindow.create(windowId, windowName, pdfIconPath)

    let miniBrowser = document.createElement("iframe")
    miniBrowser.src = url
    miniBrowser.className = "browser"

    if (url == "http://rubenvanerp.nl/"){
        let browserErrorDiv = document.createElement("div") 
        browserErrorDiv.className = "browserErrorDiv"
        browserErrorDiv.textContent = "sadly no infinite recursion for you"
        canvas.appendChild(browserErrorDiv)
    }

    
    canvas.appendChild(miniBrowser)
}


export function getStringPath(location){
    let stringPath = "files"
    for (let i = 0; i<location.length; i++ ){
        stringPath += "/" + location[i]
    }
    return stringPath
}