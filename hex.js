const hexColors = [0, 1, 2, 3, 4, 5, 6, "A", "B", "C", "D", "E", "F"]
const btn = document.getElementById("click-me")
const changeColor = document.querySelector("#color")

btn.addEventListener("click", function() {
    let hex = "#"
    for (let i = 0; i < 6; i++){
        hex += hexColors[getRandomColor()]
    }
   document.body.style.backgroundColor = hex 
   changeColor.textContent = hex
})

function getRandomColor() {
    return Math.floor(Math.random()*hexColors.length)
}
