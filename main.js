(()=>{"use strict";var n={208:(n,e,t)=>{t.d(e,{A:()=>i});var o=t(354),r=t.n(o),A=t(314),a=t.n(A)()(r());a.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap);"]),a.push([n.id,':root {\n  --white: #fffbfb;\n  --grey: #f0eef1;\n  --black: #050505;\n  --btn-hover: #a1a1aa;\n  --close-btn: #fecaca;\n  --submit-btn: #d9f99d;\n  --close-btn-hover: #f87171;\n  --submit-btn-hover: #a3e635;\n  --box-shadow: rgba(0, 0, 0, 0.16) 0px 2px 4px;\n  --read-btn: #fde047;\n  --remove-btn: #f87171;\n}\n\n*,\n*::before,\n*::after {\n  padding: 0;\n  margin: 0;\n  outline: none;\n  box-sizing: border-box;\n  -webkit-appearance: none;\n  appearance: none;\n}\n\nbody {\n  min-height: 100vh;\n  display: grid;\n  grid-template-rows: auto 1fr auto;\n  grid-template-areas:\n    "header"\n    "main"\n    "footer";\n  font-size: 14px;\n  font-family: "Poppins";\n}\n/*========================HEADER======================*/\nheader {\n  grid-area: header;\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1.2rem 14rem;\n  background-color: var(--white);\n  box-shadow: rgba(0, 0, 0, 0.16) 0px 2px 4px;\n  position: relative;\n}\nheader h1 {\n  font-weight: 700;\n  font-size: 2rem;\n}\nheader > .theme {\n  display: flex;\n  gap: 5rem;\n  align-items: center;\n}\n.theme > button {\n  width: 6rem;\n  border: 0;\n  border-radius: 20px;\n  font-family: "Poppins";\n  font-size: 1.3rem;\n  padding: 1rem;\n  cursor: pointer;\n  transition: all 0.5s ease;\n}\n\n/*========================MAIN======================*/\n\nmain {\n  grid-area: main;\n  background-color: var(--grey);\n  width: 100%;\n  padding: 1.2rem 14rem;\n}\nmain > div {\n  text-align: center;\n}\n.add-book-btn {\n  width: 11rem;\n  border: 0;\n  border-radius: 20px;\n  font-family: "Poppins";\n  font-size: 1.5rem;\n  font-weight: 600;\n  padding: 1rem 10px;\n  cursor: pointer;\n  transition: all 0.5s ease;\n}\n.add-book-btn:hover,\n.btn:hover {\n  background-color: var(--btn-hover);\n}\n/*========================MODAL======================*/\n\ndialog {\n  border: 0;\n  border-radius: 12px;\n  padding: 2.3rem 1rem;\n  font-family: "Poppins";\n\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n}\ndialog::backdrop {\n  background-color: rgba(0, 0, 0, 0.8);\n}\n\nform {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n  font-size: 1.2rem;\n}\nform button {\n  padding: 0.8rem 1.7rem;\n  border-radius: 12px;\n  border: 0;\n  background-color: var(--submit-btn);\n  cursor: pointer;\n  transition: all 0.5s ease;\n  font-weight: 500;\n  font-family: inherit;\n}\n.buttons {\n  display: flex;\n  justify-content: space-evenly;\n}\n.close-btn {\n  background-color: var(--close-btn);\n}\n.submit-btn:hover {\n  background-color: var(--submit-btn-hover);\n}\n.close-btn:hover {\n  background-color: var(--close-btn-hover);\n}\ninput[type="text"] {\n  padding: 20px;\n  border: 2px solid var(--grey);\n  border-radius: 12px;\n  width: 300px;\n  font-size: 18px;\n}\nlabel {\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  font-weight: 500;\n  height: 100%;\n  font-size: 16px;\n}\ninput[type="checkbox"] {\n  width: 20px;\n  height: 20px;\n  border: 2px solid var(--grey);\n  cursor: pointer;\n  font: inherit;\n  transition: all 0.5s ease;\n  appearance: checkbox;\n}\ninput[type="checkbox"]:checked {\n  color: #bef264;\n}\ninput[type="checkbox"]:hover {\n  border: 2px solid var(--black);\n}\n/*========================FOOTER======================*/\narticle {\n  margin-top: 50px;\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  gap: 40px;\n  text-align: center;\n  grid-template-rows: auto;\n  font-family: inherit;\n}\narticle div {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  font-size: 20px;\n  gap: 20px;\n  padding: 20px;\n  border-radius: 12px;\n  background-color: var(--white);\n  box-shadow: var(--box-shadow);\n  line-height: 1.2;\n  font-weight: 500;\n  position: relative;\n  z-index: 1;\n}\narticle div button {\n  border: 0;\n  border-radius: 12px;\n  padding: 1rem;\n  transition: all 0.3s ease;\n  cursor: pointer;\n  font-size: 20px;\n  font-weight: 500;\n}\n.read-btn {\n  background-color: var(--read-btn);\n}\n.read-btn:hover {\n  background-color: var(--submit-btn-hover);\n}\n.remove-btn {\n  background-color: var(--close-btn-hover);\n}\n.read-btn.isRead {\n  background-color: var(--submit-btn-hover);\n  border: 0;\n  transition: all 0.2s ease;\n}\n\n/*========================FOOTER======================*/\n\nfooter {\n  grid-area: footer;\n  background-color: var(--grey);\n  padding: 0.8rem;\n  text-align: center;\n  font-family: "Poppins";\n  font-weight: 500;\n  font-size: 18px;\n}\nfooter a {\n  color: var(--black);\n  transition: all 1s ease;\n}\nfooter a:hover {\n  text-decoration: none;\n}\nfooter a:visited {\n  color: var(--black);\n}\nfooter a:active {\n  color: var(--black);\n}\n',"",{version:3,sources:["webpack://./src/style.css"],names:[],mappings:"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",sourcesContent:['@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap");\n:root {\n  --white: #fffbfb;\n  --grey: #f0eef1;\n  --black: #050505;\n  --btn-hover: #a1a1aa;\n  --close-btn: #fecaca;\n  --submit-btn: #d9f99d;\n  --close-btn-hover: #f87171;\n  --submit-btn-hover: #a3e635;\n  --box-shadow: rgba(0, 0, 0, 0.16) 0px 2px 4px;\n  --read-btn: #fde047;\n  --remove-btn: #f87171;\n}\n\n*,\n*::before,\n*::after {\n  padding: 0;\n  margin: 0;\n  outline: none;\n  box-sizing: border-box;\n  -webkit-appearance: none;\n  appearance: none;\n}\n\nbody {\n  min-height: 100vh;\n  display: grid;\n  grid-template-rows: auto 1fr auto;\n  grid-template-areas:\n    "header"\n    "main"\n    "footer";\n  font-size: 14px;\n  font-family: "Poppins";\n}\n/*========================HEADER======================*/\nheader {\n  grid-area: header;\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1.2rem 14rem;\n  background-color: var(--white);\n  box-shadow: rgba(0, 0, 0, 0.16) 0px 2px 4px;\n  position: relative;\n}\nheader h1 {\n  font-weight: 700;\n  font-size: 2rem;\n}\nheader > .theme {\n  display: flex;\n  gap: 5rem;\n  align-items: center;\n}\n.theme > button {\n  width: 6rem;\n  border: 0;\n  border-radius: 20px;\n  font-family: "Poppins";\n  font-size: 1.3rem;\n  padding: 1rem;\n  cursor: pointer;\n  transition: all 0.5s ease;\n}\n\n/*========================MAIN======================*/\n\nmain {\n  grid-area: main;\n  background-color: var(--grey);\n  width: 100%;\n  padding: 1.2rem 14rem;\n}\nmain > div {\n  text-align: center;\n}\n.add-book-btn {\n  width: 11rem;\n  border: 0;\n  border-radius: 20px;\n  font-family: "Poppins";\n  font-size: 1.5rem;\n  font-weight: 600;\n  padding: 1rem 10px;\n  cursor: pointer;\n  transition: all 0.5s ease;\n}\n.add-book-btn:hover,\n.btn:hover {\n  background-color: var(--btn-hover);\n}\n/*========================MODAL======================*/\n\ndialog {\n  border: 0;\n  border-radius: 12px;\n  padding: 2.3rem 1rem;\n  font-family: "Poppins";\n\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n}\ndialog::backdrop {\n  background-color: rgba(0, 0, 0, 0.8);\n}\n\nform {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n  font-size: 1.2rem;\n}\nform button {\n  padding: 0.8rem 1.7rem;\n  border-radius: 12px;\n  border: 0;\n  background-color: var(--submit-btn);\n  cursor: pointer;\n  transition: all 0.5s ease;\n  font-weight: 500;\n  font-family: inherit;\n}\n.buttons {\n  display: flex;\n  justify-content: space-evenly;\n}\n.close-btn {\n  background-color: var(--close-btn);\n}\n.submit-btn:hover {\n  background-color: var(--submit-btn-hover);\n}\n.close-btn:hover {\n  background-color: var(--close-btn-hover);\n}\ninput[type="text"] {\n  padding: 20px;\n  border: 2px solid var(--grey);\n  border-radius: 12px;\n  width: 300px;\n  font-size: 18px;\n}\nlabel {\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  font-weight: 500;\n  height: 100%;\n  font-size: 16px;\n}\ninput[type="checkbox"] {\n  width: 20px;\n  height: 20px;\n  border: 2px solid var(--grey);\n  cursor: pointer;\n  font: inherit;\n  transition: all 0.5s ease;\n  appearance: checkbox;\n}\ninput[type="checkbox"]:checked {\n  color: #bef264;\n}\ninput[type="checkbox"]:hover {\n  border: 2px solid var(--black);\n}\n/*========================FOOTER======================*/\narticle {\n  margin-top: 50px;\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  gap: 40px;\n  text-align: center;\n  grid-template-rows: auto;\n  font-family: inherit;\n}\narticle div {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  font-size: 20px;\n  gap: 20px;\n  padding: 20px;\n  border-radius: 12px;\n  background-color: var(--white);\n  box-shadow: var(--box-shadow);\n  line-height: 1.2;\n  font-weight: 500;\n  position: relative;\n  z-index: 1;\n}\narticle div button {\n  border: 0;\n  border-radius: 12px;\n  padding: 1rem;\n  transition: all 0.3s ease;\n  cursor: pointer;\n  font-size: 20px;\n  font-weight: 500;\n}\n.read-btn {\n  background-color: var(--read-btn);\n}\n.read-btn:hover {\n  background-color: var(--submit-btn-hover);\n}\n.remove-btn {\n  background-color: var(--close-btn-hover);\n}\n.read-btn.isRead {\n  background-color: var(--submit-btn-hover);\n  border: 0;\n  transition: all 0.2s ease;\n}\n\n/*========================FOOTER======================*/\n\nfooter {\n  grid-area: footer;\n  background-color: var(--grey);\n  padding: 0.8rem;\n  text-align: center;\n  font-family: "Poppins";\n  font-weight: 500;\n  font-size: 18px;\n}\nfooter a {\n  color: var(--black);\n  transition: all 1s ease;\n}\nfooter a:hover {\n  text-decoration: none;\n}\nfooter a:visited {\n  color: var(--black);\n}\nfooter a:active {\n  color: var(--black);\n}\n'],sourceRoot:""}]);const i=a},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,A){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(o)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(a[s]=!0)}for(var c=0;c<n.length;c++){var d=[].concat(n[c]);o&&a[d[0]]||(void 0!==A&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=A),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),e.push(d))}},e}},354:n=>{n.exports=function(n){var e=n[1],t=n[3];if(!t)return e;if("function"==typeof btoa){var o=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),r="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o),A="/*# ".concat(r," */");return[e].concat([A]).join("\n")}return[e].join("\n")}},72:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var A={},a=[],i=0;i<n.length;i++){var s=n[i],c=o.base?s[0]+o.base:s[0],d=A[c]||0,l="".concat(c," ").concat(d);A[c]=d+1;var p=t(l),C={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)e[p].references++,e[p].updater(C);else{var u=r(C,o);o.byIndex=i,e.splice(i,0,{identifier:l,updater:u,references:1})}a.push(l)}return a}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var A=o(n=n||[],r=r||{});return function(n){n=n||[];for(var a=0;a<A.length;a++){var i=t(A[a]);e[i].references--}for(var s=o(n,r),c=0;c<A.length;c++){var d=t(A[c]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}A=s}}},659:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var A=t.sourceMap;A&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(A))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var A=e[o]={id:o,exports:{}};return n[o](A,A.exports,t),A.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0;var o=t(72),r=t.n(o),A=t(825),a=t.n(A),i=t(659),s=t.n(i),c=t(56),d=t.n(c),l=t(540),p=t.n(l),C=t(113),u=t.n(C),b=t(208),B={};B.styleTagTransform=u(),B.setAttributes=d(),B.insert=s().bind(null,"head"),B.domAPI=a(),B.insertStyleElement=p(),r()(b.A,B),b.A&&b.A.locals&&b.A.locals;class f{constructor(n,e,t){this.name=n,this.author=e,this.complete=t}}(()=>{const n=document.querySelector("[data-modal]"),e=document.querySelector("[data-form]"),t=document.querySelector("[data-add-btn]"),o=e.querySelector("[data-close-btn]"),r=document.querySelector("[data-books-container]"),A=JSON.parse(localStorage.getItem("book.list"))||[],a=()=>n.showModal(),i=()=>n.close(),s=()=>localStorage.setItem("book.list",JSON.stringify(A)),c=()=>{d(),A.forEach(((n,e)=>{const t=((n,e)=>{const t=document.createElement("div"),o=document.createElement("p"),r=document.createElement("p"),A=document.createElement("button"),a=document.createElement("button");return o.classList.add("book-title"),r.classList.add("book-author"),A.classList.add("read-btn"),a.classList.add("remove-btn"),o.textContent=n.name,r.textContent=n.author,A.classList.toggle("isRead",n.complete),l(A),a.textContent="Delete",t.append(o,r,A,a),t.dataset.bookIndex=e,t})(n,e);r.append(t)}))},d=()=>{for(;r.firstChild;)r.removeChild(r.firstChild)},l=n=>{(n=>n.classList.contains("isRead"))(n)?n.textContent="Read":n.textContent="Not Read"};t.addEventListener("click",a),o.addEventListener("click",i),e.addEventListener("submit",(t=>{t.preventDefault(),(()=>{const n=document.querySelector("[data-name]").value.trim(),e=document.querySelector("[data-author]").value.trim(),t=document.querySelector("[data-checkbox]").checked,o=new f(n,e,t);A.push(o),s()})(),c(),n.close(),e.reset()})),r.addEventListener("click",(n=>{if(n.target.classList.contains("remove-btn")){const e=n.target.closest("div").dataset.bookIndex;A.splice(e,1),s(),c()}})),r.addEventListener("click",(n=>{if(n.target.classList.contains("read-btn")){const e=n.target.closest("div").dataset.bookIndex;A[e].complete=!1===A[e].complete,s(),c()}})),document.querySelector("[data-year]").textContent=`${(new Date).getFullYear()}`,c()})()})();
//# sourceMappingURL=main.js.map