/* Source Themes Academic v4.3.1 | https://sourcethemes.com/academic/ */

;
/*!
* Bootstrap v4.3.1 (https://getbootstrap.com/)
* Copyright 2011-2019 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
* Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
*/!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("jquery"),require("popper.js")):"function"==typeof define&&define.amd?define(["exports","jquery","popper.js"],e):e((t=t||self).bootstrap={},t.jQuery,t.Popper)}(this,function(t,g,u){"use strict";function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function s(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}function l(o){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},e=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(e=e.concat(Object.getOwnPropertySymbols(r).filter(function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable}))),e.forEach(function(t){var e,n,i;e=o,i=r[n=t],n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i})}return o}g=g&&g.hasOwnProperty("default")?g.default:g,u=u&&u.hasOwnProperty("default")?u.default:u;var e="transitionend";function n(t){var e=this,n=!1;return g(this).one(_.TRANSITION_END,function(){n=!0}),setTimeout(function(){n||_.triggerTransitionEnd(e)},t),this}var _={TRANSITION_END:"bsTransitionEnd",getUID:function(t){for(;t+=~~(1e6*Math.random()),document.getElementById(t););return t},getSelectorFromElement:function(t){var e=t.getAttribute("data-target");if(!e||"#"===e){var n=t.getAttribute("href");e=n&&"#"!==n?n.trim():""}try{return document.querySelector(e)?e:null}catch(t){return null}},getTransitionDurationFromElement:function(t){if(!t)return 0;var e=g(t).css("transition-duration"),n=g(t).css("transition-delay"),i=parseFloat(e),o=parseFloat(n);return i||o?(e=e.split(",")[0],n=n.split(",")[0],1e3*(parseFloat(e)+parseFloat(n))):0},reflow:function(t){return t.offsetHeight},triggerTransitionEnd:function(t){g(t).trigger(e)},supportsTransitionEnd:function(){return Boolean(e)},isElement:function(t){return(t[0]||t).nodeType},typeCheckConfig:function(t,e,n){for(var i in n)if(Object.prototype.hasOwnProperty.call(n,i)){var o=n[i],r=e[i],s=r&&_.isElement(r)?"element":(a=r,{}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase());if(!new RegExp(o).test(s))throw new Error(t.toUpperCase()+': Option "'+i+'" provided type "'+s+'" but expected type "'+o+'".')}var a},findShadowRoot:function(t){if(!document.documentElement.attachShadow)return null;if("function"!=typeof t.getRootNode)return t instanceof ShadowRoot?t:t.parentNode?_.findShadowRoot(t.parentNode):null;var e=t.getRootNode();return e instanceof ShadowRoot?e:null}};g.fn.emulateTransitionEnd=n,g.event.special[_.TRANSITION_END]={bindType:e,delegateType:e,handle:function(t){if(g(t.target).is(this))return t.handleObj.handler.apply(this,arguments)}};var o="alert",r="bs.alert",a="."+r,c=g.fn[o],h={CLOSE:"close"+a,CLOSED:"closed"+a,CLICK_DATA_API:"click"+a+".data-api"},f="alert",d="fade",m="show",p=function(){function i(t){this._element=t}var t=i.prototype;return t.close=function(t){var e=this._element;t&&(e=this._getRootElement(t)),this._triggerCloseEvent(e).isDefaultPrevented()||this._removeElement(e)},t.dispose=function(){g.removeData(this._element,r),this._element=null},t._getRootElement=function(t){var e=_.getSelectorFromElement(t),n=!1;return e&&(n=document.querySelector(e)),n||(n=g(t).closest("."+f)[0]),n},t._triggerCloseEvent=function(t){var e=g.Event(h.CLOSE);return g(t).trigger(e),e},t._removeElement=function(e){var n=this;if(g(e).removeClass(m),g(e).hasClass(d)){var t=_.getTransitionDurationFromElement(e);g(e).one(_.TRANSITION_END,function(t){return n._destroyElement(e,t)}).emulateTransitionEnd(t)}else this._destroyElement(e)},t._destroyElement=function(t){g(t).detach().trigger(h.CLOSED).remove()},i._jQueryInterface=function(n){return this.each(function(){var t=g(this),e=t.data(r);e||(e=new i(this),t.data(r,e)),"close"===n&&e[n](this)})},i._handleDismiss=function(e){return function(t){t&&t.preventDefault(),e.close(this)}},s(i,null,[{key:"VERSION",get:function(){return"4.3.1"}}]),i}();g(document).on(h.CLICK_DATA_API,'[data-dismiss="alert"]',p._handleDismiss(new p)),g.fn[o]=p._jQueryInterface,g.fn[o].Constructor=p,g.fn[o].noConflict=function(){return g.fn[o]=c,p._jQueryInterface};var v="button",y="bs.button",E="."+y,C=".data-api",T=g.fn[v],S="active",b="btn",I="focus",D='[data-toggle^="button"]',w='[data-toggle="buttons"]',A='input:not([type="hidden"])',N=".active",O=".btn",k={CLICK_DATA_API:"click"+E+C,FOCUS_BLUR_DATA_API:"focus"+E+C+" blur"+E+C},P=function(){function n(t){this._element=t}var t=n.prototype;return t.toggle=function(){var t=!0,e=!0,n=g(this._element).closest(w)[0];if(n){var i=this._element.querySelector(A);if(i){if("radio"===i.type)if(i.checked&&this._element.classList.contains(S))t=!1;else{var o=n.querySelector(N);o&&g(o).removeClass(S)}if(t){if(i.hasAttribute("disabled")||n.hasAttribute("disabled")||i.classList.contains("disabled")||n.classList.contains("disabled"))return;i.checked=!this._element.classList.contains(S),g(i).trigger("change")}i.focus(),e=!1}}e&&this._element.setAttribute("aria-pressed",!this._element.classList.contains(S)),t&&g(this._element).toggleClass(S)},t.dispose=function(){g.removeData(this._element,y),this._element=null},n._jQueryInterface=function(e){return this.each(function(){var t=g(this).data(y);t||(t=new n(this),g(this).data(y,t)),"toggle"===e&&t[e]()})},s(n,null,[{key:"VERSION",get:function(){return"4.3.1"}}]),n}();g(document).on(k.CLICK_DATA_API,D,function(t){t.preventDefault();var e=t.target;g(e).hasClass(b)||(e=g(e).closest(O)),P._jQueryInterface.call(g(e),"toggle")}).on(k.FOCUS_BLUR_DATA_API,D,function(t){var e=g(t.target).closest(O)[0];g(e).toggleClass(I,/^focus(in)?$/.test(t.type))}),g.fn[v]=P._jQueryInterface,g.fn[v].Constructor=P,g.fn[v].noConflict=function(){return g.fn[v]=T,P._jQueryInterface};var L="carousel",j="bs.carousel",H="."+j,R=".data-api",x=g.fn[L],F={interval:5e3,keyboard:!0,slide:!1,pause:"hover",wrap:!0,touch:!0},U={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean",touch:"boolean"},W="next",q="prev",M="left",K="right",Q={SLIDE:"slide"+H,SLID:"slid"+H,KEYDOWN:"keydown"+H,MOUSEENTER:"mouseenter"+H,MOUSELEAVE:"mouseleave"+H,TOUCHSTART:"touchstart"+H,TOUCHMOVE:"touchmove"+H,TOUCHEND:"touchend"+H,POINTERDOWN:"pointerdown"+H,POINTERUP:"pointerup"+H,DRAG_START:"dragstart"+H,LOAD_DATA_API:"load"+H+R,CLICK_DATA_API:"click"+H+R},B="carousel",V="active",Y="slide",z="carousel-item-right",X="carousel-item-left",$="carousel-item-next",G="carousel-item-prev",J="pointer-event",Z=".active",tt=".active.carousel-item",et=".carousel-item",nt=".carousel-item img",it=".carousel-item-next, .carousel-item-prev",ot=".carousel-indicators",rt="[data-slide], [data-slide-to]",st='[data-ride="carousel"]',at={TOUCH:"touch",PEN:"pen"},lt=function(){function r(t,e){this._items=null,this._interval=null,this._activeElement=null,this._isPaused=!1,this._isSliding=!1,this.touchTimeout=null,this.touchStartX=0,this.touchDeltaX=0,this._config=this._getConfig(e),this._element=t,this._indicatorsElement=this._element.querySelector(ot),this._touchSupported="ontouchstart"in document.documentElement||0<navigator.maxTouchPoints,this._pointerEvent=Boolean(window.PointerEvent||window.MSPointerEvent),this._addEventListeners()}var t=r.prototype;return t.next=function(){this._isSliding||this._slide(W)},t.nextWhenVisible=function(){!document.hidden&&g(this._element).is(":visible")&&"hidden"!==g(this._element).css("visibility")&&this.next()},t.prev=function(){this._isSliding||this._slide(q)},t.pause=function(t){t||(this._isPaused=!0),this._element.querySelector(it)&&(_.triggerTransitionEnd(this._element),this.cycle(!0)),clearInterval(this._interval),this._interval=null},t.cycle=function(t){t||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this._config.interval&&!this._isPaused&&(this._interval=setInterval((document.visibilityState?this.nextWhenVisible:this.next).bind(this),this._config.interval))},t.to=function(t){var e=this;this._activeElement=this._element.querySelector(tt);var n=this._getItemIndex(this._activeElement);if(!(t>this._items.length-1||t<0))if(this._isSliding)g(this._element).one(Q.SLID,function(){return e.to(t)});else{if(n===t)return this.pause(),void this.cycle();var i=n<t?W:q;this._slide(i,this._items[t])}},t.dispose=function(){g(this._element).off(H),g.removeData(this._element,j),this._items=null,this._config=null,this._element=null,this._interval=null,this._isPaused=null,this._isSliding=null,this._activeElement=null,this._indicatorsElement=null},t._getConfig=function(t){return t=l({},F,t),_.typeCheckConfig(L,t,U),t},t._handleSwipe=function(){var t=Math.abs(this.touchDeltaX);if(!(t<=40)){var e=t/this.touchDeltaX;0<e&&this.prev(),e<0&&this.next()}},t._addEventListeners=function(){var e=this;this._config.keyboard&&g(this._element).on(Q.KEYDOWN,function(t){return e._keydown(t)}),"hover"===this._config.pause&&g(this._element).on(Q.MOUSEENTER,function(t){return e.pause(t)}).on(Q.MOUSELEAVE,function(t){return e.cycle(t)}),this._config.touch&&this._addTouchEventListeners()},t._addTouchEventListeners=function(){var n=this;if(this._touchSupported){var e=function(t){n._pointerEvent&&at[t.originalEvent.pointerType.toUpperCase()]?n.touchStartX=t.originalEvent.clientX:n._pointerEvent||(n.touchStartX=t.originalEvent.touches[0].clientX)},i=function(t){n._pointerEvent&&at[t.originalEvent.pointerType.toUpperCase()]&&(n.touchDeltaX=t.originalEvent.clientX-n.touchStartX),n._handleSwipe(),"hover"===n._config.pause&&(n.pause(),n.touchTimeout&&clearTimeout(n.touchTimeout),n.touchTimeout=setTimeout(function(t){return n.cycle(t)},500+n._config.interval))};g(this._element.querySelectorAll(nt)).on(Q.DRAG_START,function(t){return t.preventDefault()}),this._pointerEvent?(g(this._element).on(Q.POINTERDOWN,function(t){return e(t)}),g(this._element).on(Q.POINTERUP,function(t){return i(t)}),this._element.classList.add(J)):(g(this._element).on(Q.TOUCHSTART,function(t){return e(t)}),g(this._element).on(Q.TOUCHMOVE,function(t){var e;(e=t).originalEvent.touches&&1<e.originalEvent.touches.length?n.touchDeltaX=0:n.touchDeltaX=e.originalEvent.touches[0].clientX-n.touchStartX}),g(this._element).on(Q.TOUCHEND,function(t){return i(t)}))}},t._keydown=function(t){if(!/input|textarea/i.test(t.target.tagName))switch(t.which){case 37:t.preventDefault(),this.prev();break;case 39:t.preventDefault(),this.next()}},t._getItemIndex=function(t){return this._items=t&&t.parentNode?[].slice.call(t.parentNode.querySelectorAll(et)):[],this._items.indexOf(t)},t._getItemByDirection=function(t,e){var n=t===W,i=t===q,o=this._getItemIndex(e),r=this._items.length-1;if((i&&0===o||n&&o===r)&&!this._config.wrap)return e;var s=(o+(t===q?-1:1))%this._items.length;return-1===s?this._items[this._items.length-1]:this._items[s]},t._triggerSlideEvent=function(t,e){var n=this._getItemIndex(t),i=this._getItemIndex(this._element.querySelector(tt)),o=g.Event(Q.SLIDE,{relatedTarget:t,direction:e,from:i,to:n});return g(this._element).trigger(o),o},t._setActiveIndicatorElement=function(t){if(this._indicatorsElement){var e=[].slice.call(this._indicatorsElement.querySelectorAll(Z));g(e).removeClass(V);var n=this._indicatorsElement.children[this._getItemIndex(t)];n&&g(n).addClass(V)}},t._slide=function(t,e){var n,i,o,r=this,s=this._element.querySelector(tt),a=this._getItemIndex(s),l=e||s&&this._getItemByDirection(t,s),c=this._getItemIndex(l),h=Boolean(this._interval);if(o=t===W?(n=X,i=$,M):(n=z,i=G,K),l&&g(l).hasClass(V))this._isSliding=!1;else if(!this._triggerSlideEvent(l,o).isDefaultPrevented()&&s&&l){this._isSliding=!0,h&&this.pause(),this._setActiveIndicatorElement(l);var u=g.Event(Q.SLID,{relatedTarget:l,direction:o,from:a,to:c});if(g(this._element).hasClass(Y)){g(l).addClass(i),_.reflow(l),g(s).addClass(n),g(l).addClass(n);var f=parseInt(l.getAttribute("data-interval"),10);this._config.interval=f?(this._config.defaultInterval=this._config.defaultInterval||this._config.interval,f):this._config.defaultInterval||this._config.interval;var d=_.getTransitionDurationFromElement(s);g(s).one(_.TRANSITION_END,function(){g(l).removeClass(n+" "+i).addClass(V),g(s).removeClass(V+" "+i+" "+n),r._isSliding=!1,setTimeout(function(){return g(r._element).trigger(u)},0)}).emulateTransitionEnd(d)}else g(s).removeClass(V),g(l).addClass(V),this._isSliding=!1,g(this._element).trigger(u);h&&this.cycle()}},r._jQueryInterface=function(i){return this.each(function(){var t=g(this).data(j),e=l({},F,g(this).data());"object"==typeof i&&(e=l({},e,i));var n="string"==typeof i?i:e.slide;if(t||(t=new r(this,e),g(this).data(j,t)),"number"==typeof i)t.to(i);else if("string"==typeof n){if("undefined"==typeof t[n])throw new TypeError('No method named "'+n+'"');t[n]()}else e.interval&&e.ride&&(t.pause(),t.cycle())})},r._dataApiClickHandler=function(t){var e=_.getSelectorFromElement(this);if(e){var n=g(e)[0];if(n&&g(n).hasClass(B)){var i=l({},g(n).data(),g(this).data()),o=this.getAttribute("data-slide-to");o&&(i.interval=!1),r._jQueryInterface.call(g(n),i),o&&g(n).data(j).to(o),t.preventDefault()}}},s(r,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"Default",get:function(){return F}}]),r}();g(document).on(Q.CLICK_DATA_API,rt,lt._dataApiClickHandler),g(window).on(Q.LOAD_DATA_API,function(){for(var t=[].slice.call(document.querySelectorAll(st)),e=0,n=t.length;e<n;e++){var i=g(t[e]);lt._jQueryInterface.call(i,i.data())}}),g.fn[L]=lt._jQueryInterface,g.fn[L].Constructor=lt,g.fn[L].noConflict=function(){return g.fn[L]=x,lt._jQueryInterface};var ct="collapse",ht="bs.collapse",ut="."+ht,ft=g.fn[ct],dt={toggle:!0,parent:""},gt={toggle:"boolean",parent:"(string|element)"},_t={SHOW:"show"+ut,SHOWN:"shown"+ut,HIDE:"hide"+ut,HIDDEN:"hidden"+ut,CLICK_DATA_API:"click"+ut+".data-api"},mt="show",pt="collapse",vt="collapsing",yt="collapsed",Et="width",Ct="height",Tt=".show, .collapsing",St='[data-toggle="collapse"]',bt=function(){function a(e,t){this._isTransitioning=!1,this._element=e,this._config=this._getConfig(t),this._triggerArray=[].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#'+e.id+'"],[data-toggle="collapse"][data-target="#'+e.id+'"]'));for(var n=[].slice.call(document.querySelectorAll(St)),i=0,o=n.length;i<o;i++){var r=n[i],s=_.getSelectorFromElement(r),a=[].slice.call(document.querySelectorAll(s)).filter(function(t){return t===e});null!==s&&0<a.length&&(this._selector=s,this._triggerArray.push(r))}this._parent=this._config.parent?this._getParent():null,this._config.parent||this._addAriaAndCollapsedClass(this._element,this._triggerArray),this._config.toggle&&this.toggle()}var t=a.prototype;return t.toggle=function(){g(this._element).hasClass(mt)?this.hide():this.show()},t.show=function(){var t,e,n=this;if(!this._isTransitioning&&!g(this._element).hasClass(mt)&&(this._parent&&0===(t=[].slice.call(this._parent.querySelectorAll(Tt)).filter(function(t){return"string"==typeof n._config.parent?t.getAttribute("data-parent")===n._config.parent:t.classList.contains(pt)})).length&&(t=null),!(t&&(e=g(t).not(this._selector).data(ht))&&e._isTransitioning))){var i=g.Event(_t.SHOW);if(g(this._element).trigger(i),!i.isDefaultPrevented()){t&&(a._jQueryInterface.call(g(t).not(this._selector),"hide"),e||g(t).data(ht,null));var o=this._getDimension();g(this._element).removeClass(pt).addClass(vt),this._element.style[o]=0,this._triggerArray.length&&g(this._triggerArray).removeClass(yt).attr("aria-expanded",!0),this.setTransitioning(!0);var r="scroll"+(o[0].toUpperCase()+o.slice(1)),s=_.getTransitionDurationFromElement(this._element);g(this._element).one(_.TRANSITION_END,function(){g(n._element).removeClass(vt).addClass(pt).addClass(mt),n._element.style[o]="",n.setTransitioning(!1),g(n._element).trigger(_t.SHOWN)}).emulateTransitionEnd(s),this._element.style[o]=this._element[r]+"px"}}},t.hide=function(){var t=this;if(!this._isTransitioning&&g(this._element).hasClass(mt)){var e=g.Event(_t.HIDE);if(g(this._element).trigger(e),!e.isDefaultPrevented()){var n=this._getDimension();this._element.style[n]=this._element.getBoundingClientRect()[n]+"px",_.reflow(this._element),g(this._element).addClass(vt).removeClass(pt).removeClass(mt);var i=this._triggerArray.length;if(0<i)for(var o=0;o<i;o++){var r=this._triggerArray[o],s=_.getSelectorFromElement(r);if(null!==s)g([].slice.call(document.querySelectorAll(s))).hasClass(mt)||g(r).addClass(yt).attr("aria-expanded",!1)}this.setTransitioning(!0);this._element.style[n]="";var a=_.getTransitionDurationFromElement(this._element);g(this._element).one(_.TRANSITION_END,function(){t.setTransitioning(!1),g(t._element).removeClass(vt).addClass(pt).trigger(_t.HIDDEN)}).emulateTransitionEnd(a)}}},t.setTransitioning=function(t){this._isTransitioning=t},t.dispose=function(){g.removeData(this._element,ht),this._config=null,this._parent=null,this._element=null,this._triggerArray=null,this._isTransitioning=null},t._getConfig=function(t){return(t=l({},dt,t)).toggle=Boolean(t.toggle),_.typeCheckConfig(ct,t,gt),t},t._getDimension=function(){return g(this._element).hasClass(Et)?Et:Ct},t._getParent=function(){var t,n=this;_.isElement(this._config.parent)?(t=this._config.parent,"undefined"!=typeof this._config.parent.jquery&&(t=this._config.parent[0])):t=document.querySelector(this._config.parent);var e='[data-toggle="collapse"][data-parent="'+this._config.parent+'"]',i=[].slice.call(t.querySelectorAll(e));return g(i).each(function(t,e){n._addAriaAndCollapsedClass(a._getTargetFromElement(e),[e])}),t},t._addAriaAndCollapsedClass=function(t,e){var n=g(t).hasClass(mt);e.length&&g(e).toggleClass(yt,!n).attr("aria-expanded",n)},a._getTargetFromElement=function(t){var e=_.getSelectorFromElement(t);return e?document.querySelector(e):null},a._jQueryInterface=function(i){return this.each(function(){var t=g(this),e=t.data(ht),n=l({},dt,t.data(),"object"==typeof i&&i?i:{});if(!e&&n.toggle&&/show|hide/.test(i)&&(n.toggle=!1),e||(e=new a(this,n),t.data(ht,e)),"string"==typeof i){if("undefined"==typeof e[i])throw new TypeError('No method named "'+i+'"');e[i]()}})},s(a,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"Default",get:function(){return dt}}]),a}();g(document).on(_t.CLICK_DATA_API,St,function(t){"A"===t.currentTarget.tagName&&t.preventDefault();var n=g(this),e=_.getSelectorFromElement(this),i=[].slice.call(document.querySelectorAll(e));g(i).each(function(){var t=g(this),e=t.data(ht)?"toggle":n.data();bt._jQueryInterface.call(t,e)})}),g.fn[ct]=bt._jQueryInterface,g.fn[ct].Constructor=bt,g.fn[ct].noConflict=function(){return g.fn[ct]=ft,bt._jQueryInterface};var It="dropdown",Dt="bs.dropdown",wt="."+Dt,At=".data-api",Nt=g.fn[It],Ot=new RegExp("38|40|27"),kt={HIDE:"hide"+wt,HIDDEN:"hidden"+wt,SHOW:"show"+wt,SHOWN:"shown"+wt,CLICK:"click"+wt,CLICK_DATA_API:"click"+wt+At,KEYDOWN_DATA_API:"keydown"+wt+At,KEYUP_DATA_API:"keyup"+wt+At},Pt="disabled",Lt="show",jt="dropup",Ht="dropright",Rt="dropleft",xt="dropdown-menu-right",Ft="position-static",Ut='[data-toggle="dropdown"]',Wt=".dropdown form",qt=".dropdown-menu",Mt=".navbar-nav",Kt=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",Qt="top-start",Bt="top-end",Vt="bottom-start",Yt="bottom-end",zt="right-start",Xt="left-start",$t={offset:0,flip:!0,boundary:"scrollParent",reference:"toggle",display:"dynamic"},Gt={offset:"(number|string|function)",flip:"boolean",boundary:"(string|element)",reference:"(string|element)",display:"string"},Jt=function(){function c(t,e){this._element=t,this._popper=null,this._config=this._getConfig(e),this._menu=this._getMenuElement(),this._inNavbar=this._detectNavbar(),this._addEventListeners()}var t=c.prototype;return t.toggle=function(){if(!this._element.disabled&&!g(this._element).hasClass(Pt)){var t=c._getParentFromElement(this._element),e=g(this._menu).hasClass(Lt);if(c._clearMenus(),!e){var n={relatedTarget:this._element},i=g.Event(kt.SHOW,n);if(g(t).trigger(i),!i.isDefaultPrevented()){if(!this._inNavbar){if("undefined"==typeof u)throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)");var o=this._element;"parent"===this._config.reference?o=t:_.isElement(this._config.reference)&&(o=this._config.reference,"undefined"!=typeof this._config.reference.jquery&&(o=this._config.reference[0])),"scrollParent"!==this._config.boundary&&g(t).addClass(Ft),this._popper=new u(o,this._menu,this._getPopperConfig())}"ontouchstart"in document.documentElement&&0===g(t).closest(Mt).length&&g(document.body).children().on("mouseover",null,g.noop),this._element.focus(),this._element.setAttribute("aria-expanded",!0),g(this._menu).toggleClass(Lt),g(t).toggleClass(Lt).trigger(g.Event(kt.SHOWN,n))}}}},t.show=function(){if(!(this._element.disabled||g(this._element).hasClass(Pt)||g(this._menu).hasClass(Lt))){var t={relatedTarget:this._element},e=g.Event(kt.SHOW,t),n=c._getParentFromElement(this._element);g(n).trigger(e),e.isDefaultPrevented()||(g(this._menu).toggleClass(Lt),g(n).toggleClass(Lt).trigger(g.Event(kt.SHOWN,t)))}},t.hide=function(){if(!this._element.disabled&&!g(this._element).hasClass(Pt)&&g(this._menu).hasClass(Lt)){var t={relatedTarget:this._element},e=g.Event(kt.HIDE,t),n=c._getParentFromElement(this._element);g(n).trigger(e),e.isDefaultPrevented()||(g(this._menu).toggleClass(Lt),g(n).toggleClass(Lt).trigger(g.Event(kt.HIDDEN,t)))}},t.dispose=function(){g.removeData(this._element,Dt),g(this._element).off(wt),this._element=null,(this._menu=null)!==this._popper&&(this._popper.destroy(),this._popper=null)},t.update=function(){this._inNavbar=this._detectNavbar(),null!==this._popper&&this._popper.scheduleUpdate()},t._addEventListeners=function(){var e=this;g(this._element).on(kt.CLICK,function(t){t.preventDefault(),t.stopPropagation(),e.toggle()})},t._getConfig=function(t){return t=l({},this.constructor.Default,g(this._element).data(),t),_.typeCheckConfig(It,t,this.constructor.DefaultType),t},t._getMenuElement=function(){if(!this._menu){var t=c._getParentFromElement(this._element);t&&(this._menu=t.querySelector(qt))}return this._menu},t._getPlacement=function(){var t=g(this._element.parentNode),e=Vt;return t.hasClass(jt)?(e=Qt,g(this._menu).hasClass(xt)&&(e=Bt)):t.hasClass(Ht)?e=zt:t.hasClass(Rt)?e=Xt:g(this._menu).hasClass(xt)&&(e=Yt),e},t._detectNavbar=function(){return 0<g(this._element).closest(".navbar").length},t._getOffset=function(){var e=this,t={};return"function"==typeof this._config.offset?t.fn=function(t){return t.offsets=l({},t.offsets,e._config.offset(t.offsets,e._element)||{}),t}:t.offset=this._config.offset,t},t._getPopperConfig=function(){var t={placement:this._getPlacement(),modifiers:{offset:this._getOffset(),flip:{enabled:this._config.flip},preventOverflow:{boundariesElement:this._config.boundary}}};return"static"===this._config.display&&(t.modifiers.applyStyle={enabled:!1}),t},c._jQueryInterface=function(e){return this.each(function(){var t=g(this).data(Dt);if(t||(t=new c(this,"object"==typeof e?e:null),g(this).data(Dt,t)),"string"==typeof e){if("undefined"==typeof t[e])throw new TypeError('No method named "'+e+'"');t[e]()}})},c._clearMenus=function(t){if(!t||3!==t.which&&("keyup"!==t.type||9===t.which))for(var e=[].slice.call(document.querySelectorAll(Ut)),n=0,i=e.length;n<i;n++){var o=c._getParentFromElement(e[n]),r=g(e[n]).data(Dt),s={relatedTarget:e[n]};if(t&&"click"===t.type&&(s.clickEvent=t),r){var a=r._menu;if(g(o).hasClass(Lt)&&!(t&&("click"===t.type&&/input|textarea/i.test(t.target.tagName)||"keyup"===t.type&&9===t.which)&&g.contains(o,t.target))){var l=g.Event(kt.HIDE,s);g(o).trigger(l),l.isDefaultPrevented()||("ontouchstart"in document.documentElement&&g(document.body).children().off("mouseover",null,g.noop),e[n].setAttribute("aria-expanded","false"),g(a).removeClass(Lt),g(o).removeClass(Lt).trigger(g.Event(kt.HIDDEN,s)))}}}},c._getParentFromElement=function(t){var e,n=_.getSelectorFromElement(t);return n&&(e=document.querySelector(n)),e||t.parentNode},c._dataApiKeydownHandler=function(t){if((/input|textarea/i.test(t.target.tagName)?!(32===t.which||27!==t.which&&(40!==t.which&&38!==t.which||g(t.target).closest(qt).length)):Ot.test(t.which))&&(t.preventDefault(),t.stopPropagation(),!this.disabled&&!g(this).hasClass(Pt))){var e=c._getParentFromElement(this),n=g(e).hasClass(Lt);if(n&&(!n||27!==t.which&&32!==t.which)){var i=[].slice.call(e.querySelectorAll(Kt));if(0!==i.length){var o=i.indexOf(t.target);38===t.which&&0<o&&o--,40===t.which&&o<i.length-1&&o++,o<0&&(o=0),i[o].focus()}}else{if(27===t.which){var r=e.querySelector(Ut);g(r).trigger("focus")}g(this).trigger("click")}}},s(c,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"Default",get:function(){return $t}},{key:"DefaultType",get:function(){return Gt}}]),c}();g(document).on(kt.KEYDOWN_DATA_API,Ut,Jt._dataApiKeydownHandler).on(kt.KEYDOWN_DATA_API,qt,Jt._dataApiKeydownHandler).on(kt.CLICK_DATA_API+" "+kt.KEYUP_DATA_API,Jt._clearMenus).on(kt.CLICK_DATA_API,Ut,function(t){t.preventDefault(),t.stopPropagation(),Jt._jQueryInterface.call(g(this),"toggle")}).on(kt.CLICK_DATA_API,Wt,function(t){t.stopPropagation()}),g.fn[It]=Jt._jQueryInterface,g.fn[It].Constructor=Jt,g.fn[It].noConflict=function(){return g.fn[It]=Nt,Jt._jQueryInterface};var Zt="modal",te="bs.modal",ee="."+te,ne=g.fn[Zt],ie={backdrop:!0,keyboard:!0,focus:!0,show:!0},oe={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean",show:"boolean"},re={HIDE:"hide"+ee,HIDDEN:"hidden"+ee,SHOW:"show"+ee,SHOWN:"shown"+ee,FOCUSIN:"focusin"+ee,RESIZE:"resize"+ee,CLICK_DISMISS:"click.dismiss"+ee,KEYDOWN_DISMISS:"keydown.dismiss"+ee,MOUSEUP_DISMISS:"mouseup.dismiss"+ee,MOUSEDOWN_DISMISS:"mousedown.dismiss"+ee,CLICK_DATA_API:"click"+ee+".data-api"},se="modal-dialog-scrollable",ae="modal-scrollbar-measure",le="modal-backdrop",ce="modal-open",he="fade",ue="show",fe=".modal-dialog",de=".modal-body",ge='[data-toggle="modal"]',_e='[data-dismiss="modal"]',me=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",pe=".sticky-top",ve=function(){function o(t,e){this._config=this._getConfig(e),this._element=t,this._dialog=t.querySelector(fe),this._backdrop=null,this._isShown=!1,this._isBodyOverflowing=!1,this._ignoreBackdropClick=!1,this._isTransitioning=!1,this._scrollbarWidth=0}var t=o.prototype;return t.toggle=function(t){return this._isShown?this.hide():this.show(t)},t.show=function(t){var e=this;if(!this._isShown&&!this._isTransitioning){g(this._element).hasClass(he)&&(this._isTransitioning=!0);var n=g.Event(re.SHOW,{relatedTarget:t});g(this._element).trigger(n),this._isShown||n.isDefaultPrevented()||(this._isShown=!0,this._checkScrollbar(),this._setScrollbar(),this._adjustDialog(),this._setEscapeEvent(),this._setResizeEvent(),g(this._element).on(re.CLICK_DISMISS,_e,function(t){return e.hide(t)}),g(this._dialog).on(re.MOUSEDOWN_DISMISS,function(){g(e._element).one(re.MOUSEUP_DISMISS,function(t){g(t.target).is(e._element)&&(e._ignoreBackdropClick=!0)})}),this._showBackdrop(function(){return e._showElement(t)}))}},t.hide=function(t){var e=this;if(t&&t.preventDefault(),this._isShown&&!this._isTransitioning){var n=g.Event(re.HIDE);if(g(this._element).trigger(n),this._isShown&&!n.isDefaultPrevented()){this._isShown=!1;var i=g(this._element).hasClass(he);if(i&&(this._isTransitioning=!0),this._setEscapeEvent(),this._setResizeEvent(),g(document).off(re.FOCUSIN),g(this._element).removeClass(ue),g(this._element).off(re.CLICK_DISMISS),g(this._dialog).off(re.MOUSEDOWN_DISMISS),i){var o=_.getTransitionDurationFromElement(this._element);g(this._element).one(_.TRANSITION_END,function(t){return e._hideModal(t)}).emulateTransitionEnd(o)}else this._hideModal()}}},t.dispose=function(){[window,this._element,this._dialog].forEach(function(t){return g(t).off(ee)}),g(document).off(re.FOCUSIN),g.removeData(this._element,te),this._config=null,this._element=null,this._dialog=null,this._backdrop=null,this._isShown=null,this._isBodyOverflowing=null,this._ignoreBackdropClick=null,this._isTransitioning=null,this._scrollbarWidth=null},t.handleUpdate=function(){this._adjustDialog()},t._getConfig=function(t){return t=l({},ie,t),_.typeCheckConfig(Zt,t,oe),t},t._showElement=function(t){var e=this,n=g(this._element).hasClass(he);this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||document.body.appendChild(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),g(this._dialog).hasClass(se)?this._dialog.querySelector(de).scrollTop=0:this._element.scrollTop=0,n&&_.reflow(this._element),g(this._element).addClass(ue),this._config.focus&&this._enforceFocus();var i=g.Event(re.SHOWN,{relatedTarget:t}),o=function(){e._config.focus&&e._element.focus(),e._isTransitioning=!1,g(e._element).trigger(i)};if(n){var r=_.getTransitionDurationFromElement(this._dialog);g(this._dialog).one(_.TRANSITION_END,o).emulateTransitionEnd(r)}else o()},t._enforceFocus=function(){var e=this;g(document).off(re.FOCUSIN).on(re.FOCUSIN,function(t){document!==t.target&&e._element!==t.target&&0===g(e._element).has(t.target).length&&e._element.focus()})},t._setEscapeEvent=function(){var e=this;this._isShown&&this._config.keyboard?g(this._element).on(re.KEYDOWN_DISMISS,function(t){27===t.which&&(t.preventDefault(),e.hide())}):this._isShown||g(this._element).off(re.KEYDOWN_DISMISS)},t._setResizeEvent=function(){var e=this;this._isShown?g(window).on(re.RESIZE,function(t){return e.handleUpdate(t)}):g(window).off(re.RESIZE)},t._hideModal=function(){var t=this;this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._isTransitioning=!1,this._showBackdrop(function(){g(document.body).removeClass(ce),t._resetAdjustments(),t._resetScrollbar(),g(t._element).trigger(re.HIDDEN)})},t._removeBackdrop=function(){this._backdrop&&(g(this._backdrop).remove(),this._backdrop=null)},t._showBackdrop=function(t){var e=this,n=g(this._element).hasClass(he)?he:"";if(this._isShown&&this._config.backdrop){if(this._backdrop=document.createElement("div"),this._backdrop.className=le,n&&this._backdrop.classList.add(n),g(this._backdrop).appendTo(document.body),g(this._element).on(re.CLICK_DISMISS,function(t){e._ignoreBackdropClick?e._ignoreBackdropClick=!1:t.target===t.currentTarget&&("static"===e._config.backdrop?e._element.focus():e.hide())}),n&&_.reflow(this._backdrop),g(this._backdrop).addClass(ue),!t)return;if(!n)return void t();var i=_.getTransitionDurationFromElement(this._backdrop);g(this._backdrop).one(_.TRANSITION_END,t).emulateTransitionEnd(i)}else if(!this._isShown&&this._backdrop){g(this._backdrop).removeClass(ue);var o=function(){e._removeBackdrop(),t&&t()};if(g(this._element).hasClass(he)){var r=_.getTransitionDurationFromElement(this._backdrop);g(this._backdrop).one(_.TRANSITION_END,o).emulateTransitionEnd(r)}else o()}else t&&t()},t._adjustDialog=function(){var t=this._element.scrollHeight>document.documentElement.clientHeight;!this._isBodyOverflowing&&t&&(this._element.style.paddingLeft=this._scrollbarWidth+"px"),this._isBodyOverflowing&&!t&&(this._element.style.paddingRight=this._scrollbarWidth+"px")},t._resetAdjustments=function(){this._element.style.paddingLeft="",this._element.style.paddingRight=""},t._checkScrollbar=function(){var t=document.body.getBoundingClientRect();this._isBodyOverflowing=t.left+t.right<window.innerWidth,this._scrollbarWidth=this._getScrollbarWidth()},t._setScrollbar=function(){var o=this;if(this._isBodyOverflowing){var t=[].slice.call(document.querySelectorAll(me)),e=[].slice.call(document.querySelectorAll(pe));g(t).each(function(t,e){var n=e.style.paddingRight,i=g(e).css("padding-right");g(e).data("padding-right",n).css("padding-right",parseFloat(i)+o._scrollbarWidth+"px")}),g(e).each(function(t,e){var n=e.style.marginRight,i=g(e).css("margin-right");g(e).data("margin-right",n).css("margin-right",parseFloat(i)-o._scrollbarWidth+"px")});var n=document.body.style.paddingRight,i=g(document.body).css("padding-right");g(document.body).data("padding-right",n).css("padding-right",parseFloat(i)+this._scrollbarWidth+"px")}g(document.body).addClass(ce)},t._resetScrollbar=function(){var t=[].slice.call(document.querySelectorAll(me));g(t).each(function(t,e){var n=g(e).data("padding-right");g(e).removeData("padding-right"),e.style.paddingRight=n||""});var e=[].slice.call(document.querySelectorAll(""+pe));g(e).each(function(t,e){var n=g(e).data("margin-right");"undefined"!=typeof n&&g(e).css("margin-right",n).removeData("margin-right")});var n=g(document.body).data("padding-right");g(document.body).removeData("padding-right"),document.body.style.paddingRight=n||""},t._getScrollbarWidth=function(){var t=document.createElement("div");t.className=ae,document.body.appendChild(t);var e=t.getBoundingClientRect().width-t.clientWidth;return document.body.removeChild(t),e},o._jQueryInterface=function(n,i){return this.each(function(){var t=g(this).data(te),e=l({},ie,g(this).data(),"object"==typeof n&&n?n:{});if(t||(t=new o(this,e),g(this).data(te,t)),"string"==typeof n){if("undefined"==typeof t[n])throw new TypeError('No method named "'+n+'"');t[n](i)}else e.show&&t.show(i)})},s(o,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"Default",get:function(){return ie}}]),o}();g(document).on(re.CLICK_DATA_API,ge,function(t){var e,n=this,i=_.getSelectorFromElement(this);i&&(e=document.querySelector(i));var o=g(e).data(te)?"toggle":l({},g(e).data(),g(this).data());"A"!==this.tagName&&"AREA"!==this.tagName||t.preventDefault();var r=g(e).one(re.SHOW,function(t){t.isDefaultPrevented()||r.one(re.HIDDEN,function(){g(n).is(":visible")&&n.focus()})});ve._jQueryInterface.call(g(e),o,this)}),g.fn[Zt]=ve._jQueryInterface,g.fn[Zt].Constructor=ve,g.fn[Zt].noConflict=function(){return g.fn[Zt]=ne,ve._jQueryInterface};var ye=["background","cite","href","itemtype","longdesc","poster","src","xlink:href"],Ee={"*":["class","dir","id","lang","role",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},Ce=/^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,Te=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;function Se(t,s,e){if(0===t.length)return t;if(e&&"function"==typeof e)return e(t);for(var n=(new window.DOMParser).parseFromString(t,"text/html"),a=Object.keys(s),l=[].slice.call(n.body.querySelectorAll("*")),i=function(t,e){var n=l[t],i=n.nodeName.toLowerCase();if(-1===a.indexOf(n.nodeName.toLowerCase()))return n.parentNode.removeChild(n),"continue";var o=[].slice.call(n.attributes),r=[].concat(s["*"]||[],s[i]||[]);o.forEach(function(t){(function(t,e){var n=t.nodeName.toLowerCase();if(-1!==e.indexOf(n))return-1===ye.indexOf(n)||Boolean(t.nodeValue.match(Ce)||t.nodeValue.match(Te));for(var i=e.filter(function(t){return t instanceof RegExp}),o=0,r=i.length;o<r;o++)if(n.match(i[o]))return!0;return!1})(t,r)||n.removeAttribute(t.nodeName)})},o=0,r=l.length;o<r;o++)i(o);return n.body.innerHTML}var be="tooltip",Ie="bs.tooltip",De="."+Ie,we=g.fn[be],Ae="bs-tooltip",Ne=new RegExp("(^|\\s)"+Ae+"\\S+","g"),Oe=["sanitize","whiteList","sanitizeFn"],ke={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"(number|string|function)",container:"(string|element|boolean)",fallbackPlacement:"(string|array)",boundary:"(string|element)",sanitize:"boolean",sanitizeFn:"(null|function)",whiteList:"object"},Pe={AUTO:"auto",TOP:"top",RIGHT:"right",BOTTOM:"bottom",LEFT:"left"},Le={animation:!0,template:'<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,selector:!1,placement:"top",offset:0,container:!1,fallbackPlacement:"flip",boundary:"scrollParent",sanitize:!0,sanitizeFn:null,whiteList:Ee},je="show",He="out",Re={HIDE:"hide"+De,HIDDEN:"hidden"+De,SHOW:"show"+De,SHOWN:"shown"+De,INSERTED:"inserted"+De,CLICK:"click"+De,FOCUSIN:"focusin"+De,FOCUSOUT:"focusout"+De,MOUSEENTER:"mouseenter"+De,MOUSELEAVE:"mouseleave"+De},xe="fade",Fe="show",Ue=".tooltip-inner",We=".arrow",qe="hover",Me="focus",Ke="click",Qe="manual",Be=function(){function i(t,e){if("undefined"==typeof u)throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");this._isEnabled=!0,this._timeout=0,this._hoverState="",this._activeTrigger={},this._popper=null,this.element=t,this.config=this._getConfig(e),this.tip=null,this._setListeners()}var t=i.prototype;return t.enable=function(){this._isEnabled=!0},t.disable=function(){this._isEnabled=!1},t.toggleEnabled=function(){this._isEnabled=!this._isEnabled},t.toggle=function(t){if(this._isEnabled)if(t){var e=this.constructor.DATA_KEY,n=g(t.currentTarget).data(e);n||(n=new this.constructor(t.currentTarget,this._getDelegateConfig()),g(t.currentTarget).data(e,n)),n._activeTrigger.click=!n._activeTrigger.click,n._isWithActiveTrigger()?n._enter(null,n):n._leave(null,n)}else{if(g(this.getTipElement()).hasClass(Fe))return void this._leave(null,this);this._enter(null,this)}},t.dispose=function(){clearTimeout(this._timeout),g.removeData(this.element,this.constructor.DATA_KEY),g(this.element).off(this.constructor.EVENT_KEY),g(this.element).closest(".modal").off("hide.bs.modal"),this.tip&&g(this.tip).remove(),this._isEnabled=null,this._timeout=null,this._hoverState=null,(this._activeTrigger=null)!==this._popper&&this._popper.destroy(),this._popper=null,this.element=null,this.config=null,this.tip=null},t.show=function(){var e=this;if("none"===g(this.element).css("display"))throw new Error("Please use show on visible elements");var t=g.Event(this.constructor.Event.SHOW);if(this.isWithContent()&&this._isEnabled){g(this.element).trigger(t);var n=_.findShadowRoot(this.element),i=g.contains(null!==n?n:this.element.ownerDocument.documentElement,this.element);if(t.isDefaultPrevented()||!i)return;var o=this.getTipElement(),r=_.getUID(this.constructor.NAME);o.setAttribute("id",r),this.element.setAttribute("aria-describedby",r),this.setContent(),this.config.animation&&g(o).addClass(xe);var s="function"==typeof this.config.placement?this.config.placement.call(this,o,this.element):this.config.placement,a=this._getAttachment(s);this.addAttachmentClass(a);var l=this._getContainer();g(o).data(this.constructor.DATA_KEY,this),g.contains(this.element.ownerDocument.documentElement,this.tip)||g(o).appendTo(l),g(this.element).trigger(this.constructor.Event.INSERTED),this._popper=new u(this.element,o,{placement:a,modifiers:{offset:this._getOffset(),flip:{behavior:this.config.fallbackPlacement},arrow:{element:We},preventOverflow:{boundariesElement:this.config.boundary}},onCreate:function(t){t.originalPlacement!==t.placement&&e._handlePopperPlacementChange(t)},onUpdate:function(t){return e._handlePopperPlacementChange(t)}}),g(o).addClass(Fe),"ontouchstart"in document.documentElement&&g(document.body).children().on("mouseover",null,g.noop);var c=function(){e.config.animation&&e._fixTransition();var t=e._hoverState;e._hoverState=null,g(e.element).trigger(e.constructor.Event.SHOWN),t===He&&e._leave(null,e)};if(g(this.tip).hasClass(xe)){var h=_.getTransitionDurationFromElement(this.tip);g(this.tip).one(_.TRANSITION_END,c).emulateTransitionEnd(h)}else c()}},t.hide=function(t){var e=this,n=this.getTipElement(),i=g.Event(this.constructor.Event.HIDE),o=function(){e._hoverState!==je&&n.parentNode&&n.parentNode.removeChild(n),e._cleanTipClass(),e.element.removeAttribute("aria-describedby"),g(e.element).trigger(e.constructor.Event.HIDDEN),null!==e._popper&&e._popper.destroy(),t&&t()};if(g(this.element).trigger(i),!i.isDefaultPrevented()){if(g(n).removeClass(Fe),"ontouchstart"in document.documentElement&&g(document.body).children().off("mouseover",null,g.noop),this._activeTrigger[Ke]=!1,this._activeTrigger[Me]=!1,this._activeTrigger[qe]=!1,g(this.tip).hasClass(xe)){var r=_.getTransitionDurationFromElement(n);g(n).one(_.TRANSITION_END,o).emulateTransitionEnd(r)}else o();this._hoverState=""}},t.update=function(){null!==this._popper&&this._popper.scheduleUpdate()},t.isWithContent=function(){return Boolean(this.getTitle())},t.addAttachmentClass=function(t){g(this.getTipElement()).addClass(Ae+"-"+t)},t.getTipElement=function(){return this.tip=this.tip||g(this.config.template)[0],this.tip},t.setContent=function(){var t=this.getTipElement();this.setElementContent(g(t.querySelectorAll(Ue)),this.getTitle()),g(t).removeClass(xe+" "+Fe)},t.setElementContent=function(t,e){"object"!=typeof e||!e.nodeType&&!e.jquery?this.config.html?(this.config.sanitize&&(e=Se(e,this.config.whiteList,this.config.sanitizeFn)),t.html(e)):t.text(e):this.config.html?g(e).parent().is(t)||t.empty().append(e):t.text(g(e).text())},t.getTitle=function(){var t=this.element.getAttribute("data-original-title");return t||(t="function"==typeof this.config.title?this.config.title.call(this.element):this.config.title),t},t._getOffset=function(){var e=this,t={};return"function"==typeof this.config.offset?t.fn=function(t){return t.offsets=l({},t.offsets,e.config.offset(t.offsets,e.element)||{}),t}:t.offset=this.config.offset,t},t._getContainer=function(){return!1===this.config.container?document.body:_.isElement(this.config.container)?g(this.config.container):g(document).find(this.config.container)},t._getAttachment=function(t){return Pe[t.toUpperCase()]},t._setListeners=function(){var i=this;this.config.trigger.split(" ").forEach(function(t){if("click"===t)g(i.element).on(i.constructor.Event.CLICK,i.config.selector,function(t){return i.toggle(t)});else if(t!==Qe){var e=t===qe?i.constructor.Event.MOUSEENTER:i.constructor.Event.FOCUSIN,n=t===qe?i.constructor.Event.MOUSELEAVE:i.constructor.Event.FOCUSOUT;g(i.element).on(e,i.config.selector,function(t){return i._enter(t)}).on(n,i.config.selector,function(t){return i._leave(t)})}}),g(this.element).closest(".modal").on("hide.bs.modal",function(){i.element&&i.hide()}),this.config.selector?this.config=l({},this.config,{trigger:"manual",selector:""}):this._fixTitle()},t._fixTitle=function(){var t=typeof this.element.getAttribute("data-original-title");(this.element.getAttribute("title")||"string"!==t)&&(this.element.setAttribute("data-original-title",this.element.getAttribute("title")||""),this.element.setAttribute("title",""))},t._enter=function(t,e){var n=this.constructor.DATA_KEY;(e=e||g(t.currentTarget).data(n))||(e=new this.constructor(t.currentTarget,this._getDelegateConfig()),g(t.currentTarget).data(n,e)),t&&(e._activeTrigger["focusin"===t.type?Me:qe]=!0),g(e.getTipElement()).hasClass(Fe)||e._hoverState===je?e._hoverState=je:(clearTimeout(e._timeout),e._hoverState=je,e.config.delay&&e.config.delay.show?e._timeout=setTimeout(function(){e._hoverState===je&&e.show()},e.config.delay.show):e.show())},t._leave=function(t,e){var n=this.constructor.DATA_KEY;(e=e||g(t.currentTarget).data(n))||(e=new this.constructor(t.currentTarget,this._getDelegateConfig()),g(t.currentTarget).data(n,e)),t&&(e._activeTrigger["focusout"===t.type?Me:qe]=!1),e._isWithActiveTrigger()||(clearTimeout(e._timeout),e._hoverState=He,e.config.delay&&e.config.delay.hide?e._timeout=setTimeout(function(){e._hoverState===He&&e.hide()},e.config.delay.hide):e.hide())},t._isWithActiveTrigger=function(){for(var t in this._activeTrigger)if(this._activeTrigger[t])return!0;return!1},t._getConfig=function(t){var e=g(this.element).data();return Object.keys(e).forEach(function(t){-1!==Oe.indexOf(t)&&delete e[t]}),"number"==typeof(t=l({},this.constructor.Default,e,"object"==typeof t&&t?t:{})).delay&&(t.delay={show:t.delay,hide:t.delay}),"number"==typeof t.title&&(t.title=t.title.toString()),"number"==typeof t.content&&(t.content=t.content.toString()),_.typeCheckConfig(be,t,this.constructor.DefaultType),t.sanitize&&(t.template=Se(t.template,t.whiteList,t.sanitizeFn)),t},t._getDelegateConfig=function(){var t={};if(this.config)for(var e in this.config)this.constructor.Default[e]!==this.config[e]&&(t[e]=this.config[e]);return t},t._cleanTipClass=function(){var t=g(this.getTipElement()),e=t.attr("class").match(Ne);null!==e&&e.length&&t.removeClass(e.join(""))},t._handlePopperPlacementChange=function(t){var e=t.instance;this.tip=e.popper,this._cleanTipClass(),this.addAttachmentClass(this._getAttachment(t.placement))},t._fixTransition=function(){var t=this.getTipElement(),e=this.config.animation;null===t.getAttribute("x-placement")&&(g(t).removeClass(xe),this.config.animation=!1,this.hide(),this.show(),this.config.animation=e)},i._jQueryInterface=function(n){return this.each(function(){var t=g(this).data(Ie),e="object"==typeof n&&n;if((t||!/dispose|hide/.test(n))&&(t||(t=new i(this,e),g(this).data(Ie,t)),"string"==typeof n)){if("undefined"==typeof t[n])throw new TypeError('No method named "'+n+'"');t[n]()}})},s(i,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"Default",get:function(){return Le}},{key:"NAME",get:function(){return be}},{key:"DATA_KEY",get:function(){return Ie}},{key:"Event",get:function(){return Re}},{key:"EVENT_KEY",get:function(){return De}},{key:"DefaultType",get:function(){return ke}}]),i}();g.fn[be]=Be._jQueryInterface,g.fn[be].Constructor=Be,g.fn[be].noConflict=function(){return g.fn[be]=we,Be._jQueryInterface};var Ve="popover",Ye="bs.popover",ze="."+Ye,Xe=g.fn[Ve],$e="bs-popover",Ge=new RegExp("(^|\\s)"+$e+"\\S+","g"),Je=l({},Be.Default,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'}),Ze=l({},Be.DefaultType,{content:"(string|element|function)"}),tn="fade",en="show",nn=".popover-header",on=".popover-body",rn={HIDE:"hide"+ze,HIDDEN:"hidden"+ze,SHOW:"show"+ze,SHOWN:"shown"+ze,INSERTED:"inserted"+ze,CLICK:"click"+ze,FOCUSIN:"focusin"+ze,FOCUSOUT:"focusout"+ze,MOUSEENTER:"mouseenter"+ze,MOUSELEAVE:"mouseleave"+ze},sn=function(t){var e,n;function i(){return t.apply(this,arguments)||this}n=t,(e=i).prototype=Object.create(n.prototype),(e.prototype.constructor=e).__proto__=n;var o=i.prototype;return o.isWithContent=function(){return this.getTitle()||this._getContent()},o.addAttachmentClass=function(t){g(this.getTipElement()).addClass($e+"-"+t)},o.getTipElement=function(){return this.tip=this.tip||g(this.config.template)[0],this.tip},o.setContent=function(){var t=g(this.getTipElement());this.setElementContent(t.find(nn),this.getTitle());var e=this._getContent();"function"==typeof e&&(e=e.call(this.element)),this.setElementContent(t.find(on),e),t.removeClass(tn+" "+en)},o._getContent=function(){return this.element.getAttribute("data-content")||this.config.content},o._cleanTipClass=function(){var t=g(this.getTipElement()),e=t.attr("class").match(Ge);null!==e&&0<e.length&&t.removeClass(e.join(""))},i._jQueryInterface=function(n){return this.each(function(){var t=g(this).data(Ye),e="object"==typeof n?n:null;if((t||!/dispose|hide/.test(n))&&(t||(t=new i(this,e),g(this).data(Ye,t)),"string"==typeof n)){if("undefined"==typeof t[n])throw new TypeError('No method named "'+n+'"');t[n]()}})},s(i,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"Default",get:function(){return Je}},{key:"NAME",get:function(){return Ve}},{key:"DATA_KEY",get:function(){return Ye}},{key:"Event",get:function(){return rn}},{key:"EVENT_KEY",get:function(){return ze}},{key:"DefaultType",get:function(){return Ze}}]),i}(Be);g.fn[Ve]=sn._jQueryInterface,g.fn[Ve].Constructor=sn,g.fn[Ve].noConflict=function(){return g.fn[Ve]=Xe,sn._jQueryInterface};var an="scrollspy",ln="bs.scrollspy",cn="."+ln,hn=g.fn[an],un={offset:10,method:"auto",target:""},fn={offset:"number",method:"string",target:"(string|element)"},dn={ACTIVATE:"activate"+cn,SCROLL:"scroll"+cn,LOAD_DATA_API:"load"+cn+".data-api"},gn="dropdown-item",_n="active",mn='[data-spy="scroll"]',pn=".nav, .list-group",vn=".nav-link",yn=".nav-item",En=".list-group-item",Cn=".dropdown",Tn=".dropdown-item",Sn=".dropdown-toggle",bn="offset",In="position",Dn=function(){function n(t,e){var n=this;this._element=t,this._scrollElement="BODY"===t.tagName?window:t,this._config=this._getConfig(e),this._selector=this._config.target+" "+vn+","+this._config.target+" "+En+","+this._config.target+" "+Tn,this._offsets=[],this._targets=[],this._activeTarget=null,this._scrollHeight=0,g(this._scrollElement).on(dn.SCROLL,function(t){return n._process(t)}),this.refresh(),this._process()}var t=n.prototype;return t.refresh=function(){var e=this,t=this._scrollElement===this._scrollElement.window?bn:In,o="auto"===this._config.method?t:this._config.method,r=o===In?this._getScrollTop():0;this._offsets=[],this._targets=[],this._scrollHeight=this._getScrollHeight(),[].slice.call(document.querySelectorAll(this._selector)).map(function(t){var e,n=_.getSelectorFromElement(t);if(n&&(e=document.querySelector(n)),e){var i=e.getBoundingClientRect();if(i.width||i.height)return[g(e)[o]().top+r,n]}return null}).filter(function(t){return t}).sort(function(t,e){return t[0]-e[0]}).forEach(function(t){e._offsets.push(t[0]),e._targets.push(t[1])})},t.dispose=function(){g.removeData(this._element,ln),g(this._scrollElement).off(cn),this._element=null,this._scrollElement=null,this._config=null,this._selector=null,this._offsets=null,this._targets=null,this._activeTarget=null,this._scrollHeight=null},t._getConfig=function(t){if("string"!=typeof(t=l({},un,"object"==typeof t&&t?t:{})).target){var e=g(t.target).attr("id");e||(e=_.getUID(an),g(t.target).attr("id",e)),t.target="#"+e}return _.typeCheckConfig(an,t,fn),t},t._getScrollTop=function(){return this._scrollElement===window?this._scrollElement.pageYOffset:this._scrollElement.scrollTop},t._getScrollHeight=function(){return this._scrollElement.scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)},t._getOffsetHeight=function(){return this._scrollElement===window?window.innerHeight:this._scrollElement.getBoundingClientRect().height},t._process=function(){var t=this._getScrollTop()+this._config.offset,e=this._getScrollHeight(),n=this._config.offset+e-this._getOffsetHeight();if(this._scrollHeight!==e&&this.refresh(),n<=t){var i=this._targets[this._targets.length-1];this._activeTarget!==i&&this._activate(i)}else{if(this._activeTarget&&t<this._offsets[0]&&0<this._offsets[0])return this._activeTarget=null,void this._clear();for(var o=this._offsets.length;o--;){this._activeTarget!==this._targets[o]&&t>=this._offsets[o]&&("undefined"==typeof this._offsets[o+1]||t<this._offsets[o+1])&&this._activate(this._targets[o])}}},t._activate=function(e){this._activeTarget=e,this._clear();var t=this._selector.split(",").map(function(t){return t+'[data-target="'+e+'"],'+t+'[href="'+e+'"]'}),n=g([].slice.call(document.querySelectorAll(t.join(","))));n.hasClass(gn)?(n.closest(Cn).find(Sn).addClass(_n),n.addClass(_n)):(n.addClass(_n),n.parents(pn).prev(vn+", "+En).addClass(_n),n.parents(pn).prev(yn).children(vn).addClass(_n)),g(this._scrollElement).trigger(dn.ACTIVATE,{relatedTarget:e})},t._clear=function(){[].slice.call(document.querySelectorAll(this._selector)).filter(function(t){return t.classList.contains(_n)}).forEach(function(t){return t.classList.remove(_n)})},n._jQueryInterface=function(e){return this.each(function(){var t=g(this).data(ln);if(t||(t=new n(this,"object"==typeof e&&e),g(this).data(ln,t)),"string"==typeof e){if("undefined"==typeof t[e])throw new TypeError('No method named "'+e+'"');t[e]()}})},s(n,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"Default",get:function(){return un}}]),n}();g(window).on(dn.LOAD_DATA_API,function(){for(var t=[].slice.call(document.querySelectorAll(mn)),e=t.length;e--;){var n=g(t[e]);Dn._jQueryInterface.call(n,n.data())}}),g.fn[an]=Dn._jQueryInterface,g.fn[an].Constructor=Dn,g.fn[an].noConflict=function(){return g.fn[an]=hn,Dn._jQueryInterface};var wn="bs.tab",An="."+wn,Nn=g.fn.tab,On={HIDE:"hide"+An,HIDDEN:"hidden"+An,SHOW:"show"+An,SHOWN:"shown"+An,CLICK_DATA_API:"click"+An+".data-api"},kn="dropdown-menu",Pn="active",Ln="disabled",jn="fade",Hn="show",Rn=".dropdown",xn=".nav, .list-group",Fn=".active",Un="> li > .active",Wn='[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',qn=".dropdown-toggle",Mn="> .dropdown-menu .active",Kn=function(){function i(t){this._element=t}var t=i.prototype;return t.show=function(){var n=this;if(!(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&g(this._element).hasClass(Pn)||g(this._element).hasClass(Ln))){var t,i,e=g(this._element).closest(xn)[0],o=_.getSelectorFromElement(this._element);if(e){var r="UL"===e.nodeName||"OL"===e.nodeName?Un:Fn;i=(i=g.makeArray(g(e).find(r)))[i.length-1]}var s=g.Event(On.HIDE,{relatedTarget:this._element}),a=g.Event(On.SHOW,{relatedTarget:i});if(i&&g(i).trigger(s),g(this._element).trigger(a),!a.isDefaultPrevented()&&!s.isDefaultPrevented()){o&&(t=document.querySelector(o)),this._activate(this._element,e);var l=function(){var t=g.Event(On.HIDDEN,{relatedTarget:n._element}),e=g.Event(On.SHOWN,{relatedTarget:i});g(i).trigger(t),g(n._element).trigger(e)};t?this._activate(t,t.parentNode,l):l()}}},t.dispose=function(){g.removeData(this._element,wn),this._element=null},t._activate=function(t,e,n){var i=this,o=(!e||"UL"!==e.nodeName&&"OL"!==e.nodeName?g(e).children(Fn):g(e).find(Un))[0],r=n&&o&&g(o).hasClass(jn),s=function(){return i._transitionComplete(t,o,n)};if(o&&r){var a=_.getTransitionDurationFromElement(o);g(o).removeClass(Hn).one(_.TRANSITION_END,s).emulateTransitionEnd(a)}else s()},t._transitionComplete=function(t,e,n){if(e){g(e).removeClass(Pn);var i=g(e.parentNode).find(Mn)[0];i&&g(i).removeClass(Pn),"tab"===e.getAttribute("role")&&e.setAttribute("aria-selected",!1)}if(g(t).addClass(Pn),"tab"===t.getAttribute("role")&&t.setAttribute("aria-selected",!0),_.reflow(t),t.classList.contains(jn)&&t.classList.add(Hn),t.parentNode&&g(t.parentNode).hasClass(kn)){var o=g(t).closest(Rn)[0];if(o){var r=[].slice.call(o.querySelectorAll(qn));g(r).addClass(Pn)}t.setAttribute("aria-expanded",!0)}n&&n()},i._jQueryInterface=function(n){return this.each(function(){var t=g(this),e=t.data(wn);if(e||(e=new i(this),t.data(wn,e)),"string"==typeof n){if("undefined"==typeof e[n])throw new TypeError('No method named "'+n+'"');e[n]()}})},s(i,null,[{key:"VERSION",get:function(){return"4.3.1"}}]),i}();g(document).on(On.CLICK_DATA_API,Wn,function(t){t.preventDefault(),Kn._jQueryInterface.call(g(this),"show")}),g.fn.tab=Kn._jQueryInterface,g.fn.tab.Constructor=Kn,g.fn.tab.noConflict=function(){return g.fn.tab=Nn,Kn._jQueryInterface};var Qn="toast",Bn="bs.toast",Vn="."+Bn,Yn=g.fn[Qn],zn={CLICK_DISMISS:"click.dismiss"+Vn,HIDE:"hide"+Vn,HIDDEN:"hidden"+Vn,SHOW:"show"+Vn,SHOWN:"shown"+Vn},Xn="fade",$n="hide",Gn="show",Jn="showing",Zn={animation:"boolean",autohide:"boolean",delay:"number"},ti={animation:!0,autohide:!0,delay:500},ei='[data-dismiss="toast"]',ni=function(){function i(t,e){this._element=t,this._config=this._getConfig(e),this._timeout=null,this._setListeners()}var t=i.prototype;return t.show=function(){var t=this;g(this._element).trigger(zn.SHOW),this._config.animation&&this._element.classList.add(Xn);var e=function(){t._element.classList.remove(Jn),t._element.classList.add(Gn),g(t._element).trigger(zn.SHOWN),t._config.autohide&&t.hide()};if(this._element.classList.remove($n),this._element.classList.add(Jn),this._config.animation){var n=_.getTransitionDurationFromElement(this._element);g(this._element).one(_.TRANSITION_END,e).emulateTransitionEnd(n)}else e()},t.hide=function(t){var e=this;this._element.classList.contains(Gn)&&(g(this._element).trigger(zn.HIDE),t?this._close():this._timeout=setTimeout(function(){e._close()},this._config.delay))},t.dispose=function(){clearTimeout(this._timeout),this._timeout=null,this._element.classList.contains(Gn)&&this._element.classList.remove(Gn),g(this._element).off(zn.CLICK_DISMISS),g.removeData(this._element,Bn),this._element=null,this._config=null},t._getConfig=function(t){return t=l({},ti,g(this._element).data(),"object"==typeof t&&t?t:{}),_.typeCheckConfig(Qn,t,this.constructor.DefaultType),t},t._setListeners=function(){var t=this;g(this._element).on(zn.CLICK_DISMISS,ei,function(){return t.hide(!0)})},t._close=function(){var t=this,e=function(){t._element.classList.add($n),g(t._element).trigger(zn.HIDDEN)};if(this._element.classList.remove(Gn),this._config.animation){var n=_.getTransitionDurationFromElement(this._element);g(this._element).one(_.TRANSITION_END,e).emulateTransitionEnd(n)}else e()},i._jQueryInterface=function(n){return this.each(function(){var t=g(this),e=t.data(Bn);if(e||(e=new i(this,"object"==typeof n&&n),t.data(Bn,e)),"string"==typeof n){if("undefined"==typeof e[n])throw new TypeError('No method named "'+n+'"');e[n](this)}})},s(i,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"DefaultType",get:function(){return Zn}},{key:"Default",get:function(){return ti}}]),i}();g.fn[Qn]=ni._jQueryInterface,g.fn[Qn].Constructor=ni,g.fn[Qn].noConflict=function(){return g.fn[Qn]=Yn,ni._jQueryInterface},function(){if("undefined"==typeof g)throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");var t=g.fn.jquery.split(" ")[0].split(".");if(t[0]<2&&t[1]<9||1===t[0]&&9===t[1]&&t[2]<1||4<=t[0])throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")}(),t.Util=_,t.Alert=p,t.Button=P,t.Carousel=lt,t.Collapse=bt,t.Dropdown=Jt,t.Modal=ve,t.Popover=sn,t.Scrollspy=Dn,t.Tab=Kn,t.Toast=ni,t.Tooltip=Be,Object.defineProperty(t,"__esModule",{value:!0})});;;(function($){let $navbar=$('.navbar');let navbar_offset=$navbar.innerHeight();function scrollToAnchor(target){target=(typeof target==='undefined'||typeof target==='object')?window.location.hash:target;target=target.replace(/:/g,'\\:');if($(target).length){$('body').addClass('scrolling');$('html, body').animate({scrollTop:$(target).offset().top-navbar_offset},600,function(){$('body').removeClass('scrolling');});}}
function fixScrollspy(){let $body=$('body');let data=$body.data('bs.scrollspy');if(data){data._config.offset=navbar_offset;$body.data('bs.scrollspy',data);$body.scrollspy('refresh');}}
window.addEventListener("hashchange",scrollToAnchor);$('#navbar-main li.nav-item a.nav-link').on('click',function(event){let hash=this.hash;if(this.pathname===window.location.pathname&&hash&&$(hash).length&&($(".js-widget-page").length>0)){event.preventDefault();$('html, body').animate({scrollTop:$(hash).offset().top-navbar_offset},800);}});$('#back_to_top').on('click',function(event){event.preventDefault();$('html, body').animate({'scrollTop':0},800,function(){window.location.hash="";});});$(document).on('click','.navbar-collapse.show',function(e){let targetElement=$(e.target).is('a')?$(e.target):$(e.target).parent();if(targetElement.is('a')&&targetElement.attr('class')!='dropdown-toggle'){$(this).collapse('hide');}});let pubFilters={};let searchRegex;let filterValues;let $grid_pubs=$('#container-publications');$grid_pubs.isotope({itemSelector:'.isotope-item',percentPosition:true,masonry:{columnWidth:'.grid-sizer'},filter:function(){let $this=$(this);let searchResults=searchRegex?$this.text().match(searchRegex):true;let filterResults=filterValues?$this.is(filterValues):true;return searchResults&&filterResults;}});let $quickSearch=$('.filter-search').keyup(debounce(function(){searchRegex=new RegExp($quickSearch.val(),'gi');$grid_pubs.isotope();}));function debounce(fn,threshold){let timeout;threshold=threshold||100;return function debounced(){clearTimeout(timeout);let args=arguments;let _this=this;function delayed(){fn.apply(_this,args);}
timeout=setTimeout(delayed,threshold);};}
function concatValues(obj){let value='';for(let prop in obj){value+=obj[prop];}
return value;}
$('.pub-filters').on('change',function(){let $this=$(this);let filterGroup=$this[0].getAttribute('data-filter-group');pubFilters[filterGroup]=this.value;filterValues=concatValues(pubFilters);$grid_pubs.isotope();if(filterGroup=="pubtype"){let url=$(this).val();if(url.substr(0,9)=='.pubtype-'){window.location.hash=url.substr(9);}else{window.location.hash='';}}});function filter_publications(){let urlHash=window.location.hash.replace('#','');let filterValue='*';if(urlHash!=''&&!isNaN(urlHash)){filterValue='.pubtype-'+urlHash;}
let filterGroup='pubtype';pubFilters[filterGroup]=filterValue;filterValues=concatValues(pubFilters);$grid_pubs.isotope();$('.pubtype-select').val(filterValue);}
function initMap(){if($('#map').length){let map_provider=$('#map-provider').val();let lat=$('#map-lat').val();let lng=$('#map-lng').val();let zoom=parseInt($('#map-zoom').val());let address=$('#map-dir').val();let api_key=$('#map-api-key').val();if(map_provider==1){let map=new GMaps({div:'#map',lat:lat,lng:lng,zoom:zoom,zoomControl:true,zoomControlOpt:{style:'SMALL',position:'TOP_LEFT'},panControl:false,streetViewControl:false,mapTypeControl:false,overviewMapControl:false,scrollwheel:true,draggable:true});map.addMarker({lat:lat,lng:lng,click:function(e){let url='https://www.google.com/maps/place/'+encodeURIComponent(address)+'/@'+lat+','+lng+'/';window.open(url,'_blank')},title:address})}else{let map=new L.map('map').setView([lat,lng],zoom);if(map_provider==3&&api_key.length){L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}',{attribution:'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',maxZoom:18,id:'mapbox.streets',accessToken:api_key}).addTo(map);}else{L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{maxZoom:19,attribution:'&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'}).addTo(map);}
let marker=L.marker([lat,lng]).addTo(map);let url=lat+','+lng+'#map='+zoom+'/'+lat+'/'+lng+'&layers=N';marker.bindPopup(address+'<p><a href="https://www.openstreetmap.org/directions?engine=osrm_car&route='+url+'">Routing via OpenStreetMap</a></p>');}}}
function printLatestRelease(selector,repo){$.getJSON('https://api.github.com/repos/'+repo+'/tags').done(function(json){let release=json[0];$(selector).append(release.name);}).fail(function(jqxhr,textStatus,error){let err=textStatus+", "+error;console.log("Request Failed: "+err);});}
function toggleSearchDialog(){if($('body').hasClass('searching')){$('[id=search-query]').blur();$('body').removeClass('searching');}else{$('body').addClass('searching');$('.search-results').css({opacity:0,visibility:'visible'}).animate({opacity:1},200);$('#search-query').focus();}}
function toggleDarkMode(codeHlEnabled,codeHlLight,codeHlDark){if($('body').hasClass('dark')){$('body').css({opacity:0,visibility:'visible'}).animate({opacity:1},500);$('body').removeClass('dark');if(codeHlEnabled){codeHlLight.disabled=false;codeHlDark.disabled=true;}
$('.js-dark-toggle i').removeClass('fa-sun').addClass('fa-moon');localStorage.setItem('dark_mode','0');}else{$('body').css({opacity:0,visibility:'visible'}).animate({opacity:1},500);$('body').addClass('dark');if(codeHlEnabled){codeHlLight.disabled=true;codeHlDark.disabled=false;}
$('.js-dark-toggle i').removeClass('fa-moon').addClass('fa-sun');localStorage.setItem('dark_mode','1');}}
function normalizeCarouselSlideHeights(){$('.carousel').each(function(){let items=$('.carousel-item',this);items.css('min-height',0);let maxHeight=Math.max.apply(null,items.map(function(){return $(this).outerHeight()}).get());items.css('min-height',maxHeight+'px');})}
$(document).ready(function(){let default_mode=0;if($('body').hasClass('dark')){default_mode=1;}
let dark_mode=parseInt(localStorage.getItem('dark_mode')||default_mode);const codeHlEnabled=$('link[title=hl-light]').length>0;const codeHlLight=$('link[title=hl-light]')[0];const codeHlDark=$('link[title=hl-dark]')[0];if(dark_mode){$('body').addClass('dark');if(codeHlEnabled){codeHlLight.disabled=true;codeHlDark.disabled=false;}
$('.js-dark-toggle i').removeClass('fa-moon').addClass('fa-sun');}else{$('body').removeClass('dark');if(codeHlEnabled){codeHlLight.disabled=false;codeHlDark.disabled=true;}
$('.js-dark-toggle i').removeClass('fa-sun').addClass('fa-moon');}
$('.js-dark-toggle').click(function(e){e.preventDefault();toggleDarkMode(codeHlEnabled,codeHlLight,codeHlDark);});});$(window).on('load',function(){if(window.location.hash){if(window.location.hash=="#top"){window.location.hash=""}else if(!$('.projects-container').length){scrollToAnchor();}}
let $body=$('body');$body.scrollspy({offset:navbar_offset});let resizeTimer;$(window).resize(function(){clearTimeout(resizeTimer);resizeTimer=setTimeout(fixScrollspy,200);});$('.projects-container').each(function(index,container){let $container=$(container);let $section=$container.closest('section');let layout;if($section.find('.isotope').hasClass('js-layout-row')){layout='fitRows';}else{layout='masonry';}
$container.imagesLoaded(function(){$container.isotope({itemSelector:'.isotope-item',layoutMode:layout,masonry:{gutter:20},filter:$section.find('.default-project-filter').text()});$section.find('.project-filters a').click(function(){let selector=$(this).attr('data-filter');$container.isotope({filter:selector});$(this).removeClass('active').addClass('active').siblings().removeClass('active all');return false;});if(window.location.hash){scrollToAnchor();}});});if($('.pub-filters-select')){filter_publications();}
$('.js-cite-modal').click(function(e){e.preventDefault();let filename=$(this).attr('data-filename');let modal=$('#modal');modal.find('.modal-body code').load(filename,function(response,status,xhr){if(status=='error'){let msg="Error: ";$('#modal-error').html(msg+xhr.status+" "+xhr.statusText);}else{$('.js-download-cite').attr('href',filename);}});modal.modal('show');});$('.js-copy-cite').click(function(e){e.preventDefault();let range=document.createRange();let code_node=document.querySelector('#modal .modal-body');range.selectNode(code_node);window.getSelection().addRange(range);try{document.execCommand('copy');}catch(e){console.log('Error: citation copy failed.');}
window.getSelection().removeRange(range);});initMap();$('#TableOfContents > ul > li > ul').unwrap().unwrap();if($('#academic-release').length>0)
printLatestRelease('#academic-release',$('#academic-release').data('repo'));$('.js-search').click(function(e){e.preventDefault();toggleSearchDialog();});$(document).on('keydown',function(e){if(e.which==27){if($('body').hasClass('searching')){toggleSearchDialog();}}else if(e.which==191&&e.shiftKey==false&&!$('input,textarea').is(':focus')){e.preventDefault();toggleSearchDialog();}});});$(window).on('load resize orientationchange',normalizeCarouselSlideHeights);})(jQuery);;(function(){var Ajax={};Ajax.settings={};Ajax.post=function(options){return new AjaxRequest('post',options);};Ajax.get=function(options){return new AjaxRequest('get',options);};var AjaxRequest=function(method,options)
{var defaults={method:method,url:'',before:function(){},success:function(){},error:function(){},data:false,async:true,headers:{}};this.p=this.extend(defaults,options);this.p=this.extend(this.p,Ajax.settings);this.p.method=this.p.method.toUpperCase();this.prepareData();this.xhr=new XMLHttpRequest();this.xhr.open(this.p.method,this.p.url,this.p.async);this.setHeaders();var before=(typeof this.p.before==='function')?this.p.before(this.xhr):true;if(before!==false)
{this.send();}};AjaxRequest.prototype={extend:function(obj1,obj2)
{if(obj2)for(var name in obj2){obj1[name]=obj2[name];}
return obj1;},prepareData:function()
{if(this.p.method==='POST'&&!this.isFormData())this.p.headers['Content-Type']='application/x-www-form-urlencoded';if(typeof this.p.data==='object'&&!this.isFormData())this.p.data=this.toParams(this.p.data);if(this.p.method==='GET')this.p.url=(this.p.data)?this.p.url+'?'+this.p.data:this.p.url;},setHeaders:function()
{this.xhr.setRequestHeader('X-Requested-With',this.p.headers['X-Requested-With']||'XMLHttpRequest');for(var name in this.p.headers)
{this.xhr.setRequestHeader(name,this.p.headers[name]);}},isFormData:function()
{return(typeof window.FormData!=='undefined'&&this.p.data instanceof window.FormData);},isComplete:function()
{return!(this.xhr.status<200||this.xhr.status>=300&&this.xhr.status!==304);},send:function()
{if(this.p.async)
{this.xhr.onload=this.loaded.bind(this);this.xhr.send(this.p.data);}
else
{this.xhr.send(this.p.data);this.loaded.call(this);}},loaded:function()
{if(this.isComplete())
{var response=this.xhr.response;var json=this.parseJson(response);response=(json)?json:response;if(typeof this.p.success==='function')this.p.success(response,this.xhr);}
else
{if(typeof this.p.error==='function')this.p.error(this.xhr.statusText);}},parseJson:function(str)
{try{var o=JSON.parse(str);if(o&&typeof o==='object')
{return o;}}catch(e){}
return false;},toParams:function(obj)
{return Object.keys(obj).map(function(k){return encodeURIComponent(k)+'='+encodeURIComponent(obj[k]);}).join('&');}};var DomCache=[0];var DomExpando='data'+new Date();var DomDisplayCache={};var DomHClass='is-hidden';var DomHMClass='is-hidden-mobile';var Dom=function(selector,context)
{return this.parse(selector,context);};Dom.ready=function(fn)
{if(document.readyState!='loading')fn();else document.addEventListener('DOMContentLoaded',fn);};Dom.prototype={get dom()
{return true;},get length()
{return this.nodes.length;},parse:function(selector,context)
{var nodes;var reHtmlTest=/^\s*<(\w+|!)[^>]*>/;if(!selector)
{nodes=[];}
else if(selector.dom)
{this.nodes=selector.nodes;return selector;}
else if(typeof selector!=='string')
{if(selector.nodeType&&selector.nodeType===11)
{nodes=selector.childNodes;}
else
{nodes=(selector.nodeType||selector===window)?[selector]:selector;}}
else if(reHtmlTest.test(selector))
{nodes=this.create(selector);}
else
{nodes=this._query(selector,context);}
this.nodes=this._slice(nodes);},create:function(html)
{if(/^<(\w+)\s*\/?>(?:<\/\1>|)$/.test(html))
{return[document.createElement(RegExp.$1)];}
var elements=[];var container=document.createElement('div');var children=container.childNodes;container.innerHTML=html;for(var i=0,l=children.length;i<l;i++)
{elements.push(children[i]);}
return elements;},add:function(nodes)
{this.nodes=this.nodes.concat(this._toArray(nodes));},get:function(index)
{return this.nodes[(index||0)]||false;},getAll:function()
{return this.nodes;},eq:function(index)
{return new Dom(this.nodes[index]);},first:function()
{return new Dom(this.nodes[0]);},last:function()
{return new Dom(this.nodes[this.nodes.length-1]);},contents:function()
{return this.get().childNodes;},each:function(callback)
{var len=this.nodes.length;for(var i=0;i<len;i++)
{callback.call(this,(this.nodes[i].dom)?this.nodes[i].get():this.nodes[i],i);}
return this;},is:function(selector)
{return(this.filter(selector).length>0);},filter:function(selector)
{var callback;if(selector===undefined)
{return this;}
else if(typeof selector==='function')
{callback=selector;}
else
{callback=function(node)
{if(selector instanceof Node)
{return(selector===node);}
else if(selector&&selector.dom)
{return((selector.nodes).indexOf(node)!==-1);}
else
{node.matches=node.matches||node.msMatchesSelector||node.webkitMatchesSelector;return(node.nodeType===1)?node.matches(selector||'*'):false;}};}
return new Dom(this.nodes.filter(callback));},not:function(filter)
{return this.filter(function(node)
{return!new Dom(node).is(filter||true);});},find:function(selector)
{var nodes=[];this.each(function(node)
{var ns=this._query(selector||'*',node);for(var i=0;i<ns.length;i++)
{nodes.push(ns[i]);}});return new Dom(nodes);},children:function(selector)
{var nodes=[];this.each(function(node)
{if(node.children)
{var ns=node.children;for(var i=0;i<ns.length;i++)
{nodes.push(ns[i]);}}});return new Dom(nodes).filter(selector);},parent:function(selector)
{var nodes=[];this.each(function(node)
{if(node.parentNode)nodes.push(node.parentNode);});return new Dom(nodes).filter(selector);},parents:function(selector,context)
{context=this._getContext(context);var nodes=[];this.each(function(node)
{var parent=node.parentNode;while(parent&&parent!==context)
{if(selector)
{if(new Dom(parent).is(selector)){nodes.push(parent);}}
else
{nodes.push(parent);}
parent=parent.parentNode;}});return new Dom(nodes);},closest:function(selector,context)
{context=this._getContext(context);selector=(selector.dom)?selector.get():selector;var nodes=[];var isNode=(selector&&selector.nodeType);this.each(function(node)
{do{if((isNode&&node===selector)||new Dom(node).is(selector))return nodes.push(node);}while((node=node.parentNode)&&node!==context);});return new Dom(nodes);},next:function(selector)
{return this._getSibling(selector,'nextSibling');},nextElement:function(selector)
{return this._getSibling(selector,'nextElementSibling');},prev:function(selector)
{return this._getSibling(selector,'previousSibling');},prevElement:function(selector)
{return this._getSibling(selector,'previousElementSibling');},css:function(name,value)
{if(value===undefined&&(typeof name!=='object'))
{var node=this.get();if(name==='width'||name==='height')
{return(node.style)?this._getHeightOrWidth(name,node,false)+'px':undefined;}
else
{return(node.style)?getComputedStyle(node,null)[name]:undefined;}}
return this.each(function(node)
{var obj={};if(typeof name==='object')obj=name;else obj[name]=value;for(var key in obj)
{if(node.style)node.style[key]=obj[key];}});},attr:function(name,value,data)
{data=(data)?'data-':'';if(value===undefined&&(typeof name!=='object'))
{var node=this.get();if(node&&node.nodeType!==3)
{return(name==='checked')?node.checked:this._getBooleanFromStr(node.getAttribute(data+name));}
else return;}
return this.each(function(node)
{var obj={};if(typeof name==='object')obj=name;else obj[name]=value;for(var key in obj)
{if(node.nodeType!==3)
{if(key==='checked')node.checked=obj[key];else node.setAttribute(data+key,obj[key]);}}});},data:function(name,value)
{if(name===undefined)
{var reDataAttr=/^data\-(.+)$/;var attrs=this.get().attributes;var data={};var replacer=function(g){return g[1].toUpperCase();};for(var key in attrs)
{if(reDataAttr.test(attrs[key].nodeName))
{var dataName=attrs[key].nodeName.match(reDataAttr)[1];var val=attrs[key].value;dataName=dataName.replace(/-([a-z])/g,replacer);if(this._isObjectString(val))val=this._toObject(val);else val=(this._isNumber(val))?parseFloat(val):this._getBooleanFromStr(val);data[dataName]=val;}}
return data;}
return this.attr(name,value,true);},val:function(value)
{if(value===undefined)
{var el=this.get();if(el.type&&el.type==='checkbox')return el.checked;else return el.value;}
return this.each(function(node)
{node.value=value;});},removeAttr:function(value)
{return this.each(function(node)
{var rmAttr=function(name){if(node.nodeType!==3)node.removeAttribute(name);};value.split(' ').forEach(rmAttr);});},removeData:function(value)
{return this.each(function(node)
{var rmData=function(name){if(node.nodeType!==3)node.removeAttribute('data-'+name);};value.split(' ').forEach(rmData);});},dataset:function(key,value)
{return this.each(function(node)
{DomCache[this.dataindex(node)][key]=value;});},dataget:function(key)
{return DomCache[this.dataindex(this.get())][key];},dataindex:function(el)
{var cacheIndex=el[DomExpando];var nextCacheIndex=DomCache.length;if(!cacheIndex)
{cacheIndex=el[DomExpando]=nextCacheIndex;DomCache[cacheIndex]={};}
return cacheIndex;},addClass:function(value)
{return this._eachClass(value,'add');},removeClass:function(value)
{return this._eachClass(value,'remove');},toggleClass:function(value)
{return this._eachClass(value,'toggle');},hasClass:function(value)
{return this.nodes.some(function(node)
{return(node.classList)?node.classList.contains(value):false;});},empty:function()
{return this.each(function(node)
{node.innerHTML='';});},html:function(html)
{return(html===undefined)?(this.get().innerHTML||''):this.empty().append(html);},text:function(text)
{return(text===undefined)?(this.get().textContent||''):this.each(function(node){node.textContent=text;});},after:function(html)
{return this._inject(html,function(frag,node)
{if(typeof frag==='string')
{node.insertAdjacentHTML('afterend',frag);}
else
{var elms=(frag instanceof Node)?[frag]:this._toArray(frag).reverse();for(var i=0;i<elms.length;i++)
{node.parentNode.insertBefore(elms[i],node.nextSibling);}}
return node;});},before:function(html)
{return this._inject(html,function(frag,node)
{if(typeof frag==='string')
{node.insertAdjacentHTML('beforebegin',frag);}
else
{var elms=(frag instanceof Node)?[frag]:this._toArray(frag);for(var i=0;i<elms.length;i++)
{node.parentNode.insertBefore(elms[i],node);}}
return node;});},append:function(html)
{return this._inject(html,function(frag,node)
{if(typeof frag==='string'||typeof frag==='number')
{node.insertAdjacentHTML('beforeend',frag);}
else
{var elms=(frag instanceof Node)?[frag]:this._toArray(frag);for(var i=0;i<elms.length;i++)
{node.appendChild(elms[i]);}}
return node;});},prepend:function(html)
{return this._inject(html,function(frag,node)
{if(typeof frag==='string'||typeof frag==='number')
{node.insertAdjacentHTML('afterbegin',frag);}
else
{var elms=(frag instanceof Node)?[frag]:this._toArray(frag).reverse();for(var i=0;i<elms.length;i++)
{node.insertBefore(elms[i],node.firstChild);}}
return node;});},wrap:function(html)
{return this._inject(html,function(frag,node)
{var wrapper=(typeof frag==='string'||typeof frag==='number')?this.create(frag)[0]:(frag instanceof Node)?frag:this._toArray(frag)[0];if(node.parentNode)
{node.parentNode.insertBefore(wrapper,node);}
wrapper.appendChild(node);return new Dom(wrapper);});},unwrap:function()
{return this.each(function(node)
{var $node=new Dom(node);return $node.replaceWith($node.contents());});},replaceWith:function(html)
{return this._inject(html,function(frag,node)
{var docFrag=document.createDocumentFragment();var elms=(typeof frag==='string'||typeof frag==='number')?this.create(frag):(frag instanceof Node)?[frag]:this._toArray(frag);for(var i=0;i<elms.length;i++)
{docFrag.appendChild(elms[i]);}
var result=docFrag.childNodes[0];node.parentNode.replaceChild(docFrag,node);return result;});},remove:function()
{return this.each(function(node)
{if(node.parentNode)node.parentNode.removeChild(node);});},clone:function(events)
{var nodes=[];this.each(function(node)
{var copy=this._clone(node);if(events)copy=this._cloneEvents(node,copy);nodes.push(copy);});return new Dom(nodes);},show:function()
{return this.each(function(node)
{if(!node.style||!this._hasDisplayNone(node))return;var target=node.getAttribute('domTargetShow');var isHidden=(node.classList)?node.classList.contains(DomHClass):false;var isHiddenMobile=(node.classList)?node.classList.contains(DomHMClass):false;var type;if(isHidden)
{type=DomHClass;node.classList.remove(DomHClass);}
else if(isHiddenMobile)
{type=DomHMClass;node.classList.remove(DomHMClass);}
else
{node.style.display=(target)?target:'block';}
if(type)node.setAttribute('domTargetHide',type);node.removeAttribute('domTargetShow');}.bind(this));},hide:function()
{return this.each(function(node)
{if(!node.style||this._hasDisplayNone(node))return;var display=node.style.display;var target=node.getAttribute('domTargetHide');if(target===DomHClass)
{node.classList.add(DomHClass);}
else if(target===DomHMClass)
{node.classList.add(DomHMClass);}
else
{if(display!=='block')node.setAttribute('domTargetShow',display);node.style.display='none';}
node.removeAttribute('domTargetHide');});},scrollTop:function(value)
{var node=this.get();var isWindow=(node===window);var isDocument=(node.nodeType===9);var el=(isDocument)?(document.scrollingElement||document.body.parentNode||document.body||document.documentElement):node;if(value!==undefined)
{if(isWindow)window.scrollTo(0,value);else el.scrollTop=value;return;}
if(isDocument)
{return(typeof window.pageYOffset!='undefined')?window.pageYOffset:((document.documentElement.scrollTop)?document.documentElement.scrollTop:((document.body.scrollTop)?document.body.scrollTop:0));}
else
{return(isWindow)?window.pageYOffset:el.scrollTop;}},offset:function()
{return this._getDim('Offset');},position:function()
{return this._getDim('Position');},width:function(value,adjust)
{return this._getSize('width','Width',value,adjust);},height:function(value,adjust)
{return this._getSize('height','Height',value,adjust);},outerWidth:function()
{return this._getInnerOrOuter('width','outer');},outerHeight:function()
{return this._getInnerOrOuter('height','outer');},innerWidth:function()
{return this._getInnerOrOuter('width','inner');},innerHeight:function()
{return this._getInnerOrOuter('height','inner');},click:function()
{return this._triggerEvent('click');},focus:function()
{return this._triggerEvent('focus');},trigger:function(names)
{return this.each(function(node)
{var events=names.split(' ');for(var i=0;i<events.length;i++)
{var ev;var opts={bubbles:true,cancelable:true};try{ev=new window.CustomEvent(events[i],opts);}catch(e){ev=document.createEvent('CustomEvent');ev.initCustomEvent(events[i],true,true);}
node.dispatchEvent(ev);}});},on:function(names,handler,one)
{return this.each(function(node)
{var events=names.split(' ');for(var i=0;i<events.length;i++)
{var event=this._getEventName(events[i]);var namespace=this._getEventNamespace(events[i]);handler=(one)?this._getOneHandler(handler,names):handler;node.addEventListener(event,handler);node._e=node._e||{};node._e[namespace]=node._e[namespace]||{};node._e[namespace][event]=node._e[namespace][event]||[];node._e[namespace][event].push(handler);}});},one:function(events,handler)
{return this.on(events,handler,true);},off:function(names,handler)
{var testEvent=function(name,key,event){return(name===event);};var testNamespace=function(name,key,event,namespace){return(key===namespace);};var testEventNamespace=function(name,key,event,namespace){return(name===event&&key===namespace);};var testPositive=function(){return true;};if(names===undefined)
{return this.each(function(node)
{this._offEvent(node,false,false,handler,testPositive);});}
return this.each(function(node)
{var events=names.split(' ');for(var i=0;i<events.length;i++)
{var event=this._getEventName(events[i]);var namespace=this._getEventNamespace(events[i]);if(namespace==='_events')this._offEvent(node,event,namespace,handler,testEvent);else if(!event&&namespace!=='_events')this._offEvent(node,event,namespace,handler,testNamespace);else this._offEvent(node,event,namespace,handler,testEventNamespace);}});},serialize:function(asObject)
{var obj={};var elms=this.get().elements;for(var i=0;i<elms.length;i++)
{var el=elms[i];if(/(checkbox|radio)/.test(el.type)&&!el.checked)continue;if(!el.name||el.disabled||el.type==='file')continue;if(el.type==='select-multiple')
{for(var z=0;z<el.options.length;z++)
{var opt=el.options[z];if(opt.selected)obj[el.name]=opt.value;}}
obj[el.name]=(this._isNumber(el.value))?parseFloat(el.value):this._getBooleanFromStr(el.value);}
return(asObject)?obj:this._toParams(obj);},ajax:function(success,error)
{if(typeof AjaxRequest!=='undefined')
{var method=this.attr('method')||'post';var options={url:this.attr('action'),data:this.serialize(),success:success,error:error};return new AjaxRequest(method,options);}},_queryContext:function(selector,context)
{context=this._getContext(context);return(context.nodeType!==3&&typeof context.querySelectorAll==='function')?context.querySelectorAll(selector):[];},_query:function(selector,context)
{if(context)
{return this._queryContext(selector,context);}
else if(/^[.#]?[\w-]*$/.test(selector))
{if(selector[0]==='#')
{var element=document.getElementById(selector.slice(1));return element?[element]:[];}
if(selector[0]==='.')
{return document.getElementsByClassName(selector.slice(1));}
return document.getElementsByTagName(selector);}
return document.querySelectorAll(selector);},_getContext:function(context)
{context=(typeof context==='string')?document.querySelector(context):context;return(context&&context.dom)?context.get():(context||document);},_inject:function(html,fn)
{var len=this.nodes.length;var nodes=[];while(len--)
{var res=(typeof html==='function')?html.call(this,this.nodes[len]):html;var el=(len===0)?res:this._clone(res);var node=fn.call(this,el,this.nodes[len]);if(node)
{if(node.dom)nodes.push(node.get());else nodes.push(node);}}
return new Dom(nodes);},_cloneEvents:function(node,copy)
{var events=node._e;if(events)
{copy._e=events;for(var name in events._events)
{for(var i=0;i<events._events[name].length;i++)
{copy.addEventListener(name,events._events[name][i]);}}}
return copy;},_clone:function(node)
{if(typeof node==='undefined')return;if(typeof node==='string')return node;else if(node instanceof Node||node.nodeType)return node.cloneNode(true);else if('length'in node)
{return[].map.call(this._toArray(node),function(el){return el.cloneNode(true);});}},_slice:function(obj)
{return(!obj||obj.length===0)?[]:(obj.length)?[].slice.call(obj.nodes||obj):[obj];},_eachClass:function(value,type)
{return this.each(function(node)
{if(value)
{var setClass=function(name){if(node.classList)node.classList[type](name);};value.split(' ').forEach(setClass);}});},_triggerEvent:function(name)
{var node=this.get();if(node&&node.nodeType!==3)node[name]();return this;},_getOneHandler:function(handler,events)
{var self=this;return function()
{handler.apply(this,arguments);self.off(events);};},_getEventNamespace:function(event)
{var arr=event.split('.');var namespace=(arr[1])?arr[1]:'_events';return(arr[2])?namespace+arr[2]:namespace;},_getEventName:function(event)
{return event.split('.')[0];},_offEvent:function(node,event,namespace,handler,condition)
{for(var key in node._e)
{for(var name in node._e[key])
{if(condition(name,key,event,namespace))
{var handlers=node._e[key][name];for(var i=0;i<handlers.length;i++)
{if(typeof handler!=='undefined'&&handlers[i].toString()!==handler.toString())
{continue;}
node.removeEventListener(name,handlers[i]);node._e[key][name].splice(i,1);if(node._e[key][name].length===0)delete node._e[key][name];if(Object.keys(node._e[key]).length===0)delete node._e[key];}}}}},_getInnerOrOuter:function(method,type)
{return this[method](undefined,type);},_getDocSize:function(node,type)
{var body=node.body,html=node.documentElement;return Math.max(body['scroll'+type],body['offset'+type],html['client'+type],html['scroll'+type],html['offset'+type]);},_getSize:function(type,captype,value,adjust)
{if(value===undefined)
{var el=this.get();if(el.nodeType===3)value=0;else if(el.nodeType===9)value=this._getDocSize(el,captype);else if(el===window)value=window['inner'+captype];else value=this._getHeightOrWidth(type,el,adjust||'normal');return Math.round(value);}
return this.each(function(node)
{value=parseFloat(value);value=value+this._adjustResultHeightOrWidth(type,node,adjust||'normal');new Dom(node).css(type,value+'px');}.bind(this));},_getHeightOrWidth:function(type,el,adjust)
{if(!el)return 0;var name=type.charAt(0).toUpperCase()+type.slice(1);var result=0;var style=getComputedStyle(el,null);var $el=new Dom(el);var $targets=$el.parents().filter(function(node)
{return(node.nodeType===1&&getComputedStyle(node,null).display==='none')?node:false;});if(style.display==='none')$targets.add(el);if($targets.length!==0)
{var fixStyle='visibility: hidden !important; display: block !important;';var tmp=[];$targets.each(function(node)
{var $node=new Dom(node);var thisStyle=$node.attr('style');if(thisStyle!==null)tmp.push(thisStyle);$node.attr('style',(thisStyle!==null)?thisStyle+';'+fixStyle:fixStyle);});result=$el.get()['offset'+name]-this._adjustResultHeightOrWidth(type,el,adjust);$targets.each(function(node,i)
{var $node=new Dom(node);if(tmp[i]===undefined)$node.removeAttr('style');else $node.attr('style',tmp[i]);});}
else
{result=el['offset'+name]-this._adjustResultHeightOrWidth(type,el,adjust);}
return result;},_adjustResultHeightOrWidth:function(type,el,adjust)
{if(!el||adjust===false)return 0;var fix=0;var style=getComputedStyle(el,null);var isBorderBox=(style.boxSizing==="border-box");if(type==='height')
{if(adjust==='inner'||(adjust==='normal'&&isBorderBox))
{fix+=(parseFloat(style.borderTopWidth)||0)+(parseFloat(style.borderBottomWidth)||0);}
if(adjust==='outer')fix-=(parseFloat(style.marginTop)||0)+(parseFloat(style.marginBottom)||0);}
else
{if(adjust==='inner'||(adjust==='normal'&&isBorderBox))
{fix+=(parseFloat(style.borderLeftWidth)||0)+(parseFloat(style.borderRightWidth)||0);}
if(adjust==='outer')fix-=(parseFloat(style.marginLeft)||0)+(parseFloat(style.marginRight)||0);}
return fix;},_getDim:function(type)
{var node=this.get();return(node.nodeType===3)?{top:0,left:0}:this['_get'+type](node);},_getPosition:function(node)
{return{top:node.offsetTop,left:node.offsetLeft};},_getOffset:function(node)
{var rect=node.getBoundingClientRect();var doc=node.ownerDocument;var docElem=doc.documentElement;var win=doc.defaultView;return{top:rect.top+win.pageYOffset-docElem.clientTop,left:rect.left+win.pageXOffset-docElem.clientLeft};},_getSibling:function(selector,method)
{selector=(selector&&selector.dom)?selector.get():selector;var isNode=(selector&&selector.nodeType);var sibling;this.each(function(node)
{while(node=node[method])
{if((isNode&&node===selector)||new Dom(node).is(selector))
{sibling=node;return;}}});return new Dom(sibling);},_toArray:function(obj)
{if(obj instanceof NodeList)
{var arr=[];for(var i=0;i<obj.length;i++)
{arr[i]=obj[i];}
return arr;}
else if(obj===undefined)return[];else
{return(obj.dom)?obj.nodes:obj;}},_toParams:function(obj)
{var params='';for(var key in obj)
{params+='&'+this._encodeUri(key)+'='+this._encodeUri(obj[key]);}
return params.replace(/^&/,'');},_toObject:function(str)
{return(new Function("return "+str))();},_encodeUri:function(str)
{return encodeURIComponent(str).replace(/!/g,'%21').replace(/'/g,'%27').replace(/\(/g,'%28').replace(/\)/g,'%29').replace(/\*/g,'%2A').replace(/%20/g,'+');},_isNumber:function(str)
{return!isNaN(str)&&!isNaN(parseFloat(str));},_isObjectString:function(str)
{return(str.search(/^{/)!==-1);},_getBooleanFromStr:function(str)
{if(str==='true')return true;else if(str==='false')return false;return str;},_hasDisplayNone:function(el)
{return(el.style.display==='none')||((el.currentStyle)?el.currentStyle.display:getComputedStyle(el,null).display)==='none';}};var $K={};$K.app=[];$K.version='7.2.0';$K.options={};$K.modules={};$K.services={};$K.plugins={};$K.classes={};$K.extends={};$K.lang={};$K.dom=function(selector,context){return new Dom(selector,context);};$K.ajax=Ajax;$K.Dom=Dom;$K.env={'module':'modules','service':'services','plugin':'plugins','class':'classes','extend':'extends'};var KubeApp=function(options,args)
{return($K.app=new App(options));};$K.init=function(options)
{return new KubeApp(options,[].slice.call(arguments,1));};$K.api=function(name)
{var app=$K.app;var args=[].slice.call(arguments,1);if(app)
{args.unshift(name);app.api.apply(app,args);}};$K.add=function(type,name,obj)
{if(typeof $K.env[type]==='undefined')return;if(obj.translations)
{$K.lang=$K.extend(true,{},$K.lang,obj.translations);}
if(type==='extend')
{$K[$K.env[type]][name]=obj;}
else
{var F=function(){};F.prototype=obj;if(obj.extends)
{for(var i=0;i<obj.extends.length;i++)
{$K.inherit(F,$K.extends[obj.extends[i]]);}}
$K[$K.env[type]][name]=F;}};$K.addLang=function(lang,obj)
{if(typeof $K.lang[lang]==='undefined')
{$K.lang[lang]={};}
$K.lang[lang]=$K.extend($K.lang[lang],obj);};$K.create=function(name)
{var arr=name.split('.');var args=[].slice.call(arguments,1);var type='classes';if(typeof $K.env[arr[0]]!=='undefined')
{type=$K.env[arr[0]];name=arr.slice(1).join('.');}
var instance=new $K[type][name]();instance._type=arr[0];instance._name=name;if(instance.init)
{var res=instance.init.apply(instance,args);return(res)?res:instance;}
return instance;};$K.inherit=function(current,parent)
{var F=function(){};F.prototype=parent;var f=new F();for(var prop in current.prototype)
{if(current.prototype.__lookupGetter__(prop))f.__defineGetter__(prop,current.prototype.__lookupGetter__(prop));else f[prop]=current.prototype[prop];}
current.prototype=f;current.prototype.super=parent;return current;};$K.error=function(exception)
{throw exception;};$K.extend=function()
{var extended={};var deep=false;var i=0;var length=arguments.length;if(Object.prototype.toString.call(arguments[0])==='[object Boolean]')
{deep=arguments[0];i++;}
var merge=function(obj)
{for(var prop in obj)
{if(Object.prototype.hasOwnProperty.call(obj,prop))
{if(deep&&Object.prototype.toString.call(obj[prop])==='[object Object]')extended[prop]=$K.extend(true,extended[prop],obj[prop]);else extended[prop]=obj[prop];}}};for(;i<length;i++)
{var obj=arguments[i];merge(obj);}
return extended;};var App=function(options)
{this.modules={};this.services=[];this.queueStart={'service':{},'module':{}};this.queueStop={'service':{},'module':{}};this.started=false;this.stopped=false;this.namespace='kube';this.dataNamespace='data-kube';this.instancePrefix='kube-instance-';this.rootOpts=options;this.$win=$K.dom(window);this.$doc=$K.dom(document);this.$body=$K.dom('body');this.coreServices=['options','lang','utils'];this.bindableServices=['opts','lang','utils','$win','$doc','$body']
this.utils=$K.create('service.utils',this);this.opts=$K.create('service.options',this,'global',options);this.lang=$K.create('service.lang',this);this.appcallback=new App.Callback(this);this.appstarter=new App.Starter(this);this.appbuilder=new App.Builder(this);this.appbroadcast=new App.Broadcast(this);this.appapi=new App.Api(this);this.build();this.start();};App.prototype={build:function()
{this.appbuilder.build();},start:function()
{this.stopped=false;this.broadcast('start',this);this.appstarter.start();this.broadcast('started',this);this.started=true;},stop:function()
{this.started=false;this.stopped=true;this.broadcast('stop',this);this.appstarter.stop();this.broadcast('stopped',this);},starter:function(instance,priority)
{var type=(instance._type!=='service')?'module':instance._type;this.queueStart[type][priority]=instance._name;},stopper:function(instance,priority)
{var type=(instance._type!=='service')?'module':instance._type;this.queueStop[type][priority]=instance._name;},isStarted:function()
{return this.started;},isStopped:function()
{return this.stopped;},broadcast:function(name,sender)
{this.appbroadcast.trigger(name,sender,[].slice.call(arguments,2));},on:function(name,func)
{this.appcallback.add(name,func);},off:function(name,func)
{this.appcallback.remove(name,func);},api:function(name)
{this.appapi.trigger(name,[].slice.call(arguments,1));}};App.Module=function(app,$el,name,id)
{this.app=app;this.instancePrefix=app.instancePrefix;this.eventTypes=['click','mouseover','mouseout','mousedown','mouseup','mousemove','keydown','keyup','submit','change','contextmenu','input'];return this._build($el,name,id);};App.Module.prototype={_build:function($el,name,id)
{var instance=$el.dataget(this.instancePrefix+name);if(!instance&&typeof $K.modules[name]!=='undefined')
{var context=new App.Context(this.app,$el,id);var $target=context.getTarget();instance=$K.create('module.'+name,this.app,context);instance._id=id;$el.dataset(this.instancePrefix+name,instance);$el.attr('data-loaded',true);this._delegateModuleEvents(instance,$el,name);this._delegateModuleCommands(instance,$el);if($target.is())
{this._delegateModuleCommands(instance,$target);}}
return instance;},_delegateModuleCommands:function(instance,$el)
{$el.find('[data-command]').each(function(node)
{this._delegateCommand(instance,node,node.getAttribute('data-command'));}.bind(this));},_delegateCommand:function(instance,node,command)
{if(typeof instance._eventCommands==='undefined')instance._eventCommands=[];var self=this;var $node=$K.dom(node);instance._eventCommands.push($node);$node.on('click.generatedcommand',function(e)
{e.preventDefault();var args=$node.data();args.event=e;self.app.broadcast(command,instance,$node,args);});},_delegateModuleEvents:function(instance,$el,name)
{$el.find('[data-type]').each(function(node)
{var arr=node.getAttribute('data-type').split('.');var type=arr[0];var scope=name;if(arr.length===2)
{scope=arr[0];type=arr[1];}
if(scope===name)
{this._delegateEvent(instance,name,node,type);}}.bind(this));},_delegateEvent:function(instance,name,node,type)
{if(typeof instance._eventNodes==='undefined')instance._eventNodes=[];var $node=$K.dom(node);var callback=function(e,eventType,element,type,args)
{return instance['on'+eventType].call(instance,e,element,type,args);};instance._eventNodes.push($node);for(var i=0;i<this.eventTypes.length;i++)
{var event='on'+this.eventTypes[i];if(typeof instance[event]==='function')
{$node.on(this.eventTypes[i]+'.generatedevent',function(e)
{var args=$node.data();callback(e,e.type,this,type,args);});}}}};App.Context=function(app,$el,name)
{this.app=app;this.opts=app.opts;this.$element=this._buildElement($el);this.params=this._buildParams();this.name=this._buildName(name);this.$target=this._buildTarget();};App.Context.prototype={getElement:function()
{return this.$element;},getTarget:function()
{return this.$target;},getParams:function(defaults)
{return(defaults)?$K.extend({},defaults,this.params):this.params;},getName:function()
{return this.name;},_buildName:function(name)
{return(this.params.name)?this.params.name:name;},_buildParams:function()
{return $K.create('service.options',this.app,'element',this.$element);},_buildElement:function($el)
{return new App.Element(this.app,$el);},_buildTarget:function()
{return new App.Target(this.app,this.params.target);}};App.Callback=function(app)
{this.app=app;this.opts=app.opts;this.callbacks={};this._build();};App.Callback.prototype={stop:function()
{this.callbacks={};},add:function(name,handler)
{if(typeof this.callbacks[name]==='undefined')this.callbacks[name]=[];this.callbacks[name].push(handler);},remove:function(name,handler)
{if(handler===undefined)
{delete this.callbacks[name];}
else
{for(var i=0;i<this.callbacks[name].length;i++)
{this.callbacks[name].splice(i,1);}
if(this.callbacks[name].length===0)
{delete this.callbacks[name];}}},trigger:function(name,args)
{if(typeof this.callbacks[name]==='undefined')return;for(var i=0;i<this.callbacks[name].length;i++)
{this.callbacks[name][i].apply(this.app,args);}},_build:function()
{if(this.opts.callbacks)
{for(var name in this.opts.callbacks)
{if(typeof this.opts.callbacks[name]==='function')
{if(typeof this.callbacks[name]==='undefined')this.callbacks[name]=[];this.callbacks[name].push(this.opts.callbacks[name]);}
else
{for(var key in this.opts.callbacks[name])
{if(typeof this.callbacks[name+'.'+key]==='undefined')this.callbacks[name+'.'+key]=[];this.callbacks[name+'.'+key].push(this.opts.callbacks[name][key]);}}}}}};App.Element=function(app,$el)
{this.app=app;this.parse($el);};App.Element.prototype={isOpened:function()
{return!this.isClosed();},isClosed:function()
{return(this.hasClass('is-hidden')||this.css('display')==='none');}};$K.inherit(App.Element,Dom.prototype);App.Target=function(app,selector)
{this.app=app;this.parse(selector);};App.Target.prototype={isOpened:function()
{return!this.isClosed();},isClosed:function()
{var self=this;var count=0;var len=this.length;this.each(function(node)
{var $node=$K.dom(node);if($node.hasClass('is-hidden')||$node.css('display')==='none')
{count++;}});return(count===len);}};$K.inherit(App.Target,Dom.prototype);App.Api=function(app)
{this.app=app;this.modules=app.modules;};App.Api.prototype={trigger:function(name,args)
{var arr=name.split('.');var isNamed=(arr.length===3);var isApp=(arr.length===1);var isCallback=(arr[0]==='on'||arr[0]==='off');var module=arr[0];var method=arr[1];var id=false;if(isApp)
{module=false;method=arr[0];}
else if(isNamed)
{method=arr[2];id=arr[1];}
if(isApp)
{if(typeof this.app[method]==='function')
{return this._call(this.app,method,args);}}
else if(isCallback)
{return(module==='on')?this.app.on(module,args[0]):this.app.off(module,args[0]||undefined);}
else
{if(this._isInstanceExists(this.app,module))
{return this._call(this.app[module],method,args);}
else if(this._isInstanceExists(this.modules,module))
{this._doApi(module,method,id,args)}}},_isInstanceExists:function(obj,name)
{return(typeof obj[name]!=='undefined');},_doApi:function(module,method,id,args)
{for(var key in this.modules[module])
{if(id===false||id===key)
{var instance=this.modules[module][key];this._call(instance,method,args);}}},_call:function(instance,method,args)
{if(typeof instance[method]==='function')
{return instance[method].apply(instance,args);}}};App.Broadcast=function(app)
{this.app=app;this.modules=app.modules;this.callback=app.appcallback;};App.Broadcast.prototype={trigger:function(name,sender,args)
{if(Array.isArray(name))
{sender._id=name[0];name=name[1];}
else if(sender&&typeof sender.context!=='undefined')
{sender._id=sender.context.getName();}
args.unshift(sender);for(var moduleName in this.modules)
{for(var key in this.modules[moduleName])
{var instance=this.modules[moduleName][key];this._call(instance,name,args,sender);}}
this.callback.trigger(name,args);},_call:function(instance,name,args,sender)
{if(typeof instance['onmessage']!=='undefined')
{var arr=name.split('.');var func=instance['onmessage'][arr[0]];if(arr.length===1&&typeof func==='function')
{func.apply(instance,args);}
else if(arr.length===2&&typeof func!=='undefined'&&typeof func[arr[1]]==='function')
{func[arr[1]].apply(instance,args);}}
var arr=name.split('.');if(arr.length===1)
{if(typeof instance['on'+name]==='function')
{instance['on'+name].apply(instance,args);}}
else
{arr[0]='on'+arr[0];var func=this.app.utils.checkProperty(instance,arr);if(typeof func==='function')
{func.apply(instance,args);}
if(sender&&sender._id)
{var idArr=[arr[0],sender._id,arr[1]];var func=this.app.utils.checkProperty(instance,idArr);if(typeof func==='function')
{func.apply(instance,args);}}}}};App.Builder=function(app)
{this.app=app;this.opts=app.opts;this.$doc=app.$doc;this.dataNamespace=app.dataNamespace;};App.Builder.prototype={build:function()
{this._buildServices();this._buildModules();},_buildServices:function()
{var services=[];var startableServices=[];for(var name in $K.services)
{if(this.app.coreServices.indexOf(name)===-1)
{this.app[name]=$K.create('service.'+name,this.app);this.app.bindableServices.push(name);services.push(name);startableServices.push(name);}}
for(var i=0;i<this.app.coreServices.length;i++)
{var name=this.app.coreServices[i];if(name!=='options')services.push(name);}
for(var i=0;i<services.length;i++)
{var service=services[i];for(var z=0;z<this.app.bindableServices.length;z++)
{var inj=this.app.bindableServices[z];if(service!==inj)
{this.app[service][inj]=this.app[inj];}}}
this.app.services=startableServices;},_buildModules:function()
{this.$doc.find('['+this.dataNamespace+']').each(function(node,i)
{var $el=$K.dom(node);var name=$el.attr(this.dataNamespace);var id=($el.attr('id'))?$el.attr('id'):name+'-'+i;id=($el.attr('data-name'))?$el.attr('data-name'):id;var instance=new App.Module(this.app,$el,name,id);this._storeElementModule(instance,name,id);}.bind(this));},_storeElementModule:function(instance,name,id)
{if(instance)
{if(typeof this.app.modules[name]==='undefined')
{this.app.modules[name]={};}
this.app.modules[name][id]=instance;}}};App.Starter=function(app)
{this.app=app;this.queue={'start':app.queueStart,'stop':app.queueStop};this.priority={'start':{'service':[],'module':[]},'stop':{'service':[],'module':[]}};};App.Starter.prototype={start:function()
{this._stopStart('service','start');this._stopStart('module','start');},stop:function()
{this._stopStart('service','stop');this._stopStart('module','stop');},_stopStart:function(type,method)
{var queue=this.queue[method][type];for(var key in queue)
{var name=queue[key];var instance=(type==='service')?this.app[name]:this.app.modules[name];this._callInstances(type,method,instance);this.priority[method][type].push(name);}
var modules=(type==='service')?this.app.services:this.app.modules;for(var key in modules)
{var name=(type==='service')?modules[key]:key;if(this.priority[method][type].indexOf(name)===-1)
{var instance=(type==='service')?this.app[name]:modules[name];this._callInstances(type,method,instance);}}},_stopModuleEvents:function(method,instance)
{if(method==='stop')
{if(typeof instance._eventNodes!=='undefined')
{for(var i=0;i<instance._eventNodes.length;i++)
{instance._eventNodes[i].off('.generatedevent');}}
if(typeof instance._eventCommands!=='undefined')
{for(var i=0;i<instance._eventCommands.length;i++)
{instance._eventCommands[i].off('.generatedcommand');}}}},_callInstances:function(type,method,instance)
{if(type==='service')
{this._call(instance,method);}
else
{for(var key in instance)
{this._call(instance[key],method);this._stopModuleEvents(method,instance[key]);}}},_call:function(instance,method,args)
{if(typeof instance[method]==='function')
{return instance[method].apply(instance,args);}}};$K.add('extend','dom',$K.Dom.prototype);$K.add('service','animate',{init:function(app)
{this.app=app;this.animationOpt=true;},run:function(element,animation,callback)
{return new $K.AnimatePlay(this.app,element,animation,callback,this.animationOpt);},remove:function(element)
{this.$el=$K.dom(element);var effect=this.$el.attr('kube-animate-effect');this.$el.hide();this.$el.removeClass(effect);this.$el.off('animationend webkitAnimationEnd');}});$K.AnimatePlay=function(app,element,animation,callback,animationOpt)
{this.hidableEffects=['fadeOut','flipOut','slideUp','zoomOut','slideOutUp','slideOutRight','slideOutLeft'];this.prefix='kube-';this.prefixes=['','-webkit-'];this.utils=app.utils;this.$el=$K.dom(element);this.$body=$K.dom('body');this.callback=callback;this.animation=(!animationOpt)?this._buildAnimationOff(animation):animation;this._setHeight();if(this._isAnimate())this._animate();else this._toggle();};$K.AnimatePlay.prototype={_setHeight:function()
{if(this.animation==='slideUp'||this.animation==='slideDown')
{this.$el.height(this.$el.height());}},_buildAnimationOff:function(animation)
{return(this._isHidable(animation))?'hide':'show';},_isAnimate:function()
{return(this.animation!=='show'&&this.animation!=='hide');},_isHidable:function(effect)
{return(this.hidableEffects.indexOf(effect)!==-1);},_clean:function()
{this.$body.removeClass('is-no-scroll-x');this.$el.removeClass(this.prefix+this.animation);this.$el.removeAttr('kube-animate-effect');},_toggle:function()
{if(this.animation==='show')this.$el.show();else this.$el.hide();if(typeof this.callback==='function')this.callback(this);},_animate:function()
{this.$body.addClass('is-no-scroll-x');this.$el.show();this.$el.addClass(this.prefix+this.animation);this.$el.attr('kube-animate-effect',this.prefix+this.animation);this._complete();},_complete:function()
{this.$el.one('animationend webkitAnimationEnd',function(e)
{if(this.$el.hasClass(this.prefix+this.animation))this._clean();if(this._isHidable(this.animation))this.$el.hide();if(this.animation==='slideUp'||this.animation==='slideDown')this.$el.css('height','');if(typeof this.callback==='function')this.callback(this.$el);}.bind(this));}};$K.add('service','transition',{init:function(app)
{this.transitionOpt=true;},run:function(element,params)
{return new $K.TransitionPlay(params,element,this.transitionOpt);},remove:function(element)
{this.$el=$K.dom(element);var classname=this.$el.attr('kube-transition-class');if(classname)
{this.$el.removeClass(classname);this.$el.removeAttr('kube-transition-class');}
var css=this.$el.attr('kube-transition-css');if(css)
{var names=css.split(',');for(var i=0;i<names.length;i++)
{this.$el.css(names[i],'');}
this.$el.removeAttr('kube-transition-css');}
this.$el.off('transitionend webkitTransitionEnd');}});$K.TransitionPlay=function(params,element,transitionOpt)
{this.$el=$K.dom(element);this.params=params;this._transition();};$K.TransitionPlay.prototype={_transition:function()
{if(this.params.classname)
{this.$el.addClass(this.params.classname);this.$el.attr('kube-transition-class',this.params.classname);}
if(this.params.css)
{this.$el.css(this.params.css);var names=[];for(var key in this.params.css)
{names.push(key);}
this.$el.attr('kube-transition-css',names.join(','))}
this._complete();},_complete:function()
{this.$el.one('transitionend webkitTransitionEnd',function(e)
{if(typeof this.params.callback==='function')this.params.callback(this.$el);}.bind(this));}};$K.add('service','lang',{init:function(app)
{this.app=app;this.opts=app.opts;var lang=(this.opts.lang)?this.opts.lang:'en';this.vars=this.build(lang);},build:function(lang)
{lang=($K.lang[lang]===undefined)?'en':lang;return($K.lang[lang]!==undefined)?$K.lang[lang]:[];},rebuild:function(lang)
{this.opts.lang=lang;this.vars=this.build(lang);},extend:function(obj)
{this.vars=$K.extend(this.vars,obj);},parse:function(str)
{if(str===undefined)
{return '';}
var matches=str.match(/## (.*?) ##/g);if(matches)
{for(var i=0;i<matches.length;i++)
{var key=matches[i].replace(/^##\s/g,'').replace(/\s##$/g,'');str=str.replace(matches[i],this.get(key));}}
return str;},get:function(name)
{return(typeof this.vars[name]!=='undefined')?this.vars[name]:'';}});$K.add('service','options',{init:function(app,type,opts)
{this.app=app;this.utils=app.utils;return(type==='global')?this._build(opts):this._buildElement(opts);},_build:function(opts)
{return(opts)?this._extendFromElements(opts):{};},_buildElement:function($el)
{return $K.extend({},$el.data());},_extendFromElements:function(options)
{return(options.hasOwnProperty('append'))?this.utils.extendData(options,options['append']):options;}});$K.add('service','response',{init:function(app)
{this.app=app;},parse:function(str)
{if(str==='')return false;var obj=(typeof str==='object')?str:JSON.parse(str);if(obj[0]!==undefined)
{for(var item in obj)
{this._parseItem(obj[item]);}}
else
{this._parseItem(obj);}
return obj;},_parseItem:function(item)
{if(item.type==='location')
{top.location.href=item.data;}
else if(item.type==='message')
{this.message.show(item.data);}
else
{for(var key in item.data)
{var val=item.data[key];var $el=$K.dom(key);if(item.type==='value')
{val=(val===null||val===false)?0:val;val=(val===true)?1:val;$el.val(val);}
else if(item.type==='html')
{val=(val===null||val===false)?'':val;$el.html(this._stripslashes(val));}
else if(item.type==='addClass')
{$el.addClass(val);}
else if(item.type==='removeClass')
{$el.removeClass(val);}
else if(item.type==='show')
{$el.removeClass('is-hidden');}
else if(item.type==='hide')
{$el.addClass('is-hidden');}
else if(item.type==='animate')
{this.animate.run($el,val);}}}
return item;},_stripslashes:function(str)
{return(str+'').replace(/\0/g,'0').replace(/\\([\\'"])/g,'$1');}});$K.add('service','progress',{init:function(app)
{this.app=app;this.$body=app.$body;this.defaults={selector:'kube-progress',target:false,value:100}
this.$progress=false;this.$progressBar=false;},stop:function()
{this.$progress=false;this.$progressBar=false;$K.dom('#'+this.params.selector).remove();if(this.params.target)
{var $target=$K.dom(this.params.target);$target.removeClass('is-relative');}},show:function(params)
{this._buildDefaults(params);this._build();},hide:function(params)
{if(this.$progress)
{this._buildDefaults(params);this.animate.run(this.$progress,'fadeOut',this.stop.bind(this));}},update:function(params)
{this._buildDefaults(params);if(!this.$progress)this._build();this._setValue();},_buildDefaults:function(data)
{this.params=$K.extend({},this.defaults,data);},_build:function()
{this.stop();this.$progress=$K.dom('<div>');this.$progress.attr('id',this.params.selector);this.$progress.addClass(this.params.selector);this.$progressBar=$K.dom('<span>');this.$progress.append(this.$progressBar);if(this.params.target)
{var $target=$K.dom(this.params.target);if($target.css('position')==='static')
{$target.addClass('is-relative');}
$target.append(this.$progress);}
else
{this.$progress.addClass('is-fixed');this.$body.append(this.$progress);}},_setValue:function()
{this.$progressBar.css('width',this.params.value+'%');}});$K.add('service','message',{init:function(app)
{this.app=app;this.defaults={name:false,delay:7,message:'',position:'right',positions:['is-left','is-right','is-center','is-centered','is-line'],type:false,types:['is-error','is-success','is-focus','is-black'],selector:'kube-message'};this.currentAnimation=[];this.animation={line:['slideInDown','slideOutUp'],centered:['slideInDown','slideOutUp'],left:['slideInLeft','slideOutLeft'],right:['slideInRight','slideOutRight']};this.$message=false;this.timeout=false;},stop:function()
{clearTimeout(this.timeout);$K.dom('#'+this.params.selector).remove();this.$message=false;this.$doc.off('.kube.message');},show:function(params)
{this._buildDefaults(params);this.stop();this._build();this._open();},hide:function(params)
{this._buildDefaults(params);this._close();},_broadcast:function(message)
{message='message.'+message;message=(this.params.name!==false)?[this.params.name,message]:message;this.app.broadcast(message,this);},_buildDefaults:function(data)
{this.params=$K.extend({},this.defaults,data);},_buildAnimation:function()
{this.currentAnimation=this.animation[this.params.position];},_buildClose:function()
{this.$message.on('click.kube.message',this._close.bind(this));},_buildType:function()
{if(this.params.type)
{this.$message.removeClass(this.params.types.join(' '));this.$message.addClass(this.params.type);}},_buildPosition:function()
{this.$message.removeClass(this.params.positions.join(' '));this.$message.addClass('is-'+this.params.position);},_buildMessage:function()
{this.$message.html(this.params.message);},_build:function()
{this.$message=$K.dom('<div>');this.$message.attr('id',this.params.selector);this.$message.addClass('message is-hidden');this.$body.append(this.$message);},_handleKeyboard:function(e)
{if(e.which===27)this._close();},_open:function()
{this._broadcast('open');this._buildClose();this._buildType();this._buildPosition();this._buildAnimation();this._buildMessage();this.animate.run(this.$message,this.currentAnimation[0],this._opened.bind(this));},_close:function(e)
{if(this.$message)
{this._broadcast('close');this.animate.run(this.$message,this.currentAnimation[1],this._closed.bind(this));}},_opened:function()
{this.$doc.on('keyup.kube.message',this._handleKeyboard.bind(this));this.timeout=setTimeout(this._close.bind(this),this.params.delay*1000);this._broadcast('opened');},_closed:function()
{this.stop();this._broadcast('closed');}});$K.add('service','modal',{init:function(app)
{this.app=app;this.defaults={target:false,name:false,url:false,title:false,width:'600px',height:false,handle:false,commands:false};this.$box=false;this.$modal=false;},stop:function()
{if(this.$box)
{this.$box.remove();this.$box=false;this.$modal=false;this.$doc.off('.kube.modal');this.$win.off('.kube.modal');}
if(this.$overlay)
{this.$overlay.remove();}},open:function(params)
{this._buildDefaults(params);if(this.params.url)
{this._openUrl();}
else if(this.params.target)
{this._openTarget();}},close:function()
{this._close();},resize:function()
{this.$modal.setWidth(this.params.width);this.$modal.updatePosition();},_broadcast:function(message)
{message='modal.'+message;this.app.broadcast([this.params.name,message],this,this.$modal,this.$modalForm);},_isOpened:function()
{return(this.$modal&&this.$modal.hasClass('is-open'));},_openUrl:function()
{$K.ajax.post({url:this.params.url,success:this._doOpen.bind(this)});},_openTarget:function()
{var template=$K.dom(this.params.target).clone().html();this._doOpen(template);},_doOpen:function(template)
{this.stop();if(!this._isDesktop())
{document.activeElement.blur();}
this._createModal(template);this._buildModalBox();this._buildOverlay();this._buildModal();this._buildModalForm();this._buildModalCommands();this.$modal.updatePosition();this._broadcast('open');this.animate.run(this.$box,'fadeIn',this._opened.bind(this));this.animate.run(this.$overlay,'fadeIn');},_opened:function()
{this.$modal.addClass('is-open');this.$box.on('mousedown.kube.modal',this._close.bind(this));this.$doc.on('keyup.kube.modal',this._handleEscape.bind(this));this.$win.on('resize.kube.modal',this.resize.bind(this));this.$modal.getBody().find('input[type=text],input[type=url],input[type=email]').on('keydown.kube.modal',this._handleEnter.bind(this));this._broadcast('opened');},_close:function(e)
{if(!this.$box||!this._isOpened())return;if(e)
{if(!this._needToClose(e.target))
{return;}
e.stopPropagation();e.preventDefault();}
this._broadcast('close');this.animate.run(this.$box,'fadeOut',this._closed.bind(this));this.animate.run(this.$overlay,'fadeOut');},_closed:function()
{this.$modal.removeClass('is-open');this.$box.off('.kube.modal');this.$doc.off('.kube.modal');this.$win.off('.kube.modal');this._broadcast('closed');},_createModal:function(template)
{this.$modal=$K.create('class.modal.element',this.app,template);},_buildDefaults:function(data)
{this.params=$K.extend({},this.defaults,data);},_buildModalBox:function()
{this.$box=$K.dom('<div>');this.$box.attr('id','kube-modal');this.$box.addClass('modal-box is-hidden');this.$box.html('');this.$body.append(this.$box);},_buildOverlay:function()
{this.$overlay=$K.dom('#kube-overlay');if(this.$overlay.length===0)
{this.$overlay=$K.dom('<div>');this.$overlay.attr('id','kube-overlay');this.$overlay.addClass('overlay is-hidden');this.$body.prepend(this.$overlay);}},_buildModal:function()
{this.$box.append(this.$modal);this.$modal.setTitle(this.params.title);this.$modal.setHeight(this.params.height);this.$modal.setWidth(this.params.width);},_buildModalCommands:function()
{if(this.params.commands)
{var commands=this.params.commands;var $footer=this.$modal.getFooter();for(var key in commands)
{var $btn=$K.dom('<button>');$btn.addClass('button');$btn.html(commands[key].title);$btn.attr('data-command',key);if(typeof commands[key].classname!=='undefined')
{$btn.addClass(commands[key].classname);}
if(typeof commands[key].close!=='undefined')
{$btn.attr('data-action','close');$btn.on('click',this._close.bind(this));}
else
{$btn.on('click',this._handleCommand.bind(this));}
$footer.append($btn);}}},_buildModalForm:function()
{this.$modalForm=$K.create('modal.form',this.app,this.$modal.getForm());},_needToClose:function(el)
{var $target=$K.dom(el);if($target.attr('data-action')==='close'||this.$modal.isCloseNode(el)||$target.closest('.modal').length===0)
{return true;}
return false;},_handleCommand:function(e)
{var $btn=$K.dom(e.target).closest('button');var command=$btn.attr('data-command');if(command!=='cancel')e.preventDefault();this._broadcast(command);},_handleEnter:function(e)
{if(e.which===13)
{if(this.params.handle)
{e.preventDefault();this._broadcast(this.params.handle);}}},_handleEscape:function(e)
{if(e.which===27)this._close();},_isDesktop:function()
{return!/(iPhone|iPod|iPad|Android)/.test(navigator.userAgent);}});$K.add('class','modal.form',{extends:['dom'],init:function(app,element)
{this.app=app;this.build(element);},build:function(element)
{this.parse(element);},getData:function()
{var data={};this.find('[name]').each(function(node)
{var $node=$K.dom(node);data[$node.attr('name')]=$node.val();});return data;},setData:function(data)
{this.find('[name]').each(function(node)
{var $node=$K.dom(node);var name=$node.attr('name');if(data.hasOwnProperty(name))
{if(node.type&&node.type==='checkbox')node.checked=data[name];else $node.val(data[name]);}});},getItem:function(name)
{return this.find('[name='+name+']');}});$K.add('class','modal.element',{extends:['dom'],init:function(app,template)
{this.app=app;this.opts=app.opts;this.$win=app.$win;this._init(template);},getForm:function()
{return this.find('form');},getHeader:function()
{return this.$modalHeader;},getBody:function()
{return this.$modalBody;},getFooter:function()
{return this.$modalFooter;},setTitle:function(title)
{if(title)this.$modalHeader.html(title);},setWidth:function(width)
{width=(parseInt(width)>=this.$win.width())?'96%':width;this.css('max-width',width);},setHeight:function(height)
{if(height!==false)this.$modalBody.css('height',height);},updatePosition:function()
{var width=this.width();this.css({'left':'50%','margin-left':'-'+(width/2)+'px'});var windowHeight=this.$win.height();var height=this.height();var marginTop=(windowHeight/2-height/2);if(height<windowHeight&&marginTop!==0)
{this.css('margin-top',marginTop+'px');}},isCloseNode:function(el)
{return(el===this.$modalClose.get());},_init:function(template)
{this._build();this._buildClose();this._buildHeader();this._buildBody();this._buildFooter();this._buildTemplate(template);},_build:function()
{this.parse('<div>');this.addClass('modal');this.attr('dir',this.opts.direction);},_buildClose:function()
{this.$modalClose=$K.dom('<span>');this.$modalClose.addClass('close');this.append(this.$modalClose);},_buildHeader:function()
{this.$modalHeader=$K.dom('<div>');this.$modalHeader.addClass('modal-header');this.append(this.$modalHeader);},_buildBody:function()
{this.$modalBody=$K.dom('<div>');this.$modalBody.addClass('modal-body');this.append(this.$modalBody);},_buildFooter:function()
{this.$modalFooter=$K.dom('<div>');this.$modalFooter.addClass('modal-footer');this.append(this.$modalFooter);},_buildTemplate:function(template)
{this.$modalBody.html(template);}});$K.add('service','observer',{init:function(app)
{this.app=app;this.opts=app.opts;if(this._isObserve())
{this._build();}},_isObserve:function()
{return(typeof this.opts.observer!=='undefined'&&window.MutationObserver);},_build:function()
{var self=this;var observer=new MutationObserver(function(mutations)
{mutations.forEach(function(mutation)
{var newNodes=mutation.addedNodes;if(newNodes.length===0||(newNodes.length===1&&newNodes.nodeType===3))
{return;}
self._iterate();});});observer.observe(document,{subtree:true,childList:true});},_iterate:function()
{var self=this;var $nodes=$K.dom('[data-kube]').not('[data-loaded]');$nodes.each(function(node,i)
{var $el=$K.dom(node);var name=$el.attr('data-kube');var id=($el.attr('id'))?$el.attr('id'):name+'-'+(self.app.servicesIndex+i);var instance=new App.Module(self.app,$el,name,id);self._storeElementModule(instance,name,id)
self._call(instance,'start');});if(typeof $R!=='undefined')
{$R('[data-redactor]');}},_call:function(instance,method,args)
{if(typeof instance[method]==='function')
{return instance[method].apply(instance,args);}},_storeElementModule:function(instance,name,id)
{if(instance)
{if(typeof this.app.modules[name]==='undefined')
{this.app.modules[name]={};}
this.app.modules[name][id]=instance;}}});$K.add('service','utils',{init:function(app)
{this.app=app;},parseOptsString:function(str)
{var properties=str.replace('{','').replace('}','').trim().replace(/;$/,'').split(';');var obj={};properties.forEach(function(property){var tup=property.split(':');obj[tup[0].trim()]=tup[1].trim().replace(/'/g,'');});return obj;},ucfirst:function(str)
{return str.charAt(0).toUpperCase()+str.slice(1);},checkProperty:function(obj)
{var args=(arguments[1]&&Array.isArray(arguments[1]))?arguments[1]:[].slice.call(arguments,1);for(var i=0;i<args.length;i++)
{if(!obj||(typeof obj[args[i]]==='undefined'))
{return false;}
obj=obj[args[i]];}
return obj;},extendData:function(data,elements)
{if(typeof elements==='object')
{data=$K.extend({},data,elements);}
else if(typeof elements==='string')
{var $elms=$K.dom(elements);$elms.each(function(node)
{var $node=$K.dom(node);if(node.tagName==='FORM')
{data=$K.extend({},data,$node.serialize(true));}
else
{var name=($node.attr('name'))?$node.attr('name'):$node.attr('id');var val=$node.val();data[name]=(this._isNumber(val))?parseFloat(val):this._getBooleanFromStr(val);}});}
return data;},_isNumber:function(str)
{return!isNaN(str)&&!isNaN(parseFloat(str));},_getBooleanFromStr:function(str)
{if(str==='true')return true;else if(str==='false')return false;return str;}});window.Kube=window.$K=$K;}());(function($K)
{$K.add('module','alert',{init:function(app,context)
{this.app=app;this.animate=app.animate;this.context=context;this.$element=context.getElement();},onclick:function(e,element,type)
{if(type==='close')
{this.close(e);}},open:function(e)
{if(this.$element.isOpened())return;if(e)e.preventDefault();this.app.broadcast('alert.open',this);this.animate.run(this.$element,'fadeIn',this._opened.bind(this));},close:function(e)
{if(this.$element.isClosed())return;if(e)e.preventDefault();this.app.broadcast('alert.close',this);this.animate.run(this.$element,'fadeOut',this._closed.bind(this));},_opened:function()
{this.app.broadcast('alert.opened',this);},_closed:function()
{this.app.broadcast('alert.closed',this);}});})(Kube);(function($K)
{$K.add('module','toggle',{init:function(app,context)
{this.app=app;this.animate=app.animate;var defaults={target:false};this.context=context;this.params=context.getParams(defaults);this.$element=context.getElement();this.$target=context.getTarget();},start:function()
{this.$element.on('click.kube.toggle',this.toggle.bind(this));},stop:function()
{this.$element.off('.kube.toggle');},toggle:function(e)
{return(this.$target.isOpened())?this.close(e):this.open(e);},open:function(e)
{if(this.$target.isOpened())return;if(e)e.preventDefault();this.app.broadcast('toggle.open',this);this.animate.run(this.$target,'slideDown',this._opened.bind(this));},close:function(e)
{if(this.$target.isClosed())return;if(e)e.preventDefault();this.app.broadcast('toggle.close',this);this.animate.run(this.$target,'slideUp',this._closed.bind(this));},_opened:function()
{this.app.broadcast('toggle.opened',this);},_closed:function()
{this.app.broadcast('toggle.closed',this);}});})(Kube);(function($K)
{$K.add('module','sticky',{init:function(app,context)
{this.app=app;this.$win=app.$win;var defaults={offset:0};this.context=context;this.params=context.getParams(defaults);this.$element=context.getElement();},start:function()
{this.offsetTop=this._getOffsetTop();this._load();this.$win.on('scroll.kube.sticky',this._load.bind(this));},stop:function()
{this.$win.off('scroll.kube.sticky');this.$element.removeClass('fixed').css('top','');},_load:function()
{return(this._isFix())?this._setFixed():this._setUnfixed();},_isFix:function()
{return(this.$win.scrollTop()>(this.offsetTop+parseInt(this.params.offset,10)));},_setFixed:function()
{this.$element.addClass('is-fixed').css('top',this.params.offset);this.app.broadcast('sticky.fixed',this);},_setUnfixed:function()
{this.$element.removeClass('is-fixed').css('top','');this.app.broadcast('sticky.unfixed',this);},_getOffsetTop:function()
{return this.$element.offset().top;}});})(Kube);(function($K)
{$K.add('module','offcanvas',{init:function(app,context)
{this.app=app;this.$doc=app.$doc;this.$body=app.$body;this.utils=app.utils;this.animate=app.animate;this.transition=app.transition;var defaults={clickOutside:true,target:false};this.context=context;this.params=context.getParams(defaults);this.$element=context.getElement();this.$target=context.getTarget();this._build();},start:function()
{this.$element.on('click.kube.offcanvas',this.toggle.bind(this));},stop:function()
{this._clear();},toggle:function(e)
{return(this.$target.isOpened())?this.close(e):this.open(e);},open:function(e)
{if(e)
{e.stopPropagation();e.preventDefault();}
this._clear();this.$body.addClass('is-no-scroll-x');this.$target.addClass('is-offcanvas');this.targetWidth=this.$target.width();this._resize();this.app.broadcast('offcanvas.open',this);return(this.isSlide)?this._openSlide():this._openPush();},close:function(e)
{if(this.eventScroll)return;if(e)
{var $el=$K.dom(e.target);var el=$el.get();var isClickable=(el.tagName==='A'||el.tagName==='BUTTON');if(!isClickable||el===this.$element.get())
{e.stopPropagation();e.preventDefault();}}
this.app.broadcast('offcanvas.close',this);return(this.isSlide)?this._closeSlide():this._closePush();},_build:function()
{this.isSlide=!(this.$target.hasClass('is-offcanvas-push'));this.slideDirection=(this.$target.hasClass('is-offcanvas-right'))?'Right':'Left';this.pushSign=(this.slideDirection==='Left')?'':'-';this.eventScroll=false;},_handleKeyboard:function(e)
{if(e.which===27)this.close();},_openSlide:function()
{this.animate.run(this.$target,'slideIn'+this.slideDirection,this._opened.bind(this));},_openPush:function()
{this.$target.show();this._pushBody(this.pushSign+this.targetWidth+'px',this._opened.bind(this));},_opened:function()
{this.$doc.on('touchmove.kube.offcanvas',function(){this.eventScroll=true;}.bind(this));this.$doc.on('touchstart.kube.offcanvas',function(){this.eventScroll=false;}.bind(this));this.$doc.on('keyup.kube.offcanvas',this._handleKeyboard.bind(this));if(this.params.clickOutside)
{this.$doc.on('click.kube.offcanvas touchend.kube.offcanvas',this.close.bind(this));}
this.app.broadcast('offcanvas.opened',this);},_closeSlide:function()
{this.animate.run(this.$target,'slideOut'+this.slideDirection,this._closed.bind(this));},_closePush:function()
{this._pushBody('0',this._closed.bind(this));},_closed:function()
{this.$doc.off('.kube.offcanvas');this.$body.removeClass('is-no-scroll-x');this.transition.remove(this.$body);this.$target.removeClass('is-offcanvas');this.$target.hide();this.app.broadcast('offcanvas.closed',this);},_pushBody:function(transform,callback)
{var params={classname:'is-offcanvasTransition',css:{transform:'translateX('+transform+')'},callback:callback};this.transition.run(this.$body,params,callback);},_resize:function()
{var resize=function()
{this.$target.height(this.$doc.height());}.bind(this);resize();this.$doc.on('resize.kube.offcanvas',resize);},_clear:function()
{this.$doc.off('.kube.offcanvas');this.transition.remove(this.$body);$K.dom('.is-offcanvas').each(function(node)
{var $el=$K.dom(node);this.animate.remove($el);$el.hide();$el.removeClass('is-offcanvas');}.bind(this));}});})(Kube);(function($K)
{$K.add('module','tabs',{init:function(app,context)
{this.app=app;this.$body=app.$body;var defaults={equal:false};this.context=context;this.params=context.getParams(defaults);this.$element=context.getElement();this.$boxes=$K.dom([]);this.$tabActive=false;this.$boxActive=false;},start:function()
{this._buildControls();this._buildBoxes();this._setEqualBoxes();this._open();},stop:function()
{this.$tabsControls.off('.kube.tabs');},getActiveTab:function()
{return this.$tabActive;},getActiveBox:function()
{return this.$boxActive;},_toggle:function(e)
{if(e)
{e.stopPropagation();e.preventDefault();}
var $tab=$K.dom(e.target);var $box=this._getBox($tab);if($tab.hasClass('is-active'))return;this._open($tab);this.app.broadcast('tabs.opened',this);},_buildControls:function()
{this.$tabsControls=this.$element.find('a');this.$tabsControls.on('click.kube.tabs',this._toggle.bind(this));},_buildBoxes:function()
{this.$tabsControls.each(function(node,i)
{var $tab=$K.dom(node);var $box=this._getBox($tab);this.$boxes.add($box);if(i===0)this.$tabActive=$tab;if($tab.hasClass('is-active'))this.$tabActive=$tab;}.bind(this));},_open:function($tab)
{this.$tabActive=($tab)?$tab:this.$tabActive;this.$tabsControls.removeClass('is-active');this.$tabActive.addClass('is-active');this.$boxActive=this._getBox(this.$tabActive);this.$boxes.addClass('is-hidden').removeClass('is-open');this.$boxActive.removeClass('is-hidden').addClass('is-open');},_getBox:function($tab)
{return $K.dom($tab.attr('href'));},_setEqualBoxes:function()
{if(!this.params.equal)return;var minHeight=this._getItemMaxHeight()+'px';this.$boxes.css('min-height',minHeight);},_getItemMaxHeight:function()
{var max=0;this.$boxes.each(function(node)
{var $node=$K.dom(node);var h=$node.height();max=(h>max)?h:max;});return max;}});})(Kube);(function($K)
{$K.add('module','dropdown',{init:function(app,context)
{this.app=app;this.$doc=app.$doc;this.$win=app.$win;this.$body=app.$body;this.utils=app.utils;this.animate=app.animate;var defaults={target:false};this.context=context;this.params=context.getParams(defaults);this.$element=context.getElement();this.$target=context.getTarget();this.animationOpen='slideDown';this.animationClose='slideUp';},start:function()
{this.$element.on('click.kube.dropdown',this.toggle.bind(this));},stop:function()
{this.animate.clear(this.$target);this.$target.hide();this.$element.off('.kube.dropdown');this.$doc.off('.kube.dropdown');this.$win.off('.kube.dropdown');},toggle:function(e)
{return(this.$target.isOpened())?this.close(e):this.open(e);},open:function(e)
{if(this.$target.isOpened())return;if(e)
{e.stopPropagation();e.preventDefault();}
this.$doc.off('.kube.dropdown');this.$win.off('.kube.dropdown');this.$body.find('.dropdown').each(function(node)
{var $el=$K.dom(node);this.animate.remove($el);$el.hide();}.bind(this));this._openCaret();this._setPosition();this.$element.addClass('dropdown-in');this.app.broadcast('dropdown.open',this);this.animate.run(this.$target,this.animationOpen,this._opened.bind(this));},close:function(e)
{if(this.$target.isClosed())return;if(e)
{var el=e.target;var $el=$K.dom(el);var isClickable=(el.tagName==='A'||el.tagName==='BUTTON');if(!isClickable||el===this.$element.get()||(el.tagName==='A'&&$el.hasClass('is-active')))
{e.stopPropagation();e.preventDefault();}}
this.app.broadcast('dropdown.close',this);this.animate.run(this.$target,this.animationClose,this._closed.bind(this));},_getPlacement:function()
{var pos=this.$element.position();var height=parseFloat(this.$element.css('height'))+pos.top+parseFloat(this.$target.css('height'));return(this.$doc.height()<height)?'top':'bottom';},_setPosition:function()
{var elHeight=parseFloat(this.$element.css('height'));var pos=this.$element.position();var top=pos.top+elHeight;var left=pos.left;var height=parseFloat(this.$target.css('height'));var placement=this._getPlacement();var width=parseFloat(this.$target.css('width'));var borderWidth=parseFloat(this.$element.css('border-left-width'))+parseFloat(this.$element.css('border-right-width'));var leftFix=(this.$win.width()<(left+width))?(width-this.$element.width()-borderWidth):0;if(placement==='top')
{top=top-height-elHeight;this.animationOpen='show';this.animationClose='hide';}
else
{this.animationOpen='slideDown';this.animationClose='slideUp';}
this.$target.css({'top':top+'px','left':(left-leftFix)+'px'});},_handleKeyboard:function(e)
{if(e.which===27)this.close();},_opened:function()
{this.$doc.on('keyup.kube.dropdown',this._handleKeyboard.bind(this));this.$doc.on('click.kube.dropdown touchstart.kube.dropdown',this.close.bind(this));this.$doc.on('scroll.kube.dropdown',this._setPosition.bind(this));this.$win.on('resize.kube.dropdown',this._setPosition.bind(this));this.app.broadcast('dropdown.opened',this);},_closed:function()
{this.$doc.off('.kube.dropdown');this.$win.off('.kube.dropdown');this._closeCaret();this.$element.removeClass('dropdown-in');this.app.broadcast('dropdown.closed',this);},_openCaret:function()
{var $caret=this.$element.find('.caret');$caret.removeClass('is-down').addClass('is-left');},_closeCaret:function()
{var $caret=this.$element.find('.caret');$caret.removeClass('is-left').addClass('is-down');}});})(Kube);