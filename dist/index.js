"use strict";var v=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var a=v(function(B,m){
var q=require('@stdlib/math-base-special-beta/dist'),F=require('@stdlib/math-base-special-abs/dist'),k=require('@stdlib/constants-float64-eps/dist');function w(e,r,u){var n,o,i,s,t;o=q(r,u),i=1,s=1,t=1;do s*=e/t,n=q(r+t,u)/o*s,i+=n,t+=1;while(F(n/i)>=k);return i}m.exports=w
});var g=v(function(C,N){
var c=require('@stdlib/math-base-assert-is-nan/dist'),E=a();function O(e,r,u){return c(e)||c(r)||c(u)||r<=0||u<=0?NaN:E(e,r,u)}N.exports=O
});var x=v(function(D,d){
var P=require('@stdlib/utils-constant-function/dist'),f=require('@stdlib/math-base-assert-is-nan/dist'),R=a();function S(e,r){if(f(e)||f(r)||e<=0||r<=0)return P(NaN);return u;function u(n){return f(n)?NaN:R(n,e,r)}}d.exports=S
});var j=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),y=g(),z=x();j(y,"factory",z);module.exports=y;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
