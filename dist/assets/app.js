(()=>{var e,t={229:(e,t,n)=>{"use strict";n(711);var a=n(592),r=1280,o=768,i=window.matchMedia("(min-width: ".concat(r,"px)")),c=(window.matchMedia("(min-width: ".concat(o,"px)")),n(638));function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){d(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}c(window).on("load",(function(){var e=c("[data-thumb-slider]");if(e.length)if(e.find("[data-thumb-slide]").length>1){var t,n=c("[data-thumb-thumbs]"),r=n.find("[data-thumb-item]");i.matches&&(t=new a.Z(n[0],{speed:600,slidesPerView:"auto",spaceBetween:8}));var o=n.find("[data-thumb-item]"),s=new a.Z(e[0],{speed:0,allowTouchMove:!1}),l=c("[data-image-slider]"),d=new a.Z(l[0],{speed:600,spaceBetween:0,slidesPerView:1,allowTouchMove:!1}),u=c('[data-slider-button="thumbs-left"]'),f=c('[data-slider-button="thumbs-right"]'),p="nothing";s.on("sliderFirstMove",(function(){p="slider swipe"})),r.on("click",(function(){p="thumbs click";var e=c(this).closest(".swiper-slide").index();void 0!==e&&(s.slideTo(e),d.slideTo(e),i.matches&&t.slideTo(e),o.removeClass("nav__link--active"),o.eq(e).addClass("nav__link--active"))})),u.on("click",(function(){p="slider swipe",s.slidePrev()})),f.on("click",(function(){p="slider swipe",s.slideNext()})),s.on("slideChange",(function(e){"slider swipe"===p&&(t.slideTo(e.realIndex),d.slideTo(e.realIndex),o.removeClass("nav__link--active"),o.eq(e.realIndex).addClass("nav__link--active")),p="nothing"}))}else e.addClass("static")})),c(window).on("load",(function(){var e;(e=c("[data-slider-id]")).length&&e.each((function(){var e=c(this),t=e.data("slider-id"),n=e.data("slider-prev"),r=e.data("slider-next"),o=c('[data-slider-button="'.concat(n,'"]')),i=c('[data-slider-button="'.concat(r,'"]')),s=c("[data-slider-buttons]");s.length&&e.find(".swiper-slide").length<+s.data("slider-buttons")&&s.addClass("hidden");var u={slidesPerView:"auto",spaceBetween:10,speed:500,breakpoints:d({},1280,{spaceBetween:20})};switch(t){case"main":u={slidesPerView:1,spaceBetween:0,allowTouchMove:!1,loop:!0,speed:800,pagination:{el:".swiper-pagination"}};break;case 2:u=l(l({},u),{},{loop:!0});break;case"about":u={slidesPerView:1,spaceBetween:0,speed:0,loop:!0,allowTouchMove:!1,pagination:{el:".swiper-pagination"}};break;case"about-image":u={slidesPerView:1,spaceBetween:0,loop:!0,allowTouchMove:!1,speed:1e3,on:{slideChange:function(){var e=document.querySelector('[data-slider-id="about"]').swiper;e&&e.slideTo(this.activeIndex)}}};break;case 10:u={slidesPerView:"auto",spaceBetween:20};break;case"center":u=l(l({},u),{},{centeredSlides:!1,loop:!0,breakpoints:d({},1280,{centeredSlides:!0})})}var f=new a.Z(e[0],u);o.on("click",(function(){f.slidePrev()})),i.on("click",(function(){f.slideNext()}))}))})),document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector(".header");function t(){window.scrollY<1?e.classList.remove("header--scroll"):e.classList.add("header--scroll")}t(),window.addEventListener("scroll",t);var n=e.querySelectorAll("[data-header-button]"),a=e.querySelector("[data-header-menu]"),r=a.querySelector("[data-header-overlay]"),o=e.querySelectorAll("[data-search-button]"),i=e.querySelector("[data-search-close]"),c=e.querySelector("[data-search-input]"),s={currentModal:null,headerClass:"",menuClass:""};n.forEach((function(e){e.onclick=function(){a.classList.contains("active")?d():l("menu","active","header--menu")}})),o.forEach((function(e){e.onclick=function(){a.classList.contains("search")?d():(c.focus(),l("search","search","header--search"))}})),i.onclick=function(){d()},r.onclick=function(){d()};var l=function(t,n,r){null!==s.currentModal&&d(),document.body.classList.add("body--hidden"),a.classList.add(n),e.classList.add(r),"menu"===t&&e.classList.add("header--scroll"),s.currentModal=a,s.headerClass=r,s.menuClass=n},d=function(){a.classList.remove(s.menuClass),e.classList.remove(s.headerClass),document.body.classList.remove("body--hidden"),s.currentModal=null,t()}}));n(304);var u=n(566),f=n.n(u);function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){h(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var m=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.root=t,this.options=v({start:1,end:1/0,offset:1,speed:2},n),this.scrollHandler()}var t,n,a;return t=e,(n=[{key:"scrollHandler",value:function(){var e=this;window.addEventListener("scroll",(function(){e.update()}))}},{key:"getParallax",value:function(e){return e/10*this.options.speed}},{key:"setParallax",value:function(e){var t=this;requestAnimationFrame((function(){t.root.style.transform="translateY(".concat(e,"px)")}))}},{key:"update",value:function(){var e=window.scrollY;if(e>this.options.start&&e<this.options.end){var t=e-this.options.start+this.options.offset;this.setParallax(this.getParallax(t))}}},{key:"updateOptions",value:function(e){this.options=v(v({},this.options),e)}},{key:"onResize",value:function(e){window.addEventListener("resize",(function(){setTimeout((function(){e()}),300)}))}}])&&b(t.prototype,n),a&&b(t,a),e}();document.body.classList.add("body--hidden"),window.addEventListener("load",(function(){document.body.classList.remove("body--notransition");var e=document.querySelector(".preloader");if(e){var t=document.querySelector("[data-main-video]");e.classList.add("preloader--hidden"),setTimeout((function(){document.body.classList.remove("body--hidden"),window.scrollTo(0,0),t.setAttribute("autoplay",""),t.load(),setTimeout((function(){f().init({once:!0,offset:100,duration:1e3}),i.matches&&document.querySelectorAll("[data-parallax]").forEach((function(e){var t=e.querySelector("[data-parallax-img]"),n=e.getBoundingClientRect().top-window.innerHeight,a=e.getBoundingClientRect().top+e.offsetHeight;new m(t,{start:n,end:a,speed:-1})}));var e=document.querySelector("[data-ecology-video]");e.setAttribute("autoplay",""),e.load()}),300)}),1800)}else document.body.classList.remove("body--hidden"),f().init({once:!0,offset:100,duration:1e3})}));n(767);var y=n(412),g=n(371),w=n(369),O=n(383);n(109);(0,O.ScrollMagicPluginGsap)(y,g.Q3,w.b_),document.addEventListener("DOMContentLoaded",(function(){document.querySelectorAll("[data-text-fill]").forEach((function(e){var t=e.textContent.split(" ");e.innerHTML="",t.forEach((function(t){var n=document.createElement("span");n.textContent=t,e.append(n)}));var n=e.querySelectorAll("span"),a=new y.Controller({refreshInterval:1});new y.Scene({triggerElement:e,duration:window.innerHeight/2,triggerHook:1,offset:e.offsetHeight+100}).addTo(a).on("progress",(function(e){var t=Math.round(n.length*e.progress);if("FORWARD"===e.scrollDirection)for(var a=0;a<t;a++)n[a].classList.add("filled");else for(var r=n.length-1;r>t-1;r--)n[r].classList.remove("filled")}))}))}));n(378),n(563),n(419);var j=n(638);j((function(){j("form").parsley(),Parsley.addMessages("ru",{defaultMessage:"Некорректное значение",type:{email:"Введите адрес электронной почты",url:"Введите URL адрес",number:"Введите число",integer:"Введите целое число",digits:"Введите только цифры",alphanum:"Введите буквенно-цифровое значение"},notblank:"Это поле должно быть заполнено",required:"Обязательное поле",pattern:"Это значение некорректно",min:"Это значение должно быть не менее чем %s",max:"Это значение должно быть не более чем %s",range:"Это значение должно быть от %s до %s",minlength:"Это значение должно содержать не менее %s символов",maxlength:"Это значение должно содержать не более %s символов",length:"Это значение должно содержать от %s до %s символов",mincheck:"Выберите не менее %s значений",maxcheck:"Выберите не более %s значений",check:"Выберите от %s до %s значений",equalto:"Это значение должно совпадать"}),Parsley.setLocale("ru"),Inputmask({mask:"+7 (999) 999-99-99",showMaskOnHover:!1}).mask("[data-mask-phone]")}));n(917);var k=n(638);function P(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function L(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?P(Object(n),!0).forEach((function(t){x(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):P(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function x(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var E={closeExisting:!0,touch:!1,hideScrollbar:!1,autoFocus:!1,baseTpl:'<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="fancybox-stage"></div></div>',animationEffect:"zoom",animationDuration:400,afterShow:function(e,t){k(t.src).closest(".fancybox-container").addClass("open")}};k((function(){k("[data-fancy-button]").on("click",(function(e){var t=L({},E);e.preventDefault();var n=k(this).data("fancy-button"),a=k('[data-fancy-modal="'.concat(n,'"]'));switch(n){case"content":case"event":case"speaker":t.animationEffect="left";break;case"ask":t.animationEffect="left",t.afterClose=function(e,t){var n=k(t.src);n.find("[data-response]").removeClass("active"),n.find("[data-form]").removeClass("hidden")}}k.fancybox.defaults=L(L({},k.fancybox.defaults),t),k.fancybox.open(a)}))}));n(276),n(743),n(846);var S=n(638);function C(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function T(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?C(Object(n),!0).forEach((function(t){D(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):C(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function D(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function q(e){var t=e.querySelectorAll("[data-input]");e.reset(),t.forEach((function(e){e.classList.remove("filled")}))}S((function(){var e=S("[data-form]");0!==e.length&&e.each((function(){var e=S(this),t=e.data("form"),n=e.closest("[data-response-container]");e.on("submit",(function(a){if(a.preventDefault(),n.length)e.addClass("hidden"),n.find("[data-response=".concat(t,"]")).addClass("active"),q(e[0]);else{var r=T(T({},E),{},{beforeClose:function(){q(e[0])}});S.fancybox.defaults=T(T({},S.fancybox.defaults),r),S.fancybox.open(S("[data-response=".concat(t,"]")))}}))}))}));n(490);var M=n(638);M((function(){M(".select__select").each((function(){var e=M(this),t=e.closest(".select-wrapper"),n=getComputedStyle(t[0]),a=M(this).data("select-placeholder");"static"===n.position&&t.css("position","relative"),e.select2({dropdownParent:t,selectOnClose:!0,minimumResultsForSearch:1/0,placeholder:a}),e.on("select2:open",(function(){t.css("z-index","100000");var e=t.find(".select2-dropdown");e.hide();var n=setTimeout((function(){e.slideDown({duration:500}),clearTimeout(n)}),0)})),e.on("select2:closing",(function(n){n.preventDefault();var r=t.find(".select2-dropdown"),o=setTimeout((function(){t.css("z-index","");var n=t.find(".select2");n.addClass("closing"),n.removeClass("select2-container--open"),r.slideUp(500,(function(){var n=setTimeout((function(){e.select2("destroy"),e.select2({dropdownParent:t,selectOnClose:!0,minimumResultsForSearch:1/0,placeholder:a}),e.removeClass("closing"),t.css("z-index",""),clearTimeout(n)}),300)})),clearTimeout(o)}),0)}))}))}));var A=n(539),_=n.n(A),B=n(638);function I(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function H(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?I(Object(n),!0).forEach((function(t){R(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):I(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function R(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}_().accessToken="pk.eyJ1Ijoic3BhcnRha3ZlZSIsImEiOiJjbGN6eWp0OXUxMHVkM29xbHl6NnoyZXcxIn0._3Qg24ie6SbtOGPAFw0I-Q",window.addEventListener("load",(function(){var e=document.getElementById("map");if(e){var t=JSON.parse(e.getAttribute("data-map-data")),n=e.getAttribute("data-map-type"),a=new(_().Map)({container:"map",style:"mapbox://styles/spartakvee/clcoki94o003t15rqj4b27vjv",center:[37.619571241104076,55.7523945874561],zoom:3});a.on("load",(function(){if("track"===n){var e=t.containerPos.reverse(),r=document.createElement("div");r.className="marker marker--container",r.onclick=function(){var e=H(H({},E),{},{animationEffect:"right-left"});B.fancybox.defaults=H(H({},B.fancybox.defaults),e),B.fancybox.open(B('[data-fancy-modal="track"]'))},new(_().Marker)(r).setLngLat(e).addTo(a)}if(t.borderCrossing.forEach((function(e){var t=e.reverse(),n=document.createElement("div");n.className="marker",new(_().Marker)(n).setLngLat(t).addTo(a)})),t.route){var o=t.route.map((function(e){return e.reverse()}));a.addSource("route",{type:"geojson",data:{type:"Feature",properties:{},geometry:{type:"LineString",coordinates:o}}}),a.addLayer({id:"route",type:"line",source:"route",layout:{"line-join":"round","line-cap":"round"},paint:{"line-color":"#006525","line-width":2,"line-dasharray":[1,3]}})}}))}}))},378:(e,t,n)=>{var a=n(638);a((function(){a("[data-accordion]").length&&window.addEventListener("click",(function(e){!function(e,t){var n=a(t),r=a(e.target);r.closest("[data-accordion-button]").length&&(r.closest(n).toggleClass("active"),r.closest(n).find("[data-accordion-dropdown]").eq(0).slideToggle())}(e,"[data-accordion]")}))}))},846:(e,t,n)=>{var a=n(638);a((function(){a("[data-scroll]").length&&a("[data-scroll]").on("click",(function(e){e.preventDefault();var t=a(this).data("scroll"),n=a(t).offset().top;a("html, body").animate({scrollTop:n-120},700)}))}))},711:(e,t,n)=>{var a=n(638);a((function(){a(document).on("click","[data-type=search]",(function(){var e=a(this),t=e.parents("[data-container=search]").find("input").val(),n=a(e.data("link-container"));a.ajax({type:"GET",url:window.location.href,dataType:"html",data:{ajax:"search",search:t},success:function(e){n.empty(),n.append(a(e))}})})),a(document).on("click","[data-type=filter-tab]",(function(e){e.preventDefault(),console.log("event click");var t=a(this),n=t.parents("[data-container=tab]"),r=n.data("link-container"),o=a(r),i="nav__link--active";n.find("[data-type=filter-tab]").removeClass(i),t.addClass(i),a.ajax({type:"GET",url:window.location.href,dataType:"html",data:{ajax:"filter_tab",sect:t.data("code")},success:function(e){o.each((function(t,n){var o=a(n);o.empty(),o.append(a(e).find("".concat(r,"[data-id=").concat(o.data("id"),"]")).children())}))}})})),a(document).on("click","[data-type=pagen]",(function(){var e=a(this),t=e.parents("[data-container=entity]"),n=t.find("[data-container=items]"),r=t.find("[data-container=pagen]"),o=r.find("[data-type=pagen]");a.ajax({type:"GET",url:e.data("url"),dataType:"html",data:{ajax:"pagen"},success:function(e){n.append(a(e).find("[data-container=items]").children()),o.remove();var t=a(e).find("[data-type=pagen]");t.length&&r.append(t)}})}))}))},743:()=>{document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelectorAll("[data-input]");e.length&&e.forEach((function(e){e.oninput=function(){this.value?this.classList.add("filled"):this.classList.remove("filled")}}))}))},276:()=>{document.addEventListener("DOMContentLoaded",(function(){document.querySelectorAll("[data-search-input]").length&&(document.addEventListener("input",(function(e){var t=e.target;if(t.hasAttribute("data-search-input")){var n=t.closest("[data-search-container]").querySelector("[data-search-clear]");t.value?n.classList.remove("hidden"):n.classList.add("hidden")}})),window.addEventListener("click",(function(e){var t=e.target.closest("[data-search-clear]");if(t){var n=t.closest("[data-search-container]").querySelector("[data-search-input]");n.value="",n.dispatchEvent(new Event("input")),t.classList.add("hidden")}})))}))},304:()=>{document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelectorAll("[data-tabs]");e.length&&e.forEach((function(e){var t=e.querySelectorAll("[data-tabs-item]"),n=e.querySelectorAll("[data-tabs-block]");t.forEach((function(t,a){t.onclick=function(){if(!t.classList.contains("active")){var r=e.querySelector("[data-tabs-item].active"),o=e.querySelector("[data-tabs-block].active");r.classList.remove("active"),o.classList.remove("active"),t.classList.add("active"),n[a].classList.add("active")}}}))}))}))},767:()=>{document.addEventListener("DOMContentLoaded",(function(){document.querySelectorAll("[data-overlay]").forEach((function(e){e.onclick=function(){this.classList.add("hidden")}})),document.querySelectorAll("[data-touch-target]").forEach((function(e){var t=e.getBoundingClientRect().width,n=e.getAttribute("data-touch-target");e.parentElement.scrollLeft=t*(+n/100)}))}))}},n={};function a(e){var r=n[e];if(void 0!==r)return r.exports;var o=n[e]={exports:{}};return t[e].call(o.exports,o,o.exports,a),o.exports}a.m=t,e=[],a.O=(t,n,r,o)=>{if(!n){var i=1/0;for(d=0;d<e.length;d++){for(var[n,r,o]=e[d],c=!0,s=0;s<n.length;s++)(!1&o||i>=o)&&Object.keys(a.O).every((e=>a.O[e](n[s])))?n.splice(s--,1):(c=!1,o<i&&(i=o));if(c){e.splice(d--,1);var l=r();void 0!==l&&(t=l)}}return t}o=o||0;for(var d=e.length;d>0&&e[d-1][2]>o;d--)e[d]=e[d-1];e[d]=[n,r,o]},a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={143:0};a.O.j=t=>0===e[t];var t=(t,n)=>{var r,o,[i,c,s]=n,l=0;if(i.some((t=>0!==e[t]))){for(r in c)a.o(c,r)&&(a.m[r]=c[r]);if(s)var d=s(a)}for(t&&t(n);l<i.length;l++)o=i[l],a.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return a.O(d)},n=self.webpackChunk=self.webpackChunk||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var r=a.O(void 0,[899],(()=>a(229)));r=a.O(r)})();