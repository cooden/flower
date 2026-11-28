// ===== Three.js 背景微光粒子（漂浮的金色/玫瑰金光点） =====
(function () {
  const container = document.getElementById('three-bg');
  if (!container || typeof THREE === 'undefined') return;

  // 检测 WebGL 支持，不支持则静默跳过
  function hasWebGL() {
    try {
      const c = document.createElement('canvas');
      return !!(window.WebGLRenderingContext && (c.getContext('webgl') || c.getContext('experimental-webgl')));
    } catch (e) { return false; }
  }
  if (!hasWebGL()) return;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 1000);
  camera.position.z = 120;

  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.setSize(window.innerWidth, window.innerHeight);
  container.appendChild(renderer.domElement);

  // 生成柔和发光圆点纹理
  function makeSprite(r, g, b) {
    const c = document.createElement('canvas');
    c.width = c.height = 64;
    const ctx = c.getContext('2d');
    const grad = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
    grad.addColorStop(0, `rgba(${r},${g},${b},1)`);
    grad.addColorStop(0.35, `rgba(${r},${g},${b},0.55)`);
    grad.addColorStop(1, `rgba(${r},${g},${b},0)`);
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 64, 64);
    return new THREE.CanvasTexture(c);
  }

  // 创建一层粒子
  function createLayer(count, size, rgb, opacity, spreadX, spreadY, depth) {
    const geo = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * spreadX;
      positions[i * 3 + 1] = (Math.random() - 0.5) * spreadY;
      positions[i * 3 + 2] = (Math.random() - 0.5) * depth;
    }
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const mat = new THREE.PointsMaterial({
      size: size,
      map: makeSprite(rgb[0], rgb[1], rgb[2]),
      transparent: true,
      depthWrite: false,
      sizeAttenuation: false,
      opacity: opacity
    });
    return new THREE.Points(geo, mat);
  }

  // 三层粒子：大金点 / 中玫瑰金 / 细香槟微尘
  const layers = [
    createLayer(22, 12, [200, 169, 137], 0.35, 220, 150, 60),
    createLayer(48, 7,  [168, 133, 96],  0.5,  260, 180, 80),
    createLayer(100, 3.5,[212, 184, 150], 0.6, 300, 200, 100)
  ];
  layers.forEach(l => scene.add(l));

  const clock = new THREE.Clock();
  let mouseX = 0, mouseY = 0;

  window.addEventListener('pointermove', (e) => {
    mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
    mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
  }, { passive: true });

  function animate() {
    requestAnimationFrame(animate);
    const t = clock.getElapsedTime();

    // 每层轻微浮动 + 旋转，营造漂浮感
    layers.forEach((layer, i) => {
      layer.rotation.z = Math.sin(t * 0.12 + i * 2.1) * 0.06;
      layer.position.y = Math.sin(t * 0.25 + i * 1.7) * 7;
      layer.position.x = Math.cos(t * 0.18 + i * 2.9) * 5;
    });

    // 轻微视差跟随
    camera.position.x += (mouseX * 4 - camera.position.x) * 0.03;
    camera.position.y += (-mouseY * 3 - camera.position.y) * 0.03;
    camera.lookAt(scene.position);

    renderer.render(scene, camera);
  }

  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });

  animate();
})();
