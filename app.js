const header = document.querySelector('.header')
let center = 0
function changeColor() {
    let colors =('orange','green', 'yellow')
    header.getElementsByClassName.color = colors[counter]
    counter = (counter +1 ) % colors.length
}
setInterval(changeColor,1000)