/* ═══════════════════════════════════════════
   ARYAN PORTFOLIO – SCRIPT.JS
   Particles · Animations · Dynamic Content
═══════════════════════════════════════════ */

/* ══════════════════════════════════════════
   DATA
══════════════════════════════════════════ */
const SKILLS = [
  {
    icon: '⚛️', cat: 'Frontend', sub: 'UI & Experiences',
    tags: [
      { name: 'React', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'Next.js', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
      { name: 'JavaScript', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
      { name: 'TypeScript', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
      { name: 'HTML5', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
      { name: 'CSS3', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    ]
  },
  {
    icon: '🔧', cat: 'Backend', sub: 'APIs & Servers',
    tags: [
      { name: 'Node.js', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
      { name: 'Express', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
      { name: 'Python', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
      { name: 'Java', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
      { name: 'FastAPI', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg' },
    ]
  },
  {
    icon: '🗄️', cat: 'Database', sub: 'Data & Storage',
    tags: [
      { name: 'MongoDB', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
      { name: 'PostgreSQL', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
      { name: 'MySQL', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
      { name: 'Redis', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg' },
    ]
  },
  {
    icon: '☁️', cat: 'DevOps & Cloud', sub: 'Deploy & Scale',
    tags: [
      { name: 'Docker', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
      { name: 'Git', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
      { name: 'GitHub', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
      { name: 'Linux', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
    ]
  },
  {
    icon: '🤖', cat: 'AI / ML', sub: 'Intelligent Apps',
    tags: [
      { name: 'TensorFlow', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg' },
      { name: 'OpenCV', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg' },
      { name: 'Pandas', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg' },
      { name: 'NumPy', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg' },
    ]
  },
  {
    icon: '🔨', cat: 'Tools', sub: 'Workflow & IDE',
    tags: [
      { name: 'VS Code', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
      { name: 'Figma', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
      { name: 'Postman', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg' },
      { name: 'Webpack', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg' },
    ]
  },
  {
    icon: '🎨', cat: 'UI/UX Design', sub: 'Design & Prototyping',
    tags: [
      { name: 'Figma', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
      { name: 'CSS3', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
      { name: 'Sass', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg' },
      { name: 'Tailwind', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
    ]
  },
  {
    icon: '🧊', cat: '3D & Motion', sub: 'Visuals & Immersion',
    tags: [
      { name: 'Three.js', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg' },
      { name: 'Blender', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/blender/blender-original.svg' },
      { name: 'WebGL', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opengl/opengl-original.svg' },
      { name: 'GSAP', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    ]
  },
];

const PROJECTS = [
  {
    emoji: '🤖', bg: 'linear-gradient(135deg,#1a1a2e,#16213e)',
    tags: ['JavaScript', 'APIs', 'Node.js'],
    title: 'AI Assistant Tool',
    desc: 'Built an AI-powered assistant that responds to queries and automates tasks using JavaScript and external AI APIs. Fast, practical, and production-ready.',
    demo: '#', repo: 'https://github.com/codewithmaxxaaa'
  },
  {
    emoji: '🍔', bg: 'linear-gradient(135deg,#2e1a0a,#3e2a0d)',
    tags: ['React', 'Node.js', 'MongoDB'],
    title: 'Burger Ordering Website',
    desc: 'Full-stack food ordering system with cart functionality, clean modern UI, and a responsive layout. A business-ready MERN stack application deployed on Vercel.',
    demo: 'https://client-nu-two-91.vercel.app/', repo: 'https://github.com/codewithmaxxaaa/Sunpro-Incorporation'
  },
  {
    emoji: '💬', bg: 'linear-gradient(135deg,#1a1a2e,#2e1a3e)',
    tags: ['MERN', 'Socket.io', 'MongoDB'],
    title: 'Customer Support System',
    desc: 'Chat-based system to handle user queries efficiently. Built with the MERN stack and real-time WebSocket communication for instant support response.',
    demo: '#', repo: 'https://github.com/codewithmaxxaaa'
  },
];

/* ══════════════════════════════════════════
   PARTICLE SYSTEM
══════════════════════════════════════════ */
(function initParticles() {
  const canvas = document.getElementById('particleCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H, particles = [], animId;

  function resize() {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }

  function randomRange(a, b) { return a + Math.random() * (b - a); }

  function spawnParticle() {
    return {
      x: randomRange(0, W),
      y: randomRange(0, H),
      r: randomRange(0.5, 2.5),
      vx: randomRange(-0.3, 0.3),
      vy: randomRange(-0.6, -0.1),
      alpha: randomRange(0.2, 0.7),
      da: randomRange(-0.003, -0.001),
      color: Math.random() < 0.25 ? '#ff6b00' : '#ffffff',
    };
  }

  function initParticles_() {
    particles = [];
    const count = Math.min(120, Math.floor((W * H) / 10000));
    for (let i = 0; i < count; i++) particles.push(spawnParticle());
  }

  function drawConnections() {
    const MAX_DIST = 120;
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const p = particles[i], q = particles[j];
        const dx = p.x - q.x, dy = p.y - q.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < MAX_DIST) {
          const alpha = (1 - dist / MAX_DIST) * 0.15;
          ctx.strokeStyle = `rgba(255,107,0,${alpha})`;
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(q.x, q.y);
          ctx.stroke();
        }
      }
    }
  }

  function tick() {
    ctx.clearRect(0, 0, W, H);
    drawConnections();
    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i];
      p.x += p.vx; p.y += p.vy; p.alpha += p.da;
      if (p.alpha <= 0 || p.y < -10) { particles.splice(i, 1); particles.push(spawnParticle()); continue; }
      ctx.globalAlpha = p.alpha;
      ctx.fillStyle = p.color;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.globalAlpha = 1;
    animId = requestAnimationFrame(tick);
  }

  resize();
  initParticles_();
  tick();
  window.addEventListener('resize', () => { resize(); initParticles_(); });
})();

/* ══════════════════════════════════════════
   RENDER SKILLS
══════════════════════════════════════════ */
(function renderSkills() {
  const grid = document.querySelector('.skills-grid');
  if (!grid) return;
  grid.innerHTML = SKILLS.map(s => `
    <div class="skill-card">
      <div class="skill-card-header">
        <div class="skill-icon">${s.icon}</div>
        <div>
          <div class="skill-cat">${s.cat}</div>
          <div class="skill-cat-sub">${s.sub}</div>
        </div>
      </div>
      <div class="skill-tags">
        ${s.tags.map(t => `
          <div class="skill-tag">
            <img src="${t.img}" alt="${t.name}" onerror="this.style.display='none'" />
            ${t.name}
          </div>`).join('')}
      </div>
    </div>`).join('');
})();

/* ══════════════════════════════════════════
   RENDER PROJECTS
══════════════════════════════════════════ */
(function renderProjects() {
  const grid = document.getElementById('projectsGrid');
  if (!grid) return;
  grid.innerHTML = PROJECTS.map(p => `
    <div class="proj-card">
      <div class="proj-thumb" style="background:${p.bg}">
        <span style="position:relative;z-index:1;filter:drop-shadow(0 0 20px rgba(255,107,0,0.5))">${p.emoji}</span>
      </div>
      <div class="proj-body">
        <div class="proj-tags">${p.tags.map(t => `<span class="proj-tag">${t}</span>`).join('')}</div>
        <div class="proj-title">${p.title}</div>
        <div class="proj-desc">${p.desc}</div>
        <div class="proj-links">
          <a href="${p.demo}" class="proj-link proj-link-primary" target="_blank">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/></svg>
            Live Demo
          </a>
          <a href="${p.repo}" class="proj-link" target="_blank">
            <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.29 9.41 7.86 10.94.57.11.78-.25.78-.55v-1.95c-3.19.69-3.86-1.54-3.86-1.54-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.74 2.68 1.24 3.33.95.1-.74.4-1.24.73-1.53-2.55-.29-5.23-1.27-5.23-5.67 0-1.25.45-2.27 1.18-3.07-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.17a10.9 10.9 0 012.87-.39c.97 0 1.95.13 2.87.39 2.19-1.48 3.15-1.17 3.15-1.17.62 1.58.23 2.75.11 3.04.74.8 1.18 1.82 1.18 3.07 0 4.41-2.69 5.38-5.25 5.66.41.36.78 1.07.78 2.16v3.2c0 .3.2.67.79.55C20.22 21.4 23.5 17.09 23.5 12 23.5 5.65 18.35.5 12 .5z"/></svg>
            GitHub
          </a>
        </div>
      </div>
    </div>`).join('');
})();

/* ══════════════════════════════════════════
   NAVBAR SCROLL EFFECT & ACTIVE LINK
══════════════════════════════════════════ */
(function initNavbar() {
  const navbar = document.getElementById('navbar');
  const links = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  function onScroll() {
    navbar.classList.toggle('scrolled', window.scrollY > 20);

    // Active link
    let current = '';
    sections.forEach(s => {
      const top = s.offsetTop - 100;
      if (window.scrollY >= top) current = s.id;
    });
    links.forEach(l => {
      l.classList.toggle('active', l.getAttribute('href') === `#${current}`);
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();

/* ══════════════════════════════════════════
   MOBILE NAV
══════════════════════════════════════════ */
(function initMobileNav() {
  const btn = document.getElementById('hamburger');
  const menu = document.getElementById('navLinks');
  if (!btn || !menu) return;

  btn.addEventListener('click', () => {
    btn.classList.toggle('open');
    menu.classList.toggle('open');
  });

  menu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      btn.classList.remove('open');
      menu.classList.remove('open');
    });
  });
})();

/* ══════════════════════════════════════════
   COUNT-UP STATS
══════════════════════════════════════════ */
(function initCountUp() {
  const nums = document.querySelectorAll('.stat-num[data-target]');
  let started = false;

  function countUp() {
    nums.forEach(el => {
      const target = parseInt(el.dataset.target, 10);
      let current = 0;
      const step = Math.ceil(target / 40);
      const timer = setInterval(() => {
        current = Math.min(current + step, target);
        el.textContent = current;
        if (current >= target) clearInterval(timer);
      }, 40);
    });
  }

  function checkVisible() {
    if (started) return;
    const first = nums[0];
    if (!first) return;
    const rect = first.getBoundingClientRect();
    if (rect.top < window.innerHeight) { started = true; countUp(); }
  }

  window.addEventListener('scroll', checkVisible, { passive: true });
  checkVisible();
})();

/* ══════════════════════════════════════════
   SCROLL-TRIGGERED AOS
══════════════════════════════════════════ */
(function initAOS() {
  const els = document.querySelectorAll('[data-aos]');

  function check() {
    els.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 80) {
        el.classList.add('aos-animate');
      }
    });
  }

  window.addEventListener('scroll', check, { passive: true });
  check();
})();

/* ══════════════════════════════════════════
   PARALLAX GLOW RING on mouse
══════════════════════════════════════════ */
(function initParallax() {
  const char = document.getElementById('heroChar');
  if (!char) return;
  document.addEventListener('mousemove', e => {
    const xFrac = (e.clientX / window.innerWidth - 0.5) * 2;
    const yFrac = (e.clientY / window.innerHeight - 0.5) * 2;
    char.style.transform = `translateY(0) rotateY(${xFrac * 6}deg) rotateX(${-yFrac * 4}deg)`;
  });
})();

/* ══════════════════════════════════════════
   CONTACT FORM
══════════════════════════════════════════ */
(function initContactForm() {
  const form = document.getElementById('contactForm');
  const note = document.getElementById('formNote');
  const btn  = document.getElementById('sendBtn');
  if (!form) return;

  form.addEventListener('submit', e => {
    e.preventDefault();
    btn.disabled = true;
    btn.querySelector('span').textContent = 'Sending…';
    note.className = 'form-note';
    note.textContent = '';

    // Simulate send (replace with real API call)
    setTimeout(() => {
      note.className = 'form-note success';
      note.textContent = '✅ Message sent! I\'ll get back to you soon.';
      btn.querySelector('span').textContent = 'Send Message';
      btn.disabled = false;
      form.reset();
    }, 1400);
  });
})();

/* ══════════════════════════════════════════
   SMOOTH HERO CHAR FLOAT PAUSE on hover
══════════════════════════════════════════ */
(function initCharHover() {
  const char = document.getElementById('heroChar');
  if (!char) return;
  char.addEventListener('mouseenter', () => char.style.animationPlayState = 'paused');
  char.addEventListener('mouseleave', () => char.style.animationPlayState = 'running');
})();

/* ══════════════════════════════════════════
   CURSOR GLOW (desktop only)
══════════════════════════════════════════ */
(function initCursorGlow() {
  if (window.matchMedia('(pointer:coarse)').matches) return; // skip touch
  const dot = document.createElement('div');
  dot.style.cssText = `
    position:fixed; pointer-events:none; z-index:9999;
    width:20px;height:20px;border-radius:50%;
    background:radial-gradient(circle,rgba(255,107,0,0.6),transparent 70%);
    transform:translate(-50%,-50%);
    transition:width .15s,height .15s,opacity .2s;
    mix-blend-mode:screen;
  `;
  document.body.appendChild(dot);

  document.addEventListener('mousemove', e => {
    dot.style.left = e.clientX + 'px';
    dot.style.top  = e.clientY + 'px';
  });

  document.querySelectorAll('a,button,.skill-card,.proj-card').forEach(el => {
    el.addEventListener('mouseenter', () => { dot.style.width='40px';dot.style.height='40px'; });
    el.addEventListener('mouseleave', () => { dot.style.width='20px';dot.style.height='20px'; });
  });
})();
