(()=>{"use strict";var t={771:(t,e,i)=>{i.d(e,{Z:()=>d});var n=i(81),h=i.n(n),o=i(645),r=i.n(o)()(h());r.push([t.id,"html, body {\n    width: 100%;\n    height: 100%;\n    margin: 0;\n    border: 0;\n    overflow: hidden;\n    display: block;\n}",""]);const d=r},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var i="",n=void 0!==e[5];return e[4]&&(i+="@supports (".concat(e[4],") {")),e[2]&&(i+="@media ".concat(e[2]," {")),n&&(i+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),i+=t(e),n&&(i+="}"),e[2]&&(i+="}"),e[4]&&(i+="}"),i})).join("")},e.i=function(t,i,n,h,o){"string"==typeof t&&(t=[[null,t,void 0]]);var r={};if(n)for(var d=0;d<this.length;d++){var a=this[d][0];null!=a&&(r[a]=!0)}for(var l=0;l<t.length;l++){var s=[].concat(t[l]);n&&r[s[0]]||(void 0!==o&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=o),i&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=i):s[2]=i),h&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=h):s[4]="".concat(h)),e.push(s))}},e}},81:t=>{t.exports=function(t){return t[1]}},643:(t,e,i)=>{i.r(e),i.d(e,{default:()=>m});var n=i(379),h=i.n(n),o=i(795),r=i.n(o),d=i(569),a=i.n(d),l=i(565),s=i.n(l),c=i(216),u=i.n(c),g=i(589),p=i.n(g),f=i(771),y={};y.styleTagTransform=p(),y.setAttributes=s(),y.insert=a().bind(null,"head"),y.domAPI=r(),y.insertStyleElement=u(),h()(f.Z,y);const m=f.Z&&f.Z.locals?f.Z.locals:void 0},379:t=>{var e=[];function i(t){for(var i=-1,n=0;n<e.length;n++)if(e[n].identifier===t){i=n;break}return i}function n(t,n){for(var o={},r=[],d=0;d<t.length;d++){var a=t[d],l=n.base?a[0]+n.base:a[0],s=o[l]||0,c="".concat(l," ").concat(s);o[l]=s+1;var u=i(c),g={css:a[1],media:a[2],sourceMap:a[3],supports:a[4],layer:a[5]};if(-1!==u)e[u].references++,e[u].updater(g);else{var p=h(g,n);n.byIndex=d,e.splice(d,0,{identifier:c,updater:p,references:1})}r.push(c)}return r}function h(t,e){var i=e.domAPI(e);return i.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;i.update(t=e)}else i.remove()}}t.exports=function(t,h){var o=n(t=t||[],h=h||{});return function(t){t=t||[];for(var r=0;r<o.length;r++){var d=i(o[r]);e[d].references--}for(var a=n(t,h),l=0;l<o.length;l++){var s=i(o[l]);0===e[s].references&&(e[s].updater(),e.splice(s,1))}o=a}}},569:t=>{var e={};t.exports=function(t,i){var n=function(t){if(void 0===e[t]){var i=document.querySelector(t);if(window.HTMLIFrameElement&&i instanceof window.HTMLIFrameElement)try{i=i.contentDocument.head}catch(t){i=null}e[t]=i}return e[t]}(t);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(i)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,i)=>{t.exports=function(t){var e=i.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){var e=t.insertStyleElement(t);return{update:function(i){!function(t,e,i){var n="";i.supports&&(n+="@supports (".concat(i.supports,") {")),i.media&&(n+="@media ".concat(i.media," {"));var h=void 0!==i.layer;h&&(n+="@layer".concat(i.layer.length>0?" ".concat(i.layer):""," {")),n+=i.css,h&&(n+="}"),i.media&&(n+="}"),i.supports&&(n+="}");var o=i.sourceMap;o&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(n,t,e.options)}(e,t,i)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function i(n){var h=e[n];if(void 0!==h)return h.exports;var o=e[n]={id:n,exports:{}};return t[n](o,o.exports,i),o.exports}i.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return i.d(e,{a:e}),e},i.d=(t,e)=>{for(var n in e)i.o(e,n)&&!i.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},i.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),i.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.nc=void 0,(()=>{i(643);const t=[];window.addEventListener("DOMContentLoaded",(()=>{!function(){const i=document.getElementById("canvas"),u=i.getContext("2d"),g=()=>{!function(t){t.width=document.body.clientWidth,t.height=document.body.clientHeight}(i),function(i,u){!function(t,e){e.fillStyle="#ECF0F1",e.fillRect(0,0,t.width,t.height)}(i,u);const g={position:{x:0,y:0},width:200,height:300};g.position.x+=i.width/2-g.width/2,g.position.y+=i.height/2-g.height/2;const p={width:g.width/2,height:g.height/2},f={width:g.position.x+p.width,height:g.position.y+p.height};if(function(t,e,i){t.fillStyle="#212121",t.font="120px Gill Sans";const n=t.measureText("Cistercian Numbers").width,h=Math.max(i.width-n/2,0);t.fillText("Cistercian Numbers",h,115,1*t.canvas.width)}(u,0,f),t.length>0){!function(t,e,i,n){t.fillStyle="#212121",t.font="150px Gill Sans",t.textAlign="end";const h=t.measureText(n).width;t.fillText(n,i.width+h/2,i.height-1.75*e.height)}(u,p,f,t.join("")),u.lineWidth=20,u.strokeStyle="#212121",u.lineCap="round",u.lineJoin="round",u.beginPath(),function(t,e,i){t.moveTo(i.width,i.height+(e.height-t.lineWidth/2)),t.lineTo(i.width,i.height-(e.height-t.lineWidth/2))}(u,p,f);let i=0;for(let g=t.length-1;g>=0;g--){const y=t[g];0===y?i++:1===y?n(u,p,f,e[i++]):2===y?h(u,p,f,e[i++]):3===y?o(u,p,f,e[i++]):4===y?r(u,p,f,e[i++]):5===y?d(u,p,f,e[i++]):6===y?a(u,p,f,e[i++]):7===y?l(u,p,f,e[i++]):8===y?s(u,p,f,e[i++]):9===y&&c(u,p,f,e[i++])}u.stroke()}}(i,u),requestAnimationFrame(g)};g()}()})),window.addEventListener("keydown",(e=>{const i=e.code.toLowerCase();"backspace"===i?t.length>0&&t.pop():"digit0"===i||"numpad0"===i?t.length>0&&t.length<4&&t.push(0):"digit1"===i||"numpad1"===i?t.length<4&&t.push(1):"digit2"===i||"numpad2"===i?t.length<4&&t.push(2):"digit3"===i||"numpad3"===i?t.length<4&&t.push(3):"digit4"===i||"numpad4"===i?t.length<4&&t.push(4):"digit5"===i||"numpad5"===i?t.length<4&&t.push(5):"digit6"===i||"numpad6"===i?t.length<4&&t.push(6):"digit7"===i||"numpad7"===i?t.length<4&&t.push(7):"digit8"===i||"numpad8"===i?t.length<4&&t.push(8):"digit9"!==i&&"numpad9"!==i||t.length<4&&t.push(9),console.log(JSON.stringify(t))}));const e=[{x:1,y:1},{x:-1,y:1},{x:1,y:-1},{x:-1,y:-1}];function n(t,e,i,n){t.moveTo(i.width,i.height-(e.height-t.lineWidth/2)*n.y),t.lineTo(i.width+(e.width-t.lineWidth/2)*n.x,i.height-(e.height-t.lineWidth/2)*n.y)}function h(t,e,i,n){t.moveTo(i.width,i.height-.3*e.height*n.y),t.lineTo(i.width+(e.width-t.lineWidth/2)*n.x,i.height-.3*e.height*n.y)}function o(t,e,i,n){t.moveTo(i.width,i.height-(e.height-t.lineWidth/2)*n.y),t.lineTo(i.width+(e.width-t.lineWidth/2)*n.x,i.height-.3*e.height*n.y)}function r(t,e,i,n){t.moveTo(i.width,i.height-.3*e.height*n.y),t.lineTo(i.width+(e.width-t.lineWidth/2)*n.x,i.height-(e.height-t.lineWidth/2)*n.y)}function d(t,e,i,n){t.moveTo(i.width,i.height-.3*e.height*n.y),t.lineTo(i.width+(e.width-t.lineWidth/2)*n.x,i.height-(e.height-t.lineWidth/2)*n.y),t.lineTo(i.width,i.height-(e.height-t.lineWidth/2)*n.y)}function a(t,e,i,n){t.moveTo(i.width+(e.width-t.lineWidth/2)*n.x,i.height-(e.height-t.lineWidth/2)*n.y),t.lineTo(i.width+(e.width-t.lineWidth/2)*n.x,i.height-.3*e.height*n.y)}function l(t,e,i,n){t.moveTo(i.width,i.height-(e.height-t.lineWidth/2)*n.y),t.lineTo(i.width+(e.width-t.lineWidth/2)*n.x,i.height-(e.height-t.lineWidth/2)*n.y),t.lineTo(i.width+(e.width-t.lineWidth/2)*n.x,i.height-.3*e.height*n.y)}function s(t,e,i,n){t.moveTo(i.width,i.height-.3*e.height*n.y),t.lineTo(i.width+(e.width-t.lineWidth/2)*n.x,i.height-.3*e.height*n.y),t.lineTo(i.width+(e.width-t.lineWidth/2)*n.x,i.height-(e.height-t.lineWidth/2)*n.y)}function c(t,e,i,n){t.moveTo(i.width,i.height-(e.height-t.lineWidth/2)*n.y),t.lineTo(i.width+(e.width-t.lineWidth/2)*n.x,i.height-(e.height-t.lineWidth/2)*n.y),t.lineTo(i.width+(e.width-t.lineWidth/2)*n.x,i.height-.3*e.height*n.y),t.lineTo(i.width,i.height-.3*e.height*n.y)}})()})();