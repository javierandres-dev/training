if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("./sw.js")
    .then((regi) => console.log("Service Worker - Success", regi))
    .catch((error) => console.warn("Fail service worker register", error));
} else {
  console.warn("Service Workers don't support");
}
