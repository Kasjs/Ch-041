/*! jQuery v3.1.0 | (c) jQuery Foundation | jquery.org/license */
!function(a,b){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){"use strict";var c=[],d=a.document,e=Object.getPrototypeOf,f=c.slice,g=c.concat,h=c.push,i=c.indexOf,j={},k=j.toString,l=j.hasOwnProperty,m=l.toString,n=m.call(Object),o={};function p(a,b){b=b||d;var c=b.createElement("script");c.text=a,b.head.appendChild(c).parentNode.removeChild(c)}var q="3.1.0",r=function(a,b){return new r.fn.init(a,b)},s=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,t=/^-ms-/,u=/-([a-z])/g,v=function(a,b){return b.toUpperCase()};r.fn=r.prototype={jquery:q,constructor:r,length:0,toArray:function(){return f.call(this)},get:function(a){return null!=a?a<0?this[a+this.length]:this[a]:f.call(this)},pushStack:function(a){var b=r.merge(this.constructor(),a);return b.prevObject=this,b},each:function(a){return r.each(this,a)},map:function(a){return this.pushStack(r.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(f.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(a<0?b:0);return this.pushStack(c>=0&&c<b?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:h,sort:c.sort,splice:c.splice},r.extend=r.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||r.isFunction(g)||(g={}),h===i&&(g=this,h--);h<i;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(r.isPlainObject(d)||(e=r.isArray(d)))?(e?(e=!1,f=c&&r.isArray(c)?c:[]):f=c&&r.isPlainObject(c)?c:{},g[b]=r.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},r.extend({expando:"jQuery"+(q+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===r.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){var b=r.type(a);return("number"===b||"string"===b)&&!isNaN(a-parseFloat(a))},isPlainObject:function(a){var b,c;return!(!a||"[object Object]"!==k.call(a))&&(!(b=e(a))||(c=l.call(b,"constructor")&&b.constructor,"function"==typeof c&&m.call(c)===n))},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?j[k.call(a)]||"object":typeof a},globalEval:function(a){p(a)},camelCase:function(a){return a.replace(t,"ms-").replace(u,v)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b){var c,d=0;if(w(a)){for(c=a.length;d<c;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(s,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(w(Object(a))?r.merge(c,"string"==typeof a?[a]:a):h.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:i.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;d<c;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;f<g;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,f=0,h=[];if(w(a))for(d=a.length;f<d;f++)e=b(a[f],f,c),null!=e&&h.push(e);else for(f in a)e=b(a[f],f,c),null!=e&&h.push(e);return g.apply([],h)},guid:1,proxy:function(a,b){var c,d,e;if("string"==typeof b&&(c=a[b],b=a,a=c),r.isFunction(a))return d=f.call(arguments,2),e=function(){return a.apply(b||this,d.concat(f.call(arguments)))},e.guid=a.guid=a.guid||r.guid++,e},now:Date.now,support:o}),"function"==typeof Symbol&&(r.fn[Symbol.iterator]=c[Symbol.iterator]),r.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){j["[object "+b+"]"]=b.toLowerCase()});function w(a){var b=!!a&&"length"in a&&a.length,c=r.type(a);return"function"!==c&&!r.isWindow(a)&&("array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a)}var x=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C={}.hasOwnProperty,D=[],E=D.pop,F=D.push,G=D.push,H=D.slice,I=function(a,b){for(var c=0,d=a.length;c<d;c++)if(a[c]===b)return c;return-1},J="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",K="[\\x20\\t\\r\\n\\f]",L="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",M="\\["+K+"*("+L+")(?:"+K+"*([*^$|!~]?=)"+K+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+L+"))|)"+K+"*\\]",N=":("+L+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+M+")*)|.*)\\)|)",O=new RegExp(K+"+","g"),P=new RegExp("^"+K+"+|((?:^|[^\\\\])(?:\\\\.)*)"+K+"+$","g"),Q=new RegExp("^"+K+"*,"+K+"*"),R=new RegExp("^"+K+"*([>+~]|"+K+")"+K+"*"),S=new RegExp("="+K+"*([^\\]'\"]*?)"+K+"*\\]","g"),T=new RegExp(N),U=new RegExp("^"+L+"$"),V={ID:new RegExp("^#("+L+")"),CLASS:new RegExp("^\\.("+L+")"),TAG:new RegExp("^("+L+"|[*])"),ATTR:new RegExp("^"+M),PSEUDO:new RegExp("^"+N),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+K+"*(even|odd|(([+-]|)(\\d*)n|)"+K+"*(?:([+-]|)"+K+"*(\\d+)|))"+K+"*\\)|)","i"),bool:new RegExp("^(?:"+J+")$","i"),needsContext:new RegExp("^"+K+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+K+"*((?:-\\d)?\\d*)"+K+"*\\)|)(?=[^-]|$)","i")},W=/^(?:input|select|textarea|button)$/i,X=/^h\d$/i,Y=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,$=/[+~]/,_=new RegExp("\\\\([\\da-f]{1,6}"+K+"?|("+K+")|.)","ig"),aa=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:d<0?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ba=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,ca=function(a,b){return b?"\0"===a?"\ufffd":a.slice(0,-1)+"\\"+a.charCodeAt(a.length-1).toString(16)+" ":"\\"+a},da=function(){m()},ea=ta(function(a){return a.disabled===!0},{dir:"parentNode",next:"legend"});try{G.apply(D=H.call(v.childNodes),v.childNodes),D[v.childNodes.length].nodeType}catch(fa){G={apply:D.length?function(a,b){F.apply(a,H.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s=b&&b.ownerDocument,w=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==w&&9!==w&&11!==w)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==w&&(l=Z.exec(a)))if(f=l[1]){if(9===w){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(s&&(j=s.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(l[2])return G.apply(d,b.getElementsByTagName(a)),d;if((f=l[3])&&c.getElementsByClassName&&b.getElementsByClassName)return G.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==w)s=b,r=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(ba,ca):b.setAttribute("id",k=u),o=g(a),h=o.length;while(h--)o[h]="#"+k+" "+sa(o[h]);r=o.join(","),s=$.test(a)&&qa(b.parentNode)||b}if(r)try{return G.apply(d,s.querySelectorAll(r)),d}catch(x){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(P,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("fieldset");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&a.sourceIndex-b.sourceIndex;if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return function(b){return"label"in b&&b.disabled===a||"form"in b&&b.disabled===a||"form"in b&&b.disabled===!1&&(b.isDisabled===a||b.isDisabled!==!a&&("label"in b||!ea(b))!==a)}}function pa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function qa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return!!b&&"HTML"!==b.nodeName},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),v!==n&&(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Y.test(n.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}},d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){if("undefined"!=typeof b.getElementsByClassName&&p)return b.getElementsByClassName(a)},r=[],q=[],(c.qsa=Y.test(n.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+K+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+K+"*(?:value|"+J+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){a.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+K+"*[*^$|!~]?="),2!==a.querySelectorAll(":enabled").length&&q.push(":enabled",":disabled"),o.appendChild(a).disabled=!0,2!==a.querySelectorAll(":disabled").length&&q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Y.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"*"),s.call(a,"[s!='']:x"),r.push("!=",N)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Y.test(o.compareDocumentPosition),t=b||Y.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?I(k,a)-I(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?I(k,a)-I(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?la(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(S,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&C.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.escape=function(a){return(a+"").replace(ba,ca)},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(_,aa),a[3]=(a[3]||a[4]||a[5]||"").replace(_,aa),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return V.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&T.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(_,aa).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+K+")"+a+"("+K+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:!b||(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(O," ")+" ").indexOf(c)>-1:"|="===b&&(e===c||e.slice(0,c.length+1)===c+"-"))}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=I(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(P,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(_,aa),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return U.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(_,aa).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:oa(!1),disabled:oa(!0),checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return X.test(a.nodeName)},input:function(a){return W.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:pa(function(){return[0]}),last:pa(function(a,b){return[b-1]}),eq:pa(function(a,b,c){return[c<0?c+b:c]}),even:pa(function(a,b){for(var c=0;c<b;c+=2)a.push(c);return a}),odd:pa(function(a,b){for(var c=1;c<b;c+=2)a.push(c);return a}),lt:pa(function(a,b,c){for(var d=c<0?c+b:c;--d>=0;)a.push(d);return a}),gt:pa(function(a,b,c){for(var d=c<0?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function ra(){}ra.prototype=d.filters=d.pseudos,d.setFilters=new ra,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=Q.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=R.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(P," ")}),h=h.slice(c.length));for(g in d.filter)!(e=V[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function sa(a){for(var b=0,c=a.length,d="";b<c;b++)d+=a[b].value;return d}function ta(a,b,c){var d=b.dir,e=b.next,f=e||d,g=c&&"parentNode"===f,h=x++;return b.first?function(b,c,e){while(b=b[d])if(1===b.nodeType||g)return a(b,c,e)}:function(b,c,i){var j,k,l,m=[w,h];if(i){while(b=b[d])if((1===b.nodeType||g)&&a(b,c,i))return!0}else while(b=b[d])if(1===b.nodeType||g)if(l=b[u]||(b[u]={}),k=l[b.uniqueID]||(l[b.uniqueID]={}),e&&e===b.nodeName.toLowerCase())b=b[d]||b;else{if((j=k[f])&&j[0]===w&&j[1]===h)return m[2]=j[2];if(k[f]=m,m[2]=a(b,c,i))return!0}}}function ua(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function va(a,b,c){for(var d=0,e=b.length;d<e;d++)ga(a,b[d],c);return c}function wa(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;h<i;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function xa(a,b,c,d,e,f){return d&&!d[u]&&(d=xa(d)),e&&!e[u]&&(e=xa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||va(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:wa(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=wa(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?I(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=wa(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):G.apply(g,r)})}function ya(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ta(function(a){return a===b},h,!0),l=ta(function(a){return I(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];i<f;i++)if(c=d.relative[a[i].type])m=[ta(ua(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;e<f;e++)if(d.relative[a[e].type])break;return xa(i>1&&ua(m),i>1&&sa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(P,"$1"),c,i<e&&ya(a.slice(i,e)),e<f&&ya(a=a.slice(e)),e<f&&sa(a))}m.push(c)}return ua(m)}function za(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=E.call(i));u=wa(u)}G.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&ga.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=ya(b[c]),f[u]?d.push(f):e.push(f);f=A(a,za(e,d)),f.selector=a}return f},i=ga.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(_,aa),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=V.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(_,aa),$.test(j[0].type)&&qa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&sa(j),!a)return G.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,!b||$.test(a)&&qa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("fieldset"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){if(!c)return a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){if(!c&&"input"===a.nodeName.toLowerCase())return a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(J,function(a,b,c){var d;if(!c)return a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);r.find=x,r.expr=x.selectors,r.expr[":"]=r.expr.pseudos,r.uniqueSort=r.unique=x.uniqueSort,r.text=x.getText,r.isXMLDoc=x.isXML,r.contains=x.contains,r.escapeSelector=x.escape;var y=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&r(a).is(c))break;d.push(a)}return d},z=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},A=r.expr.match.needsContext,B=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,C=/^.[^:#\[\.,]*$/;function D(a,b,c){if(r.isFunction(b))return r.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return r.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(C.test(b))return r.filter(b,a,c);b=r.filter(b,a)}return r.grep(a,function(a){return i.call(b,a)>-1!==c&&1===a.nodeType})}r.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?r.find.matchesSelector(d,a)?[d]:[]:r.find.matches(a,r.grep(b,function(a){return 1===a.nodeType}))},r.fn.extend({find:function(a){var b,c,d=this.length,e=this;if("string"!=typeof a)return this.pushStack(r(a).filter(function(){for(b=0;b<d;b++)if(r.contains(e[b],this))return!0}));for(c=this.pushStack([]),b=0;b<d;b++)r.find(a,e[b],c);return d>1?r.uniqueSort(c):c},filter:function(a){return this.pushStack(D(this,a||[],!1))},not:function(a){return this.pushStack(D(this,a||[],!0))},is:function(a){return!!D(this,"string"==typeof a&&A.test(a)?r(a):a||[],!1).length}});var E,F=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,G=r.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||E,"string"==typeof a){if(e="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:F.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof r?b[0]:b,r.merge(this,r.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),B.test(e[1])&&r.isPlainObject(b))for(e in b)r.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}return f=d.getElementById(e[2]),f&&(this[0]=f,this.length=1),this}return a.nodeType?(this[0]=a,this.length=1,this):r.isFunction(a)?void 0!==c.ready?c.ready(a):a(r):r.makeArray(a,this)};G.prototype=r.fn,E=r(d);var H=/^(?:parents|prev(?:Until|All))/,I={children:!0,contents:!0,next:!0,prev:!0};r.fn.extend({has:function(a){var b=r(a,this),c=b.length;return this.filter(function(){for(var a=0;a<c;a++)if(r.contains(this,b[a]))return!0})},closest:function(a,b){var c,d=0,e=this.length,f=[],g="string"!=typeof a&&r(a);if(!A.test(a))for(;d<e;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&r.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?r.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?i.call(r(a),this[0]):i.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(r.uniqueSort(r.merge(this.get(),r(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function J(a,b){while((a=a[b])&&1!==a.nodeType);return a}r.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return y(a,"parentNode")},parentsUntil:function(a,b,c){return y(a,"parentNode",c)},next:function(a){return J(a,"nextSibling")},prev:function(a){return J(a,"previousSibling")},nextAll:function(a){return y(a,"nextSibling")},prevAll:function(a){return y(a,"previousSibling")},nextUntil:function(a,b,c){return y(a,"nextSibling",c)},prevUntil:function(a,b,c){return y(a,"previousSibling",c)},siblings:function(a){return z((a.parentNode||{}).firstChild,a)},children:function(a){return z(a.firstChild)},contents:function(a){return a.contentDocument||r.merge([],a.childNodes)}},function(a,b){r.fn[a]=function(c,d){var e=r.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=r.filter(d,e)),this.length>1&&(I[a]||r.uniqueSort(e),H.test(a)&&e.reverse()),this.pushStack(e)}});var K=/\S+/g;function L(a){var b={};return r.each(a.match(K)||[],function(a,c){b[c]=!0}),b}r.Callbacks=function(a){a="string"==typeof a?L(a):r.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){r.each(b,function(b,c){r.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==r.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return r.each(arguments,function(a,b){var c;while((c=r.inArray(b,f,c))>-1)f.splice(c,1),c<=h&&h--}),this},has:function(a){return a?r.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=g=[],c||b||(f=c=""),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j};function M(a){return a}function N(a){throw a}function O(a,b,c){var d;try{a&&r.isFunction(d=a.promise)?d.call(a).done(b).fail(c):a&&r.isFunction(d=a.then)?d.call(a,b,c):b.call(void 0,a)}catch(a){c.call(void 0,a)}}r.extend({Deferred:function(b){var c=[["notify","progress",r.Callbacks("memory"),r.Callbacks("memory"),2],["resolve","done",r.Callbacks("once memory"),r.Callbacks("once memory"),0,"resolved"],["reject","fail",r.Callbacks("once memory"),r.Callbacks("once memory"),1,"rejected"]],d="pending",e={state:function(){return d},always:function(){return f.done(arguments).fail(arguments),this},"catch":function(a){return e.then(null,a)},pipe:function(){var a=arguments;return r.Deferred(function(b){r.each(c,function(c,d){var e=r.isFunction(a[d[4]])&&a[d[4]];f[d[1]](function(){var a=e&&e.apply(this,arguments);a&&r.isFunction(a.promise)?a.promise().progress(b.notify).done(b.resolve).fail(b.reject):b[d[0]+"With"](this,e?[a]:arguments)})}),a=null}).promise()},then:function(b,d,e){var f=0;function g(b,c,d,e){return function(){var h=this,i=arguments,j=function(){var a,j;if(!(b<f)){if(a=d.apply(h,i),a===c.promise())throw new TypeError("Thenable self-resolution");j=a&&("object"==typeof a||"function"==typeof a)&&a.then,r.isFunction(j)?e?j.call(a,g(f,c,M,e),g(f,c,N,e)):(f++,j.call(a,g(f,c,M,e),g(f,c,N,e),g(f,c,M,c.notifyWith))):(d!==M&&(h=void 0,i=[a]),(e||c.resolveWith)(h,i))}},k=e?j:function(){try{j()}catch(a){r.Deferred.exceptionHook&&r.Deferred.exceptionHook(a,k.stackTrace),b+1>=f&&(d!==N&&(h=void 0,i=[a]),c.rejectWith(h,i))}};b?k():(r.Deferred.getStackHook&&(k.stackTrace=r.Deferred.getStackHook()),a.setTimeout(k))}}return r.Deferred(function(a){c[0][3].add(g(0,a,r.isFunction(e)?e:M,a.notifyWith)),c[1][3].add(g(0,a,r.isFunction(b)?b:M)),c[2][3].add(g(0,a,r.isFunction(d)?d:N))}).promise()},promise:function(a){return null!=a?r.extend(a,e):e}},f={};return r.each(c,function(a,b){var g=b[2],h=b[5];e[b[1]]=g.add,h&&g.add(function(){d=h},c[3-a][2].disable,c[0][2].lock),g.add(b[3].fire),f[b[0]]=function(){return f[b[0]+"With"](this===f?void 0:this,arguments),this},f[b[0]+"With"]=g.fireWith}),e.promise(f),b&&b.call(f,f),f},when:function(a){var b=arguments.length,c=b,d=Array(c),e=f.call(arguments),g=r.Deferred(),h=function(a){return function(c){d[a]=this,e[a]=arguments.length>1?f.call(arguments):c,--b||g.resolveWith(d,e)}};if(b<=1&&(O(a,g.done(h(c)).resolve,g.reject),"pending"===g.state()||r.isFunction(e[c]&&e[c].then)))return g.then();while(c--)O(e[c],h(c),g.reject);return g.promise()}});var P=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;r.Deferred.exceptionHook=function(b,c){a.console&&a.console.warn&&b&&P.test(b.name)&&a.console.warn("jQuery.Deferred exception: "+b.message,b.stack,c)},r.readyException=function(b){a.setTimeout(function(){throw b})};var Q=r.Deferred();r.fn.ready=function(a){return Q.then(a)["catch"](function(a){r.readyException(a)}),this},r.extend({isReady:!1,readyWait:1,holdReady:function(a){a?r.readyWait++:r.ready(!0)},ready:function(a){(a===!0?--r.readyWait:r.isReady)||(r.isReady=!0,a!==!0&&--r.readyWait>0||Q.resolveWith(d,[r]))}}),r.ready.then=Q.then;function R(){d.removeEventListener("DOMContentLoaded",R),a.removeEventListener("load",R),r.ready()}"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll?a.setTimeout(r.ready):(d.addEventListener("DOMContentLoaded",R),a.addEventListener("load",R));var S=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===r.type(c)){e=!0;for(h in c)S(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,
r.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(r(a),c)})),b))for(;h<i;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},T=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function U(){this.expando=r.expando+U.uid++}U.uid=1,U.prototype={cache:function(a){var b=a[this.expando];return b||(b={},T(a)&&(a.nodeType?a[this.expando]=b:Object.defineProperty(a,this.expando,{value:b,configurable:!0}))),b},set:function(a,b,c){var d,e=this.cache(a);if("string"==typeof b)e[r.camelCase(b)]=c;else for(d in b)e[r.camelCase(d)]=b[d];return e},get:function(a,b){return void 0===b?this.cache(a):a[this.expando]&&a[this.expando][r.camelCase(b)]},access:function(a,b,c){return void 0===b||b&&"string"==typeof b&&void 0===c?this.get(a,b):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d=a[this.expando];if(void 0!==d){if(void 0!==b){r.isArray(b)?b=b.map(r.camelCase):(b=r.camelCase(b),b=b in d?[b]:b.match(K)||[]),c=b.length;while(c--)delete d[b[c]]}(void 0===b||r.isEmptyObject(d))&&(a.nodeType?a[this.expando]=void 0:delete a[this.expando])}},hasData:function(a){var b=a[this.expando];return void 0!==b&&!r.isEmptyObject(b)}};var V=new U,W=new U,X=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Y=/[A-Z]/g;function Z(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(Y,"-$&").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c||"false"!==c&&("null"===c?null:+c+""===c?+c:X.test(c)?JSON.parse(c):c)}catch(e){}W.set(a,b,c)}else c=void 0;return c}r.extend({hasData:function(a){return W.hasData(a)||V.hasData(a)},data:function(a,b,c){return W.access(a,b,c)},removeData:function(a,b){W.remove(a,b)},_data:function(a,b,c){return V.access(a,b,c)},_removeData:function(a,b){V.remove(a,b)}}),r.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=W.get(f),1===f.nodeType&&!V.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=r.camelCase(d.slice(5)),Z(f,d,e[d])));V.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){W.set(this,a)}):S(this,function(b){var c;if(f&&void 0===b){if(c=W.get(f,a),void 0!==c)return c;if(c=Z(f,a),void 0!==c)return c}else this.each(function(){W.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){W.remove(this,a)})}}),r.extend({queue:function(a,b,c){var d;if(a)return b=(b||"fx")+"queue",d=V.get(a,b),c&&(!d||r.isArray(c)?d=V.access(a,b,r.makeArray(c)):d.push(c)),d||[]},dequeue:function(a,b){b=b||"fx";var c=r.queue(a,b),d=c.length,e=c.shift(),f=r._queueHooks(a,b),g=function(){r.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return V.get(a,c)||V.access(a,c,{empty:r.Callbacks("once memory").add(function(){V.remove(a,[b+"queue",c])})})}}),r.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?r.queue(this[0],a):void 0===b?this:this.each(function(){var c=r.queue(this,a,b);r._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&r.dequeue(this,a)})},dequeue:function(a){return this.each(function(){r.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=r.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=V.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var $=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,_=new RegExp("^(?:([+-])=|)("+$+")([a-z%]*)$","i"),aa=["Top","Right","Bottom","Left"],ba=function(a,b){return a=b||a,"none"===a.style.display||""===a.style.display&&r.contains(a.ownerDocument,a)&&"none"===r.css(a,"display")},ca=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};function da(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return r.css(a,b,"")},i=h(),j=c&&c[3]||(r.cssNumber[b]?"":"px"),k=(r.cssNumber[b]||"px"!==j&&+i)&&_.exec(r.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,r.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var ea={};function fa(a){var b,c=a.ownerDocument,d=a.nodeName,e=ea[d];return e?e:(b=c.body.appendChild(c.createElement(d)),e=r.css(b,"display"),b.parentNode.removeChild(b),"none"===e&&(e="block"),ea[d]=e,e)}function ga(a,b){for(var c,d,e=[],f=0,g=a.length;f<g;f++)d=a[f],d.style&&(c=d.style.display,b?("none"===c&&(e[f]=V.get(d,"display")||null,e[f]||(d.style.display="")),""===d.style.display&&ba(d)&&(e[f]=fa(d))):"none"!==c&&(e[f]="none",V.set(d,"display",c)));for(f=0;f<g;f++)null!=e[f]&&(a[f].style.display=e[f]);return a}r.fn.extend({show:function(){return ga(this,!0)},hide:function(){return ga(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){ba(this)?r(this).show():r(this).hide()})}});var ha=/^(?:checkbox|radio)$/i,ia=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,ja=/^$|\/(?:java|ecma)script/i,ka={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ka.optgroup=ka.option,ka.tbody=ka.tfoot=ka.colgroup=ka.caption=ka.thead,ka.th=ka.td;function la(a,b){var c="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&r.nodeName(a,b)?r.merge([a],c):c}function ma(a,b){for(var c=0,d=a.length;c<d;c++)V.set(a[c],"globalEval",!b||V.get(b[c],"globalEval"))}var na=/<|&#?\w+;/;function oa(a,b,c,d,e){for(var f,g,h,i,j,k,l=b.createDocumentFragment(),m=[],n=0,o=a.length;n<o;n++)if(f=a[n],f||0===f)if("object"===r.type(f))r.merge(m,f.nodeType?[f]:f);else if(na.test(f)){g=g||l.appendChild(b.createElement("div")),h=(ia.exec(f)||["",""])[1].toLowerCase(),i=ka[h]||ka._default,g.innerHTML=i[1]+r.htmlPrefilter(f)+i[2],k=i[0];while(k--)g=g.lastChild;r.merge(m,g.childNodes),g=l.firstChild,g.textContent=""}else m.push(b.createTextNode(f));l.textContent="",n=0;while(f=m[n++])if(d&&r.inArray(f,d)>-1)e&&e.push(f);else if(j=r.contains(f.ownerDocument,f),g=la(l.appendChild(f),"script"),j&&ma(g),c){k=0;while(f=g[k++])ja.test(f.type||"")&&c.push(f)}return l}!function(){var a=d.createDocumentFragment(),b=a.appendChild(d.createElement("div")),c=d.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),o.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",o.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var pa=d.documentElement,qa=/^key/,ra=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,sa=/^([^.]*)(?:\.(.+)|)/;function ta(){return!0}function ua(){return!1}function va(){try{return d.activeElement}catch(a){}}function wa(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)wa(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=ua;else if(!e)return a;return 1===f&&(g=e,e=function(a){return r().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=r.guid++)),a.each(function(){r.event.add(this,b,e,d,c)})}r.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=V.get(a);if(q){c.handler&&(f=c,c=f.handler,e=f.selector),e&&r.find.matchesSelector(pa,e),c.guid||(c.guid=r.guid++),(i=q.events)||(i=q.events={}),(g=q.handle)||(g=q.handle=function(b){return"undefined"!=typeof r&&r.event.triggered!==b.type?r.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(K)||[""],j=b.length;while(j--)h=sa.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n&&(l=r.event.special[n]||{},n=(e?l.delegateType:l.bindType)||n,l=r.event.special[n]||{},k=r.extend({type:n,origType:p,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&r.expr.match.needsContext.test(e),namespace:o.join(".")},f),(m=i[n])||(m=i[n]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,o,g)!==!1||a.addEventListener&&a.addEventListener(n,g)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),r.event.global[n]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=V.hasData(a)&&V.get(a);if(q&&(i=q.events)){b=(b||"").match(K)||[""],j=b.length;while(j--)if(h=sa.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n){l=r.event.special[n]||{},n=(d?l.delegateType:l.bindType)||n,m=i[n]||[],h=h[2]&&new RegExp("(^|\\.)"+o.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&p!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,o,q.handle)!==!1||r.removeEvent(a,n,q.handle),delete i[n])}else for(n in i)r.event.remove(a,n+b[j],c,d,!0);r.isEmptyObject(i)&&V.remove(a,"handle events")}},dispatch:function(a){var b=r.event.fix(a),c,d,e,f,g,h,i=new Array(arguments.length),j=(V.get(this,"events")||{})[b.type]||[],k=r.event.special[b.type]||{};for(i[0]=b,c=1;c<arguments.length;c++)i[c]=arguments[c];if(b.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,b)!==!1){h=r.event.handlers.call(this,b,j),c=0;while((f=h[c++])&&!b.isPropagationStopped()){b.currentTarget=f.elem,d=0;while((g=f.handlers[d++])&&!b.isImmediatePropagationStopped())b.rnamespace&&!b.rnamespace.test(g.namespace)||(b.handleObj=g,b.data=g.data,e=((r.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(b.result=e)===!1&&(b.preventDefault(),b.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,b),b.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&("click"!==a.type||isNaN(a.button)||a.button<1))for(;i!==this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(d=[],c=0;c<h;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?r(e,this).index(i)>-1:r.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},addProp:function(a,b){Object.defineProperty(r.Event.prototype,a,{enumerable:!0,configurable:!0,get:r.isFunction(b)?function(){if(this.originalEvent)return b(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[a]},set:function(b){Object.defineProperty(this,a,{enumerable:!0,configurable:!0,writable:!0,value:b})}})},fix:function(a){return a[r.expando]?a:new r.Event(a)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==va()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===va()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&r.nodeName(this,"input"))return this.click(),!1},_default:function(a){return r.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}}},r.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)},r.Event=function(a,b){return this instanceof r.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?ta:ua,this.target=a.target&&3===a.target.nodeType?a.target.parentNode:a.target,this.currentTarget=a.currentTarget,this.relatedTarget=a.relatedTarget):this.type=a,b&&r.extend(this,b),this.timeStamp=a&&a.timeStamp||r.now(),void(this[r.expando]=!0)):new r.Event(a,b)},r.Event.prototype={constructor:r.Event,isDefaultPrevented:ua,isPropagationStopped:ua,isImmediatePropagationStopped:ua,isSimulated:!1,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=ta,a&&!this.isSimulated&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=ta,a&&!this.isSimulated&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=ta,a&&!this.isSimulated&&a.stopImmediatePropagation(),this.stopPropagation()}},r.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(a){var b=a.button;return null==a.which&&qa.test(a.type)?null!=a.charCode?a.charCode:a.keyCode:!a.which&&void 0!==b&&ra.test(a.type)?1&b?1:2&b?3:4&b?2:0:a.which}},r.event.addProp),r.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){r.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||r.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),r.fn.extend({on:function(a,b,c,d){return wa(this,a,b,c,d)},one:function(a,b,c,d){return wa(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,r(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=ua),this.each(function(){r.event.remove(this,a,c,b)})}});var xa=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,ya=/<script|<style|<link/i,za=/checked\s*(?:[^=]|=\s*.checked.)/i,Aa=/^true\/(.*)/,Ba=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Ca(a,b){return r.nodeName(a,"table")&&r.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a:a}function Da(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function Ea(a){var b=Aa.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function Fa(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(V.hasData(a)&&(f=V.access(a),g=V.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;c<d;c++)r.event.add(b,e,j[e][c])}W.hasData(a)&&(h=W.access(a),i=r.extend({},h),W.set(b,i))}}function Ga(a,b){var c=b.nodeName.toLowerCase();"input"===c&&ha.test(a.type)?b.checked=a.checked:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}function Ha(a,b,c,d){b=g.apply([],b);var e,f,h,i,j,k,l=0,m=a.length,n=m-1,q=b[0],s=r.isFunction(q);if(s||m>1&&"string"==typeof q&&!o.checkClone&&za.test(q))return a.each(function(e){var f=a.eq(e);s&&(b[0]=q.call(this,e,f.html())),Ha(f,b,c,d)});if(m&&(e=oa(b,a[0].ownerDocument,!1,a,d),f=e.firstChild,1===e.childNodes.length&&(e=f),f||d)){for(h=r.map(la(e,"script"),Da),i=h.length;l<m;l++)j=e,l!==n&&(j=r.clone(j,!0,!0),i&&r.merge(h,la(j,"script"))),c.call(a[l],j,l);if(i)for(k=h[h.length-1].ownerDocument,r.map(h,Ea),l=0;l<i;l++)j=h[l],ja.test(j.type||"")&&!V.access(j,"globalEval")&&r.contains(k,j)&&(j.src?r._evalUrl&&r._evalUrl(j.src):p(j.textContent.replace(Ba,""),k))}return a}function Ia(a,b,c){for(var d,e=b?r.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||r.cleanData(la(d)),d.parentNode&&(c&&r.contains(d.ownerDocument,d)&&ma(la(d,"script")),d.parentNode.removeChild(d));return a}r.extend({htmlPrefilter:function(a){return a.replace(xa,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=r.contains(a.ownerDocument,a);if(!(o.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||r.isXMLDoc(a)))for(g=la(h),f=la(a),d=0,e=f.length;d<e;d++)Ga(f[d],g[d]);if(b)if(c)for(f=f||la(a),g=g||la(h),d=0,e=f.length;d<e;d++)Fa(f[d],g[d]);else Fa(a,h);return g=la(h,"script"),g.length>0&&ma(g,!i&&la(a,"script")),h},cleanData:function(a){for(var b,c,d,e=r.event.special,f=0;void 0!==(c=a[f]);f++)if(T(c)){if(b=c[V.expando]){if(b.events)for(d in b.events)e[d]?r.event.remove(c,d):r.removeEvent(c,d,b.handle);c[V.expando]=void 0}c[W.expando]&&(c[W.expando]=void 0)}}}),r.fn.extend({detach:function(a){return Ia(this,a,!0)},remove:function(a){return Ia(this,a)},text:function(a){return S(this,function(a){return void 0===a?r.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=a)})},null,a,arguments.length)},append:function(){return Ha(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ca(this,a);b.appendChild(a)}})},prepend:function(){return Ha(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ca(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return Ha(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return Ha(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(r.cleanData(la(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null!=a&&a,b=null==b?a:b,this.map(function(){return r.clone(this,a,b)})},html:function(a){return S(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!ya.test(a)&&!ka[(ia.exec(a)||["",""])[1].toLowerCase()]){a=r.htmlPrefilter(a);try{for(;c<d;c++)b=this[c]||{},1===b.nodeType&&(r.cleanData(la(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return Ha(this,arguments,function(b){var c=this.parentNode;r.inArray(this,a)<0&&(r.cleanData(la(this)),c&&c.replaceChild(b,this))},a)}}),r.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){r.fn[a]=function(a){for(var c,d=[],e=r(a),f=e.length-1,g=0;g<=f;g++)c=g===f?this:this.clone(!0),r(e[g])[b](c),h.apply(d,c.get());return this.pushStack(d)}});var Ja=/^margin/,Ka=new RegExp("^("+$+")(?!px)[a-z%]+$","i"),La=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)};!function(){function b(){if(i){i.style.cssText="box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",i.innerHTML="",pa.appendChild(h);var b=a.getComputedStyle(i);c="1%"!==b.top,g="2px"===b.marginLeft,e="4px"===b.width,i.style.marginRight="50%",f="4px"===b.marginRight,pa.removeChild(h),i=null}}var c,e,f,g,h=d.createElement("div"),i=d.createElement("div");i.style&&(i.style.backgroundClip="content-box",i.cloneNode(!0).style.backgroundClip="",o.clearCloneStyle="content-box"===i.style.backgroundClip,h.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",h.appendChild(i),r.extend(o,{pixelPosition:function(){return b(),c},boxSizingReliable:function(){return b(),e},pixelMarginRight:function(){return b(),f},reliableMarginLeft:function(){return b(),g}}))}();function Ma(a,b,c){var d,e,f,g,h=a.style;return c=c||La(a),c&&(g=c.getPropertyValue(b)||c[b],""!==g||r.contains(a.ownerDocument,a)||(g=r.style(a,b)),!o.pixelMarginRight()&&Ka.test(g)&&Ja.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function Na(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Oa=/^(none|table(?!-c[ea]).+)/,Pa={position:"absolute",visibility:"hidden",display:"block"},Qa={letterSpacing:"0",fontWeight:"400"},Ra=["Webkit","Moz","ms"],Sa=d.createElement("div").style;function Ta(a){if(a in Sa)return a;var b=a[0].toUpperCase()+a.slice(1),c=Ra.length;while(c--)if(a=Ra[c]+b,a in Sa)return a}function Ua(a,b,c){var d=_.exec(b);return d?Math.max(0,d[2]-(c||0))+(d[3]||"px"):b}function Va(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;f<4;f+=2)"margin"===c&&(g+=r.css(a,c+aa[f],!0,e)),d?("content"===c&&(g-=r.css(a,"padding"+aa[f],!0,e)),"margin"!==c&&(g-=r.css(a,"border"+aa[f]+"Width",!0,e))):(g+=r.css(a,"padding"+aa[f],!0,e),"padding"!==c&&(g+=r.css(a,"border"+aa[f]+"Width",!0,e)));return g}function Wa(a,b,c){var d,e=!0,f=La(a),g="border-box"===r.css(a,"boxSizing",!1,f);if(a.getClientRects().length&&(d=a.getBoundingClientRect()[b]),d<=0||null==d){if(d=Ma(a,b,f),(d<0||null==d)&&(d=a.style[b]),Ka.test(d))return d;e=g&&(o.boxSizingReliable()||d===a.style[b]),d=parseFloat(d)||0}return d+Va(a,b,c||(g?"border":"content"),e,f)+"px"}r.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Ma(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=r.camelCase(b),i=a.style;return b=r.cssProps[h]||(r.cssProps[h]=Ta(h)||h),g=r.cssHooks[b]||r.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=_.exec(c))&&e[1]&&(c=da(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(r.cssNumber[h]?"":"px")),o.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=r.camelCase(b);return b=r.cssProps[h]||(r.cssProps[h]=Ta(h)||h),g=r.cssHooks[b]||r.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=Ma(a,b,d)),"normal"===e&&b in Qa&&(e=Qa[b]),""===c||c?(f=parseFloat(e),c===!0||isFinite(f)?f||0:e):e}}),r.each(["height","width"],function(a,b){r.cssHooks[b]={get:function(a,c,d){if(c)return!Oa.test(r.css(a,"display"))||a.getClientRects().length&&a.getBoundingClientRect().width?Wa(a,b,d):ca(a,Pa,function(){return Wa(a,b,d)})},set:function(a,c,d){var e,f=d&&La(a),g=d&&Va(a,b,d,"border-box"===r.css(a,"boxSizing",!1,f),f);return g&&(e=_.exec(c))&&"px"!==(e[3]||"px")&&(a.style[b]=c,c=r.css(a,b)),Ua(a,c,g)}}}),r.cssHooks.marginLeft=Na(o.reliableMarginLeft,function(a,b){if(b)return(parseFloat(Ma(a,"marginLeft"))||a.getBoundingClientRect().left-ca(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}))+"px"}),r.each({margin:"",padding:"",border:"Width"},function(a,b){r.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];d<4;d++)e[a+aa[d]+b]=f[d]||f[d-2]||f[0];return e}},Ja.test(a)||(r.cssHooks[a+b].set=Ua)}),r.fn.extend({css:function(a,b){return S(this,function(a,b,c){var d,e,f={},g=0;if(r.isArray(b)){for(d=La(a),e=b.length;g<e;g++)f[b[g]]=r.css(a,b[g],!1,d);return f}return void 0!==c?r.style(a,b,c):r.css(a,b)},a,b,arguments.length>1)}});function Xa(a,b,c,d,e){return new Xa.prototype.init(a,b,c,d,e)}r.Tween=Xa,Xa.prototype={constructor:Xa,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||r.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(r.cssNumber[c]?"":"px")},cur:function(){var a=Xa.propHooks[this.prop];return a&&a.get?a.get(this):Xa.propHooks._default.get(this)},run:function(a){var b,c=Xa.propHooks[this.prop];return this.options.duration?this.pos=b=r.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Xa.propHooks._default.set(this),this}},Xa.prototype.init.prototype=Xa.prototype,Xa.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=r.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){r.fx.step[a.prop]?r.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[r.cssProps[a.prop]]&&!r.cssHooks[a.prop]?a.elem[a.prop]=a.now:r.style(a.elem,a.prop,a.now+a.unit)}}},Xa.propHooks.scrollTop=Xa.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},r.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},r.fx=Xa.prototype.init,r.fx.step={};var Ya,Za,$a=/^(?:toggle|show|hide)$/,_a=/queueHooks$/;function ab(){Za&&(a.requestAnimationFrame(ab),r.fx.tick())}function bb(){return a.setTimeout(function(){Ya=void 0}),Ya=r.now()}function cb(a,b){var c,d=0,e={height:a};for(b=b?1:0;d<4;d+=2-b)c=aa[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function db(a,b,c){for(var d,e=(gb.tweeners[b]||[]).concat(gb.tweeners["*"]),f=0,g=e.length;f<g;f++)if(d=e[f].call(c,b,a))return d}function eb(a,b,c){var d,e,f,g,h,i,j,k,l="width"in b||"height"in b,m=this,n={},o=a.style,p=a.nodeType&&ba(a),q=V.get(a,"fxshow");c.queue||(g=r._queueHooks(a,"fx"),null==g.unqueued&&(g.unqueued=0,h=g.empty.fire,g.empty.fire=function(){g.unqueued||h()}),g.unqueued++,m.always(function(){m.always(function(){g.unqueued--,r.queue(a,"fx").length||g.empty.fire()})}));for(d in b)if(e=b[d],$a.test(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}n[d]=q&&q[d]||r.style(a,d)}if(i=!r.isEmptyObject(b),i||!r.isEmptyObject(n)){l&&1===a.nodeType&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=q&&q.display,null==j&&(j=V.get(a,"display")),k=r.css(a,"display"),"none"===k&&(j?k=j:(ga([a],!0),j=a.style.display||j,k=r.css(a,"display"),ga([a]))),("inline"===k||"inline-block"===k&&null!=j)&&"none"===r.css(a,"float")&&(i||(m.done(function(){o.display=j}),null==j&&(k=o.display,j="none"===k?"":k)),o.display="inline-block")),c.overflow&&(o.overflow="hidden",m.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]})),i=!1;for(d in n)i||(q?"hidden"in q&&(p=q.hidden):q=V.access(a,"fxshow",{display:j}),f&&(q.hidden=!p),p&&ga([a],!0),m.done(function(){p||ga([a]),V.remove(a,"fxshow");for(d in n)r.style(a,d,n[d])})),i=db(p?q[d]:0,d,m),d in q||(q[d]=i.start,p&&(i.end=i.start,i.start=0))}}function fb(a,b){var c,d,e,f,g;for(c in a)if(d=r.camelCase(c),e=b[d],f=a[c],r.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=r.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function gb(a,b,c){var d,e,f=0,g=gb.prefilters.length,h=r.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Ya||bb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;g<i;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),f<1&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:r.extend({},b),opts:r.extend(!0,{specialEasing:{},easing:r.easing._default},c),originalProperties:b,originalOptions:c,startTime:Ya||bb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=r.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;c<d;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for(fb(k,j.opts.specialEasing);f<g;f++)if(d=gb.prefilters[f].call(j,a,k,j.opts))return r.isFunction(d.stop)&&(r._queueHooks(j.elem,j.opts.queue).stop=r.proxy(d.stop,d)),d;return r.map(k,db,j),r.isFunction(j.opts.start)&&j.opts.start.call(a,j),r.fx.timer(r.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}r.Animation=r.extend(gb,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return da(c.elem,a,_.exec(b),c),c}]},tweener:function(a,b){r.isFunction(a)?(b=a,a=["*"]):a=a.match(K);for(var c,d=0,e=a.length;d<e;d++)c=a[d],gb.tweeners[c]=gb.tweeners[c]||[],gb.tweeners[c].unshift(b)},prefilters:[eb],prefilter:function(a,b){b?gb.prefilters.unshift(a):gb.prefilters.push(a)}}),r.speed=function(a,b,c){var e=a&&"object"==typeof a?r.extend({},a):{complete:c||!c&&b||r.isFunction(a)&&a,duration:a,easing:c&&b||b&&!r.isFunction(b)&&b};return r.fx.off||d.hidden?e.duration=0:e.duration="number"==typeof e.duration?e.duration:e.duration in r.fx.speeds?r.fx.speeds[e.duration]:r.fx.speeds._default,null!=e.queue&&e.queue!==!0||(e.queue="fx"),e.old=e.complete,e.complete=function(){r.isFunction(e.old)&&e.old.call(this),e.queue&&r.dequeue(this,e.queue)},e},r.fn.extend({fadeTo:function(a,b,c,d){return this.filter(ba).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=r.isEmptyObject(a),f=r.speed(b,c,d),g=function(){var b=gb(this,r.extend({},a),f);(e||V.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=r.timers,g=V.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&_a.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||r.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=V.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=r.timers,g=d?d.length:0;for(c.finish=!0,r.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;b<g;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),r.each(["toggle","show","hide"],function(a,b){var c=r.fn[b];r.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(cb(b,!0),a,d,e)}}),r.each({slideDown:cb("show"),slideUp:cb("hide"),slideToggle:cb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){r.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),r.timers=[],r.fx.tick=function(){var a,b=0,c=r.timers;for(Ya=r.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||r.fx.stop(),Ya=void 0},r.fx.timer=function(a){r.timers.push(a),a()?r.fx.start():r.timers.pop()},r.fx.interval=13,r.fx.start=function(){Za||(Za=a.requestAnimationFrame?a.requestAnimationFrame(ab):a.setInterval(r.fx.tick,r.fx.interval))},r.fx.stop=function(){a.cancelAnimationFrame?a.cancelAnimationFrame(Za):a.clearInterval(Za),Za=null},r.fx.speeds={slow:600,fast:200,_default:400},r.fn.delay=function(b,c){return b=r.fx?r.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a=d.createElement("input"),b=d.createElement("select"),c=b.appendChild(d.createElement("option"));a.type="checkbox",o.checkOn=""!==a.value,o.optSelected=c.selected,a=d.createElement("input"),a.value="t",a.type="radio",o.radioValue="t"===a.value}();var hb,ib=r.expr.attrHandle;r.fn.extend({attr:function(a,b){return S(this,r.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){r.removeAttr(this,a)})}}),r.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?r.prop(a,b,c):(1===f&&r.isXMLDoc(a)||(e=r.attrHooks[b.toLowerCase()]||(r.expr.match.bool.test(b)?hb:void 0)),void 0!==c?null===c?void r.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=r.find.attr(a,b),null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!o.radioValue&&"radio"===b&&r.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d=0,e=b&&b.match(K);
if(e&&1===a.nodeType)while(c=e[d++])a.removeAttribute(c)}}),hb={set:function(a,b,c){return b===!1?r.removeAttr(a,c):a.setAttribute(c,c),c}},r.each(r.expr.match.bool.source.match(/\w+/g),function(a,b){var c=ib[b]||r.find.attr;ib[b]=function(a,b,d){var e,f,g=b.toLowerCase();return d||(f=ib[g],ib[g]=e,e=null!=c(a,b,d)?g:null,ib[g]=f),e}});var jb=/^(?:input|select|textarea|button)$/i,kb=/^(?:a|area)$/i;r.fn.extend({prop:function(a,b){return S(this,r.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[r.propFix[a]||a]})}}),r.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&r.isXMLDoc(a)||(b=r.propFix[b]||b,e=r.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=r.find.attr(a,"tabindex");return b?parseInt(b,10):jb.test(a.nodeName)||kb.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),o.optSelected||(r.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),r.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){r.propFix[this.toLowerCase()]=this});var lb=/[\t\r\n\f]/g;function mb(a){return a.getAttribute&&a.getAttribute("class")||""}r.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).addClass(a.call(this,b,mb(this)))});if("string"==typeof a&&a){b=a.match(K)||[];while(c=this[i++])if(e=mb(c),d=1===c.nodeType&&(" "+e+" ").replace(lb," ")){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=r.trim(d),e!==h&&c.setAttribute("class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).removeClass(a.call(this,b,mb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(K)||[];while(c=this[i++])if(e=mb(c),d=1===c.nodeType&&(" "+e+" ").replace(lb," ")){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=r.trim(d),e!==h&&c.setAttribute("class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):r.isFunction(a)?this.each(function(c){r(this).toggleClass(a.call(this,c,mb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=r(this),f=a.match(K)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=mb(this),b&&V.set(this,"__className__",b),this.setAttribute&&this.setAttribute("class",b||a===!1?"":V.get(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+mb(c)+" ").replace(lb," ").indexOf(b)>-1)return!0;return!1}});var nb=/\r/g,ob=/[\x20\t\r\n\f]+/g;r.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=r.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,r(this).val()):a,null==e?e="":"number"==typeof e?e+="":r.isArray(e)&&(e=r.map(e,function(a){return null==a?"":a+""})),b=r.valHooks[this.type]||r.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=r.valHooks[e.type]||r.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(nb,""):null==c?"":c)}}}),r.extend({valHooks:{option:{get:function(a){var b=r.find.attr(a,"value");return null!=b?b:r.trim(r.text(a)).replace(ob," ")}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type,g=f?null:[],h=f?e+1:d.length,i=e<0?h:f?e:0;i<h;i++)if(c=d[i],(c.selected||i===e)&&!c.disabled&&(!c.parentNode.disabled||!r.nodeName(c.parentNode,"optgroup"))){if(b=r(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=r.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=r.inArray(r.valHooks.option.get(d),f)>-1)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),r.each(["radio","checkbox"],function(){r.valHooks[this]={set:function(a,b){if(r.isArray(b))return a.checked=r.inArray(r(a).val(),b)>-1}},o.checkOn||(r.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var pb=/^(?:focusinfocus|focusoutblur)$/;r.extend(r.event,{trigger:function(b,c,e,f){var g,h,i,j,k,m,n,o=[e||d],p=l.call(b,"type")?b.type:b,q=l.call(b,"namespace")?b.namespace.split("."):[];if(h=i=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!pb.test(p+r.event.triggered)&&(p.indexOf(".")>-1&&(q=p.split("."),p=q.shift(),q.sort()),k=p.indexOf(":")<0&&"on"+p,b=b[r.expando]?b:new r.Event(p,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=q.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:r.makeArray(c,[b]),n=r.event.special[p]||{},f||!n.trigger||n.trigger.apply(e,c)!==!1)){if(!f&&!n.noBubble&&!r.isWindow(e)){for(j=n.delegateType||p,pb.test(j+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),i=h;i===(e.ownerDocument||d)&&o.push(i.defaultView||i.parentWindow||a)}g=0;while((h=o[g++])&&!b.isPropagationStopped())b.type=g>1?j:n.bindType||p,m=(V.get(h,"events")||{})[b.type]&&V.get(h,"handle"),m&&m.apply(h,c),m=k&&h[k],m&&m.apply&&T(h)&&(b.result=m.apply(h,c),b.result===!1&&b.preventDefault());return b.type=p,f||b.isDefaultPrevented()||n._default&&n._default.apply(o.pop(),c)!==!1||!T(e)||k&&r.isFunction(e[p])&&!r.isWindow(e)&&(i=e[k],i&&(e[k]=null),r.event.triggered=p,e[p](),r.event.triggered=void 0,i&&(e[k]=i)),b.result}},simulate:function(a,b,c){var d=r.extend(new r.Event,c,{type:a,isSimulated:!0});r.event.trigger(d,null,b)}}),r.fn.extend({trigger:function(a,b){return this.each(function(){r.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];if(c)return r.event.trigger(a,b,c,!0)}}),r.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(a,b){r.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),r.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),o.focusin="onfocusin"in a,o.focusin||r.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){r.event.simulate(b,a.target,r.event.fix(a))};r.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=V.access(d,b);e||d.addEventListener(a,c,!0),V.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=V.access(d,b)-1;e?V.access(d,b,e):(d.removeEventListener(a,c,!0),V.remove(d,b))}}});var qb=a.location,rb=r.now(),sb=/\?/;r.parseXML=function(b){var c;if(!b||"string"!=typeof b)return null;try{c=(new a.DOMParser).parseFromString(b,"text/xml")}catch(d){c=void 0}return c&&!c.getElementsByTagName("parsererror").length||r.error("Invalid XML: "+b),c};var tb=/\[\]$/,ub=/\r?\n/g,vb=/^(?:submit|button|image|reset|file)$/i,wb=/^(?:input|select|textarea|keygen)/i;function xb(a,b,c,d){var e;if(r.isArray(b))r.each(b,function(b,e){c||tb.test(a)?d(a,e):xb(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==r.type(b))d(a,b);else for(e in b)xb(a+"["+e+"]",b[e],c,d)}r.param=function(a,b){var c,d=[],e=function(a,b){var c=r.isFunction(b)?b():b;d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(null==c?"":c)};if(r.isArray(a)||a.jquery&&!r.isPlainObject(a))r.each(a,function(){e(this.name,this.value)});else for(c in a)xb(c,a[c],b,e);return d.join("&")},r.fn.extend({serialize:function(){return r.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=r.prop(this,"elements");return a?r.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!r(this).is(":disabled")&&wb.test(this.nodeName)&&!vb.test(a)&&(this.checked||!ha.test(a))}).map(function(a,b){var c=r(this).val();return null==c?null:r.isArray(c)?r.map(c,function(a){return{name:b.name,value:a.replace(ub,"\r\n")}}):{name:b.name,value:c.replace(ub,"\r\n")}}).get()}});var yb=/%20/g,zb=/#.*$/,Ab=/([?&])_=[^&]*/,Bb=/^(.*?):[ \t]*([^\r\n]*)$/gm,Cb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Db=/^(?:GET|HEAD)$/,Eb=/^\/\//,Fb={},Gb={},Hb="*/".concat("*"),Ib=d.createElement("a");Ib.href=qb.href;function Jb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(K)||[];if(r.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Kb(a,b,c,d){var e={},f=a===Gb;function g(h){var i;return e[h]=!0,r.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Lb(a,b){var c,d,e=r.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&r.extend(!0,a,d),a}function Mb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}if(f)return f!==i[0]&&i.unshift(f),c[f]}function Nb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}r.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:qb.href,type:"GET",isLocal:Cb.test(qb.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Hb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":r.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Lb(Lb(a,r.ajaxSettings),b):Lb(r.ajaxSettings,a)},ajaxPrefilter:Jb(Fb),ajaxTransport:Jb(Gb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var e,f,g,h,i,j,k,l,m,n,o=r.ajaxSetup({},c),p=o.context||o,q=o.context&&(p.nodeType||p.jquery)?r(p):r.event,s=r.Deferred(),t=r.Callbacks("once memory"),u=o.statusCode||{},v={},w={},x="canceled",y={readyState:0,getResponseHeader:function(a){var b;if(k){if(!h){h={};while(b=Bb.exec(g))h[b[1].toLowerCase()]=b[2]}b=h[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return k?g:null},setRequestHeader:function(a,b){return null==k&&(a=w[a.toLowerCase()]=w[a.toLowerCase()]||a,v[a]=b),this},overrideMimeType:function(a){return null==k&&(o.mimeType=a),this},statusCode:function(a){var b;if(a)if(k)y.always(a[y.status]);else for(b in a)u[b]=[u[b],a[b]];return this},abort:function(a){var b=a||x;return e&&e.abort(b),A(0,b),this}};if(s.promise(y),o.url=((b||o.url||qb.href)+"").replace(Eb,qb.protocol+"//"),o.type=c.method||c.type||o.method||o.type,o.dataTypes=(o.dataType||"*").toLowerCase().match(K)||[""],null==o.crossDomain){j=d.createElement("a");try{j.href=o.url,j.href=j.href,o.crossDomain=Ib.protocol+"//"+Ib.host!=j.protocol+"//"+j.host}catch(z){o.crossDomain=!0}}if(o.data&&o.processData&&"string"!=typeof o.data&&(o.data=r.param(o.data,o.traditional)),Kb(Fb,o,c,y),k)return y;l=r.event&&o.global,l&&0===r.active++&&r.event.trigger("ajaxStart"),o.type=o.type.toUpperCase(),o.hasContent=!Db.test(o.type),f=o.url.replace(zb,""),o.hasContent?o.data&&o.processData&&0===(o.contentType||"").indexOf("application/x-www-form-urlencoded")&&(o.data=o.data.replace(yb,"+")):(n=o.url.slice(f.length),o.data&&(f+=(sb.test(f)?"&":"?")+o.data,delete o.data),o.cache===!1&&(f=f.replace(Ab,""),n=(sb.test(f)?"&":"?")+"_="+rb++ +n),o.url=f+n),o.ifModified&&(r.lastModified[f]&&y.setRequestHeader("If-Modified-Since",r.lastModified[f]),r.etag[f]&&y.setRequestHeader("If-None-Match",r.etag[f])),(o.data&&o.hasContent&&o.contentType!==!1||c.contentType)&&y.setRequestHeader("Content-Type",o.contentType),y.setRequestHeader("Accept",o.dataTypes[0]&&o.accepts[o.dataTypes[0]]?o.accepts[o.dataTypes[0]]+("*"!==o.dataTypes[0]?", "+Hb+"; q=0.01":""):o.accepts["*"]);for(m in o.headers)y.setRequestHeader(m,o.headers[m]);if(o.beforeSend&&(o.beforeSend.call(p,y,o)===!1||k))return y.abort();if(x="abort",t.add(o.complete),y.done(o.success),y.fail(o.error),e=Kb(Gb,o,c,y)){if(y.readyState=1,l&&q.trigger("ajaxSend",[y,o]),k)return y;o.async&&o.timeout>0&&(i=a.setTimeout(function(){y.abort("timeout")},o.timeout));try{k=!1,e.send(v,A)}catch(z){if(k)throw z;A(-1,z)}}else A(-1,"No Transport");function A(b,c,d,h){var j,m,n,v,w,x=c;k||(k=!0,i&&a.clearTimeout(i),e=void 0,g=h||"",y.readyState=b>0?4:0,j=b>=200&&b<300||304===b,d&&(v=Mb(o,y,d)),v=Nb(o,v,y,j),j?(o.ifModified&&(w=y.getResponseHeader("Last-Modified"),w&&(r.lastModified[f]=w),w=y.getResponseHeader("etag"),w&&(r.etag[f]=w)),204===b||"HEAD"===o.type?x="nocontent":304===b?x="notmodified":(x=v.state,m=v.data,n=v.error,j=!n)):(n=x,!b&&x||(x="error",b<0&&(b=0))),y.status=b,y.statusText=(c||x)+"",j?s.resolveWith(p,[m,x,y]):s.rejectWith(p,[y,x,n]),y.statusCode(u),u=void 0,l&&q.trigger(j?"ajaxSuccess":"ajaxError",[y,o,j?m:n]),t.fireWith(p,[y,x]),l&&(q.trigger("ajaxComplete",[y,o]),--r.active||r.event.trigger("ajaxStop")))}return y},getJSON:function(a,b,c){return r.get(a,b,c,"json")},getScript:function(a,b){return r.get(a,void 0,b,"script")}}),r.each(["get","post"],function(a,b){r[b]=function(a,c,d,e){return r.isFunction(c)&&(e=e||d,d=c,c=void 0),r.ajax(r.extend({url:a,type:b,dataType:e,data:c,success:d},r.isPlainObject(a)&&a))}}),r._evalUrl=function(a){return r.ajax({url:a,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},r.fn.extend({wrapAll:function(a){var b;return this[0]&&(r.isFunction(a)&&(a=a.call(this[0])),b=r(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this},wrapInner:function(a){return r.isFunction(a)?this.each(function(b){r(this).wrapInner(a.call(this,b))}):this.each(function(){var b=r(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=r.isFunction(a);return this.each(function(c){r(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(a){return this.parent(a).not("body").each(function(){r(this).replaceWith(this.childNodes)}),this}}),r.expr.pseudos.hidden=function(a){return!r.expr.pseudos.visible(a)},r.expr.pseudos.visible=function(a){return!!(a.offsetWidth||a.offsetHeight||a.getClientRects().length)},r.ajaxSettings.xhr=function(){try{return new a.XMLHttpRequest}catch(b){}};var Ob={0:200,1223:204},Pb=r.ajaxSettings.xhr();o.cors=!!Pb&&"withCredentials"in Pb,o.ajax=Pb=!!Pb,r.ajaxTransport(function(b){var c,d;if(o.cors||Pb&&!b.crossDomain)return{send:function(e,f){var g,h=b.xhr();if(h.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(g in b.xhrFields)h[g]=b.xhrFields[g];b.mimeType&&h.overrideMimeType&&h.overrideMimeType(b.mimeType),b.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest");for(g in e)h.setRequestHeader(g,e[g]);c=function(a){return function(){c&&(c=d=h.onload=h.onerror=h.onabort=h.onreadystatechange=null,"abort"===a?h.abort():"error"===a?"number"!=typeof h.status?f(0,"error"):f(h.status,h.statusText):f(Ob[h.status]||h.status,h.statusText,"text"!==(h.responseType||"text")||"string"!=typeof h.responseText?{binary:h.response}:{text:h.responseText},h.getAllResponseHeaders()))}},h.onload=c(),d=h.onerror=c("error"),void 0!==h.onabort?h.onabort=d:h.onreadystatechange=function(){4===h.readyState&&a.setTimeout(function(){c&&d()})},c=c("abort");try{h.send(b.hasContent&&b.data||null)}catch(i){if(c)throw i}},abort:function(){c&&c()}}}),r.ajaxPrefilter(function(a){a.crossDomain&&(a.contents.script=!1)}),r.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return r.globalEval(a),a}}}),r.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),r.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(e,f){b=r("<script>").prop({charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&f("error"===a.type?404:200,a.type)}),d.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Qb=[],Rb=/(=)\?(?=&|$)|\?\?/;r.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Qb.pop()||r.expando+"_"+rb++;return this[a]=!0,a}}),r.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Rb.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Rb.test(b.data)&&"data");if(h||"jsonp"===b.dataTypes[0])return e=b.jsonpCallback=r.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Rb,"$1"+e):b.jsonp!==!1&&(b.url+=(sb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||r.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?r(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Qb.push(e)),g&&r.isFunction(f)&&f(g[0]),g=f=void 0}),"script"}),o.createHTMLDocument=function(){var a=d.implementation.createHTMLDocument("").body;return a.innerHTML="<form></form><form></form>",2===a.childNodes.length}(),r.parseHTML=function(a,b,c){if("string"!=typeof a)return[];"boolean"==typeof b&&(c=b,b=!1);var e,f,g;return b||(o.createHTMLDocument?(b=d.implementation.createHTMLDocument(""),e=b.createElement("base"),e.href=d.location.href,b.head.appendChild(e)):b=d),f=B.exec(a),g=!c&&[],f?[b.createElement(f[1])]:(f=oa([a],b,g),g&&g.length&&r(g).remove(),r.merge([],f.childNodes))},r.fn.load=function(a,b,c){var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=r.trim(a.slice(h)),a=a.slice(0,h)),r.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&r.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?r("<div>").append(r.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},r.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){r.fn[b]=function(a){return this.on(b,a)}}),r.expr.pseudos.animated=function(a){return r.grep(r.timers,function(b){return a===b.elem}).length};function Sb(a){return r.isWindow(a)?a:9===a.nodeType&&a.defaultView}r.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=r.css(a,"position"),l=r(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=r.css(a,"top"),i=r.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),r.isFunction(b)&&(b=b.call(a,c,r.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},r.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){r.offset.setOffset(this,a,b)});var b,c,d,e,f=this[0];if(f)return f.getClientRects().length?(d=f.getBoundingClientRect(),d.width||d.height?(e=f.ownerDocument,c=Sb(e),b=e.documentElement,{top:d.top+c.pageYOffset-b.clientTop,left:d.left+c.pageXOffset-b.clientLeft}):d):{top:0,left:0}},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===r.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),r.nodeName(a[0],"html")||(d=a.offset()),d={top:d.top+r.css(a[0],"borderTopWidth",!0),left:d.left+r.css(a[0],"borderLeftWidth",!0)}),{top:b.top-d.top-r.css(c,"marginTop",!0),left:b.left-d.left-r.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&"static"===r.css(a,"position"))a=a.offsetParent;return a||pa})}}),r.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c="pageYOffset"===b;r.fn[a]=function(d){return S(this,function(a,d,e){var f=Sb(a);return void 0===e?f?f[b]:a[d]:void(f?f.scrollTo(c?f.pageXOffset:e,c?e:f.pageYOffset):a[d]=e)},a,d,arguments.length)}}),r.each(["top","left"],function(a,b){r.cssHooks[b]=Na(o.pixelPosition,function(a,c){if(c)return c=Ma(a,b),Ka.test(c)?r(a).position()[b]+"px":c})}),r.each({Height:"height",Width:"width"},function(a,b){r.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){r.fn[d]=function(e,f){var g=arguments.length&&(c||"boolean"!=typeof e),h=c||(e===!0||f===!0?"margin":"border");return S(this,function(b,c,e){var f;return r.isWindow(b)?0===d.indexOf("outer")?b["inner"+a]:b.document.documentElement["client"+a]:9===b.nodeType?(f=b.documentElement,Math.max(b.body["scroll"+a],f["scroll"+a],b.body["offset"+a],f["offset"+a],f["client"+a])):void 0===e?r.css(b,c,h):r.style(b,c,e,h)},b,g?e:void 0,g)}})}),r.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}}),r.parseJSON=JSON.parse,"function"==typeof define&&define.amd&&define("jquery",[],function(){return r});var Tb=a.jQuery,Ub=a.$;return r.noConflict=function(b){return a.$===r&&(a.$=Ub),b&&a.jQuery===r&&(a.jQuery=Tb),r},b||(a.jQuery=a.$=r),r});

/*! jQuery Validation Plugin - v1.14.0 - 6/30/2015
 * http://jqueryvalidation.org/
 * Copyright (c) 2015 Jörn Zaefferer; Licensed MIT */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a(jQuery)}(function(a){a.extend(a.fn,{validate:function(b){if(!this.length)return void(b&&b.debug&&window.console&&console.warn("Nothing selected, can't validate, returning nothing."));var c=a.data(this[0],"validator");return c?c:(this.attr("novalidate","novalidate"),c=new a.validator(b,this[0]),a.data(this[0],"validator",c),c.settings.onsubmit&&(this.on("click.validate",":submit",function(b){c.settings.submitHandler&&(c.submitButton=b.target),a(this).hasClass("cancel")&&(c.cancelSubmit=!0),void 0!==a(this).attr("formnovalidate")&&(c.cancelSubmit=!0)}),this.on("submit.validate",function(b){function d(){var d,e;return c.settings.submitHandler?(c.submitButton&&(d=a("<input type='hidden'/>").attr("name",c.submitButton.name).val(a(c.submitButton).val()).appendTo(c.currentForm)),e=c.settings.submitHandler.call(c,c.currentForm,b),c.submitButton&&d.remove(),void 0!==e?e:!1):!0}return c.settings.debug&&b.preventDefault(),c.cancelSubmit?(c.cancelSubmit=!1,d()):c.form()?c.pendingRequest?(c.formSubmitted=!0,!1):d():(c.focusInvalid(),!1)})),c)},valid:function(){var b,c,d;return a(this[0]).is("form")?b=this.validate().form():(d=[],b=!0,c=a(this[0].form).validate(),this.each(function(){b=c.element(this)&&b,d=d.concat(c.errorList)}),c.errorList=d),b},rules:function(b,c){var d,e,f,g,h,i,j=this[0];if(b)switch(d=a.data(j.form,"validator").settings,e=d.rules,f=a.validator.staticRules(j),b){case"add":a.extend(f,a.validator.normalizeRule(c)),delete f.messages,e[j.name]=f,c.messages&&(d.messages[j.name]=a.extend(d.messages[j.name],c.messages));break;case"remove":return c?(i={},a.each(c.split(/\s/),function(b,c){i[c]=f[c],delete f[c],"required"===c&&a(j).removeAttr("aria-required")}),i):(delete e[j.name],f)}return g=a.validator.normalizeRules(a.extend({},a.validator.classRules(j),a.validator.attributeRules(j),a.validator.dataRules(j),a.validator.staticRules(j)),j),g.required&&(h=g.required,delete g.required,g=a.extend({required:h},g),a(j).attr("aria-required","true")),g.remote&&(h=g.remote,delete g.remote,g=a.extend(g,{remote:h})),g}}),a.extend(a.expr[":"],{blank:function(b){return!a.trim(""+a(b).val())},filled:function(b){return!!a.trim(""+a(b).val())},unchecked:function(b){return!a(b).prop("checked")}}),a.validator=function(b,c){this.settings=a.extend(!0,{},a.validator.defaults,b),this.currentForm=c,this.init()},a.validator.format=function(b,c){return 1===arguments.length?function(){var c=a.makeArray(arguments);return c.unshift(b),a.validator.format.apply(this,c)}:(arguments.length>2&&c.constructor!==Array&&(c=a.makeArray(arguments).slice(1)),c.constructor!==Array&&(c=[c]),a.each(c,function(a,c){b=b.replace(new RegExp("\\{"+a+"\\}","g"),function(){return c})}),b)},a.extend(a.validator,{defaults:{messages:{},groups:{},rules:{},errorClass:"error",validClass:"valid",errorElement:"label",focusCleanup:!1,focusInvalid:!0,errorContainer:a([]),errorLabelContainer:a([]),onsubmit:!0,ignore:":hidden",ignoreTitle:!1,onfocusin:function(a){this.lastActive=a,this.settings.focusCleanup&&(this.settings.unhighlight&&this.settings.unhighlight.call(this,a,this.settings.errorClass,this.settings.validClass),this.hideThese(this.errorsFor(a)))},onfocusout:function(a){this.checkable(a)||!(a.name in this.submitted)&&this.optional(a)||this.element(a)},onkeyup:function(b,c){var d=[16,17,18,20,35,36,37,38,39,40,45,144,225];9===c.which&&""===this.elementValue(b)||-1!==a.inArray(c.keyCode,d)||(b.name in this.submitted||b===this.lastElement)&&this.element(b)},onclick:function(a){a.name in this.submitted?this.element(a):a.parentNode.name in this.submitted&&this.element(a.parentNode)},highlight:function(b,c,d){"radio"===b.type?this.findByName(b.name).addClass(c).removeClass(d):a(b).addClass(c).removeClass(d)},unhighlight:function(b,c,d){"radio"===b.type?this.findByName(b.name).removeClass(c).addClass(d):a(b).removeClass(c).addClass(d)}},setDefaults:function(b){a.extend(a.validator.defaults,b)},messages:{required:"This field is required.",remote:"Please fix this field.",email:"Please enter a valid email address.",url:"Please enter a valid URL.",date:"Please enter a valid date.",dateISO:"Please enter a valid date ( ISO ).",number:"Please enter a valid number.",digits:"Please enter only digits.",creditcard:"Please enter a valid credit card number.",equalTo:"Please enter the same value again.",maxlength:a.validator.format("Please enter no more than {0} characters."),minlength:a.validator.format("Please enter at least {0} characters."),rangelength:a.validator.format("Please enter a value between {0} and {1} characters long."),range:a.validator.format("Please enter a value between {0} and {1}."),max:a.validator.format("Please enter a value less than or equal to {0}."),min:a.validator.format("Please enter a value greater than or equal to {0}.")},autoCreateRanges:!1,prototype:{init:function(){function b(b){var c=a.data(this.form,"validator"),d="on"+b.type.replace(/^validate/,""),e=c.settings;e[d]&&!a(this).is(e.ignore)&&e[d].call(c,this,b)}this.labelContainer=a(this.settings.errorLabelContainer),this.errorContext=this.labelContainer.length&&this.labelContainer||a(this.currentForm),this.containers=a(this.settings.errorContainer).add(this.settings.errorLabelContainer),this.submitted={},this.valueCache={},this.pendingRequest=0,this.pending={},this.invalid={},this.reset();var c,d=this.groups={};a.each(this.settings.groups,function(b,c){"string"==typeof c&&(c=c.split(/\s/)),a.each(c,function(a,c){d[c]=b})}),c=this.settings.rules,a.each(c,function(b,d){c[b]=a.validator.normalizeRule(d)}),a(this.currentForm).on("focusin.validate focusout.validate keyup.validate",":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox']",b).on("click.validate","select, option, [type='radio'], [type='checkbox']",b),this.settings.invalidHandler&&a(this.currentForm).on("invalid-form.validate",this.settings.invalidHandler),a(this.currentForm).find("[required], [data-rule-required], .required").attr("aria-required","true")},form:function(){return this.checkForm(),a.extend(this.submitted,this.errorMap),this.invalid=a.extend({},this.errorMap),this.valid()||a(this.currentForm).triggerHandler("invalid-form",[this]),this.showErrors(),this.valid()},checkForm:function(){this.prepareForm();for(var a=0,b=this.currentElements=this.elements();b[a];a++)this.check(b[a]);return this.valid()},element:function(b){var c=this.clean(b),d=this.validationTargetFor(c),e=!0;return this.lastElement=d,void 0===d?delete this.invalid[c.name]:(this.prepareElement(d),this.currentElements=a(d),e=this.check(d)!==!1,e?delete this.invalid[d.name]:this.invalid[d.name]=!0),a(b).attr("aria-invalid",!e),this.numberOfInvalids()||(this.toHide=this.toHide.add(this.containers)),this.showErrors(),e},showErrors:function(b){if(b){a.extend(this.errorMap,b),this.errorList=[];for(var c in b)this.errorList.push({message:b[c],element:this.findByName(c)[0]});this.successList=a.grep(this.successList,function(a){return!(a.name in b)})}this.settings.showErrors?this.settings.showErrors.call(this,this.errorMap,this.errorList):this.defaultShowErrors()},resetForm:function(){a.fn.resetForm&&a(this.currentForm).resetForm(),this.submitted={},this.lastElement=null,this.prepareForm(),this.hideErrors();var b,c=this.elements().removeData("previousValue").removeAttr("aria-invalid");if(this.settings.unhighlight)for(b=0;c[b];b++)this.settings.unhighlight.call(this,c[b],this.settings.errorClass,"");else c.removeClass(this.settings.errorClass)},numberOfInvalids:function(){return this.objectLength(this.invalid)},objectLength:function(a){var b,c=0;for(b in a)c++;return c},hideErrors:function(){this.hideThese(this.toHide)},hideThese:function(a){a.not(this.containers).text(""),this.addWrapper(a).hide()},valid:function(){return 0===this.size()},size:function(){return this.errorList.length},focusInvalid:function(){if(this.settings.focusInvalid)try{a(this.findLastActive()||this.errorList.length&&this.errorList[0].element||[]).filter(":visible").focus().trigger("focusin")}catch(b){}},findLastActive:function(){var b=this.lastActive;return b&&1===a.grep(this.errorList,function(a){return a.element.name===b.name}).length&&b},elements:function(){var b=this,c={};return a(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function(){return!this.name&&b.settings.debug&&window.console&&console.error("%o has no name assigned",this),this.name in c||!b.objectLength(a(this).rules())?!1:(c[this.name]=!0,!0)})},clean:function(b){return a(b)[0]},errors:function(){var b=this.settings.errorClass.split(" ").join(".");return a(this.settings.errorElement+"."+b,this.errorContext)},reset:function(){this.successList=[],this.errorList=[],this.errorMap={},this.toShow=a([]),this.toHide=a([]),this.currentElements=a([])},prepareForm:function(){this.reset(),this.toHide=this.errors().add(this.containers)},prepareElement:function(a){this.reset(),this.toHide=this.errorsFor(a)},elementValue:function(b){var c,d=a(b),e=b.type;return"radio"===e||"checkbox"===e?this.findByName(b.name).filter(":checked").val():"number"===e&&"undefined"!=typeof b.validity?b.validity.badInput?!1:d.val():(c=d.val(),"string"==typeof c?c.replace(/\r/g,""):c)},check:function(b){b=this.validationTargetFor(this.clean(b));var c,d,e,f=a(b).rules(),g=a.map(f,function(a,b){return b}).length,h=!1,i=this.elementValue(b);for(d in f){e={method:d,parameters:f[d]};try{if(c=a.validator.methods[d].call(this,i,b,e.parameters),"dependency-mismatch"===c&&1===g){h=!0;continue}if(h=!1,"pending"===c)return void(this.toHide=this.toHide.not(this.errorsFor(b)));if(!c)return this.formatAndAdd(b,e),!1}catch(j){throw this.settings.debug&&window.console&&console.log("Exception occurred when checking element "+b.id+", check the '"+e.method+"' method.",j),j instanceof TypeError&&(j.message+=".  Exception occurred when checking element "+b.id+", check the '"+e.method+"' method."),j}}if(!h)return this.objectLength(f)&&this.successList.push(b),!0},customDataMessage:function(b,c){return a(b).data("msg"+c.charAt(0).toUpperCase()+c.substring(1).toLowerCase())||a(b).data("msg")},customMessage:function(a,b){var c=this.settings.messages[a];return c&&(c.constructor===String?c:c[b])},findDefined:function(){for(var a=0;a<arguments.length;a++)if(void 0!==arguments[a])return arguments[a];return void 0},defaultMessage:function(b,c){return this.findDefined(this.customMessage(b.name,c),this.customDataMessage(b,c),!this.settings.ignoreTitle&&b.title||void 0,a.validator.messages[c],"<strong>Warning: No message defined for "+b.name+"</strong>")},formatAndAdd:function(b,c){var d=this.defaultMessage(b,c.method),e=/\$?\{(\d+)\}/g;"function"==typeof d?d=d.call(this,c.parameters,b):e.test(d)&&(d=a.validator.format(d.replace(e,"{$1}"),c.parameters)),this.errorList.push({message:d,element:b,method:c.method}),this.errorMap[b.name]=d,this.submitted[b.name]=d},addWrapper:function(a){return this.settings.wrapper&&(a=a.add(a.parent(this.settings.wrapper))),a},defaultShowErrors:function(){var a,b,c;for(a=0;this.errorList[a];a++)c=this.errorList[a],this.settings.highlight&&this.settings.highlight.call(this,c.element,this.settings.errorClass,this.settings.validClass),this.showLabel(c.element,c.message);if(this.errorList.length&&(this.toShow=this.toShow.add(this.containers)),this.settings.success)for(a=0;this.successList[a];a++)this.showLabel(this.successList[a]);if(this.settings.unhighlight)for(a=0,b=this.validElements();b[a];a++)this.settings.unhighlight.call(this,b[a],this.settings.errorClass,this.settings.validClass);this.toHide=this.toHide.not(this.toShow),this.hideErrors(),this.addWrapper(this.toShow).show()},validElements:function(){return this.currentElements.not(this.invalidElements())},invalidElements:function(){return a(this.errorList).map(function(){return this.element})},showLabel:function(b,c){var d,e,f,g=this.errorsFor(b),h=this.idOrName(b),i=a(b).attr("aria-describedby");g.length?(g.removeClass(this.settings.validClass).addClass(this.settings.errorClass),g.html(c)):(g=a("<"+this.settings.errorElement+">").attr("id",h+"-error").addClass(this.settings.errorClass).html(c||""),d=g,this.settings.wrapper&&(d=g.hide().show().wrap("<"+this.settings.wrapper+"/>").parent()),this.labelContainer.length?this.labelContainer.append(d):this.settings.errorPlacement?this.settings.errorPlacement(d,a(b)):d.insertAfter(b),g.is("label")?g.attr("for",h):0===g.parents("label[for='"+h+"']").length&&(f=g.attr("id").replace(/(:|\.|\[|\]|\$)/g,"\\$1"),i?i.match(new RegExp("\\b"+f+"\\b"))||(i+=" "+f):i=f,a(b).attr("aria-describedby",i),e=this.groups[b.name],e&&a.each(this.groups,function(b,c){c===e&&a("[name='"+b+"']",this.currentForm).attr("aria-describedby",g.attr("id"))}))),!c&&this.settings.success&&(g.text(""),"string"==typeof this.settings.success?g.addClass(this.settings.success):this.settings.success(g,b)),this.toShow=this.toShow.add(g)},errorsFor:function(b){var c=this.idOrName(b),d=a(b).attr("aria-describedby"),e="label[for='"+c+"'], label[for='"+c+"'] *";return d&&(e=e+", #"+d.replace(/\s+/g,", #")),this.errors().filter(e)},idOrName:function(a){return this.groups[a.name]||(this.checkable(a)?a.name:a.id||a.name)},validationTargetFor:function(b){return this.checkable(b)&&(b=this.findByName(b.name)),a(b).not(this.settings.ignore)[0]},checkable:function(a){return/radio|checkbox/i.test(a.type)},findByName:function(b){return a(this.currentForm).find("[name='"+b+"']")},getLength:function(b,c){switch(c.nodeName.toLowerCase()){case"select":return a("option:selected",c).length;case"input":if(this.checkable(c))return this.findByName(c.name).filter(":checked").length}return b.length},depend:function(a,b){return this.dependTypes[typeof a]?this.dependTypes[typeof a](a,b):!0},dependTypes:{"boolean":function(a){return a},string:function(b,c){return!!a(b,c.form).length},"function":function(a,b){return a(b)}},optional:function(b){var c=this.elementValue(b);return!a.validator.methods.required.call(this,c,b)&&"dependency-mismatch"},startRequest:function(a){this.pending[a.name]||(this.pendingRequest++,this.pending[a.name]=!0)},stopRequest:function(b,c){this.pendingRequest--,this.pendingRequest<0&&(this.pendingRequest=0),delete this.pending[b.name],c&&0===this.pendingRequest&&this.formSubmitted&&this.form()?(a(this.currentForm).submit(),this.formSubmitted=!1):!c&&0===this.pendingRequest&&this.formSubmitted&&(a(this.currentForm).triggerHandler("invalid-form",[this]),this.formSubmitted=!1)},previousValue:function(b){return a.data(b,"previousValue")||a.data(b,"previousValue",{old:null,valid:!0,message:this.defaultMessage(b,"remote")})},destroy:function(){this.resetForm(),a(this.currentForm).off(".validate").removeData("validator")}},classRuleSettings:{required:{required:!0},email:{email:!0},url:{url:!0},date:{date:!0},dateISO:{dateISO:!0},number:{number:!0},digits:{digits:!0},creditcard:{creditcard:!0}},addClassRules:function(b,c){b.constructor===String?this.classRuleSettings[b]=c:a.extend(this.classRuleSettings,b)},classRules:function(b){var c={},d=a(b).attr("class");return d&&a.each(d.split(" "),function(){this in a.validator.classRuleSettings&&a.extend(c,a.validator.classRuleSettings[this])}),c},normalizeAttributeRule:function(a,b,c,d){/min|max/.test(c)&&(null===b||/number|range|text/.test(b))&&(d=Number(d),isNaN(d)&&(d=void 0)),d||0===d?a[c]=d:b===c&&"range"!==b&&(a[c]=!0)},attributeRules:function(b){var c,d,e={},f=a(b),g=b.getAttribute("type");for(c in a.validator.methods)"required"===c?(d=b.getAttribute(c),""===d&&(d=!0),d=!!d):d=f.attr(c),this.normalizeAttributeRule(e,g,c,d);return e.maxlength&&/-1|2147483647|524288/.test(e.maxlength)&&delete e.maxlength,e},dataRules:function(b){var c,d,e={},f=a(b),g=b.getAttribute("type");for(c in a.validator.methods)d=f.data("rule"+c.charAt(0).toUpperCase()+c.substring(1).toLowerCase()),this.normalizeAttributeRule(e,g,c,d);return e},staticRules:function(b){var c={},d=a.data(b.form,"validator");return d.settings.rules&&(c=a.validator.normalizeRule(d.settings.rules[b.name])||{}),c},normalizeRules:function(b,c){return a.each(b,function(d,e){if(e===!1)return void delete b[d];if(e.param||e.depends){var f=!0;switch(typeof e.depends){case"string":f=!!a(e.depends,c.form).length;break;case"function":f=e.depends.call(c,c)}f?b[d]=void 0!==e.param?e.param:!0:delete b[d]}}),a.each(b,function(d,e){b[d]=a.isFunction(e)?e(c):e}),a.each(["minlength","maxlength"],function(){b[this]&&(b[this]=Number(b[this]))}),a.each(["rangelength","range"],function(){var c;b[this]&&(a.isArray(b[this])?b[this]=[Number(b[this][0]),Number(b[this][1])]:"string"==typeof b[this]&&(c=b[this].replace(/[\[\]]/g,"").split(/[\s,]+/),b[this]=[Number(c[0]),Number(c[1])]))}),a.validator.autoCreateRanges&&(null!=b.min&&null!=b.max&&(b.range=[b.min,b.max],delete b.min,delete b.max),null!=b.minlength&&null!=b.maxlength&&(b.rangelength=[b.minlength,b.maxlength],delete b.minlength,delete b.maxlength)),b},normalizeRule:function(b){if("string"==typeof b){var c={};a.each(b.split(/\s/),function(){c[this]=!0}),b=c}return b},addMethod:function(b,c,d){a.validator.methods[b]=c,a.validator.messages[b]=void 0!==d?d:a.validator.messages[b],c.length<3&&a.validator.addClassRules(b,a.validator.normalizeRule(b))},methods:{required:function(b,c,d){if(!this.depend(d,c))return"dependency-mismatch";if("select"===c.nodeName.toLowerCase()){var e=a(c).val();return e&&e.length>0}return this.checkable(c)?this.getLength(b,c)>0:b.length>0},email:function(a,b){return this.optional(b)||/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(a)},url:function(a,b){return this.optional(b)||/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(a)},date:function(a,b){return this.optional(b)||!/Invalid|NaN/.test(new Date(a).toString())},dateISO:function(a,b){return this.optional(b)||/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(a)},number:function(a,b){return this.optional(b)||/^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(a)},digits:function(a,b){return this.optional(b)||/^\d+$/.test(a)},creditcard:function(a,b){if(this.optional(b))return"dependency-mismatch";if(/[^0-9 \-]+/.test(a))return!1;var c,d,e=0,f=0,g=!1;if(a=a.replace(/\D/g,""),a.length<13||a.length>19)return!1;for(c=a.length-1;c>=0;c--)d=a.charAt(c),f=parseInt(d,10),g&&(f*=2)>9&&(f-=9),e+=f,g=!g;return e%10===0},minlength:function(b,c,d){var e=a.isArray(b)?b.length:this.getLength(b,c);return this.optional(c)||e>=d},maxlength:function(b,c,d){var e=a.isArray(b)?b.length:this.getLength(b,c);return this.optional(c)||d>=e},rangelength:function(b,c,d){var e=a.isArray(b)?b.length:this.getLength(b,c);return this.optional(c)||e>=d[0]&&e<=d[1]},min:function(a,b,c){return this.optional(b)||a>=c},max:function(a,b,c){return this.optional(b)||c>=a},range:function(a,b,c){return this.optional(b)||a>=c[0]&&a<=c[1]},equalTo:function(b,c,d){var e=a(d);return this.settings.onfocusout&&e.off(".validate-equalTo").on("blur.validate-equalTo",function(){a(c).valid()}),b===e.val()},remote:function(b,c,d){if(this.optional(c))return"dependency-mismatch";var e,f,g=this.previousValue(c);return this.settings.messages[c.name]||(this.settings.messages[c.name]={}),g.originalMessage=this.settings.messages[c.name].remote,this.settings.messages[c.name].remote=g.message,d="string"==typeof d&&{url:d}||d,g.old===b?g.valid:(g.old=b,e=this,this.startRequest(c),f={},f[c.name]=b,a.ajax(a.extend(!0,{mode:"abort",port:"validate"+c.name,dataType:"json",data:f,context:e.currentForm,success:function(d){var f,h,i,j=d===!0||"true"===d;e.settings.messages[c.name].remote=g.originalMessage,j?(i=e.formSubmitted,e.prepareElement(c),e.formSubmitted=i,e.successList.push(c),delete e.invalid[c.name],e.showErrors()):(f={},h=d||e.defaultMessage(c,"remote"),f[c.name]=g.message=a.isFunction(h)?h(b):h,e.invalid[c.name]=!0,e.showErrors(f)),g.valid=j,e.stopRequest(c,j)}},d)),"pending")}}});var b,c={};a.ajaxPrefilter?a.ajaxPrefilter(function(a,b,d){var e=a.port;"abort"===a.mode&&(c[e]&&c[e].abort(),c[e]=d)}):(b=a.ajax,a.ajax=function(d){var e=("mode"in d?d:a.ajaxSettings).mode,f=("port"in d?d:a.ajaxSettings).port;return"abort"===e?(c[f]&&c[f].abort(),c[f]=b.apply(this,arguments),c[f]):b.apply(this,arguments)})});
/*! jQuery Validation Plugin - v1.14.0 - 6/30/2015
 * http://jqueryvalidation.org/
 * Copyright (c) 2015 Jörn Zaefferer; Licensed MIT */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./jquery.validate.min"],a):a(jQuery)}(function(a){!function(){function b(a){return a.replace(/<.[^<>]*?>/g," ").replace(/&nbsp;|&#160;/gi," ").replace(/[.(),;:!?%#$'\"_+=\/\-“”’]*/g,"")}a.validator.addMethod("maxWords",function(a,c,d){return this.optional(c)||b(a).match(/\b\w+\b/g).length<=d},a.validator.format("Please enter {0} words or less.")),a.validator.addMethod("minWords",function(a,c,d){return this.optional(c)||b(a).match(/\b\w+\b/g).length>=d},a.validator.format("Please enter at least {0} words.")),a.validator.addMethod("rangeWords",function(a,c,d){var e=b(a),f=/\b\w+\b/g;return this.optional(c)||e.match(f).length>=d[0]&&e.match(f).length<=d[1]},a.validator.format("Please enter between {0} and {1} words."))}(),a.validator.addMethod("accept",function(b,c,d){var e,f,g="string"==typeof d?d.replace(/\s/g,"").replace(/,/g,"|"):"image/*",h=this.optional(c);if(h)return h;if("file"===a(c).attr("type")&&(g=g.replace(/\*/g,".*"),c.files&&c.files.length))for(e=0;e<c.files.length;e++)if(f=c.files[e],!f.type.match(new RegExp("\\.?("+g+")$","i")))return!1;return!0},a.validator.format("Please enter a value with a valid mimetype.")),a.validator.addMethod("alphanumeric",function(a,b){return this.optional(b)||/^\w+$/i.test(a)},"Letters, numbers, and underscores only please"),a.validator.addMethod("bankaccountNL",function(a,b){if(this.optional(b))return!0;if(!/^[0-9]{9}|([0-9]{2} ){3}[0-9]{3}$/.test(a))return!1;var c,d,e,f=a.replace(/ /g,""),g=0,h=f.length;for(c=0;h>c;c++)d=h-c,e=f.substring(c,c+1),g+=d*e;return g%11===0},"Please specify a valid bank account number"),a.validator.addMethod("bankorgiroaccountNL",function(b,c){return this.optional(c)||a.validator.methods.bankaccountNL.call(this,b,c)||a.validator.methods.giroaccountNL.call(this,b,c)},"Please specify a valid bank or giro account number"),a.validator.addMethod("bic",function(a,b){return this.optional(b)||/^([A-Z]{6}[A-Z2-9][A-NP-Z1-2])(X{3}|[A-WY-Z0-9][A-Z0-9]{2})?$/.test(a)},"Please specify a valid BIC code"),a.validator.addMethod("cifES",function(a){"use strict";var b,c,d,e,f,g,h=[];if(a=a.toUpperCase(),!a.match("((^[A-Z]{1}[0-9]{7}[A-Z0-9]{1}$|^[T]{1}[A-Z0-9]{8}$)|^[0-9]{8}[A-Z]{1}$)"))return!1;for(d=0;9>d;d++)h[d]=parseInt(a.charAt(d),10);for(c=h[2]+h[4]+h[6],e=1;8>e;e+=2)f=(2*h[e]).toString(),g=f.charAt(1),c+=parseInt(f.charAt(0),10)+(""===g?0:parseInt(g,10));return/^[ABCDEFGHJNPQRSUVW]{1}/.test(a)?(c+="",b=10-parseInt(c.charAt(c.length-1),10),a+=b,h[8].toString()===String.fromCharCode(64+b)||h[8].toString()===a.charAt(a.length-1)):!1},"Please specify a valid CIF number."),a.validator.addMethod("cpfBR",function(a){if(a=a.replace(/([~!@#$%^&*()_+=`{}\[\]\-|\\:;'<>,.\/? ])+/g,""),11!==a.length)return!1;var b,c,d,e,f=0;if(b=parseInt(a.substring(9,10),10),c=parseInt(a.substring(10,11),10),d=function(a,b){var c=10*a%11;return(10===c||11===c)&&(c=0),c===b},""===a||"00000000000"===a||"11111111111"===a||"22222222222"===a||"33333333333"===a||"44444444444"===a||"55555555555"===a||"66666666666"===a||"77777777777"===a||"88888888888"===a||"99999999999"===a)return!1;for(e=1;9>=e;e++)f+=parseInt(a.substring(e-1,e),10)*(11-e);if(d(f,b)){for(f=0,e=1;10>=e;e++)f+=parseInt(a.substring(e-1,e),10)*(12-e);return d(f,c)}return!1},"Please specify a valid CPF number"),a.validator.addMethod("creditcardtypes",function(a,b,c){if(/[^0-9\-]+/.test(a))return!1;a=a.replace(/\D/g,"");var d=0;return c.mastercard&&(d|=1),c.visa&&(d|=2),c.amex&&(d|=4),c.dinersclub&&(d|=8),c.enroute&&(d|=16),c.discover&&(d|=32),c.jcb&&(d|=64),c.unknown&&(d|=128),c.all&&(d=255),1&d&&/^(5[12345])/.test(a)?16===a.length:2&d&&/^(4)/.test(a)?16===a.length:4&d&&/^(3[47])/.test(a)?15===a.length:8&d&&/^(3(0[012345]|[68]))/.test(a)?14===a.length:16&d&&/^(2(014|149))/.test(a)?15===a.length:32&d&&/^(6011)/.test(a)?16===a.length:64&d&&/^(3)/.test(a)?16===a.length:64&d&&/^(2131|1800)/.test(a)?15===a.length:128&d?!0:!1},"Please enter a valid credit card number."),a.validator.addMethod("currency",function(a,b,c){var d,e="string"==typeof c,f=e?c:c[0],g=e?!0:c[1];return f=f.replace(/,/g,""),f=g?f+"]":f+"]?",d="^["+f+"([1-9]{1}[0-9]{0,2}(\\,[0-9]{3})*(\\.[0-9]{0,2})?|[1-9]{1}[0-9]{0,}(\\.[0-9]{0,2})?|0(\\.[0-9]{0,2})?|(\\.[0-9]{1,2})?)$",d=new RegExp(d),this.optional(b)||d.test(a)},"Please specify a valid currency"),a.validator.addMethod("dateFA",function(a,b){return this.optional(b)||/^[1-4]\d{3}\/((0?[1-6]\/((3[0-1])|([1-2][0-9])|(0?[1-9])))|((1[0-2]|(0?[7-9]))\/(30|([1-2][0-9])|(0?[1-9]))))$/.test(a)},a.validator.messages.date),a.validator.addMethod("dateITA",function(a,b){var c,d,e,f,g,h=!1,i=/^\d{1,2}\/\d{1,2}\/\d{4}$/;return i.test(a)?(c=a.split("/"),d=parseInt(c[0],10),e=parseInt(c[1],10),f=parseInt(c[2],10),g=new Date(Date.UTC(f,e-1,d,12,0,0,0)),h=g.getUTCFullYear()===f&&g.getUTCMonth()===e-1&&g.getUTCDate()===d?!0:!1):h=!1,this.optional(b)||h},a.validator.messages.date),a.validator.addMethod("dateNL",function(a,b){return this.optional(b)||/^(0?[1-9]|[12]\d|3[01])[\.\/\-](0?[1-9]|1[012])[\.\/\-]([12]\d)?(\d\d)$/.test(a)},a.validator.messages.date),a.validator.addMethod("extension",function(a,b,c){return c="string"==typeof c?c.replace(/,/g,"|"):"png|jpe?g|gif",this.optional(b)||a.match(new RegExp("\\.("+c+")$","i"))},a.validator.format("Please enter a value with a valid extension.")),a.validator.addMethod("giroaccountNL",function(a,b){return this.optional(b)||/^[0-9]{1,7}$/.test(a)},"Please specify a valid giro account number"),a.validator.addMethod("iban",function(a,b){if(this.optional(b))return!0;var c,d,e,f,g,h,i,j,k,l=a.replace(/ /g,"").toUpperCase(),m="",n=!0,o="",p="";if(c=l.substring(0,2),h={AL:"\\d{8}[\\dA-Z]{16}",AD:"\\d{8}[\\dA-Z]{12}",AT:"\\d{16}",AZ:"[\\dA-Z]{4}\\d{20}",BE:"\\d{12}",BH:"[A-Z]{4}[\\dA-Z]{14}",BA:"\\d{16}",BR:"\\d{23}[A-Z][\\dA-Z]",BG:"[A-Z]{4}\\d{6}[\\dA-Z]{8}",CR:"\\d{17}",HR:"\\d{17}",CY:"\\d{8}[\\dA-Z]{16}",CZ:"\\d{20}",DK:"\\d{14}",DO:"[A-Z]{4}\\d{20}",EE:"\\d{16}",FO:"\\d{14}",FI:"\\d{14}",FR:"\\d{10}[\\dA-Z]{11}\\d{2}",GE:"[\\dA-Z]{2}\\d{16}",DE:"\\d{18}",GI:"[A-Z]{4}[\\dA-Z]{15}",GR:"\\d{7}[\\dA-Z]{16}",GL:"\\d{14}",GT:"[\\dA-Z]{4}[\\dA-Z]{20}",HU:"\\d{24}",IS:"\\d{22}",IE:"[\\dA-Z]{4}\\d{14}",IL:"\\d{19}",IT:"[A-Z]\\d{10}[\\dA-Z]{12}",KZ:"\\d{3}[\\dA-Z]{13}",KW:"[A-Z]{4}[\\dA-Z]{22}",LV:"[A-Z]{4}[\\dA-Z]{13}",LB:"\\d{4}[\\dA-Z]{20}",LI:"\\d{5}[\\dA-Z]{12}",LT:"\\d{16}",LU:"\\d{3}[\\dA-Z]{13}",MK:"\\d{3}[\\dA-Z]{10}\\d{2}",MT:"[A-Z]{4}\\d{5}[\\dA-Z]{18}",MR:"\\d{23}",MU:"[A-Z]{4}\\d{19}[A-Z]{3}",MC:"\\d{10}[\\dA-Z]{11}\\d{2}",MD:"[\\dA-Z]{2}\\d{18}",ME:"\\d{18}",NL:"[A-Z]{4}\\d{10}",NO:"\\d{11}",PK:"[\\dA-Z]{4}\\d{16}",PS:"[\\dA-Z]{4}\\d{21}",PL:"\\d{24}",PT:"\\d{21}",RO:"[A-Z]{4}[\\dA-Z]{16}",SM:"[A-Z]\\d{10}[\\dA-Z]{12}",SA:"\\d{2}[\\dA-Z]{18}",RS:"\\d{18}",SK:"\\d{20}",SI:"\\d{15}",ES:"\\d{20}",SE:"\\d{20}",CH:"\\d{5}[\\dA-Z]{12}",TN:"\\d{20}",TR:"\\d{5}[\\dA-Z]{17}",AE:"\\d{3}\\d{16}",GB:"[A-Z]{4}\\d{14}",VG:"[\\dA-Z]{4}\\d{16}"},g=h[c],"undefined"!=typeof g&&(i=new RegExp("^[A-Z]{2}\\d{2}"+g+"$",""),!i.test(l)))return!1;for(d=l.substring(4,l.length)+l.substring(0,4),j=0;j<d.length;j++)e=d.charAt(j),"0"!==e&&(n=!1),n||(m+="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ".indexOf(e));for(k=0;k<m.length;k++)f=m.charAt(k),p=""+o+f,o=p%97;return 1===o},"Please specify a valid IBAN"),a.validator.addMethod("integer",function(a,b){return this.optional(b)||/^-?\d+$/.test(a)},"A positive or negative non-decimal number please"),a.validator.addMethod("ipv4",function(a,b){return this.optional(b)||/^(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)$/i.test(a)},"Please enter a valid IP v4 address."),a.validator.addMethod("ipv6",function(a,b){return this.optional(b)||/^((([0-9A-Fa-f]{1,4}:){7}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}:[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){5}:([0-9A-Fa-f]{1,4}:)?[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){4}:([0-9A-Fa-f]{1,4}:){0,2}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){3}:([0-9A-Fa-f]{1,4}:){0,3}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){2}:([0-9A-Fa-f]{1,4}:){0,4}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(([0-9A-Fa-f]{1,4}:){0,5}:((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(::([0-9A-Fa-f]{1,4}:){0,5}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|([0-9A-Fa-f]{1,4}::([0-9A-Fa-f]{1,4}:){0,5}[0-9A-Fa-f]{1,4})|(::([0-9A-Fa-f]{1,4}:){0,6}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){1,7}:))$/i.test(a)},"Please enter a valid IP v6 address."),a.validator.addMethod("lettersonly",function(a,b){return this.optional(b)||/^[a-z]+$/i.test(a)},"Letters only please"),a.validator.addMethod("letterswithbasicpunc",function(a,b){return this.optional(b)||/^[a-z\-.,()'"\s]+$/i.test(a)},"Letters or punctuation only please"),a.validator.addMethod("mobileNL",function(a,b){return this.optional(b)||/^((\+|00(\s|\s?\-\s?)?)31(\s|\s?\-\s?)?(\(0\)[\-\s]?)?|0)6((\s|\s?\-\s?)?[0-9]){8}$/.test(a)},"Please specify a valid mobile number"),a.validator.addMethod("mobileUK",function(a,b){return a=a.replace(/\(|\)|\s+|-/g,""),this.optional(b)||a.length>9&&a.match(/^(?:(?:(?:00\s?|\+)44\s?|0)7(?:[1345789]\d{2}|624)\s?\d{3}\s?\d{3})$/)},"Please specify a valid mobile number"),a.validator.addMethod("nieES",function(a){"use strict";return a=a.toUpperCase(),a.match("((^[A-Z]{1}[0-9]{7}[A-Z0-9]{1}$|^[T]{1}[A-Z0-9]{8}$)|^[0-9]{8}[A-Z]{1}$)")?/^[T]{1}/.test(a)?a[8]===/^[T]{1}[A-Z0-9]{8}$/.test(a):/^[XYZ]{1}/.test(a)?a[8]==="TRWAGMYFPDXBNJZSQVHLCKE".charAt(a.replace("X","0").replace("Y","1").replace("Z","2").substring(0,8)%23):!1:!1},"Please specify a valid NIE number."),a.validator.addMethod("nifES",function(a){"use strict";return a=a.toUpperCase(),a.match("((^[A-Z]{1}[0-9]{7}[A-Z0-9]{1}$|^[T]{1}[A-Z0-9]{8}$)|^[0-9]{8}[A-Z]{1}$)")?/^[0-9]{8}[A-Z]{1}$/.test(a)?"TRWAGMYFPDXBNJZSQVHLCKE".charAt(a.substring(8,0)%23)===a.charAt(8):/^[KLM]{1}/.test(a)?a[8]===String.fromCharCode(64):!1:!1},"Please specify a valid NIF number."),jQuery.validator.addMethod("notEqualTo",function(b,c,d){return this.optional(c)||!a.validator.methods.equalTo.call(this,b,c,d)},"Please enter a different value, values must not be the same."),a.validator.addMethod("nowhitespace",function(a,b){return this.optional(b)||/^\S+$/i.test(a)},"No white space please"),a.validator.addMethod("pattern",function(a,b,c){return this.optional(b)?!0:("string"==typeof c&&(c=new RegExp("^(?:"+c+")$")),c.test(a))},"Invalid format."),a.validator.addMethod("phoneNL",function(a,b){return this.optional(b)||/^((\+|00(\s|\s?\-\s?)?)31(\s|\s?\-\s?)?(\(0\)[\-\s]?)?|0)[1-9]((\s|\s?\-\s?)?[0-9]){8}$/.test(a)},"Please specify a valid phone number."),a.validator.addMethod("phoneUK",function(a,b){return a=a.replace(/\(|\)|\s+|-/g,""),this.optional(b)||a.length>9&&a.match(/^(?:(?:(?:00\s?|\+)44\s?)|(?:\(?0))(?:\d{2}\)?\s?\d{4}\s?\d{4}|\d{3}\)?\s?\d{3}\s?\d{3,4}|\d{4}\)?\s?(?:\d{5}|\d{3}\s?\d{3})|\d{5}\)?\s?\d{4,5})$/)},"Please specify a valid phone number"),a.validator.addMethod("phoneUS",function(a,b){return a=a.replace(/\s+/g,""),this.optional(b)||a.length>9&&a.match(/^(\+?1-?)?(\([2-9]([02-9]\d|1[02-9])\)|[2-9]([02-9]\d|1[02-9]))-?[2-9]([02-9]\d|1[02-9])-?\d{4}$/)},"Please specify a valid phone number"),a.validator.addMethod("phonesUK",function(a,b){return a=a.replace(/\(|\)|\s+|-/g,""),this.optional(b)||a.length>9&&a.match(/^(?:(?:(?:00\s?|\+)44\s?|0)(?:1\d{8,9}|[23]\d{9}|7(?:[1345789]\d{8}|624\d{6})))$/)},"Please specify a valid uk phone number"),a.validator.addMethod("postalCodeCA",function(a,b){return this.optional(b)||/^[ABCEGHJKLMNPRSTVXY]\d[A-Z] \d[A-Z]\d$/.test(a)},"Please specify a valid postal code"),a.validator.addMethod("postalcodeBR",function(a,b){return this.optional(b)||/^\d{2}.\d{3}-\d{3}?$|^\d{5}-?\d{3}?$/.test(a)},"Informe um CEP válido."),a.validator.addMethod("postalcodeIT",function(a,b){return this.optional(b)||/^\d{5}$/.test(a)},"Please specify a valid postal code"),a.validator.addMethod("postalcodeNL",function(a,b){return this.optional(b)||/^[1-9][0-9]{3}\s?[a-zA-Z]{2}$/.test(a)},"Please specify a valid postal code"),a.validator.addMethod("postcodeUK",function(a,b){return this.optional(b)||/^((([A-PR-UWYZ][0-9])|([A-PR-UWYZ][0-9][0-9])|([A-PR-UWYZ][A-HK-Y][0-9])|([A-PR-UWYZ][A-HK-Y][0-9][0-9])|([A-PR-UWYZ][0-9][A-HJKSTUW])|([A-PR-UWYZ][A-HK-Y][0-9][ABEHMNPRVWXY]))\s?([0-9][ABD-HJLNP-UW-Z]{2})|(GIR)\s?(0AA))$/i.test(a)},"Please specify a valid UK postcode"),a.validator.addMethod("require_from_group",function(b,c,d){var e=a(d[1],c.form),f=e.eq(0),g=f.data("valid_req_grp")?f.data("valid_req_grp"):a.extend({},this),h=e.filter(function(){return g.elementValue(this)}).length>=d[0];return f.data("valid_req_grp",g),a(c).data("being_validated")||(e.data("being_validated",!0),e.each(function(){g.element(this)}),e.data("being_validated",!1)),h},a.validator.format("Please fill at least {0} of these fields.")),a.validator.addMethod("skip_or_fill_minimum",function(b,c,d){var e=a(d[1],c.form),f=e.eq(0),g=f.data("valid_skip")?f.data("valid_skip"):a.extend({},this),h=e.filter(function(){return g.elementValue(this)}).length,i=0===h||h>=d[0];return f.data("valid_skip",g),a(c).data("being_validated")||(e.data("being_validated",!0),e.each(function(){g.element(this)}),e.data("being_validated",!1)),i},a.validator.format("Please either skip these fields or fill at least {0} of them.")),a.validator.addMethod("stateUS",function(a,b,c){var d,e="undefined"==typeof c,f=e||"undefined"==typeof c.caseSensitive?!1:c.caseSensitive,g=e||"undefined"==typeof c.includeTerritories?!1:c.includeTerritories,h=e||"undefined"==typeof c.includeMilitary?!1:c.includeMilitary;return d=g||h?g&&h?"^(A[AEKLPRSZ]|C[AOT]|D[CE]|FL|G[AU]|HI|I[ADLN]|K[SY]|LA|M[ADEINOPST]|N[CDEHJMVY]|O[HKR]|P[AR]|RI|S[CD]|T[NX]|UT|V[AIT]|W[AIVY])$":g?"^(A[KLRSZ]|C[AOT]|D[CE]|FL|G[AU]|HI|I[ADLN]|K[SY]|LA|M[ADEINOPST]|N[CDEHJMVY]|O[HKR]|P[AR]|RI|S[CD]|T[NX]|UT|V[AIT]|W[AIVY])$":"^(A[AEKLPRZ]|C[AOT]|D[CE]|FL|GA|HI|I[ADLN]|K[SY]|LA|M[ADEINOST]|N[CDEHJMVY]|O[HKR]|PA|RI|S[CD]|T[NX]|UT|V[AT]|W[AIVY])$":"^(A[KLRZ]|C[AOT]|D[CE]|FL|GA|HI|I[ADLN]|K[SY]|LA|M[ADEINOST]|N[CDEHJMVY]|O[HKR]|PA|RI|S[CD]|T[NX]|UT|V[AT]|W[AIVY])$",d=f?new RegExp(d):new RegExp(d,"i"),this.optional(b)||d.test(a)},"Please specify a valid state"),a.validator.addMethod("strippedminlength",function(b,c,d){return a(b).text().length>=d},a.validator.format("Please enter at least {0} characters")),a.validator.addMethod("time",function(a,b){return this.optional(b)||/^([01]\d|2[0-3]|[0-9])(:[0-5]\d){1,2}$/.test(a)},"Please enter a valid time, between 00:00 and 23:59"),a.validator.addMethod("time12h",function(a,b){return this.optional(b)||/^((0?[1-9]|1[012])(:[0-5]\d){1,2}(\ ?[AP]M))$/i.test(a)},"Please enter a valid time in 12-hour am/pm format"),a.validator.addMethod("url2",function(a,b){return this.optional(b)||/^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)*(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(a)},a.validator.messages.url),a.validator.addMethod("vinUS",function(a){if(17!==a.length)return!1;var b,c,d,e,f,g,h=["A","B","C","D","E","F","G","H","J","K","L","M","N","P","R","S","T","U","V","W","X","Y","Z"],i=[1,2,3,4,5,6,7,8,1,2,3,4,5,7,9,2,3,4,5,6,7,8,9],j=[8,7,6,5,4,3,2,10,0,9,8,7,6,5,4,3,2],k=0;for(b=0;17>b;b++){if(e=j[b],d=a.slice(b,b+1),8===b&&(g=d),isNaN(d)){for(c=0;c<h.length;c++)if(d.toUpperCase()===h[c]){d=i[c],d*=e,isNaN(g)&&8===c&&(g=h[c]);break}}else d*=e;k+=d}return f=k%11,10===f&&(f="X"),f===g?!0:!1},"The specified vehicle identification number (VIN) is invalid."),a.validator.addMethod("zipcodeUS",function(a,b){return this.optional(b)||/^\d{5}(-\d{4})?$/.test(a)},"The specified US ZIP Code is invalid"),a.validator.addMethod("ziprange",function(a,b){return this.optional(b)||/^90[2-5]\d\{2\}-\d{4}$/.test(a)},"Your ZIP-code must be in the range 902xx-xxxx to 905xx-xxxx")});
/*!
 * Bootstrap v3.3.7 (http://getbootstrap.com)
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under the MIT license
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(a){"use strict";var b=a.fn.jquery.split(" ")[0].split(".");if(b[0]<2&&b[1]<9||1==b[0]&&9==b[1]&&b[2]<1||b[0]>3)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")}(jQuery),+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one("bsTransitionEnd",function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b(),a.support.transition&&(a.event.special.bsTransitionEnd={bindType:a.support.transition.end,delegateType:a.support.transition.end,handle:function(b){if(a(b.target).is(this))return b.handleObj.handler.apply(this,arguments)}})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var c=a(this),e=c.data("bs.alert");e||c.data("bs.alert",e=new d(this)),"string"==typeof b&&e[b].call(c)})}var c='[data-dismiss="alert"]',d=function(b){a(b).on("click",c,this.close)};d.VERSION="3.3.7",d.TRANSITION_DURATION=150,d.prototype.close=function(b){function c(){g.detach().trigger("closed.bs.alert").remove()}var e=a(this),f=e.attr("data-target");f||(f=e.attr("href"),f=f&&f.replace(/.*(?=#[^\s]*$)/,""));var g=a("#"===f?[]:f);b&&b.preventDefault(),g.length||(g=e.closest(".alert")),g.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(g.removeClass("in"),a.support.transition&&g.hasClass("fade")?g.one("bsTransitionEnd",c).emulateTransitionEnd(d.TRANSITION_DURATION):c())};var e=a.fn.alert;a.fn.alert=b,a.fn.alert.Constructor=d,a.fn.alert.noConflict=function(){return a.fn.alert=e,this},a(document).on("click.bs.alert.data-api",c,d.prototype.close)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof b&&b;e||d.data("bs.button",e=new c(this,f)),"toggle"==b?e.toggle():b&&e.setState(b)})}var c=function(b,d){this.$element=a(b),this.options=a.extend({},c.DEFAULTS,d),this.isLoading=!1};c.VERSION="3.3.7",c.DEFAULTS={loadingText:"loading..."},c.prototype.setState=function(b){var c="disabled",d=this.$element,e=d.is("input")?"val":"html",f=d.data();b+="Text",null==f.resetText&&d.data("resetText",d[e]()),setTimeout(a.proxy(function(){d[e](null==f[b]?this.options[b]:f[b]),"loadingText"==b?(this.isLoading=!0,d.addClass(c).attr(c,c).prop(c,!0)):this.isLoading&&(this.isLoading=!1,d.removeClass(c).removeAttr(c).prop(c,!1))},this),0)},c.prototype.toggle=function(){var a=!0,b=this.$element.closest('[data-toggle="buttons"]');if(b.length){var c=this.$element.find("input");"radio"==c.prop("type")?(c.prop("checked")&&(a=!1),b.find(".active").removeClass("active"),this.$element.addClass("active")):"checkbox"==c.prop("type")&&(c.prop("checked")!==this.$element.hasClass("active")&&(a=!1),this.$element.toggleClass("active")),c.prop("checked",this.$element.hasClass("active")),a&&c.trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active")),this.$element.toggleClass("active")};var d=a.fn.button;a.fn.button=b,a.fn.button.Constructor=c,a.fn.button.noConflict=function(){return a.fn.button=d,this},a(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(c){var d=a(c.target).closest(".btn");b.call(d,"toggle"),a(c.target).is('input[type="radio"], input[type="checkbox"]')||(c.preventDefault(),d.is("input,button")?d.trigger("focus"):d.find("input:visible,button:visible").first().trigger("focus"))}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(b){a(b.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(b.type))})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},c.DEFAULTS,d.data(),"object"==typeof b&&b),g="string"==typeof b?b:f.slide;e||d.data("bs.carousel",e=new c(this,f)),"number"==typeof b?e.to(b):g?e[g]():f.interval&&e.pause().cycle()})}var c=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=null,this.sliding=null,this.interval=null,this.$active=null,this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",a.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",a.proxy(this.pause,this)).on("mouseleave.bs.carousel",a.proxy(this.cycle,this))};c.VERSION="3.3.7",c.TRANSITION_DURATION=600,c.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},c.prototype.keydown=function(a){if(!/input|textarea/i.test(a.target.tagName)){switch(a.which){case 37:this.prev();break;case 39:this.next();break;default:return}a.preventDefault()}},c.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},c.prototype.getItemIndex=function(a){return this.$items=a.parent().children(".item"),this.$items.index(a||this.$active)},c.prototype.getItemForDirection=function(a,b){var c=this.getItemIndex(b),d="prev"==a&&0===c||"next"==a&&c==this.$items.length-1;if(d&&!this.options.wrap)return b;var e="prev"==a?-1:1,f=(c+e)%this.$items.length;return this.$items.eq(f)},c.prototype.to=function(a){var b=this,c=this.getItemIndex(this.$active=this.$element.find(".item.active"));if(!(a>this.$items.length-1||a<0))return this.sliding?this.$element.one("slid.bs.carousel",function(){b.to(a)}):c==a?this.pause().cycle():this.slide(a>c?"next":"prev",this.$items.eq(a))},c.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},c.prototype.next=function(){if(!this.sliding)return this.slide("next")},c.prototype.prev=function(){if(!this.sliding)return this.slide("prev")},c.prototype.slide=function(b,d){var e=this.$element.find(".item.active"),f=d||this.getItemForDirection(b,e),g=this.interval,h="next"==b?"left":"right",i=this;if(f.hasClass("active"))return this.sliding=!1;var j=f[0],k=a.Event("slide.bs.carousel",{relatedTarget:j,direction:h});if(this.$element.trigger(k),!k.isDefaultPrevented()){if(this.sliding=!0,g&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var l=a(this.$indicators.children()[this.getItemIndex(f)]);l&&l.addClass("active")}var m=a.Event("slid.bs.carousel",{relatedTarget:j,direction:h});return a.support.transition&&this.$element.hasClass("slide")?(f.addClass(b),f[0].offsetWidth,e.addClass(h),f.addClass(h),e.one("bsTransitionEnd",function(){f.removeClass([b,h].join(" ")).addClass("active"),e.removeClass(["active",h].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger(m)},0)}).emulateTransitionEnd(c.TRANSITION_DURATION)):(e.removeClass("active"),f.addClass("active"),this.sliding=!1,this.$element.trigger(m)),g&&this.cycle(),this}};var d=a.fn.carousel;a.fn.carousel=b,a.fn.carousel.Constructor=c,a.fn.carousel.noConflict=function(){return a.fn.carousel=d,this};var e=function(c){var d,e=a(this),f=a(e.attr("data-target")||(d=e.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""));if(f.hasClass("carousel")){var g=a.extend({},f.data(),e.data()),h=e.attr("data-slide-to");h&&(g.interval=!1),b.call(f,g),h&&f.data("bs.carousel").to(h),c.preventDefault()}};a(document).on("click.bs.carousel.data-api","[data-slide]",e).on("click.bs.carousel.data-api","[data-slide-to]",e),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var c=a(this);b.call(c,c.data())})})}(jQuery),+function(a){"use strict";function b(b){var c,d=b.attr("data-target")||(c=b.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"");return a(d)}function c(b){return this.each(function(){var c=a(this),e=c.data("bs.collapse"),f=a.extend({},d.DEFAULTS,c.data(),"object"==typeof b&&b);!e&&f.toggle&&/show|hide/.test(b)&&(f.toggle=!1),e||c.data("bs.collapse",e=new d(this,f)),"string"==typeof b&&e[b]()})}var d=function(b,c){this.$element=a(b),this.options=a.extend({},d.DEFAULTS,c),this.$trigger=a('[data-toggle="collapse"][href="#'+b.id+'"],[data-toggle="collapse"][data-target="#'+b.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};d.VERSION="3.3.7",d.TRANSITION_DURATION=350,d.DEFAULTS={toggle:!0},d.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},d.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b,e=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(e&&e.length&&(b=e.data("bs.collapse"),b&&b.transitioning))){var f=a.Event("show.bs.collapse");if(this.$element.trigger(f),!f.isDefaultPrevented()){e&&e.length&&(c.call(e,"hide"),b||e.data("bs.collapse",null));var g=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var h=function(){this.$element.removeClass("collapsing").addClass("collapse in")[g](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return h.call(this);var i=a.camelCase(["scroll",g].join("-"));this.$element.one("bsTransitionEnd",a.proxy(h,this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])}}}},d.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var e=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};return a.support.transition?void this.$element[c](0).one("bsTransitionEnd",a.proxy(e,this)).emulateTransitionEnd(d.TRANSITION_DURATION):e.call(this)}}},d.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},d.prototype.getParent=function(){return a(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(a.proxy(function(c,d){var e=a(d);this.addAriaAndCollapsedClass(b(e),e)},this)).end()},d.prototype.addAriaAndCollapsedClass=function(a,b){var c=a.hasClass("in");a.attr("aria-expanded",c),b.toggleClass("collapsed",!c).attr("aria-expanded",c)};var e=a.fn.collapse;a.fn.collapse=c,a.fn.collapse.Constructor=d,a.fn.collapse.noConflict=function(){return a.fn.collapse=e,this},a(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(d){var e=a(this);e.attr("data-target")||d.preventDefault();var f=b(e),g=f.data("bs.collapse"),h=g?"toggle":e.data();c.call(f,h)})}(jQuery),+function(a){"use strict";function b(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}function c(c){c&&3===c.which||(a(e).remove(),a(f).each(function(){var d=a(this),e=b(d),f={relatedTarget:this};e.hasClass("open")&&(c&&"click"==c.type&&/input|textarea/i.test(c.target.tagName)&&a.contains(e[0],c.target)||(e.trigger(c=a.Event("hide.bs.dropdown",f)),c.isDefaultPrevented()||(d.attr("aria-expanded","false"),e.removeClass("open").trigger(a.Event("hidden.bs.dropdown",f)))))}))}function d(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new g(this)),"string"==typeof b&&d[b].call(c)})}var e=".dropdown-backdrop",f='[data-toggle="dropdown"]',g=function(b){a(b).on("click.bs.dropdown",this.toggle)};g.VERSION="3.3.7",g.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=b(e),g=f.hasClass("open");if(c(),!g){"ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click",c);var h={relatedTarget:this};if(f.trigger(d=a.Event("show.bs.dropdown",h)),d.isDefaultPrevented())return;e.trigger("focus").attr("aria-expanded","true"),f.toggleClass("open").trigger(a.Event("shown.bs.dropdown",h))}return!1}},g.prototype.keydown=function(c){if(/(38|40|27|32)/.test(c.which)&&!/input|textarea/i.test(c.target.tagName)){var d=a(this);if(c.preventDefault(),c.stopPropagation(),!d.is(".disabled, :disabled")){var e=b(d),g=e.hasClass("open");if(!g&&27!=c.which||g&&27==c.which)return 27==c.which&&e.find(f).trigger("focus"),d.trigger("click");var h=" li:not(.disabled):visible a",i=e.find(".dropdown-menu"+h);if(i.length){var j=i.index(c.target);38==c.which&&j>0&&j--,40==c.which&&j<i.length-1&&j++,~j||(j=0),i.eq(j).trigger("focus")}}}};var h=a.fn.dropdown;a.fn.dropdown=d,a.fn.dropdown.Constructor=g,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=h,this},a(document).on("click.bs.dropdown.data-api",c).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",f,g.prototype.toggle).on("keydown.bs.dropdown.data-api",f,g.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",g.prototype.keydown)}(jQuery),+function(a){"use strict";function b(b,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},c.DEFAULTS,e.data(),"object"==typeof b&&b);f||e.data("bs.modal",f=new c(this,g)),"string"==typeof b?f[b](d):g.show&&f.show(d)})}var c=function(b,c){this.options=c,this.$body=a(document.body),this.$element=a(b),this.$dialog=this.$element.find(".modal-dialog"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};c.VERSION="3.3.7",c.TRANSITION_DURATION=300,c.BACKDROP_TRANSITION_DURATION=150,c.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},c.prototype.toggle=function(a){return this.isShown?this.hide():this.show(a)},c.prototype.show=function(b){var d=this,e=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(e),this.isShown||e.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",function(){d.$element.one("mouseup.dismiss.bs.modal",function(b){a(b.target).is(d.$element)&&(d.ignoreBackdropClick=!0)})}),this.backdrop(function(){var e=a.support.transition&&d.$element.hasClass("fade");d.$element.parent().length||d.$element.appendTo(d.$body),d.$element.show().scrollTop(0),d.adjustDialog(),e&&d.$element[0].offsetWidth,d.$element.addClass("in"),d.enforceFocus();var f=a.Event("shown.bs.modal",{relatedTarget:b});e?d.$dialog.one("bsTransitionEnd",function(){d.$element.trigger("focus").trigger(f)}).emulateTransitionEnd(c.TRANSITION_DURATION):d.$element.trigger("focus").trigger(f)}))},c.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",a.proxy(this.hideModal,this)).emulateTransitionEnd(c.TRANSITION_DURATION):this.hideModal())},c.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){document===a.target||this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.trigger("focus")},this))},c.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},c.prototype.resize=function(){this.isShown?a(window).on("resize.bs.modal",a.proxy(this.handleUpdate,this)):a(window).off("resize.bs.modal")},c.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.$body.removeClass("modal-open"),a.resetAdjustments(),a.resetScrollbar(),a.$element.trigger("hidden.bs.modal")})},c.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},c.prototype.backdrop=function(b){var d=this,e=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var f=a.support.transition&&e;if(this.$backdrop=a(document.createElement("div")).addClass("modal-backdrop "+e).appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",a.proxy(function(a){return this.ignoreBackdropClick?void(this.ignoreBackdropClick=!1):void(a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide()))},this)),f&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;f?this.$backdrop.one("bsTransitionEnd",b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):b()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var g=function(){d.removeBackdrop(),b&&b()};a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):g()}else b&&b()},c.prototype.handleUpdate=function(){this.adjustDialog()},c.prototype.adjustDialog=function(){var a=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&a?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!a?this.scrollbarWidth:""})},c.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},c.prototype.checkScrollbar=function(){var a=window.innerWidth;if(!a){var b=document.documentElement.getBoundingClientRect();a=b.right-Math.abs(b.left)}this.bodyIsOverflowing=document.body.clientWidth<a,this.scrollbarWidth=this.measureScrollbar()},c.prototype.setScrollbar=function(){var a=parseInt(this.$body.css("padding-right")||0,10);this.originalBodyPad=document.body.style.paddingRight||"",this.bodyIsOverflowing&&this.$body.css("padding-right",a+this.scrollbarWidth)},c.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad)},c.prototype.measureScrollbar=function(){var a=document.createElement("div");a.className="modal-scrollbar-measure",this.$body.append(a);var b=a.offsetWidth-a.clientWidth;return this.$body[0].removeChild(a),b};var d=a.fn.modal;a.fn.modal=b,a.fn.modal.Constructor=c,a.fn.modal.noConflict=function(){return a.fn.modal=d,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(c){var d=a(this),e=d.attr("href"),f=a(d.attr("data-target")||e&&e.replace(/.*(?=#[^\s]+$)/,"")),g=f.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(e)&&e},f.data(),d.data());d.is("a")&&c.preventDefault(),f.one("show.bs.modal",function(a){a.isDefaultPrevented()||f.one("hidden.bs.modal",function(){d.is(":visible")&&d.trigger("focus")})}),b.call(f,g,this)})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof b&&b;!e&&/destroy|hide/.test(b)||(e||d.data("bs.tooltip",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.inState=null,this.init("tooltip",a,b)};c.VERSION="3.3.7",c.TRANSITION_DURATION=150,c.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},c.prototype.init=function(b,c,d){if(this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d),this.$viewport=this.options.viewport&&a(a.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):this.options.viewport.selector||this.options.viewport),this.inState={click:!1,hover:!1,focus:!1},this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},c.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},c.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusin"==b.type?"focus":"hover"]=!0),c.tip().hasClass("in")||"in"==c.hoverState?void(c.hoverState="in"):(clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show)):c.show())},c.prototype.isInStateTrue=function(){for(var a in this.inState)if(this.inState[a])return!0;return!1},c.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);if(c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusout"==b.type?"focus":"hover"]=!1),!c.isInStateTrue())return clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide)):c.hide()},c.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(b);var d=a.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(b.isDefaultPrevented()||!d)return;var e=this,f=this.tip(),g=this.getUID(this.type);this.setContent(),f.attr("id",g),this.$element.attr("aria-describedby",g),this.options.animation&&f.addClass("fade");var h="function"==typeof this.options.placement?this.options.placement.call(this,f[0],this.$element[0]):this.options.placement,i=/\s?auto?\s?/i,j=i.test(h);j&&(h=h.replace(i,"")||"top"),f.detach().css({top:0,left:0,display:"block"}).addClass(h).data("bs."+this.type,this),this.options.container?f.appendTo(this.options.container):f.insertAfter(this.$element),this.$element.trigger("inserted.bs."+this.type);var k=this.getPosition(),l=f[0].offsetWidth,m=f[0].offsetHeight;if(j){var n=h,o=this.getPosition(this.$viewport);h="bottom"==h&&k.bottom+m>o.bottom?"top":"top"==h&&k.top-m<o.top?"bottom":"right"==h&&k.right+l>o.width?"left":"left"==h&&k.left-l<o.left?"right":h,f.removeClass(n).addClass(h)}var p=this.getCalculatedOffset(h,k,l,m);this.applyPlacement(p,h);var q=function(){var a=e.hoverState;e.$element.trigger("shown.bs."+e.type),e.hoverState=null,"out"==a&&e.leave(e)};a.support.transition&&this.$tip.hasClass("fade")?f.one("bsTransitionEnd",q).emulateTransitionEnd(c.TRANSITION_DURATION):q()}},c.prototype.applyPlacement=function(b,c){var d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css("margin-top"),10),h=parseInt(d.css("margin-left"),10);isNaN(g)&&(g=0),isNaN(h)&&(h=0),b.top+=g,b.left+=h,a.offset.setOffset(d[0],a.extend({using:function(a){d.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),d.addClass("in");var i=d[0].offsetWidth,j=d[0].offsetHeight;"top"==c&&j!=f&&(b.top=b.top+f-j);var k=this.getViewportAdjustedDelta(c,b,i,j);k.left?b.left+=k.left:b.top+=k.top;var l=/top|bottom/.test(c),m=l?2*k.left-e+i:2*k.top-f+j,n=l?"offsetWidth":"offsetHeight";d.offset(b),this.replaceArrow(m,d[0][n],l)},c.prototype.replaceArrow=function(a,b,c){this.arrow().css(c?"left":"top",50*(1-a/b)+"%").css(c?"top":"left","")},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},c.prototype.hide=function(b){function d(){"in"!=e.hoverState&&f.detach(),e.$element&&e.$element.removeAttr("aria-describedby").trigger("hidden.bs."+e.type),b&&b()}var e=this,f=a(this.$tip),g=a.Event("hide.bs."+this.type);if(this.$element.trigger(g),!g.isDefaultPrevented())return f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one("bsTransitionEnd",d).emulateTransitionEnd(c.TRANSITION_DURATION):d(),this.hoverState=null,this},c.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},c.prototype.hasContent=function(){return this.getTitle()},c.prototype.getPosition=function(b){b=b||this.$element;var c=b[0],d="BODY"==c.tagName,e=c.getBoundingClientRect();null==e.width&&(e=a.extend({},e,{width:e.right-e.left,height:e.bottom-e.top}));var f=window.SVGElement&&c instanceof window.SVGElement,g=d?{top:0,left:0}:f?null:b.offset(),h={scroll:d?document.documentElement.scrollTop||document.body.scrollTop:b.scrollTop()},i=d?{width:a(window).width(),height:a(window).height()}:null;return a.extend({},e,h,i,g)},c.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},c.prototype.getViewportAdjustedDelta=function(a,b,c,d){var e={top:0,left:0};if(!this.$viewport)return e;var f=this.options.viewport&&this.options.viewport.padding||0,g=this.getPosition(this.$viewport);if(/right|left/.test(a)){var h=b.top-f-g.scroll,i=b.top+f-g.scroll+d;h<g.top?e.top=g.top-h:i>g.top+g.height&&(e.top=g.top+g.height-i)}else{var j=b.left-f,k=b.left+f+c;j<g.left?e.left=g.left-j:k>g.right&&(e.left=g.left+g.width-k)}return e},c.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},c.prototype.getUID=function(a){do a+=~~(1e6*Math.random());while(document.getElementById(a));return a},c.prototype.tip=function(){if(!this.$tip&&(this.$tip=a(this.options.template),1!=this.$tip.length))throw new Error(this.type+" `template` option must consist of exactly 1 top-level element!");return this.$tip},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},c.prototype.enable=function(){this.enabled=!0},c.prototype.disable=function(){this.enabled=!1},c.prototype.toggleEnabled=function(){this.enabled=!this.enabled},c.prototype.toggle=function(b){var c=this;b&&(c=a(b.currentTarget).data("bs."+this.type),c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c))),b?(c.inState.click=!c.inState.click,c.isInStateTrue()?c.enter(c):c.leave(c)):c.tip().hasClass("in")?c.leave(c):c.enter(c)},c.prototype.destroy=function(){var a=this;clearTimeout(this.timeout),this.hide(function(){a.$element.off("."+a.type).removeData("bs."+a.type),a.$tip&&a.$tip.detach(),a.$tip=null,a.$arrow=null,a.$viewport=null,a.$element=null})};var d=a.fn.tooltip;a.fn.tooltip=b,a.fn.tooltip.Constructor=c,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=d,this}}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof b&&b;!e&&/destroy|hide/.test(b)||(e||d.data("bs.popover",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");c.VERSION="3.3.7",c.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),c.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),c.prototype.constructor=c,c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof c?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},c.prototype.hasContent=function(){return this.getTitle()||this.getContent()},c.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};var d=a.fn.popover;a.fn.popover=b,a.fn.popover.Constructor=c,a.fn.popover.noConflict=function(){return a.fn.popover=d,this}}(jQuery),+function(a){"use strict";function b(c,d){this.$body=a(document.body),this.$scrollElement=a(a(c).is(document.body)?window:c),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",a.proxy(this.process,this)),this.refresh(),this.process()}function c(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})}b.VERSION="3.3.7",b.DEFAULTS={offset:10},b.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},b.prototype.refresh=function(){var b=this,c="offset",d=0;this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),a.isWindow(this.$scrollElement[0])||(c="position",d=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var b=a(this),e=b.data("target")||b.attr("href"),f=/^#./.test(e)&&a(e);return f&&f.length&&f.is(":visible")&&[[f[c]().top+d,e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){b.offsets.push(this[0]),b.targets.push(this[1])})},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.getScrollHeight(),d=this.options.offset+c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(this.scrollHeight!=c&&this.refresh(),b>=d)return g!=(a=f[f.length-1])&&this.activate(a);if(g&&b<e[0])return this.activeTarget=null,this.clear();for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(void 0===e[a+1]||b<e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){
this.activeTarget=b,this.clear();var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate.bs.scrollspy")},b.prototype.clear=function(){a(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var d=a.fn.scrollspy;a.fn.scrollspy=c,a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=d,this},a(window).on("load.bs.scrollspy.data-api",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);c.call(b,b.data())})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new c(this)),"string"==typeof b&&e[b]()})}var c=function(b){this.element=a(b)};c.VERSION="3.3.7",c.TRANSITION_DURATION=150,c.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a"),f=a.Event("hide.bs.tab",{relatedTarget:b[0]}),g=a.Event("show.bs.tab",{relatedTarget:e[0]});if(e.trigger(f),b.trigger(g),!g.isDefaultPrevented()&&!f.isDefaultPrevented()){var h=a(d);this.activate(b.closest("li"),c),this.activate(h,h.parent(),function(){e.trigger({type:"hidden.bs.tab",relatedTarget:b[0]}),b.trigger({type:"shown.bs.tab",relatedTarget:e[0]})})}}},c.prototype.activate=function(b,d,e){function f(){g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),h?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu").length&&b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),e&&e()}var g=d.find("> .active"),h=e&&a.support.transition&&(g.length&&g.hasClass("fade")||!!d.find("> .fade").length);g.length&&h?g.one("bsTransitionEnd",f).emulateTransitionEnd(c.TRANSITION_DURATION):f(),g.removeClass("in")};var d=a.fn.tab;a.fn.tab=b,a.fn.tab.Constructor=c,a.fn.tab.noConflict=function(){return a.fn.tab=d,this};var e=function(c){c.preventDefault(),b.call(a(this),"show")};a(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',e).on("click.bs.tab.data-api",'[data-toggle="pill"]',e)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof b&&b;e||d.data("bs.affix",e=new c(this,f)),"string"==typeof b&&e[b]()})}var c=function(b,d){this.options=a.extend({},c.DEFAULTS,d),this.$target=a(this.options.target).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(b),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition()};c.VERSION="3.3.7",c.RESET="affix affix-top affix-bottom",c.DEFAULTS={offset:0,target:window},c.prototype.getState=function(a,b,c,d){var e=this.$target.scrollTop(),f=this.$element.offset(),g=this.$target.height();if(null!=c&&"top"==this.affixed)return e<c&&"top";if("bottom"==this.affixed)return null!=c?!(e+this.unpin<=f.top)&&"bottom":!(e+g<=a-d)&&"bottom";var h=null==this.affixed,i=h?e:f.top,j=h?g:b;return null!=c&&e<=c?"top":null!=d&&i+j>=a-d&&"bottom"},c.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(c.RESET).addClass("affix");var a=this.$target.scrollTop(),b=this.$element.offset();return this.pinnedOffset=b.top-a},c.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},c.prototype.checkPosition=function(){if(this.$element.is(":visible")){var b=this.$element.height(),d=this.options.offset,e=d.top,f=d.bottom,g=Math.max(a(document).height(),a(document.body).height());"object"!=typeof d&&(f=e=d),"function"==typeof e&&(e=d.top(this.$element)),"function"==typeof f&&(f=d.bottom(this.$element));var h=this.getState(g,b,e,f);if(this.affixed!=h){null!=this.unpin&&this.$element.css("top","");var i="affix"+(h?"-"+h:""),j=a.Event(i+".bs.affix");if(this.$element.trigger(j),j.isDefaultPrevented())return;this.affixed=h,this.unpin="bottom"==h?this.getPinnedOffset():null,this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix","affixed")+".bs.affix")}"bottom"==h&&this.$element.offset({top:g-b-f})}};var d=a.fn.affix;a.fn.affix=b,a.fn.affix.Constructor=c,a.fn.affix.noConflict=function(){return a.fn.affix=d,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var c=a(this),d=c.data();d.offset=d.offset||{},null!=d.offsetBottom&&(d.offset.bottom=d.offsetBottom),null!=d.offsetTop&&(d.offset.top=d.offsetTop),b.call(c,d)})})}(jQuery);
/*
 AngularJS v1.5.8
 (c) 2010-2016 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(C){'use strict';function N(a){return function(){var b=arguments[0],d;d="["+(a?a+":":"")+b+"] http://errors.angularjs.org/1.5.8/"+(a?a+"/":"")+b;for(b=1;b<arguments.length;b++){d=d+(1==b?"?":"&")+"p"+(b-1)+"=";var c=encodeURIComponent,e;e=arguments[b];e="function"==typeof e?e.toString().replace(/ \{[\s\S]*$/,""):"undefined"==typeof e?"undefined":"string"!=typeof e?JSON.stringify(e):e;d+=c(e)}return Error(d)}}function ta(a){if(null==a||Va(a))return!1;if(L(a)||G(a)||F&&a instanceof F)return!0;
var b="length"in Object(a)&&a.length;return T(b)&&(0<=b&&(b-1 in a||a instanceof Array)||"function"==typeof a.item)}function q(a,b,d){var c,e;if(a)if(z(a))for(c in a)"prototype"==c||"length"==c||"name"==c||a.hasOwnProperty&&!a.hasOwnProperty(c)||b.call(d,a[c],c,a);else if(L(a)||ta(a)){var f="object"!==typeof a;c=0;for(e=a.length;c<e;c++)(f||c in a)&&b.call(d,a[c],c,a)}else if(a.forEach&&a.forEach!==q)a.forEach(b,d,a);else if(sc(a))for(c in a)b.call(d,a[c],c,a);else if("function"===typeof a.hasOwnProperty)for(c in a)a.hasOwnProperty(c)&&
b.call(d,a[c],c,a);else for(c in a)ua.call(a,c)&&b.call(d,a[c],c,a);return a}function tc(a,b,d){for(var c=Object.keys(a).sort(),e=0;e<c.length;e++)b.call(d,a[c[e]],c[e]);return c}function uc(a){return function(b,d){a(d,b)}}function Yd(){return++pb}function Pb(a,b,d){for(var c=a.$$hashKey,e=0,f=b.length;e<f;++e){var g=b[e];if(D(g)||z(g))for(var h=Object.keys(g),k=0,l=h.length;k<l;k++){var m=h[k],n=g[m];d&&D(n)?da(n)?a[m]=new Date(n.valueOf()):Wa(n)?a[m]=new RegExp(n):n.nodeName?a[m]=n.cloneNode(!0):
Qb(n)?a[m]=n.clone():(D(a[m])||(a[m]=L(n)?[]:{}),Pb(a[m],[n],!0)):a[m]=n}}c?a.$$hashKey=c:delete a.$$hashKey;return a}function S(a){return Pb(a,va.call(arguments,1),!1)}function Zd(a){return Pb(a,va.call(arguments,1),!0)}function Z(a){return parseInt(a,10)}function Rb(a,b){return S(Object.create(a),b)}function A(){}function Xa(a){return a}function ha(a){return function(){return a}}function vc(a){return z(a.toString)&&a.toString!==ma}function y(a){return"undefined"===typeof a}function w(a){return"undefined"!==
typeof a}function D(a){return null!==a&&"object"===typeof a}function sc(a){return null!==a&&"object"===typeof a&&!wc(a)}function G(a){return"string"===typeof a}function T(a){return"number"===typeof a}function da(a){return"[object Date]"===ma.call(a)}function z(a){return"function"===typeof a}function Wa(a){return"[object RegExp]"===ma.call(a)}function Va(a){return a&&a.window===a}function Ya(a){return a&&a.$evalAsync&&a.$watch}function Ga(a){return"boolean"===typeof a}function $d(a){return a&&T(a.length)&&
ae.test(ma.call(a))}function Qb(a){return!(!a||!(a.nodeName||a.prop&&a.attr&&a.find))}function be(a){var b={};a=a.split(",");var d;for(d=0;d<a.length;d++)b[a[d]]=!0;return b}function wa(a){return Q(a.nodeName||a[0]&&a[0].nodeName)}function Za(a,b){var d=a.indexOf(b);0<=d&&a.splice(d,1);return d}function pa(a,b){function d(a,b){var d=b.$$hashKey,e;if(L(a)){e=0;for(var f=a.length;e<f;e++)b.push(c(a[e]))}else if(sc(a))for(e in a)b[e]=c(a[e]);else if(a&&"function"===typeof a.hasOwnProperty)for(e in a)a.hasOwnProperty(e)&&
(b[e]=c(a[e]));else for(e in a)ua.call(a,e)&&(b[e]=c(a[e]));d?b.$$hashKey=d:delete b.$$hashKey;return b}function c(a){if(!D(a))return a;var b=f.indexOf(a);if(-1!==b)return g[b];if(Va(a)||Ya(a))throw xa("cpws");var b=!1,c=e(a);void 0===c&&(c=L(a)?[]:Object.create(wc(a)),b=!0);f.push(a);g.push(c);return b?d(a,c):c}function e(a){switch(ma.call(a)){case "[object Int8Array]":case "[object Int16Array]":case "[object Int32Array]":case "[object Float32Array]":case "[object Float64Array]":case "[object Uint8Array]":case "[object Uint8ClampedArray]":case "[object Uint16Array]":case "[object Uint32Array]":return new a.constructor(c(a.buffer),
a.byteOffset,a.length);case "[object ArrayBuffer]":if(!a.slice){var b=new ArrayBuffer(a.byteLength);(new Uint8Array(b)).set(new Uint8Array(a));return b}return a.slice(0);case "[object Boolean]":case "[object Number]":case "[object String]":case "[object Date]":return new a.constructor(a.valueOf());case "[object RegExp]":return b=new RegExp(a.source,a.toString().match(/[^\/]*$/)[0]),b.lastIndex=a.lastIndex,b;case "[object Blob]":return new a.constructor([a],{type:a.type})}if(z(a.cloneNode))return a.cloneNode(!0)}
var f=[],g=[];if(b){if($d(b)||"[object ArrayBuffer]"===ma.call(b))throw xa("cpta");if(a===b)throw xa("cpi");L(b)?b.length=0:q(b,function(a,d){"$$hashKey"!==d&&delete b[d]});f.push(a);g.push(b);return d(a,b)}return c(a)}function na(a,b){if(a===b)return!0;if(null===a||null===b)return!1;if(a!==a&&b!==b)return!0;var d=typeof a,c;if(d==typeof b&&"object"==d)if(L(a)){if(!L(b))return!1;if((d=a.length)==b.length){for(c=0;c<d;c++)if(!na(a[c],b[c]))return!1;return!0}}else{if(da(a))return da(b)?na(a.getTime(),
b.getTime()):!1;if(Wa(a))return Wa(b)?a.toString()==b.toString():!1;if(Ya(a)||Ya(b)||Va(a)||Va(b)||L(b)||da(b)||Wa(b))return!1;d=U();for(c in a)if("$"!==c.charAt(0)&&!z(a[c])){if(!na(a[c],b[c]))return!1;d[c]=!0}for(c in b)if(!(c in d)&&"$"!==c.charAt(0)&&w(b[c])&&!z(b[c]))return!1;return!0}return!1}function $a(a,b,d){return a.concat(va.call(b,d))}function ab(a,b){var d=2<arguments.length?va.call(arguments,2):[];return!z(b)||b instanceof RegExp?b:d.length?function(){return arguments.length?b.apply(a,
$a(d,arguments,0)):b.apply(a,d)}:function(){return arguments.length?b.apply(a,arguments):b.call(a)}}function ce(a,b){var d=b;"string"===typeof a&&"$"===a.charAt(0)&&"$"===a.charAt(1)?d=void 0:Va(b)?d="$WINDOW":b&&C.document===b?d="$DOCUMENT":Ya(b)&&(d="$SCOPE");return d}function bb(a,b){if(!y(a))return T(b)||(b=b?2:null),JSON.stringify(a,ce,b)}function xc(a){return G(a)?JSON.parse(a):a}function yc(a,b){a=a.replace(de,"");var d=Date.parse("Jan 01, 1970 00:00:00 "+a)/6E4;return isNaN(d)?b:d}function Sb(a,
b,d){d=d?-1:1;var c=a.getTimezoneOffset();b=yc(b,c);d*=b-c;a=new Date(a.getTime());a.setMinutes(a.getMinutes()+d);return a}function ya(a){a=F(a).clone();try{a.empty()}catch(b){}var d=F("<div>").append(a).html();try{return a[0].nodeType===Ma?Q(d):d.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/,function(a,b){return"<"+Q(b)})}catch(c){return Q(d)}}function zc(a){try{return decodeURIComponent(a)}catch(b){}}function Ac(a){var b={};q((a||"").split("&"),function(a){var c,e,f;a&&(e=a=a.replace(/\+/g,"%20"),
c=a.indexOf("="),-1!==c&&(e=a.substring(0,c),f=a.substring(c+1)),e=zc(e),w(e)&&(f=w(f)?zc(f):!0,ua.call(b,e)?L(b[e])?b[e].push(f):b[e]=[b[e],f]:b[e]=f))});return b}function Tb(a){var b=[];q(a,function(a,c){L(a)?q(a,function(a){b.push(ea(c,!0)+(!0===a?"":"="+ea(a,!0)))}):b.push(ea(c,!0)+(!0===a?"":"="+ea(a,!0)))});return b.length?b.join("&"):""}function qb(a){return ea(a,!0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+")}function ea(a,b){return encodeURIComponent(a).replace(/%40/gi,
"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%3B/gi,";").replace(/%20/g,b?"%20":"+")}function ee(a,b){var d,c,e=Na.length;for(c=0;c<e;++c)if(d=Na[c]+b,G(d=a.getAttribute(d)))return d;return null}function fe(a,b){var d,c,e={};q(Na,function(b){b+="app";!d&&a.hasAttribute&&a.hasAttribute(b)&&(d=a,c=a.getAttribute(b))});q(Na,function(b){b+="app";var e;!d&&(e=a.querySelector("["+b.replace(":","\\:")+"]"))&&(d=e,c=e.getAttribute(b))});d&&(e.strictDi=null!==ee(d,"strict-di"),
b(d,c?[c]:[],e))}function Bc(a,b,d){D(d)||(d={});d=S({strictDi:!1},d);var c=function(){a=F(a);if(a.injector()){var c=a[0]===C.document?"document":ya(a);throw xa("btstrpd",c.replace(/</,"&lt;").replace(/>/,"&gt;"));}b=b||[];b.unshift(["$provide",function(b){b.value("$rootElement",a)}]);d.debugInfoEnabled&&b.push(["$compileProvider",function(a){a.debugInfoEnabled(!0)}]);b.unshift("ng");c=cb(b,d.strictDi);c.invoke(["$rootScope","$rootElement","$compile","$injector",function(a,b,c,d){a.$apply(function(){b.data("$injector",
d);c(b)(a)})}]);return c},e=/^NG_ENABLE_DEBUG_INFO!/,f=/^NG_DEFER_BOOTSTRAP!/;C&&e.test(C.name)&&(d.debugInfoEnabled=!0,C.name=C.name.replace(e,""));if(C&&!f.test(C.name))return c();C.name=C.name.replace(f,"");ca.resumeBootstrap=function(a){q(a,function(a){b.push(a)});return c()};z(ca.resumeDeferredBootstrap)&&ca.resumeDeferredBootstrap()}function ge(){C.name="NG_ENABLE_DEBUG_INFO!"+C.name;C.location.reload()}function he(a){a=ca.element(a).injector();if(!a)throw xa("test");return a.get("$$testability")}
function Cc(a,b){b=b||"_";return a.replace(ie,function(a,c){return(c?b:"")+a.toLowerCase()})}function je(){var a;if(!Dc){var b=rb();(qa=y(b)?C.jQuery:b?C[b]:void 0)&&qa.fn.on?(F=qa,S(qa.fn,{scope:Oa.scope,isolateScope:Oa.isolateScope,controller:Oa.controller,injector:Oa.injector,inheritedData:Oa.inheritedData}),a=qa.cleanData,qa.cleanData=function(b){for(var c,e=0,f;null!=(f=b[e]);e++)(c=qa._data(f,"events"))&&c.$destroy&&qa(f).triggerHandler("$destroy");a(b)}):F=O;ca.element=F;Dc=!0}}function sb(a,
b,d){if(!a)throw xa("areq",b||"?",d||"required");return a}function Pa(a,b,d){d&&L(a)&&(a=a[a.length-1]);sb(z(a),b,"not a function, got "+(a&&"object"===typeof a?a.constructor.name||"Object":typeof a));return a}function Qa(a,b){if("hasOwnProperty"===a)throw xa("badname",b);}function Ec(a,b,d){if(!b)return a;b=b.split(".");for(var c,e=a,f=b.length,g=0;g<f;g++)c=b[g],a&&(a=(e=a)[c]);return!d&&z(a)?ab(e,a):a}function tb(a){for(var b=a[0],d=a[a.length-1],c,e=1;b!==d&&(b=b.nextSibling);e++)if(c||a[e]!==
b)c||(c=F(va.call(a,0,e))),c.push(b);return c||a}function U(){return Object.create(null)}function ke(a){function b(a,b,c){return a[b]||(a[b]=c())}var d=N("$injector"),c=N("ng");a=b(a,"angular",Object);a.$$minErr=a.$$minErr||N;return b(a,"module",function(){var a={};return function(f,g,h){if("hasOwnProperty"===f)throw c("badname","module");g&&a.hasOwnProperty(f)&&(a[f]=null);return b(a,f,function(){function a(b,d,e,f){f||(f=c);return function(){f[e||"push"]([b,d,arguments]);return R}}function b(a,
d){return function(b,e){e&&z(e)&&(e.$$moduleName=f);c.push([a,d,arguments]);return R}}if(!g)throw d("nomod",f);var c=[],e=[],p=[],u=a("$injector","invoke","push",e),R={_invokeQueue:c,_configBlocks:e,_runBlocks:p,requires:g,name:f,provider:b("$provide","provider"),factory:b("$provide","factory"),service:b("$provide","service"),value:a("$provide","value"),constant:a("$provide","constant","unshift"),decorator:b("$provide","decorator"),animation:b("$animateProvider","register"),filter:b("$filterProvider",
"register"),controller:b("$controllerProvider","register"),directive:b("$compileProvider","directive"),component:b("$compileProvider","component"),config:u,run:function(a){p.push(a);return this}};h&&u(h);return R})}})}function ia(a,b){if(L(a)){b=b||[];for(var d=0,c=a.length;d<c;d++)b[d]=a[d]}else if(D(a))for(d in b=b||{},a)if("$"!==d.charAt(0)||"$"!==d.charAt(1))b[d]=a[d];return b||a}function le(a){S(a,{bootstrap:Bc,copy:pa,extend:S,merge:Zd,equals:na,element:F,forEach:q,injector:cb,noop:A,bind:ab,
toJson:bb,fromJson:xc,identity:Xa,isUndefined:y,isDefined:w,isString:G,isFunction:z,isObject:D,isNumber:T,isElement:Qb,isArray:L,version:me,isDate:da,lowercase:Q,uppercase:ub,callbacks:{$$counter:0},getTestability:he,$$minErr:N,$$csp:Ba,reloadWithDebugInfo:ge});Ub=ke(C);Ub("ng",["ngLocale"],["$provide",function(a){a.provider({$$sanitizeUri:ne});a.provider("$compile",Fc).directive({a:oe,input:Gc,textarea:Gc,form:pe,script:qe,select:re,style:se,option:te,ngBind:ue,ngBindHtml:ve,ngBindTemplate:we,ngClass:xe,
ngClassEven:ye,ngClassOdd:ze,ngCloak:Ae,ngController:Be,ngForm:Ce,ngHide:De,ngIf:Ee,ngInclude:Fe,ngInit:Ge,ngNonBindable:He,ngPluralize:Ie,ngRepeat:Je,ngShow:Ke,ngStyle:Le,ngSwitch:Me,ngSwitchWhen:Ne,ngSwitchDefault:Oe,ngOptions:Pe,ngTransclude:Qe,ngModel:Re,ngList:Se,ngChange:Te,pattern:Hc,ngPattern:Hc,required:Ic,ngRequired:Ic,minlength:Jc,ngMinlength:Jc,maxlength:Kc,ngMaxlength:Kc,ngValue:Ue,ngModelOptions:Ve}).directive({ngInclude:We}).directive(vb).directive(Lc);a.provider({$anchorScroll:Xe,
$animate:Ye,$animateCss:Ze,$$animateJs:$e,$$animateQueue:af,$$AnimateRunner:bf,$$animateAsyncRun:cf,$browser:df,$cacheFactory:ef,$controller:ff,$document:gf,$exceptionHandler:hf,$filter:Mc,$$forceReflow:jf,$interpolate:kf,$interval:lf,$http:mf,$httpParamSerializer:nf,$httpParamSerializerJQLike:of,$httpBackend:pf,$xhrFactory:qf,$jsonpCallbacks:rf,$location:sf,$log:tf,$parse:uf,$rootScope:vf,$q:wf,$$q:xf,$sce:yf,$sceDelegate:zf,$sniffer:Af,$templateCache:Bf,$templateRequest:Cf,$$testability:Df,$timeout:Ef,
$window:Ff,$$rAF:Gf,$$jqLite:Hf,$$HashMap:If,$$cookieReader:Jf})}])}function db(a){return a.replace(Kf,function(a,d,c,e){return e?c.toUpperCase():c}).replace(Lf,"Moz$1")}function Nc(a){a=a.nodeType;return 1===a||!a||9===a}function Oc(a,b){var d,c,e=b.createDocumentFragment(),f=[];if(Vb.test(a)){d=e.appendChild(b.createElement("div"));c=(Mf.exec(a)||["",""])[1].toLowerCase();c=ja[c]||ja._default;d.innerHTML=c[1]+a.replace(Nf,"<$1></$2>")+c[2];for(c=c[0];c--;)d=d.lastChild;f=$a(f,d.childNodes);d=e.firstChild;
d.textContent=""}else f.push(b.createTextNode(a));e.textContent="";e.innerHTML="";q(f,function(a){e.appendChild(a)});return e}function Pc(a,b){var d=a.parentNode;d&&d.replaceChild(b,a);b.appendChild(a)}function O(a){if(a instanceof O)return a;var b;G(a)&&(a=W(a),b=!0);if(!(this instanceof O)){if(b&&"<"!=a.charAt(0))throw Wb("nosel");return new O(a)}if(b){b=C.document;var d;a=(d=Of.exec(a))?[b.createElement(d[1])]:(d=Oc(a,b))?d.childNodes:[]}Qc(this,a)}function Xb(a){return a.cloneNode(!0)}function wb(a,
b){b||eb(a);if(a.querySelectorAll)for(var d=a.querySelectorAll("*"),c=0,e=d.length;c<e;c++)eb(d[c])}function Rc(a,b,d,c){if(w(c))throw Wb("offargs");var e=(c=xb(a))&&c.events,f=c&&c.handle;if(f)if(b){var g=function(b){var c=e[b];w(d)&&Za(c||[],d);w(d)&&c&&0<c.length||(a.removeEventListener(b,f,!1),delete e[b])};q(b.split(" "),function(a){g(a);yb[a]&&g(yb[a])})}else for(b in e)"$destroy"!==b&&a.removeEventListener(b,f,!1),delete e[b]}function eb(a,b){var d=a.ng339,c=d&&fb[d];c&&(b?delete c.data[b]:
(c.handle&&(c.events.$destroy&&c.handle({},"$destroy"),Rc(a)),delete fb[d],a.ng339=void 0))}function xb(a,b){var d=a.ng339,d=d&&fb[d];b&&!d&&(a.ng339=d=++Pf,d=fb[d]={events:{},data:{},handle:void 0});return d}function Yb(a,b,d){if(Nc(a)){var c=w(d),e=!c&&b&&!D(b),f=!b;a=(a=xb(a,!e))&&a.data;if(c)a[b]=d;else{if(f)return a;if(e)return a&&a[b];S(a,b)}}}function zb(a,b){return a.getAttribute?-1<(" "+(a.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").indexOf(" "+b+" "):!1}function Ab(a,b){b&&a.setAttribute&&
q(b.split(" "),function(b){a.setAttribute("class",W((" "+(a.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").replace(" "+W(b)+" "," ")))})}function Bb(a,b){if(b&&a.setAttribute){var d=(" "+(a.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ");q(b.split(" "),function(a){a=W(a);-1===d.indexOf(" "+a+" ")&&(d+=a+" ")});a.setAttribute("class",W(d))}}function Qc(a,b){if(b)if(b.nodeType)a[a.length++]=b;else{var d=b.length;if("number"===typeof d&&b.window!==b){if(d)for(var c=0;c<d;c++)a[a.length++]=
b[c]}else a[a.length++]=b}}function Sc(a,b){return Cb(a,"$"+(b||"ngController")+"Controller")}function Cb(a,b,d){9==a.nodeType&&(a=a.documentElement);for(b=L(b)?b:[b];a;){for(var c=0,e=b.length;c<e;c++)if(w(d=F.data(a,b[c])))return d;a=a.parentNode||11===a.nodeType&&a.host}}function Tc(a){for(wb(a,!0);a.firstChild;)a.removeChild(a.firstChild)}function Db(a,b){b||wb(a);var d=a.parentNode;d&&d.removeChild(a)}function Qf(a,b){b=b||C;if("complete"===b.document.readyState)b.setTimeout(a);else F(b).on("load",
a)}function Uc(a,b){var d=Eb[b.toLowerCase()];return d&&Vc[wa(a)]&&d}function Rf(a,b){var d=function(c,d){c.isDefaultPrevented=function(){return c.defaultPrevented};var f=b[d||c.type],g=f?f.length:0;if(g){if(y(c.immediatePropagationStopped)){var h=c.stopImmediatePropagation;c.stopImmediatePropagation=function(){c.immediatePropagationStopped=!0;c.stopPropagation&&c.stopPropagation();h&&h.call(c)}}c.isImmediatePropagationStopped=function(){return!0===c.immediatePropagationStopped};var k=f.specialHandlerWrapper||
Sf;1<g&&(f=ia(f));for(var l=0;l<g;l++)c.isImmediatePropagationStopped()||k(a,c,f[l])}};d.elem=a;return d}function Sf(a,b,d){d.call(a,b)}function Tf(a,b,d){var c=b.relatedTarget;c&&(c===a||Uf.call(a,c))||d.call(a,b)}function Hf(){this.$get=function(){return S(O,{hasClass:function(a,b){a.attr&&(a=a[0]);return zb(a,b)},addClass:function(a,b){a.attr&&(a=a[0]);return Bb(a,b)},removeClass:function(a,b){a.attr&&(a=a[0]);return Ab(a,b)}})}}function Ca(a,b){var d=a&&a.$$hashKey;if(d)return"function"===typeof d&&
(d=a.$$hashKey()),d;d=typeof a;return d="function"==d||"object"==d&&null!==a?a.$$hashKey=d+":"+(b||Yd)():d+":"+a}function Ra(a,b){if(b){var d=0;this.nextUid=function(){return++d}}q(a,this.put,this)}function Wc(a){a=(Function.prototype.toString.call(a)+" ").replace(Vf,"");return a.match(Wf)||a.match(Xf)}function Yf(a){return(a=Wc(a))?"function("+(a[1]||"").replace(/[\s\r\n]+/," ")+")":"fn"}function cb(a,b){function d(a){return function(b,c){if(D(b))q(b,uc(a));else return a(b,c)}}function c(a,b){Qa(a,
"service");if(z(b)||L(b))b=p.instantiate(b);if(!b.$get)throw Ha("pget",a);return n[a+"Provider"]=b}function e(a,b){return function(){var c=B.invoke(b,this);if(y(c))throw Ha("undef",a);return c}}function f(a,b,d){return c(a,{$get:!1!==d?e(a,b):b})}function g(a){sb(y(a)||L(a),"modulesToLoad","not an array");var b=[],c;q(a,function(a){function d(a){var b,c;b=0;for(c=a.length;b<c;b++){var e=a[b],f=p.get(e[0]);f[e[1]].apply(f,e[2])}}if(!m.get(a)){m.put(a,!0);try{G(a)?(c=Ub(a),b=b.concat(g(c.requires)).concat(c._runBlocks),
d(c._invokeQueue),d(c._configBlocks)):z(a)?b.push(p.invoke(a)):L(a)?b.push(p.invoke(a)):Pa(a,"module")}catch(e){throw L(a)&&(a=a[a.length-1]),e.message&&e.stack&&-1==e.stack.indexOf(e.message)&&(e=e.message+"\n"+e.stack),Ha("modulerr",a,e.stack||e.message||e);}}});return b}function h(a,c){function d(b,e){if(a.hasOwnProperty(b)){if(a[b]===k)throw Ha("cdep",b+" <- "+l.join(" <- "));return a[b]}try{return l.unshift(b),a[b]=k,a[b]=c(b,e)}catch(f){throw a[b]===k&&delete a[b],f;}finally{l.shift()}}function e(a,
c,f){var g=[];a=cb.$$annotate(a,b,f);for(var h=0,k=a.length;h<k;h++){var l=a[h];if("string"!==typeof l)throw Ha("itkn",l);g.push(c&&c.hasOwnProperty(l)?c[l]:d(l,f))}return g}return{invoke:function(a,b,c,d){"string"===typeof c&&(d=c,c=null);c=e(a,c,d);L(a)&&(a=a[a.length-1]);d=11>=Ea?!1:"function"===typeof a&&/^(?:class\b|constructor\()/.test(Function.prototype.toString.call(a)+" ");return d?(c.unshift(null),new (Function.prototype.bind.apply(a,c))):a.apply(b,c)},instantiate:function(a,b,c){var d=
L(a)?a[a.length-1]:a;a=e(a,b,c);a.unshift(null);return new (Function.prototype.bind.apply(d,a))},get:d,annotate:cb.$$annotate,has:function(b){return n.hasOwnProperty(b+"Provider")||a.hasOwnProperty(b)}}}b=!0===b;var k={},l=[],m=new Ra([],!0),n={$provide:{provider:d(c),factory:d(f),service:d(function(a,b){return f(a,["$injector",function(a){return a.instantiate(b)}])}),value:d(function(a,b){return f(a,ha(b),!1)}),constant:d(function(a,b){Qa(a,"constant");n[a]=b;u[a]=b}),decorator:function(a,b){var c=
p.get(a+"Provider"),d=c.$get;c.$get=function(){var a=B.invoke(d,c);return B.invoke(b,null,{$delegate:a})}}}},p=n.$injector=h(n,function(a,b){ca.isString(b)&&l.push(b);throw Ha("unpr",l.join(" <- "));}),u={},R=h(u,function(a,b){var c=p.get(a+"Provider",b);return B.invoke(c.$get,c,void 0,a)}),B=R;n.$injectorProvider={$get:ha(R)};var r=g(a),B=R.get("$injector");B.strictDi=b;q(r,function(a){a&&B.invoke(a)});return B}function Xe(){var a=!0;this.disableAutoScrolling=function(){a=!1};this.$get=["$window",
"$location","$rootScope",function(b,d,c){function e(a){var b=null;Array.prototype.some.call(a,function(a){if("a"===wa(a))return b=a,!0});return b}function f(a){if(a){a.scrollIntoView();var c;c=g.yOffset;z(c)?c=c():Qb(c)?(c=c[0],c="fixed"!==b.getComputedStyle(c).position?0:c.getBoundingClientRect().bottom):T(c)||(c=0);c&&(a=a.getBoundingClientRect().top,b.scrollBy(0,a-c))}else b.scrollTo(0,0)}function g(a){a=G(a)?a:d.hash();var b;a?(b=h.getElementById(a))?f(b):(b=e(h.getElementsByName(a)))?f(b):"top"===
a&&f(null):f(null)}var h=b.document;a&&c.$watch(function(){return d.hash()},function(a,b){a===b&&""===a||Qf(function(){c.$evalAsync(g)})});return g}]}function gb(a,b){if(!a&&!b)return"";if(!a)return b;if(!b)return a;L(a)&&(a=a.join(" "));L(b)&&(b=b.join(" "));return a+" "+b}function Zf(a){G(a)&&(a=a.split(" "));var b=U();q(a,function(a){a.length&&(b[a]=!0)});return b}function Ia(a){return D(a)?a:{}}function $f(a,b,d,c){function e(a){try{a.apply(null,va.call(arguments,1))}finally{if(R--,0===R)for(;B.length;)try{B.pop()()}catch(b){d.error(b)}}}
function f(){t=null;g();h()}function g(){r=K();r=y(r)?null:r;na(r,E)&&(r=E);E=r}function h(){if(v!==k.url()||J!==r)v=k.url(),J=r,q(M,function(a){a(k.url(),r)})}var k=this,l=a.location,m=a.history,n=a.setTimeout,p=a.clearTimeout,u={};k.isMock=!1;var R=0,B=[];k.$$completeOutstandingRequest=e;k.$$incOutstandingRequestCount=function(){R++};k.notifyWhenNoOutstandingRequests=function(a){0===R?a():B.push(a)};var r,J,v=l.href,fa=b.find("base"),t=null,K=c.history?function(){try{return m.state}catch(a){}}:
A;g();J=r;k.url=function(b,d,e){y(e)&&(e=null);l!==a.location&&(l=a.location);m!==a.history&&(m=a.history);if(b){var f=J===e;if(v===b&&(!c.history||f))return k;var h=v&&Ja(v)===Ja(b);v=b;J=e;!c.history||h&&f?(h||(t=b),d?l.replace(b):h?(d=l,e=b.indexOf("#"),e=-1===e?"":b.substr(e),d.hash=e):l.href=b,l.href!==b&&(t=b)):(m[d?"replaceState":"pushState"](e,"",b),g(),J=r);t&&(t=b);return k}return t||l.href.replace(/%27/g,"'")};k.state=function(){return r};var M=[],H=!1,E=null;k.onUrlChange=function(b){if(!H){if(c.history)F(a).on("popstate",
f);F(a).on("hashchange",f);H=!0}M.push(b);return b};k.$$applicationDestroyed=function(){F(a).off("hashchange popstate",f)};k.$$checkUrlChange=h;k.baseHref=function(){var a=fa.attr("href");return a?a.replace(/^(https?\:)?\/\/[^\/]*/,""):""};k.defer=function(a,b){var c;R++;c=n(function(){delete u[c];e(a)},b||0);u[c]=!0;return c};k.defer.cancel=function(a){return u[a]?(delete u[a],p(a),e(A),!0):!1}}function df(){this.$get=["$window","$log","$sniffer","$document",function(a,b,d,c){return new $f(a,c,b,
d)}]}function ef(){this.$get=function(){function a(a,c){function e(a){a!=n&&(p?p==a&&(p=a.n):p=a,f(a.n,a.p),f(a,n),n=a,n.n=null)}function f(a,b){a!=b&&(a&&(a.p=b),b&&(b.n=a))}if(a in b)throw N("$cacheFactory")("iid",a);var g=0,h=S({},c,{id:a}),k=U(),l=c&&c.capacity||Number.MAX_VALUE,m=U(),n=null,p=null;return b[a]={put:function(a,b){if(!y(b)){if(l<Number.MAX_VALUE){var c=m[a]||(m[a]={key:a});e(c)}a in k||g++;k[a]=b;g>l&&this.remove(p.key);return b}},get:function(a){if(l<Number.MAX_VALUE){var b=m[a];
if(!b)return;e(b)}return k[a]},remove:function(a){if(l<Number.MAX_VALUE){var b=m[a];if(!b)return;b==n&&(n=b.p);b==p&&(p=b.n);f(b.n,b.p);delete m[a]}a in k&&(delete k[a],g--)},removeAll:function(){k=U();g=0;m=U();n=p=null},destroy:function(){m=h=k=null;delete b[a]},info:function(){return S({},h,{size:g})}}}var b={};a.info=function(){var a={};q(b,function(b,e){a[e]=b.info()});return a};a.get=function(a){return b[a]};return a}}function Bf(){this.$get=["$cacheFactory",function(a){return a("templates")}]}
function Fc(a,b){function d(a,b,c){var d=/^\s*([@&<]|=(\*?))(\??)\s*(\w*)\s*$/,e=U();q(a,function(a,f){if(a in n)e[f]=n[a];else{var g=a.match(d);if(!g)throw ga("iscp",b,f,a,c?"controller bindings definition":"isolate scope definition");e[f]={mode:g[1][0],collection:"*"===g[2],optional:"?"===g[3],attrName:g[4]||f};g[4]&&(n[a]=e[f])}});return e}function c(a){var b=a.charAt(0);if(!b||b!==Q(b))throw ga("baddir",a);if(a!==a.trim())throw ga("baddir",a);}function e(a){var b=a.require||a.controller&&a.name;
!L(b)&&D(b)&&q(b,function(a,c){var d=a.match(l);a.substring(d[0].length)||(b[c]=d[0]+c)});return b}var f={},g=/^\s*directive\:\s*([\w\-]+)\s+(.*)$/,h=/(([\w\-]+)(?:\:([^;]+))?;?)/,k=be("ngSrc,ngSrcset,src,srcset"),l=/^(?:(\^\^?)?(\?)?(\^\^?)?)?/,m=/^(on[a-z]+|formaction)$/,n=U();this.directive=function B(b,d){Qa(b,"directive");G(b)?(c(b),sb(d,"directiveFactory"),f.hasOwnProperty(b)||(f[b]=[],a.factory(b+"Directive",["$injector","$exceptionHandler",function(a,c){var d=[];q(f[b],function(f,g){try{var h=
a.invoke(f);z(h)?h={compile:ha(h)}:!h.compile&&h.link&&(h.compile=ha(h.link));h.priority=h.priority||0;h.index=g;h.name=h.name||b;h.require=e(h);h.restrict=h.restrict||"EA";h.$$moduleName=f.$$moduleName;d.push(h)}catch(k){c(k)}});return d}])),f[b].push(d)):q(b,uc(B));return this};this.component=function(a,b){function c(a){function e(b){return z(b)||L(b)?function(c,d){return a.invoke(b,this,{$element:c,$attrs:d})}:b}var f=b.template||b.templateUrl?b.template:"",g={controller:d,controllerAs:Xc(b.controller)||
b.controllerAs||"$ctrl",template:e(f),templateUrl:e(b.templateUrl),transclude:b.transclude,scope:{},bindToController:b.bindings||{},restrict:"E",require:b.require};q(b,function(a,b){"$"===b.charAt(0)&&(g[b]=a)});return g}var d=b.controller||function(){};q(b,function(a,b){"$"===b.charAt(0)&&(c[b]=a,z(d)&&(d[b]=a))});c.$inject=["$injector"];return this.directive(a,c)};this.aHrefSanitizationWhitelist=function(a){return w(a)?(b.aHrefSanitizationWhitelist(a),this):b.aHrefSanitizationWhitelist()};this.imgSrcSanitizationWhitelist=
function(a){return w(a)?(b.imgSrcSanitizationWhitelist(a),this):b.imgSrcSanitizationWhitelist()};var p=!0;this.debugInfoEnabled=function(a){return w(a)?(p=a,this):p};var u=10;this.onChangesTtl=function(a){return arguments.length?(u=a,this):u};this.$get=["$injector","$interpolate","$exceptionHandler","$templateRequest","$parse","$controller","$rootScope","$sce","$animate","$$sanitizeUri",function(a,b,c,e,n,t,K,M,H,E){function I(){try{if(!--qa)throw Y=void 0,ga("infchng",u);K.$apply(function(){for(var a=
[],b=0,c=Y.length;b<c;++b)try{Y[b]()}catch(d){a.push(d)}Y=void 0;if(a.length)throw a;})}finally{qa++}}function Da(a,b){if(b){var c=Object.keys(b),d,e,f;d=0;for(e=c.length;d<e;d++)f=c[d],this[f]=b[f]}else this.$attr={};this.$$element=a}function P(a,b,c){pa.innerHTML="<span "+b+">";b=pa.firstChild.attributes;var d=b[0];b.removeNamedItem(d.name);d.value=c;a.attributes.setNamedItem(d)}function x(a,b){try{a.addClass(b)}catch(c){}}function aa(a,b,c,d,e){a instanceof F||(a=F(a));for(var f=/\S+/,g=0,h=a.length;g<
h;g++){var k=a[g];k.nodeType===Ma&&k.nodeValue.match(f)&&Pc(k,a[g]=C.document.createElement("span"))}var l=s(a,b,a,c,d,e);aa.$$addScopeClass(a);var m=null;return function(b,c,d){sb(b,"scope");e&&e.needsNewScope&&(b=b.$parent.$new());d=d||{};var f=d.parentBoundTranscludeFn,g=d.transcludeControllers;d=d.futureParentElement;f&&f.$$boundTransclude&&(f=f.$$boundTransclude);m||(m=(d=d&&d[0])?"foreignobject"!==wa(d)&&ma.call(d).match(/SVG/)?"svg":"html":"html");d="html"!==m?F(da(m,F("<div>").append(a).html())):
c?Oa.clone.call(a):a;if(g)for(var h in g)d.data("$"+h+"Controller",g[h].instance);aa.$$addScopeInfo(d,b);c&&c(d,b);l&&l(b,d,d,f);return d}}function s(a,b,c,d,e,f){function g(a,c,d,e){var f,k,l,m,p,r,v;if(n)for(v=Array(c.length),m=0;m<h.length;m+=3)f=h[m],v[f]=c[f];else v=c;m=0;for(p=h.length;m<p;)k=v[h[m++]],c=h[m++],f=h[m++],c?(c.scope?(l=a.$new(),aa.$$addScopeInfo(F(k),l)):l=a,r=c.transcludeOnThisElement?za(a,c.transclude,e):!c.templateOnThisElement&&e?e:!e&&b?za(a,b):null,c(f,l,k,d,r)):f&&f(a,
k.childNodes,void 0,e)}for(var h=[],k,l,m,p,n,r=0;r<a.length;r++){k=new Da;l=$b(a[r],[],k,0===r?d:void 0,e);(f=l.length?oa(l,a[r],k,b,c,null,[],[],f):null)&&f.scope&&aa.$$addScopeClass(k.$$element);k=f&&f.terminal||!(m=a[r].childNodes)||!m.length?null:s(m,f?(f.transcludeOnThisElement||!f.templateOnThisElement)&&f.transclude:b);if(f||k)h.push(r,f,k),p=!0,n=n||f;f=null}return p?g:null}function za(a,b,c){function d(e,f,g,h,k){e||(e=a.$new(!1,k),e.$$transcluded=!0);return b(e,f,{parentBoundTranscludeFn:c,
transcludeControllers:g,futureParentElement:h})}var e=d.$$slots=U(),f;for(f in b.$$slots)e[f]=b.$$slots[f]?za(a,b.$$slots[f],c):null;return d}function $b(a,b,c,d,e){var f=c.$attr;switch(a.nodeType){case 1:O(b,Aa(wa(a)),"E",d,e);for(var g,k,l,m,p=a.attributes,n=0,r=p&&p.length;n<r;n++){var v=!1,u=!1;g=p[n];k=g.name;l=W(g.value);g=Aa(k);if(m=Ba.test(g))k=k.replace(Yc,"").substr(8).replace(/_(.)/g,function(a,b){return b.toUpperCase()});(g=g.match(Ca))&&V(g[1])&&(v=k,u=k.substr(0,k.length-5)+"end",k=
k.substr(0,k.length-6));g=Aa(k.toLowerCase());f[g]=k;if(m||!c.hasOwnProperty(g))c[g]=l,Uc(a,g)&&(c[g]=!0);ia(a,b,l,g,m);O(b,g,"A",d,e,v,u)}f=a.className;D(f)&&(f=f.animVal);if(G(f)&&""!==f)for(;a=h.exec(f);)g=Aa(a[2]),O(b,g,"C",d,e)&&(c[g]=W(a[3])),f=f.substr(a.index+a[0].length);break;case Ma:if(11===Ea)for(;a.parentNode&&a.nextSibling&&a.nextSibling.nodeType===Ma;)a.nodeValue+=a.nextSibling.nodeValue,a.parentNode.removeChild(a.nextSibling);ca(b,a.nodeValue);break;case 8:hb(a,b,c,d,e)}b.sort(Z);
return b}function hb(a,b,c,d,e){try{var f=g.exec(a.nodeValue);if(f){var h=Aa(f[1]);O(b,h,"M",d,e)&&(c[h]=W(f[2]))}}catch(k){}}function N(a,b,c){var d=[],e=0;if(b&&a.hasAttribute&&a.hasAttribute(b)){do{if(!a)throw ga("uterdir",b,c);1==a.nodeType&&(a.hasAttribute(b)&&e++,a.hasAttribute(c)&&e--);d.push(a);a=a.nextSibling}while(0<e)}else d.push(a);return F(d)}function Zc(a,b,c){return function(d,e,f,g,h){e=N(e[0],b,c);return a(d,e,f,g,h)}}function ac(a,b,c,d,e,f){var g;return a?aa(b,c,d,e,f):function(){g||
(g=aa(b,c,d,e,f),b=c=f=null);return g.apply(this,arguments)}}function oa(a,b,d,e,f,g,h,k,l){function m(a,b,c,d){if(a){c&&(a=Zc(a,c,d));a.require=x.require;a.directiveName=I;if(u===x||x.$$isolateScope)a=ja(a,{isolateScope:!0});h.push(a)}if(b){c&&(b=Zc(b,c,d));b.require=x.require;b.directiveName=I;if(u===x||x.$$isolateScope)b=ja(b,{isolateScope:!0});k.push(b)}}function p(a,e,f,g,l){function m(a,b,c,d){var e;Ya(a)||(d=c,c=b,b=a,a=void 0);fa&&(e=t);c||(c=fa?I.parent():I);if(d){var f=l.$$slots[d];if(f)return f(a,
b,e,c,s);if(y(f))throw ga("noslot",d,ya(I));}else return l(a,b,e,c,s)}var n,E,x,M,B,t,P,I;b===f?(g=d,I=d.$$element):(I=F(f),g=new Da(I,d));B=e;u?M=e.$new(!0):r&&(B=e.$parent);l&&(P=m,P.$$boundTransclude=l,P.isSlotFilled=function(a){return!!l.$$slots[a]});v&&(t=ag(I,g,P,v,M,e,u));u&&(aa.$$addScopeInfo(I,M,!0,!(H&&(H===u||H===u.$$originalDirective))),aa.$$addScopeClass(I,!0),M.$$isolateBindings=u.$$isolateBindings,E=ka(e,g,M,M.$$isolateBindings,u),E.removeWatches&&M.$on("$destroy",E.removeWatches));
for(n in t){E=v[n];x=t[n];var Zb=E.$$bindings.bindToController;x.bindingInfo=x.identifier&&Zb?ka(B,g,x.instance,Zb,E):{};var K=x();K!==x.instance&&(x.instance=K,I.data("$"+E.name+"Controller",K),x.bindingInfo.removeWatches&&x.bindingInfo.removeWatches(),x.bindingInfo=ka(B,g,x.instance,Zb,E))}q(v,function(a,b){var c=a.require;a.bindToController&&!L(c)&&D(c)&&S(t[b].instance,ib(b,c,I,t))});q(t,function(a){var b=a.instance;if(z(b.$onChanges))try{b.$onChanges(a.bindingInfo.initialChanges)}catch(d){c(d)}if(z(b.$onInit))try{b.$onInit()}catch(e){c(e)}z(b.$doCheck)&&
(B.$watch(function(){b.$doCheck()}),b.$doCheck());z(b.$onDestroy)&&B.$on("$destroy",function(){b.$onDestroy()})});n=0;for(E=h.length;n<E;n++)x=h[n],la(x,x.isolateScope?M:e,I,g,x.require&&ib(x.directiveName,x.require,I,t),P);var s=e;u&&(u.template||null===u.templateUrl)&&(s=M);a&&a(s,f.childNodes,void 0,l);for(n=k.length-1;0<=n;n--)x=k[n],la(x,x.isolateScope?M:e,I,g,x.require&&ib(x.directiveName,x.require,I,t),P);q(t,function(a){a=a.instance;z(a.$postLink)&&a.$postLink()})}l=l||{};for(var n=-Number.MAX_VALUE,
r=l.newScopeDirective,v=l.controllerDirectives,u=l.newIsolateScopeDirective,H=l.templateDirective,E=l.nonTlbTranscludeDirective,M=!1,B=!1,fa=l.hasElementTranscludeDirective,t=d.$$element=F(b),x,I,P,K=e,s,Fa=!1,za=!1,w,A=0,C=a.length;A<C;A++){x=a[A];var G=x.$$start,hb=x.$$end;G&&(t=N(b,G,hb));P=void 0;if(n>x.priority)break;if(w=x.scope)x.templateUrl||(D(w)?(X("new/isolated scope",u||r,x,t),u=x):X("new/isolated scope",u,x,t)),r=r||x;I=x.name;if(!Fa&&(x.replace&&(x.templateUrl||x.template)||x.transclude&&
!x.$$tlb)){for(w=A+1;Fa=a[w++];)if(Fa.transclude&&!Fa.$$tlb||Fa.replace&&(Fa.templateUrl||Fa.template)){za=!0;break}Fa=!0}!x.templateUrl&&x.controller&&(w=x.controller,v=v||U(),X("'"+I+"' controller",v[I],x,t),v[I]=x);if(w=x.transclude)if(M=!0,x.$$tlb||(X("transclusion",E,x,t),E=x),"element"==w)fa=!0,n=x.priority,P=t,t=d.$$element=F(aa.$$createComment(I,d[I])),b=t[0],ea(f,va.call(P,0),b),P[0].$$parentNode=P[0].parentNode,K=ac(za,P,e,n,g&&g.name,{nonTlbTranscludeDirective:E});else{var oa=U();P=F(Xb(b)).contents();
if(D(w)){P=[];var Q=U(),O=U();q(w,function(a,b){var c="?"===a.charAt(0);a=c?a.substring(1):a;Q[a]=b;oa[b]=null;O[b]=c});q(t.contents(),function(a){var b=Q[Aa(wa(a))];b?(O[b]=!0,oa[b]=oa[b]||[],oa[b].push(a)):P.push(a)});q(O,function(a,b){if(!a)throw ga("reqslot",b);});for(var V in oa)oa[V]&&(oa[V]=ac(za,oa[V],e))}t.empty();K=ac(za,P,e,void 0,void 0,{needsNewScope:x.$$isolateScope||x.$$newScope});K.$$slots=oa}if(x.template)if(B=!0,X("template",H,x,t),H=x,w=z(x.template)?x.template(t,d):x.template,
w=xa(w),x.replace){g=x;P=Vb.test(w)?$c(da(x.templateNamespace,W(w))):[];b=P[0];if(1!=P.length||1!==b.nodeType)throw ga("tplrt",I,"");ea(f,t,b);C={$attr:{}};w=$b(b,[],C);var Z=a.splice(A+1,a.length-(A+1));(u||r)&&T(w,u,r);a=a.concat(w).concat(Z);$(d,C);C=a.length}else t.html(w);if(x.templateUrl)B=!0,X("template",H,x,t),H=x,x.replace&&(g=x),p=ba(a.splice(A,a.length-A),t,d,f,M&&K,h,k,{controllerDirectives:v,newScopeDirective:r!==x&&r,newIsolateScopeDirective:u,templateDirective:H,nonTlbTranscludeDirective:E}),
C=a.length;else if(x.compile)try{s=x.compile(t,d,K);var Y=x.$$originalDirective||x;z(s)?m(null,ab(Y,s),G,hb):s&&m(ab(Y,s.pre),ab(Y,s.post),G,hb)}catch(ca){c(ca,ya(t))}x.terminal&&(p.terminal=!0,n=Math.max(n,x.priority))}p.scope=r&&!0===r.scope;p.transcludeOnThisElement=M;p.templateOnThisElement=B;p.transclude=K;l.hasElementTranscludeDirective=fa;return p}function ib(a,b,c,d){var e;if(G(b)){var f=b.match(l);b=b.substring(f[0].length);var g=f[1]||f[3],f="?"===f[2];"^^"===g?c=c.parent():e=(e=d&&d[b])&&
e.instance;if(!e){var h="$"+b+"Controller";e=g?c.inheritedData(h):c.data(h)}if(!e&&!f)throw ga("ctreq",b,a);}else if(L(b))for(e=[],g=0,f=b.length;g<f;g++)e[g]=ib(a,b[g],c,d);else D(b)&&(e={},q(b,function(b,f){e[f]=ib(a,b,c,d)}));return e||null}function ag(a,b,c,d,e,f,g){var h=U(),k;for(k in d){var l=d[k],m={$scope:l===g||l.$$isolateScope?e:f,$element:a,$attrs:b,$transclude:c},p=l.controller;"@"==p&&(p=b[l.name]);m=t(p,m,!0,l.controllerAs);h[l.name]=m;a.data("$"+l.name+"Controller",m.instance)}return h}
function T(a,b,c){for(var d=0,e=a.length;d<e;d++)a[d]=Rb(a[d],{$$isolateScope:b,$$newScope:c})}function O(b,e,g,h,k,l,m){if(e===k)return null;k=null;if(f.hasOwnProperty(e)){var p;e=a.get(e+"Directive");for(var n=0,r=e.length;n<r;n++)try{if(p=e[n],(y(h)||h>p.priority)&&-1!=p.restrict.indexOf(g)){l&&(p=Rb(p,{$$start:l,$$end:m}));if(!p.$$bindings){var u=p,v=p,x=p.name,H={isolateScope:null,bindToController:null};D(v.scope)&&(!0===v.bindToController?(H.bindToController=d(v.scope,x,!0),H.isolateScope={}):
H.isolateScope=d(v.scope,x,!1));D(v.bindToController)&&(H.bindToController=d(v.bindToController,x,!0));if(D(H.bindToController)){var E=v.controller,M=v.controllerAs;if(!E)throw ga("noctrl",x);if(!Xc(E,M))throw ga("noident",x);}var t=u.$$bindings=H;D(t.isolateScope)&&(p.$$isolateBindings=t.isolateScope)}b.push(p);k=p}}catch(I){c(I)}}return k}function V(b){if(f.hasOwnProperty(b))for(var c=a.get(b+"Directive"),d=0,e=c.length;d<e;d++)if(b=c[d],b.multiElement)return!0;return!1}function $(a,b){var c=b.$attr,
d=a.$attr;q(a,function(d,e){"$"!=e.charAt(0)&&(b[e]&&b[e]!==d&&(d+=("style"===e?";":" ")+b[e]),a.$set(e,d,!0,c[e]))});q(b,function(b,e){a.hasOwnProperty(e)||"$"===e.charAt(0)||(a[e]=b,"class"!==e&&"style"!==e&&(d[e]=c[e]))})}function ba(a,b,c,d,f,g,h,k){var l=[],m,p,n=b[0],r=a.shift(),u=Rb(r,{templateUrl:null,transclude:null,replace:null,$$originalDirective:r}),H=z(r.templateUrl)?r.templateUrl(b,c):r.templateUrl,E=r.templateNamespace;b.empty();e(H).then(function(e){var v,M;e=xa(e);if(r.replace){e=
Vb.test(e)?$c(da(E,W(e))):[];v=e[0];if(1!=e.length||1!==v.nodeType)throw ga("tplrt",r.name,H);e={$attr:{}};ea(d,b,v);var B=$b(v,[],e);D(r.scope)&&T(B,!0);a=B.concat(a);$(c,e)}else v=n,b.html(e);a.unshift(u);m=oa(a,v,c,f,b,r,g,h,k);q(d,function(a,c){a==v&&(d[c]=b[0])});for(p=s(b[0].childNodes,f);l.length;){e=l.shift();M=l.shift();var t=l.shift(),I=l.shift(),B=b[0];if(!e.$$destroyed){if(M!==n){var P=M.className;k.hasElementTranscludeDirective&&r.replace||(B=Xb(v));ea(t,F(M),B);x(F(B),P)}M=m.transcludeOnThisElement?
za(e,m.transclude,I):I;m(p,e,B,d,M)}}l=null});return function(a,b,c,d,e){a=e;b.$$destroyed||(l?l.push(b,c,d,a):(m.transcludeOnThisElement&&(a=za(b,m.transclude,e)),m(p,b,c,d,a)))}}function Z(a,b){var c=b.priority-a.priority;return 0!==c?c:a.name!==b.name?a.name<b.name?-1:1:a.index-b.index}function X(a,b,c,d){function e(a){return a?" (module: "+a+")":""}if(b)throw ga("multidir",b.name,e(b.$$moduleName),c.name,e(c.$$moduleName),a,ya(d));}function ca(a,c){var d=b(c,!0);d&&a.push({priority:0,compile:function(a){a=
a.parent();var b=!!a.length;b&&aa.$$addBindingClass(a);return function(a,c){var e=c.parent();b||aa.$$addBindingClass(e);aa.$$addBindingInfo(e,d.expressions);a.$watch(d,function(a){c[0].nodeValue=a})}}})}function da(a,b){a=Q(a||"html");switch(a){case "svg":case "math":var c=C.document.createElement("div");c.innerHTML="<"+a+">"+b+"</"+a+">";return c.childNodes[0].childNodes;default:return b}}function ha(a,b){if("srcdoc"==b)return M.HTML;var c=wa(a);if("xlinkHref"==b||"form"==c&&"action"==b||"img"!=
c&&("src"==b||"ngSrc"==b))return M.RESOURCE_URL}function ia(a,c,d,e,f){var g=ha(a,e);f=k[e]||f;var h=b(d,!0,g,f);if(h){if("multiple"===e&&"select"===wa(a))throw ga("selmulti",ya(a));c.push({priority:100,compile:function(){return{pre:function(a,c,k){c=k.$$observers||(k.$$observers=U());if(m.test(e))throw ga("nodomevents");var l=k[e];l!==d&&(h=l&&b(l,!0,g,f),d=l);h&&(k[e]=h(a),(c[e]||(c[e]=[])).$$inter=!0,(k.$$observers&&k.$$observers[e].$$scope||a).$watch(h,function(a,b){"class"===e&&a!=b?k.$updateClass(a,
b):k.$set(e,a)}))}}}})}}function ea(a,b,c){var d=b[0],e=b.length,f=d.parentNode,g,h;if(a)for(g=0,h=a.length;g<h;g++)if(a[g]==d){a[g++]=c;h=g+e-1;for(var k=a.length;g<k;g++,h++)h<k?a[g]=a[h]:delete a[g];a.length-=e-1;a.context===d&&(a.context=c);break}f&&f.replaceChild(c,d);a=C.document.createDocumentFragment();for(g=0;g<e;g++)a.appendChild(b[g]);F.hasData(d)&&(F.data(c,F.data(d)),F(d).off("$destroy"));F.cleanData(a.querySelectorAll("*"));for(g=1;g<e;g++)delete b[g];b[0]=c;b.length=1}function ja(a,
b){return S(function(){return a.apply(null,arguments)},a,b)}function la(a,b,d,e,f,g){try{a(b,d,e,f,g)}catch(h){c(h,ya(d))}}function ka(a,c,d,e,f){function g(b,c,e){z(d.$onChanges)&&c!==e&&(Y||(a.$$postDigest(I),Y=[]),m||(m={},Y.push(h)),m[b]&&(e=m[b].previousValue),m[b]=new Fb(e,c))}function h(){d.$onChanges(m);m=void 0}var k=[],l={},m;q(e,function(e,h){var m=e.attrName,p=e.optional,v,u,x,H;switch(e.mode){case "@":p||ua.call(c,m)||(d[h]=c[m]=void 0);c.$observe(m,function(a){if(G(a)||Ga(a))g(h,a,d[h]),
d[h]=a});c.$$observers[m].$$scope=a;v=c[m];G(v)?d[h]=b(v)(a):Ga(v)&&(d[h]=v);l[h]=new Fb(bc,d[h]);break;case "=":if(!ua.call(c,m)){if(p)break;c[m]=void 0}if(p&&!c[m])break;u=n(c[m]);H=u.literal?na:function(a,b){return a===b||a!==a&&b!==b};x=u.assign||function(){v=d[h]=u(a);throw ga("nonassign",c[m],m,f.name);};v=d[h]=u(a);p=function(b){H(b,d[h])||(H(b,v)?x(a,b=d[h]):d[h]=b);return v=b};p.$stateful=!0;p=e.collection?a.$watchCollection(c[m],p):a.$watch(n(c[m],p),null,u.literal);k.push(p);break;case "<":if(!ua.call(c,
m)){if(p)break;c[m]=void 0}if(p&&!c[m])break;u=n(c[m]);var E=d[h]=u(a);l[h]=new Fb(bc,d[h]);p=a.$watch(u,function(a,b){if(b===a){if(b===E)return;b=E}g(h,a,b);d[h]=a},u.literal);k.push(p);break;case "&":u=c.hasOwnProperty(m)?n(c[m]):A;if(u===A&&p)break;d[h]=function(b){return u(a,b)}}});return{initialChanges:l,removeWatches:k.length&&function(){for(var a=0,b=k.length;a<b;++a)k[a]()}}}var ta=/^\w/,pa=C.document.createElement("div"),qa=u,Y;Da.prototype={$normalize:Aa,$addClass:function(a){a&&0<a.length&&
H.addClass(this.$$element,a)},$removeClass:function(a){a&&0<a.length&&H.removeClass(this.$$element,a)},$updateClass:function(a,b){var c=ad(a,b);c&&c.length&&H.addClass(this.$$element,c);(c=ad(b,a))&&c.length&&H.removeClass(this.$$element,c)},$set:function(a,b,d,e){var f=Uc(this.$$element[0],a),g=bd[a],h=a;f?(this.$$element.prop(a,b),e=f):g&&(this[g]=b,h=g);this[a]=b;e?this.$attr[a]=e:(e=this.$attr[a])||(this.$attr[a]=e=Cc(a,"-"));f=wa(this.$$element);if("a"===f&&("href"===a||"xlinkHref"===a)||"img"===
f&&"src"===a)this[a]=b=E(b,"src"===a);else if("img"===f&&"srcset"===a&&w(b)){for(var f="",g=W(b),k=/(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/,k=/\s/.test(g)?k:/(,)/,g=g.split(k),k=Math.floor(g.length/2),l=0;l<k;l++)var m=2*l,f=f+E(W(g[m]),!0),f=f+(" "+W(g[m+1]));g=W(g[2*l]).split(/\s/);f+=E(W(g[0]),!0);2===g.length&&(f+=" "+W(g[1]));this[a]=b=f}!1!==d&&(null===b||y(b)?this.$$element.removeAttr(e):ta.test(e)?this.$$element.attr(e,b):P(this.$$element[0],e,b));(a=this.$$observers)&&q(a[h],function(a){try{a(b)}catch(d){c(d)}})},
$observe:function(a,b){var c=this,d=c.$$observers||(c.$$observers=U()),e=d[a]||(d[a]=[]);e.push(b);K.$evalAsync(function(){e.$$inter||!c.hasOwnProperty(a)||y(c[a])||b(c[a])});return function(){Za(e,b)}}};var ra=b.startSymbol(),sa=b.endSymbol(),xa="{{"==ra&&"}}"==sa?Xa:function(a){return a.replace(/\{\{/g,ra).replace(/}}/g,sa)},Ba=/^ngAttr[A-Z]/,Ca=/^(.+)Start$/;aa.$$addBindingInfo=p?function(a,b){var c=a.data("$binding")||[];L(b)?c=c.concat(b):c.push(b);a.data("$binding",c)}:A;aa.$$addBindingClass=
p?function(a){x(a,"ng-binding")}:A;aa.$$addScopeInfo=p?function(a,b,c,d){a.data(c?d?"$isolateScopeNoTemplate":"$isolateScope":"$scope",b)}:A;aa.$$addScopeClass=p?function(a,b){x(a,b?"ng-isolate-scope":"ng-scope")}:A;aa.$$createComment=function(a,b){var c="";p&&(c=" "+(a||"")+": ",b&&(c+=b+" "));return C.document.createComment(c)};return aa}]}function Fb(a,b){this.previousValue=a;this.currentValue=b}function Aa(a){return db(a.replace(Yc,""))}function ad(a,b){var d="",c=a.split(/\s+/),e=b.split(/\s+/),
f=0;a:for(;f<c.length;f++){for(var g=c[f],h=0;h<e.length;h++)if(g==e[h])continue a;d+=(0<d.length?" ":"")+g}return d}function $c(a){a=F(a);var b=a.length;if(1>=b)return a;for(;b--;)8===a[b].nodeType&&bg.call(a,b,1);return a}function Xc(a,b){if(b&&G(b))return b;if(G(a)){var d=cd.exec(a);if(d)return d[3]}}function ff(){var a={},b=!1;this.has=function(b){return a.hasOwnProperty(b)};this.register=function(b,c){Qa(b,"controller");D(b)?S(a,b):a[b]=c};this.allowGlobals=function(){b=!0};this.$get=["$injector",
"$window",function(d,c){function e(a,b,c,d){if(!a||!D(a.$scope))throw N("$controller")("noscp",d,b);a.$scope[b]=c}return function(f,g,h,k){var l,m,n;h=!0===h;k&&G(k)&&(n=k);if(G(f)){k=f.match(cd);if(!k)throw cg("ctrlfmt",f);m=k[1];n=n||k[3];f=a.hasOwnProperty(m)?a[m]:Ec(g.$scope,m,!0)||(b?Ec(c,m,!0):void 0);Pa(f,m,!0)}if(h)return h=(L(f)?f[f.length-1]:f).prototype,l=Object.create(h||null),n&&e(g,n,l,m||f.name),S(function(){var a=d.invoke(f,l,g,m);a!==l&&(D(a)||z(a))&&(l=a,n&&e(g,n,l,m||f.name));return l},
{instance:l,identifier:n});l=d.instantiate(f,g,m);n&&e(g,n,l,m||f.name);return l}}]}function gf(){this.$get=["$window",function(a){return F(a.document)}]}function hf(){this.$get=["$log",function(a){return function(b,d){a.error.apply(a,arguments)}}]}function cc(a){return D(a)?da(a)?a.toISOString():bb(a):a}function nf(){this.$get=function(){return function(a){if(!a)return"";var b=[];tc(a,function(a,c){null===a||y(a)||(L(a)?q(a,function(a){b.push(ea(c)+"="+ea(cc(a)))}):b.push(ea(c)+"="+ea(cc(a))))});
return b.join("&")}}}function of(){this.$get=function(){return function(a){function b(a,e,f){null===a||y(a)||(L(a)?q(a,function(a,c){b(a,e+"["+(D(a)?c:"")+"]")}):D(a)&&!da(a)?tc(a,function(a,c){b(a,e+(f?"":"[")+c+(f?"":"]"))}):d.push(ea(e)+"="+ea(cc(a))))}if(!a)return"";var d=[];b(a,"",!0);return d.join("&")}}}function dc(a,b){if(G(a)){var d=a.replace(dg,"").trim();if(d){var c=b("Content-Type");(c=c&&0===c.indexOf(dd))||(c=(c=d.match(eg))&&fg[c[0]].test(d));c&&(a=xc(d))}}return a}function ed(a){var b=
U(),d;G(a)?q(a.split("\n"),function(a){d=a.indexOf(":");var e=Q(W(a.substr(0,d)));a=W(a.substr(d+1));e&&(b[e]=b[e]?b[e]+", "+a:a)}):D(a)&&q(a,function(a,d){var f=Q(d),g=W(a);f&&(b[f]=b[f]?b[f]+", "+g:g)});return b}function fd(a){var b;return function(d){b||(b=ed(a));return d?(d=b[Q(d)],void 0===d&&(d=null),d):b}}function gd(a,b,d,c){if(z(c))return c(a,b,d);q(c,function(c){a=c(a,b,d)});return a}function mf(){var a=this.defaults={transformResponse:[dc],transformRequest:[function(a){return D(a)&&"[object File]"!==
ma.call(a)&&"[object Blob]"!==ma.call(a)&&"[object FormData]"!==ma.call(a)?bb(a):a}],headers:{common:{Accept:"application/json, text/plain, */*"},post:ia(ec),put:ia(ec),patch:ia(ec)},xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",paramSerializer:"$httpParamSerializer"},b=!1;this.useApplyAsync=function(a){return w(a)?(b=!!a,this):b};var d=!0;this.useLegacyPromiseExtensions=function(a){return w(a)?(d=!!a,this):d};var c=this.interceptors=[];this.$get=["$httpBackend","$$cookieReader","$cacheFactory",
"$rootScope","$q","$injector",function(e,f,g,h,k,l){function m(b){function c(a,b){for(var d=0,e=b.length;d<e;){var f=b[d++],g=b[d++];a=a.then(f,g)}b.length=0;return a}function e(a,b){var c,d={};q(a,function(a,e){z(a)?(c=a(b),null!=c&&(d[e]=c)):d[e]=a});return d}function f(a){var b=S({},a);b.data=gd(a.data,a.headers,a.status,g.transformResponse);a=a.status;return 200<=a&&300>a?b:k.reject(b)}if(!D(b))throw N("$http")("badreq",b);if(!G(b.url))throw N("$http")("badreq",b.url);var g=S({method:"get",transformRequest:a.transformRequest,
transformResponse:a.transformResponse,paramSerializer:a.paramSerializer},b);g.headers=function(b){var c=a.headers,d=S({},b.headers),f,g,h,c=S({},c.common,c[Q(b.method)]);a:for(f in c){g=Q(f);for(h in d)if(Q(h)===g)continue a;d[f]=c[f]}return e(d,ia(b))}(b);g.method=ub(g.method);g.paramSerializer=G(g.paramSerializer)?l.get(g.paramSerializer):g.paramSerializer;var h=[],m=[],p=k.when(g);q(R,function(a){(a.request||a.requestError)&&h.unshift(a.request,a.requestError);(a.response||a.responseError)&&m.push(a.response,
a.responseError)});p=c(p,h);p=p.then(function(b){var c=b.headers,d=gd(b.data,fd(c),void 0,b.transformRequest);y(d)&&q(c,function(a,b){"content-type"===Q(b)&&delete c[b]});y(b.withCredentials)&&!y(a.withCredentials)&&(b.withCredentials=a.withCredentials);return n(b,d).then(f,f)});p=c(p,m);d?(p.success=function(a){Pa(a,"fn");p.then(function(b){a(b.data,b.status,b.headers,g)});return p},p.error=function(a){Pa(a,"fn");p.then(null,function(b){a(b.data,b.status,b.headers,g)});return p}):(p.success=hd("success"),
p.error=hd("error"));return p}function n(c,d){function g(a){if(a){var c={};q(a,function(a,d){c[d]=function(c){function d(){a(c)}b?h.$applyAsync(d):h.$$phase?d():h.$apply(d)}});return c}}function l(a,c,d,e){function f(){n(c,a,d,e)}E&&(200<=a&&300>a?E.put(P,[a,c,ed(d),e]):E.remove(P));b?h.$applyAsync(f):(f(),h.$$phase||h.$apply())}function n(a,b,d,e){b=-1<=b?b:0;(200<=b&&300>b?M.resolve:M.reject)({data:a,status:b,headers:fd(d),config:c,statusText:e})}function t(a){n(a.data,a.status,ia(a.headers()),
a.statusText)}function R(){var a=m.pendingRequests.indexOf(c);-1!==a&&m.pendingRequests.splice(a,1)}var M=k.defer(),H=M.promise,E,I,Da=c.headers,P=p(c.url,c.paramSerializer(c.params));m.pendingRequests.push(c);H.then(R,R);!c.cache&&!a.cache||!1===c.cache||"GET"!==c.method&&"JSONP"!==c.method||(E=D(c.cache)?c.cache:D(a.cache)?a.cache:u);E&&(I=E.get(P),w(I)?I&&z(I.then)?I.then(t,t):L(I)?n(I[1],I[0],ia(I[2]),I[3]):n(I,200,{},"OK"):E.put(P,H));y(I)&&((I=id(c.url)?f()[c.xsrfCookieName||a.xsrfCookieName]:
void 0)&&(Da[c.xsrfHeaderName||a.xsrfHeaderName]=I),e(c.method,P,d,l,Da,c.timeout,c.withCredentials,c.responseType,g(c.eventHandlers),g(c.uploadEventHandlers)));return H}function p(a,b){0<b.length&&(a+=(-1==a.indexOf("?")?"?":"&")+b);return a}var u=g("$http");a.paramSerializer=G(a.paramSerializer)?l.get(a.paramSerializer):a.paramSerializer;var R=[];q(c,function(a){R.unshift(G(a)?l.get(a):l.invoke(a))});m.pendingRequests=[];(function(a){q(arguments,function(a){m[a]=function(b,c){return m(S({},c||{},
{method:a,url:b}))}})})("get","delete","head","jsonp");(function(a){q(arguments,function(a){m[a]=function(b,c,d){return m(S({},d||{},{method:a,url:b,data:c}))}})})("post","put","patch");m.defaults=a;return m}]}function qf(){this.$get=function(){return function(){return new C.XMLHttpRequest}}}function pf(){this.$get=["$browser","$jsonpCallbacks","$document","$xhrFactory",function(a,b,d,c){return gg(a,c,a.defer,b,d[0])}]}function gg(a,b,d,c,e){function f(a,b,d){a=a.replace("JSON_CALLBACK",b);var f=
e.createElement("script"),m=null;f.type="text/javascript";f.src=a;f.async=!0;m=function(a){f.removeEventListener("load",m,!1);f.removeEventListener("error",m,!1);e.body.removeChild(f);f=null;var g=-1,u="unknown";a&&("load"!==a.type||c.wasCalled(b)||(a={type:"error"}),u=a.type,g="error"===a.type?404:200);d&&d(g,u)};f.addEventListener("load",m,!1);f.addEventListener("error",m,!1);e.body.appendChild(f);return m}return function(e,h,k,l,m,n,p,u,R,B){function r(){fa&&fa();t&&t.abort()}function J(b,c,e,
f,g){w(M)&&d.cancel(M);fa=t=null;b(c,e,f,g);a.$$completeOutstandingRequest(A)}a.$$incOutstandingRequestCount();h=h||a.url();if("jsonp"===Q(e))var v=c.createCallback(h),fa=f(h,v,function(a,b){var d=200===a&&c.getResponse(v);J(l,a,d,"",b);c.removeCallback(v)});else{var t=b(e,h);t.open(e,h,!0);q(m,function(a,b){w(a)&&t.setRequestHeader(b,a)});t.onload=function(){var a=t.statusText||"",b="response"in t?t.response:t.responseText,c=1223===t.status?204:t.status;0===c&&(c=b?200:"file"==Y(h).protocol?404:
0);J(l,c,b,t.getAllResponseHeaders(),a)};e=function(){J(l,-1,null,null,"")};t.onerror=e;t.onabort=e;q(R,function(a,b){t.addEventListener(b,a)});q(B,function(a,b){t.upload.addEventListener(b,a)});p&&(t.withCredentials=!0);if(u)try{t.responseType=u}catch(K){if("json"!==u)throw K;}t.send(y(k)?null:k)}if(0<n)var M=d(r,n);else n&&z(n.then)&&n.then(r)}}function kf(){var a="{{",b="}}";this.startSymbol=function(b){return b?(a=b,this):a};this.endSymbol=function(a){return a?(b=a,this):b};this.$get=["$parse",
"$exceptionHandler","$sce",function(d,c,e){function f(a){return"\\\\\\"+a}function g(c){return c.replace(n,a).replace(p,b)}function h(a,b,c,d){var e;return e=a.$watch(function(a){e();return d(a)},b,c)}function k(f,k,p,n){function J(a){try{var b=a;a=p?e.getTrusted(p,b):e.valueOf(b);var d;if(n&&!w(a))d=a;else if(null==a)d="";else{switch(typeof a){case "string":break;case "number":a=""+a;break;default:a=bb(a)}d=a}return d}catch(g){c(Ka.interr(f,g))}}if(!f.length||-1===f.indexOf(a)){var v;k||(k=g(f),
v=ha(k),v.exp=f,v.expressions=[],v.$$watchDelegate=h);return v}n=!!n;var q,t,K=0,M=[],H=[];v=f.length;for(var E=[],I=[];K<v;)if(-1!=(q=f.indexOf(a,K))&&-1!=(t=f.indexOf(b,q+l)))K!==q&&E.push(g(f.substring(K,q))),K=f.substring(q+l,t),M.push(K),H.push(d(K,J)),K=t+m,I.push(E.length),E.push("");else{K!==v&&E.push(g(f.substring(K)));break}p&&1<E.length&&Ka.throwNoconcat(f);if(!k||M.length){var Da=function(a){for(var b=0,c=M.length;b<c;b++){if(n&&y(a[b]))return;E[I[b]]=a[b]}return E.join("")};return S(function(a){var b=
0,d=M.length,e=Array(d);try{for(;b<d;b++)e[b]=H[b](a);return Da(e)}catch(g){c(Ka.interr(f,g))}},{exp:f,expressions:M,$$watchDelegate:function(a,b){var c;return a.$watchGroup(H,function(d,e){var f=Da(d);z(b)&&b.call(this,f,d!==e?c:f,a);c=f})}})}}var l=a.length,m=b.length,n=new RegExp(a.replace(/./g,f),"g"),p=new RegExp(b.replace(/./g,f),"g");k.startSymbol=function(){return a};k.endSymbol=function(){return b};return k}]}function lf(){this.$get=["$rootScope","$window","$q","$$q","$browser",function(a,
b,d,c,e){function f(f,k,l,m){function n(){p?f.apply(null,u):f(r)}var p=4<arguments.length,u=p?va.call(arguments,4):[],R=b.setInterval,q=b.clearInterval,r=0,J=w(m)&&!m,v=(J?c:d).defer(),fa=v.promise;l=w(l)?l:0;fa.$$intervalId=R(function(){J?e.defer(n):a.$evalAsync(n);v.notify(r++);0<l&&r>=l&&(v.resolve(r),q(fa.$$intervalId),delete g[fa.$$intervalId]);J||a.$apply()},k);g[fa.$$intervalId]=v;return fa}var g={};f.cancel=function(a){return a&&a.$$intervalId in g?(g[a.$$intervalId].reject("canceled"),b.clearInterval(a.$$intervalId),
delete g[a.$$intervalId],!0):!1};return f}]}function fc(a){a=a.split("/");for(var b=a.length;b--;)a[b]=qb(a[b]);return a.join("/")}function jd(a,b){var d=Y(a);b.$$protocol=d.protocol;b.$$host=d.hostname;b.$$port=Z(d.port)||hg[d.protocol]||null}function kd(a,b){var d="/"!==a.charAt(0);d&&(a="/"+a);var c=Y(a);b.$$path=decodeURIComponent(d&&"/"===c.pathname.charAt(0)?c.pathname.substring(1):c.pathname);b.$$search=Ac(c.search);b.$$hash=decodeURIComponent(c.hash);b.$$path&&"/"!=b.$$path.charAt(0)&&(b.$$path=
"/"+b.$$path)}function ka(a,b){if(0===b.lastIndexOf(a,0))return b.substr(a.length)}function Ja(a){var b=a.indexOf("#");return-1==b?a:a.substr(0,b)}function jb(a){return a.replace(/(#.+)|#$/,"$1")}function gc(a,b,d){this.$$html5=!0;d=d||"";jd(a,this);this.$$parse=function(a){var d=ka(b,a);if(!G(d))throw Gb("ipthprfx",a,b);kd(d,this);this.$$path||(this.$$path="/");this.$$compose()};this.$$compose=function(){var a=Tb(this.$$search),d=this.$$hash?"#"+qb(this.$$hash):"";this.$$url=fc(this.$$path)+(a?"?"+
a:"")+d;this.$$absUrl=b+this.$$url.substr(1)};this.$$parseLinkUrl=function(c,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),!0;var f,g;w(f=ka(a,c))?(g=f,g=w(f=ka(d,f))?b+(ka("/",f)||f):a+g):w(f=ka(b,c))?g=b+f:b==c+"/"&&(g=b);g&&this.$$parse(g);return!!g}}function hc(a,b,d){jd(a,this);this.$$parse=function(c){var e=ka(a,c)||ka(b,c),f;y(e)||"#"!==e.charAt(0)?this.$$html5?f=e:(f="",y(e)&&(a=c,this.replace())):(f=ka(d,e),y(f)&&(f=e));kd(f,this);c=this.$$path;var e=a,g=/^\/[A-Z]:(\/.*)/;0===f.lastIndexOf(e,
0)&&(f=f.replace(e,""));g.exec(f)||(c=(f=g.exec(c))?f[1]:c);this.$$path=c;this.$$compose()};this.$$compose=function(){var b=Tb(this.$$search),e=this.$$hash?"#"+qb(this.$$hash):"";this.$$url=fc(this.$$path)+(b?"?"+b:"")+e;this.$$absUrl=a+(this.$$url?d+this.$$url:"")};this.$$parseLinkUrl=function(b,d){return Ja(a)==Ja(b)?(this.$$parse(b),!0):!1}}function ld(a,b,d){this.$$html5=!0;hc.apply(this,arguments);this.$$parseLinkUrl=function(c,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),!0;var f,g;a==Ja(c)?
f=c:(g=ka(b,c))?f=a+d+g:b===c+"/"&&(f=b);f&&this.$$parse(f);return!!f};this.$$compose=function(){var b=Tb(this.$$search),e=this.$$hash?"#"+qb(this.$$hash):"";this.$$url=fc(this.$$path)+(b?"?"+b:"")+e;this.$$absUrl=a+d+this.$$url}}function Hb(a){return function(){return this[a]}}function md(a,b){return function(d){if(y(d))return this[a];this[a]=b(d);this.$$compose();return this}}function sf(){var a="",b={enabled:!1,requireBase:!0,rewriteLinks:!0};this.hashPrefix=function(b){return w(b)?(a=b,this):
a};this.html5Mode=function(a){return Ga(a)?(b.enabled=a,this):D(a)?(Ga(a.enabled)&&(b.enabled=a.enabled),Ga(a.requireBase)&&(b.requireBase=a.requireBase),Ga(a.rewriteLinks)&&(b.rewriteLinks=a.rewriteLinks),this):b};this.$get=["$rootScope","$browser","$sniffer","$rootElement","$window",function(d,c,e,f,g){function h(a,b,d){var e=l.url(),f=l.$$state;try{c.url(a,b,d),l.$$state=c.state()}catch(g){throw l.url(e),l.$$state=f,g;}}function k(a,b){d.$broadcast("$locationChangeSuccess",l.absUrl(),a,l.$$state,
b)}var l,m;m=c.baseHref();var n=c.url(),p;if(b.enabled){if(!m&&b.requireBase)throw Gb("nobase");p=n.substring(0,n.indexOf("/",n.indexOf("//")+2))+(m||"/");m=e.history?gc:ld}else p=Ja(n),m=hc;var u=p.substr(0,Ja(p).lastIndexOf("/")+1);l=new m(p,u,"#"+a);l.$$parseLinkUrl(n,n);l.$$state=c.state();var R=/^\s*(javascript|mailto):/i;f.on("click",function(a){if(b.rewriteLinks&&!a.ctrlKey&&!a.metaKey&&!a.shiftKey&&2!=a.which&&2!=a.button){for(var e=F(a.target);"a"!==wa(e[0]);)if(e[0]===f[0]||!(e=e.parent())[0])return;
var h=e.prop("href"),k=e.attr("href")||e.attr("xlink:href");D(h)&&"[object SVGAnimatedString]"===h.toString()&&(h=Y(h.animVal).href);R.test(h)||!h||e.attr("target")||a.isDefaultPrevented()||!l.$$parseLinkUrl(h,k)||(a.preventDefault(),l.absUrl()!=c.url()&&(d.$apply(),g.angular["ff-684208-preventDefault"]=!0))}});jb(l.absUrl())!=jb(n)&&c.url(l.absUrl(),!0);var q=!0;c.onUrlChange(function(a,b){y(ka(u,a))?g.location.href=a:(d.$evalAsync(function(){var c=l.absUrl(),e=l.$$state,f;a=jb(a);l.$$parse(a);l.$$state=
b;f=d.$broadcast("$locationChangeStart",a,c,b,e).defaultPrevented;l.absUrl()===a&&(f?(l.$$parse(c),l.$$state=e,h(c,!1,e)):(q=!1,k(c,e)))}),d.$$phase||d.$digest())});d.$watch(function(){var a=jb(c.url()),b=jb(l.absUrl()),f=c.state(),g=l.$$replace,m=a!==b||l.$$html5&&e.history&&f!==l.$$state;if(q||m)q=!1,d.$evalAsync(function(){var b=l.absUrl(),c=d.$broadcast("$locationChangeStart",b,a,l.$$state,f).defaultPrevented;l.absUrl()===b&&(c?(l.$$parse(a),l.$$state=f):(m&&h(b,g,f===l.$$state?null:l.$$state),
k(a,f)))});l.$$replace=!1});return l}]}function tf(){var a=!0,b=this;this.debugEnabled=function(b){return w(b)?(a=b,this):a};this.$get=["$window",function(d){function c(a){a instanceof Error&&(a.stack?a=a.message&&-1===a.stack.indexOf(a.message)?"Error: "+a.message+"\n"+a.stack:a.stack:a.sourceURL&&(a=a.message+"\n"+a.sourceURL+":"+a.line));return a}function e(a){var b=d.console||{},e=b[a]||b.log||A;a=!1;try{a=!!e.apply}catch(k){}return a?function(){var a=[];q(arguments,function(b){a.push(c(b))});
return e.apply(b,a)}:function(a,b){e(a,null==b?"":b)}}return{log:e("log"),info:e("info"),warn:e("warn"),error:e("error"),debug:function(){var c=e("debug");return function(){a&&c.apply(b,arguments)}}()}}]}function Sa(a,b){if("__defineGetter__"===a||"__defineSetter__"===a||"__lookupGetter__"===a||"__lookupSetter__"===a||"__proto__"===a)throw X("isecfld",b);return a}function ig(a){return a+""}function ra(a,b){if(a){if(a.constructor===a)throw X("isecfn",b);if(a.window===a)throw X("isecwindow",b);if(a.children&&
(a.nodeName||a.prop&&a.attr&&a.find))throw X("isecdom",b);if(a===Object)throw X("isecobj",b);}return a}function nd(a,b){if(a){if(a.constructor===a)throw X("isecfn",b);if(a===jg||a===kg||a===lg)throw X("isecff",b);}}function Ib(a,b){if(a&&(a===(0).constructor||a===(!1).constructor||a==="".constructor||a==={}.constructor||a===[].constructor||a===Function.constructor))throw X("isecaf",b);}function mg(a,b){return"undefined"!==typeof a?a:b}function od(a,b){return"undefined"===typeof a?b:"undefined"===
typeof b?a:a+b}function V(a,b){var d,c;switch(a.type){case s.Program:d=!0;q(a.body,function(a){V(a.expression,b);d=d&&a.expression.constant});a.constant=d;break;case s.Literal:a.constant=!0;a.toWatch=[];break;case s.UnaryExpression:V(a.argument,b);a.constant=a.argument.constant;a.toWatch=a.argument.toWatch;break;case s.BinaryExpression:V(a.left,b);V(a.right,b);a.constant=a.left.constant&&a.right.constant;a.toWatch=a.left.toWatch.concat(a.right.toWatch);break;case s.LogicalExpression:V(a.left,b);V(a.right,
b);a.constant=a.left.constant&&a.right.constant;a.toWatch=a.constant?[]:[a];break;case s.ConditionalExpression:V(a.test,b);V(a.alternate,b);V(a.consequent,b);a.constant=a.test.constant&&a.alternate.constant&&a.consequent.constant;a.toWatch=a.constant?[]:[a];break;case s.Identifier:a.constant=!1;a.toWatch=[a];break;case s.MemberExpression:V(a.object,b);a.computed&&V(a.property,b);a.constant=a.object.constant&&(!a.computed||a.property.constant);a.toWatch=[a];break;case s.CallExpression:d=a.filter?!b(a.callee.name).$stateful:
!1;c=[];q(a.arguments,function(a){V(a,b);d=d&&a.constant;a.constant||c.push.apply(c,a.toWatch)});a.constant=d;a.toWatch=a.filter&&!b(a.callee.name).$stateful?c:[a];break;case s.AssignmentExpression:V(a.left,b);V(a.right,b);a.constant=a.left.constant&&a.right.constant;a.toWatch=[a];break;case s.ArrayExpression:d=!0;c=[];q(a.elements,function(a){V(a,b);d=d&&a.constant;a.constant||c.push.apply(c,a.toWatch)});a.constant=d;a.toWatch=c;break;case s.ObjectExpression:d=!0;c=[];q(a.properties,function(a){V(a.value,
b);d=d&&a.value.constant&&!a.computed;a.value.constant||c.push.apply(c,a.value.toWatch)});a.constant=d;a.toWatch=c;break;case s.ThisExpression:a.constant=!1;a.toWatch=[];break;case s.LocalsExpression:a.constant=!1,a.toWatch=[]}}function pd(a){if(1==a.length){a=a[0].expression;var b=a.toWatch;return 1!==b.length?b:b[0]!==a?b:void 0}}function qd(a){return a.type===s.Identifier||a.type===s.MemberExpression}function rd(a){if(1===a.body.length&&qd(a.body[0].expression))return{type:s.AssignmentExpression,
left:a.body[0].expression,right:{type:s.NGValueParameter},operator:"="}}function sd(a){return 0===a.body.length||1===a.body.length&&(a.body[0].expression.type===s.Literal||a.body[0].expression.type===s.ArrayExpression||a.body[0].expression.type===s.ObjectExpression)}function td(a,b){this.astBuilder=a;this.$filter=b}function ud(a,b){this.astBuilder=a;this.$filter=b}function Jb(a){return"constructor"==a}function ic(a){return z(a.valueOf)?a.valueOf():ng.call(a)}function uf(){var a=U(),b=U(),d={"true":!0,
"false":!1,"null":null,undefined:void 0},c,e;this.addLiteral=function(a,b){d[a]=b};this.setIdentifierFns=function(a,b){c=a;e=b;return this};this.$get=["$filter",function(f){function g(c,d,e){var g,k,H;e=e||J;switch(typeof c){case "string":H=c=c.trim();var E=e?b:a;g=E[H];if(!g){":"===c.charAt(0)&&":"===c.charAt(1)&&(k=!0,c=c.substring(2));g=e?r:B;var q=new jc(g);g=(new kc(q,f,g)).parse(c);g.constant?g.$$watchDelegate=p:k?g.$$watchDelegate=g.literal?n:m:g.inputs&&(g.$$watchDelegate=l);e&&(g=h(g));E[H]=
g}return u(g,d);case "function":return u(c,d);default:return u(A,d)}}function h(a){function b(c,d,e,f){var g=J;J=!0;try{return a(c,d,e,f)}finally{J=g}}if(!a)return a;b.$$watchDelegate=a.$$watchDelegate;b.assign=h(a.assign);b.constant=a.constant;b.literal=a.literal;for(var c=0;a.inputs&&c<a.inputs.length;++c)a.inputs[c]=h(a.inputs[c]);b.inputs=a.inputs;return b}function k(a,b){return null==a||null==b?a===b:"object"===typeof a&&(a=ic(a),"object"===typeof a)?!1:a===b||a!==a&&b!==b}function l(a,b,c,d,
e){var f=d.inputs,g;if(1===f.length){var h=k,f=f[0];return a.$watch(function(a){var b=f(a);k(b,h)||(g=d(a,void 0,void 0,[b]),h=b&&ic(b));return g},b,c,e)}for(var l=[],m=[],p=0,n=f.length;p<n;p++)l[p]=k,m[p]=null;return a.$watch(function(a){for(var b=!1,c=0,e=f.length;c<e;c++){var h=f[c](a);if(b||(b=!k(h,l[c])))m[c]=h,l[c]=h&&ic(h)}b&&(g=d(a,void 0,void 0,m));return g},b,c,e)}function m(a,b,c,d){var e,f;return e=a.$watch(function(a){return d(a)},function(a,c,d){f=a;z(b)&&b.apply(this,arguments);w(a)&&
d.$$postDigest(function(){w(f)&&e()})},c)}function n(a,b,c,d){function e(a){var b=!0;q(a,function(a){w(a)||(b=!1)});return b}var f,g;return f=a.$watch(function(a){return d(a)},function(a,c,d){g=a;z(b)&&b.call(this,a,c,d);e(a)&&d.$$postDigest(function(){e(g)&&f()})},c)}function p(a,b,c,d){var e;return e=a.$watch(function(a){e();return d(a)},b,c)}function u(a,b){if(!b)return a;var c=a.$$watchDelegate,d=!1,c=c!==n&&c!==m?function(c,e,f,g){f=d&&g?g[0]:a(c,e,f,g);return b(f,c,e)}:function(c,d,e,f){e=a(c,
d,e,f);c=b(e,c,d);return w(e)?c:e};a.$$watchDelegate&&a.$$watchDelegate!==l?c.$$watchDelegate=a.$$watchDelegate:b.$stateful||(c.$$watchDelegate=l,d=!a.inputs,c.inputs=a.inputs?a.inputs:[a]);return c}var R=Ba().noUnsafeEval,B={csp:R,expensiveChecks:!1,literals:pa(d),isIdentifierStart:z(c)&&c,isIdentifierContinue:z(e)&&e},r={csp:R,expensiveChecks:!0,literals:pa(d),isIdentifierStart:z(c)&&c,isIdentifierContinue:z(e)&&e},J=!1;g.$$runningExpensiveChecks=function(){return J};return g}]}function wf(){this.$get=
["$rootScope","$exceptionHandler",function(a,b){return vd(function(b){a.$evalAsync(b)},b)}]}function xf(){this.$get=["$browser","$exceptionHandler",function(a,b){return vd(function(b){a.defer(b)},b)}]}function vd(a,b){function d(){this.$$state={status:0}}function c(a,b){return function(c){b.call(a,c)}}function e(c){!c.processScheduled&&c.pending&&(c.processScheduled=!0,a(function(){var a,d,e;e=c.pending;c.processScheduled=!1;c.pending=void 0;for(var f=0,g=e.length;f<g;++f){d=e[f][0];a=e[f][c.status];
try{z(a)?d.resolve(a(c.value)):1===c.status?d.resolve(c.value):d.reject(c.value)}catch(h){d.reject(h),b(h)}}}))}function f(){this.promise=new d}var g=N("$q",TypeError),h=function(){var a=new f;a.resolve=c(a,a.resolve);a.reject=c(a,a.reject);a.notify=c(a,a.notify);return a};S(d.prototype,{then:function(a,b,c){if(y(a)&&y(b)&&y(c))return this;var d=new f;this.$$state.pending=this.$$state.pending||[];this.$$state.pending.push([d,a,b,c]);0<this.$$state.status&&e(this.$$state);return d.promise},"catch":function(a){return this.then(null,
a)},"finally":function(a,b){return this.then(function(b){return l(b,!0,a)},function(b){return l(b,!1,a)},b)}});S(f.prototype,{resolve:function(a){this.promise.$$state.status||(a===this.promise?this.$$reject(g("qcycle",a)):this.$$resolve(a))},$$resolve:function(a){function d(a){k||(k=!0,h.$$resolve(a))}function f(a){k||(k=!0,h.$$reject(a))}var g,h=this,k=!1;try{if(D(a)||z(a))g=a&&a.then;z(g)?(this.promise.$$state.status=-1,g.call(a,d,f,c(this,this.notify))):(this.promise.$$state.value=a,this.promise.$$state.status=
1,e(this.promise.$$state))}catch(l){f(l),b(l)}},reject:function(a){this.promise.$$state.status||this.$$reject(a)},$$reject:function(a){this.promise.$$state.value=a;this.promise.$$state.status=2;e(this.promise.$$state)},notify:function(c){var d=this.promise.$$state.pending;0>=this.promise.$$state.status&&d&&d.length&&a(function(){for(var a,e,f=0,g=d.length;f<g;f++){e=d[f][0];a=d[f][3];try{e.notify(z(a)?a(c):c)}catch(h){b(h)}}})}});var k=function(a,b){var c=new f;b?c.resolve(a):c.reject(a);return c.promise},
l=function(a,b,c){var d=null;try{z(c)&&(d=c())}catch(e){return k(e,!1)}return d&&z(d.then)?d.then(function(){return k(a,b)},function(a){return k(a,!1)}):k(a,b)},m=function(a,b,c,d){var e=new f;e.resolve(a);return e.promise.then(b,c,d)},n=function(a){if(!z(a))throw g("norslvr",a);var b=new f;a(function(a){b.resolve(a)},function(a){b.reject(a)});return b.promise};n.prototype=d.prototype;n.defer=h;n.reject=function(a){var b=new f;b.reject(a);return b.promise};n.when=m;n.resolve=m;n.all=function(a){var b=
new f,c=0,d=L(a)?[]:{};q(a,function(a,e){c++;m(a).then(function(a){d.hasOwnProperty(e)||(d[e]=a,--c||b.resolve(d))},function(a){d.hasOwnProperty(e)||b.reject(a)})});0===c&&b.resolve(d);return b.promise};n.race=function(a){var b=h();q(a,function(a){m(a).then(b.resolve,b.reject)});return b.promise};return n}function Gf(){this.$get=["$window","$timeout",function(a,b){var d=a.requestAnimationFrame||a.webkitRequestAnimationFrame,c=a.cancelAnimationFrame||a.webkitCancelAnimationFrame||a.webkitCancelRequestAnimationFrame,
e=!!d,f=e?function(a){var b=d(a);return function(){c(b)}}:function(a){var c=b(a,16.66,!1);return function(){b.cancel(c)}};f.supported=e;return f}]}function vf(){function a(a){function b(){this.$$watchers=this.$$nextSibling=this.$$childHead=this.$$childTail=null;this.$$listeners={};this.$$listenerCount={};this.$$watchersCount=0;this.$id=++pb;this.$$ChildScope=null}b.prototype=a;return b}var b=10,d=N("$rootScope"),c=null,e=null;this.digestTtl=function(a){arguments.length&&(b=a);return b};this.$get=
["$exceptionHandler","$parse","$browser",function(f,g,h){function k(a){a.currentScope.$$destroyed=!0}function l(a){9===Ea&&(a.$$childHead&&l(a.$$childHead),a.$$nextSibling&&l(a.$$nextSibling));a.$parent=a.$$nextSibling=a.$$prevSibling=a.$$childHead=a.$$childTail=a.$root=a.$$watchers=null}function m(){this.$id=++pb;this.$$phase=this.$parent=this.$$watchers=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=null;this.$root=this;this.$$destroyed=!1;this.$$listeners={};this.$$listenerCount=
{};this.$$watchersCount=0;this.$$isolateBindings=null}function n(a){if(J.$$phase)throw d("inprog",J.$$phase);J.$$phase=a}function p(a,b){do a.$$watchersCount+=b;while(a=a.$parent)}function u(a,b,c){do a.$$listenerCount[c]-=b,0===a.$$listenerCount[c]&&delete a.$$listenerCount[c];while(a=a.$parent)}function s(){}function B(){for(;t.length;)try{t.shift()()}catch(a){f(a)}e=null}function r(){null===e&&(e=h.defer(function(){J.$apply(B)}))}m.prototype={constructor:m,$new:function(b,c){var d;c=c||this;b?
(d=new m,d.$root=this.$root):(this.$$ChildScope||(this.$$ChildScope=a(this)),d=new this.$$ChildScope);d.$parent=c;d.$$prevSibling=c.$$childTail;c.$$childHead?(c.$$childTail.$$nextSibling=d,c.$$childTail=d):c.$$childHead=c.$$childTail=d;(b||c!=this)&&d.$on("$destroy",k);return d},$watch:function(a,b,d,e){var f=g(a);if(f.$$watchDelegate)return f.$$watchDelegate(this,b,d,f,a);var h=this,k=h.$$watchers,l={fn:b,last:s,get:f,exp:e||a,eq:!!d};c=null;z(b)||(l.fn=A);k||(k=h.$$watchers=[]);k.unshift(l);p(this,
1);return function(){0<=Za(k,l)&&p(h,-1);c=null}},$watchGroup:function(a,b){function c(){h=!1;k?(k=!1,b(e,e,g)):b(e,d,g)}var d=Array(a.length),e=Array(a.length),f=[],g=this,h=!1,k=!0;if(!a.length){var l=!0;g.$evalAsync(function(){l&&b(e,e,g)});return function(){l=!1}}if(1===a.length)return this.$watch(a[0],function(a,c,f){e[0]=a;d[0]=c;b(e,a===c?e:d,f)});q(a,function(a,b){var k=g.$watch(a,function(a,f){e[b]=a;d[b]=f;h||(h=!0,g.$evalAsync(c))});f.push(k)});return function(){for(;f.length;)f.shift()()}},
$watchCollection:function(a,b){function c(a){e=a;var b,d,g,h;if(!y(e)){if(D(e))if(ta(e))for(f!==n&&(f=n,u=f.length=0,l++),a=e.length,u!==a&&(l++,f.length=u=a),b=0;b<a;b++)h=f[b],g=e[b],d=h!==h&&g!==g,d||h===g||(l++,f[b]=g);else{f!==p&&(f=p={},u=0,l++);a=0;for(b in e)ua.call(e,b)&&(a++,g=e[b],h=f[b],b in f?(d=h!==h&&g!==g,d||h===g||(l++,f[b]=g)):(u++,f[b]=g,l++));if(u>a)for(b in l++,f)ua.call(e,b)||(u--,delete f[b])}else f!==e&&(f=e,l++);return l}}c.$stateful=!0;var d=this,e,f,h,k=1<b.length,l=0,m=
g(a,c),n=[],p={},r=!0,u=0;return this.$watch(m,function(){r?(r=!1,b(e,e,d)):b(e,h,d);if(k)if(D(e))if(ta(e)){h=Array(e.length);for(var a=0;a<e.length;a++)h[a]=e[a]}else for(a in h={},e)ua.call(e,a)&&(h[a]=e[a]);else h=e})},$digest:function(){var a,g,k,l,m,p,u,r,q=b,t,y=[],A,C;n("$digest");h.$$checkUrlChange();this===J&&null!==e&&(h.defer.cancel(e),B());c=null;do{r=!1;t=this;for(p=0;p<v.length;p++){try{C=v[p],C.scope.$eval(C.expression,C.locals)}catch(F){f(F)}c=null}v.length=0;a:do{if(p=t.$$watchers)for(u=
p.length;u--;)try{if(a=p[u])if(m=a.get,(g=m(t))!==(k=a.last)&&!(a.eq?na(g,k):"number"===typeof g&&"number"===typeof k&&isNaN(g)&&isNaN(k)))r=!0,c=a,a.last=a.eq?pa(g,null):g,l=a.fn,l(g,k===s?g:k,t),5>q&&(A=4-q,y[A]||(y[A]=[]),y[A].push({msg:z(a.exp)?"fn: "+(a.exp.name||a.exp.toString()):a.exp,newVal:g,oldVal:k}));else if(a===c){r=!1;break a}}catch(G){f(G)}if(!(p=t.$$watchersCount&&t.$$childHead||t!==this&&t.$$nextSibling))for(;t!==this&&!(p=t.$$nextSibling);)t=t.$parent}while(t=p);if((r||v.length)&&
!q--)throw J.$$phase=null,d("infdig",b,y);}while(r||v.length);for(J.$$phase=null;K<w.length;)try{w[K++]()}catch(D){f(D)}w.length=K=0},$destroy:function(){if(!this.$$destroyed){var a=this.$parent;this.$broadcast("$destroy");this.$$destroyed=!0;this===J&&h.$$applicationDestroyed();p(this,-this.$$watchersCount);for(var b in this.$$listenerCount)u(this,this.$$listenerCount[b],b);a&&a.$$childHead==this&&(a.$$childHead=this.$$nextSibling);a&&a.$$childTail==this&&(a.$$childTail=this.$$prevSibling);this.$$prevSibling&&
(this.$$prevSibling.$$nextSibling=this.$$nextSibling);this.$$nextSibling&&(this.$$nextSibling.$$prevSibling=this.$$prevSibling);this.$destroy=this.$digest=this.$apply=this.$evalAsync=this.$applyAsync=A;this.$on=this.$watch=this.$watchGroup=function(){return A};this.$$listeners={};this.$$nextSibling=null;l(this)}},$eval:function(a,b){return g(a)(this,b)},$evalAsync:function(a,b){J.$$phase||v.length||h.defer(function(){v.length&&J.$digest()});v.push({scope:this,expression:g(a),locals:b})},$$postDigest:function(a){w.push(a)},
$apply:function(a){try{n("$apply");try{return this.$eval(a)}finally{J.$$phase=null}}catch(b){f(b)}finally{try{J.$digest()}catch(c){throw f(c),c;}}},$applyAsync:function(a){function b(){c.$eval(a)}var c=this;a&&t.push(b);a=g(a);r()},$on:function(a,b){var c=this.$$listeners[a];c||(this.$$listeners[a]=c=[]);c.push(b);var d=this;do d.$$listenerCount[a]||(d.$$listenerCount[a]=0),d.$$listenerCount[a]++;while(d=d.$parent);var e=this;return function(){var d=c.indexOf(b);-1!==d&&(c[d]=null,u(e,1,a))}},$emit:function(a,
b){var c=[],d,e=this,g=!1,h={name:a,targetScope:e,stopPropagation:function(){g=!0},preventDefault:function(){h.defaultPrevented=!0},defaultPrevented:!1},k=$a([h],arguments,1),l,m;do{d=e.$$listeners[a]||c;h.currentScope=e;l=0;for(m=d.length;l<m;l++)if(d[l])try{d[l].apply(null,k)}catch(n){f(n)}else d.splice(l,1),l--,m--;if(g)return h.currentScope=null,h;e=e.$parent}while(e);h.currentScope=null;return h},$broadcast:function(a,b){var c=this,d=this,e={name:a,targetScope:this,preventDefault:function(){e.defaultPrevented=
!0},defaultPrevented:!1};if(!this.$$listenerCount[a])return e;for(var g=$a([e],arguments,1),h,k;c=d;){e.currentScope=c;d=c.$$listeners[a]||[];h=0;for(k=d.length;h<k;h++)if(d[h])try{d[h].apply(null,g)}catch(l){f(l)}else d.splice(h,1),h--,k--;if(!(d=c.$$listenerCount[a]&&c.$$childHead||c!==this&&c.$$nextSibling))for(;c!==this&&!(d=c.$$nextSibling);)c=c.$parent}e.currentScope=null;return e}};var J=new m,v=J.$$asyncQueue=[],w=J.$$postDigestQueue=[],t=J.$$applyAsyncQueue=[],K=0;return J}]}function ne(){var a=
/^\s*(https?|ftp|mailto|tel|file):/,b=/^\s*((https?|ftp|file|blob):|data:image\/)/;this.aHrefSanitizationWhitelist=function(b){return w(b)?(a=b,this):a};this.imgSrcSanitizationWhitelist=function(a){return w(a)?(b=a,this):b};this.$get=function(){return function(d,c){var e=c?b:a,f;f=Y(d).href;return""===f||f.match(e)?d:"unsafe:"+f}}}function og(a){if("self"===a)return a;if(G(a)){if(-1<a.indexOf("***"))throw sa("iwcard",a);a=wd(a).replace("\\*\\*",".*").replace("\\*","[^:/.?&;]*");return new RegExp("^"+
a+"$")}if(Wa(a))return new RegExp("^"+a.source+"$");throw sa("imatcher");}function xd(a){var b=[];w(a)&&q(a,function(a){b.push(og(a))});return b}function zf(){this.SCE_CONTEXTS=la;var a=["self"],b=[];this.resourceUrlWhitelist=function(b){arguments.length&&(a=xd(b));return a};this.resourceUrlBlacklist=function(a){arguments.length&&(b=xd(a));return b};this.$get=["$injector",function(d){function c(a,b){return"self"===a?id(b):!!a.exec(b.href)}function e(a){var b=function(a){this.$$unwrapTrustedValue=
function(){return a}};a&&(b.prototype=new a);b.prototype.valueOf=function(){return this.$$unwrapTrustedValue()};b.prototype.toString=function(){return this.$$unwrapTrustedValue().toString()};return b}var f=function(a){throw sa("unsafe");};d.has("$sanitize")&&(f=d.get("$sanitize"));var g=e(),h={};h[la.HTML]=e(g);h[la.CSS]=e(g);h[la.URL]=e(g);h[la.JS]=e(g);h[la.RESOURCE_URL]=e(h[la.URL]);return{trustAs:function(a,b){var c=h.hasOwnProperty(a)?h[a]:null;if(!c)throw sa("icontext",a,b);if(null===b||y(b)||
""===b)return b;if("string"!==typeof b)throw sa("itype",a);return new c(b)},getTrusted:function(d,e){if(null===e||y(e)||""===e)return e;var g=h.hasOwnProperty(d)?h[d]:null;if(g&&e instanceof g)return e.$$unwrapTrustedValue();if(d===la.RESOURCE_URL){var g=Y(e.toString()),n,p,u=!1;n=0;for(p=a.length;n<p;n++)if(c(a[n],g)){u=!0;break}if(u)for(n=0,p=b.length;n<p;n++)if(c(b[n],g)){u=!1;break}if(u)return e;throw sa("insecurl",e.toString());}if(d===la.HTML)return f(e);throw sa("unsafe");},valueOf:function(a){return a instanceof
g?a.$$unwrapTrustedValue():a}}}]}function yf(){var a=!0;this.enabled=function(b){arguments.length&&(a=!!b);return a};this.$get=["$parse","$sceDelegate",function(b,d){if(a&&8>Ea)throw sa("iequirks");var c=ia(la);c.isEnabled=function(){return a};c.trustAs=d.trustAs;c.getTrusted=d.getTrusted;c.valueOf=d.valueOf;a||(c.trustAs=c.getTrusted=function(a,b){return b},c.valueOf=Xa);c.parseAs=function(a,d){var e=b(d);return e.literal&&e.constant?e:b(d,function(b){return c.getTrusted(a,b)})};var e=c.parseAs,
f=c.getTrusted,g=c.trustAs;q(la,function(a,b){var d=Q(b);c[db("parse_as_"+d)]=function(b){return e(a,b)};c[db("get_trusted_"+d)]=function(b){return f(a,b)};c[db("trust_as_"+d)]=function(b){return g(a,b)}});return c}]}function Af(){this.$get=["$window","$document",function(a,b){var d={},c=!(a.chrome&&a.chrome.app&&a.chrome.app.runtime)&&a.history&&a.history.pushState,e=Z((/android (\d+)/.exec(Q((a.navigator||{}).userAgent))||[])[1]),f=/Boxee/i.test((a.navigator||{}).userAgent),g=b[0]||{},h,k=/^(Moz|webkit|ms)(?=[A-Z])/,
l=g.body&&g.body.style,m=!1,n=!1;if(l){for(var p in l)if(m=k.exec(p)){h=m[0];h=h[0].toUpperCase()+h.substr(1);break}h||(h="WebkitOpacity"in l&&"webkit");m=!!("transition"in l||h+"Transition"in l);n=!!("animation"in l||h+"Animation"in l);!e||m&&n||(m=G(l.webkitTransition),n=G(l.webkitAnimation))}return{history:!(!c||4>e||f),hasEvent:function(a){if("input"===a&&11>=Ea)return!1;if(y(d[a])){var b=g.createElement("div");d[a]="on"+a in b}return d[a]},csp:Ba(),vendorPrefix:h,transitions:m,animations:n,android:e}}]}
function Cf(){var a;this.httpOptions=function(b){return b?(a=b,this):a};this.$get=["$templateCache","$http","$q","$sce",function(b,d,c,e){function f(g,h){f.totalPendingRequests++;if(!G(g)||y(b.get(g)))g=e.getTrustedResourceUrl(g);var k=d.defaults&&d.defaults.transformResponse;L(k)?k=k.filter(function(a){return a!==dc}):k===dc&&(k=null);return d.get(g,S({cache:b,transformResponse:k},a))["finally"](function(){f.totalPendingRequests--}).then(function(a){b.put(g,a.data);return a.data},function(a){if(!h)throw pg("tpload",
g,a.status,a.statusText);return c.reject(a)})}f.totalPendingRequests=0;return f}]}function Df(){this.$get=["$rootScope","$browser","$location",function(a,b,d){return{findBindings:function(a,b,d){a=a.getElementsByClassName("ng-binding");var g=[];q(a,function(a){var c=ca.element(a).data("$binding");c&&q(c,function(c){d?(new RegExp("(^|\\s)"+wd(b)+"(\\s|\\||$)")).test(c)&&g.push(a):-1!=c.indexOf(b)&&g.push(a)})});return g},findModels:function(a,b,d){for(var g=["ng-","data-ng-","ng\\:"],h=0;h<g.length;++h){var k=
a.querySelectorAll("["+g[h]+"model"+(d?"=":"*=")+'"'+b+'"]');if(k.length)return k}},getLocation:function(){return d.url()},setLocation:function(b){b!==d.url()&&(d.url(b),a.$digest())},whenStable:function(a){b.notifyWhenNoOutstandingRequests(a)}}}]}function Ef(){this.$get=["$rootScope","$browser","$q","$$q","$exceptionHandler",function(a,b,d,c,e){function f(f,k,l){z(f)||(l=k,k=f,f=A);var m=va.call(arguments,3),n=w(l)&&!l,p=(n?c:d).defer(),u=p.promise,q;q=b.defer(function(){try{p.resolve(f.apply(null,
m))}catch(b){p.reject(b),e(b)}finally{delete g[u.$$timeoutId]}n||a.$apply()},k);u.$$timeoutId=q;g[q]=p;return u}var g={};f.cancel=function(a){return a&&a.$$timeoutId in g?(g[a.$$timeoutId].reject("canceled"),delete g[a.$$timeoutId],b.defer.cancel(a.$$timeoutId)):!1};return f}]}function Y(a){Ea&&($.setAttribute("href",a),a=$.href);$.setAttribute("href",a);return{href:$.href,protocol:$.protocol?$.protocol.replace(/:$/,""):"",host:$.host,search:$.search?$.search.replace(/^\?/,""):"",hash:$.hash?$.hash.replace(/^#/,
""):"",hostname:$.hostname,port:$.port,pathname:"/"===$.pathname.charAt(0)?$.pathname:"/"+$.pathname}}function id(a){a=G(a)?Y(a):a;return a.protocol===yd.protocol&&a.host===yd.host}function Ff(){this.$get=ha(C)}function zd(a){function b(a){try{return decodeURIComponent(a)}catch(b){return a}}var d=a[0]||{},c={},e="";return function(){var a,g,h,k,l;a=d.cookie||"";if(a!==e)for(e=a,a=e.split("; "),c={},h=0;h<a.length;h++)g=a[h],k=g.indexOf("="),0<k&&(l=b(g.substring(0,k)),y(c[l])&&(c[l]=b(g.substring(k+
1))));return c}}function Jf(){this.$get=zd}function Mc(a){function b(d,c){if(D(d)){var e={};q(d,function(a,c){e[c]=b(c,a)});return e}return a.factory(d+"Filter",c)}this.register=b;this.$get=["$injector",function(a){return function(b){return a.get(b+"Filter")}}];b("currency",Ad);b("date",Bd);b("filter",qg);b("json",rg);b("limitTo",sg);b("lowercase",tg);b("number",Cd);b("orderBy",Dd);b("uppercase",ug)}function qg(){return function(a,b,d,c){if(!ta(a)){if(null==a)return a;throw N("filter")("notarray",
a);}c=c||"$";var e;switch(lc(b)){case "function":break;case "boolean":case "null":case "number":case "string":e=!0;case "object":b=vg(b,d,c,e);break;default:return a}return Array.prototype.filter.call(a,b)}}function vg(a,b,d,c){var e=D(a)&&d in a;!0===b?b=na:z(b)||(b=function(a,b){if(y(a))return!1;if(null===a||null===b)return a===b;if(D(b)||D(a)&&!vc(a))return!1;a=Q(""+a);b=Q(""+b);return-1!==a.indexOf(b)});return function(f){return e&&!D(f)?La(f,a[d],b,d,!1):La(f,a,b,d,c)}}function La(a,b,d,c,e,
f){var g=lc(a),h=lc(b);if("string"===h&&"!"===b.charAt(0))return!La(a,b.substring(1),d,c,e);if(L(a))return a.some(function(a){return La(a,b,d,c,e)});switch(g){case "object":var k;if(e){for(k in a)if("$"!==k.charAt(0)&&La(a[k],b,d,c,!0))return!0;return f?!1:La(a,b,d,c,!1)}if("object"===h){for(k in b)if(f=b[k],!z(f)&&!y(f)&&(g=k===c,!La(g?a:a[k],f,d,c,g,g)))return!1;return!0}return d(a,b);case "function":return!1;default:return d(a,b)}}function lc(a){return null===a?"null":typeof a}function Ad(a){var b=
a.NUMBER_FORMATS;return function(a,c,e){y(c)&&(c=b.CURRENCY_SYM);y(e)&&(e=b.PATTERNS[1].maxFrac);return null==a?a:Ed(a,b.PATTERNS[1],b.GROUP_SEP,b.DECIMAL_SEP,e).replace(/\u00A4/g,c)}}function Cd(a){var b=a.NUMBER_FORMATS;return function(a,c){return null==a?a:Ed(a,b.PATTERNS[0],b.GROUP_SEP,b.DECIMAL_SEP,c)}}function wg(a){var b=0,d,c,e,f,g;-1<(c=a.indexOf(Fd))&&(a=a.replace(Fd,""));0<(e=a.search(/e/i))?(0>c&&(c=e),c+=+a.slice(e+1),a=a.substring(0,e)):0>c&&(c=a.length);for(e=0;a.charAt(e)==mc;e++);
if(e==(g=a.length))d=[0],c=1;else{for(g--;a.charAt(g)==mc;)g--;c-=e;d=[];for(f=0;e<=g;e++,f++)d[f]=+a.charAt(e)}c>Gd&&(d=d.splice(0,Gd-1),b=c-1,c=1);return{d:d,e:b,i:c}}function xg(a,b,d,c){var e=a.d,f=e.length-a.i;b=y(b)?Math.min(Math.max(d,f),c):+b;d=b+a.i;c=e[d];if(0<d){e.splice(Math.max(a.i,d));for(var g=d;g<e.length;g++)e[g]=0}else for(f=Math.max(0,f),a.i=1,e.length=Math.max(1,d=b+1),e[0]=0,g=1;g<d;g++)e[g]=0;if(5<=c)if(0>d-1){for(c=0;c>d;c--)e.unshift(0),a.i++;e.unshift(1);a.i++}else e[d-1]++;
for(;f<Math.max(0,b);f++)e.push(0);if(b=e.reduceRight(function(a,b,c,d){b+=a;d[c]=b%10;return Math.floor(b/10)},0))e.unshift(b),a.i++}function Ed(a,b,d,c,e){if(!G(a)&&!T(a)||isNaN(a))return"";var f=!isFinite(a),g=!1,h=Math.abs(a)+"",k="";if(f)k="\u221e";else{g=wg(h);xg(g,e,b.minFrac,b.maxFrac);k=g.d;h=g.i;e=g.e;f=[];for(g=k.reduce(function(a,b){return a&&!b},!0);0>h;)k.unshift(0),h++;0<h?f=k.splice(h,k.length):(f=k,k=[0]);h=[];for(k.length>=b.lgSize&&h.unshift(k.splice(-b.lgSize,k.length).join(""));k.length>
b.gSize;)h.unshift(k.splice(-b.gSize,k.length).join(""));k.length&&h.unshift(k.join(""));k=h.join(d);f.length&&(k+=c+f.join(""));e&&(k+="e+"+e)}return 0>a&&!g?b.negPre+k+b.negSuf:b.posPre+k+b.posSuf}function Kb(a,b,d,c){var e="";if(0>a||c&&0>=a)c?a=-a+1:(a=-a,e="-");for(a=""+a;a.length<b;)a=mc+a;d&&(a=a.substr(a.length-b));return e+a}function ba(a,b,d,c,e){d=d||0;return function(f){f=f["get"+a]();if(0<d||f>-d)f+=d;0===f&&-12==d&&(f=12);return Kb(f,b,c,e)}}function kb(a,b,d){return function(c,e){var f=
c["get"+a](),g=ub((d?"STANDALONE":"")+(b?"SHORT":"")+a);return e[g][f]}}function Hd(a){var b=(new Date(a,0,1)).getDay();return new Date(a,0,(4>=b?5:12)-b)}function Id(a){return function(b){var d=Hd(b.getFullYear());b=+new Date(b.getFullYear(),b.getMonth(),b.getDate()+(4-b.getDay()))-+d;b=1+Math.round(b/6048E5);return Kb(b,a)}}function nc(a,b){return 0>=a.getFullYear()?b.ERAS[0]:b.ERAS[1]}function Bd(a){function b(a){var b;if(b=a.match(d)){a=new Date(0);var f=0,g=0,h=b[8]?a.setUTCFullYear:a.setFullYear,
k=b[8]?a.setUTCHours:a.setHours;b[9]&&(f=Z(b[9]+b[10]),g=Z(b[9]+b[11]));h.call(a,Z(b[1]),Z(b[2])-1,Z(b[3]));f=Z(b[4]||0)-f;g=Z(b[5]||0)-g;h=Z(b[6]||0);b=Math.round(1E3*parseFloat("0."+(b[7]||0)));k.call(a,f,g,h,b)}return a}var d=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;return function(c,d,f){var g="",h=[],k,l;d=d||"mediumDate";d=a.DATETIME_FORMATS[d]||d;G(c)&&(c=yg.test(c)?Z(c):b(c));T(c)&&(c=new Date(c));if(!da(c)||!isFinite(c.getTime()))return c;
for(;d;)(l=zg.exec(d))?(h=$a(h,l,1),d=h.pop()):(h.push(d),d=null);var m=c.getTimezoneOffset();f&&(m=yc(f,m),c=Sb(c,f,!0));q(h,function(b){k=Ag[b];g+=k?k(c,a.DATETIME_FORMATS,m):"''"===b?"'":b.replace(/(^'|'$)/g,"").replace(/''/g,"'")});return g}}function rg(){return function(a,b){y(b)&&(b=2);return bb(a,b)}}function sg(){return function(a,b,d){b=Infinity===Math.abs(Number(b))?Number(b):Z(b);if(isNaN(b))return a;T(a)&&(a=a.toString());if(!ta(a))return a;d=!d||isNaN(d)?0:Z(d);d=0>d?Math.max(0,a.length+
d):d;return 0<=b?oc(a,d,d+b):0===d?oc(a,b,a.length):oc(a,Math.max(0,d+b),d)}}function oc(a,b,d){return G(a)?a.slice(b,d):va.call(a,b,d)}function Dd(a){function b(b){return b.map(function(b){var c=1,d=Xa;if(z(b))d=b;else if(G(b)){if("+"==b.charAt(0)||"-"==b.charAt(0))c="-"==b.charAt(0)?-1:1,b=b.substring(1);if(""!==b&&(d=a(b),d.constant))var e=d(),d=function(a){return a[e]}}return{get:d,descending:c}})}function d(a){switch(typeof a){case "number":case "boolean":case "string":return!0;default:return!1}}
function c(a,b){var c=0,d=a.type,k=b.type;if(d===k){var k=a.value,l=b.value;"string"===d?(k=k.toLowerCase(),l=l.toLowerCase()):"object"===d&&(D(k)&&(k=a.index),D(l)&&(l=b.index));k!==l&&(c=k<l?-1:1)}else c=d<k?-1:1;return c}return function(a,f,g,h){if(null==a)return a;if(!ta(a))throw N("orderBy")("notarray",a);L(f)||(f=[f]);0===f.length&&(f=["+"]);var k=b(f),l=g?-1:1,m=z(h)?h:c;a=Array.prototype.map.call(a,function(a,b){return{value:a,tieBreaker:{value:b,type:"number",index:b},predicateValues:k.map(function(c){var e=
c.get(a);c=typeof e;if(null===e)c="string",e="null";else if("object"===c)a:{if(z(e.valueOf)&&(e=e.valueOf(),d(e)))break a;vc(e)&&(e=e.toString(),d(e))}return{value:e,type:c,index:b}})}});a.sort(function(a,b){for(var c=0,d=k.length;c<d;c++){var e=m(a.predicateValues[c],b.predicateValues[c]);if(e)return e*k[c].descending*l}return m(a.tieBreaker,b.tieBreaker)*l});return a=a.map(function(a){return a.value})}}function Ta(a){z(a)&&(a={link:a});a.restrict=a.restrict||"AC";return ha(a)}function Jd(a,b,d,
c,e){var f=this,g=[];f.$error={};f.$$success={};f.$pending=void 0;f.$name=e(b.name||b.ngForm||"")(d);f.$dirty=!1;f.$pristine=!0;f.$valid=!0;f.$invalid=!1;f.$submitted=!1;f.$$parentForm=Lb;f.$rollbackViewValue=function(){q(g,function(a){a.$rollbackViewValue()})};f.$commitViewValue=function(){q(g,function(a){a.$commitViewValue()})};f.$addControl=function(a){Qa(a.$name,"input");g.push(a);a.$name&&(f[a.$name]=a);a.$$parentForm=f};f.$$renameControl=function(a,b){var c=a.$name;f[c]===a&&delete f[c];f[b]=
a;a.$name=b};f.$removeControl=function(a){a.$name&&f[a.$name]===a&&delete f[a.$name];q(f.$pending,function(b,c){f.$setValidity(c,null,a)});q(f.$error,function(b,c){f.$setValidity(c,null,a)});q(f.$$success,function(b,c){f.$setValidity(c,null,a)});Za(g,a);a.$$parentForm=Lb};Kd({ctrl:this,$element:a,set:function(a,b,c){var d=a[b];d?-1===d.indexOf(c)&&d.push(c):a[b]=[c]},unset:function(a,b,c){var d=a[b];d&&(Za(d,c),0===d.length&&delete a[b])},$animate:c});f.$setDirty=function(){c.removeClass(a,Ua);c.addClass(a,
Mb);f.$dirty=!0;f.$pristine=!1;f.$$parentForm.$setDirty()};f.$setPristine=function(){c.setClass(a,Ua,Mb+" ng-submitted");f.$dirty=!1;f.$pristine=!0;f.$submitted=!1;q(g,function(a){a.$setPristine()})};f.$setUntouched=function(){q(g,function(a){a.$setUntouched()})};f.$setSubmitted=function(){c.addClass(a,"ng-submitted");f.$submitted=!0;f.$$parentForm.$setSubmitted()}}function pc(a){a.$formatters.push(function(b){return a.$isEmpty(b)?b:b.toString()})}function lb(a,b,d,c,e,f){var g=Q(b[0].type);if(!e.android){var h=
!1;b.on("compositionstart",function(){h=!0});b.on("compositionend",function(){h=!1;l()})}var k,l=function(a){k&&(f.defer.cancel(k),k=null);if(!h){var e=b.val();a=a&&a.type;"password"===g||d.ngTrim&&"false"===d.ngTrim||(e=W(e));(c.$viewValue!==e||""===e&&c.$$hasNativeValidators)&&c.$setViewValue(e,a)}};if(e.hasEvent("input"))b.on("input",l);else{var m=function(a,b,c){k||(k=f.defer(function(){k=null;b&&b.value===c||l(a)}))};b.on("keydown",function(a){var b=a.keyCode;91===b||15<b&&19>b||37<=b&&40>=b||
m(a,this,this.value)});if(e.hasEvent("paste"))b.on("paste cut",m)}b.on("change",l);if(Ld[g]&&c.$$hasNativeValidators&&g===d.type)b.on("keydown wheel mousedown",function(a){if(!k){var b=this.validity,c=b.badInput,d=b.typeMismatch;k=f.defer(function(){k=null;b.badInput===c&&b.typeMismatch===d||l(a)})}});c.$render=function(){var a=c.$isEmpty(c.$viewValue)?"":c.$viewValue;b.val()!==a&&b.val(a)}}function Nb(a,b){return function(d,c){var e,f;if(da(d))return d;if(G(d)){'"'==d.charAt(0)&&'"'==d.charAt(d.length-
1)&&(d=d.substring(1,d.length-1));if(Bg.test(d))return new Date(d);a.lastIndex=0;if(e=a.exec(d))return e.shift(),f=c?{yyyy:c.getFullYear(),MM:c.getMonth()+1,dd:c.getDate(),HH:c.getHours(),mm:c.getMinutes(),ss:c.getSeconds(),sss:c.getMilliseconds()/1E3}:{yyyy:1970,MM:1,dd:1,HH:0,mm:0,ss:0,sss:0},q(e,function(a,c){c<b.length&&(f[b[c]]=+a)}),new Date(f.yyyy,f.MM-1,f.dd,f.HH,f.mm,f.ss||0,1E3*f.sss||0)}return NaN}}function mb(a,b,d,c){return function(e,f,g,h,k,l,m){function n(a){return a&&!(a.getTime&&
a.getTime()!==a.getTime())}function p(a){return w(a)&&!da(a)?d(a)||void 0:a}Md(e,f,g,h);lb(e,f,g,h,k,l);var u=h&&h.$options&&h.$options.timezone,q;h.$$parserName=a;h.$parsers.push(function(a){if(h.$isEmpty(a))return null;if(b.test(a))return a=d(a,q),u&&(a=Sb(a,u)),a});h.$formatters.push(function(a){if(a&&!da(a))throw nb("datefmt",a);if(n(a))return(q=a)&&u&&(q=Sb(q,u,!0)),m("date")(a,c,u);q=null;return""});if(w(g.min)||g.ngMin){var s;h.$validators.min=function(a){return!n(a)||y(s)||d(a)>=s};g.$observe("min",
function(a){s=p(a);h.$validate()})}if(w(g.max)||g.ngMax){var r;h.$validators.max=function(a){return!n(a)||y(r)||d(a)<=r};g.$observe("max",function(a){r=p(a);h.$validate()})}}}function Md(a,b,d,c){(c.$$hasNativeValidators=D(b[0].validity))&&c.$parsers.push(function(a){var c=b.prop("validity")||{};return c.badInput||c.typeMismatch?void 0:a})}function Nd(a,b,d,c,e){if(w(c)){a=a(c);if(!a.constant)throw nb("constexpr",d,c);return a(b)}return e}function qc(a,b){a="ngClass"+a;return["$animate",function(d){function c(a,
b){var c=[],d=0;a:for(;d<a.length;d++){for(var e=a[d],m=0;m<b.length;m++)if(e==b[m])continue a;c.push(e)}return c}function e(a){var b=[];return L(a)?(q(a,function(a){b=b.concat(e(a))}),b):G(a)?a.split(" "):D(a)?(q(a,function(a,c){a&&(b=b.concat(c.split(" ")))}),b):a}return{restrict:"AC",link:function(f,g,h){function k(a){a=l(a,1);h.$addClass(a)}function l(a,b){var c=g.data("$classCounts")||U(),d=[];q(a,function(a){if(0<b||c[a])c[a]=(c[a]||0)+b,c[a]===+(0<b)&&d.push(a)});g.data("$classCounts",c);return d.join(" ")}
function m(a,b){var e=c(b,a),f=c(a,b),e=l(e,1),f=l(f,-1);e&&e.length&&d.addClass(g,e);f&&f.length&&d.removeClass(g,f)}function n(a){if(!0===b||(f.$index&1)===b){var c=e(a||[]);if(!p)k(c);else if(!na(a,p)){var d=e(p);m(d,c)}}p=L(a)?a.map(function(a){return ia(a)}):ia(a)}var p;f.$watch(h[a],n,!0);h.$observe("class",function(b){n(f.$eval(h[a]))});"ngClass"!==a&&f.$watch("$index",function(c,d){var g=c&1;if(g!==(d&1)){var m=e(f.$eval(h[a]));g===b?k(m):(g=l(m,-1),h.$removeClass(g))}})}}}]}function Kd(a){function b(a,
b){b&&!f[a]?(k.addClass(e,a),f[a]=!0):!b&&f[a]&&(k.removeClass(e,a),f[a]=!1)}function d(a,c){a=a?"-"+Cc(a,"-"):"";b(ob+a,!0===c);b(Od+a,!1===c)}var c=a.ctrl,e=a.$element,f={},g=a.set,h=a.unset,k=a.$animate;f[Od]=!(f[ob]=e.hasClass(ob));c.$setValidity=function(a,e,f){y(e)?(c.$pending||(c.$pending={}),g(c.$pending,a,f)):(c.$pending&&h(c.$pending,a,f),Pd(c.$pending)&&(c.$pending=void 0));Ga(e)?e?(h(c.$error,a,f),g(c.$$success,a,f)):(g(c.$error,a,f),h(c.$$success,a,f)):(h(c.$error,a,f),h(c.$$success,
a,f));c.$pending?(b(Qd,!0),c.$valid=c.$invalid=void 0,d("",null)):(b(Qd,!1),c.$valid=Pd(c.$error),c.$invalid=!c.$valid,d("",c.$valid));e=c.$pending&&c.$pending[a]?void 0:c.$error[a]?!1:c.$$success[a]?!0:null;d(a,e);c.$$parentForm.$setValidity(a,e,c)}}function Pd(a){if(a)for(var b in a)if(a.hasOwnProperty(b))return!1;return!0}var Cg=/^\/(.+)\/([a-z]*)$/,ua=Object.prototype.hasOwnProperty,Q=function(a){return G(a)?a.toLowerCase():a},ub=function(a){return G(a)?a.toUpperCase():a},Ea,F,qa,va=[].slice,
bg=[].splice,Dg=[].push,ma=Object.prototype.toString,wc=Object.getPrototypeOf,xa=N("ng"),ca=C.angular||(C.angular={}),Ub,pb=0;Ea=C.document.documentMode;A.$inject=[];Xa.$inject=[];var L=Array.isArray,ae=/^\[object (?:Uint8|Uint8Clamped|Uint16|Uint32|Int8|Int16|Int32|Float32|Float64)Array\]$/,W=function(a){return G(a)?a.trim():a},wd=function(a){return a.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08")},Ba=function(){if(!w(Ba.rules)){var a=C.document.querySelector("[ng-csp]")||
C.document.querySelector("[data-ng-csp]");if(a){var b=a.getAttribute("ng-csp")||a.getAttribute("data-ng-csp");Ba.rules={noUnsafeEval:!b||-1!==b.indexOf("no-unsafe-eval"),noInlineStyle:!b||-1!==b.indexOf("no-inline-style")}}else{a=Ba;try{new Function(""),b=!1}catch(d){b=!0}a.rules={noUnsafeEval:b,noInlineStyle:!1}}}return Ba.rules},rb=function(){if(w(rb.name_))return rb.name_;var a,b,d=Na.length,c,e;for(b=0;b<d;++b)if(c=Na[b],a=C.document.querySelector("["+c.replace(":","\\:")+"jq]")){e=a.getAttribute(c+
"jq");break}return rb.name_=e},de=/:/g,Na=["ng-","data-ng-","ng:","x-ng-"],ie=/[A-Z]/g,Dc=!1,Ma=3,me={full:"1.5.8",major:1,minor:5,dot:8,codeName:"arbitrary-fallbacks"};O.expando="ng339";var fb=O.cache={},Pf=1;O._data=function(a){return this.cache[a[this.expando]]||{}};var Kf=/([\:\-\_]+(.))/g,Lf=/^moz([A-Z])/,yb={mouseleave:"mouseout",mouseenter:"mouseover"},Wb=N("jqLite"),Of=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,Vb=/<|&#?\w+;/,Mf=/<([\w:-]+)/,Nf=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
ja={option:[1,'<select multiple="multiple">',"</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ja.optgroup=ja.option;ja.tbody=ja.tfoot=ja.colgroup=ja.caption=ja.thead;ja.th=ja.td;var Uf=C.Node.prototype.contains||function(a){return!!(this.compareDocumentPosition(a)&16)},Oa=O.prototype={ready:function(a){function b(){d||(d=!0,a())}var d=!1;"complete"===
C.document.readyState?C.setTimeout(b):(this.on("DOMContentLoaded",b),O(C).on("load",b))},toString:function(){var a=[];q(this,function(b){a.push(""+b)});return"["+a.join(", ")+"]"},eq:function(a){return 0<=a?F(this[a]):F(this[this.length+a])},length:0,push:Dg,sort:[].sort,splice:[].splice},Eb={};q("multiple selected checked disabled readOnly required open".split(" "),function(a){Eb[Q(a)]=a});var Vc={};q("input select option textarea button form details".split(" "),function(a){Vc[a]=!0});var bd={ngMinlength:"minlength",
ngMaxlength:"maxlength",ngMin:"min",ngMax:"max",ngPattern:"pattern"};q({data:Yb,removeData:eb,hasData:function(a){for(var b in fb[a.ng339])return!0;return!1},cleanData:function(a){for(var b=0,d=a.length;b<d;b++)eb(a[b])}},function(a,b){O[b]=a});q({data:Yb,inheritedData:Cb,scope:function(a){return F.data(a,"$scope")||Cb(a.parentNode||a,["$isolateScope","$scope"])},isolateScope:function(a){return F.data(a,"$isolateScope")||F.data(a,"$isolateScopeNoTemplate")},controller:Sc,injector:function(a){return Cb(a,
"$injector")},removeAttr:function(a,b){a.removeAttribute(b)},hasClass:zb,css:function(a,b,d){b=db(b);if(w(d))a.style[b]=d;else return a.style[b]},attr:function(a,b,d){var c=a.nodeType;if(c!==Ma&&2!==c&&8!==c)if(c=Q(b),Eb[c])if(w(d))d?(a[b]=!0,a.setAttribute(b,c)):(a[b]=!1,a.removeAttribute(c));else return a[b]||(a.attributes.getNamedItem(b)||A).specified?c:void 0;else if(w(d))a.setAttribute(b,d);else if(a.getAttribute)return a=a.getAttribute(b,2),null===a?void 0:a},prop:function(a,b,d){if(w(d))a[b]=
d;else return a[b]},text:function(){function a(a,d){if(y(d)){var c=a.nodeType;return 1===c||c===Ma?a.textContent:""}a.textContent=d}a.$dv="";return a}(),val:function(a,b){if(y(b)){if(a.multiple&&"select"===wa(a)){var d=[];q(a.options,function(a){a.selected&&d.push(a.value||a.text)});return 0===d.length?null:d}return a.value}a.value=b},html:function(a,b){if(y(b))return a.innerHTML;wb(a,!0);a.innerHTML=b},empty:Tc},function(a,b){O.prototype[b]=function(b,c){var e,f,g=this.length;if(a!==Tc&&y(2==a.length&&
a!==zb&&a!==Sc?b:c)){if(D(b)){for(e=0;e<g;e++)if(a===Yb)a(this[e],b);else for(f in b)a(this[e],f,b[f]);return this}e=a.$dv;g=y(e)?Math.min(g,1):g;for(f=0;f<g;f++){var h=a(this[f],b,c);e=e?e+h:h}return e}for(e=0;e<g;e++)a(this[e],b,c);return this}});q({removeData:eb,on:function(a,b,d,c){if(w(c))throw Wb("onargs");if(Nc(a)){c=xb(a,!0);var e=c.events,f=c.handle;f||(f=c.handle=Rf(a,e));c=0<=b.indexOf(" ")?b.split(" "):[b];for(var g=c.length,h=function(b,c,g){var h=e[b];h||(h=e[b]=[],h.specialHandlerWrapper=
c,"$destroy"===b||g||a.addEventListener(b,f,!1));h.push(d)};g--;)b=c[g],yb[b]?(h(yb[b],Tf),h(b,void 0,!0)):h(b)}},off:Rc,one:function(a,b,d){a=F(a);a.on(b,function e(){a.off(b,d);a.off(b,e)});a.on(b,d)},replaceWith:function(a,b){var d,c=a.parentNode;wb(a);q(new O(b),function(b){d?c.insertBefore(b,d.nextSibling):c.replaceChild(b,a);d=b})},children:function(a){var b=[];q(a.childNodes,function(a){1===a.nodeType&&b.push(a)});return b},contents:function(a){return a.contentDocument||a.childNodes||[]},append:function(a,
b){var d=a.nodeType;if(1===d||11===d){b=new O(b);for(var d=0,c=b.length;d<c;d++)a.appendChild(b[d])}},prepend:function(a,b){if(1===a.nodeType){var d=a.firstChild;q(new O(b),function(b){a.insertBefore(b,d)})}},wrap:function(a,b){Pc(a,F(b).eq(0).clone()[0])},remove:Db,detach:function(a){Db(a,!0)},after:function(a,b){var d=a,c=a.parentNode;b=new O(b);for(var e=0,f=b.length;e<f;e++){var g=b[e];c.insertBefore(g,d.nextSibling);d=g}},addClass:Bb,removeClass:Ab,toggleClass:function(a,b,d){b&&q(b.split(" "),
function(b){var e=d;y(e)&&(e=!zb(a,b));(e?Bb:Ab)(a,b)})},parent:function(a){return(a=a.parentNode)&&11!==a.nodeType?a:null},next:function(a){return a.nextElementSibling},find:function(a,b){return a.getElementsByTagName?a.getElementsByTagName(b):[]},clone:Xb,triggerHandler:function(a,b,d){var c,e,f=b.type||b,g=xb(a);if(g=(g=g&&g.events)&&g[f])c={preventDefault:function(){this.defaultPrevented=!0},isDefaultPrevented:function(){return!0===this.defaultPrevented},stopImmediatePropagation:function(){this.immediatePropagationStopped=
!0},isImmediatePropagationStopped:function(){return!0===this.immediatePropagationStopped},stopPropagation:A,type:f,target:a},b.type&&(c=S(c,b)),b=ia(g),e=d?[c].concat(d):[c],q(b,function(b){c.isImmediatePropagationStopped()||b.apply(a,e)})}},function(a,b){O.prototype[b]=function(b,c,e){for(var f,g=0,h=this.length;g<h;g++)y(f)?(f=a(this[g],b,c,e),w(f)&&(f=F(f))):Qc(f,a(this[g],b,c,e));return w(f)?f:this};O.prototype.bind=O.prototype.on;O.prototype.unbind=O.prototype.off});Ra.prototype={put:function(a,
b){this[Ca(a,this.nextUid)]=b},get:function(a){return this[Ca(a,this.nextUid)]},remove:function(a){var b=this[a=Ca(a,this.nextUid)];delete this[a];return b}};var If=[function(){this.$get=[function(){return Ra}]}],Wf=/^([^\(]+?)=>/,Xf=/^[^\(]*\(\s*([^\)]*)\)/m,Eg=/,/,Fg=/^\s*(_?)(\S+?)\1\s*$/,Vf=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,Ha=N("$injector");cb.$$annotate=function(a,b,d){var c;if("function"===typeof a){if(!(c=a.$inject)){c=[];if(a.length){if(b)throw G(d)&&d||(d=a.name||Yf(a)),Ha("strictdi",d);
b=Wc(a);q(b[1].split(Eg),function(a){a.replace(Fg,function(a,b,d){c.push(d)})})}a.$inject=c}}else L(a)?(b=a.length-1,Pa(a[b],"fn"),c=a.slice(0,b)):Pa(a,"fn",!0);return c};var Rd=N("$animate"),$e=function(){this.$get=A},af=function(){var a=new Ra,b=[];this.$get=["$$AnimateRunner","$rootScope",function(d,c){function e(a,b,c){var d=!1;b&&(b=G(b)?b.split(" "):L(b)?b:[],q(b,function(b){b&&(d=!0,a[b]=c)}));return d}function f(){q(b,function(b){var c=a.get(b);if(c){var d=Zf(b.attr("class")),e="",f="";q(c,
function(a,b){a!==!!d[b]&&(a?e+=(e.length?" ":"")+b:f+=(f.length?" ":"")+b)});q(b,function(a){e&&Bb(a,e);f&&Ab(a,f)});a.remove(b)}});b.length=0}return{enabled:A,on:A,off:A,pin:A,push:function(g,h,k,l){l&&l();k=k||{};k.from&&g.css(k.from);k.to&&g.css(k.to);if(k.addClass||k.removeClass)if(h=k.addClass,l=k.removeClass,k=a.get(g)||{},h=e(k,h,!0),l=e(k,l,!1),h||l)a.put(g,k),b.push(g),1===b.length&&c.$$postDigest(f);g=new d;g.complete();return g}}}]},Ye=["$provide",function(a){var b=this;this.$$registeredAnimations=
Object.create(null);this.register=function(d,c){if(d&&"."!==d.charAt(0))throw Rd("notcsel",d);var e=d+"-animation";b.$$registeredAnimations[d.substr(1)]=e;a.factory(e,c)};this.classNameFilter=function(a){if(1===arguments.length&&(this.$$classNameFilter=a instanceof RegExp?a:null)&&/(\s+|\/)ng-animate(\s+|\/)/.test(this.$$classNameFilter.toString()))throw Rd("nongcls","ng-animate");return this.$$classNameFilter};this.$get=["$$animateQueue",function(a){function b(a,c,d){if(d){var h;a:{for(h=0;h<d.length;h++){var k=
d[h];if(1===k.nodeType){h=k;break a}}h=void 0}!h||h.parentNode||h.previousElementSibling||(d=null)}d?d.after(a):c.prepend(a)}return{on:a.on,off:a.off,pin:a.pin,enabled:a.enabled,cancel:function(a){a.end&&a.end()},enter:function(e,f,g,h){f=f&&F(f);g=g&&F(g);f=f||g.parent();b(e,f,g);return a.push(e,"enter",Ia(h))},move:function(e,f,g,h){f=f&&F(f);g=g&&F(g);f=f||g.parent();b(e,f,g);return a.push(e,"move",Ia(h))},leave:function(b,c){return a.push(b,"leave",Ia(c),function(){b.remove()})},addClass:function(b,
c,g){g=Ia(g);g.addClass=gb(g.addclass,c);return a.push(b,"addClass",g)},removeClass:function(b,c,g){g=Ia(g);g.removeClass=gb(g.removeClass,c);return a.push(b,"removeClass",g)},setClass:function(b,c,g,h){h=Ia(h);h.addClass=gb(h.addClass,c);h.removeClass=gb(h.removeClass,g);return a.push(b,"setClass",h)},animate:function(b,c,g,h,k){k=Ia(k);k.from=k.from?S(k.from,c):c;k.to=k.to?S(k.to,g):g;k.tempClasses=gb(k.tempClasses,h||"ng-inline-animate");return a.push(b,"animate",k)}}}]}],cf=function(){this.$get=
["$$rAF",function(a){function b(b){d.push(b);1<d.length||a(function(){for(var a=0;a<d.length;a++)d[a]();d=[]})}var d=[];return function(){var a=!1;b(function(){a=!0});return function(d){a?d():b(d)}}}]},bf=function(){this.$get=["$q","$sniffer","$$animateAsyncRun","$document","$timeout",function(a,b,d,c,e){function f(a){this.setHost(a);var b=d();this._doneCallbacks=[];this._tick=function(a){var d=c[0];d&&d.hidden?e(a,0,!1):b(a)};this._state=0}f.chain=function(a,b){function c(){if(d===a.length)b(!0);
else a[d](function(a){!1===a?b(!1):(d++,c())})}var d=0;c()};f.all=function(a,b){function c(f){e=e&&f;++d===a.length&&b(e)}var d=0,e=!0;q(a,function(a){a.done(c)})};f.prototype={setHost:function(a){this.host=a||{}},done:function(a){2===this._state?a():this._doneCallbacks.push(a)},progress:A,getPromise:function(){if(!this.promise){var b=this;this.promise=a(function(a,c){b.done(function(b){!1===b?c():a()})})}return this.promise},then:function(a,b){return this.getPromise().then(a,b)},"catch":function(a){return this.getPromise()["catch"](a)},
"finally":function(a){return this.getPromise()["finally"](a)},pause:function(){this.host.pause&&this.host.pause()},resume:function(){this.host.resume&&this.host.resume()},end:function(){this.host.end&&this.host.end();this._resolve(!0)},cancel:function(){this.host.cancel&&this.host.cancel();this._resolve(!1)},complete:function(a){var b=this;0===b._state&&(b._state=1,b._tick(function(){b._resolve(a)}))},_resolve:function(a){2!==this._state&&(q(this._doneCallbacks,function(b){b(a)}),this._doneCallbacks.length=
0,this._state=2)}};return f}]},Ze=function(){this.$get=["$$rAF","$q","$$AnimateRunner",function(a,b,d){return function(b,e){function f(){a(function(){g.addClass&&(b.addClass(g.addClass),g.addClass=null);g.removeClass&&(b.removeClass(g.removeClass),g.removeClass=null);g.to&&(b.css(g.to),g.to=null);h||k.complete();h=!0});return k}var g=e||{};g.$$prepared||(g=pa(g));g.cleanupStyles&&(g.from=g.to=null);g.from&&(b.css(g.from),g.from=null);var h,k=new d;return{start:f,end:f}}}]},ga=N("$compile"),bc=new function(){};
Fc.$inject=["$provide","$$sanitizeUriProvider"];Fb.prototype.isFirstChange=function(){return this.previousValue===bc};var Yc=/^((?:x|data)[\:\-_])/i,cg=N("$controller"),cd=/^(\S+)(\s+as\s+([\w$]+))?$/,jf=function(){this.$get=["$document",function(a){return function(b){b?!b.nodeType&&b instanceof F&&(b=b[0]):b=a[0].body;return b.offsetWidth+1}}]},dd="application/json",ec={"Content-Type":dd+";charset=utf-8"},eg=/^\[|^\{(?!\{)/,fg={"[":/]$/,"{":/}$/},dg=/^\)\]\}',?\n/,Gg=N("$http"),hd=function(a){return function(){throw Gg("legacy",
a);}},Ka=ca.$interpolateMinErr=N("$interpolate");Ka.throwNoconcat=function(a){throw Ka("noconcat",a);};Ka.interr=function(a,b){return Ka("interr",a,b.toString())};var rf=function(){this.$get=["$window",function(a){function b(a){var b=function(a){b.data=a;b.called=!0};b.id=a;return b}var d=a.angular.callbacks,c={};return{createCallback:function(a){a="_"+(d.$$counter++).toString(36);var f="angular.callbacks."+a,g=b(a);c[f]=d[a]=g;return f},wasCalled:function(a){return c[a].called},getResponse:function(a){return c[a].data},
removeCallback:function(a){delete d[c[a].id];delete c[a]}}}]},Hg=/^([^\?#]*)(\?([^#]*))?(#(.*))?$/,hg={http:80,https:443,ftp:21},Gb=N("$location"),Ig={$$absUrl:"",$$html5:!1,$$replace:!1,absUrl:Hb("$$absUrl"),url:function(a){if(y(a))return this.$$url;var b=Hg.exec(a);(b[1]||""===a)&&this.path(decodeURIComponent(b[1]));(b[2]||b[1]||""===a)&&this.search(b[3]||"");this.hash(b[5]||"");return this},protocol:Hb("$$protocol"),host:Hb("$$host"),port:Hb("$$port"),path:md("$$path",function(a){a=null!==a?a.toString():
"";return"/"==a.charAt(0)?a:"/"+a}),search:function(a,b){switch(arguments.length){case 0:return this.$$search;case 1:if(G(a)||T(a))a=a.toString(),this.$$search=Ac(a);else if(D(a))a=pa(a,{}),q(a,function(b,c){null==b&&delete a[c]}),this.$$search=a;else throw Gb("isrcharg");break;default:y(b)||null===b?delete this.$$search[a]:this.$$search[a]=b}this.$$compose();return this},hash:md("$$hash",function(a){return null!==a?a.toString():""}),replace:function(){this.$$replace=!0;return this}};q([ld,hc,gc],
function(a){a.prototype=Object.create(Ig);a.prototype.state=function(b){if(!arguments.length)return this.$$state;if(a!==gc||!this.$$html5)throw Gb("nostate");this.$$state=y(b)?null:b;return this}});var X=N("$parse"),jg=Function.prototype.call,kg=Function.prototype.apply,lg=Function.prototype.bind,Ob=U();q("+ - * / % === !== == != < > <= >= && || ! = |".split(" "),function(a){Ob[a]=!0});var Jg={n:"\n",f:"\f",r:"\r",t:"\t",v:"\v","'":"'",'"':'"'},jc=function(a){this.options=a};jc.prototype={constructor:jc,
lex:function(a){this.text=a;this.index=0;for(this.tokens=[];this.index<this.text.length;)if(a=this.text.charAt(this.index),'"'===a||"'"===a)this.readString(a);else if(this.isNumber(a)||"."===a&&this.isNumber(this.peek()))this.readNumber();else if(this.isIdentifierStart(this.peekMultichar()))this.readIdent();else if(this.is(a,"(){}[].,;:?"))this.tokens.push({index:this.index,text:a}),this.index++;else if(this.isWhitespace(a))this.index++;else{var b=a+this.peek(),d=b+this.peek(2),c=Ob[b],e=Ob[d];Ob[a]||
c||e?(a=e?d:c?b:a,this.tokens.push({index:this.index,text:a,operator:!0}),this.index+=a.length):this.throwError("Unexpected next character ",this.index,this.index+1)}return this.tokens},is:function(a,b){return-1!==b.indexOf(a)},peek:function(a){a=a||1;return this.index+a<this.text.length?this.text.charAt(this.index+a):!1},isNumber:function(a){return"0"<=a&&"9">=a&&"string"===typeof a},isWhitespace:function(a){return" "===a||"\r"===a||"\t"===a||"\n"===a||"\v"===a||"\u00a0"===a},isIdentifierStart:function(a){return this.options.isIdentifierStart?
this.options.isIdentifierStart(a,this.codePointAt(a)):this.isValidIdentifierStart(a)},isValidIdentifierStart:function(a){return"a"<=a&&"z">=a||"A"<=a&&"Z">=a||"_"===a||"$"===a},isIdentifierContinue:function(a){return this.options.isIdentifierContinue?this.options.isIdentifierContinue(a,this.codePointAt(a)):this.isValidIdentifierContinue(a)},isValidIdentifierContinue:function(a,b){return this.isValidIdentifierStart(a,b)||this.isNumber(a)},codePointAt:function(a){return 1===a.length?a.charCodeAt(0):
(a.charCodeAt(0)<<10)+a.charCodeAt(1)-56613888},peekMultichar:function(){var a=this.text.charAt(this.index),b=this.peek();if(!b)return a;var d=a.charCodeAt(0),c=b.charCodeAt(0);return 55296<=d&&56319>=d&&56320<=c&&57343>=c?a+b:a},isExpOperator:function(a){return"-"===a||"+"===a||this.isNumber(a)},throwError:function(a,b,d){d=d||this.index;b=w(b)?"s "+b+"-"+this.index+" ["+this.text.substring(b,d)+"]":" "+d;throw X("lexerr",a,b,this.text);},readNumber:function(){for(var a="",b=this.index;this.index<
this.text.length;){var d=Q(this.text.charAt(this.index));if("."==d||this.isNumber(d))a+=d;else{var c=this.peek();if("e"==d&&this.isExpOperator(c))a+=d;else if(this.isExpOperator(d)&&c&&this.isNumber(c)&&"e"==a.charAt(a.length-1))a+=d;else if(!this.isExpOperator(d)||c&&this.isNumber(c)||"e"!=a.charAt(a.length-1))break;else this.throwError("Invalid exponent")}this.index++}this.tokens.push({index:b,text:a,constant:!0,value:Number(a)})},readIdent:function(){var a=this.index;for(this.index+=this.peekMultichar().length;this.index<
this.text.length;){var b=this.peekMultichar();if(!this.isIdentifierContinue(b))break;this.index+=b.length}this.tokens.push({index:a,text:this.text.slice(a,this.index),identifier:!0})},readString:function(a){var b=this.index;this.index++;for(var d="",c=a,e=!1;this.index<this.text.length;){var f=this.text.charAt(this.index),c=c+f;if(e)"u"===f?(e=this.text.substring(this.index+1,this.index+5),e.match(/[\da-f]{4}/i)||this.throwError("Invalid unicode escape [\\u"+e+"]"),this.index+=4,d+=String.fromCharCode(parseInt(e,
16))):d+=Jg[f]||f,e=!1;else if("\\"===f)e=!0;else{if(f===a){this.index++;this.tokens.push({index:b,text:c,constant:!0,value:d});return}d+=f}this.index++}this.throwError("Unterminated quote",b)}};var s=function(a,b){this.lexer=a;this.options=b};s.Program="Program";s.ExpressionStatement="ExpressionStatement";s.AssignmentExpression="AssignmentExpression";s.ConditionalExpression="ConditionalExpression";s.LogicalExpression="LogicalExpression";s.BinaryExpression="BinaryExpression";s.UnaryExpression="UnaryExpression";
s.CallExpression="CallExpression";s.MemberExpression="MemberExpression";s.Identifier="Identifier";s.Literal="Literal";s.ArrayExpression="ArrayExpression";s.Property="Property";s.ObjectExpression="ObjectExpression";s.ThisExpression="ThisExpression";s.LocalsExpression="LocalsExpression";s.NGValueParameter="NGValueParameter";s.prototype={ast:function(a){this.text=a;this.tokens=this.lexer.lex(a);a=this.program();0!==this.tokens.length&&this.throwError("is an unexpected token",this.tokens[0]);return a},
program:function(){for(var a=[];;)if(0<this.tokens.length&&!this.peek("}",")",";","]")&&a.push(this.expressionStatement()),!this.expect(";"))return{type:s.Program,body:a}},expressionStatement:function(){return{type:s.ExpressionStatement,expression:this.filterChain()}},filterChain:function(){for(var a=this.expression();this.expect("|");)a=this.filter(a);return a},expression:function(){return this.assignment()},assignment:function(){var a=this.ternary();this.expect("=")&&(a={type:s.AssignmentExpression,
left:a,right:this.assignment(),operator:"="});return a},ternary:function(){var a=this.logicalOR(),b,d;return this.expect("?")&&(b=this.expression(),this.consume(":"))?(d=this.expression(),{type:s.ConditionalExpression,test:a,alternate:b,consequent:d}):a},logicalOR:function(){for(var a=this.logicalAND();this.expect("||");)a={type:s.LogicalExpression,operator:"||",left:a,right:this.logicalAND()};return a},logicalAND:function(){for(var a=this.equality();this.expect("&&");)a={type:s.LogicalExpression,
operator:"&&",left:a,right:this.equality()};return a},equality:function(){for(var a=this.relational(),b;b=this.expect("==","!=","===","!==");)a={type:s.BinaryExpression,operator:b.text,left:a,right:this.relational()};return a},relational:function(){for(var a=this.additive(),b;b=this.expect("<",">","<=",">=");)a={type:s.BinaryExpression,operator:b.text,left:a,right:this.additive()};return a},additive:function(){for(var a=this.multiplicative(),b;b=this.expect("+","-");)a={type:s.BinaryExpression,operator:b.text,
left:a,right:this.multiplicative()};return a},multiplicative:function(){for(var a=this.unary(),b;b=this.expect("*","/","%");)a={type:s.BinaryExpression,operator:b.text,left:a,right:this.unary()};return a},unary:function(){var a;return(a=this.expect("+","-","!"))?{type:s.UnaryExpression,operator:a.text,prefix:!0,argument:this.unary()}:this.primary()},primary:function(){var a;this.expect("(")?(a=this.filterChain(),this.consume(")")):this.expect("[")?a=this.arrayDeclaration():this.expect("{")?a=this.object():
this.selfReferential.hasOwnProperty(this.peek().text)?a=pa(this.selfReferential[this.consume().text]):this.options.literals.hasOwnProperty(this.peek().text)?a={type:s.Literal,value:this.options.literals[this.consume().text]}:this.peek().identifier?a=this.identifier():this.peek().constant?a=this.constant():this.throwError("not a primary expression",this.peek());for(var b;b=this.expect("(","[",".");)"("===b.text?(a={type:s.CallExpression,callee:a,arguments:this.parseArguments()},this.consume(")")):
"["===b.text?(a={type:s.MemberExpression,object:a,property:this.expression(),computed:!0},this.consume("]")):"."===b.text?a={type:s.MemberExpression,object:a,property:this.identifier(),computed:!1}:this.throwError("IMPOSSIBLE");return a},filter:function(a){a=[a];for(var b={type:s.CallExpression,callee:this.identifier(),arguments:a,filter:!0};this.expect(":");)a.push(this.expression());return b},parseArguments:function(){var a=[];if(")"!==this.peekToken().text){do a.push(this.filterChain());while(this.expect(","))
}return a},identifier:function(){var a=this.consume();a.identifier||this.throwError("is not a valid identifier",a);return{type:s.Identifier,name:a.text}},constant:function(){return{type:s.Literal,value:this.consume().value}},arrayDeclaration:function(){var a=[];if("]"!==this.peekToken().text){do{if(this.peek("]"))break;a.push(this.expression())}while(this.expect(","))}this.consume("]");return{type:s.ArrayExpression,elements:a}},object:function(){var a=[],b;if("}"!==this.peekToken().text){do{if(this.peek("}"))break;
b={type:s.Property,kind:"init"};this.peek().constant?(b.key=this.constant(),b.computed=!1,this.consume(":"),b.value=this.expression()):this.peek().identifier?(b.key=this.identifier(),b.computed=!1,this.peek(":")?(this.consume(":"),b.value=this.expression()):b.value=b.key):this.peek("[")?(this.consume("["),b.key=this.expression(),this.consume("]"),b.computed=!0,this.consume(":"),b.value=this.expression()):this.throwError("invalid key",this.peek());a.push(b)}while(this.expect(","))}this.consume("}");
return{type:s.ObjectExpression,properties:a}},throwError:function(a,b){throw X("syntax",b.text,a,b.index+1,this.text,this.text.substring(b.index));},consume:function(a){if(0===this.tokens.length)throw X("ueoe",this.text);var b=this.expect(a);b||this.throwError("is unexpected, expecting ["+a+"]",this.peek());return b},peekToken:function(){if(0===this.tokens.length)throw X("ueoe",this.text);return this.tokens[0]},peek:function(a,b,d,c){return this.peekAhead(0,a,b,d,c)},peekAhead:function(a,b,d,c,e){if(this.tokens.length>
a){a=this.tokens[a];var f=a.text;if(f===b||f===d||f===c||f===e||!(b||d||c||e))return a}return!1},expect:function(a,b,d,c){return(a=this.peek(a,b,d,c))?(this.tokens.shift(),a):!1},selfReferential:{"this":{type:s.ThisExpression},$locals:{type:s.LocalsExpression}}};td.prototype={compile:function(a,b){var d=this,c=this.astBuilder.ast(a);this.state={nextId:0,filters:{},expensiveChecks:b,fn:{vars:[],body:[],own:{}},assign:{vars:[],body:[],own:{}},inputs:[]};V(c,d.$filter);var e="",f;this.stage="assign";
if(f=rd(c))this.state.computing="assign",e=this.nextId(),this.recurse(f,e),this.return_(e),e="fn.assign="+this.generateFunction("assign","s,v,l");f=pd(c.body);d.stage="inputs";q(f,function(a,b){var c="fn"+b;d.state[c]={vars:[],body:[],own:{}};d.state.computing=c;var e=d.nextId();d.recurse(a,e);d.return_(e);d.state.inputs.push(c);a.watchId=b});this.state.computing="fn";this.stage="main";this.recurse(c);e='"'+this.USE+" "+this.STRICT+'";\n'+this.filterPrefix()+"var fn="+this.generateFunction("fn","s,l,a,i")+
e+this.watchFns()+"return fn;";e=(new Function("$filter","ensureSafeMemberName","ensureSafeObject","ensureSafeFunction","getStringValue","ensureSafeAssignContext","ifDefined","plus","text",e))(this.$filter,Sa,ra,nd,ig,Ib,mg,od,a);this.state=this.stage=void 0;e.literal=sd(c);e.constant=c.constant;return e},USE:"use",STRICT:"strict",watchFns:function(){var a=[],b=this.state.inputs,d=this;q(b,function(b){a.push("var "+b+"="+d.generateFunction(b,"s"))});b.length&&a.push("fn.inputs=["+b.join(",")+"];");
return a.join("")},generateFunction:function(a,b){return"function("+b+"){"+this.varsPrefix(a)+this.body(a)+"};"},filterPrefix:function(){var a=[],b=this;q(this.state.filters,function(d,c){a.push(d+"=$filter("+b.escape(c)+")")});return a.length?"var "+a.join(",")+";":""},varsPrefix:function(a){return this.state[a].vars.length?"var "+this.state[a].vars.join(",")+";":""},body:function(a){return this.state[a].body.join("")},recurse:function(a,b,d,c,e,f){var g,h,k=this,l,m,n;c=c||A;if(!f&&w(a.watchId))b=
b||this.nextId(),this.if_("i",this.lazyAssign(b,this.computedMember("i",a.watchId)),this.lazyRecurse(a,b,d,c,e,!0));else switch(a.type){case s.Program:q(a.body,function(b,c){k.recurse(b.expression,void 0,void 0,function(a){h=a});c!==a.body.length-1?k.current().body.push(h,";"):k.return_(h)});break;case s.Literal:m=this.escape(a.value);this.assign(b,m);c(m);break;case s.UnaryExpression:this.recurse(a.argument,void 0,void 0,function(a){h=a});m=a.operator+"("+this.ifDefined(h,0)+")";this.assign(b,m);
c(m);break;case s.BinaryExpression:this.recurse(a.left,void 0,void 0,function(a){g=a});this.recurse(a.right,void 0,void 0,function(a){h=a});m="+"===a.operator?this.plus(g,h):"-"===a.operator?this.ifDefined(g,0)+a.operator+this.ifDefined(h,0):"("+g+")"+a.operator+"("+h+")";this.assign(b,m);c(m);break;case s.LogicalExpression:b=b||this.nextId();k.recurse(a.left,b);k.if_("&&"===a.operator?b:k.not(b),k.lazyRecurse(a.right,b));c(b);break;case s.ConditionalExpression:b=b||this.nextId();k.recurse(a.test,
b);k.if_(b,k.lazyRecurse(a.alternate,b),k.lazyRecurse(a.consequent,b));c(b);break;case s.Identifier:b=b||this.nextId();d&&(d.context="inputs"===k.stage?"s":this.assign(this.nextId(),this.getHasOwnProperty("l",a.name)+"?l:s"),d.computed=!1,d.name=a.name);Sa(a.name);k.if_("inputs"===k.stage||k.not(k.getHasOwnProperty("l",a.name)),function(){k.if_("inputs"===k.stage||"s",function(){e&&1!==e&&k.if_(k.not(k.nonComputedMember("s",a.name)),k.lazyAssign(k.nonComputedMember("s",a.name),"{}"));k.assign(b,k.nonComputedMember("s",
a.name))})},b&&k.lazyAssign(b,k.nonComputedMember("l",a.name)));(k.state.expensiveChecks||Jb(a.name))&&k.addEnsureSafeObject(b);c(b);break;case s.MemberExpression:g=d&&(d.context=this.nextId())||this.nextId();b=b||this.nextId();k.recurse(a.object,g,void 0,function(){k.if_(k.notNull(g),function(){e&&1!==e&&k.addEnsureSafeAssignContext(g);if(a.computed)h=k.nextId(),k.recurse(a.property,h),k.getStringValue(h),k.addEnsureSafeMemberName(h),e&&1!==e&&k.if_(k.not(k.computedMember(g,h)),k.lazyAssign(k.computedMember(g,
h),"{}")),m=k.ensureSafeObject(k.computedMember(g,h)),k.assign(b,m),d&&(d.computed=!0,d.name=h);else{Sa(a.property.name);e&&1!==e&&k.if_(k.not(k.nonComputedMember(g,a.property.name)),k.lazyAssign(k.nonComputedMember(g,a.property.name),"{}"));m=k.nonComputedMember(g,a.property.name);if(k.state.expensiveChecks||Jb(a.property.name))m=k.ensureSafeObject(m);k.assign(b,m);d&&(d.computed=!1,d.name=a.property.name)}},function(){k.assign(b,"undefined")});c(b)},!!e);break;case s.CallExpression:b=b||this.nextId();
a.filter?(h=k.filter(a.callee.name),l=[],q(a.arguments,function(a){var b=k.nextId();k.recurse(a,b);l.push(b)}),m=h+"("+l.join(",")+")",k.assign(b,m),c(b)):(h=k.nextId(),g={},l=[],k.recurse(a.callee,h,g,function(){k.if_(k.notNull(h),function(){k.addEnsureSafeFunction(h);q(a.arguments,function(a){k.recurse(a,k.nextId(),void 0,function(a){l.push(k.ensureSafeObject(a))})});g.name?(k.state.expensiveChecks||k.addEnsureSafeObject(g.context),m=k.member(g.context,g.name,g.computed)+"("+l.join(",")+")"):m=
h+"("+l.join(",")+")";m=k.ensureSafeObject(m);k.assign(b,m)},function(){k.assign(b,"undefined")});c(b)}));break;case s.AssignmentExpression:h=this.nextId();g={};if(!qd(a.left))throw X("lval");this.recurse(a.left,void 0,g,function(){k.if_(k.notNull(g.context),function(){k.recurse(a.right,h);k.addEnsureSafeObject(k.member(g.context,g.name,g.computed));k.addEnsureSafeAssignContext(g.context);m=k.member(g.context,g.name,g.computed)+a.operator+h;k.assign(b,m);c(b||m)})},1);break;case s.ArrayExpression:l=
[];q(a.elements,function(a){k.recurse(a,k.nextId(),void 0,function(a){l.push(a)})});m="["+l.join(",")+"]";this.assign(b,m);c(m);break;case s.ObjectExpression:l=[];n=!1;q(a.properties,function(a){a.computed&&(n=!0)});n?(b=b||this.nextId(),this.assign(b,"{}"),q(a.properties,function(a){a.computed?(g=k.nextId(),k.recurse(a.key,g)):g=a.key.type===s.Identifier?a.key.name:""+a.key.value;h=k.nextId();k.recurse(a.value,h);k.assign(k.member(b,g,a.computed),h)})):(q(a.properties,function(b){k.recurse(b.value,
a.constant?void 0:k.nextId(),void 0,function(a){l.push(k.escape(b.key.type===s.Identifier?b.key.name:""+b.key.value)+":"+a)})}),m="{"+l.join(",")+"}",this.assign(b,m));c(b||m);break;case s.ThisExpression:this.assign(b,"s");c("s");break;case s.LocalsExpression:this.assign(b,"l");c("l");break;case s.NGValueParameter:this.assign(b,"v"),c("v")}},getHasOwnProperty:function(a,b){var d=a+"."+b,c=this.current().own;c.hasOwnProperty(d)||(c[d]=this.nextId(!1,a+"&&("+this.escape(b)+" in "+a+")"));return c[d]},
assign:function(a,b){if(a)return this.current().body.push(a,"=",b,";"),a},filter:function(a){this.state.filters.hasOwnProperty(a)||(this.state.filters[a]=this.nextId(!0));return this.state.filters[a]},ifDefined:function(a,b){return"ifDefined("+a+","+this.escape(b)+")"},plus:function(a,b){return"plus("+a+","+b+")"},return_:function(a){this.current().body.push("return ",a,";")},if_:function(a,b,d){if(!0===a)b();else{var c=this.current().body;c.push("if(",a,"){");b();c.push("}");d&&(c.push("else{"),
d(),c.push("}"))}},not:function(a){return"!("+a+")"},notNull:function(a){return a+"!=null"},nonComputedMember:function(a,b){var d=/[^$_a-zA-Z0-9]/g;return/[$_a-zA-Z][$_a-zA-Z0-9]*/.test(b)?a+"."+b:a+'["'+b.replace(d,this.stringEscapeFn)+'"]'},computedMember:function(a,b){return a+"["+b+"]"},member:function(a,b,d){return d?this.computedMember(a,b):this.nonComputedMember(a,b)},addEnsureSafeObject:function(a){this.current().body.push(this.ensureSafeObject(a),";")},addEnsureSafeMemberName:function(a){this.current().body.push(this.ensureSafeMemberName(a),
";")},addEnsureSafeFunction:function(a){this.current().body.push(this.ensureSafeFunction(a),";")},addEnsureSafeAssignContext:function(a){this.current().body.push(this.ensureSafeAssignContext(a),";")},ensureSafeObject:function(a){return"ensureSafeObject("+a+",text)"},ensureSafeMemberName:function(a){return"ensureSafeMemberName("+a+",text)"},ensureSafeFunction:function(a){return"ensureSafeFunction("+a+",text)"},getStringValue:function(a){this.assign(a,"getStringValue("+a+")")},ensureSafeAssignContext:function(a){return"ensureSafeAssignContext("+
a+",text)"},lazyRecurse:function(a,b,d,c,e,f){var g=this;return function(){g.recurse(a,b,d,c,e,f)}},lazyAssign:function(a,b){var d=this;return function(){d.assign(a,b)}},stringEscapeRegex:/[^ a-zA-Z0-9]/g,stringEscapeFn:function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)},escape:function(a){if(G(a))return"'"+a.replace(this.stringEscapeRegex,this.stringEscapeFn)+"'";if(T(a))return a.toString();if(!0===a)return"true";if(!1===a)return"false";if(null===a)return"null";if("undefined"===
typeof a)return"undefined";throw X("esc");},nextId:function(a,b){var d="v"+this.state.nextId++;a||this.current().vars.push(d+(b?"="+b:""));return d},current:function(){return this.state[this.state.computing]}};ud.prototype={compile:function(a,b){var d=this,c=this.astBuilder.ast(a);this.expression=a;this.expensiveChecks=b;V(c,d.$filter);var e,f;if(e=rd(c))f=this.recurse(e);e=pd(c.body);var g;e&&(g=[],q(e,function(a,b){var c=d.recurse(a);a.input=c;g.push(c);a.watchId=b}));var h=[];q(c.body,function(a){h.push(d.recurse(a.expression))});
e=0===c.body.length?A:1===c.body.length?h[0]:function(a,b){var c;q(h,function(d){c=d(a,b)});return c};f&&(e.assign=function(a,b,c){return f(a,c,b)});g&&(e.inputs=g);e.literal=sd(c);e.constant=c.constant;return e},recurse:function(a,b,d){var c,e,f=this,g;if(a.input)return this.inputs(a.input,a.watchId);switch(a.type){case s.Literal:return this.value(a.value,b);case s.UnaryExpression:return e=this.recurse(a.argument),this["unary"+a.operator](e,b);case s.BinaryExpression:return c=this.recurse(a.left),
e=this.recurse(a.right),this["binary"+a.operator](c,e,b);case s.LogicalExpression:return c=this.recurse(a.left),e=this.recurse(a.right),this["binary"+a.operator](c,e,b);case s.ConditionalExpression:return this["ternary?:"](this.recurse(a.test),this.recurse(a.alternate),this.recurse(a.consequent),b);case s.Identifier:return Sa(a.name,f.expression),f.identifier(a.name,f.expensiveChecks||Jb(a.name),b,d,f.expression);case s.MemberExpression:return c=this.recurse(a.object,!1,!!d),a.computed||(Sa(a.property.name,
f.expression),e=a.property.name),a.computed&&(e=this.recurse(a.property)),a.computed?this.computedMember(c,e,b,d,f.expression):this.nonComputedMember(c,e,f.expensiveChecks,b,d,f.expression);case s.CallExpression:return g=[],q(a.arguments,function(a){g.push(f.recurse(a))}),a.filter&&(e=this.$filter(a.callee.name)),a.filter||(e=this.recurse(a.callee,!0)),a.filter?function(a,c,d,f){for(var n=[],p=0;p<g.length;++p)n.push(g[p](a,c,d,f));a=e.apply(void 0,n,f);return b?{context:void 0,name:void 0,value:a}:
a}:function(a,c,d,m){var n=e(a,c,d,m),p;if(null!=n.value){ra(n.context,f.expression);nd(n.value,f.expression);p=[];for(var q=0;q<g.length;++q)p.push(ra(g[q](a,c,d,m),f.expression));p=ra(n.value.apply(n.context,p),f.expression)}return b?{value:p}:p};case s.AssignmentExpression:return c=this.recurse(a.left,!0,1),e=this.recurse(a.right),function(a,d,g,m){var n=c(a,d,g,m);a=e(a,d,g,m);ra(n.value,f.expression);Ib(n.context);n.context[n.name]=a;return b?{value:a}:a};case s.ArrayExpression:return g=[],q(a.elements,
function(a){g.push(f.recurse(a))}),function(a,c,d,e){for(var f=[],p=0;p<g.length;++p)f.push(g[p](a,c,d,e));return b?{value:f}:f};case s.ObjectExpression:return g=[],q(a.properties,function(a){a.computed?g.push({key:f.recurse(a.key),computed:!0,value:f.recurse(a.value)}):g.push({key:a.key.type===s.Identifier?a.key.name:""+a.key.value,computed:!1,value:f.recurse(a.value)})}),function(a,c,d,e){for(var f={},p=0;p<g.length;++p)g[p].computed?f[g[p].key(a,c,d,e)]=g[p].value(a,c,d,e):f[g[p].key]=g[p].value(a,
c,d,e);return b?{value:f}:f};case s.ThisExpression:return function(a){return b?{value:a}:a};case s.LocalsExpression:return function(a,c){return b?{value:c}:c};case s.NGValueParameter:return function(a,c,d){return b?{value:d}:d}}},"unary+":function(a,b){return function(d,c,e,f){d=a(d,c,e,f);d=w(d)?+d:0;return b?{value:d}:d}},"unary-":function(a,b){return function(d,c,e,f){d=a(d,c,e,f);d=w(d)?-d:0;return b?{value:d}:d}},"unary!":function(a,b){return function(d,c,e,f){d=!a(d,c,e,f);return b?{value:d}:
d}},"binary+":function(a,b,d){return function(c,e,f,g){var h=a(c,e,f,g);c=b(c,e,f,g);h=od(h,c);return d?{value:h}:h}},"binary-":function(a,b,d){return function(c,e,f,g){var h=a(c,e,f,g);c=b(c,e,f,g);h=(w(h)?h:0)-(w(c)?c:0);return d?{value:h}:h}},"binary*":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)*b(c,e,f,g);return d?{value:c}:c}},"binary/":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)/b(c,e,f,g);return d?{value:c}:c}},"binary%":function(a,b,d){return function(c,e,f,g){c=a(c,e,
f,g)%b(c,e,f,g);return d?{value:c}:c}},"binary===":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)===b(c,e,f,g);return d?{value:c}:c}},"binary!==":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)!==b(c,e,f,g);return d?{value:c}:c}},"binary==":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)==b(c,e,f,g);return d?{value:c}:c}},"binary!=":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)!=b(c,e,f,g);return d?{value:c}:c}},"binary<":function(a,b,d){return function(c,e,f,g){c=a(c,e,
f,g)<b(c,e,f,g);return d?{value:c}:c}},"binary>":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)>b(c,e,f,g);return d?{value:c}:c}},"binary<=":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)<=b(c,e,f,g);return d?{value:c}:c}},"binary>=":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)>=b(c,e,f,g);return d?{value:c}:c}},"binary&&":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)&&b(c,e,f,g);return d?{value:c}:c}},"binary||":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)||
b(c,e,f,g);return d?{value:c}:c}},"ternary?:":function(a,b,d,c){return function(e,f,g,h){e=a(e,f,g,h)?b(e,f,g,h):d(e,f,g,h);return c?{value:e}:e}},value:function(a,b){return function(){return b?{context:void 0,name:void 0,value:a}:a}},identifier:function(a,b,d,c,e){return function(f,g,h,k){f=g&&a in g?g:f;c&&1!==c&&f&&!f[a]&&(f[a]={});g=f?f[a]:void 0;b&&ra(g,e);return d?{context:f,name:a,value:g}:g}},computedMember:function(a,b,d,c,e){return function(f,g,h,k){var l=a(f,g,h,k),m,n;null!=l&&(m=b(f,
g,h,k),m+="",Sa(m,e),c&&1!==c&&(Ib(l),l&&!l[m]&&(l[m]={})),n=l[m],ra(n,e));return d?{context:l,name:m,value:n}:n}},nonComputedMember:function(a,b,d,c,e,f){return function(g,h,k,l){g=a(g,h,k,l);e&&1!==e&&(Ib(g),g&&!g[b]&&(g[b]={}));h=null!=g?g[b]:void 0;(d||Jb(b))&&ra(h,f);return c?{context:g,name:b,value:h}:h}},inputs:function(a,b){return function(d,c,e,f){return f?f[b]:a(d,c,e)}}};var kc=function(a,b,d){this.lexer=a;this.$filter=b;this.options=d;this.ast=new s(a,d);this.astCompiler=d.csp?new ud(this.ast,
b):new td(this.ast,b)};kc.prototype={constructor:kc,parse:function(a){return this.astCompiler.compile(a,this.options.expensiveChecks)}};var ng=Object.prototype.valueOf,sa=N("$sce"),la={HTML:"html",CSS:"css",URL:"url",RESOURCE_URL:"resourceUrl",JS:"js"},pg=N("$compile"),$=C.document.createElement("a"),yd=Y(C.location.href);zd.$inject=["$document"];Mc.$inject=["$provide"];var Gd=22,Fd=".",mc="0";Ad.$inject=["$locale"];Cd.$inject=["$locale"];var Ag={yyyy:ba("FullYear",4,0,!1,!0),yy:ba("FullYear",2,0,
!0,!0),y:ba("FullYear",1,0,!1,!0),MMMM:kb("Month"),MMM:kb("Month",!0),MM:ba("Month",2,1),M:ba("Month",1,1),LLLL:kb("Month",!1,!0),dd:ba("Date",2),d:ba("Date",1),HH:ba("Hours",2),H:ba("Hours",1),hh:ba("Hours",2,-12),h:ba("Hours",1,-12),mm:ba("Minutes",2),m:ba("Minutes",1),ss:ba("Seconds",2),s:ba("Seconds",1),sss:ba("Milliseconds",3),EEEE:kb("Day"),EEE:kb("Day",!0),a:function(a,b){return 12>a.getHours()?b.AMPMS[0]:b.AMPMS[1]},Z:function(a,b,d){a=-1*d;return a=(0<=a?"+":"")+(Kb(Math[0<a?"floor":"ceil"](a/
60),2)+Kb(Math.abs(a%60),2))},ww:Id(2),w:Id(1),G:nc,GG:nc,GGG:nc,GGGG:function(a,b){return 0>=a.getFullYear()?b.ERANAMES[0]:b.ERANAMES[1]}},zg=/((?:[^yMLdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|L+|d+|H+|h+|m+|s+|a|Z|G+|w+))(.*)/,yg=/^\-?\d+$/;Bd.$inject=["$locale"];var tg=ha(Q),ug=ha(ub);Dd.$inject=["$parse"];var oe=ha({restrict:"E",compile:function(a,b){if(!b.href&&!b.xlinkHref)return function(a,b){if("a"===b[0].nodeName.toLowerCase()){var e="[object SVGAnimatedString]"===ma.call(b.prop("href"))?
"xlink:href":"href";b.on("click",function(a){b.attr(e)||a.preventDefault()})}}}}),vb={};q(Eb,function(a,b){function d(a,d,e){a.$watch(e[c],function(a){e.$set(b,!!a)})}if("multiple"!=a){var c=Aa("ng-"+b),e=d;"checked"===a&&(e=function(a,b,e){e.ngModel!==e[c]&&d(a,b,e)});vb[c]=function(){return{restrict:"A",priority:100,link:e}}}});q(bd,function(a,b){vb[b]=function(){return{priority:100,link:function(a,c,e){if("ngPattern"===b&&"/"==e.ngPattern.charAt(0)&&(c=e.ngPattern.match(Cg))){e.$set("ngPattern",
new RegExp(c[1],c[2]));return}a.$watch(e[b],function(a){e.$set(b,a)})}}}});q(["src","srcset","href"],function(a){var b=Aa("ng-"+a);vb[b]=function(){return{priority:99,link:function(d,c,e){var f=a,g=a;"href"===a&&"[object SVGAnimatedString]"===ma.call(c.prop("href"))&&(g="xlinkHref",e.$attr[g]="xlink:href",f=null);e.$observe(b,function(b){b?(e.$set(g,b),Ea&&f&&c.prop(f,e[g])):"href"===a&&e.$set(g,null)})}}}});var Lb={$addControl:A,$$renameControl:function(a,b){a.$name=b},$removeControl:A,$setValidity:A,
$setDirty:A,$setPristine:A,$setSubmitted:A};Jd.$inject=["$element","$attrs","$scope","$animate","$interpolate"];var Sd=function(a){return["$timeout","$parse",function(b,d){function c(a){return""===a?d('this[""]').assign:d(a).assign||A}return{name:"form",restrict:a?"EAC":"E",require:["form","^^?form"],controller:Jd,compile:function(d,f){d.addClass(Ua).addClass(ob);var g=f.name?"name":a&&f.ngForm?"ngForm":!1;return{pre:function(a,d,e,f){var n=f[0];if(!("action"in e)){var p=function(b){a.$apply(function(){n.$commitViewValue();
n.$setSubmitted()});b.preventDefault()};d[0].addEventListener("submit",p,!1);d.on("$destroy",function(){b(function(){d[0].removeEventListener("submit",p,!1)},0,!1)})}(f[1]||n.$$parentForm).$addControl(n);var q=g?c(n.$name):A;g&&(q(a,n),e.$observe(g,function(b){n.$name!==b&&(q(a,void 0),n.$$parentForm.$$renameControl(n,b),q=c(n.$name),q(a,n))}));d.on("$destroy",function(){n.$$parentForm.$removeControl(n);q(a,void 0);S(n,Lb)})}}}}}]},pe=Sd(),Ce=Sd(!0),Bg=/^\d{4,}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+(?:[+-][0-2]\d:[0-5]\d|Z)$/,
Kg=/^[a-z][a-z\d.+-]*:\/*(?:[^:@]+(?::[^@]+)?@)?(?:[^\s:/?#]+|\[[a-f\d:]+\])(?::\d+)?(?:\/[^?#]*)?(?:\?[^#]*)?(?:#.*)?$/i,Lg=/^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+\/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+\/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/,Mg=/^\s*(\-|\+)?(\d+|(\d*(\.\d*)))([eE][+-]?\d+)?\s*$/,Td=/^(\d{4,})-(\d{2})-(\d{2})$/,Ud=/^(\d{4,})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,rc=/^(\d{4,})-W(\d\d)$/,Vd=/^(\d{4,})-(\d\d)$/,
Wd=/^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,Ld=U();q(["date","datetime-local","month","time","week"],function(a){Ld[a]=!0});var Xd={text:function(a,b,d,c,e,f){lb(a,b,d,c,e,f);pc(c)},date:mb("date",Td,Nb(Td,["yyyy","MM","dd"]),"yyyy-MM-dd"),"datetime-local":mb("datetimelocal",Ud,Nb(Ud,"yyyy MM dd HH mm ss sss".split(" ")),"yyyy-MM-ddTHH:mm:ss.sss"),time:mb("time",Wd,Nb(Wd,["HH","mm","ss","sss"]),"HH:mm:ss.sss"),week:mb("week",rc,function(a,b){if(da(a))return a;if(G(a)){rc.lastIndex=0;var d=rc.exec(a);
if(d){var c=+d[1],e=+d[2],f=d=0,g=0,h=0,k=Hd(c),e=7*(e-1);b&&(d=b.getHours(),f=b.getMinutes(),g=b.getSeconds(),h=b.getMilliseconds());return new Date(c,0,k.getDate()+e,d,f,g,h)}}return NaN},"yyyy-Www"),month:mb("month",Vd,Nb(Vd,["yyyy","MM"]),"yyyy-MM"),number:function(a,b,d,c,e,f){Md(a,b,d,c);lb(a,b,d,c,e,f);c.$$parserName="number";c.$parsers.push(function(a){if(c.$isEmpty(a))return null;if(Mg.test(a))return parseFloat(a)});c.$formatters.push(function(a){if(!c.$isEmpty(a)){if(!T(a))throw nb("numfmt",
a);a=a.toString()}return a});if(w(d.min)||d.ngMin){var g;c.$validators.min=function(a){return c.$isEmpty(a)||y(g)||a>=g};d.$observe("min",function(a){w(a)&&!T(a)&&(a=parseFloat(a));g=T(a)&&!isNaN(a)?a:void 0;c.$validate()})}if(w(d.max)||d.ngMax){var h;c.$validators.max=function(a){return c.$isEmpty(a)||y(h)||a<=h};d.$observe("max",function(a){w(a)&&!T(a)&&(a=parseFloat(a));h=T(a)&&!isNaN(a)?a:void 0;c.$validate()})}},url:function(a,b,d,c,e,f){lb(a,b,d,c,e,f);pc(c);c.$$parserName="url";c.$validators.url=
function(a,b){var d=a||b;return c.$isEmpty(d)||Kg.test(d)}},email:function(a,b,d,c,e,f){lb(a,b,d,c,e,f);pc(c);c.$$parserName="email";c.$validators.email=function(a,b){var d=a||b;return c.$isEmpty(d)||Lg.test(d)}},radio:function(a,b,d,c){y(d.name)&&b.attr("name",++pb);b.on("click",function(a){b[0].checked&&c.$setViewValue(d.value,a&&a.type)});c.$render=function(){b[0].checked=d.value==c.$viewValue};d.$observe("value",c.$render)},checkbox:function(a,b,d,c,e,f,g,h){var k=Nd(h,a,"ngTrueValue",d.ngTrueValue,
!0),l=Nd(h,a,"ngFalseValue",d.ngFalseValue,!1);b.on("click",function(a){c.$setViewValue(b[0].checked,a&&a.type)});c.$render=function(){b[0].checked=c.$viewValue};c.$isEmpty=function(a){return!1===a};c.$formatters.push(function(a){return na(a,k)});c.$parsers.push(function(a){return a?k:l})},hidden:A,button:A,submit:A,reset:A,file:A},Gc=["$browser","$sniffer","$filter","$parse",function(a,b,d,c){return{restrict:"E",require:["?ngModel"],link:{pre:function(e,f,g,h){h[0]&&(Xd[Q(g.type)]||Xd.text)(e,f,
g,h[0],b,a,d,c)}}}}],Ng=/^(true|false|\d+)$/,Ue=function(){return{restrict:"A",priority:100,compile:function(a,b){return Ng.test(b.ngValue)?function(a,b,e){e.$set("value",a.$eval(e.ngValue))}:function(a,b,e){a.$watch(e.ngValue,function(a){e.$set("value",a)})}}}},ue=["$compile",function(a){return{restrict:"AC",compile:function(b){a.$$addBindingClass(b);return function(b,c,e){a.$$addBindingInfo(c,e.ngBind);c=c[0];b.$watch(e.ngBind,function(a){c.textContent=y(a)?"":a})}}}}],we=["$interpolate","$compile",
function(a,b){return{compile:function(d){b.$$addBindingClass(d);return function(c,d,f){c=a(d.attr(f.$attr.ngBindTemplate));b.$$addBindingInfo(d,c.expressions);d=d[0];f.$observe("ngBindTemplate",function(a){d.textContent=y(a)?"":a})}}}}],ve=["$sce","$parse","$compile",function(a,b,d){return{restrict:"A",compile:function(c,e){var f=b(e.ngBindHtml),g=b(e.ngBindHtml,function(b){return a.valueOf(b)});d.$$addBindingClass(c);return function(b,c,e){d.$$addBindingInfo(c,e.ngBindHtml);b.$watch(g,function(){var d=
f(b);c.html(a.getTrustedHtml(d)||"")})}}}}],Te=ha({restrict:"A",require:"ngModel",link:function(a,b,d,c){c.$viewChangeListeners.push(function(){a.$eval(d.ngChange)})}}),xe=qc("",!0),ze=qc("Odd",0),ye=qc("Even",1),Ae=Ta({compile:function(a,b){b.$set("ngCloak",void 0);a.removeClass("ng-cloak")}}),Be=[function(){return{restrict:"A",scope:!0,controller:"@",priority:500}}],Lc={},Og={blur:!0,focus:!0};q("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "),
function(a){var b=Aa("ng-"+a);Lc[b]=["$parse","$rootScope",function(d,c){return{restrict:"A",compile:function(e,f){var g=d(f[b],null,!0);return function(b,d){d.on(a,function(d){var e=function(){g(b,{$event:d})};Og[a]&&c.$$phase?b.$evalAsync(e):b.$apply(e)})}}}}]});var Ee=["$animate","$compile",function(a,b){return{multiElement:!0,transclude:"element",priority:600,terminal:!0,restrict:"A",$$tlb:!0,link:function(d,c,e,f,g){var h,k,l;d.$watch(e.ngIf,function(d){d?k||g(function(d,f){k=f;d[d.length++]=
b.$$createComment("end ngIf",e.ngIf);h={clone:d};a.enter(d,c.parent(),c)}):(l&&(l.remove(),l=null),k&&(k.$destroy(),k=null),h&&(l=tb(h.clone),a.leave(l).then(function(){l=null}),h=null))})}}}],Fe=["$templateRequest","$anchorScroll","$animate",function(a,b,d){return{restrict:"ECA",priority:400,terminal:!0,transclude:"element",controller:ca.noop,compile:function(c,e){var f=e.ngInclude||e.src,g=e.onload||"",h=e.autoscroll;return function(c,e,m,n,p){var q=0,s,B,r,y=function(){B&&(B.remove(),B=null);s&&
(s.$destroy(),s=null);r&&(d.leave(r).then(function(){B=null}),B=r,r=null)};c.$watch(f,function(f){var m=function(){!w(h)||h&&!c.$eval(h)||b()},t=++q;f?(a(f,!0).then(function(a){if(!c.$$destroyed&&t===q){var b=c.$new();n.template=a;a=p(b,function(a){y();d.enter(a,null,e).then(m)});s=b;r=a;s.$emit("$includeContentLoaded",f);c.$eval(g)}},function(){c.$$destroyed||t!==q||(y(),c.$emit("$includeContentError",f))}),c.$emit("$includeContentRequested",f)):(y(),n.template=null)})}}}}],We=["$compile",function(a){return{restrict:"ECA",
priority:-400,require:"ngInclude",link:function(b,d,c,e){ma.call(d[0]).match(/SVG/)?(d.empty(),a(Oc(e.template,C.document).childNodes)(b,function(a){d.append(a)},{futureParentElement:d})):(d.html(e.template),a(d.contents())(b))}}}],Ge=Ta({priority:450,compile:function(){return{pre:function(a,b,d){a.$eval(d.ngInit)}}}}),Se=function(){return{restrict:"A",priority:100,require:"ngModel",link:function(a,b,d,c){var e=b.attr(d.$attr.ngList)||", ",f="false"!==d.ngTrim,g=f?W(e):e;c.$parsers.push(function(a){if(!y(a)){var b=
[];a&&q(a.split(g),function(a){a&&b.push(f?W(a):a)});return b}});c.$formatters.push(function(a){if(L(a))return a.join(e)});c.$isEmpty=function(a){return!a||!a.length}}}},ob="ng-valid",Od="ng-invalid",Ua="ng-pristine",Mb="ng-dirty",Qd="ng-pending",nb=N("ngModel"),Pg=["$scope","$exceptionHandler","$attrs","$element","$parse","$animate","$timeout","$rootScope","$q","$interpolate",function(a,b,d,c,e,f,g,h,k,l){this.$modelValue=this.$viewValue=Number.NaN;this.$$rawModelValue=void 0;this.$validators={};
this.$asyncValidators={};this.$parsers=[];this.$formatters=[];this.$viewChangeListeners=[];this.$untouched=!0;this.$touched=!1;this.$pristine=!0;this.$dirty=!1;this.$valid=!0;this.$invalid=!1;this.$error={};this.$$success={};this.$pending=void 0;this.$name=l(d.name||"",!1)(a);this.$$parentForm=Lb;var m=e(d.ngModel),n=m.assign,p=m,u=n,s=null,B,r=this;this.$$setOptions=function(a){if((r.$options=a)&&a.getterSetter){var b=e(d.ngModel+"()"),f=e(d.ngModel+"($$$p)");p=function(a){var c=m(a);z(c)&&(c=b(a));
return c};u=function(a,b){z(m(a))?f(a,{$$$p:b}):n(a,b)}}else if(!m.assign)throw nb("nonassign",d.ngModel,ya(c));};this.$render=A;this.$isEmpty=function(a){return y(a)||""===a||null===a||a!==a};this.$$updateEmptyClasses=function(a){r.$isEmpty(a)?(f.removeClass(c,"ng-not-empty"),f.addClass(c,"ng-empty")):(f.removeClass(c,"ng-empty"),f.addClass(c,"ng-not-empty"))};var J=0;Kd({ctrl:this,$element:c,set:function(a,b){a[b]=!0},unset:function(a,b){delete a[b]},$animate:f});this.$setPristine=function(){r.$dirty=
!1;r.$pristine=!0;f.removeClass(c,Mb);f.addClass(c,Ua)};this.$setDirty=function(){r.$dirty=!0;r.$pristine=!1;f.removeClass(c,Ua);f.addClass(c,Mb);r.$$parentForm.$setDirty()};this.$setUntouched=function(){r.$touched=!1;r.$untouched=!0;f.setClass(c,"ng-untouched","ng-touched")};this.$setTouched=function(){r.$touched=!0;r.$untouched=!1;f.setClass(c,"ng-touched","ng-untouched")};this.$rollbackViewValue=function(){g.cancel(s);r.$viewValue=r.$$lastCommittedViewValue;r.$render()};this.$validate=function(){if(!T(r.$modelValue)||
!isNaN(r.$modelValue)){var a=r.$$rawModelValue,b=r.$valid,c=r.$modelValue,d=r.$options&&r.$options.allowInvalid;r.$$runValidators(a,r.$$lastCommittedViewValue,function(e){d||b===e||(r.$modelValue=e?a:void 0,r.$modelValue!==c&&r.$$writeModelToScope())})}};this.$$runValidators=function(a,b,c){function d(){var c=!0;q(r.$validators,function(d,e){var g=d(a,b);c=c&&g;f(e,g)});return c?!0:(q(r.$asyncValidators,function(a,b){f(b,null)}),!1)}function e(){var c=[],d=!0;q(r.$asyncValidators,function(e,g){var h=
e(a,b);if(!h||!z(h.then))throw nb("nopromise",h);f(g,void 0);c.push(h.then(function(){f(g,!0)},function(){d=!1;f(g,!1)}))});c.length?k.all(c).then(function(){g(d)},A):g(!0)}function f(a,b){h===J&&r.$setValidity(a,b)}function g(a){h===J&&c(a)}J++;var h=J;(function(){var a=r.$$parserName||"parse";if(y(B))f(a,null);else return B||(q(r.$validators,function(a,b){f(b,null)}),q(r.$asyncValidators,function(a,b){f(b,null)})),f(a,B),B;return!0})()?d()?e():g(!1):g(!1)};this.$commitViewValue=function(){var a=
r.$viewValue;g.cancel(s);if(r.$$lastCommittedViewValue!==a||""===a&&r.$$hasNativeValidators)r.$$updateEmptyClasses(a),r.$$lastCommittedViewValue=a,r.$pristine&&this.$setDirty(),this.$$parseAndValidate()};this.$$parseAndValidate=function(){var b=r.$$lastCommittedViewValue;if(B=y(b)?void 0:!0)for(var c=0;c<r.$parsers.length;c++)if(b=r.$parsers[c](b),y(b)){B=!1;break}T(r.$modelValue)&&isNaN(r.$modelValue)&&(r.$modelValue=p(a));var d=r.$modelValue,e=r.$options&&r.$options.allowInvalid;r.$$rawModelValue=
b;e&&(r.$modelValue=b,r.$modelValue!==d&&r.$$writeModelToScope());r.$$runValidators(b,r.$$lastCommittedViewValue,function(a){e||(r.$modelValue=a?b:void 0,r.$modelValue!==d&&r.$$writeModelToScope())})};this.$$writeModelToScope=function(){u(a,r.$modelValue);q(r.$viewChangeListeners,function(a){try{a()}catch(c){b(c)}})};this.$setViewValue=function(a,b){r.$viewValue=a;r.$options&&!r.$options.updateOnDefault||r.$$debounceViewValueCommit(b)};this.$$debounceViewValueCommit=function(b){var c=0,d=r.$options;
d&&w(d.debounce)&&(d=d.debounce,T(d)?c=d:T(d[b])?c=d[b]:T(d["default"])&&(c=d["default"]));g.cancel(s);c?s=g(function(){r.$commitViewValue()},c):h.$$phase?r.$commitViewValue():a.$apply(function(){r.$commitViewValue()})};a.$watch(function(){var b=p(a);if(b!==r.$modelValue&&(r.$modelValue===r.$modelValue||b===b)){r.$modelValue=r.$$rawModelValue=b;B=void 0;for(var c=r.$formatters,d=c.length,e=b;d--;)e=c[d](e);r.$viewValue!==e&&(r.$$updateEmptyClasses(e),r.$viewValue=r.$$lastCommittedViewValue=e,r.$render(),
r.$$runValidators(b,e,A))}return b})}],Re=["$rootScope",function(a){return{restrict:"A",require:["ngModel","^?form","^?ngModelOptions"],controller:Pg,priority:1,compile:function(b){b.addClass(Ua).addClass("ng-untouched").addClass(ob);return{pre:function(a,b,e,f){var g=f[0];b=f[1]||g.$$parentForm;g.$$setOptions(f[2]&&f[2].$options);b.$addControl(g);e.$observe("name",function(a){g.$name!==a&&g.$$parentForm.$$renameControl(g,a)});a.$on("$destroy",function(){g.$$parentForm.$removeControl(g)})},post:function(b,
c,e,f){var g=f[0];if(g.$options&&g.$options.updateOn)c.on(g.$options.updateOn,function(a){g.$$debounceViewValueCommit(a&&a.type)});c.on("blur",function(){g.$touched||(a.$$phase?b.$evalAsync(g.$setTouched):b.$apply(g.$setTouched))})}}}}}],Qg=/(\s+|^)default(\s+|$)/,Ve=function(){return{restrict:"A",controller:["$scope","$attrs",function(a,b){var d=this;this.$options=pa(a.$eval(b.ngModelOptions));w(this.$options.updateOn)?(this.$options.updateOnDefault=!1,this.$options.updateOn=W(this.$options.updateOn.replace(Qg,
function(){d.$options.updateOnDefault=!0;return" "}))):this.$options.updateOnDefault=!0}]}},He=Ta({terminal:!0,priority:1E3}),Rg=N("ngOptions"),Sg=/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?(?:\s+disable\s+when\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,Pe=["$compile","$document","$parse",function(a,b,d){function c(a,b,c){function e(a,b,c,d,f){this.selectValue=a;this.viewValue=
b;this.label=c;this.group=d;this.disabled=f}function f(a){var b;if(!q&&ta(a))b=a;else{b=[];for(var c in a)a.hasOwnProperty(c)&&"$"!==c.charAt(0)&&b.push(c)}return b}var n=a.match(Sg);if(!n)throw Rg("iexp",a,ya(b));var p=n[5]||n[7],q=n[6];a=/ as /.test(n[0])&&n[1];var s=n[9];b=d(n[2]?n[1]:p);var w=a&&d(a)||b,r=s&&d(s),y=s?function(a,b){return r(c,b)}:function(a){return Ca(a)},v=function(a,b){return y(a,E(a,b))},A=d(n[2]||n[1]),t=d(n[3]||""),K=d(n[4]||""),z=d(n[8]),H={},E=q?function(a,b){H[q]=b;H[p]=
a;return H}:function(a){H[p]=a;return H};return{trackBy:s,getTrackByValue:v,getWatchables:d(z,function(a){var b=[];a=a||[];for(var d=f(a),e=d.length,g=0;g<e;g++){var h=a===d?g:d[g],l=a[h],h=E(l,h),l=y(l,h);b.push(l);if(n[2]||n[1])l=A(c,h),b.push(l);n[4]&&(h=K(c,h),b.push(h))}return b}),getOptions:function(){for(var a=[],b={},d=z(c)||[],g=f(d),h=g.length,n=0;n<h;n++){var p=d===g?n:g[n],q=E(d[p],p),r=w(c,q),p=y(r,q),u=A(c,q),H=t(c,q),q=K(c,q),r=new e(p,r,u,H,q);a.push(r);b[p]=r}return{items:a,selectValueMap:b,
getOptionFromViewValue:function(a){return b[v(a)]},getViewValueFromOption:function(a){return s?ca.copy(a.viewValue):a.viewValue}}}}}var e=C.document.createElement("option"),f=C.document.createElement("optgroup");return{restrict:"A",terminal:!0,require:["select","ngModel"],link:{pre:function(a,b,c,d){d[0].registerOption=A},post:function(d,h,k,l){function m(a,b){a.element=b;b.disabled=a.disabled;a.label!==b.label&&(b.label=a.label,b.textContent=a.label);a.value!==b.value&&(b.value=a.selectValue)}function n(){var a=
t&&p.readValue();if(t)for(var b=t.items.length-1;0<=b;b--){var c=t.items[b];w(c.group)?Db(c.element.parentNode):Db(c.element)}t=K.getOptions();var d={};v&&h.prepend(B);t.items.forEach(function(a){var b;if(w(a.group)){b=d[a.group];b||(b=f.cloneNode(!1),C.appendChild(b),b.label=null===a.group?"null":a.group,d[a.group]=b);var c=e.cloneNode(!1)}else b=C,c=e.cloneNode(!1);b.appendChild(c);m(a,c)});h[0].appendChild(C);s.$render();s.$isEmpty(a)||(b=p.readValue(),(K.trackBy||y?na(a,b):a===b)||(s.$setViewValue(b),
s.$render()))}var p=l[0],s=l[1],y=k.multiple,B;l=0;for(var r=h.children(),A=r.length;l<A;l++)if(""===r[l].value){B=r.eq(l);break}var v=!!B,z=F(e.cloneNode(!1));z.val("?");var t,K=c(k.ngOptions,h,d),C=b[0].createDocumentFragment();y?(s.$isEmpty=function(a){return!a||0===a.length},p.writeValue=function(a){t.items.forEach(function(a){a.element.selected=!1});a&&a.forEach(function(a){if(a=t.getOptionFromViewValue(a))a.element.selected=!0})},p.readValue=function(){var a=h.val()||[],b=[];q(a,function(a){(a=
t.selectValueMap[a])&&!a.disabled&&b.push(t.getViewValueFromOption(a))});return b},K.trackBy&&d.$watchCollection(function(){if(L(s.$viewValue))return s.$viewValue.map(function(a){return K.getTrackByValue(a)})},function(){s.$render()})):(p.writeValue=function(a){var b=t.getOptionFromViewValue(a);b?(h[0].value!==b.selectValue&&(z.remove(),v||B.remove(),h[0].value=b.selectValue,b.element.selected=!0),b.element.setAttribute("selected","selected")):null===a||v?(z.remove(),v||h.prepend(B),h.val(""),B.prop("selected",
!0),B.attr("selected",!0)):(v||B.remove(),h.prepend(z),h.val("?"),z.prop("selected",!0),z.attr("selected",!0))},p.readValue=function(){var a=t.selectValueMap[h.val()];return a&&!a.disabled?(v||B.remove(),z.remove(),t.getViewValueFromOption(a)):null},K.trackBy&&d.$watch(function(){return K.getTrackByValue(s.$viewValue)},function(){s.$render()}));v?(B.remove(),a(B)(d),B.removeClass("ng-scope")):B=F(e.cloneNode(!1));h.empty();n();d.$watchCollection(K.getWatchables,n)}}}}],Ie=["$locale","$interpolate",
"$log",function(a,b,d){var c=/{}/g,e=/^when(Minus)?(.+)$/;return{link:function(f,g,h){function k(a){g.text(a||"")}var l=h.count,m=h.$attr.when&&g.attr(h.$attr.when),n=h.offset||0,p=f.$eval(m)||{},s={},w=b.startSymbol(),B=b.endSymbol(),r=w+l+"-"+n+B,z=ca.noop,v;q(h,function(a,b){var c=e.exec(b);c&&(c=(c[1]?"-":"")+Q(c[2]),p[c]=g.attr(h.$attr[b]))});q(p,function(a,d){s[d]=b(a.replace(c,r))});f.$watch(l,function(b){var c=parseFloat(b),e=isNaN(c);e||c in p||(c=a.pluralCat(c-n));c===v||e&&T(v)&&isNaN(v)||
(z(),e=s[c],y(e)?(null!=b&&d.debug("ngPluralize: no rule defined for '"+c+"' in "+m),z=A,k()):z=f.$watch(e,k),v=c)})}}}],Je=["$parse","$animate","$compile",function(a,b,d){var c=N("ngRepeat"),e=function(a,b,c,d,e,m,n){a[c]=d;e&&(a[e]=m);a.$index=b;a.$first=0===b;a.$last=b===n-1;a.$middle=!(a.$first||a.$last);a.$odd=!(a.$even=0===(b&1))};return{restrict:"A",multiElement:!0,transclude:"element",priority:1E3,terminal:!0,$$tlb:!0,compile:function(f,g){var h=g.ngRepeat,k=d.$$createComment("end ngRepeat",
h),l=h.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);if(!l)throw c("iexp",h);var m=l[1],n=l[2],p=l[3],s=l[4],l=m.match(/^(?:(\s*[\$\w]+)|\(\s*([\$\w]+)\s*,\s*([\$\w]+)\s*\))$/);if(!l)throw c("iidexp",m);var w=l[3]||l[1],y=l[2];if(p&&(!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(p)||/^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(p)))throw c("badident",p);var r,z,v,A,t={$id:Ca};s?r=a(s):(v=function(a,b){return Ca(b)},
A=function(a){return a});return function(a,d,f,g,l){r&&(z=function(b,c,d){y&&(t[y]=b);t[w]=c;t.$index=d;return r(a,t)});var m=U();a.$watchCollection(n,function(f){var g,n,r=d[0],s,u=U(),t,C,F,E,G,D,H;p&&(a[p]=f);if(ta(f))G=f,n=z||v;else for(H in n=z||A,G=[],f)ua.call(f,H)&&"$"!==H.charAt(0)&&G.push(H);t=G.length;H=Array(t);for(g=0;g<t;g++)if(C=f===G?g:G[g],F=f[C],E=n(C,F,g),m[E])D=m[E],delete m[E],u[E]=D,H[g]=D;else{if(u[E])throw q(H,function(a){a&&a.scope&&(m[a.id]=a)}),c("dupes",h,E,F);H[g]={id:E,
scope:void 0,clone:void 0};u[E]=!0}for(s in m){D=m[s];E=tb(D.clone);b.leave(E);if(E[0].parentNode)for(g=0,n=E.length;g<n;g++)E[g].$$NG_REMOVED=!0;D.scope.$destroy()}for(g=0;g<t;g++)if(C=f===G?g:G[g],F=f[C],D=H[g],D.scope){s=r;do s=s.nextSibling;while(s&&s.$$NG_REMOVED);D.clone[0]!=s&&b.move(tb(D.clone),null,r);r=D.clone[D.clone.length-1];e(D.scope,g,w,F,y,C,t)}else l(function(a,c){D.scope=c;var d=k.cloneNode(!1);a[a.length++]=d;b.enter(a,null,r);r=d;D.clone=a;u[D.id]=D;e(D.scope,g,w,F,y,C,t)});m=
u})}}}}],Ke=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(b,d,c){b.$watch(c.ngShow,function(b){a[b?"removeClass":"addClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],De=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(b,d,c){b.$watch(c.ngHide,function(b){a[b?"addClass":"removeClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],Le=Ta(function(a,b,d){a.$watch(d.ngStyle,function(a,d){d&&a!==d&&q(d,function(a,c){b.css(c,"")});a&&b.css(a)},
!0)}),Me=["$animate","$compile",function(a,b){return{require:"ngSwitch",controller:["$scope",function(){this.cases={}}],link:function(d,c,e,f){var g=[],h=[],k=[],l=[],m=function(a,b){return function(){a.splice(b,1)}};d.$watch(e.ngSwitch||e.on,function(c){var d,e;d=0;for(e=k.length;d<e;++d)a.cancel(k[d]);d=k.length=0;for(e=l.length;d<e;++d){var s=tb(h[d].clone);l[d].$destroy();(k[d]=a.leave(s)).then(m(k,d))}h.length=0;l.length=0;(g=f.cases["!"+c]||f.cases["?"])&&q(g,function(c){c.transclude(function(d,
e){l.push(e);var f=c.element;d[d.length++]=b.$$createComment("end ngSwitchWhen");h.push({clone:d});a.enter(d,f.parent(),f)})})})}}}],Ne=Ta({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,b,d,c,e){c.cases["!"+d.ngSwitchWhen]=c.cases["!"+d.ngSwitchWhen]||[];c.cases["!"+d.ngSwitchWhen].push({transclude:e,element:b})}}),Oe=Ta({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,b,d,c,e){c.cases["?"]=c.cases["?"]||[];c.cases["?"].push({transclude:e,
element:b})}}),Tg=N("ngTransclude"),Qe=["$compile",function(a){return{restrict:"EAC",terminal:!0,compile:function(b){var d=a(b.contents());b.empty();return function(a,b,f,g,h){function k(){d(a,function(a){b.append(a)})}if(!h)throw Tg("orphan",ya(b));f.ngTransclude===f.$attr.ngTransclude&&(f.ngTransclude="");f=f.ngTransclude||f.ngTranscludeSlot;h(function(a,c){a.length?b.append(a):(k(),c.$destroy())},null,f);f&&!h.isSlotFilled(f)&&k()}}}}],qe=["$templateCache",function(a){return{restrict:"E",terminal:!0,
compile:function(b,d){"text/ng-template"==d.type&&a.put(d.id,b[0].text)}}}],Ug={$setViewValue:A,$render:A},Vg=["$element","$scope",function(a,b){var d=this,c=new Ra;d.ngModelCtrl=Ug;d.unknownOption=F(C.document.createElement("option"));d.renderUnknownOption=function(b){b="? "+Ca(b)+" ?";d.unknownOption.val(b);a.prepend(d.unknownOption);a.val(b)};b.$on("$destroy",function(){d.renderUnknownOption=A});d.removeUnknownOption=function(){d.unknownOption.parent()&&d.unknownOption.remove()};d.readValue=function(){d.removeUnknownOption();
return a.val()};d.writeValue=function(b){d.hasOption(b)?(d.removeUnknownOption(),a.val(b),""===b&&d.emptyOption.prop("selected",!0)):null==b&&d.emptyOption?(d.removeUnknownOption(),a.val("")):d.renderUnknownOption(b)};d.addOption=function(a,b){if(8!==b[0].nodeType){Qa(a,'"option value"');""===a&&(d.emptyOption=b);var g=c.get(a)||0;c.put(a,g+1);d.ngModelCtrl.$render();b[0].hasAttribute("selected")&&(b[0].selected=!0)}};d.removeOption=function(a){var b=c.get(a);b&&(1===b?(c.remove(a),""===a&&(d.emptyOption=
void 0)):c.put(a,b-1))};d.hasOption=function(a){return!!c.get(a)};d.registerOption=function(a,b,c,h,k){if(h){var l;c.$observe("value",function(a){w(l)&&d.removeOption(l);l=a;d.addOption(a,b)})}else k?a.$watch(k,function(a,e){c.$set("value",a);e!==a&&d.removeOption(e);d.addOption(a,b)}):d.addOption(c.value,b);b.on("$destroy",function(){d.removeOption(c.value);d.ngModelCtrl.$render()})}}],re=function(){return{restrict:"E",require:["select","?ngModel"],controller:Vg,priority:1,link:{pre:function(a,b,
d,c){var e=c[1];if(e){var f=c[0];f.ngModelCtrl=e;b.on("change",function(){a.$apply(function(){e.$setViewValue(f.readValue())})});if(d.multiple){f.readValue=function(){var a=[];q(b.find("option"),function(b){b.selected&&a.push(b.value)});return a};f.writeValue=function(a){var c=new Ra(a);q(b.find("option"),function(a){a.selected=w(c.get(a.value))})};var g,h=NaN;a.$watch(function(){h!==e.$viewValue||na(g,e.$viewValue)||(g=ia(e.$viewValue),e.$render());h=e.$viewValue});e.$isEmpty=function(a){return!a||
0===a.length}}}},post:function(a,b,d,c){var e=c[1];if(e){var f=c[0];e.$render=function(){f.writeValue(e.$viewValue)}}}}}},te=["$interpolate",function(a){return{restrict:"E",priority:100,compile:function(b,d){if(w(d.value))var c=a(d.value,!0);else{var e=a(b.text(),!0);e||d.$set("value",b.text())}return function(a,b,d){var k=b.parent();(k=k.data("$selectController")||k.parent().data("$selectController"))&&k.registerOption(a,b,d,c,e)}}}}],se=ha({restrict:"E",terminal:!1}),Ic=function(){return{restrict:"A",
require:"?ngModel",link:function(a,b,d,c){c&&(d.required=!0,c.$validators.required=function(a,b){return!d.required||!c.$isEmpty(b)},d.$observe("required",function(){c.$validate()}))}}},Hc=function(){return{restrict:"A",require:"?ngModel",link:function(a,b,d,c){if(c){var e,f=d.ngPattern||d.pattern;d.$observe("pattern",function(a){G(a)&&0<a.length&&(a=new RegExp("^"+a+"$"));if(a&&!a.test)throw N("ngPattern")("noregexp",f,a,ya(b));e=a||void 0;c.$validate()});c.$validators.pattern=function(a,b){return c.$isEmpty(b)||
y(e)||e.test(b)}}}}},Kc=function(){return{restrict:"A",require:"?ngModel",link:function(a,b,d,c){if(c){var e=-1;d.$observe("maxlength",function(a){a=Z(a);e=isNaN(a)?-1:a;c.$validate()});c.$validators.maxlength=function(a,b){return 0>e||c.$isEmpty(b)||b.length<=e}}}}},Jc=function(){return{restrict:"A",require:"?ngModel",link:function(a,b,d,c){if(c){var e=0;d.$observe("minlength",function(a){e=Z(a)||0;c.$validate()});c.$validators.minlength=function(a,b){return c.$isEmpty(b)||b.length>=e}}}}};C.angular.bootstrap?
C.console&&console.log("WARNING: Tried to load angular more than once."):(je(),le(ca),ca.module("ngLocale",[],["$provide",function(a){function b(a){a+="";var b=a.indexOf(".");return-1==b?0:a.length-b-1}a.value("$locale",{DATETIME_FORMATS:{AMPMS:["AM","PM"],DAY:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),ERANAMES:["Before Christ","Anno Domini"],ERAS:["BC","AD"],FIRSTDAYOFWEEK:6,MONTH:"January February March April May June July August September October November December".split(" "),
SHORTDAY:"Sun Mon Tue Wed Thu Fri Sat".split(" "),SHORTMONTH:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),STANDALONEMONTH:"January February March April May June July August September October November December".split(" "),WEEKENDRANGE:[5,6],fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",medium:"MMM d, y h:mm:ss a",mediumDate:"MMM d, y",mediumTime:"h:mm:ss a","short":"M/d/yy h:mm a",shortDate:"M/d/yy",shortTime:"h:mm a"},NUMBER_FORMATS:{CURRENCY_SYM:"$",DECIMAL_SEP:".",GROUP_SEP:",",
PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-\u00a4",negSuf:"",posPre:"\u00a4",posSuf:""}]},id:"en-us",localeID:"en_US",pluralCat:function(a,c){var e=a|0,f=c;void 0===f&&(f=Math.min(b(a),3));Math.pow(10,f);return 1==e&&0==f?"one":"other"}})}]),F(C.document).ready(function(){fe(C.document,Bc)}))})(window);!window.angular.$$csp().noInlineStyle&&window.angular.element(document.head).prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}.ng-animate-shim{visibility:hidden;}.ng-anchor{position:absolute;}</style>');
//# sourceMappingURL=angular.min.js.map

/*
 AngularJS v1.5.8
 (c) 2010-2016 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(R,B){'use strict';function Da(a,b,c){if(!a)throw Ma("areq",b||"?",c||"required");return a}function Ea(a,b){if(!a&&!b)return"";if(!a)return b;if(!b)return a;Y(a)&&(a=a.join(" "));Y(b)&&(b=b.join(" "));return a+" "+b}function Na(a){var b={};a&&(a.to||a.from)&&(b.to=a.to,b.from=a.from);return b}function Z(a,b,c){var d="";a=Y(a)?a:a&&G(a)&&a.length?a.split(/\s+/):[];s(a,function(a,l){a&&0<a.length&&(d+=0<l?" ":"",d+=c?b+a:a+b)});return d}function Oa(a){if(a instanceof F)switch(a.length){case 0:return a;
case 1:if(1===a[0].nodeType)return a;break;default:return F(ta(a))}if(1===a.nodeType)return F(a)}function ta(a){if(!a[0])return a;for(var b=0;b<a.length;b++){var c=a[b];if(1==c.nodeType)return c}}function Pa(a,b,c){s(b,function(b){a.addClass(b,c)})}function Qa(a,b,c){s(b,function(b){a.removeClass(b,c)})}function V(a){return function(b,c){c.addClass&&(Pa(a,b,c.addClass),c.addClass=null);c.removeClass&&(Qa(a,b,c.removeClass),c.removeClass=null)}}function oa(a){a=a||{};if(!a.$$prepared){var b=a.domOperation||
P;a.domOperation=function(){a.$$domOperationFired=!0;b();b=P};a.$$prepared=!0}return a}function ha(a,b){Fa(a,b);Ga(a,b)}function Fa(a,b){b.from&&(a.css(b.from),b.from=null)}function Ga(a,b){b.to&&(a.css(b.to),b.to=null)}function W(a,b,c){var d=b.options||{};c=c.options||{};var e=(d.addClass||"")+" "+(c.addClass||""),l=(d.removeClass||"")+" "+(c.removeClass||"");a=Ra(a.attr("class"),e,l);c.preparationClasses&&(d.preparationClasses=$(c.preparationClasses,d.preparationClasses),delete c.preparationClasses);
e=d.domOperation!==P?d.domOperation:null;ua(d,c);e&&(d.domOperation=e);d.addClass=a.addClass?a.addClass:null;d.removeClass=a.removeClass?a.removeClass:null;b.addClass=d.addClass;b.removeClass=d.removeClass;return d}function Ra(a,b,c){function d(a){G(a)&&(a=a.split(" "));var b={};s(a,function(a){a.length&&(b[a]=!0)});return b}var e={};a=d(a);b=d(b);s(b,function(a,b){e[b]=1});c=d(c);s(c,function(a,b){e[b]=1===e[b]?null:-1});var l={addClass:"",removeClass:""};s(e,function(b,c){var d,e;1===b?(d="addClass",
e=!a[c]||a[c+"-remove"]):-1===b&&(d="removeClass",e=a[c]||a[c+"-add"]);e&&(l[d].length&&(l[d]+=" "),l[d]+=c)});return l}function y(a){return a instanceof F?a[0]:a}function Sa(a,b,c){var d="";b&&(d=Z(b,"ng-",!0));c.addClass&&(d=$(d,Z(c.addClass,"-add")));c.removeClass&&(d=$(d,Z(c.removeClass,"-remove")));d.length&&(c.preparationClasses=d,a.addClass(d))}function pa(a,b){var c=b?"-"+b+"s":"";la(a,[ma,c]);return[ma,c]}function va(a,b){var c=b?"paused":"",d=aa+"PlayState";la(a,[d,c]);return[d,c]}function la(a,
b){a.style[b[0]]=b[1]}function $(a,b){return a?b?a+" "+b:a:b}function Ha(a,b,c){var d=Object.create(null),e=a.getComputedStyle(b)||{};s(c,function(a,b){var c=e[a];if(c){var g=c.charAt(0);if("-"===g||"+"===g||0<=g)c=Ta(c);0===c&&(c=null);d[b]=c}});return d}function Ta(a){var b=0;a=a.split(/\s*,\s*/);s(a,function(a){"s"==a.charAt(a.length-1)&&(a=a.substring(0,a.length-1));a=parseFloat(a)||0;b=b?Math.max(a,b):a});return b}function wa(a){return 0===a||null!=a}function Ia(a,b){var c=S,d=a+"s";b?c+="Duration":
d+=" linear all";return[c,d]}function Ja(){var a=Object.create(null);return{flush:function(){a=Object.create(null)},count:function(b){return(b=a[b])?b.total:0},get:function(b){return(b=a[b])&&b.value},put:function(b,c){a[b]?a[b].total++:a[b]={total:1,value:c}}}}function Ka(a,b,c){s(c,function(c){a[c]=xa(a[c])?a[c]:b.style.getPropertyValue(c)})}var S,ya,aa,za;void 0===R.ontransitionend&&void 0!==R.onwebkittransitionend?(S="WebkitTransition",ya="webkitTransitionEnd transitionend"):(S="transition",ya=
"transitionend");void 0===R.onanimationend&&void 0!==R.onwebkitanimationend?(aa="WebkitAnimation",za="webkitAnimationEnd animationend"):(aa="animation",za="animationend");var qa=aa+"Delay",Aa=aa+"Duration",ma=S+"Delay",La=S+"Duration",Ma=B.$$minErr("ng"),Ua={transitionDuration:La,transitionDelay:ma,transitionProperty:S+"Property",animationDuration:Aa,animationDelay:qa,animationIterationCount:aa+"IterationCount"},Va={transitionDuration:La,transitionDelay:ma,animationDuration:Aa,animationDelay:qa},
Ba,ua,s,Y,xa,ea,Ca,ba,G,J,F,P;B.module("ngAnimate",[],function(){P=B.noop;Ba=B.copy;ua=B.extend;F=B.element;s=B.forEach;Y=B.isArray;G=B.isString;ba=B.isObject;J=B.isUndefined;xa=B.isDefined;Ca=B.isFunction;ea=B.isElement}).directive("ngAnimateSwap",["$animate","$rootScope",function(a,b){return{restrict:"A",transclude:"element",terminal:!0,priority:600,link:function(b,d,e,l,n){var I,g;b.$watchCollection(e.ngAnimateSwap||e["for"],function(e){I&&a.leave(I);g&&(g.$destroy(),g=null);if(e||0===e)g=b.$new(),
n(g,function(b){I=b;a.enter(b,null,d)})})}}}]).directive("ngAnimateChildren",["$interpolate",function(a){return{link:function(b,c,d){function e(a){c.data("$$ngAnimateChildren","on"===a||"true"===a)}var l=d.ngAnimateChildren;G(l)&&0===l.length?c.data("$$ngAnimateChildren",!0):(e(a(l)(b)),d.$observe("ngAnimateChildren",e))}}}]).factory("$$rAFScheduler",["$$rAF",function(a){function b(a){d=d.concat(a);c()}function c(){if(d.length){for(var b=d.shift(),n=0;n<b.length;n++)b[n]();e||a(function(){e||c()})}}
var d,e;d=b.queue=[];b.waitUntilQuiet=function(b){e&&e();e=a(function(){e=null;b();c()})};return b}]).provider("$$animateQueue",["$animateProvider",function(a){function b(a){if(!a)return null;a=a.split(" ");var b=Object.create(null);s(a,function(a){b[a]=!0});return b}function c(a,c){if(a&&c){var d=b(c);return a.split(" ").some(function(a){return d[a]})}}function d(a,b,c,d){return l[a].some(function(a){return a(b,c,d)})}function e(a,b){var c=0<(a.addClass||"").length,d=0<(a.removeClass||"").length;
return b?c&&d:c||d}var l=this.rules={skip:[],cancel:[],join:[]};l.join.push(function(a,b,c){return!b.structural&&e(b)});l.skip.push(function(a,b,c){return!b.structural&&!e(b)});l.skip.push(function(a,b,c){return"leave"==c.event&&b.structural});l.skip.push(function(a,b,c){return c.structural&&2===c.state&&!b.structural});l.cancel.push(function(a,b,c){return c.structural&&b.structural});l.cancel.push(function(a,b,c){return 2===c.state&&b.structural});l.cancel.push(function(a,b,d){if(d.structural)return!1;
a=b.addClass;b=b.removeClass;var e=d.addClass;d=d.removeClass;return J(a)&&J(b)||J(e)&&J(d)?!1:c(a,d)||c(b,e)});this.$get=["$$rAF","$rootScope","$rootElement","$document","$$HashMap","$$animation","$$AnimateRunner","$templateRequest","$$jqLite","$$forceReflow",function(b,c,g,l,C,Wa,Q,t,H,T){function O(){var a=!1;return function(b){a?b():c.$$postDigest(function(){a=!0;b()})}}function x(a,b,c){var f=y(b),d=y(a),N=[];(a=h[c])&&s(a,function(a){w.call(a.node,f)?N.push(a.callback):"leave"===c&&w.call(a.node,
d)&&N.push(a.callback)});return N}function r(a,b,c){var f=ta(b);return a.filter(function(a){return!(a.node===f&&(!c||a.callback===c))})}function p(a,h,v){function r(c,f,d,h){sa(function(){var c=x(T,a,f);c.length?b(function(){s(c,function(b){b(a,d,h)});"close"!==d||a[0].parentNode||ra.off(a)}):"close"!==d||a[0].parentNode||ra.off(a)});c.progress(f,d,h)}function k(b){var c=a,f=m;f.preparationClasses&&(c.removeClass(f.preparationClasses),f.preparationClasses=null);f.activeClasses&&(c.removeClass(f.activeClasses),
f.activeClasses=null);E(a,m);ha(a,m);m.domOperation();A.complete(!b)}var m=Ba(v),p,T;if(a=Oa(a))p=y(a),T=a.parent();var m=oa(m),A=new Q,sa=O();Y(m.addClass)&&(m.addClass=m.addClass.join(" "));m.addClass&&!G(m.addClass)&&(m.addClass=null);Y(m.removeClass)&&(m.removeClass=m.removeClass.join(" "));m.removeClass&&!G(m.removeClass)&&(m.removeClass=null);m.from&&!ba(m.from)&&(m.from=null);m.to&&!ba(m.to)&&(m.to=null);if(!p)return k(),A;v=[p.className,m.addClass,m.removeClass].join(" ");if(!Xa(v))return k(),
A;var g=0<=["enter","move","leave"].indexOf(h),w=l[0].hidden,t=!f||w||N.get(p);v=!t&&z.get(p)||{};var H=!!v.state;t||H&&1==v.state||(t=!M(a,T,h));if(t)return w&&r(A,h,"start"),k(),w&&r(A,h,"close"),A;g&&K(a);w={structural:g,element:a,event:h,addClass:m.addClass,removeClass:m.removeClass,close:k,options:m,runner:A};if(H){if(d("skip",a,w,v)){if(2===v.state)return k(),A;W(a,v,w);return v.runner}if(d("cancel",a,w,v))if(2===v.state)v.runner.end();else if(v.structural)v.close();else return W(a,v,w),v.runner;
else if(d("join",a,w,v))if(2===v.state)W(a,w,{});else return Sa(a,g?h:null,m),h=w.event=v.event,m=W(a,v,w),v.runner}else W(a,w,{});(H=w.structural)||(H="animate"===w.event&&0<Object.keys(w.options.to||{}).length||e(w));if(!H)return k(),ka(a),A;var C=(v.counter||0)+1;w.counter=C;L(a,1,w);c.$$postDigest(function(){var b=z.get(p),c=!b,b=b||{},f=0<(a.parent()||[]).length&&("animate"===b.event||b.structural||e(b));if(c||b.counter!==C||!f){c&&(E(a,m),ha(a,m));if(c||g&&b.event!==h)m.domOperation(),A.end();
f||ka(a)}else h=!b.structural&&e(b,!0)?"setClass":b.event,L(a,2),b=Wa(a,h,b.options),A.setHost(b),r(A,h,"start",{}),b.done(function(b){k(!b);(b=z.get(p))&&b.counter===C&&ka(y(a));r(A,h,"close",{})})});return A}function K(a){a=y(a).querySelectorAll("[data-ng-animate]");s(a,function(a){var b=parseInt(a.getAttribute("data-ng-animate")),c=z.get(a);if(c)switch(b){case 2:c.runner.end();case 1:z.remove(a)}})}function ka(a){a=y(a);a.removeAttribute("data-ng-animate");z.remove(a)}function k(a,b){return y(a)===
y(b)}function M(a,b,c){c=F(l[0].body);var f=k(a,c)||"HTML"===a[0].nodeName,d=k(a,g),h=!1,r,e=N.get(y(a));(a=F.data(a[0],"$ngAnimatePin"))&&(b=a);for(b=y(b);b;){d||(d=k(b,g));if(1!==b.nodeType)break;a=z.get(b)||{};if(!h){var p=N.get(b);if(!0===p&&!1!==e){e=!0;break}else!1===p&&(e=!1);h=a.structural}if(J(r)||!0===r)a=F.data(b,"$$ngAnimateChildren"),xa(a)&&(r=a);if(h&&!1===r)break;f||(f=k(b,c));if(f&&d)break;if(!d&&(a=F.data(b,"$ngAnimatePin"))){b=y(a);continue}b=b.parentNode}return(!h||r)&&!0!==e&&
d&&f}function L(a,b,c){c=c||{};c.state=b;a=y(a);a.setAttribute("data-ng-animate",b);c=(b=z.get(a))?ua(b,c):c;z.put(a,c)}var z=new C,N=new C,f=null,A=c.$watch(function(){return 0===t.totalPendingRequests},function(a){a&&(A(),c.$$postDigest(function(){c.$$postDigest(function(){null===f&&(f=!0)})}))}),h=Object.create(null),sa=a.classNameFilter(),Xa=sa?function(a){return sa.test(a)}:function(){return!0},E=V(H),w=R.Node.prototype.contains||function(a){return this===a||!!(this.compareDocumentPosition(a)&
16)},ra={on:function(a,b,c){var f=ta(b);h[a]=h[a]||[];h[a].push({node:f,callback:c});F(b).on("$destroy",function(){z.get(f)||ra.off(a,b,c)})},off:function(a,b,c){if(1!==arguments.length||G(arguments[0])){var f=h[a];f&&(h[a]=1===arguments.length?null:r(f,b,c))}else for(f in b=arguments[0],h)h[f]=r(h[f],b)},pin:function(a,b){Da(ea(a),"element","not an element");Da(ea(b),"parentElement","not an element");a.data("$ngAnimatePin",b)},push:function(a,b,c,f){c=c||{};c.domOperation=f;return p(a,b,c)},enabled:function(a,
b){var c=arguments.length;if(0===c)b=!!f;else if(ea(a)){var d=y(a);1===c?b=!N.get(d):N.put(d,!b)}else b=f=!!a;return b}};return ra}]}]).provider("$$animation",["$animateProvider",function(a){var b=this.drivers=[];this.$get=["$$jqLite","$rootScope","$injector","$$AnimateRunner","$$HashMap","$$rAFScheduler",function(a,d,e,l,n,I){function g(a){function b(a){if(a.processed)return a;a.processed=!0;var d=a.domNode,p=d.parentNode;e.put(d,a);for(var K;p;){if(K=e.get(p)){K.processed||(K=b(K));break}p=p.parentNode}(K||
c).children.push(a);return a}var c={children:[]},d,e=new n;for(d=0;d<a.length;d++){var g=a[d];e.put(g.domNode,a[d]={domNode:g.domNode,fn:g.fn,children:[]})}for(d=0;d<a.length;d++)b(a[d]);return function(a){var b=[],c=[],d;for(d=0;d<a.children.length;d++)c.push(a.children[d]);a=c.length;var e=0,k=[];for(d=0;d<c.length;d++){var g=c[d];0>=a&&(a=e,e=0,b.push(k),k=[]);k.push(g.fn);g.children.forEach(function(a){e++;c.push(a)});a--}k.length&&b.push(k);return b}(c)}var u=[],C=V(a);return function(n,Q,t){function H(a){a=
a.hasAttribute("ng-animate-ref")?[a]:a.querySelectorAll("[ng-animate-ref]");var b=[];s(a,function(a){var c=a.getAttribute("ng-animate-ref");c&&c.length&&b.push(a)});return b}function T(a){var b=[],c={};s(a,function(a,d){var h=y(a.element),e=0<=["enter","move"].indexOf(a.event),h=a.structural?H(h):[];if(h.length){var k=e?"to":"from";s(h,function(a){var b=a.getAttribute("ng-animate-ref");c[b]=c[b]||{};c[b][k]={animationID:d,element:F(a)}})}else b.push(a)});var d={},e={};s(c,function(c,k){var r=c.from,
p=c.to;if(r&&p){var z=a[r.animationID],g=a[p.animationID],A=r.animationID.toString();if(!e[A]){var n=e[A]={structural:!0,beforeStart:function(){z.beforeStart();g.beforeStart()},close:function(){z.close();g.close()},classes:O(z.classes,g.classes),from:z,to:g,anchors:[]};n.classes.length?b.push(n):(b.push(z),b.push(g))}e[A].anchors.push({out:r.element,"in":p.element})}else r=r?r.animationID:p.animationID,p=r.toString(),d[p]||(d[p]=!0,b.push(a[r]))});return b}function O(a,b){a=a.split(" ");b=b.split(" ");
for(var c=[],d=0;d<a.length;d++){var e=a[d];if("ng-"!==e.substring(0,3))for(var r=0;r<b.length;r++)if(e===b[r]){c.push(e);break}}return c.join(" ")}function x(a){for(var c=b.length-1;0<=c;c--){var d=e.get(b[c])(a);if(d)return d}}function r(a,b){function c(a){(a=a.data("$$animationRunner"))&&a.setHost(b)}a.from&&a.to?(c(a.from.element),c(a.to.element)):c(a.element)}function p(){var a=n.data("$$animationRunner");!a||"leave"===Q&&t.$$domOperationFired||a.end()}function K(b){n.off("$destroy",p);n.removeData("$$animationRunner");
C(n,t);ha(n,t);t.domOperation();L&&a.removeClass(n,L);n.removeClass("ng-animate");k.complete(!b)}t=oa(t);var ka=0<=["enter","move","leave"].indexOf(Q),k=new l({end:function(){K()},cancel:function(){K(!0)}});if(!b.length)return K(),k;n.data("$$animationRunner",k);var M=Ea(n.attr("class"),Ea(t.addClass,t.removeClass)),L=t.tempClasses;L&&(M+=" "+L,t.tempClasses=null);var z;ka&&(z="ng-"+Q+"-prepare",a.addClass(n,z));u.push({element:n,classes:M,event:Q,structural:ka,options:t,beforeStart:function(){n.addClass("ng-animate");
L&&a.addClass(n,L);z&&(a.removeClass(n,z),z=null)},close:K});n.on("$destroy",p);if(1<u.length)return k;d.$$postDigest(function(){var a=[];s(u,function(b){b.element.data("$$animationRunner")?a.push(b):b.close()});u.length=0;var b=T(a),c=[];s(b,function(a){c.push({domNode:y(a.from?a.from.element:a.element),fn:function(){a.beforeStart();var b,c=a.close;if((a.anchors?a.from.element||a.to.element:a.element).data("$$animationRunner")){var d=x(a);d&&(b=d.start)}b?(b=b(),b.done(function(a){c(!a)}),r(a,b)):
c()}})});I(g(c))});return k}}]}]).provider("$animateCss",["$animateProvider",function(a){var b=Ja(),c=Ja();this.$get=["$window","$$jqLite","$$AnimateRunner","$timeout","$$forceReflow","$sniffer","$$rAFScheduler","$$animateQueue",function(a,e,l,n,I,g,u,C){function B(a,b){var c=a.parentNode;return(c.$$ngAnimateParentKey||(c.$$ngAnimateParentKey=++O))+"-"+a.getAttribute("class")+"-"+b}function Q(r,p,g,n){var k;0<b.count(g)&&(k=c.get(g),k||(p=Z(p,"-stagger"),e.addClass(r,p),k=Ha(a,r,n),k.animationDuration=
Math.max(k.animationDuration,0),k.transitionDuration=Math.max(k.transitionDuration,0),e.removeClass(r,p),c.put(g,k)));return k||{}}function t(a){x.push(a);u.waitUntilQuiet(function(){b.flush();c.flush();for(var a=I(),d=0;d<x.length;d++)x[d](a);x.length=0})}function H(c,e,g){e=b.get(g);e||(e=Ha(a,c,Ua),"infinite"===e.animationIterationCount&&(e.animationIterationCount=1));b.put(g,e);c=e;g=c.animationDelay;e=c.transitionDelay;c.maxDelay=g&&e?Math.max(g,e):g||e;c.maxDuration=Math.max(c.animationDuration*
c.animationIterationCount,c.transitionDuration);return c}var T=V(e),O=0,x=[];return function(a,c){function d(){k()}function u(){k(!0)}function k(b){if(!(w||F&&O)){w=!0;O=!1;f.$$skipPreparationClasses||e.removeClass(a,ga);e.removeClass(a,ea);va(h,!1);pa(h,!1);s(x,function(a){h.style[a[0]]=""});T(a,f);ha(a,f);Object.keys(A).length&&s(A,function(a,b){a?h.style.setProperty(b,a):h.style.removeProperty(b)});if(f.onDone)f.onDone();fa&&fa.length&&a.off(fa.join(" "),z);var c=a.data("$$animateCss");c&&(n.cancel(c[0].timer),
a.removeData("$$animateCss"));G&&G.complete(!b)}}function M(a){q.blockTransition&&pa(h,a);q.blockKeyframeAnimation&&va(h,!!a)}function L(){G=new l({end:d,cancel:u});t(P);k();return{$$willAnimate:!1,start:function(){return G},end:d}}function z(a){a.stopPropagation();var b=a.originalEvent||a;a=b.$manualTimeStamp||Date.now();b=parseFloat(b.elapsedTime.toFixed(3));Math.max(a-W,0)>=R&&b>=m&&(F=!0,k())}function N(){function b(){if(!w){M(!1);s(x,function(a){h.style[a[0]]=a[1]});T(a,f);e.addClass(a,ea);if(q.recalculateTimingStyles){na=
h.className+" "+ga;ia=B(h,na);D=H(h,na,ia);ca=D.maxDelay;J=Math.max(ca,0);m=D.maxDuration;if(0===m){k();return}q.hasTransitions=0<D.transitionDuration;q.hasAnimations=0<D.animationDuration}q.applyAnimationDelay&&(ca="boolean"!==typeof f.delay&&wa(f.delay)?parseFloat(f.delay):ca,J=Math.max(ca,0),D.animationDelay=ca,da=[qa,ca+"s"],x.push(da),h.style[da[0]]=da[1]);R=1E3*J;V=1E3*m;if(f.easing){var d,g=f.easing;q.hasTransitions&&(d=S+"TimingFunction",x.push([d,g]),h.style[d]=g);q.hasAnimations&&(d=aa+
"TimingFunction",x.push([d,g]),h.style[d]=g)}D.transitionDuration&&fa.push(ya);D.animationDuration&&fa.push(za);W=Date.now();var p=R+1.5*V;d=W+p;var g=a.data("$$animateCss")||[],N=!0;if(g.length){var l=g[0];(N=d>l.expectedEndTime)?n.cancel(l.timer):g.push(k)}N&&(p=n(c,p,!1),g[0]={timer:p,expectedEndTime:d},g.push(k),a.data("$$animateCss",g));if(fa.length)a.on(fa.join(" "),z);f.to&&(f.cleanupStyles&&Ka(A,h,Object.keys(f.to)),Ga(a,f))}}function c(){var b=a.data("$$animateCss");if(b){for(var d=1;d<b.length;d++)b[d]();
a.removeData("$$animateCss")}}if(!w)if(h.parentNode){var d=function(a){if(F)O&&a&&(O=!1,k());else if(O=!a,D.animationDuration)if(a=va(h,O),O)x.push(a);else{var b=x,c=b.indexOf(a);0<=a&&b.splice(c,1)}},g=0<ba&&(D.transitionDuration&&0===X.transitionDuration||D.animationDuration&&0===X.animationDuration)&&Math.max(X.animationDelay,X.transitionDelay);g?n(b,Math.floor(g*ba*1E3),!1):b();v.resume=function(){d(!0)};v.pause=function(){d(!1)}}else k()}var f=c||{};f.$$prepared||(f=oa(Ba(f)));var A={},h=y(a);
if(!h||!h.parentNode||!C.enabled())return L();var x=[],I=a.attr("class"),E=Na(f),w,O,F,G,v,J,R,m,V,W,fa=[];if(0===f.duration||!g.animations&&!g.transitions)return L();var ja=f.event&&Y(f.event)?f.event.join(" "):f.event,$="",U="";ja&&f.structural?$=Z(ja,"ng-",!0):ja&&($=ja);f.addClass&&(U+=Z(f.addClass,"-add"));f.removeClass&&(U.length&&(U+=" "),U+=Z(f.removeClass,"-remove"));f.applyClassesEarly&&U.length&&T(a,f);var ga=[$,U].join(" ").trim(),na=I+" "+ga,ea=Z(ga,"-active"),I=E.to&&0<Object.keys(E.to).length;
if(!(0<(f.keyframeStyle||"").length||I||ga))return L();var ia,X;0<f.stagger?(E=parseFloat(f.stagger),X={transitionDelay:E,animationDelay:E,transitionDuration:0,animationDuration:0}):(ia=B(h,na),X=Q(h,ga,ia,Va));f.$$skipPreparationClasses||e.addClass(a,ga);f.transitionStyle&&(E=[S,f.transitionStyle],la(h,E),x.push(E));0<=f.duration&&(E=0<h.style[S].length,E=Ia(f.duration,E),la(h,E),x.push(E));f.keyframeStyle&&(E=[aa,f.keyframeStyle],la(h,E),x.push(E));var ba=X?0<=f.staggerIndex?f.staggerIndex:b.count(ia):
0;(ja=0===ba)&&!f.skipBlocking&&pa(h,9999);var D=H(h,na,ia),ca=D.maxDelay;J=Math.max(ca,0);m=D.maxDuration;var q={};q.hasTransitions=0<D.transitionDuration;q.hasAnimations=0<D.animationDuration;q.hasTransitionAll=q.hasTransitions&&"all"==D.transitionProperty;q.applyTransitionDuration=I&&(q.hasTransitions&&!q.hasTransitionAll||q.hasAnimations&&!q.hasTransitions);q.applyAnimationDuration=f.duration&&q.hasAnimations;q.applyTransitionDelay=wa(f.delay)&&(q.applyTransitionDuration||q.hasTransitions);q.applyAnimationDelay=
wa(f.delay)&&q.hasAnimations;q.recalculateTimingStyles=0<U.length;if(q.applyTransitionDuration||q.applyAnimationDuration)m=f.duration?parseFloat(f.duration):m,q.applyTransitionDuration&&(q.hasTransitions=!0,D.transitionDuration=m,E=0<h.style[S+"Property"].length,x.push(Ia(m,E))),q.applyAnimationDuration&&(q.hasAnimations=!0,D.animationDuration=m,x.push([Aa,m+"s"]));if(0===m&&!q.recalculateTimingStyles)return L();if(null!=f.delay){var da;"boolean"!==typeof f.delay&&(da=parseFloat(f.delay),J=Math.max(da,
0));q.applyTransitionDelay&&x.push([ma,da+"s"]);q.applyAnimationDelay&&x.push([qa,da+"s"])}null==f.duration&&0<D.transitionDuration&&(q.recalculateTimingStyles=q.recalculateTimingStyles||ja);R=1E3*J;V=1E3*m;f.skipBlocking||(q.blockTransition=0<D.transitionDuration,q.blockKeyframeAnimation=0<D.animationDuration&&0<X.animationDelay&&0===X.animationDuration);f.from&&(f.cleanupStyles&&Ka(A,h,Object.keys(f.from)),Fa(a,f));q.blockTransition||q.blockKeyframeAnimation?M(m):f.skipBlocking||pa(h,!1);return{$$willAnimate:!0,
end:d,start:function(){if(!w)return v={end:d,cancel:u,resume:null,pause:null},G=new l(v),t(N),G}}}}]}]).provider("$$animateCssDriver",["$$animationProvider",function(a){a.drivers.push("$$animateCssDriver");this.$get=["$animateCss","$rootScope","$$AnimateRunner","$rootElement","$sniffer","$$jqLite","$document",function(a,c,d,e,l,n,I){function g(a){return a.replace(/\bng-\S+\b/g,"")}function u(a,b){G(a)&&(a=a.split(" "));G(b)&&(b=b.split(" "));return a.filter(function(a){return-1===b.indexOf(a)}).join(" ")}
function C(c,e,n){function l(a){var b={},c=y(a).getBoundingClientRect();s(["width","height","top","left"],function(a){var d=c[a];switch(a){case "top":d+=t.scrollTop;break;case "left":d+=t.scrollLeft}b[a]=Math.floor(d)+"px"});return b}function p(){var c=g(n.attr("class")||""),d=u(c,k),c=u(k,c),d=a(C,{to:l(n),addClass:"ng-anchor-in "+d,removeClass:"ng-anchor-out "+c,delay:!0});return d.$$willAnimate?d:null}function I(){C.remove();e.removeClass("ng-animate-shim");n.removeClass("ng-animate-shim")}var C=
F(y(e).cloneNode(!0)),k=g(C.attr("class")||"");e.addClass("ng-animate-shim");n.addClass("ng-animate-shim");C.addClass("ng-anchor");H.append(C);var M;c=function(){var c=a(C,{addClass:"ng-anchor-out",delay:!0,from:l(e)});return c.$$willAnimate?c:null}();if(!c&&(M=p(),!M))return I();var L=c||M;return{start:function(){function a(){c&&c.end()}var b,c=L.start();c.done(function(){c=null;if(!M&&(M=p()))return c=M.start(),c.done(function(){c=null;I();b.complete()}),c;I();b.complete()});return b=new d({end:a,
cancel:a})}}}function B(a,b,c,e){var g=Q(a,P),n=Q(b,P),l=[];s(e,function(a){(a=C(c,a.out,a["in"]))&&l.push(a)});if(g||n||0!==l.length)return{start:function(){function a(){s(b,function(a){a.end()})}var b=[];g&&b.push(g.start());n&&b.push(n.start());s(l,function(a){b.push(a.start())});var c=new d({end:a,cancel:a});d.all(b,function(a){c.complete(a)});return c}}}function Q(c){var d=c.element,e=c.options||{};c.structural&&(e.event=c.event,e.structural=!0,e.applyClassesEarly=!0,"leave"===c.event&&(e.onDone=
e.domOperation));e.preparationClasses&&(e.event=$(e.event,e.preparationClasses));c=a(d,e);return c.$$willAnimate?c:null}if(!l.animations&&!l.transitions)return P;var t=I[0].body;c=y(e);var H=F(c.parentNode&&11===c.parentNode.nodeType||t.contains(c)?c:t);V(n);return function(a){return a.from&&a.to?B(a.from,a.to,a.classes,a.anchors):Q(a)}}]}]).provider("$$animateJs",["$animateProvider",function(a){this.$get=["$injector","$$AnimateRunner","$$jqLite",function(b,c,d){function e(c){c=Y(c)?c:c.split(" ");
for(var d=[],e={},l=0;l<c.length;l++){var s=c[l],B=a.$$registeredAnimations[s];B&&!e[s]&&(d.push(b.get(B)),e[s]=!0)}return d}var l=V(d);return function(a,b,d,u){function C(){u.domOperation();l(a,u)}function B(a,b,d,e,f){switch(d){case "animate":b=[b,e.from,e.to,f];break;case "setClass":b=[b,F,G,f];break;case "addClass":b=[b,F,f];break;case "removeClass":b=[b,G,f];break;default:b=[b,f]}b.push(e);if(a=a.apply(a,b))if(Ca(a.start)&&(a=a.start()),a instanceof c)a.done(f);else if(Ca(a))return a;return P}
function y(a,b,d,e,f){var g=[];s(e,function(e){var k=e[f];k&&g.push(function(){var e,f,g=!1,h=function(a){g||(g=!0,(f||P)(a),e.complete(!a))};e=new c({end:function(){h()},cancel:function(){h(!0)}});f=B(k,a,b,d,function(a){h(!1===a)});return e})});return g}function t(a,b,d,e,f){var g=y(a,b,d,e,f);if(0===g.length){var h,k;"beforeSetClass"===f?(h=y(a,"removeClass",d,e,"beforeRemoveClass"),k=y(a,"addClass",d,e,"beforeAddClass")):"setClass"===f&&(h=y(a,"removeClass",d,e,"removeClass"),k=y(a,"addClass",
d,e,"addClass"));h&&(g=g.concat(h));k&&(g=g.concat(k))}if(0!==g.length)return function(a){var b=[];g.length&&s(g,function(a){b.push(a())});b.length?c.all(b,a):a();return function(a){s(b,function(b){a?b.cancel():b.end()})}}}var H=!1;3===arguments.length&&ba(d)&&(u=d,d=null);u=oa(u);d||(d=a.attr("class")||"",u.addClass&&(d+=" "+u.addClass),u.removeClass&&(d+=" "+u.removeClass));var F=u.addClass,G=u.removeClass,x=e(d),r,p;if(x.length){var K,J;"leave"==b?(J="leave",K="afterLeave"):(J="before"+b.charAt(0).toUpperCase()+
b.substr(1),K=b);"enter"!==b&&"move"!==b&&(r=t(a,b,u,x,J));p=t(a,b,u,x,K)}if(r||p){var k;return{$$willAnimate:!0,end:function(){k?k.end():(H=!0,C(),ha(a,u),k=new c,k.complete(!0));return k},start:function(){function b(c){H=!0;C();ha(a,u);k.complete(c)}if(k)return k;k=new c;var d,e=[];r&&e.push(function(a){d=r(a)});e.length?e.push(function(a){C();a(!0)}):C();p&&e.push(function(a){d=p(a)});k.setHost({end:function(){H||((d||P)(void 0),b(void 0))},cancel:function(){H||((d||P)(!0),b(!0))}});c.chain(e,
b);return k}}}}}]}]).provider("$$animateJsDriver",["$$animationProvider",function(a){a.drivers.push("$$animateJsDriver");this.$get=["$$animateJs","$$AnimateRunner",function(a,c){function d(c){return a(c.element,c.event,c.classes,c.options)}return function(a){if(a.from&&a.to){var b=d(a.from),n=d(a.to);if(b||n)return{start:function(){function a(){return function(){s(d,function(a){a.end()})}}var d=[];b&&d.push(b.start());n&&d.push(n.start());c.all(d,function(a){e.complete(a)});var e=new c({end:a(),cancel:a()});
return e}}}else return d(a)}}]}])})(window,window.angular);
//# sourceMappingURL=angular-animate.min.js.map

/*
 AngularJS v1.5.8
 (c) 2010-2016 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(t,p){'use strict';var b="BUTTON A INPUT TEXTAREA SELECT DETAILS SUMMARY".split(" "),l=function(a,c){if(-1!==c.indexOf(a[0].nodeName))return!0};p.module("ngAria",["ng"]).provider("$aria",function(){function a(a,b,m,h){return function(d,f,e){var q=e.$normalize(b);!c[q]||l(f,m)||e[q]||d.$watch(e[a],function(a){a=h?!a:!!a;f.attr(b,a)})}}var c={ariaHidden:!0,ariaChecked:!0,ariaReadonly:!0,ariaDisabled:!0,ariaRequired:!0,ariaInvalid:!0,ariaValue:!0,tabindex:!0,bindKeypress:!0,bindRoleForClick:!0};
this.config=function(a){c=p.extend(c,a)};this.$get=function(){return{config:function(a){return c[a]},$$watchExpr:a}}}).directive("ngShow",["$aria",function(a){return a.$$watchExpr("ngShow","aria-hidden",[],!0)}]).directive("ngHide",["$aria",function(a){return a.$$watchExpr("ngHide","aria-hidden",[],!1)}]).directive("ngValue",["$aria",function(a){return a.$$watchExpr("ngValue","aria-checked",b,!1)}]).directive("ngChecked",["$aria",function(a){return a.$$watchExpr("ngChecked","aria-checked",b,!1)}]).directive("ngReadonly",
["$aria",function(a){return a.$$watchExpr("ngReadonly","aria-readonly",b,!1)}]).directive("ngRequired",["$aria",function(a){return a.$$watchExpr("ngRequired","aria-required",b,!1)}]).directive("ngModel",["$aria",function(a){function c(c,h,d,f){return a.config(h)&&!d.attr(c)&&(f||!l(d,b))}function g(a,c){return!c.attr("role")&&c.attr("type")===a&&"INPUT"!==c[0].nodeName}function k(a,c){var d=a.type,f=a.role;return"checkbox"===(d||f)||"menuitemcheckbox"===f?"checkbox":"radio"===(d||f)||"menuitemradio"===
f?"radio":"range"===d||"progressbar"===f||"slider"===f?"range":""}return{restrict:"A",require:"ngModel",priority:200,compile:function(b,h){var d=k(h,b);return{pre:function(a,e,c,b){"checkbox"===d&&(b.$isEmpty=function(a){return!1===a})},post:function(f,e,b,n){function h(){return n.$modelValue}function k(a){e.attr("aria-checked",b.value==n.$viewValue)}function l(){e.attr("aria-checked",!n.$isEmpty(n.$viewValue))}var m=c("tabindex","tabindex",e,!1);switch(d){case "radio":case "checkbox":g(d,e)&&e.attr("role",
d);c("aria-checked","ariaChecked",e,!1)&&f.$watch(h,"radio"===d?k:l);m&&e.attr("tabindex",0);break;case "range":g(d,e)&&e.attr("role","slider");if(a.config("ariaValue")){var p=!e.attr("aria-valuemin")&&(b.hasOwnProperty("min")||b.hasOwnProperty("ngMin")),r=!e.attr("aria-valuemax")&&(b.hasOwnProperty("max")||b.hasOwnProperty("ngMax")),s=!e.attr("aria-valuenow");p&&b.$observe("min",function(a){e.attr("aria-valuemin",a)});r&&b.$observe("max",function(a){e.attr("aria-valuemax",a)});s&&f.$watch(h,function(a){e.attr("aria-valuenow",
a)})}m&&e.attr("tabindex",0)}!b.hasOwnProperty("ngRequired")&&n.$validators.required&&c("aria-required","ariaRequired",e,!1)&&b.$observe("required",function(){e.attr("aria-required",!!b.required)});c("aria-invalid","ariaInvalid",e,!0)&&f.$watch(function(){return n.$invalid},function(a){e.attr("aria-invalid",!!a)})}}}}}]).directive("ngDisabled",["$aria",function(a){return a.$$watchExpr("ngDisabled","aria-disabled",b,!1)}]).directive("ngMessages",function(){return{restrict:"A",require:"?ngMessages",
link:function(a,b,g,k){b.attr("aria-live")||b.attr("aria-live","assertive")}}}).directive("ngClick",["$aria","$parse",function(a,c){return{restrict:"A",compile:function(g,k){var m=c(k.ngClick,null,!0);return function(c,d,f){if(!l(d,b)&&(a.config("bindRoleForClick")&&!d.attr("role")&&d.attr("role","button"),a.config("tabindex")&&!d.attr("tabindex")&&d.attr("tabindex",0),a.config("bindKeypress")&&!f.ngKeypress))d.on("keypress",function(a){function b(){m(c,{$event:a})}var d=a.which||a.keyCode;32!==d&&
13!==d||c.$apply(b)})}}}}]).directive("ngDblclick",["$aria",function(a){return function(c,g,k){!a.config("tabindex")||g.attr("tabindex")||l(g,b)||g.attr("tabindex",0)}}])})(window,window.angular);
//# sourceMappingURL=angular-aria.min.js.map

/*
 AngularJS v1.5.8
 (c) 2010-2016 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(y,l){'use strict';function w(){return["$animate",function(t){return{restrict:"AE",transclude:"element",priority:1,terminal:!0,require:"^^ngMessages",link:function(u,n,a,c,f){var e=n[0],d,r=a.ngMessage||a.when;a=a.ngMessageExp||a.whenExp;var k=function(a){d=a?p(a)?a:a.split(/[\s,]+/):null;c.reRender()};a?(k(u.$eval(a)),u.$watchCollection(a,k)):k(r);var g,s;c.register(e,s={test:function(a){var m=d;a=m?p(m)?0<=m.indexOf(a):m.hasOwnProperty(a):void 0;return a},attach:function(){g||f(function(a,
m){t.enter(a,null,n);g=a;var d=g.$$attachId=c.getAttachId();g.on("$destroy",function(){g&&g.$$attachId===d&&(c.deregister(e),s.detach());m.$destroy()})})},detach:function(){if(g){var a=g;g=null;t.leave(a)}}})}}}]}var v,p,q,x;l.module("ngMessages",[],function(){v=l.forEach;p=l.isArray;q=l.isString;x=l.element}).directive("ngMessages",["$animate",function(t){function u(a,c){return q(c)&&0===c.length||n(a.$eval(c))}function n(a){return q(a)?a.length:!!a}return{require:"ngMessages",restrict:"AE",controller:["$element",
"$scope","$attrs",function(a,c,f){function e(a,c){for(var b=c,d=[];b&&b!==a;){var h=b.$$ngMessageNode;if(h&&h.length)return g[h];b.childNodes.length&&-1===d.indexOf(b)?(d.push(b),b=b.childNodes[b.childNodes.length-1]):b.previousSibling?b=b.previousSibling:(b=b.parentNode,d.push(b))}}var d=this,r=0,k=0;this.getAttachId=function(){return k++};var g=this.messages={},s,l;this.render=function(m){m=m||{};s=!1;l=m;for(var g=u(c,f.ngMessagesMultiple)||u(c,f.multiple),b=[],e={},h=d.head,r=!1,k=0;null!=h;){k++;
var q=h.message,p=!1;r||v(m,function(a,b){!p&&n(a)&&q.test(b)&&!e[b]&&(p=e[b]=!0,q.attach())});p?r=!g:b.push(q);h=h.next}v(b,function(a){a.detach()});b.length!==k?t.setClass(a,"ng-active","ng-inactive"):t.setClass(a,"ng-inactive","ng-active")};c.$watchCollection(f.ngMessages||f["for"],d.render);a.on("$destroy",function(){v(g,function(a){a.message.detach()})});this.reRender=function(){s||(s=!0,c.$evalAsync(function(){s&&l&&d.render(l)}))};this.register=function(c,f){var b=r.toString();g[b]={message:f};
var k=a[0],h=g[b];d.head?(k=e(k,c))?(h.next=k.next,k.next=h):(h.next=d.head,d.head=h):d.head=h;c.$$ngMessageNode=b;r++;d.reRender()};this.deregister=function(c){var f=c.$$ngMessageNode;delete c.$$ngMessageNode;var b=g[f];(c=e(a[0],c))?c.next=b.next:d.head=b.next;delete g[f];d.reRender()}}]}}]).directive("ngMessagesInclude",["$templateRequest","$document","$compile",function(l,p,n){function a(a,f){var e=n.$$createComment?n.$$createComment("ngMessagesInclude",f):p[0].createComment(" ngMessagesInclude: "+
f+" "),e=x(e);a.after(e);a.remove()}return{restrict:"AE",require:"^^ngMessages",link:function(c,f,e){var d=e.ngMessagesInclude||e.src;l(d).then(function(e){c.$$destroyed||(q(e)&&!e.trim()?a(f,d):n(e)(c,function(c){f.after(c);a(f,d)}))})}}}]).directive("ngMessage",w()).directive("ngMessageExp",w())})(window,window.angular);
//# sourceMappingURL=angular-messages.min.js.map

/*
 AngularJS v1.5.8
 (c) 2010-2016 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(x,n){'use strict';function s(f,k){var e=!1,a=!1;this.ngClickOverrideEnabled=function(b){return n.isDefined(b)?(b&&!a&&(a=!0,t.$$moduleName="ngTouch",k.directive("ngClick",t),f.decorator("ngClickDirective",["$delegate",function(a){if(e)a.shift();else for(var b=a.length-1;0<=b;){if("ngTouch"===a[b].$$moduleName){a.splice(b,1);break}b--}return a}])),e=b,this):e};this.$get=function(){return{ngClickOverrideEnabled:function(){return e}}}}function v(f,k,e){p.directive(f,["$parse","$swipe",function(a,
b){return function(l,u,g){function h(c){if(!d)return!1;var a=Math.abs(c.y-d.y);c=(c.x-d.x)*k;return r&&75>a&&0<c&&30<c&&.3>a/c}var m=a(g[f]),d,r,c=["touch"];n.isDefined(g.ngSwipeDisableMouse)||c.push("mouse");b.bind(u,{start:function(c,a){d=c;r=!0},cancel:function(c){r=!1},end:function(c,d){h(c)&&l.$apply(function(){u.triggerHandler(e);m(l,{$event:d})})}},c)}}])}var p=n.module("ngTouch",[]);p.provider("$touch",s);s.$inject=["$provide","$compileProvider"];p.factory("$swipe",[function(){function f(a){a=
a.originalEvent||a;var b=a.touches&&a.touches.length?a.touches:[a];a=a.changedTouches&&a.changedTouches[0]||b[0];return{x:a.clientX,y:a.clientY}}function k(a,b){var l=[];n.forEach(a,function(a){(a=e[a][b])&&l.push(a)});return l.join(" ")}var e={mouse:{start:"mousedown",move:"mousemove",end:"mouseup"},touch:{start:"touchstart",move:"touchmove",end:"touchend",cancel:"touchcancel"},pointer:{start:"pointerdown",move:"pointermove",end:"pointerup",cancel:"pointercancel"}};return{bind:function(a,b,l){var e,
g,h,m,d=!1;l=l||["mouse","touch","pointer"];a.on(k(l,"start"),function(c){h=f(c);d=!0;g=e=0;m=h;b.start&&b.start(h,c)});var r=k(l,"cancel");if(r)a.on(r,function(c){d=!1;b.cancel&&b.cancel(c)});a.on(k(l,"move"),function(c){if(d&&h){var a=f(c);e+=Math.abs(a.x-m.x);g+=Math.abs(a.y-m.y);m=a;10>e&&10>g||(g>e?(d=!1,b.cancel&&b.cancel(c)):(c.preventDefault(),b.move&&b.move(a,c)))}});a.on(k(l,"end"),function(c){d&&(d=!1,b.end&&b.end(f(c),c))})}}}]);var t=["$parse","$timeout","$rootElement",function(f,k,e){function a(a,
d,b){for(var c=0;c<a.length;c+=2){var g=a[c+1],e=b;if(25>Math.abs(a[c]-d)&&25>Math.abs(g-e))return a.splice(c,c+2),!0}return!1}function b(b){if(!(2500<Date.now()-u)){var d=b.touches&&b.touches.length?b.touches:[b],e=d[0].clientX,d=d[0].clientY;if(!(1>e&&1>d||h&&h[0]===e&&h[1]===d)){h&&(h=null);var c=b.target;"label"===n.lowercase(c.nodeName||c[0]&&c[0].nodeName)&&(h=[e,d]);a(g,e,d)||(b.stopPropagation(),b.preventDefault(),b.target&&b.target.blur&&b.target.blur())}}}function l(a){a=a.touches&&a.touches.length?
a.touches:[a];var b=a[0].clientX,e=a[0].clientY;g.push(b,e);k(function(){for(var a=0;a<g.length;a+=2)if(g[a]==b&&g[a+1]==e){g.splice(a,a+2);break}},2500,!1)}var u,g,h;return function(h,d,k){var c=f(k.ngClick),w=!1,q,p,s,t;d.on("touchstart",function(a){w=!0;q=a.target?a.target:a.srcElement;3==q.nodeType&&(q=q.parentNode);d.addClass("ng-click-active");p=Date.now();a=a.originalEvent||a;a=(a.touches&&a.touches.length?a.touches:[a])[0];s=a.clientX;t=a.clientY});d.on("touchcancel",function(a){w=!1;d.removeClass("ng-click-active")});
d.on("touchend",function(c){var h=Date.now()-p,f=c.originalEvent||c,m=(f.changedTouches&&f.changedTouches.length?f.changedTouches:f.touches&&f.touches.length?f.touches:[f])[0],f=m.clientX,m=m.clientY,v=Math.sqrt(Math.pow(f-s,2)+Math.pow(m-t,2));w&&750>h&&12>v&&(g||(e[0].addEventListener("click",b,!0),e[0].addEventListener("touchstart",l,!0),g=[]),u=Date.now(),a(g,f,m),q&&q.blur(),n.isDefined(k.disabled)&&!1!==k.disabled||d.triggerHandler("click",[c]));w=!1;d.removeClass("ng-click-active")});d.onclick=
function(a){};d.on("click",function(a,b){h.$apply(function(){c(h,{$event:b||a})})});d.on("mousedown",function(a){d.addClass("ng-click-active")});d.on("mousemove mouseup",function(a){d.removeClass("ng-click-active")})}}];v("ngSwipeLeft",-1,"swipeleft");v("ngSwipeRight",1,"swiperight")})(window,window.angular);
//# sourceMappingURL=angular-touch.min.js.map

/*
 * angular-ui-bootstrap
 * http://angular-ui.github.io/bootstrap/

 * Version: 2.1.3 - 2016-08-25
 * License: MIT
 */angular.module("ui.bootstrap",["ui.bootstrap.tpls","ui.bootstrap.collapse","ui.bootstrap.tabindex","ui.bootstrap.accordion","ui.bootstrap.alert","ui.bootstrap.buttons","ui.bootstrap.carousel","ui.bootstrap.dateparser","ui.bootstrap.isClass","ui.bootstrap.datepicker","ui.bootstrap.position","ui.bootstrap.datepickerPopup","ui.bootstrap.debounce","ui.bootstrap.dropdown","ui.bootstrap.stackedMap","ui.bootstrap.modal","ui.bootstrap.paging","ui.bootstrap.pager","ui.bootstrap.pagination","ui.bootstrap.tooltip","ui.bootstrap.popover","ui.bootstrap.progressbar","ui.bootstrap.rating","ui.bootstrap.tabs","ui.bootstrap.timepicker","ui.bootstrap.typeahead"]),angular.module("ui.bootstrap.tpls",["uib/template/accordion/accordion-group.html","uib/template/accordion/accordion.html","uib/template/alert/alert.html","uib/template/carousel/carousel.html","uib/template/carousel/slide.html","uib/template/datepicker/datepicker.html","uib/template/datepicker/day.html","uib/template/datepicker/month.html","uib/template/datepicker/year.html","uib/template/datepickerPopup/popup.html","uib/template/modal/window.html","uib/template/pager/pager.html","uib/template/pagination/pagination.html","uib/template/tooltip/tooltip-html-popup.html","uib/template/tooltip/tooltip-popup.html","uib/template/tooltip/tooltip-template-popup.html","uib/template/popover/popover-html.html","uib/template/popover/popover-template.html","uib/template/popover/popover.html","uib/template/progressbar/bar.html","uib/template/progressbar/progress.html","uib/template/progressbar/progressbar.html","uib/template/rating/rating.html","uib/template/tabs/tab.html","uib/template/tabs/tabset.html","uib/template/timepicker/timepicker.html","uib/template/typeahead/typeahead-match.html","uib/template/typeahead/typeahead-popup.html"]),angular.module("ui.bootstrap.collapse",[]).directive("uibCollapse",["$animate","$q","$parse","$injector",function(a,b,c,d){var e=d.has("$animateCss")?d.get("$animateCss"):null;return{link:function(d,f,g){function h(){r=!!("horizontal"in g),r?(s={width:""},t={width:"0"}):(s={height:""},t={height:"0"}),d.$eval(g.uibCollapse)||f.addClass("in").addClass("collapse").attr("aria-expanded",!0).attr("aria-hidden",!1).css(s)}function i(a){return r?{width:a.scrollWidth+"px"}:{height:a.scrollHeight+"px"}}function j(){f.hasClass("collapse")&&f.hasClass("in")||b.resolve(n(d)).then(function(){f.removeClass("collapse").addClass("collapsing").attr("aria-expanded",!0).attr("aria-hidden",!1),e?e(f,{addClass:"in",easing:"ease",css:{overflow:"hidden"},to:i(f[0])}).start()["finally"](k):a.addClass(f,"in",{css:{overflow:"hidden"},to:i(f[0])}).then(k)})}function k(){f.removeClass("collapsing").addClass("collapse").css(s),o(d)}function l(){return f.hasClass("collapse")||f.hasClass("in")?void b.resolve(p(d)).then(function(){f.css(i(f[0])).removeClass("collapse").addClass("collapsing").attr("aria-expanded",!1).attr("aria-hidden",!0),e?e(f,{removeClass:"in",to:t}).start()["finally"](m):a.removeClass(f,"in",{to:t}).then(m)}):m()}function m(){f.css(t),f.removeClass("collapsing").addClass("collapse"),q(d)}var n=c(g.expanding),o=c(g.expanded),p=c(g.collapsing),q=c(g.collapsed),r=!1,s={},t={};h(),d.$watch(g.uibCollapse,function(a){a?l():j()})}}}]),angular.module("ui.bootstrap.tabindex",[]).directive("uibTabindexToggle",function(){return{restrict:"A",link:function(a,b,c){c.$observe("disabled",function(a){c.$set("tabindex",a?-1:null)})}}}),angular.module("ui.bootstrap.accordion",["ui.bootstrap.collapse","ui.bootstrap.tabindex"]).constant("uibAccordionConfig",{closeOthers:!0}).controller("UibAccordionController",["$scope","$attrs","uibAccordionConfig",function(a,b,c){this.groups=[],this.closeOthers=function(d){var e=angular.isDefined(b.closeOthers)?a.$eval(b.closeOthers):c.closeOthers;e&&angular.forEach(this.groups,function(a){a!==d&&(a.isOpen=!1)})},this.addGroup=function(a){var b=this;this.groups.push(a),a.$on("$destroy",function(c){b.removeGroup(a)})},this.removeGroup=function(a){var b=this.groups.indexOf(a);-1!==b&&this.groups.splice(b,1)}}]).directive("uibAccordion",function(){return{controller:"UibAccordionController",controllerAs:"accordion",transclude:!0,templateUrl:function(a,b){return b.templateUrl||"uib/template/accordion/accordion.html"}}}).directive("uibAccordionGroup",function(){return{require:"^uibAccordion",transclude:!0,restrict:"A",templateUrl:function(a,b){return b.templateUrl||"uib/template/accordion/accordion-group.html"},scope:{heading:"@",panelClass:"@?",isOpen:"=?",isDisabled:"=?"},controller:function(){this.setHeading=function(a){this.heading=a}},link:function(a,b,c,d){b.addClass("panel"),d.addGroup(a),a.openClass=c.openClass||"panel-open",a.panelClass=c.panelClass||"panel-default",a.$watch("isOpen",function(c){b.toggleClass(a.openClass,!!c),c&&d.closeOthers(a)}),a.toggleOpen=function(b){a.isDisabled||b&&32!==b.which||(a.isOpen=!a.isOpen)};var e="accordiongroup-"+a.$id+"-"+Math.floor(1e4*Math.random());a.headingId=e+"-tab",a.panelId=e+"-panel"}}}).directive("uibAccordionHeading",function(){return{transclude:!0,template:"",replace:!0,require:"^uibAccordionGroup",link:function(a,b,c,d,e){d.setHeading(e(a,angular.noop))}}}).directive("uibAccordionTransclude",function(){function a(){return"uib-accordion-header,data-uib-accordion-header,x-uib-accordion-header,uib\\:accordion-header,[uib-accordion-header],[data-uib-accordion-header],[x-uib-accordion-header]"}return{require:"^uibAccordionGroup",link:function(b,c,d,e){b.$watch(function(){return e[d.uibAccordionTransclude]},function(b){if(b){var d=angular.element(c[0].querySelector(a()));d.html(""),d.append(b)}})}}}),angular.module("ui.bootstrap.alert",[]).controller("UibAlertController",["$scope","$element","$attrs","$interpolate","$timeout",function(a,b,c,d,e){a.closeable=!!c.close,b.addClass("alert"),c.$set("role","alert"),a.closeable&&b.addClass("alert-dismissible");var f=angular.isDefined(c.dismissOnTimeout)?d(c.dismissOnTimeout)(a.$parent):null;f&&e(function(){a.close()},parseInt(f,10))}]).directive("uibAlert",function(){return{controller:"UibAlertController",controllerAs:"alert",restrict:"A",templateUrl:function(a,b){return b.templateUrl||"uib/template/alert/alert.html"},transclude:!0,scope:{close:"&"}}}),angular.module("ui.bootstrap.buttons",[]).constant("uibButtonConfig",{activeClass:"active",toggleEvent:"click"}).controller("UibButtonsController",["uibButtonConfig",function(a){this.activeClass=a.activeClass||"active",this.toggleEvent=a.toggleEvent||"click"}]).directive("uibBtnRadio",["$parse",function(a){return{require:["uibBtnRadio","ngModel"],controller:"UibButtonsController",controllerAs:"buttons",link:function(b,c,d,e){var f=e[0],g=e[1],h=a(d.uibUncheckable);c.find("input").css({display:"none"}),g.$render=function(){c.toggleClass(f.activeClass,angular.equals(g.$modelValue,b.$eval(d.uibBtnRadio)))},c.on(f.toggleEvent,function(){if(!d.disabled){var a=c.hasClass(f.activeClass);a&&!angular.isDefined(d.uncheckable)||b.$apply(function(){g.$setViewValue(a?null:b.$eval(d.uibBtnRadio)),g.$render()})}}),d.uibUncheckable&&b.$watch(h,function(a){d.$set("uncheckable",a?"":void 0)})}}}]).directive("uibBtnCheckbox",function(){return{require:["uibBtnCheckbox","ngModel"],controller:"UibButtonsController",controllerAs:"button",link:function(a,b,c,d){function e(){return g(c.btnCheckboxTrue,!0)}function f(){return g(c.btnCheckboxFalse,!1)}function g(b,c){return angular.isDefined(b)?a.$eval(b):c}var h=d[0],i=d[1];b.find("input").css({display:"none"}),i.$render=function(){b.toggleClass(h.activeClass,angular.equals(i.$modelValue,e()))},b.on(h.toggleEvent,function(){c.disabled||a.$apply(function(){i.$setViewValue(b.hasClass(h.activeClass)?f():e()),i.$render()})})}}}),angular.module("ui.bootstrap.carousel",[]).controller("UibCarouselController",["$scope","$element","$interval","$timeout","$animate",function(a,b,c,d,e){function f(){for(;t.length;)t.shift()}function g(a){for(var b=0;b<q.length;b++)q[b].slide.active=b===a}function h(c,d,i){if(!u){if(angular.extend(c,{direction:i}),angular.extend(q[s].slide||{},{direction:i}),e.enabled(b)&&!a.$currentTransition&&q[d].element&&p.slides.length>1){q[d].element.data(r,c.direction);var j=p.getCurrentIndex();angular.isNumber(j)&&q[j].element&&q[j].element.data(r,c.direction),a.$currentTransition=!0,e.on("addClass",q[d].element,function(b,c){if("close"===c&&(a.$currentTransition=null,e.off("addClass",b),t.length)){var d=t.pop().slide,g=d.index,i=g>p.getCurrentIndex()?"next":"prev";f(),h(d,g,i)}})}a.active=c.index,s=c.index,g(d),l()}}function i(a){for(var b=0;b<q.length;b++)if(q[b].slide===a)return b}function j(){n&&(c.cancel(n),n=null)}function k(b){b.length||(a.$currentTransition=null,f())}function l(){j();var b=+a.interval;!isNaN(b)&&b>0&&(n=c(m,b))}function m(){var b=+a.interval;o&&!isNaN(b)&&b>0&&q.length?a.next():a.pause()}var n,o,p=this,q=p.slides=a.slides=[],r="uib-slideDirection",s=a.active,t=[],u=!1;b.addClass("carousel"),p.addSlide=function(b,c){q.push({slide:b,element:c}),q.sort(function(a,b){return+a.slide.index-+b.slide.index}),(b.index===a.active||1===q.length&&!angular.isNumber(a.active))&&(a.$currentTransition&&(a.$currentTransition=null),s=b.index,a.active=b.index,g(s),p.select(q[i(b)]),1===q.length&&a.play())},p.getCurrentIndex=function(){for(var a=0;a<q.length;a++)if(q[a].slide.index===s)return a},p.next=a.next=function(){var b=(p.getCurrentIndex()+1)%q.length;return 0===b&&a.noWrap()?void a.pause():p.select(q[b],"next")},p.prev=a.prev=function(){var b=p.getCurrentIndex()-1<0?q.length-1:p.getCurrentIndex()-1;return a.noWrap()&&b===q.length-1?void a.pause():p.select(q[b],"prev")},p.removeSlide=function(b){var c=i(b),d=t.indexOf(q[c]);-1!==d&&t.splice(d,1),q.splice(c,1),q.length>0&&s===c?c>=q.length?(s=q.length-1,a.active=s,g(s),p.select(q[q.length-1])):(s=c,a.active=s,g(s),p.select(q[c])):s>c&&(s--,a.active=s),0===q.length&&(s=null,a.active=null,f())},p.select=a.select=function(b,c){var d=i(b.slide);void 0===c&&(c=d>p.getCurrentIndex()?"next":"prev"),b.slide.index===s||a.$currentTransition?b&&b.slide.index!==s&&a.$currentTransition&&t.push(q[d]):h(b.slide,d,c)},a.indexOfSlide=function(a){return+a.slide.index},a.isActive=function(b){return a.active===b.slide.index},a.isPrevDisabled=function(){return 0===a.active&&a.noWrap()},a.isNextDisabled=function(){return a.active===q.length-1&&a.noWrap()},a.pause=function(){a.noPause||(o=!1,j())},a.play=function(){o||(o=!0,l())},b.on("mouseenter",a.pause),b.on("mouseleave",a.play),a.$on("$destroy",function(){u=!0,j()}),a.$watch("noTransition",function(a){e.enabled(b,!a)}),a.$watch("interval",l),a.$watchCollection("slides",k),a.$watch("active",function(a){if(angular.isNumber(a)&&s!==a){for(var b=0;b<q.length;b++)if(q[b].slide.index===a){a=b;break}var c=q[a];c&&(g(a),p.select(q[a]),s=a)}})}]).directive("uibCarousel",function(){return{transclude:!0,controller:"UibCarouselController",controllerAs:"carousel",restrict:"A",templateUrl:function(a,b){return b.templateUrl||"uib/template/carousel/carousel.html"},scope:{active:"=",interval:"=",noTransition:"=",noPause:"=",noWrap:"&"}}}).directive("uibSlide",["$animate",function(a){return{require:"^uibCarousel",restrict:"A",transclude:!0,templateUrl:function(a,b){return b.templateUrl||"uib/template/carousel/slide.html"},scope:{actual:"=?",index:"=?"},link:function(b,c,d,e){c.addClass("item"),e.addSlide(b,c),b.$on("$destroy",function(){e.removeSlide(b)}),b.$watch("active",function(b){a[b?"addClass":"removeClass"](c,"active")})}}}]).animation(".item",["$animateCss",function(a){function b(a,b,c){a.removeClass(b),c&&c()}var c="uib-slideDirection";return{beforeAddClass:function(d,e,f){if("active"===e){var g=!1,h=d.data(c),i="next"===h?"left":"right",j=b.bind(this,d,i+" "+h,f);return d.addClass(h),a(d,{addClass:i}).start().done(j),function(){g=!0}}f()},beforeRemoveClass:function(d,e,f){if("active"===e){var g=!1,h=d.data(c),i="next"===h?"left":"right",j=b.bind(this,d,i,f);return a(d,{addClass:i}).start().done(j),function(){g=!0}}f()}}}]),angular.module("ui.bootstrap.dateparser",[]).service("uibDateParser",["$log","$locale","dateFilter","orderByFilter",function(a,b,c,d){function e(a){var b=[],c=a.split(""),e=a.indexOf("'");if(e>-1){var f=!1;a=a.split("");for(var g=e;g<a.length;g++)f?("'"===a[g]&&(g+1<a.length&&"'"===a[g+1]?(a[g+1]="$",c[g+1]=""):(c[g]="",f=!1)),a[g]="$"):"'"===a[g]&&(a[g]="$",c[g]="",f=!0);a=a.join("")}return angular.forEach(q,function(d){var e=a.indexOf(d.key);if(e>-1){a=a.split(""),c[e]="("+d.regex+")",a[e]="$";for(var f=e+1,g=e+d.key.length;g>f;f++)c[f]="",a[f]="$";a=a.join(""),b.push({index:e,key:d.key,apply:d.apply,matcher:d.regex})}}),{regex:new RegExp("^"+c.join("")+"$"),map:d(b,"index")}}function f(a){for(var b,c,d=[],e=0;e<a.length;)if(angular.isNumber(c)){if("'"===a.charAt(e))(e+1>=a.length||"'"!==a.charAt(e+1))&&(d.push(g(a,c,e)),c=null);else if(e===a.length)for(;c<a.length;)b=h(a,c),d.push(b),c=b.endIdx;e++}else"'"!==a.charAt(e)?(b=h(a,e),d.push(b.parser),e=b.endIdx):(c=e,e++);return d}function g(a,b,c){return function(){return a.substr(b+1,c-b-1)}}function h(a,b){for(var c=a.substr(b),d=0;d<q.length;d++)if(new RegExp("^"+q[d].key).test(c)){var e=q[d];return{endIdx:b+e.key.length,parser:e.formatter}}return{endIdx:b+1,parser:function(){return c.charAt(0)}}}function i(a,b,c){return 1>c?!1:1===b&&c>28?29===c&&(a%4===0&&a%100!==0||a%400===0):3===b||5===b||8===b||10===b?31>c:!0}function j(a){return parseInt(a,10)}function k(a,b){return a&&b?o(a,b):a}function l(a,b){return a&&b?o(a,b,!0):a}function m(a,b){a=a.replace(/:/g,"");var c=Date.parse("Jan 01, 1970 00:00:00 "+a)/6e4;return isNaN(c)?b:c}function n(a,b){return a=new Date(a.getTime()),a.setMinutes(a.getMinutes()+b),a}function o(a,b,c){c=c?-1:1;var d=a.getTimezoneOffset(),e=m(b,d);return n(a,c*(e-d))}var p,q,r=/[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g;this.init=function(){p=b.id,this.parsers={},this.formatters={},q=[{key:"yyyy",regex:"\\d{4}",apply:function(a){this.year=+a},formatter:function(a){var b=new Date;return b.setFullYear(Math.abs(a.getFullYear())),c(b,"yyyy")}},{key:"yy",regex:"\\d{2}",apply:function(a){a=+a,this.year=69>a?a+2e3:a+1900},formatter:function(a){var b=new Date;return b.setFullYear(Math.abs(a.getFullYear())),c(b,"yy")}},{key:"y",regex:"\\d{1,4}",apply:function(a){this.year=+a},formatter:function(a){var b=new Date;return b.setFullYear(Math.abs(a.getFullYear())),c(b,"y")}},{key:"M!",regex:"0?[1-9]|1[0-2]",apply:function(a){this.month=a-1},formatter:function(a){var b=a.getMonth();return/^[0-9]$/.test(b)?c(a,"MM"):c(a,"M")}},{key:"MMMM",regex:b.DATETIME_FORMATS.MONTH.join("|"),apply:function(a){this.month=b.DATETIME_FORMATS.MONTH.indexOf(a)},formatter:function(a){return c(a,"MMMM")}},{key:"MMM",regex:b.DATETIME_FORMATS.SHORTMONTH.join("|"),apply:function(a){this.month=b.DATETIME_FORMATS.SHORTMONTH.indexOf(a)},formatter:function(a){return c(a,"MMM")}},{key:"MM",regex:"0[1-9]|1[0-2]",apply:function(a){this.month=a-1},formatter:function(a){return c(a,"MM")}},{key:"M",regex:"[1-9]|1[0-2]",apply:function(a){this.month=a-1},formatter:function(a){return c(a,"M")}},{key:"d!",regex:"[0-2]?[0-9]{1}|3[0-1]{1}",apply:function(a){this.date=+a},formatter:function(a){var b=a.getDate();return/^[1-9]$/.test(b)?c(a,"dd"):c(a,"d")}},{key:"dd",regex:"[0-2][0-9]{1}|3[0-1]{1}",apply:function(a){this.date=+a},formatter:function(a){return c(a,"dd")}},{key:"d",regex:"[1-2]?[0-9]{1}|3[0-1]{1}",apply:function(a){this.date=+a},formatter:function(a){return c(a,"d")}},{key:"EEEE",regex:b.DATETIME_FORMATS.DAY.join("|"),formatter:function(a){return c(a,"EEEE")}},{key:"EEE",regex:b.DATETIME_FORMATS.SHORTDAY.join("|"),formatter:function(a){return c(a,"EEE")}},{key:"HH",regex:"(?:0|1)[0-9]|2[0-3]",apply:function(a){this.hours=+a},formatter:function(a){return c(a,"HH")}},{key:"hh",regex:"0[0-9]|1[0-2]",apply:function(a){this.hours=+a},formatter:function(a){return c(a,"hh")}},{key:"H",regex:"1?[0-9]|2[0-3]",apply:function(a){this.hours=+a},formatter:function(a){return c(a,"H")}},{key:"h",regex:"[0-9]|1[0-2]",apply:function(a){this.hours=+a},formatter:function(a){return c(a,"h")}},{key:"mm",regex:"[0-5][0-9]",apply:function(a){this.minutes=+a},formatter:function(a){return c(a,"mm")}},{key:"m",regex:"[0-9]|[1-5][0-9]",apply:function(a){this.minutes=+a},formatter:function(a){return c(a,"m")}},{key:"sss",regex:"[0-9][0-9][0-9]",apply:function(a){this.milliseconds=+a},formatter:function(a){return c(a,"sss")}},{key:"ss",regex:"[0-5][0-9]",apply:function(a){this.seconds=+a},formatter:function(a){return c(a,"ss")}},{key:"s",regex:"[0-9]|[1-5][0-9]",apply:function(a){this.seconds=+a},formatter:function(a){return c(a,"s")}},{key:"a",regex:b.DATETIME_FORMATS.AMPMS.join("|"),apply:function(a){12===this.hours&&(this.hours=0),"PM"===a&&(this.hours+=12)},formatter:function(a){return c(a,"a")}},{key:"Z",regex:"[+-]\\d{4}",apply:function(a){var b=a.match(/([+-])(\d{2})(\d{2})/),c=b[1],d=b[2],e=b[3];this.hours+=j(c+d),this.minutes+=j(c+e)},formatter:function(a){return c(a,"Z")}},{key:"ww",regex:"[0-4][0-9]|5[0-3]",formatter:function(a){return c(a,"ww")}},{key:"w",regex:"[0-9]|[1-4][0-9]|5[0-3]",formatter:function(a){return c(a,"w")}},{key:"GGGG",regex:b.DATETIME_FORMATS.ERANAMES.join("|").replace(/\s/g,"\\s"),formatter:function(a){return c(a,"GGGG")}},{key:"GGG",regex:b.DATETIME_FORMATS.ERAS.join("|"),formatter:function(a){return c(a,"GGG")}},{key:"GG",regex:b.DATETIME_FORMATS.ERAS.join("|"),formatter:function(a){return c(a,"GG")}},{key:"G",regex:b.DATETIME_FORMATS.ERAS.join("|"),formatter:function(a){return c(a,"G")}}]},this.init(),this.filter=function(a,c){if(!angular.isDate(a)||isNaN(a)||!c)return"";c=b.DATETIME_FORMATS[c]||c,b.id!==p&&this.init(),this.formatters[c]||(this.formatters[c]=f(c));var d=this.formatters[c];return d.reduce(function(b,c){return b+c(a)},"")},this.parse=function(c,d,f){if(!angular.isString(c)||!d)return c;d=b.DATETIME_FORMATS[d]||d,d=d.replace(r,"\\$&"),b.id!==p&&this.init(),this.parsers[d]||(this.parsers[d]=e(d,"apply"));var g=this.parsers[d],h=g.regex,j=g.map,k=c.match(h),l=!1;if(k&&k.length){var m,n;angular.isDate(f)&&!isNaN(f.getTime())?m={year:f.getFullYear(),month:f.getMonth(),date:f.getDate(),hours:f.getHours(),minutes:f.getMinutes(),seconds:f.getSeconds(),milliseconds:f.getMilliseconds()}:(f&&a.warn("dateparser:","baseDate is not a valid date"),m={year:1900,month:0,date:1,hours:0,minutes:0,seconds:0,milliseconds:0});for(var o=1,q=k.length;q>o;o++){var s=j[o-1];"Z"===s.matcher&&(l=!0),s.apply&&s.apply.call(m,k[o])}var t=l?Date.prototype.setUTCFullYear:Date.prototype.setFullYear,u=l?Date.prototype.setUTCHours:Date.prototype.setHours;return i(m.year,m.month,m.date)&&(!angular.isDate(f)||isNaN(f.getTime())||l?(n=new Date(0),t.call(n,m.year,m.month,m.date),u.call(n,m.hours||0,m.minutes||0,m.seconds||0,m.milliseconds||0)):(n=new Date(f),t.call(n,m.year,m.month,m.date),u.call(n,m.hours,m.minutes,m.seconds,m.milliseconds))),n}},this.toTimezone=k,this.fromTimezone=l,this.timezoneToOffset=m,this.addDateMinutes=n,this.convertTimezoneToLocal=o}]),angular.module("ui.bootstrap.isClass",[]).directive("uibIsClass",["$animate",function(a){var b=/^\s*([\s\S]+?)\s+on\s+([\s\S]+?)\s*$/,c=/^\s*([\s\S]+?)\s+for\s+([\s\S]+?)\s*$/;return{restrict:"A",compile:function(d,e){function f(a,b,c){i.push(a),j.push({scope:a,element:b}),o.forEach(function(b,c){g(b,a)}),a.$on("$destroy",h)}function g(b,d){var e=b.match(c),f=d.$eval(e[1]),g=e[2],h=k[b];if(!h){var i=function(b){var c=null;j.some(function(a){var d=a.scope.$eval(m);return d===b?(c=a,!0):void 0}),h.lastActivated!==c&&(h.lastActivated&&a.removeClass(h.lastActivated.element,f),c&&a.addClass(c.element,f),h.lastActivated=c)};k[b]=h={lastActivated:null,scope:d,watchFn:i,compareWithExp:g,watcher:d.$watch(g,i)}}h.watchFn(d.$eval(g))}function h(a){var b=a.targetScope,c=i.indexOf(b);if(i.splice(c,1),j.splice(c,1),i.length){var d=i[0];angular.forEach(k,function(a){a.scope===b&&(a.watcher=d.$watch(a.compareWithExp,a.watchFn),a.scope=d)})}else k={}}var i=[],j=[],k={},l=e.uibIsClass.match(b),m=l[2],n=l[1],o=n.split(",");return f}}}]),angular.module("ui.bootstrap.datepicker",["ui.bootstrap.dateparser","ui.bootstrap.isClass"]).value("$datepickerSuppressError",!1).value("$datepickerLiteralWarning",!0).constant("uibDatepickerConfig",{datepickerMode:"day",formatDay:"dd",formatMonth:"MMMM",formatYear:"yyyy",formatDayHeader:"EEE",formatDayTitle:"MMMM yyyy",formatMonthTitle:"yyyy",maxDate:null,maxMode:"year",minDate:null,minMode:"day",monthColumns:3,ngModelOptions:{},shortcutPropagation:!1,showWeeks:!0,yearColumns:5,yearRows:4}).controller("UibDatepickerController",["$scope","$element","$attrs","$parse","$interpolate","$locale","$log","dateFilter","uibDatepickerConfig","$datepickerLiteralWarning","$datepickerSuppressError","uibDateParser",function(a,b,c,d,e,f,g,h,i,j,k,l){function m(b){a.datepickerMode=b,a.datepickerOptions.datepickerMode=b}var n=this,o={$setViewValue:angular.noop},p={},q=[];b.addClass("uib-datepicker"),c.$set("role","application"),a.datepickerOptions||(a.datepickerOptions={}),this.modes=["day","month","year"],["customClass","dateDisabled","datepickerMode","formatDay","formatDayHeader","formatDayTitle","formatMonth","formatMonthTitle","formatYear","maxDate","maxMode","minDate","minMode","monthColumns","showWeeks","shortcutPropagation","startingDay","yearColumns","yearRows"].forEach(function(b){switch(b){case"customClass":case"dateDisabled":a[b]=a.datepickerOptions[b]||angular.noop;break;case"datepickerMode":a.datepickerMode=angular.isDefined(a.datepickerOptions.datepickerMode)?a.datepickerOptions.datepickerMode:i.datepickerMode;break;case"formatDay":case"formatDayHeader":case"formatDayTitle":case"formatMonth":case"formatMonthTitle":case"formatYear":n[b]=angular.isDefined(a.datepickerOptions[b])?e(a.datepickerOptions[b])(a.$parent):i[b];break;case"monthColumns":case"showWeeks":case"shortcutPropagation":case"yearColumns":case"yearRows":n[b]=angular.isDefined(a.datepickerOptions[b])?a.datepickerOptions[b]:i[b];break;case"startingDay":angular.isDefined(a.datepickerOptions.startingDay)?n.startingDay=a.datepickerOptions.startingDay:angular.isNumber(i.startingDay)?n.startingDay=i.startingDay:n.startingDay=(f.DATETIME_FORMATS.FIRSTDAYOFWEEK+8)%7;break;case"maxDate":case"minDate":a.$watch("datepickerOptions."+b,function(a){a?angular.isDate(a)?n[b]=l.fromTimezone(new Date(a),p.timezone):(j&&g.warn("Literal date support has been deprecated, please switch to date object usage"),n[b]=new Date(h(a,"medium"))):n[b]=i[b]?l.fromTimezone(new Date(i[b]),p.timezone):null,n.refreshView()});break;case"maxMode":case"minMode":a.datepickerOptions[b]?a.$watch(function(){return a.datepickerOptions[b]},function(c){n[b]=a[b]=angular.isDefined(c)?c:a.datepickerOptions[b],("minMode"===b&&n.modes.indexOf(a.datepickerOptions.datepickerMode)<n.modes.indexOf(n[b])||"maxMode"===b&&n.modes.indexOf(a.datepickerOptions.datepickerMode)>n.modes.indexOf(n[b]))&&(a.datepickerMode=n[b],a.datepickerOptions.datepickerMode=n[b])}):n[b]=a[b]=i[b]||null}}),a.uniqueId="datepicker-"+a.$id+"-"+Math.floor(1e4*Math.random()),a.disabled=angular.isDefined(c.disabled)||!1,angular.isDefined(c.ngDisabled)&&q.push(a.$parent.$watch(c.ngDisabled,function(b){a.disabled=b,n.refreshView()})),a.isActive=function(b){return 0===n.compare(b.date,n.activeDate)?(a.activeDateId=b.uid,!0):!1},this.init=function(b){o=b,p=b.$options||a.datepickerOptions.ngModelOptions||i.ngModelOptions,a.datepickerOptions.initDate?(n.activeDate=l.fromTimezone(a.datepickerOptions.initDate,p.timezone)||new Date,a.$watch("datepickerOptions.initDate",function(a){a&&(o.$isEmpty(o.$modelValue)||o.$invalid)&&(n.activeDate=l.fromTimezone(a,p.timezone),n.refreshView())})):n.activeDate=new Date;var c=o.$modelValue?new Date(o.$modelValue):new Date;this.activeDate=isNaN(c)?l.fromTimezone(new Date,p.timezone):l.fromTimezone(c,p.timezone),o.$render=function(){n.render()}},this.render=function(){if(o.$viewValue){var a=new Date(o.$viewValue),b=!isNaN(a);b?this.activeDate=l.fromTimezone(a,p.timezone):k||g.error('Datepicker directive: "ng-model" value must be a Date object')}this.refreshView()},this.refreshView=function(){if(this.element){a.selectedDt=null,this._refreshView(),a.activeDt&&(a.activeDateId=a.activeDt.uid);var b=o.$viewValue?new Date(o.$viewValue):null;b=l.fromTimezone(b,p.timezone),o.$setValidity("dateDisabled",!b||this.element&&!this.isDisabled(b))}},this.createDateObject=function(b,c){var d=o.$viewValue?new Date(o.$viewValue):null;d=l.fromTimezone(d,p.timezone);var e=new Date;e=l.fromTimezone(e,p.timezone);var f=this.compare(b,e),g={date:b,label:l.filter(b,c),selected:d&&0===this.compare(b,d),disabled:this.isDisabled(b),past:0>f,current:0===f,future:f>0,customClass:this.customClass(b)||null};return d&&0===this.compare(b,d)&&(a.selectedDt=g),n.activeDate&&0===this.compare(g.date,n.activeDate)&&(a.activeDt=g),g},this.isDisabled=function(b){return a.disabled||this.minDate&&this.compare(b,this.minDate)<0||this.maxDate&&this.compare(b,this.maxDate)>0||a.dateDisabled&&a.dateDisabled({date:b,mode:a.datepickerMode})},this.customClass=function(b){return a.customClass({date:b,mode:a.datepickerMode})},this.split=function(a,b){for(var c=[];a.length>0;)c.push(a.splice(0,b));return c},a.select=function(b){if(a.datepickerMode===n.minMode){var c=o.$viewValue?l.fromTimezone(new Date(o.$viewValue),p.timezone):new Date(0,0,0,0,0,0,0);c.setFullYear(b.getFullYear(),b.getMonth(),b.getDate()),c=l.toTimezone(c,p.timezone),o.$setViewValue(c),o.$render()}else n.activeDate=b,m(n.modes[n.modes.indexOf(a.datepickerMode)-1]),a.$emit("uib:datepicker.mode");a.$broadcast("uib:datepicker.focus")},a.move=function(a){var b=n.activeDate.getFullYear()+a*(n.step.years||0),c=n.activeDate.getMonth()+a*(n.step.months||0);n.activeDate.setFullYear(b,c,1),n.refreshView()},a.toggleMode=function(b){b=b||1,a.datepickerMode===n.maxMode&&1===b||a.datepickerMode===n.minMode&&-1===b||(m(n.modes[n.modes.indexOf(a.datepickerMode)+b]),a.$emit("uib:datepicker.mode"))},a.keys={13:"enter",32:"space",33:"pageup",34:"pagedown",35:"end",36:"home",37:"left",38:"up",39:"right",40:"down"};var r=function(){n.element[0].focus()};a.$on("uib:datepicker.focus",r),a.keydown=function(b){var c=a.keys[b.which];if(c&&!b.shiftKey&&!b.altKey&&!a.disabled)if(b.preventDefault(),n.shortcutPropagation||b.stopPropagation(),"enter"===c||"space"===c){if(n.isDisabled(n.activeDate))return;a.select(n.activeDate)}else!b.ctrlKey||"up"!==c&&"down"!==c?(n.handleKeyDown(c,b),n.refreshView()):a.toggleMode("up"===c?1:-1)},b.on("keydown",function(b){a.$apply(function(){a.keydown(b)})}),a.$on("$destroy",function(){for(;q.length;)q.shift()()})}]).controller("UibDaypickerController",["$scope","$element","dateFilter",function(a,b,c){function d(a,b){return 1!==b||a%4!==0||a%100===0&&a%400!==0?f[b]:29}function e(a){var b=new Date(a);b.setDate(b.getDate()+4-(b.getDay()||7));var c=b.getTime();return b.setMonth(0),b.setDate(1),Math.floor(Math.round((c-b)/864e5)/7)+1}var f=[31,28,31,30,31,30,31,31,30,31,30,31];this.step={months:1},this.element=b,this.init=function(b){angular.extend(b,this),a.showWeeks=b.showWeeks,b.refreshView()},this.getDates=function(a,b){for(var c,d=new Array(b),e=new Date(a),f=0;b>f;)c=new Date(e),d[f++]=c,e.setDate(e.getDate()+1);return d},this._refreshView=function(){var b=this.activeDate.getFullYear(),d=this.activeDate.getMonth(),f=new Date(this.activeDate);f.setFullYear(b,d,1);var g=this.startingDay-f.getDay(),h=g>0?7-g:-g,i=new Date(f);h>0&&i.setDate(-h+1);for(var j=this.getDates(i,42),k=0;42>k;k++)j[k]=angular.extend(this.createDateObject(j[k],this.formatDay),{secondary:j[k].getMonth()!==d,uid:a.uniqueId+"-"+k});a.labels=new Array(7);for(var l=0;7>l;l++)a.labels[l]={abbr:c(j[l].date,this.formatDayHeader),full:c(j[l].date,"EEEE")};if(a.title=c(this.activeDate,this.formatDayTitle),a.rows=this.split(j,7),a.showWeeks){a.weekNumbers=[];for(var m=(11-this.startingDay)%7,n=a.rows.length,o=0;n>o;o++)a.weekNumbers.push(e(a.rows[o][m].date))}},this.compare=function(a,b){var c=new Date(a.getFullYear(),a.getMonth(),a.getDate()),d=new Date(b.getFullYear(),b.getMonth(),b.getDate());return c.setFullYear(a.getFullYear()),d.setFullYear(b.getFullYear()),c-d},this.handleKeyDown=function(a,b){var c=this.activeDate.getDate();if("left"===a)c-=1;else if("up"===a)c-=7;else if("right"===a)c+=1;else if("down"===a)c+=7;else if("pageup"===a||"pagedown"===a){var e=this.activeDate.getMonth()+("pageup"===a?-1:1);this.activeDate.setMonth(e,1),c=Math.min(d(this.activeDate.getFullYear(),this.activeDate.getMonth()),c)}else"home"===a?c=1:"end"===a&&(c=d(this.activeDate.getFullYear(),this.activeDate.getMonth()));this.activeDate.setDate(c)}}]).controller("UibMonthpickerController",["$scope","$element","dateFilter",function(a,b,c){this.step={years:1},this.element=b,this.init=function(a){angular.extend(a,this),a.refreshView()},this._refreshView=function(){for(var b,d=new Array(12),e=this.activeDate.getFullYear(),f=0;12>f;f++)b=new Date(this.activeDate),b.setFullYear(e,f,1),d[f]=angular.extend(this.createDateObject(b,this.formatMonth),{uid:a.uniqueId+"-"+f});a.title=c(this.activeDate,this.formatMonthTitle),a.rows=this.split(d,this.monthColumns),a.yearHeaderColspan=this.monthColumns>3?this.monthColumns-2:1},this.compare=function(a,b){var c=new Date(a.getFullYear(),a.getMonth()),d=new Date(b.getFullYear(),b.getMonth());return c.setFullYear(a.getFullYear()),d.setFullYear(b.getFullYear()),c-d},this.handleKeyDown=function(a,b){var c=this.activeDate.getMonth();if("left"===a)c-=1;else if("up"===a)c-=this.monthColumns;else if("right"===a)c+=1;else if("down"===a)c+=this.monthColumns;else if("pageup"===a||"pagedown"===a){var d=this.activeDate.getFullYear()+("pageup"===a?-1:1);this.activeDate.setFullYear(d)}else"home"===a?c=0:"end"===a&&(c=11);this.activeDate.setMonth(c)}}]).controller("UibYearpickerController",["$scope","$element","dateFilter",function(a,b,c){function d(a){return parseInt((a-1)/f,10)*f+1}var e,f;this.element=b,this.yearpickerInit=function(){e=this.yearColumns,f=this.yearRows*e,this.step={years:f}},this._refreshView=function(){for(var b,c=new Array(f),g=0,h=d(this.activeDate.getFullYear());f>g;g++)b=new Date(this.activeDate),b.setFullYear(h+g,0,1),c[g]=angular.extend(this.createDateObject(b,this.formatYear),{uid:a.uniqueId+"-"+g});a.title=[c[0].label,c[f-1].label].join(" - "),a.rows=this.split(c,e),a.columns=e},this.compare=function(a,b){return a.getFullYear()-b.getFullYear()},this.handleKeyDown=function(a,b){var c=this.activeDate.getFullYear();"left"===a?c-=1:"up"===a?c-=e:"right"===a?c+=1:"down"===a?c+=e:"pageup"===a||"pagedown"===a?c+=("pageup"===a?-1:1)*f:"home"===a?c=d(this.activeDate.getFullYear()):"end"===a&&(c=d(this.activeDate.getFullYear())+f-1),this.activeDate.setFullYear(c)}}]).directive("uibDatepicker",function(){return{templateUrl:function(a,b){return b.templateUrl||"uib/template/datepicker/datepicker.html"},scope:{datepickerOptions:"=?"},require:["uibDatepicker","^ngModel"],restrict:"A",controller:"UibDatepickerController",controllerAs:"datepicker",link:function(a,b,c,d){var e=d[0],f=d[1];e.init(f)}}}).directive("uibDaypicker",function(){return{templateUrl:function(a,b){return b.templateUrl||"uib/template/datepicker/day.html"},require:["^uibDatepicker","uibDaypicker"],restrict:"A",controller:"UibDaypickerController",link:function(a,b,c,d){var e=d[0],f=d[1];f.init(e)}}}).directive("uibMonthpicker",function(){return{templateUrl:function(a,b){return b.templateUrl||"uib/template/datepicker/month.html"},require:["^uibDatepicker","uibMonthpicker"],restrict:"A",controller:"UibMonthpickerController",link:function(a,b,c,d){var e=d[0],f=d[1];f.init(e)}}}).directive("uibYearpicker",function(){return{templateUrl:function(a,b){return b.templateUrl||"uib/template/datepicker/year.html"},require:["^uibDatepicker","uibYearpicker"],restrict:"A",controller:"UibYearpickerController",link:function(a,b,c,d){var e=d[0];angular.extend(e,d[1]),e.yearpickerInit(),e.refreshView()}}}),angular.module("ui.bootstrap.position",[]).factory("$uibPosition",["$document","$window",function(a,b){var c,d,e={normal:/(auto|scroll)/,
hidden:/(auto|scroll|hidden)/},f={auto:/\s?auto?\s?/i,primary:/^(top|bottom|left|right)$/,secondary:/^(top|bottom|left|right|center)$/,vertical:/^(top|bottom)$/},g=/(HTML|BODY)/;return{getRawNode:function(a){return a.nodeName?a:a[0]||a},parseStyle:function(a){return a=parseFloat(a),isFinite(a)?a:0},offsetParent:function(c){function d(a){return"static"===(b.getComputedStyle(a).position||"static")}c=this.getRawNode(c);for(var e=c.offsetParent||a[0].documentElement;e&&e!==a[0].documentElement&&d(e);)e=e.offsetParent;return e||a[0].documentElement},scrollbarWidth:function(e){if(e){if(angular.isUndefined(d)){var f=a.find("body");f.addClass("uib-position-body-scrollbar-measure"),d=b.innerWidth-f[0].clientWidth,d=isFinite(d)?d:0,f.removeClass("uib-position-body-scrollbar-measure")}return d}if(angular.isUndefined(c)){var g=angular.element('<div class="uib-position-scrollbar-measure"></div>');a.find("body").append(g),c=g[0].offsetWidth-g[0].clientWidth,c=isFinite(c)?c:0,g.remove()}return c},scrollbarPadding:function(a){a=this.getRawNode(a);var c=b.getComputedStyle(a),d=this.parseStyle(c.paddingRight),e=this.parseStyle(c.paddingBottom),f=this.scrollParent(a,!1,!0),h=this.scrollbarWidth(f,g.test(f.tagName));return{scrollbarWidth:h,widthOverflow:f.scrollWidth>f.clientWidth,right:d+h,originalRight:d,heightOverflow:f.scrollHeight>f.clientHeight,bottom:e+h,originalBottom:e}},isScrollable:function(a,c){a=this.getRawNode(a);var d=c?e.hidden:e.normal,f=b.getComputedStyle(a);return d.test(f.overflow+f.overflowY+f.overflowX)},scrollParent:function(c,d,f){c=this.getRawNode(c);var g=d?e.hidden:e.normal,h=a[0].documentElement,i=b.getComputedStyle(c);if(f&&g.test(i.overflow+i.overflowY+i.overflowX))return c;var j="absolute"===i.position,k=c.parentElement||h;if(k===h||"fixed"===i.position)return h;for(;k.parentElement&&k!==h;){var l=b.getComputedStyle(k);if(j&&"static"!==l.position&&(j=!1),!j&&g.test(l.overflow+l.overflowY+l.overflowX))break;k=k.parentElement}return k},position:function(c,d){c=this.getRawNode(c);var e=this.offset(c);if(d){var f=b.getComputedStyle(c);e.top-=this.parseStyle(f.marginTop),e.left-=this.parseStyle(f.marginLeft)}var g=this.offsetParent(c),h={top:0,left:0};return g!==a[0].documentElement&&(h=this.offset(g),h.top+=g.clientTop-g.scrollTop,h.left+=g.clientLeft-g.scrollLeft),{width:Math.round(angular.isNumber(e.width)?e.width:c.offsetWidth),height:Math.round(angular.isNumber(e.height)?e.height:c.offsetHeight),top:Math.round(e.top-h.top),left:Math.round(e.left-h.left)}},offset:function(c){c=this.getRawNode(c);var d=c.getBoundingClientRect();return{width:Math.round(angular.isNumber(d.width)?d.width:c.offsetWidth),height:Math.round(angular.isNumber(d.height)?d.height:c.offsetHeight),top:Math.round(d.top+(b.pageYOffset||a[0].documentElement.scrollTop)),left:Math.round(d.left+(b.pageXOffset||a[0].documentElement.scrollLeft))}},viewportOffset:function(c,d,e){c=this.getRawNode(c),e=e!==!1;var f=c.getBoundingClientRect(),g={top:0,left:0,bottom:0,right:0},h=d?a[0].documentElement:this.scrollParent(c),i=h.getBoundingClientRect();if(g.top=i.top+h.clientTop,g.left=i.left+h.clientLeft,h===a[0].documentElement&&(g.top+=b.pageYOffset,g.left+=b.pageXOffset),g.bottom=g.top+h.clientHeight,g.right=g.left+h.clientWidth,e){var j=b.getComputedStyle(h);g.top+=this.parseStyle(j.paddingTop),g.bottom-=this.parseStyle(j.paddingBottom),g.left+=this.parseStyle(j.paddingLeft),g.right-=this.parseStyle(j.paddingRight)}return{top:Math.round(f.top-g.top),bottom:Math.round(g.bottom-f.bottom),left:Math.round(f.left-g.left),right:Math.round(g.right-f.right)}},parsePlacement:function(a){var b=f.auto.test(a);return b&&(a=a.replace(f.auto,"")),a=a.split("-"),a[0]=a[0]||"top",f.primary.test(a[0])||(a[0]="top"),a[1]=a[1]||"center",f.secondary.test(a[1])||(a[1]="center"),b?a[2]=!0:a[2]=!1,a},positionElements:function(a,c,d,e){a=this.getRawNode(a),c=this.getRawNode(c);var g=angular.isDefined(c.offsetWidth)?c.offsetWidth:c.prop("offsetWidth"),h=angular.isDefined(c.offsetHeight)?c.offsetHeight:c.prop("offsetHeight");d=this.parsePlacement(d);var i=e?this.offset(a):this.position(a),j={top:0,left:0,placement:""};if(d[2]){var k=this.viewportOffset(a,e),l=b.getComputedStyle(c),m={width:g+Math.round(Math.abs(this.parseStyle(l.marginLeft)+this.parseStyle(l.marginRight))),height:h+Math.round(Math.abs(this.parseStyle(l.marginTop)+this.parseStyle(l.marginBottom)))};if(d[0]="top"===d[0]&&m.height>k.top&&m.height<=k.bottom?"bottom":"bottom"===d[0]&&m.height>k.bottom&&m.height<=k.top?"top":"left"===d[0]&&m.width>k.left&&m.width<=k.right?"right":"right"===d[0]&&m.width>k.right&&m.width<=k.left?"left":d[0],d[1]="top"===d[1]&&m.height-i.height>k.bottom&&m.height-i.height<=k.top?"bottom":"bottom"===d[1]&&m.height-i.height>k.top&&m.height-i.height<=k.bottom?"top":"left"===d[1]&&m.width-i.width>k.right&&m.width-i.width<=k.left?"right":"right"===d[1]&&m.width-i.width>k.left&&m.width-i.width<=k.right?"left":d[1],"center"===d[1])if(f.vertical.test(d[0])){var n=i.width/2-g/2;k.left+n<0&&m.width-i.width<=k.right?d[1]="left":k.right+n<0&&m.width-i.width<=k.left&&(d[1]="right")}else{var o=i.height/2-m.height/2;k.top+o<0&&m.height-i.height<=k.bottom?d[1]="top":k.bottom+o<0&&m.height-i.height<=k.top&&(d[1]="bottom")}}switch(d[0]){case"top":j.top=i.top-h;break;case"bottom":j.top=i.top+i.height;break;case"left":j.left=i.left-g;break;case"right":j.left=i.left+i.width}switch(d[1]){case"top":j.top=i.top;break;case"bottom":j.top=i.top+i.height-h;break;case"left":j.left=i.left;break;case"right":j.left=i.left+i.width-g;break;case"center":f.vertical.test(d[0])?j.left=i.left+i.width/2-g/2:j.top=i.top+i.height/2-h/2}return j.top=Math.round(j.top),j.left=Math.round(j.left),j.placement="center"===d[1]?d[0]:d[0]+"-"+d[1],j},adjustTop:function(a,b,c,d){return-1!==a.indexOf("top")&&c!==d?{top:b.top-d+"px"}:void 0},positionArrow:function(a,c){a=this.getRawNode(a);var d=a.querySelector(".tooltip-inner, .popover-inner");if(d){var e=angular.element(d).hasClass("tooltip-inner"),g=e?a.querySelector(".tooltip-arrow"):a.querySelector(".arrow");if(g){var h={top:"",bottom:"",left:"",right:""};if(c=this.parsePlacement(c),"center"===c[1])return void angular.element(g).css(h);var i="border-"+c[0]+"-width",j=b.getComputedStyle(g)[i],k="border-";k+=f.vertical.test(c[0])?c[0]+"-"+c[1]:c[1]+"-"+c[0],k+="-radius";var l=b.getComputedStyle(e?d:a)[k];switch(c[0]){case"top":h.bottom=e?"0":"-"+j;break;case"bottom":h.top=e?"0":"-"+j;break;case"left":h.right=e?"0":"-"+j;break;case"right":h.left=e?"0":"-"+j}h[c[1]]=l,angular.element(g).css(h)}}}}}]),angular.module("ui.bootstrap.datepickerPopup",["ui.bootstrap.datepicker","ui.bootstrap.position"]).value("$datepickerPopupLiteralWarning",!0).constant("uibDatepickerPopupConfig",{altInputFormats:[],appendToBody:!1,clearText:"Clear",closeOnDateSelection:!0,closeText:"Done",currentText:"Today",datepickerPopup:"yyyy-MM-dd",datepickerPopupTemplateUrl:"uib/template/datepickerPopup/popup.html",datepickerTemplateUrl:"uib/template/datepicker/datepicker.html",html5Types:{date:"yyyy-MM-dd","datetime-local":"yyyy-MM-ddTHH:mm:ss.sss",month:"yyyy-MM"},onOpenFocus:!0,showButtonBar:!0,placement:"auto bottom-left"}).controller("UibDatepickerPopupController",["$scope","$element","$attrs","$compile","$log","$parse","$window","$document","$rootScope","$uibPosition","dateFilter","uibDateParser","uibDatepickerPopupConfig","$timeout","uibDatepickerConfig","$datepickerPopupLiteralWarning",function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){function q(b){var c=l.parse(b,w,a.date);if(isNaN(c))for(var d=0;d<I.length;d++)if(c=l.parse(b,I[d],a.date),!isNaN(c))return c;return c}function r(a){if(angular.isNumber(a)&&(a=new Date(a)),!a)return null;if(angular.isDate(a)&&!isNaN(a))return a;if(angular.isString(a)){var b=q(a);if(!isNaN(b))return l.fromTimezone(b,G.timezone)}return F.$options&&F.$options.allowInvalid?a:void 0}function s(a,b){var d=a||b;return c.ngRequired||d?(angular.isNumber(d)&&(d=new Date(d)),d?angular.isDate(d)&&!isNaN(d)?!0:angular.isString(d)?!isNaN(q(d)):!1:!0):!0}function t(c){if(a.isOpen||!a.disabled){var d=H[0],e=b[0].contains(c.target),f=void 0!==d.contains&&d.contains(c.target);!a.isOpen||e||f||a.$apply(function(){a.isOpen=!1})}}function u(c){27===c.which&&a.isOpen?(c.preventDefault(),c.stopPropagation(),a.$apply(function(){a.isOpen=!1}),b[0].focus()):40!==c.which||a.isOpen||(c.preventDefault(),c.stopPropagation(),a.$apply(function(){a.isOpen=!0}))}function v(){if(a.isOpen){var d=angular.element(H[0].querySelector(".uib-datepicker-popup")),e=c.popupPlacement?c.popupPlacement:m.placement,f=j.positionElements(b,d,e,y);d.css({top:f.top+"px",left:f.left+"px"}),d.hasClass("uib-position-measure")&&d.removeClass("uib-position-measure")}}var w,x,y,z,A,B,C,D,E,F,G,H,I,J=!1,K=[];this.init=function(e){if(F=e,G=angular.isObject(e.$options)?e.$options:{timezone:null},x=angular.isDefined(c.closeOnDateSelection)?a.$parent.$eval(c.closeOnDateSelection):m.closeOnDateSelection,y=angular.isDefined(c.datepickerAppendToBody)?a.$parent.$eval(c.datepickerAppendToBody):m.appendToBody,z=angular.isDefined(c.onOpenFocus)?a.$parent.$eval(c.onOpenFocus):m.onOpenFocus,A=angular.isDefined(c.datepickerPopupTemplateUrl)?c.datepickerPopupTemplateUrl:m.datepickerPopupTemplateUrl,B=angular.isDefined(c.datepickerTemplateUrl)?c.datepickerTemplateUrl:m.datepickerTemplateUrl,I=angular.isDefined(c.altInputFormats)?a.$parent.$eval(c.altInputFormats):m.altInputFormats,a.showButtonBar=angular.isDefined(c.showButtonBar)?a.$parent.$eval(c.showButtonBar):m.showButtonBar,m.html5Types[c.type]?(w=m.html5Types[c.type],J=!0):(w=c.uibDatepickerPopup||m.datepickerPopup,c.$observe("uibDatepickerPopup",function(a,b){var c=a||m.datepickerPopup;if(c!==w&&(w=c,F.$modelValue=null,!w))throw new Error("uibDatepickerPopup must have a date format specified.")})),!w)throw new Error("uibDatepickerPopup must have a date format specified.");if(J&&c.uibDatepickerPopup)throw new Error("HTML5 date input types do not support custom formats.");C=angular.element("<div uib-datepicker-popup-wrap><div uib-datepicker></div></div>"),C.attr({"ng-model":"date","ng-change":"dateSelection(date)","template-url":A}),D=angular.element(C.children()[0]),D.attr("template-url",B),a.datepickerOptions||(a.datepickerOptions={}),J&&"month"===c.type&&(a.datepickerOptions.datepickerMode="month",a.datepickerOptions.minMode="month"),D.attr("datepicker-options","datepickerOptions"),J?F.$formatters.push(function(b){return a.date=l.fromTimezone(b,G.timezone),b}):(F.$$parserName="date",F.$validators.date=s,F.$parsers.unshift(r),F.$formatters.push(function(b){return F.$isEmpty(b)?(a.date=b,b):(angular.isNumber(b)&&(b=new Date(b)),a.date=l.fromTimezone(b,G.timezone),l.filter(a.date,w))})),F.$viewChangeListeners.push(function(){a.date=q(F.$viewValue)}),b.on("keydown",u),H=d(C)(a),C.remove(),y?h.find("body").append(H):b.after(H),a.$on("$destroy",function(){for(a.isOpen===!0&&(i.$$phase||a.$apply(function(){a.isOpen=!1})),H.remove(),b.off("keydown",u),h.off("click",t),E&&E.off("scroll",v),angular.element(g).off("resize",v);K.length;)K.shift()()})},a.getText=function(b){return a[b+"Text"]||m[b+"Text"]},a.isDisabled=function(b){"today"===b&&(b=l.fromTimezone(new Date,G.timezone));var c={};return angular.forEach(["minDate","maxDate"],function(b){a.datepickerOptions[b]?angular.isDate(a.datepickerOptions[b])?c[b]=new Date(a.datepickerOptions[b]):(p&&e.warn("Literal date support has been deprecated, please switch to date object usage"),c[b]=new Date(k(a.datepickerOptions[b],"medium"))):c[b]=null}),a.datepickerOptions&&c.minDate&&a.compare(b,c.minDate)<0||c.maxDate&&a.compare(b,c.maxDate)>0},a.compare=function(a,b){return new Date(a.getFullYear(),a.getMonth(),a.getDate())-new Date(b.getFullYear(),b.getMonth(),b.getDate())},a.dateSelection=function(c){a.date=c;var d=a.date?l.filter(a.date,w):null;b.val(d),F.$setViewValue(d),x&&(a.isOpen=!1,b[0].focus())},a.keydown=function(c){27===c.which&&(c.stopPropagation(),a.isOpen=!1,b[0].focus())},a.select=function(b,c){if(c.stopPropagation(),"today"===b){var d=new Date;angular.isDate(a.date)?(b=new Date(a.date),b.setFullYear(d.getFullYear(),d.getMonth(),d.getDate())):(b=l.fromTimezone(d,G.timezone),b.setHours(0,0,0,0))}a.dateSelection(b)},a.close=function(c){c.stopPropagation(),a.isOpen=!1,b[0].focus()},a.disabled=angular.isDefined(c.disabled)||!1,c.ngDisabled&&K.push(a.$parent.$watch(f(c.ngDisabled),function(b){a.disabled=b})),a.$watch("isOpen",function(d){d?a.disabled?a.isOpen=!1:n(function(){v(),z&&a.$broadcast("uib:datepicker.focus"),h.on("click",t);var d=c.popupPlacement?c.popupPlacement:m.placement;y||j.parsePlacement(d)[2]?(E=E||angular.element(j.scrollParent(b)),E&&E.on("scroll",v)):E=null,angular.element(g).on("resize",v)},0,!1):(h.off("click",t),E&&E.off("scroll",v),angular.element(g).off("resize",v))}),a.$on("uib:datepicker.mode",function(){n(v,0,!1)})}]).directive("uibDatepickerPopup",function(){return{require:["ngModel","uibDatepickerPopup"],controller:"UibDatepickerPopupController",scope:{datepickerOptions:"=?",isOpen:"=?",currentText:"@",clearText:"@",closeText:"@"},link:function(a,b,c,d){var e=d[0],f=d[1];f.init(e)}}}).directive("uibDatepickerPopupWrap",function(){return{restrict:"A",transclude:!0,templateUrl:function(a,b){return b.templateUrl||"uib/template/datepickerPopup/popup.html"}}}),angular.module("ui.bootstrap.debounce",[]).factory("$$debounce",["$timeout",function(a){return function(b,c){var d;return function(){var e=this,f=Array.prototype.slice.call(arguments);d&&a.cancel(d),d=a(function(){b.apply(e,f)},c)}}}]),angular.module("ui.bootstrap.dropdown",["ui.bootstrap.position"]).constant("uibDropdownConfig",{appendToOpenClass:"uib-dropdown-open",openClass:"open"}).service("uibDropdownService",["$document","$rootScope",function(a,b){var c=null;this.open=function(b,e){c||a.on("click",d),c&&c!==b&&(c.isOpen=!1),c=b},this.close=function(b,e){c===b&&(c=null,a.off("click",d),a.off("keydown",this.keybindFilter))};var d=function(a){if(c&&!(a&&"disabled"===c.getAutoClose()||a&&3===a.which)){var d=c.getToggleElement();if(!(a&&d&&d[0].contains(a.target))){var e=c.getDropdownElement();a&&"outsideClick"===c.getAutoClose()&&e&&e[0].contains(a.target)||(c.isOpen=!1,c.focusToggleElement(),b.$$phase||c.$apply())}}};this.keybindFilter=function(a){var b=c.getDropdownElement(),e=c.getToggleElement(),f=b&&b[0].contains(a.target),g=e&&e[0].contains(a.target);27===a.which?(a.stopPropagation(),c.focusToggleElement(),d()):c.isKeynavEnabled()&&-1!==[38,40].indexOf(a.which)&&c.isOpen&&(f||g)&&(a.preventDefault(),a.stopPropagation(),c.focusDropdownEntry(a.which))}}]).controller("UibDropdownController",["$scope","$element","$attrs","$parse","uibDropdownConfig","uibDropdownService","$animate","$uibPosition","$document","$compile","$templateRequest",function(a,b,c,d,e,f,g,h,i,j,k){var l,m,n=this,o=a.$new(),p=e.appendToOpenClass,q=e.openClass,r=angular.noop,s=c.onToggle?d(c.onToggle):angular.noop,t=!1,u=null,v=!1,w=i.find("body");b.addClass("dropdown"),this.init=function(){if(c.isOpen&&(m=d(c.isOpen),r=m.assign,a.$watch(m,function(a){o.isOpen=!!a})),angular.isDefined(c.dropdownAppendTo)){var e=d(c.dropdownAppendTo)(o);e&&(u=angular.element(e))}t=angular.isDefined(c.dropdownAppendToBody),v=angular.isDefined(c.keyboardNav),t&&!u&&(u=w),u&&n.dropdownMenu&&(u.append(n.dropdownMenu),b.on("$destroy",function(){n.dropdownMenu.remove()}))},this.toggle=function(a){return o.isOpen=arguments.length?!!a:!o.isOpen,angular.isFunction(r)&&r(o,o.isOpen),o.isOpen},this.isOpen=function(){return o.isOpen},o.getToggleElement=function(){return n.toggleElement},o.getAutoClose=function(){return c.autoClose||"always"},o.getElement=function(){return b},o.isKeynavEnabled=function(){return v},o.focusDropdownEntry=function(a){var c=n.dropdownMenu?angular.element(n.dropdownMenu).find("a"):b.find("ul").eq(0).find("a");switch(a){case 40:angular.isNumber(n.selectedOption)?n.selectedOption=n.selectedOption===c.length-1?n.selectedOption:n.selectedOption+1:n.selectedOption=0;break;case 38:angular.isNumber(n.selectedOption)?n.selectedOption=0===n.selectedOption?0:n.selectedOption-1:n.selectedOption=c.length-1}c[n.selectedOption].focus()},o.getDropdownElement=function(){return n.dropdownMenu},o.focusToggleElement=function(){n.toggleElement&&n.toggleElement[0].focus()},o.$watch("isOpen",function(c,d){if(u&&n.dropdownMenu){var e,m,v,w=h.positionElements(b,n.dropdownMenu,"bottom-left",!0),x=0;if(e={top:w.top+"px",display:c?"block":"none"},m=n.dropdownMenu.hasClass("dropdown-menu-right"),m?(e.left="auto",v=h.scrollbarPadding(u),v.heightOverflow&&v.scrollbarWidth&&(x=v.scrollbarWidth),e.right=window.innerWidth-x-(w.left+b.prop("offsetWidth"))+"px"):(e.left=w.left+"px",e.right="auto"),!t){var y=h.offset(u);e.top=w.top-y.top+"px",m?e.right=window.innerWidth-(w.left-y.left+b.prop("offsetWidth"))+"px":e.left=w.left-y.left+"px"}n.dropdownMenu.css(e)}var z=u?u:b,A=z.hasClass(u?p:q);if(A===!c&&g[c?"addClass":"removeClass"](z,u?p:q).then(function(){angular.isDefined(c)&&c!==d&&s(a,{open:!!c})}),c)n.dropdownMenuTemplateUrl?k(n.dropdownMenuTemplateUrl).then(function(a){l=o.$new(),j(a.trim())(l,function(a){var b=a;n.dropdownMenu.replaceWith(b),n.dropdownMenu=b,i.on("keydown",f.keybindFilter)})}):i.on("keydown",f.keybindFilter),o.focusToggleElement(),f.open(o,b);else{if(f.close(o,b),n.dropdownMenuTemplateUrl){l&&l.$destroy();var B=angular.element('<ul class="dropdown-menu"></ul>');n.dropdownMenu.replaceWith(B),n.dropdownMenu=B}n.selectedOption=null}angular.isFunction(r)&&r(a,c)})}]).directive("uibDropdown",function(){return{controller:"UibDropdownController",link:function(a,b,c,d){d.init()}}}).directive("uibDropdownMenu",function(){return{restrict:"A",require:"?^uibDropdown",link:function(a,b,c,d){if(d&&!angular.isDefined(c.dropdownNested)){b.addClass("dropdown-menu");var e=c.templateUrl;e&&(d.dropdownMenuTemplateUrl=e),d.dropdownMenu||(d.dropdownMenu=b)}}}}).directive("uibDropdownToggle",function(){return{require:"?^uibDropdown",link:function(a,b,c,d){if(d){b.addClass("dropdown-toggle"),d.toggleElement=b;var e=function(e){e.preventDefault(),b.hasClass("disabled")||c.disabled||a.$apply(function(){d.toggle()})};b.bind("click",e),b.attr({"aria-haspopup":!0,"aria-expanded":!1}),a.$watch(d.isOpen,function(a){b.attr("aria-expanded",!!a)}),a.$on("$destroy",function(){b.unbind("click",e)})}}}}),angular.module("ui.bootstrap.stackedMap",[]).factory("$$stackedMap",function(){return{createNew:function(){var a=[];return{add:function(b,c){a.push({key:b,value:c})},get:function(b){for(var c=0;c<a.length;c++)if(b===a[c].key)return a[c]},keys:function(){for(var b=[],c=0;c<a.length;c++)b.push(a[c].key);return b},top:function(){return a[a.length-1]},remove:function(b){for(var c=-1,d=0;d<a.length;d++)if(b===a[d].key){c=d;break}return a.splice(c,1)[0]},removeTop:function(){return a.pop()},length:function(){return a.length}}}}}),angular.module("ui.bootstrap.modal",["ui.bootstrap.stackedMap","ui.bootstrap.position"]).factory("$$multiMap",function(){return{createNew:function(){var a={};return{entries:function(){return Object.keys(a).map(function(b){return{key:b,value:a[b]}})},get:function(b){return a[b]},hasKey:function(b){return!!a[b]},keys:function(){return Object.keys(a)},put:function(b,c){a[b]||(a[b]=[]),a[b].push(c)},remove:function(b,c){var d=a[b];if(d){var e=d.indexOf(c);-1!==e&&d.splice(e,1),d.length||delete a[b]}}}}}}).provider("$uibResolve",function(){var a=this;this.resolver=null,this.setResolver=function(a){this.resolver=a},this.$get=["$injector","$q",function(b,c){var d=a.resolver?b.get(a.resolver):null;return{resolve:function(a,e,f,g){if(d)return d.resolve(a,e,f,g);var h=[];return angular.forEach(a,function(a){angular.isFunction(a)||angular.isArray(a)?h.push(c.resolve(b.invoke(a))):angular.isString(a)?h.push(c.resolve(b.get(a))):h.push(c.resolve(a))}),c.all(h).then(function(b){var c={},d=0;return angular.forEach(a,function(a,e){c[e]=b[d++]}),c})}}}]}).directive("uibModalBackdrop",["$animate","$injector","$uibModalStack",function(a,b,c){function d(b,d,e){e.modalInClass&&(a.addClass(d,e.modalInClass),b.$on(c.NOW_CLOSING_EVENT,function(c,f){var g=f();b.modalOptions.animation?a.removeClass(d,e.modalInClass).then(g):g()}))}return{restrict:"A",compile:function(a,b){return a.addClass(b.backdropClass),d}}}]).directive("uibModalWindow",["$uibModalStack","$q","$animateCss","$document",function(a,b,c,d){return{scope:{index:"@"},restrict:"A",transclude:!0,templateUrl:function(a,b){return b.templateUrl||"uib/template/modal/window.html"},link:function(e,f,g){f.addClass(g.windowTopClass||""),e.size=g.size,e.close=function(b){var c=a.getTop();c&&c.value.backdrop&&"static"!==c.value.backdrop&&b.target===b.currentTarget&&(b.preventDefault(),b.stopPropagation(),a.dismiss(c.key,"backdrop click"))},f.on("click",e.close),e.$isRendered=!0;var h=b.defer();e.$$postDigest(function(){h.resolve()}),h.promise.then(function(){var h=null;g.modalInClass&&(h=c(f,{addClass:g.modalInClass}).start(),e.$on(a.NOW_CLOSING_EVENT,function(a,b){var d=b();c(f,{removeClass:g.modalInClass}).start().then(d)})),b.when(h).then(function(){var b=a.getTop();if(b&&a.modalRendered(b.key),!d[0].activeElement||!f[0].contains(d[0].activeElement)){var c=f[0].querySelector("[autofocus]");c?c.focus():f[0].focus()}})})}}}]).directive("uibModalAnimationClass",function(){return{compile:function(a,b){b.modalAnimation&&a.addClass(b.uibModalAnimationClass)}}}).directive("uibModalTransclude",["$animate",function(a){return{link:function(b,c,d,e,f){f(b.$parent,function(b){c.empty(),a.enter(b,c)})}}}]).factory("$uibModalStack",["$animate","$animateCss","$document","$compile","$rootScope","$q","$$multiMap","$$stackedMap","$uibPosition",function(a,b,c,d,e,f,g,h,i){function j(a){var b="-";return a.replace(C,function(a,c){return(c?b:"")+a.toLowerCase()})}function k(a){return!!(a.offsetWidth||a.offsetHeight||a.getClientRects().length)}function l(){for(var a=-1,b=w.keys(),c=0;c<b.length;c++)w.get(b[c]).value.backdrop&&(a=c);return a>-1&&z>a&&(a=z),a}function m(a,b){var c=w.get(a).value,d=c.appendTo;w.remove(a),A=w.top(),A&&(z=parseInt(A.value.modalDomEl.attr("index"),10)),p(c.modalDomEl,c.modalScope,function(){var b=c.openedClass||v;x.remove(b,a);var e=x.hasKey(b);d.toggleClass(b,e),!e&&u&&u.heightOverflow&&u.scrollbarWidth&&(u.originalRight?d.css({paddingRight:u.originalRight+"px"}):d.css({paddingRight:""}),u=null),n(!0)},c.closedDeferred),o(),b&&b.focus?b.focus():d.focus&&d.focus()}function n(a){var b;w.length()>0&&(b=w.top().value,b.modalDomEl.toggleClass(b.windowTopClass||"",a))}function o(){if(s&&-1===l()){var a=t;p(s,t,function(){a=null}),s=void 0,t=void 0}}function p(b,c,d,e){function g(){g.done||(g.done=!0,a.leave(b).then(function(){d&&d(),b.remove(),e&&e.resolve()}),c.$destroy())}var h,i=null,j=function(){return h||(h=f.defer(),i=h.promise),function(){h.resolve()}};return c.$broadcast(y.NOW_CLOSING_EVENT,j),f.when(i).then(g)}function q(a){if(a.isDefaultPrevented())return a;var b=w.top();if(b)switch(a.which){case 27:b.value.keyboard&&(a.preventDefault(),e.$apply(function(){y.dismiss(b.key,"escape key press")}));break;case 9:var c=y.loadFocusElementList(b),d=!1;a.shiftKey?(y.isFocusInFirstItem(a,c)||y.isModalFocused(a,b))&&(d=y.focusLastFocusableElement(c)):y.isFocusInLastItem(a,c)&&(d=y.focusFirstFocusableElement(c)),d&&(a.preventDefault(),a.stopPropagation())}}function r(a,b,c){return!a.value.modalScope.$broadcast("modal.closing",b,c).defaultPrevented}var s,t,u,v="modal-open",w=h.createNew(),x=g.createNew(),y={NOW_CLOSING_EVENT:"modal.stack.now-closing"},z=0,A=null,B="a[href], area[href], input:not([disabled]):not([tabindex='-1']), button:not([disabled]):not([tabindex='-1']),select:not([disabled]):not([tabindex='-1']), textarea:not([disabled]):not([tabindex='-1']), iframe, object, embed, *[tabindex]:not([tabindex='-1']), *[contenteditable=true]",C=/[A-Z]/g;return e.$watch(l,function(a){t&&(t.index=a)}),c.on("keydown",q),e.$on("$destroy",function(){c.off("keydown",q)}),y.open=function(b,f){var g=c[0].activeElement,h=f.openedClass||v;n(!1),A=w.top(),w.add(b,{deferred:f.deferred,renderDeferred:f.renderDeferred,closedDeferred:f.closedDeferred,modalScope:f.scope,backdrop:f.backdrop,keyboard:f.keyboard,openedClass:f.openedClass,windowTopClass:f.windowTopClass,animation:f.animation,appendTo:f.appendTo}),x.put(h,b);var k=f.appendTo,m=l();if(!k.length)throw new Error("appendTo element not found. Make sure that the element passed is in DOM.");m>=0&&!s&&(t=e.$new(!0),t.modalOptions=f,t.index=m,s=angular.element('<div uib-modal-backdrop="modal-backdrop"></div>'),s.attr({"class":"modal-backdrop","ng-style":"{'z-index': 1040 + (index && 1 || 0) + index*10}","uib-modal-animation-class":"fade","modal-in-class":"in"}),f.backdropClass&&s.addClass(f.backdropClass),f.animation&&s.attr("modal-animation","true"),d(s)(t),a.enter(s,k),i.isScrollable(k)&&(u=i.scrollbarPadding(k),u.heightOverflow&&u.scrollbarWidth&&k.css({paddingRight:u.right+"px"})));var o;f.component?(o=document.createElement(j(f.component.name)),o=angular.element(o),o.attr({resolve:"$resolve","modal-instance":"$uibModalInstance",close:"$close($value)",dismiss:"$dismiss($value)"})):o=f.content,z=A?parseInt(A.value.modalDomEl.attr("index"),10)+1:0;var p=angular.element('<div uib-modal-window="modal-window"></div>');p.attr({"class":"modal","template-url":f.windowTemplateUrl,"window-top-class":f.windowTopClass,role:"dialog","aria-labelledby":f.ariaLabelledBy,"aria-describedby":f.ariaDescribedBy,size:f.size,index:z,animate:"animate","ng-style":"{'z-index': 1050 + $$topModalIndex*10, display: 'block'}",tabindex:-1,"uib-modal-animation-class":"fade","modal-in-class":"in"}).append(o),f.windowClass&&p.addClass(f.windowClass),f.animation&&p.attr("modal-animation","true"),k.addClass(h),f.scope&&(f.scope.$$topModalIndex=z),a.enter(d(p)(f.scope),k),w.top().value.modalDomEl=p,w.top().value.modalOpener=g},y.close=function(a,b){var c=w.get(a);return c&&r(c,b,!0)?(c.value.modalScope.$$uibDestructionScheduled=!0,c.value.deferred.resolve(b),m(a,c.value.modalOpener),!0):!c},y.dismiss=function(a,b){var c=w.get(a);return c&&r(c,b,!1)?(c.value.modalScope.$$uibDestructionScheduled=!0,c.value.deferred.reject(b),m(a,c.value.modalOpener),!0):!c},y.dismissAll=function(a){for(var b=this.getTop();b&&this.dismiss(b.key,a);)b=this.getTop()},y.getTop=function(){return w.top()},y.modalRendered=function(a){var b=w.get(a);b&&b.value.renderDeferred.resolve()},y.focusFirstFocusableElement=function(a){return a.length>0?(a[0].focus(),!0):!1},y.focusLastFocusableElement=function(a){return a.length>0?(a[a.length-1].focus(),!0):!1},y.isModalFocused=function(a,b){if(a&&b){var c=b.value.modalDomEl;if(c&&c.length)return(a.target||a.srcElement)===c[0]}return!1},y.isFocusInFirstItem=function(a,b){return b.length>0?(a.target||a.srcElement)===b[0]:!1},y.isFocusInLastItem=function(a,b){return b.length>0?(a.target||a.srcElement)===b[b.length-1]:!1},y.loadFocusElementList=function(a){if(a){var b=a.value.modalDomEl;if(b&&b.length){var c=b[0].querySelectorAll(B);return c?Array.prototype.filter.call(c,function(a){return k(a)}):c}}},y}]).provider("$uibModal",function(){var a={options:{animation:!0,backdrop:!0,keyboard:!0},$get:["$rootScope","$q","$document","$templateRequest","$controller","$uibResolve","$uibModalStack",function(b,c,d,e,f,g,h){function i(a){return a.template?c.when(a.template):e(angular.isFunction(a.templateUrl)?a.templateUrl():a.templateUrl)}var j={},k=null;return j.getPromiseChain=function(){return k},j.open=function(e){function j(){return q}var l=c.defer(),m=c.defer(),n=c.defer(),o=c.defer(),p={result:l.promise,opened:m.promise,closed:n.promise,rendered:o.promise,close:function(a){return h.close(p,a)},dismiss:function(a){return h.dismiss(p,a)}};if(e=angular.extend({},a.options,e),e.resolve=e.resolve||{},e.appendTo=e.appendTo||d.find("body").eq(0),!e.component&&!e.template&&!e.templateUrl)throw new Error("One of component or template or templateUrl options is required.");var q;q=e.component?c.when(g.resolve(e.resolve,{},null,null)):c.all([i(e),g.resolve(e.resolve,{},null,null)]);var r;return r=k=c.all([k]).then(j,j).then(function(a){function c(b,c,d,e){b.$scope=g,b.$scope.$resolve={},d?b.$scope.$uibModalInstance=p:b.$uibModalInstance=p;var f=c?a[1]:a;angular.forEach(f,function(a,c){e&&(b[c]=a),b.$scope.$resolve[c]=a})}var d=e.scope||b,g=d.$new();g.$close=p.close,g.$dismiss=p.dismiss,g.$on("$destroy",function(){g.$$uibDestructionScheduled||g.$dismiss("$uibUnscheduledDestruction")});var i,j,k={scope:g,deferred:l,renderDeferred:o,closedDeferred:n,animation:e.animation,backdrop:e.backdrop,keyboard:e.keyboard,backdropClass:e.backdropClass,windowTopClass:e.windowTopClass,windowClass:e.windowClass,windowTemplateUrl:e.windowTemplateUrl,ariaLabelledBy:e.ariaLabelledBy,ariaDescribedBy:e.ariaDescribedBy,size:e.size,openedClass:e.openedClass,appendTo:e.appendTo},q={},r={};e.component?(c(q,!1,!0,!1),q.name=e.component,k.component=q):e.controller&&(c(r,!0,!1,!0),j=f(e.controller,r,!0,e.controllerAs),e.controllerAs&&e.bindToController&&(i=j.instance,i.$close=g.$close,i.$dismiss=g.$dismiss,angular.extend(i,{$resolve:r.$scope.$resolve},d)),i=j(),angular.isFunction(i.$onInit)&&i.$onInit()),e.component||(k.content=a[0]),h.open(p,k),m.resolve(!0)},function(a){m.reject(a),l.reject(a)})["finally"](function(){k===r&&(k=null)}),p},j}]};return a}),angular.module("ui.bootstrap.paging",[]).factory("uibPaging",["$parse",function(a){return{create:function(b,c,d){b.setNumPages=d.numPages?a(d.numPages).assign:angular.noop,b.ngModelCtrl={$setViewValue:angular.noop},b._watchers=[],b.init=function(a,e){b.ngModelCtrl=a,b.config=e,a.$render=function(){b.render()},d.itemsPerPage?b._watchers.push(c.$parent.$watch(d.itemsPerPage,function(a){b.itemsPerPage=parseInt(a,10),c.totalPages=b.calculateTotalPages(),b.updatePage()})):b.itemsPerPage=e.itemsPerPage,c.$watch("totalItems",function(a,d){(angular.isDefined(a)||a!==d)&&(c.totalPages=b.calculateTotalPages(),b.updatePage())})},b.calculateTotalPages=function(){var a=b.itemsPerPage<1?1:Math.ceil(c.totalItems/b.itemsPerPage);return Math.max(a||0,1)},b.render=function(){c.page=parseInt(b.ngModelCtrl.$viewValue,10)||1},c.selectPage=function(a,d){d&&d.preventDefault();var e=!c.ngDisabled||!d;e&&c.page!==a&&a>0&&a<=c.totalPages&&(d&&d.target&&d.target.blur(),b.ngModelCtrl.$setViewValue(a),b.ngModelCtrl.$render())},c.getText=function(a){return c[a+"Text"]||b.config[a+"Text"]},c.noPrevious=function(){return 1===c.page},c.noNext=function(){return c.page===c.totalPages},b.updatePage=function(){b.setNumPages(c.$parent,c.totalPages),c.page>c.totalPages?c.selectPage(c.totalPages):b.ngModelCtrl.$render()},c.$on("$destroy",function(){for(;b._watchers.length;)b._watchers.shift()()})}}}]),angular.module("ui.bootstrap.pager",["ui.bootstrap.paging","ui.bootstrap.tabindex"]).controller("UibPagerController",["$scope","$attrs","uibPaging","uibPagerConfig",function(a,b,c,d){a.align=angular.isDefined(b.align)?a.$parent.$eval(b.align):d.align,c.create(this,a,b)}]).constant("uibPagerConfig",{itemsPerPage:10,previousText:"« Previous",nextText:"Next »",align:!0}).directive("uibPager",["uibPagerConfig",function(a){return{scope:{totalItems:"=",previousText:"@",nextText:"@",ngDisabled:"="},require:["uibPager","?ngModel"],restrict:"A",controller:"UibPagerController",controllerAs:"pager",templateUrl:function(a,b){return b.templateUrl||"uib/template/pager/pager.html"},link:function(b,c,d,e){c.addClass("pager");var f=e[0],g=e[1];g&&f.init(g,a)}}}]),angular.module("ui.bootstrap.pagination",["ui.bootstrap.paging","ui.bootstrap.tabindex"]).controller("UibPaginationController",["$scope","$attrs","$parse","uibPaging","uibPaginationConfig",function(a,b,c,d,e){function f(a,b,c){return{number:a,text:b,active:c}}function g(a,b){var c=[],d=1,e=b,g=angular.isDefined(i)&&b>i;g&&(j?(d=Math.max(a-Math.floor(i/2),1),e=d+i-1,e>b&&(e=b,d=e-i+1)):(d=(Math.ceil(a/i)-1)*i+1,e=Math.min(d+i-1,b)));for(var h=d;e>=h;h++){var n=f(h,m(h),h===a);c.push(n)}if(g&&i>0&&(!j||k||l)){if(d>1){if(!l||d>3){var o=f(d-1,"...",!1);c.unshift(o);
}if(l){if(3===d){var p=f(2,"2",!1);c.unshift(p)}var q=f(1,"1",!1);c.unshift(q)}}if(b>e){if(!l||b-2>e){var r=f(e+1,"...",!1);c.push(r)}if(l){if(e===b-2){var s=f(b-1,b-1,!1);c.push(s)}var t=f(b,b,!1);c.push(t)}}}return c}var h=this,i=angular.isDefined(b.maxSize)?a.$parent.$eval(b.maxSize):e.maxSize,j=angular.isDefined(b.rotate)?a.$parent.$eval(b.rotate):e.rotate,k=angular.isDefined(b.forceEllipses)?a.$parent.$eval(b.forceEllipses):e.forceEllipses,l=angular.isDefined(b.boundaryLinkNumbers)?a.$parent.$eval(b.boundaryLinkNumbers):e.boundaryLinkNumbers,m=angular.isDefined(b.pageLabel)?function(c){return a.$parent.$eval(b.pageLabel,{$page:c})}:angular.identity;a.boundaryLinks=angular.isDefined(b.boundaryLinks)?a.$parent.$eval(b.boundaryLinks):e.boundaryLinks,a.directionLinks=angular.isDefined(b.directionLinks)?a.$parent.$eval(b.directionLinks):e.directionLinks,d.create(this,a,b),b.maxSize&&h._watchers.push(a.$parent.$watch(c(b.maxSize),function(a){i=parseInt(a,10),h.render()}));var n=this.render;this.render=function(){n(),a.page>0&&a.page<=a.totalPages&&(a.pages=g(a.page,a.totalPages))}}]).constant("uibPaginationConfig",{itemsPerPage:10,boundaryLinks:!1,boundaryLinkNumbers:!1,directionLinks:!0,firstText:"First",previousText:"Previous",nextText:"Next",lastText:"Last",rotate:!0,forceEllipses:!1}).directive("uibPagination",["$parse","uibPaginationConfig",function(a,b){return{scope:{totalItems:"=",firstText:"@",previousText:"@",nextText:"@",lastText:"@",ngDisabled:"="},require:["uibPagination","?ngModel"],restrict:"A",controller:"UibPaginationController",controllerAs:"pagination",templateUrl:function(a,b){return b.templateUrl||"uib/template/pagination/pagination.html"},link:function(a,c,d,e){c.addClass("pagination");var f=e[0],g=e[1];g&&f.init(g,b)}}}]),angular.module("ui.bootstrap.tooltip",["ui.bootstrap.position","ui.bootstrap.stackedMap"]).provider("$uibTooltip",function(){function a(a){var b=/[A-Z]/g,c="-";return a.replace(b,function(a,b){return(b?c:"")+a.toLowerCase()})}var b={placement:"top",placementClassPrefix:"",animation:!0,popupDelay:0,popupCloseDelay:0,useContentExp:!1},c={mouseenter:"mouseleave",click:"click",outsideClick:"outsideClick",focus:"blur",none:""},d={};this.options=function(a){angular.extend(d,a)},this.setTriggers=function(a){angular.extend(c,a)},this.$get=["$window","$compile","$timeout","$document","$uibPosition","$interpolate","$rootScope","$parse","$$stackedMap",function(e,f,g,h,i,j,k,l,m){function n(a){if(27===a.which){var b=o.top();b&&(b.value.close(),b=null)}}var o=m.createNew();return h.on("keyup",n),k.$on("$destroy",function(){h.off("keyup",n)}),function(e,k,m,n){function p(a){var b=(a||n.trigger||m).split(" "),d=b.map(function(a){return c[a]||a});return{show:b,hide:d}}n=angular.extend({},b,d,n);var q=a(e),r=j.startSymbol(),s=j.endSymbol(),t="<div "+q+'-popup uib-title="'+r+"title"+s+'" '+(n.useContentExp?'content-exp="contentExp()" ':'content="'+r+"content"+s+'" ')+'origin-scope="origScope" class="uib-position-measure '+k+'" tooltip-animation-class="fade"uib-tooltip-classes ng-class="{ in: isOpen }" ></div>';return{compile:function(a,b){var c=f(t);return function(a,b,d,f){function j(){N.isOpen?q():m()}function m(){M&&!a.$eval(d[k+"Enable"])||(u(),x(),N.popupDelay?G||(G=g(r,N.popupDelay,!1)):r())}function q(){s(),N.popupCloseDelay?H||(H=g(t,N.popupCloseDelay,!1)):t()}function r(){return s(),u(),N.content?(v(),void N.$evalAsync(function(){N.isOpen=!0,y(!0),S()})):angular.noop}function s(){G&&(g.cancel(G),G=null),I&&(g.cancel(I),I=null)}function t(){N&&N.$evalAsync(function(){N&&(N.isOpen=!1,y(!1),N.animation?F||(F=g(w,150,!1)):w())})}function u(){H&&(g.cancel(H),H=null),F&&(g.cancel(F),F=null)}function v(){D||(E=N.$new(),D=c(E,function(a){K?h.find("body").append(a):b.after(a)}),o.add(N,{close:t}),z())}function w(){s(),u(),A(),D&&(D.remove(),D=null),o.remove(N),E&&(E.$destroy(),E=null)}function x(){N.title=d[k+"Title"],Q?N.content=Q(a):N.content=d[e],N.popupClass=d[k+"Class"],N.placement=angular.isDefined(d[k+"Placement"])?d[k+"Placement"]:n.placement;var b=i.parsePlacement(N.placement);J=b[1]?b[0]+"-"+b[1]:b[0];var c=parseInt(d[k+"PopupDelay"],10),f=parseInt(d[k+"PopupCloseDelay"],10);N.popupDelay=isNaN(c)?n.popupDelay:c,N.popupCloseDelay=isNaN(f)?n.popupCloseDelay:f}function y(b){P&&angular.isFunction(P.assign)&&P.assign(a,b)}function z(){R.length=0,Q?(R.push(a.$watch(Q,function(a){N.content=a,!a&&N.isOpen&&t()})),R.push(E.$watch(function(){O||(O=!0,E.$$postDigest(function(){O=!1,N&&N.isOpen&&S()}))}))):R.push(d.$observe(e,function(a){N.content=a,!a&&N.isOpen?t():S()})),R.push(d.$observe(k+"Title",function(a){N.title=a,N.isOpen&&S()})),R.push(d.$observe(k+"Placement",function(a){N.placement=a?a:n.placement,N.isOpen&&S()}))}function A(){R.length&&(angular.forEach(R,function(a){a()}),R.length=0)}function B(a){N&&N.isOpen&&D&&(b[0].contains(a.target)||D[0].contains(a.target)||q())}function C(){var c=[],e=[],f=a.$eval(d[k+"Trigger"]);T(),angular.isObject(f)?(Object.keys(f).forEach(function(a){c.push(a),e.push(f[a])}),L={show:c,hide:e}):L=p(f),"none"!==L.show&&L.show.forEach(function(a,c){"outsideClick"===a?(b.on("click",j),h.on("click",B)):a===L.hide[c]?b.on(a,j):a&&(b.on(a,m),b.on(L.hide[c],q)),b.on("keypress",function(a){27===a.which&&q()})})}var D,E,F,G,H,I,J,K=angular.isDefined(n.appendToBody)?n.appendToBody:!1,L=p(void 0),M=angular.isDefined(d[k+"Enable"]),N=a.$new(!0),O=!1,P=angular.isDefined(d[k+"IsOpen"])?l(d[k+"IsOpen"]):!1,Q=n.useContentExp?l(d[e]):!1,R=[],S=function(){D&&D.html()&&(I||(I=g(function(){var a=i.positionElements(b,D,N.placement,K),c=angular.isDefined(D.offsetHeight)?D.offsetHeight:D.prop("offsetHeight"),d=K?i.offset(b):i.position(b);D.css({top:a.top+"px",left:a.left+"px"});var e=a.placement.split("-");D.hasClass(e[0])||(D.removeClass(J.split("-")[0]),D.addClass(e[0])),D.hasClass(n.placementClassPrefix+a.placement)||(D.removeClass(n.placementClassPrefix+J),D.addClass(n.placementClassPrefix+a.placement)),g(function(){var a=angular.isDefined(D.offsetHeight)?D.offsetHeight:D.prop("offsetHeight"),b=i.adjustTop(e,d,c,a);b&&D.css(b)},0,!1),D.hasClass("uib-position-measure")?(i.positionArrow(D,a.placement),D.removeClass("uib-position-measure")):J!==a.placement&&i.positionArrow(D,a.placement),J=a.placement,I=null},0,!1)))};N.origScope=a,N.isOpen=!1,N.contentExp=function(){return N.content},d.$observe("disabled",function(a){a&&s(),a&&N.isOpen&&t()}),P&&a.$watch(P,function(a){N&&!a===N.isOpen&&j()});var T=function(){L.show.forEach(function(a){"outsideClick"===a?b.off("click",j):(b.off(a,m),b.off(a,j))}),L.hide.forEach(function(a){"outsideClick"===a?h.off("click",B):b.off(a,q)})};C();var U=a.$eval(d[k+"Animation"]);N.animation=angular.isDefined(U)?!!U:n.animation;var V,W=k+"AppendToBody";V=W in d&&void 0===d[W]?!0:a.$eval(d[W]),K=angular.isDefined(V)?V:K,a.$on("$destroy",function(){T(),w(),N=null})}}}}}]}).directive("uibTooltipTemplateTransclude",["$animate","$sce","$compile","$templateRequest",function(a,b,c,d){return{link:function(e,f,g){var h,i,j,k=e.$eval(g.tooltipTemplateTranscludeScope),l=0,m=function(){i&&(i.remove(),i=null),h&&(h.$destroy(),h=null),j&&(a.leave(j).then(function(){i=null}),i=j,j=null)};e.$watch(b.parseAsResourceUrl(g.uibTooltipTemplateTransclude),function(b){var g=++l;b?(d(b,!0).then(function(d){if(g===l){var e=k.$new(),i=d,n=c(i)(e,function(b){m(),a.enter(b,f)});h=e,j=n,h.$emit("$includeContentLoaded",b)}},function(){g===l&&(m(),e.$emit("$includeContentError",b))}),e.$emit("$includeContentRequested",b)):m()}),e.$on("$destroy",m)}}}]).directive("uibTooltipClasses",["$uibPosition",function(a){return{restrict:"A",link:function(b,c,d){if(b.placement){var e=a.parsePlacement(b.placement);c.addClass(e[0])}b.popupClass&&c.addClass(b.popupClass),b.animation&&c.addClass(d.tooltipAnimationClass)}}}]).directive("uibTooltipPopup",function(){return{restrict:"A",scope:{content:"@"},templateUrl:"uib/template/tooltip/tooltip-popup.html"}}).directive("uibTooltip",["$uibTooltip",function(a){return a("uibTooltip","tooltip","mouseenter")}]).directive("uibTooltipTemplatePopup",function(){return{restrict:"A",scope:{contentExp:"&",originScope:"&"},templateUrl:"uib/template/tooltip/tooltip-template-popup.html"}}).directive("uibTooltipTemplate",["$uibTooltip",function(a){return a("uibTooltipTemplate","tooltip","mouseenter",{useContentExp:!0})}]).directive("uibTooltipHtmlPopup",function(){return{restrict:"A",scope:{contentExp:"&"},templateUrl:"uib/template/tooltip/tooltip-html-popup.html"}}).directive("uibTooltipHtml",["$uibTooltip",function(a){return a("uibTooltipHtml","tooltip","mouseenter",{useContentExp:!0})}]),angular.module("ui.bootstrap.popover",["ui.bootstrap.tooltip"]).directive("uibPopoverTemplatePopup",function(){return{restrict:"A",scope:{uibTitle:"@",contentExp:"&",originScope:"&"},templateUrl:"uib/template/popover/popover-template.html"}}).directive("uibPopoverTemplate",["$uibTooltip",function(a){return a("uibPopoverTemplate","popover","click",{useContentExp:!0})}]).directive("uibPopoverHtmlPopup",function(){return{restrict:"A",scope:{contentExp:"&",uibTitle:"@"},templateUrl:"uib/template/popover/popover-html.html"}}).directive("uibPopoverHtml",["$uibTooltip",function(a){return a("uibPopoverHtml","popover","click",{useContentExp:!0})}]).directive("uibPopoverPopup",function(){return{restrict:"A",scope:{uibTitle:"@",content:"@"},templateUrl:"uib/template/popover/popover.html"}}).directive("uibPopover",["$uibTooltip",function(a){return a("uibPopover","popover","click")}]),angular.module("ui.bootstrap.progressbar",[]).constant("uibProgressConfig",{animate:!0,max:100}).controller("UibProgressController",["$scope","$attrs","uibProgressConfig",function(a,b,c){function d(){return angular.isDefined(a.maxParam)?a.maxParam:c.max}var e=this,f=angular.isDefined(b.animate)?a.$parent.$eval(b.animate):c.animate;this.bars=[],a.max=d(),this.addBar=function(a,b,c){f||b.css({transition:"none"}),this.bars.push(a),a.max=d(),a.title=c&&angular.isDefined(c.title)?c.title:"progressbar",a.$watch("value",function(b){a.recalculatePercentage()}),a.recalculatePercentage=function(){var b=e.bars.reduce(function(a,b){return b.percent=+(100*b.value/b.max).toFixed(2),a+b.percent},0);b>100&&(a.percent-=b-100)},a.$on("$destroy",function(){b=null,e.removeBar(a)})},this.removeBar=function(a){this.bars.splice(this.bars.indexOf(a),1),this.bars.forEach(function(a){a.recalculatePercentage()})},a.$watch("maxParam",function(a){e.bars.forEach(function(a){a.max=d(),a.recalculatePercentage()})})}]).directive("uibProgress",function(){return{replace:!0,transclude:!0,controller:"UibProgressController",require:"uibProgress",scope:{maxParam:"=?max"},templateUrl:"uib/template/progressbar/progress.html"}}).directive("uibBar",function(){return{replace:!0,transclude:!0,require:"^uibProgress",scope:{value:"=",type:"@"},templateUrl:"uib/template/progressbar/bar.html",link:function(a,b,c,d){d.addBar(a,b,c)}}}).directive("uibProgressbar",function(){return{replace:!0,transclude:!0,controller:"UibProgressController",scope:{value:"=",maxParam:"=?max",type:"@"},templateUrl:"uib/template/progressbar/progressbar.html",link:function(a,b,c,d){d.addBar(a,angular.element(b.children()[0]),{title:c.title})}}}),angular.module("ui.bootstrap.rating",[]).constant("uibRatingConfig",{max:5,stateOn:null,stateOff:null,enableReset:!0,titles:["one","two","three","four","five"]}).controller("UibRatingController",["$scope","$attrs","uibRatingConfig",function(a,b,c){var d={$setViewValue:angular.noop},e=this;this.init=function(e){d=e,d.$render=this.render,d.$formatters.push(function(a){return angular.isNumber(a)&&a<<0!==a&&(a=Math.round(a)),a}),this.stateOn=angular.isDefined(b.stateOn)?a.$parent.$eval(b.stateOn):c.stateOn,this.stateOff=angular.isDefined(b.stateOff)?a.$parent.$eval(b.stateOff):c.stateOff,this.enableReset=angular.isDefined(b.enableReset)?a.$parent.$eval(b.enableReset):c.enableReset;var f=angular.isDefined(b.titles)?a.$parent.$eval(b.titles):c.titles;this.titles=angular.isArray(f)&&f.length>0?f:c.titles;var g=angular.isDefined(b.ratingStates)?a.$parent.$eval(b.ratingStates):new Array(angular.isDefined(b.max)?a.$parent.$eval(b.max):c.max);a.range=this.buildTemplateObjects(g)},this.buildTemplateObjects=function(a){for(var b=0,c=a.length;c>b;b++)a[b]=angular.extend({index:b},{stateOn:this.stateOn,stateOff:this.stateOff,title:this.getTitle(b)},a[b]);return a},this.getTitle=function(a){return a>=this.titles.length?a+1:this.titles[a]},a.rate=function(b){if(!a.readonly&&b>=0&&b<=a.range.length){var c=e.enableReset&&d.$viewValue===b?0:b;d.$setViewValue(c),d.$render()}},a.enter=function(b){a.readonly||(a.value=b),a.onHover({value:b})},a.reset=function(){a.value=d.$viewValue,a.onLeave()},a.onKeydown=function(b){/(37|38|39|40)/.test(b.which)&&(b.preventDefault(),b.stopPropagation(),a.rate(a.value+(38===b.which||39===b.which?1:-1)))},this.render=function(){a.value=d.$viewValue,a.title=e.getTitle(a.value-1)}}]).directive("uibRating",function(){return{require:["uibRating","ngModel"],restrict:"A",scope:{readonly:"=?readOnly",onHover:"&",onLeave:"&"},controller:"UibRatingController",templateUrl:"uib/template/rating/rating.html",link:function(a,b,c,d){var e=d[0],f=d[1];e.init(f)}}}),angular.module("ui.bootstrap.tabs",[]).controller("UibTabsetController",["$scope",function(a){function b(a){for(var b=0;b<d.tabs.length;b++)if(d.tabs[b].index===a)return b}var c,d=this;d.tabs=[],d.select=function(a,f){if(!e){var g=b(c),h=d.tabs[g];if(h){if(h.tab.onDeselect({$event:f,$selectedIndex:a}),f&&f.isDefaultPrevented())return;h.tab.active=!1}var i=d.tabs[a];i?(i.tab.onSelect({$event:f}),i.tab.active=!0,d.active=i.index,c=i.index):!i&&angular.isDefined(c)&&(d.active=null,c=null)}},d.addTab=function(a){if(d.tabs.push({tab:a,index:a.index}),d.tabs.sort(function(a,b){return a.index>b.index?1:a.index<b.index?-1:0}),a.index===d.active||!angular.isDefined(d.active)&&1===d.tabs.length){var c=b(a.index);d.select(c)}},d.removeTab=function(a){for(var b,c=0;c<d.tabs.length;c++)if(d.tabs[c].tab===a){b=c;break}if(d.tabs[b].index===d.active){var e=b===d.tabs.length-1?b-1:b+1%d.tabs.length;d.select(e)}d.tabs.splice(b,1)},a.$watch("tabset.active",function(a){angular.isDefined(a)&&a!==c&&d.select(b(a))});var e;a.$on("$destroy",function(){e=!0})}]).directive("uibTabset",function(){return{transclude:!0,replace:!0,scope:{},bindToController:{active:"=?",type:"@"},controller:"UibTabsetController",controllerAs:"tabset",templateUrl:function(a,b){return b.templateUrl||"uib/template/tabs/tabset.html"},link:function(a,b,c){a.vertical=angular.isDefined(c.vertical)?a.$parent.$eval(c.vertical):!1,a.justified=angular.isDefined(c.justified)?a.$parent.$eval(c.justified):!1}}}).directive("uibTab",["$parse",function(a){return{require:"^uibTabset",replace:!0,templateUrl:function(a,b){return b.templateUrl||"uib/template/tabs/tab.html"},transclude:!0,scope:{heading:"@",index:"=?",classes:"@?",onSelect:"&select",onDeselect:"&deselect"},controller:function(){},controllerAs:"tab",link:function(b,c,d,e,f){b.disabled=!1,d.disable&&b.$parent.$watch(a(d.disable),function(a){b.disabled=!!a}),angular.isUndefined(d.index)&&(e.tabs&&e.tabs.length?b.index=Math.max.apply(null,e.tabs.map(function(a){return a.index}))+1:b.index=0),angular.isUndefined(d.classes)&&(b.classes=""),b.select=function(a){if(!b.disabled){for(var c,d=0;d<e.tabs.length;d++)if(e.tabs[d].tab===b){c=d;break}e.select(c,a)}},e.addTab(b),b.$on("$destroy",function(){e.removeTab(b)}),b.$transcludeFn=f}}}]).directive("uibTabHeadingTransclude",function(){return{restrict:"A",require:"^uibTab",link:function(a,b){a.$watch("headingElement",function(a){a&&(b.html(""),b.append(a))})}}}).directive("uibTabContentTransclude",function(){function a(a){return a.tagName&&(a.hasAttribute("uib-tab-heading")||a.hasAttribute("data-uib-tab-heading")||a.hasAttribute("x-uib-tab-heading")||"uib-tab-heading"===a.tagName.toLowerCase()||"data-uib-tab-heading"===a.tagName.toLowerCase()||"x-uib-tab-heading"===a.tagName.toLowerCase()||"uib:tab-heading"===a.tagName.toLowerCase())}return{restrict:"A",require:"^uibTabset",link:function(b,c,d){var e=b.$eval(d.uibTabContentTransclude).tab;e.$transcludeFn(e.$parent,function(b){angular.forEach(b,function(b){a(b)?e.headingElement=b:c.append(b)})})}}}),angular.module("ui.bootstrap.timepicker",[]).constant("uibTimepickerConfig",{hourStep:1,minuteStep:1,secondStep:1,showMeridian:!0,showSeconds:!1,meridians:null,readonlyInput:!1,mousewheel:!0,arrowkeys:!0,showSpinners:!0,templateUrl:"uib/template/timepicker/timepicker.html"}).controller("UibTimepickerController",["$scope","$element","$attrs","$parse","$log","$locale","uibTimepickerConfig",function(a,b,c,d,e,f,g){function h(){var b=+a.hours,c=a.showMeridian?b>0&&13>b:b>=0&&24>b;return c&&""!==a.hours?(a.showMeridian&&(12===b&&(b=0),a.meridian===v[1]&&(b+=12)),b):void 0}function i(){var b=+a.minutes,c=b>=0&&60>b;return c&&""!==a.minutes?b:void 0}function j(){var b=+a.seconds;return b>=0&&60>b?b:void 0}function k(a,b){return null===a?"":angular.isDefined(a)&&a.toString().length<2&&!b?"0"+a:a.toString()}function l(a){m(),u.$setViewValue(new Date(s)),n(a)}function m(){u.$setValidity("time",!0),a.invalidHours=!1,a.invalidMinutes=!1,a.invalidSeconds=!1}function n(b){if(u.$modelValue){var c=s.getHours(),d=s.getMinutes(),e=s.getSeconds();a.showMeridian&&(c=0===c||12===c?12:c%12),a.hours="h"===b?c:k(c,!w),"m"!==b&&(a.minutes=k(d)),a.meridian=s.getHours()<12?v[0]:v[1],"s"!==b&&(a.seconds=k(e)),a.meridian=s.getHours()<12?v[0]:v[1]}else a.hours=null,a.minutes=null,a.seconds=null,a.meridian=v[0]}function o(a){s=q(s,a),l()}function p(a,b){return q(a,60*b)}function q(a,b){var c=new Date(a.getTime()+1e3*b),d=new Date(a);return d.setHours(c.getHours(),c.getMinutes(),c.getSeconds()),d}function r(){return(null===a.hours||""===a.hours)&&(null===a.minutes||""===a.minutes)&&(!a.showSeconds||a.showSeconds&&(null===a.seconds||""===a.seconds))}var s=new Date,t=[],u={$setViewValue:angular.noop},v=angular.isDefined(c.meridians)?a.$parent.$eval(c.meridians):g.meridians||f.DATETIME_FORMATS.AMPMS,w=angular.isDefined(c.padHours)?a.$parent.$eval(c.padHours):!0;a.tabindex=angular.isDefined(c.tabindex)?c.tabindex:0,b.removeAttr("tabindex"),this.init=function(b,d){u=b,u.$render=this.render,u.$formatters.unshift(function(a){return a?new Date(a):null});var e=d.eq(0),f=d.eq(1),h=d.eq(2),i=angular.isDefined(c.mousewheel)?a.$parent.$eval(c.mousewheel):g.mousewheel;i&&this.setupMousewheelEvents(e,f,h);var j=angular.isDefined(c.arrowkeys)?a.$parent.$eval(c.arrowkeys):g.arrowkeys;j&&this.setupArrowkeyEvents(e,f,h),a.readonlyInput=angular.isDefined(c.readonlyInput)?a.$parent.$eval(c.readonlyInput):g.readonlyInput,this.setupInputEvents(e,f,h)};var x=g.hourStep;c.hourStep&&t.push(a.$parent.$watch(d(c.hourStep),function(a){x=+a}));var y=g.minuteStep;c.minuteStep&&t.push(a.$parent.$watch(d(c.minuteStep),function(a){y=+a}));var z;t.push(a.$parent.$watch(d(c.min),function(a){var b=new Date(a);z=isNaN(b)?void 0:b}));var A;t.push(a.$parent.$watch(d(c.max),function(a){var b=new Date(a);A=isNaN(b)?void 0:b}));var B=!1;c.ngDisabled&&t.push(a.$parent.$watch(d(c.ngDisabled),function(a){B=a})),a.noIncrementHours=function(){var a=p(s,60*x);return B||a>A||s>a&&z>a},a.noDecrementHours=function(){var a=p(s,60*-x);return B||z>a||a>s&&a>A},a.noIncrementMinutes=function(){var a=p(s,y);return B||a>A||s>a&&z>a},a.noDecrementMinutes=function(){var a=p(s,-y);return B||z>a||a>s&&a>A},a.noIncrementSeconds=function(){var a=q(s,C);return B||a>A||s>a&&z>a},a.noDecrementSeconds=function(){var a=q(s,-C);return B||z>a||a>s&&a>A},a.noToggleMeridian=function(){return s.getHours()<12?B||p(s,720)>A:B||p(s,-720)<z};var C=g.secondStep;c.secondStep&&t.push(a.$parent.$watch(d(c.secondStep),function(a){C=+a})),a.showSeconds=g.showSeconds,c.showSeconds&&t.push(a.$parent.$watch(d(c.showSeconds),function(b){a.showSeconds=!!b})),a.showMeridian=g.showMeridian,c.showMeridian&&t.push(a.$parent.$watch(d(c.showMeridian),function(b){if(a.showMeridian=!!b,u.$error.time){var c=h(),d=i();angular.isDefined(c)&&angular.isDefined(d)&&(s.setHours(c),l())}else n()})),this.setupMousewheelEvents=function(b,c,d){var e=function(a){a.originalEvent&&(a=a.originalEvent);var b=a.wheelDelta?a.wheelDelta:-a.deltaY;return a.detail||b>0};b.bind("mousewheel wheel",function(b){B||a.$apply(e(b)?a.incrementHours():a.decrementHours()),b.preventDefault()}),c.bind("mousewheel wheel",function(b){B||a.$apply(e(b)?a.incrementMinutes():a.decrementMinutes()),b.preventDefault()}),d.bind("mousewheel wheel",function(b){B||a.$apply(e(b)?a.incrementSeconds():a.decrementSeconds()),b.preventDefault()})},this.setupArrowkeyEvents=function(b,c,d){b.bind("keydown",function(b){B||(38===b.which?(b.preventDefault(),a.incrementHours(),a.$apply()):40===b.which&&(b.preventDefault(),a.decrementHours(),a.$apply()))}),c.bind("keydown",function(b){B||(38===b.which?(b.preventDefault(),a.incrementMinutes(),a.$apply()):40===b.which&&(b.preventDefault(),a.decrementMinutes(),a.$apply()))}),d.bind("keydown",function(b){B||(38===b.which?(b.preventDefault(),a.incrementSeconds(),a.$apply()):40===b.which&&(b.preventDefault(),a.decrementSeconds(),a.$apply()))})},this.setupInputEvents=function(b,c,d){if(a.readonlyInput)return a.updateHours=angular.noop,a.updateMinutes=angular.noop,void(a.updateSeconds=angular.noop);var e=function(b,c,d){u.$setViewValue(null),u.$setValidity("time",!1),angular.isDefined(b)&&(a.invalidHours=b),angular.isDefined(c)&&(a.invalidMinutes=c),angular.isDefined(d)&&(a.invalidSeconds=d)};a.updateHours=function(){var a=h(),b=i();u.$setDirty(),angular.isDefined(a)&&angular.isDefined(b)?(s.setHours(a),s.setMinutes(b),z>s||s>A?e(!0):l("h")):e(!0)},b.bind("blur",function(b){u.$setTouched(),r()?m():null===a.hours||""===a.hours?e(!0):!a.invalidHours&&a.hours<10&&a.$apply(function(){a.hours=k(a.hours,!w)})}),a.updateMinutes=function(){var a=i(),b=h();u.$setDirty(),angular.isDefined(a)&&angular.isDefined(b)?(s.setHours(b),s.setMinutes(a),z>s||s>A?e(void 0,!0):l("m")):e(void 0,!0)},c.bind("blur",function(b){u.$setTouched(),r()?m():null===a.minutes?e(void 0,!0):!a.invalidMinutes&&a.minutes<10&&a.$apply(function(){a.minutes=k(a.minutes)})}),a.updateSeconds=function(){var a=j();u.$setDirty(),angular.isDefined(a)?(s.setSeconds(a),l("s")):e(void 0,void 0,!0)},d.bind("blur",function(b){r()?m():!a.invalidSeconds&&a.seconds<10&&a.$apply(function(){a.seconds=k(a.seconds)})})},this.render=function(){var b=u.$viewValue;isNaN(b)?(u.$setValidity("time",!1),e.error('Timepicker directive: "ng-model" value must be a Date object, a number of milliseconds since 01.01.1970 or a string representing an RFC2822 or ISO 8601 date.')):(b&&(s=b),z>s||s>A?(u.$setValidity("time",!1),a.invalidHours=!0,a.invalidMinutes=!0):m(),n())},a.showSpinners=angular.isDefined(c.showSpinners)?a.$parent.$eval(c.showSpinners):g.showSpinners,a.incrementHours=function(){a.noIncrementHours()||o(60*x*60)},a.decrementHours=function(){a.noDecrementHours()||o(60*-x*60)},a.incrementMinutes=function(){a.noIncrementMinutes()||o(60*y)},a.decrementMinutes=function(){a.noDecrementMinutes()||o(60*-y)},a.incrementSeconds=function(){a.noIncrementSeconds()||o(C)},a.decrementSeconds=function(){a.noDecrementSeconds()||o(-C)},a.toggleMeridian=function(){var b=i(),c=h();a.noToggleMeridian()||(angular.isDefined(b)&&angular.isDefined(c)?o(720*(s.getHours()<12?60:-60)):a.meridian=a.meridian===v[0]?v[1]:v[0])},a.blur=function(){u.$setTouched()},a.$on("$destroy",function(){for(;t.length;)t.shift()()})}]).directive("uibTimepicker",["uibTimepickerConfig",function(a){return{require:["uibTimepicker","?^ngModel"],restrict:"A",controller:"UibTimepickerController",controllerAs:"timepicker",scope:{},templateUrl:function(b,c){return c.templateUrl||a.templateUrl},link:function(a,b,c,d){var e=d[0],f=d[1];f&&e.init(f,b.find("input"))}}}]),angular.module("ui.bootstrap.typeahead",["ui.bootstrap.debounce","ui.bootstrap.position"]).factory("uibTypeaheadParser",["$parse",function(a){var b=/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w\d]*))\s+in\s+([\s\S]+?)$/;return{parse:function(c){var d=c.match(b);if(!d)throw new Error('Expected typeahead specification in form of "_modelValue_ (as _label_)? for _item_ in _collection_" but got "'+c+'".');return{itemName:d[3],source:a(d[4]),viewMapper:a(d[2]||d[1]),modelMapper:a(d[1])}}}}]).controller("UibTypeaheadController",["$scope","$element","$attrs","$compile","$parse","$q","$timeout","$document","$window","$rootScope","$$debounce","$uibPosition","uibTypeaheadParser",function(a,b,c,d,e,f,g,h,i,j,k,l,m){function n(){O.moveInProgress||(O.moveInProgress=!0,O.$digest()),Z()}function o(){O.position=E?l.offset(b):l.position(b),O.position.top+=b.prop("offsetHeight")}var p,q,r=[9,13,27,38,40],s=200,t=a.$eval(c.typeaheadMinLength);t||0===t||(t=1),a.$watch(c.typeaheadMinLength,function(a){t=a||0===a?a:1});var u=a.$eval(c.typeaheadWaitMs)||0,v=a.$eval(c.typeaheadEditable)!==!1;a.$watch(c.typeaheadEditable,function(a){v=a!==!1});var w,x,y=e(c.typeaheadLoading).assign||angular.noop,z=c.typeaheadShouldSelect?e(c.typeaheadShouldSelect):function(a,b){var c=b.$event;return 13===c.which||9===c.which},A=e(c.typeaheadOnSelect),B=angular.isDefined(c.typeaheadSelectOnBlur)?a.$eval(c.typeaheadSelectOnBlur):!1,C=e(c.typeaheadNoResults).assign||angular.noop,D=c.typeaheadInputFormatter?e(c.typeaheadInputFormatter):void 0,E=c.typeaheadAppendToBody?a.$eval(c.typeaheadAppendToBody):!1,F=c.typeaheadAppendTo?a.$eval(c.typeaheadAppendTo):null,G=a.$eval(c.typeaheadFocusFirst)!==!1,H=c.typeaheadSelectOnExact?a.$eval(c.typeaheadSelectOnExact):!1,I=e(c.typeaheadIsOpen).assign||angular.noop,J=a.$eval(c.typeaheadShowHint)||!1,K=e(c.ngModel),L=e(c.ngModel+"($$$p)"),M=function(b,c){return angular.isFunction(K(a))&&q&&q.$options&&q.$options.getterSetter?L(b,{$$$p:c}):K.assign(b,c)},N=m.parse(c.uibTypeahead),O=a.$new(),P=a.$on("$destroy",function(){O.$destroy()});O.$on("$destroy",P);var Q="typeahead-"+O.$id+"-"+Math.floor(1e4*Math.random());b.attr({"aria-autocomplete":"list","aria-expanded":!1,"aria-owns":Q});var R,S;J&&(R=angular.element("<div></div>"),R.css("position","relative"),b.after(R),S=b.clone(),S.attr("placeholder",""),S.attr("tabindex","-1"),S.val(""),S.css({position:"absolute",top:"0px",left:"0px","border-color":"transparent","box-shadow":"none",opacity:1,background:"none 0% 0% / auto repeat scroll padding-box border-box rgb(255, 255, 255)",color:"#999"}),b.css({position:"relative","vertical-align":"top","background-color":"transparent"}),S.attr("id")&&S.removeAttr("id"),R.append(S),S.after(b));var T=angular.element("<div uib-typeahead-popup></div>");T.attr({id:Q,matches:"matches",active:"activeIdx",select:"select(activeIdx, evt)","move-in-progress":"moveInProgress",query:"query",position:"position","assign-is-open":"assignIsOpen(isOpen)",debounce:"debounceUpdate"}),angular.isDefined(c.typeaheadTemplateUrl)&&T.attr("template-url",c.typeaheadTemplateUrl),angular.isDefined(c.typeaheadPopupTemplateUrl)&&T.attr("popup-template-url",c.typeaheadPopupTemplateUrl);var U=function(){J&&S.val("")},V=function(){O.matches=[],O.activeIdx=-1,b.attr("aria-expanded",!1),U()},W=function(a){return Q+"-option-"+a};O.$watch("activeIdx",function(a){0>a?b.removeAttr("aria-activedescendant"):b.attr("aria-activedescendant",W(a))});var X=function(a,b){return O.matches.length>b&&a?a.toUpperCase()===O.matches[b].label.toUpperCase():!1},Y=function(c,d){var e={$viewValue:c};y(a,!0),C(a,!1),f.when(N.source(a,e)).then(function(f){var g=c===p.$viewValue;if(g&&w)if(f&&f.length>0){O.activeIdx=G?0:-1,C(a,!1),O.matches.length=0;for(var h=0;h<f.length;h++)e[N.itemName]=f[h],O.matches.push({id:W(h),label:N.viewMapper(O,e),model:f[h]});if(O.query=c,o(),b.attr("aria-expanded",!0),H&&1===O.matches.length&&X(c,0)&&(angular.isNumber(O.debounceUpdate)||angular.isObject(O.debounceUpdate)?k(function(){O.select(0,d)},angular.isNumber(O.debounceUpdate)?O.debounceUpdate:O.debounceUpdate["default"]):O.select(0,d)),J){var i=O.matches[0].label;angular.isString(c)&&c.length>0&&i.slice(0,c.length).toUpperCase()===c.toUpperCase()?S.val(c+i.slice(c.length)):S.val("")}}else V(),C(a,!0);g&&y(a,!1)},function(){V(),y(a,!1),C(a,!0)})};E&&(angular.element(i).on("resize",n),h.find("body").on("scroll",n));var Z=k(function(){O.matches.length&&o(),O.moveInProgress=!1},s);O.moveInProgress=!1,O.query=void 0;var $,_=function(a){$=g(function(){Y(a)},u)},aa=function(){$&&g.cancel($)};V(),O.assignIsOpen=function(b){I(a,b)},O.select=function(d,e){var f,h,i={};x=!0,i[N.itemName]=h=O.matches[d].model,f=N.modelMapper(a,i),M(a,f),p.$setValidity("editable",!0),p.$setValidity("parse",!0),A(a,{$item:h,$model:f,$label:N.viewMapper(a,i),$event:e}),V(),O.$eval(c.typeaheadFocusOnSelect)!==!1&&g(function(){b[0].focus()},0,!1)},b.on("keydown",function(b){if(0!==O.matches.length&&-1!==r.indexOf(b.which)){var c=z(a,{$event:b});if(-1===O.activeIdx&&c||9===b.which&&b.shiftKey)return V(),void O.$digest();b.preventDefault();var d;switch(b.which){case 27:b.stopPropagation(),V(),a.$digest();break;case 38:O.activeIdx=(O.activeIdx>0?O.activeIdx:O.matches.length)-1,O.$digest(),d=T[0].querySelectorAll(".uib-typeahead-match")[O.activeIdx],d.parentNode.scrollTop=d.offsetTop;break;case 40:O.activeIdx=(O.activeIdx+1)%O.matches.length,O.$digest(),d=T[0].querySelectorAll(".uib-typeahead-match")[O.activeIdx],d.parentNode.scrollTop=d.offsetTop;break;default:c&&O.$apply(function(){angular.isNumber(O.debounceUpdate)||angular.isObject(O.debounceUpdate)?k(function(){O.select(O.activeIdx,b)},angular.isNumber(O.debounceUpdate)?O.debounceUpdate:O.debounceUpdate["default"]):O.select(O.activeIdx,b)})}}}),b.bind("focus",function(a){w=!0,0!==t||p.$viewValue||g(function(){Y(p.$viewValue,a)},0)}),b.bind("blur",function(a){B&&O.matches.length&&-1!==O.activeIdx&&!x&&(x=!0,O.$apply(function(){angular.isObject(O.debounceUpdate)&&angular.isNumber(O.debounceUpdate.blur)?k(function(){O.select(O.activeIdx,a)},O.debounceUpdate.blur):O.select(O.activeIdx,a)})),!v&&p.$error.editable&&(p.$setViewValue(),O.$apply(function(){p.$setValidity("editable",!0),p.$setValidity("parse",!0)}),b.val("")),w=!1,x=!1});var ba=function(c){b[0]!==c.target&&3!==c.which&&0!==O.matches.length&&(V(),j.$$phase||a.$digest())};h.on("click",ba),a.$on("$destroy",function(){h.off("click",ba),(E||F)&&ca.remove(),E&&(angular.element(i).off("resize",n),h.find("body").off("scroll",n)),T.remove(),J&&R.remove()});var ca=d(T)(O);E?h.find("body").append(ca):F?angular.element(F).eq(0).append(ca):b.after(ca),this.init=function(b,c){p=b,q=c,O.debounceUpdate=p.$options&&e(p.$options.debounce)(a),p.$parsers.unshift(function(b){return w=!0,0===t||b&&b.length>=t?u>0?(aa(),_(b)):Y(b):(y(a,!1),aa(),V()),v?b:b?void p.$setValidity("editable",!1):(p.$setValidity("editable",!0),null)}),p.$formatters.push(function(b){var c,d,e={};return v||p.$setValidity("editable",!0),D?(e.$model=b,D(a,e)):(e[N.itemName]=b,c=N.viewMapper(a,e),e[N.itemName]=void 0,d=N.viewMapper(a,e),c!==d?c:b)})}}]).directive("uibTypeahead",function(){return{controller:"UibTypeaheadController",require:["ngModel","^?ngModelOptions","uibTypeahead"],link:function(a,b,c,d){d[2].init(d[0],d[1])}}}).directive("uibTypeaheadPopup",["$$debounce",function(a){return{scope:{matches:"=",query:"=",active:"=",position:"&",moveInProgress:"=",select:"&",assignIsOpen:"&",debounce:"&"},replace:!0,templateUrl:function(a,b){return b.popupTemplateUrl||"uib/template/typeahead/typeahead-popup.html"},link:function(b,c,d){b.templateUrl=d.templateUrl,b.isOpen=function(){var a=b.matches.length>0;return b.assignIsOpen({isOpen:a}),a},b.isActive=function(a){return b.active===a},b.selectActive=function(a){b.active=a},b.selectMatch=function(c,d){var e=b.debounce();angular.isNumber(e)||angular.isObject(e)?a(function(){b.select({activeIdx:c,evt:d})},angular.isNumber(e)?e:e["default"]):b.select({activeIdx:c,evt:d})}}}}]).directive("uibTypeaheadMatch",["$templateRequest","$compile","$parse",function(a,b,c){return{scope:{index:"=",match:"=",query:"="},link:function(d,e,f){var g=c(f.templateUrl)(d.$parent)||"uib/template/typeahead/typeahead-match.html";
a(g).then(function(a){var c=angular.element(a.trim());e.replaceWith(c),b(c)(d)})}}}]).filter("uibTypeaheadHighlight",["$sce","$injector","$log",function(a,b,c){function d(a){return a.replace(/([.?*+^$[\]\\(){}|-])/g,"\\$1")}function e(a){return/<.*>/g.test(a)}var f;return f=b.has("$sanitize"),function(b,g){return!f&&e(b)&&c.warn("Unsafe use of typeahead please use ngSanitize"),b=g?(""+b).replace(new RegExp(d(g),"gi"),"<strong>$&</strong>"):b,f||(b=a.trustAsHtml(b)),b}}]),angular.module("uib/template/accordion/accordion-group.html",[]).run(["$templateCache",function(a){a.put("uib/template/accordion/accordion-group.html",'<div role="tab" id="{{::headingId}}" aria-selected="{{isOpen}}" class="panel-heading" ng-keypress="toggleOpen($event)">\n  <h4 class="panel-title">\n    <a role="button" data-toggle="collapse" href aria-expanded="{{isOpen}}" aria-controls="{{::panelId}}" tabindex="0" class="accordion-toggle" ng-click="toggleOpen()" uib-accordion-transclude="heading" ng-disabled="isDisabled" uib-tabindex-toggle><span uib-accordion-header ng-class="{\'text-muted\': isDisabled}">{{heading}}</span></a>\n  </h4>\n</div>\n<div id="{{::panelId}}" aria-labelledby="{{::headingId}}" aria-hidden="{{!isOpen}}" role="tabpanel" class="panel-collapse collapse" uib-collapse="!isOpen">\n  <div class="panel-body" ng-transclude></div>\n</div>\n')}]),angular.module("uib/template/accordion/accordion.html",[]).run(["$templateCache",function(a){a.put("uib/template/accordion/accordion.html",'<div role="tablist" class="panel-group" ng-transclude></div>')}]),angular.module("uib/template/alert/alert.html",[]).run(["$templateCache",function(a){a.put("uib/template/alert/alert.html",'<button ng-show="closeable" type="button" class="close" ng-click="close({$event: $event})">\n  <span aria-hidden="true">&times;</span>\n  <span class="sr-only">Close</span>\n</button>\n<div ng-transclude></div>\n')}]),angular.module("uib/template/carousel/carousel.html",[]).run(["$templateCache",function(a){a.put("uib/template/carousel/carousel.html",'<div class="carousel-inner" ng-transclude></div>\n<a role="button" href class="left carousel-control" ng-click="prev()" ng-class="{ disabled: isPrevDisabled() }" ng-show="slides.length > 1">\n  <span aria-hidden="true" class="glyphicon glyphicon-chevron-left"></span>\n  <span class="sr-only">previous</span>\n</a>\n<a role="button" href class="right carousel-control" ng-click="next()" ng-class="{ disabled: isNextDisabled() }" ng-show="slides.length > 1">\n  <span aria-hidden="true" class="glyphicon glyphicon-chevron-right"></span>\n  <span class="sr-only">next</span>\n</a>\n<ol class="carousel-indicators" ng-show="slides.length > 1">\n  <li ng-repeat="slide in slides | orderBy:indexOfSlide track by $index" ng-class="{ active: isActive(slide) }" ng-click="select(slide)">\n    <span class="sr-only">slide {{ $index + 1 }} of {{ slides.length }}<span ng-if="isActive(slide)">, currently active</span></span>\n  </li>\n</ol>\n')}]),angular.module("uib/template/carousel/slide.html",[]).run(["$templateCache",function(a){a.put("uib/template/carousel/slide.html",'<div class="text-center" ng-transclude></div>\n')}]),angular.module("uib/template/datepicker/datepicker.html",[]).run(["$templateCache",function(a){a.put("uib/template/datepicker/datepicker.html",'<div ng-switch="datepickerMode">\n  <div uib-daypicker ng-switch-when="day" tabindex="0" class="uib-daypicker"></div>\n  <div uib-monthpicker ng-switch-when="month" tabindex="0" class="uib-monthpicker"></div>\n  <div uib-yearpicker ng-switch-when="year" tabindex="0" class="uib-yearpicker"></div>\n</div>\n')}]),angular.module("uib/template/datepicker/day.html",[]).run(["$templateCache",function(a){a.put("uib/template/datepicker/day.html",'<table role="grid" aria-labelledby="{{::uniqueId}}-title" aria-activedescendant="{{activeDateId}}">\n  <thead>\n    <tr>\n      <th><button type="button" class="btn btn-default btn-sm pull-left uib-left" ng-click="move(-1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-left"></i></button></th>\n      <th colspan="{{::5 + showWeeks}}"><button id="{{::uniqueId}}-title" role="heading" aria-live="assertive" aria-atomic="true" type="button" class="btn btn-default btn-sm uib-title" ng-click="toggleMode()" ng-disabled="datepickerMode === maxMode" tabindex="-1"><strong>{{title}}</strong></button></th>\n      <th><button type="button" class="btn btn-default btn-sm pull-right uib-right" ng-click="move(1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-right"></i></button></th>\n    </tr>\n    <tr>\n      <th ng-if="showWeeks" class="text-center"></th>\n      <th ng-repeat="label in ::labels track by $index" class="text-center"><small aria-label="{{::label.full}}">{{::label.abbr}}</small></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr class="uib-weeks" ng-repeat="row in rows track by $index" role="row">\n      <td ng-if="showWeeks" class="text-center h6"><em>{{ weekNumbers[$index] }}</em></td>\n      <td ng-repeat="dt in row" class="uib-day text-center" role="gridcell"\n        id="{{::dt.uid}}"\n        ng-class="::dt.customClass">\n        <button type="button" class="btn btn-default btn-sm"\n          uib-is-class="\n            \'btn-info\' for selectedDt,\n            \'active\' for activeDt\n            on dt"\n          ng-click="select(dt.date)"\n          ng-disabled="::dt.disabled"\n          tabindex="-1"><span ng-class="::{\'text-muted\': dt.secondary, \'text-info\': dt.current}">{{::dt.label}}</span></button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n')}]),angular.module("uib/template/datepicker/month.html",[]).run(["$templateCache",function(a){a.put("uib/template/datepicker/month.html",'<table role="grid" aria-labelledby="{{::uniqueId}}-title" aria-activedescendant="{{activeDateId}}">\n  <thead>\n    <tr>\n      <th><button type="button" class="btn btn-default btn-sm pull-left uib-left" ng-click="move(-1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-left"></i></button></th>\n      <th colspan="{{::yearHeaderColspan}}"><button id="{{::uniqueId}}-title" role="heading" aria-live="assertive" aria-atomic="true" type="button" class="btn btn-default btn-sm uib-title" ng-click="toggleMode()" ng-disabled="datepickerMode === maxMode" tabindex="-1"><strong>{{title}}</strong></button></th>\n      <th><button type="button" class="btn btn-default btn-sm pull-right uib-right" ng-click="move(1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-right"></i></button></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr class="uib-months" ng-repeat="row in rows track by $index" role="row">\n      <td ng-repeat="dt in row" class="uib-month text-center" role="gridcell"\n        id="{{::dt.uid}}"\n        ng-class="::dt.customClass">\n        <button type="button" class="btn btn-default"\n          uib-is-class="\n            \'btn-info\' for selectedDt,\n            \'active\' for activeDt\n            on dt"\n          ng-click="select(dt.date)"\n          ng-disabled="::dt.disabled"\n          tabindex="-1"><span ng-class="::{\'text-info\': dt.current}">{{::dt.label}}</span></button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n')}]),angular.module("uib/template/datepicker/year.html",[]).run(["$templateCache",function(a){a.put("uib/template/datepicker/year.html",'<table role="grid" aria-labelledby="{{::uniqueId}}-title" aria-activedescendant="{{activeDateId}}">\n  <thead>\n    <tr>\n      <th><button type="button" class="btn btn-default btn-sm pull-left uib-left" ng-click="move(-1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-left"></i></button></th>\n      <th colspan="{{::columns - 2}}"><button id="{{::uniqueId}}-title" role="heading" aria-live="assertive" aria-atomic="true" type="button" class="btn btn-default btn-sm uib-title" ng-click="toggleMode()" ng-disabled="datepickerMode === maxMode" tabindex="-1"><strong>{{title}}</strong></button></th>\n      <th><button type="button" class="btn btn-default btn-sm pull-right uib-right" ng-click="move(1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-right"></i></button></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr class="uib-years" ng-repeat="row in rows track by $index" role="row">\n      <td ng-repeat="dt in row" class="uib-year text-center" role="gridcell"\n        id="{{::dt.uid}}"\n        ng-class="::dt.customClass">\n        <button type="button" class="btn btn-default"\n          uib-is-class="\n            \'btn-info\' for selectedDt,\n            \'active\' for activeDt\n            on dt"\n          ng-click="select(dt.date)"\n          ng-disabled="::dt.disabled"\n          tabindex="-1"><span ng-class="::{\'text-info\': dt.current}">{{::dt.label}}</span></button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n')}]),angular.module("uib/template/datepickerPopup/popup.html",[]).run(["$templateCache",function(a){a.put("uib/template/datepickerPopup/popup.html",'<ul class="uib-datepicker-popup dropdown-menu uib-position-measure" dropdown-nested ng-if="isOpen" ng-keydown="keydown($event)" ng-click="$event.stopPropagation()">\n  <li ng-transclude></li>\n  <li ng-if="showButtonBar" class="uib-button-bar">\n    <span class="btn-group pull-left">\n      <button type="button" class="btn btn-sm btn-info uib-datepicker-current" ng-click="select(\'today\', $event)" ng-disabled="isDisabled(\'today\')">{{ getText(\'current\') }}</button>\n      <button type="button" class="btn btn-sm btn-danger uib-clear" ng-click="select(null, $event)">{{ getText(\'clear\') }}</button>\n    </span>\n    <button type="button" class="btn btn-sm btn-success pull-right uib-close" ng-click="close($event)">{{ getText(\'close\') }}</button>\n  </li>\n</ul>\n')}]),angular.module("uib/template/modal/window.html",[]).run(["$templateCache",function(a){a.put("uib/template/modal/window.html","<div class=\"modal-dialog {{size ? 'modal-' + size : ''}}\"><div class=\"modal-content\" uib-modal-transclude></div></div>\n")}]),angular.module("uib/template/pager/pager.html",[]).run(["$templateCache",function(a){a.put("uib/template/pager/pager.html",'<li ng-class="{disabled: noPrevious()||ngDisabled, previous: align}"><a href ng-click="selectPage(page - 1, $event)" ng-disabled="noPrevious()||ngDisabled" uib-tabindex-toggle>{{::getText(\'previous\')}}</a></li>\n<li ng-class="{disabled: noNext()||ngDisabled, next: align}"><a href ng-click="selectPage(page + 1, $event)" ng-disabled="noNext()||ngDisabled" uib-tabindex-toggle>{{::getText(\'next\')}}</a></li>\n')}]),angular.module("uib/template/pagination/pagination.html",[]).run(["$templateCache",function(a){a.put("uib/template/pagination/pagination.html",'<li ng-if="::boundaryLinks" ng-class="{disabled: noPrevious()||ngDisabled}" class="pagination-first"><a href ng-click="selectPage(1, $event)" ng-disabled="noPrevious()||ngDisabled" uib-tabindex-toggle>{{::getText(\'first\')}}</a></li>\n<li ng-if="::directionLinks" ng-class="{disabled: noPrevious()||ngDisabled}" class="pagination-prev"><a href ng-click="selectPage(page - 1, $event)" ng-disabled="noPrevious()||ngDisabled" uib-tabindex-toggle>{{::getText(\'previous\')}}</a></li>\n<li ng-repeat="page in pages track by $index" ng-class="{active: page.active,disabled: ngDisabled&&!page.active}" class="pagination-page"><a href ng-click="selectPage(page.number, $event)" ng-disabled="ngDisabled&&!page.active" uib-tabindex-toggle>{{page.text}}</a></li>\n<li ng-if="::directionLinks" ng-class="{disabled: noNext()||ngDisabled}" class="pagination-next"><a href ng-click="selectPage(page + 1, $event)" ng-disabled="noNext()||ngDisabled" uib-tabindex-toggle>{{::getText(\'next\')}}</a></li>\n<li ng-if="::boundaryLinks" ng-class="{disabled: noNext()||ngDisabled}" class="pagination-last"><a href ng-click="selectPage(totalPages, $event)" ng-disabled="noNext()||ngDisabled" uib-tabindex-toggle>{{::getText(\'last\')}}</a></li>\n')}]),angular.module("uib/template/tooltip/tooltip-html-popup.html",[]).run(["$templateCache",function(a){a.put("uib/template/tooltip/tooltip-html-popup.html",'<div class="tooltip-arrow"></div>\n<div class="tooltip-inner" ng-bind-html="contentExp()"></div>\n')}]),angular.module("uib/template/tooltip/tooltip-popup.html",[]).run(["$templateCache",function(a){a.put("uib/template/tooltip/tooltip-popup.html",'<div class="tooltip-arrow"></div>\n<div class="tooltip-inner" ng-bind="content"></div>\n')}]),angular.module("uib/template/tooltip/tooltip-template-popup.html",[]).run(["$templateCache",function(a){a.put("uib/template/tooltip/tooltip-template-popup.html",'<div class="tooltip-arrow"></div>\n<div class="tooltip-inner"\n  uib-tooltip-template-transclude="contentExp()"\n  tooltip-template-transclude-scope="originScope()"></div>\n')}]),angular.module("uib/template/popover/popover-html.html",[]).run(["$templateCache",function(a){a.put("uib/template/popover/popover-html.html",'<div class="arrow"></div>\n\n<div class="popover-inner">\n    <h3 class="popover-title" ng-bind="uibTitle" ng-if="uibTitle"></h3>\n    <div class="popover-content" ng-bind-html="contentExp()"></div>\n</div>\n')}]),angular.module("uib/template/popover/popover-template.html",[]).run(["$templateCache",function(a){a.put("uib/template/popover/popover-template.html",'<div class="arrow"></div>\n\n<div class="popover-inner">\n    <h3 class="popover-title" ng-bind="uibTitle" ng-if="uibTitle"></h3>\n    <div class="popover-content"\n      uib-tooltip-template-transclude="contentExp()"\n      tooltip-template-transclude-scope="originScope()"></div>\n</div>\n')}]),angular.module("uib/template/popover/popover.html",[]).run(["$templateCache",function(a){a.put("uib/template/popover/popover.html",'<div class="arrow"></div>\n\n<div class="popover-inner">\n    <h3 class="popover-title" ng-bind="uibTitle" ng-if="uibTitle"></h3>\n    <div class="popover-content" ng-bind="content"></div>\n</div>\n')}]),angular.module("uib/template/progressbar/bar.html",[]).run(["$templateCache",function(a){a.put("uib/template/progressbar/bar.html",'<div class="progress-bar" ng-class="type && \'progress-bar-\' + type" role="progressbar" aria-valuenow="{{value}}" aria-valuemin="0" aria-valuemax="{{max}}" ng-style="{width: (percent < 100 ? percent : 100) + \'%\'}" aria-valuetext="{{percent | number:0}}%" aria-labelledby="{{::title}}" ng-transclude></div>\n')}]),angular.module("uib/template/progressbar/progress.html",[]).run(["$templateCache",function(a){a.put("uib/template/progressbar/progress.html",'<div class="progress" ng-transclude aria-labelledby="{{::title}}"></div>')}]),angular.module("uib/template/progressbar/progressbar.html",[]).run(["$templateCache",function(a){a.put("uib/template/progressbar/progressbar.html",'<div class="progress">\n  <div class="progress-bar" ng-class="type && \'progress-bar-\' + type" role="progressbar" aria-valuenow="{{value}}" aria-valuemin="0" aria-valuemax="{{max}}" ng-style="{width: (percent < 100 ? percent : 100) + \'%\'}" aria-valuetext="{{percent | number:0}}%" aria-labelledby="{{::title}}" ng-transclude></div>\n</div>\n')}]),angular.module("uib/template/rating/rating.html",[]).run(["$templateCache",function(a){a.put("uib/template/rating/rating.html",'<span ng-mouseleave="reset()" ng-keydown="onKeydown($event)" tabindex="0" role="slider" aria-valuemin="0" aria-valuemax="{{range.length}}" aria-valuenow="{{value}}" aria-valuetext="{{title}}">\n    <span ng-repeat-start="r in range track by $index" class="sr-only">({{ $index < value ? \'*\' : \' \' }})</span>\n    <i ng-repeat-end ng-mouseenter="enter($index + 1)" ng-click="rate($index + 1)" class="glyphicon" ng-class="$index < value && (r.stateOn || \'glyphicon-star\') || (r.stateOff || \'glyphicon-star-empty\')" ng-attr-title="{{r.title}}"></i>\n</span>\n')}]),angular.module("uib/template/tabs/tab.html",[]).run(["$templateCache",function(a){a.put("uib/template/tabs/tab.html",'<li ng-class="[{active: active, disabled: disabled}, classes]" class="uib-tab nav-item">\n  <a href ng-click="select($event)" class="nav-link" uib-tab-heading-transclude>{{heading}}</a>\n</li>\n')}]),angular.module("uib/template/tabs/tabset.html",[]).run(["$templateCache",function(a){a.put("uib/template/tabs/tabset.html",'<div>\n  <ul class="nav nav-{{tabset.type || \'tabs\'}}" ng-class="{\'nav-stacked\': vertical, \'nav-justified\': justified}" ng-transclude></ul>\n  <div class="tab-content">\n    <div class="tab-pane"\n         ng-repeat="tab in tabset.tabs"\n         ng-class="{active: tabset.active === tab.index}"\n         uib-tab-content-transclude="tab">\n    </div>\n  </div>\n</div>\n')}]),angular.module("uib/template/timepicker/timepicker.html",[]).run(["$templateCache",function(a){a.put("uib/template/timepicker/timepicker.html",'<table class="uib-timepicker">\n  <tbody>\n    <tr class="text-center" ng-show="::showSpinners">\n      <td class="uib-increment hours"><a ng-click="incrementHours()" ng-class="{disabled: noIncrementHours()}" class="btn btn-link" ng-disabled="noIncrementHours()" tabindex="-1"><span class="glyphicon glyphicon-chevron-up"></span></a></td>\n      <td>&nbsp;</td>\n      <td class="uib-increment minutes"><a ng-click="incrementMinutes()" ng-class="{disabled: noIncrementMinutes()}" class="btn btn-link" ng-disabled="noIncrementMinutes()" tabindex="-1"><span class="glyphicon glyphicon-chevron-up"></span></a></td>\n      <td ng-show="showSeconds">&nbsp;</td>\n      <td ng-show="showSeconds" class="uib-increment seconds"><a ng-click="incrementSeconds()" ng-class="{disabled: noIncrementSeconds()}" class="btn btn-link" ng-disabled="noIncrementSeconds()" tabindex="-1"><span class="glyphicon glyphicon-chevron-up"></span></a></td>\n      <td ng-show="showMeridian"></td>\n    </tr>\n    <tr>\n      <td class="form-group uib-time hours" ng-class="{\'has-error\': invalidHours}">\n        <input type="text" placeholder="HH" ng-model="hours" ng-change="updateHours()" class="form-control text-center" ng-readonly="::readonlyInput" maxlength="2" tabindex="{{::tabindex}}" ng-disabled="noIncrementHours()" ng-blur="blur()">\n      </td>\n      <td class="uib-separator">:</td>\n      <td class="form-group uib-time minutes" ng-class="{\'has-error\': invalidMinutes}">\n        <input type="text" placeholder="MM" ng-model="minutes" ng-change="updateMinutes()" class="form-control text-center" ng-readonly="::readonlyInput" maxlength="2" tabindex="{{::tabindex}}" ng-disabled="noIncrementMinutes()" ng-blur="blur()">\n      </td>\n      <td ng-show="showSeconds" class="uib-separator">:</td>\n      <td class="form-group uib-time seconds" ng-class="{\'has-error\': invalidSeconds}" ng-show="showSeconds">\n        <input type="text" placeholder="SS" ng-model="seconds" ng-change="updateSeconds()" class="form-control text-center" ng-readonly="readonlyInput" maxlength="2" tabindex="{{::tabindex}}" ng-disabled="noIncrementSeconds()" ng-blur="blur()">\n      </td>\n      <td ng-show="showMeridian" class="uib-time am-pm"><button type="button" ng-class="{disabled: noToggleMeridian()}" class="btn btn-default text-center" ng-click="toggleMeridian()" ng-disabled="noToggleMeridian()" tabindex="{{::tabindex}}">{{meridian}}</button></td>\n    </tr>\n    <tr class="text-center" ng-show="::showSpinners">\n      <td class="uib-decrement hours"><a ng-click="decrementHours()" ng-class="{disabled: noDecrementHours()}" class="btn btn-link" ng-disabled="noDecrementHours()" tabindex="-1"><span class="glyphicon glyphicon-chevron-down"></span></a></td>\n      <td>&nbsp;</td>\n      <td class="uib-decrement minutes"><a ng-click="decrementMinutes()" ng-class="{disabled: noDecrementMinutes()}" class="btn btn-link" ng-disabled="noDecrementMinutes()" tabindex="-1"><span class="glyphicon glyphicon-chevron-down"></span></a></td>\n      <td ng-show="showSeconds">&nbsp;</td>\n      <td ng-show="showSeconds" class="uib-decrement seconds"><a ng-click="decrementSeconds()" ng-class="{disabled: noDecrementSeconds()}" class="btn btn-link" ng-disabled="noDecrementSeconds()" tabindex="-1"><span class="glyphicon glyphicon-chevron-down"></span></a></td>\n      <td ng-show="showMeridian"></td>\n    </tr>\n  </tbody>\n</table>\n')}]),angular.module("uib/template/typeahead/typeahead-match.html",[]).run(["$templateCache",function(a){a.put("uib/template/typeahead/typeahead-match.html",'<a href\n   tabindex="-1"\n   ng-bind-html="match.label | uibTypeaheadHighlight:query"\n   ng-attr-title="{{match.label}}"></a>\n')}]),angular.module("uib/template/typeahead/typeahead-popup.html",[]).run(["$templateCache",function(a){a.put("uib/template/typeahead/typeahead-popup.html",'<ul class="dropdown-menu" ng-show="isOpen() && !moveInProgress" ng-style="{top: position().top+\'px\', left: position().left+\'px\'}" role="listbox" aria-hidden="{{!isOpen()}}">\n    <li class="uib-typeahead-match" ng-repeat="match in matches track by $index" ng-class="{active: isActive($index) }" ng-mouseenter="selectActive($index)" ng-click="selectMatch($index, $event)" role="option" id="{{::match.id}}">\n        <div uib-typeahead-match index="$index" match="match" query="query" template-url="templateUrl"></div>\n    </li>\n</ul>\n')}]),angular.module("ui.bootstrap.carousel").run(function(){!angular.$$csp().noInlineStyle&&!angular.$$uibCarouselCss&&angular.element(document).find("head").prepend('<style type="text/css">.ng-animate.item:not(.left):not(.right){-webkit-transition:0s ease-in-out left;transition:0s ease-in-out left}</style>'),angular.$$uibCarouselCss=!0}),angular.module("ui.bootstrap.datepicker").run(function(){!angular.$$csp().noInlineStyle&&!angular.$$uibDatepickerCss&&angular.element(document).find("head").prepend('<style type="text/css">.uib-datepicker .uib-title{width:100%;}.uib-day button,.uib-month button,.uib-year button{min-width:100%;}.uib-left,.uib-right{width:100%}</style>'),angular.$$uibDatepickerCss=!0}),angular.module("ui.bootstrap.position").run(function(){!angular.$$csp().noInlineStyle&&!angular.$$uibPositionCss&&angular.element(document).find("head").prepend('<style type="text/css">.uib-position-measure{display:block !important;visibility:hidden !important;position:absolute !important;top:-9999px !important;left:-9999px !important;}.uib-position-scrollbar-measure{position:absolute !important;top:-9999px !important;width:50px !important;height:50px !important;overflow:scroll !important;}.uib-position-body-scrollbar-measure{overflow:scroll !important;}</style>'),angular.$$uibPositionCss=!0}),angular.module("ui.bootstrap.datepickerPopup").run(function(){!angular.$$csp().noInlineStyle&&!angular.$$uibDatepickerpopupCss&&angular.element(document).find("head").prepend('<style type="text/css">.uib-datepicker-popup.dropdown-menu{display:block;float:none;margin:0;}.uib-button-bar{padding:10px 9px 2px;}</style>'),angular.$$uibDatepickerpopupCss=!0}),angular.module("ui.bootstrap.tooltip").run(function(){!angular.$$csp().noInlineStyle&&!angular.$$uibTooltipCss&&angular.element(document).find("head").prepend('<style type="text/css">[uib-tooltip-popup].tooltip.top-left > .tooltip-arrow,[uib-tooltip-popup].tooltip.top-right > .tooltip-arrow,[uib-tooltip-popup].tooltip.bottom-left > .tooltip-arrow,[uib-tooltip-popup].tooltip.bottom-right > .tooltip-arrow,[uib-tooltip-popup].tooltip.left-top > .tooltip-arrow,[uib-tooltip-popup].tooltip.left-bottom > .tooltip-arrow,[uib-tooltip-popup].tooltip.right-top > .tooltip-arrow,[uib-tooltip-popup].tooltip.right-bottom > .tooltip-arrow,[uib-tooltip-html-popup].tooltip.top-left > .tooltip-arrow,[uib-tooltip-html-popup].tooltip.top-right > .tooltip-arrow,[uib-tooltip-html-popup].tooltip.bottom-left > .tooltip-arrow,[uib-tooltip-html-popup].tooltip.bottom-right > .tooltip-arrow,[uib-tooltip-html-popup].tooltip.left-top > .tooltip-arrow,[uib-tooltip-html-popup].tooltip.left-bottom > .tooltip-arrow,[uib-tooltip-html-popup].tooltip.right-top > .tooltip-arrow,[uib-tooltip-html-popup].tooltip.right-bottom > .tooltip-arrow,[uib-tooltip-template-popup].tooltip.top-left > .tooltip-arrow,[uib-tooltip-template-popup].tooltip.top-right > .tooltip-arrow,[uib-tooltip-template-popup].tooltip.bottom-left > .tooltip-arrow,[uib-tooltip-template-popup].tooltip.bottom-right > .tooltip-arrow,[uib-tooltip-template-popup].tooltip.left-top > .tooltip-arrow,[uib-tooltip-template-popup].tooltip.left-bottom > .tooltip-arrow,[uib-tooltip-template-popup].tooltip.right-top > .tooltip-arrow,[uib-tooltip-template-popup].tooltip.right-bottom > .tooltip-arrow,[uib-popover-popup].popover.top-left > .arrow,[uib-popover-popup].popover.top-right > .arrow,[uib-popover-popup].popover.bottom-left > .arrow,[uib-popover-popup].popover.bottom-right > .arrow,[uib-popover-popup].popover.left-top > .arrow,[uib-popover-popup].popover.left-bottom > .arrow,[uib-popover-popup].popover.right-top > .arrow,[uib-popover-popup].popover.right-bottom > .arrow,[uib-popover-html-popup].popover.top-left > .arrow,[uib-popover-html-popup].popover.top-right > .arrow,[uib-popover-html-popup].popover.bottom-left > .arrow,[uib-popover-html-popup].popover.bottom-right > .arrow,[uib-popover-html-popup].popover.left-top > .arrow,[uib-popover-html-popup].popover.left-bottom > .arrow,[uib-popover-html-popup].popover.right-top > .arrow,[uib-popover-html-popup].popover.right-bottom > .arrow,[uib-popover-template-popup].popover.top-left > .arrow,[uib-popover-template-popup].popover.top-right > .arrow,[uib-popover-template-popup].popover.bottom-left > .arrow,[uib-popover-template-popup].popover.bottom-right > .arrow,[uib-popover-template-popup].popover.left-top > .arrow,[uib-popover-template-popup].popover.left-bottom > .arrow,[uib-popover-template-popup].popover.right-top > .arrow,[uib-popover-template-popup].popover.right-bottom > .arrow{top:auto;bottom:auto;left:auto;right:auto;margin:0;}[uib-popover-popup].popover,[uib-popover-html-popup].popover,[uib-popover-template-popup].popover{display:block !important;}</style>'),angular.$$uibTooltipCss=!0}),angular.module("ui.bootstrap.timepicker").run(function(){!angular.$$csp().noInlineStyle&&!angular.$$uibTimepickerCss&&angular.element(document).find("head").prepend('<style type="text/css">.uib-time input{width:50px;}</style>'),angular.$$uibTimepickerCss=!0}),angular.module("ui.bootstrap.typeahead").run(function(){!angular.$$csp().noInlineStyle&&!angular.$$uibTypeaheadCss&&angular.element(document).find("head").prepend('<style type="text/css">[uib-typeahead-popup].dropdown-menu{display:block;}</style>'),angular.$$uibTypeaheadCss=!0});
/**
 * State-based routing for AngularJS
 * @version v0.3.1
 * @link http://angular-ui.github.com/
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */
"undefined"!=typeof module&&"undefined"!=typeof exports&&module.exports===exports&&(module.exports="ui.router"),function(a,b,c){"use strict";function d(a,b){return R(new(R(function(){},{prototype:a})),b)}function e(a){return Q(arguments,function(b){b!==a&&Q(b,function(b,c){a.hasOwnProperty(c)||(a[c]=b)})}),a}function f(a,b){var c=[];for(var d in a.path){if(a.path[d]!==b.path[d])break;c.push(a.path[d])}return c}function g(a){if(Object.keys)return Object.keys(a);var b=[];return Q(a,function(a,c){b.push(c)}),b}function h(a,b){if(Array.prototype.indexOf)return a.indexOf(b,Number(arguments[2])||0);var c=a.length>>>0,d=Number(arguments[2])||0;for(d=0>d?Math.ceil(d):Math.floor(d),0>d&&(d+=c);c>d;d++)if(d in a&&a[d]===b)return d;return-1}function i(a,b,c,d){var e,i=f(c,d),j={},k=[];for(var l in i)if(i[l]&&i[l].params&&(e=g(i[l].params),e.length))for(var m in e)h(k,e[m])>=0||(k.push(e[m]),j[e[m]]=a[e[m]]);return R({},j,b)}function j(a,b,c){if(!c){c=[];for(var d in a)c.push(d)}for(var e=0;e<c.length;e++){var f=c[e];if(a[f]!=b[f])return!1}return!0}function k(a,b){var c={};return Q(a,function(a){c[a]=b[a]}),c}function l(a){var b={},c=Array.prototype.concat.apply(Array.prototype,Array.prototype.slice.call(arguments,1));return Q(c,function(c){c in a&&(b[c]=a[c])}),b}function m(a){var b={},c=Array.prototype.concat.apply(Array.prototype,Array.prototype.slice.call(arguments,1));for(var d in a)-1==h(c,d)&&(b[d]=a[d]);return b}function n(a,b){var c=P(a),d=c?[]:{};return Q(a,function(a,e){b(a,e)&&(d[c?d.length:e]=a)}),d}function o(a,b){var c=P(a)?[]:{};return Q(a,function(a,d){c[d]=b(a,d)}),c}function p(a,b){var d=1,f=2,i={},j=[],k=i,l=R(a.when(i),{$$promises:i,$$values:i});this.study=function(i){function n(a,c){if(s[c]!==f){if(r.push(c),s[c]===d)throw r.splice(0,h(r,c)),new Error("Cyclic dependency: "+r.join(" -> "));if(s[c]=d,N(a))q.push(c,[function(){return b.get(a)}],j);else{var e=b.annotate(a);Q(e,function(a){a!==c&&i.hasOwnProperty(a)&&n(i[a],a)}),q.push(c,a,e)}r.pop(),s[c]=f}}function o(a){return O(a)&&a.then&&a.$$promises}if(!O(i))throw new Error("'invocables' must be an object");var p=g(i||{}),q=[],r=[],s={};return Q(i,n),i=r=s=null,function(d,f,g){function h(){--u||(v||e(t,f.$$values),r.$$values=t,r.$$promises=r.$$promises||!0,delete r.$$inheritedValues,n.resolve(t))}function i(a){r.$$failure=a,n.reject(a)}function j(c,e,f){function j(a){l.reject(a),i(a)}function k(){if(!L(r.$$failure))try{l.resolve(b.invoke(e,g,t)),l.promise.then(function(a){t[c]=a,h()},j)}catch(a){j(a)}}var l=a.defer(),m=0;Q(f,function(a){s.hasOwnProperty(a)&&!d.hasOwnProperty(a)&&(m++,s[a].then(function(b){t[a]=b,--m||k()},j))}),m||k(),s[c]=l.promise}if(o(d)&&g===c&&(g=f,f=d,d=null),d){if(!O(d))throw new Error("'locals' must be an object")}else d=k;if(f){if(!o(f))throw new Error("'parent' must be a promise returned by $resolve.resolve()")}else f=l;var n=a.defer(),r=n.promise,s=r.$$promises={},t=R({},d),u=1+q.length/3,v=!1;if(L(f.$$failure))return i(f.$$failure),r;f.$$inheritedValues&&e(t,m(f.$$inheritedValues,p)),R(s,f.$$promises),f.$$values?(v=e(t,m(f.$$values,p)),r.$$inheritedValues=m(f.$$values,p),h()):(f.$$inheritedValues&&(r.$$inheritedValues=m(f.$$inheritedValues,p)),f.then(h,i));for(var w=0,x=q.length;x>w;w+=3)d.hasOwnProperty(q[w])?h():j(q[w],q[w+1],q[w+2]);return r}},this.resolve=function(a,b,c,d){return this.study(a)(b,c,d)}}function q(a,b,c){this.fromConfig=function(a,b,c){return L(a.template)?this.fromString(a.template,b):L(a.templateUrl)?this.fromUrl(a.templateUrl,b):L(a.templateProvider)?this.fromProvider(a.templateProvider,b,c):null},this.fromString=function(a,b){return M(a)?a(b):a},this.fromUrl=function(c,d){return M(c)&&(c=c(d)),null==c?null:a.get(c,{cache:b,headers:{Accept:"text/html"}}).then(function(a){return a.data})},this.fromProvider=function(a,b,d){return c.invoke(a,null,d||{params:b})}}function r(a,b,e){function f(b,c,d,e){if(q.push(b),o[b])return o[b];if(!/^\w+([-.]+\w+)*(?:\[\])?$/.test(b))throw new Error("Invalid parameter name '"+b+"' in pattern '"+a+"'");if(p[b])throw new Error("Duplicate parameter name '"+b+"' in pattern '"+a+"'");return p[b]=new U.Param(b,c,d,e),p[b]}function g(a,b,c,d){var e=["",""],f=a.replace(/[\\\[\]\^$*+?.()|{}]/g,"\\$&");if(!b)return f;switch(c){case!1:e=["(",")"+(d?"?":"")];break;case!0:f=f.replace(/\/$/,""),e=["(?:/(",")|/)?"];break;default:e=["("+c+"|",")?"]}return f+e[0]+b+e[1]}function h(e,f){var g,h,i,j,k;return g=e[2]||e[3],k=b.params[g],i=a.substring(m,e.index),h=f?e[4]:e[4]||("*"==e[1]?".*":null),h&&(j=U.type(h)||d(U.type("string"),{pattern:new RegExp(h,b.caseInsensitive?"i":c)})),{id:g,regexp:h,segment:i,type:j,cfg:k}}b=R({params:{}},O(b)?b:{});var i,j=/([:*])([\w\[\]]+)|\{([\w\[\]]+)(?:\:\s*((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,k=/([:]?)([\w\[\].-]+)|\{([\w\[\].-]+)(?:\:\s*((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,l="^",m=0,n=this.segments=[],o=e?e.params:{},p=this.params=e?e.params.$$new():new U.ParamSet,q=[];this.source=a;for(var r,s,t;(i=j.exec(a))&&(r=h(i,!1),!(r.segment.indexOf("?")>=0));)s=f(r.id,r.type,r.cfg,"path"),l+=g(r.segment,s.type.pattern.source,s.squash,s.isOptional),n.push(r.segment),m=j.lastIndex;t=a.substring(m);var u=t.indexOf("?");if(u>=0){var v=this.sourceSearch=t.substring(u);if(t=t.substring(0,u),this.sourcePath=a.substring(0,m+u),v.length>0)for(m=0;i=k.exec(v);)r=h(i,!0),s=f(r.id,r.type,r.cfg,"search"),m=j.lastIndex}else this.sourcePath=a,this.sourceSearch="";l+=g(t)+(b.strict===!1?"/?":"")+"$",n.push(t),this.regexp=new RegExp(l,b.caseInsensitive?"i":c),this.prefix=n[0],this.$$paramNames=q}function s(a){R(this,a)}function t(){function a(a){return null!=a?a.toString().replace(/~/g,"~~").replace(/\//g,"~2F"):a}function e(a){return null!=a?a.toString().replace(/~2F/g,"/").replace(/~~/g,"~"):a}function f(){return{strict:p,caseInsensitive:m}}function i(a){return M(a)||P(a)&&M(a[a.length-1])}function j(){for(;w.length;){var a=w.shift();if(a.pattern)throw new Error("You cannot override a type's .pattern at runtime.");b.extend(u[a.name],l.invoke(a.def))}}function k(a){R(this,a||{})}U=this;var l,m=!1,p=!0,q=!1,u={},v=!0,w=[],x={string:{encode:a,decode:e,is:function(a){return null==a||!L(a)||"string"==typeof a},pattern:/[^\/]*/},"int":{encode:a,decode:function(a){return parseInt(a,10)},is:function(a){return L(a)&&this.decode(a.toString())===a},pattern:/\d+/},bool:{encode:function(a){return a?1:0},decode:function(a){return 0!==parseInt(a,10)},is:function(a){return a===!0||a===!1},pattern:/0|1/},date:{encode:function(a){return this.is(a)?[a.getFullYear(),("0"+(a.getMonth()+1)).slice(-2),("0"+a.getDate()).slice(-2)].join("-"):c},decode:function(a){if(this.is(a))return a;var b=this.capture.exec(a);return b?new Date(b[1],b[2]-1,b[3]):c},is:function(a){return a instanceof Date&&!isNaN(a.valueOf())},equals:function(a,b){return this.is(a)&&this.is(b)&&a.toISOString()===b.toISOString()},pattern:/[0-9]{4}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[1-2][0-9]|3[0-1])/,capture:/([0-9]{4})-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])/},json:{encode:b.toJson,decode:b.fromJson,is:b.isObject,equals:b.equals,pattern:/[^\/]*/},any:{encode:b.identity,decode:b.identity,equals:b.equals,pattern:/.*/}};t.$$getDefaultValue=function(a){if(!i(a.value))return a.value;if(!l)throw new Error("Injectable functions cannot be called at configuration time");return l.invoke(a.value)},this.caseInsensitive=function(a){return L(a)&&(m=a),m},this.strictMode=function(a){return L(a)&&(p=a),p},this.defaultSquashPolicy=function(a){if(!L(a))return q;if(a!==!0&&a!==!1&&!N(a))throw new Error("Invalid squash policy: "+a+". Valid policies: false, true, arbitrary-string");return q=a,a},this.compile=function(a,b){return new r(a,R(f(),b))},this.isMatcher=function(a){if(!O(a))return!1;var b=!0;return Q(r.prototype,function(c,d){M(c)&&(b=b&&L(a[d])&&M(a[d]))}),b},this.type=function(a,b,c){if(!L(b))return u[a];if(u.hasOwnProperty(a))throw new Error("A type named '"+a+"' has already been defined.");return u[a]=new s(R({name:a},b)),c&&(w.push({name:a,def:c}),v||j()),this},Q(x,function(a,b){u[b]=new s(R({name:b},a))}),u=d(u,{}),this.$get=["$injector",function(a){return l=a,v=!1,j(),Q(x,function(a,b){u[b]||(u[b]=new s(a))}),this}],this.Param=function(a,d,e,f){function j(a){var b=O(a)?g(a):[],c=-1===h(b,"value")&&-1===h(b,"type")&&-1===h(b,"squash")&&-1===h(b,"array");return c&&(a={value:a}),a.$$fn=i(a.value)?a.value:function(){return a.value},a}function k(c,d,e){if(c.type&&d)throw new Error("Param '"+a+"' has two type configurations.");return d?d:c.type?b.isString(c.type)?u[c.type]:c.type instanceof s?c.type:new s(c.type):"config"===e?u.any:u.string}function m(){var b={array:"search"===f?"auto":!1},c=a.match(/\[\]$/)?{array:!0}:{};return R(b,c,e).array}function p(a,b){var c=a.squash;if(!b||c===!1)return!1;if(!L(c)||null==c)return q;if(c===!0||N(c))return c;throw new Error("Invalid squash policy: '"+c+"'. Valid policies: false, true, or arbitrary string")}function r(a,b,d,e){var f,g,i=[{from:"",to:d||b?c:""},{from:null,to:d||b?c:""}];return f=P(a.replace)?a.replace:[],N(e)&&f.push({from:e,to:c}),g=o(f,function(a){return a.from}),n(i,function(a){return-1===h(g,a.from)}).concat(f)}function t(){if(!l)throw new Error("Injectable functions cannot be called at configuration time");var a=l.invoke(e.$$fn);if(null!==a&&a!==c&&!x.type.is(a))throw new Error("Default value ("+a+") for parameter '"+x.id+"' is not an instance of Type ("+x.type.name+")");return a}function v(a){function b(a){return function(b){return b.from===a}}function c(a){var c=o(n(x.replace,b(a)),function(a){return a.to});return c.length?c[0]:a}return a=c(a),L(a)?x.type.$normalize(a):t()}function w(){return"{Param:"+a+" "+d+" squash: '"+A+"' optional: "+z+"}"}var x=this;e=j(e),d=k(e,d,f);var y=m();d=y?d.$asArray(y,"search"===f):d,"string"!==d.name||y||"path"!==f||e.value!==c||(e.value="");var z=e.value!==c,A=p(e,z),B=r(e,y,z,A);R(this,{id:a,type:d,location:f,array:y,squash:A,replace:B,isOptional:z,value:v,dynamic:c,config:e,toString:w})},k.prototype={$$new:function(){return d(this,R(new k,{$$parent:this}))},$$keys:function(){for(var a=[],b=[],c=this,d=g(k.prototype);c;)b.push(c),c=c.$$parent;return b.reverse(),Q(b,function(b){Q(g(b),function(b){-1===h(a,b)&&-1===h(d,b)&&a.push(b)})}),a},$$values:function(a){var b={},c=this;return Q(c.$$keys(),function(d){b[d]=c[d].value(a&&a[d])}),b},$$equals:function(a,b){var c=!0,d=this;return Q(d.$$keys(),function(e){var f=a&&a[e],g=b&&b[e];d[e].type.equals(f,g)||(c=!1)}),c},$$validates:function(a){var d,e,f,g,h,i=this.$$keys();for(d=0;d<i.length&&(e=this[i[d]],f=a[i[d]],f!==c&&null!==f||!e.isOptional);d++){if(g=e.type.$normalize(f),!e.type.is(g))return!1;if(h=e.type.encode(g),b.isString(h)&&!e.type.pattern.exec(h))return!1}return!0},$$parent:c},this.ParamSet=k}function u(a,d){function e(a){var b=/^\^((?:\\[^a-zA-Z0-9]|[^\\\[\]\^$*+?.()|{}]+)*)/.exec(a.source);return null!=b?b[1].replace(/\\(.)/g,"$1"):""}function f(a,b){return a.replace(/\$(\$|\d{1,2})/,function(a,c){return b["$"===c?0:Number(c)]})}function g(a,b,c){if(!c)return!1;var d=a.invoke(b,b,{$match:c});return L(d)?d:!0}function h(d,e,f,g,h){function m(a,b,c){return"/"===q?a:b?q.slice(0,-1)+a:c?q.slice(1)+a:a}function n(a){function b(a){var b=a(f,d);return b?(N(b)&&d.replace().url(b),!0):!1}if(!a||!a.defaultPrevented){p&&d.url()===p;p=c;var e,g=j.length;for(e=0;g>e;e++)if(b(j[e]))return;k&&b(k)}}function o(){return i=i||e.$on("$locationChangeSuccess",n)}var p,q=g.baseHref(),r=d.url();return l||o(),{sync:function(){n()},listen:function(){return o()},update:function(a){return a?void(r=d.url()):void(d.url()!==r&&(d.url(r),d.replace()))},push:function(a,b,e){var f=a.format(b||{});null!==f&&b&&b["#"]&&(f+="#"+b["#"]),d.url(f),p=e&&e.$$avoidResync?d.url():c,e&&e.replace&&d.replace()},href:function(c,e,f){if(!c.validates(e))return null;var g=a.html5Mode();b.isObject(g)&&(g=g.enabled),g=g&&h.history;var i=c.format(e);if(f=f||{},g||null===i||(i="#"+a.hashPrefix()+i),null!==i&&e&&e["#"]&&(i+="#"+e["#"]),i=m(i,g,f.absolute),!f.absolute||!i)return i;var j=!g&&i?"/":"",k=d.port();return k=80===k||443===k?"":":"+k,[d.protocol(),"://",d.host(),k,j,i].join("")}}}var i,j=[],k=null,l=!1;this.rule=function(a){if(!M(a))throw new Error("'rule' must be a function");return j.push(a),this},this.otherwise=function(a){if(N(a)){var b=a;a=function(){return b}}else if(!M(a))throw new Error("'rule' must be a function");return k=a,this},this.when=function(a,b){var c,h=N(b);if(N(a)&&(a=d.compile(a)),!h&&!M(b)&&!P(b))throw new Error("invalid 'handler' in when()");var i={matcher:function(a,b){return h&&(c=d.compile(b),b=["$match",function(a){return c.format(a)}]),R(function(c,d){return g(c,b,a.exec(d.path(),d.search()))},{prefix:N(a.prefix)?a.prefix:""})},regex:function(a,b){if(a.global||a.sticky)throw new Error("when() RegExp must not be global or sticky");return h&&(c=b,b=["$match",function(a){return f(c,a)}]),R(function(c,d){return g(c,b,a.exec(d.path()))},{prefix:e(a)})}},j={matcher:d.isMatcher(a),regex:a instanceof RegExp};for(var k in j)if(j[k])return this.rule(i[k](a,b));throw new Error("invalid 'what' in when()")},this.deferIntercept=function(a){a===c&&(a=!0),l=a},this.$get=h,h.$inject=["$location","$rootScope","$injector","$browser","$sniffer"]}function v(a,e){function f(a){return 0===a.indexOf(".")||0===a.indexOf("^")}function m(a,b){if(!a)return c;var d=N(a),e=d?a:a.name,g=f(e);if(g){if(!b)throw new Error("No reference point given for path '"+e+"'");b=m(b);for(var h=e.split("."),i=0,j=h.length,k=b;j>i;i++)if(""!==h[i]||0!==i){if("^"!==h[i])break;if(!k.parent)throw new Error("Path '"+e+"' not valid for state '"+b.name+"'");k=k.parent}else k=b;h=h.slice(i).join("."),e=k.name+(k.name&&h?".":"")+h}var l=z[e];return!l||!d&&(d||l!==a&&l.self!==a)?c:l}function n(a,b){A[a]||(A[a]=[]),A[a].push(b)}function p(a){for(var b=A[a]||[];b.length;)q(b.shift())}function q(b){b=d(b,{self:b,resolve:b.resolve||{},toString:function(){return this.name}});var c=b.name;if(!N(c)||c.indexOf("@")>=0)throw new Error("State must have a valid name");if(z.hasOwnProperty(c))throw new Error("State '"+c+"' is already defined");var e=-1!==c.indexOf(".")?c.substring(0,c.lastIndexOf(".")):N(b.parent)?b.parent:O(b.parent)&&N(b.parent.name)?b.parent.name:"";if(e&&!z[e])return n(e,b.self);for(var f in C)M(C[f])&&(b[f]=C[f](b,C.$delegates[f]));return z[c]=b,!b[B]&&b.url&&a.when(b.url,["$match","$stateParams",function(a,c){y.$current.navigable==b&&j(a,c)||y.transitionTo(b,a,{inherit:!0,location:!1})}]),p(c),b}function r(a){return a.indexOf("*")>-1}function s(a){for(var b=a.split("."),c=y.$current.name.split("."),d=0,e=b.length;e>d;d++)"*"===b[d]&&(c[d]="*");return"**"===b[0]&&(c=c.slice(h(c,b[1])),c.unshift("**")),"**"===b[b.length-1]&&(c.splice(h(c,b[b.length-2])+1,Number.MAX_VALUE),c.push("**")),b.length!=c.length?!1:c.join("")===b.join("")}function t(a,b){return N(a)&&!L(b)?C[a]:M(b)&&N(a)?(C[a]&&!C.$delegates[a]&&(C.$delegates[a]=C[a]),C[a]=b,this):this}function u(a,b){return O(a)?b=a:b.name=a,q(b),this}function v(a,e,f,h,l,n,p,q,t){function u(b,c,d,f){var g=a.$broadcast("$stateNotFound",b,c,d);if(g.defaultPrevented)return p.update(),D;if(!g.retry)return null;if(f.$retry)return p.update(),E;var h=y.transition=e.when(g.retry);return h.then(function(){return h!==y.transition?A:(b.options.$retry=!0,y.transitionTo(b.to,b.toParams,b.options))},function(){return D}),p.update(),h}function v(a,c,d,g,i,j){function m(){var c=[];return Q(a.views,function(d,e){var g=d.resolve&&d.resolve!==a.resolve?d.resolve:{};g.$template=[function(){return f.load(e,{view:d,locals:i.globals,params:n,notify:j.notify})||""}],c.push(l.resolve(g,i.globals,i.resolve,a).then(function(c){if(M(d.controllerProvider)||P(d.controllerProvider)){var f=b.extend({},g,i.globals);c.$$controller=h.invoke(d.controllerProvider,null,f)}else c.$$controller=d.controller;c.$$state=a,c.$$controllerAs=d.controllerAs,c.$$resolveAs=d.resolveAs,i[e]=c}))}),e.all(c).then(function(){return i.globals})}var n=d?c:k(a.params.$$keys(),c),o={$stateParams:n};i.resolve=l.resolve(a.resolve,o,i.resolve,a);var p=[i.resolve.then(function(a){i.globals=a})];return g&&p.push(g),e.all(p).then(m).then(function(a){return i})}var A=e.reject(new Error("transition superseded")),C=e.reject(new Error("transition prevented")),D=e.reject(new Error("transition aborted")),E=e.reject(new Error("transition failed"));return x.locals={resolve:null,globals:{$stateParams:{}}},y={params:{},current:x.self,$current:x,transition:null},y.reload=function(a){return y.transitionTo(y.current,n,{reload:a||!0,inherit:!1,notify:!0})},y.go=function(a,b,c){return y.transitionTo(a,b,R({inherit:!0,relative:y.$current},c))},y.transitionTo=function(b,c,f){c=c||{},f=R({location:!0,inherit:!1,relative:null,notify:!0,reload:!1,$retry:!1},f||{});var g,j=y.$current,l=y.params,o=j.path,q=m(b,f.relative),r=c["#"];if(!L(q)){var s={to:b,toParams:c,options:f},t=u(s,j.self,l,f);if(t)return t;if(b=s.to,c=s.toParams,f=s.options,q=m(b,f.relative),!L(q)){if(!f.relative)throw new Error("No such state '"+b+"'");throw new Error("Could not resolve '"+b+"' from state '"+f.relative+"'")}}if(q[B])throw new Error("Cannot transition to abstract state '"+b+"'");if(f.inherit&&(c=i(n,c||{},y.$current,q)),!q.params.$$validates(c))return E;c=q.params.$$values(c),b=q;var z=b.path,D=0,F=z[D],G=x.locals,H=[];if(f.reload){if(N(f.reload)||O(f.reload)){if(O(f.reload)&&!f.reload.name)throw new Error("Invalid reload state object");var I=f.reload===!0?o[0]:m(f.reload);if(f.reload&&!I)throw new Error("No such reload state '"+(N(f.reload)?f.reload:f.reload.name)+"'");for(;F&&F===o[D]&&F!==I;)G=H[D]=F.locals,D++,F=z[D]}}else for(;F&&F===o[D]&&F.ownParams.$$equals(c,l);)G=H[D]=F.locals,D++,F=z[D];if(w(b,c,j,l,G,f))return r&&(c["#"]=r),y.params=c,S(y.params,n),S(k(b.params.$$keys(),n),b.locals.globals.$stateParams),f.location&&b.navigable&&b.navigable.url&&(p.push(b.navigable.url,c,{$$avoidResync:!0,replace:"replace"===f.location}),p.update(!0)),y.transition=null,e.when(y.current);if(c=k(b.params.$$keys(),c||{}),r&&(c["#"]=r),f.notify&&a.$broadcast("$stateChangeStart",b.self,c,j.self,l,f).defaultPrevented)return a.$broadcast("$stateChangeCancel",b.self,c,j.self,l),null==y.transition&&p.update(),C;for(var J=e.when(G),K=D;K<z.length;K++,F=z[K])G=H[K]=d(G),J=v(F,c,F===b,J,G,f);var M=y.transition=J.then(function(){var d,e,g;if(y.transition!==M)return A;for(d=o.length-1;d>=D;d--)g=o[d],g.self.onExit&&h.invoke(g.self.onExit,g.self,g.locals.globals),g.locals=null;for(d=D;d<z.length;d++)e=z[d],e.locals=H[d],e.self.onEnter&&h.invoke(e.self.onEnter,e.self,e.locals.globals);return y.transition!==M?A:(y.$current=b,y.current=b.self,y.params=c,S(y.params,n),y.transition=null,f.location&&b.navigable&&p.push(b.navigable.url,b.navigable.locals.globals.$stateParams,{$$avoidResync:!0,replace:"replace"===f.location}),f.notify&&a.$broadcast("$stateChangeSuccess",b.self,c,j.self,l),p.update(!0),y.current)}).then(null,function(d){return y.transition!==M?A:(y.transition=null,g=a.$broadcast("$stateChangeError",b.self,c,j.self,l,d),g.defaultPrevented||p.update(),e.reject(d))});return M},y.is=function(a,b,d){d=R({relative:y.$current},d||{});var e=m(a,d.relative);return L(e)?y.$current!==e?!1:b?j(e.params.$$values(b),n):!0:c},y.includes=function(a,b,d){if(d=R({relative:y.$current},d||{}),N(a)&&r(a)){if(!s(a))return!1;a=y.$current.name}var e=m(a,d.relative);return L(e)?L(y.$current.includes[e.name])?b?j(e.params.$$values(b),n,g(b)):!0:!1:c},y.href=function(a,b,d){d=R({lossy:!0,inherit:!0,absolute:!1,relative:y.$current},d||{});var e=m(a,d.relative);if(!L(e))return null;d.inherit&&(b=i(n,b||{},y.$current,e));var f=e&&d.lossy?e.navigable:e;return f&&f.url!==c&&null!==f.url?p.href(f.url,k(e.params.$$keys().concat("#"),b||{}),{absolute:d.absolute}):null},y.get=function(a,b){if(0===arguments.length)return o(g(z),function(a){return z[a].self});var c=m(a,b||y.$current);return c&&c.self?c.self:null},y}function w(a,b,c,d,e,f){function g(a,b,c){function d(b){return"search"!=a.params[b].location}var e=a.params.$$keys().filter(d),f=l.apply({},[a.params].concat(e)),g=new U.ParamSet(f);return g.$$equals(b,c)}return!f.reload&&a===c&&(e===c.locals||a.self.reloadOnSearch===!1&&g(c,d,b))?!0:void 0}var x,y,z={},A={},B="abstract",C={parent:function(a){if(L(a.parent)&&a.parent)return m(a.parent);var b=/^(.+)\.[^.]+$/.exec(a.name);return b?m(b[1]):x},data:function(a){return a.parent&&a.parent.data&&(a.data=a.self.data=d(a.parent.data,a.data)),a.data},url:function(a){var b=a.url,c={params:a.params||{}};if(N(b))return"^"==b.charAt(0)?e.compile(b.substring(1),c):(a.parent.navigable||x).url.concat(b,c);if(!b||e.isMatcher(b))return b;throw new Error("Invalid url '"+b+"' in state '"+a+"'")},navigable:function(a){return a.url?a:a.parent?a.parent.navigable:null},ownParams:function(a){var b=a.url&&a.url.params||new U.ParamSet;return Q(a.params||{},function(a,c){b[c]||(b[c]=new U.Param(c,null,a,"config"))}),b},params:function(a){var b=l(a.ownParams,a.ownParams.$$keys());return a.parent&&a.parent.params?R(a.parent.params.$$new(),b):new U.ParamSet},views:function(a){var b={};return Q(L(a.views)?a.views:{"":a},function(c,d){d.indexOf("@")<0&&(d+="@"+a.parent.name),c.resolveAs=c.resolveAs||a.resolveAs||"$resolve",b[d]=c}),b},path:function(a){return a.parent?a.parent.path.concat(a):[]},includes:function(a){var b=a.parent?R({},a.parent.includes):{};return b[a.name]=!0,b},$delegates:{}};x=q({name:"",url:"^",views:null,"abstract":!0}),x.navigable=null,this.decorator=t,this.state=u,this.$get=v,v.$inject=["$rootScope","$q","$view","$injector","$resolve","$stateParams","$urlRouter","$location","$urlMatcherFactory"]}function w(){function a(a,b){return{load:function(a,c){var d,e={template:null,controller:null,view:null,locals:null,notify:!0,async:!0,params:{}};return c=R(e,c),c.view&&(d=b.fromConfig(c.view,c.params,c.locals)),d}}}this.$get=a,a.$inject=["$rootScope","$templateFactory"]}function x(){var a=!1;this.useAnchorScroll=function(){a=!0},this.$get=["$anchorScroll","$timeout",function(b,c){return a?b:function(a){return c(function(){a[0].scrollIntoView()},0,!1)}}]}function y(a,c,d,e,f){function g(){return c.has?function(a){return c.has(a)?c.get(a):null}:function(a){try{return c.get(a)}catch(b){return null}}}function h(a,c){var d=function(){return{enter:function(a,b,c){b.after(a),c()},leave:function(a,b){a.remove(),b()}}};if(k)return{enter:function(a,c,d){b.version.minor>2?k.enter(a,null,c).then(d):k.enter(a,null,c,d)},leave:function(a,c){b.version.minor>2?k.leave(a).then(c):k.leave(a,c)}};if(j){var e=j&&j(c,a);return{enter:function(a,b,c){e.enter(a,null,b),c()},leave:function(a,b){e.leave(a),b()}}}return d()}var i=g(),j=i("$animator"),k=i("$animate"),l={restrict:"ECA",terminal:!0,priority:400,transclude:"element",compile:function(c,g,i){return function(c,g,j){function k(){if(m&&(m.remove(),m=null),o&&(o.$destroy(),o=null),n){var a=n.data("$uiViewAnim");s.leave(n,function(){a.$$animLeave.resolve(),m=null}),m=n,n=null}}function l(h){var l,m=A(c,j,g,e),t=m&&a.$current&&a.$current.locals[m];if(h||t!==p){l=c.$new(),p=a.$current.locals[m],l.$emit("$viewContentLoading",m);var u=i(l,function(a){var e=f.defer(),h=f.defer(),i={$animEnter:e.promise,$animLeave:h.promise,$$animLeave:h};a.data("$uiViewAnim",i),s.enter(a,g,function(){e.resolve(),o&&o.$emit("$viewContentAnimationEnded"),(b.isDefined(r)&&!r||c.$eval(r))&&d(a)}),k()});n=u,o=l,o.$emit("$viewContentLoaded",m),o.$eval(q)}}var m,n,o,p,q=j.onload||"",r=j.autoscroll,s=h(j,c);g.inheritedData("$uiView");c.$on("$stateChangeSuccess",function(){l(!1)}),l(!0)}}};return l}function z(a,c,d,e){return{restrict:"ECA",priority:-400,compile:function(f){var g=f.html();return function(f,h,i){var j=d.$current,k=A(f,i,h,e),l=j&&j.locals[k];if(l){h.data("$uiView",{name:k,state:l.$$state}),h.html(l.$template?l.$template:g);var m=b.extend({},l);f[l.$$resolveAs]=m;var n=a(h.contents());if(l.$$controller){l.$scope=f,l.$element=h;var o=c(l.$$controller,l);l.$$controllerAs&&(f[l.$$controllerAs]=o,f[l.$$controllerAs][l.$$resolveAs]=m),M(o.$onInit)&&o.$onInit(),h.data("$ngControllerController",o),h.children().data("$ngControllerController",o)}n(f)}}}}}function A(a,b,c,d){var e=d(b.uiView||b.name||"")(a),f=c.inheritedData("$uiView");return e.indexOf("@")>=0?e:e+"@"+(f?f.state.name:"")}function B(a,b){var c,d=a.match(/^\s*({[^}]*})\s*$/);if(d&&(a=b+"("+d[1]+")"),c=a.replace(/\n/g," ").match(/^([^(]+?)\s*(\((.*)\))?$/),!c||4!==c.length)throw new Error("Invalid state ref '"+a+"'");return{state:c[1],paramExpr:c[3]||null}}function C(a){var b=a.parent().inheritedData("$uiView");return b&&b.state&&b.state.name?b.state:void 0}function D(a){var b="[object SVGAnimatedString]"===Object.prototype.toString.call(a.prop("href")),c="FORM"===a[0].nodeName;return{attr:c?"action":b?"xlink:href":"href",isAnchor:"A"===a.prop("tagName").toUpperCase(),clickable:!c}}function E(a,b,c,d,e){return function(f){var g=f.which||f.button,h=e();if(!(g>1||f.ctrlKey||f.metaKey||f.shiftKey||a.attr("target"))){var i=c(function(){b.go(h.state,h.params,h.options)});f.preventDefault();var j=d.isAnchor&&!h.href?1:0;f.preventDefault=function(){j--<=0&&c.cancel(i)}}}}function F(a,b){return{relative:C(a)||b.$current,inherit:!0}}function G(a,c){return{restrict:"A",require:["?^uiSrefActive","?^uiSrefActiveEq"],link:function(d,e,f,g){var h,i=B(f.uiSref,a.current.name),j={state:i.state,href:null,params:null},k=D(e),l=g[1]||g[0],m=null;j.options=R(F(e,a),f.uiSrefOpts?d.$eval(f.uiSrefOpts):{});var n=function(c){c&&(j.params=b.copy(c)),j.href=a.href(i.state,j.params,j.options),m&&m(),l&&(m=l.$$addStateInfo(i.state,j.params)),null!==j.href&&f.$set(k.attr,j.href)};i.paramExpr&&(d.$watch(i.paramExpr,function(a){a!==j.params&&n(a)},!0),j.params=b.copy(d.$eval(i.paramExpr))),n(),k.clickable&&(h=E(e,a,c,k,function(){return j}),e.bind("click",h),d.$on("$destroy",function(){e.unbind("click",h)}))}}}function H(a,b){return{restrict:"A",require:["?^uiSrefActive","?^uiSrefActiveEq"],link:function(c,d,e,f){function g(b){m.state=b[0],m.params=b[1],m.options=b[2],m.href=a.href(m.state,m.params,m.options),n&&n(),j&&(n=j.$$addStateInfo(m.state,m.params)),m.href&&e.$set(i.attr,m.href)}var h,i=D(d),j=f[1]||f[0],k=[e.uiState,e.uiStateParams||null,e.uiStateOpts||null],l="["+k.map(function(a){return a||"null"}).join(", ")+"]",m={state:null,params:null,options:null,href:null},n=null;c.$watch(l,g,!0),g(c.$eval(l)),i.clickable&&(h=E(d,a,b,i,function(){return m}),d.bind("click",h),c.$on("$destroy",function(){d.unbind("click",h)}))}}}function I(a,b,c){return{restrict:"A",controller:["$scope","$element","$attrs","$timeout",function(b,d,e,f){function g(b,c,e){var f=a.get(b,C(d)),g=h(b,c),i={state:f||{name:b},params:c,hash:g};return p.push(i),q[g]=e,function(){var a=p.indexOf(i);-1!==a&&p.splice(a,1)}}function h(a,c){if(!N(a))throw new Error("state should be a string");return O(c)?a+T(c):(c=b.$eval(c),O(c)?a+T(c):a)}function i(){for(var a=0;a<p.length;a++)l(p[a].state,p[a].params)?j(d,q[p[a].hash]):k(d,q[p[a].hash]),m(p[a].state,p[a].params)?j(d,n):k(d,n)}function j(a,b){f(function(){a.addClass(b)})}function k(a,b){a.removeClass(b)}function l(b,c){return a.includes(b.name,c)}function m(b,c){return a.is(b.name,c)}var n,o,p=[],q={};n=c(e.uiSrefActiveEq||"",!1)(b);try{o=b.$eval(e.uiSrefActive)}catch(r){}o=o||c(e.uiSrefActive||"",!1)(b),O(o)&&Q(o,function(c,d){if(N(c)){var e=B(c,a.current.name);g(e.state,b.$eval(e.paramExpr),d)}}),this.$$addStateInfo=function(a,b){if(!(O(o)&&p.length>0)){var c=g(a,b,o);return i(),c}},b.$on("$stateChangeSuccess",i),i()}]}}function J(a){var b=function(b,c){return a.is(b,c)};return b.$stateful=!0,b}function K(a){var b=function(b,c,d){return a.includes(b,c,d)};return b.$stateful=!0,b}var L=b.isDefined,M=b.isFunction,N=b.isString,O=b.isObject,P=b.isArray,Q=b.forEach,R=b.extend,S=b.copy,T=b.toJson;b.module("ui.router.util",["ng"]),b.module("ui.router.router",["ui.router.util"]),b.module("ui.router.state",["ui.router.router","ui.router.util"]),b.module("ui.router",["ui.router.state"]),b.module("ui.router.compat",["ui.router"]),p.$inject=["$q","$injector"],b.module("ui.router.util").service("$resolve",p),q.$inject=["$http","$templateCache","$injector"],b.module("ui.router.util").service("$templateFactory",q);var U;r.prototype.concat=function(a,b){var c={caseInsensitive:U.caseInsensitive(),strict:U.strictMode(),squash:U.defaultSquashPolicy()};return new r(this.sourcePath+a+this.sourceSearch,R(c,b),this)},r.prototype.toString=function(){return this.source},r.prototype.exec=function(a,b){function c(a){function b(a){return a.split("").reverse().join("")}function c(a){return a.replace(/\\-/g,"-")}var d=b(a).split(/-(?!\\)/),e=o(d,b);return o(e,c).reverse()}var d=this.regexp.exec(a);if(!d)return null;b=b||{};var e,f,g,h=this.parameters(),i=h.length,j=this.segments.length-1,k={};if(j!==d.length-1)throw new Error("Unbalanced capture group in route '"+this.source+"'");var l,m;for(e=0;j>e;e++){for(g=h[e],l=this.params[g],m=d[e+1],f=0;f<l.replace.length;f++)l.replace[f].from===m&&(m=l.replace[f].to);m&&l.array===!0&&(m=c(m)),L(m)&&(m=l.type.decode(m)),k[g]=l.value(m)}for(;i>e;e++){for(g=h[e],k[g]=this.params[g].value(b[g]),l=this.params[g],m=b[g],f=0;f<l.replace.length;f++)l.replace[f].from===m&&(m=l.replace[f].to);L(m)&&(m=l.type.decode(m)),k[g]=l.value(m)}return k},r.prototype.parameters=function(a){return L(a)?this.params[a]||null:this.$$paramNames},r.prototype.validates=function(a){return this.params.$$validates(a)},r.prototype.format=function(a){function b(a){return encodeURIComponent(a).replace(/-/g,function(a){return"%5C%"+a.charCodeAt(0).toString(16).toUpperCase()})}a=a||{};var c=this.segments,d=this.parameters(),e=this.params;if(!this.validates(a))return null;var f,g=!1,h=c.length-1,i=d.length,j=c[0];for(f=0;i>f;f++){var k=h>f,l=d[f],m=e[l],n=m.value(a[l]),p=m.isOptional&&m.type.equals(m.value(),n),q=p?m.squash:!1,r=m.type.encode(n);if(k){var s=c[f+1],t=f+1===h;if(q===!1)null!=r&&(j+=P(r)?o(r,b).join("-"):encodeURIComponent(r)),j+=s;else if(q===!0){var u=j.match(/\/$/)?/\/?(.*)/:/(.*)/;j+=s.match(u)[1]}else N(q)&&(j+=q+s);t&&m.squash===!0&&"/"===j.slice(-1)&&(j=j.slice(0,-1))}else{if(null==r||p&&q!==!1)continue;if(P(r)||(r=[r]),0===r.length)continue;r=o(r,encodeURIComponent).join("&"+l+"="),j+=(g?"&":"?")+(l+"="+r),g=!0}}return j},s.prototype.is=function(a,b){return!0},s.prototype.encode=function(a,b){return a},s.prototype.decode=function(a,b){return a},s.prototype.equals=function(a,b){return a==b},s.prototype.$subPattern=function(){var a=this.pattern.toString();return a.substr(1,a.length-2)},s.prototype.pattern=/.*/,s.prototype.toString=function(){return"{Type:"+this.name+"}"},s.prototype.$normalize=function(a){return this.is(a)?a:this.decode(a)},s.prototype.$asArray=function(a,b){function d(a,b){function d(a,b){return function(){return a[b].apply(a,arguments)}}function e(a){return P(a)?a:L(a)?[a]:[]}function f(a){switch(a.length){case 0:return c;case 1:return"auto"===b?a[0]:a;default:return a}}function g(a){return!a}function h(a,b){return function(c){if(P(c)&&0===c.length)return c;c=e(c);var d=o(c,a);return b===!0?0===n(d,g).length:f(d)}}function i(a){return function(b,c){var d=e(b),f=e(c);if(d.length!==f.length)return!1;for(var g=0;g<d.length;g++)if(!a(d[g],f[g]))return!1;return!0}}this.encode=h(d(a,"encode")),this.decode=h(d(a,"decode")),this.is=h(d(a,"is"),!0),this.equals=i(d(a,"equals")),this.pattern=a.pattern,this.$normalize=h(d(a,"$normalize")),this.name=a.name,this.$arrayMode=b}if(!a)return this;if("auto"===a&&!b)throw new Error("'auto' array mode is for query parameters only");return new d(this,a)},b.module("ui.router.util").provider("$urlMatcherFactory",t),b.module("ui.router.util").run(["$urlMatcherFactory",function(a){}]),u.$inject=["$locationProvider","$urlMatcherFactoryProvider"],b.module("ui.router.router").provider("$urlRouter",u),v.$inject=["$urlRouterProvider","$urlMatcherFactoryProvider"],b.module("ui.router.state").factory("$stateParams",function(){return{}}).constant("$state.runtime",{autoinject:!0}).provider("$state",v).run(["$injector",function(a){
a.get("$state.runtime").autoinject&&a.get("$state")}]),w.$inject=[],b.module("ui.router.state").provider("$view",w),b.module("ui.router.state").provider("$uiViewScroll",x),y.$inject=["$state","$injector","$uiViewScroll","$interpolate","$q"],z.$inject=["$compile","$controller","$state","$interpolate"],b.module("ui.router.state").directive("uiView",y),b.module("ui.router.state").directive("uiView",z),G.$inject=["$state","$timeout"],H.$inject=["$state","$timeout"],I.$inject=["$state","$stateParams","$interpolate"],b.module("ui.router.state").directive("uiSref",G).directive("uiSrefActive",I).directive("uiSrefActiveEq",I).directive("uiState",H),J.$inject=["$state"],K.$inject=["$state"],b.module("ui.router.state").filter("isState",J).filter("includedByState",K)}(window,window.angular);
/*! 12.2.9 */
!window.XMLHttpRequest||window.FileAPI&&FileAPI.shouldLoad||(window.XMLHttpRequest.prototype.setRequestHeader=function(a){return function(b,c){if("__setXHR_"===b){var d=c(this);d instanceof Function&&d(this)}else a.apply(this,arguments)}}(window.XMLHttpRequest.prototype.setRequestHeader));var ngFileUpload=angular.module("ngFileUpload",[]);ngFileUpload.version="12.2.9",ngFileUpload.service("UploadBase",["$http","$q","$timeout",function(a,b,c){function d(d){function e(a){j.notify&&j.notify(a),k.progressFunc&&c(function(){k.progressFunc(a)})}function h(a){return null!=d._start&&g?{loaded:a.loaded+d._start,total:d._file&&d._file.size||a.total,type:a.type,config:d,lengthComputable:!0,target:a.target}:a}function i(){a(d).then(function(a){if(g&&d._chunkSize&&!d._finished&&d._file){var b=d._file&&d._file.size||0;e({loaded:Math.min(d._end,b),total:b,config:d,type:"progress"}),f.upload(d,!0)}else d._finished&&delete d._finished,j.resolve(a)},function(a){j.reject(a)},function(a){j.notify(a)})}d.method=d.method||"POST",d.headers=d.headers||{};var j=d._deferred=d._deferred||b.defer(),k=j.promise;return d.disableProgress||(d.headers.__setXHR_=function(){return function(a){a&&a.upload&&a.upload.addEventListener&&(d.__XHR=a,d.xhrFn&&d.xhrFn(a),a.upload.addEventListener("progress",function(a){a.config=d,e(h(a))},!1),a.upload.addEventListener("load",function(a){a.lengthComputable&&(a.config=d,e(h(a)))},!1))}}),g?d._chunkSize&&d._end&&!d._finished?(d._start=d._end,d._end+=d._chunkSize,i()):d.resumeSizeUrl?a.get(d.resumeSizeUrl).then(function(a){d._start=d.resumeSizeResponseReader?d.resumeSizeResponseReader(a.data):parseInt((null==a.data.size?a.data:a.data.size).toString()),d._chunkSize&&(d._end=d._start+d._chunkSize),i()},function(a){throw a}):d.resumeSize?d.resumeSize().then(function(a){d._start=a,d._chunkSize&&(d._end=d._start+d._chunkSize),i()},function(a){throw a}):(d._chunkSize&&(d._start=0,d._end=d._start+d._chunkSize),i()):i(),k.success=function(a){return k.then(function(b){a(b.data,b.status,b.headers,d)}),k},k.error=function(a){return k.then(null,function(b){a(b.data,b.status,b.headers,d)}),k},k.progress=function(a){return k.progressFunc=a,k.then(null,null,function(b){a(b)}),k},k.abort=k.pause=function(){return d.__XHR&&c(function(){d.__XHR.abort()}),k},k.xhr=function(a){return d.xhrFn=function(b){return function(){b&&b.apply(k,arguments),a.apply(k,arguments)}}(d.xhrFn),k},f.promisesCount++,k["finally"]&&k["finally"]instanceof Function&&k["finally"](function(){f.promisesCount--}),k}function e(a){var b={};for(var c in a)a.hasOwnProperty(c)&&(b[c]=a[c]);return b}var f=this;f.promisesCount=0,this.isResumeSupported=function(){return window.Blob&&window.Blob.prototype.slice};var g=this.isResumeSupported();this.isUploadInProgress=function(){return f.promisesCount>0},this.rename=function(a,b){return a.ngfName=b,a},this.jsonBlob=function(a){null==a||angular.isString(a)||(a=JSON.stringify(a));var b=new window.Blob([a],{type:"application/json"});return b._ngfBlob=!0,b},this.json=function(a){return angular.toJson(a)},this.isFile=function(a){return null!=a&&(a instanceof window.Blob||a.flashId&&a.name&&a.size)},this.upload=function(a,b){function c(b,c){if(b._ngfBlob)return b;if(a._file=a._file||b,null!=a._start&&g){a._end&&a._end>=b.size&&(a._finished=!0,a._end=b.size);var d=b.slice(a._start,a._end||b.size);return d.name=b.name,d.ngfName=b.ngfName,a._chunkSize&&(c.append("_chunkSize",a._chunkSize),c.append("_currentChunkSize",a._end-a._start),c.append("_chunkNumber",Math.floor(a._start/a._chunkSize)),c.append("_totalSize",a._file.size)),d}return b}function h(b,d,e){if(void 0!==d)if(angular.isDate(d)&&(d=d.toISOString()),angular.isString(d))b.append(e,d);else if(f.isFile(d)){var g=c(d,b),i=e.split(",");i[1]&&(g.ngfName=i[1].replace(/^\s+|\s+$/g,""),e=i[0]),a._fileKey=a._fileKey||e,b.append(e,g,g.ngfName||g.name)}else if(angular.isObject(d)){if(d.$$ngfCircularDetection)throw"ngFileUpload: Circular reference in config.data. Make sure specified data for Upload.upload() has no circular reference: "+e;d.$$ngfCircularDetection=!0;try{for(var j in d)if(d.hasOwnProperty(j)&&"$$ngfCircularDetection"!==j){var k=null==a.objectKey?"[i]":a.objectKey;d.length&&parseInt(j)>-1&&(k=null==a.arrayKey?k:a.arrayKey),h(b,d[j],e+k.replace(/[ik]/g,j))}}finally{delete d.$$ngfCircularDetection}}else b.append(e,d)}function i(){a._chunkSize=f.translateScalars(a.resumeChunkSize),a._chunkSize=a._chunkSize?parseInt(a._chunkSize.toString()):null,a.headers=a.headers||{},a.headers["Content-Type"]=void 0,a.transformRequest=a.transformRequest?angular.isArray(a.transformRequest)?a.transformRequest:[a.transformRequest]:[],a.transformRequest.push(function(b){var c,d=new window.FormData;b=b||a.fields||{},a.file&&(b.file=a.file);for(c in b)if(b.hasOwnProperty(c)){var e=b[c];a.formDataAppender?a.formDataAppender(d,c,e):h(d,e,c)}return d})}return b||(a=e(a)),a._isDigested||(a._isDigested=!0,i()),d(a)},this.http=function(b){return b=e(b),b.transformRequest=b.transformRequest||function(b){return window.ArrayBuffer&&b instanceof window.ArrayBuffer||b instanceof window.Blob?b:a.defaults.transformRequest[0].apply(this,arguments)},b._chunkSize=f.translateScalars(b.resumeChunkSize),b._chunkSize=b._chunkSize?parseInt(b._chunkSize.toString()):null,d(b)},this.translateScalars=function(a){if(angular.isString(a)){if(a.search(/kb/i)===a.length-2)return parseFloat(1024*a.substring(0,a.length-2));if(a.search(/mb/i)===a.length-2)return parseFloat(1048576*a.substring(0,a.length-2));if(a.search(/gb/i)===a.length-2)return parseFloat(1073741824*a.substring(0,a.length-2));if(a.search(/b/i)===a.length-1)return parseFloat(a.substring(0,a.length-1));if(a.search(/s/i)===a.length-1)return parseFloat(a.substring(0,a.length-1));if(a.search(/m/i)===a.length-1)return parseFloat(60*a.substring(0,a.length-1));if(a.search(/h/i)===a.length-1)return parseFloat(3600*a.substring(0,a.length-1))}return a},this.urlToBlob=function(c){var d=b.defer();return a({url:c,method:"get",responseType:"arraybuffer"}).then(function(a){var b=new Uint8Array(a.data),e=a.headers("content-type")||"image/WebP",f=new window.Blob([b],{type:e}),g=c.match(/.*\/(.+?)(\?.*)?$/);g.length>1&&(f.name=g[1]),d.resolve(f)},function(a){d.reject(a)}),d.promise},this.setDefaults=function(a){this.defaults=a||{}},this.defaults={},this.version=ngFileUpload.version}]),ngFileUpload.service("Upload",["$parse","$timeout","$compile","$q","UploadExif",function(a,b,c,d,e){function f(a,b,c){var e=[i.emptyPromise()];return angular.forEach(a,function(d,f){0===d.type.indexOf("image/jpeg")&&i.attrGetter("ngfFixOrientation",b,c,{$file:d})&&e.push(i.happyPromise(i.applyExifRotation(d),d).then(function(b){a.splice(f,1,b)}))}),d.all(e)}function g(a,b,c){var e=i.attrGetter("ngfResize",b,c);if(!e||!i.isResizeSupported()||!a.length)return i.emptyPromise();if(e instanceof Function){var f=d.defer();return e(a).then(function(d){h(d,a,b,c).then(function(a){f.resolve(a)},function(a){f.reject(a)})},function(a){f.reject(a)})}return h(e,a,b,c)}function h(a,b,c,e){function f(d,f){if(0===d.type.indexOf("image")){if(a.pattern&&!i.validatePattern(d,a.pattern))return;a.resizeIf=function(a,b){return i.attrGetter("ngfResizeIf",c,e,{$width:a,$height:b,$file:d})};var h=i.resize(d,a);g.push(h),h.then(function(a){b.splice(f,1,a)},function(a){d.$error="resize",d.$errorParam=(a?(a.message?a.message:a)+": ":"")+(d&&d.name)})}}for(var g=[i.emptyPromise()],h=0;h<b.length;h++)f(b[h],h);return d.all(g)}var i=e;return i.getAttrWithDefaults=function(a,b){if(null!=a[b])return a[b];var c=i.defaults[b];return null==c?c:angular.isString(c)?c:JSON.stringify(c)},i.attrGetter=function(b,c,d,e){var f=this.getAttrWithDefaults(c,b);if(!d)return f;try{return e?a(f)(d,e):a(f)(d)}catch(g){if(b.search(/min|max|pattern/i))return f;throw g}},i.shouldUpdateOn=function(a,b,c){var d=i.attrGetter("ngfModelOptions",b,c);return d&&d.updateOn?d.updateOn.split(" ").indexOf(a)>-1:!0},i.emptyPromise=function(){var a=d.defer(),c=arguments;return b(function(){a.resolve.apply(a,c)}),a.promise},i.rejectPromise=function(){var a=d.defer(),c=arguments;return b(function(){a.reject.apply(a,c)}),a.promise},i.happyPromise=function(a,c){var e=d.defer();return a.then(function(a){e.resolve(a)},function(a){b(function(){throw a}),e.resolve(c)}),e.promise},i.updateModel=function(c,d,e,h,j,k,l){function m(f,g,j,l,m){d.$$ngfPrevValidFiles=f,d.$$ngfPrevInvalidFiles=g;var n=f&&f.length?f[0]:null,o=g&&g.length?g[0]:null;c&&(i.applyModelValidation(c,f),c.$setViewValue(m?n:f)),h&&a(h)(e,{$files:f,$file:n,$newFiles:j,$duplicateFiles:l,$invalidFiles:g,$invalidFile:o,$event:k});var p=i.attrGetter("ngfModelInvalid",d);p&&b(function(){a(p).assign(e,m?o:g)}),b(function(){})}function n(){function a(a,b){return a.name===b.name&&(a.$ngfOrigSize||a.size)===(b.$ngfOrigSize||b.size)&&a.type===b.type}function b(b){var c;for(c=0;c<r.length;c++)if(a(b,r[c]))return!0;for(c=0;c<s.length;c++)if(a(b,s[c]))return!0;return!1}if(j){q=[],t=[];for(var c=0;c<j.length;c++)b(j[c])?t.push(j[c]):q.push(j[c])}}function o(a){return angular.isArray(a)?a:[a]}function p(){function a(){b(function(){m(w?r.concat(v):v,w?s.concat(u):u,j,t,x)},z&&z.debounce?z.debounce.change||z.debounce:0)}g(y?q:v,d,e).then(function(){y?i.validate(q,w?r.length:0,c,d,e).then(function(b){v=b.validsFiles,u=b.invalidsFiles,a()}):a()},function(a){throw"Could not resize files "+a})}var q,r,s,t=[],u=[],v=[];r=d.$$ngfPrevValidFiles||[],s=d.$$ngfPrevInvalidFiles||[],c&&c.$modelValue&&(r=o(c.$modelValue));var w=i.attrGetter("ngfKeep",d,e);q=(j||[]).slice(0),("distinct"===w||i.attrGetter("ngfKeepDistinct",d,e)===!0)&&n(d,e);var x=!w&&!i.attrGetter("ngfMultiple",d,e)&&!i.attrGetter("multiple",d);if(!w||q.length){i.attrGetter("ngfBeforeModelChange",d,e,{$files:j,$file:j&&j.length?j[0]:null,$newFiles:q,$duplicateFiles:t,$event:k});var y=i.attrGetter("ngfValidateAfterResize",d,e),z=i.attrGetter("ngfModelOptions",d,e);i.validate(q,w?r.length:0,c,d,e).then(function(a){l?m(q,[],j,t,x):(z&&z.allowInvalid||y?v=q:(v=a.validFiles,u=a.invalidFiles),i.attrGetter("ngfFixOrientation",d,e)&&i.isExifSupported()?f(v,d,e).then(function(){p()}):p())})}},i}]),ngFileUpload.directive("ngfSelect",["$parse","$timeout","$compile","Upload",function(a,b,c,d){function e(a){var b=a.match(/Android[^\d]*(\d+)\.(\d+)/);if(b&&b.length>2){var c=d.defaults.androidFixMinorVersion||4;return parseInt(b[1])<4||parseInt(b[1])===c&&parseInt(b[2])<c}return-1===a.indexOf("Chrome")&&/.*Windows.*Safari.*/.test(a)}function f(a,b,c,d,f,h,i,j){function k(){return"input"===b[0].tagName.toLowerCase()&&c.type&&"file"===c.type.toLowerCase()}function l(){return t("ngfChange")||t("ngfSelect")}function m(b){if(j.shouldUpdateOn("change",c,a)){var e=b.__files_||b.target&&b.target.files,f=[];if(!e)return;for(var g=0;g<e.length;g++)f.push(e[g]);j.updateModel(d,c,a,l(),f.length?f:null,b)}}function n(a){for(var c=0;c<b[0].attributes.length;c++){var d=b[0].attributes[c];"type"!==d.name&&"class"!==d.name&&"style"!==d.name&&((null==d.value||""===d.value)&&("required"===d.name&&(d.value="required"),"multiple"===d.name&&(d.value="multiple")),a.attr(d.name,"id"===d.name?"ngf-"+d.value:d.value))}}function o(){if(k())return b;var a=angular.element('<input type="file">');n(a);var c=angular.element("<label>upload</label>");return c.css("visibility","hidden").css("position","absolute").css("overflow","hidden").css("width","0px").css("height","0px").css("border","none").css("margin","0px").css("padding","0px").attr("tabindex","-1"),b.attr("id")&&c.attr("id","ngf-label-"+b.attr("id")),g.push({el:b,ref:c}),document.body.appendChild(c.append(a)[0]),a}function p(c){if(b.attr("disabled"))return!1;if(!t("ngfSelectDisabled",a)){var d=q(c);if(null!=d)return d;r(c);try{k()||document.body.contains(x[0])||(g.push({el:b,ref:x.parent()}),document.body.appendChild(x.parent()[0]),x.bind("change",m))}catch(f){}return e(navigator.userAgent)?setTimeout(function(){x[0].click()},0):x[0].click(),!1}}function q(a){var b=a.changedTouches||a.originalEvent&&a.originalEvent.changedTouches;if(b){if("touchstart"===a.type)return w=b[0].clientX,v=b[0].clientY,!0;if("touchend"===a.type){var c=b[0].clientX,d=b[0].clientY;if(Math.abs(c-w)>20||Math.abs(d-v)>20)return a.stopPropagation(),a.preventDefault(),!1}return!0}}function r(b){j.shouldUpdateOn("click",c,a)&&x.val()&&(x.val(null),j.updateModel(d,c,a,l(),null,b,!0))}function s(a){if(x&&!x.attr("__ngf_ie10_Fix_")){if(!x[0].parentNode)return void(x=null);a.preventDefault(),a.stopPropagation(),x.unbind("click");var b=x.clone();return x.replaceWith(b),x=b,x.attr("__ngf_ie10_Fix_","true"),x.bind("change",m),x.bind("click",s),x[0].click(),!1}x.removeAttr("__ngf_ie10_Fix_")}var t=function(a,b){return j.attrGetter(a,c,b)};j.registerModelChangeValidator(d,c,a);var u=[];t("ngfMultiple")&&u.push(a.$watch(t("ngfMultiple"),function(){x.attr("multiple",t("ngfMultiple",a))})),t("ngfCapture")&&u.push(a.$watch(t("ngfCapture"),function(){x.attr("capture",t("ngfCapture",a))})),t("ngfAccept")&&u.push(a.$watch(t("ngfAccept"),function(){x.attr("accept",t("ngfAccept",a))})),c.$observe("accept",function(){x.attr("accept",t("accept"))}),u.push(function(){c.$$observers&&delete c.$$observers.accept});var v=0,w=0,x=b;k()||(x=o()),x.bind("change",m),k()?b.bind("click",r):b.bind("click touchstart touchend",p),-1!==navigator.appVersion.indexOf("MSIE 10")&&x.bind("click",s),d&&d.$formatters.push(function(a){return(null==a||0===a.length)&&x.val()&&x.val(null),a}),a.$on("$destroy",function(){k()||x.parent().remove(),angular.forEach(u,function(a){a()})}),h(function(){for(var a=0;a<g.length;a++){var b=g[a];document.body.contains(b.el[0])||(g.splice(a,1),b.ref.remove())}}),window.FileAPI&&window.FileAPI.ngfFixIE&&window.FileAPI.ngfFixIE(b,x,m)}var g=[];return{restrict:"AEC",require:"?ngModel",link:function(e,g,h,i){f(e,g,h,i,a,b,c,d)}}}]),function(){function a(a){return"img"===a.tagName.toLowerCase()?"image":"audio"===a.tagName.toLowerCase()?"audio":"video"===a.tagName.toLowerCase()?"video":/./}function b(b,c,d,e,f,g,h,i){function j(a){var g=b.attrGetter("ngfNoObjectUrl",f,d);b.dataUrl(a,g)["finally"](function(){c(function(){var b=(g?a.$ngfDataUrl:a.$ngfBlobUrl)||a.$ngfDataUrl;i?e.css("background-image","url('"+(b||"")+"')"):e.attr("src",b),b?e.removeClass("ng-hide"):e.addClass("ng-hide")})})}c(function(){var c=d.$watch(f[g],function(c){var k=h;if("ngfThumbnail"===g&&(k||(k={width:e[0].naturalWidth||e[0].clientWidth,height:e[0].naturalHeight||e[0].clientHeight}),0===k.width&&window.getComputedStyle)){var l=getComputedStyle(e[0]);k={width:parseInt(l.width.slice(0,-2)),height:parseInt(l.height.slice(0,-2))}}return angular.isString(c)?(e.removeClass("ng-hide"),i?e.css("background-image","url('"+c+"')"):e.attr("src",c)):void(!c||!c.type||0!==c.type.search(a(e[0]))||i&&0!==c.type.indexOf("image")?e.addClass("ng-hide"):k&&b.isResizeSupported()?(k.resizeIf=function(a,e){return b.attrGetter("ngfResizeIf",f,d,{$width:a,$height:e,$file:c})},b.resize(c,k).then(function(a){j(a)},function(a){throw a})):j(c))});d.$on("$destroy",function(){c()})})}ngFileUpload.service("UploadDataUrl",["UploadBase","$timeout","$q",function(a,b,c){var d=a;return d.base64DataUrl=function(a){if(angular.isArray(a)){var b=c.defer(),e=0;return angular.forEach(a,function(c){d.dataUrl(c,!0)["finally"](function(){if(e++,e===a.length){var c=[];angular.forEach(a,function(a){c.push(a.$ngfDataUrl)}),b.resolve(c,a)}})}),b.promise}return d.dataUrl(a,!0)},d.dataUrl=function(a,e){if(!a)return d.emptyPromise(a,a);if(e&&null!=a.$ngfDataUrl||!e&&null!=a.$ngfBlobUrl)return d.emptyPromise(e?a.$ngfDataUrl:a.$ngfBlobUrl,a);var f=e?a.$$ngfDataUrlPromise:a.$$ngfBlobUrlPromise;if(f)return f;var g=c.defer();return b(function(){if(window.FileReader&&a&&(!window.FileAPI||-1===navigator.userAgent.indexOf("MSIE 8")||a.size<2e4)&&(!window.FileAPI||-1===navigator.userAgent.indexOf("MSIE 9")||a.size<4e6)){var c=window.URL||window.webkitURL;if(c&&c.createObjectURL&&!e){var f;try{f=c.createObjectURL(a)}catch(h){return void b(function(){a.$ngfBlobUrl="",g.reject()})}b(function(){if(a.$ngfBlobUrl=f,f){g.resolve(f,a),d.blobUrls=d.blobUrls||[],d.blobUrlsTotalSize=d.blobUrlsTotalSize||0,d.blobUrls.push({url:f,size:a.size}),d.blobUrlsTotalSize+=a.size||0;for(var b=d.defaults.blobUrlsMaxMemory||268435456,e=d.defaults.blobUrlsMaxQueueSize||200;(d.blobUrlsTotalSize>b||d.blobUrls.length>e)&&d.blobUrls.length>1;){var h=d.blobUrls.splice(0,1)[0];c.revokeObjectURL(h.url),d.blobUrlsTotalSize-=h.size}}})}else{var i=new FileReader;i.onload=function(c){b(function(){a.$ngfDataUrl=c.target.result,g.resolve(c.target.result,a),b(function(){delete a.$ngfDataUrl},1e3)})},i.onerror=function(){b(function(){a.$ngfDataUrl="",g.reject()})},i.readAsDataURL(a)}}else b(function(){a[e?"$ngfDataUrl":"$ngfBlobUrl"]="",g.reject()})}),f=e?a.$$ngfDataUrlPromise=g.promise:a.$$ngfBlobUrlPromise=g.promise,f["finally"](function(){delete a[e?"$$ngfDataUrlPromise":"$$ngfBlobUrlPromise"]}),f},d}]),ngFileUpload.directive("ngfSrc",["Upload","$timeout",function(a,c){return{restrict:"AE",link:function(d,e,f){b(a,c,d,e,f,"ngfSrc",a.attrGetter("ngfResize",f,d),!1)}}}]),ngFileUpload.directive("ngfBackground",["Upload","$timeout",function(a,c){return{restrict:"AE",link:function(d,e,f){b(a,c,d,e,f,"ngfBackground",a.attrGetter("ngfResize",f,d),!0)}}}]),ngFileUpload.directive("ngfThumbnail",["Upload","$timeout",function(a,c){return{restrict:"AE",link:function(d,e,f){var g=a.attrGetter("ngfSize",f,d);b(a,c,d,e,f,"ngfThumbnail",g,a.attrGetter("ngfAsBackground",f,d))}}}]),ngFileUpload.config(["$compileProvider",function(a){a.imgSrcSanitizationWhitelist&&a.imgSrcSanitizationWhitelist(/^\s*(https?|ftp|mailto|tel|webcal|local|file|data|blob):/),a.aHrefSanitizationWhitelist&&a.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|tel|webcal|local|file|data|blob):/)}]),ngFileUpload.filter("ngfDataUrl",["UploadDataUrl","$sce",function(a,b){return function(c,d,e){if(angular.isString(c))return b.trustAsResourceUrl(c);var f=c&&((d?c.$ngfDataUrl:c.$ngfBlobUrl)||c.$ngfDataUrl);return c&&!f?(!c.$ngfDataUrlFilterInProgress&&angular.isObject(c)&&(c.$ngfDataUrlFilterInProgress=!0,a.dataUrl(c,d)),""):(c&&delete c.$ngfDataUrlFilterInProgress,(c&&f?e?b.trustAsResourceUrl(f):f:c)||"")}}])}(),ngFileUpload.service("UploadValidate",["UploadDataUrl","$q","$timeout",function(a,b,c){function d(a){var b="",c=[];if(a.length>2&&"/"===a[0]&&"/"===a[a.length-1])b=a.substring(1,a.length-1);else{var e=a.split(",");if(e.length>1)for(var f=0;f<e.length;f++){var g=d(e[f]);g.regexp?(b+="("+g.regexp+")",f<e.length-1&&(b+="|")):c=c.concat(g.excludes)}else 0===a.indexOf("!")?c.push("^((?!"+d(a.substring(1)).regexp+").)*$"):(0===a.indexOf(".")&&(a="*"+a),b="^"+a.replace(new RegExp("[.\\\\+*?\\[\\^\\]$(){}=!<>|:\\-]","g"),"\\$&")+"$",b=b.replace(/\\\*/g,".*").replace(/\\\?/g,"."))}return{regexp:b,excludes:c}}function e(a,b){null==b||a.$dirty||(a.$setDirty?a.$setDirty():a.$dirty=!0)}var f=a;return f.validatePattern=function(a,b){if(!b)return!0;var c=d(b),e=!0;if(c.regexp&&c.regexp.length){var f=new RegExp(c.regexp,"i");e=null!=a.type&&f.test(a.type)||null!=a.name&&f.test(a.name)}for(var g=c.excludes.length;g--;){var h=new RegExp(c.excludes[g],"i");e=e&&(null==a.type||h.test(a.type))&&(null==a.name||h.test(a.name))}return e},f.ratioToFloat=function(a){var b=a.toString(),c=b.search(/[x:]/i);return b=c>-1?parseFloat(b.substring(0,c))/parseFloat(b.substring(c+1)):parseFloat(b)},f.registerModelChangeValidator=function(a,b,c){a&&a.$formatters.push(function(d){a.$dirty&&(d&&!angular.isArray(d)&&(d=[d]),f.validate(d,0,a,b,c).then(function(){f.applyModelValidation(a,d)}))})},f.applyModelValidation=function(a,b){e(a,b),angular.forEach(a.$ngfValidations,function(b){a.$setValidity(b.name,b.valid)})},f.getValidationAttr=function(a,b,c,d,e){var g="ngf"+c[0].toUpperCase()+c.substr(1),h=f.attrGetter(g,a,b,{$file:e});if(null==h&&(h=f.attrGetter("ngfValidate",a,b,{$file:e}))){var i=(d||c).split(".");h=h[i[0]],i.length>1&&(h=h&&h[i[1]])}return h},f.validate=function(a,c,d,e,g){function h(b,c,h){if(a){for(var i=a.length,j=null;i--;){var n=a[i];if(n){var o=f.getValidationAttr(e,g,b,c,n);null!=o&&(h(n,o,i)||(-1===k.indexOf(b)?(n.$error=b,(n.$errorMessages=n.$errorMessages||{})[b]=!0,n.$errorParam=o,-1===m.indexOf(n)&&m.push(n),l||a.splice(i,1),j=!1):a.splice(i,1)))}}null!==j&&d.$ngfValidations.push({name:b,valid:j})}}function i(c,h,i,n,o){function p(b,d,e){function f(f){f()?-1===k.indexOf(c)?(d.$error=c,(d.$errorMessages=d.$errorMessages||{})[c]=!0,d.$errorParam=e,-1===m.indexOf(d)&&m.push(d),l||a.splice(a.indexOf(d),1),b.resolve(!1)):(a.splice(a.indexOf(d),1),b.resolve(!0)):b.resolve(!0)}null!=e?n(d,e).then(function(a){f(function(){return!o(a,e)})},function(){f(function(){return j("ngfValidateForce",{$file:d})})}):b.resolve(!0)}var q=[f.emptyPromise(!0)];a&&(a=void 0===a.length?[a]:a,angular.forEach(a,function(a){var d=b.defer();return q.push(d.promise),!i||null!=a.type&&0===a.type.search(i)?void("dimensions"===c&&null!=f.attrGetter("ngfDimensions",e)?f.imageDimensions(a).then(function(b){p(d,a,j("ngfDimensions",{$file:a,$width:b.width,$height:b.height}))},function(){d.resolve(!1)}):"duration"===c&&null!=f.attrGetter("ngfDuration",e)?f.mediaDuration(a).then(function(b){p(d,a,j("ngfDuration",{$file:a,$duration:b}))},function(){d.resolve(!1)}):p(d,a,f.getValidationAttr(e,g,c,h,a))):void d.resolve(!0)}));var r=b.defer();return b.all(q).then(function(a){for(var b=!0,e=0;e<a.length;e++)if(!a[e]){b=!1;break}d.$ngfValidations.push({name:c,valid:b}),r.resolve(b)}),r.promise}d=d||{},d.$ngfValidations=d.$ngfValidations||[],angular.forEach(d.$ngfValidations,function(a){a.valid=!0});var j=function(a,b){return f.attrGetter(a,e,g,b)},k=(f.attrGetter("ngfIgnoreInvalid",e,g)||"").split(" "),l=f.attrGetter("ngfRunAllValidations",e,g);if(null==a||0===a.length)return f.emptyPromise({validFiles:a,invalidFiles:[]});a=void 0===a.length?[a]:a.slice(0);var m=[];h("pattern",null,f.validatePattern),h("minSize","size.min",function(a,b){return a.size+.1>=f.translateScalars(b)}),h("maxSize","size.max",function(a,b){return a.size-.1<=f.translateScalars(b)});var n=0;if(h("maxTotalSize",null,function(b,c){return n+=b.size,n>f.translateScalars(c)?(a.splice(0,a.length),!1):!0}),h("validateFn",null,function(a,b){return b===!0||null===b||""===b}),!a.length)return f.emptyPromise({validFiles:[],invalidFiles:m});var o=b.defer(),p=[];return p.push(i("maxHeight","height.max",/image/,this.imageDimensions,function(a,b){return a.height<=b})),p.push(i("minHeight","height.min",/image/,this.imageDimensions,function(a,b){return a.height>=b})),p.push(i("maxWidth","width.max",/image/,this.imageDimensions,function(a,b){return a.width<=b})),p.push(i("minWidth","width.min",/image/,this.imageDimensions,function(a,b){return a.width>=b})),p.push(i("dimensions",null,/image/,function(a,b){return f.emptyPromise(b)},function(a){return a})),p.push(i("ratio",null,/image/,this.imageDimensions,function(a,b){for(var c=b.toString().split(","),d=!1,e=0;e<c.length;e++)Math.abs(a.width/a.height-f.ratioToFloat(c[e]))<.01&&(d=!0);return d})),p.push(i("maxRatio","ratio.max",/image/,this.imageDimensions,function(a,b){return a.width/a.height-f.ratioToFloat(b)<1e-4})),p.push(i("minRatio","ratio.min",/image/,this.imageDimensions,function(a,b){return a.width/a.height-f.ratioToFloat(b)>-1e-4})),p.push(i("maxDuration","duration.max",/audio|video/,this.mediaDuration,function(a,b){return a<=f.translateScalars(b)})),p.push(i("minDuration","duration.min",/audio|video/,this.mediaDuration,function(a,b){return a>=f.translateScalars(b)})),p.push(i("duration",null,/audio|video/,function(a,b){return f.emptyPromise(b)},function(a){return a})),p.push(i("validateAsyncFn",null,null,function(a,b){return b},function(a){return a===!0||null===a||""===a})),b.all(p).then(function(){if(l)for(var b=0;b<a.length;b++){var d=a[b];d.$error&&a.splice(b--,1)}l=!1,h("maxFiles",null,function(a,b,d){return b>c+d}),o.resolve({validFiles:a,invalidFiles:m})}),o.promise},f.imageDimensions=function(a){if(a.$ngfWidth&&a.$ngfHeight){var d=b.defer();return c(function(){d.resolve({width:a.$ngfWidth,height:a.$ngfHeight})}),d.promise}if(a.$ngfDimensionPromise)return a.$ngfDimensionPromise;var e=b.defer();return c(function(){return 0!==a.type.indexOf("image")?void e.reject("not image"):void f.dataUrl(a).then(function(b){function d(){var b=h[0].naturalWidth||h[0].clientWidth,c=h[0].naturalHeight||h[0].clientHeight;h.remove(),a.$ngfWidth=b,a.$ngfHeight=c,e.resolve({width:b,height:c})}function f(){h.remove(),e.reject("load error")}function g(){c(function(){h[0].parentNode&&(h[0].clientWidth?d():i++>10?f():g())},1e3)}var h=angular.element("<img>").attr("src",b).css("visibility","hidden").css("position","fixed").css("max-width","none !important").css("max-height","none !important");h.on("load",d),h.on("error",f);var i=0;g(),angular.element(document.getElementsByTagName("body")[0]).append(h)},function(){e.reject("load error")})}),a.$ngfDimensionPromise=e.promise,a.$ngfDimensionPromise["finally"](function(){delete a.$ngfDimensionPromise}),a.$ngfDimensionPromise},f.mediaDuration=function(a){if(a.$ngfDuration){var d=b.defer();return c(function(){d.resolve(a.$ngfDuration)}),d.promise}if(a.$ngfDurationPromise)return a.$ngfDurationPromise;var e=b.defer();return c(function(){return 0!==a.type.indexOf("audio")&&0!==a.type.indexOf("video")?void e.reject("not media"):void f.dataUrl(a).then(function(b){function d(){var b=h[0].duration;a.$ngfDuration=b,h.remove(),e.resolve(b)}function f(){h.remove(),e.reject("load error")}function g(){c(function(){h[0].parentNode&&(h[0].duration?d():i>10?f():g())},1e3)}var h=angular.element(0===a.type.indexOf("audio")?"<audio>":"<video>").attr("src",b).css("visibility","none").css("position","fixed");h.on("loadedmetadata",d),h.on("error",f);var i=0;g(),angular.element(document.body).append(h)},function(){e.reject("load error")})}),a.$ngfDurationPromise=e.promise,a.$ngfDurationPromise["finally"](function(){delete a.$ngfDurationPromise}),a.$ngfDurationPromise},f}]),ngFileUpload.service("UploadResize",["UploadValidate","$q",function(a,b){var c=a,d=function(a,b,c,d,e){var f=e?Math.max(c/a,d/b):Math.min(c/a,d/b);return{width:a*f,height:b*f,marginX:a*f-c,marginY:b*f-d}},e=function(a,e,f,g,h,i,j,k){var l=b.defer(),m=document.createElement("canvas"),n=document.createElement("img");return n.setAttribute("style","visibility:hidden;position:fixed;z-index:-100000"),document.body.appendChild(n),n.onload=function(){var a=n.width,b=n.height;if(n.parentNode.removeChild(n),null!=k&&k(a,b)===!1)return void l.reject("resizeIf");try{if(i){var o=c.ratioToFloat(i),p=a/b;o>p?(e=a,f=e/o):(f=b,e=f*o)}e||(e=a),f||(f=b);var q=d(a,b,e,f,j);m.width=Math.min(q.width,e),m.height=Math.min(q.height,f);var r=m.getContext("2d");r.drawImage(n,Math.min(0,-q.marginX/2),Math.min(0,-q.marginY/2),q.width,q.height),l.resolve(m.toDataURL(h||"image/WebP",g||.934))}catch(s){l.reject(s)}},n.onerror=function(){n.parentNode.removeChild(n),l.reject()},n.src=a,l.promise};return c.dataUrltoBlob=function(a,b,c){for(var d=a.split(","),e=d[0].match(/:(.*?);/)[1],f=atob(d[1]),g=f.length,h=new Uint8Array(g);g--;)h[g]=f.charCodeAt(g);var i=new window.Blob([h],{type:e});return i.name=b,i.$ngfOrigSize=c,i},c.isResizeSupported=function(){var a=document.createElement("canvas");return window.atob&&a.getContext&&a.getContext("2d")&&window.Blob},c.isResizeSupported()&&Object.defineProperty(window.Blob.prototype,"name",{get:function(){return this.$ngfName},set:function(a){this.$ngfName=a},configurable:!0}),c.resize=function(a,d){if(0!==a.type.indexOf("image"))return c.emptyPromise(a);var f=b.defer();return c.dataUrl(a,!0).then(function(b){e(b,d.width,d.height,d.quality,d.type||a.type,d.ratio,d.centerCrop,d.resizeIf).then(function(e){if("image/jpeg"===a.type&&d.restoreExif!==!1)try{e=c.restoreExif(b,e)}catch(g){setTimeout(function(){throw g},1)}try{var h=c.dataUrltoBlob(e,a.name,a.size);f.resolve(h)}catch(g){f.reject(g)}},function(b){"resizeIf"===b&&f.resolve(a),f.reject(b)})},function(a){f.reject(a)}),f.promise},c}]),function(){function a(a,c,d,e,f,g,h,i,j,k){function l(){return c.attr("disabled")||r("ngfDropDisabled",a)}function m(b,c){i.updateModel(e,d,a,r("ngfChange")||r("ngfDrop"),b,c)}function n(b,c){if(!i.shouldUpdateOn(b,d,a)||"string"!=typeof c)return i.rejectPromise([]);var e=[];c.replace(/<(img src|img [^>]* src) *=\"([^\"]*)\"/gi,function(a,b,c){e.push(c)});var f=[],g=[];if(e.length){angular.forEach(e,function(a){f.push(i.urlToBlob(a).then(function(a){g.push(a)}))});var h=k.defer();return k.all(f).then(function(){h.resolve(g)},function(a){h.reject(a)}),h.promise}return i.emptyPromise()}function o(a,b,c,d){var e=r("ngfDragOverClass",a,{$event:c}),f="dragover";if(angular.isString(e))f=e;else if(e&&(e.delay&&(v=e.delay),e.accept||e.reject)){var g=c.dataTransfer.items;if(null!=g&&g.length)for(var h=e.pattern||r("ngfPattern",a,{$event:c}),j=g.length;j--;){if(!i.validatePattern(g[j],h)){f=e.reject;break}f=e.accept}else f=e.accept}d(f)}function p(b,c,e,f){function g(a,b){var c=k.defer();if(null!=a)if(a.isDirectory){var d=[i.emptyPromise()];if(m){var e={type:"directory"};e.name=e.path=(b||"")+a.name,n.push(e)}var f=a.createReader(),h=[],p=function(){f.readEntries(function(e){try{e.length?(h=h.concat(Array.prototype.slice.call(e||[],0)),p()):(angular.forEach(h.slice(0),function(c){n.length<=j&&l>=o&&d.push(g(c,(b?b:"")+a.name+"/"))}),k.all(d).then(function(){c.resolve()},function(a){c.reject(a)}))}catch(f){c.reject(f)}},function(a){c.reject(a)})};p()}else a.file(function(a){try{a.path=(b?b:"")+a.name,m&&(a=i.rename(a,a.path)),n.push(a),o+=a.size,c.resolve()}catch(d){c.reject(d)}},function(a){c.reject(a)});return c.promise}var j=i.getValidationAttr(d,a,"maxFiles");null==j&&(j=Number.MAX_VALUE);var l=i.getValidationAttr(d,a,"maxTotalSize");null==l&&(l=Number.MAX_VALUE);var m=r("ngfIncludeDir",a),n=[],o=0,p=[i.emptyPromise()];if(b&&b.length>0&&"file:"!==h.location.protocol)for(var q=0;q<b.length;q++){if(b[q].webkitGetAsEntry&&b[q].webkitGetAsEntry()&&b[q].webkitGetAsEntry().isDirectory){var s=b[q].webkitGetAsEntry();if(s.isDirectory&&!e)continue;null!=s&&p.push(g(s))}else{var t=b[q].getAsFile();null!=t&&(n.push(t),o+=t.size)}if(n.length>j||o>l||!f&&n.length>0)break}else if(null!=c)for(var u=0;u<c.length;u++){var v=c.item(u);if((v.type||v.size>0)&&(n.push(v),o+=v.size),n.length>j||o>l||!f&&n.length>0)break}var w=k.defer();return k.all(p).then(function(){if(f||m||!n.length)w.resolve(n);else{for(var a=0;n[a]&&"directory"===n[a].type;)a++;w.resolve([n[a]])}},function(a){w.reject(a)}),w.promise}var q=b(),r=function(a,b,c){return i.attrGetter(a,d,b,c)};if(r("dropAvailable")&&g(function(){a[r("dropAvailable")]?a[r("dropAvailable")].value=q:a[r("dropAvailable")]=q}),!q)return void(r("ngfHideOnDropNotAvailable",a)===!0&&c.css("display","none"));null==r("ngfSelect")&&i.registerModelChangeValidator(e,d,a);var s,t=null,u=f(r("ngfStopPropagation")),v=1;c[0].addEventListener("dragover",function(b){if(!l()&&i.shouldUpdateOn("drop",d,a)){if(b.preventDefault(),u(a)&&b.stopPropagation(),navigator.userAgent.indexOf("Chrome")>-1){var e=b.dataTransfer.effectAllowed;b.dataTransfer.dropEffect="move"===e||"linkMove"===e?"move":"copy"}g.cancel(t),s||(s="C",o(a,d,b,function(d){s=d,c.addClass(s),r("ngfDrag",a,{$isDragging:!0,$class:s,$event:b})}))}},!1),c[0].addEventListener("dragenter",function(b){!l()&&i.shouldUpdateOn("drop",d,a)&&(b.preventDefault(),u(a)&&b.stopPropagation())},!1),c[0].addEventListener("dragleave",function(b){!l()&&i.shouldUpdateOn("drop",d,a)&&(b.preventDefault(),u(a)&&b.stopPropagation(),t=g(function(){s&&c.removeClass(s),s=null,r("ngfDrag",a,{$isDragging:!1,$event:b})},v||100))},!1),c[0].addEventListener("drop",function(b){if(!l()&&i.shouldUpdateOn("drop",d,a)){b.preventDefault(),u(a)&&b.stopPropagation(),s&&c.removeClass(s),s=null;var e,f=b.dataTransfer.items;try{e=b.dataTransfer&&b.dataTransfer.getData&&b.dataTransfer.getData("text/html")}catch(g){}p(f,b.dataTransfer.files,r("ngfAllowDir",a)!==!1,r("multiple")||r("ngfMultiple",a)).then(function(a){
a.length?m(a,b):n("dropUrl",e).then(function(a){m(a,b)})})}},!1),c[0].addEventListener("paste",function(b){if(navigator.userAgent.toLowerCase().indexOf("firefox")>-1&&r("ngfEnableFirefoxPaste",a)&&b.preventDefault(),!l()&&i.shouldUpdateOn("paste",d,a)){var c=[],e=b.clipboardData||b.originalEvent.clipboardData;if(e&&e.items)for(var f=0;f<e.items.length;f++)-1!==e.items[f].type.indexOf("image")&&c.push(e.items[f].getAsFile());c.length?m(c,b):n("pasteUrl",e).then(function(a){m(a,b)})}},!1),navigator.userAgent.toLowerCase().indexOf("firefox")>-1&&r("ngfEnableFirefoxPaste",a)&&(c.attr("contenteditable",!0),c.on("keypress",function(a){a.metaKey||a.ctrlKey||a.preventDefault()}))}function b(){var a=document.createElement("div");return"draggable"in a&&"ondrop"in a&&!/Edge\/12./i.test(navigator.userAgent)}ngFileUpload.directive("ngfDrop",["$parse","$timeout","$window","Upload","$http","$q",function(b,c,d,e,f,g){return{restrict:"AEC",require:"?ngModel",link:function(h,i,j,k){a(h,i,j,k,b,c,d,e,f,g)}}}]),ngFileUpload.directive("ngfNoFileDrop",function(){return function(a,c){b()&&c.css("display","none")}}),ngFileUpload.directive("ngfDropAvailable",["$parse","$timeout","Upload",function(a,c,d){return function(e,f,g){if(b()){var h=a(d.attrGetter("ngfDropAvailable",g));c(function(){h(e),h.assign&&h.assign(e,!0)})}}}])}(),ngFileUpload.service("UploadExif",["UploadResize","$q",function(a,b){function c(a,b,c,d){switch(b){case 2:return a.transform(-1,0,0,1,c,0);case 3:return a.transform(-1,0,0,-1,c,d);case 4:return a.transform(1,0,0,-1,0,d);case 5:return a.transform(0,1,1,0,0,0);case 6:return a.transform(0,1,-1,0,d,0);case 7:return a.transform(0,-1,-1,0,d,c);case 8:return a.transform(0,-1,1,0,0,c)}}function d(a){for(var b="",c=new Uint8Array(a),d=c.byteLength,e=0;d>e;e++)b+=String.fromCharCode(c[e]);return window.btoa(b)}var e=a;return e.isExifSupported=function(){return window.FileReader&&(new FileReader).readAsArrayBuffer&&e.isResizeSupported()},e.readOrientation=function(a){var c=b.defer(),d=new FileReader,e=a.slice?a.slice(0,65536):a;return d.readAsArrayBuffer(e),d.onerror=function(a){return c.reject(a)},d.onload=function(a){var b={orientation:1},d=new DataView(this.result);if(65496!==d.getUint16(0,!1))return c.resolve(b);for(var e=d.byteLength,f=2;e>f;){var g=d.getUint16(f,!1);if(f+=2,65505===g){if(1165519206!==d.getUint32(f+=2,!1))return c.resolve(b);var h=18761===d.getUint16(f+=6,!1);f+=d.getUint32(f+4,h);var i=d.getUint16(f,h);f+=2;for(var j=0;i>j;j++)if(274===d.getUint16(f+12*j,h)){var k=d.getUint16(f+12*j+8,h);return k>=2&&8>=k&&(d.setUint16(f+12*j+8,1,h),b.fixedArrayBuffer=a.target.result),b.orientation=k,c.resolve(b)}}else{if(65280!==(65280&g))break;f+=d.getUint16(f,!1)}}return c.resolve(b)},c.promise},e.applyExifRotation=function(a){if(0!==a.type.indexOf("image/jpeg"))return e.emptyPromise(a);var f=b.defer();return e.readOrientation(a).then(function(b){return b.orientation<2||b.orientation>8?f.resolve(a):void e.dataUrl(a,!0).then(function(g){var h=document.createElement("canvas"),i=document.createElement("img");i.onload=function(){try{h.width=b.orientation>4?i.height:i.width,h.height=b.orientation>4?i.width:i.height;var g=h.getContext("2d");c(g,b.orientation,i.width,i.height),g.drawImage(i,0,0);var j=h.toDataURL(a.type||"image/WebP",.934);j=e.restoreExif(d(b.fixedArrayBuffer),j);var k=e.dataUrltoBlob(j,a.name);f.resolve(k)}catch(l){return f.reject(l)}},i.onerror=function(){f.reject()},i.src=g},function(a){f.reject(a)})},function(a){f.reject(a)}),f.promise},e.restoreExif=function(a,b){var c={};return c.KEY_STR="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",c.encode64=function(a){var b,c,d,e,f,g="",h="",i="",j=0;do b=a[j++],c=a[j++],h=a[j++],d=b>>2,e=(3&b)<<4|c>>4,f=(15&c)<<2|h>>6,i=63&h,isNaN(c)?f=i=64:isNaN(h)&&(i=64),g=g+this.KEY_STR.charAt(d)+this.KEY_STR.charAt(e)+this.KEY_STR.charAt(f)+this.KEY_STR.charAt(i),b=c=h="",d=e=f=i="";while(j<a.length);return g},c.restore=function(a,b){a.match("data:image/jpeg;base64,")&&(a=a.replace("data:image/jpeg;base64,",""));var c=this.decode64(a),d=this.slice2Segments(c),e=this.exifManipulation(b,d);return"data:image/jpeg;base64,"+this.encode64(e)},c.exifManipulation=function(a,b){var c=this.getExifArray(b),d=this.insertExif(a,c);return new Uint8Array(d)},c.getExifArray=function(a){for(var b,c=0;c<a.length;c++)if(b=a[c],255===b[0]&225===b[1])return b;return[]},c.insertExif=function(a,b){var c=a.replace("data:image/jpeg;base64,",""),d=this.decode64(c),e=d.indexOf(255,3),f=d.slice(0,e),g=d.slice(e),h=f;return h=h.concat(b),h=h.concat(g)},c.slice2Segments=function(a){for(var b=0,c=[];;){if(255===a[b]&218===a[b+1])break;if(255===a[b]&216===a[b+1])b+=2;else{var d=256*a[b+2]+a[b+3],e=b+d+2,f=a.slice(b,e);c.push(f),b=e}if(b>a.length)break}return c},c.decode64=function(a){var b,c,d,e,f,g="",h="",i=0,j=[],k=/[^A-Za-z0-9\+\/\=]/g;k.exec(a)&&console.log("There were invalid base64 characters in the input text.\nValid base64 characters are A-Z, a-z, 0-9, NaNExpect errors in decoding."),a=a.replace(/[^A-Za-z0-9\+\/\=]/g,"");do d=this.KEY_STR.indexOf(a.charAt(i++)),e=this.KEY_STR.indexOf(a.charAt(i++)),f=this.KEY_STR.indexOf(a.charAt(i++)),h=this.KEY_STR.indexOf(a.charAt(i++)),b=d<<2|e>>4,c=(15&e)<<4|f>>2,g=(3&f)<<6|h,j.push(b),64!==f&&j.push(c),64!==h&&j.push(g),b=c=g="",d=e=f=h="";while(i<a.length);return j},c.restore(a,b)},e}]);
/*! 12.2.9 */
!function(){function a(a,b){window.XMLHttpRequest.prototype[a]=b(window.XMLHttpRequest.prototype[a])}function b(a,b,c){try{Object.defineProperty(a,b,{get:c})}catch(d){}}if(window.FileAPI||(window.FileAPI={}),!window.XMLHttpRequest)throw"AJAX is not supported. XMLHttpRequest is not defined.";if(FileAPI.shouldLoad=!window.FormData||FileAPI.forceLoad,FileAPI.shouldLoad){var c=function(a){if(!a.__listeners){a.upload||(a.upload={}),a.__listeners=[];var b=a.upload.addEventListener;a.upload.addEventListener=function(c,d){a.__listeners[c]=d,b&&b.apply(this,arguments)}}};a("open",function(a){return function(b,d,e){c(this),this.__url=d;try{a.apply(this,[b,d,e])}catch(f){f.message.indexOf("Access is denied")>-1&&(this.__origError=f,a.apply(this,[b,"_fix_for_ie_crossdomain__",e]))}}}),a("getResponseHeader",function(a){return function(b){return this.__fileApiXHR&&this.__fileApiXHR.getResponseHeader?this.__fileApiXHR.getResponseHeader(b):null==a?null:a.apply(this,[b])}}),a("getAllResponseHeaders",function(a){return function(){return this.__fileApiXHR&&this.__fileApiXHR.getAllResponseHeaders?this.__fileApiXHR.getAllResponseHeaders():null==a?null:a.apply(this)}}),a("abort",function(a){return function(){return this.__fileApiXHR&&this.__fileApiXHR.abort?this.__fileApiXHR.abort():null==a?null:a.apply(this)}}),a("setRequestHeader",function(a){return function(b,d){if("__setXHR_"===b){c(this);var e=d(this);e instanceof Function&&e(this)}else this.__requestHeaders=this.__requestHeaders||{},this.__requestHeaders[b]=d,a.apply(this,arguments)}}),a("send",function(a){return function(){var c=this;if(arguments[0]&&arguments[0].__isFileAPIShim){var d=arguments[0],e={url:c.__url,jsonp:!1,cache:!0,complete:function(a,d){a&&angular.isString(a)&&-1!==a.indexOf("#2174")&&(a=null),c.__completed=!0,!a&&c.__listeners.load&&c.__listeners.load({type:"load",loaded:c.__loaded,total:c.__total,target:c,lengthComputable:!0}),!a&&c.__listeners.loadend&&c.__listeners.loadend({type:"loadend",loaded:c.__loaded,total:c.__total,target:c,lengthComputable:!0}),"abort"===a&&c.__listeners.abort&&c.__listeners.abort({type:"abort",loaded:c.__loaded,total:c.__total,target:c,lengthComputable:!0}),void 0!==d.status&&b(c,"status",function(){return 0===d.status&&a&&"abort"!==a?500:d.status}),void 0!==d.statusText&&b(c,"statusText",function(){return d.statusText}),b(c,"readyState",function(){return 4}),void 0!==d.response&&b(c,"response",function(){return d.response});var e=d.responseText||(a&&0===d.status&&"abort"!==a?a:void 0);b(c,"responseText",function(){return e}),b(c,"response",function(){return e}),a&&b(c,"err",function(){return a}),c.__fileApiXHR=d,c.onreadystatechange&&c.onreadystatechange(),c.onload&&c.onload()},progress:function(a){if(a.target=c,c.__listeners.progress&&c.__listeners.progress(a),c.__total=a.total,c.__loaded=a.loaded,a.total===a.loaded){var b=this;setTimeout(function(){c.__completed||(c.getAllResponseHeaders=function(){},b.complete(null,{status:204,statusText:"No Content"}))},FileAPI.noContentTimeout||1e4)}},headers:c.__requestHeaders};e.data={},e.files={};for(var f=0;f<d.data.length;f++){var g=d.data[f];null!=g.val&&null!=g.val.name&&null!=g.val.size&&null!=g.val.type?e.files[g.key]=g.val:e.data[g.key]=g.val}setTimeout(function(){if(!FileAPI.hasFlash)throw'Adode Flash Player need to be installed. To check ahead use "FileAPI.hasFlash"';c.__fileApiXHR=FileAPI.upload(e)},1)}else{if(this.__origError)throw this.__origError;a.apply(c,arguments)}}}),window.XMLHttpRequest.__isFileAPIShim=!0,window.FormData=FormData=function(){return{append:function(a,b,c){b.__isFileAPIBlobShim&&(b=b.data[0]),this.data.push({key:a,val:b,name:c})},data:[],__isFileAPIShim:!0}},window.Blob=Blob=function(a){return{data:a,__isFileAPIBlobShim:!0}}}}(),function(){function a(a){return"input"===a[0].tagName.toLowerCase()&&a.attr("type")&&"file"===a.attr("type").toLowerCase()}function b(){try{var a=new ActiveXObject("ShockwaveFlash.ShockwaveFlash");if(a)return!0}catch(b){if(void 0!==navigator.mimeTypes["application/x-shockwave-flash"])return!0}return!1}function c(a){var b=0,c=0;if(window.jQuery)return jQuery(a).offset();if(a.offsetParent)do b+=a.offsetLeft-a.scrollLeft,c+=a.offsetTop-a.scrollTop,a=a.offsetParent;while(a);return{left:b,top:c}}if(FileAPI.shouldLoad){if(FileAPI.hasFlash=b(),FileAPI.forceLoad&&(FileAPI.html5=!1),!FileAPI.upload){var d,e,f,g,h,i=document.createElement("script"),j=document.getElementsByTagName("script");if(window.FileAPI.jsUrl)d=window.FileAPI.jsUrl;else if(window.FileAPI.jsPath)e=window.FileAPI.jsPath;else for(f=0;f<j.length;f++)if(h=j[f].src,g=h.search(/\/ng\-file\-upload[\-a-zA-z0-9\.]*\.js/),g>-1){e=h.substring(0,g+1);break}null==FileAPI.staticPath&&(FileAPI.staticPath=e),i.setAttribute("src",d||e+"FileAPI.min.js"),document.getElementsByTagName("head")[0].appendChild(i)}FileAPI.ngfFixIE=function(d,e,f){if(!b())throw'Adode Flash Player need to be installed. To check ahead use "FileAPI.hasFlash"';var g=function(){var b=e.parent();d.attr("disabled")?b&&b.removeClass("js-fileapi-wrapper"):(e.attr("__ngf_flash_")||(e.unbind("change"),e.unbind("click"),e.bind("change",function(a){h.apply(this,[a]),f.apply(this,[a])}),e.attr("__ngf_flash_","true")),b.addClass("js-fileapi-wrapper"),a(d)||(b.css("position","absolute").css("top",c(d[0]).top+"px").css("left",c(d[0]).left+"px").css("width",d[0].offsetWidth+"px").css("height",d[0].offsetHeight+"px").css("filter","alpha(opacity=0)").css("display",d.css("display")).css("overflow","hidden").css("z-index","900000").css("visibility","visible"),e.css("width",d[0].offsetWidth+"px").css("height",d[0].offsetHeight+"px").css("position","absolute").css("top","0px").css("left","0px")))};d.bind("mouseenter",g);var h=function(a){for(var b=FileAPI.getFiles(a),c=0;c<b.length;c++)void 0===b[c].size&&(b[c].size=0),void 0===b[c].name&&(b[c].name="file"),void 0===b[c].type&&(b[c].type="undefined");a.target||(a.target={}),a.target.files=b,a.target.files!==b&&(a.__files_=b),(a.__files_||a.target.files).item=function(b){return(a.__files_||a.target.files)[b]||null}}},FileAPI.disableFileInput=function(a,b){b?a.removeClass("js-fileapi-wrapper"):a.addClass("js-fileapi-wrapper")}}}(),window.FileReader||(window.FileReader=function(){var a=this,b=!1;this.listeners={},this.addEventListener=function(b,c){a.listeners[b]=a.listeners[b]||[],a.listeners[b].push(c)},this.removeEventListener=function(b,c){a.listeners[b]&&a.listeners[b].splice(a.listeners[b].indexOf(c),1)},this.dispatchEvent=function(b){var c=a.listeners[b.type];if(c)for(var d=0;d<c.length;d++)c[d].call(a,b)},this.onabort=this.onerror=this.onload=this.onloadstart=this.onloadend=this.onprogress=null;var c=function(b,c){var d={type:b,target:a,loaded:c.loaded,total:c.total,error:c.error};return null!=c.result&&(d.target.result=c.result),d},d=function(d){b||(b=!0,a.onloadstart&&a.onloadstart(c("loadstart",d)));var e;"load"===d.type?(a.onloadend&&a.onloadend(c("loadend",d)),e=c("load",d),a.onload&&a.onload(e),a.dispatchEvent(e)):"progress"===d.type?(e=c("progress",d),a.onprogress&&a.onprogress(e),a.dispatchEvent(e)):(e=c("error",d),a.onerror&&a.onerror(e),a.dispatchEvent(e))};this.readAsDataURL=function(a){FileAPI.readAsDataURL(a,d)},this.readAsText=function(a){FileAPI.readAsText(a,d)}});
angular.module("favicon",[]).filter("favicon",function(){var a="https://www.google.com/s2/favicons?domain=%s";return function(b){return a.replace(/%s/g,b)}}).directive("favicon",["faviconFilter",function(a){return{restrict:"EA",replace:!0,template:'<img ng-src="{{faviconUrl}}" alt="{{description}}">',scope:{url:"=",description:"="},link:function(b){b.$watch("url",function(c){b.faviconUrl=a(c)})}}}]);
!function(a,b){a.module("ngValidate",[]).directive("ngValidate",function(){return{require:"form",restrict:"A",scope:{ngValidate:"="},link:function(a,c,d,e){var f=c.validate(a.ngValidate);e.validate=function(a){var c=f.settings;f.settings=b.extend(!0,{},f.settings,a);var d=f.form();return f.settings=c,d},e.numberOfInvalids=function(){return f.numberOfInvalids()}}}}).provider("$validator",function(){return b.validator.setDefaults({onsubmit:!1}),{setDefaults:b.validator.setDefaults,addMethod:b.validator.addMethod,setDefaultMessages:function(c){a.extend(b.validator.messages,c)},format:b.validator.format,$get:function(){return{}}}})}(angular,jQuery);
/**
 * angular-drag-and-drop-lists v1.4.0
 *
 * Copyright (c) 2014 Marcel Juenemann marcel@juenemann.cc
 * Copyright (c) 2014-2016 Google Inc.
 * https://github.com/marceljuenemann/angular-drag-and-drop-lists
 *
 * License: MIT
 */
angular.module("dndLists",[]).directive("dndDraggable",["$parse","$timeout","dndDropEffectWorkaround","dndDragTypeWorkaround",function(e,n,r,t){return function(a,d,o){d.attr("draggable","true"),o.dndDisableIf&&a.$watch(o.dndDisableIf,function(e){d.attr("draggable",!e)}),d.on("dragstart",function(i){return i=i.originalEvent||i,"false"==d.attr("draggable")?!0:(i.dataTransfer.setData("Text",angular.toJson(a.$eval(o.dndDraggable))),i.dataTransfer.effectAllowed=o.dndEffectAllowed||"move",d.addClass("dndDragging"),n(function(){d.addClass("dndDraggingSource")},0),r.dropEffect="none",t.isDragging=!0,t.dragType=o.dndType?a.$eval(o.dndType):void 0,i._dndHandle&&i.dataTransfer.setDragImage&&i.dataTransfer.setDragImage(d[0],0,0),e(o.dndDragstart)(a,{event:i}),void i.stopPropagation())}),d.on("dragend",function(i){i=i.originalEvent||i
var f=r.dropEffect
a.$apply(function(){switch(f){case"move":e(o.dndMoved)(a,{event:i})
break
case"copy":e(o.dndCopied)(a,{event:i})
break
case"none":e(o.dndCanceled)(a,{event:i})}e(o.dndDragend)(a,{event:i,dropEffect:f})}),d.removeClass("dndDragging"),n(function(){d.removeClass("dndDraggingSource")},0),t.isDragging=!1,i.stopPropagation()}),d.on("click",function(n){o.dndSelected&&(n=n.originalEvent||n,a.$apply(function(){e(o.dndSelected)(a,{event:n})}),n.stopPropagation())}),d.on("selectstart",function(){this.dragDrop&&this.dragDrop()})}}]).directive("dndList",["$parse","$timeout","dndDropEffectWorkaround","dndDragTypeWorkaround",function(e,n,r,t){return function(a,d,o){function i(e,n,r){var t=E?e.offsetX||e.layerX:e.offsetY||e.layerY,a=E?n.offsetWidth:n.offsetHeight,d=E?n.offsetLeft:n.offsetTop
return d=r?d:0,d+a/2>t}function f(){var e
return angular.forEach(d.children(),function(n){var r=angular.element(n)
r.hasClass("dndPlaceholder")&&(e=r)}),e||angular.element("<li class='dndPlaceholder'></li>")}function l(){return Array.prototype.indexOf.call(D.children,v)}function g(e){if(!t.isDragging&&!y)return!1
if(!c(e.dataTransfer.types))return!1
if(o.dndAllowedTypes&&t.isDragging){var n=a.$eval(o.dndAllowedTypes)
if(angular.isArray(n)&&-1===n.indexOf(t.dragType))return!1}return o.dndDisableIf&&a.$eval(o.dndDisableIf)?!1:!0}function s(){return p.remove(),d.removeClass("dndDragover"),!0}function u(n,r,d,o){return e(n)(a,{event:r,index:d,item:o||void 0,external:!t.isDragging,type:t.isDragging?t.dragType:void 0})}function c(e){if(!e)return!0
for(var n=0;n<e.length;n++)if("Text"===e[n]||"text/plain"===e[n])return!0
return!1}var p=f(),v=p[0],D=d[0]
p.remove()
var E=o.dndHorizontalList&&a.$eval(o.dndHorizontalList),y=o.dndExternalSources&&a.$eval(o.dndExternalSources)
d.on("dragenter",function(e){return e=e.originalEvent||e,g(e)?void e.preventDefault():!0}),d.on("dragover",function(e){if(e=e.originalEvent||e,!g(e))return!0
if(v.parentNode!=D&&d.append(p),e.target!==D){for(var n=e.target;n.parentNode!==D&&n.parentNode;)n=n.parentNode
n.parentNode===D&&n!==v&&(i(e,n)?D.insertBefore(v,n):D.insertBefore(v,n.nextSibling))}else if(i(e,v,!0))for(;v.previousElementSibling&&(i(e,v.previousElementSibling,!0)||0===v.previousElementSibling.offsetHeight);)D.insertBefore(v,v.previousElementSibling)
else for(;v.nextElementSibling&&!i(e,v.nextElementSibling,!0);)D.insertBefore(v,v.nextElementSibling.nextElementSibling)
return o.dndDragover&&!u(o.dndDragover,e,l())?s():(d.addClass("dndDragover"),e.preventDefault(),e.stopPropagation(),!1)}),d.on("drop",function(e){if(e=e.originalEvent||e,!g(e))return!0
e.preventDefault()
var n,t=e.dataTransfer.getData("Text")||e.dataTransfer.getData("text/plain")
try{n=JSON.parse(t)}catch(d){return s()}var i=l()
return o.dndDrop&&(n=u(o.dndDrop,e,i,n),!n)?s():(n!==!0&&a.$apply(function(){a.$eval(o.dndList).splice(i,0,n)}),u(o.dndInserted,e,i,n),"none"===e.dataTransfer.dropEffect?"copy"===e.dataTransfer.effectAllowed||"move"===e.dataTransfer.effectAllowed?r.dropEffect=e.dataTransfer.effectAllowed:r.dropEffect=e.ctrlKey?"copy":"move":r.dropEffect=e.dataTransfer.dropEffect,s(),e.stopPropagation(),!1)}),d.on("dragleave",function(e){e=e.originalEvent||e,d.removeClass("dndDragover"),n(function(){d.hasClass("dndDragover")||p.remove()},100)})}}]).directive("dndNodrag",function(){return function(e,n,r){n.attr("draggable","true"),n.on("dragstart",function(e){e=e.originalEvent||e,e._dndHandle||(e.dataTransfer.types&&e.dataTransfer.types.length||e.preventDefault(),e.stopPropagation())}),n.on("dragend",function(e){e=e.originalEvent||e,e._dndHandle||e.stopPropagation()})}}).directive("dndHandle",function(){return function(e,n,r){n.attr("draggable","true"),n.on("dragstart dragend",function(e){e=e.originalEvent||e,e._dndHandle=!0})}}).factory("dndDragTypeWorkaround",function(){return{}}).factory("dndDropEffectWorkaround",function(){return{}})

/*
 * angular-socialshare
 * 2.2.8
 * 
 * A social media url and content share module for angularjs.
 * http://720kb.githb.io/angular-socialshare
 * 
 * MIT license
 * Fri Sep 02 2016
 */
!function(e){"use strict";var o="socialshare",i="Socialshare",t=["facebook","facebook-messenger","twitter","linkedin","google","pinterest","tumblr","reddit","stumbleupon","buffer","digg","delicious","vk","pocket","wordpress","flipboard","xing","hackernews","evernote","whatsapp","telegram","viber","skype","email","ok"],a=function(){var o=[{provider:"email",conf:{subject:"",body:"",to:"",cc:"",bcc:"",trigger:"click"}},{provider:"facebook",conf:{url:"",text:"",media:"",type:"",via:"",to:"",from:"",ref:"",display:"",source:"",caption:"",redirectUri:"",trigger:"click",popupHeight:600,popupWidth:500}},{provider:"facebook-messenger",conf:{url:""}},{provider:"twitter",conf:{url:"",text:"",via:"",hashtags:"",trigger:"click",popupHeight:600,popupWidth:500}},{provider:"linkedin",conf:{url:"",text:"",description:"",source:"",trigger:"click",popupHeight:600,popupWidth:500}},{provider:"reddit",conf:{url:"",text:"",subreddit:"",trigger:"click",popupHeight:600,popupWidth:500}},{provider:"vk",conf:{url:"",text:"",media:"",trigger:"click",popupHeight:600,popupWidth:500}},{provider:"ok",conf:{url:"",text:"",trigger:"click",popupHeight:600,popupWidth:500}},{provider:"digg",conf:{url:"",text:"",media:"",trigger:"click",popupHeight:600,popupWidth:500}},{provider:"delicious",conf:{url:"",text:"",media:"",trigger:"click",popupHeight:600,popupWidth:500}},{provider:"stumbleupon",conf:{url:"",text:"",media:"",trigger:"click",popupHeight:600,popupWidth:500}},{provider:"pinterest",conf:{url:"",text:"",media:"",trigger:"click",popupHeight:600,popupWidth:500}},{provider:"google",conf:{url:"",text:"",media:"",trigger:"click",popupHeight:600,popupWidth:500}},{provider:"tumblr",conf:{url:"",text:"",media:"",trigger:"click",popupHeight:600,popupWidth:500}},{provider:"buffer",conf:{url:"",text:"",via:"",media:"",trigger:"click",popupHeight:600,popupWidth:500}},{provider:"pocket",conf:{url:"",text:"",trigger:"click",popupHeight:600,popupWidth:500}},{provider:"flipboard",conf:{url:"",text:"",trigger:"click",popupHeight:600,popupWidth:500}},{provider:"hackernews",conf:{url:"",text:"",trigger:"click",popupHeight:600,popupWidth:500}},{provider:"wordpress",conf:{url:"",text:"",media:"",trigger:"click",popupHeight:600,popupWidth:500}},{provider:"xing",conf:{url:"",text:"",media:"",follow:"",trigger:"click",popupHeight:600,popupWidth:500}},{provider:"evernote",conf:{url:"",text:"",trigger:"click",popupHeight:600,popupWidth:500}},{provider:"whatsapp",conf:{url:"",text:""}},{provider:"telegram",conf:{url:"",text:"",trigger:"click",popupHeight:600,popupWidth:500}},{provider:"viber",conf:{url:"",text:""}},{provider:"skype",conf:{url:"",text:"",trigger:"click",popupHeight:600,popupWidth:500}}];return{configure:function(i){var a,r,s,h,c=0,p=0,n=e.injector(["ng"]).get("$log");if(i&&i.length>0)for(;c<i.length;c+=1)if(i[c].provider&&t.indexOf(i[c].provider)>-1){for(;p<o.length;p+=1)if(h=o[p],h&&h.provider&&i[c].provider===h.provider){for(a=Object.keys(h.conf),r=0;r<a.length;r+=1)s=a[r],s&&i[c].conf[s]&&(h.conf[s]=i[c].conf[s]);p=0;break}}else n.warn("Invalid provider at element "+c+" with name:"+i[c].provider)},$get:function(){return o}}},r=function(e,o){var i;o.socialshareType&&"feed"===o.socialshareType?(i="https://www.facebook.com/dialog/feed?",o.socialshareVia&&(i+="&app_id="+encodeURIComponent(o.socialshareVia)),o.socialshareRedirectUri&&(i+="&redirect_uri="+encodeURIComponent(o.socialshareRedirectUri)),o.socialshareUrl&&(i+="&link="+encodeURIComponent(o.socialshareUrl)),o.socialshareTo&&(i+="&to="+encodeURIComponent(o.socialshareTo)),o.socialshareDisplay&&(i+="&display="+encodeURIComponent(o.socialshareDisplay)),o.socialshareRef&&(i+="&ref="+encodeURIComponent(o.socialshareRef)),o.socialshareFrom&&(i+="&from="+encodeURIComponent(o.socialshareFrom)),o.socialshareDescription&&(i+="&description="+encodeURIComponent(o.socialshareDescription)),o.socialshareText&&(i+="&name="+encodeURIComponent(o.socialshareText)),o.socialshareCaption&&(i+="&caption="+encodeURIComponent(o.socialshareCaption)),o.socialshareMedia&&(i+="&picture="+encodeURIComponent(o.socialshareMedia)),o.socialshareSource&&(i+="&source="+encodeURIComponent(o.socialshareSource)),e.open(i,"Facebook","toolbar=0,status=0,resizable=yes,width="+o.socialsharePopupWidth+",height="+o.socialsharePopupHeight+",top="+(e.innerHeight-o.socialsharePopupHeight)/2+",left="+(e.innerWidth-o.socialsharePopupWidth)/2)):o.socialshareType&&"send"===o.socialshareType?(i="https://www.facebook.com/dialog/send?",o.socialshareVia&&(i+="&app_id="+encodeURIComponent(o.socialshareVia)),o.socialshareRedirectUri&&(i+="&redirect_uri="+encodeURIComponent(o.socialshareRedirectUri)),o.socialshareUrl&&(i+="&link="+encodeURIComponent(o.socialshareUrl)),o.socialshareTo&&(i+="&to="+encodeURIComponent(o.socialshareTo)),o.socialshareDisplay&&(i+="&display="+encodeURIComponent(o.socialshareDisplay)),o.socialshareRef&&(i+="&ref="+encodeURIComponent(o.socialshareRef)),e.open(i,"Facebook","toolbar=0,status=0,resizable=yes,width="+o.socialsharePopupWidth+",height="+o.socialsharePopupHeight+",top="+(e.innerHeight-o.socialsharePopupHeight)/2+",left="+(e.innerWidth-o.socialsharePopupWidth)/2)):e.open("https://www.facebook.com/sharer/sharer.php?u="+encodeURIComponent(o.socialshareUrl||e.location.href),"Facebook","toolbar=0,status=0,resizable=yes,width="+o.socialsharePopupWidth+",height="+o.socialsharePopupHeight+",top="+(e.innerHeight-o.socialsharePopupHeight)/2+",left="+(e.innerWidth-o.socialsharePopupWidth)/2)},s=function(e,o){var i="mailto:";o.socialshareTo&&(i+=encodeURIComponent(o.socialshareTo)),i+="?",o.socialshareBody&&(i+="body="+o.socialshareBody),o.socialshareSubject&&(i+="&subject="+encodeURIComponent(o.socialshareSubject)),o.socialshareCc&&(i+="&cc="+encodeURIComponent(o.socialshareCc)),o.socialshareBcc&&(i+="&bcc="+encodeURIComponent(o.socialshareBcc)),e.open(i,"_self")},h=function(e,o,i){var t="fb-messenger://share?link="+encodeURIComponent(o.socialshareUrl||e.location.href);i.attr("href",t),i.attr("target","_top")},c=function(e,o){var i="https://www.twitter.com/intent/tweet?";o.socialshareText&&(i+="text="+encodeURIComponent(o.socialshareText)),o.socialshareVia&&(i+="&via="+encodeURIComponent(o.socialshareVia)),o.socialshareHashtags&&(i+="&hashtags="+encodeURIComponent(o.socialshareHashtags)),i+="&url="+encodeURIComponent(o.socialshareUrl||e.location.href),e.open(i,"Twitter","toolbar=0,status=0,resizable=yes,width="+o.socialsharePopupWidth+",height="+o.socialsharePopupHeight+",top="+(e.innerHeight-o.socialsharePopupHeight)/2+",left="+(e.innerWidth-o.socialsharePopupWidth)/2)},p=function(e,o){e.open("https://plus.google.com/share?url="+encodeURIComponent(o.socialshareUrl||e.location.href),"Google+","toolbar=0,status=0,resizable=yes,width="+o.socialsharePopupWidth+",height="+o.socialsharePopupHeight+",top="+(e.innerHeight-o.socialsharePopupHeight)/2+",left="+(e.innerWidth-o.socialsharePopupWidth)/2)},n=function(e,o){var i="https://www.reddit.com/";i+=o.socialshareSubreddit?"r/"+o.socialshareSubreddit+"/submit?url=":"submit?url=",o.socialsharePopupWidth<900&&(o.socialsharePopupWidth=900),o.socialsharePopupHeight<650&&(o.socialsharePopupHeight=650),e.open(i+encodeURIComponent(o.socialshareUrl||e.location.href)+"&title="+encodeURIComponent(o.socialshareText),"Reddit","toolbar=0,status=0,resizable=yes,width="+o.socialsharePopupWidth+",height="+o.socialsharePopupHeight+",top="+(e.innerHeight-o.socialsharePopupHeight)/2+",left="+(e.innerWidth-o.socialsharePopupWidth)/2)},l=function(e,o){e.open("https://www.stumbleupon.com/submit?url="+encodeURIComponent(o.socialshareUrl||e.location.href)+"&title="+encodeURIComponent(o.socialshareText),"StumbleUpon","toolbar=0,status=0,resizable=yes,width="+o.socialsharePopupWidth+",height="+o.socialsharePopupHeight+",top="+(e.innerHeight-o.socialsharePopupHeight)/2+",left="+(e.innerWidth-o.socialsharePopupWidth)/2)},d=function(e,o){var i="https://www.linkedin.com/shareArticle?mini=true";i+="&url="+encodeURIComponent(o.socialshareUrl||e.location.href),o.socialshareText&&(i+="&title="+encodeURIComponent(o.socialshareText)),o.socialshareDescription&&(i+="&summary="+encodeURIComponent(o.socialshareDescription)),o.socialshareSource&&(i+="&source="+encodeURIComponent(o.socialshareSource)),e.open(i,"Linkedin","toolbar=0,status=0,resizable=yes,width="+o.socialsharePopupWidth+",height="+o.socialsharePopupHeight+",top="+(e.innerHeight-o.socialsharePopupHeight)/2+",left="+(e.innerWidth-o.socialsharePopupWidth)/2)},u=function(e,o){e.open("https://www.pinterest.com/pin/create/button/?url="+encodeURIComponent(o.socialshareUrl||e.location.href)+"&media="+encodeURIComponent(o.socialshareMedia)+"&description="+encodeURIComponent(o.socialshareText),"Pinterest","toolbar=0,status=0,resizable=yes,width="+o.socialsharePopupWidth+",height="+o.socialsharePopupHeight+",top="+(e.innerHeight-o.socialsharePopupHeight)/2+",left="+(e.innerWidth-o.socialsharePopupWidth)/2)},g=function(e,o){e.open("https://www.digg.com/submit?url="+encodeURIComponent(o.socialshareUrl||e.location.href)+"&title="+encodeURIComponent(o.socialshareText),"Digg","toolbar=0,status=0,resizable=yes,width="+o.socialsharePopupWidth+",height="+o.socialsharePopupHeight+",top="+(e.innerHeight-o.socialsharePopupHeight)/2+",left="+(e.innerWidth-o.socialsharePopupWidth)/2)},f=function(e,o){if(o.socialshareMedia){var i="https://www.tumblr.com/share/photo?source="+encodeURIComponent(o.socialshareMedia);o.socialshareText&&(i+="&caption="+encodeURIComponent(o.socialshareText)),e.open(i,"Tumblr","toolbar=0,status=0,resizable=yes,width="+o.socialsharePopupWidth+",height="+o.socialsharePopupHeight+",top="+(e.innerHeight-o.socialsharePopupHeight)/2+",left="+(e.innerWidth-o.socialsharePopupWidth)/2)}else e.open("https://www.tumblr.com/share/link?url="+encodeURIComponent(o.socialshareUrl||e.location.href)+"&description="+encodeURIComponent(o.socialshareText),"Tumblr","toolbar=0,status=0,resizable=yes,width="+o.socialsharePopupWidth+",height="+o.socialsharePopupHeight+",top="+(e.innerHeight-o.socialsharePopupHeight)/2+",left="+(e.innerWidth-o.socialsharePopupWidth)/2)},m=function(e,o){var i="https://www.vk.com/share.php?url="+encodeURIComponent(o.socialshareUrl||e.location.href);o.socialshareText&&(i+="&title="+encodeURIComponent(o.socialshareText)),o.socialshareMedia&&(i+="&image="+encodeURIComponent(o.socialshareMedia)),o.socialshareDescription&&(i+="&description="+encodeURIComponent(o.socialshareDescription)),e.open(i,"Vk","toolbar=0,status=0,resizable=yes,width="+o.socialsharePopupWidth+",height="+o.socialsharePopupHeight+",top="+(e.innerHeight-o.socialsharePopupHeight)/2+",left="+(e.innerWidth-o.socialsharePopupWidth)/2)},b=function(e,o){e.open("http://www.odnoklassniki.ru/dk?st.cmd=addShare&st.s=1&st._surl="+encodeURIComponent(o.socialshareUrl||e.location.href)+"&st.comments="+encodeURIComponent(o.socialshareText),"Ok","toolbar=0,status=0,resizable=yes,width="+o.socialsharePopupWidth+",height="+o.socialsharePopupHeight+",top="+(e.innerHeight-o.socialsharePopupHeight)/2+",left="+(e.innerWidth-o.socialsharePopupWidth)/2)},k=function(e,o){e.open("https://www.delicious.com/save?v=5&noui&jump=close&url="+encodeURIComponent(o.socialshareUrl||e.location.href)+"&title="+encodeURIComponent(o.socialshareText),"Delicious","toolbar=0,status=0,resizable=yes,width="+o.socialsharePopupWidth+",height="+o.socialsharePopupHeight+",top="+(e.innerHeight-o.socialsharePopupHeight)/2+",left="+(e.innerWidth-o.socialsharePopupWidth)/2)},w=function(e,o){var i="https://bufferapp.com/add?";o.socialshareText&&(i+="text="+encodeURIComponent(o.socialshareText)),o.socialshareVia&&(i+="&via="+encodeURIComponent(o.socialshareVia)),o.socialshareMedia&&(i+="&picture="+encodeURIComponent(o.socialshareMedia)),i+="&url="+encodeURIComponent(o.socialshareUrl||e.location.href),e.open(i,"Buffer","toolbar=0,status=0,resizable=yes,width="+o.socialsharePopupWidth+",height="+o.socialsharePopupHeight+",top="+(e.innerHeight-o.socialsharePopupHeight)/2+",left="+(e.innerWidth-o.socialsharePopupWidth)/2)},U=function(e,o){var i="https://news.ycombinator.com/submitlink?";o.socialshareText&&(i+="t="+encodeURIComponent(o.socialshareText)+"&"),i+="u="+encodeURIComponent(o.socialshareUrl||e.location.href),e.open(i,"Hackernews","toolbar=0,status=0,resizable=yes,width="+o.socialsharePopupWidth+",height="+o.socialsharePopupHeight+",top="+(e.innerHeight-o.socialsharePopupHeight)/2+",left="+(e.innerWidth-o.socialsharePopupWidth)/2)},P=function(e,o){var i="https://share.flipboard.com/bookmarklet/popout?v=2&";o.socialshareText&&(i+="title="+encodeURIComponent(o.socialshareText)+"&"),i+="url="+encodeURIComponent(o.socialshareUrl||e.location.href),e.open(i,"Flipboard","toolbar=0,status=0,resizable=yes,width="+o.socialsharePopupWidth+",height="+o.socialsharePopupHeight+",top="+(e.innerHeight-o.socialsharePopupHeight)/2+",left="+(e.innerWidth-o.socialsharePopupWidth)/2)},H=function(e,o){var i="https://getpocket.com/save?";o.socialshareText&&(i+="text="+encodeURIComponent(o.socialshareText)+"&"),i+="url="+encodeURIComponent(o.socialshareUrl||e.location.href),e.open(i,"Pocket","toolbar=0,status=0,resizable=yes,width="+o.socialsharePopupWidth+",height="+o.socialsharePopupHeight+",top="+(e.innerHeight-o.socialsharePopupHeight)/2+",left="+(e.innerWidth-o.socialsharePopupWidth)/2)},v=function(e,o){var i="http://wordpress.com/press-this.php?";o.socialshareText&&(i+="t="+encodeURIComponent(o.socialshareText)+"&"),o.socialshareMedia&&(i+="i="+encodeURIComponent(o.socialshareMedia)+"&"),i+="u="+encodeURIComponent(o.socialshareUrl||e.location.href),e.open(i,"Wordpress","toolbar=0,status=0,resizable=yes,width="+o.socialsharePopupWidth+",height="+o.socialsharePopupHeight+",top="+(e.innerHeight-o.socialsharePopupHeight)/2+",left="+(e.innerWidth-o.socialsharePopupWidth)/2)},W=function(e,o){var i="";o.socialshareFollow&&(i="&follow_url="+encodeURIComponent(o.socialshareFollow)),e.open("https://www.xing.com/spi/shares/new?url="+encodeURIComponent(o.socialshareUrl||e.location.href)+i,"Xing","toolbar=0,status=0,resizable=yes,width="+o.socialsharePopupWidth+",height="+o.socialsharePopupHeight+",top="+(e.innerHeight-o.socialsharePopupHeight)/2+",left="+(e.innerWidth-o.socialsharePopupWidth)/2)},R=function(e,o){var i="http://www.evernote.com/clip.action?url="+encodeURIComponent(o.socialshareUrl||e.location.href);o.socialshareText&&(i+="&title="+encodeURIComponent(o.socialshareText)),e.open(i,"Evernote","toolbar=0,status=0,resizable=yes,width="+o.socialsharePopupWidth+",height="+o.socialsharePopupHeight+",top="+(e.innerHeight-o.socialsharePopupHeight)/2+",left="+(e.innerWidth-o.socialsharePopupWidth)/2)},C=function(e,o,i){var t="whatsapp://send?text="+encodeURIComponent(o.socialshareText+" ")+encodeURIComponent(o.socialshareUrl||e.location.href);i.attr("href",t),i.attr("target","_top")},I=function(e,o,i){var t="viber://forward?text="+encodeURIComponent(o.socialshareText+" ")+encodeURIComponent(o.socialshareUrl||e.location.href);i.attr("href",t),i.attr("target","_top")},x=function(e,o){var i="https://telegram.me/share/url?url="+encodeURIComponent(o.socialshareUrl||e.location.href);o.socialshareText&&(i+="&text="+encodeURIComponent(o.socialshareText)),e.open(i,"Telegram","toolbar=0,status=0,resizable=yes,width="+o.socialsharePopupWidth+",height="+o.socialsharePopupHeight+",top="+(e.innerHeight-o.socialsharePopupHeight)/2+",left="+(e.innerWidth-o.socialsharePopupWidth)/2)},S=function(e,o){var i="https://web.skype.com/share?source=button&url="+encodeURIComponent(o.socialshareUrl||e.location.href);o.socialshareText&&(i+="&text="+encodeURIComponent(o.socialshareText)),e.open(i,"Skype","toolbar=0,status=0,resizable=yes,width="+o.socialsharePopupWidth+",height="+o.socialsharePopupHeight+",top="+(e.innerHeight-o.socialsharePopupHeight)/2+",left="+(e.innerWidth-o.socialsharePopupWidth)/2)},y=["$window",function(e){this.emailShare=s,this.facebookShare=r,this.twitterShare=c,this.stumbleuponShare=l,this.pinterestShare=u,this.googleShare=p,this.bufferShare=w,this.hackernewsShare=U,this.okShare=b,this.deliciousShare=k,this.pocketShare=H,this.vkShare=m,this.flipboardShare=P,this.xingShare=W,this.diggShare=g,this.linkedinShare=d,this.wordpressShare=v,this.telegramShare=x,this.redditShare=n,this.evernoteShare=R,this.tumblrShare=f,this.skypeShare=S,this.share=function(o){switch(o.provider){case"email":this.emailShare(e,o.attrs);break;case"facebook":this.facebookShare(e,o.attrs);break;case"twitter":this.twitterShare(e,o.attrs);break;case"pinterest":this.pinterestShare(e,o.attrs);break;case"ok":this.okShare(e,o.attrs);break;case"vk":this.vkShare(e,o.attrs);break;case"delicious":this.deliciousShare(e,o.attrs);break;case"digg":this.diggShare(e,o.attrs);break;case"google":this.googleShare(e,o.attrs);break;case"reddit":this.redditShare(e,o.attrs);break;case"hackernews":this.hackernewsShare(e,o.attrs);break;case"skype":this.skypeShare(e,o.attrs);break;case"evernote":this.evernoteShare(e,o.attrs);break;case"pocket":this.pocketShare(e,o.attrs);break;case"tumblr":this.tumblrShare(e,o.attrs);break;case"telegram":this.telegramShare(e,o.attrs);break;case"xing":this.xingShare(e,o.attrs);break;case"buffer":this.bufferShare(e,o.attrs);break;case"stumbleupon":this.stumbleuponShare(e,o.attrs);break;case"linkedin":this.linkedinShare(e,o.attrs);break;case"wordpress":this.wordpressShare(e,o.attrs);break;case"flipboard":this.flipboardShare(e,o.attrs);break;default:return}}}],T=["$window","socialshareConf","Socialshare","$log",function(e,o,i){var a=function(a,r,s){for(var h,c=0,p=(function(){return!(s.socialshareProvider in z)||void z[s.socialshareProvider](e,s,r)});c<o.length;c+=1)if(o[c].provider===s.socialshareProvider){h=o[c];break}t.indexOf(h.provider)===-1&&i.warn("Invalid Provider Name : "+s.socialshareProvider),s.socialshareUrl=s.socialshareUrl||h.conf.url,s.socialshareText=s.socialshareText||h.conf.text,s.socialshareMedia=s.socialshareMedia||h.conf.media,s.socialshareType=s.socialshareType||h.conf.type,s.socialshareVia=s.socialshareVia||h.conf.via,s.socialshareTo=s.socialshareTo||h.conf.to,s.socialshareFrom=s.socialshareFrom||h.conf.from,s.socialshareRef=s.socialshareRef||h.conf.ref,s.socialshareDislay=s.socialshareDislay||h.conf.display,s.socialshareSource=s.socialshareSource||h.conf.source,s.socialshareCaption=s.socialshareCaption||h.conf.caption,s.socialshareRedirectUri=s.socialshareRedirectUri||h.conf.redirectUri,s.socialshareTrigger=s.socialshareTrigger||h.conf.trigger,s.socialsharePopupHeight=s.socialsharePopupHeight||h.conf.popupHeight,s.socialsharePopupWidth=s.socialsharePopupWidth||h.conf.popupWidth,s.socialshareSubreddit=s.socialshareSubreddit||h.conf.subreddit,s.socialshareDescription=s.socialshareDescription||h.conf.description,s.socialshareFollow=s.socialshareFollow||h.conf.follow,s.socialshareHashtags=s.socialshareHashtags||h.conf.hashtags,s.socialshareBody=s.socialshareBody||h.conf.body,s.socialshareSubject=s.socialshareSubject||h.conf.subject,s.socialshareCc=s.socialshareCc||h.conf.cc,s.socialshareBcc=s.socialshareBcc||h.conf.bcc,s.socialshareTrigger?r.bind(s.socialshareTrigger,p):p()};return{restrict:"A",link:a}}],z={email:s,facebook:r,"facebook-messenger":h,twitter:c,google:p,reddit:n,stumbleupon:l,linkedin:d,pinterest:u,digg:g,tumblr:f,vk:m,ok:b,delicious:k,buffer:w,hackernews:U,flipboard:P,pocket:H,wordpress:v,xing:W,evernote:R,whatsapp:C,telegram:x,viber:I,skype:S};e.module("720kb.socialshare",[]).provider(o+"Conf",a).service(i,y).directive(o,T)}(angular);
//# sourceMappingURL=angular-socialshare.js.map

/**
 * @license AngularJS v1.5.8
 * (c) 2010-2016 Google, Inc. http://angularjs.org
 * License: MIT
 */
(function(window, angular) {

'use strict';

/**
 * @ngdoc object
 * @name angular.mock
 * @description
 *
 * Namespace from 'angular-mocks.js' which contains testing related code.
 *
 */
angular.mock = {};

/**
 * ! This is a private undocumented service !
 *
 * @name $browser
 *
 * @description
 * This service is a mock implementation of {@link ng.$browser}. It provides fake
 * implementation for commonly used browser apis that are hard to test, e.g. setTimeout, xhr,
 * cookies, etc.
 *
 * The api of this service is the same as that of the real {@link ng.$browser $browser}, except
 * that there are several helper methods available which can be used in tests.
 */
angular.mock.$BrowserProvider = function() {
  this.$get = function() {
    return new angular.mock.$Browser();
  };
};

angular.mock.$Browser = function() {
  var self = this;

  this.isMock = true;
  self.$$url = "http://server/";
  self.$$lastUrl = self.$$url; // used by url polling fn
  self.pollFns = [];

  // TODO(vojta): remove this temporary api
  self.$$completeOutstandingRequest = angular.noop;
  self.$$incOutstandingRequestCount = angular.noop;


  // register url polling fn

  self.onUrlChange = function(listener) {
    self.pollFns.push(
      function() {
        if (self.$$lastUrl !== self.$$url || self.$$state !== self.$$lastState) {
          self.$$lastUrl = self.$$url;
          self.$$lastState = self.$$state;
          listener(self.$$url, self.$$state);
        }
      }
    );

    return listener;
  };

  self.$$applicationDestroyed = angular.noop;
  self.$$checkUrlChange = angular.noop;

  self.deferredFns = [];
  self.deferredNextId = 0;

  self.defer = function(fn, delay) {
    delay = delay || 0;
    self.deferredFns.push({time:(self.defer.now + delay), fn:fn, id: self.deferredNextId});
    self.deferredFns.sort(function(a, b) { return a.time - b.time;});
    return self.deferredNextId++;
  };


  /**
   * @name $browser#defer.now
   *
   * @description
   * Current milliseconds mock time.
   */
  self.defer.now = 0;


  self.defer.cancel = function(deferId) {
    var fnIndex;

    angular.forEach(self.deferredFns, function(fn, index) {
      if (fn.id === deferId) fnIndex = index;
    });

    if (angular.isDefined(fnIndex)) {
      self.deferredFns.splice(fnIndex, 1);
      return true;
    }

    return false;
  };


  /**
   * @name $browser#defer.flush
   *
   * @description
   * Flushes all pending requests and executes the defer callbacks.
   *
   * @param {number=} number of milliseconds to flush. See {@link #defer.now}
   */
  self.defer.flush = function(delay) {
    var nextTime;

    if (angular.isDefined(delay)) {
      // A delay was passed so compute the next time
      nextTime = self.defer.now + delay;
    } else {
      if (self.deferredFns.length) {
        // No delay was passed so set the next time so that it clears the deferred queue
        nextTime = self.deferredFns[self.deferredFns.length - 1].time;
      } else {
        // No delay passed, but there are no deferred tasks so flush - indicates an error!
        throw new Error('No deferred tasks to be flushed');
      }
    }

    while (self.deferredFns.length && self.deferredFns[0].time <= nextTime) {
      // Increment the time and call the next deferred function
      self.defer.now = self.deferredFns[0].time;
      self.deferredFns.shift().fn();
    }

    // Ensure that the current time is correct
    self.defer.now = nextTime;
  };

  self.$$baseHref = '/';
  self.baseHref = function() {
    return this.$$baseHref;
  };
};
angular.mock.$Browser.prototype = {

  /**
   * @name $browser#poll
   *
   * @description
   * run all fns in pollFns
   */
  poll: function poll() {
    angular.forEach(this.pollFns, function(pollFn) {
      pollFn();
    });
  },

  url: function(url, replace, state) {
    if (angular.isUndefined(state)) {
      state = null;
    }
    if (url) {
      this.$$url = url;
      // Native pushState serializes & copies the object; simulate it.
      this.$$state = angular.copy(state);
      return this;
    }

    return this.$$url;
  },

  state: function() {
    return this.$$state;
  },

  notifyWhenNoOutstandingRequests: function(fn) {
    fn();
  }
};


/**
 * @ngdoc provider
 * @name $exceptionHandlerProvider
 *
 * @description
 * Configures the mock implementation of {@link ng.$exceptionHandler} to rethrow or to log errors
 * passed to the `$exceptionHandler`.
 */

/**
 * @ngdoc service
 * @name $exceptionHandler
 *
 * @description
 * Mock implementation of {@link ng.$exceptionHandler} that rethrows or logs errors passed
 * to it. See {@link ngMock.$exceptionHandlerProvider $exceptionHandlerProvider} for configuration
 * information.
 *
 *
 * ```js
 *   describe('$exceptionHandlerProvider', function() {
 *
 *     it('should capture log messages and exceptions', function() {
 *
 *       module(function($exceptionHandlerProvider) {
 *         $exceptionHandlerProvider.mode('log');
 *       });
 *
 *       inject(function($log, $exceptionHandler, $timeout) {
 *         $timeout(function() { $log.log(1); });
 *         $timeout(function() { $log.log(2); throw 'banana peel'; });
 *         $timeout(function() { $log.log(3); });
 *         expect($exceptionHandler.errors).toEqual([]);
 *         expect($log.assertEmpty());
 *         $timeout.flush();
 *         expect($exceptionHandler.errors).toEqual(['banana peel']);
 *         expect($log.log.logs).toEqual([[1], [2], [3]]);
 *       });
 *     });
 *   });
 * ```
 */

angular.mock.$ExceptionHandlerProvider = function() {
  var handler;

  /**
   * @ngdoc method
   * @name $exceptionHandlerProvider#mode
   *
   * @description
   * Sets the logging mode.
   *
   * @param {string} mode Mode of operation, defaults to `rethrow`.
   *
   *   - `log`: Sometimes it is desirable to test that an error is thrown, for this case the `log`
   *     mode stores an array of errors in `$exceptionHandler.errors`, to allow later assertion of
   *     them. See {@link ngMock.$log#assertEmpty assertEmpty()} and
   *     {@link ngMock.$log#reset reset()}.
   *   - `rethrow`: If any errors are passed to the handler in tests, it typically means that there
   *     is a bug in the application or test, so this mock will make these tests fail. For any
   *     implementations that expect exceptions to be thrown, the `rethrow` mode will also maintain
   *     a log of thrown errors in `$exceptionHandler.errors`.
   */
  this.mode = function(mode) {

    switch (mode) {
      case 'log':
      case 'rethrow':
        var errors = [];
        handler = function(e) {
          if (arguments.length == 1) {
            errors.push(e);
          } else {
            errors.push([].slice.call(arguments, 0));
          }
          if (mode === "rethrow") {
            throw e;
          }
        };
        handler.errors = errors;
        break;
      default:
        throw new Error("Unknown mode '" + mode + "', only 'log'/'rethrow' modes are allowed!");
    }
  };

  this.$get = function() {
    return handler;
  };

  this.mode('rethrow');
};


/**
 * @ngdoc service
 * @name $log
 *
 * @description
 * Mock implementation of {@link ng.$log} that gathers all logged messages in arrays
 * (one array per logging level). These arrays are exposed as `logs` property of each of the
 * level-specific log function, e.g. for level `error` the array is exposed as `$log.error.logs`.
 *
 */
angular.mock.$LogProvider = function() {
  var debug = true;

  function concat(array1, array2, index) {
    return array1.concat(Array.prototype.slice.call(array2, index));
  }

  this.debugEnabled = function(flag) {
    if (angular.isDefined(flag)) {
      debug = flag;
      return this;
    } else {
      return debug;
    }
  };

  this.$get = function() {
    var $log = {
      log: function() { $log.log.logs.push(concat([], arguments, 0)); },
      warn: function() { $log.warn.logs.push(concat([], arguments, 0)); },
      info: function() { $log.info.logs.push(concat([], arguments, 0)); },
      error: function() { $log.error.logs.push(concat([], arguments, 0)); },
      debug: function() {
        if (debug) {
          $log.debug.logs.push(concat([], arguments, 0));
        }
      }
    };

    /**
     * @ngdoc method
     * @name $log#reset
     *
     * @description
     * Reset all of the logging arrays to empty.
     */
    $log.reset = function() {
      /**
       * @ngdoc property
       * @name $log#log.logs
       *
       * @description
       * Array of messages logged using {@link ng.$log#log `log()`}.
       *
       * @example
       * ```js
       * $log.log('Some Log');
       * var first = $log.log.logs.unshift();
       * ```
       */
      $log.log.logs = [];
      /**
       * @ngdoc property
       * @name $log#info.logs
       *
       * @description
       * Array of messages logged using {@link ng.$log#info `info()`}.
       *
       * @example
       * ```js
       * $log.info('Some Info');
       * var first = $log.info.logs.unshift();
       * ```
       */
      $log.info.logs = [];
      /**
       * @ngdoc property
       * @name $log#warn.logs
       *
       * @description
       * Array of messages logged using {@link ng.$log#warn `warn()`}.
       *
       * @example
       * ```js
       * $log.warn('Some Warning');
       * var first = $log.warn.logs.unshift();
       * ```
       */
      $log.warn.logs = [];
      /**
       * @ngdoc property
       * @name $log#error.logs
       *
       * @description
       * Array of messages logged using {@link ng.$log#error `error()`}.
       *
       * @example
       * ```js
       * $log.error('Some Error');
       * var first = $log.error.logs.unshift();
       * ```
       */
      $log.error.logs = [];
        /**
       * @ngdoc property
       * @name $log#debug.logs
       *
       * @description
       * Array of messages logged using {@link ng.$log#debug `debug()`}.
       *
       * @example
       * ```js
       * $log.debug('Some Error');
       * var first = $log.debug.logs.unshift();
       * ```
       */
      $log.debug.logs = [];
    };

    /**
     * @ngdoc method
     * @name $log#assertEmpty
     *
     * @description
     * Assert that all of the logging methods have no logged messages. If any messages are present,
     * an exception is thrown.
     */
    $log.assertEmpty = function() {
      var errors = [];
      angular.forEach(['error', 'warn', 'info', 'log', 'debug'], function(logLevel) {
        angular.forEach($log[logLevel].logs, function(log) {
          angular.forEach(log, function(logItem) {
            errors.push('MOCK $log (' + logLevel + '): ' + String(logItem) + '\n' +
                        (logItem.stack || ''));
          });
        });
      });
      if (errors.length) {
        errors.unshift("Expected $log to be empty! Either a message was logged unexpectedly, or " +
          "an expected log message was not checked and removed:");
        errors.push('');
        throw new Error(errors.join('\n---------\n'));
      }
    };

    $log.reset();
    return $log;
  };
};


/**
 * @ngdoc service
 * @name $interval
 *
 * @description
 * Mock implementation of the $interval service.
 *
 * Use {@link ngMock.$interval#flush `$interval.flush(millis)`} to
 * move forward by `millis` milliseconds and trigger any functions scheduled to run in that
 * time.
 *
 * @param {function()} fn A function that should be called repeatedly.
 * @param {number} delay Number of milliseconds between each function call.
 * @param {number=} [count=0] Number of times to repeat. If not set, or 0, will repeat
 *   indefinitely.
 * @param {boolean=} [invokeApply=true] If set to `false` skips model dirty checking, otherwise
 *   will invoke `fn` within the {@link ng.$rootScope.Scope#$apply $apply} block.
 * @param {...*=} Pass additional parameters to the executed function.
 * @returns {promise} A promise which will be notified on each iteration.
 */
angular.mock.$IntervalProvider = function() {
  this.$get = ['$browser', '$rootScope', '$q', '$$q',
       function($browser,   $rootScope,   $q,   $$q) {
    var repeatFns = [],
        nextRepeatId = 0,
        now = 0;

    var $interval = function(fn, delay, count, invokeApply) {
      var hasParams = arguments.length > 4,
          args = hasParams ? Array.prototype.slice.call(arguments, 4) : [],
          iteration = 0,
          skipApply = (angular.isDefined(invokeApply) && !invokeApply),
          deferred = (skipApply ? $$q : $q).defer(),
          promise = deferred.promise;

      count = (angular.isDefined(count)) ? count : 0;
      promise.then(null, null, (!hasParams) ? fn : function() {
        fn.apply(null, args);
      });

      promise.$$intervalId = nextRepeatId;

      function tick() {
        deferred.notify(iteration++);

        if (count > 0 && iteration >= count) {
          var fnIndex;
          deferred.resolve(iteration);

          angular.forEach(repeatFns, function(fn, index) {
            if (fn.id === promise.$$intervalId) fnIndex = index;
          });

          if (angular.isDefined(fnIndex)) {
            repeatFns.splice(fnIndex, 1);
          }
        }

        if (skipApply) {
          $browser.defer.flush();
        } else {
          $rootScope.$apply();
        }
      }

      repeatFns.push({
        nextTime:(now + delay),
        delay: delay,
        fn: tick,
        id: nextRepeatId,
        deferred: deferred
      });
      repeatFns.sort(function(a, b) { return a.nextTime - b.nextTime;});

      nextRepeatId++;
      return promise;
    };
    /**
     * @ngdoc method
     * @name $interval#cancel
     *
     * @description
     * Cancels a task associated with the `promise`.
     *
     * @param {promise} promise A promise from calling the `$interval` function.
     * @returns {boolean} Returns `true` if the task was successfully cancelled.
     */
    $interval.cancel = function(promise) {
      if (!promise) return false;
      var fnIndex;

      angular.forEach(repeatFns, function(fn, index) {
        if (fn.id === promise.$$intervalId) fnIndex = index;
      });

      if (angular.isDefined(fnIndex)) {
        repeatFns[fnIndex].deferred.reject('canceled');
        repeatFns.splice(fnIndex, 1);
        return true;
      }

      return false;
    };

    /**
     * @ngdoc method
     * @name $interval#flush
     * @description
     *
     * Runs interval tasks scheduled to be run in the next `millis` milliseconds.
     *
     * @param {number=} millis maximum timeout amount to flush up until.
     *
     * @return {number} The amount of time moved forward.
     */
    $interval.flush = function(millis) {
      now += millis;
      while (repeatFns.length && repeatFns[0].nextTime <= now) {
        var task = repeatFns[0];
        task.fn();
        task.nextTime += task.delay;
        repeatFns.sort(function(a, b) { return a.nextTime - b.nextTime;});
      }
      return millis;
    };

    return $interval;
  }];
};


/* jshint -W101 */
/* The R_ISO8061_STR regex is never going to fit into the 100 char limit!
 * This directive should go inside the anonymous function but a bug in JSHint means that it would
 * not be enacted early enough to prevent the warning.
 */
var R_ISO8061_STR = /^(-?\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?:\:?(\d\d)(?:\:?(\d\d)(?:\.(\d{3}))?)?)?(Z|([+-])(\d\d):?(\d\d)))?$/;

function jsonStringToDate(string) {
  var match;
  if (match = string.match(R_ISO8061_STR)) {
    var date = new Date(0),
        tzHour = 0,
        tzMin  = 0;
    if (match[9]) {
      tzHour = toInt(match[9] + match[10]);
      tzMin = toInt(match[9] + match[11]);
    }
    date.setUTCFullYear(toInt(match[1]), toInt(match[2]) - 1, toInt(match[3]));
    date.setUTCHours(toInt(match[4] || 0) - tzHour,
                     toInt(match[5] || 0) - tzMin,
                     toInt(match[6] || 0),
                     toInt(match[7] || 0));
    return date;
  }
  return string;
}

function toInt(str) {
  return parseInt(str, 10);
}

function padNumberInMock(num, digits, trim) {
  var neg = '';
  if (num < 0) {
    neg =  '-';
    num = -num;
  }
  num = '' + num;
  while (num.length < digits) num = '0' + num;
  if (trim) {
    num = num.substr(num.length - digits);
  }
  return neg + num;
}


/**
 * @ngdoc type
 * @name angular.mock.TzDate
 * @description
 *
 * *NOTE*: this is not an injectable instance, just a globally available mock class of `Date`.
 *
 * Mock of the Date type which has its timezone specified via constructor arg.
 *
 * The main purpose is to create Date-like instances with timezone fixed to the specified timezone
 * offset, so that we can test code that depends on local timezone settings without dependency on
 * the time zone settings of the machine where the code is running.
 *
 * @param {number} offset Offset of the *desired* timezone in hours (fractions will be honored)
 * @param {(number|string)} timestamp Timestamp representing the desired time in *UTC*
 *
 * @example
 * !!!! WARNING !!!!!
 * This is not a complete Date object so only methods that were implemented can be called safely.
 * To make matters worse, TzDate instances inherit stuff from Date via a prototype.
 *
 * We do our best to intercept calls to "unimplemented" methods, but since the list of methods is
 * incomplete we might be missing some non-standard methods. This can result in errors like:
 * "Date.prototype.foo called on incompatible Object".
 *
 * ```js
 * var newYearInBratislava = new TzDate(-1, '2009-12-31T23:00:00Z');
 * newYearInBratislava.getTimezoneOffset() => -60;
 * newYearInBratislava.getFullYear() => 2010;
 * newYearInBratislava.getMonth() => 0;
 * newYearInBratislava.getDate() => 1;
 * newYearInBratislava.getHours() => 0;
 * newYearInBratislava.getMinutes() => 0;
 * newYearInBratislava.getSeconds() => 0;
 * ```
 *
 */
angular.mock.TzDate = function(offset, timestamp) {
  var self = new Date(0);
  if (angular.isString(timestamp)) {
    var tsStr = timestamp;

    self.origDate = jsonStringToDate(timestamp);

    timestamp = self.origDate.getTime();
    if (isNaN(timestamp)) {
      throw {
        name: "Illegal Argument",
        message: "Arg '" + tsStr + "' passed into TzDate constructor is not a valid date string"
      };
    }
  } else {
    self.origDate = new Date(timestamp);
  }

  var localOffset = new Date(timestamp).getTimezoneOffset();
  self.offsetDiff = localOffset * 60 * 1000 - offset * 1000 * 60 * 60;
  self.date = new Date(timestamp + self.offsetDiff);

  self.getTime = function() {
    return self.date.getTime() - self.offsetDiff;
  };

  self.toLocaleDateString = function() {
    return self.date.toLocaleDateString();
  };

  self.getFullYear = function() {
    return self.date.getFullYear();
  };

  self.getMonth = function() {
    return self.date.getMonth();
  };

  self.getDate = function() {
    return self.date.getDate();
  };

  self.getHours = function() {
    return self.date.getHours();
  };

  self.getMinutes = function() {
    return self.date.getMinutes();
  };

  self.getSeconds = function() {
    return self.date.getSeconds();
  };

  self.getMilliseconds = function() {
    return self.date.getMilliseconds();
  };

  self.getTimezoneOffset = function() {
    return offset * 60;
  };

  self.getUTCFullYear = function() {
    return self.origDate.getUTCFullYear();
  };

  self.getUTCMonth = function() {
    return self.origDate.getUTCMonth();
  };

  self.getUTCDate = function() {
    return self.origDate.getUTCDate();
  };

  self.getUTCHours = function() {
    return self.origDate.getUTCHours();
  };

  self.getUTCMinutes = function() {
    return self.origDate.getUTCMinutes();
  };

  self.getUTCSeconds = function() {
    return self.origDate.getUTCSeconds();
  };

  self.getUTCMilliseconds = function() {
    return self.origDate.getUTCMilliseconds();
  };

  self.getDay = function() {
    return self.date.getDay();
  };

  // provide this method only on browsers that already have it
  if (self.toISOString) {
    self.toISOString = function() {
      return padNumberInMock(self.origDate.getUTCFullYear(), 4) + '-' +
            padNumberInMock(self.origDate.getUTCMonth() + 1, 2) + '-' +
            padNumberInMock(self.origDate.getUTCDate(), 2) + 'T' +
            padNumberInMock(self.origDate.getUTCHours(), 2) + ':' +
            padNumberInMock(self.origDate.getUTCMinutes(), 2) + ':' +
            padNumberInMock(self.origDate.getUTCSeconds(), 2) + '.' +
            padNumberInMock(self.origDate.getUTCMilliseconds(), 3) + 'Z';
    };
  }

  //hide all methods not implemented in this mock that the Date prototype exposes
  var unimplementedMethods = ['getUTCDay',
      'getYear', 'setDate', 'setFullYear', 'setHours', 'setMilliseconds',
      'setMinutes', 'setMonth', 'setSeconds', 'setTime', 'setUTCDate', 'setUTCFullYear',
      'setUTCHours', 'setUTCMilliseconds', 'setUTCMinutes', 'setUTCMonth', 'setUTCSeconds',
      'setYear', 'toDateString', 'toGMTString', 'toJSON', 'toLocaleFormat', 'toLocaleString',
      'toLocaleTimeString', 'toSource', 'toString', 'toTimeString', 'toUTCString', 'valueOf'];

  angular.forEach(unimplementedMethods, function(methodName) {
    self[methodName] = function() {
      throw new Error("Method '" + methodName + "' is not implemented in the TzDate mock");
    };
  });

  return self;
};

//make "tzDateInstance instanceof Date" return true
angular.mock.TzDate.prototype = Date.prototype;
/* jshint +W101 */


/**
 * @ngdoc service
 * @name $animate
 *
 * @description
 * Mock implementation of the {@link ng.$animate `$animate`} service. Exposes two additional methods
 * for testing animations.
 *
 * You need to require the `ngAnimateMock` module in your test suite for instance `beforeEach(module('ngAnimateMock'))`
 */
angular.mock.animate = angular.module('ngAnimateMock', ['ng'])

  .config(['$provide', function($provide) {

    $provide.factory('$$forceReflow', function() {
      function reflowFn() {
        reflowFn.totalReflows++;
      }
      reflowFn.totalReflows = 0;
      return reflowFn;
    });

    $provide.factory('$$animateAsyncRun', function() {
      var queue = [];
      var queueFn = function() {
        return function(fn) {
          queue.push(fn);
        };
      };
      queueFn.flush = function() {
        if (queue.length === 0) return false;

        for (var i = 0; i < queue.length; i++) {
          queue[i]();
        }
        queue = [];

        return true;
      };
      return queueFn;
    });

    $provide.decorator('$$animateJs', ['$delegate', function($delegate) {
      var runners = [];

      var animateJsConstructor = function() {
        var animator = $delegate.apply($delegate, arguments);
        // If no javascript animation is found, animator is undefined
        if (animator) {
          runners.push(animator);
        }
        return animator;
      };

      animateJsConstructor.$closeAndFlush = function() {
        runners.forEach(function(runner) {
          runner.end();
        });
        runners = [];
      };

      return animateJsConstructor;
    }]);

    $provide.decorator('$animateCss', ['$delegate', function($delegate) {
      var runners = [];

      var animateCssConstructor = function(element, options) {
        var animator = $delegate(element, options);
        runners.push(animator);
        return animator;
      };

      animateCssConstructor.$closeAndFlush = function() {
        runners.forEach(function(runner) {
          runner.end();
        });
        runners = [];
      };

      return animateCssConstructor;
    }]);

    $provide.decorator('$animate', ['$delegate', '$timeout', '$browser', '$$rAF', '$animateCss', '$$animateJs',
                                    '$$forceReflow', '$$animateAsyncRun', '$rootScope',
                            function($delegate,   $timeout,   $browser,   $$rAF,   $animateCss,   $$animateJs,
                                     $$forceReflow,   $$animateAsyncRun,  $rootScope) {
      var animate = {
        queue: [],
        cancel: $delegate.cancel,
        on: $delegate.on,
        off: $delegate.off,
        pin: $delegate.pin,
        get reflows() {
          return $$forceReflow.totalReflows;
        },
        enabled: $delegate.enabled,
        /**
         * @ngdoc method
         * @name $animate#closeAndFlush
         * @description
         *
         * This method will close all pending animations (both {@link ngAnimate#javascript-based-animations Javascript}
         * and {@link ngAnimate.$animateCss CSS}) and it will also flush any remaining animation frames and/or callbacks.
         */
        closeAndFlush: function() {
          // we allow the flush command to swallow the errors
          // because depending on whether CSS or JS animations are
          // used, there may not be a RAF flush. The primary flush
          // at the end of this function must throw an exception
          // because it will track if there were pending animations
          this.flush(true);
          $animateCss.$closeAndFlush();
          $$animateJs.$closeAndFlush();
          this.flush();
        },
        /**
         * @ngdoc method
         * @name $animate#flush
         * @description
         *
         * This method is used to flush the pending callbacks and animation frames to either start
         * an animation or conclude an animation. Note that this will not actually close an
         * actively running animation (see {@link ngMock.$animate#closeAndFlush `closeAndFlush()`} for that).
         */
        flush: function(hideErrors) {
          $rootScope.$digest();

          var doNextRun, somethingFlushed = false;
          do {
            doNextRun = false;

            if ($$rAF.queue.length) {
              $$rAF.flush();
              doNextRun = somethingFlushed = true;
            }

            if ($$animateAsyncRun.flush()) {
              doNextRun = somethingFlushed = true;
            }
          } while (doNextRun);

          if (!somethingFlushed && !hideErrors) {
            throw new Error('No pending animations ready to be closed or flushed');
          }

          $rootScope.$digest();
        }
      };

      angular.forEach(
        ['animate','enter','leave','move','addClass','removeClass','setClass'], function(method) {
        animate[method] = function() {
          animate.queue.push({
            event: method,
            element: arguments[0],
            options: arguments[arguments.length - 1],
            args: arguments
          });
          return $delegate[method].apply($delegate, arguments);
        };
      });

      return animate;
    }]);

  }]);


/**
 * @ngdoc function
 * @name angular.mock.dump
 * @description
 *
 * *NOTE*: This is not an injectable instance, just a globally available function.
 *
 * Method for serializing common angular objects (scope, elements, etc..) into strings.
 * It is useful for logging objects to the console when debugging.
 *
 * @param {*} object - any object to turn into string.
 * @return {string} a serialized string of the argument
 */
angular.mock.dump = function(object) {
  return serialize(object);

  function serialize(object) {
    var out;

    if (angular.isElement(object)) {
      object = angular.element(object);
      out = angular.element('<div></div>');
      angular.forEach(object, function(element) {
        out.append(angular.element(element).clone());
      });
      out = out.html();
    } else if (angular.isArray(object)) {
      out = [];
      angular.forEach(object, function(o) {
        out.push(serialize(o));
      });
      out = '[ ' + out.join(', ') + ' ]';
    } else if (angular.isObject(object)) {
      if (angular.isFunction(object.$eval) && angular.isFunction(object.$apply)) {
        out = serializeScope(object);
      } else if (object instanceof Error) {
        out = object.stack || ('' + object.name + ': ' + object.message);
      } else {
        // TODO(i): this prevents methods being logged,
        // we should have a better way to serialize objects
        out = angular.toJson(object, true);
      }
    } else {
      out = String(object);
    }

    return out;
  }

  function serializeScope(scope, offset) {
    offset = offset ||  '  ';
    var log = [offset + 'Scope(' + scope.$id + '): {'];
    for (var key in scope) {
      if (Object.prototype.hasOwnProperty.call(scope, key) && !key.match(/^(\$|this)/)) {
        log.push('  ' + key + ': ' + angular.toJson(scope[key]));
      }
    }
    var child = scope.$$childHead;
    while (child) {
      log.push(serializeScope(child, offset + '  '));
      child = child.$$nextSibling;
    }
    log.push('}');
    return log.join('\n' + offset);
  }
};

/**
 * @ngdoc service
 * @name $httpBackend
 * @description
 * Fake HTTP backend implementation suitable for unit testing applications that use the
 * {@link ng.$http $http service}.
 *
 * <div class="alert alert-info">
 * **Note**: For fake HTTP backend implementation suitable for end-to-end testing or backend-less
 * development please see {@link ngMockE2E.$httpBackend e2e $httpBackend mock}.
 * </div>
 *
 * During unit testing, we want our unit tests to run quickly and have no external dependencies so
 * we don’t want to send [XHR](https://developer.mozilla.org/en/xmlhttprequest) or
 * [JSONP](http://en.wikipedia.org/wiki/JSONP) requests to a real server. All we really need is
 * to verify whether a certain request has been sent or not, or alternatively just let the
 * application make requests, respond with pre-trained responses and assert that the end result is
 * what we expect it to be.
 *
 * This mock implementation can be used to respond with static or dynamic responses via the
 * `expect` and `when` apis and their shortcuts (`expectGET`, `whenPOST`, etc).
 *
 * When an Angular application needs some data from a server, it calls the $http service, which
 * sends the request to a real server using $httpBackend service. With dependency injection, it is
 * easy to inject $httpBackend mock (which has the same API as $httpBackend) and use it to verify
 * the requests and respond with some testing data without sending a request to a real server.
 *
 * There are two ways to specify what test data should be returned as http responses by the mock
 * backend when the code under test makes http requests:
 *
 * - `$httpBackend.expect` - specifies a request expectation
 * - `$httpBackend.when` - specifies a backend definition
 *
 *
 * ## Request Expectations vs Backend Definitions
 *
 * Request expectations provide a way to make assertions about requests made by the application and
 * to define responses for those requests. The test will fail if the expected requests are not made
 * or they are made in the wrong order.
 *
 * Backend definitions allow you to define a fake backend for your application which doesn't assert
 * if a particular request was made or not, it just returns a trained response if a request is made.
 * The test will pass whether or not the request gets made during testing.
 *
 *
 * <table class="table">
 *   <tr><th width="220px"></th><th>Request expectations</th><th>Backend definitions</th></tr>
 *   <tr>
 *     <th>Syntax</th>
 *     <td>.expect(...).respond(...)</td>
 *     <td>.when(...).respond(...)</td>
 *   </tr>
 *   <tr>
 *     <th>Typical usage</th>
 *     <td>strict unit tests</td>
 *     <td>loose (black-box) unit testing</td>
 *   </tr>
 *   <tr>
 *     <th>Fulfills multiple requests</th>
 *     <td>NO</td>
 *     <td>YES</td>
 *   </tr>
 *   <tr>
 *     <th>Order of requests matters</th>
 *     <td>YES</td>
 *     <td>NO</td>
 *   </tr>
 *   <tr>
 *     <th>Request required</th>
 *     <td>YES</td>
 *     <td>NO</td>
 *   </tr>
 *   <tr>
 *     <th>Response required</th>
 *     <td>optional (see below)</td>
 *     <td>YES</td>
 *   </tr>
 * </table>
 *
 * In cases where both backend definitions and request expectations are specified during unit
 * testing, the request expectations are evaluated first.
 *
 * If a request expectation has no response specified, the algorithm will search your backend
 * definitions for an appropriate response.
 *
 * If a request didn't match any expectation or if the expectation doesn't have the response
 * defined, the backend definitions are evaluated in sequential order to see if any of them match
 * the request. The response from the first matched definition is returned.
 *
 *
 * ## Flushing HTTP requests
 *
 * The $httpBackend used in production always responds to requests asynchronously. If we preserved
 * this behavior in unit testing, we'd have to create async unit tests, which are hard to write,
 * to follow and to maintain. But neither can the testing mock respond synchronously; that would
 * change the execution of the code under test. For this reason, the mock $httpBackend has a
 * `flush()` method, which allows the test to explicitly flush pending requests. This preserves
 * the async api of the backend, while allowing the test to execute synchronously.
 *
 *
 * ## Unit testing with mock $httpBackend
 * The following code shows how to setup and use the mock backend when unit testing a controller.
 * First we create the controller under test:
 *
  ```js
  // The module code
  angular
    .module('MyApp', [])
    .controller('MyController', MyController);

  // The controller code
  function MyController($scope, $http) {
    var authToken;

    $http.get('/auth.py').then(function(response) {
      authToken = response.headers('A-Token');
      $scope.user = response.data;
    });

    $scope.saveMessage = function(message) {
      var headers = { 'Authorization': authToken };
      $scope.status = 'Saving...';

      $http.post('/add-msg.py', message, { headers: headers } ).then(function(response) {
        $scope.status = '';
      }).catch(function() {
        $scope.status = 'Failed...';
      });
    };
  }
  ```
 *
 * Now we setup the mock backend and create the test specs:
 *
  ```js
    // testing controller
    describe('MyController', function() {
       var $httpBackend, $rootScope, createController, authRequestHandler;

       // Set up the module
       beforeEach(module('MyApp'));

       beforeEach(inject(function($injector) {
         // Set up the mock http service responses
         $httpBackend = $injector.get('$httpBackend');
         // backend definition common for all tests
         authRequestHandler = $httpBackend.when('GET', '/auth.py')
                                .respond({userId: 'userX'}, {'A-Token': 'xxx'});

         // Get hold of a scope (i.e. the root scope)
         $rootScope = $injector.get('$rootScope');
         // The $controller service is used to create instances of controllers
         var $controller = $injector.get('$controller');

         createController = function() {
           return $controller('MyController', {'$scope' : $rootScope });
         };
       }));


       afterEach(function() {
         $httpBackend.verifyNoOutstandingExpectation();
         $httpBackend.verifyNoOutstandingRequest();
       });


       it('should fetch authentication token', function() {
         $httpBackend.expectGET('/auth.py');
         var controller = createController();
         $httpBackend.flush();
       });


       it('should fail authentication', function() {

         // Notice how you can change the response even after it was set
         authRequestHandler.respond(401, '');

         $httpBackend.expectGET('/auth.py');
         var controller = createController();
         $httpBackend.flush();
         expect($rootScope.status).toBe('Failed...');
       });


       it('should send msg to server', function() {
         var controller = createController();
         $httpBackend.flush();

         // now you don’t care about the authentication, but
         // the controller will still send the request and
         // $httpBackend will respond without you having to
         // specify the expectation and response for this request

         $httpBackend.expectPOST('/add-msg.py', 'message content').respond(201, '');
         $rootScope.saveMessage('message content');
         expect($rootScope.status).toBe('Saving...');
         $httpBackend.flush();
         expect($rootScope.status).toBe('');
       });


       it('should send auth header', function() {
         var controller = createController();
         $httpBackend.flush();

         $httpBackend.expectPOST('/add-msg.py', undefined, function(headers) {
           // check if the header was sent, if it wasn't the expectation won't
           // match the request and the test will fail
           return headers['Authorization'] == 'xxx';
         }).respond(201, '');

         $rootScope.saveMessage('whatever');
         $httpBackend.flush();
       });
    });
  ```
 *
 * ## Dynamic responses
 *
 * You define a response to a request by chaining a call to `respond()` onto a definition or expectation.
 * If you provide a **callback** as the first parameter to `respond(callback)` then you can dynamically generate
 * a response based on the properties of the request.
 *
 * The `callback` function should be of the form `function(method, url, data, headers, params)`.
 *
 * ### Query parameters
 *
 * By default, query parameters on request URLs are parsed into the `params` object. So a request URL
 * of `/list?q=searchstr&orderby=-name` would set `params` to be `{q: 'searchstr', orderby: '-name'}`.
 *
 * ### Regex parameter matching
 *
 * If an expectation or definition uses a **regex** to match the URL, you can provide an array of **keys** via a
 * `params` argument. The index of each **key** in the array will match the index of a **group** in the
 * **regex**.
 *
 * The `params` object in the **callback** will now have properties with these keys, which hold the value of the
 * corresponding **group** in the **regex**.
 *
 * This also applies to the `when` and `expect` shortcut methods.
 *
 *
 * ```js
 *   $httpBackend.expect('GET', /\/user\/(.+)/, undefined, undefined, ['id'])
 *     .respond(function(method, url, data, headers, params) {
 *       // for requested url of '/user/1234' params is {id: '1234'}
 *     });
 *
 *   $httpBackend.whenPATCH(/\/user\/(.+)\/article\/(.+)/, undefined, undefined, ['user', 'article'])
 *     .respond(function(method, url, data, headers, params) {
 *       // for url of '/user/1234/article/567' params is {user: '1234', article: '567'}
 *     });
 * ```
 *
 * ## Matching route requests
 *
 * For extra convenience, `whenRoute` and `expectRoute` shortcuts are available. These methods offer colon
 * delimited matching of the url path, ignoring the query string. This allows declarations
 * similar to how application routes are configured with `$routeProvider`. Because these methods convert
 * the definition url to regex, declaration order is important. Combined with query parameter parsing,
 * the following is possible:
 *
  ```js
    $httpBackend.whenRoute('GET', '/users/:id')
      .respond(function(method, url, data, headers, params) {
        return [200, MockUserList[Number(params.id)]];
      });

    $httpBackend.whenRoute('GET', '/users')
      .respond(function(method, url, data, headers, params) {
        var userList = angular.copy(MockUserList),
          defaultSort = 'lastName',
          count, pages, isPrevious, isNext;

        // paged api response '/v1/users?page=2'
        params.page = Number(params.page) || 1;

        // query for last names '/v1/users?q=Archer'
        if (params.q) {
          userList = $filter('filter')({lastName: params.q});
        }

        pages = Math.ceil(userList.length / pagingLength);
        isPrevious = params.page > 1;
        isNext = params.page < pages;

        return [200, {
          count:    userList.length,
          previous: isPrevious,
          next:     isNext,
          // sort field -> '/v1/users?sortBy=firstName'
          results:  $filter('orderBy')(userList, params.sortBy || defaultSort)
                      .splice((params.page - 1) * pagingLength, pagingLength)
        }];
      });
  ```
 */
angular.mock.$HttpBackendProvider = function() {
  this.$get = ['$rootScope', '$timeout', createHttpBackendMock];
};

/**
 * General factory function for $httpBackend mock.
 * Returns instance for unit testing (when no arguments specified):
 *   - passing through is disabled
 *   - auto flushing is disabled
 *
 * Returns instance for e2e testing (when `$delegate` and `$browser` specified):
 *   - passing through (delegating request to real backend) is enabled
 *   - auto flushing is enabled
 *
 * @param {Object=} $delegate Real $httpBackend instance (allow passing through if specified)
 * @param {Object=} $browser Auto-flushing enabled if specified
 * @return {Object} Instance of $httpBackend mock
 */
function createHttpBackendMock($rootScope, $timeout, $delegate, $browser) {
  var definitions = [],
      expectations = [],
      responses = [],
      responsesPush = angular.bind(responses, responses.push),
      copy = angular.copy;

  function createResponse(status, data, headers, statusText) {
    if (angular.isFunction(status)) return status;

    return function() {
      return angular.isNumber(status)
          ? [status, data, headers, statusText]
          : [200, status, data, headers];
    };
  }

  // TODO(vojta): change params to: method, url, data, headers, callback
  function $httpBackend(method, url, data, callback, headers, timeout, withCredentials, responseType, eventHandlers, uploadEventHandlers) {

    var xhr = new MockXhr(),
        expectation = expectations[0],
        wasExpected = false;

    xhr.$$events = eventHandlers;
    xhr.upload.$$events = uploadEventHandlers;

    function prettyPrint(data) {
      return (angular.isString(data) || angular.isFunction(data) || data instanceof RegExp)
          ? data
          : angular.toJson(data);
    }

    function wrapResponse(wrapped) {
      if (!$browser && timeout) {
        timeout.then ? timeout.then(handleTimeout) : $timeout(handleTimeout, timeout);
      }

      return handleResponse;

      function handleResponse() {
        var response = wrapped.response(method, url, data, headers, wrapped.params(url));
        xhr.$$respHeaders = response[2];
        callback(copy(response[0]), copy(response[1]), xhr.getAllResponseHeaders(),
                 copy(response[3] || ''));
      }

      function handleTimeout() {
        for (var i = 0, ii = responses.length; i < ii; i++) {
          if (responses[i] === handleResponse) {
            responses.splice(i, 1);
            callback(-1, undefined, '');
            break;
          }
        }
      }
    }

    if (expectation && expectation.match(method, url)) {
      if (!expectation.matchData(data)) {
        throw new Error('Expected ' + expectation + ' with different data\n' +
            'EXPECTED: ' + prettyPrint(expectation.data) + '\nGOT:      ' + data);
      }

      if (!expectation.matchHeaders(headers)) {
        throw new Error('Expected ' + expectation + ' with different headers\n' +
                        'EXPECTED: ' + prettyPrint(expectation.headers) + '\nGOT:      ' +
                        prettyPrint(headers));
      }

      expectations.shift();

      if (expectation.response) {
        responses.push(wrapResponse(expectation));
        return;
      }
      wasExpected = true;
    }

    var i = -1, definition;
    while ((definition = definitions[++i])) {
      if (definition.match(method, url, data, headers || {})) {
        if (definition.response) {
          // if $browser specified, we do auto flush all requests
          ($browser ? $browser.defer : responsesPush)(wrapResponse(definition));
        } else if (definition.passThrough) {
          $delegate(method, url, data, callback, headers, timeout, withCredentials, responseType, eventHandlers, uploadEventHandlers);
        } else throw new Error('No response defined !');
        return;
      }
    }
    throw wasExpected ?
        new Error('No response defined !') :
        new Error('Unexpected request: ' + method + ' ' + url + '\n' +
                  (expectation ? 'Expected ' + expectation : 'No more request expected'));
  }

  /**
   * @ngdoc method
   * @name $httpBackend#when
   * @description
   * Creates a new backend definition.
   *
   * @param {string} method HTTP method.
   * @param {string|RegExp|function(string)} url HTTP url or function that receives a url
   *   and returns true if the url matches the current definition.
   * @param {(string|RegExp|function(string))=} data HTTP request body or function that receives
   *   data string and returns true if the data is as expected.
   * @param {(Object|function(Object))=} headers HTTP headers or function that receives http header
   *   object and returns true if the headers match the current definition.
   * @param {(Array)=} keys Array of keys to assign to regex matches in request url described above.
   * @returns {requestHandler} Returns an object with `respond` method that controls how a matched
   *   request is handled. You can save this object for later use and invoke `respond` again in
   *   order to change how a matched request is handled.
   *
   *  - respond –
   *      ```js
   *      {function([status,] data[, headers, statusText])
   *      | function(function(method, url, data, headers, params)}
   *      ```
   *    – The respond method takes a set of static data to be returned or a function that can
   *    return an array containing response status (number), response data (Array|Object|string),
   *    response headers (Object), and the text for the status (string). The respond method returns
   *    the `requestHandler` object for possible overrides.
   */
  $httpBackend.when = function(method, url, data, headers, keys) {
    var definition = new MockHttpExpectation(method, url, data, headers, keys),
        chain = {
          respond: function(status, data, headers, statusText) {
            definition.passThrough = undefined;
            definition.response = createResponse(status, data, headers, statusText);
            return chain;
          }
        };

    if ($browser) {
      chain.passThrough = function() {
        definition.response = undefined;
        definition.passThrough = true;
        return chain;
      };
    }

    definitions.push(definition);
    return chain;
  };

  /**
   * @ngdoc method
   * @name $httpBackend#whenGET
   * @description
   * Creates a new backend definition for GET requests. For more info see `when()`.
   *
   * @param {string|RegExp|function(string)} url HTTP url or function that receives a url
   *   and returns true if the url matches the current definition.
   * @param {(Object|function(Object))=} headers HTTP headers.
   * @param {(Array)=} keys Array of keys to assign to regex matches in request url described above.
   * @returns {requestHandler} Returns an object with `respond` method that controls how a matched
   * request is handled. You can save this object for later use and invoke `respond` again in
   * order to change how a matched request is handled.
   */

  /**
   * @ngdoc method
   * @name $httpBackend#whenHEAD
   * @description
   * Creates a new backend definition for HEAD requests. For more info see `when()`.
   *
   * @param {string|RegExp|function(string)} url HTTP url or function that receives a url
   *   and returns true if the url matches the current definition.
   * @param {(Object|function(Object))=} headers HTTP headers.
   * @param {(Array)=} keys Array of keys to assign to regex matches in request url described above.
   * @returns {requestHandler} Returns an object with `respond` method that controls how a matched
   * request is handled. You can save this object for later use and invoke `respond` again in
   * order to change how a matched request is handled.
   */

  /**
   * @ngdoc method
   * @name $httpBackend#whenDELETE
   * @description
   * Creates a new backend definition for DELETE requests. For more info see `when()`.
   *
   * @param {string|RegExp|function(string)} url HTTP url or function that receives a url
   *   and returns true if the url matches the current definition.
   * @param {(Object|function(Object))=} headers HTTP headers.
   * @param {(Array)=} keys Array of keys to assign to regex matches in request url described above.
   * @returns {requestHandler} Returns an object with `respond` method that controls how a matched
   * request is handled. You can save this object for later use and invoke `respond` again in
   * order to change how a matched request is handled.
   */

  /**
   * @ngdoc method
   * @name $httpBackend#whenPOST
   * @description
   * Creates a new backend definition for POST requests. For more info see `when()`.
   *
   * @param {string|RegExp|function(string)} url HTTP url or function that receives a url
   *   and returns true if the url matches the current definition.
   * @param {(string|RegExp|function(string))=} data HTTP request body or function that receives
   *   data string and returns true if the data is as expected.
   * @param {(Object|function(Object))=} headers HTTP headers.
   * @param {(Array)=} keys Array of keys to assign to regex matches in request url described above.
   * @returns {requestHandler} Returns an object with `respond` method that controls how a matched
   * request is handled. You can save this object for later use and invoke `respond` again in
   * order to change how a matched request is handled.
   */

  /**
   * @ngdoc method
   * @name $httpBackend#whenPUT
   * @description
   * Creates a new backend definition for PUT requests.  For more info see `when()`.
   *
   * @param {string|RegExp|function(string)} url HTTP url or function that receives a url
   *   and returns true if the url matches the current definition.
   * @param {(string|RegExp|function(string))=} data HTTP request body or function that receives
   *   data string and returns true if the data is as expected.
   * @param {(Object|function(Object))=} headers HTTP headers.
   * @param {(Array)=} keys Array of keys to assign to regex matches in request url described above.
   * @returns {requestHandler} Returns an object with `respond` method that controls how a matched
   * request is handled. You can save this object for later use and invoke `respond` again in
   * order to change how a matched request is handled.
   */

  /**
   * @ngdoc method
   * @name $httpBackend#whenJSONP
   * @description
   * Creates a new backend definition for JSONP requests. For more info see `when()`.
   *
   * @param {string|RegExp|function(string)} url HTTP url or function that receives a url
   *   and returns true if the url matches the current definition.
   * @param {(Array)=} keys Array of keys to assign to regex matches in request url described above.
   * @returns {requestHandler} Returns an object with `respond` method that controls how a matched
   * request is handled. You can save this object for later use and invoke `respond` again in
   * order to change how a matched request is handled.
   */
  createShortMethods('when');

  /**
   * @ngdoc method
   * @name $httpBackend#whenRoute
   * @description
   * Creates a new backend definition that compares only with the requested route.
   *
   * @param {string} method HTTP method.
   * @param {string} url HTTP url string that supports colon param matching.
   * @returns {requestHandler} Returns an object with `respond` method that controls how a matched
   * request is handled. You can save this object for later use and invoke `respond` again in
   * order to change how a matched request is handled. See #when for more info.
   */
  $httpBackend.whenRoute = function(method, url) {
    var pathObj = parseRoute(url);
    return $httpBackend.when(method, pathObj.regexp, undefined, undefined, pathObj.keys);
  };

  function parseRoute(url) {
    var ret = {
      regexp: url
    },
    keys = ret.keys = [];

    if (!url || !angular.isString(url)) return ret;

    url = url
      .replace(/([().])/g, '\\$1')
      .replace(/(\/)?:(\w+)([\?\*])?/g, function(_, slash, key, option) {
        var optional = option === '?' ? option : null;
        var star = option === '*' ? option : null;
        keys.push({ name: key, optional: !!optional });
        slash = slash || '';
        return ''
          + (optional ? '' : slash)
          + '(?:'
          + (optional ? slash : '')
          + (star && '(.+?)' || '([^/]+)')
          + (optional || '')
          + ')'
          + (optional || '');
      })
      .replace(/([\/$\*])/g, '\\$1');

    ret.regexp = new RegExp('^' + url, 'i');
    return ret;
  }

  /**
   * @ngdoc method
   * @name $httpBackend#expect
   * @description
   * Creates a new request expectation.
   *
   * @param {string} method HTTP method.
   * @param {string|RegExp|function(string)} url HTTP url or function that receives a url
   *   and returns true if the url matches the current definition.
   * @param {(string|RegExp|function(string)|Object)=} data HTTP request body or function that
   *  receives data string and returns true if the data is as expected, or Object if request body
   *  is in JSON format.
   * @param {(Object|function(Object))=} headers HTTP headers or function that receives http header
   *   object and returns true if the headers match the current expectation.
   * @param {(Array)=} keys Array of keys to assign to regex matches in request url described above.
   * @returns {requestHandler} Returns an object with `respond` method that controls how a matched
   *  request is handled. You can save this object for later use and invoke `respond` again in
   *  order to change how a matched request is handled.
   *
   *  - respond –
   *    ```
   *    { function([status,] data[, headers, statusText])
   *    | function(function(method, url, data, headers, params)}
   *    ```
   *    – The respond method takes a set of static data to be returned or a function that can
   *    return an array containing response status (number), response data (Array|Object|string),
   *    response headers (Object), and the text for the status (string). The respond method returns
   *    the `requestHandler` object for possible overrides.
   */
  $httpBackend.expect = function(method, url, data, headers, keys) {
    var expectation = new MockHttpExpectation(method, url, data, headers, keys),
        chain = {
          respond: function(status, data, headers, statusText) {
            expectation.response = createResponse(status, data, headers, statusText);
            return chain;
          }
        };

    expectations.push(expectation);
    return chain;
  };

  /**
   * @ngdoc method
   * @name $httpBackend#expectGET
   * @description
   * Creates a new request expectation for GET requests. For more info see `expect()`.
   *
   * @param {string|RegExp|function(string)} url HTTP url or function that receives a url
   *   and returns true if the url matches the current definition.
   * @param {Object=} headers HTTP headers.
   * @param {(Array)=} keys Array of keys to assign to regex matches in request url described above.
   * @returns {requestHandler} Returns an object with `respond` method that controls how a matched
   * request is handled. You can save this object for later use and invoke `respond` again in
   * order to change how a matched request is handled. See #expect for more info.
   */

  /**
   * @ngdoc method
   * @name $httpBackend#expectHEAD
   * @description
   * Creates a new request expectation for HEAD requests. For more info see `expect()`.
   *
   * @param {string|RegExp|function(string)} url HTTP url or function that receives a url
   *   and returns true if the url matches the current definition.
   * @param {Object=} headers HTTP headers.
   * @param {(Array)=} keys Array of keys to assign to regex matches in request url described above.
   * @returns {requestHandler} Returns an object with `respond` method that controls how a matched
   *   request is handled. You can save this object for later use and invoke `respond` again in
   *   order to change how a matched request is handled.
   */

  /**
   * @ngdoc method
   * @name $httpBackend#expectDELETE
   * @description
   * Creates a new request expectation for DELETE requests. For more info see `expect()`.
   *
   * @param {string|RegExp|function(string)} url HTTP url or function that receives a url
   *   and returns true if the url matches the current definition.
   * @param {Object=} headers HTTP headers.
   * @param {(Array)=} keys Array of keys to assign to regex matches in request url described above.
   * @returns {requestHandler} Returns an object with `respond` method that controls how a matched
   *   request is handled. You can save this object for later use and invoke `respond` again in
   *   order to change how a matched request is handled.
   */

  /**
   * @ngdoc method
   * @name $httpBackend#expectPOST
   * @description
   * Creates a new request expectation for POST requests. For more info see `expect()`.
   *
   * @param {string|RegExp|function(string)} url HTTP url or function that receives a url
   *   and returns true if the url matches the current definition.
   * @param {(string|RegExp|function(string)|Object)=} data HTTP request body or function that
   *  receives data string and returns true if the data is as expected, or Object if request body
   *  is in JSON format.
   * @param {Object=} headers HTTP headers.
   * @param {(Array)=} keys Array of keys to assign to regex matches in request url described above.
   * @returns {requestHandler} Returns an object with `respond` method that controls how a matched
   *   request is handled. You can save this object for later use and invoke `respond` again in
   *   order to change how a matched request is handled.
   */

  /**
   * @ngdoc method
   * @name $httpBackend#expectPUT
   * @description
   * Creates a new request expectation for PUT requests. For more info see `expect()`.
   *
   * @param {string|RegExp|function(string)} url HTTP url or function that receives a url
   *   and returns true if the url matches the current definition.
   * @param {(string|RegExp|function(string)|Object)=} data HTTP request body or function that
   *  receives data string and returns true if the data is as expected, or Object if request body
   *  is in JSON format.
   * @param {Object=} headers HTTP headers.
   * @param {(Array)=} keys Array of keys to assign to regex matches in request url described above.
   * @returns {requestHandler} Returns an object with `respond` method that controls how a matched
   *   request is handled. You can save this object for later use and invoke `respond` again in
   *   order to change how a matched request is handled.
   */

  /**
   * @ngdoc method
   * @name $httpBackend#expectPATCH
   * @description
   * Creates a new request expectation for PATCH requests. For more info see `expect()`.
   *
   * @param {string|RegExp|function(string)} url HTTP url or function that receives a url
   *   and returns true if the url matches the current definition.
   * @param {(string|RegExp|function(string)|Object)=} data HTTP request body or function that
   *  receives data string and returns true if the data is as expected, or Object if request body
   *  is in JSON format.
   * @param {Object=} headers HTTP headers.
   * @param {(Array)=} keys Array of keys to assign to regex matches in request url described above.
   * @returns {requestHandler} Returns an object with `respond` method that controls how a matched
   *   request is handled. You can save this object for later use and invoke `respond` again in
   *   order to change how a matched request is handled.
   */

  /**
   * @ngdoc method
   * @name $httpBackend#expectJSONP
   * @description
   * Creates a new request expectation for JSONP requests. For more info see `expect()`.
   *
   * @param {string|RegExp|function(string)} url HTTP url or function that receives an url
   *   and returns true if the url matches the current definition.
   * @param {(Array)=} keys Array of keys to assign to regex matches in request url described above.
   * @returns {requestHandler} Returns an object with `respond` method that controls how a matched
   *   request is handled. You can save this object for later use and invoke `respond` again in
   *   order to change how a matched request is handled.
   */
  createShortMethods('expect');

  /**
   * @ngdoc method
   * @name $httpBackend#expectRoute
   * @description
   * Creates a new request expectation that compares only with the requested route.
   *
   * @param {string} method HTTP method.
   * @param {string} url HTTP url string that supports colon param matching.
   * @returns {requestHandler} Returns an object with `respond` method that controls how a matched
   * request is handled. You can save this object for later use and invoke `respond` again in
   * order to change how a matched request is handled. See #expect for more info.
   */
  $httpBackend.expectRoute = function(method, url) {
    var pathObj = parseRoute(url);
    return $httpBackend.expect(method, pathObj.regexp, undefined, undefined, pathObj.keys);
  };


  /**
   * @ngdoc method
   * @name $httpBackend#flush
   * @description
   * Flushes all pending requests using the trained responses.
   *
   * @param {number=} count Number of responses to flush (in the order they arrived). If undefined,
   *   all pending requests will be flushed. If there are no pending requests when the flush method
   *   is called an exception is thrown (as this typically a sign of programming error).
   */
  $httpBackend.flush = function(count, digest) {
    if (digest !== false) $rootScope.$digest();
    if (!responses.length) throw new Error('No pending request to flush !');

    if (angular.isDefined(count) && count !== null) {
      while (count--) {
        if (!responses.length) throw new Error('No more pending request to flush !');
        responses.shift()();
      }
    } else {
      while (responses.length) {
        responses.shift()();
      }
    }
    $httpBackend.verifyNoOutstandingExpectation(digest);
  };


  /**
   * @ngdoc method
   * @name $httpBackend#verifyNoOutstandingExpectation
   * @description
   * Verifies that all of the requests defined via the `expect` api were made. If any of the
   * requests were not made, verifyNoOutstandingExpectation throws an exception.
   *
   * Typically, you would call this method following each test case that asserts requests using an
   * "afterEach" clause.
   *
   * ```js
   *   afterEach($httpBackend.verifyNoOutstandingExpectation);
   * ```
   */
  $httpBackend.verifyNoOutstandingExpectation = function(digest) {
    if (digest !== false) $rootScope.$digest();
    if (expectations.length) {
      throw new Error('Unsatisfied requests: ' + expectations.join(', '));
    }
  };


  /**
   * @ngdoc method
   * @name $httpBackend#verifyNoOutstandingRequest
   * @description
   * Verifies that there are no outstanding requests that need to be flushed.
   *
   * Typically, you would call this method following each test case that asserts requests using an
   * "afterEach" clause.
   *
   * ```js
   *   afterEach($httpBackend.verifyNoOutstandingRequest);
   * ```
   */
  $httpBackend.verifyNoOutstandingRequest = function() {
    if (responses.length) {
      throw new Error('Unflushed requests: ' + responses.length);
    }
  };


  /**
   * @ngdoc method
   * @name $httpBackend#resetExpectations
   * @description
   * Resets all request expectations, but preserves all backend definitions. Typically, you would
   * call resetExpectations during a multiple-phase test when you want to reuse the same instance of
   * $httpBackend mock.
   */
  $httpBackend.resetExpectations = function() {
    expectations.length = 0;
    responses.length = 0;
  };

  return $httpBackend;


  function createShortMethods(prefix) {
    angular.forEach(['GET', 'DELETE', 'JSONP', 'HEAD'], function(method) {
     $httpBackend[prefix + method] = function(url, headers, keys) {
       return $httpBackend[prefix](method, url, undefined, headers, keys);
     };
    });

    angular.forEach(['PUT', 'POST', 'PATCH'], function(method) {
      $httpBackend[prefix + method] = function(url, data, headers, keys) {
        return $httpBackend[prefix](method, url, data, headers, keys);
      };
    });
  }
}

function MockHttpExpectation(method, url, data, headers, keys) {

  function getUrlParams(u) {
    var params = u.slice(u.indexOf('?') + 1).split('&');
    return params.sort();
  }

  function compareUrl(u) {
    return (url.slice(0, url.indexOf('?')) == u.slice(0, u.indexOf('?')) && getUrlParams(url).join() == getUrlParams(u).join());
  }

  this.data = data;
  this.headers = headers;

  this.match = function(m, u, d, h) {
    if (method != m) return false;
    if (!this.matchUrl(u)) return false;
    if (angular.isDefined(d) && !this.matchData(d)) return false;
    if (angular.isDefined(h) && !this.matchHeaders(h)) return false;
    return true;
  };

  this.matchUrl = function(u) {
    if (!url) return true;
    if (angular.isFunction(url.test)) return url.test(u);
    if (angular.isFunction(url)) return url(u);
    return (url == u || compareUrl(u));
  };

  this.matchHeaders = function(h) {
    if (angular.isUndefined(headers)) return true;
    if (angular.isFunction(headers)) return headers(h);
    return angular.equals(headers, h);
  };

  this.matchData = function(d) {
    if (angular.isUndefined(data)) return true;
    if (data && angular.isFunction(data.test)) return data.test(d);
    if (data && angular.isFunction(data)) return data(d);
    if (data && !angular.isString(data)) {
      return angular.equals(angular.fromJson(angular.toJson(data)), angular.fromJson(d));
    }
    return data == d;
  };

  this.toString = function() {
    return method + ' ' + url;
  };

  this.params = function(u) {
    return angular.extend(parseQuery(), pathParams());

    function pathParams() {
      var keyObj = {};
      if (!url || !angular.isFunction(url.test) || !keys || keys.length === 0) return keyObj;

      var m = url.exec(u);
      if (!m) return keyObj;
      for (var i = 1, len = m.length; i < len; ++i) {
        var key = keys[i - 1];
        var val = m[i];
        if (key && val) {
          keyObj[key.name || key] = val;
        }
      }

      return keyObj;
    }

    function parseQuery() {
      var obj = {}, key_value, key,
          queryStr = u.indexOf('?') > -1
          ? u.substring(u.indexOf('?') + 1)
          : "";

      angular.forEach(queryStr.split('&'), function(keyValue) {
        if (keyValue) {
          key_value = keyValue.replace(/\+/g,'%20').split('=');
          key = tryDecodeURIComponent(key_value[0]);
          if (angular.isDefined(key)) {
            var val = angular.isDefined(key_value[1]) ? tryDecodeURIComponent(key_value[1]) : true;
            if (!hasOwnProperty.call(obj, key)) {
              obj[key] = val;
            } else if (angular.isArray(obj[key])) {
              obj[key].push(val);
            } else {
              obj[key] = [obj[key],val];
            }
          }
        }
      });
      return obj;
    }
    function tryDecodeURIComponent(value) {
      try {
        return decodeURIComponent(value);
      } catch (e) {
        // Ignore any invalid uri component
      }
    }
  };
}

function createMockXhr() {
  return new MockXhr();
}

function MockXhr() {

  // hack for testing $http, $httpBackend
  MockXhr.$$lastInstance = this;

  this.open = function(method, url, async) {
    this.$$method = method;
    this.$$url = url;
    this.$$async = async;
    this.$$reqHeaders = {};
    this.$$respHeaders = {};
  };

  this.send = function(data) {
    this.$$data = data;
  };

  this.setRequestHeader = function(key, value) {
    this.$$reqHeaders[key] = value;
  };

  this.getResponseHeader = function(name) {
    // the lookup must be case insensitive,
    // that's why we try two quick lookups first and full scan last
    var header = this.$$respHeaders[name];
    if (header) return header;

    name = angular.lowercase(name);
    header = this.$$respHeaders[name];
    if (header) return header;

    header = undefined;
    angular.forEach(this.$$respHeaders, function(headerVal, headerName) {
      if (!header && angular.lowercase(headerName) == name) header = headerVal;
    });
    return header;
  };

  this.getAllResponseHeaders = function() {
    var lines = [];

    angular.forEach(this.$$respHeaders, function(value, key) {
      lines.push(key + ': ' + value);
    });
    return lines.join('\n');
  };

  this.abort = angular.noop;

  // This section simulates the events on a real XHR object (and the upload object)
  // When we are testing $httpBackend (inside the angular project) we make partial use of this
  // but store the events directly ourselves on `$$events`, instead of going through the `addEventListener`
  this.$$events = {};
  this.addEventListener = function(name, listener) {
    if (angular.isUndefined(this.$$events[name])) this.$$events[name] = [];
    this.$$events[name].push(listener);
  };

  this.upload = {
    $$events: {},
    addEventListener: this.addEventListener
  };
}


/**
 * @ngdoc service
 * @name $timeout
 * @description
 *
 * This service is just a simple decorator for {@link ng.$timeout $timeout} service
 * that adds a "flush" and "verifyNoPendingTasks" methods.
 */

angular.mock.$TimeoutDecorator = ['$delegate', '$browser', function($delegate, $browser) {

  /**
   * @ngdoc method
   * @name $timeout#flush
   * @description
   *
   * Flushes the queue of pending tasks.
   *
   * @param {number=} delay maximum timeout amount to flush up until
   */
  $delegate.flush = function(delay) {
    $browser.defer.flush(delay);
  };

  /**
   * @ngdoc method
   * @name $timeout#verifyNoPendingTasks
   * @description
   *
   * Verifies that there are no pending tasks that need to be flushed.
   */
  $delegate.verifyNoPendingTasks = function() {
    if ($browser.deferredFns.length) {
      throw new Error('Deferred tasks to flush (' + $browser.deferredFns.length + '): ' +
          formatPendingTasksAsString($browser.deferredFns));
    }
  };

  function formatPendingTasksAsString(tasks) {
    var result = [];
    angular.forEach(tasks, function(task) {
      result.push('{id: ' + task.id + ', ' + 'time: ' + task.time + '}');
    });

    return result.join(', ');
  }

  return $delegate;
}];

angular.mock.$RAFDecorator = ['$delegate', function($delegate) {
  var rafFn = function(fn) {
    var index = rafFn.queue.length;
    rafFn.queue.push(fn);
    return function() {
      rafFn.queue.splice(index, 1);
    };
  };

  rafFn.queue = [];
  rafFn.supported = $delegate.supported;

  rafFn.flush = function() {
    if (rafFn.queue.length === 0) {
      throw new Error('No rAF callbacks present');
    }

    var length = rafFn.queue.length;
    for (var i = 0; i < length; i++) {
      rafFn.queue[i]();
    }

    rafFn.queue = rafFn.queue.slice(i);
  };

  return rafFn;
}];

/**
 *
 */
var originalRootElement;
angular.mock.$RootElementProvider = function() {
  this.$get = ['$injector', function($injector) {
    originalRootElement = angular.element('<div ng-app></div>').data('$injector', $injector);
    return originalRootElement;
  }];
};

/**
 * @ngdoc service
 * @name $controller
 * @description
 * A decorator for {@link ng.$controller} with additional `bindings` parameter, useful when testing
 * controllers of directives that use {@link $compile#-bindtocontroller- `bindToController`}.
 *
 *
 * ## Example
 *
 * ```js
 *
 * // Directive definition ...
 *
 * myMod.directive('myDirective', {
 *   controller: 'MyDirectiveController',
 *   bindToController: {
 *     name: '@'
 *   }
 * });
 *
 *
 * // Controller definition ...
 *
 * myMod.controller('MyDirectiveController', ['$log', function($log) {
 *   $log.info(this.name);
 * }]);
 *
 *
 * // In a test ...
 *
 * describe('myDirectiveController', function() {
 *   it('should write the bound name to the log', inject(function($controller, $log) {
 *     var ctrl = $controller('MyDirectiveController', { /* no locals &#42;/ }, { name: 'Clark Kent' });
 *     expect(ctrl.name).toEqual('Clark Kent');
 *     expect($log.info.logs).toEqual(['Clark Kent']);
 *   }));
 * });
 *
 * ```
 *
 * @param {Function|string} constructor If called with a function then it's considered to be the
 *    controller constructor function. Otherwise it's considered to be a string which is used
 *    to retrieve the controller constructor using the following steps:
 *
 *    * check if a controller with given name is registered via `$controllerProvider`
 *    * check if evaluating the string on the current scope returns a constructor
 *    * if $controllerProvider#allowGlobals, check `window[constructor]` on the global
 *      `window` object (not recommended)
 *
 *    The string can use the `controller as property` syntax, where the controller instance is published
 *    as the specified property on the `scope`; the `scope` must be injected into `locals` param for this
 *    to work correctly.
 *
 * @param {Object} locals Injection locals for Controller.
 * @param {Object=} bindings Properties to add to the controller before invoking the constructor. This is used
 *                           to simulate the `bindToController` feature and simplify certain kinds of tests.
 * @return {Object} Instance of given controller.
 */
angular.mock.$ControllerDecorator = ['$delegate', function($delegate) {
  return function(expression, locals, later, ident) {
    if (later && typeof later === 'object') {
      var instantiate = $delegate(expression, locals, true, ident);
      angular.extend(instantiate.instance, later);

      var instance = instantiate();
      if (instance !== instantiate.instance) {
        angular.extend(instance, later);
      }

      return instance;
    }
    return $delegate(expression, locals, later, ident);
  };
}];

/**
 * @ngdoc service
 * @name $componentController
 * @description
 * A service that can be used to create instances of component controllers.
 * <div class="alert alert-info">
 * Be aware that the controller will be instantiated and attached to the scope as specified in
 * the component definition object. If you do not provide a `$scope` object in the `locals` param
 * then the helper will create a new isolated scope as a child of `$rootScope`.
 * </div>
 * @param {string} componentName the name of the component whose controller we want to instantiate
 * @param {Object} locals Injection locals for Controller.
 * @param {Object=} bindings Properties to add to the controller before invoking the constructor. This is used
 *                           to simulate the `bindToController` feature and simplify certain kinds of tests.
 * @param {string=} ident Override the property name to use when attaching the controller to the scope.
 * @return {Object} Instance of requested controller.
 */
angular.mock.$ComponentControllerProvider = ['$compileProvider', function($compileProvider) {
  this.$get = ['$controller','$injector', '$rootScope', function($controller, $injector, $rootScope) {
    return function $componentController(componentName, locals, bindings, ident) {
      // get all directives associated to the component name
      var directives = $injector.get(componentName + 'Directive');
      // look for those directives that are components
      var candidateDirectives = directives.filter(function(directiveInfo) {
        // components have controller, controllerAs and restrict:'E'
        return directiveInfo.controller && directiveInfo.controllerAs && directiveInfo.restrict === 'E';
      });
      // check if valid directives found
      if (candidateDirectives.length === 0) {
        throw new Error('No component found');
      }
      if (candidateDirectives.length > 1) {
        throw new Error('Too many components found');
      }
      // get the info of the component
      var directiveInfo = candidateDirectives[0];
      // create a scope if needed
      locals = locals || {};
      locals.$scope = locals.$scope || $rootScope.$new(true);
      return $controller(directiveInfo.controller, locals, bindings, ident || directiveInfo.controllerAs);
    };
  }];
}];


/**
 * @ngdoc module
 * @name ngMock
 * @packageName angular-mocks
 * @description
 *
 * # ngMock
 *
 * The `ngMock` module provides support to inject and mock Angular services into unit tests.
 * In addition, ngMock also extends various core ng services such that they can be
 * inspected and controlled in a synchronous manner within test code.
 *
 *
 * <div doc-module-components="ngMock"></div>
 *
 * @installation
 *
 *  First, download the file:
 *  * [Google CDN](https://developers.google.com/speed/libraries/devguide#angularjs) e.g.
 *    `"//ajax.googleapis.com/ajax/libs/angularjs/X.Y.Z/angular-mocks.js"`
 *  * [NPM](https://www.npmjs.com/) e.g. `npm install angular-mocks@X.Y.Z`
 *  * [Bower](http://bower.io) e.g. `bower install angular-mocks#X.Y.Z`
 *  * [code.angularjs.org](https://code.angularjs.org/) (discouraged for production use)  e.g.
 *    `"//code.angularjs.org/X.Y.Z/angular-mocks.js"`
 *
 * where X.Y.Z is the AngularJS version you are running.
 *
 * Then, configure your test runner to load `angular-mocks.js` after `angular.js`.
 * This example uses <a href="http://karma-runner.github.io/">Karma</a>:
 *
 * ```
 * config.set({
 *   files: [
 *     'build/angular.js', // and other module files you need
 *     'build/angular-mocks.js',
 *     '<path/to/application/files>',
 *     '<path/to/spec/files>'
 *   ]
 * });
 * ```
 *
 * Including the `angular-mocks.js` file automatically adds the `ngMock` module, so your tests
 *  are ready to go!
 */
angular.module('ngMock', ['ng']).provider({
  $browser: angular.mock.$BrowserProvider,
  $exceptionHandler: angular.mock.$ExceptionHandlerProvider,
  $log: angular.mock.$LogProvider,
  $interval: angular.mock.$IntervalProvider,
  $httpBackend: angular.mock.$HttpBackendProvider,
  $rootElement: angular.mock.$RootElementProvider,
  $componentController: angular.mock.$ComponentControllerProvider
}).config(['$provide', function($provide) {
  $provide.decorator('$timeout', angular.mock.$TimeoutDecorator);
  $provide.decorator('$$rAF', angular.mock.$RAFDecorator);
  $provide.decorator('$rootScope', angular.mock.$RootScopeDecorator);
  $provide.decorator('$controller', angular.mock.$ControllerDecorator);
}]);

/**
 * @ngdoc module
 * @name ngMockE2E
 * @module ngMockE2E
 * @packageName angular-mocks
 * @description
 *
 * The `ngMockE2E` is an angular module which contains mocks suitable for end-to-end testing.
 * Currently there is only one mock present in this module -
 * the {@link ngMockE2E.$httpBackend e2e $httpBackend} mock.
 */
angular.module('ngMockE2E', ['ng']).config(['$provide', function($provide) {
  $provide.value('$httpBackend', angular.injector(['ng']).get('$httpBackend'));
  $provide.decorator('$httpBackend', angular.mock.e2e.$httpBackendDecorator);
}]);

/**
 * @ngdoc service
 * @name $httpBackend
 * @module ngMockE2E
 * @description
 * Fake HTTP backend implementation suitable for end-to-end testing or backend-less development of
 * applications that use the {@link ng.$http $http service}.
 *
 * <div class="alert alert-info">
 * **Note**: For fake http backend implementation suitable for unit testing please see
 * {@link ngMock.$httpBackend unit-testing $httpBackend mock}.
 * </div>
 *
 * This implementation can be used to respond with static or dynamic responses via the `when` api
 * and its shortcuts (`whenGET`, `whenPOST`, etc) and optionally pass through requests to the
 * real $httpBackend for specific requests (e.g. to interact with certain remote apis or to fetch
 * templates from a webserver).
 *
 * As opposed to unit-testing, in an end-to-end testing scenario or in scenario when an application
 * is being developed with the real backend api replaced with a mock, it is often desirable for
 * certain category of requests to bypass the mock and issue a real http request (e.g. to fetch
 * templates or static files from the webserver). To configure the backend with this behavior
 * use the `passThrough` request handler of `when` instead of `respond`.
 *
 * Additionally, we don't want to manually have to flush mocked out requests like we do during unit
 * testing. For this reason the e2e $httpBackend flushes mocked out requests
 * automatically, closely simulating the behavior of the XMLHttpRequest object.
 *
 * To setup the application to run with this http backend, you have to create a module that depends
 * on the `ngMockE2E` and your application modules and defines the fake backend:
 *
 * ```js
 *   var myAppDev = angular.module('myAppDev', ['myApp', 'ngMockE2E']);
 *   myAppDev.run(function($httpBackend) {
 *     var phones = [{name: 'phone1'}, {name: 'phone2'}];
 *
 *     // returns the current list of phones
 *     $httpBackend.whenGET('/phones').respond(phones);
 *
 *     // adds a new phone to the phones array
 *     $httpBackend.whenPOST('/phones').respond(function(method, url, data) {
 *       var phone = angular.fromJson(data);
 *       phones.push(phone);
 *       return [200, phone, {}];
 *     });
 *     $httpBackend.whenGET(/^\/templates\//).passThrough(); // Requests for templare are handled by the real server
 *     //...
 *   });
 * ```
 *
 * Afterwards, bootstrap your app with this new module.
 *
 * ## Example
 * <example name="httpbackend-e2e-testing" module="myAppE2E" deps="angular-mocks.js">
 * <file name="app.js">
 *   var myApp = angular.module('myApp', []);
 *
 *   myApp.controller('main', function($http) {
 *     var ctrl = this;
 *
 *     ctrl.phones = [];
 *     ctrl.newPhone = {
 *       name: ''
 *     };
 *
 *     ctrl.getPhones = function() {
 *       $http.get('/phones').then(function(response) {
 *         ctrl.phones = response.data;
 *       });
 *     };
 *
 *     ctrl.addPhone = function(phone) {
 *       $http.post('/phones', phone).then(function() {
 *         ctrl.newPhone = {name: ''};
 *         return ctrl.getPhones();
 *       });
 *     };
 *
 *     ctrl.getPhones();
 *   });
 * </file>
 * <file name="e2e.js">
 *   var myAppDev = angular.module('myAppE2E', ['myApp', 'ngMockE2E']);
 *
 *   myAppDev.run(function($httpBackend) {
 *     var phones = [{name: 'phone1'}, {name: 'phone2'}];
 *
 *     // returns the current list of phones
 *     $httpBackend.whenGET('/phones').respond(phones);
 *
 *     // adds a new phone to the phones array
 *     $httpBackend.whenPOST('/phones').respond(function(method, url, data) {
 *       var phone = angular.fromJson(data);
 *       phones.push(phone);
 *       return [200, phone, {}];
 *     });
 *   });
 * </file>
 * <file name="index.html">
 *   <div ng-controller="main as $ctrl">
 *   <form name="newPhoneForm" ng-submit="$ctrl.addPhone($ctrl.newPhone)">
 *     <input type="text" ng-model="$ctrl.newPhone.name">
 *     <input type="submit" value="Add Phone">
 *   </form>
 *   <h1>Phones</h1>
 *   <ul>
 *     <li ng-repeat="phone in $ctrl.phones">{{phone.name}}</li>
 *   </ul>
 *   </div>
 * </file>
 * </example>
 *
 *
 */

/**
 * @ngdoc method
 * @name $httpBackend#when
 * @module ngMockE2E
 * @description
 * Creates a new backend definition.
 *
 * @param {string} method HTTP method.
 * @param {string|RegExp|function(string)} url HTTP url or function that receives a url
 *   and returns true if the url matches the current definition.
 * @param {(string|RegExp)=} data HTTP request body.
 * @param {(Object|function(Object))=} headers HTTP headers or function that receives http header
 *   object and returns true if the headers match the current definition.
 * @param {(Array)=} keys Array of keys to assign to regex matches in request url described on
 *   {@link ngMock.$httpBackend $httpBackend mock}.
 * @returns {requestHandler} Returns an object with `respond` and `passThrough` methods that
 *   control how a matched request is handled. You can save this object for later use and invoke
 *   `respond` or `passThrough` again in order to change how a matched request is handled.
 *
 *  - respond –
 *    ```
 *    { function([status,] data[, headers, statusText])
 *    | function(function(method, url, data, headers, params)}
 *    ```
 *    – The respond method takes a set of static data to be returned or a function that can return
 *    an array containing response status (number), response data (Array|Object|string), response
 *    headers (Object), and the text for the status (string).
 *  - passThrough – `{function()}` – Any request matching a backend definition with
 *    `passThrough` handler will be passed through to the real backend (an XHR request will be made
 *    to the server.)
 *  - Both methods return the `requestHandler` object for possible overrides.
 */

/**
 * @ngdoc method
 * @name $httpBackend#whenGET
 * @module ngMockE2E
 * @description
 * Creates a new backend definition for GET requests. For more info see `when()`.
 *
 * @param {string|RegExp|function(string)} url HTTP url or function that receives a url
 *   and returns true if the url matches the current definition.
 * @param {(Object|function(Object))=} headers HTTP headers.
 * @param {(Array)=} keys Array of keys to assign to regex matches in request url described on
 *   {@link ngMock.$httpBackend $httpBackend mock}.
 * @returns {requestHandler} Returns an object with `respond` and `passThrough` methods that
 *   control how a matched request is handled. You can save this object for later use and invoke
 *   `respond` or `passThrough` again in order to change how a matched request is handled.
 */

/**
 * @ngdoc method
 * @name $httpBackend#whenHEAD
 * @module ngMockE2E
 * @description
 * Creates a new backend definition for HEAD requests. For more info see `when()`.
 *
 * @param {string|RegExp|function(string)} url HTTP url or function that receives a url
 *   and returns true if the url matches the current definition.
 * @param {(Object|function(Object))=} headers HTTP headers.
 * @param {(Array)=} keys Array of keys to assign to regex matches in request url described on
 *   {@link ngMock.$httpBackend $httpBackend mock}.
 * @returns {requestHandler} Returns an object with `respond` and `passThrough` methods that
 *   control how a matched request is handled. You can save this object for later use and invoke
 *   `respond` or `passThrough` again in order to change how a matched request is handled.
 */

/**
 * @ngdoc method
 * @name $httpBackend#whenDELETE
 * @module ngMockE2E
 * @description
 * Creates a new backend definition for DELETE requests. For more info see `when()`.
 *
 * @param {string|RegExp|function(string)} url HTTP url or function that receives a url
 *   and returns true if the url matches the current definition.
 * @param {(Object|function(Object))=} headers HTTP headers.
 * @param {(Array)=} keys Array of keys to assign to regex matches in request url described on
 *   {@link ngMock.$httpBackend $httpBackend mock}.
 * @returns {requestHandler} Returns an object with `respond` and `passThrough` methods that
 *   control how a matched request is handled. You can save this object for later use and invoke
 *   `respond` or `passThrough` again in order to change how a matched request is handled.
 */

/**
 * @ngdoc method
 * @name $httpBackend#whenPOST
 * @module ngMockE2E
 * @description
 * Creates a new backend definition for POST requests. For more info see `when()`.
 *
 * @param {string|RegExp|function(string)} url HTTP url or function that receives a url
 *   and returns true if the url matches the current definition.
 * @param {(string|RegExp)=} data HTTP request body.
 * @param {(Object|function(Object))=} headers HTTP headers.
 * @param {(Array)=} keys Array of keys to assign to regex matches in request url described on
 *   {@link ngMock.$httpBackend $httpBackend mock}.
 * @returns {requestHandler} Returns an object with `respond` and `passThrough` methods that
 *   control how a matched request is handled. You can save this object for later use and invoke
 *   `respond` or `passThrough` again in order to change how a matched request is handled.
 */

/**
 * @ngdoc method
 * @name $httpBackend#whenPUT
 * @module ngMockE2E
 * @description
 * Creates a new backend definition for PUT requests.  For more info see `when()`.
 *
 * @param {string|RegExp|function(string)} url HTTP url or function that receives a url
 *   and returns true if the url matches the current definition.
 * @param {(string|RegExp)=} data HTTP request body.
 * @param {(Object|function(Object))=} headers HTTP headers.
 * @param {(Array)=} keys Array of keys to assign to regex matches in request url described on
 *   {@link ngMock.$httpBackend $httpBackend mock}.
 * @returns {requestHandler} Returns an object with `respond` and `passThrough` methods that
 *   control how a matched request is handled. You can save this object for later use and invoke
 *   `respond` or `passThrough` again in order to change how a matched request is handled.
 */

/**
 * @ngdoc method
 * @name $httpBackend#whenPATCH
 * @module ngMockE2E
 * @description
 * Creates a new backend definition for PATCH requests.  For more info see `when()`.
 *
 * @param {string|RegExp|function(string)} url HTTP url or function that receives a url
 *   and returns true if the url matches the current definition.
 * @param {(string|RegExp)=} data HTTP request body.
 * @param {(Object|function(Object))=} headers HTTP headers.
 * @param {(Array)=} keys Array of keys to assign to regex matches in request url described on
 *   {@link ngMock.$httpBackend $httpBackend mock}.
 * @returns {requestHandler} Returns an object with `respond` and `passThrough` methods that
 *   control how a matched request is handled. You can save this object for later use and invoke
 *   `respond` or `passThrough` again in order to change how a matched request is handled.
 */

/**
 * @ngdoc method
 * @name $httpBackend#whenJSONP
 * @module ngMockE2E
 * @description
 * Creates a new backend definition for JSONP requests. For more info see `when()`.
 *
 * @param {string|RegExp|function(string)} url HTTP url or function that receives a url
 *   and returns true if the url matches the current definition.
 * @param {(Array)=} keys Array of keys to assign to regex matches in request url described on
 *   {@link ngMock.$httpBackend $httpBackend mock}.
 * @returns {requestHandler} Returns an object with `respond` and `passThrough` methods that
 *   control how a matched request is handled. You can save this object for later use and invoke
 *   `respond` or `passThrough` again in order to change how a matched request is handled.
 */
/**
 * @ngdoc method
 * @name $httpBackend#whenRoute
 * @module ngMockE2E
 * @description
 * Creates a new backend definition that compares only with the requested route.
 *
 * @param {string} method HTTP method.
 * @param {string} url HTTP url string that supports colon param matching.
 * @returns {requestHandler} Returns an object with `respond` and `passThrough` methods that
 *   control how a matched request is handled. You can save this object for later use and invoke
 *   `respond` or `passThrough` again in order to change how a matched request is handled.
 */
angular.mock.e2e = {};
angular.mock.e2e.$httpBackendDecorator =
  ['$rootScope', '$timeout', '$delegate', '$browser', createHttpBackendMock];


/**
 * @ngdoc type
 * @name $rootScope.Scope
 * @module ngMock
 * @description
 * {@link ng.$rootScope.Scope Scope} type decorated with helper methods useful for testing. These
 * methods are automatically available on any {@link ng.$rootScope.Scope Scope} instance when
 * `ngMock` module is loaded.
 *
 * In addition to all the regular `Scope` methods, the following helper methods are available:
 */
angular.mock.$RootScopeDecorator = ['$delegate', function($delegate) {

  var $rootScopePrototype = Object.getPrototypeOf($delegate);

  $rootScopePrototype.$countChildScopes = countChildScopes;
  $rootScopePrototype.$countWatchers = countWatchers;

  return $delegate;

  // ------------------------------------------------------------------------------------------ //

  /**
   * @ngdoc method
   * @name $rootScope.Scope#$countChildScopes
   * @module ngMock
   * @description
   * Counts all the direct and indirect child scopes of the current scope.
   *
   * The current scope is excluded from the count. The count includes all isolate child scopes.
   *
   * @returns {number} Total number of child scopes.
   */
  function countChildScopes() {
    // jshint validthis: true
    var count = 0; // exclude the current scope
    var pendingChildHeads = [this.$$childHead];
    var currentScope;

    while (pendingChildHeads.length) {
      currentScope = pendingChildHeads.shift();

      while (currentScope) {
        count += 1;
        pendingChildHeads.push(currentScope.$$childHead);
        currentScope = currentScope.$$nextSibling;
      }
    }

    return count;
  }


  /**
   * @ngdoc method
   * @name $rootScope.Scope#$countWatchers
   * @module ngMock
   * @description
   * Counts all the watchers of direct and indirect child scopes of the current scope.
   *
   * The watchers of the current scope are included in the count and so are all the watchers of
   * isolate child scopes.
   *
   * @returns {number} Total number of watchers.
   */
  function countWatchers() {
    // jshint validthis: true
    var count = this.$$watchers ? this.$$watchers.length : 0; // include the current scope
    var pendingChildHeads = [this.$$childHead];
    var currentScope;

    while (pendingChildHeads.length) {
      currentScope = pendingChildHeads.shift();

      while (currentScope) {
        count += currentScope.$$watchers ? currentScope.$$watchers.length : 0;
        pendingChildHeads.push(currentScope.$$childHead);
        currentScope = currentScope.$$nextSibling;
      }
    }

    return count;
  }
}];


!(function(jasmineOrMocha) {

  if (!jasmineOrMocha) {
    return;
  }

  var currentSpec = null,
      injectorState = new InjectorState(),
      annotatedFunctions = [],
      wasInjectorCreated = function() {
        return !!currentSpec;
      };

  angular.mock.$$annotate = angular.injector.$$annotate;
  angular.injector.$$annotate = function(fn) {
    if (typeof fn === 'function' && !fn.$inject) {
      annotatedFunctions.push(fn);
    }
    return angular.mock.$$annotate.apply(this, arguments);
  };

  /**
   * @ngdoc function
   * @name angular.mock.module
   * @description
   *
   * *NOTE*: This function is also published on window for easy access.<br>
   * *NOTE*: This function is declared ONLY WHEN running tests with jasmine or mocha
   *
   * This function registers a module configuration code. It collects the configuration information
   * which will be used when the injector is created by {@link angular.mock.inject inject}.
   *
   * See {@link angular.mock.inject inject} for usage example
   *
   * @param {...(string|Function|Object)} fns any number of modules which are represented as string
   *        aliases or as anonymous module initialization functions. The modules are used to
   *        configure the injector. The 'ng' and 'ngMock' modules are automatically loaded. If an
   *        object literal is passed each key-value pair will be registered on the module via
   *        {@link auto.$provide $provide}.value, the key being the string name (or token) to associate
   *        with the value on the injector.
   */
  var module = window.module = angular.mock.module = function() {
    var moduleFns = Array.prototype.slice.call(arguments, 0);
    return wasInjectorCreated() ? workFn() : workFn;
    /////////////////////
    function workFn() {
      if (currentSpec.$injector) {
        throw new Error('Injector already created, can not register a module!');
      } else {
        var fn, modules = currentSpec.$modules || (currentSpec.$modules = []);
        angular.forEach(moduleFns, function(module) {
          if (angular.isObject(module) && !angular.isArray(module)) {
            fn = ['$provide', function($provide) {
              angular.forEach(module, function(value, key) {
                $provide.value(key, value);
              });
            }];
          } else {
            fn = module;
          }
          if (currentSpec.$providerInjector) {
            currentSpec.$providerInjector.invoke(fn);
          } else {
            modules.push(fn);
          }
        });
      }
    }
  };

  module.$$beforeAllHook = (window.before || window.beforeAll);
  module.$$afterAllHook = (window.after || window.afterAll);

  // purely for testing ngMock itself
  module.$$currentSpec = function(to) {
    if (arguments.length === 0) return to;
    currentSpec = to;
  };

  /**
   * @ngdoc function
   * @name angular.mock.module.sharedInjector
   * @description
   *
   * *NOTE*: This function is declared ONLY WHEN running tests with jasmine or mocha
   *
   * This function ensures a single injector will be used for all tests in a given describe context.
   * This contrasts with the default behaviour where a new injector is created per test case.
   *
   * Use sharedInjector when you want to take advantage of Jasmine's `beforeAll()`, or mocha's
   * `before()` methods. Call `module.sharedInjector()` before you setup any other hooks that
   * will create (i.e call `module()`) or use (i.e call `inject()`) the injector.
   *
   * You cannot call `sharedInjector()` from within a context already using `sharedInjector()`.
   *
   * ## Example
   *
   * Typically beforeAll is used to make many assertions about a single operation. This can
   * cut down test run-time as the test setup doesn't need to be re-run, and enabling focussed
   * tests each with a single assertion.
   *
   * ```js
   * describe("Deep Thought", function() {
   *
   *   module.sharedInjector();
   *
   *   beforeAll(module("UltimateQuestion"));
   *
   *   beforeAll(inject(function(DeepThought) {
   *     expect(DeepThought.answer).toBeUndefined();
   *     DeepThought.generateAnswer();
   *   }));
   *
   *   it("has calculated the answer correctly", inject(function(DeepThought) {
   *     // Because of sharedInjector, we have access to the instance of the DeepThought service
   *     // that was provided to the beforeAll() hook. Therefore we can test the generated answer
   *     expect(DeepThought.answer).toBe(42);
   *   }));
   *
   *   it("has calculated the answer within the expected time", inject(function(DeepThought) {
   *     expect(DeepThought.runTimeMillennia).toBeLessThan(8000);
   *   }));
   *
   *   it("has double checked the answer", inject(function(DeepThought) {
   *     expect(DeepThought.absolutelySureItIsTheRightAnswer).toBe(true);
   *   }));
   *
   * });
   *
   * ```
   */
  module.sharedInjector = function() {
    if (!(module.$$beforeAllHook && module.$$afterAllHook)) {
      throw Error("sharedInjector() cannot be used unless your test runner defines beforeAll/afterAll");
    }

    var initialized = false;

    module.$$beforeAllHook(function() {
      if (injectorState.shared) {
        injectorState.sharedError = Error("sharedInjector() cannot be called inside a context that has already called sharedInjector()");
        throw injectorState.sharedError;
      }
      initialized = true;
      currentSpec = this;
      injectorState.shared = true;
    });

    module.$$afterAllHook(function() {
      if (initialized) {
        injectorState = new InjectorState();
        module.$$cleanup();
      } else {
        injectorState.sharedError = null;
      }
    });
  };

  module.$$beforeEach = function() {
    if (injectorState.shared && currentSpec && currentSpec != this) {
      var state = currentSpec;
      currentSpec = this;
      angular.forEach(["$injector","$modules","$providerInjector", "$injectorStrict"], function(k) {
        currentSpec[k] = state[k];
        state[k] = null;
      });
    } else {
      currentSpec = this;
      originalRootElement = null;
      annotatedFunctions = [];
    }
  };

  module.$$afterEach = function() {
    if (injectorState.cleanupAfterEach()) {
      module.$$cleanup();
    }
  };

  module.$$cleanup = function() {
    var injector = currentSpec.$injector;

    annotatedFunctions.forEach(function(fn) {
      delete fn.$inject;
    });

    angular.forEach(currentSpec.$modules, function(module) {
      if (module && module.$$hashKey) {
        module.$$hashKey = undefined;
      }
    });

    currentSpec.$injector = null;
    currentSpec.$modules = null;
    currentSpec.$providerInjector = null;
    currentSpec = null;

    if (injector) {
      // Ensure `$rootElement` is instantiated, before checking `originalRootElement`
      var $rootElement = injector.get('$rootElement');
      var rootNode = $rootElement && $rootElement[0];
      var cleanUpNodes = !originalRootElement ? [] : [originalRootElement[0]];
      if (rootNode && (!originalRootElement || rootNode !== originalRootElement[0])) {
        cleanUpNodes.push(rootNode);
      }
      angular.element.cleanData(cleanUpNodes);

      // Ensure `$destroy()` is available, before calling it
      // (a mocked `$rootScope` might not implement it (or not even be an object at all))
      var $rootScope = injector.get('$rootScope');
      if ($rootScope && $rootScope.$destroy) $rootScope.$destroy();
    }

    // clean up jquery's fragment cache
    angular.forEach(angular.element.fragments, function(val, key) {
      delete angular.element.fragments[key];
    });

    MockXhr.$$lastInstance = null;

    angular.forEach(angular.callbacks, function(val, key) {
      delete angular.callbacks[key];
    });
    angular.callbacks.$$counter = 0;
  };

  (window.beforeEach || window.setup)(module.$$beforeEach);
  (window.afterEach || window.teardown)(module.$$afterEach);

  /**
   * @ngdoc function
   * @name angular.mock.inject
   * @description
   *
   * *NOTE*: This function is also published on window for easy access.<br>
   * *NOTE*: This function is declared ONLY WHEN running tests with jasmine or mocha
   *
   * The inject function wraps a function into an injectable function. The inject() creates new
   * instance of {@link auto.$injector $injector} per test, which is then used for
   * resolving references.
   *
   *
   * ## Resolving References (Underscore Wrapping)
   * Often, we would like to inject a reference once, in a `beforeEach()` block and reuse this
   * in multiple `it()` clauses. To be able to do this we must assign the reference to a variable
   * that is declared in the scope of the `describe()` block. Since we would, most likely, want
   * the variable to have the same name of the reference we have a problem, since the parameter
   * to the `inject()` function would hide the outer variable.
   *
   * To help with this, the injected parameters can, optionally, be enclosed with underscores.
   * These are ignored by the injector when the reference name is resolved.
   *
   * For example, the parameter `_myService_` would be resolved as the reference `myService`.
   * Since it is available in the function body as _myService_, we can then assign it to a variable
   * defined in an outer scope.
   *
   * ```
   * // Defined out reference variable outside
   * var myService;
   *
   * // Wrap the parameter in underscores
   * beforeEach( inject( function(_myService_){
   *   myService = _myService_;
   * }));
   *
   * // Use myService in a series of tests.
   * it('makes use of myService', function() {
   *   myService.doStuff();
   * });
   *
   * ```
   *
   * See also {@link angular.mock.module angular.mock.module}
   *
   * ## Example
   * Example of what a typical jasmine tests looks like with the inject method.
   * ```js
   *
   *   angular.module('myApplicationModule', [])
   *       .value('mode', 'app')
   *       .value('version', 'v1.0.1');
   *
   *
   *   describe('MyApp', function() {
   *
   *     // You need to load modules that you want to test,
   *     // it loads only the "ng" module by default.
   *     beforeEach(module('myApplicationModule'));
   *
   *
   *     // inject() is used to inject arguments of all given functions
   *     it('should provide a version', inject(function(mode, version) {
   *       expect(version).toEqual('v1.0.1');
   *       expect(mode).toEqual('app');
   *     }));
   *
   *
   *     // The inject and module method can also be used inside of the it or beforeEach
   *     it('should override a version and test the new version is injected', function() {
   *       // module() takes functions or strings (module aliases)
   *       module(function($provide) {
   *         $provide.value('version', 'overridden'); // override version here
   *       });
   *
   *       inject(function(version) {
   *         expect(version).toEqual('overridden');
   *       });
   *     });
   *   });
   *
   * ```
   *
   * @param {...Function} fns any number of functions which will be injected using the injector.
   */



  var ErrorAddingDeclarationLocationStack = function(e, errorForStack) {
    this.message = e.message;
    this.name = e.name;
    if (e.line) this.line = e.line;
    if (e.sourceId) this.sourceId = e.sourceId;
    if (e.stack && errorForStack)
      this.stack = e.stack + '\n' + errorForStack.stack;
    if (e.stackArray) this.stackArray = e.stackArray;
  };
  ErrorAddingDeclarationLocationStack.prototype = Error.prototype;

  window.inject = angular.mock.inject = function() {
    var blockFns = Array.prototype.slice.call(arguments, 0);
    var errorForStack = new Error('Declaration Location');
    // IE10+ and PhanthomJS do not set stack trace information, until the error is thrown
    if (!errorForStack.stack) {
      try {
        throw errorForStack;
      } catch (e) {}
    }
    return wasInjectorCreated() ? workFn.call(currentSpec) : workFn;
    /////////////////////
    function workFn() {
      var modules = currentSpec.$modules || [];
      var strictDi = !!currentSpec.$injectorStrict;
      modules.unshift(['$injector', function($injector) {
        currentSpec.$providerInjector = $injector;
      }]);
      modules.unshift('ngMock');
      modules.unshift('ng');
      var injector = currentSpec.$injector;
      if (!injector) {
        if (strictDi) {
          // If strictDi is enabled, annotate the providerInjector blocks
          angular.forEach(modules, function(moduleFn) {
            if (typeof moduleFn === "function") {
              angular.injector.$$annotate(moduleFn);
            }
          });
        }
        injector = currentSpec.$injector = angular.injector(modules, strictDi);
        currentSpec.$injectorStrict = strictDi;
      }
      for (var i = 0, ii = blockFns.length; i < ii; i++) {
        if (currentSpec.$injectorStrict) {
          // If the injector is strict / strictDi, and the spec wants to inject using automatic
          // annotation, then annotate the function here.
          injector.annotate(blockFns[i]);
        }
        try {
          /* jshint -W040 *//* Jasmine explicitly provides a `this` object when calling functions */
          injector.invoke(blockFns[i] || angular.noop, this);
          /* jshint +W040 */
        } catch (e) {
          if (e.stack && errorForStack) {
            throw new ErrorAddingDeclarationLocationStack(e, errorForStack);
          }
          throw e;
        } finally {
          errorForStack = null;
        }
      }
    }
  };


  angular.mock.inject.strictDi = function(value) {
    value = arguments.length ? !!value : true;
    return wasInjectorCreated() ? workFn() : workFn;

    function workFn() {
      if (value !== currentSpec.$injectorStrict) {
        if (currentSpec.$injector) {
          throw new Error('Injector already created, can not modify strict annotations');
        } else {
          currentSpec.$injectorStrict = value;
        }
      }
    }
  };

  function InjectorState() {
    this.shared = false;
    this.sharedError = null;

    this.cleanupAfterEach = function() {
      return !this.shared || this.sharedError;
    };
  }
})(window.jasmine || window.mocha);


})(window, window.angular);

'use strict';
angular.module('angular-scroll-animate', []);// Source: src/angular-scroll-animate.js
/**
 * @ngdoc directive
 * @name angular-scroll-animate.directive:when-visible
 * @restrict A
 * @param {string} when-not-visible function to execute when element is scrolled into viewport
 * @param {string=} when-not-visible function to execute when element is scrolled out of viewport
 * @param {delayPercent=} percentage (of px) to delay animate when visible transition.
 * @param {bindScrollTo=} override default scroll event binding to another parent container.
 *
 * @description
 * Allows method hooks into the detection of when an element is scrolled into or out of view.
 *
 * @example
 * <example module="angular-scroll-animate">
 *   <file name="index.html">
 *     <div ng-controller="ExampleCtrl">
 *       <div class="car" when-visible="animateIn" when-not-visible="animateOut">Broom</div>
 *     </div>
 *   </file>
 *   <file name="controller.js">
 *   angular.module('example', []).controller('ExampleCtrl', function($scope) {
 *
 *     $scope.animateIn = function($el) {
 *       $el.removeClass('hidden');
 *       $el.addClass('fadeIn');
 *     };
 *
 *     $scope.animateOut = function($el) {
 *      $el.addClass('hidden');
 *       $el.removeClassClass('fadeIn');
 *     };
 *   });
 *
 *   </file>
 *   <file name="animations.css">
 *     .hidden { visibility: hidden; }
 *     .fadeIn { transition: all 300ms ease-in 2s; }
 *   </file>
 * </example>
 */
angular.module('angular-scroll-animate', []).directive('whenVisible', ['$document', '$window',
 function($document, $window) {

    var determineWhereElementIsInViewport =
      function($el, viewportHeight, whenVisibleFn, whenNotVisibleFn, delayPercent, scope) {

        var elementBounds = $el[0].getBoundingClientRect();

        var panelTop = elementBounds.top;
        var panelBottom = elementBounds.bottom;

        // pixel buffer until deciding to show the element
        var delayPx = delayPercent * elementBounds.height;

        var bottomVisible = (panelBottom - delayPx > 0) && (panelBottom < viewportHeight);
        var topVisible = (panelTop + delayPx <= viewportHeight) && (panelTop > 0);

        if ($el.data('hidden') && bottomVisible || topVisible) {
          whenVisibleFn($el, scope);
          $el.data('hidden', false);
        }

        // scrolled out from scrolling down or up
        else if (!($el.data('hidden')) && (panelBottom < 0 || panelTop > viewportHeight)) {
          whenNotVisibleFn($el, scope);
          $el.data('hidden', true);
        }
      };

    return {
      restrict: 'A',
      scope: {
        whenVisible: '&',
        whenNotVisible: '&?',
        delayPercent: '=?',
        bindScrollTo: '@?'
      },

      controller: ['$scope', function(scope) {
        if (!scope.whenVisible || !angular.isFunction(scope.whenVisible())) {
          throw new Error('Directive: angular-scroll-animate \'when-visible\' attribute must specify a function.');
        }

        if (scope.whenNotVisible && !angular.isFunction(scope.whenNotVisible())) {
          throw new Error('Directive: angular-scroll-animate \'when-not-visible\' attribute must specify a function.');
        }
        else if (!scope.whenNotVisible) {
          scope.whenNotVisible = function() {
            return angular.noop;
          };
        }

        if (scope.delayPercent) {

          var delayPercent = parseFloat(scope.delayPercent);

          if (!angular.isNumber(delayPercent) || (delayPercent < 0 || delayPercent > 1)) {
            throw new Error('Directive: angular-scroll-animate \'delay-percent\' attribute must be a decimal fraction between 0 and 1.');
          }
        }
    }],

      link: function(scope, el, attributes) {

        var delayPercent = attributes.delayPercent || 0.25; // lower = more eager to hide / show, higher = less eager
        var document = $document[0].documentElement;
        var checkPending = false;

        var updateVisibility = function() {
          determineWhereElementIsInViewport(el, document.clientHeight /* viewportHeight */ ,
            scope.whenVisible(), scope.whenNotVisible(), delayPercent, scope);

          checkPending = false;
        };

        var onScroll = function() {

          if (!checkPending) {
            checkPending = true;

            /* globals requestAnimationFrame */
            requestAnimationFrame(updateVisibility);
          }
        };

        var documentListenerEvents = 'scroll';

        /* allows overflow:auto on container element to animate for Safari browsers */
        if (attributes.bindScrollTo) {
          angular.element($document[0].querySelector(attributes.bindScrollTo)).on(documentListenerEvents, onScroll);
        }

        /* always bind to document scroll as well - works for overflow: auto on Chrome, Firefox browsers */
        $document.on(documentListenerEvents, onScroll);

        scope.$on('$destroy', function() {
          $document.off(documentListenerEvents, onScroll);
        });

        var $elWindow = angular.element($window);
        var windowListenerEvents = 'resize orientationchange';
        $elWindow.on(windowListenerEvents, onScroll);

        scope.$on('$destroy', function() {
          $elWindow.off(windowListenerEvents, onScroll);
        });

        // initialise
        el.data('hidden', true);
        scope.$evalAsync(onScroll);
      }
    };
 }]);

(function () {
	'use strict';
	angular.module('rssreader', ['ui.router', 'ngAnimate', 'ngValidate', 'ngFileUpload', 'ngTouch', 'favicon', 'dndLists', 'satellizer', 'angular-jwt', '720kb.socialshare', 'ui.bootstrap', 'angular-scroll-animate'])
		.config(['$stateProvider', '$urlRouterProvider', '$authProvider', function ($stateProvider, $urlRouterProvider, $authProvider) {
			$urlRouterProvider.otherwise('home');
			$stateProvider
				.state('home', {
					url: '/home',
					templateUrl: './partials/home.html',
					controller: 'HomeController'
				})
				.state('404', {
					url: '/not-found',
					templateUrl: './partials/static/404_page.html',
					controller: ['$scope', function ($state) {
					}]
				})
				.state('login', {
					url: '/login',
					templateUrl: './partials/auth/login.html',
					controller: 'AuthController',
					onEnter: ['$state', 'authService', function ($state, authService) {
						if (authService.isLoggedIn()) {
							$state.go('home');
						}
					}]
				})
				.state('register', {
					url: '/register',
					templateUrl: './partials/auth/register.html',
					controller: 'AuthController',
					onEnter: ['$state', 'authService', function ($state, authService) {
						if (authService.isLoggedIn()) {
							$state.go('home');
						}
					}]
				})
				.state('forgot', {
					url: '/forgot',
					templateUrl: './partials/auth/forgot.html',
					controller: 'AuthController'
				})
				.state('reset', {
					url: '/reset/:token/:email',
					templateUrl: './partials/auth/reset.html',
					controller: 'AuthController',
					onEnter : ['$stateParams', 'transfer', function ($stateParams, transfer) {
						transfer.setObj($stateParams.token);
						transfer.setEmail($stateParams.email);	
					}]
				})
				.state('verify', {
					url: '/verify/:token/:email',
					templateUrl: './partials/auth/verify.html',
					controller: 'AuthController',
					onEnter : ['$stateParams', 'transfer', 'toasterService', function ($stateParams, transfer, toasterService) {
						transfer.setEmail($stateParams.email);
						transfer.setString($stateParams.token);
						toasterService.info('You have successfuly approved you email. Please reenter you fields');
					}]
				})
				.state('profile', {
					url: '/profile',
					templateUrl: './partials/auth/profile.html',
					controller: 'ProfileController',
					resolve: {
						profilePromise: ['profileService', function(profileService){
							return profileService.getProfile();
						}]
					},
					onEnter: ['$state', 'authService', function ($state, authService) {
						if (!authService.isLoggedIn()) {
							authService.logOut();
							$state.go('home');
						}
					}]
				})
				.state("dashboard", {
					url: '/dashboard',
					views: {
						'': {
							templateUrl: './partials/dashboard/dashboard.html',
							controller: 'DashboardController'
						},
						'sidebar@dashboard': {
							templateUrl: './partials/dashboard/sidebar.html',
							controller: 'SidebarController'
						},
						'feedHead@dashboard': {
							templateUrl: './partials/dashboard/feed-head.html',
							controller: 'DashboardController'
						}
					},
					resolve: {
						profilePromise: ['profileService', function(profileService){
							return profileService.getProfile();
						}],
						feedPromise: ['feedsService', function (feedsService) {
							return feedsService.getAllFeeds();
						}]
					},
					onEnter: ['articlesService', function (articlesService) {
						articlesService.getAllArticles();
					}]
				})
				.state("dashboard.list", {
					url: '/list',
					templateUrl: './partials/list/list.html',
					controller: 'ArticlesController'
				})
				.state("dashboard.th-list", {
					url: '/th-list',
					templateUrl: './partials/list/th-list.html',
					controller: 'ArticlesController'
				})
				.state("dashboard.th-large", {
					url: '/th-large',
					templateUrl: './partials/list/th-large.html',
					controller: 'ArticlesController'
				})
				.state("dashboard.addFeed", {
					url: '/add',
					templateUrl: './partials/dashboard/add-feed.html',
					controller: 'FeedsController',
					onEnter: ['dashboardService', function (dashboardService) {
						dashboardService.setTitle("Add Feed");
					}],
					resolve: {
						feedPromise: ['feedsService', function (feedsService) {
							return feedsService.getAdvicedFeeds();
						}]
					}
				})
				.state("dashboard.adviced", {
					url: '/adviced/:category',
					templateUrl: './partials/dashboard/adviced.html',
					controller: 'FeedsController',
					resolve: {
						feedPromise: ['feedsService', function (feedsService) {
							return feedsService.getAdvicedFeeds();
						}]
					}
				})
				.state("dashboard.article", {
					url: '/article/:feed/:link',
					templateUrl: './partials/dashboard/article.html',
					controller: 'ArticlesController',
					resolve: {
						articlePromise: ['articlesService', function (articlesService) {
							return articlesService.getAdvicedArticles();
						}]
					}
				})
				.state("dashboard.profile", {
					url: '/profile',
					templateUrl: './partials/auth/profile.html',
					controller: 'ProfileController',
					resolve: {
						profilePromise: ['profileService', function (profileService) {
							return profileService.getProfile();
						}]
					},
					onEnter: ['$state', 'authService', function ($state, authService) {
						if (!authService.isLoggedIn()) {
							authService.logOut();
							$state.go('home');
						}
					}]
				});
			
			$authProvider.twitter({
				clientId: '768721225971560448',
				url: '/auth/twitter',
				authorizationEndpoint: 'https://api.twitter.com/oauth/authenticate',
				redirectUri: window.location.origin,
				oauthType: '1.0',
				popupOptions: {
					width: 495,
					height: 645
				}
			});
			$authProvider.linkedin({
				clientId: '78ffzenowt180q',
				url: '/auth/linkedin',
				authorizationEndpoint: 'https://www.linkedin.com/uas/oauth2/authorization',
				redirectUri: window.location.origin,
				requiredUrlParams: ['state'],
				scopeDelimiter: ' ',
				state: 'STATE',
				oauthType: '2.0',
				popupOptions: { width: 527, height: 582 }
			});
			$authProvider.facebook({
				clientId: '173686319709284',
				name: 'facebook',
				url: '/auth/facebook',
				authorizationEndpoint: 'https://www.facebook.com/v2.5/dialog/oauth',
				redirectUri: window.location.origin + '/',
				requiredUrlParams: ['display', 'scope'],
				scope: ['email'],
				scopeDelimiter: ',',
				display: 'popup',
				oauthType: '2.0',
				popupOptions: {
					width: 580,
					height: 400
				}
			});

			$authProvider.google({
				clientId: '806677097865-va2i3kq96mmu8i00t9k6q92ks1s9tg0l.apps.googleusercontent.com',
				url: '/auth/google',
				authorizationEndpoint: 'https://accounts.google.com/o/oauth2/auth',
				redirectUri: window.location.origin,
				requiredUrlParams: ['scope'],
				optionalUrlParams: ['display'],
				scope: ['profile', 'email'],
				scopePrefix: 'openid',
				scopeDelimiter: ' ',
				display: 'popup',
				oauthType: '2.0',
				popupOptions: {
					width: 452,
					height: 633
				}
			});
	}]);
})();
(function () {
	'use strict';
	angular.module('rssreader').controller('ArticlesController', ['$scope', '$state', '$window', '$stateParams', 'toasterService', 'dateFilter', 'feedsService', 'articlesService', 'dashboardService', function ($scope, $state, $window, $stateParams, toasterService, dateFilter, feedsService, articlesService, dashboardService) {
		$scope.articleData = articlesService;
		$scope.obj = {};
		$scope.newCategory = {};
		$scope.categories = feedsService.allFavsCategories;
		$scope.error = null;
		$scope.modalShown = false;
		$scope.articles = $scope.articleData.articles;
		$scope.adviced = $scope.articleData.advicedArticles;
		$scope.isFavourites = $scope.articleData.checkIfFavourites;
		$scope.favForAdd = null;
		$scope.favForRemove = null;
		$scope.articleForShare = null;
		$scope.articleForRead = null;
		$scope.addingNewFavCategory = false;

		$window.scrollTo(0, 0);

		if ($stateParams.feed && $stateParams.link) {
			dashboardService.isReadingArticle = true;
			articlesService.setReadArticle($scope, $stateParams.feed, $stateParams.link);
		}
		else {
			dashboardService.isReadingArticle = false;
			if (feedsService.feedsDictionary.length < 1 && !$scope.isFavourites()) {
				$state.go("dashboard.addFeed");
			}
		}

		$scope.checkIfFavourites = function (article) {
			if (!article) {
				return false;
			}
			if ($scope.isFavourites()) {
				return true;
			}
			for (var i = 0; i < feedsService.favouritesDictionary.length; i++) {
				for (var j = 0; j < feedsService.favouritesDictionary[i].articles.length; j++) {
					if (feedsService.favouritesDictionary[i].articles[j].link === article.link) {
						return true;
					}
				}
			}
			return false;
		}

		$scope.loadMore = function () {
			$scope.articleData.totalDisplayed += $scope.articleData.displayedIncrement;
		};

		$scope.isAllDisplayed = function () {
			return $scope.articleData.totalDisplayed > $scope.articleData.articles.length;
		}

		$scope.getArticles = function () {
			return articlesService.articles;
		}

		$scope.getSortParam = function () {
			var sortParam = dashboardService.getSortParam();
			if (sortParam.type === 'feed') {
				return ['feed', 'date'];
			}
			return sortParam;
		}

		$scope.checkIfNew = function () {
			if ($scope.obj.category.toUpperCase() == 'custom'.toUpperCase()) {
				$scope.addingNewFavCategory = true;
			}
			else {
				$scope.addingNewFavCategory = false;
				$scope.newCategory = {};
			}
		}
		
		$scope.addFavourite = function (article) {
		    $scope.addingNewFavCategory = false;
			$scope.error = null;
			$scope.modalShown = !$scope.modalShown;
			$scope.favForAdd = article;
			$scope.obj = {};
		}
		
		$scope.confirmAddFavourite = function () {
		    $scope.error = '';
		    //console.log($scope.obj.category);
		    //console.log($scope.newCategory.category);
			if ($scope.newCategory.category) {
				$scope.obj.category = $scope.newCategory.category;
			}
			if ($scope.obj.category) {
				if (!$scope.newCategory.category && $scope.obj.category.toUpperCase() == 'custom'.toUpperCase()) {
					$scope.error = "Enter new category name";
					return;
				}
			}
			
			$scope.favForAdd.category = $scope.obj.category;
			articlesService.addFavourite($scope.favForAdd).then(function (res) {
				$scope.resetAddFavValues();
				$scope.cancelAddFavourite();
				toasterService.success("Article marked as favourite");
			}, function (err) {
				$scope.resetAddFavValues();
				console.log(err);
				if (!err.data)
					$scope.error = err.message;
				else $scope.error = err.data.message;
			});
		}

		$scope.resetAddFavValues = function () {
			dashboardService.hideLoading();
			$scope.newCategory = {};
			$scope.obj = {};
			$scope.addingNewFavCategory = false;
		}

		$scope.cancelAddFavourite = function () {
			$scope.modalShown = false;
			$scope.favForAdd = {};
			$scope.newCategory = {};
		}

		$scope.share = function (article) {
			$scope.error = null;
			$scope.articleForShare = article;
		}

		$scope.cancelSharing = function () {
			$scope.modalShareShown = false;
			$scope.articleForShare = {};
		}

		$scope.removeFavourite = function (article) {
			$scope.favForRemove = article;
			toasterService.confirm({
				message: "Remove this article?",
				confirm: "confirmRemoveFavourite"
			}, $scope);
		}

		$scope.confirmRemoveFavourite = function () {
			articlesService.removeFavourite($scope.favForRemove).then(function (res) {
				toasterService.info("Article removed from favourites");
				$state.reload("dashboard");
			}, function (err) {
				console.log(err);
			});
		}

		$scope.getArticleDate = function (date) {
			if (!date) {
				return;
			};
			return dateFilter(new Date(date), "dd/MM/yy HH:mm");
		}

		$scope.readArticle = function (article) {
			$state.go("dashboard.article", {feed: article.feed, link: article.link});
		}
	}]);
})();
(function() {
	
	angular.module('rssreader').config(['$validatorProvider', function($validatorProvider) {
		$validatorProvider.addMethod("pattern", function(value, element) {
			return this.optional(element) || /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(_|[^\w])).{6,20}/.test(value);
		}, "Password must contain (a-z,A-Z,0-9,!@#)");
		$validatorProvider.addMethod("email", function(value, element) {
			return this.optional(element) || /^([a-zA-Z0-9_-]+\.)*[a-zA-Z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(value);
		}, "text");
	}]).
	controller('AuthController', ['$scope', '$state', 'authService', '$window', 'dashboardService', '$auth', 'transfer', 'jwtHelper', 'toasterService', 
		function ($scope, $state, authService, $window, dashboardService, $auth, transfer, jwtHelper, toasterService) {
		$scope.user = {
			verifyEmail : transfer.getString(),
			counter : 0
		};
		transfer.setString("");
		$scope.setEmail = function () {
			return transfer.getEmail();
		}
		$scope.password = {
			token : transfer.getObj(),
			email : transfer.getEmail()
		};
		$scope.confirm_email = {};
		$scope.session;
		$scope.test = 5;

		var ERRORS = {
			field_required: 'This field is required',
			email_example: 'Please, use example: jacksparrow@gmail.com',
			min_6symbl: 'Please, enter at least 6 characters',
			min_9symbl: 'Please, enter at least 9 characters',
			max_20symbl: 'Please, enter no more then 40 characters',
			reg_exp: 'Password must contain (a-z,A-Z,0-9,!@#)'
		}

		$scope.register = function (form) {
			if (form.validate()) {
				dashboardService.loadingIcon = true;
				if($scope.user.verifyEmail){
					$scope.user.email = transfer.getEmail();
				}
				authService.register($scope.user).error(function (error) {
				    $scope.error = error;
				    dashboardService.loadingIcon = false;
					if(error.message[0] === "F"){
						toasterService.info(error.message);		
					}
					toasterService.error(error.message);
				}).then(function (response) {
				    dashboardService.loadingIcon = false;
					toasterService.success('You have successfully registered');
					$state.go('dashboard.' + dashboardService.getViewMode(), {
						id: authService.userID()
					});
					$scope.user.counter ++;
				});
			}
		};

		$scope.logIn = function (form) {
		    if (form.validate()) {
		        dashboardService.loadingIcon = true;
		        authService.logIn($scope.user, $scope.session).error(function (error) {
		            dashboardService.loadingIcon = false;
					$scope.error = error;
				}).then(function () {
					if (!$scope.session) {
						$scope.onExit = function () {
							auth.logOut();
						};
						dashboardService.loadingIcon = false;
						$state.go('dashboard.' + dashboardService.getViewMode(), {
							id: authService.userID()
						});
						toasterService.success('You have successfully login');
						$window.onbeforeunload = $scope.onExit;
					} else {
						$state.go('dashboard.' + dashboardService.getViewMode(), {
							id: authService.userID()
						});
						toasterService.success('You have successfully login');
					}
				});
			}
		};
		
		$scope.forgot = function(form){
			authService.forgot($scope.confirm_email).error(function (error) {
				$scope.error = error;	
				toasterService.error(error.message);
			}).then(function (response) {
				toasterService.info('An e-mail has been sent to ' + $scope.confirm_email.email + ' with further instructions.');	
			})
		}

		$scope.reset = function(form){
				authService.reset($scope.password).error(function (error) {
					$scope.error = error;
					toasterService.error(error.message);
				}).then(function (response) {
					toasterService.success('You have successfully changed password');
					$state.go('login');	
				})
		};	

		$scope.authenticate = function (provider) {
			transfer.setProviderString(provider);
			$auth.authenticate(provider).then(function (response) {
				$auth.removeToken();
				authService.saveToken(response.data.token);
				toasterService.success('You have successfully authenticated');
				$state.go('dashboard.' + dashboardService.getViewMode());
			},function (response) {
				toasterService.error(response.data.message);
			})
		};


		$scope.validationLoginOptions = {
			rules: {
				mail: {
					required: true,
					email: true
				},
				pwd: {
					required: true
				}
			},
			messages: {
				mail: {
					required: ERRORS.field_required,
					email: ERRORS.email_example
				},

				pwd: {
					required: ERRORS.field_required
				}
			}
		};

		$scope.validationRegistrOptions = {
			rules: {
				mail: {
					required: true,
					email: true,
					minlength: 9,
					maxlength: 40,
				},
				pwd: {
					required: true,
					minlength: 6,
					maxlength: 20,
					pattern: true
				},
				reppwd: {
					required: true
				}
			},
			messages: {
				mail: {
					required: ERRORS.field_required,
					email: ERRORS.email_example,
					minlength: ERRORS.min_9symbl,
					maxlength: ERRORS.max_20symbl
				},

				pwd: {
					required: ERRORS.field_required,
					minlength: ERRORS.min_6symbl,
					maxlength: ERRORS.max_20symbl,
					pattern: ERRORS.reg_exp
				},

				reppwd: {
					required: ERRORS.field_required
				}
			}
		}
	}]);
})();
(function () {
	'use strict';
	angular.module('rssreader').controller('DashboardController', ['$scope', '$state', 'dashboardService', 'feedsService', 'toasterService', function ($scope, $state, dashboardService, feedsService, toasterService) {
		$scope.sidebar = dashboardService.checkSidebar;
		$scope.headTitle = dashboardService.getTitle;
		$scope.feed = dashboardService.getFeedId;
		$scope.alertMsg = dashboardService.alertMsg;
		$scope.successMsg = dashboardService.successMsg;
		$scope.readSingleFeed = dashboardService.readSingleFeed;
		$scope.hideSortList = dashboardService.hideSortList;
		
		$scope.checkIfReading = function () {
			return dashboardService.isReadingArticle;
		};

		$scope.toggleSidebar = function () {
			dashboardService.sidebar = !dashboardService.sidebar;
		}
		$scope.hideSidebar = function () {
			dashboardService.sidebar = false;
		}
		$scope.showSidebar = function () {
			dashboardService.sidebar = true;
		}

		$scope.hideViewBtns = function () {
			if ($scope.headTitle() === "Add Feed" || feedsService.feedsDictionary.length == 0) {
				return true;
			}
			return false;
			
		}
		$scope.checkIfToggled = function (mode) {
			return dashboardService.getViewMode() === mode;
		}
		
		$scope.checkSortType = function (type, order) {
			var sortType = dashboardService.getSortParam();
			if (type == sortType.type && order == sortType.order) {
				return true;
			}
			return false;
		}
		
		$scope.onViewChange = function (view) {
			switch (view) {
				case 'view-mode1':
					dashboardService.setViewMode(0);
					break;
				case 'view-mode2':
					dashboardService.setViewMode(1);
					break;
				case 'view-mode3':
					dashboardService.setViewMode(2);
					break;
			}
			$state.go('dashboard.' + dashboardService.getViewMode());
		}
		var timer;
		$scope.onFeedDelete = function () {
			toasterService.confirm({
				message: "Remove this feed?",
				confirm: "confirmFeedDelete"
			}, $scope);
		}
		$scope.confirmFeedDelete = function () {
			dashboardService.loadingIcon = true;
			feedsService.removeFeed(dashboardService.getFeedId())
				.then(function (res) {
					dashboardService.loadingIcon = false;
					toasterService.info("Feed has been deleted");
					$state.reload("dashboard");
				}, function (err) {
					dashboardService.loadingIcon = false;
					console.log(err);
				});
		}
		$scope.currentSortTitle = function () {
			var sortParam = dashboardService.getSortParam();
			switch (sortParam.type) {
				case 'date': {
					if (sortParam.order == 1){
						return "Newest";
					}
					return "Oldest";
				}
				case 'feed': {
					return "By Feed";            
				}
			}
		}
		var sortTypeElement;
		$scope.setSortParam = function (e, type, order) {
			if (sortTypeElement) {
				sortTypeElement.removeClass('selected');
			}
			sortTypeElement = angular.element(e.currentTarget);
			sortTypeElement.addClass('selected');
			dashboardService.setSortParam(type, order);
		}
	}]);
})();
(function () {
	'use strict';
	angular.module('rssreader').controller('FeedsController', ['$scope', '$state', '$stateParams', '$http', 'toasterService', 'feedsService', 'dashboardService', 'articlesService', 'authService', function ($scope, $state, $stateParams, $http, toasterService, feedsService, dashboardService, articlesService, authService) {
		if ($state.current.name === 'dashboard.addFeed' || $state.current.name === 'dashboard.adviced') {
			dashboardService.isReadingArticle = true;
		}
		$scope.advicedCategory = $stateParams.category;
		$scope.obj = {};
		$scope.feeds = feedsService.feedsDictionary;
		$scope.adviced = feedsService.advicedDictionary;
		$scope.categories = feedsService.allCategories;
		$scope.addingNewCategory = false;
		$scope.newCategory = {};

		if ($state.current.name === "dashboard.adviced") {
			var invalidCategory = $scope.adviced.filter(function (elem, i) {
				return elem.category == $stateParams.category;
			});
			if (!invalidCategory.length) {
				$state.go("404", {reload: true});
			}
		}

		$scope.checkIfNew = function () {
			if ($scope.obj.category.toUpperCase() == 'custom'.toUpperCase()) {
				$scope.addingNewCategory = true;
			}
			else {
				$scope.addingNewCategory = false;
				$scope.newCategory = {};
			}
		}
		$scope.addFeed = function () {
			dashboardService.loadingIcon = true;
			$scope.error = '';
			if (!$scope.obj.link) {
				$scope.error = "Enter Rss feed link";
				dashboardService.loadingIcon = false;
				return;
			}
			if ($scope.newCategory.category) {
				$scope.obj.category = $scope.newCategory.category;
			}

			if (!$scope.obj.category) {
			    if (!$scope.advicedCategory) {
			        $scope.error = "Choose category";
			        dashboardService.loadingIcon = false;
			        return;
			    }
			}

			if (!$scope.newCategory.category && $scope.obj.category.toUpperCase() == 'custom'.toUpperCase()) {
				$scope.error = "Enter new category name";
				dashboardService.loadingIcon = false;
				return;
			}
			if (!$scope.obj.category) {
			    $scope.obj.category = $scope.advicedCategory;
			}
			feedsService.addFeed($scope.obj)
				.then(function (res) {
					$scope.addingNewCategory = false;
					toasterService.success("Feed successfully added");
					$state.go('dashboard.' + dashboardService.getViewMode(), {}, { reload: true });
				}, function (err) {
					dashboardService.loadingIcon = false;
					if (!err.data)
						$scope.error = err.message;
					else $scope.error = err.data.message;
				});
		}
		$scope.addFeedByAdvice = function (feed) {
		    $scope.addingNewCategory = false;
		    $scope.obj.link = feed.rsslink;
		    $scope.error = null;
		    $scope.obj.category = '';
		    $scope.modalShown = !$scope.modalShown;
		}
		$scope.setCoverImage = function (item) {
			var coverImage = "";
			switch (item.category) {
				case "IT": {
					coverImage = '/assets/images/it.jpeg'
					return { 'background-image': 'url(' + coverImage + ')', 'background-size': 'cover', 'background-position': 'center center' }
				}
					break;
				case "Gaming": {
					coverImage = '/assets/images/gaming.jpeg'
					return { 'background-image': 'url(' + coverImage + ')', 'background-size': 'cover', 'background-position': 'center center' }
				}
					break;
				case "News": {
					coverImage = '/assets/images/news.jpeg'
					return { 'background-image': 'url(' + coverImage + ')', 'background-size': 'cover', 'background-position': 'center center' }
				}
					break;
				case "Sport": {
					coverImage = '/assets/images/sport.jpeg'
					return { 'background-image': 'url(' + coverImage + ')', 'background-size': 'cover', 'background-position': 'center center' }
				}
					break;
				case "Food": {
					coverImage = '/assets/images/food.jpeg'
					return { 'background-image': 'url(' + coverImage + ')', 'background-size': 'cover', 'background-position': 'center center' }
				}
					break;
			}
		}
	}]);
})();
(function () {
	'use strict';
	angular.module('rssreader').controller('HomeController', ['$scope', '$state', 'authService', 'dashboardService', function ($scope, $state, authService, dashboardService) {
		$scope.isLoggedIn = authService.isLoggedIn;
		$scope.currentUser = authService.currentUser;
		$scope.onFeeds = function () {
			if (authService.isLoggedIn()) {
				$state.go('dashboard.' + dashboardService.getViewMode(), {
					id: authService.userID()
				});
			} else {
				$state.go('home');
			}
		}
		$scope.onFeeds();
		$scope.onRegister = function () {
			$state.go('register');
		}
		$scope.onLogin = function () {
			$state.go('login');
		}
	}]);
})();
(function () {
	angular.module('rssreader').controller('IndexController', ['$scope', 'profileService', 'dashboardService', 'authService', '$window', 'themeService', function ($scope, profileService, dashboardService, authService, $window, themeService) {
		$scope.loadingIcon = dashboardService.isLoading;
		$scope.getTheme = function () {
			if (authService.isLoggedIn()) {
				return profileService.refreshProfileData().colorTheme;
			} else {
				return "theme1";
			}
		}

		$scope.fadeIn = function ($el) {
		    $el.removeClass('not-visible');
		    $el.addClass('fade-in-1s');
		}

		$scope.slideFromLeft = function ($el) {
		    $el.removeClass('not-visible');
		    $el.addClass('slide-from-left-smooth');
		}

		$scope.slideFromRight = function ($el) {
		    $el.removeClass('not-visible');
		    $el.addClass('slide-from-right-smooth');
		}
	}]);
})();
(function () {
	'use strict';
	angular.module('rssreader').controller('NavbarController', ['$scope', '$state','profileService', 'authService', 'dashboardService', 'transfer', 'accountInfo', '$auth',
		function ($scope, $state,profileService, authService, dashboardService, transfer, accountInfo, $auth) {
			$scope.isLoggedIn = authService.isLoggedIn;
			$scope.isDashboard = function () {
				return /dashboard/.test($state.current.name);
			}
			$scope.currentUser = profileService.refreshProfileData;
			$scope.toggleSidebar = function () {
				$scope.hideMobileNavbar();
				dashboardService.sidebar = !dashboardService.sidebar;
				$scope.getProfile();
			}

			$scope.hideSidebar = function () {
				dashboardService.sidebar = false;
			}

			$scope.hideMobileNavbar = function () {
				angular.element(document.querySelector("#bs-example-navbar-collapse-1")).removeClass('in');
			}

			$scope.toProfile = function () {
				$scope.hideMobileNavbar();
				$scope.hideSidebar();
				$state.go("dashboard.profile");
			}

			$scope.logOut = function () {
				$scope.hideMobileNavbar();
				authService.logOut();
				$state.go("home");
			}

			$scope.onEmblem = function () {
				$scope.hideMobileNavbar();
				if (authService.isLoggedIn()) {
					if ($state.current.name === "dashboard.list" || $state.current.name === "dashboard.th-list" || $state.current.name === "dashboard.th-large") {
						$state.reload('dashboard');
					}
					else $state.go("dashboard." + dashboardService.getViewMode());
				} else {
					$state.go("home");
				}
			}
			$scope.goToProgile = function () {
				$state.go("profile");
				$scope.hideMobileNavbar();
			}
			$scope.getProfile = function () {
				accountInfo.getProfile().then(function (response) {
					if ($auth.isAuthenticated()) {
						var lenght = response.data.user.length;
						for (var i = 0; i < lenght; i++) {
							if (response.data.user[i].email === $auth.getPayload().email) {
								$scope.profile = response.data.user[i];
							}
						}
					}
				})
			};
			$scope.getProfile();
			$scope.getImage = function(){
				return profileService.getImage();
			};
	}]);
})();
(function () {
	'use strict';
	angular.module('rssreader').controller('ProfileController', ['Upload', '$http', '$state', 'profileService', '$scope',
		'authService', '$window', 'themeService', 'dashboardService', '$auth', 'accountInfo', 'toasterService', 'transfer',
		function (Upload, $http, $state, profileService, $scope, authService, $window, themeService, dashboardService, $auth, accountInfo, toasterService, transfer) {
		    dashboardService.isReadingArticle = true;
			$scope.currentUser = profileService.refreshProfileData;
			$scope.test = 5;
			$scope.sameProvider = transfer.getProviderString();
			$scope.link = function (provider) {
				$auth.link(provider).then(function () {
					toasterService.info('You have successfully linked a ' + provider + ' account');
					profileService.getProfile();
				}, function (response) {
					toasterService.error(response.data.message);
				});
			};

			$scope.unlink = function (provider) {
				$http.post('/auth/unlink', {
					id: profileService.refreshProfileData()._id,
					provider: provider
				}).then(function (resonse) {
					toasterService.info('You have unlinked a ' + provider + ' account');
					profileService.getProfile();
				});
			};

			$scope.updateProfile = function () {
				profileService.getProfile();
			};

			$scope.newUserData = {
				email: profileService.refreshProfileData().email,
				currentPass: "",
				newPass: "",
				newPassRepeat: ""
			};

			$scope.submit = function (file) { //function to call on form submit
				if ($scope.upload_form.file.$valid && file) { //check if from is valid
					$scope.upload(file); //call upload function
				}
			};

			$scope.upload = function (file, errFiles) {
				$scope.f = file;
				if (errFiles) {
					$scope.errFile = errFiles[0];
				}
				else {
					$scope.errFile = null;
				}
				if (file) {
					Upload.upload({
						url: '/users/' + authService.userID() + '/upload', //webAPI exposed to upload the file
						data: {
							file: file,
							user: authService.userID()
						}, //pass file as data, should be user ng-model
						headers: {
							Authorization: 'Bearer ' + authService.getToken()
						}
					}).then(function (res) { //upload function returns a promise
						if (res.data.error_code === 0) { //validate success
							profileService.getProfile();
						} else {
							$window.alert('an error occured');
						}
					}, function (err) { //catch error
						if (err.status > 0)
							$scope.errorMsg = err.status + ': ' + err.data;
					});
				}
			};

			var PROFILE_ERRORS = {
				field_required: 'This field is required',
				email_example: 'Please, use example: jacksparrow@gmail.com',
				min_6symbl: 'Please,enter at least 6 characters',
				min_9symbl: 'Please,enter at least 9 characters',
				max_20symbl: 'Please,no more then 20 characters',
				reg_exp: 'Password must contain (a-z,A-Z,0-9,!@#)'
			};

			$scope.changePass = function (form) {
				if (form.validate()) {
					console.log("Submit change password");
					return $http.post('/changePassword', $scope.newUserData, {
						headers: {
							Authorization: 'Bearer ' + authService.getToken()
						}
					}).success(function (data) {
						toasterService.success('You have successfully changed pswd');
						authService.saveToken(data.token);
						$state.go('dashboard.' + dashboardService.getViewMode(), {
							id: authService.userID()
						});
					}).error(function (err) {
						$scope.err = err;
						console.log(err.message);
					});
				}
			};

			$scope.resetPass = function () {
				angular.element('label.error').remove();
			};
			
            $scope.changePassValidation = {
				rules: {
					currentPassword: {
						required: true
					},
					newPassword: {
						required: true,
						minlength: 6,
						maxlength: 40,
						pattern: true
					},
					repeatNewPassword: {
						required: true
					}
				},
				messages: {
					currentPassword: {
						required: PROFILE_ERRORS.field_required,
						email: PROFILE_ERRORS.email_example,
						minlength: PROFILE_ERRORS.min_9symbl,
						maxlength: PROFILE_ERRORS.max_20symbl
					},
					newPassword: {
						required: PROFILE_ERRORS.field_required,
						minlength: PROFILE_ERRORS.min_6symbl,
						maxlength: PROFILE_ERRORS.max_20symbl,
						pattern: PROFILE_ERRORS.reg_exp
					},
					repeatNewPassword: {
						required: PROFILE_ERRORS.field_required
					}
				}
			};

			$scope.changeTheme = function () {
				$scope.modalShown = !$scope.modalShown;
			};

			$scope.updateTheme = function (layout) {
				themeService.changeTheme(layout.url).error(function (error) {
					console.log("theme not changed" + error);
				}).then(function (response) {
					profileService.getProfile();
				});
			};
			$scope.layouts = themeService.layouts;
		}
	]);
})();

(function () {
	'use strict';
	angular.module('rssreader').controller('SidebarController', ['$scope', '$state', 'feedsService', 'articlesService', 'dashboardService', function ($scope, $state, feedsService, articlesService, dashboardService) {
		$scope.feedsListDragableTypes = ['feeds'];
		$scope.favsListDragableTypes = ['favs'];
		$scope.currentArticlesType = dashboardService.currentArticlesType;
		$scope.currentSelectedItem;
		$scope.feeds = feedsService.feedsDictionary;
		$scope.feedsData = feedsService;
		$scope.favs = $scope.feedsData.favouritesDictionary;
		$scope.onFeedsDrag = function (index) {
			dashboardService.displayLoading();
			$scope.feeds.splice(index, 1);
			feedsService.setFeedsOrder().then(function (resp) {
				dashboardService.hideLoading();
			});
		}
		$scope.onFavsDrag = function (index) {
			dashboardService.displayLoading();
			$scope.favs.splice(index, 1);
			feedsService.setFavsOrder().then(function (resp) {
				dashboardService.hideLoading();
			});
		}
		$scope.getAll = function ($event) {
			setArticlesType(angular.element($event.currentTarget).parent(), 'all');
			// if there is only one category and feed, return this feed articles
			if ($scope.feeds.length === 1 && $scope.feeds[0].feeds.length === 1) {
				articlesService.getArticlesByFeed($scope.feeds[0].feeds[0]).then(function () {
					$state.go("dashboard." + dashboardService.getViewMode());
				});
			} else {
				articlesService.getAllArticles().then(function () {
					$state.go("dashboard." + dashboardService.getViewMode());
				});
			}
		}
		$scope.getByFeed = function ($event, feed) {
			setArticlesType(angular.element($event.currentTarget).parent());
			articlesService.getArticlesByFeed(feed).then(function () {
				$state.go("dashboard." + dashboardService.getViewMode());
			});
		}
		$scope.getByCat = function ($event, cat, index) {
			setArticlesType(angular.element($event.currentTarget).parent(), 'category', cat);
			if ($event.currentTarget.attributes[4]) {
				if ($event.currentTarget.attributes[4].value == 'true') {
					angular.element($event.currentTarget).removeClass('chevron-down');
				}
				if ($event.currentTarget.attributes[4].value == 'false') {
					angular.element($event.currentTarget).addClass('chevron-down');
				}
			}
			else {
				angular.element($event.currentTarget).addClass('chevron-down');
			}
			// if there is only one feed within selected category, return its articles
			if ($scope.feeds[arguments[2]].feeds.length == 1) {
				articlesService.getArticlesByFeed($scope.feeds[arguments[2]].feeds[0]).then(function () {
					$state.go("dashboard." + dashboardService.getViewMode());
				});
			} else {
				articlesService.getArticlesByCat(arguments[1]).then(function () {
					$state.go("dashboard." + dashboardService.getViewMode());
				});
			}
		}
		$scope.shevronToggle = function ($event) {
		    if ($event.currentTarget.attributes[4]) {
		        if ($event.currentTarget.attributes[4].value == 'true') {
		            angular.element($event.currentTarget).removeClass('chevron-down');
		        }
		        if ($event.currentTarget.attributes[4].value == 'false') {
		            angular.element($event.currentTarget).addClass('chevron-down');
		        }
		    }
		    else {
		        angular.element($event.currentTarget).addClass('chevron-down');
		    }
		}
		$scope.getFavourites = function ($event) {
			setArticlesType(angular.element($event.currentTarget).parent(), 'favourites');
			if ($event.currentTarget.attributes[4]) {
				if ($event.currentTarget.attributes[4].value == 'true') {
					angular.element($event.currentTarget).removeClass('chevron-down');
				}
				if ($event.currentTarget.attributes[4].value == 'false') {
					angular.element($event.currentTarget).addClass('chevron-down');
				}
			}
			else {
				angular.element($event.currentTarget).addClass('chevron-down');
			}
			articlesService.getFavourites();
			$state.go("dashboard." + dashboardService.getViewMode());
		}
		$scope.getFavArticlesByCat = function ($event, cat) {
			setArticlesType(angular.element($event.currentTarget).parent(), 'category', cat);
			if ($event.currentTarget.attributes[4]) {
				if ($event.currentTarget.attributes[4].value == 'true') {
					angular.element($event.currentTarget).removeClass('chevron-down');
				}
				if ($event.currentTarget.attributes[4].value == 'false') {
					angular.element($event.currentTarget).addClass('chevron-down');
				}
			}
			else {
				angular.element($event.currentTarget).addClass('chevron-down');
			}
			articlesService.getFavArticlesByCat(arguments[1]);
			$state.go("dashboard." + dashboardService.getViewMode());
		}
		$scope.getFavArticle = function ($event, article) {
			setArticlesType(angular.element($event.currentTarget).parent());
			articlesService.getFavArticle(article);
			$state.go("dashboard." + dashboardService.getViewMode());
		}
		$scope.hideFavourites = function () {
			return $scope.favs.length;
		}

		$scope.checkIfEmpty = function () {
			if (feedsService.feedsDictionary.length == 0) {
				return false;
			} else return true;
		}
		$scope.toggle = false;
		var setArticlesType = function (element, type, value) {
			if (type && value) {
				dashboardService.setCurrentArticlesType(type, value);
			}
			if ($scope.currentSelectedItem) {
				$scope.currentSelectedItem.removeClass('selected');
			}
			$scope.currentSelectedItem = element;
			$scope.currentSelectedItem.addClass('selected');
		}
	}]);
})();
angular.module('rssreader').directive('modal', [function () {
	return {
		restrict: 'E',
		scope: {
			show: '='
		},
		replace: true,
		transclude: true,
		link: function (scope, element, attrs, ctrl) {
			scope.modalStyle = {};

			scope.hideModal = function () {
				scope.show = false;
			};
		},
		templateUrl: '../partials/modals/modal.html'
	};
}]);

angular.module('rssreader').directive('pwCheck', [function() {
		return {
			require: 'ngModel',
			link: function(scope, elem, attrs, ctrl) {
				var firstPassword = '#' + attrs.pwCheck;
				elem.add(firstPassword).on('keyup', function() {
					scope.$apply(function() {
						if (elem.val() === "") {
							return;
						}
						var v = elem.val() === $(firstPassword).val();
						ctrl.$setValidity('pwmatch', v);
					});
				});
			}
		}
	}]);
angular.module('rssreader').directive('checkStrength', [function() {
	return {
		replace: false,
		restrict: 'EACM',
		link: function(scope, iElement, iAttrs) {
			var strength = {
				colors: ['#F00', '#F90', '#FF0', '#9F0', '#0F0'],
				mesureStrength: function(p) {
					if (p) {
						var _force = 0,
							_regex = /[#@$-/:-?-~!"^_`]/g,
							_lowerLetters = /[a-z]+/.test(p),
							_upperLetters = /[A-Z]+/.test(p),
							_numbers = /[0-9]+/.test(p),
							_symbols = _regex.test(p),
							_flags = [_lowerLetters, _upperLetters, _numbers, _symbols],
							_passedMatches = $.grep(_flags, function(el) {
								return el === true;
							}).length;

							_force += 2 * p.length + ((p.length >= 10) ? 1 : 0);
							_force += _passedMatches * 10;

							// penality (short password)
							_force = (p.length <= 5) ? Math.min(_force, 10) : _force;
							// penality (poor variety of characters)
							_force = (_passedMatches == 1) ? Math.min(_force, 10) : _force;
							_force = (_passedMatches == 2) ? Math.min(_force, 20) : _force;
							_force = (_passedMatches == 3) ? Math.min(_force, 40) : _force;

						return _force;

					} else {
						return scope.user.password = '';
					}
				},
				getColor: function(s) {
					var idx = 0;
					if (s <= 10) { idx = 0; } else if (s <= 20) { idx = 1; } else if (s <= 30) { idx = 2; } else if (s <= 40) { idx = 3; } else { idx = 4; }

					return { idx: idx + 1, col: this.colors[idx] };
				}
			};
			scope.$watch(iAttrs.checkStrength, function() {
				if (scope.user.password === '') {
					iElement.css({ "display": "none" });
				} 
				else if(scope.password.pas === '') {
					iElement.css({ "display": "none" });		
				} else {
					var c = strength.getColor(strength.mesureStrength(scope.user.password || scope.password.pas));
					iElement.css({ "display": "block" });
					iElement.children('li')
						.css({ "background": "#DDD" })
						.slice(0, c.idx)
						.css({ "background": c.col });
				}
			});
		},
		template: '<li class="point"></li><li class="point"></li><li class="point"></li><li class="point"></li><li class="point"></li>'
	};
}]);
angular.module('rssreader').directive('toaster', ['$timeout', 'toasterService', function ($timeout, toasterService) {
	return {
		restrict: 'E',
		transclude: true,
		link: function (scope, element, attrs) { 
			if (attrs.overlay) {
				scope.overlay = true;
			}
			else {
				scope.overlay = false;
			}
			if (attrs.delay) {
				scope.delay = attrs.delay;
			}
			else {
				scope.delay = 5000;
			}
			scope.toasterStyle = {};
			scope.confirm = function () {
				scope.$parent[attrs.confirm]();
				scope.hideToaster();
			}
			scope.reject = function () {
				scope.hideToaster();
			}
			scope.hideToaster = function () {
				$timeout.cancel(scope.timer);
				scope.$destroy();
				toasterService.removeToaster(element);
			};
			scope.timer = $timeout(function () {
				scope.hideToaster();
			}, scope.delay);
		},
		templateUrl: '../partials/modals/toaster.html'
	};
}]);
(function () {
	'use strict';
	angular.module('rssreader')
	.factory('accountInfo', ['$http', function ($http) {
		return {
			getProfile: function () {
				return $http.get('/api/me');
			},
			updateProfile: function (profileData) {
				return $http.put('/api/me', profileData);
			}
		};
	}]);
})();
(function () {
	'use strict';
	String.prototype.replaceAll = function (target, replacement) {
		return this.split(target).join(replacement);
	};
	angular.module('rssreader').factory('articlesService', ['$http', '$state', '$q', 'authService', '$timeout', 'dashboardService', 'feedsService', function ($http, $state, $q, authService, $timeout, dashboardService, feedsService) {
		var ARTICLES_NUM = 50,
			loadDelay = 350,
			temp_articles = [],
			defer = $q.defer(),
			promises = [],
			obj = {
			    articles: [],
			    advicedArticles: [],
				articleForRead: null,
				isFavourites: false,
				displayedIncrement: 20,
				totalDisplayed: 20,
				checkIfFavourites: function () {
					return obj.isFavourites;
				},
				setReadArticle: function ($scope, feed, link) {
					for (var i = 0; i < obj.articles.length; i++) {
						if (obj.articles[i].link === link) {
							$scope.articleForRead = obj.articles[i];
							dashboardService.hideLoading();
							return;
						}
					}
					return getFeedDataById(feed).success(function (res) {
						obj.resetArticles();
						var feedObj = res;
						return fetchArticles(feedObj).then(function (res) {
							for (var i = 0; i < temp_articles.length; i++) {
								if (temp_articles[i].link === link) {
									$scope.articleForRead = temp_articles[i];
								}
							}
							dashboardService.hideLoading();
							if (!$scope.articleForRead) {
								dashboardService.displayLoading();
								obj.resetArticles();
								return getArticleDataByLink(link).then(function (res) {
									dashboardService.hideLoading();
									$scope.articleForRead = res.data;
								}).catch(function (err) {
									dashboardService.hideLoading();
									if (err.status === 404) {
										$state.go("404");
									}
								});
								if (err.status === 404) {
									$state.go("404");
								}
								else $state.go("dashboard." + dashboardService.getViewMode());
							}
						});
					}).catch(function (err) {
						obj.resetArticles();
						return getArticleDataByLink(link).then(function (res) {
							dashboardService.hideLoading();
							$scope.articleForRead = res.data;
							dashboardService.hideLoading();
						}).catch(function (err) {
							dashboardService.hideLoading();
							if (err.status === 404) {
								$state.go("404");
							}
						});
						if (err.status === 404) {
							$state.go("404");
							dashboardService.hideLoading();
						}
						else $state.go("dashboard." + dashboardService.getViewMode());
					});
				},
				getAllArticles: function () {
					obj.resetArticles();
					dashboardService.setTitle("All");
					angular.forEach(feedsService.feedsDictionary, function (value, key) {
						angular.forEach(value.feeds, function (value, key) {
							promises.push(fetchArticles(value));
						});
					});
					return $q.all(promises).then(function () {
						obj.articles = temp_articles;
						dashboardService.hideLoading();
					});
				},
				getArticlesByFeed: function (feed) {
				    obj.resetArticles();
				    dashboardService.readSingleFeed.state = true;
				    dashboardService.setSortParam('date', 1);
					dashboardService.setTitle(feed.title);
					dashboardService.setFeedId(feed);
					return fetchArticles(feed).then(function () {
					    obj.articles = temp_articles;
						dashboardService.hideLoading();
					});
				},
				getArticlesByCat: function (cat) {
					obj.resetArticles();
					dashboardService.setTitle(cat);
					angular.forEach(feedsService.feedsDictionary, function (value, key) {
						if (value.category === cat) {
							angular.forEach(value.feeds, function (value, key) {
								promises.push(fetchArticles(value));
							});
						}
					});
					return $q.all(promises).then(function () {
						obj.articles = temp_articles;
						dashboardService.hideLoading();
					});
				},
				getFavourites: function () {
				    return $timeout(function () {
					    obj.resetArticles();
					    obj.isFavourites = true;
					    dashboardService.setTitle("Favourites");
					    angular.forEach(feedsService.favouritesDictionary, function (value, key) {
						    angular.forEach(value.articles, function (value, key) {
							    obj.articles.push(value);
						    });
					    });
					    dashboardService.hideLoading();
				    }, loadDelay);
				},
				getFavArticlesByCat: function (cat) {
				    return $timeout(function () {
					    obj.resetArticles();
					    obj.isFavourites = true;
					    dashboardService.setTitle("Favourites: " + cat);
					    angular.forEach(feedsService.favouritesDictionary, function (value, key) {
						    if (value.category === cat) {
							    angular.forEach(value.articles, function (value, key) {
								    obj.articles.push(value);
							    });
						    }
					    });
					    dashboardService.hideLoading();
				    }, loadDelay);
				},
				getFavArticle: function (article) {
				    obj.resetArticles();
				    dashboardService.hideSortList.state = true;
					obj.isFavourites = true;
					dashboardService.setTitle("Favourites");
					obj.articles.push(article);
					dashboardService.hideLoading();
				},
				addFavourite: function (article) {
					dashboardService.displayLoading();
					return $http.post('/users/' + authService.userID() + '/addFavArticle', article, {
						headers: {
							Authorization: 'Bearer ' + authService.getToken()
						}
					}).then(function (res) {
						feedsService.getAllFavourites();
						dashboardService.hideLoading();
					});
				},
				removeFavourite: function (article) {
					dashboardService.displayLoading();
					return $http.delete('/users/' + authService.userID() + '/deleteFavFeed/' + article._id + '/' + article.category, {
						headers: {
							Authorization: 'Bearer ' + authService.getToken()
						}
					}).then(function (res) {
						dashboardService.hideLoading();
					});
				},
				getAdvicedArticles: function () {
				    obj.advicedArticles.length = 0;
				    return $http.get('/users/' + authService.userID() + "/advicedArticles", {
				        headers: {
				            Authorization: 'Bearer ' + authService.getToken()
				        }
				    }).then(function (res) {
				        angular.copy(res.data, obj.advicedArticles);
				    }, function (err) {
				        console.log(err);
				    });
				},
				resetArticles: function () {
				    dashboardService.hideSortList.state = false;
				    dashboardService.readSingleFeed.state = false;
					this.totalDisplayed = this.displayedIncrement;
					dashboardService.displayLoading();
					temp_articles.length = 0;
					obj.articles.length = 0;
					obj.isFavourites = false;
					dashboardService.resetFeedId();
					promises.length = 0;
				},
				// Additional method for unit testing
				getArticlesFetcher: function () {
					return fetchArticles;
				}
			},
			getImage = function (item, format) {
				var source = "";
				if (format === "RSS") {
					if (!item.getElementsByTagName('enclosure').length) {
						try {
							source = $(item).find('media\\:content, content')[0].getAttribute('url');
						} catch (err) {
							source = "";
						}
						if (source == "" || source == undefined) {
							try {
								var content = document.createElement('div');
								content.innerHTML = item.getElementsByTagName('description')[0].textContent;
								source = $(content).find('img')[0].src;
							} catch (err) {
								source = "";
							}
						}
					} else {
						source = item.getElementsByTagName('enclosure')[0].getAttribute('url');
					}
				} else if (format === "ATOM") {
					if (!item.getElementsByTagName('enclosure').length) {
						try {
							var content = document.createElement('div');
							content.innerHTML = item.getElementsByTagName('content')[0].textContent;
							source = $(content).find('img')[0].src;
						} catch (err) {
							source = "";
						}
					}
				}
				return source;
			},
			getContent = function (item, format) {
				var content = "";
				if (format === "RSS") {
					try {
						content = document.createElement('div');
						content.innerHTML = item.getElementsByTagName('description')[0].textContent;
						content = $(content).text();
					} catch (err) {
					}
				} else if (format === "ATOM") {
				    content = $(item.getElementsByTagName('content')[0].childNodes[0].data).text();

				}
				if (typeof content !== 'string') {
				    return "";
				}
				else return content.toString();
			},
			fetchArticles = function (feed) {
				return $http.jsonp("https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=" + ARTICLES_NUM + "&q=" + encodeURIComponent(feed.rsslink) + "&method=JSONP&callback=JSON_CALLBACK&output=xml")
					.then(function (response) {
						var parser = new DOMParser(),
							xmlDoc = parser.parseFromString(response.data.responseData.xmlString, "text/xml"),
							items = [];
						if (feed.format === "RSS") {
							items = xmlDoc.getElementsByTagName('item');
							for (var i = 0; i < items.length; i++) {
								var articleObj = {
									title: items[i].getElementsByTagName('title')[0].innerHTML
										.replaceAll("apos;", '\'')
										.replaceAll("&apos;", '\'')
										.replaceAll("&amp;", ''),
									link: items[i].getElementsByTagName('link')[0].textContent,
									img: getImage(items[i], feed.format),
									content: getContent(items[i], feed.format),
									feed: feed._id
								};
								if (items[i].getElementsByTagName('pubDate')[0]) {
									articleObj.date = Date.parse(items[i].getElementsByTagName('pubDate')[0].textContent);
								}
								else if (!items[i].getElementsByTagName('pubDate')[0] && !articleObj.img && !articleObj.content) {
									continue;
								}
								articleObj.content = articleObj.content ? articleObj.content : articleObj.title;
								temp_articles.push(articleObj);
							}
						} else if (feed.format === "ATOM") {
							items = xmlDoc.getElementsByTagName('entry');
							for (var i = 0; i < items.length; i++) {
								var articleObj = {
									title: items[i].getElementsByTagName('title')[0].textContent,
									link: angular.element(items[i].getElementsByTagName('link'))[0].attributes["href"].value,
									img: getImage(items[i], feed.format),
									content: getContent(items[i], feed.format),
									date: Date.parse(items[i].getElementsByTagName('published')[0].textContent),
									feed: feed._id
								};
								articleObj.content = articleObj.content ? articleObj.content : articleObj.title;
								temp_articles.push(articleObj);
							}
						}
						dashboardService.loadingIcon = false;
						return response.data;
					});
			},
			getFeedDataById = function (id) {
				return $http.post('/users/' + authService.userID() + '/getFeedData', { id: id }, {
					headers: {
						Authorization: 'Bearer ' + authService.getToken()
					}
				});
			},
			getArticleDataByLink = function (link) {
				return $http.post('/users/' + authService.userID() + '/getFavArticle', { link: link }, {
					headers: {
						Authorization: 'Bearer ' + authService.getToken()
					}
				});
			}
		return obj;
	}]);
})();
(function () {
	'use strict';
	angular.module('rssreader').factory('authService', ['$http', '$window', '$auth', 'transfer', 'jwtHelper', 'toasterService', 'profileService', function ($http, $window, $auth, transfer, jwtHelper, toasterService, profileService) {
		var auth = {
			saveToken: function (token) {
				$auth.setToken(token);
			},
			getToken: function () {
				return $auth.getToken();
			},
			isLoggedIn: function () {
				return $auth.isAuthenticated();
			},
			currentUser: function () {
				return  profileService.refreshProfileData().email;
			},
			userID: function () {
				if (auth.isLoggedIn()) {
					var payload = $auth.getPayload();
					return payload.sub;
				}
			},
			register: function (user) {
				return $http.post('/register', user).success(function (data) {
					auth.saveToken(data.token);
				}).error(function (err) {
					console.log(err.message);
				})
			},
			forgot: function(confirm_email) {
				return $http.post('/forgot', confirm_email).success(function (data) {
				}).error(function (err) {
					console.log(err.message);		
				})

			}, 
			reset: function(password) {
				return $http.post('/reset/:token', password).success(function (data) {
				}).error(function (err) {
					console.log(err.message);	
				})
			},
			logIn: function (user) {
				return $http.post('/login', user).success(function (data) {
					auth.saveToken(data.token);
				}).error(function (err) {
					console.log(err.message);
				});
			},
			logOut: function () {
				$auth.removeToken();
				$auth.logout();
			}
		}
		return auth;
	}]);
})();

angular.module('rssreader').service('dashboardService', ['$window', function ($window) {
	var that = this;
	this.DEFAULT_VIEW = 2;
	this.currentArticlesType = 'all';
	this.currentArticlesValue = $window.localStorage.category;
	this.isReadingArticle = false;
	this.loadingIcon = false;
	this.readSingleFeed = {
	    state: false
	};

	this.hideSortList = {
	    state: false
	}

	this.displayLoading = function () {
	    that.loadingIcon = true;
	}

	this.hideLoading = function () {
	    that.loadingIcon = false;
	}
	this.sortParam = {
		type: 'date',
		order: 1
	};
	if ($window.localStorage.sortType) {
		this.sortParam.type = $window.localStorage.sortType;
		if ($window.localStorage.sortOrder) {
			this.sortParam.order = +$window.localStorage.sortOrder;
		}
	}
	else {
		$window.localStorage.sortType = this.sortParam.type;
		$window.localStorage.sortOrder = this.sortParam.order;
	}
	this.setSortParam = function (type, order) {
		this.sortParam.type = type;
		this.sortParam.order = order;
		$window.localStorage.sortType = this.sortParam.type;
		$window.localStorage.sortOrder = this.sortParam.order;
	}
	this.getSortParam = function () {
		return that.sortParam;
	}

	if (!$window.localStorage.articlesType) {
		$window.localStorage.articlesType = that.currentArticlesType;
	}

	if ($window.localStorage.category) {
		currentArticlesValue = $window.localStorage.category;
	}

	this.setCurrentArticlesType = function (type, value) {
		that.currentArticlesValue = null;
		that.currentArticlesType = type;
		$window.localStorage.articlesType = that.currentArticlesType;
		if (value) {
			that.currentArticlesValue = value;
			$window.localStorage.category = that.currentArticlesValue;
		}
	}
	this.getCurrentArticlesType = function () {
		that.currentArticlesType = $window.localStorage.articlesType;
		return that.currentArticlesType;
	}
	if (!$window.localStorage.viewMode) {
		$window.localStorage.viewMode = this.DEFAULT_VIEW;
	}
	this.isLoading = function () {
		return that.loadingIcon;
	};
	this.sidebar = false;
	this.checkSidebar = function () {
		return that.sidebar;
	}
	this.modalShown = false;
	this.currentViewMode = $window.localStorage.viewMode;
	this.viewModes = [
		'list',
		'th-list',
		'th-large'
	];
	this.resetViewMode = function () {
		$window.localStorage.viewMode = this.DEFAULT_VIEW;
	}
	this.setViewMode = function (index) {
		$window.localStorage.viewMode = index;
		if (index > that.viewModes.length - 1) {
			throw new Error("View mode you are trying to set is not defined");
		} else {
			that.currentViewMode = $window.localStorage.viewMode;
		}
	}
	this.getViewMode = function () {
		that.currentViewMode = $window.localStorage.viewMode;
		return that.viewModes[that.currentViewMode];
	}
	this.title = '';
	this.setTitle = function (title) {
		if (title == "Add Feed") {
			this.resetFeedId();
		}
		that.title = title;
	}
	this.getTitle = function () {
		return that.title;
	}

	this.currentFeed = null;
	this.getFeedId = function () {
		return that.currentFeed;
	}
	this.setFeedId = function (feed) {
		that.currentFeed = feed;
	}
	this.resetFeedId = function () {
		that.currentFeed = '';
	}
}]);
angular.module('rssreader').service('feedsService', ['$http', '$state', 'authService', 'dashboardService', function ($http, $state, authService, dashboardService) {
	that = this;
	this.feedsDictionary = [];
	this.favouritesDictionary = [];
	this.advicedDictionary = [];
	this.advicedFeeds = [];
	this.allArticles = [];
	this.CATEGORIES = ["News", "IT", "Sport", "Design", "Movies", "Music", "Culture", "Nature", "Gaming", "Food", "Economics", "Science"];
	this.allCategories = function () {
		var res = that.CATEGORIES.concat(getCustomCategories());
		res.push("Custom");
		return res;
	}
	this.allFavsCategories = function () {
		var res = that.CATEGORIES.concat(getFavsCustomCategories());
		res.push("Custom");
		return res;
	}
	var getCustomCategories = function () {
		var currentFeedsCats = (function () {
			var res = [];
			for (var i = 0; i < that.feedsDictionary.length; i++) {
				res.push(that.feedsDictionary[i].category);
			}
			return res;
		})();
		return currentFeedsCats.filter(function (elem, i, array) {
			return that.CATEGORIES.indexOf(elem) == -1;
		});
	}

	var getFavsCustomCategories = function () {
		var currentFeedsCats = (function () {
			var res = [];
			for (var i = 0; i < that.favouritesDictionary.length; i++) {
				res.push(that.favouritesDictionary[i].category);
			}
			return res;
		})();
		return currentFeedsCats.filter(function (elem, i, array) {
			return (that.CATEGORIES.indexOf(elem) == -1 && elem != 'Unsorted');
		});
	}
	this.getAllFeeds = function () {
		return $http.get('/users/' + authService.userID(), {
			headers: {
				Authorization: 'Bearer ' + authService.getToken()
			}
		}).then(function (res) {
			for (var i = 0; i < res.data.length; i++) {
				for (var j = 0; j < res.data[i].feeds.length; j++) {
					res.data[i].feeds[j].category = res.data[i].category;
				}
			}
			
			angular.copy(res.data, that.feedsDictionary);
			that.getAllFavourites();
		});
	}
	this.getAdvicedFeeds = function () {
	    dashboardService.displayLoading();
		return $http.get('/users/' + authService.userID() + "/advicedFeeds", {
			headers: {
				Authorization: 'Bearer ' + authService.getToken()
			}
		}).then(function (res) {
			angular.copy(res.data, that.advicedDictionary);
			dashboardService.hideLoading();
		});
	}
	this.getAllFavourites = function () {
		return $http.get('/users/' + authService.userID() + "/favourites", {
			headers: {
				Authorization: 'Bearer ' + authService.getToken()
			}
		}).then(function (res) {
			for (var i = 0; i < res.data.length; i++) {
				for (var j = 0; j < res.data[i].articles.length; j++) {
					res.data[i].articles[j].category = res.data[i].category;
				}
			}
			angular.copy(res.data, that.favouritesDictionary);
		});
	}
	var checkRssFormat = function (xmlDoc) {
		//Determine if RSS
		if (xmlDoc.getElementsByTagName('rss').length) {
			return 'RSS';
			//Determine if ATOM
		} else if (xmlDoc.getElementsByTagName('feed').length) {
			return 'ATOM';
		}
		return -1;
	}
	var generateFeed = function (doc, feed, format) {
		var feedObj = {};
		if (format === 'RSS') {
			var channel = doc.getElementsByTagName('channel')[0];
			feedObj.title = channel.getElementsByTagName('title')[0].childNodes[0].nodeValue;
			feedObj.description = channel.getElementsByTagName('description')[0].childNodes[0] ? channel.getElementsByTagName('description')[0].childNodes[0].nodeValue : '';
			feedObj.link = channel.getElementsByTagName("link")[0].childNodes[0].nodeValue;
			feedObj.rsslink = feed.link;
			feedObj.category = feed.category;
		} else if (format === 'ATOM') {
			feedObj.title = doc.getElementsByTagName('title')[0].childNodes[0].nodeValue;
			feedObj.description = '';
			feedObj.link = doc.getElementsByTagName('link')[0].getAttribute('href');
			feedObj.rsslink = feed.link;
			feedObj.category = feed.category;
		}
		feedObj.format = format;
		return feedObj;
	}
	this.getFeedGenerator = function () {
		return generateFeed;
	}
	this.getRssChecker = function () {
		return checkRssFormat;
	}
	this.addFeed = function (feed) {
		dashboardService.displayLoading();
		return $http.jsonp("https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=10&q=" + encodeURIComponent(feed.link) + "&method=JSON&callback=JSON_CALLBACK&output=xml")
			.then(function (response) {
					if (feed.link === undefined) {
						throw new Error("Enter Rss feed link");
					}
					if (feed.category === undefined) {
						throw new Error("Choose category");
					}
					if (response.data.responseData === null) {
						throw new Error("URL is incorrect or does not contain RSS Feed data");
					}
					var parser = new DOMParser();
					xmlDoc = parser.parseFromString(response.data.responseData.xmlString, "text/xml");
					var format = checkRssFormat(xmlDoc);
					if (format === -1) {
						throw new Error("URL is incorrect or does not contain RSS Feed data");
					} else {
						var feedObj = generateFeed(xmlDoc, feed, format);
						return $http.post('/users/' + authService.userID() + '/addFeed', feedObj, {
							headers: {
								Authorization: 'Bearer ' + authService.getToken()
							}
						}).error(function (err) {
							console.log(err);
							dashboardService.hideLoading();
						});
					}
				return response.data;
			});
	}

	this.removeFeed = function (feed) {
		return $http.delete('/users/' + authService.userID() + '/deleteFeed/' + feed._id + '/' + feed.category, {
			headers: {
				Authorization: 'Bearer ' + authService.getToken()
			}
		});
	}

	this.setFeedsOrder = function () {
		var obj = {
			newCategories: []
		}
		for (var i = 0; i < that.feedsDictionary.length; i++) {
			obj.newCategories.push(that.feedsDictionary[i].category);
		}
		return $http.post('/users/' + authService.userID() + '/setCategoryOrder', obj, {
			headers: {
				Authorization: 'Bearer ' + authService.getToken()
			}
		});
	}

	this.setFavsOrder = function () {
		var obj = {
			newCategories: []
		}
		for (var i = 0; i < that.favouritesDictionary.length; i++) {
			obj.newCategories.push(that.favouritesDictionary[i].category);
		}
		return $http.post('/users/' + authService.userID() + '/setFavsCategoryOrder', obj, {
			headers: {
				Authorization: 'Bearer ' + authService.getToken()
			}
		});
	}
}]);

function FeedsToJson(array) {
	var Jsonfriendly = [];
	for (var i = 0; i < array.length; i++) {
		var temp = {};
		angular.copy(array[i], temp);
		Jsonfriendly.push(temp);
		delete Jsonfriendly[i]._id;
		for (var j = 0; j < Jsonfriendly[i].feeds.length; j++) {
			delete Jsonfriendly[i].feeds[j].currentSubscriptions;
			delete Jsonfriendly[i].feeds[j].totalSubscriptions;
			delete Jsonfriendly[i].feeds[j].__v;
			delete Jsonfriendly[i].feeds[j].category;
		}
	}
}
(function() {
	'use strict';
	angular.module('rssreader')
		.factory('profileService', ['$window', 'Upload', 'accountInfo', '$auth',
			function($window, Upload, accountInfo, $auth) {
				var obj = {
					profile: {},
					getProfile: function() {
						if ($auth.isAuthenticated()) {
							return accountInfo.getProfile().then(function(response) {
								var length = response.data.user.length;
								for (var i = 0; i < length; i++) {
									if (response.data.user[i].email === $auth.getPayload().email) {
										obj.profile = response.data.user[i];
									}
								}
							});
						}
					},
					refreshProfileData: function() {
						return obj.profile;
					}
				}
				return obj;
			}
		]);
})();


(function() {
	'use strict';
	angular.module('rssreader').factory('themeService', ['$http', 'authService', '$window',
		function($http, authService, $window) {
			var thm = {
				layouts: [{
					name: 'Blue',
					url: 'theme1',
					src: 'assets/images/theme1.jpg'
				}, {
					name: 'Black',
					url: 'theme2',
					src: 'assets/images/theme2.jpg'
				}, {
					name: 'Grey',
					url: 'theme3',
					src: 'assets/images/theme3.jpg'
				}, {
					name: 'Black',
					url: 'theme4',
					src: 'assets/images/theme4.jpg'
				},],
				changeTheme: function(theme) {
					return $http.post('/users/' + authService.userID() + '/changeColorTheme', {
						colorTheme: theme
					}, {
						headers: {
							Authorization: 'Bearer ' + authService.getToken()
						}
					});
				}
			}
			return thm;
		}
	]);
})();
(function () {
	'use strict';
	angular.module('rssreader').service('toasterService', ['$rootScope', '$compile', '$animate', function ($rootScope, $compile, $animate) {
		var domParent = angular.element('body');

		//********************************************************************************
		//  You can pass custom options to toaster methods as second parameter
		//  options properties:
		//  message: string
		//  overlay: boolean
		//  delay: value (ms)
		//  position: [left, right, left-bottom, right-bottom]
		//  type: one of ['toaster-default', 'toaster-success', 'toaster-info', 'toaster-error']
		//  iconClass: string (name of glyph class, ex: fa fa-info)
		//  confirm: Function (callback that will ba called if user confirm toaster action)
		// 
		//********************************************************************************

		var buildToaster = function (options, scope, onShow) {
			var callback = arguments[2],
				elem = angular.element(document.createElement("toaster"));
			elem.addClass('toaster-wrapper');
			elem.addClass(options.type);
			if (options.overlay) {
				elem.attr("overlay", options.overlay);
			}

			if (options.delay) {
				elem.attr("delay", options.delay);
			}

			if (options.confirm) {
				elem.attr("confirm", options.confirm);
			}
			var icon = angular.element(document.createElement("div"));
			icon.addClass('toaster-icon');
			icon.addClass(options.iconClass);
			elem.append(icon);

			elem.append("<span>" + options.message + "</span>");
			if (options.htmlContent) {
				elem.append("<span>" + options.htmlContent + "</span>");
			}
			var appendHtml;
			if (typeof arguments[1] === 'object') {
				appendHtml = $compile(elem, scope)(scope.$new());
			}
			else {
				appendHtml = $compile(elem, scope)($rootScope.$new());
			}
			$animate.enter(appendHtml, domParent).then(function () {
				if (typeof callback === 'function') {
					onShow();
				}
			});
		}
		this.success = function (message, customOptions, scope, onShow) {
			var defaultOptions = {
				message: message,
				type: 'toaster-success',
				iconClass: 'fa fa-check',
				delay: 5000
			},
			options;
			if (typeof customOptions === 'object') {
				options = angular.extend({}, defaultOptions, customOptions);
			}
			else {
				options = defaultOptions;
			}
			buildToaster(options, scope, onShow);
		}
		this.info = function (message, customOptions, scope, onShow) {
			var defaultOptions = {
				message: message,
				type: 'toaster-info',
				iconClass: 'fa fa-info',
				delay: 5000
			},
			options;
			if (typeof arguments[1] === 'object') {
				options = angular.extend({}, defaultOptions, customOptions);
			}
			else {
				options = defaultOptions;
			}
			buildToaster(options, scope, onShow);
		}
		this.error = function (message, customOptions, scope, onShow) {
			var defaultOptions = {
				message: message,
				type: 'toaster-error',
				iconClass: 'fa fa-exclamation-triangle',
				delay: 3000
			},
			options;
			if (typeof arguments[1] === 'object') {
				options = angular.extend({}, defaultOptions, customOptions);
			}
			else {
				options = defaultOptions;
			}
			buildToaster(options, scope, onShow);
		}
		this.custom = function (customOptions, scope, onShow) {
			var defaultOptions = {
				message: message,
				type: 'toaster-default',
				overlay: true,
				iconClass: 'fa fa-info',
			},
			options;
			if (typeof arguments[0] === 'object') {
				options = angular.extend({}, defaultOptions, customOptions);
			}
			else {
				options = defaultOptions;
			}
			buildToaster(options, scope, onShow);
		}
		this.confirm = function (customOptions, scope, onShow) {
			var defaultOptions = {
				message: 'Confirm?',
				type: 'toaster-default',
				overlay: true,
				iconClass: 'fa fa-question',
				htmlContent: "<button class='app-btn-toaster-red' aria-label='Justify' ng-click='confirm()'>yes</button><button class='app-btn-toaster' aria-label='Justify' ng-click='reject()'>no</button>"
			},
			options;
			if (typeof customOptions === 'object') {
				options = angular.extend({}, defaultOptions, customOptions);
			}
			else {
				options = defaultOptions;
			}
			buildToaster(options, scope, onShow);
		}
		this.removeToaster = function (element) {
			$animate.leave(element, domParent).then(function () {
			});
		}
	}]);
})();
angular.module('rssreader')
	.factory('transfer', [function () {
		var obj = {}, str = '', providerString = '', email = '';

		function setEmail (data) {
			email = data;
		}
		function getEmail () {
			return email;
		}
		function setProviderString (data) {
			providerString = data;
		}
		function getProviderString () {
			return providerString;
		}
		function setString (data) {
			str = data;
		}
		function getString () {
			return str;
		}
		function setObj (data) {
			obj = data;
		}
		function getObj () {
			return obj;
		}
		return {
		  
			setObj : setObj,
			getObj : getObj,
			setString : setString,
			getString : getString,
			setProviderString : setProviderString,
			getProviderString : getProviderString,
			setEmail : setEmail,
			getEmail : getEmail
		}
	}]);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJhcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uICgpIHtcclxuXHQndXNlIHN0cmljdCc7XHJcblx0YW5ndWxhci5tb2R1bGUoJ3Jzc3JlYWRlcicsIFsndWkucm91dGVyJywgJ25nQW5pbWF0ZScsICduZ1ZhbGlkYXRlJywgJ25nRmlsZVVwbG9hZCcsICduZ1RvdWNoJywgJ2Zhdmljb24nLCAnZG5kTGlzdHMnLCAnc2F0ZWxsaXplcicsICdhbmd1bGFyLWp3dCcsICc3MjBrYi5zb2NpYWxzaGFyZScsICd1aS5ib290c3RyYXAnLCAnYW5ndWxhci1zY3JvbGwtYW5pbWF0ZSddKVxyXG5cdFx0LmNvbmZpZyhbJyRzdGF0ZVByb3ZpZGVyJywgJyR1cmxSb3V0ZXJQcm92aWRlcicsICckYXV0aFByb3ZpZGVyJywgZnVuY3Rpb24gKCRzdGF0ZVByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIsICRhdXRoUHJvdmlkZXIpIHtcclxuXHRcdFx0JHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZSgnaG9tZScpO1xyXG5cdFx0XHQkc3RhdGVQcm92aWRlclxyXG5cdFx0XHRcdC5zdGF0ZSgnaG9tZScsIHtcclxuXHRcdFx0XHRcdHVybDogJy9ob21lJyxcclxuXHRcdFx0XHRcdHRlbXBsYXRlVXJsOiAnLi9wYXJ0aWFscy9ob21lLmh0bWwnLFxyXG5cdFx0XHRcdFx0Y29udHJvbGxlcjogJ0hvbWVDb250cm9sbGVyJ1xyXG5cdFx0XHRcdH0pXHJcblx0XHRcdFx0LnN0YXRlKCc0MDQnLCB7XHJcblx0XHRcdFx0XHR1cmw6ICcvbm90LWZvdW5kJyxcclxuXHRcdFx0XHRcdHRlbXBsYXRlVXJsOiAnLi9wYXJ0aWFscy9zdGF0aWMvNDA0X3BhZ2UuaHRtbCcsXHJcblx0XHRcdFx0XHRjb250cm9sbGVyOiBbJyRzY29wZScsIGZ1bmN0aW9uICgkc3RhdGUpIHtcclxuXHRcdFx0XHRcdH1dXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHQuc3RhdGUoJ2xvZ2luJywge1xyXG5cdFx0XHRcdFx0dXJsOiAnL2xvZ2luJyxcclxuXHRcdFx0XHRcdHRlbXBsYXRlVXJsOiAnLi9wYXJ0aWFscy9hdXRoL2xvZ2luLmh0bWwnLFxyXG5cdFx0XHRcdFx0Y29udHJvbGxlcjogJ0F1dGhDb250cm9sbGVyJyxcclxuXHRcdFx0XHRcdG9uRW50ZXI6IFsnJHN0YXRlJywgJ2F1dGhTZXJ2aWNlJywgZnVuY3Rpb24gKCRzdGF0ZSwgYXV0aFNlcnZpY2UpIHtcclxuXHRcdFx0XHRcdFx0aWYgKGF1dGhTZXJ2aWNlLmlzTG9nZ2VkSW4oKSkge1xyXG5cdFx0XHRcdFx0XHRcdCRzdGF0ZS5nbygnaG9tZScpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdFx0LnN0YXRlKCdyZWdpc3RlcicsIHtcclxuXHRcdFx0XHRcdHVybDogJy9yZWdpc3RlcicsXHJcblx0XHRcdFx0XHR0ZW1wbGF0ZVVybDogJy4vcGFydGlhbHMvYXV0aC9yZWdpc3Rlci5odG1sJyxcclxuXHRcdFx0XHRcdGNvbnRyb2xsZXI6ICdBdXRoQ29udHJvbGxlcicsXHJcblx0XHRcdFx0XHRvbkVudGVyOiBbJyRzdGF0ZScsICdhdXRoU2VydmljZScsIGZ1bmN0aW9uICgkc3RhdGUsIGF1dGhTZXJ2aWNlKSB7XHJcblx0XHRcdFx0XHRcdGlmIChhdXRoU2VydmljZS5pc0xvZ2dlZEluKCkpIHtcclxuXHRcdFx0XHRcdFx0XHQkc3RhdGUuZ28oJ2hvbWUnKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fV1cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdC5zdGF0ZSgnZm9yZ290Jywge1xyXG5cdFx0XHRcdFx0dXJsOiAnL2ZvcmdvdCcsXHJcblx0XHRcdFx0XHR0ZW1wbGF0ZVVybDogJy4vcGFydGlhbHMvYXV0aC9mb3Jnb3QuaHRtbCcsXHJcblx0XHRcdFx0XHRjb250cm9sbGVyOiAnQXV0aENvbnRyb2xsZXInXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHQuc3RhdGUoJ3Jlc2V0Jywge1xyXG5cdFx0XHRcdFx0dXJsOiAnL3Jlc2V0Lzp0b2tlbi86ZW1haWwnLFxyXG5cdFx0XHRcdFx0dGVtcGxhdGVVcmw6ICcuL3BhcnRpYWxzL2F1dGgvcmVzZXQuaHRtbCcsXHJcblx0XHRcdFx0XHRjb250cm9sbGVyOiAnQXV0aENvbnRyb2xsZXInLFxyXG5cdFx0XHRcdFx0b25FbnRlciA6IFsnJHN0YXRlUGFyYW1zJywgJ3RyYW5zZmVyJywgZnVuY3Rpb24gKCRzdGF0ZVBhcmFtcywgdHJhbnNmZXIpIHtcclxuXHRcdFx0XHRcdFx0dHJhbnNmZXIuc2V0T2JqKCRzdGF0ZVBhcmFtcy50b2tlbik7XHJcblx0XHRcdFx0XHRcdHRyYW5zZmVyLnNldEVtYWlsKCRzdGF0ZVBhcmFtcy5lbWFpbCk7XHRcclxuXHRcdFx0XHRcdH1dXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHQuc3RhdGUoJ3ZlcmlmeScsIHtcclxuXHRcdFx0XHRcdHVybDogJy92ZXJpZnkvOnRva2VuLzplbWFpbCcsXHJcblx0XHRcdFx0XHR0ZW1wbGF0ZVVybDogJy4vcGFydGlhbHMvYXV0aC92ZXJpZnkuaHRtbCcsXHJcblx0XHRcdFx0XHRjb250cm9sbGVyOiAnQXV0aENvbnRyb2xsZXInLFxyXG5cdFx0XHRcdFx0b25FbnRlciA6IFsnJHN0YXRlUGFyYW1zJywgJ3RyYW5zZmVyJywgJ3RvYXN0ZXJTZXJ2aWNlJywgZnVuY3Rpb24gKCRzdGF0ZVBhcmFtcywgdHJhbnNmZXIsIHRvYXN0ZXJTZXJ2aWNlKSB7XHJcblx0XHRcdFx0XHRcdHRyYW5zZmVyLnNldEVtYWlsKCRzdGF0ZVBhcmFtcy5lbWFpbCk7XHJcblx0XHRcdFx0XHRcdHRyYW5zZmVyLnNldFN0cmluZygkc3RhdGVQYXJhbXMudG9rZW4pO1xyXG5cdFx0XHRcdFx0XHR0b2FzdGVyU2VydmljZS5pbmZvKCdZb3UgaGF2ZSBzdWNjZXNzZnVseSBhcHByb3ZlZCB5b3UgZW1haWwuIFBsZWFzZSByZWVudGVyIHlvdSBmaWVsZHMnKTtcclxuXHRcdFx0XHRcdH1dXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHQuc3RhdGUoJ3Byb2ZpbGUnLCB7XHJcblx0XHRcdFx0XHR1cmw6ICcvcHJvZmlsZScsXHJcblx0XHRcdFx0XHR0ZW1wbGF0ZVVybDogJy4vcGFydGlhbHMvYXV0aC9wcm9maWxlLmh0bWwnLFxyXG5cdFx0XHRcdFx0Y29udHJvbGxlcjogJ1Byb2ZpbGVDb250cm9sbGVyJyxcclxuXHRcdFx0XHRcdHJlc29sdmU6IHtcclxuXHRcdFx0XHRcdFx0cHJvZmlsZVByb21pc2U6IFsncHJvZmlsZVNlcnZpY2UnLCBmdW5jdGlvbihwcm9maWxlU2VydmljZSl7XHJcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHByb2ZpbGVTZXJ2aWNlLmdldFByb2ZpbGUoKTtcclxuXHRcdFx0XHRcdFx0fV1cclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRvbkVudGVyOiBbJyRzdGF0ZScsICdhdXRoU2VydmljZScsIGZ1bmN0aW9uICgkc3RhdGUsIGF1dGhTZXJ2aWNlKSB7XHJcblx0XHRcdFx0XHRcdGlmICghYXV0aFNlcnZpY2UuaXNMb2dnZWRJbigpKSB7XHJcblx0XHRcdFx0XHRcdFx0YXV0aFNlcnZpY2UubG9nT3V0KCk7XHJcblx0XHRcdFx0XHRcdFx0JHN0YXRlLmdvKCdob21lJyk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1dXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHQuc3RhdGUoXCJkYXNoYm9hcmRcIiwge1xyXG5cdFx0XHRcdFx0dXJsOiAnL2Rhc2hib2FyZCcsXHJcblx0XHRcdFx0XHR2aWV3czoge1xyXG5cdFx0XHRcdFx0XHQnJzoge1xyXG5cdFx0XHRcdFx0XHRcdHRlbXBsYXRlVXJsOiAnLi9wYXJ0aWFscy9kYXNoYm9hcmQvZGFzaGJvYXJkLmh0bWwnLFxyXG5cdFx0XHRcdFx0XHRcdGNvbnRyb2xsZXI6ICdEYXNoYm9hcmRDb250cm9sbGVyJ1xyXG5cdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHQnc2lkZWJhckBkYXNoYm9hcmQnOiB7XHJcblx0XHRcdFx0XHRcdFx0dGVtcGxhdGVVcmw6ICcuL3BhcnRpYWxzL2Rhc2hib2FyZC9zaWRlYmFyLmh0bWwnLFxyXG5cdFx0XHRcdFx0XHRcdGNvbnRyb2xsZXI6ICdTaWRlYmFyQ29udHJvbGxlcidcclxuXHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0J2ZlZWRIZWFkQGRhc2hib2FyZCc6IHtcclxuXHRcdFx0XHRcdFx0XHR0ZW1wbGF0ZVVybDogJy4vcGFydGlhbHMvZGFzaGJvYXJkL2ZlZWQtaGVhZC5odG1sJyxcclxuXHRcdFx0XHRcdFx0XHRjb250cm9sbGVyOiAnRGFzaGJvYXJkQ29udHJvbGxlcidcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHJlc29sdmU6IHtcclxuXHRcdFx0XHRcdFx0cHJvZmlsZVByb21pc2U6IFsncHJvZmlsZVNlcnZpY2UnLCBmdW5jdGlvbihwcm9maWxlU2VydmljZSl7XHJcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHByb2ZpbGVTZXJ2aWNlLmdldFByb2ZpbGUoKTtcclxuXHRcdFx0XHRcdFx0fV0sXHJcblx0XHRcdFx0XHRcdGZlZWRQcm9taXNlOiBbJ2ZlZWRzU2VydmljZScsIGZ1bmN0aW9uIChmZWVkc1NlcnZpY2UpIHtcclxuXHRcdFx0XHRcdFx0XHRyZXR1cm4gZmVlZHNTZXJ2aWNlLmdldEFsbEZlZWRzKCk7XHJcblx0XHRcdFx0XHRcdH1dXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0b25FbnRlcjogWydhcnRpY2xlc1NlcnZpY2UnLCBmdW5jdGlvbiAoYXJ0aWNsZXNTZXJ2aWNlKSB7XHJcblx0XHRcdFx0XHRcdGFydGljbGVzU2VydmljZS5nZXRBbGxBcnRpY2xlcygpO1xyXG5cdFx0XHRcdFx0fV1cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdC5zdGF0ZShcImRhc2hib2FyZC5saXN0XCIsIHtcclxuXHRcdFx0XHRcdHVybDogJy9saXN0JyxcclxuXHRcdFx0XHRcdHRlbXBsYXRlVXJsOiAnLi9wYXJ0aWFscy9saXN0L2xpc3QuaHRtbCcsXHJcblx0XHRcdFx0XHRjb250cm9sbGVyOiAnQXJ0aWNsZXNDb250cm9sbGVyJ1xyXG5cdFx0XHRcdH0pXHJcblx0XHRcdFx0LnN0YXRlKFwiZGFzaGJvYXJkLnRoLWxpc3RcIiwge1xyXG5cdFx0XHRcdFx0dXJsOiAnL3RoLWxpc3QnLFxyXG5cdFx0XHRcdFx0dGVtcGxhdGVVcmw6ICcuL3BhcnRpYWxzL2xpc3QvdGgtbGlzdC5odG1sJyxcclxuXHRcdFx0XHRcdGNvbnRyb2xsZXI6ICdBcnRpY2xlc0NvbnRyb2xsZXInXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHQuc3RhdGUoXCJkYXNoYm9hcmQudGgtbGFyZ2VcIiwge1xyXG5cdFx0XHRcdFx0dXJsOiAnL3RoLWxhcmdlJyxcclxuXHRcdFx0XHRcdHRlbXBsYXRlVXJsOiAnLi9wYXJ0aWFscy9saXN0L3RoLWxhcmdlLmh0bWwnLFxyXG5cdFx0XHRcdFx0Y29udHJvbGxlcjogJ0FydGljbGVzQ29udHJvbGxlcidcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdC5zdGF0ZShcImRhc2hib2FyZC5hZGRGZWVkXCIsIHtcclxuXHRcdFx0XHRcdHVybDogJy9hZGQnLFxyXG5cdFx0XHRcdFx0dGVtcGxhdGVVcmw6ICcuL3BhcnRpYWxzL2Rhc2hib2FyZC9hZGQtZmVlZC5odG1sJyxcclxuXHRcdFx0XHRcdGNvbnRyb2xsZXI6ICdGZWVkc0NvbnRyb2xsZXInLFxyXG5cdFx0XHRcdFx0b25FbnRlcjogWydkYXNoYm9hcmRTZXJ2aWNlJywgZnVuY3Rpb24gKGRhc2hib2FyZFNlcnZpY2UpIHtcclxuXHRcdFx0XHRcdFx0ZGFzaGJvYXJkU2VydmljZS5zZXRUaXRsZShcIkFkZCBGZWVkXCIpO1xyXG5cdFx0XHRcdFx0fV0sXHJcblx0XHRcdFx0XHRyZXNvbHZlOiB7XHJcblx0XHRcdFx0XHRcdGZlZWRQcm9taXNlOiBbJ2ZlZWRzU2VydmljZScsIGZ1bmN0aW9uIChmZWVkc1NlcnZpY2UpIHtcclxuXHRcdFx0XHRcdFx0XHRyZXR1cm4gZmVlZHNTZXJ2aWNlLmdldEFkdmljZWRGZWVkcygpO1xyXG5cdFx0XHRcdFx0XHR9XVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdFx0LnN0YXRlKFwiZGFzaGJvYXJkLmFkdmljZWRcIiwge1xyXG5cdFx0XHRcdFx0dXJsOiAnL2FkdmljZWQvOmNhdGVnb3J5JyxcclxuXHRcdFx0XHRcdHRlbXBsYXRlVXJsOiAnLi9wYXJ0aWFscy9kYXNoYm9hcmQvYWR2aWNlZC5odG1sJyxcclxuXHRcdFx0XHRcdGNvbnRyb2xsZXI6ICdGZWVkc0NvbnRyb2xsZXInLFxyXG5cdFx0XHRcdFx0cmVzb2x2ZToge1xyXG5cdFx0XHRcdFx0XHRmZWVkUHJvbWlzZTogWydmZWVkc1NlcnZpY2UnLCBmdW5jdGlvbiAoZmVlZHNTZXJ2aWNlKSB7XHJcblx0XHRcdFx0XHRcdFx0cmV0dXJuIGZlZWRzU2VydmljZS5nZXRBZHZpY2VkRmVlZHMoKTtcclxuXHRcdFx0XHRcdFx0fV1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdC5zdGF0ZShcImRhc2hib2FyZC5hcnRpY2xlXCIsIHtcclxuXHRcdFx0XHRcdHVybDogJy9hcnRpY2xlLzpmZWVkLzpsaW5rJyxcclxuXHRcdFx0XHRcdHRlbXBsYXRlVXJsOiAnLi9wYXJ0aWFscy9kYXNoYm9hcmQvYXJ0aWNsZS5odG1sJyxcclxuXHRcdFx0XHRcdGNvbnRyb2xsZXI6ICdBcnRpY2xlc0NvbnRyb2xsZXInLFxyXG5cdFx0XHRcdFx0cmVzb2x2ZToge1xyXG5cdFx0XHRcdFx0XHRhcnRpY2xlUHJvbWlzZTogWydhcnRpY2xlc1NlcnZpY2UnLCBmdW5jdGlvbiAoYXJ0aWNsZXNTZXJ2aWNlKSB7XHJcblx0XHRcdFx0XHRcdFx0cmV0dXJuIGFydGljbGVzU2VydmljZS5nZXRBZHZpY2VkQXJ0aWNsZXMoKTtcclxuXHRcdFx0XHRcdFx0fV1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdC5zdGF0ZShcImRhc2hib2FyZC5wcm9maWxlXCIsIHtcclxuXHRcdFx0XHRcdHVybDogJy9wcm9maWxlJyxcclxuXHRcdFx0XHRcdHRlbXBsYXRlVXJsOiAnLi9wYXJ0aWFscy9hdXRoL3Byb2ZpbGUuaHRtbCcsXHJcblx0XHRcdFx0XHRjb250cm9sbGVyOiAnUHJvZmlsZUNvbnRyb2xsZXInLFxyXG5cdFx0XHRcdFx0cmVzb2x2ZToge1xyXG5cdFx0XHRcdFx0XHRwcm9maWxlUHJvbWlzZTogWydwcm9maWxlU2VydmljZScsIGZ1bmN0aW9uIChwcm9maWxlU2VydmljZSkge1xyXG5cdFx0XHRcdFx0XHRcdHJldHVybiBwcm9maWxlU2VydmljZS5nZXRQcm9maWxlKCk7XHJcblx0XHRcdFx0XHRcdH1dXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0b25FbnRlcjogWyckc3RhdGUnLCAnYXV0aFNlcnZpY2UnLCBmdW5jdGlvbiAoJHN0YXRlLCBhdXRoU2VydmljZSkge1xyXG5cdFx0XHRcdFx0XHRpZiAoIWF1dGhTZXJ2aWNlLmlzTG9nZ2VkSW4oKSkge1xyXG5cdFx0XHRcdFx0XHRcdGF1dGhTZXJ2aWNlLmxvZ091dCgpO1xyXG5cdFx0XHRcdFx0XHRcdCRzdGF0ZS5nbygnaG9tZScpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcclxuXHRcdFx0JGF1dGhQcm92aWRlci50d2l0dGVyKHtcclxuXHRcdFx0XHRjbGllbnRJZDogJzc2ODcyMTIyNTk3MTU2MDQ0OCcsXHJcblx0XHRcdFx0dXJsOiAnL2F1dGgvdHdpdHRlcicsXHJcblx0XHRcdFx0YXV0aG9yaXphdGlvbkVuZHBvaW50OiAnaHR0cHM6Ly9hcGkudHdpdHRlci5jb20vb2F1dGgvYXV0aGVudGljYXRlJyxcclxuXHRcdFx0XHRyZWRpcmVjdFVyaTogd2luZG93LmxvY2F0aW9uLm9yaWdpbixcclxuXHRcdFx0XHRvYXV0aFR5cGU6ICcxLjAnLFxyXG5cdFx0XHRcdHBvcHVwT3B0aW9uczoge1xyXG5cdFx0XHRcdFx0d2lkdGg6IDQ5NSxcclxuXHRcdFx0XHRcdGhlaWdodDogNjQ1XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdFx0JGF1dGhQcm92aWRlci5saW5rZWRpbih7XHJcblx0XHRcdFx0Y2xpZW50SWQ6ICc3OGZmemVub3d0MTgwcScsXHJcblx0XHRcdFx0dXJsOiAnL2F1dGgvbGlua2VkaW4nLFxyXG5cdFx0XHRcdGF1dGhvcml6YXRpb25FbmRwb2ludDogJ2h0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS91YXMvb2F1dGgyL2F1dGhvcml6YXRpb24nLFxyXG5cdFx0XHRcdHJlZGlyZWN0VXJpOiB3aW5kb3cubG9jYXRpb24ub3JpZ2luLFxyXG5cdFx0XHRcdHJlcXVpcmVkVXJsUGFyYW1zOiBbJ3N0YXRlJ10sXHJcblx0XHRcdFx0c2NvcGVEZWxpbWl0ZXI6ICcgJyxcclxuXHRcdFx0XHRzdGF0ZTogJ1NUQVRFJyxcclxuXHRcdFx0XHRvYXV0aFR5cGU6ICcyLjAnLFxyXG5cdFx0XHRcdHBvcHVwT3B0aW9uczogeyB3aWR0aDogNTI3LCBoZWlnaHQ6IDU4MiB9XHJcblx0XHRcdH0pO1xyXG5cdFx0XHQkYXV0aFByb3ZpZGVyLmZhY2Vib29rKHtcclxuXHRcdFx0XHRjbGllbnRJZDogJzE3MzY4NjMxOTcwOTI4NCcsXHJcblx0XHRcdFx0bmFtZTogJ2ZhY2Vib29rJyxcclxuXHRcdFx0XHR1cmw6ICcvYXV0aC9mYWNlYm9vaycsXHJcblx0XHRcdFx0YXV0aG9yaXphdGlvbkVuZHBvaW50OiAnaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL3YyLjUvZGlhbG9nL29hdXRoJyxcclxuXHRcdFx0XHRyZWRpcmVjdFVyaTogd2luZG93LmxvY2F0aW9uLm9yaWdpbiArICcvJyxcclxuXHRcdFx0XHRyZXF1aXJlZFVybFBhcmFtczogWydkaXNwbGF5JywgJ3Njb3BlJ10sXHJcblx0XHRcdFx0c2NvcGU6IFsnZW1haWwnXSxcclxuXHRcdFx0XHRzY29wZURlbGltaXRlcjogJywnLFxyXG5cdFx0XHRcdGRpc3BsYXk6ICdwb3B1cCcsXHJcblx0XHRcdFx0b2F1dGhUeXBlOiAnMi4wJyxcclxuXHRcdFx0XHRwb3B1cE9wdGlvbnM6IHtcclxuXHRcdFx0XHRcdHdpZHRoOiA1ODAsXHJcblx0XHRcdFx0XHRoZWlnaHQ6IDQwMFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHQkYXV0aFByb3ZpZGVyLmdvb2dsZSh7XHJcblx0XHRcdFx0Y2xpZW50SWQ6ICc4MDY2NzcwOTc4NjUtdmEyaTNrcTk2bW11OGkwMHQ5azZxOTJrczFzOXRnMGwuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20nLFxyXG5cdFx0XHRcdHVybDogJy9hdXRoL2dvb2dsZScsXHJcblx0XHRcdFx0YXV0aG9yaXphdGlvbkVuZHBvaW50OiAnaHR0cHM6Ly9hY2NvdW50cy5nb29nbGUuY29tL28vb2F1dGgyL2F1dGgnLFxyXG5cdFx0XHRcdHJlZGlyZWN0VXJpOiB3aW5kb3cubG9jYXRpb24ub3JpZ2luLFxyXG5cdFx0XHRcdHJlcXVpcmVkVXJsUGFyYW1zOiBbJ3Njb3BlJ10sXHJcblx0XHRcdFx0b3B0aW9uYWxVcmxQYXJhbXM6IFsnZGlzcGxheSddLFxyXG5cdFx0XHRcdHNjb3BlOiBbJ3Byb2ZpbGUnLCAnZW1haWwnXSxcclxuXHRcdFx0XHRzY29wZVByZWZpeDogJ29wZW5pZCcsXHJcblx0XHRcdFx0c2NvcGVEZWxpbWl0ZXI6ICcgJyxcclxuXHRcdFx0XHRkaXNwbGF5OiAncG9wdXAnLFxyXG5cdFx0XHRcdG9hdXRoVHlwZTogJzIuMCcsXHJcblx0XHRcdFx0cG9wdXBPcHRpb25zOiB7XHJcblx0XHRcdFx0XHR3aWR0aDogNDUyLFxyXG5cdFx0XHRcdFx0aGVpZ2h0OiA2MzNcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdH1dKTtcclxufSkoKTtcbihmdW5jdGlvbiAoKSB7XHJcblx0J3VzZSBzdHJpY3QnO1xyXG5cdGFuZ3VsYXIubW9kdWxlKCdyc3NyZWFkZXInKS5jb250cm9sbGVyKCdBcnRpY2xlc0NvbnRyb2xsZXInLCBbJyRzY29wZScsICckc3RhdGUnLCAnJHdpbmRvdycsICckc3RhdGVQYXJhbXMnLCAndG9hc3RlclNlcnZpY2UnLCAnZGF0ZUZpbHRlcicsICdmZWVkc1NlcnZpY2UnLCAnYXJ0aWNsZXNTZXJ2aWNlJywgJ2Rhc2hib2FyZFNlcnZpY2UnLCBmdW5jdGlvbiAoJHNjb3BlLCAkc3RhdGUsICR3aW5kb3csICRzdGF0ZVBhcmFtcywgdG9hc3RlclNlcnZpY2UsIGRhdGVGaWx0ZXIsIGZlZWRzU2VydmljZSwgYXJ0aWNsZXNTZXJ2aWNlLCBkYXNoYm9hcmRTZXJ2aWNlKSB7XHJcblx0XHQkc2NvcGUuYXJ0aWNsZURhdGEgPSBhcnRpY2xlc1NlcnZpY2U7XHJcblx0XHQkc2NvcGUub2JqID0ge307XHJcblx0XHQkc2NvcGUubmV3Q2F0ZWdvcnkgPSB7fTtcclxuXHRcdCRzY29wZS5jYXRlZ29yaWVzID0gZmVlZHNTZXJ2aWNlLmFsbEZhdnNDYXRlZ29yaWVzO1xyXG5cdFx0JHNjb3BlLmVycm9yID0gbnVsbDtcclxuXHRcdCRzY29wZS5tb2RhbFNob3duID0gZmFsc2U7XHJcblx0XHQkc2NvcGUuYXJ0aWNsZXMgPSAkc2NvcGUuYXJ0aWNsZURhdGEuYXJ0aWNsZXM7XHJcblx0XHQkc2NvcGUuYWR2aWNlZCA9ICRzY29wZS5hcnRpY2xlRGF0YS5hZHZpY2VkQXJ0aWNsZXM7XHJcblx0XHQkc2NvcGUuaXNGYXZvdXJpdGVzID0gJHNjb3BlLmFydGljbGVEYXRhLmNoZWNrSWZGYXZvdXJpdGVzO1xyXG5cdFx0JHNjb3BlLmZhdkZvckFkZCA9IG51bGw7XHJcblx0XHQkc2NvcGUuZmF2Rm9yUmVtb3ZlID0gbnVsbDtcclxuXHRcdCRzY29wZS5hcnRpY2xlRm9yU2hhcmUgPSBudWxsO1xyXG5cdFx0JHNjb3BlLmFydGljbGVGb3JSZWFkID0gbnVsbDtcclxuXHRcdCRzY29wZS5hZGRpbmdOZXdGYXZDYXRlZ29yeSA9IGZhbHNlO1xyXG5cclxuXHRcdCR3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XHJcblxyXG5cdFx0aWYgKCRzdGF0ZVBhcmFtcy5mZWVkICYmICRzdGF0ZVBhcmFtcy5saW5rKSB7XHJcblx0XHRcdGRhc2hib2FyZFNlcnZpY2UuaXNSZWFkaW5nQXJ0aWNsZSA9IHRydWU7XHJcblx0XHRcdGFydGljbGVzU2VydmljZS5zZXRSZWFkQXJ0aWNsZSgkc2NvcGUsICRzdGF0ZVBhcmFtcy5mZWVkLCAkc3RhdGVQYXJhbXMubGluayk7XHJcblx0XHR9XHJcblx0XHRlbHNlIHtcclxuXHRcdFx0ZGFzaGJvYXJkU2VydmljZS5pc1JlYWRpbmdBcnRpY2xlID0gZmFsc2U7XHJcblx0XHRcdGlmIChmZWVkc1NlcnZpY2UuZmVlZHNEaWN0aW9uYXJ5Lmxlbmd0aCA8IDEgJiYgISRzY29wZS5pc0Zhdm91cml0ZXMoKSkge1xyXG5cdFx0XHRcdCRzdGF0ZS5nbyhcImRhc2hib2FyZC5hZGRGZWVkXCIpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0JHNjb3BlLmNoZWNrSWZGYXZvdXJpdGVzID0gZnVuY3Rpb24gKGFydGljbGUpIHtcclxuXHRcdFx0aWYgKCFhcnRpY2xlKSB7XHJcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmICgkc2NvcGUuaXNGYXZvdXJpdGVzKCkpIHtcclxuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdFx0fVxyXG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGZlZWRzU2VydmljZS5mYXZvdXJpdGVzRGljdGlvbmFyeS5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgZmVlZHNTZXJ2aWNlLmZhdm91cml0ZXNEaWN0aW9uYXJ5W2ldLmFydGljbGVzLmxlbmd0aDsgaisrKSB7XHJcblx0XHRcdFx0XHRpZiAoZmVlZHNTZXJ2aWNlLmZhdm91cml0ZXNEaWN0aW9uYXJ5W2ldLmFydGljbGVzW2pdLmxpbmsgPT09IGFydGljbGUubGluaykge1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fVxyXG5cclxuXHRcdCRzY29wZS5sb2FkTW9yZSA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0JHNjb3BlLmFydGljbGVEYXRhLnRvdGFsRGlzcGxheWVkICs9ICRzY29wZS5hcnRpY2xlRGF0YS5kaXNwbGF5ZWRJbmNyZW1lbnQ7XHJcblx0XHR9O1xyXG5cclxuXHRcdCRzY29wZS5pc0FsbERpc3BsYXllZCA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0cmV0dXJuICRzY29wZS5hcnRpY2xlRGF0YS50b3RhbERpc3BsYXllZCA+ICRzY29wZS5hcnRpY2xlRGF0YS5hcnRpY2xlcy5sZW5ndGg7XHJcblx0XHR9XHJcblxyXG5cdFx0JHNjb3BlLmdldEFydGljbGVzID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRyZXR1cm4gYXJ0aWNsZXNTZXJ2aWNlLmFydGljbGVzO1xyXG5cdFx0fVxyXG5cclxuXHRcdCRzY29wZS5nZXRTb3J0UGFyYW0gPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdHZhciBzb3J0UGFyYW0gPSBkYXNoYm9hcmRTZXJ2aWNlLmdldFNvcnRQYXJhbSgpO1xyXG5cdFx0XHRpZiAoc29ydFBhcmFtLnR5cGUgPT09ICdmZWVkJykge1xyXG5cdFx0XHRcdHJldHVybiBbJ2ZlZWQnLCAnZGF0ZSddO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiBzb3J0UGFyYW07XHJcblx0XHR9XHJcblxyXG5cdFx0JHNjb3BlLmNoZWNrSWZOZXcgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdGlmICgkc2NvcGUub2JqLmNhdGVnb3J5LnRvVXBwZXJDYXNlKCkgPT0gJ2N1c3RvbScudG9VcHBlckNhc2UoKSkge1xyXG5cdFx0XHRcdCRzY29wZS5hZGRpbmdOZXdGYXZDYXRlZ29yeSA9IHRydWU7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0JHNjb3BlLmFkZGluZ05ld0ZhdkNhdGVnb3J5ID0gZmFsc2U7XHJcblx0XHRcdFx0JHNjb3BlLm5ld0NhdGVnb3J5ID0ge307XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0JHNjb3BlLmFkZEZhdm91cml0ZSA9IGZ1bmN0aW9uIChhcnRpY2xlKSB7XHJcblx0XHQgICAgJHNjb3BlLmFkZGluZ05ld0ZhdkNhdGVnb3J5ID0gZmFsc2U7XHJcblx0XHRcdCRzY29wZS5lcnJvciA9IG51bGw7XHJcblx0XHRcdCRzY29wZS5tb2RhbFNob3duID0gISRzY29wZS5tb2RhbFNob3duO1xyXG5cdFx0XHQkc2NvcGUuZmF2Rm9yQWRkID0gYXJ0aWNsZTtcclxuXHRcdFx0JHNjb3BlLm9iaiA9IHt9O1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHQkc2NvcGUuY29uZmlybUFkZEZhdm91cml0ZSA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdCAgICAkc2NvcGUuZXJyb3IgPSAnJztcclxuXHRcdCAgICAvL2NvbnNvbGUubG9nKCRzY29wZS5vYmouY2F0ZWdvcnkpO1xyXG5cdFx0ICAgIC8vY29uc29sZS5sb2coJHNjb3BlLm5ld0NhdGVnb3J5LmNhdGVnb3J5KTtcclxuXHRcdFx0aWYgKCRzY29wZS5uZXdDYXRlZ29yeS5jYXRlZ29yeSkge1xyXG5cdFx0XHRcdCRzY29wZS5vYmouY2F0ZWdvcnkgPSAkc2NvcGUubmV3Q2F0ZWdvcnkuY2F0ZWdvcnk7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKCRzY29wZS5vYmouY2F0ZWdvcnkpIHtcclxuXHRcdFx0XHRpZiAoISRzY29wZS5uZXdDYXRlZ29yeS5jYXRlZ29yeSAmJiAkc2NvcGUub2JqLmNhdGVnb3J5LnRvVXBwZXJDYXNlKCkgPT0gJ2N1c3RvbScudG9VcHBlckNhc2UoKSkge1xyXG5cdFx0XHRcdFx0JHNjb3BlLmVycm9yID0gXCJFbnRlciBuZXcgY2F0ZWdvcnkgbmFtZVwiO1xyXG5cdFx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRcclxuXHRcdFx0JHNjb3BlLmZhdkZvckFkZC5jYXRlZ29yeSA9ICRzY29wZS5vYmouY2F0ZWdvcnk7XHJcblx0XHRcdGFydGljbGVzU2VydmljZS5hZGRGYXZvdXJpdGUoJHNjb3BlLmZhdkZvckFkZCkudGhlbihmdW5jdGlvbiAocmVzKSB7XHJcblx0XHRcdFx0JHNjb3BlLnJlc2V0QWRkRmF2VmFsdWVzKCk7XHJcblx0XHRcdFx0JHNjb3BlLmNhbmNlbEFkZEZhdm91cml0ZSgpO1xyXG5cdFx0XHRcdHRvYXN0ZXJTZXJ2aWNlLnN1Y2Nlc3MoXCJBcnRpY2xlIG1hcmtlZCBhcyBmYXZvdXJpdGVcIik7XHJcblx0XHRcdH0sIGZ1bmN0aW9uIChlcnIpIHtcclxuXHRcdFx0XHQkc2NvcGUucmVzZXRBZGRGYXZWYWx1ZXMoKTtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhlcnIpO1xyXG5cdFx0XHRcdGlmICghZXJyLmRhdGEpXHJcblx0XHRcdFx0XHQkc2NvcGUuZXJyb3IgPSBlcnIubWVzc2FnZTtcclxuXHRcdFx0XHRlbHNlICRzY29wZS5lcnJvciA9IGVyci5kYXRhLm1lc3NhZ2U7XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cclxuXHRcdCRzY29wZS5yZXNldEFkZEZhdlZhbHVlcyA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0ZGFzaGJvYXJkU2VydmljZS5oaWRlTG9hZGluZygpO1xyXG5cdFx0XHQkc2NvcGUubmV3Q2F0ZWdvcnkgPSB7fTtcclxuXHRcdFx0JHNjb3BlLm9iaiA9IHt9O1xyXG5cdFx0XHQkc2NvcGUuYWRkaW5nTmV3RmF2Q2F0ZWdvcnkgPSBmYWxzZTtcclxuXHRcdH1cclxuXHJcblx0XHQkc2NvcGUuY2FuY2VsQWRkRmF2b3VyaXRlID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0XHQkc2NvcGUubW9kYWxTaG93biA9IGZhbHNlO1xyXG5cdFx0XHQkc2NvcGUuZmF2Rm9yQWRkID0ge307XHJcblx0XHRcdCRzY29wZS5uZXdDYXRlZ29yeSA9IHt9O1xyXG5cdFx0fVxyXG5cclxuXHRcdCRzY29wZS5zaGFyZSA9IGZ1bmN0aW9uIChhcnRpY2xlKSB7XHJcblx0XHRcdCRzY29wZS5lcnJvciA9IG51bGw7XHJcblx0XHRcdCRzY29wZS5hcnRpY2xlRm9yU2hhcmUgPSBhcnRpY2xlO1xyXG5cdFx0fVxyXG5cclxuXHRcdCRzY29wZS5jYW5jZWxTaGFyaW5nID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0XHQkc2NvcGUubW9kYWxTaGFyZVNob3duID0gZmFsc2U7XHJcblx0XHRcdCRzY29wZS5hcnRpY2xlRm9yU2hhcmUgPSB7fTtcclxuXHRcdH1cclxuXHJcblx0XHQkc2NvcGUucmVtb3ZlRmF2b3VyaXRlID0gZnVuY3Rpb24gKGFydGljbGUpIHtcclxuXHRcdFx0JHNjb3BlLmZhdkZvclJlbW92ZSA9IGFydGljbGU7XHJcblx0XHRcdHRvYXN0ZXJTZXJ2aWNlLmNvbmZpcm0oe1xyXG5cdFx0XHRcdG1lc3NhZ2U6IFwiUmVtb3ZlIHRoaXMgYXJ0aWNsZT9cIixcclxuXHRcdFx0XHRjb25maXJtOiBcImNvbmZpcm1SZW1vdmVGYXZvdXJpdGVcIlxyXG5cdFx0XHR9LCAkc2NvcGUpO1xyXG5cdFx0fVxyXG5cclxuXHRcdCRzY29wZS5jb25maXJtUmVtb3ZlRmF2b3VyaXRlID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRhcnRpY2xlc1NlcnZpY2UucmVtb3ZlRmF2b3VyaXRlKCRzY29wZS5mYXZGb3JSZW1vdmUpLnRoZW4oZnVuY3Rpb24gKHJlcykge1xyXG5cdFx0XHRcdHRvYXN0ZXJTZXJ2aWNlLmluZm8oXCJBcnRpY2xlIHJlbW92ZWQgZnJvbSBmYXZvdXJpdGVzXCIpO1xyXG5cdFx0XHRcdCRzdGF0ZS5yZWxvYWQoXCJkYXNoYm9hcmRcIik7XHJcblx0XHRcdH0sIGZ1bmN0aW9uIChlcnIpIHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhlcnIpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHJcblx0XHQkc2NvcGUuZ2V0QXJ0aWNsZURhdGUgPSBmdW5jdGlvbiAoZGF0ZSkge1xyXG5cdFx0XHRpZiAoIWRhdGUpIHtcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdH07XHJcblx0XHRcdHJldHVybiBkYXRlRmlsdGVyKG5ldyBEYXRlKGRhdGUpLCBcImRkL01NL3l5IEhIOm1tXCIpO1xyXG5cdFx0fVxyXG5cclxuXHRcdCRzY29wZS5yZWFkQXJ0aWNsZSA9IGZ1bmN0aW9uIChhcnRpY2xlKSB7XHJcblx0XHRcdCRzdGF0ZS5nbyhcImRhc2hib2FyZC5hcnRpY2xlXCIsIHtmZWVkOiBhcnRpY2xlLmZlZWQsIGxpbms6IGFydGljbGUubGlua30pO1xyXG5cdFx0fVxyXG5cdH1dKTtcclxufSkoKTtcbihmdW5jdGlvbigpIHtcclxuXHRcclxuXHRhbmd1bGFyLm1vZHVsZSgncnNzcmVhZGVyJykuY29uZmlnKFsnJHZhbGlkYXRvclByb3ZpZGVyJywgZnVuY3Rpb24oJHZhbGlkYXRvclByb3ZpZGVyKSB7XHJcblx0XHQkdmFsaWRhdG9yUHJvdmlkZXIuYWRkTWV0aG9kKFwicGF0dGVyblwiLCBmdW5jdGlvbih2YWx1ZSwgZWxlbWVudCkge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5vcHRpb25hbChlbGVtZW50KSB8fCAvXig/PS4qW2Etel0pKD89LipbQS1aXSkoPz0uKlxcZCkoPz0uKihffFteXFx3XSkpLns2LDIwfS8udGVzdCh2YWx1ZSk7XHJcblx0XHR9LCBcIlBhc3N3b3JkIG11c3QgY29udGFpbiAoYS16LEEtWiwwLTksIUAjKVwiKTtcclxuXHRcdCR2YWxpZGF0b3JQcm92aWRlci5hZGRNZXRob2QoXCJlbWFpbFwiLCBmdW5jdGlvbih2YWx1ZSwgZWxlbWVudCkge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5vcHRpb25hbChlbGVtZW50KSB8fCAvXihbYS16QS1aMC05Xy1dK1xcLikqW2EtekEtWjAtOV8tXStAW2EtejAtOV8tXSsoXFwuW2EtejAtOV8tXSspKlxcLlthLXpdezIsNn0kLy50ZXN0KHZhbHVlKTtcclxuXHRcdH0sIFwidGV4dFwiKTtcclxuXHR9XSkuXHJcblx0Y29udHJvbGxlcignQXV0aENvbnRyb2xsZXInLCBbJyRzY29wZScsICckc3RhdGUnLCAnYXV0aFNlcnZpY2UnLCAnJHdpbmRvdycsICdkYXNoYm9hcmRTZXJ2aWNlJywgJyRhdXRoJywgJ3RyYW5zZmVyJywgJ2p3dEhlbHBlcicsICd0b2FzdGVyU2VydmljZScsIFxyXG5cdFx0ZnVuY3Rpb24gKCRzY29wZSwgJHN0YXRlLCBhdXRoU2VydmljZSwgJHdpbmRvdywgZGFzaGJvYXJkU2VydmljZSwgJGF1dGgsIHRyYW5zZmVyLCBqd3RIZWxwZXIsIHRvYXN0ZXJTZXJ2aWNlKSB7XHJcblx0XHQkc2NvcGUudXNlciA9IHtcclxuXHRcdFx0dmVyaWZ5RW1haWwgOiB0cmFuc2Zlci5nZXRTdHJpbmcoKSxcclxuXHRcdFx0Y291bnRlciA6IDBcclxuXHRcdH07XHJcblx0XHR0cmFuc2Zlci5zZXRTdHJpbmcoXCJcIik7XHJcblx0XHQkc2NvcGUuc2V0RW1haWwgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdHJldHVybiB0cmFuc2Zlci5nZXRFbWFpbCgpO1xyXG5cdFx0fVxyXG5cdFx0JHNjb3BlLnBhc3N3b3JkID0ge1xyXG5cdFx0XHR0b2tlbiA6IHRyYW5zZmVyLmdldE9iaigpLFxyXG5cdFx0XHRlbWFpbCA6IHRyYW5zZmVyLmdldEVtYWlsKClcclxuXHRcdH07XHJcblx0XHQkc2NvcGUuY29uZmlybV9lbWFpbCA9IHt9O1xyXG5cdFx0JHNjb3BlLnNlc3Npb247XHJcblx0XHQkc2NvcGUudGVzdCA9IDU7XHJcblxyXG5cdFx0dmFyIEVSUk9SUyA9IHtcclxuXHRcdFx0ZmllbGRfcmVxdWlyZWQ6ICdUaGlzIGZpZWxkIGlzIHJlcXVpcmVkJyxcclxuXHRcdFx0ZW1haWxfZXhhbXBsZTogJ1BsZWFzZSwgdXNlIGV4YW1wbGU6IGphY2tzcGFycm93QGdtYWlsLmNvbScsXHJcblx0XHRcdG1pbl82c3ltYmw6ICdQbGVhc2UsIGVudGVyIGF0IGxlYXN0IDYgY2hhcmFjdGVycycsXHJcblx0XHRcdG1pbl85c3ltYmw6ICdQbGVhc2UsIGVudGVyIGF0IGxlYXN0IDkgY2hhcmFjdGVycycsXHJcblx0XHRcdG1heF8yMHN5bWJsOiAnUGxlYXNlLCBlbnRlciBubyBtb3JlIHRoZW4gNDAgY2hhcmFjdGVycycsXHJcblx0XHRcdHJlZ19leHA6ICdQYXNzd29yZCBtdXN0IGNvbnRhaW4gKGEteixBLVosMC05LCFAIyknXHJcblx0XHR9XHJcblxyXG5cdFx0JHNjb3BlLnJlZ2lzdGVyID0gZnVuY3Rpb24gKGZvcm0pIHtcclxuXHRcdFx0aWYgKGZvcm0udmFsaWRhdGUoKSkge1xyXG5cdFx0XHRcdGRhc2hib2FyZFNlcnZpY2UubG9hZGluZ0ljb24gPSB0cnVlO1xyXG5cdFx0XHRcdGlmKCRzY29wZS51c2VyLnZlcmlmeUVtYWlsKXtcclxuXHRcdFx0XHRcdCRzY29wZS51c2VyLmVtYWlsID0gdHJhbnNmZXIuZ2V0RW1haWwoKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0YXV0aFNlcnZpY2UucmVnaXN0ZXIoJHNjb3BlLnVzZXIpLmVycm9yKGZ1bmN0aW9uIChlcnJvcikge1xyXG5cdFx0XHRcdCAgICAkc2NvcGUuZXJyb3IgPSBlcnJvcjtcclxuXHRcdFx0XHQgICAgZGFzaGJvYXJkU2VydmljZS5sb2FkaW5nSWNvbiA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0aWYoZXJyb3IubWVzc2FnZVswXSA9PT0gXCJGXCIpe1xyXG5cdFx0XHRcdFx0XHR0b2FzdGVyU2VydmljZS5pbmZvKGVycm9yLm1lc3NhZ2UpO1x0XHRcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdHRvYXN0ZXJTZXJ2aWNlLmVycm9yKGVycm9yLm1lc3NhZ2UpO1xyXG5cdFx0XHRcdH0pLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcblx0XHRcdFx0ICAgIGRhc2hib2FyZFNlcnZpY2UubG9hZGluZ0ljb24gPSBmYWxzZTtcclxuXHRcdFx0XHRcdHRvYXN0ZXJTZXJ2aWNlLnN1Y2Nlc3MoJ1lvdSBoYXZlIHN1Y2Nlc3NmdWxseSByZWdpc3RlcmVkJyk7XHJcblx0XHRcdFx0XHQkc3RhdGUuZ28oJ2Rhc2hib2FyZC4nICsgZGFzaGJvYXJkU2VydmljZS5nZXRWaWV3TW9kZSgpLCB7XHJcblx0XHRcdFx0XHRcdGlkOiBhdXRoU2VydmljZS51c2VySUQoKVxyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHQkc2NvcGUudXNlci5jb3VudGVyICsrO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cclxuXHRcdCRzY29wZS5sb2dJbiA9IGZ1bmN0aW9uIChmb3JtKSB7XHJcblx0XHQgICAgaWYgKGZvcm0udmFsaWRhdGUoKSkge1xyXG5cdFx0ICAgICAgICBkYXNoYm9hcmRTZXJ2aWNlLmxvYWRpbmdJY29uID0gdHJ1ZTtcclxuXHRcdCAgICAgICAgYXV0aFNlcnZpY2UubG9nSW4oJHNjb3BlLnVzZXIsICRzY29wZS5zZXNzaW9uKS5lcnJvcihmdW5jdGlvbiAoZXJyb3IpIHtcclxuXHRcdCAgICAgICAgICAgIGRhc2hib2FyZFNlcnZpY2UubG9hZGluZ0ljb24gPSBmYWxzZTtcclxuXHRcdFx0XHRcdCRzY29wZS5lcnJvciA9IGVycm9yO1xyXG5cdFx0XHRcdH0pLnRoZW4oZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdFx0aWYgKCEkc2NvcGUuc2Vzc2lvbikge1xyXG5cdFx0XHRcdFx0XHQkc2NvcGUub25FeGl0ID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdFx0XHRcdGF1dGgubG9nT3V0KCk7XHJcblx0XHRcdFx0XHRcdH07XHJcblx0XHRcdFx0XHRcdGRhc2hib2FyZFNlcnZpY2UubG9hZGluZ0ljb24gPSBmYWxzZTtcclxuXHRcdFx0XHRcdFx0JHN0YXRlLmdvKCdkYXNoYm9hcmQuJyArIGRhc2hib2FyZFNlcnZpY2UuZ2V0Vmlld01vZGUoKSwge1xyXG5cdFx0XHRcdFx0XHRcdGlkOiBhdXRoU2VydmljZS51c2VySUQoKVxyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0dG9hc3RlclNlcnZpY2Uuc3VjY2VzcygnWW91IGhhdmUgc3VjY2Vzc2Z1bGx5IGxvZ2luJyk7XHJcblx0XHRcdFx0XHRcdCR3aW5kb3cub25iZWZvcmV1bmxvYWQgPSAkc2NvcGUub25FeGl0O1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0JHN0YXRlLmdvKCdkYXNoYm9hcmQuJyArIGRhc2hib2FyZFNlcnZpY2UuZ2V0Vmlld01vZGUoKSwge1xyXG5cdFx0XHRcdFx0XHRcdGlkOiBhdXRoU2VydmljZS51c2VySUQoKVxyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0dG9hc3RlclNlcnZpY2Uuc3VjY2VzcygnWW91IGhhdmUgc3VjY2Vzc2Z1bGx5IGxvZ2luJyk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH1cclxuXHRcdH07XHJcblx0XHRcclxuXHRcdCRzY29wZS5mb3Jnb3QgPSBmdW5jdGlvbihmb3JtKXtcclxuXHRcdFx0YXV0aFNlcnZpY2UuZm9yZ290KCRzY29wZS5jb25maXJtX2VtYWlsKS5lcnJvcihmdW5jdGlvbiAoZXJyb3IpIHtcclxuXHRcdFx0XHQkc2NvcGUuZXJyb3IgPSBlcnJvcjtcdFxyXG5cdFx0XHRcdHRvYXN0ZXJTZXJ2aWNlLmVycm9yKGVycm9yLm1lc3NhZ2UpO1xyXG5cdFx0XHR9KS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG5cdFx0XHRcdHRvYXN0ZXJTZXJ2aWNlLmluZm8oJ0FuIGUtbWFpbCBoYXMgYmVlbiBzZW50IHRvICcgKyAkc2NvcGUuY29uZmlybV9lbWFpbC5lbWFpbCArICcgd2l0aCBmdXJ0aGVyIGluc3RydWN0aW9ucy4nKTtcdFxyXG5cdFx0XHR9KVxyXG5cdFx0fVxyXG5cclxuXHRcdCRzY29wZS5yZXNldCA9IGZ1bmN0aW9uKGZvcm0pe1xyXG5cdFx0XHRcdGF1dGhTZXJ2aWNlLnJlc2V0KCRzY29wZS5wYXNzd29yZCkuZXJyb3IoZnVuY3Rpb24gKGVycm9yKSB7XHJcblx0XHRcdFx0XHQkc2NvcGUuZXJyb3IgPSBlcnJvcjtcclxuXHRcdFx0XHRcdHRvYXN0ZXJTZXJ2aWNlLmVycm9yKGVycm9yLm1lc3NhZ2UpO1xyXG5cdFx0XHRcdH0pLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcblx0XHRcdFx0XHR0b2FzdGVyU2VydmljZS5zdWNjZXNzKCdZb3UgaGF2ZSBzdWNjZXNzZnVsbHkgY2hhbmdlZCBwYXNzd29yZCcpO1xyXG5cdFx0XHRcdFx0JHN0YXRlLmdvKCdsb2dpbicpO1x0XHJcblx0XHRcdFx0fSlcclxuXHRcdH07XHRcclxuXHJcblx0XHQkc2NvcGUuYXV0aGVudGljYXRlID0gZnVuY3Rpb24gKHByb3ZpZGVyKSB7XHJcblx0XHRcdHRyYW5zZmVyLnNldFByb3ZpZGVyU3RyaW5nKHByb3ZpZGVyKTtcclxuXHRcdFx0JGF1dGguYXV0aGVudGljYXRlKHByb3ZpZGVyKS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG5cdFx0XHRcdCRhdXRoLnJlbW92ZVRva2VuKCk7XHJcblx0XHRcdFx0YXV0aFNlcnZpY2Uuc2F2ZVRva2VuKHJlc3BvbnNlLmRhdGEudG9rZW4pO1xyXG5cdFx0XHRcdHRvYXN0ZXJTZXJ2aWNlLnN1Y2Nlc3MoJ1lvdSBoYXZlIHN1Y2Nlc3NmdWxseSBhdXRoZW50aWNhdGVkJyk7XHJcblx0XHRcdFx0JHN0YXRlLmdvKCdkYXNoYm9hcmQuJyArIGRhc2hib2FyZFNlcnZpY2UuZ2V0Vmlld01vZGUoKSk7XHJcblx0XHRcdH0sZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcblx0XHRcdFx0dG9hc3RlclNlcnZpY2UuZXJyb3IocmVzcG9uc2UuZGF0YS5tZXNzYWdlKTtcclxuXHRcdFx0fSlcclxuXHRcdH07XHJcblxyXG5cclxuXHRcdCRzY29wZS52YWxpZGF0aW9uTG9naW5PcHRpb25zID0ge1xyXG5cdFx0XHRydWxlczoge1xyXG5cdFx0XHRcdG1haWw6IHtcclxuXHRcdFx0XHRcdHJlcXVpcmVkOiB0cnVlLFxyXG5cdFx0XHRcdFx0ZW1haWw6IHRydWVcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHB3ZDoge1xyXG5cdFx0XHRcdFx0cmVxdWlyZWQ6IHRydWVcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdG1lc3NhZ2VzOiB7XHJcblx0XHRcdFx0bWFpbDoge1xyXG5cdFx0XHRcdFx0cmVxdWlyZWQ6IEVSUk9SUy5maWVsZF9yZXF1aXJlZCxcclxuXHRcdFx0XHRcdGVtYWlsOiBFUlJPUlMuZW1haWxfZXhhbXBsZVxyXG5cdFx0XHRcdH0sXHJcblxyXG5cdFx0XHRcdHB3ZDoge1xyXG5cdFx0XHRcdFx0cmVxdWlyZWQ6IEVSUk9SUy5maWVsZF9yZXF1aXJlZFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHJcblx0XHQkc2NvcGUudmFsaWRhdGlvblJlZ2lzdHJPcHRpb25zID0ge1xyXG5cdFx0XHRydWxlczoge1xyXG5cdFx0XHRcdG1haWw6IHtcclxuXHRcdFx0XHRcdHJlcXVpcmVkOiB0cnVlLFxyXG5cdFx0XHRcdFx0ZW1haWw6IHRydWUsXHJcblx0XHRcdFx0XHRtaW5sZW5ndGg6IDksXHJcblx0XHRcdFx0XHRtYXhsZW5ndGg6IDQwLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0cHdkOiB7XHJcblx0XHRcdFx0XHRyZXF1aXJlZDogdHJ1ZSxcclxuXHRcdFx0XHRcdG1pbmxlbmd0aDogNixcclxuXHRcdFx0XHRcdG1heGxlbmd0aDogMjAsXHJcblx0XHRcdFx0XHRwYXR0ZXJuOiB0cnVlXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRyZXBwd2Q6IHtcclxuXHRcdFx0XHRcdHJlcXVpcmVkOiB0cnVlXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRtZXNzYWdlczoge1xyXG5cdFx0XHRcdG1haWw6IHtcclxuXHRcdFx0XHRcdHJlcXVpcmVkOiBFUlJPUlMuZmllbGRfcmVxdWlyZWQsXHJcblx0XHRcdFx0XHRlbWFpbDogRVJST1JTLmVtYWlsX2V4YW1wbGUsXHJcblx0XHRcdFx0XHRtaW5sZW5ndGg6IEVSUk9SUy5taW5fOXN5bWJsLFxyXG5cdFx0XHRcdFx0bWF4bGVuZ3RoOiBFUlJPUlMubWF4XzIwc3ltYmxcclxuXHRcdFx0XHR9LFxyXG5cclxuXHRcdFx0XHRwd2Q6IHtcclxuXHRcdFx0XHRcdHJlcXVpcmVkOiBFUlJPUlMuZmllbGRfcmVxdWlyZWQsXHJcblx0XHRcdFx0XHRtaW5sZW5ndGg6IEVSUk9SUy5taW5fNnN5bWJsLFxyXG5cdFx0XHRcdFx0bWF4bGVuZ3RoOiBFUlJPUlMubWF4XzIwc3ltYmwsXHJcblx0XHRcdFx0XHRwYXR0ZXJuOiBFUlJPUlMucmVnX2V4cFxyXG5cdFx0XHRcdH0sXHJcblxyXG5cdFx0XHRcdHJlcHB3ZDoge1xyXG5cdFx0XHRcdFx0cmVxdWlyZWQ6IEVSUk9SUy5maWVsZF9yZXF1aXJlZFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1dKTtcclxufSkoKTtcbihmdW5jdGlvbiAoKSB7XHJcblx0J3VzZSBzdHJpY3QnO1xyXG5cdGFuZ3VsYXIubW9kdWxlKCdyc3NyZWFkZXInKS5jb250cm9sbGVyKCdEYXNoYm9hcmRDb250cm9sbGVyJywgWyckc2NvcGUnLCAnJHN0YXRlJywgJ2Rhc2hib2FyZFNlcnZpY2UnLCAnZmVlZHNTZXJ2aWNlJywgJ3RvYXN0ZXJTZXJ2aWNlJywgZnVuY3Rpb24gKCRzY29wZSwgJHN0YXRlLCBkYXNoYm9hcmRTZXJ2aWNlLCBmZWVkc1NlcnZpY2UsIHRvYXN0ZXJTZXJ2aWNlKSB7XHJcblx0XHQkc2NvcGUuc2lkZWJhciA9IGRhc2hib2FyZFNlcnZpY2UuY2hlY2tTaWRlYmFyO1xyXG5cdFx0JHNjb3BlLmhlYWRUaXRsZSA9IGRhc2hib2FyZFNlcnZpY2UuZ2V0VGl0bGU7XHJcblx0XHQkc2NvcGUuZmVlZCA9IGRhc2hib2FyZFNlcnZpY2UuZ2V0RmVlZElkO1xyXG5cdFx0JHNjb3BlLmFsZXJ0TXNnID0gZGFzaGJvYXJkU2VydmljZS5hbGVydE1zZztcclxuXHRcdCRzY29wZS5zdWNjZXNzTXNnID0gZGFzaGJvYXJkU2VydmljZS5zdWNjZXNzTXNnO1xyXG5cdFx0JHNjb3BlLnJlYWRTaW5nbGVGZWVkID0gZGFzaGJvYXJkU2VydmljZS5yZWFkU2luZ2xlRmVlZDtcclxuXHRcdCRzY29wZS5oaWRlU29ydExpc3QgPSBkYXNoYm9hcmRTZXJ2aWNlLmhpZGVTb3J0TGlzdDtcclxuXHRcdFxyXG5cdFx0JHNjb3BlLmNoZWNrSWZSZWFkaW5nID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRyZXR1cm4gZGFzaGJvYXJkU2VydmljZS5pc1JlYWRpbmdBcnRpY2xlO1xyXG5cdFx0fTtcclxuXHJcblx0XHQkc2NvcGUudG9nZ2xlU2lkZWJhciA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0ZGFzaGJvYXJkU2VydmljZS5zaWRlYmFyID0gIWRhc2hib2FyZFNlcnZpY2Uuc2lkZWJhcjtcclxuXHRcdH1cclxuXHRcdCRzY29wZS5oaWRlU2lkZWJhciA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0ZGFzaGJvYXJkU2VydmljZS5zaWRlYmFyID0gZmFsc2U7XHJcblx0XHR9XHJcblx0XHQkc2NvcGUuc2hvd1NpZGViYXIgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdGRhc2hib2FyZFNlcnZpY2Uuc2lkZWJhciA9IHRydWU7XHJcblx0XHR9XHJcblxyXG5cdFx0JHNjb3BlLmhpZGVWaWV3QnRucyA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0aWYgKCRzY29wZS5oZWFkVGl0bGUoKSA9PT0gXCJBZGQgRmVlZFwiIHx8IGZlZWRzU2VydmljZS5mZWVkc0RpY3Rpb25hcnkubGVuZ3RoID09IDApIHtcclxuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdFxyXG5cdFx0fVxyXG5cdFx0JHNjb3BlLmNoZWNrSWZUb2dnbGVkID0gZnVuY3Rpb24gKG1vZGUpIHtcclxuXHRcdFx0cmV0dXJuIGRhc2hib2FyZFNlcnZpY2UuZ2V0Vmlld01vZGUoKSA9PT0gbW9kZTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0JHNjb3BlLmNoZWNrU29ydFR5cGUgPSBmdW5jdGlvbiAodHlwZSwgb3JkZXIpIHtcclxuXHRcdFx0dmFyIHNvcnRUeXBlID0gZGFzaGJvYXJkU2VydmljZS5nZXRTb3J0UGFyYW0oKTtcclxuXHRcdFx0aWYgKHR5cGUgPT0gc29ydFR5cGUudHlwZSAmJiBvcmRlciA9PSBzb3J0VHlwZS5vcmRlcikge1xyXG5cdFx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0JHNjb3BlLm9uVmlld0NoYW5nZSA9IGZ1bmN0aW9uICh2aWV3KSB7XHJcblx0XHRcdHN3aXRjaCAodmlldykge1xyXG5cdFx0XHRcdGNhc2UgJ3ZpZXctbW9kZTEnOlxyXG5cdFx0XHRcdFx0ZGFzaGJvYXJkU2VydmljZS5zZXRWaWV3TW9kZSgwKTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdGNhc2UgJ3ZpZXctbW9kZTInOlxyXG5cdFx0XHRcdFx0ZGFzaGJvYXJkU2VydmljZS5zZXRWaWV3TW9kZSgxKTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdGNhc2UgJ3ZpZXctbW9kZTMnOlxyXG5cdFx0XHRcdFx0ZGFzaGJvYXJkU2VydmljZS5zZXRWaWV3TW9kZSgyKTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHR9XHJcblx0XHRcdCRzdGF0ZS5nbygnZGFzaGJvYXJkLicgKyBkYXNoYm9hcmRTZXJ2aWNlLmdldFZpZXdNb2RlKCkpO1xyXG5cdFx0fVxyXG5cdFx0dmFyIHRpbWVyO1xyXG5cdFx0JHNjb3BlLm9uRmVlZERlbGV0ZSA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0dG9hc3RlclNlcnZpY2UuY29uZmlybSh7XHJcblx0XHRcdFx0bWVzc2FnZTogXCJSZW1vdmUgdGhpcyBmZWVkP1wiLFxyXG5cdFx0XHRcdGNvbmZpcm06IFwiY29uZmlybUZlZWREZWxldGVcIlxyXG5cdFx0XHR9LCAkc2NvcGUpO1xyXG5cdFx0fVxyXG5cdFx0JHNjb3BlLmNvbmZpcm1GZWVkRGVsZXRlID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRkYXNoYm9hcmRTZXJ2aWNlLmxvYWRpbmdJY29uID0gdHJ1ZTtcclxuXHRcdFx0ZmVlZHNTZXJ2aWNlLnJlbW92ZUZlZWQoZGFzaGJvYXJkU2VydmljZS5nZXRGZWVkSWQoKSlcclxuXHRcdFx0XHQudGhlbihmdW5jdGlvbiAocmVzKSB7XHJcblx0XHRcdFx0XHRkYXNoYm9hcmRTZXJ2aWNlLmxvYWRpbmdJY29uID0gZmFsc2U7XHJcblx0XHRcdFx0XHR0b2FzdGVyU2VydmljZS5pbmZvKFwiRmVlZCBoYXMgYmVlbiBkZWxldGVkXCIpO1xyXG5cdFx0XHRcdFx0JHN0YXRlLnJlbG9hZChcImRhc2hib2FyZFwiKTtcclxuXHRcdFx0XHR9LCBmdW5jdGlvbiAoZXJyKSB7XHJcblx0XHRcdFx0XHRkYXNoYm9hcmRTZXJ2aWNlLmxvYWRpbmdJY29uID0gZmFsc2U7XHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhlcnIpO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdFx0JHNjb3BlLmN1cnJlbnRTb3J0VGl0bGUgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdHZhciBzb3J0UGFyYW0gPSBkYXNoYm9hcmRTZXJ2aWNlLmdldFNvcnRQYXJhbSgpO1xyXG5cdFx0XHRzd2l0Y2ggKHNvcnRQYXJhbS50eXBlKSB7XHJcblx0XHRcdFx0Y2FzZSAnZGF0ZSc6IHtcclxuXHRcdFx0XHRcdGlmIChzb3J0UGFyYW0ub3JkZXIgPT0gMSl7XHJcblx0XHRcdFx0XHRcdHJldHVybiBcIk5ld2VzdFwiO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0cmV0dXJuIFwiT2xkZXN0XCI7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGNhc2UgJ2ZlZWQnOiB7XHJcblx0XHRcdFx0XHRyZXR1cm4gXCJCeSBGZWVkXCI7ICAgICAgICAgICAgXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHR2YXIgc29ydFR5cGVFbGVtZW50O1xyXG5cdFx0JHNjb3BlLnNldFNvcnRQYXJhbSA9IGZ1bmN0aW9uIChlLCB0eXBlLCBvcmRlcikge1xyXG5cdFx0XHRpZiAoc29ydFR5cGVFbGVtZW50KSB7XHJcblx0XHRcdFx0c29ydFR5cGVFbGVtZW50LnJlbW92ZUNsYXNzKCdzZWxlY3RlZCcpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHNvcnRUeXBlRWxlbWVudCA9IGFuZ3VsYXIuZWxlbWVudChlLmN1cnJlbnRUYXJnZXQpO1xyXG5cdFx0XHRzb3J0VHlwZUVsZW1lbnQuYWRkQ2xhc3MoJ3NlbGVjdGVkJyk7XHJcblx0XHRcdGRhc2hib2FyZFNlcnZpY2Uuc2V0U29ydFBhcmFtKHR5cGUsIG9yZGVyKTtcclxuXHRcdH1cclxuXHR9XSk7XHJcbn0pKCk7XG4oZnVuY3Rpb24gKCkge1xyXG5cdCd1c2Ugc3RyaWN0JztcclxuXHRhbmd1bGFyLm1vZHVsZSgncnNzcmVhZGVyJykuY29udHJvbGxlcignRmVlZHNDb250cm9sbGVyJywgWyckc2NvcGUnLCAnJHN0YXRlJywgJyRzdGF0ZVBhcmFtcycsICckaHR0cCcsICd0b2FzdGVyU2VydmljZScsICdmZWVkc1NlcnZpY2UnLCAnZGFzaGJvYXJkU2VydmljZScsICdhcnRpY2xlc1NlcnZpY2UnLCAnYXV0aFNlcnZpY2UnLCBmdW5jdGlvbiAoJHNjb3BlLCAkc3RhdGUsICRzdGF0ZVBhcmFtcywgJGh0dHAsIHRvYXN0ZXJTZXJ2aWNlLCBmZWVkc1NlcnZpY2UsIGRhc2hib2FyZFNlcnZpY2UsIGFydGljbGVzU2VydmljZSwgYXV0aFNlcnZpY2UpIHtcclxuXHRcdGlmICgkc3RhdGUuY3VycmVudC5uYW1lID09PSAnZGFzaGJvYXJkLmFkZEZlZWQnIHx8ICRzdGF0ZS5jdXJyZW50Lm5hbWUgPT09ICdkYXNoYm9hcmQuYWR2aWNlZCcpIHtcclxuXHRcdFx0ZGFzaGJvYXJkU2VydmljZS5pc1JlYWRpbmdBcnRpY2xlID0gdHJ1ZTtcclxuXHRcdH1cclxuXHRcdCRzY29wZS5hZHZpY2VkQ2F0ZWdvcnkgPSAkc3RhdGVQYXJhbXMuY2F0ZWdvcnk7XHJcblx0XHQkc2NvcGUub2JqID0ge307XHJcblx0XHQkc2NvcGUuZmVlZHMgPSBmZWVkc1NlcnZpY2UuZmVlZHNEaWN0aW9uYXJ5O1xyXG5cdFx0JHNjb3BlLmFkdmljZWQgPSBmZWVkc1NlcnZpY2UuYWR2aWNlZERpY3Rpb25hcnk7XHJcblx0XHQkc2NvcGUuY2F0ZWdvcmllcyA9IGZlZWRzU2VydmljZS5hbGxDYXRlZ29yaWVzO1xyXG5cdFx0JHNjb3BlLmFkZGluZ05ld0NhdGVnb3J5ID0gZmFsc2U7XHJcblx0XHQkc2NvcGUubmV3Q2F0ZWdvcnkgPSB7fTtcclxuXHJcblx0XHRpZiAoJHN0YXRlLmN1cnJlbnQubmFtZSA9PT0gXCJkYXNoYm9hcmQuYWR2aWNlZFwiKSB7XHJcblx0XHRcdHZhciBpbnZhbGlkQ2F0ZWdvcnkgPSAkc2NvcGUuYWR2aWNlZC5maWx0ZXIoZnVuY3Rpb24gKGVsZW0sIGkpIHtcclxuXHRcdFx0XHRyZXR1cm4gZWxlbS5jYXRlZ29yeSA9PSAkc3RhdGVQYXJhbXMuY2F0ZWdvcnk7XHJcblx0XHRcdH0pO1xyXG5cdFx0XHRpZiAoIWludmFsaWRDYXRlZ29yeS5sZW5ndGgpIHtcclxuXHRcdFx0XHQkc3RhdGUuZ28oXCI0MDRcIiwge3JlbG9hZDogdHJ1ZX0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0JHNjb3BlLmNoZWNrSWZOZXcgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdGlmICgkc2NvcGUub2JqLmNhdGVnb3J5LnRvVXBwZXJDYXNlKCkgPT0gJ2N1c3RvbScudG9VcHBlckNhc2UoKSkge1xyXG5cdFx0XHRcdCRzY29wZS5hZGRpbmdOZXdDYXRlZ29yeSA9IHRydWU7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0JHNjb3BlLmFkZGluZ05ld0NhdGVnb3J5ID0gZmFsc2U7XHJcblx0XHRcdFx0JHNjb3BlLm5ld0NhdGVnb3J5ID0ge307XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdCRzY29wZS5hZGRGZWVkID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRkYXNoYm9hcmRTZXJ2aWNlLmxvYWRpbmdJY29uID0gdHJ1ZTtcclxuXHRcdFx0JHNjb3BlLmVycm9yID0gJyc7XHJcblx0XHRcdGlmICghJHNjb3BlLm9iai5saW5rKSB7XHJcblx0XHRcdFx0JHNjb3BlLmVycm9yID0gXCJFbnRlciBSc3MgZmVlZCBsaW5rXCI7XHJcblx0XHRcdFx0ZGFzaGJvYXJkU2VydmljZS5sb2FkaW5nSWNvbiA9IGZhbHNlO1xyXG5cdFx0XHRcdHJldHVybjtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAoJHNjb3BlLm5ld0NhdGVnb3J5LmNhdGVnb3J5KSB7XHJcblx0XHRcdFx0JHNjb3BlLm9iai5jYXRlZ29yeSA9ICRzY29wZS5uZXdDYXRlZ29yeS5jYXRlZ29yeTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKCEkc2NvcGUub2JqLmNhdGVnb3J5KSB7XHJcblx0XHRcdCAgICBpZiAoISRzY29wZS5hZHZpY2VkQ2F0ZWdvcnkpIHtcclxuXHRcdFx0ICAgICAgICAkc2NvcGUuZXJyb3IgPSBcIkNob29zZSBjYXRlZ29yeVwiO1xyXG5cdFx0XHQgICAgICAgIGRhc2hib2FyZFNlcnZpY2UubG9hZGluZ0ljb24gPSBmYWxzZTtcclxuXHRcdFx0ICAgICAgICByZXR1cm47XHJcblx0XHRcdCAgICB9XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmICghJHNjb3BlLm5ld0NhdGVnb3J5LmNhdGVnb3J5ICYmICRzY29wZS5vYmouY2F0ZWdvcnkudG9VcHBlckNhc2UoKSA9PSAnY3VzdG9tJy50b1VwcGVyQ2FzZSgpKSB7XHJcblx0XHRcdFx0JHNjb3BlLmVycm9yID0gXCJFbnRlciBuZXcgY2F0ZWdvcnkgbmFtZVwiO1xyXG5cdFx0XHRcdGRhc2hib2FyZFNlcnZpY2UubG9hZGluZ0ljb24gPSBmYWxzZTtcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKCEkc2NvcGUub2JqLmNhdGVnb3J5KSB7XHJcblx0XHRcdCAgICAkc2NvcGUub2JqLmNhdGVnb3J5ID0gJHNjb3BlLmFkdmljZWRDYXRlZ29yeTtcclxuXHRcdFx0fVxyXG5cdFx0XHRmZWVkc1NlcnZpY2UuYWRkRmVlZCgkc2NvcGUub2JqKVxyXG5cdFx0XHRcdC50aGVuKGZ1bmN0aW9uIChyZXMpIHtcclxuXHRcdFx0XHRcdCRzY29wZS5hZGRpbmdOZXdDYXRlZ29yeSA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0dG9hc3RlclNlcnZpY2Uuc3VjY2VzcyhcIkZlZWQgc3VjY2Vzc2Z1bGx5IGFkZGVkXCIpO1xyXG5cdFx0XHRcdFx0JHN0YXRlLmdvKCdkYXNoYm9hcmQuJyArIGRhc2hib2FyZFNlcnZpY2UuZ2V0Vmlld01vZGUoKSwge30sIHsgcmVsb2FkOiB0cnVlIH0pO1xyXG5cdFx0XHRcdH0sIGZ1bmN0aW9uIChlcnIpIHtcclxuXHRcdFx0XHRcdGRhc2hib2FyZFNlcnZpY2UubG9hZGluZ0ljb24gPSBmYWxzZTtcclxuXHRcdFx0XHRcdGlmICghZXJyLmRhdGEpXHJcblx0XHRcdFx0XHRcdCRzY29wZS5lcnJvciA9IGVyci5tZXNzYWdlO1xyXG5cdFx0XHRcdFx0ZWxzZSAkc2NvcGUuZXJyb3IgPSBlcnIuZGF0YS5tZXNzYWdlO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdFx0JHNjb3BlLmFkZEZlZWRCeUFkdmljZSA9IGZ1bmN0aW9uIChmZWVkKSB7XHJcblx0XHQgICAgJHNjb3BlLmFkZGluZ05ld0NhdGVnb3J5ID0gZmFsc2U7XHJcblx0XHQgICAgJHNjb3BlLm9iai5saW5rID0gZmVlZC5yc3NsaW5rO1xyXG5cdFx0ICAgICRzY29wZS5lcnJvciA9IG51bGw7XHJcblx0XHQgICAgJHNjb3BlLm9iai5jYXRlZ29yeSA9ICcnO1xyXG5cdFx0ICAgICRzY29wZS5tb2RhbFNob3duID0gISRzY29wZS5tb2RhbFNob3duO1xyXG5cdFx0fVxyXG5cdFx0JHNjb3BlLnNldENvdmVySW1hZ2UgPSBmdW5jdGlvbiAoaXRlbSkge1xyXG5cdFx0XHR2YXIgY292ZXJJbWFnZSA9IFwiXCI7XHJcblx0XHRcdHN3aXRjaCAoaXRlbS5jYXRlZ29yeSkge1xyXG5cdFx0XHRcdGNhc2UgXCJJVFwiOiB7XHJcblx0XHRcdFx0XHRjb3ZlckltYWdlID0gJy9hc3NldHMvaW1hZ2VzL2l0LmpwZWcnXHJcblx0XHRcdFx0XHRyZXR1cm4geyAnYmFja2dyb3VuZC1pbWFnZSc6ICd1cmwoJyArIGNvdmVySW1hZ2UgKyAnKScsICdiYWNrZ3JvdW5kLXNpemUnOiAnY292ZXInLCAnYmFja2dyb3VuZC1wb3NpdGlvbic6ICdjZW50ZXIgY2VudGVyJyB9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0Y2FzZSBcIkdhbWluZ1wiOiB7XHJcblx0XHRcdFx0XHRjb3ZlckltYWdlID0gJy9hc3NldHMvaW1hZ2VzL2dhbWluZy5qcGVnJ1xyXG5cdFx0XHRcdFx0cmV0dXJuIHsgJ2JhY2tncm91bmQtaW1hZ2UnOiAndXJsKCcgKyBjb3ZlckltYWdlICsgJyknLCAnYmFja2dyb3VuZC1zaXplJzogJ2NvdmVyJywgJ2JhY2tncm91bmQtcG9zaXRpb24nOiAnY2VudGVyIGNlbnRlcicgfVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdGNhc2UgXCJOZXdzXCI6IHtcclxuXHRcdFx0XHRcdGNvdmVySW1hZ2UgPSAnL2Fzc2V0cy9pbWFnZXMvbmV3cy5qcGVnJ1xyXG5cdFx0XHRcdFx0cmV0dXJuIHsgJ2JhY2tncm91bmQtaW1hZ2UnOiAndXJsKCcgKyBjb3ZlckltYWdlICsgJyknLCAnYmFja2dyb3VuZC1zaXplJzogJ2NvdmVyJywgJ2JhY2tncm91bmQtcG9zaXRpb24nOiAnY2VudGVyIGNlbnRlcicgfVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdGNhc2UgXCJTcG9ydFwiOiB7XHJcblx0XHRcdFx0XHRjb3ZlckltYWdlID0gJy9hc3NldHMvaW1hZ2VzL3Nwb3J0LmpwZWcnXHJcblx0XHRcdFx0XHRyZXR1cm4geyAnYmFja2dyb3VuZC1pbWFnZSc6ICd1cmwoJyArIGNvdmVySW1hZ2UgKyAnKScsICdiYWNrZ3JvdW5kLXNpemUnOiAnY292ZXInLCAnYmFja2dyb3VuZC1wb3NpdGlvbic6ICdjZW50ZXIgY2VudGVyJyB9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0Y2FzZSBcIkZvb2RcIjoge1xyXG5cdFx0XHRcdFx0Y292ZXJJbWFnZSA9ICcvYXNzZXRzL2ltYWdlcy9mb29kLmpwZWcnXHJcblx0XHRcdFx0XHRyZXR1cm4geyAnYmFja2dyb3VuZC1pbWFnZSc6ICd1cmwoJyArIGNvdmVySW1hZ2UgKyAnKScsICdiYWNrZ3JvdW5kLXNpemUnOiAnY292ZXInLCAnYmFja2dyb3VuZC1wb3NpdGlvbic6ICdjZW50ZXIgY2VudGVyJyB9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XSk7XHJcbn0pKCk7XG4oZnVuY3Rpb24gKCkge1xyXG5cdCd1c2Ugc3RyaWN0JztcclxuXHRhbmd1bGFyLm1vZHVsZSgncnNzcmVhZGVyJykuY29udHJvbGxlcignSG9tZUNvbnRyb2xsZXInLCBbJyRzY29wZScsICckc3RhdGUnLCAnYXV0aFNlcnZpY2UnLCAnZGFzaGJvYXJkU2VydmljZScsIGZ1bmN0aW9uICgkc2NvcGUsICRzdGF0ZSwgYXV0aFNlcnZpY2UsIGRhc2hib2FyZFNlcnZpY2UpIHtcclxuXHRcdCRzY29wZS5pc0xvZ2dlZEluID0gYXV0aFNlcnZpY2UuaXNMb2dnZWRJbjtcclxuXHRcdCRzY29wZS5jdXJyZW50VXNlciA9IGF1dGhTZXJ2aWNlLmN1cnJlbnRVc2VyO1xyXG5cdFx0JHNjb3BlLm9uRmVlZHMgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdGlmIChhdXRoU2VydmljZS5pc0xvZ2dlZEluKCkpIHtcclxuXHRcdFx0XHQkc3RhdGUuZ28oJ2Rhc2hib2FyZC4nICsgZGFzaGJvYXJkU2VydmljZS5nZXRWaWV3TW9kZSgpLCB7XHJcblx0XHRcdFx0XHRpZDogYXV0aFNlcnZpY2UudXNlcklEKClcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHQkc3RhdGUuZ28oJ2hvbWUnKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0JHNjb3BlLm9uRmVlZHMoKTtcclxuXHRcdCRzY29wZS5vblJlZ2lzdGVyID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0XHQkc3RhdGUuZ28oJ3JlZ2lzdGVyJyk7XHJcblx0XHR9XHJcblx0XHQkc2NvcGUub25Mb2dpbiA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0JHN0YXRlLmdvKCdsb2dpbicpO1xyXG5cdFx0fVxyXG5cdH1dKTtcclxufSkoKTtcbihmdW5jdGlvbiAoKSB7XHJcblx0YW5ndWxhci5tb2R1bGUoJ3Jzc3JlYWRlcicpLmNvbnRyb2xsZXIoJ0luZGV4Q29udHJvbGxlcicsIFsnJHNjb3BlJywgJ3Byb2ZpbGVTZXJ2aWNlJywgJ2Rhc2hib2FyZFNlcnZpY2UnLCAnYXV0aFNlcnZpY2UnLCAnJHdpbmRvdycsICd0aGVtZVNlcnZpY2UnLCBmdW5jdGlvbiAoJHNjb3BlLCBwcm9maWxlU2VydmljZSwgZGFzaGJvYXJkU2VydmljZSwgYXV0aFNlcnZpY2UsICR3aW5kb3csIHRoZW1lU2VydmljZSkge1xyXG5cdFx0JHNjb3BlLmxvYWRpbmdJY29uID0gZGFzaGJvYXJkU2VydmljZS5pc0xvYWRpbmc7XHJcblx0XHQkc2NvcGUuZ2V0VGhlbWUgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdGlmIChhdXRoU2VydmljZS5pc0xvZ2dlZEluKCkpIHtcclxuXHRcdFx0XHRyZXR1cm4gcHJvZmlsZVNlcnZpY2UucmVmcmVzaFByb2ZpbGVEYXRhKCkuY29sb3JUaGVtZTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRyZXR1cm4gXCJ0aGVtZTFcIjtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdCRzY29wZS5mYWRlSW4gPSBmdW5jdGlvbiAoJGVsKSB7XHJcblx0XHQgICAgJGVsLnJlbW92ZUNsYXNzKCdub3QtdmlzaWJsZScpO1xyXG5cdFx0ICAgICRlbC5hZGRDbGFzcygnZmFkZS1pbi0xcycpO1xyXG5cdFx0fVxyXG5cclxuXHRcdCRzY29wZS5zbGlkZUZyb21MZWZ0ID0gZnVuY3Rpb24gKCRlbCkge1xyXG5cdFx0ICAgICRlbC5yZW1vdmVDbGFzcygnbm90LXZpc2libGUnKTtcclxuXHRcdCAgICAkZWwuYWRkQ2xhc3MoJ3NsaWRlLWZyb20tbGVmdC1zbW9vdGgnKTtcclxuXHRcdH1cclxuXHJcblx0XHQkc2NvcGUuc2xpZGVGcm9tUmlnaHQgPSBmdW5jdGlvbiAoJGVsKSB7XHJcblx0XHQgICAgJGVsLnJlbW92ZUNsYXNzKCdub3QtdmlzaWJsZScpO1xyXG5cdFx0ICAgICRlbC5hZGRDbGFzcygnc2xpZGUtZnJvbS1yaWdodC1zbW9vdGgnKTtcclxuXHRcdH1cclxuXHR9XSk7XHJcbn0pKCk7XG4oZnVuY3Rpb24gKCkge1xyXG5cdCd1c2Ugc3RyaWN0JztcclxuXHRhbmd1bGFyLm1vZHVsZSgncnNzcmVhZGVyJykuY29udHJvbGxlcignTmF2YmFyQ29udHJvbGxlcicsIFsnJHNjb3BlJywgJyRzdGF0ZScsJ3Byb2ZpbGVTZXJ2aWNlJywgJ2F1dGhTZXJ2aWNlJywgJ2Rhc2hib2FyZFNlcnZpY2UnLCAndHJhbnNmZXInLCAnYWNjb3VudEluZm8nLCAnJGF1dGgnLFxyXG5cdFx0ZnVuY3Rpb24gKCRzY29wZSwgJHN0YXRlLHByb2ZpbGVTZXJ2aWNlLCBhdXRoU2VydmljZSwgZGFzaGJvYXJkU2VydmljZSwgdHJhbnNmZXIsIGFjY291bnRJbmZvLCAkYXV0aCkge1xyXG5cdFx0XHQkc2NvcGUuaXNMb2dnZWRJbiA9IGF1dGhTZXJ2aWNlLmlzTG9nZ2VkSW47XHJcblx0XHRcdCRzY29wZS5pc0Rhc2hib2FyZCA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHRyZXR1cm4gL2Rhc2hib2FyZC8udGVzdCgkc3RhdGUuY3VycmVudC5uYW1lKTtcclxuXHRcdFx0fVxyXG5cdFx0XHQkc2NvcGUuY3VycmVudFVzZXIgPSBwcm9maWxlU2VydmljZS5yZWZyZXNoUHJvZmlsZURhdGE7XHJcblx0XHRcdCRzY29wZS50b2dnbGVTaWRlYmFyID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdCRzY29wZS5oaWRlTW9iaWxlTmF2YmFyKCk7XHJcblx0XHRcdFx0ZGFzaGJvYXJkU2VydmljZS5zaWRlYmFyID0gIWRhc2hib2FyZFNlcnZpY2Uuc2lkZWJhcjtcclxuXHRcdFx0XHQkc2NvcGUuZ2V0UHJvZmlsZSgpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQkc2NvcGUuaGlkZVNpZGViYXIgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0ZGFzaGJvYXJkU2VydmljZS5zaWRlYmFyID0gZmFsc2U7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdCRzY29wZS5oaWRlTW9iaWxlTmF2YmFyID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdGFuZ3VsYXIuZWxlbWVudChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2JzLWV4YW1wbGUtbmF2YmFyLWNvbGxhcHNlLTFcIikpLnJlbW92ZUNsYXNzKCdpbicpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQkc2NvcGUudG9Qcm9maWxlID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdCRzY29wZS5oaWRlTW9iaWxlTmF2YmFyKCk7XHJcblx0XHRcdFx0JHNjb3BlLmhpZGVTaWRlYmFyKCk7XHJcblx0XHRcdFx0JHN0YXRlLmdvKFwiZGFzaGJvYXJkLnByb2ZpbGVcIik7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdCRzY29wZS5sb2dPdXQgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0JHNjb3BlLmhpZGVNb2JpbGVOYXZiYXIoKTtcclxuXHRcdFx0XHRhdXRoU2VydmljZS5sb2dPdXQoKTtcclxuXHRcdFx0XHQkc3RhdGUuZ28oXCJob21lXCIpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQkc2NvcGUub25FbWJsZW0gPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0JHNjb3BlLmhpZGVNb2JpbGVOYXZiYXIoKTtcclxuXHRcdFx0XHRpZiAoYXV0aFNlcnZpY2UuaXNMb2dnZWRJbigpKSB7XHJcblx0XHRcdFx0XHRpZiAoJHN0YXRlLmN1cnJlbnQubmFtZSA9PT0gXCJkYXNoYm9hcmQubGlzdFwiIHx8ICRzdGF0ZS5jdXJyZW50Lm5hbWUgPT09IFwiZGFzaGJvYXJkLnRoLWxpc3RcIiB8fCAkc3RhdGUuY3VycmVudC5uYW1lID09PSBcImRhc2hib2FyZC50aC1sYXJnZVwiKSB7XHJcblx0XHRcdFx0XHRcdCRzdGF0ZS5yZWxvYWQoJ2Rhc2hib2FyZCcpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0ZWxzZSAkc3RhdGUuZ28oXCJkYXNoYm9hcmQuXCIgKyBkYXNoYm9hcmRTZXJ2aWNlLmdldFZpZXdNb2RlKCkpO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHQkc3RhdGUuZ28oXCJob21lXCIpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHQkc2NvcGUuZ29Ub1Byb2dpbGUgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0JHN0YXRlLmdvKFwicHJvZmlsZVwiKTtcclxuXHRcdFx0XHQkc2NvcGUuaGlkZU1vYmlsZU5hdmJhcigpO1xyXG5cdFx0XHR9XHJcblx0XHRcdCRzY29wZS5nZXRQcm9maWxlID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdGFjY291bnRJbmZvLmdldFByb2ZpbGUoKS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG5cdFx0XHRcdFx0aWYgKCRhdXRoLmlzQXV0aGVudGljYXRlZCgpKSB7XHJcblx0XHRcdFx0XHRcdHZhciBsZW5naHQgPSByZXNwb25zZS5kYXRhLnVzZXIubGVuZ3RoO1xyXG5cdFx0XHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGxlbmdodDsgaSsrKSB7XHJcblx0XHRcdFx0XHRcdFx0aWYgKHJlc3BvbnNlLmRhdGEudXNlcltpXS5lbWFpbCA9PT0gJGF1dGguZ2V0UGF5bG9hZCgpLmVtYWlsKSB7XHJcblx0XHRcdFx0XHRcdFx0XHQkc2NvcGUucHJvZmlsZSA9IHJlc3BvbnNlLmRhdGEudXNlcltpXTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9O1xyXG5cdFx0XHQkc2NvcGUuZ2V0UHJvZmlsZSgpO1xyXG5cdFx0XHQkc2NvcGUuZ2V0SW1hZ2UgPSBmdW5jdGlvbigpe1xyXG5cdFx0XHRcdHJldHVybiBwcm9maWxlU2VydmljZS5nZXRJbWFnZSgpO1xyXG5cdFx0XHR9O1xyXG5cdH1dKTtcclxufSkoKTtcbihmdW5jdGlvbiAoKSB7XHJcblx0J3VzZSBzdHJpY3QnO1xyXG5cdGFuZ3VsYXIubW9kdWxlKCdyc3NyZWFkZXInKS5jb250cm9sbGVyKCdQcm9maWxlQ29udHJvbGxlcicsIFsnVXBsb2FkJywgJyRodHRwJywgJyRzdGF0ZScsICdwcm9maWxlU2VydmljZScsICckc2NvcGUnLFxyXG5cdFx0J2F1dGhTZXJ2aWNlJywgJyR3aW5kb3cnLCAndGhlbWVTZXJ2aWNlJywgJ2Rhc2hib2FyZFNlcnZpY2UnLCAnJGF1dGgnLCAnYWNjb3VudEluZm8nLCAndG9hc3RlclNlcnZpY2UnLCAndHJhbnNmZXInLFxyXG5cdFx0ZnVuY3Rpb24gKFVwbG9hZCwgJGh0dHAsICRzdGF0ZSwgcHJvZmlsZVNlcnZpY2UsICRzY29wZSwgYXV0aFNlcnZpY2UsICR3aW5kb3csIHRoZW1lU2VydmljZSwgZGFzaGJvYXJkU2VydmljZSwgJGF1dGgsIGFjY291bnRJbmZvLCB0b2FzdGVyU2VydmljZSwgdHJhbnNmZXIpIHtcclxuXHRcdCAgICBkYXNoYm9hcmRTZXJ2aWNlLmlzUmVhZGluZ0FydGljbGUgPSB0cnVlO1xyXG5cdFx0XHQkc2NvcGUuY3VycmVudFVzZXIgPSBwcm9maWxlU2VydmljZS5yZWZyZXNoUHJvZmlsZURhdGE7XHJcblx0XHRcdCRzY29wZS50ZXN0ID0gNTtcclxuXHRcdFx0JHNjb3BlLnNhbWVQcm92aWRlciA9IHRyYW5zZmVyLmdldFByb3ZpZGVyU3RyaW5nKCk7XHJcblx0XHRcdCRzY29wZS5saW5rID0gZnVuY3Rpb24gKHByb3ZpZGVyKSB7XHJcblx0XHRcdFx0JGF1dGgubGluayhwcm92aWRlcikudGhlbihmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0XHR0b2FzdGVyU2VydmljZS5pbmZvKCdZb3UgaGF2ZSBzdWNjZXNzZnVsbHkgbGlua2VkIGEgJyArIHByb3ZpZGVyICsgJyBhY2NvdW50Jyk7XHJcblx0XHRcdFx0XHRwcm9maWxlU2VydmljZS5nZXRQcm9maWxlKCk7XHJcblx0XHRcdFx0fSwgZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcblx0XHRcdFx0XHR0b2FzdGVyU2VydmljZS5lcnJvcihyZXNwb25zZS5kYXRhLm1lc3NhZ2UpO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9O1xyXG5cclxuXHRcdFx0JHNjb3BlLnVubGluayA9IGZ1bmN0aW9uIChwcm92aWRlcikge1xyXG5cdFx0XHRcdCRodHRwLnBvc3QoJy9hdXRoL3VubGluaycsIHtcclxuXHRcdFx0XHRcdGlkOiBwcm9maWxlU2VydmljZS5yZWZyZXNoUHJvZmlsZURhdGEoKS5faWQsXHJcblx0XHRcdFx0XHRwcm92aWRlcjogcHJvdmlkZXJcclxuXHRcdFx0XHR9KS50aGVuKGZ1bmN0aW9uIChyZXNvbnNlKSB7XHJcblx0XHRcdFx0XHR0b2FzdGVyU2VydmljZS5pbmZvKCdZb3UgaGF2ZSB1bmxpbmtlZCBhICcgKyBwcm92aWRlciArICcgYWNjb3VudCcpO1xyXG5cdFx0XHRcdFx0cHJvZmlsZVNlcnZpY2UuZ2V0UHJvZmlsZSgpO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9O1xyXG5cclxuXHRcdFx0JHNjb3BlLnVwZGF0ZVByb2ZpbGUgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0cHJvZmlsZVNlcnZpY2UuZ2V0UHJvZmlsZSgpO1xyXG5cdFx0XHR9O1xyXG5cclxuXHRcdFx0JHNjb3BlLm5ld1VzZXJEYXRhID0ge1xyXG5cdFx0XHRcdGVtYWlsOiBwcm9maWxlU2VydmljZS5yZWZyZXNoUHJvZmlsZURhdGEoKS5lbWFpbCxcclxuXHRcdFx0XHRjdXJyZW50UGFzczogXCJcIixcclxuXHRcdFx0XHRuZXdQYXNzOiBcIlwiLFxyXG5cdFx0XHRcdG5ld1Bhc3NSZXBlYXQ6IFwiXCJcclxuXHRcdFx0fTtcclxuXHJcblx0XHRcdCRzY29wZS5zdWJtaXQgPSBmdW5jdGlvbiAoZmlsZSkgeyAvL2Z1bmN0aW9uIHRvIGNhbGwgb24gZm9ybSBzdWJtaXRcclxuXHRcdFx0XHRpZiAoJHNjb3BlLnVwbG9hZF9mb3JtLmZpbGUuJHZhbGlkICYmIGZpbGUpIHsgLy9jaGVjayBpZiBmcm9tIGlzIHZhbGlkXHJcblx0XHRcdFx0XHQkc2NvcGUudXBsb2FkKGZpbGUpOyAvL2NhbGwgdXBsb2FkIGZ1bmN0aW9uXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9O1xyXG5cclxuXHRcdFx0JHNjb3BlLnVwbG9hZCA9IGZ1bmN0aW9uIChmaWxlLCBlcnJGaWxlcykge1xyXG5cdFx0XHRcdCRzY29wZS5mID0gZmlsZTtcclxuXHRcdFx0XHRpZiAoZXJyRmlsZXMpIHtcclxuXHRcdFx0XHRcdCRzY29wZS5lcnJGaWxlID0gZXJyRmlsZXNbMF07XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdFx0JHNjb3BlLmVyckZpbGUgPSBudWxsO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpZiAoZmlsZSkge1xyXG5cdFx0XHRcdFx0VXBsb2FkLnVwbG9hZCh7XHJcblx0XHRcdFx0XHRcdHVybDogJy91c2Vycy8nICsgYXV0aFNlcnZpY2UudXNlcklEKCkgKyAnL3VwbG9hZCcsIC8vd2ViQVBJIGV4cG9zZWQgdG8gdXBsb2FkIHRoZSBmaWxlXHJcblx0XHRcdFx0XHRcdGRhdGE6IHtcclxuXHRcdFx0XHRcdFx0XHRmaWxlOiBmaWxlLFxyXG5cdFx0XHRcdFx0XHRcdHVzZXI6IGF1dGhTZXJ2aWNlLnVzZXJJRCgpXHJcblx0XHRcdFx0XHRcdH0sIC8vcGFzcyBmaWxlIGFzIGRhdGEsIHNob3VsZCBiZSB1c2VyIG5nLW1vZGVsXHJcblx0XHRcdFx0XHRcdGhlYWRlcnM6IHtcclxuXHRcdFx0XHRcdFx0XHRBdXRob3JpemF0aW9uOiAnQmVhcmVyICcgKyBhdXRoU2VydmljZS5nZXRUb2tlbigpXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0pLnRoZW4oZnVuY3Rpb24gKHJlcykgeyAvL3VwbG9hZCBmdW5jdGlvbiByZXR1cm5zIGEgcHJvbWlzZVxyXG5cdFx0XHRcdFx0XHRpZiAocmVzLmRhdGEuZXJyb3JfY29kZSA9PT0gMCkgeyAvL3ZhbGlkYXRlIHN1Y2Nlc3NcclxuXHRcdFx0XHRcdFx0XHRwcm9maWxlU2VydmljZS5nZXRQcm9maWxlKCk7XHJcblx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0JHdpbmRvdy5hbGVydCgnYW4gZXJyb3Igb2NjdXJlZCcpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9LCBmdW5jdGlvbiAoZXJyKSB7IC8vY2F0Y2ggZXJyb3JcclxuXHRcdFx0XHRcdFx0aWYgKGVyci5zdGF0dXMgPiAwKVxyXG5cdFx0XHRcdFx0XHRcdCRzY29wZS5lcnJvck1zZyA9IGVyci5zdGF0dXMgKyAnOiAnICsgZXJyLmRhdGE7XHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH07XHJcblxyXG5cdFx0XHR2YXIgUFJPRklMRV9FUlJPUlMgPSB7XHJcblx0XHRcdFx0ZmllbGRfcmVxdWlyZWQ6ICdUaGlzIGZpZWxkIGlzIHJlcXVpcmVkJyxcclxuXHRcdFx0XHRlbWFpbF9leGFtcGxlOiAnUGxlYXNlLCB1c2UgZXhhbXBsZTogamFja3NwYXJyb3dAZ21haWwuY29tJyxcclxuXHRcdFx0XHRtaW5fNnN5bWJsOiAnUGxlYXNlLGVudGVyIGF0IGxlYXN0IDYgY2hhcmFjdGVycycsXHJcblx0XHRcdFx0bWluXzlzeW1ibDogJ1BsZWFzZSxlbnRlciBhdCBsZWFzdCA5IGNoYXJhY3RlcnMnLFxyXG5cdFx0XHRcdG1heF8yMHN5bWJsOiAnUGxlYXNlLG5vIG1vcmUgdGhlbiAyMCBjaGFyYWN0ZXJzJyxcclxuXHRcdFx0XHRyZWdfZXhwOiAnUGFzc3dvcmQgbXVzdCBjb250YWluIChhLXosQS1aLDAtOSwhQCMpJ1xyXG5cdFx0XHR9O1xyXG5cclxuXHRcdFx0JHNjb3BlLmNoYW5nZVBhc3MgPSBmdW5jdGlvbiAoZm9ybSkge1xyXG5cdFx0XHRcdGlmIChmb3JtLnZhbGlkYXRlKCkpIHtcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKFwiU3VibWl0IGNoYW5nZSBwYXNzd29yZFwiKTtcclxuXHRcdFx0XHRcdHJldHVybiAkaHR0cC5wb3N0KCcvY2hhbmdlUGFzc3dvcmQnLCAkc2NvcGUubmV3VXNlckRhdGEsIHtcclxuXHRcdFx0XHRcdFx0aGVhZGVyczoge1xyXG5cdFx0XHRcdFx0XHRcdEF1dGhvcml6YXRpb246ICdCZWFyZXIgJyArIGF1dGhTZXJ2aWNlLmdldFRva2VuKClcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSkuc3VjY2VzcyhmdW5jdGlvbiAoZGF0YSkge1xyXG5cdFx0XHRcdFx0XHR0b2FzdGVyU2VydmljZS5zdWNjZXNzKCdZb3UgaGF2ZSBzdWNjZXNzZnVsbHkgY2hhbmdlZCBwc3dkJyk7XHJcblx0XHRcdFx0XHRcdGF1dGhTZXJ2aWNlLnNhdmVUb2tlbihkYXRhLnRva2VuKTtcclxuXHRcdFx0XHRcdFx0JHN0YXRlLmdvKCdkYXNoYm9hcmQuJyArIGRhc2hib2FyZFNlcnZpY2UuZ2V0Vmlld01vZGUoKSwge1xyXG5cdFx0XHRcdFx0XHRcdGlkOiBhdXRoU2VydmljZS51c2VySUQoKVxyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdH0pLmVycm9yKGZ1bmN0aW9uIChlcnIpIHtcclxuXHRcdFx0XHRcdFx0JHNjb3BlLmVyciA9IGVycjtcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coZXJyLm1lc3NhZ2UpO1xyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9O1xyXG5cclxuXHRcdFx0JHNjb3BlLnJlc2V0UGFzcyA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHRhbmd1bGFyLmVsZW1lbnQoJ2xhYmVsLmVycm9yJykucmVtb3ZlKCk7XHJcblx0XHRcdH07XHJcblx0XHRcdFxyXG4gICAgICAgICAgICAkc2NvcGUuY2hhbmdlUGFzc1ZhbGlkYXRpb24gPSB7XHJcblx0XHRcdFx0cnVsZXM6IHtcclxuXHRcdFx0XHRcdGN1cnJlbnRQYXNzd29yZDoge1xyXG5cdFx0XHRcdFx0XHRyZXF1aXJlZDogdHJ1ZVxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdG5ld1Bhc3N3b3JkOiB7XHJcblx0XHRcdFx0XHRcdHJlcXVpcmVkOiB0cnVlLFxyXG5cdFx0XHRcdFx0XHRtaW5sZW5ndGg6IDYsXHJcblx0XHRcdFx0XHRcdG1heGxlbmd0aDogNDAsXHJcblx0XHRcdFx0XHRcdHBhdHRlcm46IHRydWVcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRyZXBlYXROZXdQYXNzd29yZDoge1xyXG5cdFx0XHRcdFx0XHRyZXF1aXJlZDogdHJ1ZVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0bWVzc2FnZXM6IHtcclxuXHRcdFx0XHRcdGN1cnJlbnRQYXNzd29yZDoge1xyXG5cdFx0XHRcdFx0XHRyZXF1aXJlZDogUFJPRklMRV9FUlJPUlMuZmllbGRfcmVxdWlyZWQsXHJcblx0XHRcdFx0XHRcdGVtYWlsOiBQUk9GSUxFX0VSUk9SUy5lbWFpbF9leGFtcGxlLFxyXG5cdFx0XHRcdFx0XHRtaW5sZW5ndGg6IFBST0ZJTEVfRVJST1JTLm1pbl85c3ltYmwsXHJcblx0XHRcdFx0XHRcdG1heGxlbmd0aDogUFJPRklMRV9FUlJPUlMubWF4XzIwc3ltYmxcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRuZXdQYXNzd29yZDoge1xyXG5cdFx0XHRcdFx0XHRyZXF1aXJlZDogUFJPRklMRV9FUlJPUlMuZmllbGRfcmVxdWlyZWQsXHJcblx0XHRcdFx0XHRcdG1pbmxlbmd0aDogUFJPRklMRV9FUlJPUlMubWluXzZzeW1ibCxcclxuXHRcdFx0XHRcdFx0bWF4bGVuZ3RoOiBQUk9GSUxFX0VSUk9SUy5tYXhfMjBzeW1ibCxcclxuXHRcdFx0XHRcdFx0cGF0dGVybjogUFJPRklMRV9FUlJPUlMucmVnX2V4cFxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHJlcGVhdE5ld1Bhc3N3b3JkOiB7XHJcblx0XHRcdFx0XHRcdHJlcXVpcmVkOiBQUk9GSUxFX0VSUk9SUy5maWVsZF9yZXF1aXJlZFxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fTtcclxuXHJcblx0XHRcdCRzY29wZS5jaGFuZ2VUaGVtZSA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHQkc2NvcGUubW9kYWxTaG93biA9ICEkc2NvcGUubW9kYWxTaG93bjtcclxuXHRcdFx0fTtcclxuXHJcblx0XHRcdCRzY29wZS51cGRhdGVUaGVtZSA9IGZ1bmN0aW9uIChsYXlvdXQpIHtcclxuXHRcdFx0XHR0aGVtZVNlcnZpY2UuY2hhbmdlVGhlbWUobGF5b3V0LnVybCkuZXJyb3IoZnVuY3Rpb24gKGVycm9yKSB7XHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhcInRoZW1lIG5vdCBjaGFuZ2VkXCIgKyBlcnJvcik7XHJcblx0XHRcdFx0fSkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuXHRcdFx0XHRcdHByb2ZpbGVTZXJ2aWNlLmdldFByb2ZpbGUoKTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fTtcclxuXHRcdFx0JHNjb3BlLmxheW91dHMgPSB0aGVtZVNlcnZpY2UubGF5b3V0cztcclxuXHRcdH1cclxuXHRdKTtcclxufSkoKTtcclxuXG4oZnVuY3Rpb24gKCkge1xyXG5cdCd1c2Ugc3RyaWN0JztcclxuXHRhbmd1bGFyLm1vZHVsZSgncnNzcmVhZGVyJykuY29udHJvbGxlcignU2lkZWJhckNvbnRyb2xsZXInLCBbJyRzY29wZScsICckc3RhdGUnLCAnZmVlZHNTZXJ2aWNlJywgJ2FydGljbGVzU2VydmljZScsICdkYXNoYm9hcmRTZXJ2aWNlJywgZnVuY3Rpb24gKCRzY29wZSwgJHN0YXRlLCBmZWVkc1NlcnZpY2UsIGFydGljbGVzU2VydmljZSwgZGFzaGJvYXJkU2VydmljZSkge1xyXG5cdFx0JHNjb3BlLmZlZWRzTGlzdERyYWdhYmxlVHlwZXMgPSBbJ2ZlZWRzJ107XHJcblx0XHQkc2NvcGUuZmF2c0xpc3REcmFnYWJsZVR5cGVzID0gWydmYXZzJ107XHJcblx0XHQkc2NvcGUuY3VycmVudEFydGljbGVzVHlwZSA9IGRhc2hib2FyZFNlcnZpY2UuY3VycmVudEFydGljbGVzVHlwZTtcclxuXHRcdCRzY29wZS5jdXJyZW50U2VsZWN0ZWRJdGVtO1xyXG5cdFx0JHNjb3BlLmZlZWRzID0gZmVlZHNTZXJ2aWNlLmZlZWRzRGljdGlvbmFyeTtcclxuXHRcdCRzY29wZS5mZWVkc0RhdGEgPSBmZWVkc1NlcnZpY2U7XHJcblx0XHQkc2NvcGUuZmF2cyA9ICRzY29wZS5mZWVkc0RhdGEuZmF2b3VyaXRlc0RpY3Rpb25hcnk7XHJcblx0XHQkc2NvcGUub25GZWVkc0RyYWcgPSBmdW5jdGlvbiAoaW5kZXgpIHtcclxuXHRcdFx0ZGFzaGJvYXJkU2VydmljZS5kaXNwbGF5TG9hZGluZygpO1xyXG5cdFx0XHQkc2NvcGUuZmVlZHMuc3BsaWNlKGluZGV4LCAxKTtcclxuXHRcdFx0ZmVlZHNTZXJ2aWNlLnNldEZlZWRzT3JkZXIoKS50aGVuKGZ1bmN0aW9uIChyZXNwKSB7XHJcblx0XHRcdFx0ZGFzaGJvYXJkU2VydmljZS5oaWRlTG9hZGluZygpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHRcdCRzY29wZS5vbkZhdnNEcmFnID0gZnVuY3Rpb24gKGluZGV4KSB7XHJcblx0XHRcdGRhc2hib2FyZFNlcnZpY2UuZGlzcGxheUxvYWRpbmcoKTtcclxuXHRcdFx0JHNjb3BlLmZhdnMuc3BsaWNlKGluZGV4LCAxKTtcclxuXHRcdFx0ZmVlZHNTZXJ2aWNlLnNldEZhdnNPcmRlcigpLnRoZW4oZnVuY3Rpb24gKHJlc3ApIHtcclxuXHRcdFx0XHRkYXNoYm9hcmRTZXJ2aWNlLmhpZGVMb2FkaW5nKCk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdFx0JHNjb3BlLmdldEFsbCA9IGZ1bmN0aW9uICgkZXZlbnQpIHtcclxuXHRcdFx0c2V0QXJ0aWNsZXNUeXBlKGFuZ3VsYXIuZWxlbWVudCgkZXZlbnQuY3VycmVudFRhcmdldCkucGFyZW50KCksICdhbGwnKTtcclxuXHRcdFx0Ly8gaWYgdGhlcmUgaXMgb25seSBvbmUgY2F0ZWdvcnkgYW5kIGZlZWQsIHJldHVybiB0aGlzIGZlZWQgYXJ0aWNsZXNcclxuXHRcdFx0aWYgKCRzY29wZS5mZWVkcy5sZW5ndGggPT09IDEgJiYgJHNjb3BlLmZlZWRzWzBdLmZlZWRzLmxlbmd0aCA9PT0gMSkge1xyXG5cdFx0XHRcdGFydGljbGVzU2VydmljZS5nZXRBcnRpY2xlc0J5RmVlZCgkc2NvcGUuZmVlZHNbMF0uZmVlZHNbMF0pLnRoZW4oZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdFx0JHN0YXRlLmdvKFwiZGFzaGJvYXJkLlwiICsgZGFzaGJvYXJkU2VydmljZS5nZXRWaWV3TW9kZSgpKTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRhcnRpY2xlc1NlcnZpY2UuZ2V0QWxsQXJ0aWNsZXMoKS50aGVuKGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHRcdCRzdGF0ZS5nbyhcImRhc2hib2FyZC5cIiArIGRhc2hib2FyZFNlcnZpY2UuZ2V0Vmlld01vZGUoKSk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdCRzY29wZS5nZXRCeUZlZWQgPSBmdW5jdGlvbiAoJGV2ZW50LCBmZWVkKSB7XHJcblx0XHRcdHNldEFydGljbGVzVHlwZShhbmd1bGFyLmVsZW1lbnQoJGV2ZW50LmN1cnJlbnRUYXJnZXQpLnBhcmVudCgpKTtcclxuXHRcdFx0YXJ0aWNsZXNTZXJ2aWNlLmdldEFydGljbGVzQnlGZWVkKGZlZWQpLnRoZW4oZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdCRzdGF0ZS5nbyhcImRhc2hib2FyZC5cIiArIGRhc2hib2FyZFNlcnZpY2UuZ2V0Vmlld01vZGUoKSk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdFx0JHNjb3BlLmdldEJ5Q2F0ID0gZnVuY3Rpb24gKCRldmVudCwgY2F0LCBpbmRleCkge1xyXG5cdFx0XHRzZXRBcnRpY2xlc1R5cGUoYW5ndWxhci5lbGVtZW50KCRldmVudC5jdXJyZW50VGFyZ2V0KS5wYXJlbnQoKSwgJ2NhdGVnb3J5JywgY2F0KTtcclxuXHRcdFx0aWYgKCRldmVudC5jdXJyZW50VGFyZ2V0LmF0dHJpYnV0ZXNbNF0pIHtcclxuXHRcdFx0XHRpZiAoJGV2ZW50LmN1cnJlbnRUYXJnZXQuYXR0cmlidXRlc1s0XS52YWx1ZSA9PSAndHJ1ZScpIHtcclxuXHRcdFx0XHRcdGFuZ3VsYXIuZWxlbWVudCgkZXZlbnQuY3VycmVudFRhcmdldCkucmVtb3ZlQ2xhc3MoJ2NoZXZyb24tZG93bicpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpZiAoJGV2ZW50LmN1cnJlbnRUYXJnZXQuYXR0cmlidXRlc1s0XS52YWx1ZSA9PSAnZmFsc2UnKSB7XHJcblx0XHRcdFx0XHRhbmd1bGFyLmVsZW1lbnQoJGV2ZW50LmN1cnJlbnRUYXJnZXQpLmFkZENsYXNzKCdjaGV2cm9uLWRvd24nKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0YW5ndWxhci5lbGVtZW50KCRldmVudC5jdXJyZW50VGFyZ2V0KS5hZGRDbGFzcygnY2hldnJvbi1kb3duJyk7XHJcblx0XHRcdH1cclxuXHRcdFx0Ly8gaWYgdGhlcmUgaXMgb25seSBvbmUgZmVlZCB3aXRoaW4gc2VsZWN0ZWQgY2F0ZWdvcnksIHJldHVybiBpdHMgYXJ0aWNsZXNcclxuXHRcdFx0aWYgKCRzY29wZS5mZWVkc1thcmd1bWVudHNbMl1dLmZlZWRzLmxlbmd0aCA9PSAxKSB7XHJcblx0XHRcdFx0YXJ0aWNsZXNTZXJ2aWNlLmdldEFydGljbGVzQnlGZWVkKCRzY29wZS5mZWVkc1thcmd1bWVudHNbMl1dLmZlZWRzWzBdKS50aGVuKGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHRcdCRzdGF0ZS5nbyhcImRhc2hib2FyZC5cIiArIGRhc2hib2FyZFNlcnZpY2UuZ2V0Vmlld01vZGUoKSk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0YXJ0aWNsZXNTZXJ2aWNlLmdldEFydGljbGVzQnlDYXQoYXJndW1lbnRzWzFdKS50aGVuKGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHRcdCRzdGF0ZS5nbyhcImRhc2hib2FyZC5cIiArIGRhc2hib2FyZFNlcnZpY2UuZ2V0Vmlld01vZGUoKSk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdCRzY29wZS5zaGV2cm9uVG9nZ2xlID0gZnVuY3Rpb24gKCRldmVudCkge1xyXG5cdFx0ICAgIGlmICgkZXZlbnQuY3VycmVudFRhcmdldC5hdHRyaWJ1dGVzWzRdKSB7XHJcblx0XHQgICAgICAgIGlmICgkZXZlbnQuY3VycmVudFRhcmdldC5hdHRyaWJ1dGVzWzRdLnZhbHVlID09ICd0cnVlJykge1xyXG5cdFx0ICAgICAgICAgICAgYW5ndWxhci5lbGVtZW50KCRldmVudC5jdXJyZW50VGFyZ2V0KS5yZW1vdmVDbGFzcygnY2hldnJvbi1kb3duJyk7XHJcblx0XHQgICAgICAgIH1cclxuXHRcdCAgICAgICAgaWYgKCRldmVudC5jdXJyZW50VGFyZ2V0LmF0dHJpYnV0ZXNbNF0udmFsdWUgPT0gJ2ZhbHNlJykge1xyXG5cdFx0ICAgICAgICAgICAgYW5ndWxhci5lbGVtZW50KCRldmVudC5jdXJyZW50VGFyZ2V0KS5hZGRDbGFzcygnY2hldnJvbi1kb3duJyk7XHJcblx0XHQgICAgICAgIH1cclxuXHRcdCAgICB9XHJcblx0XHQgICAgZWxzZSB7XHJcblx0XHQgICAgICAgIGFuZ3VsYXIuZWxlbWVudCgkZXZlbnQuY3VycmVudFRhcmdldCkuYWRkQ2xhc3MoJ2NoZXZyb24tZG93bicpO1xyXG5cdFx0ICAgIH1cclxuXHRcdH1cclxuXHRcdCRzY29wZS5nZXRGYXZvdXJpdGVzID0gZnVuY3Rpb24gKCRldmVudCkge1xyXG5cdFx0XHRzZXRBcnRpY2xlc1R5cGUoYW5ndWxhci5lbGVtZW50KCRldmVudC5jdXJyZW50VGFyZ2V0KS5wYXJlbnQoKSwgJ2Zhdm91cml0ZXMnKTtcclxuXHRcdFx0aWYgKCRldmVudC5jdXJyZW50VGFyZ2V0LmF0dHJpYnV0ZXNbNF0pIHtcclxuXHRcdFx0XHRpZiAoJGV2ZW50LmN1cnJlbnRUYXJnZXQuYXR0cmlidXRlc1s0XS52YWx1ZSA9PSAndHJ1ZScpIHtcclxuXHRcdFx0XHRcdGFuZ3VsYXIuZWxlbWVudCgkZXZlbnQuY3VycmVudFRhcmdldCkucmVtb3ZlQ2xhc3MoJ2NoZXZyb24tZG93bicpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpZiAoJGV2ZW50LmN1cnJlbnRUYXJnZXQuYXR0cmlidXRlc1s0XS52YWx1ZSA9PSAnZmFsc2UnKSB7XHJcblx0XHRcdFx0XHRhbmd1bGFyLmVsZW1lbnQoJGV2ZW50LmN1cnJlbnRUYXJnZXQpLmFkZENsYXNzKCdjaGV2cm9uLWRvd24nKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0YW5ndWxhci5lbGVtZW50KCRldmVudC5jdXJyZW50VGFyZ2V0KS5hZGRDbGFzcygnY2hldnJvbi1kb3duJyk7XHJcblx0XHRcdH1cclxuXHRcdFx0YXJ0aWNsZXNTZXJ2aWNlLmdldEZhdm91cml0ZXMoKTtcclxuXHRcdFx0JHN0YXRlLmdvKFwiZGFzaGJvYXJkLlwiICsgZGFzaGJvYXJkU2VydmljZS5nZXRWaWV3TW9kZSgpKTtcclxuXHRcdH1cclxuXHRcdCRzY29wZS5nZXRGYXZBcnRpY2xlc0J5Q2F0ID0gZnVuY3Rpb24gKCRldmVudCwgY2F0KSB7XHJcblx0XHRcdHNldEFydGljbGVzVHlwZShhbmd1bGFyLmVsZW1lbnQoJGV2ZW50LmN1cnJlbnRUYXJnZXQpLnBhcmVudCgpLCAnY2F0ZWdvcnknLCBjYXQpO1xyXG5cdFx0XHRpZiAoJGV2ZW50LmN1cnJlbnRUYXJnZXQuYXR0cmlidXRlc1s0XSkge1xyXG5cdFx0XHRcdGlmICgkZXZlbnQuY3VycmVudFRhcmdldC5hdHRyaWJ1dGVzWzRdLnZhbHVlID09ICd0cnVlJykge1xyXG5cdFx0XHRcdFx0YW5ndWxhci5lbGVtZW50KCRldmVudC5jdXJyZW50VGFyZ2V0KS5yZW1vdmVDbGFzcygnY2hldnJvbi1kb3duJyk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmICgkZXZlbnQuY3VycmVudFRhcmdldC5hdHRyaWJ1dGVzWzRdLnZhbHVlID09ICdmYWxzZScpIHtcclxuXHRcdFx0XHRcdGFuZ3VsYXIuZWxlbWVudCgkZXZlbnQuY3VycmVudFRhcmdldCkuYWRkQ2xhc3MoJ2NoZXZyb24tZG93bicpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIHtcclxuXHRcdFx0XHRhbmd1bGFyLmVsZW1lbnQoJGV2ZW50LmN1cnJlbnRUYXJnZXQpLmFkZENsYXNzKCdjaGV2cm9uLWRvd24nKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRhcnRpY2xlc1NlcnZpY2UuZ2V0RmF2QXJ0aWNsZXNCeUNhdChhcmd1bWVudHNbMV0pO1xyXG5cdFx0XHQkc3RhdGUuZ28oXCJkYXNoYm9hcmQuXCIgKyBkYXNoYm9hcmRTZXJ2aWNlLmdldFZpZXdNb2RlKCkpO1xyXG5cdFx0fVxyXG5cdFx0JHNjb3BlLmdldEZhdkFydGljbGUgPSBmdW5jdGlvbiAoJGV2ZW50LCBhcnRpY2xlKSB7XHJcblx0XHRcdHNldEFydGljbGVzVHlwZShhbmd1bGFyLmVsZW1lbnQoJGV2ZW50LmN1cnJlbnRUYXJnZXQpLnBhcmVudCgpKTtcclxuXHRcdFx0YXJ0aWNsZXNTZXJ2aWNlLmdldEZhdkFydGljbGUoYXJ0aWNsZSk7XHJcblx0XHRcdCRzdGF0ZS5nbyhcImRhc2hib2FyZC5cIiArIGRhc2hib2FyZFNlcnZpY2UuZ2V0Vmlld01vZGUoKSk7XHJcblx0XHR9XHJcblx0XHQkc2NvcGUuaGlkZUZhdm91cml0ZXMgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdHJldHVybiAkc2NvcGUuZmF2cy5sZW5ndGg7XHJcblx0XHR9XHJcblxyXG5cdFx0JHNjb3BlLmNoZWNrSWZFbXB0eSA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0aWYgKGZlZWRzU2VydmljZS5mZWVkc0RpY3Rpb25hcnkubGVuZ3RoID09IDApIHtcclxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdH0gZWxzZSByZXR1cm4gdHJ1ZTtcclxuXHRcdH1cclxuXHRcdCRzY29wZS50b2dnbGUgPSBmYWxzZTtcclxuXHRcdHZhciBzZXRBcnRpY2xlc1R5cGUgPSBmdW5jdGlvbiAoZWxlbWVudCwgdHlwZSwgdmFsdWUpIHtcclxuXHRcdFx0aWYgKHR5cGUgJiYgdmFsdWUpIHtcclxuXHRcdFx0XHRkYXNoYm9hcmRTZXJ2aWNlLnNldEN1cnJlbnRBcnRpY2xlc1R5cGUodHlwZSwgdmFsdWUpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmICgkc2NvcGUuY3VycmVudFNlbGVjdGVkSXRlbSkge1xyXG5cdFx0XHRcdCRzY29wZS5jdXJyZW50U2VsZWN0ZWRJdGVtLnJlbW92ZUNsYXNzKCdzZWxlY3RlZCcpO1xyXG5cdFx0XHR9XHJcblx0XHRcdCRzY29wZS5jdXJyZW50U2VsZWN0ZWRJdGVtID0gZWxlbWVudDtcclxuXHRcdFx0JHNjb3BlLmN1cnJlbnRTZWxlY3RlZEl0ZW0uYWRkQ2xhc3MoJ3NlbGVjdGVkJyk7XHJcblx0XHR9XHJcblx0fV0pO1xyXG59KSgpO1xuYW5ndWxhci5tb2R1bGUoJ3Jzc3JlYWRlcicpLmRpcmVjdGl2ZSgnbW9kYWwnLCBbZnVuY3Rpb24gKCkge1xyXG5cdHJldHVybiB7XHJcblx0XHRyZXN0cmljdDogJ0UnLFxyXG5cdFx0c2NvcGU6IHtcclxuXHRcdFx0c2hvdzogJz0nXHJcblx0XHR9LFxyXG5cdFx0cmVwbGFjZTogdHJ1ZSxcclxuXHRcdHRyYW5zY2x1ZGU6IHRydWUsXHJcblx0XHRsaW5rOiBmdW5jdGlvbiAoc2NvcGUsIGVsZW1lbnQsIGF0dHJzLCBjdHJsKSB7XHJcblx0XHRcdHNjb3BlLm1vZGFsU3R5bGUgPSB7fTtcclxuXHJcblx0XHRcdHNjb3BlLmhpZGVNb2RhbCA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHRzY29wZS5zaG93ID0gZmFsc2U7XHJcblx0XHRcdH07XHJcblx0XHR9LFxyXG5cdFx0dGVtcGxhdGVVcmw6ICcuLi9wYXJ0aWFscy9tb2RhbHMvbW9kYWwuaHRtbCdcclxuXHR9O1xyXG59XSk7XHJcblxuYW5ndWxhci5tb2R1bGUoJ3Jzc3JlYWRlcicpLmRpcmVjdGl2ZSgncHdDaGVjaycsIFtmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdHJlcXVpcmU6ICduZ01vZGVsJyxcclxuXHRcdFx0bGluazogZnVuY3Rpb24oc2NvcGUsIGVsZW0sIGF0dHJzLCBjdHJsKSB7XHJcblx0XHRcdFx0dmFyIGZpcnN0UGFzc3dvcmQgPSAnIycgKyBhdHRycy5wd0NoZWNrO1xyXG5cdFx0XHRcdGVsZW0uYWRkKGZpcnN0UGFzc3dvcmQpLm9uKCdrZXl1cCcsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0c2NvcGUuJGFwcGx5KGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHRpZiAoZWxlbS52YWwoKSA9PT0gXCJcIikge1xyXG5cdFx0XHRcdFx0XHRcdHJldHVybjtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR2YXIgdiA9IGVsZW0udmFsKCkgPT09ICQoZmlyc3RQYXNzd29yZCkudmFsKCk7XHJcblx0XHRcdFx0XHRcdGN0cmwuJHNldFZhbGlkaXR5KCdwd21hdGNoJywgdik7XHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1dKTtcbmFuZ3VsYXIubW9kdWxlKCdyc3NyZWFkZXInKS5kaXJlY3RpdmUoJ2NoZWNrU3RyZW5ndGgnLCBbZnVuY3Rpb24oKSB7XHJcblx0cmV0dXJuIHtcclxuXHRcdHJlcGxhY2U6IGZhbHNlLFxyXG5cdFx0cmVzdHJpY3Q6ICdFQUNNJyxcclxuXHRcdGxpbms6IGZ1bmN0aW9uKHNjb3BlLCBpRWxlbWVudCwgaUF0dHJzKSB7XHJcblx0XHRcdHZhciBzdHJlbmd0aCA9IHtcclxuXHRcdFx0XHRjb2xvcnM6IFsnI0YwMCcsICcjRjkwJywgJyNGRjAnLCAnIzlGMCcsICcjMEYwJ10sXHJcblx0XHRcdFx0bWVzdXJlU3RyZW5ndGg6IGZ1bmN0aW9uKHApIHtcclxuXHRcdFx0XHRcdGlmIChwKSB7XHJcblx0XHRcdFx0XHRcdHZhciBfZm9yY2UgPSAwLFxyXG5cdFx0XHRcdFx0XHRcdF9yZWdleCA9IC9bI0AkLS86LT8tfiFcIl5fYF0vZyxcclxuXHRcdFx0XHRcdFx0XHRfbG93ZXJMZXR0ZXJzID0gL1thLXpdKy8udGVzdChwKSxcclxuXHRcdFx0XHRcdFx0XHRfdXBwZXJMZXR0ZXJzID0gL1tBLVpdKy8udGVzdChwKSxcclxuXHRcdFx0XHRcdFx0XHRfbnVtYmVycyA9IC9bMC05XSsvLnRlc3QocCksXHJcblx0XHRcdFx0XHRcdFx0X3N5bWJvbHMgPSBfcmVnZXgudGVzdChwKSxcclxuXHRcdFx0XHRcdFx0XHRfZmxhZ3MgPSBbX2xvd2VyTGV0dGVycywgX3VwcGVyTGV0dGVycywgX251bWJlcnMsIF9zeW1ib2xzXSxcclxuXHRcdFx0XHRcdFx0XHRfcGFzc2VkTWF0Y2hlcyA9ICQuZ3JlcChfZmxhZ3MsIGZ1bmN0aW9uKGVsKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gZWwgPT09IHRydWU7XHJcblx0XHRcdFx0XHRcdFx0fSkubGVuZ3RoO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRfZm9yY2UgKz0gMiAqIHAubGVuZ3RoICsgKChwLmxlbmd0aCA+PSAxMCkgPyAxIDogMCk7XHJcblx0XHRcdFx0XHRcdFx0X2ZvcmNlICs9IF9wYXNzZWRNYXRjaGVzICogMTA7XHJcblxyXG5cdFx0XHRcdFx0XHRcdC8vIHBlbmFsaXR5IChzaG9ydCBwYXNzd29yZClcclxuXHRcdFx0XHRcdFx0XHRfZm9yY2UgPSAocC5sZW5ndGggPD0gNSkgPyBNYXRoLm1pbihfZm9yY2UsIDEwKSA6IF9mb3JjZTtcclxuXHRcdFx0XHRcdFx0XHQvLyBwZW5hbGl0eSAocG9vciB2YXJpZXR5IG9mIGNoYXJhY3RlcnMpXHJcblx0XHRcdFx0XHRcdFx0X2ZvcmNlID0gKF9wYXNzZWRNYXRjaGVzID09IDEpID8gTWF0aC5taW4oX2ZvcmNlLCAxMCkgOiBfZm9yY2U7XHJcblx0XHRcdFx0XHRcdFx0X2ZvcmNlID0gKF9wYXNzZWRNYXRjaGVzID09IDIpID8gTWF0aC5taW4oX2ZvcmNlLCAyMCkgOiBfZm9yY2U7XHJcblx0XHRcdFx0XHRcdFx0X2ZvcmNlID0gKF9wYXNzZWRNYXRjaGVzID09IDMpID8gTWF0aC5taW4oX2ZvcmNlLCA0MCkgOiBfZm9yY2U7XHJcblxyXG5cdFx0XHRcdFx0XHRyZXR1cm4gX2ZvcmNlO1xyXG5cclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdHJldHVybiBzY29wZS51c2VyLnBhc3N3b3JkID0gJyc7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRnZXRDb2xvcjogZnVuY3Rpb24ocykge1xyXG5cdFx0XHRcdFx0dmFyIGlkeCA9IDA7XHJcblx0XHRcdFx0XHRpZiAocyA8PSAxMCkgeyBpZHggPSAwOyB9IGVsc2UgaWYgKHMgPD0gMjApIHsgaWR4ID0gMTsgfSBlbHNlIGlmIChzIDw9IDMwKSB7IGlkeCA9IDI7IH0gZWxzZSBpZiAocyA8PSA0MCkgeyBpZHggPSAzOyB9IGVsc2UgeyBpZHggPSA0OyB9XHJcblxyXG5cdFx0XHRcdFx0cmV0dXJuIHsgaWR4OiBpZHggKyAxLCBjb2w6IHRoaXMuY29sb3JzW2lkeF0gfTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH07XHJcblx0XHRcdHNjb3BlLiR3YXRjaChpQXR0cnMuY2hlY2tTdHJlbmd0aCwgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0aWYgKHNjb3BlLnVzZXIucGFzc3dvcmQgPT09ICcnKSB7XHJcblx0XHRcdFx0XHRpRWxlbWVudC5jc3MoeyBcImRpc3BsYXlcIjogXCJub25lXCIgfSk7XHJcblx0XHRcdFx0fSBcclxuXHRcdFx0XHRlbHNlIGlmKHNjb3BlLnBhc3N3b3JkLnBhcyA9PT0gJycpIHtcclxuXHRcdFx0XHRcdGlFbGVtZW50LmNzcyh7IFwiZGlzcGxheVwiOiBcIm5vbmVcIiB9KTtcdFx0XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdHZhciBjID0gc3RyZW5ndGguZ2V0Q29sb3Ioc3RyZW5ndGgubWVzdXJlU3RyZW5ndGgoc2NvcGUudXNlci5wYXNzd29yZCB8fCBzY29wZS5wYXNzd29yZC5wYXMpKTtcclxuXHRcdFx0XHRcdGlFbGVtZW50LmNzcyh7IFwiZGlzcGxheVwiOiBcImJsb2NrXCIgfSk7XHJcblx0XHRcdFx0XHRpRWxlbWVudC5jaGlsZHJlbignbGknKVxyXG5cdFx0XHRcdFx0XHQuY3NzKHsgXCJiYWNrZ3JvdW5kXCI6IFwiI0RERFwiIH0pXHJcblx0XHRcdFx0XHRcdC5zbGljZSgwLCBjLmlkeClcclxuXHRcdFx0XHRcdFx0LmNzcyh7IFwiYmFja2dyb3VuZFwiOiBjLmNvbCB9KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0fSxcclxuXHRcdHRlbXBsYXRlOiAnPGxpIGNsYXNzPVwicG9pbnRcIj48L2xpPjxsaSBjbGFzcz1cInBvaW50XCI+PC9saT48bGkgY2xhc3M9XCJwb2ludFwiPjwvbGk+PGxpIGNsYXNzPVwicG9pbnRcIj48L2xpPjxsaSBjbGFzcz1cInBvaW50XCI+PC9saT4nXHJcblx0fTtcclxufV0pO1xuYW5ndWxhci5tb2R1bGUoJ3Jzc3JlYWRlcicpLmRpcmVjdGl2ZSgndG9hc3RlcicsIFsnJHRpbWVvdXQnLCAndG9hc3RlclNlcnZpY2UnLCBmdW5jdGlvbiAoJHRpbWVvdXQsIHRvYXN0ZXJTZXJ2aWNlKSB7XHJcblx0cmV0dXJuIHtcclxuXHRcdHJlc3RyaWN0OiAnRScsXHJcblx0XHR0cmFuc2NsdWRlOiB0cnVlLFxyXG5cdFx0bGluazogZnVuY3Rpb24gKHNjb3BlLCBlbGVtZW50LCBhdHRycykgeyBcclxuXHRcdFx0aWYgKGF0dHJzLm92ZXJsYXkpIHtcclxuXHRcdFx0XHRzY29wZS5vdmVybGF5ID0gdHJ1ZTtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIHtcclxuXHRcdFx0XHRzY29wZS5vdmVybGF5ID0gZmFsc2U7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKGF0dHJzLmRlbGF5KSB7XHJcblx0XHRcdFx0c2NvcGUuZGVsYXkgPSBhdHRycy5kZWxheTtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIHtcclxuXHRcdFx0XHRzY29wZS5kZWxheSA9IDUwMDA7XHJcblx0XHRcdH1cclxuXHRcdFx0c2NvcGUudG9hc3RlclN0eWxlID0ge307XHJcblx0XHRcdHNjb3BlLmNvbmZpcm0gPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0c2NvcGUuJHBhcmVudFthdHRycy5jb25maXJtXSgpO1xyXG5cdFx0XHRcdHNjb3BlLmhpZGVUb2FzdGVyKCk7XHJcblx0XHRcdH1cclxuXHRcdFx0c2NvcGUucmVqZWN0ID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdHNjb3BlLmhpZGVUb2FzdGVyKCk7XHJcblx0XHRcdH1cclxuXHRcdFx0c2NvcGUuaGlkZVRvYXN0ZXIgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0JHRpbWVvdXQuY2FuY2VsKHNjb3BlLnRpbWVyKTtcclxuXHRcdFx0XHRzY29wZS4kZGVzdHJveSgpO1xyXG5cdFx0XHRcdHRvYXN0ZXJTZXJ2aWNlLnJlbW92ZVRvYXN0ZXIoZWxlbWVudCk7XHJcblx0XHRcdH07XHJcblx0XHRcdHNjb3BlLnRpbWVyID0gJHRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdHNjb3BlLmhpZGVUb2FzdGVyKCk7XHJcblx0XHRcdH0sIHNjb3BlLmRlbGF5KTtcclxuXHRcdH0sXHJcblx0XHR0ZW1wbGF0ZVVybDogJy4uL3BhcnRpYWxzL21vZGFscy90b2FzdGVyLmh0bWwnXHJcblx0fTtcclxufV0pO1xuKGZ1bmN0aW9uICgpIHtcclxuXHQndXNlIHN0cmljdCc7XHJcblx0YW5ndWxhci5tb2R1bGUoJ3Jzc3JlYWRlcicpXHJcblx0LmZhY3RvcnkoJ2FjY291bnRJbmZvJywgWyckaHR0cCcsIGZ1bmN0aW9uICgkaHR0cCkge1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0Z2V0UHJvZmlsZTogZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdHJldHVybiAkaHR0cC5nZXQoJy9hcGkvbWUnKTtcclxuXHRcdFx0fSxcclxuXHRcdFx0dXBkYXRlUHJvZmlsZTogZnVuY3Rpb24gKHByb2ZpbGVEYXRhKSB7XHJcblx0XHRcdFx0cmV0dXJuICRodHRwLnB1dCgnL2FwaS9tZScsIHByb2ZpbGVEYXRhKTtcclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHR9XSk7XHJcbn0pKCk7XG4oZnVuY3Rpb24gKCkge1xyXG5cdCd1c2Ugc3RyaWN0JztcclxuXHRTdHJpbmcucHJvdG90eXBlLnJlcGxhY2VBbGwgPSBmdW5jdGlvbiAodGFyZ2V0LCByZXBsYWNlbWVudCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuc3BsaXQodGFyZ2V0KS5qb2luKHJlcGxhY2VtZW50KTtcclxuXHR9O1xyXG5cdGFuZ3VsYXIubW9kdWxlKCdyc3NyZWFkZXInKS5mYWN0b3J5KCdhcnRpY2xlc1NlcnZpY2UnLCBbJyRodHRwJywgJyRzdGF0ZScsICckcScsICdhdXRoU2VydmljZScsICckdGltZW91dCcsICdkYXNoYm9hcmRTZXJ2aWNlJywgJ2ZlZWRzU2VydmljZScsIGZ1bmN0aW9uICgkaHR0cCwgJHN0YXRlLCAkcSwgYXV0aFNlcnZpY2UsICR0aW1lb3V0LCBkYXNoYm9hcmRTZXJ2aWNlLCBmZWVkc1NlcnZpY2UpIHtcclxuXHRcdHZhciBBUlRJQ0xFU19OVU0gPSA1MCxcclxuXHRcdFx0bG9hZERlbGF5ID0gMzUwLFxyXG5cdFx0XHR0ZW1wX2FydGljbGVzID0gW10sXHJcblx0XHRcdGRlZmVyID0gJHEuZGVmZXIoKSxcclxuXHRcdFx0cHJvbWlzZXMgPSBbXSxcclxuXHRcdFx0b2JqID0ge1xyXG5cdFx0XHQgICAgYXJ0aWNsZXM6IFtdLFxyXG5cdFx0XHQgICAgYWR2aWNlZEFydGljbGVzOiBbXSxcclxuXHRcdFx0XHRhcnRpY2xlRm9yUmVhZDogbnVsbCxcclxuXHRcdFx0XHRpc0Zhdm91cml0ZXM6IGZhbHNlLFxyXG5cdFx0XHRcdGRpc3BsYXllZEluY3JlbWVudDogMjAsXHJcblx0XHRcdFx0dG90YWxEaXNwbGF5ZWQ6IDIwLFxyXG5cdFx0XHRcdGNoZWNrSWZGYXZvdXJpdGVzOiBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gb2JqLmlzRmF2b3VyaXRlcztcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHNldFJlYWRBcnRpY2xlOiBmdW5jdGlvbiAoJHNjb3BlLCBmZWVkLCBsaW5rKSB7XHJcblx0XHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG9iai5hcnRpY2xlcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRcdFx0XHRpZiAob2JqLmFydGljbGVzW2ldLmxpbmsgPT09IGxpbmspIHtcclxuXHRcdFx0XHRcdFx0XHQkc2NvcGUuYXJ0aWNsZUZvclJlYWQgPSBvYmouYXJ0aWNsZXNbaV07XHJcblx0XHRcdFx0XHRcdFx0ZGFzaGJvYXJkU2VydmljZS5oaWRlTG9hZGluZygpO1xyXG5cdFx0XHRcdFx0XHRcdHJldHVybjtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0cmV0dXJuIGdldEZlZWREYXRhQnlJZChmZWVkKS5zdWNjZXNzKGZ1bmN0aW9uIChyZXMpIHtcclxuXHRcdFx0XHRcdFx0b2JqLnJlc2V0QXJ0aWNsZXMoKTtcclxuXHRcdFx0XHRcdFx0dmFyIGZlZWRPYmogPSByZXM7XHJcblx0XHRcdFx0XHRcdHJldHVybiBmZXRjaEFydGljbGVzKGZlZWRPYmopLnRoZW4oZnVuY3Rpb24gKHJlcykge1xyXG5cdFx0XHRcdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGVtcF9hcnRpY2xlcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKHRlbXBfYXJ0aWNsZXNbaV0ubGluayA9PT0gbGluaykge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHQkc2NvcGUuYXJ0aWNsZUZvclJlYWQgPSB0ZW1wX2FydGljbGVzW2ldO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRkYXNoYm9hcmRTZXJ2aWNlLmhpZGVMb2FkaW5nKCk7XHJcblx0XHRcdFx0XHRcdFx0aWYgKCEkc2NvcGUuYXJ0aWNsZUZvclJlYWQpIHtcclxuXHRcdFx0XHRcdFx0XHRcdGRhc2hib2FyZFNlcnZpY2UuZGlzcGxheUxvYWRpbmcoKTtcclxuXHRcdFx0XHRcdFx0XHRcdG9iai5yZXNldEFydGljbGVzKCk7XHJcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gZ2V0QXJ0aWNsZURhdGFCeUxpbmsobGluaykudGhlbihmdW5jdGlvbiAocmVzKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGRhc2hib2FyZFNlcnZpY2UuaGlkZUxvYWRpbmcoKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0JHNjb3BlLmFydGljbGVGb3JSZWFkID0gcmVzLmRhdGE7XHJcblx0XHRcdFx0XHRcdFx0XHR9KS5jYXRjaChmdW5jdGlvbiAoZXJyKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGRhc2hib2FyZFNlcnZpY2UuaGlkZUxvYWRpbmcoKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0aWYgKGVyci5zdGF0dXMgPT09IDQwNCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCRzdGF0ZS5nbyhcIjQwNFwiKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdFx0XHRpZiAoZXJyLnN0YXR1cyA9PT0gNDA0KSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdCRzdGF0ZS5nbyhcIjQwNFwiKTtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdGVsc2UgJHN0YXRlLmdvKFwiZGFzaGJvYXJkLlwiICsgZGFzaGJvYXJkU2VydmljZS5nZXRWaWV3TW9kZSgpKTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0fSkuY2F0Y2goZnVuY3Rpb24gKGVycikge1xyXG5cdFx0XHRcdFx0XHRvYmoucmVzZXRBcnRpY2xlcygpO1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gZ2V0QXJ0aWNsZURhdGFCeUxpbmsobGluaykudGhlbihmdW5jdGlvbiAocmVzKSB7XHJcblx0XHRcdFx0XHRcdFx0ZGFzaGJvYXJkU2VydmljZS5oaWRlTG9hZGluZygpO1xyXG5cdFx0XHRcdFx0XHRcdCRzY29wZS5hcnRpY2xlRm9yUmVhZCA9IHJlcy5kYXRhO1xyXG5cdFx0XHRcdFx0XHRcdGRhc2hib2FyZFNlcnZpY2UuaGlkZUxvYWRpbmcoKTtcclxuXHRcdFx0XHRcdFx0fSkuY2F0Y2goZnVuY3Rpb24gKGVycikge1xyXG5cdFx0XHRcdFx0XHRcdGRhc2hib2FyZFNlcnZpY2UuaGlkZUxvYWRpbmcoKTtcclxuXHRcdFx0XHRcdFx0XHRpZiAoZXJyLnN0YXR1cyA9PT0gNDA0KSB7XHJcblx0XHRcdFx0XHRcdFx0XHQkc3RhdGUuZ28oXCI0MDRcIik7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0aWYgKGVyci5zdGF0dXMgPT09IDQwNCkge1xyXG5cdFx0XHRcdFx0XHRcdCRzdGF0ZS5nbyhcIjQwNFwiKTtcclxuXHRcdFx0XHRcdFx0XHRkYXNoYm9hcmRTZXJ2aWNlLmhpZGVMb2FkaW5nKCk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0ZWxzZSAkc3RhdGUuZ28oXCJkYXNoYm9hcmQuXCIgKyBkYXNoYm9hcmRTZXJ2aWNlLmdldFZpZXdNb2RlKCkpO1xyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRnZXRBbGxBcnRpY2xlczogZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdFx0b2JqLnJlc2V0QXJ0aWNsZXMoKTtcclxuXHRcdFx0XHRcdGRhc2hib2FyZFNlcnZpY2Uuc2V0VGl0bGUoXCJBbGxcIik7XHJcblx0XHRcdFx0XHRhbmd1bGFyLmZvckVhY2goZmVlZHNTZXJ2aWNlLmZlZWRzRGljdGlvbmFyeSwgZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcclxuXHRcdFx0XHRcdFx0YW5ndWxhci5mb3JFYWNoKHZhbHVlLmZlZWRzLCBmdW5jdGlvbiAodmFsdWUsIGtleSkge1xyXG5cdFx0XHRcdFx0XHRcdHByb21pc2VzLnB1c2goZmV0Y2hBcnRpY2xlcyh2YWx1ZSkpO1xyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0cmV0dXJuICRxLmFsbChwcm9taXNlcykudGhlbihmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0XHRcdG9iai5hcnRpY2xlcyA9IHRlbXBfYXJ0aWNsZXM7XHJcblx0XHRcdFx0XHRcdGRhc2hib2FyZFNlcnZpY2UuaGlkZUxvYWRpbmcoKTtcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0Z2V0QXJ0aWNsZXNCeUZlZWQ6IGZ1bmN0aW9uIChmZWVkKSB7XHJcblx0XHRcdFx0ICAgIG9iai5yZXNldEFydGljbGVzKCk7XHJcblx0XHRcdFx0ICAgIGRhc2hib2FyZFNlcnZpY2UucmVhZFNpbmdsZUZlZWQuc3RhdGUgPSB0cnVlO1xyXG5cdFx0XHRcdCAgICBkYXNoYm9hcmRTZXJ2aWNlLnNldFNvcnRQYXJhbSgnZGF0ZScsIDEpO1xyXG5cdFx0XHRcdFx0ZGFzaGJvYXJkU2VydmljZS5zZXRUaXRsZShmZWVkLnRpdGxlKTtcclxuXHRcdFx0XHRcdGRhc2hib2FyZFNlcnZpY2Uuc2V0RmVlZElkKGZlZWQpO1xyXG5cdFx0XHRcdFx0cmV0dXJuIGZldGNoQXJ0aWNsZXMoZmVlZCkudGhlbihmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0XHQgICAgb2JqLmFydGljbGVzID0gdGVtcF9hcnRpY2xlcztcclxuXHRcdFx0XHRcdFx0ZGFzaGJvYXJkU2VydmljZS5oaWRlTG9hZGluZygpO1xyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRnZXRBcnRpY2xlc0J5Q2F0OiBmdW5jdGlvbiAoY2F0KSB7XHJcblx0XHRcdFx0XHRvYmoucmVzZXRBcnRpY2xlcygpO1xyXG5cdFx0XHRcdFx0ZGFzaGJvYXJkU2VydmljZS5zZXRUaXRsZShjYXQpO1xyXG5cdFx0XHRcdFx0YW5ndWxhci5mb3JFYWNoKGZlZWRzU2VydmljZS5mZWVkc0RpY3Rpb25hcnksIGZ1bmN0aW9uICh2YWx1ZSwga2V5KSB7XHJcblx0XHRcdFx0XHRcdGlmICh2YWx1ZS5jYXRlZ29yeSA9PT0gY2F0KSB7XHJcblx0XHRcdFx0XHRcdFx0YW5ndWxhci5mb3JFYWNoKHZhbHVlLmZlZWRzLCBmdW5jdGlvbiAodmFsdWUsIGtleSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0cHJvbWlzZXMucHVzaChmZXRjaEFydGljbGVzKHZhbHVlKSk7XHJcblx0XHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0cmV0dXJuICRxLmFsbChwcm9taXNlcykudGhlbihmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0XHRcdG9iai5hcnRpY2xlcyA9IHRlbXBfYXJ0aWNsZXM7XHJcblx0XHRcdFx0XHRcdGRhc2hib2FyZFNlcnZpY2UuaGlkZUxvYWRpbmcoKTtcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0Z2V0RmF2b3VyaXRlczogZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdCAgICByZXR1cm4gJHRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdFx0ICAgIG9iai5yZXNldEFydGljbGVzKCk7XHJcblx0XHRcdFx0XHQgICAgb2JqLmlzRmF2b3VyaXRlcyA9IHRydWU7XHJcblx0XHRcdFx0XHQgICAgZGFzaGJvYXJkU2VydmljZS5zZXRUaXRsZShcIkZhdm91cml0ZXNcIik7XHJcblx0XHRcdFx0XHQgICAgYW5ndWxhci5mb3JFYWNoKGZlZWRzU2VydmljZS5mYXZvdXJpdGVzRGljdGlvbmFyeSwgZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcclxuXHRcdFx0XHRcdFx0ICAgIGFuZ3VsYXIuZm9yRWFjaCh2YWx1ZS5hcnRpY2xlcywgZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcclxuXHRcdFx0XHRcdFx0XHQgICAgb2JqLmFydGljbGVzLnB1c2godmFsdWUpO1xyXG5cdFx0XHRcdFx0XHQgICAgfSk7XHJcblx0XHRcdFx0XHQgICAgfSk7XHJcblx0XHRcdFx0XHQgICAgZGFzaGJvYXJkU2VydmljZS5oaWRlTG9hZGluZygpO1xyXG5cdFx0XHRcdCAgICB9LCBsb2FkRGVsYXkpO1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0Z2V0RmF2QXJ0aWNsZXNCeUNhdDogZnVuY3Rpb24gKGNhdCkge1xyXG5cdFx0XHRcdCAgICByZXR1cm4gJHRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdFx0ICAgIG9iai5yZXNldEFydGljbGVzKCk7XHJcblx0XHRcdFx0XHQgICAgb2JqLmlzRmF2b3VyaXRlcyA9IHRydWU7XHJcblx0XHRcdFx0XHQgICAgZGFzaGJvYXJkU2VydmljZS5zZXRUaXRsZShcIkZhdm91cml0ZXM6IFwiICsgY2F0KTtcclxuXHRcdFx0XHRcdCAgICBhbmd1bGFyLmZvckVhY2goZmVlZHNTZXJ2aWNlLmZhdm91cml0ZXNEaWN0aW9uYXJ5LCBmdW5jdGlvbiAodmFsdWUsIGtleSkge1xyXG5cdFx0XHRcdFx0XHQgICAgaWYgKHZhbHVlLmNhdGVnb3J5ID09PSBjYXQpIHtcclxuXHRcdFx0XHRcdFx0XHQgICAgYW5ndWxhci5mb3JFYWNoKHZhbHVlLmFydGljbGVzLCBmdW5jdGlvbiAodmFsdWUsIGtleSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0ICAgIG9iai5hcnRpY2xlcy5wdXNoKHZhbHVlKTtcclxuXHRcdFx0XHRcdFx0XHQgICAgfSk7XHJcblx0XHRcdFx0XHRcdCAgICB9XHJcblx0XHRcdFx0XHQgICAgfSk7XHJcblx0XHRcdFx0XHQgICAgZGFzaGJvYXJkU2VydmljZS5oaWRlTG9hZGluZygpO1xyXG5cdFx0XHRcdCAgICB9LCBsb2FkRGVsYXkpO1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0Z2V0RmF2QXJ0aWNsZTogZnVuY3Rpb24gKGFydGljbGUpIHtcclxuXHRcdFx0XHQgICAgb2JqLnJlc2V0QXJ0aWNsZXMoKTtcclxuXHRcdFx0XHQgICAgZGFzaGJvYXJkU2VydmljZS5oaWRlU29ydExpc3Quc3RhdGUgPSB0cnVlO1xyXG5cdFx0XHRcdFx0b2JqLmlzRmF2b3VyaXRlcyA9IHRydWU7XHJcblx0XHRcdFx0XHRkYXNoYm9hcmRTZXJ2aWNlLnNldFRpdGxlKFwiRmF2b3VyaXRlc1wiKTtcclxuXHRcdFx0XHRcdG9iai5hcnRpY2xlcy5wdXNoKGFydGljbGUpO1xyXG5cdFx0XHRcdFx0ZGFzaGJvYXJkU2VydmljZS5oaWRlTG9hZGluZygpO1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0YWRkRmF2b3VyaXRlOiBmdW5jdGlvbiAoYXJ0aWNsZSkge1xyXG5cdFx0XHRcdFx0ZGFzaGJvYXJkU2VydmljZS5kaXNwbGF5TG9hZGluZygpO1xyXG5cdFx0XHRcdFx0cmV0dXJuICRodHRwLnBvc3QoJy91c2Vycy8nICsgYXV0aFNlcnZpY2UudXNlcklEKCkgKyAnL2FkZEZhdkFydGljbGUnLCBhcnRpY2xlLCB7XHJcblx0XHRcdFx0XHRcdGhlYWRlcnM6IHtcclxuXHRcdFx0XHRcdFx0XHRBdXRob3JpemF0aW9uOiAnQmVhcmVyICcgKyBhdXRoU2VydmljZS5nZXRUb2tlbigpXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0pLnRoZW4oZnVuY3Rpb24gKHJlcykge1xyXG5cdFx0XHRcdFx0XHRmZWVkc1NlcnZpY2UuZ2V0QWxsRmF2b3VyaXRlcygpO1xyXG5cdFx0XHRcdFx0XHRkYXNoYm9hcmRTZXJ2aWNlLmhpZGVMb2FkaW5nKCk7XHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHJlbW92ZUZhdm91cml0ZTogZnVuY3Rpb24gKGFydGljbGUpIHtcclxuXHRcdFx0XHRcdGRhc2hib2FyZFNlcnZpY2UuZGlzcGxheUxvYWRpbmcoKTtcclxuXHRcdFx0XHRcdHJldHVybiAkaHR0cC5kZWxldGUoJy91c2Vycy8nICsgYXV0aFNlcnZpY2UudXNlcklEKCkgKyAnL2RlbGV0ZUZhdkZlZWQvJyArIGFydGljbGUuX2lkICsgJy8nICsgYXJ0aWNsZS5jYXRlZ29yeSwge1xyXG5cdFx0XHRcdFx0XHRoZWFkZXJzOiB7XHJcblx0XHRcdFx0XHRcdFx0QXV0aG9yaXphdGlvbjogJ0JlYXJlciAnICsgYXV0aFNlcnZpY2UuZ2V0VG9rZW4oKVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9KS50aGVuKGZ1bmN0aW9uIChyZXMpIHtcclxuXHRcdFx0XHRcdFx0ZGFzaGJvYXJkU2VydmljZS5oaWRlTG9hZGluZygpO1xyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRnZXRBZHZpY2VkQXJ0aWNsZXM6IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHQgICAgb2JqLmFkdmljZWRBcnRpY2xlcy5sZW5ndGggPSAwO1xyXG5cdFx0XHRcdCAgICByZXR1cm4gJGh0dHAuZ2V0KCcvdXNlcnMvJyArIGF1dGhTZXJ2aWNlLnVzZXJJRCgpICsgXCIvYWR2aWNlZEFydGljbGVzXCIsIHtcclxuXHRcdFx0XHQgICAgICAgIGhlYWRlcnM6IHtcclxuXHRcdFx0XHQgICAgICAgICAgICBBdXRob3JpemF0aW9uOiAnQmVhcmVyICcgKyBhdXRoU2VydmljZS5nZXRUb2tlbigpXHJcblx0XHRcdFx0ICAgICAgICB9XHJcblx0XHRcdFx0ICAgIH0pLnRoZW4oZnVuY3Rpb24gKHJlcykge1xyXG5cdFx0XHRcdCAgICAgICAgYW5ndWxhci5jb3B5KHJlcy5kYXRhLCBvYmouYWR2aWNlZEFydGljbGVzKTtcclxuXHRcdFx0XHQgICAgfSwgZnVuY3Rpb24gKGVycikge1xyXG5cdFx0XHRcdCAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuXHRcdFx0XHQgICAgfSk7XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRyZXNldEFydGljbGVzOiBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0ICAgIGRhc2hib2FyZFNlcnZpY2UuaGlkZVNvcnRMaXN0LnN0YXRlID0gZmFsc2U7XHJcblx0XHRcdFx0ICAgIGRhc2hib2FyZFNlcnZpY2UucmVhZFNpbmdsZUZlZWQuc3RhdGUgPSBmYWxzZTtcclxuXHRcdFx0XHRcdHRoaXMudG90YWxEaXNwbGF5ZWQgPSB0aGlzLmRpc3BsYXllZEluY3JlbWVudDtcclxuXHRcdFx0XHRcdGRhc2hib2FyZFNlcnZpY2UuZGlzcGxheUxvYWRpbmcoKTtcclxuXHRcdFx0XHRcdHRlbXBfYXJ0aWNsZXMubGVuZ3RoID0gMDtcclxuXHRcdFx0XHRcdG9iai5hcnRpY2xlcy5sZW5ndGggPSAwO1xyXG5cdFx0XHRcdFx0b2JqLmlzRmF2b3VyaXRlcyA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0ZGFzaGJvYXJkU2VydmljZS5yZXNldEZlZWRJZCgpO1xyXG5cdFx0XHRcdFx0cHJvbWlzZXMubGVuZ3RoID0gMDtcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdC8vIEFkZGl0aW9uYWwgbWV0aG9kIGZvciB1bml0IHRlc3RpbmdcclxuXHRcdFx0XHRnZXRBcnRpY2xlc0ZldGNoZXI6IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHRcdHJldHVybiBmZXRjaEFydGljbGVzO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0Z2V0SW1hZ2UgPSBmdW5jdGlvbiAoaXRlbSwgZm9ybWF0KSB7XHJcblx0XHRcdFx0dmFyIHNvdXJjZSA9IFwiXCI7XHJcblx0XHRcdFx0aWYgKGZvcm1hdCA9PT0gXCJSU1NcIikge1xyXG5cdFx0XHRcdFx0aWYgKCFpdGVtLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdlbmNsb3N1cmUnKS5sZW5ndGgpIHtcclxuXHRcdFx0XHRcdFx0dHJ5IHtcclxuXHRcdFx0XHRcdFx0XHRzb3VyY2UgPSAkKGl0ZW0pLmZpbmQoJ21lZGlhXFxcXDpjb250ZW50LCBjb250ZW50JylbMF0uZ2V0QXR0cmlidXRlKCd1cmwnKTtcclxuXHRcdFx0XHRcdFx0fSBjYXRjaCAoZXJyKSB7XHJcblx0XHRcdFx0XHRcdFx0c291cmNlID0gXCJcIjtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRpZiAoc291cmNlID09IFwiXCIgfHwgc291cmNlID09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHRcdFx0XHRcdHRyeSB7XHJcblx0XHRcdFx0XHRcdFx0XHR2YXIgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdFx0XHRcdFx0XHRcdFx0Y29udGVudC5pbm5lckhUTUwgPSBpdGVtLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdkZXNjcmlwdGlvbicpWzBdLnRleHRDb250ZW50O1xyXG5cdFx0XHRcdFx0XHRcdFx0c291cmNlID0gJChjb250ZW50KS5maW5kKCdpbWcnKVswXS5zcmM7XHJcblx0XHRcdFx0XHRcdFx0fSBjYXRjaCAoZXJyKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRzb3VyY2UgPSBcIlwiO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0c291cmNlID0gaXRlbS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnZW5jbG9zdXJlJylbMF0uZ2V0QXR0cmlidXRlKCd1cmwnKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9IGVsc2UgaWYgKGZvcm1hdCA9PT0gXCJBVE9NXCIpIHtcclxuXHRcdFx0XHRcdGlmICghaXRlbS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnZW5jbG9zdXJlJykubGVuZ3RoKSB7XHJcblx0XHRcdFx0XHRcdHRyeSB7XHJcblx0XHRcdFx0XHRcdFx0dmFyIGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHRcdFx0XHRcdFx0XHRjb250ZW50LmlubmVySFRNTCA9IGl0ZW0uZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2NvbnRlbnQnKVswXS50ZXh0Q29udGVudDtcclxuXHRcdFx0XHRcdFx0XHRzb3VyY2UgPSAkKGNvbnRlbnQpLmZpbmQoJ2ltZycpWzBdLnNyYztcclxuXHRcdFx0XHRcdFx0fSBjYXRjaCAoZXJyKSB7XHJcblx0XHRcdFx0XHRcdFx0c291cmNlID0gXCJcIjtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRyZXR1cm4gc291cmNlO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRnZXRDb250ZW50ID0gZnVuY3Rpb24gKGl0ZW0sIGZvcm1hdCkge1xyXG5cdFx0XHRcdHZhciBjb250ZW50ID0gXCJcIjtcclxuXHRcdFx0XHRpZiAoZm9ybWF0ID09PSBcIlJTU1wiKSB7XHJcblx0XHRcdFx0XHR0cnkge1xyXG5cdFx0XHRcdFx0XHRjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblx0XHRcdFx0XHRcdGNvbnRlbnQuaW5uZXJIVE1MID0gaXRlbS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnZGVzY3JpcHRpb24nKVswXS50ZXh0Q29udGVudDtcclxuXHRcdFx0XHRcdFx0Y29udGVudCA9ICQoY29udGVudCkudGV4dCgpO1xyXG5cdFx0XHRcdFx0fSBjYXRjaCAoZXJyKSB7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSBlbHNlIGlmIChmb3JtYXQgPT09IFwiQVRPTVwiKSB7XHJcblx0XHRcdFx0ICAgIGNvbnRlbnQgPSAkKGl0ZW0uZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2NvbnRlbnQnKVswXS5jaGlsZE5vZGVzWzBdLmRhdGEpLnRleHQoKTtcclxuXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmICh0eXBlb2YgY29udGVudCAhPT0gJ3N0cmluZycpIHtcclxuXHRcdFx0XHQgICAgcmV0dXJuIFwiXCI7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2UgcmV0dXJuIGNvbnRlbnQudG9TdHJpbmcoKTtcclxuXHRcdFx0fSxcclxuXHRcdFx0ZmV0Y2hBcnRpY2xlcyA9IGZ1bmN0aW9uIChmZWVkKSB7XHJcblx0XHRcdFx0cmV0dXJuICRodHRwLmpzb25wKFwiaHR0cHM6Ly9hamF4Lmdvb2dsZWFwaXMuY29tL2FqYXgvc2VydmljZXMvZmVlZC9sb2FkP3Y9MS4wJm51bT1cIiArIEFSVElDTEVTX05VTSArIFwiJnE9XCIgKyBlbmNvZGVVUklDb21wb25lbnQoZmVlZC5yc3NsaW5rKSArIFwiJm1ldGhvZD1KU09OUCZjYWxsYmFjaz1KU09OX0NBTExCQUNLJm91dHB1dD14bWxcIilcclxuXHRcdFx0XHRcdC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG5cdFx0XHRcdFx0XHR2YXIgcGFyc2VyID0gbmV3IERPTVBhcnNlcigpLFxyXG5cdFx0XHRcdFx0XHRcdHhtbERvYyA9IHBhcnNlci5wYXJzZUZyb21TdHJpbmcocmVzcG9uc2UuZGF0YS5yZXNwb25zZURhdGEueG1sU3RyaW5nLCBcInRleHQveG1sXCIpLFxyXG5cdFx0XHRcdFx0XHRcdGl0ZW1zID0gW107XHJcblx0XHRcdFx0XHRcdGlmIChmZWVkLmZvcm1hdCA9PT0gXCJSU1NcIikge1xyXG5cdFx0XHRcdFx0XHRcdGl0ZW1zID0geG1sRG9jLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdpdGVtJyk7XHJcblx0XHRcdFx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRcdFx0XHRcdFx0dmFyIGFydGljbGVPYmogPSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHRpdGxlOiBpdGVtc1tpXS5nZXRFbGVtZW50c0J5VGFnTmFtZSgndGl0bGUnKVswXS5pbm5lckhUTUxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQucmVwbGFjZUFsbChcImFwb3M7XCIsICdcXCcnKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC5yZXBsYWNlQWxsKFwiJmFwb3M7XCIsICdcXCcnKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC5yZXBsYWNlQWxsKFwiJmFtcDtcIiwgJycpLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRsaW5rOiBpdGVtc1tpXS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnbGluaycpWzBdLnRleHRDb250ZW50LFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRpbWc6IGdldEltYWdlKGl0ZW1zW2ldLCBmZWVkLmZvcm1hdCksXHJcblx0XHRcdFx0XHRcdFx0XHRcdGNvbnRlbnQ6IGdldENvbnRlbnQoaXRlbXNbaV0sIGZlZWQuZm9ybWF0KSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0ZmVlZDogZmVlZC5faWRcclxuXHRcdFx0XHRcdFx0XHRcdH07XHJcblx0XHRcdFx0XHRcdFx0XHRpZiAoaXRlbXNbaV0uZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3B1YkRhdGUnKVswXSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRhcnRpY2xlT2JqLmRhdGUgPSBEYXRlLnBhcnNlKGl0ZW1zW2ldLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdwdWJEYXRlJylbMF0udGV4dENvbnRlbnQpO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0ZWxzZSBpZiAoIWl0ZW1zW2ldLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdwdWJEYXRlJylbMF0gJiYgIWFydGljbGVPYmouaW1nICYmICFhcnRpY2xlT2JqLmNvbnRlbnQpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0Y29udGludWU7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRhcnRpY2xlT2JqLmNvbnRlbnQgPSBhcnRpY2xlT2JqLmNvbnRlbnQgPyBhcnRpY2xlT2JqLmNvbnRlbnQgOiBhcnRpY2xlT2JqLnRpdGxlO1xyXG5cdFx0XHRcdFx0XHRcdFx0dGVtcF9hcnRpY2xlcy5wdXNoKGFydGljbGVPYmopO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fSBlbHNlIGlmIChmZWVkLmZvcm1hdCA9PT0gXCJBVE9NXCIpIHtcclxuXHRcdFx0XHRcdFx0XHRpdGVtcyA9IHhtbERvYy5nZXRFbGVtZW50c0J5VGFnTmFtZSgnZW50cnknKTtcclxuXHRcdFx0XHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0XHRcdFx0XHR2YXIgYXJ0aWNsZU9iaiA9IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0dGl0bGU6IGl0ZW1zW2ldLmdldEVsZW1lbnRzQnlUYWdOYW1lKCd0aXRsZScpWzBdLnRleHRDb250ZW50LFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRsaW5rOiBhbmd1bGFyLmVsZW1lbnQoaXRlbXNbaV0uZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2xpbmsnKSlbMF0uYXR0cmlidXRlc1tcImhyZWZcIl0udmFsdWUsXHJcblx0XHRcdFx0XHRcdFx0XHRcdGltZzogZ2V0SW1hZ2UoaXRlbXNbaV0sIGZlZWQuZm9ybWF0KSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0Y29udGVudDogZ2V0Q29udGVudChpdGVtc1tpXSwgZmVlZC5mb3JtYXQpLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRkYXRlOiBEYXRlLnBhcnNlKGl0ZW1zW2ldLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdwdWJsaXNoZWQnKVswXS50ZXh0Q29udGVudCksXHJcblx0XHRcdFx0XHRcdFx0XHRcdGZlZWQ6IGZlZWQuX2lkXHJcblx0XHRcdFx0XHRcdFx0XHR9O1xyXG5cdFx0XHRcdFx0XHRcdFx0YXJ0aWNsZU9iai5jb250ZW50ID0gYXJ0aWNsZU9iai5jb250ZW50ID8gYXJ0aWNsZU9iai5jb250ZW50IDogYXJ0aWNsZU9iai50aXRsZTtcclxuXHRcdFx0XHRcdFx0XHRcdHRlbXBfYXJ0aWNsZXMucHVzaChhcnRpY2xlT2JqKTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0ZGFzaGJvYXJkU2VydmljZS5sb2FkaW5nSWNvbiA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gcmVzcG9uc2UuZGF0YTtcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRnZXRGZWVkRGF0YUJ5SWQgPSBmdW5jdGlvbiAoaWQpIHtcclxuXHRcdFx0XHRyZXR1cm4gJGh0dHAucG9zdCgnL3VzZXJzLycgKyBhdXRoU2VydmljZS51c2VySUQoKSArICcvZ2V0RmVlZERhdGEnLCB7IGlkOiBpZCB9LCB7XHJcblx0XHRcdFx0XHRoZWFkZXJzOiB7XHJcblx0XHRcdFx0XHRcdEF1dGhvcml6YXRpb246ICdCZWFyZXIgJyArIGF1dGhTZXJ2aWNlLmdldFRva2VuKClcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSxcclxuXHRcdFx0Z2V0QXJ0aWNsZURhdGFCeUxpbmsgPSBmdW5jdGlvbiAobGluaykge1xyXG5cdFx0XHRcdHJldHVybiAkaHR0cC5wb3N0KCcvdXNlcnMvJyArIGF1dGhTZXJ2aWNlLnVzZXJJRCgpICsgJy9nZXRGYXZBcnRpY2xlJywgeyBsaW5rOiBsaW5rIH0sIHtcclxuXHRcdFx0XHRcdGhlYWRlcnM6IHtcclxuXHRcdFx0XHRcdFx0QXV0aG9yaXphdGlvbjogJ0JlYXJlciAnICsgYXV0aFNlcnZpY2UuZ2V0VG9rZW4oKVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9XHJcblx0XHRyZXR1cm4gb2JqO1xyXG5cdH1dKTtcclxufSkoKTtcbihmdW5jdGlvbiAoKSB7XHJcblx0J3VzZSBzdHJpY3QnO1xyXG5cdGFuZ3VsYXIubW9kdWxlKCdyc3NyZWFkZXInKS5mYWN0b3J5KCdhdXRoU2VydmljZScsIFsnJGh0dHAnLCAnJHdpbmRvdycsICckYXV0aCcsICd0cmFuc2ZlcicsICdqd3RIZWxwZXInLCAndG9hc3RlclNlcnZpY2UnLCAncHJvZmlsZVNlcnZpY2UnLCBmdW5jdGlvbiAoJGh0dHAsICR3aW5kb3csICRhdXRoLCB0cmFuc2Zlciwgand0SGVscGVyLCB0b2FzdGVyU2VydmljZSwgcHJvZmlsZVNlcnZpY2UpIHtcclxuXHRcdHZhciBhdXRoID0ge1xyXG5cdFx0XHRzYXZlVG9rZW46IGZ1bmN0aW9uICh0b2tlbikge1xyXG5cdFx0XHRcdCRhdXRoLnNldFRva2VuKHRva2VuKTtcclxuXHRcdFx0fSxcclxuXHRcdFx0Z2V0VG9rZW46IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHRyZXR1cm4gJGF1dGguZ2V0VG9rZW4oKTtcclxuXHRcdFx0fSxcclxuXHRcdFx0aXNMb2dnZWRJbjogZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdHJldHVybiAkYXV0aC5pc0F1dGhlbnRpY2F0ZWQoKTtcclxuXHRcdFx0fSxcclxuXHRcdFx0Y3VycmVudFVzZXI6IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHRyZXR1cm4gIHByb2ZpbGVTZXJ2aWNlLnJlZnJlc2hQcm9maWxlRGF0YSgpLmVtYWlsO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHR1c2VySUQ6IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHRpZiAoYXV0aC5pc0xvZ2dlZEluKCkpIHtcclxuXHRcdFx0XHRcdHZhciBwYXlsb2FkID0gJGF1dGguZ2V0UGF5bG9hZCgpO1xyXG5cdFx0XHRcdFx0cmV0dXJuIHBheWxvYWQuc3ViO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0cmVnaXN0ZXI6IGZ1bmN0aW9uICh1c2VyKSB7XHJcblx0XHRcdFx0cmV0dXJuICRodHRwLnBvc3QoJy9yZWdpc3RlcicsIHVzZXIpLnN1Y2Nlc3MoZnVuY3Rpb24gKGRhdGEpIHtcclxuXHRcdFx0XHRcdGF1dGguc2F2ZVRva2VuKGRhdGEudG9rZW4pO1xyXG5cdFx0XHRcdH0pLmVycm9yKGZ1bmN0aW9uIChlcnIpIHtcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKGVyci5tZXNzYWdlKTtcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRmb3Jnb3Q6IGZ1bmN0aW9uKGNvbmZpcm1fZW1haWwpIHtcclxuXHRcdFx0XHRyZXR1cm4gJGh0dHAucG9zdCgnL2ZvcmdvdCcsIGNvbmZpcm1fZW1haWwpLnN1Y2Nlc3MoZnVuY3Rpb24gKGRhdGEpIHtcclxuXHRcdFx0XHR9KS5lcnJvcihmdW5jdGlvbiAoZXJyKSB7XHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhlcnIubWVzc2FnZSk7XHRcdFxyXG5cdFx0XHRcdH0pXHJcblxyXG5cdFx0XHR9LCBcclxuXHRcdFx0cmVzZXQ6IGZ1bmN0aW9uKHBhc3N3b3JkKSB7XHJcblx0XHRcdFx0cmV0dXJuICRodHRwLnBvc3QoJy9yZXNldC86dG9rZW4nLCBwYXNzd29yZCkuc3VjY2VzcyhmdW5jdGlvbiAoZGF0YSkge1xyXG5cdFx0XHRcdH0pLmVycm9yKGZ1bmN0aW9uIChlcnIpIHtcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKGVyci5tZXNzYWdlKTtcdFxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH0sXHJcblx0XHRcdGxvZ0luOiBmdW5jdGlvbiAodXNlcikge1xyXG5cdFx0XHRcdHJldHVybiAkaHR0cC5wb3N0KCcvbG9naW4nLCB1c2VyKS5zdWNjZXNzKGZ1bmN0aW9uIChkYXRhKSB7XHJcblx0XHRcdFx0XHRhdXRoLnNhdmVUb2tlbihkYXRhLnRva2VuKTtcclxuXHRcdFx0XHR9KS5lcnJvcihmdW5jdGlvbiAoZXJyKSB7XHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhlcnIubWVzc2FnZSk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0sXHJcblx0XHRcdGxvZ091dDogZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdCRhdXRoLnJlbW92ZVRva2VuKCk7XHJcblx0XHRcdFx0JGF1dGgubG9nb3V0KCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiBhdXRoO1xyXG5cdH1dKTtcclxufSkoKTtcclxuXG5hbmd1bGFyLm1vZHVsZSgncnNzcmVhZGVyJykuc2VydmljZSgnZGFzaGJvYXJkU2VydmljZScsIFsnJHdpbmRvdycsIGZ1bmN0aW9uICgkd2luZG93KSB7XHJcblx0dmFyIHRoYXQgPSB0aGlzO1xyXG5cdHRoaXMuREVGQVVMVF9WSUVXID0gMjtcclxuXHR0aGlzLmN1cnJlbnRBcnRpY2xlc1R5cGUgPSAnYWxsJztcclxuXHR0aGlzLmN1cnJlbnRBcnRpY2xlc1ZhbHVlID0gJHdpbmRvdy5sb2NhbFN0b3JhZ2UuY2F0ZWdvcnk7XHJcblx0dGhpcy5pc1JlYWRpbmdBcnRpY2xlID0gZmFsc2U7XHJcblx0dGhpcy5sb2FkaW5nSWNvbiA9IGZhbHNlO1xyXG5cdHRoaXMucmVhZFNpbmdsZUZlZWQgPSB7XHJcblx0ICAgIHN0YXRlOiBmYWxzZVxyXG5cdH07XHJcblxyXG5cdHRoaXMuaGlkZVNvcnRMaXN0ID0ge1xyXG5cdCAgICBzdGF0ZTogZmFsc2VcclxuXHR9XHJcblxyXG5cdHRoaXMuZGlzcGxheUxvYWRpbmcgPSBmdW5jdGlvbiAoKSB7XHJcblx0ICAgIHRoYXQubG9hZGluZ0ljb24gPSB0cnVlO1xyXG5cdH1cclxuXHJcblx0dGhpcy5oaWRlTG9hZGluZyA9IGZ1bmN0aW9uICgpIHtcclxuXHQgICAgdGhhdC5sb2FkaW5nSWNvbiA9IGZhbHNlO1xyXG5cdH1cclxuXHR0aGlzLnNvcnRQYXJhbSA9IHtcclxuXHRcdHR5cGU6ICdkYXRlJyxcclxuXHRcdG9yZGVyOiAxXHJcblx0fTtcclxuXHRpZiAoJHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc29ydFR5cGUpIHtcclxuXHRcdHRoaXMuc29ydFBhcmFtLnR5cGUgPSAkd2luZG93LmxvY2FsU3RvcmFnZS5zb3J0VHlwZTtcclxuXHRcdGlmICgkd2luZG93LmxvY2FsU3RvcmFnZS5zb3J0T3JkZXIpIHtcclxuXHRcdFx0dGhpcy5zb3J0UGFyYW0ub3JkZXIgPSArJHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc29ydE9yZGVyO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRlbHNlIHtcclxuXHRcdCR3aW5kb3cubG9jYWxTdG9yYWdlLnNvcnRUeXBlID0gdGhpcy5zb3J0UGFyYW0udHlwZTtcclxuXHRcdCR3aW5kb3cubG9jYWxTdG9yYWdlLnNvcnRPcmRlciA9IHRoaXMuc29ydFBhcmFtLm9yZGVyO1xyXG5cdH1cclxuXHR0aGlzLnNldFNvcnRQYXJhbSA9IGZ1bmN0aW9uICh0eXBlLCBvcmRlcikge1xyXG5cdFx0dGhpcy5zb3J0UGFyYW0udHlwZSA9IHR5cGU7XHJcblx0XHR0aGlzLnNvcnRQYXJhbS5vcmRlciA9IG9yZGVyO1xyXG5cdFx0JHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc29ydFR5cGUgPSB0aGlzLnNvcnRQYXJhbS50eXBlO1xyXG5cdFx0JHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc29ydE9yZGVyID0gdGhpcy5zb3J0UGFyYW0ub3JkZXI7XHJcblx0fVxyXG5cdHRoaXMuZ2V0U29ydFBhcmFtID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0cmV0dXJuIHRoYXQuc29ydFBhcmFtO1xyXG5cdH1cclxuXHJcblx0aWYgKCEkd2luZG93LmxvY2FsU3RvcmFnZS5hcnRpY2xlc1R5cGUpIHtcclxuXHRcdCR3aW5kb3cubG9jYWxTdG9yYWdlLmFydGljbGVzVHlwZSA9IHRoYXQuY3VycmVudEFydGljbGVzVHlwZTtcclxuXHR9XHJcblxyXG5cdGlmICgkd2luZG93LmxvY2FsU3RvcmFnZS5jYXRlZ29yeSkge1xyXG5cdFx0Y3VycmVudEFydGljbGVzVmFsdWUgPSAkd2luZG93LmxvY2FsU3RvcmFnZS5jYXRlZ29yeTtcclxuXHR9XHJcblxyXG5cdHRoaXMuc2V0Q3VycmVudEFydGljbGVzVHlwZSA9IGZ1bmN0aW9uICh0eXBlLCB2YWx1ZSkge1xyXG5cdFx0dGhhdC5jdXJyZW50QXJ0aWNsZXNWYWx1ZSA9IG51bGw7XHJcblx0XHR0aGF0LmN1cnJlbnRBcnRpY2xlc1R5cGUgPSB0eXBlO1xyXG5cdFx0JHdpbmRvdy5sb2NhbFN0b3JhZ2UuYXJ0aWNsZXNUeXBlID0gdGhhdC5jdXJyZW50QXJ0aWNsZXNUeXBlO1xyXG5cdFx0aWYgKHZhbHVlKSB7XHJcblx0XHRcdHRoYXQuY3VycmVudEFydGljbGVzVmFsdWUgPSB2YWx1ZTtcclxuXHRcdFx0JHdpbmRvdy5sb2NhbFN0b3JhZ2UuY2F0ZWdvcnkgPSB0aGF0LmN1cnJlbnRBcnRpY2xlc1ZhbHVlO1xyXG5cdFx0fVxyXG5cdH1cclxuXHR0aGlzLmdldEN1cnJlbnRBcnRpY2xlc1R5cGUgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHR0aGF0LmN1cnJlbnRBcnRpY2xlc1R5cGUgPSAkd2luZG93LmxvY2FsU3RvcmFnZS5hcnRpY2xlc1R5cGU7XHJcblx0XHRyZXR1cm4gdGhhdC5jdXJyZW50QXJ0aWNsZXNUeXBlO1xyXG5cdH1cclxuXHRpZiAoISR3aW5kb3cubG9jYWxTdG9yYWdlLnZpZXdNb2RlKSB7XHJcblx0XHQkd2luZG93LmxvY2FsU3RvcmFnZS52aWV3TW9kZSA9IHRoaXMuREVGQVVMVF9WSUVXO1xyXG5cdH1cclxuXHR0aGlzLmlzTG9hZGluZyA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdHJldHVybiB0aGF0LmxvYWRpbmdJY29uO1xyXG5cdH07XHJcblx0dGhpcy5zaWRlYmFyID0gZmFsc2U7XHJcblx0dGhpcy5jaGVja1NpZGViYXIgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRyZXR1cm4gdGhhdC5zaWRlYmFyO1xyXG5cdH1cclxuXHR0aGlzLm1vZGFsU2hvd24gPSBmYWxzZTtcclxuXHR0aGlzLmN1cnJlbnRWaWV3TW9kZSA9ICR3aW5kb3cubG9jYWxTdG9yYWdlLnZpZXdNb2RlO1xyXG5cdHRoaXMudmlld01vZGVzID0gW1xyXG5cdFx0J2xpc3QnLFxyXG5cdFx0J3RoLWxpc3QnLFxyXG5cdFx0J3RoLWxhcmdlJ1xyXG5cdF07XHJcblx0dGhpcy5yZXNldFZpZXdNb2RlID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0JHdpbmRvdy5sb2NhbFN0b3JhZ2Uudmlld01vZGUgPSB0aGlzLkRFRkFVTFRfVklFVztcclxuXHR9XHJcblx0dGhpcy5zZXRWaWV3TW9kZSA9IGZ1bmN0aW9uIChpbmRleCkge1xyXG5cdFx0JHdpbmRvdy5sb2NhbFN0b3JhZ2Uudmlld01vZGUgPSBpbmRleDtcclxuXHRcdGlmIChpbmRleCA+IHRoYXQudmlld01vZGVzLmxlbmd0aCAtIDEpIHtcclxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiVmlldyBtb2RlIHlvdSBhcmUgdHJ5aW5nIHRvIHNldCBpcyBub3QgZGVmaW5lZFwiKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoYXQuY3VycmVudFZpZXdNb2RlID0gJHdpbmRvdy5sb2NhbFN0b3JhZ2Uudmlld01vZGU7XHJcblx0XHR9XHJcblx0fVxyXG5cdHRoaXMuZ2V0Vmlld01vZGUgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHR0aGF0LmN1cnJlbnRWaWV3TW9kZSA9ICR3aW5kb3cubG9jYWxTdG9yYWdlLnZpZXdNb2RlO1xyXG5cdFx0cmV0dXJuIHRoYXQudmlld01vZGVzW3RoYXQuY3VycmVudFZpZXdNb2RlXTtcclxuXHR9XHJcblx0dGhpcy50aXRsZSA9ICcnO1xyXG5cdHRoaXMuc2V0VGl0bGUgPSBmdW5jdGlvbiAodGl0bGUpIHtcclxuXHRcdGlmICh0aXRsZSA9PSBcIkFkZCBGZWVkXCIpIHtcclxuXHRcdFx0dGhpcy5yZXNldEZlZWRJZCgpO1xyXG5cdFx0fVxyXG5cdFx0dGhhdC50aXRsZSA9IHRpdGxlO1xyXG5cdH1cclxuXHR0aGlzLmdldFRpdGxlID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0cmV0dXJuIHRoYXQudGl0bGU7XHJcblx0fVxyXG5cclxuXHR0aGlzLmN1cnJlbnRGZWVkID0gbnVsbDtcclxuXHR0aGlzLmdldEZlZWRJZCA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdHJldHVybiB0aGF0LmN1cnJlbnRGZWVkO1xyXG5cdH1cclxuXHR0aGlzLnNldEZlZWRJZCA9IGZ1bmN0aW9uIChmZWVkKSB7XHJcblx0XHR0aGF0LmN1cnJlbnRGZWVkID0gZmVlZDtcclxuXHR9XHJcblx0dGhpcy5yZXNldEZlZWRJZCA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdHRoYXQuY3VycmVudEZlZWQgPSAnJztcclxuXHR9XHJcbn1dKTtcbmFuZ3VsYXIubW9kdWxlKCdyc3NyZWFkZXInKS5zZXJ2aWNlKCdmZWVkc1NlcnZpY2UnLCBbJyRodHRwJywgJyRzdGF0ZScsICdhdXRoU2VydmljZScsICdkYXNoYm9hcmRTZXJ2aWNlJywgZnVuY3Rpb24gKCRodHRwLCAkc3RhdGUsIGF1dGhTZXJ2aWNlLCBkYXNoYm9hcmRTZXJ2aWNlKSB7XHJcblx0dGhhdCA9IHRoaXM7XHJcblx0dGhpcy5mZWVkc0RpY3Rpb25hcnkgPSBbXTtcclxuXHR0aGlzLmZhdm91cml0ZXNEaWN0aW9uYXJ5ID0gW107XHJcblx0dGhpcy5hZHZpY2VkRGljdGlvbmFyeSA9IFtdO1xyXG5cdHRoaXMuYWR2aWNlZEZlZWRzID0gW107XHJcblx0dGhpcy5hbGxBcnRpY2xlcyA9IFtdO1xyXG5cdHRoaXMuQ0FURUdPUklFUyA9IFtcIk5ld3NcIiwgXCJJVFwiLCBcIlNwb3J0XCIsIFwiRGVzaWduXCIsIFwiTW92aWVzXCIsIFwiTXVzaWNcIiwgXCJDdWx0dXJlXCIsIFwiTmF0dXJlXCIsIFwiR2FtaW5nXCIsIFwiRm9vZFwiLCBcIkVjb25vbWljc1wiLCBcIlNjaWVuY2VcIl07XHJcblx0dGhpcy5hbGxDYXRlZ29yaWVzID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0dmFyIHJlcyA9IHRoYXQuQ0FURUdPUklFUy5jb25jYXQoZ2V0Q3VzdG9tQ2F0ZWdvcmllcygpKTtcclxuXHRcdHJlcy5wdXNoKFwiQ3VzdG9tXCIpO1xyXG5cdFx0cmV0dXJuIHJlcztcclxuXHR9XHJcblx0dGhpcy5hbGxGYXZzQ2F0ZWdvcmllcyA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdHZhciByZXMgPSB0aGF0LkNBVEVHT1JJRVMuY29uY2F0KGdldEZhdnNDdXN0b21DYXRlZ29yaWVzKCkpO1xyXG5cdFx0cmVzLnB1c2goXCJDdXN0b21cIik7XHJcblx0XHRyZXR1cm4gcmVzO1xyXG5cdH1cclxuXHR2YXIgZ2V0Q3VzdG9tQ2F0ZWdvcmllcyA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdHZhciBjdXJyZW50RmVlZHNDYXRzID0gKGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0dmFyIHJlcyA9IFtdO1xyXG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoYXQuZmVlZHNEaWN0aW9uYXJ5Lmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0cmVzLnB1c2godGhhdC5mZWVkc0RpY3Rpb25hcnlbaV0uY2F0ZWdvcnkpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiByZXM7XHJcblx0XHR9KSgpO1xyXG5cdFx0cmV0dXJuIGN1cnJlbnRGZWVkc0NhdHMuZmlsdGVyKGZ1bmN0aW9uIChlbGVtLCBpLCBhcnJheSkge1xyXG5cdFx0XHRyZXR1cm4gdGhhdC5DQVRFR09SSUVTLmluZGV4T2YoZWxlbSkgPT0gLTE7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdHZhciBnZXRGYXZzQ3VzdG9tQ2F0ZWdvcmllcyA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdHZhciBjdXJyZW50RmVlZHNDYXRzID0gKGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0dmFyIHJlcyA9IFtdO1xyXG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoYXQuZmF2b3VyaXRlc0RpY3Rpb25hcnkubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHRyZXMucHVzaCh0aGF0LmZhdm91cml0ZXNEaWN0aW9uYXJ5W2ldLmNhdGVnb3J5KTtcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gcmVzO1xyXG5cdFx0fSkoKTtcclxuXHRcdHJldHVybiBjdXJyZW50RmVlZHNDYXRzLmZpbHRlcihmdW5jdGlvbiAoZWxlbSwgaSwgYXJyYXkpIHtcclxuXHRcdFx0cmV0dXJuICh0aGF0LkNBVEVHT1JJRVMuaW5kZXhPZihlbGVtKSA9PSAtMSAmJiBlbGVtICE9ICdVbnNvcnRlZCcpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cdHRoaXMuZ2V0QWxsRmVlZHMgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRyZXR1cm4gJGh0dHAuZ2V0KCcvdXNlcnMvJyArIGF1dGhTZXJ2aWNlLnVzZXJJRCgpLCB7XHJcblx0XHRcdGhlYWRlcnM6IHtcclxuXHRcdFx0XHRBdXRob3JpemF0aW9uOiAnQmVhcmVyICcgKyBhdXRoU2VydmljZS5nZXRUb2tlbigpXHJcblx0XHRcdH1cclxuXHRcdH0pLnRoZW4oZnVuY3Rpb24gKHJlcykge1xyXG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHJlcy5kYXRhLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCByZXMuZGF0YVtpXS5mZWVkcy5sZW5ndGg7IGorKykge1xyXG5cdFx0XHRcdFx0cmVzLmRhdGFbaV0uZmVlZHNbal0uY2F0ZWdvcnkgPSByZXMuZGF0YVtpXS5jYXRlZ29yeTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHRcdGFuZ3VsYXIuY29weShyZXMuZGF0YSwgdGhhdC5mZWVkc0RpY3Rpb25hcnkpO1xyXG5cdFx0XHR0aGF0LmdldEFsbEZhdm91cml0ZXMoKTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHR0aGlzLmdldEFkdmljZWRGZWVkcyA9IGZ1bmN0aW9uICgpIHtcclxuXHQgICAgZGFzaGJvYXJkU2VydmljZS5kaXNwbGF5TG9hZGluZygpO1xyXG5cdFx0cmV0dXJuICRodHRwLmdldCgnL3VzZXJzLycgKyBhdXRoU2VydmljZS51c2VySUQoKSArIFwiL2FkdmljZWRGZWVkc1wiLCB7XHJcblx0XHRcdGhlYWRlcnM6IHtcclxuXHRcdFx0XHRBdXRob3JpemF0aW9uOiAnQmVhcmVyICcgKyBhdXRoU2VydmljZS5nZXRUb2tlbigpXHJcblx0XHRcdH1cclxuXHRcdH0pLnRoZW4oZnVuY3Rpb24gKHJlcykge1xyXG5cdFx0XHRhbmd1bGFyLmNvcHkocmVzLmRhdGEsIHRoYXQuYWR2aWNlZERpY3Rpb25hcnkpO1xyXG5cdFx0XHRkYXNoYm9hcmRTZXJ2aWNlLmhpZGVMb2FkaW5nKCk7XHJcblx0XHR9KTtcclxuXHR9XHJcblx0dGhpcy5nZXRBbGxGYXZvdXJpdGVzID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0cmV0dXJuICRodHRwLmdldCgnL3VzZXJzLycgKyBhdXRoU2VydmljZS51c2VySUQoKSArIFwiL2Zhdm91cml0ZXNcIiwge1xyXG5cdFx0XHRoZWFkZXJzOiB7XHJcblx0XHRcdFx0QXV0aG9yaXphdGlvbjogJ0JlYXJlciAnICsgYXV0aFNlcnZpY2UuZ2V0VG9rZW4oKVxyXG5cdFx0XHR9XHJcblx0XHR9KS50aGVuKGZ1bmN0aW9uIChyZXMpIHtcclxuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCByZXMuZGF0YS5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgcmVzLmRhdGFbaV0uYXJ0aWNsZXMubGVuZ3RoOyBqKyspIHtcclxuXHRcdFx0XHRcdHJlcy5kYXRhW2ldLmFydGljbGVzW2pdLmNhdGVnb3J5ID0gcmVzLmRhdGFbaV0uY2F0ZWdvcnk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdGFuZ3VsYXIuY29weShyZXMuZGF0YSwgdGhhdC5mYXZvdXJpdGVzRGljdGlvbmFyeSk7XHJcblx0XHR9KTtcclxuXHR9XHJcblx0dmFyIGNoZWNrUnNzRm9ybWF0ID0gZnVuY3Rpb24gKHhtbERvYykge1xyXG5cdFx0Ly9EZXRlcm1pbmUgaWYgUlNTXHJcblx0XHRpZiAoeG1sRG9jLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdyc3MnKS5sZW5ndGgpIHtcclxuXHRcdFx0cmV0dXJuICdSU1MnO1xyXG5cdFx0XHQvL0RldGVybWluZSBpZiBBVE9NXHJcblx0XHR9IGVsc2UgaWYgKHhtbERvYy5nZXRFbGVtZW50c0J5VGFnTmFtZSgnZmVlZCcpLmxlbmd0aCkge1xyXG5cdFx0XHRyZXR1cm4gJ0FUT00nO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIC0xO1xyXG5cdH1cclxuXHR2YXIgZ2VuZXJhdGVGZWVkID0gZnVuY3Rpb24gKGRvYywgZmVlZCwgZm9ybWF0KSB7XHJcblx0XHR2YXIgZmVlZE9iaiA9IHt9O1xyXG5cdFx0aWYgKGZvcm1hdCA9PT0gJ1JTUycpIHtcclxuXHRcdFx0dmFyIGNoYW5uZWwgPSBkb2MuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2NoYW5uZWwnKVswXTtcclxuXHRcdFx0ZmVlZE9iai50aXRsZSA9IGNoYW5uZWwuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3RpdGxlJylbMF0uY2hpbGROb2Rlc1swXS5ub2RlVmFsdWU7XHJcblx0XHRcdGZlZWRPYmouZGVzY3JpcHRpb24gPSBjaGFubmVsLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdkZXNjcmlwdGlvbicpWzBdLmNoaWxkTm9kZXNbMF0gPyBjaGFubmVsLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdkZXNjcmlwdGlvbicpWzBdLmNoaWxkTm9kZXNbMF0ubm9kZVZhbHVlIDogJyc7XHJcblx0XHRcdGZlZWRPYmoubGluayA9IGNoYW5uZWwuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJsaW5rXCIpWzBdLmNoaWxkTm9kZXNbMF0ubm9kZVZhbHVlO1xyXG5cdFx0XHRmZWVkT2JqLnJzc2xpbmsgPSBmZWVkLmxpbms7XHJcblx0XHRcdGZlZWRPYmouY2F0ZWdvcnkgPSBmZWVkLmNhdGVnb3J5O1xyXG5cdFx0fSBlbHNlIGlmIChmb3JtYXQgPT09ICdBVE9NJykge1xyXG5cdFx0XHRmZWVkT2JqLnRpdGxlID0gZG9jLmdldEVsZW1lbnRzQnlUYWdOYW1lKCd0aXRsZScpWzBdLmNoaWxkTm9kZXNbMF0ubm9kZVZhbHVlO1xyXG5cdFx0XHRmZWVkT2JqLmRlc2NyaXB0aW9uID0gJyc7XHJcblx0XHRcdGZlZWRPYmoubGluayA9IGRvYy5nZXRFbGVtZW50c0J5VGFnTmFtZSgnbGluaycpWzBdLmdldEF0dHJpYnV0ZSgnaHJlZicpO1xyXG5cdFx0XHRmZWVkT2JqLnJzc2xpbmsgPSBmZWVkLmxpbms7XHJcblx0XHRcdGZlZWRPYmouY2F0ZWdvcnkgPSBmZWVkLmNhdGVnb3J5O1xyXG5cdFx0fVxyXG5cdFx0ZmVlZE9iai5mb3JtYXQgPSBmb3JtYXQ7XHJcblx0XHRyZXR1cm4gZmVlZE9iajtcclxuXHR9XHJcblx0dGhpcy5nZXRGZWVkR2VuZXJhdG9yID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0cmV0dXJuIGdlbmVyYXRlRmVlZDtcclxuXHR9XHJcblx0dGhpcy5nZXRSc3NDaGVja2VyID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0cmV0dXJuIGNoZWNrUnNzRm9ybWF0O1xyXG5cdH1cclxuXHR0aGlzLmFkZEZlZWQgPSBmdW5jdGlvbiAoZmVlZCkge1xyXG5cdFx0ZGFzaGJvYXJkU2VydmljZS5kaXNwbGF5TG9hZGluZygpO1xyXG5cdFx0cmV0dXJuICRodHRwLmpzb25wKFwiaHR0cHM6Ly9hamF4Lmdvb2dsZWFwaXMuY29tL2FqYXgvc2VydmljZXMvZmVlZC9sb2FkP3Y9MS4wJm51bT0xMCZxPVwiICsgZW5jb2RlVVJJQ29tcG9uZW50KGZlZWQubGluaykgKyBcIiZtZXRob2Q9SlNPTiZjYWxsYmFjaz1KU09OX0NBTExCQUNLJm91dHB1dD14bWxcIilcclxuXHRcdFx0LnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcblx0XHRcdFx0XHRpZiAoZmVlZC5saW5rID09PSB1bmRlZmluZWQpIHtcclxuXHRcdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiRW50ZXIgUnNzIGZlZWQgbGlua1wiKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGlmIChmZWVkLmNhdGVnb3J5ID09PSB1bmRlZmluZWQpIHtcclxuXHRcdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiQ2hvb3NlIGNhdGVnb3J5XCIpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0aWYgKHJlc3BvbnNlLmRhdGEucmVzcG9uc2VEYXRhID09PSBudWxsKSB7XHJcblx0XHRcdFx0XHRcdHRocm93IG5ldyBFcnJvcihcIlVSTCBpcyBpbmNvcnJlY3Qgb3IgZG9lcyBub3QgY29udGFpbiBSU1MgRmVlZCBkYXRhXCIpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0dmFyIHBhcnNlciA9IG5ldyBET01QYXJzZXIoKTtcclxuXHRcdFx0XHRcdHhtbERvYyA9IHBhcnNlci5wYXJzZUZyb21TdHJpbmcocmVzcG9uc2UuZGF0YS5yZXNwb25zZURhdGEueG1sU3RyaW5nLCBcInRleHQveG1sXCIpO1xyXG5cdFx0XHRcdFx0dmFyIGZvcm1hdCA9IGNoZWNrUnNzRm9ybWF0KHhtbERvYyk7XHJcblx0XHRcdFx0XHRpZiAoZm9ybWF0ID09PSAtMSkge1xyXG5cdFx0XHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJVUkwgaXMgaW5jb3JyZWN0IG9yIGRvZXMgbm90IGNvbnRhaW4gUlNTIEZlZWQgZGF0YVwiKTtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdHZhciBmZWVkT2JqID0gZ2VuZXJhdGVGZWVkKHhtbERvYywgZmVlZCwgZm9ybWF0KTtcclxuXHRcdFx0XHRcdFx0cmV0dXJuICRodHRwLnBvc3QoJy91c2Vycy8nICsgYXV0aFNlcnZpY2UudXNlcklEKCkgKyAnL2FkZEZlZWQnLCBmZWVkT2JqLCB7XHJcblx0XHRcdFx0XHRcdFx0aGVhZGVyczoge1xyXG5cdFx0XHRcdFx0XHRcdFx0QXV0aG9yaXphdGlvbjogJ0JlYXJlciAnICsgYXV0aFNlcnZpY2UuZ2V0VG9rZW4oKVxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fSkuZXJyb3IoZnVuY3Rpb24gKGVycikge1xyXG5cdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKGVycik7XHJcblx0XHRcdFx0XHRcdFx0ZGFzaGJvYXJkU2VydmljZS5oaWRlTG9hZGluZygpO1xyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRyZXR1cm4gcmVzcG9uc2UuZGF0YTtcclxuXHRcdFx0fSk7XHJcblx0fVxyXG5cclxuXHR0aGlzLnJlbW92ZUZlZWQgPSBmdW5jdGlvbiAoZmVlZCkge1xyXG5cdFx0cmV0dXJuICRodHRwLmRlbGV0ZSgnL3VzZXJzLycgKyBhdXRoU2VydmljZS51c2VySUQoKSArICcvZGVsZXRlRmVlZC8nICsgZmVlZC5faWQgKyAnLycgKyBmZWVkLmNhdGVnb3J5LCB7XHJcblx0XHRcdGhlYWRlcnM6IHtcclxuXHRcdFx0XHRBdXRob3JpemF0aW9uOiAnQmVhcmVyICcgKyBhdXRoU2VydmljZS5nZXRUb2tlbigpXHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0dGhpcy5zZXRGZWVkc09yZGVyID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0dmFyIG9iaiA9IHtcclxuXHRcdFx0bmV3Q2F0ZWdvcmllczogW11cclxuXHRcdH1cclxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhhdC5mZWVkc0RpY3Rpb25hcnkubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0b2JqLm5ld0NhdGVnb3JpZXMucHVzaCh0aGF0LmZlZWRzRGljdGlvbmFyeVtpXS5jYXRlZ29yeSk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gJGh0dHAucG9zdCgnL3VzZXJzLycgKyBhdXRoU2VydmljZS51c2VySUQoKSArICcvc2V0Q2F0ZWdvcnlPcmRlcicsIG9iaiwge1xyXG5cdFx0XHRoZWFkZXJzOiB7XHJcblx0XHRcdFx0QXV0aG9yaXphdGlvbjogJ0JlYXJlciAnICsgYXV0aFNlcnZpY2UuZ2V0VG9rZW4oKVxyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdHRoaXMuc2V0RmF2c09yZGVyID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0dmFyIG9iaiA9IHtcclxuXHRcdFx0bmV3Q2F0ZWdvcmllczogW11cclxuXHRcdH1cclxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhhdC5mYXZvdXJpdGVzRGljdGlvbmFyeS5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRvYmoubmV3Q2F0ZWdvcmllcy5wdXNoKHRoYXQuZmF2b3VyaXRlc0RpY3Rpb25hcnlbaV0uY2F0ZWdvcnkpO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuICRodHRwLnBvc3QoJy91c2Vycy8nICsgYXV0aFNlcnZpY2UudXNlcklEKCkgKyAnL3NldEZhdnNDYXRlZ29yeU9yZGVyJywgb2JqLCB7XHJcblx0XHRcdGhlYWRlcnM6IHtcclxuXHRcdFx0XHRBdXRob3JpemF0aW9uOiAnQmVhcmVyICcgKyBhdXRoU2VydmljZS5nZXRUb2tlbigpXHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH1cclxufV0pO1xyXG5cclxuZnVuY3Rpb24gRmVlZHNUb0pzb24oYXJyYXkpIHtcclxuXHR2YXIgSnNvbmZyaWVuZGx5ID0gW107XHJcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xyXG5cdFx0dmFyIHRlbXAgPSB7fTtcclxuXHRcdGFuZ3VsYXIuY29weShhcnJheVtpXSwgdGVtcCk7XHJcblx0XHRKc29uZnJpZW5kbHkucHVzaCh0ZW1wKTtcclxuXHRcdGRlbGV0ZSBKc29uZnJpZW5kbHlbaV0uX2lkO1xyXG5cdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBKc29uZnJpZW5kbHlbaV0uZmVlZHMubGVuZ3RoOyBqKyspIHtcclxuXHRcdFx0ZGVsZXRlIEpzb25mcmllbmRseVtpXS5mZWVkc1tqXS5jdXJyZW50U3Vic2NyaXB0aW9ucztcclxuXHRcdFx0ZGVsZXRlIEpzb25mcmllbmRseVtpXS5mZWVkc1tqXS50b3RhbFN1YnNjcmlwdGlvbnM7XHJcblx0XHRcdGRlbGV0ZSBKc29uZnJpZW5kbHlbaV0uZmVlZHNbal0uX192O1xyXG5cdFx0XHRkZWxldGUgSnNvbmZyaWVuZGx5W2ldLmZlZWRzW2pdLmNhdGVnb3J5O1xyXG5cdFx0fVxyXG5cdH1cclxufVxuKGZ1bmN0aW9uKCkge1xyXG5cdCd1c2Ugc3RyaWN0JztcclxuXHRhbmd1bGFyLm1vZHVsZSgncnNzcmVhZGVyJylcclxuXHRcdC5mYWN0b3J5KCdwcm9maWxlU2VydmljZScsIFsnJHdpbmRvdycsICdVcGxvYWQnLCAnYWNjb3VudEluZm8nLCAnJGF1dGgnLFxyXG5cdFx0XHRmdW5jdGlvbigkd2luZG93LCBVcGxvYWQsIGFjY291bnRJbmZvLCAkYXV0aCkge1xyXG5cdFx0XHRcdHZhciBvYmogPSB7XHJcblx0XHRcdFx0XHRwcm9maWxlOiB7fSxcclxuXHRcdFx0XHRcdGdldFByb2ZpbGU6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHRpZiAoJGF1dGguaXNBdXRoZW50aWNhdGVkKCkpIHtcclxuXHRcdFx0XHRcdFx0XHRyZXR1cm4gYWNjb3VudEluZm8uZ2V0UHJvZmlsZSgpLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcclxuXHRcdFx0XHRcdFx0XHRcdHZhciBsZW5ndGggPSByZXNwb25zZS5kYXRhLnVzZXIubGVuZ3RoO1xyXG5cdFx0XHRcdFx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRpZiAocmVzcG9uc2UuZGF0YS51c2VyW2ldLmVtYWlsID09PSAkYXV0aC5nZXRQYXlsb2FkKCkuZW1haWwpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRvYmoucHJvZmlsZSA9IHJlc3BvbnNlLmRhdGEudXNlcltpXTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0cmVmcmVzaFByb2ZpbGVEYXRhOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIG9iai5wcm9maWxlO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRyZXR1cm4gb2JqO1xyXG5cdFx0XHR9XHJcblx0XHRdKTtcclxufSkoKTtcclxuXHJcblxuKGZ1bmN0aW9uKCkge1xyXG5cdCd1c2Ugc3RyaWN0JztcclxuXHRhbmd1bGFyLm1vZHVsZSgncnNzcmVhZGVyJykuZmFjdG9yeSgndGhlbWVTZXJ2aWNlJywgWyckaHR0cCcsICdhdXRoU2VydmljZScsICckd2luZG93JyxcclxuXHRcdGZ1bmN0aW9uKCRodHRwLCBhdXRoU2VydmljZSwgJHdpbmRvdykge1xyXG5cdFx0XHR2YXIgdGhtID0ge1xyXG5cdFx0XHRcdGxheW91dHM6IFt7XHJcblx0XHRcdFx0XHRuYW1lOiAnQmx1ZScsXHJcblx0XHRcdFx0XHR1cmw6ICd0aGVtZTEnLFxyXG5cdFx0XHRcdFx0c3JjOiAnYXNzZXRzL2ltYWdlcy90aGVtZTEuanBnJ1xyXG5cdFx0XHRcdH0sIHtcclxuXHRcdFx0XHRcdG5hbWU6ICdCbGFjaycsXHJcblx0XHRcdFx0XHR1cmw6ICd0aGVtZTInLFxyXG5cdFx0XHRcdFx0c3JjOiAnYXNzZXRzL2ltYWdlcy90aGVtZTIuanBnJ1xyXG5cdFx0XHRcdH0sIHtcclxuXHRcdFx0XHRcdG5hbWU6ICdHcmV5JyxcclxuXHRcdFx0XHRcdHVybDogJ3RoZW1lMycsXHJcblx0XHRcdFx0XHRzcmM6ICdhc3NldHMvaW1hZ2VzL3RoZW1lMy5qcGcnXHJcblx0XHRcdFx0fSwge1xyXG5cdFx0XHRcdFx0bmFtZTogJ0JsYWNrJyxcclxuXHRcdFx0XHRcdHVybDogJ3RoZW1lNCcsXHJcblx0XHRcdFx0XHRzcmM6ICdhc3NldHMvaW1hZ2VzL3RoZW1lNC5qcGcnXHJcblx0XHRcdFx0fSxdLFxyXG5cdFx0XHRcdGNoYW5nZVRoZW1lOiBmdW5jdGlvbih0aGVtZSkge1xyXG5cdFx0XHRcdFx0cmV0dXJuICRodHRwLnBvc3QoJy91c2Vycy8nICsgYXV0aFNlcnZpY2UudXNlcklEKCkgKyAnL2NoYW5nZUNvbG9yVGhlbWUnLCB7XHJcblx0XHRcdFx0XHRcdGNvbG9yVGhlbWU6IHRoZW1lXHJcblx0XHRcdFx0XHR9LCB7XHJcblx0XHRcdFx0XHRcdGhlYWRlcnM6IHtcclxuXHRcdFx0XHRcdFx0XHRBdXRob3JpemF0aW9uOiAnQmVhcmVyICcgKyBhdXRoU2VydmljZS5nZXRUb2tlbigpXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gdGhtO1xyXG5cdFx0fVxyXG5cdF0pO1xyXG59KSgpO1xuKGZ1bmN0aW9uICgpIHtcclxuXHQndXNlIHN0cmljdCc7XHJcblx0YW5ndWxhci5tb2R1bGUoJ3Jzc3JlYWRlcicpLnNlcnZpY2UoJ3RvYXN0ZXJTZXJ2aWNlJywgWyckcm9vdFNjb3BlJywgJyRjb21waWxlJywgJyRhbmltYXRlJywgZnVuY3Rpb24gKCRyb290U2NvcGUsICRjb21waWxlLCAkYW5pbWF0ZSkge1xyXG5cdFx0dmFyIGRvbVBhcmVudCA9IGFuZ3VsYXIuZWxlbWVudCgnYm9keScpO1xyXG5cclxuXHRcdC8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuXHRcdC8vICBZb3UgY2FuIHBhc3MgY3VzdG9tIG9wdGlvbnMgdG8gdG9hc3RlciBtZXRob2RzIGFzIHNlY29uZCBwYXJhbWV0ZXJcclxuXHRcdC8vICBvcHRpb25zIHByb3BlcnRpZXM6XHJcblx0XHQvLyAgbWVzc2FnZTogc3RyaW5nXHJcblx0XHQvLyAgb3ZlcmxheTogYm9vbGVhblxyXG5cdFx0Ly8gIGRlbGF5OiB2YWx1ZSAobXMpXHJcblx0XHQvLyAgcG9zaXRpb246IFtsZWZ0LCByaWdodCwgbGVmdC1ib3R0b20sIHJpZ2h0LWJvdHRvbV1cclxuXHRcdC8vICB0eXBlOiBvbmUgb2YgWyd0b2FzdGVyLWRlZmF1bHQnLCAndG9hc3Rlci1zdWNjZXNzJywgJ3RvYXN0ZXItaW5mbycsICd0b2FzdGVyLWVycm9yJ11cclxuXHRcdC8vICBpY29uQ2xhc3M6IHN0cmluZyAobmFtZSBvZiBnbHlwaCBjbGFzcywgZXg6IGZhIGZhLWluZm8pXHJcblx0XHQvLyAgY29uZmlybTogRnVuY3Rpb24gKGNhbGxiYWNrIHRoYXQgd2lsbCBiYSBjYWxsZWQgaWYgdXNlciBjb25maXJtIHRvYXN0ZXIgYWN0aW9uKVxyXG5cdFx0Ly8gXHJcblx0XHQvLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcblxyXG5cdFx0dmFyIGJ1aWxkVG9hc3RlciA9IGZ1bmN0aW9uIChvcHRpb25zLCBzY29wZSwgb25TaG93KSB7XHJcblx0XHRcdHZhciBjYWxsYmFjayA9IGFyZ3VtZW50c1syXSxcclxuXHRcdFx0XHRlbGVtID0gYW5ndWxhci5lbGVtZW50KGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0b2FzdGVyXCIpKTtcclxuXHRcdFx0ZWxlbS5hZGRDbGFzcygndG9hc3Rlci13cmFwcGVyJyk7XHJcblx0XHRcdGVsZW0uYWRkQ2xhc3Mob3B0aW9ucy50eXBlKTtcclxuXHRcdFx0aWYgKG9wdGlvbnMub3ZlcmxheSkge1xyXG5cdFx0XHRcdGVsZW0uYXR0cihcIm92ZXJsYXlcIiwgb3B0aW9ucy5vdmVybGF5KTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKG9wdGlvbnMuZGVsYXkpIHtcclxuXHRcdFx0XHRlbGVtLmF0dHIoXCJkZWxheVwiLCBvcHRpb25zLmRlbGF5KTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKG9wdGlvbnMuY29uZmlybSkge1xyXG5cdFx0XHRcdGVsZW0uYXR0cihcImNvbmZpcm1cIiwgb3B0aW9ucy5jb25maXJtKTtcclxuXHRcdFx0fVxyXG5cdFx0XHR2YXIgaWNvbiA9IGFuZ3VsYXIuZWxlbWVudChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpKTtcclxuXHRcdFx0aWNvbi5hZGRDbGFzcygndG9hc3Rlci1pY29uJyk7XHJcblx0XHRcdGljb24uYWRkQ2xhc3Mob3B0aW9ucy5pY29uQ2xhc3MpO1xyXG5cdFx0XHRlbGVtLmFwcGVuZChpY29uKTtcclxuXHJcblx0XHRcdGVsZW0uYXBwZW5kKFwiPHNwYW4+XCIgKyBvcHRpb25zLm1lc3NhZ2UgKyBcIjwvc3Bhbj5cIik7XHJcblx0XHRcdGlmIChvcHRpb25zLmh0bWxDb250ZW50KSB7XHJcblx0XHRcdFx0ZWxlbS5hcHBlbmQoXCI8c3Bhbj5cIiArIG9wdGlvbnMuaHRtbENvbnRlbnQgKyBcIjwvc3Bhbj5cIik7XHJcblx0XHRcdH1cclxuXHRcdFx0dmFyIGFwcGVuZEh0bWw7XHJcblx0XHRcdGlmICh0eXBlb2YgYXJndW1lbnRzWzFdID09PSAnb2JqZWN0Jykge1xyXG5cdFx0XHRcdGFwcGVuZEh0bWwgPSAkY29tcGlsZShlbGVtLCBzY29wZSkoc2NvcGUuJG5ldygpKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIHtcclxuXHRcdFx0XHRhcHBlbmRIdG1sID0gJGNvbXBpbGUoZWxlbSwgc2NvcGUpKCRyb290U2NvcGUuJG5ldygpKTtcclxuXHRcdFx0fVxyXG5cdFx0XHQkYW5pbWF0ZS5lbnRlcihhcHBlbmRIdG1sLCBkb21QYXJlbnQpLnRoZW4oZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdGlmICh0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcclxuXHRcdFx0XHRcdG9uU2hvdygpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0XHR0aGlzLnN1Y2Nlc3MgPSBmdW5jdGlvbiAobWVzc2FnZSwgY3VzdG9tT3B0aW9ucywgc2NvcGUsIG9uU2hvdykge1xyXG5cdFx0XHR2YXIgZGVmYXVsdE9wdGlvbnMgPSB7XHJcblx0XHRcdFx0bWVzc2FnZTogbWVzc2FnZSxcclxuXHRcdFx0XHR0eXBlOiAndG9hc3Rlci1zdWNjZXNzJyxcclxuXHRcdFx0XHRpY29uQ2xhc3M6ICdmYSBmYS1jaGVjaycsXHJcblx0XHRcdFx0ZGVsYXk6IDUwMDBcclxuXHRcdFx0fSxcclxuXHRcdFx0b3B0aW9ucztcclxuXHRcdFx0aWYgKHR5cGVvZiBjdXN0b21PcHRpb25zID09PSAnb2JqZWN0Jykge1xyXG5cdFx0XHRcdG9wdGlvbnMgPSBhbmd1bGFyLmV4dGVuZCh7fSwgZGVmYXVsdE9wdGlvbnMsIGN1c3RvbU9wdGlvbnMpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdG9wdGlvbnMgPSBkZWZhdWx0T3B0aW9ucztcclxuXHRcdFx0fVxyXG5cdFx0XHRidWlsZFRvYXN0ZXIob3B0aW9ucywgc2NvcGUsIG9uU2hvdyk7XHJcblx0XHR9XHJcblx0XHR0aGlzLmluZm8gPSBmdW5jdGlvbiAobWVzc2FnZSwgY3VzdG9tT3B0aW9ucywgc2NvcGUsIG9uU2hvdykge1xyXG5cdFx0XHR2YXIgZGVmYXVsdE9wdGlvbnMgPSB7XHJcblx0XHRcdFx0bWVzc2FnZTogbWVzc2FnZSxcclxuXHRcdFx0XHR0eXBlOiAndG9hc3Rlci1pbmZvJyxcclxuXHRcdFx0XHRpY29uQ2xhc3M6ICdmYSBmYS1pbmZvJyxcclxuXHRcdFx0XHRkZWxheTogNTAwMFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRvcHRpb25zO1xyXG5cdFx0XHRpZiAodHlwZW9mIGFyZ3VtZW50c1sxXSA9PT0gJ29iamVjdCcpIHtcclxuXHRcdFx0XHRvcHRpb25zID0gYW5ndWxhci5leHRlbmQoe30sIGRlZmF1bHRPcHRpb25zLCBjdXN0b21PcHRpb25zKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIHtcclxuXHRcdFx0XHRvcHRpb25zID0gZGVmYXVsdE9wdGlvbnM7XHJcblx0XHRcdH1cclxuXHRcdFx0YnVpbGRUb2FzdGVyKG9wdGlvbnMsIHNjb3BlLCBvblNob3cpO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy5lcnJvciA9IGZ1bmN0aW9uIChtZXNzYWdlLCBjdXN0b21PcHRpb25zLCBzY29wZSwgb25TaG93KSB7XHJcblx0XHRcdHZhciBkZWZhdWx0T3B0aW9ucyA9IHtcclxuXHRcdFx0XHRtZXNzYWdlOiBtZXNzYWdlLFxyXG5cdFx0XHRcdHR5cGU6ICd0b2FzdGVyLWVycm9yJyxcclxuXHRcdFx0XHRpY29uQ2xhc3M6ICdmYSBmYS1leGNsYW1hdGlvbi10cmlhbmdsZScsXHJcblx0XHRcdFx0ZGVsYXk6IDMwMDBcclxuXHRcdFx0fSxcclxuXHRcdFx0b3B0aW9ucztcclxuXHRcdFx0aWYgKHR5cGVvZiBhcmd1bWVudHNbMV0gPT09ICdvYmplY3QnKSB7XHJcblx0XHRcdFx0b3B0aW9ucyA9IGFuZ3VsYXIuZXh0ZW5kKHt9LCBkZWZhdWx0T3B0aW9ucywgY3VzdG9tT3B0aW9ucyk7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0b3B0aW9ucyA9IGRlZmF1bHRPcHRpb25zO1xyXG5cdFx0XHR9XHJcblx0XHRcdGJ1aWxkVG9hc3RlcihvcHRpb25zLCBzY29wZSwgb25TaG93KTtcclxuXHRcdH1cclxuXHRcdHRoaXMuY3VzdG9tID0gZnVuY3Rpb24gKGN1c3RvbU9wdGlvbnMsIHNjb3BlLCBvblNob3cpIHtcclxuXHRcdFx0dmFyIGRlZmF1bHRPcHRpb25zID0ge1xyXG5cdFx0XHRcdG1lc3NhZ2U6IG1lc3NhZ2UsXHJcblx0XHRcdFx0dHlwZTogJ3RvYXN0ZXItZGVmYXVsdCcsXHJcblx0XHRcdFx0b3ZlcmxheTogdHJ1ZSxcclxuXHRcdFx0XHRpY29uQ2xhc3M6ICdmYSBmYS1pbmZvJyxcclxuXHRcdFx0fSxcclxuXHRcdFx0b3B0aW9ucztcclxuXHRcdFx0aWYgKHR5cGVvZiBhcmd1bWVudHNbMF0gPT09ICdvYmplY3QnKSB7XHJcblx0XHRcdFx0b3B0aW9ucyA9IGFuZ3VsYXIuZXh0ZW5kKHt9LCBkZWZhdWx0T3B0aW9ucywgY3VzdG9tT3B0aW9ucyk7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0b3B0aW9ucyA9IGRlZmF1bHRPcHRpb25zO1xyXG5cdFx0XHR9XHJcblx0XHRcdGJ1aWxkVG9hc3RlcihvcHRpb25zLCBzY29wZSwgb25TaG93KTtcclxuXHRcdH1cclxuXHRcdHRoaXMuY29uZmlybSA9IGZ1bmN0aW9uIChjdXN0b21PcHRpb25zLCBzY29wZSwgb25TaG93KSB7XHJcblx0XHRcdHZhciBkZWZhdWx0T3B0aW9ucyA9IHtcclxuXHRcdFx0XHRtZXNzYWdlOiAnQ29uZmlybT8nLFxyXG5cdFx0XHRcdHR5cGU6ICd0b2FzdGVyLWRlZmF1bHQnLFxyXG5cdFx0XHRcdG92ZXJsYXk6IHRydWUsXHJcblx0XHRcdFx0aWNvbkNsYXNzOiAnZmEgZmEtcXVlc3Rpb24nLFxyXG5cdFx0XHRcdGh0bWxDb250ZW50OiBcIjxidXR0b24gY2xhc3M9J2FwcC1idG4tdG9hc3Rlci1yZWQnIGFyaWEtbGFiZWw9J0p1c3RpZnknIG5nLWNsaWNrPSdjb25maXJtKCknPnllczwvYnV0dG9uPjxidXR0b24gY2xhc3M9J2FwcC1idG4tdG9hc3RlcicgYXJpYS1sYWJlbD0nSnVzdGlmeScgbmctY2xpY2s9J3JlamVjdCgpJz5ubzwvYnV0dG9uPlwiXHJcblx0XHRcdH0sXHJcblx0XHRcdG9wdGlvbnM7XHJcblx0XHRcdGlmICh0eXBlb2YgY3VzdG9tT3B0aW9ucyA9PT0gJ29iamVjdCcpIHtcclxuXHRcdFx0XHRvcHRpb25zID0gYW5ndWxhci5leHRlbmQoe30sIGRlZmF1bHRPcHRpb25zLCBjdXN0b21PcHRpb25zKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIHtcclxuXHRcdFx0XHRvcHRpb25zID0gZGVmYXVsdE9wdGlvbnM7XHJcblx0XHRcdH1cclxuXHRcdFx0YnVpbGRUb2FzdGVyKG9wdGlvbnMsIHNjb3BlLCBvblNob3cpO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy5yZW1vdmVUb2FzdGVyID0gZnVuY3Rpb24gKGVsZW1lbnQpIHtcclxuXHRcdFx0JGFuaW1hdGUubGVhdmUoZWxlbWVudCwgZG9tUGFyZW50KS50aGVuKGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0fV0pO1xyXG59KSgpO1xuYW5ndWxhci5tb2R1bGUoJ3Jzc3JlYWRlcicpXHJcblx0LmZhY3RvcnkoJ3RyYW5zZmVyJywgW2Z1bmN0aW9uICgpIHtcclxuXHRcdHZhciBvYmogPSB7fSwgc3RyID0gJycsIHByb3ZpZGVyU3RyaW5nID0gJycsIGVtYWlsID0gJyc7XHJcblxyXG5cdFx0ZnVuY3Rpb24gc2V0RW1haWwgKGRhdGEpIHtcclxuXHRcdFx0ZW1haWwgPSBkYXRhO1xyXG5cdFx0fVxyXG5cdFx0ZnVuY3Rpb24gZ2V0RW1haWwgKCkge1xyXG5cdFx0XHRyZXR1cm4gZW1haWw7XHJcblx0XHR9XHJcblx0XHRmdW5jdGlvbiBzZXRQcm92aWRlclN0cmluZyAoZGF0YSkge1xyXG5cdFx0XHRwcm92aWRlclN0cmluZyA9IGRhdGE7XHJcblx0XHR9XHJcblx0XHRmdW5jdGlvbiBnZXRQcm92aWRlclN0cmluZyAoKSB7XHJcblx0XHRcdHJldHVybiBwcm92aWRlclN0cmluZztcclxuXHRcdH1cclxuXHRcdGZ1bmN0aW9uIHNldFN0cmluZyAoZGF0YSkge1xyXG5cdFx0XHRzdHIgPSBkYXRhO1xyXG5cdFx0fVxyXG5cdFx0ZnVuY3Rpb24gZ2V0U3RyaW5nICgpIHtcclxuXHRcdFx0cmV0dXJuIHN0cjtcclxuXHRcdH1cclxuXHRcdGZ1bmN0aW9uIHNldE9iaiAoZGF0YSkge1xyXG5cdFx0XHRvYmogPSBkYXRhO1xyXG5cdFx0fVxyXG5cdFx0ZnVuY3Rpb24gZ2V0T2JqICgpIHtcclxuXHRcdFx0cmV0dXJuIG9iajtcclxuXHRcdH1cclxuXHRcdHJldHVybiB7XHJcblx0XHQgIFxyXG5cdFx0XHRzZXRPYmogOiBzZXRPYmosXHJcblx0XHRcdGdldE9iaiA6IGdldE9iaixcclxuXHRcdFx0c2V0U3RyaW5nIDogc2V0U3RyaW5nLFxyXG5cdFx0XHRnZXRTdHJpbmcgOiBnZXRTdHJpbmcsXHJcblx0XHRcdHNldFByb3ZpZGVyU3RyaW5nIDogc2V0UHJvdmlkZXJTdHJpbmcsXHJcblx0XHRcdGdldFByb3ZpZGVyU3RyaW5nIDogZ2V0UHJvdmlkZXJTdHJpbmcsXHJcblx0XHRcdHNldEVtYWlsIDogc2V0RW1haWwsXHJcblx0XHRcdGdldEVtYWlsIDogZ2V0RW1haWxcclxuXHRcdH1cclxuXHR9XSk7XHJcbiJdLCJmaWxlIjoiYXBwLm1pbi5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9

/**
 * Satellizer 0.15.5
 * (c) 2016 Sahat Yalkabov
 * License: MIT
 */
(function(global,factory){typeof exports==="object"&&typeof module!=="undefined"?module.exports=factory():typeof define==="function"&&define.amd?define(factory):global.satellizer=factory()})(this,function(){"use strict";var Config=function(){function Config(){this.baseUrl="/";this.loginUrl="/auth/login";this.signupUrl="/auth/signup";this.unlinkUrl="/auth/unlink/";this.tokenName="token";this.tokenPrefix="satellizer";this.tokenHeader="Authorization";this.tokenType="Bearer";this.storageType="localStorage";this.tokenRoot=null;this.withCredentials=false;this.providers={facebook:{name:"facebook",url:"/auth/facebook",authorizationEndpoint:"https://www.facebook.com/v2.5/dialog/oauth",redirectUri:window.location.origin+"/",requiredUrlParams:["display","scope"],scope:["email"],scopeDelimiter:",",display:"popup",oauthType:"2.0",popupOptions:{width:580,height:400}},google:{name:"google",url:"/auth/google",authorizationEndpoint:"https://accounts.google.com/o/oauth2/auth",redirectUri:window.location.origin,requiredUrlParams:["scope"],optionalUrlParams:["display","state"],scope:["profile","email"],scopePrefix:"openid",scopeDelimiter:" ",display:"popup",oauthType:"2.0",popupOptions:{width:452,height:633},state:function(){return encodeURIComponent(Math.random().toString(36).substr(2))}},github:{name:"github",url:"/auth/github",authorizationEndpoint:"https://github.com/login/oauth/authorize",redirectUri:window.location.origin,optionalUrlParams:["scope"],scope:["user:email"],scopeDelimiter:" ",oauthType:"2.0",popupOptions:{width:1020,height:618}},instagram:{name:"instagram",url:"/auth/instagram",authorizationEndpoint:"https://api.instagram.com/oauth/authorize",redirectUri:window.location.origin,requiredUrlParams:["scope"],scope:["basic"],scopeDelimiter:"+",oauthType:"2.0"},linkedin:{name:"linkedin",url:"/auth/linkedin",authorizationEndpoint:"https://www.linkedin.com/uas/oauth2/authorization",redirectUri:window.location.origin,requiredUrlParams:["state"],scope:["r_emailaddress"],scopeDelimiter:" ",state:"STATE",oauthType:"2.0",popupOptions:{width:527,height:582}},twitter:{name:"twitter",url:"/auth/twitter",authorizationEndpoint:"https://api.twitter.com/oauth/authenticate",redirectUri:window.location.origin,oauthType:"1.0",popupOptions:{width:495,height:645}},twitch:{name:"twitch",url:"/auth/twitch",authorizationEndpoint:"https://api.twitch.tv/kraken/oauth2/authorize",redirectUri:window.location.origin,requiredUrlParams:["scope"],scope:["user_read"],scopeDelimiter:" ",display:"popup",oauthType:"2.0",popupOptions:{width:500,height:560}},live:{name:"live",url:"/auth/live",authorizationEndpoint:"https://login.live.com/oauth20_authorize.srf",redirectUri:window.location.origin,requiredUrlParams:["display","scope"],scope:["wl.emails"],scopeDelimiter:" ",display:"popup",oauthType:"2.0",popupOptions:{width:500,height:560}},yahoo:{name:"yahoo",url:"/auth/yahoo",authorizationEndpoint:"https://api.login.yahoo.com/oauth2/request_auth",redirectUri:window.location.origin,scope:[],scopeDelimiter:",",oauthType:"2.0",popupOptions:{width:559,height:519}},bitbucket:{name:"bitbucket",url:"/auth/bitbucket",authorizationEndpoint:"https://bitbucket.org/site/oauth2/authorize",redirectUri:window.location.origin+"/",requiredUrlParams:["scope"],scope:["email"],scopeDelimiter:" ",oauthType:"2.0",popupOptions:{width:1028,height:529}},spotify:{name:"spotify",url:"/auth/spotify",authorizationEndpoint:"https://accounts.spotify.com/authorize",redirectUri:window.location.origin,optionalUrlParams:["state"],requiredUrlParams:["scope"],scope:["user-read-email"],scopePrefix:"",scopeDelimiter:",",oauthType:"2.0",popupOptions:{width:500,height:530},state:function(){return encodeURIComponent(Math.random().toString(36).substr(2))}}};this.httpInterceptor=function(){return true}}Object.defineProperty(Config,"getConstant",{get:function(){return new Config},enumerable:true,configurable:true});return Config}();var AuthProvider=function(){function AuthProvider(SatellizerConfig){this.SatellizerConfig=SatellizerConfig}Object.defineProperty(AuthProvider.prototype,"baseUrl",{get:function(){return this.SatellizerConfig.baseUrl},set:function(value){this.SatellizerConfig.baseUrl=value},enumerable:true,configurable:true});Object.defineProperty(AuthProvider.prototype,"loginUrl",{get:function(){return this.SatellizerConfig.loginUrl},set:function(value){this.SatellizerConfig.loginUrl=value},enumerable:true,configurable:true});Object.defineProperty(AuthProvider.prototype,"signupUrl",{get:function(){return this.SatellizerConfig.signupUrl},set:function(value){this.SatellizerConfig.signupUrl=value},enumerable:true,configurable:true});Object.defineProperty(AuthProvider.prototype,"unlinkUrl",{get:function(){return this.SatellizerConfig.unlinkUrl},set:function(value){this.SatellizerConfig.unlinkUrl=value},enumerable:true,configurable:true});Object.defineProperty(AuthProvider.prototype,"tokenRoot",{get:function(){return this.SatellizerConfig.tokenRoot},set:function(value){this.SatellizerConfig.tokenRoot=value},enumerable:true,configurable:true});Object.defineProperty(AuthProvider.prototype,"tokenName",{get:function(){return this.SatellizerConfig.tokenName},set:function(value){this.SatellizerConfig.tokenName=value},enumerable:true,configurable:true});Object.defineProperty(AuthProvider.prototype,"tokenPrefix",{get:function(){return this.SatellizerConfig.tokenPrefix},set:function(value){this.SatellizerConfig.tokenPrefix=value},enumerable:true,configurable:true});Object.defineProperty(AuthProvider.prototype,"tokenHeader",{get:function(){return this.SatellizerConfig.tokenHeader},set:function(value){this.SatellizerConfig.tokenHeader=value},enumerable:true,configurable:true});Object.defineProperty(AuthProvider.prototype,"tokenType",{get:function(){return this.SatellizerConfig.tokenType},set:function(value){this.SatellizerConfig.tokenType=value},enumerable:true,configurable:true});Object.defineProperty(AuthProvider.prototype,"withCredentials",{get:function(){return this.SatellizerConfig.withCredentials},set:function(value){this.SatellizerConfig.withCredentials=value},enumerable:true,configurable:true});Object.defineProperty(AuthProvider.prototype,"storageType",{get:function(){return this.SatellizerConfig.storageType},set:function(value){this.SatellizerConfig.storageType=value},enumerable:true,configurable:true});Object.defineProperty(AuthProvider.prototype,"httpInterceptor",{get:function(){return this.SatellizerConfig.httpInterceptor},set:function(value){if(typeof value==="function"){this.SatellizerConfig.httpInterceptor=value}else{this.SatellizerConfig.httpInterceptor=function(){return value}}},enumerable:true,configurable:true});AuthProvider.prototype.facebook=function(options){angular.extend(this.SatellizerConfig.providers.facebook,options)};AuthProvider.prototype.google=function(options){angular.extend(this.SatellizerConfig.providers.google,options)};AuthProvider.prototype.github=function(options){angular.extend(this.SatellizerConfig.providers.github,options)};AuthProvider.prototype.instagram=function(options){angular.extend(this.SatellizerConfig.providers.instagram,options)};AuthProvider.prototype.linkedin=function(options){angular.extend(this.SatellizerConfig.providers.linkedin,options)};AuthProvider.prototype.twitter=function(options){angular.extend(this.SatellizerConfig.providers.twitter,options)};AuthProvider.prototype.twitch=function(options){angular.extend(this.SatellizerConfig.providers.twitch,options)};AuthProvider.prototype.live=function(options){angular.extend(this.SatellizerConfig.providers.live,options)};AuthProvider.prototype.yahoo=function(options){angular.extend(this.SatellizerConfig.providers.yahoo,options)};AuthProvider.prototype.bitbucket=function(options){angular.extend(this.SatellizerConfig.providers.bitbucket,options)};AuthProvider.prototype.spotify=function(options){angular.extend(this.SatellizerConfig.providers.spotify,options)};AuthProvider.prototype.oauth1=function(options){this.SatellizerConfig.providers[options.name]=angular.extend(options,{oauthType:"1.0"})};AuthProvider.prototype.oauth2=function(options){this.SatellizerConfig.providers[options.name]=angular.extend(options,{oauthType:"2.0"})};AuthProvider.prototype.$get=function(SatellizerShared,SatellizerLocal,SatellizerOAuth){return{login:function(user,options){return SatellizerLocal.login(user,options)},signup:function(user,options){return SatellizerLocal.signup(user,options)},logout:function(){return SatellizerShared.logout()},authenticate:function(name,data){return SatellizerOAuth.authenticate(name,data)},link:function(name,data){return SatellizerOAuth.authenticate(name,data)},unlink:function(name,options){return SatellizerOAuth.unlink(name,options)},isAuthenticated:function(){return SatellizerShared.isAuthenticated()},getPayload:function(){return SatellizerShared.getPayload()},getToken:function(){return SatellizerShared.getToken()},setToken:function(token){return SatellizerShared.setToken({access_token:token})},removeToken:function(){return SatellizerShared.removeToken()},setStorageType:function(type){return SatellizerShared.setStorageType(type)}}};AuthProvider.$inject=["SatellizerConfig"];return AuthProvider}();AuthProvider.prototype.$get.$inject=["SatellizerShared","SatellizerLocal","SatellizerOAuth"];function joinUrl(baseUrl,url){if(/^(?:[a-z]+:)?\/\//i.test(url)){return url}var joined=[baseUrl,url].join("/");var normalize=function(str){return str.replace(/[\/]+/g,"/").replace(/\/\?/g,"?").replace(/\/\#/g,"#").replace(/\:\//g,"://")};return normalize(joined)}function getFullUrlPath(location){var isHttps=location.protocol==="https:";return location.protocol+"//"+location.hostname+":"+(location.port||(isHttps?"443":"80"))+(/^\//.test(location.pathname)?location.pathname:"/"+location.pathname)}function parseQueryString(str){var obj={};var key;var value;angular.forEach((str||"").split("&"),function(keyValue){if(keyValue){value=keyValue.split("=");key=decodeURIComponent(value[0]);obj[key]=angular.isDefined(value[1])?decodeURIComponent(value[1]):true}});return obj}function decodeBase64(str){var buffer;if(typeof module!=="undefined"&&module.exports){try{buffer=require("buffer").Buffer}catch(err){}}var fromCharCode=String.fromCharCode;var re_btou=new RegExp(["[À-ß][-¿]","[à-ï][-¿]{2}","[ð-÷][-¿]{3}"].join("|"),"g");var cb_btou=function(cccc){switch(cccc.length){case 4:var cp=(7&cccc.charCodeAt(0))<<18|(63&cccc.charCodeAt(1))<<12|(63&cccc.charCodeAt(2))<<6|63&cccc.charCodeAt(3);var offset=cp-65536;return fromCharCode((offset>>>10)+55296)+fromCharCode((offset&1023)+56320);case 3:return fromCharCode((15&cccc.charCodeAt(0))<<12|(63&cccc.charCodeAt(1))<<6|63&cccc.charCodeAt(2));default:return fromCharCode((31&cccc.charCodeAt(0))<<6|63&cccc.charCodeAt(1))}};var btou=function(b){return b.replace(re_btou,cb_btou)};var _decode=buffer?function(a){return(a.constructor===buffer.constructor?a:new buffer(a,"base64")).toString()}:function(a){return btou(atob(a))};return _decode(String(str).replace(/[-_]/g,function(m0){return m0==="-"?"+":"/"}).replace(/[^A-Za-z0-9\+\/]/g,""))}var Shared=function(){function Shared($q,$window,SatellizerConfig,SatellizerStorage){this.$q=$q;this.$window=$window;this.SatellizerConfig=SatellizerConfig;this.SatellizerStorage=SatellizerStorage;var _a=this.SatellizerConfig,tokenName=_a.tokenName,tokenPrefix=_a.tokenPrefix;this.prefixedTokenName=tokenPrefix?[tokenPrefix,tokenName].join("_"):tokenName}Shared.prototype.getToken=function(){return this.SatellizerStorage.get(this.prefixedTokenName)};Shared.prototype.getPayload=function(){var token=this.SatellizerStorage.get(this.prefixedTokenName);if(token&&token.split(".").length===3){try{var base64Url=token.split(".")[1];var base64=base64Url.replace("-","+").replace("_","/");return JSON.parse(decodeBase64(base64))}catch(e){}}};Shared.prototype.setToken=function(response){var tokenRoot=this.SatellizerConfig.tokenRoot;var tokenName=this.SatellizerConfig.tokenName;var accessToken=response&&response.access_token;var token;if(accessToken){if(angular.isObject(accessToken)&&angular.isObject(accessToken.data)){response=accessToken}else if(angular.isString(accessToken)){token=accessToken}}if(!token&&response){var tokenRootData=tokenRoot&&tokenRoot.split(".").reduce(function(o,x){return o[x]},response.data);token=tokenRootData?tokenRootData[tokenName]:response.data&&response.data[tokenName]}if(token){this.SatellizerStorage.set(this.prefixedTokenName,token)}};Shared.prototype.removeToken=function(){this.SatellizerStorage.remove(this.prefixedTokenName)};Shared.prototype.isAuthenticated=function(){var token=this.SatellizerStorage.get(this.prefixedTokenName);if(token){if(token.split(".").length===3){try{var base64Url=token.split(".")[1];var base64=base64Url.replace("-","+").replace("_","/");var exp=JSON.parse(this.$window.atob(base64)).exp;if(typeof exp==="number"){return Math.round((new Date).getTime()/1e3)<exp}}catch(e){return true}}return true}return false};Shared.prototype.logout=function(){this.SatellizerStorage.remove(this.prefixedTokenName);return this.$q.when()};Shared.prototype.setStorageType=function(type){this.SatellizerConfig.storageType=type};Shared.$inject=["$q","$window","SatellizerConfig","SatellizerStorage"];return Shared}();var Local=function(){function Local($http,SatellizerConfig,SatellizerShared){this.$http=$http;this.SatellizerConfig=SatellizerConfig;this.SatellizerShared=SatellizerShared}Local.prototype.login=function(user,options){var _this=this;if(options===void 0){options={}}options.url=options.url?options.url:joinUrl(this.SatellizerConfig.baseUrl,this.SatellizerConfig.loginUrl);options.data=user||options.data;options.method=options.method||"POST";options.withCredentials=options.withCredentials||this.SatellizerConfig.withCredentials;return this.$http(options).then(function(response){_this.SatellizerShared.setToken(response);return response})};Local.prototype.signup=function(user,options){if(options===void 0){options={}}options.url=options.url?options.url:joinUrl(this.SatellizerConfig.baseUrl,this.SatellizerConfig.signupUrl);options.data=user||options.data;options.method=options.method||"POST";options.withCredentials=options.withCredentials||this.SatellizerConfig.withCredentials;return this.$http(options)};Local.$inject=["$http","SatellizerConfig","SatellizerShared"];return Local}();var Popup=function(){function Popup($interval,$window,$q){this.$interval=$interval;this.$window=$window;this.$q=$q;this.popup=null;this.defaults={redirectUri:null}}Popup.prototype.stringifyOptions=function(options){var parts=[];angular.forEach(options,function(value,key){parts.push(key+"="+value)});return parts.join(",")};Popup.prototype.open=function(url,name,popupOptions,redirectUri,dontPoll){var width=popupOptions.width||500;var height=popupOptions.height||500;var options=this.stringifyOptions({width:width,height:height,top:this.$window.screenY+(this.$window.outerHeight-height)/2.5,left:this.$window.screenX+(this.$window.outerWidth-width)/2});var popupName=this.$window["cordova"]||this.$window.navigator.userAgent.indexOf("CriOS")>-1?"_blank":name;this.popup=this.$window.open(url,popupName,options);if(this.popup&&this.popup.focus){this.popup.focus()}if(dontPoll){return}if(this.$window["cordova"]){return this.eventListener(redirectUri)}else{if(url==="about:blank"){this.popup.location=url}return this.polling(redirectUri)}};Popup.prototype.polling=function(redirectUri){var _this=this;return this.$q(function(resolve,reject){var redirectUriParser=document.createElement("a");redirectUriParser.href=redirectUri;var redirectUriPath=getFullUrlPath(redirectUriParser);var polling=_this.$interval(function(){if(!_this.popup||_this.popup.closed||_this.popup.closed===undefined){_this.$interval.cancel(polling);reject(new Error("The popup window was closed"))}try{var popupWindowPath=getFullUrlPath(_this.popup.location);if(popupWindowPath===redirectUriPath){if(_this.popup.location.search||_this.popup.location.hash){var query=parseQueryString(_this.popup.location.search.substring(1).replace(/\/$/,""));var hash=parseQueryString(_this.popup.location.hash.substring(1).replace(/[\/$]/,""));var params=angular.extend({},query,hash);if(params.error){reject(new Error(params.error))}else{resolve(params)}}else{reject(new Error("OAuth redirect has occurred but no query or hash parameters were found. "+"They were either not set during the redirect, or were removed—typically by a "+"routing library—before Satellizer could read it."))}_this.$interval.cancel(polling);_this.popup.close()}}catch(error){}},500)})};Popup.prototype.eventListener=function(redirectUri){var _this=this;return this.$q(function(resolve,reject){_this.popup.addEventListener("loadstart",function(event){if(event.url.indexOf(redirectUri)!==0){return}var parser=document.createElement("a");parser.href=event.url;if(parser.search||parser.hash){var query=parseQueryString(parser.search.substring(1).replace(/\/$/,""));var hash=parseQueryString(parser.hash.substring(1).replace(/[\/$]/,""));var params=angular.extend({},query,hash);if(params.error){reject(new Error(params.error))}else{resolve(params)}_this.popup.close()}});_this.popup.addEventListener("loaderror",function(){reject(new Error("Authorization failed"))});_this.popup.addEventListener("exit",function(){reject(new Error("The popup window was closed"))})})};Popup.$inject=["$interval","$window","$q"];return Popup}();var OAuth1=function(){function OAuth1($http,$window,SatellizerConfig,SatellizerPopup){this.$http=$http;this.$window=$window;this.SatellizerConfig=SatellizerConfig;this.SatellizerPopup=SatellizerPopup;this.defaults={name:null,url:null,authorizationEndpoint:null,scope:null,scopePrefix:null,scopeDelimiter:null,redirectUri:null,requiredUrlParams:null,defaultUrlParams:null,oauthType:"1.0",popupOptions:{width:null,height:null}}}OAuth1.prototype.init=function(options,userData){var _this=this;angular.extend(this.defaults,options);var name=options.name,popupOptions=options.popupOptions;var redirectUri=this.defaults.redirectUri;if(!this.$window["cordova"]){this.SatellizerPopup.open("about:blank",name,popupOptions,redirectUri,true)}return this.getRequestToken().then(function(response){return _this.openPopup(options,response).then(function(popupResponse){return _this.exchangeForToken(popupResponse,userData)})})};OAuth1.prototype.openPopup=function(options,response){var url=[options.authorizationEndpoint,this.buildQueryString(response.data)].join("?");var redirectUri=this.defaults.redirectUri;if(this.$window["cordova"]){return this.SatellizerPopup.open(url,options.name,options.popupOptions,redirectUri)}else{this.SatellizerPopup.popup.location=url;return this.SatellizerPopup.polling(redirectUri)}};OAuth1.prototype.getRequestToken=function(){var url=this.SatellizerConfig.baseUrl?joinUrl(this.SatellizerConfig.baseUrl,this.defaults.url):this.defaults.url;return this.$http.post(url,this.defaults)};OAuth1.prototype.exchangeForToken=function(oauthData,userData){var payload=angular.extend({},userData,oauthData);var exchangeForTokenUrl=this.SatellizerConfig.baseUrl?joinUrl(this.SatellizerConfig.baseUrl,this.defaults.url):this.defaults.url;return this.$http.post(exchangeForTokenUrl,payload,{withCredentials:this.SatellizerConfig.withCredentials})};OAuth1.prototype.buildQueryString=function(obj){var str=[];angular.forEach(obj,function(value,key){str.push(encodeURIComponent(key)+"="+encodeURIComponent(value))});return str.join("&")};OAuth1.$inject=["$http","$window","SatellizerConfig","SatellizerPopup"];return OAuth1}();var OAuth2=function(){function OAuth2($http,$window,$timeout,$q,SatellizerConfig,SatellizerPopup,SatellizerStorage){this.$http=$http;this.$window=$window;this.$timeout=$timeout;this.$q=$q;this.SatellizerConfig=SatellizerConfig;this.SatellizerPopup=SatellizerPopup;this.SatellizerStorage=SatellizerStorage;this.defaults={name:null,url:null,clientId:null,authorizationEndpoint:null,redirectUri:null,scope:null,scopePrefix:null,scopeDelimiter:null,state:null,requiredUrlParams:null,defaultUrlParams:["response_type","client_id","redirect_uri"],responseType:"code",responseParams:{code:"code",clientId:"clientId",redirectUri:"redirectUri"},oauthType:"2.0",popupOptions:{width:null,height:null}}}OAuth2.camelCase=function(name){return name.replace(/([\:\-\_]+(.))/g,function(_,separator,letter,offset){return offset?letter.toUpperCase():letter})};OAuth2.prototype.init=function(options,userData){var _this=this;return this.$q(function(resolve,reject){angular.extend(_this.defaults,options);var stateName=_this.defaults.name+"_state";var _a=_this.defaults,name=_a.name,state=_a.state,popupOptions=_a.popupOptions,redirectUri=_a.redirectUri,responseType=_a.responseType;if(typeof state==="function"){_this.SatellizerStorage.set(stateName,state())}else if(typeof state==="string"){_this.SatellizerStorage.set(stateName,state)}var url=[_this.defaults.authorizationEndpoint,_this.buildQueryString()].join("?");_this.SatellizerPopup.open(url,name,popupOptions,redirectUri).then(function(oauth){if(responseType==="token"||!url){return resolve(oauth)}if(oauth.state&&oauth.state!==_this.SatellizerStorage.get(stateName)){return reject(new Error("The value returned in the state parameter does not match the state value from your original "+"authorization code request."))}resolve(_this.exchangeForToken(oauth,userData))}).catch(function(error){return reject(error)})})};OAuth2.prototype.exchangeForToken=function(oauthData,userData){var _this=this;var payload=angular.extend({},userData);angular.forEach(this.defaults.responseParams,function(value,key){switch(key){case"code":payload[value]=oauthData.code;break;case"clientId":payload[value]=_this.defaults.clientId;break;case"redirectUri":payload[value]=_this.defaults.redirectUri;break;default:payload[value]=oauthData[key]}});if(oauthData.state){payload.state=oauthData.state}var exchangeForTokenUrl=this.SatellizerConfig.baseUrl?joinUrl(this.SatellizerConfig.baseUrl,this.defaults.url):this.defaults.url;return this.$http.post(exchangeForTokenUrl,payload,{withCredentials:this.SatellizerConfig.withCredentials})};OAuth2.prototype.buildQueryString=function(){var _this=this;var keyValuePairs=[];var urlParamsCategories=["defaultUrlParams","requiredUrlParams","optionalUrlParams"];angular.forEach(urlParamsCategories,function(paramsCategory){angular.forEach(_this.defaults[paramsCategory],function(paramName){var camelizedName=OAuth2.camelCase(paramName);var paramValue=angular.isFunction(_this.defaults[paramName])?_this.defaults[paramName]():_this.defaults[camelizedName];if(paramName==="redirect_uri"&&!paramValue){return}if(paramName==="state"){var stateName=_this.defaults.name+"_state";paramValue=encodeURIComponent(_this.SatellizerStorage.get(stateName))}if(paramName==="scope"&&Array.isArray(paramValue)){paramValue=paramValue.join(_this.defaults.scopeDelimiter);if(_this.defaults.scopePrefix){paramValue=[_this.defaults.scopePrefix,paramValue].join(_this.defaults.scopeDelimiter)}}keyValuePairs.push([paramName,paramValue])})});return keyValuePairs.map(function(pair){return pair.join("=")}).join("&")};OAuth2.$inject=["$http","$window","$timeout","$q","SatellizerConfig","SatellizerPopup","SatellizerStorage"];return OAuth2}();var OAuth=function(){function OAuth($http,$window,$timeout,$q,SatellizerConfig,SatellizerPopup,SatellizerStorage,SatellizerShared,SatellizerOAuth1,SatellizerOAuth2){this.$http=$http;this.$window=$window;this.$timeout=$timeout;this.$q=$q;this.SatellizerConfig=SatellizerConfig;this.SatellizerPopup=SatellizerPopup;this.SatellizerStorage=SatellizerStorage;this.SatellizerShared=SatellizerShared;this.SatellizerOAuth1=SatellizerOAuth1;this.SatellizerOAuth2=SatellizerOAuth2}OAuth.prototype.authenticate=function(name,userData){var _this=this;return this.$q(function(resolve,reject){var provider=_this.SatellizerConfig.providers[name];var oauth=null;switch(provider.oauthType){case"1.0":oauth=new OAuth1(_this.$http,_this.$window,_this.SatellizerConfig,_this.SatellizerPopup);break;case"2.0":oauth=new OAuth2(_this.$http,_this.$window,_this.$timeout,_this.$q,_this.SatellizerConfig,_this.SatellizerPopup,_this.SatellizerStorage);break;default:return reject(new Error("Invalid OAuth Type"))}return oauth.init(provider,userData).then(function(response){if(provider.url){_this.SatellizerShared.setToken(response)}resolve(response)}).catch(function(error){reject(error)})})};OAuth.prototype.unlink=function(provider,httpOptions){if(httpOptions===void 0){httpOptions={}}httpOptions.url=httpOptions.url?httpOptions.url:joinUrl(this.SatellizerConfig.baseUrl,this.SatellizerConfig.unlinkUrl);httpOptions.data={provider:provider}||httpOptions.data;httpOptions.method=httpOptions.method||"POST";httpOptions.withCredentials=httpOptions.withCredentials||this.SatellizerConfig.withCredentials;return this.$http(httpOptions)};OAuth.$inject=["$http","$window","$timeout","$q","SatellizerConfig","SatellizerPopup","SatellizerStorage","SatellizerShared","SatellizerOAuth1","SatellizerOAuth2"];return OAuth}();var Storage=function(){function Storage($window,SatellizerConfig){this.$window=$window;this.SatellizerConfig=SatellizerConfig;this.memoryStore={}}Storage.prototype.get=function(key){try{return this.$window[this.SatellizerConfig.storageType].getItem(key)}catch(e){return this.memoryStore[key]}};Storage.prototype.set=function(key,value){try{this.$window[this.SatellizerConfig.storageType].setItem(key,value)}catch(e){this.memoryStore[key]=value}};Storage.prototype.remove=function(key){try{this.$window[this.SatellizerConfig.storageType].removeItem(key)}catch(e){delete this.memoryStore[key]}};Storage.$inject=["$window","SatellizerConfig"];return Storage}();var Interceptor=function(){function Interceptor(SatellizerConfig,SatellizerShared,SatellizerStorage){var _this=this;this.SatellizerConfig=SatellizerConfig;this.SatellizerShared=SatellizerShared;this.SatellizerStorage=SatellizerStorage;this.request=function(config){if(config["skipAuthorization"]){return config}if(_this.SatellizerShared.isAuthenticated()&&_this.SatellizerConfig.httpInterceptor()){var tokenName=_this.SatellizerConfig.tokenPrefix?[_this.SatellizerConfig.tokenPrefix,_this.SatellizerConfig.tokenName].join("_"):_this.SatellizerConfig.tokenName;var token=_this.SatellizerStorage.get(tokenName);if(_this.SatellizerConfig.tokenHeader&&_this.SatellizerConfig.tokenType){token=_this.SatellizerConfig.tokenType+" "+token}config.headers[_this.SatellizerConfig.tokenHeader]=token}return config}}Interceptor.Factory=function(SatellizerConfig,SatellizerShared,SatellizerStorage){return new Interceptor(SatellizerConfig,SatellizerShared,SatellizerStorage)};Interceptor.$inject=["SatellizerConfig","SatellizerShared","SatellizerStorage"];return Interceptor}();Interceptor.Factory.$inject=["SatellizerConfig","SatellizerShared","SatellizerStorage"];var HttpProviderConfig=function(){function HttpProviderConfig($httpProvider){this.$httpProvider=$httpProvider;$httpProvider.interceptors.push(Interceptor.Factory)}HttpProviderConfig.$inject=["$httpProvider"];return HttpProviderConfig}();angular.module("satellizer",[]).provider("$auth",["SatellizerConfig",function(SatellizerConfig){return new AuthProvider(SatellizerConfig)}]).constant("SatellizerConfig",Config.getConstant).service("SatellizerShared",Shared).service("SatellizerLocal",Local).service("SatellizerPopup",Popup).service("SatellizerOAuth",OAuth).service("SatellizerOAuth2",OAuth2).service("SatellizerOAuth1",OAuth1).service("SatellizerStorage",Storage).service("SatellizerInterceptor",Interceptor).config(["$httpProvider",function($httpProvider){return new HttpProviderConfig($httpProvider)}]);var ng1="satellizer";return ng1});
!function(){angular.module("angular-jwt",["angular-jwt.options","angular-jwt.interceptor","angular-jwt.jwt","angular-jwt.authManager"]),angular.module("angular-jwt.authManager",[]).provider("authManager",function(){this.$get=["$rootScope","$injector","$location","jwtHelper","jwtInterceptor","jwtOptions",function(t,e,r,n,a,i){function o(){t.isAuthenticated=!0}function u(){t.isAuthenticated=!1}function s(){t.$on("$locationChangeStart",function(){var t=c.tokenGetter,r=null;r=Array.isArray(t)?e.invoke(t,this,{}):c.tokenGetter(),r&&(n.isTokenExpired(r)||o())})}function h(){t.$on("unauthenticated",function(){var t=c.unauthenticatedRedirector;Array.isArray(t)?e.invoke(t,this,{}):c.unauthenticatedRedirector(r),u()})}var c=i.getConfig();return t.isAuthenticated=!1,{authenticate:o,unauthenticate:u,checkAuthOnRefresh:s,redirectWhenUnauthenticated:h}}]}),angular.module("angular-jwt.interceptor",[]).provider("jwtInterceptor",function(){this.urlParam,this.authHeader,this.authPrefix,this.whiteListedDomains,this.tokenGetter;var t=this;this.$get=["$q","$injector","$rootScope","urlUtils","jwtOptions",function(e,r,n,a,i){function o(t){if(!a.isSameOrigin(t)&&!u.whiteListedDomains.length)throw new Error("As of v0.1.0, requests to domains other than the application's origin must be white listed. Use jwtOptionsProvider.config({ whiteListedDomains: [<domain>] }); to whitelist.");for(var e=a.urlResolve(t).hostname.toLowerCase(),r=0;r<u.whiteListedDomains.length;r++){var n=u.whiteListedDomains[r].toLowerCase();if(n===e)return!0}return a.isSameOrigin(t)?!0:!1}var u=angular.extend({},i.getConfig(),t);return{request:function(t){if(t.skipAuthorization||!o(t.url))return t;if(u.urlParam){if(t.params=t.params||{},t.params[u.urlParam])return t}else if(t.headers=t.headers||{},t.headers[u.authHeader])return t;var n=e.when(r.invoke(u.tokenGetter,this,{options:t}));return n.then(function(e){return e&&(u.urlParam?t.params[u.urlParam]=e:t.headers[u.authHeader]=u.authPrefix+e),t})},responseError:function(t){return 401===t.status&&n.$broadcast("unauthenticated",t),e.reject(t)}}}]}),angular.module("angular-jwt.jwt",[]).service("jwtHelper",["$window",function(t){this.urlBase64Decode=function(e){var r=e.replace(/-/g,"+").replace(/_/g,"/");switch(r.length%4){case 0:break;case 2:r+="==";break;case 3:r+="=";break;default:throw"Illegal base64url string!"}return t.decodeURIComponent(escape(t.atob(r)))},this.decodeToken=function(t){var e=t.split(".");if(3!==e.length)throw new Error("JWT must have 3 parts");var r=this.urlBase64Decode(e[1]);if(!r)throw new Error("Cannot decode the token");return angular.fromJson(r)},this.getTokenExpirationDate=function(t){var e=this.decodeToken(t);if("undefined"==typeof e.exp)return null;var r=new Date(0);return r.setUTCSeconds(e.exp),r},this.isTokenExpired=function(t,e){var r=this.getTokenExpirationDate(t);return e=e||0,null===r?!1:!(r.valueOf()>(new Date).valueOf()+1e3*e)}}]),angular.module("angular-jwt.options",[]).provider("jwtOptions",function(){var t={};this.config=function(e){t=e},this.$get=function(){function e(){this.config=angular.extend({},r,t)}var r={urlParam:null,authHeader:"Authorization",authPrefix:"Bearer ",whiteListedDomains:[],tokenGetter:function(){return null},loginPath:"/",unauthenticatedRedirectPath:"/",unauthenticatedRedirector:function(t){t.path(this.unauthenticatedRedirectPath)}};return e.prototype.getConfig=function(){return this.config},new e}}),angular.module("angular-jwt.interceptor").service("urlUtils",function(){function t(t){var e=t;return r.setAttribute("href",e),e=r.href,r.setAttribute("href",e),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:"/"===r.pathname.charAt(0)?r.pathname:"/"+r.pathname}}function e(e){var r=angular.isString(e)?t(e):e;return r.protocol===n.protocol&&r.host===n.host}var r=document.createElement("a"),n=t(window.location.href);return{urlResolve:t,isSameOrigin:e}})}();