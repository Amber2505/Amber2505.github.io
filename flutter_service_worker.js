'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "6215bf604b4985a360640ea6c276ddfb",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "e8041125136881323691ab739af75958",
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
".git/index": "fa0a3c8a4dd0fd1bef025c7f0682a170",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "2e1dda2a812df9c9830d78064027eb6b",
".git/logs/refs/heads/main": "9405b5e31a6f748214a5fea7aaa292af",
".git/logs/refs/remotes/origin/main": "549ae9f081735e151e9b136f1cf638c8",
".git/objects/00/18f535545d5c93c727910d29fbaf4984b82599": "20d404aac5e2407dd1a288061657d43a",
".git/objects/06/ceefc3c9f65a3985805013e4785497cfa56a5a": "a78b75158c9f6cd6252d43d9d832112d",
".git/objects/09/7e143d7c54269e5ba7e0db7c93c6508f7153b5": "03590dfa3aa2855f07aaf1c905d95e73",
".git/objects/19/3436fb76a1228bb30a429340e41a233cffd902": "f99e45dd13aaba9a0aa6086c3ff50bf4",
".git/objects/1b/877839394171af5fa202b01ddbfc3e5fc96a4b": "9c3bd8ec88f477a27a73ac9957ef9cce",
".git/objects/1d/727c276b88c41463b3a54c736ba3bec6e03bc6": "5779bb9bc8470a91f374c90747e1f1c6",
".git/objects/1e/d73eaac9518881dc7dc695679275d9909e0af5": "6878fc5414613fa4964d1f8a684f35e4",
".git/objects/23/b97be4bbface5d7759055f288659cf5f929f36": "bf8fd7825e2e8674dc4c97e874079f02",
".git/objects/26/dcbec365fcde7f060723a19d72f2219eaad6fc": "c0e44d5e215e193f717c308cd00673ca",
".git/objects/29/4e859a2cfb3640eeb5a7cf936e0c9d5d7467ea": "2059119dc8adc9b3752131f7c88101c4",
".git/objects/2a/0ee943646b5cf89dfd98f039fa31827880f39a": "a853afb99aff85b2207e52645fc8c08c",
".git/objects/2e/02240198872148955de7573e9e487b90b5547a": "cab37ebb3db9ce91008ef1b4b0a170ee",
".git/objects/31/13c224d06aade7471c94995455874340b6908e": "5d4ab6ca2152d04878c709f63ea65ded",
".git/objects/32/0c37ae8b57efd2b3ddd74ab2a39b600e27dddb": "a0c8157d9c72c2fed20eb18d93eaf64a",
".git/objects/34/b16bd0f93e550e8cbffc6f2b4c7b88986e2c91": "e57694810c586699d774232a6f1cf265",
".git/objects/36/023b1b5daa0241aab3b7285fe7ba5e830f430d": "174d3223851bd34b5e53bfbbd75de17c",
".git/objects/39/a0d5385024ace42a23958f69cd5d79de6f8845": "839ccbed6c46765ddcfa86623c6385bc",
".git/objects/39/a57ee02052eca88bacf20e81cf39b5a4c714ed": "6a37760aeb58341866ed3080aae3bf8e",
".git/objects/39/bd94cdfed97d31b4f62adc74e81ac491315f0d": "90b6e28379304b578c2e02af5ac87106",
".git/objects/3a/0835a28a4dd03d3c88e71bc5f7a7479fd58cfd": "937d5548d7d1eda75304f6f109f614ec",
".git/objects/3c/426330d6c5c986317d15bb1f648baf3a3914a3": "ecea654a7bd688ca2e4db8eeebdca306",
".git/objects/3d/290aa375a9d75b4e4e6f69fa2bb1a0dc8b9126": "50d1d8a95f032e2e1352e9ae14d8a0c6",
".git/objects/3d/32d31f42684620ad48525caf3fd09b5876316e": "1622bf9dd6e016f629f15d90930842f0",
".git/objects/40/f1694ba4c97cdfaaa99a6459feab9a24614586": "aca2ed34561ba1ba8fc7d7674cd50113",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/42/84069be945259b9ba64f25ff3bf32d92179116": "ce7ac6d7f4f53364346ab28d3414d9b1",
".git/objects/45/8fb589857a1f50891e7511208815ca19c2dcb5": "00c8cb049909fd7b2c7548e137b0ba24",
".git/objects/46/854ec8c87d07a84bfa2391820e40b1272c0720": "8954f818db374f031c3dd4c4107cf1a7",
".git/objects/47/89eaba3e90bc77f15d1fba64f05f6983d2a31f": "999fd192b794a47e288682ced7884648",
".git/objects/47/a60e7cb578e6a50e8cc3329b018ce9245b8d2d": "60f00846cffc84f232ba77b1bc1b6f5e",
".git/objects/48/0776c9f255e8f290555f19030b94ece0537b21": "1ef5b9015b0b229f05fdd9264399e39b",
".git/objects/56/decc42af996684bea7ddec599ee0a0cb2f18fb": "41dca95fad5786f658516f652002dcfa",
".git/objects/58/a90ee5c96114307c13614846fa9fce7993ae47": "8881f508ba0d259d12ef80580aea7c1e",
".git/objects/59/cbec2c80d630f7613c4f9df72ee843748d8388": "a2f4f595e14d5d8f4fea5d8fbba79b60",
".git/objects/5b/ba872c29722e7b455de2405b1dc98679da6ee1": "a3f9c4d2ddd1102b1f3554db4cd081a3",
".git/objects/5c/03fc53a82d8d692d06e38835d60fcfcc8497ae": "045cc21b79498e0cb8cd8933f3aaf3e3",
".git/objects/5e/327c56467157099dea78409d0837f00c9ed5de": "da6a55902a8dc99ac13f0b78deeff694",
".git/objects/60/ef03acab84c1bc471b1001dfd115810dda9a25": "efdd5726b0831a3b7dbfcc37314b7040",
".git/objects/64/b2cab5aada8be6a52cd2a5534768d312df591e": "703dc4ef98e0fdab32010eab33d37664",
".git/objects/68/83cd9e9865cf6a7733d836803a62769043846e": "e43f082283358b841b22010edc2a77e2",
".git/objects/69/0b0720c765a0883d820f987b114b23cb90c508": "8b775f5a555e703ef5963baa6b0221af",
".git/objects/69/75b4418ef95c6489b913e4d4ce2b29c891fa66": "a14eb304cc219a2c2b7cc16aba180acb",
".git/objects/69/fe993993cccf3d581cc626de1050349184245a": "c10cc8e5ade6721a1df16d9f9846b85d",
".git/objects/6e/3c0e76b4004e0768709169ea116fd0419634a6": "a45db0ccefd12e70d290b400374e3727",
".git/objects/6f/b253eb019f1378e5bf157bd01ff778341a65b2": "d5ea832d4f9e3361deccb7ee568bc9a8",
".git/objects/72/65042fec08b57a2f6730e1e87b45bbd91dccf4": "a2b1b512ceb492653494ec55a9fe7e58",
".git/objects/74/fce7ebedfd2c5672db4da95384e96405f8ab30": "a254dbd92c883ac02f36a9e37a114f9e",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7e/d3e445f88cb1c21d37d5e1571862df77b7d6c1": "2f39266fc5893edee23798fb69ea0c1a",
".git/objects/87/34889aeaff19fc51e7a0d71b1f5c4d3e89767a": "08148bfa1f50e381a1e6f97390d0d00c",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/5969ae4b2118f64a99186e10e0bc3a51cfff5c": "474fcaf8fb638a3ff74592d4be37722f",
".git/objects/89/f4f5c897494eb553217128e558b6a5d0b07ad3": "4ffbe43a3a2c0120ca55f062073bd614",
".git/objects/8c/35569404cf61b209f0e06e5565c2328ccba1c3": "477911a0009d3267f578398a332e1de0",
".git/objects/8c/4ac6b78172f42073df5c67697ff72c318c7f3b": "5f5680d16a9e9ef470fd8d01699951cb",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/90/076c146fcc2860b165dd06cae9a63e8fd8d55b": "5394a5aa8b19ab7c78d1e82c2762919f",
".git/objects/92/79d0c28846c8042fa6d452b42499aee72d3297": "545cee463a55305127288874dc96bc72",
".git/objects/92/df690e8b3d3508714e7a31b574e043e33a7008": "c5e310d933ced7673243ea9ddb00f8b3",
".git/objects/93/f9a56e326984228a74a974396346d220f55bdb": "2640402bab3ff8bb6b361522816e162a",
".git/objects/94/26dc263564f0beecead9917589d770c0f955ea": "aacceaa83a2a8053263e08e6778064e9",
".git/objects/99/1c8979d168007b04f944492bb3d263764319ef": "c02590c7b7e8b8eada25f6c107e7ead2",
".git/objects/9b/e22f69005b5081178dc2f0fbef104e5aab417f": "931b66c0a5ce191573f02e1837568c46",
".git/objects/9f/ed22062638b732ab6411dee8fbff56abfbb6e8": "68312b0d601bc5010d126d31dd54e990",
".git/objects/a0/866d2b463ad80a9b588f1bd7286a260e937e46": "43bb8886a4659f6cd9415f5a79875037",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a9/75e953af6c86e67d7e8fc5565d92a8896f2f96": "9987d750cdc7ad00ed23ea6723847acf",
".git/objects/a9/d72a2a36cb01875bfc5fd883abde506ed85bde": "00c125f340c63d470b9ed74720c2e43f",
".git/objects/aa/9aa95a850456441f60ec474021276482efa8b6": "e574fc01ab1d903682ceffd6e78e9eec",
".git/objects/ab/3d3eaffeebb554130cc4ceea74adc42b1779e8": "0a7c42df538eee5f351dd3bec4e1a76a",
".git/objects/ad/95df3928462a254a051aec9c835d90ccf67e0d": "705b2ca126c4254b298a5d0523c66a29",
".git/objects/af/69330dd904526d2ea728a5e916246f98132653": "e7929af41f11fdd29d8c5b0dbf66cbff",
".git/objects/b1/3a242c8f307c1a9e200b187299b08d1ea26c92": "ee7924a962b1d413efed508f90ff2f6c",
".git/objects/b5/a11cc90243b9d3895590c80d8c6baa2e7f32dd": "256dcb9555d576f38be2e8007208a1b3",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/696a29f97411d7e5b019fbd11f9ef47c921824": "c1db11e2d83f9d88b554849922badb91",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/482b998e7bee3a268fb395e09c4ebc557c3bd5": "2077f59e40fa76552131460e4f39ab12",
".git/objects/bb/c992f52c48955817f93a567982645fac0d5ecb": "0e1a6f8ea84753e279cbfddb993fb41b",
".git/objects/bd/21eb5f5ad74a4e12a26ba9645c38d1a993c983": "148f45a2579b4e794ecdc91b385764f2",
".git/objects/be/faae1542ae02cc9cfa24c7bd9e51b4f82b574f": "cbf525a0e7fad16d13b45bcb15900c7c",
".git/objects/bf/4d0d9fe88e8a5e3675eda2f695f1ad9767fc49": "d6128c42081ea83e3835faf7ac2e7a70",
".git/objects/c2/55cabd52486b3e59b9551e6f101d50b7f1168b": "e130b5763142dc6618a28c74085ee7d9",
".git/objects/ce/d33f1c1a83d80a29df671f7005747c7ab25a85": "353b0ef85db48df76367050816d3e6a1",
".git/objects/cf/0364879b7b5514d52d0a2f61b4b482dddb88ef": "be51b26562f31aa92bf19945efdf062e",
".git/objects/d2/3b4c73f767a0c879e4eb0c1f71c4935a7a8cf3": "10267415d933fc5e51aed976519d4480",
".git/objects/d2/8f2c33a9a1f06360b44b5fd49009ebe494d60f": "9e7e5b06d6f4844a220af8f05d843ece",
".git/objects/d3/0a5b97d2d7fa7182ce7f75b6d98224d6c11ed2": "932a713c79720ef0968715f1772edca5",
".git/objects/d4/04c9877883f4efbf85b8497ef157f17374e1c7": "c928ee4cfb7f9e358f64360f4ebdd098",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d9/bbd770c4552ab3bbf695277f9d459c3ed3a434": "f3009a656f2b013cefc4a26d036efaa5",
".git/objects/db/940661bbe84440d81cfea786e7a731bc95b7ab": "6f60448d956c54c2fbcab3a17d0b48c6",
".git/objects/db/e1e01a3bc871a19ef0b094bbb6fe8d29a7ac6b": "8fdbc49f95de79178ac5385e96b4936e",
".git/objects/dc/c284222dbd985e698b70278f48024266a88a9d": "d04f4d8df0973d43d2836a994052adb4",
".git/objects/dd/3cd9295e2d020fe0d73088041e92d1984d2156": "097c5a4abccfc18e6f1036066cdd54ee",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e5/de90479565e49adc93bb40b3d745f4d8b7bf8c": "c9d64c346ce758b11ffdc8fdafd0e491",
".git/objects/e8/2a1639107f371aaa31888aa7db2a96b17d6c07": "99cc83ab5299c53438e1b5bf9426bd88",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f0/1ac77b29b5bb6a998b2043122269239ac2b71d": "a206cff5894a545415ef6ec83ba6e532",
".git/objects/f1/2739d893e6e5f2e8de0db8e70d39cbee9dfcfc": "ae85037450b2baf4a717f04e8bfdb5f0",
".git/objects/f7/39206b1c0da150195fbb69ad23d611374908f3": "8222f16fe02b3f7d4c71892b847661ec",
".git/objects/f7/88ae6696d3c699cb99cde75e31f59692c908cf": "92ef06b7caafecad2aa326a9178147f8",
".git/objects/f8/4be01cc187cb6b7a0c25f7200e4b2ca2f2ff41": "642d5ae67890dd11be5e5bb7b83c832c",
".git/objects/f8/95cf33b5153b6154b542c1e1b7162e8d15c860": "c083f6edbbc61f64cf598bdd4e347e7b",
".git/objects/f9/8fe529ba21f10cc61cd3de486d8ae8744f8a8d": "15f67023021089a9f1e09bdb2b33979d",
".git/objects/fa/318773cfdc8f717544b7967d9b5d107a8bab2e": "15f47a9293df612b6545b267bf52a7d7",
".git/refs/heads/main": "07eb6a81dad413eaf6d0e94270a43edd",
".git/refs/remotes/origin/main": "4b7f3d68a36bdec39ddf7db9ffd2070e",
"assets/AssetManifest.json": "09a9508b5479a0ee16515ae0fe9815ef",
"assets/FontManifest.json": "3c6f2aec284ba6e927fd5e00fb6c4257",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/images/10136775_17973908.jpg": "f46aa65e1b82be978cf7cdb76d66c5fc",
"assets/images/Advanceautosolutions.png": "178640a06c707d452be6f435cf92216e",
"assets/images/background.jpeg": "90fe0192ac73529d192ed87518c89c62",
"assets/images/carInformation.png": "ddbd8c35816120fd29a6c5c4e3dc919c",
"assets/images/CustomerService.png": "c476f83fdf53788a0ec6258cbca132db",
"assets/images/dollar-bill-white.png": "390ab4a7dd016a7b77b7d654ee9e061d",
"assets/images/driver-license.png": "e1929a63971dc33162cf46338114d9dd",
"assets/images/drivers-license.png": "f0b5ea3520baebb0a046482b509612f9",
"assets/images/file.png": "9a886ec4a9522ad52a4f9f5511312599",
"assets/images/fotor_2023-2-17_1_43_53.jpg": "9621f84e2b63acca67b7765ff51ec28a",
"assets/images/friendrefer.png": "7bf8dbc883eb7dd6785560e5c95f4a41",
"assets/images/google.svg": "752536d8059d2a92ec94472b9b6de366",
"assets/images/ImpDocuments.png": "17a84e5f9e6588c6754b4d56e7702b3f",
"assets/images/information.png": "33d810ea9654ddd688b19169afd88479",
"assets/images/interiorpurplelogo.png": "e8434bd1e36feaaef255f583f00d5123",
"assets/images/license-plate_gray.png": "8e3449d5be4204b8a0742f7003fcceea",
"assets/images/licensePlate.png": "c36bf92124c9e33b04dd540cb59c1204",
"assets/images/LogoMakr-0Cqgpw-removebg-preview.png": "e9cb8e044e90ec650ea7fb67ea71b532",
"assets/images/LogoMakr-5tThma-removebg-preview.png": "3b37d269483bad08259a5b1a08816415",
"assets/images/logopurple.png": "8720fb845a3cf2b446141974d9783fff",
"assets/images/newaas-removebg-preview.png": "458176c8c2bd7b05832f87c6a3e2242c",
"assets/images/notification.png": "eee8596d28021aa4f44ea581a6132dd1",
"assets/images/personal-information.png": "8abc6259c535013f12fb9786fcc31189",
"assets/images/referfriend.png": "1d96a90345ac5ccb4e28f9f3060e294f",
"assets/images/referral.png": "0a41e5b2b7508c20025400edd8c9af7b",
"assets/images/refersmall.png": "ce2b7f21c11b758a441920ecd661c029",
"assets/images/reminder.png": "2bcf06fe60e0371b28f35f7125ed9a08",
"assets/images/reminder_message.png": "bc7f0dcd2e441e2a4a9310b48b4e25da",
"assets/images/search.png": "253f698a5438ad578cd0141ccf6fa00c",
"assets/images/shredder.png": "4c1390c6d408d3df3f4a78c00675c513",
"assets/images/slideshow.gif": "ad5850c119161b53c2ed9eb4a93a9bf0",
"assets/images/speed.png": "b3de974f83c8b4be7cd93592f3031189",
"assets/images/sven-d-a4S6KUuLeoM-unsplash.jpg": "6ba6b147ed345cceb90ab03f5d74f014",
"assets/images/url.png": "7a56d53b12e2dc8d50b948dd2dc0a9ae",
"assets/images/video.mp4": "248090a38d81e3c312b562410a60c9f3",
"assets/NOTICES": "759098bfe61c9db9c82129a99f95e196",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_google_places/assets/google_black.png": "97f2acfb6e993a0c4134d9d04dff21e2",
"assets/packages/flutter_google_places/assets/google_white.png": "40bc3ae5444eae0b9228d83bfd865158",
"assets/packages/iconsax/lib/assets/fonts/iconsax.ttf": "071d77779414a409552e0584dcbfd03d",
"favicon.ico": "2714a79d42abac638048ba69735d4f75",
"favicon.png": "458176c8c2bd7b05832f87c6a3e2242c",
"icons/Icon-192.jpg": "9c14cca803ddb0f1c426e3b398dcea49",
"icons/Icon-512.png": "9ca1069125f05a8c25fc39516575c137",
"icons/Icon-maskable-192.jpg": "9c14cca803ddb0f1c426e3b398dcea49",
"icons/Icon-maskable-512.png": "9ca1069125f05a8c25fc39516575c137",
"index.html": "6ee1ec5bacd2ebc778994b306d418971",
"/": "6ee1ec5bacd2ebc778994b306d418971",
"main.dart.js": "962f6a8ec5cb6e0660eb5567501e6c10",
"manifest.json": "803cfb321663c9c500f95d11734173b1",
"version.json": "4dcd9cb46b3e4014e4d116b41bf0c443"
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
