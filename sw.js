/* =============================================================================
   ELITE CLASSES — Progressive Web App (PWA) Service Worker
   Provides instant offline asset caching and seamless network resilience
   ============================================================================= */

const CACHE_NAME = 'elite-classes-v1.0.0';

// Core assets to pre-cache for 100% offline app loading
const PRECACHE_ASSETS = [
    './',
    './index.html',
    './admin_home.html',
    './student_home.html',
    './staff_home.html',
    './testseries_user_home.html',
    './manifest.json',
    './css/styles.css',
    './eliteLogo_crest.png',
    './eliteLogo.png',
    './favicon.ico',
    './icon-192.png',
    './icon-512.png',
    './enums/classes.js',
    './enums/subjects.js',
    './js/app.js',
    './js/students.js',
    './js/finances.js',
    './js/teachers.js',
    './js/staff.js',
    './js/admins.js',
    './js/attendance.js',
    './js/adminMarks.js',
    './js/studentAnalytics.js',
    './js/adminTestSeries.js',
    './js/subscribersAdmin.js',
    './js/staffHome.js',
    './supabase/config.js',
    './supabase/api.js',
    './modules/testseries/cbtPlayer.js',
    './modules/studentView/studentView.js',
    './modules/notices/notices.js'
];

// Install Event: Pre-cache core shell
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            console.log('[SW] Pre-caching Elite Classes shell assets...');
            return cache.addAll(PRECACHE_ASSETS).catch((err) => {
                console.warn('[SW] Non-fatal precache item failed:', err);
            });
        }).then(() => self.skipWaiting())
    );
});

// Activate Event: Clean old caches
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((keys) => {
            return Promise.all(
                keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
            );
        }).then(() => self.clients.claim())
    );
});

// Fetch Event: Cache-First for static assets, Network-First for API calls
self.addEventListener('fetch', (event) => {
    const requestUrl = new URL(event.request.url);

    // Never intercept Supabase cloud database queries (Network only)
    if (requestUrl.hostname.includes('supabase.co')) {
        return;
    }

    // Static assets & portal pages: Cache-first with background network fallback
    event.respondWith(
        caches.match(event.request).then((cachedResponse) => {
            if (cachedResponse) {
                // Fetch fresh copy in background to keep cache up to date
                fetch(event.request).then((networkResponse) => {
                    if (networkResponse && networkResponse.status === 200) {
                        caches.open(CACHE_NAME).then((cache) => {
                            cache.put(event.request, networkResponse);
                        });
                    }
                }).catch(() => {});
                return cachedResponse;
            }

            // Fallback to network
            return fetch(event.request).then((response) => {
                if (!response || response.status !== 200 || response.type !== 'basic') {
                    return response;
                }
                const responseToCache = response.clone();
                caches.open(CACHE_NAME).then((cache) => {
                    cache.put(event.request, responseToCache);
                });
                return response;
            }).catch(() => {
                // If offline and request is for an HTML page, serve cached index.html
                if (event.request.headers.get('accept')?.includes('text/html')) {
                    return caches.match('./index.html');
                }
            });
        })
    );
});
