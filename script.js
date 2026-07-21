/* ============================================
   NOISEMAKERS — Interactive Script
   Vanilla JS · No dependencies
   ============================================ */

/* ============ DATA ============ */
const DATA = {
  services: [
    { icon: 'music', title: 'Music Production', desc: 'Full-scale production from concept to final master. Beats, arrangements, and sonic identity.' },
    { icon: 'sliders', title: 'Mixing', desc: 'Balanced, clear, and impactful mixes that translate across every playback system.' },
    { icon: 'waves', title: 'Mastering', desc: 'Release-ready masters optimized for streaming, radio, and vinyl with precision loudness.' },
    { icon: 'pen', title: 'Songwriting', desc: 'Melodies, lyrics, and structure that capture emotion and tell compelling stories.' },
    { icon: 'disc', title: 'Beat Production', desc: 'Custom beats tailored to your style — Afrobeats, Hip-Hop, R&B, Pop and beyond.' },
    { icon: 'mic', title: 'Studio Recording', desc: 'Professional vocal and instrument recording in a treated, inspiring environment.' },
    { icon: 'user', title: 'Vocal Production', desc: 'Coaching, comping, tuning and processing to bring out the best in every performance.' },
    { icon: 'headphones', title: 'Podcast Editing', desc: 'Clean, broadcast-ready podcast editing with noise reduction and mastering.' },
    { icon: 'refresh', title: 'Audio Restoration', desc: 'Rescue damaged recordings — remove noise, clicks, hums and restore clarity.' },
    { icon: 'zap', title: 'Sound Design', desc: 'Custom sound design for film, games, ads and creative projects.' }
  ],

  gallery: [
    { src: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&q=80', caption: 'Main Studio Room' },
    { src: 'https://images.unsplash.com/photo-1520166012956-add9ba0835cb?w=800&q=80', caption: 'Mixing Console' },
    { src: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&q=80', caption: 'Vocal Booth' },
    { src: 'https://images.unsplash.com/photo-1519508234439-4f23643125c3?w=800&q=80', caption: 'Studio Monitors' },
    { src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80', caption: 'Microphone Collection' },
    { src: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80', caption: 'Synth Room' },
    { src: 'https://images.unsplash.com/photo-1564183756862-6e457e3a89a6?w=800&q=80', caption: 'Control Room' },
    { src: 'https://images.unsplash.com/photo-1571974599782-87624638275e?w=800&q=80', caption: 'Keyboard Station' },
    { src: 'https://images.unsplash.com/photo-1519874179391-3ebc752241dd?w=800&q=80', caption: 'Recording Session' }
  ],

  testimonials: [
    { name: 'K. Johnson', role: 'Recording Artist · Monrovia', text: 'NOISEMAKERS doesn\'t just produce music — he captures emotion. Working with him transformed my sound completely. Every session felt like magic.' },
    { name: 'Aria Moon', role: 'Singer-Songwriter · Ottawa', text: 'The most professional and talented producer I\'ve ever worked with. He understood my vision instantly and elevated it beyond what I imagined possible.' },
    { name: 'The Collective', role: 'Band · Toronto', text: 'From songwriting to mastering, NOISEMAKERS delivered excellence at every step. Our album wouldn\'t exist without his vision and technical mastery.' },
    { name: 'L. Mensah', role: 'Artist · Accra', text: 'A true craftsman. The attention to detail in mixing and mastering is world-class. My music finally sounds the way I always dreamed it would.' },
    { name: 'S. Williams', role: 'Pop Artist · Vancouver', text: 'NOISEMAKERS has an incredible ear and a gift for bringing out the best in artists. The studio atmosphere is inspiring and the results speak for themselves.' },
    { name: 'D. Okafor', role: 'Independent Artist · Lagos', text: 'Remote collaboration made easy. The files came back sounding better than I could have imagined. Truly international quality.' }
  ]
};

/* ============ ICONS ============ */
const ICONS = {
  music: '<path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>',
  sliders: '<line x1="4" y1="21" x2="4" y2="14"/><line x1="4" y1="10" x2="4" y2="3"/><line x1="12" y1="21" x2="12" y2="12"/><line x1="12" y1="8" x2="12" y2="3"/><line x1="20" y1="21" x2="20" y2="16"/><line x1="20" y1="12" x2="20" y2="3"/><line x1="1" y1="14" x2="7" y2="14"/><line x1="9" y1="8" x2="15" y2="8"/><line x1="17" y1="16" x2="23" y2="16"/>',
  waves: '<path d="M2 12h2l3-9 4 18 4-18 3 9h4"/>',
  pen: '<path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.586 7.586"/><circle cx="11" cy="11" r="2"/>',
  disc: '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/>',
  mic: '<path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/>',
  user: '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
  headphones: '<path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/>',
  refresh: '<polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/>',
  zap: '<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>'
};

/* ============ PAGE NAVIGATION ============ */
(function initPages() {
  const pages = document.querySelectorAll('.page');
  const navLinks = document.querySelectorAll('[data-page]');

  function showPage(pageId) {
    pages.forEach(p => p.classList.remove('active'));
    const target = document.getElementById('page-' + pageId);
    if (target) {
      target.classList.add('active');
      // Update nav active state
      document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
      const activeLink = document.querySelector(`.nav-link[data-page="${pageId}"]`);
      if (activeLink) activeLink.classList.add('active');
      // Re-trigger reveal animations
      setTimeout(() => {
        initRevealAnimations();
      }, 100);
    }
  }

  navLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const pageId = link.getAttribute('data-page');
      showPage(pageId);
      // Close mobile menu
      document.getElementById('hamburger').classList.remove('active');
      document.getElementById('navMenu').classList.remove('mobile-open');
      // Scroll page-inner to top if needed
      const pageInner = document.querySelector('#page-' + pageId + ' .page-inner');
      if (pageInner) pageInner.scrollTop = 0;
    });
  });

  // Start on home
  showPage('home');
})();

