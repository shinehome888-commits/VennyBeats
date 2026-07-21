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

  portfolio: [
    { title: 'Monrovia Nights', artist: 'K. Johnson', role: 'Producer · Mixer', type: 'album', img: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&q=80', desc: 'A 10-track Afrobeats album recorded between Ottawa and Monrovia. Nominated for Best International Production 2024.', links: ['Spotify', 'Apple Music', 'YouTube'] },
    { title: 'Northern Lights', artist: 'Aria Moon', role: 'Producer · Songwriter', type: 'single', img: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&q=80', desc: 'An ethereal R&B single that reached #12 on the Canadian Indie chart.', links: ['Spotify', 'Apple Music'] },
    { title: 'Studio Sessions Vol. 1', artist: 'NOISEMAKERS', role: 'Producer · Engineer', type: 'video', img: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=600&q=80', desc: 'Behind-the-scenes documentary of a week in the studio with emerging Ottawa artists.', links: ['YouTube', 'Vimeo'] },
    { title: 'Diaspora', artist: 'The Collective', role: 'Executive Producer', type: 'album', img: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=600&q=80', desc: 'A collaborative album celebrating African diaspora sounds. 14 tracks, 7 artists, 3 countries.', links: ['Spotify', 'Apple Music', 'Tidal'] },
    { title: 'Echoes', artist: 'L. Mensah', role: 'Mixer · Mastering', type: 'single', img: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=600&q=80', desc: 'A haunting ballad mixed in Dolby Atmos for immersive streaming platforms.', links: ['Apple Music', 'Tidal'] },
    { title: 'Ottawa Underground', artist: 'Various Artists', role: 'Compiler · Mixer', type: 'mix', img: 'https://images.unsplash.com/photo-1571330735066-03aaa9429d89?w=600&q=80', desc: 'A curated mixtape showcasing the best of Ottawa\'s emerging hip-hop scene.', links: ['SoundCloud', 'Spotify'] },
    { title: 'Golden Hour', artist: 'S. Williams', role: 'Producer · Songwriter', type: 'single', img: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?w=600&q=80', desc: 'A sun-drenched pop single produced for international sync placement.', links: ['Spotify', 'YouTube'] },
    { title: 'Rhythm & Roots', artist: 'K. Johnson', role: 'Producer', type: 'video', img: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=600&q=80', desc: 'Music video directed and scored by NOISEMAKERS. 500K+ views.', links: ['YouTube'] },
    { title: 'Midnight in Gatineau', artist: 'Aria Moon', role: 'Mixer', type: 'mix', img: 'https://images.unsplash.com/photo-1501612780327-45045538702b?w=600&q=80', desc: 'A moody, atmospheric mix for late-night listening. Mastered for vinyl release.', links: ['Bandcamp', 'Spotify'] }
  ],

  tracks: [
    { title: 'Monrovia Nights', artist: 'K. Johnson', duration: '3:42', img: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=200&q=80' },
    { title: 'Northern Lights', artist: 'Aria Moon', duration: '4:18', img: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=200&q=80' },
    { title: 'Diaspora', artist: 'The Collective', duration: '3:56', img: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=200&q=80' },
    { title: 'Echoes', artist: 'L. Mensah', duration: '5:02', img: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=200&q=80' },
    { title: 'Golden Hour', artist: 'S. Williams', duration: '3:28', img: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?w=200&q=80' }
  ],

  videos: [
    { title: 'Studio Session: Monrovia Nights', artist: 'K. Johnson · Behind the Scenes', img: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=600&q=80' },
    { title: 'Making of: Northern Lights', artist: 'Aria Moon · Documentary', img: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=600&q=80' },
    { title: 'Rhythm & Roots', artist: 'K. Johnson · Official Video', img: 'https://images.unsplash.com/photo-1501612780327-45045538702b?w=600&q=80' },
    { title: 'Inside the Mix', artist: 'NOISEMAKERS · Tutorial', img: 'https://images.unsplash.com/photo-1520166012956-add9ba0835cb?w=600&q=80' },
    { title: 'Ottawa Underground', artist: 'Various Artists · Documentary', img: 'https://images.unsplash.com/photo-1571330735066-03aaa9429d89?w=600&q=80' },
    { title: 'Golden Hour (Lyric Video)', artist: 'S. Williams · Lyric Video', img: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?w=600&q=80' }
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
    { name: 'K. Johnson', role: 'Recording Artist · Monrovia', text: 'NOISEMAKERS doesn\'t just produce music — he captures emotion. Working with him transformed my sound completely. Every session felt like magic.', img: 'https://i.pravatar.cc/100?img=12' },
    { name: 'Aria Moon', role: 'Singer-Songwriter · Ottawa', text: 'The most professional and talented producer I\'ve ever worked with. He understood my vision instantly and elevated it beyond what I imagined possible.', img: 'https://i.pravatar.cc/100?img=47' },
    { name: 'The Collective', role: 'Band · Toronto', text: 'From songwriting to mastering, NOISEMAKERS delivered excellence at every step. Our album wouldn\'t exist without his vision and technical mastery.', img: 'https://i.pravatar.cc/100?img=33' },
    { name: 'L. Mensah', role: 'Artist · Accra', text: 'A true craftsman. The attention to detail in mixing and mastering is world-class. My music finally sounds the way I always dreamed it would.', img: 'https://i.pravatar.cc/100?img=15' },
    { name: 'S. Williams', role: 'Pop Artist · Vancouver', text: 'NOISEMAKERS has an incredible ear and a gift for bringing out the best in artists. The studio atmosphere is inspiring and the results speak for themselves.', img: 'https://i.pravatar.cc/100?img=44' },
    { name: 'D. Okafor', role: 'Independent Artist · Lagos', text: 'Remote collaboration made easy. The files came back sounding better than I could have imagined. Truly international quality.', img: 'https://i.pravatar.cc/100?img=60' }
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
        initCounters();
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

  // Hover states
  const hoverables = document.querySelectorAll('a, button, .portfolio-item, .service-card, .gallery-item, input, select, textarea');
  hoverables.forEach(el => {
    el.addEventListener('mouseenter', () => ring.classList.add('hover'));
    el.addEventListener('mouseleave', () => ring.classList.remove('hover'));
  });

  // Magnetic effect
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

/* ============ BACKGROUND CANVAS (particles) ============ */
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

    // Connect nearby particles
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
  const links = menu.querySelectorAll('.nav-link, .nav-cta');

  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 50);
  });

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    menu.classList.toggle('mobile-open');
  });

  links.forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      menu.classList.remove('mobile-open');
    });
  });
})();

/* ============ SEARCH ============ */
(function initSearch() {
  const btn = document.getElementById('searchBtn');
  const popup = document.getElementById('searchPopup');
  const close = document.getElementById('searchClose');
  const input = document.getElementById('searchInput');

  btn.addEventListener('click', () => {
    popup.classList.add('open');
    setTimeout(() => input.focus(), 300);
  });
  close.addEventListener('click', () => popup.classList.remove('open'));
  popup.addEventListener('click', e => {
    if (e.target === popup) popup.classList.remove('open');
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') popup.classList.remove('open');
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
      e.preventDefault();
      popup.classList.add('open');
      setTimeout(() => input.focus(), 300);
    }
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
    <div class="service-card reveal">
      <div class="service-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${ICONS[s.icon]}</svg>
      </div>
      <h3>${s.title}</h3>
      <p>${s.desc}</p>
    </div>
  `).join('');

  // Mouse glow follow
  grid.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      card.style.setProperty('--mx', (e.clientX - rect.left) + 'px');
      card.style.setProperty('--my', (e.clientY - rect.top) + 'px');
    });
  });
})();

/* ============ RENDER PORTFOLIO ============ */
(function renderPortfolio() {
  const grid = document.getElementById('portfolioGrid');
  if (!grid) return;

  function render(filter = 'all') {
    const items = filter === 'all' ? DATA.portfolio : DATA.portfolio.filter(p => p.type === filter);
    grid.innerHTML = items.map((p, i) => `
      <div class="portfolio-item reveal" data-index="${DATA.portfolio.indexOf(p)}">
        <img src="${p.img}" alt="${p.title}" loading="lazy" />
        <span class="portfolio-tag">${p.type}</span>
        <div class="portfolio-overlay">
          <h4>${p.title}</h4>
          <p>${p.artist} · ${p.role}</p>
        </div>
      </div>
    `).join('');
    attachPortfolioEvents();
    initRevealAnimations();
  }

  function attachPortfolioEvents() {
    grid.querySelectorAll('.portfolio-item').forEach(item => {
      item.addEventListener('click', () => openPortfolioModal(+item.dataset.index));
    });
  }

  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      render(btn.dataset.filter);
    });
  });

  render();
})();

function openPortfolioModal(index) {
  const p = DATA.portfolio[index];
  const modal = document.getElementById('portfolioModal');
  const body = document.getElementById('modalBody');
  body.innerHTML = `
    <img src="${p.img}" alt="${p.title}" />
    <h3>${p.title}</h3>
    <div class="modal-artist">${p.artist}</div>
    <div class="modal-role">${p.role}</div>
    <p>${p.desc}</p>
    <div class="modal-links">
      ${p.links.map(l => `<a href="#" target="_blank" rel="noopener">${l} ↗</a>`).join('')}
    </div>
  `;
  modal.classList.add('open');
}
document.getElementById('modalClose').addEventListener('click', () => {
  document.getElementById('portfolioModal').classList.remove('open');
});
document.getElementById('portfolioModal').addEventListener('click', e => {
  if (e.target.id === 'portfolioModal') e.currentTarget.classList.remove('open');
});

/* ============ MUSIC PLAYER ============ */
(function initPlayer() {
  const playlist = document.getElementById('playerPlaylist');
  const playBtn = document.getElementById('playBtn');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const art = document.getElementById('playerArt');
  const titleEl = document.getElementById('playerTitle');
  const artistEl = document.getElementById('playerArtist');
  const currentEl = document.getElementById('playerCurrent');
  const durationEl = document.getElementById('playerDuration');
  const progressFill = document.getElementById('progressFill');
  const progressBar = document.getElementById('progressBar');
  const volume = document.getElementById('volumeSlider');
  const vinyl = document.getElementById('vinylDisc');
  const wave = document.getElementById('playerWave');

  // Build waveform bars
  const WAVE_BARS = 60;
  for (let i = 0; i < WAVE_BARS; i++) {
    const bar = document.createElement('span');
    bar.style.height = (Math.random() * 60 + 20) + '%';
    wave.appendChild(bar);
  }
  const waveBars = wave.querySelectorAll('span');

  // Build playlist
  playlist.innerHTML = DATA.tracks.map((t, i) => `
    <div class="playlist-item" data-index="${i}">
      <img src="${t.img}" alt="${t.title}" />
      <div class="playlist-info">
        <h5>${t.title}</h5>
        <span>${t.artist}</span>
      </div>
      <div class="playlist-duration">${t.duration}</div>
    </div>
  `).join('');

  let current = 0;
  let isPlaying = false;
  let progress = 0;
  let progressInterval;

  function parseDuration(str) {
    const [m, s] = str.split(':').map(Number);
    return m * 60 + s;
  }

  function loadTrack(i) {
    current = i;
    const t = DATA.tracks[i];
    art.src = t.img;
    titleEl.textContent = t.title;
    artistEl.textContent = t.artist;
    durationEl.textContent = t.duration;
    currentEl.textContent = '0:00';
    progress = 0;
    progressFill.style.width = '0%';
    playlist.querySelectorAll('.playlist-item').forEach((el, idx) => {
      el.classList.toggle('active', idx === i);
    });
  }

  function formatTime(sec) {
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60);
    return `${m}:${s.toString().padStart(2, '0')}`;
  }

  function play() {
    isPlaying = true;
    playBtn.querySelector('.icon-play').style.display = 'none';
    playBtn.querySelector('.icon-pause').style.display = 'block';
    vinyl.classList.add('playing');
    const total = parseDuration(DATA.tracks[current].duration);
    progressInterval = setInterval(() => {
      progress += 0.5;
      if (progress >= total) {
        nextTrack();
        return;
      }
      const pct = (progress / total) * 100;
      progressFill.style.width = pct + '%';
      currentEl.textContent = formatTime(progress);
      // Animate wave
      const activeBars = Math.floor((pct / 100) * WAVE_BARS);
      waveBars.forEach((b, i) => b.classList.toggle('active', i < activeBars));
    }, 500);
  }

  function pause() {
    isPlaying = false;
    playBtn.querySelector('.icon-play').style.display = 'block';
    playBtn.querySelector('.icon-pause').style.display = 'none';
    vinyl.classList.remove('playing');
    clearInterval(progressInterval);
  }

  function nextTrack() {
    pause();
    loadTrack((current + 1) % DATA.tracks.length);
    if (isPlaying) play();
  }
  function prevTrack() {
    pause();
    loadTrack((current - 1 + DATA.tracks.length) % DATA.tracks.length);
    if (isPlaying) play();
  }

  playBtn.addEventListener('click', () => isPlaying ? pause() : play());
  nextBtn.addEventListener('click', nextTrack);
  prevBtn.addEventListener('click', prevTrack);

  playlist.querySelectorAll('.playlist-item').forEach(item => {
    item.addEventListener('click', () => {
      pause();
      loadTrack(+item.dataset.index);
      play();
    });
  });

  progressBar.addEventListener('click', e => {
    const rect = progressBar.getBoundingClientRect();
    const pct = (e.clientX - rect.left) / rect.width;
    const total = parseDuration(DATA.tracks[current].duration);
    progress = pct * total;
    progressFill.style.width = (pct * 100) + '%';
    currentEl.textContent = formatTime(progress);
  });

  volume.addEventListener('input', e => {
    // Visual only — no actual audio in this demo
  });

  loadTrack(0);
})();

/* ============ RENDER VIDEOS ============ */
(function renderVideos() {
  const grid = document.getElementById('videosGrid');
  if (!grid) return;
  grid.innerHTML = DATA.videos.map(v => `
    <div class="video-card reveal">
      <img src="${v.img}" alt="${v.title}" loading="lazy" />
      <div class="video-play">
        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
      </div>
      <div class="video-info">
        <h4>${v.title}</h4>
        <span>${v.artist}</span>
      </div>
    </div>
  `).join('');
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
            <img src="${t.img}" alt="${t.name}" loading="lazy" />
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

  // Auto slide
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
  const reveals = document.querySelectorAll('.reveal:not(.visible)');
  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
  reveals.forEach(el => io.observe(el));
}

/* ============ ANIMATED COUNTERS ============ */
function initCounters() {
  const counters = document.querySelectorAll('.stat-num');
  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = +el.dataset.count;
        let current = 0;
        const step = target / 60;
        const timer = setInterval(() => {
          current += step;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          el.textContent = Math.floor(current);
        }, 25);
        io.unobserve(el);
      }
    });
  }, { threshold: 0.5 });
  counters.forEach(c => io.observe(c));
}

/* ============ SCROLL PROGRESS ============ */
(function initScrollProgress() {
  const bar = document.getElementById('scrollProgress');
  window.addEventListener('scroll', () => {
    const h = document.documentElement;
    const scrolled = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
    bar.style.width = scrolled + '%';
  }, { passive: true });
})();

/* ============ BACK TO TOP ============ */
(function initBackToTop() {
  const btn = document.getElementById('backToTop');
  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 500);
  });
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
})();

/* ============ BOOKING FORM ============ */
(function initBookForm() {
  const form = document.getElementById('bookForm');
  if (!form) return;
  form.addEventListener('submit', e => {
    e.preventDefault();
    const btn = form.querySelector('.btn-submit span');
    const original = btn.textContent;
    btn.textContent = 'Sending...';
    setTimeout(() => {
      btn.textContent = '✓ Request Sent!';
      form.reset();
      setTimeout(() => btn.textContent = original, 3000);
    }, 1200);
  });
})();

/* ============ NEWSLETTER ============ */
(function initNewsletter() {
  const form = document.getElementById('newsletterForm');
  if (!form) return;
  form.addEventListener('submit', e => {
    e.preventDefault();
    const btn = form.querySelector('button');
    btn.textContent = '✓';
    form.reset();
    setTimeout(() => btn.textContent = '→', 2500);
  });
})();

/* ============ WORKFLOW TIMELINE ANIMATION ============ */
(function initWorkflow() {
  const steps = document.querySelectorAll('.timeline-step');
  const io = new IntersectionObserver(entries => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 150);
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });
  steps.forEach(s => io.observe(s));
})();

/* ============ PARALLAX ============ */
(function initParallax() {
  const hero = document.querySelector('.hero-bg img');
  if (!hero) return;
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    if (y < window.innerHeight) {
      hero.style.transform = `translateY(${y * 0.3}px) scale(1.1)`;
    }
  }, { passive: true });
})();

/* ============ SMOOTH ANCHOR SCROLL ============ */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const href = a.getAttribute('href');
    if (href === '#' || href.length < 2) return;
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      const offset = 80;
      const y = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  });
});

/* ============ PRELOAD CRITICAL IMAGES ============ */
(function preload() {
  const critical = [
    'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=1920&q=80'
  ];
  critical.forEach(src => { const img = new Image(); img.src = src; });
})();

/* ============ CONSOLE GREETING ============ */
console.log('%c🎵 NOISEMAKERS', 'font-size: 24px; font-weight: bold; color: #00c8ff;');
console.log('%cWhere Sound Becomes Art.', 'font-size: 14px; color: #bdbdbd;');
console.log('%cBuilt with passion in Ottawa, Canada.', 'font-size: 12px; color: #888;');
