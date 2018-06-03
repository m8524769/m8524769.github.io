/**
 * sw.js
 */

let CACHE_NAME = 'yk-blog'

self.oninstall = event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      cache.addAll([
        '/assets/js/particles.js',
        '/assets/js/anchor.js'
      ])
      return cache.addAll([
        '/',
        '/assets/css/main.css',
        '/assets/js/func.js'
      ])
    })
  )
}

self.onfetch = event => {
  event.respondWith(
    caches.open(CACHE_NAME).then(cache => {
      return cache.match(event.request).then(response => {
        let fetchPromise = fetch(event.request).then(networkResponse => {
          if (networkResponse.ok && networkResponse.type == 'basic') {
            cache.put(event.request, networkResponse.clone())
          }
          return networkResponse
        }).catch(() => cache.match('offline.html'))
        return response || fetchPromise
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