/* ============ LOADER ============ */
(function initLoader() {
  const percent = document.getElementById('loaderPercent');
  const bar = document.getElementById('loaderBarFill');
  const loader = document.getElementById('loader');
  let p = 0;
  const interval = setInterval(() => {
    p += Math.random() * 8 + 2;
    if (p >= 100) {
      p = 100;
      clearInterval(interval);
      setTimeout(() => {
        loader.classList.add('hidden');
        document.body.style.overflow = '';
        initRevealAnimations();
      }, 500);
    }
    percent.textContent = Math.floor(p) + '%';
    bar.style.width = p + '%';
  }, 80);
  document.body.style.overflow = 'hidden';
})();

/* ============ CUSTOM CURSOR ============ */
(function initCursor() {
  const dot = document.getElementById('cursorDot');
  const ring = document.getElementById('cursorRing');
  if (!dot || !ring) return;

  let mx = 0, my = 0, rx = 0, ry = 0;
  window.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    dot.style.transform = `translate(${mx}px, ${my}px) translate(-50%, -50%)`;
  });

  function animate() {
    rx += (mx - rx) * 0.15;
    ry += (my - ry) * 0.15;
    ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
    requestAnimationFrame(animate);
  }
  animate();

  const hoverables = document.querySelectorAll('a, button, .gallery-item, .service-card, input, select, textarea');
  hoverables.forEach(el => {
    el.addEventListener('mouseenter', () => ring.classList.add('hover'));
    el.addEventListener('mouseleave', () => ring.classList.remove('hover'));
  });

  document.querySelectorAll('[data-magnetic]').forEach(el => {
    el.addEventListener('mousemove', e => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      el.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
    });
    el.addEventListener('mouseleave', () => {
      el.style.transform = '';
    });
  });
})();

