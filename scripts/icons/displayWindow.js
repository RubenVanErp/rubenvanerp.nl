
let windowCount = 0
let totalWindowCount = 0 //for unique naming
let allWindowsContainer = document.createElement("div")
allWindowsContainer.id = 'windows'
allWindowsContainer.className = "windows"
document.body.appendChild(allWindowsContainer)
let zCounter = 10; // global counter to manage stacking order

function bringToFront(el) {
    zCounter += 1;
    el.style.zIndex = zCounter;
}

let dragOverlay = document.createElement("div");
dragOverlay.id = "dragOverlay"
document.body.appendChild(dragOverlay)

function makeMovable(element) {
    let offsetX, offsetY, isDragging = false;

    element.addEventListener("mousedown", (e) => {
        bringToFront(element);

        if (e.clientY - element.offsetTop < 30 &&
            e.clientX - element.offsetLeft < element.offsetWidth - 120) {

            isDragging = true;
            offsetX = e.clientX - element.offsetLeft;
            offsetY = e.clientY - element.offsetTop;

            document.body.style.userSelect = "none";
            dragOverlay.style.display = "block"; 
        }
    });

    document.addEventListener("mousemove", (e) => {
        if (!isDragging) return;
        let newX = e.clientX - offsetX;
        let newY = e.clientY - offsetY;

        const maxX = window.innerWidth - element.offsetWidth;
        const maxY = window.innerHeight - element.offsetHeight-30;

        newX = Math.max(0, Math.min(newX, maxX));
        newY = Math.max(0, Math.min(newY, maxY));

        element.style.left = `${newX}px`;
        element.style.top = `${newY}px`;
    });

    document.addEventListener("mouseup", () => {
        if (isDragging) {
            document.body.style.userSelect = "";
            dragOverlay.style.display = "none"; 
        }
        isDragging = false;
    });
}


export function create(id, name, iconPath){
    if(document.getElementById(id+ 'Container')){
        id = id+String(totalWindowCount)
    }

    windowCount += 1
    totalWindowCount += 1
    let windowContainer = document.createElement("div")
    windowContainer.id = id + 'Container'
    windowContainer.className = "windowContainer"
    windowContainer.style.setProperty("--windowCount", (windowCount * 20) +"px")
    windowContainer.style.setProperty("width", window.innerWidth * 0.6 + "px")
    windowContainer.style.setProperty("height", window.innerHeight * 0.6 + "px")
    allWindowsContainer.appendChild(windowContainer)

    makeMovable(windowContainer)

    //topBar
    let topBar = document.createElement("div")
    topBar.id = id + 'topBar'
    topBar.className = " topBar not-selectable"
    windowContainer.appendChild(topBar)

    //cross
    let cross = document.createElement("div")
    cross.id = id + 'Cross'
    cross.className = " cross not-selectable"
    cross.textContent = String.fromCharCode(215)
    topBar.appendChild(cross)
    cross.addEventListener("click", () => {removeWindow(document.getElementById(id + 'Container'))})

    //square
    let square = document.createElement("div")
    square.id = id + 'Square'
    square.className = " square not-selectable"
    square.textContent = "\u25A1"
    topBar.appendChild(square)
    square.addEventListener("click", () => {fullScreenWindow(document.getElementById(id + 'Container'))})

    //minus
    let minus = document.createElement("div")
    minus.id = id + 'Minus'
    minus.className = " minus not-selectable"
    minus.textContent = "\u2212"
    topBar.appendChild(minus)
    minus.addEventListener("click", () => {minimizeWindow(document.getElementById(id + 'Container'))})

    //windowIcon
    let windowIcon = document.createElement("div")
    windowIcon.id = id + 'WindowIcon'
    windowIcon.className = " windowIcon not-selectable"
    windowIcon.style.setProperty("background-image", "url("+iconPath+")")
    topBar.appendChild(windowIcon)

    //windowName
    let windowName = document.createElement("div")
    windowName.id = id + 'WindowName'
    windowName.className = " windowName not-selectable"
    windowName.textContent = name
    topBar.appendChild(windowName)

    //canvas
    let canvas = document.createElement("div")
    canvas.id = id + 'Canvas'
    canvas.className = " canvas not-selectable"
    windowContainer.appendChild(canvas)

    bringToFront(windowContainer)
    return canvas
}


function removeWindow(element){
    element.style.setProperty("transition", "transform 0.1s linear")
    element.style.setProperty("transform", "scale(0.6)")
    setTimeout(()=>{element.remove()},100)
    windowCount -= 1
}
function fullScreenWindow(element){
    element.dataset.previousTop = element.offsetTop;
    element.dataset.previousLeft = element.offsetLeft;
    element.dataset.previousWidth = element.offsetWidth;
    element.dataset.previousHeight = element.offsetHeight;

    element.style.setProperty("top", "0px")
    element.style.setProperty("left", "0px")
    element.style.setProperty("width", "100%")
    element.style.setProperty("height", "100%")
    element.style.setProperty("border-radius", "0px")

    let idBase = element.id.slice(0, -9);
    let squareBtn = document.getElementById(idBase + "Square");
    squareBtn.textContent = "\u29C9"
    let newBtn = squareBtn.cloneNode(true);
    newBtn.addEventListener("click", () => exitFullScreen(element));
    squareBtn.replaceWith(newBtn);
}
function exitFullScreen(element){
    element.style.setProperty("top", element.dataset.previousTop + "px")
    element.style.setProperty("left", element.dataset.previousLeft + "px")
    element.style.setProperty("width", element.dataset.previousWidth + "px")
    element.style.setProperty("height", element.dataset.previousHeight + "px")
    element.style.setProperty("border-radius", "10px")


    let idBase = element.id.slice(0, -9);
    let squareBtn = document.getElementById(idBase + "Square");
    squareBtn.textContent = "\u25A1"
    let newBtn = squareBtn.cloneNode(true);
    newBtn.addEventListener("click", () => fullScreenWindow(element));
    squareBtn.replaceWith(newBtn);
}
function minimizeWindow(element){
    console.log("Minimize Window")
}