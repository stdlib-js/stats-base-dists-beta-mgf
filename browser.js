// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty;function n(r){return"number"==typeof r}function t(r){var e,n="";for(e=0;e<r;e++)n+="0";return n}function i(r,e,n){var i=!1,a=e-r.length;return a<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=n?r+t(a):t(a)+r,i&&(r="-"+r)),r}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function u(r){var e,t,u;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,u=parseInt(t,10),!isFinite(u)){if(!n(t))throw new Error("invalid integer. Value: "+t);u=0}return u<0&&("u"===r.specifier||10!==e)&&(u=4294967295+u+1),u<0?(t=(-u).toString(e),r.precision&&(t=i(t,r.precision,r.padRight)),t="-"+t):(t=u.toString(e),u||r.precision?r.precision&&(t=i(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===o.call(r.specifier)?o.call(t):a.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}var f=Math.abs,c=String.prototype.toLowerCase,s=String.prototype.toUpperCase,l=String.prototype.replace,p=/e\+(\d)$/,y=/e-(\d)$/,g=/^(\d+)$/,d=/^(\d+)e/,v=/\.0$/,h=/\.0*e/,w=/(\..*[^0])0*e/;function b(r){var e,t,i=parseFloat(r.arg);if(!isFinite(i)){if(!n(r.arg))throw new Error("invalid floating-point number. Value: "+t);i=r.arg}switch(r.specifier){case"e":case"E":t=i.toExponential(r.precision);break;case"f":case"F":t=i.toFixed(r.precision);break;case"g":case"G":f(i)<1e-4?((e=r.precision)>0&&(e-=1),t=i.toExponential(e)):t=i.toPrecision(r.precision),r.alternate||(t=l.call(t,w,"$1e"),t=l.call(t,h,"e"),t=l.call(t,v,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=l.call(t,p,"e+0$1"),t=l.call(t,y,"e-0$1"),r.alternate&&(t=l.call(t,g,"$1."),t=l.call(t,d,"$1.e")),i>=0&&r.sign&&(t=r.sign+t),t=r.specifier===s.call(r.specifier)?s.call(t):c.call(t)}function m(r){var e,n="";for(e=0;e<r;e++)n+=" ";return n}var A=String.fromCharCode,_=isNaN,E=Array.isArray;function N(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function U(r){var e,n,t,a,o,f,c,s,l,p,y,g,d;if(!E(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",c=1,s=0;s<r.length;s++)if("string"==typeof(t=r[s]))f+=t;else{if(e=void 0!==t.precision,!(t=N(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+t+"`.");for(t.mapping&&(c=t.mapping),n=t.flags,l=0;l<n.length;l++)switch(a=n.charAt(l)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=n.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===t.width){if(t.width=parseInt(arguments[c],10),c+=1,_(t.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(e&&"*"===t.precision){if(t.precision=parseInt(arguments[c],10),c+=1,_(t.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,e=!1)}switch(t.arg=arguments[c],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(t.padZeros=!1),t.arg=u(t);break;case"s":t.maxWidth=e?t.precision:-1;break;case"c":if(!_(t.arg)){if((o=parseInt(t.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=_(o)?String(t.arg):A(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(t.precision=6),t.arg=b(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=i(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=(p=t.arg,y=t.width,g=t.padRight,d=void 0,(d=y-p.length)<0?p:p=g?p+m(d):m(d)+p)),f+=t.arg||"",c+=1}return f}var I=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function S(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function x(r){var e,n,t,i;for(n=[],i=0,t=I.exec(r);t;)(e=r.slice(i,I.lastIndex-t[0].length)).length&&n.push(e),n.push(S(t)),i=I.lastIndex,t=I.exec(r);return(e=r.slice(i)).length&&n.push(e),n}function k(r){var e,n;if("string"!=typeof r)throw new TypeError(k("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[x(r)],n=1;n<arguments.length;n++)e.push(arguments[n]);return U.apply(null,e)}var F=Object.prototype,j=F.toString,T=F.__defineGetter__,O=F.__defineSetter__,V=F.__lookupGetter__,$=F.__lookupSetter__,G=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,n){var t,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===j.call(r))throw new TypeError(k("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof n||null===n||"[object Array]"===j.call(n))throw new TypeError(k("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((i="value"in n)&&(V.call(r,e)||$.call(r,e)?(t=r.__proto__,r.__proto__=F,delete r[e],r[e]=n.value,r.__proto__=t):r[e]=n.value),a="get"in n,o="set"in n,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&T&&T.call(r,e,n.get),o&&O&&O.call(r,e,n.set),r};function H(r,e,n){G(r,e,{configurable:!1,enumerable:!1,writable:!1,value:n})}function W(r){return r!=r}var C,L="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),P=Object.prototype.toString,R=Object.prototype.hasOwnProperty,M="function"==typeof Symbol?Symbol:void 0,Z="function"==typeof M?M.toStringTag:"",X=L&&"symbol"==typeof Symbol.toStringTag?function(r){var e,n,t,i,a;if(null==r)return P.call(r);n=r[Z],a=Z,e=null!=(i=r)&&R.call(i,a);try{r[Z]=void 0}catch(e){return P.call(r)}return t=P.call(r),e?r[Z]=n:delete r[Z],t}:function(r){return P.call(r)},Y="function"==typeof Uint32Array,q="function"==typeof Uint32Array?Uint32Array:null,z="function"==typeof Uint32Array?Uint32Array:void 0;C=function(){var r,e,n;if("function"!=typeof q)return!1;try{e=new q(e=[1,3.14,-3.14,4294967296,4294967297]),n=e,r=(Y&&n instanceof Uint32Array||"[object Uint32Array]"===X(n))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?z:function(){throw new Error("not implemented")};var B,D=C,J="function"==typeof Float64Array,K="function"==typeof Float64Array?Float64Array:null,Q="function"==typeof Float64Array?Float64Array:void 0;B=function(){var r,e,n;if("function"!=typeof K)return!1;try{e=new K([1,3.14,-3.14,NaN]),n=e,r=(J&&n instanceof Float64Array||"[object Float64Array]"===X(n))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?Q:function(){throw new Error("not implemented")};var rr,er=B,nr="function"==typeof Uint8Array,tr="function"==typeof Uint8Array?Uint8Array:null,ir="function"==typeof Uint8Array?Uint8Array:void 0;rr=function(){var r,e,n;if("function"!=typeof tr)return!1;try{e=new tr(e=[1,3.14,-3.14,256,257]),n=e,r=(nr&&n instanceof Uint8Array||"[object Uint8Array]"===X(n))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?ir:function(){throw new Error("not implemented")};var ar,or=rr,ur="function"==typeof Uint16Array,fr="function"==typeof Uint16Array?Uint16Array:null,cr="function"==typeof Uint16Array?Uint16Array:void 0;ar=function(){var r,e,n;if("function"!=typeof fr)return!1;try{e=new fr(e=[1,3.14,-3.14,65536,65537]),n=e,r=(ur&&n instanceof Uint16Array||"[object Uint16Array]"===X(n))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?cr:function(){throw new Error("not implemented")};var sr,lr={uint16:ar,uint8:or};(sr=new lr.uint16(1))[0]=4660;var pr=52===new lr.uint8(sr.buffer)[0],yr=!0===pr?1:0,gr=new er(1),dr=new D(gr.buffer);function vr(r){return gr[0]=r,dr[yr]}var hr=!0===pr?1:0,wr=new er(1),br=new D(wr.buffer);function mr(r,e){return wr[0]=r,br[hr]=e>>>0,wr[0]}var Ar=Number.POSITIVE_INFINITY,_r=Number.NEGATIVE_INFINITY,Er=1023,Nr=.6931471803691238,Ur=1.9082149292705877e-10,Ir=.41421356237309503,Sr=-.2928932188134525,xr=1.862645149230957e-9,kr=5551115123125783e-32,Fr=9007199254740992,jr=.6666666666666666,Tr=Math.sqrt;function Or(r){return Math.abs(r)}var Vr=Math.floor,$r=Math.ceil;function Gr(r){return r<0?$r(r):Vr(r)}var Hr=1023,Wr=-1023,Cr=-1074;function Lr(r){return r===Ar||r===_r}var Pr,Rr,Mr=2147483648,Zr=2147483647;!0===pr?(Pr=1,Rr=0):(Pr=0,Rr=1);var Xr,Yr,qr={HIGH:Pr,LOW:Rr},zr=new er(1),Br=new D(zr.buffer),Dr=qr.HIGH,Jr=qr.LOW;function Kr(r,e,n,t){return zr[0]=r,e[t]=Br[Dr],e[t+n]=Br[Jr],e}function Qr(r){return Kr(r,[0,0],1,0)}H(Qr,"assign",Kr),!0===pr?(Xr=1,Yr=0):(Xr=0,Yr=1);var re={HIGH:Xr,LOW:Yr},ee=new er(1),ne=new D(ee.buffer),te=re.HIGH,ie=re.LOW;function ae(r,e){return ne[te]=r,ne[ie]=e,ee[0]}var oe=[0,0];function ue(r,e){var n,t;return Qr.assign(r,oe,1,0),n=oe[0],n&=Zr,t=vr(e),ae(n|=t&=Mr,oe[1])}var fe=22250738585072014e-324,ce=4503599627370496;function se(r,e,n,t){return W(r)||Lr(r)?(e[t]=r,e[t+n]=0,e):0!==r&&Or(r)<fe?(e[t]=r*ce,e[t+n]=-52,e):(e[t]=r,e[t+n]=0,e)}H((function(r){return se(r,[0,0],1,0)}),"assign",se);var le=2146435072,pe=2220446049250313e-31,ye=2148532223,ge=[0,0],de=[0,0];function ve(r,e){var n,t;return 0===e||0===r||W(r)||Lr(r)?r:(se(r,ge,1,0),r=ge[0],e+=ge[1],e+=function(r){var e=vr(r);return(e=(e&le)>>>20)-Er|0}(r),e<Cr?ue(0,r):e>Hr?r<0?_r:Ar:(e<=Wr?(e+=52,t=pe):t=1,Qr.assign(r,de,1,0),n=de[0],n&=ye,t*ae(n|=e+Er<<20,de[1])))}var he=.6931471803691238,we=1.9082149292705877e-10,be=1.4426950408889634,me=709.782712893384,Ae=-745.1332191019411,_e=1/(1<<28),Ee=-_e;function Ne(r){var e;return W(r)||r===Ar?r:r===_r?0:r>me?Ar:r<Ae?0:r>Ee&&r<_e?1+r:function(r,e,n){var t,i,a,o;return ve(1-(e-(t=r-e)*(a=t-(i=t*t)*(0===(o=i)?.16666666666666602:.16666666666666602+o*(o*(6613756321437934e-20+o*(4.1381367970572385e-8*o-16533902205465252e-22))-.0027777777777015593)))/(2-a)-r),n)}(r-(e=Gr(r<0?be*r-.5:be*r+.5))*he,e*we,e)}function Ue(r){return Vr(r)===r}function Ie(r){return Ue(r/2)}function Se(r){return Ie(r>0?r-1:r+1)}var xe=!0===pr?0:1,ke=new er(1),Fe=new D(ke.buffer);function je(r,e){return ke[0]=r,Fe[xe]=e>>>0,ke[0]}function Te(r){return 0|r}var Oe=1072693247,Ve=1e300,$e=1e-300,Ge=1048575,He=1048576,We=1072693248,Ce=536870912,Le=524288,Pe=20,Re=9007199254740992,Me=.9617966939259756,Ze=.9617967009544373,Xe=-7.028461650952758e-9,Ye=[1,1.5],qe=[0,.5849624872207642],ze=[0,1.350039202129749e-8],Be=1.4426950408889634,De=1.4426950216293335,Je=1.9259629911266175e-8,Ke=.6931471805599453,Qe=1048575,rn=1048576,en=1071644672,nn=20,tn=.6931471824645996,an=-1.904654299957768e-9,on=1072693247,un=1105199104,fn=1139802112,cn=1083179008,sn=1072693248,ln=1083231232,pn=3230714880,yn=31,gn=1e300,dn=1e-300,vn=8008566259537294e-32,hn=[0,0],wn=[0,0];function bn(r,e){var n,t,i,a,o,u,f,c,s,l,p,y,g,d;if(W(r)||W(e))return NaN;if(Qr.assign(e,hn,1,0),o=hn[0],0===hn[1]){if(0===e)return 1;if(1===e)return r;if(-1===e)return 1/r;if(.5===e)return Tr(r);if(-.5===e)return 1/Tr(r);if(2===e)return r*r;if(3===e)return r*r*r;if(4===e)return(r*=r)*r;if(Lr(e))return function(r,e){return-1===r?(r-r)/(r-r):1===r?1:Or(r)<1==(e===Ar)?0:Ar}(r,e)}if(Qr.assign(r,hn,1,0),a=hn[0],0===hn[1]){if(0===a)return function(r,e){return e===_r?Ar:e===Ar?0:e>0?Se(e)?r:0:Se(e)?ue(Ar,r):Ar}(r,e);if(1===r)return 1;if(-1===r&&Se(e))return-1;if(Lr(r))return r===_r?bn(-0,-e):e<0?0:Ar}if(r<0&&!1===Ue(e))return(r-r)/(r-r);if(i=Or(r),n=a&Zr|0,t=o&Zr|0,f=o>>>yn|0,u=(u=a>>>yn|0)&&Se(e)?-1:1,t>un){if(t>fn)return function(r,e){return(vr(r)&Zr)<=Oe?e<0?Ve*Ve:$e*$e:e>0?Ve*Ve:$e*$e}(r,e);if(n<on)return 1===f?u*gn*gn:u*dn*dn;if(n>sn)return 0===f?u*gn*gn:u*dn*dn;p=function(r,e){var n,t,i,a,o,u,f;return a=(i=e-1)*i*(0===(f=i)?.5:.5+f*(.25*f-.3333333333333333)),n=(u=i*Je-a*Be)-((t=je(t=(o=De*i)+u,0))-o),r[0]=t,r[1]=n,r}(wn,i)}else p=function(r,e,n){var t,i,a,o,u,f,c,s,l,p,y,g,d,v,h,w,b,m,A,_,E;return m=0,n<He&&(m-=53,n=vr(e*=Re)),m+=(n>>Pe)-Er|0,n=(A=n&Ge|0)|We|0,A<=235662?_=0:A<767610?_=1:(_=0,m+=1,n-=He),o=je(i=(w=(e=mr(e,n))-(c=Ye[_]))*(b=1/(e+c)),0),t=(n>>1|Ce)+Le,f=mr(0,t+=_<<18),h=(a=i*i)*a*(0===(E=a)?.5999999999999946:.5999999999999946+E*(.4285714285785502+E*(.33333332981837743+E*(.272728123808534+E*(.23066074577556175+.20697501780033842*E))))),f=je(f=3+(a=o*o)+(h+=(u=b*(w-o*f-o*(e-(f-c))))*(o+i)),0),l=je(l=(w=o*f)+(b=u*f+(h-(f-3-a))*i),0),p=Ze*l,d=(y=Xe*l+(b-(l-w))*Me+ze[_])-((g=je(g=p+y+(s=qe[_])+(v=m),0))-v-s-p),r[0]=g,r[1]=d,r}(wn,i,n);if(y=(l=(e-(c=je(e,0)))*p[0]+e*p[1])+(s=c*p[0]),Qr.assign(y,hn,1,0),g=Te(hn[0]),d=Te(hn[1]),g>=cn){if(0!=(g-cn|d))return u*gn*gn;if(l+vn>y-s)return u*gn*gn}else if((g&Zr)>=ln){if(0!=(g-pn|d))return u*dn*dn;if(l<=y-s)return u*dn*dn}return y=function(r,e,n){var t,i,a,o,u,f,c,s,l,p;return l=((s=r&Zr|0)>>nn)-Er|0,c=0,s>en&&(i=mr(0,((c=r+(rn>>l+1)>>>0)&~(Qe>>(l=((c&Zr)>>nn)-Er|0)))>>>0),c=(c&Qe|rn)>>nn-l>>>0,r<0&&(c=-c),e-=i),r=Te(r=vr(f=1-((f=(a=(i=je(i=n+e,0))*tn)+(o=(n-(i-e))*Ke+i*an))*(t=f-(i=f*f)*(0===(p=i)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(t-2)-((u=o-(f-a))+f*u)-f))),(r+=c<<nn>>>0)>>nn<=0?ve(f,c):mr(f,r)}(g,s,l),u*y}var mn=2.718281828459045,An=2220446049250313e-31;function _n(r){var e,n;return 0===r?1/0:((r<0?-r:r)<=1?(e=709811.662581658+r*(679979.8474157227+r*(293136.7857211597+r*(74887.54032914672+r*(12555.290582413863+r*(1443.4299244417066+r*(115.24194596137347+r*(6.309239205732627+r*(.22668404630224365+r*(.004826466289237662+4624429436045379e-20*r))))))))),n=0+r*(362880+r*(1026576+r*(1172700+r*(723680+r*(269325+r*(63273+r*(9450+r*(870+r*(45+1*r)))))))))):(e=4624429436045379e-20+(r=1/r)*(.004826466289237662+r*(.22668404630224365+r*(6.309239205732627+r*(115.24194596137347+r*(1443.4299244417066+r*(12555.290582413863+r*(74887.54032914672+r*(293136.7857211597+r*(679979.8474157227+709811.662581658*r))))))))),n=1+r*(45+r*(870+r*(9450+r*(63273+r*(269325+r*(723680+r*(1172700+r*(1026576+r*(362880+0*r)))))))))),e/n)}var En=10.900511;function Nn(r,e){var n,t,i,a,o,u,f;return W(r)||W(e)||r<0||e<0?NaN:1===e?1/r:1===r?1/e:(f=r+e)<An?(o=f/r,o/=e):f===r&&e<An?1/e:f===e&&r<An?1/r:(r<e&&(u=e,e=r,r=u),t=r+En-.5,i=e+En-.5,a=f+En-.5,o=_n(r)*(_n(e)/_n(f)),Or(e*(n=r-.5-e))<100*a&&r>100?o*=Ne(n*function(r){var e,n,t,i,a,o,u,f,c,s;if(r<-1||W(r))return NaN;if(-1===r)return _r;if(r===Ar)return r;if(0===r)return r;if(s=1,(t=r<0?-r:r)<Ir){if(t<xr)return t<kr?r:r-r*r*.5;r>Sr&&(s=0,i=r,n=1)}return 0!==s&&(t<Fr?(a=(s=((n=vr(c=1+r))>>20)-Er)>0?1-(c-r):r-(c-1),a/=c):(s=((n=vr(c=r))>>20)-Er,a=0),(n&=1048575)<434334?c=mr(c,1072693248|n):(s+=1,c=mr(c,1071644672|n),n=1048576-n>>2),i=c-1),e=.5*i*i,0===n?0===i?s*Nr+(a+=s*Ur):s*Nr-((f=e*(1-jr*i))-(s*Ur+a)-i):(f=(u=(o=i/(2+i))*o)*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+.14798198605116586*r)))))}(u),0===s?i-(e-o*(e+f)):s*Nr-(e-(o*(e+f)+(s*Ur+a))-i))}(-e/a)):o*=bn(t/a,n),o*=bn(a>1e10?t/a*(i/a):t*i/(a*a),e),o*=Tr(mn/i))}function Un(r,e,n){var t,i,a,o,u;i=Nn(e,n),a=1,o=1,u=1;do{o*=r/u,a+=t=Nn(e+u,n)/i*o,u+=1}while(Or(t/a)>=An);return a}function In(r,e,n){return W(r)||W(e)||W(n)||e<=0||n<=0?NaN:Un(r,e,n)}return H(In,"factory",(function(r,e){return W(r)||W(e)||r<=0||e<=0?(n=NaN,function(){return n}):function(n){return W(n)?NaN:Un(n,r,e)};var n})),In},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).mgf=e();
//# sourceMappingURL=browser.js.map