/* ============ BACKGROUND CANVAS ============ */
(function initParticles() {
  const canvas = document.getElementById('bgCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let w, h, particles = [];

  function resize() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  class Particle {
    constructor() {
      this.x = Math.random() * w;
      this.y = Math.random() * h;
      this.vx = (Math.random() - 0.5) * 0.3;
      this.vy = (Math.random() - 0.5) * 0.3;
      this.r = Math.random() * 1.5 + 0.5;
      this.a = Math.random() * 0.5 + 0.2;
    }
    update() {
      this.x += this.vx;
      this.y += this.vy;
      if (this.x < 0 || this.x > w) this.vx *= -1;
      if (this.y < 0 || this.y > h) this.vy *= -1;
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(0, 200, 255, ${this.a})`;
      ctx.fill();
    }
  }

  for (let i = 0; i < 80; i++) particles.push(new Particle());

  function animate() {
    ctx.clearRect(0, 0, w, h);
    particles.forEach(p => { p.update(); p.draw(); });
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const d = Math.sqrt(dx*dx + dy*dy);
        if (d < 120) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(0, 200, 255, ${0.15 * (1 - d/120)})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(animate);
  }
  animate();
})();

/* ============ NAVIGATION ============ */
(function initNav() {
  const nav = document.getElementById('nav');
  const hamburger = document.getElementById('hamburger');
  const menu = document.getElementById('navMenu');

  // Trigger scrolled state based on any scroll (for mobile page-inner)
  document.querySelectorAll('.page-inner').forEach(pi => {
    pi.addEventListener('scroll', () => {
      nav.classList.toggle('scrolled', pi.scrollTop > 30);
    });
  });
  // Also always show scrolled on non-home pages
  const observer = new MutationObserver(() => {
    const active = document.querySelector('.page.active');
    if (active && active.id !== 'page-home') {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  });
  observer.observe(document.getElementById('pageWrapper'), { subtree: true, attributes: true, attributeFilter: ['class'] });

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    menu.classList.toggle('mobile-open');
  });
})();

/* ============ THEME TOGGLE ============ */
(function initTheme() {
  const toggle = document.getElementById('themeToggle');
  const saved = localStorage.getItem('theme');
  if (saved) document.documentElement.setAttribute('data-theme', saved);

  toggle.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  });
})();

/* ============ TYPING ANIMATION ============ */
(function initTyping() {
  const el = document.getElementById('typing');
  if (!el) return;
  const words = ['Songwriter', 'Producer', 'Sound Engineer', 'Musician', 'Creative Director'];
  let wi = 0, ci = 0, deleting = false;

  function type() {
    const word = words[wi];
    if (!deleting) {
      el.textContent = word.substring(0, ci + 1);
      ci++;
      if (ci === word.length) {
        deleting = true;
        setTimeout(type, 1800);
        return;
      }
    } else {
      el.textContent = word.substring(0, ci - 1);
      ci--;
      if (ci === 0) {
        deleting = false;
        wi = (wi + 1) % words.length;
      }
    }
    setTimeout(type, deleting ? 50 : 100);
  }
  type();
})();

/* ============ RENDER SERVICES ============ */
(function renderServices() {
  const grid = document.getElementById('servicesGrid');
  if (!grid) return;
  grid.innerHTML = DATA.services.map(s => `
    <div class="service-card reveal tilt-3d">
      <div class="service-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${ICONS[s.icon]}</svg>
      </div>
      <h3>${s.title}</h3>
      <p>${s.desc}</p>
    </div>
  `).join('');

  grid.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      card.style.setProperty('--mx', (e.clientX - rect.left) + 'px');
      card.style.setProperty('--my', (e.clientY - rect.top) + 'px');
    });
  });
})();

/* ============ RENDER GALLERY + LIGHTBOX ============ */
(function renderGallery() {
  const grid = document.getElementById('galleryGrid');
  if (!grid) return;
  grid.innerHTML = DATA.gallery.map((g, i) => `
    <div class="gallery-item reveal" data-index="${i}">
      <img src="${g.src}" alt="${g.caption}" loading="lazy" />
    </div>
  `).join('');

  const lightbox = document.getElementById('lightbox');
  const lbImg = document.getElementById('lightboxImg');
  const lbCaption = document.getElementById('lightboxCaption');
  const lbClose = document.getElementById('lightboxClose');
  const lbPrev = document.getElementById('lightboxPrev');
  const lbNext = document.getElementById('lightboxNext');
  let lbIndex = 0;

  function openLB(i) {
    lbIndex = i;
    lbImg.src = DATA.gallery[i].src;
    lbCaption.textContent = DATA.gallery[i].caption;
    lightbox.classList.add('open');
  }
  function closeLB() { lightbox.classList.remove('open'); }
  function nextLB() { openLB((lbIndex + 1) % DATA.gallery.length); }
  function prevLB() { openLB((lbIndex - 1 + DATA.gallery.length) % DATA.gallery.length); }

  grid.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', () => openLB(+item.dataset.index));
  });
  lbClose.addEventListener('click', closeLB);
  lbNext.addEventListener('click', nextLB);
  lbPrev.addEventListener('click', prevLB);
  lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLB(); });
  document.addEventListener('keydown', e => {
    if (!lightbox.classList.contains('open')) return;
    if (e.key === 'Escape') closeLB();
    if (e.key === 'ArrowRight') nextLB();
    if (e.key === 'ArrowLeft') prevLB();
  });
})();

/* ============ TESTIMONIALS SLIDER ============ */
(function initTestimonials() {
  const slider = document.getElementById('testimonialsSlider');
  const dots = document.getElementById('testiDots');
  const prev = document.getElementById('testiPrev');
  const next = document.getElementById('testiNext');
  if (!slider) return;

  slider.innerHTML = `<div class="testimonials-track">${
    DATA.testimonials.map(t => `
      <div class="testimonial">
        <div class="testimonial-card">
          <div class="testimonial-stars">${'★'.repeat(5)}</div>
          <p class="testimonial-text">"${t.text}"</p>
          <div class="testimonial-author">
            <div>
              <h5>${t.name}</h5>
              <span>${t.role}</span>
            </div>
          </div>
        </div>
      </div>
    `).join('')
  }</div>`;

  const track = slider.querySelector('.testimonials-track');
  const items = slider.querySelectorAll('.testimonial');
  let index = 0;
  let perView = window.innerWidth >= 1100 ? 3 : window.innerWidth >= 768 ? 2 : 1;
  const maxIndex = () => Math.max(0, items.length - perView);

  function buildDots() {
    dots.innerHTML = '';
    const total = maxIndex() + 1;
    for (let i = 0; i < total; i++) {
      const d = document.createElement('div');
      d.className = 'testi-dot' + (i === index ? ' active' : '');
      d.addEventListener('click', () => { index = i; update(); });
      dots.appendChild(d);
    }
  }

  function update() {
    if (index > maxIndex()) index = maxIndex();
    const pct = (100 / perView) * index;
    track.style.transform = `translateX(-${pct}%)`;
    dots.querySelectorAll('.testi-dot').forEach((d, i) => d.classList.toggle('active', i === index));
  }

  prev.addEventListener('click', () => { index = Math.max(0, index - 1); update(); });
  next.addEventListener('click', () => { index = Math.min(maxIndex(), index + 1); update(); });

  window.addEventListener('resize', () => {
    perView = window.innerWidth >= 1100 ? 3 : window.innerWidth >= 768 ? 2 : 1;
    buildDots();
    update();
  });

  buildDots();

  let autoSlide = setInterval(() => {
    index = index >= maxIndex() ? 0 : index + 1;
    update();
  }, 5000);
  slider.addEventListener('mouseenter', () => clearInterval(autoSlide));
  slider.addEventListener('mouseleave', () => {
    autoSlide = setInterval(() => {
      index = index >= maxIndex() ? 0 : index + 1;
      update();
    }, 5000);
  });
})();

/* ============ SCROLL REVEAL ============ */
function initRevealAnimations() {
  const reveals = document.querySelectorAll('.reveal:not(.visible), .reveal-3d:not(.visible)');
  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });
  reveals.forEach(el => io.observe(el));
  // Also trigger any that are already in view (for page transitions)
  setTimeout(() => {
    reveals.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        el.classList.add('visible');
      }
    });
  }, 200);
}

/* ============ SHARE BUTTON ============ */
(function initShare() {
  const btn = document.getElementById('shareBtn');
  const popup = document.getElementById('sharePopup');
  const close = document.getElementById('shareClose');
  const copyBtn = document.getElementById('shareCopy');
  const copyText = document.getElementById('shareCopyText');

  const siteUrl = window.location.href;
  const siteTitle = 'NOISEMAKERS — Where Sound Becomes Art';
  const siteDesc = 'Liberian music producer & sound engineer based in Ottawa, Canada.';

  document.getElementById('shareWhatsApp').href = `https://wa.me/?text=${encodeURIComponent(siteTitle + ' — ' + siteUrl)}`;
  document.getElementById('shareTwitter').href = `https://twitter.com/intent/tweet?text=${encodeURIComponent(siteTitle)}&url=${encodeURIComponent(siteUrl)}`;
  document.getElementById('shareFacebook').href = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(siteUrl)}`;
  document.getElementById('shareLinkedIn').href = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(siteUrl)}`;

  btn.addEventListener('click', () => popup.classList.add('open'));
  close.addEventListener('click', () => popup.classList.remove('open'));
  popup.addEventListener('click', e => { if (e.target === popup) popup.classList.remove('open'); });

  copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(siteUrl).then(() => {
      copyText.textContent = '✓ Copied!';
      setTimeout(() => copyText.textContent = 'Copy Link', 2000);
    }).catch(() => {
      // Fallback
      const ta = document.createElement('textarea');
      ta.value = siteUrl;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      copyText.textContent = '✓ Copied!';
      setTimeout(() => copyText.textContent = 'Copy Link', 2000);
    });
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') popup.classList.remove('open');
  });
})();

