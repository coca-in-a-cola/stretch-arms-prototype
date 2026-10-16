import * as THREE from 'three';

export function makeStreet() {
  const street = new THREE.Group();
  function block(size: readonly [number, number, number], at: readonly [number, number, number], color: string) {
    const mesh = new THREE.Mesh(new THREE.BoxGeometry(...size), new THREE.MeshStandardMaterial({color, roughness:.9}));
    mesh.position.set(...at); mesh.castShadow = true; mesh.receiveShadow = true; street.add(mesh); return mesh;
  }
  block([70,.25,85],[0,-.2,-20],'#737e80');
  for (const side of [-1,1]) {
    block([7,.3,60],[side*8,-.04,-19],'#c5bcaa');
    block([.22,.36,60],[side*4.45,.05,-19],'#efe7cc');
    for(let z=-28;z<3;z+=4) block([.12,.9,.12],[side*4.9,.55,z],'#475b5e');
    for(let i=0;i<4;i++) {
      const z=-7-i*8, h=5+(i%3)*2;
      block([5,h,6.5],[side*8,h/2,z],i%2?'#b79f8b':'#8eaaa4');
      block([5.35,.25,6.8],[side*8,h,z],'#44595c');
      block([.12,2,4],[side*5.45,1.5,z],'#324c53');
      block([1.3,.22,5.5],[side*5.1,3,z],'#eeac78');
      for(let dz=-2;dz<=2;dz+=1) block([1.3,.24,.4],[side*5.1,3.02,z+dz],'#f1e5bf');
      block([.15,1.3,2],[side*5.44,h-1.5,z],'#dbe5d2');
    }
    for (const z of [-5,-20]) {
      block([.16,6,.16],[side*4.9,3,z],'#354a50');
      block([1.6,.15,.15],[side*4.25,6,z],'#354a50');
      block([.65,.14,.45],[side*3.5,5.85,z],'#fff1b2');
    }
  }
  for(let z=-36;z<-5;z+=4) block([.14,.02,2],[0,-.055,z],'#f4d487');
  for(let x=-3.8;x<=3.8;x+=1.25) block([.7,.025,2.5],[x,-.05,-3.3],'#e5e3cf');
  block([2.3,.18,4],[-6,3.7,-2],'#486365');
  for(const z of [-3.7,-.3]) block([.12,3.6,.12],[-6.8,1.8,z],'#486365');
  block([.12,2.8,3.5],[-7,1.8,-2],'#9ebfc0');
  block([.8,.18,2.8],[-6.2,.85,-2],'#e5af79');
  block([.7,1.1,.7],[5.3,.55,1],'#385e59');
  block([2.3,1.8,4],[6.6,1.2,-13],'#eac575');
  block([2.3,1.1,1.5],[6.6,2,-10.9],'#455e66');
  const c=document.createElement('canvas'); c.width=512;c.height=128;
  const g=c.getContext('2d');
  if(g){g.fillStyle='#f359a4';g.fillRect(0,0,512,128);g.fillStyle='#202522';g.font='bold 47px Arial';g.textAlign='center';g.fillText('ПЕРЕУЛОК 02 →',256,82);}
  const texture=new THREE.CanvasTexture(c);texture.colorSpace=THREE.SRGBColorSpace;
  const sign=new THREE.Mesh(new THREE.PlaneGeometry(4.3,1.08),new THREE.MeshBasicMaterial({map:texture}));
  sign.position.set(-5.9,4.55,-4);street.add(sign);
  return street;
}
