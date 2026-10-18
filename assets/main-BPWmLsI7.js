import"./index-CGQ8xNND.js";const Nl="180",Ud=0,Tc=1,Nd=2,ru=1,au=2,qn=3,_i=0,en=1,zt=2,pi=0,Ss=1,wc=2,Ac=3,Rc=4,Fd=5,Ui=100,zd=101,Od=102,kd=103,Bd=104,Hd=200,Gd=201,Vd=202,Wd=203,Oo=204,ko=205,Xd=206,qd=207,Yd=208,$d=209,Kd=210,Zd=211,jd=212,Jd=213,Qd=214,Bo=0,Ho=1,Go=2,Rs=3,Vo=4,Wo=5,Xo=6,qo=7,ou=0,ef=1,tf=2,mi=0,nf=1,sf=2,rf=3,af=4,of=5,lf=6,cf=7,lu=300,Cs=301,Ps=302,Yo=303,$o=304,ka=306,ba=1e3,Fi=1001,Ko=1002,Tn=1003,hf=1004,Ir=1005,Ln=1006,$a=1007,zi=1008,Nn=1009,cu=1010,hu=1011,gr=1012,Fl=1013,Wi=1014,ei=1015,Ar=1016,zl=1017,Ol=1018,_r=1020,uu=35902,du=35899,fu=1021,pu=1022,bn=1023,xr=1026,vr=1027,mu=1028,kl=1029,gu=1030,Bl=1031,Hl=1033,ga=33776,_a=33777,xa=33778,va=33779,Zo=35840,jo=35841,Jo=35842,Qo=35843,el=36196,tl=37492,nl=37496,il=37808,sl=37809,rl=37810,al=37811,ol=37812,ll=37813,cl=37814,hl=37815,ul=37816,dl=37817,fl=37818,pl=37819,ml=37820,gl=37821,_l=36492,xl=36494,vl=36495,yl=36283,Ml=36284,Sl=36285,El=36286,uf=3200,_u=3201,xu=0,df=1,fi="",ht="srgb",Ds="srgb-linear",Ta="linear",Qe="srgb",ji=7680,Cc=519,ff=512,pf=513,mf=514,vu=515,gf=516,_f=517,xf=518,vf=519,bl=35044,Pc="300 es",In=2e3,wa=2001;class Fs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const Ut=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Dc=1234567;const Es=Math.PI/180,yr=180/Math.PI;function ti(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ut[n&255]+Ut[n>>8&255]+Ut[n>>16&255]+Ut[n>>24&255]+"-"+Ut[e&255]+Ut[e>>8&255]+"-"+Ut[e>>16&15|64]+Ut[e>>24&255]+"-"+Ut[t&63|128]+Ut[t>>8&255]+"-"+Ut[t>>16&255]+Ut[t>>24&255]+Ut[i&255]+Ut[i>>8&255]+Ut[i>>16&255]+Ut[i>>24&255]).toLowerCase()}function We(n,e,t){return Math.max(e,Math.min(t,n))}function Gl(n,e){return(n%e+e)%e}function yf(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function Mf(n,e,t){return n!==e?(t-n)/(e-n):0}function cr(n,e,t){return(1-t)*n+t*e}function Sf(n,e,t,i){return cr(n,e,1-Math.exp(-t*i))}function Ef(n,e=1){return e-Math.abs(Gl(n,e*2)-e)}function bf(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Tf(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function wf(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Af(n,e){return n+Math.random()*(e-n)}function Rf(n){return n*(.5-Math.random())}function Cf(n){n!==void 0&&(Dc=n);let e=Dc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Pf(n){return n*Es}function Df(n){return n*yr}function Lf(n){return(n&n-1)===0&&n!==0}function If(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Uf(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Nf(n,e,t,i,s){const r=Math.cos,a=Math.sin,o=r(t/2),c=a(t/2),l=r((e+i)/2),h=a((e+i)/2),u=r((e-i)/2),d=a((e-i)/2),f=r((i-e)/2),m=a((i-e)/2);switch(s){case"XYX":n.set(o*h,c*u,c*d,o*l);break;case"YZY":n.set(c*d,o*h,c*u,o*l);break;case"ZXZ":n.set(c*u,c*d,o*h,o*l);break;case"XZX":n.set(o*h,c*m,c*f,o*l);break;case"YXY":n.set(c*f,o*h,c*m,o*l);break;case"ZYZ":n.set(c*m,c*f,o*h,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Sn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function je(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const An={DEG2RAD:Es,RAD2DEG:yr,generateUUID:ti,clamp:We,euclideanModulo:Gl,mapLinear:yf,inverseLerp:Mf,lerp:cr,damp:Sf,pingpong:Ef,smoothstep:bf,smootherstep:Tf,randInt:wf,randFloat:Af,randFloatSpread:Rf,seededRandom:Cf,degToRad:Pf,radToDeg:Df,isPowerOfTwo:Lf,ceilPowerOfTwo:If,floorPowerOfTwo:Uf,setQuaternionFromProperEuler:Nf,normalize:je,denormalize:Sn};class De{constructor(e=0,t=0){De.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(We(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(We(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Rr{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let c=i[s+0],l=i[s+1],h=i[s+2],u=i[s+3];const d=r[a+0],f=r[a+1],m=r[a+2],_=r[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=d,e[t+1]=f,e[t+2]=m,e[t+3]=_;return}if(u!==_||c!==d||l!==f||h!==m){let g=1-o;const p=c*d+l*f+h*m+u*_,T=p>=0?1:-1,E=1-p*p;if(E>Number.EPSILON){const R=Math.sqrt(E),w=Math.atan2(R,p*T);g=Math.sin(g*w)/R,o=Math.sin(o*w)/R}const S=o*T;if(c=c*g+d*S,l=l*g+f*S,h=h*g+m*S,u=u*g+_*S,g===1-o){const R=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=R,l*=R,h*=R,u*=R}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,s,r,a){const o=i[s],c=i[s+1],l=i[s+2],h=i[s+3],u=r[a],d=r[a+1],f=r[a+2],m=r[a+3];return e[t]=o*m+h*u+c*f-l*d,e[t+1]=c*m+h*d+l*u-o*f,e[t+2]=l*m+h*f+o*d-c*u,e[t+3]=h*m-o*u-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(i/2),h=o(s/2),u=o(r/2),d=c(i/2),f=c(s/2),m=c(r/2);switch(a){case"XYZ":this._x=d*h*u+l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u-d*f*m;break;case"YXZ":this._x=d*h*u+l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u+d*f*m;break;case"ZXY":this._x=d*h*u-l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u-d*f*m;break;case"ZYX":this._x=d*h*u-l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u+d*f*m;break;case"YZX":this._x=d*h*u+l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u-d*f*m;break;case"XZY":this._x=d*h*u-l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u+d*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=i+o+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(a-s)*f}else if(i>o&&i>u){const f=2*Math.sqrt(1+i-o-u);this._w=(h-c)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+l)/f}else if(o>u){const f=2*Math.sqrt(1+o-i-u);this._w=(r-l)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+u-i-o);this._w=(a-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(We(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=i*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-i*l,this._z=r*h+a*l+i*c-s*o,this._w=a*h-i*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,a=this._w;let o=a*e._w+i*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=s,this._z=r,this;const c=1-o*o;if(c<=Number.EPSILON){const f=1-t;return this._w=f*a+t*this._w,this._x=f*i+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,o),u=Math.sin((1-t)*h)/l,d=Math.sin(t*h)/l;return this._w=a*u+this._w*d,this._x=i*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,t=0,i=0){I.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Lc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Lc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*i),h=2*(o*t-r*s),u=2*(r*i-a*t);return this.x=t+c*l+a*u-o*h,this.y=i+c*h+o*l-r*u,this.z=s+c*u+r*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this.z=We(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this.z=We(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(We(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-i*c,this.z=i*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ka.copy(this).projectOnVector(e),this.sub(Ka)}reflect(e){return this.sub(Ka.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(We(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ka=new I,Lc=new Rr;class ze{constructor(e,t,i,s,r,a,o,c,l){ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,c,l)}set(e,t,i,s,r,a,o,c,l){const h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=c,h[6]=i,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],h=i[4],u=i[7],d=i[2],f=i[5],m=i[8],_=s[0],g=s[3],p=s[6],T=s[1],E=s[4],S=s[7],R=s[2],w=s[5],C=s[8];return r[0]=a*_+o*T+c*R,r[3]=a*g+o*E+c*w,r[6]=a*p+o*S+c*C,r[1]=l*_+h*T+u*R,r[4]=l*g+h*E+u*w,r[7]=l*p+h*S+u*C,r[2]=d*_+f*T+m*R,r[5]=d*g+f*E+m*w,r[8]=d*p+f*S+m*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-i*r*h+i*o*c+s*r*l-s*a*c}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=h*a-o*l,d=o*c-h*r,f=l*r-a*c,m=t*u+i*d+s*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/m;return e[0]=u*_,e[1]=(s*l-h*i)*_,e[2]=(o*i-s*a)*_,e[3]=d*_,e[4]=(h*t-s*c)*_,e[5]=(s*r-o*t)*_,e[6]=f*_,e[7]=(i*c-l*t)*_,e[8]=(a*t-i*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Za.makeScale(e,t)),this}rotate(e){return this.premultiply(Za.makeRotation(-e)),this}translate(e,t){return this.premultiply(Za.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Za=new ze;function yu(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Mr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Ff(){const n=Mr("canvas");return n.style.display="block",n}const Ic={};function Sr(n){n in Ic||(Ic[n]=!0,console.warn(n))}function zf(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}const Uc=new ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Nc=new ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Of(){const n={enabled:!0,workingColorSpace:Ds,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Qe&&(s.r=ni(s.r),s.g=ni(s.g),s.b=ni(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Qe&&(s.r=bs(s.r),s.g=bs(s.g),s.b=bs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===fi?Ta:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Sr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Sr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Ds]:{primaries:e,whitePoint:i,transfer:Ta,toXYZ:Uc,fromXYZ:Nc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ht},outputColorSpaceConfig:{drawingBufferColorSpace:ht}},[ht]:{primaries:e,whitePoint:i,transfer:Qe,toXYZ:Uc,fromXYZ:Nc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ht}}}),n}const Ye=Of();function ni(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function bs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Ji;class kf{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Ji===void 0&&(Ji=Mr("canvas")),Ji.width=e.width,Ji.height=e.height;const s=Ji.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Ji}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Mr("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ni(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ni(t[i]/255)*255):t[i]=ni(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Bf=0;class Vl{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Bf++}),this.uuid=ti(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(ja(s[a].image)):r.push(ja(s[a]))}else r=ja(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function ja(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?kf.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Hf=0;const Ja=new I;class Lt extends Fs{constructor(e=Lt.DEFAULT_IMAGE,t=Lt.DEFAULT_MAPPING,i=Fi,s=Fi,r=Ln,a=zi,o=bn,c=Nn,l=Lt.DEFAULT_ANISOTROPY,h=fi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Hf++}),this.uuid=ti(),this.name="",this.source=new Vl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new De(0,0),this.repeat=new De(1,1),this.center=new De(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ja).x}get height(){return this.source.getSize(Ja).y}get depth(){return this.source.getSize(Ja).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==lu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ba:e.x=e.x-Math.floor(e.x);break;case Fi:e.x=e.x<0?0:1;break;case Ko:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ba:e.y=e.y-Math.floor(e.y);break;case Fi:e.y=e.y<0?0:1;break;case Ko:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Lt.DEFAULT_IMAGE=null;Lt.DEFAULT_MAPPING=lu;Lt.DEFAULT_ANISOTROPY=1;class et{constructor(e=0,t=0,i=0,s=1){et.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],m=c[9],_=c[2],g=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(m+g)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const E=(l+1)/2,S=(f+1)/2,R=(p+1)/2,w=(h+d)/4,C=(u+_)/4,P=(m+g)/4;return E>S&&E>R?E<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(E),s=w/i,r=C/i):S>R?S<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),i=w/s,r=P/s):R<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),i=C/r,s=P/r),this.set(i,s,r,t),this}let T=Math.sqrt((g-m)*(g-m)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(T)<.001&&(T=1),this.x=(g-m)/T,this.y=(u-_)/T,this.z=(d-h)/T,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this.z=We(this.z,e.z,t.z),this.w=We(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this.z=We(this.z,e,t),this.w=We(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(We(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Gf extends Fs{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ln,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new et(0,0,e,t),this.scissorTest=!1,this.viewport=new et(0,0,e,t);const s={width:e,height:t,depth:i.depth},r=new Lt(s);this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:Ln,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Vl(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Xi extends Gf{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Mu extends Lt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=Fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Vf extends Lt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=Fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class zs{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(gn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(gn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=gn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,gn):gn.fromBufferAttribute(r,a),gn.applyMatrix4(e.matrixWorld),this.expandByPoint(gn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ur.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ur.copy(i.boundingBox)),Ur.applyMatrix4(e.matrixWorld),this.union(Ur)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,gn),gn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Gs),Nr.subVectors(this.max,Gs),Qi.subVectors(e.a,Gs),es.subVectors(e.b,Gs),ts.subVectors(e.c,Gs),ai.subVectors(es,Qi),oi.subVectors(ts,es),Si.subVectors(Qi,ts);let t=[0,-ai.z,ai.y,0,-oi.z,oi.y,0,-Si.z,Si.y,ai.z,0,-ai.x,oi.z,0,-oi.x,Si.z,0,-Si.x,-ai.y,ai.x,0,-oi.y,oi.x,0,-Si.y,Si.x,0];return!Qa(t,Qi,es,ts,Nr)||(t=[1,0,0,0,1,0,0,0,1],!Qa(t,Qi,es,ts,Nr))?!1:(Fr.crossVectors(ai,oi),t=[Fr.x,Fr.y,Fr.z],Qa(t,Qi,es,ts,Nr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,gn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(gn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Hn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Hn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Hn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Hn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Hn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Hn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Hn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Hn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Hn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Hn=[new I,new I,new I,new I,new I,new I,new I,new I],gn=new I,Ur=new zs,Qi=new I,es=new I,ts=new I,ai=new I,oi=new I,Si=new I,Gs=new I,Nr=new I,Fr=new I,Ei=new I;function Qa(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){Ei.fromArray(n,r);const o=s.x*Math.abs(Ei.x)+s.y*Math.abs(Ei.y)+s.z*Math.abs(Ei.z),c=e.dot(Ei),l=t.dot(Ei),h=i.dot(Ei);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const Wf=new zs,Vs=new I,eo=new I;class Ba{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Wf.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Vs.subVectors(e,this.center);const t=Vs.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Vs,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(eo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Vs.copy(e.center).add(eo)),this.expandByPoint(Vs.copy(e.center).sub(eo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Gn=new I,to=new I,zr=new I,li=new I,no=new I,Or=new I,io=new I;class Wl{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Gn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Gn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Gn.copy(this.origin).addScaledVector(this.direction,t),Gn.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){to.copy(e).add(t).multiplyScalar(.5),zr.copy(t).sub(e).normalize(),li.copy(this.origin).sub(to);const r=e.distanceTo(t)*.5,a=-this.direction.dot(zr),o=li.dot(this.direction),c=-li.dot(zr),l=li.lengthSq(),h=Math.abs(1-a*a);let u,d,f,m;if(h>0)if(u=a*c-o,d=a*o-c,m=r*h,u>=0)if(d>=-m)if(d<=m){const _=1/h;u*=_,d*=_,f=u*(u+a*d+2*o)+d*(a*u+d+2*c)+l}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d<=-m?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=m?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(to).addScaledVector(zr,d),f}intersectSphere(e,t){Gn.subVectors(e.center,this.origin);const i=Gn.dot(this.direction),s=Gn.dot(Gn)-i*i,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(i=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(i=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),i>c||o>s)||((o>i||i!==i)&&(i=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Gn)!==null}intersectTriangle(e,t,i,s,r){no.subVectors(t,e),Or.subVectors(i,e),io.crossVectors(no,Or);let a=this.direction.dot(io),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;li.subVectors(this.origin,e);const c=o*this.direction.dot(Or.crossVectors(li,Or));if(c<0)return null;const l=o*this.direction.dot(no.cross(li));if(l<0||c+l>a)return null;const h=-o*li.dot(io);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class at{constructor(e,t,i,s,r,a,o,c,l,h,u,d,f,m,_,g){at.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,c,l,h,u,d,f,m,_,g)}set(e,t,i,s,r,a,o,c,l,h,u,d,f,m,_,g){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=m,p[11]=_,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new at().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/ns.setFromMatrixColumn(e,0).length(),r=1/ns.setFromMatrixColumn(e,1).length(),a=1/ns.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const d=a*h,f=a*u,m=o*h,_=o*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=f+m*l,t[5]=d-_*l,t[9]=-o*c,t[2]=_-d*l,t[6]=m+f*l,t[10]=a*c}else if(e.order==="YXZ"){const d=c*h,f=c*u,m=l*h,_=l*u;t[0]=d+_*o,t[4]=m*o-f,t[8]=a*l,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=f*o-m,t[6]=_+d*o,t[10]=a*c}else if(e.order==="ZXY"){const d=c*h,f=c*u,m=l*h,_=l*u;t[0]=d-_*o,t[4]=-a*u,t[8]=m+f*o,t[1]=f+m*o,t[5]=a*h,t[9]=_-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const d=a*h,f=a*u,m=o*h,_=o*u;t[0]=c*h,t[4]=m*l-f,t[8]=d*l+_,t[1]=c*u,t[5]=_*l+d,t[9]=f*l-m,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const d=a*c,f=a*l,m=o*c,_=o*l;t[0]=c*h,t[4]=_-d*u,t[8]=m*u+f,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=f*u+m,t[10]=d-_*u}else if(e.order==="XZY"){const d=a*c,f=a*l,m=o*c,_=o*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+_,t[5]=a*h,t[9]=f*u-m,t[2]=m*u-f,t[6]=o*h,t[10]=_*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Xf,e,qf)}lookAt(e,t,i){const s=this.elements;return rn.subVectors(e,t),rn.lengthSq()===0&&(rn.z=1),rn.normalize(),ci.crossVectors(i,rn),ci.lengthSq()===0&&(Math.abs(i.z)===1?rn.x+=1e-4:rn.z+=1e-4,rn.normalize(),ci.crossVectors(i,rn)),ci.normalize(),kr.crossVectors(rn,ci),s[0]=ci.x,s[4]=kr.x,s[8]=rn.x,s[1]=ci.y,s[5]=kr.y,s[9]=rn.y,s[2]=ci.z,s[6]=kr.z,s[10]=rn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],h=i[1],u=i[5],d=i[9],f=i[13],m=i[2],_=i[6],g=i[10],p=i[14],T=i[3],E=i[7],S=i[11],R=i[15],w=s[0],C=s[4],P=s[8],M=s[12],y=s[1],L=s[5],z=s[9],H=s[13],W=s[2],Y=s[6],X=s[10],ne=s[14],G=s[3],ae=s[7],he=s[11],Ee=s[15];return r[0]=a*w+o*y+c*W+l*G,r[4]=a*C+o*L+c*Y+l*ae,r[8]=a*P+o*z+c*X+l*he,r[12]=a*M+o*H+c*ne+l*Ee,r[1]=h*w+u*y+d*W+f*G,r[5]=h*C+u*L+d*Y+f*ae,r[9]=h*P+u*z+d*X+f*he,r[13]=h*M+u*H+d*ne+f*Ee,r[2]=m*w+_*y+g*W+p*G,r[6]=m*C+_*L+g*Y+p*ae,r[10]=m*P+_*z+g*X+p*he,r[14]=m*M+_*H+g*ne+p*Ee,r[3]=T*w+E*y+S*W+R*G,r[7]=T*C+E*L+S*Y+R*ae,r[11]=T*P+E*z+S*X+R*he,r[15]=T*M+E*H+S*ne+R*Ee,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],f=e[14],m=e[3],_=e[7],g=e[11],p=e[15];return m*(+r*c*u-s*l*u-r*o*d+i*l*d+s*o*f-i*c*f)+_*(+t*c*f-t*l*d+r*a*d-s*a*f+s*l*h-r*c*h)+g*(+t*l*u-t*o*f-r*a*u+i*a*f+r*o*h-i*l*h)+p*(-s*o*h-t*c*u+t*o*d+s*a*u-i*a*d+i*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],f=e[11],m=e[12],_=e[13],g=e[14],p=e[15],T=u*g*l-_*d*l+_*c*f-o*g*f-u*c*p+o*d*p,E=m*d*l-h*g*l-m*c*f+a*g*f+h*c*p-a*d*p,S=h*_*l-m*u*l+m*o*f-a*_*f-h*o*p+a*u*p,R=m*u*c-h*_*c-m*o*d+a*_*d+h*o*g-a*u*g,w=t*T+i*E+s*S+r*R;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/w;return e[0]=T*C,e[1]=(_*d*r-u*g*r-_*s*f+i*g*f+u*s*p-i*d*p)*C,e[2]=(o*g*r-_*c*r+_*s*l-i*g*l-o*s*p+i*c*p)*C,e[3]=(u*c*r-o*d*r-u*s*l+i*d*l+o*s*f-i*c*f)*C,e[4]=E*C,e[5]=(h*g*r-m*d*r+m*s*f-t*g*f-h*s*p+t*d*p)*C,e[6]=(m*c*r-a*g*r-m*s*l+t*g*l+a*s*p-t*c*p)*C,e[7]=(a*d*r-h*c*r+h*s*l-t*d*l-a*s*f+t*c*f)*C,e[8]=S*C,e[9]=(m*u*r-h*_*r-m*i*f+t*_*f+h*i*p-t*u*p)*C,e[10]=(a*_*r-m*o*r+m*i*l-t*_*l-a*i*p+t*o*p)*C,e[11]=(h*o*r-a*u*r-h*i*l+t*u*l+a*i*f-t*o*f)*C,e[12]=R*C,e[13]=(h*_*s-m*u*s+m*i*d-t*_*d-h*i*g+t*u*g)*C,e[14]=(m*o*s-a*_*s-m*i*c+t*_*c+a*i*g-t*o*g)*C,e[15]=(a*u*s-h*o*s+h*i*c-t*u*c-a*i*d+t*o*d)*C,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,c=e.z,l=r*a,h=r*o;return this.set(l*a+i,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+i,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,h=a+a,u=o+o,d=r*l,f=r*h,m=r*u,_=a*h,g=a*u,p=o*u,T=c*l,E=c*h,S=c*u,R=i.x,w=i.y,C=i.z;return s[0]=(1-(_+p))*R,s[1]=(f+S)*R,s[2]=(m-E)*R,s[3]=0,s[4]=(f-S)*w,s[5]=(1-(d+p))*w,s[6]=(g+T)*w,s[7]=0,s[8]=(m+E)*C,s[9]=(g-T)*C,s[10]=(1-(d+_))*C,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let r=ns.set(s[0],s[1],s[2]).length();const a=ns.set(s[4],s[5],s[6]).length(),o=ns.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],_n.copy(this);const l=1/r,h=1/a,u=1/o;return _n.elements[0]*=l,_n.elements[1]*=l,_n.elements[2]*=l,_n.elements[4]*=h,_n.elements[5]*=h,_n.elements[6]*=h,_n.elements[8]*=u,_n.elements[9]*=u,_n.elements[10]*=u,t.setFromRotationMatrix(_n),i.x=r,i.y=a,i.z=o,this}makePerspective(e,t,i,s,r,a,o=In,c=!1){const l=this.elements,h=2*r/(t-e),u=2*r/(i-s),d=(t+e)/(t-e),f=(i+s)/(i-s);let m,_;if(c)m=r/(a-r),_=a*r/(a-r);else if(o===In)m=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===wa)m=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=In,c=!1){const l=this.elements,h=2/(t-e),u=2/(i-s),d=-(t+e)/(t-e),f=-(i+s)/(i-s);let m,_;if(c)m=1/(a-r),_=a/(a-r);else if(o===In)m=-2/(a-r),_=-(a+r)/(a-r);else if(o===wa)m=-1/(a-r),_=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=u,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const ns=new I,_n=new at,Xf=new I(0,0,0),qf=new I(1,1,1),ci=new I,kr=new I,rn=new I,Fc=new at,zc=new Rr;class Fn{constructor(e=0,t=0,i=0,s=Fn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(We(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-We(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(We(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-We(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(We(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-We(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Fc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Fc,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return zc.setFromEuler(this),this.setFromQuaternion(zc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Fn.DEFAULT_ORDER="XYZ";class Xl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Yf=0;const Oc=new I,is=new Rr,Vn=new at,Br=new I,Ws=new I,$f=new I,Kf=new Rr,kc=new I(1,0,0),Bc=new I(0,1,0),Hc=new I(0,0,1),Gc={type:"added"},Zf={type:"removed"},ss={type:"childadded",child:null},so={type:"childremoved",child:null};class bt extends Fs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Yf++}),this.uuid=ti(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=bt.DEFAULT_UP.clone();const e=new I,t=new Fn,i=new Rr,s=new I(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new at},normalMatrix:{value:new ze}}),this.matrix=new at,this.matrixWorld=new at,this.matrixAutoUpdate=bt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Xl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return is.setFromAxisAngle(e,t),this.quaternion.multiply(is),this}rotateOnWorldAxis(e,t){return is.setFromAxisAngle(e,t),this.quaternion.premultiply(is),this}rotateX(e){return this.rotateOnAxis(kc,e)}rotateY(e){return this.rotateOnAxis(Bc,e)}rotateZ(e){return this.rotateOnAxis(Hc,e)}translateOnAxis(e,t){return Oc.copy(e).applyQuaternion(this.quaternion),this.position.add(Oc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(kc,e)}translateY(e){return this.translateOnAxis(Bc,e)}translateZ(e){return this.translateOnAxis(Hc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Vn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Br.copy(e):Br.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Ws.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Vn.lookAt(Ws,Br,this.up):Vn.lookAt(Br,Ws,this.up),this.quaternion.setFromRotationMatrix(Vn),s&&(Vn.extractRotation(s.matrixWorld),is.setFromRotationMatrix(Vn),this.quaternion.premultiply(is.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Gc),ss.child=e,this.dispatchEvent(ss),ss.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Zf),so.child=e,this.dispatchEvent(so),so.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Vn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Vn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Vn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Gc),ss.child=e,this.dispatchEvent(ss),ss.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ws,e,$f),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ws,Kf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),f=a(e.animations),m=a(e.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),m.length>0&&(i.nodes=m)}return i.object=s,i;function a(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}bt.DEFAULT_UP=new I(0,1,0);bt.DEFAULT_MATRIX_AUTO_UPDATE=!0;bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const xn=new I,Wn=new I,ro=new I,Xn=new I,rs=new I,as=new I,Vc=new I,ao=new I,oo=new I,lo=new I,co=new et,ho=new et,uo=new et;class cn{constructor(e=new I,t=new I,i=new I){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),xn.subVectors(e,t),s.cross(xn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){xn.subVectors(s,t),Wn.subVectors(i,t),ro.subVectors(e,t);const a=xn.dot(xn),o=xn.dot(Wn),c=xn.dot(ro),l=Wn.dot(Wn),h=Wn.dot(ro),u=a*l-o*o;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(l*c-o*h)*d,m=(a*h-o*c)*d;return r.set(1-f-m,m,f)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Xn)===null?!1:Xn.x>=0&&Xn.y>=0&&Xn.x+Xn.y<=1}static getInterpolation(e,t,i,s,r,a,o,c){return this.getBarycoord(e,t,i,s,Xn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Xn.x),c.addScaledVector(a,Xn.y),c.addScaledVector(o,Xn.z),c)}static getInterpolatedAttribute(e,t,i,s,r,a){return co.setScalar(0),ho.setScalar(0),uo.setScalar(0),co.fromBufferAttribute(e,t),ho.fromBufferAttribute(e,i),uo.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(co,r.x),a.addScaledVector(ho,r.y),a.addScaledVector(uo,r.z),a}static isFrontFacing(e,t,i,s){return xn.subVectors(i,t),Wn.subVectors(e,t),xn.cross(Wn).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return xn.subVectors(this.c,this.b),Wn.subVectors(this.a,this.b),xn.cross(Wn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return cn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return cn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return cn.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return cn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return cn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let a,o;rs.subVectors(s,i),as.subVectors(r,i),ao.subVectors(e,i);const c=rs.dot(ao),l=as.dot(ao);if(c<=0&&l<=0)return t.copy(i);oo.subVectors(e,s);const h=rs.dot(oo),u=as.dot(oo);if(h>=0&&u<=h)return t.copy(s);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(i).addScaledVector(rs,a);lo.subVectors(e,r);const f=rs.dot(lo),m=as.dot(lo);if(m>=0&&f<=m)return t.copy(r);const _=f*l-c*m;if(_<=0&&l>=0&&m<=0)return o=l/(l-m),t.copy(i).addScaledVector(as,o);const g=h*m-f*u;if(g<=0&&u-h>=0&&f-m>=0)return Vc.subVectors(r,s),o=(u-h)/(u-h+(f-m)),t.copy(s).addScaledVector(Vc,o);const p=1/(g+_+d);return a=_*p,o=d*p,t.copy(i).addScaledVector(rs,a).addScaledVector(as,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Su={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hi={h:0,s:0,l:0},Hr={h:0,s:0,l:0};function fo(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ge{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ht){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ye.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=Ye.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ye.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=Ye.workingColorSpace){if(e=Gl(e,1),t=We(t,0,1),i=We(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=fo(a,r,e+1/3),this.g=fo(a,r,e),this.b=fo(a,r,e-1/3)}return Ye.colorSpaceToWorking(this,s),this}setStyle(e,t=ht){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ht){const i=Su[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ni(e.r),this.g=ni(e.g),this.b=ni(e.b),this}copyLinearToSRGB(e){return this.r=bs(e.r),this.g=bs(e.g),this.b=bs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ht){return Ye.workingToColorSpace(Nt.copy(this),e),Math.round(We(Nt.r*255,0,255))*65536+Math.round(We(Nt.g*255,0,255))*256+Math.round(We(Nt.b*255,0,255))}getHexString(e=ht){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ye.workingColorSpace){Ye.workingToColorSpace(Nt.copy(this),t);const i=Nt.r,s=Nt.g,r=Nt.b,a=Math.max(i,s,r),o=Math.min(i,s,r);let c,l;const h=(o+a)/2;if(o===a)c=0,l=0;else{const u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case i:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-i)/u+2;break;case r:c=(i-s)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=Ye.workingColorSpace){return Ye.workingToColorSpace(Nt.copy(this),t),e.r=Nt.r,e.g=Nt.g,e.b=Nt.b,e}getStyle(e=ht){Ye.workingToColorSpace(Nt.copy(this),e);const t=Nt.r,i=Nt.g,s=Nt.b;return e!==ht?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(hi),this.setHSL(hi.h+e,hi.s+t,hi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(hi),e.getHSL(Hr);const i=cr(hi.h,Hr.h,t),s=cr(hi.s,Hr.s,t),r=cr(hi.l,Hr.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Nt=new Ge;Ge.NAMES=Su;let jf=0;class Ki extends Fs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:jf++}),this.uuid=ti(),this.name="",this.type="Material",this.blending=Ss,this.side=_i,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Oo,this.blendDst=ko,this.blendEquation=Ui,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ge(0,0,0),this.blendAlpha=0,this.depthFunc=Rs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Cc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ji,this.stencilZFail=ji,this.stencilZPass=ji,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ss&&(i.blending=this.blending),this.side!==_i&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Oo&&(i.blendSrc=this.blendSrc),this.blendDst!==ko&&(i.blendDst=this.blendDst),this.blendEquation!==Ui&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Rs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Cc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ji&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ji&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ji&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Mt extends Ki{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fn,this.combine=ou,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const St=new I,Gr=new De;let Jf=0;class wn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Jf++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=bl,this.updateRanges=[],this.gpuType=ei,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Gr.fromBufferAttribute(this,t),Gr.applyMatrix3(e),this.setXY(t,Gr.x,Gr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)St.fromBufferAttribute(this,t),St.applyMatrix3(e),this.setXYZ(t,St.x,St.y,St.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)St.fromBufferAttribute(this,t),St.applyMatrix4(e),this.setXYZ(t,St.x,St.y,St.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)St.fromBufferAttribute(this,t),St.applyNormalMatrix(e),this.setXYZ(t,St.x,St.y,St.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)St.fromBufferAttribute(this,t),St.transformDirection(e),this.setXYZ(t,St.x,St.y,St.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Sn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=je(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Sn(t,this.array)),t}setX(e,t){return this.normalized&&(t=je(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Sn(t,this.array)),t}setY(e,t){return this.normalized&&(t=je(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Sn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=je(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Sn(t,this.array)),t}setW(e,t){return this.normalized&&(t=je(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=je(t,this.array),i=je(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=je(t,this.array),i=je(i,this.array),s=je(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=je(t,this.array),i=je(i,this.array),s=je(s,this.array),r=je(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==bl&&(e.usage=this.usage),e}}class Eu extends wn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class bu extends wn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class gt extends wn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Qf=0;const fn=new at,po=new bt,os=new I,an=new zs,Xs=new zs,Rt=new I;class tn extends Fs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Qf++}),this.uuid=ti(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(yu(e)?bu:Eu)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new ze().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return fn.makeRotationFromQuaternion(e),this.applyMatrix4(fn),this}rotateX(e){return fn.makeRotationX(e),this.applyMatrix4(fn),this}rotateY(e){return fn.makeRotationY(e),this.applyMatrix4(fn),this}rotateZ(e){return fn.makeRotationZ(e),this.applyMatrix4(fn),this}translate(e,t,i){return fn.makeTranslation(e,t,i),this.applyMatrix4(fn),this}scale(e,t,i){return fn.makeScale(e,t,i),this.applyMatrix4(fn),this}lookAt(e){return po.lookAt(e),po.updateMatrix(),this.applyMatrix4(po.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(os).negate(),this.translate(os.x,os.y,os.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new gt(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new zs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];an.setFromBufferAttribute(r),this.morphTargetsRelative?(Rt.addVectors(this.boundingBox.min,an.min),this.boundingBox.expandByPoint(Rt),Rt.addVectors(this.boundingBox.max,an.max),this.boundingBox.expandByPoint(Rt)):(this.boundingBox.expandByPoint(an.min),this.boundingBox.expandByPoint(an.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ba);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){const i=this.boundingSphere.center;if(an.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Xs.setFromBufferAttribute(o),this.morphTargetsRelative?(Rt.addVectors(an.min,Xs.min),an.expandByPoint(Rt),Rt.addVectors(an.max,Xs.max),an.expandByPoint(Rt)):(an.expandByPoint(Xs.min),an.expandByPoint(Xs.max))}an.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)Rt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Rt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Rt.fromBufferAttribute(o,l),c&&(os.fromBufferAttribute(e,l),Rt.add(os)),s=Math.max(s,i.distanceToSquared(Rt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new wn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let P=0;P<i.count;P++)o[P]=new I,c[P]=new I;const l=new I,h=new I,u=new I,d=new De,f=new De,m=new De,_=new I,g=new I;function p(P,M,y){l.fromBufferAttribute(i,P),h.fromBufferAttribute(i,M),u.fromBufferAttribute(i,y),d.fromBufferAttribute(r,P),f.fromBufferAttribute(r,M),m.fromBufferAttribute(r,y),h.sub(l),u.sub(l),f.sub(d),m.sub(d);const L=1/(f.x*m.y-m.x*f.y);isFinite(L)&&(_.copy(h).multiplyScalar(m.y).addScaledVector(u,-f.y).multiplyScalar(L),g.copy(u).multiplyScalar(f.x).addScaledVector(h,-m.x).multiplyScalar(L),o[P].add(_),o[M].add(_),o[y].add(_),c[P].add(g),c[M].add(g),c[y].add(g))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let P=0,M=T.length;P<M;++P){const y=T[P],L=y.start,z=y.count;for(let H=L,W=L+z;H<W;H+=3)p(e.getX(H+0),e.getX(H+1),e.getX(H+2))}const E=new I,S=new I,R=new I,w=new I;function C(P){R.fromBufferAttribute(s,P),w.copy(R);const M=o[P];E.copy(M),E.sub(R.multiplyScalar(R.dot(M))).normalize(),S.crossVectors(w,M);const L=S.dot(c[P])<0?-1:1;a.setXYZW(P,E.x,E.y,E.z,L)}for(let P=0,M=T.length;P<M;++P){const y=T[P],L=y.start,z=y.count;for(let H=L,W=L+z;H<W;H+=3)C(e.getX(H+0)),C(e.getX(H+1)),C(e.getX(H+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new wn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);const s=new I,r=new I,a=new I,o=new I,c=new I,l=new I,h=new I,u=new I;if(e)for(let d=0,f=e.count;d<f;d+=3){const m=e.getX(d+0),_=e.getX(d+1),g=e.getX(d+2);s.fromBufferAttribute(t,m),r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,g),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(i,m),c.fromBufferAttribute(i,_),l.fromBufferAttribute(i,g),o.add(h),c.add(h),l.add(h),i.setXYZ(m,o.x,o.y,o.z),i.setXYZ(_,c.x,c.y,c.z),i.setXYZ(g,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Rt.fromBufferAttribute(e,t),Rt.normalize(),e.setXYZ(t,Rt.x,Rt.y,Rt.z)}toNonIndexed(){function e(o,c){const l=o.array,h=o.itemSize,u=o.normalized,d=new l.constructor(c.length*h);let f=0,m=0;for(let _=0,g=c.length;_<g;_++){o.isInterleavedBufferAttribute?f=c[_]*o.data.stride+o.offset:f=c[_]*h;for(let p=0;p<h;p++)d[m++]=l[f++]}return new wn(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new tn,i=this.index.array,s=this.attributes;for(const o in s){const c=s[o],l=e(c,i);t.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let h=0,u=l.length;h<u;h++){const d=l[h],f=e(d,i);c.push(f)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const f=l[u];h.push(f.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(t))}const r=e.morphAttributes;for(const l in r){const h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,h=a.length;l<h;l++){const u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Wc=new at,bi=new Wl,Vr=new Ba,Xc=new I,Wr=new I,Xr=new I,qr=new I,mo=new I,Yr=new I,qc=new I,$r=new I;class Te extends bt{constructor(e=new tn,t=new Mt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){Yr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=o[c],u=r[c];h!==0&&(mo.fromBufferAttribute(u,e),a?Yr.addScaledVector(mo,h):Yr.addScaledVector(mo.sub(t),h))}t.add(Yr)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Vr.copy(i.boundingSphere),Vr.applyMatrix4(r),bi.copy(e.ray).recast(e.near),!(Vr.containsPoint(bi.origin)===!1&&(bi.intersectSphere(Vr,Xc)===null||bi.origin.distanceToSquared(Xc)>(e.far-e.near)**2))&&(Wc.copy(r).invert(),bi.copy(e.ray).applyMatrix4(Wc),!(i.boundingBox!==null&&bi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,bi)))}_computeIntersections(e,t,i){let s;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,_=d.length;m<_;m++){const g=d[m],p=a[g.materialIndex],T=Math.max(g.start,f.start),E=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let S=T,R=E;S<R;S+=3){const w=o.getX(S),C=o.getX(S+1),P=o.getX(S+2);s=Kr(this,p,e,i,l,h,u,w,C,P),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const m=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let g=m,p=_;g<p;g+=3){const T=o.getX(g),E=o.getX(g+1),S=o.getX(g+2);s=Kr(this,a,e,i,l,h,u,T,E,S),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let m=0,_=d.length;m<_;m++){const g=d[m],p=a[g.materialIndex],T=Math.max(g.start,f.start),E=Math.min(c.count,Math.min(g.start+g.count,f.start+f.count));for(let S=T,R=E;S<R;S+=3){const w=S,C=S+1,P=S+2;s=Kr(this,p,e,i,l,h,u,w,C,P),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const m=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let g=m,p=_;g<p;g+=3){const T=g,E=g+1,S=g+2;s=Kr(this,a,e,i,l,h,u,T,E,S),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}}function ep(n,e,t,i,s,r,a,o){let c;if(e.side===en?c=i.intersectTriangle(a,r,s,!0,o):c=i.intersectTriangle(s,r,a,e.side===_i,o),c===null)return null;$r.copy(o),$r.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo($r);return l<t.near||l>t.far?null:{distance:l,point:$r.clone(),object:n}}function Kr(n,e,t,i,s,r,a,o,c,l){n.getVertexPosition(o,Wr),n.getVertexPosition(c,Xr),n.getVertexPosition(l,qr);const h=ep(n,e,t,i,Wr,Xr,qr,qc);if(h){const u=new I;cn.getBarycoord(qc,Wr,Xr,qr,u),s&&(h.uv=cn.getInterpolatedAttribute(s,o,c,l,u,new De)),r&&(h.uv1=cn.getInterpolatedAttribute(r,o,c,l,u,new De)),a&&(h.normal=cn.getInterpolatedAttribute(a,o,c,l,u,new I),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:c,c:l,normal:new I,materialIndex:0};cn.getNormal(Wr,Xr,qr,d.normal),h.face=d,h.barycoord=u}return h}class zn extends tn{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],h=[],u=[];let d=0,f=0;m("z","y","x",-1,-1,i,t,e,a,r,0),m("z","y","x",1,-1,i,t,-e,a,r,1),m("x","z","y",1,1,e,i,t,s,a,2),m("x","z","y",1,-1,e,i,-t,s,a,3),m("x","y","z",1,-1,e,t,i,s,r,4),m("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new gt(l,3)),this.setAttribute("normal",new gt(h,3)),this.setAttribute("uv",new gt(u,2));function m(_,g,p,T,E,S,R,w,C,P,M){const y=S/C,L=R/P,z=S/2,H=R/2,W=w/2,Y=C+1,X=P+1;let ne=0,G=0;const ae=new I;for(let he=0;he<X;he++){const Ee=he*L-H;for(let Be=0;Be<Y;Be++){const nt=Be*y-z;ae[_]=nt*T,ae[g]=Ee*E,ae[p]=W,l.push(ae.x,ae.y,ae.z),ae[_]=0,ae[g]=0,ae[p]=w>0?1:-1,h.push(ae.x,ae.y,ae.z),u.push(Be/C),u.push(1-he/P),ne+=1}}for(let he=0;he<P;he++)for(let Ee=0;Ee<C;Ee++){const Be=d+Ee+Y*he,nt=d+Ee+Y*(he+1),ot=d+(Ee+1)+Y*(he+1),Ke=d+(Ee+1)+Y*he;c.push(Be,nt,Ke),c.push(nt,ot,Ke),G+=6}o.addGroup(f,G,M),f+=G,d+=ne}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ls(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Wt(n){const e={};for(let t=0;t<n.length;t++){const i=Ls(n[t]);for(const s in i)e[s]=i[s]}return e}function tp(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Tu(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ye.workingColorSpace}const np={clone:Ls,merge:Wt};var ip=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,sp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class xi extends Ki{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ip,this.fragmentShader=sp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ls(e.uniforms),this.uniformsGroups=tp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class wu extends bt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new at,this.projectionMatrix=new at,this.projectionMatrixInverse=new at,this.coordinateSystem=In,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ui=new I,Yc=new De,$c=new De;class ln extends wu{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=yr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Es*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return yr*2*Math.atan(Math.tan(Es*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){ui.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ui.x,ui.y).multiplyScalar(-e/ui.z),ui.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ui.x,ui.y).multiplyScalar(-e/ui.z)}getViewSize(e,t){return this.getViewBounds(e,Yc,$c),t.subVectors($c,Yc)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Es*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*i/l,s*=a.width/c,i*=a.height/l}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ls=-90,cs=1;class rp extends bt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new ln(ls,cs,e,t);s.layers=this.layers,this.add(s);const r=new ln(ls,cs,e,t);r.layers=this.layers,this.add(r);const a=new ln(ls,cs,e,t);a.layers=this.layers,this.add(a);const o=new ln(ls,cs,e,t);o.layers=this.layers,this.add(o);const c=new ln(ls,cs,e,t);c.layers=this.layers,this.add(c);const l=new ln(ls,cs,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,c]=t;for(const l of t)this.remove(l);if(e===In)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===wa)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,a),e.setRenderTarget(i,2,s),e.render(t,o),e.setRenderTarget(i,3,s),e.render(t,c),e.setRenderTarget(i,4,s),e.render(t,l),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,s),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=m,i.texture.needsPMREMUpdate=!0}}class Au extends Lt{constructor(e=[],t=Cs,i,s,r,a,o,c,l,h){super(e,t,i,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ap extends Xi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Au(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new zn(5,5,5),r=new xi({name:"CubemapFromEquirect",uniforms:Ls(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:en,blending:pi});r.uniforms.tEquirect.value=t;const a=new Te(s,r),o=t.minFilter;return t.minFilter===zi&&(t.minFilter=Ln),new rp(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}}class Ot extends bt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const op={type:"move"};class go{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ot,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ot,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ot,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const _ of e.hand.values()){const g=t.getJointPose(_,i),p=this._getHandJoint(l,_);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,m=.005;l.inputState.pinching&&d>f+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(op)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Ot;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class ql{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new Ge(e),this.near=t,this.far=i}clone(){return new ql(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class lp extends bt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Fn,this.environmentIntensity=1,this.environmentRotation=new Fn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class cp{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=bl,this.updateRanges=[],this.version=0,this.uuid=ti()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ti()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ti()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Vt=new I;class Aa{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Vt.fromBufferAttribute(this,t),Vt.applyMatrix4(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Vt.fromBufferAttribute(this,t),Vt.applyNormalMatrix(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Vt.fromBufferAttribute(this,t),Vt.transformDirection(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=Sn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=je(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=je(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=je(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=je(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=je(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Sn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Sn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Sn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Sn(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=je(t,this.array),i=je(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=je(t,this.array),i=je(i,this.array),s=je(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=je(t,this.array),i=je(i,this.array),s=je(s,this.array),r=je(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new wn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Aa(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Ra extends Ki{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ge(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let hs;const qs=new I,us=new I,ds=new I,fs=new De,Ys=new De,Ru=new at,Zr=new I,$s=new I,jr=new I,Kc=new De,_o=new De,Zc=new De;class Tl extends bt{constructor(e=new Ra){if(super(),this.isSprite=!0,this.type="Sprite",hs===void 0){hs=new tn;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new cp(t,5);hs.setIndex([0,1,2,0,2,3]),hs.setAttribute("position",new Aa(i,3,0,!1)),hs.setAttribute("uv",new Aa(i,2,3,!1))}this.geometry=hs,this.material=e,this.center=new De(.5,.5),this.count=1}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),us.setFromMatrixScale(this.matrixWorld),Ru.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ds.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&us.multiplyScalar(-ds.z);const i=this.material.rotation;let s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));const a=this.center;Jr(Zr.set(-.5,-.5,0),ds,a,us,s,r),Jr($s.set(.5,-.5,0),ds,a,us,s,r),Jr(jr.set(.5,.5,0),ds,a,us,s,r),Kc.set(0,0),_o.set(1,0),Zc.set(1,1);let o=e.ray.intersectTriangle(Zr,$s,jr,!1,qs);if(o===null&&(Jr($s.set(-.5,.5,0),ds,a,us,s,r),_o.set(0,1),o=e.ray.intersectTriangle(Zr,jr,$s,!1,qs),o===null))return;const c=e.ray.origin.distanceTo(qs);c<e.near||c>e.far||t.push({distance:c,point:qs.clone(),uv:cn.getInterpolation(qs,Zr,$s,jr,Kc,_o,Zc,new De),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Jr(n,e,t,i,s,r){fs.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(Ys.x=r*fs.x-s*fs.y,Ys.y=s*fs.x+r*fs.y):Ys.copy(fs),n.copy(e),n.x+=Ys.x,n.y+=Ys.y,n.applyMatrix4(Ru)}const xo=new I,hp=new I,up=new ze;class Ci{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=xo.subVectors(i,t).cross(hp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(xo),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||up.getNormalMatrix(e),s=this.coplanarPoint(xo).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ti=new Ba,dp=new De(.5,.5),Qr=new I;class Yl{constructor(e=new Ci,t=new Ci,i=new Ci,s=new Ci,r=new Ci,a=new Ci){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=In,i=!1){const s=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],l=r[3],h=r[4],u=r[5],d=r[6],f=r[7],m=r[8],_=r[9],g=r[10],p=r[11],T=r[12],E=r[13],S=r[14],R=r[15];if(s[0].setComponents(l-a,f-h,p-m,R-T).normalize(),s[1].setComponents(l+a,f+h,p+m,R+T).normalize(),s[2].setComponents(l+o,f+u,p+_,R+E).normalize(),s[3].setComponents(l-o,f-u,p-_,R-E).normalize(),i)s[4].setComponents(c,d,g,S).normalize(),s[5].setComponents(l-c,f-d,p-g,R-S).normalize();else if(s[4].setComponents(l-c,f-d,p-g,R-S).normalize(),t===In)s[5].setComponents(l+c,f+d,p+g,R+S).normalize();else if(t===wa)s[5].setComponents(c,d,g,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ti.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ti.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ti)}intersectsSprite(e){Ti.center.set(0,0,0);const t=dp.distanceTo(e.center);return Ti.radius=.7071067811865476+t,Ti.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ti)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(Qr.x=s.normal.x>0?e.max.x:e.min.x,Qr.y=s.normal.y>0?e.max.y:e.min.y,Qr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Qr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Cu extends Ki{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ge(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ca=new I,Pa=new I,jc=new at,Ks=new Wl,ea=new Ba,vo=new I,Jc=new I;class fp extends bt{constructor(e=new tn,t=new Cu){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)Ca.fromBufferAttribute(t,s-1),Pa.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Ca.distanceTo(Pa);e.setAttribute("lineDistance",new gt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ea.copy(i.boundingSphere),ea.applyMatrix4(s),ea.radius+=r,e.ray.intersectsSphere(ea)===!1)return;jc.copy(s).invert(),Ks.copy(e.ray).applyMatrix4(jc);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=i.index,d=i.attributes.position;if(h!==null){const f=Math.max(0,a.start),m=Math.min(h.count,a.start+a.count);for(let _=f,g=m-1;_<g;_+=l){const p=h.getX(_),T=h.getX(_+1),E=ta(this,e,Ks,c,p,T,_);E&&t.push(E)}if(this.isLineLoop){const _=h.getX(m-1),g=h.getX(f),p=ta(this,e,Ks,c,_,g,m-1);p&&t.push(p)}}else{const f=Math.max(0,a.start),m=Math.min(d.count,a.start+a.count);for(let _=f,g=m-1;_<g;_+=l){const p=ta(this,e,Ks,c,_,_+1,_);p&&t.push(p)}if(this.isLineLoop){const _=ta(this,e,Ks,c,m-1,f,m-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function ta(n,e,t,i,s,r,a){const o=n.geometry.attributes.position;if(Ca.fromBufferAttribute(o,s),Pa.fromBufferAttribute(o,r),t.distanceSqToSegment(Ca,Pa,vo,Jc)>i)return;vo.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(vo);if(!(l<e.near||l>e.far))return{distance:l,point:Jc.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}const Qc=new I,eh=new I;class pp extends fp{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)Qc.fromBufferAttribute(t,s),eh.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Qc.distanceTo(eh);e.setAttribute("lineDistance",new gt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class vi extends Lt{constructor(e,t,i,s,r,a,o,c,l){super(e,t,i,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Pu extends Lt{constructor(e,t,i=Wi,s,r,a,o=Tn,c=Tn,l,h=xr,u=1){if(h!==xr&&h!==vr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:u};super(d,s,r,a,o,c,h,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Vl(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Du extends Lt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class qi extends tn{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);const r=[],a=[],o=[],c=[],l=new I,h=new De;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){const f=i+u/t*s;l.x=e*Math.cos(f),l.y=e*Math.sin(f),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,c.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new gt(a,3)),this.setAttribute("normal",new gt(o,3)),this.setAttribute("uv",new gt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qi(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class qt extends tn{constructor(e=1,t=1,i=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],d=[],f=[];let m=0;const _=[],g=i/2;let p=0;T(),a===!1&&(e>0&&E(!0),t>0&&E(!1)),this.setIndex(h),this.setAttribute("position",new gt(u,3)),this.setAttribute("normal",new gt(d,3)),this.setAttribute("uv",new gt(f,2));function T(){const S=new I,R=new I;let w=0;const C=(t-e)/i;for(let P=0;P<=r;P++){const M=[],y=P/r,L=y*(t-e)+e;for(let z=0;z<=s;z++){const H=z/s,W=H*c+o,Y=Math.sin(W),X=Math.cos(W);R.x=L*Y,R.y=-y*i+g,R.z=L*X,u.push(R.x,R.y,R.z),S.set(Y,C,X).normalize(),d.push(S.x,S.y,S.z),f.push(H,1-y),M.push(m++)}_.push(M)}for(let P=0;P<s;P++)for(let M=0;M<r;M++){const y=_[M][P],L=_[M+1][P],z=_[M+1][P+1],H=_[M][P+1];(e>0||M!==0)&&(h.push(y,L,H),w+=3),(t>0||M!==r-1)&&(h.push(L,z,H),w+=3)}l.addGroup(p,w,0),p+=w}function E(S){const R=m,w=new De,C=new I;let P=0;const M=S===!0?e:t,y=S===!0?1:-1;for(let z=1;z<=s;z++)u.push(0,g*y,0),d.push(0,y,0),f.push(.5,.5),m++;const L=m;for(let z=0;z<=s;z++){const W=z/s*c+o,Y=Math.cos(W),X=Math.sin(W);C.x=M*X,C.y=g*y,C.z=M*Y,u.push(C.x,C.y,C.z),d.push(0,y,0),w.x=Y*.5+.5,w.y=X*.5*y+.5,f.push(w.x,w.y),m++}for(let z=0;z<s;z++){const H=R+z,W=L+z;S===!0?h.push(W,W+1,H):h.push(W+1,W,H),P+=3}l.addGroup(p,P,S===!0?1:2),p+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qt(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class $l extends qt{constructor(e=1,t=1,i=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,i,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new $l(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}const na=new I,ia=new I,yo=new I,sa=new cn;class mp extends tn{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const s=Math.pow(10,4),r=Math.cos(Es*t),a=e.getIndex(),o=e.getAttribute("position"),c=a?a.count:o.count,l=[0,0,0],h=["a","b","c"],u=new Array(3),d={},f=[];for(let m=0;m<c;m+=3){a?(l[0]=a.getX(m),l[1]=a.getX(m+1),l[2]=a.getX(m+2)):(l[0]=m,l[1]=m+1,l[2]=m+2);const{a:_,b:g,c:p}=sa;if(_.fromBufferAttribute(o,l[0]),g.fromBufferAttribute(o,l[1]),p.fromBufferAttribute(o,l[2]),sa.getNormal(yo),u[0]=`${Math.round(_.x*s)},${Math.round(_.y*s)},${Math.round(_.z*s)}`,u[1]=`${Math.round(g.x*s)},${Math.round(g.y*s)},${Math.round(g.z*s)}`,u[2]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let T=0;T<3;T++){const E=(T+1)%3,S=u[T],R=u[E],w=sa[h[T]],C=sa[h[E]],P=`${S}_${R}`,M=`${R}_${S}`;M in d&&d[M]?(yo.dot(d[M].normal)<=r&&(f.push(w.x,w.y,w.z),f.push(C.x,C.y,C.z)),d[M]=null):P in d||(d[P]={index0:l[T],index1:l[E],normal:yo.clone()})}}for(const m in d)if(d[m]){const{index0:_,index1:g}=d[m];na.fromBufferAttribute(o,_),ia.fromBufferAttribute(o,g),f.push(na.x,na.y,na.z),f.push(ia.x,ia.y,ia.z)}this.setAttribute("position",new gt(f,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Ht extends tn{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(i),c=Math.floor(s),l=o+1,h=c+1,u=e/o,d=t/c,f=[],m=[],_=[],g=[];for(let p=0;p<h;p++){const T=p*d-a;for(let E=0;E<l;E++){const S=E*u-r;m.push(S,-T,0),_.push(0,0,1),g.push(E/o),g.push(1-p/c)}}for(let p=0;p<c;p++)for(let T=0;T<o;T++){const E=T+l*p,S=T+l*(p+1),R=T+1+l*(p+1),w=T+1+l*p;f.push(E,S,w),f.push(S,R,w)}this.setIndex(f),this.setAttribute("position",new gt(m,3)),this.setAttribute("normal",new gt(_,3)),this.setAttribute("uv",new gt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ht(e.width,e.height,e.widthSegments,e.heightSegments)}}class Yi extends tn{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const c=Math.min(a+o,Math.PI);let l=0;const h=[],u=new I,d=new I,f=[],m=[],_=[],g=[];for(let p=0;p<=i;p++){const T=[],E=p/i;let S=0;p===0&&a===0?S=.5/t:p===i&&c===Math.PI&&(S=-.5/t);for(let R=0;R<=t;R++){const w=R/t;u.x=-e*Math.cos(s+w*r)*Math.sin(a+E*o),u.y=e*Math.cos(a+E*o),u.z=e*Math.sin(s+w*r)*Math.sin(a+E*o),m.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),g.push(w+S,1-E),T.push(l++)}h.push(T)}for(let p=0;p<i;p++)for(let T=0;T<t;T++){const E=h[p][T+1],S=h[p][T],R=h[p+1][T],w=h[p+1][T+1];(p!==0||a>0)&&f.push(E,S,w),(p!==i-1||c<Math.PI)&&f.push(S,R,w)}this.setIndex(f),this.setAttribute("position",new gt(m,3)),this.setAttribute("normal",new gt(_,3)),this.setAttribute("uv",new gt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yi(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Kl extends tn{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);const a=[],o=[],c=[],l=[],h=new I,u=new I,d=new I;for(let f=0;f<=i;f++)for(let m=0;m<=s;m++){const _=m/s*r,g=f/i*Math.PI*2;u.x=(e+t*Math.cos(g))*Math.cos(_),u.y=(e+t*Math.cos(g))*Math.sin(_),u.z=t*Math.sin(g),o.push(u.x,u.y,u.z),h.x=e*Math.cos(_),h.y=e*Math.sin(_),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(m/s),l.push(f/i)}for(let f=1;f<=i;f++)for(let m=1;m<=s;m++){const _=(s+1)*f+m-1,g=(s+1)*(f-1)+m-1,p=(s+1)*(f-1)+m,T=(s+1)*f+m;a.push(_,g,T),a.push(g,p,T)}this.setIndex(a),this.setAttribute("position",new gt(o,3)),this.setAttribute("normal",new gt(c,3)),this.setAttribute("uv",new gt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Kl(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class ri extends Ki{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ge(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=xu,this.normalScale=new De(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Lu extends Ki{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=uf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class gp extends Ki{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Mo={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class _p{constructor(e,t,i){const s=this;let r=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.abortController=new AbortController,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){const u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){const f=l[u],m=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const xp=new _p;class Zl{constructor(e){this.manager=e!==void 0?e:xp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Zl.DEFAULT_MATERIAL_NAME="__DEFAULT";const ps=new WeakMap;class vp extends Zl{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=Mo.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let u=ps.get(a);u===void 0&&(u=[],ps.set(a,u)),u.push({onLoad:t,onError:s})}return a}const o=Mr("img");function c(){h(),t&&t(this);const u=ps.get(this)||[];for(let d=0;d<u.length;d++){const f=u[d];f.onLoad&&f.onLoad(this)}ps.delete(this),r.manager.itemEnd(e)}function l(u){h(),s&&s(u),Mo.remove(`image:${e}`);const d=ps.get(this)||[];for(let f=0;f<d.length;f++){const m=d[f];m.onError&&m.onError(u)}ps.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Mo.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}}class Iu extends Zl{constructor(e){super(e)}load(e,t,i,s){const r=new Lt,a=new vp(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}}class jl extends bt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ge(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class yp extends jl{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(bt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ge(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const So=new at,th=new I,nh=new I;class Uu{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new De(512,512),this.mapType=Nn,this.map=null,this.mapPass=null,this.matrix=new at,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Yl,this._frameExtents=new De(1,1),this._viewportCount=1,this._viewports=[new et(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;th.setFromMatrixPosition(e.matrixWorld),t.position.copy(th),nh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(nh),t.updateMatrixWorld(),So.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(So,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(So)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const ih=new at,Zs=new I,Eo=new I;class Mp extends Uu{constructor(){super(new ln(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new De(4,2),this._viewportCount=6,this._viewports=[new et(2,1,1,1),new et(0,1,1,1),new et(3,1,1,1),new et(1,1,1,1),new et(3,0,1,1),new et(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),Zs.setFromMatrixPosition(e.matrixWorld),i.position.copy(Zs),Eo.copy(i.position),Eo.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Eo),i.updateMatrixWorld(),s.makeTranslation(-Zs.x,-Zs.y,-Zs.z),ih.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ih,i.coordinateSystem,i.reversedDepth)}}class Jl extends jl{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Mp}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Nu extends wu{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,a=i+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Sp extends Uu{constructor(){super(new Nu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ep extends jl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(bt.DEFAULT_UP),this.updateMatrix(),this.target=new bt,this.shadow=new Sp}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class bp extends ln{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Tp{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const sh=new at;class wp{constructor(e,t,i=0,s=1/0){this.ray=new Wl(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new Xl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return sh.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(sh),this}intersectObject(e,t=!0,i=[]){return wl(e,this,i,t),i.sort(rh),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)wl(e[s],this,i,t);return i.sort(rh),i}}function rh(n,e){return n.distance-e.distance}function wl(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let a=0,o=r.length;a<o;a++)wl(r[a],e,t,!0)}}function ah(n,e,t,i){const s=Ap(i);switch(t){case fu:return n*e;case mu:return n*e/s.components*s.byteLength;case kl:return n*e/s.components*s.byteLength;case gu:return n*e*2/s.components*s.byteLength;case Bl:return n*e*2/s.components*s.byteLength;case pu:return n*e*3/s.components*s.byteLength;case bn:return n*e*4/s.components*s.byteLength;case Hl:return n*e*4/s.components*s.byteLength;case ga:case _a:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case xa:case va:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case jo:case Qo:return Math.max(n,16)*Math.max(e,8)/4;case Zo:case Jo:return Math.max(n,8)*Math.max(e,8)/2;case el:case tl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case nl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case il:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case sl:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case rl:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case al:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case ol:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case ll:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case cl:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case hl:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case ul:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case dl:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case fl:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case pl:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case ml:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case gl:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case _l:case xl:case vl:return Math.ceil(n/4)*Math.ceil(e/4)*16;case yl:case Ml:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Sl:case El:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Ap(n){switch(n){case Nn:case cu:return{byteLength:1,components:1};case gr:case hu:case Ar:return{byteLength:2,components:1};case zl:case Ol:return{byteLength:2,components:4};case Wi:case Fl:case ei:return{byteLength:4,components:1};case uu:case du:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Nl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Nl);function Fu(){let n=null,e=!1,t=null,i=null;function s(r,a){t(r,a),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function Rp(n){const e=new WeakMap;function t(o,c){const l=o.array,h=o.usage,u=l.byteLength,d=n.createBuffer();n.bindBuffer(c,d),n.bufferData(c,l,h),o.onUploadCallback();let f;if(l instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=n.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=n.SHORT;else if(l instanceof Uint32Array)f=n.UNSIGNED_INT;else if(l instanceof Int32Array)f=n.INT;else if(l instanceof Int8Array)f=n.BYTE;else if(l instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function i(o,c,l){const h=c.array,u=c.updateRanges;if(n.bindBuffer(l,o),u.length===0)n.bufferSubData(l,0,h);else{u.sort((f,m)=>f.start-m.start);let d=0;for(let f=1;f<u.length;f++){const m=u[d],_=u[f];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,m=u.length;f<m;f++){const _=u[f];n.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(n.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var Cp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Pp=`#ifdef USE_ALPHAHASH
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
#endif`,Dp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Lp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ip=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Up=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Np=`#ifdef USE_AOMAP
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
#endif`,Fp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,zp=`#ifdef USE_BATCHING
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
#endif`,Op=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,kp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Bp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Hp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Gp=`#ifdef USE_IRIDESCENCE
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
#endif`,Vp=`#ifdef USE_BUMPMAP
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
#endif`,Wp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Xp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,qp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Yp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,$p=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Kp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Zp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,jp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Jp=`#define PI 3.141592653589793
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
} // validated`,Qp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,em=`vec3 transformedNormal = objectNormal;
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
#endif`,tm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,nm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,im=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,sm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,rm="gl_FragColor = linearToOutputTexel( gl_FragColor );",am=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,om=`#ifdef USE_ENVMAP
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
#endif`,lm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,cm=`#ifdef USE_ENVMAP
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
#endif`,hm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,um=`#ifdef USE_ENVMAP
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
#endif`,dm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,pm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,mm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gm=`#ifdef USE_GRADIENTMAP
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
}`,_m=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,xm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,vm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ym=`uniform bool receiveShadow;
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
#endif`,Mm=`#ifdef USE_ENVMAP
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
#endif`,Sm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Em=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,bm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Tm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,wm=`PhysicalMaterial material;
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
#endif`,Am=`struct PhysicalMaterial {
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
}`,Rm=`
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
#endif`,Cm=`#if defined( RE_IndirectDiffuse )
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
#endif`,Pm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Dm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Lm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Im=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Um=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Nm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Fm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,zm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Om=`#if defined( USE_POINTS_UV )
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
#endif`,km=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Bm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Hm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Gm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Vm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Wm=`#ifdef USE_MORPHTARGETS
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
#endif`,Xm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ym=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,$m=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Km=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,jm=`#ifdef USE_NORMALMAP
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
#endif`,Jm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Qm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,e0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,t0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,n0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,i0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,s0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,r0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,a0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,o0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,l0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,c0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,h0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,u0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,d0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,f0=`float getShadowMask() {
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
}`,p0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,m0=`#ifdef USE_SKINNING
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
#endif`,g0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,_0=`#ifdef USE_SKINNING
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
#endif`,x0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,v0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,y0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,M0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,S0=`#ifdef USE_TRANSMISSION
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
#endif`,E0=`#ifdef USE_TRANSMISSION
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
#endif`,b0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,T0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,w0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,A0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const R0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,C0=`uniform sampler2D t2D;
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
}`,P0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,D0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,L0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,I0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,U0=`#include <common>
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
}`,N0=`#if DEPTH_PACKING == 3200
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
}`,F0=`#define DISTANCE
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
}`,z0=`#define DISTANCE
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
}`,O0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,k0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,B0=`uniform float scale;
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
}`,H0=`uniform vec3 diffuse;
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
}`,G0=`#include <common>
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
}`,V0=`uniform vec3 diffuse;
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
}`,W0=`#define LAMBERT
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
}`,X0=`#define LAMBERT
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
}`,q0=`#define MATCAP
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
}`,Y0=`#define MATCAP
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
}`,$0=`#define NORMAL
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
}`,K0=`#define NORMAL
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
}`,Z0=`#define PHONG
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
}`,j0=`#define PHONG
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
}`,J0=`#define STANDARD
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
}`,Q0=`#define STANDARD
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
}`,eg=`#define TOON
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
}`,tg=`#define TOON
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
}`,ng=`uniform float size;
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
}`,ig=`uniform vec3 diffuse;
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
}`,sg=`#include <common>
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
}`,rg=`uniform vec3 color;
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
}`,ag=`uniform float rotation;
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
}`,og=`uniform vec3 diffuse;
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
}`,ke={alphahash_fragment:Cp,alphahash_pars_fragment:Pp,alphamap_fragment:Dp,alphamap_pars_fragment:Lp,alphatest_fragment:Ip,alphatest_pars_fragment:Up,aomap_fragment:Np,aomap_pars_fragment:Fp,batching_pars_vertex:zp,batching_vertex:Op,begin_vertex:kp,beginnormal_vertex:Bp,bsdfs:Hp,iridescence_fragment:Gp,bumpmap_pars_fragment:Vp,clipping_planes_fragment:Wp,clipping_planes_pars_fragment:Xp,clipping_planes_pars_vertex:qp,clipping_planes_vertex:Yp,color_fragment:$p,color_pars_fragment:Kp,color_pars_vertex:Zp,color_vertex:jp,common:Jp,cube_uv_reflection_fragment:Qp,defaultnormal_vertex:em,displacementmap_pars_vertex:tm,displacementmap_vertex:nm,emissivemap_fragment:im,emissivemap_pars_fragment:sm,colorspace_fragment:rm,colorspace_pars_fragment:am,envmap_fragment:om,envmap_common_pars_fragment:lm,envmap_pars_fragment:cm,envmap_pars_vertex:hm,envmap_physical_pars_fragment:Mm,envmap_vertex:um,fog_vertex:dm,fog_pars_vertex:fm,fog_fragment:pm,fog_pars_fragment:mm,gradientmap_pars_fragment:gm,lightmap_pars_fragment:_m,lights_lambert_fragment:xm,lights_lambert_pars_fragment:vm,lights_pars_begin:ym,lights_toon_fragment:Sm,lights_toon_pars_fragment:Em,lights_phong_fragment:bm,lights_phong_pars_fragment:Tm,lights_physical_fragment:wm,lights_physical_pars_fragment:Am,lights_fragment_begin:Rm,lights_fragment_maps:Cm,lights_fragment_end:Pm,logdepthbuf_fragment:Dm,logdepthbuf_pars_fragment:Lm,logdepthbuf_pars_vertex:Im,logdepthbuf_vertex:Um,map_fragment:Nm,map_pars_fragment:Fm,map_particle_fragment:zm,map_particle_pars_fragment:Om,metalnessmap_fragment:km,metalnessmap_pars_fragment:Bm,morphinstance_vertex:Hm,morphcolor_vertex:Gm,morphnormal_vertex:Vm,morphtarget_pars_vertex:Wm,morphtarget_vertex:Xm,normal_fragment_begin:qm,normal_fragment_maps:Ym,normal_pars_fragment:$m,normal_pars_vertex:Km,normal_vertex:Zm,normalmap_pars_fragment:jm,clearcoat_normal_fragment_begin:Jm,clearcoat_normal_fragment_maps:Qm,clearcoat_pars_fragment:e0,iridescence_pars_fragment:t0,opaque_fragment:n0,packing:i0,premultiplied_alpha_fragment:s0,project_vertex:r0,dithering_fragment:a0,dithering_pars_fragment:o0,roughnessmap_fragment:l0,roughnessmap_pars_fragment:c0,shadowmap_pars_fragment:h0,shadowmap_pars_vertex:u0,shadowmap_vertex:d0,shadowmask_pars_fragment:f0,skinbase_vertex:p0,skinning_pars_vertex:m0,skinning_vertex:g0,skinnormal_vertex:_0,specularmap_fragment:x0,specularmap_pars_fragment:v0,tonemapping_fragment:y0,tonemapping_pars_fragment:M0,transmission_fragment:S0,transmission_pars_fragment:E0,uv_pars_fragment:b0,uv_pars_vertex:T0,uv_vertex:w0,worldpos_vertex:A0,background_vert:R0,background_frag:C0,backgroundCube_vert:P0,backgroundCube_frag:D0,cube_vert:L0,cube_frag:I0,depth_vert:U0,depth_frag:N0,distanceRGBA_vert:F0,distanceRGBA_frag:z0,equirect_vert:O0,equirect_frag:k0,linedashed_vert:B0,linedashed_frag:H0,meshbasic_vert:G0,meshbasic_frag:V0,meshlambert_vert:W0,meshlambert_frag:X0,meshmatcap_vert:q0,meshmatcap_frag:Y0,meshnormal_vert:$0,meshnormal_frag:K0,meshphong_vert:Z0,meshphong_frag:j0,meshphysical_vert:J0,meshphysical_frag:Q0,meshtoon_vert:eg,meshtoon_frag:tg,points_vert:ng,points_frag:ig,shadow_vert:sg,shadow_frag:rg,sprite_vert:ag,sprite_frag:og},re={common:{diffuse:{value:new Ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ze}},envmap:{envMap:{value:null},envMapRotation:{value:new ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ze},normalScale:{value:new De(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0},uvTransform:{value:new ze}},sprite:{diffuse:{value:new Ge(16777215)},opacity:{value:1},center:{value:new De(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}}},Dn={basic:{uniforms:Wt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.fog]),vertexShader:ke.meshbasic_vert,fragmentShader:ke.meshbasic_frag},lambert:{uniforms:Wt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new Ge(0)}}]),vertexShader:ke.meshlambert_vert,fragmentShader:ke.meshlambert_frag},phong:{uniforms:Wt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new Ge(0)},specular:{value:new Ge(1118481)},shininess:{value:30}}]),vertexShader:ke.meshphong_vert,fragmentShader:ke.meshphong_frag},standard:{uniforms:Wt([re.common,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.roughnessmap,re.metalnessmap,re.fog,re.lights,{emissive:{value:new Ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag},toon:{uniforms:Wt([re.common,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.gradientmap,re.fog,re.lights,{emissive:{value:new Ge(0)}}]),vertexShader:ke.meshtoon_vert,fragmentShader:ke.meshtoon_frag},matcap:{uniforms:Wt([re.common,re.bumpmap,re.normalmap,re.displacementmap,re.fog,{matcap:{value:null}}]),vertexShader:ke.meshmatcap_vert,fragmentShader:ke.meshmatcap_frag},points:{uniforms:Wt([re.points,re.fog]),vertexShader:ke.points_vert,fragmentShader:ke.points_frag},dashed:{uniforms:Wt([re.common,re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ke.linedashed_vert,fragmentShader:ke.linedashed_frag},depth:{uniforms:Wt([re.common,re.displacementmap]),vertexShader:ke.depth_vert,fragmentShader:ke.depth_frag},normal:{uniforms:Wt([re.common,re.bumpmap,re.normalmap,re.displacementmap,{opacity:{value:1}}]),vertexShader:ke.meshnormal_vert,fragmentShader:ke.meshnormal_frag},sprite:{uniforms:Wt([re.sprite,re.fog]),vertexShader:ke.sprite_vert,fragmentShader:ke.sprite_frag},background:{uniforms:{uvTransform:{value:new ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ke.background_vert,fragmentShader:ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ze}},vertexShader:ke.backgroundCube_vert,fragmentShader:ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ke.cube_vert,fragmentShader:ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ke.equirect_vert,fragmentShader:ke.equirect_frag},distanceRGBA:{uniforms:Wt([re.common,re.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ke.distanceRGBA_vert,fragmentShader:ke.distanceRGBA_frag},shadow:{uniforms:Wt([re.lights,re.fog,{color:{value:new Ge(0)},opacity:{value:1}}]),vertexShader:ke.shadow_vert,fragmentShader:ke.shadow_frag}};Dn.physical={uniforms:Wt([Dn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ze},clearcoatNormalScale:{value:new De(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ze},sheen:{value:0},sheenColor:{value:new Ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ze},transmissionSamplerSize:{value:new De},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ze},attenuationDistance:{value:0},attenuationColor:{value:new Ge(0)},specularColor:{value:new Ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ze},anisotropyVector:{value:new De},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ze}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag};const ra={r:0,b:0,g:0},wi=new Fn,lg=new at;function cg(n,e,t,i,s,r,a){const o=new Ge(0);let c=r===!0?0:1,l,h,u=null,d=0,f=null;function m(E){let S=E.isScene===!0?E.background:null;return S&&S.isTexture&&(S=(E.backgroundBlurriness>0?t:e).get(S)),S}function _(E){let S=!1;const R=m(E);R===null?p(o,c):R&&R.isColor&&(p(R,1),S=!0);const w=n.xr.getEnvironmentBlendMode();w==="additive"?i.buffers.color.setClear(0,0,0,1,a):w==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||S)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function g(E,S){const R=m(S);R&&(R.isCubeTexture||R.mapping===ka)?(h===void 0&&(h=new Te(new zn(1,1,1),new xi({name:"BackgroundCubeMaterial",uniforms:Ls(Dn.backgroundCube.uniforms),vertexShader:Dn.backgroundCube.vertexShader,fragmentShader:Dn.backgroundCube.fragmentShader,side:en,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(w,C,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),wi.copy(S.backgroundRotation),wi.x*=-1,wi.y*=-1,wi.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(wi.y*=-1,wi.z*=-1),h.material.uniforms.envMap.value=R,h.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(lg.makeRotationFromEuler(wi)),h.material.toneMapped=Ye.getTransfer(R.colorSpace)!==Qe,(u!==R||d!==R.version||f!==n.toneMapping)&&(h.material.needsUpdate=!0,u=R,d=R.version,f=n.toneMapping),h.layers.enableAll(),E.unshift(h,h.geometry,h.material,0,0,null)):R&&R.isTexture&&(l===void 0&&(l=new Te(new Ht(2,2),new xi({name:"BackgroundMaterial",uniforms:Ls(Dn.background.uniforms),vertexShader:Dn.background.vertexShader,fragmentShader:Dn.background.fragmentShader,side:_i,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=R,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=Ye.getTransfer(R.colorSpace)!==Qe,R.matrixAutoUpdate===!0&&R.updateMatrix(),l.material.uniforms.uvTransform.value.copy(R.matrix),(u!==R||d!==R.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,u=R,d=R.version,f=n.toneMapping),l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null))}function p(E,S){E.getRGB(ra,Tu(n)),i.buffers.color.setClear(ra.r,ra.g,ra.b,S,a)}function T(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(E,S=1){o.set(E),c=S,p(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(E){c=E,p(o,c)},render:_,addToRenderList:g,dispose:T}}function hg(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null);let r=s,a=!1;function o(y,L,z,H,W){let Y=!1;const X=u(H,z,L);r!==X&&(r=X,l(r.object)),Y=f(y,H,z,W),Y&&m(y,H,z,W),W!==null&&e.update(W,n.ELEMENT_ARRAY_BUFFER),(Y||a)&&(a=!1,S(y,L,z,H),W!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function c(){return n.createVertexArray()}function l(y){return n.bindVertexArray(y)}function h(y){return n.deleteVertexArray(y)}function u(y,L,z){const H=z.wireframe===!0;let W=i[y.id];W===void 0&&(W={},i[y.id]=W);let Y=W[L.id];Y===void 0&&(Y={},W[L.id]=Y);let X=Y[H];return X===void 0&&(X=d(c()),Y[H]=X),X}function d(y){const L=[],z=[],H=[];for(let W=0;W<t;W++)L[W]=0,z[W]=0,H[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:z,attributeDivisors:H,object:y,attributes:{},index:null}}function f(y,L,z,H){const W=r.attributes,Y=L.attributes;let X=0;const ne=z.getAttributes();for(const G in ne)if(ne[G].location>=0){const he=W[G];let Ee=Y[G];if(Ee===void 0&&(G==="instanceMatrix"&&y.instanceMatrix&&(Ee=y.instanceMatrix),G==="instanceColor"&&y.instanceColor&&(Ee=y.instanceColor)),he===void 0||he.attribute!==Ee||Ee&&he.data!==Ee.data)return!0;X++}return r.attributesNum!==X||r.index!==H}function m(y,L,z,H){const W={},Y=L.attributes;let X=0;const ne=z.getAttributes();for(const G in ne)if(ne[G].location>=0){let he=Y[G];he===void 0&&(G==="instanceMatrix"&&y.instanceMatrix&&(he=y.instanceMatrix),G==="instanceColor"&&y.instanceColor&&(he=y.instanceColor));const Ee={};Ee.attribute=he,he&&he.data&&(Ee.data=he.data),W[G]=Ee,X++}r.attributes=W,r.attributesNum=X,r.index=H}function _(){const y=r.newAttributes;for(let L=0,z=y.length;L<z;L++)y[L]=0}function g(y){p(y,0)}function p(y,L){const z=r.newAttributes,H=r.enabledAttributes,W=r.attributeDivisors;z[y]=1,H[y]===0&&(n.enableVertexAttribArray(y),H[y]=1),W[y]!==L&&(n.vertexAttribDivisor(y,L),W[y]=L)}function T(){const y=r.newAttributes,L=r.enabledAttributes;for(let z=0,H=L.length;z<H;z++)L[z]!==y[z]&&(n.disableVertexAttribArray(z),L[z]=0)}function E(y,L,z,H,W,Y,X){X===!0?n.vertexAttribIPointer(y,L,z,W,Y):n.vertexAttribPointer(y,L,z,H,W,Y)}function S(y,L,z,H){_();const W=H.attributes,Y=z.getAttributes(),X=L.defaultAttributeValues;for(const ne in Y){const G=Y[ne];if(G.location>=0){let ae=W[ne];if(ae===void 0&&(ne==="instanceMatrix"&&y.instanceMatrix&&(ae=y.instanceMatrix),ne==="instanceColor"&&y.instanceColor&&(ae=y.instanceColor)),ae!==void 0){const he=ae.normalized,Ee=ae.itemSize,Be=e.get(ae);if(Be===void 0)continue;const nt=Be.buffer,ot=Be.type,Ke=Be.bytesPerElement,$=ot===n.INT||ot===n.UNSIGNED_INT||ae.gpuType===Fl;if(ae.isInterleavedBufferAttribute){const j=ae.data,fe=j.stride,Le=ae.offset;if(j.isInstancedInterleavedBuffer){for(let Se=0;Se<G.locationSize;Se++)p(G.location+Se,j.meshPerAttribute);y.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let Se=0;Se<G.locationSize;Se++)g(G.location+Se);n.bindBuffer(n.ARRAY_BUFFER,nt);for(let Se=0;Se<G.locationSize;Se++)E(G.location+Se,Ee/G.locationSize,ot,he,fe*Ke,(Le+Ee/G.locationSize*Se)*Ke,$)}else{if(ae.isInstancedBufferAttribute){for(let j=0;j<G.locationSize;j++)p(G.location+j,ae.meshPerAttribute);y.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let j=0;j<G.locationSize;j++)g(G.location+j);n.bindBuffer(n.ARRAY_BUFFER,nt);for(let j=0;j<G.locationSize;j++)E(G.location+j,Ee/G.locationSize,ot,he,Ee*Ke,Ee/G.locationSize*j*Ke,$)}}else if(X!==void 0){const he=X[ne];if(he!==void 0)switch(he.length){case 2:n.vertexAttrib2fv(G.location,he);break;case 3:n.vertexAttrib3fv(G.location,he);break;case 4:n.vertexAttrib4fv(G.location,he);break;default:n.vertexAttrib1fv(G.location,he)}}}}T()}function R(){P();for(const y in i){const L=i[y];for(const z in L){const H=L[z];for(const W in H)h(H[W].object),delete H[W];delete L[z]}delete i[y]}}function w(y){if(i[y.id]===void 0)return;const L=i[y.id];for(const z in L){const H=L[z];for(const W in H)h(H[W].object),delete H[W];delete L[z]}delete i[y.id]}function C(y){for(const L in i){const z=i[L];if(z[y.id]===void 0)continue;const H=z[y.id];for(const W in H)h(H[W].object),delete H[W];delete z[y.id]}}function P(){M(),a=!0,r!==s&&(r=s,l(r.object))}function M(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:P,resetDefaultState:M,dispose:R,releaseStatesOfGeometry:w,releaseStatesOfProgram:C,initAttributes:_,enableAttribute:g,disableUnusedAttributes:T}}function ug(n,e,t){let i;function s(l){i=l}function r(l,h){n.drawArrays(i,l,h),t.update(h,i,1)}function a(l,h,u){u!==0&&(n.drawArraysInstanced(i,l,h,u),t.update(h,i,u))}function o(l,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,h,0,u);let f=0;for(let m=0;m<u;m++)f+=h[m];t.update(f,i,1)}function c(l,h,u,d){if(u===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<l.length;m++)a(l[m],h[m],d[m]);else{f.multiDrawArraysInstancedWEBGL(i,l,0,h,0,d,0,u);let m=0;for(let _=0;_<u;_++)m+=h[_]*d[_];t.update(m,i,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function dg(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(C){return!(C!==bn&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const P=C===Ar&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Nn&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==ei&&!P)}function c(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),T=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),E=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),R=m>0,w=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:T,maxVaryings:E,maxFragmentUniforms:S,vertexTextures:R,maxSamples:w}}function fg(n){const e=this;let t=null,i=0,s=!1,r=!1;const a=new Ci,o=new ze,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||i!==0||s;return s=d,i=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){const m=u.clippingPlanes,_=u.clipIntersection,g=u.clipShadows,p=n.get(u);if(!s||m===null||m.length===0||r&&!g)r?h(null):l();else{const T=r?0:i,E=T*4;let S=p.clippingState||null;c.value=S,S=h(m,d,E,f);for(let R=0;R!==E;++R)S[R]=t[R];p.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=T}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,d,f,m){const _=u!==null?u.length:0;let g=null;if(_!==0){if(g=c.value,m!==!0||g===null){const p=f+_*4,T=d.matrixWorldInverse;o.getNormalMatrix(T),(g===null||g.length<p)&&(g=new Float32Array(p));for(let E=0,S=f;E!==_;++E,S+=4)a.copy(u[E]).applyMatrix4(T,o),a.normal.toArray(g,S),g[S+3]=a.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,g}}function pg(n){let e=new WeakMap;function t(a,o){return o===Yo?a.mapping=Cs:o===$o&&(a.mapping=Ps),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===Yo||o===$o)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new ap(c.height);return l.fromEquirectangularTexture(n,a),e.set(a,l),a.addEventListener("dispose",s),t(l.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}const ys=4,oh=[.125,.215,.35,.446,.526,.582],Ni=20,bo=new Nu,lh=new Ge;let To=null,wo=0,Ao=0,Ro=!1;const Pi=(1+Math.sqrt(5))/2,ms=1/Pi,ch=[new I(-Pi,ms,0),new I(Pi,ms,0),new I(-ms,0,Pi),new I(ms,0,Pi),new I(0,Pi,-ms),new I(0,Pi,ms),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)],mg=new I;class hh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100,r={}){const{size:a=256,position:o=mg}=r;To=this._renderer.getRenderTarget(),wo=this._renderer.getActiveCubeFace(),Ao=this._renderer.getActiveMipmapLevel(),Ro=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,s,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=fh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=dh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(To,wo,Ao),this._renderer.xr.enabled=Ro,e.scissorTest=!1,aa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Cs||e.mapping===Ps?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),To=this._renderer.getRenderTarget(),wo=this._renderer.getActiveCubeFace(),Ao=this._renderer.getActiveMipmapLevel(),Ro=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Ln,minFilter:Ln,generateMipmaps:!1,type:Ar,format:bn,colorSpace:Ds,depthBuffer:!1},s=uh(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=uh(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=gg(r)),this._blurMaterial=_g(r,e,t)}return s}_compileMaterial(e){const t=new Te(this._lodPlanes[0],e);this._renderer.compile(t,bo)}_sceneToCubeUV(e,t,i,s,r){const c=new ln(90,1,t,i),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(lh),u.toneMapping=mi,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null));const _=new Mt({name:"PMREM.Background",side:en,depthWrite:!1,depthTest:!1}),g=new Te(new zn,_);let p=!1;const T=e.background;T?T.isColor&&(_.color.copy(T),e.background=null,p=!0):(_.color.copy(lh),p=!0);for(let E=0;E<6;E++){const S=E%3;S===0?(c.up.set(0,l[E],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[E],r.y,r.z)):S===1?(c.up.set(0,0,l[E]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[E],r.z)):(c.up.set(0,l[E],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[E]));const R=this._cubeSize;aa(s,S*R,E>2?R:0,R,R),u.setRenderTarget(s),p&&u.render(g,c),u.render(e,c)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=d,e.background=T}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===Cs||e.mapping===Ps;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=fh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=dh());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new Te(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const c=this._cubeSize;aa(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(a,bo)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=ch[(s-r-1)%ch.length];this._blur(e,r-1,r,a,o)}t.autoClear=i}_blur(e,t,i,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,s,"latitudinal",r),this._halfBlur(a,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Te(this._lodPlanes[s],l),d=l.uniforms,f=this._sizeLods[i]-1,m=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Ni-1),_=r/m,g=isFinite(r)?1+Math.floor(h*_):Ni;g>Ni&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Ni}`);const p=[];let T=0;for(let C=0;C<Ni;++C){const P=C/_,M=Math.exp(-P*P/2);p.push(M),C===0?T+=M:C<g&&(T+=2*M)}for(let C=0;C<p.length;C++)p[C]=p[C]/T;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:E}=this;d.dTheta.value=m,d.mipInt.value=E-i;const S=this._sizeLods[s],R=3*S*(s>E-ys?s-E+ys:0),w=4*(this._cubeSize-S);aa(t,R,w,3*S,2*S),c.setRenderTarget(t),c.render(u,bo)}}function gg(n){const e=[],t=[],i=[];let s=n;const r=n-ys+1+oh.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);t.push(o);let c=1/o;a>n-ys?c=oh[a-n+ys-1]:a===0&&(c=0),i.push(c);const l=1/(o-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,m=6,_=3,g=2,p=1,T=new Float32Array(_*m*f),E=new Float32Array(g*m*f),S=new Float32Array(p*m*f);for(let w=0;w<f;w++){const C=w%3*2/3-1,P=w>2?0:-1,M=[C,P,0,C+2/3,P,0,C+2/3,P+1,0,C,P,0,C+2/3,P+1,0,C,P+1,0];T.set(M,_*m*w),E.set(d,g*m*w);const y=[w,w,w,w,w,w];S.set(y,p*m*w)}const R=new tn;R.setAttribute("position",new wn(T,_)),R.setAttribute("uv",new wn(E,g)),R.setAttribute("faceIndex",new wn(S,p)),e.push(R),s>ys&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function uh(n,e,t){const i=new Xi(n,e,t);return i.texture.mapping=ka,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function aa(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function _g(n,e,t){const i=new Float32Array(Ni),s=new I(0,1,0);return new xi({name:"SphericalGaussianBlur",defines:{n:Ni,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ql(),fragmentShader:`

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
		`,blending:pi,depthTest:!1,depthWrite:!1})}function dh(){return new xi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ql(),fragmentShader:`

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
		`,blending:pi,depthTest:!1,depthWrite:!1})}function fh(){return new xi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ql(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:pi,depthTest:!1,depthWrite:!1})}function Ql(){return`

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
	`}function xg(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const c=o.mapping,l=c===Yo||c===$o,h=c===Cs||c===Ps;if(l||h){let u=e.get(o);const d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new hh(n)),u=l?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{const f=o.image;return l&&f&&f.height>0||h&&f&&s(f)?(t===null&&(t=new hh(n)),u=l?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let c=0;const l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function r(o){const c=o.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function vg(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&Sr("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function yg(n,e,t,i){const s={},r=new WeakMap;function a(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const m in d.attributes)e.remove(d.attributes[m]);d.removeEventListener("dispose",a),delete s[d.id];const f=r.get(d);f&&(e.remove(f),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function c(u){const d=u.attributes;for(const f in d)e.update(d[f],n.ARRAY_BUFFER)}function l(u){const d=[],f=u.index,m=u.attributes.position;let _=0;if(f!==null){const T=f.array;_=f.version;for(let E=0,S=T.length;E<S;E+=3){const R=T[E+0],w=T[E+1],C=T[E+2];d.push(R,w,w,C,C,R)}}else if(m!==void 0){const T=m.array;_=m.version;for(let E=0,S=T.length/3-1;E<S;E+=3){const R=E+0,w=E+1,C=E+2;d.push(R,w,w,C,C,R)}}else return;const g=new(yu(d)?bu:Eu)(d,1);g.version=_;const p=r.get(u);p&&e.remove(p),r.set(u,g)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function Mg(n,e,t){let i;function s(d){i=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function c(d,f){n.drawElements(i,f,r,d*a),t.update(f,i,1)}function l(d,f,m){m!==0&&(n.drawElementsInstanced(i,f,r,d*a,m),t.update(f,i,m))}function h(d,f,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,d,0,m);let g=0;for(let p=0;p<m;p++)g+=f[p];t.update(g,i,1)}function u(d,f,m,_){if(m===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<d.length;p++)l(d[p]/a,f[p],_[p]);else{g.multiDrawElementsInstancedWEBGL(i,f,0,r,d,0,_,0,m);let p=0;for(let T=0;T<m;T++)p+=f[T]*_[T];t.update(p,i,1)}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Sg(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function Eg(n,e,t){const i=new WeakMap,s=new et;function r(a,o,c){const l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let d=i.get(o);if(d===void 0||d.count!==u){let M=function(){C.dispose(),i.delete(o),o.removeEventListener("dispose",M)};d!==void 0&&d.texture.dispose();const f=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],T=o.morphAttributes.color||[];let E=0;f===!0&&(E=1),m===!0&&(E=2),_===!0&&(E=3);let S=o.attributes.position.count*E,R=1;S>e.maxTextureSize&&(R=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const w=new Float32Array(S*R*4*u),C=new Mu(w,S,R,u);C.type=ei,C.needsUpdate=!0;const P=E*4;for(let y=0;y<u;y++){const L=g[y],z=p[y],H=T[y],W=S*R*4*y;for(let Y=0;Y<L.count;Y++){const X=Y*P;f===!0&&(s.fromBufferAttribute(L,Y),w[W+X+0]=s.x,w[W+X+1]=s.y,w[W+X+2]=s.z,w[W+X+3]=0),m===!0&&(s.fromBufferAttribute(z,Y),w[W+X+4]=s.x,w[W+X+5]=s.y,w[W+X+6]=s.z,w[W+X+7]=0),_===!0&&(s.fromBufferAttribute(H,Y),w[W+X+8]=s.x,w[W+X+9]=s.y,w[W+X+10]=s.z,w[W+X+11]=H.itemSize===4?s.w:1)}}d={count:u,texture:C,size:new De(S,R)},i.set(o,d),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let f=0;for(let _=0;_<l.length;_++)f+=l[_];const m=o.morphTargetsRelative?1:1-f;c.getUniforms().setValue(n,"morphTargetBaseInfluence",m),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function bg(n,e,t,i){let s=new WeakMap;function r(c){const l=i.render.frame,h=c.geometry,u=e.get(c,h);if(s.get(u)!==l&&(e.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return u}function a(){s=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:a}}const zu=new Lt,ph=new Pu(1,1),Ou=new Mu,ku=new Vf,Bu=new Au,mh=[],gh=[],_h=new Float32Array(16),xh=new Float32Array(9),vh=new Float32Array(4);function Os(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=mh[s];if(r===void 0&&(r=new Float32Array(s),mh[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function Tt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function wt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Ha(n,e){let t=gh[e];t===void 0&&(t=new Int32Array(e),gh[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Tg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function wg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;n.uniform2fv(this.addr,e),wt(t,e)}}function Ag(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Tt(t,e))return;n.uniform3fv(this.addr,e),wt(t,e)}}function Rg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;n.uniform4fv(this.addr,e),wt(t,e)}}function Cg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Tt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),wt(t,e)}else{if(Tt(t,i))return;vh.set(i),n.uniformMatrix2fv(this.addr,!1,vh),wt(t,i)}}function Pg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Tt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),wt(t,e)}else{if(Tt(t,i))return;xh.set(i),n.uniformMatrix3fv(this.addr,!1,xh),wt(t,i)}}function Dg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Tt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),wt(t,e)}else{if(Tt(t,i))return;_h.set(i),n.uniformMatrix4fv(this.addr,!1,_h),wt(t,i)}}function Lg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Ig(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;n.uniform2iv(this.addr,e),wt(t,e)}}function Ug(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tt(t,e))return;n.uniform3iv(this.addr,e),wt(t,e)}}function Ng(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;n.uniform4iv(this.addr,e),wt(t,e)}}function Fg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function zg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;n.uniform2uiv(this.addr,e),wt(t,e)}}function Og(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tt(t,e))return;n.uniform3uiv(this.addr,e),wt(t,e)}}function kg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;n.uniform4uiv(this.addr,e),wt(t,e)}}function Bg(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(ph.compareFunction=vu,r=ph):r=zu,t.setTexture2D(e||r,s)}function Hg(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||ku,s)}function Gg(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Bu,s)}function Vg(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Ou,s)}function Wg(n){switch(n){case 5126:return Tg;case 35664:return wg;case 35665:return Ag;case 35666:return Rg;case 35674:return Cg;case 35675:return Pg;case 35676:return Dg;case 5124:case 35670:return Lg;case 35667:case 35671:return Ig;case 35668:case 35672:return Ug;case 35669:case 35673:return Ng;case 5125:return Fg;case 36294:return zg;case 36295:return Og;case 36296:return kg;case 35678:case 36198:case 36298:case 36306:case 35682:return Bg;case 35679:case 36299:case 36307:return Hg;case 35680:case 36300:case 36308:case 36293:return Gg;case 36289:case 36303:case 36311:case 36292:return Vg}}function Xg(n,e){n.uniform1fv(this.addr,e)}function qg(n,e){const t=Os(e,this.size,2);n.uniform2fv(this.addr,t)}function Yg(n,e){const t=Os(e,this.size,3);n.uniform3fv(this.addr,t)}function $g(n,e){const t=Os(e,this.size,4);n.uniform4fv(this.addr,t)}function Kg(n,e){const t=Os(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Zg(n,e){const t=Os(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function jg(n,e){const t=Os(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Jg(n,e){n.uniform1iv(this.addr,e)}function Qg(n,e){n.uniform2iv(this.addr,e)}function e_(n,e){n.uniform3iv(this.addr,e)}function t_(n,e){n.uniform4iv(this.addr,e)}function n_(n,e){n.uniform1uiv(this.addr,e)}function i_(n,e){n.uniform2uiv(this.addr,e)}function s_(n,e){n.uniform3uiv(this.addr,e)}function r_(n,e){n.uniform4uiv(this.addr,e)}function a_(n,e,t){const i=this.cache,s=e.length,r=Ha(t,s);Tt(i,r)||(n.uniform1iv(this.addr,r),wt(i,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||zu,r[a])}function o_(n,e,t){const i=this.cache,s=e.length,r=Ha(t,s);Tt(i,r)||(n.uniform1iv(this.addr,r),wt(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||ku,r[a])}function l_(n,e,t){const i=this.cache,s=e.length,r=Ha(t,s);Tt(i,r)||(n.uniform1iv(this.addr,r),wt(i,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Bu,r[a])}function c_(n,e,t){const i=this.cache,s=e.length,r=Ha(t,s);Tt(i,r)||(n.uniform1iv(this.addr,r),wt(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Ou,r[a])}function h_(n){switch(n){case 5126:return Xg;case 35664:return qg;case 35665:return Yg;case 35666:return $g;case 35674:return Kg;case 35675:return Zg;case 35676:return jg;case 5124:case 35670:return Jg;case 35667:case 35671:return Qg;case 35668:case 35672:return e_;case 35669:case 35673:return t_;case 5125:return n_;case 36294:return i_;case 36295:return s_;case 36296:return r_;case 35678:case 36198:case 36298:case 36306:case 35682:return a_;case 35679:case 36299:case 36307:return o_;case 35680:case 36300:case 36308:case 36293:return l_;case 36289:case 36303:case 36311:case 36292:return c_}}class u_{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Wg(t.type)}}class d_{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=h_(t.type)}}class f_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],i)}}}const Co=/(\w+)(\])?(\[|\.)?/g;function yh(n,e){n.seq.push(e),n.map[e.id]=e}function p_(n,e,t){const i=n.name,s=i.length;for(Co.lastIndex=0;;){const r=Co.exec(i),a=Co.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){yh(t,l===void 0?new u_(o,n,e):new d_(o,n,e));break}else{let u=t.map[o];u===void 0&&(u=new f_(o),yh(t,u)),t=u}}}class ya{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);p_(r,a,this)}}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],c=i[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&i.push(a)}return i}}function Mh(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const m_=37297;let g_=0;function __(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const Sh=new ze;function x_(n){Ye._getMatrix(Sh,Ye.workingColorSpace,n);const e=`mat3( ${Sh.elements.map(t=>t.toFixed(4))} )`;switch(Ye.getTransfer(n)){case Ta:return[e,"LinearTransferOETF"];case Qe:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Eh(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+__(n.getShaderSource(e),o)}else return r}function v_(n,e){const t=x_(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function y_(n,e){let t;switch(e){case nf:t="Linear";break;case sf:t="Reinhard";break;case rf:t="Cineon";break;case af:t="ACESFilmic";break;case lf:t="AgX";break;case cf:t="Neutral";break;case of:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const oa=new I;function M_(){Ye.getLuminanceCoefficients(oa);const n=oa.x.toFixed(4),e=oa.y.toFixed(4),t=oa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function S_(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(sr).join(`
`)}function E_(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function b_(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),a=r.name;let o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function sr(n){return n!==""}function bh(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Th(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const T_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Al(n){return n.replace(T_,A_)}const w_=new Map;function A_(n,e){let t=ke[e];if(t===void 0){const i=w_.get(e);if(i!==void 0)t=ke[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Al(t)}const R_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function wh(n){return n.replace(R_,C_)}function C_(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ah(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function P_(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===ru?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===au?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===qn&&(e="SHADOWMAP_TYPE_VSM"),e}function D_(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Cs:case Ps:e="ENVMAP_TYPE_CUBE";break;case ka:e="ENVMAP_TYPE_CUBE_UV";break}return e}function L_(n){let e="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===Ps&&(e="ENVMAP_MODE_REFRACTION"),e}function I_(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case ou:e="ENVMAP_BLENDING_MULTIPLY";break;case ef:e="ENVMAP_BLENDING_MIX";break;case tf:e="ENVMAP_BLENDING_ADD";break}return e}function U_(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function N_(n,e,t,i){const s=n.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=P_(t),l=D_(t),h=L_(t),u=I_(t),d=U_(t),f=S_(t),m=E_(r),_=s.createProgram();let g,p,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(sr).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(sr).join(`
`),p.length>0&&(p+=`
`)):(g=[Ah(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(sr).join(`
`),p=[Ah(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==mi?"#define TONE_MAPPING":"",t.toneMapping!==mi?ke.tonemapping_pars_fragment:"",t.toneMapping!==mi?y_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ke.colorspace_pars_fragment,v_("linearToOutputTexel",t.outputColorSpace),M_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(sr).join(`
`)),a=Al(a),a=bh(a,t),a=Th(a,t),o=Al(o),o=bh(o,t),o=Th(o,t),a=wh(a),o=wh(o),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===Pc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Pc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const E=T+g+a,S=T+p+o,R=Mh(s,s.VERTEX_SHADER,E),w=Mh(s,s.FRAGMENT_SHADER,S);s.attachShader(_,R),s.attachShader(_,w),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function C(L){if(n.debug.checkShaderErrors){const z=s.getProgramInfoLog(_)||"",H=s.getShaderInfoLog(R)||"",W=s.getShaderInfoLog(w)||"",Y=z.trim(),X=H.trim(),ne=W.trim();let G=!0,ae=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(G=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,R,w);else{const he=Eh(s,R,"vertex"),Ee=Eh(s,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+Y+`
`+he+`
`+Ee)}else Y!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Y):(X===""||ne==="")&&(ae=!1);ae&&(L.diagnostics={runnable:G,programLog:Y,vertexShader:{log:X,prefix:g},fragmentShader:{log:ne,prefix:p}})}s.deleteShader(R),s.deleteShader(w),P=new ya(s,_),M=b_(s,_)}let P;this.getUniforms=function(){return P===void 0&&C(this),P};let M;this.getAttributes=function(){return M===void 0&&C(this),M};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(_,m_)),y},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=g_++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=R,this.fragmentShader=w,this}let F_=0;class z_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new O_(e),t.set(e,i)),i}}class O_{constructor(e){this.id=F_++,this.code=e,this.usedTimes=0}}function k_(n,e,t,i,s,r,a){const o=new Xl,c=new z_,l=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures;let f=s.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return l.add(M),M===0?"uv":`uv${M}`}function g(M,y,L,z,H){const W=z.fog,Y=H.geometry,X=M.isMeshStandardMaterial?z.environment:null,ne=(M.isMeshStandardMaterial?t:e).get(M.envMap||X),G=ne&&ne.mapping===ka?ne.image.height:null,ae=m[M.type];M.precision!==null&&(f=s.getMaxPrecision(M.precision),f!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));const he=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,Ee=he!==void 0?he.length:0;let Be=0;Y.morphAttributes.position!==void 0&&(Be=1),Y.morphAttributes.normal!==void 0&&(Be=2),Y.morphAttributes.color!==void 0&&(Be=3);let nt,ot,Ke,$;if(ae){const Ze=Dn[ae];nt=Ze.vertexShader,ot=Ze.fragmentShader}else nt=M.vertexShader,ot=M.fragmentShader,c.update(M),Ke=c.getVertexShaderID(M),$=c.getFragmentShaderID(M);const j=n.getRenderTarget(),fe=n.state.buffers.depth.getReversed(),Le=H.isInstancedMesh===!0,Se=H.isBatchedMesh===!0,Xe=!!M.map,It=!!M.matcap,A=!!ne,lt=!!M.aoMap,Ue=!!M.lightMap,Ce=!!M.bumpMap,ge=!!M.normalMap,ct=!!M.displacementMap,_e=!!M.emissiveMap,Oe=!!M.metalnessMap,At=!!M.roughnessMap,_t=M.anisotropy>0,b=M.clearcoat>0,x=M.dispersion>0,F=M.iridescence>0,q=M.sheen>0,Z=M.transmission>0,V=_t&&!!M.anisotropyMap,Me=b&&!!M.clearcoatMap,ie=b&&!!M.clearcoatNormalMap,xe=b&&!!M.clearcoatRoughnessMap,ve=F&&!!M.iridescenceMap,ee=F&&!!M.iridescenceThicknessMap,ce=q&&!!M.sheenColorMap,Re=q&&!!M.sheenRoughnessMap,ye=!!M.specularMap,oe=!!M.specularColorMap,Fe=!!M.specularIntensityMap,D=Z&&!!M.transmissionMap,te=Z&&!!M.thicknessMap,se=!!M.gradientMap,de=!!M.alphaMap,J=M.alphaTest>0,K=!!M.alphaHash,me=!!M.extensions;let Ie=mi;M.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Ie=n.toneMapping);const it={shaderID:ae,shaderType:M.type,shaderName:M.name,vertexShader:nt,fragmentShader:ot,defines:M.defines,customVertexShaderID:Ke,customFragmentShaderID:$,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,batching:Se,batchingColor:Se&&H._colorsTexture!==null,instancing:Le,instancingColor:Le&&H.instanceColor!==null,instancingMorph:Le&&H.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:j===null?n.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:Ds,alphaToCoverage:!!M.alphaToCoverage,map:Xe,matcap:It,envMap:A,envMapMode:A&&ne.mapping,envMapCubeUVHeight:G,aoMap:lt,lightMap:Ue,bumpMap:Ce,normalMap:ge,displacementMap:d&&ct,emissiveMap:_e,normalMapObjectSpace:ge&&M.normalMapType===df,normalMapTangentSpace:ge&&M.normalMapType===xu,metalnessMap:Oe,roughnessMap:At,anisotropy:_t,anisotropyMap:V,clearcoat:b,clearcoatMap:Me,clearcoatNormalMap:ie,clearcoatRoughnessMap:xe,dispersion:x,iridescence:F,iridescenceMap:ve,iridescenceThicknessMap:ee,sheen:q,sheenColorMap:ce,sheenRoughnessMap:Re,specularMap:ye,specularColorMap:oe,specularIntensityMap:Fe,transmission:Z,transmissionMap:D,thicknessMap:te,gradientMap:se,opaque:M.transparent===!1&&M.blending===Ss&&M.alphaToCoverage===!1,alphaMap:de,alphaTest:J,alphaHash:K,combine:M.combine,mapUv:Xe&&_(M.map.channel),aoMapUv:lt&&_(M.aoMap.channel),lightMapUv:Ue&&_(M.lightMap.channel),bumpMapUv:Ce&&_(M.bumpMap.channel),normalMapUv:ge&&_(M.normalMap.channel),displacementMapUv:ct&&_(M.displacementMap.channel),emissiveMapUv:_e&&_(M.emissiveMap.channel),metalnessMapUv:Oe&&_(M.metalnessMap.channel),roughnessMapUv:At&&_(M.roughnessMap.channel),anisotropyMapUv:V&&_(M.anisotropyMap.channel),clearcoatMapUv:Me&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:ie&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xe&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:ve&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:ee&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:ce&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:Re&&_(M.sheenRoughnessMap.channel),specularMapUv:ye&&_(M.specularMap.channel),specularColorMapUv:oe&&_(M.specularColorMap.channel),specularIntensityMapUv:Fe&&_(M.specularIntensityMap.channel),transmissionMapUv:D&&_(M.transmissionMap.channel),thicknessMapUv:te&&_(M.thicknessMap.channel),alphaMapUv:de&&_(M.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(ge||_t),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!Y.attributes.uv&&(Xe||de),fog:!!W,useFog:M.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:M.flatShading===!0&&M.wireframe===!1,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:fe,skinning:H.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:Ee,morphTextureStride:Be,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&L.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ie,decodeVideoTexture:Xe&&M.map.isVideoTexture===!0&&Ye.getTransfer(M.map.colorSpace)===Qe,decodeVideoTextureEmissive:_e&&M.emissiveMap.isVideoTexture===!0&&Ye.getTransfer(M.emissiveMap.colorSpace)===Qe,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===zt,flipSided:M.side===en,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:me&&M.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(me&&M.extensions.multiDraw===!0||Se)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return it.vertexUv1s=l.has(1),it.vertexUv2s=l.has(2),it.vertexUv3s=l.has(3),l.clear(),it}function p(M){const y=[];if(M.shaderID?y.push(M.shaderID):(y.push(M.customVertexShaderID),y.push(M.customFragmentShaderID)),M.defines!==void 0)for(const L in M.defines)y.push(L),y.push(M.defines[L]);return M.isRawShaderMaterial===!1&&(T(y,M),E(y,M),y.push(n.outputColorSpace)),y.push(M.customProgramCacheKey),y.join()}function T(M,y){M.push(y.precision),M.push(y.outputColorSpace),M.push(y.envMapMode),M.push(y.envMapCubeUVHeight),M.push(y.mapUv),M.push(y.alphaMapUv),M.push(y.lightMapUv),M.push(y.aoMapUv),M.push(y.bumpMapUv),M.push(y.normalMapUv),M.push(y.displacementMapUv),M.push(y.emissiveMapUv),M.push(y.metalnessMapUv),M.push(y.roughnessMapUv),M.push(y.anisotropyMapUv),M.push(y.clearcoatMapUv),M.push(y.clearcoatNormalMapUv),M.push(y.clearcoatRoughnessMapUv),M.push(y.iridescenceMapUv),M.push(y.iridescenceThicknessMapUv),M.push(y.sheenColorMapUv),M.push(y.sheenRoughnessMapUv),M.push(y.specularMapUv),M.push(y.specularColorMapUv),M.push(y.specularIntensityMapUv),M.push(y.transmissionMapUv),M.push(y.thicknessMapUv),M.push(y.combine),M.push(y.fogExp2),M.push(y.sizeAttenuation),M.push(y.morphTargetsCount),M.push(y.morphAttributeCount),M.push(y.numDirLights),M.push(y.numPointLights),M.push(y.numSpotLights),M.push(y.numSpotLightMaps),M.push(y.numHemiLights),M.push(y.numRectAreaLights),M.push(y.numDirLightShadows),M.push(y.numPointLightShadows),M.push(y.numSpotLightShadows),M.push(y.numSpotLightShadowsWithMaps),M.push(y.numLightProbes),M.push(y.shadowMapType),M.push(y.toneMapping),M.push(y.numClippingPlanes),M.push(y.numClipIntersection),M.push(y.depthPacking)}function E(M,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),y.gradientMap&&o.enable(22),M.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reversedDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),M.push(o.mask)}function S(M){const y=m[M.type];let L;if(y){const z=Dn[y];L=np.clone(z.uniforms)}else L=M.uniforms;return L}function R(M,y){let L;for(let z=0,H=h.length;z<H;z++){const W=h[z];if(W.cacheKey===y){L=W,++L.usedTimes;break}}return L===void 0&&(L=new N_(n,y,M,r),h.push(L)),L}function w(M){if(--M.usedTimes===0){const y=h.indexOf(M);h[y]=h[h.length-1],h.pop(),M.destroy()}}function C(M){c.remove(M)}function P(){c.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:S,acquireProgram:R,releaseProgram:w,releaseShaderCache:C,programs:h,dispose:P}}function B_(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,c){n.get(a)[o]=c}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function H_(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Rh(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Ch(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(u,d,f,m,_,g){let p=n[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:m,renderOrder:u.renderOrder,z:_,group:g},n[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=m,p.renderOrder=u.renderOrder,p.z=_,p.group=g),e++,p}function o(u,d,f,m,_,g){const p=a(u,d,f,m,_,g);f.transmission>0?i.push(p):f.transparent===!0?s.push(p):t.push(p)}function c(u,d,f,m,_,g){const p=a(u,d,f,m,_,g);f.transmission>0?i.unshift(p):f.transparent===!0?s.unshift(p):t.unshift(p)}function l(u,d){t.length>1&&t.sort(u||H_),i.length>1&&i.sort(d||Rh),s.length>1&&s.sort(d||Rh)}function h(){for(let u=e,d=n.length;u<d;u++){const f=n[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:o,unshift:c,finish:h,sort:l}}function G_(){let n=new WeakMap;function e(i,s){const r=n.get(i);let a;return r===void 0?(a=new Ch,n.set(i,[a])):s>=r.length?(a=new Ch,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function V_(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new Ge};break;case"SpotLight":t={position:new I,direction:new I,color:new Ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new Ge,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new Ge,groundColor:new Ge};break;case"RectAreaLight":t={color:new Ge,position:new I,halfWidth:new I,halfHeight:new I};break}return n[e.id]=t,t}}}function W_(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let X_=0;function q_(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Y_(n){const e=new V_,t=W_(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new I);const s=new I,r=new at,a=new at;function o(l){let h=0,u=0,d=0;for(let M=0;M<9;M++)i.probe[M].set(0,0,0);let f=0,m=0,_=0,g=0,p=0,T=0,E=0,S=0,R=0,w=0,C=0;l.sort(q_);for(let M=0,y=l.length;M<y;M++){const L=l[M],z=L.color,H=L.intensity,W=L.distance,Y=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=z.r*H,u+=z.g*H,d+=z.b*H;else if(L.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(L.sh.coefficients[X],H);C++}else if(L.isDirectionalLight){const X=e.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const ne=L.shadow,G=t.get(L);G.shadowIntensity=ne.intensity,G.shadowBias=ne.bias,G.shadowNormalBias=ne.normalBias,G.shadowRadius=ne.radius,G.shadowMapSize=ne.mapSize,i.directionalShadow[f]=G,i.directionalShadowMap[f]=Y,i.directionalShadowMatrix[f]=L.shadow.matrix,T++}i.directional[f]=X,f++}else if(L.isSpotLight){const X=e.get(L);X.position.setFromMatrixPosition(L.matrixWorld),X.color.copy(z).multiplyScalar(H),X.distance=W,X.coneCos=Math.cos(L.angle),X.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),X.decay=L.decay,i.spot[_]=X;const ne=L.shadow;if(L.map&&(i.spotLightMap[R]=L.map,R++,ne.updateMatrices(L),L.castShadow&&w++),i.spotLightMatrix[_]=ne.matrix,L.castShadow){const G=t.get(L);G.shadowIntensity=ne.intensity,G.shadowBias=ne.bias,G.shadowNormalBias=ne.normalBias,G.shadowRadius=ne.radius,G.shadowMapSize=ne.mapSize,i.spotShadow[_]=G,i.spotShadowMap[_]=Y,S++}_++}else if(L.isRectAreaLight){const X=e.get(L);X.color.copy(z).multiplyScalar(H),X.halfWidth.set(L.width*.5,0,0),X.halfHeight.set(0,L.height*.5,0),i.rectArea[g]=X,g++}else if(L.isPointLight){const X=e.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity),X.distance=L.distance,X.decay=L.decay,L.castShadow){const ne=L.shadow,G=t.get(L);G.shadowIntensity=ne.intensity,G.shadowBias=ne.bias,G.shadowNormalBias=ne.normalBias,G.shadowRadius=ne.radius,G.shadowMapSize=ne.mapSize,G.shadowCameraNear=ne.camera.near,G.shadowCameraFar=ne.camera.far,i.pointShadow[m]=G,i.pointShadowMap[m]=Y,i.pointShadowMatrix[m]=L.shadow.matrix,E++}i.point[m]=X,m++}else if(L.isHemisphereLight){const X=e.get(L);X.skyColor.copy(L.color).multiplyScalar(H),X.groundColor.copy(L.groundColor).multiplyScalar(H),i.hemi[p]=X,p++}}g>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=re.LTC_FLOAT_1,i.rectAreaLTC2=re.LTC_FLOAT_2):(i.rectAreaLTC1=re.LTC_HALF_1,i.rectAreaLTC2=re.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;const P=i.hash;(P.directionalLength!==f||P.pointLength!==m||P.spotLength!==_||P.rectAreaLength!==g||P.hemiLength!==p||P.numDirectionalShadows!==T||P.numPointShadows!==E||P.numSpotShadows!==S||P.numSpotMaps!==R||P.numLightProbes!==C)&&(i.directional.length=f,i.spot.length=_,i.rectArea.length=g,i.point.length=m,i.hemi.length=p,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=T,i.pointShadowMatrix.length=E,i.spotLightMatrix.length=S+R-w,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=C,P.directionalLength=f,P.pointLength=m,P.spotLength=_,P.rectAreaLength=g,P.hemiLength=p,P.numDirectionalShadows=T,P.numPointShadows=E,P.numSpotShadows=S,P.numSpotMaps=R,P.numLightProbes=C,i.version=X_++)}function c(l,h){let u=0,d=0,f=0,m=0,_=0;const g=h.matrixWorldInverse;for(let p=0,T=l.length;p<T;p++){const E=l[p];if(E.isDirectionalLight){const S=i.directional[u];S.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(g),u++}else if(E.isSpotLight){const S=i.spot[f];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(g),S.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(g),f++}else if(E.isRectAreaLight){const S=i.rectArea[m];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(g),a.identity(),r.copy(E.matrixWorld),r.premultiply(g),a.extractRotation(r),S.halfWidth.set(E.width*.5,0,0),S.halfHeight.set(0,E.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),m++}else if(E.isPointLight){const S=i.point[d];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(g),d++}else if(E.isHemisphereLight){const S=i.hemi[_];S.direction.setFromMatrixPosition(E.matrixWorld),S.direction.transformDirection(g),_++}}}return{setup:o,setupView:c,state:i}}function Ph(n){const e=new Y_(n),t=[],i=[];function s(h){l.camera=h,t.length=0,i.length=0}function r(h){t.push(h)}function a(h){i.push(h)}function o(){e.setup(t)}function c(h){e.setupView(t,h)}const l={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function $_(n){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new Ph(n),e.set(s,[o])):r>=a.length?(o=new Ph(n),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const K_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Z_=`uniform sampler2D shadow_pass;
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
}`;function j_(n,e,t){let i=new Yl;const s=new De,r=new De,a=new et,o=new Lu({depthPacking:_u}),c=new gp,l={},h=t.maxTextureSize,u={[_i]:en,[en]:_i,[zt]:zt},d=new xi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new De},radius:{value:4}},vertexShader:K_,fragmentShader:Z_}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const m=new tn;m.setAttribute("position",new wn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Te(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ru;let p=this.type;this.render=function(w,C,P){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||w.length===0)return;const M=n.getRenderTarget(),y=n.getActiveCubeFace(),L=n.getActiveMipmapLevel(),z=n.state;z.setBlending(pi),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const H=p!==qn&&this.type===qn,W=p===qn&&this.type!==qn;for(let Y=0,X=w.length;Y<X;Y++){const ne=w[Y],G=ne.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",ne,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);const ae=G.getFrameExtents();if(s.multiply(ae),r.copy(G.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ae.x),s.x=r.x*ae.x,G.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ae.y),s.y=r.y*ae.y,G.mapSize.y=r.y)),G.map===null||H===!0||W===!0){const Ee=this.type!==qn?{minFilter:Tn,magFilter:Tn}:{};G.map!==null&&G.map.dispose(),G.map=new Xi(s.x,s.y,Ee),G.map.texture.name=ne.name+".shadowMap",G.camera.updateProjectionMatrix()}n.setRenderTarget(G.map),n.clear();const he=G.getViewportCount();for(let Ee=0;Ee<he;Ee++){const Be=G.getViewport(Ee);a.set(r.x*Be.x,r.y*Be.y,r.x*Be.z,r.y*Be.w),z.viewport(a),G.updateMatrices(ne,Ee),i=G.getFrustum(),S(C,P,G.camera,ne,this.type)}G.isPointLightShadow!==!0&&this.type===qn&&T(G,P),G.needsUpdate=!1}p=this.type,g.needsUpdate=!1,n.setRenderTarget(M,y,L)};function T(w,C){const P=e.update(_);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Xi(s.x,s.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(C,null,P,d,_,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(C,null,P,f,_,null)}function E(w,C,P,M){let y=null;const L=P.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(L!==void 0)y=L;else if(y=P.isPointLight===!0?c:o,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const z=y.uuid,H=C.uuid;let W=l[z];W===void 0&&(W={},l[z]=W);let Y=W[H];Y===void 0&&(Y=y.clone(),W[H]=Y,C.addEventListener("dispose",R)),y=Y}if(y.visible=C.visible,y.wireframe=C.wireframe,M===qn?y.side=C.shadowSide!==null?C.shadowSide:C.side:y.side=C.shadowSide!==null?C.shadowSide:u[C.side],y.alphaMap=C.alphaMap,y.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,y.map=C.map,y.clipShadows=C.clipShadows,y.clippingPlanes=C.clippingPlanes,y.clipIntersection=C.clipIntersection,y.displacementMap=C.displacementMap,y.displacementScale=C.displacementScale,y.displacementBias=C.displacementBias,y.wireframeLinewidth=C.wireframeLinewidth,y.linewidth=C.linewidth,P.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const z=n.properties.get(y);z.light=P}return y}function S(w,C,P,M,y){if(w.visible===!1)return;if(w.layers.test(C.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&y===qn)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,w.matrixWorld);const H=e.update(w),W=w.material;if(Array.isArray(W)){const Y=H.groups;for(let X=0,ne=Y.length;X<ne;X++){const G=Y[X],ae=W[G.materialIndex];if(ae&&ae.visible){const he=E(w,ae,M,y);w.onBeforeShadow(n,w,C,P,H,he,G),n.renderBufferDirect(P,null,H,he,w,G),w.onAfterShadow(n,w,C,P,H,he,G)}}}else if(W.visible){const Y=E(w,W,M,y);w.onBeforeShadow(n,w,C,P,H,Y,null),n.renderBufferDirect(P,null,H,Y,w,null),w.onAfterShadow(n,w,C,P,H,Y,null)}}const z=w.children;for(let H=0,W=z.length;H<W;H++)S(z[H],C,P,M,y)}function R(w){w.target.removeEventListener("dispose",R);for(const P in l){const M=l[P],y=w.target.uuid;y in M&&(M[y].dispose(),delete M[y])}}}const J_={[Bo]:Ho,[Go]:Xo,[Vo]:qo,[Rs]:Wo,[Ho]:Bo,[Xo]:Go,[qo]:Vo,[Wo]:Rs};function Q_(n,e){function t(){let D=!1;const te=new et;let se=null;const de=new et(0,0,0,0);return{setMask:function(J){se!==J&&!D&&(n.colorMask(J,J,J,J),se=J)},setLocked:function(J){D=J},setClear:function(J,K,me,Ie,it){it===!0&&(J*=Ie,K*=Ie,me*=Ie),te.set(J,K,me,Ie),de.equals(te)===!1&&(n.clearColor(J,K,me,Ie),de.copy(te))},reset:function(){D=!1,se=null,de.set(-1,0,0,0)}}}function i(){let D=!1,te=!1,se=null,de=null,J=null;return{setReversed:function(K){if(te!==K){const me=e.get("EXT_clip_control");K?me.clipControlEXT(me.LOWER_LEFT_EXT,me.ZERO_TO_ONE_EXT):me.clipControlEXT(me.LOWER_LEFT_EXT,me.NEGATIVE_ONE_TO_ONE_EXT),te=K;const Ie=J;J=null,this.setClear(Ie)}},getReversed:function(){return te},setTest:function(K){K?j(n.DEPTH_TEST):fe(n.DEPTH_TEST)},setMask:function(K){se!==K&&!D&&(n.depthMask(K),se=K)},setFunc:function(K){if(te&&(K=J_[K]),de!==K){switch(K){case Bo:n.depthFunc(n.NEVER);break;case Ho:n.depthFunc(n.ALWAYS);break;case Go:n.depthFunc(n.LESS);break;case Rs:n.depthFunc(n.LEQUAL);break;case Vo:n.depthFunc(n.EQUAL);break;case Wo:n.depthFunc(n.GEQUAL);break;case Xo:n.depthFunc(n.GREATER);break;case qo:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}de=K}},setLocked:function(K){D=K},setClear:function(K){J!==K&&(te&&(K=1-K),n.clearDepth(K),J=K)},reset:function(){D=!1,se=null,de=null,J=null,te=!1}}}function s(){let D=!1,te=null,se=null,de=null,J=null,K=null,me=null,Ie=null,it=null;return{setTest:function(Ze){D||(Ze?j(n.STENCIL_TEST):fe(n.STENCIL_TEST))},setMask:function(Ze){te!==Ze&&!D&&(n.stencilMask(Ze),te=Ze)},setFunc:function(Ze,Bn,Cn){(se!==Ze||de!==Bn||J!==Cn)&&(n.stencilFunc(Ze,Bn,Cn),se=Ze,de=Bn,J=Cn)},setOp:function(Ze,Bn,Cn){(K!==Ze||me!==Bn||Ie!==Cn)&&(n.stencilOp(Ze,Bn,Cn),K=Ze,me=Bn,Ie=Cn)},setLocked:function(Ze){D=Ze},setClear:function(Ze){it!==Ze&&(n.clearStencil(Ze),it=Ze)},reset:function(){D=!1,te=null,se=null,de=null,J=null,K=null,me=null,Ie=null,it=null}}}const r=new t,a=new i,o=new s,c=new WeakMap,l=new WeakMap;let h={},u={},d=new WeakMap,f=[],m=null,_=!1,g=null,p=null,T=null,E=null,S=null,R=null,w=null,C=new Ge(0,0,0),P=0,M=!1,y=null,L=null,z=null,H=null,W=null;const Y=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,ne=0;const G=n.getParameter(n.VERSION);G.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(G)[1]),X=ne>=1):G.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),X=ne>=2);let ae=null,he={};const Ee=n.getParameter(n.SCISSOR_BOX),Be=n.getParameter(n.VIEWPORT),nt=new et().fromArray(Ee),ot=new et().fromArray(Be);function Ke(D,te,se,de){const J=new Uint8Array(4),K=n.createTexture();n.bindTexture(D,K),n.texParameteri(D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(D,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let me=0;me<se;me++)D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY?n.texImage3D(te,0,n.RGBA,1,1,de,0,n.RGBA,n.UNSIGNED_BYTE,J):n.texImage2D(te+me,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,J);return K}const $={};$[n.TEXTURE_2D]=Ke(n.TEXTURE_2D,n.TEXTURE_2D,1),$[n.TEXTURE_CUBE_MAP]=Ke(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[n.TEXTURE_2D_ARRAY]=Ke(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),$[n.TEXTURE_3D]=Ke(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),j(n.DEPTH_TEST),a.setFunc(Rs),Ce(!1),ge(Tc),j(n.CULL_FACE),lt(pi);function j(D){h[D]!==!0&&(n.enable(D),h[D]=!0)}function fe(D){h[D]!==!1&&(n.disable(D),h[D]=!1)}function Le(D,te){return u[D]!==te?(n.bindFramebuffer(D,te),u[D]=te,D===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=te),D===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=te),!0):!1}function Se(D,te){let se=f,de=!1;if(D){se=d.get(te),se===void 0&&(se=[],d.set(te,se));const J=D.textures;if(se.length!==J.length||se[0]!==n.COLOR_ATTACHMENT0){for(let K=0,me=J.length;K<me;K++)se[K]=n.COLOR_ATTACHMENT0+K;se.length=J.length,de=!0}}else se[0]!==n.BACK&&(se[0]=n.BACK,de=!0);de&&n.drawBuffers(se)}function Xe(D){return m!==D?(n.useProgram(D),m=D,!0):!1}const It={[Ui]:n.FUNC_ADD,[zd]:n.FUNC_SUBTRACT,[Od]:n.FUNC_REVERSE_SUBTRACT};It[kd]=n.MIN,It[Bd]=n.MAX;const A={[Hd]:n.ZERO,[Gd]:n.ONE,[Vd]:n.SRC_COLOR,[Oo]:n.SRC_ALPHA,[Kd]:n.SRC_ALPHA_SATURATE,[Yd]:n.DST_COLOR,[Xd]:n.DST_ALPHA,[Wd]:n.ONE_MINUS_SRC_COLOR,[ko]:n.ONE_MINUS_SRC_ALPHA,[$d]:n.ONE_MINUS_DST_COLOR,[qd]:n.ONE_MINUS_DST_ALPHA,[Zd]:n.CONSTANT_COLOR,[jd]:n.ONE_MINUS_CONSTANT_COLOR,[Jd]:n.CONSTANT_ALPHA,[Qd]:n.ONE_MINUS_CONSTANT_ALPHA};function lt(D,te,se,de,J,K,me,Ie,it,Ze){if(D===pi){_===!0&&(fe(n.BLEND),_=!1);return}if(_===!1&&(j(n.BLEND),_=!0),D!==Fd){if(D!==g||Ze!==M){if((p!==Ui||S!==Ui)&&(n.blendEquation(n.FUNC_ADD),p=Ui,S=Ui),Ze)switch(D){case Ss:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case wc:n.blendFunc(n.ONE,n.ONE);break;case Ac:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Rc:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Ss:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case wc:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Ac:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Rc:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}T=null,E=null,R=null,w=null,C.set(0,0,0),P=0,g=D,M=Ze}return}J=J||te,K=K||se,me=me||de,(te!==p||J!==S)&&(n.blendEquationSeparate(It[te],It[J]),p=te,S=J),(se!==T||de!==E||K!==R||me!==w)&&(n.blendFuncSeparate(A[se],A[de],A[K],A[me]),T=se,E=de,R=K,w=me),(Ie.equals(C)===!1||it!==P)&&(n.blendColor(Ie.r,Ie.g,Ie.b,it),C.copy(Ie),P=it),g=D,M=!1}function Ue(D,te){D.side===zt?fe(n.CULL_FACE):j(n.CULL_FACE);let se=D.side===en;te&&(se=!se),Ce(se),D.blending===Ss&&D.transparent===!1?lt(pi):lt(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),r.setMask(D.colorWrite);const de=D.stencilWrite;o.setTest(de),de&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),_e(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?j(n.SAMPLE_ALPHA_TO_COVERAGE):fe(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ce(D){y!==D&&(D?n.frontFace(n.CW):n.frontFace(n.CCW),y=D)}function ge(D){D!==Ud?(j(n.CULL_FACE),D!==L&&(D===Tc?n.cullFace(n.BACK):D===Nd?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):fe(n.CULL_FACE),L=D}function ct(D){D!==z&&(X&&n.lineWidth(D),z=D)}function _e(D,te,se){D?(j(n.POLYGON_OFFSET_FILL),(H!==te||W!==se)&&(n.polygonOffset(te,se),H=te,W=se)):fe(n.POLYGON_OFFSET_FILL)}function Oe(D){D?j(n.SCISSOR_TEST):fe(n.SCISSOR_TEST)}function At(D){D===void 0&&(D=n.TEXTURE0+Y-1),ae!==D&&(n.activeTexture(D),ae=D)}function _t(D,te,se){se===void 0&&(ae===null?se=n.TEXTURE0+Y-1:se=ae);let de=he[se];de===void 0&&(de={type:void 0,texture:void 0},he[se]=de),(de.type!==D||de.texture!==te)&&(ae!==se&&(n.activeTexture(se),ae=se),n.bindTexture(D,te||$[D]),de.type=D,de.texture=te)}function b(){const D=he[ae];D!==void 0&&D.type!==void 0&&(n.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function x(){try{n.compressedTexImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function F(){try{n.compressedTexImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function q(){try{n.texSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Z(){try{n.texSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function V(){try{n.compressedTexSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Me(){try{n.compressedTexSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ie(){try{n.texStorage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function xe(){try{n.texStorage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ve(){try{n.texImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ee(){try{n.texImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ce(D){nt.equals(D)===!1&&(n.scissor(D.x,D.y,D.z,D.w),nt.copy(D))}function Re(D){ot.equals(D)===!1&&(n.viewport(D.x,D.y,D.z,D.w),ot.copy(D))}function ye(D,te){let se=l.get(te);se===void 0&&(se=new WeakMap,l.set(te,se));let de=se.get(D);de===void 0&&(de=n.getUniformBlockIndex(te,D.name),se.set(D,de))}function oe(D,te){const de=l.get(te).get(D);c.get(te)!==de&&(n.uniformBlockBinding(te,de,D.__bindingPointIndex),c.set(te,de))}function Fe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},ae=null,he={},u={},d=new WeakMap,f=[],m=null,_=!1,g=null,p=null,T=null,E=null,S=null,R=null,w=null,C=new Ge(0,0,0),P=0,M=!1,y=null,L=null,z=null,H=null,W=null,nt.set(0,0,n.canvas.width,n.canvas.height),ot.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:j,disable:fe,bindFramebuffer:Le,drawBuffers:Se,useProgram:Xe,setBlending:lt,setMaterial:Ue,setFlipSided:Ce,setCullFace:ge,setLineWidth:ct,setPolygonOffset:_e,setScissorTest:Oe,activeTexture:At,bindTexture:_t,unbindTexture:b,compressedTexImage2D:x,compressedTexImage3D:F,texImage2D:ve,texImage3D:ee,updateUBOMapping:ye,uniformBlockBinding:oe,texStorage2D:ie,texStorage3D:xe,texSubImage2D:q,texSubImage3D:Z,compressedTexSubImage2D:V,compressedTexSubImage3D:Me,scissor:ce,viewport:Re,reset:Fe}}function ex(n,e,t,i,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new De,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(b,x){return f?new OffscreenCanvas(b,x):Mr("canvas")}function _(b,x,F){let q=1;const Z=_t(b);if((Z.width>F||Z.height>F)&&(q=F/Math.max(Z.width,Z.height)),q<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const V=Math.floor(q*Z.width),Me=Math.floor(q*Z.height);u===void 0&&(u=m(V,Me));const ie=x?m(V,Me):u;return ie.width=V,ie.height=Me,ie.getContext("2d").drawImage(b,0,0,V,Me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+V+"x"+Me+")."),ie}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),b;return b}function g(b){return b.generateMipmaps}function p(b){n.generateMipmap(b)}function T(b){return b.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?n.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function E(b,x,F,q,Z=!1){if(b!==null){if(n[b]!==void 0)return n[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let V=x;if(x===n.RED&&(F===n.FLOAT&&(V=n.R32F),F===n.HALF_FLOAT&&(V=n.R16F),F===n.UNSIGNED_BYTE&&(V=n.R8)),x===n.RED_INTEGER&&(F===n.UNSIGNED_BYTE&&(V=n.R8UI),F===n.UNSIGNED_SHORT&&(V=n.R16UI),F===n.UNSIGNED_INT&&(V=n.R32UI),F===n.BYTE&&(V=n.R8I),F===n.SHORT&&(V=n.R16I),F===n.INT&&(V=n.R32I)),x===n.RG&&(F===n.FLOAT&&(V=n.RG32F),F===n.HALF_FLOAT&&(V=n.RG16F),F===n.UNSIGNED_BYTE&&(V=n.RG8)),x===n.RG_INTEGER&&(F===n.UNSIGNED_BYTE&&(V=n.RG8UI),F===n.UNSIGNED_SHORT&&(V=n.RG16UI),F===n.UNSIGNED_INT&&(V=n.RG32UI),F===n.BYTE&&(V=n.RG8I),F===n.SHORT&&(V=n.RG16I),F===n.INT&&(V=n.RG32I)),x===n.RGB_INTEGER&&(F===n.UNSIGNED_BYTE&&(V=n.RGB8UI),F===n.UNSIGNED_SHORT&&(V=n.RGB16UI),F===n.UNSIGNED_INT&&(V=n.RGB32UI),F===n.BYTE&&(V=n.RGB8I),F===n.SHORT&&(V=n.RGB16I),F===n.INT&&(V=n.RGB32I)),x===n.RGBA_INTEGER&&(F===n.UNSIGNED_BYTE&&(V=n.RGBA8UI),F===n.UNSIGNED_SHORT&&(V=n.RGBA16UI),F===n.UNSIGNED_INT&&(V=n.RGBA32UI),F===n.BYTE&&(V=n.RGBA8I),F===n.SHORT&&(V=n.RGBA16I),F===n.INT&&(V=n.RGBA32I)),x===n.RGB&&(F===n.UNSIGNED_INT_5_9_9_9_REV&&(V=n.RGB9_E5),F===n.UNSIGNED_INT_10F_11F_11F_REV&&(V=n.R11F_G11F_B10F)),x===n.RGBA){const Me=Z?Ta:Ye.getTransfer(q);F===n.FLOAT&&(V=n.RGBA32F),F===n.HALF_FLOAT&&(V=n.RGBA16F),F===n.UNSIGNED_BYTE&&(V=Me===Qe?n.SRGB8_ALPHA8:n.RGBA8),F===n.UNSIGNED_SHORT_4_4_4_4&&(V=n.RGBA4),F===n.UNSIGNED_SHORT_5_5_5_1&&(V=n.RGB5_A1)}return(V===n.R16F||V===n.R32F||V===n.RG16F||V===n.RG32F||V===n.RGBA16F||V===n.RGBA32F)&&e.get("EXT_color_buffer_float"),V}function S(b,x){let F;return b?x===null||x===Wi||x===_r?F=n.DEPTH24_STENCIL8:x===ei?F=n.DEPTH32F_STENCIL8:x===gr&&(F=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Wi||x===_r?F=n.DEPTH_COMPONENT24:x===ei?F=n.DEPTH_COMPONENT32F:x===gr&&(F=n.DEPTH_COMPONENT16),F}function R(b,x){return g(b)===!0||b.isFramebufferTexture&&b.minFilter!==Tn&&b.minFilter!==Ln?Math.log2(Math.max(x.width,x.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?x.mipmaps.length:1}function w(b){const x=b.target;x.removeEventListener("dispose",w),P(x),x.isVideoTexture&&h.delete(x)}function C(b){const x=b.target;x.removeEventListener("dispose",C),y(x)}function P(b){const x=i.get(b);if(x.__webglInit===void 0)return;const F=b.source,q=d.get(F);if(q){const Z=q[x.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&M(b),Object.keys(q).length===0&&d.delete(F)}i.remove(b)}function M(b){const x=i.get(b);n.deleteTexture(x.__webglTexture);const F=b.source,q=d.get(F);delete q[x.__cacheKey],a.memory.textures--}function y(b){const x=i.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),i.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(x.__webglFramebuffer[q]))for(let Z=0;Z<x.__webglFramebuffer[q].length;Z++)n.deleteFramebuffer(x.__webglFramebuffer[q][Z]);else n.deleteFramebuffer(x.__webglFramebuffer[q]);x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer[q])}else{if(Array.isArray(x.__webglFramebuffer))for(let q=0;q<x.__webglFramebuffer.length;q++)n.deleteFramebuffer(x.__webglFramebuffer[q]);else n.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&n.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let q=0;q<x.__webglColorRenderbuffer.length;q++)x.__webglColorRenderbuffer[q]&&n.deleteRenderbuffer(x.__webglColorRenderbuffer[q]);x.__webglDepthRenderbuffer&&n.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const F=b.textures;for(let q=0,Z=F.length;q<Z;q++){const V=i.get(F[q]);V.__webglTexture&&(n.deleteTexture(V.__webglTexture),a.memory.textures--),i.remove(F[q])}i.remove(b)}let L=0;function z(){L=0}function H(){const b=L;return b>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+s.maxTextures),L+=1,b}function W(b){const x=[];return x.push(b.wrapS),x.push(b.wrapT),x.push(b.wrapR||0),x.push(b.magFilter),x.push(b.minFilter),x.push(b.anisotropy),x.push(b.internalFormat),x.push(b.format),x.push(b.type),x.push(b.generateMipmaps),x.push(b.premultiplyAlpha),x.push(b.flipY),x.push(b.unpackAlignment),x.push(b.colorSpace),x.join()}function Y(b,x){const F=i.get(b);if(b.isVideoTexture&&Oe(b),b.isRenderTargetTexture===!1&&b.isExternalTexture!==!0&&b.version>0&&F.__version!==b.version){const q=b.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(F,b,x);return}}else b.isExternalTexture&&(F.__webglTexture=b.sourceTexture?b.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,F.__webglTexture,n.TEXTURE0+x)}function X(b,x){const F=i.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&F.__version!==b.version){$(F,b,x);return}t.bindTexture(n.TEXTURE_2D_ARRAY,F.__webglTexture,n.TEXTURE0+x)}function ne(b,x){const F=i.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&F.__version!==b.version){$(F,b,x);return}t.bindTexture(n.TEXTURE_3D,F.__webglTexture,n.TEXTURE0+x)}function G(b,x){const F=i.get(b);if(b.version>0&&F.__version!==b.version){j(F,b,x);return}t.bindTexture(n.TEXTURE_CUBE_MAP,F.__webglTexture,n.TEXTURE0+x)}const ae={[ba]:n.REPEAT,[Fi]:n.CLAMP_TO_EDGE,[Ko]:n.MIRRORED_REPEAT},he={[Tn]:n.NEAREST,[hf]:n.NEAREST_MIPMAP_NEAREST,[Ir]:n.NEAREST_MIPMAP_LINEAR,[Ln]:n.LINEAR,[$a]:n.LINEAR_MIPMAP_NEAREST,[zi]:n.LINEAR_MIPMAP_LINEAR},Ee={[ff]:n.NEVER,[vf]:n.ALWAYS,[pf]:n.LESS,[vu]:n.LEQUAL,[mf]:n.EQUAL,[xf]:n.GEQUAL,[gf]:n.GREATER,[_f]:n.NOTEQUAL};function Be(b,x){if(x.type===ei&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===Ln||x.magFilter===$a||x.magFilter===Ir||x.magFilter===zi||x.minFilter===Ln||x.minFilter===$a||x.minFilter===Ir||x.minFilter===zi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(b,n.TEXTURE_WRAP_S,ae[x.wrapS]),n.texParameteri(b,n.TEXTURE_WRAP_T,ae[x.wrapT]),(b===n.TEXTURE_3D||b===n.TEXTURE_2D_ARRAY)&&n.texParameteri(b,n.TEXTURE_WRAP_R,ae[x.wrapR]),n.texParameteri(b,n.TEXTURE_MAG_FILTER,he[x.magFilter]),n.texParameteri(b,n.TEXTURE_MIN_FILTER,he[x.minFilter]),x.compareFunction&&(n.texParameteri(b,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(b,n.TEXTURE_COMPARE_FUNC,Ee[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Tn||x.minFilter!==Ir&&x.minFilter!==zi||x.type===ei&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");n.texParameterf(b,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function nt(b,x){let F=!1;b.__webglInit===void 0&&(b.__webglInit=!0,x.addEventListener("dispose",w));const q=x.source;let Z=d.get(q);Z===void 0&&(Z={},d.set(q,Z));const V=W(x);if(V!==b.__cacheKey){Z[V]===void 0&&(Z[V]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,F=!0),Z[V].usedTimes++;const Me=Z[b.__cacheKey];Me!==void 0&&(Z[b.__cacheKey].usedTimes--,Me.usedTimes===0&&M(x)),b.__cacheKey=V,b.__webglTexture=Z[V].texture}return F}function ot(b,x,F){return Math.floor(Math.floor(b/F)/x)}function Ke(b,x,F,q){const V=b.updateRanges;if(V.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,x.width,x.height,F,q,x.data);else{V.sort((ee,ce)=>ee.start-ce.start);let Me=0;for(let ee=1;ee<V.length;ee++){const ce=V[Me],Re=V[ee],ye=ce.start+ce.count,oe=ot(Re.start,x.width,4),Fe=ot(ce.start,x.width,4);Re.start<=ye+1&&oe===Fe&&ot(Re.start+Re.count-1,x.width,4)===oe?ce.count=Math.max(ce.count,Re.start+Re.count-ce.start):(++Me,V[Me]=Re)}V.length=Me+1;const ie=n.getParameter(n.UNPACK_ROW_LENGTH),xe=n.getParameter(n.UNPACK_SKIP_PIXELS),ve=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,x.width);for(let ee=0,ce=V.length;ee<ce;ee++){const Re=V[ee],ye=Math.floor(Re.start/4),oe=Math.ceil(Re.count/4),Fe=ye%x.width,D=Math.floor(ye/x.width),te=oe,se=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Fe),n.pixelStorei(n.UNPACK_SKIP_ROWS,D),t.texSubImage2D(n.TEXTURE_2D,0,Fe,D,te,se,F,q,x.data)}b.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,ie),n.pixelStorei(n.UNPACK_SKIP_PIXELS,xe),n.pixelStorei(n.UNPACK_SKIP_ROWS,ve)}}function $(b,x,F){let q=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(q=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(q=n.TEXTURE_3D);const Z=nt(b,x),V=x.source;t.bindTexture(q,b.__webglTexture,n.TEXTURE0+F);const Me=i.get(V);if(V.version!==Me.__version||Z===!0){t.activeTexture(n.TEXTURE0+F);const ie=Ye.getPrimaries(Ye.workingColorSpace),xe=x.colorSpace===fi?null:Ye.getPrimaries(x.colorSpace),ve=x.colorSpace===fi||ie===xe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);let ee=_(x.image,!1,s.maxTextureSize);ee=At(x,ee);const ce=r.convert(x.format,x.colorSpace),Re=r.convert(x.type);let ye=E(x.internalFormat,ce,Re,x.colorSpace,x.isVideoTexture);Be(q,x);let oe;const Fe=x.mipmaps,D=x.isVideoTexture!==!0,te=Me.__version===void 0||Z===!0,se=V.dataReady,de=R(x,ee);if(x.isDepthTexture)ye=S(x.format===vr,x.type),te&&(D?t.texStorage2D(n.TEXTURE_2D,1,ye,ee.width,ee.height):t.texImage2D(n.TEXTURE_2D,0,ye,ee.width,ee.height,0,ce,Re,null));else if(x.isDataTexture)if(Fe.length>0){D&&te&&t.texStorage2D(n.TEXTURE_2D,de,ye,Fe[0].width,Fe[0].height);for(let J=0,K=Fe.length;J<K;J++)oe=Fe[J],D?se&&t.texSubImage2D(n.TEXTURE_2D,J,0,0,oe.width,oe.height,ce,Re,oe.data):t.texImage2D(n.TEXTURE_2D,J,ye,oe.width,oe.height,0,ce,Re,oe.data);x.generateMipmaps=!1}else D?(te&&t.texStorage2D(n.TEXTURE_2D,de,ye,ee.width,ee.height),se&&Ke(x,ee,ce,Re)):t.texImage2D(n.TEXTURE_2D,0,ye,ee.width,ee.height,0,ce,Re,ee.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){D&&te&&t.texStorage3D(n.TEXTURE_2D_ARRAY,de,ye,Fe[0].width,Fe[0].height,ee.depth);for(let J=0,K=Fe.length;J<K;J++)if(oe=Fe[J],x.format!==bn)if(ce!==null)if(D){if(se)if(x.layerUpdates.size>0){const me=ah(oe.width,oe.height,x.format,x.type);for(const Ie of x.layerUpdates){const it=oe.data.subarray(Ie*me/oe.data.BYTES_PER_ELEMENT,(Ie+1)*me/oe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,Ie,oe.width,oe.height,1,ce,it)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,0,oe.width,oe.height,ee.depth,ce,oe.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,J,ye,oe.width,oe.height,ee.depth,0,oe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else D?se&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,0,oe.width,oe.height,ee.depth,ce,Re,oe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,J,ye,oe.width,oe.height,ee.depth,0,ce,Re,oe.data)}else{D&&te&&t.texStorage2D(n.TEXTURE_2D,de,ye,Fe[0].width,Fe[0].height);for(let J=0,K=Fe.length;J<K;J++)oe=Fe[J],x.format!==bn?ce!==null?D?se&&t.compressedTexSubImage2D(n.TEXTURE_2D,J,0,0,oe.width,oe.height,ce,oe.data):t.compressedTexImage2D(n.TEXTURE_2D,J,ye,oe.width,oe.height,0,oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):D?se&&t.texSubImage2D(n.TEXTURE_2D,J,0,0,oe.width,oe.height,ce,Re,oe.data):t.texImage2D(n.TEXTURE_2D,J,ye,oe.width,oe.height,0,ce,Re,oe.data)}else if(x.isDataArrayTexture)if(D){if(te&&t.texStorage3D(n.TEXTURE_2D_ARRAY,de,ye,ee.width,ee.height,ee.depth),se)if(x.layerUpdates.size>0){const J=ah(ee.width,ee.height,x.format,x.type);for(const K of x.layerUpdates){const me=ee.data.subarray(K*J/ee.data.BYTES_PER_ELEMENT,(K+1)*J/ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,K,ee.width,ee.height,1,ce,Re,me)}x.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,ce,Re,ee.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,ye,ee.width,ee.height,ee.depth,0,ce,Re,ee.data);else if(x.isData3DTexture)D?(te&&t.texStorage3D(n.TEXTURE_3D,de,ye,ee.width,ee.height,ee.depth),se&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,ce,Re,ee.data)):t.texImage3D(n.TEXTURE_3D,0,ye,ee.width,ee.height,ee.depth,0,ce,Re,ee.data);else if(x.isFramebufferTexture){if(te)if(D)t.texStorage2D(n.TEXTURE_2D,de,ye,ee.width,ee.height);else{let J=ee.width,K=ee.height;for(let me=0;me<de;me++)t.texImage2D(n.TEXTURE_2D,me,ye,J,K,0,ce,Re,null),J>>=1,K>>=1}}else if(Fe.length>0){if(D&&te){const J=_t(Fe[0]);t.texStorage2D(n.TEXTURE_2D,de,ye,J.width,J.height)}for(let J=0,K=Fe.length;J<K;J++)oe=Fe[J],D?se&&t.texSubImage2D(n.TEXTURE_2D,J,0,0,ce,Re,oe):t.texImage2D(n.TEXTURE_2D,J,ye,ce,Re,oe);x.generateMipmaps=!1}else if(D){if(te){const J=_t(ee);t.texStorage2D(n.TEXTURE_2D,de,ye,J.width,J.height)}se&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ce,Re,ee)}else t.texImage2D(n.TEXTURE_2D,0,ye,ce,Re,ee);g(x)&&p(q),Me.__version=V.version,x.onUpdate&&x.onUpdate(x)}b.__version=x.version}function j(b,x,F){if(x.image.length!==6)return;const q=nt(b,x),Z=x.source;t.bindTexture(n.TEXTURE_CUBE_MAP,b.__webglTexture,n.TEXTURE0+F);const V=i.get(Z);if(Z.version!==V.__version||q===!0){t.activeTexture(n.TEXTURE0+F);const Me=Ye.getPrimaries(Ye.workingColorSpace),ie=x.colorSpace===fi?null:Ye.getPrimaries(x.colorSpace),xe=x.colorSpace===fi||Me===ie?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);const ve=x.isCompressedTexture||x.image[0].isCompressedTexture,ee=x.image[0]&&x.image[0].isDataTexture,ce=[];for(let K=0;K<6;K++)!ve&&!ee?ce[K]=_(x.image[K],!0,s.maxCubemapSize):ce[K]=ee?x.image[K].image:x.image[K],ce[K]=At(x,ce[K]);const Re=ce[0],ye=r.convert(x.format,x.colorSpace),oe=r.convert(x.type),Fe=E(x.internalFormat,ye,oe,x.colorSpace),D=x.isVideoTexture!==!0,te=V.__version===void 0||q===!0,se=Z.dataReady;let de=R(x,Re);Be(n.TEXTURE_CUBE_MAP,x);let J;if(ve){D&&te&&t.texStorage2D(n.TEXTURE_CUBE_MAP,de,Fe,Re.width,Re.height);for(let K=0;K<6;K++){J=ce[K].mipmaps;for(let me=0;me<J.length;me++){const Ie=J[me];x.format!==bn?ye!==null?D?se&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,me,0,0,Ie.width,Ie.height,ye,Ie.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,me,Fe,Ie.width,Ie.height,0,Ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,me,0,0,Ie.width,Ie.height,ye,oe,Ie.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,me,Fe,Ie.width,Ie.height,0,ye,oe,Ie.data)}}}else{if(J=x.mipmaps,D&&te){J.length>0&&de++;const K=_t(ce[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,de,Fe,K.width,K.height)}for(let K=0;K<6;K++)if(ee){D?se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,ce[K].width,ce[K].height,ye,oe,ce[K].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Fe,ce[K].width,ce[K].height,0,ye,oe,ce[K].data);for(let me=0;me<J.length;me++){const it=J[me].image[K].image;D?se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,me+1,0,0,it.width,it.height,ye,oe,it.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,me+1,Fe,it.width,it.height,0,ye,oe,it.data)}}else{D?se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,ye,oe,ce[K]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Fe,ye,oe,ce[K]);for(let me=0;me<J.length;me++){const Ie=J[me];D?se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,me+1,0,0,ye,oe,Ie.image[K]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,me+1,Fe,ye,oe,Ie.image[K])}}}g(x)&&p(n.TEXTURE_CUBE_MAP),V.__version=Z.version,x.onUpdate&&x.onUpdate(x)}b.__version=x.version}function fe(b,x,F,q,Z,V){const Me=r.convert(F.format,F.colorSpace),ie=r.convert(F.type),xe=E(F.internalFormat,Me,ie,F.colorSpace),ve=i.get(x),ee=i.get(F);if(ee.__renderTarget=x,!ve.__hasExternalTextures){const ce=Math.max(1,x.width>>V),Re=Math.max(1,x.height>>V);Z===n.TEXTURE_3D||Z===n.TEXTURE_2D_ARRAY?t.texImage3D(Z,V,xe,ce,Re,x.depth,0,Me,ie,null):t.texImage2D(Z,V,xe,ce,Re,0,Me,ie,null)}t.bindFramebuffer(n.FRAMEBUFFER,b),_e(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,q,Z,ee.__webglTexture,0,ct(x)):(Z===n.TEXTURE_2D||Z>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,q,Z,ee.__webglTexture,V),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Le(b,x,F){if(n.bindRenderbuffer(n.RENDERBUFFER,b),x.depthBuffer){const q=x.depthTexture,Z=q&&q.isDepthTexture?q.type:null,V=S(x.stencilBuffer,Z),Me=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ie=ct(x);_e(x)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ie,V,x.width,x.height):F?n.renderbufferStorageMultisample(n.RENDERBUFFER,ie,V,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,V,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Me,n.RENDERBUFFER,b)}else{const q=x.textures;for(let Z=0;Z<q.length;Z++){const V=q[Z],Me=r.convert(V.format,V.colorSpace),ie=r.convert(V.type),xe=E(V.internalFormat,Me,ie,V.colorSpace),ve=ct(x);F&&_e(x)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ve,xe,x.width,x.height):_e(x)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ve,xe,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,xe,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Se(b,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,b),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const q=i.get(x.depthTexture);q.__renderTarget=x,(!q.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),Y(x.depthTexture,0);const Z=q.__webglTexture,V=ct(x);if(x.depthTexture.format===xr)_e(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Z,0,V):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Z,0);else if(x.depthTexture.format===vr)_e(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Z,0,V):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function Xe(b){const x=i.get(b),F=b.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==b.depthTexture){const q=b.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),q){const Z=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,q.removeEventListener("dispose",Z)};q.addEventListener("dispose",Z),x.__depthDisposeCallback=Z}x.__boundDepthTexture=q}if(b.depthTexture&&!x.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");const q=b.texture.mipmaps;q&&q.length>0?Se(x.__webglFramebuffer[0],b):Se(x.__webglFramebuffer,b)}else if(F){x.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[q]),x.__webglDepthbuffer[q]===void 0)x.__webglDepthbuffer[q]=n.createRenderbuffer(),Le(x.__webglDepthbuffer[q],b,!1);else{const Z=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,V=x.__webglDepthbuffer[q];n.bindRenderbuffer(n.RENDERBUFFER,V),n.framebufferRenderbuffer(n.FRAMEBUFFER,Z,n.RENDERBUFFER,V)}}else{const q=b.texture.mipmaps;if(q&&q.length>0?t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=n.createRenderbuffer(),Le(x.__webglDepthbuffer,b,!1);else{const Z=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,V=x.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,V),n.framebufferRenderbuffer(n.FRAMEBUFFER,Z,n.RENDERBUFFER,V)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function It(b,x,F){const q=i.get(b);x!==void 0&&fe(q.__webglFramebuffer,b,b.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),F!==void 0&&Xe(b)}function A(b){const x=b.texture,F=i.get(b),q=i.get(x);b.addEventListener("dispose",C);const Z=b.textures,V=b.isWebGLCubeRenderTarget===!0,Me=Z.length>1;if(Me||(q.__webglTexture===void 0&&(q.__webglTexture=n.createTexture()),q.__version=x.version,a.memory.textures++),V){F.__webglFramebuffer=[];for(let ie=0;ie<6;ie++)if(x.mipmaps&&x.mipmaps.length>0){F.__webglFramebuffer[ie]=[];for(let xe=0;xe<x.mipmaps.length;xe++)F.__webglFramebuffer[ie][xe]=n.createFramebuffer()}else F.__webglFramebuffer[ie]=n.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){F.__webglFramebuffer=[];for(let ie=0;ie<x.mipmaps.length;ie++)F.__webglFramebuffer[ie]=n.createFramebuffer()}else F.__webglFramebuffer=n.createFramebuffer();if(Me)for(let ie=0,xe=Z.length;ie<xe;ie++){const ve=i.get(Z[ie]);ve.__webglTexture===void 0&&(ve.__webglTexture=n.createTexture(),a.memory.textures++)}if(b.samples>0&&_e(b)===!1){F.__webglMultisampledFramebuffer=n.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let ie=0;ie<Z.length;ie++){const xe=Z[ie];F.__webglColorRenderbuffer[ie]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,F.__webglColorRenderbuffer[ie]);const ve=r.convert(xe.format,xe.colorSpace),ee=r.convert(xe.type),ce=E(xe.internalFormat,ve,ee,xe.colorSpace,b.isXRRenderTarget===!0),Re=ct(b);n.renderbufferStorageMultisample(n.RENDERBUFFER,Re,ce,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ie,n.RENDERBUFFER,F.__webglColorRenderbuffer[ie])}n.bindRenderbuffer(n.RENDERBUFFER,null),b.depthBuffer&&(F.__webglDepthRenderbuffer=n.createRenderbuffer(),Le(F.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(V){t.bindTexture(n.TEXTURE_CUBE_MAP,q.__webglTexture),Be(n.TEXTURE_CUBE_MAP,x);for(let ie=0;ie<6;ie++)if(x.mipmaps&&x.mipmaps.length>0)for(let xe=0;xe<x.mipmaps.length;xe++)fe(F.__webglFramebuffer[ie][xe],b,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,xe);else fe(F.__webglFramebuffer[ie],b,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0);g(x)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Me){for(let ie=0,xe=Z.length;ie<xe;ie++){const ve=Z[ie],ee=i.get(ve);let ce=n.TEXTURE_2D;(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(ce=b.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ce,ee.__webglTexture),Be(ce,ve),fe(F.__webglFramebuffer,b,ve,n.COLOR_ATTACHMENT0+ie,ce,0),g(ve)&&p(ce)}t.unbindTexture()}else{let ie=n.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(ie=b.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ie,q.__webglTexture),Be(ie,x),x.mipmaps&&x.mipmaps.length>0)for(let xe=0;xe<x.mipmaps.length;xe++)fe(F.__webglFramebuffer[xe],b,x,n.COLOR_ATTACHMENT0,ie,xe);else fe(F.__webglFramebuffer,b,x,n.COLOR_ATTACHMENT0,ie,0);g(x)&&p(ie),t.unbindTexture()}b.depthBuffer&&Xe(b)}function lt(b){const x=b.textures;for(let F=0,q=x.length;F<q;F++){const Z=x[F];if(g(Z)){const V=T(b),Me=i.get(Z).__webglTexture;t.bindTexture(V,Me),p(V),t.unbindTexture()}}}const Ue=[],Ce=[];function ge(b){if(b.samples>0){if(_e(b)===!1){const x=b.textures,F=b.width,q=b.height;let Z=n.COLOR_BUFFER_BIT;const V=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Me=i.get(b),ie=x.length>1;if(ie)for(let ve=0;ve<x.length;ve++)t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer);const xe=b.texture.mipmaps;xe&&xe.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Me.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let ve=0;ve<x.length;ve++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(Z|=n.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(Z|=n.STENCIL_BUFFER_BIT)),ie){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Me.__webglColorRenderbuffer[ve]);const ee=i.get(x[ve]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ee,0)}n.blitFramebuffer(0,0,F,q,0,0,F,q,Z,n.NEAREST),c===!0&&(Ue.length=0,Ce.length=0,Ue.push(n.COLOR_ATTACHMENT0+ve),b.depthBuffer&&b.resolveDepthBuffer===!1&&(Ue.push(V),Ce.push(V),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Ce)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Ue))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ie)for(let ve=0;ve<x.length;ve++){t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.RENDERBUFFER,Me.__webglColorRenderbuffer[ve]);const ee=i.get(x[ve]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.TEXTURE_2D,ee,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&c){const x=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[x])}}}function ct(b){return Math.min(s.maxSamples,b.samples)}function _e(b){const x=i.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Oe(b){const x=a.render.frame;h.get(b)!==x&&(h.set(b,x),b.update())}function At(b,x){const F=b.colorSpace,q=b.format,Z=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||F!==Ds&&F!==fi&&(Ye.getTransfer(F)===Qe?(q!==bn||Z!==Nn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),x}function _t(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(l.width=b.naturalWidth||b.width,l.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(l.width=b.displayWidth,l.height=b.displayHeight):(l.width=b.width,l.height=b.height),l}this.allocateTextureUnit=H,this.resetTextureUnits=z,this.setTexture2D=Y,this.setTexture2DArray=X,this.setTexture3D=ne,this.setTextureCube=G,this.rebindTextures=It,this.setupRenderTarget=A,this.updateRenderTargetMipmap=lt,this.updateMultisampleRenderTarget=ge,this.setupDepthRenderbuffer=Xe,this.setupFrameBufferTexture=fe,this.useMultisampledRTT=_e}function tx(n,e){function t(i,s=fi){let r;const a=Ye.getTransfer(s);if(i===Nn)return n.UNSIGNED_BYTE;if(i===zl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Ol)return n.UNSIGNED_SHORT_5_5_5_1;if(i===uu)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===du)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===cu)return n.BYTE;if(i===hu)return n.SHORT;if(i===gr)return n.UNSIGNED_SHORT;if(i===Fl)return n.INT;if(i===Wi)return n.UNSIGNED_INT;if(i===ei)return n.FLOAT;if(i===Ar)return n.HALF_FLOAT;if(i===fu)return n.ALPHA;if(i===pu)return n.RGB;if(i===bn)return n.RGBA;if(i===xr)return n.DEPTH_COMPONENT;if(i===vr)return n.DEPTH_STENCIL;if(i===mu)return n.RED;if(i===kl)return n.RED_INTEGER;if(i===gu)return n.RG;if(i===Bl)return n.RG_INTEGER;if(i===Hl)return n.RGBA_INTEGER;if(i===ga||i===_a||i===xa||i===va)if(a===Qe)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===ga)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===_a)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===xa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===va)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===ga)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===_a)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===xa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===va)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Zo||i===jo||i===Jo||i===Qo)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Zo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===jo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Jo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Qo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===el||i===tl||i===nl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===el||i===tl)return a===Qe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===nl)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===il||i===sl||i===rl||i===al||i===ol||i===ll||i===cl||i===hl||i===ul||i===dl||i===fl||i===pl||i===ml||i===gl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===il)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===sl)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===rl)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===al)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ol)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ll)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===cl)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===hl)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ul)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===dl)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===fl)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===pl)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ml)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===gl)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===_l||i===xl||i===vl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===_l)return a===Qe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===xl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===vl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===yl||i===Ml||i===Sl||i===El)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===yl)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Ml)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Sl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===El)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===_r?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const nx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ix=`
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

}`;class sx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new Du(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new xi({vertexShader:nx,fragmentShader:ix,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Te(new Ht(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class rx extends Fs{constructor(e,t){super();const i=this;let s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,m=null;const _=typeof XRWebGLBinding<"u",g=new sx,p={},T=t.getContextAttributes();let E=null,S=null;const R=[],w=[],C=new De;let P=null;const M=new ln;M.viewport=new et;const y=new ln;y.viewport=new et;const L=[M,y],z=new bp;let H=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let j=R[$];return j===void 0&&(j=new go,R[$]=j),j.getTargetRaySpace()},this.getControllerGrip=function($){let j=R[$];return j===void 0&&(j=new go,R[$]=j),j.getGripSpace()},this.getHand=function($){let j=R[$];return j===void 0&&(j=new go,R[$]=j),j.getHandSpace()};function Y($){const j=w.indexOf($.inputSource);if(j===-1)return;const fe=R[j];fe!==void 0&&(fe.update($.inputSource,$.frame,l||a),fe.dispatchEvent({type:$.type,data:$.inputSource}))}function X(){s.removeEventListener("select",Y),s.removeEventListener("selectstart",Y),s.removeEventListener("selectend",Y),s.removeEventListener("squeeze",Y),s.removeEventListener("squeezestart",Y),s.removeEventListener("squeezeend",Y),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",ne);for(let $=0;$<R.length;$++){const j=w[$];j!==null&&(w[$]=null,R[$].disconnect(j))}H=null,W=null,g.reset();for(const $ in p)delete p[$];e.setRenderTarget(E),f=null,d=null,u=null,s=null,S=null,Ke.stop(),i.isPresenting=!1,e.setPixelRatio(P),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function($){l=$},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(E=e.getRenderTarget(),s.addEventListener("select",Y),s.addEventListener("selectstart",Y),s.addEventListener("selectend",Y),s.addEventListener("squeeze",Y),s.addEventListener("squeezestart",Y),s.addEventListener("squeezeend",Y),s.addEventListener("end",X),s.addEventListener("inputsourceschange",ne),T.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(C),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let fe=null,Le=null,Se=null;T.depth&&(Se=T.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,fe=T.stencil?vr:xr,Le=T.stencil?_r:Wi);const Xe={colorFormat:t.RGBA8,depthFormat:Se,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(Xe),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),S=new Xi(d.textureWidth,d.textureHeight,{format:bn,type:Nn,depthTexture:new Pu(d.textureWidth,d.textureHeight,Le,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:T.stencil,colorSpace:e.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const fe={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,fe),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),S=new Xi(f.framebufferWidth,f.framebufferHeight,{format:bn,type:Nn,colorSpace:e.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),Ke.setContext(s),Ke.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function ne($){for(let j=0;j<$.removed.length;j++){const fe=$.removed[j],Le=w.indexOf(fe);Le>=0&&(w[Le]=null,R[Le].disconnect(fe))}for(let j=0;j<$.added.length;j++){const fe=$.added[j];let Le=w.indexOf(fe);if(Le===-1){for(let Xe=0;Xe<R.length;Xe++)if(Xe>=w.length){w.push(fe),Le=Xe;break}else if(w[Xe]===null){w[Xe]=fe,Le=Xe;break}if(Le===-1)break}const Se=R[Le];Se&&Se.connect(fe)}}const G=new I,ae=new I;function he($,j,fe){G.setFromMatrixPosition(j.matrixWorld),ae.setFromMatrixPosition(fe.matrixWorld);const Le=G.distanceTo(ae),Se=j.projectionMatrix.elements,Xe=fe.projectionMatrix.elements,It=Se[14]/(Se[10]-1),A=Se[14]/(Se[10]+1),lt=(Se[9]+1)/Se[5],Ue=(Se[9]-1)/Se[5],Ce=(Se[8]-1)/Se[0],ge=(Xe[8]+1)/Xe[0],ct=It*Ce,_e=It*ge,Oe=Le/(-Ce+ge),At=Oe*-Ce;if(j.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(At),$.translateZ(Oe),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Se[10]===-1)$.projectionMatrix.copy(j.projectionMatrix),$.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{const _t=It+Oe,b=A+Oe,x=ct-At,F=_e+(Le-At),q=lt*A/b*_t,Z=Ue*A/b*_t;$.projectionMatrix.makePerspective(x,F,q,Z,_t,b),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function Ee($,j){j===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(j.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let j=$.near,fe=$.far;g.texture!==null&&(g.depthNear>0&&(j=g.depthNear),g.depthFar>0&&(fe=g.depthFar)),z.near=y.near=M.near=j,z.far=y.far=M.far=fe,(H!==z.near||W!==z.far)&&(s.updateRenderState({depthNear:z.near,depthFar:z.far}),H=z.near,W=z.far),z.layers.mask=$.layers.mask|6,M.layers.mask=z.layers.mask&3,y.layers.mask=z.layers.mask&5;const Le=$.parent,Se=z.cameras;Ee(z,Le);for(let Xe=0;Xe<Se.length;Xe++)Ee(Se[Xe],Le);Se.length===2?he(z,M,y):z.projectionMatrix.copy(M.projectionMatrix),Be($,z,Le)};function Be($,j,fe){fe===null?$.matrix.copy(j.matrixWorld):($.matrix.copy(fe.matrixWorld),$.matrix.invert(),$.matrix.multiply(j.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(j.projectionMatrix),$.projectionMatrixInverse.copy(j.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=yr*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function($){c=$,d!==null&&(d.fixedFoveation=$),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=$)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(z)},this.getCameraTexture=function($){return p[$]};let nt=null;function ot($,j){if(h=j.getViewerPose(l||a),m=j,h!==null){const fe=h.views;f!==null&&(e.setRenderTargetFramebuffer(S,f.framebuffer),e.setRenderTarget(S));let Le=!1;fe.length!==z.cameras.length&&(z.cameras.length=0,Le=!0);for(let A=0;A<fe.length;A++){const lt=fe[A];let Ue=null;if(f!==null)Ue=f.getViewport(lt);else{const ge=u.getViewSubImage(d,lt);Ue=ge.viewport,A===0&&(e.setRenderTargetTextures(S,ge.colorTexture,ge.depthStencilTexture),e.setRenderTarget(S))}let Ce=L[A];Ce===void 0&&(Ce=new ln,Ce.layers.enable(A),Ce.viewport=new et,L[A]=Ce),Ce.matrix.fromArray(lt.transform.matrix),Ce.matrix.decompose(Ce.position,Ce.quaternion,Ce.scale),Ce.projectionMatrix.fromArray(lt.projectionMatrix),Ce.projectionMatrixInverse.copy(Ce.projectionMatrix).invert(),Ce.viewport.set(Ue.x,Ue.y,Ue.width,Ue.height),A===0&&(z.matrix.copy(Ce.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),Le===!0&&z.cameras.push(Ce)}const Se=s.enabledFeatures;if(Se&&Se.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){u=i.getBinding();const A=u.getDepthInformation(fe[0]);A&&A.isValid&&A.texture&&g.init(A,s.renderState)}if(Se&&Se.includes("camera-access")&&_){e.state.unbindTexture(),u=i.getBinding();for(let A=0;A<fe.length;A++){const lt=fe[A].camera;if(lt){let Ue=p[lt];Ue||(Ue=new Du,p[lt]=Ue);const Ce=u.getCameraImage(lt);Ue.sourceTexture=Ce}}}}for(let fe=0;fe<R.length;fe++){const Le=w[fe],Se=R[fe];Le!==null&&Se!==void 0&&Se.update(Le,j,l||a)}nt&&nt($,j),j.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:j}),m=null}const Ke=new Fu;Ke.setAnimationLoop(ot),this.setAnimationLoop=function($){nt=$},this.dispose=function(){}}}const Ai=new Fn,ax=new at;function ox(n,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function i(g,p){p.color.getRGB(g.fogColor.value,Tu(n)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,T,E,S){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),u(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p)):p.isMeshStandardMaterial?(r(g,p),d(g,p),p.isMeshPhysicalMaterial&&f(g,p,S)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),_(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?c(g,p,T,E):p.isSpriteMaterial?l(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===en&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===en&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const T=e.get(p),E=T.envMap,S=T.envMapRotation;E&&(g.envMap.value=E,Ai.copy(S),Ai.x*=-1,Ai.y*=-1,Ai.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Ai.y*=-1,Ai.z*=-1),g.envMapRotation.value.setFromMatrix4(ax.makeRotationFromEuler(Ai)),g.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function c(g,p,T,E){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*T,g.scale.value=E*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function l(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,T){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===en&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=T.texture,g.transmissionSamplerSize.value.set(T.width,T.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function _(g,p){const T=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(T.matrixWorld),g.nearDistance.value=T.shadow.camera.near,g.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function lx(n,e,t,i){let s={},r={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(T,E){const S=E.program;i.uniformBlockBinding(T,S)}function l(T,E){let S=s[T.id];S===void 0&&(m(T),S=h(T),s[T.id]=S,T.addEventListener("dispose",g));const R=E.program;i.updateUBOMapping(T,R);const w=e.render.frame;r[T.id]!==w&&(d(T),r[T.id]=w)}function h(T){const E=u();T.__bindingPointIndex=E;const S=n.createBuffer(),R=T.__size,w=T.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,R,w),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,E,S),S}function u(){for(let T=0;T<o;T++)if(a.indexOf(T)===-1)return a.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(T){const E=s[T.id],S=T.uniforms,R=T.__cache;n.bindBuffer(n.UNIFORM_BUFFER,E);for(let w=0,C=S.length;w<C;w++){const P=Array.isArray(S[w])?S[w]:[S[w]];for(let M=0,y=P.length;M<y;M++){const L=P[M];if(f(L,w,M,R)===!0){const z=L.__offset,H=Array.isArray(L.value)?L.value:[L.value];let W=0;for(let Y=0;Y<H.length;Y++){const X=H[Y],ne=_(X);typeof X=="number"||typeof X=="boolean"?(L.__data[0]=X,n.bufferSubData(n.UNIFORM_BUFFER,z+W,L.__data)):X.isMatrix3?(L.__data[0]=X.elements[0],L.__data[1]=X.elements[1],L.__data[2]=X.elements[2],L.__data[3]=0,L.__data[4]=X.elements[3],L.__data[5]=X.elements[4],L.__data[6]=X.elements[5],L.__data[7]=0,L.__data[8]=X.elements[6],L.__data[9]=X.elements[7],L.__data[10]=X.elements[8],L.__data[11]=0):(X.toArray(L.__data,W),W+=ne.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,z,L.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(T,E,S,R){const w=T.value,C=E+"_"+S;if(R[C]===void 0)return typeof w=="number"||typeof w=="boolean"?R[C]=w:R[C]=w.clone(),!0;{const P=R[C];if(typeof w=="number"||typeof w=="boolean"){if(P!==w)return R[C]=w,!0}else if(P.equals(w)===!1)return P.copy(w),!0}return!1}function m(T){const E=T.uniforms;let S=0;const R=16;for(let C=0,P=E.length;C<P;C++){const M=Array.isArray(E[C])?E[C]:[E[C]];for(let y=0,L=M.length;y<L;y++){const z=M[y],H=Array.isArray(z.value)?z.value:[z.value];for(let W=0,Y=H.length;W<Y;W++){const X=H[W],ne=_(X),G=S%R,ae=G%ne.boundary,he=G+ae;S+=ae,he!==0&&R-he<ne.storage&&(S+=R-he),z.__data=new Float32Array(ne.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=S,S+=ne.storage}}}const w=S%R;return w>0&&(S+=R-w),T.__size=S,T.__cache={},this}function _(T){const E={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(E.boundary=4,E.storage=4):T.isVector2?(E.boundary=8,E.storage=8):T.isVector3||T.isColor?(E.boundary=16,E.storage=12):T.isVector4?(E.boundary=16,E.storage=16):T.isMatrix3?(E.boundary=48,E.storage=48):T.isMatrix4?(E.boundary=64,E.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),E}function g(T){const E=T.target;E.removeEventListener("dispose",g);const S=a.indexOf(E.__bindingPointIndex);a.splice(S,1),n.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function p(){for(const T in s)n.deleteBuffer(s[T]);a=[],s={},r={}}return{bind:c,update:l,dispose:p}}class cx{constructor(e={}){const{canvas:t=Ff(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=a;const m=new Uint32Array(4),_=new Int32Array(4);let g=null,p=null;const T=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=mi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const S=this;let R=!1;this._outputColorSpace=ht;let w=0,C=0,P=null,M=-1,y=null;const L=new et,z=new et;let H=null;const W=new Ge(0);let Y=0,X=t.width,ne=t.height,G=1,ae=null,he=null;const Ee=new et(0,0,X,ne),Be=new et(0,0,X,ne);let nt=!1;const ot=new Yl;let Ke=!1,$=!1;const j=new at,fe=new I,Le=new et,Se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Xe=!1;function It(){return P===null?G:1}let A=i;function lt(v,U){return t.getContext(v,U)}try{const v={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Nl}`),t.addEventListener("webglcontextlost",se,!1),t.addEventListener("webglcontextrestored",de,!1),t.addEventListener("webglcontextcreationerror",J,!1),A===null){const U="webgl2";if(A=lt(U,v),A===null)throw lt(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(v){throw console.error("THREE.WebGLRenderer: "+v.message),v}let Ue,Ce,ge,ct,_e,Oe,At,_t,b,x,F,q,Z,V,Me,ie,xe,ve,ee,ce,Re,ye,oe,Fe;function D(){Ue=new vg(A),Ue.init(),ye=new tx(A,Ue),Ce=new dg(A,Ue,e,ye),ge=new Q_(A,Ue),Ce.reversedDepthBuffer&&d&&ge.buffers.depth.setReversed(!0),ct=new Sg(A),_e=new B_,Oe=new ex(A,Ue,ge,_e,Ce,ye,ct),At=new pg(S),_t=new xg(S),b=new Rp(A),oe=new hg(A,b),x=new yg(A,b,ct,oe),F=new bg(A,x,b,ct),ee=new Eg(A,Ce,Oe),ie=new fg(_e),q=new k_(S,At,_t,Ue,Ce,oe,ie),Z=new ox(S,_e),V=new G_,Me=new $_(Ue),ve=new cg(S,At,_t,ge,F,f,c),xe=new j_(S,F,Ce),Fe=new lx(A,ct,Ce,ge),ce=new ug(A,Ue,ct),Re=new Mg(A,Ue,ct),ct.programs=q.programs,S.capabilities=Ce,S.extensions=Ue,S.properties=_e,S.renderLists=V,S.shadowMap=xe,S.state=ge,S.info=ct}D();const te=new rx(S,A);this.xr=te,this.getContext=function(){return A},this.getContextAttributes=function(){return A.getContextAttributes()},this.forceContextLoss=function(){const v=Ue.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){const v=Ue.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(v){v!==void 0&&(G=v,this.setSize(X,ne,!1))},this.getSize=function(v){return v.set(X,ne)},this.setSize=function(v,U,O=!0){if(te.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=v,ne=U,t.width=Math.floor(v*G),t.height=Math.floor(U*G),O===!0&&(t.style.width=v+"px",t.style.height=U+"px"),this.setViewport(0,0,v,U)},this.getDrawingBufferSize=function(v){return v.set(X*G,ne*G).floor()},this.setDrawingBufferSize=function(v,U,O){X=v,ne=U,G=O,t.width=Math.floor(v*O),t.height=Math.floor(U*O),this.setViewport(0,0,v,U)},this.getCurrentViewport=function(v){return v.copy(L)},this.getViewport=function(v){return v.copy(Ee)},this.setViewport=function(v,U,O,k){v.isVector4?Ee.set(v.x,v.y,v.z,v.w):Ee.set(v,U,O,k),ge.viewport(L.copy(Ee).multiplyScalar(G).round())},this.getScissor=function(v){return v.copy(Be)},this.setScissor=function(v,U,O,k){v.isVector4?Be.set(v.x,v.y,v.z,v.w):Be.set(v,U,O,k),ge.scissor(z.copy(Be).multiplyScalar(G).round())},this.getScissorTest=function(){return nt},this.setScissorTest=function(v){ge.setScissorTest(nt=v)},this.setOpaqueSort=function(v){ae=v},this.setTransparentSort=function(v){he=v},this.getClearColor=function(v){return v.copy(ve.getClearColor())},this.setClearColor=function(){ve.setClearColor(...arguments)},this.getClearAlpha=function(){return ve.getClearAlpha()},this.setClearAlpha=function(){ve.setClearAlpha(...arguments)},this.clear=function(v=!0,U=!0,O=!0){let k=0;if(v){let N=!1;if(P!==null){const Q=P.texture.format;N=Q===Hl||Q===Bl||Q===kl}if(N){const Q=P.texture.type,le=Q===Nn||Q===Wi||Q===gr||Q===_r||Q===zl||Q===Ol,pe=ve.getClearColor(),ue=ve.getClearAlpha(),Ae=pe.r,Pe=pe.g,be=pe.b;le?(m[0]=Ae,m[1]=Pe,m[2]=be,m[3]=ue,A.clearBufferuiv(A.COLOR,0,m)):(_[0]=Ae,_[1]=Pe,_[2]=be,_[3]=ue,A.clearBufferiv(A.COLOR,0,_))}else k|=A.COLOR_BUFFER_BIT}U&&(k|=A.DEPTH_BUFFER_BIT),O&&(k|=A.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),A.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",se,!1),t.removeEventListener("webglcontextrestored",de,!1),t.removeEventListener("webglcontextcreationerror",J,!1),ve.dispose(),V.dispose(),Me.dispose(),_e.dispose(),At.dispose(),_t.dispose(),F.dispose(),oe.dispose(),Fe.dispose(),q.dispose(),te.dispose(),te.removeEventListener("sessionstart",Cn),te.removeEventListener("sessionend",vc),yi.stop()};function se(v){v.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function de(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const v=ct.autoReset,U=xe.enabled,O=xe.autoUpdate,k=xe.needsUpdate,N=xe.type;D(),ct.autoReset=v,xe.enabled=U,xe.autoUpdate=O,xe.needsUpdate=k,xe.type=N}function J(v){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function K(v){const U=v.target;U.removeEventListener("dispose",K),me(U)}function me(v){Ie(v),_e.remove(v)}function Ie(v){const U=_e.get(v).programs;U!==void 0&&(U.forEach(function(O){q.releaseProgram(O)}),v.isShaderMaterial&&q.releaseShaderCache(v))}this.renderBufferDirect=function(v,U,O,k,N,Q){U===null&&(U=Se);const le=N.isMesh&&N.matrixWorld.determinant()<0,pe=Rd(v,U,O,k,N);ge.setMaterial(k,le);let ue=O.index,Ae=1;if(k.wireframe===!0){if(ue=x.getWireframeAttribute(O),ue===void 0)return;Ae=2}const Pe=O.drawRange,be=O.attributes.position;let Ve=Pe.start*Ae,Je=(Pe.start+Pe.count)*Ae;Q!==null&&(Ve=Math.max(Ve,Q.start*Ae),Je=Math.min(Je,(Q.start+Q.count)*Ae)),ue!==null?(Ve=Math.max(Ve,0),Je=Math.min(Je,ue.count)):be!=null&&(Ve=Math.max(Ve,0),Je=Math.min(Je,be.count));const mt=Je-Ve;if(mt<0||mt===1/0)return;oe.setup(N,k,pe,O,ue);let rt,tt=ce;if(ue!==null&&(rt=b.get(ue),tt=Re,tt.setIndex(rt)),N.isMesh)k.wireframe===!0?(ge.setLineWidth(k.wireframeLinewidth*It()),tt.setMode(A.LINES)):tt.setMode(A.TRIANGLES);else if(N.isLine){let we=k.linewidth;we===void 0&&(we=1),ge.setLineWidth(we*It()),N.isLineSegments?tt.setMode(A.LINES):N.isLineLoop?tt.setMode(A.LINE_LOOP):tt.setMode(A.LINE_STRIP)}else N.isPoints?tt.setMode(A.POINTS):N.isSprite&&tt.setMode(A.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)Sr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),tt.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(Ue.get("WEBGL_multi_draw"))tt.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const we=N._multiDrawStarts,dt=N._multiDrawCounts,qe=N._multiDrawCount,nn=ue?b.get(ue).bytesPerElement:1,Zi=_e.get(k).currentProgram.getUniforms();for(let sn=0;sn<qe;sn++)Zi.setValue(A,"_gl_DrawID",sn),tt.render(we[sn]/nn,dt[sn])}else if(N.isInstancedMesh)tt.renderInstances(Ve,mt,N.count);else if(O.isInstancedBufferGeometry){const we=O._maxInstanceCount!==void 0?O._maxInstanceCount:1/0,dt=Math.min(O.instanceCount,we);tt.renderInstances(Ve,mt,dt)}else tt.render(Ve,mt)};function it(v,U,O){v.transparent===!0&&v.side===zt&&v.forceSinglePass===!1?(v.side=en,v.needsUpdate=!0,Lr(v,U,O),v.side=_i,v.needsUpdate=!0,Lr(v,U,O),v.side=zt):Lr(v,U,O)}this.compile=function(v,U,O=null){O===null&&(O=v),p=Me.get(O),p.init(U),E.push(p),O.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),v!==O&&v.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),p.setupLights();const k=new Set;return v.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const Q=N.material;if(Q)if(Array.isArray(Q))for(let le=0;le<Q.length;le++){const pe=Q[le];it(pe,O,N),k.add(pe)}else it(Q,O,N),k.add(Q)}),p=E.pop(),k},this.compileAsync=function(v,U,O=null){const k=this.compile(v,U,O);return new Promise(N=>{function Q(){if(k.forEach(function(le){_e.get(le).currentProgram.isReady()&&k.delete(le)}),k.size===0){N(v);return}setTimeout(Q,10)}Ue.get("KHR_parallel_shader_compile")!==null?Q():setTimeout(Q,10)})};let Ze=null;function Bn(v){Ze&&Ze(v)}function Cn(){yi.stop()}function vc(){yi.start()}const yi=new Fu;yi.setAnimationLoop(Bn),typeof self<"u"&&yi.setContext(self),this.setAnimationLoop=function(v){Ze=v,te.setAnimationLoop(v),v===null?yi.stop():yi.start()},te.addEventListener("sessionstart",Cn),te.addEventListener("sessionend",vc),this.render=function(v,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),te.enabled===!0&&te.isPresenting===!0&&(te.cameraAutoUpdate===!0&&te.updateCamera(U),U=te.getCamera()),v.isScene===!0&&v.onBeforeRender(S,v,U,P),p=Me.get(v,E.length),p.init(U),E.push(p),j.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),ot.setFromProjectionMatrix(j,In,U.reversedDepth),$=this.localClippingEnabled,Ke=ie.init(this.clippingPlanes,$),g=V.get(v,T.length),g.init(),T.push(g),te.enabled===!0&&te.isPresenting===!0){const Q=S.xr.getDepthSensingMesh();Q!==null&&qa(Q,U,-1/0,S.sortObjects)}qa(v,U,0,S.sortObjects),g.finish(),S.sortObjects===!0&&g.sort(ae,he),Xe=te.enabled===!1||te.isPresenting===!1||te.hasDepthSensing()===!1,Xe&&ve.addToRenderList(g,v),this.info.render.frame++,Ke===!0&&ie.beginShadows();const O=p.state.shadowsArray;xe.render(O,v,U),Ke===!0&&ie.endShadows(),this.info.autoReset===!0&&this.info.reset();const k=g.opaque,N=g.transmissive;if(p.setupLights(),U.isArrayCamera){const Q=U.cameras;if(N.length>0)for(let le=0,pe=Q.length;le<pe;le++){const ue=Q[le];Mc(k,N,v,ue)}Xe&&ve.render(v);for(let le=0,pe=Q.length;le<pe;le++){const ue=Q[le];yc(g,v,ue,ue.viewport)}}else N.length>0&&Mc(k,N,v,U),Xe&&ve.render(v),yc(g,v,U);P!==null&&C===0&&(Oe.updateMultisampleRenderTarget(P),Oe.updateRenderTargetMipmap(P)),v.isScene===!0&&v.onAfterRender(S,v,U),oe.resetDefaultState(),M=-1,y=null,E.pop(),E.length>0?(p=E[E.length-1],Ke===!0&&ie.setGlobalState(S.clippingPlanes,p.state.camera)):p=null,T.pop(),T.length>0?g=T[T.length-1]:g=null};function qa(v,U,O,k){if(v.visible===!1)return;if(v.layers.test(U.layers)){if(v.isGroup)O=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(U);else if(v.isLight)p.pushLight(v),v.castShadow&&p.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||ot.intersectsSprite(v)){k&&Le.setFromMatrixPosition(v.matrixWorld).applyMatrix4(j);const le=F.update(v),pe=v.material;pe.visible&&g.push(v,le,pe,O,Le.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||ot.intersectsObject(v))){const le=F.update(v),pe=v.material;if(k&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),Le.copy(v.boundingSphere.center)):(le.boundingSphere===null&&le.computeBoundingSphere(),Le.copy(le.boundingSphere.center)),Le.applyMatrix4(v.matrixWorld).applyMatrix4(j)),Array.isArray(pe)){const ue=le.groups;for(let Ae=0,Pe=ue.length;Ae<Pe;Ae++){const be=ue[Ae],Ve=pe[be.materialIndex];Ve&&Ve.visible&&g.push(v,le,Ve,O,Le.z,be)}}else pe.visible&&g.push(v,le,pe,O,Le.z,null)}}const Q=v.children;for(let le=0,pe=Q.length;le<pe;le++)qa(Q[le],U,O,k)}function yc(v,U,O,k){const N=v.opaque,Q=v.transmissive,le=v.transparent;p.setupLightsView(O),Ke===!0&&ie.setGlobalState(S.clippingPlanes,O),k&&ge.viewport(L.copy(k)),N.length>0&&Dr(N,U,O),Q.length>0&&Dr(Q,U,O),le.length>0&&Dr(le,U,O),ge.buffers.depth.setTest(!0),ge.buffers.depth.setMask(!0),ge.buffers.color.setMask(!0),ge.setPolygonOffset(!1)}function Mc(v,U,O,k){if((O.isScene===!0?O.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[k.id]===void 0&&(p.state.transmissionRenderTarget[k.id]=new Xi(1,1,{generateMipmaps:!0,type:Ue.has("EXT_color_buffer_half_float")||Ue.has("EXT_color_buffer_float")?Ar:Nn,minFilter:zi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ye.workingColorSpace}));const Q=p.state.transmissionRenderTarget[k.id],le=k.viewport||L;Q.setSize(le.z*S.transmissionResolutionScale,le.w*S.transmissionResolutionScale);const pe=S.getRenderTarget(),ue=S.getActiveCubeFace(),Ae=S.getActiveMipmapLevel();S.setRenderTarget(Q),S.getClearColor(W),Y=S.getClearAlpha(),Y<1&&S.setClearColor(16777215,.5),S.clear(),Xe&&ve.render(O);const Pe=S.toneMapping;S.toneMapping=mi;const be=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),p.setupLightsView(k),Ke===!0&&ie.setGlobalState(S.clippingPlanes,k),Dr(v,O,k),Oe.updateMultisampleRenderTarget(Q),Oe.updateRenderTargetMipmap(Q),Ue.has("WEBGL_multisampled_render_to_texture")===!1){let Ve=!1;for(let Je=0,mt=U.length;Je<mt;Je++){const rt=U[Je],tt=rt.object,we=rt.geometry,dt=rt.material,qe=rt.group;if(dt.side===zt&&tt.layers.test(k.layers)){const nn=dt.side;dt.side=en,dt.needsUpdate=!0,Sc(tt,O,k,we,dt,qe),dt.side=nn,dt.needsUpdate=!0,Ve=!0}}Ve===!0&&(Oe.updateMultisampleRenderTarget(Q),Oe.updateRenderTargetMipmap(Q))}S.setRenderTarget(pe,ue,Ae),S.setClearColor(W,Y),be!==void 0&&(k.viewport=be),S.toneMapping=Pe}function Dr(v,U,O){const k=U.isScene===!0?U.overrideMaterial:null;for(let N=0,Q=v.length;N<Q;N++){const le=v[N],pe=le.object,ue=le.geometry,Ae=le.group;let Pe=le.material;Pe.allowOverride===!0&&k!==null&&(Pe=k),pe.layers.test(O.layers)&&Sc(pe,U,O,ue,Pe,Ae)}}function Sc(v,U,O,k,N,Q){v.onBeforeRender(S,U,O,k,N,Q),v.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),N.onBeforeRender(S,U,O,k,v,Q),N.transparent===!0&&N.side===zt&&N.forceSinglePass===!1?(N.side=en,N.needsUpdate=!0,S.renderBufferDirect(O,U,k,N,v,Q),N.side=_i,N.needsUpdate=!0,S.renderBufferDirect(O,U,k,N,v,Q),N.side=zt):S.renderBufferDirect(O,U,k,N,v,Q),v.onAfterRender(S,U,O,k,N,Q)}function Lr(v,U,O){U.isScene!==!0&&(U=Se);const k=_e.get(v),N=p.state.lights,Q=p.state.shadowsArray,le=N.state.version,pe=q.getParameters(v,N.state,Q,U,O),ue=q.getProgramCacheKey(pe);let Ae=k.programs;k.environment=v.isMeshStandardMaterial?U.environment:null,k.fog=U.fog,k.envMap=(v.isMeshStandardMaterial?_t:At).get(v.envMap||k.environment),k.envMapRotation=k.environment!==null&&v.envMap===null?U.environmentRotation:v.envMapRotation,Ae===void 0&&(v.addEventListener("dispose",K),Ae=new Map,k.programs=Ae);let Pe=Ae.get(ue);if(Pe!==void 0){if(k.currentProgram===Pe&&k.lightsStateVersion===le)return bc(v,pe),Pe}else pe.uniforms=q.getUniforms(v),v.onBeforeCompile(pe,S),Pe=q.acquireProgram(pe,ue),Ae.set(ue,Pe),k.uniforms=pe.uniforms;const be=k.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(be.clippingPlanes=ie.uniform),bc(v,pe),k.needsLights=Pd(v),k.lightsStateVersion=le,k.needsLights&&(be.ambientLightColor.value=N.state.ambient,be.lightProbe.value=N.state.probe,be.directionalLights.value=N.state.directional,be.directionalLightShadows.value=N.state.directionalShadow,be.spotLights.value=N.state.spot,be.spotLightShadows.value=N.state.spotShadow,be.rectAreaLights.value=N.state.rectArea,be.ltc_1.value=N.state.rectAreaLTC1,be.ltc_2.value=N.state.rectAreaLTC2,be.pointLights.value=N.state.point,be.pointLightShadows.value=N.state.pointShadow,be.hemisphereLights.value=N.state.hemi,be.directionalShadowMap.value=N.state.directionalShadowMap,be.directionalShadowMatrix.value=N.state.directionalShadowMatrix,be.spotShadowMap.value=N.state.spotShadowMap,be.spotLightMatrix.value=N.state.spotLightMatrix,be.spotLightMap.value=N.state.spotLightMap,be.pointShadowMap.value=N.state.pointShadowMap,be.pointShadowMatrix.value=N.state.pointShadowMatrix),k.currentProgram=Pe,k.uniformsList=null,Pe}function Ec(v){if(v.uniformsList===null){const U=v.currentProgram.getUniforms();v.uniformsList=ya.seqWithValue(U.seq,v.uniforms)}return v.uniformsList}function bc(v,U){const O=_e.get(v);O.outputColorSpace=U.outputColorSpace,O.batching=U.batching,O.batchingColor=U.batchingColor,O.instancing=U.instancing,O.instancingColor=U.instancingColor,O.instancingMorph=U.instancingMorph,O.skinning=U.skinning,O.morphTargets=U.morphTargets,O.morphNormals=U.morphNormals,O.morphColors=U.morphColors,O.morphTargetsCount=U.morphTargetsCount,O.numClippingPlanes=U.numClippingPlanes,O.numIntersection=U.numClipIntersection,O.vertexAlphas=U.vertexAlphas,O.vertexTangents=U.vertexTangents,O.toneMapping=U.toneMapping}function Rd(v,U,O,k,N){U.isScene!==!0&&(U=Se),Oe.resetTextureUnits();const Q=U.fog,le=k.isMeshStandardMaterial?U.environment:null,pe=P===null?S.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Ds,ue=(k.isMeshStandardMaterial?_t:At).get(k.envMap||le),Ae=k.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,Pe=!!O.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),be=!!O.morphAttributes.position,Ve=!!O.morphAttributes.normal,Je=!!O.morphAttributes.color;let mt=mi;k.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(mt=S.toneMapping);const rt=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,tt=rt!==void 0?rt.length:0,we=_e.get(k),dt=p.state.lights;if(Ke===!0&&($===!0||v!==y)){const Gt=v===y&&k.id===M;ie.setState(k,v,Gt)}let qe=!1;k.version===we.__version?(we.needsLights&&we.lightsStateVersion!==dt.state.version||we.outputColorSpace!==pe||N.isBatchedMesh&&we.batching===!1||!N.isBatchedMesh&&we.batching===!0||N.isBatchedMesh&&we.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&we.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&we.instancing===!1||!N.isInstancedMesh&&we.instancing===!0||N.isSkinnedMesh&&we.skinning===!1||!N.isSkinnedMesh&&we.skinning===!0||N.isInstancedMesh&&we.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&we.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&we.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&we.instancingMorph===!1&&N.morphTexture!==null||we.envMap!==ue||k.fog===!0&&we.fog!==Q||we.numClippingPlanes!==void 0&&(we.numClippingPlanes!==ie.numPlanes||we.numIntersection!==ie.numIntersection)||we.vertexAlphas!==Ae||we.vertexTangents!==Pe||we.morphTargets!==be||we.morphNormals!==Ve||we.morphColors!==Je||we.toneMapping!==mt||we.morphTargetsCount!==tt)&&(qe=!0):(qe=!0,we.__version=k.version);let nn=we.currentProgram;qe===!0&&(nn=Lr(k,U,N));let Zi=!1,sn=!1,Hs=!1;const ft=nn.getUniforms(),un=we.uniforms;if(ge.useProgram(nn.program)&&(Zi=!0,sn=!0,Hs=!0),k.id!==M&&(M=k.id,sn=!0),Zi||y!==v){ge.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),ft.setValue(A,"projectionMatrix",v.projectionMatrix),ft.setValue(A,"viewMatrix",v.matrixWorldInverse);const Zt=ft.map.cameraPosition;Zt!==void 0&&Zt.setValue(A,fe.setFromMatrixPosition(v.matrixWorld)),Ce.logarithmicDepthBuffer&&ft.setValue(A,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&ft.setValue(A,"isOrthographic",v.isOrthographicCamera===!0),y!==v&&(y=v,sn=!0,Hs=!0)}if(N.isSkinnedMesh){ft.setOptional(A,N,"bindMatrix"),ft.setOptional(A,N,"bindMatrixInverse");const Gt=N.skeleton;Gt&&(Gt.boneTexture===null&&Gt.computeBoneTexture(),ft.setValue(A,"boneTexture",Gt.boneTexture,Oe))}N.isBatchedMesh&&(ft.setOptional(A,N,"batchingTexture"),ft.setValue(A,"batchingTexture",N._matricesTexture,Oe),ft.setOptional(A,N,"batchingIdTexture"),ft.setValue(A,"batchingIdTexture",N._indirectTexture,Oe),ft.setOptional(A,N,"batchingColorTexture"),N._colorsTexture!==null&&ft.setValue(A,"batchingColorTexture",N._colorsTexture,Oe));const dn=O.morphAttributes;if((dn.position!==void 0||dn.normal!==void 0||dn.color!==void 0)&&ee.update(N,O,nn),(sn||we.receiveShadow!==N.receiveShadow)&&(we.receiveShadow=N.receiveShadow,ft.setValue(A,"receiveShadow",N.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(un.envMap.value=ue,un.flipEnvMap.value=ue.isCubeTexture&&ue.isRenderTargetTexture===!1?-1:1),k.isMeshStandardMaterial&&k.envMap===null&&U.environment!==null&&(un.envMapIntensity.value=U.environmentIntensity),sn&&(ft.setValue(A,"toneMappingExposure",S.toneMappingExposure),we.needsLights&&Cd(un,Hs),Q&&k.fog===!0&&Z.refreshFogUniforms(un,Q),Z.refreshMaterialUniforms(un,k,G,ne,p.state.transmissionRenderTarget[v.id]),ya.upload(A,Ec(we),un,Oe)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(ya.upload(A,Ec(we),un,Oe),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&ft.setValue(A,"center",N.center),ft.setValue(A,"modelViewMatrix",N.modelViewMatrix),ft.setValue(A,"normalMatrix",N.normalMatrix),ft.setValue(A,"modelMatrix",N.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const Gt=k.uniformsGroups;for(let Zt=0,Ya=Gt.length;Zt<Ya;Zt++){const Mi=Gt[Zt];Fe.update(Mi,nn),Fe.bind(Mi,nn)}}return nn}function Cd(v,U){v.ambientLightColor.needsUpdate=U,v.lightProbe.needsUpdate=U,v.directionalLights.needsUpdate=U,v.directionalLightShadows.needsUpdate=U,v.pointLights.needsUpdate=U,v.pointLightShadows.needsUpdate=U,v.spotLights.needsUpdate=U,v.spotLightShadows.needsUpdate=U,v.rectAreaLights.needsUpdate=U,v.hemisphereLights.needsUpdate=U}function Pd(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(v,U,O){const k=_e.get(v);k.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1&&(k.__useRenderToTexture=!1),_e.get(v.texture).__webglTexture=U,_e.get(v.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:O,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,U){const O=_e.get(v);O.__webglFramebuffer=U,O.__useDefaultFramebuffer=U===void 0};const Dd=A.createFramebuffer();this.setRenderTarget=function(v,U=0,O=0){P=v,w=U,C=O;let k=!0,N=null,Q=!1,le=!1;if(v){const ue=_e.get(v);if(ue.__useDefaultFramebuffer!==void 0)ge.bindFramebuffer(A.FRAMEBUFFER,null),k=!1;else if(ue.__webglFramebuffer===void 0)Oe.setupRenderTarget(v);else if(ue.__hasExternalTextures)Oe.rebindTextures(v,_e.get(v.texture).__webglTexture,_e.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){const be=v.depthTexture;if(ue.__boundDepthTexture!==be){if(be!==null&&_e.has(be)&&(v.width!==be.image.width||v.height!==be.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Oe.setupDepthRenderbuffer(v)}}const Ae=v.texture;(Ae.isData3DTexture||Ae.isDataArrayTexture||Ae.isCompressedArrayTexture)&&(le=!0);const Pe=_e.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(Pe[U])?N=Pe[U][O]:N=Pe[U],Q=!0):v.samples>0&&Oe.useMultisampledRTT(v)===!1?N=_e.get(v).__webglMultisampledFramebuffer:Array.isArray(Pe)?N=Pe[O]:N=Pe,L.copy(v.viewport),z.copy(v.scissor),H=v.scissorTest}else L.copy(Ee).multiplyScalar(G).floor(),z.copy(Be).multiplyScalar(G).floor(),H=nt;if(O!==0&&(N=Dd),ge.bindFramebuffer(A.FRAMEBUFFER,N)&&k&&ge.drawBuffers(v,N),ge.viewport(L),ge.scissor(z),ge.setScissorTest(H),Q){const ue=_e.get(v.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_CUBE_MAP_POSITIVE_X+U,ue.__webglTexture,O)}else if(le){const ue=U;for(let Ae=0;Ae<v.textures.length;Ae++){const Pe=_e.get(v.textures[Ae]);A.framebufferTextureLayer(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0+Ae,Pe.__webglTexture,O,ue)}}else if(v!==null&&O!==0){const ue=_e.get(v.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,ue.__webglTexture,O)}M=-1},this.readRenderTargetPixels=function(v,U,O,k,N,Q,le,pe=0){if(!(v&&v.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ue=_e.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&le!==void 0&&(ue=ue[le]),ue){ge.bindFramebuffer(A.FRAMEBUFFER,ue);try{const Ae=v.textures[pe],Pe=Ae.format,be=Ae.type;if(!Ce.textureFormatReadable(Pe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ce.textureTypeReadable(be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=v.width-k&&O>=0&&O<=v.height-N&&(v.textures.length>1&&A.readBuffer(A.COLOR_ATTACHMENT0+pe),A.readPixels(U,O,k,N,ye.convert(Pe),ye.convert(be),Q))}finally{const Ae=P!==null?_e.get(P).__webglFramebuffer:null;ge.bindFramebuffer(A.FRAMEBUFFER,Ae)}}},this.readRenderTargetPixelsAsync=async function(v,U,O,k,N,Q,le,pe=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ue=_e.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&le!==void 0&&(ue=ue[le]),ue)if(U>=0&&U<=v.width-k&&O>=0&&O<=v.height-N){ge.bindFramebuffer(A.FRAMEBUFFER,ue);const Ae=v.textures[pe],Pe=Ae.format,be=Ae.type;if(!Ce.textureFormatReadable(Pe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ce.textureTypeReadable(be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ve=A.createBuffer();A.bindBuffer(A.PIXEL_PACK_BUFFER,Ve),A.bufferData(A.PIXEL_PACK_BUFFER,Q.byteLength,A.STREAM_READ),v.textures.length>1&&A.readBuffer(A.COLOR_ATTACHMENT0+pe),A.readPixels(U,O,k,N,ye.convert(Pe),ye.convert(be),0);const Je=P!==null?_e.get(P).__webglFramebuffer:null;ge.bindFramebuffer(A.FRAMEBUFFER,Je);const mt=A.fenceSync(A.SYNC_GPU_COMMANDS_COMPLETE,0);return A.flush(),await zf(A,mt,4),A.bindBuffer(A.PIXEL_PACK_BUFFER,Ve),A.getBufferSubData(A.PIXEL_PACK_BUFFER,0,Q),A.deleteBuffer(Ve),A.deleteSync(mt),Q}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,U=null,O=0){const k=Math.pow(2,-O),N=Math.floor(v.image.width*k),Q=Math.floor(v.image.height*k),le=U!==null?U.x:0,pe=U!==null?U.y:0;Oe.setTexture2D(v,0),A.copyTexSubImage2D(A.TEXTURE_2D,O,0,0,le,pe,N,Q),ge.unbindTexture()};const Ld=A.createFramebuffer(),Id=A.createFramebuffer();this.copyTextureToTexture=function(v,U,O=null,k=null,N=0,Q=null){Q===null&&(N!==0?(Sr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Q=N,N=0):Q=0);let le,pe,ue,Ae,Pe,be,Ve,Je,mt;const rt=v.isCompressedTexture?v.mipmaps[Q]:v.image;if(O!==null)le=O.max.x-O.min.x,pe=O.max.y-O.min.y,ue=O.isBox3?O.max.z-O.min.z:1,Ae=O.min.x,Pe=O.min.y,be=O.isBox3?O.min.z:0;else{const dn=Math.pow(2,-N);le=Math.floor(rt.width*dn),pe=Math.floor(rt.height*dn),v.isDataArrayTexture?ue=rt.depth:v.isData3DTexture?ue=Math.floor(rt.depth*dn):ue=1,Ae=0,Pe=0,be=0}k!==null?(Ve=k.x,Je=k.y,mt=k.z):(Ve=0,Je=0,mt=0);const tt=ye.convert(U.format),we=ye.convert(U.type);let dt;U.isData3DTexture?(Oe.setTexture3D(U,0),dt=A.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(Oe.setTexture2DArray(U,0),dt=A.TEXTURE_2D_ARRAY):(Oe.setTexture2D(U,0),dt=A.TEXTURE_2D),A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,U.flipY),A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),A.pixelStorei(A.UNPACK_ALIGNMENT,U.unpackAlignment);const qe=A.getParameter(A.UNPACK_ROW_LENGTH),nn=A.getParameter(A.UNPACK_IMAGE_HEIGHT),Zi=A.getParameter(A.UNPACK_SKIP_PIXELS),sn=A.getParameter(A.UNPACK_SKIP_ROWS),Hs=A.getParameter(A.UNPACK_SKIP_IMAGES);A.pixelStorei(A.UNPACK_ROW_LENGTH,rt.width),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,rt.height),A.pixelStorei(A.UNPACK_SKIP_PIXELS,Ae),A.pixelStorei(A.UNPACK_SKIP_ROWS,Pe),A.pixelStorei(A.UNPACK_SKIP_IMAGES,be);const ft=v.isDataArrayTexture||v.isData3DTexture,un=U.isDataArrayTexture||U.isData3DTexture;if(v.isDepthTexture){const dn=_e.get(v),Gt=_e.get(U),Zt=_e.get(dn.__renderTarget),Ya=_e.get(Gt.__renderTarget);ge.bindFramebuffer(A.READ_FRAMEBUFFER,Zt.__webglFramebuffer),ge.bindFramebuffer(A.DRAW_FRAMEBUFFER,Ya.__webglFramebuffer);for(let Mi=0;Mi<ue;Mi++)ft&&(A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,_e.get(v).__webglTexture,N,be+Mi),A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,_e.get(U).__webglTexture,Q,mt+Mi)),A.blitFramebuffer(Ae,Pe,le,pe,Ve,Je,le,pe,A.DEPTH_BUFFER_BIT,A.NEAREST);ge.bindFramebuffer(A.READ_FRAMEBUFFER,null),ge.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else if(N!==0||v.isRenderTargetTexture||_e.has(v)){const dn=_e.get(v),Gt=_e.get(U);ge.bindFramebuffer(A.READ_FRAMEBUFFER,Ld),ge.bindFramebuffer(A.DRAW_FRAMEBUFFER,Id);for(let Zt=0;Zt<ue;Zt++)ft?A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,dn.__webglTexture,N,be+Zt):A.framebufferTexture2D(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,dn.__webglTexture,N),un?A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,Gt.__webglTexture,Q,mt+Zt):A.framebufferTexture2D(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,Gt.__webglTexture,Q),N!==0?A.blitFramebuffer(Ae,Pe,le,pe,Ve,Je,le,pe,A.COLOR_BUFFER_BIT,A.NEAREST):un?A.copyTexSubImage3D(dt,Q,Ve,Je,mt+Zt,Ae,Pe,le,pe):A.copyTexSubImage2D(dt,Q,Ve,Je,Ae,Pe,le,pe);ge.bindFramebuffer(A.READ_FRAMEBUFFER,null),ge.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else un?v.isDataTexture||v.isData3DTexture?A.texSubImage3D(dt,Q,Ve,Je,mt,le,pe,ue,tt,we,rt.data):U.isCompressedArrayTexture?A.compressedTexSubImage3D(dt,Q,Ve,Je,mt,le,pe,ue,tt,rt.data):A.texSubImage3D(dt,Q,Ve,Je,mt,le,pe,ue,tt,we,rt):v.isDataTexture?A.texSubImage2D(A.TEXTURE_2D,Q,Ve,Je,le,pe,tt,we,rt.data):v.isCompressedTexture?A.compressedTexSubImage2D(A.TEXTURE_2D,Q,Ve,Je,rt.width,rt.height,tt,rt.data):A.texSubImage2D(A.TEXTURE_2D,Q,Ve,Je,le,pe,tt,we,rt);A.pixelStorei(A.UNPACK_ROW_LENGTH,qe),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,nn),A.pixelStorei(A.UNPACK_SKIP_PIXELS,Zi),A.pixelStorei(A.UNPACK_SKIP_ROWS,sn),A.pixelStorei(A.UNPACK_SKIP_IMAGES,Hs),Q===0&&U.generateMipmaps&&A.generateMipmap(dt),ge.unbindTexture()},this.initRenderTarget=function(v){_e.get(v).__webglFramebuffer===void 0&&Oe.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?Oe.setTextureCube(v,0):v.isData3DTexture?Oe.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?Oe.setTexture2DArray(v,0):Oe.setTexture2D(v,0),ge.unbindTexture()},this.resetState=function(){w=0,C=0,P=null,ge.reset(),oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return In}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ye._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ye._getUnpackColorSpace()}}class Hu{constructor(e,t){this.make=e,this.capacity=t}make;capacity;live=[];spare=[];get(){if(this.live.length>=this.capacity){const t=this.live.shift();return this.live.push(t),t}const e=this.spare.pop()??this.make();return this.live.push(e),e}release(e){const[t]=this.live.splice(e,1);t&&this.spare.push(t)}sweep(e){for(let t=this.live.length-1;t>=0;t--)e(this.live[t])||this.release(t)}clear(){this.spare.push(...this.live),this.live.length=0}get allocated(){return this.live.length+this.spare.length}}const Gu=12,Et=(n,e,t,i,s,r,a,o,c,l,h)=>({sprite:n,name:e,w:t,h:i,inset:s,mass:r,damage:a,grab:o,throw:c,breakable:l,shards:h}),Ct={hat:Et("gen_hat.png","котелок",.78,.975,[.03,.97,0,.54],.5,0,12,18,!1),bottle:Et("gen_bottle.png","бутылка",.62,.82,[.26,.74,0,.96],1,15,12,18,!0,["#3aa860","#e8f6ee","#f7c56d"]),barrel:Et("gen_barrel.png","бочонок",.7,.82,[.1,.9,0,.96],3,25,14,22,!1),mug:Et("gen_mug.png","кружка",.56,.7,[.03,.97,0,.97],1,15,12,16,!0,["#ffd23f","#ffffff","#bfe6f2"]),whiskey:Et("gen_whiskey.png","виски",.5,.82,[.28,.72,0,.97],1,15,12,16,!0,["#d07a2a","#bfe6f2","#f4e3b5"]),stool:Et("gen_stool.png","табурет",.8,1,[.073,.927,.006,.969],3,25,14,24,!1),spittoon:Et("gen_spittoon.png","плевательница",.6,.75,[.031,.969,.006,.694],2.5,20,12,20,!1),shaker:Et("gen_shaker.png","шейкер",.36,.45,[.197,.803,.006,.969],1,12,12,14,!1),eggs:Et("gen_eggs.png","банка яиц",.5,.62,[.103,.897,.006,.969],1.5,15,12,16,!0,["#ffe680","#bfe6f2","#e8475f"]),plunger:Et("gen_plunger.png","вантуз",.56,.7,[.211,.789,.006,.969],.8,10,12,12,!1),hydrant:Et("gen_hydrant.png","гидрант",.72,.9,[.094,.906,.006,.969],5,35,18,30,!1),tire:Et("gen_tire.png","шина",.72,.9,[.031,.969,.006,.899],3,20,14,22,!1),melon:Et("gen_melon.png","арбуз",.64,.8,[.031,.969,.006,.821],2.5,20,12,20,!0,["#3aa860","#ff4f6d","#1f1f1f"]),fish:Et("gen_fish.png","рыба",.72,.9,[.031,.969,.006,.514],1,12,12,14,!1),anvil:Et("gen_anvil.png","наковальня",.8,1,[.031,.969,.006,.531],7,45,22,36,!1),chicken:Et("gen_chicken.png","резиновая курица",.5,.62,[.252,.748,.006,.969],.5,3,12,10,!1),bowling:Et("gen_bowling.png","шар для боулинга",.4,.5,[.031,.969,.006,.75],4,30,16,26,!1),flowerpot:Et("gen_flowerpot.png","цветочный горшок",.56,.7,[.137,.863,.006,.969],1.5,15,12,16,!0,["#e07a3a","#6b4a32","#ffffff"]),pie:Et("gen_pie.png","кремовый пирог",.56,.7,[.031,.969,.006,.577],.8,10,12,12,!0,["#fff3d6","#ff4f6d","#f1c27d"])},hx=Object.keys(Ct),Dh={mole:{w:1.3,h:1.625,inset:[.1,.9,.006,.66]},granny:{w:1.3,h:1.625,inset:[.165,.835,.006,.81]},kitten:{w:.9,h:1.125,inset:[.113,.887,.006,.7]},pigeon:{w:.9,h:1.125,inset:[.151,.849,.006,.69]},drunk:{w:1.4,h:1.75,inset:[.2,.8,.006,.85]}},Lh={rat:{w:1.8,h:2.25,inset:[.17,.83,.006,.63]},gang:{w:1.8,h:2.25,inset:[.134,.866,.006,.69]},kid:{w:1.8,h:2.25,inset:[.25,.75,.006,.73]}},Ih=120,Vu=2.4,ux={mole:["ОЙ! МОЯ КАСКА!","ХУЛИГАН!","Я ЖЕ ПОД ЗЕМЛЁЙ ЖИВУ!"],granny:["ХАМ! ПОЛИЦИЯ!","ВОТ Я ТЕБЕ ЗОНТИКОМ!","В МОЁ ВРЕМЯ ТАК НЕ БИЛИ!"],kitten:["ПФФФ! МЯУ!!","ШШШ! НАХАЛ!","МЯ-А-АУ?!"],pigeon:["ПИСЬМА ПОМЯЛ!","ЖАЛОБА ПОЧТОЙ!","КУРЛЫ-ХАМ!"],drunk:["ЧЕГО-О?! ИК!","КТО ТУТ ДЕРЁТСЯ?! ИК!","Я НЕ СПЛЮ! ИК!"]},Xt={period:6.5,rise:[2.2,2.5],dig:[5.6,5.9],depth:1.15,hittable:.35};function dx(n,e){const t=Math.floor(n/Xt.period),i=n-t*Xt.period,s=i<Xt.rise[0]||i>Xt.dig[1]?0:i<Xt.rise[1]?(i-Xt.rise[0])/(Xt.rise[1]-Xt.rise[0]):i<Xt.dig[0]?1:1-(i-Xt.dig[0])/(Xt.dig[1]-Xt.dig[0]);return{hole:(t%e+e)%e,rise:s,lantern:t%2===1,look:Math.sin(i*2.4)>0?1:-1}}const Rl=n=>n*n*(3-2*n);function fx(n,e,t,i){const s=(n/i%1+1)%1,r=.2;return s<r/2?{x:e,walking:!1,facing:1}:s<.5-r/2?{x:e+(t-e)*Rl((s-r/2)/(.5-r)),walking:!0,facing:t>=e?1:-1}:s<.5+r/2?{x:t,walking:!1,facing:-1}:{x:t+(e-t)*Rl((s-.5-r/2)/(.5-r)),walking:!0,facing:t>=e?-1:1}}function ec(n,e,t=!0){if(n.who==="mole"&&n.spots?.length){const s=dx(t?e:Xt.rise[1]+.5,n.spots.length),r=n.spots[s.hole];return{x:r.x,y:n.y-Xt.depth*(1-s.rise),z:r.z,rise:s.rise,walking:!1,facing:s.look,lantern:s.lantern}}if(n.x0===n.x1||!t)return{x:n.x0,y:n.y,z:n.z,rise:1,walking:!1,facing:1,lantern:!1};const i=fx(e,n.x0,n.x1,n.period);return{x:i.x,y:n.y,z:n.z,rise:1,walking:i.walking,facing:i.facing,lantern:!1}}const jn={appear:.45,attack:2.5,strike:2.85,every:6.5,first:4,depth:5.6},px={rat:{what:"stamina",line:"КРЫСА СПЁРЛА СИЛЫ! −35"},gang:{what:"splat",line:"ПЛЮХ! ГОЛУБЬ ЗАЛЯПАЛ ЭКРАН!"},kid:{what:"heart",line:"ЩЁЛК! ИЗ РОГАТКИ В ЛОБ! −♥"}},mx=35;function gx(n,e,t=!0){const i=t?Rl(Math.min(1,e/jn.appear)):1;return n.from==="manhole"?{x:n.x,y:-1.3*(1-i),z:n.z}:{x:n.x+n.side*1.8*(1-i),y:0,z:n.z}}const Ts=(n,e,t,i,s,r,a,o)=>({id:n,kind:e,min:{x:t-r/2,y:i-a/2,z:s-o/2},max:{x:t+r/2,y:i+a/2,z:s+o/2}}),kt={enemy:{w:1.52,h:1.9,inset:[.2,.82,.03,.95]},dog:{w:1.1,h:1.375,inset:[.14,.9,.03,.95]},...Ct},tc={cat:kt.enemy.inset,walrus:[.08,.92,.03,.93],bulldog:[.14,.86,.03,.75],weasel:[.22,.78,.03,.78]},_x=.82,Kt=(n,e,t,i,s,r,a,o,c,l)=>({id:n,look:e,layer:t,color:l,min:{x:i-a/2,y:s,z:r-c/2},max:{x:i+a/2,y:s+o,z:r+c/2}});function Wu(n,e,t,i,s,r,a){const o=[];let l=0,h=0;const u=(d,f,m,_)=>{f-d>.01&&_-m>.01&&o.push({id:`${n}-${h++}`,look:"wall",layer:"background",color:a,min:{x:d,y:m,z:e-.3/2},max:{x:f,y:_,z:e+.3/2}})};for(const d of r){u(t,i,l,d.sill);let f=t;for(const m of d.xs)u(f,m-d.w/2,d.sill,d.sill+d.h),f=m+d.w/2,o.push({id:`${n}-room-${h++}`,look:"interior",layer:"background",color:"#33403f",min:{x:m-d.w/2-.5,y:d.sill-1.2,z:e-1.35},max:{x:m+d.w/2+.5,y:d.sill+d.h+.6,z:e-1.2}});u(f,i,d.sill,d.sill+d.h),l=d.sill+d.h}return u(t,i,l,s),o}function xx(n,e,t,i,s,r){const a=[];for(let o=t,c=0;o+.26<=i+1e-6;o+=.36,c++)a.push(Kt(`${n}-p${c}`,"plank","midground",o+.13,0,e,.26,s-c%2*.08,.07,r));return a.push(Kt(`${n}-rail`,"rail","midground",(t+i)/2,s*.62,e-.07,i-t,.12,.07,"#6e4d36")),a}const Uh=(n,e)=>({...n,min:{...n.min,x:n.min.x+e},max:{...n.max,x:n.max.x+e}}),Nh=(n,e)=>({...n,x:n.x+e,hideX:n.hideX+e}),$n=-8,Yn=8,Fh={covers:[Kt("barrel-a","barrel","foreground",-2.75,0,3,.92,1.15,.92,"#c83c32"),Kt("barrel-b","barrel","foreground",-1.92,0,3.35,.8,.98,.8,"#2f6f73"),Kt("crate-a","crate","foreground",2.9,0,3.05,1.15,1.15,1.1,"#c9944f"),Kt("crate-b","crate","foreground",3.05,1.15,3.05,.72,.72,.72,"#d9a862"),...xx("fence",-1.6,-4.6,4.6,1.3,"#a8754c"),...Wu("block",-9,-13,8,9,[{sill:1.7,h:1.65,w:1.7,xs:[-4.2,0,4.2]},{sill:4.6,h:1.5,w:1.5,xs:[-6.5,-2.1,2.1,6.5]}],"#c9c3ae")],slots:[{x:-2.45,y:0,z:2.25,layer:"foreground",hideX:-2.45,hideY:-1.2},{x:-2,y:0,z:-2.35,layer:"midground",hideX:-2,hideY:-1.05},{x:4.2,y:.72,z:-9.5,layer:"background",hideX:4.2,hideY:-.35},{x:1.95,y:0,z:2.35,layer:"foreground",hideX:2.9,hideY:-.85},{x:.95,y:0,z:-2.35,layer:"midground",hideX:.95,hideY:-1.05},{x:-4.2,y:.72,z:-9.5,layer:"background",hideX:-4.2,hideY:-.35}]},zh={covers:[Kt("dumpster","dumpster","foreground",-2.6,0,3,2,1.22,1.1,"#3f7b55"),Kt("pallets","pallet","foreground",2.95,0,3.15,1.3,1.3,1.1,"#b98a52"),Kt("van","van","midground",-2.1,.25,-2.6,3.4,1.85,1.7,"#e9e2cd"),Kt("barrier","barrier","midground",2.55,0,-1.9,2.5,1.02,.55,"#b8b7ac"),...Wu("shop",-11,-7,7,9,[{sill:1.3,h:1.6,w:2,xs:[-2.8,2.8]},{sill:4.3,h:1.6,w:1.6,xs:[0]}],"#d58f86")],slots:[{x:2.45,y:0,z:2.45,layer:"foreground",hideX:3.15,hideY:-1.1},{x:-2.6,y:0,z:2.15,layer:"foreground",hideX:-2.6,hideY:-1.15},{x:0,y:3.45,z:-11.5,layer:"background",hideX:0,hideY:2.25},{x:.25,y:0,z:-3.3,layer:"midground",hideX:-1.05,hideY:0},{x:2.8,y:.45,z:-11.5,layer:"background",hideX:2.8,hideY:-.75},{x:2.9,y:0,z:-2.55,layer:"midground",hideX:2.9,hideY:-1},{x:-2.8,y:.45,z:-11.5,layer:"background",hideX:-2.8,hideY:-.75}]},vx={name:"БАР «ДЛИННЫЕ РУКИ»",look:"bar",pan:0,goal:12,deadline:5.2,covers:[Kt("piano","piano","foreground",-2.75,0,3,1.9,1.3,.75,"#3b2c24"),Kt("table","table","foreground",2.95,0,3.1,1.3,1.05,1.1,"#ece6d2"),Kt("counter","counter","midground",.3,0,-2.4,6.4,1.15,.8,"#6b4a32"),Kt("shelves","shelves","background",-.4,0,-6.4,5.2,2.9,.5,"#2e241c"),Kt("doorwall","wall","background",6.7,0,-7.4,2.6,3.4,.3,"#4a3f36")],slots:[{x:-2.55,y:0,z:2.2,layer:"foreground",hideX:-2.55,hideY:-1.25,skin:"walrus"},{x:-1.1,y:.3,z:-3.15,layer:"midground",hideX:-1.1,hideY:-.9,skin:"weasel"},{x:2.55,y:0,z:2.3,layer:"foreground",hideX:3,hideY:-1.15,skin:"walrus"},{x:4.6,y:0,z:-7.85,layer:"background",hideX:6.7,hideY:0,skin:"bulldog"},{x:1.9,y:.3,z:-3.15,layer:"midground",hideX:1.9,hideY:-.9,skin:"weasel"}],order:[0,1,2,3,4],dogs:[{x:.2,y:0,z:-.7}],props:[{kind:"mug",x:-3.25,y:1.3,z:3},{kind:"whiskey",x:2.6,y:1.05,z:3.05},{kind:"eggs",x:3.3,y:1.05,z:3.25},{kind:"mug",x:-2.3,y:1.15,z:-2.12},{kind:"shaker",x:-1.5,y:1.15,z:-2.12},{kind:"whiskey",x:3.05,y:1.15,z:-2.12},{kind:"stool",x:-.95,y:0,z:3.9},{kind:"spittoon",x:1.95,y:0,z:4},{kind:"plunger",x:-1.6,y:0,z:1.1},{kind:"mug",x:.5,y:0,z:1.05},{kind:"whiskey",x:-4.4,y:0,z:1.5},{kind:"stool",x:3.55,y:0,z:.35},{kind:"eggs",x:-3.3,y:0,z:-.3}],gags:[{id:"piano",kind:"piano"},Ts("gag-cuckoo","cuckoo",6.1,2.6,-7.12,.66,.82,.12),Ts("gag-lamp-0","lamp",-3,5.7,-3.2,1.1,.6,1.1),Ts("gag-lamp-1","lamp",2.5,5.7,-3.2,1.1,.6,1.1)],hat:{x:.95,y:.78,z:3.45},landing:{cover:"counter",band:.4},friends:[{who:"mole",x0:0,x1:0,y:0,z:0,period:0,spots:[{x:2.3,z:-1.3},{x:.1,z:1.7},{x:-1.25,z:-1.3},{x:-.75,z:2.6},{x:3.7,z:-.9}]},{who:"kitten",x0:-2.5,x1:2.75,y:1.15,z:-2.25,period:17},{who:"drunk",x0:4.75,x1:4.75,y:0,z:1.75,period:0}]},yx={name:"УЛИЦА: ДВОР И ПЕРЕУЛОК",look:"street",pan:8,goal:22,deadline:5.4,maxAlive:5,covers:[...Fh.covers.map(n=>Uh(n,$n)),...zh.covers.map(n=>Uh(n,Yn))],slots:[...Fh.slots.map(n=>Nh(n,$n)),...zh.slots.map(n=>Nh(n,Yn))],order:[0,6,4,9,2,7,3,11,1,8,5,12,10],dogs:[{x:.45+$n,y:0,z:-.85},{x:2.3+Yn,y:0,z:-1.25}],gags:[Ts("gag-bell-0","bell",Yn-3.5,5.75,-5,1,.7,.8),Ts("gag-bell-1","bell",Yn+3.5,5.75,-5,1,.7,.8),Ts("gag-laundry","laundry",$n,3.85,-4.5,12,1.2,.2)],props:[{kind:"bottle",x:-8.6,y:0,z:3.8},{kind:"barrel",x:-12.7,y:0,z:3.6},{kind:"melon",x:-7.2,y:0,z:1.2},{kind:"fish",x:-4.95,y:1.87,z:3.05},{kind:"flowerpot",x:-10.75,y:1.15,z:3},{kind:"pie",x:-9.92,y:.98,z:3.35},{kind:"chicken",x:-6.1,y:0,z:.4},{kind:"tire",x:-13.6,y:0,z:1},{kind:"bowling",x:-3.1,y:0,z:3.9},{kind:"bottle",x:-11.6,y:0,z:.3},{kind:"hydrant",x:.6,y:0,z:2.7},{kind:"bottle",x:-1.1,y:0,z:1},{kind:"anvil",x:2.3,y:0,z:3.9},{kind:"barrel",x:3.4,y:0,z:3.6},{kind:"bottle",x:4.9,y:1.22,z:3},{kind:"melon",x:7.7,y:0,z:1},{kind:"fish",x:10.8,y:1.3,z:3.15},{kind:"pie",x:9,y:0,z:3.9},{kind:"tire",x:12.7,y:0,z:3.5},{kind:"flowerpot",x:10,y:1.02,z:-1.9},{kind:"chicken",x:8.1,y:0,z:-.2},{kind:"bowling",x:13.7,y:0,z:1.4},{kind:"bottle",x:14.3,y:0,z:3.7}],friends:[{who:"mole",x0:0,x1:0,y:0,z:0,period:0,spots:[{x:$n-1.6,z:-.95},{x:Yn+.4,z:-1},{x:$n+2,z:4.4},{x:Yn-2.4,z:4.3},{x:$n+.95,z:-.95},{x:Yn+2.9,z:-1.2}]},{who:"granny",x0:-14,x1:14,y:0,z:.55,period:56},{who:"pigeon",x0:3.6,x1:13.2,y:0,z:1.75,period:19}],thugs:!0},pt={1:vx,2:yx},Ga=2,Xu=(n,e)=>{const t=pt[n]?.pan??0;return Math.max(-t,Math.min(t,e))};function Cl(n,e,t){const i=pt[n],s=i?.landing;if(!s||e!==s.cover||!t)return!1;const r=i.covers.find(a=>a.id===s.cover);return r?t.y>=r.max.y-s.band&&t.x>=r.min.x&&t.x<=r.max.x:!1}const qu=.32,Mx=[{at:1.35,len:.8},{at:3.3,len:.75}],Is=.9,Yu=n=>1-(1-n)**3;function Sx(n,e=1/0,t=!0){if(!t)return 1;let i=Yu(Math.min(1,n/qu));for(const s of Mx)n>s.at&&n<s.at+s.len&&s.at+s.len<e-Is&&(i*=1-.62*Math.sin(Math.PI*(n-s.at)/s.len));return i}function nc(n,e=!0){if(!e)return{dx:0,walking:!1,facing:1};const t=9,i=n%t,s=-.7,r=.7,a=o=>o*o*(3-2*o);return i<3.5?{dx:s,walking:!1,facing:1}:i<4.5?{dx:s+(r-s)*a(i-3.5),walking:!0,facing:1}:i<8?{dx:r,walking:!1,facing:-1}:{dx:r+(s-r)*a(i-8),walking:!0,facing:-1}}const on={period:23,start:15,up:1.4,hold:2.2,down:1.4,height:1.6};function $u(n,e=!0){if(!e)return 0;const t=n%on.period-on.start;if(t<0)return 0;const i=r=>r*r*(3-2*r);if(t<on.up)return on.height*i(t/on.up);if(t<on.up+on.hold)return on.height;const s=t-on.up-on.hold;return s<on.down?on.height*(1-i(s/on.down)):0}function Jn(n,e,t=!0){if(e.kind==="dog")return{x:e.x+nc(e.age,t).dx,y:e.y+$u(e.age,t),z:e.z??0};if(e.kind==="friend"){const r=pt[n].friends[e.plan??0];if(r)return ec(r,e.age,t)}if(e.kind==="thug")return gx({x:e.x,z:e.z??0,side:e.side??1,from:e.from??"edge"},e.age,t);const i=e.slot===void 0?void 0:pt[n].slots[e.slot];if(!i)return{x:e.x,y:e.y,z:e.z??0};const s=e.antic||e.blind?t?Yu(Math.min(1,e.age/qu)):1:Sx(e.age,e.deadline,t);return{x:i.hideX+(i.x-i.hideX)*s,y:i.hideY+(i.y-i.hideY)*s,z:i.z}}function Va(n,e){return n==="friend"&&e&&e in Dh?Dh[e]:n==="thug"&&e&&e in Lh?Lh[e]:kt[n]??kt.enemy}function Ex(n,e,t,i){const s=Va(n,i),[r,a,o,c]=t?tc[t]:s.inset;return{min:{x:e.x-s.w/2+s.w*r,y:e.y+s.h*o,z:e.z-.04},max:{x:e.x-s.w/2+s.w*a,y:e.y+s.h*c,z:e.z+.04}}}function bx(n,e,t=!0,i=[]){const s=pt[n].covers.map(r=>({id:r.id,kind:"cover",min:r.min,max:r.max}));for(const r of pt[n].gags)r.min&&r.max&&s.push({id:r.id,kind:"cover",min:r.min,max:r.max});for(const r of e){if(r.kind==="friend"&&r.who==="mole"){const o=pt[n].friends[r.plan??0];if(o&&ec(o,r.age,t).rise<Xt.hittable)continue}const a=Ex(r.kind,Jn(n,r,t),r.kind==="enemy"?r.skin:void 0,r.who);r.kind==="dog"&&nc(r.age,t).walking&&(a.max.y=a.min.y+kt.dog.h*(_x-kt.dog.inset[2])),s.push({id:r.id,kind:r.kind==="enemy"||r.kind==="dog"||r.kind==="friend"||r.kind==="thug"?r.kind:"prop",...a})}return s.concat(i)}function Ku(n,e,t=0){const i=n<650?60:50,s=n/Math.max(1,e),r=Math.atan(Math.tan(i*Math.PI/360)*s),a=Math.max(9.5,3+3.1/Math.tan(r));return{fov:i,position:{x:t,y:2.3+(a-9.5)*.12,z:a},look:{x:t,y:1.35+(a-9.5)*.1,z:-3}}}const Oh=26;function Zu(n,e,t,i){let s=0,r=1/0;for(const a of["x","y","z"]){if(Math.abs(e[a])<1e-9){if(n[a]<t[a]||n[a]>i[a])return null;continue}let o=(t[a]-n[a])/e[a],c=(i[a]-n[a])/e[a];if(o>c&&([o,c]=[c,o]),s=Math.max(s,o),r=Math.min(r,c),s>r)return null}return s}const ju=n=>{const e=Math.hypot(n.x,n.y,n.z)||1;return{x:n.x/e,y:n.y/e,z:n.z/e}},kh=(n,e,t)=>({x:n.x+e.x*t,y:n.y+e.y*t,z:n.z+e.z*t});function ic(n,e,t){const i=ju(e);let s=null;for(const o of t){const c=Zu(n,i,o.min,o.max);c!==null&&c<=Oh*2&&(!s||c<s.distance)&&(s={kind:o.kind,id:o.id,point:kh(n,i,c),distance:c})}if(s)return s;const r=i.y<-1e-6?-n.y/i.y:1/0,a=Math.min(r,Oh);return{kind:"whiff",point:kh(n,i,a),distance:a}}const Ju=-9.5;function Tx(n,e){const t=22/Math.sqrt(Math.max(.5,Ct[n].mass));return Math.max(.3,Math.min(1,e/t))}const Qu={above:2.4,hang:.16},la={radius:.2,minSpeed:6.5,friction:.3,stop:.9};function wx(n,e,t,i){const s=e==="anvil"?{...i,y:i.y+Qu.above,z:i.z-.04}:i,r={x:s.x-t.x,y:s.y-t.y,z:s.z-t.z},a=Tx(e,Math.hypot(r.x,r.y,r.z)),o={x:r.x/a,y:r.y/a-.5*Ju*a,z:r.z/a},c={id:n,kind:e,pos:{...t},vel:o,age:0,angle:0,spin:(s.x>=t.x?-1:1)*11/Math.sqrt(Ct[e].mass),struck:!1};return e==="anvil"&&(c.drop=a),e==="bowling"&&(c.hits=[]),c}const Po=new Set(["enemy","dog","friend","thug"]),Ax=(n,e)=>n.x>e.min.x&&n.x<e.max.x&&n.y>e.min.y&&n.y<e.max.y&&n.z>e.min.z&&n.z<e.max.z,js=.001;function Rx(n,e,t){const i=[];let s=e;for(;s>1e-9;){const r=Math.min(s,.008333333333333333);if(s-=r,n.age+=r,n.angle+=n.spin*r,n.drop!==void 0&&!n.dropped&&n.age>=n.drop){if(n.vel={x:0,y:0,z:0},n.spin=0,n.angle=0,n.age<n.drop+Qu.hang)continue;n.dropped=!0,n.vel.y=-3}if(n.rolling){const d=Math.hypot(n.vel.x,n.vel.z),f=Math.max(0,1-la.friction*r);if(n.vel.x*=f,n.vel.z*=f,n.spin=-d*2.5,d<la.stop)return i.push({type:"rest",point:{x:n.pos.x,y:0,z:n.pos.z},on:"ground"}),i}const a={x:n.pos.x+n.vel.x*r,y:n.pos.y+n.vel.y*r,z:n.pos.z+n.vel.z*r};n.rolling||(n.vel.y+=Ju*r);const o={x:a.x-n.pos.x,y:a.y-n.pos.y,z:a.z-n.pos.z},c=Math.hypot(o.x,o.y,o.z),l=ju(o);let h=null;for(const d of t){if(d.kind==="prop"||Ax(n.pos,d)||Po.has(d.kind)&&(n.hits?n.hits.includes(d.id):n.struck))continue;const f=Zu(n.pos,l,d.min,d.max);f!==null&&f<=c&&(!h||f<h.t)&&(h={t:f,hit:d})}const u=a.y<=0&&n.pos.y>0?c*n.pos.y/(n.pos.y-a.y):1/0;if(h&&h.t<=u){const d=h.hit,f={x:n.pos.x+l.x*h.t,y:n.pos.y+l.y*h.t,z:n.pos.z+l.z*h.t};if(Po.has(d.kind)&&n.hits){n.struck=!0,n.hits.push(d.id),i.push({type:"hit",kind:d.kind,id:d.id,point:f}),n.vel.x*=.85,n.vel.z*=.85;continue}if(Po.has(d.kind)){n.struck=!0,i.push({type:"hit",kind:d.kind,id:d.id,point:f}),n.pos={x:f.x,y:f.y,z:d.max.z+.08},n.vel={x:n.vel.x*.12,y:1.6,z:1.4},n.spin*=-.6;continue}if(l.y<0&&f.y>=d.max.y-js)return i.push({type:"rest",point:{x:f.x,y:d.max.y,z:Math.min(d.max.z-.06,Math.max(d.min.z+.06,f.z))},on:d.id}),i;n.struck||(n.struck=!0,i.push({type:"hit",kind:d.kind,id:d.id,point:f}));const m=Math.abs(f.z-d.max.z)<js?{z:1}:Math.abs(f.z-d.min.z)<js?{z:-1}:Math.abs(f.x-d.max.x)<js?{x:1}:Math.abs(f.x-d.min.x)<js?{x:-1}:{y:-1};n.vel={x:n.vel.x*.25,y:Math.min(n.vel.y,0)*.3,z:n.vel.z*.25},"z"in m?n.vel.z=m.z*Math.max(.6,Math.abs(n.vel.z)):"x"in m?n.vel.x=m.x*Math.max(.6,Math.abs(n.vel.x)):n.vel.y=-Math.abs(n.vel.y),n.pos={x:f.x+("x"in m?m.x*.05:0),y:f.y+("y"in m?m.y*.05:0),z:f.z+("z"in m?m.z*.05:0)},n.spin*=-.5;continue}if(u!==1/0&&n.hits&&!n.rolling){const d=u/Math.max(c,1e-9),f=Math.hypot(n.vel.x,n.vel.z)||1,m=Math.max(la.minSpeed,f);n.pos={x:n.pos.x+o.x*d,y:la.radius,z:n.pos.z+o.z*d},n.vel={x:n.vel.x/f*m,y:0,z:n.vel.z/f*m},n.rolling=!0;continue}if(u!==1/0){const d=u/Math.max(c,1e-9);return i.push({type:"rest",point:{x:n.pos.x+o.x*d,y:0,z:n.pos.z+o.z*d},on:"ground"}),i}if(n.pos=a,n.age>5)return i.push({type:"rest",point:{x:n.pos.x,y:0,z:n.pos.z},on:"ground"}),i}return i}const rr=[{who:"ТЫ — БАРМЕНУ",text:"«Спорим, бармен, на триста баксов, что я нассу вон в ту шляпу и не пролью ни капли?»",at:.5,len:3.1},{who:"БАРМЕН-ЛАСКА",text:"«Идёт. Ставлю триста.»",at:3.6,len:1.7}],gs={share:.6,prize:300,perSecond:40},Cx=n=>rr.find(e=>n>=e.at&&n<e.at+e.len)??null,Js={origin:{x:.5,y:1.12},lag:6.5,arc:.2,segments:26};class Px{tip;constructor(e={x:.5,y:.8}){this.tip={...e}}update(e,t){const i=1-Math.exp(-e*Js.lag);return this.tip.x+=(t.x-this.tip.x)*i,this.tip.y+=(t.y-this.tip.y)*i,this.tip}controls(){const e=Js.origin,t=this.tip,i=t.x-e.x,s=.07*Math.tanh(i*6)+.04,r=Js.arc+Math.abs(i)*.12;return[{x:e.x+i*.2,y:t.y-r*.9},{x:t.x+s,y:t.y-r*1.15}]}points(e=Js.segments){const t=Js.origin,[i,s]=this.controls(),r=this.tip,a=[];for(let o=0;o<=e;o++){const c=o/e,l=1-c,h=l*l*l,u=3*l*l*c,d=3*l*c*c,f=c*c*c;a.push({x:h*t.x+u*i.x+d*s.x+f*r.x,y:h*t.y+u*i.y+d*s.y+f*r.y})}return a}}const Ri={start:.45,len:2.6,kinds:["dance","sandwich","selfie"],bonus:2},Jt={pie:{blind:3},plunger:{stun:2},chicken:{combo:2,bonus:100},seeds:{radius:3.2,damage:5,max:3},geyser:{radius:2.4,life:4.5,damage:10,stagger:1.5}},ar={first:9,every:13,warn:1.9,radius:1.3},Dx={3:"ОГО!",5:"ВОТ ЭТО ДА!",8:"МАМА!",12:"ЧУДЕСА НА ВИРАЖАХ!"},Lx=n=>["spin","stars","birds"][n%3],Di={intro:rr[rr.length-1].at+rr[rr.length-1].len,length:6,soakRate:1.9,dogCooldown:1.5},ed="long-arms.progress.v2",Ix="long-arms.progress.v1",td=()=>({version:2,unlocked:1,best:0});function Ux(n){try{const e=JSON.parse(n??"null"),t=Number.isFinite(e?.best)&&e.best>=0?Math.floor(e.best):-1;if(e?.version===2&&Number.isInteger(e.unlocked)&&e.unlocked>=1&&e.unlocked<=Ga&&t>=0)return{version:2,unlocked:e.unlocked,best:t};if(e?.version===1&&Number.isInteger(e.unlocked)&&e.unlocked>=1&&e.unlocked<=3&&t>=0)return{version:2,unlocked:e.unlocked>=2?2:1,best:t}}catch{}return td()}const nd=n=>{const e=n(ed);return Ux(e??n(Ix))};function Nx(n){return n.won&&n.level<Ga&&n.progress.unlocked>n.level?[{id:"next",label:"СЛЕДУЮЩИЙ УРОВЕНЬ →",primary:!0},{id:"retry",label:"ЕЩЁ РАЗ ↺",primary:!1},{id:"select",label:"ВЫБОР УРОВНЯ",primary:!1}]:n.won?[{id:"menu",label:"В МЕНЮ →",primary:!0},{id:"retry",label:"ЕЩЁ РАЗ ↺",primary:!1}]:[{id:"retry",label:"ЕЩЁ РАЗ ↗",primary:!0},{id:"select",label:"ВЫБОР УРОВНЯ",primary:!1}]}const id=(n,e,t)=>n==="punch"?24:e?t?Ct[t].throw:18:Gu,Fx=10,zx={cat:30,walrus:30,bulldog:40,weasel:20},Do={hold:2.2,fade:.8};function Ox(n,e){if(n.hurtAt===void 0)return 0;const t=e-n.hurtAt;return t<Do.hold?1:Math.max(0,1-(t-Do.hold)/Do.fade)}const Lo=n=>n>1.5?"foreground":n>-5?"midground":"background";class kx{constructor(e=td(),t=()=>{}){this.save=t,this.progress=e}save;mode="menu";level=1;hp=5;stamina=100;score=0;combo=0;elapsed=0;held=null;ult={phase:"none",t:0,meter:0,hat:0};dogSoak=0;hatRest=null;actors=[];events=[];flights=[];riffs=0;laundry=5;progress;won=!1;defeated=0;spawned=0;spawnClock=0;nextId=1;message="Двор ждёт своих героев";cam={x:0,z:9.5,half:2.6};thugClock=0;thugs=0;geysers=[];hazards=[];hazardClock=0;hazardCount=0;get layout(){return pt[this.level]}get goal(){return this.layout.goal}start(e){if(e>this.progress.unlocked)return!1;this.level=e,this.hp=5,this.stamina=100,this.score=0,this.combo=0,this.elapsed=0,this.held=null,this.actors=[],this.events=[],this.flights=[],this.riffs=0,this.laundry=5,this.won=!1,this.defeated=0,this.spawned=0,this.spawnClock=0,this.nextId=1,this.thugClock=0,this.thugs=0,this.geysers=[],this.hazards=[],this.hazardClock=0,this.hazardCount=0,this.mode="play",this.message=this.layout.look==="bar"?"Бар «Длинные руки». Ведите себя прилично.":"Улица большая — крути камеру к краям!",this.ult={phase:"none",t:0,meter:0,hat:0},this.dogSoak=0,this.hatRest=null;for(const t of this.layout.props)this.actors.push({id:this.nextId++,kind:t.kind,x:t.x,y:t.y,z:t.z,layer:Lo(t.z),age:0,deadline:1/0});return this.layout.friends.forEach((t,i)=>this.actors.push({id:this.nextId++,kind:"friend",who:t.who,plan:i,x:t.x0,y:t.y,z:t.z,layer:Lo(t.z),age:0,deadline:1/0})),this.spawn(),this.placeHat(),!0}get ultActive(){return this.ult.phase==="intro"||this.ult.phase==="pour"}placeHat(){const e=this.layout.hat;!e||this.ult.phase!=="none"||this.held==="hat"||this.actors.some(t=>t.kind==="hat")||this.flights.some(t=>t.kind==="hat")||this.actors.push({id:this.nextId++,kind:"hat",...e,layer:"foreground",age:0,deadline:1/0})}soak(e,t){if(this.mode!=="play"||this.ult.phase!=="pour")return null;const i=typeof e.id=="number"?this.actors.find(s=>s.id===e.id):void 0;return i?i.kind==="dog"?this.dogSoak>0?null:(this.dogSoak=Di.dogCooldown,this.score=Math.max(0,this.score-150),this.hp=Math.max(0,this.hp-1),this.combo=0,this.events.push({type:"dog",id:i.id,combo:0}),this.message="Пёс глубоко оскорблён! −150 и сердце.",this.hp||this.finish(!1),"dog"):i.kind!=="enemy"?null:(i.wet=Math.min(1,(i.wet??0)+t*Di.soakRate),i.wet<1?(this.message="ФУ-У-У! Задиры в ужасе.","soak"):(this.actors=this.actors.filter(s=>s.id!==i.id),this.combo++,this.defeated++,this.score+=120+Math.min(this.combo-1,9)*25,this.events.push({type:"ko",id:i.id,combo:this.combo}),this.message="Смыло!",this.defeated>=this.goal&&this.finish(!0),"ko")):null}gag(e,t){const i=this.layout.gags.find(r=>r.id===e);if(!i)return!1;const s={type:"gag",id:0,combo:this.combo,gag:i.kind,gagId:i.id,point:t};if(i.kind==="piano")s.amount=this.riffs++,this.message="ТРЫНЬ! Пианино само заиграло рэгтайм.";else if(i.kind==="cuckoo")this.message="КУ-КУ! Кукушка высунулась и обозвала тебя.";else if(i.kind==="lamp")this.message="Лампа раскачалась — свет мигает!";else if(i.kind==="bell")this.message="ДЗИИНЬ! Фонарь звенит, как колокол.";else if(i.kind==="laundry"){if(this.laundry<=0)return this.message="Верёвка пуста — всё бельё уже на задирах.",!0;this.laundry--;const r=t?.x??(i.min.x+i.max.x)/2,a=this.actors.filter(o=>o.kind==="enemy"&&o.age>.3&&o.x>i.min.x-1&&o.x<i.max.x+1).sort((o,c)=>Math.abs(o.x-r)-Math.abs(c.x-r))[0];if(a)return s.id=a.id,this.events.push(s),this.hurt(a,10),this.message="Трусы на голову! Задира ослеп.",!0;this.message="Бельё шлёпнулось в пыль. Мимо!"}return this.events.push(s),!0}pourInHat(e){if(this.mode!=="play"||this.ult.phase!=="pour")return!1;const t=Math.floor(this.ult.hat*gs.perSecond);return this.ult.hat+=e,this.score+=Math.floor(this.ult.hat*gs.perSecond)-t,this.message="Прямо в шляпу! Ни капли мимо…",!0}pause(){this.mode==="play"?this.mode="pause":this.mode==="pause"&&(this.mode="play")}suspend(){this.mode==="play"&&(this.mode="pause")}spawn(){if(this.spawned>=this.goal)return;const{order:e,slots:t,dogs:i,deadline:s,maxAlive:r}=this.layout,a=e[this.spawned%e.length];if(this.actors.some(h=>h.kind==="enemy"&&h.slot===a)||r&&this.actors.filter(h=>h.kind==="enemy").length>=r)return;const o=t[a],c=zx[o.skin??"cat"],l=this.spawned%3===2?Ri.kinds[Math.floor(this.spawned/3)%Ri.kinds.length]:void 0;if(this.actors.push({id:this.nextId++,kind:"enemy",x:o.x,y:o.y,z:o.z,slot:a,layer:o.layer,age:0,deadline:s+(l?Ri.len:0),hp:c,maxHp:c,antic:l}),this.spawned++,!this.actors.some(h=>h.kind==="dog"))for(const h of i)this.actors.push({id:this.nextId++,kind:"dog",...h,layer:"midground",age:0,deadline:1/0});o.skin&&(this.actors.find(h=>h.kind==="enemy"&&h.slot===a).skin=o.skin)}tick(e){if(this.mode!=="play")return;if(this.ult.phase==="intro"){this.ult.t+=e,this.ult.t>=Di.intro&&(this.ult={phase:"pour",t:0,meter:1,hat:0},this.message="Держи струю в шляпе! Задир можно и окатить. Пса не задень.");return}const t=this.ult.phase==="pour";if(t&&(this.ult.t+=e,this.ult.meter=Math.max(0,1-this.ult.t/Di.length),this.dogSoak=Math.max(0,this.dogSoak-e),this.ult.t>=Di.length)){const i=this.ult.hat>=Di.length*gs.share;this.ult={...this.ult,phase:"done",t:0,meter:0},this.events.push({type:"ultEnd",id:0,combo:this.combo,amount:i?gs.prize:0}),i?(this.score+=gs.prize,this.message=`Ни капли мимо! Бармен платит ${gs.prize}.`):this.message="Пролил! Бармен забирает свои триста."}this.elapsed+=e,this.stamina=Math.min(100,this.stamina+e*21),this.spawnClock+=e;for(const i of[...this.actors]){if(i.kind==="friend"&&i.mad){i.mad=Math.max(0,i.mad-e);continue}if(i.age+=e,i.kind==="thug"&&i.age>=jn.strike){this.nuisance(i);continue}i.kind==="enemy"&&(i.blind&&(i.blind=Math.max(0,i.blind-e),i.deadline=Math.max(i.deadline,i.age+Is+.4)),i.antic&&i.age>Ri.start+Ri.len&&(i.antic=void 0)),t&&i.kind==="enemy"&&(i.age=Math.min(i.age,Math.max(i.age-e,i.deadline-1))),i.kind==="enemy"&&i.age>=i.deadline&&(this.actors=this.actors.filter(s=>s.id!==i.id),this.hp--,this.combo=0,this.defeated++,this.events.push({type:"attack",id:i.id,combo:0}),this.message="Прилетело! Следи за замахом.")}if(this.hp<=0){this.finish(!1);return}if(this.defeated>=this.goal){this.finish(!0);return}this.spawnClock>=1.55&&(this.spawnClock=0,this.spawn()),this.stepGeysers(e),this.stepHazards(e,t),this.mode==="play"&&this.layout.thugs&&!t&&(this.thugClock+=e,this.thugClock>=(this.thugs?jn.every:jn.first)&&(this.thugClock=0,this.spawnThug()))}bump(e=1){for(let t=0;t<e;t++){this.combo++;const i=Dx[this.combo];i&&this.events.push({type:"milestone",id:0,combo:this.combo,text:i})}}stepGeysers(e){for(const t of this.geysers){t.age+=e;for(const i of this.actors.filter(s=>s.kind==="enemy"&&!t.hit.includes(s.id))){const s=Jn(this.level,i);if(!(Math.hypot(s.x-t.x,s.z-t.z)>Jt.geyser.radius)&&(t.hit.push(i.id),this.events.push({type:"knock",id:i.id,combo:this.combo,point:{x:t.x,y:0,z:t.z}}),this.hurt(i,Jt.geyser.damage,!0)||(i.deadline+=Jt.geyser.stagger,this.message="Гидрант бьёт фонтаном — задиру сдуло!"),this.mode!=="play"))return}}this.geysers=this.geysers.filter(t=>t.age<Jt.geyser.life)}stepHazards(e,t){if(t||(this.hazardClock+=e),this.hazardClock>=(this.hazardCount?ar.every:ar.first)){const i=this.actors.filter(s=>s.kind==="enemy"&&s.age>.6).map(s=>({t:s,p:Jn(this.level,s)})).sort((s,r)=>Math.abs(s.p.x-this.cam.x)-Math.abs(r.p.x-this.cam.x));i.length?(this.hazardClock=0,this.dropFromSky(i[0].p.x,i[0].p.z)):this.hazardClock-=1}for(const i of[...this.hazards]){if(i.age+=e,i.age<ar.warn)continue;this.hazards=this.hazards.filter(r=>r!==i);const s=this.actors.filter(r=>r.kind==="enemy").filter(r=>{const a=Jn(this.level,r);return Math.hypot(a.x-i.x,a.z-i.z)<=ar.radius});this.events.push({type:"crash",id:i.id,combo:this.combo,hazard:i.kind,point:{x:i.x,y:0,z:i.z},ids:s.map(r=>r.id)});for(const r of s)if(this.hurt(r,999,!1,"pancake"),this.mode!=="play")return;this.message=s.length?i.kind==="piano"?"БДЫЩЬ! Рояль с неба — задира в лепёшку!":"БУМ! Сейф на голову — в лепёшку!":"Мимо! Но грохоту-то сколько."}}dropFromSky(e,t){const i={id:this.nextId++,kind:this.hazardCount++%2?"safe":"piano",x:e,z:t,age:0};return this.hazards.push(i),this.events.push({type:"hazard",id:i.id,combo:this.combo,hazard:i.kind,point:{x:e,y:0,z:t}}),i}seeds(e,t){const i=this.actors.filter(s=>s.kind==="enemy"&&s.id!==t).map(s=>({t:s,d:Math.hypot(Jn(this.level,s).x-e.x,Jn(this.level,s).z-e.z)})).filter(s=>s.d<=Jt.seeds.radius).sort((s,r)=>s.d-r.d).slice(0,Jt.seeds.max).map(s=>s.t);this.events.push({type:"seeds",id:0,combo:this.combo,point:e,ids:i.map(s=>s.id)});for(const s of i)if(this.hurt(s,Jt.seeds.damage,!0),this.mode!=="play")return}propHit(e,t,i){const s=Ct[e.kind];if(!s.damage){this.combo=0,this.message="Шляпу — не в задиру!";return}if(e.kind==="anvil"){this.hurt(t,Math.max(s.damage,t.hp??0),!0,"pancake"),this.message="НАКОВАЛЬНЯ! Задира — блин.";return}e.kind==="chicken"&&(this.bump(Jt.chicken.combo),this.score+=Jt.chicken.bonus,this.events.push({type:"squeak",id:t.id,combo:this.combo,point:i}));const r=this.hurt(t,s.damage*(t.antic?Ri.bonus:1),!0);e.kind==="bowling"&&e.hits?.length===2&&(this.events.push({type:"strike",id:t.id,combo:this.combo,point:i}),this.message="СТРАЙК! Двоих одним шаром!"),!r&&(e.kind==="pie"&&(t.blind=Jt.pie.blind,this.events.push({type:"blind",id:t.id,combo:this.combo,point:i}),this.message="Пирог в лицо! Ничего не видит, шатается."),e.kind==="plunger"&&(t.plunger=!0,t.deadline+=Jt.plunger.stun,this.events.push({type:"stick",id:t.id,combo:this.combo,point:i}),this.message="ЧПОК! Вантуз прилип к физиономии."),e.kind==="chicken"&&(this.message=`ПИ-И-ИСК! Комбо +${Jt.chicken.combo}!`))}spawnThug(){if(this.actors.filter(l=>l.kind==="thug").length>=(this.elapsed>30?2:1))return null;const t=this.thugs++,i=["rat","gang","kid"][t%3],s=t%2?1:-1,r=t%3===1?"manhole":"edge",a=this.cam.z-jn.depth,o=this.cam.x+s*this.cam.half*(r==="manhole"?.3:.62),c={id:this.nextId++,kind:"thug",who:i,side:s,from:r,x:o,y:0,z:a,layer:"foreground",age:0,deadline:jn.strike,hp:1,maxHp:1};return this.actors.push(c),this.message=r==="manhole"?"Из люка лезет шпана — бей сразу!":"Шпана под носом — бей сразу!",c}nuisance(e){this.actors=this.actors.filter(i=>i.id!==e.id);const t=px[e.who];t.what==="stamina"&&(this.stamina=Math.max(0,this.stamina-mx)),t.what==="heart"&&(this.hp--,this.combo=0),this.events.push({type:"nuisance",id:e.id,combo:this.combo,who:e.who}),this.message=t.line}thugKo(e,t=!1){this.actors=this.actors.filter(i=>i.id!==e.id),this.bump(),this.score+=60+Math.min(this.combo-1,9)*15,this.events.push({type:"ko",id:e.id,combo:this.combo,who:e.who}),this.message=t?"Шпану — с одного броска!":["ШМЯК! Шпана — в нокауте.","Мелочь, а приятно!","Брысь!"][this.combo%3]}friendHit(e){if(e.mad){this.message="Он и так обижен! Оставь в покое.";return}const t=ux[e.who],i=t[this.events.length%t.length];this.score=Math.max(0,this.score-Ih),this.hp=Math.max(0,this.hp-1),this.combo=0,e.mad=Vu,this.events.push({type:"offend",id:e.id,combo:0,who:e.who,text:i}),this.message=`${i} −${Ih} и сердце.`,this.hp||this.finish(!1)}spend(e){if(this.mode!=="play")return!1;if(this.ultActive)return this.message="Не до кулаков — идёт ульта!",!1;const t=id(e,e==="grab"&&this.held!==null,this.held);return this.stamina<t?(this.message="Выдохни. Руки тоже устают.",!1):(this.stamina-=t,!0)}resolve(e,t){if(this.mode!=="play")return"blocked";const i=e==="grab"&&this.held!==null,s=this.held;if(i&&(this.held=null),s==="hat"){if(t.kind==="cover"&&Cl(this.level,t.id,t.point)&&this.ult.phase==="none")return this.hatRest={...t.point,y:pt[this.level].covers.find(a=>a.id===t.id).max.y,flipped:!0},this.ult={phase:"intro",t:0,meter:1,hat:0},this.combo=0,this.events.push({type:"ult",id:0,combo:0,point:this.hatRest}),this.message="ДИНЬ! Шляпа на стойке…","ult";this.placeHat(),this.events.push({type:"hatBack",id:0,combo:0})}const r=typeof t.id=="number"?this.actors.find(a=>a.id===t.id):void 0;if(i&&s&&s!=="hat"&&(!r||r.kind!=="enemy")&&t.point&&this.rest(s,{x:t.point.x,y:0,z:t.point.z}),t.kind==="cover"&&typeof t.id=="string"&&this.gag(t.id,t.point))return this.combo=0,"cover";if(t.kind==="cover")return this.combo=0,this.message=i?"Бросок в укрытие. Жди, пока высунется!":"ТУК! Укрытие. Бей, когда высунется.","cover";if(!r)return this.combo=0,this.message=t.kind==="scenery"?"Только стену поцарапал.":i?"Бросок в никуда.":"Мимо! Чистый промах.","miss";if(r.kind==="dog")return this.dogHit(r),"protected";if(r.kind==="friend")return this.friendHit(r),"protected";if(r.kind==="thug")return e==="punch"||i?(this.thugKo(r,i),i?"throw":"hit"):(this.combo=0,this.message="Шпану — кулаком!","miss");if(r.kind==="hat"&&!(e==="grab"&&!i))return this.combo=0,this.message="Шляпу не бьют. Шляпу берут.","miss";if(r.kind!=="enemy")return this.actors=this.actors.filter(a=>a.id!==r.id),e==="grab"&&!i?(this.held=r.kind,this.stamina=Math.max(0,this.stamina-Math.max(0,Ct[r.kind].grab-Gu)),this.message=r.kind==="hat"?"Котелок! Ему явно где-то здесь место…":Ct[r.kind].mass>=4?`Ух, ${Ct[r.kind].name}! Тяжело, но больно.`:"В руке! Теперь бросай в задиру.","grab"):(this.score+=25,this.events.push({type:"smash",id:r.id,combo:this.combo}),this.message="ДЗЫНЬ! Минус реквизит, плюс 25.","smash");if(e==="punch"||i){const a=r.antic?Ri.bonus:1;return!this.hurt(r,(i&&s?Ct[s].damage:Fx)*a,i)&&a>1&&(this.message="ПОДЛОВИЛ! Урон ×2."),i?"throw":"hit"}return this.combo=0,this.message="Задиру — кулаком. Предмет — хватай!","miss"}launch(e,t){if(this.mode!=="play"||!this.held)return null;const i=wx(this.nextId++,this.held,e,t);return this.held=null,this.flights.push(i),this.message="Полетел!",i}fly(e,t){const i=[];if(this.mode!=="play")return i;for(const s of[...this.flights])for(const r of Rx(s,e,t)){if(i.push({flight:s,impact:r}),this.mode!=="play")return i;const a=Ct[s.kind];if(r.type==="hit"){const o=typeof r.id=="number"?this.actors.find(c=>c.id===r.id):void 0;if(o?.kind==="enemy"?this.propHit(s,o,r.point):o?.kind==="dog"?this.dogHit(o):o?.kind==="friend"?this.friendHit(o):o?.kind==="thug"?this.thugKo(o,!0):typeof r.id=="string"&&this.gag(r.id,r.point)||(this.combo=0,this.message=r.kind==="cover"?"Бросок в укрытие. Жди, пока высунется!":"Только стену задел."),this.mode!=="play")return i;if(s.kind==="melon"&&this.seeds(r.point,o?.kind==="enemy"?o.id:void 0),s.kind==="plunger"&&o?.kind==="enemy"&&o.plunger){this.flights=this.flights.filter(c=>c!==s);break}if(a.breakable){this.flights=this.flights.filter(c=>c!==s),this.events.push({type:"shatter",id:s.id,combo:this.combo,point:r.point,prop:s.kind});break}}else this.flights=this.flights.filter(o=>o!==s),this.landed(s,r.point,r.on)}return i}landed(e,t,i){if(e.kind==="hat"){if(Cl(this.level,i,t)&&this.ult.phase==="none"){this.hatRest={...t,flipped:!0},this.ult={phase:"intro",t:0,meter:1,hat:0},this.combo=0,this.events.push({type:"ult",id:0,combo:0,point:t}),this.message="ДИНЬ! Шляпа на стойке — вверх дном.";return}const s=this.layout.covers.find(r=>r.id===this.layout.landing?.cover);if(s&&t.z<s.min.z){this.placeHat(),this.events.push({type:"hatBack",id:0,combo:0});return}}if(e.kind==="hydrant"){const s={id:this.nextId++,x:t.x,z:t.z,age:0,hit:[]};this.geysers.push(s),this.events.push({type:"geyser",id:s.id,combo:this.combo,point:t}),this.message="Гидрант сорвало — фонтан!",this.rest(e.kind,t);return}e.kind==="chicken"&&this.events.push({type:"squeak",id:0,combo:this.combo,point:t}),e.struck||(this.combo=0,this.message=e.kind==="hat"?"Мимо стойки. Подбери котелок и ещё раз!":`Мимо! ${Ct[e.kind].name[0].toUpperCase()+Ct[e.kind].name.slice(1)} лежит — подбери.`),this.rest(e.kind,t)}rest(e,t){const i={id:this.nextId++,kind:e,x:t.x,y:t.y,z:t.z,layer:Lo(t.z),age:0,deadline:1/0};this.actors.push(i),this.events.push({type:"land",id:i.id,combo:this.combo,point:t,prop:e})}dogHit(e){this.score=Math.max(0,this.score-150),this.hp=Math.max(0,this.hp-1),this.combo=0,this.events.push({type:"dog",id:e.id,combo:0}),this.message="Пёс — святой! −150 и сердце.",this.hp||this.finish(!1)}hurt(e,t,i=!1,s){const r=Math.min(t,e.hp??1);return e.hp=Math.max(0,(e.hp??1)-t),e.hurtAt=this.elapsed,this.events.push({type:"hurt",id:e.id,combo:this.combo,amount:r}),e.hp>0?(this.score+=20,e.deadline=Math.max(e.deadline,e.age+Is+1.2),this.message=i?`Прямое попадание! −${t}`:["БАМ! Ещё разок!","Шатается!","Добавь!"][Math.floor(e.hp/10)%3],!1):(this.actors=this.actors.filter(a=>a.id!==e.id),this.bump(),this.score+=(i?180:100)+Math.min(this.combo-1,9)*25,this.defeated++,this.events.push({type:"ko",id:e.id,combo:this.combo,how:s??Lx(this.defeated)}),this.message=i?"Точный бросок. Нокаут!":["Нокаут! Так держать.","Вот это размах!","Живой нокаут!"][this.combo%3],this.defeated>=this.goal&&this.finish(!0),!0)}act(e,t,i=!1){if(this.mode!=="play")return"blocked";if(!i&&!this.spend(e))return"tired";const s=this.actors.find(r=>r.id===t);return this.resolve(e,s?{kind:s.kind==="enemy"||s.kind==="dog"||s.kind==="friend"||s.kind==="thug"?s.kind:"prop",id:t}:{kind:"whiff"})}get canUlt(){return this.ult.phase==="none"}get pouring(){return this.ult.phase==="pour"}finish(e){this.won=e,this.mode="result",this.held=null,e&&(this.progress.unlocked=Math.min(Ga,Math.max(this.progress.unlocked,this.level+1)),this.score+=this.hp*100),this.ultActive&&(this.ult={...this.ult,phase:"done",t:0,meter:0}),this.progress.best=Math.max(this.progress.best,this.score),this.save({...this.progress})}}function Bx({left:n=!0}={}){const e=new Ot;function t(a,o,c,l=!1){const h=l?new Mt({color:c,fog:!1}):new ri({color:c,roughness:.9}),u=new Te(new zn(...a),h);return u.position.set(...o),u.castShadow=!l,u.receiveShadow=!l,e.add(u),u}function i(a,o){t([.16,6,.16],[a*4.9,3,o],"#1f1a2a"),t([1.6,.15,.15],[a*4.25,6,o],"#1f1a2a");const c=t([.65,.14,.45],[a*3.5,5.85,o],"#fff1b2",!0);o===-5&&(c.userData.bell=a<0?0:1);const l=new Jl("#ffffff",160,12,2);l.position.set(a*3.3,5.2,o),e.add(l)}t([70,.25,85],[0,-.2,-20],"#4a4552");for(let a=-36;a<-5;a+=4)t([.14,.02,2],[0,-.055,a],"#f2b45c");for(let a=-3.8;a<=3.8;a+=1.25)t([.7,.025,2.5],[a,-.05,-3.3],"#b9a9a8");for(const a of[-1,1]){if(a<0&&!n){t([.22,.36,60],[a*4.45,.05,-19],"#a99a92");for(const o of[-5,-20])i(a,o);continue}t([7,.3,60],[a*8,-.04,-19],"#6c5f6c"),t([.22,.36,60],[a*4.45,.05,-19],"#a99a92");for(let o=0;o<4;o++){const c=-7-o*8,l=6+(o+(a>0?1:0))%3*2.5;t([5,l,6.5],[a*8,l/2,c],o%2?"#5a4560":"#3e4a66"),t([5.35,.25,6.8],[a*8,l,c],"#221c30"),t([1.3,.22,5.5],[a*5.1,3,c],o%2?"#e0574f":"#2f9c8f");for(let h=-2;h<=2;h+=1)t([1.3,.24,.4],[a*5.1,3.02,c+h],"#f1e5bf");t([.15,1.3,2],[a*5.44,1.5,c],o%3?"#ffd27a":"#ff9f6a",!0),t([.15,1.3,2],[a*5.44,l-1.5,c],(o+a)%2?"#ffe3a1":"#3a3550",(o+a)%2!==0),o%2===0&&t([.6,1.2,.6],[a*7,l+.6,c+1.5],"#221c30")}for(const o of[-5,-20])i(a,o)}for(let a=0;a<9;a++){const o=7+a*7%5*2.2;t([3.2,o,2],[-14+a*3.5,o/2,-40],"#2a2140")}const s=["#ffd36e","#ff6fa8","#8ff0d0","#ffd36e","#ff9a5c"];for(const a of[-4.5,-9]){const o=new Te(new qt(.012,.012,10,4),new Mt({color:"#141018"}));o.rotation.z=Math.PI/2,o.position.set(0,5.6,a),e.add(o);for(let c=-4.5,l=0;c<=4.5;c+=.75,l++){const h=new Te(new Yi(.08,8,6),new Mt({color:s[l%s.length],fog:!1}));h.position.set(c,5.6-Math.cos(c/4.5*Math.PI/2)*.45,a),h.userData.blink=l,e.add(h)}}t([2.3,.18,4],[-6,3.7,-2],"#3a2f48");for(const a of[-3.7,-.3])t([.12,3.6,.12],[-6.8,1.8,a],"#3a2f48");t([.12,2.8,3.5],[-7,1.8,-2],"#7fd4c8",!0),t([.8,.18,2.8],[-6.2,.85,-2],"#e5af79"),t([.7,1.1,.7],[5.3,.55,1],"#2d4a46"),t([2.3,1.8,4],[6.6,1.2,-13],"#c9894f"),t([2.3,1.1,1.5],[6.6,2,-10.9],"#2e3346");const r=(a,o,c,l,h=0)=>{const u=document.createElement("canvas");u.width=512,u.height=128;const d=u.getContext("2d");d&&(d.fillStyle="#17121f",d.fillRect(0,0,512,128),d.font="900 64px Arial",d.textAlign="center",d.shadowColor=c,d.shadowBlur=22,d.fillStyle=c,d.fillText(a,256,86),d.fillStyle="#fff6f0",d.shadowBlur=0,d.fillText(a,256,84),d.strokeStyle=c,d.lineWidth=8,d.strokeRect(8,8,496,112));const f=new vi(u);f.colorSpace=ht;const m=new Te(new Ht(o,o/4),new Mt({map:f,fog:!1}));m.position.set(...l),m.rotation.y=h,m.userData.neon=!0,e.add(m)};return r("ПЕРЕУЛОК",4.3,"#ff4fa3",[-5.9,4.55,-4]),r("ЧЕБУРЕКИ",3.2,"#5ef0c8",[5.42,4.2,-7],-Math.PI/2),n&&r("ШУМ",2.2,"#ffcf4a",[-5.42,4.8,-12.5],Math.PI/2),e}function Hx(n){const e=new Ot,t=h=>new ri({color:h,roughness:.85});function i(h,u,d){const f=new Te(new zn(...h),t(d));return f.position.set(...u),f.castShadow=f.receiveShadow=!0,e.add(f),f}const s=document.createElement("canvas");s.width=s.height=128;const r=s.getContext("2d");r&&(r.fillStyle="#d9d4c8",r.fillRect(0,0,128,128),r.fillStyle="#3b3733",r.fillRect(0,0,64,64),r.fillRect(64,64,64,64));const a=new vi(s);a.wrapS=a.wrapT=ba,a.repeat.set(14,11),a.colorSpace=ht,a.anisotropy=4;const o=new Te(new Ht(28,22),new ri({map:a,roughness:.6}));o.rotation.x=-Math.PI/2,o.position.set(0,0,1.6),o.receiveShadow=!0,e.add(o);const c=new Te(new Ht(21,21),new Mt({map:n,fog:!1}));c.position.set(0,21/2-4.6,-9.4),e.add(c);for(const h of[-1,1]){i([.4,12,18],[h*10.4,6,0],h<0?"#5d554c":"#4d463f");for(let u=-8;u<8;u+=2.2)i([.06,2.2,.14],[h*10.18,1.1,u],"#2f2a26")}for(let h=-8;h<=6;h+=3.5)i([22,.45,.5],[0,8.2,h],"#2a2622");i([22,.2,18],[0,8.6,-.5],"#1b1917");const l=(h,u,d)=>{i([.12,d,.12],[h,d/2,u],"#2f2a26");const f=new Te(new qt(.32,.3,.14,18),t("#7a3b2f"));f.position.set(h,d,u),f.castShadow=f.receiveShadow=!0,e.add(f);const m=new Te(new Kl(.24,.025,6,18),t("#9a9a9a"));m.rotation.x=Math.PI/2,m.position.set(h,d*.35,u),e.add(m)};for(const h of[-2.3,2.7])l(h,-1.55,.95);l(.95,3.45,.7),[-3,2.5].forEach((h,u)=>{const d=new Ot;d.position.set(h,8.4,-3.2),d.userData.lamp=u,e.add(d);const f=new Te(new qt(.015,.015,2.6,4),new Mt({color:"#111111"}));f.position.set(0,-1.3,0),d.add(f);const m=new Te(new $l(.55,.45,18,1,!0),new Mt({color:"#f4efe0",side:zt}));m.position.set(0,-2.7,0),d.add(m);const _=new Jl("#ffffff",55,11,1.6);_.position.set(0,-3.2,0),_.userData.base=55,d.add(_)});for(const h of[-1,1]){const u=new Ot;u.position.set(h<0?3.55:5.35,0,-7.2),e.add(u);const d=new Te(new zn(.85,1.25,.06),t("#8e6b4a"));d.position.set(-h*.44,1.2,0),d.castShadow=!0,u.add(d),u.userData.swing=h}return e}const Gx=[[0,76,1],[1,79,2],[3,76,1],[4,72,2],[6,76,1],[7,79,1],[8,81,2],[10,79,1],[11,76,2],[13,72,1],[14,74,2],[16,73,1],[17,76,2],[19,79,1],[20,81,2],[22,79,1],[23,76,1],[24,73,2],[26,76,1],[27,69,3],[30,71,2],[32,79,1],[33,77,1],[34,76,1],[35,74,1],[36,72,1],[37,71,1],[38,74,2],[40,79,2],[42,77,2],[44,76,2],[46,74,2]],Vx=[{bass:[48,43],chord:[64,67,72]},{bass:[45,40],chord:[61,64,67]},{bass:[43,38],chord:[59,65,67]}],Bh={step:48,notes:[36,48,60,64,67,72]},ca=[{key:0,step:.095,lift:0},{key:5,step:.09,lift:12},{key:-3,step:.1,lift:0},{key:2,step:.088,lift:12}];function Wx(n=0){const e=ca[(n%ca.length+ca.length)%ca.length],t=[],i=s=>s*e.step+(s%2?e.step*.18:0);for(const[s,r,a]of Gx)t.push({t:i(s),midi:r+e.key+(s>=32?0:e.lift),dur:a*e.step*1.1,vel:s%4===0?1:.8});Vx.forEach((s,r)=>{const a=r*16;t.push({t:i(a),midi:s.bass[0]+e.key,dur:e.step*3.5,vel:.95},{t:i(a+8),midi:s.bass[1]+e.key,dur:e.step*3.5,vel:.9});for(const o of[a+4,a+12])for(const c of s.chord)t.push({t:i(o),midi:c+e.key-12,dur:e.step*2,vel:.6})});for(const s of Bh.notes)t.push({t:i(Bh.step),midi:s+e.key,dur:.7,vel:.9});return t.sort((s,r)=>s.t-r.t)}const sd=(n,e,t)=>.2126*n+.7152*e+.0722*t;function Pl(n){const e=sd(n.r,n.g,n.b);return n.setRGB(e,e,e)}function rd(n){const e=n.getContext("2d",{willReadFrequently:!0});if(!e)return;const t=e.getImageData(0,0,n.width,n.height),i=t.data;for(let s=0;s<i.length;s+=4){const r=Math.round(sd(i[s],i[s+1],i[s+2]));i[s]=i[s+1]=i[s+2]=r}e.putImageData(t,0,0)}const Hh=new WeakSet;function Xx(n){return n.traverse(e=>{const t=e.material;if(t)for(const i of Array.isArray(t)?t:[t]){if(Hh.has(i))continue;Hh.add(i),i.color&&Pl(i.color),i.emissive&&Pl(i.emissive);const s=i.map?.image;typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement&&(rd(s),i.map.needsUpdate=!0),i.userData.world=!0}}),n}const Da={street:{sky:[[0,"#4a4a4a"],[.5,"#9c9c9c"],[.8,"#d4d4d4"],[1,"#ececec"]],fog:"#a8a8a8",near:16,far:50,hemi:["#ececec","#4e4e4e",1.8],sun:["#f6f6f6",2.6],sunAt:[-7,13,10]},bar:{sky:[[0,"#0b0b0b"],[.6,"#1e1e1e"],[1,"#3a3a3a"]],fog:"#1a1a1a",near:20,far:48,hemi:["#dcdcdc","#2a2a2a",1.5],sun:["#ffffff",2.3],sunAt:[-4,9,9]}},sc={base:"#2c55c9",shine:"#6d93ee",dark:"#1a3486"};function Ma(n,e){const t=Math.max(34,Math.min(78,Math.min(n*.095,e*.078)));return{r:t,hose:t*1.02,ink:Math.max(3,t*.09),rim:Math.max(2,t*.05)}}const Io=1.45;function qx(n,e){return n.x>=e/2?1:-1}function rc(n,e,t,i,s=0){const{r,hose:a}=Ma(e,t),o=Math.max(r*2,e*.12),c=n>0?e-o:o;let l=t-r*2.3;i&&i.right>c-r*Io&&i.left<c+r*Io&&(l=Math.min(l,i.top-r*Io-6)),l=Math.max(l,t*.45)+s;const u={x:Math.min(e-a,Math.max(a,c-n*r*1.5)),y:t+a*.7},d={x:c,y:l},f={x:c+n*r*.55,y:(u.y+l)/2+r*.2};return{side:n,shoulder:u,ctrl:f,glove:d,r,w0:a,w1:a*.74,open:!1,squash:0}}const Uo=(n,e,t)=>({x:n.x+(e.x-n.x)*t,y:n.y+(e.y-n.y)*t}),Yx=n=>{const t=n-1;return 1+(1.9+1)*t**3+1.9*t**2};function Gh(n,e,t,i,s,r,a={}){const o=rc(n,e,t,a.avoid),c=a.depth??1,l=!!a.throwing;let h,u=0,d=0,f=0,m=!1;if(s<.08){const P=Math.sin(s/.08*Math.PI/2)*(l?1.8:1);h={x:o.glove.x+n*o.r*.25*P,y:o.glove.y+o.r*.45*P},d=.1*P,f=.08*P}else if(s<r.arrive){const P=(s-.08)/(r.arrive-.08);u=Yx(P),h=Uo(o.glove,i,u),d=l?.55*Math.cos(P*Math.PI):.22*Math.sin(P*Math.PI)+.05,f=-.12*Math.sin(P*Math.PI),m=!!a.grab&&!l}else if(s<r.release){const P=(s-r.arrive)/(r.release-r.arrive);u=1,h={...i},d=.07*Math.sin(P*Math.PI*5)*(1-P)+(l?-.3*(1-P):0),f=.22*Math.max(0,1-P*3),m=!!a.grab||l}else{const P=Math.min(1,(s-r.release)/(1-r.release)),M=(1-P)**2*Math.cos(P*Math.PI*2.5),y=M<0?Math.max(M,-.25*o.r/(Math.hypot(i.x-o.glove.x,i.y-o.glove.y)||1)):M;u=Math.max(0,y),h=Uo(o.glove,i,y),d=-.18*(1-P)*Math.sin(P*Math.PI*3+.5),m=l&&P<.3}const _=1+(Math.min(1.15,Math.max(.6,c))-1)*Math.min(1,Math.max(0,u)),g=o.r*_,p=o.shoulder,T=h.x-p.x,E=h.y-p.y,S=Math.hypot(T,E)||1,R=Uo(p,h,.45),w={x:-E/S*n,y:T/S*n},C=s<.08?{x:o.ctrl.x+w.x*d*S,y:o.ctrl.y+w.y*d*S}:{x:R.x+w.x*d*S,y:R.y+w.y*d*S};return{side:n,shoulder:p,ctrl:C,glove:h,r:g,w0:o.w0,w1:o.w1*Math.max(.55,_),open:m,squash:f}}const ha="#151715",Vh="rgba(255,248,226,.92)",$x=sc.base,Kx=sc.shine,Zx=sc.dark,Wh="#fdfaf0",jx="#ddd6c4";function Jx(n,e,t,i){const s=1-i;return{x:s*s*n.x+2*s*i*e.x+i*i*t.x,y:s*s*n.y+2*s*i*e.y+i*i*t.y}}function ad(n,e,t,i){const s=1-i,r=2*s*(e.x-n.x)+2*i*(t.x-e.x),a=2*s*(e.y-n.y)+2*i*(t.y-e.y),o=Math.hypot(r,a)||1;return{x:r/o,y:a/o}}function No(n,e,t,i,s,r,a){const c=[],l=[];for(let h=0;h<=24;h++){const u=h/24,d=Jx(e,t,i,u),f=ad(e,t,i,u),m=(s+(r-s)*u)/2,_=-f.y,g=f.x,[p,T]=a??[-1,1];c.push({x:d.x+_*m*T,y:d.y+g*m*T}),l.push({x:d.x+_*m*p,y:d.y+g*m*p})}n.beginPath(),c.forEach((h,u)=>u?n.lineTo(h.x,h.y):n.moveTo(h.x,h.y));for(let h=l.length-1;h>=0;h--)n.lineTo(l[h].x,l[h].y);n.closePath()}function Qx(n,e){const t=(s,r,a,o,c=0)=>({path:l=>{l.beginPath(),l.ellipse(s,r,a,o,c,0,Math.PI*2)}}),i=(s,r,a,o=.35)=>{const c=Math.sin(s),l=-Math.cos(s);return{line:a,path:h=>{h.beginPath(),h.moveTo(c*o,l*o),h.lineTo(c*(o+r),l*(o+r))}}};return n?[t(0,.1,.82,.78),i(-.5,.72,.38),i(-.17,.86,.38),i(.17,.86,.38),i(.5,.72,.38),i(e*1.35,.55,.36,.45)]:[t(0,.05,.88,.84),t(0,-.5,.8,.46),t(e*.8,.05,.3,.5,e*.35)]}const ev=[{path:n=>{n.beginPath(),n.moveTo(-.5,.55),n.lineTo(.5,.55),n.lineTo(.74,1.02),n.ellipse(0,1.02,.74,.3,0,0,Math.PI),n.lineTo(-.5,.55),n.closePath()}}];function Qs(n,e,t,i,s){n.strokeStyle=i,n.fillStyle=i;for(const r of e){if(r.path(n),r.line){n.lineWidth=r.line+t*2,n.stroke();continue}t>0&&(n.lineWidth=t*2,n.stroke()),s&&n.fill()}}function tv(n,e,t,i){const{shoulder:s,ctrl:r,glove:a,r:o,side:c}=e,l=ad(s,r,a,1),h={x:a.x+l.x*-o*.95,y:a.y+l.y*-o*.95},u=Math.atan2(l.y,l.x)+Math.PI/2,d=-c;n.save(),n.lineJoin="round",n.lineCap="round",No(n,s,r,h,e.w0,e.w1),n.strokeStyle=Vh,n.lineWidth=(t+i)*2,n.stroke(),n.strokeStyle=ha,n.lineWidth=t*2,n.stroke(),n.fillStyle=$x,n.fill(),No(n,s,r,h,e.w0,e.w1,[c>0?.35:-1,c>0?1:-.35]),n.fillStyle=Zx,n.fill(),No(n,s,r,h,e.w0,e.w1,c>0?[-.62,-.3]:[.3,.62]),n.fillStyle=Kx,n.fill(),n.translate(a.x,a.y),n.rotate(u),n.scale(o*(1+e.squash*.6),o*(1-e.squash));const f=1/o,m=Qx(e.open,d),_=ev;if(Qs(n,[...m,..._],(t+i)*f,Vh,!1),Qs(n,m,t*f,ha,!1),Qs(n,m,0,Wh,!0),n.save(),m[0].path(n),n.clip(),n.fillStyle=jx,n.beginPath(),n.ellipse(-d*.45,.55,.8,.55,0,0,Math.PI*2),n.fill(),n.restore(),n.strokeStyle=ha,n.lineWidth=t*f*.55,n.lineCap="round",e.open)n.beginPath(),n.arc(0,.2,.38,Math.PI*1.15,Math.PI*1.85),n.stroke();else{for(const g of[-.32,0,.32])n.beginPath(),n.moveTo(g*1.05,-.94+Math.abs(g)*.2),n.quadraticCurveTo(g*.9,-.78,g*.8,-.62),n.stroke();n.lineWidth=t*f*.8;for(const g of[-.27,0,.27])n.beginPath(),n.moveTo(g,-.22),n.lineTo(g*1.08,.3),n.stroke()}Qs(n,_,t*f,ha,!1),Qs(n,_,0,Wh,!0),n.beginPath(),n.moveTo(-.56,.7),n.quadraticCurveTo(0,.82,.56,.7),n.stroke(),n.restore()}const od="long-arms.settings.v1",ld=matchMedia("(prefers-reduced-motion: reduce)");let mn=!1,Er;try{const n=JSON.parse(localStorage.getItem(od)??"null");typeof n=="object"&&n!==null&&("muted"in n&&typeof n.muted=="boolean"&&(mn=n.muted),"reducedMotion"in n&&typeof n.reducedMotion=="boolean"&&(Er=n.reducedMotion))}catch{mn=!1,Er=void 0}const Us=()=>Er??ld.matches;function ac(){document.documentElement.dataset.reducedMotion=String(Us())}ac();ld.addEventListener("change",ac);let hn,Fo=!0;function oc(){if(!(mn||!Fo))try{hn??=new AudioContext,hn.state==="suspended"&&hn.resume().catch(()=>{Fo=!1})}catch{Fo=!1}}const nv={ui:[["sine",520,300,.1,.05,0]],whoosh:[["sine",180,420,.16,.02,.9]],hit:[["triangle",150,48,.16,.09,.5],["square",420,160,.05,.025,0]],throw:[["triangle",300,70,.18,.08,.4]],ko:[["sine",660,1320,.22,.035,0],["sine",990,1980,.22,.02,0]],grab:[["sine",230,380,.1,.06,0]],cover:[["square",110,60,.09,.05,.6]],miss:[["sine",260,90,.2,.03,.5]],dog:[["sine",880,520,.32,.05,0],["sine",700,400,.3,.03,0]],attack:[["sawtooth",90,40,.25,.07,.7]],windup:[["sine",300,520,.18,.025,0]],ding:[["sine",1568,1560,1.2,.08,0],["sine",3136,3120,.7,.03,0],["triangle",784,780,.9,.03,0]],slide:[["sine",1400,260,.9,.06,0]],yuck:[["sawtooth",210,120,.28,.035,.3]],toss:[["sine",260,620,.14,.03,.8]],thud:[["triangle",120,55,.14,.07,.5]],bell:[["sine",988,980,1.6,.07,0],["sine",1976,1960,.9,.025,0],["triangle",494,490,1.4,.035,0]],cuckoo:[["sine",784,780,.2,.06,0,0],["sine",622,620,.35,.06,0,.24],["sine",784,780,.2,.05,0,.75],["sine",622,620,.35,.05,0,.99]],buzz:[["sawtooth",110,108,.45,.03,.5],["square",220,218,.3,.012,0,.1]],flop:[["sine",320,110,.35,.04,.6]],shatter:[["square",2400,1800,.18,.02,.9],["triangle",1600,900,.25,.025,.6],["sine",3200,2600,.12,.015,0]],huff:[["sawtooth",330,180,.12,.04,.4],["sawtooth",300,150,.2,.035,.5,.14]],squeak:[["square",1300,1900,.09,.035,0],["square",1900,1100,.16,.03,0,.09]],harp:[0,4,7,12,16,19,24,28].map((n,e)=>["triangle",523*2**(n/12),523*2**(n/12)*.995,.9,.035,0,e*.07]),whistle:[["sine",2300,500,1.1,.045,0]],crash:[["sawtooth",90,35,.6,.09,.8],["square",1200,300,.4,.03,.9,.03],["triangle",60,40,.7,.08,.3]],strike:[["square",900,300,.12,.04,.8],["triangle",200,60,.4,.06,.7,.05],["square",1400,500,.2,.02,.9,.12]],splat:[["sine",240,60,.25,.07,.7]],zing:[["sawtooth",400,1400,.12,.03,.2]],steal:[["sine",600,1200,.08,.04,0],["sine",1200,600,.12,.03,0,.08]],pop:[["sine",220,660,.09,.05,.2]],geyser:[["sine",300,900,.9,.04,.95]],iris:[["triangle",880,440,.25,.03,0],["triangle",660,330,.3,.03,0,.12]],boing:[["sine",140,420,.35,.06,0]]};let ua;function Ne(n){if(mn||document.hidden||!hn||hn.state!=="running")return;const e=hn;if(e.currentTime,!ua){ua=e.createBuffer(1,e.sampleRate*.4,e.sampleRate);const t=ua.getChannelData(0);for(let i=0;i<t.length;i++)t[i]=Math.random()*2-1}for(const[t,i,s,r,a,o,c]of nv[n]){const l=e.currentTime+(c??0),h=e.createGain();h.connect(e.destination),h.gain.setValueAtTime(1e-4,l),h.gain.exponentialRampToValueAtTime(a,l+.008),h.gain.exponentialRampToValueAtTime(1e-4,l+r);const u=e.createOscillator();u.type=t,u.frequency.setValueAtTime(i,l),u.frequency.exponentialRampToValueAtTime(Math.max(30,s),l+r*.8);const d=e.createGain();if(d.gain.value=1-o*.7,u.connect(d),d.connect(h),u.start(l),u.stop(l+r+.02),u.onended=()=>{u.disconnect(),d.disconnect(),h.disconnect()},o>0){const f=e.createBufferSource(),m=e.createBiquadFilter(),_=e.createGain();f.buffer=ua,m.type="bandpass",m.frequency.setValueAtTime(i*4,l),m.frequency.exponentialRampToValueAtTime(Math.max(60,s*4),l+r),_.gain.value=o,f.connect(m),m.connect(_),_.connect(h),f.start(l),f.stop(l+r),f.onended=()=>{f.disconnect(),m.disconnect(),_.disconnect()}}}}let er;function iv(n){if(!(n&&!mn&&!document.hidden&&hn?.state==="running")){if(er){const u=er;er=void 0,u.gain.gain.setTargetAtTime(0,hn.currentTime,.05),setTimeout(()=>{u.src.stop(),u.lfo.stop(),u.src.disconnect(),u.gain.disconnect()},300)}return}if(er||!hn)return;const t=hn,i=t.sampleRate*2,s=t.createBuffer(1,i,t.sampleRate),r=s.getChannelData(0);for(let u=0;u<i;u++)r[u]=Math.random()*2-1;const a=t.createBufferSource();a.buffer=s,a.loop=!0;const o=t.createBiquadFilter();o.type="bandpass",o.frequency.value=2200,o.Q.value=1.4;const c=t.createGain();c.gain.value=0,c.gain.setTargetAtTime(.05,t.currentTime,.08);const l=t.createOscillator(),h=t.createGain();l.frequency.value=9,h.gain.value=900,l.connect(h),h.connect(o.frequency),a.connect(o),o.connect(c),c.connect(t.destination),a.start(),l.start(),er={src:a,gain:c,lfo:l}}function Xh(){try{localStorage.setItem(od,JSON.stringify({muted:mn,reducedMotion:Er}))}catch{document.querySelector("#settings-note")?.replaceChildren("Настройки действуют до закрытия вкладки.")}}function sv(){return`<div class="settings" aria-label="Настройки"><button id="mute" aria-pressed="${mn}">Без звука: ${mn?"да":"нет"}</button><button id="motion" aria-pressed="${Us()}">Меньше движения: ${Us()?"да":"нет"}</button><span id="settings-note" role="status"></span></div>`}function rv(n){document.getElementById("mute")?.addEventListener("click",()=>{mn=!mn,Xh(),mn||(oc(),Ne("ui")),n()}),document.getElementById("motion")?.addEventListener("click",()=>{Er=!Us(),ac(),Xh(),n()})}let zo;function av(n){if(mn||document.hidden||!hn||hn.state!=="running")return!1;const e=hn,t=e.currentTime+.03;if(zo){const r=zo;r.gain.setTargetAtTime(0,e.currentTime,.03),setTimeout(()=>r.disconnect(),400)}const i=e.createGain();i.gain.value=.9;const s=e.createBiquadFilter();s.type="lowpass",s.frequency.value=3200,s.Q.value=.4,i.connect(s),s.connect(e.destination),zo=i;for(const r of n){const a=440*2**((r.midi-69)/12),o=t+r.t,c=o+r.dur+.25,l=e.createGain();l.connect(i),l.gain.setValueAtTime(1e-4,o),l.gain.exponentialRampToValueAtTime(.045*r.vel,o+.005),l.gain.exponentialRampToValueAtTime(.012*r.vel,o+Math.min(.18,r.dur)),l.gain.exponentialRampToValueAtTime(1e-4,c);for(const[h,u,d]of[["triangle",-9,1],["triangle",9,1],["square",3,.12]]){const f=e.createOscillator(),m=e.createGain();f.type=h,f.frequency.value=a,f.detune.value=u,m.gain.value=d,f.connect(m),m.connect(l),f.start(o),f.stop(c+.02),f.onended=()=>{f.disconnect(),m.disconnect()}}}return!0}let cd=nd(()=>null);try{cd=nd(n=>localStorage.getItem(n))}catch{}const B=new kx(cd,n=>{try{localStorage.setItem(ed,JSON.stringify(n))}catch{B.message="Сохранение недоступно в этом браузере."}}),Dl=document.querySelector("#app");Dl.innerHTML='<canvas id="scene" aria-label="Трёхмерный двор и задиры"></canvas><div id="film" aria-hidden="true"></div><canvas id="arm" aria-hidden="true"></canvas><div id="ui"></div>';const Mn=document.querySelector("#ui");{const n=document.createElement("canvas");n.width=n.height=128;const e=n.getContext("2d");if(e){const t=e.createImageData(128,128);for(let i=0;i<t.data.length;i+=4){const s=Math.random()*255;t.data[i]=t.data[i+1]=t.data[i+2]=s,t.data[i+3]=255}e.putImageData(t,0,0)}document.getElementById("film")?.style.setProperty("--grain",`url(${n.toDataURL()})`)}const Ft=document.querySelector("#scene"),Un=new cx({canvas:Ft,antialias:!0,alpha:!1});Un.setPixelRatio(Math.min(devicePixelRatio,2));Un.shadowMap.enabled=!0;Un.shadowMap.type=au;Un.outputColorSpace=ht;Un.autoClear=!1;Un.info.autoReset=!1;const pn=new lp;pn.background=new Ge("#e2e2e2");pn.fog=new ql("#e2e2e2",14,42);const vt=new ln(50,1,.3,90),Sa=new yp("#ffffff","#6e6e6e",2.4);pn.add(Sa);const Bt=new Ep("#ffffff",3);Bt.position.set(-7,14,10);Bt.castShadow=!0;Bt.shadow.mapSize.set(2048,2048);Bt.shadow.bias=-6e-4;Bt.shadow.normalBias=.02;Bt.shadow.camera.left=-16;Bt.shadow.camera.right=16;Bt.shadow.camera.top=16;Bt.shadow.camera.bottom=-16;pn.add(Bt);function qh(n){const e=document.createElement("canvas");e.width=4,e.height=256;const t=e.getContext("2d"),i=t.createLinearGradient(0,0,0,256);for(const[r,a]of n)i.addColorStop(r,a);t.fillStyle=i,t.fillRect(0,0,4,256);const s=new vi(e);return s.colorSpace=ht,s}const ov={street:qh(Da.street.sky),bar:qh(Da.bar.sky)},hd=()=>B.mode==="menu"||B.mode==="select"?1:B.level,lc=(n=B.level)=>pt[n].look==="bar";function lv(n){const e=pt[n].look,t=Da[e];pn.background=ov[e],pn.fog.color.set(t.fog),pn.fog.near=t.near,pn.fog.far=t.far,Sa.color.set(t.hemi[0]),Sa.groundColor.set(t.hemi[1]),Sa.intensity=t.hemi[2],Bt.color.set(t.sun[0]),Bt.intensity=t.sun[1],Ea=t.sunAt}let Ea=Da.bar.sunAt;pn.add(Bt.target);function Yh(n){Bt.position.set(Ea[0]+n,Ea[1],Ea[2]),Bt.target.position.set(n,0,0),Bt.target.updateMatrixWorld()}const ud=n=>"./assets/"+n,dd=new Cu({color:"#202320"}),$h=new Map;function yn(n){let e=$h.get(n);return e||(e=new ri({color:n,roughness:.9,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1}),$h.set(n,e)),e}function He(n,e,t,i,s,r,a,o,c=!0){const l=new Te(new zn(e,t,i),yn(s));return l.position.set(r,a,o),l.castShadow=!0,l.receiveShadow=!0,n.add(l),c&&l.add(new pp(new mp(l.geometry),dd)),l}const cv=n=>new I((n.min.x+n.max.x)/2,(n.min.y+n.max.y)/2,(n.min.z+n.max.z)/2),hv=n=>new I(n.max.x-n.min.x,n.max.y-n.min.y,n.max.z-n.min.z),Cr=new Map;function uv(n,e){const t=new Ot,i=cv(e),s=hv(e);if(t.position.set(i.x,e.min.y,i.z),n.add(t),Cr.set(e.id,t),e.look==="barrel"){const r=new Te(new qt(s.x/2,s.x/2*.94,s.y,20),yn(e.color));r.position.y=s.y/2,r.castShadow=r.receiveShadow=!0,t.add(r);for(const o of[.18,.82]){const c=new Te(new qt(s.x/2+.018,s.x/2+.018,.07,20,1,!0),yn("#2a2e2a"));c.position.y=s.y*o,t.add(c)}const a=new Te(new qi(s.x/2*.9,20),yn("#1f2422"));a.rotation.x=-Math.PI/2,a.position.y=s.y+.004,t.add(a)}else if(e.look==="crate"||e.look==="pallet"){He(t,s.x,s.y,s.z,e.color,0,s.y/2,0);const r=e.look==="crate"?3:5;for(let a=0;a<r;a++)He(t,s.x*.96,.05,.03,"#7b5532",0,s.y*(a+.5)/r,s.z/2+.02,!1)}else if(e.look==="dumpster")He(t,s.x,s.y,s.z,e.color,0,s.y/2,0),He(t,s.x+.08,.09,s.z+.08,"#2b4f39",0,s.y+.045,0),He(t,s.x*.8,.16,.03,"#f1e7c3",0,s.y*.55,s.z/2+.02,!1);else if(e.look==="van"){He(t,s.x,s.y,s.z,e.color,0,s.y/2,0),He(t,.9,.6,.03,"#2d3a40",s.x/2-.6,s.y*.72,s.z/2+.02,!1),He(t,s.x*.55,.2,.03,"#f359a4",-.4,s.y*.38,s.z/2+.02,!1);for(const r of[-s.x/2+.55,s.x/2-.55]){const a=new Te(new qt(.34,.34,.25,16),yn("#1f2321"));a.rotation.x=Math.PI/2,a.position.set(r,.09-e.min.y+.25,s.z/2-.1),t.add(a)}}else if(e.look==="barrier"){He(t,s.x,s.y,s.z,e.color,0,s.y/2,0);for(let r=0;r<4;r++)He(t,.32,s.y*.7,.03,"#e55a3a",-s.x/2+.35+r*.6,s.y*.5,s.z/2+.02,!1)}else if(e.look==="piano"){He(t,s.x,s.y,s.z,e.color,0,s.y/2,0),He(t,s.x+.1,.08,s.z+.1,"#241a15",0,s.y+.04,0),He(t,s.x*.92,.1,.32,"#efe9da",0,s.y*.6,s.z/2+.16);for(let r=0;r<14;r++)He(t,.045,.05,.18,"#161311",-s.x*.42+r*s.x*.065,s.y*.6+.07,s.z/2+.12,!1);He(t,s.x*.7,s.y*.3,.03,"#5a4436",0,s.y*.8,s.z/2+.02,!1)}else if(e.look==="table"){const r=new Te(new qt(s.x/2,s.x/2+.08,s.y,24),yn(e.color));r.position.y=s.y/2,r.castShadow=r.receiveShadow=!0,t.add(r);const a=new Te(new qt(s.x/2+.06,s.x/2+.06,.06,24),yn("#4a3a2e"));a.position.y=s.y+.03,t.add(a);const o=new Te(new qt(.05,.05,.25,8),yn("#f2efe6"));o.position.set(.2,s.y+.18,0),t.add(o)}else if(e.look==="counter"){He(t,s.x,s.y-.1,s.z,e.color,0,(s.y-.1)/2,0),He(t,s.x+.2,.1,s.z+.2,"#3a2a1e",0,s.y-.05,.05);for(let a=0;a<6;a++)He(t,s.x/6-.2,s.y*.55,.03,"#7d5a40",-s.x/2+(a+.5)*s.x/6,s.y*.45,s.z/2+.02,!1);const r=new Te(new qt(.04,.04,s.x,8),yn("#b9b9b9"));r.rotation.z=Math.PI/2,r.position.set(0,.22,s.z/2+.2),t.add(r)}else if(e.look==="shelves"){He(t,s.x,s.y,s.z,e.color,0,s.y/2,0);for(let r=0;r<3;r++){He(t,s.x*.94,.06,.2,"#2c221a",0,.9+r*.7,s.z/2+.08,!1);for(let a=0;a<11;a++){const o=new Te(new qt(.07,.08,.38+a%3*.06,8),yn(["#3d4a35","#5a3a26","#77705e"][(a+r)%3]));o.position.set(-s.x*.43+a*s.x*.086,1.13+r*.7,s.z/2+.1),t.add(o)}}}else if(e.look==="interior"){He(t,s.x,s.y,s.z,e.color,0,s.y/2,0,!1);const r=new Te(new Ht(s.x*.5,s.y*.4),new Mt({color:"#f7d58a",fog:!0}));r.position.set(s.x*.18,s.y*.62,s.z/2+.01),t.add(r)}else He(t,s.x,s.y,s.z,e.color,0,s.y/2,0,e.look!=="wall")}function dv(n,e){const t=e.filter(s=>s.look==="wall");if(!t.length)return;const i=t[0].max.z+.04;for(const s of e.filter(r=>r.look==="interior")){const r=s.min.x+.5,a=s.max.x-.5,o=s.min.y+1.2,c=s.max.y-.6;He(n,a-r+.3,.14,.1,"#efe7cc",(r+a)/2,o-.07,i),He(n,a-r+.3,.14,.1,"#efe7cc",(r+a)/2,c+.07,i);for(const l of[r-.08,a+.08])He(n,.14,c-o,.1,"#efe7cc",l,(o+c)/2,i)}}function fv(n,e){const t=[];let i=0;return n.updateMatrixWorld(!0),n.traverse(s=>{if(!(s instanceof Te)||e.has(s))return;const r=new zs().setFromObject(s);r.max.y-r.min.y<.5||t.push({id:"scenery-"+i++,kind:"scenery",min:r.min.clone(),max:r.max.clone()})}),t}function pv(){const n=new Ot;He(n,41.5,.25,60,"#a7aaa0",-11.25,-.125,-10,!1),He(n,.3,.14,60,"#c9cbc2",9.5,.07,-10),He(n,12,.02,9,"#bdbdb0",0,.01,2.5,!1),He(n,4,9,16,"#a9afa5",-9.5,4.5,-2);for(let i=2;i<8;i+=2.6)for(let s=-8;s<5;s+=3.2)He(n,.1,1.5,1.1,"#59675f",-7.47,i,s);He(n,21,2,.3,"#9da497",-2.5,10,-9);for(const i of[-4.2,-6.6])He(n,.9,5.2,.9,"#8f8a80",7.4,2.6,i);He(n,.9,.7,3.3,"#8f8a80",7.4,5.55,-5.4),He(n,1.6,10,3,"#a3a59b",8.6,5,-10.1),He(n,.1,4.6,.1,"#596358",-6.5,2.3,-4.5),He(n,.1,4.6,.1,"#596358",6.5,2.3,-4.5);const e=new Te(new qt(.015,.015,13,4),yn("#2b2f2b"));e.rotation.z=Math.PI/2,e.position.set(0,4.45,-4.5),n.add(e),["#f359a4","#c7f653","#f4f1e8","#6fb6c6","#f6c453"].forEach((i,s)=>{const r=new Te(new Ht(.9,1.1),new ri({color:i,side:zt,roughness:1}));r.position.set(-4.6+s*2.2,3.85,-4.5+s%2*.02),r.rotation.z=s%2?.05:-.04,r.castShadow=!0,n.add(r),r.userData.sway=s,r.userData.cloth=i}),He(n,.16,5.6,.16,"#596358",-5.4,2.8,-6);const t=new Te(new Yi(.28,14,10),new Mt({color:"#f7ffe0"}));return t.position.set(-5.4,5.7,-6),n.add(t),n}const cc=[],ii={},fd={},pd=[],md=[],Bi=new Map,Wa=[],La=new Lt;La.colorSpace=ht;new Iu().load(ud("gen_bar_backdrop.png"),n=>{La.image=n.image,La.needsUpdate=!0},void 0,()=>{});const hc=[1,2];for(const n of hc){const e=new Ot;pn.add(e),ii[n]=e;const t=new Ot;if(e.add(t),lc(n))t.add(Hx(La));else{const s=pv(),r=Bx({left:!1});s.position.x=$n,r.position.x=Yn,t.add(s,r)}t.traverse(s=>{s.userData.sway!==void 0&&pd.push(s),s.userData.swing!==void 0&&md.push(s),s.userData.lamp!==void 0&&Bi.set("gag-lamp-"+s.userData.lamp,s),s.userData.bell!==void 0&&Bi.set("gag-bell-"+s.userData.bell,s),s.userData.cloth&&Wa.push(s)});const i=pt[n];for(const s of i.covers)uv(e,s);dv(e,i.covers),fd[n]=fv(t,new Set)}function gd(n){const e=document.createElement("canvas");e.width=512,e.height=640;const t=e.getContext("2d");t.lineJoin="round",t.lineCap="round",t.strokeStyle="#202522",t.lineWidth=12;function i(a,o,c,l,h){t.fillStyle=h,t.beginPath(),t.ellipse(a,o,c,l,0,0,Math.PI*2),t.fill(),t.stroke()}function s(a,o){t.fillStyle=o,t.beginPath(),a.forEach(([c,l],h)=>h?t.lineTo(c,l):t.moveTo(c,l)),t.closePath(),t.fill(),t.stroke()}n==="enemy"?(s([[130,420],[120,591],[208,591],[240,450],[277,590],[368,590],[355,410]],"#3e4741"),s([[157,232],[100,252],[42,377],[100,411],[155,330],[148,465],[365,465],[354,327],[405,386],[465,347],[392,250],[333,229]],"#b6d451"),i(259,167,91,105,"#f1cbae"),s([[165,137],[177,69],[254,43],[333,76],[353,126],[285,103],[236,122]],"#444b43"),i(221,180,6,9,"#222722"),i(297,179,6,9,"#222722")):n==="dog"?(t.strokeStyle="#d3ed64",t.lineWidth=15,t.beginPath(),t.ellipse(260,95,88,26,-.15,0,Math.PI*2),t.stroke(),t.strokeStyle="#222722",t.lineWidth=12,i(253,420,118,150,"#e7ddbd"),i(260,262,108,100,"#e7ddbd"),i(263,280,28,19,"#262e26")):n==="bottle"?(s([[210,103],[300,103],[302,235],[354,296],[354,600],[160,600],[160,297],[209,237]],"#94be6a"),s([[207,103],[207,70],[306,70],[306,105]],"#f7c56d"),s([[163,333],[350,333],[350,462],[163,462]],"#eee9d3"),t.fillStyle="#252d24",t.font="bold 37px Arial",t.fillText("КВАС",195,410)):n==="barrel"?(s([[133,178],[379,178],[402,600],[111,600]],"#d63434"),i(256,180,123,35,"#f05050"),s([[128,260],[385,260],[389,293],[125,293]],"#272d28"),s([[117,470],[396,470],[399,504],[114,504]],"#272d28"),t.fillStyle="#f9d846",t.fillRect(145,330,222,70),t.font="900 46px Arial",t.fillStyle="#263126",t.fillText("БАМ!",200,382)):(s([[15,120],[495,120],[495,480],[15,480]],"#c7f653"),t.fillStyle="#222722",t.textAlign="center",t.font="900 75px Arial",t.fillText("ДВОР",256,270),t.fillText("№ 02",256,370));const r=new vi(e);return r.colorSpace=ht,r}const mv=new Iu;function yt(n,e){const t=gd(e);return mv.load(ud(n),i=>{t.image=i.image,t.needsUpdate=!0},void 0,()=>{}),t}const On={enemy:yt("bully.png","enemy"),dog:yt("gen_dog_sit.png","dog"),...Object.fromEntries(hx.map(n=>[n,yt(Ct[n].sprite,n==="barrel"||n==="hat"?"barrel":"bottle")]))},_d={walrus:yt("gen_walrus.png","enemy"),bulldog:yt("gen_bulldog.png","enemy"),weasel:yt("gen_weasel.png","enemy")},$t={windup:yt("gen_cat_windup.png","enemy"),hurt:yt("gen_cat_hurt.png","enemy"),ko:yt("gen_cat_ko.png","enemy"),walk:yt("gen_dog_walk.png","dog"),sad:yt("gen_dog_sad.png","dog")},Pr=Object.fromEntries(["granny","kitten","pigeon","drunk"].map(n=>[n,{idle:yt(`gen_${n}_idle.png`,"dog"),mad:yt(`gen_${n}_mad.png`,"dog"),fury:yt(`gen_${n}_fury.png`,"dog")}]));{const n=yt("gen_mole_hurt.png","dog");Pr.mole={idle:yt("gen_mole_up.png","dog"),lantern:yt("gen_mole_lantern.png","dog"),mad:n,fury:n}}const Ns=Object.fromEntries(["rat","gang","kid"].map(n=>[n,{appear:yt(`gen_${n}_appear.png`,"enemy"),attack:yt(`gen_${n}_attack.png`,"enemy"),ko:yt(`gen_${n}_ko.png`,"enemy")}]));for(const n of[...Object.values(On),...Object.values($t),...Object.values(_d),...Object.values(Pr).flatMap(e=>Object.values(e)),...Object.values(Ns).flatMap(e=>Object.values(e))])n.colorSpace=ht,n.anisotropy=4;const xd=new Map([[On.enemy,"idle"],[On.dog,"sit"],...Object.entries($t).map(([n,e])=>[e,n]),...Object.values(Pr).flatMap(n=>Object.entries(n).map(([e,t])=>[t,e])),...Object.values(Ns).flatMap(n=>Object.entries(n).map(([e,t])=>[t,e]))]);function Qn(n,e){if(n.skin&&n.kind==="enemy"){n.frame=e===$t.windup?"windup":e===$t.hurt?"hurt":e===$t.ko?"ko":"idle";return}n.sprite.material.map!==e&&(n.frame=xd.get(e),n.sprite.material.map=e,n.sprite.customDepthMaterial.map=e)}cc.push(gd("sign"));const vd=new Te(new Ht(1.6,1.25),new Mt({map:cc[0],alphaTest:.5}));vd.position.set(-6.3+$n,2.5,-8.8);ii[2].add(vd);const Oi=pt[1].covers.find(n=>n.id===pt[1].landing?.cover),Ia=1.35,gv=kt.hat.h*kt.hat.inset[3]*Ia,kn=new Te(new Ht(kt.hat.w,kt.hat.h).translate(0,kt.hat.h/2,0),new Mt({map:On.hat,alphaTest:.5,side:zt}));kn.visible=!1;kn.renderOrder=2;kn.scale.set(Ia,-Ia,1);function Ll(){if(!kn.visible)return null;const n=kn.position,e=$e({x:n.x,y:n.y-.04,z:n.z}),t=$e({x:n.x+kt.hat.w*Ia*.36,y:n.y-.04,z:n.z});return{x:e.x,y:e.y,r:Math.abs(t.x-e.x)}}for(const n of cc)rd(n.image);for(const n of hc)Xx(ii[n]);Pl(dd.color);for(const n of Wa)n.material=n.material.clone(),n.material.color.set(n.userData.cloth);{const n=pt[1].gags.find(l=>l.id==="gag-cuckoo"),e=.66/.852,t=e/.8,i=new Te(new Ht(e,t).translate(0,t/2,0),new Mt({map:yt("gen_cuckoo.png","barrel"),alphaTest:.5}));i.material.map.colorSpace=ht,i.position.set((n.min.x+n.max.x)/2,n.min.y-.02,n.max.z-.02),ii[1].add(i),Bi.set("gag-cuckoo",i);const s=document.createElement("canvas");s.width=256,s.height=150;const r=s.getContext("2d");if(r){r.fillStyle="#fff4d6",r.fillRect(0,0,256,150),r.strokeStyle="#3a2a1e",r.lineWidth=2;for(let l=34;l<=114;l+=16)r.beginPath(),r.moveTo(14,l),r.lineTo(242,l),r.stroke();r.font="900 54px Georgia",["#e8475f","#2f6fe0","#e8475f","#2f9c5a","#2f6fe0"].forEach((l,h)=>{r.fillStyle=l,r.fillText("♪",22+h*46,96-h%3*14)}),r.strokeStyle="#151715",r.lineWidth=6,r.strokeRect(3,3,250,144)}const a=new vi(s);a.colorSpace=ht;const o=pt[1].covers.find(l=>l.id==="piano"),c=new Te(new Ht(.62,.36),new Mt({map:a}));c.position.set((o.min.x+o.max.x)/2,o.max.y*.8,o.max.z+.045),c.rotation.x=-.12,ii[1].add(c);for(const l of["gag-bell-0","gag-bell-1"]){const h=Bi.get(l);if(!h)continue;const u=h.getWorldPosition(new I),d=new Te(new Yi(.17,16,8,0,Math.PI*2,0,Math.PI/2),new ri({color:"#e0a83a",metalness:.6,roughness:.3,side:zt}));d.position.set(u.x,u.y-.3,u.z),ii[2].add(d),d.userData.ringer=l;const f=new Te(new Yi(.05,8,6),new ri({color:"#c8742a"}));f.position.y=-.04,d.add(f),Bi.set(l,d)}}{const n=new Te(new zn(1.1,.02,.5),new ri({color:"#7c3ae6",roughness:.7}));n.position.set(.9,Oi.max.y+.01,(Oi.min.z+Oi.max.z)/2+.05),ii[1].add(n,kn);const e=new Te(new Yi(.13,16,8,0,Math.PI*2,0,Math.PI/2),new ri({color:"#e0a83a",metalness:.6,roughness:.3}));e.position.set(-.1,Oi.max.y,n.position.z),ii[1].add(e)}function _v(){const n=document.createElement("canvas");n.width=n.height=128;const e=n.getContext("2d");e.lineWidth=20,e.strokeStyle="#202320",e.beginPath(),e.arc(64,64,44,0,Math.PI*2),e.stroke(),e.lineWidth=11,e.strokeStyle="#f45d96",e.stroke(),e.fillStyle="#202320",e.font="900 54px Arial",e.textAlign="center",e.fillText("!",64,83);const t=new vi(n);return t.colorSpace=ht,t}const Kh=_v(),yd=new Mt({color:"#262626",transparent:!0,opacity:.28,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2});function ks(n,e=256,t=128){const i=document.createElement("canvas");i.width=e,i.height=t;const s=i.getContext("2d");s.lineJoin="round",s.lineCap="round",n(s);const r=new vi(i);return r.colorSpace=ht,r}const xv=ks(n=>{n.lineWidth=22,n.strokeStyle="#3a2f18",n.beginPath(),n.ellipse(128,64,92,30,0,0,Math.PI*2),n.stroke(),n.lineWidth=13,n.strokeStyle="#ffe27a",n.stroke()});function vv(n,e,t,i){n.beginPath();for(let s=0;s<=10;s++){const r=-Math.PI/2+s*Math.PI/5,a=s%2?i*.45:i;n.lineTo(e+Math.cos(r)*a,t+Math.sin(r)*a)}n.closePath(),n.fillStyle="#ffe14d",n.fill(),n.lineWidth=6,n.strokeStyle="#1c1d1a",n.stroke()}const yv=ks(n=>{for(let e=0;e<5;e++){const t=e/5*Math.PI*2;vv(n,128+Math.cos(t)*92,64+Math.sin(t)*34,20)}}),Mv=ks(n=>{n.strokeStyle="#1c1d1a",n.lineWidth=7,n.fillStyle="#9aa6b4",n.beginPath(),n.arc(90,52,30,Math.PI*.5,Math.PI*1.6),n.arc(130,38,34,Math.PI*1.05,Math.PI*1.95),n.arc(172,54,28,Math.PI*1.4,Math.PI*.5),n.closePath(),n.fill(),n.stroke(),n.strokeStyle="#3d7fd6",n.lineWidth=6;for(const e of[96,124,152,176])n.beginPath(),n.moveTo(e,92),n.lineTo(e-6,116),n.stroke()}),Sv=ks(n=>{n.beginPath(),n.moveTo(64,112),n.bezierCurveTo(8,72,14,18,64,40),n.bezierCurveTo(114,18,120,72,64,112),n.closePath(),n.fillStyle="#ff6fa8",n.fill(),n.lineWidth=9,n.strokeStyle="#1c1d1a",n.stroke(),n.fillStyle="#ffffff",n.beginPath(),n.ellipse(44,52,9,6,-.6,0,Math.PI*2),n.fill()},128,128),Ev=ks(n=>{n.font="900 54px Georgia",n.lineWidth=7,n.strokeStyle="#1c1d1a",n.fillStyle="#9fd3ff",[[30,110,1],[100,72,.8],[170,40,.6]].forEach(([e,t,i])=>{n.save(),n.translate(e,t),n.scale(i,i),n.strokeText("Z",0,0),n.fillText("Z",0,0),n.restore()})}),bv=ks(n=>{const e=n.createLinearGradient(0,0,0,512);e.addColorStop(0,"rgba(255,240,170,0)"),e.addColorStop(.25,"rgba(255,240,170,.55)"),e.addColorStop(1,"rgba(255,240,170,.1)"),n.fillStyle=e,n.beginPath(),n.moveTo(90,0),n.lineTo(166,0),n.lineTo(240,512),n.lineTo(16,512),n.closePath(),n.fill()},256,512);function _s(n,e,t,i=2){const s=new Tl(new Ra({map:n,transparent:!0,depthWrite:!1}));return s.scale.set(e,t,1),s.renderOrder=i,s}const $i=new Ot;pn.add($i);const Qt=new Map,Li=[],hr=new Map;function Tv(n){const e=Va(n.kind,n.who),t=new Ot,i=new Ot;t.add(i);const s=new Ht(e.w,e.h);s.translate(0,e.h/2,0);const r=n.kind==="enemy"&&n.skin&&n.skin!=="cat"?n.skin:void 0,a=r?_d[r]:n.kind==="friend"?Pr[n.who].idle:n.kind==="thug"?Ns[n.who].appear:On[n.kind],o=new Mt({map:a,alphaTest:.5,side:zt}),c=new Te(s,o);if(c.castShadow=!0,c.customDepthMaterial=new Lu({depthPacking:_u,map:a,alphaTest:.5}),i.add(c),n.y<=.01&&n.who!=="mole"){const h=new Te(new qi(e.w*.36,24),yd);h.rotation.x=-Math.PI/2,h.position.y=.035,h.scale.y=.45,h.renderOrder=1,t.add(h)}const l={kind:n.kind,group:t,body:i,sprite:c,flash:0,sad:0,skin:r,who:n.who,facing:n.kind==="enemy"&&n.x<0?-1:n.kind==="thug"?-(n.side??1):1};return n.kind==="friend"&&(l.heart=_s(Sv,.26,.26),i.add(l.heart),n.who==="drunk"&&(l.zzz=_s(Ev,.7,.35),l.zzz.position.set(.45,e.h*.95,0),i.add(l.zzz))),n.kind==="thug"&&(l.warning=new Tl(new Ra({map:Kh,depthWrite:!1})),l.warning.position.set(0,e.h*.82,0),i.add(l.warning),n.from==="manhole"&&(l.hole=new Te(new qi(.62,24),new Mt({color:"#141414"})),l.hole.rotation.x=-Math.PI/2,l.hole.scale.y=.5,l.hole.renderOrder=1,t.add(l.hole))),l.frame=r?"idle":xd.get(a),n.kind==="enemy"&&(l.warning=new Tl(new Ra({map:Kh,depthWrite:!1})),l.warning.position.set(0,e.h+.3,0),i.add(l.warning),l.stars=_s(yv,1.1,.55),l.stars.position.set(0,e.h*.97,.05),l.stars.visible=!1,i.add(l.stars)),n.kind==="dog"&&(l.halo=_s(xv,.62,.31),i.add(l.halo),l.cloud=_s(Mv,.8,.4),l.cloud.visible=!1,i.add(l.cloud),l.beam=_s(bv,1.6,6,1),l.beam.visible=!1,t.add(l.beam)),$i.add(t),Qt.set(n.id,l),l}function Ms(n){$i.remove(n.group),n.group.traverse(e=>{e instanceof Te&&e.geometry&&e.geometry.dispose()}),n.sprite.material.dispose()}const wv=[{id:-1,kind:"enemy",skin:"walrus",x:-2.55,y:0,z:2.2,age:1,deadline:60},{id:-2,kind:"dog",x:.2,y:0,z:-.7,age:1,deadline:1/0},{id:-3,kind:"enemy",skin:"weasel",x:1.9,y:.3,z:-3.15,age:1,deadline:60}],Av=()=>B.mode==="menu"||B.mode==="select"?wv:B.actors;function uc(n){const e=Av(),t=!Us();for(const[i,s]of Qt)if(!e.some(r=>r.id===i)){Qt.delete(i);const r=hr.get(i);hr.delete(i),r&&t?Li.push({view:s,age:0,spin:s.facing,how:r}):Ms(s)}for(const i of e){const s=Qt.get(i.id),r=i.kind==="enemy"&&i.skin&&i.skin!=="cat"?i.skin:void 0;s&&(s.kind!==i.kind||s.skin!==r)&&(Qt.delete(i.id),Ms(s));const a=Qt.get(i.id)??Tv(i),o=Va(i.kind,i.who),c=Jn(B.level,i,t);a.group.position.set(c.x,c.y,c.z);const l=t?(i.id<0?n:i.age)+i.id*.7:0;let h=1,u=1,d=0,f=0;const m=new Ge(1,1,1);if(i.kind==="enemy"){const _=i.deadline-i.age,g=t?An.clamp(1-_/Is,0,1):0,p=Math.abs(Math.sin(l*4.2));if(h=1+(1-p)*.05,u=1-(1-p)*.06+p*.03,f=p*.06,d=Math.sin(l*2.1)*.035,g>0&&!a.wound&&i.id>0&&(a.wound=!0,Ne("windup")),Qn(a,g>0?$t.windup:On.enemy),g>0){const E=Math.sin(n*48)*.02*g;d=-a.facing*.08*g+E,h*=1+.08*g,u*=1+.1*g,f=0;const S=.5+.5*Math.sin(n*18);m.setRGB(1,1-.45*g*S,1-.5*g*S)}if(a.warning){const E=i.id>0&&_<Is*1.6;a.warning.visible=E,a.warning.scale.setScalar(.38+g*.3+(t?Math.sin(n*14)*.03:0))}if(a.stars&&(a.stars.visible=!1),a.body.position.x=0,i.antic&&t){if(!a.antic&&i.age>.45&&i.id>0){a.antic=!0;const E=$e(Bs(a));st({dance:"ПЛЯШЕТ! БЕЙ!",sandwich:"ОБЕДАЕТ! БЕЙ!",selfie:"СЕЛФИ! БЕЙ!"}[i.antic],E.x,E.y-20,"combo")}if(i.antic==="dance"){const E=Math.abs(Math.sin(n*9));f=E*.16,d=Math.sin(n*9)*.22,a.facing=Math.sin(n*4.5)>0?1:-1,h*=1+(1-E)*.08,u*=1-(1-E)*.08}else if(i.antic==="sandwich"){const E=Math.abs(Math.sin(n*11));u*=1-E*.05,h*=1+E*.04,d=.04}else d=Math.sin(n*1.5)*.05-.06*a.facing,f=.03}else a.antic=!1;i.blind&&t&&(Qn(a,$t.hurt),a.body.position.x=Math.sin(n*5.5)*.2,d=Math.sin(n*7)*.16,f=0),a.knock&&(a.knock=Math.max(0,a.knock-1/60*1.5),f+=Math.sin(a.knock*Math.PI)*.9,d+=a.knock*.5*a.facing);const T=i.wet??0;if(a.wet=T,T>0){if(!a.yuck){a.yuck=!0,Ne("yuck");const S=$e({x:a.group.position.x,y:a.group.position.y+1.6,z:a.group.position.z});st(["ФУ-У!","БЕ-Е!","ФИ!"][i.id%3],S.x,S.y,"bad")}d=t?Math.sin(n*70+i.id)*.05*(.4+T):0,h*=1+.08*T,u*=1-.14*T,f=0,m.setRGB(1-.45*T,1,1-.55*T)}}else if(i.kind==="dog"){const _=nc(t?i.id<0?n:i.age:0,t);if(a.facing=-_.facing,_.walking){const E=Math.abs(Math.sin(l*11));f=E*.09,u=1+E*.04,d=Math.sin(l*11)*.06}else{const E=Math.sin(l*2.6);u=1+E*.025,h=1-E*.012,d=Math.sin(l*.9)*.03}a.sad=Math.max(0,a.sad-1/60);const g=Math.min(1,a.sad);Qn(a,g>0?$t.sad:_.walking?$t.walk:On.dog),g>0&&(u*=1-.12*g,h*=1+.05*g,d=Math.sin(n*20)*.03*g,f=0,m.setRGB(1-.25*g,1-.15*g,1));const p=.1*a.facing;a.halo&&(a.halo.position.set(p,o.h*1+(t?Math.sin(n*3+i.id)*.04:0)-g*.12,0),a.halo.material.rotation=g*.45*Math.sin(n*6),a.halo.material.color.setRGB(1,1,1-g*.5)),a.cloud&&(a.cloud.visible=g>0,a.cloud.position.set(p,o.h*1.25+Math.sin(n*4)*.03,0));const T=$u(t?i.id<0?n:i.age:0,t);if(T>0&&!a.ascending&&i.id>0){a.ascending=!0,Ne("harp");const E=$e({x:c.x,y:c.y+2.2,z:c.z});st("♪ АЛЛИЛУЙЯ! ♪",E.x,E.y,"combo")}T<=0&&(a.ascending=!1),a.beam&&(a.beam.visible=T>0,a.beam.position.set(0,3-c.y+T*.2,-.05),a.beam.material.opacity=Math.min(1,T/.5)),T>0&&(d=Math.sin(n*2)*.05,f+=Math.sin(n*3)*.03)}else if(i.kind==="friend"){const _=pt[B.level].friends[i.plan??0],g=_?ec(_,i.age,t):null,p=Pr[i.who],T=i.mad??0;Qn(a,T>0?T>Vu*.5?p.mad:p.fury:g?.lantern&&p.lantern?p.lantern:p.idle),g&&(a.facing=g.facing),T>0?(d=Math.sin(n*40)*.04,h=1.06,u=.96,m.setRGB(1,.82,.8)):g?.walking?(f=Math.abs(Math.sin(l*7))*.05,d=Math.sin(l*7)*.05):i.who==="drunk"?d=Math.sin(l*.9)*.07:u=1+Math.sin(l*2.6)*.02,a.heart&&(a.heart.visible=(g?.rise??1)>.6&&T<=0,a.heart.position.set(0,o.h*o.inset[3]+.2+(t?Math.sin(n*3+i.id)*.03:0),.02)),a.zzz&&(a.zzz.visible=T<=0,a.zzz.position.y=o.h*.95+(t?n*.25%.3:0))}else if(i.kind==="thug"){const _=Ns[i.who],g=i.age>=jn.attack,p=An.clamp((i.age-1.2)/(jn.attack-1.2),0,1);Qn(a,g?_.attack:_.appear),f=Math.abs(Math.sin(l*9))*.04,d=Math.sin(l*9)*.04,p>0&&t&&(d+=Math.sin(n*50)*.03*p,m.setRGB(1,1-.4*p*(.5+.5*Math.sin(n*18)),1-.45*p)),g&&(h=1.15,u=1.1),a.warning&&(a.warning.visible=i.age>.9,a.warning.scale.setScalar(.34+p*.26)),a.hole&&(a.hole.position.y=-c.y+.03)}else d=t?Math.sin(l*1.6)*.04:0,i.kind==="hat"&&t&&(f=Math.abs(Math.sin(l*2.4))*.05,d=Math.sin(l*2.4)*.08);a.flash>0&&(h*=1+a.flash*.2,u*=1-a.flash*.18,m.setRGB(1,1-a.flash*.55,1-a.flash*.45)),a.flash=Math.max(0,a.flash-.08),a.body.position.y=f,a.body.rotation.z=d,a.sprite.scale.set(h*a.facing,u,1),a.sprite.material.color.copy(m)}}function Rv(n,e){for(let t=Li.length-1;t>=0;t--){const i=Li[t];i.age+=n;const s=i.view,r=s.sprite.material;if(i.how==="pancake"){if(Qn(s,$t.ko),s.body.position.x=0,i.age<.9)s.sprite.scale.set(1.6*s.facing,.2,1),s.body.rotation.set(0,0,0),s.body.position.y=0;else{const a=Math.min(1,(i.age-.9)/.8);s.sprite.scale.set(1.45*s.facing,.1+.5*a,1),s.body.rotation.x=-.9*(1-a),s.body.rotation.z=Math.sin(i.age*9)*.5*a,s.body.position.y=a*a*2.6,s.group.position.x+=n*Math.sin(i.age*4)*1.2}s.stars&&(s.stars.visible=!1),i.age>1.4&&(r.transparent=!0,r.opacity=Math.max(0,1-(i.age-1.4)*2.5)),i.age>1.8&&(Ms(s),Li.splice(t,1));continue}if(i.how==="stars"||i.how==="birds"){if(Qn(s,i.age<.22?$t.hurt:$t.ko),s.stars&&(s.stars.visible=!0,s.stars.material.rotation=e*8),i.how==="stars"&&i.age>.18){const a=i.age-.18;s.body.position.y=a*a*22,s.body.rotation.z=a*14*i.spin;const o=Math.max(.2,1-a*1.3);s.sprite.scale.set(o*s.facing,o,1)}if(i.age>(i.how==="stars"?.62:.3)&&!i.done){i.done=!0;const a=$e({x:s.group.position.x,y:s.group.position.y+1,z:s.group.position.z});i.how==="stars"?Xv(a.x):qv(a.x,a.y),Ms(s),Li.splice(t,1)}continue}if(i.how==="ko"){const a=s.kind==="thug"?Ns[s.who]:null;if(Qn(s,a?a.ko:i.age<.22?$t.hurt:$t.ko),i.age<.09)s.sprite.scale.set(1.4*s.facing,.6,1);else{const o=i.age-.09;s.sprite.scale.set(.9*s.facing,1.12,1),s.body.rotation.z=-i.spin*o*7,s.body.position.y=o*3.2-o*o*7,s.group.position.z-=n*3.5,s.group.position.x+=n*i.spin*-1.5}s.stars&&(s.stars.visible=!0,s.stars.material.rotation=e*8),i.age>.45&&(r.transparent=!0,r.opacity=Math.max(0,1-(i.age-.45)*4)),i.age>.75&&(Ms(s),Li.splice(t,1))}else{Qn(s,s.kind==="thug"?Ns[s.who].attack:$t.windup);const a=Math.min(1,i.age/.16);s.group.position.z+=n*(i.age<.16?5:-2),s.body.rotation.z=s.facing*.35*a,s.sprite.scale.set((1+.25*a)*s.facing,1+.2*a,1),i.age>.2&&(s.body.position.y-=n*6,r.transparent=!0,r.opacity=Math.max(0,1-(i.age-.2)*3.5)),i.age>.5&&(Ms(s),Li.splice(t,1))}}}const ws=document.querySelector("#arm"),Cv=ws.getContext("2d");function vn(n,e,t,i=12){const s=document.createElement("canvas");s.width=s.height=256;const r=s.getContext("2d");r.translate(128,128),r.lineJoin="round",r.beginPath();for(let a=0;a<=i*2;a++){const o=a%2?62:118-a%4*9,c=a/(i*2)*Math.PI*2;r.lineTo(Math.cos(c)*o,Math.sin(c)*o)}r.closePath(),r.fillStyle=e,r.fill(),r.lineWidth=9,r.strokeStyle="#151715",r.stroke(),r.beginPath();for(let a=0;a<=i*2;a++){const o=a%2?36:70,c=a/(i*2)*Math.PI*2+.2;r.lineTo(Math.cos(c)*o,Math.sin(c)*o)}return r.closePath(),r.fillStyle=t,r.fill(),r.rotate(-.12),r.font="900 46px Arial",r.textAlign="center",r.textBaseline="middle",r.lineWidth=8,r.strokeStyle="#151715",r.strokeText(n,0,2),r.fillStyle="#fffbe8",r.fillText(n,0,2),s}const da={hit:vn("БАМ!","#ffd84a","#f3388f"),throw:vn("ХРЯСЬ!","#ffd84a","#8fdc2a"),protected:vn("АЙ!","#ff9fb0","#e2324e",9),cover:vn("ТУК!","#f4c27a","#c9772e",8),smash:vn("ДЗЫНЬ!","#9fe7ff","#2f9be0",14),miss:vn("ВЖУХ","#eef0ea","#b9c0b5",7),ult:vn("ДИНЬ!","#c9a6ff","#7c3ae6",16),crash:vn("БДЫЩЬ!","#ffd84a","#ff6b3d",16),strike:vn("СТРАЙК!","#9fe7ff","#f3388f",14),squeak:vn("ПИ-И-ИСК!","#fff36b","#ff9f2a",10),splat:vn("ШМЯК!","#fff6e0","#ff9fb0",11)},Ua=new wp,si=new De(0,0);let Na="",Zh=B.hp;const Pv=.42,or=.36,Dv=.62,br={duration:.34,arrive:.3,release:.46,reach:.38};let xt=null,Pt=0,Tr=0,Lv=1;const As=[];let Rn=0,xs=0;function dc(){Un.setSize(innerWidth,innerHeight);const n=Ku(innerWidth,innerHeight,B.mode==="menu"||B.mode==="select"?0:Rn);vt.aspect=innerWidth/innerHeight,vt.fov=n.fov,vt.updateProjectionMatrix(),vt.position.set(n.position.x,n.position.y,n.position.z),vt.lookAt(n.look.x,n.look.y,n.look.z),(B.mode==="menu"||B.mode==="select")&&(vt.position.x-=innerWidth<650?0:1.2,vt.lookAt(n.look.x-(innerWidth<650?0:1.8),n.look.y,n.look.z)),vt.updateMatrixWorld();const e=Math.min(devicePixelRatio,2);ws.width=Math.round(innerWidth*e),ws.height=Math.round(innerHeight*e)}addEventListener("resize",()=>{dc(),xc()});function Md(){const n=document.querySelector(".crosshair");n&&(n.style.left=(si.x+1)*50+"%",n.style.top=(1-si.y)*50+"%")}const ut=()=>!Us();function Xa(){return bx(B.level,B.actors,ut(),fd[B.level])}function Sd(n){Ua.setFromCamera(n,vt);const{origin:e,direction:t}=Ua.ray;return{origin:{x:e.x,y:e.y,z:e.z},direction:{x:t.x,y:t.y,z:t.z}}}const fc=n=>{const e=Sd(n);return ic(e.origin,e.direction,Xa())};function Fa(n){if(B.mode!=="play"||(oc(),xt&&!xt.resolved))return;const e=n==="grab"&&B.held!==null,t=B.held,i=B.stamina;if(!B.spend(n)){wr(),Ne("ui");return}const s=Sd(si);Ne("whoosh");const r={x:(si.x+1)/2,y:(1-si.y)/2};xt={action:n,throwing:e,spot:r,ray:s,shot:ic(s.origin,s.direction,Xa()),phase:0,resolved:!1,held:t,staminaBefore:i,staminaAfter:B.stamina},ut()||(e?bd(xt):Td(xt)),wr()}function st(n,e,t,i="pop"){const s=document.createElement("div");s.className="callout "+i,s.textContent=n,s.style.left=Math.round(An.clamp(e,90,innerWidth-90))+"px",s.style.top=Math.round(An.clamp(t,120,innerHeight-160))+"px",Mn.append(s),setTimeout(()=>s.remove(),900)}const Iv=["","","ДВОЙНОЙ!","ТРОЙНОЙ!","РАЗМАШИСТО!","НЕУДЕРЖИМ!"];function pc(n){for(const e of B.events){const t=Qt.get(e.id),i=n??(t?$e({x:t.group.position.x,y:t.group.position.y+1.2,z:t.group.position.z}):{x:innerWidth/2,y:innerHeight/2});if(e.type==="hurt"&&e.amount){const s=B.actors.find(r=>r.id===e.id)??(t?{x:t.group.position.x,y:t.group.position.y,z:t.group.position.z}:null);if(s){const r=t?Bs(t):{x:s.x,y:s.y+2,z:s.z??0};mr.push({...r,amount:e.amount,age:0,big:e.amount>10})}t&&(t.flash=1)}if((e.type==="ko"||e.type==="smash")&&(hr.set(e.id,e.type==="ko"&&e.how&&e.how!=="spin"?e.how:"ko"),e.type==="ko"&&Ne("ko")),e.type==="ko"&&e.who&&st(["ШМЯК!","БРЫСЬ!","ПШЁЛ!"][e.id%3],i.x,i.y-20,"pop"),e.type==="ko"&&e.combo>=2&&st(`КОМБО ×${e.combo} ${Iv[Math.min(e.combo,5)]}`,i.x,i.y-70,"combo"),e.type==="attack"&&(hr.set(e.id,"attack"),Ne("attack"),st("БАЦ! −♥",i.x,i.y,"bad"),ut()&&(Pt=.22)),e.type==="dog"&&(t&&(t.sad=2.4),Ne("dog"),st(B.ult.phase==="pour"?"ПЁС ОСКОРБЛЁН!":"ПСА НЕ ТРОГАЙ!",i.x,i.y-60,"bad")),e.type==="offend"&&(t&&(t.flash=1),Ne("huff"),st(e.text??"ХАМ!",i.x,i.y-60,"bad"),ut()&&(Pt=Math.max(Pt,.12))),e.type==="nuisance"&&(hr.set(e.id,"attack"),e.who==="rat"?(Ne("steal"),st("КРЫСА СПЁРЛА СИЛЫ! −35",i.x,i.y,"bad")):e.who==="gang"?(Ne("splat"),Uv(),st("ПЛЮХ!",innerWidth/2,innerHeight*.4,"bad")):(Ne("zing"),st("ЩЁЛК! −♥",i.x,i.y,"bad"),ut()&&(Pt=.2))),e.type==="squeak"&&(Ne("squeak"),e.point&&Zn("squeak",e.point,.8),e.id&&st(`ПИ-И-ИСК! КОМБО +${Jt.chicken.combo}`,i.x,i.y-50,"combo")),e.type==="blind"&&(Ne("splat"),e.point&&(Zn("splat",e.point,.9),jh(e.point,["#fff6e0","#ffffff","#ff4f6d"])),st("ПИРОГ В ЛИЦО!",i.x,i.y-40,"combo")),e.type==="stick"&&(Ne("pop"),st("ЧПОК!",i.x,i.y-40,"pop")),e.type==="strike"&&(Ne("strike"),e.point&&Zn("strike",e.point,1.3),st("СТРАЙК!",innerWidth/2,innerHeight*.35,"combo"),ut()&&(Pt=.2)),e.type==="seeds"&&e.point&&(Ne("pop"),Gv(e.point,e.ids??[])),e.type==="geyser"&&e.point){Ne("geyser");const s=$e(e.point);st("ФОНТАН!",s.x,s.y-80,"pop")}if(e.type==="knock"&&(t&&(t.flash=1,t.knock=1),Ne("splat"),st("ПЛЮХ!",i.x,i.y-30,"pop")),e.type==="hazard"&&e.point){Ne("whistle");const s=$e(e.point);st("БЕРЕГИСЬ!",s.x,s.y-30,"bad")}if(e.type==="crash"&&e.point){Ne("crash"),Zn("crash",{...e.point,y:.6},1.6);const s=Vi.get(e.id);s&&(s.wreck=2.4),ut()&&(Pt=.35)}e.type==="milestone"&&e.text&&Jv(e.text),e.type==="ult"&&oy(),e.type==="land"&&e.point&&(Ne("thud"),e.prop==="anvil"&&ut()&&(Pt=Math.max(Pt,.22),Zn("cover",e.point,.9))),e.type==="gag"&&kv(e),e.type==="shatter"&&e.point&&e.prop&&(jh(e.point,Ct[e.prop].shards??["#ffffff"]),Zn("smash",e.point,.8)),e.type==="ultEnd"&&(Ne("slide"),st(e.amount?`НИ КАПЛИ МИМО! +${e.amount}`:"ПРОЛИЛ… ПЛАТИ ТРИСТА",innerWidth/2,innerHeight*.6,e.amount?"combo":"bad"))}B.events.length=0}function Ed(n){const e=innerWidth,t=innerHeight,i=rc(1,e,t,di).glove;return{x:i.x+(n.spot.x*e-i.x)*br.reach,y:i.y+(n.spot.y*t-i.y)*br.reach-t*.05}}function bd(n){n.launched=!0,n.resolved=!0;const e=Ed(n);Ua.setFromCamera(new De(e.x/innerWidth*2-1,1-e.y/innerHeight*2),vt);const t=Ua.ray.at(1.7,new I),i=B.launch({x:t.x,y:t.y,z:t.z},n.shot.point);n.outcome="throw",As.push({action:"grab",outcome:"throw",kind:"flight",id:i?.id??null,staminaBefore:n.staminaBefore,staminaAfter:n.staminaAfter}),As.length>20&&As.shift(),Ne("toss"),Yt()}const Hi=[];function Uv(){for(let n=0;n<3;n++)Hi.push({x:.25+Math.random()*.5,y:.2+Math.random()*.4,r:.09+Math.random()*.06,age:0,seed:Math.random()*10});for(;Hi.length>6;)Hi.shift()}function Nv(n,e,t,i,s){const r=Math.min(e,t);for(let a=Hi.length-1;a>=0;a--){const o=Hi[a];if(o.age+=i,o.age>3.2){Hi.splice(a,1);continue}const c=o.x*e,l=o.y*t+o.age*r*.03,h=o.r*r;n.save(),n.globalAlpha=Math.min(1,(3.2-o.age)*1.5)*.93,n.translate(c,l),n.beginPath();for(let u=0;u<=16;u++){const d=u/16*Math.PI*2,f=h*(u%2?.62+.2*Math.sin(o.seed+u):1+.15*Math.sin(o.seed*2+u));n.lineTo(Math.cos(d)*f,Math.sin(d)*f)}n.closePath(),n.fillStyle="#f4f2e6",n.fill(),n.lineWidth=Math.max(2,s*.4),n.strokeStyle="#151715",n.stroke(),n.beginPath(),n.ellipse(h*.1,h*.05,h*.32,h*.26,0,0,Math.PI*2),n.fillStyle="#9a9a8a",n.fill(),n.beginPath(),n.ellipse(-h*.3,-h*.3,h*.14,h*.08,-.6,0,Math.PI*2),n.fillStyle="#ffffff",n.fill(),n.restore()}}const ur=[],dr=new Hu(()=>({x:0,y:0,vx:0,vy:0,rot:0,vr:0,size:0,color:"",life:0}),180);function Zn(n,e,t=1){const i=$e(e),s=$e({...e,x:e.x+1}),r=Math.abs(s.x-i.x);ur.push({key:n,x:i.x,y:i.y,size:An.clamp(r*1.6,70,260)*t,age:0})}function jh(n,e){const t=$e(n),i=$e({...n,x:n.x+1}),s=An.clamp(Math.abs(i.x-t.x),30,200);for(let r=0;r<14;r++){const a=-Math.PI/2+(Math.random()-.5)*2.6,o=s*(2+Math.random()*3),c=dr.get();c.x=t.x,c.y=t.y,c.vx=Math.cos(a)*o,c.vy=Math.sin(a)*o,c.rot=Math.random()*6,c.vr=(Math.random()-.5)*18,c.size=s*(.07+Math.random()*.09),c.color=e[r%e.length],c.life=.7+Math.random()*.4}}const fa=new Map;function Fv(){for(const[n,e]of fa)B.flights.some(t=>t.id===n)||($i.remove(e.mesh,e.shadow),e.mesh.geometry.dispose(),e.mesh.material.dispose(),fa.delete(n));for(const n of B.flights){let e=fa.get(n.id);const t=kt[n.kind];if(!e){const s=new Te(new Ht(t.w,t.h),new Mt({map:On[n.kind],alphaTest:.5,side:zt}));s.castShadow=!0;const r=new Te(new qi(t.w*.3,18),yd);r.rotation.x=-Math.PI/2,r.renderOrder=1,$i.add(s,r),e={mesh:s,shadow:r},fa.set(n.id,e)}e.mesh.position.set(n.pos.x,n.pos.y+t.h*.35,n.pos.z),e.mesh.rotation.z=ut()?n.angle:0,n.dropped&&!e.whistled&&(e.whistled=!0,Ne("whistle")),e.shadow.position.set(n.pos.x,.035,n.pos.z);const i=Math.max(.35,1-n.pos.y/6);e.shadow.scale.set(i,i*.45,1)}}function zv(n){if(!(B.mode!=="play"||Tr>0)){for(const{flight:e,impact:t}of B.fly(n,Xa())){if(t.type==="rest")continue;const i=t.id;if(t.kind==="enemy")Ne("throw"),Zn("throw",t.point),ut()&&(Pt=.16,Tr=.06);else if(t.kind==="dog")Zn("protected",t.point);else{if(Ne("cover"),Zn("cover",t.point,.7),typeof i=="string"){const s=Cr.get(i);s&&(s.userData.wobble=1)}ut()&&(Pt=.06)}if(typeof i=="number"){const s=Qt.get(i);s&&(s.flash=1)}Ct[e.kind].breakable&&Ne("shatter")}pc()}}const Jh=["КУ-КУ, МАЗИЛА!","КУ-КУ! РУКИ-КРЮКИ!","КУ-КУ! ИДИ ДОМОЙ!","КУ-КУ! НУ ТЫ И ЛОПУХ!"];let Ov=0,lr=0;const fr=[];function kv(n){const e=n.gagId?Bi.get(n.gagId):void 0,t=n.point??(e?e.getWorldPosition(new I):null),i=t?$e(t):{x:innerWidth/2,y:innerHeight/3};if(Ft.dataset.gag=`${n.gag}:${B.riffs}`,n.gag==="piano"){av(Wx(n.amount??0)),st("♪ ТРЫНЬ-ТЫН-ТЫН ♪",i.x,i.y-40,"combo");const s=Cr.get("piano");s&&(s.userData.wobble=1),Il=3.5}else if(n.gag==="cuckoo")Ne("cuckoo"),st(Jh[Ov++%Jh.length],i.x,i.y-30,"bad"),e&&(e.userData.pop=1);else if(n.gag==="lamp")Ne("buzz"),e&&(e.userData.swingV=(e.userData.swingV??0)+(Math.random()<.5?-1:1)*2.2),lr=1.2;else if(n.gag==="bell")Ne("bell"),st("ДЗИИИНЬ!",i.x,i.y,"pop"),e&&(e.userData.ring=1);else if(n.gag==="laundry"){Ne("flop");const s=Wa.find(r=>r.visible);s&&(s.visible=!1,n.id&&fr.push({from:s.getWorldPosition(new I),id:n.id,color:s.userData.cloth,age:0})),n.id&&st("ТРУСЫ НА ГОЛОВУ!",i.x,i.y+30,"combo")}}let Il=0;function Bv(n,e){for(const[t,i]of Bi)if(t.startsWith("gag-lamp")){const s=(i.userData.swingV??0)-i.rotation.z*9*n;i.userData.swingV=s*(1-n*.45),i.rotation.z+=i.userData.swingV*n,i.traverse(r=>{r instanceof Jl&&(r.intensity=r.userData.base*(lr>0&&Math.sin(e*61)>-.2+(1-lr)?.15:1))})}else if(i.userData.ring)i.userData.ring=Math.max(0,i.userData.ring-n*.9),i.rotation.z=Math.sin(e*26)*.5*i.userData.ring;else if(i.userData.pop){i.userData.pop=Math.max(0,i.userData.pop-n*1.6);const s=Math.sin(i.userData.pop*Math.PI*3)*i.userData.pop;i.scale.set(1+s*.18,1+s*.18,1)}if(lr=Math.max(0,lr-n),Il>0&&(Il-=n,Math.random()<n*5)){const t=pt[1].covers.find(s=>s.id==="piano"),i=$e({x:t.min.x+Math.random()*(t.max.x-t.min.x),y:t.max.y+.3,z:t.max.z});st(["♪","♫","♬"][Math.floor(Math.random()*3)],i.x,i.y,"pop")}}function Hv(n,e,t){for(let i=fr.length-1;i>=0;i--){const s=fr[i];s.age+=e;const r=Qt.get(s.id),a=r?Bs(r):null;if(s.age>2.6||!a&&s.age>.5){fr.splice(i,1);continue}const o=Math.min(1,s.age/.5),c=a??s.from,l={x:s.from.x+(c.x-s.from.x)*o,y:s.from.y+(c.y-.35-s.from.y)*o*o,z:s.from.z+(c.z-s.from.z)*o},h=$e(l),u=$e({...l,x:l.x+1}),d=An.clamp(Math.abs(u.x-h.x),20,160)*.5;n.save(),n.translate(h.x,h.y),n.rotate(o<1?Math.sin(s.age*20)*.4:Math.sin(s.age*6)*.08),n.globalAlpha=Math.min(1,(2.6-s.age)*2),n.beginPath(),n.moveTo(-d*.6,-d*.3),n.lineTo(d*.6,-d*.3),n.lineTo(d*.55,d*.25),n.lineTo(d*.15,d*.3),n.lineTo(0,d*.05),n.lineTo(-d*.15,d*.3),n.lineTo(-d*.55,d*.25),n.closePath(),n.fillStyle=s.color,n.fill(),n.lineWidth=Math.max(2,t*.4),n.strokeStyle="#151715",n.lineJoin="round",n.stroke(),n.fillStyle="#ffffff";for(const[f,m]of[[-.3,-.05],[.25,.02],[0,-.18]])n.beginPath(),n.arc(f*d,m*d,d*.06,0,Math.PI*2),n.fill();n.restore()}}const gi=new Hu(()=>({kind:"drop",x:0,y:0,vx:0,vy:0,life:0,max:1,size:1,tx:0,ty:0,phase:0}),260),mc=n=>{const e=$e(n),t=$e({...n,x:n.x+1});return{p:e,u:An.clamp(Math.abs(t.x-e.x),20,260)}};function Gv(n,e){const{p:t,u:i}=mc(n);for(let s=0;s<10;s++){const r=gi.get(),a=Math.random()*Math.PI*2;r.kind="seed",r.x=t.x,r.y=t.y,r.tx=t.x+Math.cos(a)*i*1.4,r.ty=t.y+Math.sin(a)*i,r.life=r.max=.45,r.size=i*.05,r.phase=a}for(const s of e){const r=Qt.get(s);if(!r)continue;const a=$e(Bs(r));for(let o=0;o<4;o++){const c=gi.get();c.kind="seed",c.x=t.x,c.y=t.y,c.tx=a.x+(Math.random()-.5)*30,c.ty=a.y+30+Math.random()*30,c.life=c.max=.35+o*.05,c.size=i*.05,c.phase=o}setTimeout(()=>st("ТЬФУ!",a.x,a.y,"pop"),300)}}const Gi=[],Vv=[[0,-1.2],[-.5,-.4],[.5,-.4],[0,0],[-.6,1],[.6,1],[-1,-.9],[1,-.9]],Wv=[[0,1],[0,2],[1,3],[2,3],[3,4],[3,5],[1,6],[2,7]];function Xv(n){const e=innerWidth,t=innerHeight,i=An.clamp(n,e*.15,e*.85),s=Math.min(e,t)*.07;Gi.push({x:i,pts:Vv.map(([r,a])=>({x:i+r*s+(Math.random()-.5)*s*.2,y:t*.26+a*s})),age:0}),Gi.length>3&&Gi.shift(),Ne("harp")}function qv(n,e){Ne("pop");for(let t=0;t<5;t++){const i=gi.get();i.kind="bird",i.x=n+(Math.random()-.5)*40,i.y=e+(Math.random()-.5)*30,i.vx=(t-2)*50+(Math.random()-.5)*40,i.vy=-140-Math.random()*80,i.life=i.max=2,i.size=14+Math.random()*8,i.phase=Math.random()*6}st("ФЬЮТЬ!",n,e-40,"pop")}function Yv(n,e,t,i){n.lineCap="round",n.lineJoin="round";for(let s=gi.live.length-1;s>=0;s--){const r=gi.live[s];if(r.life-=e,r.life<=0){gi.release(s);continue}const a=1-r.life/r.max;if(r.kind==="seed"){const o=r.x+(r.tx-r.x)*a,c=r.y+(r.ty-r.y)*a-Math.sin(a*Math.PI)*30;n.save(),n.translate(o,c),n.rotate(r.phase+a*9),n.beginPath(),n.ellipse(0,0,r.size,r.size*.6,0,0,Math.PI*2),n.fillStyle="#1b1b1b",n.fill(),n.restore()}else if(r.kind==="drop")r.vy+=900*e,r.x+=r.vx*e,r.y+=r.vy*e,n.beginPath(),n.arc(r.x,r.y,r.size,0,Math.PI*2),n.fillStyle="#8fd8ff",n.fill(),n.lineWidth=1.5,n.strokeStyle="#151715",n.stroke();else{r.x+=r.vx*e,r.y+=r.vy*e,r.vy*=1-e*.3;const o=Math.sin(i*18+r.phase)*.6;n.save(),n.globalAlpha=Math.min(1,r.life*1.5),n.translate(r.x,r.y),n.beginPath(),n.moveTo(-r.size,-r.size*o*.8),n.quadraticCurveTo(-r.size*.4,-r.size*.2,0,0),n.quadraticCurveTo(r.size*.4,-r.size*.2,r.size,-r.size*o*.8),n.lineWidth=Math.max(2.5,t*.45),n.strokeStyle="#151715",n.stroke(),n.restore()}}for(let s=Gi.length-1;s>=0;s--){const r=Gi[s];if(r.age+=e,r.age>3.4){Gi.splice(s,1);continue}const a=Math.min(1,r.age*3,(3.4-r.age)*1.5);n.save(),n.globalAlpha=a,n.setLineDash([6,7]),n.strokeStyle="#fff6c8",n.lineWidth=2;for(const[o,c]of Wv)n.beginPath(),n.moveTo(r.pts[o].x,r.pts[o].y),n.lineTo(r.pts[c].x,r.pts[c].y),n.stroke();n.setLineDash([]),r.pts.forEach((o,c)=>{const l=8+3*Math.sin(i*6+c);n.beginPath();for(let h=0;h<=10;h++){const u=-Math.PI/2+h*Math.PI/5,d=h%2?l*.45:l;n.lineTo(o.x+Math.cos(u)*d,o.y+Math.sin(u)*d)}n.closePath(),n.fillStyle="#ffe14d",n.fill(),n.lineWidth=2,n.strokeStyle="#151715",n.stroke()}),n.font="900 15px Georgia",n.textAlign="center",n.lineWidth=4,n.strokeStyle="#151715",n.strokeText("СОЗВЕЗДИЕ «ЗАДИРА»",r.x,r.pts[5].y+34),n.fillStyle="#fff6c8",n.fillText("СОЗВЕЗДИЕ «ЗАДИРА»",r.x,r.pts[5].y+34),n.restore()}}function $v(n,e,t){for(const i of B.geysers){const s=Math.min(1,i.age/.35),r=Math.min(1,(Jt.geyser.life-i.age)/.6),a=2.8*s*r,o=$e({x:i.x,y:0,z:i.z}),c=$e({x:i.x,y:a,z:i.z}),{u:l}=mc({x:i.x,y:0,z:i.z}),h=l*.32;n.save(),n.beginPath();for(let u=0;u<=10;u++){const d=u/10,f=o.y+(c.y-o.y)*d;n.lineTo(o.x-h*(1-d*.35)+Math.sin(e*20+d*9)*h*.15,f)}for(let u=10;u>=0;u--){const d=u/10,f=o.y+(c.y-o.y)*d;n.lineTo(o.x+h*(1-d*.35)+Math.sin(e*23+d*7)*h*.15,f)}if(n.closePath(),n.fillStyle="#7fd0ff",n.globalAlpha=.9,n.fill(),n.globalAlpha=1,n.lineWidth=Math.max(2,t*.45),n.strokeStyle="#151715",n.stroke(),n.beginPath(),n.moveTo(o.x-h*.3,o.y),n.lineTo(c.x-h*.2,c.y),n.strokeStyle="#ffffff",n.lineWidth=h*.18,n.stroke(),n.beginPath(),n.ellipse(c.x,c.y,h*1.2,h*.45,0,0,Math.PI*2),n.fillStyle="#bfeaff",n.fill(),n.lineWidth=Math.max(2,t*.4),n.strokeStyle="#151715",n.stroke(),n.restore(),ut()&&r>.3&&Math.random()<.7){const u=gi.get();u.kind="drop",u.x=c.x,u.y=c.y,u.vx=(Math.random()-.5)*h*9,u.vy=-Math.random()*260,u.life=u.max=.8,u.size=Math.max(2,h*.09)}}}function Kv(n,e,t){for(const i of B.actors){if(i.kind!=="enemy"||!(i.blind||i.plunger||i.antic))continue;const s=Qt.get(i.id);if(!s)continue;const r=Bs(s),a={x:r.x+s.body.position.x,y:r.y-.5+s.body.position.y,z:r.z+.05},{p:o,u:c}=mc(a),l=c*.26;if(n.save(),n.lineJoin="round",n.lineWidth=Math.max(2,t*.45),n.strokeStyle="#151715",i.blind){n.beginPath();for(let h=0;h<=14;h++){const u=h/14*Math.PI*2,d=l*(h%2?.82:1.05);n.lineTo(o.x+Math.cos(u)*d*1.2,o.y+Math.sin(u)*d)}n.closePath(),n.fillStyle="#fffaf0",n.fill(),n.stroke();for(const h of[-.5,.1,.6])n.beginPath(),n.ellipse(o.x+h*l,o.y+l*(1+(h+.5)*.3)+Math.sin(e*2+h)*2,l*.14,l*.3,0,0,Math.PI*2),n.fillStyle="#fffaf0",n.fill(),n.stroke();n.beginPath(),n.arc(o.x+l*.2,o.y-l*1.05,l*.2,0,Math.PI*2),n.fillStyle="#e8243c",n.fill(),n.stroke()}if(i.plunger){const h=On.plunger.image,u=l*3,d=u*.8;n.translate(o.x,o.y+l*.2),n.rotate(-.5+Math.sin(e*6)*.1),n.drawImage(h,-d/2,-u*.25,d,u),n.setTransform(n.getTransform())}if(n.restore(),n.save(),n.lineJoin="round",n.lineWidth=Math.max(2,t*.4),n.strokeStyle="#151715",i.antic==="sandwich"){const h=o.x+s.facing*l*1.1,u=o.y+l*.5+Math.sin(e*11)*l*.12;[["#e8b46a",.3],["#5fbf4a",.12],["#e8475f",.12],["#f7d36b",.12],["#e8b46a",.3]].forEach(([d,f],m)=>{n.beginPath(),n.roundRect(h-l*.9,u-l*.5+m*l*.22,l*1.8,l*f,l*.1),n.fillStyle=d,n.fill(),n.stroke()})}else if(i.antic==="selfie"){const h=o.x+s.facing*l*2.2,u=o.y-l*1.4;if(n.beginPath(),n.moveTo(o.x+s.facing*l*.6,o.y+l),n.lineTo(h,u+l*.5),n.lineWidth=Math.max(2,t*.5),n.stroke(),n.lineWidth=Math.max(2,t*.4),n.beginPath(),n.roundRect(h-l*.7,u-l*.5,l*1.4,l,l*.12),n.fillStyle="#2b2b2b",n.fill(),n.stroke(),n.beginPath(),n.arc(h-s.facing*l*.1,u,l*.32,0,Math.PI*2),n.fillStyle="#9fd3ff",n.fill(),n.stroke(),e%1.3<.12){n.beginPath();for(let f=0;f<=16;f++){const m=f/16*Math.PI*2,_=f%2?l*.6:l*1.7;n.lineTo(h+Math.cos(m)*_,u-l*.7+Math.sin(m)*_)}n.closePath(),n.fillStyle="#fffbd0",n.fill(),n.stroke()}}else if(i.antic==="dance"){n.font=`900 ${Math.round(l*1.3)}px Georgia`,n.textAlign="center";for(let h=0;h<3;h++){const u=e*2+h*2.1,d=o.x+Math.cos(u)*l*2.4,f=o.y-l*1.6+Math.sin(u*1.3)*l*.6;n.lineWidth=4,n.strokeText("♪♫♬"[h],d,f),n.fillStyle=["#ff6fa8","#5ef0c8","#ffd84a"][h],n.fillText("♪♫♬"[h],d,f)}}n.restore()}}function Qh(n){const e=document.createElement("canvas");e.width=e.height=256;const t=e.getContext("2d");if(t.lineJoin="round",t.lineWidth=9,t.strokeStyle="#151715",n==="piano"){t.fillStyle="#3a2418",t.beginPath(),t.roundRect(24,40,208,170,14),t.fill(),t.stroke(),t.fillStyle="#f4efe0",t.fillRect(34,130,188,44),t.strokeRect(34,130,188,44),t.fillStyle="#151715";for(let s=0;s<9;s++)t.fillRect(48+s*20,130,9,26);t.fillStyle="#5a3a26",t.fillRect(40,210,22,36),t.strokeRect(40,210,22,36),t.fillRect(194,210,22,36),t.strokeRect(194,210,22,36),t.fillStyle="#ffd84a",t.font="900 34px Georgia",t.fillText("♪",110,105)}else t.fillStyle="#4f7a64",t.beginPath(),t.roundRect(38,30,180,200,12),t.fill(),t.stroke(),t.strokeRect(56,48,144,164),t.fillStyle="#d9c46a",t.beginPath(),t.arc(128,130,34,0,Math.PI*2),t.fill(),t.stroke(),t.beginPath(),t.moveTo(128,130),t.lineTo(150,108),t.stroke(),t.fillStyle="#151715",t.font="900 26px Arial",t.textAlign="center",t.fillText("100 т",128,205);const i=new vi(e);return i.colorSpace=ht,i}const Zv={piano:Qh("piano"),safe:Qh("safe")},Vi=new Map;function Ul(n){const e=Vi.get(n);e&&($i.remove(e.group),e.obj.geometry.dispose(),e.shadow.geometry.dispose(),e.obj.material.dispose(),e.shadow.material.dispose(),Vi.delete(n))}function jv(n){for(const e of B.hazards){let t=Vi.get(e.id);if(!t){const s=e.kind==="piano"?2.1:1.4,r=new Ot;r.position.set(e.x,0,e.z+.15);const a=new Te(new Ht(s,s).translate(0,s/2,0),new Mt({map:Zv[e.kind],alphaTest:.5,side:zt})),o=new Te(new qi(s*.55,28),new Mt({color:"#1c1c1c",polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-4}));o.rotation.x=-Math.PI/2,o.position.y=.06,r.add(o,a),$i.add(r),t={group:r,obj:a,shadow:o},Vi.set(e.id,t)}const i=Math.min(1,e.age/ar.warn);t.obj.position.y=8.5*(1-i*i),t.obj.rotation.z=Math.sin(e.age*3)*.15*(1-i),t.shadow.scale.setScalar(.25+1.15*i)}for(const[e,t]of Vi)if(!B.hazards.some(i=>i.id===e)){if(t.wreck===void 0){Ul(e);continue}t.wreck-=n,t.obj.position.y=0,t.obj.rotation.z=.08,t.obj.scale.set(1.2,.62,1),t.shadow.scale.setScalar(1.3),t.wreck<=0&&Ul(e)}}function Jv(n){document.querySelector(".iris")?.remove(),Ne("iris");const e=document.createElement("div");e.className="iris",e.setAttribute("role","status"),e.innerHTML=`<div>${n}</div>`,Mn.append(e),Ft.dataset.milestone=n,setTimeout(()=>e.remove(),1500)}function Td(n){n.resolved=!0,n.shot=ic(n.ray.origin,n.ray.direction,Xa());const e=typeof n.shot.id=="number"?n.shot.id:void 0,t=B.resolve(n.action,{kind:n.shot.kind,id:n.shot.id,point:n.shot.point});if(n.outcome=t,As.push({action:n.action,outcome:t,kind:n.shot.kind,id:n.shot.id??null,staminaBefore:n.staminaBefore,staminaAfter:n.staminaAfter}),As.length>20&&As.shift(),t==="hit"||t==="throw"?Ne(t):t==="smash"||t==="grab"?Ne("grab"):t==="ult"?Ne("ding"):t==="cover"?Ne("cover"):t!=="protected"&&Ne("miss"),e!==void 0){const s=Qt.get(e);s&&(s.flash=1)}if(t==="cover"&&typeof n.shot.id=="string"){const s=Cr.get(n.shot.id);s&&(s.userData.wobble=1)}const i=t==="hit"||t==="throw"||t==="protected";ut()&&(Pt=i?.16:t==="cover"||t==="smash"?.08:.02,Tr=i?.06:t==="cover"?.035:0),pc($e(n.shot.point)),uc(Kn),Yt()}const ki=new Set;let za=-1,pa=0;const Qv=14,tr=.07,ey=11;let Dt=null;const gc=()=>B.mode==="play"&&pt[B.level].pan>0;function ty(){const n=vt.position.z+2;return 2*(Math.tan(vt.fov*Math.PI/360)*n*vt.aspect)/innerWidth}function ny(){let n=(ki.has("ArrowRight")||ki.has("KeyD")?1:0)-(ki.has("ArrowLeft")||ki.has("KeyA")?1:0);if(!n&&za>=0){const e=za/innerWidth;e<tr?n=-(1-e/tr):e>1-tr&&(n=(e-(1-tr))/tr)}return n}function iy(n){if(!gc()){xs=0,pa=0;return}const e=Dt?.moved?0:ny();pa=e?Math.min(1,pa+n*1.6):0;const t=e*ey*(.35+.65*pa),i=1-Math.exp(-n*(e?6:10));xs+=(t-xs)*i,Math.abs(xs)>.01&&(Rn=Xu(B.level,Rn+xs*n))}function Oa(n){si.set(n.clientX/innerWidth*2-1,-(n.clientY/innerHeight)*2+1),Md()}Ft.addEventListener("pointermove",n=>{if(n.pointerType==="mouse"&&(za=n.clientX),Dt&&n.pointerId===Dt.id){const e=n.clientX-Dt.x;if(!Dt.moved&&Math.hypot(e,n.clientY-Dt.y)>Qv&&gc()&&!B.ultActive&&(Dt.moved=!0),Dt.moved){Rn=Xu(B.level,Dt.pan-e*ty());return}}(n.pointerType!=="touch"||B.ultActive)&&Oa(n)});Ft.addEventListener("pointerleave",()=>{za=-1});Ft.addEventListener("pointerdown",n=>{if(B.mode==="play"){if(n.pointerType==="touch"){Dt={id:n.pointerId,x:n.clientX,y:n.clientY,pan:Rn,moved:!1},B.ultActive&&Oa(n);return}Oa(n),!B.ultActive&&Fa(n.button===2?"grab":"punch")}});const sy=n=>{if(!Dt||n.pointerId!==Dt.id)return;const e=!Dt.moved;Dt=null,!(!e||B.mode!=="play")&&(Oa(n),B.ultActive||(B.message="Прицел стоит. Жми «Удар» или «Хватай».",wr()))};Ft.addEventListener("pointerup",sy);Ft.addEventListener("pointercancel",n=>{Dt&&n.pointerId===Dt.id&&(Dt=null)});addEventListener("keyup",n=>ki.delete(n.code));addEventListener("blur",()=>ki.clear());Ft.addEventListener("contextmenu",n=>n.preventDefault());addEventListener("keydown",n=>{["ArrowLeft","ArrowRight","KeyA","KeyD"].includes(n.code)&&(ki.add(n.code),gc()&&n.preventDefault()),n.code==="Escape"&&!document.hidden&&(B.pause(),Yt()),(n.code==="Space"||n.code==="KeyE")&&!(n.target instanceof HTMLButtonElement)&&(n.preventDefault(),n.repeat||Fa(n.code==="Space"?"punch":"grab"))});function wd(){const n=hd();for(const e of hc)ii[e].visible=n===e}function _c(){B.suspend(),Yt()}document.addEventListener("visibilitychange",()=>{document.hidden&&_c()});document.addEventListener("freeze",_c);addEventListener("pagehide",_c);function jt(n,e){document.getElementById(n)?.addEventListener("click",()=>{oc(),Ne("ui"),e()})}function ma(n){if(B.start(n)){for(const e of Wa)e.visible=!0;fr.length=0,Rn=0,xs=0,Na="",mr.length=0,ur.length=0,dr.clear(),Hi.length=0,gi.clear(),Gi.length=0;for(const e of[...Vi.keys()])Ul(e);document.querySelector(".iris")?.remove()}Yt()}function eu(){return'<div class="topline"><div class="brand"><span>↗</span> ДВОР ДА ДЕЛО</div><div class="tag">РУКИ ДЛИННЕЕ. ДЕНЬ ЛУЧШЕ.</div></div>'}function Yt(){const n=B.mode;if(n!==Na&&(Na=n,dc()),lv(hd()),wd(),Dl.dataset.mode=n,Dl.dataset.level=String(B.level),n==="menu")Mn.innerHTML=eu()+'<section class="panel"><div class="eyebrow">Потасовка на резиновых руках</div><h1>ДЛИННЫЕ<br><em>РУКИ.</em></h1><p>Сначала бар, потом улица. Задиры прячутся за пианино, стойкой, бочками и заборами, высовываются и замахиваются. Тянись, бей, бросай всё, что под рукой. Пса с нимбом не трогай.</p><div class="buttons"><button id="start" class="primary">В БАР →</button><button id="how" class="secondary">КАК ИГРАТЬ?</button></div><div class="fine">Без беготни. Только ловкость рук.</div></section><div class="stamp">100%<b>РАЗМАХ</b>0% СЕРЬЁЗНОСТИ</div><div class="footer"><span>БАР «ДЛИННЫЕ РУКИ» · УЛИЦА</span><span>РЕКОРД: '+B.progress.best+" / РЕЗИНОВЫЕ РУКИ 1930-х</span></div>",jt("start",()=>{B.mode="select",Yt()}),jt("how",()=>{Mn.innerHTML+='<div class="shade"></div><section class="panel centerpanel"><span class="note">ПАМЯТКА ДЛИННОРУКОГО</span><h2>Целься. Тянись.<br>Не трогай пса.</h2><p>Кулак летит ровно туда, куда ты целишься: никакого автоприцела. Задиры прячутся за укрытиями — бей, когда высунутся. У каждого своя полоска здоровья. Промах тоже тратит силы.</p><p>ЛКМ / пробел — удар. ПКМ / E — хватай предмет, затем бросай: он летит сам, по дуге. Улица широкая: стрелки, A/D, мышь у края экрана или свайп — камера едет. Пёс с нимбом — неприкосновенный.</p><button id="close" class="primary">ПОНЯТНО →</button></section>',jt("close",Yt)});else if(n==="select"){const e=B.progress.unlocked<2;Mn.innerHTML=eu()+'<div class="shade"></div><section class="panel centerpanel"><div class="eyebrow">Выбери свой размах</div><h2>КУДА<br>СЕГОДНЯ?</h2><div class="levels"><button id="level1" class="primary level"><span>01 / БАР «ДЛИННЫЕ РУКИ»<br><small>'+pt[1].goal+' посетителей · ведите себя прилично</small></span><b>↗</b></button><button id="level2" class="secondary level" '+(e?"disabled":"")+"><span>02 / УЛИЦА: ДВОР И ПЕРЕУЛОК<br><small>"+(e?"Сначала наведи порядок в баре":pt[2].goal+" задир · широкая панорама, крути камеру")+"</small></span><b>"+(e?"⊗":"↗")+'</b></button></div><div class="buttons"><button id="back" class="secondary">← НАЗАД</button></div></section>',jt("level1",()=>ma(1)),jt("level2",()=>ma(2)),jt("back",()=>{B.mode="menu",Yt()})}else{if(Mn.innerHTML='<div class="hud"><div class="hudbox"><div id="hearts" class="hearts"></div><div class="energy"><i id="energy"></i></div><div class="small" style="margin-top:6px">СИЛЫ <span id="stamina"></span></div></div><div class="hudbox"><div class="small">ТВОЙ СЧЁТ</div><div id="score" class="score"></div><div id="combo" class="small"></div></div><button id="pause" class="pause" aria-label="Пауза">Ⅱ</button></div><div id="ultmeter" class="ultmeter" hidden><b>УЛЬТА</b><span><i id="ultfill"></i></span></div><div id="progress" class="progress"></div><div class="crosshair"></div><div id="message" class="message" role="status"></div>'+(pt[B.level].pan>0?'<div id="panL" class="panhint left" aria-hidden="true"><b>◀</b><span></span></div><div id="panR" class="panhint right" aria-hidden="true"><b>▶</b><span></span></div>':"")+'<div class="controls"><button id="punch" class="primary">УДАР ↗<small>ЛКМ / ПРОБЕЛ · 24 СИЛЫ</small></button><button id="grab" class="secondary">ХВАТАЙ ◎<small>ПКМ / E · 12 СИЛ</small></button></div>',jt("punch",()=>Fa("punch")),jt("grab",()=>Fa("grab")),jt("pause",()=>{B.pause(),Yt()}),n==="pause"||n==="result"){const e=n==="result",t=e&&B.won,i=e?Nx(B):[{id:"resume",label:"ПРОДОЛЖИТЬ →",primary:!0},{id:"select",label:"ВЫБОР УРОВНЯ",primary:!1}],s=t?B.level<Ga?"Открыта улица: двор и переулок на одной широкой панораме.":"Улица чиста. Бар открыт до утра.":"Ещё попытка — все сердца снова с тобой.";Mn.innerHTML+='<div class="shade"></div><section class="panel centerpanel"><span class="note">'+(e?t?"ПОРЯДОК НАВЕДЁН":"БЫВАЕТ И ТАК":"РУКИ НА ПЕРЕРЫВЕ")+"</span><h2>"+(e?t?"КРАСИВО<br>РАЗОБРАЛСЯ!":"НЕ ТОТ<br>РАЗМАХ.":"ВЫДОХНИ.<br>ЗАДИРЫ ПОДОЖДУТ.")+"</h2><p>"+(e?"Счёт: <b>"+B.score+"</b> · Рекорд: "+B.progress.best+"<br>"+s:"Время остановилось. Ни один задира не ударит исподтишка.")+'</p><div class="buttons">'+i.map(r=>`<button id="${r.id}" class="${r.primary?"primary":"secondary"}">${r.label}</button>`).join("")+"</div></section>",jt("resume",()=>{B.pause(),Yt()}),jt("next",()=>ma(B.level+1)),jt("retry",()=>ma(B.level)),jt("select",()=>{B.mode="select",Yt()}),jt("menu",()=>{B.mode="menu",Yt()})}wr()}uc(Kn),n!=="play"&&(Mn.insertAdjacentHTML("beforeend",sv()),rv(Yt)),xc()}function $e(n){const e=new I(n.x,n.y,n.z).project(vt);return{x:(e.x+1)/2*innerWidth,y:(1-e.y)/2*innerHeight}}function ry(n){const e=Va(n.kind,n.who),t=Jn(B.level,n,ut()),[i,s,r,a]=n.kind==="enemy"&&n.skin?tc[n.skin]:e.inset;for(const o of[.8,.65,.9,.5,.35])for(const c of[.5,.38,.62]){const l={x:t.x-e.w/2+e.w*(i+(s-i)*c),y:t.y+e.h*(r+(a-r)*o),z:t.z},h=$e(l);if(fc(new De(h.x/innerWidth*2-1,1-h.y/innerHeight*2)).id===n.id)return{x:Math.round(h.x),y:Math.round(h.y)}}return null}let tu="";function wr(){const e=B.actors.filter(l=>l.kind==="enemy").map(l=>(l.x<-.5?"слева":l.x>.5?"справа":"в центре")+(l.layer==="foreground"?" (за укрытием рядом)":l.layer==="background"?" (в окне)":" (за забором)"));Ft.setAttribute("aria-label",`Уровень ${B.level}. Задиры: ${e.join(", ")||"нет"}. Наведи прицел, затем нажми Удар.`);const t=JSON.stringify(B.mode==="play"?B.actors.map(l=>({id:l.id,kind:l.kind,layer:l.layer,frame:Qt.get(l.id)?.frame??null,at:l.age>=.4?ry(l):null})):[]);t!==tu&&(tu=t,Ft.dataset.aim=t);const i=(l,h)=>{const u=document.getElementById(l);u&&(u.textContent=h)};i("hearts","♥".repeat(Math.max(0,B.hp))+"♡".repeat(5-Math.max(0,B.hp))),i("stamina",Math.floor(B.stamina)+""),i("score",B.score.toString().padStart(5,"0")),i("combo",B.combo>1?"КОМБО ×"+B.combo:"ДАЙ ИМ РАЗМАХ"),i("progress",`${lc()?"БАР":"УЛИЦА"} / ${B.defeated} ИЗ ${B.goal} ЗАДИР`),ay();const s=document.getElementById("ultmeter");if(s){s.hidden=!B.ultActive;const l=document.getElementById("ultfill");l&&(l.style.width=Math.round(B.ult.meter*100)+"%")}const r=B.mode==="play"&&B.held==="hat"?JSON.stringify(ly()):"";Ft.dataset.zone!==r&&(Ft.dataset.zone=r);const a=JSON.stringify({phase:B.ult.phase,meter:+B.ult.meter.toFixed(2),tip:En&&B.ult.phase==="pour"?{x:Math.round(En.tip.x*innerWidth),y:Math.round(En.tip.y*innerHeight)}:null});Ft.dataset.ult!==a&&(Ft.dataset.ult=a),i("message",B.message);const o=document.getElementById("energy");o&&(o.style.width=B.stamina+"%");const c=document.getElementById("grab");c&&(c.innerHTML=B.held?"БРОСАЙ ↗<small>"+Ct[B.held].name.toUpperCase()+" · "+id("grab",!0,B.held)+" СИЛ</small>":"ХВАТАЙ ◎<small>ПКМ / E · 12 СИЛ</small>")}function ay(){const n=pt[B.level].pan;if(!n)return;const e={L:{n:0,hot:!1},R:{n:0,hot:!1}};for(const t of B.actors){if(t.kind!=="enemy")continue;const i=$e(Jn(B.level,t,ut())).x,s=i<0?e.L:i>innerWidth?e.R:null;s&&(s.n++,t.deadline-t.age<Is*1.6&&(s.hot=!0))}for(const[t,i,s]of[["panL",Rn>-n+.05,e.L],["panR",Rn<n-.05,e.R]]){const r=document.getElementById(t);if(!r)continue;const a=(i||s.n?"on":"")+(s.hot?" hot":"");r.dataset.state!==a&&(r.dataset.state=a,r.classList.toggle("on",i||s.n>0),r.classList.toggle("hot",s.hot));const o=s.n?String(s.n):"",c=r.querySelector("span");c&&c.textContent!==o&&(c.textContent=o)}}let di=null,nu=0;function xc(){const n=document.querySelector(".controls")?.getBoundingClientRect();di=n&&n.width?{left:n.left,right:n.right,top:n.top}:null;const e=document.getElementById("message");if(di&&e?.textContent){const t=document.createRange();t.selectNodeContents(e);const i=t.getBoundingClientRect();i.width&&(di={left:Math.min(di.left,i.left-18),right:Math.max(di.right,i.right+18),top:Math.min(di.top,i.top-10)})}}let En=null,pr=0;const Pn=[],Ii=[];function oy(){const n=B.hatRest;n&&(kn.position.set(n.x,Oi.max.y+gv,Math.min(n.z,Oi.max.z-.1)),kn.visible=!0),En=null,Pn.length=0;const e=document.createElement("div");e.className="ultflash",Mn.append(e),setTimeout(()=>e.remove(),800),ut()&&(Pt=.25)}function ly(){const n=Oi;for(const e of[.55,.42,.68,.3,.8])for(const t of[.5,.3,.7]){const i=$e({x:n.min.x+(n.max.x-n.min.x)*e,y:n.max.y,z:n.min.z+(n.max.z-n.min.z)*t}),s=fc(new De(i.x/innerWidth*2-1,1-i.y/innerHeight*2));if(s.kind==="cover"&&s.point.y>=n.max.y-.001&&Cl(B.level,s.id,s.point))return{x:Math.round(i.x),y:Math.round(i.y)}}return null}function cy(n){iv(B.pouring&&B.mode==="play"),B.ult.phase==="none"&&(Ii.length||kn.visible)&&(Ii.length=0,Pn.length=0,kn.visible=!1,En=null,pr=0);const e=document.getElementById("ulttitle"),t=B.ult.phase==="intro"?Cx(B.ult.t):null;if(e&&e.dataset.who!==t?.who&&e.remove(),t&&!document.getElementById("ulttitle")&&Mn.insertAdjacentHTML("beforeend",`<div id="ulttitle" class="intertitle dialog" role="status" data-who="${t.who}"><div><small>❦ ${t.who} ❦</small><b>${t.text}</b></div></div>`),B.ult.phase==="pour"&&!En){const c=Ll(),l=c?{x:c.x/innerWidth,y:c.y/innerHeight}:{x:.5,y:.6};En=new Px(l),si.set(l.x*2-1,1-l.y*2),Md()}for(let c=Pn.length-1;c>=0;c--){const l=Pn[c];l.life-=n,l.vy+=2.4*n,l.x+=l.vx*n,l.y+=l.vy*n,l.life<=0&&Pn.splice(c,1)}if(!En||!B.pouring||B.mode!=="play")return;const i=En.update(n,{x:(si.x+1)/2,y:(1-si.y)/2}),s=new Map;let r=null;for(const c of[0,-.018,.018]){const l=fc(new De((i.x+c)*2-1,1-i.y*2));typeof l.id=="number"&&!s.has(l.id)&&s.set(l.id,l.kind),c===0&&(l.kind==="whiff"||l.point.y<.2)&&(r=l.point)}for(const[c,l]of s)(l==="enemy"||l==="dog")&&B.soak({kind:l,id:c},n);const a=Ll(),o=!!a&&Math.hypot(i.x*innerWidth-a.x,(i.y*innerHeight-a.y)*1.6)<a.r;if(o&&(B.pourInHat(n),pr=Math.min(1,pr+n/(Di.length*.8))),Ft.dataset.inhat=String(o),ut()&&Math.random()<.7&&Pn.push({x:i.x+(Math.random()-.5)*.02,y:i.y,vx:(Math.random()-.5)*.22,vy:-.18-Math.random()*.22,life:.22+Math.random()*.2}),Pn.length>40&&Pn.splice(0,Pn.length-40),r&&r.y<.2){const c=$e(r),l=c.x/innerWidth,h=c.y/innerHeight,u=Math.min(innerWidth,innerHeight),d=Ii.find(f=>Math.hypot((f.x-l)*innerWidth,(f.y-h)*innerHeight)<u*.06);d?d.r=Math.min(d.max,d.r+n*u*.08):(Ii.push({x:l,y:h,r:u*.015,max:u*(.07+Math.random()*.04)}),Ii.length>14&&Ii.shift())}}const mr=[];function Bs(n){const e=n.skin?tc[n.skin][3]:kt.enemy.inset[3];return{x:n.group.position.x,y:n.group.position.y+kt.enemy.h*e+.16,z:n.group.position.z}}function nr(n,e,t,i,s,r){n.beginPath(),n.roundRect(e,t,i,s,r)}function hy(n,e,t){for(const i of B.actors){if(i.kind!=="enemy"||!i.maxHp)continue;const s=Qt.get(i.id),r=Ox(i,B.elapsed);if(!s||r<=0)continue;const a=Bs(s),o=$e(a),c=$e({...a,x:a.x+1}),l=Math.abs(c.x-o.x),h=An.clamp(l*.95,36,150),u=Math.max(8,h*.16),d=o.x-h/2,f=o.y-u,m=(i.hp??0)/i.maxHp;s.ghost=Math.max(m,(s.ghost??1)-e*.9),n.save(),n.globalAlpha=r,nr(n,d,f,h,u,u/2),n.fillStyle="#2b2b2b",n.fill(),s.ghost>m&&(nr(n,d,f,h*s.ghost,u,u/2),n.fillStyle="#fff6c8",n.fill()),nr(n,d,f,Math.max(u,h*m),u,u/2),n.fillStyle=m>.6?"#8fdc2a":m>.3?"#ffd84a":"#ff4f6d",m>0&&n.fill(),s.flash>.3&&(nr(n,d,f,h,u,u/2),n.fillStyle=`rgba(255,255,255,${(s.flash-.3)*.9})`,n.fill()),n.strokeStyle="#151715",n.lineWidth=Math.max(1.5,t*.3);for(let _=10;_<i.maxHp;_+=10){const g=d+h*_/i.maxHp;n.beginPath(),n.moveTo(g,f+2),n.lineTo(g,f+u-2),n.stroke()}nr(n,d,f,h,u,u/2),n.lineWidth=Math.max(2,t*.45),n.stroke(),n.beginPath(),n.moveTo(d+u*.6,f+u*.3),n.lineTo(d+h*Math.max(.1,m)-u*.4,f+u*.3),n.strokeStyle="rgba(255,255,255,.55)",n.lineWidth=Math.max(1,u*.16),n.lineCap="round",n.stroke(),n.restore()}for(let i=mr.length-1;i>=0;i--){const s=mr[i];if(s.age+=e,s.age>1){mr.splice(i,1);continue}const r=$e({x:s.x,y:s.y+s.age*.7,z:s.z}),a=$e({x:s.x+1,y:s.y,z:s.z}),o=Math.abs(a.x-r.x),c=s.age<.12?.6+s.age/.12*.6:1.2-Math.min(.2,s.age-.12),l=An.clamp(o*(s.big?.55:.42),16,64)*c;n.save(),n.globalAlpha=Math.min(1,(1-s.age)*2.5),n.font=`900 ${l}px Arial`,n.textAlign="center",n.textBaseline="bottom",n.lineJoin="round",n.lineWidth=Math.max(3,l*.16),n.strokeStyle="#151715",n.strokeText("−"+s.amount,r.x+(s.big?0:l*.3),r.y-4),n.fillStyle=s.big?"#ff6b3d":"#ffd84a",n.fillText("−"+s.amount,r.x+(s.big?0:l*.3),r.y-4),n.restore()}}const ir="#ffd400",iu="#fff6b8";function uy(n,e,t,i,s){const r=Math.min(e,t),a=Ll();a&&pr>0&&(n.beginPath(),n.ellipse(a.x,a.y+a.r*.05,a.r*(.55+.4*pr),a.r*.22,0,0,Math.PI*2),n.fillStyle=ir,n.fill(),n.lineWidth=Math.max(1.5,s*.35),n.strokeStyle="#151715",n.stroke());for(const o of Ii)n.beginPath(),n.ellipse(o.x*e,o.y*t,o.r,o.r*.3,0,0,Math.PI*2),n.fillStyle=ir,n.globalAlpha=.9,n.fill(),n.globalAlpha=1,n.lineWidth=Math.max(2,s*.45),n.strokeStyle="#151715",n.stroke(),n.beginPath(),n.ellipse(o.x*e-o.r*.25,o.y*t-o.r*.08,o.r*.35,o.r*.07,0,0,Math.PI*2),n.fillStyle=iu,n.fill();if(En&&B.ult.phase==="pour"){const o=En.points().map(m=>({x:m.x*e,y:m.y*t})),c=o.length-1,l=[],h=[],u=[],d=ut()?1:0;for(let m=0;m<=c;m++){const _=o[Math.max(0,m-1)],g=o[Math.min(c,m+1)],p=g.x-_.x,T=g.y-_.y,E=Math.hypot(p,T)||1,S=-T/E,R=p/E,w=m/c,C=r*(.068*(1-w)+.03*w)*(1+d*.12*Math.sin(w*9-i*17)),P=d*Math.sin(w*15-i*24)*r*.007*(.3+w),M=o[m].x+S*P,y=o[m].y+R*P;u.push({x:M,y,w:C,nx:S,ny:R}),l.push({x:M+S*C/2,y:y+R*C/2}),h.push({x:M-S*C/2,y:y-R*C/2})}n.beginPath(),l.forEach((m,_)=>_?n.lineTo(m.x,m.y):n.moveTo(m.x,m.y));for(let m=c;m>=0;m--)n.lineTo(h[m].x,h[m].y);n.closePath(),n.fillStyle=ir,n.fill(),n.lineJoin="round",n.lineWidth=Math.max(2,s*.55),n.strokeStyle="#151715",n.stroke(),n.beginPath();for(let m=1;m<c;m++){const _=u[m],g=_.x+_.nx*_.w*.2,p=_.y+_.ny*_.w*.2;m===1?n.moveTo(g,p):n.lineTo(g,p)}n.lineCap="round",n.lineWidth=r*.007,n.strokeStyle=iu,n.stroke(),n.fillStyle="#ffffff";for(let m=0;m<6;m++){const _=(i*1.7+m/6)%1,g=Math.min(c-1,Math.floor(_*c)),p=u[g];n.beginPath(),n.ellipse(p.x-p.nx*p.w*.15,p.y-p.ny*p.w*.15,p.w*.16,p.w*.07,Math.atan2(p.ny,p.nx)+Math.PI/2,0,Math.PI*2),n.fill()}const f=o[c];n.strokeStyle="#151715",n.lineWidth=Math.max(2,s*.4),n.fillStyle=ir;for(let m=0;m<5;m++){const _=-Math.PI/2+(m-2)*.45+(d?Math.sin(i*30+m)*.1:0),g=r*.02,p=r*(.045+.012*Math.sin(i*40+m*2)*d);n.beginPath(),n.moveTo(f.x+Math.cos(_)*g,f.y+Math.sin(_)*g),n.lineTo(f.x+Math.cos(_)*p,f.y+Math.sin(_)*p),n.stroke()}}for(const o of Pn)n.beginPath(),n.arc(o.x*e,o.y*t,r*.0045+1,0,Math.PI*2),n.fillStyle=ir,n.fill(),n.lineWidth=1.5,n.strokeStyle="#151715",n.stroke()}let su=0;function dy(n){const e=innerWidth,t=innerHeight,i=Cv,s=ws.width/Math.max(1,e),r=Math.max(0,Math.min(.05,n-su));if(su=n,i.setTransform(1,0,0,1,0,0),i.clearRect(0,0,ws.width,ws.height),B.mode!=="play"&&B.mode!=="pause")return;i.setTransform(s,0,0,s,0,0),lc()&&uy(i,e,t,n,Ma(e,t).ink);const{ink:a,rim:o}=Ma(e,t),c=di,l=xt,h=l?l.phase:1;$v(i,n,a),Kv(i,n,a),hy(i,r,a),Hv(i,r,a),Yv(i,r,a,n);const u=l?{x:l.spot.x*e,y:l.spot.y*t}:{x:0,y:0},d=l&&h<1?l.throwing?1:qx(u,e):0;for(let f=ur.length-1;f>=0;f--){const m=ur[f];if(m.age+=r,m.age>.5){ur.splice(f,1);continue}const _=m.age/.5,g=m.size*(_<.15?.6+_*4:1.2-_*.2);i.save(),i.globalAlpha=Math.max(0,1-Math.max(0,_-.5)*2),i.translate(m.x,m.y),i.drawImage(da[m.key]??da.miss,-g/2,-g/2,g,g),i.restore()}for(let f=dr.live.length-1;f>=0;f--){const m=dr.live[f];if(m.life-=r,m.life<=0){dr.release(f);continue}m.vy+=t*2.2*r,m.x+=m.vx*r,m.y+=m.vy*r,m.rot+=m.vr*r,i.save(),i.translate(m.x,m.y),i.rotate(m.rot),i.globalAlpha=Math.min(1,m.life*3),i.beginPath(),i.moveTo(-m.size,m.size*.6),i.lineTo(0,-m.size),i.lineTo(m.size*.8,m.size*.4),i.closePath(),i.fillStyle=m.color,i.fill(),i.lineWidth=Math.max(1.5,a*.3),i.strokeStyle="#151715",i.stroke(),i.restore()}if(l&&l.resolved&&!l.throwing&&h<.8){const f=(h-or)/(.8-or),m=l.outcome&&da[l.outcome]?l.outcome:"miss",_=(m==="miss"?.9:1.6)*Ma(e,t).r*2*Math.max(.5,Math.min(1.2,6.5/Math.max(3,l.shot.distance)))*(f<.2?.6+f*3:1.2-f*.2);i.save(),i.globalAlpha=Math.max(0,1-Math.max(0,f-.5)*2),i.translate(u.x,u.y),i.rotate(-l.ray.direction.x*.4),i.drawImage(da[m],-_/2,-_/2,_,_),i.restore()}for(const f of[-1,1]){const m=ut()?Math.sin(n*2.4+(f>0?0:1.3))*t*.006:0;let _=rc(f,e,t,c,m);l&&f===d&&(_=l.throwing?Gh(f,e,t,Ed(l),h,br,{throwing:!0,avoid:c}):Gh(f,e,t,u,h,{arrive:or,release:Dv},{depth:6.5/Math.max(3,l.shot.distance),grab:l.action==="grab",avoid:c}));const g=B.held&&f===1&&!(l&&l.throwing&&d===1);if(g&&(_={..._,open:!0}),l&&f===d&&h>.08&&h<or&&ut()){const T=_.glove.x-_.ctrl.x,E=_.glove.y-_.ctrl.y,S=Math.hypot(T,E)||1,R=T/S,w=E/S;i.strokeStyle="#151715",i.lineWidth=Math.max(2,a*.5),i.lineCap="round";for(const C of[-1,1]){const P=_.w1/2+_.r*.45,M=-w*C*P,y=R*C*P;i.beginPath(),i.moveTo(_.glove.x-R*_.r*2.4+M,_.glove.y-w*_.r*2.4+y),i.lineTo(_.glove.x-R*_.r*1.25+M,_.glove.y-w*_.r*1.25+y),i.stroke()}}tv(i,_,a,o);const p=g?B.held:l&&l.throwing&&l.held&&f===d&&!l.launched?l.held:null;if(p){const T=On[p].image,E=_.r*2.2,S=E*kt[p].w/kt[p].h;i.save(),i.translate(_.glove.x,_.glove.y-_.r*.5),i.rotate(ut()?Math.sin(n*2)*.07:0),i.drawImage(T,-S/2,-E*.8,S,E),i.restore()}}Nv(i,e,t,r,a)}const fy=new Tp;let Kn=0;const vs=new I;function Ad(){requestAnimationFrame(Ad);const n=Math.min(fy.getDelta(),.05)*Lv;if(B.mode!=="pause"&&(Kn+=n),Tr>0?Tr-=n:B.tick(n),B.mode!==Na&&Yt(),cy(B.mode==="play"?n:0),B.events.length&&pc(),wd(),Zh>B.hp&&ut()){const e=document.createElement("div");e.className="flash",Mn.append(e),setTimeout(()=>e.remove(),400)}Zh=B.hp,uc(Kn),iy(B.mode==="play"?n:0),B.mode==="play"&&(wr(),(nu-=n)<=0&&(nu=.25,xc())),xt&&B.mode!=="pause"&&(xt.phase=Math.min(1,xt.phase+n/(xt.throwing?br.duration:Pv)),xt.throwing&&!xt.launched&&xt.phase>=br.arrive?bd(xt):!xt.throwing&&!xt.resolved&&xt.phase>=or&&Td(xt),xt.phase>=1&&(xt=null)),B.mode!=="play"&&B.mode!=="pause"&&(xt=null),zv(n),Fv(),Bv(n,Kn),jv(B.mode==="play"?n:0),Rv(n,Kn);for(const e of Cr.values()){const t=e.userData.wobble;t&&(e.scale.set(1+Math.sin(t*30)*t*.05,1-Math.sin(t*30)*t*.04,1),e.userData.wobble=Math.max(0,t-n*3))}if(ut())for(const e of pd)e.rotation.z=Math.sin(Kn*1.7+e.userData.sway)*.08;if(ut())for(const e of md)e.rotation.y=e.userData.swing*(.35+.3*Math.sin(Kn*2.3+e.userData.swing));py(n);{const e=jn.depth,t=Math.tan(vt.fov*Math.PI/360)*e*vt.aspect;B.cam={x:vs.x||Rn,z:vt.position.z,half:Math.max(1.2,t-.6)}}Un.info.reset(),Un.clear(),Un.render(pn,vt),dy(Kn)}function py(n){if(B.mode==="menu"||B.mode==="select"){Yh(0);return}const e=Ku(innerWidth,innerHeight,Rn);Yh(Rn),vs.set(e.position.x,e.position.y,e.position.z),Pt>0?(Pt=Math.max(0,Pt-n*.9),vt.position.set(vs.x+(Math.random()-.5)*Pt,vs.y+(Math.random()-.5)*Pt,vs.z)):vt.position.copy(vs),vt.updateMatrixWorld()}dc();Yt();Ad();
