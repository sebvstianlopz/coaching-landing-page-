/* ============================================================
   CONFIGURACIÓN DE WHATSAPP
   Cambia el número aquí (código de país + número, solo dígitos).
   Puerto Rico: 1 + 787 o 939 + número. Ejemplo: '17875551234'.
   El enlace de cada botón de la página se arma desde aquí.
   ============================================================ */
const WHATSAPP_NUMERO = '17870000000'; // MARCADOR: reemplazar con el número real de Jan
const WHATSAPP_MENSAJE = '¡Hola Jan! Vi tu página y quiero agendar una llamada para empezar con el coaching híbrido.';

(() => {
  const numero = String(WHATSAPP_NUMERO).replace(/\D/g, '');
  const url = `https://wa.me/${numero}?text=${encodeURIComponent(WHATSAPP_MENSAJE)}`;
  // En el teléfono (y en el navegador de Instagram) se abre en la misma pestaña para que
  // WhatsApp tome el enlace directo; en computadora se abre aparte y la página queda abierta.
  const desktop = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  document.querySelectorAll('[data-wa]').forEach((a) => {
    a.href = url;
    if (desktop) { a.target = '_blank'; a.rel = 'noopener'; }
  });
  document.querySelectorAll('[data-year]').forEach((el) => { el.textContent = new Date().getFullYear(); });
})();

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---------- Transformaciones ---------- */
(() => {
  const list = document.getElementById('lista-resultados');
  const raw = Array.isArray(window.TRANSFORMACIONES) ? window.TRANSFORMACIONES : [];
  const data = raw.filter((t) => t && typeof t === 'object' && (t.titulo || t.antes || t.despues));
  const section = document.getElementById('resultados');
  if (!list) return;
  if (!data.length) {
    // Sin transformaciones: se esconde la sección y todo enlace que apunte a ella.
    section.hidden = true;
    document.querySelectorAll('a[href="#resultados"]').forEach((a) => { a.hidden = true; });
    return;
  }

  const drawings = [
    { use: 'd-pesa', cls: 'c-pesa', fit: 'xMidYMax meet' },
    { use: 'd-pista', cls: 'c-pista', fit: 'xMinYMax slice' },
    { use: 'd-disco', cls: 'c-disco', fit: 'xMidYMid slice' }
  ];

  const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

  const sampleWord = (kind) => `<span class="ba-sample" aria-hidden="true">${kind === 'antes' ? 'Antes' : 'Después'}</span>`;
  const layer = (src, kind, alt) => src
    ? `<img src="${esc(src)}" alt="${kind === 'antes' ? esc(alt) : ''}" width="1200" height="1500" loading="lazy" decoding="async" draggable="false">${sampleWord(kind)}`
    : sampleWord(kind);

  data.forEach((t, i) => {
    const sample = !t.antes || !t.despues;
    const [first, ...rest] = String(t.titulo || '').split(',');
    const title = rest.length ? `${esc(first)},<br>${esc(rest.join(',').trim())}` : esc(first);
    const d = drawings[i % drawings.length];
    const extra = t.extra
      ? `<img src="${esc(t.extra)}" alt="" width="1600" height="1000" loading="lazy" decoding="async">`
      : `<div class="cell ${d.cls}" aria-hidden="true"><svg preserveAspectRatio="${d.fit}"><use href="#${d.use}"/></svg></div>`;

    const el = document.createElement('article');
    el.setAttribute('aria-label', String(t.titulo || 'Transformación'));
    el.className = `case case-${(i % 3) + 1}${sample ? ' is-sample' : ''}`;
    el.innerHTML = `
      <div class="case-visual">
        <figure class="ba" data-pos="50" data-reveal>
          <div class="ba-layer ba-after">${layer(t.despues, 'despues', t.alt)}</div>
          <div class="ba-layer ba-before">${layer(t.antes, 'antes', t.alt)}</div>
          <span class="ba-tag ba-tag-before" aria-hidden="true">Antes</span>
          <span class="ba-tag ba-tag-after" aria-hidden="true">Después</span>
          <span class="ba-handle" aria-hidden="true"><span class="ba-knob"><svg viewBox="0 0 24 24" width="22" height="22"><path d="M9 6 3 12l6 6zM15 6l6 6-6 6z" fill="currentColor"/></svg></span></span>
          <input class="ba-range" type="range" min="0" max="100" value="50" step="1"
            aria-label="Comparar antes y después: ${esc(t.titulo)}" aria-valuetext="Mitad antes, mitad después">
        </figure>
      </div>
      <div class="case-cluster">
        <div class="case-extra" data-reveal style="--d:1">${extra}</div>
        <div class="case-text">
          <h3 class="case-title" data-reveal style="--d:2">${title}</h3>
          <p class="case-desc" data-reveal style="--d:3">${esc(t.descripcion)}</p>
        </div>
      </div>`;
    list.appendChild(el);
  });

  /* Una foto que no carga (ruta mal escrita, archivo borrado) deja ver el recuadro de muestra en vez de un hueco. */
  list.querySelectorAll('img').forEach((img) => {
    const extraSlot = img.closest('.case-extra');
    const fail = () => {
      img.remove();
      if (extraSlot) extraSlot.hidden = true;
    };
    if (img.complete && img.naturalWidth === 0 && img.currentSrc) fail();
    else img.addEventListener('error', fail, { once: true });
  });

  /* Deslizador antes / después: arrastre horizontal, toque y teclado. */
  list.querySelectorAll('.ba').forEach((fig, idx) => {
    const range = fig.querySelector('.ba-range');
    const before = fig.querySelector('.ba-before');
    const handle = fig.querySelector('.ba-handle');
    let dragging = false;
    let touched = false;
    let raf = 0;

    const set = (v) => {
      const p = Math.max(0, Math.min(100, v));
      // Estilo directo en cada capa (no una variable en el padre): solo se recalculan estas dos.
      before.style.clipPath = `inset(0 ${100 - p}% 0 0)`;
      handle.style.transform = `translateX(${p}%)`;
      fig.dataset.pos = p.toFixed(1);
      range.value = Math.round(p);
      const r = Math.round(p);
      range.setAttribute('aria-valuetext', r <= 2 ? 'Solo después' : r >= 98 ? 'Solo antes' : `${r} % antes, ${100 - r} % después`);
    };
    const fromEvent = (e) => {
      const r = fig.getBoundingClientRect();
      return ((e.clientX - r.left) / r.width) * 100;
    };

    /* Ratón: la línea salta al clic. Dedo: solo se mueve cuando el gesto es claramente
       horizontal, así hacer scroll por encima de la foto no mueve la línea. */
    let pending = null;
    const start = (e) => {
      dragging = true; touched = true; pending = null;
      cancelAnimationFrame(raf);
      fig.classList.add('is-dragging');
      try { fig.setPointerCapture(e.pointerId); } catch (_) { /* nada */ }
      set(fromEvent(e));
    };
    fig.addEventListener('pointerdown', (e) => {
      if (e.pointerType === 'mouse' && e.button !== 0) return;
      if (e.pointerType === 'mouse') { start(e); return; }
      pending = { x: e.clientX, y: e.clientY, id: e.pointerId };
    });
    fig.addEventListener('pointermove', (e) => {
      if (dragging) { set(fromEvent(e)); return; }
      if (!pending || e.pointerId !== pending.id) return;
      const dx = Math.abs(e.clientX - pending.x);
      const dy = Math.abs(e.clientY - pending.y);
      if (dx > 6 && dx > dy * 1.2) start(e);
      else if (dy > 10) pending = null;
    });
    const end = () => { dragging = false; pending = null; fig.classList.remove('is-dragging'); };
    fig.addEventListener('pointerup', end);
    fig.addEventListener('pointercancel', end);
    range.addEventListener('input', () => { touched = true; cancelAnimationFrame(raf); set(Number(range.value)); });

    /* Una pista, una sola vez, en el primer caso: la línea se asoma a cada lado para invitar a arrastrar. */
    if (idx !== 0 || reduceMotion || !('IntersectionObserver' in window)) return;
    const io = new IntersectionObserver((entries) => {
      if (!entries.some((en) => en.isIntersecting)) return;
      io.disconnect();
      const keys = [50, 30, 66, 50];
      const dur = 1700;
      const ease = (x) => (x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2);
      let start = 0;
      const tick = (now) => {
        if (touched) return;
        if (!start) start = now;
        const t = Math.min(1, (now - start) / dur);
        const seg = Math.min(keys.length - 2, Math.floor(t * (keys.length - 1)));
        const local = ease(t * (keys.length - 1) - seg);
        set(keys[seg] + (keys[seg + 1] - keys[seg]) * local);
        if (t < 1) raf = requestAnimationFrame(tick);
      };
      setTimeout(() => { if (!touched) raf = requestAnimationFrame(tick); }, 700);
    }, { threshold: 0.6 });
    io.observe(fig);
  });
})();

