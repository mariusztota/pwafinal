const staticDevBike = "dev-bike-site-v1";
const assets = [
  "/",
  "/index.html",
  "/style.css",
  "/js/main.js",
  "/images/bike-icon-192.png",
  "/images/bike-icon-512.png"
];

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDevCoffee).then(cache => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request);
    })
  );
});