if(!self.define){let e,i={};const s=(s,r)=>(s=new URL(s+".js",r).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(r,d)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let a={};const n=e=>s(e,c),b={module:{uri:c},exports:a,require:n};i[c]=Promise.all(r.map((e=>b[e]||n(e)))).then((e=>(d(...e),a)))}}define(["./workbox-f2efd100"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"2023/02/10/hello-world/index.html",revision:"03793f3ebb4da9e0eb58f4cd95c15882"},{url:"2023/02/11/Unity3DRPG01/index.html",revision:"8ea29ccdedf22bf0d0c45e8d051c0d40"},{url:"2023/02/14/Unity3DRPG02/index.html",revision:"7689b858f4d2c78463208428969aa606"},{url:"2023/02/15/markdown语法速查/index.html",revision:"1911b4621abb0e20f352576aafb62563"},{url:"404.html",revision:"a96d3a18d90e774d629045a0db76d469"},{url:"about/index.html",revision:"b15d3cb9b8262c5816939cb0ff10bd39"},{url:"archives/2023/02/index.html",revision:"120045d83d07ed4f499cbc0b7a9d87e7"},{url:"archives/2023/index.html",revision:"c08b375a145e8013d7c8cf0177202584"},{url:"archives/index.html",revision:"c309e4d9c5b7e463ffe56a0635c2b0f5"},{url:"categories/index.html",revision:"450aea6166d22ab06aec685d93f60023"},{url:"categories/Unity/index.html",revision:"77d4e47dc4317c72980b1d8e29a2d945"},{url:"categories/测试/index.html",revision:"624efb67a7eb0e30ea686faf404160ac"},{url:"comments/index.html",revision:"fa46ed7c3f7096152cb364706ded3f38"},{url:"css/custom.css",revision:"1191a06d828ca1d3e26d6d2d8fde701c"},{url:"css/index.css",revision:"253e50f95698a3a738cc9505135b3ced"},{url:"css/universe.css",revision:"634bbccd301760e7e1d016c7a5512783"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"images/index.html",revision:"cd1d78ebdde11463b0b7b2b6890c4bab"},{url:"images/wxzanshang.jpg",revision:"f3c5716c1baa73d19bda27d8140f81dc"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"index.html",revision:"92bb35dd09b1dbdacf150d68a4afb302"},{url:"js/console.js",revision:"13ec92096065efbe667dc10e8664a938"},{url:"js/day.js",revision:"6e1a70e098c42879345274dc082bac3e"},{url:"js/jquery.min.js",revision:"cf2fbbf84281d9ecbffb4993203d543b"},{url:"js/lunar.js",revision:"8353ac61594d36f20bc0f4416d0ae2fc"},{url:"js/main.js",revision:"88aced9e00713346dbf5f92453a349b2"},{url:"js/runtime.js",revision:"c56d36bcabbf816babcf545773c292cb"},{url:"js/sakura.js",revision:"21a1663017c8d71b11ca2f6209c69590"},{url:"js/search/algolia.js",revision:"786b8da5325888c55c04e6b6687bf9f5"},{url:"js/search/local-search.js",revision:"aea55acb22a3b51ad16057b0ea52c0a9"},{url:"js/snow.js",revision:"9908eb21be1800f8098047467d284e03"},{url:"js/sweetalert2.all.js",revision:"2be0bb0197fb862f68859f467b14523e"},{url:"js/title.js",revision:"77c3d5b149e8fb0780ab78b6b08cf986"},{url:"js/tw_cn.js",revision:"bc064917c366036544975274bb20a01d"},{url:"js/txmap.js",revision:"863115de3fbf06f9c14696f6aac92231"},{url:"js/universe.js",revision:"f7c885843b78012c3066320c6088b7b1"},{url:"js/utils.js",revision:"e95ad73d5170f72ae1596b3d9abb7ed3"},{url:"link/index.html",revision:"8e6605d9933f52e851447ff7582f0c14"},{url:"live2dw/assets/moc/wanko.1024/texture_00.png",revision:"10b7047251205db46fdac7632b5d4642"},{url:"live2dw/lib/L2Dwidget.0.min.js",revision:"32973883fcac0a9ae6cc79c0ea25fda2"},{url:"live2dw/lib/L2Dwidget.min.js",revision:"094cbace49a39548bed64abff5988b05"},{url:"music/index.html",revision:"5258a8f889db1443329866b0a1e98510"},{url:"tags/index.html",revision:"52848dd1a3c2f5bdb16b46390e185e30"},{url:"tags/MarkDown/index.html",revision:"a0f5a95a3b90d6173313e2b89dbbcf17"},{url:"tags/Unity/index.html",revision:"e135c9305f12786a0f20141b55e138a5"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
