(() => {
  'use strict';

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const root = document.documentElement;

  // on refresh (or when opened with a #section in the address) always start at the main page
  try { history.scrollRestoration = 'manual'; } catch (e) { /* older browsers */ }
  try { if (location.hash) history.replaceState(null, '', location.pathname + location.search); } catch (e) { /* ignore */ }
  const toTop = () => window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  toTop();
  window.addEventListener('load', () => { toTop(); setTimeout(toTop, 80); setTimeout(toTop, 400); });
  window.addEventListener('pageshow', e => { if (e.persisted) toTop(); });
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];

  /* ---------- Language: English / Khmer ---------- */
  const KM = {"k0":"អំពី","k1":"ជំនាញ","k2":"វិជ្ជាជីវៈ","k3":"ការអប់រំ","k4":"បទពិសោធន៍","k5":"ទំនាក់ទំនង","k6":"<span class=\"ps\">$</span> សួស្តី! ខ្ញុំគឺ","k7":"ខ្ញុំជានិស្សិតថ្នាក់បរិញ្ញាបត្ររង ផ្នែកវិស្វកម្មកុំព្យូទ័រ នៅ <strong>Tacoma Community College</strong>។ ខ្ញុំចូលចិត្តរៀនសរសេរកូដ និងបង្កើតអ្វីដែលថ្មីៗ ភាពចង់ដឹងចង់ឃើញបាននាំខ្ញុំមកទីនេះ ហើយការងារក្តីសុបិនរបស់ខ្ញុំគឺក្លាយជា <strong>វិស្វករ Embedded ML</strong>។","k8":"មើលជំនាញរបស់ខ្ញុំ","k9":"ទាក់ទងខ្ញុំ","k10":"រំកិលចុះក្រោម","k11":"អំពីខ្ញុំ","k12":"ខ្ញុំគឺ <strong>ជង់ ឌូរីកូ</strong> បច្ចុប្បន្នកំពុងសិក្សាថ្នាក់ <strong>បរិញ្ញាបត្ររងផ្នែកវិស្វកម្មកុំព្យូទ័រ</strong> នៅ Tacoma Community College (TCC)។ ខ្ញុំចូលចិត្តរៀនសរសេរកូដ និងបង្កើតអ្វីដែលថ្មីៗ ហើយភាពចង់ដឹងចង់ឃើញបាននាំខ្ញុំមកទីនេះ។ ការងារក្តីសុបិនរបស់ខ្ញុំគឺក្លាយជា <strong>វិស្វករ Embedded ML</strong>។","k13":"ឈ្មោះ","k14":"កំពុងសិក្សា","k15":"សាលា","k16":"ផ្នែកផ្តោត","k17":"សញ្ជាតិ","k18":"បរិញ្ញាបត្ររង វិស្វកម្មកុំព្យូទ័រ","k19":"អ្នកអភិវឌ្ឍ និងអ្នកសរសេរកម្មវិធីនាពេលអនាគត","k20":"ខ្មែរ","k21":"ក្តីសុបិនអនាគតរបស់ខ្ញុំ","k22":"វិស្វករ Embedded ML","k23":"ខ្ញុំចង់ផ្សំវិស្វកម្មកុំព្យូទ័រ និង machine learning ដើម្បីបង្កើតឧបករណ៍ឆ្លាតវៃ។","k24":"និស្សិតវិស្វកម្មកុំព្យូទ័រ","k25":"កម្មវិធីបរិញ្ញាបត្ររងនៅ TCC។","k26":"បង្កើតគេហទំព័រ ចាប់ពីអេក្រង់ដែលមនុស្សមើលឃើញ រហូតដល់ឡូជិកនៅពីក្រោយ។","k27":"អ្នកដោះស្រាយបញ្ហាបច្ចេកទេស","k28":"ដោះស្រាយបញ្ហាបច្ចេកទេស។","k29":"ប្រធានថ្នាក់","k30":"ជួយលោកគ្រូអ្នកគ្រូក្នុងកិច្ចការប្រចាំថ្ងៃ។","k31":"អ្នកស្ម័គ្រចិត្តសហគមន៍","k32":"ស្ម័គ្រចិត្ត និងជួយក្នុងសេវាកម្មសហគមន៍។","k33":"អ្នកដឹកនាំនិស្សិត","k34":"ទទួលខុសត្រូវក្នុងតួនាទីដឹកនាំ។","k35":"២០២៦ &ndash; បច្ចុប្បន្ន","k36":"២០២៥ &ndash; ២០២៦","k37":"២០២៤ &ndash; ២០២៥","k38":"២០១៩ &ndash; ២០២៤","k39":"WA សហរដ្ឋអាមេរិក","k40":"កម្ពុជា","k41":"ជំនាញបរិញ្ញាបត្ររង ផ្នែកវិស្វកម្មកុំព្យូទ័រ។","k42":"សិក្សានៅថ្នាក់ទី១១។","k43":"វិទ្យាល័យនៅកម្ពុជា ថ្នាក់ទី១០។","k44":"សាលាឯកជននៅកម្ពុជា ពីថ្នាក់ទី៥ ដល់ថ្នាក់ទី៩។","k45":"មិថុនា ២០២៥ &ndash; សីហា ២០២៥","k46":"ការដោះស្រាយបញ្ហាបច្ចេកទេស","k47":"ជួសជុលបញ្ហាកុំព្យូទ័រទូទៅ និងដោះស្រាយបញ្ហាបច្ចេកទេសរបស់ម៉ាស៊ីនបោះពុម្ព។","k48":"កញ្ញា ២០២៤ &ndash; កក្កដា ២០២៥","k49":"ប្រធានថ្នាក់ និងអ្នកស្ម័គ្រចិត្តសហគមន៍","k50":"ជួយលោកគ្រូអ្នកគ្រូក្នុងកិច្ចការប្រចាំថ្ងៃនៅក្នុងថ្នាក់ ចូលរួមការងារស្ម័គ្រចិត្តសហគមន៍ និងទទួលខុសត្រូវក្នុងតួនាទីដឹកនាំ។","k51":"ជជែកគ្នា","k52":"ចាប់អារម្មណ៍ធ្វើការជាមួយគ្នា ឬគ្រាន់តែចង់ជម្រាបសួរ? សូមផ្ញើសារតាមទម្រង់ ឬស្វែងរកខ្ញុំតាមគណនីទាំងនេះ។","k53":"ស្វែងរកខ្ញុំតាមអនឡាញ","k54":"ទាក់ទងខ្ញុំ","k55":"សូមបំពេញទម្រង់ ហើយសាររបស់អ្នកនឹងត្រូវបានផ្ញើត្រង់ទៅប្រអប់សំបុត្ររបស់ខ្ញុំ។","k56":"ឈ្មោះពេញ","k57":"អ៊ីមែលរបស់អ្នក","k58":"គោលបំណង","k59":"សារ","k60":"ហេតុអ្វីអ្នកទាក់ទងខ្ញុំ?","k61":"ឱកាសការងារ ឬហ្វឹកហាត់ការ","k62":"សហការលើគម្រោង","k63":"សួរសំណួរ","k64":"មតិកែលម្អអំពី portfolio របស់ខ្ញុំ","k65":"គ្រាន់តែជម្រាបសួរ","k66":"ផ្សេងៗ","k67":"ផ្ញើសារ","k68":"បានផ្ញើសារហើយ!","k69":"ផ្ញើសារមួយទៀត"};
  const KMPH = {"p0":"ឈ្មោះពេញរបស់អ្នក","p1":"ដើម្បីឱ្យខ្ញុំអាចឆ្លើយតបទៅអ្នក","p2":"សរសេរសាររបស់អ្នកនៅទីនេះ..."};
  Object.assign(KM, { sch1: 'សាលារៀនជំនាន់ថ្មីវិទ្យាល័យព្រះយុគន្ធរ', sch2: 'សាលារៀនអន្តរជាតិបញ្ញាសាស្ត្រ សាខាសែនសុខ', sch2p: 'ភ្នំពេញ កម្ពុជា' });
  Object.assign(KM, { ach: 'សមិទ្ធផល', silver: 'មេដាយប្រាក់', bronze: 'មេដាយសំរិទ្ធ', honor: 'វិញ្ញាបនបត្រកិត្តិយស', runner: 'ជ័យលាភីលេខ ៣ (3rd Runner-up)', intl: 'ការប្រកួតអន្តរជាតិ', y2025: '២០២៥', y2019: '២០១៩' });
  Object.assign(KM, { age: 'អាយុ' });
  Object.assign(KM, { r_cop: 'គណិតវិទ្យា · ជុំជម្រុះ', r_wmi: 'ជុំជម្រុះ · កម្ពុជា', r_sasmo: 'ថ្នាក់ទី១០ · សាលារៀនជំនាន់ថ្មីវិទ្យាល័យព្រះយុគន្ធរ', r_aimo: 'ជុំសាកល្បងនៅកម្ពុជា' });
  Object.assign(KM, { thatsme: '// នេះជាខ្ញុំ' });
  Object.assign(KM, {"st_label":"រឿងផ្ទាល់ខ្លួន","st_title":"ដំណើររបស់ខ្ញុំ","st_intro":"ខ្ញុំឈ្មោះ ជង់ ឌូរីកូ ហើយបច្ចុប្បន្នខ្ញុំជានិស្សិតអន្តរជាតិ កំពុងសិក្សាថ្នាក់បរិញ្ញាបត្ររងផ្នែកវិស្វកម្មកុំព្យូទ័រ នៅ TCC។ វាជាដំណើរដ៏លំបាក និងត្រូវការការតស៊ូខ្លាំង។","st1_when":"កុមារភាព","st1_g":"ពិន្ទុ E","st1_t":"ចំណុចចាប់ផ្តើម","st1_p":"ខ្ញុំចាប់ផ្តើមដំណើរនេះតាំងពីកុមារភាព ដោយមានលទ្ធផលមិនល្អ ភាគច្រើនទទួលបានពិន្ទុ E។ វាបន្តតាំងពីមត្តេយ្យ រហូតដល់បឋមសិក្សា។","st2_when":"វិទ្យាល័យ","st2_g":"ពិន្ទុ B","st2_t":"កាន់តែរឹងមាំ","st2_p":"ពេលខ្ញុំចាប់ផ្តើមរៀនវិទ្យាល័យ ពិន្ទុរបស់ខ្ញុំចាប់ផ្តើមឡើងដល់ B ហើយនៅរក្សាបានស្ថិរភាព។","st3_when":"សហរដ្ឋអាមេរិក","st3_g":"សិក្សានៅសហរដ្ឋអាមេរិក","st3_t":"ឱកាសដ៏ធំ","st3_p":"បន្ទាប់មក ខ្ញុំទទួលបានឱកាសទៅសិក្សានៅសហរដ្ឋអាមេរិក ដែលជាសមិទ្ធផលដ៏ល្អបំផុតក្នុងជីវិតរបស់ខ្ញុំ។","st4_when":"TCC","st4_g":"GPA 4.0","st4_t":"រំលងឆ្នាំចុងក្រោយ","st4_p":"ខ្ញុំក៏មានឱកាសរំលងឆ្នាំចុងក្រោយនៃវិទ្យាល័យ ហើយចាប់ផ្តើមនៅ TCC ដោយទទួលបានទាំងសញ្ញាបត្រវិទ្យាល័យ និងបរិញ្ញាបត្ររងផ្នែកវិស្វកម្មកុំព្យូទ័រ ជាមួយ GPA 4.0 ដែលរក្សាបានស្ថិរភាព។","nm1":"ជង់","nm2":"ឌូរីកូ","nameval":"ជង់ ឌូរីកូ"});
  Object.assign(KM, { hack: 'អាល់ប៊ុមហាកាតុន', hack_nav: 'ហាកាតុន', hk_intro: 'រូបថតពី Kidkathon និង Tech Kid កម្ពុជា ជាព្រឹត្តិការណ៍ហាកាតុនដែលខ្ញុំបានចូលរួម ដើម្បីទទួលបទពិសោធន៍។', hk_tk: 'Tech Kid កម្ពុជា', hk_t3: 'ការសាងសង់ដោយផ្ទាល់', hk1_c: 'កសាងផ្ទះឆ្លាតវៃពីក្រដាសកាតុងជាមួយបន្ទះ micro:bit', hk2_c: 'សរសេរកូដក្នុង Microsoft MakeCode សម្រាប់ micro:bit', hk3_c: 'សរសេរកូដ និងសាកល្បងគម្រោង micro:bit ក្នុងកម្មវិធីក្លែងធ្វើ' });
  Object.assign(KM, { r_neo: 'ប្រភេទ Coding · ថ្ងៃទី១៩ មករា ២០២៥' });
  Object.assign(KM, { sasmoSub: 'ការប្រកួតអូឡាំពិកគណិតវិទ្យាអន្តរជាតិសិង្ហបុរី' });
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
      sendFile: href => 'This page is opened as a file, so the online form is switched off (it works once the website is online). <a href="' + href + '">Click here to send it with your email app</a> instead.',
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
      sendFile: href => 'ទំព័រនេះត្រូវបានបើកជាឯកសារ ដូច្នេះទម្រង់អនឡាញមិនដំណើរការទេ (វានឹងដំណើរការពេលគេហទំព័រនៅលើអ៊ីនធឺណិត)។ <a href="' + href + '">សូមចុចទីនេះ</a> ដើម្បីផ្ញើតាមកម្មវិធីអ៊ីមែលរបស់អ្នកជំនួស។',
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
  langHooks.push(() => { const h = $('h1.name'); if (h) h.setAttribute('aria-label', LANG === 'km' ? 'ជង់ ឌូរីកូ' : 'Doryco Chorng'); });

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
  let siteReady = false, onSiteReady = null;
  const enterSite = () => {
    $('#loader').classList.add('enter');
    document.body.classList.add('entered');
    setTimeout(() => {
      document.body.classList.remove('loading');
      startTyping();
      siteReady = true;
      if (onSiteReady) onSiteReady();
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
        ctx.font = `${(13 + heat * 5) * DPR}px Consolas, "Cascadia Code", monospace`;
        ctx.globalAlpha = .1 + heat * .26;          // kept faint and see-through so it never competes with the content
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
    en: ['Computer Engineering Student', 'Future Developer & Programmer', 'Future Embedded ML Engineer', 'Microsoft Office 365 User'],
    km: ['និស្សិតវិស្វកម្មកុំព្យូទ័រ', 'អ្នកអភិវឌ្ឍ និងអ្នកសរសេរកម្មវិធីនាពេលអនាគត', 'វិស្វករ Embedded ML នាពេលអនាគត', 'អ្នកប្រើប្រាស់ Microsoft Office 365']
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

  /* ---------- Every section animates in as you scroll to it ---------- */
  // each part of each section gets its own entrance (direction / style), staggered
  const ANIMS = [
    ['.title', 'title'],
    ['#about .portrait', 'left'], ['#about .statement', 'right'], ['#about .facts', 'right'], ['#about .dream', 'zoom'],
    ['#skills .skill', 'pop', 3], ['#roles .role', 'flip', 3],
    ['#story .tl-item .card', 'right'], ['#about .story-head, #about .story-intro, #about .grade-path', 'rise'],
    ['#education .tl-item .card', 'right'], ['#experience .tl-item .card', 'right'],
    ['#achievements .award', 'rise', 3],
    ['#hackathon .snap', 'rise', 3], ['#hackathon .album-intro, #hackathon .album-tags', 'rise'],
    ['#contact .contact-info', 'left'], ['#contact .contact-form', 'right'],
    ['#contact .mini-title, #contact .socials .social', 'rise', 0, .07], ['#contact .field, #contact .btn.block', 'rise', 0, .07]
  ];
  document.documentElement.classList.add('anim-setup');          // place everything at its starting position instantly (no transition)
  ANIMS.forEach(([sel, kind, cols, step]) => {
    $$(sel).forEach((el, i) => {
      el.classList.add('reveal');
      el.dataset.anim = kind;
      if (step) {
        // children of a card: a quick cascade after their card has appeared
        const scope = $$(sel);
        el.style.setProperty('--d', (.3 + Math.min(scope.indexOf(el), 8) * step).toFixed(2) + 's');
      } else if (cols) {
        el.style.setProperty('--d', ((i % cols) * .12).toFixed(2) + 's');       // cards in the same row come one after another
      } else {
        el.style.setProperty('--d', '0s');
      }
    });
  });
  // anything else marked as reveal keeps the simple rise
  $$('.reveal').forEach(el => {
    if (el.dataset.anim) return;
    const idx = [...el.parentElement.children].filter(c => c.classList.contains('reveal')).indexOf(el);
    el.style.setProperty('--d', (Math.min(Math.max(idx, 0), 4) * .08) + 's');
  });
  $$('.chips').forEach(c => [...c.children].forEach((s, i) => s.style.setProperty('--i', i)));
  void document.body.offsetHeight;
  document.documentElement.classList.remove('anim-setup');

  // remember each element's own stagger delay so the entrance can be replayed exactly
  $$('.reveal').forEach(el => { el.dataset.delay = el.style.getPropertyValue('--d') || '0s'; });

  const enter = el => {
    if (el.classList.contains('in')) return;
    clearTimeout(el._t);
    el.style.setProperty('--d', el.dataset.delay || '0s');
    el.classList.add('in');
    if (el.matches('.facts')) countUpAge();
    // once it has landed, drop the entrance delay so hover effects respond instantly
    const d = parseFloat(el.dataset.delay) || 0;
    el._t = setTimeout(() => el.style.setProperty('--d', '0s'), (d + 1.1) * 1000);
  };
  const leave = el => {
    if (reduceMotion || !el.classList.contains('in')) return;
    clearTimeout(el._t);
    el.style.setProperty('--d', '0s');
    el.classList.remove('in');                     // back to its starting pose, ready to animate again
  };
  // arrives: plays once it is a little way into view
  const ioIn = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) enter(e.target); });
  }, { threshold: .12, rootMargin: '0px 0px -7% 0px' });
  // leaves: resets only when it is completely out of view
  const ioOut = new IntersectionObserver(entries => {
    entries.forEach(e => { if (!e.isIntersecting) leave(e.target); });
  }, { threshold: 0 });
  $$('.reveal').forEach(el => { ioIn.observe(el); ioOut.observe(el); });

  // the whole section (its background scene, heading, timeline) also resets and replays
  const sectionIO = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting && e.intersectionRatio >= .06) e.target.classList.add('in-view');
      else if (!e.isIntersecting && !reduceMotion) e.target.classList.remove('in-view');
    });
  }, { threshold: [0, .06] });
  $$('.section').forEach(s => sectionIO.observe(s));

  // pictures fade in as they finish loading
  $$('img[loading="lazy"]').forEach(img => {
    img.setAttribute('data-fade', '');
    const done = () => img.classList.add('loaded');
    if (img.complete && img.naturalWidth) done(); else { img.addEventListener('load', done); img.addEventListener('error', done); }
  });

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

  /* ---------- Top links: a glowing indicator that slides to the link you point at, and rests on the current section ---------- */
  const linksBox = $('#links');
  const pill = document.createElement('span'); pill.className = 'nav-pill'; pill.setAttribute('aria-hidden', 'true');
  const ind = document.createElement('span'); ind.className = 'nav-ind'; ind.setAttribute('aria-hidden', 'true');
  linksBox.append(pill, ind);
  links.forEach((a, i) => a.style.setProperty('--k', i));
  let hovered = null;
  function moveInd() {
    if (innerWidth <= 900) return;
    const target = hovered || $('.links a.active');
    if (!target) { pill.style.opacity = ind.style.opacity = 0; return; }
    const b = linksBox.getBoundingClientRect(), r = target.getBoundingClientRect();
    const x = r.left - b.left;
    pill.style.transform = 'translateX(' + x.toFixed(1) + 'px)'; pill.style.width = r.width.toFixed(1) + 'px';
    ind.style.transform = 'translateX(' + (x + 13).toFixed(1) + 'px)'; ind.style.width = Math.max(r.width - 26, 8).toFixed(1) + 'px';
    pill.style.opacity = hovered ? 1 : .55; ind.style.opacity = 1;
  }
  links.forEach(a => {
    a.addEventListener('mouseenter', () => { hovered = a; moveInd(); });
    a.addEventListener('focus', () => { hovered = a; moveInd(); });
    a.addEventListener('blur', () => { hovered = null; moveInd(); });
  });
  linksBox.addEventListener('mouseleave', () => { hovered = null; moveInd(); });
  window.addEventListener('resize', moveInd);
  window.addEventListener('load', moveInd);
  langHooks.push(() => requestAnimationFrame(moveInd));
  if (typeof ResizeObserver !== 'undefined') new ResizeObserver(moveInd).observe(linksBox);

  function onScroll() {
    const y = scrollY;
    nav.classList.toggle('scrolled', y > 30);
    const max = document.documentElement.scrollHeight - innerHeight;
    bar.style.width = (max > 0 ? (y / max) * 100 : 0) + '%';
    let current = -1;
    sections.forEach((s, i) => { if (s && s.getBoundingClientRect().top < innerHeight * .4) current = i; });
    links.forEach((a, i) => a.classList.toggle('active', i === current));
    moveInd();
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
    document.body.classList.toggle('menu-open', open);
  };
  menuBtn.addEventListener('click', () => setMenu(!menu.classList.contains('open')));
  links.forEach(a => a.addEventListener('click', () => setMenu(false)));
  document.addEventListener('click', e => {
    if (menu.classList.contains('open') && !e.target.closest('.nav')) setMenu(false);
  });
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && menu.classList.contains('open')) { setMenu(false); menuBtn.focus(); } });
  window.addEventListener('resize', () => { if (innerWidth > 900 && menu.classList.contains('open')) setMenu(false); });

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
    // the details that make the email easy to scan
    const sentAt = () => {
      let tz = ''; try { tz = Intl.DateTimeFormat().resolvedOptions().timeZone || ''; } catch (e) { /* ignore */ }
      return new Date().toLocaleString('en-US', { dateStyle: 'full', timeStyle: 'short' }) + (tz ? ' (' + tz + ')' : '');
    };
    const deviceKind = () => (innerWidth < 744 ? 'Phone' : innerWidth < 1100 ? 'Tablet / iPad' : 'Laptop / computer');
    const subjectFor = d => '[Portfolio] ' + d.purpose + ' - ' + d.name;
    const mailtoFallback = data => {
      const line = '------------------------------';
      const body = 'NEW MESSAGE FROM YOUR PORTFOLIO\n' + line + '\n' +
        'From:     ' + data.name + '\n' +
        'Reply to: ' + data.email + '\n' +
        'Purpose:  ' + data.purpose + '\n' + line + '\n' +
        'MESSAGE\n\n' + data.message + '\n\n' + line + '\n' +
        'Sent: ' + sentAt() + '\n' +
        'Page language: ' + (LANG === 'km' ? 'Khmer' : 'English') + ' | Device: ' + deviceKind();
      return 'mailto:' + CONTACT_EMAIL + '?subject=' + encodeURIComponent(subjectFor(data)) + '&body=' + encodeURIComponent(body);
    };

    form.addEventListener('submit', async e => {
      e.preventDefault();
      const valid = Object.keys(rules).map(check).every(Boolean);
      if (!valid) { setStatus(M('errFix'), 'error'); form.querySelector('[aria-invalid="true"]')?.focus(); return; }

      const data = { name: form.elements.name.value.trim(), email: form.elements.email.value.trim(), purpose: form.elements.purpose.value, message: form.elements.message.value.trim() };
      // the sending service only works from a real website address, never from a page opened as a file
      if (location.protocol === 'file:') {
        statusEl.className = 'form-status error';
        statusEl.innerHTML = M('sendFile', mailtoFallback(data));
        return;
      }
      submitBtn.disabled = true; submitBtn.classList.add('loading'); setStatus(M('sending'), '');
      try {
        // rows appear in this order in the email: a one-line summary first, then the details, then the message
        const payload = {
          'Summary': data.name + ' would like to talk about: ' + data.purpose,
          'Full name': data.name,
          'email': data.email,
          'Purpose': data.purpose,
          'Message': data.message,
          'Sent at': sentAt(),
          'Page language': LANG === 'km' ? 'Khmer' : 'English',
          'Device': deviceKind(),
          '_subject': subjectFor(data),
          '_template': 'table', '_captcha': 'false', '_honey': form.elements._honey.value
        };
        const res = await fetch('https://formsubmit.co/ajax/' + CONTACT_EMAIL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
          body: JSON.stringify(payload)
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
    const name = str('"Doryco Chorng"'), role = str('"Future Developer &amp; Programmer"'), study = str('"Computer Engineering"'), dream = str('"Embedded ML Engineer"');
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

    /* --- typing effect: every character is typed one after another, with a blinking caret --- */
    const T = { timer: null, chars: [], vis: false, caret: document.createElement('span') };
    T.caret.className = 'tcaret'; T.caret.setAttribute('aria-hidden', 'true');
    function prepareChars() {
      const walker = document.createTreeWalker(codeEl, NodeFilter.SHOW_TEXT);
      const nodes = [];
      while (walker.nextNode()) nodes.push(walker.currentNode);
      nodes.forEach(n => {
        if (!n.nodeValue) return;
        const frag = document.createDocumentFragment();
        for (const ch of n.nodeValue) { const s = document.createElement('span'); s.className = 'ch'; s.textContent = ch; frag.appendChild(s); }
        n.replaceWith(frag);
      });
      T.chars = $$('.ch', codeEl);
      $$('.cursor-line', codeEl).forEach(l => l.classList.remove('cursor-line'));
    }
    function stopTyping() { clearTimeout(T.timer); T.timer = null; }
    function clearTyped() {
      T.chars.forEach(c => c.classList.remove('on'));
      $$('.cl', codeEl).forEach(l => l.classList.remove('started'));
      T.caret.remove();
    }
    function showAll() {
      T.chars.forEach(c => c.classList.add('on'));
      $$('.cl', codeEl).forEach(l => l.classList.add('started'));
      if (T.chars.length) T.chars[T.chars.length - 1].after(T.caret);
    }
    function typeCode() {
      stopTyping(); clearTyped();
      if (reduceMotion || !T.chars.length) { showAll(); return; }
      const total = T.chars.length, per = Math.min(22, Math.max(6, 4200 / total));
      let i = 0;
      T.chars[0].before(T.caret);
      (function tick() {
        if (i >= total) { T.timer = null; return; }
        const c = T.chars[i], line = c.closest('.cl');
        c.classList.add('on'); line.classList.add('started');
        c.after(T.caret);
        i++;
        const next = T.chars[i];
        let d = per * (.55 + Math.random() * .9);
        if (',:{[('.includes(c.textContent)) d += per * 1.5;
        if (next && next.closest('.cl') !== line) d += 150;              // a short pause at the end of each line
        T.timer = setTimeout(tick, d);
      })();
    }
    // starts when the card is on screen (after the intro) and starts over each time you scroll back to it
    new IntersectionObserver(es => es.forEach(e => {
      if (e.isIntersecting && e.intersectionRatio >= .25) { if (!T.vis) { T.vis = true; if (siteReady) typeCode(); } }
      else if (!e.isIntersecting) { T.vis = false; stopTyping(); if (!reduceMotion) clearTyped(); }
    }), { threshold: [0, .25] }).observe(codeCard);
    onSiteReady = () => { if (T.vis) typeCode(); };
    prepareChars();
    if (!reduceMotion) clearTyped(); else showAll();

    function setLang(lang) {
      const [phrase, lines] = SNIPPETS[lang];
      tabs.forEach(t => {
        const on = t.dataset.lang === lang;
        t.setAttribute('aria-selected', on);
        t.tabIndex = on ? 0 : -1;
      });
      codeEl.innerHTML = lines.map((l, i) => '<span class="cl" style="--i:' + i + '">' + l + '</span>').join('');
      prepareChars();
      typeCode();
      codeLang = lang;
      updateCaption();
      codeCard.setAttribute('aria-label', 'A short summary of Doryco written ' + phrase.replace('written ', '') + ': a future developer and programmer studying computer engineering who dreams of becoming an embedded ML engineer.');
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
      group = $$('[data-full]', btn.closest('.award-media, .album'));
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

  /* ---------- Age, worked out from the birthday (updates itself every year) ---------- */
  const BIRTHDAY = { year: 2009, month: 2, day: 11 };            // 11 February 2009
  function currentAge(now = new Date()) {
    let age = now.getFullYear() - BIRTHDAY.year;
    const month = now.getMonth() + 1, day = now.getDate();
    const birthdayPassed = month > BIRTHDAY.month || (month === BIRTHDAY.month && day >= BIRTHDAY.day);
    if (!birthdayPassed) age -= 1;                               // birthday not reached yet this year
    return age;
  }
  const toKhmerDigits = n => String(n).replace(/\d/g, d => '០១២៣៤៥៦៧៨៩'[d]);
  const ageEl = $('#ageValue');
  const showAge = () => {
    if (!ageEl) return;
    const age = currentAge();
    ageEl.textContent = LANG === 'km' ? toKhmerDigits(age) + ' ឆ្នាំ' : age + ' years old';
  };
  langHooks.push(showAge);
  function countUpAge() {
    if (!ageEl || reduceMotion) return;
    const target = currentAge(), t0 = performance.now(), dur = 1100;
    (function step(now) {
      const p = Math.min((now - t0) / dur, 1), n = Math.round(target * (1 - Math.pow(1 - p, 3)));
      ageEl.textContent = LANG === 'km' ? toKhmerDigits(n) + ' ឆ្នាំ' : n + ' years old';
      if (p < 1) requestAnimationFrame(step); else showAge();
    })(t0);
  }

  /* ---------- Achievements: a route joins the cards in order and a plane flies along it ---------- */
  const achGrid = $('#achGrid');
  if (achGrid) {
    const NS = 'http://www.w3.org/2000/svg';
    const cards = $$('.award', achGrid);
    const svg = document.createElementNS(NS, 'svg');
    svg.setAttribute('class', 'ach-route');
    svg.setAttribute('aria-hidden', 'true');
    svg.innerHTML = '<path class="track" pathLength="100"></path><path class="fill" pathLength="100"></path><path class="flow" pathLength="100"></path><g class="dots"></g>';
    achGrid.insertBefore(svg, achGrid.firstChild);
    const [trackEl, fillEl, flowEl] = $$('path', svg);
    const dotsG = $('.dots', svg);
    const spark = document.createElementNS(NS, 'g');
    spark.setAttribute('class', 'spark');
    spark.innerHTML = '<circle class="halo" r="16"></circle><circle class="mid" r="8"></circle><circle class="core" r="4"></circle>';
    svg.appendChild(spark);
    const route = { pts: [], cum: [0], total: 1, dots: [], cardLen: [] };
    const st = { cur: 0, target: 0, dir: 1, rot: 90, ready: false, dirty: true };

    function build() {
      const w = achGrid.offsetWidth, h = achGrid.offsetHeight;
      svg.setAttribute('viewBox', '0 0 ' + w + ' ' + h);
      const rs = cards.map(c => ({ l: c.offsetLeft, t: c.offsetTop, r: c.offsetLeft + c.offsetWidth, b: c.offsetTop + c.offsetHeight }));
      const rows = [];
      rs.forEach((r, i) => {
        const last = rows[rows.length - 1];
        if (last && Math.abs(last.t - r.t) < 4) { last.items.push(i); last.b = Math.max(last.b, r.b); }
        else rows.push({ t: r.t, b: r.b, items: [i] });
      });
      const multi = rows.some(r => r.items.length > 1);
      const Lg = -20, Rg = w + 20, off = 34;      // the line keeps its distance from the boxes

      const P = [];
      const add = (x, y, tag) => P.push({ x, y, tag });
      if (multi) {
        // the route runs in the open space above each row of cards, and doubles back between the rows
        rows.forEach((row, k) => {
          const y = row.t - off;
          if (k === 0) add(Lg, y, { kind: 'start' });
          else {
            const prev = rows[k - 1], py = prev.t - off;
            add(Rg, py); add(Rg, prev.b + off); add(Lg, prev.b + off); add(Lg, y);
          }
          row.items.forEach(i => add((rs[i].l + rs[i].r) / 2, y, { kind: 'dot', card: i, enter: true, stubTo: rs[i].t }));
          if (k === rows.length - 1) add(Rg, y, { kind: 'end' });
        });
      } else {
        // phones: the route runs down the left side, one stop per card
        const cy = i => (rs[i].t + rs[i].b) / 2;
        const Lv = 17;                                   // phones: the line runs in its own lane, left of the boxes
        add(Lv, cy(0) - 40, { kind: 'start' });
        cards.forEach((c, i) => add(Lv, cy(i), { kind: 'dot', card: i, enter: true, stubTo: null }));
        add(Lv, cy(cards.length - 1) + 40, { kind: 'end' });
      }

      // lengths along the route
      route.pts = P; route.cum = [0];
      for (let i = 1; i < P.length; i++) route.cum.push(route.cum[i - 1] + Math.hypot(P[i].x - P[i - 1].x, P[i].y - P[i - 1].y));
      route.total = route.cum[route.cum.length - 1] || 1;
      const d = P.map((p, i) => (i ? 'L' : 'M') + p.x.toFixed(1) + ' ' + p.y.toFixed(1)).join(' ');
      [trackEl, fillEl, flowEl].forEach(el => el.setAttribute('d', d));

      // stops (coloured like their card), each joined to its card by a short connector
      dotsG.innerHTML = '';
      route.dots = []; route.cardLen = []; route.stops = [];
      P.forEach((p, i) => {
        if (!p.tag || !p.tag.kind) return;
        const isDot = p.tag.kind === 'dot';
        const tint = isDot ? (cards[p.tag.card].className.match(/tint-\w+/) || [''])[0] : '';
        let stub = null;
        if (isDot && p.tag.stubTo !== null) {
          stub = document.createElementNS(NS, 'line');
          stub.setAttribute('x1', p.x.toFixed(1)); stub.setAttribute('y1', p.y.toFixed(1));
          stub.setAttribute('x2', p.x.toFixed(1)); stub.setAttribute('y2', p.tag.stubTo.toFixed(1));
          stub.setAttribute('class', 'stub ' + tint);
          dotsG.appendChild(stub);
        }
        const c = document.createElementNS(NS, 'circle');
        c.setAttribute('cx', p.x.toFixed(1)); c.setAttribute('cy', p.y.toFixed(1));
        c.setAttribute('r', isDot ? 12 : 7.5);
        c.setAttribute('class', 'dot ' + p.tag.kind + ' ' + tint);
        dotsG.appendChild(c);
        let label = null;
        if (isDot) {
          label = document.createElementNS(NS, 'text');
          label.setAttribute('x', p.x.toFixed(1)); label.setAttribute('y', (p.y + 4).toFixed(1));
          label.setAttribute('class', 'stop-num');
          label.textContent = p.tag.card + 1;
          dotsG.appendChild(label);
        }
        route.dots.push({ el: c, stub, label, len: route.cum[i] });
        if (isDot) route.stops[p.tag.card] = { x: p.x, y: p.y, tint };
        if (p.tag.enter) route.cardLen[p.tag.card] = route.cum[i];
      });
      st.dirty = true;
    }

    function pointAt(L) {
      const P = route.pts, cum = route.cum;
      let k = 1;
      while (k < cum.length - 1 && cum[k] < L) k++;
      const seg = (cum[k] - cum[k - 1]) || 1, t = Math.min(Math.max((L - cum[k - 1]) / seg, 0), 1);
      const a = P[k - 1], b = P[k];
      return { x: a.x + (b.x - a.x) * t, y: a.y + (b.y - a.y) * t, ang: Math.atan2(b.y - a.y, b.x - a.x) * 180 / Math.PI };
    }

    function ripple(i) {
      const s = route.stops[i];
      if (!s || reduceMotion) return;
      const c = document.createElementNS(NS, 'circle');
      c.setAttribute('cx', s.x.toFixed(1)); c.setAttribute('cy', s.y.toFixed(1)); c.setAttribute('r', 12);
      c.setAttribute('class', 'ripple ' + s.tint);
      dotsG.appendChild(c);
      setTimeout(() => c.remove(), 1200);
    }

    function paint() {
      const L = st.cur * route.total;
      fillEl.style.strokeDashoffset = String(100 - st.cur * 100);
      const p = pointAt(L);
      spark.setAttribute('transform', 'translate(' + p.x.toFixed(1) + ' ' + p.y.toFixed(1) + ')');
      route.dots.forEach(dt => {
        const on = L >= dt.len - .5;
        dt.el.classList.toggle('on', on);
        if (dt.stub) dt.stub.classList.toggle('on', on);
        if (dt.label) dt.label.classList.toggle('on', on);
      });
      cards.forEach((c, i) => {
        const reached = L >= (route.cardLen[i] || 0) - .5;
        if (reached && !c.classList.contains('reached') && st.ready) {
          c.classList.add('arrive');
          ripple(i);
          setTimeout(() => c.classList.remove('arrive'), 1000);
        }
        c.classList.toggle('reached', reached);
      });
    }

    build();
    if (typeof ResizeObserver !== 'undefined') new ResizeObserver(build).observe(achGrid);
    window.addEventListener('load', build);
    (function flyAch() {
      const g = achGrid.getBoundingClientRect();
      st.target = Math.min(Math.max((innerHeight * .62 - g.top) / g.height, 0), 1);
      const prev = st.cur;
      st.cur = reduceMotion ? st.target : st.cur + (st.target - st.cur) * .06;
      if (Math.abs(st.target - st.cur) < .0004) st.cur = st.target;
      const d = st.cur - prev;
      if (st.dirty || d !== 0) { paint(); st.dirty = false; st.ready = true; }
      requestAnimationFrame(flyAch);
    })();
  }

  /* ---------- Byte: a small robot that walks along a slim strip at the bottom and gives tips (laptop / iPad only) ---------- */
  (function byteBot() {
    const store = {
      get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
      set(k, v) { try { localStorage.setItem(k, v); } catch (e) { /* storage may be blocked */ } }
    };
    const T = {
      en: {
        tips: {
          home: 'Hi, I am Byte! Try the language tabs on the code card. I can show you the same summary in JS, Java, Python, TS or JSON.',
          about: 'That is Doryco! He loves learning to code and building something new, and dreams of becoming an Embedded ML Engineer. Scroll down for his personal journey.',
          skills: 'Frontend, backend, tools and Office. Point at a card to see its colour light up. Git, GitHub and the terminal are in here too.',
          roles: 'Student, developer, troubleshooter, volunteer, leader: lots of hats. Which one would you pick?',
          education: 'Follow the line from Cambodia to Tacoma. Scroll slowly and watch the plane land at every school.',
          experience: 'Two chapters: helping teachers and the community as class monitor, and fixing computers and printers.',
          achievements: 'Six competitions on one route. Click any photo to see it big. Those medals are real!',
          hackathon: 'Photos from Kidkathon and Tech Kid, Cambodia: a cardboard smart house, coding with micro:bit and MakeCode. Click any print to see it big.',
          contact: 'Ready to say hi? Fill in the form and it goes straight to his inbox, or find him on GitHub and LinkedIn.'
        },
        act: { home: 'Show me JSON', about: 'Say it in Khmer', skills: 'Show me the tools', roles: 'Light them up', education: 'Go to Experience', experience: 'Go to Achievements', achievements: 'Open a photo', hackathon: 'Open a photo', contact: 'Start typing' },
        nudges: [
          'Psst, the sun and moon button in the corner switches between light and dark.',
          'Did you know? The EN and KH buttons translate the whole page.',
          'The code card can switch between five languages. Give it a click.',
          'Click a photo in Achievements to see it big.',
          'Scroll slowly through Education and watch the little plane fly.'
        ],
        hide: 'Hide me', mute: 'Mute tips', unmute: 'Unmute tips',
        aria: 'Byte, the portfolio robot. Press for a tip.', wake: 'Bring Byte back',
        hello: 'Hello!', dark: 'Dark mode. My favourite.', light: 'Lights on!',
        dizzy: 'Whoa, I am dizzy!', whoa: 'Whoa, slow down!', back: 'I am back!', muted: 'Okay, no more tips. Click me if you need me.', on: 'Tips are back on.'
      },
      km: {
        tips: {
          home: 'សួស្តី! ខ្ញុំឈ្មោះ Byte។ សាកល្បងចុចផ្ទាំងភាសានៅលើប្រអប់កូដ ខ្ញុំអាចបង្ហាញ JS, Java, Python, TS ឬ JSON។',
          about: 'នេះគឺ ជង់ ឌូរីកូ! គាត់ចូលចិត្តរៀនសរសេរកូដ និងបង្កើតអ្វីដែលថ្មីៗ ហើយសុបិនចង់ក្លាយជាវិស្វករ Embedded ML។ រំកិលចុះក្រោមដើម្បីមើលដំណើរផ្ទាល់ខ្លួនរបស់គាត់។',
          skills: 'Frontend, Backend, ឧបករណ៍ និង Office។ ដាក់ព្រួញលើកាតនីមួយៗដើម្បីមើលពណ៌។ Git, GitHub និង terminal ក៏នៅទីនេះដែរ។',
          roles: 'និស្សិត អ្នកអភិវឌ្ឍ អ្នកដោះស្រាយបញ្ហា អ្នកស្ម័គ្រចិត្ត អ្នកដឹកនាំ៖ ច្រើនតួនាទី។ តើអ្នកចង់ជ្រើសរើសតួណា?',
          education: 'តាមខ្សែពីកម្ពុជាទៅ Tacoma។ រំកិលយឺតៗ ដើម្បីមើលយន្តហោះចុះចតនៅសាលានីមួយៗ។',
          experience: 'ជំពូកពីរ៖ ជួយលោកគ្រូអ្នកគ្រូ និងសហគមន៍ក្នុងនាមប្រធានថ្នាក់ និងជួសជុលកុំព្យូទ័រ និងម៉ាស៊ីនបោះពុម្ព។',
          achievements: 'ការប្រកួតប្រាំមួយក្នុងផ្លូវតែមួយ។ ចុចលើរូបភាពណាមួយដើម្បីមើលធំ។ មេដាយទាំងនេះពិតប្រាកដ!',
          hackathon: 'រូបថតពី Kidkathon និង Tech Kid កម្ពុជា៖ ផ្ទះឆ្លាតវៃពីក្រដាសកាតុង និងការសរសេរកូដជាមួយ micro:bit និង MakeCode។ ចុចលើរូបណាមួយដើម្បីមើលធំ។',
          contact: 'ចង់ជម្រាបសួរទេ? បំពេញទម្រង់ ហើយសារនឹងទៅដល់ប្រអប់សំបុត្ររបស់គាត់ ឬរកគាត់នៅ GitHub និង LinkedIn។'
        },
        act: { home: 'បង្ហាញ JSON', about: 'ប្តូរជាអង់គ្លេស', skills: 'បង្ហាញឧបករណ៍', roles: 'បន្លិចតួនាទី', education: 'ទៅបទពិសោធន៍', experience: 'ទៅសមិទ្ធផល', achievements: 'បើករូបភាព', hackathon: 'បើករូបភាព', contact: 'ចាប់ផ្តើមសរសេរ' },
        nudges: [
          'ខ្សឹបៗ ប៊ូតុងព្រះអាទិត្យ និងព្រះចន្ទនៅជ្រុង អាចប្តូររវាងម៉ូតភ្លឺ និងងងឹត។',
          'តើអ្នកដឹងទេ? ប៊ូតុង EN និង KH បកប្រែទំព័រទាំងមូល។',
          'ប្រអប់កូដអាចប្តូររវាងភាសាប្រាំ។ សាកល្បងចុចមើល។',
          'ចុចលើរូបភាពក្នុងផ្នែកសមិទ្ធផលដើម្បីមើលធំ។',
          'រំកិលយឺតៗក្នុងផ្នែកការអប់រំ ហើយមើលយន្តហោះតូចហោះ។'
        ],
        hide: 'លាក់ខ្ញុំ', mute: 'បិទការណែនាំ', unmute: 'បើកការណែនាំ',
        aria: 'Byte រ៉ូបូតនៃ portfolio នេះ។ ចុចដើម្បីទទួលការណែនាំ។', wake: 'ហៅ Byte មកវិញ',
        hello: 'សួស្តី!', dark: 'ម៉ូតងងឹត ខ្ញុំចូលចិត្តណាស់។', light: 'បើកភ្លើងហើយ!',
        dizzy: 'អូយ ខ្ញុំវិលមុខហើយ!', whoa: 'អូយ យឺតៗបន្តិច!', back: 'ខ្ញុំត្រឡប់មកវិញហើយ!', muted: 'មិនអីទេ គ្មានការណែនាំទៀតទេ។ ចុចខ្ញុំបើអ្នកត្រូវការ។', on: 'ការណែនាំបើកវិញហើយ។'
      }
    };
    const tx = () => T[LANG] || T.en;
    const SECTIONS = ['home', 'about', 'skills', 'roles', 'education', 'experience', 'achievements', 'hackathon', 'contact'];

    /* ----- markup ----- */
    const ART = '<svg class="bot-art" viewBox="0 0 80 100" aria-hidden="true">' +
      '<ellipse class="b-shadow" cx="40" cy="96" rx="19" ry="3.5"/>' +
      '<g class="flipper">' +
      '<path class="b-flame" d="M33 80 Q40 97 47 80 Z"/>' +
      '<rect class="b-arm l" x="12" y="60" width="9" height="19" rx="4.5"/><rect class="b-arm r" x="59" y="60" width="9" height="19" rx="4.5"/>' +
      '<rect class="b-body" x="22" y="56" width="36" height="26" rx="12"/><circle class="b-core" cx="40" cy="69" r="5"/>' +
      '<line class="b-ant" x1="40" y1="20" x2="40" y2="10"/><circle class="b-bulb" cx="40" cy="7.5" r="4.2"/>' +
      '<rect class="b-ear" x="3" y="32" width="6" height="16" rx="3"/><rect class="b-ear" x="71" y="32" width="6" height="16" rx="3"/>' +
      '<rect class="b-head" x="8" y="18" width="64" height="44" rx="19"/><rect class="b-visor" x="15" y="25" width="50" height="30" rx="13"/>' +
      '<g class="eyes">' +
        '<g class="e-open"><rect class="eye" x="26" y="34" width="9" height="13" rx="4"/><rect class="eye" x="45" y="34" width="9" height="13" rx="4"/></g>' +
        '<g class="e-happy"><path d="M25 43 Q30.5 34 36 43 M44 43 Q49.5 34 55 43"/></g>' +
        '<g class="e-sleep"><path d="M26 42 H35 M45 42 H54"/></g>' +
        '<g class="e-dizzy"><path d="M26 35 L35 46 M35 35 L26 46 M45 35 L54 46 M54 35 L45 46"/></g>' +
        '<g class="e-wow"><circle cx="30.5" cy="41" r="6"/><circle cx="49.5" cy="41" r="6"/></g>' +
      '</g></g></svg>';

    const layer = document.createElement('div');
    layer.className = 'bot-layer';
    layer.innerHTML =
      '<div class="bot-dock" aria-hidden="true"></div>' +
      '<form class="bot-ask" autocomplete="off"><input id="botAsk" type="text" maxlength="160" enterkeyhint="send" /><button type="submit"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 12 20 4l-4 16-4-7z"/></svg></button></form>' +
      '<button type="button" class="bot" data-mood="idle">' + ART + '</button>' +
      '<div class="bot-bubble" hidden><button type="button" class="bb-x" aria-label="Close">&times;</button><div class="bb-name">Byte</div><p class="bb-q" hidden></p><div class="bb-text"></div><div class="bb-actions"></div><div class="bb-more" hidden><span class="bb-more-l"></span><div class="bb-chips"></div></div></div>' +
      '<button type="button" class="bot-wake" hidden><span class="wake-face">' + ART + '</span></button>';
    document.body.appendChild(layer);
    const bot = $('.bot', layer), bubble = $('.bot-bubble', layer), bbText = $('.bb-text', layer), bbAct = $('.bb-actions', layer);
    const wake = $('.bot-wake', layer);
    const bbMore = $('.bb-more', layer), bbMoreL = $('.bb-more-l', layer), bbChips = $('.bb-chips', layer);
    const bbQ = $('.bb-q', layer), ask = $('.bot-ask', layer), askIn = $('input', ask), askBtn = $('button', ask);

    /* ----- state ----- */
    const B = {
      on: store.get('bot') !== 'off', ok: false, started: false, first: true, autoTips: store.get('botTips') !== 'off',
      x: -100, tx: 200, w: 58, h: 72, dir: 1, walking: false, nextAt: 0, holdUntil: 0,
      sec: null, cur: null, hideT: 0, typeT: 0, moodT: 0, lastAuto: 0, nudgeAt: 0, nudgeI: 0,
      lastAct: performance.now(), t: 0, clicks: 0, clickT: 0, sleepy: false, ex: 0
    };
    // only laptops and iPads: phones are too small for a walking robot
    const allowed = () => window.innerWidth >= 744 && window.innerHeight >= 500;
    const W = () => document.documentElement.clientWidth, H = () => window.innerHeight;
    const MARGIN = 16;
    const askW = () => (ask.offsetWidth || 0) + 22;
    const maxX = () => Math.max(W() - B.w - MARGIN - askW(), MARGIN);
    const clampX = x => Math.min(Math.max(x, MARGIN), maxX());
    const rnd = (a, b) => a + Math.random() * (b - a);
    const measure = () => { B.w = bot.offsetWidth || 58; B.h = bot.offsetHeight || 72; };
    const botTop = () => H() - B.h - 6;

    function apply() {
      B.ok = allowed();
      layer.classList.toggle('na', !B.ok);
      layer.classList.toggle('off', !B.on);
      document.body.classList.toggle('has-bot', B.ok && B.on);
      wake.hidden = !(B.ok && !B.on);
      if (!B.ok) hide();
      measure();
      B.x = clampX(B.x); B.tx = clampX(B.tx);
    }

    function setMood(m, ms) {
      clearTimeout(B.moodT);
      bot.dataset.mood = m;
      if (ms) B.moodT = setTimeout(() => { bot.dataset.mood = B.sleepy ? 'sleep' : 'idle'; }, ms);
    }

    /* ----- speech bubble ----- */
    function place() {
      if (bubble.hidden) return;
      const bw = Math.min(360, W() - 32), cx = B.x + B.w / 2;
      const left = Math.min(Math.max(cx - bw / 2, 16), W() - bw - 16);
      const top = botTop() - bubble.offsetHeight - 14;
      bubble.style.width = bw + 'px';
      bubble.style.transform = 'translate3d(' + left.toFixed(1) + 'px,' + Math.max(top, 70).toFixed(1) + 'px,0)';
      bubble.style.setProperty('--tail', Math.min(Math.max(cx - left, 22), bw - 22).toFixed(1) + 'px');
    }
    function hide() {
      clearTimeout(B.hideT); clearInterval(B.typeT);
      B.cur = null; bubble.classList.remove('open'); bot.classList.remove('talking');
      setTimeout(() => { if (!bubble.classList.contains('open')) bubble.hidden = true; }, 220);
    }
    // turns "lead line" + "• Label: text" lines into a tidy list
    function renderRich(text) {
      let ul = null, n = 0;
      text.split('\n').forEach(line => {
        if (line.indexOf('• ') === 0) {
          if (!ul) { ul = document.createElement('ul'); ul.className = 'bb-list'; bbText.appendChild(ul); }
          const li = document.createElement('li'), body = line.slice(2), m = body.match(/^([^:៖]{1,30})[:៖]\s*(.*)$/);
          if (m) {
            const b = document.createElement('b'); b.textContent = m[1];
            const s = document.createElement('span'); s.textContent = m[2];
            li.appendChild(b); li.appendChild(s);
          } else { li.textContent = body; li.className = 'plain'; }
          li.style.setProperty('--i', n++); ul.appendChild(li);
        } else {
          ul = null;
          const p = document.createElement('p'); p.className = 'bb-lead'; p.textContent = line;
          p.style.setProperty('--i', n++); bbText.appendChild(p);
        }
      });
    }
    // say(getter, ms): getter() returns { text, buttons } in the current language
    function say(getter, ms) {
      if (!B.ok || !B.on) return;
      clearTimeout(B.hideT); clearInterval(B.typeT);
      B.cur = { getter: getter, ms: ms };
      const c = getter();
      bbAct.innerHTML = ''; bbChips.innerHTML = '';
      bbQ.hidden = !c.q; bbQ.textContent = c.q ? tx().you + c.q : '';
      (c.buttons || []).forEach(b => {
        const el = document.createElement('button');
        el.type = 'button'; el.textContent = b.label;
        if (b.chip) el.className = 'chip';
        el.addEventListener('click', () => { b.fn(); if (!b.keep) hide(); });
        (b.chip ? bbChips : bbAct).appendChild(el);
      });
      bbMore.hidden = !bbChips.children.length; bbMoreL.textContent = c.chipsLabel || tx().alsoAsk;
      bubble.hidden = false;
      bubble.classList.toggle('short', !(c.buttons && c.buttons.length));
      requestAnimationFrame(() => bubble.classList.add('open'));
      bbText.textContent = '';
      const chars = parts(c.text);
      if (c.text.indexOf('\n') >= 0) {
        // organised answer: a lead line, then a labelled list whose rows appear one after another
        renderRich(c.text);
        if (!reduceMotion) { bot.classList.add('talking'); B.typeT = setTimeout(() => bot.classList.remove('talking'), 1200); }
      } else if (reduceMotion) bbText.textContent = c.text;
      else {
        let i = 0; bot.classList.add('talking');
        B.typeT = setInterval(() => {
          i += Math.max(2, Math.ceil(chars.length / 150)); bbText.textContent = chars.slice(0, i).join('');
          if (i >= chars.length) { clearInterval(B.typeT); bot.classList.remove('talking'); }
        }, 18);
      }
      if (ms) B.hideT = setTimeout(hide, ms);
      place();
    }
    const shortSay = (key, ms) => say(() => ({ text: typeof key === 'function' ? key() : tx()[key] }), ms || 2600);

    /* ----- what Byte suggests in each section ----- */
    function flash(sel) {
      const els = $$(sel);
      els.forEach(e => e.classList.add('bot-flash'));
      setTimeout(() => els.forEach(e => e.classList.remove('bot-flash')), 2800);
    }
    const goto = id => { const el = document.getElementById(id); if (el) el.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' }); };
    const ACTIONS = {
      home: () => { const b = $('[data-lang="json"]'); if (b) b.click(); },
      about: () => { const b = $$('.lang-switch button').find(x => x.dataset.l !== LANG); if (b) b.click(); },
      skills: () => flash('#skills .skill.git, #skills .skill.term, #skills .skill.net'),
      roles: () => flash('#roles .role'),
      education: () => goto('experience'),
      experience: () => goto('achievements'),
      achievements: () => { const b = $('#achievements .award-media .shot'); if (b) b.click(); },
      hackathon: () => { const b = $('#hackathon .snap-btn'); if (b) b.click(); },
      contact: () => { const f = $('#cf-name'); if (f) { f.scrollIntoView({ behavior: 'smooth', block: 'center' }); setTimeout(() => f.focus({ preventScroll: true }), 500); } }
    };
    const NUDGE_ACTS = [
      { label: ['Try it', 'សាកល្បង'], fn: () => { const b = $('#themeBtn'); if (b) b.click(); } },
      { label: ['Try it', 'សាកល្បង'], fn: () => { const b = $$('.lang-switch button').find(x => x.dataset.l !== LANG); if (b) b.click(); } },
      { label: ['Show me', 'បង្ហាញខ្ញុំ'], fn: () => { const tabs = $$('.lang-tabs [role="tab"]'); if (tabs.length) tabs[Math.floor(Math.random() * tabs.length)].click(); goto('home'); } },
      { label: ['Open a photo', 'បើករូបភាព'], fn: () => { const b = $('#achievements .award-media .shot'); if (b) b.click(); } },
      { label: ['Take me there', 'នាំខ្ញុំទៅទីនោះ'], fn: () => goto('education') }
    ];
    function tipGetter(sec) {
      return () => {
        const t = tx();
        return {
          text: t.tips[sec],
          buttons: [
            { label: t.act[sec], fn: ACTIONS[sec] },
            { label: t.askBtn, fn: () => openAsk(), keep: true },
            { label: B.autoTips ? t.mute : t.unmute, fn: () => { B.autoTips = !B.autoTips; store.set('botTips', B.autoTips ? 'on' : 'off'); shortSay(B.autoTips ? 'on' : 'muted'); } },
            { label: t.hide, fn: () => turn(false) }
          ]
        };
      };
    }
    function currentSection() {
      let cur = 'home';
      for (const id of SECTIONS) {
        if (id === 'home') continue;
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top < H() * .45) cur = id;
      }
      return cur;
    }


    /* ===== Ask Byte: questions typed into the box get answered from what is on this page ===== */
    Object.assign(T.en, {
      alsoAsk: 'You might also ask', askPh: 'Ask Byte about Doryco...', askBtn: 'Ask me', you: 'You: ', go: 'Take me there', askDoryco: 'Send it to Doryco',
      pick: 'Pick a question', askIntro: 'Ask me anything about Doryco! Type in the box below, or pick a question.',
      idk: 'I do not know that one yet. But I can put your question in the contact form so Doryco can answer it himself.',
      phs: ['Ask Byte about Doryco...', 'Try: Tell me briefly', 'Try: What does he study?', 'Try: What is his GPA?', 'Try: How can I contact him?', 'Try: What medals has he won?']
    });
    Object.assign(T.km, {
      alsoAsk: 'អ្នកក៏អាចសួរថា', askPh: 'សួរ Byte អំពី ជង់ ឌូរីកូ...', askBtn: 'សួរខ្ញុំ', you: 'អ្នក៖ ', go: 'នាំខ្ញុំទៅទីនោះ', askDoryco: 'ផ្ញើទៅ ជង់ ឌូរីកូ',
      pick: 'ជ្រើសរើសសំណួរ', askIntro: 'សួរខ្ញុំអំពី ជង់ ឌូរីកូ បានគ្រប់យ៉ាង! វាយក្នុងប្រអប់ខាងក្រោម ឬជ្រើសរើសសំណួរ។',
      idk: 'ខ្ញុំមិនទាន់ដឹងចម្លើយនេះនៅឡើយទេ។ ប៉ុន្តែខ្ញុំអាចដាក់សំណួររបស់អ្នកក្នុងទម្រង់ទំនាក់ទំនង ដើម្បីឱ្យគាត់ឆ្លើយដោយខ្លួនឯង។',
      phs: ['សួរ Byte អំពី ជង់ ឌូរីកូ...', 'សាកល្បង៖ ប្រាប់ខ្ញុំសង្ខេប', 'សាកល្បង៖ គាត់សិក្សាអ្វី?', 'សាកល្បង៖ GPA របស់គាត់ប៉ុន្មាន?', 'សាកល្បង៖ ទាក់ទងគាត់យ៉ាងដូចម្តេច?', 'សាកល្បង៖ គាត់ទទួលបានមេដាយអ្វីខ្លះ?']
    });
    const KH = n => String(n).replace(/\d/g, d => '០១២៣៤៥៦៧៨៩'[d]);
    const KB = [
      { id: 'who', q: ['Who is Doryco?', 'តើ ជង់ ឌូរីកូ ជានរណា?'], go: 'about', next: ['school', 'skills', 'achievements'],
        k: ['who is', 'about him', 'introduce', 'tell me about', 'his name', 'name'], kk: ['អ្នកណា', 'ជានរណា', 'ណែនាំ', 'ឈ្មោះ'],
        a: ['Doryco Chorng (in Khmer: ជង់ ឌូរីកូ) is an international student from Cambodia, studying Computer Engineering at Tacoma Community College in Washington.',
            'ជង់ ឌូរីកូ (Doryco Chorng) ជានិស្សិតអន្តរជាតិមកពីកម្ពុជា កំពុងសិក្សាផ្នែកវិស្វកម្មកុំព្យូទ័រ នៅ Tacoma Community College រដ្ឋ Washington។'] },
      { id: 'age', q: ['How old is he?', 'គាត់អាយុប៉ុន្មាន?'], next: ['school', 'story'],
        k: ['age', 'how old', 'old is', 'birthday', 'born', 'years old'], kk: ['អាយុ', 'ចាស់', 'ថ្ងៃកំណើត', 'កើត'],
        a: [() => 'He is ' + currentAge() + ' years old. The number updates itself every year on his birthday.', () => 'គាត់មានអាយុ ' + KH(currentAge()) + ' ឆ្នាំ។ លេខនេះកែខ្លួនឯងរាល់ឆ្នាំនៅថ្ងៃកំណើតរបស់គាត់។'] },
      { id: 'school', q: ['What does he study?', 'គាត់សិក្សាអ្វី?'], go: 'education', next: ['gpa', 'skills', 'dream'],
        k: ['study', 'studying', 'school', 'college', 'tcc', 'tacoma', 'major', 'degree', 'university', 'associate', 'a.s'], kk: ['សាលា', 'មហាវិទ្យាល័យ', 'សិក្សា', 'រៀន', 'tcc'],
        a: ['He is studying for an Associate degree (A.S.) in Computer Engineering at Tacoma Community College (TCC) in Tacoma, Washington. He skipped his senior year of high school to start there, and earns a dual high school diploma and college degree.',
            'គាត់កំពុងសិក្សាថ្នាក់បរិញ្ញាបត្ររង (A.S.) ផ្នែកវិស្វកម្មកុំព្យូទ័រ នៅ Tacoma Community College (TCC) ក្នុងទីក្រុង Tacoma រដ្ឋ Washington។ គាត់បានរំលងឆ្នាំចុងក្រោយនៃវិទ្យាល័យ ដើម្បីចាប់ផ្តើមនៅទីនោះ ហើយទទួលបានទាំងសញ្ញាបត្រវិទ្យាល័យ និងបរិញ្ញាបត្ររង។'] },
      { id: 'gpa', q: ['What is his GPA?', 'GPA របស់គាត់ប៉ុន្មាន?'], go: 'story', next: ['story', 'achievements'],
        k: ['gpa', 'grade', 'grades', 'marks', '4.0', 'academic'], kk: ['ពិន្ទុ', 'gpa', 'និទ្ទេស'],
        a: ['Doryco keeps a stable 4.0 GPA at TCC. It was not always like that: he started with E grades as a child, then rose to B in high school.',
            'ជង់ ឌូរីកូ រក្សា GPA 4.0 ស្ថិរភាពនៅ TCC។ វាមិនមែនតែងតែបែបនេះទេ៖ កាលនៅតូចគាត់ទទួលបានពិន្ទុ E បន្ទាប់មកឡើងដល់ B នៅវិទ្យាល័យ។'] },
      { id: 'skills', q: ['What are his skills?', 'គាត់មានជំនាញអ្វីខ្លះ?'], go: 'skills', next: ['tools', 'office', 'experience'],
        k: ['skill', 'skills', 'tech', 'programming', 'languages', 'code', 'coding', 'stack', 'frontend', 'backend', 'front end', 'back end', 'html', 'css', 'angular', 'typescript', 'javascript', 'java', 'python', 'can he do', 'know how'], kk: ['ជំនាញ', 'ភាសាកម្មវិធី', 'កូដ', 'សរសេរកម្មវិធី', 'បច្ចេកវិទ្យា'],
        a: ['Frontend: HTML, CSS and Angular. Backend: TypeScript, JavaScript, Java and Python. He also uses Git, GitHub, the terminal, networking basics and Microsoft Office 365.',
            'Frontend៖ HTML, CSS និង Angular។ Backend៖ TypeScript, JavaScript, Java និង Python។ គាត់ក៏ប្រើ Git, GitHub, terminal, មូលដ្ឋានបណ្តាញ និង Microsoft Office 365 ដែរ។'] },
      { id: 'office', q: ['Does he use Microsoft Office?', 'គាត់ប្រើ Microsoft Office ទេ?'], go: 'skills', next: ['skills', 'tools'],
        k: ['office', 'word', 'excel', 'powerpoint', 'outlook', 'teams', 'onedrive', 'microsoft'], kk: ['អូហ្វីស', 'office', 'វើដ', 'អិចសែល'],
        a: ['Yes! Microsoft Office 365: Word, Excel, PowerPoint, Outlook, Teams and OneDrive.', 'បាទ! Microsoft Office 365៖ Word, Excel, PowerPoint, Outlook, Teams និង OneDrive។'] },
      { id: 'tools', q: ['Does he know Git and the terminal?', 'គាត់ចេះ Git និង terminal ទេ?'], go: 'skills', next: ['skills', 'social'],
        k: ['git', 'commit', 'terminal', 'command', 'mkdir', 'ipconfig', 'network', 'networking', 'tools'], kk: ['ឧបករណ៍', 'git', 'terminal', 'បណ្តាញ'],
        a: ['Yes. He uses Git and GitHub to save and share code, terminal commands like git commit and mkdir, and ipconfig to check network settings.',
            'បាទ។ គាត់ប្រើ Git និង GitHub ដើម្បីរក្សា និងចែករំលែកកូដ ពាក្យបញ្ជា terminal ដូចជា git commit និង mkdir និង ipconfig សម្រាប់មើលការកំណត់បណ្តាញ។'] },
      { id: 'dream', q: ['What is his dream job?', 'ការងារក្តីសុបិនរបស់គាត់គឺអ្វី?'], go: 'about', next: ['skills', 'contact'],
        k: ['dream', 'future', 'goal', 'career', 'want to be', 'become', 'embedded', 'ml', 'machine learning', 'ai', 'plan'], kk: ['ក្តីសុបិន', 'អនាគត', 'គោលដៅ', 'ចង់ធ្វើ', 'ចង់ក្លាយ'],
        a: ['His dream job is Embedded ML Engineer: combining computer engineering and machine learning to build smart devices.',
            'ការងារក្តីសុបិនរបស់គាត់គឺវិស្វករ Embedded ML៖ ផ្សំវិស្វកម្មកុំព្យូទ័រ និង machine learning ដើម្បីបង្កើតឧបករណ៍ឆ្លាតវៃ។'] },
      { id: 'experience', q: ['What experience does he have?', 'គាត់មានបទពិសោធន៍អ្វីខ្លះ?'], go: 'experience', next: ['achievements', 'contact'],
        k: ['experience', 'work', 'job', 'worked', 'volunteer', 'monitor', 'troubleshoot', 'printer', 'computer issues', 'fix', 'repair', 'leadership', 'leader'], kk: ['បទពិសោធន៍', 'ការងារ', 'ស្ម័គ្រចិត្ត', 'ប្រធានថ្នាក់', 'ម៉ាស៊ីនបោះពុម្ព', 'ជួសជុល'],
        a: ['Sep 2024 to Jul 2025: class monitor and community volunteer, helping teachers with daily tasks and taking on leadership responsibilities. Jun to Aug 2025: technical troubleshooting, fixing common computer issues and technical printer issues.',
            'កញ្ញា ២០២៤ ដល់ កក្កដា ២០២៥៖ ប្រធានថ្នាក់ និងអ្នកស្ម័គ្រចិត្តសហគមន៍ ជួយលោកគ្រូអ្នកគ្រូក្នុងកិច្ចការប្រចាំថ្ងៃ និងទទួលខុសត្រូវក្នុងតួនាទីដឹកនាំ។ មិថុនា ដល់ សីហា ២០២៥៖ ដោះស្រាយបញ្ហាបច្ចេកទេស ជួសជុលបញ្ហាកុំព្យូទ័រទូទៅ និងបញ្ហាម៉ាស៊ីនបោះពុម្ព។'] },
      { id: 'education', q: ['Which schools did he attend?', 'គាត់បានរៀននៅសាលាណាខ្លះ?'], go: 'education', next: ['school', 'story'],
        k: ['education', 'schools', 'high school', 'went to', 'attended', 'background', 'history'], kk: ['ការអប់រំ', 'វិទ្យាល័យ', 'ប្រវត្តិសិក្សា'],
        a: ['TCC (2026 to now), Stadium High School in Washington (2025 to 2026, 11th grade), NGS Preah Yukunthor High School in Cambodia (2024 to 2025, 10th grade), and Pannasastra International School in Phnom Penh (2019 to 2024, grades 5 to 9).',
            'TCC (២០២៦ ដល់បច្ចុប្បន្ន), Stadium High School រដ្ឋ Washington (២០២៥ ដល់ ២០២៦ ថ្នាក់ទី១១), NGS Preah Yukunthor High School នៅកម្ពុជា (២០២៤ ដល់ ២០២៥ ថ្នាក់ទី១០) និង Pannasastra International School នៅភ្នំពេញ (២០១៩ ដល់ ២០២៤ ថ្នាក់ទី៥ ដល់ ៩)។'] },
      { id: 'achievements', q: ['What has he achieved?', 'គាត់ទទួលបានសមិទ្ធផលអ្វីខ្លះ?'], go: 'achievements', next: ['contact', 'story'],
        k: ['achievement', 'achieved', 'award', 'medal', 'prize', 'competition', 'olympiad', 'won', 'win', 'trophy', 'certificate', 'honor'], kk: ['សមិទ្ធផល', 'មេដាយ', 'ពានរង្វាន់', 'ការប្រកួត', 'អូឡាំពិក', 'ឈ្នះ', 'វិញ្ញាបនបត្រ'],
        a: ['Six competitions: UCMAS 3rd runner-up (2019), NEO Coding Olympiad Honorable Mention (2025), WMI Silver (2025), Copernicus Olympiad Silver (2025), SASMO Bronze (2025) and AIMO Silver (2025).',
            'ការប្រកួតប្រាំមួយ៖ UCMAS ជ័យលាភីលេខ ៣ (២០១៩), NEO Coding Olympiad វិញ្ញាបនបត្រកិត្តិយស (២០២៥), WMI មេដាយប្រាក់ (២០២៥), Copernicus Olympiad មេដាយប្រាក់ (២០២៥), SASMO មេដាយសំរិទ្ធ (២០២៥) និង AIMO មេដាយប្រាក់ (២០២៥)។'] },
      { id: 'sasmo', boost: 8, q: ['Tell me about SASMO', 'ប្រាប់ខ្ញុំអំពី SASMO'], go: 'achievements', next: ['achievements', 'contact'], k: ['sasmo', 'singapore'], kk: ['សិង្ហបុរី', 'sasmo'],
        a: ['SASMO 2025: Bronze medal at the Singapore Math International Olympiad, earned in grade 10 at NGS Preah Yukunthor High School.', 'SASMO ២០២៥៖ មេដាយសំរិទ្ធ នៅការប្រកួតអូឡាំពិកគណិតវិទ្យាអន្តរជាតិសិង្ហបុរី ទទួលបានក្នុងថ្នាក់ទី១០ នៅ NGS Preah Yukunthor High School។'] },
      { id: 'aimo', boost: 8, q: ['Tell me about AIMO', 'ប្រាប់ខ្ញុំអំពី AIMO'], go: 'achievements', next: ['achievements', 'contact'], k: ['aimo', 'asia international'], kk: ['aimo'],
        a: ['AIMO 2025: Silver medal at the Asia International Mathematical Olympiad, Cambodia trial round.', 'AIMO ២០២៥៖ មេដាយប្រាក់ នៅការប្រកួតអូឡាំពិកគណិតវិទ្យាអន្តរជាតិអាស៊ី ជុំសាកល្បងនៅកម្ពុជា។'] },
      { id: 'wmi', boost: 8, q: ['Tell me about WMI', 'ប្រាប់ខ្ញុំអំពី WMI'], go: 'achievements', next: ['achievements', 'contact'], k: ['wmi', 'world math'], kk: ['wmi'],
        a: ['WMI 2025: Silver medal at the World Mathematics Invitational, preliminary round in Cambodia (22 March 2025).', 'WMI ២០២៥៖ មេដាយប្រាក់ នៅការប្រកួតគណិតវិទ្យាអញ្ជើញពិភពលោក ជុំជម្រុះនៅកម្ពុជា (ថ្ងៃទី២២ មីនា ២០២៥)។'] },
      { id: 'neo', boost: 8, q: ['Tell me about NEO', 'ប្រាប់ខ្ញុំអំពី NEO'], go: 'achievements', next: ['achievements', 'contact'], k: ['neo', 'neoscience'], kk: ['neo'],
        a: ['NEO Coding Olympiad 2025: Honorable Mention certificate in the Coding category, held on 19 January 2025.', 'NEO Coding Olympiad ២០២៥៖ វិញ្ញាបនបត្រកិត្តិយសក្នុងប្រភេទ Coding ថ្ងៃទី១៩ មករា ២០២៥។'] },
      { id: 'copernicus', boost: 8, q: ['Tell me about Copernicus', 'ប្រាប់ខ្ញុំអំពី Copernicus'], go: 'achievements', next: ['achievements', 'contact'], k: ['copernicus'], kk: ['copernicus'],
        a: ['Copernicus Olympiad 2025: Silver medal in Mathematics, preliminary round.', 'Copernicus Olympiad ២០២៥៖ មេដាយប្រាក់ ផ្នែកគណិតវិទ្យា ជុំជម្រុះ។'] },
      { id: 'ucmas', boost: 8, q: ['Tell me about UCMAS', 'ប្រាប់ខ្ញុំអំពី UCMAS'], go: 'achievements', next: ['achievements', 'contact'], k: ['ucmas', 'abacus', 'mental arithmetic'], kk: ['ucmas'],
        a: ['UCMAS: 3rd runner-up at an international competition in 2019.', 'UCMAS៖ ជ័យលាភីលេខ ៣ នៅការប្រកួតអន្តរជាតិ ឆ្នាំ ២០១៩។'] },
      { id: 'contact', q: ['How can I contact him?', 'ទាក់ទងគាត់យ៉ាងដូចម្តេច?'], go: 'contact', next: ['social', 'achievements'],
        k: ['hire', 'contact', 'email', 'mail', 'reach', 'message', 'talk to', 'collaborate', 'collaboration', 'internship', 'opportunity', 'work with', 'send', 'phone'], kk: ['ទំនាក់ទំនង', 'ទាក់ទង', 'អ៊ីមែល', 'ផ្ញើសារ', 'ធ្វើការជាមួយ'],
        a: ['The easiest way is the contact form on this page: it goes straight to his inbox. You can also email doryco.chorng@outlook.com.',
            'វិធីងាយបំផុតគឺទម្រង់ទំនាក់ទំនងនៅលើទំព័រនេះ សាររបស់អ្នកទៅត្រង់ប្រអប់សំបុត្ររបស់គាត់។ ឬអ៊ីមែលទៅ doryco.chorng@outlook.com។'] },
      { id: 'social', q: ['Where can I find him online?', 'រកគាត់នៅឯណាតាមអនឡាញ?'], go: 'contact', next: ['contact'],
        k: ['social', 'instagram', 'facebook', 'linkedin', 'leetcode', 'github', 'follow', 'profiles', 'links', 'online'], kk: ['បណ្តាញសង្គម', 'ហ្វេសប៊ុក', 'អ៊ីនស្តាក្រាម', 'លីងឃឺដីន'],
        a: ['GitHub: dorycoChorng. LinkedIn: chorngdorycodev. LeetCode: doryco2889. Facebook: RycoooMe. Instagram: @dorycochorngdev. The links are in the Contact section.',
            'GitHub៖ dorycoChorng។ LinkedIn៖ chorngdorycodev។ LeetCode៖ doryco2889។ Facebook៖ RycoooMe។ Instagram៖ @dorycochorngdev។ តំណទាំងនេះនៅក្នុងផ្នែកទំនាក់ទំនង។'] },
      { id: 'nationality', q: ['Where is he from?', 'គាត់មកពីណា?'], next: ['education', 'story'],
        k: ['nationality', 'cambodia', 'cambodian', 'khmer', 'country', 'from where', 'where is he from', 'where from', 'citizen'], kk: ['សញ្ជាតិ', 'ខ្មែរ', 'កម្ពុជា', 'មកពីណា'],
        a: ['He is Cambodian. He studied in Cambodia first, and is now studying in the United States.', 'គាត់ជាជនជាតិខ្មែរ។ គាត់បានសិក្សានៅកម្ពុជាមុន ហើយឥឡូវកំពុងសិក្សានៅសហរដ្ឋអាមេរិក។'] },
      { id: 'story', q: ['What is his story?', 'រឿងរបស់គាត់គឺអ្វី?'], go: 'story', next: ['school', 'dream'],
        k: ['story', 'journey', 'childhood', 'struggle', 'difficult', 'hard time', 'e grade', 'bad grade', 'inspire'], kk: ['រឿង', 'ដំណើរ', 'ក្មេង', 'លំបាក'],
        a: ['He started with E grades as a child, rose to B in high school, then earned the chance to study in the United States, the best achievement of his life. He later skipped senior year to start at TCC with a 4.0 GPA.',
            'គាត់ចាប់ផ្តើមដោយពិន្ទុ E កាលនៅតូច ឡើងដល់ B នៅវិទ្យាល័យ បន្ទាប់មកទទួលបានឱកាសទៅសិក្សានៅសហរដ្ឋអាមេរិក ដែលជាសមិទ្ធផលដ៏ល្អបំផុតក្នុងជីវិតរបស់គាត់។ ក្រោយមកគាត់រំលងឆ្នាំចុងក្រោយ ហើយចាប់ផ្តើមនៅ TCC ជាមួយ GPA 4.0។'] },
      { id: 'site', q: ['How do I use this website?', 'ប្រើគេហទំព័រនេះយ៉ាងដូចម្តេច?'], next: ['skills', 'contact'],
        k: ['language', 'translate', 'dark mode', 'light mode', 'theme', 'website', 'page', 'navigate', 'how do i'], kk: ['ភាសា', 'គេហទំព័រ', 'ម៉ូត', 'ប្តូរ'],
        a: ['Switch language with EN and KH, switch light and dark with the sun and moon button, and try the tabs on the code card. Scroll slowly through the timelines to watch the little plane.',
            'ប្តូរភាសាដោយប៊ូតុង EN និង KH ប្តូរម៉ូតភ្លឺ និងងងឹតដោយប៊ូតុងព្រះអាទិត្យ និងព្រះចន្ទ ហើយសាកល្បងចុចផ្ទាំងលើប្រអប់កូដ។ រំកិលយឺតៗលើខ្សែពេលវេលា ដើម្បីមើលយន្តហោះតូច។'] },
      { id: 'byte', q: ['Who are you?', 'តើអ្នកជានរណា?'], next: ['who', 'help'],
        k: ['byte', 'robot', 'bot', 'who are you', 'are you real', 'your name'], kk: ['ប៊ីត', 'រ៉ូបូត', 'byte'],
        a: ['I am Byte, a little robot who lives at the bottom of this page. I walk around, give tips and answer questions about Doryco.', 'ខ្ញុំគឺ Byte រ៉ូបូតតូចម្នាក់ រស់នៅផ្នែកខាងក្រោមទំព័រនេះ។ ខ្ញុំដើរលេង ផ្តល់ការណែនាំ និងឆ្លើយសំណួរអំពី ជង់ ឌូរីកូ។'] },
      { id: 'hello', q: ['Hello!', 'សួស្តី!'], next: ['who', 'school', 'skills'], k: ['hello', 'hi', 'hey', 'hola', 'good morning', 'good evening', 'sup'], kk: ['សួស្តី', 'ជម្រាបសួរ', 'ហាយ'],
        a: ['Hi! Ask me anything about Doryco: his school, skills, achievements or how to contact him.', 'សួស្តី! សួរខ្ញុំអំពី ជង់ ឌូរីកូ បានគ្រប់យ៉ាង៖ សាលា ជំនាញ សមិទ្ធផល ឬរបៀបទាក់ទងគាត់។'] },
      { id: 'thanks', q: ['Thank you!', 'អរគុណ!'], next: [], k: ['thank', 'thanks', 'thx', 'appreciate'], kk: ['អរគុណ'], a: ['You are welcome!', 'មិនអីទេ!'] },
      { id: 'joke', q: ['Tell me a joke', 'និយាយរឿងកំប្លែងមួយ'], next: ['skills'], k: ['joke', 'funny', 'laugh'], kk: ['កំប្លែង'],
        a: ['Why do programmers prefer dark mode? Because light attracts bugs.', 'ហេតុអ្វីអ្នកសរសេរកម្មវិធីចូលចិត្តម៉ូតងងឹត? ព្រោះពន្លឺទាក់ទាញកំហុស (bug)។'] },
      { id: 'help', q: ['What can you answer?', 'តើអ្នកអាចឆ្លើយអ្វីបាន?'], next: ['who', 'school', 'skills', 'achievements'], k: ['help', 'what can you', 'what do you', 'can you do', 'menu', 'options', 'ask'], kk: ['ជួយ', 'អាចធ្វើអ្វី'],
        a: ['I can answer questions about Doryco: who he is, his age, school, GPA, skills, dream job, experience, achievements, and how to contact him.', 'ខ្ញុំអាចឆ្លើយសំណួរអំពី ជង់ ឌូរីកូ៖ គាត់ជានរណា អាយុ សាលា GPA ជំនាញ ការងារក្តីសុបិន បទពិសោធន៍ សមិទ្ធផល និងរបៀបទាក់ទងគាត់។'] }
    ];
    KB.push({
      id: 'summary', boost: 14, q: ['Tell me briefly', 'ប្រាប់ខ្ញុំសង្ខេប'], next: ['school', 'skills', 'achievements', 'contact'],
      k: ['briefly', 'brief', 'summary', 'summarize', 'summarise', 'overview', 'in short', 'short version', 'tldr', 'tl;dr', 'sum up', 'recap', 'in a nutshell', 'whole website', 'everything'],
      kk: ['សង្ខេប', 'សេចក្តីសង្ខេប', 'ខ្លីៗ', 'ទាំងមូល', 'សរុប'],
      a: [() => 'In short: Doryco Chorng is a ' + currentAge() + '-year-old Cambodian international student, studying an A.S. in Computer Engineering at TCC with a 4.0 GPA.\n' +
            '• Skills: HTML, CSS, Angular, TypeScript, JavaScript, Java, Python, Git and Office 365.\n' +
            '• Dream: Embedded ML Engineer.\n' +
            '• Experience: class monitor and community volunteer, plus fixing computer and printer issues.\n' +
            '• Achievements: six math and coding competitions, with silver and bronze medals.\n' +
            '• Story: from E grades as a child to a 4.0 GPA in the United States.\n' +
            '• Contact: the form at the bottom of the page, or doryco.chorng@outlook.com.',
          () => 'សង្ខេប៖ ជង់ ឌូរីកូ ជានិស្សិតអន្តរជាតិខ្មែរ អាយុ ' + KH(currentAge()) + ' ឆ្នាំ កំពុងសិក្សាបរិញ្ញាបត្ររងផ្នែកវិស្វកម្មកុំព្យូទ័រ នៅ TCC ជាមួយ GPA 4.0។\n' +
            '• ជំនាញ៖ HTML, CSS, Angular, TypeScript, JavaScript, Java, Python, Git និង Office 365។\n' +
            '• ក្តីសុបិន៖ វិស្វករ Embedded ML។\n' +
            '• បទពិសោធន៍៖ ប្រធានថ្នាក់ និងអ្នកស្ម័គ្រចិត្តសហគមន៍ ព្រមទាំងជួសជុលកុំព្យូទ័រ និងម៉ាស៊ីនបោះពុម្ព។\n' +
            '• សមិទ្ធផល៖ ការប្រកួតគណិតវិទ្យា និងកូដប្រាំមួយ ជាមួយមេដាយប្រាក់ និងមេដាយសំរិទ្ធ។\n' +
            '• រឿងរបស់គាត់៖ ពីពិន្ទុ E កាលនៅតូច ដល់ GPA 4.0 នៅសហរដ្ឋអាមេរិក។\n' +
            '• ទំនាក់ទំនង៖ ទម្រង់នៅខាងក្រោមទំព័រ ឬ doryco.chorng@outlook.com។']
    });
    KB.push({
      id: 'hackathon', boost: 6, q: ['Has he joined hackathons?', 'តើគាត់បានចូលរួមហាកាតុនទេ?'], go: 'hackathon', next: ['experience', 'skills', 'contact'],
      k: ['kidkathon', 'tech kid', 'techkid', 'hackathon', 'hackathons', 'micro:bit', 'microbit', 'makecode', 'album', 'photos', 'pictures', 'gallery', 'event', 'events', 'smart house', 'cardboard'], kk: ['kidkathon', 'tech kid', 'ហាកាតុន', 'រូបថត', 'អាល់ប៊ុម', 'ព្រឹត្តិការណ៍'],
      a: ['Yes! He joined hackathon events to gain experience.\n• Events: Kidkathon and Tech Kid, Cambodia\n• Built: a cardboard smart house with micro:bit boards\n• Coded with: Microsoft MakeCode for micro:bit\n• Photos: see the Hackathon Album section',
          'បាទ! គាត់បានចូលរួមព្រឹត្តិការណ៍ហាកាតុន ដើម្បីទទួលបទពិសោធន៍។\n• ព្រឹត្តិការណ៍៖ Kidkathon និង Tech Kid កម្ពុជា\n• បានសាងសង់៖ ផ្ទះឆ្លាតវៃពីក្រដាសកាតុងជាមួយបន្ទះ micro:bit\n• សរសេរកូដជាមួយ៖ Microsoft MakeCode សម្រាប់ micro:bit\n• រូបថត៖ មើលផ្នែកអាល់ប៊ុមហាកាតុន']
    });
    /* RICH_ANSWERS: the longer answers, organised as a lead line plus labelled rows */
    const RICH = {
      who: ['Doryco Chorng (Khmer: ជង់ ឌូរីកូ) is a Cambodian international student.\n• Studying: A.S. in Computer Engineering at TCC, Washington\n• Dream: Embedded ML Engineer\n• Known for: math and coding competitions and a 4.0 GPA',
            'ជង់ ឌូរីកូ (Doryco Chorng) ជានិស្សិតអន្តរជាតិខ្មែរ។\n• កំពុងសិក្សា៖ បរិញ្ញាបត្ររង (A.S.) វិស្វកម្មកុំព្យូទ័រ នៅ TCC រដ្ឋ Washington\n• ក្តីសុបិន៖ វិស្វករ Embedded ML\n• ស្គាល់ដោយ៖ ការប្រកួតគណិតវិទ្យា និងកូដ និង GPA 4.0'],
      school: ['He studies at Tacoma Community College (TCC) in Washington.\n• Degree: Associate degree (A.S.) in Computer Engineering\n• Path: skipped senior year of high school to start at TCC\n• Earns: a high school diploma and a college degree together\n• GPA: a stable 4.0',
               'គាត់សិក្សានៅ Tacoma Community College (TCC) រដ្ឋ Washington។\n• ថ្នាក់៖ បរិញ្ញាបត្ររង (A.S.) ផ្នែកវិស្វកម្មកុំព្យូទ័រ\n• ផ្លូវ៖ រំលងឆ្នាំចុងក្រោយនៃវិទ្យាល័យ ដើម្បីចាប់ផ្តើមនៅ TCC\n• ទទួលបាន៖ សញ្ញាបត្រវិទ្យាល័យ និងបរិញ្ញាបត្ររងរួមគ្នា\n• GPA៖ 4.0 ស្ថិរភាព'],
      skills: ['His skills at a glance:\n• Frontend: HTML, CSS, Angular\n• Backend: TypeScript, JavaScript, Java, Python\n• Tools: Git, GitHub, terminal, networking\n• Office: Word, Excel, PowerPoint, Outlook, Teams, OneDrive',
               'ជំនាញរបស់គាត់ដោយសង្ខេប៖\n• Frontend៖ HTML, CSS, Angular\n• Backend៖ TypeScript, JavaScript, Java, Python\n• ឧបករណ៍៖ Git, GitHub, terminal, បណ្តាញ\n• Office៖ Word, Excel, PowerPoint, Outlook, Teams, OneDrive'],
      experience: ['Two chapters of experience:\n• 2024–25: Class monitor and community volunteer (Sep 2024 to Jul 2025). Helped teachers with daily tasks and took on leadership.\n• 2025: Technical troubleshooting (Jun to Aug 2025). Fixed common computer issues and technical printer issues.',
                   'បទពិសោធន៍ពីរជំពូក៖\n• ២០២៤–២៥៖ ប្រធានថ្នាក់ និងអ្នកស្ម័គ្រចិត្តសហគមន៍ (កញ្ញា ២០២៤ ដល់ កក្កដា ២០២៥)។ ជួយលោកគ្រូអ្នកគ្រូក្នុងកិច្ចការប្រចាំថ្ងៃ និងទទួលខុសត្រូវក្នុងតួនាទីដឹកនាំ។\n• ២០២៥៖ ដោះស្រាយបញ្ហាបច្ចេកទេស (មិថុនា ដល់ សីហា ២០២៥)។ ជួសជុលបញ្ហាកុំព្យូទ័រទូទៅ និងបញ្ហាម៉ាស៊ីនបោះពុម្ព។'],
      education: ['Schools he attended, newest first:\n• 2026–now: Tacoma Community College, Washington\n• 2025–26: Stadium High School, Washington (11th grade)\n• 2024–25: NGS Preah Yukunthor High School, Cambodia (10th grade)\n• 2019–24: Pannasastra International School, Phnom Penh (grades 5 to 9)',
                  'សាលាដែលគាត់បានរៀន ថ្មីបំផុតមុន៖\n• ២០២៦–ឥឡូវ៖ Tacoma Community College រដ្ឋ Washington\n• ២០២៥–២៦៖ Stadium High School រដ្ឋ Washington (ថ្នាក់ទី១១)\n• ២០២៤–២៥៖ NGS Preah Yukunthor High School កម្ពុជា (ថ្នាក់ទី១០)\n• ២០១៩–២៤៖ Pannasastra International School ភ្នំពេញ (ថ្នាក់ទី៥ ដល់ ៩)'],
      achievements: ['Six competitions in math and coding:\n• UCMAS: 3rd runner-up (2019)\n• NEO: Honorable Mention, Coding (2025)\n• WMI: Silver medal (2025)\n• Copernicus: Silver medal (2025)\n• SASMO: Bronze medal (2025)\n• AIMO: Silver medal (2025)',
                     'ការប្រកួតគណិតវិទ្យា និងកូដប្រាំមួយ៖\n• UCMAS៖ ជ័យលាភីលេខ ៣ (២០១៩)\n• NEO៖ វិញ្ញាបនបត្រកិត្តិយស ផ្នែក Coding (២០២៥)\n• WMI៖ មេដាយប្រាក់ (២០២៥)\n• Copernicus៖ មេដាយប្រាក់ (២០២៥)\n• SASMO៖ មេដាយសំរិទ្ធ (២០២៥)\n• AIMO៖ មេដាយប្រាក់ (២០២៥)'],
      contact: ['The easiest ways to reach him:\n• Form: the contact form on this page goes straight to his inbox\n• Email: doryco.chorng@outlook.com',
                'វិធីងាយបំផុតដើម្បីទាក់ទងគាត់៖\n• ទម្រង់៖ ទម្រង់ទំនាក់ទំនងនៅទំព័រនេះ សារទៅត្រង់ប្រអប់សំបុត្ររបស់គាត់\n• អ៊ីមែល៖ doryco.chorng@outlook.com'],
      social: ['Find him online:\n• GitHub: dorycoChorng\n• LinkedIn: chorngdorycodev\n• LeetCode: doryco2889\n• Facebook: RycoooMe\n• Instagram: @dorycochorngdev\nThe links are in the Contact section.',
               'រកគាត់តាមអនឡាញ៖\n• GitHub៖ dorycoChorng\n• LinkedIn៖ chorngdorycodev\n• LeetCode៖ doryco2889\n• Facebook៖ RycoooMe\n• Instagram៖ @dorycochorngdev\nតំណទាំងនេះនៅក្នុងផ្នែកទំនាក់ទំនង។'],
      story: ['His story in four steps:\n• Childhood: E grades, from kindergarten through primary school\n• High school: grades rose to B and stayed stable\n• United States: the chance to study there, the best achievement of his life\n• TCC: skipped senior year, and keeps a 4.0 GPA',
              'រឿងរបស់គាត់ក្នុងបួនជំហាន៖\n• កុមារភាព៖ ពិន្ទុ E ចាប់ពីមត្តេយ្យរហូតដល់បឋមសិក្សា\n• វិទ្យាល័យ៖ ពិន្ទុឡើងដល់ B ហើយរក្សាបានស្ថិរភាព\n• សហរដ្ឋអាមេរិក៖ ឱកាសទៅសិក្សានៅទីនោះ ជាសមិទ្ធផលដ៏ល្អបំផុតក្នុងជីវិតរបស់គាត់\n• TCC៖ រំលងឆ្នាំចុងក្រោយ ហើយរក្សា GPA 4.0'],
      site: ['Ways to explore this website:\n• Language: EN and KH translate the whole page\n• Theme: the sun and moon button switches light and dark\n• Code card: click JS, Java, Python, TS or JSON\n• Timelines: scroll slowly to watch the little plane',
             'វិធីស្វែងយល់គេហទំព័រនេះ៖\n• ភាសា៖ EN និង KH បកប្រែទំព័រទាំងមូល\n• ម៉ូត៖ ប៊ូតុងព្រះអាទិត្យ និងព្រះចន្ទ ប្តូរភ្លឺ និងងងឹត\n• ប្រអប់កូដ៖ ចុច JS, Java, Python, TS ឬ JSON\n• ខ្សែពេលវេលា៖ រំកិលយឺតៗដើម្បីមើលយន្តហោះតូច'],
      help: ['I can answer questions about Doryco:\n• About him: who he is, his age, nationality\n• Study: school, GPA, schools attended\n• Work: skills, experience, achievements\n• Future: his dream job and his story\n• Reach him: contact form, email, social accounts',
             'ខ្ញុំអាចឆ្លើយសំណួរអំពី ជង់ ឌូរីកូ៖\n• អំពីគាត់៖ គាត់ជានរណា អាយុ សញ្ជាតិ\n• ការសិក្សា៖ សាលា GPA សាលាដែលបានរៀន\n• ការងារ៖ ជំនាញ បទពិសោធន៍ សមិទ្ធផល\n• អនាគត៖ ការងារក្តីសុបិន និងរឿងរបស់គាត់\n• ទាក់ទង៖ ទម្រង់ អ៊ីមែល បណ្តាញសង្គម']
    };
    KB.forEach(it => { if (RICH[it.id]) it.a = RICH[it.id]; });
    const KBID = {}; KB.forEach(it => { KBID[it.id] = it; });
    const isKm = s => /[\u1780-\u17ff]/.test(s);
    const norm = s => s.toLowerCase().replace(/[^a-z0-9\u1780-\u17ff\s.+#]/g, ' ').replace(/\s+/g, ' ').trim();
    function findIntent(q) {
      const n = norm(q), words = new Set(n.split(' '));
      let best = null, bestScore = 0;
      KB.forEach(it => {
        let s = 0;
        (it.k || []).concat(it.kk || []).forEach(k => {
          const kl = k.toLowerCase();
          const hit = isKm(kl) ? n.includes(kl) : (kl.length <= 3 && kl.indexOf(' ') < 0) ? words.has(kl) : n.includes(kl);
          if (hit) s += kl.length + (kl.indexOf(' ') >= 0 ? 4 : 0);
        });
        if (s > 0) s += it.boost || 0;
        if (s > bestScore) { bestScore = s; best = it; }
      });
      return best;
    }
    const chipsFor = ids => ids.filter(id => KBID[id]).map(id => ({ label: KBID[id].q[LANG === 'km' ? 1 : 0], chip: true, keep: true, fn: () => answer(KBID[id].q[LANG === 'km' ? 1 : 0], id) }));
    function sendToForm(text) {
      const f = $('#cf-message');
      if (!f) return;
      f.value = text; f.dispatchEvent(new Event('input', { bubbles: true }));
      f.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'center' });
      setTimeout(() => f.focus({ preventScroll: true }), 500);
    }
    function answer(question, forcedId) {
      const it = forcedId ? KBID[forcedId] : findIntent(question);
      const li = isKm(question) ? 1 : (LANG === 'km' && forcedId ? 1 : 0);
      B.lastAct = performance.now(); if (B.sleepy) { B.sleepy = false; setMood('idle'); }
      setMood('happy', 900);
      if (!it) {
        say(() => {
          const t = tx();
          return { q: question, text: t.idk, buttons: [{ label: t.askDoryco, fn: () => sendToForm(question) }].concat(chipsFor(['summary', 'who', 'school'])) };
        }, 0);
        return;
      }
      say(() => {
        const t = tx(), l = isKm(question) ? 1 : (LANG === 'km' ? 1 : 0);
        const a = it.a[l]; const text = typeof a === 'function' ? a() : a;
        const btns = [];
        if (it.go) btns.push({ label: t.go, fn: () => goto(it.go) });
        return { q: question, text: text, buttons: btns.concat(chipsFor(it.next || [])) };
      }, 0);
    }
    function openAsk() {
      say(() => ({ text: tx().askIntro, chipsLabel: tx().pick, buttons: chipsFor(['summary', 'school', 'skills', 'achievements', 'contact']) }), 0);
      askIn.focus();
    }
    ask.addEventListener('submit', e => {
      e.preventDefault();
      const q = askIn.value.trim();
      if (!q) { const id = PH_IDS[phI % PH_IDS.length]; if (id) answer(KBID[id].q[LANG === 'km' ? 1 : 0], id); else openAsk(); return; }
      askIn.value = '';
      answer(q);
    });
    askIn.addEventListener('focus', () => { B.asking = true; B.lastAct = performance.now(); if (bubble.hidden) openAsk(); });
    askIn.addEventListener('blur', () => { B.asking = false; });
    // the box shows a new example every few seconds
    let phI = 0;
    // which question each example in the box stands for (the first one is the plain prompt)
    const PH_IDS = [null, 'summary', 'school', 'gpa', 'contact', 'achievements'];
    const setPh = () => { askIn.placeholder = tx().phs[phI % tx().phs.length]; askIn.setAttribute('aria-label', tx().askPh); askBtn.setAttribute('aria-label', tx().askBtn); };
    setInterval(() => { if (document.activeElement !== askIn && !askIn.value) { phI++; setPh(); } }, 4200);
    setPh();
    langHooks.push(setPh);

    /* ----- on / off ----- */
    function turn(on) {
      B.on = on; store.set('bot', on ? 'on' : 'off');
      apply();
      if (!on) hide();
      else { B.x = -100; B.tx = clampX(rnd(W() * .3, W() * .7)); B.nextAt = performance.now() + 3000; setMood('happy', 1400); shortSay('back', 2200); }
    }
    wake.addEventListener('click', () => turn(true));
    $('.bb-x', layer).addEventListener('click', hide);
    document.addEventListener('click', e => {
      if (!e.target.isConnected) return;                 // a suggestion that was just replaced by its answer
      if (!bubble.hidden && !e.target.closest('.bot-bubble') && !e.target.closest('.bot') && !e.target.closest('.bot-ask')) hide();
    });

    /* ----- click Byte for the tip of the section you are in ----- */
    bot.addEventListener('click', () => {
      B.lastAct = performance.now();
      if (B.sleepy) { B.sleepy = false; }
      B.clicks++; clearTimeout(B.clickT); B.clickT = setTimeout(() => { B.clicks = 0; }, 1600);
      if (B.clicks >= 5) { B.clicks = 0; setMood('dizzy', 2200); shortSay('dizzy', 2200); return; }
      setMood('happy', 900);
      if (!bubble.hidden && bubble.classList.contains('open')) hide(); else say(tipGetter(B.sec || currentSection()), 0);
    });
    window.addEventListener('mousemove', () => { B.lastAct = performance.now(); if (B.sleepy) { B.sleepy = false; setMood('idle'); } }, { passive: true });
    window.addEventListener('keydown', e => { if (e.key === 'Escape' && !bubble.hidden) hide(); });

    /* ----- the loop: Byte walks left or right on his own, the tip follows him ----- */
    let lastCheck = 0, lastY = scrollY, lastYT = performance.now(), whoaAt = 0;
    function frame(now) {
      requestAnimationFrame(frame);
      if (!B.on || !B.ok || !B.started) return;
      const dt = Math.min((now - (B.t || now)) / 16.67, 3); B.t = now;

      if (now - lastCheck > 180) {
        lastCheck = now;
        const sec = currentSection();
        if (sec !== B.sec) {
          B.sec = sec;
          if (B.autoTips && now - B.lastAuto > 5000) { B.lastAuto = now; B.nudgeAt = now + rnd(30000, 45000); say(tipGetter(sec), 11000); }
        }
        const dy = Math.abs(scrollY - lastY) / Math.max(now - lastYT, 1) * 1000;
        if (dy > 2600 && now - whoaAt > 6000 && !reduceMotion) { whoaAt = now; setMood('wow', 1200); if (bubble.hidden) shortSay('whoa', 1500); }
        lastY = scrollY; lastYT = now;
        if (now - B.lastAct > 30000 && !B.sleepy) { B.sleepy = true; setMood('sleep'); }
        // now and then Byte offers a small suggestion on his own
        if (B.autoTips && bubble.hidden && now > B.nudgeAt && !B.sleepy) {
          B.nudgeAt = now + rnd(30000, 48000);
          const idx = B.nudgeI++ % NUDGE_ACTS.length, act = NUDGE_ACTS[idx];
          say(() => ({ text: tx().nudges[idx], buttons: [{ label: act.label[LANG === 'km' ? 1 : 0], fn: act.fn }] }), 12000);
        }
      }

      const standing = !bubble.hidden || now < B.holdUntil || B.sleepy || B.asking;
      if (standing) B.walking = false;
      else if (now > B.nextAt && Math.abs(B.tx - B.x) < 3) {
        // pick a random direction, left or right, and how far to go
        const goLeft = Math.random() < .5, dist = rnd(200, 560);
        let nx = B.x + (goLeft ? -dist : dist);
        if (nx < MARGIN || nx > maxX()) nx = B.x + (goLeft ? dist : -dist);
        B.tx = clampX(nx);
        B.nextAt = now + rnd(2200, 6500);
        if (Math.random() < .3) { bot.classList.remove('hop'); void bot.offsetWidth; bot.classList.add('hop'); }
      }
      const dx = B.tx - B.x;
      if (!standing && Math.abs(dx) > 1.5) {
        const sp = (reduceMotion ? 5 : 1.15) * dt;
        B.x += Math.sign(dx) * Math.min(Math.abs(dx), sp);
        B.dir = dx > 0 ? 1 : -1; B.walking = true;
      } else B.walking = false;
      B.x = clampX(B.x);

      // eyes look where he is going (or at the cursor)
      const look = mouse.active ? Math.max(-1, Math.min(1, (mouse.x - (B.x + B.w / 2)) / 400)) * 3.2 : B.dir * 2;
      B.ex += (look - B.ex) * .12;

      bot.classList.toggle('walking', B.walking);
      bot.style.transform = 'translate3d(' + B.x.toFixed(1) + 'px,' + botTop() + 'px,0)';
      bot.style.setProperty('--flip', String(B.dir));
      bot.style.setProperty('--ex', (B.ex * B.dir).toFixed(2) + 'px');
      place();
    }
    requestAnimationFrame(frame);

    /* ----- reactions ----- */
    langHooks.push(() => {
      bot.setAttribute('aria-label', tx().aria); wake.setAttribute('aria-label', tx().wake);
      if (B.cur && !bubble.hidden) say(B.cur.getter, B.cur.ms);
      else if (B.started && B.on && !B.first) { setMood('happy', 1200); shortSay('hello', 1600); }
    });
    const themeBtn = $('#themeBtn');
    if (themeBtn) themeBtn.addEventListener('click', () => setTimeout(() => {
      if (!B.on || !B.ok || !B.started || !bubble.hidden) return;
      setMood('happy', 1200); shortSay(root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light', 1800);
    }, 120));
    window.addEventListener('resize', apply);

    /* ----- start once the intro is over ----- */
    bot.setAttribute('aria-label', tx().aria); wake.setAttribute('aria-label', tx().wake);
    apply();
    const prev = onSiteReady;
    onSiteReady = () => {
      if (prev) prev();
      apply();
      B.started = true; B.first = false;
      B.x = -100; B.tx = clampX(rnd(W() * .3, W() * .6));
      B.sec = currentSection(); B.lastAct = performance.now(); B.nextAt = performance.now() + 2500;
      B.nudgeAt = performance.now() + rnd(32000, 46000);
      if (B.on && B.ok && B.autoTips) setTimeout(() => { if (B.on && B.ok && bubble.hidden) { B.lastAuto = performance.now(); say(tipGetter(B.sec), 11000); } }, 3200);
    };
  })();

  applyLang(LANG);
})();
