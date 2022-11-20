(()=>{"use strict";function t(t){return function(t){if(Array.isArray(t))return e(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,n){if(!t)return;if("string"==typeof t)return e(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return e(t,n)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function n(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var r=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.$el=e}var e,r,o;return e=t,(r=[{key:"HTML",value:function(t){return this.$el.innerHTML=t,this}},{key:"append",value:function(t){return t.append(this.$el),this}},{key:"ajStyleSeparator",value:function(){var t=this;this.$el.className.split(" ").forEach((function(e){"table"===e&&document.querySelectorAll("[data-resize=column]").forEach((function(e){e.style.height=t.$el.clientHeight-26+"px"}))}))}}])&&n(e.prototype,r),o&&n(e,o),Object.defineProperty(e,"prototype",{writable:!1}),t}();function o(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return new r(t,e)}function i(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}o.create=function(e,n){var r,i=document.createElement("".concat(e));n&&(r=i.classList).add.apply(r,t(n));return o(i)};var a=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.$wrap=document.querySelector(e),this.components=n.components}var e,n,r;return e=t,(n=[{key:"render",value:function(){var t=this;this.components=this.components.map((function(e){var n=o.create("div",e.class),r=new e(n);return n.HTML(r.toHTML()).append(t.$wrap).ajStyleSeparator(),r})),this.components.forEach((function(t){t.init()}))}}])&&i(e.prototype,n),r&&i(e,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function c(t){return"string"!=typeof t?"":t.charAt(0).toUpperCase()+t.slice(1)}function u(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function l(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function f(t){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},f(t)}function s(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function p(t,e){return p=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},p(t,e)}function y(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=v(t);if(e){var o=v(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return b(this,n)}}function b(t,e){if(e&&("object"===f(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function v(t){return v=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},v(t)}var d=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&p(t,e)}(i,t);var e,n,r,o=y(i);function i(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),(n=o.call(this,t,e.listeners)).name=e.name||"",n}return e=i,(n=[{key:"init",value:function(){this.initDomListeners()}}])&&s(e.prototype,n),r&&s(e,r),Object.defineProperty(e,"prototype",{writable:!1}),i}(function(){function t(e,n){u(this,t),this.$el=e.$el,this.listners=n}var e,n,r;return e=t,(n=[{key:"initDomListeners",value:function(){var t=this;this.listners.forEach((function(e){var n=t["on"+c(e)];if(!n)throw new Error("ошибка -- в ".concat(t.name,"(нет функции)"));t.$el.addEventListener(e,n.bind(t))}))}},{key:"removeDomListeners",value:function(){var t=this;this.listners.forEach((function(e){var n=t["off"+c(e)];if(!n)throw new Error("ошибка -- в ".concat(t.name,"(нет функции)"));t.$el.removeEventListener(e,n.bind(n))}))}}])&&l(e.prototype,n),r&&l(e,r),Object.defineProperty(e,"prototype",{writable:!1}),t}());function m(t){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},m(t)}function h(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function w(t,e){return w=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},w(t,e)}function _(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=O(t);if(e){var o=O(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return g(this,n)}}function g(t,e){if(e&&("object"===m(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function O(t){return O=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},O(t)}var j,S,P,x=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&w(t,e)}(i,t);var e,n,r,o=_(i);function i(t){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),o.call(this,t,{name:"table",listeners:[]})}return e=i,(n=[{key:"toHTML",value:function(){return'<div class="main__editing-item">\n        <img src="./icon/align-left.png" alt="">\n    </div>\n    <div class="main__editing-item">\n        <img src="./icon/align-center.png" alt="">\n    </div>\n    <div class="main__editing-item">\n        <img src="./icon/align-right.png" alt="">\n    </div>\n    <div class="main__editing-item">\n        <img src="./icon/bold.png" alt="">\n    </div>\n    <div class="main__editing-item">\n        <img src="./icon/italic.png" alt="">\n    </div>\n    <div class="main__editing-item">\n        <img src="./icon/underline.png" alt="">\n    </div>'}}])&&h(e.prototype,n),r&&h(e,r),Object.defineProperty(e,"prototype",{writable:!1}),i}(d);function E(t){return E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},E(t)}function T(t){throw new TypeError('"'+t+'" is read-only')}function R(t){return function(t){if(Array.isArray(t))return k(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return k(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return k(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function k(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function A(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function L(t,e){return L=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},L(t,e)}function Y(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=M(t);if(e){var o=M(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return $(this,n)}}function $(t,e){if(e&&("object"===E(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function M(t){return M=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},M(t)}P=["main__editing-box"],(S="class")in(j=x)?Object.defineProperty(j,S,{value:P,enumerable:!0,configurable:!0,writable:!0}):j[S]=P;var X=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&L(t,e)}(i,t);var e,n,r,o=Y(i);function i(t){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),o.call(this,t,{name:"table",listeners:["mousedown","mouseup"]})}return e=i,n=[{key:"toHTML",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:8,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:45;this.$el.setAttribute("data-elem","table");for(var n=R("ABCDEFGHIJKLMNOPQRSTUVWXYZ"),r="",o=1;o<e;o++){var i=o;o>26&&(i=o-26),r="".concat(r,'\n            <div data-col="').concat(o,'" class="table__row-title copy-none">').concat(n[i-1],'\n                <div class="table__column-separator">\n                    <div data-resize="column" class="separator-line__column"></div>\n                </div>\n            </div>')}return'<div class="table__fx-box">\n                    <div class="table__fx-title copy-none">fx</div>\n                    <input type="text" class="table__fx-input" name="" id="">\n                </div>\n                <div class="table__fx-box">\n                    <div class="table__fx-title copy-none"></div>\n                    <div id="maxRow" class="table__row-box">\n                    '.concat(r,"\n                    </div>\n                </div>").concat(this.createRows(t,e))}},{key:"createRows",value:function(t,e){for(var n="",r="",o=0;o<e;o++)r="".concat(r,' <div data-col="').concat(o+1,'" class="table__row-item"></div>');for(var i=0;i<t;i++){var a='<div class="table__fx-box">\n            <div class="table__fx-title copy-none">'.concat(i+1,'\n                <div style="" class="table__row-separator">\n                    <div class="separator-line__row"></div>\n                </div>\n            </div>\n            <div class="table__row-box">\n                ').concat(r,"\n            </div>\n            </div>");n="".concat(n," ").concat(a)}return n}},{key:"moveX",value:function(t){var e=Math.round(t.parentElement.getBoundingClientRect().left),n=event.pageX-e;n<40&&T("positionSeparator"),t.style.cssText="left: ".concat(n-4+"px"),this.SeparatorX=t,this.widthSeparatorX=n}},{key:"moveY",value:function(t){var e=Math.round(t.parentElement.getBoundingClientRect().top),n=event.pageY-e;n<40&&T("positionSeparator"),t.style.cssText="top: ".concat(n-4+"px"),this.SeparatorY=t,this.widthSeparatorY=n}},{key:"onMousedown",value:function(){var t=event.target;"table__column-separator"===t.className&&(this.removeFunctionTableX=this.moveX.bind(this,event.target),document.addEventListener("mousemove",this.removeFunctionTableX)),"table__row-separator"===t.className&&(this.removeFunctionTableY=this.moveY.bind(this,t),document.addEventListener("mousemove",this.removeFunctionTableY))}},{key:"onMouseup",value:function(){var t=this;this.widthSeparatorX&&(this.$el.querySelectorAll('[data-col="'.concat(this.SeparatorX.parentElement.dataset.col,'"')).forEach((function(e){e.style.cssText="flex: 0 0 ".concat(t.widthSeparatorX+4+"px")})),40===this.widthSeparatorX&&(this.SeparatorX.style.cssText="left: 86%")),this.widthSeparatorY&&(console.log(this.SeparatorY.parentElement,this.widthSeparatorY),this.SeparatorY.parentElement.style.cssText="height: ".concat(this.widthSeparatorY+"px"),40===this.widthSeparatorY&&(this.SeparatorY.style.cssText="top: 88%")),document.removeEventListener("mousemove",this.removeFunctionTableX),document.removeEventListener("mousemove",this.removeFunctionTableY)}}],n&&A(e.prototype,n),r&&A(e,r),Object.defineProperty(e,"prototype",{writable:!1}),i}(d);function C(t){return C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},C(t)}function B(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function H(t,e){return H=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},H(t,e)}function D(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=I(t);if(e){var o=I(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return F(this,n)}}function F(t,e){if(e&&("object"===C(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function I(t){return I=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},I(t)}!function(t,e,n){e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n}(X,"class",["main__fx-table","table"]);var N=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&H(t,e)}(i,t);var e,n,r,o=D(i);function i(t){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),o.call(this,t,{name:"table",listeners:[]})}return e=i,(n=[{key:"toHTML",value:function(){return'<input type="text" value="Новая таблица" class="main__file-name">\n        <div class="main__file-del/exBox">\n            <button class="main__file-delete">\n                <img src="./icon/trash.png" alt="">\n            </button>\n            <button class="main__file-exit">\n                <img src="./icon/exit.png" alt="">\n            </button>\n        </div>'}}])&&B(e.prototype,n),r&&B(e,r),Object.defineProperty(e,"prototype",{writable:!1}),i}(d);!function(t,e,n){e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n}(N,"class",["main__file-box"]),new a("#wrap",{components:[N,x,X]}).render()})();