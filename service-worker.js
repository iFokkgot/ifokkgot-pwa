self.addEventListener('install', e => {
  e.waitUntil(caches.open('ifokkgot-v3').then(c => c.addAll([
    './','./index.html','./manifest.webmanifest','./service-worker.js',
    './icons/icon-192.png','./icons/icon-512.png'
  ])));
  self.skipWaiting();
});

self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));

self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});
