(()=>{var e,a={788:(e,a,t)=>{"use strict";var o=t(592),r=t(638);r(window).on("load",(function(){var e;(e=r("[data-slider-id]")).length&&e.each((function(){var e=r(this),a=e.data("slider-id"),t=e.data("slider-prev"),i=e.data("slider-next"),n=r('[data-slider-button="'.concat(t,'"]')),c=r('[data-slider-button="'.concat(i,'"]')),s={slidesPerView:"auto",spaceBetween:20,speed:500};switch(a){case"main":s={slidesPerView:1,spaceBetween:0,pagination:{el:".swiper-pagination"}};break;case 21:s={slidesPerView:"auto",spaceBetween:20,allowTouchMove:!1,loop:!0,speed:300}}var d=new o.Z(e[0],s);n.on("click",(function(){d.slidePrev()})),c.on("click",(function(){d.slideNext()}))}))}));var i=1280,n=768;window.matchMedia("(min-width: ".concat(i,"px)")),window.matchMedia("(min-width: ".concat(n,"px)"));document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector(".header");function a(){window.scrollY<1?e.classList.remove("header--scroll"):e.classList.add("header--scroll")}a(),window.addEventListener("scroll",a);var t=e.querySelector("[data-header-button]"),o=e.querySelector("[data-header-menu]"),r=o.querySelector("[data-header-overlay]");t.onclick=function(){o.classList.contains("active")?(o.classList.remove("active"),e.classList.remove("header--menu"),a()):(o.classList.add("active"),e.classList.add("header--menu"),e.classList.add("header--scroll"))},r.onclick=function(){console.log(123),o.classList.remove("active"),e.classList.remove("header--menu"),a()}}));t(304),t(766)},766:()=>{window.addEventListener("load",(function(){document.body.classList.remove("body--notransition")}))},304:()=>{document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelectorAll("[data-tabs]");e.length&&e.forEach((function(e){var a=e.querySelectorAll("[data-tabs-item]"),t=e.querySelectorAll("[data-tabs-block]");a.forEach((function(a,o){a.onclick=function(){if(!a.classList.contains("active")){var r=e.querySelector("[data-tabs-item].active"),i=e.querySelector("[data-tabs-block].active");r.classList.remove("active"),i.classList.remove("active"),a.classList.add("active"),t[o].classList.add("active")}}}))}))}))}},t={};function o(e){var r=t[e];if(void 0!==r)return r.exports;var i=t[e]={exports:{}};return a[e].call(i.exports,i,i.exports,o),i.exports}o.m=a,e=[],o.O=(a,t,r,i)=>{if(!t){var n=1/0;for(l=0;l<e.length;l++){for(var[t,r,i]=e[l],c=!0,s=0;s<t.length;s++)(!1&i||n>=i)&&Object.keys(o.O).every((e=>o.O[e](t[s])))?t.splice(s--,1):(c=!1,i<n&&(n=i));if(c){e.splice(l--,1);var d=r();void 0!==d&&(a=d)}}return a}i=i||0;for(var l=e.length;l>0&&e[l-1][2]>i;l--)e[l]=e[l-1];e[l]=[t,r,i]},o.d=(e,a)=>{for(var t in a)o.o(a,t)&&!o.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:a[t]})},o.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),(()=>{var e={143:0,532:0};o.O.j=a=>0===e[a];var a=(a,t)=>{var r,i,[n,c,s]=t,d=0;if(n.some((a=>0!==e[a]))){for(r in c)o.o(c,r)&&(o.m[r]=c[r]);if(s)var l=s(o)}for(a&&a(t);d<n.length;d++)i=n[d],o.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return o.O(l)},t=self.webpackChunk=self.webpackChunk||[];t.forEach(a.bind(null,0)),t.push=a.bind(null,t.push.bind(t))})();var r=o.O(void 0,[761,532],(()=>o(788)));r=o.O(r)})();