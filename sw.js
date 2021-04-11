const VERSION = 'v1'

self.addEventListener('install', event => {
    event.waitUntil(precache());
});

self.addEventListener('fetch', event => {
    const request = event.request;
    if (request.method !== "GET") {
        return;
    }


    event.respondWith(cachedResponse(request));

})

async function precache() {
    const cache = await caches.open(VERSION);
    return cache.addAll([
        '/',
        '/index.html',
        '/js/index.js',
        '/js/MediaPlayer.js',
        '/js/plugins/AutoPlay.js',
        '/js/plugins/AutoPause.js',
        '/css/style.css',
        '/video.mp4',
    ]);
}

async function cachedResponse(request) {
    const cache = await caches.open(VERSION);
    const response = await cache.match(request);
    debugger
    return response || fetch(request);
}