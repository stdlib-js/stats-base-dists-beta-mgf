// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var n=function(){try{return r({},"x",{}),!0}catch(r){return!1}},t=Object.defineProperty,e=Object.prototype,u=e.toString,o=e.__defineGetter__,i=e.__defineSetter__,a=e.__lookupGetter__,f=e.__lookupSetter__;var c=t,v=function(r,n,t){var c,v,l,y;if("object"!=typeof r||null===r||"[object Array]"===u.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===u.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((v="value"in t)&&(a.call(r,n)||f.call(r,n)?(c=r.__proto__,r.__proto__=e,delete r[n],r[n]=t.value,r.__proto__=c):r[n]=t.value),l="get"in t,y="set"in t,v&&(l||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return l&&o&&o.call(r,n,t.get),y&&i&&i.call(r,n,t.set),r},l=n()?c:v;var y=function(r,n,t){l(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})};var p=function(r){return r!=r};var b=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var w=function(){return b&&"symbol"==typeof Symbol.toStringTag},A=Object.prototype.toString,_=A;var m=function(r){return _.call(r)},d=Object.prototype.hasOwnProperty;var s=function(r,n){return null!=r&&d.call(r,n)},h="function"==typeof Symbol?Symbol.toStringTag:"",N=s,U=h,j=A;var g=m,I=function(r){var n,t,e;if(null==r)return j.call(r);t=r[U],n=N(r,U);try{r[U]=void 0}catch(n){return j.call(r)}return e=j.call(r),n?r[U]=t:delete r[U],e},O=w()?I:g,S=O,E="function"==typeof Uint32Array;var F="function"==typeof Uint32Array?Uint32Array:null,H=function(r){return E&&r instanceof Uint32Array||"[object Uint32Array]"===S(r)},T=F;var G=function(){var r,n;if("function"!=typeof T)return!1;try{n=new T(n=[1,3.14,-3.14,4294967296,4294967297]),r=H(n)&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var P="function"==typeof Uint32Array?Uint32Array:void 0,L=function(){throw new Error("not implemented")},M=G()?P:L,V=O,W="function"==typeof Float64Array;var k="function"==typeof Float64Array?Float64Array:null,x=function(r){return W&&r instanceof Float64Array||"[object Float64Array]"===V(r)},Y=k;var q=function(){var r,n;if("function"!=typeof Y)return!1;try{n=new Y([1,3.14,-3.14,NaN]),r=x(n)&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r};var C="function"==typeof Float64Array?Float64Array:void 0,z=function(){throw new Error("not implemented")},B=q()?C:z,D=O,J="function"==typeof Uint8Array;var K="function"==typeof Uint8Array?Uint8Array:null,Q=function(r){return J&&r instanceof Uint8Array||"[object Uint8Array]"===D(r)},R=K;var X=function(){var r,n;if("function"!=typeof R)return!1;try{n=new R(n=[1,3.14,-3.14,256,257]),r=Q(n)&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var Z="function"==typeof Uint8Array?Uint8Array:void 0,$=function(){throw new Error("not implemented")},rr=X()?Z:$,nr=O,tr="function"==typeof Uint16Array;var er="function"==typeof Uint16Array?Uint16Array:null,ur=function(r){return tr&&r instanceof Uint16Array||"[object Uint16Array]"===nr(r)},or=er;var ir=function(){var r,n;if("function"!=typeof or)return!1;try{n=new or(n=[1,3.14,-3.14,65536,65537]),r=ur(n)&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var ar,fr="function"==typeof Uint16Array?Uint16Array:void 0,cr=function(){throw new Error("not implemented")},vr={uint16:ir()?fr:cr,uint8:rr};(ar=new vr.uint16(1))[0]=4660;var lr=52===new vr.uint8(ar.buffer)[0],yr=M,pr=!0===lr?1:0,br=new B(1),wr=new yr(br.buffer);var Ar=function(r){return br[0]=r,wr[pr]},_r=M,mr=!0===lr?1:0,dr=new B(1),sr=new _r(dr.buffer);var hr=function(r,n){return dr[0]=r,sr[mr]=n>>>0,dr[0]},Nr=hr,Ur=Number.POSITIVE_INFINITY,jr=Number.NEGATIVE_INFINITY;var gr=p,Ir=Ar,Or=Nr,Sr=Ur,Er=jr,Fr=function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+.14798198605116586*r)))))},Hr=.6931471803691238,Tr=1.9082149292705877e-10;var Gr=function(r){var n,t,e,u,o,i,a,f,c,v;if(r<-1||gr(r))return NaN;if(-1===r)return Er;if(r===Sr)return r;if(0===r)return r;if(v=1,(e=r<0?-r:r)<.41421356237309503){if(e<1.862645149230957e-9)return e<5551115123125783e-32?r:r-r*r*.5;r>-.2928932188134525&&(v=0,u=r,t=1)}return 0!==v&&(e<9007199254740992?(o=(v=((t=Ir(c=1+r))>>20)-1023)>0?1-(c-r):r-(c-1),o/=c):(v=((t=Ir(c=r))>>20)-1023,o=0),(t&=1048575)<434334?c=Or(c,1072693248|t):(v+=1,c=Or(c,1071644672|t),t=1048576-t>>2),u=c-1),n=.5*u*u,0===t?0===u?v*Hr+(o+=v*Tr):v*Hr-((f=n*(1-.6666666666666666*u))-(v*Tr+o)-u):(f=(a=(i=u/(2+u))*i)*Fr(a),0===v?u-(n-i*(n+f)):v*Hr-(n-(i*(n+f)+(v*Tr+o))-u))},Pr=Math.sqrt;var Lr=function(r){return Math.abs(r)},Mr=Math.floor,Vr=Math.ceil,Wr=Mr,kr=Vr;var xr=function(r){return r<0?kr(r):Wr(r)},Yr=Ur,qr=jr;var Cr,zr,Br=function(r){return r===Yr||r===qr};!0===lr?(Cr=1,zr=0):(Cr=0,zr=1);var Dr=M,Jr={HIGH:Cr,LOW:zr},Kr=new B(1),Qr=new Dr(Kr.buffer),Rr=Jr.HIGH,Xr=Jr.LOW;var Zr=function(r,n){return Kr[0]=n,r[0]=Qr[Rr],r[1]=Qr[Xr],r};var $r,rn,nn=function(r,n){return 1===arguments.length?Zr([0,0],r):Zr(r,n)};!0===lr?($r=1,rn=0):($r=0,rn=1);var tn=M,en={HIGH:$r,LOW:rn},un=new B(1),on=new tn(un.buffer),an=en.HIGH,fn=en.LOW;var cn=function(r,n){return on[an]=r,on[fn]=n,un[0]},vn=nn,ln=Ar,yn=cn,pn=[0,0];var bn=function(r,n){var t,e;return vn(pn,r),t=pn[0],t&=2147483647,e=ln(n),yn(t|=e&=2147483648,pn[1])},wn=Br,An=p,_n=Lr;var mn=function(r,n){return An(n)||wn(n)?(r[0]=n,r[1]=0,r):0!==n&&_n(n)<22250738585072014e-324?(r[0]=4503599627370496*n,r[1]=-52,r):(r[0]=n,r[1]=0,r)};var dn=Ar;var sn=function(r){var n=dn(r);return(n=(2146435072&n)>>>20)-1023|0},hn=Ur,Nn=jr,Un=p,jn=Br,gn=bn,In=function(r,n){return 1===arguments.length?mn([0,0],r):mn(r,n)},On=sn,Sn=nn,En=cn,Fn=[0,0],Hn=[0,0];var Tn=function(r,n){var t,e;return 0===n||0===r||Un(r)||jn(r)?r:(In(Fn,r),n+=Fn[1],(n+=On(r=Fn[0]))<-1074?gn(0,r):n>1023?r<0?Nn:hn:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,Sn(Hn,r),t=Hn[0],t&=2148532223,e*En(t|=n+1023<<20,Hn[1])))},Gn=Tn;var Pn=Gn,Ln=function(r){return 0===r?.16666666666666602:.16666666666666602+r*(r*(6613756321437934e-20+r*(4.1381367970572385e-8*r-16533902205465252e-22))-.0027777777777015593)};var Mn=p,Vn=xr,Wn=jr,kn=Ur,xn=function(r,n,t){var e,u,o;return o=(e=r-n)-(u=e*e)*Ln(u),Pn(1-(n-e*o/(2-o)-r),t)};var Yn=function(r){var n;return Mn(r)||r===kn?r:r===Wn?0:r>709.782712893384?kn:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<3.725290298461914e-9?1+r:(n=Vn(r<0?1.4426950408889634*r-.5:1.4426950408889634*r+.5),xn(r-.6931471803691238*n,1.9082149292705877e-10*n,n))},qn=Mr;var Cn=function(r){return qn(r)===r},zn=Cn;var Bn=function(r){return zn(r/2)};var Dn=function(r){return Bn(r>0?r-1:r+1)},Jn=M,Kn=!0===lr?0:1,Qn=new B(1),Rn=new Jn(Qn.buffer);var Xn=function(r,n){return Qn[0]=r,Rn[Kn]=n>>>0,Qn[0]};var Zn=function(r){return 0|r},$n=Dn,rt=bn,nt=jr,tt=Ur;var et=Ar;var ut=Lr,ot=Ur;var it=Ar,at=Xn,ft=Nr,ct=function(r){return 0===r?.5999999999999946:.5999999999999946+r*(.4285714285785502+r*(.33333332981837743+r*(.272728123808534+r*(.23066074577556175+.20697501780033842*r))))},vt=[1,1.5],lt=[0,.5849624872207642],yt=[0,1.350039202129749e-8];var pt=Xn,bt=function(r){return 0===r?.5:.5+r*(.25*r-.3333333333333333)};var wt=Ar,At=Nr,_t=Xn,mt=Zn,dt=Gn,st=function(r){return 0===r?.16666666666666602:.16666666666666602+r*(r*(6613756321437934e-20+r*(4.1381367970572385e-8*r-16533902205465252e-22))-.0027777777777015593)};var ht=p,Nt=Dn,Ut=Br,jt=Cn,gt=Pr,It=Lr,Ot=nn,St=Xn,Et=Zn,Ft=jr,Ht=Ur,Tt=function(r,n){return n===nt?tt:n===tt?0:n>0?$n(n)?r:0:$n(n)?rt(tt,r):tt},Gt=function(r,n){return(2147483647&et(r))<=1072693247?n<0?1/0:0:n>0?1/0:0},Pt=function(r,n){return-1===r?(r-r)/(r-r):1===r?1:ut(r)<1==(n===ot)?0:ot},Lt=function(r,n,t){var e,u,o,i,a,f,c,v,l,y,p,b,w,A,_,m,d,s,h,N;return s=0,t<1048576&&(s-=53,t=it(n*=9007199254740992)),s+=(t>>20)-1023|0,t=1072693248|(h=1048575&t|0),h<=235662?N=0:h<767610?N=1:(N=0,s+=1,t-=1048576),e=524288+(t>>1|536870912),a=(d=1/((n=ft(n,t))+(c=vt[N])))*((m=n-c)-(i=at(u=m*d,0))*(f=ft(0,e+=N<<18))-i*(n-(f-c))),_=(o=u*u)*o*ct(o),f=at(f=3+(o=i*i)+(_+=a*(i+u)),0),w=(p=-7.028461650952758e-9*(l=at(l=(m=i*f)+(d=a*f+(_-(f-3-o))*u),0))+.9617966939259756*(d-(l-m))+yt[N])-((b=at(b=(y=.9617967009544373*l)+p+(v=lt[N])+(A=s),0))-A-v-y),r[0]=b,r[1]=w,r},Mt=function(r,n){var t,e,u,o,i;return t=(i=1.9259629911266175e-8*(u=n-1)-1.4426950408889634*(u*u*bt(u)))-((e=pt(e=(o=1.4426950216293335*u)+i,0))-o),r[0]=e,r[1]=t,r},Vt=function(r,n,t){var e,u,o,i,a,f,c,v,l,y;return y=((l=2147483647&r|0)>>20)-1023|0,v=0,l>1071644672&&(e=((v=r+(1048576>>y+1)>>>0)&~(1048575>>(y=((2147483647&v)>>20)-1023|0)))>>>0,v=(1048575&v|1048576)>>20-y>>>0,r<0&&(v=-v),n-=o=At(0,e)),f=(a=.6931471805599453*(t-((o=_t(o=t+n,0))-n))+-1.904654299957768e-9*o)-((c=(i=.6931471824645996*o)+a)-i),u=c-(o=c*c)*st(o),r=wt(c=1-(c*u/(u-2)-(f+c*f)-c)),r=mt(r),c=(r+=v<<20>>>0)>>20<=0?dt(c,v):At(c,r)},Wt=1e300,kt=1e-300,xt=[0,0],Yt=[0,0];var qt=function r(n,t){var e,u,o,i,a,f,c,v,l,y,p,b,w,A;if(ht(n)||ht(t))return NaN;if(Ot(xt,t),a=xt[0],0===xt[1]){if(0===t)return 1;if(1===t)return n;if(-1===t)return 1/n;if(.5===t)return gt(n);if(-.5===t)return 1/gt(n);if(2===t)return n*n;if(3===t)return n*n*n;if(4===t)return(n*=n)*n;if(Ut(t))return Pt(n,t)}if(Ot(xt,n),i=xt[0],0===xt[1]){if(0===i)return Tt(n,t);if(1===n)return 1;if(-1===n&&Nt(t))return-1;if(Ut(n))return n===Ft?r(-0,-t):t<0?0:Ht}if(n<0&&!1===jt(t))return(n-n)/(n-n);if(o=It(n),e=2147483647&i|0,u=2147483647&a|0,c=a>>>31|0,f=(f=i>>>31|0)&&Nt(t)?-1:1,u>1105199104){if(u>1139802112)return Gt(n,t);if(e<1072693247)return 1===c?f*Wt*Wt:f*kt*kt;if(e>1072693248)return 0===c?f*Wt*Wt:f*kt*kt;p=Mt(Yt,o)}else p=Lt(Yt,o,e);if(y=(t-(v=St(t,0)))*p[0]+t*p[1],l=v*p[0],Ot(xt,b=y+l),w=Et(xt[0]),A=Et(xt[1]),w>=1083179008){if(0!=(w-1083179008|A))return f*Wt*Wt;if(y+8008566259537294e-32>b-l)return f*Wt*Wt}else if((2147483647&w)>=1083231232){if(0!=(w-3230714880|A))return f*kt*kt;if(y<=b-l)return f*kt*kt}return f*(b=Vt(w,l,y))},Ct=2220446049250313e-31;var zt=p,Bt=Gr,Dt=Pr,Jt=Lr,Kt=Yn,Qt=qt,Rt=Ct,Xt=function(r){var n,t;return 0===r?1/0:((r<0?-r:r)<=1?(n=709811.662581658+r*(679979.8474157227+r*(293136.7857211597+r*(74887.54032914672+r*(12555.290582413863+r*(1443.4299244417066+r*(115.24194596137347+r*(6.309239205732627+r*(.22668404630224365+r*(.004826466289237662+4624429436045379e-20*r))))))))),t=0+r*(362880+r*(1026576+r*(1172700+r*(723680+r*(269325+r*(63273+r*(9450+r*(870+r*(45+1*r)))))))))):(n=4624429436045379e-20+(r=1/r)*(.004826466289237662+r*(.22668404630224365+r*(6.309239205732627+r*(115.24194596137347+r*(1443.4299244417066+r*(12555.290582413863+r*(74887.54032914672+r*(293136.7857211597+r*(679979.8474157227+709811.662581658*r))))))))),t=1+r*(45+r*(870+r*(9450+r*(63273+r*(269325+r*(723680+r*(1172700+r*(1026576+r*(362880+0*r)))))))))),n/t)},Zt=10.900511;var $t=function(r,n){var t,e,u,o,i,a,f;return zt(r)||zt(n)||r<0||n<0?NaN:1===n?1/r:1===r?1/n:(f=r+n)<Rt?(i=f/r,i/=n):f===r&&n<Rt?1/n:f===n&&r<Rt?1/r:(r<n&&(a=n,n=r,r=a),e=r+Zt-.5,u=n+Zt-.5,o=f+Zt-.5,i=Xt(r)*(Xt(n)/Xt(f)),Jt(n*(t=r-.5-n))<100*o&&r>100?i*=Kt(t*Bt(-n/o)):i*=Qt(e/o,t),i*=Qt(o>1e10?e/o*(u/o):e*u/(o*o),n),i*=Dt(2.718281828459045/u))},re=Lr;var ne=function(r,n,t){var e,u,o,i,a;u=$t(n,t),o=1,i=1,a=1;do{i*=r/a,o+=e=$t(n+a,t)/u*i,a+=1}while(re(e/o)>=2220446049250313e-31);return o},te=p,ee=ne;var ue=function(r,n,t){return te(r)||te(n)||te(t)||n<=0||t<=0?NaN:ee(r,n,t)};var oe=function(r){return function(){return r}},ie=p,ae=ne;var fe=function(r,n){return ie(r)||ie(n)||r<=0||n<=0?oe(NaN):function(t){if(ie(t))return NaN;return ae(t,r,n)}},ce=ue,ve=fe;y(ce,"factory",ve);var le=ce;export{le as default,ve as factory};
//# sourceMappingURL=mod.js.map
