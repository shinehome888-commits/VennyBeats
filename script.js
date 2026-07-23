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
  testimonials: [
    { name: 'K. Johnson', role: 'Recording Artist · Monrovia', text: 'NOISEMAKERS doesn\'t just produce music — he captures emotion. Working with him transformed my sound completely.' },
    { name: 'Aria Moon', role: 'Singer-Songwriter · Ottawa', text: 'The most professional producer I\'ve ever worked with. He understood my vision instantly and elevated it beyond imagination.' },
    { name: 'The Collective', role: 'Band · Toronto', text: 'From songwriting to mastering, NOISEMAKERS delivered excellence at every step. Our album wouldn\'t exist without his vision.' },
    { name: 'L. Mensah', role: 'Artist · Accra', text: 'A true craftsman. The attention to detail in mixing and mastering is world-class.' },
    { name: 'S. Williams', role: 'Pop Artist · Vancouver', text: 'NOISEMAKERS has an incredible ear and a gift for bringing out the best in artists.' },
    { name: 'D. Okafor', role: 'Independent Artist · Lagos', text: 'Remote collaboration made easy. The files came back sounding better than I could have imagined.' },
    { name: 'M. Thompson', role: 'Rapper · Montreal', text: 'Best investment I made in my career. The quality is unmatched and the experience was smooth from start to finish.' },
    { name: 'R. Konneh', role: 'Gospel Artist · Liberia', text: 'Working with NOISEMAKERS brought my music to a whole new level. International quality from an African producer.' }
  ]
};

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

/* Page Navigation */
(function initPages() {
  const pages = document.querySelectorAll('.page');
  const navLinks = document.querySelectorAll('[data-page]');

  function showPage(pageId) {
    pages.forEach(p => p.classList.remove('active'));
    const target = document.getElementById('page-' + pageId);
    if (target) {
      target.classList.add('active');
      const pageInner = target.querySelector('.page-inner');
      if (pageInner) pageInner.scrollTop = 0;
      document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
      const activeLink = document.querySelector(`.nav-link[data-page="${pageId}"]`);
      if (activeLink) activeLink.classList.add('active');
      setTimeout(() => initRevealAnimations(), 150);
    }
  }

  navLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      showPage(link.getAttribute('data-page'));
      document.getElementById('hamburger').classList.remove('active');
      document.getElementById('mobileMenuOverlay').classList.remove('active');
    });
  });

  showPage('home');
})();

/* Loader */
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
        initRevealAnimations();
      }, 500);
    }
    percent.textContent = Math.floor(p) + '%';
    bar.style.width = p + '%';
  }, 80);
})();

/* Cursor */
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
    rx += (mx - rx) * 0.15; ry += (my - ry) * 0.15;
    ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
    requestAnimationFrame(animate);
  }
  animate();
  document.querySelectorAll('a, button, input, select, textarea').forEach(el => {
    el.addEventListener('mouseenter', () => ring.classList.add('hover'));
    el.addEventListener('mouseleave', () => ring.classList.remove('hover'));
  });
  document.querySelectorAll('[data-magnetic]').forEach(el => {
    el.addEventListener('mousemove', e => {
      const rect = el.getBoundingClientRect();
      el.style.transform = `translate(${(e.clientX - rect.left - rect.width/2) * 0.2}px, ${(e.clientY - rect.top - rect.height/2) * 0.2}px)`;
    });
    el.addEventListener('mouseleave', () => { el.style.transform = ''; });
  });
})();

