const CACHE_NAME = 'obywats-cache-v1';
const urlsToCache = [
  './',
  './index.html',
  // jeśli masz inne pliki — np. CSS, JS, obrazy — dodaj je tutaj
  // './styles.css',
  // './script.js',
  // './img/logo.png'
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
