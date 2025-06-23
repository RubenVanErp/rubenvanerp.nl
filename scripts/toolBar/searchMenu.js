export function create(){
    let searcnMenuButton = document.createElement("div")
    searcnMenuButton.id = "searchMenuButton"
    searcnMenuButton.className = "not-selectable"

    addEventListener("click", closeSearchMenu, true)
    searcnMenuButton.addEventListener("click", toggleSearchMenu)

    document.getElementById("searchBar").appendChild(searcnMenuButton)


    let searchMenuContainer = document.createElement("div")
    searchMenuContainer.id = "searchMenuContainer"
    searchMenuContainer.className = "not-selectable"
    document.getElementById("searchBar").appendChild(searchMenuContainer)


    let searchMenu = document.createElement("div")
    searchMenu.id = "searchMenu"
    searchMenu.className = "not-selectable"
    searchMenuContainer.appendChild(searchMenu)
    document.body.style.overflow = 'hidden';
}

function openSearchMenu(){
    document.getElementById("searchMenu").style.setProperty("transition", "top 0.5s ease")
    document.getElementById("searchMenu").style.setProperty("top", "0px")
}

function closeSearchMenu(){
    document.getElementById("searchMenu").style.setProperty("transition", "top 0.3s ease")
    document.getElementById("searchMenu").style.setProperty("top", "300px")
}

function toggleSearchMenu(){
    if(document.getElementById("searchMenu").offsetTop == 300){
        openSearchMenu()
    } else{
        closeSearchMenu()
    }
}
