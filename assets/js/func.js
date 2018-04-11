const randomBackground = () => {
    let bgImg = document.getElementById('bg')
    let baseURL = 'https://source.unsplash.com/random/'
    let resolution = `${screen.width}x${screen.height}`
    let imageURL = baseURL.concat(resolution)

    caches.match(imageURL).then(response => {
        bgImg.src = response.url
    }).catch(() => {
        fetch(imageURL).then(response => {
            if (response.ok) {
                bgImg.src = response.url
                caches.open('bg-next').then(cache => {
                    cache.put(imageURL, response)
                })
            } else {
                console.log('Response was not ok.')
            }
        }).catch(error => {
            console.log(error.message)
        })
    })

    fetch(imageURL).then(response => {
        caches.open('bg-next').then(cache => {
            cache.put(imageURL, response)
        })
    })
}

window.init = () => {
    randomBackground()
    let inners = [
        "It's my personal blog",
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
    localStorage['visited'] = true
}

window.init()
