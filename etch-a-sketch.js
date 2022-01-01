let grid = document.querySelector('.s2-grid')
let buttons = document.querySelectorAll('button')

const gridWidth = grid.clientWidth
const gridHeight = grid.clientHeight

let row = 16
let col = 16
let cellWidth = gridWidth / col
let cellHeight = gridHeight / row

for (let i = 0; i < row; i++) {
    let gridRow = document.createElement('tr')
    for (let j = 0; j < col; j++) {
        let gridCell = document.createElement('td')
        gridCell.style.width = `${cellWidth}px`
        gridCell.style.height = `${cellHeight}px`    
        gridRow.append(gridCell)
    }
    grid.append(gridRow)
}

for (let btn of buttons) {
    btn.addEventListener('click', ()=>{
        console.log('clicked')
    })
}