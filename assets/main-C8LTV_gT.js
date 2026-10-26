import"./index-Dlwv6Gi6.js";const rc="180",ef=0,Wc=1,tf=2,Td=1,Ad=2,ei=3,Ti=0,nn=1,Bt=2,bi=0,Us=1,Xc=2,qc=3,Yc=4,nf=5,Wi=100,sf=101,rf=102,af=103,of=104,lf=200,cf=201,hf=202,df=203,sl=204,rl=205,uf=206,ff=207,pf=208,mf=209,gf=210,_f=211,xf=212,vf=213,yf=214,al=0,ol=1,ll=2,Bs=3,cl=4,hl=5,dl=6,ul=7,Rd=0,Mf=1,Sf=2,Ei=0,bf=1,Ef=2,wf=3,Tf=4,Af=5,Rf=6,Cf=7,Cd=300,Hs=301,Gs=302,fl=303,pl=304,io=306,Ga=1e3,Yi=1001,ml=1002,In=1003,Pf=1004,Kr=1005,Bn=1006,po=1007,$i=1008,Vn=1009,Pd=1010,Dd=1011,Pr=1012,ac=1013,is=1014,ai=1015,Hr=1016,oc=1017,lc=1018,Dr=1020,Ld=35902,Id=35899,Ud=1021,Nd=1022,Ln=1023,Lr=1026,Ir=1027,Fd=1028,cc=1029,kd=1030,hc=1031,dc=1033,Na=33776,Fa=33777,ka=33778,za=33779,gl=35840,_l=35841,xl=35842,vl=35843,yl=36196,Ml=37492,Sl=37496,bl=37808,El=37809,wl=37810,Tl=37811,Al=37812,Rl=37813,Cl=37814,Pl=37815,Dl=37816,Ll=37817,Il=37818,Ul=37819,Nl=37820,Fl=37821,kl=36492,zl=36494,Ol=36495,Bl=36283,Hl=36284,Gl=36285,Vl=36286,Df=3200,zd=3201,Od=0,Lf=1,yi="",mt="srgb",Vs="srgb-linear",Va="linear",nt="srgb",hs=7680,$c=519,If=512,Uf=513,Nf=514,Bd=515,Ff=516,kf=517,zf=518,Of=519,Wl=35044,Kc="300 es",Hn=2e3,Wa=2001;class $s{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let jc=1234567;const Ns=Math.PI/180,Ur=180/Math.PI;function oi(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(zt[n&255]+zt[n>>8&255]+zt[n>>16&255]+zt[n>>24&255]+"-"+zt[e&255]+zt[e>>8&255]+"-"+zt[e>>16&15|64]+zt[e>>24&255]+"-"+zt[t&63|128]+zt[t>>8&255]+"-"+zt[t>>16&255]+zt[t>>24&255]+zt[i&255]+zt[i>>8&255]+zt[i>>16&255]+zt[i>>24&255]).toLowerCase()}function qe(n,e,t){return Math.max(e,Math.min(t,n))}function uc(n,e){return(n%e+e)%e}function Bf(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function Hf(n,e,t){return n!==e?(t-n)/(e-n):0}function br(n,e,t){return(1-t)*n+t*e}function Gf(n,e,t,i){return br(n,e,1-Math.exp(-t*i))}function Vf(n,e=1){return e-Math.abs(uc(n,e*2)-e)}function Wf(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Xf(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function qf(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Yf(n,e){return n+Math.random()*(e-n)}function $f(n){return n*(.5-Math.random())}function Kf(n){n!==void 0&&(jc=n);let e=jc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function jf(n){return n*Ns}function Zf(n){return n*Ur}function Jf(n){return(n&n-1)===0&&n!==0}function Qf(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function ep(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function tp(n,e,t,i,s){const r=Math.cos,a=Math.sin,o=r(t/2),h=a(t/2),l=r((e+i)/2),c=a((e+i)/2),d=r((e-i)/2),u=a((e-i)/2),f=r((i-e)/2),g=a((i-e)/2);switch(s){case"XYX":n.set(o*c,h*d,h*u,o*l);break;case"YZY":n.set(h*u,o*c,h*d,o*l);break;case"ZXZ":n.set(h*d,h*u,o*c,o*l);break;case"XZX":n.set(o*c,h*g,h*f,o*l);break;case"YXY":n.set(h*f,o*c,h*g,o*l);break;case"ZYZ":n.set(h*g,h*f,o*c,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Pn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Qe(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const en={DEG2RAD:Ns,RAD2DEG:Ur,generateUUID:oi,clamp:qe,euclideanModulo:uc,mapLinear:Bf,inverseLerp:Hf,lerp:br,damp:Gf,pingpong:Vf,smoothstep:Wf,smootherstep:Xf,randInt:qf,randFloat:Yf,randFloatSpread:$f,seededRandom:Kf,degToRad:jf,radToDeg:Zf,isPowerOfTwo:Jf,ceilPowerOfTwo:Qf,floorPowerOfTwo:ep,setQuaternionFromProperEuler:tp,normalize:Qe,denormalize:Pn};class Re{constructor(e=0,t=0){Re.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(qe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Gr{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let h=i[s+0],l=i[s+1],c=i[s+2],d=i[s+3];const u=r[a+0],f=r[a+1],g=r[a+2],_=r[a+3];if(o===0){e[t+0]=h,e[t+1]=l,e[t+2]=c,e[t+3]=d;return}if(o===1){e[t+0]=u,e[t+1]=f,e[t+2]=g,e[t+3]=_;return}if(d!==_||h!==u||l!==f||c!==g){let m=1-o;const p=h*u+l*f+c*g+d*_,b=p>=0?1:-1,E=1-p*p;if(E>Number.EPSILON){const A=Math.sqrt(E),T=Math.atan2(A,p*b);m=Math.sin(m*T)/A,o=Math.sin(o*T)/A}const v=o*b;if(h=h*m+u*v,l=l*m+f*v,c=c*m+g*v,d=d*m+_*v,m===1-o){const A=1/Math.sqrt(h*h+l*l+c*c+d*d);h*=A,l*=A,c*=A,d*=A}}e[t]=h,e[t+1]=l,e[t+2]=c,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,s,r,a){const o=i[s],h=i[s+1],l=i[s+2],c=i[s+3],d=r[a],u=r[a+1],f=r[a+2],g=r[a+3];return e[t]=o*g+c*d+h*f-l*u,e[t+1]=h*g+c*u+l*d-o*f,e[t+2]=l*g+c*f+o*u-h*d,e[t+3]=c*g-o*d-h*u-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,h=Math.sin,l=o(i/2),c=o(s/2),d=o(r/2),u=h(i/2),f=h(s/2),g=h(r/2);switch(a){case"XYZ":this._x=u*c*d+l*f*g,this._y=l*f*d-u*c*g,this._z=l*c*g+u*f*d,this._w=l*c*d-u*f*g;break;case"YXZ":this._x=u*c*d+l*f*g,this._y=l*f*d-u*c*g,this._z=l*c*g-u*f*d,this._w=l*c*d+u*f*g;break;case"ZXY":this._x=u*c*d-l*f*g,this._y=l*f*d+u*c*g,this._z=l*c*g+u*f*d,this._w=l*c*d-u*f*g;break;case"ZYX":this._x=u*c*d-l*f*g,this._y=l*f*d+u*c*g,this._z=l*c*g-u*f*d,this._w=l*c*d+u*f*g;break;case"YZX":this._x=u*c*d+l*f*g,this._y=l*f*d+u*c*g,this._z=l*c*g-u*f*d,this._w=l*c*d-u*f*g;break;case"XZY":this._x=u*c*d-l*f*g,this._y=l*f*d-u*c*g,this._z=l*c*g+u*f*d,this._w=l*c*d+u*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],h=t[9],l=t[2],c=t[6],d=t[10],u=i+o+d;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(c-h)*f,this._y=(r-l)*f,this._z=(a-s)*f}else if(i>o&&i>d){const f=2*Math.sqrt(1+i-o-d);this._w=(c-h)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+l)/f}else if(o>d){const f=2*Math.sqrt(1+o-i-d);this._w=(r-l)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(h+c)/f}else{const f=2*Math.sqrt(1+d-i-o);this._w=(a-s)/f,this._x=(r+l)/f,this._y=(h+c)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(qe(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,h=t._y,l=t._z,c=t._w;return this._x=i*c+a*o+s*l-r*h,this._y=s*c+a*h+r*o-i*l,this._z=r*c+a*l+i*h-s*o,this._w=a*c-i*o-s*h-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,a=this._w;let o=a*e._w+i*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=s,this._z=r,this;const h=1-o*o;if(h<=Number.EPSILON){const f=1-t;return this._w=f*a+t*this._w,this._x=f*i+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}const l=Math.sqrt(h),c=Math.atan2(l,o),d=Math.sin((1-t)*c)/l,u=Math.sin(t*c)/l;return this._w=a*d+this._w*u,this._x=i*d+this._x*u,this._y=s*d+this._y*u,this._z=r*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(e=0,t=0,i=0){U.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Zc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Zc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,h=e.w,l=2*(a*s-o*i),c=2*(o*t-r*s),d=2*(r*i-a*t);return this.x=t+h*l+a*d-o*c,this.y=i+h*c+o*l-r*d,this.z=s+h*d+r*c-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this.z=qe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this.z=qe(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(qe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,h=t.z;return this.x=s*h-r*o,this.y=r*a-i*h,this.z=i*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return mo.copy(this).projectOnVector(e),this.sub(mo)}reflect(e){return this.sub(mo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const mo=new U,Zc=new Gr;class ze{constructor(e,t,i,s,r,a,o,h,l){ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,h,l)}set(e,t,i,s,r,a,o,h,l){const c=this.elements;return c[0]=e,c[1]=s,c[2]=o,c[3]=t,c[4]=r,c[5]=h,c[6]=i,c[7]=a,c[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],h=i[6],l=i[1],c=i[4],d=i[7],u=i[2],f=i[5],g=i[8],_=s[0],m=s[3],p=s[6],b=s[1],E=s[4],v=s[7],A=s[2],T=s[5],P=s[8];return r[0]=a*_+o*b+h*A,r[3]=a*m+o*E+h*T,r[6]=a*p+o*v+h*P,r[1]=l*_+c*b+d*A,r[4]=l*m+c*E+d*T,r[7]=l*p+c*v+d*P,r[2]=u*_+f*b+g*A,r[5]=u*m+f*E+g*T,r[8]=u*p+f*v+g*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],h=e[6],l=e[7],c=e[8];return t*a*c-t*o*l-i*r*c+i*o*h+s*r*l-s*a*h}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],h=e[6],l=e[7],c=e[8],d=c*a-o*l,u=o*h-c*r,f=l*r-a*h,g=t*d+i*u+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=d*_,e[1]=(s*l-c*i)*_,e[2]=(o*i-s*a)*_,e[3]=u*_,e[4]=(c*t-s*h)*_,e[5]=(s*r-o*t)*_,e[6]=f*_,e[7]=(i*h-l*t)*_,e[8]=(a*t-i*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){const h=Math.cos(r),l=Math.sin(r);return this.set(i*h,i*l,-i*(h*a+l*o)+a+e,-s*l,s*h,-s*(-l*a+h*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(go.makeScale(e,t)),this}rotate(e){return this.premultiply(go.makeRotation(-e)),this}translate(e,t){return this.premultiply(go.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const go=new ze;function Hd(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Nr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function np(){const n=Nr("canvas");return n.style.display="block",n}const Jc={};function Fr(n){n in Jc||(Jc[n]=!0,console.warn(n))}function ip(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}const Qc=new ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),eh=new ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function sp(){const n={enabled:!0,workingColorSpace:Vs,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===nt&&(s.r=li(s.r),s.g=li(s.g),s.b=li(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===nt&&(s.r=Fs(s.r),s.g=Fs(s.g),s.b=Fs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===yi?Va:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Fr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Fr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Vs]:{primaries:e,whitePoint:i,transfer:Va,toXYZ:Qc,fromXYZ:eh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:mt},outputColorSpaceConfig:{drawingBufferColorSpace:mt}},[mt]:{primaries:e,whitePoint:i,transfer:nt,toXYZ:Qc,fromXYZ:eh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:mt}}}),n}const je=sp();function li(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Fs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let ds;class rp{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{ds===void 0&&(ds=Nr("canvas")),ds.width=e.width,ds.height=e.height;const s=ds.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=ds}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Nr("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=li(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(li(t[i]/255)*255):t[i]=li(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ap=0;class fc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ap++}),this.uuid=oi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(_o(s[a].image)):r.push(_o(s[a]))}else r=_o(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function _o(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?rp.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let op=0;const xo=new U;class Ft extends $s{constructor(e=Ft.DEFAULT_IMAGE,t=Ft.DEFAULT_MAPPING,i=Yi,s=Yi,r=Bn,a=$i,o=Ln,h=Vn,l=Ft.DEFAULT_ANISOTROPY,c=yi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:op++}),this.uuid=oi(),this.name="",this.source=new fc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=h,this.offset=new Re(0,0),this.repeat=new Re(1,1),this.center=new Re(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(xo).x}get height(){return this.source.getSize(xo).y}get depth(){return this.source.getSize(xo).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Cd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ga:e.x=e.x-Math.floor(e.x);break;case Yi:e.x=e.x<0?0:1;break;case ml:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ga:e.y=e.y-Math.floor(e.y);break;case Yi:e.y=e.y<0?0:1;break;case ml:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ft.DEFAULT_IMAGE=null;Ft.DEFAULT_MAPPING=Cd;Ft.DEFAULT_ANISOTROPY=1;class st{constructor(e=0,t=0,i=0,s=1){st.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const h=e.elements,l=h[0],c=h[4],d=h[8],u=h[1],f=h[5],g=h[9],_=h[2],m=h[6],p=h[10];if(Math.abs(c-u)<.01&&Math.abs(d-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(c+u)<.1&&Math.abs(d+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const E=(l+1)/2,v=(f+1)/2,A=(p+1)/2,T=(c+u)/4,P=(d+_)/4,D=(g+m)/4;return E>v&&E>A?E<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(E),s=T/i,r=P/i):v>A?v<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),i=T/s,r=D/s):A<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),i=P/r,s=D/r),this.set(i,s,r,t),this}let b=Math.sqrt((m-g)*(m-g)+(d-_)*(d-_)+(u-c)*(u-c));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(d-_)/b,this.z=(u-c)/b,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this.z=qe(this.z,e.z,t.z),this.w=qe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this.z=qe(this.z,e,t),this.w=qe(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(qe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class lp extends $s{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Bn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new st(0,0,e,t),this.scissorTest=!1,this.viewport=new st(0,0,e,t);const s={width:e,height:t,depth:i.depth},r=new Ft(s);this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:Bn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new fc(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ss extends lp{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Gd extends Ft{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=In,this.minFilter=In,this.wrapR=Yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class cp extends Ft{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=In,this.minFilter=In,this.wrapR=Yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ks{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(bn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(bn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=bn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,bn):bn.fromBufferAttribute(r,a),bn.applyMatrix4(e.matrixWorld),this.expandByPoint(bn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),jr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),jr.copy(i.boundingBox)),jr.applyMatrix4(e.matrixWorld),this.union(jr)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,bn),bn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ir),Zr.subVectors(this.max,ir),us.subVectors(e.a,ir),fs.subVectors(e.b,ir),ps.subVectors(e.c,ir),ui.subVectors(fs,us),fi.subVectors(ps,fs),Li.subVectors(us,ps);let t=[0,-ui.z,ui.y,0,-fi.z,fi.y,0,-Li.z,Li.y,ui.z,0,-ui.x,fi.z,0,-fi.x,Li.z,0,-Li.x,-ui.y,ui.x,0,-fi.y,fi.x,0,-Li.y,Li.x,0];return!vo(t,us,fs,ps,Zr)||(t=[1,0,0,0,1,0,0,0,1],!vo(t,us,fs,ps,Zr))?!1:(Jr.crossVectors(ui,fi),t=[Jr.x,Jr.y,Jr.z],vo(t,us,fs,ps,Zr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,bn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(bn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Kn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Kn=[new U,new U,new U,new U,new U,new U,new U,new U],bn=new U,jr=new Ks,us=new U,fs=new U,ps=new U,ui=new U,fi=new U,Li=new U,ir=new U,Zr=new U,Jr=new U,Ii=new U;function vo(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){Ii.fromArray(n,r);const o=s.x*Math.abs(Ii.x)+s.y*Math.abs(Ii.y)+s.z*Math.abs(Ii.z),h=e.dot(Ii),l=t.dot(Ii),c=i.dot(Ii);if(Math.max(-Math.max(h,l,c),Math.min(h,l,c))>o)return!1}return!0}const hp=new Ks,sr=new U,yo=new U;class so{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):hp.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;sr.subVectors(e,this.center);const t=sr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(sr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(yo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(sr.copy(e.center).add(yo)),this.expandByPoint(sr.copy(e.center).sub(yo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const jn=new U,Mo=new U,Qr=new U,pi=new U,So=new U,ea=new U,bo=new U;class pc{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,jn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=jn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(jn.copy(this.origin).addScaledVector(this.direction,t),jn.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Mo.copy(e).add(t).multiplyScalar(.5),Qr.copy(t).sub(e).normalize(),pi.copy(this.origin).sub(Mo);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Qr),o=pi.dot(this.direction),h=-pi.dot(Qr),l=pi.lengthSq(),c=Math.abs(1-a*a);let d,u,f,g;if(c>0)if(d=a*h-o,u=a*o-h,g=r*c,d>=0)if(u>=-g)if(u<=g){const _=1/c;d*=_,u*=_,f=d*(d+a*u+2*o)+u*(a*d+u+2*h)+l}else u=r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*h)+l;else u=-r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*h)+l;else u<=-g?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-h),r),f=-d*d+u*(u+2*h)+l):u<=g?(d=0,u=Math.min(Math.max(-r,-h),r),f=u*(u+2*h)+l):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-h),r),f=-d*d+u*(u+2*h)+l);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*h)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Mo).addScaledVector(Qr,u),f}intersectSphere(e,t){jn.subVectors(e.center,this.origin);const i=jn.dot(this.direction),s=jn.dot(jn)-i*i,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=i-a,h=i+a;return h<0?null:o<0?this.at(h,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,h;const l=1/this.direction.x,c=1/this.direction.y,d=1/this.direction.z,u=this.origin;return l>=0?(i=(e.min.x-u.x)*l,s=(e.max.x-u.x)*l):(i=(e.max.x-u.x)*l,s=(e.min.x-u.x)*l),c>=0?(r=(e.min.y-u.y)*c,a=(e.max.y-u.y)*c):(r=(e.max.y-u.y)*c,a=(e.min.y-u.y)*c),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(e.min.z-u.z)*d,h=(e.max.z-u.z)*d):(o=(e.max.z-u.z)*d,h=(e.min.z-u.z)*d),i>h||o>s)||((o>i||i!==i)&&(i=o),(h<s||s!==s)&&(s=h),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,jn)!==null}intersectTriangle(e,t,i,s,r){So.subVectors(t,e),ea.subVectors(i,e),bo.crossVectors(So,ea);let a=this.direction.dot(bo),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;pi.subVectors(this.origin,e);const h=o*this.direction.dot(ea.crossVectors(pi,ea));if(h<0)return null;const l=o*this.direction.dot(So.cross(pi));if(l<0||h+l>a)return null;const c=-o*pi.dot(bo);return c<0?null:this.at(c/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ht{constructor(e,t,i,s,r,a,o,h,l,c,d,u,f,g,_,m){ht.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,h,l,c,d,u,f,g,_,m)}set(e,t,i,s,r,a,o,h,l,c,d,u,f,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=h,p[2]=l,p[6]=c,p[10]=d,p[14]=u,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ht().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/ms.setFromMatrixColumn(e,0).length(),r=1/ms.setFromMatrixColumn(e,1).length(),a=1/ms.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),h=Math.cos(s),l=Math.sin(s),c=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const u=a*c,f=a*d,g=o*c,_=o*d;t[0]=h*c,t[4]=-h*d,t[8]=l,t[1]=f+g*l,t[5]=u-_*l,t[9]=-o*h,t[2]=_-u*l,t[6]=g+f*l,t[10]=a*h}else if(e.order==="YXZ"){const u=h*c,f=h*d,g=l*c,_=l*d;t[0]=u+_*o,t[4]=g*o-f,t[8]=a*l,t[1]=a*d,t[5]=a*c,t[9]=-o,t[2]=f*o-g,t[6]=_+u*o,t[10]=a*h}else if(e.order==="ZXY"){const u=h*c,f=h*d,g=l*c,_=l*d;t[0]=u-_*o,t[4]=-a*d,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*c,t[9]=_-u*o,t[2]=-a*l,t[6]=o,t[10]=a*h}else if(e.order==="ZYX"){const u=a*c,f=a*d,g=o*c,_=o*d;t[0]=h*c,t[4]=g*l-f,t[8]=u*l+_,t[1]=h*d,t[5]=_*l+u,t[9]=f*l-g,t[2]=-l,t[6]=o*h,t[10]=a*h}else if(e.order==="YZX"){const u=a*h,f=a*l,g=o*h,_=o*l;t[0]=h*c,t[4]=_-u*d,t[8]=g*d+f,t[1]=d,t[5]=a*c,t[9]=-o*c,t[2]=-l*c,t[6]=f*d+g,t[10]=u-_*d}else if(e.order==="XZY"){const u=a*h,f=a*l,g=o*h,_=o*l;t[0]=h*c,t[4]=-d,t[8]=l*c,t[1]=u*d+_,t[5]=a*c,t[9]=f*d-g,t[2]=g*d-f,t[6]=o*c,t[10]=_*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(dp,e,up)}lookAt(e,t,i){const s=this.elements;return on.subVectors(e,t),on.lengthSq()===0&&(on.z=1),on.normalize(),mi.crossVectors(i,on),mi.lengthSq()===0&&(Math.abs(i.z)===1?on.x+=1e-4:on.z+=1e-4,on.normalize(),mi.crossVectors(i,on)),mi.normalize(),ta.crossVectors(on,mi),s[0]=mi.x,s[4]=ta.x,s[8]=on.x,s[1]=mi.y,s[5]=ta.y,s[9]=on.y,s[2]=mi.z,s[6]=ta.z,s[10]=on.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],h=i[8],l=i[12],c=i[1],d=i[5],u=i[9],f=i[13],g=i[2],_=i[6],m=i[10],p=i[14],b=i[3],E=i[7],v=i[11],A=i[15],T=s[0],P=s[4],D=s[8],S=s[12],M=s[1],L=s[5],z=s[9],H=s[13],W=s[2],Y=s[6],X=s[10],ne=s[14],G=s[3],ae=s[7],he=s[11],Ee=s[15];return r[0]=a*T+o*M+h*W+l*G,r[4]=a*P+o*L+h*Y+l*ae,r[8]=a*D+o*z+h*X+l*he,r[12]=a*S+o*H+h*ne+l*Ee,r[1]=c*T+d*M+u*W+f*G,r[5]=c*P+d*L+u*Y+f*ae,r[9]=c*D+d*z+u*X+f*he,r[13]=c*S+d*H+u*ne+f*Ee,r[2]=g*T+_*M+m*W+p*G,r[6]=g*P+_*L+m*Y+p*ae,r[10]=g*D+_*z+m*X+p*he,r[14]=g*S+_*H+m*ne+p*Ee,r[3]=b*T+E*M+v*W+A*G,r[7]=b*P+E*L+v*Y+A*ae,r[11]=b*D+E*z+v*X+A*he,r[15]=b*S+E*H+v*ne+A*Ee,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],h=e[9],l=e[13],c=e[2],d=e[6],u=e[10],f=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+r*h*d-s*l*d-r*o*u+i*l*u+s*o*f-i*h*f)+_*(+t*h*f-t*l*u+r*a*u-s*a*f+s*l*c-r*h*c)+m*(+t*l*d-t*o*f-r*a*d+i*a*f+r*o*c-i*l*c)+p*(-s*o*c-t*h*d+t*o*u+s*a*d-i*a*u+i*h*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],h=e[6],l=e[7],c=e[8],d=e[9],u=e[10],f=e[11],g=e[12],_=e[13],m=e[14],p=e[15],b=d*m*l-_*u*l+_*h*f-o*m*f-d*h*p+o*u*p,E=g*u*l-c*m*l-g*h*f+a*m*f+c*h*p-a*u*p,v=c*_*l-g*d*l+g*o*f-a*_*f-c*o*p+a*d*p,A=g*d*h-c*_*h-g*o*u+a*_*u+c*o*m-a*d*m,T=t*b+i*E+s*v+r*A;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/T;return e[0]=b*P,e[1]=(_*u*r-d*m*r-_*s*f+i*m*f+d*s*p-i*u*p)*P,e[2]=(o*m*r-_*h*r+_*s*l-i*m*l-o*s*p+i*h*p)*P,e[3]=(d*h*r-o*u*r-d*s*l+i*u*l+o*s*f-i*h*f)*P,e[4]=E*P,e[5]=(c*m*r-g*u*r+g*s*f-t*m*f-c*s*p+t*u*p)*P,e[6]=(g*h*r-a*m*r-g*s*l+t*m*l+a*s*p-t*h*p)*P,e[7]=(a*u*r-c*h*r+c*s*l-t*u*l-a*s*f+t*h*f)*P,e[8]=v*P,e[9]=(g*d*r-c*_*r-g*i*f+t*_*f+c*i*p-t*d*p)*P,e[10]=(a*_*r-g*o*r+g*i*l-t*_*l-a*i*p+t*o*p)*P,e[11]=(c*o*r-a*d*r-c*i*l+t*d*l+a*i*f-t*o*f)*P,e[12]=A*P,e[13]=(c*_*s-g*d*s+g*i*u-t*_*u-c*i*m+t*d*m)*P,e[14]=(g*o*s-a*_*s-g*i*h+t*_*h+a*i*m-t*o*m)*P,e[15]=(a*d*s-c*o*s+c*i*h-t*d*h-a*i*u+t*o*u)*P,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,h=e.z,l=r*a,c=r*o;return this.set(l*a+i,l*o-s*h,l*h+s*o,0,l*o+s*h,c*o+i,c*h-s*a,0,l*h-s*o,c*h+s*a,r*h*h+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,a=t._y,o=t._z,h=t._w,l=r+r,c=a+a,d=o+o,u=r*l,f=r*c,g=r*d,_=a*c,m=a*d,p=o*d,b=h*l,E=h*c,v=h*d,A=i.x,T=i.y,P=i.z;return s[0]=(1-(_+p))*A,s[1]=(f+v)*A,s[2]=(g-E)*A,s[3]=0,s[4]=(f-v)*T,s[5]=(1-(u+p))*T,s[6]=(m+b)*T,s[7]=0,s[8]=(g+E)*P,s[9]=(m-b)*P,s[10]=(1-(u+_))*P,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let r=ms.set(s[0],s[1],s[2]).length();const a=ms.set(s[4],s[5],s[6]).length(),o=ms.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],En.copy(this);const l=1/r,c=1/a,d=1/o;return En.elements[0]*=l,En.elements[1]*=l,En.elements[2]*=l,En.elements[4]*=c,En.elements[5]*=c,En.elements[6]*=c,En.elements[8]*=d,En.elements[9]*=d,En.elements[10]*=d,t.setFromRotationMatrix(En),i.x=r,i.y=a,i.z=o,this}makePerspective(e,t,i,s,r,a,o=Hn,h=!1){const l=this.elements,c=2*r/(t-e),d=2*r/(i-s),u=(t+e)/(t-e),f=(i+s)/(i-s);let g,_;if(h)g=r/(a-r),_=a*r/(a-r);else if(o===Hn)g=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===Wa)g=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=d,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=Hn,h=!1){const l=this.elements,c=2/(t-e),d=2/(i-s),u=-(t+e)/(t-e),f=-(i+s)/(i-s);let g,_;if(h)g=1/(a-r),_=a/(a-r);else if(o===Hn)g=-2/(a-r),_=-(a+r)/(a-r);else if(o===Wa)g=-1/(a-r),_=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=0,l[12]=u,l[1]=0,l[5]=d,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const ms=new U,En=new ht,dp=new U(0,0,0),up=new U(1,1,1),mi=new U,ta=new U,on=new U,th=new ht,nh=new Gr;class Wn{constructor(e=0,t=0,i=0,s=Wn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],h=s[1],l=s[5],c=s[9],d=s[2],u=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-c,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-qe(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(h,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(qe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(h,r));break;case"ZYX":this._y=Math.asin(-qe(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(h,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(qe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-c,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-c,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return th.makeRotationFromQuaternion(e),this.setFromRotationMatrix(th,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return nh.setFromEuler(this),this.setFromQuaternion(nh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Wn.DEFAULT_ORDER="XYZ";class mc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let fp=0;const ih=new U,gs=new Gr,Zn=new ht,na=new U,rr=new U,pp=new U,mp=new Gr,sh=new U(1,0,0),rh=new U(0,1,0),ah=new U(0,0,1),oh={type:"added"},gp={type:"removed"},_s={type:"childadded",child:null},Eo={type:"childremoved",child:null};class Ct extends $s{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:fp++}),this.uuid=oi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ct.DEFAULT_UP.clone();const e=new U,t=new Wn,i=new Gr,s=new U(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ht},normalMatrix:{value:new ze}}),this.matrix=new ht,this.matrixWorld=new ht,this.matrixAutoUpdate=Ct.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new mc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return gs.setFromAxisAngle(e,t),this.quaternion.multiply(gs),this}rotateOnWorldAxis(e,t){return gs.setFromAxisAngle(e,t),this.quaternion.premultiply(gs),this}rotateX(e){return this.rotateOnAxis(sh,e)}rotateY(e){return this.rotateOnAxis(rh,e)}rotateZ(e){return this.rotateOnAxis(ah,e)}translateOnAxis(e,t){return ih.copy(e).applyQuaternion(this.quaternion),this.position.add(ih.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(sh,e)}translateY(e){return this.translateOnAxis(rh,e)}translateZ(e){return this.translateOnAxis(ah,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Zn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?na.copy(e):na.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),rr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Zn.lookAt(rr,na,this.up):Zn.lookAt(na,rr,this.up),this.quaternion.setFromRotationMatrix(Zn),s&&(Zn.extractRotation(s.matrixWorld),gs.setFromRotationMatrix(Zn),this.quaternion.premultiply(gs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(oh),_s.child=e,this.dispatchEvent(_s),_s.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(gp),Eo.child=e,this.dispatchEvent(Eo),Eo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Zn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Zn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Zn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(oh),_s.child=e,this.dispatchEvent(_s),_s.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rr,e,pp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rr,mp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,h){return o[h.uuid]===void 0&&(o[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const h=o.shapes;if(Array.isArray(h))for(let l=0,c=h.length;l<c;l++){const d=h[l];r(e.shapes,d)}else r(e.shapes,h)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let h=0,l=this.material.length;h<l;h++)o.push(r(e.materials,this.material[h]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const h=this.animations[o];s.animations.push(r(e.animations,h))}}if(t){const o=a(e.geometries),h=a(e.materials),l=a(e.textures),c=a(e.images),d=a(e.shapes),u=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),h.length>0&&(i.materials=h),l.length>0&&(i.textures=l),c.length>0&&(i.images=c),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=s,i;function a(o){const h=[];for(const l in o){const c=o[l];delete c.metadata,h.push(c)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Ct.DEFAULT_UP=new U(0,1,0);Ct.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const wn=new U,Jn=new U,wo=new U,Qn=new U,xs=new U,vs=new U,lh=new U,To=new U,Ao=new U,Ro=new U,Co=new st,Po=new st,Do=new st;class dn{constructor(e=new U,t=new U,i=new U){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),wn.subVectors(e,t),s.cross(wn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){wn.subVectors(s,t),Jn.subVectors(i,t),wo.subVectors(e,t);const a=wn.dot(wn),o=wn.dot(Jn),h=wn.dot(wo),l=Jn.dot(Jn),c=Jn.dot(wo),d=a*l-o*o;if(d===0)return r.set(0,0,0),null;const u=1/d,f=(l*h-o*c)*u,g=(a*c-o*h)*u;return r.set(1-f-g,g,f)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Qn)===null?!1:Qn.x>=0&&Qn.y>=0&&Qn.x+Qn.y<=1}static getInterpolation(e,t,i,s,r,a,o,h){return this.getBarycoord(e,t,i,s,Qn)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(r,Qn.x),h.addScaledVector(a,Qn.y),h.addScaledVector(o,Qn.z),h)}static getInterpolatedAttribute(e,t,i,s,r,a){return Co.setScalar(0),Po.setScalar(0),Do.setScalar(0),Co.fromBufferAttribute(e,t),Po.fromBufferAttribute(e,i),Do.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Co,r.x),a.addScaledVector(Po,r.y),a.addScaledVector(Do,r.z),a}static isFrontFacing(e,t,i,s){return wn.subVectors(i,t),Jn.subVectors(e,t),wn.cross(Jn).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return wn.subVectors(this.c,this.b),Jn.subVectors(this.a,this.b),wn.cross(Jn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return dn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return dn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return dn.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return dn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return dn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let a,o;xs.subVectors(s,i),vs.subVectors(r,i),To.subVectors(e,i);const h=xs.dot(To),l=vs.dot(To);if(h<=0&&l<=0)return t.copy(i);Ao.subVectors(e,s);const c=xs.dot(Ao),d=vs.dot(Ao);if(c>=0&&d<=c)return t.copy(s);const u=h*d-c*l;if(u<=0&&h>=0&&c<=0)return a=h/(h-c),t.copy(i).addScaledVector(xs,a);Ro.subVectors(e,r);const f=xs.dot(Ro),g=vs.dot(Ro);if(g>=0&&f<=g)return t.copy(r);const _=f*l-h*g;if(_<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(i).addScaledVector(vs,o);const m=c*g-f*d;if(m<=0&&d-c>=0&&f-g>=0)return lh.subVectors(r,s),o=(d-c)/(d-c+(f-g)),t.copy(s).addScaledVector(lh,o);const p=1/(m+_+u);return a=_*p,o=u*p,t.copy(i).addScaledVector(xs,a).addScaledVector(vs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Vd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},gi={h:0,s:0,l:0},ia={h:0,s:0,l:0};function Lo(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ve{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=mt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,je.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=je.workingColorSpace){return this.r=e,this.g=t,this.b=i,je.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=je.workingColorSpace){if(e=uc(e,1),t=qe(t,0,1),i=qe(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=Lo(a,r,e+1/3),this.g=Lo(a,r,e),this.b=Lo(a,r,e-1/3)}return je.colorSpaceToWorking(this,s),this}setStyle(e,t=mt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=mt){const i=Vd[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=li(e.r),this.g=li(e.g),this.b=li(e.b),this}copyLinearToSRGB(e){return this.r=Fs(e.r),this.g=Fs(e.g),this.b=Fs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=mt){return je.workingToColorSpace(Ot.copy(this),e),Math.round(qe(Ot.r*255,0,255))*65536+Math.round(qe(Ot.g*255,0,255))*256+Math.round(qe(Ot.b*255,0,255))}getHexString(e=mt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=je.workingColorSpace){je.workingToColorSpace(Ot.copy(this),t);const i=Ot.r,s=Ot.g,r=Ot.b,a=Math.max(i,s,r),o=Math.min(i,s,r);let h,l;const c=(o+a)/2;if(o===a)h=0,l=0;else{const d=a-o;switch(l=c<=.5?d/(a+o):d/(2-a-o),a){case i:h=(s-r)/d+(s<r?6:0);break;case s:h=(r-i)/d+2;break;case r:h=(i-s)/d+4;break}h/=6}return e.h=h,e.s=l,e.l=c,e}getRGB(e,t=je.workingColorSpace){return je.workingToColorSpace(Ot.copy(this),t),e.r=Ot.r,e.g=Ot.g,e.b=Ot.b,e}getStyle(e=mt){je.workingToColorSpace(Ot.copy(this),e);const t=Ot.r,i=Ot.g,s=Ot.b;return e!==mt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(gi),this.setHSL(gi.h+e,gi.s+t,gi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(gi),e.getHSL(ia);const i=br(gi.h,ia.h,t),s=br(gi.s,ia.s,t),r=br(gi.l,ia.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ot=new Ve;Ve.NAMES=Vd;let _p=0;class ls extends $s{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_p++}),this.uuid=oi(),this.name="",this.type="Material",this.blending=Us,this.side=Ti,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=sl,this.blendDst=rl,this.blendEquation=Wi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ve(0,0,0),this.blendAlpha=0,this.depthFunc=Bs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$c,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=hs,this.stencilZFail=hs,this.stencilZPass=hs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Us&&(i.blending=this.blending),this.side!==Ti&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==sl&&(i.blendSrc=this.blendSrc),this.blendDst!==rl&&(i.blendDst=this.blendDst),this.blendEquation!==Wi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Bs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==$c&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==hs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==hs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==hs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const a=[];for(const o in r){const h=r[o];delete h.metadata,a.push(h)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class wt extends ls{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wn,this.combine=Rd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Tt=new U,sa=new Re;let xp=0;class Un{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:xp++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Wl,this.updateRanges=[],this.gpuType=ai,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)sa.fromBufferAttribute(this,t),sa.applyMatrix3(e),this.setXY(t,sa.x,sa.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix3(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix4(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.applyNormalMatrix(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.transformDirection(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Pn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Qe(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Pn(t,this.array)),t}setX(e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Pn(t,this.array)),t}setY(e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Pn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Pn(t,this.array)),t}setW(e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Qe(t,this.array),i=Qe(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Qe(t,this.array),i=Qe(i,this.array),s=Qe(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=Qe(t,this.array),i=Qe(i,this.array),s=Qe(s,this.array),r=Qe(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Wl&&(e.usage=this.usage),e}}class Wd extends Un{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Xd extends Un{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Mt extends Un{constructor(e,t,i){super(new Float32Array(e),t,i)}}let vp=0;const _n=new ht,Io=new Ct,ys=new U,ln=new Ks,ar=new Ks,It=new U;class sn extends $s{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:vp++}),this.uuid=oi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Hd(e)?Xd:Wd)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new ze().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return _n.makeRotationFromQuaternion(e),this.applyMatrix4(_n),this}rotateX(e){return _n.makeRotationX(e),this.applyMatrix4(_n),this}rotateY(e){return _n.makeRotationY(e),this.applyMatrix4(_n),this}rotateZ(e){return _n.makeRotationZ(e),this.applyMatrix4(_n),this}translate(e,t,i){return _n.makeTranslation(e,t,i),this.applyMatrix4(_n),this}scale(e,t,i){return _n.makeScale(e,t,i),this.applyMatrix4(_n),this}lookAt(e){return Io.lookAt(e),Io.updateMatrix(),this.applyMatrix4(Io.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ys).negate(),this.translate(ys.x,ys.y,ys.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Mt(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ks);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];ln.setFromBufferAttribute(r),this.morphTargetsRelative?(It.addVectors(this.boundingBox.min,ln.min),this.boundingBox.expandByPoint(It),It.addVectors(this.boundingBox.max,ln.max),this.boundingBox.expandByPoint(It)):(this.boundingBox.expandByPoint(ln.min),this.boundingBox.expandByPoint(ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new so);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){const i=this.boundingSphere.center;if(ln.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];ar.setFromBufferAttribute(o),this.morphTargetsRelative?(It.addVectors(ln.min,ar.min),ln.expandByPoint(It),It.addVectors(ln.max,ar.max),ln.expandByPoint(It)):(ln.expandByPoint(ar.min),ln.expandByPoint(ar.max))}ln.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)It.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(It));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],h=this.morphTargetsRelative;for(let l=0,c=o.count;l<c;l++)It.fromBufferAttribute(o,l),h&&(ys.fromBufferAttribute(e,l),It.add(ys)),s=Math.max(s,i.distanceToSquared(It))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Un(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],h=[];for(let D=0;D<i.count;D++)o[D]=new U,h[D]=new U;const l=new U,c=new U,d=new U,u=new Re,f=new Re,g=new Re,_=new U,m=new U;function p(D,S,M){l.fromBufferAttribute(i,D),c.fromBufferAttribute(i,S),d.fromBufferAttribute(i,M),u.fromBufferAttribute(r,D),f.fromBufferAttribute(r,S),g.fromBufferAttribute(r,M),c.sub(l),d.sub(l),f.sub(u),g.sub(u);const L=1/(f.x*g.y-g.x*f.y);isFinite(L)&&(_.copy(c).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(L),m.copy(d).multiplyScalar(f.x).addScaledVector(c,-g.x).multiplyScalar(L),o[D].add(_),o[S].add(_),o[M].add(_),h[D].add(m),h[S].add(m),h[M].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let D=0,S=b.length;D<S;++D){const M=b[D],L=M.start,z=M.count;for(let H=L,W=L+z;H<W;H+=3)p(e.getX(H+0),e.getX(H+1),e.getX(H+2))}const E=new U,v=new U,A=new U,T=new U;function P(D){A.fromBufferAttribute(s,D),T.copy(A);const S=o[D];E.copy(S),E.sub(A.multiplyScalar(A.dot(S))).normalize(),v.crossVectors(T,S);const L=v.dot(h[D])<0?-1:1;a.setXYZW(D,E.x,E.y,E.z,L)}for(let D=0,S=b.length;D<S;++D){const M=b[D],L=M.start,z=M.count;for(let H=L,W=L+z;H<W;H+=3)P(e.getX(H+0)),P(e.getX(H+1)),P(e.getX(H+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Un(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let u=0,f=i.count;u<f;u++)i.setXYZ(u,0,0,0);const s=new U,r=new U,a=new U,o=new U,h=new U,l=new U,c=new U,d=new U;if(e)for(let u=0,f=e.count;u<f;u+=3){const g=e.getX(u+0),_=e.getX(u+1),m=e.getX(u+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),c.subVectors(a,r),d.subVectors(s,r),c.cross(d),o.fromBufferAttribute(i,g),h.fromBufferAttribute(i,_),l.fromBufferAttribute(i,m),o.add(c),h.add(c),l.add(c),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(_,h.x,h.y,h.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let u=0,f=t.count;u<f;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),c.subVectors(a,r),d.subVectors(s,r),c.cross(d),i.setXYZ(u+0,c.x,c.y,c.z),i.setXYZ(u+1,c.x,c.y,c.z),i.setXYZ(u+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)It.fromBufferAttribute(e,t),It.normalize(),e.setXYZ(t,It.x,It.y,It.z)}toNonIndexed(){function e(o,h){const l=o.array,c=o.itemSize,d=o.normalized,u=new l.constructor(h.length*c);let f=0,g=0;for(let _=0,m=h.length;_<m;_++){o.isInterleavedBufferAttribute?f=h[_]*o.data.stride+o.offset:f=h[_]*c;for(let p=0;p<c;p++)u[g++]=l[f++]}return new Un(u,c,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new sn,i=this.index.array,s=this.attributes;for(const o in s){const h=s[o],l=e(h,i);t.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const h=[],l=r[o];for(let c=0,d=l.length;c<d;c++){const u=l[c],f=e(u,i);h.push(f)}t.morphAttributes[o]=h}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,h=a.length;o<h;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const l in h)h[l]!==void 0&&(e[l]=h[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const h in i){const l=i[h];e.data.attributes[h]=l.toJSON(e.data)}const s={};let r=!1;for(const h in this.morphAttributes){const l=this.morphAttributes[h],c=[];for(let d=0,u=l.length;d<u;d++){const f=l[d];c.push(f.toJSON(e.data))}c.length>0&&(s[h]=c,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const l in s){const c=s[l];this.setAttribute(l,c.clone(t))}const r=e.morphAttributes;for(const l in r){const c=[],d=r[l];for(let u=0,f=d.length;u<f;u++)c.push(d[u].clone(t));this.morphAttributes[l]=c}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,c=a.length;l<c;l++){const d=a[l];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ch=new ht,Ui=new pc,ra=new so,hh=new U,aa=new U,oa=new U,la=new U,Uo=new U,ca=new U,dh=new U,ha=new U;class Te extends Ct{constructor(e=new sn,t=new wt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){ca.set(0,0,0);for(let h=0,l=r.length;h<l;h++){const c=o[h],d=r[h];c!==0&&(Uo.fromBufferAttribute(d,e),a?ca.addScaledVector(Uo,c):ca.addScaledVector(Uo.sub(t),c))}t.add(ca)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ra.copy(i.boundingSphere),ra.applyMatrix4(r),Ui.copy(e.ray).recast(e.near),!(ra.containsPoint(Ui.origin)===!1&&(Ui.intersectSphere(ra,hh)===null||Ui.origin.distanceToSquared(hh)>(e.far-e.near)**2))&&(ch.copy(r).invert(),Ui.copy(e.ray).applyMatrix4(ch),!(i.boundingBox!==null&&Ui.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ui)))}_computeIntersections(e,t,i){let s;const r=this.geometry,a=this.material,o=r.index,h=r.attributes.position,l=r.attributes.uv,c=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=u.length;g<_;g++){const m=u[g],p=a[m.materialIndex],b=Math.max(m.start,f.start),E=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let v=b,A=E;v<A;v+=3){const T=o.getX(v),P=o.getX(v+1),D=o.getX(v+2);s=da(this,p,e,i,l,c,d,T,P,D),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const b=o.getX(m),E=o.getX(m+1),v=o.getX(m+2);s=da(this,a,e,i,l,c,d,b,E,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(h!==void 0)if(Array.isArray(a))for(let g=0,_=u.length;g<_;g++){const m=u[g],p=a[m.materialIndex],b=Math.max(m.start,f.start),E=Math.min(h.count,Math.min(m.start+m.count,f.start+f.count));for(let v=b,A=E;v<A;v+=3){const T=v,P=v+1,D=v+2;s=da(this,p,e,i,l,c,d,T,P,D),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(h.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const b=m,E=m+1,v=m+2;s=da(this,a,e,i,l,c,d,b,E,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function yp(n,e,t,i,s,r,a,o){let h;if(e.side===nn?h=i.intersectTriangle(a,r,s,!0,o):h=i.intersectTriangle(s,r,a,e.side===Ti,o),h===null)return null;ha.copy(o),ha.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(ha);return l<t.near||l>t.far?null:{distance:l,point:ha.clone(),object:n}}function da(n,e,t,i,s,r,a,o,h,l){n.getVertexPosition(o,aa),n.getVertexPosition(h,oa),n.getVertexPosition(l,la);const c=yp(n,e,t,i,aa,oa,la,dh);if(c){const d=new U;dn.getBarycoord(dh,aa,oa,la,d),s&&(c.uv=dn.getInterpolatedAttribute(s,o,h,l,d,new Re)),r&&(c.uv1=dn.getInterpolatedAttribute(r,o,h,l,d,new Re)),a&&(c.normal=dn.getInterpolatedAttribute(a,o,h,l,d,new U),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const u={a:o,b:h,c:l,normal:new U,materialIndex:0};dn.getNormal(aa,oa,la,u.normal),c.face=u,c.barycoord=d}return c}class Xn extends sn{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const h=[],l=[],c=[],d=[];let u=0,f=0;g("z","y","x",-1,-1,i,t,e,a,r,0),g("z","y","x",1,-1,i,t,-e,a,r,1),g("x","z","y",1,1,e,i,t,s,a,2),g("x","z","y",1,-1,e,i,-t,s,a,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(h),this.setAttribute("position",new Mt(l,3)),this.setAttribute("normal",new Mt(c,3)),this.setAttribute("uv",new Mt(d,2));function g(_,m,p,b,E,v,A,T,P,D,S){const M=v/P,L=A/D,z=v/2,H=A/2,W=T/2,Y=P+1,X=D+1;let ne=0,G=0;const ae=new U;for(let he=0;he<X;he++){const Ee=he*L-H;for(let He=0;He<Y;He++){const at=He*M-z;ae[_]=at*b,ae[m]=Ee*E,ae[p]=W,l.push(ae.x,ae.y,ae.z),ae[_]=0,ae[m]=0,ae[p]=T>0?1:-1,c.push(ae.x,ae.y,ae.z),d.push(He/P),d.push(1-he/D),ne+=1}}for(let he=0;he<D;he++)for(let Ee=0;Ee<P;Ee++){const He=u+Ee+Y*he,at=u+Ee+Y*(he+1),dt=u+(Ee+1)+Y*(he+1),Ze=u+(Ee+1)+Y*he;h.push(He,at,Ze),h.push(at,dt,Ze),G+=6}o.addGroup(f,G,S),f+=G,u+=ne}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ws(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function $t(n){const e={};for(let t=0;t<n.length;t++){const i=Ws(n[t]);for(const s in i)e[s]=i[s]}return e}function Mp(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function qd(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:je.workingColorSpace}const Sp={clone:Ws,merge:$t};var bp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ep=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ai extends ls{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=bp,this.fragmentShader=Ep,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ws(e.uniforms),this.uniformsGroups=Mp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Yd extends Ct{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ht,this.projectionMatrix=new ht,this.projectionMatrixInverse=new ht,this.coordinateSystem=Hn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const _i=new U,uh=new Re,fh=new Re;class hn extends Yd{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ur*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ns*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ur*2*Math.atan(Math.tan(Ns*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){_i.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(_i.x,_i.y).multiplyScalar(-e/_i.z),_i.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(_i.x,_i.y).multiplyScalar(-e/_i.z)}getViewSize(e,t){return this.getViewBounds(e,uh,fh),t.subVectors(fh,uh)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ns*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const h=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/h,t-=a.offsetY*i/l,s*=a.width/h,i*=a.height/l}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ms=-90,Ss=1;class wp extends Ct{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new hn(Ms,Ss,e,t);s.layers=this.layers,this.add(s);const r=new hn(Ms,Ss,e,t);r.layers=this.layers,this.add(r);const a=new hn(Ms,Ss,e,t);a.layers=this.layers,this.add(a);const o=new hn(Ms,Ss,e,t);o.layers=this.layers,this.add(o);const h=new hn(Ms,Ss,e,t);h.layers=this.layers,this.add(h);const l=new hn(Ms,Ss,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,h]=t;for(const l of t)this.remove(l);if(e===Hn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===Wa)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,h,l,c]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,a),e.setRenderTarget(i,2,s),e.render(t,o),e.setRenderTarget(i,3,s),e.render(t,h),e.setRenderTarget(i,4,s),e.render(t,l),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,s),e.render(t,c),e.setRenderTarget(d,u,f),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class $d extends Ft{constructor(e=[],t=Hs,i,s,r,a,o,h,l,c){super(e,t,i,s,r,a,o,h,l,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Tp extends ss{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new $d(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Xn(5,5,5),r=new Ai({name:"CubemapFromEquirect",uniforms:Ws(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:nn,blending:bi});r.uniforms.tEquirect.value=t;const a=new Te(s,r),o=t.minFilter;return t.minFilter===$i&&(t.minFilter=Bn),new wp(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}}class Ht extends Ct{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ap={type:"move"};class No{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ht,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ht,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ht,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null;const o=this._targetRay,h=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,i),p=this._getHandJoint(l,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const c=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],u=c.position.distanceTo(d.position),f=.02,g=.005;l.inputState.pinching&&u>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&u<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(h.matrix.fromArray(r.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,r.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(r.linearVelocity)):h.hasLinearVelocity=!1,r.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(r.angularVelocity)):h.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Ap)))}return o!==null&&(o.visible=s!==null),h!==null&&(h.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Ht;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class gc{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new Ve(e),this.near=t,this.far=i}clone(){return new gc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Rp extends Ct{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Wn,this.environmentIntensity=1,this.environmentRotation=new Wn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Cp{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Wl,this.updateRanges=[],this.version=0,this.uuid=oi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=oi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=oi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const qt=new U;class Xa{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)qt.fromBufferAttribute(this,t),qt.applyMatrix4(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)qt.fromBufferAttribute(this,t),qt.applyNormalMatrix(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)qt.fromBufferAttribute(this,t),qt.transformDirection(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=Pn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Qe(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=Qe(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Qe(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Qe(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Qe(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Pn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Pn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Pn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Pn(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Qe(t,this.array),i=Qe(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Qe(t,this.array),i=Qe(i,this.array),s=Qe(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Qe(t,this.array),i=Qe(i,this.array),s=Qe(s,this.array),r=Qe(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Un(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Xa(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class qa extends ls{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ve(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let bs;const or=new U,Es=new U,ws=new U,Ts=new Re,lr=new Re,Kd=new ht,ua=new U,cr=new U,fa=new U,ph=new Re,Fo=new Re,mh=new Re;class Xl extends Ct{constructor(e=new qa){if(super(),this.isSprite=!0,this.type="Sprite",bs===void 0){bs=new sn;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Cp(t,5);bs.setIndex([0,1,2,0,2,3]),bs.setAttribute("position",new Xa(i,3,0,!1)),bs.setAttribute("uv",new Xa(i,2,3,!1))}this.geometry=bs,this.material=e,this.center=new Re(.5,.5),this.count=1}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Es.setFromMatrixScale(this.matrixWorld),Kd.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ws.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Es.multiplyScalar(-ws.z);const i=this.material.rotation;let s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));const a=this.center;pa(ua.set(-.5,-.5,0),ws,a,Es,s,r),pa(cr.set(.5,-.5,0),ws,a,Es,s,r),pa(fa.set(.5,.5,0),ws,a,Es,s,r),ph.set(0,0),Fo.set(1,0),mh.set(1,1);let o=e.ray.intersectTriangle(ua,cr,fa,!1,or);if(o===null&&(pa(cr.set(-.5,.5,0),ws,a,Es,s,r),Fo.set(0,1),o=e.ray.intersectTriangle(ua,fa,cr,!1,or),o===null))return;const h=e.ray.origin.distanceTo(or);h<e.near||h>e.far||t.push({distance:h,point:or.clone(),uv:dn.getInterpolation(or,ua,cr,fa,ph,Fo,mh,new Re),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function pa(n,e,t,i,s,r){Ts.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(lr.x=r*Ts.x-s*Ts.y,lr.y=s*Ts.x+r*Ts.y):lr.copy(Ts),n.copy(e),n.x+=lr.x,n.y+=lr.y,n.applyMatrix4(Kd)}const ko=new U,Pp=new U,Dp=new ze;class Oi{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=ko.subVectors(i,t).cross(Pp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(ko),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Dp.getNormalMatrix(e),s=this.coplanarPoint(ko).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ni=new so,Lp=new Re(.5,.5),ma=new U;class _c{constructor(e=new Oi,t=new Oi,i=new Oi,s=new Oi,r=new Oi,a=new Oi){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Hn,i=!1){const s=this.planes,r=e.elements,a=r[0],o=r[1],h=r[2],l=r[3],c=r[4],d=r[5],u=r[6],f=r[7],g=r[8],_=r[9],m=r[10],p=r[11],b=r[12],E=r[13],v=r[14],A=r[15];if(s[0].setComponents(l-a,f-c,p-g,A-b).normalize(),s[1].setComponents(l+a,f+c,p+g,A+b).normalize(),s[2].setComponents(l+o,f+d,p+_,A+E).normalize(),s[3].setComponents(l-o,f-d,p-_,A-E).normalize(),i)s[4].setComponents(h,u,m,v).normalize(),s[5].setComponents(l-h,f-u,p-m,A-v).normalize();else if(s[4].setComponents(l-h,f-u,p-m,A-v).normalize(),t===Hn)s[5].setComponents(l+h,f+u,p+m,A+v).normalize();else if(t===Wa)s[5].setComponents(h,u,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ni.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ni.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ni)}intersectsSprite(e){Ni.center.set(0,0,0);const t=Lp.distanceTo(e.center);return Ni.radius=.7071067811865476+t,Ni.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ni)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(ma.x=s.normal.x>0?e.max.x:e.min.x,ma.y=s.normal.y>0?e.max.y:e.min.y,ma.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ma)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class jd extends ls{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ve(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ya=new U,$a=new U,gh=new ht,hr=new pc,ga=new so,zo=new U,_h=new U;class Ip extends Ct{constructor(e=new sn,t=new jd){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)Ya.fromBufferAttribute(t,s-1),$a.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Ya.distanceTo($a);e.setAttribute("lineDistance",new Mt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ga.copy(i.boundingSphere),ga.applyMatrix4(s),ga.radius+=r,e.ray.intersectsSphere(ga)===!1)return;gh.copy(s).invert(),hr.copy(e.ray).applyMatrix4(gh);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),h=o*o,l=this.isLineSegments?2:1,c=i.index,u=i.attributes.position;if(c!==null){const f=Math.max(0,a.start),g=Math.min(c.count,a.start+a.count);for(let _=f,m=g-1;_<m;_+=l){const p=c.getX(_),b=c.getX(_+1),E=_a(this,e,hr,h,p,b,_);E&&t.push(E)}if(this.isLineLoop){const _=c.getX(g-1),m=c.getX(f),p=_a(this,e,hr,h,_,m,g-1);p&&t.push(p)}}else{const f=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let _=f,m=g-1;_<m;_+=l){const p=_a(this,e,hr,h,_,_+1,_);p&&t.push(p)}if(this.isLineLoop){const _=_a(this,e,hr,h,g-1,f,g-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function _a(n,e,t,i,s,r,a){const o=n.geometry.attributes.position;if(Ya.fromBufferAttribute(o,s),$a.fromBufferAttribute(o,r),t.distanceSqToSegment(Ya,$a,zo,_h)>i)return;zo.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(zo);if(!(l<e.near||l>e.far))return{distance:l,point:_h.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}const xh=new U,vh=new U;class Up extends Ip{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)xh.fromBufferAttribute(t,s),vh.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+xh.distanceTo(vh);e.setAttribute("lineDistance",new Mt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Ci extends Ft{constructor(e,t,i,s,r,a,o,h,l){super(e,t,i,s,r,a,o,h,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Zd extends Ft{constructor(e,t,i=is,s,r,a,o=In,h=In,l,c=Lr,d=1){if(c!==Lr&&c!==Ir)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:t,depth:d};super(u,s,r,a,o,h,c,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new fc(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Jd extends Ft{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class rs extends sn{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);const r=[],a=[],o=[],h=[],l=new U,c=new Re;a.push(0,0,0),o.push(0,0,1),h.push(.5,.5);for(let d=0,u=3;d<=t;d++,u+=3){const f=i+d/t*s;l.x=e*Math.cos(f),l.y=e*Math.sin(f),a.push(l.x,l.y,l.z),o.push(0,0,1),c.x=(a[u]/e+1)/2,c.y=(a[u+1]/e+1)/2,h.push(c.x,c.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new Mt(a,3)),this.setAttribute("normal",new Mt(o,3)),this.setAttribute("uv",new Mt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rs(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class jt extends sn{constructor(e=1,t=1,i=1,s=32,r=1,a=!1,o=0,h=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:h};const l=this;s=Math.floor(s),r=Math.floor(r);const c=[],d=[],u=[],f=[];let g=0;const _=[],m=i/2;let p=0;b(),a===!1&&(e>0&&E(!0),t>0&&E(!1)),this.setIndex(c),this.setAttribute("position",new Mt(d,3)),this.setAttribute("normal",new Mt(u,3)),this.setAttribute("uv",new Mt(f,2));function b(){const v=new U,A=new U;let T=0;const P=(t-e)/i;for(let D=0;D<=r;D++){const S=[],M=D/r,L=M*(t-e)+e;for(let z=0;z<=s;z++){const H=z/s,W=H*h+o,Y=Math.sin(W),X=Math.cos(W);A.x=L*Y,A.y=-M*i+m,A.z=L*X,d.push(A.x,A.y,A.z),v.set(Y,P,X).normalize(),u.push(v.x,v.y,v.z),f.push(H,1-M),S.push(g++)}_.push(S)}for(let D=0;D<s;D++)for(let S=0;S<r;S++){const M=_[S][D],L=_[S+1][D],z=_[S+1][D+1],H=_[S][D+1];(e>0||S!==0)&&(c.push(M,L,H),T+=3),(t>0||S!==r-1)&&(c.push(L,z,H),T+=3)}l.addGroup(p,T,0),p+=T}function E(v){const A=g,T=new Re,P=new U;let D=0;const S=v===!0?e:t,M=v===!0?1:-1;for(let z=1;z<=s;z++)d.push(0,m*M,0),u.push(0,M,0),f.push(.5,.5),g++;const L=g;for(let z=0;z<=s;z++){const W=z/s*h+o,Y=Math.cos(W),X=Math.sin(W);P.x=S*X,P.y=m*M,P.z=S*Y,d.push(P.x,P.y,P.z),u.push(0,M,0),T.x=Y*.5+.5,T.y=X*.5*M+.5,f.push(T.x,T.y),g++}for(let z=0;z<s;z++){const H=A+z,W=L+z;v===!0?c.push(W,W+1,H):c.push(W+1,W,H),D+=3}l.addGroup(p,D,v===!0?1:2),p+=D}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jt(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class xc extends jt{constructor(e=1,t=1,i=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,i,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new xc(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}const xa=new U,va=new U,Oo=new U,ya=new dn;class Np extends sn{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const s=Math.pow(10,4),r=Math.cos(Ns*t),a=e.getIndex(),o=e.getAttribute("position"),h=a?a.count:o.count,l=[0,0,0],c=["a","b","c"],d=new Array(3),u={},f=[];for(let g=0;g<h;g+=3){a?(l[0]=a.getX(g),l[1]=a.getX(g+1),l[2]=a.getX(g+2)):(l[0]=g,l[1]=g+1,l[2]=g+2);const{a:_,b:m,c:p}=ya;if(_.fromBufferAttribute(o,l[0]),m.fromBufferAttribute(o,l[1]),p.fromBufferAttribute(o,l[2]),ya.getNormal(Oo),d[0]=`${Math.round(_.x*s)},${Math.round(_.y*s)},${Math.round(_.z*s)}`,d[1]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,d[2]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let b=0;b<3;b++){const E=(b+1)%3,v=d[b],A=d[E],T=ya[c[b]],P=ya[c[E]],D=`${v}_${A}`,S=`${A}_${v}`;S in u&&u[S]?(Oo.dot(u[S].normal)<=r&&(f.push(T.x,T.y,T.z),f.push(P.x,P.y,P.z)),u[S]=null):D in u||(u[D]={index0:l[b],index1:l[E],normal:Oo.clone()})}}for(const g in u)if(u[g]){const{index0:_,index1:m}=u[g];xa.fromBufferAttribute(o,_),va.fromBufferAttribute(o,m),f.push(xa.x,xa.y,xa.z),f.push(va.x,va.y,va.z)}this.setAttribute("position",new Mt(f,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Wt extends sn{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(i),h=Math.floor(s),l=o+1,c=h+1,d=e/o,u=t/h,f=[],g=[],_=[],m=[];for(let p=0;p<c;p++){const b=p*u-a;for(let E=0;E<l;E++){const v=E*d-r;g.push(v,-b,0),_.push(0,0,1),m.push(E/o),m.push(1-p/h)}}for(let p=0;p<h;p++)for(let b=0;b<o;b++){const E=b+l*p,v=b+l*(p+1),A=b+1+l*(p+1),T=b+1+l*p;f.push(E,v,T),f.push(v,A,T)}this.setIndex(f),this.setAttribute("position",new Mt(g,3)),this.setAttribute("normal",new Mt(_,3)),this.setAttribute("uv",new Mt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wt(e.width,e.height,e.widthSegments,e.heightSegments)}}class as extends sn{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const h=Math.min(a+o,Math.PI);let l=0;const c=[],d=new U,u=new U,f=[],g=[],_=[],m=[];for(let p=0;p<=i;p++){const b=[],E=p/i;let v=0;p===0&&a===0?v=.5/t:p===i&&h===Math.PI&&(v=-.5/t);for(let A=0;A<=t;A++){const T=A/t;d.x=-e*Math.cos(s+T*r)*Math.sin(a+E*o),d.y=e*Math.cos(a+E*o),d.z=e*Math.sin(s+T*r)*Math.sin(a+E*o),g.push(d.x,d.y,d.z),u.copy(d).normalize(),_.push(u.x,u.y,u.z),m.push(T+v,1-E),b.push(l++)}c.push(b)}for(let p=0;p<i;p++)for(let b=0;b<t;b++){const E=c[p][b+1],v=c[p][b],A=c[p+1][b],T=c[p+1][b+1];(p!==0||a>0)&&f.push(E,v,T),(p!==i-1||h<Math.PI)&&f.push(v,A,T)}this.setIndex(f),this.setAttribute("position",new Mt(g,3)),this.setAttribute("normal",new Mt(_,3)),this.setAttribute("uv",new Mt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new as(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class vc extends sn{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);const a=[],o=[],h=[],l=[],c=new U,d=new U,u=new U;for(let f=0;f<=i;f++)for(let g=0;g<=s;g++){const _=g/s*r,m=f/i*Math.PI*2;d.x=(e+t*Math.cos(m))*Math.cos(_),d.y=(e+t*Math.cos(m))*Math.sin(_),d.z=t*Math.sin(m),o.push(d.x,d.y,d.z),c.x=e*Math.cos(_),c.y=e*Math.sin(_),u.subVectors(d,c).normalize(),h.push(u.x,u.y,u.z),l.push(g/s),l.push(f/i)}for(let f=1;f<=i;f++)for(let g=1;g<=s;g++){const _=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,p=(s+1)*(f-1)+g,b=(s+1)*f+g;a.push(_,m,b),a.push(m,p,b)}this.setIndex(a),this.setAttribute("position",new Mt(o,3)),this.setAttribute("normal",new Mt(h,3)),this.setAttribute("uv",new Mt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vc(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class hi extends ls{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ve(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Od,this.normalScale=new Re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Qd extends ls{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Df,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Fp extends ls{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Bo={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class kp{constructor(e,t,i){const s=this;let r=!1,a=0,o=0,h;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.abortController=new AbortController,this.itemStart=function(c){o++,r===!1&&s.onStart!==void 0&&s.onStart(c,a,o),r=!0},this.itemEnd=function(c){a++,s.onProgress!==void 0&&s.onProgress(c,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(c){s.onError!==void 0&&s.onError(c)},this.resolveURL=function(c){return h?h(c):c},this.setURLModifier=function(c){return h=c,this},this.addHandler=function(c,d){return l.push(c,d),this},this.removeHandler=function(c){const d=l.indexOf(c);return d!==-1&&l.splice(d,2),this},this.getHandler=function(c){for(let d=0,u=l.length;d<u;d+=2){const f=l[d],g=l[d+1];if(f.global&&(f.lastIndex=0),f.test(c))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const zp=new kp;class yc{constructor(e){this.manager=e!==void 0?e:zp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}yc.DEFAULT_MATERIAL_NAME="__DEFAULT";const As=new WeakMap;class Op extends yc{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=Bo.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let d=As.get(a);d===void 0&&(d=[],As.set(a,d)),d.push({onLoad:t,onError:s})}return a}const o=Nr("img");function h(){c(),t&&t(this);const d=As.get(this)||[];for(let u=0;u<d.length;u++){const f=d[u];f.onLoad&&f.onLoad(this)}As.delete(this),r.manager.itemEnd(e)}function l(d){c(),s&&s(d),Bo.remove(`image:${e}`);const u=As.get(this)||[];for(let f=0;f<u.length;f++){const g=u[f];g.onError&&g.onError(d)}As.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function c(){o.removeEventListener("load",h,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",h,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Bo.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}}class eu extends yc{constructor(e){super(e)}load(e,t,i,s){const r=new Ft,a=new Op(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}}class Mc extends Ct{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ve(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Bp extends Mc{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ct.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ve(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Ho=new ht,yh=new U,Mh=new U;class tu{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Re(512,512),this.mapType=Vn,this.map=null,this.mapPass=null,this.matrix=new ht,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new _c,this._frameExtents=new Re(1,1),this._viewportCount=1,this._viewports=[new st(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;yh.setFromMatrixPosition(e.matrixWorld),t.position.copy(yh),Mh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Mh),t.updateMatrixWorld(),Ho.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ho,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ho)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Sh=new ht,dr=new U,Go=new U;class Hp extends tu{constructor(){super(new hn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Re(4,2),this._viewportCount=6,this._viewports=[new st(2,1,1,1),new st(0,1,1,1),new st(3,1,1,1),new st(1,1,1,1),new st(3,0,1,1),new st(1,0,1,1)],this._cubeDirections=[new U(1,0,0),new U(-1,0,0),new U(0,0,1),new U(0,0,-1),new U(0,1,0),new U(0,-1,0)],this._cubeUps=[new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,0,1),new U(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),dr.setFromMatrixPosition(e.matrixWorld),i.position.copy(dr),Go.copy(i.position),Go.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Go),i.updateMatrixWorld(),s.makeTranslation(-dr.x,-dr.y,-dr.z),Sh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Sh,i.coordinateSystem,i.reversedDepth)}}class Sc extends Mc{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Hp}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class nu extends Yd{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,a=i+e,o=s+t,h=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=c*this.view.offsetY,h=o-c*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,h,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Gp extends tu{constructor(){super(new nu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Vp extends Mc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ct.DEFAULT_UP),this.updateMatrix(),this.target=new Ct,this.shadow=new Gp}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Wp extends hn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Xp{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const bh=new ht;class qp{constructor(e,t,i=0,s=1/0){this.ray=new pc(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new mc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return bh.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(bh),this}intersectObject(e,t=!0,i=[]){return ql(e,this,i,t),i.sort(Eh),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)ql(e[s],this,i,t);return i.sort(Eh),i}}function Eh(n,e){return n.distance-e.distance}function ql(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let a=0,o=r.length;a<o;a++)ql(r[a],e,t,!0)}}function wh(n,e,t,i){const s=Yp(i);switch(t){case Ud:return n*e;case Fd:return n*e/s.components*s.byteLength;case cc:return n*e/s.components*s.byteLength;case kd:return n*e*2/s.components*s.byteLength;case hc:return n*e*2/s.components*s.byteLength;case Nd:return n*e*3/s.components*s.byteLength;case Ln:return n*e*4/s.components*s.byteLength;case dc:return n*e*4/s.components*s.byteLength;case Na:case Fa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ka:case za:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case _l:case vl:return Math.max(n,16)*Math.max(e,8)/4;case gl:case xl:return Math.max(n,8)*Math.max(e,8)/2;case yl:case Ml:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Sl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case bl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case El:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case wl:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Tl:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Al:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Rl:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Cl:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Pl:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Dl:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Ll:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Il:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Ul:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Nl:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Fl:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case kl:case zl:case Ol:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Bl:case Hl:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Gl:case Vl:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Yp(n){switch(n){case Vn:case Pd:return{byteLength:1,components:1};case Pr:case Dd:case Hr:return{byteLength:2,components:1};case oc:case lc:return{byteLength:2,components:4};case is:case ac:case ai:return{byteLength:4,components:1};case Ld:case Id:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:rc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=rc);function iu(){let n=null,e=!1,t=null,i=null;function s(r,a){t(r,a),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function $p(n){const e=new WeakMap;function t(o,h){const l=o.array,c=o.usage,d=l.byteLength,u=n.createBuffer();n.bindBuffer(h,u),n.bufferData(h,l,c),o.onUploadCallback();let f;if(l instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=n.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=n.SHORT;else if(l instanceof Uint32Array)f=n.UNSIGNED_INT;else if(l instanceof Int32Array)f=n.INT;else if(l instanceof Int8Array)f=n.BYTE;else if(l instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,h,l){const c=h.array,d=h.updateRanges;if(n.bindBuffer(l,o),d.length===0)n.bufferSubData(l,0,c);else{d.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<d.length;f++){const g=d[u],_=d[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++u,d[u]=_)}d.length=u+1;for(let f=0,g=d.length;f<g;f++){const _=d[f];n.bufferSubData(l,_.start*c.BYTES_PER_ELEMENT,c,_.start,_.count)}h.clearUpdateRanges()}h.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const h=e.get(o);h&&(n.deleteBuffer(h.buffer),e.delete(o))}function a(o,h){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const c=e.get(o);(!c||c.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,h));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,h),l.version=o.version}}return{get:s,remove:r,update:a}}var Kp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,jp=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Zp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Jp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Qp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,em=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,tm=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,nm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,im=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,sm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,rm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,am=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,om=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,lm=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,cm=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,hm=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,dm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,um=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,fm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,pm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,mm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,gm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,_m=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,xm=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,vm=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,ym=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Mm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Sm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,bm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Em=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,wm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Tm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Am=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Rm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Cm=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Pm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Dm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Lm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Im=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Um=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Nm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Fm=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,km=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,zm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Om=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Bm=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Hm=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Gm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Vm=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Wm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Xm=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,qm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Ym=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,$m=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Km=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,jm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Zm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Jm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,e0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,t0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,n0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,i0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,s0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,r0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,a0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,o0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,l0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,c0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,h0=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,d0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,u0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,f0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,p0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,m0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,g0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,_0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,x0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,v0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,y0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,M0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,S0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,b0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,E0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,w0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,T0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,A0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,R0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,C0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,P0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,D0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,L0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,I0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,U0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,N0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,F0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,k0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,z0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,O0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,B0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,H0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,G0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,V0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,W0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,X0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,q0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Y0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const $0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,K0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,j0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Z0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,J0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Q0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,tg=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,ng=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,ig=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,sg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,rg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ag=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,og=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,lg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,cg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ug=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,fg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,mg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,gg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_g=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,vg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Mg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,bg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Eg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Tg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ag=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Be={alphahash_fragment:Kp,alphahash_pars_fragment:jp,alphamap_fragment:Zp,alphamap_pars_fragment:Jp,alphatest_fragment:Qp,alphatest_pars_fragment:em,aomap_fragment:tm,aomap_pars_fragment:nm,batching_pars_vertex:im,batching_vertex:sm,begin_vertex:rm,beginnormal_vertex:am,bsdfs:om,iridescence_fragment:lm,bumpmap_pars_fragment:cm,clipping_planes_fragment:hm,clipping_planes_pars_fragment:dm,clipping_planes_pars_vertex:um,clipping_planes_vertex:fm,color_fragment:pm,color_pars_fragment:mm,color_pars_vertex:gm,color_vertex:_m,common:xm,cube_uv_reflection_fragment:vm,defaultnormal_vertex:ym,displacementmap_pars_vertex:Mm,displacementmap_vertex:Sm,emissivemap_fragment:bm,emissivemap_pars_fragment:Em,colorspace_fragment:wm,colorspace_pars_fragment:Tm,envmap_fragment:Am,envmap_common_pars_fragment:Rm,envmap_pars_fragment:Cm,envmap_pars_vertex:Pm,envmap_physical_pars_fragment:Hm,envmap_vertex:Dm,fog_vertex:Lm,fog_pars_vertex:Im,fog_fragment:Um,fog_pars_fragment:Nm,gradientmap_pars_fragment:Fm,lightmap_pars_fragment:km,lights_lambert_fragment:zm,lights_lambert_pars_fragment:Om,lights_pars_begin:Bm,lights_toon_fragment:Gm,lights_toon_pars_fragment:Vm,lights_phong_fragment:Wm,lights_phong_pars_fragment:Xm,lights_physical_fragment:qm,lights_physical_pars_fragment:Ym,lights_fragment_begin:$m,lights_fragment_maps:Km,lights_fragment_end:jm,logdepthbuf_fragment:Zm,logdepthbuf_pars_fragment:Jm,logdepthbuf_pars_vertex:Qm,logdepthbuf_vertex:e0,map_fragment:t0,map_pars_fragment:n0,map_particle_fragment:i0,map_particle_pars_fragment:s0,metalnessmap_fragment:r0,metalnessmap_pars_fragment:a0,morphinstance_vertex:o0,morphcolor_vertex:l0,morphnormal_vertex:c0,morphtarget_pars_vertex:h0,morphtarget_vertex:d0,normal_fragment_begin:u0,normal_fragment_maps:f0,normal_pars_fragment:p0,normal_pars_vertex:m0,normal_vertex:g0,normalmap_pars_fragment:_0,clearcoat_normal_fragment_begin:x0,clearcoat_normal_fragment_maps:v0,clearcoat_pars_fragment:y0,iridescence_pars_fragment:M0,opaque_fragment:S0,packing:b0,premultiplied_alpha_fragment:E0,project_vertex:w0,dithering_fragment:T0,dithering_pars_fragment:A0,roughnessmap_fragment:R0,roughnessmap_pars_fragment:C0,shadowmap_pars_fragment:P0,shadowmap_pars_vertex:D0,shadowmap_vertex:L0,shadowmask_pars_fragment:I0,skinbase_vertex:U0,skinning_pars_vertex:N0,skinning_vertex:F0,skinnormal_vertex:k0,specularmap_fragment:z0,specularmap_pars_fragment:O0,tonemapping_fragment:B0,tonemapping_pars_fragment:H0,transmission_fragment:G0,transmission_pars_fragment:V0,uv_pars_fragment:W0,uv_pars_vertex:X0,uv_vertex:q0,worldpos_vertex:Y0,background_vert:$0,background_frag:K0,backgroundCube_vert:j0,backgroundCube_frag:Z0,cube_vert:J0,cube_frag:Q0,depth_vert:eg,depth_frag:tg,distanceRGBA_vert:ng,distanceRGBA_frag:ig,equirect_vert:sg,equirect_frag:rg,linedashed_vert:ag,linedashed_frag:og,meshbasic_vert:lg,meshbasic_frag:cg,meshlambert_vert:hg,meshlambert_frag:dg,meshmatcap_vert:ug,meshmatcap_frag:fg,meshnormal_vert:pg,meshnormal_frag:mg,meshphong_vert:gg,meshphong_frag:_g,meshphysical_vert:xg,meshphysical_frag:vg,meshtoon_vert:yg,meshtoon_frag:Mg,points_vert:Sg,points_frag:bg,shadow_vert:Eg,shadow_frag:wg,sprite_vert:Tg,sprite_frag:Ag},re={common:{diffuse:{value:new Ve(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ze}},envmap:{envMap:{value:null},envMapRotation:{value:new ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ze},normalScale:{value:new Re(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0},uvTransform:{value:new ze}},sprite:{diffuse:{value:new Ve(16777215)},opacity:{value:1},center:{value:new Re(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}}},zn={basic:{uniforms:$t([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.fog]),vertexShader:Be.meshbasic_vert,fragmentShader:Be.meshbasic_frag},lambert:{uniforms:$t([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new Ve(0)}}]),vertexShader:Be.meshlambert_vert,fragmentShader:Be.meshlambert_frag},phong:{uniforms:$t([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new Ve(0)},specular:{value:new Ve(1118481)},shininess:{value:30}}]),vertexShader:Be.meshphong_vert,fragmentShader:Be.meshphong_frag},standard:{uniforms:$t([re.common,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.roughnessmap,re.metalnessmap,re.fog,re.lights,{emissive:{value:new Ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag},toon:{uniforms:$t([re.common,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.gradientmap,re.fog,re.lights,{emissive:{value:new Ve(0)}}]),vertexShader:Be.meshtoon_vert,fragmentShader:Be.meshtoon_frag},matcap:{uniforms:$t([re.common,re.bumpmap,re.normalmap,re.displacementmap,re.fog,{matcap:{value:null}}]),vertexShader:Be.meshmatcap_vert,fragmentShader:Be.meshmatcap_frag},points:{uniforms:$t([re.points,re.fog]),vertexShader:Be.points_vert,fragmentShader:Be.points_frag},dashed:{uniforms:$t([re.common,re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Be.linedashed_vert,fragmentShader:Be.linedashed_frag},depth:{uniforms:$t([re.common,re.displacementmap]),vertexShader:Be.depth_vert,fragmentShader:Be.depth_frag},normal:{uniforms:$t([re.common,re.bumpmap,re.normalmap,re.displacementmap,{opacity:{value:1}}]),vertexShader:Be.meshnormal_vert,fragmentShader:Be.meshnormal_frag},sprite:{uniforms:$t([re.sprite,re.fog]),vertexShader:Be.sprite_vert,fragmentShader:Be.sprite_frag},background:{uniforms:{uvTransform:{value:new ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Be.background_vert,fragmentShader:Be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ze}},vertexShader:Be.backgroundCube_vert,fragmentShader:Be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Be.cube_vert,fragmentShader:Be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Be.equirect_vert,fragmentShader:Be.equirect_frag},distanceRGBA:{uniforms:$t([re.common,re.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Be.distanceRGBA_vert,fragmentShader:Be.distanceRGBA_frag},shadow:{uniforms:$t([re.lights,re.fog,{color:{value:new Ve(0)},opacity:{value:1}}]),vertexShader:Be.shadow_vert,fragmentShader:Be.shadow_frag}};zn.physical={uniforms:$t([zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ze},clearcoatNormalScale:{value:new Re(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ze},sheen:{value:0},sheenColor:{value:new Ve(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ze},transmissionSamplerSize:{value:new Re},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ze},attenuationDistance:{value:0},attenuationColor:{value:new Ve(0)},specularColor:{value:new Ve(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ze},anisotropyVector:{value:new Re},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ze}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag};const Ma={r:0,b:0,g:0},Fi=new Wn,Rg=new ht;function Cg(n,e,t,i,s,r,a){const o=new Ve(0);let h=r===!0?0:1,l,c,d=null,u=0,f=null;function g(E){let v=E.isScene===!0?E.background:null;return v&&v.isTexture&&(v=(E.backgroundBlurriness>0?t:e).get(v)),v}function _(E){let v=!1;const A=g(E);A===null?p(o,h):A&&A.isColor&&(p(A,1),v=!0);const T=n.xr.getEnvironmentBlendMode();T==="additive"?i.buffers.color.setClear(0,0,0,1,a):T==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(E,v){const A=g(v);A&&(A.isCubeTexture||A.mapping===io)?(c===void 0&&(c=new Te(new Xn(1,1,1),new Ai({name:"BackgroundCubeMaterial",uniforms:Ws(zn.backgroundCube.uniforms),vertexShader:zn.backgroundCube.vertexShader,fragmentShader:zn.backgroundCube.fragmentShader,side:nn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,P,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(c)),Fi.copy(v.backgroundRotation),Fi.x*=-1,Fi.y*=-1,Fi.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Fi.y*=-1,Fi.z*=-1),c.material.uniforms.envMap.value=A,c.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Rg.makeRotationFromEuler(Fi)),c.material.toneMapped=je.getTransfer(A.colorSpace)!==nt,(d!==A||u!==A.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,d=A,u=A.version,f=n.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null)):A&&A.isTexture&&(l===void 0&&(l=new Te(new Wt(2,2),new Ai({name:"BackgroundMaterial",uniforms:Ws(zn.background.uniforms),vertexShader:zn.background.vertexShader,fragmentShader:zn.background.fragmentShader,side:Ti,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=A,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=je.getTransfer(A.colorSpace)!==nt,A.matrixAutoUpdate===!0&&A.updateMatrix(),l.material.uniforms.uvTransform.value.copy(A.matrix),(d!==A||u!==A.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,d=A,u=A.version,f=n.toneMapping),l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null))}function p(E,v){E.getRGB(Ma,qd(n)),i.buffers.color.setClear(Ma.r,Ma.g,Ma.b,v,a)}function b(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(E,v=1){o.set(E),h=v,p(o,h)},getClearAlpha:function(){return h},setClearAlpha:function(E){h=E,p(o,h)},render:_,addToRenderList:m,dispose:b}}function Pg(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=u(null);let r=s,a=!1;function o(M,L,z,H,W){let Y=!1;const X=d(H,z,L);r!==X&&(r=X,l(r.object)),Y=f(M,H,z,W),Y&&g(M,H,z,W),W!==null&&e.update(W,n.ELEMENT_ARRAY_BUFFER),(Y||a)&&(a=!1,v(M,L,z,H),W!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function h(){return n.createVertexArray()}function l(M){return n.bindVertexArray(M)}function c(M){return n.deleteVertexArray(M)}function d(M,L,z){const H=z.wireframe===!0;let W=i[M.id];W===void 0&&(W={},i[M.id]=W);let Y=W[L.id];Y===void 0&&(Y={},W[L.id]=Y);let X=Y[H];return X===void 0&&(X=u(h()),Y[H]=X),X}function u(M){const L=[],z=[],H=[];for(let W=0;W<t;W++)L[W]=0,z[W]=0,H[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:z,attributeDivisors:H,object:M,attributes:{},index:null}}function f(M,L,z,H){const W=r.attributes,Y=L.attributes;let X=0;const ne=z.getAttributes();for(const G in ne)if(ne[G].location>=0){const he=W[G];let Ee=Y[G];if(Ee===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(Ee=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(Ee=M.instanceColor)),he===void 0||he.attribute!==Ee||Ee&&he.data!==Ee.data)return!0;X++}return r.attributesNum!==X||r.index!==H}function g(M,L,z,H){const W={},Y=L.attributes;let X=0;const ne=z.getAttributes();for(const G in ne)if(ne[G].location>=0){let he=Y[G];he===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(he=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(he=M.instanceColor));const Ee={};Ee.attribute=he,he&&he.data&&(Ee.data=he.data),W[G]=Ee,X++}r.attributes=W,r.attributesNum=X,r.index=H}function _(){const M=r.newAttributes;for(let L=0,z=M.length;L<z;L++)M[L]=0}function m(M){p(M,0)}function p(M,L){const z=r.newAttributes,H=r.enabledAttributes,W=r.attributeDivisors;z[M]=1,H[M]===0&&(n.enableVertexAttribArray(M),H[M]=1),W[M]!==L&&(n.vertexAttribDivisor(M,L),W[M]=L)}function b(){const M=r.newAttributes,L=r.enabledAttributes;for(let z=0,H=L.length;z<H;z++)L[z]!==M[z]&&(n.disableVertexAttribArray(z),L[z]=0)}function E(M,L,z,H,W,Y,X){X===!0?n.vertexAttribIPointer(M,L,z,W,Y):n.vertexAttribPointer(M,L,z,H,W,Y)}function v(M,L,z,H){_();const W=H.attributes,Y=z.getAttributes(),X=L.defaultAttributeValues;for(const ne in Y){const G=Y[ne];if(G.location>=0){let ae=W[ne];if(ae===void 0&&(ne==="instanceMatrix"&&M.instanceMatrix&&(ae=M.instanceMatrix),ne==="instanceColor"&&M.instanceColor&&(ae=M.instanceColor)),ae!==void 0){const he=ae.normalized,Ee=ae.itemSize,He=e.get(ae);if(He===void 0)continue;const at=He.buffer,dt=He.type,Ze=He.bytesPerElement,$=dt===n.INT||dt===n.UNSIGNED_INT||ae.gpuType===ac;if(ae.isInterleavedBufferAttribute){const Z=ae.data,fe=Z.stride,Ie=ae.offset;if(Z.isInstancedInterleavedBuffer){for(let Se=0;Se<G.locationSize;Se++)p(G.location+Se,Z.meshPerAttribute);M.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let Se=0;Se<G.locationSize;Se++)m(G.location+Se);n.bindBuffer(n.ARRAY_BUFFER,at);for(let Se=0;Se<G.locationSize;Se++)E(G.location+Se,Ee/G.locationSize,dt,he,fe*Ze,(Ie+Ee/G.locationSize*Se)*Ze,$)}else{if(ae.isInstancedBufferAttribute){for(let Z=0;Z<G.locationSize;Z++)p(G.location+Z,ae.meshPerAttribute);M.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let Z=0;Z<G.locationSize;Z++)m(G.location+Z);n.bindBuffer(n.ARRAY_BUFFER,at);for(let Z=0;Z<G.locationSize;Z++)E(G.location+Z,Ee/G.locationSize,dt,he,Ee*Ze,Ee/G.locationSize*Z*Ze,$)}}else if(X!==void 0){const he=X[ne];if(he!==void 0)switch(he.length){case 2:n.vertexAttrib2fv(G.location,he);break;case 3:n.vertexAttrib3fv(G.location,he);break;case 4:n.vertexAttrib4fv(G.location,he);break;default:n.vertexAttrib1fv(G.location,he)}}}}b()}function A(){D();for(const M in i){const L=i[M];for(const z in L){const H=L[z];for(const W in H)c(H[W].object),delete H[W];delete L[z]}delete i[M]}}function T(M){if(i[M.id]===void 0)return;const L=i[M.id];for(const z in L){const H=L[z];for(const W in H)c(H[W].object),delete H[W];delete L[z]}delete i[M.id]}function P(M){for(const L in i){const z=i[L];if(z[M.id]===void 0)continue;const H=z[M.id];for(const W in H)c(H[W].object),delete H[W];delete z[M.id]}}function D(){S(),a=!0,r!==s&&(r=s,l(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:D,resetDefaultState:S,dispose:A,releaseStatesOfGeometry:T,releaseStatesOfProgram:P,initAttributes:_,enableAttribute:m,disableUnusedAttributes:b}}function Dg(n,e,t){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),t.update(c,i,1)}function a(l,c,d){d!==0&&(n.drawArraysInstanced(i,l,c,d),t.update(c,i,d))}function o(l,c,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,d);let f=0;for(let g=0;g<d;g++)f+=c[g];t.update(f,i,1)}function h(l,c,d,u){if(d===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)a(l[g],c[g],u[g]);else{f.multiDrawArraysInstancedWEBGL(i,l,0,c,0,u,0,d);let g=0;for(let _=0;_<d;_++)g+=c[_]*u[_];t.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=h}function Lg(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(P){return!(P!==Ln&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(P){const D=P===Hr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==Vn&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==ai&&!D)}function h(P){if(P==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const c=h(l);c!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",c,"instead."),l=c);const d=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),b=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),E=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),A=g>0,T=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:h,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:b,maxVaryings:E,maxFragmentUniforms:v,vertexTextures:A,maxSamples:T}}function Ig(n){const e=this;let t=null,i=0,s=!1,r=!1;const a=new Oi,o=new ze,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const f=d.length!==0||u||i!==0||s;return s=u,i=d.length,f},this.beginShadows=function(){r=!0,c(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){t=c(d,u,0)},this.setState=function(d,u,f){const g=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,p=n.get(d);if(!s||g===null||g.length===0||r&&!m)r?c(null):l();else{const b=r?0:i,E=b*4;let v=p.clippingState||null;h.value=v,v=c(g,u,E,f);for(let A=0;A!==E;++A)v[A]=t[A];p.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=b}};function l(){h.value!==t&&(h.value=t,h.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(d,u,f,g){const _=d!==null?d.length:0;let m=null;if(_!==0){if(m=h.value,g!==!0||m===null){const p=f+_*4,b=u.matrixWorldInverse;o.getNormalMatrix(b),(m===null||m.length<p)&&(m=new Float32Array(p));for(let E=0,v=f;E!==_;++E,v+=4)a.copy(d[E]).applyMatrix4(b,o),a.normal.toArray(m,v),m[v+3]=a.constant}h.value=m,h.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function Ug(n){let e=new WeakMap;function t(a,o){return o===fl?a.mapping=Hs:o===pl&&(a.mapping=Gs),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===fl||o===pl)if(e.has(a)){const h=e.get(a).texture;return t(h,a.mapping)}else{const h=a.image;if(h&&h.height>0){const l=new Tp(h.height);return l.fromEquirectangularTexture(n,a),e.set(a,l),a.addEventListener("dispose",s),t(l.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const h=e.get(o);h!==void 0&&(e.delete(o),h.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}const Ls=4,Th=[.125,.215,.35,.446,.526,.582],Xi=20,Vo=new nu,Ah=new Ve;let Wo=null,Xo=0,qo=0,Yo=!1;const Bi=(1+Math.sqrt(5))/2,Rs=1/Bi,Rh=[new U(-Bi,Rs,0),new U(Bi,Rs,0),new U(-Rs,0,Bi),new U(Rs,0,Bi),new U(0,Bi,-Rs),new U(0,Bi,Rs),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)],Ng=new U;class Ch{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100,r={}){const{size:a=256,position:o=Ng}=r;Wo=this._renderer.getRenderTarget(),Xo=this._renderer.getActiveCubeFace(),qo=this._renderer.getActiveMipmapLevel(),Yo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(e,i,s,h,o),t>0&&this._blur(h,0,0,t),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Lh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Dh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Wo,Xo,qo),this._renderer.xr.enabled=Yo,e.scissorTest=!1,Sa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Hs||e.mapping===Gs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Wo=this._renderer.getRenderTarget(),Xo=this._renderer.getActiveCubeFace(),qo=this._renderer.getActiveMipmapLevel(),Yo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Bn,minFilter:Bn,generateMipmaps:!1,type:Hr,format:Ln,colorSpace:Vs,depthBuffer:!1},s=Ph(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ph(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Fg(r)),this._blurMaterial=kg(r,e,t)}return s}_compileMaterial(e){const t=new Te(this._lodPlanes[0],e);this._renderer.compile(t,Vo)}_sceneToCubeUV(e,t,i,s,r){const h=new hn(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(Ah),d.toneMapping=Ei,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null));const _=new wt({name:"PMREM.Background",side:nn,depthWrite:!1,depthTest:!1}),m=new Te(new Xn,_);let p=!1;const b=e.background;b?b.isColor&&(_.color.copy(b),e.background=null,p=!0):(_.color.copy(Ah),p=!0);for(let E=0;E<6;E++){const v=E%3;v===0?(h.up.set(0,l[E],0),h.position.set(r.x,r.y,r.z),h.lookAt(r.x+c[E],r.y,r.z)):v===1?(h.up.set(0,0,l[E]),h.position.set(r.x,r.y,r.z),h.lookAt(r.x,r.y+c[E],r.z)):(h.up.set(0,l[E],0),h.position.set(r.x,r.y,r.z),h.lookAt(r.x,r.y,r.z+c[E]));const A=this._cubeSize;Sa(s,v*A,E>2?A:0,A,A),d.setRenderTarget(s),p&&d.render(m,h),d.render(e,h)}m.geometry.dispose(),m.material.dispose(),d.toneMapping=f,d.autoClear=u,e.background=b}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===Hs||e.mapping===Gs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Lh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Dh());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new Te(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const h=this._cubeSize;Sa(t,0,0,3*h,2*h),i.setRenderTarget(t),i.render(a,Vo)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Rh[(s-r-1)%Rh.length];this._blur(e,r-1,r,a,o)}t.autoClear=i}_blur(e,t,i,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,s,"latitudinal",r),this._halfBlur(a,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,a,o){const h=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,d=new Te(this._lodPlanes[s],l),u=l.uniforms,f=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Xi-1),_=r/g,m=isFinite(r)?1+Math.floor(c*_):Xi;m>Xi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Xi}`);const p=[];let b=0;for(let P=0;P<Xi;++P){const D=P/_,S=Math.exp(-D*D/2);p.push(S),P===0?b+=S:P<m&&(b+=2*S)}for(let P=0;P<p.length;P++)p[P]=p[P]/b;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=p,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:E}=this;u.dTheta.value=g,u.mipInt.value=E-i;const v=this._sizeLods[s],A=3*v*(s>E-Ls?s-E+Ls:0),T=4*(this._cubeSize-v);Sa(t,A,T,3*v,2*v),h.setRenderTarget(t),h.render(d,Vo)}}function Fg(n){const e=[],t=[],i=[];let s=n;const r=n-Ls+1+Th.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);t.push(o);let h=1/o;a>n-Ls?h=Th[a-n+Ls-1]:a===0&&(h=0),i.push(h);const l=1/(o-2),c=-l,d=1+l,u=[c,c,d,c,d,d,c,c,d,d,c,d],f=6,g=6,_=3,m=2,p=1,b=new Float32Array(_*g*f),E=new Float32Array(m*g*f),v=new Float32Array(p*g*f);for(let T=0;T<f;T++){const P=T%3*2/3-1,D=T>2?0:-1,S=[P,D,0,P+2/3,D,0,P+2/3,D+1,0,P,D,0,P+2/3,D+1,0,P,D+1,0];b.set(S,_*g*T),E.set(u,m*g*T);const M=[T,T,T,T,T,T];v.set(M,p*g*T)}const A=new sn;A.setAttribute("position",new Un(b,_)),A.setAttribute("uv",new Un(E,m)),A.setAttribute("faceIndex",new Un(v,p)),e.push(A),s>Ls&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Ph(n,e,t){const i=new ss(n,e,t);return i.texture.mapping=io,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Sa(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function kg(n,e,t){const i=new Float32Array(Xi),s=new U(0,1,0);return new Ai({name:"SphericalGaussianBlur",defines:{n:Xi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:bc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:bi,depthTest:!1,depthWrite:!1})}function Dh(){return new Ai({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:bc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:bi,depthTest:!1,depthWrite:!1})}function Lh(){return new Ai({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:bc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:bi,depthTest:!1,depthWrite:!1})}function bc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function zg(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const h=o.mapping,l=h===fl||h===pl,c=h===Hs||h===Gs;if(l||c){let d=e.get(o);const u=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==u)return t===null&&(t=new Ch(n)),d=l?t.fromEquirectangular(o,d):t.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),d.texture;if(d!==void 0)return d.texture;{const f=o.image;return l&&f&&f.height>0||c&&f&&s(f)?(t===null&&(t=new Ch(n)),d=l?t.fromEquirectangular(o):t.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),o.addEventListener("dispose",r),d.texture):null}}}return o}function s(o){let h=0;const l=6;for(let c=0;c<l;c++)o[c]!==void 0&&h++;return h===l}function r(o){const h=o.target;h.removeEventListener("dispose",r);const l=e.get(h);l!==void 0&&(e.delete(h),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function Og(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&Fr("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function Bg(n,e,t,i){const s={},r=new WeakMap;function a(d){const u=d.target;u.index!==null&&e.remove(u.index);for(const g in u.attributes)e.remove(u.attributes[g]);u.removeEventListener("dispose",a),delete s[u.id];const f=r.get(u);f&&(e.remove(f),r.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(d,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,t.memory.geometries++),u}function h(d){const u=d.attributes;for(const f in u)e.update(u[f],n.ARRAY_BUFFER)}function l(d){const u=[],f=d.index,g=d.attributes.position;let _=0;if(f!==null){const b=f.array;_=f.version;for(let E=0,v=b.length;E<v;E+=3){const A=b[E+0],T=b[E+1],P=b[E+2];u.push(A,T,T,P,P,A)}}else if(g!==void 0){const b=g.array;_=g.version;for(let E=0,v=b.length/3-1;E<v;E+=3){const A=E+0,T=E+1,P=E+2;u.push(A,T,T,P,P,A)}}else return;const m=new(Hd(u)?Xd:Wd)(u,1);m.version=_;const p=r.get(d);p&&e.remove(p),r.set(d,m)}function c(d){const u=r.get(d);if(u){const f=d.index;f!==null&&u.version<f.version&&l(d)}else l(d);return r.get(d)}return{get:o,update:h,getWireframeAttribute:c}}function Hg(n,e,t){let i;function s(u){i=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function h(u,f){n.drawElements(i,f,r,u*a),t.update(f,i,1)}function l(u,f,g){g!==0&&(n.drawElementsInstanced(i,f,r,u*a,g),t.update(f,i,g))}function c(u,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,u,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,i,1)}function d(u,f,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<u.length;p++)l(u[p]/a,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(i,f,0,r,u,0,_,0,g);let p=0;for(let b=0;b<g;b++)p+=f[b]*_[b];t.update(p,i,1)}}this.setMode=s,this.setIndex=o,this.render=h,this.renderInstances=l,this.renderMultiDraw=c,this.renderMultiDrawInstances=d}function Gg(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function Vg(n,e,t){const i=new WeakMap,s=new st;function r(a,o,h){const l=a.morphTargetInfluences,c=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=c!==void 0?c.length:0;let u=i.get(o);if(u===void 0||u.count!==d){let S=function(){P.dispose(),i.delete(o),o.removeEventListener("dispose",S)};u!==void 0&&u.texture.dispose();const f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],b=o.morphAttributes.color||[];let E=0;f===!0&&(E=1),g===!0&&(E=2),_===!0&&(E=3);let v=o.attributes.position.count*E,A=1;v>e.maxTextureSize&&(A=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);const T=new Float32Array(v*A*4*d),P=new Gd(T,v,A,d);P.type=ai,P.needsUpdate=!0;const D=E*4;for(let M=0;M<d;M++){const L=m[M],z=p[M],H=b[M],W=v*A*4*M;for(let Y=0;Y<L.count;Y++){const X=Y*D;f===!0&&(s.fromBufferAttribute(L,Y),T[W+X+0]=s.x,T[W+X+1]=s.y,T[W+X+2]=s.z,T[W+X+3]=0),g===!0&&(s.fromBufferAttribute(z,Y),T[W+X+4]=s.x,T[W+X+5]=s.y,T[W+X+6]=s.z,T[W+X+7]=0),_===!0&&(s.fromBufferAttribute(H,Y),T[W+X+8]=s.x,T[W+X+9]=s.y,T[W+X+10]=s.z,T[W+X+11]=H.itemSize===4?s.w:1)}}u={count:d,texture:P,size:new Re(v,A)},i.set(o,u),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)h.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let f=0;for(let _=0;_<l.length;_++)f+=l[_];const g=o.morphTargetsRelative?1:1-f;h.getUniforms().setValue(n,"morphTargetBaseInfluence",g),h.getUniforms().setValue(n,"morphTargetInfluences",l)}h.getUniforms().setValue(n,"morphTargetsTexture",u.texture,t),h.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:r}}function Wg(n,e,t,i){let s=new WeakMap;function r(h){const l=i.render.frame,c=h.geometry,d=e.get(h,c);if(s.get(d)!==l&&(e.update(d),s.set(d,l)),h.isInstancedMesh&&(h.hasEventListener("dispose",o)===!1&&h.addEventListener("dispose",o),s.get(h)!==l&&(t.update(h.instanceMatrix,n.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,n.ARRAY_BUFFER),s.set(h,l))),h.isSkinnedMesh){const u=h.skeleton;s.get(u)!==l&&(u.update(),s.set(u,l))}return d}function a(){s=new WeakMap}function o(h){const l=h.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:a}}const su=new Ft,Ih=new Zd(1,1),ru=new Gd,au=new cp,ou=new $d,Uh=[],Nh=[],Fh=new Float32Array(16),kh=new Float32Array(9),zh=new Float32Array(4);function js(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=Uh[s];if(r===void 0&&(r=new Float32Array(s),Uh[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function Pt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Dt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function ro(n,e){let t=Nh[e];t===void 0&&(t=new Int32Array(e),Nh[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Xg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function qg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;n.uniform2fv(this.addr,e),Dt(t,e)}}function Yg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Pt(t,e))return;n.uniform3fv(this.addr,e),Dt(t,e)}}function $g(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;n.uniform4fv(this.addr,e),Dt(t,e)}}function Kg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Pt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Dt(t,e)}else{if(Pt(t,i))return;zh.set(i),n.uniformMatrix2fv(this.addr,!1,zh),Dt(t,i)}}function jg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Pt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Dt(t,e)}else{if(Pt(t,i))return;kh.set(i),n.uniformMatrix3fv(this.addr,!1,kh),Dt(t,i)}}function Zg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Pt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Dt(t,e)}else{if(Pt(t,i))return;Fh.set(i),n.uniformMatrix4fv(this.addr,!1,Fh),Dt(t,i)}}function Jg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Qg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;n.uniform2iv(this.addr,e),Dt(t,e)}}function e_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pt(t,e))return;n.uniform3iv(this.addr,e),Dt(t,e)}}function t_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;n.uniform4iv(this.addr,e),Dt(t,e)}}function n_(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function i_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;n.uniform2uiv(this.addr,e),Dt(t,e)}}function s_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pt(t,e))return;n.uniform3uiv(this.addr,e),Dt(t,e)}}function r_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;n.uniform4uiv(this.addr,e),Dt(t,e)}}function a_(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Ih.compareFunction=Bd,r=Ih):r=su,t.setTexture2D(e||r,s)}function o_(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||au,s)}function l_(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||ou,s)}function c_(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||ru,s)}function h_(n){switch(n){case 5126:return Xg;case 35664:return qg;case 35665:return Yg;case 35666:return $g;case 35674:return Kg;case 35675:return jg;case 35676:return Zg;case 5124:case 35670:return Jg;case 35667:case 35671:return Qg;case 35668:case 35672:return e_;case 35669:case 35673:return t_;case 5125:return n_;case 36294:return i_;case 36295:return s_;case 36296:return r_;case 35678:case 36198:case 36298:case 36306:case 35682:return a_;case 35679:case 36299:case 36307:return o_;case 35680:case 36300:case 36308:case 36293:return l_;case 36289:case 36303:case 36311:case 36292:return c_}}function d_(n,e){n.uniform1fv(this.addr,e)}function u_(n,e){const t=js(e,this.size,2);n.uniform2fv(this.addr,t)}function f_(n,e){const t=js(e,this.size,3);n.uniform3fv(this.addr,t)}function p_(n,e){const t=js(e,this.size,4);n.uniform4fv(this.addr,t)}function m_(n,e){const t=js(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function g_(n,e){const t=js(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function __(n,e){const t=js(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function x_(n,e){n.uniform1iv(this.addr,e)}function v_(n,e){n.uniform2iv(this.addr,e)}function y_(n,e){n.uniform3iv(this.addr,e)}function M_(n,e){n.uniform4iv(this.addr,e)}function S_(n,e){n.uniform1uiv(this.addr,e)}function b_(n,e){n.uniform2uiv(this.addr,e)}function E_(n,e){n.uniform3uiv(this.addr,e)}function w_(n,e){n.uniform4uiv(this.addr,e)}function T_(n,e,t){const i=this.cache,s=e.length,r=ro(t,s);Pt(i,r)||(n.uniform1iv(this.addr,r),Dt(i,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||su,r[a])}function A_(n,e,t){const i=this.cache,s=e.length,r=ro(t,s);Pt(i,r)||(n.uniform1iv(this.addr,r),Dt(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||au,r[a])}function R_(n,e,t){const i=this.cache,s=e.length,r=ro(t,s);Pt(i,r)||(n.uniform1iv(this.addr,r),Dt(i,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||ou,r[a])}function C_(n,e,t){const i=this.cache,s=e.length,r=ro(t,s);Pt(i,r)||(n.uniform1iv(this.addr,r),Dt(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||ru,r[a])}function P_(n){switch(n){case 5126:return d_;case 35664:return u_;case 35665:return f_;case 35666:return p_;case 35674:return m_;case 35675:return g_;case 35676:return __;case 5124:case 35670:return x_;case 35667:case 35671:return v_;case 35668:case 35672:return y_;case 35669:case 35673:return M_;case 5125:return S_;case 36294:return b_;case 36295:return E_;case 36296:return w_;case 35678:case 36198:case 36298:case 36306:case 35682:return T_;case 35679:case 36299:case 36307:return A_;case 35680:case 36300:case 36308:case 36293:return R_;case 36289:case 36303:case 36311:case 36292:return C_}}class D_{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=h_(t.type)}}class L_{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=P_(t.type)}}class I_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],i)}}}const $o=/(\w+)(\])?(\[|\.)?/g;function Oh(n,e){n.seq.push(e),n.map[e.id]=e}function U_(n,e,t){const i=n.name,s=i.length;for($o.lastIndex=0;;){const r=$o.exec(i),a=$o.lastIndex;let o=r[1];const h=r[2]==="]",l=r[3];if(h&&(o=o|0),l===void 0||l==="["&&a+2===s){Oh(t,l===void 0?new D_(o,n,e):new L_(o,n,e));break}else{let d=t.map[o];d===void 0&&(d=new I_(o),Oh(t,d)),t=d}}}class Oa{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);U_(r,a,this)}}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],h=i[o.id];h.needsUpdate!==!1&&o.setValue(e,h.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&i.push(a)}return i}}function Bh(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const N_=37297;let F_=0;function k_(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const Hh=new ze;function z_(n){je._getMatrix(Hh,je.workingColorSpace,n);const e=`mat3( ${Hh.elements.map(t=>t.toFixed(4))} )`;switch(je.getTransfer(n)){case Va:return[e,"LinearTransferOETF"];case nt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Gh(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+k_(n.getShaderSource(e),o)}else return r}function O_(n,e){const t=z_(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function B_(n,e){let t;switch(e){case bf:t="Linear";break;case Ef:t="Reinhard";break;case wf:t="Cineon";break;case Tf:t="ACESFilmic";break;case Rf:t="AgX";break;case Cf:t="Neutral";break;case Af:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ba=new U;function H_(){je.getLuminanceCoefficients(ba);const n=ba.x.toFixed(4),e=ba.y.toFixed(4),t=ba.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function G_(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(xr).join(`
`)}function V_(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function W_(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),a=r.name;let o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function xr(n){return n!==""}function Vh(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Wh(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const X_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Yl(n){return n.replace(X_,Y_)}const q_=new Map;function Y_(n,e){let t=Be[e];if(t===void 0){const i=q_.get(e);if(i!==void 0)t=Be[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Yl(t)}const $_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Xh(n){return n.replace($_,K_)}function K_(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function qh(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function j_(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Td?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Ad?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===ei&&(e="SHADOWMAP_TYPE_VSM"),e}function Z_(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Hs:case Gs:e="ENVMAP_TYPE_CUBE";break;case io:e="ENVMAP_TYPE_CUBE_UV";break}return e}function J_(n){let e="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===Gs&&(e="ENVMAP_MODE_REFRACTION"),e}function Q_(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Rd:e="ENVMAP_BLENDING_MULTIPLY";break;case Mf:e="ENVMAP_BLENDING_MIX";break;case Sf:e="ENVMAP_BLENDING_ADD";break}return e}function ex(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function tx(n,e,t,i){const s=n.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const h=j_(t),l=Z_(t),c=J_(t),d=Q_(t),u=ex(t),f=G_(t),g=V_(r),_=s.createProgram();let m,p,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(xr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(xr).join(`
`),p.length>0&&(p+=`
`)):(m=[qh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(xr).join(`
`),p=[qh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ei?"#define TONE_MAPPING":"",t.toneMapping!==Ei?Be.tonemapping_pars_fragment:"",t.toneMapping!==Ei?B_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Be.colorspace_pars_fragment,O_("linearToOutputTexel",t.outputColorSpace),H_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(xr).join(`
`)),a=Yl(a),a=Vh(a,t),a=Wh(a,t),o=Yl(o),o=Vh(o,t),o=Wh(o,t),a=Xh(a),o=Xh(o),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Kc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Kc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const E=b+m+a,v=b+p+o,A=Bh(s,s.VERTEX_SHADER,E),T=Bh(s,s.FRAGMENT_SHADER,v);s.attachShader(_,A),s.attachShader(_,T),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function P(L){if(n.debug.checkShaderErrors){const z=s.getProgramInfoLog(_)||"",H=s.getShaderInfoLog(A)||"",W=s.getShaderInfoLog(T)||"",Y=z.trim(),X=H.trim(),ne=W.trim();let G=!0,ae=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(G=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,A,T);else{const he=Gh(s,A,"vertex"),Ee=Gh(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+Y+`
`+he+`
`+Ee)}else Y!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Y):(X===""||ne==="")&&(ae=!1);ae&&(L.diagnostics={runnable:G,programLog:Y,vertexShader:{log:X,prefix:m},fragmentShader:{log:ne,prefix:p}})}s.deleteShader(A),s.deleteShader(T),D=new Oa(s,_),S=W_(s,_)}let D;this.getUniforms=function(){return D===void 0&&P(this),D};let S;this.getAttributes=function(){return S===void 0&&P(this),S};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(_,N_)),M},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=F_++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=A,this.fragmentShader=T,this}let nx=0;class ix{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new sx(e),t.set(e,i)),i}}class sx{constructor(e){this.id=nx++,this.code=e,this.usedTimes=0}}function rx(n,e,t,i,s,r,a){const o=new mc,h=new ix,l=new Set,c=[],d=s.logarithmicDepthBuffer,u=s.vertexTextures;let f=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return l.add(S),S===0?"uv":`uv${S}`}function m(S,M,L,z,H){const W=z.fog,Y=H.geometry,X=S.isMeshStandardMaterial?z.environment:null,ne=(S.isMeshStandardMaterial?t:e).get(S.envMap||X),G=ne&&ne.mapping===io?ne.image.height:null,ae=g[S.type];S.precision!==null&&(f=s.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));const he=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,Ee=he!==void 0?he.length:0;let He=0;Y.morphAttributes.position!==void 0&&(He=1),Y.morphAttributes.normal!==void 0&&(He=2),Y.morphAttributes.color!==void 0&&(He=3);let at,dt,Ze,$;if(ae){const Je=zn[ae];at=Je.vertexShader,dt=Je.fragmentShader}else at=S.vertexShader,dt=S.fragmentShader,h.update(S),Ze=h.getVertexShaderID(S),$=h.getFragmentShaderID(S);const Z=n.getRenderTarget(),fe=n.state.buffers.depth.getReversed(),Ie=H.isInstancedMesh===!0,Se=H.isBatchedMesh===!0,$e=!!S.map,kt=!!S.matcap,R=!!ne,ut=!!S.aoMap,Fe=!!S.lightMap,De=!!S.bumpMap,ge=!!S.normalMap,ft=!!S.displacementMap,_e=!!S.emissiveMap,Oe=!!S.metalnessMap,Lt=!!S.roughnessMap,St=S.anisotropy>0,w=S.clearcoat>0,x=S.dispersion>0,k=S.iridescence>0,q=S.sheen>0,j=S.transmission>0,V=St&&!!S.anisotropyMap,Me=w&&!!S.clearcoatMap,ie=w&&!!S.clearcoatNormalMap,xe=w&&!!S.clearcoatRoughnessMap,ve=k&&!!S.iridescenceMap,ee=k&&!!S.iridescenceThicknessMap,ce=q&&!!S.sheenColorMap,Pe=q&&!!S.sheenRoughnessMap,ye=!!S.specularMap,oe=!!S.specularColorMap,ke=!!S.specularIntensityMap,I=j&&!!S.transmissionMap,te=j&&!!S.thicknessMap,se=!!S.gradientMap,ue=!!S.alphaMap,J=S.alphaTest>0,K=!!S.alphaHash,me=!!S.extensions;let Ue=Ei;S.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(Ue=n.toneMapping);const ot={shaderID:ae,shaderType:S.type,shaderName:S.name,vertexShader:at,fragmentShader:dt,defines:S.defines,customVertexShaderID:Ze,customFragmentShaderID:$,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:Se,batchingColor:Se&&H._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&H.instanceColor!==null,instancingMorph:Ie&&H.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:Z===null?n.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:Vs,alphaToCoverage:!!S.alphaToCoverage,map:$e,matcap:kt,envMap:R,envMapMode:R&&ne.mapping,envMapCubeUVHeight:G,aoMap:ut,lightMap:Fe,bumpMap:De,normalMap:ge,displacementMap:u&&ft,emissiveMap:_e,normalMapObjectSpace:ge&&S.normalMapType===Lf,normalMapTangentSpace:ge&&S.normalMapType===Od,metalnessMap:Oe,roughnessMap:Lt,anisotropy:St,anisotropyMap:V,clearcoat:w,clearcoatMap:Me,clearcoatNormalMap:ie,clearcoatRoughnessMap:xe,dispersion:x,iridescence:k,iridescenceMap:ve,iridescenceThicknessMap:ee,sheen:q,sheenColorMap:ce,sheenRoughnessMap:Pe,specularMap:ye,specularColorMap:oe,specularIntensityMap:ke,transmission:j,transmissionMap:I,thicknessMap:te,gradientMap:se,opaque:S.transparent===!1&&S.blending===Us&&S.alphaToCoverage===!1,alphaMap:ue,alphaTest:J,alphaHash:K,combine:S.combine,mapUv:$e&&_(S.map.channel),aoMapUv:ut&&_(S.aoMap.channel),lightMapUv:Fe&&_(S.lightMap.channel),bumpMapUv:De&&_(S.bumpMap.channel),normalMapUv:ge&&_(S.normalMap.channel),displacementMapUv:ft&&_(S.displacementMap.channel),emissiveMapUv:_e&&_(S.emissiveMap.channel),metalnessMapUv:Oe&&_(S.metalnessMap.channel),roughnessMapUv:Lt&&_(S.roughnessMap.channel),anisotropyMapUv:V&&_(S.anisotropyMap.channel),clearcoatMapUv:Me&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:ie&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xe&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:ve&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:ee&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:ce&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:Pe&&_(S.sheenRoughnessMap.channel),specularMapUv:ye&&_(S.specularMap.channel),specularColorMapUv:oe&&_(S.specularColorMap.channel),specularIntensityMapUv:ke&&_(S.specularIntensityMap.channel),transmissionMapUv:I&&_(S.transmissionMap.channel),thicknessMapUv:te&&_(S.thicknessMap.channel),alphaMapUv:ue&&_(S.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(ge||St),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!Y.attributes.uv&&($e||ue),fog:!!W,useFog:S.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:fe,skinning:H.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:Ee,morphTextureStride:He,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&L.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ue,decodeVideoTexture:$e&&S.map.isVideoTexture===!0&&je.getTransfer(S.map.colorSpace)===nt,decodeVideoTextureEmissive:_e&&S.emissiveMap.isVideoTexture===!0&&je.getTransfer(S.emissiveMap.colorSpace)===nt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Bt,flipSided:S.side===nn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:me&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(me&&S.extensions.multiDraw===!0||Se)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return ot.vertexUv1s=l.has(1),ot.vertexUv2s=l.has(2),ot.vertexUv3s=l.has(3),l.clear(),ot}function p(S){const M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(const L in S.defines)M.push(L),M.push(S.defines[L]);return S.isRawShaderMaterial===!1&&(b(M,S),E(M,S),M.push(n.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function b(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function E(S,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),M.gradientMap&&o.enable(22),S.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reversedDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),S.push(o.mask)}function v(S){const M=g[S.type];let L;if(M){const z=zn[M];L=Sp.clone(z.uniforms)}else L=S.uniforms;return L}function A(S,M){let L;for(let z=0,H=c.length;z<H;z++){const W=c[z];if(W.cacheKey===M){L=W,++L.usedTimes;break}}return L===void 0&&(L=new tx(n,M,S,r),c.push(L)),L}function T(S){if(--S.usedTimes===0){const M=c.indexOf(S);c[M]=c[c.length-1],c.pop(),S.destroy()}}function P(S){h.remove(S)}function D(){h.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:A,releaseProgram:T,releaseShaderCache:P,programs:c,dispose:D}}function ax(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,h){n.get(a)[o]=h}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function ox(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Yh(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function $h(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(d,u,f,g,_,m){let p=n[e];return p===void 0?(p={id:d.id,object:d,geometry:u,material:f,groupOrder:g,renderOrder:d.renderOrder,z:_,group:m},n[e]=p):(p.id=d.id,p.object=d,p.geometry=u,p.material=f,p.groupOrder=g,p.renderOrder=d.renderOrder,p.z=_,p.group=m),e++,p}function o(d,u,f,g,_,m){const p=a(d,u,f,g,_,m);f.transmission>0?i.push(p):f.transparent===!0?s.push(p):t.push(p)}function h(d,u,f,g,_,m){const p=a(d,u,f,g,_,m);f.transmission>0?i.unshift(p):f.transparent===!0?s.unshift(p):t.unshift(p)}function l(d,u){t.length>1&&t.sort(d||ox),i.length>1&&i.sort(u||Yh),s.length>1&&s.sort(u||Yh)}function c(){for(let d=e,u=n.length;d<u;d++){const f=n[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:o,unshift:h,finish:c,sort:l}}function lx(){let n=new WeakMap;function e(i,s){const r=n.get(i);let a;return r===void 0?(a=new $h,n.set(i,[a])):s>=r.length?(a=new $h,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function cx(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new Ve};break;case"SpotLight":t={position:new U,direction:new U,color:new Ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new Ve,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new Ve,groundColor:new Ve};break;case"RectAreaLight":t={color:new Ve,position:new U,halfWidth:new U,halfHeight:new U};break}return n[e.id]=t,t}}}function hx(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let dx=0;function ux(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function fx(n){const e=new cx,t=hx(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new U);const s=new U,r=new ht,a=new ht;function o(l){let c=0,d=0,u=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,b=0,E=0,v=0,A=0,T=0,P=0;l.sort(ux);for(let S=0,M=l.length;S<M;S++){const L=l[S],z=L.color,H=L.intensity,W=L.distance,Y=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)c+=z.r*H,d+=z.g*H,u+=z.b*H;else if(L.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(L.sh.coefficients[X],H);P++}else if(L.isDirectionalLight){const X=e.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const ne=L.shadow,G=t.get(L);G.shadowIntensity=ne.intensity,G.shadowBias=ne.bias,G.shadowNormalBias=ne.normalBias,G.shadowRadius=ne.radius,G.shadowMapSize=ne.mapSize,i.directionalShadow[f]=G,i.directionalShadowMap[f]=Y,i.directionalShadowMatrix[f]=L.shadow.matrix,b++}i.directional[f]=X,f++}else if(L.isSpotLight){const X=e.get(L);X.position.setFromMatrixPosition(L.matrixWorld),X.color.copy(z).multiplyScalar(H),X.distance=W,X.coneCos=Math.cos(L.angle),X.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),X.decay=L.decay,i.spot[_]=X;const ne=L.shadow;if(L.map&&(i.spotLightMap[A]=L.map,A++,ne.updateMatrices(L),L.castShadow&&T++),i.spotLightMatrix[_]=ne.matrix,L.castShadow){const G=t.get(L);G.shadowIntensity=ne.intensity,G.shadowBias=ne.bias,G.shadowNormalBias=ne.normalBias,G.shadowRadius=ne.radius,G.shadowMapSize=ne.mapSize,i.spotShadow[_]=G,i.spotShadowMap[_]=Y,v++}_++}else if(L.isRectAreaLight){const X=e.get(L);X.color.copy(z).multiplyScalar(H),X.halfWidth.set(L.width*.5,0,0),X.halfHeight.set(0,L.height*.5,0),i.rectArea[m]=X,m++}else if(L.isPointLight){const X=e.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity),X.distance=L.distance,X.decay=L.decay,L.castShadow){const ne=L.shadow,G=t.get(L);G.shadowIntensity=ne.intensity,G.shadowBias=ne.bias,G.shadowNormalBias=ne.normalBias,G.shadowRadius=ne.radius,G.shadowMapSize=ne.mapSize,G.shadowCameraNear=ne.camera.near,G.shadowCameraFar=ne.camera.far,i.pointShadow[g]=G,i.pointShadowMap[g]=Y,i.pointShadowMatrix[g]=L.shadow.matrix,E++}i.point[g]=X,g++}else if(L.isHemisphereLight){const X=e.get(L);X.skyColor.copy(L.color).multiplyScalar(H),X.groundColor.copy(L.groundColor).multiplyScalar(H),i.hemi[p]=X,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=re.LTC_FLOAT_1,i.rectAreaLTC2=re.LTC_FLOAT_2):(i.rectAreaLTC1=re.LTC_HALF_1,i.rectAreaLTC2=re.LTC_HALF_2)),i.ambient[0]=c,i.ambient[1]=d,i.ambient[2]=u;const D=i.hash;(D.directionalLength!==f||D.pointLength!==g||D.spotLength!==_||D.rectAreaLength!==m||D.hemiLength!==p||D.numDirectionalShadows!==b||D.numPointShadows!==E||D.numSpotShadows!==v||D.numSpotMaps!==A||D.numLightProbes!==P)&&(i.directional.length=f,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=v,i.spotShadowMap.length=v,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=E,i.spotLightMatrix.length=v+A-T,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=P,D.directionalLength=f,D.pointLength=g,D.spotLength=_,D.rectAreaLength=m,D.hemiLength=p,D.numDirectionalShadows=b,D.numPointShadows=E,D.numSpotShadows=v,D.numSpotMaps=A,D.numLightProbes=P,i.version=dx++)}function h(l,c){let d=0,u=0,f=0,g=0,_=0;const m=c.matrixWorldInverse;for(let p=0,b=l.length;p<b;p++){const E=l[p];if(E.isDirectionalLight){const v=i.directional[d];v.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),d++}else if(E.isSpotLight){const v=i.spot[f];v.position.setFromMatrixPosition(E.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),f++}else if(E.isRectAreaLight){const v=i.rectArea[g];v.position.setFromMatrixPosition(E.matrixWorld),v.position.applyMatrix4(m),a.identity(),r.copy(E.matrixWorld),r.premultiply(m),a.extractRotation(r),v.halfWidth.set(E.width*.5,0,0),v.halfHeight.set(0,E.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),g++}else if(E.isPointLight){const v=i.point[u];v.position.setFromMatrixPosition(E.matrixWorld),v.position.applyMatrix4(m),u++}else if(E.isHemisphereLight){const v=i.hemi[_];v.direction.setFromMatrixPosition(E.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:o,setupView:h,state:i}}function Kh(n){const e=new fx(n),t=[],i=[];function s(c){l.camera=c,t.length=0,i.length=0}function r(c){t.push(c)}function a(c){i.push(c)}function o(){e.setup(t)}function h(c){e.setupView(t,c)}const l={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:o,setupLightsView:h,pushLight:r,pushShadow:a}}function px(n){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new Kh(n),e.set(s,[o])):r>=a.length?(o=new Kh(n),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const mx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,gx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function _x(n,e,t){let i=new _c;const s=new Re,r=new Re,a=new st,o=new Qd({depthPacking:zd}),h=new Fp,l={},c=t.maxTextureSize,d={[Ti]:nn,[nn]:Ti,[Bt]:Bt},u=new Ai({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Re},radius:{value:4}},vertexShader:mx,fragmentShader:gx}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const g=new sn;g.setAttribute("position",new Un(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Te(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Td;let p=this.type;this.render=function(T,P,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const S=n.getRenderTarget(),M=n.getActiveCubeFace(),L=n.getActiveMipmapLevel(),z=n.state;z.setBlending(bi),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const H=p!==ei&&this.type===ei,W=p===ei&&this.type!==ei;for(let Y=0,X=T.length;Y<X;Y++){const ne=T[Y],G=ne.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",ne,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);const ae=G.getFrameExtents();if(s.multiply(ae),r.copy(G.mapSize),(s.x>c||s.y>c)&&(s.x>c&&(r.x=Math.floor(c/ae.x),s.x=r.x*ae.x,G.mapSize.x=r.x),s.y>c&&(r.y=Math.floor(c/ae.y),s.y=r.y*ae.y,G.mapSize.y=r.y)),G.map===null||H===!0||W===!0){const Ee=this.type!==ei?{minFilter:In,magFilter:In}:{};G.map!==null&&G.map.dispose(),G.map=new ss(s.x,s.y,Ee),G.map.texture.name=ne.name+".shadowMap",G.camera.updateProjectionMatrix()}n.setRenderTarget(G.map),n.clear();const he=G.getViewportCount();for(let Ee=0;Ee<he;Ee++){const He=G.getViewport(Ee);a.set(r.x*He.x,r.y*He.y,r.x*He.z,r.y*He.w),z.viewport(a),G.updateMatrices(ne,Ee),i=G.getFrustum(),v(P,D,G.camera,ne,this.type)}G.isPointLightShadow!==!0&&this.type===ei&&b(G,D),G.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(S,M,L)};function b(T,P){const D=e.update(_);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new ss(s.x,s.y)),u.uniforms.shadow_pass.value=T.map.texture,u.uniforms.resolution.value=T.mapSize,u.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(P,null,D,u,_,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(P,null,D,f,_,null)}function E(T,P,D,S){let M=null;const L=D.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(L!==void 0)M=L;else if(M=D.isPointLight===!0?h:o,n.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const z=M.uuid,H=P.uuid;let W=l[z];W===void 0&&(W={},l[z]=W);let Y=W[H];Y===void 0&&(Y=M.clone(),W[H]=Y,P.addEventListener("dispose",A)),M=Y}if(M.visible=P.visible,M.wireframe=P.wireframe,S===ei?M.side=P.shadowSide!==null?P.shadowSide:P.side:M.side=P.shadowSide!==null?P.shadowSide:d[P.side],M.alphaMap=P.alphaMap,M.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,M.map=P.map,M.clipShadows=P.clipShadows,M.clippingPlanes=P.clippingPlanes,M.clipIntersection=P.clipIntersection,M.displacementMap=P.displacementMap,M.displacementScale=P.displacementScale,M.displacementBias=P.displacementBias,M.wireframeLinewidth=P.wireframeLinewidth,M.linewidth=P.linewidth,D.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const z=n.properties.get(M);z.light=D}return M}function v(T,P,D,S,M){if(T.visible===!1)return;if(T.layers.test(P.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&M===ei)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,T.matrixWorld);const H=e.update(T),W=T.material;if(Array.isArray(W)){const Y=H.groups;for(let X=0,ne=Y.length;X<ne;X++){const G=Y[X],ae=W[G.materialIndex];if(ae&&ae.visible){const he=E(T,ae,S,M);T.onBeforeShadow(n,T,P,D,H,he,G),n.renderBufferDirect(D,null,H,he,T,G),T.onAfterShadow(n,T,P,D,H,he,G)}}}else if(W.visible){const Y=E(T,W,S,M);T.onBeforeShadow(n,T,P,D,H,Y,null),n.renderBufferDirect(D,null,H,Y,T,null),T.onAfterShadow(n,T,P,D,H,Y,null)}}const z=T.children;for(let H=0,W=z.length;H<W;H++)v(z[H],P,D,S,M)}function A(T){T.target.removeEventListener("dispose",A);for(const D in l){const S=l[D],M=T.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}const xx={[al]:ol,[ll]:dl,[cl]:ul,[Bs]:hl,[ol]:al,[dl]:ll,[ul]:cl,[hl]:Bs};function vx(n,e){function t(){let I=!1;const te=new st;let se=null;const ue=new st(0,0,0,0);return{setMask:function(J){se!==J&&!I&&(n.colorMask(J,J,J,J),se=J)},setLocked:function(J){I=J},setClear:function(J,K,me,Ue,ot){ot===!0&&(J*=Ue,K*=Ue,me*=Ue),te.set(J,K,me,Ue),ue.equals(te)===!1&&(n.clearColor(J,K,me,Ue),ue.copy(te))},reset:function(){I=!1,se=null,ue.set(-1,0,0,0)}}}function i(){let I=!1,te=!1,se=null,ue=null,J=null;return{setReversed:function(K){if(te!==K){const me=e.get("EXT_clip_control");K?me.clipControlEXT(me.LOWER_LEFT_EXT,me.ZERO_TO_ONE_EXT):me.clipControlEXT(me.LOWER_LEFT_EXT,me.NEGATIVE_ONE_TO_ONE_EXT),te=K;const Ue=J;J=null,this.setClear(Ue)}},getReversed:function(){return te},setTest:function(K){K?Z(n.DEPTH_TEST):fe(n.DEPTH_TEST)},setMask:function(K){se!==K&&!I&&(n.depthMask(K),se=K)},setFunc:function(K){if(te&&(K=xx[K]),ue!==K){switch(K){case al:n.depthFunc(n.NEVER);break;case ol:n.depthFunc(n.ALWAYS);break;case ll:n.depthFunc(n.LESS);break;case Bs:n.depthFunc(n.LEQUAL);break;case cl:n.depthFunc(n.EQUAL);break;case hl:n.depthFunc(n.GEQUAL);break;case dl:n.depthFunc(n.GREATER);break;case ul:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ue=K}},setLocked:function(K){I=K},setClear:function(K){J!==K&&(te&&(K=1-K),n.clearDepth(K),J=K)},reset:function(){I=!1,se=null,ue=null,J=null,te=!1}}}function s(){let I=!1,te=null,se=null,ue=null,J=null,K=null,me=null,Ue=null,ot=null;return{setTest:function(Je){I||(Je?Z(n.STENCIL_TEST):fe(n.STENCIL_TEST))},setMask:function(Je){te!==Je&&!I&&(n.stencilMask(Je),te=Je)},setFunc:function(Je,$n,Nn){(se!==Je||ue!==$n||J!==Nn)&&(n.stencilFunc(Je,$n,Nn),se=Je,ue=$n,J=Nn)},setOp:function(Je,$n,Nn){(K!==Je||me!==$n||Ue!==Nn)&&(n.stencilOp(Je,$n,Nn),K=Je,me=$n,Ue=Nn)},setLocked:function(Je){I=Je},setClear:function(Je){ot!==Je&&(n.clearStencil(Je),ot=Je)},reset:function(){I=!1,te=null,se=null,ue=null,J=null,K=null,me=null,Ue=null,ot=null}}}const r=new t,a=new i,o=new s,h=new WeakMap,l=new WeakMap;let c={},d={},u=new WeakMap,f=[],g=null,_=!1,m=null,p=null,b=null,E=null,v=null,A=null,T=null,P=new Ve(0,0,0),D=0,S=!1,M=null,L=null,z=null,H=null,W=null;const Y=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,ne=0;const G=n.getParameter(n.VERSION);G.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(G)[1]),X=ne>=1):G.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),X=ne>=2);let ae=null,he={};const Ee=n.getParameter(n.SCISSOR_BOX),He=n.getParameter(n.VIEWPORT),at=new st().fromArray(Ee),dt=new st().fromArray(He);function Ze(I,te,se,ue){const J=new Uint8Array(4),K=n.createTexture();n.bindTexture(I,K),n.texParameteri(I,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(I,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let me=0;me<se;me++)I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY?n.texImage3D(te,0,n.RGBA,1,1,ue,0,n.RGBA,n.UNSIGNED_BYTE,J):n.texImage2D(te+me,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,J);return K}const $={};$[n.TEXTURE_2D]=Ze(n.TEXTURE_2D,n.TEXTURE_2D,1),$[n.TEXTURE_CUBE_MAP]=Ze(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[n.TEXTURE_2D_ARRAY]=Ze(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),$[n.TEXTURE_3D]=Ze(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Z(n.DEPTH_TEST),a.setFunc(Bs),De(!1),ge(Wc),Z(n.CULL_FACE),ut(bi);function Z(I){c[I]!==!0&&(n.enable(I),c[I]=!0)}function fe(I){c[I]!==!1&&(n.disable(I),c[I]=!1)}function Ie(I,te){return d[I]!==te?(n.bindFramebuffer(I,te),d[I]=te,I===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=te),I===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=te),!0):!1}function Se(I,te){let se=f,ue=!1;if(I){se=u.get(te),se===void 0&&(se=[],u.set(te,se));const J=I.textures;if(se.length!==J.length||se[0]!==n.COLOR_ATTACHMENT0){for(let K=0,me=J.length;K<me;K++)se[K]=n.COLOR_ATTACHMENT0+K;se.length=J.length,ue=!0}}else se[0]!==n.BACK&&(se[0]=n.BACK,ue=!0);ue&&n.drawBuffers(se)}function $e(I){return g!==I?(n.useProgram(I),g=I,!0):!1}const kt={[Wi]:n.FUNC_ADD,[sf]:n.FUNC_SUBTRACT,[rf]:n.FUNC_REVERSE_SUBTRACT};kt[af]=n.MIN,kt[of]=n.MAX;const R={[lf]:n.ZERO,[cf]:n.ONE,[hf]:n.SRC_COLOR,[sl]:n.SRC_ALPHA,[gf]:n.SRC_ALPHA_SATURATE,[pf]:n.DST_COLOR,[uf]:n.DST_ALPHA,[df]:n.ONE_MINUS_SRC_COLOR,[rl]:n.ONE_MINUS_SRC_ALPHA,[mf]:n.ONE_MINUS_DST_COLOR,[ff]:n.ONE_MINUS_DST_ALPHA,[_f]:n.CONSTANT_COLOR,[xf]:n.ONE_MINUS_CONSTANT_COLOR,[vf]:n.CONSTANT_ALPHA,[yf]:n.ONE_MINUS_CONSTANT_ALPHA};function ut(I,te,se,ue,J,K,me,Ue,ot,Je){if(I===bi){_===!0&&(fe(n.BLEND),_=!1);return}if(_===!1&&(Z(n.BLEND),_=!0),I!==nf){if(I!==m||Je!==S){if((p!==Wi||v!==Wi)&&(n.blendEquation(n.FUNC_ADD),p=Wi,v=Wi),Je)switch(I){case Us:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Xc:n.blendFunc(n.ONE,n.ONE);break;case qc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Yc:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Us:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Xc:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case qc:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Yc:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}b=null,E=null,A=null,T=null,P.set(0,0,0),D=0,m=I,S=Je}return}J=J||te,K=K||se,me=me||ue,(te!==p||J!==v)&&(n.blendEquationSeparate(kt[te],kt[J]),p=te,v=J),(se!==b||ue!==E||K!==A||me!==T)&&(n.blendFuncSeparate(R[se],R[ue],R[K],R[me]),b=se,E=ue,A=K,T=me),(Ue.equals(P)===!1||ot!==D)&&(n.blendColor(Ue.r,Ue.g,Ue.b,ot),P.copy(Ue),D=ot),m=I,S=!1}function Fe(I,te){I.side===Bt?fe(n.CULL_FACE):Z(n.CULL_FACE);let se=I.side===nn;te&&(se=!se),De(se),I.blending===Us&&I.transparent===!1?ut(bi):ut(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),r.setMask(I.colorWrite);const ue=I.stencilWrite;o.setTest(ue),ue&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),_e(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?Z(n.SAMPLE_ALPHA_TO_COVERAGE):fe(n.SAMPLE_ALPHA_TO_COVERAGE)}function De(I){M!==I&&(I?n.frontFace(n.CW):n.frontFace(n.CCW),M=I)}function ge(I){I!==ef?(Z(n.CULL_FACE),I!==L&&(I===Wc?n.cullFace(n.BACK):I===tf?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):fe(n.CULL_FACE),L=I}function ft(I){I!==z&&(X&&n.lineWidth(I),z=I)}function _e(I,te,se){I?(Z(n.POLYGON_OFFSET_FILL),(H!==te||W!==se)&&(n.polygonOffset(te,se),H=te,W=se)):fe(n.POLYGON_OFFSET_FILL)}function Oe(I){I?Z(n.SCISSOR_TEST):fe(n.SCISSOR_TEST)}function Lt(I){I===void 0&&(I=n.TEXTURE0+Y-1),ae!==I&&(n.activeTexture(I),ae=I)}function St(I,te,se){se===void 0&&(ae===null?se=n.TEXTURE0+Y-1:se=ae);let ue=he[se];ue===void 0&&(ue={type:void 0,texture:void 0},he[se]=ue),(ue.type!==I||ue.texture!==te)&&(ae!==se&&(n.activeTexture(se),ae=se),n.bindTexture(I,te||$[I]),ue.type=I,ue.texture=te)}function w(){const I=he[ae];I!==void 0&&I.type!==void 0&&(n.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function x(){try{n.compressedTexImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function k(){try{n.compressedTexImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function q(){try{n.texSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function j(){try{n.texSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function V(){try{n.compressedTexSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Me(){try{n.compressedTexSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ie(){try{n.texStorage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function xe(){try{n.texStorage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ve(){try{n.texImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ee(){try{n.texImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ce(I){at.equals(I)===!1&&(n.scissor(I.x,I.y,I.z,I.w),at.copy(I))}function Pe(I){dt.equals(I)===!1&&(n.viewport(I.x,I.y,I.z,I.w),dt.copy(I))}function ye(I,te){let se=l.get(te);se===void 0&&(se=new WeakMap,l.set(te,se));let ue=se.get(I);ue===void 0&&(ue=n.getUniformBlockIndex(te,I.name),se.set(I,ue))}function oe(I,te){const ue=l.get(te).get(I);h.get(te)!==ue&&(n.uniformBlockBinding(te,ue,I.__bindingPointIndex),h.set(te,ue))}function ke(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},ae=null,he={},d={},u=new WeakMap,f=[],g=null,_=!1,m=null,p=null,b=null,E=null,v=null,A=null,T=null,P=new Ve(0,0,0),D=0,S=!1,M=null,L=null,z=null,H=null,W=null,at.set(0,0,n.canvas.width,n.canvas.height),dt.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:Z,disable:fe,bindFramebuffer:Ie,drawBuffers:Se,useProgram:$e,setBlending:ut,setMaterial:Fe,setFlipSided:De,setCullFace:ge,setLineWidth:ft,setPolygonOffset:_e,setScissorTest:Oe,activeTexture:Lt,bindTexture:St,unbindTexture:w,compressedTexImage2D:x,compressedTexImage3D:k,texImage2D:ve,texImage3D:ee,updateUBOMapping:ye,uniformBlockBinding:oe,texStorage2D:ie,texStorage3D:xe,texSubImage2D:q,texSubImage3D:j,compressedTexSubImage2D:V,compressedTexSubImage3D:Me,scissor:ce,viewport:Pe,reset:ke}}function yx(n,e,t,i,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Re,c=new WeakMap;let d;const u=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,x){return f?new OffscreenCanvas(w,x):Nr("canvas")}function _(w,x,k){let q=1;const j=St(w);if((j.width>k||j.height>k)&&(q=k/Math.max(j.width,j.height)),q<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const V=Math.floor(q*j.width),Me=Math.floor(q*j.height);d===void 0&&(d=g(V,Me));const ie=x?g(V,Me):d;return ie.width=V,ie.height=Me,ie.getContext("2d").drawImage(w,0,0,V,Me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+V+"x"+Me+")."),ie}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),w;return w}function m(w){return w.generateMipmaps}function p(w){n.generateMipmap(w)}function b(w){return w.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?n.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function E(w,x,k,q,j=!1){if(w!==null){if(n[w]!==void 0)return n[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let V=x;if(x===n.RED&&(k===n.FLOAT&&(V=n.R32F),k===n.HALF_FLOAT&&(V=n.R16F),k===n.UNSIGNED_BYTE&&(V=n.R8)),x===n.RED_INTEGER&&(k===n.UNSIGNED_BYTE&&(V=n.R8UI),k===n.UNSIGNED_SHORT&&(V=n.R16UI),k===n.UNSIGNED_INT&&(V=n.R32UI),k===n.BYTE&&(V=n.R8I),k===n.SHORT&&(V=n.R16I),k===n.INT&&(V=n.R32I)),x===n.RG&&(k===n.FLOAT&&(V=n.RG32F),k===n.HALF_FLOAT&&(V=n.RG16F),k===n.UNSIGNED_BYTE&&(V=n.RG8)),x===n.RG_INTEGER&&(k===n.UNSIGNED_BYTE&&(V=n.RG8UI),k===n.UNSIGNED_SHORT&&(V=n.RG16UI),k===n.UNSIGNED_INT&&(V=n.RG32UI),k===n.BYTE&&(V=n.RG8I),k===n.SHORT&&(V=n.RG16I),k===n.INT&&(V=n.RG32I)),x===n.RGB_INTEGER&&(k===n.UNSIGNED_BYTE&&(V=n.RGB8UI),k===n.UNSIGNED_SHORT&&(V=n.RGB16UI),k===n.UNSIGNED_INT&&(V=n.RGB32UI),k===n.BYTE&&(V=n.RGB8I),k===n.SHORT&&(V=n.RGB16I),k===n.INT&&(V=n.RGB32I)),x===n.RGBA_INTEGER&&(k===n.UNSIGNED_BYTE&&(V=n.RGBA8UI),k===n.UNSIGNED_SHORT&&(V=n.RGBA16UI),k===n.UNSIGNED_INT&&(V=n.RGBA32UI),k===n.BYTE&&(V=n.RGBA8I),k===n.SHORT&&(V=n.RGBA16I),k===n.INT&&(V=n.RGBA32I)),x===n.RGB&&(k===n.UNSIGNED_INT_5_9_9_9_REV&&(V=n.RGB9_E5),k===n.UNSIGNED_INT_10F_11F_11F_REV&&(V=n.R11F_G11F_B10F)),x===n.RGBA){const Me=j?Va:je.getTransfer(q);k===n.FLOAT&&(V=n.RGBA32F),k===n.HALF_FLOAT&&(V=n.RGBA16F),k===n.UNSIGNED_BYTE&&(V=Me===nt?n.SRGB8_ALPHA8:n.RGBA8),k===n.UNSIGNED_SHORT_4_4_4_4&&(V=n.RGBA4),k===n.UNSIGNED_SHORT_5_5_5_1&&(V=n.RGB5_A1)}return(V===n.R16F||V===n.R32F||V===n.RG16F||V===n.RG32F||V===n.RGBA16F||V===n.RGBA32F)&&e.get("EXT_color_buffer_float"),V}function v(w,x){let k;return w?x===null||x===is||x===Dr?k=n.DEPTH24_STENCIL8:x===ai?k=n.DEPTH32F_STENCIL8:x===Pr&&(k=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===is||x===Dr?k=n.DEPTH_COMPONENT24:x===ai?k=n.DEPTH_COMPONENT32F:x===Pr&&(k=n.DEPTH_COMPONENT16),k}function A(w,x){return m(w)===!0||w.isFramebufferTexture&&w.minFilter!==In&&w.minFilter!==Bn?Math.log2(Math.max(x.width,x.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?x.mipmaps.length:1}function T(w){const x=w.target;x.removeEventListener("dispose",T),D(x),x.isVideoTexture&&c.delete(x)}function P(w){const x=w.target;x.removeEventListener("dispose",P),M(x)}function D(w){const x=i.get(w);if(x.__webglInit===void 0)return;const k=w.source,q=u.get(k);if(q){const j=q[x.__cacheKey];j.usedTimes--,j.usedTimes===0&&S(w),Object.keys(q).length===0&&u.delete(k)}i.remove(w)}function S(w){const x=i.get(w);n.deleteTexture(x.__webglTexture);const k=w.source,q=u.get(k);delete q[x.__cacheKey],a.memory.textures--}function M(w){const x=i.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),i.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(x.__webglFramebuffer[q]))for(let j=0;j<x.__webglFramebuffer[q].length;j++)n.deleteFramebuffer(x.__webglFramebuffer[q][j]);else n.deleteFramebuffer(x.__webglFramebuffer[q]);x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer[q])}else{if(Array.isArray(x.__webglFramebuffer))for(let q=0;q<x.__webglFramebuffer.length;q++)n.deleteFramebuffer(x.__webglFramebuffer[q]);else n.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&n.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let q=0;q<x.__webglColorRenderbuffer.length;q++)x.__webglColorRenderbuffer[q]&&n.deleteRenderbuffer(x.__webglColorRenderbuffer[q]);x.__webglDepthRenderbuffer&&n.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const k=w.textures;for(let q=0,j=k.length;q<j;q++){const V=i.get(k[q]);V.__webglTexture&&(n.deleteTexture(V.__webglTexture),a.memory.textures--),i.remove(k[q])}i.remove(w)}let L=0;function z(){L=0}function H(){const w=L;return w>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+s.maxTextures),L+=1,w}function W(w){const x=[];return x.push(w.wrapS),x.push(w.wrapT),x.push(w.wrapR||0),x.push(w.magFilter),x.push(w.minFilter),x.push(w.anisotropy),x.push(w.internalFormat),x.push(w.format),x.push(w.type),x.push(w.generateMipmaps),x.push(w.premultiplyAlpha),x.push(w.flipY),x.push(w.unpackAlignment),x.push(w.colorSpace),x.join()}function Y(w,x){const k=i.get(w);if(w.isVideoTexture&&Oe(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&k.__version!==w.version){const q=w.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(k,w,x);return}}else w.isExternalTexture&&(k.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,k.__webglTexture,n.TEXTURE0+x)}function X(w,x){const k=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&k.__version!==w.version){$(k,w,x);return}t.bindTexture(n.TEXTURE_2D_ARRAY,k.__webglTexture,n.TEXTURE0+x)}function ne(w,x){const k=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&k.__version!==w.version){$(k,w,x);return}t.bindTexture(n.TEXTURE_3D,k.__webglTexture,n.TEXTURE0+x)}function G(w,x){const k=i.get(w);if(w.version>0&&k.__version!==w.version){Z(k,w,x);return}t.bindTexture(n.TEXTURE_CUBE_MAP,k.__webglTexture,n.TEXTURE0+x)}const ae={[Ga]:n.REPEAT,[Yi]:n.CLAMP_TO_EDGE,[ml]:n.MIRRORED_REPEAT},he={[In]:n.NEAREST,[Pf]:n.NEAREST_MIPMAP_NEAREST,[Kr]:n.NEAREST_MIPMAP_LINEAR,[Bn]:n.LINEAR,[po]:n.LINEAR_MIPMAP_NEAREST,[$i]:n.LINEAR_MIPMAP_LINEAR},Ee={[If]:n.NEVER,[Of]:n.ALWAYS,[Uf]:n.LESS,[Bd]:n.LEQUAL,[Nf]:n.EQUAL,[zf]:n.GEQUAL,[Ff]:n.GREATER,[kf]:n.NOTEQUAL};function He(w,x){if(x.type===ai&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===Bn||x.magFilter===po||x.magFilter===Kr||x.magFilter===$i||x.minFilter===Bn||x.minFilter===po||x.minFilter===Kr||x.minFilter===$i)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(w,n.TEXTURE_WRAP_S,ae[x.wrapS]),n.texParameteri(w,n.TEXTURE_WRAP_T,ae[x.wrapT]),(w===n.TEXTURE_3D||w===n.TEXTURE_2D_ARRAY)&&n.texParameteri(w,n.TEXTURE_WRAP_R,ae[x.wrapR]),n.texParameteri(w,n.TEXTURE_MAG_FILTER,he[x.magFilter]),n.texParameteri(w,n.TEXTURE_MIN_FILTER,he[x.minFilter]),x.compareFunction&&(n.texParameteri(w,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(w,n.TEXTURE_COMPARE_FUNC,Ee[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===In||x.minFilter!==Kr&&x.minFilter!==$i||x.type===ai&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const k=e.get("EXT_texture_filter_anisotropic");n.texParameterf(w,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function at(w,x){let k=!1;w.__webglInit===void 0&&(w.__webglInit=!0,x.addEventListener("dispose",T));const q=x.source;let j=u.get(q);j===void 0&&(j={},u.set(q,j));const V=W(x);if(V!==w.__cacheKey){j[V]===void 0&&(j[V]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,k=!0),j[V].usedTimes++;const Me=j[w.__cacheKey];Me!==void 0&&(j[w.__cacheKey].usedTimes--,Me.usedTimes===0&&S(x)),w.__cacheKey=V,w.__webglTexture=j[V].texture}return k}function dt(w,x,k){return Math.floor(Math.floor(w/k)/x)}function Ze(w,x,k,q){const V=w.updateRanges;if(V.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,x.width,x.height,k,q,x.data);else{V.sort((ee,ce)=>ee.start-ce.start);let Me=0;for(let ee=1;ee<V.length;ee++){const ce=V[Me],Pe=V[ee],ye=ce.start+ce.count,oe=dt(Pe.start,x.width,4),ke=dt(ce.start,x.width,4);Pe.start<=ye+1&&oe===ke&&dt(Pe.start+Pe.count-1,x.width,4)===oe?ce.count=Math.max(ce.count,Pe.start+Pe.count-ce.start):(++Me,V[Me]=Pe)}V.length=Me+1;const ie=n.getParameter(n.UNPACK_ROW_LENGTH),xe=n.getParameter(n.UNPACK_SKIP_PIXELS),ve=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,x.width);for(let ee=0,ce=V.length;ee<ce;ee++){const Pe=V[ee],ye=Math.floor(Pe.start/4),oe=Math.ceil(Pe.count/4),ke=ye%x.width,I=Math.floor(ye/x.width),te=oe,se=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,ke),n.pixelStorei(n.UNPACK_SKIP_ROWS,I),t.texSubImage2D(n.TEXTURE_2D,0,ke,I,te,se,k,q,x.data)}w.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,ie),n.pixelStorei(n.UNPACK_SKIP_PIXELS,xe),n.pixelStorei(n.UNPACK_SKIP_ROWS,ve)}}function $(w,x,k){let q=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(q=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(q=n.TEXTURE_3D);const j=at(w,x),V=x.source;t.bindTexture(q,w.__webglTexture,n.TEXTURE0+k);const Me=i.get(V);if(V.version!==Me.__version||j===!0){t.activeTexture(n.TEXTURE0+k);const ie=je.getPrimaries(je.workingColorSpace),xe=x.colorSpace===yi?null:je.getPrimaries(x.colorSpace),ve=x.colorSpace===yi||ie===xe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);let ee=_(x.image,!1,s.maxTextureSize);ee=Lt(x,ee);const ce=r.convert(x.format,x.colorSpace),Pe=r.convert(x.type);let ye=E(x.internalFormat,ce,Pe,x.colorSpace,x.isVideoTexture);He(q,x);let oe;const ke=x.mipmaps,I=x.isVideoTexture!==!0,te=Me.__version===void 0||j===!0,se=V.dataReady,ue=A(x,ee);if(x.isDepthTexture)ye=v(x.format===Ir,x.type),te&&(I?t.texStorage2D(n.TEXTURE_2D,1,ye,ee.width,ee.height):t.texImage2D(n.TEXTURE_2D,0,ye,ee.width,ee.height,0,ce,Pe,null));else if(x.isDataTexture)if(ke.length>0){I&&te&&t.texStorage2D(n.TEXTURE_2D,ue,ye,ke[0].width,ke[0].height);for(let J=0,K=ke.length;J<K;J++)oe=ke[J],I?se&&t.texSubImage2D(n.TEXTURE_2D,J,0,0,oe.width,oe.height,ce,Pe,oe.data):t.texImage2D(n.TEXTURE_2D,J,ye,oe.width,oe.height,0,ce,Pe,oe.data);x.generateMipmaps=!1}else I?(te&&t.texStorage2D(n.TEXTURE_2D,ue,ye,ee.width,ee.height),se&&Ze(x,ee,ce,Pe)):t.texImage2D(n.TEXTURE_2D,0,ye,ee.width,ee.height,0,ce,Pe,ee.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){I&&te&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ue,ye,ke[0].width,ke[0].height,ee.depth);for(let J=0,K=ke.length;J<K;J++)if(oe=ke[J],x.format!==Ln)if(ce!==null)if(I){if(se)if(x.layerUpdates.size>0){const me=wh(oe.width,oe.height,x.format,x.type);for(const Ue of x.layerUpdates){const ot=oe.data.subarray(Ue*me/oe.data.BYTES_PER_ELEMENT,(Ue+1)*me/oe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,Ue,oe.width,oe.height,1,ce,ot)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,0,oe.width,oe.height,ee.depth,ce,oe.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,J,ye,oe.width,oe.height,ee.depth,0,oe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else I?se&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,0,oe.width,oe.height,ee.depth,ce,Pe,oe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,J,ye,oe.width,oe.height,ee.depth,0,ce,Pe,oe.data)}else{I&&te&&t.texStorage2D(n.TEXTURE_2D,ue,ye,ke[0].width,ke[0].height);for(let J=0,K=ke.length;J<K;J++)oe=ke[J],x.format!==Ln?ce!==null?I?se&&t.compressedTexSubImage2D(n.TEXTURE_2D,J,0,0,oe.width,oe.height,ce,oe.data):t.compressedTexImage2D(n.TEXTURE_2D,J,ye,oe.width,oe.height,0,oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):I?se&&t.texSubImage2D(n.TEXTURE_2D,J,0,0,oe.width,oe.height,ce,Pe,oe.data):t.texImage2D(n.TEXTURE_2D,J,ye,oe.width,oe.height,0,ce,Pe,oe.data)}else if(x.isDataArrayTexture)if(I){if(te&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ue,ye,ee.width,ee.height,ee.depth),se)if(x.layerUpdates.size>0){const J=wh(ee.width,ee.height,x.format,x.type);for(const K of x.layerUpdates){const me=ee.data.subarray(K*J/ee.data.BYTES_PER_ELEMENT,(K+1)*J/ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,K,ee.width,ee.height,1,ce,Pe,me)}x.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,ce,Pe,ee.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,ye,ee.width,ee.height,ee.depth,0,ce,Pe,ee.data);else if(x.isData3DTexture)I?(te&&t.texStorage3D(n.TEXTURE_3D,ue,ye,ee.width,ee.height,ee.depth),se&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,ce,Pe,ee.data)):t.texImage3D(n.TEXTURE_3D,0,ye,ee.width,ee.height,ee.depth,0,ce,Pe,ee.data);else if(x.isFramebufferTexture){if(te)if(I)t.texStorage2D(n.TEXTURE_2D,ue,ye,ee.width,ee.height);else{let J=ee.width,K=ee.height;for(let me=0;me<ue;me++)t.texImage2D(n.TEXTURE_2D,me,ye,J,K,0,ce,Pe,null),J>>=1,K>>=1}}else if(ke.length>0){if(I&&te){const J=St(ke[0]);t.texStorage2D(n.TEXTURE_2D,ue,ye,J.width,J.height)}for(let J=0,K=ke.length;J<K;J++)oe=ke[J],I?se&&t.texSubImage2D(n.TEXTURE_2D,J,0,0,ce,Pe,oe):t.texImage2D(n.TEXTURE_2D,J,ye,ce,Pe,oe);x.generateMipmaps=!1}else if(I){if(te){const J=St(ee);t.texStorage2D(n.TEXTURE_2D,ue,ye,J.width,J.height)}se&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ce,Pe,ee)}else t.texImage2D(n.TEXTURE_2D,0,ye,ce,Pe,ee);m(x)&&p(q),Me.__version=V.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function Z(w,x,k){if(x.image.length!==6)return;const q=at(w,x),j=x.source;t.bindTexture(n.TEXTURE_CUBE_MAP,w.__webglTexture,n.TEXTURE0+k);const V=i.get(j);if(j.version!==V.__version||q===!0){t.activeTexture(n.TEXTURE0+k);const Me=je.getPrimaries(je.workingColorSpace),ie=x.colorSpace===yi?null:je.getPrimaries(x.colorSpace),xe=x.colorSpace===yi||Me===ie?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);const ve=x.isCompressedTexture||x.image[0].isCompressedTexture,ee=x.image[0]&&x.image[0].isDataTexture,ce=[];for(let K=0;K<6;K++)!ve&&!ee?ce[K]=_(x.image[K],!0,s.maxCubemapSize):ce[K]=ee?x.image[K].image:x.image[K],ce[K]=Lt(x,ce[K]);const Pe=ce[0],ye=r.convert(x.format,x.colorSpace),oe=r.convert(x.type),ke=E(x.internalFormat,ye,oe,x.colorSpace),I=x.isVideoTexture!==!0,te=V.__version===void 0||q===!0,se=j.dataReady;let ue=A(x,Pe);He(n.TEXTURE_CUBE_MAP,x);let J;if(ve){I&&te&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ue,ke,Pe.width,Pe.height);for(let K=0;K<6;K++){J=ce[K].mipmaps;for(let me=0;me<J.length;me++){const Ue=J[me];x.format!==Ln?ye!==null?I?se&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,me,0,0,Ue.width,Ue.height,ye,Ue.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,me,ke,Ue.width,Ue.height,0,Ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,me,0,0,Ue.width,Ue.height,ye,oe,Ue.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,me,ke,Ue.width,Ue.height,0,ye,oe,Ue.data)}}}else{if(J=x.mipmaps,I&&te){J.length>0&&ue++;const K=St(ce[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ue,ke,K.width,K.height)}for(let K=0;K<6;K++)if(ee){I?se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,ce[K].width,ce[K].height,ye,oe,ce[K].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,ke,ce[K].width,ce[K].height,0,ye,oe,ce[K].data);for(let me=0;me<J.length;me++){const ot=J[me].image[K].image;I?se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,me+1,0,0,ot.width,ot.height,ye,oe,ot.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,me+1,ke,ot.width,ot.height,0,ye,oe,ot.data)}}else{I?se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,ye,oe,ce[K]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,ke,ye,oe,ce[K]);for(let me=0;me<J.length;me++){const Ue=J[me];I?se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,me+1,0,0,ye,oe,Ue.image[K]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,me+1,ke,ye,oe,Ue.image[K])}}}m(x)&&p(n.TEXTURE_CUBE_MAP),V.__version=j.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function fe(w,x,k,q,j,V){const Me=r.convert(k.format,k.colorSpace),ie=r.convert(k.type),xe=E(k.internalFormat,Me,ie,k.colorSpace),ve=i.get(x),ee=i.get(k);if(ee.__renderTarget=x,!ve.__hasExternalTextures){const ce=Math.max(1,x.width>>V),Pe=Math.max(1,x.height>>V);j===n.TEXTURE_3D||j===n.TEXTURE_2D_ARRAY?t.texImage3D(j,V,xe,ce,Pe,x.depth,0,Me,ie,null):t.texImage2D(j,V,xe,ce,Pe,0,Me,ie,null)}t.bindFramebuffer(n.FRAMEBUFFER,w),_e(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,q,j,ee.__webglTexture,0,ft(x)):(j===n.TEXTURE_2D||j>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,q,j,ee.__webglTexture,V),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ie(w,x,k){if(n.bindRenderbuffer(n.RENDERBUFFER,w),x.depthBuffer){const q=x.depthTexture,j=q&&q.isDepthTexture?q.type:null,V=v(x.stencilBuffer,j),Me=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ie=ft(x);_e(x)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ie,V,x.width,x.height):k?n.renderbufferStorageMultisample(n.RENDERBUFFER,ie,V,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,V,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Me,n.RENDERBUFFER,w)}else{const q=x.textures;for(let j=0;j<q.length;j++){const V=q[j],Me=r.convert(V.format,V.colorSpace),ie=r.convert(V.type),xe=E(V.internalFormat,Me,ie,V.colorSpace),ve=ft(x);k&&_e(x)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ve,xe,x.width,x.height):_e(x)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ve,xe,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,xe,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Se(w,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,w),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const q=i.get(x.depthTexture);q.__renderTarget=x,(!q.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),Y(x.depthTexture,0);const j=q.__webglTexture,V=ft(x);if(x.depthTexture.format===Lr)_e(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,j,0,V):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,j,0);else if(x.depthTexture.format===Ir)_e(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,j,0,V):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function $e(w){const x=i.get(w),k=w.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==w.depthTexture){const q=w.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),q){const j=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,q.removeEventListener("dispose",j)};q.addEventListener("dispose",j),x.__depthDisposeCallback=j}x.__boundDepthTexture=q}if(w.depthTexture&&!x.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");const q=w.texture.mipmaps;q&&q.length>0?Se(x.__webglFramebuffer[0],w):Se(x.__webglFramebuffer,w)}else if(k){x.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[q]),x.__webglDepthbuffer[q]===void 0)x.__webglDepthbuffer[q]=n.createRenderbuffer(),Ie(x.__webglDepthbuffer[q],w,!1);else{const j=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,V=x.__webglDepthbuffer[q];n.bindRenderbuffer(n.RENDERBUFFER,V),n.framebufferRenderbuffer(n.FRAMEBUFFER,j,n.RENDERBUFFER,V)}}else{const q=w.texture.mipmaps;if(q&&q.length>0?t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=n.createRenderbuffer(),Ie(x.__webglDepthbuffer,w,!1);else{const j=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,V=x.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,V),n.framebufferRenderbuffer(n.FRAMEBUFFER,j,n.RENDERBUFFER,V)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function kt(w,x,k){const q=i.get(w);x!==void 0&&fe(q.__webglFramebuffer,w,w.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),k!==void 0&&$e(w)}function R(w){const x=w.texture,k=i.get(w),q=i.get(x);w.addEventListener("dispose",P);const j=w.textures,V=w.isWebGLCubeRenderTarget===!0,Me=j.length>1;if(Me||(q.__webglTexture===void 0&&(q.__webglTexture=n.createTexture()),q.__version=x.version,a.memory.textures++),V){k.__webglFramebuffer=[];for(let ie=0;ie<6;ie++)if(x.mipmaps&&x.mipmaps.length>0){k.__webglFramebuffer[ie]=[];for(let xe=0;xe<x.mipmaps.length;xe++)k.__webglFramebuffer[ie][xe]=n.createFramebuffer()}else k.__webglFramebuffer[ie]=n.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){k.__webglFramebuffer=[];for(let ie=0;ie<x.mipmaps.length;ie++)k.__webglFramebuffer[ie]=n.createFramebuffer()}else k.__webglFramebuffer=n.createFramebuffer();if(Me)for(let ie=0,xe=j.length;ie<xe;ie++){const ve=i.get(j[ie]);ve.__webglTexture===void 0&&(ve.__webglTexture=n.createTexture(),a.memory.textures++)}if(w.samples>0&&_e(w)===!1){k.__webglMultisampledFramebuffer=n.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let ie=0;ie<j.length;ie++){const xe=j[ie];k.__webglColorRenderbuffer[ie]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,k.__webglColorRenderbuffer[ie]);const ve=r.convert(xe.format,xe.colorSpace),ee=r.convert(xe.type),ce=E(xe.internalFormat,ve,ee,xe.colorSpace,w.isXRRenderTarget===!0),Pe=ft(w);n.renderbufferStorageMultisample(n.RENDERBUFFER,Pe,ce,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ie,n.RENDERBUFFER,k.__webglColorRenderbuffer[ie])}n.bindRenderbuffer(n.RENDERBUFFER,null),w.depthBuffer&&(k.__webglDepthRenderbuffer=n.createRenderbuffer(),Ie(k.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(V){t.bindTexture(n.TEXTURE_CUBE_MAP,q.__webglTexture),He(n.TEXTURE_CUBE_MAP,x);for(let ie=0;ie<6;ie++)if(x.mipmaps&&x.mipmaps.length>0)for(let xe=0;xe<x.mipmaps.length;xe++)fe(k.__webglFramebuffer[ie][xe],w,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,xe);else fe(k.__webglFramebuffer[ie],w,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0);m(x)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Me){for(let ie=0,xe=j.length;ie<xe;ie++){const ve=j[ie],ee=i.get(ve);let ce=n.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ce=w.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ce,ee.__webglTexture),He(ce,ve),fe(k.__webglFramebuffer,w,ve,n.COLOR_ATTACHMENT0+ie,ce,0),m(ve)&&p(ce)}t.unbindTexture()}else{let ie=n.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ie=w.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ie,q.__webglTexture),He(ie,x),x.mipmaps&&x.mipmaps.length>0)for(let xe=0;xe<x.mipmaps.length;xe++)fe(k.__webglFramebuffer[xe],w,x,n.COLOR_ATTACHMENT0,ie,xe);else fe(k.__webglFramebuffer,w,x,n.COLOR_ATTACHMENT0,ie,0);m(x)&&p(ie),t.unbindTexture()}w.depthBuffer&&$e(w)}function ut(w){const x=w.textures;for(let k=0,q=x.length;k<q;k++){const j=x[k];if(m(j)){const V=b(w),Me=i.get(j).__webglTexture;t.bindTexture(V,Me),p(V),t.unbindTexture()}}}const Fe=[],De=[];function ge(w){if(w.samples>0){if(_e(w)===!1){const x=w.textures,k=w.width,q=w.height;let j=n.COLOR_BUFFER_BIT;const V=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Me=i.get(w),ie=x.length>1;if(ie)for(let ve=0;ve<x.length;ve++)t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer);const xe=w.texture.mipmaps;xe&&xe.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Me.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let ve=0;ve<x.length;ve++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(j|=n.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(j|=n.STENCIL_BUFFER_BIT)),ie){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Me.__webglColorRenderbuffer[ve]);const ee=i.get(x[ve]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ee,0)}n.blitFramebuffer(0,0,k,q,0,0,k,q,j,n.NEAREST),h===!0&&(Fe.length=0,De.length=0,Fe.push(n.COLOR_ATTACHMENT0+ve),w.depthBuffer&&w.resolveDepthBuffer===!1&&(Fe.push(V),De.push(V),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,De)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Fe))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ie)for(let ve=0;ve<x.length;ve++){t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.RENDERBUFFER,Me.__webglColorRenderbuffer[ve]);const ee=i.get(x[ve]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.TEXTURE_2D,ee,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&h){const x=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[x])}}}function ft(w){return Math.min(s.maxSamples,w.samples)}function _e(w){const x=i.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Oe(w){const x=a.render.frame;c.get(w)!==x&&(c.set(w,x),w.update())}function Lt(w,x){const k=w.colorSpace,q=w.format,j=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||k!==Vs&&k!==yi&&(je.getTransfer(k)===nt?(q!==Ln||j!==Vn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),x}function St(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(l.width=w.naturalWidth||w.width,l.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(l.width=w.displayWidth,l.height=w.displayHeight):(l.width=w.width,l.height=w.height),l}this.allocateTextureUnit=H,this.resetTextureUnits=z,this.setTexture2D=Y,this.setTexture2DArray=X,this.setTexture3D=ne,this.setTextureCube=G,this.rebindTextures=kt,this.setupRenderTarget=R,this.updateRenderTargetMipmap=ut,this.updateMultisampleRenderTarget=ge,this.setupDepthRenderbuffer=$e,this.setupFrameBufferTexture=fe,this.useMultisampledRTT=_e}function Mx(n,e){function t(i,s=yi){let r;const a=je.getTransfer(s);if(i===Vn)return n.UNSIGNED_BYTE;if(i===oc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===lc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Ld)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Id)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Pd)return n.BYTE;if(i===Dd)return n.SHORT;if(i===Pr)return n.UNSIGNED_SHORT;if(i===ac)return n.INT;if(i===is)return n.UNSIGNED_INT;if(i===ai)return n.FLOAT;if(i===Hr)return n.HALF_FLOAT;if(i===Ud)return n.ALPHA;if(i===Nd)return n.RGB;if(i===Ln)return n.RGBA;if(i===Lr)return n.DEPTH_COMPONENT;if(i===Ir)return n.DEPTH_STENCIL;if(i===Fd)return n.RED;if(i===cc)return n.RED_INTEGER;if(i===kd)return n.RG;if(i===hc)return n.RG_INTEGER;if(i===dc)return n.RGBA_INTEGER;if(i===Na||i===Fa||i===ka||i===za)if(a===nt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Na)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Fa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ka)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===za)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Na)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Fa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ka)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===za)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===gl||i===_l||i===xl||i===vl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===gl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===_l)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===xl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===vl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===yl||i===Ml||i===Sl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===yl||i===Ml)return a===nt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Sl)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===bl||i===El||i===wl||i===Tl||i===Al||i===Rl||i===Cl||i===Pl||i===Dl||i===Ll||i===Il||i===Ul||i===Nl||i===Fl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===bl)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===El)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===wl)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Tl)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Al)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Rl)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Cl)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Pl)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Dl)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ll)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Il)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ul)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Nl)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Fl)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===kl||i===zl||i===Ol)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===kl)return a===nt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===zl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ol)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Bl||i===Hl||i===Gl||i===Vl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Bl)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Hl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Gl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Vl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Dr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const Sx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,bx=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Ex{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new Jd(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Ai({vertexShader:Sx,fragmentShader:bx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Te(new Wt(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class wx extends $s{constructor(e,t){super();const i=this;let s=null,r=1,a=null,o="local-floor",h=1,l=null,c=null,d=null,u=null,f=null,g=null;const _=typeof XRWebGLBinding<"u",m=new Ex,p={},b=t.getContextAttributes();let E=null,v=null;const A=[],T=[],P=new Re;let D=null;const S=new hn;S.viewport=new st;const M=new hn;M.viewport=new st;const L=[S,M],z=new Wp;let H=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let Z=A[$];return Z===void 0&&(Z=new No,A[$]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function($){let Z=A[$];return Z===void 0&&(Z=new No,A[$]=Z),Z.getGripSpace()},this.getHand=function($){let Z=A[$];return Z===void 0&&(Z=new No,A[$]=Z),Z.getHandSpace()};function Y($){const Z=T.indexOf($.inputSource);if(Z===-1)return;const fe=A[Z];fe!==void 0&&(fe.update($.inputSource,$.frame,l||a),fe.dispatchEvent({type:$.type,data:$.inputSource}))}function X(){s.removeEventListener("select",Y),s.removeEventListener("selectstart",Y),s.removeEventListener("selectend",Y),s.removeEventListener("squeeze",Y),s.removeEventListener("squeezestart",Y),s.removeEventListener("squeezeend",Y),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",ne);for(let $=0;$<A.length;$++){const Z=T[$];Z!==null&&(T[$]=null,A[$].disconnect(Z))}H=null,W=null,m.reset();for(const $ in p)delete p[$];e.setRenderTarget(E),f=null,u=null,d=null,s=null,v=null,Ze.stop(),i.isPresenting=!1,e.setPixelRatio(D),e.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function($){l=$},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(E=e.getRenderTarget(),s.addEventListener("select",Y),s.addEventListener("selectstart",Y),s.addEventListener("selectend",Y),s.addEventListener("squeeze",Y),s.addEventListener("squeezestart",Y),s.addEventListener("squeezeend",Y),s.addEventListener("end",X),s.addEventListener("inputsourceschange",ne),b.xrCompatible!==!0&&await t.makeXRCompatible(),D=e.getPixelRatio(),e.getSize(P),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let fe=null,Ie=null,Se=null;b.depth&&(Se=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,fe=b.stencil?Ir:Lr,Ie=b.stencil?Dr:is);const $e={colorFormat:t.RGBA8,depthFormat:Se,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer($e),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),v=new ss(u.textureWidth,u.textureHeight,{format:Ln,type:Vn,depthTexture:new Zd(u.textureWidth,u.textureHeight,Ie,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{const fe={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,fe),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new ss(f.framebufferWidth,f.framebufferHeight,{format:Ln,type:Vn,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(h),l=null,a=await s.requestReferenceSpace(o),Ze.setContext(s),Ze.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ne($){for(let Z=0;Z<$.removed.length;Z++){const fe=$.removed[Z],Ie=T.indexOf(fe);Ie>=0&&(T[Ie]=null,A[Ie].disconnect(fe))}for(let Z=0;Z<$.added.length;Z++){const fe=$.added[Z];let Ie=T.indexOf(fe);if(Ie===-1){for(let $e=0;$e<A.length;$e++)if($e>=T.length){T.push(fe),Ie=$e;break}else if(T[$e]===null){T[$e]=fe,Ie=$e;break}if(Ie===-1)break}const Se=A[Ie];Se&&Se.connect(fe)}}const G=new U,ae=new U;function he($,Z,fe){G.setFromMatrixPosition(Z.matrixWorld),ae.setFromMatrixPosition(fe.matrixWorld);const Ie=G.distanceTo(ae),Se=Z.projectionMatrix.elements,$e=fe.projectionMatrix.elements,kt=Se[14]/(Se[10]-1),R=Se[14]/(Se[10]+1),ut=(Se[9]+1)/Se[5],Fe=(Se[9]-1)/Se[5],De=(Se[8]-1)/Se[0],ge=($e[8]+1)/$e[0],ft=kt*De,_e=kt*ge,Oe=Ie/(-De+ge),Lt=Oe*-De;if(Z.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Lt),$.translateZ(Oe),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Se[10]===-1)$.projectionMatrix.copy(Z.projectionMatrix),$.projectionMatrixInverse.copy(Z.projectionMatrixInverse);else{const St=kt+Oe,w=R+Oe,x=ft-Lt,k=_e+(Ie-Lt),q=ut*R/w*St,j=Fe*R/w*St;$.projectionMatrix.makePerspective(x,k,q,j,St,w),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function Ee($,Z){Z===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(Z.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let Z=$.near,fe=$.far;m.texture!==null&&(m.depthNear>0&&(Z=m.depthNear),m.depthFar>0&&(fe=m.depthFar)),z.near=M.near=S.near=Z,z.far=M.far=S.far=fe,(H!==z.near||W!==z.far)&&(s.updateRenderState({depthNear:z.near,depthFar:z.far}),H=z.near,W=z.far),z.layers.mask=$.layers.mask|6,S.layers.mask=z.layers.mask&3,M.layers.mask=z.layers.mask&5;const Ie=$.parent,Se=z.cameras;Ee(z,Ie);for(let $e=0;$e<Se.length;$e++)Ee(Se[$e],Ie);Se.length===2?he(z,S,M):z.projectionMatrix.copy(S.projectionMatrix),He($,z,Ie)};function He($,Z,fe){fe===null?$.matrix.copy(Z.matrixWorld):($.matrix.copy(fe.matrixWorld),$.matrix.invert(),$.matrix.multiply(Z.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(Z.projectionMatrix),$.projectionMatrixInverse.copy(Z.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Ur*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(u===null&&f===null))return h},this.setFoveation=function($){h=$,u!==null&&(u.fixedFoveation=$),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=$)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(z)},this.getCameraTexture=function($){return p[$]};let at=null;function dt($,Z){if(c=Z.getViewerPose(l||a),g=Z,c!==null){const fe=c.views;f!==null&&(e.setRenderTargetFramebuffer(v,f.framebuffer),e.setRenderTarget(v));let Ie=!1;fe.length!==z.cameras.length&&(z.cameras.length=0,Ie=!0);for(let R=0;R<fe.length;R++){const ut=fe[R];let Fe=null;if(f!==null)Fe=f.getViewport(ut);else{const ge=d.getViewSubImage(u,ut);Fe=ge.viewport,R===0&&(e.setRenderTargetTextures(v,ge.colorTexture,ge.depthStencilTexture),e.setRenderTarget(v))}let De=L[R];De===void 0&&(De=new hn,De.layers.enable(R),De.viewport=new st,L[R]=De),De.matrix.fromArray(ut.transform.matrix),De.matrix.decompose(De.position,De.quaternion,De.scale),De.projectionMatrix.fromArray(ut.projectionMatrix),De.projectionMatrixInverse.copy(De.projectionMatrix).invert(),De.viewport.set(Fe.x,Fe.y,Fe.width,Fe.height),R===0&&(z.matrix.copy(De.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),Ie===!0&&z.cameras.push(De)}const Se=s.enabledFeatures;if(Se&&Se.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){d=i.getBinding();const R=d.getDepthInformation(fe[0]);R&&R.isValid&&R.texture&&m.init(R,s.renderState)}if(Se&&Se.includes("camera-access")&&_){e.state.unbindTexture(),d=i.getBinding();for(let R=0;R<fe.length;R++){const ut=fe[R].camera;if(ut){let Fe=p[ut];Fe||(Fe=new Jd,p[ut]=Fe);const De=d.getCameraImage(ut);Fe.sourceTexture=De}}}}for(let fe=0;fe<A.length;fe++){const Ie=T[fe],Se=A[fe];Ie!==null&&Se!==void 0&&Se.update(Ie,Z,l||a)}at&&at($,Z),Z.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Z}),g=null}const Ze=new iu;Ze.setAnimationLoop(dt),this.setAnimationLoop=function($){at=$},this.dispose=function(){}}}const ki=new Wn,Tx=new ht;function Ax(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,qd(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,b,E,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),c(m,p)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?h(m,p,b,E):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===nn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===nn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const b=e.get(p),E=b.envMap,v=b.envMapRotation;E&&(m.envMap.value=E,ki.copy(v),ki.x*=-1,ki.y*=-1,ki.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(ki.y*=-1,ki.z*=-1),m.envMapRotation.value.setFromMatrix4(Tx.makeRotationFromEuler(ki)),m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function h(m,p,b,E){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*b,m.scale.value=E*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,b){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===nn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const b=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Rx(n,e,t,i){let s={},r={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function h(b,E){const v=E.program;i.uniformBlockBinding(b,v)}function l(b,E){let v=s[b.id];v===void 0&&(g(b),v=c(b),s[b.id]=v,b.addEventListener("dispose",m));const A=E.program;i.updateUBOMapping(b,A);const T=e.render.frame;r[b.id]!==T&&(u(b),r[b.id]=T)}function c(b){const E=d();b.__bindingPointIndex=E;const v=n.createBuffer(),A=b.__size,T=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,v),n.bufferData(n.UNIFORM_BUFFER,A,T),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,E,v),v}function d(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(b){const E=s[b.id],v=b.uniforms,A=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,E);for(let T=0,P=v.length;T<P;T++){const D=Array.isArray(v[T])?v[T]:[v[T]];for(let S=0,M=D.length;S<M;S++){const L=D[S];if(f(L,T,S,A)===!0){const z=L.__offset,H=Array.isArray(L.value)?L.value:[L.value];let W=0;for(let Y=0;Y<H.length;Y++){const X=H[Y],ne=_(X);typeof X=="number"||typeof X=="boolean"?(L.__data[0]=X,n.bufferSubData(n.UNIFORM_BUFFER,z+W,L.__data)):X.isMatrix3?(L.__data[0]=X.elements[0],L.__data[1]=X.elements[1],L.__data[2]=X.elements[2],L.__data[3]=0,L.__data[4]=X.elements[3],L.__data[5]=X.elements[4],L.__data[6]=X.elements[5],L.__data[7]=0,L.__data[8]=X.elements[6],L.__data[9]=X.elements[7],L.__data[10]=X.elements[8],L.__data[11]=0):(X.toArray(L.__data,W),W+=ne.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,z,L.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(b,E,v,A){const T=b.value,P=E+"_"+v;if(A[P]===void 0)return typeof T=="number"||typeof T=="boolean"?A[P]=T:A[P]=T.clone(),!0;{const D=A[P];if(typeof T=="number"||typeof T=="boolean"){if(D!==T)return A[P]=T,!0}else if(D.equals(T)===!1)return D.copy(T),!0}return!1}function g(b){const E=b.uniforms;let v=0;const A=16;for(let P=0,D=E.length;P<D;P++){const S=Array.isArray(E[P])?E[P]:[E[P]];for(let M=0,L=S.length;M<L;M++){const z=S[M],H=Array.isArray(z.value)?z.value:[z.value];for(let W=0,Y=H.length;W<Y;W++){const X=H[W],ne=_(X),G=v%A,ae=G%ne.boundary,he=G+ae;v+=ae,he!==0&&A-he<ne.storage&&(v+=A-he),z.__data=new Float32Array(ne.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=v,v+=ne.storage}}}const T=v%A;return T>0&&(v+=A-T),b.__size=v,b.__cache={},this}function _(b){const E={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(E.boundary=4,E.storage=4):b.isVector2?(E.boundary=8,E.storage=8):b.isVector3||b.isColor?(E.boundary=16,E.storage=12):b.isVector4?(E.boundary=16,E.storage=16):b.isMatrix3?(E.boundary=48,E.storage=48):b.isMatrix4?(E.boundary=64,E.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),E}function m(b){const E=b.target;E.removeEventListener("dispose",m);const v=a.indexOf(E.__bindingPointIndex);a.splice(v,1),n.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function p(){for(const b in s)n.deleteBuffer(s[b]);a=[],s={},r={}}return{bind:h,update:l,dispose:p}}class Cx{constructor(e={}){const{canvas:t=np(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:l=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=a;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const b=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ei,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let A=!1;this._outputColorSpace=mt;let T=0,P=0,D=null,S=-1,M=null;const L=new st,z=new st;let H=null;const W=new Ve(0);let Y=0,X=t.width,ne=t.height,G=1,ae=null,he=null;const Ee=new st(0,0,X,ne),He=new st(0,0,X,ne);let at=!1;const dt=new _c;let Ze=!1,$=!1;const Z=new ht,fe=new U,Ie=new st,Se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let $e=!1;function kt(){return D===null?G:1}let R=i;function ut(y,N){return t.getContext(y,N)}try{const y={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:h,preserveDrawingBuffer:l,powerPreference:c,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${rc}`),t.addEventListener("webglcontextlost",se,!1),t.addEventListener("webglcontextrestored",ue,!1),t.addEventListener("webglcontextcreationerror",J,!1),R===null){const N="webgl2";if(R=ut(N,y),R===null)throw ut(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let Fe,De,ge,ft,_e,Oe,Lt,St,w,x,k,q,j,V,Me,ie,xe,ve,ee,ce,Pe,ye,oe,ke;function I(){Fe=new Og(R),Fe.init(),ye=new Mx(R,Fe),De=new Lg(R,Fe,e,ye),ge=new vx(R,Fe),De.reversedDepthBuffer&&u&&ge.buffers.depth.setReversed(!0),ft=new Gg(R),_e=new ax,Oe=new yx(R,Fe,ge,_e,De,ye,ft),Lt=new Ug(v),St=new zg(v),w=new $p(R),oe=new Pg(R,w),x=new Bg(R,w,ft,oe),k=new Wg(R,x,w,ft),ee=new Vg(R,De,Oe),ie=new Ig(_e),q=new rx(v,Lt,St,Fe,De,oe,ie),j=new Ax(v,_e),V=new lx,Me=new px(Fe),ve=new Cg(v,Lt,St,ge,k,f,h),xe=new _x(v,k,De),ke=new Rx(R,ft,De,ge),ce=new Dg(R,Fe,ft),Pe=new Hg(R,Fe,ft),ft.programs=q.programs,v.capabilities=De,v.extensions=Fe,v.properties=_e,v.renderLists=V,v.shadowMap=xe,v.state=ge,v.info=ft}I();const te=new wx(v,R);this.xr=te,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const y=Fe.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=Fe.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(y){y!==void 0&&(G=y,this.setSize(X,ne,!1))},this.getSize=function(y){return y.set(X,ne)},this.setSize=function(y,N,O=!0){if(te.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=y,ne=N,t.width=Math.floor(y*G),t.height=Math.floor(N*G),O===!0&&(t.style.width=y+"px",t.style.height=N+"px"),this.setViewport(0,0,y,N)},this.getDrawingBufferSize=function(y){return y.set(X*G,ne*G).floor()},this.setDrawingBufferSize=function(y,N,O){X=y,ne=N,G=O,t.width=Math.floor(y*O),t.height=Math.floor(N*O),this.setViewport(0,0,y,N)},this.getCurrentViewport=function(y){return y.copy(L)},this.getViewport=function(y){return y.copy(Ee)},this.setViewport=function(y,N,O,B){y.isVector4?Ee.set(y.x,y.y,y.z,y.w):Ee.set(y,N,O,B),ge.viewport(L.copy(Ee).multiplyScalar(G).round())},this.getScissor=function(y){return y.copy(He)},this.setScissor=function(y,N,O,B){y.isVector4?He.set(y.x,y.y,y.z,y.w):He.set(y,N,O,B),ge.scissor(z.copy(He).multiplyScalar(G).round())},this.getScissorTest=function(){return at},this.setScissorTest=function(y){ge.setScissorTest(at=y)},this.setOpaqueSort=function(y){ae=y},this.setTransparentSort=function(y){he=y},this.getClearColor=function(y){return y.copy(ve.getClearColor())},this.setClearColor=function(){ve.setClearColor(...arguments)},this.getClearAlpha=function(){return ve.getClearAlpha()},this.setClearAlpha=function(){ve.setClearAlpha(...arguments)},this.clear=function(y=!0,N=!0,O=!0){let B=0;if(y){let F=!1;if(D!==null){const Q=D.texture.format;F=Q===dc||Q===hc||Q===cc}if(F){const Q=D.texture.type,le=Q===Vn||Q===is||Q===Pr||Q===Dr||Q===oc||Q===lc,pe=ve.getClearColor(),de=ve.getClearAlpha(),Ce=pe.r,Le=pe.g,we=pe.b;le?(g[0]=Ce,g[1]=Le,g[2]=we,g[3]=de,R.clearBufferuiv(R.COLOR,0,g)):(_[0]=Ce,_[1]=Le,_[2]=we,_[3]=de,R.clearBufferiv(R.COLOR,0,_))}else B|=R.COLOR_BUFFER_BIT}N&&(B|=R.DEPTH_BUFFER_BIT),O&&(B|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",se,!1),t.removeEventListener("webglcontextrestored",ue,!1),t.removeEventListener("webglcontextcreationerror",J,!1),ve.dispose(),V.dispose(),Me.dispose(),_e.dispose(),Lt.dispose(),St.dispose(),k.dispose(),oe.dispose(),ke.dispose(),q.dispose(),te.dispose(),te.removeEventListener("sessionstart",Nn),te.removeEventListener("sessionend",zc),Pi.stop()};function se(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function ue(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const y=ft.autoReset,N=xe.enabled,O=xe.autoUpdate,B=xe.needsUpdate,F=xe.type;I(),ft.autoReset=y,xe.enabled=N,xe.autoUpdate=O,xe.needsUpdate=B,xe.type=F}function J(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function K(y){const N=y.target;N.removeEventListener("dispose",K),me(N)}function me(y){Ue(y),_e.remove(y)}function Ue(y){const N=_e.get(y).programs;N!==void 0&&(N.forEach(function(O){q.releaseProgram(O)}),y.isShaderMaterial&&q.releaseShaderCache(y))}this.renderBufferDirect=function(y,N,O,B,F,Q){N===null&&(N=Se);const le=F.isMesh&&F.matrixWorld.determinant()<0,pe=$u(y,N,O,B,F);ge.setMaterial(B,le);let de=O.index,Ce=1;if(B.wireframe===!0){if(de=x.getWireframeAttribute(O),de===void 0)return;Ce=2}const Le=O.drawRange,we=O.attributes.position;let Xe=Le.start*Ce,tt=(Le.start+Le.count)*Ce;Q!==null&&(Xe=Math.max(Xe,Q.start*Ce),tt=Math.min(tt,(Q.start+Q.count)*Ce)),de!==null?(Xe=Math.max(Xe,0),tt=Math.min(tt,de.count)):we!=null&&(Xe=Math.max(Xe,0),tt=Math.min(tt,we.count));const yt=tt-Xe;if(yt<0||yt===1/0)return;oe.setup(F,B,pe,O,de);let lt,rt=ce;if(de!==null&&(lt=w.get(de),rt=Pe,rt.setIndex(lt)),F.isMesh)B.wireframe===!0?(ge.setLineWidth(B.wireframeLinewidth*kt()),rt.setMode(R.LINES)):rt.setMode(R.TRIANGLES);else if(F.isLine){let Ae=B.linewidth;Ae===void 0&&(Ae=1),ge.setLineWidth(Ae*kt()),F.isLineSegments?rt.setMode(R.LINES):F.isLineLoop?rt.setMode(R.LINE_LOOP):rt.setMode(R.LINE_STRIP)}else F.isPoints?rt.setMode(R.POINTS):F.isSprite&&rt.setMode(R.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)Fr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),rt.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(Fe.get("WEBGL_multi_draw"))rt.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const Ae=F._multiDrawStarts,gt=F._multiDrawCounts,Ke=F._multiDrawCount,rn=de?w.get(de).bytesPerElement:1,cs=_e.get(B).currentProgram.getUniforms();for(let an=0;an<Ke;an++)cs.setValue(R,"_gl_DrawID",an),rt.render(Ae[an]/rn,gt[an])}else if(F.isInstancedMesh)rt.renderInstances(Xe,yt,F.count);else if(O.isInstancedBufferGeometry){const Ae=O._maxInstanceCount!==void 0?O._maxInstanceCount:1/0,gt=Math.min(O.instanceCount,Ae);rt.renderInstances(Xe,yt,gt)}else rt.render(Xe,yt)};function ot(y,N,O){y.transparent===!0&&y.side===Bt&&y.forceSinglePass===!1?(y.side=nn,y.needsUpdate=!0,$r(y,N,O),y.side=Ti,y.needsUpdate=!0,$r(y,N,O),y.side=Bt):$r(y,N,O)}this.compile=function(y,N,O=null){O===null&&(O=y),p=Me.get(O),p.init(N),E.push(p),O.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),y!==O&&y.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),p.setupLights();const B=new Set;return y.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const Q=F.material;if(Q)if(Array.isArray(Q))for(let le=0;le<Q.length;le++){const pe=Q[le];ot(pe,O,F),B.add(pe)}else ot(Q,O,F),B.add(Q)}),p=E.pop(),B},this.compileAsync=function(y,N,O=null){const B=this.compile(y,N,O);return new Promise(F=>{function Q(){if(B.forEach(function(le){_e.get(le).currentProgram.isReady()&&B.delete(le)}),B.size===0){F(y);return}setTimeout(Q,10)}Fe.get("KHR_parallel_shader_compile")!==null?Q():setTimeout(Q,10)})};let Je=null;function $n(y){Je&&Je(y)}function Nn(){Pi.stop()}function zc(){Pi.start()}const Pi=new iu;Pi.setAnimationLoop($n),typeof self<"u"&&Pi.setContext(self),this.setAnimationLoop=function(y){Je=y,te.setAnimationLoop(y),y===null?Pi.stop():Pi.start()},te.addEventListener("sessionstart",Nn),te.addEventListener("sessionend",zc),this.render=function(y,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),te.enabled===!0&&te.isPresenting===!0&&(te.cameraAutoUpdate===!0&&te.updateCamera(N),N=te.getCamera()),y.isScene===!0&&y.onBeforeRender(v,y,N,D),p=Me.get(y,E.length),p.init(N),E.push(p),Z.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),dt.setFromProjectionMatrix(Z,Hn,N.reversedDepth),$=this.localClippingEnabled,Ze=ie.init(this.clippingPlanes,$),m=V.get(y,b.length),m.init(),b.push(m),te.enabled===!0&&te.isPresenting===!0){const Q=v.xr.getDepthSensingMesh();Q!==null&&uo(Q,N,-1/0,v.sortObjects)}uo(y,N,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(ae,he),$e=te.enabled===!1||te.isPresenting===!1||te.hasDepthSensing()===!1,$e&&ve.addToRenderList(m,y),this.info.render.frame++,Ze===!0&&ie.beginShadows();const O=p.state.shadowsArray;xe.render(O,y,N),Ze===!0&&ie.endShadows(),this.info.autoReset===!0&&this.info.reset();const B=m.opaque,F=m.transmissive;if(p.setupLights(),N.isArrayCamera){const Q=N.cameras;if(F.length>0)for(let le=0,pe=Q.length;le<pe;le++){const de=Q[le];Bc(B,F,y,de)}$e&&ve.render(y);for(let le=0,pe=Q.length;le<pe;le++){const de=Q[le];Oc(m,y,de,de.viewport)}}else F.length>0&&Bc(B,F,y,N),$e&&ve.render(y),Oc(m,y,N);D!==null&&P===0&&(Oe.updateMultisampleRenderTarget(D),Oe.updateRenderTargetMipmap(D)),y.isScene===!0&&y.onAfterRender(v,y,N),oe.resetDefaultState(),S=-1,M=null,E.pop(),E.length>0?(p=E[E.length-1],Ze===!0&&ie.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,b.pop(),b.length>0?m=b[b.length-1]:m=null};function uo(y,N,O,B){if(y.visible===!1)return;if(y.layers.test(N.layers)){if(y.isGroup)O=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(N);else if(y.isLight)p.pushLight(y),y.castShadow&&p.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||dt.intersectsSprite(y)){B&&Ie.setFromMatrixPosition(y.matrixWorld).applyMatrix4(Z);const le=k.update(y),pe=y.material;pe.visible&&m.push(y,le,pe,O,Ie.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||dt.intersectsObject(y))){const le=k.update(y),pe=y.material;if(B&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Ie.copy(y.boundingSphere.center)):(le.boundingSphere===null&&le.computeBoundingSphere(),Ie.copy(le.boundingSphere.center)),Ie.applyMatrix4(y.matrixWorld).applyMatrix4(Z)),Array.isArray(pe)){const de=le.groups;for(let Ce=0,Le=de.length;Ce<Le;Ce++){const we=de[Ce],Xe=pe[we.materialIndex];Xe&&Xe.visible&&m.push(y,le,Xe,O,Ie.z,we)}}else pe.visible&&m.push(y,le,pe,O,Ie.z,null)}}const Q=y.children;for(let le=0,pe=Q.length;le<pe;le++)uo(Q[le],N,O,B)}function Oc(y,N,O,B){const F=y.opaque,Q=y.transmissive,le=y.transparent;p.setupLightsView(O),Ze===!0&&ie.setGlobalState(v.clippingPlanes,O),B&&ge.viewport(L.copy(B)),F.length>0&&Yr(F,N,O),Q.length>0&&Yr(Q,N,O),le.length>0&&Yr(le,N,O),ge.buffers.depth.setTest(!0),ge.buffers.depth.setMask(!0),ge.buffers.color.setMask(!0),ge.setPolygonOffset(!1)}function Bc(y,N,O,B){if((O.isScene===!0?O.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[B.id]===void 0&&(p.state.transmissionRenderTarget[B.id]=new ss(1,1,{generateMipmaps:!0,type:Fe.has("EXT_color_buffer_half_float")||Fe.has("EXT_color_buffer_float")?Hr:Vn,minFilter:$i,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:je.workingColorSpace}));const Q=p.state.transmissionRenderTarget[B.id],le=B.viewport||L;Q.setSize(le.z*v.transmissionResolutionScale,le.w*v.transmissionResolutionScale);const pe=v.getRenderTarget(),de=v.getActiveCubeFace(),Ce=v.getActiveMipmapLevel();v.setRenderTarget(Q),v.getClearColor(W),Y=v.getClearAlpha(),Y<1&&v.setClearColor(16777215,.5),v.clear(),$e&&ve.render(O);const Le=v.toneMapping;v.toneMapping=Ei;const we=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),p.setupLightsView(B),Ze===!0&&ie.setGlobalState(v.clippingPlanes,B),Yr(y,O,B),Oe.updateMultisampleRenderTarget(Q),Oe.updateRenderTargetMipmap(Q),Fe.has("WEBGL_multisampled_render_to_texture")===!1){let Xe=!1;for(let tt=0,yt=N.length;tt<yt;tt++){const lt=N[tt],rt=lt.object,Ae=lt.geometry,gt=lt.material,Ke=lt.group;if(gt.side===Bt&&rt.layers.test(B.layers)){const rn=gt.side;gt.side=nn,gt.needsUpdate=!0,Hc(rt,O,B,Ae,gt,Ke),gt.side=rn,gt.needsUpdate=!0,Xe=!0}}Xe===!0&&(Oe.updateMultisampleRenderTarget(Q),Oe.updateRenderTargetMipmap(Q))}v.setRenderTarget(pe,de,Ce),v.setClearColor(W,Y),we!==void 0&&(B.viewport=we),v.toneMapping=Le}function Yr(y,N,O){const B=N.isScene===!0?N.overrideMaterial:null;for(let F=0,Q=y.length;F<Q;F++){const le=y[F],pe=le.object,de=le.geometry,Ce=le.group;let Le=le.material;Le.allowOverride===!0&&B!==null&&(Le=B),pe.layers.test(O.layers)&&Hc(pe,N,O,de,Le,Ce)}}function Hc(y,N,O,B,F,Q){y.onBeforeRender(v,N,O,B,F,Q),y.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),F.onBeforeRender(v,N,O,B,y,Q),F.transparent===!0&&F.side===Bt&&F.forceSinglePass===!1?(F.side=nn,F.needsUpdate=!0,v.renderBufferDirect(O,N,B,F,y,Q),F.side=Ti,F.needsUpdate=!0,v.renderBufferDirect(O,N,B,F,y,Q),F.side=Bt):v.renderBufferDirect(O,N,B,F,y,Q),y.onAfterRender(v,N,O,B,F,Q)}function $r(y,N,O){N.isScene!==!0&&(N=Se);const B=_e.get(y),F=p.state.lights,Q=p.state.shadowsArray,le=F.state.version,pe=q.getParameters(y,F.state,Q,N,O),de=q.getProgramCacheKey(pe);let Ce=B.programs;B.environment=y.isMeshStandardMaterial?N.environment:null,B.fog=N.fog,B.envMap=(y.isMeshStandardMaterial?St:Lt).get(y.envMap||B.environment),B.envMapRotation=B.environment!==null&&y.envMap===null?N.environmentRotation:y.envMapRotation,Ce===void 0&&(y.addEventListener("dispose",K),Ce=new Map,B.programs=Ce);let Le=Ce.get(de);if(Le!==void 0){if(B.currentProgram===Le&&B.lightsStateVersion===le)return Vc(y,pe),Le}else pe.uniforms=q.getUniforms(y),y.onBeforeCompile(pe,v),Le=q.acquireProgram(pe,de),Ce.set(de,Le),B.uniforms=pe.uniforms;const we=B.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(we.clippingPlanes=ie.uniform),Vc(y,pe),B.needsLights=ju(y),B.lightsStateVersion=le,B.needsLights&&(we.ambientLightColor.value=F.state.ambient,we.lightProbe.value=F.state.probe,we.directionalLights.value=F.state.directional,we.directionalLightShadows.value=F.state.directionalShadow,we.spotLights.value=F.state.spot,we.spotLightShadows.value=F.state.spotShadow,we.rectAreaLights.value=F.state.rectArea,we.ltc_1.value=F.state.rectAreaLTC1,we.ltc_2.value=F.state.rectAreaLTC2,we.pointLights.value=F.state.point,we.pointLightShadows.value=F.state.pointShadow,we.hemisphereLights.value=F.state.hemi,we.directionalShadowMap.value=F.state.directionalShadowMap,we.directionalShadowMatrix.value=F.state.directionalShadowMatrix,we.spotShadowMap.value=F.state.spotShadowMap,we.spotLightMatrix.value=F.state.spotLightMatrix,we.spotLightMap.value=F.state.spotLightMap,we.pointShadowMap.value=F.state.pointShadowMap,we.pointShadowMatrix.value=F.state.pointShadowMatrix),B.currentProgram=Le,B.uniformsList=null,Le}function Gc(y){if(y.uniformsList===null){const N=y.currentProgram.getUniforms();y.uniformsList=Oa.seqWithValue(N.seq,y.uniforms)}return y.uniformsList}function Vc(y,N){const O=_e.get(y);O.outputColorSpace=N.outputColorSpace,O.batching=N.batching,O.batchingColor=N.batchingColor,O.instancing=N.instancing,O.instancingColor=N.instancingColor,O.instancingMorph=N.instancingMorph,O.skinning=N.skinning,O.morphTargets=N.morphTargets,O.morphNormals=N.morphNormals,O.morphColors=N.morphColors,O.morphTargetsCount=N.morphTargetsCount,O.numClippingPlanes=N.numClippingPlanes,O.numIntersection=N.numClipIntersection,O.vertexAlphas=N.vertexAlphas,O.vertexTangents=N.vertexTangents,O.toneMapping=N.toneMapping}function $u(y,N,O,B,F){N.isScene!==!0&&(N=Se),Oe.resetTextureUnits();const Q=N.fog,le=B.isMeshStandardMaterial?N.environment:null,pe=D===null?v.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:Vs,de=(B.isMeshStandardMaterial?St:Lt).get(B.envMap||le),Ce=B.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,Le=!!O.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),we=!!O.morphAttributes.position,Xe=!!O.morphAttributes.normal,tt=!!O.morphAttributes.color;let yt=Ei;B.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(yt=v.toneMapping);const lt=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,rt=lt!==void 0?lt.length:0,Ae=_e.get(B),gt=p.state.lights;if(Ze===!0&&($===!0||y!==M)){const Xt=y===M&&B.id===S;ie.setState(B,y,Xt)}let Ke=!1;B.version===Ae.__version?(Ae.needsLights&&Ae.lightsStateVersion!==gt.state.version||Ae.outputColorSpace!==pe||F.isBatchedMesh&&Ae.batching===!1||!F.isBatchedMesh&&Ae.batching===!0||F.isBatchedMesh&&Ae.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Ae.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Ae.instancing===!1||!F.isInstancedMesh&&Ae.instancing===!0||F.isSkinnedMesh&&Ae.skinning===!1||!F.isSkinnedMesh&&Ae.skinning===!0||F.isInstancedMesh&&Ae.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Ae.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Ae.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Ae.instancingMorph===!1&&F.morphTexture!==null||Ae.envMap!==de||B.fog===!0&&Ae.fog!==Q||Ae.numClippingPlanes!==void 0&&(Ae.numClippingPlanes!==ie.numPlanes||Ae.numIntersection!==ie.numIntersection)||Ae.vertexAlphas!==Ce||Ae.vertexTangents!==Le||Ae.morphTargets!==we||Ae.morphNormals!==Xe||Ae.morphColors!==tt||Ae.toneMapping!==yt||Ae.morphTargetsCount!==rt)&&(Ke=!0):(Ke=!0,Ae.__version=B.version);let rn=Ae.currentProgram;Ke===!0&&(rn=$r(B,N,F));let cs=!1,an=!1,nr=!1;const _t=rn.getUniforms(),mn=Ae.uniforms;if(ge.useProgram(rn.program)&&(cs=!0,an=!0,nr=!0),B.id!==S&&(S=B.id,an=!0),cs||M!==y){ge.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),_t.setValue(R,"projectionMatrix",y.projectionMatrix),_t.setValue(R,"viewMatrix",y.matrixWorldInverse);const tn=_t.map.cameraPosition;tn!==void 0&&tn.setValue(R,fe.setFromMatrixPosition(y.matrixWorld)),De.logarithmicDepthBuffer&&_t.setValue(R,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&_t.setValue(R,"isOrthographic",y.isOrthographicCamera===!0),M!==y&&(M=y,an=!0,nr=!0)}if(F.isSkinnedMesh){_t.setOptional(R,F,"bindMatrix"),_t.setOptional(R,F,"bindMatrixInverse");const Xt=F.skeleton;Xt&&(Xt.boneTexture===null&&Xt.computeBoneTexture(),_t.setValue(R,"boneTexture",Xt.boneTexture,Oe))}F.isBatchedMesh&&(_t.setOptional(R,F,"batchingTexture"),_t.setValue(R,"batchingTexture",F._matricesTexture,Oe),_t.setOptional(R,F,"batchingIdTexture"),_t.setValue(R,"batchingIdTexture",F._indirectTexture,Oe),_t.setOptional(R,F,"batchingColorTexture"),F._colorsTexture!==null&&_t.setValue(R,"batchingColorTexture",F._colorsTexture,Oe));const gn=O.morphAttributes;if((gn.position!==void 0||gn.normal!==void 0||gn.color!==void 0)&&ee.update(F,O,rn),(an||Ae.receiveShadow!==F.receiveShadow)&&(Ae.receiveShadow=F.receiveShadow,_t.setValue(R,"receiveShadow",F.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(mn.envMap.value=de,mn.flipEnvMap.value=de.isCubeTexture&&de.isRenderTargetTexture===!1?-1:1),B.isMeshStandardMaterial&&B.envMap===null&&N.environment!==null&&(mn.envMapIntensity.value=N.environmentIntensity),an&&(_t.setValue(R,"toneMappingExposure",v.toneMappingExposure),Ae.needsLights&&Ku(mn,nr),Q&&B.fog===!0&&j.refreshFogUniforms(mn,Q),j.refreshMaterialUniforms(mn,B,G,ne,p.state.transmissionRenderTarget[y.id]),Oa.upload(R,Gc(Ae),mn,Oe)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(Oa.upload(R,Gc(Ae),mn,Oe),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&_t.setValue(R,"center",F.center),_t.setValue(R,"modelViewMatrix",F.modelViewMatrix),_t.setValue(R,"normalMatrix",F.normalMatrix),_t.setValue(R,"modelMatrix",F.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){const Xt=B.uniformsGroups;for(let tn=0,fo=Xt.length;tn<fo;tn++){const Di=Xt[tn];ke.update(Di,rn),ke.bind(Di,rn)}}return rn}function Ku(y,N){y.ambientLightColor.needsUpdate=N,y.lightProbe.needsUpdate=N,y.directionalLights.needsUpdate=N,y.directionalLightShadows.needsUpdate=N,y.pointLights.needsUpdate=N,y.pointLightShadows.needsUpdate=N,y.spotLights.needsUpdate=N,y.spotLightShadows.needsUpdate=N,y.rectAreaLights.needsUpdate=N,y.hemisphereLights.needsUpdate=N}function ju(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(y,N,O){const B=_e.get(y);B.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,B.__autoAllocateDepthBuffer===!1&&(B.__useRenderToTexture=!1),_e.get(y.texture).__webglTexture=N,_e.get(y.depthTexture).__webglTexture=B.__autoAllocateDepthBuffer?void 0:O,B.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,N){const O=_e.get(y);O.__webglFramebuffer=N,O.__useDefaultFramebuffer=N===void 0};const Zu=R.createFramebuffer();this.setRenderTarget=function(y,N=0,O=0){D=y,T=N,P=O;let B=!0,F=null,Q=!1,le=!1;if(y){const de=_e.get(y);if(de.__useDefaultFramebuffer!==void 0)ge.bindFramebuffer(R.FRAMEBUFFER,null),B=!1;else if(de.__webglFramebuffer===void 0)Oe.setupRenderTarget(y);else if(de.__hasExternalTextures)Oe.rebindTextures(y,_e.get(y.texture).__webglTexture,_e.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const we=y.depthTexture;if(de.__boundDepthTexture!==we){if(we!==null&&_e.has(we)&&(y.width!==we.image.width||y.height!==we.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Oe.setupDepthRenderbuffer(y)}}const Ce=y.texture;(Ce.isData3DTexture||Ce.isDataArrayTexture||Ce.isCompressedArrayTexture)&&(le=!0);const Le=_e.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Le[N])?F=Le[N][O]:F=Le[N],Q=!0):y.samples>0&&Oe.useMultisampledRTT(y)===!1?F=_e.get(y).__webglMultisampledFramebuffer:Array.isArray(Le)?F=Le[O]:F=Le,L.copy(y.viewport),z.copy(y.scissor),H=y.scissorTest}else L.copy(Ee).multiplyScalar(G).floor(),z.copy(He).multiplyScalar(G).floor(),H=at;if(O!==0&&(F=Zu),ge.bindFramebuffer(R.FRAMEBUFFER,F)&&B&&ge.drawBuffers(y,F),ge.viewport(L),ge.scissor(z),ge.setScissorTest(H),Q){const de=_e.get(y.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+N,de.__webglTexture,O)}else if(le){const de=N;for(let Ce=0;Ce<y.textures.length;Ce++){const Le=_e.get(y.textures[Ce]);R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0+Ce,Le.__webglTexture,O,de)}}else if(y!==null&&O!==0){const de=_e.get(y.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,de.__webglTexture,O)}S=-1},this.readRenderTargetPixels=function(y,N,O,B,F,Q,le,pe=0){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let de=_e.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&le!==void 0&&(de=de[le]),de){ge.bindFramebuffer(R.FRAMEBUFFER,de);try{const Ce=y.textures[pe],Le=Ce.format,we=Ce.type;if(!De.textureFormatReadable(Le)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!De.textureTypeReadable(we)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=y.width-B&&O>=0&&O<=y.height-F&&(y.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+pe),R.readPixels(N,O,B,F,ye.convert(Le),ye.convert(we),Q))}finally{const Ce=D!==null?_e.get(D).__webglFramebuffer:null;ge.bindFramebuffer(R.FRAMEBUFFER,Ce)}}},this.readRenderTargetPixelsAsync=async function(y,N,O,B,F,Q,le,pe=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let de=_e.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&le!==void 0&&(de=de[le]),de)if(N>=0&&N<=y.width-B&&O>=0&&O<=y.height-F){ge.bindFramebuffer(R.FRAMEBUFFER,de);const Ce=y.textures[pe],Le=Ce.format,we=Ce.type;if(!De.textureFormatReadable(Le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!De.textureTypeReadable(we))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Xe=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,Xe),R.bufferData(R.PIXEL_PACK_BUFFER,Q.byteLength,R.STREAM_READ),y.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+pe),R.readPixels(N,O,B,F,ye.convert(Le),ye.convert(we),0);const tt=D!==null?_e.get(D).__webglFramebuffer:null;ge.bindFramebuffer(R.FRAMEBUFFER,tt);const yt=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await ip(R,yt,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,Xe),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,Q),R.deleteBuffer(Xe),R.deleteSync(yt),Q}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,N=null,O=0){const B=Math.pow(2,-O),F=Math.floor(y.image.width*B),Q=Math.floor(y.image.height*B),le=N!==null?N.x:0,pe=N!==null?N.y:0;Oe.setTexture2D(y,0),R.copyTexSubImage2D(R.TEXTURE_2D,O,0,0,le,pe,F,Q),ge.unbindTexture()};const Ju=R.createFramebuffer(),Qu=R.createFramebuffer();this.copyTextureToTexture=function(y,N,O=null,B=null,F=0,Q=null){Q===null&&(F!==0?(Fr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Q=F,F=0):Q=0);let le,pe,de,Ce,Le,we,Xe,tt,yt;const lt=y.isCompressedTexture?y.mipmaps[Q]:y.image;if(O!==null)le=O.max.x-O.min.x,pe=O.max.y-O.min.y,de=O.isBox3?O.max.z-O.min.z:1,Ce=O.min.x,Le=O.min.y,we=O.isBox3?O.min.z:0;else{const gn=Math.pow(2,-F);le=Math.floor(lt.width*gn),pe=Math.floor(lt.height*gn),y.isDataArrayTexture?de=lt.depth:y.isData3DTexture?de=Math.floor(lt.depth*gn):de=1,Ce=0,Le=0,we=0}B!==null?(Xe=B.x,tt=B.y,yt=B.z):(Xe=0,tt=0,yt=0);const rt=ye.convert(N.format),Ae=ye.convert(N.type);let gt;N.isData3DTexture?(Oe.setTexture3D(N,0),gt=R.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(Oe.setTexture2DArray(N,0),gt=R.TEXTURE_2D_ARRAY):(Oe.setTexture2D(N,0),gt=R.TEXTURE_2D),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,N.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,N.unpackAlignment);const Ke=R.getParameter(R.UNPACK_ROW_LENGTH),rn=R.getParameter(R.UNPACK_IMAGE_HEIGHT),cs=R.getParameter(R.UNPACK_SKIP_PIXELS),an=R.getParameter(R.UNPACK_SKIP_ROWS),nr=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,lt.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,lt.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Ce),R.pixelStorei(R.UNPACK_SKIP_ROWS,Le),R.pixelStorei(R.UNPACK_SKIP_IMAGES,we);const _t=y.isDataArrayTexture||y.isData3DTexture,mn=N.isDataArrayTexture||N.isData3DTexture;if(y.isDepthTexture){const gn=_e.get(y),Xt=_e.get(N),tn=_e.get(gn.__renderTarget),fo=_e.get(Xt.__renderTarget);ge.bindFramebuffer(R.READ_FRAMEBUFFER,tn.__webglFramebuffer),ge.bindFramebuffer(R.DRAW_FRAMEBUFFER,fo.__webglFramebuffer);for(let Di=0;Di<de;Di++)_t&&(R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,_e.get(y).__webglTexture,F,we+Di),R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,_e.get(N).__webglTexture,Q,yt+Di)),R.blitFramebuffer(Ce,Le,le,pe,Xe,tt,le,pe,R.DEPTH_BUFFER_BIT,R.NEAREST);ge.bindFramebuffer(R.READ_FRAMEBUFFER,null),ge.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else if(F!==0||y.isRenderTargetTexture||_e.has(y)){const gn=_e.get(y),Xt=_e.get(N);ge.bindFramebuffer(R.READ_FRAMEBUFFER,Ju),ge.bindFramebuffer(R.DRAW_FRAMEBUFFER,Qu);for(let tn=0;tn<de;tn++)_t?R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,gn.__webglTexture,F,we+tn):R.framebufferTexture2D(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,gn.__webglTexture,F),mn?R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Xt.__webglTexture,Q,yt+tn):R.framebufferTexture2D(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,Xt.__webglTexture,Q),F!==0?R.blitFramebuffer(Ce,Le,le,pe,Xe,tt,le,pe,R.COLOR_BUFFER_BIT,R.NEAREST):mn?R.copyTexSubImage3D(gt,Q,Xe,tt,yt+tn,Ce,Le,le,pe):R.copyTexSubImage2D(gt,Q,Xe,tt,Ce,Le,le,pe);ge.bindFramebuffer(R.READ_FRAMEBUFFER,null),ge.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else mn?y.isDataTexture||y.isData3DTexture?R.texSubImage3D(gt,Q,Xe,tt,yt,le,pe,de,rt,Ae,lt.data):N.isCompressedArrayTexture?R.compressedTexSubImage3D(gt,Q,Xe,tt,yt,le,pe,de,rt,lt.data):R.texSubImage3D(gt,Q,Xe,tt,yt,le,pe,de,rt,Ae,lt):y.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,Q,Xe,tt,le,pe,rt,Ae,lt.data):y.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,Q,Xe,tt,lt.width,lt.height,rt,lt.data):R.texSubImage2D(R.TEXTURE_2D,Q,Xe,tt,le,pe,rt,Ae,lt);R.pixelStorei(R.UNPACK_ROW_LENGTH,Ke),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,rn),R.pixelStorei(R.UNPACK_SKIP_PIXELS,cs),R.pixelStorei(R.UNPACK_SKIP_ROWS,an),R.pixelStorei(R.UNPACK_SKIP_IMAGES,nr),Q===0&&N.generateMipmaps&&R.generateMipmap(gt),ge.unbindTexture()},this.initRenderTarget=function(y){_e.get(y).__webglFramebuffer===void 0&&Oe.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?Oe.setTextureCube(y,0):y.isData3DTexture?Oe.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?Oe.setTexture2DArray(y,0):Oe.setTexture2D(y,0),ge.unbindTexture()},this.resetState=function(){T=0,P=0,D=null,ge.reset(),oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Hn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=je._getDrawingBufferColorSpace(e),t.unpackColorSpace=je._getUnpackColorSpace()}}class lu{constructor(e,t){this.make=e,this.capacity=t}make;capacity;live=[];spare=[];get(){if(this.live.length>=this.capacity){const t=this.live.shift();return this.live.push(t),t}const e=this.spare.pop()??this.make();return this.live.push(e),e}release(e){const[t]=this.live.splice(e,1);t&&this.spare.push(t)}sweep(e){for(let t=this.live.length-1;t>=0;t--)e(this.live[t])||this.release(t)}clear(){this.spare.push(...this.live),this.live.length=0}get allocated(){return this.live.length+this.spare.length}}const ao=6,At=(n,e,t,i,s,r,a,o,h,l,c)=>({sprite:n,name:e,w:t,h:i,inset:s,mass:r,damage:a,grab:o,throw:h,breakable:l,shards:c}),Nt={hat:At("gen_hat.png","котелок",.78,.975,[.03,.97,0,.54],.5,0,6,10,!1),bottle:At("gen_bottle.png","бутылка",.62,.82,[.26,.74,0,.96],1,15,6,10,!0,["#3aa860","#e8f6ee","#f7c56d"]),barrel:At("gen_barrel.png","бочонок",.7,.82,[.1,.9,0,.96],3,25,7,12,!1),mug:At("gen_mug.png","кружка",.56,.7,[.03,.97,0,.97],1,15,6,10,!0,["#ffd23f","#ffffff","#bfe6f2"]),whiskey:At("gen_whiskey.png","виски",.5,.82,[.28,.72,0,.97],1,15,6,10,!0,["#d07a2a","#bfe6f2","#f4e3b5"]),stool:At("gen_stool.png","табурет",.8,1,[.073,.927,.006,.969],3,25,7,12,!1),spittoon:At("gen_spittoon.png","плевательница",.6,.75,[.031,.969,.006,.694],2.5,20,6,11,!1),shaker:At("gen_shaker.png","шейкер",.36,.45,[.197,.803,.006,.969],1,12,6,10,!1),eggs:At("gen_eggs.png","банка яиц",.5,.62,[.103,.897,.006,.969],1.5,15,6,10,!0,["#ffe680","#bfe6f2","#e8475f"]),plunger:At("gen_plunger.png","вантуз",.56,.7,[.211,.789,.006,.969],.8,10,6,10,!1),hydrant:At("gen_hydrant.png","гидрант",.72,.9,[.094,.906,.006,.969],5,35,9,16,!1),tire:At("gen_tire.png","шина",.72,.9,[.031,.969,.006,.899],3,20,7,12,!1),melon:At("gen_melon.png","арбуз",.64,.8,[.031,.969,.006,.821],2.5,20,6,11,!0,["#3aa860","#ff4f6d","#1f1f1f"]),fish:At("gen_fish.png","рыба",.72,.9,[.031,.969,.006,.514],1,12,6,10,!1),anvil:At("gen_anvil.png","наковальня",.8,1,[.031,.969,.006,.531],7,45,11,18,!1),chicken:At("gen_chicken.png","резиновая курица",.5,.62,[.252,.748,.006,.969],.5,3,6,10,!1),bowling:At("gen_bowling.png","шар для боулинга",.4,.5,[.031,.969,.006,.75],4,30,8,14,!1),flowerpot:At("gen_flowerpot.png","цветочный горшок",.56,.7,[.137,.863,.006,.969],1.5,15,6,10,!0,["#e07a3a","#6b4a32","#ffffff"]),pie:At("gen_pie.png","кремовый пирог",.56,.7,[.031,.969,.006,.577],.8,10,6,10,!0,["#fff3d6","#ff4f6d","#f1c27d"])},Px=Object.keys(Nt),jh={mole:{w:1.3,h:1.625,inset:[.1,.9,.006,.66]},granny:{w:1.3,h:1.625,inset:[.165,.835,.006,.81]},kitten:{w:.9,h:1.125,inset:[.113,.887,.006,.7]},pigeon:{w:.9,h:1.125,inset:[.151,.849,.006,.69]},drunk:{w:1.4,h:1.75,inset:[.2,.8,.006,.85]},bartender:{w:1.52,h:1.9,inset:[.22,.78,.03,.78]}},Zh={rat:{w:1.8,h:2.25,inset:[.17,.83,.006,.63]},gang:{w:1.8,h:2.25,inset:[.134,.866,.006,.69]},kid:{w:1.8,h:2.25,inset:[.25,.75,.006,.73]}},Jh=120,$l=.6,Dx={mole:["ОЙ! МОЯ КАСКА!","ХУЛИГАН!","Я ЖЕ ПОД ЗЕМЛЁЙ ЖИВУ!"],granny:["ХАМ! ПОЛИЦИЯ!","ВОТ Я ТЕБЕ ЗОНТИКОМ!","В МОЁ ВРЕМЯ ТАК НЕ БИЛИ!"],kitten:["ПФФФ! МЯУ!!","ШШШ! НАХАЛ!","МЯ-А-АУ?!"],pigeon:["ПИСЬМА ПОМЯЛ!","ЖАЛОБА ПОЧТОЙ!","КУРЛЫ-ХАМ!"],drunk:["ЧЕГО-О?! ИК!","КТО ТУТ ДЕРЁТСЯ?! ИК!","Я НЕ СПЛЮ! ИК!"],bartender:["ПОСУДУ НЕ БЕЙ!","В МОЁМ БАРЕ НЕ ДРАТЬСЯ!","ЗА СТОЙКУ НЕ ЗАХОДИ!"]},Kt={period:6.5,rise:[2.2,2.5],dig:[5.6,5.9],depth:1.15,hittable:.35};function Lx(n,e){const t=Math.floor(n/Kt.period),i=n-t*Kt.period,s=i<Kt.rise[0]||i>Kt.dig[1]?0:i<Kt.rise[1]?(i-Kt.rise[0])/(Kt.rise[1]-Kt.rise[0]):i<Kt.dig[0]?1:1-(i-Kt.dig[0])/(Kt.dig[1]-Kt.dig[0]);return{hole:(t%e+e)%e,rise:s,lantern:t%2===1,look:Math.sin(i*2.4)>0?1:-1}}const Kl=n=>n*n*(3-2*n);function Ix(n,e,t,i){const s=(n/i%1+1)%1,r=.2;return s<r/2?{x:e,walking:!1,facing:1}:s<.5-r/2?{x:e+(t-e)*Kl((s-r/2)/(.5-r)),walking:!0,facing:t>=e?1:-1}:s<.5+r/2?{x:t,walking:!1,facing:-1}:{x:t+(e-t)*Kl((s-.5-r/2)/(.5-r)),walking:!0,facing:t>=e?-1:1}}function Ec(n,e,t=!0){if(n.who==="mole"&&n.spots?.length){const s=Lx(t?e:Kt.rise[1]+.5,n.spots.length),r=n.spots[s.hole];return{x:r.x,y:n.y-Kt.depth*(1-s.rise),z:r.z,rise:s.rise,walking:!1,facing:s.look,lantern:s.lantern}}if(n.x0===n.x1||!t)return{x:n.x0,y:n.y,z:n.z,rise:1,walking:!1,facing:1,lantern:!1};const i=Ix(e,n.x0,n.x1,n.period);return{x:i.x,y:n.y,z:n.z,rise:1,walking:i.walking,facing:i.facing,lantern:!1}}const si={appear:.45,attack:2.5,strike:2.85,every:6.5,first:4,depth:5.6},Ux={rat:{what:"stamina",line:"КРЫСА СПЁРЛА СИЛЫ! −35"},gang:{what:"splat",line:"ПЛЮХ! ГОЛУБЬ ЗАЛЯПАЛ ЭКРАН!"},kid:{what:"heart",line:"ЩЁЛК! ИЗ РОГАТКИ В ЛОБ! −♥"}},Nx=35;function Fx(n,e,t=!0){const i=t?Kl(Math.min(1,e/si.appear)):1;return n.from==="manhole"?{x:n.x,y:-1.3*(1-i),z:n.z}:{x:n.x+n.side*1.8*(1-i),y:0,z:n.z}}const ks=(n,e,t,i,s,r,a,o)=>({id:n,kind:e,min:{x:t-r/2,y:i-a/2,z:s-o/2},max:{x:t+r/2,y:i+a/2,z:s+o/2}}),Gt={enemy:{w:1.52,h:1.9,inset:[.2,.82,.03,.95]},dog:{w:1.1,h:1.375,inset:[.14,.9,.03,.95]},...Nt},wc={cat:Gt.enemy.inset,walrus:[.08,.92,.03,.93],bulldog:[.14,.86,.03,.75],weasel:[.22,.78,.03,.78]},kx=.82,Jt=(n,e,t,i,s,r,a,o,h,l)=>({id:n,look:e,layer:t,color:l,min:{x:i-a/2,y:s,z:r-h/2},max:{x:i+a/2,y:s+o,z:r+h/2}});function cu(n,e,t,i,s,r,a){const o=[];let l=0,c=0;const d=(u,f,g,_)=>{f-u>.01&&_-g>.01&&o.push({id:`${n}-${c++}`,look:"wall",layer:"background",color:a,min:{x:u,y:g,z:e-.3/2},max:{x:f,y:_,z:e+.3/2}})};for(const u of r){d(t,i,l,u.sill);let f=t;for(const g of u.xs)d(f,g-u.w/2,u.sill,u.sill+u.h),f=g+u.w/2,o.push({id:`${n}-room-${c++}`,look:"interior",layer:"background",color:"#33403f",min:{x:g-u.w/2-.5,y:u.sill-1.2,z:e-1.35},max:{x:g+u.w/2+.5,y:u.sill+u.h+.6,z:e-1.2}});d(f,i,u.sill,u.sill+u.h),l=u.sill+u.h}return d(t,i,l,s),o}function zx(n,e,t,i,s,r){const a=[];for(let o=t,h=0;o+.26<=i+1e-6;o+=.36,h++)a.push(Jt(`${n}-p${h}`,"plank","midground",o+.13,0,e,.26,s-h%2*.08,.07,r));return a.push(Jt(`${n}-rail`,"rail","midground",(t+i)/2,s*.62,e-.07,i-t,.12,.07,"#6e4d36")),a}const Qh=(n,e)=>({...n,min:{...n.min,x:n.min.x+e},max:{...n.max,x:n.max.x+e}}),ed=(n,e)=>({...n,x:n.x+e,hideX:n.hideX+e}),ni=-8,ti=8,td={covers:[Jt("barrel-a","barrel","foreground",-2.75,0,3,.92,1.15,.92,"#c83c32"),Jt("barrel-b","barrel","foreground",-1.92,0,3.35,.8,.98,.8,"#2f6f73"),Jt("crate-a","crate","foreground",2.9,0,3.05,1.15,1.15,1.1,"#c9944f"),Jt("crate-b","crate","foreground",3.05,1.15,3.05,.72,.72,.72,"#d9a862"),...zx("fence",-1.6,-4.6,4.6,1.3,"#a8754c"),...cu("block",-9,-13,8,9,[{sill:1.7,h:1.65,w:1.7,xs:[-4.2,0,4.2]},{sill:4.6,h:1.5,w:1.5,xs:[-6.5,-2.1,2.1,6.5]}],"#c9c3ae")],slots:[{x:-2.45,y:0,z:2.25,layer:"foreground",hideX:-2.45,hideY:-1.2},{x:-2,y:0,z:-2.35,layer:"midground",hideX:-2,hideY:-1.05},{x:4.2,y:.72,z:-9.5,layer:"background",hideX:4.2,hideY:-.35},{x:1.95,y:0,z:2.35,layer:"foreground",hideX:2.9,hideY:-.85},{x:.95,y:0,z:-2.35,layer:"midground",hideX:.95,hideY:-1.05},{x:-4.2,y:.72,z:-9.5,layer:"background",hideX:-4.2,hideY:-.35}]},nd={covers:[Jt("dumpster","dumpster","foreground",-2.6,0,3,2,1.22,1.1,"#3f7b55"),Jt("pallets","pallet","foreground",2.95,0,3.15,1.3,1.3,1.1,"#b98a52"),Jt("van","van","midground",-2.1,.25,-2.6,3.4,1.85,1.7,"#e9e2cd"),Jt("barrier","barrier","midground",2.55,0,-1.9,2.5,1.02,.55,"#b8b7ac"),...cu("shop",-11,-7,7,9,[{sill:1.3,h:1.6,w:2,xs:[-2.8,2.8]},{sill:4.3,h:1.6,w:1.6,xs:[0]}],"#d58f86")],slots:[{x:2.45,y:0,z:2.45,layer:"foreground",hideX:3.15,hideY:-1.1},{x:-2.6,y:0,z:2.15,layer:"foreground",hideX:-2.6,hideY:-1.15},{x:0,y:3.45,z:-11.5,layer:"background",hideX:0,hideY:2.25},{x:.25,y:0,z:-3.3,layer:"midground",hideX:-1.05,hideY:0},{x:2.8,y:.45,z:-11.5,layer:"background",hideX:2.8,hideY:-.75},{x:2.9,y:0,z:-2.55,layer:"midground",hideX:2.9,hideY:-1},{x:-2.8,y:.45,z:-11.5,layer:"background",hideX:-2.8,hideY:-.75}]},Ox={name:"БАР «ДЛИННЫЕ РУКИ»",look:"bar",pan:0,goal:9,deadline:5.2,maxAlive:3,covers:[Jt("piano","piano","foreground",-2.75,0,3,1.9,1.3,.75,"#3b2c24"),Jt("table","table","foreground",2.95,0,3.1,1.3,1.05,1.1,"#ece6d2"),Jt("counter","counter","midground",.3,0,-2.4,6.4,1.15,.8,"#6b4a32"),Jt("shelves","shelves","background",-.4,0,-6.4,5.2,2.9,.5,"#2e241c"),Jt("doorwall","wall","background",6.7,0,-7.4,2.6,3.4,.3,"#4a3f36")],slots:[{x:-2.55,y:0,z:2.2,layer:"foreground",hideX:-2.55,hideY:-1.25,skin:"walrus"},{x:-1.1,y:.3,z:-3.15,layer:"midground",hideX:-1.1,hideY:-.9,skin:"bulldog"},{x:2.55,y:0,z:2.3,layer:"foreground",hideX:3,hideY:-1.15,skin:"walrus"},{x:4.6,y:0,z:-7.85,layer:"background",hideX:6.7,hideY:0,skin:"bulldog"},{x:1.9,y:.3,z:-3.15,layer:"midground",hideX:1.9,hideY:-.9,skin:"walrus"}],order:[0,1,2,3,4],dogs:[{x:.2,y:0,z:-.7}],props:[{kind:"mug",x:-3.25,y:1.3,z:3},{kind:"whiskey",x:2.6,y:1.05,z:3.05},{kind:"eggs",x:3.3,y:1.05,z:3.25},{kind:"mug",x:-2.3,y:1.15,z:-2.12},{kind:"shaker",x:-1.5,y:1.15,z:-2.12},{kind:"whiskey",x:3.05,y:1.15,z:-2.12},{kind:"stool",x:-.95,y:0,z:3.9},{kind:"spittoon",x:1.95,y:0,z:4},{kind:"plunger",x:-1.6,y:0,z:1.1},{kind:"mug",x:.5,y:0,z:1.05},{kind:"whiskey",x:-4.4,y:0,z:1.5},{kind:"stool",x:3.55,y:0,z:.35},{kind:"eggs",x:-3.3,y:0,z:-.3}],gags:[{id:"piano",kind:"piano"},ks("gag-cuckoo","cuckoo",6.1,2.6,-7.12,.66,.82,.12),ks("gag-lamp-0","lamp",-3,5.7,-3.2,1.1,.6,1.1),ks("gag-lamp-1","lamp",2.5,5.7,-3.2,1.1,.6,1.1)],hat:{x:.95,y:.78,z:3.45},landing:{cover:"counter",band:.4},friends:[{who:"mole",x0:0,x1:0,y:0,z:0,period:0,spots:[{x:2.3,z:-1.3},{x:.1,z:1.7},{x:-1.25,z:-1.3},{x:-.75,z:2.6},{x:3.7,z:-.9}]},{who:"kitten",x0:-2.5,x1:2.75,y:1.15,z:-2.25,period:17},{who:"drunk",x0:4.75,x1:4.75,y:0,z:1.75,period:0},{who:"bartender",x0:.3,x1:.3,y:.3,z:-3.15,period:0}]},Bx={name:"УЛИЦА: ДВОР И ПЕРЕУЛОК",look:"street",pan:8,goal:22,deadline:5.4,maxAlive:5,covers:[...td.covers.map(n=>Qh(n,ni)),...nd.covers.map(n=>Qh(n,ti))],slots:[...td.slots.map(n=>ed(n,ni)),...nd.slots.map(n=>ed(n,ti))],order:[0,6,4,9,2,7,3,11,1,8,5,12,10],dogs:[{x:.45+ni,y:0,z:-.85},{x:2.3+ti,y:0,z:-1.25}],gags:[ks("gag-bell-0","bell",ti-3.5,5.75,-5,1,.7,.8),ks("gag-bell-1","bell",ti+3.5,5.75,-5,1,.7,.8),ks("gag-laundry","laundry",ni,3.85,-4.5,12,1.2,.2)],props:[{kind:"bottle",x:-8.6,y:0,z:3.8},{kind:"barrel",x:-12.7,y:0,z:3.6},{kind:"melon",x:-7.2,y:0,z:1.2},{kind:"fish",x:-4.95,y:1.87,z:3.05},{kind:"flowerpot",x:-10.75,y:1.15,z:3},{kind:"pie",x:-9.92,y:.98,z:3.35},{kind:"chicken",x:-6.1,y:0,z:.4},{kind:"tire",x:-13.6,y:0,z:1},{kind:"bowling",x:-3.1,y:0,z:3.9},{kind:"bottle",x:-11.6,y:0,z:.3},{kind:"hydrant",x:.6,y:0,z:2.7},{kind:"bottle",x:-1.1,y:0,z:1},{kind:"anvil",x:2.3,y:0,z:3.9},{kind:"barrel",x:3.4,y:0,z:3.6},{kind:"bottle",x:4.9,y:1.22,z:3},{kind:"melon",x:7.7,y:0,z:1},{kind:"fish",x:10.8,y:1.3,z:3.15},{kind:"pie",x:9,y:0,z:3.9},{kind:"tire",x:12.7,y:0,z:3.5},{kind:"flowerpot",x:10,y:1.02,z:-1.9},{kind:"chicken",x:8.1,y:0,z:-.2},{kind:"bowling",x:13.7,y:0,z:1.4},{kind:"bottle",x:14.3,y:0,z:3.7}],friends:[{who:"mole",x0:0,x1:0,y:0,z:0,period:0,spots:[{x:ni-1.6,z:-.95},{x:ti+.4,z:-1},{x:ni+2,z:4.4},{x:ti-2.4,z:4.3},{x:ni+.95,z:-.95},{x:ti+2.9,z:-1.2}]},{who:"granny",x0:-14,x1:14,y:0,z:.55,period:56},{who:"pigeon",x0:3.6,x1:13.2,y:0,z:1.75,period:19}],thugs:!0},vt={1:Ox,2:Bx},kr=2,jl=(n,e)=>{const t=vt[n]?.pan??0;return Math.max(-t,Math.min(t,e))};function Zl(n,e,t){const i=vt[n],s=i?.landing;if(!s||e!==s.cover||!t)return!1;const r=i.covers.find(a=>a.id===s.cover);return r?t.y>=r.max.y-s.band&&t.x>=r.min.x&&t.x<=r.max.x:!1}const hu=.32,Jl=[{at:1.35,len:.8},{at:3.3,len:.75}],Xs=.9,du=n=>1-(1-n)**3;function Hx(n,e=1/0,t=!0){if(!t)return 1;let i=du(Math.min(1,n/hu));for(const s of Jl)n>s.at&&n<s.at+s.len&&s.at+s.len<e-Xs&&(i*=1-.62*Math.sin(Math.PI*(n-s.at)/s.len));return i}function Tc(n,e=!0){if(!e)return{dx:0,walking:!1,facing:1};const t=9,i=n%t,s=-.7,r=.7,a=o=>o*o*(3-2*o);return i<3.5?{dx:s,walking:!1,facing:1}:i<4.5?{dx:s+(r-s)*a(i-3.5),walking:!0,facing:1}:i<8?{dx:r,walking:!1,facing:-1}:{dx:r+(s-r)*a(i-8),walking:!0,facing:-1}}const cn={period:23,start:15,up:1.4,hold:2.2,down:1.4,height:1.6};function uu(n,e=!0){if(!e)return 0;const t=n%cn.period-cn.start;if(t<0)return 0;const i=r=>r*r*(3-2*r);if(t<cn.up)return cn.height*i(t/cn.up);if(t<cn.up+cn.hold)return cn.height;const s=t-cn.up-cn.hold;return s<cn.down?cn.height*(1-i(s/cn.down)):0}function un(n,e,t=!0){if(e.kind==="dog")return{x:e.x+Tc(e.age,t).dx,y:e.y+uu(e.age,t),z:e.z??0};if(e.kind==="friend"){const r=vt[n].friends[e.plan??0];if(r)return Ec(r,e.age,t)}if(e.kind==="thug")return Fx({x:e.x,z:e.z??0,side:e.side??1,from:e.from??"edge"},e.age,t);const i=e.slot===void 0?void 0:vt[n].slots[e.slot];if(!i)return{x:e.x,y:e.y,z:e.z??0};const s=e.antic||e.blind?t?du(Math.min(1,e.age/hu)):1:Hx(e.age,e.deadline,t);return{x:i.hideX+(i.x-i.hideX)*s,y:i.hideY+(i.y-i.hideY)*s,z:i.z}}function oo(n,e){return n==="friend"&&e&&e in jh?jh[e]:n==="thug"&&e&&e in Zh?Zh[e]:Gt[n]??Gt.enemy}function Gx(n,e,t,i){const s=oo(n,i),[r,a,o,h]=t?wc[t]:s.inset;return{min:{x:e.x-s.w/2+s.w*r,y:e.y+s.h*o,z:e.z-.04},max:{x:e.x-s.w/2+s.w*a,y:e.y+s.h*h,z:e.z+.04}}}function Vx(n,e,t=!0,i=[]){const s=vt[n].covers.map(r=>({id:r.id,kind:"cover",min:r.min,max:r.max}));for(const r of vt[n].gags)r.min&&r.max&&s.push({id:r.id,kind:"cover",min:r.min,max:r.max});for(const r of e){if(r.kind==="friend"&&r.who==="mole"){const o=vt[n].friends[r.plan??0];if(o&&Ec(o,r.age,t).rise<Kt.hittable)continue}const a=Gx(r.kind,un(n,r,t),r.kind==="enemy"?r.skin:void 0,r.who);r.kind==="dog"&&Tc(r.age,t).walking&&(a.max.y=a.min.y+Gt.dog.h*(kx-Gt.dog.inset[2])),s.push({id:r.id,kind:r.kind==="enemy"||r.kind==="dog"||r.kind==="friend"||r.kind==="thug"?r.kind:"prop",...a})}return s.concat(i)}function fu(n,e,t=0){const i=n<650?60:50,s=n/Math.max(1,e),r=Math.atan(Math.tan(i*Math.PI/360)*s),a=Math.max(9.5,3+3.1/Math.tan(r));return{fov:i,position:{x:t,y:2.3+(a-9.5)*.12,z:a},look:{x:t,y:1.35+(a-9.5)*.1,z:-3}}}const Ko=26,Wx=.9;function pu(n,e,t,i){let s=0,r=1/0;for(const a of["x","y","z"]){if(Math.abs(e[a])<1e-9){if(n[a]<t[a]||n[a]>i[a])return null;continue}let o=(t[a]-n[a])/e[a],h=(i[a]-n[a])/e[a];if(o>h&&([o,h]=[h,o]),s=Math.max(s,o),r=Math.min(r,h),s>r)return null}return s}const mu=n=>{const e=Math.hypot(n.x,n.y,n.z)||1;return{x:n.x/e,y:n.y/e,z:n.z/e}},Ea=(n,e,t)=>({x:n.x+e.x*t,y:n.y+e.y*t,z:n.z+e.z*t});function Ac(n,e,t,i="punch"){const s=mu(e);let r=null;for(const h of t){let l=h.min,c=h.max;if(i==="grab"&&h.kind==="prop"){const u=(l.x+c.x)/2,f=(l.y+c.y)/2,g=(c.x-l.x)/2*1.8,_=(c.y-l.y)/2*1.8;l={x:u-g,y:f-_,z:l.z-.25},c={x:u+g,y:f+_,z:c.z+.25}}const d=pu(n,s,l,c);d!==null&&d<=Ko*2&&(!r||d<r.distance)&&(r={kind:h.kind,id:h.id,point:Ea(n,s,d),distance:d})}if(i==="grab"&&r?.kind!=="prop"){const h=r?r.point:(()=>{const c=s.y<-1e-6?-n.y/s.y:1/0;return Ea(n,s,Math.min(c,Ko))})();let l=null;for(const c of t){if(c.kind!=="prop")continue;const d={x:(c.min.x+c.max.x)/2,y:(c.min.y+c.max.y)/2,z:(c.min.z+c.max.z)/2},u={x:d.x-n.x,y:d.y-n.y,z:d.z-n.z},f=u.x*s.x+u.y*s.y+u.z*s.z;if(f<=0)continue;const g=Ea(n,s,f),_=Math.hypot(d.x-g.x,d.y-g.y,d.z-g.z),m=Math.hypot(d.x-h.x,d.y-h.y,d.z-h.z),p=Math.min(_,m);p<=Wx&&(!l||p<l.dist)&&(l={h:c,dist:p,center:d,proj:f})}if(l)return{kind:"prop",id:l.h.id,point:l.center,distance:l.proj}}if(r)return r;const a=s.y<-1e-6?-n.y/s.y:1/0,o=Math.min(a,Ko);return{kind:"whiff",point:Ea(n,s,o),distance:o}}const gu=-9.5;function Xx(n,e){const t=22/Math.sqrt(Math.max(.5,Nt[n].mass));return Math.max(.3,Math.min(1,e/t))}const _u={above:2.4,hang:.16},wa={radius:.2,minSpeed:6.5,friction:.3,stop:.9};function qx(n,e,t,i){const s=e==="anvil"?{...i,y:i.y+_u.above,z:i.z-.04}:i,r={x:s.x-t.x,y:s.y-t.y,z:s.z-t.z},a=Xx(e,Math.hypot(r.x,r.y,r.z)),o={x:r.x/a,y:r.y/a-.5*gu*a,z:r.z/a},h={id:n,kind:e,pos:{...t},vel:o,age:0,angle:0,spin:(s.x>=t.x?-1:1)*11/Math.sqrt(Nt[e].mass),struck:!1};return e==="anvil"&&(h.drop=a),e==="bowling"&&(h.hits=[]),h}const jo=new Set(["enemy","dog","friend","thug"]),Yx=(n,e)=>n.x>e.min.x&&n.x<e.max.x&&n.y>e.min.y&&n.y<e.max.y&&n.z>e.min.z&&n.z<e.max.z,ur=.001;function $x(n,e,t){const i=[];let s=e;for(;s>1e-9;){const r=Math.min(s,.008333333333333333);if(s-=r,n.age+=r,n.angle+=n.spin*r,n.drop!==void 0&&!n.dropped&&n.age>=n.drop){if(n.vel={x:0,y:0,z:0},n.spin=0,n.angle=0,n.age<n.drop+_u.hang)continue;n.dropped=!0,n.vel.y=-3}if(n.rolling){const u=Math.hypot(n.vel.x,n.vel.z),f=Math.max(0,1-wa.friction*r);if(n.vel.x*=f,n.vel.z*=f,n.spin=-u*2.5,u<wa.stop)return i.push({type:"rest",point:{x:n.pos.x,y:0,z:n.pos.z},on:"ground"}),i}const a={x:n.pos.x+n.vel.x*r,y:n.pos.y+n.vel.y*r,z:n.pos.z+n.vel.z*r};n.rolling||(n.vel.y+=gu*r);const o={x:a.x-n.pos.x,y:a.y-n.pos.y,z:a.z-n.pos.z},h=Math.hypot(o.x,o.y,o.z),l=mu(o);let c=null;for(const u of t){if(u.kind==="prop"||Yx(n.pos,u)||jo.has(u.kind)&&(n.hits?n.hits.includes(u.id):n.struck))continue;let f=u.min,g=u.max;if(u.kind==="enemy"){const m=(f.x+g.x)/2,p=(f.y+g.y)/2,b=(g.x-f.x)/2*1.3,E=(g.y-f.y)/2*1.3;f={x:m-b,y:p-E,z:f.z-.1},g={x:m+b,y:p+E,z:g.z+.1}}const _=pu(n.pos,l,f,g);_!==null&&_<=h&&(!c||_<c.t)&&(c={t:_,hit:u})}const d=a.y<=0&&n.pos.y>0?h*n.pos.y/(n.pos.y-a.y):1/0;if(c&&c.t<=d){const u=c.hit,f={x:n.pos.x+l.x*c.t,y:n.pos.y+l.y*c.t,z:n.pos.z+l.z*c.t};if(jo.has(u.kind)&&n.hits){n.struck=!0,n.hits.push(u.id),i.push({type:"hit",kind:u.kind,id:u.id,point:f}),n.vel.x*=.85,n.vel.z*=.85;continue}if(jo.has(u.kind)){n.struck=!0,i.push({type:"hit",kind:u.kind,id:u.id,point:f}),n.pos={x:f.x,y:f.y,z:u.max.z+.08},n.vel={x:n.vel.x*.12,y:1.6,z:1.4},n.spin*=-.6;continue}if(l.y<0&&f.y>=u.max.y-ur)return i.push({type:"rest",point:{x:f.x,y:u.max.y,z:Math.min(u.max.z-.06,Math.max(u.min.z+.06,f.z))},on:u.id}),i;n.struck||(n.struck=!0,i.push({type:"hit",kind:u.kind,id:u.id,point:f}));const g=Math.abs(f.z-u.max.z)<ur?{z:1}:Math.abs(f.z-u.min.z)<ur?{z:-1}:Math.abs(f.x-u.max.x)<ur?{x:1}:Math.abs(f.x-u.min.x)<ur?{x:-1}:{y:-1};n.vel={x:n.vel.x*.25,y:Math.min(n.vel.y,0)*.3,z:n.vel.z*.25},"z"in g?n.vel.z=g.z*Math.max(.6,Math.abs(n.vel.z)):"x"in g?n.vel.x=g.x*Math.max(.6,Math.abs(n.vel.x)):n.vel.y=-Math.abs(n.vel.y),n.pos={x:f.x+("x"in g?g.x*.05:0),y:f.y+("y"in g?g.y*.05:0),z:f.z+("z"in g?g.z*.05:0)},n.spin*=-.5;continue}if(d!==1/0&&n.hits&&!n.rolling){const u=d/Math.max(h,1e-9),f=Math.hypot(n.vel.x,n.vel.z)||1,g=Math.max(wa.minSpeed,f);n.pos={x:n.pos.x+o.x*u,y:wa.radius,z:n.pos.z+o.z*u},n.vel={x:n.vel.x/f*g,y:0,z:n.vel.z/f*g},n.rolling=!0;continue}if(d!==1/0){const u=d/Math.max(h,1e-9);return i.push({type:"rest",point:{x:n.pos.x+o.x*u,y:0,z:n.pos.z+o.z*u},on:"ground"}),i}if(n.pos=a,n.age>5)return i.push({type:"rest",point:{x:n.pos.x,y:0,z:n.pos.z},on:"ground"}),i}return i}const vr=[{who:"ТЫ — БАРМЕНУ",text:"«Спорим, бармен, на триста баксов, что я нассу вон в ту шляпу и не пролью ни капли?»",at:.5,len:3.1},{who:"БАРМЕН-ЛАСКА",text:"«Идёт. Ставлю триста.»",at:3.6,len:1.7}],Cs={share:.6,prize:300,perSecond:40},Kx=n=>vr.find(e=>n>=e.at&&n<e.at+e.len)??null,fr={origin:{x:.5,y:1.12},lag:6.5,arc:.2,segments:26};class jx{tip;constructor(e={x:.5,y:.8}){this.tip={...e}}update(e,t){const i=1-Math.exp(-e*fr.lag);return this.tip.x+=(t.x-this.tip.x)*i,this.tip.y+=(t.y-this.tip.y)*i,this.tip}controls(){const e=fr.origin,t=this.tip,i=t.x-e.x,s=.07*Math.tanh(i*6)+.04,r=fr.arc+Math.abs(i)*.12;return[{x:e.x+i*.2,y:t.y-r*.9},{x:t.x+s,y:t.y-r*1.15}]}points(e=fr.segments){const t=fr.origin,[i,s]=this.controls(),r=this.tip,a=[];for(let o=0;o<=e;o++){const h=o/e,l=1-h,c=l*l*l,d=3*l*l*h,u=3*l*h*h,f=h*h*h;a.push({x:c*t.x+d*i.x+u*s.x+f*r.x,y:c*t.y+d*i.y+u*s.y+f*r.y})}return a}}const qi={enter:.7,torn:.55,mad:1.7,leave:1.1,read:14,penalty:120},id=["ЭЙ, ПОЛЕГЧЕ! Я ТУТ ГЛАШАТАЙ!","ХАМЬЁ! КОТЕЛОК ПОМЯЛ!","ПО ЛИСТОВКЕ БЕЙ, ДУБИНА!","НУ И МАНЕРЫ! ЧИТАЙ ДАЛЬШЕ!"],Zx="ЧЕСТЬ ИМЕЮ!";function Jx(n,e){return n===1?[{art:"tall",title:"БЕЙ!",lines:e?["Веди пальцем — рука летит за ним!","Проведи через врага — УДАР.","Тапни листовку, чтобы порвать."]:["ЛКМ или ПРОБЕЛ —","кулак летит ровно","в точку прицела."]},{art:"tag",title:"ХВАТАЙ И БРОСАЙ",lines:e?["Проведи через предмет —","ХВАТАЙ другой рукой!","Двойной тап у врага — бросок."]:["ПКМ или E — схватить","бутылку, табурет…","Ещё раз — бросок!"]},{art:"taped",title:"БЕРЕГИ СИЛЫ",lines:["Каждый замах","стоит сил — даже промах.","Выдохни — и снова в бой."]},{art:"pinned",title:"НЕ ТРОЖЬ СВОИХ!",lines:["Пёс с нимбом, котёнок,","крот, бармен, пьяница —","знак «НЕ ТРОГАТЬ»!"]},{art:"wide",title:"ЗАГАДКА",lines:["На голове котелок — для форса.","Вверх дном на стойке —","для чего-то покрепче…"]}]:[{art:"wide",title:"УЛИЦА ШИРОКАЯ",lines:e?["Свайп у края экрана —","камера плавно едет","вдоль улицы."]:["Стрелки, A / D","или мышь у края —","камера едет."]},{art:"tag",title:"ПОЛОСКИ ЗДОРОВЬЯ",lines:["У задиры своя полоска.","Кулак — треть,","тяжёлый бросок — всё."]},{art:"pinned",title:"ШПАНА У НОСА",lines:e?["Крыса, голубь, мальчишка","лезут к самой камере —","проведи по ним сразу!"]:["Крыса, голубь, мальчишка","лезут к самой камере —","бей сразу, с одного!"]},{art:"taped",title:"БАБУШКУ НЕ БЬЮТ",lines:["Бабушка, голубь-почтальон,","крот и пёс —","свои. Руки прочь!"]}]}class Qx{constructor(e,t,i=!1){this.level=e,this.flyers=t,this.reduced=i,i&&(this.phase="show")}level;flyers;reduced;index=0;phase="enter";t=0;offences=0;line="";get flyer(){return this.flyers[this.index]??null}get done(){return this.phase==="done"}get live(){return this.phase==="show"||this.phase==="mad"}tick(e){this.done||(this.t+=e,this.phase==="enter"&&this.t>=qi.enter?this.go("show"):this.phase==="show"&&this.t>=qi.read?this.next():this.phase==="torn"&&this.t>=qi.torn?this.next():this.phase==="mad"&&this.t>=qi.mad?this.go("show"):this.phase==="leave"&&this.t>=qi.leave&&this.go("done"))}tear(){return this.phase!=="show"?!1:(this.reduced?this.next():this.go("torn"),!0)}offend(){return this.phase!=="show"?!1:(this.line=id[this.offences++%id.length],this.go("mad"),!0)}skip(){this.phase!=="leave"&&!this.done&&this.go(this.reduced?"done":"leave")}next(){this.index++,this.go(this.index>=this.flyers.length?this.reduced?"done":"leave":"show")}go(e){this.phase=e,this.t=0}}const Tn={start:.45,len:2.6,kinds:["dance","sandwich","selfie"],bonus:2},Rt={pie:{blind:3},plunger:{stun:2},chicken:{combo:2,bonus:100},seeds:{radius:3.2,damage:5,max:3},geyser:{radius:2.4,life:4.5,damage:10,stagger:1.5}},yr={first:9,every:13,warn:1.9,radius:1.3},ev={3:"ОГО!",5:"ВОТ ЭТО ДА!",8:"МАМА!",12:"ЧУДЕСА НА ВИРАЖАХ!"},tv=n=>["spin","stars","birds"][n%3],Hi={intro:vr[vr.length-1].at+vr[vr.length-1].len,length:6,soakRate:1.9,dogCooldown:1.5},xu="long-arms.progress.v2",nv="long-arms.progress.v1",vu=()=>({version:2,unlocked:2,best:0});function iv(n){try{const e=JSON.parse(n??"null"),t=Number.isFinite(e?.best)&&e.best>=0?Math.floor(e.best):-1;if(e?.version===2&&Number.isInteger(e.unlocked)&&e.unlocked>=1&&e.unlocked<=kr&&t>=0)return{version:2,unlocked:e.unlocked,best:t};if(e?.version===1&&Number.isInteger(e.unlocked)&&e.unlocked>=1&&e.unlocked<=3&&t>=0)return{version:2,unlocked:e.unlocked>=2?2:1,best:t}}catch{}return vu()}const yu=n=>{const e=n(xu);return iv(e??n(nv))};function sv(n){return n.won&&n.level<kr&&n.progress.unlocked>n.level?[{id:"next",label:"СЛЕДУЮЩИЙ УРОВЕНЬ →",primary:!0},{id:"retry",label:"ЕЩЁ РАЗ ↺",primary:!1},{id:"select",label:"ВЫБОР УРОВНЯ",primary:!1}]:n.won?[{id:"menu",label:"В МЕНЮ →",primary:!0},{id:"retry",label:"ЕЩЁ РАЗ ↺",primary:!1}]:[{id:"retry",label:"ЕЩЁ РАЗ ↗",primary:!0},{id:"select",label:"ВЫБОР УРОВНЯ",primary:!1}]}const Mu=(n,e,t)=>n==="punch"?24:e?t?Nt[t].throw:10:ao,rv=10,av={cat:30,walrus:30,bulldog:40,weasel:20},ov={1:29.4,2:21};function lv(n,e){return 1}const Ta=n=>n>1.5?"foreground":n>-5?"midground":"background";class cv{constructor(e=vu(),t=()=>{}){this.save=t,this.progress=e}save;mode="menu";level=1;hp=5;stamina=100;score=0;combo=0;elapsed=0;held=null;ult={phase:"none",t:0,meter:0,hat:0};dogSoak=0;dogLeft=!1;hatRest=null;actors=[];events=[];flights=[];riffs=0;laundry=5;progress;won=!1;defeated=0;spawned=0;spawnClock=0;nextId=1;message="Двор ждёт своих героев";cam={x:0,z:9.5,half:2.6};thugClock=0;thugs=0;geysers=[];hazards=[];hazardClock=0;hazardCount=0;briefings=!1;briefing=null;briefed=new Set;touch=!1;reduced=!1;get layout(){return vt[this.level]}get goal(){return this.layout.goal}start(e){if(!Number.isInteger(e)||e<1||e>kr)return!1;this.level=e,this.hp=5,this.stamina=100,this.score=0,this.combo=0,this.elapsed=0,this.held=null,this.actors=[],this.events=[],this.flights=[],this.riffs=0,this.laundry=5,this.won=!1,this.defeated=0,this.spawned=0,this.spawnClock=0,this.nextId=1,this.thugClock=0,this.thugs=0,this.geysers=[],this.hazards=[],this.hazardClock=0,this.hazardCount=0,this.mode="play",this.message=this.layout.look==="bar"?"Бар «Длинные руки». Ведите себя прилично.":"Улица большая — крути камеру к краям!",this.ult={phase:"none",t:0,meter:0,hat:0},this.dogSoak=0,this.dogLeft=!1,this.hatRest=null;for(const t of this.layout.props)this.actors.push({id:this.nextId++,kind:t.kind,x:t.x,y:t.y,z:t.z,layer:Ta(t.z),age:0,deadline:1/0});return this.layout.friends.forEach((t,i)=>this.actors.push({id:this.nextId++,kind:"friend",who:t.who,plan:i,x:t.x0,y:t.y,z:t.z,layer:Ta(t.z),age:0,deadline:1/0})),this.briefing=null,this.briefings&&!this.briefed.has(e)?(this.briefed.add(e),this.briefing=new Qx(e,Jx(e,this.touch),this.reduced),this.message="Глашатай! Читай листовки — или жми ПОНЯЛ."):this.spawn(),this.placeHat(),!0}endBriefing(){this.briefing=null,this.message=this.layout.look==="bar"?"Бар «Длинные руки». Ведите себя прилично.":"Улица большая — крути камеру к краям!",this.spawn()}skipBriefing(){this.briefing&&(this.briefing.skip(),this.briefing.done&&this.endBriefing())}briefPunch(e){const t=this.briefing;return!t||this.mode!=="play"?null:e==="flyer"&&t.tear()?(this.events.push({type:"tear",id:0,combo:this.combo,amount:t.index}),this.message="ТРЕСЬ! Следующая листовка.",t.done&&this.endBriefing(),"tear"):e==="herald"?t.offend()?(this.score=Math.max(0,this.score-qi.penalty),this.hp=Math.max(0,this.hp-1),this.combo=0,this.events.push({type:"offend",id:0,combo:0,who:"herald",text:t.line}),this.message=`${t.line} −${qi.penalty} и сердце.`,this.hp||this.finish(!1),"protected"):(this.message="Он и так обижен! Оставь в покое.","miss"):(this.message="Бей по листовке — будет следующая.","miss")}get ultActive(){return this.ult.phase==="intro"||this.ult.phase==="pour"}placeHat(){const e=this.layout.hat;!e||this.ult.phase!=="none"||this.held==="hat"||this.actors.some(t=>t.kind==="hat")||this.flights.some(t=>t.kind==="hat")||this.actors.push({id:this.nextId++,kind:"hat",...e,layer:"foreground",age:0,deadline:1/0})}soak(e,t){if(this.mode!=="play"||this.ult.phase!=="pour")return null;const i=typeof e.id=="number"?this.actors.find(s=>s.id===e.id):void 0;return i?i.kind==="dog"?this.dogSoak>0||i.mad?null:(this.dogSoak=Hi.dogCooldown,this.dogHit(i),"dog"):i.kind==="friend"?i.mad?null:(this.friendHit(i),"dog"):i.kind!=="enemy"?null:(i.wet=Math.min(1,(i.wet??0)+t*Hi.soakRate),i.wet<1?(this.message="ФУ-У-У! Задиры в ужасе.","soak"):(this.actors=this.actors.filter(s=>s.id!==i.id),this.combo++,this.defeated++,this.score+=120+Math.min(this.combo-1,9)*25,this.events.push({type:"ko",id:i.id,combo:this.combo}),this.message="Смыло!",this.defeated>=this.goal&&this.finish(!0),"ko")):null}gag(e,t){const i=this.layout.gags.find(r=>r.id===e);if(!i)return!1;const s={type:"gag",id:0,combo:this.combo,gag:i.kind,gagId:i.id,point:t};if(i.kind==="piano")s.amount=this.riffs++,this.message="ТРЫНЬ! Пианино само заиграло рэгтайм.";else if(i.kind==="cuckoo")this.message="КУ-КУ! Кукушка высунулась и обозвала тебя.";else if(i.kind==="lamp")this.message="Лампа раскачалась — свет мигает!";else if(i.kind==="bell")this.message="ДЗИИНЬ! Фонарь звенит, как колокол.";else if(i.kind==="laundry"){if(this.laundry<=0)return this.message="Верёвка пуста — всё бельё уже на задирах.",!0;this.laundry--;const r=t?.x??(i.min.x+i.max.x)/2,a=this.actors.filter(o=>o.kind==="enemy"&&o.age>.3&&o.x>i.min.x-1&&o.x<i.max.x+1).sort((o,h)=>Math.abs(o.x-r)-Math.abs(h.x-r))[0];if(a)return s.id=a.id,this.events.push(s),this.hurt(a,10),this.message="Трусы на голову! Задира ослеп.",!0;this.message="Бельё шлёпнулось в пыль. Мимо!"}return this.events.push(s),!0}pourInHat(e){if(this.mode!=="play"||this.ult.phase!=="pour")return!1;const t=Math.floor(this.ult.hat*Cs.perSecond);return this.ult.hat+=e,this.score+=Math.floor(this.ult.hat*Cs.perSecond)-t,this.message="Прямо в шляпу! Ни капли мимо…",!0}pause(){this.mode==="play"?this.mode="pause":this.mode==="pause"&&(this.mode="play")}suspend(){this.mode==="play"&&(this.mode="pause")}spawn(){if(this.spawned>=this.goal)return;const{order:e,slots:t,dogs:i,deadline:s,maxAlive:r}=this.layout,a=e[this.spawned%e.length];if(this.actors.some(c=>c.kind==="enemy"&&c.slot===a)||r&&this.actors.filter(c=>c.kind==="enemy").length>=r)return;const o=t[a],h=av[o.skin??"cat"],l=this.spawned%3===2?Tn.kinds[Math.floor(this.spawned/3)%Tn.kinds.length]:void 0;if(this.actors.push({id:this.nextId++,kind:"enemy",x:o.x,y:o.y,z:o.z,slot:a,layer:o.layer,age:0,deadline:s+(l?Tn.len:0),hp:h,maxHp:h,antic:l}),this.spawned++,!this.dogLeft&&!this.actors.some(c=>c.kind==="dog"))for(const c of i)this.actors.push({id:this.nextId++,kind:"dog",...c,layer:"midground",age:0,deadline:1/0});o.skin&&(this.actors.find(c=>c.kind==="enemy"&&c.slot===a).skin=o.skin)}tick(e){if(this.mode!=="play")return;if(this.briefing){this.briefing.tick(e),this.briefing.done&&this.endBriefing();return}if(this.ult.phase==="intro"){this.ult.t+=e,this.ult.t>=Hi.intro&&(this.ult={phase:"pour",t:0,meter:1,hat:0},this.message="Держи струю в шляпе! Задир можно и окатить. Пса не задень.");return}const t=this.ult.phase==="pour";if(t&&(this.ult.t+=e,this.ult.meter=Math.max(0,1-this.ult.t/Hi.length),this.dogSoak=Math.max(0,this.dogSoak-e),this.ult.t>=Hi.length)){const i=this.ult.hat>=Hi.length*Cs.share;this.ult={...this.ult,phase:"done",t:0,meter:0},this.events.push({type:"ultEnd",id:0,combo:this.combo,amount:i?Cs.prize:0}),i?(this.score+=Cs.prize,this.message=`Ни капли мимо! Бармен платит ${Cs.prize}.`):this.message="Пролил! Бармен забирает свои триста."}this.elapsed+=e,this.stamina=Math.min(100,this.stamina+e*(ov[this.level]??21)),this.spawnClock+=e;for(const i of[...this.actors]){if((i.kind==="friend"||i.kind==="dog")&&i.mad){i.mad=Math.max(0,i.mad-e),i.mad<=0&&(this.actors=this.actors.filter(s=>s.id!==i.id),i.kind==="dog"&&(this.dogLeft=!0));continue}if(i.age+=e,i.kind==="thug"&&i.age>=si.strike){this.nuisance(i);continue}i.kind==="enemy"&&(i.blind&&(i.blind=Math.max(0,i.blind-e),i.deadline=Math.max(i.deadline,i.age+Xs+.4)),i.antic&&i.age>Tn.start+Tn.len&&(i.antic=void 0)),t&&i.kind==="enemy"&&(i.age=Math.min(i.age,Math.max(i.age-e,i.deadline-1))),i.kind==="enemy"&&this.updateEnemy(i)}if(this.hp<=0){this.finish(!1);return}if(this.defeated>=this.goal){this.finish(!0);return}for(;this.spawnClock>=1.55;)this.spawnClock-=1.55,this.spawn();this.stepGeysers(e),this.stepHazards(e,t),this.mode==="play"&&this.layout.thugs&&!t&&(this.thugClock+=e,this.thugClock>=(this.thugs?si.every:si.first)&&(this.thugClock=0,this.spawnThug()))}updateEnemy(e){const t=e.layer??(e.slot!==void 0&&this.layout.slots?.[e.slot]?this.layout.slots[e.slot].layer:Ta(e.z??0));if(e.layer=t,e.slot===void 0||t==="foreground"||!this.layout.slots?.length){e.age>=e.deadline&&(this.actors=this.actors.filter(s=>s.id!==e.id),this.hp--,this.combo=0,this.defeated++,this.events.push({type:"attack",id:e.id,combo:0}),this.message="Прилетело! Следи за замахом.");return}const i=e.antic?Tn.start+Tn.len:Jl[0].at+Jl[0].len;for(;e.layer!=="foreground"&&e.age>=i;){const s=e.layer==="background"?"midground":"foreground",r=[];for(let a=0;a<this.layout.slots.length;a++)this.layout.slots[a].layer===s&&!this.actors.some(o=>o.kind==="enemy"&&o.id!==e.id&&o.slot===a)&&r.push(a);if(r.length>0){r.sort((h,l)=>Math.abs(this.layout.slots[h].x-e.x)-Math.abs(this.layout.slots[l].x-e.x));const a=r[0],o=this.layout.slots[a];e.slot=a,e.x=o.x,e.y=o.y,e.z=o.z,e.layer=o.layer,o.skin&&(e.skin=o.skin),e.age-=i,e.deadline=this.layout.deadline+(e.antic?Tn.len:0),this.events.push({type:"advance",id:e.id,combo:this.combo,point:{x:e.x,y:e.y,z:e.z??0}}),this.message=s==="foreground"?"Задира перебежал к переднему укрытию!":"Задира подбирается ближе!"}else{e.age>=e.deadline&&(e.age=0,e.deadline=this.layout.deadline+(e.antic?Tn.len:0),this.events.push({type:"taunt",id:e.id,combo:this.combo,point:{x:e.x,y:e.y,z:e.z??0}}),this.message=e.layer==="background"?"Задира дразнится из глубины!":"Задира выглядывает и дразнит!");break}}e.layer==="foreground"&&e.age>=e.deadline&&(this.actors=this.actors.filter(s=>s.id!==e.id),this.hp--,this.combo=0,this.defeated++,this.events.push({type:"attack",id:e.id,combo:0}),this.message="Прилетело! Следи за замахом.")}bump(e=1){for(let t=0;t<e;t++){this.combo++;const i=ev[this.combo];i&&this.events.push({type:"milestone",id:0,combo:this.combo,text:i})}}stepGeysers(e){for(const t of this.geysers){t.age+=e;for(const i of this.actors.filter(s=>s.kind==="enemy"&&!t.hit.includes(s.id))){const s=un(this.level,i);if(!(Math.hypot(s.x-t.x,s.z-t.z)>Rt.geyser.radius)&&(t.hit.push(i.id),this.events.push({type:"knock",id:i.id,combo:this.combo,point:{x:t.x,y:0,z:t.z}}),this.hurt(i,Rt.geyser.damage,!0)||(i.deadline+=Rt.geyser.stagger,this.message="Гидрант бьёт фонтаном — задиру сдуло!"),this.mode!=="play"))return}}this.geysers=this.geysers.filter(t=>t.age<Rt.geyser.life)}stepHazards(e,t){if(t||(this.hazardClock+=e),this.hazardClock>=(this.hazardCount?yr.every:yr.first)){const i=this.actors.filter(s=>s.kind==="enemy"&&s.age>.6).map(s=>({t:s,p:un(this.level,s)})).sort((s,r)=>Math.abs(s.p.x-this.cam.x)-Math.abs(r.p.x-this.cam.x));i.length?(this.hazardClock=0,this.dropFromSky(i[0].p.x,i[0].p.z)):this.hazardClock-=1}for(const i of[...this.hazards]){if(i.age+=e,i.age<yr.warn)continue;this.hazards=this.hazards.filter(r=>r!==i);const s=this.actors.filter(r=>r.kind==="enemy").filter(r=>{const a=un(this.level,r);return Math.hypot(a.x-i.x,a.z-i.z)<=yr.radius});this.events.push({type:"crash",id:i.id,combo:this.combo,hazard:i.kind,point:{x:i.x,y:0,z:i.z},ids:s.map(r=>r.id)});for(const r of s)if(this.hurt(r,999,!1,"pancake"),this.mode!=="play")return;this.message=s.length?i.kind==="piano"?"БДЫЩЬ! Рояль с неба — задира в лепёшку!":"БУМ! Сейф на голову — в лепёшку!":"Мимо! Но грохоту-то сколько."}}dropFromSky(e,t){const i={id:this.nextId++,kind:this.hazardCount++%2?"safe":"piano",x:e,z:t,age:0};return this.hazards.push(i),this.events.push({type:"hazard",id:i.id,combo:this.combo,hazard:i.kind,point:{x:e,y:0,z:t}}),i}seeds(e,t){const i=this.actors.filter(s=>s.kind==="enemy"&&s.id!==t).map(s=>({t:s,d:Math.hypot(un(this.level,s).x-e.x,un(this.level,s).z-e.z)})).filter(s=>s.d<=Rt.seeds.radius).sort((s,r)=>s.d-r.d).slice(0,Rt.seeds.max).map(s=>s.t);this.events.push({type:"seeds",id:0,combo:this.combo,point:e,ids:i.map(s=>s.id)});for(const s of i)if(this.hurt(s,Rt.seeds.damage,!0),this.mode!=="play")return}propHit(e,t,i){const s=Nt[e.kind];if(!s.damage){this.combo=0,this.message="Шляпу — не в задиру!";return}if(e.kind==="anvil"){this.hurt(t,Math.max(s.damage,t.hp??0),!0,"pancake"),this.message="НАКОВАЛЬНЯ! Задира — блин.";return}e.kind==="chicken"&&(this.bump(Rt.chicken.combo),this.score+=Rt.chicken.bonus,this.events.push({type:"squeak",id:t.id,combo:this.combo,point:i})),e.kind==="pie"&&(t.blind=Rt.pie.blind,this.events.push({type:"blind",id:t.id,combo:this.combo,point:i})),e.kind==="plunger"&&(t.plunger=!0,t.deadline+=Rt.plunger.stun,this.events.push({type:"stick",id:t.id,combo:this.combo,point:i})),this.hurt(t,Math.max(s.damage*(t.antic?Tn.bonus:1),t.hp??0),!0),e.kind==="bowling"&&e.hits?.length===2?(this.events.push({type:"strike",id:t.id,combo:this.combo,point:i}),this.message="СТРАЙК! Двоих одним шаром!"):e.kind==="pie"?this.message="Пирог в лицо! Ничего не видит, шатается.":e.kind==="plunger"?this.message="ЧПОК! Вантуз прилип к физиономии.":e.kind==="chicken"&&(this.message=`ПИ-И-ИСК! Комбо +${Rt.chicken.combo}!`)}spawnThug(){if(this.actors.filter(l=>l.kind==="thug").length>=(this.elapsed>30?2:1))return null;const t=this.thugs++,i=["rat","gang","kid"][t%3],s=t%2?1:-1,r=t%3===1?"manhole":"edge",a=this.cam.z-si.depth,o=this.cam.x+s*this.cam.half*(r==="manhole"?.3:.62),h={id:this.nextId++,kind:"thug",who:i,side:s,from:r,x:o,y:0,z:a,layer:"foreground",age:0,deadline:si.strike,hp:1,maxHp:1};return this.actors.push(h),this.message=r==="manhole"?"Из люка лезет шпана — бей сразу!":"Шпана под носом — бей сразу!",h}nuisance(e){this.actors=this.actors.filter(i=>i.id!==e.id);const t=Ux[e.who];t.what==="stamina"&&(this.stamina=Math.max(0,this.stamina-Nx)),t.what==="heart"&&(this.hp--,this.combo=0),this.events.push({type:"nuisance",id:e.id,combo:this.combo,who:e.who}),this.message=t.line}thugKo(e,t=!1){this.actors=this.actors.filter(i=>i.id!==e.id),this.bump(),this.score+=60+Math.min(this.combo-1,9)*15,this.events.push({type:"ko",id:e.id,combo:this.combo,who:e.who}),this.message=t?"Шпану — с одного броска!":["ШМЯК! Шпана — в нокауте.","Мелочь, а приятно!","Брысь!"][this.combo%3]}friendHit(e){if(e.mad){this.message="Он и так обижен! Оставь в покое.";return}const t=Dx[e.who],i=t[this.events.length%t.length];this.score=Math.max(0,this.score-Jh),this.hp=Math.max(0,this.hp-1),this.combo=0,e.mad=$l,this.events.push({type:"offend",id:e.id,combo:0,who:e.who,text:i}),this.message=`${i} −${Jh} и сердце.`,this.hp||this.finish(!1)}spend(e){if(this.mode!=="play")return!1;if(this.briefing)return!0;if(this.ultActive)return this.message="Не до кулаков — идёт ульта!",!1;const t=Mu(e,e==="grab"&&this.held!==null,this.held);return this.stamina<t?(this.message="Выдохни. Руки тоже устают.",!1):(this.stamina-=t,!0)}resolve(e,t){if(this.mode!=="play"||this.briefing)return"blocked";const i=e==="grab"&&this.held!==null,s=this.held;if(i&&(this.held=null),s==="hat"){if(t.kind==="cover"&&Zl(this.level,t.id,t.point)&&this.ult.phase==="none")return this.hatRest={...t.point,y:vt[this.level].covers.find(a=>a.id===t.id).max.y,flipped:!0},this.ult={phase:"intro",t:0,meter:1,hat:0},this.combo=0,this.events.push({type:"ult",id:0,combo:0,point:this.hatRest}),this.message="ДИНЬ! Шляпа на стойке…","ult";this.placeHat(),this.events.push({type:"hatBack",id:0,combo:0})}const r=typeof t.id=="number"?this.actors.find(a=>a.id===t.id):void 0;if(i&&s&&s!=="hat"&&(!r||r.kind!=="enemy")&&t.point&&this.rest(s,{x:t.point.x,y:0,z:t.point.z}),t.kind==="cover"&&typeof t.id=="string"&&this.gag(t.id,t.point))return this.combo=0,"cover";if(t.kind==="cover")return this.combo=0,this.message=i?"Бросок в укрытие. Жди, пока высунется!":"ТУК! Укрытие. Бей, когда высунется.","cover";if(!r)return this.combo=0,this.message=t.kind==="scenery"?"Только стену поцарапал.":i?"Бросок в никуда.":"Мимо! Чистый промах.","miss";if(r.kind==="dog")return this.dogHit(r),"protected";if(r.kind==="friend")return this.friendHit(r),"protected";if(r.kind==="thug")return e==="punch"||i?(this.thugKo(r,i),i?"throw":"hit"):(this.combo=0,this.message="Шпану — кулаком!","miss");if(r.kind==="hat"&&!(e==="grab"&&!i))return this.combo=0,this.message="Шляпу не бьют. Шляпу берут.","miss";if(r.kind!=="enemy")return this.actors=this.actors.filter(a=>a.id!==r.id),e==="grab"&&!i?(this.held=r.kind,this.stamina=Math.max(0,this.stamina-Math.max(0,Nt[r.kind].grab-ao)),this.message=r.kind==="hat"?"Котелок! Ему явно где-то здесь место…":Nt[r.kind].mass>=4?`Ух, ${Nt[r.kind].name}! Тяжело, но больно.`:"В руке! Теперь бросай в задиру.","grab"):(this.score+=25,this.events.push({type:"smash",id:r.id,combo:this.combo}),this.message="ДЗЫНЬ! Минус реквизит, плюс 25.","smash");if(e==="punch"||i){const a=r.antic?Tn.bonus:1;i&&s==="chicken"&&(this.bump(Rt.chicken.combo),this.score+=Rt.chicken.bonus,this.events.push({type:"squeak",id:r.id,combo:this.combo,point:t.point})),i&&s==="pie"&&(r.blind=Rt.pie.blind,this.events.push({type:"blind",id:r.id,combo:this.combo,point:t.point})),i&&s==="plunger"&&(r.plunger=!0,r.deadline+=Rt.plunger.stun,this.events.push({type:"stick",id:r.id,combo:this.combo,point:t.point}));const o=i&&s?Math.max(Nt[s].damage*a,r.hp??0):rv*a;return this.hurt(r,o,i),i&&s==="pie"?this.message="Пирог в лицо! Ничего не видит, шатается.":i&&s==="plunger"?this.message="ЧПОК! Вантуз прилип к физиономии.":i&&s==="chicken"?this.message=`ПИ-И-ИСК! Комбо +${Rt.chicken.combo}!`:!i&&a>1&&(this.message="ПОДЛОВИЛ! Урон ×2."),i?"throw":"hit"}return this.combo=0,this.message="Задиру — кулаком. Предмет — хватай!","miss"}launch(e,t){if(this.mode!=="play"||!this.held)return null;const i=qx(this.nextId++,this.held,e,t);return this.held=null,this.flights.push(i),this.message="Полетел!",i}fly(e,t){const i=[];if(this.mode!=="play")return i;for(const s of[...this.flights])for(const r of $x(s,e,t)){if(i.push({flight:s,impact:r}),this.mode!=="play")return i;const a=Nt[s.kind];if(r.type==="hit"){const o=typeof r.id=="number"?this.actors.find(h=>h.id===r.id):void 0;if(o?.kind==="enemy"?this.propHit(s,o,r.point):o?.kind==="dog"?this.dogHit(o):o?.kind==="friend"?this.friendHit(o):o?.kind==="thug"?this.thugKo(o,!0):typeof r.id=="string"&&this.gag(r.id,r.point)||(this.combo=0,this.message=r.kind==="cover"?"Бросок в укрытие. Жди, пока высунется!":"Только стену задел."),this.mode!=="play")return i;if(s.kind==="melon"&&this.seeds(r.point,o?.kind==="enemy"?o.id:void 0),s.kind==="plunger"&&o?.kind==="enemy"&&o.plunger){this.flights=this.flights.filter(h=>h!==s);break}if(a.breakable){this.flights=this.flights.filter(h=>h!==s),this.events.push({type:"shatter",id:s.id,combo:this.combo,point:r.point,prop:s.kind});break}}else this.flights=this.flights.filter(o=>o!==s),this.landed(s,r.point,r.on)}return i}landed(e,t,i){if(e.kind==="hat"){if(Zl(this.level,i,t)&&this.ult.phase==="none"){this.hatRest={...t,flipped:!0},this.ult={phase:"intro",t:0,meter:1,hat:0},this.combo=0,this.events.push({type:"ult",id:0,combo:0,point:t}),this.message="ДИНЬ! Шляпа на стойке — вверх дном.";return}const s=this.layout.covers.find(r=>r.id===this.layout.landing?.cover);if(s&&t.z<s.min.z){this.placeHat(),this.events.push({type:"hatBack",id:0,combo:0});return}}if(e.kind==="hydrant"){const s={id:this.nextId++,x:t.x,z:t.z,age:0,hit:[]};this.geysers.push(s),this.events.push({type:"geyser",id:s.id,combo:this.combo,point:t}),this.message="Гидрант сорвало — фонтан!",this.rest(e.kind,t);return}e.kind==="chicken"&&this.events.push({type:"squeak",id:0,combo:this.combo,point:t}),e.struck||(this.combo=0,this.message=e.kind==="hat"?"Мимо стойки. Подбери котелок и ещё раз!":`Мимо! ${Nt[e.kind].name[0].toUpperCase()+Nt[e.kind].name.slice(1)} лежит — подбери.`),this.rest(e.kind,t)}rest(e,t){const i={id:this.nextId++,kind:e,x:t.x,y:t.y,z:t.z,layer:Ta(t.z),age:0,deadline:1/0};this.actors.push(i),this.events.push({type:"land",id:i.id,combo:this.combo,point:t,prop:e})}dogHit(e){e.mad||(this.score=Math.max(0,this.score-150),this.hp=Math.max(0,this.hp-1),this.combo=0,e.mad=$l,this.events.push({type:"dog",id:e.id,combo:0}),this.message="Пёс — святой! −150 и сердце.",this.hp||this.finish(!1))}hurt(e,t,i=!1,s){const r=Math.min(t,e.hp??1);return e.hp=Math.max(0,(e.hp??1)-t),e.hurtAt=this.elapsed,this.events.push({type:"hurt",id:e.id,combo:this.combo,amount:r}),e.hp>0?(this.score+=20,e.deadline=Math.max(e.deadline,e.age+Xs+1.2),this.message=i?`Прямое попадание! −${t}`:["БАМ! Ещё разок!","Шатается!","Добавь!"][Math.floor(e.hp/10)%3],!1):(this.actors=this.actors.filter(a=>a.id!==e.id),this.bump(),this.score+=(i?180:100)+Math.min(this.combo-1,9)*25,this.defeated++,this.events.push({type:"ko",id:e.id,combo:this.combo,how:s??tv(this.defeated)}),this.message=i?"Точный бросок. Нокаут!":["Нокаут! Так держать.","Вот это размах!","Живой нокаут!"][this.combo%3],this.defeated>=this.goal&&this.finish(!0),!0)}act(e,t,i=!1){if(this.mode!=="play")return"blocked";if(!i&&!this.spend(e))return"tired";const s=this.actors.find(r=>r.id===t);return this.resolve(e,s?{kind:s.kind==="enemy"||s.kind==="dog"||s.kind==="friend"||s.kind==="thug"?s.kind:"prop",id:t}:{kind:"whiff"})}get canUlt(){return this.ult.phase==="none"}get pouring(){return this.ult.phase==="pour"}winNow(){this.mode==="play"&&(this.defeated=this.goal,this.finish(!0))}finish(e){this.won=e,this.mode="result",this.held=null,this.briefing=null,e&&(this.progress.unlocked=Math.min(kr,Math.max(this.progress.unlocked,this.level+1)),this.score+=this.hp*100),this.ultActive&&(this.ult={...this.ult,phase:"done",t:0,meter:0}),this.progress.best=Math.max(this.progress.best,this.score),this.save({...this.progress})}}const Aa={lean:"gen_herald_lean.png",point:"gen_herald_point.png",mad:"gen_herald_mad.png"},Zo=n=>`./assets/${n}`,sd=n=>n.replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]);function hv(n,e){n.innerHTML='<div class="hd-stage"><img class="hd-guy" alt="" draggable="false"><div class="hd-flyer" hidden><img alt="" draggable="false"><div class="hd-text"></div></div><div class="hd-card" role="status" hidden></div></div><div class="hd-bits"></div><button id="heraldSkip" class="hd-skip primary" type="button">ПОНЯЛ ✓<small>ESC · ПРОПУСТИТЬ</small></button>';const t=n.querySelector(".hd-guy"),i=n.querySelector(".hd-card"),s=n.querySelector(".hd-flyer"),r=s.querySelector("img"),a=s.querySelector(".hd-text"),o=n.querySelector(".hd-bits");n.querySelector("#heraldSkip").addEventListener("click",m=>{m.stopPropagation(),e()});const h=new Map;for(const m of Object.values(Aa)){const p=new Image;p.src=Zo(m),p.decode().then(()=>{const b=document.createElement("canvas");b.width=p.naturalWidth,b.height=p.naturalHeight;const E=b.getContext("2d",{willReadFrequently:!0});E&&(E.drawImage(p,0,0),h.set(m,E.getImageData(0,0,b.width,b.height)))}).catch(()=>{})}let l="",c="lean",d=-1;function u(m,p){if(n.hidden=!m,!m){l="",d=-1;return}c=m.phase==="mad"?"mad":m.index%2?"point":"lean";const b=m.flyer,E=`${m.phase}|${m.index}|${c}|${p}`;if(E===l)return;l=E,n.dataset.phase=m.phase,n.dataset.paused=String(p),t.src.endsWith(Aa[c])||(t.src=Zo(Aa[c])),t.dataset.pose=c;const v=m.phase==="mad"?m.line:m.phase==="leave"?Zx:"";i.hidden=!v,i.textContent=v;const A=!!b&&(m.phase==="show"||m.phase==="mad"||m.phase==="enter");s.hidden=!A,A&&b&&d!==m.index&&(d=m.index,s.dataset.art=b.art,r.src=Zo(`gen_flyer_${b.art}.png`),s.classList.remove("hd-in"),s.offsetWidth,s.classList.add("hd-in"),a.innerHTML=`<h3>${sd(b.title)}</h3>${b.lines.map(T=>`<p>${sd(T)}</p>`).join("")}<small>${m.index+1} / ${m.flyers.length} · ударь по листовке →</small>`)}function f(m,p){const b=g(m,p);return n.dataset.hit=b,b}function g(m,p){if(n.hidden)return"none";if(!s.hidden){const T=s.getBoundingClientRect();if(m>=T.left&&m<=T.right&&p>=T.top&&p<=T.bottom)return"flyer"}const b=t.getBoundingClientRect();if(m<b.left||m>b.right||p<b.top||p>b.bottom||!b.width)return"none";const E=h.get(Aa[c]);if(!E)return"herald";const v=Math.floor((m-b.left)/b.width*E.width),A=Math.floor((p-b.top)/b.height*E.height);return E.data[(A*E.width+v)*4+3]>60?"herald":"none"}function _(m){if(s.hidden||!m)return;const p=s.getBoundingClientRect(),b=s.dataset.art;for(const E of["l","r"]){const v=s.cloneNode(!0);v.classList.remove("hd-in"),v.classList.add("hd-half",E),v.style.left=p.left+"px",v.style.top=p.top+"px",v.style.width=p.width+"px",v.style.height=p.height+"px",v.dataset.art=b,o.append(v),setTimeout(()=>v.remove(),900)}for(let E=0;E<14;E++){const v=document.createElement("i");v.className="hd-bit",v.style.left=p.left+p.width*(.3+Math.random()*.4)+"px",v.style.top=p.top+p.height*(.2+Math.random()*.6)+"px",v.style.setProperty("--dx",(Math.random()-.5)*520+"px"),v.style.setProperty("--dy",(Math.random()*-.6+.2)*420+"px"),v.style.setProperty("--r",(Math.random()-.5)*900+"deg"),o.append(v),setTimeout(()=>v.remove(),900)}s.hidden=!0}return{sync:u,hit:f,tear:_}}function dv({left:n=!0}={}){const e=new Ht;function t(a,o,h,l=!1){const c=l?new wt({color:h,fog:!1}):new hi({color:h,roughness:.9}),d=new Te(new Xn(...a),c);return d.position.set(...o),d.castShadow=!l,d.receiveShadow=!l,e.add(d),d}function i(a,o){t([.16,6,.16],[a*4.9,3,o],"#1f1a2a"),t([1.6,.15,.15],[a*4.25,6,o],"#1f1a2a");const h=t([.65,.14,.45],[a*3.5,5.85,o],"#fff1b2",!0);o===-5&&(h.userData.bell=a<0?0:1);const l=new Sc("#ffffff",160,12,2);l.position.set(a*3.3,5.2,o),e.add(l)}t([70,.25,85],[0,-.2,-20],"#4a4552");for(let a=-36;a<-5;a+=4)t([.14,.02,2],[0,-.055,a],"#f2b45c");for(let a=-3.8;a<=3.8;a+=1.25)t([.7,.025,2.5],[a,-.05,-3.3],"#b9a9a8");for(const a of[-1,1]){if(a<0&&!n){t([.22,.36,60],[a*4.45,.05,-19],"#a99a92");for(const o of[-5,-20])i(a,o);continue}t([7,.3,60],[a*8,-.04,-19],"#6c5f6c"),t([.22,.36,60],[a*4.45,.05,-19],"#a99a92");for(let o=0;o<4;o++){const h=-7-o*8,l=6+(o+(a>0?1:0))%3*2.5;t([5,l,6.5],[a*8,l/2,h],o%2?"#5a4560":"#3e4a66"),t([5.35,.25,6.8],[a*8,l,h],"#221c30"),t([1.3,.22,5.5],[a*5.1,3,h],o%2?"#e0574f":"#2f9c8f");for(let c=-2;c<=2;c+=1)t([1.3,.24,.4],[a*5.1,3.02,h+c],"#f1e5bf");t([.15,1.3,2],[a*5.44,1.5,h],o%3?"#ffd27a":"#ff9f6a",!0),t([.15,1.3,2],[a*5.44,l-1.5,h],(o+a)%2?"#ffe3a1":"#3a3550",(o+a)%2!==0),o%2===0&&t([.6,1.2,.6],[a*7,l+.6,h+1.5],"#221c30")}for(const o of[-5,-20])i(a,o)}for(let a=0;a<9;a++){const o=7+a*7%5*2.2;t([3.2,o,2],[-14+a*3.5,o/2,-40],"#2a2140")}const s=["#ffd36e","#ff6fa8","#8ff0d0","#ffd36e","#ff9a5c"];for(const a of[-4.5,-9]){const o=new Te(new jt(.012,.012,10,4),new wt({color:"#141018"}));o.rotation.z=Math.PI/2,o.position.set(0,5.6,a),e.add(o);for(let h=-4.5,l=0;h<=4.5;h+=.75,l++){const c=new Te(new as(.08,8,6),new wt({color:s[l%s.length],fog:!1}));c.position.set(h,5.6-Math.cos(h/4.5*Math.PI/2)*.45,a),c.userData.blink=l,e.add(c)}}t([2.3,.18,4],[-6,3.7,-2],"#3a2f48");for(const a of[-3.7,-.3])t([.12,3.6,.12],[-6.8,1.8,a],"#3a2f48");t([.12,2.8,3.5],[-7,1.8,-2],"#7fd4c8",!0),t([.8,.18,2.8],[-6.2,.85,-2],"#e5af79"),t([.7,1.1,.7],[5.3,.55,1],"#2d4a46"),t([2.3,1.8,4],[6.6,1.2,-13],"#c9894f"),t([2.3,1.1,1.5],[6.6,2,-10.9],"#2e3346");const r=(a,o,h,l,c=0)=>{const d=document.createElement("canvas");d.width=512,d.height=128;const u=d.getContext("2d");u&&(u.fillStyle="#17121f",u.fillRect(0,0,512,128),u.font="900 64px Arial",u.textAlign="center",u.shadowColor=h,u.shadowBlur=22,u.fillStyle=h,u.fillText(a,256,86),u.fillStyle="#fff6f0",u.shadowBlur=0,u.fillText(a,256,84),u.strokeStyle=h,u.lineWidth=8,u.strokeRect(8,8,496,112));const f=new Ci(d);f.colorSpace=mt;const g=new Te(new Wt(o,o/4),new wt({map:f,fog:!1}));g.position.set(...l),g.rotation.y=c,g.userData.neon=!0,e.add(g)};return r("ПЕРЕУЛОК",4.3,"#ff4fa3",[-5.9,4.55,-4]),r("ЧЕБУРЕКИ",3.2,"#5ef0c8",[5.42,4.2,-7],-Math.PI/2),n&&r("ШУМ",2.2,"#ffcf4a",[-5.42,4.8,-12.5],Math.PI/2),e}function uv(n){const e=new Ht,t=c=>new hi({color:c,roughness:.85});function i(c,d,u){const f=new Te(new Xn(...c),t(u));return f.position.set(...d),f.castShadow=f.receiveShadow=!0,e.add(f),f}const s=document.createElement("canvas");s.width=s.height=128;const r=s.getContext("2d");r&&(r.fillStyle="#d9d4c8",r.fillRect(0,0,128,128),r.fillStyle="#3b3733",r.fillRect(0,0,64,64),r.fillRect(64,64,64,64));const a=new Ci(s);a.wrapS=a.wrapT=Ga,a.repeat.set(14,11),a.colorSpace=mt,a.anisotropy=4;const o=new Te(new Wt(28,22),new hi({map:a,roughness:.6}));o.rotation.x=-Math.PI/2,o.position.set(0,0,1.6),o.receiveShadow=!0,e.add(o);const h=new Te(new Wt(21,21),new wt({map:n,fog:!1}));h.position.set(0,21/2-4.6,-9.4),e.add(h);for(const c of[-1,1]){i([.4,12,18],[c*10.4,6,0],c<0?"#5d554c":"#4d463f");for(let d=-8;d<8;d+=2.2)i([.06,2.2,.14],[c*10.18,1.1,d],"#2f2a26")}for(let c=-8;c<=6;c+=3.5)i([22,.45,.5],[0,8.2,c],"#2a2622");i([22,.2,18],[0,8.6,-.5],"#1b1917");const l=(c,d,u)=>{i([.12,u,.12],[c,u/2,d],"#2f2a26");const f=new Te(new jt(.32,.3,.14,18),t("#7a3b2f"));f.position.set(c,u,d),f.castShadow=f.receiveShadow=!0,e.add(f);const g=new Te(new vc(.24,.025,6,18),t("#9a9a9a"));g.rotation.x=Math.PI/2,g.position.set(c,u*.35,d),e.add(g)};for(const c of[-2.3,2.7])l(c,-1.55,.95);l(.95,3.45,.7),[-3,2.5].forEach((c,d)=>{const u=new Ht;u.position.set(c,8.4,-3.2),u.userData.lamp=d,e.add(u);const f=new Te(new jt(.015,.015,2.6,4),new wt({color:"#111111"}));f.position.set(0,-1.3,0),u.add(f);const g=new Te(new xc(.55,.45,18,1,!0),new wt({color:"#f4efe0",side:Bt}));g.position.set(0,-2.7,0),u.add(g);const _=new Sc("#ffffff",55,11,1.6);_.position.set(0,-3.2,0),_.userData.base=55,u.add(_)});for(const c of[-1,1]){const d=new Ht;d.position.set(c<0?3.55:5.35,0,-7.2),e.add(d);const u=new Te(new Xn(.85,1.25,.06),t("#8e6b4a"));u.position.set(-c*.44,1.2,0),u.castShadow=!0,d.add(u),d.userData.swing=c}return e}const fv=[[0,76,1],[1,79,2],[3,76,1],[4,72,2],[6,76,1],[7,79,1],[8,81,2],[10,79,1],[11,76,2],[13,72,1],[14,74,2],[16,73,1],[17,76,2],[19,79,1],[20,81,2],[22,79,1],[23,76,1],[24,73,2],[26,76,1],[27,69,3],[30,71,2],[32,79,1],[33,77,1],[34,76,1],[35,74,1],[36,72,1],[37,71,1],[38,74,2],[40,79,2],[42,77,2],[44,76,2],[46,74,2]],pv=[{bass:[48,43],chord:[64,67,72]},{bass:[45,40],chord:[61,64,67]},{bass:[43,38],chord:[59,65,67]}],rd={step:48,notes:[36,48,60,64,67,72]},Ra=[{key:0,step:.095,lift:0},{key:5,step:.09,lift:12},{key:-3,step:.1,lift:0},{key:2,step:.088,lift:12}];function mv(n=0){const e=Ra[(n%Ra.length+Ra.length)%Ra.length],t=[],i=s=>s*e.step+(s%2?e.step*.18:0);for(const[s,r,a]of fv)t.push({t:i(s),midi:r+e.key+(s>=32?0:e.lift),dur:a*e.step*1.1,vel:s%4===0?1:.8});pv.forEach((s,r)=>{const a=r*16;t.push({t:i(a),midi:s.bass[0]+e.key,dur:e.step*3.5,vel:.95},{t:i(a+8),midi:s.bass[1]+e.key,dur:e.step*3.5,vel:.9});for(const o of[a+4,a+12])for(const h of s.chord)t.push({t:i(o),midi:h+e.key-12,dur:e.step*2,vel:.6})});for(const s of rd.notes)t.push({t:i(rd.step),midi:s+e.key,dur:.7,vel:.9});return t.sort((s,r)=>s.t-r.t)}const Su=(n,e,t)=>.2126*n+.7152*e+.0722*t;function Ql(n){const e=Su(n.r,n.g,n.b);return n.setRGB(e,e,e)}function bu(n){const e=n.getContext("2d",{willReadFrequently:!0});if(!e)return;const t=e.getImageData(0,0,n.width,n.height),i=t.data;for(let s=0;s<i.length;s+=4){const r=Math.round(Su(i[s],i[s+1],i[s+2]));i[s]=i[s+1]=i[s+2]=r}e.putImageData(t,0,0)}const ad=new WeakSet;function gv(n){return n.traverse(e=>{const t=e.material;if(t)for(const i of Array.isArray(t)?t:[t]){if(ad.has(i))continue;ad.add(i),i.color&&Ql(i.color),i.emissive&&Ql(i.emissive);const s=i.map?.image;typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement&&(bu(s),i.map.needsUpdate=!0),i.userData.world=!0}}),n}const Ka={street:{sky:[[0,"#4a4a4a"],[.5,"#9c9c9c"],[.8,"#d4d4d4"],[1,"#ececec"]],fog:"#a8a8a8",near:16,far:50,hemi:["#ececec","#4e4e4e",1.8],sun:["#f6f6f6",2.6],sunAt:[-7,13,10]},bar:{sky:[[0,"#0b0b0b"],[.6,"#1e1e1e"],[1,"#3a3a3a"]],fog:"#1a1a1a",near:20,far:48,hemi:["#dcdcdc","#2a2a2a",1.5],sun:["#ffffff",2.3],sunAt:[-4,9,9]}},Rc={base:"#2c55c9",shine:"#6d93ee",dark:"#1a3486"};function Ki(n,e){const t=Math.max(34,Math.min(78,Math.min(n*.095,e*.078)));return{r:t,hose:t*1.02,ink:Math.max(3,t*.09),rim:Math.max(2,t*.05)}}const Jo=1.45;function od(n,e){return n.x>=e/2?1:-1}function Cc(n,e,t,i,s=0){const{r,hose:a}=Ki(e,t),o=Math.max(r*2,e*.12),h=n>0?e-o:o;let l=t-r*2.3;i&&i.right>h-r*Jo&&i.left<h+r*Jo&&(l=Math.min(l,i.top-r*Jo-6)),l=Math.max(l,t*.45)+s;const d={x:Math.min(e-a,Math.max(a,h-n*r*1.5)),y:t+a*.7},u={x:h,y:l},f={x:h+n*r*.55,y:(d.y+l)/2+r*.2};return{side:n,shoulder:d,ctrl:f,glove:u,r,w0:a,w1:a*.74,open:!1,squash:0}}const Qo=(n,e,t)=>({x:n.x+(e.x-n.x)*t,y:n.y+(e.y-n.y)*t}),_v=n=>{const t=n-1;return 1+(1.9+1)*t**3+1.9*t**2};function el(n,e,t,i,s,r,a={}){const o=Cc(n,e,t,a.avoid),h=a.depth??1,l=!!a.throwing;let c,d=0,u=0,f=0,g=!1;if(s<.08){const D=Math.sin(s/.08*Math.PI/2)*(l?1.8:1);c={x:o.glove.x+n*o.r*.25*D,y:o.glove.y+o.r*.45*D},u=.1*D,f=.08*D}else if(s<r.arrive){const D=(s-.08)/(r.arrive-.08);d=_v(D),c=Qo(o.glove,i,d),u=l?.55*Math.cos(D*Math.PI):.22*Math.sin(D*Math.PI)+.05,f=-.12*Math.sin(D*Math.PI),g=!!a.grab&&!l}else if(s<r.release){const D=(s-r.arrive)/(r.release-r.arrive);d=1,c={...i},u=.07*Math.sin(D*Math.PI*5)*(1-D)+(l?-.3*(1-D):0),f=.22*Math.max(0,1-D*3),g=!!a.grab||l}else{const D=Math.min(1,(s-r.release)/(1-r.release)),S=(1-D)**2*Math.cos(D*Math.PI*2.5),M=S<0?Math.max(S,-.25*o.r/(Math.hypot(i.x-o.glove.x,i.y-o.glove.y)||1)):S;d=Math.max(0,M),c=Qo(o.glove,i,M),u=-.18*(1-D)*Math.sin(D*Math.PI*3+.5),g=l&&D<.3}const _=1+(Math.min(1.15,Math.max(.6,h))-1)*Math.min(1,Math.max(0,d)),m=o.r*_,p=o.shoulder,b=c.x-p.x,E=c.y-p.y,v=Math.hypot(b,E)||1,A=Qo(p,c,.45),T={x:-E/v*n,y:b/v*n},P=s<.08?{x:o.ctrl.x+T.x*u*v,y:o.ctrl.y+T.y*u*v}:{x:A.x+T.x*u*v,y:A.y+T.y*u*v};return{side:n,shoulder:p,ctrl:P,glove:c,r:m,w0:o.w0,w1:o.w1*Math.max(.55,_),open:g,squash:f}}const Ca="#151715",ld="rgba(255,248,226,.92)",xv=Rc.base,vv=Rc.shine,yv=Rc.dark,cd="#fdfaf0",Mv="#ddd6c4";function Sv(n,e,t,i){const s=1-i;return{x:s*s*n.x+2*s*i*e.x+i*i*t.x,y:s*s*n.y+2*s*i*e.y+i*i*t.y}}function Eu(n,e,t,i){const s=1-i,r=2*s*(e.x-n.x)+2*i*(t.x-e.x),a=2*s*(e.y-n.y)+2*i*(t.y-e.y),o=Math.hypot(r,a)||1;return{x:r/o,y:a/o}}function tl(n,e,t,i,s,r,a){const h=[],l=[];for(let c=0;c<=24;c++){const d=c/24,u=Sv(e,t,i,d),f=Eu(e,t,i,d),g=(s+(r-s)*d)/2,_=-f.y,m=f.x,[p,b]=a??[-1,1];h.push({x:u.x+_*g*b,y:u.y+m*g*b}),l.push({x:u.x+_*g*p,y:u.y+m*g*p})}n.beginPath(),h.forEach((c,d)=>d?n.lineTo(c.x,c.y):n.moveTo(c.x,c.y));for(let c=l.length-1;c>=0;c--)n.lineTo(l[c].x,l[c].y);n.closePath()}function bv(n,e){const t=(s,r,a,o,h=0)=>({path:l=>{l.beginPath(),l.ellipse(s,r,a,o,h,0,Math.PI*2)}}),i=(s,r,a,o=.35)=>{const h=Math.sin(s),l=-Math.cos(s);return{line:a,path:c=>{c.beginPath(),c.moveTo(h*o,l*o),c.lineTo(h*(o+r),l*(o+r))}}};return n?[t(0,.1,.82,.78),i(-.5,.72,.38),i(-.17,.86,.38),i(.17,.86,.38),i(.5,.72,.38),i(e*1.35,.55,.36,.45)]:[t(0,.05,.88,.84),t(0,-.5,.8,.46),t(e*.8,.05,.3,.5,e*.35)]}const Ev=[{path:n=>{n.beginPath(),n.moveTo(-.5,.55),n.lineTo(.5,.55),n.lineTo(.74,1.02),n.ellipse(0,1.02,.74,.3,0,0,Math.PI),n.lineTo(-.5,.55),n.closePath()}}];function pr(n,e,t,i,s){n.strokeStyle=i,n.fillStyle=i;for(const r of e){if(r.path(n),r.line){n.lineWidth=r.line+t*2,n.stroke();continue}t>0&&(n.lineWidth=t*2,n.stroke()),s&&n.fill()}}function wv(n,e,t,i){const{shoulder:s,ctrl:r,glove:a,r:o,side:h}=e,l=Eu(s,r,a,1),c={x:a.x+l.x*-o*.95,y:a.y+l.y*-o*.95},d=Math.atan2(l.y,l.x)+Math.PI/2,u=-h;n.save(),n.lineJoin="round",n.lineCap="round",tl(n,s,r,c,e.w0,e.w1),n.strokeStyle=ld,n.lineWidth=(t+i)*2,n.stroke(),n.strokeStyle=Ca,n.lineWidth=t*2,n.stroke(),n.fillStyle=xv,n.fill(),tl(n,s,r,c,e.w0,e.w1,[h>0?.35:-1,h>0?1:-.35]),n.fillStyle=yv,n.fill(),tl(n,s,r,c,e.w0,e.w1,h>0?[-.62,-.3]:[.3,.62]),n.fillStyle=vv,n.fill(),n.translate(a.x,a.y),n.rotate(d),n.scale(o*(1+e.squash*.6),o*(1-e.squash));const f=1/o,g=bv(e.open,u),_=Ev;if(pr(n,[...g,..._],(t+i)*f,ld,!1),pr(n,g,t*f,Ca,!1),pr(n,g,0,cd,!0),n.save(),g[0].path(n),n.clip(),n.fillStyle=Mv,n.beginPath(),n.ellipse(-u*.45,.55,.8,.55,0,0,Math.PI*2),n.fill(),n.restore(),n.strokeStyle=Ca,n.lineWidth=t*f*.55,n.lineCap="round",e.open)n.beginPath(),n.arc(0,.2,.38,Math.PI*1.15,Math.PI*1.85),n.stroke();else{for(const m of[-.32,0,.32])n.beginPath(),n.moveTo(m*1.05,-.94+Math.abs(m)*.2),n.quadraticCurveTo(m*.9,-.78,m*.8,-.62),n.stroke();n.lineWidth=t*f*.8;for(const m of[-.27,0,.27])n.beginPath(),n.moveTo(m,-.22),n.lineTo(m*1.08,.3),n.stroke()}pr(n,_,t*f,Ca,!1),pr(n,_,0,cd,!0),n.beginPath(),n.moveTo(-.56,.7),n.quadraticCurveTo(0,.82,.56,.7),n.stroke(),n.restore()}function Tv(n,e,t=18){const i=e.x-n.x,s=e.y-n.y,r=Math.hypot(i,s);if(r<1e-4)return[{...e}];const a=Math.max(1,Math.ceil(r/Math.max(1,t))),o=[];for(let h=1;h<=a;h++){const l=h/a;o.push({x:n.x+i*l,y:n.y+s*l})}return o}class Av{constructor(e=.35){this.cooldownSeconds=e}cooldownSeconds;lastHitTimes=new Map;canHit(e,t){const i=this.lastHitTimes.get(e);return i===void 0?!0:t-i>=this.cooldownSeconds}recordHit(e,t){this.lastHitTimes.set(e,t)}clear(){this.lastHitTimes.clear()}}const Rv={maxPressSec:.22,maxGapSec:.32,minGapSec:.035,movePx:12,radiusPx:28};class Cv{constructor(e=Rv){this.bounds=e}bounds;start=null;previous=null;begin(e,t){if(!t||this.start){this.reset();return}this.start=e}move(e){this.start&&Math.hypot(e.x-this.start.x,e.y-this.start.y)>this.bounds.movePx&&this.reset()}end(e,t){this.move(e);const i=this.start;if(this.start=null,!t||!i||e.time-i.time>this.bounds.maxPressSec||e.time<i.time)return this.reset(),!1;const s=this.previous;if(this.previous=e,!s)return!1;const r=i.time-s.time;return r<this.bounds.minGapSec||r>this.bounds.maxGapSec||Math.hypot(e.x-s.x,e.y-s.y)>this.bounds.radiusPx?!1:(this.reset(),!0)}reset(){this.start=null,this.previous=null}}function Pv(n,e,t,i=160){let s=null,r=i;const a=Math.hypot(e.x,e.y)||1,o=e.x/a,h=e.y/a;for(const l of t){if(l.isOccluded)continue;const c=l.screenPos.x-n.x,d=l.screenPos.y-n.y,u=Math.hypot(c,d);if(u>i)continue;const f=c*o+d*h,g=Math.abs(c*-h+d*o);if(f<-40)continue;const _=Math.hypot(e.x,e.y)===0?u:f>=0?Math.hypot(g,f*.3):u;_<r&&(r=_,s=l.entity)}return s}const wu="long-arms.settings.v1",Tu=matchMedia("(prefers-reduced-motion: reduce)");let Mn=!1,zr;try{const n=JSON.parse(localStorage.getItem(wu)??"null");typeof n=="object"&&n!==null&&("muted"in n&&typeof n.muted=="boolean"&&(Mn=n.muted),"reducedMotion"in n&&typeof n.reducedMotion=="boolean"&&(zr=n.reducedMotion))}catch{Mn=!1,zr=void 0}const qs=()=>zr??Tu.matches;function Pc(){document.documentElement.dataset.reducedMotion=String(qs())}Pc();Tu.addEventListener("change",Pc);let fn,nl=!0;function Vr(){if(!(Mn||!nl))try{fn??=new AudioContext,fn.state==="suspended"&&fn.resume().catch(()=>{nl=!1})}catch{nl=!1}}const Dv={ui:[["sine",520,300,.1,.05,0]],whoosh:[["sine",180,420,.16,.02,.9]],hit:[["triangle",150,48,.16,.09,.5],["square",420,160,.05,.025,0]],throw:[["triangle",300,70,.18,.08,.4]],ko:[["sine",660,1320,.22,.035,0],["sine",990,1980,.22,.02,0]],grab:[["sine",230,380,.1,.06,0]],cover:[["square",110,60,.09,.05,.6]],miss:[["sine",260,90,.2,.03,.5]],dog:[["sine",880,520,.32,.05,0],["sine",700,400,.3,.03,0]],attack:[["sawtooth",90,40,.25,.07,.7]],windup:[["sine",300,520,.18,.025,0]],ding:[["sine",1568,1560,1.2,.08,0],["sine",3136,3120,.7,.03,0],["triangle",784,780,.9,.03,0]],slide:[["sine",1400,260,.9,.06,0]],yuck:[["sawtooth",210,120,.28,.035,.3]],toss:[["sine",260,620,.14,.03,.8]],thud:[["triangle",120,55,.14,.07,.5]],bell:[["sine",988,980,1.6,.07,0],["sine",1976,1960,.9,.025,0],["triangle",494,490,1.4,.035,0]],cuckoo:[["sine",784,780,.2,.06,0,0],["sine",622,620,.35,.06,0,.24],["sine",784,780,.2,.05,0,.75],["sine",622,620,.35,.05,0,.99]],buzz:[["sawtooth",110,108,.45,.03,.5],["square",220,218,.3,.012,0,.1]],flop:[["sine",320,110,.35,.04,.6]],shatter:[["square",2400,1800,.18,.02,.9],["triangle",1600,900,.25,.025,.6],["sine",3200,2600,.12,.015,0]],huff:[["sawtooth",330,180,.12,.04,.4],["sawtooth",300,150,.2,.035,.5,.14]],squeak:[["square",1300,1900,.09,.035,0],["square",1900,1100,.16,.03,0,.09]],harp:[0,4,7,12,16,19,24,28].map((n,e)=>["triangle",523*2**(n/12),523*2**(n/12)*.995,.9,.035,0,e*.07]),whistle:[["sine",2300,500,1.1,.045,0]],crash:[["sawtooth",90,35,.6,.09,.8],["square",1200,300,.4,.03,.9,.03],["triangle",60,40,.7,.08,.3]],strike:[["square",900,300,.12,.04,.8],["triangle",200,60,.4,.06,.7,.05],["square",1400,500,.2,.02,.9,.12]],splat:[["sine",240,60,.25,.07,.7]],zing:[["sawtooth",400,1400,.12,.03,.2]],steal:[["sine",600,1200,.08,.04,0],["sine",1200,600,.12,.03,0,.08]],pop:[["sine",220,660,.09,.05,.2]],geyser:[["sine",300,900,.9,.04,.95]],iris:[["triangle",880,440,.25,.03,0],["triangle",660,330,.3,.03,0,.12]],boing:[["sine",140,420,.35,.06,0]]};let Pa;function be(n){if(Mn||document.hidden||!fn||fn.state!=="running")return;const e=fn;if(e.currentTime,!Pa){Pa=e.createBuffer(1,e.sampleRate*.4,e.sampleRate);const t=Pa.getChannelData(0);for(let i=0;i<t.length;i++)t[i]=Math.random()*2-1}for(const[t,i,s,r,a,o,h]of Dv[n]){const l=e.currentTime+(h??0),c=e.createGain();c.connect(e.destination),c.gain.setValueAtTime(1e-4,l),c.gain.exponentialRampToValueAtTime(a,l+.008),c.gain.exponentialRampToValueAtTime(1e-4,l+r);const d=e.createOscillator();d.type=t,d.frequency.setValueAtTime(i,l),d.frequency.exponentialRampToValueAtTime(Math.max(30,s),l+r*.8);const u=e.createGain();if(u.gain.value=1-o*.7,d.connect(u),u.connect(c),d.start(l),d.stop(l+r+.02),d.onended=()=>{d.disconnect(),u.disconnect(),c.disconnect()},o>0){const f=e.createBufferSource(),g=e.createBiquadFilter(),_=e.createGain();f.buffer=Pa,g.type="bandpass",g.frequency.setValueAtTime(i*4,l),g.frequency.exponentialRampToValueAtTime(Math.max(60,s*4),l+r),_.gain.value=o,f.connect(g),g.connect(_),_.connect(c),f.start(l),f.stop(l+r),f.onended=()=>{f.disconnect(),g.disconnect(),_.disconnect()}}}}let mr;function Lv(n){if(!(n&&!Mn&&!document.hidden&&fn?.state==="running")){if(mr){const d=mr;mr=void 0,d.gain.gain.setTargetAtTime(0,fn.currentTime,.05),setTimeout(()=>{d.src.stop(),d.lfo.stop(),d.src.disconnect(),d.gain.disconnect()},300)}return}if(mr||!fn)return;const t=fn,i=t.sampleRate*2,s=t.createBuffer(1,i,t.sampleRate),r=s.getChannelData(0);for(let d=0;d<i;d++)r[d]=Math.random()*2-1;const a=t.createBufferSource();a.buffer=s,a.loop=!0;const o=t.createBiquadFilter();o.type="bandpass",o.frequency.value=2200,o.Q.value=1.4;const h=t.createGain();h.gain.value=0,h.gain.setTargetAtTime(.05,t.currentTime,.08);const l=t.createOscillator(),c=t.createGain();l.frequency.value=9,c.gain.value=900,l.connect(c),c.connect(o.frequency),a.connect(o),o.connect(h),h.connect(t.destination),a.start(),l.start(),mr={src:a,gain:h,lfo:l}}function hd(){try{localStorage.setItem(wu,JSON.stringify({muted:Mn,reducedMotion:zr}))}catch{document.querySelector("#settings-note")?.replaceChildren("Настройки действуют до закрытия вкладки.")}}function Iv(){return`<div class="settings" aria-label="Настройки"><button id="mute" aria-pressed="${Mn}">Без звука: ${Mn?"да":"нет"}</button><button id="motion" aria-pressed="${qs()}">Меньше движения: ${qs()?"да":"нет"}</button><span id="settings-note" role="status"></span></div>`}function Uv(n){document.getElementById("mute")?.addEventListener("click",()=>{Mn=!Mn,hd(),Mn||(Vr(),be("ui")),n()}),document.getElementById("motion")?.addEventListener("click",()=>{zr=!qs(),Pc(),hd(),n()})}let il;function Nv(n){if(Mn||document.hidden||!fn||fn.state!=="running")return!1;const e=fn,t=e.currentTime+.03;if(il){const r=il;r.gain.setTargetAtTime(0,e.currentTime,.03),setTimeout(()=>r.disconnect(),400)}const i=e.createGain();i.gain.value=.9;const s=e.createBiquadFilter();s.type="lowpass",s.frequency.value=3200,s.Q.value=.4,i.connect(s),s.connect(e.destination),il=i;for(const r of n){const a=440*2**((r.midi-69)/12),o=t+r.t,h=o+r.dur+.25,l=e.createGain();l.connect(i),l.gain.setValueAtTime(1e-4,o),l.gain.exponentialRampToValueAtTime(.045*r.vel,o+.005),l.gain.exponentialRampToValueAtTime(.012*r.vel,o+Math.min(.18,r.dur)),l.gain.exponentialRampToValueAtTime(1e-4,h);for(const[c,d,u]of[["triangle",-9,1],["triangle",9,1],["square",3,.12]]){const f=e.createOscillator(),g=e.createGain();f.type=c,f.frequency.value=a,f.detune.value=d,g.gain.value=u,f.connect(g),g.connect(l),f.start(o),f.stop(h+.02),f.onended=()=>{f.disconnect(),g.disconnect()}}}return!0}let Au=yu(()=>null);try{Au=yu(n=>localStorage.getItem(n))}catch{}const C=new cv(Au,n=>{try{localStorage.setItem(xu,JSON.stringify(n))}catch{C.message="Сохранение недоступно в этом браузере."}}),Or=document.querySelector("#app");Or.innerHTML='<canvas id="scene" aria-label="Трёхмерный двор и задиры"></canvas><div id="film" aria-hidden="true"></div><div id="herald" hidden></div><canvas id="arm" aria-hidden="true"></canvas><div id="ui"></div><div id="orientation-prompt" class="orientation-overlay" hidden></div>';const Cn=document.querySelector("#ui"),xi=document.querySelector("#orientation-prompt");let dd=!1;function Zs(){if(!xi)return;if(!(window.innerHeight>window.innerWidth&&!dd)){xi.hidden=!0,xi.innerHTML="";return}(xi.hidden||!xi.querySelector("#portrait-bypass"))&&(xi.hidden=!1,xi.innerHTML='<div class="orientation-card" role="dialog" aria-modal="true" aria-labelledby="orient-title"><div class="orientation-icon" aria-hidden="true"><svg viewBox="0 0 48 48" width="52" height="52"><rect x="13" y="7" width="22" height="34" rx="4" fill="none" stroke="#f4f1e8" stroke-width="3"/><line x1="20" y1="35" x2="28" y2="35" stroke="#f4f1e8" stroke-width="3" stroke-linecap="round"/><path d="M 37 15 A 13 13 0 0 1 37 31" fill="none" stroke="#c7f653" stroke-width="3" stroke-dasharray="4 2"/><polyline points="34,31 38,33 40,28" fill="none" stroke="#c7f653" stroke-width="3" stroke-linejoin="round"/></svg></div><div class="eyebrow" style="justify-content:center">ГОРИЗОНТАЛЬНЫЙ РЕЖИМ</div><h2 id="orient-title">ПОВЕРНИТЕ<br><em>УСТРОЙСТВО</em></h2><p>Пожалуйста, переверните устройство в горизонтальный режим</p><div class="buttons" style="justify-content:center"><button id="portrait-bypass" class="secondary" type="button">Продолжить</button></div></div>',xi.querySelector("#portrait-bypass")?.addEventListener("click",()=>{Vr(),be("ui"),dd=!0,Zs()}))}C.briefings=!0;C.touch=matchMedia("(pointer: coarse)").matches;addEventListener("pointerdown",n=>{C.touch=n.pointerType==="touch"},{capture:!0});const lo=hv(document.querySelector("#herald"),()=>Ru());function Ru(){!C.briefing||C.mode!=="play"||(Vr(),be("ui"),C.skipBriefing(),ct())}{const n=document.createElement("canvas");n.width=n.height=128;const e=n.getContext("2d");if(e){const t=e.createImageData(128,128);for(let i=0;i<t.data.length;i+=4){const s=Math.random()*255;t.data[i]=t.data[i+1]=t.data[i+2]=s,t.data[i+3]=255}e.putImageData(t,0,0)}document.getElementById("film")?.style.setProperty("--grain",`url(${n.toDataURL()})`)}const Ne=document.querySelector("#scene"),Gn=new Cx({canvas:Ne,antialias:!0,alpha:!1});Gn.setPixelRatio(Math.min(devicePixelRatio,2));Gn.shadowMap.enabled=!0;Gn.shadowMap.type=Ad;Gn.outputColorSpace=mt;Gn.autoClear=!1;Gn.info.autoReset=!1;const yn=new Rp;yn.background=new Ve("#e2e2e2");yn.fog=new gc("#e2e2e2",14,42);const bt=new hn(50,1,.3,90),Ba=new Bp("#ffffff","#6e6e6e",2.4);yn.add(Ba);const Vt=new Vp("#ffffff",3);Vt.position.set(-7,14,10);Vt.castShadow=!0;Vt.shadow.mapSize.set(2048,2048);Vt.shadow.bias=-6e-4;Vt.shadow.normalBias=.02;Vt.shadow.camera.left=-16;Vt.shadow.camera.right=16;Vt.shadow.camera.top=16;Vt.shadow.camera.bottom=-16;yn.add(Vt);function ud(n){const e=document.createElement("canvas");e.width=4,e.height=256;const t=e.getContext("2d"),i=t.createLinearGradient(0,0,0,256);for(const[r,a]of n)i.addColorStop(r,a);t.fillStyle=i,t.fillRect(0,0,4,256);const s=new Ci(e);return s.colorSpace=mt,s}const Fv={street:ud(Ka.street.sky),bar:ud(Ka.bar.sky)},Cu=()=>C.mode==="menu"||C.mode==="select"?1:C.level,Dc=(n=C.level)=>vt[n].look==="bar";function kv(n){const e=vt[n].look,t=Ka[e];yn.background=Fv[e],yn.fog.color.set(t.fog),yn.fog.near=t.near,yn.fog.far=t.far,Ba.color.set(t.hemi[0]),Ba.groundColor.set(t.hemi[1]),Ba.intensity=t.hemi[2],Vt.color.set(t.sun[0]),Vt.intensity=t.sun[1],Ha=t.sunAt}let Ha=Ka.bar.sunAt;yn.add(Vt.target);function fd(n){Vt.position.set(Ha[0]+n,Ha[1],Ha[2]),Vt.target.position.set(n,0,0),Vt.target.updateMatrixWorld()}const Pu=n=>"./assets/"+n,Du=new jd({color:"#202320"}),pd=new Map;function Rn(n){let e=pd.get(n);return e||(e=new hi({color:n,roughness:.9,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1}),pd.set(n,e)),e}function Ge(n,e,t,i,s,r,a,o,h=!0){const l=new Te(new Xn(e,t,i),Rn(s));return l.position.set(r,a,o),l.castShadow=!0,l.receiveShadow=!0,n.add(l),h&&l.add(new Up(new Np(l.geometry),Du)),l}const zv=n=>new U((n.min.x+n.max.x)/2,(n.min.y+n.max.y)/2,(n.min.z+n.max.z)/2),Ov=n=>new U(n.max.x-n.min.x,n.max.y-n.min.y,n.max.z-n.min.z),Js=new Map;function Bv(n,e){const t=new Ht,i=zv(e),s=Ov(e);if(t.position.set(i.x,e.min.y,i.z),n.add(t),Js.set(e.id,t),e.look==="barrel"){const r=new Te(new jt(s.x/2,s.x/2*.94,s.y,20),Rn(e.color));r.position.y=s.y/2,r.castShadow=r.receiveShadow=!0,t.add(r);for(const o of[.18,.82]){const h=new Te(new jt(s.x/2+.018,s.x/2+.018,.07,20,1,!0),Rn("#2a2e2a"));h.position.y=s.y*o,t.add(h)}const a=new Te(new rs(s.x/2*.9,20),Rn("#1f2422"));a.rotation.x=-Math.PI/2,a.position.y=s.y+.004,t.add(a)}else if(e.look==="crate"||e.look==="pallet"){Ge(t,s.x,s.y,s.z,e.color,0,s.y/2,0);const r=e.look==="crate"?3:5;for(let a=0;a<r;a++)Ge(t,s.x*.96,.05,.03,"#7b5532",0,s.y*(a+.5)/r,s.z/2+.02,!1)}else if(e.look==="dumpster")Ge(t,s.x,s.y,s.z,e.color,0,s.y/2,0),Ge(t,s.x+.08,.09,s.z+.08,"#2b4f39",0,s.y+.045,0),Ge(t,s.x*.8,.16,.03,"#f1e7c3",0,s.y*.55,s.z/2+.02,!1);else if(e.look==="van"){Ge(t,s.x,s.y,s.z,e.color,0,s.y/2,0),Ge(t,.9,.6,.03,"#2d3a40",s.x/2-.6,s.y*.72,s.z/2+.02,!1),Ge(t,s.x*.55,.2,.03,"#f359a4",-.4,s.y*.38,s.z/2+.02,!1);for(const r of[-s.x/2+.55,s.x/2-.55]){const a=new Te(new jt(.34,.34,.25,16),Rn("#1f2321"));a.rotation.x=Math.PI/2,a.position.set(r,.09-e.min.y+.25,s.z/2-.1),t.add(a)}}else if(e.look==="barrier"){Ge(t,s.x,s.y,s.z,e.color,0,s.y/2,0);for(let r=0;r<4;r++)Ge(t,.32,s.y*.7,.03,"#e55a3a",-s.x/2+.35+r*.6,s.y*.5,s.z/2+.02,!1)}else if(e.look==="piano"){Ge(t,s.x,s.y,s.z,e.color,0,s.y/2,0),Ge(t,s.x+.1,.08,s.z+.1,"#241a15",0,s.y+.04,0),Ge(t,s.x*.92,.1,.32,"#efe9da",0,s.y*.6,s.z/2+.16);for(let r=0;r<14;r++)Ge(t,.045,.05,.18,"#161311",-s.x*.42+r*s.x*.065,s.y*.6+.07,s.z/2+.12,!1);Ge(t,s.x*.7,s.y*.3,.03,"#5a4436",0,s.y*.8,s.z/2+.02,!1)}else if(e.look==="table"){const r=new Te(new jt(s.x/2,s.x/2+.08,s.y,24),Rn(e.color));r.position.y=s.y/2,r.castShadow=r.receiveShadow=!0,t.add(r);const a=new Te(new jt(s.x/2+.06,s.x/2+.06,.06,24),Rn("#4a3a2e"));a.position.y=s.y+.03,t.add(a);const o=new Te(new jt(.05,.05,.25,8),Rn("#f2efe6"));o.position.set(.2,s.y+.18,0),t.add(o)}else if(e.look==="counter"){Ge(t,s.x,s.y-.1,s.z,e.color,0,(s.y-.1)/2,0),Ge(t,s.x+.2,.1,s.z+.2,"#3a2a1e",0,s.y-.05,.05);for(let a=0;a<6;a++)Ge(t,s.x/6-.2,s.y*.55,.03,"#7d5a40",-s.x/2+(a+.5)*s.x/6,s.y*.45,s.z/2+.02,!1);const r=new Te(new jt(.04,.04,s.x,8),Rn("#b9b9b9"));r.rotation.z=Math.PI/2,r.position.set(0,.22,s.z/2+.2),t.add(r)}else if(e.look==="shelves"){Ge(t,s.x,s.y,s.z,e.color,0,s.y/2,0);for(let r=0;r<3;r++){Ge(t,s.x*.94,.06,.2,"#2c221a",0,.9+r*.7,s.z/2+.08,!1);for(let a=0;a<11;a++){const o=new Te(new jt(.07,.08,.38+a%3*.06,8),Rn(["#3d4a35","#5a3a26","#77705e"][(a+r)%3]));o.position.set(-s.x*.43+a*s.x*.086,1.13+r*.7,s.z/2+.1),t.add(o)}}}else if(e.look==="interior"){Ge(t,s.x,s.y,s.z,e.color,0,s.y/2,0,!1);const r=new Te(new Wt(s.x*.5,s.y*.4),new wt({color:"#f7d58a",fog:!0}));r.position.set(s.x*.18,s.y*.62,s.z/2+.01),t.add(r)}else Ge(t,s.x,s.y,s.z,e.color,0,s.y/2,0,e.look!=="wall")}function Hv(n,e){const t=e.filter(s=>s.look==="wall");if(!t.length)return;const i=t[0].max.z+.04;for(const s of e.filter(r=>r.look==="interior")){const r=s.min.x+.5,a=s.max.x-.5,o=s.min.y+1.2,h=s.max.y-.6;Ge(n,a-r+.3,.14,.1,"#efe7cc",(r+a)/2,o-.07,i),Ge(n,a-r+.3,.14,.1,"#efe7cc",(r+a)/2,h+.07,i);for(const l of[r-.08,a+.08])Ge(n,.14,h-o,.1,"#efe7cc",l,(o+h)/2,i)}}function Gv(n,e){const t=[];let i=0;return n.updateMatrixWorld(!0),n.traverse(s=>{if(!(s instanceof Te)||e.has(s))return;const r=new Ks().setFromObject(s);r.max.y-r.min.y<.5||t.push({id:"scenery-"+i++,kind:"scenery",min:r.min.clone(),max:r.max.clone()})}),t}function Vv(){const n=new Ht;Ge(n,41.5,.25,60,"#a7aaa0",-11.25,-.125,-10,!1),Ge(n,.3,.14,60,"#c9cbc2",9.5,.07,-10),Ge(n,12,.02,9,"#bdbdb0",0,.01,2.5,!1),Ge(n,4,9,16,"#a9afa5",-9.5,4.5,-2);for(let i=2;i<8;i+=2.6)for(let s=-8;s<5;s+=3.2)Ge(n,.1,1.5,1.1,"#59675f",-7.47,i,s);Ge(n,21,2,.3,"#9da497",-2.5,10,-9);for(const i of[-4.2,-6.6])Ge(n,.9,5.2,.9,"#8f8a80",7.4,2.6,i);Ge(n,.9,.7,3.3,"#8f8a80",7.4,5.55,-5.4),Ge(n,1.6,10,3,"#a3a59b",8.6,5,-10.1),Ge(n,.1,4.6,.1,"#596358",-6.5,2.3,-4.5),Ge(n,.1,4.6,.1,"#596358",6.5,2.3,-4.5);const e=new Te(new jt(.015,.015,13,4),Rn("#2b2f2b"));e.rotation.z=Math.PI/2,e.position.set(0,4.45,-4.5),n.add(e),["#f359a4","#c7f653","#f4f1e8","#6fb6c6","#f6c453"].forEach((i,s)=>{const r=new Te(new Wt(.9,1.1),new hi({color:i,side:Bt,roughness:1}));r.position.set(-4.6+s*2.2,3.85,-4.5+s%2*.02),r.rotation.z=s%2?.05:-.04,r.castShadow=!0,n.add(r),r.userData.sway=s,r.userData.cloth=i}),Ge(n,.16,5.6,.16,"#596358",-5.4,2.8,-6);const t=new Te(new as(.28,14,10),new wt({color:"#f7ffe0"}));return t.position.set(-5.4,5.7,-6),n.add(t),n}const Lc=[],ci={},Lu={},Iu=[],Uu=[],Ji=new Map,co=[],ja=new Ft;ja.colorSpace=mt;new eu().load(Pu("gen_bar_backdrop.png"),n=>{ja.image=n.image,ja.needsUpdate=!0},void 0,()=>{});const Ic=[1,2];for(const n of Ic){const e=new Ht;yn.add(e),ci[n]=e;const t=new Ht;if(e.add(t),Dc(n))t.add(uv(ja));else{const s=Vv(),r=dv({left:!1});s.position.x=ni,r.position.x=ti,t.add(s,r)}t.traverse(s=>{s.userData.sway!==void 0&&Iu.push(s),s.userData.swing!==void 0&&Uu.push(s),s.userData.lamp!==void 0&&Ji.set("gag-lamp-"+s.userData.lamp,s),s.userData.bell!==void 0&&Ji.set("gag-bell-"+s.userData.bell,s),s.userData.cloth&&co.push(s)});const i=vt[n];for(const s of i.covers)Bv(e,s);Hv(e,i.covers),Lu[n]=Gv(t,new Set)}function Nu(n){const e=document.createElement("canvas");e.width=512,e.height=640;const t=e.getContext("2d");t.lineJoin="round",t.lineCap="round",t.strokeStyle="#202522",t.lineWidth=12;function i(a,o,h,l,c){t.fillStyle=c,t.beginPath(),t.ellipse(a,o,h,l,0,0,Math.PI*2),t.fill(),t.stroke()}function s(a,o){t.fillStyle=o,t.beginPath(),a.forEach(([h,l],c)=>c?t.lineTo(h,l):t.moveTo(h,l)),t.closePath(),t.fill(),t.stroke()}n==="enemy"?(s([[130,420],[120,591],[208,591],[240,450],[277,590],[368,590],[355,410]],"#3e4741"),s([[157,232],[100,252],[42,377],[100,411],[155,330],[148,465],[365,465],[354,327],[405,386],[465,347],[392,250],[333,229]],"#b6d451"),i(259,167,91,105,"#f1cbae"),s([[165,137],[177,69],[254,43],[333,76],[353,126],[285,103],[236,122]],"#444b43"),i(221,180,6,9,"#222722"),i(297,179,6,9,"#222722")):n==="dog"?(t.strokeStyle="#d3ed64",t.lineWidth=15,t.beginPath(),t.ellipse(260,95,88,26,-.15,0,Math.PI*2),t.stroke(),t.strokeStyle="#222722",t.lineWidth=12,i(253,420,118,150,"#e7ddbd"),i(260,262,108,100,"#e7ddbd"),i(263,280,28,19,"#262e26")):n==="bottle"?(s([[210,103],[300,103],[302,235],[354,296],[354,600],[160,600],[160,297],[209,237]],"#94be6a"),s([[207,103],[207,70],[306,70],[306,105]],"#f7c56d"),s([[163,333],[350,333],[350,462],[163,462]],"#eee9d3"),t.fillStyle="#252d24",t.font="bold 37px Arial",t.fillText("КВАС",195,410)):n==="barrel"?(s([[133,178],[379,178],[402,600],[111,600]],"#d63434"),i(256,180,123,35,"#f05050"),s([[128,260],[385,260],[389,293],[125,293]],"#272d28"),s([[117,470],[396,470],[399,504],[114,504]],"#272d28"),t.fillStyle="#f9d846",t.fillRect(145,330,222,70),t.font="900 46px Arial",t.fillStyle="#263126",t.fillText("БАМ!",200,382)):(s([[15,120],[495,120],[495,480],[15,480]],"#c7f653"),t.fillStyle="#222722",t.textAlign="center",t.font="900 75px Arial",t.fillText("ДВОР",256,270),t.fillText("№ 02",256,370));const r=new Ci(e);return r.colorSpace=mt,r}const Wv=new eu;function Et(n,e){const t=Nu(e);return Wv.load(Pu(n),i=>{t.image=i.image,t.needsUpdate=!0},void 0,()=>{}),t}const qn={enemy:Et("bully.png","enemy"),dog:Et("gen_dog_sit.png","dog"),...Object.fromEntries(Px.map(n=>[n,Et(Nt[n].sprite,n==="barrel"||n==="hat"?"barrel":"bottle")]))},Fu={walrus:Et("gen_walrus.png","enemy"),bulldog:Et("gen_bulldog.png","enemy")},Zt={windup:Et("gen_cat_windup.png","enemy"),hurt:Et("gen_cat_hurt.png","enemy"),ko:Et("gen_cat_ko.png","enemy"),walk:Et("gen_dog_walk.png","dog"),sad:Et("gen_dog_sad.png","dog")},Qs=Object.fromEntries(["granny","kitten","pigeon","drunk"].map(n=>[n,{idle:Et(`gen_${n}_idle.png`,"dog"),mad:Et(`gen_${n}_mad.png`,"dog"),fury:Et(`gen_${n}_fury.png`,"dog")}]));{const n=Et("gen_mole_hurt.png","dog");Qs.mole={idle:Et("gen_mole_up.png","dog"),lantern:Et("gen_mole_lantern.png","dog"),mad:n,fury:n}}{const n=Et("gen_weasel.png","dog");Qs.bartender={idle:n,mad:n,fury:n}}const Ys=Object.fromEntries(["rat","gang","kid"].map(n=>[n,{appear:Et(`gen_${n}_appear.png`,"enemy"),attack:Et(`gen_${n}_attack.png`,"enemy"),ko:Et(`gen_${n}_ko.png`,"enemy")}]));for(const n of[...Object.values(qn),...Object.values(Zt),...Object.values(Fu),...Object.values(Qs).flatMap(e=>Object.values(e)),...Object.values(Ys).flatMap(e=>Object.values(e))])n.colorSpace=mt,n.anisotropy=4;const ku=new Map([[qn.enemy,"idle"],[qn.dog,"sit"],...Object.entries(Zt).map(([n,e])=>[e,n]),...Object.values(Qs).flatMap(n=>Object.entries(n).map(([e,t])=>[t,e])),...Object.values(Ys).flatMap(n=>Object.entries(n).map(([e,t])=>[t,e]))]);function ri(n,e){if(n.skin&&n.kind==="enemy"){n.frame=e===Zt.windup?"windup":e===Zt.hurt?"hurt":e===Zt.ko?"ko":"idle";return}n.sprite.material.map!==e&&(n.frame=ku.get(e),n.sprite.material.map=e,n.sprite.customDepthMaterial.map=e)}Lc.push(Nu("sign"));const zu=new Te(new Wt(1.6,1.25),new wt({map:Lc[0],alphaTest:.5}));zu.position.set(-6.3+ni,2.5,-8.8);ci[2].add(zu);const ji=vt[1].covers.find(n=>n.id===vt[1].landing?.cover),Za=1.35,Xv=Gt.hat.h*Gt.hat.inset[3]*Za,Yn=new Te(new Wt(Gt.hat.w,Gt.hat.h).translate(0,Gt.hat.h/2,0),new wt({map:qn.hat,alphaTest:.5,side:Bt}));Yn.visible=!1;Yn.renderOrder=2;Yn.scale.set(Za,-Za,1);function ec(){if(!Yn.visible)return null;const n=Yn.position,e=We({x:n.x,y:n.y-.04,z:n.z}),t=We({x:n.x+Gt.hat.w*Za*.36,y:n.y-.04,z:n.z});return{x:e.x,y:e.y,r:Math.abs(t.x-e.x)}}for(const n of Lc)bu(n.image);for(const n of Ic)gv(ci[n]);Ql(Du.color);for(const n of co)n.material=n.material.clone(),n.material.color.set(n.userData.cloth);{const n=vt[1].gags.find(l=>l.id==="gag-cuckoo"),e=.66/.852,t=e/.8,i=new Te(new Wt(e,t).translate(0,t/2,0),new wt({map:Et("gen_cuckoo.png","barrel"),alphaTest:.5}));i.material.map.colorSpace=mt,i.position.set((n.min.x+n.max.x)/2,n.min.y-.02,n.max.z-.02),ci[1].add(i),Ji.set("gag-cuckoo",i);const s=document.createElement("canvas");s.width=256,s.height=150;const r=s.getContext("2d");if(r){r.fillStyle="#fff4d6",r.fillRect(0,0,256,150),r.strokeStyle="#3a2a1e",r.lineWidth=2;for(let l=34;l<=114;l+=16)r.beginPath(),r.moveTo(14,l),r.lineTo(242,l),r.stroke();r.font="900 54px Georgia",["#e8475f","#2f6fe0","#e8475f","#2f9c5a","#2f6fe0"].forEach((l,c)=>{r.fillStyle=l,r.fillText("♪",22+c*46,96-c%3*14)}),r.strokeStyle="#151715",r.lineWidth=6,r.strokeRect(3,3,250,144)}const a=new Ci(s);a.colorSpace=mt;const o=vt[1].covers.find(l=>l.id==="piano"),h=new Te(new Wt(.62,.36),new wt({map:a}));h.position.set((o.min.x+o.max.x)/2,o.max.y*.8,o.max.z+.045),h.rotation.x=-.12,ci[1].add(h);for(const l of["gag-bell-0","gag-bell-1"]){const c=Ji.get(l);if(!c)continue;const d=c.getWorldPosition(new U),u=new Te(new as(.17,16,8,0,Math.PI*2,0,Math.PI/2),new hi({color:"#e0a83a",metalness:.6,roughness:.3,side:Bt}));u.position.set(d.x,d.y-.3,d.z),ci[2].add(u),u.userData.ringer=l;const f=new Te(new as(.05,8,6),new hi({color:"#c8742a"}));f.position.y=-.04,u.add(f),Ji.set(l,u)}}{const n=new Te(new Xn(1.1,.02,.5),new hi({color:"#7c3ae6",roughness:.7}));n.position.set(.9,ji.max.y+.01,(ji.min.z+ji.max.z)/2+.05),ci[1].add(n,Yn);const e=new Te(new as(.13,16,8,0,Math.PI*2,0,Math.PI/2),new hi({color:"#e0a83a",metalness:.6,roughness:.3}));e.position.set(-.1,ji.max.y,n.position.z),ci[1].add(e)}function qv(){const n=document.createElement("canvas");n.width=n.height=128;const e=n.getContext("2d");e.lineWidth=20,e.strokeStyle="#202320",e.beginPath(),e.arc(64,64,44,0,Math.PI*2),e.stroke(),e.lineWidth=11,e.strokeStyle="#f45d96",e.stroke(),e.fillStyle="#202320",e.font="900 54px Arial",e.textAlign="center",e.fillText("!",64,83);const t=new Ci(n);return t.colorSpace=mt,t}const md=qv(),Ou=new wt({color:"#262626",transparent:!0,opacity:.28,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2});function er(n,e=256,t=128){const i=document.createElement("canvas");i.width=e,i.height=t;const s=i.getContext("2d");s.lineJoin="round",s.lineCap="round",n(s);const r=new Ci(i);return r.colorSpace=mt,r}const Yv=er(n=>{n.lineWidth=22,n.strokeStyle="#3a2f18",n.beginPath(),n.ellipse(128,64,92,30,0,0,Math.PI*2),n.stroke(),n.lineWidth=13,n.strokeStyle="#ffe27a",n.stroke()});function $v(n,e,t,i){n.beginPath();for(let s=0;s<=10;s++){const r=-Math.PI/2+s*Math.PI/5,a=s%2?i*.45:i;n.lineTo(e+Math.cos(r)*a,t+Math.sin(r)*a)}n.closePath(),n.fillStyle="#ffe14d",n.fill(),n.lineWidth=6,n.strokeStyle="#1c1d1a",n.stroke()}const Kv=er(n=>{for(let e=0;e<5;e++){const t=e/5*Math.PI*2;$v(n,128+Math.cos(t)*92,64+Math.sin(t)*34,20)}}),jv=er(n=>{n.strokeStyle="#1c1d1a",n.lineWidth=7,n.fillStyle="#9aa6b4",n.beginPath(),n.arc(90,52,30,Math.PI*.5,Math.PI*1.6),n.arc(130,38,34,Math.PI*1.05,Math.PI*1.95),n.arc(172,54,28,Math.PI*1.4,Math.PI*.5),n.closePath(),n.fill(),n.stroke(),n.strokeStyle="#3d7fd6",n.lineWidth=6;for(const e of[96,124,152,176])n.beginPath(),n.moveTo(e,92),n.lineTo(e-6,116),n.stroke()}),gd=er(n=>{n.beginPath(),n.roundRect(8,8,240,68,24),n.fillStyle="#225530",n.fill(),n.strokeStyle="#0f2414",n.lineWidth=7,n.stroke(),n.beginPath(),n.roundRect(14,14,228,56,18),n.strokeStyle="#a3e8b0",n.lineWidth=3,n.stroke(),n.font="900 32px Arial, sans-serif",n.textAlign="center",n.textBaseline="middle",n.strokeStyle="#0f2414",n.lineWidth=5,n.strokeText("НЕ ТРОГАТЬ",256/2,84/2+1),n.fillStyle="#f0fff4",n.fillText("НЕ ТРОГАТЬ",256/2,84/2+1)},256,84),Zv=er(n=>{n.font="900 54px Georgia",n.lineWidth=7,n.strokeStyle="#1c1d1a",n.fillStyle="#9fd3ff",[[30,110,1],[100,72,.8],[170,40,.6]].forEach(([e,t,i])=>{n.save(),n.translate(e,t),n.scale(i,i),n.strokeText("Z",0,0),n.fillText("Z",0,0),n.restore()})}),Jv=er(n=>{const e=n.createLinearGradient(0,0,0,512);e.addColorStop(0,"rgba(255,240,170,0)"),e.addColorStop(.25,"rgba(255,240,170,.55)"),e.addColorStop(1,"rgba(255,240,170,.1)"),n.fillStyle=e,n.beginPath(),n.moveTo(90,0),n.lineTo(166,0),n.lineTo(240,512),n.lineTo(16,512),n.closePath(),n.fill()},256,512);function zi(n,e,t,i=2){const s=new Xl(new qa({map:n,transparent:!0,depthWrite:!1}));return s.scale.set(e,t,1),s.renderOrder=i,s}const os=new Ht;yn.add(os);const Qt=new Map,Gi=[],Er=new Map;function Qv(n){const e=oo(n.kind,n.who),t=new Ht,i=new Ht;t.add(i);const s=new Wt(e.w,e.h);s.translate(0,e.h/2,0);const r=n.kind==="enemy"&&n.skin&&(n.skin==="walrus"||n.skin==="bulldog")?n.skin:void 0,a=r?Fu[r]:n.kind==="friend"?Qs[n.who].idle:n.kind==="thug"?Ys[n.who].appear:qn[n.kind],o=new wt({map:a,alphaTest:.5,side:Bt}),h=new Te(s,o);if(h.castShadow=!0,h.customDepthMaterial=new Qd({depthPacking:zd,map:a,alphaTest:.5}),i.add(h),n.y<=.01&&n.who!=="mole"){const c=new Te(new rs(e.w*.36,24),Ou);c.rotation.x=-Math.PI/2,c.position.y=.035,c.scale.y=.45,c.renderOrder=1,t.add(c)}const l={kind:n.kind,group:t,body:i,sprite:h,flash:0,sad:0,skin:r,who:n.who,facing:n.kind==="enemy"&&n.x<0?-1:n.kind==="thug"?-(n.side??1):1};return n.kind==="friend"&&(l.badge=zi(gd,.72,.24),i.add(l.badge),n.who==="drunk"&&(l.zzz=zi(Zv,.7,.35),l.zzz.position.set(.45,e.h*.95,0),i.add(l.zzz))),n.kind==="thug"&&(l.warning=new Xl(new qa({map:md,depthWrite:!1})),l.warning.position.set(0,e.h*.82,0),i.add(l.warning),n.from==="manhole"&&(l.hole=new Te(new rs(.62,24),new wt({color:"#141414"})),l.hole.rotation.x=-Math.PI/2,l.hole.scale.y=.5,l.hole.renderOrder=1,t.add(l.hole))),l.frame=r?"idle":ku.get(a),n.kind==="enemy"&&(l.warning=new Xl(new qa({map:md,depthWrite:!1})),l.warning.position.set(0,e.h+.3,0),i.add(l.warning),l.stars=zi(Kv,1.1,.55),l.stars.position.set(0,e.h*.97,.05),l.stars.visible=!1,i.add(l.stars)),n.kind==="dog"&&(l.halo=zi(Yv,.62,.31),i.add(l.halo),l.badge=zi(gd,.64,.21),i.add(l.badge),l.cloud=zi(jv,.8,.4),l.cloud.visible=!1,i.add(l.cloud),l.beam=zi(Jv,1.6,6,1),l.beam.visible=!1,t.add(l.beam)),os.add(t),Qt.set(n.id,l),l}function Is(n){os.remove(n.group),n.group.traverse(e=>{e instanceof Te&&e.geometry&&e.geometry.dispose()}),n.sprite.material.dispose()}const ey=[{id:-1,kind:"enemy",skin:"walrus",x:-2.55,y:0,z:2.2,age:1,deadline:60},{id:-2,kind:"dog",x:.2,y:0,z:-.7,age:1,deadline:1/0},{id:-3,kind:"friend",who:"bartender",x:.3,y:.3,z:-3.15,age:1,deadline:60}],ty=()=>C.mode==="menu"||C.mode==="select"?ey:C.actors;function zs(n){const e=ty(),t=!qs();for(const[i,s]of Qt)if(!e.some(r=>r.id===i)){Qt.delete(i);const r=Er.get(i);Er.delete(i),r&&t?Gi.push({view:s,age:0,spin:s.facing,how:r}):Is(s)}for(const i of e){const s=Qt.get(i.id),r=i.kind==="enemy"&&i.skin&&(i.skin==="walrus"||i.skin==="bulldog")?i.skin:void 0;s&&(s.kind!==i.kind||s.skin!==r)&&(Qt.delete(i.id),Is(s));const a=Qt.get(i.id)??Qv(i),o=oo(i.kind,i.who),h=un(C.level,i,t);a.group.position.set(h.x,h.y,h.z);const l=t?(i.id<0?n:i.age)+i.id*.7:0;let c=1,d=1,u=0,f=0;const g=new Ve(1,1,1);if(i.kind==="enemy"){g.setRGB(1,.88,.88);const _=i.layer==="foreground"||i.layer===void 0,m=i.deadline-i.age,p=t&&_?en.clamp(1-m/Xs,0,1):0,b=Math.abs(Math.sin(l*4.2));if(c=1+(1-b)*.05,d=1-(1-b)*.06+b*.03,f=b*.06,u=Math.sin(l*2.1)*.035,p>0&&!a.wound&&i.id>0&&(a.wound=!0,be("windup")),ri(a,p>0?Zt.windup:qn.enemy),p>0){const v=Math.sin(n*48)*.02*p;u=-a.facing*.08*p+v,c*=1+.08*p,d*=1+.1*p,f=0;const A=.5+.5*Math.sin(n*18);g.setRGB(1,(1-.45*p*A)*.88,(1-.5*p*A)*.88)}if(a.warning){const v=i.id>0&&_&&m<Xs*1.6;a.warning.visible=v,a.warning.scale.setScalar(.38+p*.3+(t?Math.sin(n*14)*.03:0))}if(a.stars&&(a.stars.visible=!1),a.body.position.x=0,i.antic&&t){if(!a.antic&&i.age>.45&&i.id>0){a.antic=!0;const v=We(tr(a));it({dance:"ПЛЯШЕТ! БЕЙ!",sandwich:"ОБЕДАЕТ! БЕЙ!",selfie:"СЕЛФИ! БЕЙ!"}[i.antic],v.x,v.y-20,"combo")}if(i.antic==="dance"){const v=Math.abs(Math.sin(n*9));f=v*.16,u=Math.sin(n*9)*.22,a.facing=Math.sin(n*4.5)>0?1:-1,c*=1+(1-v)*.08,d*=1-(1-v)*.08}else if(i.antic==="sandwich"){const v=Math.abs(Math.sin(n*11));d*=1-v*.05,c*=1+v*.04,u=.04}else u=Math.sin(n*1.5)*.05-.06*a.facing,f=.03}else a.antic=!1;i.blind&&t&&(ri(a,Zt.hurt),a.body.position.x=Math.sin(n*5.5)*.2,u=Math.sin(n*7)*.16,f=0),a.knock&&(a.knock=Math.max(0,a.knock-1/60*1.5),f+=Math.sin(a.knock*Math.PI)*.9,u+=a.knock*.5*a.facing);const E=i.wet??0;if(a.wet=E,E>0){if(!a.yuck){a.yuck=!0,be("yuck");const A=We({x:a.group.position.x,y:a.group.position.y+1.6,z:a.group.position.z});it(["ФУ-У!","БЕ-Е!","ФИ!"][i.id%3],A.x,A.y,"bad")}u=t?Math.sin(n*70+i.id)*.05*(.4+E):0,c*=1+.08*E,d*=1-.14*E,f=0,g.setRGB(1-.45*E,1,1-.55*E)}}else if(i.kind==="dog"){g.setRGB(.92,1,.94);const _=Tc(t?i.id<0?n:i.age:0,t);if(a.facing=-_.facing,_.walking){const E=Math.abs(Math.sin(l*11));f=E*.09,d=1+E*.04,u=Math.sin(l*11)*.06}else{const E=Math.sin(l*2.6);d=1+E*.025,c=1-E*.012,u=Math.sin(l*.9)*.03}a.sad=Math.max(0,a.sad-1/60);const m=Math.min(1,a.sad);ri(a,m>0?Zt.sad:_.walking?Zt.walk:qn.dog),m>0&&(d*=1-.12*m,c*=1+.05*m,u=Math.sin(n*20)*.03*m,f=0,g.setRGB(.85,.95,.98));const p=.1*a.facing;a.halo&&(a.halo.position.set(p,o.h*1+(t?Math.sin(n*3+i.id)*.04:0)-m*.12,0),a.halo.material.rotation=m*.45*Math.sin(n*6),a.halo.material.color.setRGB(1,1,1-m*.5)),a.badge&&(a.badge.visible=!0,a.badge.position.set(p,o.h*1+.34+(t?Math.sin(n*3+i.id)*.02:0)-m*.12,.02)),a.cloud&&(a.cloud.visible=m>0,a.cloud.position.set(p,o.h*1.25+Math.sin(n*4)*.03,0));const b=uu(t?i.id<0?n:i.age:0,t);if(b>0&&!a.ascending&&i.id>0){a.ascending=!0,be("harp");const E=We({x:h.x,y:h.y+2.2,z:h.z});it("♪ АЛЛИЛУЙЯ! ♪",E.x,E.y,"combo")}b<=0&&(a.ascending=!1),a.beam&&(a.beam.visible=b>0,a.beam.position.set(0,3-h.y+b*.2,-.05),a.beam.material.opacity=Math.min(1,b/.5)),b>0&&(u=Math.sin(n*2)*.05,f+=Math.sin(n*3)*.03)}else if(i.kind==="friend"){g.setRGB(.92,1,.94);const _=vt[C.level].friends[i.plan??0],m=_?Ec(_,i.age,t):null,p=Qs[i.who],b=i.mad??0;ri(a,b>0?b>$l*.5?p.mad:p.fury:m?.lantern&&p.lantern?p.lantern:p.idle),m&&(a.facing=m.facing),b>0?(u=Math.sin(n*40)*.04,c=1.06,d=.96,g.setRGB(.96,.92,.86)):m?.walking?(f=Math.abs(Math.sin(l*7))*.05,u=Math.sin(l*7)*.05):i.who==="drunk"?u=Math.sin(l*.9)*.07:d=1+Math.sin(l*2.6)*.02,a.badge&&(a.badge.visible=(m?.rise??1)>.5,a.badge.position.set(0,o.h*o.inset[3]+.22+(t?Math.sin(n*3+i.id)*.02:0),.02)),a.zzz&&(a.zzz.visible=b<=0,a.zzz.position.y=o.h*.95+(t?n*.25%.3:0))}else if(i.kind==="thug"){g.setRGB(1,.88,.88);const _=Ys[i.who],m=i.age>=si.attack,p=en.clamp((i.age-1.2)/(si.attack-1.2),0,1);ri(a,m?_.attack:_.appear),f=Math.abs(Math.sin(l*9))*.04,u=Math.sin(l*9)*.04,p>0&&t&&(u+=Math.sin(n*50)*.03*p,g.setRGB(1,(1-.4*p*(.5+.5*Math.sin(n*18)))*.88,(1-.45*p)*.88)),m&&(c=1.15,d=1.1),a.warning&&(a.warning.visible=i.age>.9,a.warning.scale.setScalar(.34+p*.26)),a.hole&&(a.hole.position.y=-h.y+.03)}else u=t?Math.sin(l*1.6)*.04:0,i.kind==="hat"&&t&&(f=Math.abs(Math.sin(l*2.4))*.05,u=Math.sin(l*2.4)*.08);a.flash>0&&(c*=1+a.flash*.2,d*=1-a.flash*.18,g.setRGB(1,1-a.flash*.55,1-a.flash*.45)),a.flash=Math.max(0,a.flash-.08),a.body.position.y=f,a.body.rotation.z=u,a.sprite.scale.set(c*a.facing,d,1),a.sprite.material.color.copy(g)}}function ny(n,e){for(let t=Gi.length-1;t>=0;t--){const i=Gi[t];i.age+=n;const s=i.view,r=s.sprite.material;if(i.how==="pancake"){if(ri(s,Zt.ko),s.body.position.x=0,i.age<.9)s.sprite.scale.set(1.6*s.facing,.2,1),s.body.rotation.set(0,0,0),s.body.position.y=0;else{const a=Math.min(1,(i.age-.9)/.8);s.sprite.scale.set(1.45*s.facing,.1+.5*a,1),s.body.rotation.x=-.9*(1-a),s.body.rotation.z=Math.sin(i.age*9)*.5*a,s.body.position.y=a*a*2.6,s.group.position.x+=n*Math.sin(i.age*4)*1.2}s.stars&&(s.stars.visible=!1),i.age>1.4&&(r.transparent=!0,r.opacity=Math.max(0,1-(i.age-1.4)*2.5)),i.age>1.8&&(Is(s),Gi.splice(t,1));continue}if(i.how==="stars"||i.how==="birds"){if(ri(s,i.age<.22?Zt.hurt:Zt.ko),s.stars&&(s.stars.visible=!0,s.stars.material.rotation=e*8),i.how==="stars"&&i.age>.18){const a=i.age-.18;s.body.position.y=a*a*22,s.body.rotation.z=a*14*i.spin;const o=Math.max(.2,1-a*1.3);s.sprite.scale.set(o*s.facing,o,1)}if(i.age>(i.how==="stars"?.62:.3)&&!i.done){i.done=!0;const a=We({x:s.group.position.x,y:s.group.position.y+1,z:s.group.position.z});i.how==="stars"?vy(a.x):yy(a.x,a.y),Is(s),Gi.splice(t,1)}continue}if(i.how==="ko"){const a=s.kind==="thug"?Ys[s.who]:null;if(ri(s,a?a.ko:i.age<.22?Zt.hurt:Zt.ko),i.age<.09)s.sprite.scale.set(1.4*s.facing,.6,1);else{const o=i.age-.09;s.sprite.scale.set(.9*s.facing,1.12,1),s.body.rotation.z=-i.spin*o*7,s.body.position.y=o*3.2-o*o*7,s.group.position.z-=n*3.5,s.group.position.x+=n*i.spin*-1.5}s.stars&&(s.stars.visible=!0,s.stars.material.rotation=e*8),i.age>.45&&(r.transparent=!0,r.opacity=Math.max(0,1-(i.age-.45)*4)),i.age>.75&&(Is(s),Gi.splice(t,1))}else{ri(s,s.kind==="thug"?Ys[s.who].attack:Zt.windup);const a=Math.min(1,i.age/.16);s.group.position.z+=n*(i.age<.16?5:-2),s.body.rotation.z=s.facing*.35*a,s.sprite.scale.set((1+.25*a)*s.facing,1+.2*a,1),i.age>.2&&(s.body.position.y-=n*6,r.transparent=!0,r.opacity=Math.max(0,1-(i.age-.2)*3.5)),i.age>.5&&(Is(s),Gi.splice(t,1))}}}const Os=document.querySelector("#arm"),iy=Os.getContext("2d");function An(n,e,t,i=12){const s=document.createElement("canvas");s.width=s.height=256;const r=s.getContext("2d");r.translate(128,128),r.lineJoin="round",r.beginPath();for(let a=0;a<=i*2;a++){const o=a%2?62:118-a%4*9,h=a/(i*2)*Math.PI*2;r.lineTo(Math.cos(h)*o,Math.sin(h)*o)}r.closePath(),r.fillStyle=e,r.fill(),r.lineWidth=9,r.strokeStyle="#151715",r.stroke(),r.beginPath();for(let a=0;a<=i*2;a++){const o=a%2?36:70,h=a/(i*2)*Math.PI*2+.2;r.lineTo(Math.cos(h)*o,Math.sin(h)*o)}return r.closePath(),r.fillStyle=t,r.fill(),r.rotate(-.12),r.font="900 46px Arial",r.textAlign="center",r.textBaseline="middle",r.lineWidth=8,r.strokeStyle="#151715",r.strokeText(n,0,2),r.fillStyle="#fffbe8",r.fillText(n,0,2),s}const Da={hit:An("БАМ!","#ffd84a","#f3388f"),throw:An("ХРЯСЬ!","#ffd84a","#8fdc2a"),protected:An("АЙ!","#ff9fb0","#e2324e",9),cover:An("ТУК!","#f4c27a","#c9772e",8),smash:An("ДЗЫНЬ!","#9fe7ff","#2f9be0",14),miss:An("ВЖУХ","#eef0ea","#b9c0b5",7),ult:An("ДИНЬ!","#c9a6ff","#7c3ae6",16),crash:An("БДЫЩЬ!","#ffd84a","#ff6b3d",16),strike:An("СТРАЙК!","#9fe7ff","#f3388f",14),squeak:An("ПИ-И-ИСК!","#fff36b","#ff9f2a",10),splat:An("ШМЯК!","#fff6e0","#ff9fb0",11)},Mi=new qp,vn=new Re(0,0);let Ja="",_d=C.hp;const sy=.42,Mr=.36,ry=.62,Br={duration:.34,arrive:.3,release:.46,reach:.38};let pt=null,xt=0,Ri=0,ay=1;const Ut=[];let pn=0,Ps=0;function Bu(){const n=window.visualViewport,e=n?Math.round(n.width):window.innerWidth,t=n?Math.round(n.height):window.innerHeight;return{w:Math.max(1,e),h:Math.max(1,t)}}function Wr(){const{w:n,h:e}=Bu();Gn.setSize(n,e);const t=fu(n,e,C.mode==="menu"||C.mode==="select"?0:pn);bt.aspect=n/e,bt.fov=t.fov,bt.updateProjectionMatrix(),bt.position.set(t.position.x,t.position.y,t.position.z),bt.lookAt(t.look.x,t.look.y,t.look.z),(C.mode==="menu"||C.mode==="select")&&(bt.position.x-=n<650?0:1.2,bt.lookAt(t.look.x-(n<650?0:1.8),t.look.y,t.look.z)),bt.updateMatrixWorld();const i=Math.min(devicePixelRatio||1,2);Os.width=Math.round(n*i),Os.height=Math.round(e*i)}addEventListener("resize",()=>{Wr(),qr(),Zs()});addEventListener("orientationchange",()=>{Wr(),qr(),Zs()});window.visualViewport&&window.visualViewport.addEventListener("resize",()=>{Wr(),qr(),Zs()});function Hu(){const n=document.querySelector(".crosshair");if(n){const e=Ne.getBoundingClientRect();n.style.left=Math.round(e.left+(vn.x+1)*.5*e.width)+"px",n.style.top=Math.round(e.top+(1-vn.y)*.5*e.height)+"px"}}const Ye=()=>!qs();function ho(){return Vx(C.level,C.actors,Ye(),Lu[C.level])}function Qa(n){Mi.setFromCamera(n,bt);const{origin:e,direction:t}=Mi.ray;return{origin:{x:e.x,y:e.y,z:e.z},direction:{x:t.x,y:t.y,z:t.z}}}const Xr=n=>{const e=Qa(n);return Ac(e.origin,e.direction,ho())};function eo(n){if(C.mode!=="play"||(Vr(),pt&&!pt.resolved))return;if(C.briefing){const a=Qa(vn);be("whoosh"),pt={action:"punch",throwing:!1,brief:!0,spot:{x:(vn.x+1)/2,y:(1-vn.y)/2},ray:a,shot:{kind:"whiff",distance:3,point:a.origin},phase:0,resolved:!1,held:null,staminaBefore:C.stamina,staminaAfter:C.stamina},Ye()||ic(pt);return}const e=n==="grab"&&C.held!==null,t=C.held,i=C.stamina;if(!C.spend(n)){Sn(),be("ui");return}const s=Qa(vn);be("whoosh");const r={x:(vn.x+1)/2,y:(1-vn.y)/2};pt={action:n,throwing:e,spot:r,ray:s,shot:Ac(s.origin,s.direction,ho(),e?"punch":n),phase:0,resolved:!1,held:t,staminaBefore:i,staminaAfter:C.stamina},Ye()||(e?Vu(pt):ic(pt)),Sn()}function it(n,e,t,i="pop"){const s=document.createElement("div");s.className="callout "+i,s.textContent=n,Cn.append(s);const r=Math.min(innerWidth/2,s.offsetWidth*.62+16),a=s.offsetHeight*.7+16;s.style.left=Math.round(en.clamp(e,r,innerWidth-r))+"px",s.style.top=Math.round(en.clamp(t,Math.max(120,a),Math.max(120,innerHeight-Math.max(110,a))))+"px",setTimeout(()=>s.remove(),900)}const oy=["","","ДВОЙНОЙ!","ТРОЙНОЙ!","РАЗМАШИСТО!","НЕУДЕРЖИМ!"];function Si(n){for(const e of C.events){const t=Qt.get(e.id),i=n??(t?We({x:t.group.position.x,y:t.group.position.y+1.2,z:t.group.position.z}):{x:innerWidth/2,y:innerHeight/2});if(e.type==="hurt"&&e.amount){const s=C.actors.find(r=>r.id===e.id)??(t?{x:t.group.position.x,y:t.group.position.y,z:t.group.position.z}:null);if(s){const r=t?tr(t):{x:s.x,y:s.y+2,z:s.z??0};Cr.push({...r,amount:e.amount,age:0,big:e.amount>10})}t&&(t.flash=1)}if((e.type==="ko"||e.type==="smash")&&(Er.set(e.id,e.type==="ko"&&e.how&&e.how!=="spin"?e.how:"ko"),e.type==="ko"&&be("ko")),e.type==="ko"&&e.who&&it(["ШМЯК!","БРЫСЬ!","ПШЁЛ!"][e.id%3],i.x,i.y-20,"pop"),e.type==="ko"&&e.combo>=2&&it(`КОМБО ×${e.combo} ${oy[Math.min(e.combo,5)]}`,i.x,i.y-70,"combo"),e.type==="attack"&&(Er.set(e.id,"attack"),be("attack"),it("БАЦ! −♥",i.x,i.y,"bad"),Ye()&&(xt=.22)),e.type==="dog"&&(t&&(t.sad=2.4),be("dog"),it(C.ult.phase==="pour"?"ПЁС ОСКОРБЛЁН!":"ПСА НЕ ТРОГАЙ!",i.x,i.y-60,"bad")),e.type==="tear"&&lo.tear(Ye()),e.type==="offend"&&e.who==="herald"){be("huff"),Ye()&&(xt=Math.max(xt,.14));continue}if(e.type==="offend"&&(t&&(t.flash=1),be("huff"),it(e.text??"ХАМ!",i.x,i.y-60,"bad"),Ye()&&(xt=Math.max(xt,.12))),e.type==="nuisance"&&(Er.set(e.id,"attack"),e.who==="rat"?(be("steal"),it("КРЫСА СПЁРЛА СИЛЫ! −35",i.x,i.y,"bad")):e.who==="gang"?(be("splat"),ly(),it("ПЛЮХ!",innerWidth/2,innerHeight*.4,"bad")):(be("zing"),it("ЩЁЛК! −♥",i.x,i.y,"bad"),Ye()&&(xt=.2))),e.type==="squeak"&&(be("squeak"),e.point&&ii("squeak",e.point,.8),e.id&&it(`ПИ-И-ИСК! КОМБО +${Rt.chicken.combo}`,i.x,i.y-50,"combo")),e.type==="blind"&&(be("splat"),e.point&&(ii("splat",e.point,.9),xd(e.point,["#fff6e0","#ffffff","#ff4f6d"])),it("ПИРОГ В ЛИЦО!",i.x,i.y-40,"combo")),e.type==="stick"&&(be("pop"),it("ЧПОК!",i.x,i.y-40,"pop")),e.type==="strike"&&(be("strike"),e.point&&ii("strike",e.point,1.3),it("СТРАЙК!",innerWidth/2,innerHeight*.35,"combo"),Ye()&&(xt=.2)),e.type==="seeds"&&e.point&&(be("pop"),gy(e.point,e.ids??[])),e.type==="geyser"&&e.point){be("geyser");const s=We(e.point);it("ФОНТАН!",s.x,s.y-80,"pop")}if(e.type==="knock"&&(t&&(t.flash=1,t.knock=1),be("splat"),it("ПЛЮХ!",i.x,i.y-30,"pop")),e.type==="hazard"&&e.point){be("whistle");const s=We(e.point);it("БЕРЕГИСЬ!",s.x,s.y-30,"bad")}if(e.type==="crash"&&e.point){be("crash"),ii("crash",{...e.point,y:.6},1.6);const s=ns.get(e.id);s&&(s.wreck=2.4),Ye()&&(xt=.35)}e.type==="milestone"&&e.text&&Ty(e.text),e.type==="ult"&&Ly(),e.type==="land"&&e.point&&(be("thud"),e.prop==="anvil"&&Ye()&&(xt=Math.max(xt,.22),ii("cover",e.point,.9))),e.type==="gag"&&fy(e),e.type==="shatter"&&e.point&&e.prop&&(xd(e.point,Nt[e.prop].shards??["#ffffff"]),ii("smash",e.point,.8)),e.type==="ultEnd"&&(be("slide"),it(e.amount?`НИ КАПЛИ МИМО! +${e.amount}`:"ПРОЛИЛ… ПЛАТИ ТРИСТА",innerWidth/2,innerHeight*.6,e.amount?"combo":"bad")),e.type==="advance"&&(be("whoosh"),it("БЛИЖЕ!",i.x,i.y-30,"bad")),e.type==="taunt"&&(be("pop"),it(["ЭЙ ТЫ!","НЕ ДОСТАНЕШЬ!","ХА-ХА!"][e.id%3],i.x,i.y-30,"bad"))}C.events.length=0}function Gu(n){const e=Ne.getBoundingClientRect(),t=e.width,i=e.height,s=Cc(1,t,i,vi).glove;return{x:e.left+s.x+(n.spot.x*t-s.x)*Br.reach,y:e.top+s.y+(n.spot.y*i-s.y)*Br.reach-i*.05}}function Vu(n){n.launched=!0,n.resolved=!0;const e=Gu(n),t=Ne.getBoundingClientRect(),i=(e.x-t.left)/(t.width||1)*2-1,s=-((e.y-t.top)/(t.height||1)*2-1);Mi.setFromCamera(new Re(i,s),bt);const r=Mi.ray.at(1.7,new U),a=C.launch({x:r.x,y:r.y,z:r.z},n.shot.point);n.outcome="throw",Ut.push({action:"grab",outcome:"throw",kind:"flight",id:a?.id??null,staminaBefore:n.staminaBefore,staminaAfter:n.staminaAfter}),Ut.length>20&&Ut.shift(),be("toss"),ct()}const Qi=[];function ly(){for(let n=0;n<3;n++)Qi.push({x:.25+Math.random()*.5,y:.2+Math.random()*.4,r:.09+Math.random()*.06,age:0,seed:Math.random()*10});for(;Qi.length>6;)Qi.shift()}function cy(n,e,t,i,s){const r=Math.min(e,t);for(let a=Qi.length-1;a>=0;a--){const o=Qi[a];if(o.age+=i,o.age>3.2){Qi.splice(a,1);continue}const h=o.x*e,l=o.y*t+o.age*r*.03,c=o.r*r;n.save(),n.globalAlpha=Math.min(1,(3.2-o.age)*1.5)*.93,n.translate(h,l),n.beginPath();for(let d=0;d<=16;d++){const u=d/16*Math.PI*2,f=c*(d%2?.62+.2*Math.sin(o.seed+d):1+.15*Math.sin(o.seed*2+d));n.lineTo(Math.cos(u)*f,Math.sin(u)*f)}n.closePath(),n.fillStyle="#f4f2e6",n.fill(),n.lineWidth=Math.max(2,s*.4),n.strokeStyle="#151715",n.stroke(),n.beginPath(),n.ellipse(c*.1,c*.05,c*.32,c*.26,0,0,Math.PI*2),n.fillStyle="#9a9a8a",n.fill(),n.beginPath(),n.ellipse(-c*.3,-c*.3,c*.14,c*.08,-.6,0,Math.PI*2),n.fillStyle="#ffffff",n.fill(),n.restore()}}const es=[],wr=new lu(()=>({x:0,y:0,vx:0,vy:0,rot:0,vr:0,size:0,color:"",life:0}),180);function ii(n,e,t=1){const i=We(e),s=We({...e,x:e.x+1}),r=Math.abs(s.x-i.x);es.push({key:n,x:i.x,y:i.y,size:en.clamp(r*1.6,70,260)*t,age:0})}function xd(n,e){const t=We(n),i=We({...n,x:n.x+1}),s=en.clamp(Math.abs(i.x-t.x),30,200);for(let r=0;r<14;r++){const a=-Math.PI/2+(Math.random()-.5)*2.6,o=s*(2+Math.random()*3),h=wr.get();h.x=t.x,h.y=t.y,h.vx=Math.cos(a)*o,h.vy=Math.sin(a)*o,h.rot=Math.random()*6,h.vr=(Math.random()-.5)*18,h.size=s*(.07+Math.random()*.09),h.color=e[r%e.length],h.life=.7+Math.random()*.4}}const La=new Map;function hy(){for(const[n,e]of La)C.flights.some(t=>t.id===n)||(os.remove(e.mesh,e.shadow),e.mesh.geometry.dispose(),e.mesh.material.dispose(),La.delete(n));for(const n of C.flights){let e=La.get(n.id);const t=Gt[n.kind];if(!e){const s=new Te(new Wt(t.w,t.h),new wt({map:qn[n.kind],alphaTest:.5,side:Bt}));s.castShadow=!0;const r=new Te(new rs(t.w*.3,18),Ou);r.rotation.x=-Math.PI/2,r.renderOrder=1,os.add(s,r),e={mesh:s,shadow:r},La.set(n.id,e)}e.mesh.position.set(n.pos.x,n.pos.y+t.h*.35,n.pos.z),e.mesh.rotation.z=Ye()?n.angle:0,n.dropped&&!e.whistled&&(e.whistled=!0,be("whistle")),e.shadow.position.set(n.pos.x,.035,n.pos.z);const i=Math.max(.35,1-n.pos.y/6);e.shadow.scale.set(i,i*.45,1)}}function dy(n){if(!(C.mode!=="play"||Ri>0)){for(const{flight:e,impact:t}of C.fly(n,ho())){if(t.type==="rest")continue;const i=t.id;if(t.kind==="enemy")be("throw"),ii("throw",t.point),Ye()&&(xt=.16,Ri=.06);else if(t.kind==="dog")ii("protected",t.point);else{if(be("cover"),ii("cover",t.point,.7),typeof i=="string"){const s=Js.get(i);s&&(s.userData.wobble=1)}Ye()&&(xt=.06)}if(typeof i=="number"){const s=Qt.get(i);s&&(s.flash=1)}Nt[e.kind].breakable&&be("shatter")}Si()}}const vd=["КУ-КУ, МАЗИЛА!","КУ-КУ! РУКИ-КРЮКИ!","КУ-КУ! ИДИ ДОМОЙ!","КУ-КУ! НУ ТЫ И ЛОПУХ!"];let uy=0,Sr=0;const Tr=[];function fy(n){const e=n.gagId?Ji.get(n.gagId):void 0,t=n.point??(e?e.getWorldPosition(new U):null),i=t?We(t):{x:innerWidth/2,y:innerHeight/3};if(Ne.dataset.gag=`${n.gag}:${C.riffs}`,n.gag==="piano"){Nv(mv(n.amount??0)),it("♪ ТРЫНЬ-ТЫН-ТЫН ♪",i.x,i.y-40,"combo");const s=Js.get("piano");s&&(s.userData.wobble=1),tc=3.5}else if(n.gag==="cuckoo")be("cuckoo"),it(vd[uy++%vd.length],i.x,i.y-30,"bad"),e&&(e.userData.pop=1);else if(n.gag==="lamp")be("buzz"),e&&(e.userData.swingV=(e.userData.swingV??0)+(Math.random()<.5?-1:1)*2.2),Sr=1.2;else if(n.gag==="bell")be("bell"),it("ДЗИИИНЬ!",i.x,i.y,"pop"),e&&(e.userData.ring=1);else if(n.gag==="laundry"){be("flop");const s=co.find(r=>r.visible);s&&(s.visible=!1,n.id&&Tr.push({from:s.getWorldPosition(new U),id:n.id,color:s.userData.cloth,age:0})),n.id&&it("ТРУСЫ НА ГОЛОВУ!",i.x,i.y+30,"combo")}}let tc=0;function py(n,e){for(const[t,i]of Ji)if(t.startsWith("gag-lamp")){const s=(i.userData.swingV??0)-i.rotation.z*9*n;i.userData.swingV=s*(1-n*.45),i.rotation.z+=i.userData.swingV*n,i.traverse(r=>{r instanceof Sc&&(r.intensity=r.userData.base*(Sr>0&&Math.sin(e*61)>-.2+(1-Sr)?.15:1))})}else if(i.userData.ring)i.userData.ring=Math.max(0,i.userData.ring-n*.9),i.rotation.z=Math.sin(e*26)*.5*i.userData.ring;else if(i.userData.pop){i.userData.pop=Math.max(0,i.userData.pop-n*1.6);const s=Math.sin(i.userData.pop*Math.PI*3)*i.userData.pop;i.scale.set(1+s*.18,1+s*.18,1)}if(Sr=Math.max(0,Sr-n),tc>0&&(tc-=n,Math.random()<n*5)){const t=vt[1].covers.find(s=>s.id==="piano"),i=We({x:t.min.x+Math.random()*(t.max.x-t.min.x),y:t.max.y+.3,z:t.max.z});it(["♪","♫","♬"][Math.floor(Math.random()*3)],i.x,i.y,"pop")}}function my(n,e,t){for(let i=Tr.length-1;i>=0;i--){const s=Tr[i];s.age+=e;const r=Qt.get(s.id),a=r?tr(r):null;if(s.age>2.6||!a&&s.age>.5){Tr.splice(i,1);continue}const o=Math.min(1,s.age/.5),h=a??s.from,l={x:s.from.x+(h.x-s.from.x)*o,y:s.from.y+(h.y-.35-s.from.y)*o*o,z:s.from.z+(h.z-s.from.z)*o},c=We(l),d=We({...l,x:l.x+1}),u=en.clamp(Math.abs(d.x-c.x),20,160)*.5;n.save(),n.translate(c.x,c.y),n.rotate(o<1?Math.sin(s.age*20)*.4:Math.sin(s.age*6)*.08),n.globalAlpha=Math.min(1,(2.6-s.age)*2),n.beginPath(),n.moveTo(-u*.6,-u*.3),n.lineTo(u*.6,-u*.3),n.lineTo(u*.55,u*.25),n.lineTo(u*.15,u*.3),n.lineTo(0,u*.05),n.lineTo(-u*.15,u*.3),n.lineTo(-u*.55,u*.25),n.closePath(),n.fillStyle=s.color,n.fill(),n.lineWidth=Math.max(2,t*.4),n.strokeStyle="#151715",n.lineJoin="round",n.stroke(),n.fillStyle="#ffffff";for(const[f,g]of[[-.3,-.05],[.25,.02],[0,-.18]])n.beginPath(),n.arc(f*u,g*u,u*.06,0,Math.PI*2),n.fill();n.restore()}}const wi=new lu(()=>({kind:"drop",x:0,y:0,vx:0,vy:0,life:0,max:1,size:1,tx:0,ty:0,phase:0}),260),Uc=n=>{const e=We(n),t=We({...n,x:n.x+1});return{p:e,u:en.clamp(Math.abs(t.x-e.x),20,260)}};function gy(n,e){const{p:t,u:i}=Uc(n);for(let s=0;s<10;s++){const r=wi.get(),a=Math.random()*Math.PI*2;r.kind="seed",r.x=t.x,r.y=t.y,r.tx=t.x+Math.cos(a)*i*1.4,r.ty=t.y+Math.sin(a)*i,r.life=r.max=.45,r.size=i*.05,r.phase=a}for(const s of e){const r=Qt.get(s);if(!r)continue;const a=We(tr(r));for(let o=0;o<4;o++){const h=wi.get();h.kind="seed",h.x=t.x,h.y=t.y,h.tx=a.x+(Math.random()-.5)*30,h.ty=a.y+30+Math.random()*30,h.life=h.max=.35+o*.05,h.size=i*.05,h.phase=o}setTimeout(()=>it("ТЬФУ!",a.x,a.y,"pop"),300)}}const ts=[],_y=[[0,-1.2],[-.5,-.4],[.5,-.4],[0,0],[-.6,1],[.6,1],[-1,-.9],[1,-.9]],xy=[[0,1],[0,2],[1,3],[2,3],[3,4],[3,5],[1,6],[2,7]];function vy(n){const e=innerWidth,t=innerHeight,i=en.clamp(n,e*.15,e*.85),s=Math.min(e,t)*.07;ts.push({x:i,pts:_y.map(([r,a])=>({x:i+r*s+(Math.random()-.5)*s*.2,y:t*.26+a*s})),age:0}),ts.length>3&&ts.shift(),be("harp")}function yy(n,e){be("pop");for(let t=0;t<5;t++){const i=wi.get();i.kind="bird",i.x=n+(Math.random()-.5)*40,i.y=e+(Math.random()-.5)*30,i.vx=(t-2)*50+(Math.random()-.5)*40,i.vy=-140-Math.random()*80,i.life=i.max=2,i.size=14+Math.random()*8,i.phase=Math.random()*6}it("ФЬЮТЬ!",n,e-40,"pop")}function My(n,e,t,i){n.lineCap="round",n.lineJoin="round";for(let s=wi.live.length-1;s>=0;s--){const r=wi.live[s];if(r.life-=e,r.life<=0){wi.release(s);continue}const a=1-r.life/r.max;if(r.kind==="seed"){const o=r.x+(r.tx-r.x)*a,h=r.y+(r.ty-r.y)*a-Math.sin(a*Math.PI)*30;n.save(),n.translate(o,h),n.rotate(r.phase+a*9),n.beginPath(),n.ellipse(0,0,r.size,r.size*.6,0,0,Math.PI*2),n.fillStyle="#1b1b1b",n.fill(),n.restore()}else if(r.kind==="drop")r.vy+=900*e,r.x+=r.vx*e,r.y+=r.vy*e,n.beginPath(),n.arc(r.x,r.y,r.size,0,Math.PI*2),n.fillStyle="#8fd8ff",n.fill(),n.lineWidth=1.5,n.strokeStyle="#151715",n.stroke();else{r.x+=r.vx*e,r.y+=r.vy*e,r.vy*=1-e*.3;const o=Math.sin(i*18+r.phase)*.6;n.save(),n.globalAlpha=Math.min(1,r.life*1.5),n.translate(r.x,r.y),n.beginPath(),n.moveTo(-r.size,-r.size*o*.8),n.quadraticCurveTo(-r.size*.4,-r.size*.2,0,0),n.quadraticCurveTo(r.size*.4,-r.size*.2,r.size,-r.size*o*.8),n.lineWidth=Math.max(2.5,t*.45),n.strokeStyle="#151715",n.stroke(),n.restore()}}for(let s=ts.length-1;s>=0;s--){const r=ts[s];if(r.age+=e,r.age>3.4){ts.splice(s,1);continue}const a=Math.min(1,r.age*3,(3.4-r.age)*1.5);n.save(),n.globalAlpha=a,n.setLineDash([6,7]),n.strokeStyle="#fff6c8",n.lineWidth=2;for(const[o,h]of xy)n.beginPath(),n.moveTo(r.pts[o].x,r.pts[o].y),n.lineTo(r.pts[h].x,r.pts[h].y),n.stroke();n.setLineDash([]),r.pts.forEach((o,h)=>{const l=8+3*Math.sin(i*6+h);n.beginPath();for(let c=0;c<=10;c++){const d=-Math.PI/2+c*Math.PI/5,u=c%2?l*.45:l;n.lineTo(o.x+Math.cos(d)*u,o.y+Math.sin(d)*u)}n.closePath(),n.fillStyle="#ffe14d",n.fill(),n.lineWidth=2,n.strokeStyle="#151715",n.stroke()}),n.font="900 15px Georgia",n.textAlign="center",n.lineWidth=4,n.strokeStyle="#151715",n.strokeText("СОЗВЕЗДИЕ «ЗАДИРА»",r.x,r.pts[5].y+34),n.fillStyle="#fff6c8",n.fillText("СОЗВЕЗДИЕ «ЗАДИРА»",r.x,r.pts[5].y+34),n.restore()}}function Sy(n,e,t){for(const i of C.geysers){const s=Math.min(1,i.age/.35),r=Math.min(1,(Rt.geyser.life-i.age)/.6),a=2.8*s*r,o=We({x:i.x,y:0,z:i.z}),h=We({x:i.x,y:a,z:i.z}),{u:l}=Uc({x:i.x,y:0,z:i.z}),c=l*.32;n.save(),n.beginPath();for(let d=0;d<=10;d++){const u=d/10,f=o.y+(h.y-o.y)*u;n.lineTo(o.x-c*(1-u*.35)+Math.sin(e*20+u*9)*c*.15,f)}for(let d=10;d>=0;d--){const u=d/10,f=o.y+(h.y-o.y)*u;n.lineTo(o.x+c*(1-u*.35)+Math.sin(e*23+u*7)*c*.15,f)}if(n.closePath(),n.fillStyle="#7fd0ff",n.globalAlpha=.9,n.fill(),n.globalAlpha=1,n.lineWidth=Math.max(2,t*.45),n.strokeStyle="#151715",n.stroke(),n.beginPath(),n.moveTo(o.x-c*.3,o.y),n.lineTo(h.x-c*.2,h.y),n.strokeStyle="#ffffff",n.lineWidth=c*.18,n.stroke(),n.beginPath(),n.ellipse(h.x,h.y,c*1.2,c*.45,0,0,Math.PI*2),n.fillStyle="#bfeaff",n.fill(),n.lineWidth=Math.max(2,t*.4),n.strokeStyle="#151715",n.stroke(),n.restore(),Ye()&&r>.3&&Math.random()<.7){const d=wi.get();d.kind="drop",d.x=h.x,d.y=h.y,d.vx=(Math.random()-.5)*c*9,d.vy=-Math.random()*260,d.life=d.max=.8,d.size=Math.max(2,c*.09)}}}function by(n,e,t){for(const i of C.actors){if(i.kind!=="enemy"||!(i.blind||i.plunger||i.antic))continue;const s=Qt.get(i.id);if(!s)continue;const r=tr(s),a={x:r.x+s.body.position.x,y:r.y-.5+s.body.position.y,z:r.z+.05},{p:o,u:h}=Uc(a),l=h*.26;if(n.save(),n.lineJoin="round",n.lineWidth=Math.max(2,t*.45),n.strokeStyle="#151715",i.blind){n.beginPath();for(let c=0;c<=14;c++){const d=c/14*Math.PI*2,u=l*(c%2?.82:1.05);n.lineTo(o.x+Math.cos(d)*u*1.2,o.y+Math.sin(d)*u)}n.closePath(),n.fillStyle="#fffaf0",n.fill(),n.stroke();for(const c of[-.5,.1,.6])n.beginPath(),n.ellipse(o.x+c*l,o.y+l*(1+(c+.5)*.3)+Math.sin(e*2+c)*2,l*.14,l*.3,0,0,Math.PI*2),n.fillStyle="#fffaf0",n.fill(),n.stroke();n.beginPath(),n.arc(o.x+l*.2,o.y-l*1.05,l*.2,0,Math.PI*2),n.fillStyle="#e8243c",n.fill(),n.stroke()}if(i.plunger){const c=qn.plunger.image,d=l*3,u=d*.8;n.translate(o.x,o.y+l*.2),n.rotate(-.5+Math.sin(e*6)*.1),n.drawImage(c,-u/2,-d*.25,u,d),n.setTransform(n.getTransform())}if(n.restore(),n.save(),n.lineJoin="round",n.lineWidth=Math.max(2,t*.4),n.strokeStyle="#151715",i.antic==="sandwich"){const c=o.x+s.facing*l*1.1,d=o.y+l*.5+Math.sin(e*11)*l*.12;[["#e8b46a",.3],["#5fbf4a",.12],["#e8475f",.12],["#f7d36b",.12],["#e8b46a",.3]].forEach(([u,f],g)=>{n.beginPath(),n.roundRect(c-l*.9,d-l*.5+g*l*.22,l*1.8,l*f,l*.1),n.fillStyle=u,n.fill(),n.stroke()})}else if(i.antic==="selfie"){const c=o.x+s.facing*l*2.2,d=o.y-l*1.4;if(n.beginPath(),n.moveTo(o.x+s.facing*l*.6,o.y+l),n.lineTo(c,d+l*.5),n.lineWidth=Math.max(2,t*.5),n.stroke(),n.lineWidth=Math.max(2,t*.4),n.beginPath(),n.roundRect(c-l*.7,d-l*.5,l*1.4,l,l*.12),n.fillStyle="#2b2b2b",n.fill(),n.stroke(),n.beginPath(),n.arc(c-s.facing*l*.1,d,l*.32,0,Math.PI*2),n.fillStyle="#9fd3ff",n.fill(),n.stroke(),e%1.3<.12){n.beginPath();for(let f=0;f<=16;f++){const g=f/16*Math.PI*2,_=f%2?l*.6:l*1.7;n.lineTo(c+Math.cos(g)*_,d-l*.7+Math.sin(g)*_)}n.closePath(),n.fillStyle="#fffbd0",n.fill(),n.stroke()}}else if(i.antic==="dance"){n.font=`900 ${Math.round(l*1.3)}px Georgia`,n.textAlign="center";for(let c=0;c<3;c++){const d=e*2+c*2.1,u=o.x+Math.cos(d)*l*2.4,f=o.y-l*1.6+Math.sin(d*1.3)*l*.6;n.lineWidth=4,n.strokeText("♪♫♬"[c],u,f),n.fillStyle=["#ff6fa8","#5ef0c8","#ffd84a"][c],n.fillText("♪♫♬"[c],u,f)}}n.restore()}}function yd(n){const e=document.createElement("canvas");e.width=e.height=256;const t=e.getContext("2d");if(t.lineJoin="round",t.lineWidth=9,t.strokeStyle="#151715",n==="piano"){t.fillStyle="#3a2418",t.beginPath(),t.roundRect(24,40,208,170,14),t.fill(),t.stroke(),t.fillStyle="#f4efe0",t.fillRect(34,130,188,44),t.strokeRect(34,130,188,44),t.fillStyle="#151715";for(let s=0;s<9;s++)t.fillRect(48+s*20,130,9,26);t.fillStyle="#5a3a26",t.fillRect(40,210,22,36),t.strokeRect(40,210,22,36),t.fillRect(194,210,22,36),t.strokeRect(194,210,22,36),t.fillStyle="#ffd84a",t.font="900 34px Georgia",t.fillText("♪",110,105)}else t.fillStyle="#4f7a64",t.beginPath(),t.roundRect(38,30,180,200,12),t.fill(),t.stroke(),t.strokeRect(56,48,144,164),t.fillStyle="#d9c46a",t.beginPath(),t.arc(128,130,34,0,Math.PI*2),t.fill(),t.stroke(),t.beginPath(),t.moveTo(128,130),t.lineTo(150,108),t.stroke(),t.fillStyle="#151715",t.font="900 26px Arial",t.textAlign="center",t.fillText("100 т",128,205);const i=new Ci(e);return i.colorSpace=mt,i}const Ey={piano:yd("piano"),safe:yd("safe")},ns=new Map;function nc(n){const e=ns.get(n);e&&(os.remove(e.group),e.obj.geometry.dispose(),e.shadow.geometry.dispose(),e.obj.material.dispose(),e.shadow.material.dispose(),ns.delete(n))}function wy(n){for(const e of C.hazards){let t=ns.get(e.id);if(!t){const s=e.kind==="piano"?2.1:1.4,r=new Ht;r.position.set(e.x,0,e.z+.15);const a=new Te(new Wt(s,s).translate(0,s/2,0),new wt({map:Ey[e.kind],alphaTest:.5,side:Bt})),o=new Te(new rs(s*.55,28),new wt({color:"#1c1c1c",polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-4}));o.rotation.x=-Math.PI/2,o.position.y=.06,r.add(o,a),os.add(r),t={group:r,obj:a,shadow:o},ns.set(e.id,t)}const i=Math.min(1,e.age/yr.warn);t.obj.position.y=8.5*(1-i*i),t.obj.rotation.z=Math.sin(e.age*3)*.15*(1-i),t.shadow.scale.setScalar(.25+1.15*i)}for(const[e,t]of ns)if(!C.hazards.some(i=>i.id===e)){if(t.wreck===void 0){nc(e);continue}t.wreck-=n,t.obj.position.y=0,t.obj.rotation.z=.08,t.obj.scale.set(1.2,.62,1),t.shadow.scale.setScalar(1.3),t.wreck<=0&&nc(e)}}function Ty(n){document.querySelector(".iris")?.remove(),be("iris");const e=document.createElement("div");e.className="iris",e.setAttribute("role","status"),e.innerHTML=`<div>${n}</div>`,Cn.append(e),Ne.dataset.milestone=n,setTimeout(()=>e.remove(),1500)}function ic(n){if(n.resolved=!0,n.brief){const s={x:n.spot.x*innerWidth,y:n.spot.y*innerHeight},r=C.briefPunch(lo.hit(s.x,s.y));r==="tear"?(be("flop"),Ye()&&(xt=.06,Ri=.04)):r!=="protected"&&be("miss"),n.outcome=r==="tear"?"hit":r==="protected"?"protected":"miss",Si(s),ct();return}n.shot=Ac(n.ray.origin,n.ray.direction,ho(),n.throwing?"punch":n.action);const e=typeof n.shot.id=="number"?n.shot.id:void 0,t=C.resolve(n.action,{kind:n.shot.kind,id:n.shot.id,point:n.shot.point});if(n.outcome=t,Ut.push({action:n.action,outcome:t,kind:n.shot.kind,id:n.shot.id??null,staminaBefore:n.staminaBefore,staminaAfter:n.staminaAfter}),Ut.length>20&&Ut.shift(),t==="hit"||t==="throw"?be(t):t==="smash"||t==="grab"?be("grab"):t==="ult"?be("ding"):t==="cover"?be("cover"):t!=="protected"&&be("miss"),e!==void 0){const s=Qt.get(e);s&&(s.flash=1)}if(t==="cover"&&typeof n.shot.id=="string"){const s=Js.get(n.shot.id);s&&(s.userData.wobble=1)}const i=t==="hit"||t==="throw"||t==="protected";Ye()&&(xt=i?.16:t==="cover"||t==="smash"?.08:.02,Ri=i?.06:t==="cover"?.035:0),Si(We(n.shot.point)),zs(xn),ct()}const Zi=new Set;let to=-1,Ia=0;const On=.07,sc=11,Nc=()=>C.mode==="play"&&vt[C.level].pan>0,Fn=new Av(.35);let et=null;const di=new Cv,no=n=>({x:n.clientX,y:n.clientY,time:performance.now()/1e3});function Ay(n){if(C.mode!=="play"||!C.held)return;const e=Ne.getBoundingClientRect(),t=C.held,i=C.actors.filter(d=>d.kind==="enemy"||d.kind==="thug").map(d=>({entity:d,screenPos:We(un(C.level,d,Ye())),isOccluded:kc(d)===null})),s=Math.max(150,e.width*.22),r=Pv(n,{x:0,y:0},i,s);let a;if(r){const d=un(C.level,r,Ye());a={x:d.x,y:d.y,z:d.z}}else{const d=(n.x-e.left)/(e.width||1)*2-1,u=-((n.y-e.top)/(e.height||1)*2-1);Mi.setFromCamera(new Re(d,u),bt);const f=Mi.ray.at(10,new U);a={x:f.x,y:f.y,z:f.z}}const o=C.stamina;if(!C.spend("grab")){Sn(),be("ui");return}Mi.setFromCamera(new Re(.45,-.65),bt);const h=Mi.ray.at(1.7,new U),l=C.launch({x:h.x,y:h.y,z:h.z},a);Ut.push({action:"grab",outcome:"throw",kind:"flight",id:l?.id??null,staminaBefore:o,staminaAfter:C.stamina}),Ut.length>20&&Ut.shift(),be("toss");const c=new U(a.x,a.y,a.z).project(bt);pt={action:"grab",throwing:!0,launched:!0,resolved:!0,spot:{x:(c.x+1)/2,y:(1-c.y)/2},ray:Qa(new Re(c.x,c.y)),shot:{kind:"whiff",distance:6,point:a},phase:0,held:t,staminaBefore:o,staminaAfter:C.stamina},Sn(),ct()}function Wu(n,e,t,i){if(C.mode!=="play")return;const s=Ne.getBoundingClientRect(),r=Tv({x:n,y:e},{x:t,y:i},16);for(const a of r){if(C.briefing){const u=lo.hit(a.x,a.y);if(u==="flyer"){C.briefPunch("flyer")==="tear"&&(be("flop"),Ye()&&(xt=.06,Ri=.04)),ct();break}else if(u==="herald"&&Fn.canHit("herald",C.elapsed)){Fn.recordHit("herald",C.elapsed),C.briefPunch("herald"),ct();break}continue}const o=(a.x-s.left)/(s.width||1)*2-1,h=-((a.y-s.top)/(s.height||1)*2-1),l=new Re(en.clamp(o,-1,1),en.clamp(h,-1,1)),c=Xr(l),d=typeof c.id=="number"?c.id:void 0;if(c.kind==="enemy"||c.kind==="thug"){if(d!==void 0&&Fn.canHit(d,C.elapsed)&&C.spend("punch")){Fn.recordHit(d,C.elapsed);const u=C.resolve("punch",{kind:c.kind,id:c.id,point:c.point});if(Ut.push({action:"punch",outcome:u,kind:c.kind,id:c.id??null,staminaBefore:C.stamina+24,staminaAfter:C.stamina}),Ut.length>20&&Ut.shift(),u==="hit"&&be("hit"),d!==void 0){const f=Qt.get(d);f&&(f.flash=1)}Ye()&&(xt=.16,Ri=.06),es.push({key:"hit",x:a.x,y:a.y,size:Ki(s.width,s.height).r*2.6,age:0}),Si(We(c.point)),zs(xn),Sn(),ct()}}else if(c.kind==="prop"&&C.held===null){if(d!==void 0&&Fn.canHit(d,C.elapsed)&&C.spend("grab")){Fn.recordHit(d,C.elapsed);const u=C.resolve("grab",{kind:c.kind,id:c.id,point:c.point});di.reset(),Ut.push({action:"grab",outcome:u,kind:c.kind,id:c.id??null,staminaBefore:C.stamina+ao,staminaAfter:C.stamina}),Ut.length>20&&Ut.shift(),be("grab"),es.push({key:"grab",x:a.x,y:a.y,size:Ki(s.width,s.height).r*2.2,age:0}),Si(We(c.point)),zs(xn),Sn(),ct()}}else if(c.kind==="dog"||c.kind==="friend")d!==void 0&&Fn.canHit(d,C.elapsed)&&(Fn.recordHit(d,C.elapsed),C.resolve("punch",{kind:c.kind,id:c.id,point:c.point}),Ye()&&(xt=.14),Si(We(c.point)),zs(xn),Sn(),ct());else if(c.kind==="cover"&&typeof c.id=="string"&&Fn.canHit(c.id,C.elapsed)){if(Fn.recordHit(c.id,C.elapsed),C.gag(c.id,c.point)){const u=Js.get(c.id);u&&(u.userData.wobble=1)}Si(We(c.point))}}}function Ry(){let n=(Zi.has("ArrowRight")||Zi.has("KeyD")?1:0)-(Zi.has("ArrowLeft")||Zi.has("KeyA")?1:0);if(!n&&to>=0){const e=Ne.getBoundingClientRect(),t=(to-e.left)/Math.max(1,e.width);t<On?n=-(1-t/On):t>1-On&&(n=(t-(1-On))/On)}return n}function Cy(n){if(!Nc()){Ps=0,Ia=0;return}const e=Ry();Ia=e?Math.min(1,Ia+n*1.6):0;const t=e*sc*(.35+.65*Ia),i=1-Math.exp(-n*(e?6:10));Ps+=(t-Ps)*i,Math.abs(Ps)>.01&&(pn=jl(C.level,pn+Ps*n))}function Ar(n){const e=Ne.getBoundingClientRect(),t=(n.clientX-e.left)/(e.width||1)*2-1,i=-((n.clientY-e.top)/(e.height||1)*2-1);vn.set(en.clamp(t,-1,1),en.clamp(i,-1,1)),Hu()}Ne.addEventListener("pointermove",n=>{if(n.pointerType==="mouse"&&(to=n.clientX),et&&n.pointerId===et.id){if(et.prevX=et.currentX,et.prevY=et.currentY,et.currentX=n.clientX,et.currentY=n.clientY,di.move(no(n)),C.ultActive){Ar(n);return}if(Wu(et.prevX,et.prevY,et.currentX,et.currentY),Ar(n),Nc()){const e=Ne.getBoundingClientRect(),t=(n.clientX-e.left)/Math.max(1,e.width);t<On?pn=jl(C.level,pn-(1-t/On)*sc*.02):t>1-On&&(pn=jl(C.level,pn+(t-(1-On))/On*sc*.02))}return}(n.pointerType!=="touch"||C.ultActive)&&Ar(n)});Ne.addEventListener("pointerleave",()=>{to=-1});Ne.addEventListener("pointerdown",n=>{if(C.mode==="play"){if(n.pointerType==="touch"){if(n.preventDefault(),et){di.reset();return}if(C.touch=!0,document.documentElement.dataset.touch="true",et={id:n.pointerId,currentX:n.clientX,currentY:n.clientY,prevX:n.clientX,prevY:n.clientY,moved:!1},di.begin(no(n),C.held!==null&&!C.ultActive&&!C.briefing),Ne.dataset.touching="true",Ar(n),C.ultActive)return;Wu(n.clientX,n.clientY,n.clientX,n.clientY),Sn();return}Ar(n),!C.ultActive&&eo(n.button===2?"grab":"punch")}});const Py=n=>{et&&n.pointerId===et.id&&(n.preventDefault(),di.end(no(n),C.mode==="play"&&C.held!==null&&!C.ultActive&&!C.briefing)&&Ay(no(n)),et=null,Ne.dataset.touching="false",Sn())};Ne.addEventListener("pointerup",Py);Ne.addEventListener("pointercancel",n=>{et&&n.pointerId===et.id&&(et=null,di.reset(),Ne.dataset.touching="false",Sn())});addEventListener("keyup",n=>Zi.delete(n.code));addEventListener("blur",()=>{Zi.clear(),di.reset(),et=null,Ne.dataset.touching="false"});Ne.addEventListener("contextmenu",n=>n.preventDefault());addEventListener("keydown",n=>{C.mode==="play"&&(n.code==="F8"||n.code==="KeyW")&&(n.preventDefault(),C.winNow(),ct()),["ArrowLeft","ArrowRight","KeyA","KeyD"].includes(n.code)&&(Zi.add(n.code),Nc()&&n.preventDefault()),n.code==="Escape"&&!document.hidden&&(C.briefing&&C.mode==="play"?Ru():(C.pause(),ct())),(n.code==="Space"||n.code==="KeyE")&&!(n.target instanceof HTMLButtonElement)&&(n.preventDefault(),n.repeat||eo(n.code==="Space"?"punch":"grab"))});function Xu(){const n=Cu();for(const e of Ic)ci[e].visible=n===e}function Fc(){di.reset(),et=null,Ne.dataset.touching="false",C.suspend(),ct()}document.addEventListener("visibilitychange",()=>{document.hidden&&Fc()});document.addEventListener("freeze",Fc);addEventListener("pagehide",Fc);function Yt(n,e){document.getElementById(n)?.addEventListener("click",()=>{Vr(),be("ui"),e()})}function Ua(n){if(C.reduced=!Ye(),C.start(n)){for(const e of co)e.visible=!0;Tr.length=0,pn=0,Ps=0,Ja="",Cr.length=0,es.length=0,wr.clear(),Qi.length=0,wi.clear(),ts.length=0;for(const e of[...ns.keys()])nc(e);document.querySelector(".iris")?.remove()}ct()}function Md(){return'<div class="topline"><div class="brand"><span>↗</span> ДВОР ДА ДЕЛО</div><div class="tag">РУКИ ДЛИННЕЕ. ДЕНЬ ЛУЧШЕ.</div></div>'}function ct(){C.mode!=="play"&&(di.reset(),et=null,Ne.dataset.touching="false");const n=C.mode;if(n!==Ja&&(Ja=n,Wr()),kv(Cu()),Xu(),Or.dataset.mode=n,Or.dataset.level=String(C.level),n==="menu")Cn.innerHTML=Md()+'<section class="panel"><div class="eyebrow">Потасовка на резиновых руках</div><h1>ДЛИННЫЕ<br><em>РУКИ.</em></h1><p>Сначала бар, потом улица. Задиры прячутся за пианино, стойкой, бочками и заборами, высовываются и замахиваются. Тянись, бей, бросай всё, что под рукой. Пса с нимбом не трогай.</p><div class="buttons"><button id="start" class="primary">В БАР →</button><button id="how" class="secondary">КАК ИГРАТЬ?</button></div><div class="fine">Без беготни. Только ловкость рук.</div></section><div class="stamp">100%<b>РАЗМАХ</b>0% СЕРЬЁЗНОСТИ</div><div class="footer"><span>БАР «ДЛИННЫЕ РУКИ» · УЛИЦА</span><span>РЕКОРД: '+C.progress.best+" / РЕЗИНОВЫЕ РУКИ 1930-х</span></div>",Yt("start",()=>{C.mode="select",ct()}),Yt("how",()=>{const e=C.touch?"Веди пальцем — рука следует за ним. Через врага — удар, через предмет — захват другой рукой. С предметом: двойной тап рядом с врагом — бросок с лёгким локальным доведением. Один тап или свайп вверх предмет не бросает. У края улицы веди пальцем для движения камеры.":"ЛКМ / пробел — удар. ПКМ / E — хватай предмет, затем бросай: он летит сам, по дуге. Улица широкая: стрелки, A/D, мышь у края экрана или свайп — камера едет.";Cn.innerHTML+='<div class="shade"></div><section class="panel centerpanel"><span class="note">ПАМЯТКА ДЛИННОРУКОГО</span><h2>Целься. Тянись.<br>Не трогай пса.</h2><p>Кулак летит ровно туда, куда ты целишься. Задиры прячутся за укрытиями — бей, когда высунутся. У каждого своя полоска здоровья. Промах тоже тратит силы.</p><p>'+e+' Пёс с нимбом — неприкосновенный.</p><button id="close" class="primary">ПОНЯТНО →</button></section>',Yt("close",ct)});else if(n==="select")Cn.innerHTML=Md()+'<div class="shade"></div><section class="panel centerpanel"><div class="eyebrow">Выбери свой размах</div><h2>КУДА<br>СЕГОДНЯ?</h2><div class="levels"><button id="level1" class="primary level"><span>01 / БАР «ДЛИННЫЕ РУКИ»<br><small>'+vt[1].goal+' посетителей · ведите себя прилично</small></span><b>↗</b></button><button id="level2" class="secondary level"><span>02 / УЛИЦА: ДВОР И ПЕРЕУЛОК<br><small>'+vt[2].goal+' задир · широкая панорама, крути камеру</small></span><b>↗</b></button></div><div class="buttons"><button id="back" class="secondary">← НАЗАД</button></div></section>',Yt("level1",()=>Ua(1)),Yt("level2",()=>Ua(2)),Yt("back",()=>{C.mode="menu",ct()});else{const e=C.touch?"":'<div class="controls"><button id="punch" class="primary">УДАР ↗<small>ЛКМ / ПРОБЕЛ · 24 СИЛЫ</small></button><button id="grab" class="secondary">ХВАТАЙ ◎<small>ПКМ / E · 12 СИЛ</small></button></div>';if(Cn.innerHTML='<div class="hud"><div class="hudbox"><div id="hearts" class="hearts"></div><div class="energy"><i id="energy"></i></div><div class="small" style="margin-top:6px">СИЛЫ <span id="stamina"></span></div></div><div class="hudbox"><div class="small">ТВОЙ СЧЁТ</div><div id="score" class="score"></div><div id="combo" class="small"></div></div><button id="pause" class="pause" aria-label="Пауза">Ⅱ</button></div><div id="ultmeter" class="ultmeter" hidden><b>УЛЬТА</b><span><i id="ultfill"></i></span></div><div id="progress" class="progress"></div><div class="crosshair"></div><div id="message" class="message" role="status"></div>'+(vt[C.level].pan>0?'<div id="panL" class="panhint left" aria-hidden="true"><b>◀</b><span></span></div><div id="panR" class="panhint right" aria-hidden="true"><b>▶</b><span></span></div>':"")+e,Yt("punch",()=>eo("punch")),Yt("grab",()=>eo("grab")),Yt("pause",()=>{C.pause(),ct()}),n==="pause"||n==="result"){const t=n==="result",i=t&&C.won,s=t?sv(C):[{id:"resume",label:"ПРОДОЛЖИТЬ →",primary:!0},{id:"autowin",label:"АВТО-ПОБЕДА ⚡",primary:!1},{id:"select",label:"ВЫБОР УРОВНЯ",primary:!1}],r=i?C.level<kr?"Открыта улица: двор и переулок на одной широкой панораме.":"Улица чиста. Бар открыт до утра.":"Ещё попытка — все сердца снова с тобой.";Cn.innerHTML+='<div class="shade"></div><section class="panel centerpanel"><span class="note">'+(t?i?"ПОРЯДОК НАВЕДЁН":"БЫВАЕТ И ТАК":"РУКИ НА ПЕРЕРЫВЕ")+"</span><h2>"+(t?i?"КРАСИВО<br>РАЗОБРАЛСЯ!":"НЕ ТОТ<br>РАЗМАХ.":"ВЫДОХНИ.<br>ЗАДИРЫ ПОДОЖДУТ.")+"</h2><p>"+(t?"Счёт: <b>"+C.score+"</b> · Рекорд: "+C.progress.best+"<br>"+r:"Время остановилось. Ни один задира не ударит исподтишка.")+'</p><div class="buttons">'+s.map(a=>`<button id="${a.id}" class="${a.primary?"primary":"secondary"}">${a.label}</button>`).join("")+"</div></section>",Yt("resume",()=>{C.pause(),ct()}),Yt("autowin",()=>{C.pause(),C.winNow(),ct()}),Yt("next",()=>Ua(C.level+1)),Yt("retry",()=>Ua(C.level)),Yt("select",()=>{C.mode="select",ct()}),Yt("menu",()=>{C.mode="menu",ct()})}Sn()}zs(xn),n!=="play"&&(Cn.insertAdjacentHTML("beforeend",Iv()),Uv(ct)),qr(),Zs()}function We(n){const e=new U(n.x,n.y,n.z).project(bt),t=Ne.getBoundingClientRect();return{x:t.left+(e.x+1)*.5*t.width,y:t.top+(1-e.y)*.5*t.height}}function kc(n){const e=oo(n.kind,n.who),t=un(C.level,n,Ye()),[i,s,r,a]=n.kind==="enemy"&&n.skin?wc[n.skin]:e.inset,o=Ne.getBoundingClientRect();for(const h of[.8,.65,.9,.5,.35])for(const l of[.5,.38,.62]){const c={x:t.x-e.w/2+e.w*(i+(s-i)*l),y:t.y+e.h*(r+(a-r)*h),z:t.z},d=We(c),u=(d.x-o.left)/(o.width||1)*2-1,f=-((d.y-o.top)/(o.height||1)*2-1);if(Xr(new Re(u,f)).id===n.id)return{x:Math.round(d.x),y:Math.round(d.y)}}return null}let Sd="";function Sn(){const e=C.actors.filter(f=>f.kind==="enemy").map(f=>(f.x<-.5?"слева":f.x>.5?"справа":"в центре")+(f.layer==="foreground"?" (за укрытием рядом)":f.layer==="background"?" (в окне)":" (за забором)"));Ne.setAttribute("aria-label",`Уровень ${C.level}. Задиры: ${e.join(", ")||"нет"}. ${C.touch?"Веди пальцем для удара и захвата другой рукой. С предметом: двойной тап рядом с врагом — бросок.":"Наведи прицел, затем нажми Удар."}`);const t=JSON.stringify(C.mode==="play"?C.actors.map(f=>({id:f.id,kind:f.kind,layer:f.layer,frame:Qt.get(f.id)?.frame??null,at:f.kind!=="enemy"||f.age>=.4?kc(f):null})):[]);t!==Sd&&(Sd=t,Ne.dataset.aim=t);const i=(f,g)=>{const _=document.getElementById(f);_&&(_.textContent=g)};i("hearts","♥".repeat(Math.max(0,C.hp))+"♡".repeat(5-Math.max(0,C.hp))),i("stamina",Math.floor(C.stamina)+""),i("score",C.score.toString().padStart(5,"0")),i("combo",C.combo>1?"КОМБО ×"+C.combo:"ДАЙ ИМ РАЗМАХ"),i("progress",`${Dc()?"БАР":"УЛИЦА"} / ${C.defeated} ИЗ ${C.goal} ЗАДИР`),Dy();const s=document.getElementById("ultmeter");if(s){s.hidden=!C.ultActive;const f=document.getElementById("ultfill");f&&(f.style.width=Math.round(C.ult.meter*100)+"%")}const r=C.mode==="play"&&C.held==="hat"?JSON.stringify(Iy()):"";Ne.dataset.zone!==r&&(Ne.dataset.zone=r);const a=JSON.stringify({phase:C.ult.phase,meter:+C.ult.meter.toFixed(2),tip:Dn&&C.ult.phase==="pour"?{x:Math.round(Dn.tip.x*innerWidth),y:Math.round(Dn.tip.y*innerHeight)}:null});Ne.dataset.ult!==a&&(Ne.dataset.ult=a);const o=C.held??"";Ne.dataset.held!==o&&(Ne.dataset.held=o);const h=String(!!et);Ne.dataset.touching!==h&&(Ne.dataset.touching=h);const l=Ut.length>0?JSON.stringify(Ut[Ut.length-1]):"";Ne.dataset.strike!==l&&(Ne.dataset.strike=l);const c=String(C.flights.length);Ne.dataset.flights!==c&&(Ne.dataset.flights=c),C.touch&&(!C.message||C.message.includes("Прицел стоит")||C.message.includes("Двор ждёт"))&&(C.message=C.held?"Двойной тап рядом с врагом — бросок!":"Веди пальцем — бей задир! Через предмет — захват."),i("message",C.message);const d=document.getElementById("energy");d&&(d.style.width=C.stamina+"%");const u=document.getElementById("grab");u&&(u.innerHTML=C.held?"БРОСАЙ ↗<small>"+Nt[C.held].name.toUpperCase()+" · "+Mu("grab",!0,C.held)+" СИЛ</small>":"ХВАТАЙ ◎<small>ПКМ / E · "+ao+" СИЛ</small>")}function Dy(){const n=vt[C.level].pan;if(!n)return;const e={L:{n:0,hot:!1},R:{n:0,hot:!1}};for(const t of C.actors){if(t.kind!=="enemy")continue;const i=We(un(C.level,t,Ye())).x,s=i<0?e.L:i>innerWidth?e.R:null;s&&(s.n++,t.deadline-t.age<Xs*1.6&&(s.hot=!0))}for(const[t,i,s]of[["panL",pn>-n+.05,e.L],["panR",pn<n-.05,e.R]]){const r=document.getElementById(t);if(!r)continue;const a=(i||s.n?"on":"")+(s.hot?" hot":"");r.dataset.state!==a&&(r.dataset.state=a,r.classList.toggle("on",i||s.n>0),r.classList.toggle("hot",s.hot));const o=s.n?String(s.n):"",h=r.querySelector("span");h&&h.textContent!==o&&(h.textContent=o)}}let vi=null,bd=0;function qr(){const n=document.querySelector(".controls button")?document.querySelector(".controls")?.getBoundingClientRect():null;vi=n&&n.width?{left:n.left,right:n.right,top:n.top}:null;const e=document.getElementById("message");if(vi&&e?.textContent){const t=document.createRange();t.selectNodeContents(e);const i=t.getBoundingClientRect();i.width&&(vi={left:Math.min(vi.left,i.left-18),right:Math.max(vi.right,i.right+18),top:Math.min(vi.top,i.top-10)})}}let Dn=null,Rr=0;const kn=[],Vi=[];function Ly(){const n=C.hatRest;n&&(Yn.position.set(n.x,ji.max.y+Xv,Math.min(n.z,ji.max.z-.1)),Yn.visible=!0),Dn=null,kn.length=0;const e=document.createElement("div");e.className="ultflash",Cn.append(e),setTimeout(()=>e.remove(),800),Ye()&&(xt=.25)}function Iy(){const n=ji,e=Ne.getBoundingClientRect();for(const t of[.55,.42,.68,.3,.8])for(const i of[.5,.3,.7]){const s=We({x:n.min.x+(n.max.x-n.min.x)*t,y:n.max.y,z:n.min.z+(n.max.z-n.min.z)*i}),r=(s.x-e.left)/(e.width||1)*2-1,a=-((s.y-e.top)/(e.height||1)*2-1),o=Xr(new Re(r,a));if(o.kind==="cover"&&o.point.y>=n.max.y-.001&&Zl(C.level,o.id,o.point))return{x:Math.round(s.x),y:Math.round(s.y)}}return null}function Uy(n){Lv(C.pouring&&C.mode==="play"),C.ult.phase==="none"&&(Vi.length||Yn.visible)&&(Vi.length=0,kn.length=0,Yn.visible=!1,Dn=null,Rr=0);const e=document.getElementById("ulttitle"),t=C.ult.phase==="intro"?Kx(C.ult.t):null;if(e&&e.dataset.who!==t?.who&&e.remove(),t&&!document.getElementById("ulttitle")&&Cn.insertAdjacentHTML("beforeend",`<div id="ulttitle" class="intertitle dialog" role="status" data-who="${t.who}"><div><small>❦ ${t.who} ❦</small><b>${t.text}</b></div></div>`),C.ult.phase==="pour"&&!Dn){const h=ec(),l=h?{x:h.x/innerWidth,y:h.y/innerHeight}:{x:.5,y:.6};Dn=new jx(l),vn.set(l.x*2-1,1-l.y*2),Hu()}for(let h=kn.length-1;h>=0;h--){const l=kn[h];l.life-=n,l.vy+=2.4*n,l.x+=l.vx*n,l.y+=l.vy*n,l.life<=0&&kn.splice(h,1)}if(!Dn||!C.pouring||C.mode!=="play")return;const i=Dn.update(n,{x:(vn.x+1)/2,y:(1-vn.y)/2}),s=new Map;let r=null;for(const h of[0,-.018,.018]){const l=Xr(new Re((i.x+h)*2-1,1-i.y*2));typeof l.id=="number"&&!s.has(l.id)&&s.set(l.id,l.kind),h===0&&(l.kind==="whiff"||l.point.y<.2)&&(r=l.point)}for(const[h,l]of s)(l==="enemy"||l==="dog")&&C.soak({kind:l,id:h},n);const a=ec(),o=!!a&&Math.hypot(i.x*innerWidth-a.x,(i.y*innerHeight-a.y)*1.6)<a.r;if(o&&(C.pourInHat(n),Rr=Math.min(1,Rr+n/(Hi.length*.8))),Ne.dataset.inhat=String(o),Ye()&&Math.random()<.7&&kn.push({x:i.x+(Math.random()-.5)*.02,y:i.y,vx:(Math.random()-.5)*.22,vy:-.18-Math.random()*.22,life:.22+Math.random()*.2}),kn.length>40&&kn.splice(0,kn.length-40),r&&r.y<.2){const h=We(r),l=h.x/innerWidth,c=h.y/innerHeight,d=Math.min(innerWidth,innerHeight),u=Vi.find(f=>Math.hypot((f.x-l)*innerWidth,(f.y-c)*innerHeight)<d*.06);u?u.r=Math.min(u.max,u.r+n*d*.08):(Vi.push({x:l,y:c,r:d*.015,max:d*(.07+Math.random()*.04)}),Vi.length>14&&Vi.shift())}}const Cr=[];function tr(n){const e=n.skin?wc[n.skin][3]:Gt.enemy.inset[3];return{x:n.group.position.x,y:n.group.position.y+Gt.enemy.h*e+.16,z:n.group.position.z}}function gr(n,e,t,i,s,r){n.beginPath(),n.roundRect(e,t,i,s,r)}function Ny(n,e,t){for(const i of C.actors){if(i.kind!=="enemy"||!i.maxHp)continue;const s=Qt.get(i.id),r=lv(i,C.elapsed);if(!s||r<=0)continue;const a=tr(s),o=We(a),h=We({...a,x:a.x+1}),l=Math.abs(h.x-o.x),c=en.clamp(l*.95,36,150),d=Math.max(8,c*.16),u=o.x-c/2,f=o.y-d,g=(i.hp??0)/i.maxHp;s.ghost=Math.max(g,(s.ghost??1)-e*.9),n.save(),n.globalAlpha=r,gr(n,u,f,c,d,d/2),n.fillStyle="#260a0a",n.fill(),s.ghost>g&&(gr(n,u,f,c*s.ghost,d,d/2),n.fillStyle="#ff8585",n.fill()),gr(n,u,f,Math.max(d,c*g),d,d/2),n.fillStyle=g>.6?"#e61e1e":g>.3?"#cc1414":"#990c0c",g>0&&n.fill(),s.flash>.3&&(gr(n,u,f,c,d,d/2),n.fillStyle=`rgba(255,255,255,${(s.flash-.3)*.9})`,n.fill()),n.strokeStyle="#180404",n.lineWidth=Math.max(1.5,t*.3);for(let _=10;_<i.maxHp;_+=10){const m=u+c*_/i.maxHp;n.beginPath(),n.moveTo(m,f+2),n.lineTo(m,f+d-2),n.stroke()}gr(n,u,f,c,d,d/2),n.lineWidth=Math.max(2,t*.45),n.strokeStyle="#180404",n.stroke(),n.beginPath(),n.moveTo(u+d*.6,f+d*.3),n.lineTo(u+c*Math.max(.1,g)-d*.4,f+d*.3),n.strokeStyle="rgba(255,200,200,.6)",n.lineWidth=Math.max(1,d*.16),n.lineCap="round",n.stroke(),n.restore()}for(let i=Cr.length-1;i>=0;i--){const s=Cr[i];if(s.age+=e,s.age>1){Cr.splice(i,1);continue}const r=We({x:s.x,y:s.y+s.age*.7,z:s.z}),a=We({x:s.x+1,y:s.y,z:s.z}),o=Math.abs(a.x-r.x),h=s.age<.12?.6+s.age/.12*.6:1.2-Math.min(.2,s.age-.12),l=en.clamp(o*(s.big?.55:.42),16,64)*h;n.save(),n.globalAlpha=Math.min(1,(1-s.age)*2.5),n.font=`900 ${l}px Arial`,n.textAlign="center",n.textBaseline="bottom",n.lineJoin="round",n.lineWidth=Math.max(3,l*.16),n.strokeStyle="#151715",n.strokeText("−"+s.amount,r.x+(s.big?0:l*.3),r.y-4),n.fillStyle=s.big?"#ff6b3d":"#ffd84a",n.fillText("−"+s.amount,r.x+(s.big?0:l*.3),r.y-4),n.restore()}}const _r="#ffd400",Ed="#fff6b8";function Fy(n,e,t,i,s){const r=Math.min(e,t),a=ec();a&&Rr>0&&(n.beginPath(),n.ellipse(a.x,a.y+a.r*.05,a.r*(.55+.4*Rr),a.r*.22,0,0,Math.PI*2),n.fillStyle=_r,n.fill(),n.lineWidth=Math.max(1.5,s*.35),n.strokeStyle="#151715",n.stroke());for(const o of Vi)n.beginPath(),n.ellipse(o.x*e,o.y*t,o.r,o.r*.3,0,0,Math.PI*2),n.fillStyle=_r,n.globalAlpha=.9,n.fill(),n.globalAlpha=1,n.lineWidth=Math.max(2,s*.45),n.strokeStyle="#151715",n.stroke(),n.beginPath(),n.ellipse(o.x*e-o.r*.25,o.y*t-o.r*.08,o.r*.35,o.r*.07,0,0,Math.PI*2),n.fillStyle=Ed,n.fill();if(Dn&&C.ult.phase==="pour"){const o=Dn.points().map(g=>({x:g.x*e,y:g.y*t})),h=o.length-1,l=[],c=[],d=[],u=Ye()?1:0;for(let g=0;g<=h;g++){const _=o[Math.max(0,g-1)],m=o[Math.min(h,g+1)],p=m.x-_.x,b=m.y-_.y,E=Math.hypot(p,b)||1,v=-b/E,A=p/E,T=g/h,P=r*(.068*(1-T)+.03*T)*(1+u*.12*Math.sin(T*9-i*17)),D=u*Math.sin(T*15-i*24)*r*.007*(.3+T),S=o[g].x+v*D,M=o[g].y+A*D;d.push({x:S,y:M,w:P,nx:v,ny:A}),l.push({x:S+v*P/2,y:M+A*P/2}),c.push({x:S-v*P/2,y:M-A*P/2})}n.beginPath(),l.forEach((g,_)=>_?n.lineTo(g.x,g.y):n.moveTo(g.x,g.y));for(let g=h;g>=0;g--)n.lineTo(c[g].x,c[g].y);n.closePath(),n.fillStyle=_r,n.fill(),n.lineJoin="round",n.lineWidth=Math.max(2,s*.55),n.strokeStyle="#151715",n.stroke(),n.beginPath();for(let g=1;g<h;g++){const _=d[g],m=_.x+_.nx*_.w*.2,p=_.y+_.ny*_.w*.2;g===1?n.moveTo(m,p):n.lineTo(m,p)}n.lineCap="round",n.lineWidth=r*.007,n.strokeStyle=Ed,n.stroke(),n.fillStyle="#ffffff";for(let g=0;g<6;g++){const _=(i*1.7+g/6)%1,m=Math.min(h-1,Math.floor(_*h)),p=d[m];n.beginPath(),n.ellipse(p.x-p.nx*p.w*.15,p.y-p.ny*p.w*.15,p.w*.16,p.w*.07,Math.atan2(p.ny,p.nx)+Math.PI/2,0,Math.PI*2),n.fill()}const f=o[h];n.strokeStyle="#151715",n.lineWidth=Math.max(2,s*.4),n.fillStyle=_r;for(let g=0;g<5;g++){const _=-Math.PI/2+(g-2)*.45+(u?Math.sin(i*30+g)*.1:0),m=r*.02,p=r*(.045+.012*Math.sin(i*40+g*2)*u);n.beginPath(),n.moveTo(f.x+Math.cos(_)*m,f.y+Math.sin(_)*m),n.lineTo(f.x+Math.cos(_)*p,f.y+Math.sin(_)*p),n.stroke()}}for(const o of kn)n.beginPath(),n.arc(o.x*e,o.y*t,r*.0045+1,0,Math.PI*2),n.fillStyle=_r,n.fill(),n.lineWidth=1.5,n.strokeStyle="#151715",n.stroke()}let wd=0;const qu={left:{mode:"rest",x:0,y:0,open:!1,item:""},right:{mode:"rest",x:0,y:0,open:!1,item:""}};function ky(n){const e=Ne.getBoundingClientRect(),t=e.width,i=e.height,s=iy,r=Os.width/Math.max(1,t),a=Math.max(0,Math.min(.05,n-wd));if(wd=n,s.setTransform(1,0,0,1,0,0),s.clearRect(0,0,Os.width,Os.height),C.mode!=="play"&&C.mode!=="pause")return;s.setTransform(r,0,0,r,0,0),Dc()&&Fy(s,t,i,n,Ki(t,i).ink);const{ink:o,rim:h}=Ki(t,i),l=C.briefing?null:vi,c=pt,d=c?c.phase:1;Sy(s,n,o),by(s,n,o),Ny(s,a,o),my(s,a,o),My(s,a,o,n);const u=c?{x:c.spot.x*t,y:c.spot.y*i}:{x:0,y:0},f=c&&d<1?c.throwing?1:od(u,t):0;for(let g=es.length-1;g>=0;g--){const _=es[g];if(_.age+=a,_.age>.5){es.splice(g,1);continue}const m=_.age/.5,p=_.size*(m<.15?.6+m*4:1.2-m*.2);s.save(),s.globalAlpha=Math.max(0,1-Math.max(0,m-.5)*2),s.translate(_.x,_.y),s.drawImage(Da[_.key]??Da.miss,-p/2,-p/2,p,p),s.restore()}for(let g=wr.live.length-1;g>=0;g--){const _=wr.live[g];if(_.life-=a,_.life<=0){wr.release(g);continue}_.vy+=i*2.2*a,_.x+=_.vx*a,_.y+=_.vy*a,_.rot+=_.vr*a,s.save(),s.translate(_.x,_.y),s.rotate(_.rot),s.globalAlpha=Math.min(1,_.life*3),s.beginPath(),s.moveTo(-_.size,_.size*.6),s.lineTo(0,-_.size),s.lineTo(_.size*.8,_.size*.4),s.closePath(),s.fillStyle=_.color,s.fill(),s.lineWidth=Math.max(1.5,o*.3),s.strokeStyle="#151715",s.stroke(),s.restore()}if(c&&c.resolved&&!c.throwing&&d<.8){const g=(d-Mr)/(.8-Mr),_=c.outcome&&Da[c.outcome]?c.outcome:"miss",m=(_==="miss"?.9:1.6)*Ki(t,i).r*2*Math.max(.5,Math.min(1.2,6.5/Math.max(3,c.shot.distance)))*(g<.2?.6+g*3:1.2-g*.2);s.save(),s.globalAlpha=Math.max(0,1-Math.max(0,g-.5)*2),s.translate(u.x,u.y),s.rotate(-c.ray.direction.x*.4),s.drawImage(Da[_],-m/2,-m/2,m,m),s.restore()}for(const g of[-1,1]){const _=(Ye()?Math.sin(n*2.4+(g>0?0:1.3))*i*.006:0)+(C.briefing?Ki(t,i).r*1.7:0);let m=Cc(g,t,i,l,_),p="rest";if(c&&g===f)m=c.throwing?el(g,t,i,Gu(c),d,Br,{throwing:!0,avoid:l}):el(g,t,i,u,d,{arrive:Mr,release:ry},{depth:6.5/Math.max(3,c.shot.distance),grab:c.action==="grab",avoid:l}),p=c.throwing?"throw":"swing";else if(et&&!c){const A=C.held?-1:od({x:et.currentX-e.left,y:et.currentY-e.top},t);if(g===A){const T={x:et.currentX-e.left,y:et.currentY-e.top};m=el(g,t,i,T,.5,{arrive:.1,release:.9},{depth:1,avoid:null}),p="touch"}}const b=C.held&&g===1&&!(c&&c.throwing&&f===1);if(b&&(m={...m,open:!0}),c&&g===f&&d>.08&&d<Mr&&Ye()){const A=m.glove.x-m.ctrl.x,T=m.glove.y-m.ctrl.y,P=Math.hypot(A,T)||1,D=A/P,S=T/P;s.strokeStyle="#151715",s.lineWidth=Math.max(2,o*.5),s.lineCap="round";for(const M of[-1,1]){const L=m.w1/2+m.r*.45,z=-S*M*L,H=D*M*L;s.beginPath(),s.moveTo(m.glove.x-D*m.r*2.4+z,m.glove.y-S*m.r*2.4+H),s.lineTo(m.glove.x-D*m.r*1.25+z,m.glove.y-S*m.r*1.25+H),s.stroke()}}wv(s,m,o,h);const E=b?C.held:c&&c.throwing&&c.held&&g===f&&!c.launched?c.held:null,v=qu[g===1?"right":"left"];if(v.mode=p,v.x=m.glove.x,v.y=m.glove.y,v.open=m.open,v.item=E??"",E){const A=qn[E].image,T=m.r*2.2,P=T*Gt[E].w/Gt[E].h;s.save(),s.translate(m.glove.x,m.glove.y-m.r*.5),s.rotate(Ye()?Math.sin(n*2)*.07:0),s.drawImage(A,-P/2,-T*.8,P,T),s.restore()}}cy(s,t,i,a,o)}const zy=new Xp;let xn=0;const Ds=new U;function Yu(){requestAnimationFrame(Yu);const n=Math.min(zy.getDelta(),.05)*ay;C.mode!=="pause"&&(xn+=n),Ri>0?Ri-=n:C.tick(n),C.mode!==Ja&&ct();{const e=C.mode==="play"||C.mode==="pause"?C.briefing:null;lo.sync(e,C.mode==="pause");const t=String(!!e);Or.dataset.brief!==t&&(Or.dataset.brief=t)}if(Uy(C.mode==="play"?n:0),C.events.length&&Si(),Xu(),_d>C.hp&&Ye()){const e=document.createElement("div");e.className="flash",Cn.append(e),setTimeout(()=>e.remove(),400)}_d=C.hp,zs(xn),Cy(C.mode==="play"?n:0),C.mode==="play"&&(Sn(),(bd-=n)<=0&&(bd=.25,qr())),pt&&C.mode!=="pause"&&(pt.phase=Math.min(1,pt.phase+n/(pt.throwing?Br.duration:sy)),pt.throwing&&!pt.launched&&pt.phase>=Br.arrive?Vu(pt):!pt.throwing&&!pt.resolved&&pt.phase>=Mr&&ic(pt),pt.phase>=1&&(pt=null)),C.mode!=="play"&&C.mode!=="pause"&&(pt=null),dy(n),hy(),py(n,xn),wy(C.mode==="play"?n:0),ny(n,xn);for(const e of Js.values()){const t=e.userData.wobble;t&&(e.scale.set(1+Math.sin(t*30)*t*.05,1-Math.sin(t*30)*t*.04,1),e.userData.wobble=Math.max(0,t-n*3))}if(Ye())for(const e of Iu)e.rotation.z=Math.sin(xn*1.7+e.userData.sway)*.08;if(Ye())for(const e of Uu)e.rotation.y=e.userData.swing*(.35+.3*Math.sin(xn*2.3+e.userData.swing));Oy(n);{const e=si.depth,t=Math.tan(bt.fov*Math.PI/360)*e*bt.aspect;C.cam={x:Ds.x||pn,z:bt.position.z,half:Math.max(1.2,t-.6)}}Gn.info.reset(),Gn.clear(),Gn.render(yn,bt),ky(xn)}function Oy(n){if(C.mode==="menu"||C.mode==="select"){fd(0);return}const{w:e,h:t}=Bu(),i=fu(e,t,pn);fd(pn),Ds.set(i.position.x,i.position.y,i.position.z),xt>0?(xt=Math.max(0,xt-n*.9),bt.position.set(Ds.x+(Math.random()-.5)*xt,Ds.y+(Math.random()-.5)*xt,Ds.z)):bt.position.copy(Ds),bt.updateMatrixWorld()}Wr();Zs();ct();Yu();Object.assign(window,{__interaction:{actors:()=>C.actors.map(n=>({id:n.id,kind:n.kind,at:kc(n),center:We(un(C.level,n,Ye())),world:un(C.level,n,Ye())})),shot(n,e){const t=Ne.getBoundingClientRect(),i=Xr(new Re((n-t.left)/t.width*2-1,1-(e-t.top)/t.height*2));return{kind:i.kind,id:i.id??null}},arms:()=>qu,flights:()=>C.flights.map(n=>({id:n.id,kind:n.kind,pos:{...n.pos},vel:{...n.vel},age:n.age,struck:n.struck}))}});
