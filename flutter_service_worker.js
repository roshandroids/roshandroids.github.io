'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "1c3515d2cddf548bd30700fd17ff97c6",
"index.html": "95d6e77ed24bc400a54edce20e0c5f2c",
"/": "95d6e77ed24bc400a54edce20e0c5f2c",
"main.dart.js": "f550580111cd3999c85055fe98f2ca6b",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"favicon.png": "9c14f158e9a813585276b0b7f441425f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "179529087eb15fbca5e68094c87c13d7",
".git/config": "74f750899ee1f0b8da8aeff576c95d3c",
".git/objects/61/cfa7b283ec107d835498d516310603dafd3cb8": "6e25571e3c9b6f84c163c510e8927cc0",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/57/72b564b9a070982092e135dbe9bf40e007529b": "f9193fcbce80436da88c9eeb0f6ea0b8",
".git/objects/57/dd3357df87993165db68f4f3c7b9482ade0b79": "da9a0083b7e6881efba952b8d7af419b",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/9b/d3f4c0b6604144e5b358457323b0c8f1979838": "7db3bb008a006ed5004b2605aa0ded34",
".git/objects/04/368fc85358c5096b6f78bd5d1c6ac0a09fda62": "9f7cfe8bd8ea9a3fa27d43cb4f273874",
".git/objects/3c/e9792c68e7379af7c1757f75101a930056c690": "0dba9c4b224562453235efe3ccbfa8a8",
".git/objects/9d/56252d1fa1547f34f975ef70649cba109eea9d": "8402055e4c959164cf64c3dcc4d78a3e",
".git/objects/02/88d815c958b6aa91e10a4a655df6d781c005d8": "f8fe77a120458f09e50edb49460b07c5",
".git/objects/a5/ddf4a1de4f151261d42d68e5ef33714b60971d": "bc5ba693d38558d8de1114dcab151cf3",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e2/e7bd7a00834cc37c859ed397d73afb8eca40d3": "7424fe3b52805fa03cabbea481968359",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c9/617f3a99b1843e04b88c5c6f2f531324ea88a9": "cf571e7c678dae6f1332119cbce0a318",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/20/53a7b3c8a33366602585e19276dd12e420dafa": "852ad9e98697eea6b292078d63a0710b",
".git/objects/18/a50b7c9ba925a220bcddf923f061165ca4556d": "5f61e55758e60007b08cb5f1192ec648",
".git/objects/29/2214367c0af9a2eee8f873b2944224e2fe3f0c": "902d6cf3d5ea70392a74bfc9ded583bb",
".git/objects/42/dc80d2f564009646462da614e610fe25a51173": "7abb9a02172df5e0d879b1dbc1fe0a07",
".git/objects/42/656bde11290f69f9d17c5778a6442b2313524b": "8dc7a71200300921eb4665eec4d45b25",
".git/objects/87/930313c4c84c9b3cebe06212a04768511db8f0": "43d089d5c9fce176066647e4fed86935",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/44/25be99a6fab895f4880503495fdc6c593e092e": "2ec14733ddcd6266132c6285cf4e940e",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/b270cc7f72ca0cb193402a4bc49ec4e3810360": "f6f4c425a972529a77f879e78da6f266",
".git/objects/36/c9050bd28a232166bfe31a15e8d2ec1e42f9e0": "6b2ca7112bd15a98d95cbe821e6bec8d",
".git/objects/5d/fc5ec22acbf782302008ae1295d1a21d32923d": "2f057f8a60507cdf49354adb6a2b6df1",
".git/objects/91/3152a53151168d4c461fda19f0172789c95ca0": "d16c8df08766a5252bf61182cc5f9f99",
".git/objects/65/b49e3166691dddc126ef68bc22ed2811744688": "5f6bb848cac6577733cfa651af6fe1e6",
".git/objects/3a/f92dada3a66016a94a2b451c9876c8a8cd0dd2": "206c3171290b70d1f6ee4bda108dd922",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/f0/3237ef3e7817b509d9e398e87f446846fb9e6e": "85698389211d8da3d3d8bf172182d6af",
".git/objects/c2/655fe428ed65001f56add87ddf065957f876a2": "0f28bc2a69844eb35b205cea22516eb5",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/46/1f0cac656b0fa19ddba6b6218b5c7aceabbb77": "2ad8ca67404d7e5843f492eba06c87fc",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/2d/503f9d644a88f905ffc6829fe750c1dcab57fd": "dacea1ca5c2dae97c7f43a4700114f91",
".git/objects/77/578b1a4c9f8b82f488c71e5f65e182acf3fa0f": "373117f9837e603a49802be9ed465dea",
".git/objects/4a/d9e1d977062ec02565cab15ea59ff692749fa6": "567dd5e20c22f1f59a8a4c1be6692e11",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/24/a8f16fd0ce4e8c65f57a224a34de9bca8038d0": "200aa4109604bb3f5d958f5ca36d98df",
".git/objects/8c/9229af5af624cf359f765dc0d2fb5ff464547b": "11315dc5cbf54b356355b0d8c280836f",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/78/d04de208eda443f2fac363e9f52a1b33a691e0": "fc96bd358088c03cf89b7c276db6af3f",
".git/objects/7f/a598a04546dc5559027675bb3d762ff877b0a0": "ac247e198d52965defdbc9d44224bed7",
".git/objects/7f/ae0a616914c053510003c63cc4de9d8db914b6": "54843464cae1482ca3243efe6de74701",
".git/objects/22/b6a456614ae5d482c3727326f628684bbadbc0": "ba74cf05c361d0cd6d159dfe9aa6a0c1",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "dbc328970cccd947339cad9f06496382",
".git/logs/refs/heads/master": "222de8f05968f32348e4a3499f53661d",
".git/logs/refs/remotes/origin/master": "f6e5cd007727f6fd2ffc0a8b8e1ca8b7",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/master": "49f4c9c92f80e1f4f3fa5280e83d1c9c",
".git/refs/remotes/origin/master": "49f4c9c92f80e1f4f3fa5280e83d1c9c",
".git/index": "90bf7b083b1e2e87b36a9cd3f69923b3",
".git/COMMIT_EDITMSG": "a2f96669161bcceed3261bb00138fe33",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/NOTICES": "4bb57bd4585669fcbb414a5b2003174c",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
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
