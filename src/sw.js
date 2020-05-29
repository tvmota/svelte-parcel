const staticCacheName = 'site-static-v1';
const assets = [
  '/',
  '/index.html',
  '/main.af46ece4.css',
  '/main.1f19ae8e.css',
  'Detail.432d1ea4.css',
  'Home.9a4dface.css',
  '/main.1f19ae8e.js',
  'Home.9a4dface.js',
  'Detail.432d1ea4.js',
];// install event
self.addEventListener('install', evt => {
  evt.waitUntil(
    caches.open(staticCacheName).then((cache) => {
      console.log('caching shell assets');
      cache.addAll(assets);
    })
  );
});// activate event
self.addEventListener('activate', evt => {
  evt.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(keys
        .filter(key => key !== staticCacheName)
        .map(key => caches.delete(key))
      );
    })
  );
});// fetch event
self.addEventListener('fetch', evt => {
  evt.respondWith(
    caches.match(evt.request).then(cacheRes => {
      return cacheRes || fetch(evt.request);
    })
  );
});
