const Container = document.querySelector(".container")
const thanksContainer = document.querySelector(".thank-you")
const submitButton = document.getElementById("submit")
const rating = document.getElementById("rate")
const rates = document.querySelectorAll(".button")

submitButton.addEventListener("click", () => {
    thanksContainer.classList.remove("hidden")
    Container.style.display = "none"
})

rates.forEach((rate)=> {
    rate.addEventListener("click", () => {
        rating.innerHTML= rate.innerHTML
    })
})
