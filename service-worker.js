if(!self.define){let e,a={};const s=(s,f)=>(s=new URL(s+".js",f).href,a[s]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=a,document.head.appendChild(e)}else e=s,importScripts(s),a()})).then((()=>{let e=a[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(f,i)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(a[d])return;let r={};const c=e=>s(e,d),b={module:{uri:d},exports:r,require:c};a[d]=Promise.all(f.map((e=>b[e]||c(e)))).then((e=>(i(...e),r)))}}define(["./workbox-ebf2f394"],(function(e){"use strict";e.setCacheNameDetails({prefix:"mr-hope"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/css/0.styles.49e04945.css",revision:"b4549c313accb302a9cf5a37941e0ab6"},{url:"assets/img/danger-dark.86c63c40.svg",revision:"86c63c4006d5cd5f860cdef57310696a"},{url:"assets/img/danger.1c7d8a0f.svg",revision:"1c7d8a0f45b8bee5d5b92334a16e2711"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/info-dark.a1decb69.svg",revision:"a1decb69db82fb8eebb48704dd74e649"},{url:"assets/img/info.6f2cfedb.svg",revision:"6f2cfedb8e6d19d1b24eb73943f7ff4e"},{url:"assets/img/note-dark.8668720f.svg",revision:"8668720f2e50ebd01173f11a89d9da6e"},{url:"assets/img/note.32319b2e.svg",revision:"32319b2e9c86860d8a4f1c8f660096cb"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/img/tip-dark.0d0028db.svg",revision:"0d0028db13caec45ac1527d8b673fae0"},{url:"assets/img/tip.a9004be5.svg",revision:"a9004be5a8a5a83cc9c77bba88c816ff"},{url:"assets/img/warning-dark.b995cb45.svg",revision:"b995cb45fa552ac10ad35fa7716af15b"},{url:"assets/img/warning.57a43d6d.svg",revision:"57a43d6dcdee07d8db78a5dd3d6137ba"},{url:"assets/js/36.68c6a453.js",revision:"7d701cd9e5079bebf9d94183b0ee8549"},{url:"assets/js/37.5aa9fa98.js",revision:"b729d52896be6fd445deb298912670ac"},{url:"assets/js/38.bf282b5a.js",revision:"f878150e2ba85e97aff83e39b8bf98bb"},{url:"assets/js/39.83721536.js",revision:"017f2ddb7b14bc548d19d58184b511ae"},{url:"assets/js/40.d830786c.js",revision:"edbb5a5cde77604dd9c60ed6982e1cd8"},{url:"assets/js/41.ccb7ff8f.js",revision:"ca6da820eed70966a79941dfdd83276f"},{url:"assets/js/42.ffd0297f.js",revision:"df7fe423adac6d306249223a6c79d7c5"},{url:"assets/js/app.1331b80b.js",revision:"269133f1611fee376d11d9913980139a"},{url:"assets/js/layout-Blog.9cc9b422.js",revision:"792a03312c4100877a040928f12c538c"},{url:"assets/js/layout-Layout.3729e73b.js",revision:"bef841937552d76ef6953e78dfc20711"},{url:"assets/js/layout-NotFound.9d7a46cd.js",revision:"e85228d567e2077d02ce19506395e833"},{url:"assets/js/layout-Slide.fda908ea.js",revision:"73e3469c707e1ba17c2250a20884fb2c"},{url:"assets/js/page-2022年，VSCode插件推荐和基本使用（前端小白必看，超详细）.7249054f.js",revision:"8b8a95442901285354bd4df842938302"},{url:"assets/js/page-Markdown增强.8ca6c6b3.js",revision:"a29019c79579a70af8a43ccb219e8089"},{url:"assets/js/page-VSCode工作区指南：回归轻量，成为全能编辑器.eae6b3f5.js",revision:"e89ea91741a8bed9112dd0cd04e7df5e"},{url:"assets/js/page-vue3引入element-plus报错解决方案.94768b0b.js",revision:"2a07e0b7265a129ff7f6f75713b13b06"},{url:"assets/js/page-一个小工具，让uni-app也能使用iconfont多色图标.f0e883ef.js",revision:"fa812e40f3f12257cd3f3edc56bf91ba"},{url:"assets/js/page-主要功能与配置演示.83cd7b90.js",revision:"2e30e9cd3d03f20049a7a03ee398f359"},{url:"assets/js/page-从简到难，重新学习ES6（上）.a6e35468.js",revision:"d331cc291d46e3a9e215523d39cc38f5"},{url:"assets/js/page-从简到难，重新学习ES6（下）.684f42cc.js",revision:"5534fb9f81cb615f8362b2fe0aa46d44"},{url:"assets/js/page-从简到难，重新学习ES6（中）.3d065835.js",revision:"622a39d9a4db7b829da911ca693d022a"},{url:"assets/js/page-关于作者.18d484d7.js",revision:"ec4b227a2bc831a41e918fadf4758388"},{url:"assets/js/page-前端基础系列：JS原型原型链详解.337e581d.js",revision:"d102b84f8e04215e88e55fd6427d60db"},{url:"assets/js/page-博客主页.1b24be29.js",revision:"f7051481495fc8cd943db427d6938337"},{url:"assets/js/page-夜神模拟器刷步道乐跑，步数不为0.abcd34ab.js",revision:"d707605f83dc55417fb938641c982fa0"},{url:"assets/js/page-如何在uni-app中计算出微信小程序导航栏的高度.359afbdf.js",revision:"c784b3e8eacc3d49ebe630e19c560b2b"},{url:"assets/js/page-密码加密的文章.a9f2d81c.js",revision:"41be512fe0b56e643f7205b77d2ed2c6"},{url:"assets/js/page-幻灯片页.2b107ac1.js",revision:"7b4bd1caaae77d3a1bc45c89df1dc037"},{url:"assets/js/page-组件禁用.6f5c4483.js",revision:"d044d5bed23f0c730f586171d8e51f72"},{url:"assets/js/page-自定义布局.22ffc9cb.js",revision:"4089f449f84221ae10d66a0c14c7dfcb"},{url:"assets/js/page-解放双手！实现element-plus自动按需导入的最新方式.f33e9abb.js",revision:"cd75f6c11c5f06894e17c387c581b83d"},{url:"assets/js/page-谈谈uni-app中rpx单位和px单位的转换.872a2171.js",revision:"a72fc5e5786ac17157a3743289a55f7f"},{url:"assets/js/page-这可能是最好、最详细的VSCode写uni-app教程吧.99bd24ae.js",revision:"4099aad29907c828cc72db37d99db34e"},{url:"assets/js/page-页面配置.d3a99964.js",revision:"345493d7fd226b5d033f3d606620a69f"},{url:"assets/js/page-项目主页.1576f459.js",revision:"ee2a654a293ee9d910570965032f622e"},{url:"assets/js/vendors~flowchart.490be58d.js",revision:"6297f81f44fc193daa63ec801b13f9fc"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.7d705271.js",revision:"238aa08ef49c253c14bfd97c0e763db9"},{url:"assets/js/vendors~layout-Layout.4abdf9a1.js",revision:"478f5e1a40d8f7cd7d97c049f98d3d04"},{url:"assets/js/vendors~mermaid.8fd3302a.js",revision:"ea54039d19b988d1adb9d8f4d8fd0caf"},{url:"assets/js/vendors~photo-swipe.6ca56466.js",revision:"d8abf3bcb9297e3c5a6b8c60b3d7384d"},{url:"assets/js/vendors~reveal.e7fbee0f.js",revision:"9d9de1a3e41d1c32b1ed142bc99a1754"},{url:"assets/js/vendors~valine.ba3934d0.js",revision:"0a52ac8289e06fef4bb3b3d9062bd97e"},{url:"logo.svg",revision:"1a8e6bd1f66927a7dcfeb4b22f33ffde"},{url:"assets/fonts/KaTeX_AMS-Regular.10824af7.woff",revision:"10824af77e9961cfd548c8a458f10851"},{url:"assets/fonts/KaTeX_AMS-Regular.56573229.ttf",revision:"56573229753fad48910bda2ea1a6dd54"},{url:"assets/fonts/KaTeX_AMS-Regular.66c67820.woff2",revision:"66c678209ce93b6e2b583f02ce41529e"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.497bf407.ttf",revision:"497bf407c4c609c6cf1f1ad38f437f7f"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.e6fb499f.ttf",revision:"e6fb499fc8f9925eea3138cccba17fff"},{url:"assets/fonts/KaTeX_Fraktur-Bold.40934fc0.woff",revision:"40934fc076960bb989d590db044fef62"},{url:"assets/fonts/KaTeX_Fraktur-Bold.796f3797.woff2",revision:"796f3797cdf36fcaea18c3070a608378"},{url:"assets/fonts/KaTeX_Fraktur-Bold.b9d7c449.ttf",revision:"b9d7c4497cab3702487214651ab03744"},{url:"assets/fonts/KaTeX_Fraktur-Regular.97a699d8.ttf",revision:"97a699d83318e9334a0deaea6ae5eda2"},{url:"assets/fonts/KaTeX_Fraktur-Regular.e435cda5.woff",revision:"e435cda5784e21b26ab2d03fbcb56a99"},{url:"assets/fonts/KaTeX_Fraktur-Regular.f9e6a99f.woff2",revision:"f9e6a99f4a543b7d6cad1efb6cf1e4b1"},{url:"assets/fonts/KaTeX_Main-Bold.4cdba646.woff",revision:"4cdba6465ab9fac5d3833c6cdba7a8c3"},{url:"assets/fonts/KaTeX_Main-Bold.8e431f7e.ttf",revision:"8e431f7ece346b6282dae3d9d0e7a970"},{url:"assets/fonts/KaTeX_Main-Bold.a9382e25.woff2",revision:"a9382e25bcf75d856718fcef54d7acdb"},{url:"assets/fonts/KaTeX_Main-BoldItalic.52fb39b0.ttf",revision:"52fb39b0434c463d5df32419608ab08a"},{url:"assets/fonts/KaTeX_Main-BoldItalic.5f875f98.woff",revision:"5f875f986a9bce1264e8c42417b56f74"},{url:"assets/fonts/KaTeX_Main-BoldItalic.d8737343.woff2",revision:"d873734390c716d6e18ff3f71ac6eb8b"},{url:"assets/fonts/KaTeX_Main-Italic.39349e0a.ttf",revision:"39349e0a2b366f38e2672b45aded2030"},{url:"assets/fonts/KaTeX_Main-Italic.65297062.woff2",revision:"652970624cde999882102fa2b6a8871f"},{url:"assets/fonts/KaTeX_Main-Italic.8ffd28f6.woff",revision:"8ffd28f6390231548ead99d7835887fa"},{url:"assets/fonts/KaTeX_Main-Regular.818582da.ttf",revision:"818582dae57e6fac46202cfd844afabb"},{url:"assets/fonts/KaTeX_Main-Regular.f1cdb692.woff",revision:"f1cdb692ee31c10b37262caffced5271"},{url:"assets/fonts/KaTeX_Main-Regular.f8a7f19f.woff2",revision:"f8a7f19f45060f7a177314855b8c7aa3"},{url:"assets/fonts/KaTeX_Math-BoldItalic.1320454d.woff2",revision:"1320454d951ec809a7dbccb4f23fccf0"},{url:"assets/fonts/KaTeX_Math-BoldItalic.48155e43.woff",revision:"48155e43d9a284b54753e50e4ba586dc"},{url:"assets/fonts/KaTeX_Math-BoldItalic.6589c4f1.ttf",revision:"6589c4f1f587f73f0ad0af8ae35ccb53"},{url:"assets/fonts/KaTeX_Math-Italic.d8b7a801.woff2",revision:"d8b7a801bd87b324efcbae7394119c24"},{url:"assets/fonts/KaTeX_Math-Italic.ed7aea12.woff",revision:"ed7aea12d765f9e2d0f9bc7fa2be626c"},{url:"assets/fonts/KaTeX_Math-Italic.fe5ed587.ttf",revision:"fe5ed5875d95b18c98546cb4f47304ff"},{url:"assets/fonts/KaTeX_SansSerif-Bold.0e897d27.woff",revision:"0e897d27f063facef504667290e408bd"},{url:"assets/fonts/KaTeX_SansSerif-Bold.ad546b47.woff2",revision:"ad546b4719bcf690a3604944b90b7e42"},{url:"assets/fonts/KaTeX_SansSerif-Bold.f2ac7312.ttf",revision:"f2ac73121357210d91e5c3eaa42f72ea"},{url:"assets/fonts/KaTeX_SansSerif-Italic.e934cbc8.woff2",revision:"e934cbc86e2d59ceaf04102c43dc0b50"},{url:"assets/fonts/KaTeX_SansSerif-Italic.ef725de5.woff",revision:"ef725de572b71381dccf53918e300744"},{url:"assets/fonts/KaTeX_SansSerif-Italic.f60b4a34.ttf",revision:"f60b4a34842bb524b562df092917a542"},{url:"assets/fonts/KaTeX_SansSerif-Regular.1ac3ed6e.woff2",revision:"1ac3ed6ebe34e473519ca1da86f7a384"},{url:"assets/fonts/KaTeX_SansSerif-Regular.3243452e.ttf",revision:"3243452ee6817acd761c9757aef93c29"},{url:"assets/fonts/KaTeX_SansSerif-Regular.5f8637ee.woff",revision:"5f8637ee731482c44a37789723f5e499"},{url:"assets/fonts/KaTeX_Script-Regular.a189c37d.ttf",revision:"a189c37d73ffce63464635dc12cbbc96"},{url:"assets/fonts/KaTeX_Script-Regular.a82fa2a7.woff",revision:"a82fa2a7e18b8c7a1a9f6069844ebfb9"},{url:"assets/fonts/KaTeX_Size1-Regular.0d8d9204.ttf",revision:"0d8d9204004bdf126342605f7bbdffe6"},{url:"assets/fonts/KaTeX_Size2-Regular.1fdda0e5.ttf",revision:"1fdda0e59ed35495ebac28badf210574"},{url:"assets/fonts/KaTeX_Size4-Regular.27a23ee6.ttf",revision:"27a23ee69999affa55491c7dab8e53bf"},{url:"assets/fonts/KaTeX_Typewriter-Regular.0e046058.woff",revision:"0e0460587676d22eae09accd6dcfebc6"},{url:"assets/fonts/KaTeX_Typewriter-Regular.6bf42875.ttf",revision:"6bf4287568e1d3004b54d5d60f9f08f9"},{url:"assets/fonts/KaTeX_Typewriter-Regular.b8b8393d.woff2",revision:"b8b8393d2e65fcebda5fa99fa3264f41"},{url:"404.html",revision:"716b8b8160f6a9c4a1645ee549b5401d"},{url:"article/index.html",revision:"a4a4cd2602ee120a70166b1aee7efbd1"},{url:"category/ES6/index.html",revision:"90ecbc23746ef161ec28c92f32ee0021"},{url:"category/index.html",revision:"58363262fb34bc4be1a7fb72f218a5c4"},{url:"category/JavaScript/index.html",revision:"02f2c5ce3d893eb79d18abaa0d13312c"},{url:"category/VSCode/index.html",revision:"4a557f8527755788857e625383c26191"},{url:"category/Vue/index.html",revision:"e5f5fc73698eb591f0058b7a764702fd"},{url:"category/使用指南/index.html",revision:"b8ab92bc86ef1e4af7b88094b25714a1"},{url:"category/大学/index.html",revision:"82781bf7c11eeb76c32b56592af1c9cc"},{url:"category/小程序/index.html",revision:"f683795ec3dc732d1aaf89683cd78029"},{url:"encrypt/index.html",revision:"bd1343fda2c1729362dcc79b2e3d8a72"},{url:"es6/从简到难，重新学习ES6（上）/index.html",revision:"b7b13b083c8547026ba03092a42289b0"},{url:"es6/从简到难，重新学习ES6（下）/index.html",revision:"a50cac69478ccb3b7c326469a7f875c9"},{url:"es6/从简到难，重新学习ES6（中）/index.html",revision:"ca7288f1eab54452a2ff5ed81f693a0a"},{url:"guide/config/index.html",revision:"68fb5c514501e55215abcd0967f521a8"},{url:"guide/disable/index.html",revision:"e6b97b3111dcf315cde7ef0c137357bf"},{url:"guide/encrypt/index.html",revision:"bb6d1fe2882e9b65781cdf710235f205"},{url:"guide/layout/index.html",revision:"eb6ddcf2bf537dfb39840d8764fc93bf"},{url:"guide/markdown/index.html",revision:"745941ee8eaf85fcdaac1963392b8791"},{url:"guide/page/index.html",revision:"87a6d8e9a7bf4b1caeb0f58c6edde506"},{url:"guide/slides/index.html",revision:"e75b8436373028ebf8b40b2723d8779f"},{url:"home/index.html",revision:"456b56b6fc674c404b5e5d49116e8e16"},{url:"index.html",revision:"09f11c4275c8d24efd95bee764fd150b"},{url:"intro/index.html",revision:"4b415ba589ad63213faa5d39de050c21"},{url:"javaScript/前端基础系列：JS原型&原型链详解/index.html",revision:"dad3cda1993fde72067dfd61b98b1e17"},{url:"mp/一个小工具，让uni-app使用iconfont多色图标/index.html",revision:"e2b206c347bfb38f0fc5b67f82adcaa5"},{url:"mp/如何在uni-app中计算出微信小程序导航栏的高度/index.html",revision:"9c180c3e27c52872cb8abc478324c029"},{url:"mp/谈谈uni-app中rpx单位和px单位的转换/index.html",revision:"fb5a2ab04b64e8f9901def43e07a935b"},{url:"mp/这可能是最好、最详细的VSCode写uni-app教程吧/index.html",revision:"c788886639f82f8410b2791f00716d29"},{url:"slide/index.html",revision:"dd9b29d13fcdd637e52375eac14c59e4"},{url:"star/index.html",revision:"fde875c5b2bcc764984ed6605c2deeb0"},{url:"tag/ES6/index.html",revision:"fa4bc405cd0bc66c44072eff4f2f663d"},{url:"tag/index.html",revision:"69346d6e39ff1e3fdf7c7205f5a25308"},{url:"tag/JavaScript/index.html",revision:"92972d1aeabfbf93eadcb3577ed3f71b"},{url:"tag/markdown/index.html",revision:"3dac06848a465de821f9300dfb3d8fcd"},{url:"tag/uni-app/index.html",revision:"2a6efc786624b1f7e9e34808d1ddd5bc"},{url:"tag/VSCode/index.html",revision:"210c5c0f84c3edbba51ffb35c832e014"},{url:"tag/Vue/index.html",revision:"164a37be7a48bb46621d57acc4029239"},{url:"tag/使用指南/index.html",revision:"9e203cf2a1f8f8f4769ecc5a9ff4e48b"},{url:"tag/大前端/index.html",revision:"fb38082e6a73d368cd346d9b7bea446f"},{url:"tag/大学生活/index.html",revision:"d5c0eb893bf430517e106ce886ca4e01"},{url:"tag/幻灯片页/index.html",revision:"5e4db7db9b1a5bf5a9737070c3329e59"},{url:"tag/微信小程序/index.html",revision:"3f57242c71c4b3523f90f15842e39e86"},{url:"tag/摸鱼/index.html",revision:"c99d95584fd3e497808eb1e6587563ba"},{url:"tag/文章加密/index.html",revision:"7d87060525caeb2eb50db3c333c0a7a4"},{url:"tag/自定义布局/index.html",revision:"048801538ee274553aaa5e688a4b9a76"},{url:"tag/页面配置/index.html",revision:"5ad80ceaca6286810c0e034bd3c3afcc"},{url:"timeline/index.html",revision:"cf643c4354b6c302ab3647615c8a7fc6"},{url:"university/夜神模拟器刷步道乐跑，步数不为0/index.html",revision:"9a6f7b00d7c22d972dab71c55cbd6a53"},{url:"vscode/2022年，VSCode插件推荐和基本使用/index.html",revision:"a981b0ad583f58b8eab3036b0a0d1caa"},{url:"vscode/VSCode工作区指南：回归轻量，成为全能编辑器/index.html",revision:"a2fe84ff4bfefe2c67ac858ce3855dbc"},{url:"vue/vue3引入element-plus报错解决方案/index.html",revision:"49a1647f700ca4d39392152e883841b1"},{url:"vue/解放双手！实现element-plus自动按需导入的最新方式/index.html",revision:"e244fe5141e63682c1ec10b1f93aa59d"},{url:"assets/icon/apple-icon-152.png",revision:"8b700cd6ab3f7ff38a82ee491bf3c994"},{url:"assets/icon/chrome-192.png",revision:"6d4cd350c650faaed8da00eb05a2a966"},{url:"assets/icon/chrome-512.png",revision:"b08fe93ce982da9d3b0c7e74e0c4e359"},{url:"assets/icon/chrome-mask-192.png",revision:"a05b03eeb7b69dc96355f36f0766b310"},{url:"assets/icon/chrome-mask-512.png",revision:"3c4d57a60277792c6c005494657e1dce"},{url:"assets/icon/guide-maskable.png",revision:"99cc77cf2bc792acd6b847b5e3e151e9"},{url:"assets/icon/guide-monochrome.png",revision:"699fa9b069f7f09ce3d52be1290ede20"},{url:"assets/icon/ms-icon-144.png",revision:"2fe199405e0366e50ac0442cc4f33a34"},{url:"assets/img/hero.b62ddd9c.jpg",revision:"b62ddd9c4a72085202b5218e4c98fd68"},{url:"bg.jpg",revision:"54ab2cc173d3b381a0202ef39453d20d"},{url:"blog_er.jpg",revision:"132633924fbd3e5009df64b379631907"},{url:"logo-1.png",revision:"6cf1b38ce50f524851a214fcad2a8baa"},{url:"logo.png",revision:"7e2357ad9bd99518cb9c28ea853601b7"},{url:"luozi.jpg",revision:"18d06d35647185dfe4e2809b3abd5b05"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map
addEventListener("message", (event) => {
  const replyPort = event.ports[0];
  const message = event.data;
  if (replyPort && message && message.type === "skip-waiting")
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        (error) => replyPort.postMessage({ error })
      )
    );
});
