const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

let btn = document.getElementById("btn");
let color = document.querySelector(".color");

btn.addEventListener("click", function () {
    const randNum = Math.floor(Math.random()*colors.length)
    console.log(randNum);
    document.body.style.backgroundColor = colors[randNum]
    color.textContent = colors[randNum]
});
