// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var n,t=Object.defineProperty,e=Object.prototype,u=e.toString,o=e.__defineGetter__,i=e.__defineSetter__,f=e.__lookupGetter__,a=e.__lookupSetter__;n=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,n,t){var c,l,y,v;if("object"!=typeof r||null===r||"[object Array]"===u.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===u.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((l="value"in t)&&(f.call(r,n)||a.call(r,n)?(c=r.__proto__,r.__proto__=e,delete r[n],r[n]=t.value,r.__proto__=c):r[n]=t.value),y="get"in t,v="set"in t,l&&(y||v))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&o&&o.call(r,n,t.get),v&&i&&i.call(r,n,t.set),r};var c=n;function l(r){return r!=r}var y="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var v=Object.prototype.toString;var p=Object.prototype.hasOwnProperty;var b,w="function"==typeof Symbol?Symbol.toStringTag:"";b=y&&"symbol"==typeof Symbol.toStringTag?function(r){var n,t,e,u,o;if(null==r)return v.call(r);t=r[w],o=w,n=null!=(u=r)&&p.call(u,o);try{r[w]=void 0}catch(n){return v.call(r)}return e=v.call(r),n?r[w]=t:delete r[w],e}:function(r){return v.call(r)};var A=b,_="function"==typeof Uint32Array;var m="function"==typeof Uint32Array?Uint32Array:null;var d,s="function"==typeof Uint32Array?Uint32Array:void 0;d=function(){var r,n,t;if("function"!=typeof m)return!1;try{n=new m(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(_&&t instanceof Uint32Array||"[object Uint32Array]"===A(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?s:function(){throw new Error("not implemented")};var h=d,N="function"==typeof Float64Array;var U="function"==typeof Float64Array?Float64Array:null;var j,g="function"==typeof Float64Array?Float64Array:void 0;j=function(){var r,n,t;if("function"!=typeof U)return!1;try{n=new U([1,3.14,-3.14,NaN]),t=n,r=(N&&t instanceof Float64Array||"[object Float64Array]"===A(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?g:function(){throw new Error("not implemented")};var I=j,O="function"==typeof Uint8Array;var S="function"==typeof Uint8Array?Uint8Array:null;var E,F="function"==typeof Uint8Array?Uint8Array:void 0;E=function(){var r,n,t;if("function"!=typeof S)return!1;try{n=new S(n=[1,3.14,-3.14,256,257]),t=n,r=(O&&t instanceof Uint8Array||"[object Uint8Array]"===A(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?F:function(){throw new Error("not implemented")};var H=E,T="function"==typeof Uint16Array;var G="function"==typeof Uint16Array?Uint16Array:null;var P,L="function"==typeof Uint16Array?Uint16Array:void 0;P=function(){var r,n,t;if("function"!=typeof G)return!1;try{n=new G(n=[1,3.14,-3.14,65536,65537]),t=n,r=(T&&t instanceof Uint16Array||"[object Uint16Array]"===A(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?L:function(){throw new Error("not implemented")};var M,V={uint16:P,uint8:H};(M=new V.uint16(1))[0]=4660;var W=52===new V.uint8(M.buffer)[0],k=!0===W?1:0,x=new I(1),Y=new h(x.buffer);function q(r){return x[0]=r,Y[k]}var C=!0===W?1:0,z=new I(1),B=new h(z.buffer);function D(r,n){return z[0]=r,B[C]=n>>>0,z[0]}var J=Number.POSITIVE_INFINITY,K=Number.NEGATIVE_INFINITY;var Q=.6931471803691238,R=1.9082149292705877e-10;var X=Math.sqrt;function Z(r){return Math.abs(r)}var $=Math.floor,rr=Math.ceil;function nr(r){return r<0?rr(r):$(r)}var tr,er;function ur(r){return r===J||r===K}!0===W?(tr=1,er=0):(tr=0,er=1);var or,ir,fr={HIGH:tr,LOW:er},ar=new I(1),cr=new h(ar.buffer),lr=fr.HIGH,yr=fr.LOW;function vr(r,n){return ar[0]=n,r[0]=cr[lr],r[1]=cr[yr],r}function pr(r,n){return 1===arguments.length?vr([0,0],r):vr(r,n)}!0===W?(or=1,ir=0):(or=0,ir=1);var br={HIGH:or,LOW:ir},wr=new I(1),Ar=new h(wr.buffer),_r=br.HIGH,mr=br.LOW;function dr(r,n){return Ar[_r]=r,Ar[mr]=n,wr[0]}var sr=[0,0];function hr(r,n){var t,e;return pr(sr,r),t=sr[0],t&=2147483647,e=q(n),dr(t|=e&=2147483648,sr[1])}function Nr(r,n){return l(n)||ur(n)?(r[0]=n,r[1]=0,r):0!==n&&Z(n)<22250738585072014e-324?(r[0]=4503599627370496*n,r[1]=-52,r):(r[0]=n,r[1]=0,r)}var Ur=[0,0],jr=[0,0];function gr(r,n){var t,e;return 0===n||0===r||l(r)||ur(r)?r:(function(r,n){1===arguments.length?Nr([0,0],r):Nr(r,n)}(Ur,r),n+=Ur[1],n+=function(r){var n=q(r);return(n=(2146435072&n)>>>20)-1023|0}(r=Ur[0]),n<-1074?hr(0,r):n>1023?r<0?K:J:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,pr(jr,r),t=jr[0],t&=2148532223,e*dr(t|=n+1023<<20,jr[1])))}function Ir(r){var n;return l(r)||r===J?r:r===K?0:r>709.782712893384?J:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<3.725290298461914e-9?1+r:function(r,n,t){var e,u,o,i;return gr(1-(n-(e=r-n)*(o=e-(u=e*e)*(0===(i=u)?.16666666666666602:.16666666666666602+i*(i*(6613756321437934e-20+i*(4.1381367970572385e-8*i-16533902205465252e-22))-.0027777777777015593)))/(2-o)-r),t)}(r-.6931471803691238*(n=nr(r<0?1.4426950408889634*r-.5:1.4426950408889634*r+.5)),1.9082149292705877e-10*n,n)}function Or(r){return $(r)===r}function Sr(r){return Or(r/2)}function Er(r){return Sr(r>0?r-1:r+1)}var Fr=!0===W?0:1,Hr=new I(1),Tr=new h(Hr.buffer);function Gr(r,n){return Hr[0]=r,Tr[Fr]=n>>>0,Hr[0]}function Pr(r){return 0|r}var Lr=[1,1.5],Mr=[0,.5849624872207642],Vr=[0,1.350039202129749e-8];var Wr=1e300,kr=1e-300,xr=[0,0],Yr=[0,0];function qr(r,n){var t,e,u,o,i,f,a,c,y,v,p,b,w,A;if(l(r)||l(n))return NaN;if(pr(xr,n),i=xr[0],0===xr[1]){if(0===n)return 1;if(1===n)return r;if(-1===n)return 1/r;if(.5===n)return X(r);if(-.5===n)return 1/X(r);if(2===n)return r*r;if(3===n)return r*r*r;if(4===n)return(r*=r)*r;if(ur(n))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:Z(r)<1==(n===J)?0:J}(r,n)}if(pr(xr,r),o=xr[0],0===xr[1]){if(0===o)return function(r,n){return n===K?J:n===J?0:n>0?Er(n)?r:0:Er(n)?hr(J,r):J}(r,n);if(1===r)return 1;if(-1===r&&Er(n))return-1;if(ur(r))return r===K?qr(-0,-n):n<0?0:J}if(r<0&&!1===Or(n))return(r-r)/(r-r);if(u=Z(r),t=2147483647&o|0,e=2147483647&i|0,a=i>>>31|0,f=(f=o>>>31|0)&&Er(n)?-1:1,e>1105199104){if(e>1139802112)return function(r,n){return(2147483647&q(r))<=1072693247?n<0?1/0:0:n>0?1/0:0}(r,n);if(t<1072693247)return 1===a?f*Wr*Wr:f*kr*kr;if(t>1072693248)return 0===a?f*Wr*Wr:f*kr*kr;p=function(r,n){var t,e,u,o,i,f;return t=(i=1.9259629911266175e-8*(u=n-1)-u*u*(0===(f=u)?.5:.5+f*(.25*f-.3333333333333333))*1.4426950408889634)-((e=Gr(e=(o=1.4426950216293335*u)+i,0))-o),r[0]=e,r[1]=t,r}(Yr,u)}else p=function(r,n,t){var e,u,o,i,f,a,c,l,y,v,p,b,w,A,_,m,d,s,h,N,U;return s=0,t<1048576&&(s-=53,t=q(n*=9007199254740992)),s+=(t>>20)-1023|0,t=1072693248|(h=1048575&t|0),h<=235662?N=0:h<767610?N=1:(N=0,s+=1,t-=1048576),i=Gr(u=(m=(n=D(n,t))-(c=Lr[N]))*(d=1/(n+c)),0),e=524288+(t>>1|536870912),a=D(0,e+=N<<18),_=(o=u*u)*o*(0===(U=o)?.5999999999999946:.5999999999999946+U*(.4285714285785502+U*(.33333332981837743+U*(.272728123808534+U*(.23066074577556175+.20697501780033842*U))))),a=Gr(a=3+(o=i*i)+(_+=(f=d*(m-i*a-i*(n-(a-c))))*(i+u)),0),w=(p=-7.028461650952758e-9*(y=Gr(y=(m=i*a)+(d=f*a+(_-(a-3-o))*u),0))+.9617966939259756*(d-(y-m))+Vr[N])-((b=Gr(b=(v=.9617967009544373*y)+p+(l=Mr[N])+(A=s),0))-A-l-v),r[0]=b,r[1]=w,r}(Yr,u,t);if(v=(n-(c=Gr(n,0)))*p[0]+n*p[1],y=c*p[0],pr(xr,b=v+y),w=Pr(xr[0]),A=Pr(xr[1]),w>=1083179008){if(0!=(w-1083179008|A))return f*Wr*Wr;if(v+8008566259537294e-32>b-y)return f*Wr*Wr}else if((2147483647&w)>=1083231232){if(0!=(w-3230714880|A))return f*kr*kr;if(v<=b-y)return f*kr*kr}return b=function(r,n,t){var e,u,o,i,f,a,c,l,y,v,p;return v=((y=2147483647&r|0)>>20)-1023|0,l=0,y>1071644672&&(e=((l=r+(1048576>>v+1)>>>0)&~(1048575>>(v=((2147483647&l)>>20)-1023|0)))>>>0,l=(1048575&l|1048576)>>20-v>>>0,r<0&&(l=-l),n-=o=D(0,e)),r=Pr(r=q(c=1-((c=(i=.6931471824645996*(o=Gr(o=t+n,0)))+(f=.6931471805599453*(t-(o-n))+-1.904654299957768e-9*o))*(u=c-(o=c*c)*(0===(p=o)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(u-2)-((a=f-(c-i))+c*a)-c))),(r+=l<<20>>>0)>>20<=0?gr(c,l):D(c,r)}(w,y,v),f*b}function Cr(r){var n,t;return 0===r?1/0:((r<0?-r:r)<=1?(n=709811.662581658+r*(679979.8474157227+r*(293136.7857211597+r*(74887.54032914672+r*(12555.290582413863+r*(1443.4299244417066+r*(115.24194596137347+r*(6.309239205732627+r*(.22668404630224365+r*(.004826466289237662+4624429436045379e-20*r))))))))),t=0+r*(362880+r*(1026576+r*(1172700+r*(723680+r*(269325+r*(63273+r*(9450+r*(870+r*(45+1*r)))))))))):(n=4624429436045379e-20+(r=1/r)*(.004826466289237662+r*(.22668404630224365+r*(6.309239205732627+r*(115.24194596137347+r*(1443.4299244417066+r*(12555.290582413863+r*(74887.54032914672+r*(293136.7857211597+r*(679979.8474157227+709811.662581658*r))))))))),t=1+r*(45+r*(870+r*(9450+r*(63273+r*(269325+r*(723680+r*(1172700+r*(1026576+r*(362880+0*r)))))))))),n/t)}var zr=10.900511;function Br(r,n){var t,e,u,o,i,f,a;return l(r)||l(n)||r<0||n<0?NaN:1===n?1/r:1===r?1/n:(a=r+n)<2220446049250313e-31?(i=a/r,i/=n):a===r&&n<2220446049250313e-31?1/n:a===n&&r<2220446049250313e-31?1/r:(r<n&&(f=n,n=r,r=f),e=r+zr-.5,u=n+zr-.5,o=a+zr-.5,i=Cr(r)*(Cr(n)/Cr(a)),Z(n*(t=r-.5-n))<100*o&&r>100?i*=Ir(t*function(r){var n,t,e,u,o,i,f,a,c,y;if(r<-1||l(r))return NaN;if(-1===r)return K;if(r===J)return r;if(0===r)return r;if(y=1,(e=r<0?-r:r)<.41421356237309503){if(e<1.862645149230957e-9)return e<5551115123125783e-32?r:r-r*r*.5;r>-.2928932188134525&&(y=0,u=r,t=1)}return 0!==y&&(e<9007199254740992?(o=(y=((t=q(c=1+r))>>20)-1023)>0?1-(c-r):r-(c-1),o/=c):(y=((t=q(c=r))>>20)-1023,o=0),(t&=1048575)<434334?c=D(c,1072693248|t):(y+=1,c=D(c,1071644672|t),t=1048576-t>>2),u=c-1),n=.5*u*u,0===t?0===u?y*Q+(o+=y*R):y*Q-((a=n*(1-.6666666666666666*u))-(y*R+o)-u):(a=(f=(i=u/(2+u))*i)*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+.14798198605116586*r)))))}(f),0===y?u-(n-i*(n+a)):y*Q-(n-(i*(n+a)+(y*R+o))-u))}(-n/o)):i*=qr(e/o,t),i*=qr(o>1e10?e/o*(u/o):e*u/(o*o),n),i*=X(2.718281828459045/u))}function Dr(r,n,t){var e,u,o,i,f;u=Br(n,t),o=1,i=1,f=1;do{i*=r/f,o+=e=Br(n+f,t)/u*i,f+=1}while(Z(e/o)>=2220446049250313e-31);return o}function Jr(r,n,t){return l(r)||l(n)||l(t)||n<=0||t<=0?NaN:Dr(r,n,t)}function Kr(r,n){return l(r)||l(n)||r<=0||n<=0?(t=NaN,function(){return t}):function(t){if(l(t))return NaN;return Dr(t,r,n)};var t}c(Jr,"factory",{configurable:!1,enumerable:!1,writable:!1,value:Kr});export{Jr as default,Kr as factory};
//# sourceMappingURL=mod.js.map
