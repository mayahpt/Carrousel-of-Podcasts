parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"Z2cC":[function(require,module,exports) {
var e,t=["far-past","past","current","next","far-next"],n=15;function o(e){return e<0||e>=slideEls.length?null:slideEls[e]}function a(e,n){var a=o(e);if(a)for(var r in n&&a.classList.add(n),t)n!=t[r]&&a.classList.remove(t[r])}function r(){for(var t=0;t<slideEls.length;t++)switch(t){case e-2:a(t,"far-past");break;case e-1:a(t,"past");break;case e:a(t,"current");break;case e+1:a(t,"next");break;case e+2:a(t,"far-next");break;default:a(t)}d(e-1),l(e),window.setTimeout(function(){h(e-2)},301),p(e-1),p(e+2),C()&&L(slideEls[e]),M()}function i(){var t=slideEls[e].querySelectorAll(".to-build");return!!t.length&&(t[0].classList.remove("to-build"),C()&&L(t[0]),!0)}function s(){e>0&&(e--,r())}function c(){i()||e<slideEls.length-1&&(e++,r())}function l(e){var t=o(e);if(t){var n=t.getAttribute("onslideenter");n&&new Function(n).call(t);var a=document.createEvent("Event");a.initEvent("slideenter",!0,!0),a.slideNumber=e+1,t.dispatchEvent(a)}}function d(e){var t=o(e);if(t){var n=t.getAttribute("onslideleave");n&&new Function(n).call(t);var a=document.createEvent("Event");a.initEvent("slideleave",!0,!0),a.slideNumber=e+1,t.dispatchEvent(a)}}function u(e){1==e.touches.length&&(touchDX=0,touchDY=0,touchStartX=e.touches[0].pageX,touchStartY=e.touches[0].pageY,document.body.addEventListener("touchmove",v,!0),document.body.addEventListener("touchend",m,!0))}function v(e){e.touches.length>1?f():(touchDX=e.touches[0].pageX-touchStartX,touchDY=e.touches[0].pageY-touchStartY)}function m(e){var t=Math.abs(touchDX),o=Math.abs(touchDY);t>n&&o<2*t/3&&(touchDX>0?s():c()),f()}function f(){document.body.removeEventListener("touchmove",v,!0),document.body.removeEventListener("touchend",m,!0)}function h(e){var t=o(e);if(t)for(var n,a=t.getElementsByTagName("iframe"),r=0;n=a[r];r++)g(n)}function p(e){var t=o(e);if(t)for(var n,a=t.getElementsByTagName("iframe"),r=0;n=a[r];r++)E(n)}function g(e){e.src="about:blank"}function E(e){var t=e._src;e.src!=t&&"about:blank"!=t&&(e.src=t)}function x(){for(var t,n=document.querySelectorAll("iframe"),o=0;t=n[o];o++)t._src=t.src,g(t);p(e),p(e+1),p(e+2)}function y(){var e;(e=document.createElement("div")).className="slide-area",e.id="prev-slide-area",e.addEventListener("click",s,!1),document.querySelector("section.slides").appendChild(e),(e=document.createElement("div")).className="slide-area",e.id="next-slide-area",e.addEventListener("click",c,!1),document.querySelector("section.slides").appendChild(e),document.body.addEventListener("touchstart",u,!1)}function C(){return"undefined"!=typeof cvox}function L(e){if(C()){cvox.ChromeVox.navigationManager.switchToStrategy(cvox.ChromeVoxNavigationManager.STRATEGIES.LINEARDOM,0,!0),cvox.ChromeVox.navigationManager.syncToNode(e),cvox.ChromeVoxUserCommands.finishNavCommand("");for(var t=e;t.firstChild;)t=t.firstChild;cvox.ChromeVox.navigationManager.syncToNode(t)}}function b(){if(C()){if(cvox.ChromeVox.navigationManager.switchToStrategy(cvox.ChromeVoxNavigationManager.STRATEGIES.LINEARDOM,0,!0),cvox.ChromeVox.navigationManager.next(!0),!cvox.DomUtil.isDescendantOfNode(cvox.ChromeVox.navigationManager.getCurrentNode(),slideEls[e])){for(var t=slideEls[e];t.firstChild;)t=t.firstChild;cvox.ChromeVox.navigationManager.syncToNode(t),cvox.ChromeVox.navigationManager.next(!0)}cvox.ChromeVoxUserCommands.finishNavCommand("")}}function N(){if(C()){if(cvox.ChromeVox.navigationManager.switchToStrategy(cvox.ChromeVoxNavigationManager.STRATEGIES.LINEARDOM,0,!0),cvox.ChromeVox.navigationManager.previous(!0),!cvox.DomUtil.isDescendantOfNode(cvox.ChromeVox.navigationManager.getCurrentNode(),slideEls[e])){for(var t=slideEls[e];t.lastChild;)t=t.lastChild;cvox.ChromeVox.navigationManager.syncToNode(t),cvox.ChromeVox.navigationManager.previous(!0)}cvox.ChromeVoxUserCommands.finishNavCommand("")}}function D(){var t=parseInt(location.hash.substr(1));e=t?t-1:0}function M(){location.replace("#".concat(e+1))}function w(e){switch(e.keyCode){case 39:case 13:case 32:case 34:c(),e.preventDefault();break;case 37:case 8:case 33:s(),e.preventDefault();break;case 40:C()?b():c(),e.preventDefault();break;case 38:C()?N():s(),e.preventDefault()}}function S(){document.addEventListener("keydown",w,!1),document.addEventListener("click",c)}function T(){for(var e,t=document.querySelectorAll("pre"),n=0;e=t[n];n++)e.classList.contains("noprettyprint")||e.classList.add("prettyprint")}function A(){var e;(e=document.createElement("link")).rel="stylesheet",e.type="text/css",e.href="".concat(PERMANENT_URL_PREFIX,"styles.css"),document.body.appendChild(e),(e=document.createElement("meta")).name="viewport",e.content="width=1100,height=750",document.querySelector("head").appendChild(e),(e=document.createElement("meta")).name="apple-mobile-web-app-capable",e.content="yes",document.querySelector("head").appendChild(e)}function k(){for(var t,n=e;t=slideEls[n];n++){var o=".build > *";t.classList.contains("build")&&(o+=":not(:first-child)");for(var a,r=t.querySelectorAll(o),i=0;a=r[i];i++)a.classList&&a.classList.add("to-build")}}function _(){slideEls=document.querySelectorAll("section.slides > article"),x(),T(),S(),r(),y(),k(),document.body.classList.add("loaded")}function I(){D(),window._DEBUG&&(PERMANENT_URL_PREFIX="../"),window._DCL?_():document.addEventListener("DOMContentLoaded",_,!1)}if("undefined"==typeof document||"classList"in document.createElement("a")||function(e){var t=(e.HTMLElement||e.Element).prototype,n=Object;if(strTrim=String.prototype.trim||function(){return this.replace(/^\s+|\s+$/g,"")},arrIndexOf=Array.prototype.indexOf||function(e){for(var t=0,n=this.length;t<n;t++)if(t in this&&this[t]===e)return t;return-1},DOMEx=function(e,t){this.name=e,this.code=DOMException[e],this.message=t},checkTokenAndGetIndex=function(e,t){if(""===t)throw new DOMEx("SYNTAX_ERR","An invalid or illegal string was specified");if(/\s/.test(t))throw new DOMEx("INVALID_CHARACTER_ERR","String contains an invalid character");return arrIndexOf.call(e,t)},ClassList=function(e){for(var t=strTrim.call(e.className),n=t?t.split(/\s+/):[],o=0,a=n.length;o<a;o++)this.push(n[o]);this._updateClassName=function(){e.className=this.toString()}},classListProto=ClassList.prototype=[],classListGetter=function(){return new ClassList(this)},DOMEx.prototype=Error.prototype,classListProto.item=function(e){return this[e]||null},classListProto.contains=function(e){return-1!==checkTokenAndGetIndex(this,e+="")},classListProto.add=function(e){e+="",-1===checkTokenAndGetIndex(this,e)&&(this.push(e),this._updateClassName())},classListProto.remove=function(e){var t=checkTokenAndGetIndex(this,e+="");-1!==t&&(this.splice(t,1),this._updateClassName())},classListProto.toggle=function(e){e+="",-1===checkTokenAndGetIndex(this,e)?this.add(e):this.remove(e)},classListProto.toString=function(){return this.join(" ")},n.defineProperty){var o={get:classListGetter,enumerable:!0,configurable:!0};try{n.defineProperty(t,"classList",o)}catch(a){-2146823252===a.number&&(o.enumerable=!1,n.defineProperty(t,"classList",o))}}else n.prototype.__defineGetter__&&t.__defineGetter__("classList",classListGetter)}(self),window._DEBUG||-1===document.location.href.indexOf("?debug"))I();else{document.addEventListener("DOMContentLoaded",function(){window._DCL=!0},!1),window._DEBUG=!0;var V=document.createElement("script");V.type="text/javascript",V.src="../slides.js";var O=document.getElementsByTagName("script")[0];O.parentNode.insertBefore(V,O),O.parentNode.removeChild(O)}var R={threshold:[0,1]},G=function(e){e.forEach(function(e){e.isIntersecting&&e.target.parentElement.classList.contains("current")?e.target.play():e.target.pause()})},P=new IntersectionObserver(G,R),q=document.querySelectorAll("img.bg");q.forEach(function(e){e.parentElement.style.backgroundImage="url('".concat(e.src,"')"),e.parentElement.classList.add("image"),e.classList.contains("cover")&&e.parentElement.classList.add("cover"),e.remove()});var X=document.querySelectorAll("video");X.forEach(function(e){return P.observe(e)});
},{}],"VYev":[function(require,module,exports) {
!function(){function e(){c&&function(e){function a(r){"readystatechange"==r.type&&"complete"!=n.readyState||(("load"==r.type?t:n)[c](u+r.type,a,!1),!s&&(s=!0)&&e.call(t,r.type||r))}var l=n.addEventListener,s=!1,o=!0,i=l?"addEventListener":"attachEvent",c=l?"removeEventListener":"detachEvent",u=l?"":"on";if("complete"==n.readyState)e.call(t,"lazy");else{if(n.createEventObject&&r.doScroll){try{o=!t.frameElement}catch(d){}o&&function n(){try{r.doScroll("left")}catch(e){return void t.setTimeout(n,50)}a("poll")}()}n[i](u+"DOMContentLoaded",a,!1),n[i](u+"readystatechange",a,!1),t[i](u+"load",a,!1)}}(function(){var e=p.length;m(e?function(){for(var n=0;n<e;++n)!function(e){t.setTimeout(function(){t.exports[p[e]].apply(t,arguments)},0)}(n)}:void 0)})}for(var t=window,n=document,r=n.documentElement,a=n.head||n.getElementsByTagName("head")[0]||r,l="",s=(h=n.getElementsByTagName("script")).length;0<=--s;){var o=h[s],i=o.src.match(/^[^?#]*\/run_prettify\.js(\?[^#]*)?(?:#.*)?$/);if(i){l=i[1]||"",o.parentNode.removeChild(o);break}}var c=!0,u=[],d=[],p=[];for(l.replace(/[?&]([^&=]+)=([^&]+)/g,function(e,t,n){n=decodeURIComponent(n),"autorun"==(t=decodeURIComponent(t))?c=!/^[0fn]/i.test(n):"lang"==t?u.push(n):"skin"==t?d.push(n):"callback"==t&&p.push(n)}),s=0,l=u.length;s<l;++s)!function(){var r=n.createElement("script");r.onload=r.onerror=r.onreadystatechange=function(){!r||r.readyState&&!/loaded|complete/.test(r.readyState)||(r.onerror=r.onload=r.onreadystatechange=null,--f||t.setTimeout(e,0),r.parentNode&&r.parentNode.removeChild(r),r=null)},r.type="text/javascript",r.src="https://cdn.rawgit.com/google/code-prettify/master/loader/lang-"+encodeURIComponent(u[s])+".js",a.insertBefore(r,a.firstChild)}(u[s]);var f=u.length,h=[];for(s=0,l=d.length;s<l;++s)h.push("https://cdn.rawgit.com/google/code-prettify/master/loader/skins/"+encodeURIComponent(d[s])+".css");h.push("https://cdn.rawgit.com/google/code-prettify/master/loader/prettify.css"),function(e){var t=e.length;!function r(l){if(l!==t){var s=n.createElement("link");s.rel="stylesheet",s.type="text/css",l+1<t&&(s.error=s.onerror=function(){r(l+1)}),s.href=e[l],a.appendChild(s)}}(0)}(h);var g,m=(window.PR_SHOULD_USE_CONTINUATION=!0,function(){function e(e,t,n,r,a){n&&(r(e={h:e,l:1,j:null,m:null,a:n,c:null,i:t,g:null}),a.push.apply(a,e.g))}function t(e){for(var t=void 0,n=e.firstChild;n;n=n.nextSibling){var r=n.nodeType;t=1===r?t?e:n:3===r&&y.test(n.nodeValue)?e:t}return t===e?void 0:t}function n(t,n){var r,a={};!function(){for(var e=t.concat(n),l=[],s={},o=0,i=e.length;o<i;++o){var c=e[o],u=c[3];if(u)for(var d=u.length;0<=--d;)a[u.charAt(d)]=c;u=""+(c=c[1]),s.hasOwnProperty(u)||(l.push(c),s[u]=null)}l.push(/[\0-\uffff]/),r=function(e){function t(e){var t=e.charCodeAt(0);if(92!==t)return t;var n=e.charAt(1);return(t=d[n])?t:"0"<=n&&"7">=n?parseInt(e.substring(1),8):"u"===n||"x"===n?parseInt(e.substring(2),16):e.charCodeAt(1)}function n(e){return 32>e?(16>e?"\\x0":"\\x")+e.toString(16):"\\"===(e=String.fromCharCode(e))||"-"===e||"]"===e||"^"===e?"\\"+e:e}function r(e){var r=e.substring(1,e.length-1).match(/\\u[0-9A-Fa-f]{4}|\\x[0-9A-Fa-f]{2}|\\[0-3][0-7]{0,2}|\\[0-7]{1,2}|\\[\s\S]|-|[^-\\]/g);e=[];var a=["["];(l="^"===r[0])&&a.push("^");for(var l=l?1:0,s=r.length;l<s;++l){var o,i=r[l];/\\[bdsw]/i.test(i)?a.push(i):(i=t(i),l+2<s&&"-"===r[l+1]?(o=t(r[l+2]),l+=2):o=i,e.push([i,o]),65>o||122<i||(65>o||90<i||e.push([32|Math.max(65,i),32|Math.min(o,90)]),97>o||122<i||e.push([-33&Math.max(97,i),-33&Math.min(o,122)])))}for(e.sort(function(e,t){return e[0]-t[0]||t[1]-e[1]}),r=[],s=[],l=0;l<e.length;++l)(i=e[l])[0]<=s[1]+1?s[1]=Math.max(s[1],i[1]):r.push(s=i);for(l=0;l<r.length;++l)i=r[l],a.push(n(i[0])),i[1]>i[0]&&(i[1]+1>i[0]&&a.push("-"),a.push(n(i[1])));return a.push("]"),a.join("")}function a(e){for(var t=e.source.match(/(?:\[(?:[^\x5C\x5D]|\\[\s\S])*\]|\\u[A-Fa-f0-9]{4}|\\x[A-Fa-f0-9]{2}|\\[0-9]+|\\[^ux0-9]|\(\?[:!=]|[\(\)\^]|[^\x5B\x5C\(\)\^]+)/g),a=t.length,o=[],i=0,c=0;i<a;++i){var u=t[i];"("===u?++c:"\\"===u.charAt(0)&&(u=+u.substring(1))&&(u<=c?o[u]=-1:t[i]=n(u))}for(i=1;i<o.length;++i)-1===o[i]&&(o[i]=++l);for(c=i=0;i<a;++i)"("===(u=t[i])?o[++c]||(t[i]="(?:"):"\\"===u.charAt(0)&&(u=+u.substring(1))&&u<=c&&(t[i]="\\"+o[u]);for(i=0;i<a;++i)"^"===t[i]&&"^"!==t[i+1]&&(t[i]="");if(e.ignoreCase&&s)for(i=0;i<a;++i)e=(u=t[i]).charAt(0),2<=u.length&&"["===e?t[i]=r(u):"\\"!==e&&(t[i]=u.replace(/[a-zA-Z]/g,function(e){return e=e.charCodeAt(0),"["+String.fromCharCode(-33&e,32|e)+"]"}));return t.join("")}for(var l=0,s=!1,o=!1,i=0,c=e.length;i<c;++i){var u=e[i];if(u.ignoreCase)o=!0;else if(/[a-z]/i.test(u.source.replace(/\\u[0-9a-f]{4}|\\x[0-9a-f]{2}|\\[^ux]/gi,""))){s=!0,o=!1;break}}var d={b:8,t:9,n:10,v:11,f:12,r:13},p=[];for(i=0,c=e.length;i<c;++i){if((u=e[i]).global||u.multiline)throw Error(""+u);p.push("(?:"+a(u)+")")}return new RegExp(p.join("|"),o?"gi":"g")}(l)}();var l=n.length;return function t(o){for(var i=o.i,c=o.h,u=[i,"pln"],d=0,p=o.a.match(r)||[],f={},h=0,g=p.length;h<g;++h){var m,y=p[h],v=f[y],b=void 0;if("string"==typeof v)m=!1;else{var x=a[y.charAt(0)];if(x)b=y.match(x[1]),v=x[0];else{for(m=0;m<l;++m)if(x=n[m],b=y.match(x[1])){v=x[0];break}b||(v="pln")}!(m=5<=v.length&&"lang-"===v.substring(0,5))||b&&"string"==typeof b[1]||(m=!1,v="src"),m||(f[y]=v)}if(x=d,d+=y.length,m){m=b[1];var w=y.indexOf(m),S=w+m.length;b[2]&&(w=(S=y.length-b[2].length)-m.length),v=v.substring(5),e(c,i+x,y.substring(0,w),t,u),e(c,i+x+w,m,s(v,m),u),e(c,i+x+S,y.substring(S),t,u)}else u.push(i+x,v)}o.g=u}}function r(e){var t=[],r=[];e.tripleQuotedStrings?t.push(["str",/^(?:\'\'\'(?:[^\'\\]|\\[\s\S]|\'{1,2}(?=[^\']))*(?:\'\'\'|$)|\"\"\"(?:[^\"\\]|\\[\s\S]|\"{1,2}(?=[^\"]))*(?:\"\"\"|$)|\'(?:[^\\\']|\\[\s\S])*(?:\'|$)|\"(?:[^\\\"]|\\[\s\S])*(?:\"|$))/,null,"'\""]):e.multiLineStrings?t.push(["str",/^(?:\'(?:[^\\\']|\\[\s\S])*(?:\'|$)|\"(?:[^\\\"]|\\[\s\S])*(?:\"|$)|\`(?:[^\\\`]|\\[\s\S])*(?:\`|$))/,null,"'\"`"]):t.push(["str",/^(?:\'(?:[^\\\'\r\n]|\\.)*(?:\'|$)|\"(?:[^\\\"\r\n]|\\.)*(?:\"|$))/,null,"\"'"]),e.verbatimStrings&&r.push(["str",/^@\"(?:[^\"]|\"\")*(?:\"|$)/,null]);var a=e.hashComments;if(a&&(e.cStyleComments?(1<a?t.push(["com",/^#(?:##(?:[^#]|#(?!##))*(?:###|$)|.*)/,null,"#"]):t.push(["com",/^#(?:(?:define|e(?:l|nd)if|else|error|ifn?def|include|line|pragma|undef|warning)\b|[^\r\n]*)/,null,"#"]),r.push(["str",/^<(?:(?:(?:\.\.\/)*|\/?)(?:[\w-]+(?:\/[\w-]+)+)?[\w-]+\.h(?:h|pp|\+\+)?|[a-z]\w*)>/,null])):t.push(["com",/^#[^\r\n]*/,null,"#"])),e.cStyleComments&&(r.push(["com",/^\/\/[^\r\n]*/,null]),r.push(["com",/^\/\*[\s\S]*?(?:\*\/|$)/,null])),a=e.regexLiterals){var l=(a=1<a?"":"\n\r")?".":"[\\S\\s]";r.push(["lang-regex",RegExp("^(?:^^\\.?|[+-]|[!=]=?=?|\\#|%=?|&&?=?|\\(|\\*=?|[+\\-]=|->|\\/=?|::?|<<?=?|>>?>?=?|,|;|\\?|@|\\[|~|{|\\^\\^?=?|\\|\\|?=?|break|case|continue|delete|do|else|finally|instanceof|return|throw|try|typeof)\\s*(/(?=[^/*"+a+"])(?:[^/\\x5B\\x5C"+a+"]|\\x5C"+l+"|\\x5B(?:[^\\x5C\\x5D"+a+"]|\\x5C"+l+")*(?:\\x5D|$))+/)")])}return(a=e.types)&&r.push(["typ",a]),(a=(""+e.keywords).replace(/^ | $/g,"")).length&&r.push(["kwd",new RegExp("^(?:"+a.replace(/[\s,]+/g,"|")+")\\b"),null]),t.push(["pln",/^\s+/,null," \r\n\t "]),a="^.[^\\s\\w.$@'\"`/\\\\]*",e.regexLiterals&&(a+="(?!s*/)"),r.push(["lit",/^@[a-z_$][a-z_$@0-9]*/i,null],["typ",/^(?:[@_]?[A-Z]+[a-z][A-Za-z_$@0-9]*|\w+_t\b)/,null],["pln",/^[a-z_$][a-z_$@0-9]*/i,null],["lit",/^(?:0x[a-f0-9]+|(?:\d(?:_\d+)*\d*(?:\.\d*)?|\.\d\+)(?:e[+\-]?\d+)?)[a-z]*/i,null,"0123456789"],["pln",/^\\[\s\S]?/,null],["pun",new RegExp(a),null]),n(t,r)}function a(e,t,n){function r(e){var t=e.nodeType;if(1!=t||l.test(e.className)){if((3==t||4==t)&&n){var i=e.nodeValue,c=i.match(s);c&&(t=i.substring(0,c.index),e.nodeValue=t,(i=i.substring(c.index+c[0].length))&&e.parentNode.insertBefore(o.createTextNode(i),e.nextSibling),a(e),t||e.parentNode.removeChild(e))}}else if("br"===e.nodeName)a(e),e.parentNode&&e.parentNode.removeChild(e);else for(e=e.firstChild;e;e=e.nextSibling)r(e)}function a(e){for(;!e.nextSibling;)if(!(e=e.parentNode))return;e=function e(t,n){var r=n?t.cloneNode(!1):t;if(a=t.parentNode){var a=e(a,1),l=t.nextSibling;a.appendChild(r);for(var s=l;s;s=l)l=s.nextSibling,a.appendChild(s)}return r}(e.nextSibling,0);for(var t;(t=e.parentNode)&&1===t.nodeType;)e=t;c.push(e)}for(var l=/(?:^|\s)nocode(?:\s|$)/,s=/\r\n?|\n/,o=e.ownerDocument,i=o.createElement("li");e.firstChild;)i.appendChild(e.firstChild);for(var c=[i],u=0;u<c.length;++u)r(c[u]);t===(0|t)&&c[0].setAttribute("value",t);var d=o.createElement("ol");d.className="linenums",t=Math.max(0,t-1|0)||0,u=0;for(var p=c.length;u<p;++u)(i=c[u]).className="L"+(u+t)%10,i.firstChild||i.appendChild(o.createTextNode(" ")),d.appendChild(i);e.appendChild(d)}function l(e,t){for(var n=t.length;0<=--n;){var r=t[n];b.hasOwnProperty(r)?u.console&&console.warn("cannot override language handler %s",r):b[r]=e}}function s(e,t){return e&&b.hasOwnProperty(e)||(e=/^\s*</.test(t)?"default-markup":"default-code"),b[e]}function o(e){var t=e.j;try{var n=(c=function(e,t){var n=/(?:^|\s)nocode(?:\s|$)/,r=[],a=0,l=[],s=0;return function e(o){var i=o.nodeType;if(1==i){if(!n.test(o.className)){for(i=o.firstChild;i;i=i.nextSibling)e(i);"br"!==(i=o.nodeName.toLowerCase())&&"li"!==i||(r[s]="\n",l[s<<1]=a++,l[s++<<1|1]=o)}}else 3!=i&&4!=i||(i=o.nodeValue).length&&(i=t?i.replace(/\r\n?/g,"\n"):i.replace(/[ \t\r\n]+/g," "),r[s]=i,l[s<<1]=a,a+=i.length,l[s++<<1|1]=o)}(e),{a:r.join("").replace(/\n$/,""),c:l}}(e.h,e.l)).a;e.a=n,e.c=c.c,e.i=0,s(t,n)(e);var r,a,l=(l=/\bMSIE\s(\d+)/.exec(navigator.userAgent))&&8>=+l[1],o=(t=/\n/g,e.a),i=o.length,c=0,d=e.c,p=d.length,f=(n=0,e.g),h=f.length,g=0;for(f[h]=i,a=r=0;a<h;)f[a]!==f[a+2]?(f[r++]=f[a++],f[r++]=f[a++]):a+=2;for(h=r,a=r=0;a<h;){for(var m=f[a],y=f[a+1],v=a+2;v+2<=h&&f[v+1]===y;)v+=2;f[r++]=m,f[r++]=y,a=v}f.length=r;var b=e.h;e="",b&&(e=b.style.display,b.style.display="none");try{for(;n<p;){var x,w=d[n+2]||i,S=f[g+2]||i,C=(v=Math.min(w,S),d[n+1]);if(1!==C.nodeType&&(x=o.substring(c,v))){l&&(x=x.replace(t,"\r")),C.nodeValue=x;var N=C.ownerDocument,E=N.createElement("span");E.className=f[g+1];var _=C.parentNode;_.replaceChild(E,C),E.appendChild(C),c<w&&(d[n+1]=C=N.createTextNode(o.substring(v,w)),_.insertBefore(C,E.nextSibling))}(c=v)>=w&&(n+=2),c>=S&&(g+=2)}}finally{b&&(b.style.display=e)}}catch(T){u.console&&console.log(T&&T.stack||T)}}var i,c,u=window,d=[i=[[c=["break,continue,do,else,for,if,return,while"],"auto,case,char,const,default,double,enum,extern,float,goto,inline,int,long,register,short,signed,sizeof,static,struct,switch,typedef,union,unsigned,void,volatile"],"catch,class,delete,false,import,new,operator,private,protected,public,this,throw,true,try,typeof"],"abstract,assert,boolean,byte,extends,finally,final,implements,import,instanceof,interface,null,native,package,strictfp,super,synchronized,throws,transient"],p=[i,"abstract,as,base,bool,by,byte,checked,decimal,delegate,descending,dynamic,event,finally,fixed,foreach,from,group,implicit,in,interface,internal,into,is,let,lock,null,object,out,override,orderby,params,partial,readonly,ref,sbyte,sealed,stackalloc,string,select,uint,ulong,unchecked,unsafe,ushort,var,virtual,where"],f=[c,"and,as,assert,class,def,del,elif,except,exec,finally,from,global,import,in,is,lambda,nonlocal,not,or,pass,print,raise,try,with,yield,False,True,None"],h=[c,"alias,and,begin,case,class,def,defined,elsif,end,ensure,false,in,module,next,nil,not,or,redo,rescue,retry,self,super,then,true,undef,unless,until,when,yield,BEGIN,END"],m=/^(DIR|FILE|vector|(de|priority_)?queue|list|stack|(const_)?iterator|(multi)?(set|map)|bitset|u?(int|float)\d*)\b/,y=/\S/,v=r({keywords:[x=[i,"alignof,align_union,asm,axiom,bool,concept,concept_map,const_cast,constexpr,decltype,delegate,dynamic_cast,explicit,export,friend,generic,late_check,mutable,namespace,nullptr,property,reinterpret_cast,static_assert,static_cast,template,typeid,typename,using,virtual,where"],p,d,i=[i,"debugger,eval,export,function,get,instanceof,null,set,undefined,var,with,Infinity,NaN"],"caller,delete,die,do,dump,elsif,eval,exit,foreach,for,goto,if,import,last,local,my,next,no,our,print,package,redo,require,sub,undef,unless,until,use,wantarray,while,BEGIN,END",f,h,c=[c,"case,done,elif,esac,eval,fi,function,in,local,set,then,until"]],hashComments:!0,cStyleComments:!0,multiLineStrings:!0,regexLiterals:!0}),b={};l(v,["default-code"]),l(n([],[["pln",/^[^<?]+/],["dec",/^<!\w[^>]*(?:>|$)/],["com",/^<\!--[\s\S]*?(?:-\->|$)/],["lang-",/^<\?([\s\S]+?)(?:\?>|$)/],["lang-",/^<%([\s\S]+?)(?:%>|$)/],["pun",/^(?:<[%?]|[%?]>)/],["lang-",/^<xmp\b[^>]*>([\s\S]+?)<\/xmp\b[^>]*>/i],["lang-js",/^<script\b[^>]*>([\s\S]*?)(<\/script\b[^>]*>)/i],["lang-css",/^<style\b[^>]*>([\s\S]*?)(<\/style\b[^>]*>)/i],["lang-in.tag",/^(<\/?[a-z][^<>]*>)/i]]),"default-markup htm html mxml xhtml xml xsl".split(" ")),l(n([["pln",/^[\s]+/,null," \t\r\n"],["atv",/^(?:\"[^\"]*\"?|\'[^\']*\'?)/,null,"\"'"]],[["tag",/^^<\/?[a-z](?:[\w.:-]*\w)?|\/?>$/i],["atn",/^(?!style[\s=]|on)[a-z](?:[\w:-]*\w)?/i],["lang-uq.val",/^=\s*([^>\'\"\s]*(?:[^>\'\"\s\/]|\/(?=\s)))/],["pun",/^[=<>\/]+/],["lang-js",/^on\w+\s*=\s*\"([^\"]+)\"/i],["lang-js",/^on\w+\s*=\s*\'([^\']+)\'/i],["lang-js",/^on\w+\s*=\s*([^\"\'>\s]+)/i],["lang-css",/^style\s*=\s*\"([^\"]+)\"/i],["lang-css",/^style\s*=\s*\'([^\']+)\'/i],["lang-css",/^style\s*=\s*([^\"\'>\s]+)/i]]),["in.tag"]),l(n([],[["atv",/^[\s\S]+/]]),["uq.val"]),l(r({keywords:x,hashComments:!0,cStyleComments:!0,types:m}),"c cc cpp cxx cyc m".split(" ")),l(r({keywords:"null,true,false"}),["json"]),l(r({keywords:p,hashComments:!0,cStyleComments:!0,verbatimStrings:!0,types:m}),["cs"]),l(r({keywords:d,cStyleComments:!0}),["java"]),l(r({keywords:c,hashComments:!0,multiLineStrings:!0}),["bash","bsh","csh","sh"]),l(r({keywords:f,hashComments:!0,multiLineStrings:!0,tripleQuotedStrings:!0}),["cv","py","python"]),l(r({keywords:"caller,delete,die,do,dump,elsif,eval,exit,foreach,for,goto,if,import,last,local,my,next,no,our,print,package,redo,require,sub,undef,unless,until,use,wantarray,while,BEGIN,END",hashComments:!0,multiLineStrings:!0,regexLiterals:2}),["perl","pl","pm"]),l(r({keywords:h,hashComments:!0,multiLineStrings:!0,regexLiterals:!0}),["rb","ruby"]),l(r({keywords:i,cStyleComments:!0,regexLiterals:!0}),["javascript","js"]),l(r({keywords:"all,and,by,catch,class,else,extends,false,finally,for,if,in,is,isnt,loop,new,no,not,null,of,off,on,or,return,super,then,throw,true,try,unless,until,when,while,yes",hashComments:3,cStyleComments:!0,multilineStrings:!0,tripleQuotedStrings:!0,regexLiterals:!0}),["coffee"]),l(n([],[["str",/^[\s\S]+/]]),["regex"]);var x,w=u.PR={createSimpleLexer:n,registerLangHandler:l,sourceDecorator:r,PR_ATTRIB_NAME:"atn",PR_ATTRIB_VALUE:"atv",PR_COMMENT:"com",PR_DECLARATION:"dec",PR_KEYWORD:"kwd",PR_LITERAL:"lit",PR_NOCODE:"nocode",PR_PLAIN:"pln",PR_PUNCTUATION:"pun",PR_SOURCE:"src",PR_STRING:"str",PR_TAG:"tag",PR_TYPE:"typ",prettyPrintOne:function(e,t,n){n=n||!1,t=t||null;var r=document.createElement("div");return r.innerHTML="<pre>"+e+"</pre>",r=r.firstChild,n&&a(r,n,!0),o({j:t,m:n,h:r,l:1,a:null,i:null,c:null,g:null}),r.innerHTML},prettyPrint:g=g=function(e,n){for(var r=(l=n||document.body).ownerDocument||document,l=[l.getElementsByTagName("pre"),l.getElementsByTagName("code"),l.getElementsByTagName("xmp")],s=[],i=0;i<l.length;++i)for(var c=0,d=l[i].length;c<d;++c)s.push(l[i][c]);l=null;var p=Date;p.now||(p={now:function(){return+new Date}});var f=0,h=/\blang(?:uage)?-([\w.]+)(?!\S)/,g=/\bprettyprint\b/,m=/\bprettyprinted\b/,y=/pre|xmp/i,v=/^code$/i,b=/^(?:pre|code|xmp)$/i,x={};!function n(){for(var l=u.PR_SHOULD_USE_CONTINUATION?p.now()+250:1/0;f<s.length&&p.now()<l;f++){for(var i=s[f],c=x,d=i;(d=d.previousSibling)&&((C=(7===(w=d.nodeType)||8===w)&&d.nodeValue)?/^\??prettify\b/.test(C):3===w&&!/\S/.test(d.nodeValue));)if(C){c={},C.replace(/\b(\w+)=([\w:.%+-]+)/g,function(e,t,n){c[t]=n});break}if(d=i.className,(c!==x||g.test(d))&&!m.test(d)){for(w=!1,C=i.parentNode;C;C=C.parentNode)if(b.test(C.tagName)&&C.className&&g.test(C.className)){w=!0;break}if(!w){var w,S;if(i.className+=" prettyprinted",(w=c.lang)||(!(w=d.match(h))&&(S=t(i))&&v.test(S.tagName)&&(w=S.className.match(h)),w&&(w=w[1])),y.test(i.tagName))C=1;else{var C=i.currentStyle,N=r.defaultView;C=(C=C?C.whiteSpace:N&&N.getComputedStyle?N.getComputedStyle(i,null).getPropertyValue("white-space"):0)&&"pre"===C.substring(0,3)}(N="true"===(N=c.linenums)||+N)||(N=!!(N=d.match(/\blinenums\b(?::(\d+))?/))&&(!N[1]||!N[1].length||+N[1])),N&&a(i,N,C),o({j:w,h:i,m:N,l:C,a:null,i:null,c:null,g:null})}}}f<s.length?u.setTimeout(n,250):"function"==typeof e&&e()}()}};"function"==typeof(x=u.define)&&x.amd&&x("google-code-prettify",[],function(){return w})}(),g);f||t.setTimeout(e,0)}();
},{}],"epB2":[function(require,module,exports) {
"use strict";require("./assets/vendor/slides"),require("./assets/vendor/prettify");
},{"./assets/vendor/slides":"Z2cC","./assets/vendor/prettify":"VYev"}]},{},["epB2"], null)
//# sourceMappingURL=/main.4d7a56a5.js.map