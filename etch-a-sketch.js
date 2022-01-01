let grid = document.querySelector('.s2-grid')
let buttons = document.querySelectorAll('button:not(:last-child)')
let defaultBtn = document.querySelector('button:first-child')

const gridWidth = grid.clientWidth

let gridSize = 16
let cellSize = gridWidth / gridSize

//create html-grid
for (let i = 0; i < gridSize; i++) {
    let gridRow = document.createElement('tr')

    for (let j = 0; j < gridSize; j++) {
        let gridCell = document.createElement('td')
        gridCell.style.width = `${cellSize}px`
        gridCell.style.height = `${cellSize}px`    
        gridRow.append(gridCell)
    }

    grid.append(gridRow)
}

//shows which button is active
defaultBtn.classList.add('active')
for (let btn of buttons) {
    btn.addEventListener('click', function(){
        buttons.forEach((b)=>b.classList.remove('active'))
        btn.classList.add('active')
    })
}