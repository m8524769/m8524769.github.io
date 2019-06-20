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
      let messages = [
        "Fantastic to have you here!",
        "It's my blog and I wish you like it",
        "Have a good time anyway!!"
      ]
      let clickCount = 0
      greeting.onclick = () => {
        if (clickCount < messages.length) {
          greeting.innerHTML = messages[clickCount++]
        }
        if (clickCount == messages.length) {
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
      console.groupCollapsed('ServiceWorker registration successful.')
      console.log(registration)
      console.groupEnd()
    })
  }

  // Tips
  console.info(
    'Tips: You can actually use vim-like shortcuts to control this web page.'
  )
  console.group('Keybindings')
  console.log('j - Scroll down / Select below')
  console.log('k - Scroll up / Select above')
  console.log('h - Previous page')
  console.log('l - Next page')
  console.log('o - Open the selected post')
  console.log('u - Go back to the postlist')
  console.groupEnd()
  console.log('And in article pages, you can also press J/K to scroll faster.')

  console.log(
    'More shortcuts and features are comming soon!\n' +
    'If you have a better idea about this blog,\n' +
    'just tell me on https://github.com/m8524769/m8524769.github.io/issues.\n' +
    'I would really appreciate it!'
  )
}
