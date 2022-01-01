let grid = document.querySelector('.s2-grid')
let buttons = document.querySelectorAll('button')

for (let btn of buttons) {
    btn.addEventListener('click', ()=>{
        console.log('clicked')
    })
}