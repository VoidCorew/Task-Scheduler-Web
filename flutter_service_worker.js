'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"index.html": "203e3054978582531156543fefd5833d",
"/": "203e3054978582531156543fefd5833d",
"version.json": "b183ebc1e3e097f155f822e5b9ba372d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/favicon-32x32.png": "9d3fdfb8a28d3dcc2478460cd9728725",
"icons/icon-512x512.png": "4f7030db20b6107f571b9d179899a92a",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/icon-256x256.png": "bec1902559cc078f4e3e697c127c0a41",
"icons/favicon-16x16.png": "033052a0e6797c70893370734434fe92",
"assets/AssetManifest.json": "1f7eb6d79c6e0eb29258cb5b93dc29cb",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/timezone/data/latest_all.tzf": "5e6af46f7fdd153c308fc6531ba69d03",
"assets/packages/syncfusion_flutter_calendar/assets/fonts/Roboto-Medium.ttf": "7d752fb726f5ece291e2e522fcecf86d",
"assets/packages/syncfusion_flutter_calendar/assets/images/People_Circle20.png": "52cdbc89f084428e9df1fdaf75bcf918",
"assets/packages/syncfusion_flutter_calendar/assets/images/People_Circle11.png": "1b3d36d168f8f27a027b3d5fe54354b2",
"assets/packages/syncfusion_flutter_calendar/assets/images/May.png": "e9a14fe43782d90f7c8e244316b4db49",
"assets/packages/syncfusion_flutter_calendar/assets/images/People_Circle8.png": "2b837eca4b31646cfdcea21211cf66d9",
"assets/packages/syncfusion_flutter_calendar/assets/images/People_Circle15.png": "e8d60d3a29c062b0213e0c433353c37b",
"assets/packages/syncfusion_flutter_calendar/assets/images/People_Circle26.png": "084a7485156f49757e53c3910e532cc9",
"assets/packages/syncfusion_flutter_calendar/assets/images/People_Circle23.png": "05985cfc1de3cc32355ae56fe6652b1f",
"assets/packages/syncfusion_flutter_calendar/assets/images/People_Circle24.png": "0a33516701ea509f461e87a1771f9c8c",
"assets/packages/syncfusion_flutter_calendar/assets/images/People_Circle13.png": "73da9fb063f6307b928808b8b49a7c71",
"assets/packages/syncfusion_flutter_calendar/assets/images/People_Circle18.png": "9cc9674b42891b1757db7b73e593c1de",
"assets/packages/syncfusion_flutter_calendar/assets/images/People_Circle27.png": "8df8e8574e1e33751beced5cae1035b3",
"assets/packages/syncfusion_flutter_calendar/assets/images/People_Circle25.png": "a92b2550be278d8dcfa183d680b61ecb",
"assets/packages/syncfusion_flutter_calendar/assets/images/People_Circle5.png": "3cb632d1b2e967a456122f28d4770a01",
"assets/packages/syncfusion_flutter_datepicker/assets/fonts/Roboto-Medium.ttf": "7d752fb726f5ece291e2e522fcecf86d",
"assets/assets/fonts/WinkyRough-Regular.ttf": "79403724623aecd258fe6b42e2bc8be3",
"assets/assets/fonts/Monsterrat-Regular.ttf": "38712903602f88435ddddec98862f8b8",
"assets/assets/fonts/Jost-Regular.ttf": "3ccf189874e82464a4233d9dccd41c97",
"assets/AssetManifest.bin.json": "4080c94ff8065f00d704ee9667a7782b",
"assets/FontManifest.json": "97e861c7492617a095cba6762192e703",
"assets/NOTICES": "9290c8c0e9113adc52b4a6959344111a",
"assets/fonts/MaterialIcons-Regular.otf": "c2862e115725d9da63fb044edee3440e",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "05cf8855d5640968af020160817ad726",
"flutter_bootstrap.js": "286eabbcdb7ecb1e3ce04e1d10c117d6",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/objects/d2/0d2667444fae91353531a02bfeb18d0070e5d4": "ee95e4607c4310bb8e370b86f5e1de0f",
".git/objects/f8/8ab438ed506e4e2cd11df62c8902f5bf2a4adb": "2fe556e7d13644da38d9191e2be9fda3",
".git/objects/50/d4562764c750d063fde3efd4fdaadc7130d148": "3b3b574d9c6048c603925e42e36e310c",
".git/objects/73/998778940bdaa5b2135d452f6ac5de095b3b4f": "c4e9ef9333b91c362bd196b6b31cb3b2",
".git/objects/73/c63bcf89a317ff882ba74ecb132b01c374a66f": "6ae390f0843274091d1e2838d9399c51",
".git/objects/b8/c08e671d9f149b9adfb2762ee8eaff19ab5a9a": "489d0c715df21026961e9e664e5e1010",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/22/20e8ce1a62dbecd871249e9bf274f0dd4610f8": "3772c527ff95a0f2b13f98df64dcd98d",
".git/objects/6a/0308c2969c39e6f6c5ca9909f0caab34781752": "ef0cf39d0b4216232138a2bd267bf7ba",
".git/objects/6a/13793d2d587cbb2096ca0c9f4fde8d548fd398": "d634cce09d62c974927cdcb51618f349",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/1a/d7683b343914430a62157ebf451b9b2aa95cac": "94fdc36a022769ae6a8c6c98e87b3452",
".git/objects/32/6956315310800bcc52ccac41c601778ee4a597": "2df954b6d722ee0869048646a085dcd2",
".git/objects/1c/7b352b772d12a5dab1f9492c38b54f976de7a8": "ea60f36b1cd82149e689adca92365a4a",
".git/objects/18/ecfbeca68be5de613752d95dfc983df9c84284": "c4c98deb429a036b49c312f0308f9cf4",
".git/objects/9a/1f4b34af9bd3fdf4a7ceb2d40676561f9eb957": "c60c015769ff7a8b5ee7ebd4ae4d7aa9",
".git/objects/39/ca4fc5c14e73cb0a3ea237ef0f717bcd3c9f1f": "d7b21b0c544b007053692314baa67a75",
".git/objects/56/8ef2af5039e9cae6cb09a8bb157c047c548b9a": "662adb5fe82433987e29b412485b2682",
".git/objects/65/7adc38f53388bd7b8551154a85d551f667c85f": "4f22dd52894a9696f42facdee93a905c",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "d95736cd43d2676a49e58b0ee61c1fb9",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/e5/19f91c8d5bf2ae2056268f4b7da3265f01dc57": "cb9339f82f1506ab6e3ea52c7d3406b7",
".git/objects/ec/8c53e581696f88426a610fc170586607e987e2": "501af911a5b5c078a46e25704ad1a3ba",
".git/objects/1b/3b5a46d888ebdc65b0d890036ee1b0446c12da": "5f3d9fe34a115d29ff7b8533182e371a",
".git/objects/4c/51fb2d35630595c50f37c2bf5e1ceaf14c1a1e": "a20985c22880b353a0e347c2c6382997",
".git/objects/48/ba65ed33dff18e74c62b0f08d8165db64a3085": "9aa3a7fdcbc6e5a4b96701d6dc3f541c",
".git/objects/43/59bd60b8ba9626243c6f5f4a6b9593c6257e9c": "6df8bd05f868a6efce0ba2d6f90bdc98",
".git/objects/4a/26c4465ba9822f3b0bdc3cee39dff4b438f704": "1c69cadcd008278984c5c677b96d7595",
".git/objects/ad/ab83009a7f4d4779d83d16ddbcda9f54f9ce3d": "9c663f7c79e42a98404251ac75069f4d",
".git/objects/e6/391a47fd047cd048ab1b10ba1d33f5ef3362ef": "f1537220866f18e314a57e85304fa865",
".git/objects/79/1b50a8abb749f08faf3bab19b0f2c08659426e": "77d0e018ce36b28d7bc3a6178e5b1c96",
".git/objects/c8/08fb85f7e1f0bf2055866aed144791a1409207": "92cdd8b3553e66b1f3185e40eb77684e",
".git/objects/97/7de3ee03fb382564ea4f7b87c8f66896524a55": "01caf4c0b6424725db4897d30b4dfc76",
".git/objects/4d/6e3e5262935fef94db9a3ab5fdd792ff65e504": "989e19616588e810bdc4d7581987eb96",
".git/objects/5a/a0d5d9db5b3ee25a4692a1105d9e4f17f2f933": "f9b1d61f5bb72eac2e9ed5d299d669e4",
".git/objects/51/017bc3ffbdd9973d12b66a4266b0601fe2ba08": "7a19901f30501ecd26fdc9a5cd971153",
".git/objects/51/d5da8e042546554e82154438e21b773773055c": "fade84c99c1b4945b4d117a716b6a9ad",
".git/objects/4f/31688b04d75743fc423c95479a940184495d09": "98bf4d4a747055e2abfbb6526cb07c57",
".git/objects/0f/7a0da09af78ba10022ad057462d6d26ee51f84": "e13e2b374d3157d580fb47788d5efc3a",
".git/objects/0f/20d7baa3b26deb6e348c2b9e57b4b6454ad6f4": "3415c9cb3c00d7a4ba7386fe78548173",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/cd/f3661a250a00e93aaedd1fd457f6183d93a957": "893bc985c98e7b164ca86ef00b423d93",
".git/objects/4b/241dbb568d6de2e79c2ab3fa6500ad30d7aa51": "d2cdc86db2ef6892ee00b52ecbad2137",
".git/objects/e1/9c4c82ac90f602166bd5a1c8ec568dd59cd760": "41bddc7c5a64141a2000a787160c8bc4",
".git/objects/53/18a6956a86af56edbf5d2c8fdd654bcc943e88": "a686c83ba0910f09872b90fd86a98a8f",
".git/objects/53/3d2508cc1abb665366c7c8368963561d8c24e0": "4592c949830452e9c2bb87f305940304",
".git/objects/76/c6c66f775d4c8232b966add5c5bf01d5edd607": "b7b8039f74cbc110981eced886921b21",
".git/objects/d7/a12ee96a60aba6b905985c37919c5b1c67acc5": "f0d7ea3b7f3fc9f78252676398ea15a4",
".git/objects/47/cee8ea2080fb893fc2de290af07530edeee7cc": "968873b2a9ab0e6b46d57e789c48d262",
".git/objects/47/b79536d30d52680166fe22e589731c68ac9f37": "3d7125a499c36d55149da1b20989e93a",
".git/objects/e0/47277d6af94a34b7084130e73211d9e22e4a2f": "8fcab953d2fe5fb2a5a1797464adda30",
".git/objects/e0/7ac7b837115a3d31ed52874a73bd277791e6bf": "74ebcb23eb10724ed101c9ff99cfa39f",
".git/objects/84/c84f764c352e4d80a61ddd57c41bd6ed961cb7": "5c02e658efed3d1659217d4a8ee8262e",
".git/objects/0d/dc3873d431dd11e36dbd6018d346e93a03a9e6": "9b506c07f4d52b353f8e0de8906c6adf",
".git/objects/05/56badd721cb86eeb3718bc2ca4d2fe7f54209f": "f6af26828157eed8ff5f3a9b92d855a6",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/d6/29e984895d8ff4442fe7bdce1ed4dc754730ca": "b1752d2154478a6b9d06498cbb941b7d",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/c1/7f681f632a145794f673824730f93f1bfed053": "fe1bb5d0846e74edfcea1892f1ccf0c5",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "784f8e1966649133f308f05f2d98214f",
".git/objects/31/35f8e1bade7ce799570e43fba7b12d812fa215": "e1eb8dc92c4a0625f939137279408a1e",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/44/73acaea347765e96121e75f9555681744448f0": "ce4fabc7fe5a52fb6441745217115a3e",
".git/objects/dd/5834491691081b5d022dae555362f9031baa50": "d318ccd631b1f2c4edaf344db4dbc410",
".git/objects/f4/fd0f82cb0f77925e735e21b41ac324028a5f3c": "f433048643607119e55999dc8d6d9c54",
".git/objects/d5/9cc5781f4ee841ee2e08559c9456222c6cad17": "81cded52b19473c0a30142d0624f7e73",
".git/objects/86/aabb8e0e88d366bf31996beba992149d974af8": "2dd795da8606c230d05be9b0703c606e",
".git/objects/bf/1096a2e44aff25ba5e79af81dfa629f4550d4d": "1a717757ac5fb78f44bec29b54aec43a",
".git/objects/bf/5ae9275679285e530e1a12b65012c1d1d9af45": "57c42634075c9dc4217eee596ff9e5f1",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "761c08dfe3c67fe7f31a98f6e2be3c9c",
".git/objects/d0/1d7a03962547003e9e0f12391df77d4433cd86": "be66107257f2e09ed509aab7b4caef39",
".git/objects/af/d260223fee43c674e4183d260ec99258dd0519": "69552331036110fc97cb86bc38a129b2",
".git/objects/8e/d7c30469d55808263f55aa08c824acab5bfd75": "eb4e43472fd31cb6c369367898d5792f",
".git/objects/8e/3c7d6bbbef6e7cefcdd4df877e7ed0ee4af46e": "025a3d8b84f839de674cd3567fdb7b1b",
".git/objects/85/13cdfc7bb0d9f3f9691ae2f845e48ebc0f0f48": "eeec7d279d6d6746bf716e3170ac29f2",
".git/objects/a9/efd4edd6ecc5947acecbbf98c868609f02290e": "fa4ab09c608797bcfb1ac34b05254aee",
".git/objects/1e/e511bcf166ddc9cf090b4f1052e71d8f366675": "54d1544c825a1d2c2014f34f02f4a558",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "4227e5e94459652d40710ef438055fe5",
".git/objects/7b/c0f1e7e20f45396d4efb790af04d49a3c01e46": "8c88ca3674a0871d24d7e7d74feb8961",
".git/objects/6b/f6263b9f32df3e1f450bfd2dc9c0656e818ae0": "0d18ef94566dd4a2904f3650386bcc95",
".git/objects/6b/eb42050631756e08f35765960931e36ee1961a": "e4ad6d2a87d568956337351fa7c75fe9",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/c6/fd6721191134c09747279f6730595e2cfa603b": "8c686d9f05567f963aadecdbc202eef3",
".git/refs/heads/main": "ce5679f72931972e35c142cbcb81e5af",
".git/refs/remotes/origin/main": "ce5679f72931972e35c142cbcb81e5af",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/index": "2aa3fb77bd3d93d8432fe23adec1ec6e",
".git/COMMIT_EDITMSG": "57bebba8e3f021d01993274e00cbe7b7",
".git/config": "8fe66cd573940fe67b9de15b807f464f",
".git/logs/HEAD": "499c410576841e0479e16ba883bc2acd",
".git/logs/refs/heads/main": "87ef4dd024644ffed72db3a0e2b5af07",
".git/logs/refs/remotes/origin/main": "f5e6fa689e68fcb6bea4a439d6043c14",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"main.dart.js": "89e7f6936c6b5e727b53436c436dc2fc",
"manifest.json": "a774a7219c1b9cc75035c653baeef1be",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c"};
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
