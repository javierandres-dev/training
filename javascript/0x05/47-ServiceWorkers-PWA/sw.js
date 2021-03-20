// set cache
const nameCache = "apv-v1";
const filesCache = [
  "./",
  "./index.html",
  "./css/bootstrap.css",
  "./css/styles.css",
  "./js/app.js",
  "./js/apv.js",
];
// when service worker is installed
self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(nameCache).then((cache) => {
      cache.addAll(filesCache);
      console.info("caching...");
    })
  );
  console.log("Service worker - Installed");
  console.log(e);
});
// activate service worker
self.addEventListener("activate", (e) => {
  console.log("Service worker - Activated");
  console.log(e);
});
// fetch event listener to download static file
self.addEventListener("fetch", (e) => {
  e.respondWith(
    (async function () {
      const cachedResponse = await caches.match(e.request);
      if (cachedResponse) {
        console.log("Service worker - CachedResponse");
        return cachedResponse;
      }
      return fetch(e.request);
    })()
    /*
    caches.match(e.request).then((respCache) => {
      return respCache;
    })
    */
  );
  console.log("Service worker - Fetch event listener ", e);
});
