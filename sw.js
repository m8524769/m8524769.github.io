/**
 * sw.js
 */

let CACHE_NAME = 'yk-blog'

self.oninstall = event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll([
      '/',
      '/assets/css/main.css',
      '/assets/js/func.js',
      '/assets/js/particles.js',
      '/assets/js/anchor.js'
    ]))
  )
}

self.onfetch = event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      if (response && response.type == 'basic') {
        return response
      }
      return fetch(event.request).then(response => {
        if (response.type == 'basic') {
          return caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, response.clone())
            return response
          })
        } else {
          return response
        }
      })
    })
  )
}

self.onactivate = event => {
  return event.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.map(key => {
        if (key == CACHE_NAME) {
          return caches.delete(key)
        } else {
          return Promise.resolve()
        }
      })
    ))
  )
}
