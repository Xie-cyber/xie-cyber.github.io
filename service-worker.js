if(!self.define){let e,i={};const s=(s,c)=>(s=new URL(s+".js",c).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(c,d)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let a={};const n=e=>s(e,r),l={module:{uri:r},exports:a,require:n};i[r]=Promise.all(c.map((e=>l[e]||n(e)))).then((e=>(d(...e),a)))}}define(["./workbox-f2efd100"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"2023/02/10/hello-world/index.html",revision:"4ace8c41027b83de91e256095ce56105"},{url:"2023/02/10/test/index.html",revision:"cf5fac0364e34b13655e2fd88e6d190e"},{url:"2023/02/10/第一篇文章/index.html",revision:"cbb8d6ba09fded5482c4fc4dd2b9d153"},{url:"2023/02/11/Unity3DRPG游戏开发日志01/index.html",revision:"922ddcf2c3f83b6c927175c31a9c21a5"},{url:"404.html",revision:"4efabcd24ec9402a20d51e809fced389"},{url:"about/index.html",revision:"d8a2f45940cb1e231588fb6eebffc904"},{url:"archives/2023/02/index.html",revision:"74226e4331be10330f04742348895673"},{url:"archives/2023/index.html",revision:"b4d32d0aa51775a4d899f8db19148d10"},{url:"archives/index.html",revision:"dfd1901dceaa4cee3d5fce0636c95583"},{url:"categories/index.html",revision:"0f4a95dd9cf57922a95df24f5b911390"},{url:"categories/test/index.html",revision:"b2e9312b77f75d051b9a2369cc6b88ad"},{url:"categories/Unity/index.html",revision:"c9380f2d34a8a060f00ac2ce5e9a87a1"},{url:"categories/测试/index.html",revision:"54b6213af6e3853b294e10401cedfef3"},{url:"comments/index.html",revision:"83fb3540daa370c3cf73d0a58a996e7b"},{url:"css/custom.css",revision:"1191a06d828ca1d3e26d6d2d8fde701c"},{url:"css/index.css",revision:"253e50f95698a3a738cc9505135b3ced"},{url:"css/universe.css",revision:"634bbccd301760e7e1d016c7a5512783"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"images/index.html",revision:"e94923704f35609223e406cc19ec7c0d"},{url:"images/wxzanshang.jpg",revision:"f3c5716c1baa73d19bda27d8140f81dc"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"index.html",revision:"e7723d0c508f4bfe69763b7a42abd50c"},{url:"js/console.js",revision:"13ec92096065efbe667dc10e8664a938"},{url:"js/day.js",revision:"6e1a70e098c42879345274dc082bac3e"},{url:"js/jquery.min.js",revision:"4e9c95f284f45d2dadd1457f96fe2536"},{url:"js/lunar.js",revision:"8353ac61594d36f20bc0f4416d0ae2fc"},{url:"js/main.js",revision:"88aced9e00713346dbf5f92453a349b2"},{url:"js/runtime.js",revision:"c56d36bcabbf816babcf545773c292cb"},{url:"js/sakura.js",revision:"db884323bb050dd0088c8f95dfb52d45"},{url:"js/search/algolia.js",revision:"786b8da5325888c55c04e6b6687bf9f5"},{url:"js/search/local-search.js",revision:"aea55acb22a3b51ad16057b0ea52c0a9"},{url:"js/snow.js",revision:"9908eb21be1800f8098047467d284e03"},{url:"js/sweetalert2.all.js",revision:"62b91d30247af33b92184b4ec8e8caa4"},{url:"js/title.js",revision:"77c3d5b149e8fb0780ab78b6b08cf986"},{url:"js/tw_cn.js",revision:"bc064917c366036544975274bb20a01d"},{url:"js/txmap.js",revision:"863115de3fbf06f9c14696f6aac92231"},{url:"js/universe.js",revision:"f7c885843b78012c3066320c6088b7b1"},{url:"js/utils.js",revision:"e95ad73d5170f72ae1596b3d9abb7ed3"},{url:"link/index.html",revision:"02259b90eb8f6049aec70be611f590aa"},{url:"live2dw/assets/moc/wanko.1024/texture_00.png",revision:"10b7047251205db46fdac7632b5d4642"},{url:"live2dw/lib/L2Dwidget.0.min.js",revision:"32973883fcac0a9ae6cc79c0ea25fda2"},{url:"live2dw/lib/L2Dwidget.min.js",revision:"094cbace49a39548bed64abff5988b05"},{url:"music/index.html",revision:"a63104506e267ce85447f07c3f3f807a"},{url:"tags/index.html",revision:"7f61db4797857d7bbc74dfe353a93e13"},{url:"tags/Unity/index.html",revision:"b641538ff11b0e11f31300470ed2e519"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
