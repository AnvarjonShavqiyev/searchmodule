const searchItem = document.querySelector("#search")
const searchBtn = document.querySelector("#btn")
const storiesAria = document.querySelector(".stories")
const form = document.querySelector("#form")

let story = JSON.parse(localStorage.getItem('story')) || []

form.addEventListener("submit", () => {
    story.unshift(searchItem.value)    
    localStorage.setItem("story",JSON.stringify(story))
})

searchItem.addEventListener("input",() => {
    let showStory = JSON.parse(localStorage.getItem('story'))
    storiesAria.innerHTML = ''
    showStory.forEach(element => {
        if(element.includes(searchItem.value)){
            let p = document.createElement('p')
            p.innerHTML = element
            storiesAria.appendChild(p)
            storiesAria.style = "opacity: 1;transition: 0.9s;"
        }
    });
})
searchItem.addEventListener("blur",() => {
    storiesAria.style = "opacity: 0;transition: 0.9s;"
})
