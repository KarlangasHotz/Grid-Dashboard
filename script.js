let newBtnDOM = document.querySelector(".new");
const uploadBtn = document.querySelector(".upload");
const shareBtn = document.querySelector(".share");

console.log(newBtnDOM)
newBtnDOM.addEventListener("click", function() {

    newBtnDOM.style.backgroundColor = "black";
})

let shareButton = document.querySelectorAll(".project-img")

shareButton.forEach(e => {
    e.addEventListener("click", function() {
    alert("You would have shared this project with the world")
    })
})
