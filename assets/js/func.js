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
            }
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
    let greeting = document.getElementById("greeting")
    greeting.style.transition = "color 1s"
    let i = 0
    greeting.addEventListener("click", () => {
        if (i < inners.length) {
            greeting.innerHTML = inners[i++]
        }
        if (i == inners.length) {
            let bg = document.getElementById("bg")
            bg.style.animation = "fadein 4s"
            bg.style.opacity = 1
            document.getElementById("article").classList.add('light')
            greeting.style.color = "#eeeeee"
            greeting.style.transition = "opacity 1.5s"
            greeting.style.opacity = 0
        }
    })

    // Register Service Worker
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('/sw.js').then(registration => {
                console.log('ServiceWorker registration successful: ', registration)
            }).catch(err => {
                console.log('ServiceWorker registration failed: ', err)
            })
        })
    }

    localStorage['visited'] = true
}

if (screen.width > 480) {
    window.init()
}
