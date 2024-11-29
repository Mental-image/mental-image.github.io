'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "4aa874e9ce733a942087cf1fb721e5eb",
"version.json": "9a1bcbd1a05f9117d6d27840e2f999d6",
"index.html": "0700156f08ce38f3970984ac84fcdc02",
"/": "0700156f08ce38f3970984ac84fcdc02",
"main.dart.js": "60e9c6c7b9b8c712869bd898e1144f7f",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"README.md": "ddbd3d83d057edd30e3687908791484e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "1e82f404474c1b7b358d847d73763f8e",
".git/config": "fdf36dfe072d4ac2b39ed4a54be92250",
".git/objects/61/acd50c94a73a2d75d7eb0f6cd4df520bf7b968": "abab03eb478bfb925bc6cbc1183c1599",
".git/objects/95/87785c5e47bdcee580479afa1e9ac983a41e15": "5bcdc988b33c30ce796f20d107d66d8c",
".git/objects/0c/13297a3073644a993be902ed6d2fbbdd357bfd": "1c347b28173eb79592c23ac94b56669a",
".git/objects/50/ec8c2a3e098d5df0367c0e7c8dfa8a5b92c5e3": "a2bcd7b93c8a5ee0a825d4f27e7e0d0a",
".git/objects/50/8831f60a5d0c2212c221381d8ad663cb8bf43d": "70328c47101ebafbd78737163225c590",
".git/objects/50/ab2cbc4971404a22d0f073ccee5fea8130b735": "24ededefa1d8dbe47b7ffd76a66a3ad3",
".git/objects/68/dc59c3de8f4cfb3b7280c96188522c7297eafc": "0de9c94a1ba9504ad545ab0646366410",
".git/objects/57/3b6f4ea019d3285353a14390fe114fe9037497": "d11f6cc690a2acb45cc75cd2d8a5ae7c",
".git/objects/3b/be8c27453e01ec38d71c9cb1271c8f18cf12cf": "e31c95df4a44635226c5bf0fe5eb5b4f",
".git/objects/6f/8f18e3757b08b14d1427f4a1cf78e050275502": "f3feeb683d1fbdc3856eb1b243f4fc02",
".git/objects/9b/0b966ed3ffa5acd6e8da29e826cce68109946e": "25340557cdee372da4637203e1700407",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/69/1d4ed8d3e9f27c5c5b2d0a7d19d9cde07dbabc": "4ff0fd6a73f9ed73ad905612242fd260",
".git/objects/3c/40958c4632c774465438a8c698c90cdebc704d": "c50c99833b74d6cfff948eacec53796f",
".git/objects/ad/458383d68284660b9c2e03aff3bb8db78534e8": "f5b9a19560e9883c84450660d0c876a6",
".git/objects/d7/815f84d2338a639d9f64003ac6f01a3c2e170a": "cc6dd4b3c9d6807750e339dba9a51fb3",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/be/52e8ffc2afbede460efcf83f01e719d6c6ab70": "dd717a914023204778a0b7912067db73",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/bd/3cc9711533de5f65174d2f4990490e8991ae6f": "3ec7ebcd73910afce9210c2597d5a0a4",
".git/objects/d1/9504e6b8bcdcd71b52663b4425bcb291130d3b": "813b2868c8bba84dc1c4ca1597bd7682",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ae/da0ad3a221ea888a8875e2e2ae39c4e189b233": "d356093204b3c170f305b3e19bb47aea",
".git/objects/e2/b82ba387bf70fe312423bf37085a73a2603e0c": "b4b5742fcf259c36ad3c2a28e91774e3",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c0/1d16eac3c0b1374039ca2ac7867d64bf2edea0": "dca2f982ef9c3314c01fd65b07342113",
".git/objects/fc/a236ca47937ea7fa8ad2bcf92c978f7cd4e50a": "83322a6e43ec7454d94f025933f218cb",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/3c2713612ec7649592cf0c2bedce2bf289f021": "ef1295e8e3ce0a4a10fbd5730e58f149",
".git/objects/fe/508d083f60a6079708f0c291db5991792cb4e6": "a41a48e98d06b644a2230aa4b20b6f6f",
".git/objects/fb/9e6cc6ba56b5af11c5360d62d5557eb245ae61": "38f6f997814965211bad605acb8e54e8",
".git/objects/fb/cba675dac2663a0e90021e7f61c1d975748543": "12018cb7cfcbaa24ee36c7895b6eabbe",
".git/objects/ec/2d81350b7068560de471e085bbc09c621c943f": "69d2c82345aa75afdc0d7e3c8f9c85eb",
".git/objects/20/d28179d7c9c107e025aefd4ab1c932929459aa": "f688d38276c49f3eaf60456c5488d160",
".git/objects/4b/917b4c37c6128909ea507928e922f5d94093ee": "e92b3d828dc987a4092f8225b5442cba",
".git/objects/11/ad3c519b7dff227a112b4d8a2f7bf180386fc5": "f5e34ed29ca2702314fa0030055defdd",
".git/objects/16/30e6745cc9a97de3d04703273c01c1bb490dd0": "2407b7f171611aff045cee0dcc3ff6b5",
".git/objects/89/ef52584152ac773906364f5e6de9693a41b200": "3a963679646519726989f1ecdf4e6615",
".git/objects/1f/5aa1ec0cb88e080cea747f392d4ddbdc7e8ee5": "ecac36ac0f1e10a247515d8cbc0139e3",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/73/f35eef58024c9157f279396675ee7f67ce1a24": "8dcfe0fed8e8baf62a7be07920af64b1",
".git/objects/28/4da1702409f06b7df2422859ff2a3f58cf9175": "45d2b54579fd4995164c2462ee6a40be",
".git/objects/28/791971d7cd3ca0762711b5b8a775743cea1f72": "e770a4aa92b6b802ee39f1699beefcb2",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/75/654906a1f2e796e4913de980f7ed88b645a57d": "798ace2a7b0f90d97e8059317f37c748",
".git/objects/81/818dece5733729ccf78a7fe31c168993fff64e": "151fe5436e5cbb4b915f1577155e8c94",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/43/8eb9a0e730bb50c2d8d254ff8958dc2f71a318": "e72871b055d653fedc0d81506c01aa01",
".git/objects/88/f005006817e5c2f37fe1fd265da3f94cdb1733": "8de848235b01b2edbd9630a7abfeb2f1",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/ba0677969081ae4dd1cbb418552c088fd43bf9": "41ac8a32428b0a03d273ac9fd587b7f9",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/38/333508187d2bf9b371bec157a873eb44db9b2f": "68e4a341a8f4a980402b3b5ed1fa2ec9",
".git/objects/38/d283493b380d5e85a9f4ce365648a6936a77cf": "5e20375ef9fe2f04fdf052cc0428c88a",
".git/objects/00/034b0b92dae2dfd8e475979aa3be0ce8d42fe1": "4d5915d8d339c8f454abb62ab0b877cb",
".git/objects/00/13efb8dff6d0befeb698e7055928016437cdf5": "0d656678e2962dea543d0d9fe9a08fae",
".git/objects/6e/232e833ccf089ad299b585a1e3da8303074d3b": "3ebe40a1bf6356e18088095ff730b173",
".git/objects/9a/cc3812a6a5cd5a4090815e2570064289b18b70": "7d0f973467a98a1983f7acdb0f9a6817",
".git/objects/5c/a405565f8c3eefd25fe1b9bb1612d44ea35bab": "19bb1c166109dde403af4bcb7b4706c6",
".git/objects/09/8d2fb5851c92236b72f68263cd91886db729b6": "7605759c2a5f639931d24fdc64171045",
".git/objects/5d/1da2b1a02efcf83b78cd0c4f4262f300b6569f": "85a092098db25c7d9d10e34934c4bafc",
".git/objects/5d/68d254c9de8f60aadb943ed5704dbd154de3b8": "0f47ad4485798db31f0e9c6fe85b2bfc",
".git/objects/62/359947173b1d80885ba56f777210e670b8b475": "ea912ba3fbbb4a514481f6a4cb19a85e",
".git/objects/62/f22f6406d67af63ad967240dfa196c9c7a9096": "199e9860b95fbf46440adf34530fb2f5",
".git/objects/3a/1e4ebef75a446bb8cdf743d732c922369ed83e": "279ad700845ce2ad4831dfee37bafba1",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/54/6e54e316f249f52d0f52c4aa2db4119d2e17c4": "9c957f84963e5e5c0b1579a3531e5358",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/98/4c636df28b210117d2625a509efba52a3206db": "ada36dd51ebd9a1722c9d6c1ca416388",
".git/objects/5e/cf870e6428a31eaf5e2b8d225ba050869e5826": "f560d3ca22b6bfda082a4eb5dd78ddd8",
".git/objects/5e/db322822dd6b252bff4e9632576965393fa550": "c019a8b5ca9d7ffe2d70ab0ff4665a5d",
".git/objects/5b/73a8c150166d7d8c717e570a176f2479a581ea": "9006a58163068ce49a405aa73271a3d0",
".git/objects/5b/0020a5026941b71fd85cfa9319f39de8fcbebe": "a745cc4c27300ad7fcccf5a420158423",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/01/0a841e50df43b783bcfa34e4dceb740fae8053": "bc89b7a84fdaa7f77be594c94d83fcf0",
".git/objects/39/b523517a5a1ac74243641bcba28cc067c1ab0e": "c16e064905369d96899a4821598d59b3",
".git/objects/55/42166601b6afd4f6eed2c34d801a066681262c": "216d571dce93a7c0fdef4cdbe959107d",
".git/objects/55/a5ba76672fdf6d597c8db939ed636a14d48759": "dfab32e6efefe385805c4dc4fb7ff306",
".git/objects/55/c2d14d269573dc539d70f8b33225e6f93f2af7": "57033232a730475ab379171b1445ebd8",
".git/objects/64/11bd424ef0d9cadb29bd02e95925157317e912": "48978f4a2ad7cdc86a4b8c0b304dd65c",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/a7/0a8b2abdceb0251d6c6ec90a9d3c524c9241d2": "096b7538da354e65e035d81e27f25319",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/dc/490ab58f61a83c05b0ef670ab137e530a13f20": "b6538f2e2a00632bacda55116d3c3468",
".git/objects/a9/899aa74b3567aac3d2bc9b801934e816654c7b": "0bd7e7aad01931197fa45d731dd587fa",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/5f7c856d27fe3b0936d86b74c2555a8adee1a3": "7c896956cef8a7a54f66e150499a6a0c",
".git/objects/c4/2f03c10ebc187eae7b363254029e56ac38308f": "3097ea9b14edfc7d1b6ab4df84281e11",
".git/objects/f7/50e33367dfb336e566472fccec051fc63a8f7c": "eda0def8698a990d85508b568a4ce077",
".git/objects/f7/64a5d7620945d3d56951cc67c631159f5fdfad": "bc5332069ba606542dfb624d1446adc9",
".git/objects/c2/3671443bce2030be56ac8e2737813bc11d5edf": "3c96b2438f7c4bbd28ba934272ca0e1e",
".git/objects/f6/d7fe9c5fd0ab4ef1f3c1428280555608b6cbad": "76d7fa5150d43461946bed779b0838c9",
".git/objects/cb/8c9c8a4796f8e4d1751d3613f1ed74beb55b7e": "61ae9fbbeba2fe8128369048a3849aa9",
".git/objects/f8/9935c4b799824e8c4dfc6a8f78d35cb5d45177": "ac1f0f992b306dd43ca0b64607656bf8",
".git/objects/ce/81a8fc3026ca5607d0a0011893a99a68353bff": "034fbcd9e5317ed7f6dcc8e400aae30e",
".git/objects/46/ad715bfcdac3b330b747a3583053cb63b7e29b": "f608343d7d9339801cf4eb469ff51872",
".git/objects/79/ffa6589c684b5ee9829b33e3d9b6fde53e5f07": "c4a8befe91f8fc0a2e2e43ad7091d22e",
".git/objects/1e/32811a747b2007b373f3c0d9912bee46674794": "66b32874176c98b19dcd29446afaaa4d",
".git/objects/84/fbadb442f6e9a9138662643f3f7e5c539e8dbc": "7ebf16c38806bfdb2f02caaa4620573d",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/4a/6334ede1ea2a0c580eb6a30cdbd6fc856cf27d": "8f25d89ec178b0195474065a0a03bc98",
".git/objects/23/a5c1edfb68da66010db5741185b3e015da4395": "a772b7cad4b13b7069ec83721f6626f1",
".git/objects/8c/1426df79475972b205c699b676d53e4c00b4f6": "5699d327ef5e5ae53b7498d5b1d30439",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/1d/1380f4144482bbc1ab828171966a299bf75b5b": "8356b1d35c16ddc4d49a0f19ef3b1c44",
".git/objects/1d/0ca0f30288d5a26b7d6547d0eaf0ca8d893b4e": "64ed0913094b1701d1cf1a75710be8f5",
".git/objects/71/6a1a3a90cb8df4f5f27e0a1ba05687e8b6e1f0": "1c29de14b57c1acabd5ca916f7f5a084",
".git/objects/76/aee4b61ca2aade966da6d4ff9bec178717becf": "d2f30b772dddf3bf22e79bb85d3bfb4f",
".git/objects/82/3bb9bad6bddd26221fc66716f183d1ad3d0533": "5cb289558e45725e1ae16a3241552141",
".git/objects/49/7536b142098ec39dea2765daa2ec9ce7e7691b": "1c2d975c5a9905e29ffc2d817a0aa223",
".git/objects/2e/5d657b528b02a54e0ae65354b3ac5d78dbde8d": "33388f2413e4fce3176e464ab751d910",
".git/objects/14/647bf81599a030aead20e47445119ccb042e28": "5ccc7794a74d06ff468d3e385d9c4099",
".git/objects/22/da92f295453053feebeb792063f598784fbdef": "4cb67fd9310808a7eb4dbe80e71e7796",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "0aebccfd5866bfc3e7c8f625230c22f7",
".git/logs/HEAD": "d76d51756daa73999b4e8931deb6ceb4",
".git/logs/refs/heads/main": "5b1538ed2d03de54852e53c5a940fcde",
".git/logs/refs/remotes/origin/main": "28f1769a9d311a7bafd1ac2e99a92e18",
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
".git/refs/heads/main": "7700412677868a6b9786f05312d5a79f",
".git/refs/remotes/origin/main": "7700412677868a6b9786f05312d5a79f",
".git/index": "7cf326574cb1de9b53d81905715c51c5",
".git/COMMIT_EDITMSG": "6c7c3d0f3a9751a2a188a49a57ae63dd",
"assets/AssetManifest.json": "4d776bef0c1053d703ce955beaa163f2",
"assets/NOTICES": "f07c6f3e2e4fc962b5b11a9e0a0c7c5e",
"assets/FontManifest.json": "8c07103460827efbf317f2e81ec7f73b",
"assets/AssetManifest.bin.json": "0d3058077ad7679515b94a2945b2e9b5",
"assets/packages/awesome_snackbar_content/assets/types/warning.svg": "cfcc5fcb570129febe890f2e117615e0",
"assets/packages/awesome_snackbar_content/assets/types/failure.svg": "cb9e759ee55687836e9c1f20480dd9c8",
"assets/packages/awesome_snackbar_content/assets/types/success.svg": "6e273a8f41cd45839b2e3a36747189ac",
"assets/packages/awesome_snackbar_content/assets/types/help.svg": "7fb350b5c30bde7deeb3160f591461ff",
"assets/packages/awesome_snackbar_content/assets/back.svg": "ba1c3aebba280f23f5509bd42dab958d",
"assets/packages/awesome_snackbar_content/assets/bubbles.svg": "1df6817bf509ee4e615fe821bc6dabd9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "9f696ae5851448f122ae5843f20c17f0",
"assets/fonts/MaterialIcons-Regular.otf": "802897b3ae944685a846f31ae01d6076",
"assets/assets/images/sa_flag.png": "92e80a6f479e81d17ac96df530b628da",
"assets/assets/images/logo.png": "0ee66619eb2fdd509e21e074e340fc55",
"assets/assets/images/email_icon.png": "dc5bd101c0833fda1ca3b83e435b8834",
"assets/assets/images/phone_icon.png": "286fb922c7573738e92cb38597bd3b20",
"assets/assets/images/banner_logo.png": "f04ffec56e5da4abbe04ed136d8d796f",
"assets/assets/images/rabbah_curved_line.png": "8039f5c49b1c49632bae246751250ee5",
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
