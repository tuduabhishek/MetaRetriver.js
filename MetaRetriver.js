var MetaRetriver=function(){"use strict";var e=function(e){this.url=e};function t(e,t){let o=new Map;for(let i=0;i<t.length;i++){let l=t[i].trim();o.set(l,e.querySelector("meta["+r(l)+'="'+n(l)+'"]').content)}return o}function r(e){return e.substring(0,e.indexOf("="))}function n(e){return e.substring(e.indexOf("=")+1)}e.prototype.retrive=function(e,r,n){if(!n||"function"!=typeof n)return;let o=this.url,i=new DOMParser;if(1==e&&o in localStorage){let e=localStorage.getItem(this.url),o=i.parseFromString(e,"text/html");n(t(o,r))}else fetch(o).then(function(e){return e.text()}).then(function(l){1==e&&localStorage.setItem(o,l);let a=i.parseFromString(l,"text/html");n(t(a,r))}).catch(function(e){throw e})};return function(t){return new e(t)}}();let query=["property=og:image","property=og:url","name=description"];MetaRetriver("https://api.allorigins.win/raw?url=https://www.animenewsnetwork.com/cms/.163738").retrive(!0,query,function(e){console.log(e.get("property=og:image")),console.log(e.get("name=description"))}),MetaRetriver("https://api.allorigins.win/raw?url=http://www.animenewsnetwork.com/news/2020-09-15/discotek-schedules-gin-rei-ova-in-late-2020-early-2021/.164022").retrive(!0,query,function(e){console.log(e.get("property=og:image")),console.log(e.get("name=description"))});