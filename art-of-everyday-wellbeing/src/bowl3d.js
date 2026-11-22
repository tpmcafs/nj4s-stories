/* A real-time 3D white porcelain bowl that can break into shards, be dragged back together,
   and have its seams drawn in lacquer and then gold. Uses three.js r128 (global THREE). */
(function () {
  const TAU = Math.PI * 2;
  const lerp = (a, b, t) => a + (b - a) * t;
  const clamp = (v, a, b) => Math.max(a, Math.min(b, v));

  // ---- shared profile + fracture pattern -------------------------------------------------
  function resample(poly, K) {
    const d = [0];
    for (let i = 1; i < poly.length; i++) d.push(d[i - 1] + Math.hypot(poly[i][0] - poly[i - 1][0], poly[i][1] - poly[i - 1][1]));
    const L = d[d.length - 1], out = [];
    for (let k = 0; k < K; k++) {
      const s = k / (K - 1) * L; let i = 1; while (i < d.length - 1 && d[i] < s) i++;
      const t = (s - d[i - 1]) / ((d[i] - d[i - 1]) || 1);
      out.push([lerp(poly[i - 1][0], poly[i][0], t), lerp(poly[i - 1][1], poly[i][1], t)]);
    }
    return out;
  }
  function bodyPts(r0, y0, r1, y1, n, inset) {
    const pts = [];
    for (let i = 0; i <= n; i++) {
      const t = i / n;
      const r = r0 + (r1 - r0) * (1 - Math.pow(1 - t, 2.1)) - inset;
      const y = y0 + (y1 - y0) * Math.pow(t, 1.08);
      pts.push([r, y]);
    }
    return pts;
  }
  const K = 72;
  // outer: bottom centre -> foot ring -> body -> rim ; inner: floor centre -> body -> rim
  const OUTER = resample([[0, 0.07], [0.30, 0.07], [0.315, 0.0], [0.41, 0.0], [0.43, 0.1], ...bodyPts(0.43, 0.1, 0.92, 0.98, 30, 0).slice(1)], K);
  const INNER = resample([[0, 0.17], [0.30, 0.17], ...bodyPts(0.385, 0.18, 0.878, 0.98, 30, 0).slice(0)], K);

  function rng(seed) { let s = seed >>> 0; return () => { s = (s * 1664525 + 1013904223) >>> 0; return s / 4294967296; }; }

  function makeBoundaries(seed, bases) {
    const r = rng(seed);
    return bases.map((b) => {
      const p1 = r() * TAU, p2 = r() * TAU, f1 = 1.2 + r() * 1.6, f2 = 3 + r() * 3, A = 0.16 + r() * 0.1;
      let walk = 0; const out = [];
      for (let k = 0; k < K; k++) {
        const s = k / (K - 1);
        walk += (r() - .5) * 0.035; walk *= 0.9;
        const env = Math.pow(s, 0.8);
        out.push(b + env * (A * (0.65 * Math.sin(TAU * f1 * s + p1) + 0.35 * Math.sin(TAU * f2 * s + p2)) + walk));
      }
      return out;
    });
  }

  const P = (r, y, th) => new THREE.Vector3(r * Math.cos(th), y, r * Math.sin(th));

  function shardGeometry(B0, B1, M) {
    const pos = [], idx = [], groups = [];
    const push = (v) => { pos.push(v.x, v.y, v.z); return pos.length / 3 - 1; };
    // glaze surfaces
    const grid = (prof, flip) => {
      const base = pos.length / 3;
      for (let k = 0; k < K; k++) for (let m = 0; m <= M; m++) push(P(prof[k][0], prof[k][1], lerp(B0[k], B1[k], m / M)));
      for (let k = 0; k < K - 1; k++) for (let m = 0; m < M; m++) {
        const a = base + k * (M + 1) + m, b = a + 1, c = a + (M + 1), d = c + 1;
        if (flip) idx.push(a, c, b, b, c, d); else idx.push(a, b, c, b, d, c);
      }
    };
    const g0 = idx.length;
    grid(OUTER, false); grid(INNER, true);
    // rim
    { const base = pos.length / 3, k = K - 1;
      for (let m = 0; m <= M; m++) { const th = lerp(B0[k], B1[k], m / M);
        push(P(OUTER[k][0], OUTER[k][1], th)); push(P((OUTER[k][0] + INNER[k][0]) / 2, OUTER[k][1] + 0.012, th)); push(P(INNER[k][0], INNER[k][1], th)); }
      for (let m = 0; m < M; m++) { const a = base + m * 3, n = a + 3; idx.push(a, n, a + 1, a + 1, n, n + 1, a + 1, n + 1, a + 2, a + 2, n + 1, n + 2); }
    }
    groups.push([g0, idx.length - g0, 0]);
    // fracture faces (unglazed)
    const g1 = idx.length;
    [B0, B1].forEach((B, side) => {
      for (let k = 0; k < K - 1; k++) {
        const a = push(P(OUTER[k][0], OUTER[k][1], B[k])), b = push(P(OUTER[k + 1][0], OUTER[k + 1][1], B[k + 1]));
        const c = push(P(INNER[k + 1][0], INNER[k + 1][1], B[k + 1])), d = push(P(INNER[k][0], INNER[k][1], B[k]));
        if (side) idx.push(a, b, c, a, c, d); else idx.push(a, c, b, a, d, c);
      }
      const k = K - 1;
      const a = push(P(OUTER[k][0], OUTER[k][1], B[k])), b = push(P((OUTER[k][0] + INNER[k][0]) / 2, OUTER[k][1] + 0.012, B[k])), c = push(P(INNER[k][0], INNER[k][1], B[k]));
      idx.push(a, b, c);
    });
    groups.push([g1, idx.length - g1, 1]);
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.Float32BufferAttribute(pos, 3));
    geo.setIndex(idx);
    groups.forEach(([s, c, m]) => geo.addGroup(s, c, m));
    geo.computeVertexNormals();
    return geo;
  }

  function seamCurve(B, prof, out) {
    const pts = [];
    for (let k = K - 1; k >= 2; k--) {
      const [r, y] = prof[k], th = B[k];
      const rr = out ? r + 0.004 : r - 0.004;
      pts.push(P(Math.max(rr, 0.001), y + (out ? 0 : 0.003), th));
    }
    return new THREE.CatmullRomCurve3(pts, false, "centripetal");
  }

  // ---- environment ----------------------------------------------------------------------
  function envMap(renderer) {
    // studio light painted on a canvas (equirectangular), prefiltered for reflections
    const c = document.createElement("canvas"); c.width = 1024; c.height = 512; const g = c.getContext("2d");
    const gr = g.createLinearGradient(0, 0, 0, 512);
    gr.addColorStop(0, "#f4f1ea"); gr.addColorStop(.45, "#cfccc6"); gr.addColorStop(.55, "#4a4a50"); gr.addColorStop(1, "#18181c");
    g.fillStyle = gr; g.fillRect(0, 0, 1024, 512);
    const soft = (x, y, w, h, a) => { g.save(); g.filter = "blur(14px)"; g.fillStyle = `rgba(255,255,255,${a})`; g.fillRect(x, y, w, h); g.restore(); };
    soft(120, 90, 220, 120, 1); soft(620, 140, 120, 200, .85); soft(860, 60, 120, 60, .9); soft(0, 20, 1024, 26, .5);
    const tex = new THREE.CanvasTexture(c); tex.mapping = THREE.EquirectangularReflectionMapping; tex.encoding = THREE.sRGBEncoding;
    const pm = new THREE.PMREMGenerator(renderer); pm.compileEquirectangularShader();
    const out = pm.fromEquirectangular(tex).texture; pm.dispose(); tex.dispose(); renderer.setRenderTarget(null);
    return out;
  }
  function shadowTex() {
    const c = document.createElement("canvas"); c.width = c.height = 256; const g = c.getContext("2d");
    const gr = g.createRadialGradient(128, 128, 10, 128, 128, 128);
    gr.addColorStop(0, "rgba(0,0,0,.55)"); gr.addColorStop(.45, "rgba(0,0,0,.22)"); gr.addColorStop(1, "rgba(0,0,0,0)");
    g.fillStyle = gr; g.fillRect(0, 0, 256, 256); return new THREE.CanvasTexture(c);
  }

  const ALL = [];
  class Bowl3D {
    constructor(host, opt = {}) {
      this.opt = Object.assign({ seed: 7, bases: [0.3, 1.95, 3.5, 4.9], autoRotate: 0.12, tilt: 0.42, scale: 1, draggable: false, fov: 26, camY: 2.1, camZ: 4.7, target: 0.42 }, opt);
      this.host = host;
      const canvas = document.createElement("canvas"); canvas.className = "b3d"; host.appendChild(canvas); this.canvas = canvas;
      const r = this.renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, preserveDrawingBuffer: false });
      r.outputEncoding = THREE.sRGBEncoding; r.toneMapping = THREE.ACESFilmicToneMapping; r.toneMappingExposure = 1.05;
      r.setClearColor(0x000000, 0);
      const scene = this.scene = new THREE.Scene();
      scene.environment = envMap(r);
      this.camera = new THREE.PerspectiveCamera(this.opt.fov, 1, 0.1, 50);
      this.camera.position.set(0, this.opt.camY, this.opt.camZ); this.camera.lookAt(0, this.opt.target, 0);
      scene.add(new THREE.HemisphereLight(0xffffff, 0x404048, 0.35));
      const key = new THREE.DirectionalLight(0xffffff, 0.9); key.position.set(-2, 4, 3); scene.add(key);
      const rim = new THREE.DirectionalLight(0xfff1d6, 0.5); rim.position.set(3, 2, -3); scene.add(rim);

      this.root = new THREE.Group(); this.root.scale.setScalar(this.opt.scale); scene.add(this.root);
      this.spin = new THREE.Group(); this.root.add(this.spin);
      const sh = new THREE.Mesh(new THREE.PlaneGeometry(3.1, 3.1), new THREE.MeshBasicMaterial({ map: shadowTex(), transparent: true, depthWrite: false }));
      sh.rotation.x = -Math.PI / 2; sh.position.y = -0.002; this.root.add(sh); this.shadow = sh;

      this.glaze = new THREE.MeshPhysicalMaterial({ color: 0xf6f3ec, roughness: 0.16, metalness: 0, clearcoat: 1, clearcoatRoughness: 0.06, envMapIntensity: 1.0, side: THREE.DoubleSide });
      this.biscuit = new THREE.MeshStandardMaterial({ color: 0xe2dccd, roughness: 0.92, metalness: 0, side: THREE.DoubleSide });

      const B = this.B = makeBoundaries(this.opt.seed, this.opt.bases);
      const N = B.length;
      this.shards = [];
      for (let j = 0; j < N; j++) {
        const B0 = B[j], B1 = B[(j + 1) % N].map(v => j + 1 === N ? v + TAU : v);
        const span = (B1[K - 1] - B0[K - 1]);
        const geo = shardGeometry(B0, B1, Math.max(10, Math.round(span / TAU * 120)));
        geo.computeBoundingBox(); const c = new THREE.Vector3(); geo.boundingBox.getCenter(c);
        const mesh = new THREE.Mesh(geo, [this.glaze, this.biscuit]);
        mesh.position.copy(c).multiplyScalar(-1);
        const pivot = new THREE.Group(); pivot.position.copy(c); pivot.add(mesh); this.spin.add(pivot);
        const mid = (B0[K - 1] + B1[K - 1]) / 2;
        const out = new THREE.Vector3(Math.cos(mid), 0, Math.sin(mid));
        const rnd = rng(this.opt.seed * 31 + j);
        pivot.userData = { home: c.clone(), mid, out, e: 0, te: 0, off: new THREE.Vector3(), toff: new THREE.Vector3(), lift: 0.12 + rnd() * 0.2, spinA: (rnd() - .5) * 0.9, idx: j, joined: true };
        mesh.userData.pivot = pivot;
        this.shards.push(pivot);
      }
      // seams: one per boundary, outer + inner, plus fat invisible hit tubes
      this.lacquer = new THREE.Color(0x24160d); this.goldC = new THREE.Color(0xe0b04a);
      this.seams = [];
      for (let j = 0; j < N; j++) {
        const mat = new THREE.MeshStandardMaterial({ color: 0x24160d, metalness: 0, roughness: 0.32, envMapIntensity: 1.3 });
        const parts = [true, false].map(o => {
          const curve = seamCurve(B[j], o ? OUTER : INNER, o);
          const thin = new THREE.Mesh(new THREE.TubeGeometry(curve, 140, 0.0085, 6, false), mat);
          const fat = new THREE.Mesh(new THREE.TubeGeometry(curve, 140, 0.015, 6, false), mat);
          const hit = new THREE.Mesh(new THREE.TubeGeometry(curve, 40, 0.07, 5, false), new THREE.MeshBasicMaterial({ transparent: true, opacity: 0, depthWrite: false, colorWrite: false }));
          hit.userData.seam = j;
          [thin, fat, hit].forEach(m => this.spin.add(m));
          return { curve, thin, fat, hit };
        });
        this.seams.push({ j, mat, parts, p: 0, tp: 0, gold: 0, tgold: 0, fat: 0, tfat: 0, label: null });
      }
      this.rotY = this.opt.rot0 || 0.6; this.rotX = 0; this.vel = this.opt.autoRotate;
      this.active = false; this.t = 0;
      this.ray = new THREE.Raycaster(); this.pt = new THREE.Vector2();
      this.bindPointer();
      this.resize();
      ALL.push(this);
      this.setAll({ e: 0, seams: 0 }, true);
    }
    resize() {
      const w = this.host.clientWidth || 600, h = this.host.clientHeight || 400;
      const s = window.__stageScale || 1;
      this.renderer.setPixelRatio(Math.min(2, (window.devicePixelRatio || 1) * s));
      this.renderer.setSize(w, h, false);
      this.canvas.style.width = w + "px"; this.canvas.style.height = h + "px";
      this.camera.aspect = w / h; this.camera.updateProjectionMatrix();
    }
    // e: explode amount (0 together .. 1 apart); seams: draw progress; gold: 0 lacquer .. 1 gold; fat: thickness
    setAll(o, instant) {
      this.shards.forEach(s => { if (o.e !== undefined) { s.userData.te = o.e; if (o.e === 0) s.userData.toff.set(0, 0, 0); s.userData.joined = o.e === 0; } if (instant) { s.userData.e = s.userData.te; s.userData.off.copy(s.userData.toff); } });
      this.seams.forEach((m, i) => {
        if (o.seams !== undefined) m.tp = o.seams; if (o.gold !== undefined) m.tgold = o.gold; if (o.fat !== undefined) m.tfat = o.fat;
        if (o.delay) m.delay = performance.now() + o.delay + i * (o.stagger || 0);
        if (instant) { m.p = m.tp; m.gold = m.tgold; m.fat = m.tfat; }
      });
    }
    setSeam(j, o) { const m = this.seams[j]; Object.assign(m, o); }
    scatter(seedShift = 0) { // place shards apart at irregular spots on the "table"
      this.shards.forEach((s, i) => {
        const d = s.userData, r = rng(this.opt.seed + 99 + i + seedShift);
        d.te = 1; d.joined = false;
        d.toff.set(d.out.x * (0.15 + r() * 0.25) + (r() - .5) * 0.15, 0, d.out.z * (0.15 + r() * 0.25) + (r() - .5) * 0.15);
      });
    }
    bindPointer() {
      const c = this.canvas; let drag = null;
      const toNDC = (e) => { const b = c.getBoundingClientRect(); this.pt.set((e.clientX - b.left) / b.width * 2 - 1, -((e.clientY - b.top) / b.height) * 2 + 1); };
      c.addEventListener("pointerdown", (e) => {
        if (!this.active) return;
        e.stopPropagation(); c.setPointerCapture(e.pointerId);
        toNDC(e); this.ray.setFromCamera(this.pt, this.camera);
        const hits = this.ray.intersectObjects(this.spin.children, true);
        const seamHit = hits.find(h => h.object.userData.seam !== undefined && this.seams[h.object.userData.seam].p > .9);
        const shardHit = hits.find(h => h.object.userData.pivot);
        drag = { x: e.clientX, y: e.clientY, moved: 0, mode: "rot", rotY: this.rotY, rotX: this.rotX, t: performance.now() };
        if (this.opt.draggable && shardHit && !shardHit.object.userData.pivot.userData.joined) {
          const pv = shardHit.object.userData.pivot; drag.mode = "shard"; drag.pv = pv;
          const n = new THREE.Vector3(0, 1, 0); const plane = new THREE.Plane(n, -shardHit.point.y);
          drag.plane = plane; drag.start = shardHit.point.clone(); drag.off0 = pv.userData.toff.clone();
          this.onShardGrab && this.onShardGrab(pv.userData.idx);
        } else if (seamHit && this.onSeamTap) { drag.seam = seamHit.object.userData.seam; }
        else if (shardHit) drag.shardTap = shardHit.object.userData.pivot.userData.idx;
      });
      c.addEventListener("pointermove", (e) => {
        if (!drag) return; e.stopPropagation();
        drag.moved = Math.max(drag.moved, Math.hypot(e.clientX - drag.x, e.clientY - drag.y));
        if (drag.mode === "rot") {
          this.rotY = drag.rotY + (e.clientX - drag.x) * 0.008; this.rotX = clamp(drag.rotX + (e.clientY - drag.y) * 0.004, -0.35, 0.5);
          this.vel = 0;
        } else {
          toNDC(e); this.ray.setFromCamera(this.pt, this.camera);
          const hitP = new THREE.Vector3(); if (!this.ray.ray.intersectPlane(drag.plane, hitP)) return;
          const delta = hitP.sub(drag.start); // world delta -> spin local
          const inv = new THREE.Matrix4().copy(this.spin.matrixWorld).invert(); const d0 = new THREE.Vector3(0, 0, 0).applyMatrix4(inv);
          const d1 = delta.clone().applyMatrix4(inv).sub(d0);
          const ud = drag.pv.userData; ud.toff.copy(drag.off0).add(d1); ud.off.copy(ud.toff);
          const dist = ud.toff.length() + ud.e * 0.5;
          if (dist < 0.32) { ud.te = 0; ud.toff.set(0, 0, 0); ud.joined = true; drag = null; this.onShardHome && this.onShardHome(ud.idx); }
          else if (ud.te > 0.4) ud.te = Math.max(0.4, ud.te - 0.02);
        }
      });
      const end = (e) => {
        if (!drag) return; e.stopPropagation();
        if (drag.moved < 8) {
          if (drag.seam !== undefined) { const b = c.getBoundingClientRect(); this.onSeamTap(drag.seam, e.clientX - b.left, e.clientY - b.top); }
          else this.onTap && this.onTap(drag.shardTap);
        }
        if (drag.mode === "rot") this.vel = drag.moved > 8 ? 0 : this.vel;
        if (drag.mode === "rot" && drag.moved > 8) setTimeout(() => this.vel = this.opt.autoRotate, 2500);
        drag = null;
      };
      c.addEventListener("pointerup", end); c.addEventListener("pointercancel", end);
      c.addEventListener("click", e => e.stopPropagation());
    }
    seamScreen(j, s = 0.3) { // position in host px of a point along seam j (outer)
      const p = this.seams[j].parts[0].curve.getPoint(s).clone();
      p.applyMatrix4(this.spin.matrixWorld).project(this.camera);
      return { x: (p.x + 1) / 2 * this.host.clientWidth, y: (1 - p.y) / 2 * this.host.clientHeight, front: p.z < 1 };
    }
    frame(dt) {
      this.t += dt;
      this.rotY += this.vel * dt;
      this.spin.rotation.y = this.rotY; this.root.rotation.x = this.opt.tilt * 0 + this.rotX;
      const k = 1 - Math.pow(0.0025, dt);
      this.shards.forEach((s) => {
        const d = s.userData;
        d.e += (d.te - d.e) * k * 0.9; d.off.lerp(d.toff, k);
        const e = d.e;
        s.position.copy(d.home).addScaledVector(d.out, e * 0.62).add(d.off);
        s.position.y += Math.sin(Math.min(1, e) * Math.PI) * d.lift * 1.2 + e * (0.02 - d.home.y * 0.6);
        s.rotation.set(0, 0, 0);
        s.rotateOnAxis(new THREE.Vector3(-d.out.z, 0, d.out.x), e * 0.32);
        s.rotateOnAxis(new THREE.Vector3(0, 1, 0), e * d.spinA);
      });
      const now = performance.now();
      const together = this.shards.every(s => s.userData.e < 0.03 && s.userData.off.length() < 0.01);
      this.seams.forEach((m) => {
        if (m.delay && now < m.delay) return;
        const tp = together ? m.tp : 0;
        m.p += (tp - m.p) * Math.min(1, dt * 1.6) + Math.sign(tp - m.p) * Math.min(Math.abs(tp - m.p), dt * 0.25);
        m.gold += (m.tgold - m.gold) * Math.min(1, dt * 1.8);
        m.fat += (m.tfat - m.fat) * Math.min(1, dt * 2.5);
        m.mat.color.copy(this.lacquer).lerp(this.goldC, m.gold);
        m.mat.metalness = m.gold; m.mat.roughness = lerp(0.35, 0.22, m.gold);
        m.mat.emissive = m.mat.emissive || new THREE.Color(); m.mat.emissive.setRGB(0.22 * m.gold * (0.75 + 0.25 * Math.sin(this.t * 2.2 + m.j)), 0.15 * m.gold * (0.75 + 0.25 * Math.sin(this.t * 2.2 + m.j)), 0.02 * m.gold);
        m.parts.forEach(pt => {
          [pt.thin, pt.fat].forEach((mesh, i) => {
            const n = mesh.geometry.index.count, show = Math.floor(n * clamp(m.p, 0, 1) / 3) * 3;
            mesh.geometry.setDrawRange(0, show);
            mesh.visible = show > 0 && (i ? m.fat > 0.5 : m.fat <= 0.5);
          });
        });
      });
      this.renderer.render(this.scene, this.camera);
      this.onFrame && this.onFrame();
    }
  }
  let last = performance.now();
  function loop(now) {
    const dt = Math.min(0.05, (now - last) / 1000); last = now;
    ALL.forEach(b => { if (b.active) b.frame(dt); });
    requestAnimationFrame(loop);
  }
  requestAnimationFrame(loop);
  window.Bowl3D = Bowl3D; window.__bowls = ALL;
})();
