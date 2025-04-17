
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("quiz-cache-v1").then(cache => {
      return cache.addAll([
        "/index.html",
        "/manifest.json",
        "/quizzes/quiz_programacion.html",
        "/quizzes/quiz_sistemas_distribuidos.html",
        "/quizzes/quiz_ingenieria_software.html"
      ]);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
