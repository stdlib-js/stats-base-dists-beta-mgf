// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.2.0-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-beta@v0.1.0-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-abs@v0.1.1-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-eps@v0.2.0-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@v0.2.0-esm/index.mjs";function d(t,s,r){var d,m,o,a,l;m=e(s,r),o=1,a=1,l=1;do{a*=t/l,o+=d=e(s+l,r)/m*a,l+=1}while(n(d/o)>=i);return o}function m(t,e,n){return s(t)||s(e)||s(n)||e<=0||n<=0?NaN:d(t,e,n)}function o(t,e){return s(t)||s(e)||t<=0||e<=0?r(NaN):function(n){if(s(n))return NaN;return d(n,t,e)}}t(m,"factory",o);export{m as default,o as factory};
//# sourceMappingURL=index.mjs.map