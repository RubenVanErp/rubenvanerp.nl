import * as toolBar from "./toolBar/toolBar.js"
import * as background from "./background.js"
import * as icon from "./icons/icon.js"
import * as contentFunctions from "./icons/contentFunctions.js"

export function create(){
    toolBar.create()
    background.create()

    icon.create("CVIcon", 1, 1, "./assets/pdfIcon.png", "Ruben CV", contentFunctions.pdf, ["files/RubenVanErpCV.pdf", "Ruben CV", "CV",])
    icon.create("characterSheet",  221, 1,"./assets/characterSheetIcon.ico", "Character sheet",contentFunctions.hyperLink, ["Ruben Explorer", "./assets/characterSheetIcon.ico", "charactersheetBrowser" ,"http://charactersheet.rubenvanerp.nl/"])
    icon.create("drosteWebsite",  111, 1,"./assets/drosteLogo.png", "rubenvan erp.nl",contentFunctions.hyperLink, ["Ruben Explorer", "./assets/drosteLogo.png", "charactersheetBrowser" ,"http://rubenvanerp.nl/"])
}