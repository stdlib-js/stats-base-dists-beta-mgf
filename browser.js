// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function i(r,e,t){var i=!1,o=e-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+n(o):n(o)+r,i&&(r="-"+r)),r}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(r){var e,n,u;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,u=parseInt(n,10),!isFinite(u)){if(!t(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===r.specifier||10!==e)&&(u=4294967295+u+1),u<0?(n=(-u).toString(e),r.precision&&(n=i(n,r.precision,r.padRight)),n="-"+n):(n=u.toString(e),u||r.precision?r.precision&&(n=i(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===a.call(r.specifier)?a.call(n):o.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function c(r){return"string"==typeof r}var f=Math.abs,l=String.prototype.toLowerCase,s=String.prototype.toUpperCase,p=String.prototype.replace,y=/e\+(\d)$/,g=/e-(\d)$/,d=/^(\d+)$/,v=/^(\d+)e/,b=/\.0$/,h=/\.0*e/,w=/(\..*[^0])0*e/;function m(r){var e,n,i=parseFloat(r.arg);if(!isFinite(i)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);i=r.arg}switch(r.specifier){case"e":case"E":n=i.toExponential(r.precision);break;case"f":case"F":n=i.toFixed(r.precision);break;case"g":case"G":f(i)<1e-4?((e=r.precision)>0&&(e-=1),n=i.toExponential(e)):n=i.toPrecision(r.precision),r.alternate||(n=p.call(n,w,"$1e"),n=p.call(n,h,"e"),n=p.call(n,b,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=p.call(n,y,"e+0$1"),n=p.call(n,g,"e-0$1"),r.alternate&&(n=p.call(n,d,"$1."),n=p.call(n,v,"$1.e")),i>=0&&r.sign&&(n=r.sign+n),n=r.specifier===s.call(r.specifier)?s.call(n):l.call(n)}function I(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function N(r,e,t){var n=e-r.length;return n<0?r:r=t?r+I(n):I(n)+r}var S=String.fromCharCode,A=isNaN,T=Array.isArray;function _(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function E(r){var e,t,n,o,a,f,l,s,p;if(!T(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",l=1,s=0;s<r.length;s++)if(c(n=r[s]))f+=n;else{if(e=void 0!==n.precision,!(n=_(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(l=n.mapping),t=n.flags,p=0;p<t.length;p++)switch(o=t.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[l],10),l+=1,A(n.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[l],10),l+=1,A(n.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[l],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!A(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=A(a)?String(n.arg):S(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=m(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=N(n.arg,n.width,n.padRight)),f+=n.arg||"",l+=1}return f}var F=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function U(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function V(r){var e,t,n,i;for(t=[],i=0,n=F.exec(r);n;)(e=r.slice(i,F.lastIndex-n[0].length)).length&&t.push(e),t.push(U(n)),i=F.lastIndex,n=F.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function j(r){return"string"==typeof r}function O(r){var e,t;if(!j(r))throw new TypeError(O("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[V(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return E.apply(null,e)}var x=Object.prototype,k=x.toString,G=x.__defineGetter__,P=x.__defineSetter__,Y=x.__lookupGetter__,$=x.__lookupSetter__,H=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===k.call(r))throw new TypeError(O("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===k.call(t))throw new TypeError(O("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(Y.call(r,e)||$.call(r,e)?(n=r.__proto__,r.__proto__=x,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&G&&G.call(r,e,t.get),a&&P&&P.call(r,e,t.set),r};function W(r,e,t){H(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function C(r){return r!=r}function L(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}var R=L(),M=Object.prototype.toString,Z=Object.prototype.hasOwnProperty;function X(r,e){return null!=r&&Z.call(r,e)}var q,z="function"==typeof Symbol?Symbol:void 0,B="function"==typeof z?z.toStringTag:"",D=R&&"symbol"==typeof Symbol.toStringTag?function(r){var e,t,n;if(null==r)return M.call(r);t=r[B],e=X(r,B);try{r[B]=void 0}catch(e){return M.call(r)}return n=M.call(r),e?r[B]=t:delete r[B],n}:function(r){return M.call(r)},J="function"==typeof Uint32Array,K="function"==typeof Uint32Array?Uint32Array:null,Q="function"==typeof Uint32Array?Uint32Array:void 0;q=function(){var r,e,t;if("function"!=typeof K)return!1;try{e=new K(e=[1,3.14,-3.14,4294967296,4294967297]),t=e,r=(J&&t instanceof Uint32Array||"[object Uint32Array]"===D(t))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Q:function(){throw new Error("not implemented")};var rr,er=q,tr=L(),nr=Object.prototype.toString,ir="function"==typeof Symbol?Symbol:void 0,or="function"==typeof ir?ir.toStringTag:"",ar=tr&&"symbol"==typeof Symbol.toStringTag?function(r){var e,t,n;if(null==r)return nr.call(r);t=r[or],e=X(r,or);try{r[or]=void 0}catch(e){return nr.call(r)}return n=nr.call(r),e?r[or]=t:delete r[or],n}:function(r){return nr.call(r)},ur="function"==typeof Float64Array,cr="function"==typeof Float64Array?Float64Array:null,fr="function"==typeof Float64Array?Float64Array:void 0;rr=function(){var r,e,t;if("function"!=typeof cr)return!1;try{e=new cr([1,3.14,-3.14,NaN]),t=e,r=(ur&&t instanceof Float64Array||"[object Float64Array]"===ar(t))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?fr:function(){throw new Error("not implemented")};var lr,sr=rr,pr=L(),yr=Object.prototype.toString,gr="function"==typeof Symbol?Symbol:void 0,dr="function"==typeof gr?gr.toStringTag:"",vr=pr&&"symbol"==typeof Symbol.toStringTag?function(r){var e,t,n;if(null==r)return yr.call(r);t=r[dr],e=X(r,dr);try{r[dr]=void 0}catch(e){return yr.call(r)}return n=yr.call(r),e?r[dr]=t:delete r[dr],n}:function(r){return yr.call(r)},br="function"==typeof Uint8Array,hr="function"==typeof Uint8Array?Uint8Array:null,wr="function"==typeof Uint8Array?Uint8Array:void 0;lr=function(){var r,e,t;if("function"!=typeof hr)return!1;try{e=new hr(e=[1,3.14,-3.14,256,257]),t=e,r=(br&&t instanceof Uint8Array||"[object Uint8Array]"===vr(t))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?wr:function(){throw new Error("not implemented")};var mr,Ir=lr,Nr=L(),Sr=Object.prototype.toString,Ar="function"==typeof Symbol?Symbol:void 0,Tr="function"==typeof Ar?Ar.toStringTag:"",_r=Nr&&"symbol"==typeof Symbol.toStringTag?function(r){var e,t,n;if(null==r)return Sr.call(r);t=r[Tr],e=X(r,Tr);try{r[Tr]=void 0}catch(e){return Sr.call(r)}return n=Sr.call(r),e?r[Tr]=t:delete r[Tr],n}:function(r){return Sr.call(r)},Er="function"==typeof Uint16Array,Fr="function"==typeof Uint16Array?Uint16Array:null,Ur="function"==typeof Uint16Array?Uint16Array:void 0;mr=function(){var r,e,t;if("function"!=typeof Fr)return!1;try{e=new Fr(e=[1,3.14,-3.14,65536,65537]),t=e,r=(Er&&t instanceof Uint16Array||"[object Uint16Array]"===_r(t))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Ur:function(){throw new Error("not implemented")};var Vr,jr={uint16:mr,uint8:Ir};(Vr=new jr.uint16(1))[0]=4660;var Or=52===new jr.uint8(Vr.buffer)[0],xr=!0===Or?1:0,kr=new sr(1),Gr=new er(kr.buffer);function Pr(r){return kr[0]=r,Gr[xr]}var Yr=!0===Or?1:0,$r=new sr(1),Hr=new er($r.buffer);function Wr(r,e){return $r[0]=r,Hr[Yr]=e>>>0,$r[0]}var Cr=Number.POSITIVE_INFINITY,Lr=Number.NEGATIVE_INFINITY,Rr=1023,Mr=.6931471803691238,Zr=1.9082149292705877e-10,Xr=Math.sqrt;function qr(r){return Math.abs(r)}var zr=Math.floor,Br=Math.ceil;function Dr(r){return r<0?Br(r):zr(r)}var Jr=Number.NEGATIVE_INFINITY,Kr=Number.POSITIVE_INFINITY,Qr=Number.POSITIVE_INFINITY,re=Number.NEGATIVE_INFINITY,ee=Number.POSITIVE_INFINITY,te=Number.NEGATIVE_INFINITY;function ne(r){return r===ee||r===te}var ie,oe,ae=2147483647;!0===Or?(ie=1,oe=0):(ie=0,oe=1);var ue,ce,fe={HIGH:ie,LOW:oe},le=new sr(1),se=new er(le.buffer),pe=fe.HIGH,ye=fe.LOW;function ge(r,e,t,n){return le[0]=r,e[n]=se[pe],e[n+t]=se[ye],e}function de(r){return ge(r,[0,0],1,0)}W(de,"assign",ge),!0===Or?(ue=1,ce=0):(ue=0,ce=1);var ve={HIGH:ue,LOW:ce},be=new sr(1),he=new er(be.buffer),we=ve.HIGH,me=ve.LOW;function Ie(r,e){return he[we]=r,he[me]=e,be[0]}var Ne=[0,0];function Se(r,e){var t,n;return de.assign(r,Ne,1,0),t=Ne[0],t&=ae,n=Pr(e),Ie(t|=n&=2147483648,Ne[1])}function Ae(r,e,t,n){return C(r)||ne(r)?(e[n]=r,e[n+t]=0,e):0!==r&&qr(r)<22250738585072014e-324?(e[n]=4503599627370496*r,e[n+t]=-52,e):(e[n]=r,e[n+t]=0,e)}W((function(r){return Ae(r,[0,0],1,0)}),"assign",Ae);var Te=[0,0],_e=[0,0];function Ee(r,e){var t,n;return 0===e||0===r||C(r)||ne(r)?r:(Ae(r,Te,1,0),e+=Te[1],e+=function(r){var e=Pr(r);return(e=(2146435072&e)>>>20)-Rr|0}(r=Te[0]),e<-1074?Se(0,r):e>1023?r<0?re:Qr:(e<=-1023?(e+=52,n=2220446049250313e-31):n=1,de.assign(r,_e,1,0),t=_e[0],t&=2148532223,n*Ie(t|=e+Rr<<20,_e[1])))}var Fe=1.4426950408889634,Ue=1/(1<<28);function Ve(r){var e;return C(r)||r===Kr?r:r===Jr?0:r>709.782712893384?Kr:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<Ue?1+r:function(r,e,t){var n,i,o,a;return Ee(1-(e-(n=r-e)*(o=n-(i=n*n)*(0===(a=i)?.16666666666666602:.16666666666666602+a*(a*(6613756321437934e-20+a*(4.1381367970572385e-8*a-16533902205465252e-22))-.0027777777777015593)))/(2-o)-r),t)}(r-.6931471803691238*(e=Dr(r<0?Fe*r-.5:Fe*r+.5)),1.9082149292705877e-10*e,e)}function je(r){return zr(r)===r}function Oe(r){return je(r/2)}function xe(r){return Oe(r>0?r-1:r+1)}var ke=!0===Or?0:1,Ge=new sr(1),Pe=new er(Ge.buffer);function Ye(r,e){return Ge[0]=r,Pe[ke]=e>>>0,Ge[0]}function $e(r){return 0|r}var He=Number.NEGATIVE_INFINITY,We=Number.POSITIVE_INFINITY,Ce=1048576,Le=[1,1.5],Re=[0,.5849624872207642],Me=[0,1.350039202129749e-8],Ze=1048575,Xe=1048576,qe=1083179008,ze=1e300,Be=1e-300,De=[0,0],Je=[0,0];function Ke(r,e){var t,n,i,o,a,u,c,f,l,s,p,y,g,d;if(C(r)||C(e))return NaN;if(de.assign(e,De,1,0),a=De[0],0===De[1]){if(0===e)return 1;if(1===e)return r;if(-1===e)return 1/r;if(.5===e)return Xr(r);if(-.5===e)return 1/Xr(r);if(2===e)return r*r;if(3===e)return r*r*r;if(4===e)return(r*=r)*r;if(ne(e))return function(r,e){return-1===r?(r-r)/(r-r):1===r?1:qr(r)<1==(e===We)?0:We}(r,e)}if(de.assign(r,De,1,0),o=De[0],0===De[1]){if(0===o)return function(r,e){return e===He?We:e===We?0:e>0?xe(e)?r:0:xe(e)?Se(We,r):We}(r,e);if(1===r)return 1;if(-1===r&&xe(e))return-1;if(ne(r))return r===He?Ke(-0,-e):e<0?0:We}if(r<0&&!1===je(e))return(r-r)/(r-r);if(i=qr(r),t=o&ae|0,n=a&ae|0,c=a>>>31|0,u=(u=o>>>31|0)&&xe(e)?-1:1,n>1105199104){if(n>1139802112)return function(r,e){return(Pr(r)&ae)<=1072693247?e<0?1/0:0:e>0?1/0:0}(r,e);if(t<1072693247)return 1===c?u*ze*ze:u*Be*Be;if(t>1072693248)return 0===c?u*ze*ze:u*Be*Be;p=function(r,e){var t,n,i,o,a,u;return t=(a=1.9259629911266175e-8*(i=e-1)-i*i*(0===(u=i)?.5:.5+u*(.25*u-.3333333333333333))*1.4426950408889634)-((n=Ye(n=(o=1.4426950216293335*i)+a,0))-o),r[0]=n,r[1]=t,r}(Je,i)}else p=function(r,e,t){var n,i,o,a,u,c,f,l,s,p,y,g,d,v,b,h,w,m,I,N,S;return m=0,t<Ce&&(m-=53,t=Pr(e*=9007199254740992)),m+=(t>>20)-Rr|0,t=1072693248|(I=1048575&t|0),I<=235662?N=0:I<767610?N=1:(N=0,m+=1,t-=Ce),a=Ye(i=(h=(e=Wr(e,t))-(f=Le[N]))*(w=1/(e+f)),0),n=524288+(t>>1|536870912),c=Wr(0,n+=N<<18),b=(o=i*i)*o*(0===(S=o)?.5999999999999946:.5999999999999946+S*(.4285714285785502+S*(.33333332981837743+S*(.272728123808534+S*(.23066074577556175+.20697501780033842*S))))),c=Ye(c=3+(o=a*a)+(b+=(u=w*(h-a*c-a*(e-(c-f))))*(a+i)),0),d=(y=-7.028461650952758e-9*(s=Ye(s=(h=a*c)+(w=u*c+(b-(c-3-o))*i),0))+.9617966939259756*(w-(s-h))+Me[N])-((g=Ye(g=(p=.9617967009544373*s)+y+(l=Re[N])+(v=m),0))-v-l-p),r[0]=g,r[1]=d,r}(Je,i,t);if(y=(s=(e-(f=Ye(e,0)))*p[0]+e*p[1])+(l=f*p[0]),de.assign(y,De,1,0),g=$e(De[0]),d=$e(De[1]),g>=qe){if(0!=(g-qe|d))return u*ze*ze;if(s+8008566259537294e-32>y-l)return u*ze*ze}else if((g&ae)>=1083231232){if(0!=(g-3230714880|d))return u*Be*Be;if(s<=y-l)return u*Be*Be}return y=function(r,e,t){var n,i,o,a,u,c,f,l,s,p;return s=((l=r&ae|0)>>20)-Rr|0,f=0,l>1071644672&&(i=Wr(0,((f=r+(Xe>>s+1)>>>0)&~(Ze>>(s=((f&ae)>>20)-Rr|0)))>>>0),f=(f&Ze|Xe)>>20-s>>>0,r<0&&(f=-f),e-=i),r=$e(r=Pr(c=1-((c=(o=.6931471824645996*(i=Ye(i=t+e,0)))+(a=.6931471805599453*(t-(i-e))+-1.904654299957768e-9*i))*(n=c-(i=c*c)*(0===(p=i)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(n-2)-((u=a-(c-o))+c*u)-c))),(r+=f<<20>>>0)>>20<=0?Ee(c,f):Wr(c,r)}(g,l,s),u*y}var Qe=2220446049250313e-31;function rt(r){var e,t;return 0===r?1/0:((r<0?-r:r)<=1?(e=709811.662581658+r*(679979.8474157227+r*(293136.7857211597+r*(74887.54032914672+r*(12555.290582413863+r*(1443.4299244417066+r*(115.24194596137347+r*(6.309239205732627+r*(.22668404630224365+r*(.004826466289237662+4624429436045379e-20*r))))))))),t=0+r*(362880+r*(1026576+r*(1172700+r*(723680+r*(269325+r*(63273+r*(9450+r*(870+r*(45+1*r)))))))))):(e=4624429436045379e-20+(r=1/r)*(.004826466289237662+r*(.22668404630224365+r*(6.309239205732627+r*(115.24194596137347+r*(1443.4299244417066+r*(12555.290582413863+r*(74887.54032914672+r*(293136.7857211597+r*(679979.8474157227+709811.662581658*r))))))))),t=1+r*(45+r*(870+r*(9450+r*(63273+r*(269325+r*(723680+r*(1172700+r*(1026576+r*(362880+0*r)))))))))),e/t)}var et=10.900511;function tt(r,e){var t,n,i,o,a,u,c;return C(r)||C(e)||r<0||e<0?NaN:1===e?1/r:1===r?1/e:(c=r+e)<Qe?(a=c/r,a/=e):c===r&&e<Qe?1/e:c===e&&r<Qe?1/r:(r<e&&(u=e,e=r,r=u),n=r+et-.5,i=e+et-.5,o=c+et-.5,a=rt(r)*(rt(e)/rt(c)),qr(e*(t=r-.5-e))<100*o&&r>100?a*=Ve(t*function(r){var e,t,n,i,o,a,u,c,f,l;if(r<-1||C(r))return NaN;if(-1===r)return Lr;if(r===Cr)return r;if(0===r)return r;if(l=1,(n=r<0?-r:r)<.41421356237309503){if(n<1.862645149230957e-9)return n<5551115123125783e-32?r:r-r*r*.5;r>-.2928932188134525&&(l=0,i=r,t=1)}return 0!==l&&(n<9007199254740992?(o=(l=((t=Pr(f=1+r))>>20)-Rr)>0?1-(f-r):r-(f-1),o/=f):(l=((t=Pr(f=r))>>20)-Rr,o=0),(t&=1048575)<434334?f=Wr(f,1072693248|t):(l+=1,f=Wr(f,1071644672|t),t=1048576-t>>2),i=f-1),e=.5*i*i,0===t?0===i?l*Mr+(o+=l*Zr):l*Mr-((c=e*(1-.6666666666666666*i))-(l*Zr+o)-i):(c=(u=(a=i/(2+i))*a)*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+.14798198605116586*r)))))}(u),0===l?i-(e-a*(e+c)):l*Mr-(e-(a*(e+c)+(l*Zr+o))-i))}(-e/o)):a*=Ke(n/o,t),a*=Ke(o>1e10?n/o*(i/o):n*i/(o*o),e),a*=Xr(2.718281828459045/i))}function nt(r,e,t){var n,i,o,a,u;i=tt(e,t),o=1,a=1,u=1;do{a*=r/u,o+=n=tt(e+u,t)/i*a,u+=1}while(qr(n/o)>=Qe);return o}function it(r,e,t){return C(r)||C(e)||C(t)||e<=0||t<=0?NaN:nt(r,e,t)}return W(it,"factory",(function(r,e){return C(r)||C(e)||r<=0||e<=0?(t=NaN,function(){return t}):function(t){return C(t)?NaN:nt(t,r,e)};var t})),it},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).mgf=e();
//# sourceMappingURL=browser.js.map
