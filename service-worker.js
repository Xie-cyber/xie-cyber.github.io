if(!self.define){let e,i={};const s=(s,a)=>(s=new URL(s+".js",a).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(a,r)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let d={};const b=e=>s(e,c),n={module:{uri:c},exports:d,require:b};i[c]=Promise.all(a.map((e=>n[e]||b(e)))).then((e=>(r(...e),d)))}}define(["./workbox-f2efd100"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"2023/02/10/hello-world/index.html",revision:"b8602bcad6e3fe15185ea4a755a819a6"},{url:"2023/02/10/test/index.html",revision:"0c463297b1136cb8b2d786e35539eb63"},{url:"2023/02/10/第一篇文章/index.html",revision:"193cd6dcc228d6e7fc47ca728523b840"},{url:"404.html",revision:"89fe775afb823915a6d926a7836c79be"},{url:"about/index.html",revision:"85ed2bb9d7f25844c742afd3f4f24bd6"},{url:"archives/2023/02/index.html",revision:"b15c611dbebb68d2c8f5cd9baa90ada8"},{url:"archives/2023/index.html",revision:"ef8ecde5017a596f3982cbcbaa3ff6de"},{url:"archives/index.html",revision:"8c0222fc02d4c6a4b20708a515f97b06"},{url:"categories/Hello-World/index.html",revision:"eb77f64a46aa70b9a34f66094a50e3b7"},{url:"categories/index.html",revision:"7507b88f2967c50ad51d632e6bd13a21"},{url:"categories/测试/index.html",revision:"2db1c2692a9756af4c0b477233298226"},{url:"comments/index.html",revision:"ffe8f7d0f32c37bac88029dc4b57bf34"},{url:"css/custom.css",revision:"5989cdd66624061a00a7b6fb1684a195"},{url:"css/index.css",revision:"253e50f95698a3a738cc9505135b3ced"},{url:"css/universe.css",revision:"634bbccd301760e7e1d016c7a5512783"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"images/index.html",revision:"06abd5dbd094fc3488971d707a741763"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"index.html",revision:"a67f3331ec7a03b86b3f11e48183aa1f"},{url:"js/console.js",revision:"60f3bbc15605d00d1a0187f8bd2d165b"},{url:"js/day.js",revision:"6e1a70e098c42879345274dc082bac3e"},{url:"js/jquery.min.js",revision:"4e9c95f284f45d2dadd1457f96fe2536"},{url:"js/lunar.js",revision:"8353ac61594d36f20bc0f4416d0ae2fc"},{url:"js/main.js",revision:"88aced9e00713346dbf5f92453a349b2"},{url:"js/sakura.js",revision:"31aa5f4e3b8106053be7dbb5b3e797cd"},{url:"js/search/algolia.js",revision:"786b8da5325888c55c04e6b6687bf9f5"},{url:"js/search/local-search.js",revision:"aea55acb22a3b51ad16057b0ea52c0a9"},{url:"js/snow.js",revision:"9908eb21be1800f8098047467d284e03"},{url:"js/sweetalert2.all.js",revision:"62b91d30247af33b92184b4ec8e8caa4"},{url:"js/title.js",revision:"55bfb337563d712580c7153e31a6faaf"},{url:"js/tw_cn.js",revision:"bc064917c366036544975274bb20a01d"},{url:"js/txmap.js",revision:"b1cca5f5820d5986defc8ce5a25cb31e"},{url:"js/universe.js",revision:"f7c885843b78012c3066320c6088b7b1"},{url:"js/utils.js",revision:"e95ad73d5170f72ae1596b3d9abb7ed3"},{url:"link/index.html",revision:"0cf4d7b3da8000ea7b032499bda9070a"},{url:"live2dw/assets/moc/wanko.1024/texture_00.png",revision:"10b7047251205db46fdac7632b5d4642"},{url:"live2dw/lib/L2Dwidget.0.min.js",revision:"32973883fcac0a9ae6cc79c0ea25fda2"},{url:"live2dw/lib/L2Dwidget.min.js",revision:"094cbace49a39548bed64abff5988b05"},{url:"music/index.html",revision:"83f1dd403a5a08578371ef95b352455e"},{url:"tags/index.html",revision:"6c58f4b9ad325f85178a1a7cc6efd64d"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
