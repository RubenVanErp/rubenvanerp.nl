export function create(){
    let menuButton = document.createElement("div")
    menuButton.id = "menuButton"
    menuButton.className = "not-selectable"

    addEventListener("click", closeMenu, true)
    menuButton.addEventListener("click", toggleMenu)

    document.getElementById("searchBar").appendChild(menuButton)
    let menuContainer = document.createElement("div")
    menuContainer.id = "menuContainer"
    menuContainer.className = "not-selectable"
    document.getElementById("searchBar").appendChild(menuContainer)


    let menu = document.createElement("div")
    menu.id = "menu"
    menu.className = "not-selectable"
    menuContainer.appendChild(menu)
    document.body.style.overflow = 'hidden';

    createMenuButton("test1MenuButton", 0, "Downloads", "./assets/icon.png", openMenu)
    createMenuButton("test1MenuButton", 1, "Documents", "./assets/icon.png", openMenu)
    createMenuButton("test1MenuButton", 2, "Videos", "./assets/icon.png", openMenu)
    createMenuButton("test1MenuButton", 3, "Photos", "./assets/icon.png", openMenu)
    createMenuButton("test1MenuButton", 4, "My PC", "./assets/icon.png", openMenu)
}

    
function createMenuButton(id, order, text, iconPath, action){
    let menuItem = document.createElement("div")
    menuItem.id = id
    menuItem.className = "not-selectable menuItem"
    menuItem.style.setProperty("--top", 0 + order * 40 + "px")
    menuItem.style.setProperty("--left", 40 + "px")
    menuItem.style.setProperty("--height", 40 + "px")
    menuItem.style.setProperty("--width", 158 + "px")

    menuItem.addEventListener("click", action)
    menuItem.addEventListener("mousedown", () => {
    menuItem.style.setProperty("transform", "scale(0.95)");

    // Listen globally to ensure reset
    const reset = () => {
        menuItem.style.setProperty("transform", "scale(1)");
        window.removeEventListener("mouseup", reset);
        menuItem.removeEventListener("mouseleave", reset);
    };
    window.addEventListener("mouseup", reset);
    menuItem.addEventListener("mouseleave", reset);
    });


    let menuItemIcon = document.createElement("div")
    menuItemIcon.id = id + 'Icon'
    menuItemIcon.className = "not-selectable menuItemIcon"
    menuItemIcon.style.setProperty("background-image", "url('"+iconPath+"')")

    let menuItemLabel = document.createElement("div")
    menuItemLabel.id = id + 'Label'
    menuItemLabel.className = "not-selectable menuItemLabel" 
    menuItemLabel.textContent = text


    document.getElementById("menu").appendChild(menuItem)
    menuItem.appendChild(menuItemIcon)
    menuItem.appendChild(menuItemLabel)
}


function openMenu(){
    document.getElementById("menu").style.setProperty("transition", "top 0.5s ease")
    document.getElementById("menu").style.setProperty("top", "0px")
}

function closeMenu(){
    document.getElementById("menu").style.setProperty("transition", "top 0.3s ease")
    document.getElementById("menu").style.setProperty("top", "300px")
}

function toggleMenu(){
    if(document.getElementById("menu").offsetTop == 300){
        openMenu()
    } else{
        closeMenu()
    }
}
