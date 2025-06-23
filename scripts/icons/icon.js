let allIconsContainer = document.createElement("div")
allIconsContainer.id = 'icons'
allIconsContainer.className = "icons"
document.body.appendChild(allIconsContainer)

addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();}
        openIcons()
})
addEventListener("click",unselectAllFields, true)

export function create(id, top, left, iconImgPath, iconNameText, contentFunction, contentFunctionArgs){
    let iconBase = document.createElement("div")
    iconBase.id = id + "Base"
    iconBase.className = "iconBase not-selectable"
    iconBase.style.setProperty("--top", top + "px")
    iconBase.style.setProperty("--left", left + "px")
    iconBase.style.setProperty("--height", 70 + "px")
    iconBase.style.setProperty("--width", 70 + "px")


    let icon = document.createElement("div")
    icon.id = id
    icon.className = "icon not-selectable"
    icon.style.setProperty("--top",  "0px")
    icon.style.setProperty("--left",  "0px")

    icon.style.setProperty("--width", 70 + "px")
    icon.style.setProperty("--height", 70 + "px")

    icon.addEventListener("click", selectField) 
    icon.contentFunction = contentFunction
    icon.contentFunctionArgs = contentFunctionArgs
    icon.addEventListener("dblclick",  openIcon)


    let iconImg = document.createElement("img")
    iconImg.src = iconImgPath
    iconImg.id = id+"Img"
    iconImg.className = "iconImg not-selectable"
    iconImg.style.setProperty("--top", 5 + "px")
    iconImg.style.setProperty("--left", 5 + "px")
    iconImg.style.setProperty("--height", 60 + "px")
    iconImg.style.setProperty("--width", 60 + "px")

    let iconName = document.createElement("div")
    iconName.textContent = iconNameText
    iconName.id = id+"Name"
    iconName.className = "iconName not-selectable"
    iconName.style.setProperty("--top", 65 + "px")
    iconName.style.setProperty("--left", 5 + "px")
    iconName.style.setProperty("--width", "60px")
    iconName.style.setProperty("--height",  "auto")

    allIconsContainer.appendChild(iconBase)
    iconBase.appendChild(icon)
    iconBase.appendChild(iconImg)
    iconBase.appendChild(iconName)

    
    while(iconName.offsetHeight> 32 || iconName.offsetWidth> 60 ){
        iconName.textContent = iconName.textContent.slice(0,iconName.textContent.length-4) + '...'
    }

    icon.style.setProperty("--height", 70 + Math.min(iconName.offsetHeight, 32) + "px")
}


function unselectAllFields(){
    let allIcons = document.getElementsByClassName("icon")
    for (let i = 0; i<allIcons.length; i++){
        let field = allIcons[i]
        if (field.className.includes("selected")){
            unSelectField.apply(field)
        } 
    }
}
function selectField(){this.classList.add("selected");}
function unSelectField(){this.classList.remove("selected");}



function openIcons(){
    let allIcons = document.getElementsByClassName("icon")
    for (let i = 0; i<allIcons.length; i++){
        let field = allIcons[i]
        if (field.className.includes("selected")){
            openIcon.apply(field)
        } 
    }
}


function openIcon(){
    this.contentFunction(...this.contentFunctionArgs)
}