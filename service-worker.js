if(!self.define){let e,i={};const s=(s,c)=>(s=new URL(s+".js",c).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(c,r)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(i[d])return;let a={};const n=e=>s(e,d),f={module:{uri:d},exports:a,require:n};i[d]=Promise.all(c.map((e=>f[e]||n(e)))).then((e=>(r(...e),a)))}}define(["./workbox-f2efd100"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"2023/02/10/hello-world/index.html",revision:"29152d87279c16214494478225310a07"},{url:"2023/02/11/Unity3DRPG01/index.html",revision:"64e118642a01097b434734ae0412aa57"},{url:"2023/02/14/Unity3DRPG02/index.html",revision:"543a846116a5934031755bffa6cedfae"},{url:"404.html",revision:"5c760fc911674acb6779809acfbf1d13"},{url:"about/index.html",revision:"d4c3b8b93f0f224252d377e564bc13d1"},{url:"archives/2023/02/index.html",revision:"0d25df0d2022ac7d335ea57373fdcec8"},{url:"archives/2023/index.html",revision:"253184f69bb7016d02cda2ec9f78c085"},{url:"archives/index.html",revision:"232032547c05d25627db8a9bbd342c30"},{url:"categories/index.html",revision:"96c5af270f2318d2310baaae5d33d935"},{url:"categories/Unity/index.html",revision:"ddde34f8b8cd4130cba1f00d706fc74b"},{url:"categories/测试/index.html",revision:"aa41ee5f7fee061f50a0ff9bb5c17368"},{url:"comments/index.html",revision:"30d7d6b3f426ce3620ddb541c5ab1474"},{url:"css/custom.css",revision:"1191a06d828ca1d3e26d6d2d8fde701c"},{url:"css/index.css",revision:"253e50f95698a3a738cc9505135b3ced"},{url:"css/universe.css",revision:"634bbccd301760e7e1d016c7a5512783"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"images/index.html",revision:"459fc3cb36a8583ccdb192f969ae5ee0"},{url:"images/wxzanshang.jpg",revision:"f3c5716c1baa73d19bda27d8140f81dc"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"index.html",revision:"2a9d6ff11c4d5e6af0ffb096019578fb"},{url:"js/console.js",revision:"13ec92096065efbe667dc10e8664a938"},{url:"js/day.js",revision:"6e1a70e098c42879345274dc082bac3e"},{url:"js/jquery.min.js",revision:"cf2fbbf84281d9ecbffb4993203d543b"},{url:"js/lunar.js",revision:"8353ac61594d36f20bc0f4416d0ae2fc"},{url:"js/main.js",revision:"88aced9e00713346dbf5f92453a349b2"},{url:"js/runtime.js",revision:"c56d36bcabbf816babcf545773c292cb"},{url:"js/sakura.js",revision:"21a1663017c8d71b11ca2f6209c69590"},{url:"js/search/algolia.js",revision:"786b8da5325888c55c04e6b6687bf9f5"},{url:"js/search/local-search.js",revision:"aea55acb22a3b51ad16057b0ea52c0a9"},{url:"js/snow.js",revision:"9908eb21be1800f8098047467d284e03"},{url:"js/sweetalert2.all.js",revision:"2be0bb0197fb862f68859f467b14523e"},{url:"js/title.js",revision:"77c3d5b149e8fb0780ab78b6b08cf986"},{url:"js/tw_cn.js",revision:"bc064917c366036544975274bb20a01d"},{url:"js/txmap.js",revision:"863115de3fbf06f9c14696f6aac92231"},{url:"js/universe.js",revision:"f7c885843b78012c3066320c6088b7b1"},{url:"js/utils.js",revision:"e95ad73d5170f72ae1596b3d9abb7ed3"},{url:"link/index.html",revision:"a1452488054c7ae5c36679f1056ac25c"},{url:"live2dw/assets/moc/wanko.1024/texture_00.png",revision:"10b7047251205db46fdac7632b5d4642"},{url:"live2dw/lib/L2Dwidget.0.min.js",revision:"32973883fcac0a9ae6cc79c0ea25fda2"},{url:"live2dw/lib/L2Dwidget.min.js",revision:"094cbace49a39548bed64abff5988b05"},{url:"music/index.html",revision:"f7afbbb8a7318009b602dc443dfda271"},{url:"tags/index.html",revision:"36c3fc33529c716915f6864bddeb0f5b"},{url:"tags/Unity/index.html",revision:"ee1d470ce3c89fcff7531d36a5c958f6"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
