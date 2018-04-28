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

const vimLike = () => {
  let home = document.getElementById('logo')
  let postlist = document.getElementById('postlist')
  let sections = document.getElementsByName('section')
  let article = document.getElementById('article')

  if (postlist) { // In post list
    let i = -1
    window.addEventListener('keypress', event => {
      if (event.key == 'j' && i < sections.length - 1) {
        sections[++i].focus()
      } else if (event.key == 'k') {
        i = (i == 0 || i == -1) ? 1 : i
        sections[--i].focus()
      } else if (event.key == 'G') {
        i = sections.length - 1
        sections[i].focus()
      } else if (event.key == 'o') {
        sections[i].click()
      } else if (event.key == 'u') {
        home.click()
      }
    })

    let previous = document.getElementById('previous')
    let next = document.getElementById('next')
    window.addEventListener('keydown', event => {
      if (event.key == 'h' && previous) {
        previous.focus()
      }
      if (event.key == 'l' && next) {
        next.focus()
      }
    })
    window.addEventListener('keyup', event => {
      if (event.key == 'h' && previous) {
        previous.click()
      }
      if (event.key == 'l' && next) {
        next.click()
      }
    })
  } else { // In article page
    window.addEventListener('keypress', event => {
      if (event.key == 'j') {
        scrollBy(0, 27)
      } else if (event.key == 'k') {
        scrollBy(0, -27)
      } else if (event.key == 'J') {
        scrollBy({
          top: 250,
          behavior: "smooth"
        })
      } else if (event.key == 'K') {
        scrollBy({
          top: -250,
          behavior: "smooth"
        })
      } else if (event.key == 'G') {
        scroll({
          top: article.offsetHeight,
          behavior: "smooth"
        })
      } else if (event.key == 'u') {
        home.click()
      }
    })
  }
}

const loadComment = () => {
  _hcwp = window._hcwp || []
  _hcwp.push({ widget: "Stream", widget_id: 104126 })
  if ("HC_LOAD_INIT" in window)
    return;
  HC_LOAD_INIT = true
  let hcc = document.createElement("script")
  hcc.src = "https://w.hypercomments.com/widget/hc/104126/en/widget.js"
  hcc.async = true
  let s = document.getElementsByTagName("script")[0]
  s.parentNode.insertBefore(hcc, s.nextSibling)
}

const lightUp = () => {
  let bg = document.getElementById('bg')
  bg.style.animation = "fadein 4s"
  bg.style.opacity = 1
  let article = document.getElementById('article')
  if (article) {
    article.classList.add('light')
  }
  greeting.style.color = "#eeeeee"
  greeting.style.transition = "opacity 1.5s"
  greeting.style.opacity = 0
}

if (screen.width > 480) {
  randomBackground()
  vimLike()
  loadComment()
  let inners = [
    "It's my personal blog",
    "Anyway..",
    "Have a good time!!"
  ]
  let greeting = document.getElementById('greeting')
  greeting.style.transition = "color 1s"
  let i = 0
  if (sessionStorage.getItem('light')) {
    lightUp()
  } else {
    greeting.addEventListener('click', () => {
      if (i < inners.length) {
        greeting.innerHTML = inners[i++]
      }
      if (i == inners.length) {
        lightUp()
        sessionStorage.setItem('light', true)
      }
    })
  }
}

// Register Service Worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').then(registration => {
      console.log('ServiceWorker registration successful.')
    }).catch(error => {
      console.log('ServiceWorker registration failed: ', error)
    })
  })
}

// Tips
console.log(
  'If you are a loyal vimer, tell you a good news!\n' +
  'You can actually use vim-like shortcuts to control this web page.\n\n' +
  'j - Scroll down / Select below\n' +
  'k - Scroll up / Select above\n' +
  'h - Previous page\n' +
  'l - Next page\n' +
  'o - Open the selected post\n' +
  'u - Up to the home URL\n\n' +
  'And in article pages, you can also press J/K to scroll faster.\n' +
  'More shortcuts and features are comming soon!\n' +
  'If you have a better idea about this blog,\n' +
  'just tell me on https://github.com/m8524769/m8524769.github.io/issues.\n' +
  'I would really appreciate it!\n' +
  'Have a good day! :)'
)