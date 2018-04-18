let CACHE_NAME = 'yk-blog'

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            return cache.addAll([
                '/',
                '/assets/css/main.css',
                '/assets/js/func.js',
                '/assets/js/particles.js'
            ])
        })
    )
})

self.addEventListener('fetch', event => {
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
})

self.addEventListener('activate', event => {
    return event.waitUntil(
        caches.keys().then(keys => {
            return Promise.all(
                keys.map(k => {
                    return caches.delete(k)
                })
            )
        })
    )
})
