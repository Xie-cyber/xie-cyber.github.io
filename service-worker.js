if(!self.define){let e,i={};const c=(c,s)=>(c=new URL(c+".js",s).href,i[c]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=i,document.head.appendChild(e)}else e=c,importScripts(c),i()})).then((()=>{let e=i[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(s,d)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let a={};const n=e=>c(e,r),l={module:{uri:r},exports:a,require:n};i[r]=Promise.all(s.map((e=>l[e]||n(e)))).then((e=>(d(...e),a)))}}define(["./workbox-f2efd100"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"2023/02/10/hello-world/index.html",revision:"73c3b8ed3f8f7582a35633c14d314e71"},{url:"2023/02/10/test/index.html",revision:"f81ecff71754678cb1200f8d266db0a9"},{url:"2023/02/10/第一篇文章/index.html",revision:"97941078314cfc710eef8007f48f4d43"},{url:"404.html",revision:"2b1c50e944f9fd64c8dd61485b6d924a"},{url:"about/index.html",revision:"608221aad867587f0aebbec2aeeeb20c"},{url:"archives/2023/02/index.html",revision:"3b7cbcd3009a0caf230c48b3391ee9a0"},{url:"archives/2023/index.html",revision:"0b0d2226d220a123ade727d995b7a574"},{url:"archives/index.html",revision:"f051f04070d2806e0399d6ac44e1f7fc"},{url:"categories/Hello-World/index.html",revision:"3b00f80a04103ce29127bb16a9b56bd7"},{url:"categories/index.html",revision:"1bf62dd3fc9531bfbf8eaef5f9332828"},{url:"categories/测试/index.html",revision:"64237e924308d71ae24ffb3cc64e88da"},{url:"comments/index.html",revision:"dc2d99cb67c68d82783a750c64621bcd"},{url:"css/custom.css",revision:"7451d0572819bd87eb62a1d65cce3733"},{url:"css/index.css",revision:"253e50f95698a3a738cc9505135b3ced"},{url:"css/universe.css",revision:"634bbccd301760e7e1d016c7a5512783"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"images/index.html",revision:"14fe6b55b44a95000eea6cca66979fbe"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"index.html",revision:"4dc20d959cc74d7dcbf3499890142bc8"},{url:"js/main.js",revision:"88aced9e00713346dbf5f92453a349b2"},{url:"js/search/algolia.js",revision:"786b8da5325888c55c04e6b6687bf9f5"},{url:"js/search/local-search.js",revision:"aea55acb22a3b51ad16057b0ea52c0a9"},{url:"js/tw_cn.js",revision:"bc064917c366036544975274bb20a01d"},{url:"js/universe.js",revision:"f7c885843b78012c3066320c6088b7b1"},{url:"js/utils.js",revision:"e95ad73d5170f72ae1596b3d9abb7ed3"},{url:"link/index.html",revision:"b129ee29ad1f25c1b7bfaddc67c27eb8"},{url:"live2dw/assets/moc/wanko.1024/texture_00.png",revision:"10b7047251205db46fdac7632b5d4642"},{url:"live2dw/lib/L2Dwidget.0.min.js",revision:"32973883fcac0a9ae6cc79c0ea25fda2"},{url:"live2dw/lib/L2Dwidget.min.js",revision:"094cbace49a39548bed64abff5988b05"},{url:"music/index.html",revision:"f057fc9a9821bd94ffa16c05b300877d"},{url:"tags/index.html",revision:"2c2fec1a259d27889c069c0abf97f5c5"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
