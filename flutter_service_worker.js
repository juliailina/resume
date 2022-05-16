'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "62416aef8a24a3fb7321ddb582199245",
".git/config": "c264feba2746e045bd2713b8785bb5f3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "c734770c59a1383f218477080f3bf82c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "8f666761e587fcd6138c6640831db12f",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "189f7c9f9c791769a44e045f236586bc",
".git/logs/refs/heads/main": "189f7c9f9c791769a44e045f236586bc",
".git/logs/refs/remotes/origin/HEAD": "db46ef4064b407e98af869abf8d89300",
".git/logs/refs/remotes/origin/main": "555d0d793c067fe4b3cc26c079e9eef4",
".git/objects/10/a52a2e45722b4376ba6ce30975493d528fc4da": "f918c566682de0fd479444925d3b1be6",
".git/objects/14/f814b76d5701f3587dbee1b78c1e5928bc45a3": "361859e311faddfdf000fdbb01fd598f",
".git/objects/16/3a4069a00e3f4e61b74ac401b70d26294be685": "4ece3b4a5791ccdf6d87233c9542582a",
".git/objects/1e/71f36e1f03a6b2a88e2ab36a006ce3a295eec0": "42fc765c766a5b086de8474f6ba81d07",
".git/objects/26/72ee2f9374cef618a45b0bcf573b594b0f1add": "24bd12d6780d93600cb95cc647e14a59",
".git/objects/50/662c6f06942ad7dc03100fa8ac2fc3adfcde3b": "b24c710b12babe81259c142b5137152b",
".git/objects/54/bc8c948fd268b11c91c0a88bc417ff4e9552b2": "9d9c419b9139dd4f2e7d6404f01850b7",
".git/objects/60/c61d67ec1ba22270ac916fbe053b82bec071a2": "ac811bfe0bc3411f71cf985660b76c92",
".git/objects/6b/3b40e7c2179894d41c6000f27c648ac00b9e33": "d743fb1368587b82b3a7acbeee3c2720",
".git/objects/6b/d3c7392957e76b9b3806aedd2a804685512e61": "06d5215f4382efd198313c6f4bc6e4f9",
".git/objects/74/83634302c3cb3388b3d6f7a8c8d789922a70fe": "4f4e28499f186a6d8a71172d3083c8be",
".git/objects/74/90a387359e4759de46cbc7b033c722ae96fec3": "2254f56c6651bb40514639852ada74fd",
".git/objects/7d/b17da3e7fe4c32cae43c76abcd6836909bb361": "e8cf4a5b5e89afcbee8c667d03f97a86",
".git/objects/8f/5ad90707e0c8ba0dd0d4144511e49030b8b6cf": "382171b4b3aa2fa006af9448ca1e92be",
".git/objects/96/9011cb235310886b6265bdc383c35721fd238c": "1ec0dcac2693046e9b87d172af265bb2",
".git/objects/a1/f4054b1324966467acaf352899f2d481d2d06c": "2e6c5b4e043b9fe3711a6ba7535ca969",
".git/objects/c2/dfa5a24c4f65a72a4556da81c773e677def772": "56c9bc09d6f1ed631a1280dfdfb6bd18",
".git/objects/c6/23c500a1f125cbc18f0c21c7912f8bf05cb026": "dd9344c6088386249ce816542ded140a",
".git/objects/d3/5d21aaae807a3c53c501d3b4ed86d5879a187c": "c2b39250aa9151cbb35ca53fcec232f4",
".git/objects/ec/28e71e5d46b64761a0b03e2a67ddcc10664723": "f83f4df098b0ee490226f24d500c728c",
".git/objects/fa/67a710811f969eb152a8a9cb97fb0cb6273d59": "489bb378ea209fa8282329126b353ef6",
".git/objects/pack/pack-67a75265ceb91d1e6b5d41ff7af175337545f959.idx": "23c729f097dbc2961f29cd6e8e906b4e",
".git/objects/pack/pack-67a75265ceb91d1e6b5d41ff7af175337545f959.pack": "1f1a4869d5f464633f2507e0792a75a3",
".git/ORIG_HEAD": "dee425a0f6c84e493a75986f0c196e84",
".git/packed-refs": "bd9efed8296b2140c6a20c84ebe5abd4",
".git/refs/heads/main": "9bd6e4a106e2924baccbac76d50dc607",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "9bd6e4a106e2924baccbac76d50dc607",
"assets/AssetManifest.json": "82e4d8b20702a7b4983140403fa82b42",
"assets/assets/files/YuliaFlutterCV.pdf": "f40850c44d2ca99ffdc4886b16298b1c",
"assets/assets/icons/appstore.png": "a2110cba78d3c421a0ec48e82c0a5f42",
"assets/assets/icons/github.png": "b8337c5817e79987bcc09ef48cdd038d",
"assets/assets/icons/githubproject.png": "f2c155cd487b8337c727eec4767f08c9",
"assets/assets/icons/googleplay.png": "3a82e2bdf22f20c3ff240e95ed1f86a6",
"assets/assets/icons/linkedin.png": "1525feca086faef0b98d7063c4c4d0f2",
"assets/assets/icons/telegram.png": "7b696c0ae562f07d43f82059662d44c6",
"assets/assets/images/avatar.png": "0ffc64e863a14c1e6ff8672323309e49",
"assets/assets/images/cvwebsite.png": "fb2d06ff11bb52389b521ae387d7b20d",
"assets/assets/images/destresso.gif": "b8928bbc054b94df0a65fa599271b966",
"assets/assets/images/mockups.gif": "ffbf441e9a32d610a0cec9c4b7ff3ba5",
"assets/assets/images/mystory.png": "9d227a70cf80f908c19d3773ff69e91d",
"assets/FontManifest.json": "0aa81cc6ac1f8fb2fdfc23c91848b2dd",
"assets/fonts/JetBrainsMono-Bold.ttf": "de2ce9b374d438453112214b81e41849",
"assets/fonts/JetBrainsMono-Italic.ttf": "342fa9d499e506144959ab12673ae0c4",
"assets/fonts/JetBrainsMono-Regular.ttf": "a7151c5349c1aa20beefb3c5430c3a79",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "41bd57dd5fd8b7a932df4babe6933122",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"CNAME": "3578138d450129937ec9cd0c76579fee",
"favicon.png": "f07373a1a7c175a377b4f00736e11c53",
"flutter.js": "0816e65a103ba8ba51b174eeeeb2cb67",
"icons/Icon-192.png": "4a070e0fdf94f8b43c330a57d39218d2",
"icons/Icon-512.png": "11fcfcfbf784041882a6d767372aefc1",
"icons/Icon-maskable-192.png": "8953729efbf9ea161dbe0ead52352a0f",
"icons/Icon-maskable-512.png": "e3beda64dc3d313c595493d675920e9f",
"index.html": "f69a4728507ebe0c3caadfd92c37c4f7",
"/": "f69a4728507ebe0c3caadfd92c37c4f7",
"main.dart.js": "68575b1258f8a4cfba4b16786a10a1c7",
"manifest.json": "fb729907df20e5fb648be0dcdd0b608e",
"README.md": "58c60e9a5e04754e15bd2f96e5e3f64b",
"version.json": "5fc10240b73452c6a64964c44206397c"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
