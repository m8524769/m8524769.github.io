const randomBackground = () => {
  let bgImg = document.getElementById('bg')
  let keyword = localStorage.unsplash_keyword || ''
  let imageURL = `https://source.unsplash.com/${screen.width}x${screen.height}?${keyword}`

  caches.match(imageURL).then(response => {
    bgImg.src = response.url
  }).catch(() => {
    fetch(imageURL).then(response => {
      if (response.ok) {
        bgImg.src = response.url
      }
    })
  })

  fetch(imageURL).then(response => {
    if (response.ok) {
      let imgNext = new Image()
      imgNext.src = response.url
      imgNext.onload = () => {
        caches.open('bg-next').then(cache => {
          cache.put(imageURL, response)
        })
      }
    }
  })
}

const vimLike = () => {
  let postlist = document.querySelectorAll('#postlist > a.section')
  let article = document.getElementById('article')
  if (postlist.length) { // In post list
    let i = -1
    window.addEventListener('keypress', event => {
      if (event.key == 'j' && i < postlist.length - 1) {
        postlist[++i].focus()
      } else if (event.key == 'k') {
        i = (i == 0 || i == -1) ? 1 : i
        postlist[--i].focus()
      } else if (event.key == 'o') {
        postlist[i].click()
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
  } else if (article) { // In article page
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
        history.back()
      }
    })
  }
}

const lightUp = () => {
  let bg = document.getElementById('bg')
  bg.style.animation = "4s fadein forwards"
  let header = document.getElementsByTagName('header')[0]
  header.style.transition = "background-color 2s"
  header.style.backgroundColor = "#35353588"
  let article = document.getElementById('article')
  if (article) {
    article.classList.add('light')
  }
  greeting.style.opacity = 0
  greeting.style.cursor = "default"
}

window.onload = () => {
  if (screen.width > 480) {
    randomBackground()
    let greeting = document.getElementById('greeting')
    greeting.style.transition = "color 1s"
    if (sessionStorage.getItem('light')) {
      lightUp()
    } else {
      let inners = [
        "Fantastic to have you here!",
        "It's my blog and I wish you like it",
        "Have a good time anyway!!"
      ]
      let i = 0
      greeting.onclick = () => {
        if (i < inners.length) {
          greeting.innerHTML = inners[i++]
        }
        if (i == inners.length) {
          greeting.style.transition = "opacity 2s"
          greeting.style.color = "#eeeeee"
          lightUp()
          sessionStorage.setItem('light', true)
        }
      }
    }
    particlesJS('particles-js')
    vimLike()
  }

  // Register Service Worker
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').then(registration => {
      console.log('ServiceWorker registration successful.')
    })
  }

  // Tips
  console.log(
    '</ Little Secret >\n' +
    'You can actually use vim-like shortcuts to control this web page.\n\n' +
    'j - Scroll down / Select below\n' +
    'k - Scroll up / Select above\n' +
    'h - Previous page\n' +
    'l - Next page\n' +
    'o - Open the selected post\n' +
    'u - Go back to the postlist\n\n' +
    'And in article pages, you can also press J/K to scroll faster.\n' +
    'More shortcuts and features are comming soon!\n' +
    'If you have a better idea about this blog,\n' +
    'just tell me on https://github.com/m8524769/m8524769.github.io/issues.\n' +
    'I would really appreciate it!\n' +
    'Have a good day! :)'
  )
}