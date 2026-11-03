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
  const data = raw.filter((t) => t && typeof t === 'object' && (t.foto || t.titulo || t.antes || t.despues));
  const section = document.getElementById('resultados');
  if (!list) return;
  if (!data.length) {
    // Sin transformaciones: se esconde la sección y todo enlace que apunte a ella.
    section.hidden = true;
    document.querySelectorAll('a[href="#resultados"]').forEach((a) => { a.hidden = true; });
    return;
  }

  const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

  const sampleWord = (kind) => `<span class="ba-sample" aria-hidden="true">${kind === 'antes' ? 'Antes' : 'Después'}</span>`;
  const layer = (src, kind, alt) => src
    ? `<img src="${esc(src)}" alt="${kind === 'antes' ? esc(alt) : ''}" width="520" height="650" loading="lazy" decoding="async" draggable="false">`
    : sampleWord(kind);
  const placements = ['case-a', 'case-b', 'case-c'];
  const remarkHTML = '<p class="case-remark" data-reveal>Desliza cada foto para ver el cambio. Clientes reales, con su permiso.</p>';

  /* Foto simple (el collage de antes y después tal como se publica): sin deslizador. */
  const photos = data.filter((t) => t.foto);
  if (photos.length) list.classList.add('is-photos');
  const photoCase = (t, i) => {
    const [first, ...rest] = String(t.titulo || '').split(',');
    const title = first.trim() ? `${esc(first.trim())}${rest.length ? `, ${esc(rest.join(',').trim())}` : ''}` : '';
    const small = t.foto640 ? `${esc(t.foto640)} 640w, ` : '';
    const el = document.createElement('article');
    el.className = 'case-photo';
    el.setAttribute('aria-label', String(t.titulo || t.alt || 'Transformación'));
    el.innerHTML = `
      <figure class="photo case-photo-frame" data-reveal style="--d:${i % 2}">
        <img src="${esc(t.foto)}" srcset="${small}${esc(t.foto)} 1125w" sizes="(min-width: 52em) 40vw, 88vw" alt="${esc(t.alt || 'Antes y después de un cliente de Jan')}" width="1125" height="2000" loading="lazy" decoding="async">
      </figure>
      ${title ? `<h3 class="case-title" data-reveal style="--d:1">${title}</h3>` : ''}
      ${t.descripcion ? `<p class="case-desc" data-reveal style="--d:1">${esc(t.descripcion)}</p>` : ''}`;
    list.appendChild(el);
  };

  data.forEach((t, i) => {
    if (t.foto) { photoCase(t, i); return; }
    const sample = !t.antes || !t.despues;
    const [first, ...rest] = String(t.titulo || '').split(',');
    const name = esc(first.trim());
    const detail = rest.length ? esc(rest.join(',').trim()) : '';
    const place = placements[i % placements.length];
    const extra = t.extra
      ? `<figure class="photo case-extra" data-reveal style="--d:3"><img src="${esc(t.extra)}" alt="" width="1600" height="1000" loading="lazy" decoding="async"></figure>`
      : '';

    const el = document.createElement('article');
    el.setAttribute('aria-label', String(t.titulo || t.alt || 'Transformación'));
    el.className = `case ${place}${sample ? ' is-sample' : ''}`;
    el.innerHTML = `
      ${place === 'case-b' && i === 1 ? remarkHTML : ''}
      <div class="case-body">
        <figure class="ba" data-pos="50" data-reveal style="--d:1">
          <div class="ba-layer ba-after">${layer(t.despues, 'despues', t.alt)}</div>
          <div class="ba-layer ba-before">${layer(t.antes, 'antes', t.alt)}</div>
          <span class="ba-tag ba-tag-before" aria-hidden="true">Antes</span>
          <span class="ba-tag ba-tag-after" aria-hidden="true">Después</span>
          <span class="ba-handle" aria-hidden="true"><span class="ba-knob"><svg viewBox="0 0 24 24" width="22" height="22"><path d="M9 6 3 12l6 6zM15 6l6 6-6 6z" fill="currentColor"/></svg></span></span>
          <input class="ba-range" type="range" min="0" max="100" value="50" step="1"
            aria-label="Comparar antes y después: ${esc(t.titulo || t.alt || 'cliente')}" aria-valuetext="Mitad antes, mitad después">
        </figure>
        ${name ? `<h3 class="case-title" data-reveal style="--d:2">${name}${detail ? `, ${detail}` : ''}</h3>` : ''}
        ${t.descripcion ? `<p class="case-desc" data-reveal style="--d:2">${esc(t.descripcion)}</p>` : ''}
        ${extra}
      </div>`;
    list.appendChild(el);
  });
  // Con fotos simples, o con un solo cliente, la frase va bajo el título de la sección.
  if (photos.length) list.insertAdjacentHTML('beforebegin', '<p class="case-remark results-remark" data-reveal>Clientes reales de Jan, con su permiso.</p>');
  else if (data.length === 1) list.insertAdjacentHTML('beforebegin', remarkHTML.replace('case-remark', 'case-remark results-remark'));

  /* Una foto que no carga (ruta mal escrita, archivo borrado) deja ver el recuadro de muestra en vez de un hueco. */
  list.querySelectorAll('img').forEach((img) => {
    const extraSlot = img.closest('.case-extra');
    if (extraSlot) return; // las fotos extra usan el mismo manejo que el resto de fotos de la página
    const layerEl = img.parentElement;
    const fail = () => {
      img.remove();
      if (extraSlot) { extraSlot.hidden = true; return; }
      // La foto no cargó: aparece la palabra de muestra en su lugar, no un hueco.
      if (layerEl) layerEl.insertAdjacentHTML('beforeend', sampleWord(layerEl.classList.contains('ba-before') ? 'antes' : 'despues'));
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
    let offset = 0;        // distancia entre el dedo y la línea al agarrarla (no salta al centro)
    const current = () => Number(fig.dataset.pos || 50);
    /* Resorte críticamente amortiguado (sin rebote), parte del valor que está en pantalla. */
    const glide = (target) => {
      cancelAnimationFrame(raf);
      if (reduceMotion) { set(target); return; }
      let x = current(); let v = 0; let last = 0;
      const k = 170; const c = 2 * Math.sqrt(k); // respuesta ~0.35 s, amortiguación 1.0
      const step = (now) => {
        const dt = last ? Math.min(0.032, (now - last) / 1000) : 0.016; last = now;
        v += (-k * (x - target) - c * v) * dt; x += v * dt;
        if (Math.abs(x - target) < 0.05 && Math.abs(v) < 0.5) { set(target); return; }
        set(x); raf = requestAnimationFrame(step);
      };
      raf = requestAnimationFrame(step);
    };
    const start = (e, jump) => {
      dragging = true; touched = true; pending = null;
      cancelAnimationFrame(raf);
      fig.classList.add('is-dragging');
      try { fig.setPointerCapture(e.pointerId); } catch (_) { /* nada */ }
      const p = fromEvent(e);
      const near = Math.abs(p - current()) * fig.getBoundingClientRect().width / 100 < 32;
      if (near || !jump) { offset = current() - p; } else { offset = 0; glide(p); }
    };
    fig.addEventListener('pointerdown', (e) => {
      if (e.pointerType === 'mouse' && e.button !== 0) return;
      if (e.pointerType === 'mouse') { start(e, true); return; }
      pending = { x: e.clientX, y: e.clientY, id: e.pointerId };
    });
    fig.addEventListener('pointermove', (e) => {
      if (dragging) { cancelAnimationFrame(raf); set(fromEvent(e) + offset); return; }
      if (!pending || e.pointerId !== pending.id) return;
      const dx = Math.abs(e.clientX - pending.x);
      const dy = Math.abs(e.clientY - pending.y);
      if (dx > 8 && dx > dy * 1.2) start(e, false);
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

/* ---------- Entradas al hacer scroll (una vez, nunca deja contenido oculto) ----------
   Arranca cuando ya corrieron todos los scripts, así incluye lo que se dibuja desde los datos. */
const startReveals = () => {
  const targets = document.querySelectorAll('[data-reveal]');
  if (!targets.length) return;
  if (!('IntersectionObserver' in window)) { targets.forEach((el) => el.classList.add('is-in')); return; }
  // Un elemento recortado del todo con clip-path no cuenta como visible para IntersectionObserver,
  // así que esos se vigilan a través de su contenedor (que no está recortado).
  const watched = new Map();
  const io = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      (watched.get(entry.target) || [entry.target]).forEach((el) => el.classList.add('is-in'));
      io.unobserve(entry.target);
    }
  }, { rootMargin: '0px 0px -14% 0px', threshold: 0.08 });
  targets.forEach((el) => {
    const w = el.matches('.case-photo-frame') ? el.parentElement : el;
    if (!watched.has(w)) watched.set(w, []);
    watched.get(w).push(el);
    io.observe(w);
  });
  window.addEventListener('load', () => setTimeout(() => {
    targets.forEach((el) => { const r = el.getBoundingClientRect(); if (r.top < innerHeight && r.bottom > 0) el.classList.add('is-in'); });
  }, 2500));
};
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', startReveals); else startReveals();

/* ---------- Barra de WhatsApp en el teléfono ---------- */
(() => {
  const dock = document.querySelector('.dock');
  const heroActions = document.querySelector('.button-cta');
  const ctaBand = document.querySelector('.close');
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

/* ---------- Fotos: si un archivo todavía no existe, se ve el recuadro con el nombre del espacio ---------- */
(() => {
  document.querySelectorAll('.photo').forEach((fig) => {
    const img = fig.querySelector('img');
    if (!img) return;
    const empty = () => { if (fig.classList.contains('case-photo-frame')) { fig.closest('.case-photo').hidden = true; return; } if (fig.classList.contains('case-extra')) { fig.hidden = true; return; } fig.classList.add('is-empty'); img.hidden = true; };
    if (img.complete && img.naturalWidth === 0 && img.getAttribute('src')) empty();
    else img.addEventListener('error', empty, { once: true });
    img.addEventListener('load', () => fig.classList.remove('is-empty'), { once: true });
  });
})();

/* ---------- Números y cita (contenido.js) ---------- */
(() => {
  const c = window.CONTENIDO || {};
  const nums = (Array.isArray(c.numeros) ? c.numeros : []).filter((n) => n && n.cifra && n.texto);
  const quote = (Array.isArray(c.citas) ? c.citas : []).find((q) => q && q.texto);
  const section = document.getElementById('numeros');
  if (!section || (!nums.length && !quote)) return;
  const dl = document.getElementById('lista-numeros');
  nums.forEach((n, i) => {
    const row = document.createElement('div');
    row.dataset.reveal = '';
    row.style.setProperty('--d', String(i + 1));
    const dt = document.createElement('dt'); dt.textContent = n.cifra; dt.dataset.count = '';
    const dd = document.createElement('dd'); dd.textContent = n.texto;
    row.append(dt, dd); dl.appendChild(row);
  });
  if (!nums.length) section.querySelector('.numbers-main').hidden = true;
  if (quote) {
    document.getElementById('cita-texto').textContent = `“${String(quote.texto).replace(/^[“"]|[”"]$/g, '')}”`;
    document.getElementById('cita-autor').textContent = quote.autor || '';
    document.getElementById('cita').hidden = false;
  }
  section.hidden = false;
})();

/* ---------- Hero: líneas finas en ondas detrás del coach (decorativas) ---------- */
(() => {
  const svg = document.getElementById('hero-waves');
  if (!svg) return;
  const NS = 'http://www.w3.org/2000/svg';
  const W = 900;
  // Una cinta de líneas que se tuerce: donde el coseno pasa por cero, las líneas se juntan.
  const ribbon = (count, base, spread, amp, phase, tilt) => {
    const g = document.createElementNS(NS, 'g');
    for (let i = 0; i < count; i++) {
      const t = i / (count - 1);
      let d = '';
      for (let x = -160; x <= W + 160; x += 8) {
        const u = x / W;
        const y = base + (t - 0.5) * spread * Math.cos(u * Math.PI * 1.35 + phase)
          + amp * Math.sin(u * Math.PI * 2.1 + phase + t * 0.9) - tilt * u;
        d += `${d ? 'L' : 'M'}${x.toFixed(0)} ${y.toFixed(1)}`;
      }
      const path = document.createElementNS(NS, 'path');
      path.setAttribute('d', d);
      path.setAttribute('stroke-opacity', (0.16 + 0.34 * (1 - Math.abs(t - 0.5) * 2)).toFixed(2));
      g.appendChild(path);
    }
    return g;
  };
  const a = ribbon(30, 360, 300, 120, 0.55, 140); a.setAttribute('class', 'wave-a');
  const b = ribbon(16, 470, 170, 90, 2.1, -60); b.setAttribute('class', 'wave-b');
  svg.append(a, b);
})();

/* ---------- Hero: cifras desde contenido.js (si existen) ---------- */
(() => {
  const h = (window.CONTENIDO && window.CONTENIDO.hero) || {};
  document.querySelectorAll('[data-hero-stat]').forEach((el) => {
    const v = h[el.dataset.heroStat];
    if (v) el.textContent = v;
    el.dataset.count = '';
  });
})();

/* ---------- Cifras: cuentan desde 0 una sola vez al aparecer (solo si son números reales) ---------- */
(() => {
  const els = [...document.querySelectorAll('[data-count]')];
  if (!els.length || reduceMotion || !('IntersectionObserver' in window)) return;
  const ease = (x) => 1 - Math.pow(1 - x, 3);
  const run = (el) => {
    const m = el.textContent.trim().match(/^(\D*)(\d+(?:[.,]\d+)?)(.*)$/);
    if (!m) return; // "XX" y otros textos se quedan como están
    const [, pre, num, post] = m;
    const sep = num.includes(',') ? ',' : '.';
    const decimals = (num.split(/[.,]/)[1] || '').length;
    const target = parseFloat(num.replace(',', '.'));
    el.style.minWidth = `${el.getBoundingClientRect().width}px`;
    const t0 = performance.now();
    const tick = (now) => {
      const p = Math.min(1, (now - t0) / 1800);
      const v = (target * ease(p)).toFixed(decimals).replace('.', sep);
      el.textContent = `${pre}${v}${post}`;
      if (p < 1) requestAnimationFrame(tick); else el.textContent = `${pre}${num}${post}`;
    };
    requestAnimationFrame(tick);
  };
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => { if (e.isIntersecting) { io.unobserve(e.target); setTimeout(() => run(e.target), e.target.closest('.hero-stats') ? 750 : 150); } });
  }, { threshold: 0.6 });
  els.forEach((el) => io.observe(el));
})();
