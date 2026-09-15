import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import brainCubeImg from '../assets/brain-cube.png';

export const BrainCube3D: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const W = container.clientWidth || 320;
    const H = container.clientHeight || 320;

    // ── Renderer ──────────────────────────────────────────────
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,        // transparent background
    });
    renderer.setSize(W, H);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(renderer.domElement);

    // ── Scene ──────────────────────────────────────────────────
    const scene = new THREE.Scene();

    // ── Camera ─────────────────────────────────────────────────
    const camera = new THREE.PerspectiveCamera(45, W / H, 0.1, 100);
    camera.position.set(0, 0, 3.5);

    // ── Lights ─────────────────────────────────────────────────
    // Ambient – base illumination
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.55);
    scene.add(ambientLight);

    // Key light – warm from upper-right
    const keyLight = new THREE.DirectionalLight(0xffffff, 1.2);
    keyLight.position.set(3, 4, 5);
    keyLight.castShadow = true;
    scene.add(keyLight);

    // Fill light – cool green tint from left
    const fillLight = new THREE.DirectionalLight(0x00c87a, 0.45);
    fillLight.position.set(-3, 0, 2);
    scene.add(fillLight);

    // Rim light – backlit green edge glow
    const rimLight = new THREE.PointLight(0x10b981, 1.8, 8);
    rimLight.position.set(0, -2, -3);
    scene.add(rimLight);

    // ── Texture ────────────────────────────────────────────────
    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load(brainCubeImg);
    texture.colorSpace = THREE.SRGBColorSpace;

    // ── Main 3D Mesh ───────────────────────────────────────────
    // Use a rounded-box-like geometry: IcosahedronGeometry gives
    // organic depth; subdivided enough to look smooth.
    // We use a SphereGeometry but squished slightly to match the
    // roughly square proportions of the brain-cube illustration.
    const geometry = new THREE.SphereGeometry(1.1, 64, 64);
    // Squish into a cube-ish bounding box: sx=1, sy=0.95, sz=0.7
    const posAttr = geometry.attributes.position;
    for (let i = 0; i < posAttr.count; i++) {
      const x = posAttr.getX(i);
      const y = posAttr.getY(i);
      const z = posAttr.getZ(i);
      // Compress Z to make it look like a thick coin / rounded slab
      posAttr.setXYZ(i, x * 1.0, y * 0.95, z * 0.55);
    }
    geometry.computeVertexNormals();

    const material = new THREE.MeshStandardMaterial({
      map: texture,
      roughness: 0.35,
      metalness: 0.10,
      envMapIntensity: 0.8,
    });

    const mesh = new THREE.Mesh(geometry, material);
    mesh.castShadow = true;
    scene.add(mesh);

    // ── Optional: subtle particle glow plane behind mesh ───────
    // (a large, slightly transparent plane with a radial green gradient
    //  baked into a canvas texture)
    const glowCanvas = document.createElement('canvas');
    glowCanvas.width = 256; glowCanvas.height = 256;
    const ctx = glowCanvas.getContext('2d')!;
    const grad = ctx.createRadialGradient(128, 128, 0, 128, 128, 128);
    grad.addColorStop(0,   'rgba(16,185,129,0.35)');
    grad.addColorStop(0.5, 'rgba(16,185,129,0.08)');
    grad.addColorStop(1,   'rgba(16,185,129,0)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 256, 256);
    const glowTex = new THREE.CanvasTexture(glowCanvas);
    const glowPlane = new THREE.Mesh(
      new THREE.PlaneGeometry(3.5, 3.5),
      new THREE.MeshBasicMaterial({ map: glowTex, transparent: true, depthWrite: false }),
    );
    glowPlane.position.z = -0.9;
    scene.add(glowPlane);

    // ── Animation loop ─────────────────────────────────────────
    let frameId: number;
    let t = 0;

    const animate = () => {
      frameId = requestAnimationFrame(animate);
      t += 0.008;

      // Y rotation (horizontal spin)
      mesh.rotation.y = t;
      // Subtle X wobble for organic feel (±8°)
      mesh.rotation.x = Math.sin(t * 0.4) * 0.14;

      // Pulsing rim light intensity
      rimLight.intensity = 1.8 + Math.sin(t * 1.5) * 0.8;

      // Glow plane slowly rotates opposite direction
      glowPlane.rotation.z = -t * 0.25;

      renderer.render(scene, camera);
    };
    animate();

    // ── Cleanup ────────────────────────────────────────────────
    return () => {
      cancelAnimationFrame(frameId);
      renderer.dispose();
      geometry.dispose();
      material.dispose();
      texture.dispose();
      glowTex.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        width: '320px',
        height: '320px',
        flexShrink: 0,
        borderRadius: '50%',
        overflow: 'visible',
      }}
    />
  );
};
