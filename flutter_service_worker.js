'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "1c3515d2cddf548bd30700fd17ff97c6",
"splash/img/light-2x.png": "d5f8c0dea4aa3d30ed20aa9579f3d05c",
"splash/img/dark-4x.png": "4e1becca8d826ff1c4302bae38cd0e3c",
"splash/img/light-3x.png": "7dd3d624e8312ccfb105229c536580ed",
"splash/img/dark-3x.png": "f1cd5bcd7450dbfe05bc371cfbc86630",
"splash/img/light-4x.png": "5f934904ed1c4bcfc039f6ed0d81aa14",
"splash/img/dark-2x.png": "9be813ae4ef06a84ffeec331c1efc112",
"splash/img/dark-1x.png": "a1137d844660ca3f429dda1d5b78e5bd",
"splash/img/light-1x.png": "3b90eab4f651545ad564e6c3ff261dd9",
"splash/splash.js": "123c400b58bea74c1305ca3ac966748d",
"splash/style.css": "9eb259a95c4a865cdebf37b1816009b6",
"index.html": "6dba6b6f32f70394b8befb23f1ccc334",
"/": "6dba6b6f32f70394b8befb23f1ccc334",
"main.dart.js": "e45d69973803707436940f41133c78e4",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"favicon.png": "0953d194e0895a26e3c623345e1ef4f6",
"icons/Icon-192.png": "95c51904df72706fe37008d2d5fefb28",
"icons/Icon-maskable-192.png": "95c51904df72706fe37008d2d5fefb28",
"icons/Icon-maskable-512.png": "5f934904ed1c4bcfc039f6ed0d81aa14",
"icons/Icon-512.png": "5f934904ed1c4bcfc039f6ed0d81aa14",
"manifest.json": "6a5d0cb35f9b8581c8553bb1994bec13",
"assets/AssetManifest.json": "bbf2f0f6d3f37c472b15fec6bac11ff4",
"assets/NOTICES": "71f997f849ef940b64aa38fdff7ab1f3",
"assets/FontManifest.json": "775b57bbb64604d6e77c5225eb49e4f7",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_vector_icons/fonts/Fontisto.ttf": "b49ae8ab2dbccb02c4d11caaacf09eab",
"assets/packages/flutter_vector_icons/fonts/Octicons.ttf": "f7c53c47a66934504fcbc7cc164895a7",
"assets/packages/flutter_vector_icons/fonts/Feather.ttf": "a76d309774d33d9856f650bed4292a23",
"assets/packages/flutter_vector_icons/fonts/Entypo.ttf": "31b5ffea3daddc69dd01a1f3d6cf63c5",
"assets/packages/flutter_vector_icons/fonts/FontAwesome5_Brands.ttf": "3b89dd103490708d19a95adcae52210e",
"assets/packages/flutter_vector_icons/fonts/MaterialCommunityIcons.ttf": "b62641afc9ab487008e996a5c5865e56",
"assets/packages/flutter_vector_icons/fonts/AntDesign.ttf": "3a2ba31570920eeb9b1d217cabe58315",
"assets/packages/flutter_vector_icons/fonts/Foundation.ttf": "e20945d7c929279ef7a6f1db184a4470",
"assets/packages/flutter_vector_icons/fonts/Ionicons.ttf": "b3263095df30cb7db78c613e73f9499a",
"assets/packages/flutter_vector_icons/fonts/FontAwesome5_Solid.ttf": "605ed7926cf39a2ad5ec2d1f9d391d3d",
"assets/packages/flutter_vector_icons/fonts/FontAwesome5_Regular.ttf": "1f77739ca9ff2188b539c36f30ffa2be",
"assets/packages/flutter_vector_icons/fonts/FontAwesome.ttf": "b06871f281fee6b241d60582ae9369b9",
"assets/packages/flutter_vector_icons/fonts/Zocial.ttf": "1681f34aaca71b8dfb70756bca331eb2",
"assets/packages/flutter_vector_icons/fonts/EvilIcons.ttf": "140c53a7643ea949007aa9a282153849",
"assets/packages/flutter_vector_icons/fonts/SimpleLineIcons.ttf": "d2285965fe34b05465047401b8595dd0",
"assets/packages/flutter_vector_icons/fonts/MaterialIcons.ttf": "8ef52a15e44481b41e7db3c7eaf9bb83",
"assets/shaders/ink_sparkle.frag": "eb12a3115abc9285599f8951f4f28332",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/svg/vscode.svg": "e60fcd0974402a2aaf59f3835776c5ea",
"assets/assets/svg/figma.svg": "8d58454958f5faf327f45e41a0dc79d7",
"assets/assets/svg/javascript.svg": "a8ea6b8069efbfbbb591173e5f461521",
"assets/assets/svg/firebase.svg": "17ec4126ca0b3bf2f53167e187c83405",
"assets/assets/svg/java.svg": "37dc7dfc007d8941a8551c93a92d51c4",
"assets/assets/svg/flutter.svg": "ff0d61cfa9369d87db3fefdf91822ec5",
"assets/assets/svg/python.svg": "f90bce9d53117513e3f047a4a202dd7e",
"assets/assets/svg/git.svg": "5620947d1b2ff4a61c64d94e6c0f2b9a",
"assets/assets/svg/xd.svg": "cb171513e608ad59ae46132f62a4fe16",
"assets/assets/svg/dart.svg": "6bf656c79f6972b6f17795f12a655f9a",
"assets/assets/svg/css.svg": "aaf1d4fd4c17a190181e92e3e252d87d",
"assets/assets/svg/photoshop.svg": "4f19eaa92750ec5be545c775a0fd0d7b",
"assets/assets/svg/html.svg": "646c6db750a3503a156a85cf38238d98",
"assets/assets/svg/mysql.svg": "a6cd635b1d8799bdd1cef7bcddfecce2",
"assets/assets/svg/menu.svg": "67006439fed092ede5fe05b7e5916351",
"assets/assets/images/app_icon_dark.png": "a144485f0fb4994d5a85be7e3a13f23f",
"assets/assets/images/404.png": "9f983019c67d6d880c4faee73caf6410",
"assets/assets/images/android.png": "be820f4fd0b3280ce05904be820a7237",
"assets/assets/images/xcode.svg": "9ab6776fd5b25b5541d8f12033201bfe",
"assets/assets/images/mac.png": "98650b9b89e6283148cdab03b8540b34",
"assets/assets/images/app_icon_light.png": "0dc51fe8f431c2b6677ca5661a9c9964",
"assets/assets/images/androidstudio.svg": "874a41fd9733d2b0a674ba22fd8abad1",
"assets/assets/images/web.png": "e994d3ba608e544b2a316d83a8919dee",
"assets/assets/images/ios.png": "d25ae95f8ea08b94864ea6cc0890acd1",
"assets/assets/images/windows.png": "8cefb4872526ed4e853c89a00b69f240",
"assets/assets/images/postman.svg": "6cecbddf83438524c794fbfbf6e35062",
"assets/assets/images/roshan.png": "2d36ec757a1b3b3bf701a817145f4ac8",
"assets/assets/fonts/agustina.otf": "7b9833076716a8d14eec0cf885a3153c",
"assets/assets/gif/wave_hand.gif": "6a3cd1f1c503953b1c93efd5cd396be3",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62"
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
