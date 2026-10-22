import"./index-CoousWbt.js";const Kl="180",qu=0,kc=1,Yu=2,vd=1,yd=2,$n=3,vi=0,en=1,Ot=2,gi=0,Es=1,zc=2,Oc=3,Bc=4,$u=5,Fi=100,Ku=101,ju=102,Zu=103,Ju=104,Qu=200,ef=201,tf=202,nf=203,Ko=204,jo=205,sf=206,rf=207,af=208,of=209,lf=210,cf=211,hf=212,df=213,uf=214,Zo=0,Jo=1,Qo=2,Ps=3,el=4,tl=5,nl=6,il=7,Md=0,ff=1,pf=2,_i=0,mf=1,gf=2,_f=3,xf=4,vf=5,yf=6,Mf=7,Sd=300,Ds=301,Ls=302,sl=303,rl=304,Za=306,Fa=1e3,Oi=1001,al=1002,Rn=1003,Sf=1004,Vr=1005,Un=1006,ro=1007,Bi=1008,kn=1009,bd=1010,Ed=1011,Sr=1012,jl=1013,Yi=1014,ni=1015,Nr=1016,Zl=1017,Jl=1018,br=1020,Td=35902,wd=35899,Ad=1021,Rd=1022,An=1023,Er=1026,Tr=1027,Cd=1028,Ql=1029,Pd=1030,ec=1031,tc=1033,Ca=33776,Pa=33777,Da=33778,La=33779,ol=35840,ll=35841,cl=35842,hl=35843,dl=36196,ul=37492,fl=37496,pl=37808,ml=37809,gl=37810,_l=37811,xl=37812,vl=37813,yl=37814,Ml=37815,Sl=37816,bl=37817,El=37818,Tl=37819,wl=37820,Al=37821,Rl=36492,Cl=36494,Pl=36495,Dl=36283,Ll=36284,Il=36285,Ul=36286,bf=3200,Dd=3201,Ld=0,Ef=1,mi="",ut="srgb",Is="srgb-linear",ka="linear",et="srgb",es=7680,Hc=519,Tf=512,wf=513,Af=514,Id=515,Rf=516,Cf=517,Pf=518,Df=519,Nl=35044,Gc="300 es",Nn=2e3,za=2001;class Os{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const kt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Vc=1234567;const Ts=Math.PI/180,wr=180/Math.PI;function ii(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(kt[n&255]+kt[n>>8&255]+kt[n>>16&255]+kt[n>>24&255]+"-"+kt[e&255]+kt[e>>8&255]+"-"+kt[e>>16&15|64]+kt[e>>24&255]+"-"+kt[t&63|128]+kt[t>>8&255]+"-"+kt[t>>16&255]+kt[t>>24&255]+kt[i&255]+kt[i>>8&255]+kt[i>>16&255]+kt[i>>24&255]).toLowerCase()}function We(n,e,t){return Math.max(e,Math.min(t,n))}function nc(n,e){return(n%e+e)%e}function Lf(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function If(n,e,t){return n!==e?(t-n)/(e-n):0}function mr(n,e,t){return(1-t)*n+t*e}function Uf(n,e,t,i){return mr(n,e,1-Math.exp(-t*i))}function Nf(n,e=1){return e-Math.abs(nc(n,e*2)-e)}function Ff(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function kf(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function zf(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Of(n,e){return n+Math.random()*(e-n)}function Bf(n){return n*(.5-Math.random())}function Hf(n){n!==void 0&&(Vc=n);let e=Vc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Gf(n){return n*Ts}function Vf(n){return n*wr}function Wf(n){return(n&n-1)===0&&n!==0}function Xf(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function qf(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Yf(n,e,t,i,s){const r=Math.cos,a=Math.sin,o=r(t/2),c=a(t/2),l=r((e+i)/2),h=a((e+i)/2),d=r((e-i)/2),u=a((e-i)/2),p=r((i-e)/2),g=a((i-e)/2);switch(s){case"XYX":n.set(o*h,c*d,c*u,o*l);break;case"YZY":n.set(c*u,o*h,c*d,o*l);break;case"ZXZ":n.set(c*d,c*u,o*h,o*l);break;case"XZX":n.set(o*h,c*g,c*p,o*l);break;case"YXY":n.set(c*p,o*h,c*g,o*l);break;case"ZYZ":n.set(c*g,c*p,o*h,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Tn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Ze(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const dn={DEG2RAD:Ts,RAD2DEG:wr,generateUUID:ii,clamp:We,euclideanModulo:nc,mapLinear:Lf,inverseLerp:If,lerp:mr,damp:Uf,pingpong:Nf,smoothstep:Ff,smootherstep:kf,randInt:zf,randFloat:Of,randFloatSpread:Bf,seededRandom:Hf,degToRad:Gf,radToDeg:Vf,isPowerOfTwo:Wf,ceilPowerOfTwo:Xf,floorPowerOfTwo:qf,setQuaternionFromProperEuler:Yf,normalize:Ze,denormalize:Tn};class Le{constructor(e=0,t=0){Le.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(We(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(We(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Fr{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let c=i[s+0],l=i[s+1],h=i[s+2],d=i[s+3];const u=r[a+0],p=r[a+1],g=r[a+2],_=r[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=d;return}if(o===1){e[t+0]=u,e[t+1]=p,e[t+2]=g,e[t+3]=_;return}if(d!==_||c!==u||l!==p||h!==g){let m=1-o;const f=c*u+l*p+h*g+d*_,b=f>=0?1:-1,E=1-f*f;if(E>Number.EPSILON){const A=Math.sqrt(E),w=Math.atan2(A,f*b);m=Math.sin(m*w)/A,o=Math.sin(o*w)/A}const v=o*b;if(c=c*m+u*v,l=l*m+p*v,h=h*m+g*v,d=d*m+_*v,m===1-o){const A=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=A,l*=A,h*=A,d*=A}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,s,r,a){const o=i[s],c=i[s+1],l=i[s+2],h=i[s+3],d=r[a],u=r[a+1],p=r[a+2],g=r[a+3];return e[t]=o*g+h*d+c*p-l*u,e[t+1]=c*g+h*u+l*d-o*p,e[t+2]=l*g+h*p+o*u-c*d,e[t+3]=h*g-o*d-c*u-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(i/2),h=o(s/2),d=o(r/2),u=c(i/2),p=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=u*h*d+l*p*g,this._y=l*p*d-u*h*g,this._z=l*h*g+u*p*d,this._w=l*h*d-u*p*g;break;case"YXZ":this._x=u*h*d+l*p*g,this._y=l*p*d-u*h*g,this._z=l*h*g-u*p*d,this._w=l*h*d+u*p*g;break;case"ZXY":this._x=u*h*d-l*p*g,this._y=l*p*d+u*h*g,this._z=l*h*g+u*p*d,this._w=l*h*d-u*p*g;break;case"ZYX":this._x=u*h*d-l*p*g,this._y=l*p*d+u*h*g,this._z=l*h*g-u*p*d,this._w=l*h*d+u*p*g;break;case"YZX":this._x=u*h*d+l*p*g,this._y=l*p*d+u*h*g,this._z=l*h*g-u*p*d,this._w=l*h*d-u*p*g;break;case"XZY":this._x=u*h*d-l*p*g,this._y=l*p*d-u*h*g,this._z=l*h*g+u*p*d,this._w=l*h*d+u*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],d=t[10],u=i+o+d;if(u>0){const p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(h-c)*p,this._y=(r-l)*p,this._z=(a-s)*p}else if(i>o&&i>d){const p=2*Math.sqrt(1+i-o-d);this._w=(h-c)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+l)/p}else if(o>d){const p=2*Math.sqrt(1+o-i-d);this._w=(r-l)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(c+h)/p}else{const p=2*Math.sqrt(1+d-i-o);this._w=(a-s)/p,this._x=(r+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(We(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=i*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-i*l,this._z=r*h+a*l+i*c-s*o,this._w=a*h-i*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,a=this._w;let o=a*e._w+i*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=s,this._z=r,this;const c=1-o*o;if(c<=Number.EPSILON){const p=1-t;return this._w=p*a+t*this._w,this._x=p*i+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,o),d=Math.sin((1-t)*h)/l,u=Math.sin(t*h)/l;return this._w=a*d+this._w*u,this._x=i*d+this._x*u,this._y=s*d+this._y*u,this._z=r*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,t=0,i=0){I.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Wc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Wc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*i),h=2*(o*t-r*s),d=2*(r*i-a*t);return this.x=t+c*l+a*d-o*h,this.y=i+c*h+o*l-r*d,this.z=s+c*d+r*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this.z=We(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this.z=We(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(We(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-i*c,this.z=i*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ao.copy(this).projectOnVector(e),this.sub(ao)}reflect(e){return this.sub(ao.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(We(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ao=new I,Wc=new Fr;class ke{constructor(e,t,i,s,r,a,o,c,l){ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,c,l)}set(e,t,i,s,r,a,o,c,l){const h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=c,h[6]=i,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],h=i[4],d=i[7],u=i[2],p=i[5],g=i[8],_=s[0],m=s[3],f=s[6],b=s[1],E=s[4],v=s[7],A=s[2],w=s[5],C=s[8];return r[0]=a*_+o*b+c*A,r[3]=a*m+o*E+c*w,r[6]=a*f+o*v+c*C,r[1]=l*_+h*b+d*A,r[4]=l*m+h*E+d*w,r[7]=l*f+h*v+d*C,r[2]=u*_+p*b+g*A,r[5]=u*m+p*E+g*w,r[8]=u*f+p*v+g*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-i*r*h+i*o*c+s*r*l-s*a*c}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],d=h*a-o*l,u=o*c-h*r,p=l*r-a*c,g=t*d+i*u+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=d*_,e[1]=(s*l-h*i)*_,e[2]=(o*i-s*a)*_,e[3]=u*_,e[4]=(h*t-s*c)*_,e[5]=(s*r-o*t)*_,e[6]=p*_,e[7]=(i*c-l*t)*_,e[8]=(a*t-i*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(oo.makeScale(e,t)),this}rotate(e){return this.premultiply(oo.makeRotation(-e)),this}translate(e,t){return this.premultiply(oo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const oo=new ke;function Ud(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Ar(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function $f(){const n=Ar("canvas");return n.style.display="block",n}const Xc={};function Rr(n){n in Xc||(Xc[n]=!0,console.warn(n))}function Kf(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}const qc=new ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Yc=new ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function jf(){const n={enabled:!0,workingColorSpace:Is,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===et&&(s.r=si(s.r),s.g=si(s.g),s.b=si(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===et&&(s.r=ws(s.r),s.g=ws(s.g),s.b=ws(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===mi?ka:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Rr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Rr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Is]:{primaries:e,whitePoint:i,transfer:ka,toXYZ:qc,fromXYZ:Yc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ut},outputColorSpaceConfig:{drawingBufferColorSpace:ut}},[ut]:{primaries:e,whitePoint:i,transfer:et,toXYZ:qc,fromXYZ:Yc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ut}}}),n}const Ye=jf();function si(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ws(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let ts;class Zf{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{ts===void 0&&(ts=Ar("canvas")),ts.width=e.width,ts.height=e.height;const s=ts.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=ts}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ar("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=si(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(si(t[i]/255)*255):t[i]=si(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Jf=0;class ic{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Jf++}),this.uuid=ii(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(lo(s[a].image)):r.push(lo(s[a]))}else r=lo(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function lo(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Zf.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Qf=0;const co=new I;class Nt extends Os{constructor(e=Nt.DEFAULT_IMAGE,t=Nt.DEFAULT_MAPPING,i=Oi,s=Oi,r=Un,a=Bi,o=An,c=kn,l=Nt.DEFAULT_ANISOTROPY,h=mi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Qf++}),this.uuid=ii(),this.name="",this.source=new ic(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Le(0,0),this.repeat=new Le(1,1),this.center=new Le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(co).x}get height(){return this.source.getSize(co).y}get depth(){return this.source.getSize(co).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Sd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Fa:e.x=e.x-Math.floor(e.x);break;case Oi:e.x=e.x<0?0:1;break;case al:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Fa:e.y=e.y-Math.floor(e.y);break;case Oi:e.y=e.y<0?0:1;break;case al:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Nt.DEFAULT_IMAGE=null;Nt.DEFAULT_MAPPING=Sd;Nt.DEFAULT_ANISOTROPY=1;class nt{constructor(e=0,t=0,i=0,s=1){nt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const c=e.elements,l=c[0],h=c[4],d=c[8],u=c[1],p=c[5],g=c[9],_=c[2],m=c[6],f=c[10];if(Math.abs(h-u)<.01&&Math.abs(d-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const E=(l+1)/2,v=(p+1)/2,A=(f+1)/2,w=(h+u)/4,C=(d+_)/4,P=(g+m)/4;return E>v&&E>A?E<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(E),s=w/i,r=C/i):v>A?v<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),i=w/s,r=P/s):A<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),i=C/r,s=P/r),this.set(i,s,r,t),this}let b=Math.sqrt((m-g)*(m-g)+(d-_)*(d-_)+(u-h)*(u-h));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(d-_)/b,this.z=(u-h)/b,this.w=Math.acos((l+p+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this.z=We(this.z,e.z,t.z),this.w=We(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this.z=We(this.z,e,t),this.w=We(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(We(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ep extends Os{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Un,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new nt(0,0,e,t),this.scissorTest=!1,this.viewport=new nt(0,0,e,t);const s={width:e,height:t,depth:i.depth},r=new Nt(s);this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:Un,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new ic(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class $i extends ep{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Nd extends Nt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Rn,this.minFilter=Rn,this.wrapR=Oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class tp extends Nt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Rn,this.minFilter=Rn,this.wrapR=Oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Bs{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(xn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(xn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=xn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,xn):xn.fromBufferAttribute(r,a),xn.applyMatrix4(e.matrixWorld),this.expandByPoint(xn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Wr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Wr.copy(i.boundingBox)),Wr.applyMatrix4(e.matrixWorld),this.union(Wr)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,xn),xn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ys),Xr.subVectors(this.max,Ys),ns.subVectors(e.a,Ys),is.subVectors(e.b,Ys),ss.subVectors(e.c,Ys),oi.subVectors(is,ns),li.subVectors(ss,is),Ei.subVectors(ns,ss);let t=[0,-oi.z,oi.y,0,-li.z,li.y,0,-Ei.z,Ei.y,oi.z,0,-oi.x,li.z,0,-li.x,Ei.z,0,-Ei.x,-oi.y,oi.x,0,-li.y,li.x,0,-Ei.y,Ei.x,0];return!ho(t,ns,is,ss,Xr)||(t=[1,0,0,0,1,0,0,0,1],!ho(t,ns,is,ss,Xr))?!1:(qr.crossVectors(oi,li),t=[qr.x,qr.y,qr.z],ho(t,ns,is,ss,Xr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,xn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(xn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Vn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Vn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Vn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Vn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Vn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Vn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Vn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Vn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Vn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Vn=[new I,new I,new I,new I,new I,new I,new I,new I],xn=new I,Wr=new Bs,ns=new I,is=new I,ss=new I,oi=new I,li=new I,Ei=new I,Ys=new I,Xr=new I,qr=new I,Ti=new I;function ho(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){Ti.fromArray(n,r);const o=s.x*Math.abs(Ti.x)+s.y*Math.abs(Ti.y)+s.z*Math.abs(Ti.z),c=e.dot(Ti),l=t.dot(Ti),h=i.dot(Ti);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const np=new Bs,$s=new I,uo=new I;class Ja{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):np.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;$s.subVectors(e,this.center);const t=$s.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector($s,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(uo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint($s.copy(e.center).add(uo)),this.expandByPoint($s.copy(e.center).sub(uo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Wn=new I,fo=new I,Yr=new I,ci=new I,po=new I,$r=new I,mo=new I;class sc{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Wn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Wn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Wn.copy(this.origin).addScaledVector(this.direction,t),Wn.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){fo.copy(e).add(t).multiplyScalar(.5),Yr.copy(t).sub(e).normalize(),ci.copy(this.origin).sub(fo);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Yr),o=ci.dot(this.direction),c=-ci.dot(Yr),l=ci.lengthSq(),h=Math.abs(1-a*a);let d,u,p,g;if(h>0)if(d=a*c-o,u=a*o-c,g=r*h,d>=0)if(u>=-g)if(u<=g){const _=1/h;d*=_,u*=_,p=d*(d+a*u+2*o)+u*(a*d+u+2*c)+l}else u=r,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*c)+l;else u=-r,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*c)+l;else u<=-g?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-c),r),p=-d*d+u*(u+2*c)+l):u<=g?(d=0,u=Math.min(Math.max(-r,-c),r),p=u*(u+2*c)+l):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-c),r),p=-d*d+u*(u+2*c)+l);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(fo).addScaledVector(Yr,u),p}intersectSphere(e,t){Wn.subVectors(e.center,this.origin);const i=Wn.dot(this.direction),s=Wn.dot(Wn)-i*i,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,c;const l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return l>=0?(i=(e.min.x-u.x)*l,s=(e.max.x-u.x)*l):(i=(e.max.x-u.x)*l,s=(e.min.x-u.x)*l),h>=0?(r=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(e.min.z-u.z)*d,c=(e.max.z-u.z)*d):(o=(e.max.z-u.z)*d,c=(e.min.z-u.z)*d),i>c||o>s)||((o>i||i!==i)&&(i=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Wn)!==null}intersectTriangle(e,t,i,s,r){po.subVectors(t,e),$r.subVectors(i,e),mo.crossVectors(po,$r);let a=this.direction.dot(mo),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ci.subVectors(this.origin,e);const c=o*this.direction.dot($r.crossVectors(ci,$r));if(c<0)return null;const l=o*this.direction.dot(po.cross(ci));if(l<0||c+l>a)return null;const h=-o*ci.dot(mo);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class lt{constructor(e,t,i,s,r,a,o,c,l,h,d,u,p,g,_,m){lt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,c,l,h,d,u,p,g,_,m)}set(e,t,i,s,r,a,o,c,l,h,d,u,p,g,_,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=c,f[2]=l,f[6]=h,f[10]=d,f[14]=u,f[3]=p,f[7]=g,f[11]=_,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new lt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/rs.setFromMatrixColumn(e,0).length(),r=1/rs.setFromMatrixColumn(e,1).length(),a=1/rs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const u=a*h,p=a*d,g=o*h,_=o*d;t[0]=c*h,t[4]=-c*d,t[8]=l,t[1]=p+g*l,t[5]=u-_*l,t[9]=-o*c,t[2]=_-u*l,t[6]=g+p*l,t[10]=a*c}else if(e.order==="YXZ"){const u=c*h,p=c*d,g=l*h,_=l*d;t[0]=u+_*o,t[4]=g*o-p,t[8]=a*l,t[1]=a*d,t[5]=a*h,t[9]=-o,t[2]=p*o-g,t[6]=_+u*o,t[10]=a*c}else if(e.order==="ZXY"){const u=c*h,p=c*d,g=l*h,_=l*d;t[0]=u-_*o,t[4]=-a*d,t[8]=g+p*o,t[1]=p+g*o,t[5]=a*h,t[9]=_-u*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const u=a*h,p=a*d,g=o*h,_=o*d;t[0]=c*h,t[4]=g*l-p,t[8]=u*l+_,t[1]=c*d,t[5]=_*l+u,t[9]=p*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const u=a*c,p=a*l,g=o*c,_=o*l;t[0]=c*h,t[4]=_-u*d,t[8]=g*d+p,t[1]=d,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=p*d+g,t[10]=u-_*d}else if(e.order==="XZY"){const u=a*c,p=a*l,g=o*c,_=o*l;t[0]=c*h,t[4]=-d,t[8]=l*h,t[1]=u*d+_,t[5]=a*h,t[9]=p*d-g,t[2]=g*d-p,t[6]=o*h,t[10]=_*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ip,e,sp)}lookAt(e,t,i){const s=this.elements;return rn.subVectors(e,t),rn.lengthSq()===0&&(rn.z=1),rn.normalize(),hi.crossVectors(i,rn),hi.lengthSq()===0&&(Math.abs(i.z)===1?rn.x+=1e-4:rn.z+=1e-4,rn.normalize(),hi.crossVectors(i,rn)),hi.normalize(),Kr.crossVectors(rn,hi),s[0]=hi.x,s[4]=Kr.x,s[8]=rn.x,s[1]=hi.y,s[5]=Kr.y,s[9]=rn.y,s[2]=hi.z,s[6]=Kr.z,s[10]=rn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],h=i[1],d=i[5],u=i[9],p=i[13],g=i[2],_=i[6],m=i[10],f=i[14],b=i[3],E=i[7],v=i[11],A=i[15],w=s[0],C=s[4],P=s[8],S=s[12],M=s[1],D=s[5],z=s[9],H=s[13],W=s[2],Y=s[6],X=s[10],ne=s[14],G=s[3],ae=s[7],he=s[11],be=s[15];return r[0]=a*w+o*M+c*W+l*G,r[4]=a*C+o*D+c*Y+l*ae,r[8]=a*P+o*z+c*X+l*he,r[12]=a*S+o*H+c*ne+l*be,r[1]=h*w+d*M+u*W+p*G,r[5]=h*C+d*D+u*Y+p*ae,r[9]=h*P+d*z+u*X+p*he,r[13]=h*S+d*H+u*ne+p*be,r[2]=g*w+_*M+m*W+f*G,r[6]=g*C+_*D+m*Y+f*ae,r[10]=g*P+_*z+m*X+f*he,r[14]=g*S+_*H+m*ne+f*be,r[3]=b*w+E*M+v*W+A*G,r[7]=b*C+E*D+v*Y+A*ae,r[11]=b*P+E*z+v*X+A*he,r[15]=b*S+E*H+v*ne+A*be,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],d=e[6],u=e[10],p=e[14],g=e[3],_=e[7],m=e[11],f=e[15];return g*(+r*c*d-s*l*d-r*o*u+i*l*u+s*o*p-i*c*p)+_*(+t*c*p-t*l*u+r*a*u-s*a*p+s*l*h-r*c*h)+m*(+t*l*d-t*o*p-r*a*d+i*a*p+r*o*h-i*l*h)+f*(-s*o*h-t*c*d+t*o*u+s*a*d-i*a*u+i*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],d=e[9],u=e[10],p=e[11],g=e[12],_=e[13],m=e[14],f=e[15],b=d*m*l-_*u*l+_*c*p-o*m*p-d*c*f+o*u*f,E=g*u*l-h*m*l-g*c*p+a*m*p+h*c*f-a*u*f,v=h*_*l-g*d*l+g*o*p-a*_*p-h*o*f+a*d*f,A=g*d*c-h*_*c-g*o*u+a*_*u+h*o*m-a*d*m,w=t*b+i*E+s*v+r*A;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/w;return e[0]=b*C,e[1]=(_*u*r-d*m*r-_*s*p+i*m*p+d*s*f-i*u*f)*C,e[2]=(o*m*r-_*c*r+_*s*l-i*m*l-o*s*f+i*c*f)*C,e[3]=(d*c*r-o*u*r-d*s*l+i*u*l+o*s*p-i*c*p)*C,e[4]=E*C,e[5]=(h*m*r-g*u*r+g*s*p-t*m*p-h*s*f+t*u*f)*C,e[6]=(g*c*r-a*m*r-g*s*l+t*m*l+a*s*f-t*c*f)*C,e[7]=(a*u*r-h*c*r+h*s*l-t*u*l-a*s*p+t*c*p)*C,e[8]=v*C,e[9]=(g*d*r-h*_*r-g*i*p+t*_*p+h*i*f-t*d*f)*C,e[10]=(a*_*r-g*o*r+g*i*l-t*_*l-a*i*f+t*o*f)*C,e[11]=(h*o*r-a*d*r-h*i*l+t*d*l+a*i*p-t*o*p)*C,e[12]=A*C,e[13]=(h*_*s-g*d*s+g*i*u-t*_*u-h*i*m+t*d*m)*C,e[14]=(g*o*s-a*_*s-g*i*c+t*_*c+a*i*m-t*o*m)*C,e[15]=(a*d*s-h*o*s+h*i*c-t*d*c-a*i*u+t*o*u)*C,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,c=e.z,l=r*a,h=r*o;return this.set(l*a+i,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+i,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,h=a+a,d=o+o,u=r*l,p=r*h,g=r*d,_=a*h,m=a*d,f=o*d,b=c*l,E=c*h,v=c*d,A=i.x,w=i.y,C=i.z;return s[0]=(1-(_+f))*A,s[1]=(p+v)*A,s[2]=(g-E)*A,s[3]=0,s[4]=(p-v)*w,s[5]=(1-(u+f))*w,s[6]=(m+b)*w,s[7]=0,s[8]=(g+E)*C,s[9]=(m-b)*C,s[10]=(1-(u+_))*C,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let r=rs.set(s[0],s[1],s[2]).length();const a=rs.set(s[4],s[5],s[6]).length(),o=rs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],vn.copy(this);const l=1/r,h=1/a,d=1/o;return vn.elements[0]*=l,vn.elements[1]*=l,vn.elements[2]*=l,vn.elements[4]*=h,vn.elements[5]*=h,vn.elements[6]*=h,vn.elements[8]*=d,vn.elements[9]*=d,vn.elements[10]*=d,t.setFromRotationMatrix(vn),i.x=r,i.y=a,i.z=o,this}makePerspective(e,t,i,s,r,a,o=Nn,c=!1){const l=this.elements,h=2*r/(t-e),d=2*r/(i-s),u=(t+e)/(t-e),p=(i+s)/(i-s);let g,_;if(c)g=r/(a-r),_=a*r/(a-r);else if(o===Nn)g=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===za)g=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=d,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=Nn,c=!1){const l=this.elements,h=2/(t-e),d=2/(i-s),u=-(t+e)/(t-e),p=-(i+s)/(i-s);let g,_;if(c)g=1/(a-r),_=a/(a-r);else if(o===Nn)g=-2/(a-r),_=-(a+r)/(a-r);else if(o===za)g=-1/(a-r),_=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=u,l[1]=0,l[5]=d,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const rs=new I,vn=new lt,ip=new I(0,0,0),sp=new I(1,1,1),hi=new I,Kr=new I,rn=new I,$c=new lt,Kc=new Fr;class zn{constructor(e=0,t=0,i=0,s=zn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],d=s[2],u=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(We(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-We(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(We(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-We(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(We(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-We(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return $c.makeRotationFromQuaternion(e),this.setFromRotationMatrix($c,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Kc.setFromEuler(this),this.setFromQuaternion(Kc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}zn.DEFAULT_ORDER="XYZ";class rc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let rp=0;const jc=new I,as=new Fr,Xn=new lt,jr=new I,Ks=new I,ap=new I,op=new Fr,Zc=new I(1,0,0),Jc=new I(0,1,0),Qc=new I(0,0,1),eh={type:"added"},lp={type:"removed"},os={type:"childadded",child:null},go={type:"childremoved",child:null};class Rt extends Os{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:rp++}),this.uuid=ii(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Rt.DEFAULT_UP.clone();const e=new I,t=new zn,i=new Fr,s=new I(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new lt},normalMatrix:{value:new ke}}),this.matrix=new lt,this.matrixWorld=new lt,this.matrixAutoUpdate=Rt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new rc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return as.setFromAxisAngle(e,t),this.quaternion.multiply(as),this}rotateOnWorldAxis(e,t){return as.setFromAxisAngle(e,t),this.quaternion.premultiply(as),this}rotateX(e){return this.rotateOnAxis(Zc,e)}rotateY(e){return this.rotateOnAxis(Jc,e)}rotateZ(e){return this.rotateOnAxis(Qc,e)}translateOnAxis(e,t){return jc.copy(e).applyQuaternion(this.quaternion),this.position.add(jc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Zc,e)}translateY(e){return this.translateOnAxis(Jc,e)}translateZ(e){return this.translateOnAxis(Qc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Xn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?jr.copy(e):jr.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Ks.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Xn.lookAt(Ks,jr,this.up):Xn.lookAt(jr,Ks,this.up),this.quaternion.setFromRotationMatrix(Xn),s&&(Xn.extractRotation(s.matrixWorld),as.setFromRotationMatrix(Xn),this.quaternion.premultiply(as.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(eh),os.child=e,this.dispatchEvent(os),os.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(lp),go.child=e,this.dispatchEvent(go),go.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Xn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Xn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Xn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(eh),os.child=e,this.dispatchEvent(os),os.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ks,e,ap),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ks,op,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const d=c[l];r(e.shapes,d)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),d=a(e.shapes),u=a(e.skeletons),p=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=s,i;function a(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Rt.DEFAULT_UP=new I(0,1,0);Rt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const yn=new I,qn=new I,_o=new I,Yn=new I,ls=new I,cs=new I,th=new I,xo=new I,vo=new I,yo=new I,Mo=new nt,So=new nt,bo=new nt;class cn{constructor(e=new I,t=new I,i=new I){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),yn.subVectors(e,t),s.cross(yn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){yn.subVectors(s,t),qn.subVectors(i,t),_o.subVectors(e,t);const a=yn.dot(yn),o=yn.dot(qn),c=yn.dot(_o),l=qn.dot(qn),h=qn.dot(_o),d=a*l-o*o;if(d===0)return r.set(0,0,0),null;const u=1/d,p=(l*c-o*h)*u,g=(a*h-o*c)*u;return r.set(1-p-g,g,p)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Yn)===null?!1:Yn.x>=0&&Yn.y>=0&&Yn.x+Yn.y<=1}static getInterpolation(e,t,i,s,r,a,o,c){return this.getBarycoord(e,t,i,s,Yn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Yn.x),c.addScaledVector(a,Yn.y),c.addScaledVector(o,Yn.z),c)}static getInterpolatedAttribute(e,t,i,s,r,a){return Mo.setScalar(0),So.setScalar(0),bo.setScalar(0),Mo.fromBufferAttribute(e,t),So.fromBufferAttribute(e,i),bo.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Mo,r.x),a.addScaledVector(So,r.y),a.addScaledVector(bo,r.z),a}static isFrontFacing(e,t,i,s){return yn.subVectors(i,t),qn.subVectors(e,t),yn.cross(qn).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return yn.subVectors(this.c,this.b),qn.subVectors(this.a,this.b),yn.cross(qn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return cn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return cn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return cn.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return cn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return cn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let a,o;ls.subVectors(s,i),cs.subVectors(r,i),xo.subVectors(e,i);const c=ls.dot(xo),l=cs.dot(xo);if(c<=0&&l<=0)return t.copy(i);vo.subVectors(e,s);const h=ls.dot(vo),d=cs.dot(vo);if(h>=0&&d<=h)return t.copy(s);const u=c*d-h*l;if(u<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(i).addScaledVector(ls,a);yo.subVectors(e,r);const p=ls.dot(yo),g=cs.dot(yo);if(g>=0&&p<=g)return t.copy(r);const _=p*l-c*g;if(_<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(i).addScaledVector(cs,o);const m=h*g-p*d;if(m<=0&&d-h>=0&&p-g>=0)return th.subVectors(r,s),o=(d-h)/(d-h+(p-g)),t.copy(s).addScaledVector(th,o);const f=1/(m+_+u);return a=_*f,o=u*f,t.copy(i).addScaledVector(ls,a).addScaledVector(cs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Fd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},di={h:0,s:0,l:0},Zr={h:0,s:0,l:0};function Eo(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ge{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ut){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ye.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=Ye.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ye.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=Ye.workingColorSpace){if(e=nc(e,1),t=We(t,0,1),i=We(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=Eo(a,r,e+1/3),this.g=Eo(a,r,e),this.b=Eo(a,r,e-1/3)}return Ye.colorSpaceToWorking(this,s),this}setStyle(e,t=ut){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ut){const i=Fd[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=si(e.r),this.g=si(e.g),this.b=si(e.b),this}copyLinearToSRGB(e){return this.r=ws(e.r),this.g=ws(e.g),this.b=ws(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ut){return Ye.workingToColorSpace(zt.copy(this),e),Math.round(We(zt.r*255,0,255))*65536+Math.round(We(zt.g*255,0,255))*256+Math.round(We(zt.b*255,0,255))}getHexString(e=ut){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ye.workingColorSpace){Ye.workingToColorSpace(zt.copy(this),t);const i=zt.r,s=zt.g,r=zt.b,a=Math.max(i,s,r),o=Math.min(i,s,r);let c,l;const h=(o+a)/2;if(o===a)c=0,l=0;else{const d=a-o;switch(l=h<=.5?d/(a+o):d/(2-a-o),a){case i:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-i)/d+2;break;case r:c=(i-s)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=Ye.workingColorSpace){return Ye.workingToColorSpace(zt.copy(this),t),e.r=zt.r,e.g=zt.g,e.b=zt.b,e}getStyle(e=ut){Ye.workingToColorSpace(zt.copy(this),e);const t=zt.r,i=zt.g,s=zt.b;return e!==ut?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(di),this.setHSL(di.h+e,di.s+t,di.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(di),e.getHSL(Zr);const i=mr(di.h,Zr.h,t),s=mr(di.s,Zr.s,t),r=mr(di.l,Zr.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const zt=new Ge;Ge.NAMES=Fd;let cp=0;class Ji extends Os{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:cp++}),this.uuid=ii(),this.name="",this.type="Material",this.blending=Es,this.side=vi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ko,this.blendDst=jo,this.blendEquation=Fi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ge(0,0,0),this.blendAlpha=0,this.depthFunc=Ps,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Hc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=es,this.stencilZFail=es,this.stencilZPass=es,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Es&&(i.blending=this.blending),this.side!==vi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ko&&(i.blendSrc=this.blendSrc),this.blendDst!==jo&&(i.blendDst=this.blendDst),this.blendEquation!==Fi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ps&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Hc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==es&&(i.stencilFail=this.stencilFail),this.stencilZFail!==es&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==es&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class St extends Ji{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zn,this.combine=Md,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const bt=new I,Jr=new Le;let hp=0;class Cn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:hp++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Nl,this.updateRanges=[],this.gpuType=ni,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Jr.fromBufferAttribute(this,t),Jr.applyMatrix3(e),this.setXY(t,Jr.x,Jr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix3(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix4(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.applyNormalMatrix(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.transformDirection(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Tn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ze(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Tn(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ze(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Tn(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ze(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Tn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ze(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Tn(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ze(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Ze(t,this.array),i=Ze(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Ze(t,this.array),i=Ze(i,this.array),s=Ze(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=Ze(t,this.array),i=Ze(i,this.array),s=Ze(s,this.array),r=Ze(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Nl&&(e.usage=this.usage),e}}class kd extends Cn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class zd extends Cn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class xt extends Cn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let dp=0;const pn=new lt,To=new Rt,hs=new I,an=new Bs,js=new Bs,Lt=new I;class tn extends Os{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:dp++}),this.uuid=ii(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ud(e)?zd:kd)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new ke().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return pn.makeRotationFromQuaternion(e),this.applyMatrix4(pn),this}rotateX(e){return pn.makeRotationX(e),this.applyMatrix4(pn),this}rotateY(e){return pn.makeRotationY(e),this.applyMatrix4(pn),this}rotateZ(e){return pn.makeRotationZ(e),this.applyMatrix4(pn),this}translate(e,t,i){return pn.makeTranslation(e,t,i),this.applyMatrix4(pn),this}scale(e,t,i){return pn.makeScale(e,t,i),this.applyMatrix4(pn),this}lookAt(e){return To.lookAt(e),To.updateMatrix(),this.applyMatrix4(To.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(hs).negate(),this.translate(hs.x,hs.y,hs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new xt(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Bs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];an.setFromBufferAttribute(r),this.morphTargetsRelative?(Lt.addVectors(this.boundingBox.min,an.min),this.boundingBox.expandByPoint(Lt),Lt.addVectors(this.boundingBox.max,an.max),this.boundingBox.expandByPoint(Lt)):(this.boundingBox.expandByPoint(an.min),this.boundingBox.expandByPoint(an.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ja);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){const i=this.boundingSphere.center;if(an.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];js.setFromBufferAttribute(o),this.morphTargetsRelative?(Lt.addVectors(an.min,js.min),an.expandByPoint(Lt),Lt.addVectors(an.max,js.max),an.expandByPoint(Lt)):(an.expandByPoint(js.min),an.expandByPoint(js.max))}an.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)Lt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Lt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Lt.fromBufferAttribute(o,l),c&&(hs.fromBufferAttribute(e,l),Lt.add(hs)),s=Math.max(s,i.distanceToSquared(Lt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Cn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let P=0;P<i.count;P++)o[P]=new I,c[P]=new I;const l=new I,h=new I,d=new I,u=new Le,p=new Le,g=new Le,_=new I,m=new I;function f(P,S,M){l.fromBufferAttribute(i,P),h.fromBufferAttribute(i,S),d.fromBufferAttribute(i,M),u.fromBufferAttribute(r,P),p.fromBufferAttribute(r,S),g.fromBufferAttribute(r,M),h.sub(l),d.sub(l),p.sub(u),g.sub(u);const D=1/(p.x*g.y-g.x*p.y);isFinite(D)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(D),m.copy(d).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(D),o[P].add(_),o[S].add(_),o[M].add(_),c[P].add(m),c[S].add(m),c[M].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let P=0,S=b.length;P<S;++P){const M=b[P],D=M.start,z=M.count;for(let H=D,W=D+z;H<W;H+=3)f(e.getX(H+0),e.getX(H+1),e.getX(H+2))}const E=new I,v=new I,A=new I,w=new I;function C(P){A.fromBufferAttribute(s,P),w.copy(A);const S=o[P];E.copy(S),E.sub(A.multiplyScalar(A.dot(S))).normalize(),v.crossVectors(w,S);const D=v.dot(c[P])<0?-1:1;a.setXYZW(P,E.x,E.y,E.z,D)}for(let P=0,S=b.length;P<S;++P){const M=b[P],D=M.start,z=M.count;for(let H=D,W=D+z;H<W;H+=3)C(e.getX(H+0)),C(e.getX(H+1)),C(e.getX(H+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Cn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let u=0,p=i.count;u<p;u++)i.setXYZ(u,0,0,0);const s=new I,r=new I,a=new I,o=new I,c=new I,l=new I,h=new I,d=new I;if(e)for(let u=0,p=e.count;u<p;u+=3){const g=e.getX(u+0),_=e.getX(u+1),m=e.getX(u+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(i,g),c.fromBufferAttribute(i,_),l.fromBufferAttribute(i,m),o.add(h),c.add(h),l.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(_,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let u=0,p=t.count;u<p;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Lt.fromBufferAttribute(e,t),Lt.normalize(),e.setXYZ(t,Lt.x,Lt.y,Lt.z)}toNonIndexed(){function e(o,c){const l=o.array,h=o.itemSize,d=o.normalized,u=new l.constructor(c.length*h);let p=0,g=0;for(let _=0,m=c.length;_<m;_++){o.isInterleavedBufferAttribute?p=c[_]*o.data.stride+o.offset:p=c[_]*h;for(let f=0;f<h;f++)u[g++]=l[p++]}return new Cn(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new tn,i=this.index.array,s=this.attributes;for(const o in s){const c=s[o],l=e(c,i);t.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let h=0,d=l.length;h<d;h++){const u=l[h],p=e(u,i);c.push(p)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let d=0,u=l.length;d<u;d++){const p=l[d];h.push(p.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(t))}const r=e.morphAttributes;for(const l in r){const h=[],d=r[l];for(let u=0,p=d.length;u<p;u++)h.push(d[u].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,h=a.length;l<h;l++){const d=a[l];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const nh=new lt,wi=new sc,Qr=new Ja,ih=new I,ea=new I,ta=new I,na=new I,wo=new I,ia=new I,sh=new I,sa=new I;class Te extends Rt{constructor(e=new tn,t=new St){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){ia.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=o[c],d=r[c];h!==0&&(wo.fromBufferAttribute(d,e),a?ia.addScaledVector(wo,h):ia.addScaledVector(wo.sub(t),h))}t.add(ia)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Qr.copy(i.boundingSphere),Qr.applyMatrix4(r),wi.copy(e.ray).recast(e.near),!(Qr.containsPoint(wi.origin)===!1&&(wi.intersectSphere(Qr,ih)===null||wi.origin.distanceToSquared(ih)>(e.far-e.near)**2))&&(nh.copy(r).invert(),wi.copy(e.ray).applyMatrix4(nh),!(i.boundingBox!==null&&wi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,wi)))}_computeIntersections(e,t,i){let s;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=u.length;g<_;g++){const m=u[g],f=a[m.materialIndex],b=Math.max(m.start,p.start),E=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let v=b,A=E;v<A;v+=3){const w=o.getX(v),C=o.getX(v+1),P=o.getX(v+2);s=ra(this,f,e,i,l,h,d,w,C,P),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,p.start),_=Math.min(o.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const b=o.getX(m),E=o.getX(m+1),v=o.getX(m+2);s=ra(this,a,e,i,l,h,d,b,E,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,_=u.length;g<_;g++){const m=u[g],f=a[m.materialIndex],b=Math.max(m.start,p.start),E=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let v=b,A=E;v<A;v+=3){const w=v,C=v+1,P=v+2;s=ra(this,f,e,i,l,h,d,w,C,P),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,p.start),_=Math.min(c.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const b=m,E=m+1,v=m+2;s=ra(this,a,e,i,l,h,d,b,E,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function up(n,e,t,i,s,r,a,o){let c;if(e.side===en?c=i.intersectTriangle(a,r,s,!0,o):c=i.intersectTriangle(s,r,a,e.side===vi,o),c===null)return null;sa.copy(o),sa.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(sa);return l<t.near||l>t.far?null:{distance:l,point:sa.clone(),object:n}}function ra(n,e,t,i,s,r,a,o,c,l){n.getVertexPosition(o,ea),n.getVertexPosition(c,ta),n.getVertexPosition(l,na);const h=up(n,e,t,i,ea,ta,na,sh);if(h){const d=new I;cn.getBarycoord(sh,ea,ta,na,d),s&&(h.uv=cn.getInterpolatedAttribute(s,o,c,l,d,new Le)),r&&(h.uv1=cn.getInterpolatedAttribute(r,o,c,l,d,new Le)),a&&(h.normal=cn.getInterpolatedAttribute(a,o,c,l,d,new I),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:c,c:l,normal:new I,materialIndex:0};cn.getNormal(ea,ta,na,u.normal),h.face=u,h.barycoord=d}return h}class On extends tn{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],h=[],d=[];let u=0,p=0;g("z","y","x",-1,-1,i,t,e,a,r,0),g("z","y","x",1,-1,i,t,-e,a,r,1),g("x","z","y",1,1,e,i,t,s,a,2),g("x","z","y",1,-1,e,i,-t,s,a,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new xt(l,3)),this.setAttribute("normal",new xt(h,3)),this.setAttribute("uv",new xt(d,2));function g(_,m,f,b,E,v,A,w,C,P,S){const M=v/C,D=A/P,z=v/2,H=A/2,W=w/2,Y=C+1,X=P+1;let ne=0,G=0;const ae=new I;for(let he=0;he<X;he++){const be=he*D-H;for(let Be=0;Be<Y;Be++){const st=Be*M-z;ae[_]=st*b,ae[m]=be*E,ae[f]=W,l.push(ae.x,ae.y,ae.z),ae[_]=0,ae[m]=0,ae[f]=w>0?1:-1,h.push(ae.x,ae.y,ae.z),d.push(Be/C),d.push(1-he/P),ne+=1}}for(let he=0;he<P;he++)for(let be=0;be<C;be++){const Be=u+be+Y*he,st=u+be+Y*(he+1),ct=u+(be+1)+Y*(he+1),Ke=u+(be+1)+Y*he;c.push(Be,st,Ke),c.push(st,ct,Ke),G+=6}o.addGroup(p,G,S),p+=G,u+=ne}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new On(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Us(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Yt(n){const e={};for(let t=0;t<n.length;t++){const i=Us(n[t]);for(const s in i)e[s]=i[s]}return e}function fp(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Od(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ye.workingColorSpace}const pp={clone:Us,merge:Yt};var mp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,gp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class yi extends Ji{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=mp,this.fragmentShader=gp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Us(e.uniforms),this.uniformsGroups=fp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Bd extends Rt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new lt,this.projectionMatrix=new lt,this.projectionMatrixInverse=new lt,this.coordinateSystem=Nn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ui=new I,rh=new Le,ah=new Le;class ln extends Bd{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=wr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ts*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return wr*2*Math.atan(Math.tan(Ts*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){ui.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ui.x,ui.y).multiplyScalar(-e/ui.z),ui.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ui.x,ui.y).multiplyScalar(-e/ui.z)}getViewSize(e,t){return this.getViewBounds(e,rh,ah),t.subVectors(ah,rh)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ts*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*i/l,s*=a.width/c,i*=a.height/l}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ds=-90,us=1;class _p extends Rt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new ln(ds,us,e,t);s.layers=this.layers,this.add(s);const r=new ln(ds,us,e,t);r.layers=this.layers,this.add(r);const a=new ln(ds,us,e,t);a.layers=this.layers,this.add(a);const o=new ln(ds,us,e,t);o.layers=this.layers,this.add(o);const c=new ln(ds,us,e,t);c.layers=this.layers,this.add(c);const l=new ln(ds,us,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,c]=t;for(const l of t)this.remove(l);if(e===Nn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===za)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,a),e.setRenderTarget(i,2,s),e.render(t,o),e.setRenderTarget(i,3,s),e.render(t,c),e.setRenderTarget(i,4,s),e.render(t,l),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,s),e.render(t,h),e.setRenderTarget(d,u,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Hd extends Nt{constructor(e=[],t=Ds,i,s,r,a,o,c,l,h){super(e,t,i,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class xp extends $i{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Hd(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new On(5,5,5),r=new yi({name:"CubemapFromEquirect",uniforms:Us(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:en,blending:gi});r.uniforms.tEquirect.value=t;const a=new Te(s,r),o=t.minFilter;return t.minFilter===Bi&&(t.minFilter=Un),new _p(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}}class Bt extends Rt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const vp={type:"move"};class Ao{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Bt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Bt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Bt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,i),f=this._getHandJoint(l,_);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],u=h.position.distanceTo(d.position),p=.02,g=.005;l.inputState.pinching&&u>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&u<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(vp)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Bt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class ac{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new Ge(e),this.near=t,this.far=i}clone(){return new ac(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class yp extends Rt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new zn,this.environmentIntensity=1,this.environmentRotation=new zn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Mp{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Nl,this.updateRanges=[],this.version=0,this.uuid=ii()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ii()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ii()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Xt=new I;class Oa{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Xt.fromBufferAttribute(this,t),Xt.applyMatrix4(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Xt.fromBufferAttribute(this,t),Xt.applyNormalMatrix(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Xt.fromBufferAttribute(this,t),Xt.transformDirection(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=Tn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ze(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=Ze(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ze(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ze(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ze(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Tn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Tn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Tn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Tn(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ze(t,this.array),i=Ze(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ze(t,this.array),i=Ze(i,this.array),s=Ze(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ze(t,this.array),i=Ze(i,this.array),s=Ze(s,this.array),r=Ze(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Cn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Oa(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Ba extends Ji{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ge(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let fs;const Zs=new I,ps=new I,ms=new I,gs=new Le,Js=new Le,Gd=new lt,aa=new I,Qs=new I,oa=new I,oh=new Le,Ro=new Le,lh=new Le;class Fl extends Rt{constructor(e=new Ba){if(super(),this.isSprite=!0,this.type="Sprite",fs===void 0){fs=new tn;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Mp(t,5);fs.setIndex([0,1,2,0,2,3]),fs.setAttribute("position",new Oa(i,3,0,!1)),fs.setAttribute("uv",new Oa(i,2,3,!1))}this.geometry=fs,this.material=e,this.center=new Le(.5,.5),this.count=1}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ps.setFromMatrixScale(this.matrixWorld),Gd.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ms.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ps.multiplyScalar(-ms.z);const i=this.material.rotation;let s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));const a=this.center;la(aa.set(-.5,-.5,0),ms,a,ps,s,r),la(Qs.set(.5,-.5,0),ms,a,ps,s,r),la(oa.set(.5,.5,0),ms,a,ps,s,r),oh.set(0,0),Ro.set(1,0),lh.set(1,1);let o=e.ray.intersectTriangle(aa,Qs,oa,!1,Zs);if(o===null&&(la(Qs.set(-.5,.5,0),ms,a,ps,s,r),Ro.set(0,1),o=e.ray.intersectTriangle(aa,oa,Qs,!1,Zs),o===null))return;const c=e.ray.origin.distanceTo(Zs);c<e.near||c>e.far||t.push({distance:c,point:Zs.clone(),uv:cn.getInterpolation(Zs,aa,Qs,oa,oh,Ro,lh,new Le),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function la(n,e,t,i,s,r){gs.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(Js.x=r*gs.x-s*gs.y,Js.y=s*gs.x+r*gs.y):Js.copy(gs),n.copy(e),n.x+=Js.x,n.y+=Js.y,n.applyMatrix4(Gd)}const Co=new I,Sp=new I,bp=new ke;class Di{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=Co.subVectors(i,t).cross(Sp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Co),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||bp.getNormalMatrix(e),s=this.coplanarPoint(Co).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ai=new Ja,Ep=new Le(.5,.5),ca=new I;class oc{constructor(e=new Di,t=new Di,i=new Di,s=new Di,r=new Di,a=new Di){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Nn,i=!1){const s=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],l=r[3],h=r[4],d=r[5],u=r[6],p=r[7],g=r[8],_=r[9],m=r[10],f=r[11],b=r[12],E=r[13],v=r[14],A=r[15];if(s[0].setComponents(l-a,p-h,f-g,A-b).normalize(),s[1].setComponents(l+a,p+h,f+g,A+b).normalize(),s[2].setComponents(l+o,p+d,f+_,A+E).normalize(),s[3].setComponents(l-o,p-d,f-_,A-E).normalize(),i)s[4].setComponents(c,u,m,v).normalize(),s[5].setComponents(l-c,p-u,f-m,A-v).normalize();else if(s[4].setComponents(l-c,p-u,f-m,A-v).normalize(),t===Nn)s[5].setComponents(l+c,p+u,f+m,A+v).normalize();else if(t===za)s[5].setComponents(c,u,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ai.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ai.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ai)}intersectsSprite(e){Ai.center.set(0,0,0);const t=Ep.distanceTo(e.center);return Ai.radius=.7071067811865476+t,Ai.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ai)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(ca.x=s.normal.x>0?e.max.x:e.min.x,ca.y=s.normal.y>0?e.max.y:e.min.y,ca.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ca)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Vd extends Ji{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ge(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ha=new I,Ga=new I,ch=new lt,er=new sc,ha=new Ja,Po=new I,hh=new I;class Tp extends Rt{constructor(e=new tn,t=new Vd){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)Ha.fromBufferAttribute(t,s-1),Ga.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Ha.distanceTo(Ga);e.setAttribute("lineDistance",new xt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ha.copy(i.boundingSphere),ha.applyMatrix4(s),ha.radius+=r,e.ray.intersectsSphere(ha)===!1)return;ch.copy(s).invert(),er.copy(e.ray).applyMatrix4(ch);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=i.index,u=i.attributes.position;if(h!==null){const p=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let _=p,m=g-1;_<m;_+=l){const f=h.getX(_),b=h.getX(_+1),E=da(this,e,er,c,f,b,_);E&&t.push(E)}if(this.isLineLoop){const _=h.getX(g-1),m=h.getX(p),f=da(this,e,er,c,_,m,g-1);f&&t.push(f)}}else{const p=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let _=p,m=g-1;_<m;_+=l){const f=da(this,e,er,c,_,_+1,_);f&&t.push(f)}if(this.isLineLoop){const _=da(this,e,er,c,g-1,p,g-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function da(n,e,t,i,s,r,a){const o=n.geometry.attributes.position;if(Ha.fromBufferAttribute(o,s),Ga.fromBufferAttribute(o,r),t.distanceSqToSegment(Ha,Ga,Po,hh)>i)return;Po.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(Po);if(!(l<e.near||l>e.far))return{distance:l,point:hh.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}const dh=new I,uh=new I;class wp extends Tp{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)dh.fromBufferAttribute(t,s),uh.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+dh.distanceTo(uh);e.setAttribute("lineDistance",new xt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Mi extends Nt{constructor(e,t,i,s,r,a,o,c,l){super(e,t,i,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Wd extends Nt{constructor(e,t,i=Yi,s,r,a,o=Rn,c=Rn,l,h=Er,d=1){if(h!==Er&&h!==Tr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:t,depth:d};super(u,s,r,a,o,c,h,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ic(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Xd extends Nt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ki extends tn{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);const r=[],a=[],o=[],c=[],l=new I,h=new Le;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let d=0,u=3;d<=t;d++,u+=3){const p=i+d/t*s;l.x=e*Math.cos(p),l.y=e*Math.sin(p),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[u]/e+1)/2,h.y=(a[u+1]/e+1)/2,c.push(h.x,h.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new xt(a,3)),this.setAttribute("normal",new xt(o,3)),this.setAttribute("uv",new xt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ki(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Kt extends tn{constructor(e=1,t=1,i=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const h=[],d=[],u=[],p=[];let g=0;const _=[],m=i/2;let f=0;b(),a===!1&&(e>0&&E(!0),t>0&&E(!1)),this.setIndex(h),this.setAttribute("position",new xt(d,3)),this.setAttribute("normal",new xt(u,3)),this.setAttribute("uv",new xt(p,2));function b(){const v=new I,A=new I;let w=0;const C=(t-e)/i;for(let P=0;P<=r;P++){const S=[],M=P/r,D=M*(t-e)+e;for(let z=0;z<=s;z++){const H=z/s,W=H*c+o,Y=Math.sin(W),X=Math.cos(W);A.x=D*Y,A.y=-M*i+m,A.z=D*X,d.push(A.x,A.y,A.z),v.set(Y,C,X).normalize(),u.push(v.x,v.y,v.z),p.push(H,1-M),S.push(g++)}_.push(S)}for(let P=0;P<s;P++)for(let S=0;S<r;S++){const M=_[S][P],D=_[S+1][P],z=_[S+1][P+1],H=_[S][P+1];(e>0||S!==0)&&(h.push(M,D,H),w+=3),(t>0||S!==r-1)&&(h.push(D,z,H),w+=3)}l.addGroup(f,w,0),f+=w}function E(v){const A=g,w=new Le,C=new I;let P=0;const S=v===!0?e:t,M=v===!0?1:-1;for(let z=1;z<=s;z++)d.push(0,m*M,0),u.push(0,M,0),p.push(.5,.5),g++;const D=g;for(let z=0;z<=s;z++){const W=z/s*c+o,Y=Math.cos(W),X=Math.sin(W);C.x=S*X,C.y=m*M,C.z=S*Y,d.push(C.x,C.y,C.z),u.push(0,M,0),w.x=Y*.5+.5,w.y=X*.5*M+.5,p.push(w.x,w.y),g++}for(let z=0;z<s;z++){const H=A+z,W=D+z;v===!0?h.push(W,W+1,H):h.push(W+1,W,H),P+=3}l.addGroup(f,P,v===!0?1:2),f+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Kt(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class lc extends Kt{constructor(e=1,t=1,i=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,i,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new lc(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}const ua=new I,fa=new I,Do=new I,pa=new cn;class Ap extends tn{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const s=Math.pow(10,4),r=Math.cos(Ts*t),a=e.getIndex(),o=e.getAttribute("position"),c=a?a.count:o.count,l=[0,0,0],h=["a","b","c"],d=new Array(3),u={},p=[];for(let g=0;g<c;g+=3){a?(l[0]=a.getX(g),l[1]=a.getX(g+1),l[2]=a.getX(g+2)):(l[0]=g,l[1]=g+1,l[2]=g+2);const{a:_,b:m,c:f}=pa;if(_.fromBufferAttribute(o,l[0]),m.fromBufferAttribute(o,l[1]),f.fromBufferAttribute(o,l[2]),pa.getNormal(Do),d[0]=`${Math.round(_.x*s)},${Math.round(_.y*s)},${Math.round(_.z*s)}`,d[1]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,d[2]=`${Math.round(f.x*s)},${Math.round(f.y*s)},${Math.round(f.z*s)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let b=0;b<3;b++){const E=(b+1)%3,v=d[b],A=d[E],w=pa[h[b]],C=pa[h[E]],P=`${v}_${A}`,S=`${A}_${v}`;S in u&&u[S]?(Do.dot(u[S].normal)<=r&&(p.push(w.x,w.y,w.z),p.push(C.x,C.y,C.z)),u[S]=null):P in u||(u[P]={index0:l[b],index1:l[E],normal:Do.clone()})}}for(const g in u)if(u[g]){const{index0:_,index1:m}=u[g];ua.fromBufferAttribute(o,_),fa.fromBufferAttribute(o,m),p.push(ua.x,ua.y,ua.z),p.push(fa.x,fa.y,fa.z)}this.setAttribute("position",new xt(p,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Vt extends tn{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(i),c=Math.floor(s),l=o+1,h=c+1,d=e/o,u=t/c,p=[],g=[],_=[],m=[];for(let f=0;f<h;f++){const b=f*u-a;for(let E=0;E<l;E++){const v=E*d-r;g.push(v,-b,0),_.push(0,0,1),m.push(E/o),m.push(1-f/c)}}for(let f=0;f<c;f++)for(let b=0;b<o;b++){const E=b+l*f,v=b+l*(f+1),A=b+1+l*(f+1),w=b+1+l*f;p.push(E,v,w),p.push(v,A,w)}this.setIndex(p),this.setAttribute("position",new xt(g,3)),this.setAttribute("normal",new xt(_,3)),this.setAttribute("uv",new xt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vt(e.width,e.height,e.widthSegments,e.heightSegments)}}class ji extends tn{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const c=Math.min(a+o,Math.PI);let l=0;const h=[],d=new I,u=new I,p=[],g=[],_=[],m=[];for(let f=0;f<=i;f++){const b=[],E=f/i;let v=0;f===0&&a===0?v=.5/t:f===i&&c===Math.PI&&(v=-.5/t);for(let A=0;A<=t;A++){const w=A/t;d.x=-e*Math.cos(s+w*r)*Math.sin(a+E*o),d.y=e*Math.cos(a+E*o),d.z=e*Math.sin(s+w*r)*Math.sin(a+E*o),g.push(d.x,d.y,d.z),u.copy(d).normalize(),_.push(u.x,u.y,u.z),m.push(w+v,1-E),b.push(l++)}h.push(b)}for(let f=0;f<i;f++)for(let b=0;b<t;b++){const E=h[f][b+1],v=h[f][b],A=h[f+1][b],w=h[f+1][b+1];(f!==0||a>0)&&p.push(E,v,w),(f!==i-1||c<Math.PI)&&p.push(v,A,w)}this.setIndex(p),this.setAttribute("position",new xt(g,3)),this.setAttribute("normal",new xt(_,3)),this.setAttribute("uv",new xt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ji(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class cc extends tn{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);const a=[],o=[],c=[],l=[],h=new I,d=new I,u=new I;for(let p=0;p<=i;p++)for(let g=0;g<=s;g++){const _=g/s*r,m=p/i*Math.PI*2;d.x=(e+t*Math.cos(m))*Math.cos(_),d.y=(e+t*Math.cos(m))*Math.sin(_),d.z=t*Math.sin(m),o.push(d.x,d.y,d.z),h.x=e*Math.cos(_),h.y=e*Math.sin(_),u.subVectors(d,h).normalize(),c.push(u.x,u.y,u.z),l.push(g/s),l.push(p/i)}for(let p=1;p<=i;p++)for(let g=1;g<=s;g++){const _=(s+1)*p+g-1,m=(s+1)*(p-1)+g-1,f=(s+1)*(p-1)+g,b=(s+1)*p+g;a.push(_,m,b),a.push(m,f,b)}this.setIndex(a),this.setAttribute("position",new xt(o,3)),this.setAttribute("normal",new xt(c,3)),this.setAttribute("uv",new xt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cc(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class ai extends Ji{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ge(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ld,this.normalScale=new Le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class qd extends Ji{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=bf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Rp extends Ji{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Lo={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class Cp{constructor(e,t,i){const s=this;let r=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.abortController=new AbortController,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,d){return l.push(h,d),this},this.removeHandler=function(h){const d=l.indexOf(h);return d!==-1&&l.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=l.length;d<u;d+=2){const p=l[d],g=l[d+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const Pp=new Cp;class hc{constructor(e){this.manager=e!==void 0?e:Pp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}hc.DEFAULT_MATERIAL_NAME="__DEFAULT";const _s=new WeakMap;class Dp extends hc{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=Lo.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let d=_s.get(a);d===void 0&&(d=[],_s.set(a,d)),d.push({onLoad:t,onError:s})}return a}const o=Ar("img");function c(){h(),t&&t(this);const d=_s.get(this)||[];for(let u=0;u<d.length;u++){const p=d[u];p.onLoad&&p.onLoad(this)}_s.delete(this),r.manager.itemEnd(e)}function l(d){h(),s&&s(d),Lo.remove(`image:${e}`);const u=_s.get(this)||[];for(let p=0;p<u.length;p++){const g=u[p];g.onError&&g.onError(d)}_s.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Lo.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}}class Yd extends hc{constructor(e){super(e)}load(e,t,i,s){const r=new Nt,a=new Dp(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}}class dc extends Rt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ge(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Lp extends dc{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Rt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ge(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Io=new lt,fh=new I,ph=new I;class $d{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Le(512,512),this.mapType=kn,this.map=null,this.mapPass=null,this.matrix=new lt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new oc,this._frameExtents=new Le(1,1),this._viewportCount=1,this._viewports=[new nt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;fh.setFromMatrixPosition(e.matrixWorld),t.position.copy(fh),ph.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ph),t.updateMatrixWorld(),Io.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Io,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Io)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const mh=new lt,tr=new I,Uo=new I;class Ip extends $d{constructor(){super(new ln(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Le(4,2),this._viewportCount=6,this._viewports=[new nt(2,1,1,1),new nt(0,1,1,1),new nt(3,1,1,1),new nt(1,1,1,1),new nt(3,0,1,1),new nt(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),tr.setFromMatrixPosition(e.matrixWorld),i.position.copy(tr),Uo.copy(i.position),Uo.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Uo),i.updateMatrixWorld(),s.makeTranslation(-tr.x,-tr.y,-tr.z),mh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(mh,i.coordinateSystem,i.reversedDepth)}}class uc extends dc{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Ip}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Kd extends Bd{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,a=i+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Up extends $d{constructor(){super(new Kd(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Np extends dc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Rt.DEFAULT_UP),this.updateMatrix(),this.target=new Rt,this.shadow=new Up}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Fp extends ln{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class kp{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const gh=new lt;class zp{constructor(e,t,i=0,s=1/0){this.ray=new sc(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new rc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return gh.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(gh),this}intersectObject(e,t=!0,i=[]){return kl(e,this,i,t),i.sort(_h),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)kl(e[s],this,i,t);return i.sort(_h),i}}function _h(n,e){return n.distance-e.distance}function kl(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let a=0,o=r.length;a<o;a++)kl(r[a],e,t,!0)}}function xh(n,e,t,i){const s=Op(i);switch(t){case Ad:return n*e;case Cd:return n*e/s.components*s.byteLength;case Ql:return n*e/s.components*s.byteLength;case Pd:return n*e*2/s.components*s.byteLength;case ec:return n*e*2/s.components*s.byteLength;case Rd:return n*e*3/s.components*s.byteLength;case An:return n*e*4/s.components*s.byteLength;case tc:return n*e*4/s.components*s.byteLength;case Ca:case Pa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Da:case La:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ll:case hl:return Math.max(n,16)*Math.max(e,8)/4;case ol:case cl:return Math.max(n,8)*Math.max(e,8)/2;case dl:case ul:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case fl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case pl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ml:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case gl:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case _l:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case xl:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case vl:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case yl:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Ml:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Sl:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case bl:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case El:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Tl:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case wl:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Al:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Rl:case Cl:case Pl:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Dl:case Ll:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Il:case Ul:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Op(n){switch(n){case kn:case bd:return{byteLength:1,components:1};case Sr:case Ed:case Nr:return{byteLength:2,components:1};case Zl:case Jl:return{byteLength:2,components:4};case Yi:case jl:case ni:return{byteLength:4,components:1};case Td:case wd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Kl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Kl);function jd(){let n=null,e=!1,t=null,i=null;function s(r,a){t(r,a),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function Bp(n){const e=new WeakMap;function t(o,c){const l=o.array,h=o.usage,d=l.byteLength,u=n.createBuffer();n.bindBuffer(c,u),n.bufferData(c,l,h),o.onUploadCallback();let p;if(l instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)p=n.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=n.SHORT;else if(l instanceof Uint32Array)p=n.UNSIGNED_INT;else if(l instanceof Int32Array)p=n.INT;else if(l instanceof Int8Array)p=n.BYTE;else if(l instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,c,l){const h=c.array,d=c.updateRanges;if(n.bindBuffer(l,o),d.length===0)n.bufferSubData(l,0,h);else{d.sort((p,g)=>p.start-g.start);let u=0;for(let p=1;p<d.length;p++){const g=d[u],_=d[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++u,d[u]=_)}d.length=u+1;for(let p=0,g=d.length;p<g;p++){const _=d[p];n.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(n.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var Hp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Gp=`#ifdef USE_ALPHAHASH
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
#endif`,Vp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Wp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Xp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,qp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Yp=`#ifdef USE_AOMAP
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
#endif`,$p=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Kp=`#ifdef USE_BATCHING
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
#endif`,jp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Zp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Jp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Qp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,em=`#ifdef USE_IRIDESCENCE
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
#endif`,tm=`#ifdef USE_BUMPMAP
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
#endif`,nm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,im=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,sm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,rm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,am=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,om=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,lm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,cm=`#if defined( USE_COLOR_ALPHA )
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
#endif`,hm=`#define PI 3.141592653589793
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
} // validated`,dm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,um=`vec3 transformedNormal = objectNormal;
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
#endif`,fm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,pm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,mm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,gm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,_m="gl_FragColor = linearToOutputTexel( gl_FragColor );",xm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,vm=`#ifdef USE_ENVMAP
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
#endif`,ym=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Mm=`#ifdef USE_ENVMAP
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
#endif`,Sm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,bm=`#ifdef USE_ENVMAP
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
#endif`,Em=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Tm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,wm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Am=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Rm=`#ifdef USE_GRADIENTMAP
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
}`,Cm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Pm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Dm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Lm=`uniform bool receiveShadow;
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
#endif`,Im=`#ifdef USE_ENVMAP
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
#endif`,Um=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Nm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Fm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,km=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,zm=`PhysicalMaterial material;
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
#endif`,Om=`struct PhysicalMaterial {
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
}`,Bm=`
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
#endif`,Hm=`#if defined( RE_IndirectDiffuse )
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
#endif`,Gm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Vm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Wm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Xm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ym=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,$m=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Km=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,jm=`#if defined( USE_POINTS_UV )
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
#endif`,Zm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Jm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Qm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,e0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,t0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,n0=`#ifdef USE_MORPHTARGETS
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
#endif`,i0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,s0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,r0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,a0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,o0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,l0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,c0=`#ifdef USE_NORMALMAP
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
#endif`,h0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,d0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,u0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,f0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,p0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,m0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,g0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,_0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,x0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,v0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,y0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,M0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,S0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,b0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,E0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,T0=`float getShadowMask() {
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
}`,w0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,A0=`#ifdef USE_SKINNING
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
#endif`,R0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,C0=`#ifdef USE_SKINNING
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
#endif`,P0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,D0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,L0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,I0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,U0=`#ifdef USE_TRANSMISSION
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
#endif`,N0=`#ifdef USE_TRANSMISSION
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
#endif`,F0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,k0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,z0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,O0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const B0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,H0=`uniform sampler2D t2D;
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
}`,G0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,V0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,W0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,X0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,q0=`#include <common>
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
}`,Y0=`#if DEPTH_PACKING == 3200
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
}`,$0=`#define DISTANCE
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
}`,K0=`#define DISTANCE
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
}`,j0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Z0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,J0=`uniform float scale;
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
}`,Q0=`uniform vec3 diffuse;
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
}`,eg=`#include <common>
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
}`,tg=`uniform vec3 diffuse;
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
}`,ng=`#define LAMBERT
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
}`,ig=`#define LAMBERT
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
}`,sg=`#define MATCAP
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
}`,rg=`#define MATCAP
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
}`,ag=`#define NORMAL
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
}`,og=`#define NORMAL
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
}`,lg=`#define PHONG
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
}`,cg=`#define PHONG
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
}`,hg=`#define STANDARD
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
}`,dg=`#define STANDARD
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
}`,ug=`#define TOON
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
}`,fg=`#define TOON
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
}`,pg=`uniform float size;
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
}`,mg=`uniform vec3 diffuse;
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
}`,gg=`#include <common>
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
}`,_g=`uniform vec3 color;
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
}`,xg=`uniform float rotation;
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
}`,vg=`uniform vec3 diffuse;
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
}`,Oe={alphahash_fragment:Hp,alphahash_pars_fragment:Gp,alphamap_fragment:Vp,alphamap_pars_fragment:Wp,alphatest_fragment:Xp,alphatest_pars_fragment:qp,aomap_fragment:Yp,aomap_pars_fragment:$p,batching_pars_vertex:Kp,batching_vertex:jp,begin_vertex:Zp,beginnormal_vertex:Jp,bsdfs:Qp,iridescence_fragment:em,bumpmap_pars_fragment:tm,clipping_planes_fragment:nm,clipping_planes_pars_fragment:im,clipping_planes_pars_vertex:sm,clipping_planes_vertex:rm,color_fragment:am,color_pars_fragment:om,color_pars_vertex:lm,color_vertex:cm,common:hm,cube_uv_reflection_fragment:dm,defaultnormal_vertex:um,displacementmap_pars_vertex:fm,displacementmap_vertex:pm,emissivemap_fragment:mm,emissivemap_pars_fragment:gm,colorspace_fragment:_m,colorspace_pars_fragment:xm,envmap_fragment:vm,envmap_common_pars_fragment:ym,envmap_pars_fragment:Mm,envmap_pars_vertex:Sm,envmap_physical_pars_fragment:Im,envmap_vertex:bm,fog_vertex:Em,fog_pars_vertex:Tm,fog_fragment:wm,fog_pars_fragment:Am,gradientmap_pars_fragment:Rm,lightmap_pars_fragment:Cm,lights_lambert_fragment:Pm,lights_lambert_pars_fragment:Dm,lights_pars_begin:Lm,lights_toon_fragment:Um,lights_toon_pars_fragment:Nm,lights_phong_fragment:Fm,lights_phong_pars_fragment:km,lights_physical_fragment:zm,lights_physical_pars_fragment:Om,lights_fragment_begin:Bm,lights_fragment_maps:Hm,lights_fragment_end:Gm,logdepthbuf_fragment:Vm,logdepthbuf_pars_fragment:Wm,logdepthbuf_pars_vertex:Xm,logdepthbuf_vertex:qm,map_fragment:Ym,map_pars_fragment:$m,map_particle_fragment:Km,map_particle_pars_fragment:jm,metalnessmap_fragment:Zm,metalnessmap_pars_fragment:Jm,morphinstance_vertex:Qm,morphcolor_vertex:e0,morphnormal_vertex:t0,morphtarget_pars_vertex:n0,morphtarget_vertex:i0,normal_fragment_begin:s0,normal_fragment_maps:r0,normal_pars_fragment:a0,normal_pars_vertex:o0,normal_vertex:l0,normalmap_pars_fragment:c0,clearcoat_normal_fragment_begin:h0,clearcoat_normal_fragment_maps:d0,clearcoat_pars_fragment:u0,iridescence_pars_fragment:f0,opaque_fragment:p0,packing:m0,premultiplied_alpha_fragment:g0,project_vertex:_0,dithering_fragment:x0,dithering_pars_fragment:v0,roughnessmap_fragment:y0,roughnessmap_pars_fragment:M0,shadowmap_pars_fragment:S0,shadowmap_pars_vertex:b0,shadowmap_vertex:E0,shadowmask_pars_fragment:T0,skinbase_vertex:w0,skinning_pars_vertex:A0,skinning_vertex:R0,skinnormal_vertex:C0,specularmap_fragment:P0,specularmap_pars_fragment:D0,tonemapping_fragment:L0,tonemapping_pars_fragment:I0,transmission_fragment:U0,transmission_pars_fragment:N0,uv_pars_fragment:F0,uv_pars_vertex:k0,uv_vertex:z0,worldpos_vertex:O0,background_vert:B0,background_frag:H0,backgroundCube_vert:G0,backgroundCube_frag:V0,cube_vert:W0,cube_frag:X0,depth_vert:q0,depth_frag:Y0,distanceRGBA_vert:$0,distanceRGBA_frag:K0,equirect_vert:j0,equirect_frag:Z0,linedashed_vert:J0,linedashed_frag:Q0,meshbasic_vert:eg,meshbasic_frag:tg,meshlambert_vert:ng,meshlambert_frag:ig,meshmatcap_vert:sg,meshmatcap_frag:rg,meshnormal_vert:ag,meshnormal_frag:og,meshphong_vert:lg,meshphong_frag:cg,meshphysical_vert:hg,meshphysical_frag:dg,meshtoon_vert:ug,meshtoon_frag:fg,points_vert:pg,points_frag:mg,shadow_vert:gg,shadow_frag:_g,sprite_vert:xg,sprite_frag:vg},re={common:{diffuse:{value:new Ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ke}},envmap:{envMap:{value:null},envMapRotation:{value:new ke},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ke},normalScale:{value:new Le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0},uvTransform:{value:new ke}},sprite:{diffuse:{value:new Ge(16777215)},opacity:{value:1},center:{value:new Le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}}},In={basic:{uniforms:Yt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.fog]),vertexShader:Oe.meshbasic_vert,fragmentShader:Oe.meshbasic_frag},lambert:{uniforms:Yt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new Ge(0)}}]),vertexShader:Oe.meshlambert_vert,fragmentShader:Oe.meshlambert_frag},phong:{uniforms:Yt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new Ge(0)},specular:{value:new Ge(1118481)},shininess:{value:30}}]),vertexShader:Oe.meshphong_vert,fragmentShader:Oe.meshphong_frag},standard:{uniforms:Yt([re.common,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.roughnessmap,re.metalnessmap,re.fog,re.lights,{emissive:{value:new Ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag},toon:{uniforms:Yt([re.common,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.gradientmap,re.fog,re.lights,{emissive:{value:new Ge(0)}}]),vertexShader:Oe.meshtoon_vert,fragmentShader:Oe.meshtoon_frag},matcap:{uniforms:Yt([re.common,re.bumpmap,re.normalmap,re.displacementmap,re.fog,{matcap:{value:null}}]),vertexShader:Oe.meshmatcap_vert,fragmentShader:Oe.meshmatcap_frag},points:{uniforms:Yt([re.points,re.fog]),vertexShader:Oe.points_vert,fragmentShader:Oe.points_frag},dashed:{uniforms:Yt([re.common,re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Oe.linedashed_vert,fragmentShader:Oe.linedashed_frag},depth:{uniforms:Yt([re.common,re.displacementmap]),vertexShader:Oe.depth_vert,fragmentShader:Oe.depth_frag},normal:{uniforms:Yt([re.common,re.bumpmap,re.normalmap,re.displacementmap,{opacity:{value:1}}]),vertexShader:Oe.meshnormal_vert,fragmentShader:Oe.meshnormal_frag},sprite:{uniforms:Yt([re.sprite,re.fog]),vertexShader:Oe.sprite_vert,fragmentShader:Oe.sprite_frag},background:{uniforms:{uvTransform:{value:new ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Oe.background_vert,fragmentShader:Oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ke}},vertexShader:Oe.backgroundCube_vert,fragmentShader:Oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Oe.cube_vert,fragmentShader:Oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Oe.equirect_vert,fragmentShader:Oe.equirect_frag},distanceRGBA:{uniforms:Yt([re.common,re.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Oe.distanceRGBA_vert,fragmentShader:Oe.distanceRGBA_frag},shadow:{uniforms:Yt([re.lights,re.fog,{color:{value:new Ge(0)},opacity:{value:1}}]),vertexShader:Oe.shadow_vert,fragmentShader:Oe.shadow_frag}};In.physical={uniforms:Yt([In.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ke},clearcoatNormalScale:{value:new Le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ke},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ke},sheen:{value:0},sheenColor:{value:new Ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ke},transmissionSamplerSize:{value:new Le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ke},attenuationDistance:{value:0},attenuationColor:{value:new Ge(0)},specularColor:{value:new Ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ke},anisotropyVector:{value:new Le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ke}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag};const ma={r:0,b:0,g:0},Ri=new zn,yg=new lt;function Mg(n,e,t,i,s,r,a){const o=new Ge(0);let c=r===!0?0:1,l,h,d=null,u=0,p=null;function g(E){let v=E.isScene===!0?E.background:null;return v&&v.isTexture&&(v=(E.backgroundBlurriness>0?t:e).get(v)),v}function _(E){let v=!1;const A=g(E);A===null?f(o,c):A&&A.isColor&&(f(A,1),v=!0);const w=n.xr.getEnvironmentBlendMode();w==="additive"?i.buffers.color.setClear(0,0,0,1,a):w==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(E,v){const A=g(v);A&&(A.isCubeTexture||A.mapping===Za)?(h===void 0&&(h=new Te(new On(1,1,1),new yi({name:"BackgroundCubeMaterial",uniforms:Us(In.backgroundCube.uniforms),vertexShader:In.backgroundCube.vertexShader,fragmentShader:In.backgroundCube.fragmentShader,side:en,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(w,C,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Ri.copy(v.backgroundRotation),Ri.x*=-1,Ri.y*=-1,Ri.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Ri.y*=-1,Ri.z*=-1),h.material.uniforms.envMap.value=A,h.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(yg.makeRotationFromEuler(Ri)),h.material.toneMapped=Ye.getTransfer(A.colorSpace)!==et,(d!==A||u!==A.version||p!==n.toneMapping)&&(h.material.needsUpdate=!0,d=A,u=A.version,p=n.toneMapping),h.layers.enableAll(),E.unshift(h,h.geometry,h.material,0,0,null)):A&&A.isTexture&&(l===void 0&&(l=new Te(new Vt(2,2),new yi({name:"BackgroundMaterial",uniforms:Us(In.background.uniforms),vertexShader:In.background.vertexShader,fragmentShader:In.background.fragmentShader,side:vi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=A,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=Ye.getTransfer(A.colorSpace)!==et,A.matrixAutoUpdate===!0&&A.updateMatrix(),l.material.uniforms.uvTransform.value.copy(A.matrix),(d!==A||u!==A.version||p!==n.toneMapping)&&(l.material.needsUpdate=!0,d=A,u=A.version,p=n.toneMapping),l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null))}function f(E,v){E.getRGB(ma,Od(n)),i.buffers.color.setClear(ma.r,ma.g,ma.b,v,a)}function b(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(E,v=1){o.set(E),c=v,f(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(E){c=E,f(o,c)},render:_,addToRenderList:m,dispose:b}}function Sg(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=u(null);let r=s,a=!1;function o(M,D,z,H,W){let Y=!1;const X=d(H,z,D);r!==X&&(r=X,l(r.object)),Y=p(M,H,z,W),Y&&g(M,H,z,W),W!==null&&e.update(W,n.ELEMENT_ARRAY_BUFFER),(Y||a)&&(a=!1,v(M,D,z,H),W!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function c(){return n.createVertexArray()}function l(M){return n.bindVertexArray(M)}function h(M){return n.deleteVertexArray(M)}function d(M,D,z){const H=z.wireframe===!0;let W=i[M.id];W===void 0&&(W={},i[M.id]=W);let Y=W[D.id];Y===void 0&&(Y={},W[D.id]=Y);let X=Y[H];return X===void 0&&(X=u(c()),Y[H]=X),X}function u(M){const D=[],z=[],H=[];for(let W=0;W<t;W++)D[W]=0,z[W]=0,H[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:z,attributeDivisors:H,object:M,attributes:{},index:null}}function p(M,D,z,H){const W=r.attributes,Y=D.attributes;let X=0;const ne=z.getAttributes();for(const G in ne)if(ne[G].location>=0){const he=W[G];let be=Y[G];if(be===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(be=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(be=M.instanceColor)),he===void 0||he.attribute!==be||be&&he.data!==be.data)return!0;X++}return r.attributesNum!==X||r.index!==H}function g(M,D,z,H){const W={},Y=D.attributes;let X=0;const ne=z.getAttributes();for(const G in ne)if(ne[G].location>=0){let he=Y[G];he===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(he=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(he=M.instanceColor));const be={};be.attribute=he,he&&he.data&&(be.data=he.data),W[G]=be,X++}r.attributes=W,r.attributesNum=X,r.index=H}function _(){const M=r.newAttributes;for(let D=0,z=M.length;D<z;D++)M[D]=0}function m(M){f(M,0)}function f(M,D){const z=r.newAttributes,H=r.enabledAttributes,W=r.attributeDivisors;z[M]=1,H[M]===0&&(n.enableVertexAttribArray(M),H[M]=1),W[M]!==D&&(n.vertexAttribDivisor(M,D),W[M]=D)}function b(){const M=r.newAttributes,D=r.enabledAttributes;for(let z=0,H=D.length;z<H;z++)D[z]!==M[z]&&(n.disableVertexAttribArray(z),D[z]=0)}function E(M,D,z,H,W,Y,X){X===!0?n.vertexAttribIPointer(M,D,z,W,Y):n.vertexAttribPointer(M,D,z,H,W,Y)}function v(M,D,z,H){_();const W=H.attributes,Y=z.getAttributes(),X=D.defaultAttributeValues;for(const ne in Y){const G=Y[ne];if(G.location>=0){let ae=W[ne];if(ae===void 0&&(ne==="instanceMatrix"&&M.instanceMatrix&&(ae=M.instanceMatrix),ne==="instanceColor"&&M.instanceColor&&(ae=M.instanceColor)),ae!==void 0){const he=ae.normalized,be=ae.itemSize,Be=e.get(ae);if(Be===void 0)continue;const st=Be.buffer,ct=Be.type,Ke=Be.bytesPerElement,$=ct===n.INT||ct===n.UNSIGNED_INT||ae.gpuType===jl;if(ae.isInterleavedBufferAttribute){const Z=ae.data,fe=Z.stride,Ie=ae.offset;if(Z.isInstancedInterleavedBuffer){for(let Se=0;Se<G.locationSize;Se++)f(G.location+Se,Z.meshPerAttribute);M.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let Se=0;Se<G.locationSize;Se++)m(G.location+Se);n.bindBuffer(n.ARRAY_BUFFER,st);for(let Se=0;Se<G.locationSize;Se++)E(G.location+Se,be/G.locationSize,ct,he,fe*Ke,(Ie+be/G.locationSize*Se)*Ke,$)}else{if(ae.isInstancedBufferAttribute){for(let Z=0;Z<G.locationSize;Z++)f(G.location+Z,ae.meshPerAttribute);M.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let Z=0;Z<G.locationSize;Z++)m(G.location+Z);n.bindBuffer(n.ARRAY_BUFFER,st);for(let Z=0;Z<G.locationSize;Z++)E(G.location+Z,be/G.locationSize,ct,he,be*Ke,be/G.locationSize*Z*Ke,$)}}else if(X!==void 0){const he=X[ne];if(he!==void 0)switch(he.length){case 2:n.vertexAttrib2fv(G.location,he);break;case 3:n.vertexAttrib3fv(G.location,he);break;case 4:n.vertexAttrib4fv(G.location,he);break;default:n.vertexAttrib1fv(G.location,he)}}}}b()}function A(){P();for(const M in i){const D=i[M];for(const z in D){const H=D[z];for(const W in H)h(H[W].object),delete H[W];delete D[z]}delete i[M]}}function w(M){if(i[M.id]===void 0)return;const D=i[M.id];for(const z in D){const H=D[z];for(const W in H)h(H[W].object),delete H[W];delete D[z]}delete i[M.id]}function C(M){for(const D in i){const z=i[D];if(z[M.id]===void 0)continue;const H=z[M.id];for(const W in H)h(H[W].object),delete H[W];delete z[M.id]}}function P(){S(),a=!0,r!==s&&(r=s,l(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:P,resetDefaultState:S,dispose:A,releaseStatesOfGeometry:w,releaseStatesOfProgram:C,initAttributes:_,enableAttribute:m,disableUnusedAttributes:b}}function bg(n,e,t){let i;function s(l){i=l}function r(l,h){n.drawArrays(i,l,h),t.update(h,i,1)}function a(l,h,d){d!==0&&(n.drawArraysInstanced(i,l,h,d),t.update(h,i,d))}function o(l,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,h,0,d);let p=0;for(let g=0;g<d;g++)p+=h[g];t.update(p,i,1)}function c(l,h,d,u){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<l.length;g++)a(l[g],h[g],u[g]);else{p.multiDrawArraysInstancedWEBGL(i,l,0,h,0,u,0,d);let g=0;for(let _=0;_<d;_++)g+=h[_]*u[_];t.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function Eg(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(C){return!(C!==An&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const P=C===Nr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==kn&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==ni&&!P)}function c(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const d=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),f=n.getParameter(n.MAX_VERTEX_ATTRIBS),b=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),E=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),A=g>0,w=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:b,maxVaryings:E,maxFragmentUniforms:v,vertexTextures:A,maxSamples:w}}function Tg(n){const e=this;let t=null,i=0,s=!1,r=!1;const a=new Di,o=new ke,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const p=d.length!==0||u||i!==0||s;return s=u,i=d.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,p){const g=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,f=n.get(d);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{const b=r?0:i,E=b*4;let v=f.clippingState||null;c.value=v,v=h(g,u,E,p);for(let A=0;A!==E;++A)v[A]=t[A];f.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(d,u,p,g){const _=d!==null?d.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const f=p+_*4,b=u.matrixWorldInverse;o.getNormalMatrix(b),(m===null||m.length<f)&&(m=new Float32Array(f));for(let E=0,v=p;E!==_;++E,v+=4)a.copy(d[E]).applyMatrix4(b,o),a.normal.toArray(m,v),m[v+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function wg(n){let e=new WeakMap;function t(a,o){return o===sl?a.mapping=Ds:o===rl&&(a.mapping=Ls),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===sl||o===rl)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new xp(c.height);return l.fromEquirectangularTexture(n,a),e.set(a,l),a.addEventListener("dispose",s),t(l.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}const Ss=4,vh=[.125,.215,.35,.446,.526,.582],ki=20,No=new Kd,yh=new Ge;let Fo=null,ko=0,zo=0,Oo=!1;const Li=(1+Math.sqrt(5))/2,xs=1/Li,Mh=[new I(-Li,xs,0),new I(Li,xs,0),new I(-xs,0,Li),new I(xs,0,Li),new I(0,Li,-xs),new I(0,Li,xs),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)],Ag=new I;class Sh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100,r={}){const{size:a=256,position:o=Ag}=r;Fo=this._renderer.getRenderTarget(),ko=this._renderer.getActiveCubeFace(),zo=this._renderer.getActiveMipmapLevel(),Oo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,s,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Th(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Eh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Fo,ko,zo),this._renderer.xr.enabled=Oo,e.scissorTest=!1,ga(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ds||e.mapping===Ls?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Fo=this._renderer.getRenderTarget(),ko=this._renderer.getActiveCubeFace(),zo=this._renderer.getActiveMipmapLevel(),Oo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Un,minFilter:Un,generateMipmaps:!1,type:Nr,format:An,colorSpace:Is,depthBuffer:!1},s=bh(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=bh(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Rg(r)),this._blurMaterial=Cg(r,e,t)}return s}_compileMaterial(e){const t=new Te(this._lodPlanes[0],e);this._renderer.compile(t,No)}_sceneToCubeUV(e,t,i,s,r){const c=new ln(90,1,t,i),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,p=d.toneMapping;d.getClearColor(yh),d.toneMapping=_i,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null));const _=new St({name:"PMREM.Background",side:en,depthWrite:!1,depthTest:!1}),m=new Te(new On,_);let f=!1;const b=e.background;b?b.isColor&&(_.color.copy(b),e.background=null,f=!0):(_.color.copy(yh),f=!0);for(let E=0;E<6;E++){const v=E%3;v===0?(c.up.set(0,l[E],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[E],r.y,r.z)):v===1?(c.up.set(0,0,l[E]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[E],r.z)):(c.up.set(0,l[E],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[E]));const A=this._cubeSize;ga(s,v*A,E>2?A:0,A,A),d.setRenderTarget(s),f&&d.render(m,c),d.render(e,c)}m.geometry.dispose(),m.material.dispose(),d.toneMapping=p,d.autoClear=u,e.background=b}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===Ds||e.mapping===Ls;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Th()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Eh());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new Te(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const c=this._cubeSize;ga(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(a,No)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Mh[(s-r-1)%Mh.length];this._blur(e,r-1,r,a,o)}t.autoClear=i}_blur(e,t,i,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,s,"latitudinal",r),this._halfBlur(a,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new Te(this._lodPlanes[s],l),u=l.uniforms,p=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*ki-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):ki;m>ki&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ki}`);const f=[];let b=0;for(let C=0;C<ki;++C){const P=C/_,S=Math.exp(-P*P/2);f.push(S),C===0?b+=S:C<m&&(b+=2*S)}for(let C=0;C<f.length;C++)f[C]=f[C]/b;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=f,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:E}=this;u.dTheta.value=g,u.mipInt.value=E-i;const v=this._sizeLods[s],A=3*v*(s>E-Ss?s-E+Ss:0),w=4*(this._cubeSize-v);ga(t,A,w,3*v,2*v),c.setRenderTarget(t),c.render(d,No)}}function Rg(n){const e=[],t=[],i=[];let s=n;const r=n-Ss+1+vh.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);t.push(o);let c=1/o;a>n-Ss?c=vh[a-n+Ss-1]:a===0&&(c=0),i.push(c);const l=1/(o-2),h=-l,d=1+l,u=[h,h,d,h,d,d,h,h,d,d,h,d],p=6,g=6,_=3,m=2,f=1,b=new Float32Array(_*g*p),E=new Float32Array(m*g*p),v=new Float32Array(f*g*p);for(let w=0;w<p;w++){const C=w%3*2/3-1,P=w>2?0:-1,S=[C,P,0,C+2/3,P,0,C+2/3,P+1,0,C,P,0,C+2/3,P+1,0,C,P+1,0];b.set(S,_*g*w),E.set(u,m*g*w);const M=[w,w,w,w,w,w];v.set(M,f*g*w)}const A=new tn;A.setAttribute("position",new Cn(b,_)),A.setAttribute("uv",new Cn(E,m)),A.setAttribute("faceIndex",new Cn(v,f)),e.push(A),s>Ss&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function bh(n,e,t){const i=new $i(n,e,t);return i.texture.mapping=Za,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ga(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function Cg(n,e,t){const i=new Float32Array(ki),s=new I(0,1,0);return new yi({name:"SphericalGaussianBlur",defines:{n:ki,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:fc(),fragmentShader:`

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
		`,blending:gi,depthTest:!1,depthWrite:!1})}function Eh(){return new yi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:fc(),fragmentShader:`

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
		`,blending:gi,depthTest:!1,depthWrite:!1})}function Th(){return new yi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:fc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:gi,depthTest:!1,depthWrite:!1})}function fc(){return`

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
	`}function Pg(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const c=o.mapping,l=c===sl||c===rl,h=c===Ds||c===Ls;if(l||h){let d=e.get(o);const u=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==u)return t===null&&(t=new Sh(n)),d=l?t.fromEquirectangular(o,d):t.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),d.texture;if(d!==void 0)return d.texture;{const p=o.image;return l&&p&&p.height>0||h&&p&&s(p)?(t===null&&(t=new Sh(n)),d=l?t.fromEquirectangular(o):t.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),o.addEventListener("dispose",r),d.texture):null}}}return o}function s(o){let c=0;const l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function r(o){const c=o.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function Dg(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&Rr("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function Lg(n,e,t,i){const s={},r=new WeakMap;function a(d){const u=d.target;u.index!==null&&e.remove(u.index);for(const g in u.attributes)e.remove(u.attributes[g]);u.removeEventListener("dispose",a),delete s[u.id];const p=r.get(u);p&&(e.remove(p),r.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(d,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,t.memory.geometries++),u}function c(d){const u=d.attributes;for(const p in u)e.update(u[p],n.ARRAY_BUFFER)}function l(d){const u=[],p=d.index,g=d.attributes.position;let _=0;if(p!==null){const b=p.array;_=p.version;for(let E=0,v=b.length;E<v;E+=3){const A=b[E+0],w=b[E+1],C=b[E+2];u.push(A,w,w,C,C,A)}}else if(g!==void 0){const b=g.array;_=g.version;for(let E=0,v=b.length/3-1;E<v;E+=3){const A=E+0,w=E+1,C=E+2;u.push(A,w,w,C,C,A)}}else return;const m=new(Ud(u)?zd:kd)(u,1);m.version=_;const f=r.get(d);f&&e.remove(f),r.set(d,m)}function h(d){const u=r.get(d);if(u){const p=d.index;p!==null&&u.version<p.version&&l(d)}else l(d);return r.get(d)}return{get:o,update:c,getWireframeAttribute:h}}function Ig(n,e,t){let i;function s(u){i=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function c(u,p){n.drawElements(i,p,r,u*a),t.update(p,i,1)}function l(u,p,g){g!==0&&(n.drawElementsInstanced(i,p,r,u*a,g),t.update(p,i,g))}function h(u,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,r,u,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];t.update(m,i,1)}function d(u,p,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<u.length;f++)l(u[f]/a,p[f],_[f]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,r,u,0,_,0,g);let f=0;for(let b=0;b<g;b++)f+=p[b]*_[b];t.update(f,i,1)}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function Ug(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function Ng(n,e,t){const i=new WeakMap,s=new nt;function r(a,o,c){const l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0;let u=i.get(o);if(u===void 0||u.count!==d){let S=function(){C.dispose(),i.delete(o),o.removeEventListener("dispose",S)};u!==void 0&&u.texture.dispose();const p=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],b=o.morphAttributes.color||[];let E=0;p===!0&&(E=1),g===!0&&(E=2),_===!0&&(E=3);let v=o.attributes.position.count*E,A=1;v>e.maxTextureSize&&(A=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);const w=new Float32Array(v*A*4*d),C=new Nd(w,v,A,d);C.type=ni,C.needsUpdate=!0;const P=E*4;for(let M=0;M<d;M++){const D=m[M],z=f[M],H=b[M],W=v*A*4*M;for(let Y=0;Y<D.count;Y++){const X=Y*P;p===!0&&(s.fromBufferAttribute(D,Y),w[W+X+0]=s.x,w[W+X+1]=s.y,w[W+X+2]=s.z,w[W+X+3]=0),g===!0&&(s.fromBufferAttribute(z,Y),w[W+X+4]=s.x,w[W+X+5]=s.y,w[W+X+6]=s.z,w[W+X+7]=0),_===!0&&(s.fromBufferAttribute(H,Y),w[W+X+8]=s.x,w[W+X+9]=s.y,w[W+X+10]=s.z,w[W+X+11]=H.itemSize===4?s.w:1)}}u={count:d,texture:C,size:new Le(v,A)},i.set(o,u),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let p=0;for(let _=0;_<l.length;_++)p+=l[_];const g=o.morphTargetsRelative?1:1-p;c.getUniforms().setValue(n,"morphTargetBaseInfluence",g),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",u.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:r}}function Fg(n,e,t,i){let s=new WeakMap;function r(c){const l=i.render.frame,h=c.geometry,d=e.get(c,h);if(s.get(d)!==l&&(e.update(d),s.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const u=c.skeleton;s.get(u)!==l&&(u.update(),s.set(u,l))}return d}function a(){s=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:a}}const Zd=new Nt,wh=new Wd(1,1),Jd=new Nd,Qd=new tp,eu=new Hd,Ah=[],Rh=[],Ch=new Float32Array(16),Ph=new Float32Array(9),Dh=new Float32Array(4);function Hs(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=Ah[s];if(r===void 0&&(r=new Float32Array(s),Ah[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function Ct(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Pt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Qa(n,e){let t=Rh[e];t===void 0&&(t=new Int32Array(e),Rh[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function kg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function zg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;n.uniform2fv(this.addr,e),Pt(t,e)}}function Og(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ct(t,e))return;n.uniform3fv(this.addr,e),Pt(t,e)}}function Bg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;n.uniform4fv(this.addr,e),Pt(t,e)}}function Hg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ct(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Pt(t,e)}else{if(Ct(t,i))return;Dh.set(i),n.uniformMatrix2fv(this.addr,!1,Dh),Pt(t,i)}}function Gg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ct(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Pt(t,e)}else{if(Ct(t,i))return;Ph.set(i),n.uniformMatrix3fv(this.addr,!1,Ph),Pt(t,i)}}function Vg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ct(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Pt(t,e)}else{if(Ct(t,i))return;Ch.set(i),n.uniformMatrix4fv(this.addr,!1,Ch),Pt(t,i)}}function Wg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Xg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;n.uniform2iv(this.addr,e),Pt(t,e)}}function qg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ct(t,e))return;n.uniform3iv(this.addr,e),Pt(t,e)}}function Yg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;n.uniform4iv(this.addr,e),Pt(t,e)}}function $g(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Kg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;n.uniform2uiv(this.addr,e),Pt(t,e)}}function jg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ct(t,e))return;n.uniform3uiv(this.addr,e),Pt(t,e)}}function Zg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;n.uniform4uiv(this.addr,e),Pt(t,e)}}function Jg(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(wh.compareFunction=Id,r=wh):r=Zd,t.setTexture2D(e||r,s)}function Qg(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Qd,s)}function e_(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||eu,s)}function t_(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Jd,s)}function n_(n){switch(n){case 5126:return kg;case 35664:return zg;case 35665:return Og;case 35666:return Bg;case 35674:return Hg;case 35675:return Gg;case 35676:return Vg;case 5124:case 35670:return Wg;case 35667:case 35671:return Xg;case 35668:case 35672:return qg;case 35669:case 35673:return Yg;case 5125:return $g;case 36294:return Kg;case 36295:return jg;case 36296:return Zg;case 35678:case 36198:case 36298:case 36306:case 35682:return Jg;case 35679:case 36299:case 36307:return Qg;case 35680:case 36300:case 36308:case 36293:return e_;case 36289:case 36303:case 36311:case 36292:return t_}}function i_(n,e){n.uniform1fv(this.addr,e)}function s_(n,e){const t=Hs(e,this.size,2);n.uniform2fv(this.addr,t)}function r_(n,e){const t=Hs(e,this.size,3);n.uniform3fv(this.addr,t)}function a_(n,e){const t=Hs(e,this.size,4);n.uniform4fv(this.addr,t)}function o_(n,e){const t=Hs(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function l_(n,e){const t=Hs(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function c_(n,e){const t=Hs(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function h_(n,e){n.uniform1iv(this.addr,e)}function d_(n,e){n.uniform2iv(this.addr,e)}function u_(n,e){n.uniform3iv(this.addr,e)}function f_(n,e){n.uniform4iv(this.addr,e)}function p_(n,e){n.uniform1uiv(this.addr,e)}function m_(n,e){n.uniform2uiv(this.addr,e)}function g_(n,e){n.uniform3uiv(this.addr,e)}function __(n,e){n.uniform4uiv(this.addr,e)}function x_(n,e,t){const i=this.cache,s=e.length,r=Qa(t,s);Ct(i,r)||(n.uniform1iv(this.addr,r),Pt(i,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||Zd,r[a])}function v_(n,e,t){const i=this.cache,s=e.length,r=Qa(t,s);Ct(i,r)||(n.uniform1iv(this.addr,r),Pt(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Qd,r[a])}function y_(n,e,t){const i=this.cache,s=e.length,r=Qa(t,s);Ct(i,r)||(n.uniform1iv(this.addr,r),Pt(i,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||eu,r[a])}function M_(n,e,t){const i=this.cache,s=e.length,r=Qa(t,s);Ct(i,r)||(n.uniform1iv(this.addr,r),Pt(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Jd,r[a])}function S_(n){switch(n){case 5126:return i_;case 35664:return s_;case 35665:return r_;case 35666:return a_;case 35674:return o_;case 35675:return l_;case 35676:return c_;case 5124:case 35670:return h_;case 35667:case 35671:return d_;case 35668:case 35672:return u_;case 35669:case 35673:return f_;case 5125:return p_;case 36294:return m_;case 36295:return g_;case 36296:return __;case 35678:case 36198:case 36298:case 36306:case 35682:return x_;case 35679:case 36299:case 36307:return v_;case 35680:case 36300:case 36308:case 36293:return y_;case 36289:case 36303:case 36311:case 36292:return M_}}class b_{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=n_(t.type)}}class E_{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=S_(t.type)}}class T_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],i)}}}const Bo=/(\w+)(\])?(\[|\.)?/g;function Lh(n,e){n.seq.push(e),n.map[e.id]=e}function w_(n,e,t){const i=n.name,s=i.length;for(Bo.lastIndex=0;;){const r=Bo.exec(i),a=Bo.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){Lh(t,l===void 0?new b_(o,n,e):new E_(o,n,e));break}else{let d=t.map[o];d===void 0&&(d=new T_(o),Lh(t,d)),t=d}}}class Ia{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);w_(r,a,this)}}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],c=i[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&i.push(a)}return i}}function Ih(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const A_=37297;let R_=0;function C_(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const Uh=new ke;function P_(n){Ye._getMatrix(Uh,Ye.workingColorSpace,n);const e=`mat3( ${Uh.elements.map(t=>t.toFixed(4))} )`;switch(Ye.getTransfer(n)){case ka:return[e,"LinearTransferOETF"];case et:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Nh(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+C_(n.getShaderSource(e),o)}else return r}function D_(n,e){const t=P_(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function L_(n,e){let t;switch(e){case mf:t="Linear";break;case gf:t="Reinhard";break;case _f:t="Cineon";break;case xf:t="ACESFilmic";break;case yf:t="AgX";break;case Mf:t="Neutral";break;case vf:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const _a=new I;function I_(){Ye.getLuminanceCoefficients(_a);const n=_a.x.toFixed(4),e=_a.y.toFixed(4),t=_a.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function U_(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(cr).join(`
`)}function N_(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function F_(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),a=r.name;let o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function cr(n){return n!==""}function Fh(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function kh(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const k_=/^[ \t]*#include +<([\w\d./]+)>/gm;function zl(n){return n.replace(k_,O_)}const z_=new Map;function O_(n,e){let t=Oe[e];if(t===void 0){const i=z_.get(e);if(i!==void 0)t=Oe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return zl(t)}const B_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function zh(n){return n.replace(B_,H_)}function H_(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Oh(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function G_(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===vd?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===yd?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===$n&&(e="SHADOWMAP_TYPE_VSM"),e}function V_(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Ds:case Ls:e="ENVMAP_TYPE_CUBE";break;case Za:e="ENVMAP_TYPE_CUBE_UV";break}return e}function W_(n){let e="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===Ls&&(e="ENVMAP_MODE_REFRACTION"),e}function X_(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Md:e="ENVMAP_BLENDING_MULTIPLY";break;case ff:e="ENVMAP_BLENDING_MIX";break;case pf:e="ENVMAP_BLENDING_ADD";break}return e}function q_(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function Y_(n,e,t,i){const s=n.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=G_(t),l=V_(t),h=W_(t),d=X_(t),u=q_(t),p=U_(t),g=N_(r),_=s.createProgram();let m,f,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(cr).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(cr).join(`
`),f.length>0&&(f+=`
`)):(m=[Oh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(cr).join(`
`),f=[Oh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==_i?"#define TONE_MAPPING":"",t.toneMapping!==_i?Oe.tonemapping_pars_fragment:"",t.toneMapping!==_i?L_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Oe.colorspace_pars_fragment,D_("linearToOutputTexel",t.outputColorSpace),I_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(cr).join(`
`)),a=zl(a),a=Fh(a,t),a=kh(a,t),o=zl(o),o=Fh(o,t),o=kh(o,t),a=zh(a),o=zh(o),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===Gc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Gc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const E=b+m+a,v=b+f+o,A=Ih(s,s.VERTEX_SHADER,E),w=Ih(s,s.FRAGMENT_SHADER,v);s.attachShader(_,A),s.attachShader(_,w),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function C(D){if(n.debug.checkShaderErrors){const z=s.getProgramInfoLog(_)||"",H=s.getShaderInfoLog(A)||"",W=s.getShaderInfoLog(w)||"",Y=z.trim(),X=H.trim(),ne=W.trim();let G=!0,ae=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(G=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,A,w);else{const he=Nh(s,A,"vertex"),be=Nh(s,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+Y+`
`+he+`
`+be)}else Y!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Y):(X===""||ne==="")&&(ae=!1);ae&&(D.diagnostics={runnable:G,programLog:Y,vertexShader:{log:X,prefix:m},fragmentShader:{log:ne,prefix:f}})}s.deleteShader(A),s.deleteShader(w),P=new Ia(s,_),S=F_(s,_)}let P;this.getUniforms=function(){return P===void 0&&C(this),P};let S;this.getAttributes=function(){return S===void 0&&C(this),S};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(_,A_)),M},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=R_++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=A,this.fragmentShader=w,this}let $_=0;class K_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new j_(e),t.set(e,i)),i}}class j_{constructor(e){this.id=$_++,this.code=e,this.usedTimes=0}}function Z_(n,e,t,i,s,r,a){const o=new rc,c=new K_,l=new Set,h=[],d=s.logarithmicDepthBuffer,u=s.vertexTextures;let p=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return l.add(S),S===0?"uv":`uv${S}`}function m(S,M,D,z,H){const W=z.fog,Y=H.geometry,X=S.isMeshStandardMaterial?z.environment:null,ne=(S.isMeshStandardMaterial?t:e).get(S.envMap||X),G=ne&&ne.mapping===Za?ne.image.height:null,ae=g[S.type];S.precision!==null&&(p=s.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const he=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,be=he!==void 0?he.length:0;let Be=0;Y.morphAttributes.position!==void 0&&(Be=1),Y.morphAttributes.normal!==void 0&&(Be=2),Y.morphAttributes.color!==void 0&&(Be=3);let st,ct,Ke,$;if(ae){const je=In[ae];st=je.vertexShader,ct=je.fragmentShader}else st=S.vertexShader,ct=S.fragmentShader,c.update(S),Ke=c.getVertexShaderID(S),$=c.getFragmentShaderID(S);const Z=n.getRenderTarget(),fe=n.state.buffers.depth.getReversed(),Ie=H.isInstancedMesh===!0,Se=H.isBatchedMesh===!0,Xe=!!S.map,Ft=!!S.matcap,R=!!ne,ht=!!S.aoMap,Ne=!!S.lightMap,Pe=!!S.bumpMap,ge=!!S.normalMap,dt=!!S.displacementMap,_e=!!S.emissiveMap,ze=!!S.metalnessMap,Dt=!!S.roughnessMap,vt=S.anisotropy>0,T=S.clearcoat>0,x=S.dispersion>0,k=S.iridescence>0,q=S.sheen>0,j=S.transmission>0,V=vt&&!!S.anisotropyMap,Me=T&&!!S.clearcoatMap,ie=T&&!!S.clearcoatNormalMap,xe=T&&!!S.clearcoatRoughnessMap,ve=k&&!!S.iridescenceMap,ee=k&&!!S.iridescenceThicknessMap,ce=q&&!!S.sheenColorMap,Ce=q&&!!S.sheenRoughnessMap,ye=!!S.specularMap,oe=!!S.specularColorMap,Fe=!!S.specularIntensityMap,L=j&&!!S.transmissionMap,te=j&&!!S.thicknessMap,se=!!S.gradientMap,ue=!!S.alphaMap,J=S.alphaTest>0,K=!!S.alphaHash,me=!!S.extensions;let Ue=_i;S.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(Ue=n.toneMapping);const rt={shaderID:ae,shaderType:S.type,shaderName:S.name,vertexShader:st,fragmentShader:ct,defines:S.defines,customVertexShaderID:Ke,customFragmentShaderID:$,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:Se,batchingColor:Se&&H._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&H.instanceColor!==null,instancingMorph:Ie&&H.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:Z===null?n.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:Is,alphaToCoverage:!!S.alphaToCoverage,map:Xe,matcap:Ft,envMap:R,envMapMode:R&&ne.mapping,envMapCubeUVHeight:G,aoMap:ht,lightMap:Ne,bumpMap:Pe,normalMap:ge,displacementMap:u&&dt,emissiveMap:_e,normalMapObjectSpace:ge&&S.normalMapType===Ef,normalMapTangentSpace:ge&&S.normalMapType===Ld,metalnessMap:ze,roughnessMap:Dt,anisotropy:vt,anisotropyMap:V,clearcoat:T,clearcoatMap:Me,clearcoatNormalMap:ie,clearcoatRoughnessMap:xe,dispersion:x,iridescence:k,iridescenceMap:ve,iridescenceThicknessMap:ee,sheen:q,sheenColorMap:ce,sheenRoughnessMap:Ce,specularMap:ye,specularColorMap:oe,specularIntensityMap:Fe,transmission:j,transmissionMap:L,thicknessMap:te,gradientMap:se,opaque:S.transparent===!1&&S.blending===Es&&S.alphaToCoverage===!1,alphaMap:ue,alphaTest:J,alphaHash:K,combine:S.combine,mapUv:Xe&&_(S.map.channel),aoMapUv:ht&&_(S.aoMap.channel),lightMapUv:Ne&&_(S.lightMap.channel),bumpMapUv:Pe&&_(S.bumpMap.channel),normalMapUv:ge&&_(S.normalMap.channel),displacementMapUv:dt&&_(S.displacementMap.channel),emissiveMapUv:_e&&_(S.emissiveMap.channel),metalnessMapUv:ze&&_(S.metalnessMap.channel),roughnessMapUv:Dt&&_(S.roughnessMap.channel),anisotropyMapUv:V&&_(S.anisotropyMap.channel),clearcoatMapUv:Me&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:ie&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xe&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:ve&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:ee&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:ce&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:Ce&&_(S.sheenRoughnessMap.channel),specularMapUv:ye&&_(S.specularMap.channel),specularColorMapUv:oe&&_(S.specularColorMap.channel),specularIntensityMapUv:Fe&&_(S.specularIntensityMap.channel),transmissionMapUv:L&&_(S.transmissionMap.channel),thicknessMapUv:te&&_(S.thicknessMap.channel),alphaMapUv:ue&&_(S.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(ge||vt),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!Y.attributes.uv&&(Xe||ue),fog:!!W,useFog:S.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:fe,skinning:H.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:be,morphTextureStride:Be,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&D.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ue,decodeVideoTexture:Xe&&S.map.isVideoTexture===!0&&Ye.getTransfer(S.map.colorSpace)===et,decodeVideoTextureEmissive:_e&&S.emissiveMap.isVideoTexture===!0&&Ye.getTransfer(S.emissiveMap.colorSpace)===et,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Ot,flipSided:S.side===en,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:me&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(me&&S.extensions.multiDraw===!0||Se)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return rt.vertexUv1s=l.has(1),rt.vertexUv2s=l.has(2),rt.vertexUv3s=l.has(3),l.clear(),rt}function f(S){const M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(const D in S.defines)M.push(D),M.push(S.defines[D]);return S.isRawShaderMaterial===!1&&(b(M,S),E(M,S),M.push(n.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function b(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function E(S,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),M.gradientMap&&o.enable(22),S.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reversedDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),S.push(o.mask)}function v(S){const M=g[S.type];let D;if(M){const z=In[M];D=pp.clone(z.uniforms)}else D=S.uniforms;return D}function A(S,M){let D;for(let z=0,H=h.length;z<H;z++){const W=h[z];if(W.cacheKey===M){D=W,++D.usedTimes;break}}return D===void 0&&(D=new Y_(n,M,S,r),h.push(D)),D}function w(S){if(--S.usedTimes===0){const M=h.indexOf(S);h[M]=h[h.length-1],h.pop(),S.destroy()}}function C(S){c.remove(S)}function P(){c.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:v,acquireProgram:A,releaseProgram:w,releaseShaderCache:C,programs:h,dispose:P}}function J_(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,c){n.get(a)[o]=c}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function Q_(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Bh(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Hh(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(d,u,p,g,_,m){let f=n[e];return f===void 0?(f={id:d.id,object:d,geometry:u,material:p,groupOrder:g,renderOrder:d.renderOrder,z:_,group:m},n[e]=f):(f.id=d.id,f.object=d,f.geometry=u,f.material=p,f.groupOrder=g,f.renderOrder=d.renderOrder,f.z=_,f.group=m),e++,f}function o(d,u,p,g,_,m){const f=a(d,u,p,g,_,m);p.transmission>0?i.push(f):p.transparent===!0?s.push(f):t.push(f)}function c(d,u,p,g,_,m){const f=a(d,u,p,g,_,m);p.transmission>0?i.unshift(f):p.transparent===!0?s.unshift(f):t.unshift(f)}function l(d,u){t.length>1&&t.sort(d||Q_),i.length>1&&i.sort(u||Bh),s.length>1&&s.sort(u||Bh)}function h(){for(let d=e,u=n.length;d<u;d++){const p=n[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:o,unshift:c,finish:h,sort:l}}function ex(){let n=new WeakMap;function e(i,s){const r=n.get(i);let a;return r===void 0?(a=new Hh,n.set(i,[a])):s>=r.length?(a=new Hh,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function tx(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new Ge};break;case"SpotLight":t={position:new I,direction:new I,color:new Ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new Ge,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new Ge,groundColor:new Ge};break;case"RectAreaLight":t={color:new Ge,position:new I,halfWidth:new I,halfHeight:new I};break}return n[e.id]=t,t}}}function nx(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let ix=0;function sx(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function rx(n){const e=new tx,t=nx(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new I);const s=new I,r=new lt,a=new lt;function o(l){let h=0,d=0,u=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let p=0,g=0,_=0,m=0,f=0,b=0,E=0,v=0,A=0,w=0,C=0;l.sort(sx);for(let S=0,M=l.length;S<M;S++){const D=l[S],z=D.color,H=D.intensity,W=D.distance,Y=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)h+=z.r*H,d+=z.g*H,u+=z.b*H;else if(D.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(D.sh.coefficients[X],H);C++}else if(D.isDirectionalLight){const X=e.get(D);if(X.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const ne=D.shadow,G=t.get(D);G.shadowIntensity=ne.intensity,G.shadowBias=ne.bias,G.shadowNormalBias=ne.normalBias,G.shadowRadius=ne.radius,G.shadowMapSize=ne.mapSize,i.directionalShadow[p]=G,i.directionalShadowMap[p]=Y,i.directionalShadowMatrix[p]=D.shadow.matrix,b++}i.directional[p]=X,p++}else if(D.isSpotLight){const X=e.get(D);X.position.setFromMatrixPosition(D.matrixWorld),X.color.copy(z).multiplyScalar(H),X.distance=W,X.coneCos=Math.cos(D.angle),X.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),X.decay=D.decay,i.spot[_]=X;const ne=D.shadow;if(D.map&&(i.spotLightMap[A]=D.map,A++,ne.updateMatrices(D),D.castShadow&&w++),i.spotLightMatrix[_]=ne.matrix,D.castShadow){const G=t.get(D);G.shadowIntensity=ne.intensity,G.shadowBias=ne.bias,G.shadowNormalBias=ne.normalBias,G.shadowRadius=ne.radius,G.shadowMapSize=ne.mapSize,i.spotShadow[_]=G,i.spotShadowMap[_]=Y,v++}_++}else if(D.isRectAreaLight){const X=e.get(D);X.color.copy(z).multiplyScalar(H),X.halfWidth.set(D.width*.5,0,0),X.halfHeight.set(0,D.height*.5,0),i.rectArea[m]=X,m++}else if(D.isPointLight){const X=e.get(D);if(X.color.copy(D.color).multiplyScalar(D.intensity),X.distance=D.distance,X.decay=D.decay,D.castShadow){const ne=D.shadow,G=t.get(D);G.shadowIntensity=ne.intensity,G.shadowBias=ne.bias,G.shadowNormalBias=ne.normalBias,G.shadowRadius=ne.radius,G.shadowMapSize=ne.mapSize,G.shadowCameraNear=ne.camera.near,G.shadowCameraFar=ne.camera.far,i.pointShadow[g]=G,i.pointShadowMap[g]=Y,i.pointShadowMatrix[g]=D.shadow.matrix,E++}i.point[g]=X,g++}else if(D.isHemisphereLight){const X=e.get(D);X.skyColor.copy(D.color).multiplyScalar(H),X.groundColor.copy(D.groundColor).multiplyScalar(H),i.hemi[f]=X,f++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=re.LTC_FLOAT_1,i.rectAreaLTC2=re.LTC_FLOAT_2):(i.rectAreaLTC1=re.LTC_HALF_1,i.rectAreaLTC2=re.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=u;const P=i.hash;(P.directionalLength!==p||P.pointLength!==g||P.spotLength!==_||P.rectAreaLength!==m||P.hemiLength!==f||P.numDirectionalShadows!==b||P.numPointShadows!==E||P.numSpotShadows!==v||P.numSpotMaps!==A||P.numLightProbes!==C)&&(i.directional.length=p,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=f,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=v,i.spotShadowMap.length=v,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=E,i.spotLightMatrix.length=v+A-w,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=C,P.directionalLength=p,P.pointLength=g,P.spotLength=_,P.rectAreaLength=m,P.hemiLength=f,P.numDirectionalShadows=b,P.numPointShadows=E,P.numSpotShadows=v,P.numSpotMaps=A,P.numLightProbes=C,i.version=ix++)}function c(l,h){let d=0,u=0,p=0,g=0,_=0;const m=h.matrixWorldInverse;for(let f=0,b=l.length;f<b;f++){const E=l[f];if(E.isDirectionalLight){const v=i.directional[d];v.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),d++}else if(E.isSpotLight){const v=i.spot[p];v.position.setFromMatrixPosition(E.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),p++}else if(E.isRectAreaLight){const v=i.rectArea[g];v.position.setFromMatrixPosition(E.matrixWorld),v.position.applyMatrix4(m),a.identity(),r.copy(E.matrixWorld),r.premultiply(m),a.extractRotation(r),v.halfWidth.set(E.width*.5,0,0),v.halfHeight.set(0,E.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),g++}else if(E.isPointLight){const v=i.point[u];v.position.setFromMatrixPosition(E.matrixWorld),v.position.applyMatrix4(m),u++}else if(E.isHemisphereLight){const v=i.hemi[_];v.direction.setFromMatrixPosition(E.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:o,setupView:c,state:i}}function Gh(n){const e=new rx(n),t=[],i=[];function s(h){l.camera=h,t.length=0,i.length=0}function r(h){t.push(h)}function a(h){i.push(h)}function o(){e.setup(t)}function c(h){e.setupView(t,h)}const l={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function ax(n){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new Gh(n),e.set(s,[o])):r>=a.length?(o=new Gh(n),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const ox=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,lx=`uniform sampler2D shadow_pass;
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
}`;function cx(n,e,t){let i=new oc;const s=new Le,r=new Le,a=new nt,o=new qd({depthPacking:Dd}),c=new Rp,l={},h=t.maxTextureSize,d={[vi]:en,[en]:vi,[Ot]:Ot},u=new yi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Le},radius:{value:4}},vertexShader:ox,fragmentShader:lx}),p=u.clone();p.defines.HORIZONTAL_PASS=1;const g=new tn;g.setAttribute("position",new Cn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Te(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=vd;let f=this.type;this.render=function(w,C,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const S=n.getRenderTarget(),M=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),z=n.state;z.setBlending(gi),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const H=f!==$n&&this.type===$n,W=f===$n&&this.type!==$n;for(let Y=0,X=w.length;Y<X;Y++){const ne=w[Y],G=ne.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",ne,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);const ae=G.getFrameExtents();if(s.multiply(ae),r.copy(G.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ae.x),s.x=r.x*ae.x,G.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ae.y),s.y=r.y*ae.y,G.mapSize.y=r.y)),G.map===null||H===!0||W===!0){const be=this.type!==$n?{minFilter:Rn,magFilter:Rn}:{};G.map!==null&&G.map.dispose(),G.map=new $i(s.x,s.y,be),G.map.texture.name=ne.name+".shadowMap",G.camera.updateProjectionMatrix()}n.setRenderTarget(G.map),n.clear();const he=G.getViewportCount();for(let be=0;be<he;be++){const Be=G.getViewport(be);a.set(r.x*Be.x,r.y*Be.y,r.x*Be.z,r.y*Be.w),z.viewport(a),G.updateMatrices(ne,be),i=G.getFrustum(),v(C,P,G.camera,ne,this.type)}G.isPointLightShadow!==!0&&this.type===$n&&b(G,P),G.needsUpdate=!1}f=this.type,m.needsUpdate=!1,n.setRenderTarget(S,M,D)};function b(w,C){const P=e.update(_);u.defines.VSM_SAMPLES!==w.blurSamples&&(u.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new $i(s.x,s.y)),u.uniforms.shadow_pass.value=w.map.texture,u.uniforms.resolution.value=w.mapSize,u.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(C,null,P,u,_,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(C,null,P,p,_,null)}function E(w,C,P,S){let M=null;const D=P.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(D!==void 0)M=D;else if(M=P.isPointLight===!0?c:o,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const z=M.uuid,H=C.uuid;let W=l[z];W===void 0&&(W={},l[z]=W);let Y=W[H];Y===void 0&&(Y=M.clone(),W[H]=Y,C.addEventListener("dispose",A)),M=Y}if(M.visible=C.visible,M.wireframe=C.wireframe,S===$n?M.side=C.shadowSide!==null?C.shadowSide:C.side:M.side=C.shadowSide!==null?C.shadowSide:d[C.side],M.alphaMap=C.alphaMap,M.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,M.map=C.map,M.clipShadows=C.clipShadows,M.clippingPlanes=C.clippingPlanes,M.clipIntersection=C.clipIntersection,M.displacementMap=C.displacementMap,M.displacementScale=C.displacementScale,M.displacementBias=C.displacementBias,M.wireframeLinewidth=C.wireframeLinewidth,M.linewidth=C.linewidth,P.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const z=n.properties.get(M);z.light=P}return M}function v(w,C,P,S,M){if(w.visible===!1)return;if(w.layers.test(C.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&M===$n)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,w.matrixWorld);const H=e.update(w),W=w.material;if(Array.isArray(W)){const Y=H.groups;for(let X=0,ne=Y.length;X<ne;X++){const G=Y[X],ae=W[G.materialIndex];if(ae&&ae.visible){const he=E(w,ae,S,M);w.onBeforeShadow(n,w,C,P,H,he,G),n.renderBufferDirect(P,null,H,he,w,G),w.onAfterShadow(n,w,C,P,H,he,G)}}}else if(W.visible){const Y=E(w,W,S,M);w.onBeforeShadow(n,w,C,P,H,Y,null),n.renderBufferDirect(P,null,H,Y,w,null),w.onAfterShadow(n,w,C,P,H,Y,null)}}const z=w.children;for(let H=0,W=z.length;H<W;H++)v(z[H],C,P,S,M)}function A(w){w.target.removeEventListener("dispose",A);for(const P in l){const S=l[P],M=w.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}const hx={[Zo]:Jo,[Qo]:nl,[el]:il,[Ps]:tl,[Jo]:Zo,[nl]:Qo,[il]:el,[tl]:Ps};function dx(n,e){function t(){let L=!1;const te=new nt;let se=null;const ue=new nt(0,0,0,0);return{setMask:function(J){se!==J&&!L&&(n.colorMask(J,J,J,J),se=J)},setLocked:function(J){L=J},setClear:function(J,K,me,Ue,rt){rt===!0&&(J*=Ue,K*=Ue,me*=Ue),te.set(J,K,me,Ue),ue.equals(te)===!1&&(n.clearColor(J,K,me,Ue),ue.copy(te))},reset:function(){L=!1,se=null,ue.set(-1,0,0,0)}}}function i(){let L=!1,te=!1,se=null,ue=null,J=null;return{setReversed:function(K){if(te!==K){const me=e.get("EXT_clip_control");K?me.clipControlEXT(me.LOWER_LEFT_EXT,me.ZERO_TO_ONE_EXT):me.clipControlEXT(me.LOWER_LEFT_EXT,me.NEGATIVE_ONE_TO_ONE_EXT),te=K;const Ue=J;J=null,this.setClear(Ue)}},getReversed:function(){return te},setTest:function(K){K?Z(n.DEPTH_TEST):fe(n.DEPTH_TEST)},setMask:function(K){se!==K&&!L&&(n.depthMask(K),se=K)},setFunc:function(K){if(te&&(K=hx[K]),ue!==K){switch(K){case Zo:n.depthFunc(n.NEVER);break;case Jo:n.depthFunc(n.ALWAYS);break;case Qo:n.depthFunc(n.LESS);break;case Ps:n.depthFunc(n.LEQUAL);break;case el:n.depthFunc(n.EQUAL);break;case tl:n.depthFunc(n.GEQUAL);break;case nl:n.depthFunc(n.GREATER);break;case il:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ue=K}},setLocked:function(K){L=K},setClear:function(K){J!==K&&(te&&(K=1-K),n.clearDepth(K),J=K)},reset:function(){L=!1,se=null,ue=null,J=null,te=!1}}}function s(){let L=!1,te=null,se=null,ue=null,J=null,K=null,me=null,Ue=null,rt=null;return{setTest:function(je){L||(je?Z(n.STENCIL_TEST):fe(n.STENCIL_TEST))},setMask:function(je){te!==je&&!L&&(n.stencilMask(je),te=je)},setFunc:function(je,Gn,Dn){(se!==je||ue!==Gn||J!==Dn)&&(n.stencilFunc(je,Gn,Dn),se=je,ue=Gn,J=Dn)},setOp:function(je,Gn,Dn){(K!==je||me!==Gn||Ue!==Dn)&&(n.stencilOp(je,Gn,Dn),K=je,me=Gn,Ue=Dn)},setLocked:function(je){L=je},setClear:function(je){rt!==je&&(n.clearStencil(je),rt=je)},reset:function(){L=!1,te=null,se=null,ue=null,J=null,K=null,me=null,Ue=null,rt=null}}}const r=new t,a=new i,o=new s,c=new WeakMap,l=new WeakMap;let h={},d={},u=new WeakMap,p=[],g=null,_=!1,m=null,f=null,b=null,E=null,v=null,A=null,w=null,C=new Ge(0,0,0),P=0,S=!1,M=null,D=null,z=null,H=null,W=null;const Y=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,ne=0;const G=n.getParameter(n.VERSION);G.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(G)[1]),X=ne>=1):G.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),X=ne>=2);let ae=null,he={};const be=n.getParameter(n.SCISSOR_BOX),Be=n.getParameter(n.VIEWPORT),st=new nt().fromArray(be),ct=new nt().fromArray(Be);function Ke(L,te,se,ue){const J=new Uint8Array(4),K=n.createTexture();n.bindTexture(L,K),n.texParameteri(L,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(L,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let me=0;me<se;me++)L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY?n.texImage3D(te,0,n.RGBA,1,1,ue,0,n.RGBA,n.UNSIGNED_BYTE,J):n.texImage2D(te+me,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,J);return K}const $={};$[n.TEXTURE_2D]=Ke(n.TEXTURE_2D,n.TEXTURE_2D,1),$[n.TEXTURE_CUBE_MAP]=Ke(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[n.TEXTURE_2D_ARRAY]=Ke(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),$[n.TEXTURE_3D]=Ke(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Z(n.DEPTH_TEST),a.setFunc(Ps),Pe(!1),ge(kc),Z(n.CULL_FACE),ht(gi);function Z(L){h[L]!==!0&&(n.enable(L),h[L]=!0)}function fe(L){h[L]!==!1&&(n.disable(L),h[L]=!1)}function Ie(L,te){return d[L]!==te?(n.bindFramebuffer(L,te),d[L]=te,L===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=te),L===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=te),!0):!1}function Se(L,te){let se=p,ue=!1;if(L){se=u.get(te),se===void 0&&(se=[],u.set(te,se));const J=L.textures;if(se.length!==J.length||se[0]!==n.COLOR_ATTACHMENT0){for(let K=0,me=J.length;K<me;K++)se[K]=n.COLOR_ATTACHMENT0+K;se.length=J.length,ue=!0}}else se[0]!==n.BACK&&(se[0]=n.BACK,ue=!0);ue&&n.drawBuffers(se)}function Xe(L){return g!==L?(n.useProgram(L),g=L,!0):!1}const Ft={[Fi]:n.FUNC_ADD,[Ku]:n.FUNC_SUBTRACT,[ju]:n.FUNC_REVERSE_SUBTRACT};Ft[Zu]=n.MIN,Ft[Ju]=n.MAX;const R={[Qu]:n.ZERO,[ef]:n.ONE,[tf]:n.SRC_COLOR,[Ko]:n.SRC_ALPHA,[lf]:n.SRC_ALPHA_SATURATE,[af]:n.DST_COLOR,[sf]:n.DST_ALPHA,[nf]:n.ONE_MINUS_SRC_COLOR,[jo]:n.ONE_MINUS_SRC_ALPHA,[of]:n.ONE_MINUS_DST_COLOR,[rf]:n.ONE_MINUS_DST_ALPHA,[cf]:n.CONSTANT_COLOR,[hf]:n.ONE_MINUS_CONSTANT_COLOR,[df]:n.CONSTANT_ALPHA,[uf]:n.ONE_MINUS_CONSTANT_ALPHA};function ht(L,te,se,ue,J,K,me,Ue,rt,je){if(L===gi){_===!0&&(fe(n.BLEND),_=!1);return}if(_===!1&&(Z(n.BLEND),_=!0),L!==$u){if(L!==m||je!==S){if((f!==Fi||v!==Fi)&&(n.blendEquation(n.FUNC_ADD),f=Fi,v=Fi),je)switch(L){case Es:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case zc:n.blendFunc(n.ONE,n.ONE);break;case Oc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Bc:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Es:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case zc:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Oc:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Bc:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}b=null,E=null,A=null,w=null,C.set(0,0,0),P=0,m=L,S=je}return}J=J||te,K=K||se,me=me||ue,(te!==f||J!==v)&&(n.blendEquationSeparate(Ft[te],Ft[J]),f=te,v=J),(se!==b||ue!==E||K!==A||me!==w)&&(n.blendFuncSeparate(R[se],R[ue],R[K],R[me]),b=se,E=ue,A=K,w=me),(Ue.equals(C)===!1||rt!==P)&&(n.blendColor(Ue.r,Ue.g,Ue.b,rt),C.copy(Ue),P=rt),m=L,S=!1}function Ne(L,te){L.side===Ot?fe(n.CULL_FACE):Z(n.CULL_FACE);let se=L.side===en;te&&(se=!se),Pe(se),L.blending===Es&&L.transparent===!1?ht(gi):ht(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),r.setMask(L.colorWrite);const ue=L.stencilWrite;o.setTest(ue),ue&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),_e(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Z(n.SAMPLE_ALPHA_TO_COVERAGE):fe(n.SAMPLE_ALPHA_TO_COVERAGE)}function Pe(L){M!==L&&(L?n.frontFace(n.CW):n.frontFace(n.CCW),M=L)}function ge(L){L!==qu?(Z(n.CULL_FACE),L!==D&&(L===kc?n.cullFace(n.BACK):L===Yu?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):fe(n.CULL_FACE),D=L}function dt(L){L!==z&&(X&&n.lineWidth(L),z=L)}function _e(L,te,se){L?(Z(n.POLYGON_OFFSET_FILL),(H!==te||W!==se)&&(n.polygonOffset(te,se),H=te,W=se)):fe(n.POLYGON_OFFSET_FILL)}function ze(L){L?Z(n.SCISSOR_TEST):fe(n.SCISSOR_TEST)}function Dt(L){L===void 0&&(L=n.TEXTURE0+Y-1),ae!==L&&(n.activeTexture(L),ae=L)}function vt(L,te,se){se===void 0&&(ae===null?se=n.TEXTURE0+Y-1:se=ae);let ue=he[se];ue===void 0&&(ue={type:void 0,texture:void 0},he[se]=ue),(ue.type!==L||ue.texture!==te)&&(ae!==se&&(n.activeTexture(se),ae=se),n.bindTexture(L,te||$[L]),ue.type=L,ue.texture=te)}function T(){const L=he[ae];L!==void 0&&L.type!==void 0&&(n.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function x(){try{n.compressedTexImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function k(){try{n.compressedTexImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function q(){try{n.texSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function j(){try{n.texSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function V(){try{n.compressedTexSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Me(){try{n.compressedTexSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ie(){try{n.texStorage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function xe(){try{n.texStorage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ve(){try{n.texImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ee(){try{n.texImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ce(L){st.equals(L)===!1&&(n.scissor(L.x,L.y,L.z,L.w),st.copy(L))}function Ce(L){ct.equals(L)===!1&&(n.viewport(L.x,L.y,L.z,L.w),ct.copy(L))}function ye(L,te){let se=l.get(te);se===void 0&&(se=new WeakMap,l.set(te,se));let ue=se.get(L);ue===void 0&&(ue=n.getUniformBlockIndex(te,L.name),se.set(L,ue))}function oe(L,te){const ue=l.get(te).get(L);c.get(te)!==ue&&(n.uniformBlockBinding(te,ue,L.__bindingPointIndex),c.set(te,ue))}function Fe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},ae=null,he={},d={},u=new WeakMap,p=[],g=null,_=!1,m=null,f=null,b=null,E=null,v=null,A=null,w=null,C=new Ge(0,0,0),P=0,S=!1,M=null,D=null,z=null,H=null,W=null,st.set(0,0,n.canvas.width,n.canvas.height),ct.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:Z,disable:fe,bindFramebuffer:Ie,drawBuffers:Se,useProgram:Xe,setBlending:ht,setMaterial:Ne,setFlipSided:Pe,setCullFace:ge,setLineWidth:dt,setPolygonOffset:_e,setScissorTest:ze,activeTexture:Dt,bindTexture:vt,unbindTexture:T,compressedTexImage2D:x,compressedTexImage3D:k,texImage2D:ve,texImage3D:ee,updateUBOMapping:ye,uniformBlockBinding:oe,texStorage2D:ie,texStorage3D:xe,texSubImage2D:q,texSubImage3D:j,compressedTexSubImage2D:V,compressedTexSubImage3D:Me,scissor:ce,viewport:Ce,reset:Fe}}function ux(n,e,t,i,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Le,h=new WeakMap;let d;const u=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,x){return p?new OffscreenCanvas(T,x):Ar("canvas")}function _(T,x,k){let q=1;const j=vt(T);if((j.width>k||j.height>k)&&(q=k/Math.max(j.width,j.height)),q<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const V=Math.floor(q*j.width),Me=Math.floor(q*j.height);d===void 0&&(d=g(V,Me));const ie=x?g(V,Me):d;return ie.width=V,ie.height=Me,ie.getContext("2d").drawImage(T,0,0,V,Me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+V+"x"+Me+")."),ie}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),T;return T}function m(T){return T.generateMipmaps}function f(T){n.generateMipmap(T)}function b(T){return T.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?n.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function E(T,x,k,q,j=!1){if(T!==null){if(n[T]!==void 0)return n[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let V=x;if(x===n.RED&&(k===n.FLOAT&&(V=n.R32F),k===n.HALF_FLOAT&&(V=n.R16F),k===n.UNSIGNED_BYTE&&(V=n.R8)),x===n.RED_INTEGER&&(k===n.UNSIGNED_BYTE&&(V=n.R8UI),k===n.UNSIGNED_SHORT&&(V=n.R16UI),k===n.UNSIGNED_INT&&(V=n.R32UI),k===n.BYTE&&(V=n.R8I),k===n.SHORT&&(V=n.R16I),k===n.INT&&(V=n.R32I)),x===n.RG&&(k===n.FLOAT&&(V=n.RG32F),k===n.HALF_FLOAT&&(V=n.RG16F),k===n.UNSIGNED_BYTE&&(V=n.RG8)),x===n.RG_INTEGER&&(k===n.UNSIGNED_BYTE&&(V=n.RG8UI),k===n.UNSIGNED_SHORT&&(V=n.RG16UI),k===n.UNSIGNED_INT&&(V=n.RG32UI),k===n.BYTE&&(V=n.RG8I),k===n.SHORT&&(V=n.RG16I),k===n.INT&&(V=n.RG32I)),x===n.RGB_INTEGER&&(k===n.UNSIGNED_BYTE&&(V=n.RGB8UI),k===n.UNSIGNED_SHORT&&(V=n.RGB16UI),k===n.UNSIGNED_INT&&(V=n.RGB32UI),k===n.BYTE&&(V=n.RGB8I),k===n.SHORT&&(V=n.RGB16I),k===n.INT&&(V=n.RGB32I)),x===n.RGBA_INTEGER&&(k===n.UNSIGNED_BYTE&&(V=n.RGBA8UI),k===n.UNSIGNED_SHORT&&(V=n.RGBA16UI),k===n.UNSIGNED_INT&&(V=n.RGBA32UI),k===n.BYTE&&(V=n.RGBA8I),k===n.SHORT&&(V=n.RGBA16I),k===n.INT&&(V=n.RGBA32I)),x===n.RGB&&(k===n.UNSIGNED_INT_5_9_9_9_REV&&(V=n.RGB9_E5),k===n.UNSIGNED_INT_10F_11F_11F_REV&&(V=n.R11F_G11F_B10F)),x===n.RGBA){const Me=j?ka:Ye.getTransfer(q);k===n.FLOAT&&(V=n.RGBA32F),k===n.HALF_FLOAT&&(V=n.RGBA16F),k===n.UNSIGNED_BYTE&&(V=Me===et?n.SRGB8_ALPHA8:n.RGBA8),k===n.UNSIGNED_SHORT_4_4_4_4&&(V=n.RGBA4),k===n.UNSIGNED_SHORT_5_5_5_1&&(V=n.RGB5_A1)}return(V===n.R16F||V===n.R32F||V===n.RG16F||V===n.RG32F||V===n.RGBA16F||V===n.RGBA32F)&&e.get("EXT_color_buffer_float"),V}function v(T,x){let k;return T?x===null||x===Yi||x===br?k=n.DEPTH24_STENCIL8:x===ni?k=n.DEPTH32F_STENCIL8:x===Sr&&(k=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Yi||x===br?k=n.DEPTH_COMPONENT24:x===ni?k=n.DEPTH_COMPONENT32F:x===Sr&&(k=n.DEPTH_COMPONENT16),k}function A(T,x){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==Rn&&T.minFilter!==Un?Math.log2(Math.max(x.width,x.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?x.mipmaps.length:1}function w(T){const x=T.target;x.removeEventListener("dispose",w),P(x),x.isVideoTexture&&h.delete(x)}function C(T){const x=T.target;x.removeEventListener("dispose",C),M(x)}function P(T){const x=i.get(T);if(x.__webglInit===void 0)return;const k=T.source,q=u.get(k);if(q){const j=q[x.__cacheKey];j.usedTimes--,j.usedTimes===0&&S(T),Object.keys(q).length===0&&u.delete(k)}i.remove(T)}function S(T){const x=i.get(T);n.deleteTexture(x.__webglTexture);const k=T.source,q=u.get(k);delete q[x.__cacheKey],a.memory.textures--}function M(T){const x=i.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),i.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(x.__webglFramebuffer[q]))for(let j=0;j<x.__webglFramebuffer[q].length;j++)n.deleteFramebuffer(x.__webglFramebuffer[q][j]);else n.deleteFramebuffer(x.__webglFramebuffer[q]);x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer[q])}else{if(Array.isArray(x.__webglFramebuffer))for(let q=0;q<x.__webglFramebuffer.length;q++)n.deleteFramebuffer(x.__webglFramebuffer[q]);else n.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&n.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let q=0;q<x.__webglColorRenderbuffer.length;q++)x.__webglColorRenderbuffer[q]&&n.deleteRenderbuffer(x.__webglColorRenderbuffer[q]);x.__webglDepthRenderbuffer&&n.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const k=T.textures;for(let q=0,j=k.length;q<j;q++){const V=i.get(k[q]);V.__webglTexture&&(n.deleteTexture(V.__webglTexture),a.memory.textures--),i.remove(k[q])}i.remove(T)}let D=0;function z(){D=0}function H(){const T=D;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),D+=1,T}function W(T){const x=[];return x.push(T.wrapS),x.push(T.wrapT),x.push(T.wrapR||0),x.push(T.magFilter),x.push(T.minFilter),x.push(T.anisotropy),x.push(T.internalFormat),x.push(T.format),x.push(T.type),x.push(T.generateMipmaps),x.push(T.premultiplyAlpha),x.push(T.flipY),x.push(T.unpackAlignment),x.push(T.colorSpace),x.join()}function Y(T,x){const k=i.get(T);if(T.isVideoTexture&&ze(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&k.__version!==T.version){const q=T.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(k,T,x);return}}else T.isExternalTexture&&(k.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,k.__webglTexture,n.TEXTURE0+x)}function X(T,x){const k=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&k.__version!==T.version){$(k,T,x);return}t.bindTexture(n.TEXTURE_2D_ARRAY,k.__webglTexture,n.TEXTURE0+x)}function ne(T,x){const k=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&k.__version!==T.version){$(k,T,x);return}t.bindTexture(n.TEXTURE_3D,k.__webglTexture,n.TEXTURE0+x)}function G(T,x){const k=i.get(T);if(T.version>0&&k.__version!==T.version){Z(k,T,x);return}t.bindTexture(n.TEXTURE_CUBE_MAP,k.__webglTexture,n.TEXTURE0+x)}const ae={[Fa]:n.REPEAT,[Oi]:n.CLAMP_TO_EDGE,[al]:n.MIRRORED_REPEAT},he={[Rn]:n.NEAREST,[Sf]:n.NEAREST_MIPMAP_NEAREST,[Vr]:n.NEAREST_MIPMAP_LINEAR,[Un]:n.LINEAR,[ro]:n.LINEAR_MIPMAP_NEAREST,[Bi]:n.LINEAR_MIPMAP_LINEAR},be={[Tf]:n.NEVER,[Df]:n.ALWAYS,[wf]:n.LESS,[Id]:n.LEQUAL,[Af]:n.EQUAL,[Pf]:n.GEQUAL,[Rf]:n.GREATER,[Cf]:n.NOTEQUAL};function Be(T,x){if(x.type===ni&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===Un||x.magFilter===ro||x.magFilter===Vr||x.magFilter===Bi||x.minFilter===Un||x.minFilter===ro||x.minFilter===Vr||x.minFilter===Bi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(T,n.TEXTURE_WRAP_S,ae[x.wrapS]),n.texParameteri(T,n.TEXTURE_WRAP_T,ae[x.wrapT]),(T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY)&&n.texParameteri(T,n.TEXTURE_WRAP_R,ae[x.wrapR]),n.texParameteri(T,n.TEXTURE_MAG_FILTER,he[x.magFilter]),n.texParameteri(T,n.TEXTURE_MIN_FILTER,he[x.minFilter]),x.compareFunction&&(n.texParameteri(T,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(T,n.TEXTURE_COMPARE_FUNC,be[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Rn||x.minFilter!==Vr&&x.minFilter!==Bi||x.type===ni&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const k=e.get("EXT_texture_filter_anisotropic");n.texParameterf(T,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function st(T,x){let k=!1;T.__webglInit===void 0&&(T.__webglInit=!0,x.addEventListener("dispose",w));const q=x.source;let j=u.get(q);j===void 0&&(j={},u.set(q,j));const V=W(x);if(V!==T.__cacheKey){j[V]===void 0&&(j[V]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,k=!0),j[V].usedTimes++;const Me=j[T.__cacheKey];Me!==void 0&&(j[T.__cacheKey].usedTimes--,Me.usedTimes===0&&S(x)),T.__cacheKey=V,T.__webglTexture=j[V].texture}return k}function ct(T,x,k){return Math.floor(Math.floor(T/k)/x)}function Ke(T,x,k,q){const V=T.updateRanges;if(V.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,x.width,x.height,k,q,x.data);else{V.sort((ee,ce)=>ee.start-ce.start);let Me=0;for(let ee=1;ee<V.length;ee++){const ce=V[Me],Ce=V[ee],ye=ce.start+ce.count,oe=ct(Ce.start,x.width,4),Fe=ct(ce.start,x.width,4);Ce.start<=ye+1&&oe===Fe&&ct(Ce.start+Ce.count-1,x.width,4)===oe?ce.count=Math.max(ce.count,Ce.start+Ce.count-ce.start):(++Me,V[Me]=Ce)}V.length=Me+1;const ie=n.getParameter(n.UNPACK_ROW_LENGTH),xe=n.getParameter(n.UNPACK_SKIP_PIXELS),ve=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,x.width);for(let ee=0,ce=V.length;ee<ce;ee++){const Ce=V[ee],ye=Math.floor(Ce.start/4),oe=Math.ceil(Ce.count/4),Fe=ye%x.width,L=Math.floor(ye/x.width),te=oe,se=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Fe),n.pixelStorei(n.UNPACK_SKIP_ROWS,L),t.texSubImage2D(n.TEXTURE_2D,0,Fe,L,te,se,k,q,x.data)}T.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,ie),n.pixelStorei(n.UNPACK_SKIP_PIXELS,xe),n.pixelStorei(n.UNPACK_SKIP_ROWS,ve)}}function $(T,x,k){let q=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(q=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(q=n.TEXTURE_3D);const j=st(T,x),V=x.source;t.bindTexture(q,T.__webglTexture,n.TEXTURE0+k);const Me=i.get(V);if(V.version!==Me.__version||j===!0){t.activeTexture(n.TEXTURE0+k);const ie=Ye.getPrimaries(Ye.workingColorSpace),xe=x.colorSpace===mi?null:Ye.getPrimaries(x.colorSpace),ve=x.colorSpace===mi||ie===xe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);let ee=_(x.image,!1,s.maxTextureSize);ee=Dt(x,ee);const ce=r.convert(x.format,x.colorSpace),Ce=r.convert(x.type);let ye=E(x.internalFormat,ce,Ce,x.colorSpace,x.isVideoTexture);Be(q,x);let oe;const Fe=x.mipmaps,L=x.isVideoTexture!==!0,te=Me.__version===void 0||j===!0,se=V.dataReady,ue=A(x,ee);if(x.isDepthTexture)ye=v(x.format===Tr,x.type),te&&(L?t.texStorage2D(n.TEXTURE_2D,1,ye,ee.width,ee.height):t.texImage2D(n.TEXTURE_2D,0,ye,ee.width,ee.height,0,ce,Ce,null));else if(x.isDataTexture)if(Fe.length>0){L&&te&&t.texStorage2D(n.TEXTURE_2D,ue,ye,Fe[0].width,Fe[0].height);for(let J=0,K=Fe.length;J<K;J++)oe=Fe[J],L?se&&t.texSubImage2D(n.TEXTURE_2D,J,0,0,oe.width,oe.height,ce,Ce,oe.data):t.texImage2D(n.TEXTURE_2D,J,ye,oe.width,oe.height,0,ce,Ce,oe.data);x.generateMipmaps=!1}else L?(te&&t.texStorage2D(n.TEXTURE_2D,ue,ye,ee.width,ee.height),se&&Ke(x,ee,ce,Ce)):t.texImage2D(n.TEXTURE_2D,0,ye,ee.width,ee.height,0,ce,Ce,ee.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){L&&te&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ue,ye,Fe[0].width,Fe[0].height,ee.depth);for(let J=0,K=Fe.length;J<K;J++)if(oe=Fe[J],x.format!==An)if(ce!==null)if(L){if(se)if(x.layerUpdates.size>0){const me=xh(oe.width,oe.height,x.format,x.type);for(const Ue of x.layerUpdates){const rt=oe.data.subarray(Ue*me/oe.data.BYTES_PER_ELEMENT,(Ue+1)*me/oe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,Ue,oe.width,oe.height,1,ce,rt)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,0,oe.width,oe.height,ee.depth,ce,oe.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,J,ye,oe.width,oe.height,ee.depth,0,oe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else L?se&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,0,oe.width,oe.height,ee.depth,ce,Ce,oe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,J,ye,oe.width,oe.height,ee.depth,0,ce,Ce,oe.data)}else{L&&te&&t.texStorage2D(n.TEXTURE_2D,ue,ye,Fe[0].width,Fe[0].height);for(let J=0,K=Fe.length;J<K;J++)oe=Fe[J],x.format!==An?ce!==null?L?se&&t.compressedTexSubImage2D(n.TEXTURE_2D,J,0,0,oe.width,oe.height,ce,oe.data):t.compressedTexImage2D(n.TEXTURE_2D,J,ye,oe.width,oe.height,0,oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?se&&t.texSubImage2D(n.TEXTURE_2D,J,0,0,oe.width,oe.height,ce,Ce,oe.data):t.texImage2D(n.TEXTURE_2D,J,ye,oe.width,oe.height,0,ce,Ce,oe.data)}else if(x.isDataArrayTexture)if(L){if(te&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ue,ye,ee.width,ee.height,ee.depth),se)if(x.layerUpdates.size>0){const J=xh(ee.width,ee.height,x.format,x.type);for(const K of x.layerUpdates){const me=ee.data.subarray(K*J/ee.data.BYTES_PER_ELEMENT,(K+1)*J/ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,K,ee.width,ee.height,1,ce,Ce,me)}x.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,ce,Ce,ee.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,ye,ee.width,ee.height,ee.depth,0,ce,Ce,ee.data);else if(x.isData3DTexture)L?(te&&t.texStorage3D(n.TEXTURE_3D,ue,ye,ee.width,ee.height,ee.depth),se&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,ce,Ce,ee.data)):t.texImage3D(n.TEXTURE_3D,0,ye,ee.width,ee.height,ee.depth,0,ce,Ce,ee.data);else if(x.isFramebufferTexture){if(te)if(L)t.texStorage2D(n.TEXTURE_2D,ue,ye,ee.width,ee.height);else{let J=ee.width,K=ee.height;for(let me=0;me<ue;me++)t.texImage2D(n.TEXTURE_2D,me,ye,J,K,0,ce,Ce,null),J>>=1,K>>=1}}else if(Fe.length>0){if(L&&te){const J=vt(Fe[0]);t.texStorage2D(n.TEXTURE_2D,ue,ye,J.width,J.height)}for(let J=0,K=Fe.length;J<K;J++)oe=Fe[J],L?se&&t.texSubImage2D(n.TEXTURE_2D,J,0,0,ce,Ce,oe):t.texImage2D(n.TEXTURE_2D,J,ye,ce,Ce,oe);x.generateMipmaps=!1}else if(L){if(te){const J=vt(ee);t.texStorage2D(n.TEXTURE_2D,ue,ye,J.width,J.height)}se&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ce,Ce,ee)}else t.texImage2D(n.TEXTURE_2D,0,ye,ce,Ce,ee);m(x)&&f(q),Me.__version=V.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function Z(T,x,k){if(x.image.length!==6)return;const q=st(T,x),j=x.source;t.bindTexture(n.TEXTURE_CUBE_MAP,T.__webglTexture,n.TEXTURE0+k);const V=i.get(j);if(j.version!==V.__version||q===!0){t.activeTexture(n.TEXTURE0+k);const Me=Ye.getPrimaries(Ye.workingColorSpace),ie=x.colorSpace===mi?null:Ye.getPrimaries(x.colorSpace),xe=x.colorSpace===mi||Me===ie?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);const ve=x.isCompressedTexture||x.image[0].isCompressedTexture,ee=x.image[0]&&x.image[0].isDataTexture,ce=[];for(let K=0;K<6;K++)!ve&&!ee?ce[K]=_(x.image[K],!0,s.maxCubemapSize):ce[K]=ee?x.image[K].image:x.image[K],ce[K]=Dt(x,ce[K]);const Ce=ce[0],ye=r.convert(x.format,x.colorSpace),oe=r.convert(x.type),Fe=E(x.internalFormat,ye,oe,x.colorSpace),L=x.isVideoTexture!==!0,te=V.__version===void 0||q===!0,se=j.dataReady;let ue=A(x,Ce);Be(n.TEXTURE_CUBE_MAP,x);let J;if(ve){L&&te&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ue,Fe,Ce.width,Ce.height);for(let K=0;K<6;K++){J=ce[K].mipmaps;for(let me=0;me<J.length;me++){const Ue=J[me];x.format!==An?ye!==null?L?se&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,me,0,0,Ue.width,Ue.height,ye,Ue.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,me,Fe,Ue.width,Ue.height,0,Ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,me,0,0,Ue.width,Ue.height,ye,oe,Ue.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,me,Fe,Ue.width,Ue.height,0,ye,oe,Ue.data)}}}else{if(J=x.mipmaps,L&&te){J.length>0&&ue++;const K=vt(ce[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ue,Fe,K.width,K.height)}for(let K=0;K<6;K++)if(ee){L?se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,ce[K].width,ce[K].height,ye,oe,ce[K].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Fe,ce[K].width,ce[K].height,0,ye,oe,ce[K].data);for(let me=0;me<J.length;me++){const rt=J[me].image[K].image;L?se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,me+1,0,0,rt.width,rt.height,ye,oe,rt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,me+1,Fe,rt.width,rt.height,0,ye,oe,rt.data)}}else{L?se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,ye,oe,ce[K]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Fe,ye,oe,ce[K]);for(let me=0;me<J.length;me++){const Ue=J[me];L?se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,me+1,0,0,ye,oe,Ue.image[K]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,me+1,Fe,ye,oe,Ue.image[K])}}}m(x)&&f(n.TEXTURE_CUBE_MAP),V.__version=j.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function fe(T,x,k,q,j,V){const Me=r.convert(k.format,k.colorSpace),ie=r.convert(k.type),xe=E(k.internalFormat,Me,ie,k.colorSpace),ve=i.get(x),ee=i.get(k);if(ee.__renderTarget=x,!ve.__hasExternalTextures){const ce=Math.max(1,x.width>>V),Ce=Math.max(1,x.height>>V);j===n.TEXTURE_3D||j===n.TEXTURE_2D_ARRAY?t.texImage3D(j,V,xe,ce,Ce,x.depth,0,Me,ie,null):t.texImage2D(j,V,xe,ce,Ce,0,Me,ie,null)}t.bindFramebuffer(n.FRAMEBUFFER,T),_e(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,q,j,ee.__webglTexture,0,dt(x)):(j===n.TEXTURE_2D||j>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,q,j,ee.__webglTexture,V),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ie(T,x,k){if(n.bindRenderbuffer(n.RENDERBUFFER,T),x.depthBuffer){const q=x.depthTexture,j=q&&q.isDepthTexture?q.type:null,V=v(x.stencilBuffer,j),Me=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ie=dt(x);_e(x)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ie,V,x.width,x.height):k?n.renderbufferStorageMultisample(n.RENDERBUFFER,ie,V,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,V,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Me,n.RENDERBUFFER,T)}else{const q=x.textures;for(let j=0;j<q.length;j++){const V=q[j],Me=r.convert(V.format,V.colorSpace),ie=r.convert(V.type),xe=E(V.internalFormat,Me,ie,V.colorSpace),ve=dt(x);k&&_e(x)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ve,xe,x.width,x.height):_e(x)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ve,xe,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,xe,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Se(T,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,T),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const q=i.get(x.depthTexture);q.__renderTarget=x,(!q.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),Y(x.depthTexture,0);const j=q.__webglTexture,V=dt(x);if(x.depthTexture.format===Er)_e(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,j,0,V):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,j,0);else if(x.depthTexture.format===Tr)_e(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,j,0,V):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function Xe(T){const x=i.get(T),k=T.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==T.depthTexture){const q=T.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),q){const j=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,q.removeEventListener("dispose",j)};q.addEventListener("dispose",j),x.__depthDisposeCallback=j}x.__boundDepthTexture=q}if(T.depthTexture&&!x.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");const q=T.texture.mipmaps;q&&q.length>0?Se(x.__webglFramebuffer[0],T):Se(x.__webglFramebuffer,T)}else if(k){x.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[q]),x.__webglDepthbuffer[q]===void 0)x.__webglDepthbuffer[q]=n.createRenderbuffer(),Ie(x.__webglDepthbuffer[q],T,!1);else{const j=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,V=x.__webglDepthbuffer[q];n.bindRenderbuffer(n.RENDERBUFFER,V),n.framebufferRenderbuffer(n.FRAMEBUFFER,j,n.RENDERBUFFER,V)}}else{const q=T.texture.mipmaps;if(q&&q.length>0?t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=n.createRenderbuffer(),Ie(x.__webglDepthbuffer,T,!1);else{const j=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,V=x.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,V),n.framebufferRenderbuffer(n.FRAMEBUFFER,j,n.RENDERBUFFER,V)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ft(T,x,k){const q=i.get(T);x!==void 0&&fe(q.__webglFramebuffer,T,T.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),k!==void 0&&Xe(T)}function R(T){const x=T.texture,k=i.get(T),q=i.get(x);T.addEventListener("dispose",C);const j=T.textures,V=T.isWebGLCubeRenderTarget===!0,Me=j.length>1;if(Me||(q.__webglTexture===void 0&&(q.__webglTexture=n.createTexture()),q.__version=x.version,a.memory.textures++),V){k.__webglFramebuffer=[];for(let ie=0;ie<6;ie++)if(x.mipmaps&&x.mipmaps.length>0){k.__webglFramebuffer[ie]=[];for(let xe=0;xe<x.mipmaps.length;xe++)k.__webglFramebuffer[ie][xe]=n.createFramebuffer()}else k.__webglFramebuffer[ie]=n.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){k.__webglFramebuffer=[];for(let ie=0;ie<x.mipmaps.length;ie++)k.__webglFramebuffer[ie]=n.createFramebuffer()}else k.__webglFramebuffer=n.createFramebuffer();if(Me)for(let ie=0,xe=j.length;ie<xe;ie++){const ve=i.get(j[ie]);ve.__webglTexture===void 0&&(ve.__webglTexture=n.createTexture(),a.memory.textures++)}if(T.samples>0&&_e(T)===!1){k.__webglMultisampledFramebuffer=n.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let ie=0;ie<j.length;ie++){const xe=j[ie];k.__webglColorRenderbuffer[ie]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,k.__webglColorRenderbuffer[ie]);const ve=r.convert(xe.format,xe.colorSpace),ee=r.convert(xe.type),ce=E(xe.internalFormat,ve,ee,xe.colorSpace,T.isXRRenderTarget===!0),Ce=dt(T);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ce,ce,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ie,n.RENDERBUFFER,k.__webglColorRenderbuffer[ie])}n.bindRenderbuffer(n.RENDERBUFFER,null),T.depthBuffer&&(k.__webglDepthRenderbuffer=n.createRenderbuffer(),Ie(k.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(V){t.bindTexture(n.TEXTURE_CUBE_MAP,q.__webglTexture),Be(n.TEXTURE_CUBE_MAP,x);for(let ie=0;ie<6;ie++)if(x.mipmaps&&x.mipmaps.length>0)for(let xe=0;xe<x.mipmaps.length;xe++)fe(k.__webglFramebuffer[ie][xe],T,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,xe);else fe(k.__webglFramebuffer[ie],T,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0);m(x)&&f(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Me){for(let ie=0,xe=j.length;ie<xe;ie++){const ve=j[ie],ee=i.get(ve);let ce=n.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ce=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ce,ee.__webglTexture),Be(ce,ve),fe(k.__webglFramebuffer,T,ve,n.COLOR_ATTACHMENT0+ie,ce,0),m(ve)&&f(ce)}t.unbindTexture()}else{let ie=n.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ie=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ie,q.__webglTexture),Be(ie,x),x.mipmaps&&x.mipmaps.length>0)for(let xe=0;xe<x.mipmaps.length;xe++)fe(k.__webglFramebuffer[xe],T,x,n.COLOR_ATTACHMENT0,ie,xe);else fe(k.__webglFramebuffer,T,x,n.COLOR_ATTACHMENT0,ie,0);m(x)&&f(ie),t.unbindTexture()}T.depthBuffer&&Xe(T)}function ht(T){const x=T.textures;for(let k=0,q=x.length;k<q;k++){const j=x[k];if(m(j)){const V=b(T),Me=i.get(j).__webglTexture;t.bindTexture(V,Me),f(V),t.unbindTexture()}}}const Ne=[],Pe=[];function ge(T){if(T.samples>0){if(_e(T)===!1){const x=T.textures,k=T.width,q=T.height;let j=n.COLOR_BUFFER_BIT;const V=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Me=i.get(T),ie=x.length>1;if(ie)for(let ve=0;ve<x.length;ve++)t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer);const xe=T.texture.mipmaps;xe&&xe.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Me.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let ve=0;ve<x.length;ve++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(j|=n.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(j|=n.STENCIL_BUFFER_BIT)),ie){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Me.__webglColorRenderbuffer[ve]);const ee=i.get(x[ve]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ee,0)}n.blitFramebuffer(0,0,k,q,0,0,k,q,j,n.NEAREST),c===!0&&(Ne.length=0,Pe.length=0,Ne.push(n.COLOR_ATTACHMENT0+ve),T.depthBuffer&&T.resolveDepthBuffer===!1&&(Ne.push(V),Pe.push(V),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Pe)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Ne))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ie)for(let ve=0;ve<x.length;ve++){t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.RENDERBUFFER,Me.__webglColorRenderbuffer[ve]);const ee=i.get(x[ve]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.TEXTURE_2D,ee,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&c){const x=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[x])}}}function dt(T){return Math.min(s.maxSamples,T.samples)}function _e(T){const x=i.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function ze(T){const x=a.render.frame;h.get(T)!==x&&(h.set(T,x),T.update())}function Dt(T,x){const k=T.colorSpace,q=T.format,j=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||k!==Is&&k!==mi&&(Ye.getTransfer(k)===et?(q!==An||j!==kn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),x}function vt(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(l.width=T.naturalWidth||T.width,l.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(l.width=T.displayWidth,l.height=T.displayHeight):(l.width=T.width,l.height=T.height),l}this.allocateTextureUnit=H,this.resetTextureUnits=z,this.setTexture2D=Y,this.setTexture2DArray=X,this.setTexture3D=ne,this.setTextureCube=G,this.rebindTextures=Ft,this.setupRenderTarget=R,this.updateRenderTargetMipmap=ht,this.updateMultisampleRenderTarget=ge,this.setupDepthRenderbuffer=Xe,this.setupFrameBufferTexture=fe,this.useMultisampledRTT=_e}function fx(n,e){function t(i,s=mi){let r;const a=Ye.getTransfer(s);if(i===kn)return n.UNSIGNED_BYTE;if(i===Zl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Jl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Td)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===wd)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===bd)return n.BYTE;if(i===Ed)return n.SHORT;if(i===Sr)return n.UNSIGNED_SHORT;if(i===jl)return n.INT;if(i===Yi)return n.UNSIGNED_INT;if(i===ni)return n.FLOAT;if(i===Nr)return n.HALF_FLOAT;if(i===Ad)return n.ALPHA;if(i===Rd)return n.RGB;if(i===An)return n.RGBA;if(i===Er)return n.DEPTH_COMPONENT;if(i===Tr)return n.DEPTH_STENCIL;if(i===Cd)return n.RED;if(i===Ql)return n.RED_INTEGER;if(i===Pd)return n.RG;if(i===ec)return n.RG_INTEGER;if(i===tc)return n.RGBA_INTEGER;if(i===Ca||i===Pa||i===Da||i===La)if(a===et)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Ca)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Pa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Da)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===La)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Ca)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Pa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Da)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===La)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ol||i===ll||i===cl||i===hl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===ol)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ll)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===cl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===hl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===dl||i===ul||i===fl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===dl||i===ul)return a===et?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===fl)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===pl||i===ml||i===gl||i===_l||i===xl||i===vl||i===yl||i===Ml||i===Sl||i===bl||i===El||i===Tl||i===wl||i===Al)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===pl)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ml)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===gl)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===_l)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===xl)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===vl)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===yl)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ml)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Sl)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===bl)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===El)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Tl)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===wl)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Al)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Rl||i===Cl||i===Pl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Rl)return a===et?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Cl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Pl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Dl||i===Ll||i===Il||i===Ul)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Dl)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Ll)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Il)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ul)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===br?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const px=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,mx=`
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

}`;class gx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new Xd(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new yi({vertexShader:px,fragmentShader:mx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Te(new Vt(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class _x extends Os{constructor(e,t){super();const i=this;let s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,d=null,u=null,p=null,g=null;const _=typeof XRWebGLBinding<"u",m=new gx,f={},b=t.getContextAttributes();let E=null,v=null;const A=[],w=[],C=new Le;let P=null;const S=new ln;S.viewport=new nt;const M=new ln;M.viewport=new nt;const D=[S,M],z=new Fp;let H=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let Z=A[$];return Z===void 0&&(Z=new Ao,A[$]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function($){let Z=A[$];return Z===void 0&&(Z=new Ao,A[$]=Z),Z.getGripSpace()},this.getHand=function($){let Z=A[$];return Z===void 0&&(Z=new Ao,A[$]=Z),Z.getHandSpace()};function Y($){const Z=w.indexOf($.inputSource);if(Z===-1)return;const fe=A[Z];fe!==void 0&&(fe.update($.inputSource,$.frame,l||a),fe.dispatchEvent({type:$.type,data:$.inputSource}))}function X(){s.removeEventListener("select",Y),s.removeEventListener("selectstart",Y),s.removeEventListener("selectend",Y),s.removeEventListener("squeeze",Y),s.removeEventListener("squeezestart",Y),s.removeEventListener("squeezeend",Y),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",ne);for(let $=0;$<A.length;$++){const Z=w[$];Z!==null&&(w[$]=null,A[$].disconnect(Z))}H=null,W=null,m.reset();for(const $ in f)delete f[$];e.setRenderTarget(E),p=null,u=null,d=null,s=null,v=null,Ke.stop(),i.isPresenting=!1,e.setPixelRatio(P),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function($){l=$},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(E=e.getRenderTarget(),s.addEventListener("select",Y),s.addEventListener("selectstart",Y),s.addEventListener("selectend",Y),s.addEventListener("squeeze",Y),s.addEventListener("squeezestart",Y),s.addEventListener("squeezeend",Y),s.addEventListener("end",X),s.addEventListener("inputsourceschange",ne),b.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(C),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let fe=null,Ie=null,Se=null;b.depth&&(Se=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,fe=b.stencil?Tr:Er,Ie=b.stencil?br:Yi);const Xe={colorFormat:t.RGBA8,depthFormat:Se,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(Xe),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),v=new $i(u.textureWidth,u.textureHeight,{format:An,type:kn,depthTexture:new Wd(u.textureWidth,u.textureHeight,Ie,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{const fe={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,fe),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new $i(p.framebufferWidth,p.framebufferHeight,{format:An,type:kn,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),Ke.setContext(s),Ke.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ne($){for(let Z=0;Z<$.removed.length;Z++){const fe=$.removed[Z],Ie=w.indexOf(fe);Ie>=0&&(w[Ie]=null,A[Ie].disconnect(fe))}for(let Z=0;Z<$.added.length;Z++){const fe=$.added[Z];let Ie=w.indexOf(fe);if(Ie===-1){for(let Xe=0;Xe<A.length;Xe++)if(Xe>=w.length){w.push(fe),Ie=Xe;break}else if(w[Xe]===null){w[Xe]=fe,Ie=Xe;break}if(Ie===-1)break}const Se=A[Ie];Se&&Se.connect(fe)}}const G=new I,ae=new I;function he($,Z,fe){G.setFromMatrixPosition(Z.matrixWorld),ae.setFromMatrixPosition(fe.matrixWorld);const Ie=G.distanceTo(ae),Se=Z.projectionMatrix.elements,Xe=fe.projectionMatrix.elements,Ft=Se[14]/(Se[10]-1),R=Se[14]/(Se[10]+1),ht=(Se[9]+1)/Se[5],Ne=(Se[9]-1)/Se[5],Pe=(Se[8]-1)/Se[0],ge=(Xe[8]+1)/Xe[0],dt=Ft*Pe,_e=Ft*ge,ze=Ie/(-Pe+ge),Dt=ze*-Pe;if(Z.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Dt),$.translateZ(ze),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Se[10]===-1)$.projectionMatrix.copy(Z.projectionMatrix),$.projectionMatrixInverse.copy(Z.projectionMatrixInverse);else{const vt=Ft+ze,T=R+ze,x=dt-Dt,k=_e+(Ie-Dt),q=ht*R/T*vt,j=Ne*R/T*vt;$.projectionMatrix.makePerspective(x,k,q,j,vt,T),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function be($,Z){Z===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(Z.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let Z=$.near,fe=$.far;m.texture!==null&&(m.depthNear>0&&(Z=m.depthNear),m.depthFar>0&&(fe=m.depthFar)),z.near=M.near=S.near=Z,z.far=M.far=S.far=fe,(H!==z.near||W!==z.far)&&(s.updateRenderState({depthNear:z.near,depthFar:z.far}),H=z.near,W=z.far),z.layers.mask=$.layers.mask|6,S.layers.mask=z.layers.mask&3,M.layers.mask=z.layers.mask&5;const Ie=$.parent,Se=z.cameras;be(z,Ie);for(let Xe=0;Xe<Se.length;Xe++)be(Se[Xe],Ie);Se.length===2?he(z,S,M):z.projectionMatrix.copy(S.projectionMatrix),Be($,z,Ie)};function Be($,Z,fe){fe===null?$.matrix.copy(Z.matrixWorld):($.matrix.copy(fe.matrixWorld),$.matrix.invert(),$.matrix.multiply(Z.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(Z.projectionMatrix),$.projectionMatrixInverse.copy(Z.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=wr*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(u===null&&p===null))return c},this.setFoveation=function($){c=$,u!==null&&(u.fixedFoveation=$),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=$)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(z)},this.getCameraTexture=function($){return f[$]};let st=null;function ct($,Z){if(h=Z.getViewerPose(l||a),g=Z,h!==null){const fe=h.views;p!==null&&(e.setRenderTargetFramebuffer(v,p.framebuffer),e.setRenderTarget(v));let Ie=!1;fe.length!==z.cameras.length&&(z.cameras.length=0,Ie=!0);for(let R=0;R<fe.length;R++){const ht=fe[R];let Ne=null;if(p!==null)Ne=p.getViewport(ht);else{const ge=d.getViewSubImage(u,ht);Ne=ge.viewport,R===0&&(e.setRenderTargetTextures(v,ge.colorTexture,ge.depthStencilTexture),e.setRenderTarget(v))}let Pe=D[R];Pe===void 0&&(Pe=new ln,Pe.layers.enable(R),Pe.viewport=new nt,D[R]=Pe),Pe.matrix.fromArray(ht.transform.matrix),Pe.matrix.decompose(Pe.position,Pe.quaternion,Pe.scale),Pe.projectionMatrix.fromArray(ht.projectionMatrix),Pe.projectionMatrixInverse.copy(Pe.projectionMatrix).invert(),Pe.viewport.set(Ne.x,Ne.y,Ne.width,Ne.height),R===0&&(z.matrix.copy(Pe.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),Ie===!0&&z.cameras.push(Pe)}const Se=s.enabledFeatures;if(Se&&Se.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){d=i.getBinding();const R=d.getDepthInformation(fe[0]);R&&R.isValid&&R.texture&&m.init(R,s.renderState)}if(Se&&Se.includes("camera-access")&&_){e.state.unbindTexture(),d=i.getBinding();for(let R=0;R<fe.length;R++){const ht=fe[R].camera;if(ht){let Ne=f[ht];Ne||(Ne=new Xd,f[ht]=Ne);const Pe=d.getCameraImage(ht);Ne.sourceTexture=Pe}}}}for(let fe=0;fe<A.length;fe++){const Ie=w[fe],Se=A[fe];Ie!==null&&Se!==void 0&&Se.update(Ie,Z,l||a)}st&&st($,Z),Z.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Z}),g=null}const Ke=new jd;Ke.setAnimationLoop(ct),this.setAnimationLoop=function($){st=$},this.dispose=function(){}}}const Ci=new zn,xx=new lt;function vx(n,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,Od(n)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,b,E,v){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),d(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),u(m,f),f.isMeshPhysicalMaterial&&p(m,f,v)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),_(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?c(m,f,b,E):f.isSpriteMaterial?l(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===en&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===en&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const b=e.get(f),E=b.envMap,v=b.envMapRotation;E&&(m.envMap.value=E,Ci.copy(v),Ci.x*=-1,Ci.y*=-1,Ci.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Ci.y*=-1,Ci.z*=-1),m.envMapRotation.value.setFromMatrix4(xx.makeRotationFromEuler(Ci)),m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function c(m,f,b,E){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*b,m.scale.value=E*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function l(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function u(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,b){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===en&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function _(m,f){const b=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function yx(n,e,t,i){let s={},r={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(b,E){const v=E.program;i.uniformBlockBinding(b,v)}function l(b,E){let v=s[b.id];v===void 0&&(g(b),v=h(b),s[b.id]=v,b.addEventListener("dispose",m));const A=E.program;i.updateUBOMapping(b,A);const w=e.render.frame;r[b.id]!==w&&(u(b),r[b.id]=w)}function h(b){const E=d();b.__bindingPointIndex=E;const v=n.createBuffer(),A=b.__size,w=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,v),n.bufferData(n.UNIFORM_BUFFER,A,w),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,E,v),v}function d(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(b){const E=s[b.id],v=b.uniforms,A=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,E);for(let w=0,C=v.length;w<C;w++){const P=Array.isArray(v[w])?v[w]:[v[w]];for(let S=0,M=P.length;S<M;S++){const D=P[S];if(p(D,w,S,A)===!0){const z=D.__offset,H=Array.isArray(D.value)?D.value:[D.value];let W=0;for(let Y=0;Y<H.length;Y++){const X=H[Y],ne=_(X);typeof X=="number"||typeof X=="boolean"?(D.__data[0]=X,n.bufferSubData(n.UNIFORM_BUFFER,z+W,D.__data)):X.isMatrix3?(D.__data[0]=X.elements[0],D.__data[1]=X.elements[1],D.__data[2]=X.elements[2],D.__data[3]=0,D.__data[4]=X.elements[3],D.__data[5]=X.elements[4],D.__data[6]=X.elements[5],D.__data[7]=0,D.__data[8]=X.elements[6],D.__data[9]=X.elements[7],D.__data[10]=X.elements[8],D.__data[11]=0):(X.toArray(D.__data,W),W+=ne.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,z,D.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(b,E,v,A){const w=b.value,C=E+"_"+v;if(A[C]===void 0)return typeof w=="number"||typeof w=="boolean"?A[C]=w:A[C]=w.clone(),!0;{const P=A[C];if(typeof w=="number"||typeof w=="boolean"){if(P!==w)return A[C]=w,!0}else if(P.equals(w)===!1)return P.copy(w),!0}return!1}function g(b){const E=b.uniforms;let v=0;const A=16;for(let C=0,P=E.length;C<P;C++){const S=Array.isArray(E[C])?E[C]:[E[C]];for(let M=0,D=S.length;M<D;M++){const z=S[M],H=Array.isArray(z.value)?z.value:[z.value];for(let W=0,Y=H.length;W<Y;W++){const X=H[W],ne=_(X),G=v%A,ae=G%ne.boundary,he=G+ae;v+=ae,he!==0&&A-he<ne.storage&&(v+=A-he),z.__data=new Float32Array(ne.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=v,v+=ne.storage}}}const w=v%A;return w>0&&(v+=A-w),b.__size=v,b.__cache={},this}function _(b){const E={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(E.boundary=4,E.storage=4):b.isVector2?(E.boundary=8,E.storage=8):b.isVector3||b.isColor?(E.boundary=16,E.storage=12):b.isVector4?(E.boundary=16,E.storage=16):b.isMatrix3?(E.boundary=48,E.storage=48):b.isMatrix4?(E.boundary=64,E.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),E}function m(b){const E=b.target;E.removeEventListener("dispose",m);const v=a.indexOf(E.__bindingPointIndex);a.splice(v,1),n.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function f(){for(const b in s)n.deleteBuffer(s[b]);a=[],s={},r={}}return{bind:c,update:l,dispose:f}}class Mx{constructor(e={}){const{canvas:t=$f(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=a;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,f=null;const b=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=_i,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let A=!1;this._outputColorSpace=ut;let w=0,C=0,P=null,S=-1,M=null;const D=new nt,z=new nt;let H=null;const W=new Ge(0);let Y=0,X=t.width,ne=t.height,G=1,ae=null,he=null;const be=new nt(0,0,X,ne),Be=new nt(0,0,X,ne);let st=!1;const ct=new oc;let Ke=!1,$=!1;const Z=new lt,fe=new I,Ie=new nt,Se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Xe=!1;function Ft(){return P===null?G:1}let R=i;function ht(y,U){return t.getContext(y,U)}try{const y={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Kl}`),t.addEventListener("webglcontextlost",se,!1),t.addEventListener("webglcontextrestored",ue,!1),t.addEventListener("webglcontextcreationerror",J,!1),R===null){const U="webgl2";if(R=ht(U,y),R===null)throw ht(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let Ne,Pe,ge,dt,_e,ze,Dt,vt,T,x,k,q,j,V,Me,ie,xe,ve,ee,ce,Ce,ye,oe,Fe;function L(){Ne=new Dg(R),Ne.init(),ye=new fx(R,Ne),Pe=new Eg(R,Ne,e,ye),ge=new dx(R,Ne),Pe.reversedDepthBuffer&&u&&ge.buffers.depth.setReversed(!0),dt=new Ug(R),_e=new J_,ze=new ux(R,Ne,ge,_e,Pe,ye,dt),Dt=new wg(v),vt=new Pg(v),T=new Bp(R),oe=new Sg(R,T),x=new Lg(R,T,dt,oe),k=new Fg(R,x,T,dt),ee=new Ng(R,Pe,ze),ie=new Tg(_e),q=new Z_(v,Dt,vt,Ne,Pe,oe,ie),j=new vx(v,_e),V=new ex,Me=new ax(Ne),ve=new Mg(v,Dt,vt,ge,k,p,c),xe=new cx(v,k,Pe),Fe=new yx(R,dt,Pe,ge),ce=new bg(R,Ne,dt),Ce=new Ig(R,Ne,dt),dt.programs=q.programs,v.capabilities=Pe,v.extensions=Ne,v.properties=_e,v.renderLists=V,v.shadowMap=xe,v.state=ge,v.info=dt}L();const te=new _x(v,R);this.xr=te,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const y=Ne.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=Ne.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(y){y!==void 0&&(G=y,this.setSize(X,ne,!1))},this.getSize=function(y){return y.set(X,ne)},this.setSize=function(y,U,O=!0){if(te.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=y,ne=U,t.width=Math.floor(y*G),t.height=Math.floor(U*G),O===!0&&(t.style.width=y+"px",t.style.height=U+"px"),this.setViewport(0,0,y,U)},this.getDrawingBufferSize=function(y){return y.set(X*G,ne*G).floor()},this.setDrawingBufferSize=function(y,U,O){X=y,ne=U,G=O,t.width=Math.floor(y*O),t.height=Math.floor(U*O),this.setViewport(0,0,y,U)},this.getCurrentViewport=function(y){return y.copy(D)},this.getViewport=function(y){return y.copy(be)},this.setViewport=function(y,U,O,B){y.isVector4?be.set(y.x,y.y,y.z,y.w):be.set(y,U,O,B),ge.viewport(D.copy(be).multiplyScalar(G).round())},this.getScissor=function(y){return y.copy(Be)},this.setScissor=function(y,U,O,B){y.isVector4?Be.set(y.x,y.y,y.z,y.w):Be.set(y,U,O,B),ge.scissor(z.copy(Be).multiplyScalar(G).round())},this.getScissorTest=function(){return st},this.setScissorTest=function(y){ge.setScissorTest(st=y)},this.setOpaqueSort=function(y){ae=y},this.setTransparentSort=function(y){he=y},this.getClearColor=function(y){return y.copy(ve.getClearColor())},this.setClearColor=function(){ve.setClearColor(...arguments)},this.getClearAlpha=function(){return ve.getClearAlpha()},this.setClearAlpha=function(){ve.setClearAlpha(...arguments)},this.clear=function(y=!0,U=!0,O=!0){let B=0;if(y){let N=!1;if(P!==null){const Q=P.texture.format;N=Q===tc||Q===ec||Q===Ql}if(N){const Q=P.texture.type,le=Q===kn||Q===Yi||Q===Sr||Q===br||Q===Zl||Q===Jl,pe=ve.getClearColor(),de=ve.getClearAlpha(),Re=pe.r,De=pe.g,Ee=pe.b;le?(g[0]=Re,g[1]=De,g[2]=Ee,g[3]=de,R.clearBufferuiv(R.COLOR,0,g)):(_[0]=Re,_[1]=De,_[2]=Ee,_[3]=de,R.clearBufferiv(R.COLOR,0,_))}else B|=R.COLOR_BUFFER_BIT}U&&(B|=R.DEPTH_BUFFER_BIT),O&&(B|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",se,!1),t.removeEventListener("webglcontextrestored",ue,!1),t.removeEventListener("webglcontextcreationerror",J,!1),ve.dispose(),V.dispose(),Me.dispose(),_e.dispose(),Dt.dispose(),vt.dispose(),k.dispose(),oe.dispose(),Fe.dispose(),q.dispose(),te.dispose(),te.removeEventListener("sessionstart",Dn),te.removeEventListener("sessionend",Dc),Si.stop()};function se(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function ue(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const y=dt.autoReset,U=xe.enabled,O=xe.autoUpdate,B=xe.needsUpdate,N=xe.type;L(),dt.autoReset=y,xe.enabled=U,xe.autoUpdate=O,xe.needsUpdate=B,xe.type=N}function J(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function K(y){const U=y.target;U.removeEventListener("dispose",K),me(U)}function me(y){Ue(y),_e.remove(y)}function Ue(y){const U=_e.get(y).programs;U!==void 0&&(U.forEach(function(O){q.releaseProgram(O)}),y.isShaderMaterial&&q.releaseShaderCache(y))}this.renderBufferDirect=function(y,U,O,B,N,Q){U===null&&(U=Se);const le=N.isMesh&&N.matrixWorld.determinant()<0,pe=Bu(y,U,O,B,N);ge.setMaterial(B,le);let de=O.index,Re=1;if(B.wireframe===!0){if(de=x.getWireframeAttribute(O),de===void 0)return;Re=2}const De=O.drawRange,Ee=O.attributes.position;let Ve=De.start*Re,Qe=(De.start+De.count)*Re;Q!==null&&(Ve=Math.max(Ve,Q.start*Re),Qe=Math.min(Qe,(Q.start+Q.count)*Re)),de!==null?(Ve=Math.max(Ve,0),Qe=Math.min(Qe,de.count)):Ee!=null&&(Ve=Math.max(Ve,0),Qe=Math.min(Qe,Ee.count));const _t=Qe-Ve;if(_t<0||_t===1/0)return;oe.setup(N,B,pe,O,de);let ot,it=ce;if(de!==null&&(ot=T.get(de),it=Ce,it.setIndex(ot)),N.isMesh)B.wireframe===!0?(ge.setLineWidth(B.wireframeLinewidth*Ft()),it.setMode(R.LINES)):it.setMode(R.TRIANGLES);else if(N.isLine){let we=B.linewidth;we===void 0&&(we=1),ge.setLineWidth(we*Ft()),N.isLineSegments?it.setMode(R.LINES):N.isLineLoop?it.setMode(R.LINE_LOOP):it.setMode(R.LINE_STRIP)}else N.isPoints?it.setMode(R.POINTS):N.isSprite&&it.setMode(R.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)Rr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),it.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(Ne.get("WEBGL_multi_draw"))it.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const we=N._multiDrawStarts,ft=N._multiDrawCounts,qe=N._multiDrawCount,nn=de?T.get(de).bytesPerElement:1,Qi=_e.get(B).currentProgram.getUniforms();for(let sn=0;sn<qe;sn++)Qi.setValue(R,"_gl_DrawID",sn),it.render(we[sn]/nn,ft[sn])}else if(N.isInstancedMesh)it.renderInstances(Ve,_t,N.count);else if(O.isInstancedBufferGeometry){const we=O._maxInstanceCount!==void 0?O._maxInstanceCount:1/0,ft=Math.min(O.instanceCount,we);it.renderInstances(Ve,_t,ft)}else it.render(Ve,_t)};function rt(y,U,O){y.transparent===!0&&y.side===Ot&&y.forceSinglePass===!1?(y.side=en,y.needsUpdate=!0,Gr(y,U,O),y.side=vi,y.needsUpdate=!0,Gr(y,U,O),y.side=Ot):Gr(y,U,O)}this.compile=function(y,U,O=null){O===null&&(O=y),f=Me.get(O),f.init(U),E.push(f),O.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(f.pushLight(N),N.castShadow&&f.pushShadow(N))}),y!==O&&y.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(f.pushLight(N),N.castShadow&&f.pushShadow(N))}),f.setupLights();const B=new Set;return y.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const Q=N.material;if(Q)if(Array.isArray(Q))for(let le=0;le<Q.length;le++){const pe=Q[le];rt(pe,O,N),B.add(pe)}else rt(Q,O,N),B.add(Q)}),f=E.pop(),B},this.compileAsync=function(y,U,O=null){const B=this.compile(y,U,O);return new Promise(N=>{function Q(){if(B.forEach(function(le){_e.get(le).currentProgram.isReady()&&B.delete(le)}),B.size===0){N(y);return}setTimeout(Q,10)}Ne.get("KHR_parallel_shader_compile")!==null?Q():setTimeout(Q,10)})};let je=null;function Gn(y){je&&je(y)}function Dn(){Si.stop()}function Dc(){Si.start()}const Si=new jd;Si.setAnimationLoop(Gn),typeof self<"u"&&Si.setContext(self),this.setAnimationLoop=function(y){je=y,te.setAnimationLoop(y),y===null?Si.stop():Si.start()},te.addEventListener("sessionstart",Dn),te.addEventListener("sessionend",Dc),this.render=function(y,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),te.enabled===!0&&te.isPresenting===!0&&(te.cameraAutoUpdate===!0&&te.updateCamera(U),U=te.getCamera()),y.isScene===!0&&y.onBeforeRender(v,y,U,P),f=Me.get(y,E.length),f.init(U),E.push(f),Z.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),ct.setFromProjectionMatrix(Z,Nn,U.reversedDepth),$=this.localClippingEnabled,Ke=ie.init(this.clippingPlanes,$),m=V.get(y,b.length),m.init(),b.push(m),te.enabled===!0&&te.isPresenting===!0){const Q=v.xr.getDepthSensingMesh();Q!==null&&io(Q,U,-1/0,v.sortObjects)}io(y,U,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(ae,he),Xe=te.enabled===!1||te.isPresenting===!1||te.hasDepthSensing()===!1,Xe&&ve.addToRenderList(m,y),this.info.render.frame++,Ke===!0&&ie.beginShadows();const O=f.state.shadowsArray;xe.render(O,y,U),Ke===!0&&ie.endShadows(),this.info.autoReset===!0&&this.info.reset();const B=m.opaque,N=m.transmissive;if(f.setupLights(),U.isArrayCamera){const Q=U.cameras;if(N.length>0)for(let le=0,pe=Q.length;le<pe;le++){const de=Q[le];Ic(B,N,y,de)}Xe&&ve.render(y);for(let le=0,pe=Q.length;le<pe;le++){const de=Q[le];Lc(m,y,de,de.viewport)}}else N.length>0&&Ic(B,N,y,U),Xe&&ve.render(y),Lc(m,y,U);P!==null&&C===0&&(ze.updateMultisampleRenderTarget(P),ze.updateRenderTargetMipmap(P)),y.isScene===!0&&y.onAfterRender(v,y,U),oe.resetDefaultState(),S=-1,M=null,E.pop(),E.length>0?(f=E[E.length-1],Ke===!0&&ie.setGlobalState(v.clippingPlanes,f.state.camera)):f=null,b.pop(),b.length>0?m=b[b.length-1]:m=null};function io(y,U,O,B){if(y.visible===!1)return;if(y.layers.test(U.layers)){if(y.isGroup)O=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(U);else if(y.isLight)f.pushLight(y),y.castShadow&&f.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||ct.intersectsSprite(y)){B&&Ie.setFromMatrixPosition(y.matrixWorld).applyMatrix4(Z);const le=k.update(y),pe=y.material;pe.visible&&m.push(y,le,pe,O,Ie.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||ct.intersectsObject(y))){const le=k.update(y),pe=y.material;if(B&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Ie.copy(y.boundingSphere.center)):(le.boundingSphere===null&&le.computeBoundingSphere(),Ie.copy(le.boundingSphere.center)),Ie.applyMatrix4(y.matrixWorld).applyMatrix4(Z)),Array.isArray(pe)){const de=le.groups;for(let Re=0,De=de.length;Re<De;Re++){const Ee=de[Re],Ve=pe[Ee.materialIndex];Ve&&Ve.visible&&m.push(y,le,Ve,O,Ie.z,Ee)}}else pe.visible&&m.push(y,le,pe,O,Ie.z,null)}}const Q=y.children;for(let le=0,pe=Q.length;le<pe;le++)io(Q[le],U,O,B)}function Lc(y,U,O,B){const N=y.opaque,Q=y.transmissive,le=y.transparent;f.setupLightsView(O),Ke===!0&&ie.setGlobalState(v.clippingPlanes,O),B&&ge.viewport(D.copy(B)),N.length>0&&Hr(N,U,O),Q.length>0&&Hr(Q,U,O),le.length>0&&Hr(le,U,O),ge.buffers.depth.setTest(!0),ge.buffers.depth.setMask(!0),ge.buffers.color.setMask(!0),ge.setPolygonOffset(!1)}function Ic(y,U,O,B){if((O.isScene===!0?O.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[B.id]===void 0&&(f.state.transmissionRenderTarget[B.id]=new $i(1,1,{generateMipmaps:!0,type:Ne.has("EXT_color_buffer_half_float")||Ne.has("EXT_color_buffer_float")?Nr:kn,minFilter:Bi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ye.workingColorSpace}));const Q=f.state.transmissionRenderTarget[B.id],le=B.viewport||D;Q.setSize(le.z*v.transmissionResolutionScale,le.w*v.transmissionResolutionScale);const pe=v.getRenderTarget(),de=v.getActiveCubeFace(),Re=v.getActiveMipmapLevel();v.setRenderTarget(Q),v.getClearColor(W),Y=v.getClearAlpha(),Y<1&&v.setClearColor(16777215,.5),v.clear(),Xe&&ve.render(O);const De=v.toneMapping;v.toneMapping=_i;const Ee=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),f.setupLightsView(B),Ke===!0&&ie.setGlobalState(v.clippingPlanes,B),Hr(y,O,B),ze.updateMultisampleRenderTarget(Q),ze.updateRenderTargetMipmap(Q),Ne.has("WEBGL_multisampled_render_to_texture")===!1){let Ve=!1;for(let Qe=0,_t=U.length;Qe<_t;Qe++){const ot=U[Qe],it=ot.object,we=ot.geometry,ft=ot.material,qe=ot.group;if(ft.side===Ot&&it.layers.test(B.layers)){const nn=ft.side;ft.side=en,ft.needsUpdate=!0,Uc(it,O,B,we,ft,qe),ft.side=nn,ft.needsUpdate=!0,Ve=!0}}Ve===!0&&(ze.updateMultisampleRenderTarget(Q),ze.updateRenderTargetMipmap(Q))}v.setRenderTarget(pe,de,Re),v.setClearColor(W,Y),Ee!==void 0&&(B.viewport=Ee),v.toneMapping=De}function Hr(y,U,O){const B=U.isScene===!0?U.overrideMaterial:null;for(let N=0,Q=y.length;N<Q;N++){const le=y[N],pe=le.object,de=le.geometry,Re=le.group;let De=le.material;De.allowOverride===!0&&B!==null&&(De=B),pe.layers.test(O.layers)&&Uc(pe,U,O,de,De,Re)}}function Uc(y,U,O,B,N,Q){y.onBeforeRender(v,U,O,B,N,Q),y.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),N.onBeforeRender(v,U,O,B,y,Q),N.transparent===!0&&N.side===Ot&&N.forceSinglePass===!1?(N.side=en,N.needsUpdate=!0,v.renderBufferDirect(O,U,B,N,y,Q),N.side=vi,N.needsUpdate=!0,v.renderBufferDirect(O,U,B,N,y,Q),N.side=Ot):v.renderBufferDirect(O,U,B,N,y,Q),y.onAfterRender(v,U,O,B,N,Q)}function Gr(y,U,O){U.isScene!==!0&&(U=Se);const B=_e.get(y),N=f.state.lights,Q=f.state.shadowsArray,le=N.state.version,pe=q.getParameters(y,N.state,Q,U,O),de=q.getProgramCacheKey(pe);let Re=B.programs;B.environment=y.isMeshStandardMaterial?U.environment:null,B.fog=U.fog,B.envMap=(y.isMeshStandardMaterial?vt:Dt).get(y.envMap||B.environment),B.envMapRotation=B.environment!==null&&y.envMap===null?U.environmentRotation:y.envMapRotation,Re===void 0&&(y.addEventListener("dispose",K),Re=new Map,B.programs=Re);let De=Re.get(de);if(De!==void 0){if(B.currentProgram===De&&B.lightsStateVersion===le)return Fc(y,pe),De}else pe.uniforms=q.getUniforms(y),y.onBeforeCompile(pe,v),De=q.acquireProgram(pe,de),Re.set(de,De),B.uniforms=pe.uniforms;const Ee=B.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Ee.clippingPlanes=ie.uniform),Fc(y,pe),B.needsLights=Gu(y),B.lightsStateVersion=le,B.needsLights&&(Ee.ambientLightColor.value=N.state.ambient,Ee.lightProbe.value=N.state.probe,Ee.directionalLights.value=N.state.directional,Ee.directionalLightShadows.value=N.state.directionalShadow,Ee.spotLights.value=N.state.spot,Ee.spotLightShadows.value=N.state.spotShadow,Ee.rectAreaLights.value=N.state.rectArea,Ee.ltc_1.value=N.state.rectAreaLTC1,Ee.ltc_2.value=N.state.rectAreaLTC2,Ee.pointLights.value=N.state.point,Ee.pointLightShadows.value=N.state.pointShadow,Ee.hemisphereLights.value=N.state.hemi,Ee.directionalShadowMap.value=N.state.directionalShadowMap,Ee.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Ee.spotShadowMap.value=N.state.spotShadowMap,Ee.spotLightMatrix.value=N.state.spotLightMatrix,Ee.spotLightMap.value=N.state.spotLightMap,Ee.pointShadowMap.value=N.state.pointShadowMap,Ee.pointShadowMatrix.value=N.state.pointShadowMatrix),B.currentProgram=De,B.uniformsList=null,De}function Nc(y){if(y.uniformsList===null){const U=y.currentProgram.getUniforms();y.uniformsList=Ia.seqWithValue(U.seq,y.uniforms)}return y.uniformsList}function Fc(y,U){const O=_e.get(y);O.outputColorSpace=U.outputColorSpace,O.batching=U.batching,O.batchingColor=U.batchingColor,O.instancing=U.instancing,O.instancingColor=U.instancingColor,O.instancingMorph=U.instancingMorph,O.skinning=U.skinning,O.morphTargets=U.morphTargets,O.morphNormals=U.morphNormals,O.morphColors=U.morphColors,O.morphTargetsCount=U.morphTargetsCount,O.numClippingPlanes=U.numClippingPlanes,O.numIntersection=U.numClipIntersection,O.vertexAlphas=U.vertexAlphas,O.vertexTangents=U.vertexTangents,O.toneMapping=U.toneMapping}function Bu(y,U,O,B,N){U.isScene!==!0&&(U=Se),ze.resetTextureUnits();const Q=U.fog,le=B.isMeshStandardMaterial?U.environment:null,pe=P===null?v.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Is,de=(B.isMeshStandardMaterial?vt:Dt).get(B.envMap||le),Re=B.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,De=!!O.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Ee=!!O.morphAttributes.position,Ve=!!O.morphAttributes.normal,Qe=!!O.morphAttributes.color;let _t=_i;B.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(_t=v.toneMapping);const ot=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,it=ot!==void 0?ot.length:0,we=_e.get(B),ft=f.state.lights;if(Ke===!0&&($===!0||y!==M)){const Wt=y===M&&B.id===S;ie.setState(B,y,Wt)}let qe=!1;B.version===we.__version?(we.needsLights&&we.lightsStateVersion!==ft.state.version||we.outputColorSpace!==pe||N.isBatchedMesh&&we.batching===!1||!N.isBatchedMesh&&we.batching===!0||N.isBatchedMesh&&we.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&we.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&we.instancing===!1||!N.isInstancedMesh&&we.instancing===!0||N.isSkinnedMesh&&we.skinning===!1||!N.isSkinnedMesh&&we.skinning===!0||N.isInstancedMesh&&we.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&we.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&we.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&we.instancingMorph===!1&&N.morphTexture!==null||we.envMap!==de||B.fog===!0&&we.fog!==Q||we.numClippingPlanes!==void 0&&(we.numClippingPlanes!==ie.numPlanes||we.numIntersection!==ie.numIntersection)||we.vertexAlphas!==Re||we.vertexTangents!==De||we.morphTargets!==Ee||we.morphNormals!==Ve||we.morphColors!==Qe||we.toneMapping!==_t||we.morphTargetsCount!==it)&&(qe=!0):(qe=!0,we.__version=B.version);let nn=we.currentProgram;qe===!0&&(nn=Gr(B,U,N));let Qi=!1,sn=!1,qs=!1;const pt=nn.getUniforms(),un=we.uniforms;if(ge.useProgram(nn.program)&&(Qi=!0,sn=!0,qs=!0),B.id!==S&&(S=B.id,sn=!0),Qi||M!==y){ge.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),pt.setValue(R,"projectionMatrix",y.projectionMatrix),pt.setValue(R,"viewMatrix",y.matrixWorldInverse);const Jt=pt.map.cameraPosition;Jt!==void 0&&Jt.setValue(R,fe.setFromMatrixPosition(y.matrixWorld)),Pe.logarithmicDepthBuffer&&pt.setValue(R,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&pt.setValue(R,"isOrthographic",y.isOrthographicCamera===!0),M!==y&&(M=y,sn=!0,qs=!0)}if(N.isSkinnedMesh){pt.setOptional(R,N,"bindMatrix"),pt.setOptional(R,N,"bindMatrixInverse");const Wt=N.skeleton;Wt&&(Wt.boneTexture===null&&Wt.computeBoneTexture(),pt.setValue(R,"boneTexture",Wt.boneTexture,ze))}N.isBatchedMesh&&(pt.setOptional(R,N,"batchingTexture"),pt.setValue(R,"batchingTexture",N._matricesTexture,ze),pt.setOptional(R,N,"batchingIdTexture"),pt.setValue(R,"batchingIdTexture",N._indirectTexture,ze),pt.setOptional(R,N,"batchingColorTexture"),N._colorsTexture!==null&&pt.setValue(R,"batchingColorTexture",N._colorsTexture,ze));const fn=O.morphAttributes;if((fn.position!==void 0||fn.normal!==void 0||fn.color!==void 0)&&ee.update(N,O,nn),(sn||we.receiveShadow!==N.receiveShadow)&&(we.receiveShadow=N.receiveShadow,pt.setValue(R,"receiveShadow",N.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(un.envMap.value=de,un.flipEnvMap.value=de.isCubeTexture&&de.isRenderTargetTexture===!1?-1:1),B.isMeshStandardMaterial&&B.envMap===null&&U.environment!==null&&(un.envMapIntensity.value=U.environmentIntensity),sn&&(pt.setValue(R,"toneMappingExposure",v.toneMappingExposure),we.needsLights&&Hu(un,qs),Q&&B.fog===!0&&j.refreshFogUniforms(un,Q),j.refreshMaterialUniforms(un,B,G,ne,f.state.transmissionRenderTarget[y.id]),Ia.upload(R,Nc(we),un,ze)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(Ia.upload(R,Nc(we),un,ze),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&pt.setValue(R,"center",N.center),pt.setValue(R,"modelViewMatrix",N.modelViewMatrix),pt.setValue(R,"normalMatrix",N.normalMatrix),pt.setValue(R,"modelMatrix",N.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){const Wt=B.uniformsGroups;for(let Jt=0,so=Wt.length;Jt<so;Jt++){const bi=Wt[Jt];Fe.update(bi,nn),Fe.bind(bi,nn)}}return nn}function Hu(y,U){y.ambientLightColor.needsUpdate=U,y.lightProbe.needsUpdate=U,y.directionalLights.needsUpdate=U,y.directionalLightShadows.needsUpdate=U,y.pointLights.needsUpdate=U,y.pointLightShadows.needsUpdate=U,y.spotLights.needsUpdate=U,y.spotLightShadows.needsUpdate=U,y.rectAreaLights.needsUpdate=U,y.hemisphereLights.needsUpdate=U}function Gu(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(y,U,O){const B=_e.get(y);B.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,B.__autoAllocateDepthBuffer===!1&&(B.__useRenderToTexture=!1),_e.get(y.texture).__webglTexture=U,_e.get(y.depthTexture).__webglTexture=B.__autoAllocateDepthBuffer?void 0:O,B.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,U){const O=_e.get(y);O.__webglFramebuffer=U,O.__useDefaultFramebuffer=U===void 0};const Vu=R.createFramebuffer();this.setRenderTarget=function(y,U=0,O=0){P=y,w=U,C=O;let B=!0,N=null,Q=!1,le=!1;if(y){const de=_e.get(y);if(de.__useDefaultFramebuffer!==void 0)ge.bindFramebuffer(R.FRAMEBUFFER,null),B=!1;else if(de.__webglFramebuffer===void 0)ze.setupRenderTarget(y);else if(de.__hasExternalTextures)ze.rebindTextures(y,_e.get(y.texture).__webglTexture,_e.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const Ee=y.depthTexture;if(de.__boundDepthTexture!==Ee){if(Ee!==null&&_e.has(Ee)&&(y.width!==Ee.image.width||y.height!==Ee.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ze.setupDepthRenderbuffer(y)}}const Re=y.texture;(Re.isData3DTexture||Re.isDataArrayTexture||Re.isCompressedArrayTexture)&&(le=!0);const De=_e.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(De[U])?N=De[U][O]:N=De[U],Q=!0):y.samples>0&&ze.useMultisampledRTT(y)===!1?N=_e.get(y).__webglMultisampledFramebuffer:Array.isArray(De)?N=De[O]:N=De,D.copy(y.viewport),z.copy(y.scissor),H=y.scissorTest}else D.copy(be).multiplyScalar(G).floor(),z.copy(Be).multiplyScalar(G).floor(),H=st;if(O!==0&&(N=Vu),ge.bindFramebuffer(R.FRAMEBUFFER,N)&&B&&ge.drawBuffers(y,N),ge.viewport(D),ge.scissor(z),ge.setScissorTest(H),Q){const de=_e.get(y.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+U,de.__webglTexture,O)}else if(le){const de=U;for(let Re=0;Re<y.textures.length;Re++){const De=_e.get(y.textures[Re]);R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0+Re,De.__webglTexture,O,de)}}else if(y!==null&&O!==0){const de=_e.get(y.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,de.__webglTexture,O)}S=-1},this.readRenderTargetPixels=function(y,U,O,B,N,Q,le,pe=0){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let de=_e.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&le!==void 0&&(de=de[le]),de){ge.bindFramebuffer(R.FRAMEBUFFER,de);try{const Re=y.textures[pe],De=Re.format,Ee=Re.type;if(!Pe.textureFormatReadable(De)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Pe.textureTypeReadable(Ee)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=y.width-B&&O>=0&&O<=y.height-N&&(y.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+pe),R.readPixels(U,O,B,N,ye.convert(De),ye.convert(Ee),Q))}finally{const Re=P!==null?_e.get(P).__webglFramebuffer:null;ge.bindFramebuffer(R.FRAMEBUFFER,Re)}}},this.readRenderTargetPixelsAsync=async function(y,U,O,B,N,Q,le,pe=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let de=_e.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&le!==void 0&&(de=de[le]),de)if(U>=0&&U<=y.width-B&&O>=0&&O<=y.height-N){ge.bindFramebuffer(R.FRAMEBUFFER,de);const Re=y.textures[pe],De=Re.format,Ee=Re.type;if(!Pe.textureFormatReadable(De))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Pe.textureTypeReadable(Ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ve=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,Ve),R.bufferData(R.PIXEL_PACK_BUFFER,Q.byteLength,R.STREAM_READ),y.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+pe),R.readPixels(U,O,B,N,ye.convert(De),ye.convert(Ee),0);const Qe=P!==null?_e.get(P).__webglFramebuffer:null;ge.bindFramebuffer(R.FRAMEBUFFER,Qe);const _t=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await Kf(R,_t,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,Ve),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,Q),R.deleteBuffer(Ve),R.deleteSync(_t),Q}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,U=null,O=0){const B=Math.pow(2,-O),N=Math.floor(y.image.width*B),Q=Math.floor(y.image.height*B),le=U!==null?U.x:0,pe=U!==null?U.y:0;ze.setTexture2D(y,0),R.copyTexSubImage2D(R.TEXTURE_2D,O,0,0,le,pe,N,Q),ge.unbindTexture()};const Wu=R.createFramebuffer(),Xu=R.createFramebuffer();this.copyTextureToTexture=function(y,U,O=null,B=null,N=0,Q=null){Q===null&&(N!==0?(Rr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Q=N,N=0):Q=0);let le,pe,de,Re,De,Ee,Ve,Qe,_t;const ot=y.isCompressedTexture?y.mipmaps[Q]:y.image;if(O!==null)le=O.max.x-O.min.x,pe=O.max.y-O.min.y,de=O.isBox3?O.max.z-O.min.z:1,Re=O.min.x,De=O.min.y,Ee=O.isBox3?O.min.z:0;else{const fn=Math.pow(2,-N);le=Math.floor(ot.width*fn),pe=Math.floor(ot.height*fn),y.isDataArrayTexture?de=ot.depth:y.isData3DTexture?de=Math.floor(ot.depth*fn):de=1,Re=0,De=0,Ee=0}B!==null?(Ve=B.x,Qe=B.y,_t=B.z):(Ve=0,Qe=0,_t=0);const it=ye.convert(U.format),we=ye.convert(U.type);let ft;U.isData3DTexture?(ze.setTexture3D(U,0),ft=R.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(ze.setTexture2DArray(U,0),ft=R.TEXTURE_2D_ARRAY):(ze.setTexture2D(U,0),ft=R.TEXTURE_2D),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,U.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,U.unpackAlignment);const qe=R.getParameter(R.UNPACK_ROW_LENGTH),nn=R.getParameter(R.UNPACK_IMAGE_HEIGHT),Qi=R.getParameter(R.UNPACK_SKIP_PIXELS),sn=R.getParameter(R.UNPACK_SKIP_ROWS),qs=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,ot.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,ot.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Re),R.pixelStorei(R.UNPACK_SKIP_ROWS,De),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Ee);const pt=y.isDataArrayTexture||y.isData3DTexture,un=U.isDataArrayTexture||U.isData3DTexture;if(y.isDepthTexture){const fn=_e.get(y),Wt=_e.get(U),Jt=_e.get(fn.__renderTarget),so=_e.get(Wt.__renderTarget);ge.bindFramebuffer(R.READ_FRAMEBUFFER,Jt.__webglFramebuffer),ge.bindFramebuffer(R.DRAW_FRAMEBUFFER,so.__webglFramebuffer);for(let bi=0;bi<de;bi++)pt&&(R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,_e.get(y).__webglTexture,N,Ee+bi),R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,_e.get(U).__webglTexture,Q,_t+bi)),R.blitFramebuffer(Re,De,le,pe,Ve,Qe,le,pe,R.DEPTH_BUFFER_BIT,R.NEAREST);ge.bindFramebuffer(R.READ_FRAMEBUFFER,null),ge.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else if(N!==0||y.isRenderTargetTexture||_e.has(y)){const fn=_e.get(y),Wt=_e.get(U);ge.bindFramebuffer(R.READ_FRAMEBUFFER,Wu),ge.bindFramebuffer(R.DRAW_FRAMEBUFFER,Xu);for(let Jt=0;Jt<de;Jt++)pt?R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,fn.__webglTexture,N,Ee+Jt):R.framebufferTexture2D(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,fn.__webglTexture,N),un?R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Wt.__webglTexture,Q,_t+Jt):R.framebufferTexture2D(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,Wt.__webglTexture,Q),N!==0?R.blitFramebuffer(Re,De,le,pe,Ve,Qe,le,pe,R.COLOR_BUFFER_BIT,R.NEAREST):un?R.copyTexSubImage3D(ft,Q,Ve,Qe,_t+Jt,Re,De,le,pe):R.copyTexSubImage2D(ft,Q,Ve,Qe,Re,De,le,pe);ge.bindFramebuffer(R.READ_FRAMEBUFFER,null),ge.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else un?y.isDataTexture||y.isData3DTexture?R.texSubImage3D(ft,Q,Ve,Qe,_t,le,pe,de,it,we,ot.data):U.isCompressedArrayTexture?R.compressedTexSubImage3D(ft,Q,Ve,Qe,_t,le,pe,de,it,ot.data):R.texSubImage3D(ft,Q,Ve,Qe,_t,le,pe,de,it,we,ot):y.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,Q,Ve,Qe,le,pe,it,we,ot.data):y.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,Q,Ve,Qe,ot.width,ot.height,it,ot.data):R.texSubImage2D(R.TEXTURE_2D,Q,Ve,Qe,le,pe,it,we,ot);R.pixelStorei(R.UNPACK_ROW_LENGTH,qe),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,nn),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Qi),R.pixelStorei(R.UNPACK_SKIP_ROWS,sn),R.pixelStorei(R.UNPACK_SKIP_IMAGES,qs),Q===0&&U.generateMipmaps&&R.generateMipmap(ft),ge.unbindTexture()},this.initRenderTarget=function(y){_e.get(y).__webglFramebuffer===void 0&&ze.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?ze.setTextureCube(y,0):y.isData3DTexture?ze.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?ze.setTexture2DArray(y,0):ze.setTexture2D(y,0),ge.unbindTexture()},this.resetState=function(){w=0,C=0,P=null,ge.reset(),oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Nn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ye._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ye._getUnpackColorSpace()}}class tu{constructor(e,t){this.make=e,this.capacity=t}make;capacity;live=[];spare=[];get(){if(this.live.length>=this.capacity){const t=this.live.shift();return this.live.push(t),t}const e=this.spare.pop()??this.make();return this.live.push(e),e}release(e){const[t]=this.live.splice(e,1);t&&this.spare.push(t)}sweep(e){for(let t=this.live.length-1;t>=0;t--)e(this.live[t])||this.release(t)}clear(){this.spare.push(...this.live),this.live.length=0}get allocated(){return this.live.length+this.spare.length}}const pc=6,Tt=(n,e,t,i,s,r,a,o,c,l,h)=>({sprite:n,name:e,w:t,h:i,inset:s,mass:r,damage:a,grab:o,throw:c,breakable:l,shards:h}),It={hat:Tt("gen_hat.png","котелок",.78,.975,[.03,.97,0,.54],.5,0,6,10,!1),bottle:Tt("gen_bottle.png","бутылка",.62,.82,[.26,.74,0,.96],1,15,6,10,!0,["#3aa860","#e8f6ee","#f7c56d"]),barrel:Tt("gen_barrel.png","бочонок",.7,.82,[.1,.9,0,.96],3,25,7,12,!1),mug:Tt("gen_mug.png","кружка",.56,.7,[.03,.97,0,.97],1,15,6,10,!0,["#ffd23f","#ffffff","#bfe6f2"]),whiskey:Tt("gen_whiskey.png","виски",.5,.82,[.28,.72,0,.97],1,15,6,10,!0,["#d07a2a","#bfe6f2","#f4e3b5"]),stool:Tt("gen_stool.png","табурет",.8,1,[.073,.927,.006,.969],3,25,7,12,!1),spittoon:Tt("gen_spittoon.png","плевательница",.6,.75,[.031,.969,.006,.694],2.5,20,6,11,!1),shaker:Tt("gen_shaker.png","шейкер",.36,.45,[.197,.803,.006,.969],1,12,6,10,!1),eggs:Tt("gen_eggs.png","банка яиц",.5,.62,[.103,.897,.006,.969],1.5,15,6,10,!0,["#ffe680","#bfe6f2","#e8475f"]),plunger:Tt("gen_plunger.png","вантуз",.56,.7,[.211,.789,.006,.969],.8,10,6,10,!1),hydrant:Tt("gen_hydrant.png","гидрант",.72,.9,[.094,.906,.006,.969],5,35,9,16,!1),tire:Tt("gen_tire.png","шина",.72,.9,[.031,.969,.006,.899],3,20,7,12,!1),melon:Tt("gen_melon.png","арбуз",.64,.8,[.031,.969,.006,.821],2.5,20,6,11,!0,["#3aa860","#ff4f6d","#1f1f1f"]),fish:Tt("gen_fish.png","рыба",.72,.9,[.031,.969,.006,.514],1,12,6,10,!1),anvil:Tt("gen_anvil.png","наковальня",.8,1,[.031,.969,.006,.531],7,45,11,18,!1),chicken:Tt("gen_chicken.png","резиновая курица",.5,.62,[.252,.748,.006,.969],.5,3,6,10,!1),bowling:Tt("gen_bowling.png","шар для боулинга",.4,.5,[.031,.969,.006,.75],4,30,8,14,!1),flowerpot:Tt("gen_flowerpot.png","цветочный горшок",.56,.7,[.137,.863,.006,.969],1.5,15,6,10,!0,["#e07a3a","#6b4a32","#ffffff"]),pie:Tt("gen_pie.png","кремовый пирог",.56,.7,[.031,.969,.006,.577],.8,10,6,10,!0,["#fff3d6","#ff4f6d","#f1c27d"])},Sx=Object.keys(It),Vh={mole:{w:1.3,h:1.625,inset:[.1,.9,.006,.66]},granny:{w:1.3,h:1.625,inset:[.165,.835,.006,.81]},kitten:{w:.9,h:1.125,inset:[.113,.887,.006,.7]},pigeon:{w:.9,h:1.125,inset:[.151,.849,.006,.69]},drunk:{w:1.4,h:1.75,inset:[.2,.8,.006,.85]},bartender:{w:1.52,h:1.9,inset:[.22,.78,.03,.78]}},Wh={rat:{w:1.8,h:2.25,inset:[.17,.83,.006,.63]},gang:{w:1.8,h:2.25,inset:[.134,.866,.006,.69]},kid:{w:1.8,h:2.25,inset:[.25,.75,.006,.73]}},Xh=120,Ol=.6,bx={mole:["ОЙ! МОЯ КАСКА!","ХУЛИГАН!","Я ЖЕ ПОД ЗЕМЛЁЙ ЖИВУ!"],granny:["ХАМ! ПОЛИЦИЯ!","ВОТ Я ТЕБЕ ЗОНТИКОМ!","В МОЁ ВРЕМЯ ТАК НЕ БИЛИ!"],kitten:["ПФФФ! МЯУ!!","ШШШ! НАХАЛ!","МЯ-А-АУ?!"],pigeon:["ПИСЬМА ПОМЯЛ!","ЖАЛОБА ПОЧТОЙ!","КУРЛЫ-ХАМ!"],drunk:["ЧЕГО-О?! ИК!","КТО ТУТ ДЕРЁТСЯ?! ИК!","Я НЕ СПЛЮ! ИК!"],bartender:["ПОСУДУ НЕ БЕЙ!","В МОЁМ БАРЕ НЕ ДРАТЬСЯ!","ЗА СТОЙКУ НЕ ЗАХОДИ!"]},$t={period:6.5,rise:[2.2,2.5],dig:[5.6,5.9],depth:1.15,hittable:.35};function Ex(n,e){const t=Math.floor(n/$t.period),i=n-t*$t.period,s=i<$t.rise[0]||i>$t.dig[1]?0:i<$t.rise[1]?(i-$t.rise[0])/($t.rise[1]-$t.rise[0]):i<$t.dig[0]?1:1-(i-$t.dig[0])/($t.dig[1]-$t.dig[0]);return{hole:(t%e+e)%e,rise:s,lantern:t%2===1,look:Math.sin(i*2.4)>0?1:-1}}const Bl=n=>n*n*(3-2*n);function Tx(n,e,t,i){const s=(n/i%1+1)%1,r=.2;return s<r/2?{x:e,walking:!1,facing:1}:s<.5-r/2?{x:e+(t-e)*Bl((s-r/2)/(.5-r)),walking:!0,facing:t>=e?1:-1}:s<.5+r/2?{x:t,walking:!1,facing:-1}:{x:t+(e-t)*Bl((s-.5-r/2)/(.5-r)),walking:!0,facing:t>=e?-1:1}}function mc(n,e,t=!0){if(n.who==="mole"&&n.spots?.length){const s=Ex(t?e:$t.rise[1]+.5,n.spots.length),r=n.spots[s.hole];return{x:r.x,y:n.y-$t.depth*(1-s.rise),z:r.z,rise:s.rise,walking:!1,facing:s.look,lantern:s.lantern}}if(n.x0===n.x1||!t)return{x:n.x0,y:n.y,z:n.z,rise:1,walking:!1,facing:1,lantern:!1};const i=Tx(e,n.x0,n.x1,n.period);return{x:i.x,y:n.y,z:n.z,rise:1,walking:i.walking,facing:i.facing,lantern:!1}}const Qn={appear:.45,attack:2.5,strike:2.85,every:6.5,first:4,depth:5.6},wx={rat:{what:"stamina",line:"КРЫСА СПЁРЛА СИЛЫ! −35"},gang:{what:"splat",line:"ПЛЮХ! ГОЛУБЬ ЗАЛЯПАЛ ЭКРАН!"},kid:{what:"heart",line:"ЩЁЛК! ИЗ РОГАТКИ В ЛОБ! −♥"}},Ax=35;function Rx(n,e,t=!0){const i=t?Bl(Math.min(1,e/Qn.appear)):1;return n.from==="manhole"?{x:n.x,y:-1.3*(1-i),z:n.z}:{x:n.x+n.side*1.8*(1-i),y:0,z:n.z}}const As=(n,e,t,i,s,r,a,o)=>({id:n,kind:e,min:{x:t-r/2,y:i-a/2,z:s-o/2},max:{x:t+r/2,y:i+a/2,z:s+o/2}}),Ht={enemy:{w:1.52,h:1.9,inset:[.2,.82,.03,.95]},dog:{w:1.1,h:1.375,inset:[.14,.9,.03,.95]},...It},gc={cat:Ht.enemy.inset,walrus:[.08,.92,.03,.93],bulldog:[.14,.86,.03,.75],weasel:[.22,.78,.03,.78]},Cx=.82,Zt=(n,e,t,i,s,r,a,o,c,l)=>({id:n,look:e,layer:t,color:l,min:{x:i-a/2,y:s,z:r-c/2},max:{x:i+a/2,y:s+o,z:r+c/2}});function nu(n,e,t,i,s,r,a){const o=[];let l=0,h=0;const d=(u,p,g,_)=>{p-u>.01&&_-g>.01&&o.push({id:`${n}-${h++}`,look:"wall",layer:"background",color:a,min:{x:u,y:g,z:e-.3/2},max:{x:p,y:_,z:e+.3/2}})};for(const u of r){d(t,i,l,u.sill);let p=t;for(const g of u.xs)d(p,g-u.w/2,u.sill,u.sill+u.h),p=g+u.w/2,o.push({id:`${n}-room-${h++}`,look:"interior",layer:"background",color:"#33403f",min:{x:g-u.w/2-.5,y:u.sill-1.2,z:e-1.35},max:{x:g+u.w/2+.5,y:u.sill+u.h+.6,z:e-1.2}});d(p,i,u.sill,u.sill+u.h),l=u.sill+u.h}return d(t,i,l,s),o}function Px(n,e,t,i,s,r){const a=[];for(let o=t,c=0;o+.26<=i+1e-6;o+=.36,c++)a.push(Zt(`${n}-p${c}`,"plank","midground",o+.13,0,e,.26,s-c%2*.08,.07,r));return a.push(Zt(`${n}-rail`,"rail","midground",(t+i)/2,s*.62,e-.07,i-t,.12,.07,"#6e4d36")),a}const qh=(n,e)=>({...n,min:{...n.min,x:n.min.x+e},max:{...n.max,x:n.max.x+e}}),Yh=(n,e)=>({...n,x:n.x+e,hideX:n.hideX+e}),jn=-8,Kn=8,$h={covers:[Zt("barrel-a","barrel","foreground",-2.75,0,3,.92,1.15,.92,"#c83c32"),Zt("barrel-b","barrel","foreground",-1.92,0,3.35,.8,.98,.8,"#2f6f73"),Zt("crate-a","crate","foreground",2.9,0,3.05,1.15,1.15,1.1,"#c9944f"),Zt("crate-b","crate","foreground",3.05,1.15,3.05,.72,.72,.72,"#d9a862"),...Px("fence",-1.6,-4.6,4.6,1.3,"#a8754c"),...nu("block",-9,-13,8,9,[{sill:1.7,h:1.65,w:1.7,xs:[-4.2,0,4.2]},{sill:4.6,h:1.5,w:1.5,xs:[-6.5,-2.1,2.1,6.5]}],"#c9c3ae")],slots:[{x:-2.45,y:0,z:2.25,layer:"foreground",hideX:-2.45,hideY:-1.2},{x:-2,y:0,z:-2.35,layer:"midground",hideX:-2,hideY:-1.05},{x:4.2,y:.72,z:-9.5,layer:"background",hideX:4.2,hideY:-.35},{x:1.95,y:0,z:2.35,layer:"foreground",hideX:2.9,hideY:-.85},{x:.95,y:0,z:-2.35,layer:"midground",hideX:.95,hideY:-1.05},{x:-4.2,y:.72,z:-9.5,layer:"background",hideX:-4.2,hideY:-.35}]},Kh={covers:[Zt("dumpster","dumpster","foreground",-2.6,0,3,2,1.22,1.1,"#3f7b55"),Zt("pallets","pallet","foreground",2.95,0,3.15,1.3,1.3,1.1,"#b98a52"),Zt("van","van","midground",-2.1,.25,-2.6,3.4,1.85,1.7,"#e9e2cd"),Zt("barrier","barrier","midground",2.55,0,-1.9,2.5,1.02,.55,"#b8b7ac"),...nu("shop",-11,-7,7,9,[{sill:1.3,h:1.6,w:2,xs:[-2.8,2.8]},{sill:4.3,h:1.6,w:1.6,xs:[0]}],"#d58f86")],slots:[{x:2.45,y:0,z:2.45,layer:"foreground",hideX:3.15,hideY:-1.1},{x:-2.6,y:0,z:2.15,layer:"foreground",hideX:-2.6,hideY:-1.15},{x:0,y:3.45,z:-11.5,layer:"background",hideX:0,hideY:2.25},{x:.25,y:0,z:-3.3,layer:"midground",hideX:-1.05,hideY:0},{x:2.8,y:.45,z:-11.5,layer:"background",hideX:2.8,hideY:-.75},{x:2.9,y:0,z:-2.55,layer:"midground",hideX:2.9,hideY:-1},{x:-2.8,y:.45,z:-11.5,layer:"background",hideX:-2.8,hideY:-.75}]},Dx={name:"БАР «ДЛИННЫЕ РУКИ»",look:"bar",pan:0,goal:9,deadline:5.2,maxAlive:3,covers:[Zt("piano","piano","foreground",-2.75,0,3,1.9,1.3,.75,"#3b2c24"),Zt("table","table","foreground",2.95,0,3.1,1.3,1.05,1.1,"#ece6d2"),Zt("counter","counter","midground",.3,0,-2.4,6.4,1.15,.8,"#6b4a32"),Zt("shelves","shelves","background",-.4,0,-6.4,5.2,2.9,.5,"#2e241c"),Zt("doorwall","wall","background",6.7,0,-7.4,2.6,3.4,.3,"#4a3f36")],slots:[{x:-2.55,y:0,z:2.2,layer:"foreground",hideX:-2.55,hideY:-1.25,skin:"walrus"},{x:-1.1,y:.3,z:-3.15,layer:"midground",hideX:-1.1,hideY:-.9,skin:"bulldog"},{x:2.55,y:0,z:2.3,layer:"foreground",hideX:3,hideY:-1.15,skin:"walrus"},{x:4.6,y:0,z:-7.85,layer:"background",hideX:6.7,hideY:0,skin:"bulldog"},{x:1.9,y:.3,z:-3.15,layer:"midground",hideX:1.9,hideY:-.9,skin:"walrus"}],order:[0,1,2,3,4],dogs:[{x:.2,y:0,z:-.7}],props:[{kind:"mug",x:-3.25,y:1.3,z:3},{kind:"whiskey",x:2.6,y:1.05,z:3.05},{kind:"eggs",x:3.3,y:1.05,z:3.25},{kind:"mug",x:-2.3,y:1.15,z:-2.12},{kind:"shaker",x:-1.5,y:1.15,z:-2.12},{kind:"whiskey",x:3.05,y:1.15,z:-2.12},{kind:"stool",x:-.95,y:0,z:3.9},{kind:"spittoon",x:1.95,y:0,z:4},{kind:"plunger",x:-1.6,y:0,z:1.1},{kind:"mug",x:.5,y:0,z:1.05},{kind:"whiskey",x:-4.4,y:0,z:1.5},{kind:"stool",x:3.55,y:0,z:.35},{kind:"eggs",x:-3.3,y:0,z:-.3}],gags:[{id:"piano",kind:"piano"},As("gag-cuckoo","cuckoo",6.1,2.6,-7.12,.66,.82,.12),As("gag-lamp-0","lamp",-3,5.7,-3.2,1.1,.6,1.1),As("gag-lamp-1","lamp",2.5,5.7,-3.2,1.1,.6,1.1)],hat:{x:.95,y:.78,z:3.45},landing:{cover:"counter",band:.4},friends:[{who:"mole",x0:0,x1:0,y:0,z:0,period:0,spots:[{x:2.3,z:-1.3},{x:.1,z:1.7},{x:-1.25,z:-1.3},{x:-.75,z:2.6},{x:3.7,z:-.9}]},{who:"kitten",x0:-2.5,x1:2.75,y:1.15,z:-2.25,period:17},{who:"drunk",x0:4.75,x1:4.75,y:0,z:1.75,period:0},{who:"bartender",x0:.3,x1:.3,y:.3,z:-3.15,period:0}]},Lx={name:"УЛИЦА: ДВОР И ПЕРЕУЛОК",look:"street",pan:8,goal:22,deadline:5.4,maxAlive:5,covers:[...$h.covers.map(n=>qh(n,jn)),...Kh.covers.map(n=>qh(n,Kn))],slots:[...$h.slots.map(n=>Yh(n,jn)),...Kh.slots.map(n=>Yh(n,Kn))],order:[0,6,4,9,2,7,3,11,1,8,5,12,10],dogs:[{x:.45+jn,y:0,z:-.85},{x:2.3+Kn,y:0,z:-1.25}],gags:[As("gag-bell-0","bell",Kn-3.5,5.75,-5,1,.7,.8),As("gag-bell-1","bell",Kn+3.5,5.75,-5,1,.7,.8),As("gag-laundry","laundry",jn,3.85,-4.5,12,1.2,.2)],props:[{kind:"bottle",x:-8.6,y:0,z:3.8},{kind:"barrel",x:-12.7,y:0,z:3.6},{kind:"melon",x:-7.2,y:0,z:1.2},{kind:"fish",x:-4.95,y:1.87,z:3.05},{kind:"flowerpot",x:-10.75,y:1.15,z:3},{kind:"pie",x:-9.92,y:.98,z:3.35},{kind:"chicken",x:-6.1,y:0,z:.4},{kind:"tire",x:-13.6,y:0,z:1},{kind:"bowling",x:-3.1,y:0,z:3.9},{kind:"bottle",x:-11.6,y:0,z:.3},{kind:"hydrant",x:.6,y:0,z:2.7},{kind:"bottle",x:-1.1,y:0,z:1},{kind:"anvil",x:2.3,y:0,z:3.9},{kind:"barrel",x:3.4,y:0,z:3.6},{kind:"bottle",x:4.9,y:1.22,z:3},{kind:"melon",x:7.7,y:0,z:1},{kind:"fish",x:10.8,y:1.3,z:3.15},{kind:"pie",x:9,y:0,z:3.9},{kind:"tire",x:12.7,y:0,z:3.5},{kind:"flowerpot",x:10,y:1.02,z:-1.9},{kind:"chicken",x:8.1,y:0,z:-.2},{kind:"bowling",x:13.7,y:0,z:1.4},{kind:"bottle",x:14.3,y:0,z:3.7}],friends:[{who:"mole",x0:0,x1:0,y:0,z:0,period:0,spots:[{x:jn-1.6,z:-.95},{x:Kn+.4,z:-1},{x:jn+2,z:4.4},{x:Kn-2.4,z:4.3},{x:jn+.95,z:-.95},{x:Kn+2.9,z:-1.2}]},{who:"granny",x0:-14,x1:14,y:0,z:.55,period:56},{who:"pigeon",x0:3.6,x1:13.2,y:0,z:1.75,period:19}],thugs:!0},gt={1:Dx,2:Lx},Cr=2,iu=(n,e)=>{const t=gt[n]?.pan??0;return Math.max(-t,Math.min(t,e))};function Hl(n,e,t){const i=gt[n],s=i?.landing;if(!s||e!==s.cover||!t)return!1;const r=i.covers.find(a=>a.id===s.cover);return r?t.y>=r.max.y-s.band&&t.x>=r.min.x&&t.x<=r.max.x:!1}const su=.32,Gl=[{at:1.35,len:.8},{at:3.3,len:.75}],Ns=.9,ru=n=>1-(1-n)**3;function Ix(n,e=1/0,t=!0){if(!t)return 1;let i=ru(Math.min(1,n/su));for(const s of Gl)n>s.at&&n<s.at+s.len&&s.at+s.len<e-Ns&&(i*=1-.62*Math.sin(Math.PI*(n-s.at)/s.len));return i}function _c(n,e=!0){if(!e)return{dx:0,walking:!1,facing:1};const t=9,i=n%t,s=-.7,r=.7,a=o=>o*o*(3-2*o);return i<3.5?{dx:s,walking:!1,facing:1}:i<4.5?{dx:s+(r-s)*a(i-3.5),walking:!0,facing:1}:i<8?{dx:r,walking:!1,facing:-1}:{dx:r+(s-r)*a(i-8),walking:!0,facing:-1}}const on={period:23,start:15,up:1.4,hold:2.2,down:1.4,height:1.6};function au(n,e=!0){if(!e)return 0;const t=n%on.period-on.start;if(t<0)return 0;const i=r=>r*r*(3-2*r);if(t<on.up)return on.height*i(t/on.up);if(t<on.up+on.hold)return on.height;const s=t-on.up-on.hold;return s<on.down?on.height*(1-i(s/on.down)):0}function ei(n,e,t=!0){if(e.kind==="dog")return{x:e.x+_c(e.age,t).dx,y:e.y+au(e.age,t),z:e.z??0};if(e.kind==="friend"){const r=gt[n].friends[e.plan??0];if(r)return mc(r,e.age,t)}if(e.kind==="thug")return Rx({x:e.x,z:e.z??0,side:e.side??1,from:e.from??"edge"},e.age,t);const i=e.slot===void 0?void 0:gt[n].slots[e.slot];if(!i)return{x:e.x,y:e.y,z:e.z??0};const s=e.antic||e.blind?t?ru(Math.min(1,e.age/su)):1:Ix(e.age,e.deadline,t);return{x:i.hideX+(i.x-i.hideX)*s,y:i.hideY+(i.y-i.hideY)*s,z:i.z}}function eo(n,e){return n==="friend"&&e&&e in Vh?Vh[e]:n==="thug"&&e&&e in Wh?Wh[e]:Ht[n]??Ht.enemy}function Ux(n,e,t,i){const s=eo(n,i),[r,a,o,c]=t?gc[t]:s.inset;return{min:{x:e.x-s.w/2+s.w*r,y:e.y+s.h*o,z:e.z-.04},max:{x:e.x-s.w/2+s.w*a,y:e.y+s.h*c,z:e.z+.04}}}function Nx(n,e,t=!0,i=[]){const s=gt[n].covers.map(r=>({id:r.id,kind:"cover",min:r.min,max:r.max}));for(const r of gt[n].gags)r.min&&r.max&&s.push({id:r.id,kind:"cover",min:r.min,max:r.max});for(const r of e){if(r.kind==="friend"&&r.who==="mole"){const o=gt[n].friends[r.plan??0];if(o&&mc(o,r.age,t).rise<$t.hittable)continue}const a=Ux(r.kind,ei(n,r,t),r.kind==="enemy"?r.skin:void 0,r.who);r.kind==="dog"&&_c(r.age,t).walking&&(a.max.y=a.min.y+Ht.dog.h*(Cx-Ht.dog.inset[2])),s.push({id:r.id,kind:r.kind==="enemy"||r.kind==="dog"||r.kind==="friend"||r.kind==="thug"?r.kind:"prop",...a})}return s.concat(i)}function ou(n,e,t=0){const i=n<650?60:50,s=n/Math.max(1,e),r=Math.atan(Math.tan(i*Math.PI/360)*s),a=Math.max(9.5,3+3.1/Math.tan(r));return{fov:i,position:{x:t,y:2.3+(a-9.5)*.12,z:a},look:{x:t,y:1.35+(a-9.5)*.1,z:-3}}}const Ho=26,Fx=.9;function lu(n,e,t,i){let s=0,r=1/0;for(const a of["x","y","z"]){if(Math.abs(e[a])<1e-9){if(n[a]<t[a]||n[a]>i[a])return null;continue}let o=(t[a]-n[a])/e[a],c=(i[a]-n[a])/e[a];if(o>c&&([o,c]=[c,o]),s=Math.max(s,o),r=Math.min(r,c),s>r)return null}return s}const cu=n=>{const e=Math.hypot(n.x,n.y,n.z)||1;return{x:n.x/e,y:n.y/e,z:n.z/e}},xa=(n,e,t)=>({x:n.x+e.x*t,y:n.y+e.y*t,z:n.z+e.z*t});function xc(n,e,t,i="punch"){const s=cu(e);let r=null;for(const c of t){let l=c.min,h=c.max;if(i==="grab"&&c.kind==="prop"){const u=(l.x+h.x)/2,p=(l.y+h.y)/2,g=(h.x-l.x)/2*1.8,_=(h.y-l.y)/2*1.8;l={x:u-g,y:p-_,z:l.z-.25},h={x:u+g,y:p+_,z:h.z+.25}}const d=lu(n,s,l,h);d!==null&&d<=Ho*2&&(!r||d<r.distance)&&(r={kind:c.kind,id:c.id,point:xa(n,s,d),distance:d})}if(i==="grab"&&r?.kind!=="prop"){const c=r?r.point:(()=>{const h=s.y<-1e-6?-n.y/s.y:1/0;return xa(n,s,Math.min(h,Ho))})();let l=null;for(const h of t){if(h.kind!=="prop")continue;const d={x:(h.min.x+h.max.x)/2,y:(h.min.y+h.max.y)/2,z:(h.min.z+h.max.z)/2},u={x:d.x-n.x,y:d.y-n.y,z:d.z-n.z},p=u.x*s.x+u.y*s.y+u.z*s.z;if(p<=0)continue;const g=xa(n,s,p),_=Math.hypot(d.x-g.x,d.y-g.y,d.z-g.z),m=Math.hypot(d.x-c.x,d.y-c.y,d.z-c.z),f=Math.min(_,m);f<=Fx&&(!l||f<l.dist)&&(l={h,dist:f,center:d,proj:p})}if(l)return{kind:"prop",id:l.h.id,point:l.center,distance:l.proj}}if(r)return r;const a=s.y<-1e-6?-n.y/s.y:1/0,o=Math.min(a,Ho);return{kind:"whiff",point:xa(n,s,o),distance:o}}const hu=-9.5;function kx(n,e){const t=22/Math.sqrt(Math.max(.5,It[n].mass));return Math.max(.3,Math.min(1,e/t))}const du={above:2.4,hang:.16},va={radius:.2,minSpeed:6.5,friction:.3,stop:.9};function zx(n,e,t,i){const s=e==="anvil"?{...i,y:i.y+du.above,z:i.z-.04}:i,r={x:s.x-t.x,y:s.y-t.y,z:s.z-t.z},a=kx(e,Math.hypot(r.x,r.y,r.z)),o={x:r.x/a,y:r.y/a-.5*hu*a,z:r.z/a},c={id:n,kind:e,pos:{...t},vel:o,age:0,angle:0,spin:(s.x>=t.x?-1:1)*11/Math.sqrt(It[e].mass),struck:!1};return e==="anvil"&&(c.drop=a),e==="bowling"&&(c.hits=[]),c}const Go=new Set(["enemy","dog","friend","thug"]),Ox=(n,e)=>n.x>e.min.x&&n.x<e.max.x&&n.y>e.min.y&&n.y<e.max.y&&n.z>e.min.z&&n.z<e.max.z,nr=.001;function Bx(n,e,t){const i=[];let s=e;for(;s>1e-9;){const r=Math.min(s,.008333333333333333);if(s-=r,n.age+=r,n.angle+=n.spin*r,n.drop!==void 0&&!n.dropped&&n.age>=n.drop){if(n.vel={x:0,y:0,z:0},n.spin=0,n.angle=0,n.age<n.drop+du.hang)continue;n.dropped=!0,n.vel.y=-3}if(n.rolling){const u=Math.hypot(n.vel.x,n.vel.z),p=Math.max(0,1-va.friction*r);if(n.vel.x*=p,n.vel.z*=p,n.spin=-u*2.5,u<va.stop)return i.push({type:"rest",point:{x:n.pos.x,y:0,z:n.pos.z},on:"ground"}),i}const a={x:n.pos.x+n.vel.x*r,y:n.pos.y+n.vel.y*r,z:n.pos.z+n.vel.z*r};n.rolling||(n.vel.y+=hu*r);const o={x:a.x-n.pos.x,y:a.y-n.pos.y,z:a.z-n.pos.z},c=Math.hypot(o.x,o.y,o.z),l=cu(o);let h=null;for(const u of t){if(u.kind==="prop"||Ox(n.pos,u)||Go.has(u.kind)&&(n.hits?n.hits.includes(u.id):n.struck))continue;let p=u.min,g=u.max;if(u.kind==="enemy"){const m=(p.x+g.x)/2,f=(p.y+g.y)/2,b=(g.x-p.x)/2*1.3,E=(g.y-p.y)/2*1.3;p={x:m-b,y:f-E,z:p.z-.1},g={x:m+b,y:f+E,z:g.z+.1}}const _=lu(n.pos,l,p,g);_!==null&&_<=c&&(!h||_<h.t)&&(h={t:_,hit:u})}const d=a.y<=0&&n.pos.y>0?c*n.pos.y/(n.pos.y-a.y):1/0;if(h&&h.t<=d){const u=h.hit,p={x:n.pos.x+l.x*h.t,y:n.pos.y+l.y*h.t,z:n.pos.z+l.z*h.t};if(Go.has(u.kind)&&n.hits){n.struck=!0,n.hits.push(u.id),i.push({type:"hit",kind:u.kind,id:u.id,point:p}),n.vel.x*=.85,n.vel.z*=.85;continue}if(Go.has(u.kind)){n.struck=!0,i.push({type:"hit",kind:u.kind,id:u.id,point:p}),n.pos={x:p.x,y:p.y,z:u.max.z+.08},n.vel={x:n.vel.x*.12,y:1.6,z:1.4},n.spin*=-.6;continue}if(l.y<0&&p.y>=u.max.y-nr)return i.push({type:"rest",point:{x:p.x,y:u.max.y,z:Math.min(u.max.z-.06,Math.max(u.min.z+.06,p.z))},on:u.id}),i;n.struck||(n.struck=!0,i.push({type:"hit",kind:u.kind,id:u.id,point:p}));const g=Math.abs(p.z-u.max.z)<nr?{z:1}:Math.abs(p.z-u.min.z)<nr?{z:-1}:Math.abs(p.x-u.max.x)<nr?{x:1}:Math.abs(p.x-u.min.x)<nr?{x:-1}:{y:-1};n.vel={x:n.vel.x*.25,y:Math.min(n.vel.y,0)*.3,z:n.vel.z*.25},"z"in g?n.vel.z=g.z*Math.max(.6,Math.abs(n.vel.z)):"x"in g?n.vel.x=g.x*Math.max(.6,Math.abs(n.vel.x)):n.vel.y=-Math.abs(n.vel.y),n.pos={x:p.x+("x"in g?g.x*.05:0),y:p.y+("y"in g?g.y*.05:0),z:p.z+("z"in g?g.z*.05:0)},n.spin*=-.5;continue}if(d!==1/0&&n.hits&&!n.rolling){const u=d/Math.max(c,1e-9),p=Math.hypot(n.vel.x,n.vel.z)||1,g=Math.max(va.minSpeed,p);n.pos={x:n.pos.x+o.x*u,y:va.radius,z:n.pos.z+o.z*u},n.vel={x:n.vel.x/p*g,y:0,z:n.vel.z/p*g},n.rolling=!0;continue}if(d!==1/0){const u=d/Math.max(c,1e-9);return i.push({type:"rest",point:{x:n.pos.x+o.x*u,y:0,z:n.pos.z+o.z*u},on:"ground"}),i}if(n.pos=a,n.age>5)return i.push({type:"rest",point:{x:n.pos.x,y:0,z:n.pos.z},on:"ground"}),i}return i}const hr=[{who:"ТЫ — БАРМЕНУ",text:"«Спорим, бармен, на триста баксов, что я нассу вон в ту шляпу и не пролью ни капли?»",at:.5,len:3.1},{who:"БАРМЕН-ЛАСКА",text:"«Идёт. Ставлю триста.»",at:3.6,len:1.7}],vs={share:.6,prize:300,perSecond:40},Hx=n=>hr.find(e=>n>=e.at&&n<e.at+e.len)??null,ir={origin:{x:.5,y:1.12},lag:6.5,arc:.2,segments:26};class Gx{tip;constructor(e={x:.5,y:.8}){this.tip={...e}}update(e,t){const i=1-Math.exp(-e*ir.lag);return this.tip.x+=(t.x-this.tip.x)*i,this.tip.y+=(t.y-this.tip.y)*i,this.tip}controls(){const e=ir.origin,t=this.tip,i=t.x-e.x,s=.07*Math.tanh(i*6)+.04,r=ir.arc+Math.abs(i)*.12;return[{x:e.x+i*.2,y:t.y-r*.9},{x:t.x+s,y:t.y-r*1.15}]}points(e=ir.segments){const t=ir.origin,[i,s]=this.controls(),r=this.tip,a=[];for(let o=0;o<=e;o++){const c=o/e,l=1-c,h=l*l*l,d=3*l*l*c,u=3*l*c*c,p=c*c*c;a.push({x:h*t.x+d*i.x+u*s.x+p*r.x,y:h*t.y+d*i.y+u*s.y+p*r.y})}return a}}const zi={enter:.7,torn:.55,mad:1.7,leave:1.1,read:14,penalty:120},jh=["ЭЙ, ПОЛЕГЧЕ! Я ТУТ ГЛАШАТАЙ!","ХАМЬЁ! КОТЕЛОК ПОМЯЛ!","ПО ЛИСТОВКЕ БЕЙ, ДУБИНА!","НУ И МАНЕРЫ! ЧИТАЙ ДАЛЬШЕ!"],Vx="ЧЕСТЬ ИМЕЮ!";function Wx(n,e){return n===1?[{art:"tall",title:"БЕЙ!",lines:e?["Тапни, куда бить,","и жми УДАР.","Кулак летит ровно туда."]:["ЛКМ или ПРОБЕЛ —","кулак летит ровно","в точку прицела."]},{art:"tag",title:"ХВАТАЙ И БРОСАЙ",lines:e?["Тапни по предмету","и жми ХВАТАЙ.","Ещё раз — бросок!"]:["ПКМ или E — схватить","бутылку, табурет…","Ещё раз — бросок!"]},{art:"taped",title:"БЕРЕГИ СИЛЫ",lines:["Каждый замах","стоит сил — даже промах.","Выдохни — и снова в бой."]},{art:"pinned",title:"НЕ ТРОЖЬ СВОИХ!",lines:["Пёс с нимбом, котёнок,","крот, бармен, пьяница —","знак «НЕ ТРОГАТЬ»!"]},{art:"wide",title:"ЗАГАДКА",lines:["На голове котелок — для форса.","Вверх дном на стойке —","для чего-то покрепче…"]}]:[{art:"wide",title:"УЛИЦА ШИРОКАЯ",lines:e?["Свайп по экрану —","камера едет","вдоль улицы."]:["Стрелки, A / D","или мышь у края —","камера едет."]},{art:"tag",title:"ПОЛОСКИ ЗДОРОВЬЯ",lines:["У задиры своя полоска.","Кулак — треть,","тяжёлый бросок — всё."]},{art:"pinned",title:"ШПАНА У НОСА",lines:e?["Крыса, голубь, мальчишка","лезут к самой камере —","тапни и бей сразу!"]:["Крыса, голубь, мальчишка","лезут к самой камере —","бей сразу, с одного!"]},{art:"taped",title:"БАБУШКУ НЕ БЬЮТ",lines:["Бабушка, голубь-почтальон,","крот и пёс —","свои. Руки прочь!"]}]}class Xx{constructor(e,t,i=!1){this.level=e,this.flyers=t,this.reduced=i,i&&(this.phase="show")}level;flyers;reduced;index=0;phase="enter";t=0;offences=0;line="";get flyer(){return this.flyers[this.index]??null}get done(){return this.phase==="done"}get live(){return this.phase==="show"||this.phase==="mad"}tick(e){this.done||(this.t+=e,this.phase==="enter"&&this.t>=zi.enter?this.go("show"):this.phase==="show"&&this.t>=zi.read?this.next():this.phase==="torn"&&this.t>=zi.torn?this.next():this.phase==="mad"&&this.t>=zi.mad?this.go("show"):this.phase==="leave"&&this.t>=zi.leave&&this.go("done"))}tear(){return this.phase!=="show"?!1:(this.reduced?this.next():this.go("torn"),!0)}offend(){return this.phase!=="show"?!1:(this.line=jh[this.offences++%jh.length],this.go("mad"),!0)}skip(){this.phase!=="leave"&&!this.done&&this.go(this.reduced?"done":"leave")}next(){this.index++,this.go(this.index>=this.flyers.length?this.reduced?"done":"leave":"show")}go(e){this.phase=e,this.t=0}}const Mn={start:.45,len:2.6,kinds:["dance","sandwich","selfie"],bonus:2},wt={pie:{blind:3},plunger:{stun:2},chicken:{combo:2,bonus:100},seeds:{radius:3.2,damage:5,max:3},geyser:{radius:2.4,life:4.5,damage:10,stagger:1.5}},dr={first:9,every:13,warn:1.9,radius:1.3},qx={3:"ОГО!",5:"ВОТ ЭТО ДА!",8:"МАМА!",12:"ЧУДЕСА НА ВИРАЖАХ!"},Yx=n=>["spin","stars","birds"][n%3],Ii={intro:hr[hr.length-1].at+hr[hr.length-1].len,length:6,soakRate:1.9,dogCooldown:1.5},uu="long-arms.progress.v2",$x="long-arms.progress.v1",fu=()=>({version:2,unlocked:2,best:0});function Kx(n){try{const e=JSON.parse(n??"null"),t=Number.isFinite(e?.best)&&e.best>=0?Math.floor(e.best):-1;if(e?.version===2&&Number.isInteger(e.unlocked)&&e.unlocked>=1&&e.unlocked<=Cr&&t>=0)return{version:2,unlocked:e.unlocked,best:t};if(e?.version===1&&Number.isInteger(e.unlocked)&&e.unlocked>=1&&e.unlocked<=3&&t>=0)return{version:2,unlocked:e.unlocked>=2?2:1,best:t}}catch{}return fu()}const pu=n=>{const e=n(uu);return Kx(e??n($x))};function jx(n){return n.won&&n.level<Cr&&n.progress.unlocked>n.level?[{id:"next",label:"СЛЕДУЮЩИЙ УРОВЕНЬ →",primary:!0},{id:"retry",label:"ЕЩЁ РАЗ ↺",primary:!1},{id:"select",label:"ВЫБОР УРОВНЯ",primary:!1}]:n.won?[{id:"menu",label:"В МЕНЮ →",primary:!0},{id:"retry",label:"ЕЩЁ РАЗ ↺",primary:!1}]:[{id:"retry",label:"ЕЩЁ РАЗ ↗",primary:!0},{id:"select",label:"ВЫБОР УРОВНЯ",primary:!1}]}const mu=(n,e,t)=>n==="punch"?24:e?t?It[t].throw:10:pc,Zx=10,Jx={cat:30,walrus:30,bulldog:40,weasel:20},Qx={1:29.4,2:21};function ev(n,e){return 1}const ya=n=>n>1.5?"foreground":n>-5?"midground":"background";class tv{constructor(e=fu(),t=()=>{}){this.save=t,this.progress=e}save;mode="menu";level=1;hp=5;stamina=100;score=0;combo=0;elapsed=0;held=null;ult={phase:"none",t:0,meter:0,hat:0};dogSoak=0;dogLeft=!1;hatRest=null;actors=[];events=[];flights=[];riffs=0;laundry=5;progress;won=!1;defeated=0;spawned=0;spawnClock=0;nextId=1;message="Двор ждёт своих героев";cam={x:0,z:9.5,half:2.6};thugClock=0;thugs=0;geysers=[];hazards=[];hazardClock=0;hazardCount=0;briefings=!1;briefing=null;briefed=new Set;touch=!1;reduced=!1;get layout(){return gt[this.level]}get goal(){return this.layout.goal}start(e){if(!Number.isInteger(e)||e<1||e>Cr)return!1;this.level=e,this.hp=5,this.stamina=100,this.score=0,this.combo=0,this.elapsed=0,this.held=null,this.actors=[],this.events=[],this.flights=[],this.riffs=0,this.laundry=5,this.won=!1,this.defeated=0,this.spawned=0,this.spawnClock=0,this.nextId=1,this.thugClock=0,this.thugs=0,this.geysers=[],this.hazards=[],this.hazardClock=0,this.hazardCount=0,this.mode="play",this.message=this.layout.look==="bar"?"Бар «Длинные руки». Ведите себя прилично.":"Улица большая — крути камеру к краям!",this.ult={phase:"none",t:0,meter:0,hat:0},this.dogSoak=0,this.dogLeft=!1,this.hatRest=null;for(const t of this.layout.props)this.actors.push({id:this.nextId++,kind:t.kind,x:t.x,y:t.y,z:t.z,layer:ya(t.z),age:0,deadline:1/0});return this.layout.friends.forEach((t,i)=>this.actors.push({id:this.nextId++,kind:"friend",who:t.who,plan:i,x:t.x0,y:t.y,z:t.z,layer:ya(t.z),age:0,deadline:1/0})),this.briefing=null,this.briefings&&!this.briefed.has(e)?(this.briefed.add(e),this.briefing=new Xx(e,Wx(e,this.touch),this.reduced),this.message="Глашатай! Читай листовки — или жми ПОНЯЛ."):this.spawn(),this.placeHat(),!0}endBriefing(){this.briefing=null,this.message=this.layout.look==="bar"?"Бар «Длинные руки». Ведите себя прилично.":"Улица большая — крути камеру к краям!",this.spawn()}skipBriefing(){this.briefing&&(this.briefing.skip(),this.briefing.done&&this.endBriefing())}briefPunch(e){const t=this.briefing;return!t||this.mode!=="play"?null:e==="flyer"&&t.tear()?(this.events.push({type:"tear",id:0,combo:this.combo,amount:t.index}),this.message="ТРЕСЬ! Следующая листовка.",t.done&&this.endBriefing(),"tear"):e==="herald"?t.offend()?(this.score=Math.max(0,this.score-zi.penalty),this.hp=Math.max(0,this.hp-1),this.combo=0,this.events.push({type:"offend",id:0,combo:0,who:"herald",text:t.line}),this.message=`${t.line} −${zi.penalty} и сердце.`,this.hp||this.finish(!1),"protected"):(this.message="Он и так обижен! Оставь в покое.","miss"):(this.message="Бей по листовке — будет следующая.","miss")}get ultActive(){return this.ult.phase==="intro"||this.ult.phase==="pour"}placeHat(){const e=this.layout.hat;!e||this.ult.phase!=="none"||this.held==="hat"||this.actors.some(t=>t.kind==="hat")||this.flights.some(t=>t.kind==="hat")||this.actors.push({id:this.nextId++,kind:"hat",...e,layer:"foreground",age:0,deadline:1/0})}soak(e,t){if(this.mode!=="play"||this.ult.phase!=="pour")return null;const i=typeof e.id=="number"?this.actors.find(s=>s.id===e.id):void 0;return i?i.kind==="dog"?this.dogSoak>0||i.mad?null:(this.dogSoak=Ii.dogCooldown,this.dogHit(i),"dog"):i.kind==="friend"?i.mad?null:(this.friendHit(i),"dog"):i.kind!=="enemy"?null:(i.wet=Math.min(1,(i.wet??0)+t*Ii.soakRate),i.wet<1?(this.message="ФУ-У-У! Задиры в ужасе.","soak"):(this.actors=this.actors.filter(s=>s.id!==i.id),this.combo++,this.defeated++,this.score+=120+Math.min(this.combo-1,9)*25,this.events.push({type:"ko",id:i.id,combo:this.combo}),this.message="Смыло!",this.defeated>=this.goal&&this.finish(!0),"ko")):null}gag(e,t){const i=this.layout.gags.find(r=>r.id===e);if(!i)return!1;const s={type:"gag",id:0,combo:this.combo,gag:i.kind,gagId:i.id,point:t};if(i.kind==="piano")s.amount=this.riffs++,this.message="ТРЫНЬ! Пианино само заиграло рэгтайм.";else if(i.kind==="cuckoo")this.message="КУ-КУ! Кукушка высунулась и обозвала тебя.";else if(i.kind==="lamp")this.message="Лампа раскачалась — свет мигает!";else if(i.kind==="bell")this.message="ДЗИИНЬ! Фонарь звенит, как колокол.";else if(i.kind==="laundry"){if(this.laundry<=0)return this.message="Верёвка пуста — всё бельё уже на задирах.",!0;this.laundry--;const r=t?.x??(i.min.x+i.max.x)/2,a=this.actors.filter(o=>o.kind==="enemy"&&o.age>.3&&o.x>i.min.x-1&&o.x<i.max.x+1).sort((o,c)=>Math.abs(o.x-r)-Math.abs(c.x-r))[0];if(a)return s.id=a.id,this.events.push(s),this.hurt(a,10),this.message="Трусы на голову! Задира ослеп.",!0;this.message="Бельё шлёпнулось в пыль. Мимо!"}return this.events.push(s),!0}pourInHat(e){if(this.mode!=="play"||this.ult.phase!=="pour")return!1;const t=Math.floor(this.ult.hat*vs.perSecond);return this.ult.hat+=e,this.score+=Math.floor(this.ult.hat*vs.perSecond)-t,this.message="Прямо в шляпу! Ни капли мимо…",!0}pause(){this.mode==="play"?this.mode="pause":this.mode==="pause"&&(this.mode="play")}suspend(){this.mode==="play"&&(this.mode="pause")}spawn(){if(this.spawned>=this.goal)return;const{order:e,slots:t,dogs:i,deadline:s,maxAlive:r}=this.layout,a=e[this.spawned%e.length];if(this.actors.some(h=>h.kind==="enemy"&&h.slot===a)||r&&this.actors.filter(h=>h.kind==="enemy").length>=r)return;const o=t[a],c=Jx[o.skin??"cat"],l=this.spawned%3===2?Mn.kinds[Math.floor(this.spawned/3)%Mn.kinds.length]:void 0;if(this.actors.push({id:this.nextId++,kind:"enemy",x:o.x,y:o.y,z:o.z,slot:a,layer:o.layer,age:0,deadline:s+(l?Mn.len:0),hp:c,maxHp:c,antic:l}),this.spawned++,!this.dogLeft&&!this.actors.some(h=>h.kind==="dog"))for(const h of i)this.actors.push({id:this.nextId++,kind:"dog",...h,layer:"midground",age:0,deadline:1/0});o.skin&&(this.actors.find(h=>h.kind==="enemy"&&h.slot===a).skin=o.skin)}tick(e){if(this.mode!=="play")return;if(this.briefing){this.briefing.tick(e),this.briefing.done&&this.endBriefing();return}if(this.ult.phase==="intro"){this.ult.t+=e,this.ult.t>=Ii.intro&&(this.ult={phase:"pour",t:0,meter:1,hat:0},this.message="Держи струю в шляпе! Задир можно и окатить. Пса не задень.");return}const t=this.ult.phase==="pour";if(t&&(this.ult.t+=e,this.ult.meter=Math.max(0,1-this.ult.t/Ii.length),this.dogSoak=Math.max(0,this.dogSoak-e),this.ult.t>=Ii.length)){const i=this.ult.hat>=Ii.length*vs.share;this.ult={...this.ult,phase:"done",t:0,meter:0},this.events.push({type:"ultEnd",id:0,combo:this.combo,amount:i?vs.prize:0}),i?(this.score+=vs.prize,this.message=`Ни капли мимо! Бармен платит ${vs.prize}.`):this.message="Пролил! Бармен забирает свои триста."}this.elapsed+=e,this.stamina=Math.min(100,this.stamina+e*(Qx[this.level]??21)),this.spawnClock+=e;for(const i of[...this.actors]){if((i.kind==="friend"||i.kind==="dog")&&i.mad){i.mad=Math.max(0,i.mad-e),i.mad<=0&&(this.actors=this.actors.filter(s=>s.id!==i.id),i.kind==="dog"&&(this.dogLeft=!0));continue}if(i.age+=e,i.kind==="thug"&&i.age>=Qn.strike){this.nuisance(i);continue}i.kind==="enemy"&&(i.blind&&(i.blind=Math.max(0,i.blind-e),i.deadline=Math.max(i.deadline,i.age+Ns+.4)),i.antic&&i.age>Mn.start+Mn.len&&(i.antic=void 0)),t&&i.kind==="enemy"&&(i.age=Math.min(i.age,Math.max(i.age-e,i.deadline-1))),i.kind==="enemy"&&this.updateEnemy(i)}if(this.hp<=0){this.finish(!1);return}if(this.defeated>=this.goal){this.finish(!0);return}for(;this.spawnClock>=1.55;)this.spawnClock-=1.55,this.spawn();this.stepGeysers(e),this.stepHazards(e,t),this.mode==="play"&&this.layout.thugs&&!t&&(this.thugClock+=e,this.thugClock>=(this.thugs?Qn.every:Qn.first)&&(this.thugClock=0,this.spawnThug()))}updateEnemy(e){const t=e.layer??(e.slot!==void 0&&this.layout.slots?.[e.slot]?this.layout.slots[e.slot].layer:ya(e.z??0));if(e.layer=t,e.slot===void 0||t==="foreground"||!this.layout.slots?.length){e.age>=e.deadline&&(this.actors=this.actors.filter(s=>s.id!==e.id),this.hp--,this.combo=0,this.defeated++,this.events.push({type:"attack",id:e.id,combo:0}),this.message="Прилетело! Следи за замахом.");return}const i=e.antic?Mn.start+Mn.len:Gl[0].at+Gl[0].len;for(;e.layer!=="foreground"&&e.age>=i;){const s=e.layer==="background"?"midground":"foreground",r=[];for(let a=0;a<this.layout.slots.length;a++)this.layout.slots[a].layer===s&&!this.actors.some(o=>o.kind==="enemy"&&o.id!==e.id&&o.slot===a)&&r.push(a);if(r.length>0){r.sort((c,l)=>Math.abs(this.layout.slots[c].x-e.x)-Math.abs(this.layout.slots[l].x-e.x));const a=r[0],o=this.layout.slots[a];e.slot=a,e.x=o.x,e.y=o.y,e.z=o.z,e.layer=o.layer,o.skin&&(e.skin=o.skin),e.age-=i,e.deadline=this.layout.deadline+(e.antic?Mn.len:0),this.events.push({type:"advance",id:e.id,combo:this.combo,point:{x:e.x,y:e.y,z:e.z??0}}),this.message=s==="foreground"?"Задира перебежал к переднему укрытию!":"Задира подбирается ближе!"}else{e.age>=e.deadline&&(e.age=0,e.deadline=this.layout.deadline+(e.antic?Mn.len:0),this.events.push({type:"taunt",id:e.id,combo:this.combo,point:{x:e.x,y:e.y,z:e.z??0}}),this.message=e.layer==="background"?"Задира дразнится из глубины!":"Задира выглядывает и дразнит!");break}}e.layer==="foreground"&&e.age>=e.deadline&&(this.actors=this.actors.filter(s=>s.id!==e.id),this.hp--,this.combo=0,this.defeated++,this.events.push({type:"attack",id:e.id,combo:0}),this.message="Прилетело! Следи за замахом.")}bump(e=1){for(let t=0;t<e;t++){this.combo++;const i=qx[this.combo];i&&this.events.push({type:"milestone",id:0,combo:this.combo,text:i})}}stepGeysers(e){for(const t of this.geysers){t.age+=e;for(const i of this.actors.filter(s=>s.kind==="enemy"&&!t.hit.includes(s.id))){const s=ei(this.level,i);if(!(Math.hypot(s.x-t.x,s.z-t.z)>wt.geyser.radius)&&(t.hit.push(i.id),this.events.push({type:"knock",id:i.id,combo:this.combo,point:{x:t.x,y:0,z:t.z}}),this.hurt(i,wt.geyser.damage,!0)||(i.deadline+=wt.geyser.stagger,this.message="Гидрант бьёт фонтаном — задиру сдуло!"),this.mode!=="play"))return}}this.geysers=this.geysers.filter(t=>t.age<wt.geyser.life)}stepHazards(e,t){if(t||(this.hazardClock+=e),this.hazardClock>=(this.hazardCount?dr.every:dr.first)){const i=this.actors.filter(s=>s.kind==="enemy"&&s.age>.6).map(s=>({t:s,p:ei(this.level,s)})).sort((s,r)=>Math.abs(s.p.x-this.cam.x)-Math.abs(r.p.x-this.cam.x));i.length?(this.hazardClock=0,this.dropFromSky(i[0].p.x,i[0].p.z)):this.hazardClock-=1}for(const i of[...this.hazards]){if(i.age+=e,i.age<dr.warn)continue;this.hazards=this.hazards.filter(r=>r!==i);const s=this.actors.filter(r=>r.kind==="enemy").filter(r=>{const a=ei(this.level,r);return Math.hypot(a.x-i.x,a.z-i.z)<=dr.radius});this.events.push({type:"crash",id:i.id,combo:this.combo,hazard:i.kind,point:{x:i.x,y:0,z:i.z},ids:s.map(r=>r.id)});for(const r of s)if(this.hurt(r,999,!1,"pancake"),this.mode!=="play")return;this.message=s.length?i.kind==="piano"?"БДЫЩЬ! Рояль с неба — задира в лепёшку!":"БУМ! Сейф на голову — в лепёшку!":"Мимо! Но грохоту-то сколько."}}dropFromSky(e,t){const i={id:this.nextId++,kind:this.hazardCount++%2?"safe":"piano",x:e,z:t,age:0};return this.hazards.push(i),this.events.push({type:"hazard",id:i.id,combo:this.combo,hazard:i.kind,point:{x:e,y:0,z:t}}),i}seeds(e,t){const i=this.actors.filter(s=>s.kind==="enemy"&&s.id!==t).map(s=>({t:s,d:Math.hypot(ei(this.level,s).x-e.x,ei(this.level,s).z-e.z)})).filter(s=>s.d<=wt.seeds.radius).sort((s,r)=>s.d-r.d).slice(0,wt.seeds.max).map(s=>s.t);this.events.push({type:"seeds",id:0,combo:this.combo,point:e,ids:i.map(s=>s.id)});for(const s of i)if(this.hurt(s,wt.seeds.damage,!0),this.mode!=="play")return}propHit(e,t,i){const s=It[e.kind];if(!s.damage){this.combo=0,this.message="Шляпу — не в задиру!";return}if(e.kind==="anvil"){this.hurt(t,Math.max(s.damage,t.hp??0),!0,"pancake"),this.message="НАКОВАЛЬНЯ! Задира — блин.";return}e.kind==="chicken"&&(this.bump(wt.chicken.combo),this.score+=wt.chicken.bonus,this.events.push({type:"squeak",id:t.id,combo:this.combo,point:i})),e.kind==="pie"&&(t.blind=wt.pie.blind,this.events.push({type:"blind",id:t.id,combo:this.combo,point:i})),e.kind==="plunger"&&(t.plunger=!0,t.deadline+=wt.plunger.stun,this.events.push({type:"stick",id:t.id,combo:this.combo,point:i})),this.hurt(t,Math.max(s.damage*(t.antic?Mn.bonus:1),t.hp??0),!0),e.kind==="bowling"&&e.hits?.length===2?(this.events.push({type:"strike",id:t.id,combo:this.combo,point:i}),this.message="СТРАЙК! Двоих одним шаром!"):e.kind==="pie"?this.message="Пирог в лицо! Ничего не видит, шатается.":e.kind==="plunger"?this.message="ЧПОК! Вантуз прилип к физиономии.":e.kind==="chicken"&&(this.message=`ПИ-И-ИСК! Комбо +${wt.chicken.combo}!`)}spawnThug(){if(this.actors.filter(l=>l.kind==="thug").length>=(this.elapsed>30?2:1))return null;const t=this.thugs++,i=["rat","gang","kid"][t%3],s=t%2?1:-1,r=t%3===1?"manhole":"edge",a=this.cam.z-Qn.depth,o=this.cam.x+s*this.cam.half*(r==="manhole"?.3:.62),c={id:this.nextId++,kind:"thug",who:i,side:s,from:r,x:o,y:0,z:a,layer:"foreground",age:0,deadline:Qn.strike,hp:1,maxHp:1};return this.actors.push(c),this.message=r==="manhole"?"Из люка лезет шпана — бей сразу!":"Шпана под носом — бей сразу!",c}nuisance(e){this.actors=this.actors.filter(i=>i.id!==e.id);const t=wx[e.who];t.what==="stamina"&&(this.stamina=Math.max(0,this.stamina-Ax)),t.what==="heart"&&(this.hp--,this.combo=0),this.events.push({type:"nuisance",id:e.id,combo:this.combo,who:e.who}),this.message=t.line}thugKo(e,t=!1){this.actors=this.actors.filter(i=>i.id!==e.id),this.bump(),this.score+=60+Math.min(this.combo-1,9)*15,this.events.push({type:"ko",id:e.id,combo:this.combo,who:e.who}),this.message=t?"Шпану — с одного броска!":["ШМЯК! Шпана — в нокауте.","Мелочь, а приятно!","Брысь!"][this.combo%3]}friendHit(e){if(e.mad){this.message="Он и так обижен! Оставь в покое.";return}const t=bx[e.who],i=t[this.events.length%t.length];this.score=Math.max(0,this.score-Xh),this.hp=Math.max(0,this.hp-1),this.combo=0,e.mad=Ol,this.events.push({type:"offend",id:e.id,combo:0,who:e.who,text:i}),this.message=`${i} −${Xh} и сердце.`,this.hp||this.finish(!1)}spend(e){if(this.mode!=="play")return!1;if(this.briefing)return!0;if(this.ultActive)return this.message="Не до кулаков — идёт ульта!",!1;const t=mu(e,e==="grab"&&this.held!==null,this.held);return this.stamina<t?(this.message="Выдохни. Руки тоже устают.",!1):(this.stamina-=t,!0)}resolve(e,t){if(this.mode!=="play"||this.briefing)return"blocked";const i=e==="grab"&&this.held!==null,s=this.held;if(i&&(this.held=null),s==="hat"){if(t.kind==="cover"&&Hl(this.level,t.id,t.point)&&this.ult.phase==="none")return this.hatRest={...t.point,y:gt[this.level].covers.find(a=>a.id===t.id).max.y,flipped:!0},this.ult={phase:"intro",t:0,meter:1,hat:0},this.combo=0,this.events.push({type:"ult",id:0,combo:0,point:this.hatRest}),this.message="ДИНЬ! Шляпа на стойке…","ult";this.placeHat(),this.events.push({type:"hatBack",id:0,combo:0})}const r=typeof t.id=="number"?this.actors.find(a=>a.id===t.id):void 0;if(i&&s&&s!=="hat"&&(!r||r.kind!=="enemy")&&t.point&&this.rest(s,{x:t.point.x,y:0,z:t.point.z}),t.kind==="cover"&&typeof t.id=="string"&&this.gag(t.id,t.point))return this.combo=0,"cover";if(t.kind==="cover")return this.combo=0,this.message=i?"Бросок в укрытие. Жди, пока высунется!":"ТУК! Укрытие. Бей, когда высунется.","cover";if(!r)return this.combo=0,this.message=t.kind==="scenery"?"Только стену поцарапал.":i?"Бросок в никуда.":"Мимо! Чистый промах.","miss";if(r.kind==="dog")return this.dogHit(r),"protected";if(r.kind==="friend")return this.friendHit(r),"protected";if(r.kind==="thug")return e==="punch"||i?(this.thugKo(r,i),i?"throw":"hit"):(this.combo=0,this.message="Шпану — кулаком!","miss");if(r.kind==="hat"&&!(e==="grab"&&!i))return this.combo=0,this.message="Шляпу не бьют. Шляпу берут.","miss";if(r.kind!=="enemy")return this.actors=this.actors.filter(a=>a.id!==r.id),e==="grab"&&!i?(this.held=r.kind,this.stamina=Math.max(0,this.stamina-Math.max(0,It[r.kind].grab-pc)),this.message=r.kind==="hat"?"Котелок! Ему явно где-то здесь место…":It[r.kind].mass>=4?`Ух, ${It[r.kind].name}! Тяжело, но больно.`:"В руке! Теперь бросай в задиру.","grab"):(this.score+=25,this.events.push({type:"smash",id:r.id,combo:this.combo}),this.message="ДЗЫНЬ! Минус реквизит, плюс 25.","smash");if(e==="punch"||i){const a=r.antic?Mn.bonus:1;i&&s==="chicken"&&(this.bump(wt.chicken.combo),this.score+=wt.chicken.bonus,this.events.push({type:"squeak",id:r.id,combo:this.combo,point:t.point})),i&&s==="pie"&&(r.blind=wt.pie.blind,this.events.push({type:"blind",id:r.id,combo:this.combo,point:t.point})),i&&s==="plunger"&&(r.plunger=!0,r.deadline+=wt.plunger.stun,this.events.push({type:"stick",id:r.id,combo:this.combo,point:t.point}));const o=i&&s?Math.max(It[s].damage*a,r.hp??0):Zx*a;return this.hurt(r,o,i),i&&s==="pie"?this.message="Пирог в лицо! Ничего не видит, шатается.":i&&s==="plunger"?this.message="ЧПОК! Вантуз прилип к физиономии.":i&&s==="chicken"?this.message=`ПИ-И-ИСК! Комбо +${wt.chicken.combo}!`:!i&&a>1&&(this.message="ПОДЛОВИЛ! Урон ×2."),i?"throw":"hit"}return this.combo=0,this.message="Задиру — кулаком. Предмет — хватай!","miss"}launch(e,t){if(this.mode!=="play"||!this.held)return null;const i=zx(this.nextId++,this.held,e,t);return this.held=null,this.flights.push(i),this.message="Полетел!",i}fly(e,t){const i=[];if(this.mode!=="play")return i;for(const s of[...this.flights])for(const r of Bx(s,e,t)){if(i.push({flight:s,impact:r}),this.mode!=="play")return i;const a=It[s.kind];if(r.type==="hit"){const o=typeof r.id=="number"?this.actors.find(c=>c.id===r.id):void 0;if(o?.kind==="enemy"?this.propHit(s,o,r.point):o?.kind==="dog"?this.dogHit(o):o?.kind==="friend"?this.friendHit(o):o?.kind==="thug"?this.thugKo(o,!0):typeof r.id=="string"&&this.gag(r.id,r.point)||(this.combo=0,this.message=r.kind==="cover"?"Бросок в укрытие. Жди, пока высунется!":"Только стену задел."),this.mode!=="play")return i;if(s.kind==="melon"&&this.seeds(r.point,o?.kind==="enemy"?o.id:void 0),s.kind==="plunger"&&o?.kind==="enemy"&&o.plunger){this.flights=this.flights.filter(c=>c!==s);break}if(a.breakable){this.flights=this.flights.filter(c=>c!==s),this.events.push({type:"shatter",id:s.id,combo:this.combo,point:r.point,prop:s.kind});break}}else this.flights=this.flights.filter(o=>o!==s),this.landed(s,r.point,r.on)}return i}landed(e,t,i){if(e.kind==="hat"){if(Hl(this.level,i,t)&&this.ult.phase==="none"){this.hatRest={...t,flipped:!0},this.ult={phase:"intro",t:0,meter:1,hat:0},this.combo=0,this.events.push({type:"ult",id:0,combo:0,point:t}),this.message="ДИНЬ! Шляпа на стойке — вверх дном.";return}const s=this.layout.covers.find(r=>r.id===this.layout.landing?.cover);if(s&&t.z<s.min.z){this.placeHat(),this.events.push({type:"hatBack",id:0,combo:0});return}}if(e.kind==="hydrant"){const s={id:this.nextId++,x:t.x,z:t.z,age:0,hit:[]};this.geysers.push(s),this.events.push({type:"geyser",id:s.id,combo:this.combo,point:t}),this.message="Гидрант сорвало — фонтан!",this.rest(e.kind,t);return}e.kind==="chicken"&&this.events.push({type:"squeak",id:0,combo:this.combo,point:t}),e.struck||(this.combo=0,this.message=e.kind==="hat"?"Мимо стойки. Подбери котелок и ещё раз!":`Мимо! ${It[e.kind].name[0].toUpperCase()+It[e.kind].name.slice(1)} лежит — подбери.`),this.rest(e.kind,t)}rest(e,t){const i={id:this.nextId++,kind:e,x:t.x,y:t.y,z:t.z,layer:ya(t.z),age:0,deadline:1/0};this.actors.push(i),this.events.push({type:"land",id:i.id,combo:this.combo,point:t,prop:e})}dogHit(e){e.mad||(this.score=Math.max(0,this.score-150),this.hp=Math.max(0,this.hp-1),this.combo=0,e.mad=Ol,this.events.push({type:"dog",id:e.id,combo:0}),this.message="Пёс — святой! −150 и сердце.",this.hp||this.finish(!1))}hurt(e,t,i=!1,s){const r=Math.min(t,e.hp??1);return e.hp=Math.max(0,(e.hp??1)-t),e.hurtAt=this.elapsed,this.events.push({type:"hurt",id:e.id,combo:this.combo,amount:r}),e.hp>0?(this.score+=20,e.deadline=Math.max(e.deadline,e.age+Ns+1.2),this.message=i?`Прямое попадание! −${t}`:["БАМ! Ещё разок!","Шатается!","Добавь!"][Math.floor(e.hp/10)%3],!1):(this.actors=this.actors.filter(a=>a.id!==e.id),this.bump(),this.score+=(i?180:100)+Math.min(this.combo-1,9)*25,this.defeated++,this.events.push({type:"ko",id:e.id,combo:this.combo,how:s??Yx(this.defeated)}),this.message=i?"Точный бросок. Нокаут!":["Нокаут! Так держать.","Вот это размах!","Живой нокаут!"][this.combo%3],this.defeated>=this.goal&&this.finish(!0),!0)}act(e,t,i=!1){if(this.mode!=="play")return"blocked";if(!i&&!this.spend(e))return"tired";const s=this.actors.find(r=>r.id===t);return this.resolve(e,s?{kind:s.kind==="enemy"||s.kind==="dog"||s.kind==="friend"||s.kind==="thug"?s.kind:"prop",id:t}:{kind:"whiff"})}get canUlt(){return this.ult.phase==="none"}get pouring(){return this.ult.phase==="pour"}winNow(){this.mode==="play"&&(this.defeated=this.goal,this.finish(!0))}finish(e){this.won=e,this.mode="result",this.held=null,this.briefing=null,e&&(this.progress.unlocked=Math.min(Cr,Math.max(this.progress.unlocked,this.level+1)),this.score+=this.hp*100),this.ultActive&&(this.ult={...this.ult,phase:"done",t:0,meter:0}),this.progress.best=Math.max(this.progress.best,this.score),this.save({...this.progress})}}const Ma={lean:"gen_herald_lean.png",point:"gen_herald_point.png",mad:"gen_herald_mad.png"},Vo=n=>`./assets/${n}`,Zh=n=>n.replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]);function nv(n,e){n.innerHTML='<div class="hd-stage"><img class="hd-guy" alt="" draggable="false"><div class="hd-flyer" hidden><img alt="" draggable="false"><div class="hd-text"></div></div><div class="hd-card" role="status" hidden></div></div><div class="hd-bits"></div><button id="heraldSkip" class="hd-skip primary" type="button">ПОНЯЛ ✓<small>ESC · ПРОПУСТИТЬ</small></button>';const t=n.querySelector(".hd-guy"),i=n.querySelector(".hd-card"),s=n.querySelector(".hd-flyer"),r=s.querySelector("img"),a=s.querySelector(".hd-text"),o=n.querySelector(".hd-bits");n.querySelector("#heraldSkip").addEventListener("click",m=>{m.stopPropagation(),e()});const c=new Map;for(const m of Object.values(Ma)){const f=new Image;f.src=Vo(m),f.decode().then(()=>{const b=document.createElement("canvas");b.width=f.naturalWidth,b.height=f.naturalHeight;const E=b.getContext("2d",{willReadFrequently:!0});E&&(E.drawImage(f,0,0),c.set(m,E.getImageData(0,0,b.width,b.height)))}).catch(()=>{})}let l="",h="lean",d=-1;function u(m,f){if(n.hidden=!m,!m){l="",d=-1;return}h=m.phase==="mad"?"mad":m.index%2?"point":"lean";const b=m.flyer,E=`${m.phase}|${m.index}|${h}|${f}`;if(E===l)return;l=E,n.dataset.phase=m.phase,n.dataset.paused=String(f),t.src.endsWith(Ma[h])||(t.src=Vo(Ma[h])),t.dataset.pose=h;const v=m.phase==="mad"?m.line:m.phase==="leave"?Vx:"";i.hidden=!v,i.textContent=v;const A=!!b&&(m.phase==="show"||m.phase==="mad"||m.phase==="enter");s.hidden=!A,A&&b&&d!==m.index&&(d=m.index,s.dataset.art=b.art,r.src=Vo(`gen_flyer_${b.art}.png`),s.classList.remove("hd-in"),s.offsetWidth,s.classList.add("hd-in"),a.innerHTML=`<h3>${Zh(b.title)}</h3>${b.lines.map(w=>`<p>${Zh(w)}</p>`).join("")}<small>${m.index+1} / ${m.flyers.length} · ударь по листовке →</small>`)}function p(m,f){const b=g(m,f);return n.dataset.hit=b,b}function g(m,f){if(n.hidden)return"none";if(!s.hidden){const w=s.getBoundingClientRect();if(m>=w.left&&m<=w.right&&f>=w.top&&f<=w.bottom)return"flyer"}const b=t.getBoundingClientRect();if(m<b.left||m>b.right||f<b.top||f>b.bottom||!b.width)return"none";const E=c.get(Ma[h]);if(!E)return"herald";const v=Math.floor((m-b.left)/b.width*E.width),A=Math.floor((f-b.top)/b.height*E.height);return E.data[(A*E.width+v)*4+3]>60?"herald":"none"}function _(m){if(s.hidden||!m)return;const f=s.getBoundingClientRect(),b=s.dataset.art;for(const E of["l","r"]){const v=s.cloneNode(!0);v.classList.remove("hd-in"),v.classList.add("hd-half",E),v.style.left=f.left+"px",v.style.top=f.top+"px",v.style.width=f.width+"px",v.style.height=f.height+"px",v.dataset.art=b,o.append(v),setTimeout(()=>v.remove(),900)}for(let E=0;E<14;E++){const v=document.createElement("i");v.className="hd-bit",v.style.left=f.left+f.width*(.3+Math.random()*.4)+"px",v.style.top=f.top+f.height*(.2+Math.random()*.6)+"px",v.style.setProperty("--dx",(Math.random()-.5)*520+"px"),v.style.setProperty("--dy",(Math.random()*-.6+.2)*420+"px"),v.style.setProperty("--r",(Math.random()-.5)*900+"deg"),o.append(v),setTimeout(()=>v.remove(),900)}s.hidden=!0}return{sync:u,hit:p,tear:_}}function iv({left:n=!0}={}){const e=new Bt;function t(a,o,c,l=!1){const h=l?new St({color:c,fog:!1}):new ai({color:c,roughness:.9}),d=new Te(new On(...a),h);return d.position.set(...o),d.castShadow=!l,d.receiveShadow=!l,e.add(d),d}function i(a,o){t([.16,6,.16],[a*4.9,3,o],"#1f1a2a"),t([1.6,.15,.15],[a*4.25,6,o],"#1f1a2a");const c=t([.65,.14,.45],[a*3.5,5.85,o],"#fff1b2",!0);o===-5&&(c.userData.bell=a<0?0:1);const l=new uc("#ffffff",160,12,2);l.position.set(a*3.3,5.2,o),e.add(l)}t([70,.25,85],[0,-.2,-20],"#4a4552");for(let a=-36;a<-5;a+=4)t([.14,.02,2],[0,-.055,a],"#f2b45c");for(let a=-3.8;a<=3.8;a+=1.25)t([.7,.025,2.5],[a,-.05,-3.3],"#b9a9a8");for(const a of[-1,1]){if(a<0&&!n){t([.22,.36,60],[a*4.45,.05,-19],"#a99a92");for(const o of[-5,-20])i(a,o);continue}t([7,.3,60],[a*8,-.04,-19],"#6c5f6c"),t([.22,.36,60],[a*4.45,.05,-19],"#a99a92");for(let o=0;o<4;o++){const c=-7-o*8,l=6+(o+(a>0?1:0))%3*2.5;t([5,l,6.5],[a*8,l/2,c],o%2?"#5a4560":"#3e4a66"),t([5.35,.25,6.8],[a*8,l,c],"#221c30"),t([1.3,.22,5.5],[a*5.1,3,c],o%2?"#e0574f":"#2f9c8f");for(let h=-2;h<=2;h+=1)t([1.3,.24,.4],[a*5.1,3.02,c+h],"#f1e5bf");t([.15,1.3,2],[a*5.44,1.5,c],o%3?"#ffd27a":"#ff9f6a",!0),t([.15,1.3,2],[a*5.44,l-1.5,c],(o+a)%2?"#ffe3a1":"#3a3550",(o+a)%2!==0),o%2===0&&t([.6,1.2,.6],[a*7,l+.6,c+1.5],"#221c30")}for(const o of[-5,-20])i(a,o)}for(let a=0;a<9;a++){const o=7+a*7%5*2.2;t([3.2,o,2],[-14+a*3.5,o/2,-40],"#2a2140")}const s=["#ffd36e","#ff6fa8","#8ff0d0","#ffd36e","#ff9a5c"];for(const a of[-4.5,-9]){const o=new Te(new Kt(.012,.012,10,4),new St({color:"#141018"}));o.rotation.z=Math.PI/2,o.position.set(0,5.6,a),e.add(o);for(let c=-4.5,l=0;c<=4.5;c+=.75,l++){const h=new Te(new ji(.08,8,6),new St({color:s[l%s.length],fog:!1}));h.position.set(c,5.6-Math.cos(c/4.5*Math.PI/2)*.45,a),h.userData.blink=l,e.add(h)}}t([2.3,.18,4],[-6,3.7,-2],"#3a2f48");for(const a of[-3.7,-.3])t([.12,3.6,.12],[-6.8,1.8,a],"#3a2f48");t([.12,2.8,3.5],[-7,1.8,-2],"#7fd4c8",!0),t([.8,.18,2.8],[-6.2,.85,-2],"#e5af79"),t([.7,1.1,.7],[5.3,.55,1],"#2d4a46"),t([2.3,1.8,4],[6.6,1.2,-13],"#c9894f"),t([2.3,1.1,1.5],[6.6,2,-10.9],"#2e3346");const r=(a,o,c,l,h=0)=>{const d=document.createElement("canvas");d.width=512,d.height=128;const u=d.getContext("2d");u&&(u.fillStyle="#17121f",u.fillRect(0,0,512,128),u.font="900 64px Arial",u.textAlign="center",u.shadowColor=c,u.shadowBlur=22,u.fillStyle=c,u.fillText(a,256,86),u.fillStyle="#fff6f0",u.shadowBlur=0,u.fillText(a,256,84),u.strokeStyle=c,u.lineWidth=8,u.strokeRect(8,8,496,112));const p=new Mi(d);p.colorSpace=ut;const g=new Te(new Vt(o,o/4),new St({map:p,fog:!1}));g.position.set(...l),g.rotation.y=h,g.userData.neon=!0,e.add(g)};return r("ПЕРЕУЛОК",4.3,"#ff4fa3",[-5.9,4.55,-4]),r("ЧЕБУРЕКИ",3.2,"#5ef0c8",[5.42,4.2,-7],-Math.PI/2),n&&r("ШУМ",2.2,"#ffcf4a",[-5.42,4.8,-12.5],Math.PI/2),e}function sv(n){const e=new Bt,t=h=>new ai({color:h,roughness:.85});function i(h,d,u){const p=new Te(new On(...h),t(u));return p.position.set(...d),p.castShadow=p.receiveShadow=!0,e.add(p),p}const s=document.createElement("canvas");s.width=s.height=128;const r=s.getContext("2d");r&&(r.fillStyle="#d9d4c8",r.fillRect(0,0,128,128),r.fillStyle="#3b3733",r.fillRect(0,0,64,64),r.fillRect(64,64,64,64));const a=new Mi(s);a.wrapS=a.wrapT=Fa,a.repeat.set(14,11),a.colorSpace=ut,a.anisotropy=4;const o=new Te(new Vt(28,22),new ai({map:a,roughness:.6}));o.rotation.x=-Math.PI/2,o.position.set(0,0,1.6),o.receiveShadow=!0,e.add(o);const c=new Te(new Vt(21,21),new St({map:n,fog:!1}));c.position.set(0,21/2-4.6,-9.4),e.add(c);for(const h of[-1,1]){i([.4,12,18],[h*10.4,6,0],h<0?"#5d554c":"#4d463f");for(let d=-8;d<8;d+=2.2)i([.06,2.2,.14],[h*10.18,1.1,d],"#2f2a26")}for(let h=-8;h<=6;h+=3.5)i([22,.45,.5],[0,8.2,h],"#2a2622");i([22,.2,18],[0,8.6,-.5],"#1b1917");const l=(h,d,u)=>{i([.12,u,.12],[h,u/2,d],"#2f2a26");const p=new Te(new Kt(.32,.3,.14,18),t("#7a3b2f"));p.position.set(h,u,d),p.castShadow=p.receiveShadow=!0,e.add(p);const g=new Te(new cc(.24,.025,6,18),t("#9a9a9a"));g.rotation.x=Math.PI/2,g.position.set(h,u*.35,d),e.add(g)};for(const h of[-2.3,2.7])l(h,-1.55,.95);l(.95,3.45,.7),[-3,2.5].forEach((h,d)=>{const u=new Bt;u.position.set(h,8.4,-3.2),u.userData.lamp=d,e.add(u);const p=new Te(new Kt(.015,.015,2.6,4),new St({color:"#111111"}));p.position.set(0,-1.3,0),u.add(p);const g=new Te(new lc(.55,.45,18,1,!0),new St({color:"#f4efe0",side:Ot}));g.position.set(0,-2.7,0),u.add(g);const _=new uc("#ffffff",55,11,1.6);_.position.set(0,-3.2,0),_.userData.base=55,u.add(_)});for(const h of[-1,1]){const d=new Bt;d.position.set(h<0?3.55:5.35,0,-7.2),e.add(d);const u=new Te(new On(.85,1.25,.06),t("#8e6b4a"));u.position.set(-h*.44,1.2,0),u.castShadow=!0,d.add(u),d.userData.swing=h}return e}const rv=[[0,76,1],[1,79,2],[3,76,1],[4,72,2],[6,76,1],[7,79,1],[8,81,2],[10,79,1],[11,76,2],[13,72,1],[14,74,2],[16,73,1],[17,76,2],[19,79,1],[20,81,2],[22,79,1],[23,76,1],[24,73,2],[26,76,1],[27,69,3],[30,71,2],[32,79,1],[33,77,1],[34,76,1],[35,74,1],[36,72,1],[37,71,1],[38,74,2],[40,79,2],[42,77,2],[44,76,2],[46,74,2]],av=[{bass:[48,43],chord:[64,67,72]},{bass:[45,40],chord:[61,64,67]},{bass:[43,38],chord:[59,65,67]}],Jh={step:48,notes:[36,48,60,64,67,72]},Sa=[{key:0,step:.095,lift:0},{key:5,step:.09,lift:12},{key:-3,step:.1,lift:0},{key:2,step:.088,lift:12}];function ov(n=0){const e=Sa[(n%Sa.length+Sa.length)%Sa.length],t=[],i=s=>s*e.step+(s%2?e.step*.18:0);for(const[s,r,a]of rv)t.push({t:i(s),midi:r+e.key+(s>=32?0:e.lift),dur:a*e.step*1.1,vel:s%4===0?1:.8});av.forEach((s,r)=>{const a=r*16;t.push({t:i(a),midi:s.bass[0]+e.key,dur:e.step*3.5,vel:.95},{t:i(a+8),midi:s.bass[1]+e.key,dur:e.step*3.5,vel:.9});for(const o of[a+4,a+12])for(const c of s.chord)t.push({t:i(o),midi:c+e.key-12,dur:e.step*2,vel:.6})});for(const s of Jh.notes)t.push({t:i(Jh.step),midi:s+e.key,dur:.7,vel:.9});return t.sort((s,r)=>s.t-r.t)}const gu=(n,e,t)=>.2126*n+.7152*e+.0722*t;function Vl(n){const e=gu(n.r,n.g,n.b);return n.setRGB(e,e,e)}function _u(n){const e=n.getContext("2d",{willReadFrequently:!0});if(!e)return;const t=e.getImageData(0,0,n.width,n.height),i=t.data;for(let s=0;s<i.length;s+=4){const r=Math.round(gu(i[s],i[s+1],i[s+2]));i[s]=i[s+1]=i[s+2]=r}e.putImageData(t,0,0)}const Qh=new WeakSet;function lv(n){return n.traverse(e=>{const t=e.material;if(t)for(const i of Array.isArray(t)?t:[t]){if(Qh.has(i))continue;Qh.add(i),i.color&&Vl(i.color),i.emissive&&Vl(i.emissive);const s=i.map?.image;typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement&&(_u(s),i.map.needsUpdate=!0),i.userData.world=!0}}),n}const Va={street:{sky:[[0,"#4a4a4a"],[.5,"#9c9c9c"],[.8,"#d4d4d4"],[1,"#ececec"]],fog:"#a8a8a8",near:16,far:50,hemi:["#ececec","#4e4e4e",1.8],sun:["#f6f6f6",2.6],sunAt:[-7,13,10]},bar:{sky:[[0,"#0b0b0b"],[.6,"#1e1e1e"],[1,"#3a3a3a"]],fog:"#1a1a1a",near:20,far:48,hemi:["#dcdcdc","#2a2a2a",1.5],sun:["#ffffff",2.3],sunAt:[-4,9,9]}},vc={base:"#2c55c9",shine:"#6d93ee",dark:"#1a3486"};function ur(n,e){const t=Math.max(34,Math.min(78,Math.min(n*.095,e*.078)));return{r:t,hose:t*1.02,ink:Math.max(3,t*.09),rim:Math.max(2,t*.05)}}const Wo=1.45;function cv(n,e){return n.x>=e/2?1:-1}function yc(n,e,t,i,s=0){const{r,hose:a}=ur(e,t),o=Math.max(r*2,e*.12),c=n>0?e-o:o;let l=t-r*2.3;i&&i.right>c-r*Wo&&i.left<c+r*Wo&&(l=Math.min(l,i.top-r*Wo-6)),l=Math.max(l,t*.45)+s;const d={x:Math.min(e-a,Math.max(a,c-n*r*1.5)),y:t+a*.7},u={x:c,y:l},p={x:c+n*r*.55,y:(d.y+l)/2+r*.2};return{side:n,shoulder:d,ctrl:p,glove:u,r,w0:a,w1:a*.74,open:!1,squash:0}}const Xo=(n,e,t)=>({x:n.x+(e.x-n.x)*t,y:n.y+(e.y-n.y)*t}),hv=n=>{const t=n-1;return 1+(1.9+1)*t**3+1.9*t**2};function ed(n,e,t,i,s,r,a={}){const o=yc(n,e,t,a.avoid),c=a.depth??1,l=!!a.throwing;let h,d=0,u=0,p=0,g=!1;if(s<.08){const P=Math.sin(s/.08*Math.PI/2)*(l?1.8:1);h={x:o.glove.x+n*o.r*.25*P,y:o.glove.y+o.r*.45*P},u=.1*P,p=.08*P}else if(s<r.arrive){const P=(s-.08)/(r.arrive-.08);d=hv(P),h=Xo(o.glove,i,d),u=l?.55*Math.cos(P*Math.PI):.22*Math.sin(P*Math.PI)+.05,p=-.12*Math.sin(P*Math.PI),g=!!a.grab&&!l}else if(s<r.release){const P=(s-r.arrive)/(r.release-r.arrive);d=1,h={...i},u=.07*Math.sin(P*Math.PI*5)*(1-P)+(l?-.3*(1-P):0),p=.22*Math.max(0,1-P*3),g=!!a.grab||l}else{const P=Math.min(1,(s-r.release)/(1-r.release)),S=(1-P)**2*Math.cos(P*Math.PI*2.5),M=S<0?Math.max(S,-.25*o.r/(Math.hypot(i.x-o.glove.x,i.y-o.glove.y)||1)):S;d=Math.max(0,M),h=Xo(o.glove,i,M),u=-.18*(1-P)*Math.sin(P*Math.PI*3+.5),g=l&&P<.3}const _=1+(Math.min(1.15,Math.max(.6,c))-1)*Math.min(1,Math.max(0,d)),m=o.r*_,f=o.shoulder,b=h.x-f.x,E=h.y-f.y,v=Math.hypot(b,E)||1,A=Xo(f,h,.45),w={x:-E/v*n,y:b/v*n},C=s<.08?{x:o.ctrl.x+w.x*u*v,y:o.ctrl.y+w.y*u*v}:{x:A.x+w.x*u*v,y:A.y+w.y*u*v};return{side:n,shoulder:f,ctrl:C,glove:h,r:m,w0:o.w0,w1:o.w1*Math.max(.55,_),open:g,squash:p}}const ba="#151715",td="rgba(255,248,226,.92)",dv=vc.base,uv=vc.shine,fv=vc.dark,nd="#fdfaf0",pv="#ddd6c4";function mv(n,e,t,i){const s=1-i;return{x:s*s*n.x+2*s*i*e.x+i*i*t.x,y:s*s*n.y+2*s*i*e.y+i*i*t.y}}function xu(n,e,t,i){const s=1-i,r=2*s*(e.x-n.x)+2*i*(t.x-e.x),a=2*s*(e.y-n.y)+2*i*(t.y-e.y),o=Math.hypot(r,a)||1;return{x:r/o,y:a/o}}function qo(n,e,t,i,s,r,a){const c=[],l=[];for(let h=0;h<=24;h++){const d=h/24,u=mv(e,t,i,d),p=xu(e,t,i,d),g=(s+(r-s)*d)/2,_=-p.y,m=p.x,[f,b]=a??[-1,1];c.push({x:u.x+_*g*b,y:u.y+m*g*b}),l.push({x:u.x+_*g*f,y:u.y+m*g*f})}n.beginPath(),c.forEach((h,d)=>d?n.lineTo(h.x,h.y):n.moveTo(h.x,h.y));for(let h=l.length-1;h>=0;h--)n.lineTo(l[h].x,l[h].y);n.closePath()}function gv(n,e){const t=(s,r,a,o,c=0)=>({path:l=>{l.beginPath(),l.ellipse(s,r,a,o,c,0,Math.PI*2)}}),i=(s,r,a,o=.35)=>{const c=Math.sin(s),l=-Math.cos(s);return{line:a,path:h=>{h.beginPath(),h.moveTo(c*o,l*o),h.lineTo(c*(o+r),l*(o+r))}}};return n?[t(0,.1,.82,.78),i(-.5,.72,.38),i(-.17,.86,.38),i(.17,.86,.38),i(.5,.72,.38),i(e*1.35,.55,.36,.45)]:[t(0,.05,.88,.84),t(0,-.5,.8,.46),t(e*.8,.05,.3,.5,e*.35)]}const _v=[{path:n=>{n.beginPath(),n.moveTo(-.5,.55),n.lineTo(.5,.55),n.lineTo(.74,1.02),n.ellipse(0,1.02,.74,.3,0,0,Math.PI),n.lineTo(-.5,.55),n.closePath()}}];function sr(n,e,t,i,s){n.strokeStyle=i,n.fillStyle=i;for(const r of e){if(r.path(n),r.line){n.lineWidth=r.line+t*2,n.stroke();continue}t>0&&(n.lineWidth=t*2,n.stroke()),s&&n.fill()}}function xv(n,e,t,i){const{shoulder:s,ctrl:r,glove:a,r:o,side:c}=e,l=xu(s,r,a,1),h={x:a.x+l.x*-o*.95,y:a.y+l.y*-o*.95},d=Math.atan2(l.y,l.x)+Math.PI/2,u=-c;n.save(),n.lineJoin="round",n.lineCap="round",qo(n,s,r,h,e.w0,e.w1),n.strokeStyle=td,n.lineWidth=(t+i)*2,n.stroke(),n.strokeStyle=ba,n.lineWidth=t*2,n.stroke(),n.fillStyle=dv,n.fill(),qo(n,s,r,h,e.w0,e.w1,[c>0?.35:-1,c>0?1:-.35]),n.fillStyle=fv,n.fill(),qo(n,s,r,h,e.w0,e.w1,c>0?[-.62,-.3]:[.3,.62]),n.fillStyle=uv,n.fill(),n.translate(a.x,a.y),n.rotate(d),n.scale(o*(1+e.squash*.6),o*(1-e.squash));const p=1/o,g=gv(e.open,u),_=_v;if(sr(n,[...g,..._],(t+i)*p,td,!1),sr(n,g,t*p,ba,!1),sr(n,g,0,nd,!0),n.save(),g[0].path(n),n.clip(),n.fillStyle=pv,n.beginPath(),n.ellipse(-u*.45,.55,.8,.55,0,0,Math.PI*2),n.fill(),n.restore(),n.strokeStyle=ba,n.lineWidth=t*p*.55,n.lineCap="round",e.open)n.beginPath(),n.arc(0,.2,.38,Math.PI*1.15,Math.PI*1.85),n.stroke();else{for(const m of[-.32,0,.32])n.beginPath(),n.moveTo(m*1.05,-.94+Math.abs(m)*.2),n.quadraticCurveTo(m*.9,-.78,m*.8,-.62),n.stroke();n.lineWidth=t*p*.8;for(const m of[-.27,0,.27])n.beginPath(),n.moveTo(m,-.22),n.lineTo(m*1.08,.3),n.stroke()}sr(n,_,t*p,ba,!1),sr(n,_,0,nd,!0),n.beginPath(),n.moveTo(-.56,.7),n.quadraticCurveTo(0,.82,.56,.7),n.stroke(),n.restore()}const vu="long-arms.settings.v1",yu=matchMedia("(prefers-reduced-motion: reduce)");let _n=!1,Pr;try{const n=JSON.parse(localStorage.getItem(vu)??"null");typeof n=="object"&&n!==null&&("muted"in n&&typeof n.muted=="boolean"&&(_n=n.muted),"reducedMotion"in n&&typeof n.reducedMotion=="boolean"&&(Pr=n.reducedMotion))}catch{_n=!1,Pr=void 0}const Fs=()=>Pr??yu.matches;function Mc(){document.documentElement.dataset.reducedMotion=String(Fs())}Mc();yu.addEventListener("change",Mc);let hn,Yo=!0;function kr(){if(!(_n||!Yo))try{hn??=new AudioContext,hn.state==="suspended"&&hn.resume().catch(()=>{Yo=!1})}catch{Yo=!1}}const vv={ui:[["sine",520,300,.1,.05,0]],whoosh:[["sine",180,420,.16,.02,.9]],hit:[["triangle",150,48,.16,.09,.5],["square",420,160,.05,.025,0]],throw:[["triangle",300,70,.18,.08,.4]],ko:[["sine",660,1320,.22,.035,0],["sine",990,1980,.22,.02,0]],grab:[["sine",230,380,.1,.06,0]],cover:[["square",110,60,.09,.05,.6]],miss:[["sine",260,90,.2,.03,.5]],dog:[["sine",880,520,.32,.05,0],["sine",700,400,.3,.03,0]],attack:[["sawtooth",90,40,.25,.07,.7]],windup:[["sine",300,520,.18,.025,0]],ding:[["sine",1568,1560,1.2,.08,0],["sine",3136,3120,.7,.03,0],["triangle",784,780,.9,.03,0]],slide:[["sine",1400,260,.9,.06,0]],yuck:[["sawtooth",210,120,.28,.035,.3]],toss:[["sine",260,620,.14,.03,.8]],thud:[["triangle",120,55,.14,.07,.5]],bell:[["sine",988,980,1.6,.07,0],["sine",1976,1960,.9,.025,0],["triangle",494,490,1.4,.035,0]],cuckoo:[["sine",784,780,.2,.06,0,0],["sine",622,620,.35,.06,0,.24],["sine",784,780,.2,.05,0,.75],["sine",622,620,.35,.05,0,.99]],buzz:[["sawtooth",110,108,.45,.03,.5],["square",220,218,.3,.012,0,.1]],flop:[["sine",320,110,.35,.04,.6]],shatter:[["square",2400,1800,.18,.02,.9],["triangle",1600,900,.25,.025,.6],["sine",3200,2600,.12,.015,0]],huff:[["sawtooth",330,180,.12,.04,.4],["sawtooth",300,150,.2,.035,.5,.14]],squeak:[["square",1300,1900,.09,.035,0],["square",1900,1100,.16,.03,0,.09]],harp:[0,4,7,12,16,19,24,28].map((n,e)=>["triangle",523*2**(n/12),523*2**(n/12)*.995,.9,.035,0,e*.07]),whistle:[["sine",2300,500,1.1,.045,0]],crash:[["sawtooth",90,35,.6,.09,.8],["square",1200,300,.4,.03,.9,.03],["triangle",60,40,.7,.08,.3]],strike:[["square",900,300,.12,.04,.8],["triangle",200,60,.4,.06,.7,.05],["square",1400,500,.2,.02,.9,.12]],splat:[["sine",240,60,.25,.07,.7]],zing:[["sawtooth",400,1400,.12,.03,.2]],steal:[["sine",600,1200,.08,.04,0],["sine",1200,600,.12,.03,0,.08]],pop:[["sine",220,660,.09,.05,.2]],geyser:[["sine",300,900,.9,.04,.95]],iris:[["triangle",880,440,.25,.03,0],["triangle",660,330,.3,.03,0,.12]],boing:[["sine",140,420,.35,.06,0]]};let Ea;function Ae(n){if(_n||document.hidden||!hn||hn.state!=="running")return;const e=hn;if(e.currentTime,!Ea){Ea=e.createBuffer(1,e.sampleRate*.4,e.sampleRate);const t=Ea.getChannelData(0);for(let i=0;i<t.length;i++)t[i]=Math.random()*2-1}for(const[t,i,s,r,a,o,c]of vv[n]){const l=e.currentTime+(c??0),h=e.createGain();h.connect(e.destination),h.gain.setValueAtTime(1e-4,l),h.gain.exponentialRampToValueAtTime(a,l+.008),h.gain.exponentialRampToValueAtTime(1e-4,l+r);const d=e.createOscillator();d.type=t,d.frequency.setValueAtTime(i,l),d.frequency.exponentialRampToValueAtTime(Math.max(30,s),l+r*.8);const u=e.createGain();if(u.gain.value=1-o*.7,d.connect(u),u.connect(h),d.start(l),d.stop(l+r+.02),d.onended=()=>{d.disconnect(),u.disconnect(),h.disconnect()},o>0){const p=e.createBufferSource(),g=e.createBiquadFilter(),_=e.createGain();p.buffer=Ea,g.type="bandpass",g.frequency.setValueAtTime(i*4,l),g.frequency.exponentialRampToValueAtTime(Math.max(60,s*4),l+r),_.gain.value=o,p.connect(g),g.connect(_),_.connect(h),p.start(l),p.stop(l+r),p.onended=()=>{p.disconnect(),g.disconnect(),_.disconnect()}}}}let rr;function yv(n){if(!(n&&!_n&&!document.hidden&&hn?.state==="running")){if(rr){const d=rr;rr=void 0,d.gain.gain.setTargetAtTime(0,hn.currentTime,.05),setTimeout(()=>{d.src.stop(),d.lfo.stop(),d.src.disconnect(),d.gain.disconnect()},300)}return}if(rr||!hn)return;const t=hn,i=t.sampleRate*2,s=t.createBuffer(1,i,t.sampleRate),r=s.getChannelData(0);for(let d=0;d<i;d++)r[d]=Math.random()*2-1;const a=t.createBufferSource();a.buffer=s,a.loop=!0;const o=t.createBiquadFilter();o.type="bandpass",o.frequency.value=2200,o.Q.value=1.4;const c=t.createGain();c.gain.value=0,c.gain.setTargetAtTime(.05,t.currentTime,.08);const l=t.createOscillator(),h=t.createGain();l.frequency.value=9,h.gain.value=900,l.connect(h),h.connect(o.frequency),a.connect(o),o.connect(c),c.connect(t.destination),a.start(),l.start(),rr={src:a,gain:c,lfo:l}}function id(){try{localStorage.setItem(vu,JSON.stringify({muted:_n,reducedMotion:Pr}))}catch{document.querySelector("#settings-note")?.replaceChildren("Настройки действуют до закрытия вкладки.")}}function Mv(){return`<div class="settings" aria-label="Настройки"><button id="mute" aria-pressed="${_n}">Без звука: ${_n?"да":"нет"}</button><button id="motion" aria-pressed="${Fs()}">Меньше движения: ${Fs()?"да":"нет"}</button><span id="settings-note" role="status"></span></div>`}function Sv(n){document.getElementById("mute")?.addEventListener("click",()=>{_n=!_n,id(),_n||(kr(),Ae("ui")),n()}),document.getElementById("motion")?.addEventListener("click",()=>{Pr=!Fs(),Mc(),id(),n()})}let $o;function bv(n){if(_n||document.hidden||!hn||hn.state!=="running")return!1;const e=hn,t=e.currentTime+.03;if($o){const r=$o;r.gain.setTargetAtTime(0,e.currentTime,.03),setTimeout(()=>r.disconnect(),400)}const i=e.createGain();i.gain.value=.9;const s=e.createBiquadFilter();s.type="lowpass",s.frequency.value=3200,s.Q.value=.4,i.connect(s),s.connect(e.destination),$o=i;for(const r of n){const a=440*2**((r.midi-69)/12),o=t+r.t,c=o+r.dur+.25,l=e.createGain();l.connect(i),l.gain.setValueAtTime(1e-4,o),l.gain.exponentialRampToValueAtTime(.045*r.vel,o+.005),l.gain.exponentialRampToValueAtTime(.012*r.vel,o+Math.min(.18,r.dur)),l.gain.exponentialRampToValueAtTime(1e-4,c);for(const[h,d,u]of[["triangle",-9,1],["triangle",9,1],["square",3,.12]]){const p=e.createOscillator(),g=e.createGain();p.type=h,p.frequency.value=a,p.detune.value=d,g.gain.value=u,p.connect(g),g.connect(l),p.start(o),p.stop(c+.02),p.onended=()=>{p.disconnect(),g.disconnect()}}}return!0}let Mu=pu(()=>null);try{Mu=pu(n=>localStorage.getItem(n))}catch{}const F=new tv(Mu,n=>{try{localStorage.setItem(uu,JSON.stringify(n))}catch{F.message="Сохранение недоступно в этом браузере."}}),Dr=document.querySelector("#app");Dr.innerHTML='<canvas id="scene" aria-label="Трёхмерный двор и задиры"></canvas><div id="film" aria-hidden="true"></div><div id="herald" hidden></div><canvas id="arm" aria-hidden="true"></canvas><div id="ui"></div><div id="orientation-prompt" class="orientation-overlay" hidden></div>';const En=document.querySelector("#ui"),fi=document.querySelector("#orientation-prompt");let sd=!1;function Gs(){if(!fi)return;if(!(window.innerHeight>window.innerWidth&&!sd)){fi.hidden=!0,fi.innerHTML="";return}(fi.hidden||!fi.querySelector("#portrait-bypass"))&&(fi.hidden=!1,fi.innerHTML='<div class="orientation-card" role="dialog" aria-modal="true" aria-labelledby="orient-title"><div class="orientation-icon" aria-hidden="true"><svg viewBox="0 0 48 48" width="52" height="52"><rect x="13" y="7" width="22" height="34" rx="4" fill="none" stroke="#f4f1e8" stroke-width="3"/><line x1="20" y1="35" x2="28" y2="35" stroke="#f4f1e8" stroke-width="3" stroke-linecap="round"/><path d="M 37 15 A 13 13 0 0 1 37 31" fill="none" stroke="#c7f653" stroke-width="3" stroke-dasharray="4 2"/><polyline points="34,31 38,33 40,28" fill="none" stroke="#c7f653" stroke-width="3" stroke-linejoin="round"/></svg></div><div class="eyebrow" style="justify-content:center">ГОРИЗОНТАЛЬНЫЙ РЕЖИМ</div><h2 id="orient-title">ПОВЕРНИТЕ<br><em>УСТРОЙСТВО</em></h2><p>Пожалуйста, переверните устройство в горизонтальный режим</p><div class="buttons" style="justify-content:center"><button id="portrait-bypass" class="secondary" type="button">Продолжить</button></div></div>',fi.querySelector("#portrait-bypass")?.addEventListener("click",()=>{kr(),Ae("ui"),sd=!0,Gs()}))}F.briefings=!0;F.touch=matchMedia("(pointer: coarse)").matches;addEventListener("pointerdown",n=>{F.touch=n.pointerType==="touch"},{capture:!0});const Sc=nv(document.querySelector("#herald"),()=>Su());function Su(){!F.briefing||F.mode!=="play"||(kr(),Ae("ui"),F.skipBriefing(),At())}{const n=document.createElement("canvas");n.width=n.height=128;const e=n.getContext("2d");if(e){const t=e.createImageData(128,128);for(let i=0;i<t.data.length;i+=4){const s=Math.random()*255;t.data[i]=t.data[i+1]=t.data[i+2]=s,t.data[i+3]=255}e.putImageData(t,0,0)}document.getElementById("film")?.style.setProperty("--grain",`url(${n.toDataURL()})`)}const at=document.querySelector("#scene"),Fn=new Mx({canvas:at,antialias:!0,alpha:!1});Fn.setPixelRatio(Math.min(devicePixelRatio,2));Fn.shadowMap.enabled=!0;Fn.shadowMap.type=yd;Fn.outputColorSpace=ut;Fn.autoClear=!1;Fn.info.autoReset=!1;const gn=new yp;gn.background=new Ge("#e2e2e2");gn.fog=new ac("#e2e2e2",14,42);const yt=new ln(50,1,.3,90),Ua=new Lp("#ffffff","#6e6e6e",2.4);gn.add(Ua);const Gt=new Np("#ffffff",3);Gt.position.set(-7,14,10);Gt.castShadow=!0;Gt.shadow.mapSize.set(2048,2048);Gt.shadow.bias=-6e-4;Gt.shadow.normalBias=.02;Gt.shadow.camera.left=-16;Gt.shadow.camera.right=16;Gt.shadow.camera.top=16;Gt.shadow.camera.bottom=-16;gn.add(Gt);function rd(n){const e=document.createElement("canvas");e.width=4,e.height=256;const t=e.getContext("2d"),i=t.createLinearGradient(0,0,0,256);for(const[r,a]of n)i.addColorStop(r,a);t.fillStyle=i,t.fillRect(0,0,4,256);const s=new Mi(e);return s.colorSpace=ut,s}const Ev={street:rd(Va.street.sky),bar:rd(Va.bar.sky)},bu=()=>F.mode==="menu"||F.mode==="select"?1:F.level,bc=(n=F.level)=>gt[n].look==="bar";function Tv(n){const e=gt[n].look,t=Va[e];gn.background=Ev[e],gn.fog.color.set(t.fog),gn.fog.near=t.near,gn.fog.far=t.far,Ua.color.set(t.hemi[0]),Ua.groundColor.set(t.hemi[1]),Ua.intensity=t.hemi[2],Gt.color.set(t.sun[0]),Gt.intensity=t.sun[1],Na=t.sunAt}let Na=Va.bar.sunAt;gn.add(Gt.target);function ad(n){Gt.position.set(Na[0]+n,Na[1],Na[2]),Gt.target.position.set(n,0,0),Gt.target.updateMatrixWorld()}const Eu=n=>"./assets/"+n,Tu=new Vd({color:"#202320"}),od=new Map;function bn(n){let e=od.get(n);return e||(e=new ai({color:n,roughness:.9,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1}),od.set(n,e)),e}function He(n,e,t,i,s,r,a,o,c=!0){const l=new Te(new On(e,t,i),bn(s));return l.position.set(r,a,o),l.castShadow=!0,l.receiveShadow=!0,n.add(l),c&&l.add(new wp(new Ap(l.geometry),Tu)),l}const wv=n=>new I((n.min.x+n.max.x)/2,(n.min.y+n.max.y)/2,(n.min.z+n.max.z)/2),Av=n=>new I(n.max.x-n.min.x,n.max.y-n.min.y,n.max.z-n.min.z),zr=new Map;function Rv(n,e){const t=new Bt,i=wv(e),s=Av(e);if(t.position.set(i.x,e.min.y,i.z),n.add(t),zr.set(e.id,t),e.look==="barrel"){const r=new Te(new Kt(s.x/2,s.x/2*.94,s.y,20),bn(e.color));r.position.y=s.y/2,r.castShadow=r.receiveShadow=!0,t.add(r);for(const o of[.18,.82]){const c=new Te(new Kt(s.x/2+.018,s.x/2+.018,.07,20,1,!0),bn("#2a2e2a"));c.position.y=s.y*o,t.add(c)}const a=new Te(new Ki(s.x/2*.9,20),bn("#1f2422"));a.rotation.x=-Math.PI/2,a.position.y=s.y+.004,t.add(a)}else if(e.look==="crate"||e.look==="pallet"){He(t,s.x,s.y,s.z,e.color,0,s.y/2,0);const r=e.look==="crate"?3:5;for(let a=0;a<r;a++)He(t,s.x*.96,.05,.03,"#7b5532",0,s.y*(a+.5)/r,s.z/2+.02,!1)}else if(e.look==="dumpster")He(t,s.x,s.y,s.z,e.color,0,s.y/2,0),He(t,s.x+.08,.09,s.z+.08,"#2b4f39",0,s.y+.045,0),He(t,s.x*.8,.16,.03,"#f1e7c3",0,s.y*.55,s.z/2+.02,!1);else if(e.look==="van"){He(t,s.x,s.y,s.z,e.color,0,s.y/2,0),He(t,.9,.6,.03,"#2d3a40",s.x/2-.6,s.y*.72,s.z/2+.02,!1),He(t,s.x*.55,.2,.03,"#f359a4",-.4,s.y*.38,s.z/2+.02,!1);for(const r of[-s.x/2+.55,s.x/2-.55]){const a=new Te(new Kt(.34,.34,.25,16),bn("#1f2321"));a.rotation.x=Math.PI/2,a.position.set(r,.09-e.min.y+.25,s.z/2-.1),t.add(a)}}else if(e.look==="barrier"){He(t,s.x,s.y,s.z,e.color,0,s.y/2,0);for(let r=0;r<4;r++)He(t,.32,s.y*.7,.03,"#e55a3a",-s.x/2+.35+r*.6,s.y*.5,s.z/2+.02,!1)}else if(e.look==="piano"){He(t,s.x,s.y,s.z,e.color,0,s.y/2,0),He(t,s.x+.1,.08,s.z+.1,"#241a15",0,s.y+.04,0),He(t,s.x*.92,.1,.32,"#efe9da",0,s.y*.6,s.z/2+.16);for(let r=0;r<14;r++)He(t,.045,.05,.18,"#161311",-s.x*.42+r*s.x*.065,s.y*.6+.07,s.z/2+.12,!1);He(t,s.x*.7,s.y*.3,.03,"#5a4436",0,s.y*.8,s.z/2+.02,!1)}else if(e.look==="table"){const r=new Te(new Kt(s.x/2,s.x/2+.08,s.y,24),bn(e.color));r.position.y=s.y/2,r.castShadow=r.receiveShadow=!0,t.add(r);const a=new Te(new Kt(s.x/2+.06,s.x/2+.06,.06,24),bn("#4a3a2e"));a.position.y=s.y+.03,t.add(a);const o=new Te(new Kt(.05,.05,.25,8),bn("#f2efe6"));o.position.set(.2,s.y+.18,0),t.add(o)}else if(e.look==="counter"){He(t,s.x,s.y-.1,s.z,e.color,0,(s.y-.1)/2,0),He(t,s.x+.2,.1,s.z+.2,"#3a2a1e",0,s.y-.05,.05);for(let a=0;a<6;a++)He(t,s.x/6-.2,s.y*.55,.03,"#7d5a40",-s.x/2+(a+.5)*s.x/6,s.y*.45,s.z/2+.02,!1);const r=new Te(new Kt(.04,.04,s.x,8),bn("#b9b9b9"));r.rotation.z=Math.PI/2,r.position.set(0,.22,s.z/2+.2),t.add(r)}else if(e.look==="shelves"){He(t,s.x,s.y,s.z,e.color,0,s.y/2,0);for(let r=0;r<3;r++){He(t,s.x*.94,.06,.2,"#2c221a",0,.9+r*.7,s.z/2+.08,!1);for(let a=0;a<11;a++){const o=new Te(new Kt(.07,.08,.38+a%3*.06,8),bn(["#3d4a35","#5a3a26","#77705e"][(a+r)%3]));o.position.set(-s.x*.43+a*s.x*.086,1.13+r*.7,s.z/2+.1),t.add(o)}}}else if(e.look==="interior"){He(t,s.x,s.y,s.z,e.color,0,s.y/2,0,!1);const r=new Te(new Vt(s.x*.5,s.y*.4),new St({color:"#f7d58a",fog:!0}));r.position.set(s.x*.18,s.y*.62,s.z/2+.01),t.add(r)}else He(t,s.x,s.y,s.z,e.color,0,s.y/2,0,e.look!=="wall")}function Cv(n,e){const t=e.filter(s=>s.look==="wall");if(!t.length)return;const i=t[0].max.z+.04;for(const s of e.filter(r=>r.look==="interior")){const r=s.min.x+.5,a=s.max.x-.5,o=s.min.y+1.2,c=s.max.y-.6;He(n,a-r+.3,.14,.1,"#efe7cc",(r+a)/2,o-.07,i),He(n,a-r+.3,.14,.1,"#efe7cc",(r+a)/2,c+.07,i);for(const l of[r-.08,a+.08])He(n,.14,c-o,.1,"#efe7cc",l,(o+c)/2,i)}}function Pv(n,e){const t=[];let i=0;return n.updateMatrixWorld(!0),n.traverse(s=>{if(!(s instanceof Te)||e.has(s))return;const r=new Bs().setFromObject(s);r.max.y-r.min.y<.5||t.push({id:"scenery-"+i++,kind:"scenery",min:r.min.clone(),max:r.max.clone()})}),t}function Dv(){const n=new Bt;He(n,41.5,.25,60,"#a7aaa0",-11.25,-.125,-10,!1),He(n,.3,.14,60,"#c9cbc2",9.5,.07,-10),He(n,12,.02,9,"#bdbdb0",0,.01,2.5,!1),He(n,4,9,16,"#a9afa5",-9.5,4.5,-2);for(let i=2;i<8;i+=2.6)for(let s=-8;s<5;s+=3.2)He(n,.1,1.5,1.1,"#59675f",-7.47,i,s);He(n,21,2,.3,"#9da497",-2.5,10,-9);for(const i of[-4.2,-6.6])He(n,.9,5.2,.9,"#8f8a80",7.4,2.6,i);He(n,.9,.7,3.3,"#8f8a80",7.4,5.55,-5.4),He(n,1.6,10,3,"#a3a59b",8.6,5,-10.1),He(n,.1,4.6,.1,"#596358",-6.5,2.3,-4.5),He(n,.1,4.6,.1,"#596358",6.5,2.3,-4.5);const e=new Te(new Kt(.015,.015,13,4),bn("#2b2f2b"));e.rotation.z=Math.PI/2,e.position.set(0,4.45,-4.5),n.add(e),["#f359a4","#c7f653","#f4f1e8","#6fb6c6","#f6c453"].forEach((i,s)=>{const r=new Te(new Vt(.9,1.1),new ai({color:i,side:Ot,roughness:1}));r.position.set(-4.6+s*2.2,3.85,-4.5+s%2*.02),r.rotation.z=s%2?.05:-.04,r.castShadow=!0,n.add(r),r.userData.sway=s,r.userData.cloth=i}),He(n,.16,5.6,.16,"#596358",-5.4,2.8,-6);const t=new Te(new ji(.28,14,10),new St({color:"#f7ffe0"}));return t.position.set(-5.4,5.7,-6),n.add(t),n}const Ec=[],ri={},wu={},Au=[],Ru=[],Vi=new Map,to=[],Wa=new Nt;Wa.colorSpace=ut;new Yd().load(Eu("gen_bar_backdrop.png"),n=>{Wa.image=n.image,Wa.needsUpdate=!0},void 0,()=>{});const Tc=[1,2];for(const n of Tc){const e=new Bt;gn.add(e),ri[n]=e;const t=new Bt;if(e.add(t),bc(n))t.add(sv(Wa));else{const s=Dv(),r=iv({left:!1});s.position.x=jn,r.position.x=Kn,t.add(s,r)}t.traverse(s=>{s.userData.sway!==void 0&&Au.push(s),s.userData.swing!==void 0&&Ru.push(s),s.userData.lamp!==void 0&&Vi.set("gag-lamp-"+s.userData.lamp,s),s.userData.bell!==void 0&&Vi.set("gag-bell-"+s.userData.bell,s),s.userData.cloth&&to.push(s)});const i=gt[n];for(const s of i.covers)Rv(e,s);Cv(e,i.covers),wu[n]=Pv(t,new Set)}function Cu(n){const e=document.createElement("canvas");e.width=512,e.height=640;const t=e.getContext("2d");t.lineJoin="round",t.lineCap="round",t.strokeStyle="#202522",t.lineWidth=12;function i(a,o,c,l,h){t.fillStyle=h,t.beginPath(),t.ellipse(a,o,c,l,0,0,Math.PI*2),t.fill(),t.stroke()}function s(a,o){t.fillStyle=o,t.beginPath(),a.forEach(([c,l],h)=>h?t.lineTo(c,l):t.moveTo(c,l)),t.closePath(),t.fill(),t.stroke()}n==="enemy"?(s([[130,420],[120,591],[208,591],[240,450],[277,590],[368,590],[355,410]],"#3e4741"),s([[157,232],[100,252],[42,377],[100,411],[155,330],[148,465],[365,465],[354,327],[405,386],[465,347],[392,250],[333,229]],"#b6d451"),i(259,167,91,105,"#f1cbae"),s([[165,137],[177,69],[254,43],[333,76],[353,126],[285,103],[236,122]],"#444b43"),i(221,180,6,9,"#222722"),i(297,179,6,9,"#222722")):n==="dog"?(t.strokeStyle="#d3ed64",t.lineWidth=15,t.beginPath(),t.ellipse(260,95,88,26,-.15,0,Math.PI*2),t.stroke(),t.strokeStyle="#222722",t.lineWidth=12,i(253,420,118,150,"#e7ddbd"),i(260,262,108,100,"#e7ddbd"),i(263,280,28,19,"#262e26")):n==="bottle"?(s([[210,103],[300,103],[302,235],[354,296],[354,600],[160,600],[160,297],[209,237]],"#94be6a"),s([[207,103],[207,70],[306,70],[306,105]],"#f7c56d"),s([[163,333],[350,333],[350,462],[163,462]],"#eee9d3"),t.fillStyle="#252d24",t.font="bold 37px Arial",t.fillText("КВАС",195,410)):n==="barrel"?(s([[133,178],[379,178],[402,600],[111,600]],"#d63434"),i(256,180,123,35,"#f05050"),s([[128,260],[385,260],[389,293],[125,293]],"#272d28"),s([[117,470],[396,470],[399,504],[114,504]],"#272d28"),t.fillStyle="#f9d846",t.fillRect(145,330,222,70),t.font="900 46px Arial",t.fillStyle="#263126",t.fillText("БАМ!",200,382)):(s([[15,120],[495,120],[495,480],[15,480]],"#c7f653"),t.fillStyle="#222722",t.textAlign="center",t.font="900 75px Arial",t.fillText("ДВОР",256,270),t.fillText("№ 02",256,370));const r=new Mi(e);return r.colorSpace=ut,r}const Lv=new Yd;function Mt(n,e){const t=Cu(e);return Lv.load(Eu(n),i=>{t.image=i.image,t.needsUpdate=!0},void 0,()=>{}),t}const Bn={enemy:Mt("bully.png","enemy"),dog:Mt("gen_dog_sit.png","dog"),...Object.fromEntries(Sx.map(n=>[n,Mt(It[n].sprite,n==="barrel"||n==="hat"?"barrel":"bottle")]))},Pu={walrus:Mt("gen_walrus.png","enemy"),bulldog:Mt("gen_bulldog.png","enemy")},jt={windup:Mt("gen_cat_windup.png","enemy"),hurt:Mt("gen_cat_hurt.png","enemy"),ko:Mt("gen_cat_ko.png","enemy"),walk:Mt("gen_dog_walk.png","dog"),sad:Mt("gen_dog_sad.png","dog")},Vs=Object.fromEntries(["granny","kitten","pigeon","drunk"].map(n=>[n,{idle:Mt(`gen_${n}_idle.png`,"dog"),mad:Mt(`gen_${n}_mad.png`,"dog"),fury:Mt(`gen_${n}_fury.png`,"dog")}]));{const n=Mt("gen_mole_hurt.png","dog");Vs.mole={idle:Mt("gen_mole_up.png","dog"),lantern:Mt("gen_mole_lantern.png","dog"),mad:n,fury:n}}{const n=Mt("gen_weasel.png","dog");Vs.bartender={idle:n,mad:n,fury:n}}const ks=Object.fromEntries(["rat","gang","kid"].map(n=>[n,{appear:Mt(`gen_${n}_appear.png`,"enemy"),attack:Mt(`gen_${n}_attack.png`,"enemy"),ko:Mt(`gen_${n}_ko.png`,"enemy")}]));for(const n of[...Object.values(Bn),...Object.values(jt),...Object.values(Pu),...Object.values(Vs).flatMap(e=>Object.values(e)),...Object.values(ks).flatMap(e=>Object.values(e))])n.colorSpace=ut,n.anisotropy=4;const Du=new Map([[Bn.enemy,"idle"],[Bn.dog,"sit"],...Object.entries(jt).map(([n,e])=>[e,n]),...Object.values(Vs).flatMap(n=>Object.entries(n).map(([e,t])=>[t,e])),...Object.values(ks).flatMap(n=>Object.entries(n).map(([e,t])=>[t,e]))]);function ti(n,e){if(n.skin&&n.kind==="enemy"){n.frame=e===jt.windup?"windup":e===jt.hurt?"hurt":e===jt.ko?"ko":"idle";return}n.sprite.material.map!==e&&(n.frame=Du.get(e),n.sprite.material.map=e,n.sprite.customDepthMaterial.map=e)}Ec.push(Cu("sign"));const Lu=new Te(new Vt(1.6,1.25),new St({map:Ec[0],alphaTest:.5}));Lu.position.set(-6.3+jn,2.5,-8.8);ri[2].add(Lu);const Hi=gt[1].covers.find(n=>n.id===gt[1].landing?.cover),Xa=1.35,Iv=Ht.hat.h*Ht.hat.inset[3]*Xa,Hn=new Te(new Vt(Ht.hat.w,Ht.hat.h).translate(0,Ht.hat.h/2,0),new St({map:Bn.hat,alphaTest:.5,side:Ot}));Hn.visible=!1;Hn.renderOrder=2;Hn.scale.set(Xa,-Xa,1);function Wl(){if(!Hn.visible)return null;const n=Hn.position,e=$e({x:n.x,y:n.y-.04,z:n.z}),t=$e({x:n.x+Ht.hat.w*Xa*.36,y:n.y-.04,z:n.z});return{x:e.x,y:e.y,r:Math.abs(t.x-e.x)}}for(const n of Ec)_u(n.image);for(const n of Tc)lv(ri[n]);Vl(Tu.color);for(const n of to)n.material=n.material.clone(),n.material.color.set(n.userData.cloth);{const n=gt[1].gags.find(l=>l.id==="gag-cuckoo"),e=.66/.852,t=e/.8,i=new Te(new Vt(e,t).translate(0,t/2,0),new St({map:Mt("gen_cuckoo.png","barrel"),alphaTest:.5}));i.material.map.colorSpace=ut,i.position.set((n.min.x+n.max.x)/2,n.min.y-.02,n.max.z-.02),ri[1].add(i),Vi.set("gag-cuckoo",i);const s=document.createElement("canvas");s.width=256,s.height=150;const r=s.getContext("2d");if(r){r.fillStyle="#fff4d6",r.fillRect(0,0,256,150),r.strokeStyle="#3a2a1e",r.lineWidth=2;for(let l=34;l<=114;l+=16)r.beginPath(),r.moveTo(14,l),r.lineTo(242,l),r.stroke();r.font="900 54px Georgia",["#e8475f","#2f6fe0","#e8475f","#2f9c5a","#2f6fe0"].forEach((l,h)=>{r.fillStyle=l,r.fillText("♪",22+h*46,96-h%3*14)}),r.strokeStyle="#151715",r.lineWidth=6,r.strokeRect(3,3,250,144)}const a=new Mi(s);a.colorSpace=ut;const o=gt[1].covers.find(l=>l.id==="piano"),c=new Te(new Vt(.62,.36),new St({map:a}));c.position.set((o.min.x+o.max.x)/2,o.max.y*.8,o.max.z+.045),c.rotation.x=-.12,ri[1].add(c);for(const l of["gag-bell-0","gag-bell-1"]){const h=Vi.get(l);if(!h)continue;const d=h.getWorldPosition(new I),u=new Te(new ji(.17,16,8,0,Math.PI*2,0,Math.PI/2),new ai({color:"#e0a83a",metalness:.6,roughness:.3,side:Ot}));u.position.set(d.x,d.y-.3,d.z),ri[2].add(u),u.userData.ringer=l;const p=new Te(new ji(.05,8,6),new ai({color:"#c8742a"}));p.position.y=-.04,u.add(p),Vi.set(l,u)}}{const n=new Te(new On(1.1,.02,.5),new ai({color:"#7c3ae6",roughness:.7}));n.position.set(.9,Hi.max.y+.01,(Hi.min.z+Hi.max.z)/2+.05),ri[1].add(n,Hn);const e=new Te(new ji(.13,16,8,0,Math.PI*2,0,Math.PI/2),new ai({color:"#e0a83a",metalness:.6,roughness:.3}));e.position.set(-.1,Hi.max.y,n.position.z),ri[1].add(e)}function Uv(){const n=document.createElement("canvas");n.width=n.height=128;const e=n.getContext("2d");e.lineWidth=20,e.strokeStyle="#202320",e.beginPath(),e.arc(64,64,44,0,Math.PI*2),e.stroke(),e.lineWidth=11,e.strokeStyle="#f45d96",e.stroke(),e.fillStyle="#202320",e.font="900 54px Arial",e.textAlign="center",e.fillText("!",64,83);const t=new Mi(n);return t.colorSpace=ut,t}const ld=Uv(),Iu=new St({color:"#262626",transparent:!0,opacity:.28,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2});function Ws(n,e=256,t=128){const i=document.createElement("canvas");i.width=e,i.height=t;const s=i.getContext("2d");s.lineJoin="round",s.lineCap="round",n(s);const r=new Mi(i);return r.colorSpace=ut,r}const Nv=Ws(n=>{n.lineWidth=22,n.strokeStyle="#3a2f18",n.beginPath(),n.ellipse(128,64,92,30,0,0,Math.PI*2),n.stroke(),n.lineWidth=13,n.strokeStyle="#ffe27a",n.stroke()});function Fv(n,e,t,i){n.beginPath();for(let s=0;s<=10;s++){const r=-Math.PI/2+s*Math.PI/5,a=s%2?i*.45:i;n.lineTo(e+Math.cos(r)*a,t+Math.sin(r)*a)}n.closePath(),n.fillStyle="#ffe14d",n.fill(),n.lineWidth=6,n.strokeStyle="#1c1d1a",n.stroke()}const kv=Ws(n=>{for(let e=0;e<5;e++){const t=e/5*Math.PI*2;Fv(n,128+Math.cos(t)*92,64+Math.sin(t)*34,20)}}),zv=Ws(n=>{n.strokeStyle="#1c1d1a",n.lineWidth=7,n.fillStyle="#9aa6b4",n.beginPath(),n.arc(90,52,30,Math.PI*.5,Math.PI*1.6),n.arc(130,38,34,Math.PI*1.05,Math.PI*1.95),n.arc(172,54,28,Math.PI*1.4,Math.PI*.5),n.closePath(),n.fill(),n.stroke(),n.strokeStyle="#3d7fd6",n.lineWidth=6;for(const e of[96,124,152,176])n.beginPath(),n.moveTo(e,92),n.lineTo(e-6,116),n.stroke()}),cd=Ws(n=>{n.beginPath(),n.roundRect(8,8,240,68,24),n.fillStyle="#225530",n.fill(),n.strokeStyle="#0f2414",n.lineWidth=7,n.stroke(),n.beginPath(),n.roundRect(14,14,228,56,18),n.strokeStyle="#a3e8b0",n.lineWidth=3,n.stroke(),n.font="900 32px Arial, sans-serif",n.textAlign="center",n.textBaseline="middle",n.strokeStyle="#0f2414",n.lineWidth=5,n.strokeText("НЕ ТРОГАТЬ",256/2,84/2+1),n.fillStyle="#f0fff4",n.fillText("НЕ ТРОГАТЬ",256/2,84/2+1)},256,84),Ov=Ws(n=>{n.font="900 54px Georgia",n.lineWidth=7,n.strokeStyle="#1c1d1a",n.fillStyle="#9fd3ff",[[30,110,1],[100,72,.8],[170,40,.6]].forEach(([e,t,i])=>{n.save(),n.translate(e,t),n.scale(i,i),n.strokeText("Z",0,0),n.fillText("Z",0,0),n.restore()})}),Bv=Ws(n=>{const e=n.createLinearGradient(0,0,0,512);e.addColorStop(0,"rgba(255,240,170,0)"),e.addColorStop(.25,"rgba(255,240,170,.55)"),e.addColorStop(1,"rgba(255,240,170,.1)"),n.fillStyle=e,n.beginPath(),n.moveTo(90,0),n.lineTo(166,0),n.lineTo(240,512),n.lineTo(16,512),n.closePath(),n.fill()},256,512);function Pi(n,e,t,i=2){const s=new Fl(new Ba({map:n,transparent:!0,depthWrite:!1}));return s.scale.set(e,t,1),s.renderOrder=i,s}const Zi=new Bt;gn.add(Zi);const Qt=new Map,Ui=[],gr=new Map;function Hv(n){const e=eo(n.kind,n.who),t=new Bt,i=new Bt;t.add(i);const s=new Vt(e.w,e.h);s.translate(0,e.h/2,0);const r=n.kind==="enemy"&&n.skin&&(n.skin==="walrus"||n.skin==="bulldog")?n.skin:void 0,a=r?Pu[r]:n.kind==="friend"?Vs[n.who].idle:n.kind==="thug"?ks[n.who].appear:Bn[n.kind],o=new St({map:a,alphaTest:.5,side:Ot}),c=new Te(s,o);if(c.castShadow=!0,c.customDepthMaterial=new qd({depthPacking:Dd,map:a,alphaTest:.5}),i.add(c),n.y<=.01&&n.who!=="mole"){const h=new Te(new Ki(e.w*.36,24),Iu);h.rotation.x=-Math.PI/2,h.position.y=.035,h.scale.y=.45,h.renderOrder=1,t.add(h)}const l={kind:n.kind,group:t,body:i,sprite:c,flash:0,sad:0,skin:r,who:n.who,facing:n.kind==="enemy"&&n.x<0?-1:n.kind==="thug"?-(n.side??1):1};return n.kind==="friend"&&(l.badge=Pi(cd,.72,.24),i.add(l.badge),n.who==="drunk"&&(l.zzz=Pi(Ov,.7,.35),l.zzz.position.set(.45,e.h*.95,0),i.add(l.zzz))),n.kind==="thug"&&(l.warning=new Fl(new Ba({map:ld,depthWrite:!1})),l.warning.position.set(0,e.h*.82,0),i.add(l.warning),n.from==="manhole"&&(l.hole=new Te(new Ki(.62,24),new St({color:"#141414"})),l.hole.rotation.x=-Math.PI/2,l.hole.scale.y=.5,l.hole.renderOrder=1,t.add(l.hole))),l.frame=r?"idle":Du.get(a),n.kind==="enemy"&&(l.warning=new Fl(new Ba({map:ld,depthWrite:!1})),l.warning.position.set(0,e.h+.3,0),i.add(l.warning),l.stars=Pi(kv,1.1,.55),l.stars.position.set(0,e.h*.97,.05),l.stars.visible=!1,i.add(l.stars)),n.kind==="dog"&&(l.halo=Pi(Nv,.62,.31),i.add(l.halo),l.badge=Pi(cd,.64,.21),i.add(l.badge),l.cloud=Pi(zv,.8,.4),l.cloud.visible=!1,i.add(l.cloud),l.beam=Pi(Bv,1.6,6,1),l.beam.visible=!1,t.add(l.beam)),Zi.add(t),Qt.set(n.id,l),l}function bs(n){Zi.remove(n.group),n.group.traverse(e=>{e instanceof Te&&e.geometry&&e.geometry.dispose()}),n.sprite.material.dispose()}const Gv=[{id:-1,kind:"enemy",skin:"walrus",x:-2.55,y:0,z:2.2,age:1,deadline:60},{id:-2,kind:"dog",x:.2,y:0,z:-.7,age:1,deadline:1/0},{id:-3,kind:"friend",who:"bartender",x:.3,y:.3,z:-3.15,age:1,deadline:60}],Vv=()=>F.mode==="menu"||F.mode==="select"?Gv:F.actors;function wc(n){const e=Vv(),t=!Fs();for(const[i,s]of Qt)if(!e.some(r=>r.id===i)){Qt.delete(i);const r=gr.get(i);gr.delete(i),r&&t?Ui.push({view:s,age:0,spin:s.facing,how:r}):bs(s)}for(const i of e){const s=Qt.get(i.id),r=i.kind==="enemy"&&i.skin&&(i.skin==="walrus"||i.skin==="bulldog")?i.skin:void 0;s&&(s.kind!==i.kind||s.skin!==r)&&(Qt.delete(i.id),bs(s));const a=Qt.get(i.id)??Hv(i),o=eo(i.kind,i.who),c=ei(F.level,i,t);a.group.position.set(c.x,c.y,c.z);const l=t?(i.id<0?n:i.age)+i.id*.7:0;let h=1,d=1,u=0,p=0;const g=new Ge(1,1,1);if(i.kind==="enemy"){g.setRGB(1,.88,.88);const _=i.layer==="foreground"||i.layer===void 0,m=i.deadline-i.age,f=t&&_?dn.clamp(1-m/Ns,0,1):0,b=Math.abs(Math.sin(l*4.2));if(h=1+(1-b)*.05,d=1-(1-b)*.06+b*.03,p=b*.06,u=Math.sin(l*2.1)*.035,f>0&&!a.wound&&i.id>0&&(a.wound=!0,Ae("windup")),ti(a,f>0?jt.windup:Bn.enemy),f>0){const v=Math.sin(n*48)*.02*f;u=-a.facing*.08*f+v,h*=1+.08*f,d*=1+.1*f,p=0;const A=.5+.5*Math.sin(n*18);g.setRGB(1,(1-.45*f*A)*.88,(1-.5*f*A)*.88)}if(a.warning){const v=i.id>0&&_&&m<Ns*1.6;a.warning.visible=v,a.warning.scale.setScalar(.38+f*.3+(t?Math.sin(n*14)*.03:0))}if(a.stars&&(a.stars.visible=!1),a.body.position.x=0,i.antic&&t){if(!a.antic&&i.age>.45&&i.id>0){a.antic=!0;const v=$e(Xs(a));tt({dance:"ПЛЯШЕТ! БЕЙ!",sandwich:"ОБЕДАЕТ! БЕЙ!",selfie:"СЕЛФИ! БЕЙ!"}[i.antic],v.x,v.y-20,"combo")}if(i.antic==="dance"){const v=Math.abs(Math.sin(n*9));p=v*.16,u=Math.sin(n*9)*.22,a.facing=Math.sin(n*4.5)>0?1:-1,h*=1+(1-v)*.08,d*=1-(1-v)*.08}else if(i.antic==="sandwich"){const v=Math.abs(Math.sin(n*11));d*=1-v*.05,h*=1+v*.04,u=.04}else u=Math.sin(n*1.5)*.05-.06*a.facing,p=.03}else a.antic=!1;i.blind&&t&&(ti(a,jt.hurt),a.body.position.x=Math.sin(n*5.5)*.2,u=Math.sin(n*7)*.16,p=0),a.knock&&(a.knock=Math.max(0,a.knock-1/60*1.5),p+=Math.sin(a.knock*Math.PI)*.9,u+=a.knock*.5*a.facing);const E=i.wet??0;if(a.wet=E,E>0){if(!a.yuck){a.yuck=!0,Ae("yuck");const A=$e({x:a.group.position.x,y:a.group.position.y+1.6,z:a.group.position.z});tt(["ФУ-У!","БЕ-Е!","ФИ!"][i.id%3],A.x,A.y,"bad")}u=t?Math.sin(n*70+i.id)*.05*(.4+E):0,h*=1+.08*E,d*=1-.14*E,p=0,g.setRGB(1-.45*E,1,1-.55*E)}}else if(i.kind==="dog"){g.setRGB(.92,1,.94);const _=_c(t?i.id<0?n:i.age:0,t);if(a.facing=-_.facing,_.walking){const E=Math.abs(Math.sin(l*11));p=E*.09,d=1+E*.04,u=Math.sin(l*11)*.06}else{const E=Math.sin(l*2.6);d=1+E*.025,h=1-E*.012,u=Math.sin(l*.9)*.03}a.sad=Math.max(0,a.sad-1/60);const m=Math.min(1,a.sad);ti(a,m>0?jt.sad:_.walking?jt.walk:Bn.dog),m>0&&(d*=1-.12*m,h*=1+.05*m,u=Math.sin(n*20)*.03*m,p=0,g.setRGB(.85,.95,.98));const f=.1*a.facing;a.halo&&(a.halo.position.set(f,o.h*1+(t?Math.sin(n*3+i.id)*.04:0)-m*.12,0),a.halo.material.rotation=m*.45*Math.sin(n*6),a.halo.material.color.setRGB(1,1,1-m*.5)),a.badge&&(a.badge.visible=!0,a.badge.position.set(f,o.h*1+.34+(t?Math.sin(n*3+i.id)*.02:0)-m*.12,.02)),a.cloud&&(a.cloud.visible=m>0,a.cloud.position.set(f,o.h*1.25+Math.sin(n*4)*.03,0));const b=au(t?i.id<0?n:i.age:0,t);if(b>0&&!a.ascending&&i.id>0){a.ascending=!0,Ae("harp");const E=$e({x:c.x,y:c.y+2.2,z:c.z});tt("♪ АЛЛИЛУЙЯ! ♪",E.x,E.y,"combo")}b<=0&&(a.ascending=!1),a.beam&&(a.beam.visible=b>0,a.beam.position.set(0,3-c.y+b*.2,-.05),a.beam.material.opacity=Math.min(1,b/.5)),b>0&&(u=Math.sin(n*2)*.05,p+=Math.sin(n*3)*.03)}else if(i.kind==="friend"){g.setRGB(.92,1,.94);const _=gt[F.level].friends[i.plan??0],m=_?mc(_,i.age,t):null,f=Vs[i.who],b=i.mad??0;ti(a,b>0?b>Ol*.5?f.mad:f.fury:m?.lantern&&f.lantern?f.lantern:f.idle),m&&(a.facing=m.facing),b>0?(u=Math.sin(n*40)*.04,h=1.06,d=.96,g.setRGB(.96,.92,.86)):m?.walking?(p=Math.abs(Math.sin(l*7))*.05,u=Math.sin(l*7)*.05):i.who==="drunk"?u=Math.sin(l*.9)*.07:d=1+Math.sin(l*2.6)*.02,a.badge&&(a.badge.visible=(m?.rise??1)>.5,a.badge.position.set(0,o.h*o.inset[3]+.22+(t?Math.sin(n*3+i.id)*.02:0),.02)),a.zzz&&(a.zzz.visible=b<=0,a.zzz.position.y=o.h*.95+(t?n*.25%.3:0))}else if(i.kind==="thug"){g.setRGB(1,.88,.88);const _=ks[i.who],m=i.age>=Qn.attack,f=dn.clamp((i.age-1.2)/(Qn.attack-1.2),0,1);ti(a,m?_.attack:_.appear),p=Math.abs(Math.sin(l*9))*.04,u=Math.sin(l*9)*.04,f>0&&t&&(u+=Math.sin(n*50)*.03*f,g.setRGB(1,(1-.4*f*(.5+.5*Math.sin(n*18)))*.88,(1-.45*f)*.88)),m&&(h=1.15,d=1.1),a.warning&&(a.warning.visible=i.age>.9,a.warning.scale.setScalar(.34+f*.26)),a.hole&&(a.hole.position.y=-c.y+.03)}else u=t?Math.sin(l*1.6)*.04:0,i.kind==="hat"&&t&&(p=Math.abs(Math.sin(l*2.4))*.05,u=Math.sin(l*2.4)*.08);a.flash>0&&(h*=1+a.flash*.2,d*=1-a.flash*.18,g.setRGB(1,1-a.flash*.55,1-a.flash*.45)),a.flash=Math.max(0,a.flash-.08),a.body.position.y=p,a.body.rotation.z=u,a.sprite.scale.set(h*a.facing,d,1),a.sprite.material.color.copy(g)}}function Wv(n,e){for(let t=Ui.length-1;t>=0;t--){const i=Ui[t];i.age+=n;const s=i.view,r=s.sprite.material;if(i.how==="pancake"){if(ti(s,jt.ko),s.body.position.x=0,i.age<.9)s.sprite.scale.set(1.6*s.facing,.2,1),s.body.rotation.set(0,0,0),s.body.position.y=0;else{const a=Math.min(1,(i.age-.9)/.8);s.sprite.scale.set(1.45*s.facing,.1+.5*a,1),s.body.rotation.x=-.9*(1-a),s.body.rotation.z=Math.sin(i.age*9)*.5*a,s.body.position.y=a*a*2.6,s.group.position.x+=n*Math.sin(i.age*4)*1.2}s.stars&&(s.stars.visible=!1),i.age>1.4&&(r.transparent=!0,r.opacity=Math.max(0,1-(i.age-1.4)*2.5)),i.age>1.8&&(bs(s),Ui.splice(t,1));continue}if(i.how==="stars"||i.how==="birds"){if(ti(s,i.age<.22?jt.hurt:jt.ko),s.stars&&(s.stars.visible=!0,s.stars.material.rotation=e*8),i.how==="stars"&&i.age>.18){const a=i.age-.18;s.body.position.y=a*a*22,s.body.rotation.z=a*14*i.spin;const o=Math.max(.2,1-a*1.3);s.sprite.scale.set(o*s.facing,o,1)}if(i.age>(i.how==="stars"?.62:.3)&&!i.done){i.done=!0;const a=$e({x:s.group.position.x,y:s.group.position.y+1,z:s.group.position.z});i.how==="stars"?oy(a.x):ly(a.x,a.y),bs(s),Ui.splice(t,1)}continue}if(i.how==="ko"){const a=s.kind==="thug"?ks[s.who]:null;if(ti(s,a?a.ko:i.age<.22?jt.hurt:jt.ko),i.age<.09)s.sprite.scale.set(1.4*s.facing,.6,1);else{const o=i.age-.09;s.sprite.scale.set(.9*s.facing,1.12,1),s.body.rotation.z=-i.spin*o*7,s.body.position.y=o*3.2-o*o*7,s.group.position.z-=n*3.5,s.group.position.x+=n*i.spin*-1.5}s.stars&&(s.stars.visible=!0,s.stars.material.rotation=e*8),i.age>.45&&(r.transparent=!0,r.opacity=Math.max(0,1-(i.age-.45)*4)),i.age>.75&&(bs(s),Ui.splice(t,1))}else{ti(s,s.kind==="thug"?ks[s.who].attack:jt.windup);const a=Math.min(1,i.age/.16);s.group.position.z+=n*(i.age<.16?5:-2),s.body.rotation.z=s.facing*.35*a,s.sprite.scale.set((1+.25*a)*s.facing,1+.2*a,1),i.age>.2&&(s.body.position.y-=n*6,r.transparent=!0,r.opacity=Math.max(0,1-(i.age-.2)*3.5)),i.age>.5&&(bs(s),Ui.splice(t,1))}}}const Rs=document.querySelector("#arm"),Xv=Rs.getContext("2d");function Sn(n,e,t,i=12){const s=document.createElement("canvas");s.width=s.height=256;const r=s.getContext("2d");r.translate(128,128),r.lineJoin="round",r.beginPath();for(let a=0;a<=i*2;a++){const o=a%2?62:118-a%4*9,c=a/(i*2)*Math.PI*2;r.lineTo(Math.cos(c)*o,Math.sin(c)*o)}r.closePath(),r.fillStyle=e,r.fill(),r.lineWidth=9,r.strokeStyle="#151715",r.stroke(),r.beginPath();for(let a=0;a<=i*2;a++){const o=a%2?36:70,c=a/(i*2)*Math.PI*2+.2;r.lineTo(Math.cos(c)*o,Math.sin(c)*o)}return r.closePath(),r.fillStyle=t,r.fill(),r.rotate(-.12),r.font="900 46px Arial",r.textAlign="center",r.textBaseline="middle",r.lineWidth=8,r.strokeStyle="#151715",r.strokeText(n,0,2),r.fillStyle="#fffbe8",r.fillText(n,0,2),s}const Ta={hit:Sn("БАМ!","#ffd84a","#f3388f"),throw:Sn("ХРЯСЬ!","#ffd84a","#8fdc2a"),protected:Sn("АЙ!","#ff9fb0","#e2324e",9),cover:Sn("ТУК!","#f4c27a","#c9772e",8),smash:Sn("ДЗЫНЬ!","#9fe7ff","#2f9be0",14),miss:Sn("ВЖУХ","#eef0ea","#b9c0b5",7),ult:Sn("ДИНЬ!","#c9a6ff","#7c3ae6",16),crash:Sn("БДЫЩЬ!","#ffd84a","#ff6b3d",16),strike:Sn("СТРАЙК!","#9fe7ff","#f3388f",14),squeak:Sn("ПИ-И-ИСК!","#fff36b","#ff9f2a",10),splat:Sn("ШМЯК!","#fff6e0","#ff9fb0",11)},qa=new zp,mn=new Le(0,0);let Ya="",hd=F.hp;const qv=.42,fr=.36,Yv=.62,Lr={duration:.34,arrive:.3,release:.46,reach:.38};let mt=null,Et=0,zs=0,$v=1;const Cs=[];let Pn=0,ys=0;function Uu(){const n=window.visualViewport,e=n?Math.round(n.width):window.innerWidth,t=n?Math.round(n.height):window.innerHeight;return{w:Math.max(1,e),h:Math.max(1,t)}}function Or(){const{w:n,h:e}=Uu();Fn.setSize(n,e);const t=ou(n,e,F.mode==="menu"||F.mode==="select"?0:Pn);yt.aspect=n/e,yt.fov=t.fov,yt.updateProjectionMatrix(),yt.position.set(t.position.x,t.position.y,t.position.z),yt.lookAt(t.look.x,t.look.y,t.look.z),(F.mode==="menu"||F.mode==="select")&&(yt.position.x-=n<650?0:1.2,yt.lookAt(t.look.x-(n<650?0:1.8),t.look.y,t.look.z)),yt.updateMatrixWorld();const i=Math.min(devicePixelRatio||1,2);Rs.width=Math.round(n*i),Rs.height=Math.round(e*i)}addEventListener("resize",()=>{Or(),Br(),Gs()});addEventListener("orientationchange",()=>{Or(),Br(),Gs()});window.visualViewport&&window.visualViewport.addEventListener("resize",()=>{Or(),Br(),Gs()});function Nu(){const n=document.querySelector(".crosshair");if(n){const e=at.getBoundingClientRect();n.style.left=Math.round(e.left+(mn.x+1)*.5*e.width)+"px",n.style.top=Math.round(e.top+(1-mn.y)*.5*e.height)+"px"}}const Je=()=>!Fs();function no(){return Nx(F.level,F.actors,Je(),wu[F.level])}function Xl(n){qa.setFromCamera(n,yt);const{origin:e,direction:t}=qa.ray;return{origin:{x:e.x,y:e.y,z:e.z},direction:{x:t.x,y:t.y,z:t.z}}}const Ac=n=>{const e=Xl(n);return xc(e.origin,e.direction,no())};function Ir(n){if(F.mode!=="play"||(kr(),mt&&!mt.resolved))return;if(F.briefing){const a=Xl(mn);Ae("whoosh"),mt={action:"punch",throwing:!1,brief:!0,spot:{x:(mn.x+1)/2,y:(1-mn.y)/2},ray:a,shot:{kind:"whiff",distance:3,point:a.origin},phase:0,resolved:!1,held:null,staminaBefore:F.stamina,staminaAfter:F.stamina},Je()||$l(mt);return}const e=n==="grab"&&F.held!==null,t=F.held,i=F.stamina;if(!F.spend(n)){Ur(),Ae("ui");return}const s=Xl(mn);Ae("whoosh");const r={x:(mn.x+1)/2,y:(1-mn.y)/2};mt={action:n,throwing:e,spot:r,ray:s,shot:xc(s.origin,s.direction,no(),e?"punch":n),phase:0,resolved:!1,held:t,staminaBefore:i,staminaAfter:F.stamina},Je()||(e?ku(mt):$l(mt)),Ur()}function tt(n,e,t,i="pop"){const s=document.createElement("div");s.className="callout "+i,s.textContent=n,En.append(s);const r=Math.min(innerWidth/2,s.offsetWidth*.62+16),a=s.offsetHeight*.7+16;s.style.left=Math.round(dn.clamp(e,r,innerWidth-r))+"px",s.style.top=Math.round(dn.clamp(t,Math.max(120,a),Math.max(120,innerHeight-Math.max(110,a))))+"px",setTimeout(()=>s.remove(),900)}const Kv=["","","ДВОЙНОЙ!","ТРОЙНОЙ!","РАЗМАШИСТО!","НЕУДЕРЖИМ!"];function $a(n){for(const e of F.events){const t=Qt.get(e.id),i=n??(t?$e({x:t.group.position.x,y:t.group.position.y+1.2,z:t.group.position.z}):{x:innerWidth/2,y:innerHeight/2});if(e.type==="hurt"&&e.amount){const s=F.actors.find(r=>r.id===e.id)??(t?{x:t.group.position.x,y:t.group.position.y,z:t.group.position.z}:null);if(s){const r=t?Xs(t):{x:s.x,y:s.y+2,z:s.z??0};Mr.push({...r,amount:e.amount,age:0,big:e.amount>10})}t&&(t.flash=1)}if((e.type==="ko"||e.type==="smash")&&(gr.set(e.id,e.type==="ko"&&e.how&&e.how!=="spin"?e.how:"ko"),e.type==="ko"&&Ae("ko")),e.type==="ko"&&e.who&&tt(["ШМЯК!","БРЫСЬ!","ПШЁЛ!"][e.id%3],i.x,i.y-20,"pop"),e.type==="ko"&&e.combo>=2&&tt(`КОМБО ×${e.combo} ${Kv[Math.min(e.combo,5)]}`,i.x,i.y-70,"combo"),e.type==="attack"&&(gr.set(e.id,"attack"),Ae("attack"),tt("БАЦ! −♥",i.x,i.y,"bad"),Je()&&(Et=.22)),e.type==="dog"&&(t&&(t.sad=2.4),Ae("dog"),tt(F.ult.phase==="pour"?"ПЁС ОСКОРБЛЁН!":"ПСА НЕ ТРОГАЙ!",i.x,i.y-60,"bad")),e.type==="tear"&&Sc.tear(Je()),e.type==="offend"&&e.who==="herald"){Ae("huff"),Je()&&(Et=Math.max(Et,.14));continue}if(e.type==="offend"&&(t&&(t.flash=1),Ae("huff"),tt(e.text??"ХАМ!",i.x,i.y-60,"bad"),Je()&&(Et=Math.max(Et,.12))),e.type==="nuisance"&&(gr.set(e.id,"attack"),e.who==="rat"?(Ae("steal"),tt("КРЫСА СПЁРЛА СИЛЫ! −35",i.x,i.y,"bad")):e.who==="gang"?(Ae("splat"),jv(),tt("ПЛЮХ!",innerWidth/2,innerHeight*.4,"bad")):(Ae("zing"),tt("ЩЁЛК! −♥",i.x,i.y,"bad"),Je()&&(Et=.2))),e.type==="squeak"&&(Ae("squeak"),e.point&&Jn("squeak",e.point,.8),e.id&&tt(`ПИ-И-ИСК! КОМБО +${wt.chicken.combo}`,i.x,i.y-50,"combo")),e.type==="blind"&&(Ae("splat"),e.point&&(Jn("splat",e.point,.9),dd(e.point,["#fff6e0","#ffffff","#ff4f6d"])),tt("ПИРОГ В ЛИЦО!",i.x,i.y-40,"combo")),e.type==="stick"&&(Ae("pop"),tt("ЧПОК!",i.x,i.y-40,"pop")),e.type==="strike"&&(Ae("strike"),e.point&&Jn("strike",e.point,1.3),tt("СТРАЙК!",innerWidth/2,innerHeight*.35,"combo"),Je()&&(Et=.2)),e.type==="seeds"&&e.point&&(Ae("pop"),sy(e.point,e.ids??[])),e.type==="geyser"&&e.point){Ae("geyser");const s=$e(e.point);tt("ФОНТАН!",s.x,s.y-80,"pop")}if(e.type==="knock"&&(t&&(t.flash=1,t.knock=1),Ae("splat"),tt("ПЛЮХ!",i.x,i.y-30,"pop")),e.type==="hazard"&&e.point){Ae("whistle");const s=$e(e.point);tt("БЕРЕГИСЬ!",s.x,s.y-30,"bad")}if(e.type==="crash"&&e.point){Ae("crash"),Jn("crash",{...e.point,y:.6},1.6);const s=qi.get(e.id);s&&(s.wreck=2.4),Je()&&(Et=.35)}e.type==="milestone"&&e.text&&py(e.text),e.type==="ult"&&by(),e.type==="land"&&e.point&&(Ae("thud"),e.prop==="anvil"&&Je()&&(Et=Math.max(Et,.22),Jn("cover",e.point,.9))),e.type==="gag"&&ty(e),e.type==="shatter"&&e.point&&e.prop&&(dd(e.point,It[e.prop].shards??["#ffffff"]),Jn("smash",e.point,.8)),e.type==="ultEnd"&&(Ae("slide"),tt(e.amount?`НИ КАПЛИ МИМО! +${e.amount}`:"ПРОЛИЛ… ПЛАТИ ТРИСТА",innerWidth/2,innerHeight*.6,e.amount?"combo":"bad")),e.type==="advance"&&(Ae("whoosh"),tt("БЛИЖЕ!",i.x,i.y-30,"bad")),e.type==="taunt"&&(Ae("pop"),tt(["ЭЙ ТЫ!","НЕ ДОСТАНЕШЬ!","ХА-ХА!"][e.id%3],i.x,i.y-30,"bad"))}F.events.length=0}function Fu(n){const e=at.getBoundingClientRect(),t=e.width,i=e.height,s=yc(1,t,i,pi).glove;return{x:e.left+s.x+(n.spot.x*t-s.x)*Lr.reach,y:e.top+s.y+(n.spot.y*i-s.y)*Lr.reach-i*.05}}function ku(n){n.launched=!0,n.resolved=!0;const e=Fu(n),t=at.getBoundingClientRect(),i=(e.x-t.left)/(t.width||1)*2-1,s=-((e.y-t.top)/(t.height||1)*2-1);qa.setFromCamera(new Le(i,s),yt);const r=qa.ray.at(1.7,new I),a=F.launch({x:r.x,y:r.y,z:r.z},n.shot.point);n.outcome="throw",Cs.push({action:"grab",outcome:"throw",kind:"flight",id:a?.id??null,staminaBefore:n.staminaBefore,staminaAfter:n.staminaAfter}),Cs.length>20&&Cs.shift(),Ae("toss"),At()}const Wi=[];function jv(){for(let n=0;n<3;n++)Wi.push({x:.25+Math.random()*.5,y:.2+Math.random()*.4,r:.09+Math.random()*.06,age:0,seed:Math.random()*10});for(;Wi.length>6;)Wi.shift()}function Zv(n,e,t,i,s){const r=Math.min(e,t);for(let a=Wi.length-1;a>=0;a--){const o=Wi[a];if(o.age+=i,o.age>3.2){Wi.splice(a,1);continue}const c=o.x*e,l=o.y*t+o.age*r*.03,h=o.r*r;n.save(),n.globalAlpha=Math.min(1,(3.2-o.age)*1.5)*.93,n.translate(c,l),n.beginPath();for(let d=0;d<=16;d++){const u=d/16*Math.PI*2,p=h*(d%2?.62+.2*Math.sin(o.seed+d):1+.15*Math.sin(o.seed*2+d));n.lineTo(Math.cos(u)*p,Math.sin(u)*p)}n.closePath(),n.fillStyle="#f4f2e6",n.fill(),n.lineWidth=Math.max(2,s*.4),n.strokeStyle="#151715",n.stroke(),n.beginPath(),n.ellipse(h*.1,h*.05,h*.32,h*.26,0,0,Math.PI*2),n.fillStyle="#9a9a8a",n.fill(),n.beginPath(),n.ellipse(-h*.3,-h*.3,h*.14,h*.08,-.6,0,Math.PI*2),n.fillStyle="#ffffff",n.fill(),n.restore()}}const _r=[],xr=new tu(()=>({x:0,y:0,vx:0,vy:0,rot:0,vr:0,size:0,color:"",life:0}),180);function Jn(n,e,t=1){const i=$e(e),s=$e({...e,x:e.x+1}),r=Math.abs(s.x-i.x);_r.push({key:n,x:i.x,y:i.y,size:dn.clamp(r*1.6,70,260)*t,age:0})}function dd(n,e){const t=$e(n),i=$e({...n,x:n.x+1}),s=dn.clamp(Math.abs(i.x-t.x),30,200);for(let r=0;r<14;r++){const a=-Math.PI/2+(Math.random()-.5)*2.6,o=s*(2+Math.random()*3),c=xr.get();c.x=t.x,c.y=t.y,c.vx=Math.cos(a)*o,c.vy=Math.sin(a)*o,c.rot=Math.random()*6,c.vr=(Math.random()-.5)*18,c.size=s*(.07+Math.random()*.09),c.color=e[r%e.length],c.life=.7+Math.random()*.4}}const wa=new Map;function Jv(){for(const[n,e]of wa)F.flights.some(t=>t.id===n)||(Zi.remove(e.mesh,e.shadow),e.mesh.geometry.dispose(),e.mesh.material.dispose(),wa.delete(n));for(const n of F.flights){let e=wa.get(n.id);const t=Ht[n.kind];if(!e){const s=new Te(new Vt(t.w,t.h),new St({map:Bn[n.kind],alphaTest:.5,side:Ot}));s.castShadow=!0;const r=new Te(new Ki(t.w*.3,18),Iu);r.rotation.x=-Math.PI/2,r.renderOrder=1,Zi.add(s,r),e={mesh:s,shadow:r},wa.set(n.id,e)}e.mesh.position.set(n.pos.x,n.pos.y+t.h*.35,n.pos.z),e.mesh.rotation.z=Je()?n.angle:0,n.dropped&&!e.whistled&&(e.whistled=!0,Ae("whistle")),e.shadow.position.set(n.pos.x,.035,n.pos.z);const i=Math.max(.35,1-n.pos.y/6);e.shadow.scale.set(i,i*.45,1)}}function Qv(n){if(!(F.mode!=="play"||zs>0)){for(const{flight:e,impact:t}of F.fly(n,no())){if(t.type==="rest")continue;const i=t.id;if(t.kind==="enemy")Ae("throw"),Jn("throw",t.point),Je()&&(Et=.16,zs=.06);else if(t.kind==="dog")Jn("protected",t.point);else{if(Ae("cover"),Jn("cover",t.point,.7),typeof i=="string"){const s=zr.get(i);s&&(s.userData.wobble=1)}Je()&&(Et=.06)}if(typeof i=="number"){const s=Qt.get(i);s&&(s.flash=1)}It[e.kind].breakable&&Ae("shatter")}$a()}}const ud=["КУ-КУ, МАЗИЛА!","КУ-КУ! РУКИ-КРЮКИ!","КУ-КУ! ИДИ ДОМОЙ!","КУ-КУ! НУ ТЫ И ЛОПУХ!"];let ey=0,pr=0;const vr=[];function ty(n){const e=n.gagId?Vi.get(n.gagId):void 0,t=n.point??(e?e.getWorldPosition(new I):null),i=t?$e(t):{x:innerWidth/2,y:innerHeight/3};if(at.dataset.gag=`${n.gag}:${F.riffs}`,n.gag==="piano"){bv(ov(n.amount??0)),tt("♪ ТРЫНЬ-ТЫН-ТЫН ♪",i.x,i.y-40,"combo");const s=zr.get("piano");s&&(s.userData.wobble=1),ql=3.5}else if(n.gag==="cuckoo")Ae("cuckoo"),tt(ud[ey++%ud.length],i.x,i.y-30,"bad"),e&&(e.userData.pop=1);else if(n.gag==="lamp")Ae("buzz"),e&&(e.userData.swingV=(e.userData.swingV??0)+(Math.random()<.5?-1:1)*2.2),pr=1.2;else if(n.gag==="bell")Ae("bell"),tt("ДЗИИИНЬ!",i.x,i.y,"pop"),e&&(e.userData.ring=1);else if(n.gag==="laundry"){Ae("flop");const s=to.find(r=>r.visible);s&&(s.visible=!1,n.id&&vr.push({from:s.getWorldPosition(new I),id:n.id,color:s.userData.cloth,age:0})),n.id&&tt("ТРУСЫ НА ГОЛОВУ!",i.x,i.y+30,"combo")}}let ql=0;function ny(n,e){for(const[t,i]of Vi)if(t.startsWith("gag-lamp")){const s=(i.userData.swingV??0)-i.rotation.z*9*n;i.userData.swingV=s*(1-n*.45),i.rotation.z+=i.userData.swingV*n,i.traverse(r=>{r instanceof uc&&(r.intensity=r.userData.base*(pr>0&&Math.sin(e*61)>-.2+(1-pr)?.15:1))})}else if(i.userData.ring)i.userData.ring=Math.max(0,i.userData.ring-n*.9),i.rotation.z=Math.sin(e*26)*.5*i.userData.ring;else if(i.userData.pop){i.userData.pop=Math.max(0,i.userData.pop-n*1.6);const s=Math.sin(i.userData.pop*Math.PI*3)*i.userData.pop;i.scale.set(1+s*.18,1+s*.18,1)}if(pr=Math.max(0,pr-n),ql>0&&(ql-=n,Math.random()<n*5)){const t=gt[1].covers.find(s=>s.id==="piano"),i=$e({x:t.min.x+Math.random()*(t.max.x-t.min.x),y:t.max.y+.3,z:t.max.z});tt(["♪","♫","♬"][Math.floor(Math.random()*3)],i.x,i.y,"pop")}}function iy(n,e,t){for(let i=vr.length-1;i>=0;i--){const s=vr[i];s.age+=e;const r=Qt.get(s.id),a=r?Xs(r):null;if(s.age>2.6||!a&&s.age>.5){vr.splice(i,1);continue}const o=Math.min(1,s.age/.5),c=a??s.from,l={x:s.from.x+(c.x-s.from.x)*o,y:s.from.y+(c.y-.35-s.from.y)*o*o,z:s.from.z+(c.z-s.from.z)*o},h=$e(l),d=$e({...l,x:l.x+1}),u=dn.clamp(Math.abs(d.x-h.x),20,160)*.5;n.save(),n.translate(h.x,h.y),n.rotate(o<1?Math.sin(s.age*20)*.4:Math.sin(s.age*6)*.08),n.globalAlpha=Math.min(1,(2.6-s.age)*2),n.beginPath(),n.moveTo(-u*.6,-u*.3),n.lineTo(u*.6,-u*.3),n.lineTo(u*.55,u*.25),n.lineTo(u*.15,u*.3),n.lineTo(0,u*.05),n.lineTo(-u*.15,u*.3),n.lineTo(-u*.55,u*.25),n.closePath(),n.fillStyle=s.color,n.fill(),n.lineWidth=Math.max(2,t*.4),n.strokeStyle="#151715",n.lineJoin="round",n.stroke(),n.fillStyle="#ffffff";for(const[p,g]of[[-.3,-.05],[.25,.02],[0,-.18]])n.beginPath(),n.arc(p*u,g*u,u*.06,0,Math.PI*2),n.fill();n.restore()}}const xi=new tu(()=>({kind:"drop",x:0,y:0,vx:0,vy:0,life:0,max:1,size:1,tx:0,ty:0,phase:0}),260),Rc=n=>{const e=$e(n),t=$e({...n,x:n.x+1});return{p:e,u:dn.clamp(Math.abs(t.x-e.x),20,260)}};function sy(n,e){const{p:t,u:i}=Rc(n);for(let s=0;s<10;s++){const r=xi.get(),a=Math.random()*Math.PI*2;r.kind="seed",r.x=t.x,r.y=t.y,r.tx=t.x+Math.cos(a)*i*1.4,r.ty=t.y+Math.sin(a)*i,r.life=r.max=.45,r.size=i*.05,r.phase=a}for(const s of e){const r=Qt.get(s);if(!r)continue;const a=$e(Xs(r));for(let o=0;o<4;o++){const c=xi.get();c.kind="seed",c.x=t.x,c.y=t.y,c.tx=a.x+(Math.random()-.5)*30,c.ty=a.y+30+Math.random()*30,c.life=c.max=.35+o*.05,c.size=i*.05,c.phase=o}setTimeout(()=>tt("ТЬФУ!",a.x,a.y,"pop"),300)}}const Xi=[],ry=[[0,-1.2],[-.5,-.4],[.5,-.4],[0,0],[-.6,1],[.6,1],[-1,-.9],[1,-.9]],ay=[[0,1],[0,2],[1,3],[2,3],[3,4],[3,5],[1,6],[2,7]];function oy(n){const e=innerWidth,t=innerHeight,i=dn.clamp(n,e*.15,e*.85),s=Math.min(e,t)*.07;Xi.push({x:i,pts:ry.map(([r,a])=>({x:i+r*s+(Math.random()-.5)*s*.2,y:t*.26+a*s})),age:0}),Xi.length>3&&Xi.shift(),Ae("harp")}function ly(n,e){Ae("pop");for(let t=0;t<5;t++){const i=xi.get();i.kind="bird",i.x=n+(Math.random()-.5)*40,i.y=e+(Math.random()-.5)*30,i.vx=(t-2)*50+(Math.random()-.5)*40,i.vy=-140-Math.random()*80,i.life=i.max=2,i.size=14+Math.random()*8,i.phase=Math.random()*6}tt("ФЬЮТЬ!",n,e-40,"pop")}function cy(n,e,t,i){n.lineCap="round",n.lineJoin="round";for(let s=xi.live.length-1;s>=0;s--){const r=xi.live[s];if(r.life-=e,r.life<=0){xi.release(s);continue}const a=1-r.life/r.max;if(r.kind==="seed"){const o=r.x+(r.tx-r.x)*a,c=r.y+(r.ty-r.y)*a-Math.sin(a*Math.PI)*30;n.save(),n.translate(o,c),n.rotate(r.phase+a*9),n.beginPath(),n.ellipse(0,0,r.size,r.size*.6,0,0,Math.PI*2),n.fillStyle="#1b1b1b",n.fill(),n.restore()}else if(r.kind==="drop")r.vy+=900*e,r.x+=r.vx*e,r.y+=r.vy*e,n.beginPath(),n.arc(r.x,r.y,r.size,0,Math.PI*2),n.fillStyle="#8fd8ff",n.fill(),n.lineWidth=1.5,n.strokeStyle="#151715",n.stroke();else{r.x+=r.vx*e,r.y+=r.vy*e,r.vy*=1-e*.3;const o=Math.sin(i*18+r.phase)*.6;n.save(),n.globalAlpha=Math.min(1,r.life*1.5),n.translate(r.x,r.y),n.beginPath(),n.moveTo(-r.size,-r.size*o*.8),n.quadraticCurveTo(-r.size*.4,-r.size*.2,0,0),n.quadraticCurveTo(r.size*.4,-r.size*.2,r.size,-r.size*o*.8),n.lineWidth=Math.max(2.5,t*.45),n.strokeStyle="#151715",n.stroke(),n.restore()}}for(let s=Xi.length-1;s>=0;s--){const r=Xi[s];if(r.age+=e,r.age>3.4){Xi.splice(s,1);continue}const a=Math.min(1,r.age*3,(3.4-r.age)*1.5);n.save(),n.globalAlpha=a,n.setLineDash([6,7]),n.strokeStyle="#fff6c8",n.lineWidth=2;for(const[o,c]of ay)n.beginPath(),n.moveTo(r.pts[o].x,r.pts[o].y),n.lineTo(r.pts[c].x,r.pts[c].y),n.stroke();n.setLineDash([]),r.pts.forEach((o,c)=>{const l=8+3*Math.sin(i*6+c);n.beginPath();for(let h=0;h<=10;h++){const d=-Math.PI/2+h*Math.PI/5,u=h%2?l*.45:l;n.lineTo(o.x+Math.cos(d)*u,o.y+Math.sin(d)*u)}n.closePath(),n.fillStyle="#ffe14d",n.fill(),n.lineWidth=2,n.strokeStyle="#151715",n.stroke()}),n.font="900 15px Georgia",n.textAlign="center",n.lineWidth=4,n.strokeStyle="#151715",n.strokeText("СОЗВЕЗДИЕ «ЗАДИРА»",r.x,r.pts[5].y+34),n.fillStyle="#fff6c8",n.fillText("СОЗВЕЗДИЕ «ЗАДИРА»",r.x,r.pts[5].y+34),n.restore()}}function hy(n,e,t){for(const i of F.geysers){const s=Math.min(1,i.age/.35),r=Math.min(1,(wt.geyser.life-i.age)/.6),a=2.8*s*r,o=$e({x:i.x,y:0,z:i.z}),c=$e({x:i.x,y:a,z:i.z}),{u:l}=Rc({x:i.x,y:0,z:i.z}),h=l*.32;n.save(),n.beginPath();for(let d=0;d<=10;d++){const u=d/10,p=o.y+(c.y-o.y)*u;n.lineTo(o.x-h*(1-u*.35)+Math.sin(e*20+u*9)*h*.15,p)}for(let d=10;d>=0;d--){const u=d/10,p=o.y+(c.y-o.y)*u;n.lineTo(o.x+h*(1-u*.35)+Math.sin(e*23+u*7)*h*.15,p)}if(n.closePath(),n.fillStyle="#7fd0ff",n.globalAlpha=.9,n.fill(),n.globalAlpha=1,n.lineWidth=Math.max(2,t*.45),n.strokeStyle="#151715",n.stroke(),n.beginPath(),n.moveTo(o.x-h*.3,o.y),n.lineTo(c.x-h*.2,c.y),n.strokeStyle="#ffffff",n.lineWidth=h*.18,n.stroke(),n.beginPath(),n.ellipse(c.x,c.y,h*1.2,h*.45,0,0,Math.PI*2),n.fillStyle="#bfeaff",n.fill(),n.lineWidth=Math.max(2,t*.4),n.strokeStyle="#151715",n.stroke(),n.restore(),Je()&&r>.3&&Math.random()<.7){const d=xi.get();d.kind="drop",d.x=c.x,d.y=c.y,d.vx=(Math.random()-.5)*h*9,d.vy=-Math.random()*260,d.life=d.max=.8,d.size=Math.max(2,h*.09)}}}function dy(n,e,t){for(const i of F.actors){if(i.kind!=="enemy"||!(i.blind||i.plunger||i.antic))continue;const s=Qt.get(i.id);if(!s)continue;const r=Xs(s),a={x:r.x+s.body.position.x,y:r.y-.5+s.body.position.y,z:r.z+.05},{p:o,u:c}=Rc(a),l=c*.26;if(n.save(),n.lineJoin="round",n.lineWidth=Math.max(2,t*.45),n.strokeStyle="#151715",i.blind){n.beginPath();for(let h=0;h<=14;h++){const d=h/14*Math.PI*2,u=l*(h%2?.82:1.05);n.lineTo(o.x+Math.cos(d)*u*1.2,o.y+Math.sin(d)*u)}n.closePath(),n.fillStyle="#fffaf0",n.fill(),n.stroke();for(const h of[-.5,.1,.6])n.beginPath(),n.ellipse(o.x+h*l,o.y+l*(1+(h+.5)*.3)+Math.sin(e*2+h)*2,l*.14,l*.3,0,0,Math.PI*2),n.fillStyle="#fffaf0",n.fill(),n.stroke();n.beginPath(),n.arc(o.x+l*.2,o.y-l*1.05,l*.2,0,Math.PI*2),n.fillStyle="#e8243c",n.fill(),n.stroke()}if(i.plunger){const h=Bn.plunger.image,d=l*3,u=d*.8;n.translate(o.x,o.y+l*.2),n.rotate(-.5+Math.sin(e*6)*.1),n.drawImage(h,-u/2,-d*.25,u,d),n.setTransform(n.getTransform())}if(n.restore(),n.save(),n.lineJoin="round",n.lineWidth=Math.max(2,t*.4),n.strokeStyle="#151715",i.antic==="sandwich"){const h=o.x+s.facing*l*1.1,d=o.y+l*.5+Math.sin(e*11)*l*.12;[["#e8b46a",.3],["#5fbf4a",.12],["#e8475f",.12],["#f7d36b",.12],["#e8b46a",.3]].forEach(([u,p],g)=>{n.beginPath(),n.roundRect(h-l*.9,d-l*.5+g*l*.22,l*1.8,l*p,l*.1),n.fillStyle=u,n.fill(),n.stroke()})}else if(i.antic==="selfie"){const h=o.x+s.facing*l*2.2,d=o.y-l*1.4;if(n.beginPath(),n.moveTo(o.x+s.facing*l*.6,o.y+l),n.lineTo(h,d+l*.5),n.lineWidth=Math.max(2,t*.5),n.stroke(),n.lineWidth=Math.max(2,t*.4),n.beginPath(),n.roundRect(h-l*.7,d-l*.5,l*1.4,l,l*.12),n.fillStyle="#2b2b2b",n.fill(),n.stroke(),n.beginPath(),n.arc(h-s.facing*l*.1,d,l*.32,0,Math.PI*2),n.fillStyle="#9fd3ff",n.fill(),n.stroke(),e%1.3<.12){n.beginPath();for(let p=0;p<=16;p++){const g=p/16*Math.PI*2,_=p%2?l*.6:l*1.7;n.lineTo(h+Math.cos(g)*_,d-l*.7+Math.sin(g)*_)}n.closePath(),n.fillStyle="#fffbd0",n.fill(),n.stroke()}}else if(i.antic==="dance"){n.font=`900 ${Math.round(l*1.3)}px Georgia`,n.textAlign="center";for(let h=0;h<3;h++){const d=e*2+h*2.1,u=o.x+Math.cos(d)*l*2.4,p=o.y-l*1.6+Math.sin(d*1.3)*l*.6;n.lineWidth=4,n.strokeText("♪♫♬"[h],u,p),n.fillStyle=["#ff6fa8","#5ef0c8","#ffd84a"][h],n.fillText("♪♫♬"[h],u,p)}}n.restore()}}function fd(n){const e=document.createElement("canvas");e.width=e.height=256;const t=e.getContext("2d");if(t.lineJoin="round",t.lineWidth=9,t.strokeStyle="#151715",n==="piano"){t.fillStyle="#3a2418",t.beginPath(),t.roundRect(24,40,208,170,14),t.fill(),t.stroke(),t.fillStyle="#f4efe0",t.fillRect(34,130,188,44),t.strokeRect(34,130,188,44),t.fillStyle="#151715";for(let s=0;s<9;s++)t.fillRect(48+s*20,130,9,26);t.fillStyle="#5a3a26",t.fillRect(40,210,22,36),t.strokeRect(40,210,22,36),t.fillRect(194,210,22,36),t.strokeRect(194,210,22,36),t.fillStyle="#ffd84a",t.font="900 34px Georgia",t.fillText("♪",110,105)}else t.fillStyle="#4f7a64",t.beginPath(),t.roundRect(38,30,180,200,12),t.fill(),t.stroke(),t.strokeRect(56,48,144,164),t.fillStyle="#d9c46a",t.beginPath(),t.arc(128,130,34,0,Math.PI*2),t.fill(),t.stroke(),t.beginPath(),t.moveTo(128,130),t.lineTo(150,108),t.stroke(),t.fillStyle="#151715",t.font="900 26px Arial",t.textAlign="center",t.fillText("100 т",128,205);const i=new Mi(e);return i.colorSpace=ut,i}const uy={piano:fd("piano"),safe:fd("safe")},qi=new Map;function Yl(n){const e=qi.get(n);e&&(Zi.remove(e.group),e.obj.geometry.dispose(),e.shadow.geometry.dispose(),e.obj.material.dispose(),e.shadow.material.dispose(),qi.delete(n))}function fy(n){for(const e of F.hazards){let t=qi.get(e.id);if(!t){const s=e.kind==="piano"?2.1:1.4,r=new Bt;r.position.set(e.x,0,e.z+.15);const a=new Te(new Vt(s,s).translate(0,s/2,0),new St({map:uy[e.kind],alphaTest:.5,side:Ot})),o=new Te(new Ki(s*.55,28),new St({color:"#1c1c1c",polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-4}));o.rotation.x=-Math.PI/2,o.position.y=.06,r.add(o,a),Zi.add(r),t={group:r,obj:a,shadow:o},qi.set(e.id,t)}const i=Math.min(1,e.age/dr.warn);t.obj.position.y=8.5*(1-i*i),t.obj.rotation.z=Math.sin(e.age*3)*.15*(1-i),t.shadow.scale.setScalar(.25+1.15*i)}for(const[e,t]of qi)if(!F.hazards.some(i=>i.id===e)){if(t.wreck===void 0){Yl(e);continue}t.wreck-=n,t.obj.position.y=0,t.obj.rotation.z=.08,t.obj.scale.set(1.2,.62,1),t.shadow.scale.setScalar(1.3),t.wreck<=0&&Yl(e)}}function py(n){document.querySelector(".iris")?.remove(),Ae("iris");const e=document.createElement("div");e.className="iris",e.setAttribute("role","status"),e.innerHTML=`<div>${n}</div>`,En.append(e),at.dataset.milestone=n,setTimeout(()=>e.remove(),1500)}function $l(n){if(n.resolved=!0,n.brief){const s={x:n.spot.x*innerWidth,y:n.spot.y*innerHeight},r=F.briefPunch(Sc.hit(s.x,s.y));r==="tear"?(Ae("flop"),Je()&&(Et=.06,zs=.04)):r!=="protected"&&Ae("miss"),n.outcome=r==="tear"?"hit":r==="protected"?"protected":"miss",$a(s),At();return}n.shot=xc(n.ray.origin,n.ray.direction,no(),n.throwing?"punch":n.action);const e=typeof n.shot.id=="number"?n.shot.id:void 0,t=F.resolve(n.action,{kind:n.shot.kind,id:n.shot.id,point:n.shot.point});if(n.outcome=t,Cs.push({action:n.action,outcome:t,kind:n.shot.kind,id:n.shot.id??null,staminaBefore:n.staminaBefore,staminaAfter:n.staminaAfter}),Cs.length>20&&Cs.shift(),t==="hit"||t==="throw"?Ae(t):t==="smash"||t==="grab"?Ae("grab"):t==="ult"?Ae("ding"):t==="cover"?Ae("cover"):t!=="protected"&&Ae("miss"),e!==void 0){const s=Qt.get(e);s&&(s.flash=1)}if(t==="cover"&&typeof n.shot.id=="string"){const s=zr.get(n.shot.id);s&&(s.userData.wobble=1)}const i=t==="hit"||t==="throw"||t==="protected";Je()&&(Et=i?.16:t==="cover"||t==="smash"?.08:.02,zs=i?.06:t==="cover"?.035:0),$a($e(n.shot.point)),wc(Zn),At()}const Gi=new Set;let Ka=-1,Aa=0;const my=14,ar=.07,gy=11;let Ut=null;const Cc=()=>F.mode==="play"&&gt[F.level].pan>0;function _y(){const n=at.getBoundingClientRect(),e=yt.position.z+2;return 2*(Math.tan(yt.fov*Math.PI/360)*e*yt.aspect)/Math.max(1,n.width)}function xy(){let n=(Gi.has("ArrowRight")||Gi.has("KeyD")?1:0)-(Gi.has("ArrowLeft")||Gi.has("KeyA")?1:0);if(!n&&Ka>=0){const e=at.getBoundingClientRect(),t=(Ka-e.left)/Math.max(1,e.width);t<ar?n=-(1-t/ar):t>1-ar&&(n=(t-(1-ar))/ar)}return n}function vy(n){if(!Cc()){ys=0,Aa=0;return}const e=Ut?.moved?0:xy();Aa=e?Math.min(1,Aa+n*1.6):0;const t=e*gy*(.35+.65*Aa),i=1-Math.exp(-n*(e?6:10));ys+=(t-ys)*i,Math.abs(ys)>.01&&(Pn=iu(F.level,Pn+ys*n))}function ja(n){const e=at.getBoundingClientRect(),t=(n.clientX-e.left)/(e.width||1)*2-1,i=-((n.clientY-e.top)/(e.height||1)*2-1);mn.set(dn.clamp(t,-1,1),dn.clamp(i,-1,1)),Nu()}at.addEventListener("pointermove",n=>{if(n.pointerType==="mouse"&&(Ka=n.clientX),Ut&&n.pointerId===Ut.id){const e=n.clientX-Ut.x;if(!Ut.moved&&Math.hypot(e,n.clientY-Ut.y)>my&&Cc()&&!F.ultActive&&(Ut.moved=!0),Ut.moved){Pn=iu(F.level,Ut.pan-e*_y());return}}(n.pointerType!=="touch"||F.ultActive)&&ja(n)});at.addEventListener("pointerleave",()=>{Ka=-1});at.addEventListener("pointerdown",n=>{if(F.mode==="play"){if(n.pointerType==="touch"){Ut={id:n.pointerId,x:n.clientX,y:n.clientY,pan:Pn,moved:!1},F.ultActive&&ja(n);return}ja(n),!F.ultActive&&Ir(n.button===2?"grab":"punch")}});const yy=n=>{if(!Ut||n.pointerId!==Ut.id)return;const e=!Ut.moved;if(Ut=null,!(!e||F.mode!=="play")){if(ja(n),F.briefing){Ir("punch");return}F.ultActive||(F.message="Прицел стоит. Жми «Удар» или «Хватай».",Ur())}};at.addEventListener("pointerup",yy);at.addEventListener("pointercancel",n=>{Ut&&n.pointerId===Ut.id&&(Ut=null)});addEventListener("keyup",n=>Gi.delete(n.code));addEventListener("blur",()=>Gi.clear());at.addEventListener("contextmenu",n=>n.preventDefault());addEventListener("keydown",n=>{F.mode==="play"&&(n.code==="F8"||n.code==="KeyW")&&(n.preventDefault(),F.winNow(),At()),["ArrowLeft","ArrowRight","KeyA","KeyD"].includes(n.code)&&(Gi.add(n.code),Cc()&&n.preventDefault()),n.code==="Escape"&&!document.hidden&&(F.briefing&&F.mode==="play"?Su():(F.pause(),At())),(n.code==="Space"||n.code==="KeyE")&&!(n.target instanceof HTMLButtonElement)&&(n.preventDefault(),n.repeat||Ir(n.code==="Space"?"punch":"grab"))});function zu(){const n=bu();for(const e of Tc)ri[e].visible=n===e}function Pc(){F.suspend(),At()}document.addEventListener("visibilitychange",()=>{document.hidden&&Pc()});document.addEventListener("freeze",Pc);addEventListener("pagehide",Pc);function qt(n,e){document.getElementById(n)?.addEventListener("click",()=>{kr(),Ae("ui"),e()})}function Ra(n){if(F.reduced=!Je(),F.start(n)){for(const e of to)e.visible=!0;vr.length=0,Pn=0,ys=0,Ya="",Mr.length=0,_r.length=0,xr.clear(),Wi.length=0,xi.clear(),Xi.length=0;for(const e of[...qi.keys()])Yl(e);document.querySelector(".iris")?.remove()}At()}function pd(){return'<div class="topline"><div class="brand"><span>↗</span> ДВОР ДА ДЕЛО</div><div class="tag">РУКИ ДЛИННЕЕ. ДЕНЬ ЛУЧШЕ.</div></div>'}function At(){const n=F.mode;if(n!==Ya&&(Ya=n,Or()),Tv(bu()),zu(),Dr.dataset.mode=n,Dr.dataset.level=String(F.level),n==="menu")En.innerHTML=pd()+'<section class="panel"><div class="eyebrow">Потасовка на резиновых руках</div><h1>ДЛИННЫЕ<br><em>РУКИ.</em></h1><p>Сначала бар, потом улица. Задиры прячутся за пианино, стойкой, бочками и заборами, высовываются и замахиваются. Тянись, бей, бросай всё, что под рукой. Пса с нимбом не трогай.</p><div class="buttons"><button id="start" class="primary">В БАР →</button><button id="how" class="secondary">КАК ИГРАТЬ?</button></div><div class="fine">Без беготни. Только ловкость рук.</div></section><div class="stamp">100%<b>РАЗМАХ</b>0% СЕРЬЁЗНОСТИ</div><div class="footer"><span>БАР «ДЛИННЫЕ РУКИ» · УЛИЦА</span><span>РЕКОРД: '+F.progress.best+" / РЕЗИНОВЫЕ РУКИ 1930-х</span></div>",qt("start",()=>{F.mode="select",At()}),qt("how",()=>{En.innerHTML+='<div class="shade"></div><section class="panel centerpanel"><span class="note">ПАМЯТКА ДЛИННОРУКОГО</span><h2>Целься. Тянись.<br>Не трогай пса.</h2><p>Кулак летит ровно туда, куда ты целишься: никакого автоприцела. Задиры прячутся за укрытиями — бей, когда высунутся. У каждого своя полоска здоровья. Промах тоже тратит силы.</p><p>ЛКМ / пробел — удар. ПКМ / E — хватай предмет, затем бросай: он летит сам, по дуге. Улица широкая: стрелки, A/D, мышь у края экрана или свайп — камера едет. Пёс с нимбом — неприкосновенный.</p><button id="close" class="primary">ПОНЯТНО →</button></section>',qt("close",At)});else if(n==="select")En.innerHTML=pd()+'<div class="shade"></div><section class="panel centerpanel"><div class="eyebrow">Выбери свой размах</div><h2>КУДА<br>СЕГОДНЯ?</h2><div class="levels"><button id="level1" class="primary level"><span>01 / БАР «ДЛИННЫЕ РУКИ»<br><small>'+gt[1].goal+' посетителей · ведите себя прилично</small></span><b>↗</b></button><button id="level2" class="secondary level"><span>02 / УЛИЦА: ДВОР И ПЕРЕУЛОК<br><small>'+gt[2].goal+' задир · широкая панорама, крути камеру</small></span><b>↗</b></button></div><div class="buttons"><button id="back" class="secondary">← НАЗАД</button></div></section>',qt("level1",()=>Ra(1)),qt("level2",()=>Ra(2)),qt("back",()=>{F.mode="menu",At()});else{if(En.innerHTML='<div class="hud"><div class="hudbox"><div id="hearts" class="hearts"></div><div class="energy"><i id="energy"></i></div><div class="small" style="margin-top:6px">СИЛЫ <span id="stamina"></span></div></div><div class="hudbox"><div class="small">ТВОЙ СЧЁТ</div><div id="score" class="score"></div><div id="combo" class="small"></div></div><button id="pause" class="pause" aria-label="Пауза">Ⅱ</button></div><div id="ultmeter" class="ultmeter" hidden><b>УЛЬТА</b><span><i id="ultfill"></i></span></div><div id="progress" class="progress"></div><div class="crosshair"></div><div id="message" class="message" role="status"></div>'+(gt[F.level].pan>0?'<div id="panL" class="panhint left" aria-hidden="true"><b>◀</b><span></span></div><div id="panR" class="panhint right" aria-hidden="true"><b>▶</b><span></span></div>':"")+'<div class="controls"><button id="punch" class="primary">УДАР ↗<small>ЛКМ / ПРОБЕЛ · 24 СИЛЫ</small></button><button id="grab" class="secondary">ХВАТАЙ ◎<small>ПКМ / E · 12 СИЛ</small></button></div>',qt("punch",()=>Ir("punch")),qt("grab",()=>Ir("grab")),qt("pause",()=>{F.pause(),At()}),n==="pause"||n==="result"){const e=n==="result",t=e&&F.won,i=e?jx(F):[{id:"resume",label:"ПРОДОЛЖИТЬ →",primary:!0},{id:"autowin",label:"АВТО-ПОБЕДА ⚡",primary:!1},{id:"select",label:"ВЫБОР УРОВНЯ",primary:!1}],s=t?F.level<Cr?"Открыта улица: двор и переулок на одной широкой панораме.":"Улица чиста. Бар открыт до утра.":"Ещё попытка — все сердца снова с тобой.";En.innerHTML+='<div class="shade"></div><section class="panel centerpanel"><span class="note">'+(e?t?"ПОРЯДОК НАВЕДЁН":"БЫВАЕТ И ТАК":"РУКИ НА ПЕРЕРЫВЕ")+"</span><h2>"+(e?t?"КРАСИВО<br>РАЗОБРАЛСЯ!":"НЕ ТОТ<br>РАЗМАХ.":"ВЫДОХНИ.<br>ЗАДИРЫ ПОДОЖДУТ.")+"</h2><p>"+(e?"Счёт: <b>"+F.score+"</b> · Рекорд: "+F.progress.best+"<br>"+s:"Время остановилось. Ни один задира не ударит исподтишка.")+'</p><div class="buttons">'+i.map(r=>`<button id="${r.id}" class="${r.primary?"primary":"secondary"}">${r.label}</button>`).join("")+"</div></section>",qt("resume",()=>{F.pause(),At()}),qt("autowin",()=>{F.pause(),F.winNow(),At()}),qt("next",()=>Ra(F.level+1)),qt("retry",()=>Ra(F.level)),qt("select",()=>{F.mode="select",At()}),qt("menu",()=>{F.mode="menu",At()})}Ur()}wc(Zn),n!=="play"&&(En.insertAdjacentHTML("beforeend",Mv()),Sv(At)),Br(),Gs()}function $e(n){const e=new I(n.x,n.y,n.z).project(yt),t=at.getBoundingClientRect();return{x:t.left+(e.x+1)*.5*t.width,y:t.top+(1-e.y)*.5*t.height}}function My(n){const e=eo(n.kind,n.who),t=ei(F.level,n,Je()),[i,s,r,a]=n.kind==="enemy"&&n.skin?gc[n.skin]:e.inset,o=at.getBoundingClientRect();for(const c of[.8,.65,.9,.5,.35])for(const l of[.5,.38,.62]){const h={x:t.x-e.w/2+e.w*(i+(s-i)*l),y:t.y+e.h*(r+(a-r)*c),z:t.z},d=$e(h),u=(d.x-o.left)/(o.width||1)*2-1,p=-((d.y-o.top)/(o.height||1)*2-1);if(Ac(new Le(u,p)).id===n.id)return{x:Math.round(d.x),y:Math.round(d.y)}}return null}let md="";function Ur(){const e=F.actors.filter(l=>l.kind==="enemy").map(l=>(l.x<-.5?"слева":l.x>.5?"справа":"в центре")+(l.layer==="foreground"?" (за укрытием рядом)":l.layer==="background"?" (в окне)":" (за забором)"));at.setAttribute("aria-label",`Уровень ${F.level}. Задиры: ${e.join(", ")||"нет"}. Наведи прицел, затем нажми Удар.`);const t=JSON.stringify(F.mode==="play"?F.actors.map(l=>({id:l.id,kind:l.kind,layer:l.layer,frame:Qt.get(l.id)?.frame??null,at:l.age>=.4?My(l):null})):[]);t!==md&&(md=t,at.dataset.aim=t);const i=(l,h)=>{const d=document.getElementById(l);d&&(d.textContent=h)};i("hearts","♥".repeat(Math.max(0,F.hp))+"♡".repeat(5-Math.max(0,F.hp))),i("stamina",Math.floor(F.stamina)+""),i("score",F.score.toString().padStart(5,"0")),i("combo",F.combo>1?"КОМБО ×"+F.combo:"ДАЙ ИМ РАЗМАХ"),i("progress",`${bc()?"БАР":"УЛИЦА"} / ${F.defeated} ИЗ ${F.goal} ЗАДИР`),Sy();const s=document.getElementById("ultmeter");if(s){s.hidden=!F.ultActive;const l=document.getElementById("ultfill");l&&(l.style.width=Math.round(F.ult.meter*100)+"%")}const r=F.mode==="play"&&F.held==="hat"?JSON.stringify(Ey()):"";at.dataset.zone!==r&&(at.dataset.zone=r);const a=JSON.stringify({phase:F.ult.phase,meter:+F.ult.meter.toFixed(2),tip:wn&&F.ult.phase==="pour"?{x:Math.round(wn.tip.x*innerWidth),y:Math.round(wn.tip.y*innerHeight)}:null});at.dataset.ult!==a&&(at.dataset.ult=a),i("message",F.message);const o=document.getElementById("energy");o&&(o.style.width=F.stamina+"%");const c=document.getElementById("grab");c&&(c.innerHTML=F.held?"БРОСАЙ ↗<small>"+It[F.held].name.toUpperCase()+" · "+mu("grab",!0,F.held)+" СИЛ</small>":"ХВАТАЙ ◎<small>ПКМ / E · "+pc+" СИЛ</small>")}function Sy(){const n=gt[F.level].pan;if(!n)return;const e={L:{n:0,hot:!1},R:{n:0,hot:!1}};for(const t of F.actors){if(t.kind!=="enemy")continue;const i=$e(ei(F.level,t,Je())).x,s=i<0?e.L:i>innerWidth?e.R:null;s&&(s.n++,t.deadline-t.age<Ns*1.6&&(s.hot=!0))}for(const[t,i,s]of[["panL",Pn>-n+.05,e.L],["panR",Pn<n-.05,e.R]]){const r=document.getElementById(t);if(!r)continue;const a=(i||s.n?"on":"")+(s.hot?" hot":"");r.dataset.state!==a&&(r.dataset.state=a,r.classList.toggle("on",i||s.n>0),r.classList.toggle("hot",s.hot));const o=s.n?String(s.n):"",c=r.querySelector("span");c&&c.textContent!==o&&(c.textContent=o)}}let pi=null,gd=0;function Br(){const n=document.querySelector(".controls")?.getBoundingClientRect();pi=n&&n.width?{left:n.left,right:n.right,top:n.top}:null;const e=document.getElementById("message");if(pi&&e?.textContent){const t=document.createRange();t.selectNodeContents(e);const i=t.getBoundingClientRect();i.width&&(pi={left:Math.min(pi.left,i.left-18),right:Math.max(pi.right,i.right+18),top:Math.min(pi.top,i.top-10)})}}let wn=null,yr=0;const Ln=[],Ni=[];function by(){const n=F.hatRest;n&&(Hn.position.set(n.x,Hi.max.y+Iv,Math.min(n.z,Hi.max.z-.1)),Hn.visible=!0),wn=null,Ln.length=0;const e=document.createElement("div");e.className="ultflash",En.append(e),setTimeout(()=>e.remove(),800),Je()&&(Et=.25)}function Ey(){const n=Hi,e=at.getBoundingClientRect();for(const t of[.55,.42,.68,.3,.8])for(const i of[.5,.3,.7]){const s=$e({x:n.min.x+(n.max.x-n.min.x)*t,y:n.max.y,z:n.min.z+(n.max.z-n.min.z)*i}),r=(s.x-e.left)/(e.width||1)*2-1,a=-((s.y-e.top)/(e.height||1)*2-1),o=Ac(new Le(r,a));if(o.kind==="cover"&&o.point.y>=n.max.y-.001&&Hl(F.level,o.id,o.point))return{x:Math.round(s.x),y:Math.round(s.y)}}return null}function Ty(n){yv(F.pouring&&F.mode==="play"),F.ult.phase==="none"&&(Ni.length||Hn.visible)&&(Ni.length=0,Ln.length=0,Hn.visible=!1,wn=null,yr=0);const e=document.getElementById("ulttitle"),t=F.ult.phase==="intro"?Hx(F.ult.t):null;if(e&&e.dataset.who!==t?.who&&e.remove(),t&&!document.getElementById("ulttitle")&&En.insertAdjacentHTML("beforeend",`<div id="ulttitle" class="intertitle dialog" role="status" data-who="${t.who}"><div><small>❦ ${t.who} ❦</small><b>${t.text}</b></div></div>`),F.ult.phase==="pour"&&!wn){const c=Wl(),l=c?{x:c.x/innerWidth,y:c.y/innerHeight}:{x:.5,y:.6};wn=new Gx(l),mn.set(l.x*2-1,1-l.y*2),Nu()}for(let c=Ln.length-1;c>=0;c--){const l=Ln[c];l.life-=n,l.vy+=2.4*n,l.x+=l.vx*n,l.y+=l.vy*n,l.life<=0&&Ln.splice(c,1)}if(!wn||!F.pouring||F.mode!=="play")return;const i=wn.update(n,{x:(mn.x+1)/2,y:(1-mn.y)/2}),s=new Map;let r=null;for(const c of[0,-.018,.018]){const l=Ac(new Le((i.x+c)*2-1,1-i.y*2));typeof l.id=="number"&&!s.has(l.id)&&s.set(l.id,l.kind),c===0&&(l.kind==="whiff"||l.point.y<.2)&&(r=l.point)}for(const[c,l]of s)(l==="enemy"||l==="dog")&&F.soak({kind:l,id:c},n);const a=Wl(),o=!!a&&Math.hypot(i.x*innerWidth-a.x,(i.y*innerHeight-a.y)*1.6)<a.r;if(o&&(F.pourInHat(n),yr=Math.min(1,yr+n/(Ii.length*.8))),at.dataset.inhat=String(o),Je()&&Math.random()<.7&&Ln.push({x:i.x+(Math.random()-.5)*.02,y:i.y,vx:(Math.random()-.5)*.22,vy:-.18-Math.random()*.22,life:.22+Math.random()*.2}),Ln.length>40&&Ln.splice(0,Ln.length-40),r&&r.y<.2){const c=$e(r),l=c.x/innerWidth,h=c.y/innerHeight,d=Math.min(innerWidth,innerHeight),u=Ni.find(p=>Math.hypot((p.x-l)*innerWidth,(p.y-h)*innerHeight)<d*.06);u?u.r=Math.min(u.max,u.r+n*d*.08):(Ni.push({x:l,y:h,r:d*.015,max:d*(.07+Math.random()*.04)}),Ni.length>14&&Ni.shift())}}const Mr=[];function Xs(n){const e=n.skin?gc[n.skin][3]:Ht.enemy.inset[3];return{x:n.group.position.x,y:n.group.position.y+Ht.enemy.h*e+.16,z:n.group.position.z}}function or(n,e,t,i,s,r){n.beginPath(),n.roundRect(e,t,i,s,r)}function wy(n,e,t){for(const i of F.actors){if(i.kind!=="enemy"||!i.maxHp)continue;const s=Qt.get(i.id),r=ev(i,F.elapsed);if(!s||r<=0)continue;const a=Xs(s),o=$e(a),c=$e({...a,x:a.x+1}),l=Math.abs(c.x-o.x),h=dn.clamp(l*.95,36,150),d=Math.max(8,h*.16),u=o.x-h/2,p=o.y-d,g=(i.hp??0)/i.maxHp;s.ghost=Math.max(g,(s.ghost??1)-e*.9),n.save(),n.globalAlpha=r,or(n,u,p,h,d,d/2),n.fillStyle="#260a0a",n.fill(),s.ghost>g&&(or(n,u,p,h*s.ghost,d,d/2),n.fillStyle="#ff8585",n.fill()),or(n,u,p,Math.max(d,h*g),d,d/2),n.fillStyle=g>.6?"#e61e1e":g>.3?"#cc1414":"#990c0c",g>0&&n.fill(),s.flash>.3&&(or(n,u,p,h,d,d/2),n.fillStyle=`rgba(255,255,255,${(s.flash-.3)*.9})`,n.fill()),n.strokeStyle="#180404",n.lineWidth=Math.max(1.5,t*.3);for(let _=10;_<i.maxHp;_+=10){const m=u+h*_/i.maxHp;n.beginPath(),n.moveTo(m,p+2),n.lineTo(m,p+d-2),n.stroke()}or(n,u,p,h,d,d/2),n.lineWidth=Math.max(2,t*.45),n.strokeStyle="#180404",n.stroke(),n.beginPath(),n.moveTo(u+d*.6,p+d*.3),n.lineTo(u+h*Math.max(.1,g)-d*.4,p+d*.3),n.strokeStyle="rgba(255,200,200,.6)",n.lineWidth=Math.max(1,d*.16),n.lineCap="round",n.stroke(),n.restore()}for(let i=Mr.length-1;i>=0;i--){const s=Mr[i];if(s.age+=e,s.age>1){Mr.splice(i,1);continue}const r=$e({x:s.x,y:s.y+s.age*.7,z:s.z}),a=$e({x:s.x+1,y:s.y,z:s.z}),o=Math.abs(a.x-r.x),c=s.age<.12?.6+s.age/.12*.6:1.2-Math.min(.2,s.age-.12),l=dn.clamp(o*(s.big?.55:.42),16,64)*c;n.save(),n.globalAlpha=Math.min(1,(1-s.age)*2.5),n.font=`900 ${l}px Arial`,n.textAlign="center",n.textBaseline="bottom",n.lineJoin="round",n.lineWidth=Math.max(3,l*.16),n.strokeStyle="#151715",n.strokeText("−"+s.amount,r.x+(s.big?0:l*.3),r.y-4),n.fillStyle=s.big?"#ff6b3d":"#ffd84a",n.fillText("−"+s.amount,r.x+(s.big?0:l*.3),r.y-4),n.restore()}}const lr="#ffd400",_d="#fff6b8";function Ay(n,e,t,i,s){const r=Math.min(e,t),a=Wl();a&&yr>0&&(n.beginPath(),n.ellipse(a.x,a.y+a.r*.05,a.r*(.55+.4*yr),a.r*.22,0,0,Math.PI*2),n.fillStyle=lr,n.fill(),n.lineWidth=Math.max(1.5,s*.35),n.strokeStyle="#151715",n.stroke());for(const o of Ni)n.beginPath(),n.ellipse(o.x*e,o.y*t,o.r,o.r*.3,0,0,Math.PI*2),n.fillStyle=lr,n.globalAlpha=.9,n.fill(),n.globalAlpha=1,n.lineWidth=Math.max(2,s*.45),n.strokeStyle="#151715",n.stroke(),n.beginPath(),n.ellipse(o.x*e-o.r*.25,o.y*t-o.r*.08,o.r*.35,o.r*.07,0,0,Math.PI*2),n.fillStyle=_d,n.fill();if(wn&&F.ult.phase==="pour"){const o=wn.points().map(g=>({x:g.x*e,y:g.y*t})),c=o.length-1,l=[],h=[],d=[],u=Je()?1:0;for(let g=0;g<=c;g++){const _=o[Math.max(0,g-1)],m=o[Math.min(c,g+1)],f=m.x-_.x,b=m.y-_.y,E=Math.hypot(f,b)||1,v=-b/E,A=f/E,w=g/c,C=r*(.068*(1-w)+.03*w)*(1+u*.12*Math.sin(w*9-i*17)),P=u*Math.sin(w*15-i*24)*r*.007*(.3+w),S=o[g].x+v*P,M=o[g].y+A*P;d.push({x:S,y:M,w:C,nx:v,ny:A}),l.push({x:S+v*C/2,y:M+A*C/2}),h.push({x:S-v*C/2,y:M-A*C/2})}n.beginPath(),l.forEach((g,_)=>_?n.lineTo(g.x,g.y):n.moveTo(g.x,g.y));for(let g=c;g>=0;g--)n.lineTo(h[g].x,h[g].y);n.closePath(),n.fillStyle=lr,n.fill(),n.lineJoin="round",n.lineWidth=Math.max(2,s*.55),n.strokeStyle="#151715",n.stroke(),n.beginPath();for(let g=1;g<c;g++){const _=d[g],m=_.x+_.nx*_.w*.2,f=_.y+_.ny*_.w*.2;g===1?n.moveTo(m,f):n.lineTo(m,f)}n.lineCap="round",n.lineWidth=r*.007,n.strokeStyle=_d,n.stroke(),n.fillStyle="#ffffff";for(let g=0;g<6;g++){const _=(i*1.7+g/6)%1,m=Math.min(c-1,Math.floor(_*c)),f=d[m];n.beginPath(),n.ellipse(f.x-f.nx*f.w*.15,f.y-f.ny*f.w*.15,f.w*.16,f.w*.07,Math.atan2(f.ny,f.nx)+Math.PI/2,0,Math.PI*2),n.fill()}const p=o[c];n.strokeStyle="#151715",n.lineWidth=Math.max(2,s*.4),n.fillStyle=lr;for(let g=0;g<5;g++){const _=-Math.PI/2+(g-2)*.45+(u?Math.sin(i*30+g)*.1:0),m=r*.02,f=r*(.045+.012*Math.sin(i*40+g*2)*u);n.beginPath(),n.moveTo(p.x+Math.cos(_)*m,p.y+Math.sin(_)*m),n.lineTo(p.x+Math.cos(_)*f,p.y+Math.sin(_)*f),n.stroke()}}for(const o of Ln)n.beginPath(),n.arc(o.x*e,o.y*t,r*.0045+1,0,Math.PI*2),n.fillStyle=lr,n.fill(),n.lineWidth=1.5,n.strokeStyle="#151715",n.stroke()}let xd=0;function Ry(n){const e=at.getBoundingClientRect(),t=e.width,i=e.height,s=Xv,r=Rs.width/Math.max(1,t),a=Math.max(0,Math.min(.05,n-xd));if(xd=n,s.setTransform(1,0,0,1,0,0),s.clearRect(0,0,Rs.width,Rs.height),F.mode!=="play"&&F.mode!=="pause")return;s.setTransform(r,0,0,r,0,0),bc()&&Ay(s,t,i,n,ur(t,i).ink);const{ink:o,rim:c}=ur(t,i),l=F.briefing?null:pi,h=mt,d=h?h.phase:1;hy(s,n,o),dy(s,n,o),wy(s,a,o),iy(s,a,o),cy(s,a,o,n);const u=h?{x:h.spot.x*t,y:h.spot.y*i}:{x:0,y:0},p=h&&d<1?h.throwing?1:cv(u,t):0;for(let g=_r.length-1;g>=0;g--){const _=_r[g];if(_.age+=a,_.age>.5){_r.splice(g,1);continue}const m=_.age/.5,f=_.size*(m<.15?.6+m*4:1.2-m*.2);s.save(),s.globalAlpha=Math.max(0,1-Math.max(0,m-.5)*2),s.translate(_.x,_.y),s.drawImage(Ta[_.key]??Ta.miss,-f/2,-f/2,f,f),s.restore()}for(let g=xr.live.length-1;g>=0;g--){const _=xr.live[g];if(_.life-=a,_.life<=0){xr.release(g);continue}_.vy+=i*2.2*a,_.x+=_.vx*a,_.y+=_.vy*a,_.rot+=_.vr*a,s.save(),s.translate(_.x,_.y),s.rotate(_.rot),s.globalAlpha=Math.min(1,_.life*3),s.beginPath(),s.moveTo(-_.size,_.size*.6),s.lineTo(0,-_.size),s.lineTo(_.size*.8,_.size*.4),s.closePath(),s.fillStyle=_.color,s.fill(),s.lineWidth=Math.max(1.5,o*.3),s.strokeStyle="#151715",s.stroke(),s.restore()}if(h&&h.resolved&&!h.throwing&&d<.8){const g=(d-fr)/(.8-fr),_=h.outcome&&Ta[h.outcome]?h.outcome:"miss",m=(_==="miss"?.9:1.6)*ur(t,i).r*2*Math.max(.5,Math.min(1.2,6.5/Math.max(3,h.shot.distance)))*(g<.2?.6+g*3:1.2-g*.2);s.save(),s.globalAlpha=Math.max(0,1-Math.max(0,g-.5)*2),s.translate(u.x,u.y),s.rotate(-h.ray.direction.x*.4),s.drawImage(Ta[_],-m/2,-m/2,m,m),s.restore()}for(const g of[-1,1]){const _=(Je()?Math.sin(n*2.4+(g>0?0:1.3))*i*.006:0)+(F.briefing?ur(t,i).r*1.7:0);let m=yc(g,t,i,l,_);h&&g===p&&(m=h.throwing?ed(g,t,i,Fu(h),d,Lr,{throwing:!0,avoid:l}):ed(g,t,i,u,d,{arrive:fr,release:Yv},{depth:6.5/Math.max(3,h.shot.distance),grab:h.action==="grab",avoid:l}));const f=F.held&&g===1&&!(h&&h.throwing&&p===1);if(f&&(m={...m,open:!0}),h&&g===p&&d>.08&&d<fr&&Je()){const E=m.glove.x-m.ctrl.x,v=m.glove.y-m.ctrl.y,A=Math.hypot(E,v)||1,w=E/A,C=v/A;s.strokeStyle="#151715",s.lineWidth=Math.max(2,o*.5),s.lineCap="round";for(const P of[-1,1]){const S=m.w1/2+m.r*.45,M=-C*P*S,D=w*P*S;s.beginPath(),s.moveTo(m.glove.x-w*m.r*2.4+M,m.glove.y-C*m.r*2.4+D),s.lineTo(m.glove.x-w*m.r*1.25+M,m.glove.y-C*m.r*1.25+D),s.stroke()}}xv(s,m,o,c);const b=f?F.held:h&&h.throwing&&h.held&&g===p&&!h.launched?h.held:null;if(b){const E=Bn[b].image,v=m.r*2.2,A=v*Ht[b].w/Ht[b].h;s.save(),s.translate(m.glove.x,m.glove.y-m.r*.5),s.rotate(Je()?Math.sin(n*2)*.07:0),s.drawImage(E,-A/2,-v*.8,A,v),s.restore()}}Zv(s,t,i,a,o)}const Cy=new kp;let Zn=0;const Ms=new I;function Ou(){requestAnimationFrame(Ou);const n=Math.min(Cy.getDelta(),.05)*$v;F.mode!=="pause"&&(Zn+=n),zs>0?zs-=n:F.tick(n),F.mode!==Ya&&At();{const e=F.mode==="play"||F.mode==="pause"?F.briefing:null;Sc.sync(e,F.mode==="pause");const t=String(!!e);Dr.dataset.brief!==t&&(Dr.dataset.brief=t)}if(Ty(F.mode==="play"?n:0),F.events.length&&$a(),zu(),hd>F.hp&&Je()){const e=document.createElement("div");e.className="flash",En.append(e),setTimeout(()=>e.remove(),400)}hd=F.hp,wc(Zn),vy(F.mode==="play"?n:0),F.mode==="play"&&(Ur(),(gd-=n)<=0&&(gd=.25,Br())),mt&&F.mode!=="pause"&&(mt.phase=Math.min(1,mt.phase+n/(mt.throwing?Lr.duration:qv)),mt.throwing&&!mt.launched&&mt.phase>=Lr.arrive?ku(mt):!mt.throwing&&!mt.resolved&&mt.phase>=fr&&$l(mt),mt.phase>=1&&(mt=null)),F.mode!=="play"&&F.mode!=="pause"&&(mt=null),Qv(n),Jv(),ny(n,Zn),fy(F.mode==="play"?n:0),Wv(n,Zn);for(const e of zr.values()){const t=e.userData.wobble;t&&(e.scale.set(1+Math.sin(t*30)*t*.05,1-Math.sin(t*30)*t*.04,1),e.userData.wobble=Math.max(0,t-n*3))}if(Je())for(const e of Au)e.rotation.z=Math.sin(Zn*1.7+e.userData.sway)*.08;if(Je())for(const e of Ru)e.rotation.y=e.userData.swing*(.35+.3*Math.sin(Zn*2.3+e.userData.swing));Py(n);{const e=Qn.depth,t=Math.tan(yt.fov*Math.PI/360)*e*yt.aspect;F.cam={x:Ms.x||Pn,z:yt.position.z,half:Math.max(1.2,t-.6)}}Fn.info.reset(),Fn.clear(),Fn.render(gn,yt),Ry(Zn)}function Py(n){if(F.mode==="menu"||F.mode==="select"){ad(0);return}const{w:e,h:t}=Uu(),i=ou(e,t,Pn);ad(Pn),Ms.set(i.position.x,i.position.y,i.position.z),Et>0?(Et=Math.max(0,Et-n*.9),yt.position.set(Ms.x+(Math.random()-.5)*Et,Ms.y+(Math.random()-.5)*Et,Ms.z)):yt.position.copy(Ms),yt.updateMatrixWorld()}Or();Gs();At();Ou();
