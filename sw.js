const CACHE_NAME = 'pwa-task-list-v1';
const urlsToCache = [
    '/Menu-drawer/',
    '/Menu-drawer/index.html',
    '/Menu-drawer/style.css',
    '/Menu-drawer/manifest.json',
    
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                return response || fetch(event.request);
            })
    );
});
