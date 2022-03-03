let Header = document.querySelector(".header");
let HeaderIcon = document.querySelector(".header .header-icon")
let HeaderUl = document.querySelector(".header ul")
let landingSection = document.querySelector(".landing")
let ButtonUp = document.querySelector("button.up")


window.onscroll = function () {
    if (window.scrollY >= 1000) {
        Header.classList.add("fixed")
    } else {
        Header.classList.remove("fixed")
    }
    if (window.scrollY >= 1000) {
        ButtonUp.classList.add("active")
    } else {
        ButtonUp.classList.remove("active")
    }
}

ButtonUp.onclick = function () {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
}

HeaderIcon.addEventListener("click" , ()=> {
    HeaderUl.classList.toggle("open")
})

let ColorArrey = ["red" , "blue" , "yellow" , "#ff253a" , "#fb6816"];
let RandomNumbder = Math.floor(Math.random() * ColorArrey.length)
console.log(RandomNumbder)

setInterval(function () {
    let RandomNumbder = Math.floor(Math.random() * ColorArrey.length)
    landingSection.style.backgroundColor = ""+ ColorArrey[RandomNumbder] +""
}, 8000)
