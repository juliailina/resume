'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "8184b54e4f219055e979a850ea4de12d",
"assets/assets/files/YuliaFlutterCV.pdf": "31a4eb7c08e36b14784b1b17a9527c51",
"assets/assets/icons/appstore.png": "a2110cba78d3c421a0ec48e82c0a5f42",
"assets/assets/icons/github.png": "b8337c5817e79987bcc09ef48cdd038d",
"assets/assets/icons/githubproject.png": "f2c155cd487b8337c727eec4767f08c9",
"assets/assets/icons/googleplay.png": "3a82e2bdf22f20c3ff240e95ed1f86a6",
"assets/assets/icons/linkedin.png": "1525feca086faef0b98d7063c4c4d0f2",
"assets/assets/icons/telegram.png": "7b696c0ae562f07d43f82059662d44c6",
"assets/assets/images/avatar.png": "0ffc64e863a14c1e6ff8672323309e49",
"assets/assets/images/cvwebsite.png": "e833c6ef8fe3fb77e5d9ff33bdc9c9e0",
"assets/assets/images/destresso.gif": "b8928bbc054b94df0a65fa599271b966",
"assets/assets/images/frame_laptop.png": "39b205032e468ac52c91c4b2ee537ef0",
"assets/assets/images/frame_phone.png": "87c3f221f045205e5a34a74a4fe30b8c",
"assets/assets/images/merce.gif": "1830f1da8063e538f523d3a76c274120",
"assets/assets/images/mockups.gif": "ffbf441e9a32d610a0cec9c4b7ff3ba5",
"assets/assets/images/mystory.png": "9d227a70cf80f908c19d3773ff69e91d",
"assets/FontManifest.json": "0aa81cc6ac1f8fb2fdfc23c91848b2dd",
"assets/fonts/JetBrainsMono-Bold.ttf": "de2ce9b374d438453112214b81e41849",
"assets/fonts/JetBrainsMono-Italic.ttf": "342fa9d499e506144959ab12673ae0c4",
"assets/fonts/JetBrainsMono-Regular.ttf": "a7151c5349c1aa20beefb3c5430c3a79",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "d425203a614a4a4908e8499dfb58024b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "f07373a1a7c175a377b4f00736e11c53",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"icons/Icon-192.png": "4a070e0fdf94f8b43c330a57d39218d2",
"icons/Icon-512.png": "11fcfcfbf784041882a6d767372aefc1",
"icons/Icon-maskable-192.png": "8953729efbf9ea161dbe0ead52352a0f",
"icons/Icon-maskable-512.png": "e3beda64dc3d313c595493d675920e9f",
"index.html": "bf0d24cad05efb12d251ae6cbdc27203",
"/": "bf0d24cad05efb12d251ae6cbdc27203",
"main.dart.js": "c0ed6bedcd5428ee2f39eb6bab4e97f9",
"manifest.json": "fb729907df20e5fb648be0dcdd0b608e",
"version.json": "5fc10240b73452c6a64964c44206397c"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
