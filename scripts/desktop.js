import * as toolBar from "./toolBar/toolBar.js"
import * as background from "./background.js"
import * as icon from "./icons/icon.js"
import * as contentFunctions from "./icons/contentFunctions.js"
import * as fileExplorer from "./fileStructure/fileExplorer.js"

export function create(){
    toolBar.create()
    background.create()

    icon.create("CVIcon", 1, 1, "./files/this_pc/photos/pdfIcon.png", "Resume", contentFunctions.file, [["this_pc","documents","Resume.pdf"], "Resume"])
    icon.create("thesisIcon", 1, 78, "./files/this_pc/photos/pdfIcon.png", "Bachelor Thesis", contentFunctions.file, [["this_pc","documents","thesis.pdf"], "Bachelor Thesis", "thesis"])
    icon.create("characterSheet",  221, 1,"./files/this_pc/photos/characterSheetIcon.ico", "Character sheet",contentFunctions.hyperLink, ["Ruben Explorer", "./files/this_pc/photos/characterSheetIcon.ico", "charactersheetBrowser" ,"http://charactersheet.rubenvanerp.nl/"])
    icon.create("drosteWebsite",  111, 1,"./files/this_pc/photos/drosteLogo.png", "rubenvan erp.nl",contentFunctions.hyperLink, ["Ruben Explorer", "./files/this_pc/photos/drosteLogo.png", "charactersheetBrowser" ,"http://rubenvanerp.nl/"])
    icon.create("thisPC", 111, 78, "./files/this_pc/photos/folderIcon.webp", "This PC", fileExplorer.fileExplorer,[["this_pc"], "File Explorer", "fileExplorer"])
}