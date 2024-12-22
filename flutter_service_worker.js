'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "82a4ed61cc7e710d53940d0b58613001",
"version.json": "9a1bcbd1a05f9117d6d27840e2f999d6",
"index.html": "c7d712a0c41a9a14006ab1425f56cc72",
"/": "c7d712a0c41a9a14006ab1425f56cc72",
"main.dart.js": "0a1da682aeab589a01af37d4dc4cc277",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "1e82f404474c1b7b358d847d73763f8e",
".git/ORIG_HEAD": "763c1ee211146b1f53874c31d0cbd4a0",
".git/config": "79883e230d8dbdb52ea4f338a5c9b7bb",
".git/objects/59/593227e8cfba1ae2280fbd33c280815e3b4ce7": "8e64c352dc54c32d5e25df16f53c9966",
".git/objects/50/ab2cbc4971404a22d0f073ccee5fea8130b735": "24ededefa1d8dbe47b7ffd76a66a3ad3",
".git/objects/68/dc59c3de8f4cfb3b7280c96188522c7297eafc": "0de9c94a1ba9504ad545ab0646366410",
".git/objects/57/3b6f4ea019d3285353a14390fe114fe9037497": "d11f6cc690a2acb45cc75cd2d8a5ae7c",
".git/objects/3b/be8c27453e01ec38d71c9cb1271c8f18cf12cf": "e31c95df4a44635226c5bf0fe5eb5b4f",
".git/objects/3b/77d4ea4c900c2bc4f9c24021a9b89ec2c97b03": "5224815227ac3a72635f76351b4370dd",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/69/1d4ed8d3e9f27c5c5b2d0a7d19d9cde07dbabc": "4ff0fd6a73f9ed73ad905612242fd260",
".git/objects/3c/40958c4632c774465438a8c698c90cdebc704d": "c50c99833b74d6cfff948eacec53796f",
".git/objects/56/cc958fc01a3283f799291b30dc9051c071d4ab": "53feef6772be917f12c7a0cccee2c2ec",
".git/objects/5f/0fd1dd45a79c30c38a9f1d2ea32aea5d5e4374": "bfd177993793043773e2caf2dba7d6d0",
".git/objects/33/6c02eaef3330a0f6b8c27202fc6fcd7f6cb28e": "25f3928e29023849731488b8ce7bf33c",
".git/objects/b2/4f8f7bf3c7dfafe3ca8819ecbb8885bcd7cfbc": "407efb650f673c02dd37bb9c700edbdf",
".git/objects/ad/4214920dcb3189a196104ebbabe18ae5d5f80a": "f12d9989cb8987be35c5ada1bf044fa7",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/bd/8f8b01119b8e64e7b7aceebe7decb20ab78db4": "b5750b514d81fd97133037215691e36e",
".git/objects/bd/3cc9711533de5f65174d2f4990490e8991ae6f": "3ec7ebcd73910afce9210c2597d5a0a4",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/e2/b82ba387bf70fe312423bf37085a73a2603e0c": "b4b5742fcf259c36ad3c2a28e91774e3",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c0/1d16eac3c0b1374039ca2ac7867d64bf2edea0": "dca2f982ef9c3314c01fd65b07342113",
".git/objects/c9/a4a81a2197f8b4bbd3fb81f8a67d979b312fdc": "3cb1825fe6ce326f212e6555c7890c97",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/4841a471575c80665349a5198e89cd8bdd7843": "9783daf058d1c409bbe9dd0d001b5013",
".git/objects/e3/dd39d0a187f5f3a6a12547cf9b6e77d4f44ef4": "260fe34d8224498254dd1153b87934f0",
".git/objects/fb/9e6cc6ba56b5af11c5360d62d5557eb245ae61": "38f6f997814965211bad605acb8e54e8",
".git/objects/4b/917b4c37c6128909ea507928e922f5d94093ee": "e92b3d828dc987a4092f8225b5442cba",
".git/objects/pack/pack-bef799a10324ecfe6805a87d77dd3482434cbbdd.pack": "056d5b600f101036ceec6ca9a497ba6e",
".git/objects/pack/pack-bef799a10324ecfe6805a87d77dd3482434cbbdd.idx": "3cd36d9f0df8cda496460553e96c43ed",
".git/objects/1f/5aa1ec0cb88e080cea747f392d4ddbdc7e8ee5": "ecac36ac0f1e10a247515d8cbc0139e3",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/87/78c2379d3bab532c5d6ac2ef587a4509b06a95": "dbaff4af7c061248c8e61247d3fcf702",
".git/objects/28/4da1702409f06b7df2422859ff2a3f58cf9175": "45d2b54579fd4995164c2462ee6a40be",
".git/objects/28/791971d7cd3ca0762711b5b8a775743cea1f72": "e770a4aa92b6b802ee39f1699beefcb2",
".git/objects/28/6e023f7f736f222cca78e1d3c946148036e0e5": "5083c380b4b564af2653e5b4063c7eea",
".git/objects/8f/d3b620b04898fd43994461d8d1b47f772eed7d": "d378bcf26223d09ad4e0577ed3ac9b18",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/10/0fdf89e15d2bb556a52635ed8ca89544912102": "70964d0646b1c682aa2ff3f0369edc33",
".git/objects/26/6be1c13da8f1cce88486fced632b860290be7d": "df61635a1810303a6dcc409a13c2c846",
".git/objects/81/818dece5733729ccf78a7fe31c168993fff64e": "151fe5436e5cbb4b915f1577155e8c94",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/38/d283493b380d5e85a9f4ce365648a6936a77cf": "5e20375ef9fe2f04fdf052cc0428c88a",
".git/objects/09/8d2fb5851c92236b72f68263cd91886db729b6": "7605759c2a5f639931d24fdc64171045",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/54/6e54e316f249f52d0f52c4aa2db4119d2e17c4": "9c957f84963e5e5c0b1579a3531e5358",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/01/0a841e50df43b783bcfa34e4dceb740fae8053": "bc89b7a84fdaa7f77be594c94d83fcf0",
".git/objects/55/42166601b6afd4f6eed2c34d801a066681262c": "216d571dce93a7c0fdef4cdbe959107d",
".git/objects/55/a5ba76672fdf6d597c8db939ed636a14d48759": "dfab32e6efefe385805c4dc4fb7ff306",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/dc/490ab58f61a83c05b0ef670ab137e530a13f20": "b6538f2e2a00632bacda55116d3c3468",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/e1/7e0e33d4c5c50855f847c2e618ae272bbd0021": "a5ee28d81df203e1269173f76a48cbce",
".git/objects/f6/d7fe9c5fd0ab4ef1f3c1428280555608b6cbad": "76d7fa5150d43461946bed779b0838c9",
".git/objects/e7/647f5d5ab975064ff3c5efc75f5f518b10edd2": "3b5356625ed6bc9dd0e59ec2cf379c82",
".git/objects/cb/8c9c8a4796f8e4d1751d3613f1ed74beb55b7e": "61ae9fbbeba2fe8128369048a3849aa9",
".git/objects/46/ad715bfcdac3b330b747a3583053cb63b7e29b": "f608343d7d9339801cf4eb469ff51872",
".git/objects/79/079ff58105845b50e2210798680166be813101": "97742e0973b0973038c165c6eadebd2d",
".git/objects/79/ffa6589c684b5ee9829b33e3d9b6fde53e5f07": "c4a8befe91f8fc0a2e2e43ad7091d22e",
".git/objects/1e/ce186ea60f18c539fc6665dbb57ebe88b178e5": "34ea84c7bc6d949b2583b308eb533ec6",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/4a/6334ede1ea2a0c580eb6a30cdbd6fc856cf27d": "8f25d89ec178b0195474065a0a03bc98",
".git/objects/23/a5c1edfb68da66010db5741185b3e015da4395": "a772b7cad4b13b7069ec83721f6626f1",
".git/objects/8c/1426df79475972b205c699b676d53e4c00b4f6": "5699d327ef5e5ae53b7498d5b1d30439",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/2e/5d657b528b02a54e0ae65354b3ac5d78dbde8d": "33388f2413e4fce3176e464ab751d910",
".git/objects/22/da92f295453053feebeb792063f598784fbdef": "4cb67fd9310808a7eb4dbe80e71e7796",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "0aebccfd5866bfc3e7c8f625230c22f7",
".git/logs/HEAD": "a97ae659751aba52f5036193f7745cdb",
".git/logs/refs/heads/main": "a97ae659751aba52f5036193f7745cdb",
".git/logs/refs/remotes/origin/main": "6c07bd44bda8692eb102fe7e75dcaaea",
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
".git/refs/heads/main": "763c1ee211146b1f53874c31d0cbd4a0",
".git/refs/remotes/origin/main": "763c1ee211146b1f53874c31d0cbd4a0",
".git/index": "7cc0216f4243783b5c7657fda213199c",
".git/COMMIT_EDITMSG": "59e541da0bece4d7f1e3698b3101d7a3",
".git/FETCH_HEAD": "8f57fcbb8e74c3c786f69deee6bb5539",
"assets/AssetManifest.json": "def57dd628ee06948fcbb2160dacacde",
"assets/NOTICES": "818e2b71e6682890aefa1a1e47a3d231",
"assets/FontManifest.json": "8c07103460827efbf317f2e81ec7f73b",
"assets/AssetManifest.bin.json": "b0353bfb73aaa503012170d5682ac171",
"assets/packages/awesome_snackbar_content/assets/types/warning.svg": "cfcc5fcb570129febe890f2e117615e0",
"assets/packages/awesome_snackbar_content/assets/types/failure.svg": "cb9e759ee55687836e9c1f20480dd9c8",
"assets/packages/awesome_snackbar_content/assets/types/success.svg": "6e273a8f41cd45839b2e3a36747189ac",
"assets/packages/awesome_snackbar_content/assets/types/help.svg": "7fb350b5c30bde7deeb3160f591461ff",
"assets/packages/awesome_snackbar_content/assets/back.svg": "ba1c3aebba280f23f5509bd42dab958d",
"assets/packages/awesome_snackbar_content/assets/bubbles.svg": "1df6817bf509ee4e615fe821bc6dabd9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "5ba7391495bcf281cc1b4b8b52483dca",
"assets/fonts/MaterialIcons-Regular.otf": "02073955a6ddcd9e598deb83196c2286",
"assets/assets/images/number_of_transactions.png": "4c1bd511e3be0f0a551de6599bff1030",
"assets/assets/images/total_transactions_icon.png": "e50adb26b3a4ef3b25a304736edc4919",
"assets/assets/images/sa_flag.png": "92e80a6f479e81d17ac96df530b628da",
"assets/assets/images/logo.png": "0ee66619eb2fdd509e21e074e340fc55",
"assets/assets/images/email_icon.png": "dc5bd101c0833fda1ca3b83e435b8834",
"assets/assets/images/phone_icon.png": "286fb922c7573738e92cb38597bd3b20",
"assets/assets/images/banner_logo.png": "f04ffec56e5da4abbe04ed136d8d796f",
"assets/assets/images/rabbah_curved_line.png": "8039f5c49b1c49632bae246751250ee5",
"assets/assets/images/total_settlement_icon.png": "d79c4c97364a36c389fefb89ddf5d118",
"assets/assets/svgs/no_data_icon.svg": "e6041a0eb7215c082a77e4e906c640f0",
"assets/assets/fonts/Cairo-ExtraBold.ttf": "92ae313db90f497a9b8fec09433a70de",
"assets/assets/fonts/Cairo-ExtraLight.ttf": "a699568a2cf9e5794c5eccf7909b39c5",
"assets/assets/fonts/Cairo-SemiBold.ttf": "e11b6bc7a07669209243fce5de153be4",
"assets/assets/fonts/Cairo-Medium.ttf": "2b76c14c6934874d64ab85d92c4949e1",
"assets/assets/fonts/Cairo-Regular.ttf": "5ccd08939f634db387c40d6b4b0979c3",
"assets/assets/fonts/Cairo-Light.ttf": "c4a2ada0dd57e03f921b8f7d45820268",
"assets/assets/fonts/Cairo-Black.ttf": "d5cfdef0ee5e1b9765295e3b58f43233",
"assets/assets/fonts/Cairo-Bold.ttf": "ad486798eb3ea4fda12b90464dd0cfcd",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
