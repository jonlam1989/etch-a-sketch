let grid = document.querySelector('.s2-grid')
let buttons = document.querySelectorAll('button:not(:last-child)')
let defaultBtn = document.querySelector('button:first-child')
let clearBtn = document.querySelector('button:last-child')

const gridWidth = grid.clientWidth

window.addEventListener('resize', function() {
    if (gridWidth === 400) {
        window.location.reload()
    }
    if (gridWidth === 560) {
        window.location.reload()
    }
})

let gridSize = 16
let cellSize = gridWidth / gridSize
let gameMode = ''

//create html-grid
function createHTMLGrid() {
    for (let i = 0; i < gridSize; i++) {
        let gridRow = document.createElement('tr')
    
        for (let j = 0; j < gridSize; j++) {
            let gridCell = document.createElement('td')
            gridCell.style.width = `${cellSize}px`
            gridCell.style.height = `${cellSize}px`    
            gridCell.addEventListener('mouseover', function(e) {changeColor(e)})
            gridRow.append(gridCell)
        }
    
        grid.append(gridRow)
    }
}

//shows which button is active
defaultBtn.classList.add('active')
for (let btn of buttons) {
    btn.addEventListener('click', function(){
        buttons.forEach((b)=>b.classList.remove('active'))
        btn.classList.add('active')
        gameMode = btn.innerHTML
    })
}

//clear game
clearBtn.addEventListener('click', function(){
    buttons.forEach((b)=>b.classList.remove('active'))
    clearBtn.classList.add('active')
    grid.innerHTML = '', createHTMLGrid()
    setTimeout(function(){
        clearBtn.classList.remove('active')
        for (let btn of buttons) {
            if (gameMode === '') defaultBtn.classList.add('active')
            if (btn.innerHTML === gameMode) btn.classList.add('active')
        }
    }, 800)
})

//create random color for Rainbow feature
function randomColor() {
    let r, g, b;

    r = Math.floor(Math.random()*256)
    g = Math.floor(Math.random()*256)
    b = Math.floor(Math.random()*256)

    return `rgb(${r}, ${g}, ${b})`
}

//change color of each cell 
function changeColor(e) {
    let color = 'rgb(80, 80, 80)'
    
    if (gameMode === 'Classic') color = 'rgb(80, 80, 80)'
    if (gameMode === 'Rainbow') color = randomColor()
    if (gameMode === 'Eraser') color = 'rgb(214, 210, 210)'
    
    e.target.style.backgroundColor = color
}

createHTMLGrid()