/* Background Canvas */
(function initParticles() {
  const canvas = document.getElementById('bgCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let w, h, particles = [];
  function resize() { w = canvas.width = window.innerWidth; h = canvas.height = window.innerHeight; }
  resize(); window.addEventListener('resize', resize);
  class Particle {
    constructor() { this.x = Math.random() * w; this.y = Math.random() * h; this.vx = (Math.random() - 0.5) * 0.3; this.vy = (Math.random() - 0.5) * 0.3; this.r = Math.random() * 1.5 + 0.5; this.a = Math.random() * 0.5 + 0.2; }
    update() { this.x += this.vx; this.y += this.vy; if (this.x < 0 || this.x > w) this.vx *= -1; if (this.y < 0 || this.y > h) this.vy *= -1; }
    draw() { ctx.beginPath(); ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2); ctx.fillStyle = `rgba(0, 200, 255, ${this.a})`; ctx.fill(); }
  }
  for (let i = 0; i < 80; i++) particles.push(new Particle());
  function animate() {
    ctx.clearRect(0, 0, w, h);
    particles.forEach(p => { p.update(); p.draw(); });
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const d = Math.sqrt((particles[i].x - particles[j].x)**2 + (particles[i].y - particles[j].y)**2);
        if (d < 120) {
          ctx.beginPath(); ctx.moveTo(particles[i].x, particles[i].y); ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(0, 200, 255, ${0.15 * (1 - d/120)})`; ctx.lineWidth = 0.5; ctx.stroke();
        }
      }
    }
    requestAnimationFrame(animate);
  }
  animate();
})();

/* Navigation */
(function initNav() {
  const nav = document.getElementById('nav');
  document.querySelectorAll('.page-inner').forEach(pi => {
    pi.addEventListener('scroll', () => {
      nav.classList.toggle('scrolled', pi.scrollTop > 30);
    }, { passive: true });
  });
  document.getElementById('hamburger').addEventListener('click', () => {
    document.getElementById('hamburger').classList.toggle('active');
    document.getElementById('mobileMenuOverlay').classList.toggle('active');
  });
})();

/* Typing */
(function initTyping() {
  const el = document.getElementById('typing');
  if (!el) return;
  const words = ['Songwriter', 'Producer', 'Sound Engineer', 'Musician', 'Creative Director'];
  let wi = 0, ci = 0, deleting = false;
  function type() {
    const word = words[wi];
    if (!deleting) {
      el.textContent = word.substring(0, ci + 1); ci++;
      if (ci === word.length) { deleting = true; setTimeout(type, 1800); return; }
    } else {
      el.textContent = word.substring(0, ci - 1); ci--;
      if (ci === 0) { deleting = false; wi = (wi + 1) % words.length; }
    }
    setTimeout(type, deleting ? 50 : 100);
  }
  type();
})();

/* Services */
(function renderServices() {
  const grid = document.getElementById('servicesGrid');
  if (!grid) return;
  grid.innerHTML = DATA.services.map(s => `
    <div class="service-card reveal tilt-3d">
      <div class="service-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${ICONS[s.icon]}</svg></div>
      <h3>${s.title}</h3><p>${s.desc}</p>
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

/* Testimonials */
(function initTestimonials() {
  const slider = document.getElementById('testimonialsSlider');
  const dots = document.getElementById('testiDots');
  if (!slider) return;
  slider.innerHTML = `<div class="testimonials-track">${DATA.testimonials.map(t => `
    <div class="testimonial"><div class="testimonial-card tilt-3d">
      <div class="testimonial-stars">${'★'.repeat(5)}</div>
      <p class="testimonial-text">"${t.text}"</p>
      <div class="testimonial-author"><div><h5>${t.name}</h5><span>${t.role}</span></div></div>
    </div></div>
  `).join('')}</div>`;

  const track = slider.querySelector('.testimonials-track');
  const items = slider.querySelectorAll('.testimonial');
  let index = 0;
  let perView = window.innerWidth >= 1100 ? 3 : window.innerWidth >= 768 ? 2 : 1;
  const maxIndex = () => Math.max(0, items.length - perView);

  function buildDots() {
    dots.innerHTML = '';
    for (let i = 0; i <= maxIndex(); i++) {
      const d = document.createElement('div');
      d.className = 'testi-dot' + (i === index ? ' active' : '');
      d.addEventListener('click', () => { index = i; update(); });
      dots.appendChild(d);
    }
  }
  function update() {
    if (index > maxIndex()) index = maxIndex();
    track.style.transform = `translateX(-${(100 / perView) * index}%)`;
    dots.querySelectorAll('.testi-dot').forEach((d, i) => d.classList.toggle('active', i === index));
  }
  document.getElementById('testiPrev').addEventListener('click', () => { index = Math.max(0, index - 1); update(); });
  document.getElementById('testiNext').addEventListener('click', () => { index = Math.min(maxIndex(), index + 1); update(); });
  window.addEventListener('resize', () => { perView = window.innerWidth >= 1100 ? 3 : window.innerWidth >= 768 ? 2 : 1; buildDots(); update(); });
  buildDots();
  let autoSlide = setInterval(() => { index = index >= maxIndex() ? 0 : index + 1; update(); }, 5000);
  slider.addEventListener('mouseenter', () => clearInterval(autoSlide));
  slider.addEventListener('mouseleave', () => { autoSlide = setInterval(() => { index = index >= maxIndex() ? 0 : index + 1; update(); }, 5000); });
})();

/* Reveal */
function initRevealAnimations() {
  const reveals = document.querySelectorAll('.reveal:not(.visible), .reveal-3d:not(.visible)');
  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); io.unobserve(entry.target); } });
  }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });
  reveals.forEach(el => io.observe(el));
  setTimeout(() => {
    reveals.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) el.classList.add('visible');
    });
  }, 250);
}

