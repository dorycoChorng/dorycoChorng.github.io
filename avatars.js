/* Cute avatars shared by the portfolio (Byte, the buddy) and the articles page.
   Ten characters that all share the same moves (walk, talk, blink, sleep, dizzy). */
(function () {
  'use strict';
  const STYLES = ['robot', 'boy', 'girl', 'astro', 'cat', 'bunny', 'panda', 'bear', 'penguin', 'fox'];
  const DEFAULT_NAME = { robot: 'Byte', boy: 'Leo', girl: 'Mia', astro: 'Cosmo', cat: 'Neko', bunny: 'Momo', panda: 'Bamboo', bear: 'Bruno', penguin: 'Pip', fox: 'Foxy' };
  // characters with a light face get dark eyes; the robot and astronaut glow in the chosen colour
  const HUMAN = ['boy', 'girl', 'cat', 'bunny', 'panda', 'bear', 'penguin', 'fox'];

  const eyesRobot = '<g class="e-open"><rect class="eye" x="26" y="34" width="9" height="13" rx="4"/><rect class="eye" x="45" y="34" width="9" height="13" rx="4"/></g>';
  const eyesHuman = '<g class="e-open"><rect class="eye" x="26.5" y="36" width="8" height="12" rx="4"/><rect class="eye" x="45.5" y="36" width="8" height="12" rx="4"/><circle class="shine" cx="29.2" cy="39.5" r="1.7"/><circle class="shine" cx="48.2" cy="39.5" r="1.7"/></g>';
  const eyesTail = '<g class="e-happy"><path d="M25 43 Q30.5 34 36 43 M44 43 Q49.5 34 55 43"/></g>' +
    '<g class="e-sleep"><path d="M26 42 H35 M45 42 H54"/></g>' +
    '<g class="e-dizzy"><path d="M26 35 L35 46 M35 35 L26 46 M45 35 L54 46 M54 35 L45 46"/></g>' +
    '<g class="e-wow"><circle cx="30.5" cy="41" r="6"/><circle cx="49.5" cy="41" r="6"/></g>';
  const arm = (side, x, tone, hand) => '<g class="b-arm ' + side + '"><rect class="' + tone + '" x="' + x + '" y="60" width="9" height="19" rx="4.5"/>' + (hand ? '<circle class="' + hand + '" cx="' + (x + 4.5) + '" cy="80" r="4.6"/>' : '') + '</g>';
  const feet = cls => '<ellipse class="b-foot l ' + cls + '" cx="31" cy="85" rx="7.5" ry="4"/><ellipse class="b-foot r ' + cls + '" cx="49" cy="85" rx="7.5" ry="4"/>';
  const scarf = '<path class="scarf sl" d="M22 58 Q40 68 58 58 L58 64 Q40 74 22 64Z"/>';
  const catMouth = '<path class="mouth" d="M40 50.8 V53.4 M40 53.4 Q36.5 56.6 33.4 54.4 M40 53.4 Q43.5 56.6 46.6 54.4"/>';
  const blush = (l, r, y, rad) => '<circle class="blush" cx="' + l + '" cy="' + y + '" r="' + rad + '"/><circle class="blush" cx="' + r + '" cy="' + y + '" r="' + rad + '"/>';

  const CHAR = {
    robot: '<path class="b-flame" d="M33 80 Q40 97 47 80 Z"/>' +
      '<rect class="b-arm l" x="12" y="60" width="9" height="19" rx="4.5"/><rect class="b-arm r" x="59" y="60" width="9" height="19" rx="4.5"/>' +
      '<rect class="b-body" x="22" y="56" width="36" height="26" rx="12"/><circle class="b-core" cx="40" cy="69" r="5"/>' +
      '<line class="b-ant" x1="40" y1="20" x2="40" y2="10"/><circle class="b-bulb" cx="40" cy="7.5" r="4.2"/>' +
      '<rect class="b-ear" x="3" y="32" width="6" height="16" rx="3"/><rect class="b-ear" x="71" y="32" width="6" height="16" rx="3"/>' +
      '<rect class="b-head" x="8" y="18" width="64" height="44" rx="19"/><rect class="b-visor" x="15" y="25" width="50" height="30" rx="13"/>',
    boy: feet('shoe') + arm('l', 12, 'sl', 'skin') + arm('r', 59, 'sl', 'skin') +
      '<rect class="b-body sl" x="22" y="56" width="36" height="28" rx="12"/><path class="lace" d="M35 58 V68 M45 58 V68"/><path class="lace" d="M30 76 Q40 81 50 76"/>' +
      '<circle class="skin" cx="9" cy="44" r="5"/><circle class="skin" cx="71" cy="44" r="5"/>' +
      '<rect class="skin hd" x="10" y="16" width="60" height="46" rx="22"/>' +
      '<path class="hair" d="M8 42 Q4 10 40 10 Q76 10 72 42 Q68 27 56 28 Q47 20 36 27 Q21 24 8 42Z"/><path class="hair" d="M31 13 Q37 2 46 12Z"/>' +
      blush(24, 56, 52, 4) + '<path class="mouth" d="M35 53 Q40 59 45 53"/>',
    girl: '<path class="hair" d="M6 42 Q2 8 40 8 Q78 8 74 42 L77 72 Q62 76 60 62 L20 62 Q18 76 3 72Z"/>' +
      feet('shoe') + arm('l', 12, 'sl', 'skin') + arm('r', 59, 'sl', 'skin') +
      '<rect class="b-body sl" x="22" y="56" width="36" height="28" rx="12"/><path class="lace" d="M35 58 V66 M45 58 V66"/><path class="lace" d="M30 76 Q40 81 50 76"/>' +
      '<rect class="skin hd" x="10" y="16" width="60" height="46" rx="22"/>' +
      '<path class="hair" d="M9 40 Q10 14 40 13 Q70 14 71 40 Q64 27 52 28 Q46 22 40 27 Q34 22 28 28 Q16 27 9 40Z"/>' +
      '<path class="bow sl" d="M56 15 L69 8 L69 24 Z M56 15 L43 8 L43 24 Z"/><circle class="bowc" cx="56" cy="15" r="3.2"/>' +
      blush(23, 57, 52, 4.4) + '<path class="mouth" d="M36 53 Q40 58 44 53"/>',
    astro: '<rect class="pack" x="17" y="56" width="46" height="28" rx="9"/>' + feet('boot') + arm('l', 12, 'suit', 'glove') + arm('r', 59, 'suit', 'glove') +
      '<rect class="b-body suit" x="22" y="56" width="36" height="28" rx="12"/><rect class="panel" x="31" y="64" width="18" height="10" rx="3"/><circle class="dot1" cx="36" cy="69" r="2"/><circle class="dot2" cx="44" cy="69" r="2"/>' +
      '<line class="b-ant" x1="40" y1="16" x2="40" y2="8"/><circle class="b-bulb" cx="40" cy="6" r="3.6"/>' +
      '<rect class="comm" x="3" y="34" width="7" height="14" rx="3"/><rect class="comm" x="70" y="34" width="7" height="14" rx="3"/>' +
      '<rect class="helm" x="8" y="16" width="64" height="48" rx="24"/><rect class="b-visor" x="15" y="24" width="50" height="34" rx="15"/><path class="glint" d="M20 32 Q23 28 30 29"/>',
    cat: '<path class="tail" d="M55 78 Q78 78 76 56 Q75 48 68 52"/>' + feet('paw') + arm('l', 12, 'fur', 'fur') + arm('r', 59, 'fur', 'fur') +
      '<rect class="b-body fur" x="22" y="56" width="36" height="28" rx="12"/><ellipse class="belly" cx="40" cy="73" rx="9" ry="8"/>' + scarf +
      '<path class="fur" d="M11 32 L12 5 L33 19Z"/><path class="fur" d="M69 32 L68 5 L47 19Z"/><path class="inear" d="M16 26 L16.6 12 L27 20Z"/><path class="inear" d="M64 26 L63.4 12 L53 20Z"/>' +
      '<rect class="fur hd" x="9" y="16" width="62" height="47" rx="23"/><path class="stripe" d="M40 17 V25 M33 18 V24 M47 18 V24"/>' +
      '<ellipse class="muzzle" cx="40" cy="53" rx="13" ry="8.5"/><path class="nose" d="M37.4 47.2 H42.6 L40 50.8Z"/>' + catMouth +
      '<path class="whisk" d="M20 50 H8 M20 54 L9 58 M60 50 H72 M60 54 L71 58"/>',
    bunny: '<ellipse class="fur2" cx="27" cy="14" rx="8" ry="13" transform="rotate(-8 27 14)"/><ellipse class="inear" cx="27" cy="15" rx="4" ry="9" transform="rotate(-8 27 14)"/>' +
      '<ellipse class="fur2" cx="53" cy="14" rx="8" ry="13" transform="rotate(8 53 14)"/><ellipse class="inear" cx="53" cy="15" rx="4" ry="9" transform="rotate(8 53 14)"/>' +
      feet('fur2') + arm('l', 12, 'fur2', 'fur2') + arm('r', 59, 'fur2', 'fur2') +
      '<rect class="b-body sl" x="22" y="56" width="36" height="28" rx="12"/><circle class="fur2" cx="40" cy="74" r="4.2"/>' +
      '<rect class="fur2 hd" x="9" y="18" width="62" height="45" rx="22"/>' + blush(22, 58, 52, 4.6) +
      '<ellipse class="nose" cx="40" cy="49.5" rx="2.7" ry="2"/><path class="mouth" d="M40 51.5 V53.6 M40 53.6 Q37 56.4 34.6 54.4 M40 53.6 Q43 56.4 45.4 54.4"/><rect class="tooth" x="38" y="54.6" width="4" height="4.4" rx="1"/>',
    panda: '<circle class="pdark" cx="17" cy="22" r="8.5"/><circle class="pdark" cx="63" cy="22" r="8.5"/>' +
      feet('pdark') + arm('l', 12, 'pdark', 'pdark') + arm('r', 59, 'pdark', 'pdark') +
      '<rect class="b-body fur2" x="22" y="56" width="36" height="28" rx="12"/>' + scarf +
      '<rect class="fur2 hd" x="9" y="16" width="62" height="47" rx="23"/>' +
      '<ellipse class="pdark" cx="30.5" cy="42" rx="9.5" ry="11.5" transform="rotate(18 30.5 42)"/><ellipse class="pdark" cx="49.5" cy="42" rx="9.5" ry="11.5" transform="rotate(-18 49.5 42)"/>' +
      '<ellipse class="pnose" cx="40" cy="52" rx="3.6" ry="2.5"/><path class="mouth" d="M40 54 V56 M40 56 Q37 59 35 57 M40 56 Q43 59 45 57"/>' + blush(21, 59, 55, 3.6),
    bear: '<circle class="bear" cx="16" cy="22" r="9"/><circle class="tan" cx="16" cy="22" r="4.6"/><circle class="bear" cx="64" cy="22" r="9"/><circle class="tan" cx="64" cy="22" r="4.6"/>' +
      feet('bear') + arm('l', 12, 'bear', 'bear') + arm('r', 59, 'bear', 'bear') +
      '<rect class="b-body sl" x="22" y="56" width="36" height="28" rx="12"/><path class="lace" d="M35 58 V66 M45 58 V66"/>' +
      '<rect class="bear hd" x="9" y="16" width="62" height="47" rx="23"/>' +
      '<ellipse class="tan" cx="40" cy="53" rx="12.5" ry="9"/><ellipse class="pnose" cx="40" cy="49.6" rx="3.5" ry="2.6"/>' + catMouth + blush(22, 58, 54, 3.8),
    penguin: feet('orange') + arm('l', 11, 'pdark', null) + arm('r', 60, 'pdark', null) +
      '<rect class="b-body pdark" x="19" y="52" width="42" height="33" rx="18"/><ellipse class="white" cx="40" cy="72" rx="13" ry="11"/>' +
      '<rect class="pdark hd" x="10" y="16" width="60" height="46" rx="23"/>' +
      '<path class="white" d="M40 61 Q14 58 16 41 Q18 31 30 33 Q36 35 40 39 Q44 35 50 33 Q62 31 64 41 Q66 58 40 61Z"/>' +
      '<path class="sl beanie" d="M11 28 Q12 6 40 6 Q68 6 69 28 Q40 20 11 28Z"/><circle class="white" cx="40" cy="6" r="4.6"/>' +
      '<path class="beak" d="M35 50 Q40 46.5 45 50 Q40 55.5 35 50Z"/>' + blush(23, 57, 53, 3.8),
    fox: '<path class="foxt" d="M56 80 Q82 84 78 58 Q76 47 66 53"/><circle class="white" cx="66.5" cy="52.5" r="4.4"/>' +
      feet('pdark') + arm('l', 12, 'foxo', 'pdark') + arm('r', 59, 'foxo', 'pdark') +
      '<rect class="b-body foxo" x="22" y="56" width="36" height="28" rx="12"/><ellipse class="white" cx="40" cy="73" rx="9" ry="8"/>' + scarf +
      '<path class="foxo" d="M10 36 L12 4 L34 19Z"/><path class="foxo" d="M70 36 L68 4 L46 19Z"/><path class="inear" d="M14 26 L14.6 12 L26 20Z"/><path class="inear" d="M66 26 L65.4 12 L54 20Z"/>' +
      '<rect class="foxo hd" x="9" y="16" width="62" height="47" rx="23"/>' +
      '<path class="white" d="M10 50 Q24 48 40 62 Q56 48 70 50 Q66 64 40 64 Q14 64 10 50Z"/>' +
      '<ellipse class="pnose" cx="40" cy="54" rx="3.1" ry="2.3"/><path class="mouth" d="M40 56 Q37 59 35 57.5 M40 56 Q43 59 45 57.5"/>' + blush(21, 59, 50, 3.4)
  };

  function art(style) {
    if (!CHAR[style]) style = 'robot';
    const human = HUMAN.indexOf(style) >= 0;
    const eyes = '<g class="eyes">' + (human ? eyesHuman : eyesRobot) + eyesTail + '</g>';
    return '<svg class="bot-art st-' + style + (human ? ' human' : '') + '" viewBox="0 0 80 100" aria-hidden="true"><ellipse class="b-shadow" cx="40" cy="96" rx="19" ry="3.5"/><g class="flipper">' + CHAR[style] + eyes + '</g></svg>';
  }

  window.BuddyArt = { STYLES: STYLES, DEFAULT_NAME: DEFAULT_NAME, art: art };
})();
