var Ht=Object.defineProperty;var kt=Object.getOwnPropertySymbols;var Wt=Object.prototype.hasOwnProperty,Gt=Object.prototype.propertyIsEnumerable;var yt=(e,t,s)=>t in e?Ht(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,Ct=(e,t)=>{for(var s in t||(t={}))Wt.call(t,s)&&yt(e,s,t[s]);if(kt)for(var s of kt(t))Gt.call(t,s)&&yt(e,s,t[s]);return e};import{S as be,i as we,s as ke,e as h,a as Be,b as u,c as U,d as B,t as R,f as v,g as r,l as A,h as Xe,n as ee,j as Nt,k as Zt,w as oe,m as He,o as j,p as Bt,q as M,r as Xt,u as ve,v as Z,x as Lt,y as qe,z as St,A as he,B as Pt,C as zt,D as ge,E as At,F as G,G as pe,H as de,I as me}from"./vendor.ad5ec42f.js";const Vt=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const l of n)if(l.type==="childList")for(const o of l.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function s(n){const l={};return n.integrity&&(l.integrity=n.integrity),n.referrerpolicy&&(l.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?l.credentials="include":n.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function a(n){if(n.ep)return;n.ep=!0;const l=s(n);fetch(n.href,l)}};Vt();function Et(e){let t,s;return{c(){t=h("img"),Be(t.src,s=e[0])||u(t,"src",s),u(t,"alt","your selection to be transformed"),u(t,"class","svelte-17znh29")},m(a,n){U(a,t,n)},p(a,n){n&1&&!Be(t.src,s=a[0])&&u(t,"src",s)},d(a){a&&B(t)}}}function Jt(e){let t,s,a,n,l,o,i,g,p,m=e[0]&&Et(e);return{c(){t=h("section"),s=h("label"),a=R(e[1]),n=h("br"),l=v(),o=h("input"),i=v(),m&&m.c(),u(o,"type","file"),u(o,"accept",e[2]),u(t,"class","svelte-17znh29")},m(d,f){U(d,t,f),r(t,s),r(s,a),r(s,n),r(s,l),r(s,o),r(t,i),m&&m.m(t,null),g||(p=A(o,"input",e[3]),g=!0)},p(d,[f]){f&2&&Xe(a,d[1]),f&4&&u(o,"accept",d[2]),d[0]?m?m.p(d,f):(m=Et(d),m.c(),m.m(t,null)):m&&(m.d(1),m=null)},i:ee,o:ee,d(d){d&&B(t),m&&m.d(),g=!1,p()}}}function Kt(e,t,s){const a=Nt();let{label:n="Choose"}=t,{accept:l="image/*"}=t,{url:o}=t,i;const g=p=>{i=p.target.files[0],s(0,o=URL.createObjectURL(i)),a("input",{file:i,url:o})};return e.$$set=p=>{"label"in p&&s(1,n=p.label),"accept"in p&&s(2,l=p.accept),"url"in p&&s(0,o=p.url)},[o,n,l,g]}class It extends be{constructor(t){super();we(this,t,Kt,Jt,ke,{label:1,accept:2,url:0})}}const V=oe([]),_e=oe(0),Ke=oe("src/assets/base-cmyk-spirals.svg");Ke.subscribe(e=>{fetch(e).then(t=>t.text()).then(t=>{const n=new DOMParser().parseFromString(t,"image/svg+xml").getElementsByTagName("path");if(n.length>300)throw new Error("That's a lot of paths. This app would melt. Try again with 300 or fewer. \u{1F605}");const l=Array.from(n).map(o=>({d:o.getAttribute("d"),stroke:o.getAttribute("stroke")||"#000000",x:0,y:0}));V.set(l)}).catch(t=>{window.alert(t)})});const Te=oe(720),Ue=oe(720),Ye=oe(1),Qe=oe("src/assets/fo-scan.jpg"),Qt=Zt([Qe,Te,Ue],([e,t,s],a)=>{const n=document.createElement("img");n.addEventListener("load",()=>{const l=document.createElement("canvas"),o=l.getContext("2d");l.width=t,l.height=s;const i=n.naturalWidth,g=n.naturalHeight,p=i/g,m=t/s;let d,f;p>m?(d=s,f=s*p):(f=t,d=t/p);const L=(t-f)*.5,k=(s-d)*.5;o.drawImage(n,L,k,f,d),a(l)}),n.src=e});function Dt(e){let t,s;return{c(){t=He("path"),u(t,"d","M 0 -20 L 0 20 M -20 0 L 20 0"),u(t,"stroke","white"),u(t,"opacity","0.75"),u(t,"fill","none"),u(t,"stroke-width","1.5"),u(t,"transform",s=`
      translate(
        `+e[2][e[3]].x*e[4]+" "+e[2][e[3]].y*e[4]+`
        )
      `)},m(a,n){U(a,t,n)},p(a,n){n&28&&s!==(s=`
      translate(
        `+a[2][a[3]].x*a[4]+" "+a[2][a[3]].y*a[4]+`
        )
      `)&&u(t,"transform",s)},d(a){a&&B(t)}}}function $t(e){let t,s,a,n=e[2][e[3]]&&Dt(e);return{c(){t=He("svg"),n&&n.c(),u(t,"width",e[0]),u(t,"height",e[1]),u(t,"class","svelte-1sf1opq")},m(l,o){U(l,t,o),n&&n.m(t,null),s||(a=A(t,"pointerdown",e[5]),s=!0)},p(l,[o]){l[2][l[3]]?n?n.p(l,o):(n=Dt(l),n.c(),n.m(t,null)):n&&(n.d(1),n=null),o&1&&u(t,"width",l[0]),o&2&&u(t,"height",l[1])},i:ee,o:ee,d(l){l&&B(t),n&&n.d(),s=!1,a()}}}function xt(e,t,s){let a,n,l;j(e,V,_=>s(2,a=_)),j(e,_e,_=>s(3,n=_)),j(e,Ye,_=>s(4,l=_));let{width:o=640}=t,{height:i=480}=t,g,p,m,d;function f(_){if(_.button!==0)return;g=_.clientX,p=_.clientY;const S=a[n];m=S.x,d=S.y,window.addEventListener("mousemove",L),window.addEventListener("mouseup",k)}function L(_){const S=1/l,P=(_.clientX-g)*S,y=(_.clientY-p)*S,C=a[n];C.x=Math.round(m+P),C.y=Math.round(d+y),V.set(a)}function k(){window.removeEventListener("mousemove",L),window.removeEventListener("mouseup",k),g=void 0,p=void 0}return e.$$set=_=>{"width"in _&&s(0,o=_.width),"height"in _&&s(1,i=_.height)},[o,i,a,n,l,f]}class en extends be{constructor(t){super();we(this,t,xt,$t,ke,{width:0,height:1})}}function Ft(e,t,s){const a=e.slice();return a[4]=t[s].d,a[5]=t[s].x,a[6]=t[s].y,a[7]=t[s].stroke,a[9]=s,a}function Mt(e){let t,s,a,n,l;return{c(){t=He("path"),u(t,"d",s=e[4]),u(t,"stroke",a=e[7]),u(t,"fill","none"),u(t,"transform",n="scale("+e[3]+") translate("+e[5]+" "+e[6]+")"),u(t,"stroke-width",l=2/e[3])},m(o,i){U(o,t,i)},p(o,i){i&4&&s!==(s=o[4])&&u(t,"d",s),i&4&&a!==(a=o[7])&&u(t,"stroke",a),i&12&&n!==(n="scale("+o[3]+") translate("+o[5]+" "+o[6]+")")&&u(t,"transform",n),i&8&&l!==(l=2/o[3])&&u(t,"stroke-width",l)},d(o){o&&B(t)}}}function tn(e){let t,s,a=e[2],n=[];for(let l=0;l<a.length;l+=1)n[l]=Mt(Ft(e,a,l));return{c(){t=He("svg");for(let l=0;l<n.length;l+=1)n[l].c();u(t,"width",e[0]),u(t,"height",e[1]),u(t,"viewBox",s="0 0 "+e[0]+" "+e[1]),u(t,"class","svelte-1v7ozzk")},m(l,o){U(l,t,o);for(let i=0;i<n.length;i+=1)n[i].m(t,null)},p(l,[o]){if(o&12){a=l[2];let i;for(i=0;i<a.length;i+=1){const g=Ft(l,a,i);n[i]?n[i].p(g,o):(n[i]=Mt(g),n[i].c(),n[i].m(t,null))}for(;i<n.length;i+=1)n[i].d(1);n.length=a.length}o&1&&u(t,"width",l[0]),o&2&&u(t,"height",l[1]),o&3&&s!==(s="0 0 "+l[0]+" "+l[1])&&u(t,"viewBox",s)},i:ee,o:ee,d(l){l&&B(t),Bt(n,l)}}}function nn(e,t,s){let a,n;j(e,V,i=>s(2,a=i)),j(e,Ye,i=>s(3,n=i));let{width:l=640}=t,{height:o=480}=t;return e.$$set=i=>{"width"in i&&s(0,l=i.width),"height"in i&&s(1,o=i.height)},[l,o,a,n]}class ln extends be{constructor(t){super();we(this,t,nn,tn,ke,{width:0,height:1})}}function Rt(e,t,s){const a=e.slice();return a[10]=t[s].x,a[11]=t[s].y,a[12]=t[s].stroke,a[13]=t,a[14]=s,a}function jt(e){let t,s,a,n,l,o,i,g=e[10]+"",p,m,d=e[11]+"",f,L,k,_,S,P,y,C;function I(){e[5].call(s,e[13],e[14])}function O(){return e[6](e[14])}function Y(){return e[7](e[14])}function D(){return e[8](e[14])}return{c(){t=h("li"),s=h("input"),a=v(),n=h("label"),l=h("input"),i=v(),p=R(g),m=R(", "),f=R(d),L=v(),k=h("button"),k.textContent="\u2795",_=v(),S=h("button"),S.textContent="\u{1F5D1}",P=v(),u(s,"class","swatch svelte-1abodrb"),u(s,"type","color"),u(l,"type","radio"),l.checked=o=e[0]===e[14],u(n,"class","select-position svelte-1abodrb"),u(k,"title","Duplicate"),u(S,"title","Delete"),u(t,"class","svelte-1abodrb")},m(z,E){U(z,t,E),r(t,s),M(s,e[12]),r(t,a),r(t,n),r(n,l),r(n,i),r(n,p),r(n,m),r(n,f),r(t,L),r(t,k),r(t,_),r(t,S),r(t,P),y||(C=[A(s,"input",I),A(l,"input",O),A(k,"click",Y),A(S,"click",D)],y=!0)},p(z,E){e=z,E&2&&M(s,e[12]),E&1&&o!==(o=e[0]===e[14])&&(l.checked=o),E&2&&g!==(g=e[10]+"")&&Xe(p,g),E&2&&d!==(d=e[11]+"")&&Xe(f,d)},d(z){z&&B(t),y=!1,Xt(C)}}}function sn(e){let t,s,a=e[1],n=[];for(let l=0;l<a.length;l+=1)n[l]=jt(Rt(e,a,l));return{c(){t=h("section"),s=h("ul");for(let l=0;l<n.length;l+=1)n[l].c();u(s,"class","svelte-1abodrb")},m(l,o){U(l,t,o),r(t,s);for(let i=0;i<n.length;i+=1)n[i].m(s,null)},p(l,[o]){if(o&31){a=l[1];let i;for(i=0;i<a.length;i+=1){const g=Rt(l,a,i);n[i]?n[i].p(g,o):(n[i]=jt(g),n[i].c(),n[i].m(s,null))}for(;i<n.length;i+=1)n[i].d(1);n.length=a.length}},i:ee,o:ee,d(l){l&&B(t),Bt(n,l)}}}function an(e,t,s){let a,n;j(e,_e,f=>s(0,a=f)),j(e,V,f=>s(1,n=f));function l(f){ve(_e,a=f,a)}function o(f){n.splice(f,1),V.set(n),ve(_e,a=f-1,a)}function i(f){const L=n[f],k=Ct({},L);n.splice(f,0,k),V.set(n),ve(_e,a=f+1,a)}function g(f,L){f[L].stroke=this.value,V.set(n)}return[a,n,l,o,i,g,f=>l(f),f=>i(f),f=>o(f)]}class on extends be{constructor(t){super();we(this,t,an,sn,ke,{})}}function Ot(e,t){const[s,a,n]=Tt(e.red,e.green,e.blue),[l,o,i]=Tt(t.red,t.green,t.blue);return Math.max(100-rn(s,a,n,l,o,i),0)/100}function rn(e,t,s,a,n,l){const o=a-e,i=n-t,g=l-s;return Math.sqrt(o*o+i*i+g*g)}function Tt(e,t,s){var a=un(e,t,s);return cn(a[0],a[1],a[2])}function un(e,t,s){let a=e,n=t,l=s;a>.04045?a=Math.pow((a+.055)/1.055,2.4):a=a/12.92,n>.04045?n=Math.pow((n+.055)/1.055,2.4):n=n/12.92,l>.04045?l=Math.pow((l+.055)/1.055,2.4):l=l/12.92,a=a*100,n=n*100,l=l*100;const o=a*.4124+n*.3576+l*.1805,i=a*.2126+n*.7152+l*.0722,g=a*.0193+n*.1192+l*.9505;return[o,i,g]}function cn(e,t,s){var a=95.047,n=100,l=108.883,o=e/a,i=t/n,g=s/l;o>.008856?o=Math.pow(o,1/3):o=7.787*o+16/116,i>.008856?i=Math.pow(i,1/3):i=7.787*i+16/116,g>.008856?g=Math.pow(g,1/3):g=7.787*g+16/116;var p=116*i-16,m=500*(o-i),d=200*(i-g);return[p,m,d]}let Oe;function Ut(e,t,s,a,n,l){Oe&&cancelAnimationFrame(Oe);const o=e.width,i=e.height,g=new Z.exports.Size(o,i),p=n*.5;new Lt.Project(g).activate();const d=new Z.exports.Raster(t);d.position=new Z.exports.Point(o*.5,i*.5),d.visible=!1;const f=new Lt.Project(e);f.activate();const L=s.map(y=>{const C=new Z.exports.Path(y.d);return C.strokeColor=new Z.exports.Color(y.stroke),C.strokeWidth=1,C.translate(new Z.exports.Point(y.x,y.y)),C.scale(a,new Z.exports.Point(0,0)),C.visible=!1,C}),k=s.map(y=>{const C=new Z.exports.Path("");return C.strokeColor=new Z.exports.Color(y.stroke),C.strokeWidth=1,C.strokeJoin="round",C.strokeCap="round",C});let _=0,S=0;function P(){const y=Date.now();let C=!0;for(;C&&Date.now()-y<1e3/60;){const I=L[_],O=k[_],Y=I.getPointAt(S);if(Y){const z=d.getAverageColor(Y);if(z){const E=Ot(I.strokeColor,z),J=I.getTangentAt(S).multiply(E*l).rotate(90);O.add(Y.add(J))}else O.add(Y)}const D=I.getPointAt(S+p);if(D){const z=d.getAverageColor(D);if(z){const E=Ot(I.strokeColor,z),J=I.getTangentAt(S+p).multiply(E*l).rotate(-90);O.add(D.add(J))}else O.add(D)}S+=n,S>=I.length&&(S=0,_++),_>=s.length&&(C=!1)}C&&(Oe=requestAnimationFrame(P))}return Oe=requestAnimationFrame(P),f}function fn(e){let t,s,a,n,l,o,i,g,p,m,d,f,L,k,_,S,P,y,C,I,O,Y,D,z,E,J,te,K,ye,Ce,ne,N,b,Le,Q,T,$e,xe,ce,ie,et,tt,X,Se,nt,$,We,lt,Pe,st,ze=e[5].length+"",Ge,at,Ne,fe,x,ot,it,re,rt,ue,Ae,ut,H,F,Ee,Ie,ct,De,le,ft,Fe,se,ht,W,Me,gt,ae,pt,Re,dt,je,q,Ze,mt;function qt(c){e[17](c)}let _t={label:"Image to stitch"};e[11]!==void 0&&(_t.url=e[11]),p=new It({props:_t}),qe.push(()=>St(p,"url",qt));function Yt(c){e[25](c)}let vt={label:"SVG for base paths and colors",accept:"image/svg+xml"};return e[12]!==void 0&&(vt.url=e[12]),$=new It({props:vt}),qe.push(()=>St($,"url",Yt)),re=new on({}),le=new ln({props:{width:e[10],height:e[9]}}),se=new en({props:{width:e[10],height:e[9]}}),{c(){t=h("h1"),t.textContent="image-to-embroidery \u{1F5BC}\u2192\u{1FAA1}",s=v(),a=h("p"),a.textContent="collab between some folks...",n=v(),l=h("main"),o=h("div"),i=h("h2"),i.textContent="Select image",g=v(),he(p.$$.fragment),d=v(),f=h("div"),L=h("label"),k=h("input"),_=R(`
        Width`),S=v(),P=h("label"),y=h("input"),C=R(`
        Height`),I=v(),O=h("button"),O.textContent="Fit to image",Y=v(),D=h("label"),z=h("input"),E=R(`
      Show image`),J=v(),te=h("label"),K=h("input"),ye=R(`
      Background color`),Ce=v(),ne=h("label"),N=h("input"),b=R(`
      Advance length`),Le=v(),Q=h("label"),T=h("input"),$e=R(`
      Zigzag width`),xe=v(),ce=h("label"),ie=h("input"),et=R(`
      Auto draw`),tt=v(),X=h("div"),Se=h("h2"),Se.textContent="Path layers",nt=v(),he($.$$.fragment),lt=v(),Pe=h("div"),st=R("Layer count: "),Ge=R(ze),at=v(),Ne=h("div"),fe=h("label"),x=h("input"),ot=R(`
        Scale`),it=v(),he(re.$$.fragment),rt=v(),ue=h("div"),Ae=h("h2"),Ae.textContent="Base paths",ut=v(),H=h("div"),F=h("img"),ct=v(),De=h("div"),he(le.$$.fragment),ft=v(),Fe=h("div"),he(se.$$.fragment),ht=v(),W=h("div"),Me=h("h2"),Me.textContent="Output",gt=v(),ae=h("canvas"),pt=v(),Re=h("button"),Re.textContent="Draw",dt=v(),je=h("button"),je.textContent="Download SVG",u(i,"class","svelte-nv08g3"),u(k,"type","number"),u(L,"class","svelte-nv08g3"),u(y,"type","number"),u(P,"class","svelte-nv08g3"),u(z,"type","checkbox"),u(D,"class","svelte-nv08g3"),u(K,"type","color"),u(te,"class","svelte-nv08g3"),u(N,"type","number"),u(ne,"class","svelte-nv08g3"),u(T,"type","number"),u(Q,"class","svelte-nv08g3"),u(ie,"type","checkbox"),u(ce,"class","svelte-nv08g3"),u(o,"class","v-box svelte-nv08g3"),u(Se,"class","svelte-nv08g3"),u(x,"type","number"),u(x,"step","0.01"),u(fe,"class","svelte-nv08g3"),u(X,"class","v-box svelte-nv08g3"),u(Ae,"class","svelte-nv08g3"),u(F,"width",e[10]),u(F,"height",e[9]),u(F,"class",Ee=Pt(e[6]&&e[11]?"":"transparent")+" svelte-nv08g3"),Be(F.src,Ie=e[11])||u(F,"src",Ie),u(F,"alt",""),u(De,"class","stack-layer svelte-nv08g3"),u(Fe,"class","stack-layer svelte-nv08g3"),u(H,"class","stack svelte-nv08g3"),zt(H,"background-color",e[7]),u(ue,"class","v-box svelte-nv08g3"),u(Me,"class","svelte-nv08g3"),u(ae,"width",e[10]),u(ae,"height",e[9]),u(W,"class","v-box svelte-nv08g3"),u(l,"class","svelte-nv08g3")},m(c,w){U(c,t,w),U(c,s,w),U(c,a,w),U(c,n,w),U(c,l,w),r(l,o),r(o,i),r(o,g),ge(p,o,null),r(o,d),r(o,f),r(f,L),r(L,k),M(k,e[10]),r(L,_),r(f,S),r(f,P),r(P,y),M(y,e[9]),r(P,C),r(f,I),r(f,O),r(o,Y),r(o,D),r(D,z),z.checked=e[6],r(D,E),r(o,J),r(o,te),r(te,K),M(K,e[7]),r(te,ye),r(o,Ce),r(o,ne),r(ne,N),M(N,e[0]),r(ne,b),r(o,Le),r(o,Q),r(Q,T),M(T,e[1]),r(Q,$e),r(o,xe),r(o,ce),r(ce,ie),ie.checked=e[2],r(ce,et),r(l,tt),r(l,X),r(X,Se),r(X,nt),ge($,X,null),r(X,lt),r(X,Pe),r(Pe,st),r(Pe,Ge),r(X,at),r(X,Ne),r(Ne,fe),r(fe,x),M(x,e[4]),r(fe,ot),r(X,it),ge(re,X,null),r(l,rt),r(l,ue),r(ue,Ae),r(ue,ut),r(ue,H),r(H,F),e[27](F),r(H,ct),r(H,De),ge(le,De,null),r(H,ft),r(H,Fe),ge(se,Fe,null),r(l,ht),r(l,W),r(W,Me),r(W,gt),r(W,ae),e[28](ae),r(W,pt),r(W,Re),r(W,dt),r(W,je),q=!0,Ze||(mt=[A(k,"input",e[18]),A(y,"input",e[19]),A(O,"click",e[13]),A(z,"change",e[20]),A(K,"input",e[21]),A(N,"input",e[22]),A(T,"input",e[23]),A(ie,"change",e[24]),A(x,"input",e[26]),A(Re,"click",e[14]),A(je,"click",e[15])],Ze=!0)},p(c,[w]){const bt={};!m&&w&2048&&(m=!0,bt.url=c[11],At(()=>m=!1)),p.$set(bt),w&1024&&G(k.value)!==c[10]&&M(k,c[10]),w&512&&G(y.value)!==c[9]&&M(y,c[9]),w&64&&(z.checked=c[6]),w&128&&M(K,c[7]),w&1&&G(N.value)!==c[0]&&M(N,c[0]),w&2&&G(T.value)!==c[1]&&M(T,c[1]),w&4&&(ie.checked=c[2]);const wt={};!We&&w&4096&&(We=!0,wt.url=c[12],At(()=>We=!1)),$.$set(wt),(!q||w&32)&&ze!==(ze=c[5].length+"")&&Xe(Ge,ze),w&16&&G(x.value)!==c[4]&&M(x,c[4]),(!q||w&1024)&&u(F,"width",c[10]),(!q||w&512)&&u(F,"height",c[9]),(!q||w&2112&&Ee!==(Ee=Pt(c[6]&&c[11]?"":"transparent")+" svelte-nv08g3"))&&u(F,"class",Ee),(!q||w&2048&&!Be(F.src,Ie=c[11]))&&u(F,"src",Ie);const Ve={};w&1024&&(Ve.width=c[10]),w&512&&(Ve.height=c[9]),le.$set(Ve);const Je={};w&1024&&(Je.width=c[10]),w&512&&(Je.height=c[9]),se.$set(Je),(!q||w&128)&&zt(H,"background-color",c[7]),(!q||w&1024)&&u(ae,"width",c[10]),(!q||w&512)&&u(ae,"height",c[9])},i(c){q||(pe(p.$$.fragment,c),pe($.$$.fragment,c),pe(re.$$.fragment,c),pe(le.$$.fragment,c),pe(se.$$.fragment,c),q=!0)},o(c){de(p.$$.fragment,c),de($.$$.fragment,c),de(re.$$.fragment,c),de(le.$$.fragment,c),de(se.$$.fragment,c),q=!1},d(c){c&&B(t),c&&B(s),c&&B(a),c&&B(n),c&&B(l),me(p),me($),me(re),e[27](null),me(le),me(se),e[28](null),Ze=!1,Xt(mt)}}}function hn(e,t,s){let a,n,l,o,i,g,p;j(e,Ye,b=>s(4,a=b)),j(e,V,b=>s(5,n=b)),j(e,Qt,b=>s(16,l=b)),j(e,Ue,b=>s(9,o=b)),j(e,Te,b=>s(10,i=b)),j(e,Qe,b=>s(11,g=b)),j(e,Ke,b=>s(12,p=b));let m=!0,d="#FFFFFF",f=4,L=8,k=!0,_;function S(){_&&(ve(Te,i=_.naturalWidth,i),ve(Ue,o=_.naturalHeight,o))}let P,y;function C(){y=Ut(P,l,n,a,f,L)}function I(){if(!y)return;const b=y.exportSVG({asString:!0,embedImages:!1}),Le=new Blob([b],{type:"image/svg+xml"}),Q=URL.createObjectURL(Le),T=document.createElement("a");T.href=Q,T.download=`zigzag_${Date.now()}.svg`,document.body.appendChild(T),T.click(),document.body.removeChild(T),URL.revokeObjectURL(Q)}function O(b){g=b,Qe.set(g)}function Y(){i=G(this.value),Te.set(i)}function D(){o=G(this.value),Ue.set(o)}function z(){m=this.checked,s(6,m)}function E(){d=this.value,s(7,d)}function J(){f=G(this.value),s(0,f)}function te(){L=G(this.value),s(1,L)}function K(){k=this.checked,s(2,k)}function ye(b){p=b,Ke.set(p)}function Ce(){a=G(this.value),Ye.set(a)}function ne(b){qe[b?"unshift":"push"](()=>{_=b,s(8,_)})}function N(b){qe[b?"unshift":"push"](()=>{P=b,s(3,P)})}return e.$$.update=()=>{e.$$.dirty&65599&&k&&P&&l&&(y=Ut(P,l,n,a,f,L))},[f,L,k,P,a,n,m,d,_,o,i,g,p,S,C,I,l,O,Y,D,z,E,J,te,K,ye,Ce,ne,N]}class gn extends be{constructor(t){super();we(this,t,hn,fn,ke,{})}}new gn({target:document.getElementById("app")});