const CACHE_NAME = 'sportzfy-tv-v1';
const urlsToCache = [
  '/',
  '/index.html',
  'https://i.postimg.cc/R0xj2GXq/Picsart-26-06-03-23-41-20-367.jpg'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
