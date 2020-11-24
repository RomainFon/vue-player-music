const cacheName = 'cache1.0';

self.addEventListener('install', (event) => {
    console.log('Service Worker installé');
    event.waitUntil(
        caches.open(cacheName).then((cache) => {
            return cache.addAll(
                [
                    '/',
                    '/img/Gambi-Macintosh.42f2f098.jpg',
                    '/media/Gambi-Macintosh.823683b7.mp3',
                    '/img/Laylow-Plug.771a0840.jpg',
                    '/media/Laylow-Plug.e945671e.mp3',
                    '/img/Lefa-Maniaque.63b44d5a.png',
                    '/media/Lefa-Maniaque.566e584d.mp3',
                    '/img/Lorenzo-JeVousDetesteTous.9e6f1e61.jpg',
                    '/media/Lorenzo-JeVousDetesteTous.d9a33485.mp3',
                    '/img/Oboy-Cabeza.fa3e0e7b.jpg',
                    '/media/Oboy-Cabeza.caa2caa2.mp3',
                    '/bundle.js',
                    '/style.css'
                ]
            );
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});