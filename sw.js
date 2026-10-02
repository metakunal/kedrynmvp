const CACHE_NAME = 'kedryn-static-v2';
const APP_SHELL = [
  './', './index.html', './manifest.webmanifest', './css/style.css',
  './js/app.js', './js/store.js', './js/ui.js',
  './js/data/catalog.js', './js/data/fixtures.js',
  './js/domain/dates.js', './js/domain/math.js', './js/domain/planner.js',
  './js/services/mock-api.js',
  './js/pages/landing.js', './js/pages/meals.js', './js/pages/orders.js',
  './js/pages/planner.js', './js/pages/tracker.js', './js/pages/partner.js', './js/pages/support.js',
  './assets/fallback-meal.svg', './assets/images/rajma.png',
  './assets/icons/kedryn-192.png', './assets/icons/kedryn-512.png', './assets/icons/kedryn-maskable-512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(APP_SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key.startsWith('kedryn-static-') && key !== CACHE_NAME).map(key => caches.delete(key)))).then(() => self.clients.claim()));
});

self.addEventListener('fetch', event => {
  const request = event.request;
  if (request.method !== 'GET' || new URL(request.url).origin !== self.location.origin) return;
  if (request.mode === 'navigate') {
    event.respondWith(fetch(request).then(response => {
      if (response.ok) caches.open(CACHE_NAME).then(cache => cache.put('./index.html', response.clone()));
      return response;
    }).catch(() => caches.match('./index.html')));
    return;
  }
  event.respondWith(caches.match(request).then(cached => cached || fetch(request).then(response => {
    if (response.ok) caches.open(CACHE_NAME).then(cache => cache.put(request, response.clone()));
    return response;
  })));
});