/* ---------- El disco gira solo mientras se ve ---------- */
(() => {
  if (reduceMotion || !('IntersectionObserver' in window)) return;
  const io = new IntersectionObserver((entries) => entries.forEach((e) => e.target.classList.toggle('is-off', !e.isIntersecting)));
  document.querySelectorAll('.c-disco').forEach((el) => io.observe(el));
})();

/* ---------- Entradas al hacer scroll (una vez, nunca deja contenido oculto) ---------- */
(() => {
  const targets = document.querySelectorAll('[data-reveal]');
  if (!targets.length) return;
  if (!('IntersectionObserver' in window)) { targets.forEach((el) => el.classList.add('is-in')); return; }
  const io = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      entry.target.classList.add('is-in');
      io.unobserve(entry.target);
    }
  }, { rootMargin: '0px 0px -10% 0px', threshold: 0.08 });
  targets.forEach((el) => io.observe(el));
  window.addEventListener('load', () => setTimeout(() => {
    targets.forEach((el) => { const r = el.getBoundingClientRect(); if (r.top < innerHeight && r.bottom > 0) el.classList.add('is-in'); });
  }, 2500));
})();

/* ---------- Barra de WhatsApp en el teléfono ---------- */
(() => {
  const dock = document.querySelector('.dock');
  const heroActions = document.querySelector('.hero-actions');
  const ctaBand = document.querySelector('.cta-band');
  if (!dock || !heroActions || !('IntersectionObserver' in window)) return;
  const state = { hero: true, end: false };
  const update = () => {
    const show = !state.hero && !state.end;
    dock.classList.toggle('is-shown', show);
    dock.setAttribute('aria-hidden', String(!show));
    dock.querySelector('a').tabIndex = show ? 0 : -1;
  };
  new IntersectionObserver(([e]) => { state.hero = e.isIntersecting || e.boundingClientRect.top > 0; update(); }).observe(heroActions);
  // Se esconde al llegar a la llamada final (que ya es un enlace a WhatsApp) y después.
  // El pie es sticky y siempre "intersecta", por eso se mide solo la banda final.
  if (ctaBand) new IntersectionObserver(([e]) => { state.end = e.isIntersecting || e.boundingClientRect.top < 0; update(); }).observe(ctaBand);
})();

/* ---------- Marca del pie: se ajusta al ancho exacto de las letras ---------- */
(() => {
  const mark = document.querySelector('.mark');
  const text = mark && mark.querySelector('text');
  if (!text || !text.getBBox) return;
  const fit = () => {
    try {
      const b = text.getBBox();
      if (b.width > 0) mark.setAttribute('viewBox', `${b.x} ${b.y} ${b.width} ${b.height}`);
    } catch (_) { /* se queda con el viewBox de respaldo */ }
  };
  (document.fonts && document.fonts.ready ? document.fonts.ready : Promise.resolve()).then(fit);
})();