/* Share */
(function initShare() {
  const btn = document.getElementById('shareBtn');
  const popup = document.getElementById('sharePopup');
  const siteUrl = window.location.href;
  const siteTitle = 'NOISEMAKERS — Where Sound Becomes Art';
  
  document.getElementById('shareWhatsApp').href = `https://wa.me/?text=${encodeURIComponent(siteTitle + ' — ' + siteUrl)}`;
  document.getElementById('shareTwitter').href = `https://twitter.com/intent/tweet?text=${encodeURIComponent(siteTitle)}&url=${encodeURIComponent(siteUrl)}`;
  document.getElementById('shareFacebook').href = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(siteUrl)}`;
  document.getElementById('shareInstagram').href = 'https://www.instagram.com/';
  document.getElementById('shareTikTok').href = `https://www.tiktok.com/share?url=${encodeURIComponent(siteUrl)}`;
  
  btn.addEventListener('click', () => popup.classList.add('open'));
  document.getElementById('shareClose').addEventListener('click', () => popup.classList.remove('open'));
  popup.addEventListener('click', e => { if (e.target === popup) popup.classList.remove('open'); });
  
  document.getElementById('shareCopy').addEventListener('click', () => {
    navigator.clipboard.writeText(siteUrl).then(() => {
      const txt = document.getElementById('shareCopyText');
      txt.textContent = '✓ Copied!'; setTimeout(() => txt.textContent = 'Copy Link', 2000);
    });
  });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') popup.classList.remove('open'); });
})();

/* Book Form */
(function initBookForm() {
  const form = document.getElementById('bookForm');
  if (!form) return;
  form.addEventListener('submit', e => {
    e.preventDefault();
    const data = new FormData(form);
    const text = `*New Booking Request — NOISEMAKERS*%0A%0A*Artist:* ${data.get('artistName') || ''}%0A*WhatsApp:* ${data.get('phone') || ''}%0A*Project:* ${data.get('projectType') || ''}%0A*Budget:* ${data.get('budget') || ''}%0A*Date:* ${data.get('date') || ''}%0A%0A*Message:*%0A${data.get('message') || ''}`;
    window.open(`https://wa.me/13439873280?text=${text}`, '_blank');
  });
})();

/* 3D Tilt */
(function init3DTilt() {
  function attachTilt(el) {
    el.addEventListener('mousemove', e => {
      const rect = el.getBoundingClientRect();
      const rx = ((e.clientY - rect.top - rect.height/2) / (rect.height/2)) * -8;
      const ry = ((e.clientX - rect.left - rect.width/2) / (rect.width/2)) * 8;
      el.style.transform = `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(10px)`;
    });
    el.addEventListener('mouseleave', () => { el.style.transform = ''; });
  }
  document.querySelectorAll('.tilt-3d').forEach(attachTilt);
  document.querySelectorAll('.btn-3d').forEach(btn => {
    btn.addEventListener('mousemove', e => {
      const rect = btn.getBoundingClientRect();
      const rx = ((e.clientY - rect.top - rect.height/2) / (rect.height/2)) * -6;
      const ry = ((e.clientX - rect.left - rect.width/2) / (rect.width/2)) * 6;
      btn.style.transform = `perspective(800px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-3px) translateZ(15px)`;
    });
    btn.addEventListener('mouseleave', () => { btn.style.transform = ''; });
  });
})();

/* Hero Parallax */
(function initHeroParallax() {
  const title = document.querySelector('.hero-title');
  if (!title) return;
  document.querySelector('.hero-content')?.addEventListener('mousemove', e => {
    const rect = e.currentTarget.getBoundingClientRect();
    title.style.transform = `perspective(1000px) rotateX(${((e.clientY - rect.top - rect.height/2) / (rect.height/2)) * -3}deg) rotateY(${((e.clientX - rect.left - rect.width/2) / (rect.width/2)) * 3}deg)`;
  });
  document.querySelector('.hero-content')?.addEventListener('mouseleave', () => { title.style.transform = ''; });
})();

console.log('%c🎵 NOISEMAKERS', 'font-size: 24px; font-weight: bold; color: #00c8ff;');
console.log('%cPowered by KS1 Empire Global Foundation (KS1EGF)', 'font-size: 12px; color: #888;');
