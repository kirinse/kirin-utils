define("arale/class/2.0.0/class",[],function(a,b,c){function d(a){return this instanceof d||!m(a)?void 0:e(a).implement({initialize:a})}function e(a){return h(a,d),a.extend=g,a.implement=f,a}function f(a){Array.isArray(a)||(a=[a]);for(var b,c=this.prototype;b=a.shift();)j(c,b.prototype||b);return this}function g(a){var b=d.create(a);return h(b,this),j(b,this,["extend","implement","superclass"]),b}function h(a,b){var c=a.prototype,d=k(b.prototype);j(d,c),d.constructor=a,a.prototype=d,a.superclass=b.prototype}function i(){}function j(a,b,c){for(var d in b)if(b.hasOwnProperty(d)){if(c&&-1!==c.indexOf(d))continue;"prototype"!==d&&(a[d]=b[d])}}c.exports=d,d.create=function(a){function b(){this.constructor===b&&this.initialize&&this.initialize.apply(this,arguments)}return a||(a={}),e(b),b.implement(a),b};var k=Object.__proto__?function(a){return{__proto__:a}}:function(a){return i.prototype=a,new i},l=Object.prototype.toString,m=function(a){return"[object Function]"===l.call(a)}});
