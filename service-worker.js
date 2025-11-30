const CACHE_NAME = 'obywats-cache-v1';
const urlsToCache = [
  '/obywats/',
  '/obywats/index.html',
  '/obywats/mObywatel 2.0_files/all.min.css',
  '/obywats/mobywatellogo.svg',
  // Dodaj inne pliki potrzebne offline
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