/* ============ BOOK FORM (WhatsApp redirect) ============ */
(function initBookForm() {
  const form = document.getElementById('bookForm');
  if (!form) return;
  form.addEventListener('submit', e => {
    e.preventDefault();
    const data = new FormData(form);
    const name = data.get('artistName') || '';
    const phone = data.get('phone') || '';
    const project = data.get('projectType') || '';
    const budget = data.get('budget') || '';
    const date = data.get('date') || '';
    const message = data.get('message') || '';

    const text = `*New Booking Request — NOISEMAKERS*%0A%0A*Artist:* ${name}%0A*WhatsApp:* ${phone}%0A*Project:* ${project}%0A*Budget:* ${budget}%0A*Preferred Date:* ${date}%0A%0A*Message:*%0A${message}`;
    window.open(`https://wa.me/13439873280?text=${text}`, '_blank');
  });
})();

/* ============ 3D TILT EFFECT ============ */
(function init3DTilt() {
  const tilts = document.querySelectorAll('.tilt-3d');
  tilts.forEach(el => {
    el.addEventListener('mousemove', e => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const cx = rect.width / 2;
      const cy = rect.height / 2;
      const rx = ((y - cy) / cy) * -6;
      const ry = ((x - cx) / cx) * 6;
      el.style.transform = `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(10px)`;
    });
    el.addEventListener('mouseleave', () => {
      el.style.transform = '';
    });
  });
})();

/* ============ CONSOLE GREETING ============ */
console.log('%c🎵 NOISEMAKERS', 'font-size: 24px; font-weight: bold; color: #00c8ff;');
console.log('%cWhere Sound Becomes Art.', 'font-size: 14px; color: #bdbdbd;');
console.log('%cPowered by KS1 Empire Global Foundation (KS1EGF)', 'font-size: 12px; color: #888;');
