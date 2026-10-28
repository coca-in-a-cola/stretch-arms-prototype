import{_ as Mo}from"./index-DTQ8xavb.js";const uc="180",hf=0,Zc=1,df=2,Id=1,Ud=2,ni=3,Di=0,an=1,Gt=2,Ai=0,Os=1,Jc=2,Qc=3,eh=4,uf=5,Ki=100,ff=101,pf=102,mf=103,gf=104,_f=200,xf=201,vf=202,yf=203,dl=204,ul=205,Mf=206,Sf=207,bf=208,Ef=209,wf=210,Tf=211,Af=212,Rf=213,Cf=214,fl=0,pl=1,ml=2,Xs=3,gl=4,_l=5,xl=6,vl=7,Nd=0,Pf=1,Df=2,Ri=0,Lf=1,If=2,Uf=3,Nf=4,Ff=5,kf=6,zf=7,Fd=300,qs=301,Ys=302,yl=303,Ml=304,co=306,Ka=1e3,Ji=1001,Sl=1002,Un=1003,Of=1004,ta=1005,Gn=1006,So=1007,Qi=1008,Wn=1009,kd=1010,zd=1011,kr=1012,fc=1013,os=1014,ci=1015,Kr=1016,pc=1017,mc=1018,zr=1020,Od=35902,Bd=35899,Hd=1021,Gd=1022,In=1023,Or=1026,Br=1027,Vd=1028,gc=1029,Wd=1030,_c=1031,xc=1033,Ha=33776,Ga=33777,Va=33778,Wa=33779,bl=35840,El=35841,wl=35842,Tl=35843,Al=36196,Rl=37492,Cl=37496,Pl=37808,Dl=37809,Ll=37810,Il=37811,Ul=37812,Nl=37813,Fl=37814,kl=37815,zl=37816,Ol=37817,Bl=37818,Hl=37819,Gl=37820,Vl=37821,Wl=36492,Xl=36494,ql=36495,Yl=36283,$l=36284,Kl=36285,jl=36286,Bf=3200,Xd=3201,qd=0,Hf=1,Ei="",gt="srgb",$s="srgb-linear",ja="linear",st="srgb",ps=7680,th=519,Gf=512,Vf=513,Wf=514,Yd=515,Xf=516,qf=517,Yf=518,$f=519,Zl=35044,nh="300 es",Vn=2e3,Za=2001;class tr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const Ot=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ih=1234567;const Bs=Math.PI/180,Hr=180/Math.PI;function hi(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ot[n&255]+Ot[n>>8&255]+Ot[n>>16&255]+Ot[n>>24&255]+"-"+Ot[e&255]+Ot[e>>8&255]+"-"+Ot[e>>16&15|64]+Ot[e>>24&255]+"-"+Ot[t&63|128]+Ot[t>>8&255]+"-"+Ot[t>>16&255]+Ot[t>>24&255]+Ot[i&255]+Ot[i>>8&255]+Ot[i>>16&255]+Ot[i>>24&255]).toLowerCase()}function $e(n,e,t){return Math.max(e,Math.min(t,n))}function vc(n,e){return(n%e+e)%e}function Kf(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function jf(n,e,t){return n!==e?(t-n)/(e-n):0}function Dr(n,e,t){return(1-t)*n+t*e}function Zf(n,e,t,i){return Dr(n,e,1-Math.exp(-t*i))}function Jf(n,e=1){return e-Math.abs(vc(n,e*2)-e)}function Qf(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function ep(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function tp(n,e){return n+Math.floor(Math.random()*(e-n+1))}function np(n,e){return n+Math.random()*(e-n)}function ip(n){return n*(.5-Math.random())}function sp(n){n!==void 0&&(ih=n);let e=ih+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function rp(n){return n*Bs}function ap(n){return n*Hr}function op(n){return(n&n-1)===0&&n!==0}function lp(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function cp(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function hp(n,e,t,i,s){const r=Math.cos,a=Math.sin,o=r(t/2),c=a(t/2),l=r((e+i)/2),h=a((e+i)/2),d=r((e-i)/2),u=a((e-i)/2),f=r((i-e)/2),g=a((i-e)/2);switch(s){case"XYX":n.set(o*h,c*d,c*u,o*l);break;case"YZY":n.set(c*u,o*h,c*d,o*l);break;case"ZXZ":n.set(c*d,c*u,o*h,o*l);break;case"XZX":n.set(o*h,c*g,c*f,o*l);break;case"YXY":n.set(c*f,o*h,c*g,o*l);break;case"ZYZ":n.set(c*g,c*f,o*h,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Dn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function nt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const kn={DEG2RAD:Bs,RAD2DEG:Hr,generateUUID:hi,clamp:$e,euclideanModulo:vc,mapLinear:Kf,inverseLerp:jf,lerp:Dr,damp:Zf,pingpong:Jf,smoothstep:Qf,smootherstep:ep,randInt:tp,randFloat:np,randFloatSpread:ip,seededRandom:sp,degToRad:rp,radToDeg:ap,isPowerOfTwo:op,ceilPowerOfTwo:lp,floorPowerOfTwo:cp,setQuaternionFromProperEuler:hp,normalize:nt,denormalize:Dn};class Ue{constructor(e=0,t=0){Ue.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos($e(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class jr{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let c=i[s+0],l=i[s+1],h=i[s+2],d=i[s+3];const u=r[a+0],f=r[a+1],g=r[a+2],_=r[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=d;return}if(o===1){e[t+0]=u,e[t+1]=f,e[t+2]=g,e[t+3]=_;return}if(d!==_||c!==u||l!==f||h!==g){let m=1-o;const p=c*u+l*f+h*g+d*_,w=p>=0?1:-1,E=1-p*p;if(E>Number.EPSILON){const R=Math.sqrt(E),b=Math.atan2(R,p*w);m=Math.sin(m*b)/R,o=Math.sin(o*b)/R}const S=o*w;if(c=c*m+u*S,l=l*m+f*S,h=h*m+g*S,d=d*m+_*S,m===1-o){const R=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=R,l*=R,h*=R,d*=R}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,s,r,a){const o=i[s],c=i[s+1],l=i[s+2],h=i[s+3],d=r[a],u=r[a+1],f=r[a+2],g=r[a+3];return e[t]=o*g+h*d+c*f-l*u,e[t+1]=c*g+h*u+l*d-o*f,e[t+2]=l*g+h*f+o*u-c*d,e[t+3]=h*g-o*d-c*u-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(i/2),h=o(s/2),d=o(r/2),u=c(i/2),f=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=u*h*d+l*f*g,this._y=l*f*d-u*h*g,this._z=l*h*g+u*f*d,this._w=l*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+l*f*g,this._y=l*f*d-u*h*g,this._z=l*h*g-u*f*d,this._w=l*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-l*f*g,this._y=l*f*d+u*h*g,this._z=l*h*g+u*f*d,this._w=l*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-l*f*g,this._y=l*f*d+u*h*g,this._z=l*h*g-u*f*d,this._w=l*h*d+u*f*g;break;case"YZX":this._x=u*h*d+l*f*g,this._y=l*f*d+u*h*g,this._z=l*h*g-u*f*d,this._w=l*h*d-u*f*g;break;case"XZY":this._x=u*h*d-l*f*g,this._y=l*f*d-u*h*g,this._z=l*h*g+u*f*d,this._w=l*h*d+u*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],d=t[10],u=i+o+d;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(a-s)*f}else if(i>o&&i>d){const f=2*Math.sqrt(1+i-o-d);this._w=(h-c)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+l)/f}else if(o>d){const f=2*Math.sqrt(1+o-i-d);this._w=(r-l)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+d-i-o);this._w=(a-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs($e(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=i*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-i*l,this._z=r*h+a*l+i*c-s*o,this._w=a*h-i*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,a=this._w;let o=a*e._w+i*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=s,this._z=r,this;const c=1-o*o;if(c<=Number.EPSILON){const f=1-t;return this._w=f*a+t*this._w,this._x=f*i+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,o),d=Math.sin((1-t)*h)/l,u=Math.sin(t*h)/l;return this._w=a*d+this._w*u,this._x=i*d+this._x*u,this._y=s*d+this._y*u,this._z=r*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(e=0,t=0,i=0){U.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(sh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(sh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*i),h=2*(o*t-r*s),d=2*(r*i-a*t);return this.x=t+c*l+a*d-o*h,this.y=i+c*h+o*l-r*d,this.z=s+c*d+r*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this.z=$e(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this.z=$e(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-i*c,this.z=i*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return bo.copy(this).projectOnVector(e),this.sub(bo)}reflect(e){return this.sub(bo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos($e(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const bo=new U,sh=new jr;class Be{constructor(e,t,i,s,r,a,o,c,l){Be.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,c,l)}set(e,t,i,s,r,a,o,c,l){const h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=c,h[6]=i,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],h=i[4],d=i[7],u=i[2],f=i[5],g=i[8],_=s[0],m=s[3],p=s[6],w=s[1],E=s[4],S=s[7],R=s[2],b=s[5],C=s[8];return r[0]=a*_+o*w+c*R,r[3]=a*m+o*E+c*b,r[6]=a*p+o*S+c*C,r[1]=l*_+h*w+d*R,r[4]=l*m+h*E+d*b,r[7]=l*p+h*S+d*C,r[2]=u*_+f*w+g*R,r[5]=u*m+f*E+g*b,r[8]=u*p+f*S+g*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-i*r*h+i*o*c+s*r*l-s*a*c}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],d=h*a-o*l,u=o*c-h*r,f=l*r-a*c,g=t*d+i*u+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=d*_,e[1]=(s*l-h*i)*_,e[2]=(o*i-s*a)*_,e[3]=u*_,e[4]=(h*t-s*c)*_,e[5]=(s*r-o*t)*_,e[6]=f*_,e[7]=(i*c-l*t)*_,e[8]=(a*t-i*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Eo.makeScale(e,t)),this}rotate(e){return this.premultiply(Eo.makeRotation(-e)),this}translate(e,t){return this.premultiply(Eo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Eo=new Be;function $d(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Gr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function dp(){const n=Gr("canvas");return n.style.display="block",n}const rh={};function Vr(n){n in rh||(rh[n]=!0,console.warn(n))}function up(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}const ah=new Be().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),oh=new Be().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function fp(){const n={enabled:!0,workingColorSpace:$s,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===st&&(s.r=di(s.r),s.g=di(s.g),s.b=di(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===st&&(s.r=Hs(s.r),s.g=Hs(s.g),s.b=Hs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ei?ja:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Vr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Vr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[$s]:{primaries:e,whitePoint:i,transfer:ja,toXYZ:ah,fromXYZ:oh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:gt},outputColorSpaceConfig:{drawingBufferColorSpace:gt}},[gt]:{primaries:e,whitePoint:i,transfer:st,toXYZ:ah,fromXYZ:oh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:gt}}}),n}const Je=fp();function di(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Hs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let ms;class pp{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{ms===void 0&&(ms=Gr("canvas")),ms.width=e.width,ms.height=e.height;const s=ms.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=ms}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Gr("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=di(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(di(t[i]/255)*255):t[i]=di(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let mp=0;class yc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:mp++}),this.uuid=hi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(wo(s[a].image)):r.push(wo(s[a]))}else r=wo(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function wo(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?pp.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let gp=0;const To=new U;class kt extends tr{constructor(e=kt.DEFAULT_IMAGE,t=kt.DEFAULT_MAPPING,i=Ji,s=Ji,r=Gn,a=Qi,o=In,c=Wn,l=kt.DEFAULT_ANISOTROPY,h=Ei){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:gp++}),this.uuid=hi(),this.name="",this.source=new yc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Ue(0,0),this.repeat=new Ue(1,1),this.center=new Ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Be,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(To).x}get height(){return this.source.getSize(To).y}get depth(){return this.source.getSize(To).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Fd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ka:e.x=e.x-Math.floor(e.x);break;case Ji:e.x=e.x<0?0:1;break;case Sl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ka:e.y=e.y-Math.floor(e.y);break;case Ji:e.y=e.y<0?0:1;break;case Sl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}kt.DEFAULT_IMAGE=null;kt.DEFAULT_MAPPING=Fd;kt.DEFAULT_ANISOTROPY=1;class at{constructor(e=0,t=0,i=0,s=1){at.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const c=e.elements,l=c[0],h=c[4],d=c[8],u=c[1],f=c[5],g=c[9],_=c[2],m=c[6],p=c[10];if(Math.abs(h-u)<.01&&Math.abs(d-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const E=(l+1)/2,S=(f+1)/2,R=(p+1)/2,b=(h+u)/4,C=(d+_)/4,L=(g+m)/4;return E>S&&E>R?E<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(E),s=b/i,r=C/i):S>R?S<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),i=b/s,r=L/s):R<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),i=C/r,s=L/r),this.set(i,s,r,t),this}let w=Math.sqrt((m-g)*(m-g)+(d-_)*(d-_)+(u-h)*(u-h));return Math.abs(w)<.001&&(w=1),this.x=(m-g)/w,this.y=(d-_)/w,this.z=(u-h)/w,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this.z=$e(this.z,e.z,t.z),this.w=$e(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this.z=$e(this.z,e,t),this.w=$e(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class _p extends tr{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Gn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new at(0,0,e,t),this.scissorTest=!1,this.viewport=new at(0,0,e,t);const s={width:e,height:t,depth:i.depth},r=new kt(s);this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:Gn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new yc(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ls extends _p{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Kd extends kt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Un,this.minFilter=Un,this.wrapR=Ji,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class xp extends kt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Un,this.minFilter=Un,this.wrapR=Ji,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class nr{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(En.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(En.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=En.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,En):En.fromBufferAttribute(r,a),En.applyMatrix4(e.matrixWorld),this.expandByPoint(En);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),na.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),na.copy(i.boundingBox)),na.applyMatrix4(e.matrixWorld),this.union(na)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,En),En.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(dr),ia.subVectors(this.max,dr),gs.subVectors(e.a,dr),_s.subVectors(e.b,dr),xs.subVectors(e.c,dr),gi.subVectors(_s,gs),_i.subVectors(xs,_s),ki.subVectors(gs,xs);let t=[0,-gi.z,gi.y,0,-_i.z,_i.y,0,-ki.z,ki.y,gi.z,0,-gi.x,_i.z,0,-_i.x,ki.z,0,-ki.x,-gi.y,gi.x,0,-_i.y,_i.x,0,-ki.y,ki.x,0];return!Ao(t,gs,_s,xs,ia)||(t=[1,0,0,0,1,0,0,0,1],!Ao(t,gs,_s,xs,ia))?!1:(sa.crossVectors(gi,_i),t=[sa.x,sa.y,sa.z],Ao(t,gs,_s,xs,ia))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,En).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(En).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Zn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Zn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Zn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Zn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Zn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Zn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Zn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Zn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Zn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Zn=[new U,new U,new U,new U,new U,new U,new U,new U],En=new U,na=new nr,gs=new U,_s=new U,xs=new U,gi=new U,_i=new U,ki=new U,dr=new U,ia=new U,sa=new U,zi=new U;function Ao(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){zi.fromArray(n,r);const o=s.x*Math.abs(zi.x)+s.y*Math.abs(zi.y)+s.z*Math.abs(zi.z),c=e.dot(zi),l=t.dot(zi),h=i.dot(zi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const vp=new nr,ur=new U,Ro=new U;class ho{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):vp.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ur.subVectors(e,this.center);const t=ur.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(ur,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ro.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ur.copy(e.center).add(Ro)),this.expandByPoint(ur.copy(e.center).sub(Ro))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Jn=new U,Co=new U,ra=new U,xi=new U,Po=new U,aa=new U,Do=new U;class Mc{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Jn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Jn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Jn.copy(this.origin).addScaledVector(this.direction,t),Jn.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Co.copy(e).add(t).multiplyScalar(.5),ra.copy(t).sub(e).normalize(),xi.copy(this.origin).sub(Co);const r=e.distanceTo(t)*.5,a=-this.direction.dot(ra),o=xi.dot(this.direction),c=-xi.dot(ra),l=xi.lengthSq(),h=Math.abs(1-a*a);let d,u,f,g;if(h>0)if(d=a*c-o,u=a*o-c,g=r*h,d>=0)if(u>=-g)if(u<=g){const _=1/h;d*=_,u*=_,f=d*(d+a*u+2*o)+u*(a*d+u+2*c)+l}else u=r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*c)+l;else u=-r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*c)+l;else u<=-g?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-c),r),f=-d*d+u*(u+2*c)+l):u<=g?(d=0,u=Math.min(Math.max(-r,-c),r),f=u*(u+2*c)+l):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-c),r),f=-d*d+u*(u+2*c)+l);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Co).addScaledVector(ra,u),f}intersectSphere(e,t){Jn.subVectors(e.center,this.origin);const i=Jn.dot(this.direction),s=Jn.dot(Jn)-i*i,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,c;const l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return l>=0?(i=(e.min.x-u.x)*l,s=(e.max.x-u.x)*l):(i=(e.max.x-u.x)*l,s=(e.min.x-u.x)*l),h>=0?(r=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(e.min.z-u.z)*d,c=(e.max.z-u.z)*d):(o=(e.max.z-u.z)*d,c=(e.min.z-u.z)*d),i>c||o>s)||((o>i||i!==i)&&(i=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Jn)!==null}intersectTriangle(e,t,i,s,r){Po.subVectors(t,e),aa.subVectors(i,e),Do.crossVectors(Po,aa);let a=this.direction.dot(Do),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;xi.subVectors(this.origin,e);const c=o*this.direction.dot(aa.crossVectors(xi,aa));if(c<0)return null;const l=o*this.direction.dot(Po.cross(xi));if(l<0||c+l>a)return null;const h=-o*xi.dot(Do);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class dt{constructor(e,t,i,s,r,a,o,c,l,h,d,u,f,g,_,m){dt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,c,l,h,d,u,f,g,_,m)}set(e,t,i,s,r,a,o,c,l,h,d,u,f,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new dt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/vs.setFromMatrixColumn(e,0).length(),r=1/vs.setFromMatrixColumn(e,1).length(),a=1/vs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const u=a*h,f=a*d,g=o*h,_=o*d;t[0]=c*h,t[4]=-c*d,t[8]=l,t[1]=f+g*l,t[5]=u-_*l,t[9]=-o*c,t[2]=_-u*l,t[6]=g+f*l,t[10]=a*c}else if(e.order==="YXZ"){const u=c*h,f=c*d,g=l*h,_=l*d;t[0]=u+_*o,t[4]=g*o-f,t[8]=a*l,t[1]=a*d,t[5]=a*h,t[9]=-o,t[2]=f*o-g,t[6]=_+u*o,t[10]=a*c}else if(e.order==="ZXY"){const u=c*h,f=c*d,g=l*h,_=l*d;t[0]=u-_*o,t[4]=-a*d,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*h,t[9]=_-u*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const u=a*h,f=a*d,g=o*h,_=o*d;t[0]=c*h,t[4]=g*l-f,t[8]=u*l+_,t[1]=c*d,t[5]=_*l+u,t[9]=f*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const u=a*c,f=a*l,g=o*c,_=o*l;t[0]=c*h,t[4]=_-u*d,t[8]=g*d+f,t[1]=d,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=f*d+g,t[10]=u-_*d}else if(e.order==="XZY"){const u=a*c,f=a*l,g=o*c,_=o*l;t[0]=c*h,t[4]=-d,t[8]=l*h,t[1]=u*d+_,t[5]=a*h,t[9]=f*d-g,t[2]=g*d-f,t[6]=o*h,t[10]=_*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(yp,e,Mp)}lookAt(e,t,i){const s=this.elements;return hn.subVectors(e,t),hn.lengthSq()===0&&(hn.z=1),hn.normalize(),vi.crossVectors(i,hn),vi.lengthSq()===0&&(Math.abs(i.z)===1?hn.x+=1e-4:hn.z+=1e-4,hn.normalize(),vi.crossVectors(i,hn)),vi.normalize(),oa.crossVectors(hn,vi),s[0]=vi.x,s[4]=oa.x,s[8]=hn.x,s[1]=vi.y,s[5]=oa.y,s[9]=hn.y,s[2]=vi.z,s[6]=oa.z,s[10]=hn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],h=i[1],d=i[5],u=i[9],f=i[13],g=i[2],_=i[6],m=i[10],p=i[14],w=i[3],E=i[7],S=i[11],R=i[15],b=s[0],C=s[4],L=s[8],y=s[12],v=s[1],P=s[5],F=s[9],O=s[13],V=s[2],Y=s[6],W=s[10],ee=s[14],G=s[3],re=s[7],de=s[11],_e=s[15];return r[0]=a*b+o*v+c*V+l*G,r[4]=a*C+o*P+c*Y+l*re,r[8]=a*L+o*F+c*W+l*de,r[12]=a*y+o*O+c*ee+l*_e,r[1]=h*b+d*v+u*V+f*G,r[5]=h*C+d*P+u*Y+f*re,r[9]=h*L+d*F+u*W+f*de,r[13]=h*y+d*O+u*ee+f*_e,r[2]=g*b+_*v+m*V+p*G,r[6]=g*C+_*P+m*Y+p*re,r[10]=g*L+_*F+m*W+p*de,r[14]=g*y+_*O+m*ee+p*_e,r[3]=w*b+E*v+S*V+R*G,r[7]=w*C+E*P+S*Y+R*re,r[11]=w*L+E*F+S*W+R*de,r[15]=w*y+E*O+S*ee+R*_e,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],d=e[6],u=e[10],f=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+r*c*d-s*l*d-r*o*u+i*l*u+s*o*f-i*c*f)+_*(+t*c*f-t*l*u+r*a*u-s*a*f+s*l*h-r*c*h)+m*(+t*l*d-t*o*f-r*a*d+i*a*f+r*o*h-i*l*h)+p*(-s*o*h-t*c*d+t*o*u+s*a*d-i*a*u+i*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],d=e[9],u=e[10],f=e[11],g=e[12],_=e[13],m=e[14],p=e[15],w=d*m*l-_*u*l+_*c*f-o*m*f-d*c*p+o*u*p,E=g*u*l-h*m*l-g*c*f+a*m*f+h*c*p-a*u*p,S=h*_*l-g*d*l+g*o*f-a*_*f-h*o*p+a*d*p,R=g*d*c-h*_*c-g*o*u+a*_*u+h*o*m-a*d*m,b=t*w+i*E+s*S+r*R;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/b;return e[0]=w*C,e[1]=(_*u*r-d*m*r-_*s*f+i*m*f+d*s*p-i*u*p)*C,e[2]=(o*m*r-_*c*r+_*s*l-i*m*l-o*s*p+i*c*p)*C,e[3]=(d*c*r-o*u*r-d*s*l+i*u*l+o*s*f-i*c*f)*C,e[4]=E*C,e[5]=(h*m*r-g*u*r+g*s*f-t*m*f-h*s*p+t*u*p)*C,e[6]=(g*c*r-a*m*r-g*s*l+t*m*l+a*s*p-t*c*p)*C,e[7]=(a*u*r-h*c*r+h*s*l-t*u*l-a*s*f+t*c*f)*C,e[8]=S*C,e[9]=(g*d*r-h*_*r-g*i*f+t*_*f+h*i*p-t*d*p)*C,e[10]=(a*_*r-g*o*r+g*i*l-t*_*l-a*i*p+t*o*p)*C,e[11]=(h*o*r-a*d*r-h*i*l+t*d*l+a*i*f-t*o*f)*C,e[12]=R*C,e[13]=(h*_*s-g*d*s+g*i*u-t*_*u-h*i*m+t*d*m)*C,e[14]=(g*o*s-a*_*s-g*i*c+t*_*c+a*i*m-t*o*m)*C,e[15]=(a*d*s-h*o*s+h*i*c-t*d*c-a*i*u+t*o*u)*C,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,c=e.z,l=r*a,h=r*o;return this.set(l*a+i,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+i,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,h=a+a,d=o+o,u=r*l,f=r*h,g=r*d,_=a*h,m=a*d,p=o*d,w=c*l,E=c*h,S=c*d,R=i.x,b=i.y,C=i.z;return s[0]=(1-(_+p))*R,s[1]=(f+S)*R,s[2]=(g-E)*R,s[3]=0,s[4]=(f-S)*b,s[5]=(1-(u+p))*b,s[6]=(m+w)*b,s[7]=0,s[8]=(g+E)*C,s[9]=(m-w)*C,s[10]=(1-(u+_))*C,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let r=vs.set(s[0],s[1],s[2]).length();const a=vs.set(s[4],s[5],s[6]).length(),o=vs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],wn.copy(this);const l=1/r,h=1/a,d=1/o;return wn.elements[0]*=l,wn.elements[1]*=l,wn.elements[2]*=l,wn.elements[4]*=h,wn.elements[5]*=h,wn.elements[6]*=h,wn.elements[8]*=d,wn.elements[9]*=d,wn.elements[10]*=d,t.setFromRotationMatrix(wn),i.x=r,i.y=a,i.z=o,this}makePerspective(e,t,i,s,r,a,o=Vn,c=!1){const l=this.elements,h=2*r/(t-e),d=2*r/(i-s),u=(t+e)/(t-e),f=(i+s)/(i-s);let g,_;if(c)g=r/(a-r),_=a*r/(a-r);else if(o===Vn)g=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===Za)g=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=d,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=Vn,c=!1){const l=this.elements,h=2/(t-e),d=2/(i-s),u=-(t+e)/(t-e),f=-(i+s)/(i-s);let g,_;if(c)g=1/(a-r),_=a/(a-r);else if(o===Vn)g=-2/(a-r),_=-(a+r)/(a-r);else if(o===Za)g=-1/(a-r),_=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=u,l[1]=0,l[5]=d,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const vs=new U,wn=new dt,yp=new U(0,0,0),Mp=new U(1,1,1),vi=new U,oa=new U,hn=new U,lh=new dt,ch=new jr;class Xn{constructor(e=0,t=0,i=0,s=Xn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin($e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-$e(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin($e(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-$e(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin($e(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-$e(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return lh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(lh,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ch.setFromEuler(this),this.setFromQuaternion(ch,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Xn.DEFAULT_ORDER="XYZ";class Sc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Sp=0;const hh=new U,ys=new jr,Qn=new dt,la=new U,fr=new U,bp=new U,Ep=new jr,dh=new U(1,0,0),uh=new U(0,1,0),fh=new U(0,0,1),ph={type:"added"},wp={type:"removed"},Ms={type:"childadded",child:null},Lo={type:"childremoved",child:null};class Pt extends tr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Sp++}),this.uuid=hi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Pt.DEFAULT_UP.clone();const e=new U,t=new Xn,i=new jr,s=new U(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new dt},normalMatrix:{value:new Be}}),this.matrix=new dt,this.matrixWorld=new dt,this.matrixAutoUpdate=Pt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Sc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ys.setFromAxisAngle(e,t),this.quaternion.multiply(ys),this}rotateOnWorldAxis(e,t){return ys.setFromAxisAngle(e,t),this.quaternion.premultiply(ys),this}rotateX(e){return this.rotateOnAxis(dh,e)}rotateY(e){return this.rotateOnAxis(uh,e)}rotateZ(e){return this.rotateOnAxis(fh,e)}translateOnAxis(e,t){return hh.copy(e).applyQuaternion(this.quaternion),this.position.add(hh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(dh,e)}translateY(e){return this.translateOnAxis(uh,e)}translateZ(e){return this.translateOnAxis(fh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Qn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?la.copy(e):la.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),fr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qn.lookAt(fr,la,this.up):Qn.lookAt(la,fr,this.up),this.quaternion.setFromRotationMatrix(Qn),s&&(Qn.extractRotation(s.matrixWorld),ys.setFromRotationMatrix(Qn),this.quaternion.premultiply(ys.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ph),Ms.child=e,this.dispatchEvent(Ms),Ms.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(wp),Lo.child=e,this.dispatchEvent(Lo),Lo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Qn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Qn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Qn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ph),Ms.child=e,this.dispatchEvent(Ms),Ms.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fr,e,bp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fr,Ep,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const d=c[l];r(e.shapes,d)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),d=a(e.shapes),u=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=s,i;function a(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Pt.DEFAULT_UP=new U(0,1,0);Pt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Tn=new U,ei=new U,Io=new U,ti=new U,Ss=new U,bs=new U,mh=new U,Uo=new U,No=new U,Fo=new U,ko=new at,zo=new at,Oo=new at;class mn{constructor(e=new U,t=new U,i=new U){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Tn.subVectors(e,t),s.cross(Tn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Tn.subVectors(s,t),ei.subVectors(i,t),Io.subVectors(e,t);const a=Tn.dot(Tn),o=Tn.dot(ei),c=Tn.dot(Io),l=ei.dot(ei),h=ei.dot(Io),d=a*l-o*o;if(d===0)return r.set(0,0,0),null;const u=1/d,f=(l*c-o*h)*u,g=(a*h-o*c)*u;return r.set(1-f-g,g,f)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,ti)===null?!1:ti.x>=0&&ti.y>=0&&ti.x+ti.y<=1}static getInterpolation(e,t,i,s,r,a,o,c){return this.getBarycoord(e,t,i,s,ti)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,ti.x),c.addScaledVector(a,ti.y),c.addScaledVector(o,ti.z),c)}static getInterpolatedAttribute(e,t,i,s,r,a){return ko.setScalar(0),zo.setScalar(0),Oo.setScalar(0),ko.fromBufferAttribute(e,t),zo.fromBufferAttribute(e,i),Oo.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(ko,r.x),a.addScaledVector(zo,r.y),a.addScaledVector(Oo,r.z),a}static isFrontFacing(e,t,i,s){return Tn.subVectors(i,t),ei.subVectors(e,t),Tn.cross(ei).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Tn.subVectors(this.c,this.b),ei.subVectors(this.a,this.b),Tn.cross(ei).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return mn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return mn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return mn.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return mn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return mn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let a,o;Ss.subVectors(s,i),bs.subVectors(r,i),Uo.subVectors(e,i);const c=Ss.dot(Uo),l=bs.dot(Uo);if(c<=0&&l<=0)return t.copy(i);No.subVectors(e,s);const h=Ss.dot(No),d=bs.dot(No);if(h>=0&&d<=h)return t.copy(s);const u=c*d-h*l;if(u<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(i).addScaledVector(Ss,a);Fo.subVectors(e,r);const f=Ss.dot(Fo),g=bs.dot(Fo);if(g>=0&&f<=g)return t.copy(r);const _=f*l-c*g;if(_<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(i).addScaledVector(bs,o);const m=h*g-f*d;if(m<=0&&d-h>=0&&f-g>=0)return mh.subVectors(r,s),o=(d-h)/(d-h+(f-g)),t.copy(s).addScaledVector(mh,o);const p=1/(m+_+u);return a=_*p,o=u*p,t.copy(i).addScaledVector(Ss,a).addScaledVector(bs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const jd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},yi={h:0,s:0,l:0},ca={h:0,s:0,l:0};function Bo(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class qe{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=gt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=Je.workingColorSpace){return this.r=e,this.g=t,this.b=i,Je.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=Je.workingColorSpace){if(e=vc(e,1),t=$e(t,0,1),i=$e(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=Bo(a,r,e+1/3),this.g=Bo(a,r,e),this.b=Bo(a,r,e-1/3)}return Je.colorSpaceToWorking(this,s),this}setStyle(e,t=gt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=gt){const i=jd[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=di(e.r),this.g=di(e.g),this.b=di(e.b),this}copyLinearToSRGB(e){return this.r=Hs(e.r),this.g=Hs(e.g),this.b=Hs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=gt){return Je.workingToColorSpace(Bt.copy(this),e),Math.round($e(Bt.r*255,0,255))*65536+Math.round($e(Bt.g*255,0,255))*256+Math.round($e(Bt.b*255,0,255))}getHexString(e=gt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Je.workingColorSpace){Je.workingToColorSpace(Bt.copy(this),t);const i=Bt.r,s=Bt.g,r=Bt.b,a=Math.max(i,s,r),o=Math.min(i,s,r);let c,l;const h=(o+a)/2;if(o===a)c=0,l=0;else{const d=a-o;switch(l=h<=.5?d/(a+o):d/(2-a-o),a){case i:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-i)/d+2;break;case r:c=(i-s)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=Je.workingColorSpace){return Je.workingToColorSpace(Bt.copy(this),t),e.r=Bt.r,e.g=Bt.g,e.b=Bt.b,e}getStyle(e=gt){Je.workingToColorSpace(Bt.copy(this),e);const t=Bt.r,i=Bt.g,s=Bt.b;return e!==gt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(yi),this.setHSL(yi.h+e,yi.s+t,yi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(yi),e.getHSL(ca);const i=Dr(yi.h,ca.h,t),s=Dr(yi.s,ca.s,t),r=Dr(yi.l,ca.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Bt=new qe;qe.NAMES=jd;let Tp=0;class us extends tr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Tp++}),this.uuid=hi(),this.name="",this.type="Material",this.blending=Os,this.side=Di,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=dl,this.blendDst=ul,this.blendEquation=Ki,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qe(0,0,0),this.blendAlpha=0,this.depthFunc=Xs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=th,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ps,this.stencilZFail=ps,this.stencilZPass=ps,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Os&&(i.blending=this.blending),this.side!==Di&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==dl&&(i.blendSrc=this.blendSrc),this.blendDst!==ul&&(i.blendDst=this.blendDst),this.blendEquation!==Ki&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Xs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==th&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ps&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ps&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ps&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Tt extends us{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xn,this.combine=Nd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const At=new U,ha=new Ue;let Ap=0;class Nn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ap++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Zl,this.updateRanges=[],this.gpuType=ci,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ha.fromBufferAttribute(this,t),ha.applyMatrix3(e),this.setXY(t,ha.x,ha.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)At.fromBufferAttribute(this,t),At.applyMatrix3(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)At.fromBufferAttribute(this,t),At.applyMatrix4(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)At.fromBufferAttribute(this,t),At.applyNormalMatrix(e),this.setXYZ(t,At.x,At.y,At.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)At.fromBufferAttribute(this,t),At.transformDirection(e),this.setXYZ(t,At.x,At.y,At.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Dn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=nt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Dn(t,this.array)),t}setX(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Dn(t,this.array)),t}setY(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Dn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Dn(t,this.array)),t}setW(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=nt(t,this.array),i=nt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=nt(t,this.array),i=nt(i,this.array),s=nt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=nt(t,this.array),i=nt(i,this.array),s=nt(s,this.array),r=nt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Zl&&(e.usage=this.usage),e}}class Zd extends Nn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Jd extends Nn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class St extends Nn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Rp=0;const Mn=new dt,Ho=new Pt,Es=new U,dn=new nr,pr=new nr,Ut=new U;class on extends tr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Rp++}),this.uuid=hi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new($d(e)?Jd:Zd)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Be().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Mn.makeRotationFromQuaternion(e),this.applyMatrix4(Mn),this}rotateX(e){return Mn.makeRotationX(e),this.applyMatrix4(Mn),this}rotateY(e){return Mn.makeRotationY(e),this.applyMatrix4(Mn),this}rotateZ(e){return Mn.makeRotationZ(e),this.applyMatrix4(Mn),this}translate(e,t,i){return Mn.makeTranslation(e,t,i),this.applyMatrix4(Mn),this}scale(e,t,i){return Mn.makeScale(e,t,i),this.applyMatrix4(Mn),this}lookAt(e){return Ho.lookAt(e),Ho.updateMatrix(),this.applyMatrix4(Ho.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Es).negate(),this.translate(Es.x,Es.y,Es.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new St(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new nr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];dn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ut.addVectors(this.boundingBox.min,dn.min),this.boundingBox.expandByPoint(Ut),Ut.addVectors(this.boundingBox.max,dn.max),this.boundingBox.expandByPoint(Ut)):(this.boundingBox.expandByPoint(dn.min),this.boundingBox.expandByPoint(dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ho);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){const i=this.boundingSphere.center;if(dn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];pr.setFromBufferAttribute(o),this.morphTargetsRelative?(Ut.addVectors(dn.min,pr.min),dn.expandByPoint(Ut),Ut.addVectors(dn.max,pr.max),dn.expandByPoint(Ut)):(dn.expandByPoint(pr.min),dn.expandByPoint(pr.max))}dn.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)Ut.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Ut));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Ut.fromBufferAttribute(o,l),c&&(Es.fromBufferAttribute(e,l),Ut.add(Es)),s=Math.max(s,i.distanceToSquared(Ut))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Nn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let L=0;L<i.count;L++)o[L]=new U,c[L]=new U;const l=new U,h=new U,d=new U,u=new Ue,f=new Ue,g=new Ue,_=new U,m=new U;function p(L,y,v){l.fromBufferAttribute(i,L),h.fromBufferAttribute(i,y),d.fromBufferAttribute(i,v),u.fromBufferAttribute(r,L),f.fromBufferAttribute(r,y),g.fromBufferAttribute(r,v),h.sub(l),d.sub(l),f.sub(u),g.sub(u);const P=1/(f.x*g.y-g.x*f.y);isFinite(P)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(P),m.copy(d).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(P),o[L].add(_),o[y].add(_),o[v].add(_),c[L].add(m),c[y].add(m),c[v].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let L=0,y=w.length;L<y;++L){const v=w[L],P=v.start,F=v.count;for(let O=P,V=P+F;O<V;O+=3)p(e.getX(O+0),e.getX(O+1),e.getX(O+2))}const E=new U,S=new U,R=new U,b=new U;function C(L){R.fromBufferAttribute(s,L),b.copy(R);const y=o[L];E.copy(y),E.sub(R.multiplyScalar(R.dot(y))).normalize(),S.crossVectors(b,y);const P=S.dot(c[L])<0?-1:1;a.setXYZW(L,E.x,E.y,E.z,P)}for(let L=0,y=w.length;L<y;++L){const v=w[L],P=v.start,F=v.count;for(let O=P,V=P+F;O<V;O+=3)C(e.getX(O+0)),C(e.getX(O+1)),C(e.getX(O+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Nn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let u=0,f=i.count;u<f;u++)i.setXYZ(u,0,0,0);const s=new U,r=new U,a=new U,o=new U,c=new U,l=new U,h=new U,d=new U;if(e)for(let u=0,f=e.count;u<f;u+=3){const g=e.getX(u+0),_=e.getX(u+1),m=e.getX(u+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(i,g),c.fromBufferAttribute(i,_),l.fromBufferAttribute(i,m),o.add(h),c.add(h),l.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(_,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let u=0,f=t.count;u<f;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Ut.fromBufferAttribute(e,t),Ut.normalize(),e.setXYZ(t,Ut.x,Ut.y,Ut.z)}toNonIndexed(){function e(o,c){const l=o.array,h=o.itemSize,d=o.normalized,u=new l.constructor(c.length*h);let f=0,g=0;for(let _=0,m=c.length;_<m;_++){o.isInterleavedBufferAttribute?f=c[_]*o.data.stride+o.offset:f=c[_]*h;for(let p=0;p<h;p++)u[g++]=l[f++]}return new Nn(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new on,i=this.index.array,s=this.attributes;for(const o in s){const c=s[o],l=e(c,i);t.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let h=0,d=l.length;h<d;h++){const u=l[h],f=e(u,i);c.push(f)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let d=0,u=l.length;d<u;d++){const f=l[d];h.push(f.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(t))}const r=e.morphAttributes;for(const l in r){const h=[],d=r[l];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,h=a.length;l<h;l++){const d=a[l];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const gh=new dt,Oi=new Mc,da=new ho,_h=new U,ua=new U,fa=new U,pa=new U,Go=new U,ma=new U,xh=new U,ga=new U;class Ae extends Pt{constructor(e=new on,t=new Tt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){ma.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=o[c],d=r[c];h!==0&&(Go.fromBufferAttribute(d,e),a?ma.addScaledVector(Go,h):ma.addScaledVector(Go.sub(t),h))}t.add(ma)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),da.copy(i.boundingSphere),da.applyMatrix4(r),Oi.copy(e.ray).recast(e.near),!(da.containsPoint(Oi.origin)===!1&&(Oi.intersectSphere(da,_h)===null||Oi.origin.distanceToSquared(_h)>(e.far-e.near)**2))&&(gh.copy(r).invert(),Oi.copy(e.ray).applyMatrix4(gh),!(i.boundingBox!==null&&Oi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Oi)))}_computeIntersections(e,t,i){let s;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=u.length;g<_;g++){const m=u[g],p=a[m.materialIndex],w=Math.max(m.start,f.start),E=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let S=w,R=E;S<R;S+=3){const b=o.getX(S),C=o.getX(S+1),L=o.getX(S+2);s=_a(this,p,e,i,l,h,d,b,C,L),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const w=o.getX(m),E=o.getX(m+1),S=o.getX(m+2);s=_a(this,a,e,i,l,h,d,w,E,S),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,_=u.length;g<_;g++){const m=u[g],p=a[m.materialIndex],w=Math.max(m.start,f.start),E=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let S=w,R=E;S<R;S+=3){const b=S,C=S+1,L=S+2;s=_a(this,p,e,i,l,h,d,b,C,L),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const w=m,E=m+1,S=m+2;s=_a(this,a,e,i,l,h,d,w,E,S),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function Cp(n,e,t,i,s,r,a,o){let c;if(e.side===an?c=i.intersectTriangle(a,r,s,!0,o):c=i.intersectTriangle(s,r,a,e.side===Di,o),c===null)return null;ga.copy(o),ga.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(ga);return l<t.near||l>t.far?null:{distance:l,point:ga.clone(),object:n}}function _a(n,e,t,i,s,r,a,o,c,l){n.getVertexPosition(o,ua),n.getVertexPosition(c,fa),n.getVertexPosition(l,pa);const h=Cp(n,e,t,i,ua,fa,pa,xh);if(h){const d=new U;mn.getBarycoord(xh,ua,fa,pa,d),s&&(h.uv=mn.getInterpolatedAttribute(s,o,c,l,d,new Ue)),r&&(h.uv1=mn.getInterpolatedAttribute(r,o,c,l,d,new Ue)),a&&(h.normal=mn.getInterpolatedAttribute(a,o,c,l,d,new U),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:c,c:l,normal:new U,materialIndex:0};mn.getNormal(ua,fa,pa,u.normal),h.face=u,h.barycoord=d}return h}class qn extends on{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],h=[],d=[];let u=0,f=0;g("z","y","x",-1,-1,i,t,e,a,r,0),g("z","y","x",1,-1,i,t,-e,a,r,1),g("x","z","y",1,1,e,i,t,s,a,2),g("x","z","y",1,-1,e,i,-t,s,a,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new St(l,3)),this.setAttribute("normal",new St(h,3)),this.setAttribute("uv",new St(d,2));function g(_,m,p,w,E,S,R,b,C,L,y){const v=S/C,P=R/L,F=S/2,O=R/2,V=b/2,Y=C+1,W=L+1;let ee=0,G=0;const re=new U;for(let de=0;de<W;de++){const _e=de*P-O;for(let ce=0;ce<Y;ce++){const Fe=ce*v-F;re[_]=Fe*w,re[m]=_e*E,re[p]=V,l.push(re.x,re.y,re.z),re[_]=0,re[m]=0,re[p]=b>0?1:-1,h.push(re.x,re.y,re.z),d.push(ce/C),d.push(1-de/L),ee+=1}}for(let de=0;de<L;de++)for(let _e=0;_e<C;_e++){const ce=u+_e+Y*de,Fe=u+_e+Y*(de+1),We=u+(_e+1)+Y*(de+1),Qe=u+(_e+1)+Y*de;c.push(ce,Fe,Qe),c.push(Fe,We,Qe),G+=6}o.addGroup(f,G,y),f+=G,u+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ks(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function jt(n){const e={};for(let t=0;t<n.length;t++){const i=Ks(n[t]);for(const s in i)e[s]=i[s]}return e}function Pp(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Qd(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Je.workingColorSpace}const Dp={clone:Ks,merge:jt};var Lp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ip=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Li extends us{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Lp,this.fragmentShader=Ip,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ks(e.uniforms),this.uniformsGroups=Pp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class eu extends Pt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new dt,this.projectionMatrix=new dt,this.projectionMatrixInverse=new dt,this.coordinateSystem=Vn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Mi=new U,vh=new Ue,yh=new Ue;class pn extends eu{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Hr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Bs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Hr*2*Math.atan(Math.tan(Bs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Mi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Mi.x,Mi.y).multiplyScalar(-e/Mi.z),Mi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Mi.x,Mi.y).multiplyScalar(-e/Mi.z)}getViewSize(e,t){return this.getViewBounds(e,vh,yh),t.subVectors(yh,vh)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Bs*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*i/l,s*=a.width/c,i*=a.height/l}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ws=-90,Ts=1;class Up extends Pt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new pn(ws,Ts,e,t);s.layers=this.layers,this.add(s);const r=new pn(ws,Ts,e,t);r.layers=this.layers,this.add(r);const a=new pn(ws,Ts,e,t);a.layers=this.layers,this.add(a);const o=new pn(ws,Ts,e,t);o.layers=this.layers,this.add(o);const c=new pn(ws,Ts,e,t);c.layers=this.layers,this.add(c);const l=new pn(ws,Ts,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,c]=t;for(const l of t)this.remove(l);if(e===Vn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Za)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,a),e.setRenderTarget(i,2,s),e.render(t,o),e.setRenderTarget(i,3,s),e.render(t,c),e.setRenderTarget(i,4,s),e.render(t,l),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,s),e.render(t,h),e.setRenderTarget(d,u,f),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class tu extends kt{constructor(e=[],t=qs,i,s,r,a,o,c,l,h){super(e,t,i,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Np extends ls{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new tu(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new qn(5,5,5),r=new Li({name:"CubemapFromEquirect",uniforms:Ks(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:an,blending:Ai});r.uniforms.tEquirect.value=t;const a=new Ae(s,r),o=t.minFilter;return t.minFilter===Qi&&(t.minFilter=Gn),new Up(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}}class Vt extends Pt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Fp={type:"move"};class Vo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Vt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Vt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Vt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,i),p=this._getHandJoint(l,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;l.inputState.pinching&&u>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&u<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Fp)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Vt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class bc{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new qe(e),this.near=t,this.far=i}clone(){return new bc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class kp extends Pt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Xn,this.environmentIntensity=1,this.environmentRotation=new Xn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class zp{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Zl,this.updateRanges=[],this.version=0,this.uuid=hi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=hi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=hi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const $t=new U;class Ja{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix4(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)$t.fromBufferAttribute(this,t),$t.applyNormalMatrix(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)$t.fromBufferAttribute(this,t),$t.transformDirection(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=Dn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=nt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=nt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Dn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Dn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Dn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Dn(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=nt(t,this.array),i=nt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=nt(t,this.array),i=nt(i,this.array),s=nt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=nt(t,this.array),i=nt(i,this.array),s=nt(s,this.array),r=nt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Nn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Ja(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Qa extends us{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new qe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let As;const mr=new U,Rs=new U,Cs=new U,Ps=new Ue,gr=new Ue,nu=new dt,xa=new U,_r=new U,va=new U,Mh=new Ue,Wo=new Ue,Sh=new Ue;class Jl extends Pt{constructor(e=new Qa){if(super(),this.isSprite=!0,this.type="Sprite",As===void 0){As=new on;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new zp(t,5);As.setIndex([0,1,2,0,2,3]),As.setAttribute("position",new Ja(i,3,0,!1)),As.setAttribute("uv",new Ja(i,2,3,!1))}this.geometry=As,this.material=e,this.center=new Ue(.5,.5),this.count=1}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Rs.setFromMatrixScale(this.matrixWorld),nu.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Cs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Rs.multiplyScalar(-Cs.z);const i=this.material.rotation;let s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));const a=this.center;ya(xa.set(-.5,-.5,0),Cs,a,Rs,s,r),ya(_r.set(.5,-.5,0),Cs,a,Rs,s,r),ya(va.set(.5,.5,0),Cs,a,Rs,s,r),Mh.set(0,0),Wo.set(1,0),Sh.set(1,1);let o=e.ray.intersectTriangle(xa,_r,va,!1,mr);if(o===null&&(ya(_r.set(-.5,.5,0),Cs,a,Rs,s,r),Wo.set(0,1),o=e.ray.intersectTriangle(xa,va,_r,!1,mr),o===null))return;const c=e.ray.origin.distanceTo(mr);c<e.near||c>e.far||t.push({distance:c,point:mr.clone(),uv:mn.getInterpolation(mr,xa,_r,va,Mh,Wo,Sh,new Ue),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function ya(n,e,t,i,s,r){Ps.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(gr.x=r*Ps.x-s*Ps.y,gr.y=s*Ps.x+r*Ps.y):gr.copy(Ps),n.copy(e),n.x+=gr.x,n.y+=gr.y,n.applyMatrix4(nu)}const Xo=new U,Op=new U,Bp=new Be;class Wi{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=Xo.subVectors(i,t).cross(Op.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Xo),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Bp.getNormalMatrix(e),s=this.coplanarPoint(Xo).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Bi=new ho,Hp=new Ue(.5,.5),Ma=new U;class Ec{constructor(e=new Wi,t=new Wi,i=new Wi,s=new Wi,r=new Wi,a=new Wi){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Vn,i=!1){const s=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],l=r[3],h=r[4],d=r[5],u=r[6],f=r[7],g=r[8],_=r[9],m=r[10],p=r[11],w=r[12],E=r[13],S=r[14],R=r[15];if(s[0].setComponents(l-a,f-h,p-g,R-w).normalize(),s[1].setComponents(l+a,f+h,p+g,R+w).normalize(),s[2].setComponents(l+o,f+d,p+_,R+E).normalize(),s[3].setComponents(l-o,f-d,p-_,R-E).normalize(),i)s[4].setComponents(c,u,m,S).normalize(),s[5].setComponents(l-c,f-u,p-m,R-S).normalize();else if(s[4].setComponents(l-c,f-u,p-m,R-S).normalize(),t===Vn)s[5].setComponents(l+c,f+u,p+m,R+S).normalize();else if(t===Za)s[5].setComponents(c,u,m,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Bi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Bi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Bi)}intersectsSprite(e){Bi.center.set(0,0,0);const t=Hp.distanceTo(e.center);return Bi.radius=.7071067811865476+t,Bi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Bi)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(Ma.x=s.normal.x>0?e.max.x:e.min.x,Ma.y=s.normal.y>0?e.max.y:e.min.y,Ma.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ma)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class iu extends us{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new qe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const eo=new U,to=new U,bh=new dt,xr=new Mc,Sa=new ho,qo=new U,Eh=new U;class Gp extends Pt{constructor(e=new on,t=new iu){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)eo.fromBufferAttribute(t,s-1),to.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=eo.distanceTo(to);e.setAttribute("lineDistance",new St(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Sa.copy(i.boundingSphere),Sa.applyMatrix4(s),Sa.radius+=r,e.ray.intersectsSphere(Sa)===!1)return;bh.copy(s).invert(),xr.copy(e.ray).applyMatrix4(bh);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=i.index,u=i.attributes.position;if(h!==null){const f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let _=f,m=g-1;_<m;_+=l){const p=h.getX(_),w=h.getX(_+1),E=ba(this,e,xr,c,p,w,_);E&&t.push(E)}if(this.isLineLoop){const _=h.getX(g-1),m=h.getX(f),p=ba(this,e,xr,c,_,m,g-1);p&&t.push(p)}}else{const f=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let _=f,m=g-1;_<m;_+=l){const p=ba(this,e,xr,c,_,_+1,_);p&&t.push(p)}if(this.isLineLoop){const _=ba(this,e,xr,c,g-1,f,g-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function ba(n,e,t,i,s,r,a){const o=n.geometry.attributes.position;if(eo.fromBufferAttribute(o,s),to.fromBufferAttribute(o,r),t.distanceSqToSegment(eo,to,qo,Eh)>i)return;qo.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(qo);if(!(l<e.near||l>e.far))return{distance:l,point:Eh.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}const wh=new U,Th=new U;class Vp extends Gp{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)wh.fromBufferAttribute(t,s),Th.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+wh.distanceTo(Th);e.setAttribute("lineDistance",new St(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Ui extends kt{constructor(e,t,i,s,r,a,o,c,l){super(e,t,i,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class su extends kt{constructor(e,t,i=os,s,r,a,o=Un,c=Un,l,h=Or,d=1){if(h!==Or&&h!==Br)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:t,depth:d};super(u,s,r,a,o,c,h,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new yc(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class ru extends kt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class cs extends on{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);const r=[],a=[],o=[],c=[],l=new U,h=new Ue;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let d=0,u=3;d<=t;d++,u+=3){const f=i+d/t*s;l.x=e*Math.cos(f),l.y=e*Math.sin(f),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[u]/e+1)/2,h.y=(a[u+1]/e+1)/2,c.push(h.x,h.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new St(a,3)),this.setAttribute("normal",new St(o,3)),this.setAttribute("uv",new St(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cs(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Jt extends on{constructor(e=1,t=1,i=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const h=[],d=[],u=[],f=[];let g=0;const _=[],m=i/2;let p=0;w(),a===!1&&(e>0&&E(!0),t>0&&E(!1)),this.setIndex(h),this.setAttribute("position",new St(d,3)),this.setAttribute("normal",new St(u,3)),this.setAttribute("uv",new St(f,2));function w(){const S=new U,R=new U;let b=0;const C=(t-e)/i;for(let L=0;L<=r;L++){const y=[],v=L/r,P=v*(t-e)+e;for(let F=0;F<=s;F++){const O=F/s,V=O*c+o,Y=Math.sin(V),W=Math.cos(V);R.x=P*Y,R.y=-v*i+m,R.z=P*W,d.push(R.x,R.y,R.z),S.set(Y,C,W).normalize(),u.push(S.x,S.y,S.z),f.push(O,1-v),y.push(g++)}_.push(y)}for(let L=0;L<s;L++)for(let y=0;y<r;y++){const v=_[y][L],P=_[y+1][L],F=_[y+1][L+1],O=_[y][L+1];(e>0||y!==0)&&(h.push(v,P,O),b+=3),(t>0||y!==r-1)&&(h.push(P,F,O),b+=3)}l.addGroup(p,b,0),p+=b}function E(S){const R=g,b=new Ue,C=new U;let L=0;const y=S===!0?e:t,v=S===!0?1:-1;for(let F=1;F<=s;F++)d.push(0,m*v,0),u.push(0,v,0),f.push(.5,.5),g++;const P=g;for(let F=0;F<=s;F++){const V=F/s*c+o,Y=Math.cos(V),W=Math.sin(V);C.x=y*W,C.y=m*v,C.z=y*Y,d.push(C.x,C.y,C.z),u.push(0,v,0),b.x=Y*.5+.5,b.y=W*.5*v+.5,f.push(b.x,b.y),g++}for(let F=0;F<s;F++){const O=R+F,V=P+F;S===!0?h.push(V,V+1,O):h.push(V+1,V,O),L+=3}l.addGroup(p,L,S===!0?1:2),p+=L}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jt(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class wc extends Jt{constructor(e=1,t=1,i=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,i,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new wc(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}const Ea=new U,wa=new U,Yo=new U,Ta=new mn;class Wp extends on{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const s=Math.pow(10,4),r=Math.cos(Bs*t),a=e.getIndex(),o=e.getAttribute("position"),c=a?a.count:o.count,l=[0,0,0],h=["a","b","c"],d=new Array(3),u={},f=[];for(let g=0;g<c;g+=3){a?(l[0]=a.getX(g),l[1]=a.getX(g+1),l[2]=a.getX(g+2)):(l[0]=g,l[1]=g+1,l[2]=g+2);const{a:_,b:m,c:p}=Ta;if(_.fromBufferAttribute(o,l[0]),m.fromBufferAttribute(o,l[1]),p.fromBufferAttribute(o,l[2]),Ta.getNormal(Yo),d[0]=`${Math.round(_.x*s)},${Math.round(_.y*s)},${Math.round(_.z*s)}`,d[1]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,d[2]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let w=0;w<3;w++){const E=(w+1)%3,S=d[w],R=d[E],b=Ta[h[w]],C=Ta[h[E]],L=`${S}_${R}`,y=`${R}_${S}`;y in u&&u[y]?(Yo.dot(u[y].normal)<=r&&(f.push(b.x,b.y,b.z),f.push(C.x,C.y,C.z)),u[y]=null):L in u||(u[L]={index0:l[w],index1:l[E],normal:Yo.clone()})}}for(const g in u)if(u[g]){const{index0:_,index1:m}=u[g];Ea.fromBufferAttribute(o,_),wa.fromBufferAttribute(o,m),f.push(Ea.x,Ea.y,Ea.z),f.push(wa.x,wa.y,wa.z)}this.setAttribute("position",new St(f,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class qt extends on{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(i),c=Math.floor(s),l=o+1,h=c+1,d=e/o,u=t/c,f=[],g=[],_=[],m=[];for(let p=0;p<h;p++){const w=p*u-a;for(let E=0;E<l;E++){const S=E*d-r;g.push(S,-w,0),_.push(0,0,1),m.push(E/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let w=0;w<o;w++){const E=w+l*p,S=w+l*(p+1),R=w+1+l*(p+1),b=w+1+l*p;f.push(E,S,b),f.push(S,R,b)}this.setIndex(f),this.setAttribute("position",new St(g,3)),this.setAttribute("normal",new St(_,3)),this.setAttribute("uv",new St(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qt(e.width,e.height,e.widthSegments,e.heightSegments)}}class hs extends on{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const c=Math.min(a+o,Math.PI);let l=0;const h=[],d=new U,u=new U,f=[],g=[],_=[],m=[];for(let p=0;p<=i;p++){const w=[],E=p/i;let S=0;p===0&&a===0?S=.5/t:p===i&&c===Math.PI&&(S=-.5/t);for(let R=0;R<=t;R++){const b=R/t;d.x=-e*Math.cos(s+b*r)*Math.sin(a+E*o),d.y=e*Math.cos(a+E*o),d.z=e*Math.sin(s+b*r)*Math.sin(a+E*o),g.push(d.x,d.y,d.z),u.copy(d).normalize(),_.push(u.x,u.y,u.z),m.push(b+S,1-E),w.push(l++)}h.push(w)}for(let p=0;p<i;p++)for(let w=0;w<t;w++){const E=h[p][w+1],S=h[p][w],R=h[p+1][w],b=h[p+1][w+1];(p!==0||a>0)&&f.push(E,S,b),(p!==i-1||c<Math.PI)&&f.push(S,R,b)}this.setIndex(f),this.setAttribute("position",new St(g,3)),this.setAttribute("normal",new St(_,3)),this.setAttribute("uv",new St(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hs(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Tc extends on{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);const a=[],o=[],c=[],l=[],h=new U,d=new U,u=new U;for(let f=0;f<=i;f++)for(let g=0;g<=s;g++){const _=g/s*r,m=f/i*Math.PI*2;d.x=(e+t*Math.cos(m))*Math.cos(_),d.y=(e+t*Math.cos(m))*Math.sin(_),d.z=t*Math.sin(m),o.push(d.x,d.y,d.z),h.x=e*Math.cos(_),h.y=e*Math.sin(_),u.subVectors(d,h).normalize(),c.push(u.x,u.y,u.z),l.push(g/s),l.push(f/i)}for(let f=1;f<=i;f++)for(let g=1;g<=s;g++){const _=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,p=(s+1)*(f-1)+g,w=(s+1)*f+g;a.push(_,m,w),a.push(m,p,w)}this.setIndex(a),this.setAttribute("position",new St(o,3)),this.setAttribute("normal",new St(c,3)),this.setAttribute("uv",new St(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Tc(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class fi extends us{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new qe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qd,this.normalScale=new Ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class au extends us{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Bf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Xp extends us{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const $o={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class qp{constructor(e,t,i){const s=this;let r=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.abortController=new AbortController,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,d){return l.push(h,d),this},this.removeHandler=function(h){const d=l.indexOf(h);return d!==-1&&l.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=l.length;d<u;d+=2){const f=l[d],g=l[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const Yp=new qp;class Ac{constructor(e){this.manager=e!==void 0?e:Yp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Ac.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ds=new WeakMap;class $p extends Ac{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=$o.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let d=Ds.get(a);d===void 0&&(d=[],Ds.set(a,d)),d.push({onLoad:t,onError:s})}return a}const o=Gr("img");function c(){h(),t&&t(this);const d=Ds.get(this)||[];for(let u=0;u<d.length;u++){const f=d[u];f.onLoad&&f.onLoad(this)}Ds.delete(this),r.manager.itemEnd(e)}function l(d){h(),s&&s(d),$o.remove(`image:${e}`);const u=Ds.get(this)||[];for(let f=0;f<u.length;f++){const g=u[f];g.onError&&g.onError(d)}Ds.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),$o.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}}class ou extends Ac{constructor(e){super(e)}load(e,t,i,s){const r=new kt,a=new $p(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}}class Rc extends Pt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new qe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Kp extends Rc{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Pt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new qe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Ko=new dt,Ah=new U,Rh=new U;class lu{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ue(512,512),this.mapType=Wn,this.map=null,this.mapPass=null,this.matrix=new dt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ec,this._frameExtents=new Ue(1,1),this._viewportCount=1,this._viewports=[new at(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Ah.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ah),Rh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Rh),t.updateMatrixWorld(),Ko.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ko,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ko)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Ch=new dt,vr=new U,jo=new U;class jp extends lu{constructor(){super(new pn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ue(4,2),this._viewportCount=6,this._viewports=[new at(2,1,1,1),new at(0,1,1,1),new at(3,1,1,1),new at(1,1,1,1),new at(3,0,1,1),new at(1,0,1,1)],this._cubeDirections=[new U(1,0,0),new U(-1,0,0),new U(0,0,1),new U(0,0,-1),new U(0,1,0),new U(0,-1,0)],this._cubeUps=[new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,0,1),new U(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),vr.setFromMatrixPosition(e.matrixWorld),i.position.copy(vr),jo.copy(i.position),jo.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(jo),i.updateMatrixWorld(),s.makeTranslation(-vr.x,-vr.y,-vr.z),Ch.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ch,i.coordinateSystem,i.reversedDepth)}}class Cc extends Rc{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new jp}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class cu extends eu{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,a=i+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Zp extends lu{constructor(){super(new cu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Jp extends Rc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Pt.DEFAULT_UP),this.updateMatrix(),this.target=new Pt,this.shadow=new Zp}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Qp extends pn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class em{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const Ph=new dt;class tm{constructor(e,t,i=0,s=1/0){this.ray=new Mc(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new Sc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Ph.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ph),this}intersectObject(e,t=!0,i=[]){return Ql(e,this,i,t),i.sort(Dh),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)Ql(e[s],this,i,t);return i.sort(Dh),i}}function Dh(n,e){return n.distance-e.distance}function Ql(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let a=0,o=r.length;a<o;a++)Ql(r[a],e,t,!0)}}function Lh(n,e,t,i){const s=nm(i);switch(t){case Hd:return n*e;case Vd:return n*e/s.components*s.byteLength;case gc:return n*e/s.components*s.byteLength;case Wd:return n*e*2/s.components*s.byteLength;case _c:return n*e*2/s.components*s.byteLength;case Gd:return n*e*3/s.components*s.byteLength;case In:return n*e*4/s.components*s.byteLength;case xc:return n*e*4/s.components*s.byteLength;case Ha:case Ga:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Va:case Wa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case El:case Tl:return Math.max(n,16)*Math.max(e,8)/4;case bl:case wl:return Math.max(n,8)*Math.max(e,8)/2;case Al:case Rl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Cl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Pl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Dl:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Ll:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Il:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Ul:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Nl:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Fl:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case kl:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case zl:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Ol:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Bl:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Hl:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Gl:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Vl:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Wl:case Xl:case ql:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Yl:case $l:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Kl:case jl:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function nm(n){switch(n){case Wn:case kd:return{byteLength:1,components:1};case kr:case zd:case Kr:return{byteLength:2,components:1};case pc:case mc:return{byteLength:2,components:4};case os:case fc:case ci:return{byteLength:4,components:1};case Od:case Bd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:uc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=uc);function hu(){let n=null,e=!1,t=null,i=null;function s(r,a){t(r,a),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function im(n){const e=new WeakMap;function t(o,c){const l=o.array,h=o.usage,d=l.byteLength,u=n.createBuffer();n.bindBuffer(c,u),n.bufferData(c,l,h),o.onUploadCallback();let f;if(l instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=n.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=n.SHORT;else if(l instanceof Uint32Array)f=n.UNSIGNED_INT;else if(l instanceof Int32Array)f=n.INT;else if(l instanceof Int8Array)f=n.BYTE;else if(l instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,c,l){const h=c.array,d=c.updateRanges;if(n.bindBuffer(l,o),d.length===0)n.bufferSubData(l,0,h);else{d.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<d.length;f++){const g=d[u],_=d[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++u,d[u]=_)}d.length=u+1;for(let f=0,g=d.length;f<g;f++){const _=d[f];n.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(n.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var sm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,rm=`#ifdef USE_ALPHAHASH
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
#endif`,am=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,om=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,lm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,cm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,hm=`#ifdef USE_AOMAP
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
#endif`,dm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,um=`#ifdef USE_BATCHING
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
#endif`,fm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,pm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,mm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,gm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,_m=`#ifdef USE_IRIDESCENCE
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
#endif`,xm=`#ifdef USE_BUMPMAP
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
#endif`,vm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ym=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Mm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Sm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,bm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Em=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,wm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Tm=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Am=`#define PI 3.141592653589793
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
} // validated`,Rm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Cm=`vec3 transformedNormal = objectNormal;
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
#endif`,Pm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Dm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Lm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Im=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Um="gl_FragColor = linearToOutputTexel( gl_FragColor );",Nm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Fm=`#ifdef USE_ENVMAP
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
#endif`,km=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,zm=`#ifdef USE_ENVMAP
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
#endif`,Om=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Bm=`#ifdef USE_ENVMAP
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
#endif`,Hm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Gm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Vm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Wm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Xm=`#ifdef USE_GRADIENTMAP
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
}`,qm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ym=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,$m=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Km=`uniform bool receiveShadow;
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
#endif`,jm=`#ifdef USE_ENVMAP
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
#endif`,Zm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Jm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Qm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,e0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,t0=`PhysicalMaterial material;
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
#endif`,n0=`struct PhysicalMaterial {
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
}`,i0=`
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
#endif`,s0=`#if defined( RE_IndirectDiffuse )
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
#endif`,r0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,a0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,o0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,l0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,c0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,h0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,d0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,u0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,f0=`#if defined( USE_POINTS_UV )
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
#endif`,p0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,m0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,g0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,_0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,x0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,v0=`#ifdef USE_MORPHTARGETS
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
#endif`,y0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,M0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,S0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,b0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,E0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,w0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,T0=`#ifdef USE_NORMALMAP
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
#endif`,A0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,R0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,C0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,P0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,D0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,L0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,I0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,U0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,N0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,F0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,k0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,z0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,O0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,B0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,H0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,G0=`float getShadowMask() {
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
}`,V0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,W0=`#ifdef USE_SKINNING
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
#endif`,X0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,q0=`#ifdef USE_SKINNING
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
#endif`,Y0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,$0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,K0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,j0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Z0=`#ifdef USE_TRANSMISSION
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
#endif`,J0=`#ifdef USE_TRANSMISSION
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
#endif`,Q0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,eg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ng=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ig=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,sg=`uniform sampler2D t2D;
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
}`,rg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ag=`#ifdef ENVMAP_TYPE_CUBE
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
}`,og=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cg=`#include <common>
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
}`,hg=`#if DEPTH_PACKING == 3200
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
}`,dg=`#define DISTANCE
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
}`,ug=`#define DISTANCE
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
}`,fg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,pg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mg=`uniform float scale;
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
}`,gg=`uniform vec3 diffuse;
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
}`,_g=`#include <common>
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
}`,xg=`uniform vec3 diffuse;
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
}`,vg=`#define LAMBERT
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
}`,yg=`#define LAMBERT
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
}`,Mg=`#define MATCAP
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
}`,Sg=`#define MATCAP
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
}`,bg=`#define NORMAL
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
}`,Eg=`#define NORMAL
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
}`,wg=`#define PHONG
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
}`,Tg=`#define PHONG
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
}`,Ag=`#define STANDARD
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
}`,Rg=`#define STANDARD
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
}`,Cg=`#define TOON
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
}`,Pg=`#define TOON
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
}`,Dg=`uniform float size;
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
}`,Lg=`uniform vec3 diffuse;
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
}`,Ig=`#include <common>
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
}`,Ug=`uniform vec3 color;
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
}`,Ng=`uniform float rotation;
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
}`,Fg=`uniform vec3 diffuse;
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
}`,Ve={alphahash_fragment:sm,alphahash_pars_fragment:rm,alphamap_fragment:am,alphamap_pars_fragment:om,alphatest_fragment:lm,alphatest_pars_fragment:cm,aomap_fragment:hm,aomap_pars_fragment:dm,batching_pars_vertex:um,batching_vertex:fm,begin_vertex:pm,beginnormal_vertex:mm,bsdfs:gm,iridescence_fragment:_m,bumpmap_pars_fragment:xm,clipping_planes_fragment:vm,clipping_planes_pars_fragment:ym,clipping_planes_pars_vertex:Mm,clipping_planes_vertex:Sm,color_fragment:bm,color_pars_fragment:Em,color_pars_vertex:wm,color_vertex:Tm,common:Am,cube_uv_reflection_fragment:Rm,defaultnormal_vertex:Cm,displacementmap_pars_vertex:Pm,displacementmap_vertex:Dm,emissivemap_fragment:Lm,emissivemap_pars_fragment:Im,colorspace_fragment:Um,colorspace_pars_fragment:Nm,envmap_fragment:Fm,envmap_common_pars_fragment:km,envmap_pars_fragment:zm,envmap_pars_vertex:Om,envmap_physical_pars_fragment:jm,envmap_vertex:Bm,fog_vertex:Hm,fog_pars_vertex:Gm,fog_fragment:Vm,fog_pars_fragment:Wm,gradientmap_pars_fragment:Xm,lightmap_pars_fragment:qm,lights_lambert_fragment:Ym,lights_lambert_pars_fragment:$m,lights_pars_begin:Km,lights_toon_fragment:Zm,lights_toon_pars_fragment:Jm,lights_phong_fragment:Qm,lights_phong_pars_fragment:e0,lights_physical_fragment:t0,lights_physical_pars_fragment:n0,lights_fragment_begin:i0,lights_fragment_maps:s0,lights_fragment_end:r0,logdepthbuf_fragment:a0,logdepthbuf_pars_fragment:o0,logdepthbuf_pars_vertex:l0,logdepthbuf_vertex:c0,map_fragment:h0,map_pars_fragment:d0,map_particle_fragment:u0,map_particle_pars_fragment:f0,metalnessmap_fragment:p0,metalnessmap_pars_fragment:m0,morphinstance_vertex:g0,morphcolor_vertex:_0,morphnormal_vertex:x0,morphtarget_pars_vertex:v0,morphtarget_vertex:y0,normal_fragment_begin:M0,normal_fragment_maps:S0,normal_pars_fragment:b0,normal_pars_vertex:E0,normal_vertex:w0,normalmap_pars_fragment:T0,clearcoat_normal_fragment_begin:A0,clearcoat_normal_fragment_maps:R0,clearcoat_pars_fragment:C0,iridescence_pars_fragment:P0,opaque_fragment:D0,packing:L0,premultiplied_alpha_fragment:I0,project_vertex:U0,dithering_fragment:N0,dithering_pars_fragment:F0,roughnessmap_fragment:k0,roughnessmap_pars_fragment:z0,shadowmap_pars_fragment:O0,shadowmap_pars_vertex:B0,shadowmap_vertex:H0,shadowmask_pars_fragment:G0,skinbase_vertex:V0,skinning_pars_vertex:W0,skinning_vertex:X0,skinnormal_vertex:q0,specularmap_fragment:Y0,specularmap_pars_fragment:$0,tonemapping_fragment:K0,tonemapping_pars_fragment:j0,transmission_fragment:Z0,transmission_pars_fragment:J0,uv_pars_fragment:Q0,uv_pars_vertex:eg,uv_vertex:tg,worldpos_vertex:ng,background_vert:ig,background_frag:sg,backgroundCube_vert:rg,backgroundCube_frag:ag,cube_vert:og,cube_frag:lg,depth_vert:cg,depth_frag:hg,distanceRGBA_vert:dg,distanceRGBA_frag:ug,equirect_vert:fg,equirect_frag:pg,linedashed_vert:mg,linedashed_frag:gg,meshbasic_vert:_g,meshbasic_frag:xg,meshlambert_vert:vg,meshlambert_frag:yg,meshmatcap_vert:Mg,meshmatcap_frag:Sg,meshnormal_vert:bg,meshnormal_frag:Eg,meshphong_vert:wg,meshphong_frag:Tg,meshphysical_vert:Ag,meshphysical_frag:Rg,meshtoon_vert:Cg,meshtoon_frag:Pg,points_vert:Dg,points_frag:Lg,shadow_vert:Ig,shadow_frag:Ug,sprite_vert:Ng,sprite_frag:Fg},ae={common:{diffuse:{value:new qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Be}},envmap:{envMap:{value:null},envMapRotation:{value:new Be},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Be}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Be}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Be},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Be},normalScale:{value:new Ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Be},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Be}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Be}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Be}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0},uvTransform:{value:new Be}},sprite:{diffuse:{value:new qe(16777215)},opacity:{value:1},center:{value:new Ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}}},Bn={basic:{uniforms:jt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:jt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new qe(0)}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:jt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new qe(0)},specular:{value:new qe(1118481)},shininess:{value:30}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:jt([ae.common,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.roughnessmap,ae.metalnessmap,ae.fog,ae.lights,{emissive:{value:new qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:jt([ae.common,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.gradientmap,ae.fog,ae.lights,{emissive:{value:new qe(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:jt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:jt([ae.points,ae.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:jt([ae.common,ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:jt([ae.common,ae.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:jt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:jt([ae.sprite,ae.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new Be},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Be}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distanceRGBA:{uniforms:jt([ae.common,ae.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distanceRGBA_vert,fragmentShader:Ve.distanceRGBA_frag},shadow:{uniforms:jt([ae.lights,ae.fog,{color:{value:new qe(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};Bn.physical={uniforms:jt([Bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Be},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Be},clearcoatNormalScale:{value:new Ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Be},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Be},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Be},sheen:{value:0},sheenColor:{value:new qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Be},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Be},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Be},transmissionSamplerSize:{value:new Ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Be},attenuationDistance:{value:0},attenuationColor:{value:new qe(0)},specularColor:{value:new qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Be},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Be},anisotropyVector:{value:new Ue},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Be}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};const Aa={r:0,b:0,g:0},Hi=new Xn,kg=new dt;function zg(n,e,t,i,s,r,a){const o=new qe(0);let c=r===!0?0:1,l,h,d=null,u=0,f=null;function g(E){let S=E.isScene===!0?E.background:null;return S&&S.isTexture&&(S=(E.backgroundBlurriness>0?t:e).get(S)),S}function _(E){let S=!1;const R=g(E);R===null?p(o,c):R&&R.isColor&&(p(R,1),S=!0);const b=n.xr.getEnvironmentBlendMode();b==="additive"?i.buffers.color.setClear(0,0,0,1,a):b==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||S)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(E,S){const R=g(S);R&&(R.isCubeTexture||R.mapping===co)?(h===void 0&&(h=new Ae(new qn(1,1,1),new Li({name:"BackgroundCubeMaterial",uniforms:Ks(Bn.backgroundCube.uniforms),vertexShader:Bn.backgroundCube.vertexShader,fragmentShader:Bn.backgroundCube.fragmentShader,side:an,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(b,C,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Hi.copy(S.backgroundRotation),Hi.x*=-1,Hi.y*=-1,Hi.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(Hi.y*=-1,Hi.z*=-1),h.material.uniforms.envMap.value=R,h.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(kg.makeRotationFromEuler(Hi)),h.material.toneMapped=Je.getTransfer(R.colorSpace)!==st,(d!==R||u!==R.version||f!==n.toneMapping)&&(h.material.needsUpdate=!0,d=R,u=R.version,f=n.toneMapping),h.layers.enableAll(),E.unshift(h,h.geometry,h.material,0,0,null)):R&&R.isTexture&&(l===void 0&&(l=new Ae(new qt(2,2),new Li({name:"BackgroundMaterial",uniforms:Ks(Bn.background.uniforms),vertexShader:Bn.background.vertexShader,fragmentShader:Bn.background.fragmentShader,side:Di,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=R,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=Je.getTransfer(R.colorSpace)!==st,R.matrixAutoUpdate===!0&&R.updateMatrix(),l.material.uniforms.uvTransform.value.copy(R.matrix),(d!==R||u!==R.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,d=R,u=R.version,f=n.toneMapping),l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null))}function p(E,S){E.getRGB(Aa,Qd(n)),i.buffers.color.setClear(Aa.r,Aa.g,Aa.b,S,a)}function w(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(E,S=1){o.set(E),c=S,p(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(E){c=E,p(o,c)},render:_,addToRenderList:m,dispose:w}}function Og(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=u(null);let r=s,a=!1;function o(v,P,F,O,V){let Y=!1;const W=d(O,F,P);r!==W&&(r=W,l(r.object)),Y=f(v,O,F,V),Y&&g(v,O,F,V),V!==null&&e.update(V,n.ELEMENT_ARRAY_BUFFER),(Y||a)&&(a=!1,S(v,P,F,O),V!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function c(){return n.createVertexArray()}function l(v){return n.bindVertexArray(v)}function h(v){return n.deleteVertexArray(v)}function d(v,P,F){const O=F.wireframe===!0;let V=i[v.id];V===void 0&&(V={},i[v.id]=V);let Y=V[P.id];Y===void 0&&(Y={},V[P.id]=Y);let W=Y[O];return W===void 0&&(W=u(c()),Y[O]=W),W}function u(v){const P=[],F=[],O=[];for(let V=0;V<t;V++)P[V]=0,F[V]=0,O[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:F,attributeDivisors:O,object:v,attributes:{},index:null}}function f(v,P,F,O){const V=r.attributes,Y=P.attributes;let W=0;const ee=F.getAttributes();for(const G in ee)if(ee[G].location>=0){const de=V[G];let _e=Y[G];if(_e===void 0&&(G==="instanceMatrix"&&v.instanceMatrix&&(_e=v.instanceMatrix),G==="instanceColor"&&v.instanceColor&&(_e=v.instanceColor)),de===void 0||de.attribute!==_e||_e&&de.data!==_e.data)return!0;W++}return r.attributesNum!==W||r.index!==O}function g(v,P,F,O){const V={},Y=P.attributes;let W=0;const ee=F.getAttributes();for(const G in ee)if(ee[G].location>=0){let de=Y[G];de===void 0&&(G==="instanceMatrix"&&v.instanceMatrix&&(de=v.instanceMatrix),G==="instanceColor"&&v.instanceColor&&(de=v.instanceColor));const _e={};_e.attribute=de,de&&de.data&&(_e.data=de.data),V[G]=_e,W++}r.attributes=V,r.attributesNum=W,r.index=O}function _(){const v=r.newAttributes;for(let P=0,F=v.length;P<F;P++)v[P]=0}function m(v){p(v,0)}function p(v,P){const F=r.newAttributes,O=r.enabledAttributes,V=r.attributeDivisors;F[v]=1,O[v]===0&&(n.enableVertexAttribArray(v),O[v]=1),V[v]!==P&&(n.vertexAttribDivisor(v,P),V[v]=P)}function w(){const v=r.newAttributes,P=r.enabledAttributes;for(let F=0,O=P.length;F<O;F++)P[F]!==v[F]&&(n.disableVertexAttribArray(F),P[F]=0)}function E(v,P,F,O,V,Y,W){W===!0?n.vertexAttribIPointer(v,P,F,V,Y):n.vertexAttribPointer(v,P,F,O,V,Y)}function S(v,P,F,O){_();const V=O.attributes,Y=F.getAttributes(),W=P.defaultAttributeValues;for(const ee in Y){const G=Y[ee];if(G.location>=0){let re=V[ee];if(re===void 0&&(ee==="instanceMatrix"&&v.instanceMatrix&&(re=v.instanceMatrix),ee==="instanceColor"&&v.instanceColor&&(re=v.instanceColor)),re!==void 0){const de=re.normalized,_e=re.itemSize,ce=e.get(re);if(ce===void 0)continue;const Fe=ce.buffer,We=ce.type,Qe=ce.bytesPerElement,$=We===n.INT||We===n.UNSIGNED_INT||re.gpuType===fc;if(re.isInterleavedBufferAttribute){const Z=re.data,pe=Z.stride,Ne=re.offset;if(Z.isInstancedInterleavedBuffer){for(let we=0;we<G.locationSize;we++)p(G.location+we,Z.meshPerAttribute);v.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let we=0;we<G.locationSize;we++)m(G.location+we);n.bindBuffer(n.ARRAY_BUFFER,Fe);for(let we=0;we<G.locationSize;we++)E(G.location+we,_e/G.locationSize,We,de,pe*Qe,(Ne+_e/G.locationSize*we)*Qe,$)}else{if(re.isInstancedBufferAttribute){for(let Z=0;Z<G.locationSize;Z++)p(G.location+Z,re.meshPerAttribute);v.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let Z=0;Z<G.locationSize;Z++)m(G.location+Z);n.bindBuffer(n.ARRAY_BUFFER,Fe);for(let Z=0;Z<G.locationSize;Z++)E(G.location+Z,_e/G.locationSize,We,de,_e*Qe,_e/G.locationSize*Z*Qe,$)}}else if(W!==void 0){const de=W[ee];if(de!==void 0)switch(de.length){case 2:n.vertexAttrib2fv(G.location,de);break;case 3:n.vertexAttrib3fv(G.location,de);break;case 4:n.vertexAttrib4fv(G.location,de);break;default:n.vertexAttrib1fv(G.location,de)}}}}w()}function R(){L();for(const v in i){const P=i[v];for(const F in P){const O=P[F];for(const V in O)h(O[V].object),delete O[V];delete P[F]}delete i[v]}}function b(v){if(i[v.id]===void 0)return;const P=i[v.id];for(const F in P){const O=P[F];for(const V in O)h(O[V].object),delete O[V];delete P[F]}delete i[v.id]}function C(v){for(const P in i){const F=i[P];if(F[v.id]===void 0)continue;const O=F[v.id];for(const V in O)h(O[V].object),delete O[V];delete F[v.id]}}function L(){y(),a=!0,r!==s&&(r=s,l(r.object))}function y(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:L,resetDefaultState:y,dispose:R,releaseStatesOfGeometry:b,releaseStatesOfProgram:C,initAttributes:_,enableAttribute:m,disableUnusedAttributes:w}}function Bg(n,e,t){let i;function s(l){i=l}function r(l,h){n.drawArrays(i,l,h),t.update(h,i,1)}function a(l,h,d){d!==0&&(n.drawArraysInstanced(i,l,h,d),t.update(h,i,d))}function o(l,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,h,0,d);let f=0;for(let g=0;g<d;g++)f+=h[g];t.update(f,i,1)}function c(l,h,d,u){if(d===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)a(l[g],h[g],u[g]);else{f.multiDrawArraysInstancedWEBGL(i,l,0,h,0,u,0,d);let g=0;for(let _=0;_<d;_++)g+=h[_]*u[_];t.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function Hg(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(C){return!(C!==In&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const L=C===Kr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Wn&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==ci&&!L)}function c(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const d=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),w=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),E=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),R=g>0,b=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:w,maxVaryings:E,maxFragmentUniforms:S,vertexTextures:R,maxSamples:b}}function Gg(n){const e=this;let t=null,i=0,s=!1,r=!1;const a=new Wi,o=new Be,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const f=d.length!==0||u||i!==0||s;return s=u,i=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,f){const g=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,p=n.get(d);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{const w=r?0:i,E=w*4;let S=p.clippingState||null;c.value=S,S=h(g,u,E,f);for(let R=0;R!==E;++R)S[R]=t[R];p.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=w}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(d,u,f,g){const _=d!==null?d.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const p=f+_*4,w=u.matrixWorldInverse;o.getNormalMatrix(w),(m===null||m.length<p)&&(m=new Float32Array(p));for(let E=0,S=f;E!==_;++E,S+=4)a.copy(d[E]).applyMatrix4(w,o),a.normal.toArray(m,S),m[S+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function Vg(n){let e=new WeakMap;function t(a,o){return o===yl?a.mapping=qs:o===Ml&&(a.mapping=Ys),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===yl||o===Ml)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new Np(c.height);return l.fromEquirectangularTexture(n,a),e.set(a,l),a.addEventListener("dispose",s),t(l.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}const Fs=4,Ih=[.125,.215,.35,.446,.526,.582],ji=20,Zo=new cu,Uh=new qe;let Jo=null,Qo=0,el=0,tl=!1;const Xi=(1+Math.sqrt(5))/2,Ls=1/Xi,Nh=[new U(-Xi,Ls,0),new U(Xi,Ls,0),new U(-Ls,0,Xi),new U(Ls,0,Xi),new U(0,Xi,-Ls),new U(0,Xi,Ls),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)],Wg=new U;class Fh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100,r={}){const{size:a=256,position:o=Wg}=r;Jo=this._renderer.getRenderTarget(),Qo=this._renderer.getActiveCubeFace(),el=this._renderer.getActiveMipmapLevel(),tl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,s,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Oh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=zh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Jo,Qo,el),this._renderer.xr.enabled=tl,e.scissorTest=!1,Ra(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===qs||e.mapping===Ys?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Jo=this._renderer.getRenderTarget(),Qo=this._renderer.getActiveCubeFace(),el=this._renderer.getActiveMipmapLevel(),tl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Gn,minFilter:Gn,generateMipmaps:!1,type:Kr,format:In,colorSpace:$s,depthBuffer:!1},s=kh(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=kh(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Xg(r)),this._blurMaterial=qg(r,e,t)}return s}_compileMaterial(e){const t=new Ae(this._lodPlanes[0],e);this._renderer.compile(t,Zo)}_sceneToCubeUV(e,t,i,s,r){const c=new pn(90,1,t,i),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(Uh),d.toneMapping=Ri,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null));const _=new Tt({name:"PMREM.Background",side:an,depthWrite:!1,depthTest:!1}),m=new Ae(new qn,_);let p=!1;const w=e.background;w?w.isColor&&(_.color.copy(w),e.background=null,p=!0):(_.color.copy(Uh),p=!0);for(let E=0;E<6;E++){const S=E%3;S===0?(c.up.set(0,l[E],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[E],r.y,r.z)):S===1?(c.up.set(0,0,l[E]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[E],r.z)):(c.up.set(0,l[E],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[E]));const R=this._cubeSize;Ra(s,S*R,E>2?R:0,R,R),d.setRenderTarget(s),p&&d.render(m,c),d.render(e,c)}m.geometry.dispose(),m.material.dispose(),d.toneMapping=f,d.autoClear=u,e.background=w}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===qs||e.mapping===Ys;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Oh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=zh());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new Ae(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const c=this._cubeSize;Ra(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(a,Zo)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Nh[(s-r-1)%Nh.length];this._blur(e,r-1,r,a,o)}t.autoClear=i}_blur(e,t,i,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,s,"latitudinal",r),this._halfBlur(a,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new Ae(this._lodPlanes[s],l),u=l.uniforms,f=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*ji-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):ji;m>ji&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ji}`);const p=[];let w=0;for(let C=0;C<ji;++C){const L=C/_,y=Math.exp(-L*L/2);p.push(y),C===0?w+=y:C<m&&(w+=2*y)}for(let C=0;C<p.length;C++)p[C]=p[C]/w;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=p,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:E}=this;u.dTheta.value=g,u.mipInt.value=E-i;const S=this._sizeLods[s],R=3*S*(s>E-Fs?s-E+Fs:0),b=4*(this._cubeSize-S);Ra(t,R,b,3*S,2*S),c.setRenderTarget(t),c.render(d,Zo)}}function Xg(n){const e=[],t=[],i=[];let s=n;const r=n-Fs+1+Ih.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);t.push(o);let c=1/o;a>n-Fs?c=Ih[a-n+Fs-1]:a===0&&(c=0),i.push(c);const l=1/(o-2),h=-l,d=1+l,u=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,g=6,_=3,m=2,p=1,w=new Float32Array(_*g*f),E=new Float32Array(m*g*f),S=new Float32Array(p*g*f);for(let b=0;b<f;b++){const C=b%3*2/3-1,L=b>2?0:-1,y=[C,L,0,C+2/3,L,0,C+2/3,L+1,0,C,L,0,C+2/3,L+1,0,C,L+1,0];w.set(y,_*g*b),E.set(u,m*g*b);const v=[b,b,b,b,b,b];S.set(v,p*g*b)}const R=new on;R.setAttribute("position",new Nn(w,_)),R.setAttribute("uv",new Nn(E,m)),R.setAttribute("faceIndex",new Nn(S,p)),e.push(R),s>Fs&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function kh(n,e,t){const i=new ls(n,e,t);return i.texture.mapping=co,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ra(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function qg(n,e,t){const i=new Float32Array(ji),s=new U(0,1,0);return new Li({name:"SphericalGaussianBlur",defines:{n:ji,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Pc(),fragmentShader:`

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
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function zh(){return new Li({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Pc(),fragmentShader:`

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
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function Oh(){return new Li({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Pc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function Pc(){return`

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
	`}function Yg(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const c=o.mapping,l=c===yl||c===Ml,h=c===qs||c===Ys;if(l||h){let d=e.get(o);const u=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==u)return t===null&&(t=new Fh(n)),d=l?t.fromEquirectangular(o,d):t.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),d.texture;if(d!==void 0)return d.texture;{const f=o.image;return l&&f&&f.height>0||h&&f&&s(f)?(t===null&&(t=new Fh(n)),d=l?t.fromEquirectangular(o):t.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),o.addEventListener("dispose",r),d.texture):null}}}return o}function s(o){let c=0;const l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function r(o){const c=o.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function $g(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&Vr("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function Kg(n,e,t,i){const s={},r=new WeakMap;function a(d){const u=d.target;u.index!==null&&e.remove(u.index);for(const g in u.attributes)e.remove(u.attributes[g]);u.removeEventListener("dispose",a),delete s[u.id];const f=r.get(u);f&&(e.remove(f),r.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(d,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,t.memory.geometries++),u}function c(d){const u=d.attributes;for(const f in u)e.update(u[f],n.ARRAY_BUFFER)}function l(d){const u=[],f=d.index,g=d.attributes.position;let _=0;if(f!==null){const w=f.array;_=f.version;for(let E=0,S=w.length;E<S;E+=3){const R=w[E+0],b=w[E+1],C=w[E+2];u.push(R,b,b,C,C,R)}}else if(g!==void 0){const w=g.array;_=g.version;for(let E=0,S=w.length/3-1;E<S;E+=3){const R=E+0,b=E+1,C=E+2;u.push(R,b,b,C,C,R)}}else return;const m=new($d(u)?Jd:Zd)(u,1);m.version=_;const p=r.get(d);p&&e.remove(p),r.set(d,m)}function h(d){const u=r.get(d);if(u){const f=d.index;f!==null&&u.version<f.version&&l(d)}else l(d);return r.get(d)}return{get:o,update:c,getWireframeAttribute:h}}function jg(n,e,t){let i;function s(u){i=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function c(u,f){n.drawElements(i,f,r,u*a),t.update(f,i,1)}function l(u,f,g){g!==0&&(n.drawElementsInstanced(i,f,r,u*a,g),t.update(f,i,g))}function h(u,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,u,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,i,1)}function d(u,f,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<u.length;p++)l(u[p]/a,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(i,f,0,r,u,0,_,0,g);let p=0;for(let w=0;w<g;w++)p+=f[w]*_[w];t.update(p,i,1)}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function Zg(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function Jg(n,e,t){const i=new WeakMap,s=new at;function r(a,o,c){const l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0;let u=i.get(o);if(u===void 0||u.count!==d){let y=function(){C.dispose(),i.delete(o),o.removeEventListener("dispose",y)};u!==void 0&&u.texture.dispose();const f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],w=o.morphAttributes.color||[];let E=0;f===!0&&(E=1),g===!0&&(E=2),_===!0&&(E=3);let S=o.attributes.position.count*E,R=1;S>e.maxTextureSize&&(R=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const b=new Float32Array(S*R*4*d),C=new Kd(b,S,R,d);C.type=ci,C.needsUpdate=!0;const L=E*4;for(let v=0;v<d;v++){const P=m[v],F=p[v],O=w[v],V=S*R*4*v;for(let Y=0;Y<P.count;Y++){const W=Y*L;f===!0&&(s.fromBufferAttribute(P,Y),b[V+W+0]=s.x,b[V+W+1]=s.y,b[V+W+2]=s.z,b[V+W+3]=0),g===!0&&(s.fromBufferAttribute(F,Y),b[V+W+4]=s.x,b[V+W+5]=s.y,b[V+W+6]=s.z,b[V+W+7]=0),_===!0&&(s.fromBufferAttribute(O,Y),b[V+W+8]=s.x,b[V+W+9]=s.y,b[V+W+10]=s.z,b[V+W+11]=O.itemSize===4?s.w:1)}}u={count:d,texture:C,size:new Ue(S,R)},i.set(o,u),o.addEventListener("dispose",y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let f=0;for(let _=0;_<l.length;_++)f+=l[_];const g=o.morphTargetsRelative?1:1-f;c.getUniforms().setValue(n,"morphTargetBaseInfluence",g),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",u.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:r}}function Qg(n,e,t,i){let s=new WeakMap;function r(c){const l=i.render.frame,h=c.geometry,d=e.get(c,h);if(s.get(d)!==l&&(e.update(d),s.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const u=c.skeleton;s.get(u)!==l&&(u.update(),s.set(u,l))}return d}function a(){s=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:a}}const du=new kt,Bh=new su(1,1),uu=new Kd,fu=new xp,pu=new tu,Hh=[],Gh=[],Vh=new Float32Array(16),Wh=new Float32Array(9),Xh=new Float32Array(4);function ir(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=Hh[s];if(r===void 0&&(r=new Float32Array(s),Hh[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function Dt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Lt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function uo(n,e){let t=Gh[e];t===void 0&&(t=new Int32Array(e),Gh[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function e_(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function t_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;n.uniform2fv(this.addr,e),Lt(t,e)}}function n_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Dt(t,e))return;n.uniform3fv(this.addr,e),Lt(t,e)}}function i_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;n.uniform4fv(this.addr,e),Lt(t,e)}}function s_(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Dt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Lt(t,e)}else{if(Dt(t,i))return;Xh.set(i),n.uniformMatrix2fv(this.addr,!1,Xh),Lt(t,i)}}function r_(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Dt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Lt(t,e)}else{if(Dt(t,i))return;Wh.set(i),n.uniformMatrix3fv(this.addr,!1,Wh),Lt(t,i)}}function a_(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Dt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Lt(t,e)}else{if(Dt(t,i))return;Vh.set(i),n.uniformMatrix4fv(this.addr,!1,Vh),Lt(t,i)}}function o_(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function l_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;n.uniform2iv(this.addr,e),Lt(t,e)}}function c_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dt(t,e))return;n.uniform3iv(this.addr,e),Lt(t,e)}}function h_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;n.uniform4iv(this.addr,e),Lt(t,e)}}function d_(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function u_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;n.uniform2uiv(this.addr,e),Lt(t,e)}}function f_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dt(t,e))return;n.uniform3uiv(this.addr,e),Lt(t,e)}}function p_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;n.uniform4uiv(this.addr,e),Lt(t,e)}}function m_(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Bh.compareFunction=Yd,r=Bh):r=du,t.setTexture2D(e||r,s)}function g_(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||fu,s)}function __(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||pu,s)}function x_(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||uu,s)}function v_(n){switch(n){case 5126:return e_;case 35664:return t_;case 35665:return n_;case 35666:return i_;case 35674:return s_;case 35675:return r_;case 35676:return a_;case 5124:case 35670:return o_;case 35667:case 35671:return l_;case 35668:case 35672:return c_;case 35669:case 35673:return h_;case 5125:return d_;case 36294:return u_;case 36295:return f_;case 36296:return p_;case 35678:case 36198:case 36298:case 36306:case 35682:return m_;case 35679:case 36299:case 36307:return g_;case 35680:case 36300:case 36308:case 36293:return __;case 36289:case 36303:case 36311:case 36292:return x_}}function y_(n,e){n.uniform1fv(this.addr,e)}function M_(n,e){const t=ir(e,this.size,2);n.uniform2fv(this.addr,t)}function S_(n,e){const t=ir(e,this.size,3);n.uniform3fv(this.addr,t)}function b_(n,e){const t=ir(e,this.size,4);n.uniform4fv(this.addr,t)}function E_(n,e){const t=ir(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function w_(n,e){const t=ir(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function T_(n,e){const t=ir(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function A_(n,e){n.uniform1iv(this.addr,e)}function R_(n,e){n.uniform2iv(this.addr,e)}function C_(n,e){n.uniform3iv(this.addr,e)}function P_(n,e){n.uniform4iv(this.addr,e)}function D_(n,e){n.uniform1uiv(this.addr,e)}function L_(n,e){n.uniform2uiv(this.addr,e)}function I_(n,e){n.uniform3uiv(this.addr,e)}function U_(n,e){n.uniform4uiv(this.addr,e)}function N_(n,e,t){const i=this.cache,s=e.length,r=uo(t,s);Dt(i,r)||(n.uniform1iv(this.addr,r),Lt(i,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||du,r[a])}function F_(n,e,t){const i=this.cache,s=e.length,r=uo(t,s);Dt(i,r)||(n.uniform1iv(this.addr,r),Lt(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||fu,r[a])}function k_(n,e,t){const i=this.cache,s=e.length,r=uo(t,s);Dt(i,r)||(n.uniform1iv(this.addr,r),Lt(i,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||pu,r[a])}function z_(n,e,t){const i=this.cache,s=e.length,r=uo(t,s);Dt(i,r)||(n.uniform1iv(this.addr,r),Lt(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||uu,r[a])}function O_(n){switch(n){case 5126:return y_;case 35664:return M_;case 35665:return S_;case 35666:return b_;case 35674:return E_;case 35675:return w_;case 35676:return T_;case 5124:case 35670:return A_;case 35667:case 35671:return R_;case 35668:case 35672:return C_;case 35669:case 35673:return P_;case 5125:return D_;case 36294:return L_;case 36295:return I_;case 36296:return U_;case 35678:case 36198:case 36298:case 36306:case 35682:return N_;case 35679:case 36299:case 36307:return F_;case 35680:case 36300:case 36308:case 36293:return k_;case 36289:case 36303:case 36311:case 36292:return z_}}class B_{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=v_(t.type)}}class H_{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=O_(t.type)}}class G_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],i)}}}const nl=/(\w+)(\])?(\[|\.)?/g;function qh(n,e){n.seq.push(e),n.map[e.id]=e}function V_(n,e,t){const i=n.name,s=i.length;for(nl.lastIndex=0;;){const r=nl.exec(i),a=nl.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){qh(t,l===void 0?new B_(o,n,e):new H_(o,n,e));break}else{let d=t.map[o];d===void 0&&(d=new G_(o),qh(t,d)),t=d}}}class Xa{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);V_(r,a,this)}}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],c=i[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&i.push(a)}return i}}function Yh(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const W_=37297;let X_=0;function q_(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const $h=new Be;function Y_(n){Je._getMatrix($h,Je.workingColorSpace,n);const e=`mat3( ${$h.elements.map(t=>t.toFixed(4))} )`;switch(Je.getTransfer(n)){case ja:return[e,"LinearTransferOETF"];case st:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Kh(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+q_(n.getShaderSource(e),o)}else return r}function $_(n,e){const t=Y_(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function K_(n,e){let t;switch(e){case Lf:t="Linear";break;case If:t="Reinhard";break;case Uf:t="Cineon";break;case Nf:t="ACESFilmic";break;case kf:t="AgX";break;case zf:t="Neutral";break;case Ff:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ca=new U;function j_(){Je.getLuminanceCoefficients(Ca);const n=Ca.x.toFixed(4),e=Ca.y.toFixed(4),t=Ca.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Z_(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Tr).join(`
`)}function J_(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Q_(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),a=r.name;let o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Tr(n){return n!==""}function jh(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Zh(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const ex=/^[ \t]*#include +<([\w\d./]+)>/gm;function ec(n){return n.replace(ex,nx)}const tx=new Map;function nx(n,e){let t=Ve[e];if(t===void 0){const i=tx.get(e);if(i!==void 0)t=Ve[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return ec(t)}const ix=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Jh(n){return n.replace(ix,sx)}function sx(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Qh(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function rx(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Id?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Ud?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===ni&&(e="SHADOWMAP_TYPE_VSM"),e}function ax(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case qs:case Ys:e="ENVMAP_TYPE_CUBE";break;case co:e="ENVMAP_TYPE_CUBE_UV";break}return e}function ox(n){let e="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===Ys&&(e="ENVMAP_MODE_REFRACTION"),e}function lx(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Nd:e="ENVMAP_BLENDING_MULTIPLY";break;case Pf:e="ENVMAP_BLENDING_MIX";break;case Df:e="ENVMAP_BLENDING_ADD";break}return e}function cx(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function hx(n,e,t,i){const s=n.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=rx(t),l=ax(t),h=ox(t),d=lx(t),u=cx(t),f=Z_(t),g=J_(r),_=s.createProgram();let m,p,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Tr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Tr).join(`
`),p.length>0&&(p+=`
`)):(m=[Qh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Tr).join(`
`),p=[Qh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ri?"#define TONE_MAPPING":"",t.toneMapping!==Ri?Ve.tonemapping_pars_fragment:"",t.toneMapping!==Ri?K_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,$_("linearToOutputTexel",t.outputColorSpace),j_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Tr).join(`
`)),a=ec(a),a=jh(a,t),a=Zh(a,t),o=ec(o),o=jh(o,t),o=Zh(o,t),a=Jh(a),o=Jh(o),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===nh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===nh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const E=w+m+a,S=w+p+o,R=Yh(s,s.VERTEX_SHADER,E),b=Yh(s,s.FRAGMENT_SHADER,S);s.attachShader(_,R),s.attachShader(_,b),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function C(P){if(n.debug.checkShaderErrors){const F=s.getProgramInfoLog(_)||"",O=s.getShaderInfoLog(R)||"",V=s.getShaderInfoLog(b)||"",Y=F.trim(),W=O.trim(),ee=V.trim();let G=!0,re=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(G=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,R,b);else{const de=Kh(s,R,"vertex"),_e=Kh(s,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+Y+`
`+de+`
`+_e)}else Y!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Y):(W===""||ee==="")&&(re=!1);re&&(P.diagnostics={runnable:G,programLog:Y,vertexShader:{log:W,prefix:m},fragmentShader:{log:ee,prefix:p}})}s.deleteShader(R),s.deleteShader(b),L=new Xa(s,_),y=Q_(s,_)}let L;this.getUniforms=function(){return L===void 0&&C(this),L};let y;this.getAttributes=function(){return y===void 0&&C(this),y};let v=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=s.getProgramParameter(_,W_)),v},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=X_++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=R,this.fragmentShader=b,this}let dx=0;class ux{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new fx(e),t.set(e,i)),i}}class fx{constructor(e){this.id=dx++,this.code=e,this.usedTimes=0}}function px(n,e,t,i,s,r,a){const o=new Sc,c=new ux,l=new Set,h=[],d=s.logarithmicDepthBuffer,u=s.vertexTextures;let f=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(y){return l.add(y),y===0?"uv":`uv${y}`}function m(y,v,P,F,O){const V=F.fog,Y=O.geometry,W=y.isMeshStandardMaterial?F.environment:null,ee=(y.isMeshStandardMaterial?t:e).get(y.envMap||W),G=ee&&ee.mapping===co?ee.image.height:null,re=g[y.type];y.precision!==null&&(f=s.getMaxPrecision(y.precision),f!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",f,"instead."));const de=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,_e=de!==void 0?de.length:0;let ce=0;Y.morphAttributes.position!==void 0&&(ce=1),Y.morphAttributes.normal!==void 0&&(ce=2),Y.morphAttributes.color!==void 0&&(ce=3);let Fe,We,Qe,$;if(re){const et=Bn[re];Fe=et.vertexShader,We=et.fragmentShader}else Fe=y.vertexShader,We=y.fragmentShader,c.update(y),Qe=c.getVertexShaderID(y),$=c.getFragmentShaderID(y);const Z=n.getRenderTarget(),pe=n.state.buffers.depth.getReversed(),Ne=O.isInstancedMesh===!0,we=O.isBatchedMesh===!0,je=!!y.map,zt=!!y.matcap,D=!!ee,ut=!!y.aoMap,ze=!!y.lightMap,Le=!!y.bumpMap,xe=!!y.normalMap,ft=!!y.displacementMap,ve=!!y.emissiveMap,Ge=!!y.metalnessMap,It=!!y.roughnessMap,bt=y.anisotropy>0,T=y.clearcoat>0,x=y.dispersion>0,z=y.iridescence>0,q=y.sheen>0,j=y.transmission>0,X=bt&&!!y.anisotropyMap,be=T&&!!y.clearcoatMap,ie=T&&!!y.clearcoatNormalMap,ye=T&&!!y.clearcoatRoughnessMap,Me=z&&!!y.iridescenceMap,te=z&&!!y.iridescenceThicknessMap,he=q&&!!y.sheenColorMap,De=q&&!!y.sheenRoughnessMap,Se=!!y.specularMap,oe=!!y.specularColorMap,Oe=!!y.specularIntensityMap,I=j&&!!y.transmissionMap,ne=j&&!!y.thicknessMap,se=!!y.gradientMap,fe=!!y.alphaMap,J=y.alphaTest>0,K=!!y.alphaHash,ge=!!y.extensions;let ke=Ri;y.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(ke=n.toneMapping);const lt={shaderID:re,shaderType:y.type,shaderName:y.name,vertexShader:Fe,fragmentShader:We,defines:y.defines,customVertexShaderID:Qe,customFragmentShaderID:$,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:f,batching:we,batchingColor:we&&O._colorsTexture!==null,instancing:Ne,instancingColor:Ne&&O.instanceColor!==null,instancingMorph:Ne&&O.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:Z===null?n.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:$s,alphaToCoverage:!!y.alphaToCoverage,map:je,matcap:zt,envMap:D,envMapMode:D&&ee.mapping,envMapCubeUVHeight:G,aoMap:ut,lightMap:ze,bumpMap:Le,normalMap:xe,displacementMap:u&&ft,emissiveMap:ve,normalMapObjectSpace:xe&&y.normalMapType===Hf,normalMapTangentSpace:xe&&y.normalMapType===qd,metalnessMap:Ge,roughnessMap:It,anisotropy:bt,anisotropyMap:X,clearcoat:T,clearcoatMap:be,clearcoatNormalMap:ie,clearcoatRoughnessMap:ye,dispersion:x,iridescence:z,iridescenceMap:Me,iridescenceThicknessMap:te,sheen:q,sheenColorMap:he,sheenRoughnessMap:De,specularMap:Se,specularColorMap:oe,specularIntensityMap:Oe,transmission:j,transmissionMap:I,thicknessMap:ne,gradientMap:se,opaque:y.transparent===!1&&y.blending===Os&&y.alphaToCoverage===!1,alphaMap:fe,alphaTest:J,alphaHash:K,combine:y.combine,mapUv:je&&_(y.map.channel),aoMapUv:ut&&_(y.aoMap.channel),lightMapUv:ze&&_(y.lightMap.channel),bumpMapUv:Le&&_(y.bumpMap.channel),normalMapUv:xe&&_(y.normalMap.channel),displacementMapUv:ft&&_(y.displacementMap.channel),emissiveMapUv:ve&&_(y.emissiveMap.channel),metalnessMapUv:Ge&&_(y.metalnessMap.channel),roughnessMapUv:It&&_(y.roughnessMap.channel),anisotropyMapUv:X&&_(y.anisotropyMap.channel),clearcoatMapUv:be&&_(y.clearcoatMap.channel),clearcoatNormalMapUv:ie&&_(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ye&&_(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Me&&_(y.iridescenceMap.channel),iridescenceThicknessMapUv:te&&_(y.iridescenceThicknessMap.channel),sheenColorMapUv:he&&_(y.sheenColorMap.channel),sheenRoughnessMapUv:De&&_(y.sheenRoughnessMap.channel),specularMapUv:Se&&_(y.specularMap.channel),specularColorMapUv:oe&&_(y.specularColorMap.channel),specularIntensityMapUv:Oe&&_(y.specularIntensityMap.channel),transmissionMapUv:I&&_(y.transmissionMap.channel),thicknessMapUv:ne&&_(y.thicknessMap.channel),alphaMapUv:fe&&_(y.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(xe||bt),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!Y.attributes.uv&&(je||fe),fog:!!V,useFog:y.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:y.flatShading===!0&&y.wireframe===!1,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:pe,skinning:O.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:_e,morphTextureStride:ce,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:ke,decodeVideoTexture:je&&y.map.isVideoTexture===!0&&Je.getTransfer(y.map.colorSpace)===st,decodeVideoTextureEmissive:ve&&y.emissiveMap.isVideoTexture===!0&&Je.getTransfer(y.emissiveMap.colorSpace)===st,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Gt,flipSided:y.side===an,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:ge&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ge&&y.extensions.multiDraw===!0||we)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return lt.vertexUv1s=l.has(1),lt.vertexUv2s=l.has(2),lt.vertexUv3s=l.has(3),l.clear(),lt}function p(y){const v=[];if(y.shaderID?v.push(y.shaderID):(v.push(y.customVertexShaderID),v.push(y.customFragmentShaderID)),y.defines!==void 0)for(const P in y.defines)v.push(P),v.push(y.defines[P]);return y.isRawShaderMaterial===!1&&(w(v,y),E(v,y),v.push(n.outputColorSpace)),v.push(y.customProgramCacheKey),v.join()}function w(y,v){y.push(v.precision),y.push(v.outputColorSpace),y.push(v.envMapMode),y.push(v.envMapCubeUVHeight),y.push(v.mapUv),y.push(v.alphaMapUv),y.push(v.lightMapUv),y.push(v.aoMapUv),y.push(v.bumpMapUv),y.push(v.normalMapUv),y.push(v.displacementMapUv),y.push(v.emissiveMapUv),y.push(v.metalnessMapUv),y.push(v.roughnessMapUv),y.push(v.anisotropyMapUv),y.push(v.clearcoatMapUv),y.push(v.clearcoatNormalMapUv),y.push(v.clearcoatRoughnessMapUv),y.push(v.iridescenceMapUv),y.push(v.iridescenceThicknessMapUv),y.push(v.sheenColorMapUv),y.push(v.sheenRoughnessMapUv),y.push(v.specularMapUv),y.push(v.specularColorMapUv),y.push(v.specularIntensityMapUv),y.push(v.transmissionMapUv),y.push(v.thicknessMapUv),y.push(v.combine),y.push(v.fogExp2),y.push(v.sizeAttenuation),y.push(v.morphTargetsCount),y.push(v.morphAttributeCount),y.push(v.numDirLights),y.push(v.numPointLights),y.push(v.numSpotLights),y.push(v.numSpotLightMaps),y.push(v.numHemiLights),y.push(v.numRectAreaLights),y.push(v.numDirLightShadows),y.push(v.numPointLightShadows),y.push(v.numSpotLightShadows),y.push(v.numSpotLightShadowsWithMaps),y.push(v.numLightProbes),y.push(v.shadowMapType),y.push(v.toneMapping),y.push(v.numClippingPlanes),y.push(v.numClipIntersection),y.push(v.depthPacking)}function E(y,v){o.disableAll(),v.supportsVertexTextures&&o.enable(0),v.instancing&&o.enable(1),v.instancingColor&&o.enable(2),v.instancingMorph&&o.enable(3),v.matcap&&o.enable(4),v.envMap&&o.enable(5),v.normalMapObjectSpace&&o.enable(6),v.normalMapTangentSpace&&o.enable(7),v.clearcoat&&o.enable(8),v.iridescence&&o.enable(9),v.alphaTest&&o.enable(10),v.vertexColors&&o.enable(11),v.vertexAlphas&&o.enable(12),v.vertexUv1s&&o.enable(13),v.vertexUv2s&&o.enable(14),v.vertexUv3s&&o.enable(15),v.vertexTangents&&o.enable(16),v.anisotropy&&o.enable(17),v.alphaHash&&o.enable(18),v.batching&&o.enable(19),v.dispersion&&o.enable(20),v.batchingColor&&o.enable(21),v.gradientMap&&o.enable(22),y.push(o.mask),o.disableAll(),v.fog&&o.enable(0),v.useFog&&o.enable(1),v.flatShading&&o.enable(2),v.logarithmicDepthBuffer&&o.enable(3),v.reversedDepthBuffer&&o.enable(4),v.skinning&&o.enable(5),v.morphTargets&&o.enable(6),v.morphNormals&&o.enable(7),v.morphColors&&o.enable(8),v.premultipliedAlpha&&o.enable(9),v.shadowMapEnabled&&o.enable(10),v.doubleSided&&o.enable(11),v.flipSided&&o.enable(12),v.useDepthPacking&&o.enable(13),v.dithering&&o.enable(14),v.transmission&&o.enable(15),v.sheen&&o.enable(16),v.opaque&&o.enable(17),v.pointsUvs&&o.enable(18),v.decodeVideoTexture&&o.enable(19),v.decodeVideoTextureEmissive&&o.enable(20),v.alphaToCoverage&&o.enable(21),y.push(o.mask)}function S(y){const v=g[y.type];let P;if(v){const F=Bn[v];P=Dp.clone(F.uniforms)}else P=y.uniforms;return P}function R(y,v){let P;for(let F=0,O=h.length;F<O;F++){const V=h[F];if(V.cacheKey===v){P=V,++P.usedTimes;break}}return P===void 0&&(P=new hx(n,v,y,r),h.push(P)),P}function b(y){if(--y.usedTimes===0){const v=h.indexOf(y);h[v]=h[h.length-1],h.pop(),y.destroy()}}function C(y){c.remove(y)}function L(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:S,acquireProgram:R,releaseProgram:b,releaseShaderCache:C,programs:h,dispose:L}}function mx(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,c){n.get(a)[o]=c}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function gx(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function ed(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function td(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(d,u,f,g,_,m){let p=n[e];return p===void 0?(p={id:d.id,object:d,geometry:u,material:f,groupOrder:g,renderOrder:d.renderOrder,z:_,group:m},n[e]=p):(p.id=d.id,p.object=d,p.geometry=u,p.material=f,p.groupOrder=g,p.renderOrder=d.renderOrder,p.z=_,p.group=m),e++,p}function o(d,u,f,g,_,m){const p=a(d,u,f,g,_,m);f.transmission>0?i.push(p):f.transparent===!0?s.push(p):t.push(p)}function c(d,u,f,g,_,m){const p=a(d,u,f,g,_,m);f.transmission>0?i.unshift(p):f.transparent===!0?s.unshift(p):t.unshift(p)}function l(d,u){t.length>1&&t.sort(d||gx),i.length>1&&i.sort(u||ed),s.length>1&&s.sort(u||ed)}function h(){for(let d=e,u=n.length;d<u;d++){const f=n[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:o,unshift:c,finish:h,sort:l}}function _x(){let n=new WeakMap;function e(i,s){const r=n.get(i);let a;return r===void 0?(a=new td,n.set(i,[a])):s>=r.length?(a=new td,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function xx(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new qe};break;case"SpotLight":t={position:new U,direction:new U,color:new qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new qe,groundColor:new qe};break;case"RectAreaLight":t={color:new qe,position:new U,halfWidth:new U,halfHeight:new U};break}return n[e.id]=t,t}}}function vx(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let yx=0;function Mx(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Sx(n){const e=new xx,t=vx(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new U);const s=new U,r=new dt,a=new dt;function o(l){let h=0,d=0,u=0;for(let y=0;y<9;y++)i.probe[y].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,w=0,E=0,S=0,R=0,b=0,C=0;l.sort(Mx);for(let y=0,v=l.length;y<v;y++){const P=l[y],F=P.color,O=P.intensity,V=P.distance,Y=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=F.r*O,d+=F.g*O,u+=F.b*O;else if(P.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(P.sh.coefficients[W],O);C++}else if(P.isDirectionalLight){const W=e.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const ee=P.shadow,G=t.get(P);G.shadowIntensity=ee.intensity,G.shadowBias=ee.bias,G.shadowNormalBias=ee.normalBias,G.shadowRadius=ee.radius,G.shadowMapSize=ee.mapSize,i.directionalShadow[f]=G,i.directionalShadowMap[f]=Y,i.directionalShadowMatrix[f]=P.shadow.matrix,w++}i.directional[f]=W,f++}else if(P.isSpotLight){const W=e.get(P);W.position.setFromMatrixPosition(P.matrixWorld),W.color.copy(F).multiplyScalar(O),W.distance=V,W.coneCos=Math.cos(P.angle),W.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),W.decay=P.decay,i.spot[_]=W;const ee=P.shadow;if(P.map&&(i.spotLightMap[R]=P.map,R++,ee.updateMatrices(P),P.castShadow&&b++),i.spotLightMatrix[_]=ee.matrix,P.castShadow){const G=t.get(P);G.shadowIntensity=ee.intensity,G.shadowBias=ee.bias,G.shadowNormalBias=ee.normalBias,G.shadowRadius=ee.radius,G.shadowMapSize=ee.mapSize,i.spotShadow[_]=G,i.spotShadowMap[_]=Y,S++}_++}else if(P.isRectAreaLight){const W=e.get(P);W.color.copy(F).multiplyScalar(O),W.halfWidth.set(P.width*.5,0,0),W.halfHeight.set(0,P.height*.5,0),i.rectArea[m]=W,m++}else if(P.isPointLight){const W=e.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),W.distance=P.distance,W.decay=P.decay,P.castShadow){const ee=P.shadow,G=t.get(P);G.shadowIntensity=ee.intensity,G.shadowBias=ee.bias,G.shadowNormalBias=ee.normalBias,G.shadowRadius=ee.radius,G.shadowMapSize=ee.mapSize,G.shadowCameraNear=ee.camera.near,G.shadowCameraFar=ee.camera.far,i.pointShadow[g]=G,i.pointShadowMap[g]=Y,i.pointShadowMatrix[g]=P.shadow.matrix,E++}i.point[g]=W,g++}else if(P.isHemisphereLight){const W=e.get(P);W.skyColor.copy(P.color).multiplyScalar(O),W.groundColor.copy(P.groundColor).multiplyScalar(O),i.hemi[p]=W,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ae.LTC_FLOAT_1,i.rectAreaLTC2=ae.LTC_FLOAT_2):(i.rectAreaLTC1=ae.LTC_HALF_1,i.rectAreaLTC2=ae.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=u;const L=i.hash;(L.directionalLength!==f||L.pointLength!==g||L.spotLength!==_||L.rectAreaLength!==m||L.hemiLength!==p||L.numDirectionalShadows!==w||L.numPointShadows!==E||L.numSpotShadows!==S||L.numSpotMaps!==R||L.numLightProbes!==C)&&(i.directional.length=f,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=w,i.pointShadowMatrix.length=E,i.spotLightMatrix.length=S+R-b,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=b,i.numLightProbes=C,L.directionalLength=f,L.pointLength=g,L.spotLength=_,L.rectAreaLength=m,L.hemiLength=p,L.numDirectionalShadows=w,L.numPointShadows=E,L.numSpotShadows=S,L.numSpotMaps=R,L.numLightProbes=C,i.version=yx++)}function c(l,h){let d=0,u=0,f=0,g=0,_=0;const m=h.matrixWorldInverse;for(let p=0,w=l.length;p<w;p++){const E=l[p];if(E.isDirectionalLight){const S=i.directional[d];S.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),d++}else if(E.isSpotLight){const S=i.spot[f];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),f++}else if(E.isRectAreaLight){const S=i.rectArea[g];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(m),a.identity(),r.copy(E.matrixWorld),r.premultiply(m),a.extractRotation(r),S.halfWidth.set(E.width*.5,0,0),S.halfHeight.set(0,E.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),g++}else if(E.isPointLight){const S=i.point[u];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(m),u++}else if(E.isHemisphereLight){const S=i.hemi[_];S.direction.setFromMatrixPosition(E.matrixWorld),S.direction.transformDirection(m),_++}}}return{setup:o,setupView:c,state:i}}function nd(n){const e=new Sx(n),t=[],i=[];function s(h){l.camera=h,t.length=0,i.length=0}function r(h){t.push(h)}function a(h){i.push(h)}function o(){e.setup(t)}function c(h){e.setupView(t,h)}const l={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function bx(n){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new nd(n),e.set(s,[o])):r>=a.length?(o=new nd(n),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const Ex=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,wx=`uniform sampler2D shadow_pass;
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
}`;function Tx(n,e,t){let i=new Ec;const s=new Ue,r=new Ue,a=new at,o=new au({depthPacking:Xd}),c=new Xp,l={},h=t.maxTextureSize,d={[Di]:an,[an]:Di,[Gt]:Gt},u=new Li({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ue},radius:{value:4}},vertexShader:Ex,fragmentShader:wx}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const g=new on;g.setAttribute("position",new Nn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Ae(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Id;let p=this.type;this.render=function(b,C,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;const y=n.getRenderTarget(),v=n.getActiveCubeFace(),P=n.getActiveMipmapLevel(),F=n.state;F.setBlending(Ai),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const O=p!==ni&&this.type===ni,V=p===ni&&this.type!==ni;for(let Y=0,W=b.length;Y<W;Y++){const ee=b[Y],G=ee.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",ee,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);const re=G.getFrameExtents();if(s.multiply(re),r.copy(G.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/re.x),s.x=r.x*re.x,G.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/re.y),s.y=r.y*re.y,G.mapSize.y=r.y)),G.map===null||O===!0||V===!0){const _e=this.type!==ni?{minFilter:Un,magFilter:Un}:{};G.map!==null&&G.map.dispose(),G.map=new ls(s.x,s.y,_e),G.map.texture.name=ee.name+".shadowMap",G.camera.updateProjectionMatrix()}n.setRenderTarget(G.map),n.clear();const de=G.getViewportCount();for(let _e=0;_e<de;_e++){const ce=G.getViewport(_e);a.set(r.x*ce.x,r.y*ce.y,r.x*ce.z,r.y*ce.w),F.viewport(a),G.updateMatrices(ee,_e),i=G.getFrustum(),S(C,L,G.camera,ee,this.type)}G.isPointLightShadow!==!0&&this.type===ni&&w(G,L),G.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(y,v,P)};function w(b,C){const L=e.update(_);u.defines.VSM_SAMPLES!==b.blurSamples&&(u.defines.VSM_SAMPLES=b.blurSamples,f.defines.VSM_SAMPLES=b.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new ls(s.x,s.y)),u.uniforms.shadow_pass.value=b.map.texture,u.uniforms.resolution.value=b.mapSize,u.uniforms.radius.value=b.radius,n.setRenderTarget(b.mapPass),n.clear(),n.renderBufferDirect(C,null,L,u,_,null),f.uniforms.shadow_pass.value=b.mapPass.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,n.setRenderTarget(b.map),n.clear(),n.renderBufferDirect(C,null,L,f,_,null)}function E(b,C,L,y){let v=null;const P=L.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(P!==void 0)v=P;else if(v=L.isPointLight===!0?c:o,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const F=v.uuid,O=C.uuid;let V=l[F];V===void 0&&(V={},l[F]=V);let Y=V[O];Y===void 0&&(Y=v.clone(),V[O]=Y,C.addEventListener("dispose",R)),v=Y}if(v.visible=C.visible,v.wireframe=C.wireframe,y===ni?v.side=C.shadowSide!==null?C.shadowSide:C.side:v.side=C.shadowSide!==null?C.shadowSide:d[C.side],v.alphaMap=C.alphaMap,v.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,v.map=C.map,v.clipShadows=C.clipShadows,v.clippingPlanes=C.clippingPlanes,v.clipIntersection=C.clipIntersection,v.displacementMap=C.displacementMap,v.displacementScale=C.displacementScale,v.displacementBias=C.displacementBias,v.wireframeLinewidth=C.wireframeLinewidth,v.linewidth=C.linewidth,L.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const F=n.properties.get(v);F.light=L}return v}function S(b,C,L,y,v){if(b.visible===!1)return;if(b.layers.test(C.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&v===ni)&&(!b.frustumCulled||i.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,b.matrixWorld);const O=e.update(b),V=b.material;if(Array.isArray(V)){const Y=O.groups;for(let W=0,ee=Y.length;W<ee;W++){const G=Y[W],re=V[G.materialIndex];if(re&&re.visible){const de=E(b,re,y,v);b.onBeforeShadow(n,b,C,L,O,de,G),n.renderBufferDirect(L,null,O,de,b,G),b.onAfterShadow(n,b,C,L,O,de,G)}}}else if(V.visible){const Y=E(b,V,y,v);b.onBeforeShadow(n,b,C,L,O,Y,null),n.renderBufferDirect(L,null,O,Y,b,null),b.onAfterShadow(n,b,C,L,O,Y,null)}}const F=b.children;for(let O=0,V=F.length;O<V;O++)S(F[O],C,L,y,v)}function R(b){b.target.removeEventListener("dispose",R);for(const L in l){const y=l[L],v=b.target.uuid;v in y&&(y[v].dispose(),delete y[v])}}}const Ax={[fl]:pl,[ml]:xl,[gl]:vl,[Xs]:_l,[pl]:fl,[xl]:ml,[vl]:gl,[_l]:Xs};function Rx(n,e){function t(){let I=!1;const ne=new at;let se=null;const fe=new at(0,0,0,0);return{setMask:function(J){se!==J&&!I&&(n.colorMask(J,J,J,J),se=J)},setLocked:function(J){I=J},setClear:function(J,K,ge,ke,lt){lt===!0&&(J*=ke,K*=ke,ge*=ke),ne.set(J,K,ge,ke),fe.equals(ne)===!1&&(n.clearColor(J,K,ge,ke),fe.copy(ne))},reset:function(){I=!1,se=null,fe.set(-1,0,0,0)}}}function i(){let I=!1,ne=!1,se=null,fe=null,J=null;return{setReversed:function(K){if(ne!==K){const ge=e.get("EXT_clip_control");K?ge.clipControlEXT(ge.LOWER_LEFT_EXT,ge.ZERO_TO_ONE_EXT):ge.clipControlEXT(ge.LOWER_LEFT_EXT,ge.NEGATIVE_ONE_TO_ONE_EXT),ne=K;const ke=J;J=null,this.setClear(ke)}},getReversed:function(){return ne},setTest:function(K){K?Z(n.DEPTH_TEST):pe(n.DEPTH_TEST)},setMask:function(K){se!==K&&!I&&(n.depthMask(K),se=K)},setFunc:function(K){if(ne&&(K=Ax[K]),fe!==K){switch(K){case fl:n.depthFunc(n.NEVER);break;case pl:n.depthFunc(n.ALWAYS);break;case ml:n.depthFunc(n.LESS);break;case Xs:n.depthFunc(n.LEQUAL);break;case gl:n.depthFunc(n.EQUAL);break;case _l:n.depthFunc(n.GEQUAL);break;case xl:n.depthFunc(n.GREATER);break;case vl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}fe=K}},setLocked:function(K){I=K},setClear:function(K){J!==K&&(ne&&(K=1-K),n.clearDepth(K),J=K)},reset:function(){I=!1,se=null,fe=null,J=null,ne=!1}}}function s(){let I=!1,ne=null,se=null,fe=null,J=null,K=null,ge=null,ke=null,lt=null;return{setTest:function(et){I||(et?Z(n.STENCIL_TEST):pe(n.STENCIL_TEST))},setMask:function(et){ne!==et&&!I&&(n.stencilMask(et),ne=et)},setFunc:function(et,jn,zn){(se!==et||fe!==jn||J!==zn)&&(n.stencilFunc(et,jn,zn),se=et,fe=jn,J=zn)},setOp:function(et,jn,zn){(K!==et||ge!==jn||ke!==zn)&&(n.stencilOp(et,jn,zn),K=et,ge=jn,ke=zn)},setLocked:function(et){I=et},setClear:function(et){lt!==et&&(n.clearStencil(et),lt=et)},reset:function(){I=!1,ne=null,se=null,fe=null,J=null,K=null,ge=null,ke=null,lt=null}}}const r=new t,a=new i,o=new s,c=new WeakMap,l=new WeakMap;let h={},d={},u=new WeakMap,f=[],g=null,_=!1,m=null,p=null,w=null,E=null,S=null,R=null,b=null,C=new qe(0,0,0),L=0,y=!1,v=null,P=null,F=null,O=null,V=null;const Y=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,ee=0;const G=n.getParameter(n.VERSION);G.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(G)[1]),W=ee>=1):G.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),W=ee>=2);let re=null,de={};const _e=n.getParameter(n.SCISSOR_BOX),ce=n.getParameter(n.VIEWPORT),Fe=new at().fromArray(_e),We=new at().fromArray(ce);function Qe(I,ne,se,fe){const J=new Uint8Array(4),K=n.createTexture();n.bindTexture(I,K),n.texParameteri(I,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(I,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ge=0;ge<se;ge++)I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY?n.texImage3D(ne,0,n.RGBA,1,1,fe,0,n.RGBA,n.UNSIGNED_BYTE,J):n.texImage2D(ne+ge,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,J);return K}const $={};$[n.TEXTURE_2D]=Qe(n.TEXTURE_2D,n.TEXTURE_2D,1),$[n.TEXTURE_CUBE_MAP]=Qe(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[n.TEXTURE_2D_ARRAY]=Qe(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),$[n.TEXTURE_3D]=Qe(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Z(n.DEPTH_TEST),a.setFunc(Xs),Le(!1),xe(Zc),Z(n.CULL_FACE),ut(Ai);function Z(I){h[I]!==!0&&(n.enable(I),h[I]=!0)}function pe(I){h[I]!==!1&&(n.disable(I),h[I]=!1)}function Ne(I,ne){return d[I]!==ne?(n.bindFramebuffer(I,ne),d[I]=ne,I===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=ne),I===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=ne),!0):!1}function we(I,ne){let se=f,fe=!1;if(I){se=u.get(ne),se===void 0&&(se=[],u.set(ne,se));const J=I.textures;if(se.length!==J.length||se[0]!==n.COLOR_ATTACHMENT0){for(let K=0,ge=J.length;K<ge;K++)se[K]=n.COLOR_ATTACHMENT0+K;se.length=J.length,fe=!0}}else se[0]!==n.BACK&&(se[0]=n.BACK,fe=!0);fe&&n.drawBuffers(se)}function je(I){return g!==I?(n.useProgram(I),g=I,!0):!1}const zt={[Ki]:n.FUNC_ADD,[ff]:n.FUNC_SUBTRACT,[pf]:n.FUNC_REVERSE_SUBTRACT};zt[mf]=n.MIN,zt[gf]=n.MAX;const D={[_f]:n.ZERO,[xf]:n.ONE,[vf]:n.SRC_COLOR,[dl]:n.SRC_ALPHA,[wf]:n.SRC_ALPHA_SATURATE,[bf]:n.DST_COLOR,[Mf]:n.DST_ALPHA,[yf]:n.ONE_MINUS_SRC_COLOR,[ul]:n.ONE_MINUS_SRC_ALPHA,[Ef]:n.ONE_MINUS_DST_COLOR,[Sf]:n.ONE_MINUS_DST_ALPHA,[Tf]:n.CONSTANT_COLOR,[Af]:n.ONE_MINUS_CONSTANT_COLOR,[Rf]:n.CONSTANT_ALPHA,[Cf]:n.ONE_MINUS_CONSTANT_ALPHA};function ut(I,ne,se,fe,J,K,ge,ke,lt,et){if(I===Ai){_===!0&&(pe(n.BLEND),_=!1);return}if(_===!1&&(Z(n.BLEND),_=!0),I!==uf){if(I!==m||et!==y){if((p!==Ki||S!==Ki)&&(n.blendEquation(n.FUNC_ADD),p=Ki,S=Ki),et)switch(I){case Os:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Jc:n.blendFunc(n.ONE,n.ONE);break;case Qc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case eh:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Os:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Jc:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Qc:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case eh:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}w=null,E=null,R=null,b=null,C.set(0,0,0),L=0,m=I,y=et}return}J=J||ne,K=K||se,ge=ge||fe,(ne!==p||J!==S)&&(n.blendEquationSeparate(zt[ne],zt[J]),p=ne,S=J),(se!==w||fe!==E||K!==R||ge!==b)&&(n.blendFuncSeparate(D[se],D[fe],D[K],D[ge]),w=se,E=fe,R=K,b=ge),(ke.equals(C)===!1||lt!==L)&&(n.blendColor(ke.r,ke.g,ke.b,lt),C.copy(ke),L=lt),m=I,y=!1}function ze(I,ne){I.side===Gt?pe(n.CULL_FACE):Z(n.CULL_FACE);let se=I.side===an;ne&&(se=!se),Le(se),I.blending===Os&&I.transparent===!1?ut(Ai):ut(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),r.setMask(I.colorWrite);const fe=I.stencilWrite;o.setTest(fe),fe&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),ve(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?Z(n.SAMPLE_ALPHA_TO_COVERAGE):pe(n.SAMPLE_ALPHA_TO_COVERAGE)}function Le(I){v!==I&&(I?n.frontFace(n.CW):n.frontFace(n.CCW),v=I)}function xe(I){I!==hf?(Z(n.CULL_FACE),I!==P&&(I===Zc?n.cullFace(n.BACK):I===df?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):pe(n.CULL_FACE),P=I}function ft(I){I!==F&&(W&&n.lineWidth(I),F=I)}function ve(I,ne,se){I?(Z(n.POLYGON_OFFSET_FILL),(O!==ne||V!==se)&&(n.polygonOffset(ne,se),O=ne,V=se)):pe(n.POLYGON_OFFSET_FILL)}function Ge(I){I?Z(n.SCISSOR_TEST):pe(n.SCISSOR_TEST)}function It(I){I===void 0&&(I=n.TEXTURE0+Y-1),re!==I&&(n.activeTexture(I),re=I)}function bt(I,ne,se){se===void 0&&(re===null?se=n.TEXTURE0+Y-1:se=re);let fe=de[se];fe===void 0&&(fe={type:void 0,texture:void 0},de[se]=fe),(fe.type!==I||fe.texture!==ne)&&(re!==se&&(n.activeTexture(se),re=se),n.bindTexture(I,ne||$[I]),fe.type=I,fe.texture=ne)}function T(){const I=de[re];I!==void 0&&I.type!==void 0&&(n.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function x(){try{n.compressedTexImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function z(){try{n.compressedTexImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function q(){try{n.texSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function j(){try{n.texSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function X(){try{n.compressedTexSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function be(){try{n.compressedTexSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ie(){try{n.texStorage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ye(){try{n.texStorage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Me(){try{n.texImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function te(){try{n.texImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function he(I){Fe.equals(I)===!1&&(n.scissor(I.x,I.y,I.z,I.w),Fe.copy(I))}function De(I){We.equals(I)===!1&&(n.viewport(I.x,I.y,I.z,I.w),We.copy(I))}function Se(I,ne){let se=l.get(ne);se===void 0&&(se=new WeakMap,l.set(ne,se));let fe=se.get(I);fe===void 0&&(fe=n.getUniformBlockIndex(ne,I.name),se.set(I,fe))}function oe(I,ne){const fe=l.get(ne).get(I);c.get(ne)!==fe&&(n.uniformBlockBinding(ne,fe,I.__bindingPointIndex),c.set(ne,fe))}function Oe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},re=null,de={},d={},u=new WeakMap,f=[],g=null,_=!1,m=null,p=null,w=null,E=null,S=null,R=null,b=null,C=new qe(0,0,0),L=0,y=!1,v=null,P=null,F=null,O=null,V=null,Fe.set(0,0,n.canvas.width,n.canvas.height),We.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:Z,disable:pe,bindFramebuffer:Ne,drawBuffers:we,useProgram:je,setBlending:ut,setMaterial:ze,setFlipSided:Le,setCullFace:xe,setLineWidth:ft,setPolygonOffset:ve,setScissorTest:Ge,activeTexture:It,bindTexture:bt,unbindTexture:T,compressedTexImage2D:x,compressedTexImage3D:z,texImage2D:Me,texImage3D:te,updateUBOMapping:Se,uniformBlockBinding:oe,texStorage2D:ie,texStorage3D:ye,texSubImage2D:q,texSubImage3D:j,compressedTexSubImage2D:X,compressedTexSubImage3D:be,scissor:he,viewport:De,reset:Oe}}function Cx(n,e,t,i,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ue,h=new WeakMap;let d;const u=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,x){return f?new OffscreenCanvas(T,x):Gr("canvas")}function _(T,x,z){let q=1;const j=bt(T);if((j.width>z||j.height>z)&&(q=z/Math.max(j.width,j.height)),q<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const X=Math.floor(q*j.width),be=Math.floor(q*j.height);d===void 0&&(d=g(X,be));const ie=x?g(X,be):d;return ie.width=X,ie.height=be,ie.getContext("2d").drawImage(T,0,0,X,be),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+X+"x"+be+")."),ie}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),T;return T}function m(T){return T.generateMipmaps}function p(T){n.generateMipmap(T)}function w(T){return T.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?n.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function E(T,x,z,q,j=!1){if(T!==null){if(n[T]!==void 0)return n[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let X=x;if(x===n.RED&&(z===n.FLOAT&&(X=n.R32F),z===n.HALF_FLOAT&&(X=n.R16F),z===n.UNSIGNED_BYTE&&(X=n.R8)),x===n.RED_INTEGER&&(z===n.UNSIGNED_BYTE&&(X=n.R8UI),z===n.UNSIGNED_SHORT&&(X=n.R16UI),z===n.UNSIGNED_INT&&(X=n.R32UI),z===n.BYTE&&(X=n.R8I),z===n.SHORT&&(X=n.R16I),z===n.INT&&(X=n.R32I)),x===n.RG&&(z===n.FLOAT&&(X=n.RG32F),z===n.HALF_FLOAT&&(X=n.RG16F),z===n.UNSIGNED_BYTE&&(X=n.RG8)),x===n.RG_INTEGER&&(z===n.UNSIGNED_BYTE&&(X=n.RG8UI),z===n.UNSIGNED_SHORT&&(X=n.RG16UI),z===n.UNSIGNED_INT&&(X=n.RG32UI),z===n.BYTE&&(X=n.RG8I),z===n.SHORT&&(X=n.RG16I),z===n.INT&&(X=n.RG32I)),x===n.RGB_INTEGER&&(z===n.UNSIGNED_BYTE&&(X=n.RGB8UI),z===n.UNSIGNED_SHORT&&(X=n.RGB16UI),z===n.UNSIGNED_INT&&(X=n.RGB32UI),z===n.BYTE&&(X=n.RGB8I),z===n.SHORT&&(X=n.RGB16I),z===n.INT&&(X=n.RGB32I)),x===n.RGBA_INTEGER&&(z===n.UNSIGNED_BYTE&&(X=n.RGBA8UI),z===n.UNSIGNED_SHORT&&(X=n.RGBA16UI),z===n.UNSIGNED_INT&&(X=n.RGBA32UI),z===n.BYTE&&(X=n.RGBA8I),z===n.SHORT&&(X=n.RGBA16I),z===n.INT&&(X=n.RGBA32I)),x===n.RGB&&(z===n.UNSIGNED_INT_5_9_9_9_REV&&(X=n.RGB9_E5),z===n.UNSIGNED_INT_10F_11F_11F_REV&&(X=n.R11F_G11F_B10F)),x===n.RGBA){const be=j?ja:Je.getTransfer(q);z===n.FLOAT&&(X=n.RGBA32F),z===n.HALF_FLOAT&&(X=n.RGBA16F),z===n.UNSIGNED_BYTE&&(X=be===st?n.SRGB8_ALPHA8:n.RGBA8),z===n.UNSIGNED_SHORT_4_4_4_4&&(X=n.RGBA4),z===n.UNSIGNED_SHORT_5_5_5_1&&(X=n.RGB5_A1)}return(X===n.R16F||X===n.R32F||X===n.RG16F||X===n.RG32F||X===n.RGBA16F||X===n.RGBA32F)&&e.get("EXT_color_buffer_float"),X}function S(T,x){let z;return T?x===null||x===os||x===zr?z=n.DEPTH24_STENCIL8:x===ci?z=n.DEPTH32F_STENCIL8:x===kr&&(z=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===os||x===zr?z=n.DEPTH_COMPONENT24:x===ci?z=n.DEPTH_COMPONENT32F:x===kr&&(z=n.DEPTH_COMPONENT16),z}function R(T,x){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==Un&&T.minFilter!==Gn?Math.log2(Math.max(x.width,x.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?x.mipmaps.length:1}function b(T){const x=T.target;x.removeEventListener("dispose",b),L(x),x.isVideoTexture&&h.delete(x)}function C(T){const x=T.target;x.removeEventListener("dispose",C),v(x)}function L(T){const x=i.get(T);if(x.__webglInit===void 0)return;const z=T.source,q=u.get(z);if(q){const j=q[x.__cacheKey];j.usedTimes--,j.usedTimes===0&&y(T),Object.keys(q).length===0&&u.delete(z)}i.remove(T)}function y(T){const x=i.get(T);n.deleteTexture(x.__webglTexture);const z=T.source,q=u.get(z);delete q[x.__cacheKey],a.memory.textures--}function v(T){const x=i.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),i.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(x.__webglFramebuffer[q]))for(let j=0;j<x.__webglFramebuffer[q].length;j++)n.deleteFramebuffer(x.__webglFramebuffer[q][j]);else n.deleteFramebuffer(x.__webglFramebuffer[q]);x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer[q])}else{if(Array.isArray(x.__webglFramebuffer))for(let q=0;q<x.__webglFramebuffer.length;q++)n.deleteFramebuffer(x.__webglFramebuffer[q]);else n.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&n.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let q=0;q<x.__webglColorRenderbuffer.length;q++)x.__webglColorRenderbuffer[q]&&n.deleteRenderbuffer(x.__webglColorRenderbuffer[q]);x.__webglDepthRenderbuffer&&n.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const z=T.textures;for(let q=0,j=z.length;q<j;q++){const X=i.get(z[q]);X.__webglTexture&&(n.deleteTexture(X.__webglTexture),a.memory.textures--),i.remove(z[q])}i.remove(T)}let P=0;function F(){P=0}function O(){const T=P;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),P+=1,T}function V(T){const x=[];return x.push(T.wrapS),x.push(T.wrapT),x.push(T.wrapR||0),x.push(T.magFilter),x.push(T.minFilter),x.push(T.anisotropy),x.push(T.internalFormat),x.push(T.format),x.push(T.type),x.push(T.generateMipmaps),x.push(T.premultiplyAlpha),x.push(T.flipY),x.push(T.unpackAlignment),x.push(T.colorSpace),x.join()}function Y(T,x){const z=i.get(T);if(T.isVideoTexture&&Ge(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&z.__version!==T.version){const q=T.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(z,T,x);return}}else T.isExternalTexture&&(z.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,z.__webglTexture,n.TEXTURE0+x)}function W(T,x){const z=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&z.__version!==T.version){$(z,T,x);return}t.bindTexture(n.TEXTURE_2D_ARRAY,z.__webglTexture,n.TEXTURE0+x)}function ee(T,x){const z=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&z.__version!==T.version){$(z,T,x);return}t.bindTexture(n.TEXTURE_3D,z.__webglTexture,n.TEXTURE0+x)}function G(T,x){const z=i.get(T);if(T.version>0&&z.__version!==T.version){Z(z,T,x);return}t.bindTexture(n.TEXTURE_CUBE_MAP,z.__webglTexture,n.TEXTURE0+x)}const re={[Ka]:n.REPEAT,[Ji]:n.CLAMP_TO_EDGE,[Sl]:n.MIRRORED_REPEAT},de={[Un]:n.NEAREST,[Of]:n.NEAREST_MIPMAP_NEAREST,[ta]:n.NEAREST_MIPMAP_LINEAR,[Gn]:n.LINEAR,[So]:n.LINEAR_MIPMAP_NEAREST,[Qi]:n.LINEAR_MIPMAP_LINEAR},_e={[Gf]:n.NEVER,[$f]:n.ALWAYS,[Vf]:n.LESS,[Yd]:n.LEQUAL,[Wf]:n.EQUAL,[Yf]:n.GEQUAL,[Xf]:n.GREATER,[qf]:n.NOTEQUAL};function ce(T,x){if(x.type===ci&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===Gn||x.magFilter===So||x.magFilter===ta||x.magFilter===Qi||x.minFilter===Gn||x.minFilter===So||x.minFilter===ta||x.minFilter===Qi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(T,n.TEXTURE_WRAP_S,re[x.wrapS]),n.texParameteri(T,n.TEXTURE_WRAP_T,re[x.wrapT]),(T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY)&&n.texParameteri(T,n.TEXTURE_WRAP_R,re[x.wrapR]),n.texParameteri(T,n.TEXTURE_MAG_FILTER,de[x.magFilter]),n.texParameteri(T,n.TEXTURE_MIN_FILTER,de[x.minFilter]),x.compareFunction&&(n.texParameteri(T,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(T,n.TEXTURE_COMPARE_FUNC,_e[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Un||x.minFilter!==ta&&x.minFilter!==Qi||x.type===ci&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const z=e.get("EXT_texture_filter_anisotropic");n.texParameterf(T,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function Fe(T,x){let z=!1;T.__webglInit===void 0&&(T.__webglInit=!0,x.addEventListener("dispose",b));const q=x.source;let j=u.get(q);j===void 0&&(j={},u.set(q,j));const X=V(x);if(X!==T.__cacheKey){j[X]===void 0&&(j[X]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,z=!0),j[X].usedTimes++;const be=j[T.__cacheKey];be!==void 0&&(j[T.__cacheKey].usedTimes--,be.usedTimes===0&&y(x)),T.__cacheKey=X,T.__webglTexture=j[X].texture}return z}function We(T,x,z){return Math.floor(Math.floor(T/z)/x)}function Qe(T,x,z,q){const X=T.updateRanges;if(X.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,x.width,x.height,z,q,x.data);else{X.sort((te,he)=>te.start-he.start);let be=0;for(let te=1;te<X.length;te++){const he=X[be],De=X[te],Se=he.start+he.count,oe=We(De.start,x.width,4),Oe=We(he.start,x.width,4);De.start<=Se+1&&oe===Oe&&We(De.start+De.count-1,x.width,4)===oe?he.count=Math.max(he.count,De.start+De.count-he.start):(++be,X[be]=De)}X.length=be+1;const ie=n.getParameter(n.UNPACK_ROW_LENGTH),ye=n.getParameter(n.UNPACK_SKIP_PIXELS),Me=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,x.width);for(let te=0,he=X.length;te<he;te++){const De=X[te],Se=Math.floor(De.start/4),oe=Math.ceil(De.count/4),Oe=Se%x.width,I=Math.floor(Se/x.width),ne=oe,se=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Oe),n.pixelStorei(n.UNPACK_SKIP_ROWS,I),t.texSubImage2D(n.TEXTURE_2D,0,Oe,I,ne,se,z,q,x.data)}T.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,ie),n.pixelStorei(n.UNPACK_SKIP_PIXELS,ye),n.pixelStorei(n.UNPACK_SKIP_ROWS,Me)}}function $(T,x,z){let q=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(q=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(q=n.TEXTURE_3D);const j=Fe(T,x),X=x.source;t.bindTexture(q,T.__webglTexture,n.TEXTURE0+z);const be=i.get(X);if(X.version!==be.__version||j===!0){t.activeTexture(n.TEXTURE0+z);const ie=Je.getPrimaries(Je.workingColorSpace),ye=x.colorSpace===Ei?null:Je.getPrimaries(x.colorSpace),Me=x.colorSpace===Ei||ie===ye?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);let te=_(x.image,!1,s.maxTextureSize);te=It(x,te);const he=r.convert(x.format,x.colorSpace),De=r.convert(x.type);let Se=E(x.internalFormat,he,De,x.colorSpace,x.isVideoTexture);ce(q,x);let oe;const Oe=x.mipmaps,I=x.isVideoTexture!==!0,ne=be.__version===void 0||j===!0,se=X.dataReady,fe=R(x,te);if(x.isDepthTexture)Se=S(x.format===Br,x.type),ne&&(I?t.texStorage2D(n.TEXTURE_2D,1,Se,te.width,te.height):t.texImage2D(n.TEXTURE_2D,0,Se,te.width,te.height,0,he,De,null));else if(x.isDataTexture)if(Oe.length>0){I&&ne&&t.texStorage2D(n.TEXTURE_2D,fe,Se,Oe[0].width,Oe[0].height);for(let J=0,K=Oe.length;J<K;J++)oe=Oe[J],I?se&&t.texSubImage2D(n.TEXTURE_2D,J,0,0,oe.width,oe.height,he,De,oe.data):t.texImage2D(n.TEXTURE_2D,J,Se,oe.width,oe.height,0,he,De,oe.data);x.generateMipmaps=!1}else I?(ne&&t.texStorage2D(n.TEXTURE_2D,fe,Se,te.width,te.height),se&&Qe(x,te,he,De)):t.texImage2D(n.TEXTURE_2D,0,Se,te.width,te.height,0,he,De,te.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){I&&ne&&t.texStorage3D(n.TEXTURE_2D_ARRAY,fe,Se,Oe[0].width,Oe[0].height,te.depth);for(let J=0,K=Oe.length;J<K;J++)if(oe=Oe[J],x.format!==In)if(he!==null)if(I){if(se)if(x.layerUpdates.size>0){const ge=Lh(oe.width,oe.height,x.format,x.type);for(const ke of x.layerUpdates){const lt=oe.data.subarray(ke*ge/oe.data.BYTES_PER_ELEMENT,(ke+1)*ge/oe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,ke,oe.width,oe.height,1,he,lt)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,0,oe.width,oe.height,te.depth,he,oe.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,J,Se,oe.width,oe.height,te.depth,0,oe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else I?se&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,0,oe.width,oe.height,te.depth,he,De,oe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,J,Se,oe.width,oe.height,te.depth,0,he,De,oe.data)}else{I&&ne&&t.texStorage2D(n.TEXTURE_2D,fe,Se,Oe[0].width,Oe[0].height);for(let J=0,K=Oe.length;J<K;J++)oe=Oe[J],x.format!==In?he!==null?I?se&&t.compressedTexSubImage2D(n.TEXTURE_2D,J,0,0,oe.width,oe.height,he,oe.data):t.compressedTexImage2D(n.TEXTURE_2D,J,Se,oe.width,oe.height,0,oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):I?se&&t.texSubImage2D(n.TEXTURE_2D,J,0,0,oe.width,oe.height,he,De,oe.data):t.texImage2D(n.TEXTURE_2D,J,Se,oe.width,oe.height,0,he,De,oe.data)}else if(x.isDataArrayTexture)if(I){if(ne&&t.texStorage3D(n.TEXTURE_2D_ARRAY,fe,Se,te.width,te.height,te.depth),se)if(x.layerUpdates.size>0){const J=Lh(te.width,te.height,x.format,x.type);for(const K of x.layerUpdates){const ge=te.data.subarray(K*J/te.data.BYTES_PER_ELEMENT,(K+1)*J/te.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,K,te.width,te.height,1,he,De,ge)}x.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,he,De,te.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Se,te.width,te.height,te.depth,0,he,De,te.data);else if(x.isData3DTexture)I?(ne&&t.texStorage3D(n.TEXTURE_3D,fe,Se,te.width,te.height,te.depth),se&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,he,De,te.data)):t.texImage3D(n.TEXTURE_3D,0,Se,te.width,te.height,te.depth,0,he,De,te.data);else if(x.isFramebufferTexture){if(ne)if(I)t.texStorage2D(n.TEXTURE_2D,fe,Se,te.width,te.height);else{let J=te.width,K=te.height;for(let ge=0;ge<fe;ge++)t.texImage2D(n.TEXTURE_2D,ge,Se,J,K,0,he,De,null),J>>=1,K>>=1}}else if(Oe.length>0){if(I&&ne){const J=bt(Oe[0]);t.texStorage2D(n.TEXTURE_2D,fe,Se,J.width,J.height)}for(let J=0,K=Oe.length;J<K;J++)oe=Oe[J],I?se&&t.texSubImage2D(n.TEXTURE_2D,J,0,0,he,De,oe):t.texImage2D(n.TEXTURE_2D,J,Se,he,De,oe);x.generateMipmaps=!1}else if(I){if(ne){const J=bt(te);t.texStorage2D(n.TEXTURE_2D,fe,Se,J.width,J.height)}se&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,he,De,te)}else t.texImage2D(n.TEXTURE_2D,0,Se,he,De,te);m(x)&&p(q),be.__version=X.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function Z(T,x,z){if(x.image.length!==6)return;const q=Fe(T,x),j=x.source;t.bindTexture(n.TEXTURE_CUBE_MAP,T.__webglTexture,n.TEXTURE0+z);const X=i.get(j);if(j.version!==X.__version||q===!0){t.activeTexture(n.TEXTURE0+z);const be=Je.getPrimaries(Je.workingColorSpace),ie=x.colorSpace===Ei?null:Je.getPrimaries(x.colorSpace),ye=x.colorSpace===Ei||be===ie?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);const Me=x.isCompressedTexture||x.image[0].isCompressedTexture,te=x.image[0]&&x.image[0].isDataTexture,he=[];for(let K=0;K<6;K++)!Me&&!te?he[K]=_(x.image[K],!0,s.maxCubemapSize):he[K]=te?x.image[K].image:x.image[K],he[K]=It(x,he[K]);const De=he[0],Se=r.convert(x.format,x.colorSpace),oe=r.convert(x.type),Oe=E(x.internalFormat,Se,oe,x.colorSpace),I=x.isVideoTexture!==!0,ne=X.__version===void 0||q===!0,se=j.dataReady;let fe=R(x,De);ce(n.TEXTURE_CUBE_MAP,x);let J;if(Me){I&&ne&&t.texStorage2D(n.TEXTURE_CUBE_MAP,fe,Oe,De.width,De.height);for(let K=0;K<6;K++){J=he[K].mipmaps;for(let ge=0;ge<J.length;ge++){const ke=J[ge];x.format!==In?Se!==null?I?se&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ge,0,0,ke.width,ke.height,Se,ke.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ge,Oe,ke.width,ke.height,0,ke.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ge,0,0,ke.width,ke.height,Se,oe,ke.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ge,Oe,ke.width,ke.height,0,Se,oe,ke.data)}}}else{if(J=x.mipmaps,I&&ne){J.length>0&&fe++;const K=bt(he[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,fe,Oe,K.width,K.height)}for(let K=0;K<6;K++)if(te){I?se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,he[K].width,he[K].height,Se,oe,he[K].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Oe,he[K].width,he[K].height,0,Se,oe,he[K].data);for(let ge=0;ge<J.length;ge++){const lt=J[ge].image[K].image;I?se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ge+1,0,0,lt.width,lt.height,Se,oe,lt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ge+1,Oe,lt.width,lt.height,0,Se,oe,lt.data)}}else{I?se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Se,oe,he[K]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Oe,Se,oe,he[K]);for(let ge=0;ge<J.length;ge++){const ke=J[ge];I?se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ge+1,0,0,Se,oe,ke.image[K]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ge+1,Oe,Se,oe,ke.image[K])}}}m(x)&&p(n.TEXTURE_CUBE_MAP),X.__version=j.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function pe(T,x,z,q,j,X){const be=r.convert(z.format,z.colorSpace),ie=r.convert(z.type),ye=E(z.internalFormat,be,ie,z.colorSpace),Me=i.get(x),te=i.get(z);if(te.__renderTarget=x,!Me.__hasExternalTextures){const he=Math.max(1,x.width>>X),De=Math.max(1,x.height>>X);j===n.TEXTURE_3D||j===n.TEXTURE_2D_ARRAY?t.texImage3D(j,X,ye,he,De,x.depth,0,be,ie,null):t.texImage2D(j,X,ye,he,De,0,be,ie,null)}t.bindFramebuffer(n.FRAMEBUFFER,T),ve(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,q,j,te.__webglTexture,0,ft(x)):(j===n.TEXTURE_2D||j>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,q,j,te.__webglTexture,X),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ne(T,x,z){if(n.bindRenderbuffer(n.RENDERBUFFER,T),x.depthBuffer){const q=x.depthTexture,j=q&&q.isDepthTexture?q.type:null,X=S(x.stencilBuffer,j),be=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ie=ft(x);ve(x)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ie,X,x.width,x.height):z?n.renderbufferStorageMultisample(n.RENDERBUFFER,ie,X,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,X,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,be,n.RENDERBUFFER,T)}else{const q=x.textures;for(let j=0;j<q.length;j++){const X=q[j],be=r.convert(X.format,X.colorSpace),ie=r.convert(X.type),ye=E(X.internalFormat,be,ie,X.colorSpace),Me=ft(x);z&&ve(x)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Me,ye,x.width,x.height):ve(x)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Me,ye,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,ye,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function we(T,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,T),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const q=i.get(x.depthTexture);q.__renderTarget=x,(!q.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),Y(x.depthTexture,0);const j=q.__webglTexture,X=ft(x);if(x.depthTexture.format===Or)ve(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,j,0,X):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,j,0);else if(x.depthTexture.format===Br)ve(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,j,0,X):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function je(T){const x=i.get(T),z=T.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==T.depthTexture){const q=T.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),q){const j=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,q.removeEventListener("dispose",j)};q.addEventListener("dispose",j),x.__depthDisposeCallback=j}x.__boundDepthTexture=q}if(T.depthTexture&&!x.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");const q=T.texture.mipmaps;q&&q.length>0?we(x.__webglFramebuffer[0],T):we(x.__webglFramebuffer,T)}else if(z){x.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[q]),x.__webglDepthbuffer[q]===void 0)x.__webglDepthbuffer[q]=n.createRenderbuffer(),Ne(x.__webglDepthbuffer[q],T,!1);else{const j=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,X=x.__webglDepthbuffer[q];n.bindRenderbuffer(n.RENDERBUFFER,X),n.framebufferRenderbuffer(n.FRAMEBUFFER,j,n.RENDERBUFFER,X)}}else{const q=T.texture.mipmaps;if(q&&q.length>0?t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=n.createRenderbuffer(),Ne(x.__webglDepthbuffer,T,!1);else{const j=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,X=x.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,X),n.framebufferRenderbuffer(n.FRAMEBUFFER,j,n.RENDERBUFFER,X)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function zt(T,x,z){const q=i.get(T);x!==void 0&&pe(q.__webglFramebuffer,T,T.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),z!==void 0&&je(T)}function D(T){const x=T.texture,z=i.get(T),q=i.get(x);T.addEventListener("dispose",C);const j=T.textures,X=T.isWebGLCubeRenderTarget===!0,be=j.length>1;if(be||(q.__webglTexture===void 0&&(q.__webglTexture=n.createTexture()),q.__version=x.version,a.memory.textures++),X){z.__webglFramebuffer=[];for(let ie=0;ie<6;ie++)if(x.mipmaps&&x.mipmaps.length>0){z.__webglFramebuffer[ie]=[];for(let ye=0;ye<x.mipmaps.length;ye++)z.__webglFramebuffer[ie][ye]=n.createFramebuffer()}else z.__webglFramebuffer[ie]=n.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){z.__webglFramebuffer=[];for(let ie=0;ie<x.mipmaps.length;ie++)z.__webglFramebuffer[ie]=n.createFramebuffer()}else z.__webglFramebuffer=n.createFramebuffer();if(be)for(let ie=0,ye=j.length;ie<ye;ie++){const Me=i.get(j[ie]);Me.__webglTexture===void 0&&(Me.__webglTexture=n.createTexture(),a.memory.textures++)}if(T.samples>0&&ve(T)===!1){z.__webglMultisampledFramebuffer=n.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let ie=0;ie<j.length;ie++){const ye=j[ie];z.__webglColorRenderbuffer[ie]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,z.__webglColorRenderbuffer[ie]);const Me=r.convert(ye.format,ye.colorSpace),te=r.convert(ye.type),he=E(ye.internalFormat,Me,te,ye.colorSpace,T.isXRRenderTarget===!0),De=ft(T);n.renderbufferStorageMultisample(n.RENDERBUFFER,De,he,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ie,n.RENDERBUFFER,z.__webglColorRenderbuffer[ie])}n.bindRenderbuffer(n.RENDERBUFFER,null),T.depthBuffer&&(z.__webglDepthRenderbuffer=n.createRenderbuffer(),Ne(z.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(X){t.bindTexture(n.TEXTURE_CUBE_MAP,q.__webglTexture),ce(n.TEXTURE_CUBE_MAP,x);for(let ie=0;ie<6;ie++)if(x.mipmaps&&x.mipmaps.length>0)for(let ye=0;ye<x.mipmaps.length;ye++)pe(z.__webglFramebuffer[ie][ye],T,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ye);else pe(z.__webglFramebuffer[ie],T,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0);m(x)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(be){for(let ie=0,ye=j.length;ie<ye;ie++){const Me=j[ie],te=i.get(Me);let he=n.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(he=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(he,te.__webglTexture),ce(he,Me),pe(z.__webglFramebuffer,T,Me,n.COLOR_ATTACHMENT0+ie,he,0),m(Me)&&p(he)}t.unbindTexture()}else{let ie=n.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ie=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ie,q.__webglTexture),ce(ie,x),x.mipmaps&&x.mipmaps.length>0)for(let ye=0;ye<x.mipmaps.length;ye++)pe(z.__webglFramebuffer[ye],T,x,n.COLOR_ATTACHMENT0,ie,ye);else pe(z.__webglFramebuffer,T,x,n.COLOR_ATTACHMENT0,ie,0);m(x)&&p(ie),t.unbindTexture()}T.depthBuffer&&je(T)}function ut(T){const x=T.textures;for(let z=0,q=x.length;z<q;z++){const j=x[z];if(m(j)){const X=w(T),be=i.get(j).__webglTexture;t.bindTexture(X,be),p(X),t.unbindTexture()}}}const ze=[],Le=[];function xe(T){if(T.samples>0){if(ve(T)===!1){const x=T.textures,z=T.width,q=T.height;let j=n.COLOR_BUFFER_BIT;const X=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,be=i.get(T),ie=x.length>1;if(ie)for(let Me=0;Me<x.length;Me++)t.bindFramebuffer(n.FRAMEBUFFER,be.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Me,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,be.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Me,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,be.__webglMultisampledFramebuffer);const ye=T.texture.mipmaps;ye&&ye.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,be.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,be.__webglFramebuffer);for(let Me=0;Me<x.length;Me++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(j|=n.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(j|=n.STENCIL_BUFFER_BIT)),ie){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,be.__webglColorRenderbuffer[Me]);const te=i.get(x[Me]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,te,0)}n.blitFramebuffer(0,0,z,q,0,0,z,q,j,n.NEAREST),c===!0&&(ze.length=0,Le.length=0,ze.push(n.COLOR_ATTACHMENT0+Me),T.depthBuffer&&T.resolveDepthBuffer===!1&&(ze.push(X),Le.push(X),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Le)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ze))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ie)for(let Me=0;Me<x.length;Me++){t.bindFramebuffer(n.FRAMEBUFFER,be.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Me,n.RENDERBUFFER,be.__webglColorRenderbuffer[Me]);const te=i.get(x[Me]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,be.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Me,n.TEXTURE_2D,te,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,be.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&c){const x=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[x])}}}function ft(T){return Math.min(s.maxSamples,T.samples)}function ve(T){const x=i.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Ge(T){const x=a.render.frame;h.get(T)!==x&&(h.set(T,x),T.update())}function It(T,x){const z=T.colorSpace,q=T.format,j=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||z!==$s&&z!==Ei&&(Je.getTransfer(z)===st?(q!==In||j!==Wn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),x}function bt(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(l.width=T.naturalWidth||T.width,l.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(l.width=T.displayWidth,l.height=T.displayHeight):(l.width=T.width,l.height=T.height),l}this.allocateTextureUnit=O,this.resetTextureUnits=F,this.setTexture2D=Y,this.setTexture2DArray=W,this.setTexture3D=ee,this.setTextureCube=G,this.rebindTextures=zt,this.setupRenderTarget=D,this.updateRenderTargetMipmap=ut,this.updateMultisampleRenderTarget=xe,this.setupDepthRenderbuffer=je,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=ve}function Px(n,e){function t(i,s=Ei){let r;const a=Je.getTransfer(s);if(i===Wn)return n.UNSIGNED_BYTE;if(i===pc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===mc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Od)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Bd)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===kd)return n.BYTE;if(i===zd)return n.SHORT;if(i===kr)return n.UNSIGNED_SHORT;if(i===fc)return n.INT;if(i===os)return n.UNSIGNED_INT;if(i===ci)return n.FLOAT;if(i===Kr)return n.HALF_FLOAT;if(i===Hd)return n.ALPHA;if(i===Gd)return n.RGB;if(i===In)return n.RGBA;if(i===Or)return n.DEPTH_COMPONENT;if(i===Br)return n.DEPTH_STENCIL;if(i===Vd)return n.RED;if(i===gc)return n.RED_INTEGER;if(i===Wd)return n.RG;if(i===_c)return n.RG_INTEGER;if(i===xc)return n.RGBA_INTEGER;if(i===Ha||i===Ga||i===Va||i===Wa)if(a===st)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Ha)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ga)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Va)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Wa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Ha)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ga)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Va)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Wa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===bl||i===El||i===wl||i===Tl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===bl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===El)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===wl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Tl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Al||i===Rl||i===Cl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Al||i===Rl)return a===st?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Cl)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Pl||i===Dl||i===Ll||i===Il||i===Ul||i===Nl||i===Fl||i===kl||i===zl||i===Ol||i===Bl||i===Hl||i===Gl||i===Vl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Pl)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Dl)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ll)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Il)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ul)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Nl)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Fl)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===kl)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===zl)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ol)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Bl)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Hl)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Gl)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Vl)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Wl||i===Xl||i===ql)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Wl)return a===st?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Xl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ql)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Yl||i===$l||i===Kl||i===jl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Yl)return r.COMPRESSED_RED_RGTC1_EXT;if(i===$l)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Kl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===jl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===zr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const Dx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Lx=`
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

}`;class Ix{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new ru(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Li({vertexShader:Dx,fragmentShader:Lx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ae(new qt(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Ux extends tr{constructor(e,t){super();const i=this;let s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,d=null,u=null,f=null,g=null;const _=typeof XRWebGLBinding<"u",m=new Ix,p={},w=t.getContextAttributes();let E=null,S=null;const R=[],b=[],C=new Ue;let L=null;const y=new pn;y.viewport=new at;const v=new pn;v.viewport=new at;const P=[y,v],F=new Qp;let O=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let Z=R[$];return Z===void 0&&(Z=new Vo,R[$]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function($){let Z=R[$];return Z===void 0&&(Z=new Vo,R[$]=Z),Z.getGripSpace()},this.getHand=function($){let Z=R[$];return Z===void 0&&(Z=new Vo,R[$]=Z),Z.getHandSpace()};function Y($){const Z=b.indexOf($.inputSource);if(Z===-1)return;const pe=R[Z];pe!==void 0&&(pe.update($.inputSource,$.frame,l||a),pe.dispatchEvent({type:$.type,data:$.inputSource}))}function W(){s.removeEventListener("select",Y),s.removeEventListener("selectstart",Y),s.removeEventListener("selectend",Y),s.removeEventListener("squeeze",Y),s.removeEventListener("squeezestart",Y),s.removeEventListener("squeezeend",Y),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",ee);for(let $=0;$<R.length;$++){const Z=b[$];Z!==null&&(b[$]=null,R[$].disconnect(Z))}O=null,V=null,m.reset();for(const $ in p)delete p[$];e.setRenderTarget(E),f=null,u=null,d=null,s=null,S=null,Qe.stop(),i.isPresenting=!1,e.setPixelRatio(L),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function($){l=$},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(E=e.getRenderTarget(),s.addEventListener("select",Y),s.addEventListener("selectstart",Y),s.addEventListener("selectend",Y),s.addEventListener("squeeze",Y),s.addEventListener("squeezestart",Y),s.addEventListener("squeezeend",Y),s.addEventListener("end",W),s.addEventListener("inputsourceschange",ee),w.xrCompatible!==!0&&await t.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(C),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let pe=null,Ne=null,we=null;w.depth&&(we=w.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,pe=w.stencil?Br:Or,Ne=w.stencil?zr:os);const je={colorFormat:t.RGBA8,depthFormat:we,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(je),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),S=new ls(u.textureWidth,u.textureHeight,{format:In,type:Wn,depthTexture:new su(u.textureWidth,u.textureHeight,Ne,void 0,void 0,void 0,void 0,void 0,void 0,pe),stencilBuffer:w.stencil,colorSpace:e.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{const pe={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,pe),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),S=new ls(f.framebufferWidth,f.framebufferHeight,{format:In,type:Wn,colorSpace:e.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),Qe.setContext(s),Qe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ee($){for(let Z=0;Z<$.removed.length;Z++){const pe=$.removed[Z],Ne=b.indexOf(pe);Ne>=0&&(b[Ne]=null,R[Ne].disconnect(pe))}for(let Z=0;Z<$.added.length;Z++){const pe=$.added[Z];let Ne=b.indexOf(pe);if(Ne===-1){for(let je=0;je<R.length;je++)if(je>=b.length){b.push(pe),Ne=je;break}else if(b[je]===null){b[je]=pe,Ne=je;break}if(Ne===-1)break}const we=R[Ne];we&&we.connect(pe)}}const G=new U,re=new U;function de($,Z,pe){G.setFromMatrixPosition(Z.matrixWorld),re.setFromMatrixPosition(pe.matrixWorld);const Ne=G.distanceTo(re),we=Z.projectionMatrix.elements,je=pe.projectionMatrix.elements,zt=we[14]/(we[10]-1),D=we[14]/(we[10]+1),ut=(we[9]+1)/we[5],ze=(we[9]-1)/we[5],Le=(we[8]-1)/we[0],xe=(je[8]+1)/je[0],ft=zt*Le,ve=zt*xe,Ge=Ne/(-Le+xe),It=Ge*-Le;if(Z.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(It),$.translateZ(Ge),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),we[10]===-1)$.projectionMatrix.copy(Z.projectionMatrix),$.projectionMatrixInverse.copy(Z.projectionMatrixInverse);else{const bt=zt+Ge,T=D+Ge,x=ft-It,z=ve+(Ne-It),q=ut*D/T*bt,j=ze*D/T*bt;$.projectionMatrix.makePerspective(x,z,q,j,bt,T),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function _e($,Z){Z===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(Z.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let Z=$.near,pe=$.far;m.texture!==null&&(m.depthNear>0&&(Z=m.depthNear),m.depthFar>0&&(pe=m.depthFar)),F.near=v.near=y.near=Z,F.far=v.far=y.far=pe,(O!==F.near||V!==F.far)&&(s.updateRenderState({depthNear:F.near,depthFar:F.far}),O=F.near,V=F.far),F.layers.mask=$.layers.mask|6,y.layers.mask=F.layers.mask&3,v.layers.mask=F.layers.mask&5;const Ne=$.parent,we=F.cameras;_e(F,Ne);for(let je=0;je<we.length;je++)_e(we[je],Ne);we.length===2?de(F,y,v):F.projectionMatrix.copy(y.projectionMatrix),ce($,F,Ne)};function ce($,Z,pe){pe===null?$.matrix.copy(Z.matrixWorld):($.matrix.copy(pe.matrixWorld),$.matrix.invert(),$.matrix.multiply(Z.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(Z.projectionMatrix),$.projectionMatrixInverse.copy(Z.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Hr*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(u===null&&f===null))return c},this.setFoveation=function($){c=$,u!==null&&(u.fixedFoveation=$),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=$)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(F)},this.getCameraTexture=function($){return p[$]};let Fe=null;function We($,Z){if(h=Z.getViewerPose(l||a),g=Z,h!==null){const pe=h.views;f!==null&&(e.setRenderTargetFramebuffer(S,f.framebuffer),e.setRenderTarget(S));let Ne=!1;pe.length!==F.cameras.length&&(F.cameras.length=0,Ne=!0);for(let D=0;D<pe.length;D++){const ut=pe[D];let ze=null;if(f!==null)ze=f.getViewport(ut);else{const xe=d.getViewSubImage(u,ut);ze=xe.viewport,D===0&&(e.setRenderTargetTextures(S,xe.colorTexture,xe.depthStencilTexture),e.setRenderTarget(S))}let Le=P[D];Le===void 0&&(Le=new pn,Le.layers.enable(D),Le.viewport=new at,P[D]=Le),Le.matrix.fromArray(ut.transform.matrix),Le.matrix.decompose(Le.position,Le.quaternion,Le.scale),Le.projectionMatrix.fromArray(ut.projectionMatrix),Le.projectionMatrixInverse.copy(Le.projectionMatrix).invert(),Le.viewport.set(ze.x,ze.y,ze.width,ze.height),D===0&&(F.matrix.copy(Le.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),Ne===!0&&F.cameras.push(Le)}const we=s.enabledFeatures;if(we&&we.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){d=i.getBinding();const D=d.getDepthInformation(pe[0]);D&&D.isValid&&D.texture&&m.init(D,s.renderState)}if(we&&we.includes("camera-access")&&_){e.state.unbindTexture(),d=i.getBinding();for(let D=0;D<pe.length;D++){const ut=pe[D].camera;if(ut){let ze=p[ut];ze||(ze=new ru,p[ut]=ze);const Le=d.getCameraImage(ut);ze.sourceTexture=Le}}}}for(let pe=0;pe<R.length;pe++){const Ne=b[pe],we=R[pe];Ne!==null&&we!==void 0&&we.update(Ne,Z,l||a)}Fe&&Fe($,Z),Z.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Z}),g=null}const Qe=new hu;Qe.setAnimationLoop(We),this.setAnimationLoop=function($){Fe=$},this.dispose=function(){}}}const Gi=new Xn,Nx=new dt;function Fx(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Qd(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,w,E,S){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,S)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,w,E):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===an&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===an&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const w=e.get(p),E=w.envMap,S=w.envMapRotation;E&&(m.envMap.value=E,Gi.copy(S),Gi.x*=-1,Gi.y*=-1,Gi.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Gi.y*=-1,Gi.z*=-1),m.envMapRotation.value.setFromMatrix4(Nx.makeRotationFromEuler(Gi)),m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,w,E){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*w,m.scale.value=E*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,w){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===an&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const w=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function kx(n,e,t,i){let s={},r={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(w,E){const S=E.program;i.uniformBlockBinding(w,S)}function l(w,E){let S=s[w.id];S===void 0&&(g(w),S=h(w),s[w.id]=S,w.addEventListener("dispose",m));const R=E.program;i.updateUBOMapping(w,R);const b=e.render.frame;r[w.id]!==b&&(u(w),r[w.id]=b)}function h(w){const E=d();w.__bindingPointIndex=E;const S=n.createBuffer(),R=w.__size,b=w.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,R,b),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,E,S),S}function d(){for(let w=0;w<o;w++)if(a.indexOf(w)===-1)return a.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(w){const E=s[w.id],S=w.uniforms,R=w.__cache;n.bindBuffer(n.UNIFORM_BUFFER,E);for(let b=0,C=S.length;b<C;b++){const L=Array.isArray(S[b])?S[b]:[S[b]];for(let y=0,v=L.length;y<v;y++){const P=L[y];if(f(P,b,y,R)===!0){const F=P.__offset,O=Array.isArray(P.value)?P.value:[P.value];let V=0;for(let Y=0;Y<O.length;Y++){const W=O[Y],ee=_(W);typeof W=="number"||typeof W=="boolean"?(P.__data[0]=W,n.bufferSubData(n.UNIFORM_BUFFER,F+V,P.__data)):W.isMatrix3?(P.__data[0]=W.elements[0],P.__data[1]=W.elements[1],P.__data[2]=W.elements[2],P.__data[3]=0,P.__data[4]=W.elements[3],P.__data[5]=W.elements[4],P.__data[6]=W.elements[5],P.__data[7]=0,P.__data[8]=W.elements[6],P.__data[9]=W.elements[7],P.__data[10]=W.elements[8],P.__data[11]=0):(W.toArray(P.__data,V),V+=ee.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,F,P.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(w,E,S,R){const b=w.value,C=E+"_"+S;if(R[C]===void 0)return typeof b=="number"||typeof b=="boolean"?R[C]=b:R[C]=b.clone(),!0;{const L=R[C];if(typeof b=="number"||typeof b=="boolean"){if(L!==b)return R[C]=b,!0}else if(L.equals(b)===!1)return L.copy(b),!0}return!1}function g(w){const E=w.uniforms;let S=0;const R=16;for(let C=0,L=E.length;C<L;C++){const y=Array.isArray(E[C])?E[C]:[E[C]];for(let v=0,P=y.length;v<P;v++){const F=y[v],O=Array.isArray(F.value)?F.value:[F.value];for(let V=0,Y=O.length;V<Y;V++){const W=O[V],ee=_(W),G=S%R,re=G%ee.boundary,de=G+re;S+=re,de!==0&&R-de<ee.storage&&(S+=R-de),F.__data=new Float32Array(ee.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=S,S+=ee.storage}}}const b=S%R;return b>0&&(S+=R-b),w.__size=S,w.__cache={},this}function _(w){const E={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(E.boundary=4,E.storage=4):w.isVector2?(E.boundary=8,E.storage=8):w.isVector3||w.isColor?(E.boundary=16,E.storage=12):w.isVector4?(E.boundary=16,E.storage=16):w.isMatrix3?(E.boundary=48,E.storage=48):w.isMatrix4?(E.boundary=64,E.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),E}function m(w){const E=w.target;E.removeEventListener("dispose",m);const S=a.indexOf(E.__bindingPointIndex);a.splice(S,1),n.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function p(){for(const w in s)n.deleteBuffer(s[w]);a=[],s={},r={}}return{bind:c,update:l,dispose:p}}class zx{constructor(e={}){const{canvas:t=dp(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=a;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const w=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ri,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const S=this;let R=!1;this._outputColorSpace=gt;let b=0,C=0,L=null,y=-1,v=null;const P=new at,F=new at;let O=null;const V=new qe(0);let Y=0,W=t.width,ee=t.height,G=1,re=null,de=null;const _e=new at(0,0,W,ee),ce=new at(0,0,W,ee);let Fe=!1;const We=new Ec;let Qe=!1,$=!1;const Z=new dt,pe=new U,Ne=new at,we={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let je=!1;function zt(){return L===null?G:1}let D=i;function ut(M,N){return t.getContext(M,N)}try{const M={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${uc}`),t.addEventListener("webglcontextlost",se,!1),t.addEventListener("webglcontextrestored",fe,!1),t.addEventListener("webglcontextcreationerror",J,!1),D===null){const N="webgl2";if(D=ut(N,M),D===null)throw ut(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let ze,Le,xe,ft,ve,Ge,It,bt,T,x,z,q,j,X,be,ie,ye,Me,te,he,De,Se,oe,Oe;function I(){ze=new $g(D),ze.init(),Se=new Px(D,ze),Le=new Hg(D,ze,e,Se),xe=new Rx(D,ze),Le.reversedDepthBuffer&&u&&xe.buffers.depth.setReversed(!0),ft=new Zg(D),ve=new mx,Ge=new Cx(D,ze,xe,ve,Le,Se,ft),It=new Vg(S),bt=new Yg(S),T=new im(D),oe=new Og(D,T),x=new Kg(D,T,ft,oe),z=new Qg(D,x,T,ft),te=new Jg(D,Le,Ge),ie=new Gg(ve),q=new px(S,It,bt,ze,Le,oe,ie),j=new Fx(S,ve),X=new _x,be=new bx(ze),Me=new zg(S,It,bt,xe,z,f,c),ye=new Tx(S,z,Le),Oe=new kx(D,ft,Le,xe),he=new Bg(D,ze,ft),De=new jg(D,ze,ft),ft.programs=q.programs,S.capabilities=Le,S.extensions=ze,S.properties=ve,S.renderLists=X,S.shadowMap=ye,S.state=xe,S.info=ft}I();const ne=new Ux(S,D);this.xr=ne,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const M=ze.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=ze.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(M){M!==void 0&&(G=M,this.setSize(W,ee,!1))},this.getSize=function(M){return M.set(W,ee)},this.setSize=function(M,N,B=!0){if(ne.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=M,ee=N,t.width=Math.floor(M*G),t.height=Math.floor(N*G),B===!0&&(t.style.width=M+"px",t.style.height=N+"px"),this.setViewport(0,0,M,N)},this.getDrawingBufferSize=function(M){return M.set(W*G,ee*G).floor()},this.setDrawingBufferSize=function(M,N,B){W=M,ee=N,G=B,t.width=Math.floor(M*B),t.height=Math.floor(N*B),this.setViewport(0,0,M,N)},this.getCurrentViewport=function(M){return M.copy(P)},this.getViewport=function(M){return M.copy(_e)},this.setViewport=function(M,N,B,H){M.isVector4?_e.set(M.x,M.y,M.z,M.w):_e.set(M,N,B,H),xe.viewport(P.copy(_e).multiplyScalar(G).round())},this.getScissor=function(M){return M.copy(ce)},this.setScissor=function(M,N,B,H){M.isVector4?ce.set(M.x,M.y,M.z,M.w):ce.set(M,N,B,H),xe.scissor(F.copy(ce).multiplyScalar(G).round())},this.getScissorTest=function(){return Fe},this.setScissorTest=function(M){xe.setScissorTest(Fe=M)},this.setOpaqueSort=function(M){re=M},this.setTransparentSort=function(M){de=M},this.getClearColor=function(M){return M.copy(Me.getClearColor())},this.setClearColor=function(){Me.setClearColor(...arguments)},this.getClearAlpha=function(){return Me.getClearAlpha()},this.setClearAlpha=function(){Me.setClearAlpha(...arguments)},this.clear=function(M=!0,N=!0,B=!0){let H=0;if(M){let k=!1;if(L!==null){const Q=L.texture.format;k=Q===xc||Q===_c||Q===gc}if(k){const Q=L.texture.type,le=Q===Wn||Q===os||Q===kr||Q===zr||Q===pc||Q===mc,me=Me.getClearColor(),ue=Me.getClearAlpha(),Pe=me.r,Ie=me.g,Te=me.b;le?(g[0]=Pe,g[1]=Ie,g[2]=Te,g[3]=ue,D.clearBufferuiv(D.COLOR,0,g)):(_[0]=Pe,_[1]=Ie,_[2]=Te,_[3]=ue,D.clearBufferiv(D.COLOR,0,_))}else H|=D.COLOR_BUFFER_BIT}N&&(H|=D.DEPTH_BUFFER_BIT),B&&(H|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",se,!1),t.removeEventListener("webglcontextrestored",fe,!1),t.removeEventListener("webglcontextcreationerror",J,!1),Me.dispose(),X.dispose(),be.dispose(),ve.dispose(),It.dispose(),bt.dispose(),z.dispose(),oe.dispose(),Oe.dispose(),q.dispose(),ne.dispose(),ne.removeEventListener("sessionstart",zn),ne.removeEventListener("sessionend",Xc),Ni.stop()};function se(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function fe(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const M=ft.autoReset,N=ye.enabled,B=ye.autoUpdate,H=ye.needsUpdate,k=ye.type;I(),ft.autoReset=M,ye.enabled=N,ye.autoUpdate=B,ye.needsUpdate=H,ye.type=k}function J(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function K(M){const N=M.target;N.removeEventListener("dispose",K),ge(N)}function ge(M){ke(M),ve.remove(M)}function ke(M){const N=ve.get(M).programs;N!==void 0&&(N.forEach(function(B){q.releaseProgram(B)}),M.isShaderMaterial&&q.releaseShaderCache(M))}this.renderBufferDirect=function(M,N,B,H,k,Q){N===null&&(N=we);const le=k.isMesh&&k.matrixWorld.determinant()<0,me=sf(M,N,B,H,k);xe.setMaterial(H,le);let ue=B.index,Pe=1;if(H.wireframe===!0){if(ue=x.getWireframeAttribute(B),ue===void 0)return;Pe=2}const Ie=B.drawRange,Te=B.attributes.position;let Ye=Ie.start*Pe,it=(Ie.start+Ie.count)*Pe;Q!==null&&(Ye=Math.max(Ye,Q.start*Pe),it=Math.min(it,(Q.start+Q.count)*Pe)),ue!==null?(Ye=Math.max(Ye,0),it=Math.min(it,ue.count)):Te!=null&&(Ye=Math.max(Ye,0),it=Math.min(it,Te.count));const Mt=it-Ye;if(Mt<0||Mt===1/0)return;oe.setup(k,H,me,B,ue);let ht,ot=he;if(ue!==null&&(ht=T.get(ue),ot=De,ot.setIndex(ht)),k.isMesh)H.wireframe===!0?(xe.setLineWidth(H.wireframeLinewidth*zt()),ot.setMode(D.LINES)):ot.setMode(D.TRIANGLES);else if(k.isLine){let Re=H.linewidth;Re===void 0&&(Re=1),xe.setLineWidth(Re*zt()),k.isLineSegments?ot.setMode(D.LINES):k.isLineLoop?ot.setMode(D.LINE_LOOP):ot.setMode(D.LINE_STRIP)}else k.isPoints?ot.setMode(D.POINTS):k.isSprite&&ot.setMode(D.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)Vr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ot.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(ze.get("WEBGL_multi_draw"))ot.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const Re=k._multiDrawStarts,_t=k._multiDrawCounts,Ze=k._multiDrawCount,ln=ue?T.get(ue).bytesPerElement:1,fs=ve.get(H).currentProgram.getUniforms();for(let cn=0;cn<Ze;cn++)fs.setValue(D,"_gl_DrawID",cn),ot.render(Re[cn]/ln,_t[cn])}else if(k.isInstancedMesh)ot.renderInstances(Ye,Mt,k.count);else if(B.isInstancedBufferGeometry){const Re=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,_t=Math.min(B.instanceCount,Re);ot.renderInstances(Ye,Mt,_t)}else ot.render(Ye,Mt)};function lt(M,N,B){M.transparent===!0&&M.side===Gt&&M.forceSinglePass===!1?(M.side=an,M.needsUpdate=!0,ea(M,N,B),M.side=Di,M.needsUpdate=!0,ea(M,N,B),M.side=Gt):ea(M,N,B)}this.compile=function(M,N,B=null){B===null&&(B=M),p=be.get(B),p.init(N),E.push(p),B.traverseVisible(function(k){k.isLight&&k.layers.test(N.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),M!==B&&M.traverseVisible(function(k){k.isLight&&k.layers.test(N.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),p.setupLights();const H=new Set;return M.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const Q=k.material;if(Q)if(Array.isArray(Q))for(let le=0;le<Q.length;le++){const me=Q[le];lt(me,B,k),H.add(me)}else lt(Q,B,k),H.add(Q)}),p=E.pop(),H},this.compileAsync=function(M,N,B=null){const H=this.compile(M,N,B);return new Promise(k=>{function Q(){if(H.forEach(function(le){ve.get(le).currentProgram.isReady()&&H.delete(le)}),H.size===0){k(M);return}setTimeout(Q,10)}ze.get("KHR_parallel_shader_compile")!==null?Q():setTimeout(Q,10)})};let et=null;function jn(M){et&&et(M)}function zn(){Ni.stop()}function Xc(){Ni.start()}const Ni=new hu;Ni.setAnimationLoop(jn),typeof self<"u"&&Ni.setContext(self),this.setAnimationLoop=function(M){et=M,ne.setAnimationLoop(M),M===null?Ni.stop():Ni.start()},ne.addEventListener("sessionstart",zn),ne.addEventListener("sessionend",Xc),this.render=function(M,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),ne.enabled===!0&&ne.isPresenting===!0&&(ne.cameraAutoUpdate===!0&&ne.updateCamera(N),N=ne.getCamera()),M.isScene===!0&&M.onBeforeRender(S,M,N,L),p=be.get(M,E.length),p.init(N),E.push(p),Z.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),We.setFromProjectionMatrix(Z,Vn,N.reversedDepth),$=this.localClippingEnabled,Qe=ie.init(this.clippingPlanes,$),m=X.get(M,w.length),m.init(),w.push(m),ne.enabled===!0&&ne.isPresenting===!0){const Q=S.xr.getDepthSensingMesh();Q!==null&&vo(Q,N,-1/0,S.sortObjects)}vo(M,N,0,S.sortObjects),m.finish(),S.sortObjects===!0&&m.sort(re,de),je=ne.enabled===!1||ne.isPresenting===!1||ne.hasDepthSensing()===!1,je&&Me.addToRenderList(m,M),this.info.render.frame++,Qe===!0&&ie.beginShadows();const B=p.state.shadowsArray;ye.render(B,M,N),Qe===!0&&ie.endShadows(),this.info.autoReset===!0&&this.info.reset();const H=m.opaque,k=m.transmissive;if(p.setupLights(),N.isArrayCamera){const Q=N.cameras;if(k.length>0)for(let le=0,me=Q.length;le<me;le++){const ue=Q[le];Yc(H,k,M,ue)}je&&Me.render(M);for(let le=0,me=Q.length;le<me;le++){const ue=Q[le];qc(m,M,ue,ue.viewport)}}else k.length>0&&Yc(H,k,M,N),je&&Me.render(M),qc(m,M,N);L!==null&&C===0&&(Ge.updateMultisampleRenderTarget(L),Ge.updateRenderTargetMipmap(L)),M.isScene===!0&&M.onAfterRender(S,M,N),oe.resetDefaultState(),y=-1,v=null,E.pop(),E.length>0?(p=E[E.length-1],Qe===!0&&ie.setGlobalState(S.clippingPlanes,p.state.camera)):p=null,w.pop(),w.length>0?m=w[w.length-1]:m=null};function vo(M,N,B,H){if(M.visible===!1)return;if(M.layers.test(N.layers)){if(M.isGroup)B=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(N);else if(M.isLight)p.pushLight(M),M.castShadow&&p.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||We.intersectsSprite(M)){H&&Ne.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Z);const le=z.update(M),me=M.material;me.visible&&m.push(M,le,me,B,Ne.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||We.intersectsObject(M))){const le=z.update(M),me=M.material;if(H&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Ne.copy(M.boundingSphere.center)):(le.boundingSphere===null&&le.computeBoundingSphere(),Ne.copy(le.boundingSphere.center)),Ne.applyMatrix4(M.matrixWorld).applyMatrix4(Z)),Array.isArray(me)){const ue=le.groups;for(let Pe=0,Ie=ue.length;Pe<Ie;Pe++){const Te=ue[Pe],Ye=me[Te.materialIndex];Ye&&Ye.visible&&m.push(M,le,Ye,B,Ne.z,Te)}}else me.visible&&m.push(M,le,me,B,Ne.z,null)}}const Q=M.children;for(let le=0,me=Q.length;le<me;le++)vo(Q[le],N,B,H)}function qc(M,N,B,H){const k=M.opaque,Q=M.transmissive,le=M.transparent;p.setupLightsView(B),Qe===!0&&ie.setGlobalState(S.clippingPlanes,B),H&&xe.viewport(P.copy(H)),k.length>0&&Qr(k,N,B),Q.length>0&&Qr(Q,N,B),le.length>0&&Qr(le,N,B),xe.buffers.depth.setTest(!0),xe.buffers.depth.setMask(!0),xe.buffers.color.setMask(!0),xe.setPolygonOffset(!1)}function Yc(M,N,B,H){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[H.id]===void 0&&(p.state.transmissionRenderTarget[H.id]=new ls(1,1,{generateMipmaps:!0,type:ze.has("EXT_color_buffer_half_float")||ze.has("EXT_color_buffer_float")?Kr:Wn,minFilter:Qi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Je.workingColorSpace}));const Q=p.state.transmissionRenderTarget[H.id],le=H.viewport||P;Q.setSize(le.z*S.transmissionResolutionScale,le.w*S.transmissionResolutionScale);const me=S.getRenderTarget(),ue=S.getActiveCubeFace(),Pe=S.getActiveMipmapLevel();S.setRenderTarget(Q),S.getClearColor(V),Y=S.getClearAlpha(),Y<1&&S.setClearColor(16777215,.5),S.clear(),je&&Me.render(B);const Ie=S.toneMapping;S.toneMapping=Ri;const Te=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),p.setupLightsView(H),Qe===!0&&ie.setGlobalState(S.clippingPlanes,H),Qr(M,B,H),Ge.updateMultisampleRenderTarget(Q),Ge.updateRenderTargetMipmap(Q),ze.has("WEBGL_multisampled_render_to_texture")===!1){let Ye=!1;for(let it=0,Mt=N.length;it<Mt;it++){const ht=N[it],ot=ht.object,Re=ht.geometry,_t=ht.material,Ze=ht.group;if(_t.side===Gt&&ot.layers.test(H.layers)){const ln=_t.side;_t.side=an,_t.needsUpdate=!0,$c(ot,B,H,Re,_t,Ze),_t.side=ln,_t.needsUpdate=!0,Ye=!0}}Ye===!0&&(Ge.updateMultisampleRenderTarget(Q),Ge.updateRenderTargetMipmap(Q))}S.setRenderTarget(me,ue,Pe),S.setClearColor(V,Y),Te!==void 0&&(H.viewport=Te),S.toneMapping=Ie}function Qr(M,N,B){const H=N.isScene===!0?N.overrideMaterial:null;for(let k=0,Q=M.length;k<Q;k++){const le=M[k],me=le.object,ue=le.geometry,Pe=le.group;let Ie=le.material;Ie.allowOverride===!0&&H!==null&&(Ie=H),me.layers.test(B.layers)&&$c(me,N,B,ue,Ie,Pe)}}function $c(M,N,B,H,k,Q){M.onBeforeRender(S,N,B,H,k,Q),M.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),k.onBeforeRender(S,N,B,H,M,Q),k.transparent===!0&&k.side===Gt&&k.forceSinglePass===!1?(k.side=an,k.needsUpdate=!0,S.renderBufferDirect(B,N,H,k,M,Q),k.side=Di,k.needsUpdate=!0,S.renderBufferDirect(B,N,H,k,M,Q),k.side=Gt):S.renderBufferDirect(B,N,H,k,M,Q),M.onAfterRender(S,N,B,H,k,Q)}function ea(M,N,B){N.isScene!==!0&&(N=we);const H=ve.get(M),k=p.state.lights,Q=p.state.shadowsArray,le=k.state.version,me=q.getParameters(M,k.state,Q,N,B),ue=q.getProgramCacheKey(me);let Pe=H.programs;H.environment=M.isMeshStandardMaterial?N.environment:null,H.fog=N.fog,H.envMap=(M.isMeshStandardMaterial?bt:It).get(M.envMap||H.environment),H.envMapRotation=H.environment!==null&&M.envMap===null?N.environmentRotation:M.envMapRotation,Pe===void 0&&(M.addEventListener("dispose",K),Pe=new Map,H.programs=Pe);let Ie=Pe.get(ue);if(Ie!==void 0){if(H.currentProgram===Ie&&H.lightsStateVersion===le)return jc(M,me),Ie}else me.uniforms=q.getUniforms(M),M.onBeforeCompile(me,S),Ie=q.acquireProgram(me,ue),Pe.set(ue,Ie),H.uniforms=me.uniforms;const Te=H.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Te.clippingPlanes=ie.uniform),jc(M,me),H.needsLights=af(M),H.lightsStateVersion=le,H.needsLights&&(Te.ambientLightColor.value=k.state.ambient,Te.lightProbe.value=k.state.probe,Te.directionalLights.value=k.state.directional,Te.directionalLightShadows.value=k.state.directionalShadow,Te.spotLights.value=k.state.spot,Te.spotLightShadows.value=k.state.spotShadow,Te.rectAreaLights.value=k.state.rectArea,Te.ltc_1.value=k.state.rectAreaLTC1,Te.ltc_2.value=k.state.rectAreaLTC2,Te.pointLights.value=k.state.point,Te.pointLightShadows.value=k.state.pointShadow,Te.hemisphereLights.value=k.state.hemi,Te.directionalShadowMap.value=k.state.directionalShadowMap,Te.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Te.spotShadowMap.value=k.state.spotShadowMap,Te.spotLightMatrix.value=k.state.spotLightMatrix,Te.spotLightMap.value=k.state.spotLightMap,Te.pointShadowMap.value=k.state.pointShadowMap,Te.pointShadowMatrix.value=k.state.pointShadowMatrix),H.currentProgram=Ie,H.uniformsList=null,Ie}function Kc(M){if(M.uniformsList===null){const N=M.currentProgram.getUniforms();M.uniformsList=Xa.seqWithValue(N.seq,M.uniforms)}return M.uniformsList}function jc(M,N){const B=ve.get(M);B.outputColorSpace=N.outputColorSpace,B.batching=N.batching,B.batchingColor=N.batchingColor,B.instancing=N.instancing,B.instancingColor=N.instancingColor,B.instancingMorph=N.instancingMorph,B.skinning=N.skinning,B.morphTargets=N.morphTargets,B.morphNormals=N.morphNormals,B.morphColors=N.morphColors,B.morphTargetsCount=N.morphTargetsCount,B.numClippingPlanes=N.numClippingPlanes,B.numIntersection=N.numClipIntersection,B.vertexAlphas=N.vertexAlphas,B.vertexTangents=N.vertexTangents,B.toneMapping=N.toneMapping}function sf(M,N,B,H,k){N.isScene!==!0&&(N=we),Ge.resetTextureUnits();const Q=N.fog,le=H.isMeshStandardMaterial?N.environment:null,me=L===null?S.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:$s,ue=(H.isMeshStandardMaterial?bt:It).get(H.envMap||le),Pe=H.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Ie=!!B.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Te=!!B.morphAttributes.position,Ye=!!B.morphAttributes.normal,it=!!B.morphAttributes.color;let Mt=Ri;H.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(Mt=S.toneMapping);const ht=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,ot=ht!==void 0?ht.length:0,Re=ve.get(H),_t=p.state.lights;if(Qe===!0&&($===!0||M!==v)){const Yt=M===v&&H.id===y;ie.setState(H,M,Yt)}let Ze=!1;H.version===Re.__version?(Re.needsLights&&Re.lightsStateVersion!==_t.state.version||Re.outputColorSpace!==me||k.isBatchedMesh&&Re.batching===!1||!k.isBatchedMesh&&Re.batching===!0||k.isBatchedMesh&&Re.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&Re.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&Re.instancing===!1||!k.isInstancedMesh&&Re.instancing===!0||k.isSkinnedMesh&&Re.skinning===!1||!k.isSkinnedMesh&&Re.skinning===!0||k.isInstancedMesh&&Re.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Re.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Re.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Re.instancingMorph===!1&&k.morphTexture!==null||Re.envMap!==ue||H.fog===!0&&Re.fog!==Q||Re.numClippingPlanes!==void 0&&(Re.numClippingPlanes!==ie.numPlanes||Re.numIntersection!==ie.numIntersection)||Re.vertexAlphas!==Pe||Re.vertexTangents!==Ie||Re.morphTargets!==Te||Re.morphNormals!==Ye||Re.morphColors!==it||Re.toneMapping!==Mt||Re.morphTargetsCount!==ot)&&(Ze=!0):(Ze=!0,Re.__version=H.version);let ln=Re.currentProgram;Ze===!0&&(ln=ea(H,N,k));let fs=!1,cn=!1,hr=!1;const xt=ln.getUniforms(),vn=Re.uniforms;if(xe.useProgram(ln.program)&&(fs=!0,cn=!0,hr=!0),H.id!==y&&(y=H.id,cn=!0),fs||v!==M){xe.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),xt.setValue(D,"projectionMatrix",M.projectionMatrix),xt.setValue(D,"viewMatrix",M.matrixWorldInverse);const nn=xt.map.cameraPosition;nn!==void 0&&nn.setValue(D,pe.setFromMatrixPosition(M.matrixWorld)),Le.logarithmicDepthBuffer&&xt.setValue(D,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&xt.setValue(D,"isOrthographic",M.isOrthographicCamera===!0),v!==M&&(v=M,cn=!0,hr=!0)}if(k.isSkinnedMesh){xt.setOptional(D,k,"bindMatrix"),xt.setOptional(D,k,"bindMatrixInverse");const Yt=k.skeleton;Yt&&(Yt.boneTexture===null&&Yt.computeBoneTexture(),xt.setValue(D,"boneTexture",Yt.boneTexture,Ge))}k.isBatchedMesh&&(xt.setOptional(D,k,"batchingTexture"),xt.setValue(D,"batchingTexture",k._matricesTexture,Ge),xt.setOptional(D,k,"batchingIdTexture"),xt.setValue(D,"batchingIdTexture",k._indirectTexture,Ge),xt.setOptional(D,k,"batchingColorTexture"),k._colorsTexture!==null&&xt.setValue(D,"batchingColorTexture",k._colorsTexture,Ge));const yn=B.morphAttributes;if((yn.position!==void 0||yn.normal!==void 0||yn.color!==void 0)&&te.update(k,B,ln),(cn||Re.receiveShadow!==k.receiveShadow)&&(Re.receiveShadow=k.receiveShadow,xt.setValue(D,"receiveShadow",k.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(vn.envMap.value=ue,vn.flipEnvMap.value=ue.isCubeTexture&&ue.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&N.environment!==null&&(vn.envMapIntensity.value=N.environmentIntensity),cn&&(xt.setValue(D,"toneMappingExposure",S.toneMappingExposure),Re.needsLights&&rf(vn,hr),Q&&H.fog===!0&&j.refreshFogUniforms(vn,Q),j.refreshMaterialUniforms(vn,H,G,ee,p.state.transmissionRenderTarget[M.id]),Xa.upload(D,Kc(Re),vn,Ge)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Xa.upload(D,Kc(Re),vn,Ge),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&xt.setValue(D,"center",k.center),xt.setValue(D,"modelViewMatrix",k.modelViewMatrix),xt.setValue(D,"normalMatrix",k.normalMatrix),xt.setValue(D,"modelMatrix",k.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const Yt=H.uniformsGroups;for(let nn=0,yo=Yt.length;nn<yo;nn++){const Fi=Yt[nn];Oe.update(Fi,ln),Oe.bind(Fi,ln)}}return ln}function rf(M,N){M.ambientLightColor.needsUpdate=N,M.lightProbe.needsUpdate=N,M.directionalLights.needsUpdate=N,M.directionalLightShadows.needsUpdate=N,M.pointLights.needsUpdate=N,M.pointLightShadows.needsUpdate=N,M.spotLights.needsUpdate=N,M.spotLightShadows.needsUpdate=N,M.rectAreaLights.needsUpdate=N,M.hemisphereLights.needsUpdate=N}function af(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(M,N,B){const H=ve.get(M);H.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),ve.get(M.texture).__webglTexture=N,ve.get(M.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:B,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,N){const B=ve.get(M);B.__webglFramebuffer=N,B.__useDefaultFramebuffer=N===void 0};const of=D.createFramebuffer();this.setRenderTarget=function(M,N=0,B=0){L=M,b=N,C=B;let H=!0,k=null,Q=!1,le=!1;if(M){const ue=ve.get(M);if(ue.__useDefaultFramebuffer!==void 0)xe.bindFramebuffer(D.FRAMEBUFFER,null),H=!1;else if(ue.__webglFramebuffer===void 0)Ge.setupRenderTarget(M);else if(ue.__hasExternalTextures)Ge.rebindTextures(M,ve.get(M.texture).__webglTexture,ve.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const Te=M.depthTexture;if(ue.__boundDepthTexture!==Te){if(Te!==null&&ve.has(Te)&&(M.width!==Te.image.width||M.height!==Te.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ge.setupDepthRenderbuffer(M)}}const Pe=M.texture;(Pe.isData3DTexture||Pe.isDataArrayTexture||Pe.isCompressedArrayTexture)&&(le=!0);const Ie=ve.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Ie[N])?k=Ie[N][B]:k=Ie[N],Q=!0):M.samples>0&&Ge.useMultisampledRTT(M)===!1?k=ve.get(M).__webglMultisampledFramebuffer:Array.isArray(Ie)?k=Ie[B]:k=Ie,P.copy(M.viewport),F.copy(M.scissor),O=M.scissorTest}else P.copy(_e).multiplyScalar(G).floor(),F.copy(ce).multiplyScalar(G).floor(),O=Fe;if(B!==0&&(k=of),xe.bindFramebuffer(D.FRAMEBUFFER,k)&&H&&xe.drawBuffers(M,k),xe.viewport(P),xe.scissor(F),xe.setScissorTest(O),Q){const ue=ve.get(M.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+N,ue.__webglTexture,B)}else if(le){const ue=N;for(let Pe=0;Pe<M.textures.length;Pe++){const Ie=ve.get(M.textures[Pe]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Pe,Ie.__webglTexture,B,ue)}}else if(M!==null&&B!==0){const ue=ve.get(M.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,ue.__webglTexture,B)}y=-1},this.readRenderTargetPixels=function(M,N,B,H,k,Q,le,me=0){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ue=ve.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&le!==void 0&&(ue=ue[le]),ue){xe.bindFramebuffer(D.FRAMEBUFFER,ue);try{const Pe=M.textures[me],Ie=Pe.format,Te=Pe.type;if(!Le.textureFormatReadable(Ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Le.textureTypeReadable(Te)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=M.width-H&&B>=0&&B<=M.height-k&&(M.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+me),D.readPixels(N,B,H,k,Se.convert(Ie),Se.convert(Te),Q))}finally{const Pe=L!==null?ve.get(L).__webglFramebuffer:null;xe.bindFramebuffer(D.FRAMEBUFFER,Pe)}}},this.readRenderTargetPixelsAsync=async function(M,N,B,H,k,Q,le,me=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ue=ve.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&le!==void 0&&(ue=ue[le]),ue)if(N>=0&&N<=M.width-H&&B>=0&&B<=M.height-k){xe.bindFramebuffer(D.FRAMEBUFFER,ue);const Pe=M.textures[me],Ie=Pe.format,Te=Pe.type;if(!Le.textureFormatReadable(Ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Le.textureTypeReadable(Te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ye=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Ye),D.bufferData(D.PIXEL_PACK_BUFFER,Q.byteLength,D.STREAM_READ),M.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+me),D.readPixels(N,B,H,k,Se.convert(Ie),Se.convert(Te),0);const it=L!==null?ve.get(L).__webglFramebuffer:null;xe.bindFramebuffer(D.FRAMEBUFFER,it);const Mt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await up(D,Mt,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Ye),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,Q),D.deleteBuffer(Ye),D.deleteSync(Mt),Q}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,N=null,B=0){const H=Math.pow(2,-B),k=Math.floor(M.image.width*H),Q=Math.floor(M.image.height*H),le=N!==null?N.x:0,me=N!==null?N.y:0;Ge.setTexture2D(M,0),D.copyTexSubImage2D(D.TEXTURE_2D,B,0,0,le,me,k,Q),xe.unbindTexture()};const lf=D.createFramebuffer(),cf=D.createFramebuffer();this.copyTextureToTexture=function(M,N,B=null,H=null,k=0,Q=null){Q===null&&(k!==0?(Vr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Q=k,k=0):Q=0);let le,me,ue,Pe,Ie,Te,Ye,it,Mt;const ht=M.isCompressedTexture?M.mipmaps[Q]:M.image;if(B!==null)le=B.max.x-B.min.x,me=B.max.y-B.min.y,ue=B.isBox3?B.max.z-B.min.z:1,Pe=B.min.x,Ie=B.min.y,Te=B.isBox3?B.min.z:0;else{const yn=Math.pow(2,-k);le=Math.floor(ht.width*yn),me=Math.floor(ht.height*yn),M.isDataArrayTexture?ue=ht.depth:M.isData3DTexture?ue=Math.floor(ht.depth*yn):ue=1,Pe=0,Ie=0,Te=0}H!==null?(Ye=H.x,it=H.y,Mt=H.z):(Ye=0,it=0,Mt=0);const ot=Se.convert(N.format),Re=Se.convert(N.type);let _t;N.isData3DTexture?(Ge.setTexture3D(N,0),_t=D.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(Ge.setTexture2DArray(N,0),_t=D.TEXTURE_2D_ARRAY):(Ge.setTexture2D(N,0),_t=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,N.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,N.unpackAlignment);const Ze=D.getParameter(D.UNPACK_ROW_LENGTH),ln=D.getParameter(D.UNPACK_IMAGE_HEIGHT),fs=D.getParameter(D.UNPACK_SKIP_PIXELS),cn=D.getParameter(D.UNPACK_SKIP_ROWS),hr=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,ht.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ht.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Pe),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ie),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Te);const xt=M.isDataArrayTexture||M.isData3DTexture,vn=N.isDataArrayTexture||N.isData3DTexture;if(M.isDepthTexture){const yn=ve.get(M),Yt=ve.get(N),nn=ve.get(yn.__renderTarget),yo=ve.get(Yt.__renderTarget);xe.bindFramebuffer(D.READ_FRAMEBUFFER,nn.__webglFramebuffer),xe.bindFramebuffer(D.DRAW_FRAMEBUFFER,yo.__webglFramebuffer);for(let Fi=0;Fi<ue;Fi++)xt&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,ve.get(M).__webglTexture,k,Te+Fi),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,ve.get(N).__webglTexture,Q,Mt+Fi)),D.blitFramebuffer(Pe,Ie,le,me,Ye,it,le,me,D.DEPTH_BUFFER_BIT,D.NEAREST);xe.bindFramebuffer(D.READ_FRAMEBUFFER,null),xe.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(k!==0||M.isRenderTargetTexture||ve.has(M)){const yn=ve.get(M),Yt=ve.get(N);xe.bindFramebuffer(D.READ_FRAMEBUFFER,lf),xe.bindFramebuffer(D.DRAW_FRAMEBUFFER,cf);for(let nn=0;nn<ue;nn++)xt?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,yn.__webglTexture,k,Te+nn):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,yn.__webglTexture,k),vn?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Yt.__webglTexture,Q,Mt+nn):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Yt.__webglTexture,Q),k!==0?D.blitFramebuffer(Pe,Ie,le,me,Ye,it,le,me,D.COLOR_BUFFER_BIT,D.NEAREST):vn?D.copyTexSubImage3D(_t,Q,Ye,it,Mt+nn,Pe,Ie,le,me):D.copyTexSubImage2D(_t,Q,Ye,it,Pe,Ie,le,me);xe.bindFramebuffer(D.READ_FRAMEBUFFER,null),xe.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else vn?M.isDataTexture||M.isData3DTexture?D.texSubImage3D(_t,Q,Ye,it,Mt,le,me,ue,ot,Re,ht.data):N.isCompressedArrayTexture?D.compressedTexSubImage3D(_t,Q,Ye,it,Mt,le,me,ue,ot,ht.data):D.texSubImage3D(_t,Q,Ye,it,Mt,le,me,ue,ot,Re,ht):M.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,Q,Ye,it,le,me,ot,Re,ht.data):M.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,Q,Ye,it,ht.width,ht.height,ot,ht.data):D.texSubImage2D(D.TEXTURE_2D,Q,Ye,it,le,me,ot,Re,ht);D.pixelStorei(D.UNPACK_ROW_LENGTH,Ze),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ln),D.pixelStorei(D.UNPACK_SKIP_PIXELS,fs),D.pixelStorei(D.UNPACK_SKIP_ROWS,cn),D.pixelStorei(D.UNPACK_SKIP_IMAGES,hr),Q===0&&N.generateMipmaps&&D.generateMipmap(_t),xe.unbindTexture()},this.initRenderTarget=function(M){ve.get(M).__webglFramebuffer===void 0&&Ge.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?Ge.setTextureCube(M,0):M.isData3DTexture?Ge.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?Ge.setTexture2DArray(M,0):Ge.setTexture2D(M,0),xe.unbindTexture()},this.resetState=function(){b=0,C=0,L=null,xe.reset(),oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Je._getDrawingBufferColorSpace(e),t.unpackColorSpace=Je._getUnpackColorSpace()}}class mu{constructor(e,t){this.make=e,this.capacity=t}make;capacity;live=[];spare=[];get(){if(this.live.length>=this.capacity){const t=this.live.shift();return this.live.push(t),t}const e=this.spare.pop()??this.make();return this.live.push(e),e}release(e){const[t]=this.live.splice(e,1);t&&this.spare.push(t)}sweep(e){for(let t=this.live.length-1;t>=0;t--)e(this.live[t])||this.release(t)}clear(){this.spare.push(...this.live),this.live.length=0}get allocated(){return this.live.length+this.spare.length}}const Wr=6,Rt=(n,e,t,i,s,r,a,o,c,l,h)=>({sprite:n,name:e,w:t,h:i,inset:s,mass:r,damage:a,grab:o,throw:c,breakable:l,shards:h}),Nt={hat:Rt("gen_hat.png","котелок",.78,.975,[.03,.97,0,.54],.5,0,6,10,!1),bottle:Rt("gen_bottle.png","бутылка",.62,.82,[.26,.74,0,.96],1,15,6,10,!0,["#3aa860","#e8f6ee","#f7c56d"]),barrel:Rt("gen_barrel.png","бочонок",.7,.82,[.1,.9,0,.96],3,25,7,12,!1),mug:Rt("gen_mug.png","кружка",.56,.7,[.03,.97,0,.97],1,15,6,10,!0,["#ffd23f","#ffffff","#bfe6f2"]),whiskey:Rt("gen_whiskey.png","виски",.5,.82,[.28,.72,0,.97],1,15,6,10,!0,["#d07a2a","#bfe6f2","#f4e3b5"]),stool:Rt("gen_stool.png","табурет",.8,1,[.073,.927,.006,.969],3,25,7,12,!1),spittoon:Rt("gen_spittoon.png","плевательница",.6,.75,[.031,.969,.006,.694],2.5,20,6,11,!1),shaker:Rt("gen_shaker.png","шейкер",.36,.45,[.197,.803,.006,.969],1,12,6,10,!1),eggs:Rt("gen_eggs.png","банка яиц",.5,.62,[.103,.897,.006,.969],1.5,15,6,10,!0,["#ffe680","#bfe6f2","#e8475f"]),plunger:Rt("gen_plunger.png","вантуз",.56,.7,[.211,.789,.006,.969],.8,10,6,10,!1),hydrant:Rt("gen_hydrant.png","гидрант",.72,.9,[.094,.906,.006,.969],5,35,9,16,!1),tire:Rt("gen_tire.png","шина",.72,.9,[.031,.969,.006,.899],3,20,7,12,!1),melon:Rt("gen_melon.png","арбуз",.64,.8,[.031,.969,.006,.821],2.5,20,6,11,!0,["#3aa860","#ff4f6d","#1f1f1f"]),fish:Rt("gen_fish.png","рыба",.72,.9,[.031,.969,.006,.514],1,12,6,10,!1),anvil:Rt("gen_anvil.png","наковальня",.8,1,[.031,.969,.006,.531],7,45,11,18,!1),chicken:Rt("gen_chicken.png","резиновая курица",.5,.62,[.252,.748,.006,.969],.5,3,6,10,!1),bowling:Rt("gen_bowling.png","шар для боулинга",.4,.5,[.031,.969,.006,.75],4,30,8,14,!1),flowerpot:Rt("gen_flowerpot.png","цветочный горшок",.56,.7,[.137,.863,.006,.969],1.5,15,6,10,!0,["#e07a3a","#6b4a32","#ffffff"]),pie:Rt("gen_pie.png","кремовый пирог",.56,.7,[.031,.969,.006,.577],.8,10,6,10,!0,["#fff3d6","#ff4f6d","#f1c27d"])},Ox=Object.keys(Nt),id={mole:{w:1.3,h:1.625,inset:[.1,.9,.006,.66]},granny:{w:1.3,h:1.625,inset:[.165,.835,.006,.81]},kitten:{w:.9,h:1.125,inset:[.113,.887,.006,.7]},pigeon:{w:.9,h:1.125,inset:[.151,.849,.006,.69]},drunk:{w:1.4,h:1.75,inset:[.2,.8,.006,.85]},bartender:{w:1.52,h:1.9,inset:[.22,.78,.03,.78]}},sd={rat:{w:1.8,h:2.25,inset:[.17,.83,.006,.63]},gang:{w:1.8,h:2.25,inset:[.134,.866,.006,.69]},kid:{w:1.8,h:2.25,inset:[.25,.75,.006,.73]}},rd=120,tc=.6,Bx={mole:["ОЙ! МОЯ КАСКА!","ХУЛИГАН!","Я ЖЕ ПОД ЗЕМЛЁЙ ЖИВУ!"],granny:["ХАМ! ПОЛИЦИЯ!","ВОТ Я ТЕБЕ ЗОНТИКОМ!","В МОЁ ВРЕМЯ ТАК НЕ БИЛИ!"],kitten:["ПФФФ! МЯУ!!","ШШШ! НАХАЛ!","МЯ-А-АУ?!"],pigeon:["ПИСЬМА ПОМЯЛ!","ЖАЛОБА ПОЧТОЙ!","КУРЛЫ-ХАМ!"],drunk:["ЧЕГО-О?! ИК!","КТО ТУТ ДЕРЁТСЯ?! ИК!","Я НЕ СПЛЮ! ИК!"],bartender:["ПОСУДУ НЕ БЕЙ!","В МОЁМ БАРЕ НЕ ДРАТЬСЯ!","ЗА СТОЙКУ НЕ ЗАХОДИ!"]},Zt={period:6.5,rise:[2.2,2.5],dig:[5.6,5.9],depth:1.15,hittable:.35};function Hx(n,e){const t=Math.floor(n/Zt.period),i=n-t*Zt.period,s=i<Zt.rise[0]||i>Zt.dig[1]?0:i<Zt.rise[1]?(i-Zt.rise[0])/(Zt.rise[1]-Zt.rise[0]):i<Zt.dig[0]?1:1-(i-Zt.dig[0])/(Zt.dig[1]-Zt.dig[0]);return{hole:(t%e+e)%e,rise:s,lantern:t%2===1,look:Math.sin(i*2.4)>0?1:-1}}const nc=n=>n*n*(3-2*n);function Gx(n,e,t,i){const s=(n/i%1+1)%1,r=.2;return s<r/2?{x:e,walking:!1,facing:1}:s<.5-r/2?{x:e+(t-e)*nc((s-r/2)/(.5-r)),walking:!0,facing:t>=e?1:-1}:s<.5+r/2?{x:t,walking:!1,facing:-1}:{x:t+(e-t)*nc((s-.5-r/2)/(.5-r)),walking:!0,facing:t>=e?-1:1}}function Dc(n,e,t=!0){if(n.who==="mole"&&n.spots?.length){const s=Hx(t?e:Zt.rise[1]+.5,n.spots.length),r=n.spots[s.hole];return{x:r.x,y:n.y-Zt.depth*(1-s.rise),z:r.z,rise:s.rise,walking:!1,facing:s.look,lantern:s.lantern}}if(n.x0===n.x1||!t)return{x:n.x0,y:n.y,z:n.z,rise:1,walking:!1,facing:1,lantern:!1};const i=Gx(e,n.x0,n.x1,n.period);return{x:i.x,y:n.y,z:n.z,rise:1,walking:i.walking,facing:i.facing,lantern:!1}}const ai={appear:.45,attack:2.5,strike:2.85,every:6.5,first:4,depth:5.6},Vx={rat:{what:"stamina",line:"КРЫСА СПЁРЛА СИЛЫ! −35"},gang:{what:"splat",line:"ПЛЮХ! ГОЛУБЬ ЗАЛЯПАЛ ЭКРАН!"},kid:{what:"heart",line:"ЩЁЛК! ИЗ РОГАТКИ В ЛОБ! −♥"}},Wx=35;function Xx(n,e,t=!0){const i=t?nc(Math.min(1,e/ai.appear)):1;return n.from==="manhole"?{x:n.x,y:-1.3*(1-i),z:n.z}:{x:n.x+n.side*1.8*(1-i),y:0,z:n.z}}const Gs=(n,e,t,i,s,r,a,o)=>({id:n,kind:e,min:{x:t-r/2,y:i-a/2,z:s-o/2},max:{x:t+r/2,y:i+a/2,z:s+o/2}}),Wt={enemy:{w:1.52,h:1.9,inset:[.2,.82,.03,.95]},dog:{w:1.1,h:1.375,inset:[.14,.9,.03,.95]},...Nt},Lc={cat:Wt.enemy.inset,walrus:[.08,.92,.03,.93],bulldog:[.14,.86,.03,.75],weasel:[.22,.78,.03,.78]},qx=.82,en=(n,e,t,i,s,r,a,o,c,l)=>({id:n,look:e,layer:t,color:l,min:{x:i-a/2,y:s,z:r-c/2},max:{x:i+a/2,y:s+o,z:r+c/2}});function gu(n,e,t,i,s,r,a){const o=[];let l=0,h=0;const d=(u,f,g,_)=>{f-u>.01&&_-g>.01&&o.push({id:`${n}-${h++}`,look:"wall",layer:"background",color:a,min:{x:u,y:g,z:e-.3/2},max:{x:f,y:_,z:e+.3/2}})};for(const u of r){d(t,i,l,u.sill);let f=t;for(const g of u.xs)d(f,g-u.w/2,u.sill,u.sill+u.h),f=g+u.w/2,o.push({id:`${n}-room-${h++}`,look:"interior",layer:"background",color:"#33403f",min:{x:g-u.w/2-.5,y:u.sill-1.2,z:e-1.35},max:{x:g+u.w/2+.5,y:u.sill+u.h+.6,z:e-1.2}});d(f,i,u.sill,u.sill+u.h),l=u.sill+u.h}return d(t,i,l,s),o}function Yx(n,e,t,i,s,r){const a=[];for(let o=t,c=0;o+.26<=i+1e-6;o+=.36,c++)a.push(en(`${n}-p${c}`,"plank","midground",o+.13,0,e,.26,s-c%2*.08,.07,r));return a.push(en(`${n}-rail`,"rail","midground",(t+i)/2,s*.62,e-.07,i-t,.12,.07,"#6e4d36")),a}const ad=(n,e)=>({...n,min:{...n.min,x:n.min.x+e},max:{...n.max,x:n.max.x+e}}),od=(n,e)=>({...n,x:n.x+e,hideX:n.hideX+e}),si=-8,ii=8,ld={covers:[en("barrel-a","barrel","foreground",-2.75,0,3,.92,1.15,.92,"#c83c32"),en("barrel-b","barrel","foreground",-1.92,0,3.35,.8,.98,.8,"#2f6f73"),en("crate-a","crate","foreground",2.9,0,3.05,1.15,1.15,1.1,"#c9944f"),en("crate-b","crate","foreground",3.05,1.15,3.05,.72,.72,.72,"#d9a862"),...Yx("fence",-1.6,-4.6,4.6,1.3,"#a8754c"),...gu("block",-9,-13,8,9,[{sill:1.7,h:1.65,w:1.7,xs:[-4.2,0,4.2]},{sill:4.6,h:1.5,w:1.5,xs:[-6.5,-2.1,2.1,6.5]}],"#c9c3ae")],slots:[{x:-2.45,y:0,z:2.25,layer:"foreground",hideX:-2.45,hideY:-1.2},{x:-2,y:0,z:-2.35,layer:"midground",hideX:-2,hideY:-1.05},{x:4.2,y:.72,z:-9.5,layer:"background",hideX:4.2,hideY:-.35},{x:1.95,y:0,z:2.35,layer:"foreground",hideX:2.9,hideY:-.85},{x:.95,y:0,z:-2.35,layer:"midground",hideX:.95,hideY:-1.05},{x:-4.2,y:.72,z:-9.5,layer:"background",hideX:-4.2,hideY:-.35}]},cd={covers:[en("dumpster","dumpster","foreground",-2.6,0,3,2,1.22,1.1,"#3f7b55"),en("pallets","pallet","foreground",2.95,0,3.15,1.3,1.3,1.1,"#b98a52"),en("van","van","midground",-2.1,.25,-2.6,3.4,1.85,1.7,"#e9e2cd"),en("barrier","barrier","midground",2.55,0,-1.9,2.5,1.02,.55,"#b8b7ac"),...gu("shop",-11,-7,7,9,[{sill:1.3,h:1.6,w:2,xs:[-2.8,2.8]},{sill:4.3,h:1.6,w:1.6,xs:[0]}],"#d58f86")],slots:[{x:2.45,y:0,z:2.45,layer:"foreground",hideX:3.15,hideY:-1.1},{x:-2.6,y:0,z:2.15,layer:"foreground",hideX:-2.6,hideY:-1.15},{x:0,y:3.45,z:-11.5,layer:"background",hideX:0,hideY:2.25},{x:.25,y:0,z:-3.3,layer:"midground",hideX:-1.05,hideY:0},{x:2.8,y:.45,z:-11.5,layer:"background",hideX:2.8,hideY:-.75},{x:2.9,y:0,z:-2.55,layer:"midground",hideX:2.9,hideY:-1},{x:-2.8,y:.45,z:-11.5,layer:"background",hideX:-2.8,hideY:-.75}]},$x={name:"БАР «ДЛИННЫЕ РУКИ»",look:"bar",pan:0,goal:9,deadline:5.2,maxAlive:3,covers:[en("piano","piano","foreground",-2.75,0,3,1.9,1.3,.75,"#3b2c24"),en("table","table","foreground",2.95,0,3.1,1.3,1.05,1.1,"#ece6d2"),en("counter","counter","midground",.3,0,-2.4,6.4,1.15,.8,"#6b4a32"),en("shelves","shelves","background",-.4,0,-6.4,5.2,2.9,.5,"#2e241c"),en("doorwall","wall","background",6.7,0,-7.4,2.6,3.4,.3,"#4a3f36")],slots:[{x:-2.55,y:0,z:2.2,layer:"foreground",hideX:-2.55,hideY:-1.25,skin:"walrus"},{x:-1.1,y:.3,z:-3.15,layer:"midground",hideX:-1.1,hideY:-.9,skin:"bulldog"},{x:2.55,y:0,z:2.3,layer:"foreground",hideX:3,hideY:-1.15,skin:"walrus"},{x:4.6,y:0,z:-7.85,layer:"background",hideX:6.7,hideY:0,skin:"bulldog"},{x:1.9,y:.3,z:-3.15,layer:"midground",hideX:1.9,hideY:-.9,skin:"walrus"}],order:[0,1,2,3,4],dogs:[{x:.2,y:0,z:-.7}],props:[{kind:"mug",x:-3.25,y:1.3,z:3},{kind:"whiskey",x:2.6,y:1.05,z:3.05},{kind:"eggs",x:3.3,y:1.05,z:3.25},{kind:"mug",x:-2.3,y:1.15,z:-2.12},{kind:"shaker",x:-1.5,y:1.15,z:-2.12},{kind:"whiskey",x:3.05,y:1.15,z:-2.12},{kind:"stool",x:-.95,y:0,z:3.9},{kind:"spittoon",x:1.95,y:0,z:4},{kind:"plunger",x:-1.6,y:0,z:1.1},{kind:"mug",x:.5,y:0,z:1.05},{kind:"whiskey",x:-4.4,y:0,z:1.5},{kind:"stool",x:3.55,y:0,z:.35},{kind:"eggs",x:-3.3,y:0,z:-.3}],gags:[{id:"piano",kind:"piano"},Gs("gag-cuckoo","cuckoo",6.1,2.6,-7.12,.66,.82,.12),Gs("gag-lamp-0","lamp",-3,5.7,-3.2,1.1,.6,1.1),Gs("gag-lamp-1","lamp",2.5,5.7,-3.2,1.1,.6,1.1)],hat:{x:.95,y:.78,z:3.45},landing:{cover:"counter",band:.4},friends:[{who:"mole",x0:0,x1:0,y:0,z:0,period:0,spots:[{x:2.3,z:-1.3},{x:.1,z:1.7},{x:-1.25,z:-1.3},{x:-.75,z:2.6},{x:3.7,z:-.9}]},{who:"kitten",x0:-2.5,x1:2.75,y:1.15,z:-2.25,period:17},{who:"drunk",x0:4.75,x1:4.75,y:0,z:1.75,period:0},{who:"bartender",x0:.3,x1:.3,y:.3,z:-3.15,period:0}]},Kx={name:"УЛИЦА: ДВОР И ПЕРЕУЛОК",look:"street",pan:8,goal:22,deadline:5.4,maxAlive:5,covers:[...ld.covers.map(n=>ad(n,si)),...cd.covers.map(n=>ad(n,ii))],slots:[...ld.slots.map(n=>od(n,si)),...cd.slots.map(n=>od(n,ii))],order:[0,6,4,9,2,7,3,11,1,8,5,12,10],dogs:[{x:.45+si,y:0,z:-.85},{x:2.3+ii,y:0,z:-1.25}],gags:[Gs("gag-bell-0","bell",ii-3.5,5.75,-5,1,.7,.8),Gs("gag-bell-1","bell",ii+3.5,5.75,-5,1,.7,.8),Gs("gag-laundry","laundry",si,3.85,-4.5,12,1.2,.2)],props:[{kind:"bottle",x:-8.6,y:0,z:3.8},{kind:"barrel",x:-12.7,y:0,z:3.6},{kind:"melon",x:-7.2,y:0,z:1.2},{kind:"fish",x:-4.95,y:1.87,z:3.05},{kind:"flowerpot",x:-10.75,y:1.15,z:3},{kind:"pie",x:-9.92,y:.98,z:3.35},{kind:"chicken",x:-6.1,y:0,z:.4},{kind:"tire",x:-13.6,y:0,z:1},{kind:"bowling",x:-3.1,y:0,z:3.9},{kind:"bottle",x:-11.6,y:0,z:.3},{kind:"hydrant",x:.6,y:0,z:2.7},{kind:"bottle",x:-1.1,y:0,z:1},{kind:"anvil",x:2.3,y:0,z:3.9},{kind:"barrel",x:3.4,y:0,z:3.6},{kind:"bottle",x:4.9,y:1.22,z:3},{kind:"melon",x:7.7,y:0,z:1},{kind:"fish",x:10.8,y:1.3,z:3.15},{kind:"pie",x:9,y:0,z:3.9},{kind:"tire",x:12.7,y:0,z:3.5},{kind:"flowerpot",x:10,y:1.02,z:-1.9},{kind:"chicken",x:8.1,y:0,z:-.2},{kind:"bowling",x:13.7,y:0,z:1.4},{kind:"bottle",x:14.3,y:0,z:3.7}],friends:[{who:"mole",x0:0,x1:0,y:0,z:0,period:0,spots:[{x:si-1.6,z:-.95},{x:ii+.4,z:-1},{x:si+2,z:4.4},{x:ii-2.4,z:4.3},{x:si+.95,z:-.95},{x:ii+2.9,z:-1.2}]},{who:"granny",x0:-14,x1:14,y:0,z:.55,period:56},{who:"pigeon",x0:3.6,x1:13.2,y:0,z:1.75,period:19}],thugs:!0},yt={1:$x,2:Kx},Xr=2,qa=(n,e)=>{const t=yt[n]?.pan??0;return Math.max(-t,Math.min(t,e))};function ic(n,e,t){const i=yt[n],s=i?.landing;if(!s||e!==s.cover||!t)return!1;const r=i.covers.find(a=>a.id===s.cover);return r?t.y>=r.max.y-s.band&&t.x>=r.min.x&&t.x<=r.max.x:!1}const _u=.32,sc=[{at:1.35,len:.8},{at:3.3,len:.75}],js=.9,xu=n=>1-(1-n)**3;function jx(n,e=1/0,t=!0){if(!t)return 1;let i=xu(Math.min(1,n/_u));for(const s of sc)n>s.at&&n<s.at+s.len&&s.at+s.len<e-js&&(i*=1-.62*Math.sin(Math.PI*(n-s.at)/s.len));return i}function Ic(n,e=!0){if(!e)return{dx:0,walking:!1,facing:1};const t=9,i=n%t,s=-.7,r=.7,a=o=>o*o*(3-2*o);return i<3.5?{dx:s,walking:!1,facing:1}:i<4.5?{dx:s+(r-s)*a(i-3.5),walking:!0,facing:1}:i<8?{dx:r,walking:!1,facing:-1}:{dx:r+(s-r)*a(i-8),walking:!0,facing:-1}}const un={period:23,start:15,up:1.4,hold:2.2,down:1.4,height:1.6};function vu(n,e=!0){if(!e)return 0;const t=n%un.period-un.start;if(t<0)return 0;const i=r=>r*r*(3-2*r);if(t<un.up)return un.height*i(t/un.up);if(t<un.up+un.hold)return un.height;const s=t-un.up-un.hold;return s<un.down?un.height*(1-i(s/un.down)):0}function gn(n,e,t=!0){if(e.kind==="dog")return{x:e.x+Ic(e.age,t).dx,y:e.y+vu(e.age,t),z:e.z??0};if(e.kind==="friend"){const r=yt[n].friends[e.plan??0];if(r)return Dc(r,e.age,t)}if(e.kind==="thug")return Xx({x:e.x,z:e.z??0,side:e.side??1,from:e.from??"edge"},e.age,t);const i=e.slot===void 0?void 0:yt[n].slots[e.slot];if(!i)return{x:e.x,y:e.y,z:e.z??0};const s=e.antic||e.blind?t?xu(Math.min(1,e.age/_u)):1:jx(e.age,e.deadline,t);return{x:i.hideX+(i.x-i.hideX)*s,y:i.hideY+(i.y-i.hideY)*s,z:i.z}}function fo(n,e){return n==="friend"&&e&&e in id?id[e]:n==="thug"&&e&&e in sd?sd[e]:Wt[n]??Wt.enemy}function Zx(n,e,t,i){const s=fo(n,i),[r,a,o,c]=t?Lc[t]:s.inset;return{min:{x:e.x-s.w/2+s.w*r,y:e.y+s.h*o,z:e.z-.04},max:{x:e.x-s.w/2+s.w*a,y:e.y+s.h*c,z:e.z+.04}}}function Jx(n,e,t=!0,i=[]){const s=yt[n].covers.map(r=>({id:r.id,kind:"cover",min:r.min,max:r.max}));for(const r of yt[n].gags)r.min&&r.max&&s.push({id:r.id,kind:"cover",min:r.min,max:r.max});for(const r of e){if(r.kind==="friend"&&r.who==="mole"){const o=yt[n].friends[r.plan??0];if(o&&Dc(o,r.age,t).rise<Zt.hittable)continue}const a=Zx(r.kind,gn(n,r,t),r.kind==="enemy"?r.skin:void 0,r.who);r.kind==="dog"&&Ic(r.age,t).walking&&(a.max.y=a.min.y+Wt.dog.h*(qx-Wt.dog.inset[2])),s.push({id:r.id,kind:r.kind==="enemy"||r.kind==="dog"||r.kind==="friend"||r.kind==="thug"?r.kind:"prop",...a})}return s.concat(i)}function yu(n,e,t=0){const s=n/Math.max(1,e),r=Math.atan(Math.tan(50*Math.PI/360)*s),a=Math.max(9.5,3+3.1/Math.tan(r));return{fov:50,position:{x:t,y:2.3+(a-9.5)*.12,z:a},look:{x:t,y:1.35+(a-9.5)*.1,z:-3}}}const il=26,Qx=.9;function Mu(n,e,t,i){let s=0,r=1/0;for(const a of["x","y","z"]){if(Math.abs(e[a])<1e-9){if(n[a]<t[a]||n[a]>i[a])return null;continue}let o=(t[a]-n[a])/e[a],c=(i[a]-n[a])/e[a];if(o>c&&([o,c]=[c,o]),s=Math.max(s,o),r=Math.min(r,c),s>r)return null}return s}const Su=n=>{const e=Math.hypot(n.x,n.y,n.z)||1;return{x:n.x/e,y:n.y/e,z:n.z/e}},Pa=(n,e,t)=>({x:n.x+e.x*t,y:n.y+e.y*t,z:n.z+e.z*t});function Uc(n,e,t,i="punch"){const s=Su(e);let r=null;for(const c of t){let l=c.min,h=c.max;if(i==="grab"&&c.kind==="prop"){const u=(l.x+h.x)/2,f=(l.y+h.y)/2,g=(h.x-l.x)/2*1.8,_=(h.y-l.y)/2*1.8;l={x:u-g,y:f-_,z:l.z-.25},h={x:u+g,y:f+_,z:h.z+.25}}const d=Mu(n,s,l,h);d!==null&&d<=il*2&&(!r||d<r.distance)&&(r={kind:c.kind,id:c.id,point:Pa(n,s,d),distance:d})}if(i==="grab"&&r?.kind!=="prop"){const c=r?r.point:(()=>{const h=s.y<-1e-6?-n.y/s.y:1/0;return Pa(n,s,Math.min(h,il))})();let l=null;for(const h of t){if(h.kind!=="prop")continue;const d={x:(h.min.x+h.max.x)/2,y:(h.min.y+h.max.y)/2,z:(h.min.z+h.max.z)/2},u={x:d.x-n.x,y:d.y-n.y,z:d.z-n.z},f=u.x*s.x+u.y*s.y+u.z*s.z;if(f<=0)continue;const g=Pa(n,s,f),_=Math.hypot(d.x-g.x,d.y-g.y,d.z-g.z),m=Math.hypot(d.x-c.x,d.y-c.y,d.z-c.z),p=Math.min(_,m);p<=Qx&&(!l||p<l.dist)&&(l={h,dist:p,center:d,proj:f})}if(l)return{kind:"prop",id:l.h.id,point:l.center,distance:l.proj}}if(r)return r;const a=s.y<-1e-6?-n.y/s.y:1/0,o=Math.min(a,il);return{kind:"whiff",point:Pa(n,s,o),distance:o}}const bu=-9.5;function ev(n,e){const t=22/Math.sqrt(Math.max(.5,Nt[n].mass));return Math.max(.3,Math.min(1,e/t))}const Eu={above:2.4,hang:.16},Da={radius:.2,minSpeed:6.5,friction:.3,stop:.9};function tv(n,e,t,i){const s=e==="anvil"?{...i,y:i.y+Eu.above,z:i.z-.04}:i,r={x:s.x-t.x,y:s.y-t.y,z:s.z-t.z},a=ev(e,Math.hypot(r.x,r.y,r.z)),o={x:r.x/a,y:r.y/a-.5*bu*a,z:r.z/a},c={id:n,kind:e,pos:{...t},vel:o,age:0,angle:0,spin:(s.x>=t.x?-1:1)*11/Math.sqrt(Nt[e].mass),struck:!1};return e==="anvil"&&(c.drop=a),e==="bowling"&&(c.hits=[]),c}const sl=new Set(["enemy","dog","friend","thug"]),nv=(n,e)=>n.x>e.min.x&&n.x<e.max.x&&n.y>e.min.y&&n.y<e.max.y&&n.z>e.min.z&&n.z<e.max.z,yr=.001;function iv(n,e,t){const i=[];let s=e;for(;s>1e-9;){const r=Math.min(s,.008333333333333333);if(s-=r,n.age+=r,n.angle+=n.spin*r,n.drop!==void 0&&!n.dropped&&n.age>=n.drop){if(n.vel={x:0,y:0,z:0},n.spin=0,n.angle=0,n.age<n.drop+Eu.hang)continue;n.dropped=!0,n.vel.y=-3}if(n.rolling){const u=Math.hypot(n.vel.x,n.vel.z),f=Math.max(0,1-Da.friction*r);if(n.vel.x*=f,n.vel.z*=f,n.spin=-u*2.5,u<Da.stop)return i.push({type:"rest",point:{x:n.pos.x,y:0,z:n.pos.z},on:"ground"}),i}const a={x:n.pos.x+n.vel.x*r,y:n.pos.y+n.vel.y*r,z:n.pos.z+n.vel.z*r};n.rolling||(n.vel.y+=bu*r);const o={x:a.x-n.pos.x,y:a.y-n.pos.y,z:a.z-n.pos.z},c=Math.hypot(o.x,o.y,o.z),l=Su(o);let h=null;for(const u of t){if(u.kind==="prop"||nv(n.pos,u)||sl.has(u.kind)&&(n.hits?n.hits.includes(u.id):n.struck))continue;let f=u.min,g=u.max;if(u.kind==="enemy"){const m=(f.x+g.x)/2,p=(f.y+g.y)/2,w=(g.x-f.x)/2*1.3,E=(g.y-f.y)/2*1.3;f={x:m-w,y:p-E,z:f.z-.1},g={x:m+w,y:p+E,z:g.z+.1}}const _=Mu(n.pos,l,f,g);_!==null&&_<=c&&(!h||_<h.t)&&(h={t:_,hit:u})}const d=a.y<=0&&n.pos.y>0?c*n.pos.y/(n.pos.y-a.y):1/0;if(h&&h.t<=d){const u=h.hit,f={x:n.pos.x+l.x*h.t,y:n.pos.y+l.y*h.t,z:n.pos.z+l.z*h.t};if(sl.has(u.kind)&&n.hits){n.struck=!0,n.hits.push(u.id),i.push({type:"hit",kind:u.kind,id:u.id,point:f}),n.vel.x*=.85,n.vel.z*=.85;continue}if(sl.has(u.kind)){n.struck=!0,i.push({type:"hit",kind:u.kind,id:u.id,point:f}),n.pos={x:f.x,y:f.y,z:u.max.z+.08},n.vel={x:n.vel.x*.12,y:1.6,z:1.4},n.spin*=-.6;continue}if(l.y<0&&f.y>=u.max.y-yr)return i.push({type:"rest",point:{x:f.x,y:u.max.y,z:Math.min(u.max.z-.06,Math.max(u.min.z+.06,f.z))},on:u.id}),i;n.struck||(n.struck=!0,i.push({type:"hit",kind:u.kind,id:u.id,point:f}));const g=Math.abs(f.z-u.max.z)<yr?{z:1}:Math.abs(f.z-u.min.z)<yr?{z:-1}:Math.abs(f.x-u.max.x)<yr?{x:1}:Math.abs(f.x-u.min.x)<yr?{x:-1}:{y:-1};n.vel={x:n.vel.x*.25,y:Math.min(n.vel.y,0)*.3,z:n.vel.z*.25},"z"in g?n.vel.z=g.z*Math.max(.6,Math.abs(n.vel.z)):"x"in g?n.vel.x=g.x*Math.max(.6,Math.abs(n.vel.x)):n.vel.y=-Math.abs(n.vel.y),n.pos={x:f.x+("x"in g?g.x*.05:0),y:f.y+("y"in g?g.y*.05:0),z:f.z+("z"in g?g.z*.05:0)},n.spin*=-.5;continue}if(d!==1/0&&n.hits&&!n.rolling){const u=d/Math.max(c,1e-9),f=Math.hypot(n.vel.x,n.vel.z)||1,g=Math.max(Da.minSpeed,f);n.pos={x:n.pos.x+o.x*u,y:Da.radius,z:n.pos.z+o.z*u},n.vel={x:n.vel.x/f*g,y:0,z:n.vel.z/f*g},n.rolling=!0;continue}if(d!==1/0){const u=d/Math.max(c,1e-9);return i.push({type:"rest",point:{x:n.pos.x+o.x*u,y:0,z:n.pos.z+o.z*u},on:"ground"}),i}if(n.pos=a,n.age>5)return i.push({type:"rest",point:{x:n.pos.x,y:0,z:n.pos.z},on:"ground"}),i}return i}const Ar=[{who:"ТЫ — БАРМЕНУ",text:"«Спорим, бармен, на триста баксов, что я нассу вон в ту шляпу и не пролью ни капли?»",at:.5,len:3.1},{who:"БАРМЕН-ЛАСКА",text:"«Идёт. Ставлю триста.»",at:3.6,len:1.7}],Is={share:.6,prize:300,perSecond:40},sv=n=>Ar.find(e=>n>=e.at&&n<e.at+e.len)??null,Mr={origin:{x:.5,y:1.12},lag:6.5,arc:.2,segments:26};class rv{tip;constructor(e={x:.5,y:.8}){this.tip={...e}}update(e,t){const i=1-Math.exp(-e*Mr.lag);return this.tip.x+=(t.x-this.tip.x)*i,this.tip.y+=(t.y-this.tip.y)*i,this.tip}controls(){const e=Mr.origin,t=this.tip,i=t.x-e.x,s=.07*Math.tanh(i*6)+.04,r=Mr.arc+Math.abs(i)*.12;return[{x:e.x+i*.2,y:t.y-r*.9},{x:t.x+s,y:t.y-r*1.15}]}points(e=Mr.segments){const t=Mr.origin,[i,s]=this.controls(),r=this.tip,a=[];for(let o=0;o<=e;o++){const c=o/e,l=1-c,h=l*l*l,d=3*l*l*c,u=3*l*c*c,f=c*c*c;a.push({x:h*t.x+d*i.x+u*s.x+f*r.x,y:h*t.y+d*i.y+u*s.y+f*r.y})}return a}}const Zi={enter:.7,torn:.55,mad:1.7,leave:1.1,read:14,penalty:120},hd=["ЭЙ, ПОЛЕГЧЕ! Я ТУТ ГЛАШАТАЙ!","ХАМЬЁ! КОТЕЛОК ПОМЯЛ!","ПО ЛИСТОВКЕ БЕЙ, ДУБИНА!","НУ И МАНЕРЫ! ЧИТАЙ ДАЛЬШЕ!"],av="ЧЕСТЬ ИМЕЮ!";function ov(n,e){return n===1?[{art:"tall",title:"БЕЙ!",lines:e?["Веди рукой: по врагу — удар,","по предмету — захват.","Проведи по листовке, чтоб порвать."]:["ЛКМ или ПРОБЕЛ —","кулак летит ровно","в точку прицела."]},{art:"tag",title:"ХВАТАЙ И БРОСАЙ",lines:e?["Веди рукой: по предмету — захват.","С предметом проведи по врагу","или отпусти над ним — бросок!"]:["ПКМ или E — схватить","бутылку, табурет…","Ещё раз — бросок!"]},{art:"taped",title:"БЕРЕГИ СИЛЫ",lines:["Каждый замах","стоит сил — даже промах.","Выдохни — и снова в бой."]},{art:"pinned",title:"НЕ ТРОЖЬ СВОИХ!",lines:["Пёс с нимбом, котёнок,","крот, бармен, пьяница —","знак «НЕ ТРОГАТЬ»!"]},{art:"wide",title:"ЗАГАДКА",lines:["На голове котелок — для форса.","Вверх дном на стойке —","для чего-то покрепче…"]}]:[{art:"wide",title:"УЛИЦА ШИРОКАЯ",lines:e?["Веди к краю экрана —","камера плавно едет","вдоль улицы."]:["Стрелки, A / D","или мышь у края —","камера едет."]},{art:"tag",title:"ПОЛОСКИ ЗДОРОВЬЯ",lines:["У задиры своя полоска.","Кулак — треть,","тяжёлый бросок — всё."]},{art:"pinned",title:"ШПАНА У НОСА",lines:e?["Крыса, голубь, мальчишка","лезут к самой камере —","проведи по ним сразу!"]:["Крыса, голубь, мальчишка","лезут к самой камере —","бей сразу, с одного!"]},{art:"taped",title:"БАБУШКУ НЕ БЬЮТ",lines:["Бабушка, голубь-почтальон,","крот и пёс —","свои. Руки прочь!"]}]}class lv{constructor(e,t,i=!1){this.level=e,this.flyers=t,this.reduced=i,i&&(this.phase="show")}level;flyers;reduced;index=0;phase="enter";t=0;offences=0;line="";get flyer(){return this.flyers[this.index]??null}get done(){return this.phase==="done"}get live(){return this.phase==="show"||this.phase==="mad"}tick(e){this.done||(this.t+=e,this.phase==="enter"&&this.t>=Zi.enter?this.go("show"):this.phase==="show"&&this.t>=Zi.read?this.next():this.phase==="torn"&&this.t>=Zi.torn?this.next():this.phase==="mad"&&this.t>=Zi.mad?this.go("show"):this.phase==="leave"&&this.t>=Zi.leave&&this.go("done"))}tear(){return this.phase!=="show"?!1:(this.reduced?this.next():this.go("torn"),!0)}offend(){return this.phase!=="show"?!1:(this.line=hd[this.offences++%hd.length],this.go("mad"),!0)}skip(){this.phase!=="leave"&&!this.done&&this.go(this.reduced?"done":"leave")}next(){this.index++,this.go(this.index>=this.flyers.length?this.reduced?"done":"leave":"show")}go(e){this.phase=e,this.t=0}}const An={start:.45,len:2.6,kinds:["dance","sandwich","selfie"],bonus:2},Ct={pie:{blind:3},plunger:{stun:2},chicken:{combo:2,bonus:100},seeds:{radius:3.2,damage:5,max:3},geyser:{radius:2.4,life:4.5,damage:10,stagger:1.5}},Rr={first:9,every:13,warn:1.9,radius:1.3},cv={3:"ОГО!",5:"ВОТ ЭТО ДА!",8:"МАМА!",12:"ЧУДЕСА НА ВИРАЖАХ!"},hv=n=>["spin","stars","birds"][n%3],qi={intro:Ar[Ar.length-1].at+Ar[Ar.length-1].len,length:6,soakRate:1.9,dogCooldown:1.5},wu="long-arms.progress.v2",dv="long-arms.progress.v1",Tu=()=>({version:2,unlocked:2,best:0});function uv(n){try{const e=JSON.parse(n??"null"),t=Number.isFinite(e?.best)&&e.best>=0?Math.floor(e.best):-1;if(e?.version===2&&Number.isInteger(e.unlocked)&&e.unlocked>=1&&e.unlocked<=Xr&&t>=0)return{version:2,unlocked:e.unlocked,best:t};if(e?.version===1&&Number.isInteger(e.unlocked)&&e.unlocked>=1&&e.unlocked<=3&&t>=0)return{version:2,unlocked:e.unlocked>=2?2:1,best:t}}catch{}return Tu()}const Au=n=>{const e=n(wu);return uv(e??n(dv))};function fv(n){return n.won&&n.level<Xr&&n.progress.unlocked>n.level?[{id:"next",label:"СЛЕДУЮЩИЙ УРОВЕНЬ →",primary:!0},{id:"retry",label:"ЕЩЁ РАЗ ↺",primary:!1},{id:"select",label:"ВЫБОР УРОВНЯ",primary:!1}]:n.won?[{id:"menu",label:"В МЕНЮ →",primary:!0},{id:"retry",label:"ЕЩЁ РАЗ ↺",primary:!1}]:[{id:"retry",label:"ЕЩЁ РАЗ ↗",primary:!0},{id:"select",label:"ВЫБОР УРОВНЯ",primary:!1}]}const Ru=(n,e,t)=>n==="punch"?24:e?t?Nt[t].throw:10:Wr,pv=10,mv={cat:30,walrus:30,bulldog:40,weasel:20},gv={1:29.4,2:21};function _v(n,e){return 1}const La=n=>n>1.5?"foreground":n>-5?"midground":"background";class xv{constructor(e=Tu(),t=()=>{}){this.save=t,this.progress=e}save;mode="menu";level=1;hp=5;stamina=100;score=0;combo=0;elapsed=0;held=null;ult={phase:"none",t:0,meter:0,hat:0};dogSoak=0;dogLeft=!1;hatRest=null;actors=[];events=[];flights=[];riffs=0;laundry=5;progress;won=!1;defeated=0;spawned=0;spawnClock=0;nextId=1;message="Двор ждёт своих героев";cam={x:0,z:9.5,half:2.6};thugClock=0;thugs=0;geysers=[];hazards=[];hazardClock=0;hazardCount=0;briefings=!1;briefing=null;briefed=new Set;touch=!1;reduced=!1;get layout(){return yt[this.level]}get goal(){return this.layout.goal}start(e){if(!Number.isInteger(e)||e<1||e>Xr)return!1;this.level=e,this.hp=5,this.stamina=100,this.score=0,this.combo=0,this.elapsed=0,this.held=null,this.actors=[],this.events=[],this.flights=[],this.riffs=0,this.laundry=5,this.won=!1,this.defeated=0,this.spawned=0,this.spawnClock=0,this.nextId=1,this.thugClock=0,this.thugs=0,this.geysers=[],this.hazards=[],this.hazardClock=0,this.hazardCount=0,this.mode="play",this.message=this.layout.look==="bar"?"Бар «Длинные руки». Ведите себя прилично.":"Улица большая — крути камеру к краям!",this.ult={phase:"none",t:0,meter:0,hat:0},this.dogSoak=0,this.dogLeft=!1,this.hatRest=null;for(const t of this.layout.props)this.actors.push({id:this.nextId++,kind:t.kind,x:t.x,y:t.y,z:t.z,layer:La(t.z),age:0,deadline:1/0});return this.layout.friends.forEach((t,i)=>this.actors.push({id:this.nextId++,kind:"friend",who:t.who,plan:i,x:t.x0,y:t.y,z:t.z,layer:La(t.z),age:0,deadline:1/0})),this.briefing=null,this.briefings&&!this.briefed.has(e)?(this.briefed.add(e),this.briefing=new lv(e,ov(e,this.touch),this.reduced),this.message="Глашатай! Читай листовки — или жми ПОНЯЛ."):this.spawn(),this.placeHat(),!0}endBriefing(){this.briefing=null,this.message=this.layout.look==="bar"?"Бар «Длинные руки». Ведите себя прилично.":"Улица большая — крути камеру к краям!",this.spawn()}skipBriefing(){this.briefing&&(this.briefing.skip(),this.briefing.done&&this.endBriefing())}briefPunch(e){const t=this.briefing;return!t||this.mode!=="play"?null:e==="flyer"&&t.tear()?(this.events.push({type:"tear",id:0,combo:this.combo,amount:t.index}),this.message="ТРЕСЬ! Следующая листовка.",t.done&&this.endBriefing(),"tear"):e==="herald"?t.offend()?(this.score=Math.max(0,this.score-Zi.penalty),this.hp=Math.max(0,this.hp-1),this.combo=0,this.events.push({type:"offend",id:0,combo:0,who:"herald",text:t.line}),this.message=`${t.line} −${Zi.penalty} и сердце.`,this.hp||this.finish(!1),"protected"):(this.message="Он и так обижен! Оставь в покое.","miss"):(this.message="Бей по листовке — будет следующая.","miss")}get ultActive(){return this.ult.phase==="intro"||this.ult.phase==="pour"}placeHat(){const e=this.layout.hat;!e||this.ult.phase!=="none"||this.held==="hat"||this.actors.some(t=>t.kind==="hat")||this.flights.some(t=>t.kind==="hat")||this.actors.push({id:this.nextId++,kind:"hat",...e,layer:"foreground",age:0,deadline:1/0})}soak(e,t){if(this.mode!=="play"||this.ult.phase!=="pour")return null;const i=typeof e.id=="number"?this.actors.find(s=>s.id===e.id):void 0;return i?i.kind==="dog"?this.dogSoak>0||i.mad?null:(this.dogSoak=qi.dogCooldown,this.dogHit(i),"dog"):i.kind==="friend"?i.mad?null:(this.friendHit(i),"dog"):i.kind!=="enemy"?null:(i.wet=Math.min(1,(i.wet??0)+t*qi.soakRate),i.wet<1?(this.message="ФУ-У-У! Задиры в ужасе.","soak"):(this.actors=this.actors.filter(s=>s.id!==i.id),this.combo++,this.defeated++,this.score+=120+Math.min(this.combo-1,9)*25,this.events.push({type:"ko",id:i.id,combo:this.combo}),this.message="Смыло!",this.defeated>=this.goal&&this.finish(!0),"ko")):null}gag(e,t){const i=this.layout.gags.find(r=>r.id===e);if(!i)return!1;const s={type:"gag",id:0,combo:this.combo,gag:i.kind,gagId:i.id,point:t};if(i.kind==="piano")s.amount=this.riffs++,this.message="ТРЫНЬ! Пианино само заиграло рэгтайм.";else if(i.kind==="cuckoo")this.message="КУ-КУ! Кукушка высунулась и обозвала тебя.";else if(i.kind==="lamp")this.message="Лампа раскачалась — свет мигает!";else if(i.kind==="bell")this.message="ДЗИИНЬ! Фонарь звенит, как колокол.";else if(i.kind==="laundry"){if(this.laundry<=0)return this.message="Верёвка пуста — всё бельё уже на задирах.",!0;this.laundry--;const r=t?.x??(i.min.x+i.max.x)/2,a=this.actors.filter(o=>o.kind==="enemy"&&o.age>.3&&o.x>i.min.x-1&&o.x<i.max.x+1).sort((o,c)=>Math.abs(o.x-r)-Math.abs(c.x-r))[0];if(a)return s.id=a.id,this.events.push(s),this.hurt(a,10),this.message="Трусы на голову! Задира ослеп.",!0;this.message="Бельё шлёпнулось в пыль. Мимо!"}return this.events.push(s),!0}pourInHat(e){if(this.mode!=="play"||this.ult.phase!=="pour")return!1;const t=Math.floor(this.ult.hat*Is.perSecond);return this.ult.hat+=e,this.score+=Math.floor(this.ult.hat*Is.perSecond)-t,this.message="Прямо в шляпу! Ни капли мимо…",!0}pause(){this.mode==="play"?this.mode="pause":this.mode==="pause"&&(this.mode="play")}suspend(){this.mode==="play"&&(this.mode="pause")}spawn(){if(this.spawned>=this.goal)return;const{order:e,slots:t,dogs:i,deadline:s,maxAlive:r}=this.layout,a=e[this.spawned%e.length];if(this.actors.some(h=>h.kind==="enemy"&&h.slot===a)||r&&this.actors.filter(h=>h.kind==="enemy").length>=r)return;const o=t[a],c=mv[o.skin??"cat"],l=this.spawned%3===2?An.kinds[Math.floor(this.spawned/3)%An.kinds.length]:void 0;if(this.actors.push({id:this.nextId++,kind:"enemy",x:o.x,y:o.y,z:o.z,slot:a,layer:o.layer,age:0,deadline:s+(l?An.len:0),hp:c,maxHp:c,antic:l}),this.spawned++,!this.dogLeft&&!this.actors.some(h=>h.kind==="dog"))for(const h of i)this.actors.push({id:this.nextId++,kind:"dog",...h,layer:"midground",age:0,deadline:1/0});o.skin&&(this.actors.find(h=>h.kind==="enemy"&&h.slot===a).skin=o.skin)}tick(e){if(this.mode!=="play")return;if(this.briefing){this.briefing.tick(e),this.briefing.done&&this.endBriefing();return}if(this.ult.phase==="intro"){this.ult.t+=e,this.ult.t>=qi.intro&&(this.ult={phase:"pour",t:0,meter:1,hat:0},this.message="Держи струю в шляпе! Задир можно и окатить. Пса не задень.");return}const t=this.ult.phase==="pour";if(t&&(this.ult.t+=e,this.ult.meter=Math.max(0,1-this.ult.t/qi.length),this.dogSoak=Math.max(0,this.dogSoak-e),this.ult.t>=qi.length)){const i=this.ult.hat>=qi.length*Is.share;this.ult={...this.ult,phase:"done",t:0,meter:0},this.events.push({type:"ultEnd",id:0,combo:this.combo,amount:i?Is.prize:0}),i?(this.score+=Is.prize,this.message=`Ни капли мимо! Бармен платит ${Is.prize}.`):this.message="Пролил! Бармен забирает свои триста."}this.elapsed+=e,this.stamina=Math.min(100,this.stamina+e*(gv[this.level]??21)),this.spawnClock+=e;for(const i of[...this.actors]){if((i.kind==="friend"||i.kind==="dog")&&i.mad){i.mad=Math.max(0,i.mad-e),i.mad<=0&&(this.actors=this.actors.filter(s=>s.id!==i.id),i.kind==="dog"&&(this.dogLeft=!0));continue}if(i.age+=e,i.kind==="thug"&&i.age>=ai.strike){this.nuisance(i);continue}i.kind==="enemy"&&(i.blind&&(i.blind=Math.max(0,i.blind-e),i.deadline=Math.max(i.deadline,i.age+js+.4)),i.antic&&i.age>An.start+An.len&&(i.antic=void 0)),t&&i.kind==="enemy"&&(i.age=Math.min(i.age,Math.max(i.age-e,i.deadline-1))),i.kind==="enemy"&&this.updateEnemy(i)}if(this.hp<=0){this.finish(!1);return}if(this.defeated>=this.goal){this.finish(!0);return}for(;this.spawnClock>=1.55;)this.spawnClock-=1.55,this.spawn();this.stepGeysers(e),this.stepHazards(e,t),this.mode==="play"&&this.layout.thugs&&!t&&(this.thugClock+=e,this.thugClock>=(this.thugs?ai.every:ai.first)&&(this.thugClock=0,this.spawnThug()))}updateEnemy(e){const t=e.layer??(e.slot!==void 0&&this.layout.slots?.[e.slot]?this.layout.slots[e.slot].layer:La(e.z??0));if(e.layer=t,e.slot===void 0||t==="foreground"||!this.layout.slots?.length){e.age>=e.deadline&&(this.actors=this.actors.filter(s=>s.id!==e.id),this.hp--,this.combo=0,this.defeated++,this.events.push({type:"attack",id:e.id,combo:0}),this.message="Прилетело! Следи за замахом.");return}const i=e.antic?An.start+An.len:sc[0].at+sc[0].len;for(;e.layer!=="foreground"&&e.age>=i;){const s=e.layer==="background"?"midground":"foreground",r=[];for(let a=0;a<this.layout.slots.length;a++)this.layout.slots[a].layer===s&&!this.actors.some(o=>o.kind==="enemy"&&o.id!==e.id&&o.slot===a)&&r.push(a);if(r.length>0){r.sort((c,l)=>Math.abs(this.layout.slots[c].x-e.x)-Math.abs(this.layout.slots[l].x-e.x));const a=r[0],o=this.layout.slots[a];e.slot=a,e.x=o.x,e.y=o.y,e.z=o.z,e.layer=o.layer,o.skin&&(e.skin=o.skin),e.age-=i,e.deadline=this.layout.deadline+(e.antic?An.len:0),this.events.push({type:"advance",id:e.id,combo:this.combo,point:{x:e.x,y:e.y,z:e.z??0}}),this.message=s==="foreground"?"Задира перебежал к переднему укрытию!":"Задира подбирается ближе!"}else{e.age>=e.deadline&&(e.age=0,e.deadline=this.layout.deadline+(e.antic?An.len:0),this.events.push({type:"taunt",id:e.id,combo:this.combo,point:{x:e.x,y:e.y,z:e.z??0}}),this.message=e.layer==="background"?"Задира дразнится из глубины!":"Задира выглядывает и дразнит!");break}}e.layer==="foreground"&&e.age>=e.deadline&&(this.actors=this.actors.filter(s=>s.id!==e.id),this.hp--,this.combo=0,this.defeated++,this.events.push({type:"attack",id:e.id,combo:0}),this.message="Прилетело! Следи за замахом.")}bump(e=1){for(let t=0;t<e;t++){this.combo++;const i=cv[this.combo];i&&this.events.push({type:"milestone",id:0,combo:this.combo,text:i})}}stepGeysers(e){for(const t of this.geysers){t.age+=e;for(const i of this.actors.filter(s=>s.kind==="enemy"&&!t.hit.includes(s.id))){const s=gn(this.level,i);if(!(Math.hypot(s.x-t.x,s.z-t.z)>Ct.geyser.radius)&&(t.hit.push(i.id),this.events.push({type:"knock",id:i.id,combo:this.combo,point:{x:t.x,y:0,z:t.z}}),this.hurt(i,Ct.geyser.damage,!0)||(i.deadline+=Ct.geyser.stagger,this.message="Гидрант бьёт фонтаном — задиру сдуло!"),this.mode!=="play"))return}}this.geysers=this.geysers.filter(t=>t.age<Ct.geyser.life)}stepHazards(e,t){if(t||(this.hazardClock+=e),this.hazardClock>=(this.hazardCount?Rr.every:Rr.first)){const i=this.actors.filter(s=>s.kind==="enemy"&&s.age>.6).map(s=>({t:s,p:gn(this.level,s)})).sort((s,r)=>Math.abs(s.p.x-this.cam.x)-Math.abs(r.p.x-this.cam.x));i.length?(this.hazardClock=0,this.dropFromSky(i[0].p.x,i[0].p.z)):this.hazardClock-=1}for(const i of[...this.hazards]){if(i.age+=e,i.age<Rr.warn)continue;this.hazards=this.hazards.filter(r=>r!==i);const s=this.actors.filter(r=>r.kind==="enemy").filter(r=>{const a=gn(this.level,r);return Math.hypot(a.x-i.x,a.z-i.z)<=Rr.radius});this.events.push({type:"crash",id:i.id,combo:this.combo,hazard:i.kind,point:{x:i.x,y:0,z:i.z},ids:s.map(r=>r.id)});for(const r of s)if(this.hurt(r,999,!1,"pancake"),this.mode!=="play")return;this.message=s.length?i.kind==="piano"?"БДЫЩЬ! Рояль с неба — задира в лепёшку!":"БУМ! Сейф на голову — в лепёшку!":"Мимо! Но грохоту-то сколько."}}dropFromSky(e,t){const i={id:this.nextId++,kind:this.hazardCount++%2?"safe":"piano",x:e,z:t,age:0};return this.hazards.push(i),this.events.push({type:"hazard",id:i.id,combo:this.combo,hazard:i.kind,point:{x:e,y:0,z:t}}),i}seeds(e,t){const i=this.actors.filter(s=>s.kind==="enemy"&&s.id!==t).map(s=>({t:s,d:Math.hypot(gn(this.level,s).x-e.x,gn(this.level,s).z-e.z)})).filter(s=>s.d<=Ct.seeds.radius).sort((s,r)=>s.d-r.d).slice(0,Ct.seeds.max).map(s=>s.t);this.events.push({type:"seeds",id:0,combo:this.combo,point:e,ids:i.map(s=>s.id)});for(const s of i)if(this.hurt(s,Ct.seeds.damage,!0),this.mode!=="play")return}propHit(e,t,i){const s=Nt[e.kind];if(!s.damage){this.combo=0,this.message="Шляпу — не в задиру!";return}if(e.kind==="anvil"){this.hurt(t,Math.max(s.damage,t.hp??0),!0,"pancake"),this.message="НАКОВАЛЬНЯ! Задира — блин.";return}e.kind==="chicken"&&(this.bump(Ct.chicken.combo),this.score+=Ct.chicken.bonus,this.events.push({type:"squeak",id:t.id,combo:this.combo,point:i})),e.kind==="pie"&&(t.blind=Ct.pie.blind,this.events.push({type:"blind",id:t.id,combo:this.combo,point:i})),e.kind==="plunger"&&(t.plunger=!0,t.deadline+=Ct.plunger.stun,this.events.push({type:"stick",id:t.id,combo:this.combo,point:i})),this.hurt(t,Math.max(s.damage*(t.antic?An.bonus:1),t.hp??0),!0),e.kind==="bowling"&&e.hits?.length===2?(this.events.push({type:"strike",id:t.id,combo:this.combo,point:i}),this.message="СТРАЙК! Двоих одним шаром!"):e.kind==="pie"?this.message="Пирог в лицо! Ничего не видит, шатается.":e.kind==="plunger"?this.message="ЧПОК! Вантуз прилип к физиономии.":e.kind==="chicken"&&(this.message=`ПИ-И-ИСК! Комбо +${Ct.chicken.combo}!`)}spawnThug(){if(this.actors.filter(l=>l.kind==="thug").length>=(this.elapsed>30?2:1))return null;const t=this.thugs++,i=["rat","gang","kid"][t%3],s=t%2?1:-1,r=t%3===1?"manhole":"edge",a=this.cam.z-ai.depth,o=this.cam.x+s*this.cam.half*(r==="manhole"?.3:.62),c={id:this.nextId++,kind:"thug",who:i,side:s,from:r,x:o,y:0,z:a,layer:"foreground",age:0,deadline:ai.strike,hp:1,maxHp:1};return this.actors.push(c),this.message=r==="manhole"?"Из люка лезет шпана — бей сразу!":"Шпана под носом — бей сразу!",c}nuisance(e){this.actors=this.actors.filter(i=>i.id!==e.id);const t=Vx[e.who];t.what==="stamina"&&(this.stamina=Math.max(0,this.stamina-Wx)),t.what==="heart"&&(this.hp--,this.combo=0),this.events.push({type:"nuisance",id:e.id,combo:this.combo,who:e.who}),this.message=t.line}thugKo(e,t=!1){this.actors=this.actors.filter(i=>i.id!==e.id),this.bump(),this.score+=60+Math.min(this.combo-1,9)*15,this.events.push({type:"ko",id:e.id,combo:this.combo,who:e.who}),this.message=t?"Шпану — с одного броска!":["ШМЯК! Шпана — в нокауте.","Мелочь, а приятно!","Брысь!"][this.combo%3]}friendHit(e){if(e.mad){this.message="Он и так обижен! Оставь в покое.";return}const t=Bx[e.who],i=t[this.events.length%t.length];this.score=Math.max(0,this.score-rd),this.hp=Math.max(0,this.hp-1),this.combo=0,e.mad=tc,this.events.push({type:"offend",id:e.id,combo:0,who:e.who,text:i}),this.message=`${i} −${rd} и сердце.`,this.hp||this.finish(!1)}spend(e){if(this.mode!=="play")return!1;if(this.briefing)return!0;if(this.ultActive)return this.message="Не до кулаков — идёт ульта!",!1;const t=Ru(e,e==="grab"&&this.held!==null,this.held);return this.stamina<t?(this.message="Выдохни. Руки тоже устают.",!1):(this.stamina-=t,!0)}resolve(e,t){if(this.mode!=="play"||this.briefing)return"blocked";const i=e==="grab"&&this.held!==null,s=this.held;if(i&&(this.held=null),s==="hat"){if(t.kind==="cover"&&ic(this.level,t.id,t.point)&&this.ult.phase==="none")return this.hatRest={...t.point,y:yt[this.level].covers.find(a=>a.id===t.id).max.y,flipped:!0},this.ult={phase:"intro",t:0,meter:1,hat:0},this.combo=0,this.events.push({type:"ult",id:0,combo:0,point:this.hatRest}),this.message="ДИНЬ! Шляпа на стойке…","ult";this.placeHat(),this.events.push({type:"hatBack",id:0,combo:0})}const r=typeof t.id=="number"?this.actors.find(a=>a.id===t.id):void 0;if(i&&s&&s!=="hat"&&(!r||r.kind!=="enemy")&&t.point&&this.rest(s,{x:t.point.x,y:0,z:t.point.z}),t.kind==="cover"&&typeof t.id=="string"&&this.gag(t.id,t.point))return this.combo=0,"cover";if(t.kind==="cover")return this.combo=0,this.message=i?"Бросок в укрытие. Жди, пока высунется!":"ТУК! Укрытие. Бей, когда высунется.","cover";if(!r)return this.combo=0,this.message=t.kind==="scenery"?"Только стену поцарапал.":i?"Бросок в никуда.":"Мимо! Чистый промах.","miss";if(r.kind==="dog")return this.dogHit(r),"protected";if(r.kind==="friend")return this.friendHit(r),"protected";if(r.kind==="thug")return e==="punch"||i?(this.thugKo(r,i),i?"throw":"hit"):(this.combo=0,this.message="Шпану — кулаком!","miss");if(r.kind==="hat"&&!(e==="grab"&&!i))return this.combo=0,this.message="Шляпу не бьют. Шляпу берут.","miss";if(r.kind!=="enemy")return this.actors=this.actors.filter(a=>a.id!==r.id),e==="grab"&&!i?(this.held=r.kind,this.stamina=Math.max(0,this.stamina-Math.max(0,Nt[r.kind].grab-Wr)),this.message=r.kind==="hat"?"Котелок! Ему явно где-то здесь место…":Nt[r.kind].mass>=4?`Ух, ${Nt[r.kind].name}! Тяжело, но больно.`:"В руке! Теперь бросай в задиру.","grab"):(this.score+=25,this.events.push({type:"smash",id:r.id,combo:this.combo}),this.message="ДЗЫНЬ! Минус реквизит, плюс 25.","smash");if(e==="punch"||i){const a=r.antic?An.bonus:1;i&&s==="chicken"&&(this.bump(Ct.chicken.combo),this.score+=Ct.chicken.bonus,this.events.push({type:"squeak",id:r.id,combo:this.combo,point:t.point})),i&&s==="pie"&&(r.blind=Ct.pie.blind,this.events.push({type:"blind",id:r.id,combo:this.combo,point:t.point})),i&&s==="plunger"&&(r.plunger=!0,r.deadline+=Ct.plunger.stun,this.events.push({type:"stick",id:r.id,combo:this.combo,point:t.point}));const o=i&&s?Math.max(Nt[s].damage*a,r.hp??0):pv*a;return this.hurt(r,o,i),i&&s==="pie"?this.message="Пирог в лицо! Ничего не видит, шатается.":i&&s==="plunger"?this.message="ЧПОК! Вантуз прилип к физиономии.":i&&s==="chicken"?this.message=`ПИ-И-ИСК! Комбо +${Ct.chicken.combo}!`:!i&&a>1&&(this.message="ПОДЛОВИЛ! Урон ×2."),i?"throw":"hit"}return this.combo=0,this.message="Задиру — кулаком. Предмет — хватай!","miss"}launch(e,t){if(this.mode!=="play"||!this.held)return null;const i=tv(this.nextId++,this.held,e,t);return this.held=null,this.flights.push(i),this.message="Полетел!",i}fly(e,t){const i=[];if(this.mode!=="play")return i;for(const s of[...this.flights])for(const r of iv(s,e,t)){if(i.push({flight:s,impact:r}),this.mode!=="play")return i;const a=Nt[s.kind];if(r.type==="hit"){const o=typeof r.id=="number"?this.actors.find(c=>c.id===r.id):void 0;if(o?.kind==="enemy"?this.propHit(s,o,r.point):o?.kind==="dog"?this.dogHit(o):o?.kind==="friend"?this.friendHit(o):o?.kind==="thug"?this.thugKo(o,!0):typeof r.id=="string"&&this.gag(r.id,r.point)||(this.combo=0,this.message=r.kind==="cover"?"Бросок в укрытие. Жди, пока высунется!":"Только стену задел."),this.mode!=="play")return i;if(s.kind==="melon"&&this.seeds(r.point,o?.kind==="enemy"?o.id:void 0),s.kind==="plunger"&&o?.kind==="enemy"&&o.plunger){this.flights=this.flights.filter(c=>c!==s);break}if(a.breakable){this.flights=this.flights.filter(c=>c!==s),this.events.push({type:"shatter",id:s.id,combo:this.combo,point:r.point,prop:s.kind});break}}else this.flights=this.flights.filter(o=>o!==s),this.landed(s,r.point,r.on)}return i}landed(e,t,i){if(e.kind==="hat"){if(ic(this.level,i,t)&&this.ult.phase==="none"){this.hatRest={...t,flipped:!0},this.ult={phase:"intro",t:0,meter:1,hat:0},this.combo=0,this.events.push({type:"ult",id:0,combo:0,point:t}),this.message="ДИНЬ! Шляпа на стойке — вверх дном.";return}const s=this.layout.covers.find(r=>r.id===this.layout.landing?.cover);if(s&&t.z<s.min.z){this.placeHat(),this.events.push({type:"hatBack",id:0,combo:0});return}}if(e.kind==="hydrant"){const s={id:this.nextId++,x:t.x,z:t.z,age:0,hit:[]};this.geysers.push(s),this.events.push({type:"geyser",id:s.id,combo:this.combo,point:t}),this.message="Гидрант сорвало — фонтан!",this.rest(e.kind,t);return}e.kind==="chicken"&&this.events.push({type:"squeak",id:0,combo:this.combo,point:t}),e.struck||(this.combo=0,this.message=e.kind==="hat"?"Мимо стойки. Подбери котелок и ещё раз!":`Мимо! ${Nt[e.kind].name[0].toUpperCase()+Nt[e.kind].name.slice(1)} лежит — подбери.`),this.rest(e.kind,t)}rest(e,t){const i={id:this.nextId++,kind:e,x:t.x,y:t.y,z:t.z,layer:La(t.z),age:0,deadline:1/0};this.actors.push(i),this.events.push({type:"land",id:i.id,combo:this.combo,point:t,prop:e})}dogHit(e){e.mad||(this.score=Math.max(0,this.score-150),this.hp=Math.max(0,this.hp-1),this.combo=0,e.mad=tc,this.events.push({type:"dog",id:e.id,combo:0}),this.message="Пёс — святой! −150 и сердце.",this.hp||this.finish(!1))}hurt(e,t,i=!1,s){const r=Math.min(t,e.hp??1);return e.hp=Math.max(0,(e.hp??1)-t),e.hurtAt=this.elapsed,this.events.push({type:"hurt",id:e.id,combo:this.combo,amount:r}),e.hp>0?(this.score+=20,e.deadline=Math.max(e.deadline,e.age+js+1.2),this.message=i?`Прямое попадание! −${t}`:["БАМ! Ещё разок!","Шатается!","Добавь!"][Math.floor(e.hp/10)%3],!1):(this.actors=this.actors.filter(a=>a.id!==e.id),this.bump(),this.score+=(i?180:100)+Math.min(this.combo-1,9)*25,this.defeated++,this.events.push({type:"ko",id:e.id,combo:this.combo,how:s??hv(this.defeated)}),this.message=i?"Точный бросок. Нокаут!":["Нокаут! Так держать.","Вот это размах!","Живой нокаут!"][this.combo%3],this.defeated>=this.goal&&this.finish(!0),!0)}act(e,t,i=!1){if(this.mode!=="play")return"blocked";if(!i&&!this.spend(e))return"tired";const s=this.actors.find(r=>r.id===t);return this.resolve(e,s?{kind:s.kind==="enemy"||s.kind==="dog"||s.kind==="friend"||s.kind==="thug"?s.kind:"prop",id:t}:{kind:"whiff"})}get canUlt(){return this.ult.phase==="none"}get pouring(){return this.ult.phase==="pour"}winNow(){this.mode==="play"&&(this.defeated=this.goal,this.finish(!0))}finish(e){this.won=e,this.mode="result",this.held=null,this.briefing=null,e&&(this.progress.unlocked=Math.min(Xr,Math.max(this.progress.unlocked,this.level+1)),this.score+=this.hp*100),this.ultActive&&(this.ult={...this.ult,phase:"done",t:0,meter:0}),this.progress.best=Math.max(this.progress.best,this.score),this.save({...this.progress})}}function vv(n,e){const t=Math.max(1,n.width-e.left-e.right),i=Math.max(1,n.height-e.top-e.bottom),s=t<520,r=s?0:Math.min(160,Math.max(104,t*.14)),a=Math.min(Math.max(1,t-r*2),Math.max(1,i-(s?240:0))*16/9),o=a*9/16;return{left:n.left+e.left+(t-a)/2,top:n.top+e.top+(i-o)/2,width:a,height:o,stacked:s}}function Cu(n,e){if(n.width<=0||n.height<=0||e.x<n.left||e.y<n.top||e.x>=n.left+n.width||e.y>=n.top+n.height)return null;const t=e.x-n.left,i=e.y-n.top;return{x:t,y:i,ndcX:t/n.width*2-1,ndcY:1-i/n.height*2}}function po(n,e){return{x:n.left+e.x,y:n.top+e.y}}function Pu(n,e){return po(n,{x:(e.x+1)*.5*n.width,y:(1-e.y)*.5*n.height})}const dd={lean:"gen_herald_lean.png",point:"gen_herald_point.png",mad:"gen_herald_mad.png"},yv=Object.assign({"/public/assets/gen_herald_nopaper_lean.png":()=>Mo(()=>import("./gen_herald_nopaper_lean-sWeu0_E1.js"),[],import.meta.url),"/public/assets/gen_herald_nopaper_mad.png":()=>Mo(()=>import("./gen_herald_nopaper_mad-CjappM9r.js"),[],import.meta.url),"/public/assets/gen_herald_nopaper_point.png":()=>Mo(()=>import("./gen_herald_nopaper_point-BPwhuxHF.js"),[],import.meta.url)}),Mv=n=>`./assets/${n}`,Ia=n=>n.replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]);function Sv(n,e){n.innerHTML='<canvas class="hd-canvas" aria-hidden="true"></canvas><div class="hd-semantic" role="status" aria-live="polite"></div><button id="heraldSkip" class="hd-skip primary" type="button">ПОНЯЛ ✓<small>ESC · ПРОПУСТИТЬ</small></button>';const t=n.querySelector("canvas"),i=t.getContext("2d"),s=n.querySelector(".hd-semantic"),r=n.querySelector("#heraldSkip");n.closest("#app").append(r),r.addEventListener("click",b=>{b.stopPropagation(),e()});const a=new Map,o=new Map;for(const b of Object.keys(dd)){const C=`gen_herald_nopaper_${b}.png`,L=`/public/assets/${C}`in yv,y=new Image;y.src=Mv(L?C:dd[b]),a.set(b,y),y.decode().then(()=>{const v=document.createElement("canvas");v.width=y.naturalWidth,v.height=y.naturalHeight;const P=v.getContext("2d",{willReadFrequently:!0});P&&(P.drawImage(y,0,0),o.set(b,P.getImageData(0,0,v.width,v.height)))}).catch(()=>{})}let c="lean",l=null,h={x:0,y:0,w:0,h:0},d="",u=null,f=null,g=[],_=0;const m=document.createElement("canvas");function p(b,C,L){const y=[];let v="";for(const P of C.split(/\s+/)){b.measureText(v?`${v} ${P}`:P).width>L&&v&&(y.push(v),v="");for(const F of P)b.measureText(v+F).width>L&&v&&(y.push(v),v=""),v+=F;v+=" "}return v.trim()&&y.push(v.trim()),y}function w(b,C,L,y){const v=Math.max(8,L*.045),P=L-v*2;let F=[],O=Math.min(24,L/18);for(;O>=6;O-=.25){let V=v;F=[];for(const Y of C){const W=Y.title?O*1.25:O;b.font=`900 ${W}px Georgia, serif`;for(const ee of p(b,Y.text,P))V+=W*1.16,F.push({text:ee,size:W,y:V,title:Y.title});V+=O*.3}if(V<=y-v)break}return{rows:F,font:O,margin:v}}function E(b,C){if(n.hidden=!b,r.hidden=!b,u=b,!b){d="",f=null,l=null;return}n.dataset.phase=b.phase,n.dataset.paused=String(C);const L=n.getBoundingClientRect(),y=L.width,v=L.height,P=Math.min(devicePixelRatio||1,2),F=Math.round(y*P),O=Math.round(v*P);(t.width!==F||t.height!==O)&&(t.width=F,t.height=O),i.setTransform(P,0,0,P,0,0),i.clearRect(0,0,y,v),c=b.phase==="mad"?"mad":"lean";const V=!b.reduced&&b.phase==="enter"?(1-Math.min(1,b.t/.7))*v:0,Y=!b.reduced&&b.phase==="leave"?Math.min(1,b.t/1.1)*v:0,W=!b.reduced&&b.phase==="show"?Math.sin(b.t*2)*v*.006:0,ee=v*.96;h={x:y*.012,y:v*.02+V+Y+W,w:ee,h:ee};const G=a.get(c);n.dataset.artGate=G.src.includes("nopaper")?"source-reviewed-runtime-pending-point-rejected":"OPEN-baked-sheet-fallback",G.complete&&G.naturalWidth&&i.drawImage(G,h.x,h.y,h.w,h.h);const re=h.x+h.w*.74;l=b.flyer&&["show","mad","enter"].includes(b.phase)?{x:re,y:h.y+h.h*.04,w:y-re-y*.025,h:h.h*.77}:null;const de=`${b.index}|${b.phase}|${y}|${v}`,_e=b.phase==="mad"?b.line:b.phase==="leave"?av:"";if(de!==d&&(d=de,s.innerHTML=b.flyer?`<h3>${Ia(b.flyer.title)}</h3>${b.flyer.lines.map(ce=>`<p>${Ia(ce)}</p>`).join("")}<small>${b.index+1} / ${b.flyers.length} · ударь по листовке →</small><p>${Ia(_e)}</p>`:Ia(_e)),l&&b.flyer){const ce=m.getContext("2d");m.width=Math.ceil(l.w*P),m.height=Math.ceil(l.h*P),ce.scale(P,P),ce.fillStyle="#fff8d6",ce.fillRect(0,0,l.w,l.h),ce.strokeStyle="#301909",ce.lineWidth=3,ce.strokeRect(2,2,l.w-4,l.h-4),ce.strokeStyle="#b38b38",ce.lineWidth=1,ce.strokeRect(5,5,l.w-10,l.h-10);const Fe=w(ce,[{text:b.flyer.title,title:!0},...b.flyer.lines.map(We=>({text:We,title:!1})),{text:`${b.index+1} / ${b.flyers.length} · ударь по листовке →`,title:!1}],l.w,l.h);g=Fe.rows,_=Fe.font,ce.textAlign="center",ce.textBaseline="alphabetic";for(const We of g)ce.fillStyle=We.title?"#86151c":"#211207",ce.font=`900 ${We.size}px Georgia, serif`,ce.fillText(We.text,l.w/2,We.y);i.fillStyle="#160c0766",i.fillRect(l.x+4,l.y+4,l.w,l.h),i.drawImage(m,l.x,l.y,l.w,l.h)}if(_e){const ce={x:y*.02,y:v*.025,w:y*.31,h:v*.23};i.fillStyle="#fff8d6",i.fillRect(ce.x,ce.y,ce.w,ce.h);const Fe=w(i,[{text:_e,title:!0}],ce.w,ce.h);i.textAlign="center",i.fillStyle="#86151c";for(const We of Fe.rows)i.font=`900 ${We.size}px Georgia, serif`,i.fillText(We.text,ce.x+ce.w/2,ce.y+We.y)}if(f){C||(f.age=b.phase==="torn"?b.t:f.age+.016);const ce=f.age/.85,Fe=f.box;if(ce>=1||b.reduced)f=null;else for(const We of[-1,1])i.save(),i.globalAlpha=1-ce,i.translate(Fe.x+Fe.w/2+We*ce*y*.5,Fe.y+Fe.h/2-ce*v*.25),i.rotate(We*ce),i.beginPath(),i.rect(We<0?-Fe.w/2:0,-Fe.h/2,Fe.w/2,Fe.h),i.clip(),i.drawImage(f.image,-Fe.w/2,-Fe.h/2,Fe.w,Fe.h),i.restore()}n.dataset.geometry=JSON.stringify({paper:l,guy:h,font:_,rows:g,pose:c,width:y,height:v,sheetVisible:!!l})}function S(b,C){let L="none";const y=Cu(n.getBoundingClientRect(),{x:b,y:C});if(!n.hidden&&y)if(l&&y.x>=l.x&&y.x<=l.x+l.w&&y.y>=l.y&&y.y<=l.y+l.h)L="flyer";else{const v=o.get(c),P=v&&Math.floor((y.x-h.x)/h.w*v.width),F=v&&Math.floor((y.y-h.y)/h.h*v.height);v&&P!==void 0&&F!==void 0&&P>=0&&F>=0&&P<v.width&&F<v.height&&v.data[(F*v.width+P)*4+3]>60&&(L="herald")}return n.dataset.hit=L,L}function R(b){if(!l||!b||u?.reduced)return;const C=document.createElement("canvas");C.width=m.width,C.height=m.height,C.getContext("2d").drawImage(m,0,0),f={image:C,box:{...l},age:0},l=null}return{sync:E,hit:S,tear:R}}function bv({left:n=!0}={}){const e=new Vt;function t(a,o,c,l=!1){const h=l?new Tt({color:c,fog:!1}):new fi({color:c,roughness:.9}),d=new Ae(new qn(...a),h);return d.position.set(...o),d.castShadow=!l,d.receiveShadow=!l,e.add(d),d}function i(a,o){t([.16,6,.16],[a*4.9,3,o],"#1f1a2a"),t([1.6,.15,.15],[a*4.25,6,o],"#1f1a2a");const c=t([.65,.14,.45],[a*3.5,5.85,o],"#fff1b2",!0);o===-5&&(c.userData.bell=a<0?0:1);const l=new Cc("#ffffff",160,12,2);l.position.set(a*3.3,5.2,o),e.add(l)}t([70,.25,85],[0,-.2,-20],"#4a4552");for(let a=-36;a<-5;a+=4)t([.14,.02,2],[0,-.055,a],"#f2b45c");for(let a=-3.8;a<=3.8;a+=1.25)t([.7,.025,2.5],[a,-.05,-3.3],"#b9a9a8");for(const a of[-1,1]){if(a<0&&!n){t([.22,.36,60],[a*4.45,.05,-19],"#a99a92");for(const o of[-5,-20])i(a,o);continue}t([7,.3,60],[a*8,-.04,-19],"#6c5f6c"),t([.22,.36,60],[a*4.45,.05,-19],"#a99a92");for(let o=0;o<4;o++){const c=-7-o*8,l=6+(o+(a>0?1:0))%3*2.5;t([5,l,6.5],[a*8,l/2,c],o%2?"#5a4560":"#3e4a66"),t([5.35,.25,6.8],[a*8,l,c],"#221c30"),t([1.3,.22,5.5],[a*5.1,3,c],o%2?"#e0574f":"#2f9c8f");for(let h=-2;h<=2;h+=1)t([1.3,.24,.4],[a*5.1,3.02,c+h],"#f1e5bf");t([.15,1.3,2],[a*5.44,1.5,c],o%3?"#ffd27a":"#ff9f6a",!0),t([.15,1.3,2],[a*5.44,l-1.5,c],(o+a)%2?"#ffe3a1":"#3a3550",(o+a)%2!==0),o%2===0&&t([.6,1.2,.6],[a*7,l+.6,c+1.5],"#221c30")}for(const o of[-5,-20])i(a,o)}for(let a=0;a<9;a++){const o=7+a*7%5*2.2;t([3.2,o,2],[-14+a*3.5,o/2,-40],"#2a2140")}const s=["#ffd36e","#ff6fa8","#8ff0d0","#ffd36e","#ff9a5c"];for(const a of[-4.5,-9]){const o=new Ae(new Jt(.012,.012,10,4),new Tt({color:"#141018"}));o.rotation.z=Math.PI/2,o.position.set(0,5.6,a),e.add(o);for(let c=-4.5,l=0;c<=4.5;c+=.75,l++){const h=new Ae(new hs(.08,8,6),new Tt({color:s[l%s.length],fog:!1}));h.position.set(c,5.6-Math.cos(c/4.5*Math.PI/2)*.45,a),h.userData.blink=l,e.add(h)}}t([2.3,.18,4],[-6,3.7,-2],"#3a2f48");for(const a of[-3.7,-.3])t([.12,3.6,.12],[-6.8,1.8,a],"#3a2f48");t([.12,2.8,3.5],[-7,1.8,-2],"#7fd4c8",!0),t([.8,.18,2.8],[-6.2,.85,-2],"#e5af79"),t([.7,1.1,.7],[5.3,.55,1],"#2d4a46"),t([2.3,1.8,4],[6.6,1.2,-13],"#c9894f"),t([2.3,1.1,1.5],[6.6,2,-10.9],"#2e3346");const r=(a,o,c,l,h=0)=>{const d=document.createElement("canvas");d.width=512,d.height=128;const u=d.getContext("2d");u&&(u.fillStyle="#17121f",u.fillRect(0,0,512,128),u.font="900 64px Arial",u.textAlign="center",u.shadowColor=c,u.shadowBlur=22,u.fillStyle=c,u.fillText(a,256,86),u.fillStyle="#fff6f0",u.shadowBlur=0,u.fillText(a,256,84),u.strokeStyle=c,u.lineWidth=8,u.strokeRect(8,8,496,112));const f=new Ui(d);f.colorSpace=gt;const g=new Ae(new qt(o,o/4),new Tt({map:f,fog:!1}));g.position.set(...l),g.rotation.y=h,g.userData.neon=!0,e.add(g)};return r("ПЕРЕУЛОК",4.3,"#ff4fa3",[-5.9,4.55,-4]),r("ЧЕБУРЕКИ",3.2,"#5ef0c8",[5.42,4.2,-7],-Math.PI/2),n&&r("ШУМ",2.2,"#ffcf4a",[-5.42,4.8,-12.5],Math.PI/2),e}function Ev(n){const e=new Vt,t=h=>new fi({color:h,roughness:.85});function i(h,d,u){const f=new Ae(new qn(...h),t(u));return f.position.set(...d),f.castShadow=f.receiveShadow=!0,e.add(f),f}const s=document.createElement("canvas");s.width=s.height=128;const r=s.getContext("2d");r&&(r.fillStyle="#d9d4c8",r.fillRect(0,0,128,128),r.fillStyle="#3b3733",r.fillRect(0,0,64,64),r.fillRect(64,64,64,64));const a=new Ui(s);a.wrapS=a.wrapT=Ka,a.repeat.set(14,11),a.colorSpace=gt,a.anisotropy=4;const o=new Ae(new qt(28,22),new fi({map:a,roughness:.6}));o.rotation.x=-Math.PI/2,o.position.set(0,0,1.6),o.receiveShadow=!0,e.add(o);const c=new Ae(new qt(21,21),new Tt({map:n,fog:!1}));c.position.set(0,21/2-4.6,-9.4),e.add(c);for(const h of[-1,1]){i([.4,12,18],[h*10.4,6,0],h<0?"#5d554c":"#4d463f");for(let d=-8;d<8;d+=2.2)i([.06,2.2,.14],[h*10.18,1.1,d],"#2f2a26")}for(let h=-8;h<=6;h+=3.5)i([22,.45,.5],[0,8.2,h],"#2a2622");i([22,.2,18],[0,8.6,-.5],"#1b1917");const l=(h,d,u)=>{i([.12,u,.12],[h,u/2,d],"#2f2a26");const f=new Ae(new Jt(.32,.3,.14,18),t("#7a3b2f"));f.position.set(h,u,d),f.castShadow=f.receiveShadow=!0,e.add(f);const g=new Ae(new Tc(.24,.025,6,18),t("#9a9a9a"));g.rotation.x=Math.PI/2,g.position.set(h,u*.35,d),e.add(g)};for(const h of[-2.3,2.7])l(h,-1.55,.95);l(.95,3.45,.7),[-3,2.5].forEach((h,d)=>{const u=new Vt;u.position.set(h,8.4,-3.2),u.userData.lamp=d,e.add(u);const f=new Ae(new Jt(.015,.015,2.6,4),new Tt({color:"#111111"}));f.position.set(0,-1.3,0),u.add(f);const g=new Ae(new wc(.55,.45,18,1,!0),new Tt({color:"#f4efe0",side:Gt}));g.position.set(0,-2.7,0),u.add(g);const _=new Cc("#ffffff",55,11,1.6);_.position.set(0,-3.2,0),_.userData.base=55,u.add(_)});for(const h of[-1,1]){const d=new Vt;d.position.set(h<0?3.55:5.35,0,-7.2),e.add(d);const u=new Ae(new qn(.85,1.25,.06),t("#8e6b4a"));u.position.set(-h*.44,1.2,0),u.castShadow=!0,d.add(u),d.userData.swing=h}return e}const wv=[[0,76,1],[1,79,2],[3,76,1],[4,72,2],[6,76,1],[7,79,1],[8,81,2],[10,79,1],[11,76,2],[13,72,1],[14,74,2],[16,73,1],[17,76,2],[19,79,1],[20,81,2],[22,79,1],[23,76,1],[24,73,2],[26,76,1],[27,69,3],[30,71,2],[32,79,1],[33,77,1],[34,76,1],[35,74,1],[36,72,1],[37,71,1],[38,74,2],[40,79,2],[42,77,2],[44,76,2],[46,74,2]],Tv=[{bass:[48,43],chord:[64,67,72]},{bass:[45,40],chord:[61,64,67]},{bass:[43,38],chord:[59,65,67]}],ud={step:48,notes:[36,48,60,64,67,72]},Ua=[{key:0,step:.095,lift:0},{key:5,step:.09,lift:12},{key:-3,step:.1,lift:0},{key:2,step:.088,lift:12}];function Av(n=0){const e=Ua[(n%Ua.length+Ua.length)%Ua.length],t=[],i=s=>s*e.step+(s%2?e.step*.18:0);for(const[s,r,a]of wv)t.push({t:i(s),midi:r+e.key+(s>=32?0:e.lift),dur:a*e.step*1.1,vel:s%4===0?1:.8});Tv.forEach((s,r)=>{const a=r*16;t.push({t:i(a),midi:s.bass[0]+e.key,dur:e.step*3.5,vel:.95},{t:i(a+8),midi:s.bass[1]+e.key,dur:e.step*3.5,vel:.9});for(const o of[a+4,a+12])for(const c of s.chord)t.push({t:i(o),midi:c+e.key-12,dur:e.step*2,vel:.6})});for(const s of ud.notes)t.push({t:i(ud.step),midi:s+e.key,dur:.7,vel:.9});return t.sort((s,r)=>s.t-r.t)}const Du=(n,e,t)=>.2126*n+.7152*e+.0722*t;function rc(n){const e=Du(n.r,n.g,n.b);return n.setRGB(e,e,e)}function Lu(n){const e=n.getContext("2d",{willReadFrequently:!0});if(!e)return;const t=e.getImageData(0,0,n.width,n.height),i=t.data;for(let s=0;s<i.length;s+=4){const r=Math.round(Du(i[s],i[s+1],i[s+2]));i[s]=i[s+1]=i[s+2]=r}e.putImageData(t,0,0)}const fd=new WeakSet;function Rv(n){return n.traverse(e=>{const t=e.material;if(t)for(const i of Array.isArray(t)?t:[t]){if(fd.has(i))continue;fd.add(i),i.color&&rc(i.color),i.emissive&&rc(i.emissive);const s=i.map?.image;typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement&&(Lu(s),i.map.needsUpdate=!0),i.userData.world=!0}}),n}const no={street:{sky:[[0,"#4a4a4a"],[.5,"#9c9c9c"],[.8,"#d4d4d4"],[1,"#ececec"]],fog:"#a8a8a8",near:16,far:50,hemi:["#ececec","#4e4e4e",1.8],sun:["#f6f6f6",2.6],sunAt:[-7,13,10]},bar:{sky:[[0,"#0b0b0b"],[.6,"#1e1e1e"],[1,"#3a3a3a"]],fog:"#1a1a1a",near:20,far:48,hemi:["#dcdcdc","#2a2a2a",1.5],sun:["#ffffff",2.3],sunAt:[-4,9,9]}},Nc={base:"#2c55c9",shine:"#6d93ee",dark:"#1a3486"};function wi(n,e){const t=Math.max(34,Math.min(78,Math.min(n*.095,e*.078)));return{r:t,hose:t*1.02,ink:Math.max(3,t*.09),rim:Math.max(2,t*.05)}}const rl=1.45;function pd(n,e){return n.x>=e/2?1:-1}function Fc(n,e,t,i,s=0){const{r,hose:a}=wi(e,t),o=Math.max(r*2,e*.12),c=n>0?e-o:o;let l=t-r*2.3;i&&i.right>c-r*rl&&i.left<c+r*rl&&(l=Math.min(l,i.top-r*rl-6)),l=Math.max(l,t*.45)+s;const d={x:Math.min(e-a,Math.max(a,c-n*r*1.5)),y:t+a*.7},u={x:c,y:l},f={x:c+n*r*.55,y:(d.y+l)/2+r*.2};return{side:n,shoulder:d,ctrl:f,glove:u,r,w0:a,w1:a*.74,open:!1,squash:0}}const al=(n,e,t)=>({x:n.x+(e.x-n.x)*t,y:n.y+(e.y-n.y)*t}),Cv=n=>{const t=n-1;return 1+(1.9+1)*t**3+1.9*t**2};function ol(n,e,t,i,s,r,a={}){const o=Fc(n,e,t,a.avoid),c=a.depth??1,l=!!a.throwing;let h,d=0,u=0,f=0,g=!1;if(s<.08){const L=Math.sin(s/.08*Math.PI/2)*(l?1.8:1);h={x:o.glove.x+n*o.r*.25*L,y:o.glove.y+o.r*.45*L},u=.1*L,f=.08*L}else if(s<r.arrive){const L=(s-.08)/(r.arrive-.08);d=Cv(L),h=al(o.glove,i,d),u=l?.55*Math.cos(L*Math.PI):.22*Math.sin(L*Math.PI)+.05,f=-.12*Math.sin(L*Math.PI),g=!!a.grab&&!l}else if(s<r.release){const L=(s-r.arrive)/(r.release-r.arrive);d=1,h={...i},u=.07*Math.sin(L*Math.PI*5)*(1-L)+(l?-.3*(1-L):0),f=.22*Math.max(0,1-L*3),g=!!a.grab||l}else{const L=Math.min(1,(s-r.release)/(1-r.release)),y=(1-L)**2*Math.cos(L*Math.PI*2.5),v=y<0?Math.max(y,-.25*o.r/(Math.hypot(i.x-o.glove.x,i.y-o.glove.y)||1)):y;d=Math.max(0,v),h=al(o.glove,i,v),u=-.18*(1-L)*Math.sin(L*Math.PI*3+.5),g=l&&L<.3}const _=1+(Math.min(1.15,Math.max(.6,c))-1)*Math.min(1,Math.max(0,d)),m=o.r*_,p=o.shoulder,w=h.x-p.x,E=h.y-p.y,S=Math.hypot(w,E)||1,R=al(p,h,.45),b={x:-E/S*n,y:w/S*n},C=s<.08?{x:o.ctrl.x+b.x*u*S,y:o.ctrl.y+b.y*u*S}:{x:R.x+b.x*u*S,y:R.y+b.y*u*S};return{side:n,shoulder:p,ctrl:C,glove:h,r:m,w0:o.w0,w1:o.w1*Math.max(.55,_),open:g,squash:f}}const Na="#151715",md="rgba(255,248,226,.92)",Pv=Nc.base,Dv=Nc.shine,Lv=Nc.dark,gd="#fdfaf0",Iv="#ddd6c4";function Uv(n,e,t,i){const s=1-i;return{x:s*s*n.x+2*s*i*e.x+i*i*t.x,y:s*s*n.y+2*s*i*e.y+i*i*t.y}}function Iu(n,e,t,i){const s=1-i,r=2*s*(e.x-n.x)+2*i*(t.x-e.x),a=2*s*(e.y-n.y)+2*i*(t.y-e.y),o=Math.hypot(r,a)||1;return{x:r/o,y:a/o}}function ll(n,e,t,i,s,r,a){const c=[],l=[];for(let h=0;h<=24;h++){const d=h/24,u=Uv(e,t,i,d),f=Iu(e,t,i,d),g=(s+(r-s)*d)/2,_=-f.y,m=f.x,[p,w]=a??[-1,1];c.push({x:u.x+_*g*w,y:u.y+m*g*w}),l.push({x:u.x+_*g*p,y:u.y+m*g*p})}n.beginPath(),c.forEach((h,d)=>d?n.lineTo(h.x,h.y):n.moveTo(h.x,h.y));for(let h=l.length-1;h>=0;h--)n.lineTo(l[h].x,l[h].y);n.closePath()}function Nv(n,e){const t=(s,r,a,o,c=0)=>({path:l=>{l.beginPath(),l.ellipse(s,r,a,o,c,0,Math.PI*2)}}),i=(s,r,a,o=.35)=>{const c=Math.sin(s),l=-Math.cos(s);return{line:a,path:h=>{h.beginPath(),h.moveTo(c*o,l*o),h.lineTo(c*(o+r),l*(o+r))}}};return n?[t(0,.1,.82,.78),i(-.5,.72,.38),i(-.17,.86,.38),i(.17,.86,.38),i(.5,.72,.38),i(e*1.35,.55,.36,.45)]:[t(0,.05,.88,.84),t(0,-.5,.8,.46),t(e*.8,.05,.3,.5,e*.35)]}const Fv=[{path:n=>{n.beginPath(),n.moveTo(-.5,.55),n.lineTo(.5,.55),n.lineTo(.74,1.02),n.ellipse(0,1.02,.74,.3,0,0,Math.PI),n.lineTo(-.5,.55),n.closePath()}}];function Sr(n,e,t,i,s){n.strokeStyle=i,n.fillStyle=i;for(const r of e){if(r.path(n),r.line){n.lineWidth=r.line+t*2,n.stroke();continue}t>0&&(n.lineWidth=t*2,n.stroke()),s&&n.fill()}}function kv(n,e,t,i){const{shoulder:s,ctrl:r,glove:a,r:o,side:c}=e,l=Iu(s,r,a,1),h={x:a.x+l.x*-o*.95,y:a.y+l.y*-o*.95},d=Math.atan2(l.y,l.x)+Math.PI/2,u=-c;n.save(),n.lineJoin="round",n.lineCap="round",ll(n,s,r,h,e.w0,e.w1),n.strokeStyle=md,n.lineWidth=(t+i)*2,n.stroke(),n.strokeStyle=Na,n.lineWidth=t*2,n.stroke(),n.fillStyle=Pv,n.fill(),ll(n,s,r,h,e.w0,e.w1,[c>0?.35:-1,c>0?1:-.35]),n.fillStyle=Lv,n.fill(),ll(n,s,r,h,e.w0,e.w1,c>0?[-.62,-.3]:[.3,.62]),n.fillStyle=Dv,n.fill(),n.translate(a.x,a.y),n.rotate(d),n.scale(o*(1+e.squash*.6),o*(1-e.squash));const f=1/o,g=Nv(e.open,u),_=Fv;if(Sr(n,[...g,..._],(t+i)*f,md,!1),Sr(n,g,t*f,Na,!1),Sr(n,g,0,gd,!0),n.save(),g[0].path(n),n.clip(),n.fillStyle=Iv,n.beginPath(),n.ellipse(-u*.45,.55,.8,.55,0,0,Math.PI*2),n.fill(),n.restore(),n.strokeStyle=Na,n.lineWidth=t*f*.55,n.lineCap="round",e.open)n.beginPath(),n.arc(0,.2,.38,Math.PI*1.15,Math.PI*1.85),n.stroke();else{for(const m of[-.32,0,.32])n.beginPath(),n.moveTo(m*1.05,-.94+Math.abs(m)*.2),n.quadraticCurveTo(m*.9,-.78,m*.8,-.62),n.stroke();n.lineWidth=t*f*.8;for(const m of[-.27,0,.27])n.beginPath(),n.moveTo(m,-.22),n.lineTo(m*1.08,.3),n.stroke()}Sr(n,_,t*f,Na,!1),Sr(n,_,0,gd,!0),n.beginPath(),n.moveTo(-.56,.7),n.quadraticCurveTo(0,.82,.56,.7),n.stroke(),n.restore()}function Uu(n,e,t=18){const i=e.x-n.x,s=e.y-n.y,r=Math.hypot(i,s);if(r<1e-4)return[{...e}];const a=Math.max(1,Math.ceil(r/Math.max(1,t))),o=[];for(let c=1;c<=a;c++){const l=c/a;o.push({x:n.x+i*l,y:n.y+s*l})}return o}class zv{constructor(e=.35){this.cooldownSeconds=e}cooldownSeconds;lastHitTimes=new Map;canHit(e,t){const i=this.lastHitTimes.get(e);return i===void 0?!0:t-i>=this.cooldownSeconds}recordHit(e,t){this.lastHitTimes.set(e,t)}clear(){this.lastHitTimes.clear()}}const Ov=.35;class Bv{activeTouchId=null;lastPos=null;cooldowns;constructor(e=Ov){this.cooldowns=new zv(e)}get isTouching(){return this.activeTouchId!==null}get touchId(){return this.activeTouchId}begin(e,t){this.activeTouchId=e,this.lastPos={...t}}updatePos(e){this.lastPos={...e}}getLastPos(){return this.lastPos?{...this.lastPos}:null}evaluateContact(e,t,i,s){if(e.kind==="enemy"||e.kind==="thug"){const r=e.id??"enemy";return t!==null?this.cooldowns.canHit(r,i)?(this.cooldowns.recordHit(r,i),{action:"sweep_throw",entity:e,heldProp:t,point:s}):{action:"cooldown",entity:e,heldProp:t,point:s}:this.cooldowns.canHit(r,i)?(this.cooldowns.recordHit(r,i),{action:"punch",entity:e,heldProp:null,point:s}):{action:"cooldown",entity:e,heldProp:null,point:s}}if(e.kind==="prop"){const r=e.id??"prop";return t===null?this.cooldowns.canHit(r,i)?(this.cooldowns.recordHit(r,i),{action:"grab",entity:e,heldProp:null,point:s}):{action:"cooldown",entity:e,heldProp:null,point:s}:this.cooldowns.canHit(r,i)?(this.cooldowns.recordHit(r,i),{action:"chain_swap",entity:e,heldProp:t,point:s}):{action:"cooldown",entity:e,heldProp:t,point:s}}if(e.kind==="dog"||e.kind==="friend"){const r=e.id??e.kind;return this.cooldowns.canHit(r,i)?(this.cooldowns.recordHit(r,i),{action:"scold",entity:e,heldProp:t,point:s}):{action:"cooldown",entity:e,heldProp:t,point:s}}if(e.kind==="cover"){const r=e.id??"cover";return this.cooldowns.canHit(r,i)?(this.cooldowns.recordHit(r,i),{action:"cover",entity:e,heldProp:t,point:s}):{action:"cooldown",entity:e,heldProp:t,point:s}}return e.kind==="flyer"?{action:"tear_flyer",entity:e,heldProp:t,point:s}:e.kind==="herald"?this.cooldowns.canHit("herald",i)?(this.cooldowns.recordHit("herald",i),{action:"offend_herald",entity:e,heldProp:t,point:s}):{action:"cooldown",entity:e,heldProp:t,point:s}:{action:"none",entity:e,heldProp:t,point:s}}evaluateSegment(e,t,i,s,r,a=16,o){const c=Uu(e,t,a),l=[];for(const h of c){const d=s(),u=i(h),f=this.evaluateContact(u,d,r,h);f.action!=="none"&&f.action!=="cooldown"&&(l.push(f),o?.(f))}return this.lastPos={...t},l}evaluateRelease(e,t,i,s,r=160){if(t===null)return this.reset(),{action:"none",point:e};if(i&&(i.kind==="enemy"||i.kind==="thug"))return this.reset(),{action:"release_throw",entity:i,heldProp:t,point:e};if(s&&s.length>0){const a=Hv(e,{x:0,y:0},s,r);if(a)return this.reset(),{action:"release_throw",heldProp:t,point:e,aimEnemy:a}}return this.reset(),{action:"none",heldProp:t,point:e}}reset(){this.activeTouchId=null,this.lastPos=null}resetAll(){this.reset(),this.cooldowns.clear()}}function Hv(n,e,t,i=160){let s=null,r=i;const a=Math.hypot(e.x,e.y)||1,o=e.x/a,c=e.y/a;for(const l of t){if(l.isOccluded)continue;const h=l.screenPos.x-n.x,d=l.screenPos.y-n.y,u=Math.hypot(h,d);if(u>i)continue;const f=h*o+d*c,g=Math.abs(h*-c+d*o);if(f<-40)continue;const _=Math.hypot(e.x,e.y)===0?u:f>=0?Math.hypot(g,f*.3):u;_<r&&(r=_,s=l.entity)}return s}const Nu="long-arms.settings.v1",Fu=matchMedia("(prefers-reduced-motion: reduce)");let bn=!1,qr;try{const n=JSON.parse(localStorage.getItem(Nu)??"null");typeof n=="object"&&n!==null&&("muted"in n&&typeof n.muted=="boolean"&&(bn=n.muted),"reducedMotion"in n&&typeof n.reducedMotion=="boolean"&&(qr=n.reducedMotion))}catch{bn=!1,qr=void 0}const Zs=()=>qr??Fu.matches;function kc(){document.documentElement.dataset.reducedMotion=String(Zs())}kc();Fu.addEventListener("change",kc);let _n,cl=!0;function Zr(){if(!(bn||!cl))try{_n??=new AudioContext,_n.state==="suspended"&&_n.resume().catch(()=>{cl=!1})}catch{cl=!1}}const Gv={ui:[["sine",520,300,.1,.05,0]],whoosh:[["sine",180,420,.16,.02,.9]],hit:[["triangle",150,48,.16,.09,.5],["square",420,160,.05,.025,0]],throw:[["triangle",300,70,.18,.08,.4]],ko:[["sine",660,1320,.22,.035,0],["sine",990,1980,.22,.02,0]],grab:[["sine",230,380,.1,.06,0]],cover:[["square",110,60,.09,.05,.6]],miss:[["sine",260,90,.2,.03,.5]],dog:[["sine",880,520,.32,.05,0],["sine",700,400,.3,.03,0]],attack:[["sawtooth",90,40,.25,.07,.7]],windup:[["sine",300,520,.18,.025,0]],ding:[["sine",1568,1560,1.2,.08,0],["sine",3136,3120,.7,.03,0],["triangle",784,780,.9,.03,0]],slide:[["sine",1400,260,.9,.06,0]],yuck:[["sawtooth",210,120,.28,.035,.3]],toss:[["sine",260,620,.14,.03,.8]],thud:[["triangle",120,55,.14,.07,.5]],bell:[["sine",988,980,1.6,.07,0],["sine",1976,1960,.9,.025,0],["triangle",494,490,1.4,.035,0]],cuckoo:[["sine",784,780,.2,.06,0,0],["sine",622,620,.35,.06,0,.24],["sine",784,780,.2,.05,0,.75],["sine",622,620,.35,.05,0,.99]],buzz:[["sawtooth",110,108,.45,.03,.5],["square",220,218,.3,.012,0,.1]],flop:[["sine",320,110,.35,.04,.6]],shatter:[["square",2400,1800,.18,.02,.9],["triangle",1600,900,.25,.025,.6],["sine",3200,2600,.12,.015,0]],huff:[["sawtooth",330,180,.12,.04,.4],["sawtooth",300,150,.2,.035,.5,.14]],squeak:[["square",1300,1900,.09,.035,0],["square",1900,1100,.16,.03,0,.09]],harp:[0,4,7,12,16,19,24,28].map((n,e)=>["triangle",523*2**(n/12),523*2**(n/12)*.995,.9,.035,0,e*.07]),whistle:[["sine",2300,500,1.1,.045,0]],crash:[["sawtooth",90,35,.6,.09,.8],["square",1200,300,.4,.03,.9,.03],["triangle",60,40,.7,.08,.3]],strike:[["square",900,300,.12,.04,.8],["triangle",200,60,.4,.06,.7,.05],["square",1400,500,.2,.02,.9,.12]],splat:[["sine",240,60,.25,.07,.7]],zing:[["sawtooth",400,1400,.12,.03,.2]],steal:[["sine",600,1200,.08,.04,0],["sine",1200,600,.12,.03,0,.08]],pop:[["sine",220,660,.09,.05,.2]],geyser:[["sine",300,900,.9,.04,.95]],iris:[["triangle",880,440,.25,.03,0],["triangle",660,330,.3,.03,0,.12]],boing:[["sine",140,420,.35,.06,0]]};let Fa;function Ee(n){if(bn||document.hidden||!_n||_n.state!=="running")return;const e=_n;if(e.currentTime,!Fa){Fa=e.createBuffer(1,e.sampleRate*.4,e.sampleRate);const t=Fa.getChannelData(0);for(let i=0;i<t.length;i++)t[i]=Math.random()*2-1}for(const[t,i,s,r,a,o,c]of Gv[n]){const l=e.currentTime+(c??0),h=e.createGain();h.connect(e.destination),h.gain.setValueAtTime(1e-4,l),h.gain.exponentialRampToValueAtTime(a,l+.008),h.gain.exponentialRampToValueAtTime(1e-4,l+r);const d=e.createOscillator();d.type=t,d.frequency.setValueAtTime(i,l),d.frequency.exponentialRampToValueAtTime(Math.max(30,s),l+r*.8);const u=e.createGain();if(u.gain.value=1-o*.7,d.connect(u),u.connect(h),d.start(l),d.stop(l+r+.02),d.onended=()=>{d.disconnect(),u.disconnect(),h.disconnect()},o>0){const f=e.createBufferSource(),g=e.createBiquadFilter(),_=e.createGain();f.buffer=Fa,g.type="bandpass",g.frequency.setValueAtTime(i*4,l),g.frequency.exponentialRampToValueAtTime(Math.max(60,s*4),l+r),_.gain.value=o,f.connect(g),g.connect(_),_.connect(h),f.start(l),f.stop(l+r),f.onended=()=>{f.disconnect(),g.disconnect(),_.disconnect()}}}}let br;function Vv(n){if(!(n&&!bn&&!document.hidden&&_n?.state==="running")){if(br){const d=br;br=void 0,d.gain.gain.setTargetAtTime(0,_n.currentTime,.05),setTimeout(()=>{d.src.stop(),d.lfo.stop(),d.src.disconnect(),d.gain.disconnect()},300)}return}if(br||!_n)return;const t=_n,i=t.sampleRate*2,s=t.createBuffer(1,i,t.sampleRate),r=s.getChannelData(0);for(let d=0;d<i;d++)r[d]=Math.random()*2-1;const a=t.createBufferSource();a.buffer=s,a.loop=!0;const o=t.createBiquadFilter();o.type="bandpass",o.frequency.value=2200,o.Q.value=1.4;const c=t.createGain();c.gain.value=0,c.gain.setTargetAtTime(.05,t.currentTime,.08);const l=t.createOscillator(),h=t.createGain();l.frequency.value=9,h.gain.value=900,l.connect(h),h.connect(o.frequency),a.connect(o),o.connect(c),c.connect(t.destination),a.start(),l.start(),br={src:a,gain:c,lfo:l}}function _d(){try{localStorage.setItem(Nu,JSON.stringify({muted:bn,reducedMotion:qr}))}catch{document.querySelector("#settings-note")?.replaceChildren("Настройки действуют до закрытия вкладки.")}}function Wv(){return`<div class="settings" aria-label="Настройки"><button id="mute" aria-pressed="${bn}">Без звука: ${bn?"да":"нет"}</button><button id="motion" aria-pressed="${Zs()}">Меньше движения: ${Zs()?"да":"нет"}</button><span id="settings-note" role="status"></span></div>`}function Xv(n){document.getElementById("mute")?.addEventListener("click",()=>{bn=!bn,_d(),bn||(Zr(),Ee("ui")),n()}),document.getElementById("motion")?.addEventListener("click",()=>{qr=!Zs(),kc(),_d(),n()})}let hl;function qv(n){if(bn||document.hidden||!_n||_n.state!=="running")return!1;const e=_n,t=e.currentTime+.03;if(hl){const r=hl;r.gain.setTargetAtTime(0,e.currentTime,.03),setTimeout(()=>r.disconnect(),400)}const i=e.createGain();i.gain.value=.9;const s=e.createBiquadFilter();s.type="lowpass",s.frequency.value=3200,s.Q.value=.4,i.connect(s),s.connect(e.destination),hl=i;for(const r of n){const a=440*2**((r.midi-69)/12),o=t+r.t,c=o+r.dur+.25,l=e.createGain();l.connect(i),l.gain.setValueAtTime(1e-4,o),l.gain.exponentialRampToValueAtTime(.045*r.vel,o+.005),l.gain.exponentialRampToValueAtTime(.012*r.vel,o+Math.min(.18,r.dur)),l.gain.exponentialRampToValueAtTime(1e-4,c);for(const[h,d,u]of[["triangle",-9,1],["triangle",9,1],["square",3,.12]]){const f=e.createOscillator(),g=e.createGain();f.type=h,f.frequency.value=a,f.detune.value=d,g.gain.value=u,f.connect(g),g.connect(l),f.start(o),f.stop(c+.02),f.onended=()=>{f.disconnect(),g.disconnect()}}}return!0}let ku=Au(()=>null);try{ku=Au(n=>localStorage.getItem(n))}catch{}const A=new xv(ku,n=>{try{localStorage.setItem(wu,JSON.stringify(n))}catch{A.message="Сохранение недоступно в этом браузере."}}),pi=document.querySelector("#app");pi.innerHTML='<div id="safe-probe"></div><div id="stage"><canvas id="scene" aria-label="Трёхмерный двор и задиры"></canvas><div id="film" aria-hidden="true"></div><div id="herald" hidden></div><canvas id="arm" aria-hidden="true"></canvas></div><div id="ui"></div><div id="orientation-prompt" class="orientation-overlay" hidden></div>';const sn=document.querySelector("#ui"),Si=document.querySelector("#orientation-prompt");let xd=!1;function sr(){if(!Si)return;if(!(window.innerHeight>window.innerWidth&&!xd)){Si.hidden=!0,Si.innerHTML="";return}(Si.hidden||!Si.querySelector("#portrait-bypass"))&&(Si.hidden=!1,Si.innerHTML='<div class="orientation-card" role="dialog" aria-modal="true" aria-labelledby="orient-title"><div class="orientation-icon" aria-hidden="true"><svg viewBox="0 0 48 48" width="52" height="52"><rect x="13" y="7" width="22" height="34" rx="4" fill="none" stroke="#f4f1e8" stroke-width="3"/><line x1="20" y1="35" x2="28" y2="35" stroke="#f4f1e8" stroke-width="3" stroke-linecap="round"/><path d="M 37 15 A 13 13 0 0 1 37 31" fill="none" stroke="#c7f653" stroke-width="3" stroke-dasharray="4 2"/><polyline points="34,31 38,33 40,28" fill="none" stroke="#c7f653" stroke-width="3" stroke-linejoin="round"/></svg></div><div class="eyebrow" style="justify-content:center">ГОРИЗОНТАЛЬНЫЙ РЕЖИМ</div><h2 id="orient-title">ПОВЕРНИТЕ<br><em>УСТРОЙСТВО</em></h2><p>Пожалуйста, переверните устройство в горизонтальный режим</p><div class="buttons" style="justify-content:center"><button id="portrait-bypass" class="secondary" type="button">Продолжить</button></div></div>',Si.querySelector("#portrait-bypass")?.addEventListener("click",()=>{Zr(),Ee("ui"),xd=!0,sr()}))}A.briefings=!0;A.touch=matchMedia("(pointer: coarse)").matches;addEventListener("pointerdown",n=>{A.touch=n.pointerType==="touch"},{capture:!0});const mo=Sv(document.querySelector("#herald"),()=>zu());function zu(){!A.briefing||A.mode!=="play"||(Zr(),Ee("ui"),A.skipBriefing(),ct())}{const n=document.createElement("canvas");n.width=n.height=128;const e=n.getContext("2d");if(e){const t=e.createImageData(128,128);for(let i=0;i<t.data.length;i+=4){const s=Math.random()*255;t.data[i]=t.data[i+1]=t.data[i+2]=s,t.data[i+3]=255}e.putImageData(t,0,0)}document.getElementById("film")?.style.setProperty("--grain",`url(${n.toDataURL()})`)}const Ce=document.querySelector("#scene"),Fn=new zx({canvas:Ce,antialias:!0,alpha:!1});Fn.setPixelRatio(Math.min(devicePixelRatio,2));Fn.shadowMap.enabled=!0;Fn.shadowMap.type=Ud;Fn.outputColorSpace=gt;Fn.autoClear=!1;Fn.info.autoReset=!1;const Sn=new kp;Sn.background=new qe("#e2e2e2");Sn.fog=new bc("#e2e2e2",14,42);const mt=new pn(50,1,.3,90),Ya=new Kp("#ffffff","#6e6e6e",2.4);Sn.add(Ya);const Xt=new Jp("#ffffff",3);Xt.position.set(-7,14,10);Xt.castShadow=!0;Xt.shadow.mapSize.set(2048,2048);Xt.shadow.bias=-6e-4;Xt.shadow.normalBias=.02;Xt.shadow.camera.left=-16;Xt.shadow.camera.right=16;Xt.shadow.camera.top=16;Xt.shadow.camera.bottom=-16;Sn.add(Xt);function vd(n){const e=document.createElement("canvas");e.width=4,e.height=256;const t=e.getContext("2d"),i=t.createLinearGradient(0,0,0,256);for(const[r,a]of n)i.addColorStop(r,a);t.fillStyle=i,t.fillRect(0,0,4,256);const s=new Ui(e);return s.colorSpace=gt,s}const Yv={street:vd(no.street.sky),bar:vd(no.bar.sky)},Ou=()=>A.mode==="menu"||A.mode==="select"?1:A.level,zc=(n=A.level)=>yt[n].look==="bar";function $v(n){const e=yt[n].look,t=no[e];Sn.background=Yv[e],Sn.fog.color.set(t.fog),Sn.fog.near=t.near,Sn.fog.far=t.far,Ya.color.set(t.hemi[0]),Ya.groundColor.set(t.hemi[1]),Ya.intensity=t.hemi[2],Xt.color.set(t.sun[0]),Xt.intensity=t.sun[1],$a=t.sunAt}let $a=no.bar.sunAt;Sn.add(Xt.target);function yd(n){Xt.position.set($a[0]+n,$a[1],$a[2]),Xt.target.position.set(n,0,0),Xt.target.updateMatrixWorld()}const Bu=n=>"./assets/"+n,Hu=new iu({color:"#202320"}),Md=new Map;function Cn(n){let e=Md.get(n);return e||(e=new fi({color:n,roughness:.9,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1}),Md.set(n,e)),e}function Xe(n,e,t,i,s,r,a,o,c=!0){const l=new Ae(new qn(e,t,i),Cn(s));return l.position.set(r,a,o),l.castShadow=!0,l.receiveShadow=!0,n.add(l),c&&l.add(new Vp(new Wp(l.geometry),Hu)),l}const Kv=n=>new U((n.min.x+n.max.x)/2,(n.min.y+n.max.y)/2,(n.min.z+n.max.z)/2),jv=n=>new U(n.max.x-n.min.x,n.max.y-n.min.y,n.max.z-n.min.z),rr=new Map;function Zv(n,e){const t=new Vt,i=Kv(e),s=jv(e);if(t.position.set(i.x,e.min.y,i.z),n.add(t),rr.set(e.id,t),e.look==="barrel"){const r=new Ae(new Jt(s.x/2,s.x/2*.94,s.y,20),Cn(e.color));r.position.y=s.y/2,r.castShadow=r.receiveShadow=!0,t.add(r);for(const o of[.18,.82]){const c=new Ae(new Jt(s.x/2+.018,s.x/2+.018,.07,20,1,!0),Cn("#2a2e2a"));c.position.y=s.y*o,t.add(c)}const a=new Ae(new cs(s.x/2*.9,20),Cn("#1f2422"));a.rotation.x=-Math.PI/2,a.position.y=s.y+.004,t.add(a)}else if(e.look==="crate"||e.look==="pallet"){Xe(t,s.x,s.y,s.z,e.color,0,s.y/2,0);const r=e.look==="crate"?3:5;for(let a=0;a<r;a++)Xe(t,s.x*.96,.05,.03,"#7b5532",0,s.y*(a+.5)/r,s.z/2+.02,!1)}else if(e.look==="dumpster")Xe(t,s.x,s.y,s.z,e.color,0,s.y/2,0),Xe(t,s.x+.08,.09,s.z+.08,"#2b4f39",0,s.y+.045,0),Xe(t,s.x*.8,.16,.03,"#f1e7c3",0,s.y*.55,s.z/2+.02,!1);else if(e.look==="van"){Xe(t,s.x,s.y,s.z,e.color,0,s.y/2,0),Xe(t,.9,.6,.03,"#2d3a40",s.x/2-.6,s.y*.72,s.z/2+.02,!1),Xe(t,s.x*.55,.2,.03,"#f359a4",-.4,s.y*.38,s.z/2+.02,!1);for(const r of[-s.x/2+.55,s.x/2-.55]){const a=new Ae(new Jt(.34,.34,.25,16),Cn("#1f2321"));a.rotation.x=Math.PI/2,a.position.set(r,.09-e.min.y+.25,s.z/2-.1),t.add(a)}}else if(e.look==="barrier"){Xe(t,s.x,s.y,s.z,e.color,0,s.y/2,0);for(let r=0;r<4;r++)Xe(t,.32,s.y*.7,.03,"#e55a3a",-s.x/2+.35+r*.6,s.y*.5,s.z/2+.02,!1)}else if(e.look==="piano"){Xe(t,s.x,s.y,s.z,e.color,0,s.y/2,0),Xe(t,s.x+.1,.08,s.z+.1,"#241a15",0,s.y+.04,0),Xe(t,s.x*.92,.1,.32,"#efe9da",0,s.y*.6,s.z/2+.16);for(let r=0;r<14;r++)Xe(t,.045,.05,.18,"#161311",-s.x*.42+r*s.x*.065,s.y*.6+.07,s.z/2+.12,!1);Xe(t,s.x*.7,s.y*.3,.03,"#5a4436",0,s.y*.8,s.z/2+.02,!1)}else if(e.look==="table"){const r=new Ae(new Jt(s.x/2,s.x/2+.08,s.y,24),Cn(e.color));r.position.y=s.y/2,r.castShadow=r.receiveShadow=!0,t.add(r);const a=new Ae(new Jt(s.x/2+.06,s.x/2+.06,.06,24),Cn("#4a3a2e"));a.position.y=s.y+.03,t.add(a);const o=new Ae(new Jt(.05,.05,.25,8),Cn("#f2efe6"));o.position.set(.2,s.y+.18,0),t.add(o)}else if(e.look==="counter"){Xe(t,s.x,s.y-.1,s.z,e.color,0,(s.y-.1)/2,0),Xe(t,s.x+.2,.1,s.z+.2,"#3a2a1e",0,s.y-.05,.05);for(let a=0;a<6;a++)Xe(t,s.x/6-.2,s.y*.55,.03,"#7d5a40",-s.x/2+(a+.5)*s.x/6,s.y*.45,s.z/2+.02,!1);const r=new Ae(new Jt(.04,.04,s.x,8),Cn("#b9b9b9"));r.rotation.z=Math.PI/2,r.position.set(0,.22,s.z/2+.2),t.add(r)}else if(e.look==="shelves"){Xe(t,s.x,s.y,s.z,e.color,0,s.y/2,0);for(let r=0;r<3;r++){Xe(t,s.x*.94,.06,.2,"#2c221a",0,.9+r*.7,s.z/2+.08,!1);for(let a=0;a<11;a++){const o=new Ae(new Jt(.07,.08,.38+a%3*.06,8),Cn(["#3d4a35","#5a3a26","#77705e"][(a+r)%3]));o.position.set(-s.x*.43+a*s.x*.086,1.13+r*.7,s.z/2+.1),t.add(o)}}}else if(e.look==="interior"){Xe(t,s.x,s.y,s.z,e.color,0,s.y/2,0,!1);const r=new Ae(new qt(s.x*.5,s.y*.4),new Tt({color:"#f7d58a",fog:!0}));r.position.set(s.x*.18,s.y*.62,s.z/2+.01),t.add(r)}else Xe(t,s.x,s.y,s.z,e.color,0,s.y/2,0,e.look!=="wall")}function Jv(n,e){const t=e.filter(s=>s.look==="wall");if(!t.length)return;const i=t[0].max.z+.04;for(const s of e.filter(r=>r.look==="interior")){const r=s.min.x+.5,a=s.max.x-.5,o=s.min.y+1.2,c=s.max.y-.6;Xe(n,a-r+.3,.14,.1,"#efe7cc",(r+a)/2,o-.07,i),Xe(n,a-r+.3,.14,.1,"#efe7cc",(r+a)/2,c+.07,i);for(const l of[r-.08,a+.08])Xe(n,.14,c-o,.1,"#efe7cc",l,(o+c)/2,i)}}function Qv(n,e){const t=[];let i=0;return n.updateMatrixWorld(!0),n.traverse(s=>{if(!(s instanceof Ae)||e.has(s))return;const r=new nr().setFromObject(s);r.max.y-r.min.y<.5||t.push({id:"scenery-"+i++,kind:"scenery",min:r.min.clone(),max:r.max.clone()})}),t}function ey(){const n=new Vt;Xe(n,41.5,.25,60,"#a7aaa0",-11.25,-.125,-10,!1),Xe(n,.3,.14,60,"#c9cbc2",9.5,.07,-10),Xe(n,12,.02,9,"#bdbdb0",0,.01,2.5,!1),Xe(n,4,9,16,"#a9afa5",-9.5,4.5,-2);for(let i=2;i<8;i+=2.6)for(let s=-8;s<5;s+=3.2)Xe(n,.1,1.5,1.1,"#59675f",-7.47,i,s);Xe(n,21,2,.3,"#9da497",-2.5,10,-9);for(const i of[-4.2,-6.6])Xe(n,.9,5.2,.9,"#8f8a80",7.4,2.6,i);Xe(n,.9,.7,3.3,"#8f8a80",7.4,5.55,-5.4),Xe(n,1.6,10,3,"#a3a59b",8.6,5,-10.1),Xe(n,.1,4.6,.1,"#596358",-6.5,2.3,-4.5),Xe(n,.1,4.6,.1,"#596358",6.5,2.3,-4.5);const e=new Ae(new Jt(.015,.015,13,4),Cn("#2b2f2b"));e.rotation.z=Math.PI/2,e.position.set(0,4.45,-4.5),n.add(e),["#f359a4","#c7f653","#f4f1e8","#6fb6c6","#f6c453"].forEach((i,s)=>{const r=new Ae(new qt(.9,1.1),new fi({color:i,side:Gt,roughness:1}));r.position.set(-4.6+s*2.2,3.85,-4.5+s%2*.02),r.rotation.z=s%2?.05:-.04,r.castShadow=!0,n.add(r),r.userData.sway=s,r.userData.cloth=i}),Xe(n,.16,5.6,.16,"#596358",-5.4,2.8,-6);const t=new Ae(new hs(.28,14,10),new Tt({color:"#f7ffe0"}));return t.position.set(-5.4,5.7,-6),n.add(t),n}const Oc=[],ui={},Gu={},Vu=[],Wu=[],is=new Map,go=[],io=new kt;io.colorSpace=gt;new ou().load(Bu("gen_bar_backdrop.png"),n=>{io.image=n.image,io.needsUpdate=!0},void 0,()=>{});const Bc=[1,2];for(const n of Bc){const e=new Vt;Sn.add(e),ui[n]=e;const t=new Vt;if(e.add(t),zc(n))t.add(Ev(io));else{const s=ey(),r=bv({left:!1});s.position.x=si,r.position.x=ii,t.add(s,r)}t.traverse(s=>{s.userData.sway!==void 0&&Vu.push(s),s.userData.swing!==void 0&&Wu.push(s),s.userData.lamp!==void 0&&is.set("gag-lamp-"+s.userData.lamp,s),s.userData.bell!==void 0&&is.set("gag-bell-"+s.userData.bell,s),s.userData.cloth&&go.push(s)});const i=yt[n];for(const s of i.covers)Zv(e,s);Jv(e,i.covers),Gu[n]=Qv(t,new Set)}function Xu(n){const e=document.createElement("canvas");e.width=512,e.height=640;const t=e.getContext("2d");t.lineJoin="round",t.lineCap="round",t.strokeStyle="#202522",t.lineWidth=12;function i(a,o,c,l,h){t.fillStyle=h,t.beginPath(),t.ellipse(a,o,c,l,0,0,Math.PI*2),t.fill(),t.stroke()}function s(a,o){t.fillStyle=o,t.beginPath(),a.forEach(([c,l],h)=>h?t.lineTo(c,l):t.moveTo(c,l)),t.closePath(),t.fill(),t.stroke()}n==="enemy"?(s([[130,420],[120,591],[208,591],[240,450],[277,590],[368,590],[355,410]],"#3e4741"),s([[157,232],[100,252],[42,377],[100,411],[155,330],[148,465],[365,465],[354,327],[405,386],[465,347],[392,250],[333,229]],"#b6d451"),i(259,167,91,105,"#f1cbae"),s([[165,137],[177,69],[254,43],[333,76],[353,126],[285,103],[236,122]],"#444b43"),i(221,180,6,9,"#222722"),i(297,179,6,9,"#222722")):n==="dog"?(t.strokeStyle="#d3ed64",t.lineWidth=15,t.beginPath(),t.ellipse(260,95,88,26,-.15,0,Math.PI*2),t.stroke(),t.strokeStyle="#222722",t.lineWidth=12,i(253,420,118,150,"#e7ddbd"),i(260,262,108,100,"#e7ddbd"),i(263,280,28,19,"#262e26")):n==="bottle"?(s([[210,103],[300,103],[302,235],[354,296],[354,600],[160,600],[160,297],[209,237]],"#94be6a"),s([[207,103],[207,70],[306,70],[306,105]],"#f7c56d"),s([[163,333],[350,333],[350,462],[163,462]],"#eee9d3"),t.fillStyle="#252d24",t.font="bold 37px Arial",t.fillText("КВАС",195,410)):n==="barrel"?(s([[133,178],[379,178],[402,600],[111,600]],"#d63434"),i(256,180,123,35,"#f05050"),s([[128,260],[385,260],[389,293],[125,293]],"#272d28"),s([[117,470],[396,470],[399,504],[114,504]],"#272d28"),t.fillStyle="#f9d846",t.fillRect(145,330,222,70),t.font="900 46px Arial",t.fillStyle="#263126",t.fillText("БАМ!",200,382)):(s([[15,120],[495,120],[495,480],[15,480]],"#c7f653"),t.fillStyle="#222722",t.textAlign="center",t.font="900 75px Arial",t.fillText("ДВОР",256,270),t.fillText("№ 02",256,370));const r=new Ui(e);return r.colorSpace=gt,r}const ty=new ou;function wt(n,e){const t=Xu(e);return ty.load(Bu(n),i=>{t.image=i.image,t.needsUpdate=!0},void 0,()=>{}),t}const Yn={enemy:wt("bully.png","enemy"),dog:wt("gen_dog_sit.png","dog"),...Object.fromEntries(Ox.map(n=>[n,wt(Nt[n].sprite,n==="barrel"||n==="hat"?"barrel":"bottle")]))},qu={walrus:wt("gen_walrus.png","enemy"),bulldog:wt("gen_bulldog.png","enemy")},Qt={windup:wt("gen_cat_windup.png","enemy"),hurt:wt("gen_cat_hurt.png","enemy"),ko:wt("gen_cat_ko.png","enemy"),walk:wt("gen_dog_walk.png","dog"),sad:wt("gen_dog_sad.png","dog")},ar=Object.fromEntries(["granny","kitten","pigeon","drunk"].map(n=>[n,{idle:wt(`gen_${n}_idle.png`,"dog"),mad:wt(`gen_${n}_mad.png`,"dog"),fury:wt(`gen_${n}_fury.png`,"dog")}]));{const n=wt("gen_mole_hurt.png","dog");ar.mole={idle:wt("gen_mole_up.png","dog"),lantern:wt("gen_mole_lantern.png","dog"),mad:n,fury:n}}{const n=wt("gen_weasel.png","dog");ar.bartender={idle:n,mad:n,fury:n}}const Js=Object.fromEntries(["rat","gang","kid"].map(n=>[n,{appear:wt(`gen_${n}_appear.png`,"enemy"),attack:wt(`gen_${n}_attack.png`,"enemy"),ko:wt(`gen_${n}_ko.png`,"enemy")}]));for(const n of[...Object.values(Yn),...Object.values(Qt),...Object.values(qu),...Object.values(ar).flatMap(e=>Object.values(e)),...Object.values(Js).flatMap(e=>Object.values(e))])n.colorSpace=gt,n.anisotropy=4;const Yu=new Map([[Yn.enemy,"idle"],[Yn.dog,"sit"],...Object.entries(Qt).map(([n,e])=>[e,n]),...Object.values(ar).flatMap(n=>Object.entries(n).map(([e,t])=>[t,e])),...Object.values(Js).flatMap(n=>Object.entries(n).map(([e,t])=>[t,e]))]);function oi(n,e){if(n.skin&&n.kind==="enemy"){n.frame=e===Qt.windup?"windup":e===Qt.hurt?"hurt":e===Qt.ko?"ko":"idle";return}n.sprite.material.map!==e&&(n.frame=Yu.get(e),n.sprite.material.map=e,n.sprite.customDepthMaterial.map=e)}Oc.push(Xu("sign"));const $u=new Ae(new qt(1.6,1.25),new Tt({map:Oc[0],alphaTest:.5}));$u.position.set(-6.3+si,2.5,-8.8);ui[2].add($u);const es=yt[1].covers.find(n=>n.id===yt[1].landing?.cover),so=1.35,ny=Wt.hat.h*Wt.hat.inset[3]*so,$n=new Ae(new qt(Wt.hat.w,Wt.hat.h).translate(0,Wt.hat.h/2,0),new Tt({map:Yn.hat,alphaTest:.5,side:Gt}));$n.visible=!1;$n.renderOrder=2;$n.scale.set(so,-so,1);function ac(){if(!$n.visible)return null;const n=$n.position,e=He({x:n.x,y:n.y-.04,z:n.z}),t=He({x:n.x+Wt.hat.w*so*.36,y:n.y-.04,z:n.z});return{x:e.x,y:e.y,r:Math.abs(t.x-e.x)}}for(const n of Oc)Lu(n.image);for(const n of Bc)Rv(ui[n]);rc(Hu.color);for(const n of go)n.material=n.material.clone(),n.material.color.set(n.userData.cloth);{const n=yt[1].gags.find(l=>l.id==="gag-cuckoo"),e=.66/.852,t=e/.8,i=new Ae(new qt(e,t).translate(0,t/2,0),new Tt({map:wt("gen_cuckoo.png","barrel"),alphaTest:.5}));i.material.map.colorSpace=gt,i.position.set((n.min.x+n.max.x)/2,n.min.y-.02,n.max.z-.02),ui[1].add(i),is.set("gag-cuckoo",i);const s=document.createElement("canvas");s.width=256,s.height=150;const r=s.getContext("2d");if(r){r.fillStyle="#fff4d6",r.fillRect(0,0,256,150),r.strokeStyle="#3a2a1e",r.lineWidth=2;for(let l=34;l<=114;l+=16)r.beginPath(),r.moveTo(14,l),r.lineTo(242,l),r.stroke();r.font="900 54px Georgia",["#e8475f","#2f6fe0","#e8475f","#2f9c5a","#2f6fe0"].forEach((l,h)=>{r.fillStyle=l,r.fillText("♪",22+h*46,96-h%3*14)}),r.strokeStyle="#151715",r.lineWidth=6,r.strokeRect(3,3,250,144)}const a=new Ui(s);a.colorSpace=gt;const o=yt[1].covers.find(l=>l.id==="piano"),c=new Ae(new qt(.62,.36),new Tt({map:a}));c.position.set((o.min.x+o.max.x)/2,o.max.y*.8,o.max.z+.045),c.rotation.x=-.12,ui[1].add(c);for(const l of["gag-bell-0","gag-bell-1"]){const h=is.get(l);if(!h)continue;const d=h.getWorldPosition(new U),u=new Ae(new hs(.17,16,8,0,Math.PI*2,0,Math.PI/2),new fi({color:"#e0a83a",metalness:.6,roughness:.3,side:Gt}));u.position.set(d.x,d.y-.3,d.z),ui[2].add(u),u.userData.ringer=l;const f=new Ae(new hs(.05,8,6),new fi({color:"#c8742a"}));f.position.y=-.04,u.add(f),is.set(l,u)}}{const n=new Ae(new qn(1.1,.02,.5),new fi({color:"#7c3ae6",roughness:.7}));n.position.set(.9,es.max.y+.01,(es.min.z+es.max.z)/2+.05),ui[1].add(n,$n);const e=new Ae(new hs(.13,16,8,0,Math.PI*2,0,Math.PI/2),new fi({color:"#e0a83a",metalness:.6,roughness:.3}));e.position.set(-.1,es.max.y,n.position.z),ui[1].add(e)}function iy(){const n=document.createElement("canvas");n.width=n.height=128;const e=n.getContext("2d");e.lineWidth=20,e.strokeStyle="#202320",e.beginPath(),e.arc(64,64,44,0,Math.PI*2),e.stroke(),e.lineWidth=11,e.strokeStyle="#f45d96",e.stroke(),e.fillStyle="#202320",e.font="900 54px Arial",e.textAlign="center",e.fillText("!",64,83);const t=new Ui(n);return t.colorSpace=gt,t}const Sd=iy(),Ku=new Tt({color:"#262626",transparent:!0,opacity:.28,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2});function or(n,e=256,t=128){const i=document.createElement("canvas");i.width=e,i.height=t;const s=i.getContext("2d");s.lineJoin="round",s.lineCap="round",n(s);const r=new Ui(i);return r.colorSpace=gt,r}const sy=or(n=>{n.lineWidth=22,n.strokeStyle="#3a2f18",n.beginPath(),n.ellipse(128,64,92,30,0,0,Math.PI*2),n.stroke(),n.lineWidth=13,n.strokeStyle="#ffe27a",n.stroke()});function ry(n,e,t,i){n.beginPath();for(let s=0;s<=10;s++){const r=-Math.PI/2+s*Math.PI/5,a=s%2?i*.45:i;n.lineTo(e+Math.cos(r)*a,t+Math.sin(r)*a)}n.closePath(),n.fillStyle="#ffe14d",n.fill(),n.lineWidth=6,n.strokeStyle="#1c1d1a",n.stroke()}const ay=or(n=>{for(let e=0;e<5;e++){const t=e/5*Math.PI*2;ry(n,128+Math.cos(t)*92,64+Math.sin(t)*34,20)}}),oy=or(n=>{n.strokeStyle="#1c1d1a",n.lineWidth=7,n.fillStyle="#9aa6b4",n.beginPath(),n.arc(90,52,30,Math.PI*.5,Math.PI*1.6),n.arc(130,38,34,Math.PI*1.05,Math.PI*1.95),n.arc(172,54,28,Math.PI*1.4,Math.PI*.5),n.closePath(),n.fill(),n.stroke(),n.strokeStyle="#3d7fd6",n.lineWidth=6;for(const e of[96,124,152,176])n.beginPath(),n.moveTo(e,92),n.lineTo(e-6,116),n.stroke()}),bd=or(n=>{n.beginPath(),n.roundRect(8,8,240,68,24),n.fillStyle="#225530",n.fill(),n.strokeStyle="#0f2414",n.lineWidth=7,n.stroke(),n.beginPath(),n.roundRect(14,14,228,56,18),n.strokeStyle="#a3e8b0",n.lineWidth=3,n.stroke(),n.font="900 32px Arial, sans-serif",n.textAlign="center",n.textBaseline="middle",n.strokeStyle="#0f2414",n.lineWidth=5,n.strokeText("НЕ ТРОГАТЬ",256/2,84/2+1),n.fillStyle="#f0fff4",n.fillText("НЕ ТРОГАТЬ",256/2,84/2+1)},256,84),ly=or(n=>{n.font="900 54px Georgia",n.lineWidth=7,n.strokeStyle="#1c1d1a",n.fillStyle="#9fd3ff",[[30,110,1],[100,72,.8],[170,40,.6]].forEach(([e,t,i])=>{n.save(),n.translate(e,t),n.scale(i,i),n.strokeText("Z",0,0),n.fillText("Z",0,0),n.restore()})}),cy=or(n=>{const e=n.createLinearGradient(0,0,0,512);e.addColorStop(0,"rgba(255,240,170,0)"),e.addColorStop(.25,"rgba(255,240,170,.55)"),e.addColorStop(1,"rgba(255,240,170,.1)"),n.fillStyle=e,n.beginPath(),n.moveTo(90,0),n.lineTo(166,0),n.lineTo(240,512),n.lineTo(16,512),n.closePath(),n.fill()},256,512);function Vi(n,e,t,i=2){const s=new Jl(new Qa({map:n,transparent:!0,depthWrite:!1}));return s.scale.set(e,t,1),s.renderOrder=i,s}const ds=new Vt;Sn.add(ds);const tn=new Map,Yi=[],Lr=new Map;function hy(n){const e=fo(n.kind,n.who),t=new Vt,i=new Vt;t.add(i);const s=new qt(e.w,e.h);s.translate(0,e.h/2,0);const r=n.kind==="enemy"&&n.skin&&(n.skin==="walrus"||n.skin==="bulldog")?n.skin:void 0,a=r?qu[r]:n.kind==="friend"?ar[n.who].idle:n.kind==="thug"?Js[n.who].appear:Yn[n.kind],o=new Tt({map:a,alphaTest:.5,side:Gt}),c=new Ae(s,o);if(c.castShadow=!0,c.customDepthMaterial=new au({depthPacking:Xd,map:a,alphaTest:.5}),i.add(c),n.y<=.01&&n.who!=="mole"){const h=new Ae(new cs(e.w*.36,24),Ku);h.rotation.x=-Math.PI/2,h.position.y=.035,h.scale.y=.45,h.renderOrder=1,t.add(h)}const l={kind:n.kind,group:t,body:i,sprite:c,flash:0,sad:0,skin:r,who:n.who,facing:n.kind==="enemy"&&n.x<0?-1:n.kind==="thug"?-(n.side??1):1};return n.kind==="friend"&&(l.badge=Vi(bd,.72,.24),i.add(l.badge),n.who==="drunk"&&(l.zzz=Vi(ly,.7,.35),l.zzz.position.set(.45,e.h*.95,0),i.add(l.zzz))),n.kind==="thug"&&(l.warning=new Jl(new Qa({map:Sd,depthWrite:!1})),l.warning.position.set(0,e.h*.82,0),i.add(l.warning),n.from==="manhole"&&(l.hole=new Ae(new cs(.62,24),new Tt({color:"#141414"})),l.hole.rotation.x=-Math.PI/2,l.hole.scale.y=.5,l.hole.renderOrder=1,t.add(l.hole))),l.frame=r?"idle":Yu.get(a),n.kind==="enemy"&&(l.warning=new Jl(new Qa({map:Sd,depthWrite:!1})),l.warning.position.set(0,e.h+.3,0),i.add(l.warning),l.stars=Vi(ay,1.1,.55),l.stars.position.set(0,e.h*.97,.05),l.stars.visible=!1,i.add(l.stars)),n.kind==="dog"&&(l.halo=Vi(sy,.62,.31),i.add(l.halo),l.badge=Vi(bd,.64,.21),i.add(l.badge),l.cloud=Vi(oy,.8,.4),l.cloud.visible=!1,i.add(l.cloud),l.beam=Vi(cy,1.6,6,1),l.beam.visible=!1,t.add(l.beam)),ds.add(t),tn.set(n.id,l),l}function ks(n){ds.remove(n.group),n.group.traverse(e=>{e instanceof Ae&&e.geometry&&e.geometry.dispose()}),n.sprite.material.dispose()}const dy=[{id:-1,kind:"enemy",skin:"walrus",x:-2.55,y:0,z:2.2,age:1,deadline:60},{id:-2,kind:"dog",x:.2,y:0,z:-.7,age:1,deadline:1/0},{id:-3,kind:"friend",who:"bartender",x:.3,y:.3,z:-3.15,age:1,deadline:60}],uy=()=>A.mode==="menu"||A.mode==="select"?dy:A.actors;function ts(n){const e=uy(),t=!Zs();for(const[i,s]of tn)if(!e.some(r=>r.id===i)){tn.delete(i);const r=Lr.get(i);Lr.delete(i),r&&t?Yi.push({view:s,age:0,spin:s.facing,how:r}):ks(s)}for(const i of e){const s=tn.get(i.id),r=i.kind==="enemy"&&i.skin&&(i.skin==="walrus"||i.skin==="bulldog")?i.skin:void 0;s&&(s.kind!==i.kind||s.skin!==r)&&(tn.delete(i.id),ks(s));const a=tn.get(i.id)??hy(i),o=fo(i.kind,i.who),c=gn(A.level,i,t);a.group.position.set(c.x,c.y,c.z);const l=t?(i.id<0?n:i.age)+i.id*.7:0;let h=1,d=1,u=0,f=0;const g=new qe(1,1,1);if(i.kind==="enemy"){g.setRGB(1,.88,.88);const _=i.layer==="foreground"||i.layer===void 0,m=i.deadline-i.age,p=t&&_?kn.clamp(1-m/js,0,1):0,w=Math.abs(Math.sin(l*4.2));if(h=1+(1-w)*.05,d=1-(1-w)*.06+w*.03,f=w*.06,u=Math.sin(l*2.1)*.035,p>0&&!a.wound&&i.id>0&&(a.wound=!0,Ee("windup")),oi(a,p>0?Qt.windup:Yn.enemy),p>0){const S=Math.sin(n*48)*.02*p;u=-a.facing*.08*p+S,h*=1+.08*p,d*=1+.1*p,f=0;const R=.5+.5*Math.sin(n*18);g.setRGB(1,(1-.45*p*R)*.88,(1-.5*p*R)*.88)}if(a.warning){const S=i.id>0&&_&&m<js*1.6;a.warning.visible=S,a.warning.scale.setScalar(.38+p*.3+(t?Math.sin(n*14)*.03:0))}if(a.stars&&(a.stars.visible=!1),a.body.position.x=0,i.antic&&t){if(!a.antic&&i.age>.45&&i.id>0){a.antic=!0;const S=He(cr(a));rt({dance:"ПЛЯШЕТ! БЕЙ!",sandwich:"ОБЕДАЕТ! БЕЙ!",selfie:"СЕЛФИ! БЕЙ!"}[i.antic],S.x,S.y-20,"combo")}if(i.antic==="dance"){const S=Math.abs(Math.sin(n*9));f=S*.16,u=Math.sin(n*9)*.22,a.facing=Math.sin(n*4.5)>0?1:-1,h*=1+(1-S)*.08,d*=1-(1-S)*.08}else if(i.antic==="sandwich"){const S=Math.abs(Math.sin(n*11));d*=1-S*.05,h*=1+S*.04,u=.04}else u=Math.sin(n*1.5)*.05-.06*a.facing,f=.03}else a.antic=!1;i.blind&&t&&(oi(a,Qt.hurt),a.body.position.x=Math.sin(n*5.5)*.2,u=Math.sin(n*7)*.16,f=0),a.knock&&(a.knock=Math.max(0,a.knock-1/60*1.5),f+=Math.sin(a.knock*Math.PI)*.9,u+=a.knock*.5*a.facing);const E=i.wet??0;if(a.wet=E,E>0){if(!a.yuck){a.yuck=!0,Ee("yuck");const R=He({x:a.group.position.x,y:a.group.position.y+1.6,z:a.group.position.z});rt(["ФУ-У!","БЕ-Е!","ФИ!"][i.id%3],R.x,R.y,"bad")}u=t?Math.sin(n*70+i.id)*.05*(.4+E):0,h*=1+.08*E,d*=1-.14*E,f=0,g.setRGB(1-.45*E,1,1-.55*E)}}else if(i.kind==="dog"){g.setRGB(.92,1,.94);const _=Ic(t?i.id<0?n:i.age:0,t);if(a.facing=-_.facing,_.walking){const E=Math.abs(Math.sin(l*11));f=E*.09,d=1+E*.04,u=Math.sin(l*11)*.06}else{const E=Math.sin(l*2.6);d=1+E*.025,h=1-E*.012,u=Math.sin(l*.9)*.03}a.sad=Math.max(0,a.sad-1/60);const m=Math.min(1,a.sad);oi(a,m>0?Qt.sad:_.walking?Qt.walk:Yn.dog),m>0&&(d*=1-.12*m,h*=1+.05*m,u=Math.sin(n*20)*.03*m,f=0,g.setRGB(.85,.95,.98));const p=.1*a.facing;a.halo&&(a.halo.position.set(p,o.h*1+(t?Math.sin(n*3+i.id)*.04:0)-m*.12,0),a.halo.material.rotation=m*.45*Math.sin(n*6),a.halo.material.color.setRGB(1,1,1-m*.5)),a.badge&&(a.badge.visible=!0,a.badge.position.set(p,o.h*1+.34+(t?Math.sin(n*3+i.id)*.02:0)-m*.12,.02)),a.cloud&&(a.cloud.visible=m>0,a.cloud.position.set(p,o.h*1.25+Math.sin(n*4)*.03,0));const w=vu(t?i.id<0?n:i.age:0,t);if(w>0&&!a.ascending&&i.id>0){a.ascending=!0,Ee("harp");const E=He({x:c.x,y:c.y+2.2,z:c.z});rt("♪ АЛЛИЛУЙЯ! ♪",E.x,E.y,"combo")}w<=0&&(a.ascending=!1),a.beam&&(a.beam.visible=w>0,a.beam.position.set(0,3-c.y+w*.2,-.05),a.beam.material.opacity=Math.min(1,w/.5)),w>0&&(u=Math.sin(n*2)*.05,f+=Math.sin(n*3)*.03)}else if(i.kind==="friend"){g.setRGB(.92,1,.94);const _=yt[A.level].friends[i.plan??0],m=_?Dc(_,i.age,t):null,p=ar[i.who],w=i.mad??0;oi(a,w>0?w>tc*.5?p.mad:p.fury:m?.lantern&&p.lantern?p.lantern:p.idle),m&&(a.facing=m.facing),w>0?(u=Math.sin(n*40)*.04,h=1.06,d=.96,g.setRGB(.96,.92,.86)):m?.walking?(f=Math.abs(Math.sin(l*7))*.05,u=Math.sin(l*7)*.05):i.who==="drunk"?u=Math.sin(l*.9)*.07:d=1+Math.sin(l*2.6)*.02,a.badge&&(a.badge.visible=(m?.rise??1)>.5,a.badge.position.set(0,o.h*o.inset[3]+.22+(t?Math.sin(n*3+i.id)*.02:0),.02)),a.zzz&&(a.zzz.visible=w<=0,a.zzz.position.y=o.h*.95+(t?n*.25%.3:0))}else if(i.kind==="thug"){g.setRGB(1,.88,.88);const _=Js[i.who],m=i.age>=ai.attack,p=kn.clamp((i.age-1.2)/(ai.attack-1.2),0,1);oi(a,m?_.attack:_.appear),f=Math.abs(Math.sin(l*9))*.04,u=Math.sin(l*9)*.04,p>0&&t&&(u+=Math.sin(n*50)*.03*p,g.setRGB(1,(1-.4*p*(.5+.5*Math.sin(n*18)))*.88,(1-.45*p)*.88)),m&&(h=1.15,d=1.1),a.warning&&(a.warning.visible=i.age>.9,a.warning.scale.setScalar(.34+p*.26)),a.hole&&(a.hole.position.y=-c.y+.03)}else u=t?Math.sin(l*1.6)*.04:0,i.kind==="hat"&&t&&(f=Math.abs(Math.sin(l*2.4))*.05,u=Math.sin(l*2.4)*.08);a.flash>0&&(h*=1+a.flash*.2,d*=1-a.flash*.18,g.setRGB(1,1-a.flash*.55,1-a.flash*.45)),a.flash=Math.max(0,a.flash-.08),a.body.position.y=f,a.body.rotation.z=u,a.sprite.scale.set(h*a.facing,d,1),a.sprite.material.color.copy(g)}}function fy(n,e){for(let t=Yi.length-1;t>=0;t--){const i=Yi[t];i.age+=n;const s=i.view,r=s.sprite.material;if(i.how==="pancake"){if(oi(s,Qt.ko),s.body.position.x=0,i.age<.9)s.sprite.scale.set(1.6*s.facing,.2,1),s.body.rotation.set(0,0,0),s.body.position.y=0;else{const a=Math.min(1,(i.age-.9)/.8);s.sprite.scale.set(1.45*s.facing,.1+.5*a,1),s.body.rotation.x=-.9*(1-a),s.body.rotation.z=Math.sin(i.age*9)*.5*a,s.body.position.y=a*a*2.6,s.group.position.x+=n*Math.sin(i.age*4)*1.2}s.stars&&(s.stars.visible=!1),i.age>1.4&&(r.transparent=!0,r.opacity=Math.max(0,1-(i.age-1.4)*2.5)),i.age>1.8&&(ks(s),Yi.splice(t,1));continue}if(i.how==="stars"||i.how==="birds"){if(oi(s,i.age<.22?Qt.hurt:Qt.ko),s.stars&&(s.stars.visible=!0,s.stars.material.rotation=e*8),i.how==="stars"&&i.age>.18){const a=i.age-.18;s.body.position.y=a*a*22,s.body.rotation.z=a*14*i.spin;const o=Math.max(.2,1-a*1.3);s.sprite.scale.set(o*s.facing,o,1)}if(i.age>(i.how==="stars"?.62:.3)&&!i.done){i.done=!0;const a=He({x:s.group.position.x,y:s.group.position.y+1,z:s.group.position.z});i.how==="stars"?Dy(a.x):Ly(a.x,a.y),ks(s),Yi.splice(t,1)}continue}if(i.how==="ko"){const a=s.kind==="thug"?Js[s.who]:null;if(oi(s,a?a.ko:i.age<.22?Qt.hurt:Qt.ko),i.age<.09)s.sprite.scale.set(1.4*s.facing,.6,1);else{const o=i.age-.09;s.sprite.scale.set(.9*s.facing,1.12,1),s.body.rotation.z=-i.spin*o*7,s.body.position.y=o*3.2-o*o*7,s.group.position.z-=n*3.5,s.group.position.x+=n*i.spin*-1.5}s.stars&&(s.stars.visible=!0,s.stars.material.rotation=e*8),i.age>.45&&(r.transparent=!0,r.opacity=Math.max(0,1-(i.age-.45)*4)),i.age>.75&&(ks(s),Yi.splice(t,1))}else{oi(s,s.kind==="thug"?Js[s.who].attack:Qt.windup);const a=Math.min(1,i.age/.16);s.group.position.z+=n*(i.age<.16?5:-2),s.body.rotation.z=s.facing*.35*a,s.sprite.scale.set((1+.25*a)*s.facing,1+.2*a,1),i.age>.2&&(s.body.position.y-=n*6,r.transparent=!0,r.opacity=Math.max(0,1-(i.age-.2)*3.5)),i.age>.5&&(ks(s),Yi.splice(t,1))}}}const Vs=document.querySelector("#arm"),py=Vs.getContext("2d");function Rn(n,e,t,i=12){const s=document.createElement("canvas");s.width=s.height=256;const r=s.getContext("2d");r.translate(128,128),r.lineJoin="round",r.beginPath();for(let a=0;a<=i*2;a++){const o=a%2?62:118-a%4*9,c=a/(i*2)*Math.PI*2;r.lineTo(Math.cos(c)*o,Math.sin(c)*o)}r.closePath(),r.fillStyle=e,r.fill(),r.lineWidth=9,r.strokeStyle="#151715",r.stroke(),r.beginPath();for(let a=0;a<=i*2;a++){const o=a%2?36:70,c=a/(i*2)*Math.PI*2+.2;r.lineTo(Math.cos(c)*o,Math.sin(c)*o)}return r.closePath(),r.fillStyle=t,r.fill(),r.rotate(-.12),r.font="900 46px Arial",r.textAlign="center",r.textBaseline="middle",r.lineWidth=8,r.strokeStyle="#151715",r.strokeText(n,0,2),r.fillStyle="#fffbe8",r.fillText(n,0,2),s}const ka={hit:Rn("БАМ!","#ffd84a","#f3388f"),throw:Rn("ХРЯСЬ!","#ffd84a","#8fdc2a"),protected:Rn("АЙ!","#ff9fb0","#e2324e",9),cover:Rn("ТУК!","#f4c27a","#c9772e",8),smash:Rn("ДЗЫНЬ!","#9fe7ff","#2f9be0",14),miss:Rn("ВЖУХ","#eef0ea","#b9c0b5",7),ult:Rn("ДИНЬ!","#c9a6ff","#7c3ae6",16),crash:Rn("БДЫЩЬ!","#ffd84a","#ff6b3d",16),strike:Rn("СТРАЙК!","#9fe7ff","#f3388f",14),squeak:Rn("ПИ-И-ИСК!","#fff36b","#ff9f2a",10),splat:Rn("ШМЯК!","#fff6e0","#ff9fb0",11)},Ti=new tm,Pn=new Ue(0,0);let ro="",Ed=A.hp;const my=.42,Cr=.36,gy=.62,Yr={duration:.34,arrive:.3,release:.46,reach:.38};let pt=null,vt=0,Ii=0,_y=1;const Et=[];let rn=0,Us=0;function xy(){return{w:960,h:540}}function Qs(){Jr();const n=window.visualViewport,e={left:n?.offsetLeft??0,top:n?.offsetTop??0,width:n?.width??innerWidth,height:n?.height??innerHeight},t=getComputedStyle(document.getElementById("safe-probe")),i=vv(e,{left:parseFloat(t.paddingLeft),top:parseFloat(t.paddingTop),right:parseFloat(t.paddingRight),bottom:parseFloat(t.paddingBottom)});pi.style.cssText=`left:${e.left}px;top:${e.top}px;width:${e.width}px;height:${e.height}px;--stage-x:${i.left-e.left}px;--stage-y:${i.top-e.top}px;--stage-w:${i.width}px;--stage-h:${i.height}px;--safe-left:${t.paddingLeft};--safe-right:${t.paddingRight};--safe-top:${t.paddingTop};--safe-bottom:${t.paddingBottom}`,pi.dataset.stacked=String(i.stacked);const s=i.width,r=i.height,a=Math.min(devicePixelRatio||1,2);Fn.setPixelRatio(a),Fn.setSize(s,r,!1);const o=yu(960,540,A.mode==="menu"||A.mode==="select"?0:rn);mt.aspect=s/r,mt.fov=o.fov,mt.updateProjectionMatrix(),mt.position.set(o.position.x,o.position.y,o.position.z),mt.lookAt(o.look.x,o.look.y,o.look.z),(A.mode==="menu"||A.mode==="select")&&(mt.position.x-=s<650?0:1.2,mt.lookAt(o.look.x-(s<650?0:1.8),o.look.y,o.look.z)),mt.updateMatrixWorld(),Vs.width=Math.round(s*a),Vs.height=Math.round(r*a),_o()}addEventListener("resize",()=>{Qs(),er(),sr()});addEventListener("orientationchange",()=>{Qs(),er(),sr()});window.visualViewport&&(window.visualViewport.addEventListener("resize",()=>{Qs(),er(),sr()}),window.visualViewport.addEventListener("scroll",()=>{Qs(),er()}));function mi(n,e){const t=Cu(Ce.getBoundingClientRect(),{x:n,y:e});return t?new Ue(t.ndcX,t.ndcY):null}function Hc(n,e){const t=mi(n,e);return t?xo(t):null}function zs(n,e){const t=Ce.getBoundingClientRect();return po(t,{x:n*t.width,y:e*t.height})}function _o(){const n=document.querySelector(".crosshair");if(n){const e=Pu(Ce.getBoundingClientRect(),Pn),t=pi.getBoundingClientRect();n.style.left=e.x-t.left+"px",n.style.top=e.y-t.top+"px"}}const Ke=()=>!Zs();function lr(){return Jx(A.level,A.actors,Ke(),Gu[A.level])}function ao(n){Ti.setFromCamera(n,mt);const{origin:e,direction:t}=Ti.ray;return{origin:{x:e.x,y:e.y,z:e.z},direction:{x:t.x,y:t.y,z:t.z}}}const xo=n=>{const e=ao(n);return Uc(e.origin,e.direction,lr())};function $r(n){if(A.mode!=="play"||(Zr(),pt&&!pt.resolved))return;if(A.briefing){const a=ao(Pn);Ee("whoosh"),pt={action:"punch",throwing:!1,brief:!0,spot:{x:(Pn.x+1)/2,y:(1-Pn.y)/2},ray:a,shot:{kind:"whiff",distance:3,point:a.origin},phase:0,resolved:!1,held:null,staminaBefore:A.stamina,staminaAfter:A.stamina},Ke()||cc(pt);return}const e=n==="grab"&&A.held!==null,t=A.held,i=A.stamina;if(!A.spend(n)){xn(),Ee("ui");return}const s=ao(Pn);Ee("whoosh");const r={x:(Pn.x+1)/2,y:(1-Pn.y)/2};pt={action:n,throwing:e,spot:r,ray:s,shot:Uc(s.origin,s.direction,lr(),e?"punch":n),phase:0,resolved:!1,held:t,staminaBefore:i,staminaAfter:A.stamina},Ke()||(e?Zu(pt):cc(pt)),xn()}function rt(n,e,t,i="pop"){const s=document.createElement("div");s.className="callout "+i,s.textContent=n,sn.append(s);const r=Ce.getBoundingClientRect(),a=pi.getBoundingClientRect(),o=Math.min(r.width/2,s.offsetWidth*.62+16),c=s.offsetHeight*.7+16;s.style.left=kn.clamp(e,r.left+o,r.right-o)-a.left+"px",s.style.top=kn.clamp(t,r.top+c,r.bottom-c)-a.top+"px",setTimeout(()=>s.remove(),900)}const vy=["","","ДВОЙНОЙ!","ТРОЙНОЙ!","РАЗМАШИСТО!","НЕУДЕРЖИМ!"];function li(n){for(const e of A.events){const t=tn.get(e.id),i=n??(t?He({x:t.group.position.x,y:t.group.position.y+1.2,z:t.group.position.z}):zs(.5,.5));if(e.type==="hurt"&&e.amount){const s=A.actors.find(r=>r.id===e.id)??(t?{x:t.group.position.x,y:t.group.position.y,z:t.group.position.z}:null);if(s){const r=t?cr(t):{x:s.x,y:s.y+2,z:s.z??0};Fr.push({...r,amount:e.amount,age:0,big:e.amount>10})}t&&(t.flash=1)}if((e.type==="ko"||e.type==="smash")&&(Lr.set(e.id,e.type==="ko"&&e.how&&e.how!=="spin"?e.how:"ko"),e.type==="ko"&&Ee("ko")),e.type==="ko"&&e.who&&rt(["ШМЯК!","БРЫСЬ!","ПШЁЛ!"][e.id%3],i.x,i.y-20,"pop"),e.type==="ko"&&e.combo>=2&&rt(`КОМБО ×${e.combo} ${vy[Math.min(e.combo,5)]}`,i.x,i.y-70,"combo"),e.type==="attack"&&(Lr.set(e.id,"attack"),Ee("attack"),rt("БАЦ! −♥",i.x,i.y,"bad"),Ke()&&(vt=.22)),e.type==="dog"&&(t&&(t.sad=2.4),Ee("dog"),rt(A.ult.phase==="pour"?"ПЁС ОСКОРБЛЁН!":"ПСА НЕ ТРОГАЙ!",i.x,i.y-60,"bad")),e.type==="tear"&&mo.tear(Ke()),e.type==="offend"&&e.who==="herald"){Ee("huff"),Ke()&&(vt=Math.max(vt,.14));continue}if(e.type==="offend"&&(t&&(t.flash=1),Ee("huff"),rt(e.text??"ХАМ!",i.x,i.y-60,"bad"),Ke()&&(vt=Math.max(vt,.12))),e.type==="nuisance")if(Lr.set(e.id,"attack"),e.who==="rat")Ee("steal"),rt("КРЫСА СПЁРЛА СИЛЫ! −35",i.x,i.y,"bad");else if(e.who==="gang"){Ee("splat"),yy();const s=zs(.5,.4);rt("ПЛЮХ!",s.x,s.y,"bad")}else Ee("zing"),rt("ЩЁЛК! −♥",i.x,i.y,"bad"),Ke()&&(vt=.2);if(e.type==="squeak"&&(Ee("squeak"),e.point&&ri("squeak",e.point,.8),e.id&&rt(`ПИ-И-ИСК! КОМБО +${Ct.chicken.combo}`,i.x,i.y-50,"combo")),e.type==="blind"&&(Ee("splat"),e.point&&(ri("splat",e.point,.9),wd(e.point,["#fff6e0","#ffffff","#ff4f6d"])),rt("ПИРОГ В ЛИЦО!",i.x,i.y-40,"combo")),e.type==="stick"&&(Ee("pop"),rt("ЧПОК!",i.x,i.y-40,"pop")),e.type==="strike"){Ee("strike"),e.point&&ri("strike",e.point,1.3);const s=zs(.5,.35);rt("СТРАЙК!",s.x,s.y,"combo"),Ke()&&(vt=.2)}if(e.type==="seeds"&&e.point&&(Ee("pop"),Ry(e.point,e.ids??[])),e.type==="geyser"&&e.point){Ee("geyser");const s=He(e.point);rt("ФОНТАН!",s.x,s.y-80,"pop")}if(e.type==="knock"&&(t&&(t.flash=1,t.knock=1),Ee("splat"),rt("ПЛЮХ!",i.x,i.y-30,"pop")),e.type==="hazard"&&e.point){Ee("whistle");const s=He(e.point);rt("БЕРЕГИСЬ!",s.x,s.y-30,"bad")}if(e.type==="crash"&&e.point){Ee("crash"),ri("crash",{...e.point,y:.6},1.6);const s=as.get(e.id);s&&(s.wreck=2.4),Ke()&&(vt=.35)}if(e.type==="milestone"&&e.text&&zy(e.text),e.type==="ult"&&Xy(),e.type==="land"&&e.point&&(Ee("thud"),e.prop==="anvil"&&Ke()&&(vt=Math.max(vt,.22),ri("cover",e.point,.9))),e.type==="gag"&&wy(e),e.type==="shatter"&&e.point&&e.prop&&(wd(e.point,Nt[e.prop].shards??["#ffffff"]),ri("smash",e.point,.8)),e.type==="ultEnd"){Ee("slide");const s=zs(.5,.6);rt(e.amount?`НИ КАПЛИ МИМО! +${e.amount}`:"ПРОЛИЛ… ПЛАТИ ТРИСТА",s.x,s.y,e.amount?"combo":"bad")}e.type==="advance"&&(Ee("whoosh"),rt("БЛИЖЕ!",i.x,i.y-30,"bad")),e.type==="taunt"&&(Ee("pop"),rt(["ЭЙ ТЫ!","НЕ ДОСТАНЕШЬ!","ХА-ХА!"][e.id%3],i.x,i.y-30,"bad"))}A.events.length=0}function ju(n){const e=Ce.getBoundingClientRect(),t=e.width,i=e.height,s=Fc(1,t,i,bi).glove;return{x:e.left+s.x+(n.spot.x*t-s.x)*Yr.reach,y:e.top+s.y+(n.spot.y*i-s.y)*Yr.reach-i*.05}}function Zu(n){n.launched=!0,n.resolved=!0;const e=ju(n);Ce.getBoundingClientRect();const t=mi(e.x,e.y);if(!t)return;Ti.setFromCamera(t,mt);const i=Ti.ray.at(1.7,new U),s=A.launch({x:i.x,y:i.y,z:i.z},n.shot.point);n.outcome="throw",Et.push({action:"grab",outcome:"throw",kind:"flight",id:s?.id??null,staminaBefore:n.staminaBefore,staminaAfter:n.staminaAfter}),Et.length>20&&Et.shift(),Ee("toss"),ct()}const ss=[];function yy(){for(let n=0;n<3;n++)ss.push({x:.25+Math.random()*.5,y:.2+Math.random()*.4,r:.09+Math.random()*.06,age:0,seed:Math.random()*10});for(;ss.length>6;)ss.shift()}function My(n,e,t,i,s){const r=Math.min(e,t);for(let a=ss.length-1;a>=0;a--){const o=ss[a];if(o.age+=i,o.age>3.2){ss.splice(a,1);continue}const c=o.x*e,l=o.y*t+o.age*r*.03,h=o.r*r;n.save(),n.globalAlpha=Math.min(1,(3.2-o.age)*1.5)*.93,n.translate(c,l),n.beginPath();for(let d=0;d<=16;d++){const u=d/16*Math.PI*2,f=h*(d%2?.62+.2*Math.sin(o.seed+d):1+.15*Math.sin(o.seed*2+d));n.lineTo(Math.cos(u)*f,Math.sin(u)*f)}n.closePath(),n.fillStyle="#f4f2e6",n.fill(),n.lineWidth=Math.max(2,s*.4),n.strokeStyle="#151715",n.stroke(),n.beginPath(),n.ellipse(h*.1,h*.05,h*.32,h*.26,0,0,Math.PI*2),n.fillStyle="#9a9a8a",n.fill(),n.beginPath(),n.ellipse(-h*.3,-h*.3,h*.14,h*.08,-.6,0,Math.PI*2),n.fillStyle="#ffffff",n.fill(),n.restore()}}const Ci=[],Ir=new mu(()=>({x:0,y:0,vx:0,vy:0,rot:0,vr:0,size:0,color:"",life:0}),180);function ri(n,e,t=1){const i=He(e),s=He({...e,x:e.x+1}),r=Math.abs(s.x-i.x);Ci.push({key:n,x:i.x,y:i.y,size:kn.clamp(r*1.6,70,260)*t,age:0})}function wd(n,e){const t=He(n),i=He({...n,x:n.x+1}),s=kn.clamp(Math.abs(i.x-t.x),30,200);for(let r=0;r<14;r++){const a=-Math.PI/2+(Math.random()-.5)*2.6,o=s*(2+Math.random()*3),c=Ir.get();c.x=t.x,c.y=t.y,c.vx=Math.cos(a)*o,c.vy=Math.sin(a)*o,c.rot=Math.random()*6,c.vr=(Math.random()-.5)*18,c.size=s*(.07+Math.random()*.09),c.color=e[r%e.length],c.life=.7+Math.random()*.4}}const za=new Map;function Sy(){for(const[n,e]of za)A.flights.some(t=>t.id===n)||(ds.remove(e.mesh,e.shadow),e.mesh.geometry.dispose(),e.mesh.material.dispose(),za.delete(n));for(const n of A.flights){let e=za.get(n.id);const t=Wt[n.kind];if(!e){const s=new Ae(new qt(t.w,t.h),new Tt({map:Yn[n.kind],alphaTest:.5,side:Gt}));s.castShadow=!0;const r=new Ae(new cs(t.w*.3,18),Ku);r.rotation.x=-Math.PI/2,r.renderOrder=1,ds.add(s,r),e={mesh:s,shadow:r},za.set(n.id,e)}e.mesh.position.set(n.pos.x,n.pos.y+t.h*.35,n.pos.z),e.mesh.rotation.z=Ke()?n.angle:0,n.dropped&&!e.whistled&&(e.whistled=!0,Ee("whistle")),e.shadow.position.set(n.pos.x,.035,n.pos.z);const i=Math.max(.35,1-n.pos.y/6);e.shadow.scale.set(i,i*.45,1)}}function by(n){if(!(A.mode!=="play"||Ii>0)){for(const{flight:e,impact:t}of A.fly(n,lr())){if(t.type==="rest")continue;const i=t.id;if(t.kind==="enemy")Ee("throw"),ri("throw",t.point),Ke()&&(vt=.16,Ii=.06);else if(t.kind==="dog")ri("protected",t.point);else{if(Ee("cover"),ri("cover",t.point,.7),typeof i=="string"){const s=rr.get(i);s&&(s.userData.wobble=1)}Ke()&&(vt=.06)}if(typeof i=="number"){const s=tn.get(i);s&&(s.flash=1)}Nt[e.kind].breakable&&Ee("shatter")}li()}}const Td=["КУ-КУ, МАЗИЛА!","КУ-КУ! РУКИ-КРЮКИ!","КУ-КУ! ИДИ ДОМОЙ!","КУ-КУ! НУ ТЫ И ЛОПУХ!"];let Ey=0,Pr=0;const Ur=[];function wy(n){const e=n.gagId?is.get(n.gagId):void 0,t=n.point??(e?e.getWorldPosition(new U):null),i=t?He(t):zs(.5,1/3);if(Ce.dataset.gag=`${n.gag}:${A.riffs}`,n.gag==="piano"){qv(Av(n.amount??0)),rt("♪ ТРЫНЬ-ТЫН-ТЫН ♪",i.x,i.y-40,"combo");const s=rr.get("piano");s&&(s.userData.wobble=1),oc=3.5}else if(n.gag==="cuckoo")Ee("cuckoo"),rt(Td[Ey++%Td.length],i.x,i.y-30,"bad"),e&&(e.userData.pop=1);else if(n.gag==="lamp")Ee("buzz"),e&&(e.userData.swingV=(e.userData.swingV??0)+(Math.random()<.5?-1:1)*2.2),Pr=1.2;else if(n.gag==="bell")Ee("bell"),rt("ДЗИИИНЬ!",i.x,i.y,"pop"),e&&(e.userData.ring=1);else if(n.gag==="laundry"){Ee("flop");const s=go.find(r=>r.visible);s&&(s.visible=!1,n.id&&Ur.push({from:s.getWorldPosition(new U),id:n.id,color:s.userData.cloth,age:0})),n.id&&rt("ТРУСЫ НА ГОЛОВУ!",i.x,i.y+30,"combo")}}let oc=0;function Ty(n,e){for(const[t,i]of is)if(t.startsWith("gag-lamp")){const s=(i.userData.swingV??0)-i.rotation.z*9*n;i.userData.swingV=s*(1-n*.45),i.rotation.z+=i.userData.swingV*n,i.traverse(r=>{r instanceof Cc&&(r.intensity=r.userData.base*(Pr>0&&Math.sin(e*61)>-.2+(1-Pr)?.15:1))})}else if(i.userData.ring)i.userData.ring=Math.max(0,i.userData.ring-n*.9),i.rotation.z=Math.sin(e*26)*.5*i.userData.ring;else if(i.userData.pop){i.userData.pop=Math.max(0,i.userData.pop-n*1.6);const s=Math.sin(i.userData.pop*Math.PI*3)*i.userData.pop;i.scale.set(1+s*.18,1+s*.18,1)}if(Pr=Math.max(0,Pr-n),oc>0&&(oc-=n,Math.random()<n*5)){const t=yt[1].covers.find(s=>s.id==="piano"),i=He({x:t.min.x+Math.random()*(t.max.x-t.min.x),y:t.max.y+.3,z:t.max.z});rt(["♪","♫","♬"][Math.floor(Math.random()*3)],i.x,i.y,"pop")}}function Ay(n,e,t){for(let i=Ur.length-1;i>=0;i--){const s=Ur[i];s.age+=e;const r=tn.get(s.id),a=r?cr(r):null;if(s.age>2.6||!a&&s.age>.5){Ur.splice(i,1);continue}const o=Math.min(1,s.age/.5),c=a??s.from,l={x:s.from.x+(c.x-s.from.x)*o,y:s.from.y+(c.y-.35-s.from.y)*o*o,z:s.from.z+(c.z-s.from.z)*o},h=He(l),d=He({...l,x:l.x+1}),u=kn.clamp(Math.abs(d.x-h.x),20,160)*.5;n.save(),n.translate(h.x,h.y),n.rotate(o<1?Math.sin(s.age*20)*.4:Math.sin(s.age*6)*.08),n.globalAlpha=Math.min(1,(2.6-s.age)*2),n.beginPath(),n.moveTo(-u*.6,-u*.3),n.lineTo(u*.6,-u*.3),n.lineTo(u*.55,u*.25),n.lineTo(u*.15,u*.3),n.lineTo(0,u*.05),n.lineTo(-u*.15,u*.3),n.lineTo(-u*.55,u*.25),n.closePath(),n.fillStyle=s.color,n.fill(),n.lineWidth=Math.max(2,t*.4),n.strokeStyle="#151715",n.lineJoin="round",n.stroke(),n.fillStyle="#ffffff";for(const[f,g]of[[-.3,-.05],[.25,.02],[0,-.18]])n.beginPath(),n.arc(f*u,g*u,u*.06,0,Math.PI*2),n.fill();n.restore()}}const Pi=new mu(()=>({kind:"drop",x:0,y:0,vx:0,vy:0,life:0,max:1,size:1,tx:0,ty:0,phase:0}),260),Gc=n=>{const e=He(n),t=He({...n,x:n.x+1});return{p:e,u:kn.clamp(Math.abs(t.x-e.x),20,260)}};function Ry(n,e){const{p:t,u:i}=Gc(n);for(let s=0;s<10;s++){const r=Pi.get(),a=Math.random()*Math.PI*2;r.kind="seed",r.x=t.x,r.y=t.y,r.tx=t.x+Math.cos(a)*i*1.4,r.ty=t.y+Math.sin(a)*i,r.life=r.max=.45,r.size=i*.05,r.phase=a}for(const s of e){const r=tn.get(s);if(!r)continue;const a=He(cr(r));for(let o=0;o<4;o++){const c=Pi.get();c.kind="seed",c.x=t.x,c.y=t.y,c.tx=a.x+(Math.random()-.5)*30,c.ty=a.y+30+Math.random()*30,c.life=c.max=.35+o*.05,c.size=i*.05,c.phase=o}setTimeout(()=>rt("ТЬФУ!",a.x,a.y,"pop"),300)}}const rs=[],Cy=[[0,-1.2],[-.5,-.4],[.5,-.4],[0,0],[-.6,1],[.6,1],[-1,-.9],[1,-.9]],Py=[[0,1],[0,2],[1,3],[2,3],[3,4],[3,5],[1,6],[2,7]];function Dy(n){const e=Ce.getBoundingClientRect(),t=e.width,i=e.height,s=kn.clamp(n,e.left+t*.15,e.left+t*.85),r=Math.min(t,i)*.07;rs.push({x:s,pts:Cy.map(([a,o])=>({x:s+a*r+(Math.random()-.5)*r*.2,y:e.top+i*.26+o*r})),age:0}),rs.length>3&&rs.shift(),Ee("harp")}function Ly(n,e){Ee("pop");for(let t=0;t<5;t++){const i=Pi.get();i.kind="bird",i.x=n+(Math.random()-.5)*40,i.y=e+(Math.random()-.5)*30,i.vx=(t-2)*50+(Math.random()-.5)*40,i.vy=-140-Math.random()*80,i.life=i.max=2,i.size=14+Math.random()*8,i.phase=Math.random()*6}rt("ФЬЮТЬ!",n,e-40,"pop")}function Iy(n,e,t,i){n.lineCap="round",n.lineJoin="round";for(let s=Pi.live.length-1;s>=0;s--){const r=Pi.live[s];if(r.life-=e,r.life<=0){Pi.release(s);continue}const a=1-r.life/r.max;if(r.kind==="seed"){const o=r.x+(r.tx-r.x)*a,c=r.y+(r.ty-r.y)*a-Math.sin(a*Math.PI)*30;n.save(),n.translate(o,c),n.rotate(r.phase+a*9),n.beginPath(),n.ellipse(0,0,r.size,r.size*.6,0,0,Math.PI*2),n.fillStyle="#1b1b1b",n.fill(),n.restore()}else if(r.kind==="drop")r.vy+=900*e,r.x+=r.vx*e,r.y+=r.vy*e,n.beginPath(),n.arc(r.x,r.y,r.size,0,Math.PI*2),n.fillStyle="#8fd8ff",n.fill(),n.lineWidth=1.5,n.strokeStyle="#151715",n.stroke();else{r.x+=r.vx*e,r.y+=r.vy*e,r.vy*=1-e*.3;const o=Math.sin(i*18+r.phase)*.6;n.save(),n.globalAlpha=Math.min(1,r.life*1.5),n.translate(r.x,r.y),n.beginPath(),n.moveTo(-r.size,-r.size*o*.8),n.quadraticCurveTo(-r.size*.4,-r.size*.2,0,0),n.quadraticCurveTo(r.size*.4,-r.size*.2,r.size,-r.size*o*.8),n.lineWidth=Math.max(2.5,t*.45),n.strokeStyle="#151715",n.stroke(),n.restore()}}for(let s=rs.length-1;s>=0;s--){const r=rs[s];if(r.age+=e,r.age>3.4){rs.splice(s,1);continue}const a=Math.min(1,r.age*3,(3.4-r.age)*1.5);n.save(),n.globalAlpha=a,n.setLineDash([6,7]),n.strokeStyle="#fff6c8",n.lineWidth=2;for(const[o,c]of Py)n.beginPath(),n.moveTo(r.pts[o].x,r.pts[o].y),n.lineTo(r.pts[c].x,r.pts[c].y),n.stroke();n.setLineDash([]),r.pts.forEach((o,c)=>{const l=8+3*Math.sin(i*6+c);n.beginPath();for(let h=0;h<=10;h++){const d=-Math.PI/2+h*Math.PI/5,u=h%2?l*.45:l;n.lineTo(o.x+Math.cos(d)*u,o.y+Math.sin(d)*u)}n.closePath(),n.fillStyle="#ffe14d",n.fill(),n.lineWidth=2,n.strokeStyle="#151715",n.stroke()}),n.font="900 15px Georgia",n.textAlign="center",n.lineWidth=4,n.strokeStyle="#151715",n.strokeText("СОЗВЕЗДИЕ «ЗАДИРА»",r.x,r.pts[5].y+34),n.fillStyle="#fff6c8",n.fillText("СОЗВЕЗДИЕ «ЗАДИРА»",r.x,r.pts[5].y+34),n.restore()}}function Uy(n,e,t){for(const i of A.geysers){const s=Math.min(1,i.age/.35),r=Math.min(1,(Ct.geyser.life-i.age)/.6),a=2.8*s*r,o=He({x:i.x,y:0,z:i.z}),c=He({x:i.x,y:a,z:i.z}),{u:l}=Gc({x:i.x,y:0,z:i.z}),h=l*.32;n.save(),n.beginPath();for(let d=0;d<=10;d++){const u=d/10,f=o.y+(c.y-o.y)*u;n.lineTo(o.x-h*(1-u*.35)+Math.sin(e*20+u*9)*h*.15,f)}for(let d=10;d>=0;d--){const u=d/10,f=o.y+(c.y-o.y)*u;n.lineTo(o.x+h*(1-u*.35)+Math.sin(e*23+u*7)*h*.15,f)}if(n.closePath(),n.fillStyle="#7fd0ff",n.globalAlpha=.9,n.fill(),n.globalAlpha=1,n.lineWidth=Math.max(2,t*.45),n.strokeStyle="#151715",n.stroke(),n.beginPath(),n.moveTo(o.x-h*.3,o.y),n.lineTo(c.x-h*.2,c.y),n.strokeStyle="#ffffff",n.lineWidth=h*.18,n.stroke(),n.beginPath(),n.ellipse(c.x,c.y,h*1.2,h*.45,0,0,Math.PI*2),n.fillStyle="#bfeaff",n.fill(),n.lineWidth=Math.max(2,t*.4),n.strokeStyle="#151715",n.stroke(),n.restore(),Ke()&&r>.3&&Math.random()<.7){const d=Pi.get();d.kind="drop",d.x=c.x,d.y=c.y,d.vx=(Math.random()-.5)*h*9,d.vy=-Math.random()*260,d.life=d.max=.8,d.size=Math.max(2,h*.09)}}}function Ny(n,e,t){for(const i of A.actors){if(i.kind!=="enemy"||!(i.blind||i.plunger||i.antic))continue;const s=tn.get(i.id);if(!s)continue;const r=cr(s),a={x:r.x+s.body.position.x,y:r.y-.5+s.body.position.y,z:r.z+.05},{p:o,u:c}=Gc(a),l=c*.26;if(n.save(),n.lineJoin="round",n.lineWidth=Math.max(2,t*.45),n.strokeStyle="#151715",i.blind){n.beginPath();for(let h=0;h<=14;h++){const d=h/14*Math.PI*2,u=l*(h%2?.82:1.05);n.lineTo(o.x+Math.cos(d)*u*1.2,o.y+Math.sin(d)*u)}n.closePath(),n.fillStyle="#fffaf0",n.fill(),n.stroke();for(const h of[-.5,.1,.6])n.beginPath(),n.ellipse(o.x+h*l,o.y+l*(1+(h+.5)*.3)+Math.sin(e*2+h)*2,l*.14,l*.3,0,0,Math.PI*2),n.fillStyle="#fffaf0",n.fill(),n.stroke();n.beginPath(),n.arc(o.x+l*.2,o.y-l*1.05,l*.2,0,Math.PI*2),n.fillStyle="#e8243c",n.fill(),n.stroke()}if(i.plunger){const h=Yn.plunger.image,d=l*3,u=d*.8;n.translate(o.x,o.y+l*.2),n.rotate(-.5+Math.sin(e*6)*.1),n.drawImage(h,-u/2,-d*.25,u,d),n.setTransform(n.getTransform())}if(n.restore(),n.save(),n.lineJoin="round",n.lineWidth=Math.max(2,t*.4),n.strokeStyle="#151715",i.antic==="sandwich"){const h=o.x+s.facing*l*1.1,d=o.y+l*.5+Math.sin(e*11)*l*.12;[["#e8b46a",.3],["#5fbf4a",.12],["#e8475f",.12],["#f7d36b",.12],["#e8b46a",.3]].forEach(([u,f],g)=>{n.beginPath(),n.roundRect(h-l*.9,d-l*.5+g*l*.22,l*1.8,l*f,l*.1),n.fillStyle=u,n.fill(),n.stroke()})}else if(i.antic==="selfie"){const h=o.x+s.facing*l*2.2,d=o.y-l*1.4;if(n.beginPath(),n.moveTo(o.x+s.facing*l*.6,o.y+l),n.lineTo(h,d+l*.5),n.lineWidth=Math.max(2,t*.5),n.stroke(),n.lineWidth=Math.max(2,t*.4),n.beginPath(),n.roundRect(h-l*.7,d-l*.5,l*1.4,l,l*.12),n.fillStyle="#2b2b2b",n.fill(),n.stroke(),n.beginPath(),n.arc(h-s.facing*l*.1,d,l*.32,0,Math.PI*2),n.fillStyle="#9fd3ff",n.fill(),n.stroke(),e%1.3<.12){n.beginPath();for(let f=0;f<=16;f++){const g=f/16*Math.PI*2,_=f%2?l*.6:l*1.7;n.lineTo(h+Math.cos(g)*_,d-l*.7+Math.sin(g)*_)}n.closePath(),n.fillStyle="#fffbd0",n.fill(),n.stroke()}}else if(i.antic==="dance"){n.font=`900 ${Math.round(l*1.3)}px Georgia`,n.textAlign="center";for(let h=0;h<3;h++){const d=e*2+h*2.1,u=o.x+Math.cos(d)*l*2.4,f=o.y-l*1.6+Math.sin(d*1.3)*l*.6;n.lineWidth=4,n.strokeText("♪♫♬"[h],u,f),n.fillStyle=["#ff6fa8","#5ef0c8","#ffd84a"][h],n.fillText("♪♫♬"[h],u,f)}}n.restore()}}function Ad(n){const e=document.createElement("canvas");e.width=e.height=256;const t=e.getContext("2d");if(t.lineJoin="round",t.lineWidth=9,t.strokeStyle="#151715",n==="piano"){t.fillStyle="#3a2418",t.beginPath(),t.roundRect(24,40,208,170,14),t.fill(),t.stroke(),t.fillStyle="#f4efe0",t.fillRect(34,130,188,44),t.strokeRect(34,130,188,44),t.fillStyle="#151715";for(let s=0;s<9;s++)t.fillRect(48+s*20,130,9,26);t.fillStyle="#5a3a26",t.fillRect(40,210,22,36),t.strokeRect(40,210,22,36),t.fillRect(194,210,22,36),t.strokeRect(194,210,22,36),t.fillStyle="#ffd84a",t.font="900 34px Georgia",t.fillText("♪",110,105)}else t.fillStyle="#4f7a64",t.beginPath(),t.roundRect(38,30,180,200,12),t.fill(),t.stroke(),t.strokeRect(56,48,144,164),t.fillStyle="#d9c46a",t.beginPath(),t.arc(128,130,34,0,Math.PI*2),t.fill(),t.stroke(),t.beginPath(),t.moveTo(128,130),t.lineTo(150,108),t.stroke(),t.fillStyle="#151715",t.font="900 26px Arial",t.textAlign="center",t.fillText("100 т",128,205);const i=new Ui(e);return i.colorSpace=gt,i}const Fy={piano:Ad("piano"),safe:Ad("safe")},as=new Map;function lc(n){const e=as.get(n);e&&(ds.remove(e.group),e.obj.geometry.dispose(),e.shadow.geometry.dispose(),e.obj.material.dispose(),e.shadow.material.dispose(),as.delete(n))}function ky(n){for(const e of A.hazards){let t=as.get(e.id);if(!t){const s=e.kind==="piano"?2.1:1.4,r=new Vt;r.position.set(e.x,0,e.z+.15);const a=new Ae(new qt(s,s).translate(0,s/2,0),new Tt({map:Fy[e.kind],alphaTest:.5,side:Gt})),o=new Ae(new cs(s*.55,28),new Tt({color:"#1c1c1c",polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-4}));o.rotation.x=-Math.PI/2,o.position.y=.06,r.add(o,a),ds.add(r),t={group:r,obj:a,shadow:o},as.set(e.id,t)}const i=Math.min(1,e.age/Rr.warn);t.obj.position.y=8.5*(1-i*i),t.obj.rotation.z=Math.sin(e.age*3)*.15*(1-i),t.shadow.scale.setScalar(.25+1.15*i)}for(const[e,t]of as)if(!A.hazards.some(i=>i.id===e)){if(t.wreck===void 0){lc(e);continue}t.wreck-=n,t.obj.position.y=0,t.obj.rotation.z=.08,t.obj.scale.set(1.2,.62,1),t.shadow.scale.setScalar(1.3),t.wreck<=0&&lc(e)}}function zy(n){document.querySelector(".iris")?.remove(),Ee("iris");const e=document.createElement("div");e.className="iris",e.setAttribute("role","status"),e.innerHTML=`<div>${n}</div>`,sn.append(e),Ce.dataset.milestone=n,setTimeout(()=>e.remove(),1500)}function cc(n){if(n.resolved=!0,n.brief){const s=Ce.getBoundingClientRect(),r=po(s,{x:n.spot.x*s.width,y:n.spot.y*s.height}),a=A.briefPunch(mo.hit(r.x,r.y));a==="tear"?(Ee("flop"),Ke()&&(vt=.06,Ii=.04)):a!=="protected"&&Ee("miss"),n.outcome=a==="tear"?"hit":a==="protected"?"protected":"miss",li(r),ct();return}n.shot=Uc(n.ray.origin,n.ray.direction,lr(),n.throwing?"punch":n.action);const e=typeof n.shot.id=="number"?n.shot.id:void 0,t=A.resolve(n.action,{kind:n.shot.kind,id:n.shot.id,point:n.shot.point});if(n.outcome=t,Et.push({action:n.action,outcome:t,kind:n.shot.kind,id:n.shot.id??null,staminaBefore:n.staminaBefore,staminaAfter:n.staminaAfter}),Et.length>20&&Et.shift(),t==="hit"||t==="throw"?Ee(t):t==="smash"||t==="grab"?Ee("grab"):t==="ult"?Ee("ding"):t==="cover"?Ee("cover"):t!=="protected"&&Ee("miss"),e!==void 0){const s=tn.get(e);s&&(s.flash=1)}if(t==="cover"&&typeof n.shot.id=="string"){const s=rr.get(n.shot.id);s&&(s.userData.wobble=1)}const i=t==="hit"||t==="throw"||t==="protected";Ke()&&(vt=i?.16:t==="cover"||t==="smash"?.08:.02,Ii=i?.06:t==="cover"?.035:0),li(He(n.shot.point)),ts(fn),ct()}const ns=new Set;let oo=-1,Oa=0;const Oy=14,Hn=.07,hc=11;let Ft=null;const lo=()=>A.mode==="play"&&yt[A.level].pan>0,Kn=new Bv(.35),Ht=Kn.cooldowns;let tt=null;function Ju(n,e){const t=mi(n,e);if(t){const s=xo(t);if(s.kind==="enemy"||s.kind==="thug"){const r=A.actors.find(a=>a.id===s.id);if(r)return r}}const i=lr();for(const s of A.actors){if(s.kind!=="enemy"&&s.kind!=="thug"||Wc(s)===null)continue;const r=i.find(o=>o.id===s.id);if(r){const o=[r.min.x,r.max.x].flatMap(u=>[r.min.y,r.max.y].flatMap(f=>[r.min.z,r.max.z].map(g=>He({x:u,y:f,z:g})))),c=Math.min(...o.map(u=>u.x))-8,l=Math.max(...o.map(u=>u.x))+8,h=Math.min(...o.map(u=>u.y))-8,d=Math.max(...o.map(u=>u.y))+8;if(n>=c&&n<=l&&e>=h&&e<=d)return s}const a=He(gn(A.level,s,Ke()));if(Math.hypot(n-a.x,e-a.y)<=42)return s}return null}function dc(n,e,t=!1){if(A.mode!=="play"||!A.held)return;const i=A.held,s=e??(t?null:Ju(n.x,n.y));if(!s&&!t)return;let r;if(s){const h=gn(A.level,s,Ke());r={x:h.x,y:h.y,z:h.z}}else{const h=mi(n.x,n.y);if(!h)return;Ti.setFromCamera(h,mt);const d=Ti.ray.at(10,new U);r={x:d.x,y:d.y,z:d.z}}const a=A.stamina;if(!A.spend("grab")){xn(),Ee("ui");return}Ti.setFromCamera(new Ue(.45,-.65),mt);const o=Ti.ray.at(1.7,new U),c=A.launch({x:o.x,y:o.y,z:o.z},r);Et.push({action:"grab",outcome:"throw",kind:"flight",id:c?.id??null,staminaBefore:a,staminaAfter:A.stamina}),Et.length>20&&Et.shift(),Ee("toss");const l=new U(r.x,r.y,r.z).project(mt);pt={action:"grab",throwing:!0,launched:!0,resolved:!0,spot:{x:(l.x+1)/2,y:(1-l.y)/2},ray:ao(new Ue(l.x,l.y)),shot:{kind:"whiff",distance:6,point:r},phase:0,held:i,staminaBefore:a,staminaAfter:A.stamina},xn(),ct()}function Qu(n,e,t,i){if(A.mode!=="play")return;const s=Ce.getBoundingClientRect(),r=Uu({x:n,y:e},{x:t,y:i},16);for(const a of r){const o=mi(a.x,a.y);if(!o)continue;if(A.briefing){const h=mo.hit(a.x,a.y);if(h==="flyer"){const d=performance.now()/1e3;if(!Ht.canHit("herald-flyer",d))break;const u=A.briefPunch("flyer");u==="tear"&&Ht.recordHit("herald-flyer",d),u==="tear"&&(Ee("flop"),Ke()&&(vt=.06,Ii=.04)),ct();break}else if(h==="herald"&&Ht.canHit("herald",A.elapsed)){Ht.recordHit("herald",A.elapsed),A.briefPunch("herald"),ct();break}continue}const c=xo(o),l=typeof c.id=="number"?c.id:void 0;if(c.kind==="enemy"||c.kind==="thug"){if(A.held!==null){if(l!==void 0&&Ht.canHit(l,A.elapsed)){Ht.recordHit(l,A.elapsed);const h=A.actors.find(d=>d.id===c.id);dc(a,h)}}else if(l!==void 0&&Ht.canHit(l,A.elapsed)&&A.spend("punch")){Ht.recordHit(l,A.elapsed);const h=A.resolve("punch",{kind:c.kind,id:c.id,point:c.point});if(Et.push({action:"punch",outcome:h,kind:c.kind,id:c.id??null,staminaBefore:A.stamina+24,staminaAfter:A.stamina}),Et.length>20&&Et.shift(),h==="hit"&&Ee("hit"),l!==void 0){const d=tn.get(l);d&&(d.flash=1)}Ke()&&(vt=.16,Ii=.06),Ci.push({key:"hit",x:a.x,y:a.y,size:wi(s.width,s.height).r*2.6,age:0}),li(He(c.point)),ts(fn),xn(),ct()}}else if(c.kind==="prop"){if(A.held===null){if(l!==void 0&&Ht.canHit(l,A.elapsed)&&A.spend("grab")){Ht.recordHit(l,A.elapsed);const h=A.resolve("grab",{kind:c.kind,id:c.id,point:c.point});Et.push({action:"grab",outcome:h,kind:c.kind,id:c.id??null,staminaBefore:A.stamina+Wr,staminaAfter:A.stamina}),Et.length>20&&Et.shift(),Ee("grab"),Ci.push({key:"grab",x:a.x,y:a.y,size:wi(s.width,s.height).r*2.2,age:0}),li(He(c.point)),ts(fn),xn(),ct()}}else if(l!==void 0&&Ht.canHit(l,A.elapsed)&&(dc(a,void 0,!0),Ht.recordHit(l,A.elapsed),A.spend("grab"))){const h=A.resolve("grab",{kind:c.kind,id:c.id,point:c.point});Et.push({action:"grab",outcome:h,kind:c.kind,id:c.id??null,staminaBefore:A.stamina+Wr,staminaAfter:A.stamina}),Et.length>20&&Et.shift(),Ee("grab"),Ci.push({key:"grab",x:a.x,y:a.y,size:wi(s.width,s.height).r*2.2,age:0}),li(He(c.point)),ts(fn),xn(),ct()}}else if(c.kind==="dog"||c.kind==="friend")l!==void 0&&Ht.canHit(l,A.elapsed)&&(Ht.recordHit(l,A.elapsed),A.resolve("punch",{kind:c.kind,id:c.id,point:c.point}),Ke()&&(vt=.14),li(He(c.point)),ts(fn),xn(),ct());else if(c.kind==="cover"&&typeof c.id=="string"&&Ht.canHit(c.id,A.elapsed)){if(Ht.recordHit(c.id,A.elapsed),A.gag(c.id,c.point)){const h=rr.get(c.id);h&&(h.userData.wobble=1)}li(He(c.point))}}}function By(){const n=Ce.getBoundingClientRect(),e=mt.position.z+2;return 2*(Math.tan(mt.fov*Math.PI/360)*e*mt.aspect)/Math.max(1,n.width)}function Hy(){let n=(ns.has("ArrowRight")||ns.has("KeyD")?1:0)-(ns.has("ArrowLeft")||ns.has("KeyA")?1:0);if(!n&&oo>=0){const e=Ce.getBoundingClientRect(),t=(oo-e.left)/Math.max(1,e.width);t<Hn?n=-(1-t/Hn):t>1-Hn&&(n=(t-(1-Hn))/Hn)}return n}function Gy(n){if(!lo()){Us=0,Oa=0;return}const e=Ft?.moved?0:Hy();Oa=e?Math.min(1,Oa+n*1.6):0;const t=e*hc*(.35+.65*Oa),i=1-Math.exp(-n*(e?6:10));Us+=(t-Us)*i,Math.abs(Us)>.01&&(rn=qa(A.level,rn+Us*n))}function Ws(n){const e=mi(n.clientX,n.clientY);e&&(Pn.copy(e),_o())}Ce.addEventListener("pointermove",n=>{if(!mi(n.clientX,n.clientY)){Jr();return}if(n.pointerType==="mouse"&&(oo=n.clientX),tt&&n.pointerId===tt.id){if(tt.prevX=tt.currentX,tt.prevY=tt.currentY,tt.currentX=n.clientX,tt.currentY=n.clientY,Kn.updatePos({x:n.clientX,y:n.clientY}),A.ultActive){Ws(n);return}if(Qu(tt.prevX,tt.prevY,tt.currentX,tt.currentY),Ws(n),lo()){const e=Ce.getBoundingClientRect(),t=(n.clientX-e.left)/Math.max(1,e.width);t<Hn?rn=qa(A.level,rn-(1-t/Hn)*hc*.02):t>1-Hn&&(rn=qa(A.level,rn+(t-(1-Hn))/Hn*hc*.02))}return}if(Ft&&n.pointerId===Ft.id){const e=n.clientX-Ft.x;if(!Ft.moved&&Math.hypot(e,n.clientY-Ft.y)>Oy&&lo()&&!A.ultActive&&(Ft.moved=!0),Ft.moved){rn=qa(A.level,Ft.pan-e*By());return}}(n.pointerType!=="touch"||A.ultActive)&&Ws(n)});function Jr(){oo=-1,tt=null,Ft=null,Kn.reset(),Ce.dataset.touching="false"}Ce.addEventListener("pointerleave",Jr);Ce.addEventListener("pointerdown",n=>{if(A.mode==="play"){if(!mi(n.clientX,n.clientY)){Jr();return}if(n.pointerType==="touch"){if(n.preventDefault(),tt){Kn.reset();return}if(A.touch=!0,document.documentElement.dataset.touch="true",tt={id:n.pointerId,currentX:n.clientX,currentY:n.clientY,prevX:n.clientX,prevY:n.clientY,moved:!1},Kn.begin(n.pointerId,{x:n.clientX,y:n.clientY}),Ce.dataset.touching="true",Ws(n),A.ultActive)return;Qu(n.clientX,n.clientY,n.clientX,n.clientY),xn();return}Ws(n),!A.ultActive&&$r(n.button===2?"grab":"punch")}});const Vy=n=>{if(!mi(n.clientX,n.clientY)){Jr();return}if(tt&&n.pointerId===tt.id){if(n.preventDefault(),A.mode==="play"&&A.held!==null&&!A.ultActive&&!A.briefing){const e=Ju(n.clientX,n.clientY);e&&dc({x:n.clientX,y:n.clientY},e)}tt=null,Kn.reset(),Ce.dataset.touching="false",xn()}if(Ft&&n.pointerId===Ft.id){const e=!Ft.moved;if(Ft=null,e&&A.mode!=="play")return;if(Ws(n),A.briefing){$r("punch");return}}};Ce.addEventListener("pointerup",Vy);Ce.addEventListener("pointercancel",n=>{tt&&n.pointerId===tt.id&&(tt=null,Kn.reset(),Ce.dataset.touching="false",xn()),Ft&&n.pointerId===Ft.id&&(Ft=null)});addEventListener("keyup",n=>ns.delete(n.code));addEventListener("blur",()=>{ns.clear(),Kn.reset(),tt=null,Ce.dataset.touching="false"});Ce.addEventListener("contextmenu",n=>n.preventDefault());addEventListener("keydown",n=>{A.mode==="play"&&(n.code==="F8"||n.code==="KeyW")&&(n.preventDefault(),A.winNow(),ct()),["ArrowLeft","ArrowRight","KeyA","KeyD"].includes(n.code)&&(ns.add(n.code),lo()&&n.preventDefault()),n.code==="Escape"&&!document.hidden&&(A.briefing&&A.mode==="play"?zu():(A.pause(),ct())),(n.code==="Space"||n.code==="KeyE")&&!(n.target instanceof HTMLButtonElement)&&(n.preventDefault(),n.repeat||$r(n.code==="Space"?"punch":"grab"))});function ef(){const n=Ou();for(const e of Bc)ui[e].visible=n===e}function Vc(){Kn.reset(),tt=null,Ce.dataset.touching="false",A.suspend(),ct()}document.addEventListener("visibilitychange",()=>{document.hidden&&Vc()});document.addEventListener("freeze",Vc);addEventListener("pagehide",Vc);function Kt(n,e){document.getElementById(n)?.addEventListener("click",()=>{Zr(),Ee("ui"),e()})}function Ba(n){if(A.reduced=!Ke(),A.start(n)){for(const e of go)e.visible=!0;Ur.length=0,rn=0,Us=0,ro="",Fr.length=0,Ci.length=0,Ir.clear(),ss.length=0,Pi.clear(),rs.length=0;for(const e of[...as.keys()])lc(e);document.querySelector(".iris")?.remove()}ct()}function Rd(){return'<div class="topline"><div class="brand"><span>↗</span> ДВОР ДА ДЕЛО</div><div class="tag">РУКИ ДЛИННЕЕ. ДЕНЬ ЛУЧШЕ.</div></div>'}function ct(){A.mode!=="play"&&(Kn.reset(),tt=null,Ce.dataset.touching="false");const n=A.mode;if(n!==ro&&(ro=n,Qs()),$v(Ou()),ef(),pi.dataset.mode=n,pi.dataset.level=String(A.level),n==="menu")sn.innerHTML=Rd()+'<section class="panel"><div class="eyebrow">Потасовка на резиновых руках</div><h1>ДЛИННЫЕ<br><em>РУКИ.</em></h1><p>Сначала бар, потом улица. Задиры прячутся за пианино, стойкой, бочками и заборами, высовываются и замахиваются. Тянись, бей, бросай всё, что под рукой. Пса с нимбом не трогай.</p><div class="buttons"><button id="start" class="primary">В БАР →</button><button id="how" class="secondary">КАК ИГРАТЬ?</button></div><div class="fine">Без беготни. Только ловкость рук.</div></section><div class="stamp">100%<b>РАЗМАХ</b>0% СЕРЬЁЗНОСТИ</div><div class="footer"><span>БАР «ДЛИННЫЕ РУКИ» · УЛИЦА</span><span>РЕКОРД: '+A.progress.best+" / РЕЗИНОВЫЕ РУКИ 1930-х</span></div>",Kt("start",()=>{A.mode="select",ct()}),Kt("how",()=>{const t=A.touch?"Веди рукой: по врагу — удар, по предмету — захват. С предметом проведи по врагу или отпусти над ним — бросок! Веди к краю улицы для движения камеры.":"ЛКМ / пробел — удар. ПКМ / E — хватай предмет, затем бросай: он летит сам, по дуге. Улица широкая: стрелки, A/D, мышь у края экрана — камера едет.";sn.innerHTML+='<div class="shade"></div><section class="panel centerpanel"><span class="note">ПАМЯТКА ДЛИННОРУКОГО</span><h2>Целься. Тянись.<br>Не трогай пса.</h2><p>Кулак летит ровно туда, куда ты целишься. Задиры прячутся за укрытиями — бей, когда высунутся. У каждого своя полоска здоровья. Промах тоже тратит силы.</p><p>'+t+' Пёс с нимбом — неприкосновенный.</p><button id="close" class="primary">ПОНЯТНО →</button></section>',Kt("close",ct)});else if(n==="select")sn.innerHTML=Rd()+'<div class="shade"></div><section class="panel centerpanel"><div class="eyebrow">Выбери свой размах</div><h2>КУДА<br>СЕГОДНЯ?</h2><div class="levels"><button id="level1" class="primary level"><span>01 / БАР «ДЛИННЫЕ РУКИ»<br><small>'+yt[1].goal+' посетителей · ведите себя прилично</small></span><b>↗</b></button><button id="level2" class="secondary level"><span>02 / УЛИЦА: ДВОР И ПЕРЕУЛОК<br><small>'+yt[2].goal+' задир · широкая панорама, крути камеру</small></span><b>↗</b></button></div><div class="buttons"><button id="back" class="secondary">← НАЗАД</button></div></section>',Kt("level1",()=>Ba(1)),Kt("level2",()=>Ba(2)),Kt("back",()=>{A.mode="menu",ct()});else{const t=A.touch?"":'<div class="controls"><button id="punch" class="primary">УДАР ↗<small>ЛКМ / ПРОБЕЛ · 24 СИЛЫ</small></button><button id="grab" class="secondary">ХВАТАЙ ◎<small>ПКМ / E · 12 СИЛ</small></button></div>';if(sn.innerHTML='<div class="hud"><div class="hudbox"><div id="hearts" class="hearts"></div><div class="energy"><i id="energy"></i></div><div class="small" style="margin-top:6px">СИЛЫ <span id="stamina"></span></div></div><div class="hudbox"><div class="small">ТВОЙ СЧЁТ</div><div id="score" class="score"></div><div id="combo" class="small"></div></div><button id="pause" class="pause" aria-label="Пауза">Ⅱ</button></div><div id="ultmeter" class="ultmeter" hidden><b>УЛЬТА</b><span><i id="ultfill"></i></span></div><div id="progress" class="progress"></div><div class="crosshair"></div><div id="message" class="message" role="status"></div>'+(yt[A.level].pan>0?'<div id="panL" class="panhint left" aria-hidden="true"><b>◀</b><span></span></div><div id="panR" class="panhint right" aria-hidden="true"><b>▶</b><span></span></div>':"")+t,Kt("punch",()=>$r("punch")),Kt("grab",()=>$r("grab")),Kt("pause",()=>{A.pause(),ct()}),n==="pause"||n==="result"){const i=n==="result",s=i&&A.won,r=i?fv(A):[{id:"resume",label:"ПРОДОЛЖИТЬ →",primary:!0},{id:"autowin",label:"АВТО-ПОБЕДА ⚡",primary:!1},{id:"select",label:"ВЫБОР УРОВНЯ",primary:!1}],a=s?A.level<Xr?"Открыта улица: двор и переулок на одной широкой панораме.":"Улица чиста. Бар открыт до утра.":"Ещё попытка — все сердца снова с тобой.";sn.innerHTML+='<div class="shade"></div><section class="panel centerpanel"><span class="note">'+(i?s?"ПОРЯДОК НАВЕДЁН":"БЫВАЕТ И ТАК":"РУКИ НА ПЕРЕРЫВЕ")+"</span><h2>"+(i?s?"КРАСИВО<br>РАЗОБРАЛСЯ!":"НЕ ТОТ<br>РАЗМАХ.":"ВЫДОХНИ.<br>ЗАДИРЫ ПОДОЖДУТ.")+"</h2><p>"+(i?"Счёт: <b>"+A.score+"</b> · Рекорд: "+A.progress.best+"<br>"+a:"Время остановилось. Ни один задира не ударит исподтишка.")+'</p><div class="buttons">'+r.map(o=>`<button id="${o.id}" class="${o.primary?"primary":"secondary"}">${o.label}</button>`).join("")+"</div></section>",Kt("resume",()=>{A.pause(),ct()}),Kt("autowin",()=>{A.pause(),A.winNow(),ct()}),Kt("next",()=>Ba(A.level+1)),Kt("retry",()=>Ba(A.level)),Kt("select",()=>{A.mode="select",ct()}),Kt("menu",()=>{A.mode="menu",ct()})}xn()}ts(fn),n!=="play"&&(sn.insertAdjacentHTML("beforeend",Wv()),Xv(ct));const e=sn.querySelector(".hud");if(e){const t=document.createElement("aside"),i=document.createElement("aside");t.className="game-rail rail-left",i.className="game-rail rail-right";const s=e.querySelectorAll(".hudbox");s[0]&&t.append(s[0]),s[1]&&i.append(s[1]);for(const r of["progress","ultmeter","panL"]){const a=document.getElementById(r);a&&t.append(a)}for(const r of["#pause","#message","#panR",".controls"]){const a=sn.querySelector(r);a&&i.append(a)}e.remove(),sn.prepend(t,i)}_o(),er(),sr()}function He(n){const e=new U(n.x,n.y,n.z).project(mt);return Pu(Ce.getBoundingClientRect(),e)}function Wc(n){const e=fo(n.kind,n.who),t=gn(A.level,n,Ke()),[i,s,r,a]=n.kind==="enemy"&&n.skin?Lc[n.skin]:e.inset;Ce.getBoundingClientRect();for(const o of[.8,.65,.9,.5,.35])for(const c of[.5,.38,.62]){const l={x:t.x-e.w/2+e.w*(i+(s-i)*c),y:t.y+e.h*(r+(a-r)*o),z:t.z},h=He(l);if(Hc(h.x,h.y)?.id===n.id)return{x:Math.round(h.x),y:Math.round(h.y)}}return null}let Cd="";function xn(){const e=A.actors.filter(f=>f.kind==="enemy").map(f=>(f.x<-.5?"слева":f.x>.5?"справа":"в центре")+(f.layer==="foreground"?" (за укрытием рядом)":f.layer==="background"?" (в окне)":" (за забором)"));Ce.setAttribute("aria-label",`Уровень ${A.level}. Задиры: ${e.join(", ")||"нет"}. ${A.touch?"Веди рукой: по врагу — удар, по предмету — захват. С предметом проведи по врагу или отпусти над ним — бросок.":"Наведи прицел, затем нажми Удар."}`);const t=JSON.stringify(A.mode==="play"?A.actors.map(f=>({id:f.id,kind:f.kind,layer:f.layer,frame:tn.get(f.id)?.frame??null,at:f.kind!=="enemy"||f.age>=.4?Wc(f):null})):[]);t!==Cd&&(Cd=t,Ce.dataset.aim=t);const i=(f,g)=>{const _=document.getElementById(f);_&&(_.textContent=g)};i("hearts","♥".repeat(Math.max(0,A.hp))+"♡".repeat(5-Math.max(0,A.hp))),i("stamina",Math.floor(A.stamina)+""),i("score",A.score.toString().padStart(5,"0")),i("combo",A.combo>1?"КОМБО ×"+A.combo:"ДАЙ ИМ РАЗМАХ"),i("progress",`${zc()?"БАР":"УЛИЦА"} / ${A.defeated} ИЗ ${A.goal} ЗАДИР`),Wy();const s=document.getElementById("ultmeter");if(s){s.hidden=!A.ultActive;const f=document.getElementById("ultfill");f&&(f.style.width=Math.round(A.ult.meter*100)+"%")}const r=A.mode==="play"&&A.held==="hat"?JSON.stringify(qy()):"";Ce.dataset.zone!==r&&(Ce.dataset.zone=r);const a=JSON.stringify({phase:A.ult.phase,meter:+A.ult.meter.toFixed(2),tip:Ln&&A.ult.phase==="pour"?zs(Ln.tip.x,Ln.tip.y):null});Ce.dataset.ult!==a&&(Ce.dataset.ult=a);const o=A.held??"";Ce.dataset.held!==o&&(Ce.dataset.held=o);const c=String(!!tt);Ce.dataset.touching!==c&&(Ce.dataset.touching=c);const l=Et.length>0?JSON.stringify(Et[Et.length-1]):"";Ce.dataset.strike!==l&&(Ce.dataset.strike=l);const h=String(A.flights.length);Ce.dataset.flights!==h&&(Ce.dataset.flights=h),A.touch&&(!A.message||A.message.includes("Прицел стоит")||A.message.includes("Двор ждёт"))&&(A.message=A.held?"Двойной тап рядом с врагом — бросок!":"Веди пальцем — бей задир! Через предмет — захват."),i("message",A.message);const d=document.getElementById("energy");d&&(d.style.width=A.stamina+"%");const u=document.getElementById("grab");u&&(u.innerHTML=A.held?"БРОСАЙ ↗<small>"+Nt[A.held].name.toUpperCase()+" · "+Ru("grab",!0,A.held)+" СИЛ</small>":"ХВАТАЙ ◎<small>ПКМ / E · "+Wr+" СИЛ</small>")}function Wy(){const n=yt[A.level].pan;if(!n)return;const e={L:{n:0,hot:!1},R:{n:0,hot:!1}};for(const t of A.actors){if(t.kind!=="enemy")continue;const i=Ce.getBoundingClientRect(),s=He(gn(A.level,t,Ke())).x,r=s<i.left?e.L:s>i.right?e.R:null;r&&(r.n++,t.deadline-t.age<js*1.6&&(r.hot=!0))}for(const[t,i,s]of[["panL",rn>-n+.05,e.L],["panR",rn<n-.05,e.R]]){const r=document.getElementById(t);if(!r)continue;const a=(i||s.n?"on":"")+(s.hot?" hot":"");r.dataset.state!==a&&(r.dataset.state=a,r.classList.toggle("on",i||s.n>0),r.classList.toggle("hot",s.hot));const o=s.n?String(s.n):"",c=r.querySelector("span");c&&c.textContent!==o&&(c.textContent=o)}}let bi=null,Pd=0;function er(){const n=document.querySelector(".controls button")?document.querySelector(".controls")?.getBoundingClientRect():null,e=Ce.getBoundingClientRect();bi=n&&n.width&&n.right>e.left&&n.left<e.right&&n.bottom>e.top&&n.top<e.bottom?{left:n.left-e.left,right:n.right-e.left,top:n.top-e.top}:null;const t=document.getElementById("message");if(bi&&t?.textContent){const i=document.createRange();i.selectNodeContents(t);const s=i.getBoundingClientRect();s.width&&(bi={left:Math.min(bi.left,s.left-18),right:Math.max(bi.right,s.right+18),top:Math.min(bi.top,s.top-10)})}}let Ln=null,Nr=0;const On=[],$i=[];function Xy(){const n=A.hatRest;n&&($n.position.set(n.x,es.max.y+ny,Math.min(n.z,es.max.z-.1)),$n.visible=!0),Ln=null,On.length=0;const e=document.createElement("div");e.className="ultflash",sn.append(e),setTimeout(()=>e.remove(),800),Ke()&&(vt=.25)}function qy(){const n=es;Ce.getBoundingClientRect();for(const e of[.55,.42,.68,.3,.8])for(const t of[.5,.3,.7]){const i=He({x:n.min.x+(n.max.x-n.min.x)*e,y:n.max.y,z:n.min.z+(n.max.z-n.min.z)*t}),s=Hc(i.x,i.y);if(s?.kind==="cover"&&s.point.y>=n.max.y-.001&&ic(A.level,s.id,s.point))return{x:Math.round(i.x),y:Math.round(i.y)}}return null}function Yy(n){const e=Ce.getBoundingClientRect();Vv(A.pouring&&A.mode==="play"),A.ult.phase==="none"&&($i.length||$n.visible)&&($i.length=0,On.length=0,$n.visible=!1,Ln=null,Nr=0);const t=document.getElementById("ulttitle"),i=A.ult.phase==="intro"?sv(A.ult.t):null;if(t&&t.dataset.who!==i?.who&&t.remove(),i&&!document.getElementById("ulttitle")&&sn.insertAdjacentHTML("beforeend",`<div id="ulttitle" class="intertitle dialog" role="status" data-who="${i.who}"><div><small>❦ ${i.who} ❦</small><b>${i.text}</b></div></div>`),A.ult.phase==="pour"&&!Ln){const h=ac(),d=h?{x:(h.x-e.left)/e.width,y:(h.y-e.top)/e.height}:{x:.5,y:.6};Ln=new rv(d),Pn.set(d.x*2-1,1-d.y*2),_o()}for(let h=On.length-1;h>=0;h--){const d=On[h];d.life-=n,d.vy+=2.4*n,d.x+=d.vx*n,d.y+=d.vy*n,d.life<=0&&On.splice(h,1)}if(!Ln||!A.pouring||A.mode!=="play")return;const s=Ln.update(n,{x:(Pn.x+1)/2,y:(1-Pn.y)/2}),r=new Map;let a=null;for(const h of[0,-.018,.018]){const d=xo(new Ue((s.x+h)*2-1,1-s.y*2));typeof d.id=="number"&&!r.has(d.id)&&r.set(d.id,d.kind),h===0&&(d.kind==="whiff"||d.point.y<.2)&&(a=d.point)}for(const[h,d]of r)(d==="enemy"||d==="dog")&&A.soak({kind:d,id:h},n);const o=ac(),c=po(e,{x:s.x*e.width,y:s.y*e.height}),l=!!o&&Math.hypot(c.x-o.x,(c.y-o.y)*1.6)<o.r;if(l&&(A.pourInHat(n),Nr=Math.min(1,Nr+n/(qi.length*.8))),Ce.dataset.inhat=String(l),Ke()&&Math.random()<.7&&On.push({x:s.x+(Math.random()-.5)*.02,y:s.y,vx:(Math.random()-.5)*.22,vy:-.18-Math.random()*.22,life:.22+Math.random()*.2}),On.length>40&&On.splice(0,On.length-40),a&&a.y<.2){const h=He(a),d=(h.x-e.left)/e.width,u=(h.y-e.top)/e.height,f=Math.min(e.width,e.height),g=$i.find(_=>Math.hypot((_.x-d)*e.width,(_.y-u)*e.height)<f*.06);g?g.r=Math.min(g.max,g.r+n*f*.08):($i.push({x:d,y:u,r:f*.015,max:f*(.07+Math.random()*.04)}),$i.length>14&&$i.shift())}}const Fr=[];function cr(n){const e=n.skin?Lc[n.skin][3]:Wt.enemy.inset[3];return{x:n.group.position.x,y:n.group.position.y+Wt.enemy.h*e+.16,z:n.group.position.z}}function Er(n,e,t,i,s,r){n.beginPath(),n.roundRect(e,t,i,s,r)}function $y(n,e,t){for(const i of A.actors){if(i.kind!=="enemy"||!i.maxHp)continue;const s=tn.get(i.id),r=_v(i,A.elapsed);if(!s||r<=0)continue;const a=cr(s),o=He(a),c=He({...a,x:a.x+1}),l=Math.abs(c.x-o.x),h=kn.clamp(l*.95,36,150),d=Math.max(8,h*.16),u=o.x-h/2,f=o.y-d,g=(i.hp??0)/i.maxHp;s.ghost=Math.max(g,(s.ghost??1)-e*.9),n.save(),n.globalAlpha=r,Er(n,u,f,h,d,d/2),n.fillStyle="#260a0a",n.fill(),s.ghost>g&&(Er(n,u,f,h*s.ghost,d,d/2),n.fillStyle="#ff8585",n.fill()),Er(n,u,f,Math.max(d,h*g),d,d/2),n.fillStyle=g>.6?"#e61e1e":g>.3?"#cc1414":"#990c0c",g>0&&n.fill(),s.flash>.3&&(Er(n,u,f,h,d,d/2),n.fillStyle=`rgba(255,255,255,${(s.flash-.3)*.9})`,n.fill()),n.strokeStyle="#180404",n.lineWidth=Math.max(1.5,t*.3);for(let _=10;_<i.maxHp;_+=10){const m=u+h*_/i.maxHp;n.beginPath(),n.moveTo(m,f+2),n.lineTo(m,f+d-2),n.stroke()}Er(n,u,f,h,d,d/2),n.lineWidth=Math.max(2,t*.45),n.strokeStyle="#180404",n.stroke(),n.beginPath(),n.moveTo(u+d*.6,f+d*.3),n.lineTo(u+h*Math.max(.1,g)-d*.4,f+d*.3),n.strokeStyle="rgba(255,200,200,.6)",n.lineWidth=Math.max(1,d*.16),n.lineCap="round",n.stroke(),n.restore()}for(let i=Fr.length-1;i>=0;i--){const s=Fr[i];if(s.age+=e,s.age>1){Fr.splice(i,1);continue}const r=He({x:s.x,y:s.y+s.age*.7,z:s.z}),a=He({x:s.x+1,y:s.y,z:s.z}),o=Math.abs(a.x-r.x),c=s.age<.12?.6+s.age/.12*.6:1.2-Math.min(.2,s.age-.12),l=kn.clamp(o*(s.big?.55:.42),16,64)*c;n.save(),n.globalAlpha=Math.min(1,(1-s.age)*2.5),n.font=`900 ${l}px Arial`,n.textAlign="center",n.textBaseline="bottom",n.lineJoin="round",n.lineWidth=Math.max(3,l*.16),n.strokeStyle="#151715",n.strokeText("−"+s.amount,r.x+(s.big?0:l*.3),r.y-4),n.fillStyle=s.big?"#ff6b3d":"#ffd84a",n.fillText("−"+s.amount,r.x+(s.big?0:l*.3),r.y-4),n.restore()}}const wr="#ffd400",Dd="#fff6b8";function Ky(n,e,t,i,s){const r=Math.min(e,t),a=Ce.getBoundingClientRect(),o=ac(),c=o?{...o,x:o.x-a.left,y:o.y-a.top}:null;c&&Nr>0&&(n.beginPath(),n.ellipse(c.x,c.y+c.r*.05,c.r*(.55+.4*Nr),c.r*.22,0,0,Math.PI*2),n.fillStyle=wr,n.fill(),n.lineWidth=Math.max(1.5,s*.35),n.strokeStyle="#151715",n.stroke());for(const l of $i)n.beginPath(),n.ellipse(l.x*e,l.y*t,l.r,l.r*.3,0,0,Math.PI*2),n.fillStyle=wr,n.globalAlpha=.9,n.fill(),n.globalAlpha=1,n.lineWidth=Math.max(2,s*.45),n.strokeStyle="#151715",n.stroke(),n.beginPath(),n.ellipse(l.x*e-l.r*.25,l.y*t-l.r*.08,l.r*.35,l.r*.07,0,0,Math.PI*2),n.fillStyle=Dd,n.fill();if(Ln&&A.ult.phase==="pour"){const l=Ln.points().map(m=>({x:m.x*e,y:m.y*t})),h=l.length-1,d=[],u=[],f=[],g=Ke()?1:0;for(let m=0;m<=h;m++){const p=l[Math.max(0,m-1)],w=l[Math.min(h,m+1)],E=w.x-p.x,S=w.y-p.y,R=Math.hypot(E,S)||1,b=-S/R,C=E/R,L=m/h,y=r*(.068*(1-L)+.03*L)*(1+g*.12*Math.sin(L*9-i*17)),v=g*Math.sin(L*15-i*24)*r*.007*(.3+L),P=l[m].x+b*v,F=l[m].y+C*v;f.push({x:P,y:F,w:y,nx:b,ny:C}),d.push({x:P+b*y/2,y:F+C*y/2}),u.push({x:P-b*y/2,y:F-C*y/2})}n.beginPath(),d.forEach((m,p)=>p?n.lineTo(m.x,m.y):n.moveTo(m.x,m.y));for(let m=h;m>=0;m--)n.lineTo(u[m].x,u[m].y);n.closePath(),n.fillStyle=wr,n.fill(),n.lineJoin="round",n.lineWidth=Math.max(2,s*.55),n.strokeStyle="#151715",n.stroke(),n.beginPath();for(let m=1;m<h;m++){const p=f[m],w=p.x+p.nx*p.w*.2,E=p.y+p.ny*p.w*.2;m===1?n.moveTo(w,E):n.lineTo(w,E)}n.lineCap="round",n.lineWidth=r*.007,n.strokeStyle=Dd,n.stroke(),n.fillStyle="#ffffff";for(let m=0;m<6;m++){const p=(i*1.7+m/6)%1,w=Math.min(h-1,Math.floor(p*h)),E=f[w];n.beginPath(),n.ellipse(E.x-E.nx*E.w*.15,E.y-E.ny*E.w*.15,E.w*.16,E.w*.07,Math.atan2(E.ny,E.nx)+Math.PI/2,0,Math.PI*2),n.fill()}const _=l[h];n.strokeStyle="#151715",n.lineWidth=Math.max(2,s*.4),n.fillStyle=wr;for(let m=0;m<5;m++){const p=-Math.PI/2+(m-2)*.45+(g?Math.sin(i*30+m)*.1:0),w=r*.02,E=r*(.045+.012*Math.sin(i*40+m*2)*g);n.beginPath(),n.moveTo(_.x+Math.cos(p)*w,_.y+Math.sin(p)*w),n.lineTo(_.x+Math.cos(p)*E,_.y+Math.sin(p)*E),n.stroke()}}for(const l of On)n.beginPath(),n.arc(l.x*e,l.y*t,r*.0045+1,0,Math.PI*2),n.fillStyle=wr,n.fill(),n.lineWidth=1.5,n.strokeStyle="#151715",n.stroke()}let Ld=0;const tf={left:{mode:"rest",x:0,y:0,open:!1,item:""},right:{mode:"rest",x:0,y:0,open:!1,item:""}};function jy(n){const e=Ce.getBoundingClientRect(),t=e.width,i=e.height,s=py,r=Vs.width/Math.max(1,t),a=Math.max(0,Math.min(.05,n-Ld));if(Ld=n,s.setTransform(1,0,0,1,0,0),s.clearRect(0,0,Vs.width,Vs.height),A.mode!=="play"&&A.mode!=="pause")return;s.setTransform(r,0,0,r,0,0),zc()&&Ky(s,t,i,n,wi(t,i).ink);const{ink:o,rim:c}=wi(t,i),l=A.briefing?null:bi,h=pt,d=h?h.phase:1;s.save(),s.translate(-e.left,-e.top),Uy(s,n,o),Ny(s,n,o),$y(s,a,o),Ay(s,a,o),Iy(s,a,o,n),s.restore();const u=h?{x:h.spot.x*t,y:h.spot.y*i}:{x:0,y:0},f=h&&d<1?h.throwing?1:pd(u,t):0;for(let g=Ci.length-1;g>=0;g--){const _=Ci[g];if(_.age+=a,_.age>.5){Ci.splice(g,1);continue}const m=_.age/.5,p=_.size*(m<.15?.6+m*4:1.2-m*.2);s.save(),s.globalAlpha=Math.max(0,1-Math.max(0,m-.5)*2),s.translate(_.x-e.left,_.y-e.top),s.drawImage(ka[_.key]??ka.miss,-p/2,-p/2,p,p),s.restore()}for(let g=Ir.live.length-1;g>=0;g--){const _=Ir.live[g];if(_.life-=a,_.life<=0){Ir.release(g);continue}_.vy+=i*2.2*a,_.x+=_.vx*a,_.y+=_.vy*a,_.rot+=_.vr*a,s.save(),s.translate(_.x-e.left,_.y-e.top),s.rotate(_.rot),s.globalAlpha=Math.min(1,_.life*3),s.beginPath(),s.moveTo(-_.size,_.size*.6),s.lineTo(0,-_.size),s.lineTo(_.size*.8,_.size*.4),s.closePath(),s.fillStyle=_.color,s.fill(),s.lineWidth=Math.max(1.5,o*.3),s.strokeStyle="#151715",s.stroke(),s.restore()}if(h&&h.resolved&&!h.throwing&&d<.8){const g=(d-Cr)/(.8-Cr),_=h.outcome&&ka[h.outcome]?h.outcome:"miss",m=(_==="miss"?.9:1.6)*wi(t,i).r*2*Math.max(.5,Math.min(1.2,6.5/Math.max(3,h.shot.distance)))*(g<.2?.6+g*3:1.2-g*.2);s.save(),s.globalAlpha=Math.max(0,1-Math.max(0,g-.5)*2),s.translate(u.x,u.y),s.rotate(-h.ray.direction.x*.4),s.drawImage(ka[_],-m/2,-m/2,m,m),s.restore()}for(const g of[-1,1]){const _=(Ke()?Math.sin(n*2.4+(g>0?0:1.3))*i*.006:0)+(A.briefing?wi(t,i).r*1.7:0);let m=Fc(g,t,i,l,_),p="rest";if(h&&g===f){const R=ju(h);m=h.throwing?ol(g,t,i,{x:R.x-e.left,y:R.y-e.top},d,Yr,{throwing:!0,avoid:l}):ol(g,t,i,u,d,{arrive:Cr,release:gy},{depth:6.5/Math.max(3,h.shot.distance),grab:h.action==="grab",avoid:l}),p=h.throwing?"throw":"swing"}else if(tt&&!h){const R=A.held?-1:pd({x:tt.currentX-e.left,y:tt.currentY-e.top},t);if(g===R){const b={x:tt.currentX-e.left,y:tt.currentY-e.top};m=ol(g,t,i,b,.5,{arrive:.1,release:.9},{depth:1,avoid:null}),p="touch"}}const w=A.held&&g===1&&!(h&&h.throwing&&f===1);if(w&&(m={...m,open:!0}),h&&g===f&&d>.08&&d<Cr&&Ke()){const R=m.glove.x-m.ctrl.x,b=m.glove.y-m.ctrl.y,C=Math.hypot(R,b)||1,L=R/C,y=b/C;s.strokeStyle="#151715",s.lineWidth=Math.max(2,o*.5),s.lineCap="round";for(const v of[-1,1]){const P=m.w1/2+m.r*.45,F=-y*v*P,O=L*v*P;s.beginPath(),s.moveTo(m.glove.x-L*m.r*2.4+F,m.glove.y-y*m.r*2.4+O),s.lineTo(m.glove.x-L*m.r*1.25+F,m.glove.y-y*m.r*1.25+O),s.stroke()}}kv(s,m,o,c);const E=w?A.held:h&&h.throwing&&h.held&&g===f&&!h.launched?h.held:null,S=tf[g===1?"right":"left"];if(S.mode=p,S.x=m.glove.x,S.y=m.glove.y,S.open=m.open,S.item=E??"",E){const R=Yn[E].image,b=m.r*2.2,C=b*Wt[E].w/Wt[E].h;s.save(),s.translate(m.glove.x,m.glove.y-m.r*.5),s.rotate(Ke()?Math.sin(n*2)*.07:0),s.drawImage(R,-C/2,-b*.8,C,b),s.restore()}}My(s,t,i,a,o)}const Zy=new em;let fn=0;const Ns=new U;function nf(){requestAnimationFrame(nf);const n=Math.min(Zy.getDelta(),.05)*_y;A.mode!=="pause"&&(fn+=n),Ii>0?Ii-=n:A.tick(n),A.mode!==ro&&ct();{const e=A.mode==="play"||A.mode==="pause"?A.briefing:null;mo.sync(e,A.mode==="pause");const t=String(!!e);pi.dataset.brief!==t&&(pi.dataset.brief=t)}if(Yy(A.mode==="play"?n:0),A.events.length&&li(),ef(),Ed>A.hp&&Ke()){const e=document.createElement("div");e.className="flash",sn.append(e),setTimeout(()=>e.remove(),400)}Ed=A.hp,ts(fn),Gy(A.mode==="play"?n:0),A.mode==="play"&&(xn(),(Pd-=n)<=0&&(Pd=.25,er())),pt&&A.mode!=="pause"&&(pt.phase=Math.min(1,pt.phase+n/(pt.throwing?Yr.duration:my)),pt.throwing&&!pt.launched&&pt.phase>=Yr.arrive?Zu(pt):!pt.throwing&&!pt.resolved&&pt.phase>=Cr&&cc(pt),pt.phase>=1&&(pt=null)),A.mode!=="play"&&A.mode!=="pause"&&(pt=null),by(n),Sy(),Ty(n,fn),ky(A.mode==="play"?n:0),fy(n,fn);for(const e of rr.values()){const t=e.userData.wobble;t&&(e.scale.set(1+Math.sin(t*30)*t*.05,1-Math.sin(t*30)*t*.04,1),e.userData.wobble=Math.max(0,t-n*3))}if(Ke())for(const e of Vu)e.rotation.z=Math.sin(fn*1.7+e.userData.sway)*.08;if(Ke())for(const e of Wu)e.rotation.y=e.userData.swing*(.35+.3*Math.sin(fn*2.3+e.userData.swing));Jy(n);{const e=ai.depth,t=Math.tan(mt.fov*Math.PI/360)*e*mt.aspect;A.cam={x:Ns.x||rn,z:mt.position.z,half:Math.max(1.2,t-.6)}}Fn.info.reset(),Fn.clear(),Fn.render(Sn,mt),jy(fn)}function Jy(n){if(A.mode==="menu"||A.mode==="select"){yd(0);return}const{w:e,h:t}=xy(),i=yu(e,t,rn);yd(rn),Ns.set(i.position.x,i.position.y,i.position.z),vt>0?(vt=Math.max(0,vt-n*.9),mt.position.set(Ns.x+(Math.random()-.5)*vt,Ns.y+(Math.random()-.5)*vt,Ns.z)):mt.position.copy(Ns),mt.updateMatrixWorld()}Qs();sr();ct();nf();Object.assign(window,{__interaction:{actors:()=>{const n=lr();return A.actors.map(e=>{const t=n.find(a=>a.id===e.id),i=t?He({x:(t.min.x+t.max.x)/2,y:(t.min.y+t.max.y)/2,z:(t.min.z+t.max.z)/2}):null,s=t?[t.min.x,t.max.x].flatMap(a=>[t.min.y,t.max.y].flatMap(o=>[t.min.z,t.max.z].map(c=>He({x:a,y:o,z:c})))):[],r=t?{x:Math.min(...s.map(a=>a.x)),y:Math.min(...s.map(a=>a.y)),width:Math.max(...s.map(a=>a.x))-Math.min(...s.map(a=>a.x)),height:Math.max(...s.map(a=>a.y))-Math.min(...s.map(a=>a.y))}:null;return{id:e.id,kind:e.kind,at:Wc(e),center:He(gn(A.level,e,Ke())),targetCenter:i,bounds:r,world:gn(A.level,e,Ke())}})},shot(n,e){const t=Hc(n,e);return{kind:t?.kind??"outside",id:t?.id??null}},arms:()=>tf,flights:()=>A.flights.map(n=>({id:n.id,kind:n.kind,pos:{...n.pos},vel:{...n.vel},age:n.age,struck:n.struck}))}});
