var MetaRetriver=function(){"use strict";var t=function(t){this.url=t};function n(t){return t.substring(0,t.indexOf("="))}function e(t){return t.substring(t.indexOf("=")+1)}t.prototype.retrive=function(t,r){r&&"function"==typeof r&&fetch(this.url).then(function(t){return t.text()}).then(function(u){let i=(new DOMParser).parseFromString(u,"text/html");r(function(t,r){let u=new Map;for(let i=0;i<r.length;i++){let o=r[i].trim();u.set(o,t.querySelector("meta["+n(o)+'="'+e(o)+'"]').content)}return u}(i,t))}).catch(function(t){throw t})};return function(n){return new t(n)}}();