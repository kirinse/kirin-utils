define("kirin/utils/1.0.0/kstring",["./kkstring"],function(a){var b=a("./kkstring"),c=function(a){return new b(a)};return c.fn=b.prototype,c}),define("kirin/utils/1.0.0/kstring",["./kkstring"],function(a,b,c){var d=a("class"),e=a("./array"),f=/^[a-zA-Z0-9\-_.!~*'()]*$/,g=/&/g,h=/</g,i=/>/g,j=/\"/g,k=/[&<>\"]/,l=d(String).extend({initialize:function(a){this.str=a},toInt:function(a){return parseInt(this.str,a||10)},hexToRgb:function(a){var b=this.str.match(/^#?(\w{1,2})(\w{1,2})(\w{1,2})$/);return b?e(b.slice(1)).hexToRgb(a):null},rgbToHex:function(a){var b=this.str.match(/\d{1,3}/g);return b?e(b).rgbToHex(a):null},parseColor:function(a){if("rgb("==this.str.slice(0,4))var b=this.rgbToHex();else{var b="#";if("#"==this.str.slice(0,1)){if(4==this.str.length)for(var c=1;4>c;c++)b+=(this.str.charAt(c)+this.str.charAt(c)).toLowerCase();7==this.str.length&&(b=this.str.toLowerCase())}}return 7==b.length?b:a||this.str},stripScripts:function(a,b){var c="",d=this.str.replace(/<script[^>]*>([\s\S]*?)<\/script>/gi,function(){return c+=arguments[1],""});return"function"==typeof a&&a.call(b,c,d),d},substitute:function(a,b){var c=this.str.replace(b||/\{([^}]+)\}/gm,function(b,c){return void 0!=a[c]?a[c]:""});return c},trimLeft:function(){return this.str.replace(/^[\s\xa0]+/,"")},trimRight:function(){return this.str.replace(/[\s\xa0]+$/,"")},urlEncode:function(){return f.test(this.str)?this.str:encodeURIComponent(this.str)},urlDecode:function(){return decodeURIComponent(this.str.replace(/\+/g," "))},escapeHTML:function(){if(!k.test(this.str))return this.str;var a=this.str;return-1!=a.indexOf("&")&&(a=a.replace(g,"&amp;")),-1!=a.indexOf("<")&&(a=a.replace(h,"&lt;")),-1!=a.indexOf(">")&&(a=a.replace(i,"&gt;")),-1!=a.indexOf('"')&&(a=a.replace(j,"&quot;")),a},unescapeHTML:function(){return this.trim().length?this.str.replace(/&([^;]+);/g,function(a,b){switch(b){case"amp":return"&";case"lt":return"<";case"gt":return">";case"quot":return'"';default:if("#"==b.charAt(0)){var c=Number("0"+b.substr(1));if(!isNaN(c))return String.fromCharCode(c)}return a}}):this.str},contains:function(a,b){return b?(b+this.str+b).indexOf(b+a+b)>-1:this.str.indexOf(a)>-1},trim:function(){for(var a=this.str.replace(/^\s+/,""),b=a.length-1;b>=0;b--)if(/\S/.test(a.charAt(b))){a=a.substring(0,b+1);break}return a},clean:function(){return this.trim(this.str.replace(/\s+/g," "))},rep:function(a,b){if(b&&(this.str=b),0>=a||!this.str)return"";for(var c=[];1&a&&c.push(this.str),a>>=1;)this.str+=this.str;return c.join("")},pad:function(a,b,c){b||(b="0");var d=String(this.str),e=this.rep(Math.ceil((a-d.length)/b.length),b);return c?d+e:e+d},capitalize:function(){var a=this.str.replace(/\b[a-z]/g,function(a){return a.toUpperCase()});return a},ftoh:function(a){var b,c,d="",a=a||"both";switch(a){case"all":case"both":b=this.trim();break;case"left":b=this.trimLeft();break;case"right":b=this.trimRight();break;default:b=this.str}for(var e=0,f=b.length;f>e;e++)if(c=b.charCodeAt(e),12288!=c)if(c>65280&&65375>c)d+=String.fromCharCode(c-65248);else{if(32==c&&"all"==a)continue;d+=String.fromCharCode(b.charCodeAt(e))}else"all"!=a&&(d+=String.fromCharCode(c-12256));return d},camelCase:function(){var a=this.str.replace(/-\D/g,function(a){return a.charAt(1).toUpperCase()});return a},hyphenate:function(){var a=this.replace(/[A-Z]/g,function(a){return"-"+a.charAt(0).toLowerCase()});return a},slug:function(a){a=a||"-";var b=String(this.str);return b=b.replace(/([A-Z])/g,function(a){return" "+a.toLowerCase()}),b=b.replace(/([^a-z0-9]+)/g," "),b=b.replace(/\s+/g," "),b=b.trim().replace(/ +/g,a)},escapeRegExp:function(){return this.replace(/([-.*+?^${}()|[\]\/\\])/g,"\\$1")},toFloat:function(){return parseFloat(String(this.str))}});c.exports=l,l.prototype.toString=function(){return this.str}});
