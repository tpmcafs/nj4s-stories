
(()=>{
"use strict";
let GROUPS=[],S=[],PAGES={},L={};
const IMG={},TH={};
/* ---------------- icons (48x48 line icons) ---------------- */
const P={
 book:'<path d="M10 8h22a6 6 0 0 1 6 6v26H16a6 6 0 0 1-6-6z"/><path d="M10 34a6 6 0 0 1 6-6h22"/><path d="M18 16h12M18 21h8"/>',
 today:'<rect x="7" y="10" width="34" height="30" rx="2"/><path d="M7 18h34M16 6v8M32 6v8"/><circle cx="24" cy="29" r="5"/>',
 review:'<path d="M38 18A15 15 0 0 0 11 14"/><path d="M10 6v9h9"/><path d="M10 30a15 15 0 0 0 27 4"/><path d="M38 42v-9h-9"/>',
 smile:'<circle cx="24" cy="24" r="17"/><path d="M17 28q7 7 14 0"/><path d="M18 19v1M30 19v1"/>',
 cycle:'<path d="M24 7a17 17 0 1 1-16 11"/><path d="M5 10l3 8 8-3"/><circle cx="24" cy="24" r="4"/>',
 layers:'<path d="M24 7l18 9-18 9-18-9z"/><path d="M6 24l18 9 18-9"/><path d="M6 32l18 9 18-9"/>',
 sliders:'<path d="M8 13h32M8 24h32M8 35h32"/><circle cx="16" cy="13" r="4" fill="currentColor"/><circle cx="31" cy="24" r="4" fill="currentColor"/><circle cx="21" cy="35" r="4" fill="currentColor"/>',
 people:'<circle cx="17" cy="16" r="6"/><circle cx="33" cy="18" r="5"/><path d="M5 40c0-8 5-12 12-12s12 4 12 12"/><path d="M29 30c1.5-1.4 2.7-2 4.5-2 5 0 9.5 3.5 9.5 10"/>',
 shield:'<path d="M24 6l15 6v10c0 10-7 17-15 20-8-3-15-10-15-20V12z"/><path d="M17 24l5 5 9-10"/>',
 question:'<circle cx="24" cy="24" r="17"/><path d="M19 19a5 5 0 1 1 7.5 4.3C24.8 24.4 24 25.5 24 28"/><path d="M24 34v.5"/>',
 brokencycle:'<path d="M24 7a17 17 0 1 1-16 11"/><path d="M5 10l3 8 8-3"/><path d="M19 19l10 10M29 19l-10 10"/>',
 forward:'<path d="M7 24h32"/><path d="M28 13l11 11-11 11"/>',
 target:'<circle cx="24" cy="24" r="17"/><circle cx="24" cy="24" r="10"/><circle cx="24" cy="24" r="3" fill="currentColor"/>',
 sign:'<path d="M24 5v38"/><path d="M12 9h20l5 5-5 5H12z"/><path d="M36 23H16l-5 5 5 5h20z"/>',
 flag:'<path d="M12 43V7"/><path d="M12 8h23l-5 7 5 7H12"/>',
 sprout:'<path d="M24 42V22"/><path d="M24 27c0-8-6-12-14-12 0 8 6 12 14 12z"/><path d="M24 22c0-7 5-11 13-11 0 7-5 11-13 11z"/><path d="M14 42h20"/>',
 mountain:'<path d="M4 41l14-20 8 10 6-8 12 18z"/><path d="M30 23V8l8 3-8 3"/>',
 star:'<path d="M24 5l5.6 12 13 1.4-9.7 8.8 2.8 12.8L24 33.4 12.3 40l2.8-12.8L5.4 18.4l13-1.4z"/>',
 stairs:'<path d="M5 41h10v-8h9v-8h9v-8h10"/><path d="M36 6l6 3-6 3"/><path d="M36 6v10"/>',
 house:'<path d="M7 23L24 8l17 15"/><path d="M12 19v21h24V19"/><path d="M20 40V29h8v11"/>',
 heart:'<path d="M24 40S8 30 8 18a8 8 0 0 1 16-3 8 8 0 0 1 16 3c0 12-16 22-16 22z"/>',
 timer:'<circle cx="24" cy="27" r="15"/><path d="M24 27v-8"/><path d="M19 6h10M24 6v6M36 13l3-3"/>',
 chat:'<path d="M7 9h34v22H22l-9 8v-8H7z"/><path d="M15 17h18M15 23h11"/>',
 exit:'<path d="M28 8H11v32h17"/><path d="M21 24h21"/><path d="M36 18l6 6-6 6"/>',
 sunrise:'<path d="M6 34h36"/><path d="M14 34a10 10 0 0 1 20 0"/><path d="M24 13v5M11 20l3.5 3.5M37 20l-3.5 3.5M14 40h20"/>',
 trophy:'<path d="M16 8h16v10a8 8 0 0 1-16 0z"/><path d="M16 12H9v3a6 6 0 0 0 7 6M32 12h7v3a6 6 0 0 1-7 6"/><path d="M24 26v7M18 33h12v7H18zM15 40h18"/>',
 fear:'<circle cx="24" cy="24" r="17"/><circle cx="18" cy="20" r="2.6"/><circle cx="30" cy="20" r="2.6"/><path d="M15 14l5-3M33 14l-5-3"/><path d="M17 33q3.5-3 7 0t7 0"/>',
 anger:'<circle cx="24" cy="24" r="17"/><path d="M14 16l7 4M34 16l-7 4"/><path d="M18 22v1M30 22v1"/><path d="M17 33q7-6 14 0"/>',
 jealous:'<circle cx="24" cy="24" r="17"/><path d="M14 19h8M26 19h8"/><path d="M19 21.5h2.5M31 21.5h2.5" stroke-width="4"/><path d="M18 32h12"/><path d="M32 30l2-3"/>',
 lessons:'<rect x="6" y="8" width="10" height="10"/><rect x="19" y="8" width="10" height="10"/><rect x="32" y="8" width="10" height="10"/><rect x="6" y="23" width="10" height="10"/><rect x="19" y="23" width="10" height="10"/><rect x="32" y="23" width="10" height="10"/><path d="M6 40h36"/>',
 /* ui */
 back:'<path d="M40 24H9"/><path d="M20 12L8 24l12 12"/>',
 home:'<path d="M7 23L24 8l17 15"/><path d="M12 19v21h24V19"/>',
 grid:'<rect x="7" y="7" width="15" height="15"/><rect x="26" y="7" width="15" height="15"/><rect x="7" y="26" width="15" height="15"/><rect x="26" y="26" width="15" height="15"/>',
 full:'<path d="M7 17V7h10M31 7h10v10M41 31v10H31M17 41H7V31"/>',
 lock:'<rect x="10" y="21" width="28" height="20" rx="2"/><path d="M16 21v-6a8 8 0 0 1 16 0v6"/>',
 pause:'<path d="M17 10v28M31 10v28"/>',
 play:'<path d="M15 8l24 16-24 16z"/>',
 prev:'<path d="M30 10L16 24l14 14"/>',
 next:'<path d="M18 10l14 14-14 14"/>',
 reset:'<path d="M10 24a14 14 0 1 0 4-10"/><path d="M8 7v8h8"/>',
 check:'<path d="M9 25l10 10 20-22"/>',
 tap:'<path d="M20 22V10a3 3 0 0 1 6 0v12"/><path d="M26 20a3 3 0 0 1 6 0v3a3 3 0 0 1 6 0v7c0 7-5 12-12 12h-1c-5 0-8-2-11-7l-5-8a3 3 0 0 1 5-3l6 6"/>'
};
const ico=(n,cls='',sw=2.4)=>`<svg class="${cls}" viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${P[n]}</svg>`;

/* ---------------- content: 26 slides ---------------- */

const SZ={s:[1,1],m:[2,2],w:[4,2],l:[4,4]};
const byN=n=>S[n-1];

/* ---------------- slide page renderers ---------------- */
const K=(s)=>`<div class="kick rg">${ico(s.i)}<span>${GROUPS.find(g=>g.id===s.g).name}</span></div>`;
const ct=(html,{tag='',icon='',cls='',go='',dark=false}={})=>`<${go?'button':'div'} class="ct ${cls} ${go?'link':''} ${dark?'dark':''}" ${go?`data-go="${go}"`:''}>${tag?`<span class="tag">${tag}</span>`:''}${icon?ico(icon,'ico'):''}<div class="big">${html}</div></${go?'button':'div'}>`;
const tick=(html,i)=>`<button class="ct tick" data-tick aria-pressed="false"><span class="tag">${i}</span><span class="box">${ico('check','',4)}</span><div class="big">${html}</div></button>`;
const cap=t=>`<p class="cap rg">${t}</p>`;
const fc=(back,{num='',icon='',front='',go='',tag=''}={})=>`<button class="fc ${go?'link':''}" ${go?`data-fgo="${go}"`:''} aria-label="Card ${num||''}: tap to flip"><span class="fc-in"><span class="fc-face fc-front">${num?`<span class="num">${num}</span>`:''}${front?`<span class="qtext">${front}</span>`:`<span class="fico">${ico(icon||'star','',2)}</span>`}<span class="tapme">${ico('tap','',2.4)}<span>Tap to flip</span></span></span><span class="fc-face fc-back">${tag?`<span class="tag">${tag}</span>`:''}${icon?ico(icon,'ico'):''}<span class="big">${back}</span></span></span></button>`;
const fhint=`<button class="reveal-hint rg" data-reveal>${ico('tap')}<span>Tap a card to flip it</span></button>`;
const hint=`<button class="reveal-hint rg" data-reveal>${ico('tap')}<span>Tap to reveal</span></button>`;

function tafSVG(o={}){
  const NL=o.nodes||['Thought','Action','Feeling','Result'];const CL=o.center||['Positive','Circle'];
  const nodes=[[NL[0],250,70],[NL[1],430,250],[NL[2],250,430],[NL[3],70,250]];
  const arcs=[[-90,0],[0,90],[90,180],[180,270]].map(([a,b])=>{const r=180,a0=(a+24)*Math.PI/180,a1=(b-24)*Math.PI/180;return `M${250+r*Math.cos(a0)} ${250+r*Math.sin(a0)} A${r} ${r} 0 0 1 ${250+r*Math.cos(a1)} ${250+r*Math.sin(a1)}`});
  return `<svg class="taf" viewBox="0 0 500 500" role="img" aria-label="Thoughts, actions, feelings circle: ${NL.join(', ')}, around the ${CL.join(' ')}">
   <defs><marker id="ah" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="4" markerHeight="4" orient="auto"><path d="M0 0L10 5 0 10z" fill="#fff"/></marker>
   <marker id="ahDim" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 0L10 5 0 10z" fill="rgba(255,255,255,.55)"/></marker>
   <filter id="glow" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="5" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs>
   <circle cx="250" cy="250" r="180" fill="none" stroke="rgba(255,255,255,.1)" stroke-width="30"/>
   ${arcs.map((d,i)=>`<path class="arc-base" d="${d}" fill="none" stroke-width="6" marker-end="url(#ahDim)"/><path class="arc-flow" d="${d}" fill="none" stroke-width="6"/><path class="arc-hot" data-arc="${i}" d="${d}" fill="none" stroke-width="11" stroke-linecap="round" marker-end="url(#ah)" filter="url(#glow)"/>`).join('')}
   <circle id="tafComet" r="13" fill="#fff" filter="url(#glow)" opacity="0"/>
   <g class="tcenter" role="button" tabindex="0" aria-label="${CL.join(' ')}"><circle class="halo" cx="250" cy="250" r="92" fill="none" stroke="#fff" stroke-width="4"/><circle cx="250" cy="250" r="92" fill="#fff"/>
   <text x="250" y="242" text-anchor="middle" font-size="30" font-weight="600" fill="var(--c)">${CL[0]}</text>
   <text x="250" y="278" text-anchor="middle" font-size="30" font-weight="600" fill="var(--c)">${CL[1]||''}</text></g>
   ${nodes.map(([w,x,y],k)=>`<g class="node" data-node="${k}" tabindex="0" role="button" aria-label="${w}"><rect x="${x-(w.length>9?96:78)}" y="${y-30}" width="${w.length>9?192:156}" height="60" stroke="#fff" stroke-width="2"/><text x="${x}" y="${y+10}" text-anchor="middle" font-size="${w.length>9?24:28}" font-weight="600" fill="#fff">${w}</text></g>`).join('')}
  </svg>`;
}
const RING_ICONS=['<circle cx="0" cy="-14" r="9"/><path d="M-15 16c0-11 6-17 15-17s15 6 15 17"/><path d="M14 -20l8-8M18 -14h9"/>','<circle cx="0" cy="-10" r="9"/><path d="M-13 18c0-10 5-15 13-15s13 5 13 15"/><path d="M-4 -8q4-3 8 0"/>','<path d="M-20 0q20-20 40 0q-20 20-40 0z"/><circle cx="0" cy="0" r="6"/>','<circle cx="0" cy="0" r="17"/><path d="M-8 9q8-7 16 0"/><path d="M-6 -5v1M6 -5v1"/>'];
function ringSVG(o={}){
  const lab=o.labels||['Bully','Victim','Bystander','Feeling Bad About Self'];
  const g1=['#ffffff','#ffe1d6','#e6e1fb','#d8f5f0'],g2=['#f2d4dc','#ffb294','#b8aee8','#93dccf'];
  const icons=o.icons||RING_ICONS;
  const R=232,r=104,cx=250,cy=250,gap=3;
  const pt=(a,rad)=>[cx+rad*Math.cos(a),cy+rad*Math.sin(a)];
  let defs='',out='';
  for(let k=0;k<4;k++){
    const a0=(-180+k*90+gap)*Math.PI/180,a1=(-90+k*90-gap)*Math.PI/180,am=(a0+a1)/2;
    const [x0,y0]=pt(a0,R),[x1,y1]=pt(a1,R),[x2,y2]=pt(a1,r),[x3,y3]=pt(a0,r),[tx,ty]=pt(a1+0.17,(R+r)/2);
    const twoL=lab[k].split(' ').length>2;const [ix,iy]=pt(am,twoL?212:(R+r)/2+44),[lx,ly]=pt(am,twoL?150:(R+r)/2-12);
    const words=lab[k].split(' ');const lines=words.length>2?[words.slice(0,2).join(' '),words.slice(2).join(' ')]:[lab[k]];
    defs+=`<linearGradient id="sg${k}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${g1[k]}"/><stop offset="1" stop-color="${g2[k]}"/></linearGradient>`;
    out+=`<g class="seg" data-seg="${k}" tabindex="0" role="button" aria-label="${lab[k]}" style="--dx:${(Math.cos(am)*16).toFixed(1)}px;--dy:${(Math.sin(am)*16).toFixed(1)}px"><path d="M${x0} ${y0} A${R} ${R} 0 0 1 ${x1} ${y1} L${tx} ${ty} L${x2} ${y2} A${r} ${r} 0 0 0 ${x3} ${y3} Z" fill="url(#sg${k})" filter="url(#segsh)"/>
    <g class="sic" transform="translate(${ix} ${iy}) scale(${twoL?.85:1})" fill="none" stroke="#5a1a2b" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round">${icons[k]}</g>
    ${lines.map((ln,j)=>`<text x="${lx}" y="${ly+8+(j-(lines.length-1)/2)*26}" text-anchor="middle" font-size="${lines.length>1?19:27}" font-weight="700" fill="#4a1022">${ln}</text>`).join('')}</g>`;
  }
  return `<svg class="ring2" viewBox="-30 -30 560 560" role="img" aria-label="${o.aria||'The painful bullying circle'}: ${lab.join(', ')}" data-labels='${JSON.stringify(lab).replace(/'/g,'&#39;')}' data-icons='${JSON.stringify(icons).replace(/'/g,'&#39;')}' ${o.defs?`data-defs='${JSON.stringify(o.defs).replace(/'/g,'&#39;')}'`:''}>
  <defs>${defs}<filter id="segsh" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="0" dy="6" stdDeviation="7" flood-color="#000" flood-opacity=".35"/></filter>
  <filter id="glow2" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="5" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
  <radialGradient id="cg"><stop offset="0" stop-color="rgba(0,0,0,.15)"/><stop offset="1" stop-color="rgba(0,0,0,.45)"/></radialGradient></defs>
  <circle cx="250" cy="250" r="262" fill="none" stroke="rgba(255,255,255,.18)" stroke-width="2" stroke-dasharray="4 10"><animateTransform attributeName="transform" type="rotate" from="0 250 250" to="360 250 250" dur="40s" repeatCount="indefinite"/></circle>
  ${out}
  <circle r="10" fill="#fff" filter="url(#glow2)"><animateMotion dur="6.4s" repeatCount="indefinite" path="M-12 250 A262 262 0 1 1 -11.9 250.1" rotate="auto"/></circle>
  <circle cx="250" cy="250" r="96" fill="url(#cg)"/>
  <g class="clab" id="ringCenter"><g transform="translate(250 222)" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" id="ringCIco"></g><text id="ringCTxt" x="250" y="276" text-anchor="middle" font-size="22" font-weight="700" fill="#fff"></text><text id="ringCTxt2" x="250" y="300" text-anchor="middle" font-size="22" font-weight="700" fill="#fff"></text></g>
  </svg>`;
}

function smileSVG(){
  return `<svg class="smile" viewBox="0 0 200 200" role="img" aria-label="A positive circle turning into a smile" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round">
   <circle class="glowring" cx="100" cy="100" r="80" stroke-width="3"/>
   <g class="cyc" stroke-width="8"><path d="M100 20 A80 80 0 0 1 172 135"/><path d="M164 122 L172 137 L157 141" stroke-width="7"/><path d="M100 180 A80 80 0 0 1 28 65"/><path d="M36 78 L28 63 L43 59" stroke-width="7"/></g>
   <circle class="sface" pathLength="1" cx="100" cy="100" r="80" stroke-width="7" transform="rotate(-90 100 100)"/>
   <circle class="eye" cx="72" cy="80" r="8" fill="#fff" stroke="none"/><circle class="eye" cx="128" cy="80" r="8" fill="#fff" stroke="none"/>
   <path class="mouth" pathLength="1" d="M58 112 Q100 156 142 112" stroke-width="8"/>
   <circle class="cheek" cx="56" cy="118" r="10" fill="rgba(255,255,255,.28)" stroke="none"/><circle class="cheek" cx="144" cy="118" r="10" fill="rgba(255,255,255,.28)" stroke="none"/>
  </svg>`;
}
function targetSVG(){
  const rings=[['#ffffff',150],['#1b1a19',124],['#0078D4',98],['#E81123',72],['#FFB900',46],['#FFB900',20]];
  return `<svg class="target" viewBox="0 0 400 400" role="button" tabindex="0" aria-label="Target: tap to aim for the bullseye"><g class="tboard">${rings.map(([c,r],k)=>`<circle cx="200" cy="200" r="${r}" fill="${c}" stroke="${k===5?'#F7630C':'rgba(0,0,0,.25)'}" stroke-width="${k===5?3:2}"/>`).join('')}</g><g class="arrows"></g></svg>`;
}
function treeSVG(){
  const W=(t)=>`--w:${t}s`;
  const branch=(d,len,dur,wait,w)=>`<path class="tr" pathLength="1" d="${d}" style="--d:${dur}s;${W(wait)}" stroke-width="${w}"/>`;
  const leaves=[[300,120,46],[236,160,40],[364,160,40],[190,230,36],[410,230,36],[262,206,34],[338,206,34],[300,180,38],[220,286,30],[380,286,30],[160,300,28],[440,300,28],[300,250,32],[250,130,30],[350,130,30]];
  const greens=['#7FBA00','#9BD13A','#5E9E0C','#B5E06A','#6FB02A'];
  const fruits=[[250,190],[350,240],[200,260],[400,210],[300,150],[180,300],[420,290]];
  return `<svg class="tree" viewBox="0 0 600 600" role="img" aria-label="A tree growing" stroke="#5b3a1e" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <ellipse cx="300" cy="560" rx="230" ry="22" fill="rgba(0,0,0,.18)" stroke="none"/>
   <path class="tr" pathLength="1" d="M110 560 H490" stroke="rgba(255,255,255,.6)" stroke-width="4" style="--d:1.2s;${W(.2)}"/>
   <g class="sway">
   ${branch('M300 560 C298 500 304 440 300 360 C298 320 300 290 300 250',320,4,1,26)}
   ${branch('M300 380 C270 350 240 320 200 290 C185 280 170 270 158 300',190,2.4,4.2,14)}
   ${branch('M300 360 C330 330 360 310 400 285 C420 272 436 282 442 300',190,2.4,4.6,14)}
   ${branch('M300 300 C280 270 258 240 236 170',150,2,5.4,11)}
   ${branch('M300 300 C322 268 344 240 364 170',150,2,5.8,11)}
   ${branch('M300 260 C300 220 300 170 300 120',140,2,6.4,10)}
   ${branch('M240 315 C225 290 205 265 190 232',95,1.6,6.8,8)}
   ${branch('M360 312 C376 288 396 262 410 232',95,1.6,7,8)}
   ${branch('M262 250 C255 235 252 222 250 130',125,1.8,7.4,6)}
   ${branch('M338 250 C345 235 348 222 350 130',125,1.8,7.6,6)}
   ${leaves.map(([x,y,r],k)=>`<circle class="lf" cx="${x}" cy="${y}" r="${r}" fill="${greens[k%5]}" stroke="none" opacity=".95" style="${W(8.5+k*.9)}"/>`).join('')}
   ${fruits.map(([x,y],k)=>`<circle class="fruit" cx="${x}" cy="${y}" r="11" fill="${['#FFB900','#E81123','#F7630C'][k%3]}" stroke="#fff" stroke-width="2.5" style="${W(23+k*1.2)}"/>`).join('')}
   </g>
  </svg>`;
}


/* ---------------- lesson data ---------------- */
L=window.LESSON_DEF({ico,K,ct,tick,cap,fc,fhint,hint,tafSVG,ringSVG,smileSVG,targetSVG,treeSVG,RING_ICONS,IMG,TH,P});
GROUPS=L.groups;S=L.slides;PAGES=L.pages;(L.photos||[]).forEach(n=>{IMG[n]=`img/p${n}.webp`;TH[n]=`img/t${n}.webp`});
const LKEY='pa-visited-L'+L.num;
/* ---------------- helpers ---------------- */
const $=s=>document.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const RM=matchMedia('(prefers-reduced-motion: reduce)');
const EMBED=/[?&]embed\b/.test(location.search)&&window.parent!==window;
let view='lock', cur=0, livePaused=false;

/* toolbar icons */
$('#btnOverview').innerHTML=ico('grid');$('#btnFull').innerHTML=ico('full');$('#btnLock').innerHTML=ico('lock');
$('#btnBack').innerHTML=ico('back');$('#btnHome').innerHTML=ico('home');$('#btnAppOverview').innerHTML=ico('grid');
$('#btnPrev').innerHTML=ico('prev',' ',3);$('#btnNext').innerHTML=ico('next',' ',3);
const setLiveBtn=()=>{$('#btnLive').innerHTML=ico(livePaused?'play':'pause');$('#btnLive').setAttribute('aria-pressed',livePaused);$('#btnLive').title=livePaused?'Resume live tiles':'Pause live tiles'};setLiveBtn();

/* clocks: read from this device's own clock and time zone, refreshed every second */
const fmtT=d=>{const p=new Intl.DateTimeFormat(undefined,{hour:'numeric',minute:'2-digit'}).formatToParts(d);const main=p.filter(x=>x.type!=='dayPeriod').map(x=>x.value).join('').trim();const dp=(p.find(x=>x.type==='dayPeriod')||{}).value;return dp?`${main}<span class="ampm">${dp}</span>`:main};
let lastMin=-1;
function tick_clock(){const d=new Date();const m=d.getHours()*60+d.getMinutes();if(m===lastMin&&lastMin!==-1)return;lastMin=m;
  const t=fmtT(d);$('#lockClock').innerHTML=t;$('#startClock').innerHTML=t;$('#lockDate').textContent=d.toLocaleDateString(undefined,{weekday:'long',month:'long',day:'numeric'});
  $$('[data-ck="time"]').forEach(e=>e.innerHTML=t);
  $$('[data-ck="day"]').forEach(e=>e.textContent=d.toLocaleDateString(undefined,{weekday:'long'}));
  $$('[data-ck="day2"]').forEach(e=>e.textContent=d.toLocaleDateString(undefined,{weekday:'long',month:'short',day:'numeric'}));
  $$('[data-ck="date"]').forEach(e=>e.textContent=d.getDate());
  $$('[data-ck="mon"]').forEach(e=>e.textContent=d.toLocaleDateString(undefined,{month:'long',year:'numeric'}));
}
tick_clock();setInterval(tick_clock,1000);document.addEventListener('visibilitychange',()=>{lastMin=-1;tick_clock()});

/* ---------------- build start screen ---------------- */
function buildStart(){
  const host=$('#groups');host.innerHTML='';
  GROUPS.forEach(g=>{
    const items=S.filter(s=>s.g===g.id);
    const el=document.createElement('section');el.className='group';el.id=g.id;el.setAttribute('aria-label',g.name);
    el.innerHTML=`<div class="group-h">${g.name}<span class="n">${items[0].n}–${items[items.length-1].n}</span></div><div class="grid"></div>`;
    const grid=el.querySelector('.grid');
    items.forEach(s=>{
      const [w,h]=SZ[s.sz];
      const b=document.createElement('button');
      b.className=`tile sz-${s.sz}`;b.dataset.n=s.n;
      b.style.cssText=`--c:${s.c};${s.fg?`--fg:${s.fg};`:''}grid-column:${s.pos[0]+1}/span ${w};grid-row:${s.pos[1]+1}/span ${h}`;
      b.setAttribute('aria-label',`${s.n}. ${s.t}`);
      let faces=[];
      const photo=IMG[s.n]?`<div class="face photo"><div class="ph-img" style="background-image:url(${TH[s.n]});${(L.tpos||{})[s.n]?`background-position:${L.tpos[s.n]}`:''}"></div></div>`:'';
      if(photo)faces.push(photo);
      faces.push(`<div class="face icon">${ico(s.i,'',s.sz==='l'?1.8:2.2)}</div>`);
      if(s.peek) faces.push(`<div class="face down" style="padding:0"><div class="peek" style="background-image:url(${L.lockImg})"></div></div>`);
      (s.live||[]).forEach(f=>faces.push(`<div class="face down">${f}</div>`));
      if(s.timer) faces.push(`<div class="face down tface"><div class="f-num" data-tt>2:00</div><div class="f-base f-sub">every 2 minutes</div></div>`);
      faces=faces.map((f,k)=>k===0?f.replace(' down',''):(f.includes('class="face down')?f:f.replace('class="face','class="face down')));
      b.innerHTML=faces.join('')+`<div class="brand"><span class="nm">${s.t}</span>${s.badge?`<span class="badge">${s.badge}</span>`:''}<span class="badge live-badge" hidden></span></div>`;
      b.dataset.k='0';if(s.timer)b.dataset.timer=1;if(s.n%3===0)b.dataset.ax='y';
      grid.appendChild(b);
    });
    if(g===GROUPS[0]){const ex=L.extraX||4;
      const ck=document.createElement('div');ck.className='tile sz-m clock-t';ck.style.cssText='--c:#2B2B2B;grid-column:'+(ex+1)+'/span 2;grid-row:1/span 2';ck.setAttribute('role','img');ck.setAttribute('aria-label','Today');
      ck.innerHTML=`<div class="face" id="ckA"><div class="cday" data-ck="day"></div><div class="cdate" data-ck="date"></div><div class="cmon" data-ck="mon"></div></div><div class="face down" id="ckB"><div class="f-num" data-ck="time"></div><div class="cmon" data-ck="day2"></div></div><div class="brand"><span class="nm">Today</span></div>`;
      grid.appendChild(ck);
      const pr=document.createElement('button');pr.className='tile sz-m prog-t';pr.id='progTile';pr.style.cssText='--c:#0F6CBD;grid-column:'+(ex+1)+'/span 2;grid-row:3/span 2';pr.setAttribute('aria-label','Continue the lesson');
      pr.innerHTML=`<div class="face" style="align-items:center"><svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="42" fill="none" stroke="rgba(255,255,255,.25)" stroke-width="9"/><circle id="progArc" cx="50" cy="50" r="42" fill="none" stroke="#fff" stroke-width="9" transform="rotate(-90 50 50)" stroke-dasharray="263.9" stroke-dashoffset="263.9" style="transition:stroke-dashoffset .8s var(--ease)"/><text id="progTxt" x="50" y="58" text-anchor="middle" font-size="24" font-weight="300" fill="#fff">0/${S.length}</text></svg></div><div class="brand"><span class="nm" id="progName">Start the lesson</span></div>`;
      pr.addEventListener('click',()=>{const n=S.find(x=>!visited.has(x.n));openSlide(n?n.n:1,pr)});
      grid.appendChild(pr);
    }
    host.appendChild(el);
  });
  layout();
}
function layout(){
  const W=innerWidth,H=innerHeight;
  const narrow=W<760||W<H*0.9;document.body.classList.toggle('narrow',narrow);
  let u,g;
  if(narrow){g=6;u=Math.floor((Math.min(W,900)-40-7*g)/8)}
  else{
    const head=$('.start-head').offsetHeight||110;
    const avail=H-head-44-40;g=Math.max(6,Math.round(avail/110));
    u=Math.floor((avail-5*g)/6);u=Math.max(64,Math.min(u,190));
  }
  document.documentElement.style.setProperty('--u',u+'px');document.documentElement.style.setProperty('--g',g+'px');
}
addEventListener('resize',()=>{layout()});

/* ---------------- live tile engine ---------------- */
const liveTiles=()=>$$('.tile[data-n]').filter(t=>t.querySelectorAll('.face').length>1);
function advance(tile){
  const faces=$$('.face',tile);const k=+tile.dataset.k;const nk=(k+1)%faces.length;
  if(tile.classList.contains('pressed'))return;
  const a=faces[k],b=faces[nk];
  b.style.transition='none';b.classList.remove('up');b.classList.add('down');void b.offsetWidth;b.style.transition='';
  a.classList.add('up');b.classList.remove('down');
  tile.dataset.k=nk;
}
function schedule(tile){
  const s=byN(+tile.dataset.n);
  const base=s.peek?4200:6000;
  clearTimeout(tile._t);
  tile._t=setTimeout(()=>{ if(view==='start'&&!livePaused&&!RM.matches&&!document.hidden) advance(tile); schedule(tile)}, base+Math.random()*4500);
}
function clockFlip(){const a=$('#ckA'),b=$('#ckB');if(!a)return;setInterval(()=>{if(view!=='start'||livePaused||RM.matches)return;const showA=!a.classList.contains('up');const [o,n]=showA?[a,b]:[b,a];n.style.transition='none';n.classList.remove('up');n.classList.add('down');void n.offsetWidth;n.style.transition='';o.classList.add('up');n.classList.remove('down')},7000)}
function randomSpin(){
  const go=()=>{setTimeout(()=>{
    if(view==='start'&&!livePaused&&!RM.matches&&!document.hidden){
      const r=scroller.getBoundingClientRect();
      const vis=$$('.tile[data-n]').filter(t=>{const b=t.getBoundingClientRect();return b.right>r.left&&b.left<r.right&&!t.classList.contains('pressed')});
      const t=vis[Math.floor(Math.random()*vis.length)];
      if(t){const ax=Math.random()<.5?'Y':'X';t.animate([{transform:`perspective(1000px) rotate${ax}(0deg)`},{transform:`perspective(1000px) rotate${ax}(360deg)`}],{duration:1700,easing:'cubic-bezier(.45,.05,.2,1)'})}
    }go()},7000+Math.random()*6000)};go();
}
function startLive(){clockFlip();randomSpin();liveTiles().forEach((t,i)=>{t._t=setTimeout(()=>schedule(t),400+i*350)})}

/* tilt on press (Windows pointer-down) */
function bindTilt(el,strength=7){
  el.addEventListener('pointerdown',e=>{
    const r=el.getBoundingClientRect();const x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;
    el.classList.add('pressed');el.style.transform=`perspective(800px) rotateX(${-y*strength}deg) rotateY(${x*strength}deg) scale(.97)`;
  });
  const up=()=>{el.classList.remove('pressed');el.style.transform=''};
  ['pointerup','pointerleave','pointercancel'].forEach(ev=>el.addEventListener(ev,up));
}

/* ---------------- lock screen ---------------- */
const lock=$('#lock');let ly0=null,ldy=0;
function unlock(kb,gesture){if(view!=='lock')return;if(gesture&&!EMBED&&!document.fullscreenElement){try{const p=document.documentElement.requestFullscreen();p&&p.catch&&p.catch(()=>{})}catch(_){}}lock.style.transform='';lock.classList.add('gone');view='start';$('#start').setAttribute('aria-hidden','false');if(kb)setTimeout(()=>{const t=$('.tile');t&&t.focus({preventScroll:true})},500);else lock.blur()}
function relock(){closeApp(true);lock.classList.remove('gone');view='lock';$('#start').setAttribute('aria-hidden','true');lock.focus()}
lock.addEventListener('pointerdown',e=>{ly0=e.clientY;ldy=0;lock.style.transition='none';lock.setPointerCapture(e.pointerId)});
lock.addEventListener('pointermove',e=>{if(ly0===null)return;ldy=Math.min(0,e.clientY-ly0);lock.style.transform=`translateY(${ldy}px)`});
lock.addEventListener('pointerup',()=>{lock.style.transition='';const moved=ldy;ly0=null;if(moved<-innerHeight*.12||Math.abs(moved)<8)unlock(false,true);else lock.style.transform=''});
$('#btnLock').onclick=relock;

/* ---------------- start interactions ---------------- */
const scroller=$('#scroller');
scroller.addEventListener('wheel',e=>{if(document.body.classList.contains('narrow'))return;if(Math.abs(e.deltaY)>Math.abs(e.deltaX)){scroller.scrollLeft+=e.deltaY;e.preventDefault()}},{passive:false});
$('#groups').addEventListener('click',e=>{const t=e.target.closest('.tile[data-n]');if(t)openSlide(+t.dataset.n,t)});
$('#btnLive').onclick=()=>{livePaused=!livePaused;setLiveBtn()};
$('#btnFull').onclick=toggleFull;
function toggleFull(){if(EMBED){try{parent.postMessage({pa:'full'},'*')}catch(e){}return}try{const p=!document.fullscreenElement?document.documentElement.requestFullscreen():document.exitFullscreen();p&&p.catch&&p.catch(()=>{})}catch(e){}}

/* overview */
function buildOverview(){
  $('#ovGrid').innerHTML=GROUPS.map(g=>{const it=S.filter(s=>s.g===g.id);return `<button class="ov" data-g="${g.id}"><b>${g.name}</b><span class="mosaic">${it.map(s=>`<i style="background:${s.c}"></i>`).join('')}</span><small>Slides ${it[0].n}–${it[it.length-1].n}</small></button>`}).join('');
}
function showOverview(){if(view==='app')closeApp(true);$('#overview').classList.add('on');view='overview';setTimeout(()=>$('.ov').focus(),50)}
function hideOverview(){$('#overview').classList.remove('on');view='start'}
$('#btnOverview').onclick=showOverview;$('#btnAppOverview').onclick=showOverview;
$('#ovGrid').addEventListener('click',e=>{const b=e.target.closest('.ov');if(!b)return;hideOverview();const g=$('#'+b.dataset.g);scrollToEl(g);setTimeout(()=>{const t=g.querySelector('.tile');t&&t.focus({preventScroll:true})},350)});
$('#overview').addEventListener('click',e=>{if(e.target.id==='overview')hideOverview()});
function scrollToEl(el){if(document.body.classList.contains('narrow'))scroller.scrollTo({top:el.offsetTop-10,behavior:'smooth'});else scroller.scrollTo({left:el.offsetLeft-56,behavior:'smooth'})}

/* ---------------- app (slide) view ---------------- */
const app=$('#app'),stage=$('#stage');
const visited=new Set();try{(JSON.parse(localStorage.getItem('pa-visited-L'+L.num)||'[]')).forEach(v=>visited.add(v))}catch(e){}
function paintProgress(){
  const v=visited.size,arc=$('#progArc');if(!arc)return;
  arc.setAttribute('stroke-dashoffset',263.9*(1-v/S.length));$('#progTxt').textContent=v+'/'+S.length;
  const nxt=S.find(x=>!visited.has(x.n));$('#progName').textContent=v===0?'Start the lesson':(nxt?'Continue: '+nxt.n+'. '+nxt.t:'All slides visited');
  $$('.tile[data-n]').forEach(t=>{const nm=t.querySelector('.nm');const on=visited.has(+t.dataset.n);if(on&&!nm.querySelector('.visited-dot'))nm.insertAdjacentHTML('afterbegin','<span class="visited-dot" aria-hidden="true"></span>')});
}
function liveBadge(n,count){const t=$(`.tile[data-n="${n}"] .live-badge`);if(!t)return;t.hidden=!count;t.textContent=count?('✓'+count):''}
const hist=[];
function setHash(n){try{history.replaceState(null,'',n?'#slide-'+n:location.pathname+location.search)}catch(e){}}
$('#progress').innerHTML=S.map(()=>'<i></i>').join('');
function openSlide(n,fromTile){
  if(view==='overview')hideOverview();
  const s=byN(n);
  const go=()=>{view='app';app.classList.add('on');render(n,'in-r');setHash(n)};
  if(fromTile&&!RM.matches){
    fromTile.animate([{transform:'perspective(900px) rotateY(0deg)'},{transform:'perspective(900px) rotateY(90deg)'}],{duration:200,easing:'ease-in'});
    setTimeout(()=>launch(fromTile,s,go),190);
  } else go();
}
function launch(fromTile,s,go){
  {
    const r=fromTile.getBoundingClientRect(),sp=$('#splash');
    sp.style.cssText=`--c:${s.c};color:${s.fg||'#fff'};transform:perspective(900px) rotateY(-90deg);left:${r.left}px;top:${r.top}px;width:${r.width}px;height:${r.height}px;transition:none`;
    sp.innerHTML=ico(s.i,'',1.8);sp.classList.add('go');void sp.offsetWidth;
    sp.style.transition='left .38s var(--ease),top .38s var(--ease),width .38s var(--ease),height .38s var(--ease),transform .3s ease-out';sp.style.transform='none';
    sp.style.left='0px';sp.style.top='0px';sp.style.width=innerWidth+'px';sp.style.height=innerHeight+'px';
    const sv=sp.querySelector('svg');sv.animate([{opacity:0,transform:'scale(.6)'},{opacity:1,transform:'scale(1)'}],{duration:300,delay:120,fill:'forwards',easing:'ease-out'});
    setTimeout(()=>{go();sp.animate([{opacity:1},{opacity:0}],{duration:280,fill:'forwards'}).onfinish=()=>{sp.classList.remove('go');sp.getAnimations().forEach(a=>a.cancel())}},560);
  }
}
function closeApp(silent){
  if(view!=='app'&&!silent)return;
  app.classList.remove('on');stopConfetti();
  if(view==='app')view='start';
  setHash(0);
  const t=$(`.tile[data-n="${cur}"]`);
  if(t&&!silent){scrollToEl(t.closest('.group'));t.focus({preventScroll:true});t.animate([{transform:'scale(.9)',opacity:.4},{transform:'scale(1)',opacity:1}],{duration:380,easing:'cubic-bezier(.1,.9,.2,1)'})}
}
function render(n,dir){
  const s=byN(n);
  $$('.page',stage).forEach(o=>{if(!o.classList.contains('out-l')&&!o.classList.contains('out-r'))o.classList.add(dir==='in-r'?'out-l':'out-r');clearTimeout(o._rm);o._rm=setTimeout(()=>o.remove(),330)});
  app.style.setProperty('--c',s.c);app.style.color=s.fg||'#fff';app.classList.toggle('dk',!!s.fg);
  app.style.setProperty('--c2',s.c);
  const useBanner=IMG[n]&&!(L.noBanner||[]).includes(n);
  const BPOS=L.bpos||{};
  const pg=document.createElement('div');pg.className='page '+dir+(useBanner?' has-banner':'');pg.innerHTML=`<div class="body">${useBanner?`<div class="banner" aria-hidden="true"><i style="background-image:url(${IMG[n]});background-position:${BPOS[n]||'center 38%'}"></i></div>`:''}${PAGES[n](s)}</div>`;
  if((L.sprinkle||[]).includes(n)){pg.classList.add('has-spr');const SP=[[1.6,24,26],[96.6,30,20],[2.6,56,16],[96.2,60,28],[1.9,84,20],[97.4,86,14]];
    const k0=n%6;pg.insertAdjacentHTML('afterbegin',`<div class="sprinkles" aria-hidden="true">${SP.map(([x,y,sz],j)=>`<i style="left:${x}%;top:${y}%;--s:${sz}px;--k:${KC[(j+k0)%KC.length]};--d:${.8+j*.15}s;--t:${6+j%4}s"></i>`).join('')}</div>`)}
  visited.add(n);try{localStorage.setItem(LKEY,JSON.stringify([...visited]))}catch(e){}paintProgress();
  stage.appendChild(pg);
  setTimeout(()=>{$$('.page',stage).forEach(o=>{if(o!==pg&&o!==curPage())o.remove()})},420);
  cur=n;
  $('#crumb').textContent=s.t;$('#count').textContent=`${n} / ${S.length}`;
  $$('#progress i').forEach((i,k)=>{i.className=k+1<n?'done':(k+1===n?'cur':'')});
  $('#btnPrev').disabled=n===1;
  $('#btnNext').setAttribute('aria-label',n===S.length?'Back to start':'Next');
  if(dir==='in-l'){$$('.step',pg).forEach(e=>e.classList.add('shown'));$$('.fc',pg).forEach(e=>e.classList.add('flipped'));$$('[data-reveal]',pg).forEach(h=>h.classList.add('hide'))}
  wirePage(pg,n);
  requestAnimationFrame(()=>fitPage(pg));setTimeout(()=>fitPage(pg),700);
}
function curPage(){return stage.querySelector('.page:not(.out-l):not(.out-r)')}
function pendingSteps(){const pg=curPage();return pg?[...$$('.fc:not(.flipped)',pg),...$$('.step:not(.shown)',pg)]:[]}
function revealNext(){const p=pendingSteps();if(!p.length)return false;const el=p[0];el.classList.add(el.classList.contains('fc')?'flipped':'shown');checkHint();if(el.classList.contains('fc'))cheerIfDone(curPage());return true}
function checkHint(){const pg=curPage();if(!pg)return;if(!pendingSteps().length)$$('[data-reveal]',pg).forEach(h=>h.classList.add('hide'))}
function revealOrNext(){if(view!=='app')return;if(revealNext())return;next()}
function next(){if(view!=='app')return;if(cur<S.length){hist.push(cur);render(cur+1,'in-r');setHash(cur)}else closeApp()}
function prev(){if(view!=='app'||cur<=1)return;render(cur-1,'in-l');setHash(cur)}
function jump(n){hist.push(cur);render(n,'in-r');setHash(n)}
function back(){if(view==='overview'){hideOverview();return}if(view!=='app')return;if(hist.length){render(hist.pop(),'in-l');setHash(cur)}else closeApp()}
$('#btnNext').onclick=next;$('#btnPrev').onclick=prev;$('#btnBack').onclick=back;$('#btnHome').onclick=()=>{hist.length=0;closeApp()};

/* swipe between slides */
let sx=null,sy=0,st=0;
const EDGE=()=>Math.max(48,Math.min(90,innerWidth*.05));
stage.addEventListener('pointerdown',e=>{if(e.pointerType==='mouse')return;if(e.clientX>EDGE()&&e.clientX<innerWidth-EDGE())return;sx=e.clientX;sy=e.clientY;st=Date.now()});
{const mk=(side,fn)=>{const z=document.createElement('button');z.className='edge-zone '+side;z.setAttribute('aria-label',side==='l'?'Previous slide':'Next slide');z.innerHTML=ico(side==='l'?'prev':'next');
  let x0=null,swiped=false;
  z.addEventListener('pointerdown',e=>{x0=e.clientX;swiped=false;try{z.setPointerCapture(e.pointerId)}catch(_){}});
  z.addEventListener('pointerup',e=>{if(x0!==null){const dx=e.clientX-x0;if(Math.abs(dx)>50){swiped=true;dx<0?next():prev()}}x0=null});
  z.addEventListener('click',e=>{e.stopPropagation();if(swiped){swiped=false;return}fn()});
  $('#app').appendChild(z)};mk('l',()=>prev());mk('r',()=>next())}
stage.addEventListener('pointerup',e=>{if(sx===null)return;const dx=e.clientX-sx,dy=e.clientY-sy;sx=null;if(Math.abs(dx)>70&&Math.abs(dx)>Math.abs(dy)*1.4&&Date.now()-st<900){dx<0?next():prev()}});
stage.addEventListener('pointercancel',()=>{sx=null});

/* per-page wiring */
const TICKS={};
function wirePage(pg,n){
  $$('.ct:not(.timeline .ct),.tbtn,.reveal-hint',pg).forEach(el=>bindTilt(el,5));
  $$('[data-go]',pg).forEach(b=>b.addEventListener('click',()=>jump(+b.dataset.go)));
  $$('[data-lesson]',pg).forEach(b=>b.addEventListener('click',()=>goLesson(+b.dataset.lesson)));
  $$('.fc',pg).forEach(c=>c.addEventListener('click',()=>{if(c.classList.contains('flipped')&&c.dataset.fgo){jump(+c.dataset.fgo);return}c.classList.toggle('flipped');checkHint();cheerIfDone(pg);if(!c.classList.contains('flipped')){$$('[data-reveal]',pg).forEach(h=>h.classList.remove('hide'))}}));
  if(TICKS[n])$$('[data-tick]',pg).forEach((b,k)=>{if(TICKS[n].has(k)){b.classList.add('done');b.setAttribute('aria-pressed','true')}});
  const hasExit=!!$('#exitBar',pg);
  $$('[data-tick]',pg).forEach((b,k)=>b.addEventListener('click',e=>{const on=b.classList.toggle('done');b.setAttribute('aria-pressed',on);TICKS[n]=TICKS[n]||new Set();on?TICKS[n].add(k):TICKS[n].delete(k);liveBadge(n,TICKS[n].size);if(on){const r=b.getBoundingClientRect();tileBurst(r.left+r.width/2,r.top+r.height/2,22,160)}if(hasExit)paintExit(pg,on)}));
  if(hasExit)paintExit(pg,false);
  $$('[data-reveal]',pg).forEach(b=>b.addEventListener('click',()=>{revealNext()}));
  $$('.taf',pg).forEach(svg=>wireTAF(pg,svg));
  {const ms=$$('.mini',pg);if(ms.length){let j=0;const it=setInterval(()=>{if(!pg.isConnected){clearInterval(it);return}if(RM.matches)return;const m=ms[j%ms.length];m.classList.add('flip');setTimeout(()=>m.classList.remove('flip'),2600);j+=3},900)}}
  {const h=$('#smileHost',pg);if(h){const replay=()=>{h.innerHTML=smileSVG()};h.parentElement.addEventListener('click',replay);const lp=setInterval(()=>{if(!pg.isConnected){clearInterval(lp);return}if(!RM.matches)replay()},9000)}}
  if($('.target',pg))wireTarget(pg);
  {const h=$('#treeHost',pg);if(h)h.addEventListener('click',()=>{h.innerHTML=treeSVG()})}
  $$('.sprinkles i',pg).forEach(q=>q.addEventListener('click',e=>{e.stopPropagation();q.style.setProperty('--k',KC[Math.floor(Math.random()*KC.length)]);q.animate([{transform:'scale(1) rotate(0)'},{transform:'scale(2.2) rotate(270deg)'},{transform:'scale(1) rotate(540deg)'}],{duration:900,easing:'cubic-bezier(.3,.7,.2,1)'})}));
  $$('.hero-sq',pg).forEach(q=>{q.style.pointerEvents='auto';q.style.cursor='pointer';q.addEventListener('click',e=>{e.stopPropagation();q.style.background=KC[Math.floor(Math.random()*KC.length)];q.animate([{transform:'rotate3d(1,1,0,0deg) scale(1)'},{transform:'rotate3d(1,1,0,360deg) scale(1.6)'},{transform:'rotate3d(1,1,0,720deg) scale(1)'}],{duration:900,easing:'cubic-bezier(.3,.7,.2,1)'})})});
  $$('.hero-photo',pg).forEach(hp=>{hp.style.cursor='pointer';hp.addEventListener('click',()=>hp.animate([{transform:'perspective(1200px) rotateY(0)'},{transform:'perspective(1200px) rotateY(360deg)'}],{duration:1100,easing:'cubic-bezier(.3,.7,.2,1)'}))});
  $$('.ring2',pg).forEach(svg=>wireRing(pg,svg));
  {const im=$('#signImg',pg);if(im)im.addEventListener('click',()=>im.animate([{transform:'rotate(0)'},{transform:'rotate(-6deg)'},{transform:'rotate(5deg)'},{transform:'rotate(0)'}],{duration:600,easing:'ease-out'}))}
  if($('#tGo',pg))wireTimer(pg);
  {const d=$('#doneWrap',pg);if(d){burst(90);d.addEventListener('click',()=>burst(50))}}
  $$('[data-pop]',pg).forEach(el=>el.addEventListener('click',()=>{el.classList.toggle('popped');const r=el.getBoundingClientRect();tileBurst(r.left+r.width/2,r.top+r.height/2,14,120)}));
  if(L.wire&&L.wire[n])L.wire[n](pg,{$,$$,tileBurst,burst,RM,jump});
}
function wireRing(pg,w){const segs=$$('.seg',w);let k=0;const LAB=JSON.parse(w.dataset.labels);const DEF=w.dataset.defs?JSON.parse(w.dataset.defs):null;const ICO=JSON.parse(w.dataset.icons);
    const show=i=>{segs.forEach((x,j)=>x.classList.toggle('on',j===i));w.classList.toggle('ring-dim',i>=0);
      const c=$('#ringCenter',w);if(i<0){c.style.opacity=0;return}c.style.opacity=1;$('#ringCIco',w).innerHTML=ICO[i];const ws=LAB[i].split(' ');$('#ringCTxt',w).textContent=ws.length>2?ws.slice(0,2).join(' '):LAB[i];$('#ringCTxt2',w).textContent=ws.length>2?ws.slice(2).join(' '):'';
      c.animate([{transform:'scale(.6)',opacity:0},{transform:'scale(1)',opacity:1}],{duration:350,easing:'cubic-bezier(.3,1.5,.5,1)'});c.style.transformOrigin='250px 250px';c.style.transformBox='view-box'};
    const auto=setInterval(()=>{if(!pg.isConnected){clearInterval(auto);return}if(RM.matches)return;show(k);k=(k+1)%segs.length},1600);
    const dbox=$('#ringDef',pg);
    const openDef=i=>{if(!dbox||!DEF)return;if(i<0){dbox.classList.remove('open');return}$('.rdef-ico',dbox).innerHTML=ICO[i];$('.rdef-t',dbox).textContent=LAB[i];$('.rdef-d',dbox).textContent=DEF[i];dbox.classList.remove('open');void dbox.offsetWidth;dbox.classList.add('open')};
    segs.forEach((g,i)=>{const f=()=>{clearInterval(auto);const closing=g.classList.contains('on')&&w.classList.contains('ring-dim')&&g.dataset.man;show(closing?-1:i);openDef(closing?-1:i);segs.forEach(x=>delete x.dataset.man);if(!closing)g.dataset.man=1};g.addEventListener('click',f);g.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();f()}})})}
function goLesson(k){try{document.body.animate([{opacity:1},{opacity:0}],{duration:250,fill:'forwards'})}catch(e){}setTimeout(()=>{location.href=`../l${k}/index.html`},230)}


/* ---------- touch burst (everywhere) ---------- */
function tileBurst(x,y,count=9,dist=90){if(RM.matches)return;const h=document.createElement('div');h.className='tburst';h.style.left=x+'px';h.style.top=y+'px';
  let html='<b></b>';for(let k=0;k<count;k++){const a=Math.random()*Math.PI*2,d=dist*(.5+Math.random()*.7);html+=`<i style="--k:${KC[k%KC.length]};--x:${Math.cos(a)*d}px;--y:${Math.sin(a)*d}px;--r:${(Math.random()-.5)*540}deg;width:${8+Math.random()*12}px;height:${8+Math.random()*12}px"></i>`}
  h.innerHTML=html;document.body.appendChild(h);setTimeout(()=>h.remove(),1000)}
document.addEventListener('pointerdown',e=>{if(view==='app'&&e.target.closest('#stage'))tileBurst(e.clientX,e.clientY)});
function cheerIfDone(pg){if(!pg)return;const all=$$('.fc',pg);if(!all.length||all.some(c=>!c.classList.contains('flipped')))return;if(pg.dataset.cheered)return;pg.dataset.cheered=1;
  setTimeout(()=>all.forEach((c,k)=>setTimeout(()=>{c.classList.remove('cheer');void c.offsetWidth;c.classList.add('cheer');const r=c.getBoundingClientRect();tileBurst(r.left+r.width/2,r.top+r.height/2,16,150)},k*120)),700)}
/* ---------- TAF circle ---------- */
function wireTAF(pg,svg){
  const hot=$$('.arc-hot',svg),nodes=$$('.node',svg),comet=$('#tafComet',svg);let i=-1,auto=null,raf=0;
  const lens=hot.map(p=>p.getTotalLength());hot.forEach((p,k)=>{p.style.strokeDasharray=lens[k];p.style.strokeDashoffset=lens[k]});
  const run=(k,dur=700)=>{i=k;nodes.forEach((nd,j)=>nd.classList.toggle('on',j===k));hot.forEach(p=>p.classList.remove('on'));const p=hot[k];p.classList.add('on');
    p.animate([{strokeDashoffset:lens[k]},{strokeDashoffset:0}],{duration:dur,easing:'cubic-bezier(.4,0,.2,1)',fill:'forwards'});
    cancelAnimationFrame(raf);const t0=performance.now();comet.setAttribute('opacity','1');
    const step=t=>{const f=Math.min(1,(t-t0)/dur),e=f<.5?2*f*f:1-Math.pow(-2*f+2,2)/2,pt=p.getPointAtLength(e*lens[k]);comet.setAttribute('cx',pt.x);comet.setAttribute('cy',pt.y);if(f<1)raf=requestAnimationFrame(step);else{comet.setAttribute('opacity','0');const nx=nodes[(k+1)%4];nx.animate([{transform:'scale(1)'},{transform:'scale(1.22)'},{transform:'scale(1)'}],{duration:450,easing:'ease-out'})}};raf=requestAnimationFrame(step)};
  const loop=()=>{clearInterval(auto);auto=setInterval(()=>{if(!pg.isConnected){clearInterval(auto);return}if(RM.matches)return;run((i+1)%4)},1250)};
  setTimeout(()=>{run(0);loop()},500);
  nodes.forEach((g,k)=>{const f=()=>{run(k);loop()};g.addEventListener('click',f);g.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();f()}})});
  const c=$('.tcenter',svg);const spin=()=>{svg.animate([{transform:'perspective(1400px) rotateY(0)'},{transform:'perspective(1400px) rotateY(360deg)'}],{duration:1200,easing:'cubic-bezier(.3,.7,.2,1)'});clearInterval(auto);[0,1,2,3].forEach(k=>setTimeout(()=>run(k,320),1000+k*340));setTimeout(loop,2500)};
  c.addEventListener('click',spin);c.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();spin()}});
}
/* ---------- goals target ---------- */
function wireTarget(pg){
  const svg=$('.target',pg),ag=$('.arrows',svg),board=$('.tboard',svg);let shots=0;
  const shoot=(x,y)=>{if(shots>=8){ag.innerHTML='';shots=0}shots++;
    const d=Math.hypot(x-200,y-200);
    const g=document.createElementNS('http://www.w3.org/2000/svg','g');g.setAttribute('class','arrow');
    g.innerHTML=`<line x1="${x}" y1="${y}" x2="${x+70}" y2="${y-34}" stroke="#1b1a19" stroke-width="5" stroke-linecap="round"/><path d="M${x+62} ${y-30} l14 -14 M${x+70} ${y-34} l16 -6 M${x+54} ${y-26} l12 -14 M${x+62} ${y-30} l16 -5" stroke="#E81123" stroke-width="4" stroke-linecap="round"/><circle cx="${x}" cy="${y}" r="4" fill="#1b1a19"/>`;
    ag.appendChild(g);board.classList.remove('wob');void board.getBoundingClientRect();board.classList.add('wob');
    if(d<26){const h=document.createElementNS('http://www.w3.org/2000/svg','circle');h.setAttribute('class','ringhit');h.setAttribute('cx',200);h.setAttribute('cy',200);h.setAttribute('r',40);h.setAttribute('fill','none');h.setAttribute('stroke','#fff');h.setAttribute('stroke-width','6');ag.appendChild(h);setTimeout(()=>h.remove(),700);
      const r=svg.getBoundingClientRect();tileBurst(r.left+r.width/2,r.top+r.height/2,26,200)}};
  svg.addEventListener('click',e=>{const r=svg.getBoundingClientRect();const x=(e.clientX-r.left)/r.width*400,y=(e.clientY-r.top)/r.height*400;if(Math.hypot(x-200,y-200)>150)return;shoot(x,y)});
  svg.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();e.stopPropagation();shoot(200+(Math.random()-.5)*40,200+(Math.random()-.5)*40)}});
}
/* ---------- exit reflection ---------- */
function paintExit(pg,justOn){const done=$$('[data-tick].done',pg).length,bar=$('#exitBar',pg);if(!bar)return;$$('#exitBar i',pg).forEach((x,k)=>x.classList.toggle('on',k<done));
  const full=done===$$('[data-tick]',pg).length;const was=bar.classList.contains('full');bar.classList.toggle('full',full);
  if(full&&!was&&justOn){burst(120);$$('[data-tick]',pg).forEach((c,k)=>setTimeout(()=>c.animate([{transform:'perspective(900px) rotateY(0) translateY(0)'},{transform:'perspective(900px) rotateY(180deg) translateY(-20px)'},{transform:'perspective(900px) rotateY(360deg) translateY(0)'}],{duration:900,easing:'cubic-bezier(.3,.7,.2,1)'}),k*150))}}
/* ---------- fit every page to the screen (no scrolling) ---------- */
function fitPage(pg){if(!pg)return;const b=pg.querySelector('.body');if(!b)return;
  b.style.zoom='';b.style.minHeight='';b.style.flex='';b.style.height='';delete pg.dataset.fit;
  const cs=getComputedStyle(pg);const avail=pg.clientHeight-parseFloat(cs.paddingTop)-parseFloat(cs.paddingBottom);
  b.style.minHeight='0';b.style.flex='none';b.style.height='auto';
  let f=1;for(let t=0;t<4;t++){const need=b.getBoundingClientRect().height;if(need<=avail+1)break;f=Math.max(.45,f*avail/need*.995);b.style.zoom=f}
  if(f===1){b.style.minHeight='';b.style.flex='';b.style.height=''}else pg.dataset.fit=f.toFixed(3)}
addEventListener('resize',()=>{const pg=curPage();if(pg)fitPage(pg)});

/* ---------------- relay timer (also feeds the live tile) ---------------- */
const T={total:120,left:120,run:false,round:1,id:null,end:0};
function fmt(s){s=Math.max(0,Math.ceil(s));return Math.floor(s/60)+':'+String(s%60).padStart(2,'0')}
function paintTimer(){
  const v=$('#tVal');if(v){v.textContent=fmt(T.left);$('#tArc').setAttribute('stroke-dashoffset',326.7*(1-T.left/T.total));$('#tRound').textContent='Rotation '+T.round;
    const b=$('#tGo');if(b)b.innerHTML=T.run?`${ico('pause','',3)}<span>Pause</span>`:(T.left<=0?`${ico('next','',3)}<span>Next rotation</span>`:`${ico('play','',3)}<span>${T.left<T.total?'Resume':'Start'}</span>`)}
  $$('[data-tt]').forEach(e=>e.textContent=fmt(T.left));
  const tile=$('.tile[data-timer]');
  if(tile){const faces=$$('.face',tile),tf=tile.querySelector('.tface');if(T.run&&+tile.dataset.k!==faces.indexOf(tf)){faces.forEach(f=>{f.classList.remove('up');f.classList.add('down')});tf.classList.remove('down');tile.dataset.k=faces.indexOf(tf)}}
}
function loop(){if(!T.run)return;T.left=(T.end-Date.now())/1000;if(T.left<=0){T.left=0;T.run=false;alarm()}paintTimer();if(T.run)T.id=requestAnimationFrame(loop)}
let AC=null;function audio(){try{AC=AC||new (window.AudioContext||window.webkitAudioContext)();AC.resume&&AC.resume()}catch(e){}return AC}
function alarm(){const b=$('#timerBox');if(b){b.classList.remove('alarm');void b.offsetWidth;b.classList.add('alarm')}
  try{const a=audio();if(!a)return;[0,.35,.7].forEach(t=>{const o=a.createOscillator(),g=a.createGain();o.frequency.value=880;o.connect(g);g.connect(a.destination);g.gain.setValueAtTime(.0001,a.currentTime+t);g.gain.exponentialRampToValueAtTime(.3,a.currentTime+t+.02);g.gain.exponentialRampToValueAtTime(.0001,a.currentTime+t+.28);o.start(a.currentTime+t);o.stop(a.currentTime+t+.3)})}catch(e){}}
function wireTimer(pg){
  $('#tGo',pg).onclick=()=>{audio();if(T.run){T.run=false;cancelAnimationFrame(T.id)}else{if(T.left<=0){T.round++;T.left=T.total}T.run=true;T.end=Date.now()+T.left*1000;loop()}paintTimer()};
  $('#tReset',pg).onclick=()=>{T.run=false;cancelAnimationFrame(T.id);T.left=T.total;T.round=1;paintTimer()};
  paintTimer();
}

/* ---------------- confetti tiles ---------------- */
const KC=['#0078D4','#FFB900','#E81123','#107C10','#8764B8','#00B294','#F7630C','#E3008C','#fff'];
function burst(n){const pg=curPage();const c=(pg&&pg.querySelector('.confetti'))||$('#confetti');if(!c||RM.matches)return;for(let k=0;k<n;k++){const i=document.createElement('i');const s=10+Math.random()*26;
  i.style.cssText=`left:${Math.random()*100}%;--s:${s}px;--k:${KC[k%KC.length]};--d:${2.4+Math.random()*2.6}s;--x:${(Math.random()-.5)*300}px;--r:${(Math.random()-.5)*900}deg;animation-delay:${Math.random()*.8}s`;
  c.appendChild(i);setTimeout(()=>i.remove(),6000)}}
function stopConfetti(){$$('.confetti').forEach(c=>c.innerHTML='')}

/* ---------------- keyboard / clicker ---------------- */
addEventListener('keydown',e=>{
  if(view==='lock'){unlock(true,true);e.preventDefault();return}
  if(e.key==='f'||e.key==='F'){toggleFull();return}
  if(e.key==='o'||e.key==='O'){view==='overview'?hideOverview():showOverview();return}
  if(view==='overview'){if(e.key==='Escape'||e.key==='Backspace')hideOverview();return}
  if(view==='app'){
    const onBtn=document.activeElement&&document.activeElement.matches('button,[role=button]');
    if((e.key==='Enter'||e.key===' ')&&onBtn)return;
    if([' ','Enter'].includes(e.key)){e.preventDefault();revealOrNext()}
    else if(['ArrowRight','PageDown'].includes(e.key)){e.preventDefault();next()}
    else if(['ArrowLeft','PageUp'].includes(e.key)){e.preventDefault();prev()}
    else if(e.key==='Escape'||e.key==='Backspace'){e.preventDefault();back()}
    else if(e.key==='Home'){hist.length=0;closeApp()}
    return;
  }
  if(view==='start'){
    const tiles=$$('button.tile');const i=tiles.indexOf(document.activeElement);
    if(['ArrowRight','ArrowDown','PageDown'].includes(e.key)){e.preventDefault();const t=tiles[Math.min(tiles.length-1,i+1)];t.focus();t.scrollIntoView({block:'nearest',inline:'nearest',behavior:'smooth'})}
    else if(['ArrowLeft','ArrowUp','PageUp'].includes(e.key)){e.preventDefault();const t=tiles[Math.max(0,i-1)];t.focus();t.scrollIntoView({block:'nearest',inline:'nearest',behavior:'smooth'})}
    else if(e.key==='Escape')relock();
  }
});

/* ---------------- lesson chrome ---------------- */
document.body.classList.add('theme-'+(L.theme||('l'+L.num)));document.title=`Lesson ${L.num} · ${L.title}`;
$('#lockKicker').textContent='Lesson '+L.num;$('#lockH').textContent=L.title;$('#lockSub').textContent=L.sub||'';if(L.lockImg){$('#lockImg').src=L.lockImg;if(L.lockCls)$('#lockImg').classList.add(L.lockCls)}else $('#lockImg').remove();
$('#startH').textContent='Lesson '+L.num;$('#startP').textContent=L.title;
$('#btnLessons').innerHTML=ico('lessons');$('#btnLessons').onclick=()=>{const c=(S[0]&&S[0].c)||'#0078D4';const href='../index.html?menu&fx='+encodeURIComponent(c);if(RM.matches){if(EMBED){parent.postMessage({pa:'menu',c},'*');return}location.href=href;return}
  const r=$('#btnLessons').getBoundingClientRect(),sp=$('#splash');sp.style.cssText=`--c:${c};left:${r.left}px;top:${r.top}px;width:${r.width}px;height:${r.height}px;transform:perspective(900px) rotateY(-90deg);transition:none`;sp.innerHTML=ico('lessons','',1.8);sp.classList.add('go');void sp.offsetWidth;
  sp.style.transition='left .4s var(--ease),top .4s var(--ease),width .4s var(--ease),height .4s var(--ease),transform .3s ease-out';sp.style.transform='none';sp.style.left='0px';sp.style.top='0px';sp.style.width=innerWidth+'px';sp.style.height=innerHeight+'px';
  setTimeout(()=>{if(EMBED){try{parent.postMessage({pa:'menu',c},'*')}catch(_){location.href=href}setTimeout(()=>{sp.classList.remove('go');sp.style.cssText=''},400)}else location.href=href},620)};
/* ---------------- init ---------------- */
buildStart();buildOverview();lastMin=-1;tick_clock();paintProgress();
$$('.tile').forEach(t=>bindTilt(t,9));
$$('.tool,.icon-btn,.navbtn').forEach(b=>bindTilt(b,0));
startLive();
lock.focus();
if(/[?&]start\b/.test(location.search)){lock.style.transition='none';unlock()}
{const m=location.search.match(/[?&]fx=([^&]+)/);if(m&&!RM.matches){const sp=$('#splash');sp.style.cssText=`--c:${decodeURIComponent(m[1])};left:0;top:0;width:100vw;height:100vh;transition:none;flex-direction:column;gap:2vh;text-align:center`;
  sp.innerHTML=`<div style="font-weight:200;font-size:clamp(90px,14vw,240px);line-height:.9">${L.num}</div><div style="font-weight:300;font-size:clamp(26px,3.2vw,56px);max-width:22ch;line-height:1.1">${L.title}</div>`;sp.classList.add('go');sp.style.display='flex';sp.style.alignItems='center';sp.style.justifyContent='center';
  $$('.group').forEach(g=>g.style.animationDelay='.45s');
  setTimeout(()=>{sp.animate([{transform:'perspective(1400px) rotateY(0)',opacity:1},{transform:'perspective(1400px) rotateY(-90deg)',opacity:.6}],{duration:440,easing:'cubic-bezier(.5,0,.75,0)',fill:'forwards'}).onfinish=()=>{sp.classList.remove('go');sp.style.display='';sp.innerHTML='';sp.getAnimations().forEach(a=>a.cancel())}},260)}}
try{localStorage.setItem('pa-last',String(L.num))}catch(e){}
const fromHash=()=>{const m=location.hash.match(/^#slide-(\d+)$/);return m?+m[1]:0};
addEventListener('hashchange',()=>{const n=fromHash();if(n>=1&&n<=S.length&&n!==cur){if(view==='lock'){lock.classList.add('gone');$('#start').setAttribute('aria-hidden','false')}if(view==='app')render(n,'in-r');else openSlide(n)}});
const h=fromHash();if(h>=1&&h<=S.length){lock.classList.add('gone');view='start';$('#start').setAttribute('aria-hidden','false');openSlide(h)}
window.__deck={openSlide,next,prev,unlock,showOverview,hideOverview,closeApp,S,L};
})();
