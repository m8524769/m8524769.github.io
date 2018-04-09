window.onload = () => {
    randomPicture()
    updateDescriptionByClick()
}

const randomPicture = () => {
    let srcPrefix = 'https://source.unsplash.com/random/'
    let resolution = `${screen.width}x${screen.height}`
    let baseUrl = srcPrefix.concat(resolution)
    document.getElementById("bg").src = srcPrefix.concat(resolution)

    caches.open('bg-next').then(cache => {
        caches.match(baseUrl).then(response => {
            console.log(response)
            cache.add(response.url)
        })
    })

    localStorage['visited'] = true
}

const updateDescriptionByClick = () => {
    let inners = [
        "Here is my personal blog",
        "Anyway..",
        "Have a good time!!",
    ]
    let description = document.getElementById("description")
    description.style.transition = "color 1s"
    let i = 0
    description.addEventListener("click", () => {
        if (i < inners.length) {
            description.innerHTML = inners[i++]
        }
        if (i == inners.length) {
            let bg = document.getElementById("bg")
            bg.style.animation = "fadein 4s"
            bg.style.opacity = 1
            document.getElementById("article").classList.add('light')
            description.style.color = "#eeeeee"
            description.style.transition = "opacity 1.5s"
            description.style.opacity = 0
        }
    })
}