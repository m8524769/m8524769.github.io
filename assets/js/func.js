window.onload = () => {
    randomPicture()
    updateDescriptionByClick()
}

const randomPicture = () => {
    let srcPrefix = "https://source.unsplash.com/random/"
    let resolution = `${screen.width}x${screen.height}`
    document.getElementById("bg").src = srcPrefix.concat(resolution)

    caches.open('bg-next').then(cache => {
        cache.add(srcPrefix.concat(resolution))
    })

    localStorage["visited"] = true
}

const updateDescriptionByClick = () => {
    let inners = [
        "Here is my personal blog",
        "Anyway..",
        "Have a good time!!",
    ]
    let description = document.getElementById("description")
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
        }
    })
}