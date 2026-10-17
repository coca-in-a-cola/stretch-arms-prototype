import * as THREE from 'three';

/**
 * Level 3 backdrop: a 1930s speakeasy. The painted B/W bar (gen_bar_backdrop.png) hangs at the back as a plane;
 * floor, side walls, ceiling beams, stools and lamps are cheap 3D so depth and shadows still read.
 * Built with plain paint; main.ts runs greyscaleWorld() on it like every other level.
 */
export function makeBar(backdrop: THREE.Texture) {
  const bar = new THREE.Group();
  const mat = (color: string) => new THREE.MeshStandardMaterial({ color, roughness: .85 });
  function block(size: readonly [number, number, number], at: readonly [number, number, number], color: string) {
    const mesh = new THREE.Mesh(new THREE.BoxGeometry(...size), mat(color));
    mesh.position.set(...at); mesh.castShadow = mesh.receiveShadow = true; bar.add(mesh); return mesh;
  }
  // Chequered floor, painted on a canvas (greyed later with the rest of the world).
  const c = document.createElement('canvas'); c.width = c.height = 128; const g = c.getContext('2d');
  if (g) { g.fillStyle = '#d9d4c8'; g.fillRect(0, 0, 128, 128); g.fillStyle = '#3b3733'; g.fillRect(0, 0, 64, 64); g.fillRect(64, 64, 64, 64); }
  const tiles = new THREE.CanvasTexture(c); tiles.wrapS = tiles.wrapT = THREE.RepeatWrapping; tiles.repeat.set(14, 11); tiles.colorSpace = THREE.SRGBColorSpace; tiles.anisotropy = 4;
  const floor = new THREE.Mesh(new THREE.PlaneGeometry(28, 22), new THREE.MeshStandardMaterial({ map: tiles, roughness: .6 }));
  floor.rotation.x = -Math.PI / 2; floor.position.set(0, 0, 1.6); floor.receiveShadow = true; bar.add(floor);
  // The painting: bottom edge sunk below the floor so its own painted floor line meets ours.
  const paint = new THREE.Mesh(new THREE.PlaneGeometry(21, 21), new THREE.MeshBasicMaterial({ map: backdrop, fog: false }));
  paint.position.set(0, 21 / 2 - 4.6, -9.4); bar.add(paint);
  for (const side of [-1, 1]) {
    block([.4, 12, 18], [side * 10.4, 6, 0], side < 0 ? '#5d554c' : '#4d463f'); // side walls close the frame
    for (let z = -8; z < 8; z += 2.2) block([.06, 2.2, .14], [side * 10.18, 1.1, z], '#2f2a26'); // wainscot battens
  }
  for (let z = -8; z <= 6; z += 3.5) block([22, .45, .5], [0, 8.2, z], '#2a2622'); // ceiling beams
  block([22, .2, 18], [0, 8.6, -.5], '#1b1917');
  // Bar stools along the counter and the hat's own stool front-and-centre.
  const stool = (x: number, z: number, h: number) => {
    block([.12, h, .12], [x, h / 2, z], '#2f2a26');
    const seat = new THREE.Mesh(new THREE.CylinderGeometry(.32, .3, .14, 18), mat('#7a3b2f')); seat.position.set(x, h, z); seat.castShadow = seat.receiveShadow = true; bar.add(seat);
    const ring = new THREE.Mesh(new THREE.TorusGeometry(.24, .025, 6, 18), mat('#9a9a9a')); ring.rotation.x = Math.PI / 2; ring.position.set(x, h * .35, z); bar.add(ring);
  };
  for (const x of [-2.3, 2.7]) stool(x, -1.55, .95);
  stool(.95, 3.45, .7);
  // Hanging lamps: bright shades and hard pools of light (contrast, not hue).
  for (const x of [-3, 2.5]) {
    const cord = new THREE.Mesh(new THREE.CylinderGeometry(.015, .015, 2.6, 4), new THREE.MeshBasicMaterial({ color: '#111111' })); cord.position.set(x, 7.1, -3.2); bar.add(cord);
    const shade = new THREE.Mesh(new THREE.ConeGeometry(.55, .45, 18, 1, true), new THREE.MeshBasicMaterial({ color: '#f4efe0', side: THREE.DoubleSide })); shade.position.set(x, 5.7, -3.2); bar.add(shade);
    const pool = new THREE.PointLight('#ffffff', 55, 11, 1.6); pool.position.set(x, 5.2, -3.2); bar.add(pool);
  }
  // Swinging saloon doors in the back doorway, flapping on their own.
  for (const side of [-1, 1]) {
    const hinge = new THREE.Group(); hinge.position.set(side < 0 ? 3.55 : 5.35, 0, -7.2); bar.add(hinge);
    const leaf = new THREE.Mesh(new THREE.BoxGeometry(.85, 1.25, .06), mat('#8e6b4a')); leaf.position.set(-side * .44, 1.2, 0); leaf.castShadow = true; hinge.add(leaf);
    hinge.userData.swing = side;
  }
  return bar;
}
