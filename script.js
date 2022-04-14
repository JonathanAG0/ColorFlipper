const colors = ["Green", "Red", "Blue", "Yellow"]
const btn = document.getElementById("click-me")
let changeColor = document.querySelector("#color")

btn.addEventListener("click", function () {
   const randomColor = getRandomColor()
 
   document.body.style.backgroundColor = colors[randomColor]
   changeColor.textContent = colors[randomColor]
})

function getRandomColor() {
    return Math.floor(Math.random()*colors.length)
}



