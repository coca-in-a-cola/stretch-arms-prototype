import * as THREE from 'three';

/** Level 2 backdrop: a noisy alley at dusk — tall dark silhouettes, glowing windows, neon and string lights.
 * Built with the original paint; main.ts turns it greyscale (palette.ts) like the rest of the world. */
export function makeStreet() {
  const street = new THREE.Group();
  function block(size: readonly [number, number, number], at: readonly [number, number, number], color: string, glow = false) {
    const material = glow ? new THREE.MeshBasicMaterial({ color, fog: false }) : new THREE.MeshStandardMaterial({ color, roughness: .9 });
    const mesh = new THREE.Mesh(new THREE.BoxGeometry(...size), material);
    mesh.position.set(...at); mesh.castShadow = !glow; mesh.receiveShadow = !glow; street.add(mesh); return mesh;
  }
  block([70, .25, 85], [0, -.2, -20], '#4a4552');
  for (let z = -36; z < -5; z += 4) block([.14, .02, 2], [0, -.055, z], '#f2b45c');
  for (let x = -3.8; x <= 3.8; x += 1.25) block([.7, .025, 2.5], [x, -.05, -3.3], '#b9a9a8');
  for (const side of [-1, 1]) {
    block([7, .3, 60], [side * 8, -.04, -19], '#6c5f6c');
    block([.22, .36, 60], [side * 4.45, .05, -19], '#a99a92');
    for (let i = 0; i < 4; i++) {
      // Uneven rooflines read as a busy street silhouette against the sunset.
      const z = -7 - i * 8, h = 6 + ((i + (side > 0 ? 1 : 0)) % 3) * 2.5;
      block([5, h, 6.5], [side * 8, h / 2, z], i % 2 ? '#5a4560' : '#3e4a66');
      block([5.35, .25, 6.8], [side * 8, h, z], '#221c30');
      block([1.3, .22, 5.5], [side * 5.1, 3, z], i % 2 ? '#e0574f' : '#2f9c8f');
      for (let dz = -2; dz <= 2; dz += 1) block([1.3, .24, .4], [side * 5.1, 3.02, z + dz], '#f1e5bf');
      block([.15, 1.3, 2], [side * 5.44, 1.5, z], i % 3 ? '#ffd27a' : '#ff9f6a', true);
      block([.15, 1.3, 2], [side * 5.44, h - 1.5, z], (i + side) % 2 ? '#ffe3a1' : '#3a3550', (i + side) % 2 !== 0);
      // Chimney / water tank bumps break the rooftop line.
      if (i % 2 === 0) block([.6, 1.2, .6], [side * 7, h + .6, z + 1.5], '#221c30');
    }
    for (const z of [-5, -20]) {
      block([.16, 6, .16], [side * 4.9, 3, z], '#1f1a2a');
      block([1.6, .15, .15], [side * 4.25, 6, z], '#1f1a2a');
      block([.65, .14, .45], [side * 3.5, 5.85, z], '#fff1b2', true);
      // Each lamp throws a hard pool of light on the dark street (the B/W dusk reads by contrast, not hue).
      const pool = new THREE.PointLight('#ffffff', 160, 12, 2); pool.position.set(side * 3.3, 5.2, z); street.add(pool);
    }
  }
  // Distant skyline silhouettes at the end of the alley.
  for (let i = 0; i < 9; i++) { const h = 7 + ((i * 7) % 5) * 2.2; block([3.2, h, 2], [-14 + i * 3.5, h / 2, -40], '#2a2140'); }
  // String lights zig-zag across the alley.
  const bulbs = ['#ffd36e', '#ff6fa8', '#8ff0d0', '#ffd36e', '#ff9a5c'];
  for (const z of [-4.5, -9]) {
    const wire = new THREE.Mesh(new THREE.CylinderGeometry(.012, .012, 10, 4), new THREE.MeshBasicMaterial({ color: '#141018' }));
    wire.rotation.z = Math.PI / 2; wire.position.set(0, 5.6, z); street.add(wire);
    for (let x = -4.5, n = 0; x <= 4.5; x += .75, n++) {
      const bulb = new THREE.Mesh(new THREE.SphereGeometry(.08, 8, 6), new THREE.MeshBasicMaterial({ color: bulbs[n % bulbs.length], fog: false }));
      bulb.position.set(x, 5.6 - Math.cos(x / 4.5 * Math.PI / 2) * .45, z); bulb.userData.blink = n; street.add(bulb);
    }
  }
  block([2.3, .18, 4], [-6, 3.7, -2], '#3a2f48');
  for (const z of [-3.7, -.3]) block([.12, 3.6, .12], [-6.8, 1.8, z], '#3a2f48');
  block([.12, 2.8, 3.5], [-7, 1.8, -2], '#7fd4c8', true);
  block([.8, .18, 2.8], [-6.2, .85, -2], '#e5af79');
  block([.7, 1.1, .7], [5.3, .55, 1], '#2d4a46');
  block([2.3, 1.8, 4], [6.6, 1.2, -13], '#c9894f');
  block([2.3, 1.1, 1.5], [6.6, 2, -10.9], '#2e3346');
  const neon = (text: string, w: number, color: string, at: [number, number, number], ry = 0) => {
    const c = document.createElement('canvas'); c.width = 512; c.height = 128;
    const g = c.getContext('2d');
    if (g) { g.fillStyle = '#17121f'; g.fillRect(0, 0, 512, 128); g.font = '900 64px Arial'; g.textAlign = 'center'; g.shadowColor = color; g.shadowBlur = 22; g.fillStyle = color; g.fillText(text, 256, 86); g.fillStyle = '#fff6f0'; g.shadowBlur = 0; g.fillText(text, 256, 84); g.strokeStyle = color; g.lineWidth = 8; g.strokeRect(8, 8, 496, 112); }
    const texture = new THREE.CanvasTexture(c); texture.colorSpace = THREE.SRGBColorSpace;
    const sign = new THREE.Mesh(new THREE.PlaneGeometry(w, w / 4), new THREE.MeshBasicMaterial({ map: texture, fog: false }));
    sign.position.set(...at); sign.rotation.y = ry; sign.userData.neon = true; street.add(sign);
  };
  neon('ПЕРЕУЛОК 02', 4.3, '#ff4fa3', [-5.9, 4.55, -4]);
  neon('ЧЕБУРЕКИ', 3.2, '#5ef0c8', [5.42, 4.2, -7], -Math.PI / 2);
  neon('ШУМ', 2.2, '#ffcf4a', [-5.42, 4.8, -12.5], Math.PI / 2);
  return street;
}
