// Service Worker – caches all static assets for instant repeat loads
const CACHE_NAME = 'hra-v4';   // bumped version to avoid stale cache

const ASSETS_TO_CACHE = [
  '/HRS/',
  '/HRS/assets/css/style.css',
  '/HRS/assets/js/main.js',
  '/HRS/assets/images/hero accounting.avif',
  '/HRS/assets/images/hero analytics.avif',
  '/HRS/assets/images/hero dublin.avif',
  '/HRS/assets/images/banner dublin.jpeg',
  '/HRS/assets/images/medical professionals.avif',
  '/HRS/assets/images/about office.avif',
  '/HRS/assets/images/about team.avif',
  '/HRS/assets/images/avatar sarah.avif',
  '/HRS/assets/images/avatar dr murphy.avif',
  '/HRS/assets/images/avatar patrick.avif',
  '/HRS/assets/images/gallery startup.avif',
  '/HRS/assets/images/gallery tax.avif',
  '/HRS/assets/images/gallery team.avif',
  '/HRS/assets/images/gallery medical.avif'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(ASSETS_TO_CACHE))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(key => key !== CACHE_NAME)
          .map(key => caches.delete(key))
      )
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      const fetchPromise = fetch(event.request).then(networkResponse => {
        if (networkResponse && networkResponse.status === 200) {
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, responseToCache));
        }
        return networkResponse;
      });
      return cachedResponse || fetchPromise;
    })
  );
});
