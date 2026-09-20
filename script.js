(() => {
  'use strict';

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const root = document.documentElement;
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];

  /* ---------- Language: English / Khmer ---------- */
  const KM = {"k0":"អំពី","k1":"ជំនាញ","k2":"វិជ្ជាជីវៈ","k3":"ការអប់រំ","k4":"បទពិសោធន៍","k5":"ទំនាក់ទំនង","k6":"<span class=\"ps\">$</span> សួស្តី! ខ្ញុំគឺ","k7":"ខ្ញុំជានិស្សិតថ្នាក់បរិញ្ញាបត្ររង ផ្នែកវិស្វកម្មកុំព្យូទ័រ នៅ <strong>Tacoma Community College</strong>។ ខ្ញុំចូលចិត្តរៀនសរសេរកូដ និងបង្កើតអ្វីដែលថ្មីៗ ភាពចង់ដឹងចង់ឃើញបាននាំខ្ញុំមកទីនេះ ហើយការងារក្តីសុបិនរបស់ខ្ញុំគឺក្លាយជា <strong>វិស្វករ Embedded ML</strong>។","k8":"មើលជំនាញរបស់ខ្ញុំ","k9":"ទាក់ទងខ្ញុំ","k10":"រំកិលចុះក្រោម","k11":"អំពីខ្ញុំ","k12":"ខ្ញុំគឺ <strong>Doryco Chorng</strong> បច្ចុប្បន្នកំពុងសិក្សាថ្នាក់ <strong>បរិញ្ញាបត្ររងផ្នែកវិស្វកម្មកុំព្យូទ័រ</strong> នៅ Tacoma Community College (TCC)។ ខ្ញុំចូលចិត្តរៀនសរសេរកូដ និងបង្កើតអ្វីដែលថ្មីៗ ហើយភាពចង់ដឹងចង់ឃើញបាននាំខ្ញុំមកទីនេះ។ ការងារក្តីសុបិនរបស់ខ្ញុំគឺក្លាយជា <strong>វិស្វករ Embedded ML</strong>។","k13":"ឈ្មោះ","k14":"កំពុងសិក្សា","k15":"សាលា","k16":"ផ្នែកផ្តោត","k17":"សញ្ជាតិ","k18":"បរិញ្ញាបត្ររង វិស្វកម្មកុំព្យូទ័រ","k19":"អ្នកអភិវឌ្ឍ Full Stack","k20":"ខ្មែរ","k21":"ក្តីសុបិនអនាគតរបស់ខ្ញុំ","k22":"វិស្វករ Embedded ML","k23":"ខ្ញុំចង់ផ្សំវិស្វកម្មកុំព្យូទ័រ និង machine learning ដើម្បីបង្កើតឧបករណ៍ឆ្លាតវៃ។","k24":"និស្សិតវិស្វកម្មកុំព្យូទ័រ","k25":"កម្មវិធីបរិញ្ញាបត្ររងនៅ TCC។","k26":"បង្កើតគេហទំព័រ ចាប់ពីអេក្រង់ដែលមនុស្សមើលឃើញ រហូតដល់ឡូជិកនៅពីក្រោយ។","k27":"អ្នកដោះស្រាយបញ្ហាបច្ចេកទេស","k28":"ដោះស្រាយបញ្ហាបច្ចេកទេស។","k29":"ប្រធានថ្នាក់","k30":"ជួយលោកគ្រូអ្នកគ្រូក្នុងកិច្ចការប្រចាំថ្ងៃ។","k31":"អ្នកស្ម័គ្រចិត្តសហគមន៍","k32":"ស្ម័គ្រចិត្ត និងជួយក្នុងសេវាកម្មសហគមន៍។","k33":"អ្នកដឹកនាំនិស្សិត","k34":"ទទួលខុសត្រូវក្នុងតួនាទីដឹកនាំ។","k35":"២០២៦ &ndash; បច្ចុប្បន្ន","k36":"២០២៥ &ndash; ២០២៦","k37":"២០២៤ &ndash; ២០២៥","k38":"២០១៩ &ndash; ២០២៤","k39":"WA សហរដ្ឋអាមេរិក","k40":"កម្ពុជា","k41":"ជំនាញបរិញ្ញាបត្ររង ផ្នែកវិស្វកម្មកុំព្យូទ័រ។","k42":"សិក្សានៅថ្នាក់ទី១១។","k43":"វិទ្យាល័យនៅកម្ពុជា ថ្នាក់ទី១០។","k44":"សាលាឯកជននៅកម្ពុជា ពីថ្នាក់ទី៥ ដល់ថ្នាក់ទី៩។","k45":"មិថុនា ២០២៥ &ndash; សីហា ២០២៥","k46":"ការដោះស្រាយបញ្ហាបច្ចេកទេស","k47":"ជួយដោះស្រាយបញ្ហាបច្ចេកទេស។","k48":"កញ្ញា ២០២៤ &ndash; កក្កដា ២០២៥","k49":"ប្រធានថ្នាក់ និងអ្នកស្ម័គ្រចិត្តសហគមន៍","k50":"ជួយលោកគ្រូអ្នកគ្រូក្នុងកិច្ចការប្រចាំថ្ងៃនៅក្នុងថ្នាក់ ចូលរួមការងារស្ម័គ្រចិត្តសហគមន៍ និងទទួលខុសត្រូវក្នុងតួនាទីដឹកនាំ។","k51":"ជជែកគ្នា","k52":"ចាប់អារម្មណ៍ធ្វើការជាមួយគ្នា ឬគ្រាន់តែចង់ជម្រាបសួរ? សូមផ្ញើសារតាមទម្រង់ ឬស្វែងរកខ្ញុំតាមគណនីទាំងនេះ។","k53":"ស្វែងរកខ្ញុំតាមអនឡាញ","k54":"ទំនាក់ទំនងយើង","k55":"សូមបំពេញទម្រង់ ហើយសាររបស់អ្នកនឹងត្រូវបានផ្ញើត្រង់ទៅប្រអប់សំបុត្ររបស់ខ្ញុំ។","k56":"ឈ្មោះពេញ","k57":"អ៊ីមែលរបស់អ្នក","k58":"គោលបំណង","k59":"សារ","k60":"ហេតុអ្វីអ្នកទាក់ទងខ្ញុំ?","k61":"ឱកាសការងារ ឬហ្វឹកហាត់ការ","k62":"សហការលើគម្រោង","k63":"សួរសំណួរ","k64":"មតិកែលម្អអំពី portfolio របស់ខ្ញុំ","k65":"គ្រាន់តែជម្រាបសួរ","k66":"ផ្សេងៗ","k67":"ផ្ញើសារ","k68":"បានផ្ញើសារហើយ!","k69":"ផ្ញើសារមួយទៀត"};
  const KMPH = {"p0":"ឈ្មោះពេញរបស់អ្នក","p1":"ដើម្បីឱ្យខ្ញុំអាចឆ្លើយតបទៅអ្នក","p2":"សរសេរសាររបស់អ្នកនៅទីនេះ..."};
  Object.assign(KM, { sch1: 'សាលារៀនជំនាន់ថ្មីវិទ្យាល័យព្រះយុគន្ធរ', sch2: 'សាលារៀនអន្តរជាតិបញ្ញាសាស្ត្រ សាខាសែនសុខ', sch2p: 'ភ្នំពេញ កម្ពុជា' });
  Object.assign(KM, { ach: 'សមិទ្ធផល', silver: 'មេដាយប្រាក់', bronze: 'មេដាយសំរិទ្ធ', honor: 'វិញ្ញាបនបត្រកិត្តិយស', runner: 'ជ័យលាភីលេខ ៣ (3rd Runner-up)', intl: 'ការប្រកួតអន្តរជាតិ', y2025: '២០២៥', y2019: '២០១៩' });
  Object.assign(KM, { r_cop: 'គណិតវិទ្យា · ជុំជម្រុះ', r_wmi: 'ជុំជម្រុះ · កម្ពុជា', r_sasmo: 'ថ្នាក់ទី១០ · សាលារៀនជំនាន់ថ្មីវិទ្យាល័យព្រះយុគន្ធរ', r_aimo: 'ជុំសាកល្បងនៅកម្ពុជា' });
  Object.assign(KM, { thatsme: '// នេះជាខ្ញុំ' });
  Object.assign(KM, { focus: 'Full Stack, Hardware និង AI' });
  Object.assign(KM, { orgby: 'រៀបចំដោយ' });
  const MSG = {
    en: {
      errName: 'Please enter your full name.',
      errEmail: 'Please enter a valid email address.',
      errPurpose: 'Please choose a purpose.',
      errMessage: 'Please write a message (at least 10 characters).',
      errFix: 'Please fix the highlighted fields.',
      sending: 'Sending your message...',
      thanks: (n, e) => 'Thank you, ' + n + '! I will reply to ' + e + ' soon.',
      sendFail: href => 'Sorry, the message could not be sent automatically. <a href="' + href + '">Click here to send it with your email app</a> instead.',
      caption: name => 'A quick summary of me, written in ' + name + '.',
      captionJson: 'A quick summary of me, written as JSON.',
      lbClose: 'Close', lbPrev: 'Previous', lbNext: 'Next', lbView: 'Photo viewer'
    },
    km: {
      errName: 'សូមបញ្ចូលឈ្មោះពេញរបស់អ្នក។',
      errEmail: 'សូមបញ្ចូលអាសយដ្ឋានអ៊ីមែលត្រឹមត្រូវ។',
      errPurpose: 'សូមជ្រើសរើសគោលបំណង។',
      errMessage: 'សូមសរសេរសារ (យ៉ាងតិច ១០ តួអក្សរ)។',
      errFix: 'សូមកែតម្រូវប្រអប់ដែលបានបន្លិច។',
      sending: 'កំពុងផ្ញើសាររបស់អ្នក...',
      thanks: (n, e) => 'អរគុណ ' + n + '! ខ្ញុំនឹងឆ្លើយតបទៅ ' + e + ' ក្នុងពេលឆាប់ៗ។',
      sendFail: href => 'សូមអភ័យទោស សារមិនអាចផ្ញើដោយស្វ័យប្រវត្តិបានទេ។ <a href="' + href + '">សូមចុចទីនេះ</a> ដើម្បីផ្ញើតាមកម្មវិធីអ៊ីមែលរបស់អ្នកជំនួស។',
      caption: name => 'សេចក្តីសង្ខេបខ្លីអំពីខ្ញុំ សរសេរជា ' + name + '។',
      captionJson: 'សេចក្តីសង្ខេបខ្លីអំពីខ្ញុំ សរសេរជា JSON។',
      lbClose: 'បិទ', lbPrev: 'មុន', lbNext: 'បន្ទាប់', lbView: 'កម្មវិធីមើលរូបភាព'
    }
  };
  let LANG = 'en';
  try {
    const saved = localStorage.getItem('lang');
    LANG = saved === 'km' || saved === 'en' ? saved : ((navigator.language || '').toLowerCase().startsWith('km') ? 'km' : 'en');
  } catch (e) { LANG = 'en'; }
  const EN = {}, ENPH = {}, langHooks = [];
  const M = (k, ...a) => { const v = MSG[LANG][k]; return typeof v === 'function' ? v(...a) : v; };

  function applyLang(l, save) {
    LANG = l;
    root.setAttribute('lang', l);
    $$('[data-i18n]').forEach(el => {
      const id = el.dataset.i18n;
      if (!(id in EN)) EN[id] = el.innerHTML;
      el.innerHTML = l === 'km' && KM[id] ? KM[id] : EN[id];
    });
    $$('[data-i18n-ph]').forEach(el => {
      const id = el.dataset.i18nPh;
      if (!(id in ENPH)) ENPH[id] = el.getAttribute('placeholder');
      el.setAttribute('placeholder', l === 'km' && KMPH[id] ? KMPH[id] : ENPH[id]);
    });
    $$('.lang-switch button').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.l === l)));
    const label = l === 'km' ? { en: 'អង់គ្លេស', km: 'ខ្មែរ' } : { en: 'EN', km: 'KH' };
    $$('.lang-switch button').forEach(b => { b.textContent = label[b.dataset.l]; });
    if (save) { try { localStorage.setItem('lang', l); } catch (e) { /* storage may be blocked */ } }
    langHooks.forEach(f => f());
  }
  $$('.lang-switch button').forEach(b => b.addEventListener('click', () => applyLang(b.dataset.l, true)));

  /* ---------- Theme (light / dark) ---------- */
  const colors = { dot: '#3b4350', syntax: ['#ff7b72', '#a5d6ff', '#79c0ff', '#d2a8ff', '#3fb950'] };
  const readColors = () => {
    const cs = getComputedStyle(root);
    const v = n => cs.getPropertyValue(n).trim();
    colors.dot = v('--dot') || colors.dot;
    colors.syntax = ['--c-kw', '--c-str', '--c-prop', '--c-fn', '--accent-2'].map((n, i) => v(n) || colors.syntax[i]);
  };
  readColors();
  $('#themeBtn').addEventListener('click', () => {
    const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    const tc = document.querySelector('meta[name="theme-color"]');
    if (tc) tc.setAttribute('content', next === 'dark' ? '#0d1117' : '#f6f8fa');
    try { localStorage.setItem('theme', next); } catch (e) { /* storage may be blocked */ }
    readColors();
  });

  /* ---------- Intro: the logo draws itself, then we zoom inside ---------- */
  document.body.classList.add('loading');
  const enterSite = () => {
    $('#loader').classList.add('enter');
    document.body.classList.add('entered');
    setTimeout(() => {
      document.body.classList.remove('loading');
      startTyping();
    }, reduceMotion ? 0 : 900);
  };
  window.addEventListener('load', () => setTimeout(enterSite, reduceMotion ? 0 : 1600));

  /* ---------- Mouse tracking + custom cursor ---------- */
  const mouse = { x: -9999, y: -9999, active: false };
  const dot = $('#cursorDot');
  const ring = $('#cursorRing');
  let rx = 0, ry = 0;

  window.addEventListener('mousemove', e => {
    mouse.x = e.clientX; mouse.y = e.clientY; mouse.active = true;
    document.body.classList.add('has-mouse');
    dot.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
  });
  window.addEventListener('mouseleave', () => { mouse.active = false; document.body.classList.remove('has-mouse'); });
  document.addEventListener('mouseover', e => {
    ring.classList.toggle('hover', !!e.target.closest('a, button, .card, .chips li, .flag'));
  });
  window.addEventListener('touchmove', e => {
    const t = e.touches[0]; mouse.x = t.clientX; mouse.y = t.clientY; mouse.active = true;
  }, { passive: true });
  window.addEventListener('touchend', () => { mouse.active = false; });
  (function follow() {
    rx += (mouse.x - rx) * .16; ry += (mouse.y - ry) * .16;
    ring.style.transform = `translate(${rx}px, ${ry}px)`;
    requestAnimationFrame(follow);
  })();

  /* ---------- Background: faint code symbols that lean toward the cursor and light up in syntax colours ---------- */
  const canvas = $('#bg');
  const ctx = canvas.getContext('2d');
  let W, H, DPR, SPACE, dots = [], clock = 0;
  const waves = [];                 // ripples started by clicking

  const GLYPHS = ['{', '}', '[', ']', '(', ')', ':', '=', '#', '.', ',', '"', '_', '0', '1', '+', '*', '%', 'def', 'for', 'in', 'if', 'None', '->', '==', '!=', 'pass'];
  const pick = () => (Math.random() * GLYPHS.length) | 0;
  function resize() {
    DPR = Math.min(window.devicePixelRatio || 1, 2);
    W = canvas.width = innerWidth * DPR;
    H = canvas.height = innerHeight * DPR;
    canvas.style.width = innerWidth + 'px';
    canvas.style.height = innerHeight + 'px';
    SPACE = (innerWidth < 600 ? 36 : 44) * DPR;
    const cols = Math.ceil(W / SPACE) + 1, rows = Math.ceil(H / SPACE) + 1;
    const x0 = (W - (cols - 1) * SPACE) / 2, y0 = (H - (rows - 1) * SPACE) / 2;
    dots = [];
    for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) dots.push({ x: x0 + c * SPACE, y: y0 + r * SPACE, ox: 0, oy: 0, vx: 0, vy: 0, g: pick(), col: (Math.random() * 5) | 0 });
  }
  resize();
  let resizeTimer;
  window.addEventListener('resize', () => { clearTimeout(resizeTimer); resizeTimer = setTimeout(resize, 120); });
  window.addEventListener('click', e => { if (!reduceMotion) waves.push({ x: e.clientX * DPR, y: e.clientY * DPR, r: 0, max: 460 * DPR }); });

  function draw() {
    clock++;
    ctx.clearRect(0, 0, W, H);
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    const mx = mouse.x * DPR, my = mouse.y * DPR, R = 180 * DPR;
    const baseFont = `${13 * DPR}px Consolas, "Cascadia Code", monospace`;
    if (!reduceMotion) for (let i = 0; i < 3; i++) dots[(Math.random() * dots.length) | 0].g = pick();   // symbols slowly shuffle

    for (let i = waves.length - 1; i >= 0; i--) {
      waves[i].r += 7 * DPR;
      if (waves[i].r > waves[i].max) waves.splice(i, 1);
    }

    for (const d of dots) {
      let tx = 0, ty = 0, heat = 0;

      if (mouse.active) {
        const dx = mx - d.x, dy = my - d.y, dist = Math.hypot(dx, dy);
        if (dist < R && dist > 1) {
          const k = 1 - dist / R;
          const pull = k * k * 26 * DPR;            // dots drift toward the pointer, easing in as they get close
          tx += dx / dist * pull; ty += dy / dist * pull;
          heat = k;
        }
      }
      for (const w of waves) {
        const dx = d.x - w.x, dy = d.y - w.y, dist = Math.hypot(dx, dy) || 1, diff = Math.abs(dist - w.r), band = 50 * DPR;
        if (diff < band) {
          const k = (1 - diff / band) * (1 - w.r / w.max);
          tx += dx / dist * k * 16 * DPR; ty += dy / dist * k * 16 * DPR;
          heat = Math.max(heat, k * .9);
        }
      }

      // spring toward the target offset
      d.vx = (d.vx + (tx - d.ox) * .14) * .72; d.vy = (d.vy + (ty - d.oy) * .14) * .72;
      d.ox += d.vx; d.oy += d.vy;

      const hot = heat > .04;
      if (hot) {
        ctx.font = `${(13 + heat * 11) * DPR}px Consolas, "Cascadia Code", monospace`;
        ctx.globalAlpha = Math.min(1, .3 + heat * .85);
        ctx.fillStyle = colors.syntax[d.col];
      } else {
        ctx.font = baseFont;
        ctx.globalAlpha = reduceMotion ? .55 : .5 + .3 * Math.sin(clock * .02 + (d.x + d.y) * .005);
        ctx.fillStyle = colors.dot;
      }
      ctx.fillText(GLYPHS[d.g], d.x + d.ox, d.y + d.oy);
    }
    ctx.globalAlpha = 1;
    requestAnimationFrame(draw);
  }
  requestAnimationFrame(draw);

  /* ---------- Typing effect ---------- */
  const PHRASES = {
    en: ['Computer Engineering Student', 'Full Stack Developer', 'Future Embedded ML Engineer', 'Microsoft Office 365 User'],
    km: ['និស្សិតវិស្វកម្មកុំព្យូទ័រ', 'អ្នកអភិវឌ្ឍ Full Stack', 'វិស្វករ Embedded ML នាពេលអនាគត', 'អ្នកប្រើប្រាស់ Microsoft Office 365']
  };
  const seg = typeof Intl !== 'undefined' && Intl.Segmenter ? new Intl.Segmenter(undefined, { granularity: 'grapheme' }) : null;
  const parts = w => seg ? [...seg.segment(w)].map(s => s.segment) : [...w];
  let typingStarted = false;
  const ty = { pi: 0, ci: 0, deleting: false };
  function startTyping() {
    if (typingStarted) return;
    typingStarted = true;
    const el = $('#typed');
    if (reduceMotion) { el.textContent = PHRASES[LANG][0]; return; }
    (function tick() {
      const list = PHRASES[LANG];
      const chars = parts(list[ty.pi % list.length]);
      ty.ci = Math.min(Math.max(ty.ci + (ty.deleting ? -1 : 1), 0), chars.length);
      el.textContent = chars.slice(0, ty.ci).join('');
      let delay = ty.deleting ? 30 : 70;
      if (!ty.deleting && ty.ci === chars.length) { delay = 1700; ty.deleting = true; }
      else if (ty.deleting && ty.ci === 0) { ty.deleting = false; ty.pi = (ty.pi + 1) % list.length; delay = 350; }
      setTimeout(tick, delay);
    })();
  }
  langHooks.push(() => {
    ty.pi = 0; ty.ci = 0; ty.deleting = false;
    if (typingStarted && reduceMotion) $('#typed').textContent = PHRASES[LANG][0];
  });

  /* ---------- Reveal on scroll ---------- */
  $$('.reveal').forEach(el => {
    const idx = [...el.parentElement.children].filter(c => c.classList.contains('reveal')).indexOf(el);
    el.style.setProperty('--d', `${Math.min(Math.max(idx, 0), 4) * .08}s`);
  });
  $$('.chips').forEach(c => [...c.children].forEach((s, i) => s.style.setProperty('--i', i)));
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { threshold: .12 });
  $$('.reveal').forEach(el => io.observe(el));

  /* ---------- Nav: scroll state, progress bar, active link ---------- */
  const nav = $('#nav');
  const bar = $('#scrollProgress');
  const links = $$('.links a');
  const sections = links.map(a => $(a.getAttribute('href')));

  // Education / Experience: a plane flies along the connecting line and lands at each stop as you scroll
  const PLANE = '<span class="plane-body"><svg viewBox="0 0 24 24"><path d="M12 2c.9 0 1.6 1 1.6 2.4V9l8 4.6v2l-8-2.2v4.3l2.4 1.8V21l-4-1-4 1v-1.5l2.4-1.8v-4.3l-8 2.2v-2l8-4.6V4.4C10.4 3 11.1 2 12 2z"/></svg></span>';
  const timelines = $$('.timeline').map(el => {
    const plane = document.createElement('span');
    plane.className = 'plane';
    plane.setAttribute('aria-hidden', 'true');
    plane.innerHTML = PLANE;
    el.appendChild(plane);
    return { el, items: $$('.tl-item', el), target: 0, cur: 0, dir: 1, ready: false };
  });

  // where the plane should be: how far down the line the reader has scrolled
  function updateTimelines() {
    for (const t of timelines) {
      const r = t.el.getBoundingClientRect();
      t.target = Math.min(Math.max((innerHeight * .62 - r.top) / r.height, 0), 1);
    }
  }

  // ease the plane toward its target every frame, light up the stops it has reached
  (function flyPlanes() {
    for (const t of timelines) {
      const prev = t.cur;
      t.cur = reduceMotion ? t.target : t.cur + (t.target - t.cur) * .07;
      if (Math.abs(t.target - t.cur) < .0004) t.cur = t.target;
      const d = t.cur - prev;
      if (!t.ready || d !== 0) {
        if (d > .0001) t.dir = 1; else if (d < -.0001) t.dir = -1;
        t.el.style.setProperty('--p', t.cur.toFixed(4));
        t.el.style.setProperty('--rot', t.dir === 1 ? '180deg' : '0deg');
        const r = t.el.getBoundingClientRect();
        for (const item of t.items) {
          const dot = $('.tl-dot', item).getBoundingClientRect();
          const reached = dot.top - r.top < t.cur * r.height + 4;
          if (reached && !item.classList.contains('active') && t.ready) {
            item.classList.add('arrive');
            setTimeout(() => item.classList.remove('arrive'), 1100);
          }
          item.classList.toggle('active', reached);
        }
        t.ready = true;
      }
    }
    requestAnimationFrame(flyPlanes);
  })();

  function onScroll() {
    const y = scrollY;
    nav.classList.toggle('scrolled', y > 30);
    const max = document.documentElement.scrollHeight - innerHeight;
    bar.style.width = (max > 0 ? (y / max) * 100 : 0) + '%';
    let current = -1;
    sections.forEach((s, i) => { if (s && s.getBoundingClientRect().top < innerHeight * .4) current = i; });
    links.forEach((a, i) => a.classList.toggle('active', i === current));
    updateTimelines();
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  onScroll();

  /* ---------- Mobile menu ---------- */
  const menuBtn = $('#menuBtn');
  const menu = $('#links');
  const setMenu = open => {
    menu.classList.toggle('open', open);
    menuBtn.classList.toggle('open', open);
    menuBtn.setAttribute('aria-expanded', open);
    document.body.style.overflow = open ? 'hidden' : '';
  };
  menuBtn.addEventListener('click', () => setMenu(!menu.classList.contains('open')));
  links.forEach(a => a.addEventListener('click', () => setMenu(false)));

  /* ---------- Contact form: sends the message to my inbox ---------- */
  const CONTACT_EMAIL = 'doryco.chorng@outlook.com';
  const form = $('#contactForm');
  if (form) {
    const submitBtn = $('#cfSubmit');
    const statusEl = $('#formStatus');
    const doneEl = $('#formDone');
    const errs = Object.fromEntries($$('.err', form).map(e => [e.dataset.for, e]));
    const rules = {
      name: v => v.trim().length >= 2 || M('errName'),
      email: v => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()) || M('errEmail'),
      purpose: v => !!v || M('errPurpose'),
      message: v => v.trim().length >= 10 || M('errMessage')
    };
    const check = name => {
      const field = form.elements[name];
      const res = rules[name](field.value);
      const ok = res === true;
      errs[name].textContent = ok ? '' : res;
      field.setAttribute('aria-invalid', ok ? 'false' : 'true');
      return ok;
    };
    Object.keys(rules).forEach(n => {
      form.elements[n].addEventListener('blur', () => check(n));
      form.elements[n].addEventListener('input', () => { if (form.elements[n].getAttribute('aria-invalid') === 'true') check(n); });
    });

    const setStatus = (msg, kind) => { statusEl.textContent = msg; statusEl.className = 'form-status' + (kind ? ' ' + kind : ''); };
    const mailtoFallback = data => {
      const body = 'Name: ' + data.name + '\nEmail: ' + data.email + '\nPurpose: ' + data.purpose + '\n\n' + data.message;
      return 'mailto:' + CONTACT_EMAIL + '?subject=' + encodeURIComponent('Portfolio contact: ' + data.purpose) + '&body=' + encodeURIComponent(body);
    };

    form.addEventListener('submit', async e => {
      e.preventDefault();
      const valid = Object.keys(rules).map(check).every(Boolean);
      if (!valid) { setStatus(M('errFix'), 'error'); form.querySelector('[aria-invalid="true"]')?.focus(); return; }

      const data = { name: form.elements.name.value.trim(), email: form.elements.email.value.trim(), purpose: form.elements.purpose.value, message: form.elements.message.value.trim() };
      submitBtn.disabled = true; submitBtn.classList.add('loading'); setStatus(M('sending'), '');
      try {
        const res = await fetch('https://formsubmit.co/ajax/' + CONTACT_EMAIL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
          body: JSON.stringify(Object.assign({}, data, {
            _subject: 'Portfolio contact: ' + data.purpose + ' (from ' + data.name + ')',
            _template: 'table', _captcha: 'false', _honey: form.elements._honey.value
          }))
        });
        const out = await res.json().catch(() => ({}));
        if (!res.ok || !(out.success === true || out.success === 'true')) throw new Error(out.message || 'Request failed');
        form.hidden = true; doneEl.hidden = false;
        $('#doneText').textContent = M('thanks', data.name.split(' ')[0], data.email);
        form.reset(); setStatus('', '');
      } catch (err) {
        statusEl.className = 'form-status error';
        statusEl.innerHTML = M('sendFail', mailtoFallback(data));
      } finally {
        submitBtn.disabled = false; submitBtn.classList.remove('loading');
      }
    });

    langHooks.push(() => { Object.keys(rules).forEach(n => { if (form.elements[n].getAttribute('aria-invalid') === 'true') check(n); }); });
    $('#sendAnother').addEventListener('click', () => { doneEl.hidden = true; form.hidden = false; form.elements.name.focus(); });
  }

  /* ---------- Code card: switch the language ---------- */
  const codeCard = $('#codeCard');
  if (codeCard) {
    const w = c => t => '<span class="' + c + '">' + t + '</span>';
    const kw = w('kw'), fn = w('fn'), prop = w('prop'), str = w('str'), com = w('com'), tp = w('tp');
    const name = str('"Doryco Chorng"'), role = str('"Full Stack Developer"'), study = str('"Computer Engineering"'), dream = str('"Embedded ML Engineer"');
    const s1 = [str('"HTML"'), str('"CSS"'), str('"Angular"')].join(', ') + ',';
    const s2 = str('"TypeScript"') + ', ' + str('"JavaScript"') + ',';
    const s3 = str('"Java"') + ', ' + str('"Python"');
    const SNIPPETS = {
      python: ['written in Python', [
        com('# a quick summary of me'),
        fn('me') + ' = {',
        '    ' + prop('"name"') + ': ' + name + ',',
        '    ' + prop('"role"') + ': ' + role + ',',
        '    ' + prop('"stack"') + ': [',
        '        ' + s1,
        '        ' + s2,
        '        ' + s3 + ',',
        '    ],',
        '    ' + prop('"studying"') + ': ' + study + ',',
        '    ' + prop('"dream"') + ': ' + dream + ',',
        '}',
        kw('print') + '(' + fn('me') + '[' + str('"role"') + '])'
      ]],
      javascript: ['written in JavaScript', [
        com('// a quick summary of me'),
        kw('const') + ' ' + fn('me') + ' = {',
        '  ' + prop('name') + ': ' + name + ',',
        '  ' + prop('role') + ': ' + role + ',',
        '  ' + prop('stack') + ': [',
        '    ' + s1,
        '    ' + s2,
        '    ' + s3 + ',',
        '  ],',
        '  ' + prop('studying') + ': ' + study + ',',
        '  ' + prop('dream') + ': ' + dream + ',',
        '};',
        prop('console') + '.' + fn('log') + '(' + prop('me') + '.' + prop('role') + ');'
      ]],
      typescript: ['written in TypeScript', [
        com('// a quick summary of me'),
        kw('interface') + ' ' + tp('Developer') + ' {',
        '  ' + prop('name') + ': ' + tp('string') + ';',
        '  ' + prop('role') + ': ' + tp('string') + ';',
        '  ' + prop('stack') + ': ' + tp('string') + '[];',
        '}',
        '&nbsp;',
        kw('const') + ' ' + fn('me') + ': ' + tp('Developer') + ' = {',
        '  ' + prop('name') + ': ' + name + ',',
        '  ' + prop('role') + ': ' + role + ',',
        '  ' + prop('stack') + ': [',
        '    ' + s1,
        '    ' + s2,
        '    ' + s3 + ',',
        '  ],',
        '};',
        prop('console') + '.' + fn('log') + '(' + prop('me') + '.' + prop('role') + ');'
      ]],
      java: ['written in Java', [
        com('// a quick summary of me'),
        kw('public class') + ' ' + tp('Me') + ' {',
        '    ' + kw('public static void') + ' ' + fn('main') + '(' + tp('String') + '[] args) {',
        '        ' + tp('String') + ' name = ' + name + ';',
        '        ' + tp('String') + ' role = ' + role + ';',
        '        ' + tp('String') + ' studying = ' + study + ';',
        '        ' + tp('String') + ' dream = ' + dream + ';',
        '&nbsp;',
        '        ' + tp('System') + '.out.' + fn('println') + '(role);',
        '    }',
        '}'
      ]],
      json: ['written as JSON', [
        '{',
        '  ' + prop('"name"') + ': ' + name + ',',
        '  ' + prop('"role"') + ': ' + role + ',',
        '  ' + prop('"stack"') + ': [',
        '    ' + s1,
        '    ' + s2,
        '    ' + s3,
        '  ],',
        '  ' + prop('"studying"') + ': ' + study + ',',
        '  ' + prop('"dream"') + ': ' + dream,
        '}'
      ]]
    };
    const names = { python: 'Python', javascript: 'JavaScript', typescript: 'TypeScript', java: 'Java', json: 'JSON' };
    const tabs = $$('.lang-tabs [role="tab"]');
    const pre = $('.code', codeCard);
    const codeEl = $('code', pre);
    const caption = $('#codeCaption');

    let codeLang = 'python';
    function updateCaption() {
      caption.textContent = codeLang === 'json' ? M('captionJson') : M('caption', names[codeLang]);
    }
    langHooks.push(updateCaption);

    function setLang(lang) {
      const [phrase, lines] = SNIPPETS[lang];
      tabs.forEach(t => {
        const on = t.dataset.lang === lang;
        t.setAttribute('aria-selected', on);
        t.tabIndex = on ? 0 : -1;
      });
      codeEl.innerHTML = lines.map((l, i) => '<span class="cl' + (i === lines.length - 1 ? ' cursor-line' : '') + '" style="--i:' + i + '">' + l + '</span>').join('');
      pre.classList.add('switched');
      codeLang = lang;
      updateCaption();
      codeCard.setAttribute('aria-label', 'A short summary of Doryco written ' + phrase.replace('written ', '') + ': a full stack developer studying computer engineering who dreams of becoming an embedded ML engineer.');
    }
    tabs.forEach((t, i) => {
      t.addEventListener('click', () => setLang(t.dataset.lang));
      t.addEventListener('keydown', e => {
        if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
        const next = tabs[(i + (e.key === 'ArrowRight' ? 1 : tabs.length - 1)) % tabs.length];
        next.focus(); setLang(next.dataset.lang);
      });
    });
  }

  /* ---------- Photo viewer (lightbox) for the achievement photos and medals ---------- */
  const lb = $('#lightbox');
  if (lb) {
    const lbImg = $('#lbImg'), lbCap = $('#lbCap'), lbPrev = $('#lbPrev'), lbNext = $('#lbNext'), lbClose = $('#lbClose');
    let group = [], idx = 0, opener = null, touchX = null;

    const labels = () => {
      lbClose.setAttribute('aria-label', M('lbClose'));
      lbPrev.setAttribute('aria-label', M('lbPrev'));
      lbNext.setAttribute('aria-label', M('lbNext'));
      lb.setAttribute('aria-label', M('lbView'));
    };
    const show = i => {
      idx = (i + group.length) % group.length;
      const b = group[idx], thumb = $('img', b);
      lbImg.src = b.dataset.full;
      lbImg.alt = thumb ? thumb.alt : '';
      lbCap.textContent = LANG === 'km' && b.dataset.capKm ? b.dataset.capKm : b.dataset.cap;
      lbPrev.hidden = lbNext.hidden = group.length < 2;
    };
    const open = btn => {
      group = $$('[data-full]', btn.closest('.award-media'));
      opener = btn; labels(); show(group.indexOf(btn));
      lb.hidden = false; document.body.style.overflow = 'hidden';
      requestAnimationFrame(() => lb.classList.add('open'));
      lbClose.focus();
    };
    const close = () => {
      lb.classList.remove('open');
      document.body.style.overflow = '';
      setTimeout(() => { lb.hidden = true; lbImg.removeAttribute('src'); }, reduceMotion ? 0 : 220);
      if (opener) opener.focus();
    };
    document.addEventListener('click', e => {
      const b = e.target.closest('[data-full]');
      if (b) { e.preventDefault(); open(b); }
    });
    lbClose.addEventListener('click', close);
    lbPrev.addEventListener('click', () => show(idx - 1));
    lbNext.addEventListener('click', () => show(idx + 1));
    lb.addEventListener('click', e => { if (e.target === lb || e.target.classList.contains('lb-fig')) close(); });
    document.addEventListener('keydown', e => {
      if (lb.hidden) return;
      if (e.key === 'Escape') close();
      else if (e.key === 'ArrowRight') show(idx + 1);
      else if (e.key === 'ArrowLeft') show(idx - 1);
    });
    lb.addEventListener('touchstart', e => { touchX = e.touches[0].clientX; }, { passive: true });
    lb.addEventListener('touchend', e => {
      if (touchX === null || group.length < 2) return;
      const dx = e.changedTouches[0].clientX - touchX; touchX = null;
      if (Math.abs(dx) > 50) show(idx + (dx < 0 ? 1 : -1));
    });
    langHooks.push(() => { if (!lb.hidden) { labels(); show(idx); } });
  }

  applyLang(LANG);
})();
