"use strict";var v=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(a){throw (r=0, a)}};};var s=v(function(A,f){
var x=require('@stdlib/math-base-assert-is-nan/dist'),l=require('@stdlib/math-base-assert-is-negative-zero/dist');function R(e,r,a,q){var u,t,i,n;if(e<=0)return NaN;if(e===1||a===0)return r[q];for(t=q,n=0;n<e&&(i=r[t],i!==i);n++)t+=a;if(n===e)return NaN;for(u=i,n+=1,n;n<e;n++)t+=a,i=r[t],!x(i)&&(i<u||i===u&&l(i))&&(u=i);return u}f.exports=R
});var c=v(function(B,m){
var _=require('@stdlib/strided-base-stride2offset/dist'),b=s();function g(e,r,a){return b(e,r,a,_(e,a))}m.exports=g
});var y=v(function(C,p){
var k=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),d=c(),E=s();k(d,"ndarray",E);p.exports=d
});var O=require("path").join,Z=require('@stdlib/utils-try-require/dist'),h=require('@stdlib/assert-is-error/dist'),w=y(),o,j=Z(O(__dirname,"./native.js"));h(j)?o=w:o=j;module.exports=o;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
