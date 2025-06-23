import * as displayWindow from "./displayWindow.js"

export function pdf(documentPath, windowName, windowId){
    let pdfIconPath = "assets/pdfIcon.png" //to be replaced
    let canvas = displayWindow.create(windowId, windowName, pdfIconPath)

    let pdfView = document.createElement("embed")
    pdfView.id = windowId + "Pdf"
    pdfView.className = "pdf"
    pdfView.src = documentPath

    canvas.appendChild(pdfView)
}

export function latexFile(documentPath){

}

export function video(url){

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