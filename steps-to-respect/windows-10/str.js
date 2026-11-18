/* Steps to Respect · Windows 10 shell engine */
(function(){
'use strict';
const P={
 back:'<path d="M15 5l-7 7 7 7"/>',chevL:'<path d="M15 5l-7 7 7 7"/>',chevR:'<path d="M9 5l7 7-7 7"/>',
 search:'<circle cx="10.5" cy="10.5" r="6.5"/><path d="M15.5 15.5L21 21"/>',
 taskview:'<path d="M3 7h13v11H3z"/><path d="M7 4h14v11"/>',
 note:'<path d="M5 4h14v11l-5 5H5z"/><path d="M14 20v-5h5"/><path d="M8 9h8M8 12h5"/>',
 pen:'<path d="M4 20l4-1L19 8l-3-3L5 16z"/><path d="M14 7l3 3"/>',
 hl:'<path d="M5 20h6"/><path d="M8 16l-2 2 2 2 2-2"/><path d="M8 16l9-9 3 3-9 9z"/>',
 eraser:'<path d="M9 20h11"/><path d="M5 15l9-9 5 5-7 7H8z"/><path d="M10 10l5 5"/>',
 trash:'<path d="M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13"/>',
 timer:'<circle cx="12" cy="13" r="7.5"/><path d="M12 13V9.5M9.5 2.5h5M18.5 6l1.5-1.5"/>',
 ac:'<path d="M4 4h16v12H10l-6 4z"/><path d="M8 8.5h8M8 11.5h5"/>',
 book:'<path d="M12 6c-2-1.5-5-2-8-1.5V19c3-.5 6 0 8 1.5 2-1.5 5-2 8-1.5V4.5C17 4 14 4.5 12 6z"/><path d="M12 6v14.5"/>',
 list:'<path d="M9 6h11M9 12h11M9 18h11"/><path d="M4.5 6h.01M4.5 12h.01M4.5 18h.01" stroke-width="3"/>',
 target:'<circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="4.5"/><circle cx="12" cy="12" r=".8"/>',
 people:'<circle cx="9" cy="8" r="3.2"/><path d="M3 19.5c0-3.3 2.7-5.5 6-5.5s6 2.2 6 5.5"/><circle cx="17" cy="9" r="2.6"/><path d="M16.5 14c2.7.2 4.5 2.2 4.5 4.8"/>',
 heart:'<path d="M12 20s-7.5-4.6-7.5-10.2A4.3 4.3 0 0 1 12 7.3a4.3 4.3 0 0 1 7.5 2.5C19.5 15.4 12 20 12 20z"/>',
 school:'<path d="M2.5 9.5L12 5l9.5 4.5L12 14z"/><path d="M6.5 11.5v4.3c0 1.6 2.5 3.2 5.5 3.2s5.5-1.6 5.5-3.2v-4.3"/><path d="M21.5 9.5v5"/>',
 star:'<path d="M12 3.5l2.6 5.4 5.9.8-4.3 4.1 1 5.8L12 16.9l-5.2 2.7 1-5.8L3.5 9.7l5.9-.8z"/>',
 bulb:'<path d="M9 18h6M10 21h4"/><path d="M12 3a6 6 0 0 0-4 10.5c.8.8 1 1.6 1 2.5h6c0-.9.2-1.7 1-2.5A6 6 0 0 0 12 3z"/>',
 chat:'<path d="M4 5h16v10H10l-4 4v-4H4z"/><path d="M8 9h8M8 12h5"/>',
 chat2:'<path d="M3 5h11v8H8l-3 3v-3H3z"/><path d="M14 9h7v8h-1.5v3l-3-3H11v-2"/>',
 question:'<circle cx="12" cy="12" r="9"/><path d="M9.6 9.4a2.5 2.5 0 1 1 3.5 2.4c-.7.3-1.1.9-1.1 1.6v.6"/><path d="M12 17h.01" stroke-width="2.6"/>',
 stop:'<path d="M8.3 3h7.4L21 8.3v7.4L15.7 21H8.3L3 15.7V8.3z"/><path d="M8 12h8"/>',
 shield:'<path d="M12 3l8 3v6c0 4.7-3.4 7.9-8 9-4.6-1.1-8-4.3-8-9V6z"/><path d="M8.5 12l2.5 2.5 4.5-5"/>',
 flag:'<path d="M5 21V4"/><path d="M5 4h12l-2.5 4L17 12H5"/>',
 smile:'<circle cx="12" cy="12" r="9"/><path d="M8.5 14a4 4 0 0 0 7 0"/><path d="M9 9.5h.01M15 9.5h.01" stroke-width="2.6"/>',
 hands:'<path d="M12 20s-7.5-4.6-7.5-10.2A4.3 4.3 0 0 1 12 7.3a4.3 4.3 0 0 1 7.5 2.5C19.5 15.4 12 20 12 20z"/><path d="M8.5 12h7M12 8.5v7"/>',
 sparkle:'<path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8"/>',
 check:'<path d="M5 12.5l4.5 4.5L19 7"/>',x:'<path d="M6 6l12 12M18 6L6 18"/>',min:'<path d="M5 12h14"/>',max:'<path d="M5 5h14v14H5z"/>',
 moon:'<path d="M20 14.5A8.5 8.5 0 1 1 9.5 4a7 7 0 0 0 10.5 10.5z"/>',
 sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.3 5.3l1.4 1.4M17.3 17.3l1.4 1.4M5.3 18.7l1.4-1.4M17.3 6.7l1.4-1.4"/>',
 palette:'<path d="M12 3a9 9 0 0 0 0 18c1.4 0 2-.9 2-1.9 0-1.2-1-1.5-1-2.6 0-1 .8-1.5 1.8-1.5H17a4 4 0 0 0 4-4C21 6.6 17 3 12 3z"/><path d="M7.5 11h.01M9.5 7h.01M14.5 7h.01" stroke-width="2.6"/>',
 full:'<path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5"/>',
 lock:'<rect x="5" y="11" width="14" height="10"/><path d="M8 11V7.5a4 4 0 0 1 8 0V11"/>',
 power:'<path d="M12 3v8"/><path d="M7 5.8a8 8 0 1 0 10 0"/>',
 grid:'<path d="M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z"/>',
 plus:'<path d="M12 5v14M5 12h14"/>',
 board:'<path d="M3 4h18v12H3z"/><path d="M8 21l4-5 4 5"/><path d="M7 12l3-3 2 2 4-4"/>',
 poster:'<path d="M4 4h16v12H4z"/><path d="M9 21h6M12 16v5"/><path d="M8 12l2.5-3 2 2 3.5-4"/>',
 cal:'<rect x="3.5" y="5" width="17" height="15"/><path d="M3.5 10h17M8 3v4M16 3v4"/>',
 user:'<circle cx="12" cy="8" r="4"/><path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7"/>',
 clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
 eye:'<path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
 promise:'<path d="M8 13V6.5a1.5 1.5 0 0 1 3 0V12M11 11V5a1.5 1.5 0 0 1 3 0v6M14 11V6.5a1.5 1.5 0 0 1 3 0V14c0 4-2.5 7-6 7-2.6 0-4-1.3-5.3-3.3L3.5 14a1.5 1.5 0 0 1 2.4-1.8L8 15"/>',
 talk:'<circle cx="8" cy="8" r="3"/><path d="M3 19c0-3 2.2-5 5-5s5 2 5 5"/><path d="M14 5h7v5h-3l-2 2v-2h-2z"/>',
 globe:'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.6 3.8 5.6 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.6-3.8-9S9.5 5.6 12 3z"/>',
 home:'<path d="M3 11l9-7 9 7"/><path d="M5 10v10h14V10"/><path d="M10 20v-6h4v6"/>',
 phone:'<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a1 1 0 0 1-1 1A16 16 0 0 1 4 5a1 1 0 0 1 1-1z"/>',
 mail:'<rect x="3" y="5" width="18" height="14"/><path d="M3 6l9 7 9-7"/>',
 brain:'<path d="M9 4a3 3 0 0 0-3 3 3 3 0 0 0-2 5 3 3 0 0 0 2 5 3 3 0 0 0 6 1V5a3 3 0 0 0-3-1z"/><path d="M15 4a3 3 0 0 1 3 3 3 3 0 0 1 2 5 3 3 0 0 1-2 5 3 3 0 0 1-6 1"/>',
 hand:'<path d="M8 13V5.5a1.5 1.5 0 0 1 3 0V12M11 11V4a1.5 1.5 0 0 1 3 0v7M14 11V5.5a1.5 1.5 0 0 1 3 0V14c0 4-2.5 7-6 7-2.6 0-4-1.3-5.3-3.3L3.5 14a1.5 1.5 0 0 1 2.4-1.8L8 15"/>',
 scale:'<path d="M12 4v16M7 20h10M5 7h14"/><path d="M5 7l-3 6a3 3 0 0 0 6 0zM19 7l-3 6a3 3 0 0 0 6 0z"/>',
 play:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M10 9l5 3-5 3z"/>',
 megaphone:'<path d="M3 10v4h3l8 4V6L6 10z"/><path d="M17 9a4 4 0 0 1 0 6M6 14l1 5h3l-1-4"/>',
 puzzle:'<path d="M4 8h4a2 2 0 1 1 4 0h4v4a2 2 0 1 1 0 4v4h-4a2 2 0 1 0-4 0H4v-4a2 2 0 1 0 0-4z"/>',
 award:'<circle cx="12" cy="9" r="6"/><path d="M8.5 14L7 22l5-3 5 3-1.5-8"/>',
 leaf:'<path d="M5 19C5 10 10 5 20 4c-1 10-6 15-15 15z"/><path d="M5 19l8-8"/>',
 lock2:'<rect x="5" y="11" width="14" height="10"/><path d="M8 11V7.5a4 4 0 0 1 8 0V11"/>',
 run:'<circle cx="14" cy="4.5" r="2"/><path d="M8 21l3-6 3 2v5M6 11l3-3h5l3 4 3 1M11 15l-2-4"/>',
 cards:'<rect x="3" y="6" width="12" height="15" rx="1"/><path d="M8 3h12v15"/>',
 group:'<circle cx="12" cy="7" r="3"/><circle cx="5" cy="10" r="2.2"/><circle cx="19" cy="10" r="2.2"/><path d="M7 20c0-3 2.2-5 5-5s5 2 5 5M1.5 19c0-2.2 1.6-3.8 3.5-3.8M22.5 19c0-2.2-1.6-3.8-3.5-3.8"/>',
 sorry:'<path d="M12 20s-7.5-4.6-7.5-10.2A4.3 4.3 0 0 1 12 7.3a4.3 4.3 0 0 1 7.5 2.5C19.5 15.4 12 20 12 20z"/><path d="M9 12.5c1.5 1.3 4.5 1.3 6 0"/>'
};
const FEET='<svg class="feet" viewBox="0 0 24 24" fill="currentColor"><ellipse cx="7.6" cy="15.6" rx="2.6" ry="4.2"/><circle cx="5.6" cy="9.8" r="1"/><circle cx="7.5" cy="9.2" r="1"/><circle cx="9.3" cy="9.7" r="1"/><ellipse cx="16.4" cy="9.4" rx="2.6" ry="4.2"/><circle cx="14.6" cy="3.6" r="1"/><circle cx="16.5" cy="3" r="1"/><circle cx="18.3" cy="3.5" r="1"/></svg>';
function ico(n,c){return `<svg class="i ${c||''}" viewBox="0 0 24 24" aria-hidden="true">${P[n]||''}</svg>`}
const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const RM=matchMedia('(prefers-reduced-motion: reduce)');
const store={get(k,d){try{const v=localStorage.getItem(k);return v==null?d:JSON.parse(v)}catch(e){return d}},set(k,v){try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}}};

let LESSONS={},L=null,S=[],byN={},view='lock',mode='home',cur=0,SC=1,frame;
const SERIES={app:'Steps to Respect',kick:'NJ4S',title:'Steps to Respect',sub:'NEW JERSEY STATEWIDE STUDENT SUPPORT SERVICES - NJ4S'};
const STR=window.STR={ico,FEET,esc,lesson(d){LESSONS[d.num]=d},$,$$,store};
const lessonNums=()=>Object.keys(LESSONS).map(Number).sort((a,b)=>a-b);

/* ---------- fit 1600x900 logical canvas ---------- */
function fit(){const s=Math.min(innerWidth/1600,innerHeight/900);SC=s;frame.style.width=(innerWidth/s)+'px';frame.style.height=(innerHeight/s)+'px';frame.style.transform=`scale(${s})`;sizeTiles()}
function sizeTiles(){const g=document.getElementById('groups');if(!g||!g._n)return;const W=innerWidth/SC,Hh=innerHeight/SC,gap=document.body.classList.contains('glass')?10:4,n=g._n,rows=Math.max(6,g._rows||8),tc=g._cols||n*6;
 const cw=(W-96-48-(n-1)*56-(tc-n)*gap)/tc,ch=(Hh-48-142-34-26-(rows-1)*gap)/rows;g.style.setProperty('--cell',Math.max(50,Math.floor(Math.min(cw,ch,140)))+'px')}
const lx=e=>e.clientX/SC,ly=e=>e.clientY/SC;

/* ---------- shell markup ---------- */
function shell(){
 const ks=['sky','violet','coral','lime','sun','teal'];
 frame.innerHTML=`
<div class="wall"><div class="ph"></div><div class="tint"></div></div>
<div id="start" aria-label="Start">
 <nav class="st-rail acr" aria-label="Start menu">
  <button data-act="ac" title="Presenter notes (N)" aria-label="Presenter notes">${ico('ac')}</button>
  <button data-act="search" title="Search (/)" aria-label="Search">${ico('search')}</button>
  <div class="sp"></div>
  <button data-act="pal" title="Theme: Deep · Colourful · Lime · Liquid Glass" aria-label="Change theme">${ico('palette')}</button>
  <button data-act="full" title="Full screen (F)" aria-label="Full screen">${ico('full')}</button>
  <button data-act="lock" title="Lock screen (L)" aria-label="Lock screen">${ico('power')}</button>
 </nav>
 <header class="st-head"><button class="st-back" data-act="up" id="stBack" title="All lessons" aria-label="All lessons">${ico('back')}</button><div><div class="st-kick" id="stKick"></div><div class="st-h" id="stH"></div></div>
  <div class="st-tools"><button data-act="resume" title="Resume" aria-label="Resume">${ico('chevR')}</button></div></header>
 <div class="st-groups" id="groups"></div>
</div>
<div id="app" aria-label="Lesson">
 <div class="tb acr"><span class="appico" id="appico">${ico('book')}</span><span class="ttl" id="ttl"></span><span class="sp"></span><span class="slno" id="slno"></span>
  <button class="wbtn" data-act="home" title="Back to Start (Esc)" aria-label="Back to Start">${ico('min')}</button>
  <button class="wbtn" data-act="full" title="Full screen (F)" aria-label="Full screen">${ico('max')}</button>
  <button class="wbtn x" data-act="home" title="Close (Esc)" aria-label="Close">${ico('x')}</button></div>
 <div id="stage"><div class="edge l" id="edgeL" title="Previous (←)">${ico('chevL')}</div><div class="edge r" id="edgeR" title="Next (→)">${ico('chevR')}</div>
  <button class="rvh acr hide" id="rvh">Reveal next <kbd>→</kbd></button></div>
 <svg id="ink" aria-hidden="true"></svg>
</div>
<div id="inkbar" class="acr" role="toolbar" aria-label="Windows Ink">
 ${['#1b1a19','#C2401C','#0063B1','#2F7D12','#8E3FD0'].map((c,i)=>`<button data-ink="${c}" class="${i?'':'on'}" aria-label="Pen ${c}"><span class="sw" style="background:${c}"></span></button>`).join('')}
 <span class="sep"></span><button data-ink="hl" title="Highlighter" aria-label="Highlighter">${ico('hl')}</button>
 <button data-ink="erase" title="Eraser" aria-label="Eraser">${ico('eraser')}</button>
 <button data-ink="clear" title="Clear this slide" aria-label="Clear ink">${ico('trash')}</button><span class="sep"></span>
 <button data-ink="close" title="Close ink (P)" aria-label="Close ink">${ico('x')}</button>
</div>
<div id="floatNotes"></div>
<div id="search" class="acr-d" role="dialog" aria-label="Search">
 <div class="se-body" id="seBody"></div>
 <label class="se-in">${ico('search')}<input id="seIn" type="text" placeholder="Search all lessons" autocomplete="off" spellcheck="false"></label>
</div>
<aside id="ac" class="acr-d" aria-label="Action Center: presenter notes">
 <div class="ac-h"><span class="t1">Presenter notes</span><span class="sp"></span><button data-act="ac">Close</button></div>
 <div class="ac-card"><div class="app"><i>${ico('book')}</i><span id="acApp"></span></div><div class="sl" id="acSl"></div><div class="ac-notes" id="acNotes"></div></div>
 <button class="ac-next" id="acNext"></button>
 <div class="pal" style="margin-top:10px"><span>Theme</span>
  <button data-pal="deep"><i><b style="background:#0063B1"></b><b style="background:#C2401C"></b><b style="background:#5C2DB4"></b></i>Deep</button>
  <button data-pal="bright"><i><b style="background:#4CC2FF"></b><b style="background:#FFC83D"></b><b style="background:#F472B6"></b></i>Colourful</button>
  <button data-pal="lime"><i><b style="background:#8CD43C"></b><b style="background:#1b1a19"></b><b style="background:#fff"></b></i>Lime</button>
  <button data-pal="glass"><i><b style="background:linear-gradient(160deg,#fff,#4CC2FF)"></b><b style="background:linear-gradient(160deg,#fff,#F472B6)"></b><b style="background:linear-gradient(160deg,#fff,#8CD43C)"></b></i>Liquid Glass</button></div>
 <div class="qa">
  <button data-act="timer">${ico('timer')}Timer</button><button data-act="ink">${ico('pen')}Ink</button><button data-act="note">${ico('note')}Sticky note</button><button data-act="board">${ico('board')}Whiteboard</button>
  <button data-act="night">${ico('sun')}Night light</button><button data-act="focus">${ico('moon')}Focus assist</button><button data-act="blank">${ico('eye')}Blank screen</button><button data-act="full">${ico('full')}Full screen</button>
 </div>
</aside>
<div id="timer" class="acr-d" role="dialog" aria-label="Timer">
 <div class="th">${ico('timer')}<span>Alarms &amp; Clock · Timer</span><button class="x" data-act="timerclose" aria-label="Hide timer">${ico('x')}</button></div>
 <div class="lab" id="tLab"></div>
 <div class="row"><div class="rg"><svg viewBox="0 0 120 120"><circle class="bg" cx="60" cy="60" r="52"/><circle class="fg" id="tRing" cx="60" cy="60" r="52" stroke-dasharray="326.7" stroke-dashoffset="0"/></svg><div class="tm" id="tTime">3:00</div></div>
  <div class="pre">${[60,120,180,300].map(s=>`<button data-tset="${s}">${s/60} min</button>`).join('')}</div></div>
 <div class="ctl"><button class="pri" id="tGo">Start</button><button id="tReset">Reset</button></div>
</div>
<div id="toasts" aria-live="polite"></div>
<div id="taskbar" role="toolbar" aria-label="Taskbar">
 <div class="prog"><i id="progI"></i></div>
 <button class="tbtn startb" data-act="home" title="Start (Esc)" aria-label="Start">${FEET}</button>
 <button class="tbtn" data-act="back" title="Back" aria-label="Back">${ico('back')}</button>
 <button class="sbox" data-act="search" aria-label="Search this lesson">${ico('search')}<span>Type here to search</span></button>
 <button class="tbtn" data-act="tv" title="Task View · Start" aria-label="Task View">${ico('taskview')}</button>
 <button class="tbtn" data-act="note" title="Sticky Notes" aria-label="New sticky note">${ico('note')}</button>
 <button class="tbtn" data-act="ink" id="tbInk" title="Windows Ink (P)" aria-label="Windows Ink">${ico('pen')}</button>
 <button class="tbtn" data-act="timer" id="tbTimer" title="Timer (T)" aria-label="Timer">${ico('timer')}</button>
 <div class="tray">
  <span class="slp" id="slp"></span>
  <button class="mini" id="tMini" data-act="timer" aria-label="Timer running"></button>
  <button class="tclk" data-act="ac" aria-label="Clock"><span id="tbTime"></span><span id="tbDate"></span></button>
  <button class="tbtn acbtn" data-act="ac" title="Presenter notes (N)" aria-label="Action Center">${ico('ac')}<span class="bdg" id="acBdg">1</span></button>
 </div>
</div>
<div id="launch"></div>
<div id="night"></div>
<div id="blank">Screen paused · press B to return</div>
<div id="lock" tabindex="0" role="button" aria-label="Press any key or click to begin">
 <div class="lk-like acr-d"><span class="lk-dots">${ks.map(k=>`<i class="k-${k}"></i>`).join('')}</span>${esc(SERIES.app)}</div>
 <div class="lk-time" id="lkTime"></div><div class="lk-date" id="lkDate"></div>
 <div class="lk-card acr"><img src="img/nj4s.png" alt="NJ4S Bergen Hub"><div><div class="lk-kick">${esc(SERIES.title.toUpperCase())}</div><div class="lk-h">${esc(SERIES.sub)}</div></div></div>
 <div class="lk-hint">${ico('chevR')}<span>Click, tap or press any key to begin</span></div>
</div>`;
}

/* ---------- clock ---------- */
function tickClock(){const d=new Date();const t=d.toLocaleTimeString([],{hour:'numeric',minute:'2-digit'});
 $('#lkTime').textContent=t;$('#lkDate').textContent=d.toLocaleDateString([],{weekday:'long',month:'long',day:'numeric'});
 $('#tbTime').textContent=t;$('#tbDate').textContent=d.toLocaleDateString([],{month:'numeric',day:'numeric',year:'numeric'});
 $$('.liveclock').forEach(e=>e.textContent=t)}

/* ---------- start screen ---------- */
const visited=new Set();
function faceSet(el,f){const side=el.classList.contains('b')?'b':'a';f=f||{};el.className='face '+side+(f.photo?' ph':'');el.style.backgroundImage=f.photo?`url(img/${f.photo})`:'';
 el.innerHTML=f.photo?'':(f.icon?`<span class="ico">${ico(f.icon)}</span>`:`<div class="txt ${f.cls||''}">${f.html||''}</div>`);$$('.liveclock',el).forEach(c=>c.textContent=new Date().toLocaleTimeString([],{hour:'numeric',minute:'2-digit'}))}
const DIM={s:[1,1],m:[2,2],w:[4,2],l:[4,4]};
function pack(items,C){C=C||6;const occ=[];const free=(r,c,w,h)=>{if(c+w>C)return false;for(let y=r;y<r+h;y++)for(let x=c;x<c+w;x++)if(occ[y]&&occ[y][x])return false;return true};
 let rows=0;items.forEach(t=>{const[w,h]=DIM[t.sz||'m'];for(let r=0;;r++){let done=false;for(let c=0;c<=C-w;c+=2){if(free(r,c,w,h)){for(let y=r;y<r+h;y++){occ[y]=occ[y]||[];for(let x=c;x<c+w;x++)occ[y][x]=1}t.pos=[r,c];rows=Math.max(rows,r+h);done=true;break}}if(done)break}});return rows}
function lessonGroups(Ls){if(Ls._groups)return Ls._groups;
 const G=Ls.groups.map(gr=>{if(gr.tiles)return gr;const tiles=gr.n.map((n,i)=>{const s=Ls.slides.find(x=>x.n===n);const f=s.faces||[{icon:s.icon}];return{n,sz:s.sz||(f[0]&&f[0].photo?'w':'m')}});return Object.assign({},gr,{tiles})});
 const auto=G.some(gr=>!gr.tiles.every(t=>t.pos));let best=6;
 if(auto){let bc=0;[4,6].forEach(C=>{const rs=G.map(gr=>pack(gr.tiles.map(t=>({sz:t.sz})),C));const n=G.length,rows=Math.max(6,...rs),tc=n*C;const cw=(1600-144-(n-1)*56-(tc-n)*4)/tc,ch=(900-250-(rows-1)*4)/rows;const c=Math.min(cw,ch,140);if(c>bc){bc=c;best=C}})}
 G.forEach(gr=>{const man=gr.tiles.every(t=>t.pos);gr.cols=man?6:best;if(!man)gr.rows=pack(gr.tiles,best);else gr.rows=Math.max(...gr.tiles.map(t=>t.pos[0]+DIM[t.sz||'m'][1]))});Ls._groups=G;return G}
function homeGroups(){if(homeGroups._g)return homeGroups._g;const ns=lessonNums();const g=[];
 const chunk=(arr,name,k)=>({name,k,tiles:arr.map((n,i)=>({lesson:n,sz:i===0?'l':(i===3?'w':'m')}))});
 const split=Math.ceil(ns.length/2);g.push(chunk(ns.slice(0,split),`Lessons ${ns[0]}–${ns[split-1]}`,'sky'));if(ns.length>split)g.push(chunk(ns.slice(split),`Lessons ${ns[split]}–${ns[ns.length-1]}`,'violet'));
 g.push({name:'Tools',k:'sun',tiles:[{util:'timer',label:'Timer',k:'sun',faces:[{icon:'timer'},{html:'<span class="liveclock"></span>',cls:'xl'}]},{util:'search',label:'Search all lessons',k:'sky',sz:'w',faces:[{icon:'search'}]},{util:'note',label:'Sticky Notes',k:'sun',faces:[{icon:'note'}]},{util:'board',label:'Whiteboard',k:'sky',faces:[{icon:'board'}]}]});
 g.forEach(gr=>gr.rows=pack(gr.tiles));return homeGroups._g=g}
function lessonTileDef(n){const Ls=LESSONS[n];const v=store.get('str-visited-L'+n,[]).length,tot=Ls.slides.filter(x=>!x.special).length;
 return{k:Ls.k||'sky',faces:[{photo:Ls.hero},{html:esc(Ls.full),cls:''},{html:`${v} of ${tot} slides viewed`,cls:'sm'}],lbl:`Lesson ${n}`,num:n,prog:tot?v/tot:0}}
function tileDef(gr,t){if(t.lesson)return lessonTileDef(t.lesson);const s=t.n?byN[t.n]:null;return{s,k:t.k||(s&&s.k)||gr.k,faces:t.faces||(s&&s.faces)||[{icon:(s&&s.icon)||t.icon}],lbl:t.label||(s&&(s.tile||s.t))||''}}
function buildStart(){
 const g=$('#groups');let d=0;g.innerHTML='';const groups=mode==='home'?homeGroups():lessonGroups(L);
 g._n=groups.length;g._rows=Math.max(...groups.map(x=>x.rows||8));g._cols=groups.reduce((a,x)=>a+(x.cols||6),0);
 $('#stKick').textContent=mode==='home'?SERIES.kick:`Lesson ${L.num}`;$('#stH').textContent=mode==='home'?SERIES.title:L.full;$('#stBack').style.display=mode==='home'?'none':'';
 document.getElementById('start').classList.toggle('is-home',mode==='home');
 groups.forEach(gr=>{const sec=document.createElement('section');sec.className='grp k-'+gr.k;sec.innerHTML=`<h2 class="grp-h"><i></i>${esc(gr.name)}</h2><div class="tg" style="--cols:${gr.cols||6}"></div>`;g.appendChild(sec);const tg=$('.tg',sec);
  gr.tiles.forEach(t=>{const D=tileDef(gr,t),s=D.s,sz=t.sz||'m',dims=DIM[sz];d+=30;
   const b=document.createElement('button');b.className=`t sz-${sz} k-${D.k}${t.util?' util':''}${t.lesson?' lessontile':''}`;if(s)b.dataset.n=s.n;else if(t.lesson)b.dataset.l=t.lesson;else b.dataset.util=t.util;
   b.style.cssText=`grid-row:${t.pos[0]+1}/span ${dims[1]};grid-column:${t.pos[1]+1}/span ${dims[0]};animation-delay:${d}ms`;
   b.setAttribute('aria-label',(s?'Slide '+s.n+': ':'')+(t.lesson?`Lesson ${t.lesson}: ${LESSONS[t.lesson].full}`:D.lbl.replace(/<[^>]+>/g,'')));
   b.innerHTML=`<div class="face a"></div>${D.faces.length>1?'<div class="face b"></div>':''}<span class="lbl">${D.lbl}</span>${s?`<span class="num">${s.n}</span><span class="seen">${ico('check')}</span>`:''}${t.lesson?`<span class="num big">${t.lesson}</span><span class="lprog"><i style="width:${Math.round(D.prog*100)}%"></i></span>`:''}`;
   faceSet($('.face.a',b),D.faces[0]);if(D.faces.length>1)faceSet($('.face.b',b),D.faces[1]);b._faces=D.faces;b._i=0;b.classList.toggle('showph',!!D.faces[0].photo);
   b.addEventListener('click',()=>{if(b.dataset.util)return util(b.dataset.util,b);if(b.dataset.l)return enterLesson(+b.dataset.l,b);launch(b,+b.dataset.n)});
   if(s&&visited.has(s.n))b.classList.add('visited');tg.appendChild(b)})});
 sizeTiles();g.scrollLeft=0;clearLive();liveLoop();
}
function wireStartFx(){const st=$('#start'),g=$('#groups');st.addEventListener('pointermove',e=>{const x=lx(e),y=ly(e);$$('.t',g).forEach(t=>{const r=t.getBoundingClientRect();t.style.setProperty('--mx',(x-r.left/SC)+'px');t.style.setProperty('--my',(y-r.top/SC)+'px')})});
 st.addEventListener('pointerleave',()=>$$('.t',g).forEach(t=>t.style.setProperty('--mx','-999px')));
 g.addEventListener('wheel',e=>{if(g.scrollWidth>g.clientWidth&&Math.abs(e.deltaY)>Math.abs(e.deltaX)){g.scrollLeft+=e.deltaY;e.preventDefault()}},{passive:false})}
function clearLive(){$$('.t').forEach(t=>clearTimeout(t._tm))}
function setLesson(n){if(!LESSONS[n])return;L=LESSONS[n];S=L.slides;byN={};S.forEach(s=>byN[s.n]=s);visited.clear();store.get('str-visited-L'+n,[]).forEach(v=>visited.add(v));store.set('str-lesson',n)}
function enterLesson(n,tile){setLesson(n);const st=$('#start');mode='lesson';st.classList.add('zoomout');setTimeout(()=>{buildStart();st.classList.remove('zoomout');st.classList.remove('back');void st.offsetWidth;st.classList.add('back')},tile&&!RM.matches?260:0);paintAC()}
function goHome(){if(view==='app')goStart();mode='home';homeGroups._g=null;const st=$('#start');st.classList.add('zoomout');setTimeout(()=>{buildStart();st.classList.remove('zoomout','back');void st.offsetWidth;st.classList.add('back')},RM.matches?0:220);paintAC()}
function liveLoop(){
 $$('.t').forEach((t,i)=>{const F=t._faces;if(!F||F.length<2)return;
  const go=()=>{if(view==='start'&&t.isConnected&&!RM.matches&&!document.hidden){const showingB=t.classList.contains('flip');const hid=showingB?$('.face.a',t):$('.face.b',t);
    t._i=(t._i+1)%F.length;faceSet(hid,F[t._i]);t.classList.toggle('flip');t.classList.toggle('showph',!!F[t._i].photo)}
   t._tm=setTimeout(go,5200+Math.random()*4200)};
  t._tm=setTimeout(go,1800+i*420)})}

/* ---------- launch / app ---------- */
function launch(tile,n){
 if(!byN[n])return;
 const r=tile.getBoundingClientRect();const fr=frame.getBoundingClientRect();
 const s=byN[n];const ln=$('#launch');ln.className='k-'+s.k;ln.innerHTML=ico(s.icon||'book');
 const W=fr.width/SC,H=(fr.height/SC)-48;const x=r.left/SC,y=r.top/SC,w=r.width/SC,h=r.height/SC;
 if(RM.matches||!ln.animate){openApp(n);return}
 ln.style.display='grid';
 const a=ln.animate([
  {left:x+'px',top:y+'px',width:w+'px',height:h+'px',transform:'perspective(1400px) rotateY(0deg)'},
  {left:x+'px',top:y+'px',width:w+'px',height:h+'px',transform:'perspective(1400px) rotateY(90deg)',offset:.32},
  {left:x+'px',top:y+'px',width:w+'px',height:h+'px',transform:'perspective(1400px) rotateY(-90deg)',offset:.321},
  {left:'0px',top:'0px',width:W+'px',height:H+'px',transform:'perspective(1400px) rotateY(0deg)'}],
  {duration:720,easing:'cubic-bezier(.5,0,.2,1)',fill:'forwards'});
 $('#start').classList.add('away');
 a.onfinish=()=>{openApp(n,true);const f=ln.animate([{opacity:1},{opacity:0}],{duration:320,fill:'forwards',delay:120});f.onfinish=()=>{ln.style.display='none';a.cancel();f.cancel()}};
}
function openApp(n,fromLaunch){
 view='app';document.body.classList.add('in-app');const app=$('#app');app.classList.remove('closing');app.classList.add('on');if(!fromLaunch){app.classList.remove('fade-in');void app.offsetWidth;app.classList.add('fade-in')}
 $('#start').classList.add('away');render(n,'in-r');closeSearch();
 if(!sessionStorage.getItem('str-tip')){try{sessionStorage.setItem('str-tip',1)}catch(e){}setTimeout(()=>toast({k:'sky',icon:'ac',app:'Steps to Respect',title:'Presenter notes are in the Action Center',text:'Press N or click the notes button at the right end of the taskbar.',buttons:[{t:'Open notes',pri:1,fn:()=>toggleAC(true)},{t:'Dismiss'}]}),900)}
}
function goStart(){
 if(view==='lock')return;if(mode!=='lesson'){mode='lesson';buildStart()}closeSearch();setInk(false);
 if(view==='app'){saveInk();const app=$('#app');app.classList.add('closing');setTimeout(()=>{app.classList.remove('on','closing');stage().querySelectorAll('.page').forEach(p=>p.remove())},280)}
 view='start';document.body.classList.remove('in-app');const st=$('#start');st.classList.remove('away');st.classList.remove('back');void st.offsetWidth;st.classList.add('back');paintAC();
 const t=cur&&$(`.t[data-n="${cur}"]`);if(t)setTimeout(()=>t.focus({preventScroll:true}),300);
}
const stage=()=>$('#stage');
let pageEl=null,hist=[];
function render(n,dir){
 const s=byN[n];if(!s)return;
 saveInk();
 if(pageEl){const old=pageEl;old.classList.add('out');old._leave&&old._leave();setTimeout(()=>old.remove(),260)}
 cur=n;const pg=document.createElement('div');pg.className=`page k-${s.k} ${dir||'in-r'}`;pg.dataset.n=n;
 pg.innerHTML=s.html(H);stage().insertBefore(pg,$('#edgeL'));pageEl=pg;
 $$('.step',pg).forEach(e=>e.classList.remove('shown'));
 $$('.fc',pg).forEach(c=>c.addEventListener('click',()=>{c.classList.toggle('flipped');checkHint();cheer(pg)}));
 $$('.narr',pg).forEach(prepNarr);
 s.wire&&s.wire(pg,H);
 if(!s.special){visited.add(n);store.set('str-visited-L'+L.num,[...visited]);const t=$(`.t[data-n="${n}"]`);t&&t.classList.add('visited')}
 $('#appico').className='appico k-'+s.k;$('#appico').innerHTML=ico(s.icon||'book');
 $('#ttl').innerHTML=`<b>${esc(SERIES.app)}</b> &nbsp;·&nbsp; Lesson ${L.num} &nbsp;·&nbsp; ${esc(s.title||s.t)}`;
 const count=S.filter(x=>!x.special).length;
 $('#slno').textContent=s.special?'':`${n} / ${count}`;$('#slp').textContent=s.special?'':`Slide ${n} of ${count}`;
 $('#progI').style.width=s.special?'0':(n/count*100)+'%';
 $('#edgeL').classList.toggle('off',s.special||n<=1);$('#edgeR').classList.toggle('off',s.special||n>=count);
 loadInk();checkHint();paintAC();
 if(s.autoNarr!==false)setTimeout(()=>$$('.narr:not(.step)',pg).forEach(runNarr),550);
 s.enter&&setTimeout(()=>{if(cur===n&&view==='app')s.enter(pg,H)},700);
}
const count=()=>S.filter(x=>!x.special).length;
function curPage(){return pageEl}
function pending(){const pg=pageEl;if(!pg)return[];return $$('.step:not(.shown),.fc:not(.flipped)',pg)}
function revealNext(){const p=pending();if(!p.length)return false;const el=p[0];
 if(el.classList.contains('fc'))el.classList.add('flipped');else{el.classList.add('shown');if(el.classList.contains('narr'))setTimeout(()=>runNarr(el),300);$$('.narr',el).forEach(x=>setTimeout(()=>runNarr(x),300))}
 checkHint();cheer(pageEl);return true}
function checkHint(){$('#rvh').classList.toggle('hide',!pending().length)}
function next(){if(view!=='app')return;const s=byN[cur];if(s.special)return;if(cur<count()){hist.push(cur);render(cur+1,'in-r')}else goStart()}
function prev(){if(view!=='app')return;const s=byN[cur];if(s.special||cur<=1)return;render(cur-1,'in-l')}
function revealOrNext(){if(view==='lock'){unlock(true);return}if(view==='start'){resume();return}if(revealNext())return;next()}
function resume(){if(mode==='home'){enterLesson(store.get('str-lesson',lessonNums()[0]));return}const last=store.get('str-last-L'+L.num,0);const n=last&&byN[last]?last:1;const t=$(`.t[data-n="${n}"]`);t?launch(t,n):openApp(n)}
function jump(n,l){if(l&&l!==L.num){const wasApp=view==='app';setLesson(l);mode='lesson';if(wasApp){render(n,'in-r')}else{buildStart();openApp(n)}return}if(view==='app')render(n,n>cur?'in-r':'in-l');else{if(mode==='home'){mode='lesson';buildStart()}const t=$(`.t[data-n="${n}"]`);t?launch(t,n):openApp(n)}}
function cheer(pg){const all=$$('.fc',pg);if(!all.length||pg.dataset.cheered||all.some(c=>!c.classList.contains('flipped')))return;pg.dataset.cheered=1;const r=all[all.length-1].getBoundingClientRect();burst(r.left/SC+r.width/SC/2,r.top/SC+r.height/SC/2)}
function burst(x,y,n=14){if(RM.matches)return;const b=document.createElement('div');b.className='burst';b.style.left=x+'px';b.style.top=y+'px';
 const ks=['sun','sky','coral','violet','teal','pink','lime'];for(let i=0;i<n;i++){const e=document.createElement('i');const a=Math.random()*Math.PI*2,d=80+Math.random()*140;e.className='k-'+ks[i%7];e.style.setProperty('--dx',Math.cos(a)*d+'px');e.style.setProperty('--dy',Math.sin(a)*d+'px');e.style.animationDelay=(Math.random()*.1)+'s';b.appendChild(e)}
 frame.appendChild(b);setTimeout(()=>b.remove(),1300)}

/* ---------- narrator highlight ---------- */
function prepNarr(el){if(el._prep)return;el._prep=1;const walk=n=>{[...n.childNodes].forEach(c=>{if(c.nodeType===3){const f=document.createDocumentFragment();c.textContent.split(/(\s+)/).forEach(w=>{if(!w)return;if(/^\s+$/.test(w))f.appendChild(document.createTextNode(w));else{const s=document.createElement('span');s.className='w';s.textContent=w;f.appendChild(s)}});c.replaceWith(f)}else if(c.nodeType===1)walk(c)})};walk(el);
 const box=document.createElement('span');box.className='nbox';el.appendChild(box)}
function runNarr(el){if(!el._prep)prepNarr(el);if(el._run)return;el._run=1;const ws=$$('.w',el),box=$('.nbox',el);if(RM.matches){ws.forEach(w=>w.classList.add('on'));return}
 let i=0;const tick=()=>{if(!el.isConnected)return;if(i>=ws.length){box.style.opacity=0;return}const w=ws[i];w.classList.add('on');box.style.opacity=1;box.style.left=(w.offsetLeft-6)+'px';box.style.top=(w.offsetTop-3)+'px';box.style.width=(w.offsetWidth+12)+'px';box.style.height=(w.offsetHeight+6)+'px';i++;setTimeout(tick,i===ws.length?600:Math.max(150,70+w.textContent.length*28))};tick()}

/* ---------- action center ---------- */
function fmtNotes(t){if(!t||!t.trim())return '<p class="wait">No notes for this slide.</p>';
 const out=[];let para=[];const flush=()=>{if(para.length){out.push('<p>'+para.join('<br>')+'</p>');para=[]}};
 t.split('\n').forEach(raw=>{const l=raw.trim();if(!l){flush();return}
  if(/^\*+/.test(l)){flush();const tx=l.replace(/^\*+\s*/,'').replace(/\*+$/,'').trim();out.push(`<span class="cue">${esc(tx)}</span>`);return}
  if(/^\(.*\)$/.test(l)){para.push(`<span class="${/wait for/i.test(l)?'wait':'ans'}">${esc(l)}</span>`);return}
  para.push(esc(l))});flush();return out.join('')}
function paintAC(){const s=byN[cur];const inApp=view==='app'&&s;
 $('#acApp').textContent=inApp?(s.special?SERIES.app:`Lesson ${L.num} · Slide ${s.n} of ${count()}`):SERIES.app;
 $('#acSl').textContent=inApp?(s.title||s.t):(mode==='home'?SERIES.title:L.full);
 $('#acNotes').innerHTML=inApp?fmtNotes(s.notes):'<p>Open a slide to see its presenter notes here.</p>';
 const nx=inApp&&!s.special&&byN[cur+1];$('#acNext').innerHTML=nx?`${ico('chevR')}<span>Up next: <b>${esc(nx.title||nx.t)}</b></span>`:`${ico('grid')}<span><b>Back to Start</b></span>`;
 $('#acBdg').classList.toggle('on',!!(inApp&&s.notes&&s.notes.trim()&&!$('#ac').classList.contains('on')));$('#acNotes').scrollTop=0}
function toggleAC(on){const ac=$('#ac');on=on==null?!ac.classList.contains('on'):on;ac.classList.toggle('on',on);if(on){closeSearch();$$('#toasts .toast').forEach(t=>{t.classList.add('bye');setTimeout(()=>t.remove(),300)});setTimeout(()=>document.body.classList.remove('toasting'),320)}paintAC()}

/* ---------- toasts ---------- */
let focusAssist=false;
function toast(o){if(focusAssist&&!o.priority)return;const t=document.createElement('div');t.className='toast acr-d';
 t.innerHTML=`<div class="th k-${o.k||'sky'}"><i>${ico(o.icon||'book')}</i><span>${esc(o.app||SERIES.app)}</span><button class="x" aria-label="Dismiss">${ico('x')}</button></div><div class="tt">${esc(o.title||'')}</div>${o.text?`<div class="tx">${esc(o.text)}</div>`:''}${o.buttons?`<div class="tbs">${o.buttons.map((b,i)=>`<button data-i="${i}" class="${b.pri?'pri':''}">${esc(b.t)}</button>`).join('')}</div>`:''}`;
 const bye=()=>{if(t._gone)return;t._gone=1;t.classList.add('bye');setTimeout(()=>{t.remove();document.body.classList.toggle('toasting',!!$('#toasts .toast'))},300)};
 $('.x',t).onclick=bye;$$('.tbs button',t).forEach(b=>b.onclick=()=>{const f=o.buttons[+b.dataset.i].fn;f&&f();bye()});
 $('#toasts').appendChild(t);document.body.classList.add('toasting');setTimeout(bye,o.ms||8000);return t}

/* ---------- timer ---------- */
const T={total:180,left:180,run:false,end:0,label:''};
function fmt(s){s=Math.max(0,Math.ceil(s));return Math.floor(s/60)+':'+String(s%60).padStart(2,'0')}
function paintT(){$('#tTime').textContent=fmt(T.left);$('#tRing').style.strokeDashoffset=(326.7*(1-T.left/T.total)).toFixed(1);$('#tGo').textContent=T.run?'Pause':(T.left<T.total&&T.left>0?'Resume':'Start');
 $('#tLab').textContent=T.label;$$('#timer [data-tset]').forEach(b=>b.classList.toggle('on',+b.dataset.tset===T.total));
 const mini=$('#tMini');const show=(T.run||(T.left<T.total&&T.left>0))&&!$('#timer').classList.contains('on');mini.classList.toggle('on',show);mini.innerHTML=show?ico('timer')+fmt(T.left):'';$('#tbTimer').classList.toggle('on',T.run)}
function tloop(){if(!T.run)return;T.left=(T.end-Date.now())/1000;if(T.left<=0){T.left=0;T.run=false;ding()}paintT();if(T.run)requestAnimationFrame(tloop)}
function tset(s,label){T.total=s;T.left=s;T.run=false;if(label!=null)T.label=label;paintT()}
function tgo(){if(T.run){T.run=false;T.left=(T.end-Date.now())/1000;paintT();return}if(T.left<=0)T.left=T.total;T.end=Date.now()+T.left*1000;T.run=true;audio();paintT();tloop()}
function showTimer(on){$('#timer').classList.toggle('on',on==null?!$('#timer').classList.contains('on'):on);paintT()}
let AC=null;function audio(){try{AC=AC||new (window.AudioContext||window.webkitAudioContext)();AC.resume&&AC.resume()}catch(e){}return AC}
function ding(){const c=audio();if(c)[0,.22,.44,.9,1.12,1.34].forEach((t,i)=>{const o=c.createOscillator(),g=c.createGain();o.type='sine';o.frequency.value=[784,988,1175][i%3];g.gain.setValueAtTime(0,c.currentTime+t);g.gain.linearRampToValueAtTime(.2,c.currentTime+t+.02);g.gain.exponentialRampToValueAtTime(.001,c.currentTime+t+.5);o.connect(g);g.connect(c.destination);o.start(c.currentTime+t);o.stop(c.currentTime+t+.55)});
 showTimer(true);const tm=$('#timer');tm.classList.remove('alarm');void tm.offsetWidth;tm.classList.add('alarm');
 toast({priority:1,k:'sun',icon:'timer',app:'Alarms & Clock',title:'Time’s up',text:T.label||fmt(T.total)+' timer',buttons:[{t:'Restart',fn:()=>{tset(T.total);tgo()}},{t:'Dismiss',pri:1}]})}

/* ---------- ink ---------- */
const INK={};let inkOn=false,inkTool='#1b1a19',drawing=null,pts=[];
function setInk(on){inkOn=on==null?!inkOn:on;document.body.classList.toggle('inking',inkOn);$('#tbInk').classList.toggle('on',inkOn);if(inkOn&&view!=='app'){openBoard();}}
function saveInk(){if(cur)INK[cur]=$('#ink').innerHTML}
function loadInk(){$('#ink').innerHTML=INK[cur]||''}
function pathD(p){if(p.length<2)return `M${p[0][0]} ${p[0][1]}l.1 .1`;let d=`M${p[0][0]} ${p[0][1]}`;for(let i=1;i<p.length-1;i++){const mx=(p[i][0]+p[i+1][0])/2,my=(p[i][1]+p[i+1][1])/2;d+=` Q${p[i][0]} ${p[i][1]} ${mx.toFixed(1)} ${my.toFixed(1)}`}const l=p[p.length-1];return d+` L${l[0]} ${l[1]}`}
function inkXY(e){const r=$('#ink').getBoundingClientRect();return[+((e.clientX-r.left)/SC).toFixed(1),+((e.clientY-r.top)/SC).toFixed(1)]}
function eraseAt(e){const el=document.elementFromPoint(e.clientX,e.clientY);if(el&&el.tagName==='path'&&el.closest('#ink'))el.remove()}
function wireInk(){const sv=$('#ink');
 sv.addEventListener('pointerdown',e=>{if(!inkOn)return;e.preventDefault();if(inkTool==='erase'){drawing='erase';eraseAt(e);return}
  sv.setPointerCapture(e.pointerId);pts=[inkXY(e)];const p=document.createElementNS('http://www.w3.org/2000/svg','path');
  if(inkTool==='hl'){p.setAttribute('stroke','#FFE24A');p.setAttribute('stroke-width','24');p.setAttribute('opacity','.45');p.style.mixBlendMode='multiply'}else{p.setAttribute('stroke',inkTool);p.setAttribute('stroke-width','5')}
  p.setAttribute('d',pathD(pts));sv.appendChild(p);drawing=p});
 sv.addEventListener('pointermove',e=>{if(!drawing)return;if(drawing==='erase'){eraseAt(e);return}pts.push(inkXY(e));drawing.setAttribute('d',pathD(pts))});
 const end=()=>{drawing=null;saveInk()};sv.addEventListener('pointerup',end);sv.addEventListener('pointercancel',end);
 $$('#inkbar [data-ink]').forEach(b=>b.onclick=()=>{const v=b.dataset.ink;
  if(v==='close'){setInk(false);return}if(v==='clear'){$('#ink').innerHTML='';saveInk();return}
  inkTool=v;document.body.classList.toggle('erasing',v==='erase');$$('#inkbar [data-ink]').forEach(x=>x.classList.toggle('on',x===b))})}
function openBoard(){const b=S.find(x=>x.special==='board');if(!b)return;if(view==='app')render(b.n,'in-r');else openApp(b.n);setTimeout(()=>setInk(true),50)}

/* ---------- sticky notes ---------- */
const NC=['n-y','n-g','n-p','n-b','n-v','n-o'];
function dragify(note,onEnd){const h=$('.nh',note);h.addEventListener('pointerdown',e=>{if(e.target.closest('button'))return;e.preventDefault();h.setPointerCapture(e.pointerId);note.style.zIndex=++Z;
 const sx=e.clientX,sy=e.clientY,ox=parseFloat(note.style.left)||0,oy=parseFloat(note.style.top)||0;h.style.cursor='grabbing';
 const mv=ev=>{note.style.left=(ox+(ev.clientX-sx)/SC)+'px';note.style.top=(oy+(ev.clientY-sy)/SC)+'px'};const up=()=>{h.removeEventListener('pointermove',mv);h.removeEventListener('pointerup',up);h.style.cursor='';onEnd&&onEnd()};
 h.addEventListener('pointermove',mv);h.addEventListener('pointerup',up)})}
let Z=10;
function noteEl(o,saveFn){const n=document.createElement('div');n.className='note '+(o.c||'n-y');n.style.left=o.x+'px';n.style.top=o.y+'px';n.style.transform=`rotate(${o.r||0}deg)`;
 n.innerHTML=`<div class="nh"><button data-a="col" aria-label="Change colour">${ico('palette')}</button><button data-a="del" aria-label="Delete note">${ico('x')}</button></div><div class="nb" ${o.edit===false?'':'contenteditable="true"'} spellcheck="false">${o.html||''}</div>`;
 $('[data-a=del]',n).onclick=()=>{n.remove();saveFn&&saveFn()};$('[data-a=col]',n).onclick=()=>{const i=NC.indexOf(NC.find(c=>n.classList.contains(c)));n.classList.remove(NC[i]);n.classList.add(NC[(i+1)%NC.length]);saveFn&&saveFn()};
 $('.nb',n).addEventListener('input',()=>saveFn&&saveFn());$('.nb',n).addEventListener('keydown',e=>e.stopPropagation());dragify(n,saveFn);return n}
function saveFloat(){store.set('str-notes',$$('#floatNotes .note').map(n=>({x:parseFloat(n.style.left),y:parseFloat(n.style.top),c:NC.find(c=>n.classList.contains(c)),html:$('.nb',n).innerHTML})))}
function newNote(){const W=frame.clientWidth;const n=noteEl({x:W-520-Math.random()*200,y:90+Math.random()*120,c:NC[$$('#floatNotes .note').length%NC.length],r:(Math.random()*4-2).toFixed(1)},saveFloat);$('#floatNotes').appendChild(n);setTimeout(()=>$('.nb',n).focus(),60);saveFloat()}

/* ---------- search ---------- */
let seIndex=null;
function buildIndex(){const d=document.createElement('div');seIndex=[];lessonNums().forEach(l=>LESSONS[l].slides.filter(s=>!s.special).forEach(s=>{d.innerHTML=s.html(H).replace(/>/g,'> ');$$('.sr,.tap,.ui,button.btn,.wt,.added,form,.hintx',d).forEach(x=>x.remove());seIndex.push({l,n:s.n,t:s.title||s.t,k:s.k,icon:s.icon,txt:d.textContent.replace(/\s+/g,' ').trim()})}))}
function openSearch(){const se=$('#search');if(!seIndex)buildIndex();se.classList.add('on');toggleAC(false);$('#seIn').value='';paintSearch('');setTimeout(()=>$('#seIn').focus(),60)}
function closeSearch(){$('#search').classList.remove('on')}
function hi(t,q){if(!q)return esc(t);const i=t.toLowerCase().indexOf(q.toLowerCase());if(i<0)return esc(t);return esc(t.slice(0,i))+'<mark>'+esc(t.slice(i,i+q.length))+'</mark>'+esc(t.slice(i+q.length))}
function snip(t,q){const i=t.toLowerCase().indexOf(q.toLowerCase());if(i<0)return t.slice(0,90);const a=Math.max(0,i-30);return(a?'…':'')+t.slice(a,a+100)}
function paintSearch(q){q=q.trim();const b=$('#seBody');let res=seIndex;
 if(q){const ql=q.toLowerCase();res=seIndex.map(r=>({r,sc:(r.t.toLowerCase().includes(ql)?2:0)+(r.txt.toLowerCase().includes(ql)?1:0)})).filter(x=>x.sc).sort((a,b)=>b.sc-a.sc||a.r.n-b.r.n).map(x=>x.r)}
 const row=r=>`<button class="se-row k-${r.k}" data-go="${r.l}:${r.n}"><span class="ri">${ico(r.icon||'book')}</span><span><span>${hi(r.t,q)}</span>${q?`<span class="rs">${hi(snip(r.txt,q),q)}</span>`:''}</span><span class="rn">L${r.l} · ${r.n}</span></button>`;
 if(!q){b.innerHTML=`<div class="se-sec">Key words</div><div class="se-words">${(L&&L.keywords||[]).map(k=>`<button data-go="${L.num}:${k.n}">${esc(k.w)}</button>`).join('')}</div><div class="se-sec">${L?'Lesson '+L.num+' slides':'All slides'}</div>${res.filter(r=>!L||r.l===L.num).map(row).join('')}`}
 else if(!res.length){b.innerHTML=`<div class="se-sec">No results for “${esc(q)}”</div>`}
 else{const f=res[0];b.innerHTML=`<div class="se-sec">Best match</div><button class="se-best k-${f.k}" data-go="${f.l}:${f.n}"><span class="bi">${ico(f.icon||'book')}</span><span><div class="bt">${hi(f.t,q)}</div><div class="bs">Lesson ${f.l} · Slide ${f.n} · ${hi(snip(f.txt,q),q)}</div></span></button>${res.length>1?`<div class="se-sec">Slides</div>${res.slice(1).map(row).join('')}`:''}`}
 $$('[data-go]',b).forEach(x=>x.onclick=()=>{closeSearch();const[l,n]=x.dataset.go.split(':').map(Number);jump(n,l)})}

/* ---------- utilities ---------- */
const THEMES=['deep','bright','lime','glass'];
function setPal(p){if(!THEMES.includes(p))p='deep';const B=document.body.classList;B.remove('p-deep','p-bright','p-lime','glass');if(p==='glass')B.add('p-bright','glass');else B.add('p-'+p);store.set('str-pal',p);sizeTiles();$$('[data-pal]').forEach(b=>b.classList.toggle('on',b.dataset.pal===p))}
function cyclePal(){const c=store.get('str-pal','deep');setPal(THEMES[(THEMES.indexOf(c)+1)%THEMES.length])}
function toggleFull(){try{const p=!document.fullscreenElement?document.documentElement.requestFullscreen():document.exitFullscreen();p&&p.catch&&p.catch(()=>{})}catch(e){}}
function qaPaint(){const m={night:document.body.classList.contains('night'),focus:focusAssist,ink:inkOn,timer:$('#timer').classList.contains('on'),full:!!document.fullscreenElement,blank:false};$$('.qa [data-act]').forEach(b=>b.classList.toggle('on',!!m[b.dataset.act]))}
function util(u,tile){if(u==='timer')showTimer(true);else if(u==='note')newNote();else if(u==='board'){openBoard()}else if(u==='ac')toggleAC(true);else if(u==='search')openSearch()}
function act(a,el){
 switch(a){case'home':case'tv':if(view==='app')goStart();else if(mode==='lesson')goHome();else resume();break;case'up':goHome();break;
  case'back':if(view==='app'){if(byN[cur].special)goStart();else prev()}break;
  case'search':$('#search').classList.contains('on')?closeSearch():openSearch();break;
  case'ac':toggleAC();break;case'timer':showTimer();break;case'timerclose':showTimer(false);break;
  case'ink':if(view==='app')setInk();else openBoard();break;case'note':newNote();break;case'board':openBoard();break;
  case'night':document.body.classList.toggle('night');break;case'focus':focusAssist=!focusAssist;if(focusAssist)$$('#toasts .toast').forEach(t=>t.remove());break;
  case'blank':document.body.classList.toggle('blank');break;case'full':toggleFull();break;case'lock':relock();break;case'pal':cyclePal();break;case'resume':resume();break}
 qaPaint()}

/* ---------- lock ---------- */
function unlock(gesture){if(view!=='lock')return;if(gesture&&!document.fullscreenElement){try{const p=document.documentElement.requestFullscreen();p&&p.catch&&p.catch(()=>{})}catch(e){}}
 $('#lock').classList.add('gone');view='start';const st=$('#start');st.classList.remove('back');$$('.t').forEach(t=>{t.style.animation='none';void t.offsetWidth;t.style.animation=''});audio();
 setTimeout(()=>{const t=$('.t');t&&t.focus({preventScroll:true})},700)}
function relock(){if(view==='app')goStart();closeSearch();toggleAC(false);setInk(false);view='lock';const lk=$('#lock');lk.classList.remove('gone');lk.focus()}
function wireLock(){const lk=$('#lock');let sy=null;
 lk.addEventListener('pointerdown',e=>{sy=e.clientY});lk.addEventListener('pointermove',e=>{if(sy!=null&&e.buttons){const d=Math.min(0,(e.clientY-sy)/SC);lk.style.transition='none';lk.style.transform=`translateY(${d}px)`}});
 lk.addEventListener('pointerup',()=>{lk.style.transition='';lk.style.transform='';sy=null;unlock(true)})}

/* ---------- keys ---------- */
function keys(e){const tg=e.target;const typing=tg&&(tg.tagName==='INPUT'||tg.tagName==='TEXTAREA'||tg.isContentEditable);
 if(typing){if(e.key==='Escape'){tg.blur();if(tg.id==='seIn')closeSearch()}else if(e.key==='Enter'&&tg.id==='seIn'){const f=$('#seBody [data-go]');if($('#seIn').value.trim()&&f)f.click()}return}
 if(e.metaKey||e.ctrlKey||e.altKey)return;const k=e.key;
 if(document.body.classList.contains('blank')&&k!=='F'&&k!=='f'){if(['b','B','.','Escape'].includes(k)){document.body.classList.remove('blank');e.preventDefault()}return}
 if(view==='lock'){if(k!=='Tab'&&k!=='Shift'){e.preventDefault();unlock(true)}return}
 if(view==='start'&&(k==='Enter'||k===' ')&&tg&&tg.classList&&tg.classList.contains('t'))return;
 if(view==='app'&&tg&&tg.tagName==='BUTTON'&&(k==='Enter'||k===' ')&&!tg.closest('#taskbar'))return;
 switch(k){case'ArrowRight':case'PageDown':case' ':case'Enter':e.preventDefault();revealOrNext();break;
  case'ArrowLeft':case'PageUp':e.preventDefault();if(view==='app')prev();break;
  case'Escape':if($('#search').classList.contains('on'))closeSearch();else if($('#ac').classList.contains('on'))toggleAC(false);else if(inkOn)setInk(false);else if(view==='app')goStart();else if(view==='start'&&mode==='lesson')goHome();break;
  case'Home':if(view==='app')goStart();else goHome();break;case'n':case'N':toggleAC();break;case't':case'T':showTimer();break;case'p':case'P':act('ink');break;
  case'/':e.preventDefault();openSearch();break;case'f':case'F':toggleFull();break;case'b':case'B':case'.':document.body.classList.toggle('blank');break;
  case'l':case'L':relock();break;case's':case'S':newNote();break;case'w':case'W':openBoard();break}
 qaPaint()}

/* ---------- helpers given to lessons ---------- */
const H=STR.H={ico,esc,img:n=>'img/'+n,toast,timer:(s,label)=>{tset(s,label);showTimer(true)},timerGo:()=>{if(!T.run)tgo()},burst,noteEl,NC,store,$,$$,SC:()=>SC,next,jump,goStart,relock,narr:runNarr,lessonNum:()=>L.num,lesson:()=>L};

/* ---------- boot ---------- */
STR.boot=function(){
 const ns=lessonNums();if(!ns.length)return;frame=document.getElementById('frame');
 ns.forEach(n=>{const Ls=LESSONS[n];Ls.slides.push({n:900,special:'board',t:'Whiteboard',title:'Whiteboard',k:'sky',icon:'board',notes:'',html:()=>`<div class="wrap" style="max-height:none"><div class="grow card acr" style="background:rgba(255,255,255,.88);background-image:radial-gradient(rgba(0,0,0,.12) 1.2px,transparent 1.4px);background-size:28px 28px"></div></div>`})});
 setLesson(LESSONS[store.get('str-lesson',ns[0])]?store.get('str-lesson',ns[0]):ns[0]);mode=ns.length>1?'home':'lesson';
 shell();setPal(store.get('str-pal','deep'));fit();addEventListener('resize',fit);
 wireStartFx();buildStart();tickClock();setInterval(tickClock,5000);wireInk();wireLock();paintT();
 document.title=SERIES.app;
 frame.addEventListener('click',e=>{const b=e.target.closest('[data-act]');if(b){e.stopPropagation();act(b.dataset.act,b)}const p=e.target.closest('[data-pal]');if(p)setPal(p.dataset.pal)});
 $('#edgeL').onclick=prev;$('#edgeR').onclick=next;$('#rvh').onclick=()=>revealNext();
 $('#acNext').onclick=()=>{if(view==='app'&&!byN[cur].special&&cur<count())next();else goStart()};
 $$('#timer [data-tset]').forEach(b=>b.onclick=()=>tset(+b.dataset.tset));$('#tGo').onclick=tgo;$('#tReset').onclick=()=>tset(T.total);
 $('#seIn').addEventListener('input',e=>paintSearch(e.target.value));
 addEventListener('keydown',keys);document.addEventListener('fullscreenchange',qaPaint);
 setInterval(()=>{if(view==='app'&&cur&&!byN[cur].special)store.set('str-last-L'+L.num,cur)},2000);
 store.get('str-notes',[]).forEach(o=>$('#floatNotes').appendChild(noteEl(o,saveFloat)));
 $('#lock').focus();
 const h=location.hash;let m;
 if((m=h.match(/^#l(\d+)s(\d+)/))&&LESSONS[+m[1]]){$('#lock').classList.add('gone');view='start';setLesson(+m[1]);mode='lesson';buildStart();openApp(+m[2])}
 else if((m=h.match(/^#l(\d+)$/))&&LESSONS[+m[1]]){$('#lock').classList.add('gone');view='start';setLesson(+m[1]);mode='lesson';buildStart()}
 else if((m=h.match(/^#s(\d+)/))&&byN[+m[1]]){$('#lock').classList.add('gone');view='start';mode='lesson';buildStart();openApp(+m[1])}
 else if(h==='#start'||h==='#home'){$('#lock').classList.add('gone');view='start'}
};
})();
