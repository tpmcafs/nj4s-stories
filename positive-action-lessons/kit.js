/* Shared interactive widgets for Lessons 1–5 (Positive Action unit) */
window.KIT_INIT=function(H){
const {ico,P}=H;
const $=(q,r=document)=>r.querySelector(q),$$=(q,r=document)=>[...r.querySelectorAll(q)];
const RM=matchMedia('(prefers-reduced-motion: reduce)');
const KC=['#0078D4','#FFB900','#E81123','#107C10','#8764B8','#00B294','#F7630C','#E3008C'];
const esc=s=>String(s).replace(/&/g,'&amp;').replace(/"/g,'&quot;');

/* extra icons (48-unit, stroked) */
Object.assign(P,{
 rules:'<rect x="10" y="7" width="28" height="35" rx="2"/><path d="M17 16h14M17 23h14M17 30h9"/><path d="M18 4h12v6H18z"/>',
 hand:'<path d="M18 26V11a3 3 0 0 1 6 0v12"/><path d="M24 22V8a3 3 0 0 1 6 0v15"/><path d="M30 22v-9a3 3 0 0 1 6 0v15c0 8-5 14-12 14-5 0-8-2-11-7l-5-8a3 3 0 0 1 5-3l3 4"/>',
 run:'<circle cx="30" cy="9" r="4"/><path d="M14 22l8-6 7 3 4 8 7 2"/><path d="M22 16l-3 12 8 5-3 11"/><path d="M19 28l-6 8H6"/>',
 clean:'<path d="M14 20h20l-2 22H16z"/><path d="M19 20v-6a5 5 0 0 1 10 0v6"/><circle cx="34" cy="9" r="2.5"/><circle cx="40" cy="15" r="2"/><circle cx="12" cy="11" r="2"/>',
 bulb:'<path d="M17 30a12 12 0 1 1 14 0v5H17z"/><path d="M19 40h10M21 44h6"/><path d="M24 22v8M20 25h8"/>',
 puzzle:'<path d="M8 16h10a4 4 0 1 1 8 0h10v10a4 4 0 1 0 0 8v8H8V34a4 4 0 1 0 0-8z"/>',
 ear:'<path d="M14 20a11 11 0 0 1 22 0c0 7-6 9-6 15a6 6 0 0 1-11 3"/><path d="M20 21a5 5 0 0 1 10 0c0 3-3 4-4 6"/>',
 pen:'<path d="M32 7l9 9-23 23H9v-9z"/><path d="M27 12l9 9"/>',
 stop:'<path d="M17 5h14l10 10v14L31 39H17L7 29V15z"/><path d="M15 22h18"/>',
 whisper:'<path d="M8 10h22a4 4 0 0 1 4 4v11a4 4 0 0 1-4 4H18l-7 6v-6H8a4 4 0 0 1-4-4V14a4 4 0 0 1 4-4z"/><path d="M38 17q4 4 0 8M42 13q7 8 0 16"/>',
 mirror:'<ellipse cx="24" cy="19" rx="12" ry="15"/><path d="M24 34v9M17 43h14"/><path d="M18 14q3-4 7-4"/>',
 bolt:'<path d="M27 4L11 27h12l-3 17 17-24H25z"/>',
 frustrated:'<circle cx="24" cy="24" r="17"/><path d="M16 31q8-5 16 0"/><path d="M15 17l6 3M33 17l-6 3"/><path d="M38 7l3-3M41 11h4"/>',
 embarrassed:'<circle cx="24" cy="24" r="17"/><path d="M19 31h10"/><path d="M17 20h4M27 20h4"/><circle cx="15" cy="27" r="3"/><circle cx="33" cy="27" r="3"/>',
 calm:'<path d="M4 30q6-6 12 0t12 0 12 0 8 0"/><path d="M4 38q6-6 12 0t12 0 12 0 8 0"/><circle cx="24" cy="14" r="6"/>',
 walk:'<circle cx="26" cy="7" r="4"/><path d="M24 14l-4 13 7 5v11"/><path d="M20 27l-5 16"/><path d="M23 17l-8 6M26 18l6 6 5-1"/>',
 count:'<rect x="7" y="9" width="34" height="30" rx="3"/><path d="M15 19l4-3v14M26 18a4 4 0 1 1 6 4l-6 8h8"/>',
 phone:'<rect x="13" y="4" width="22" height="40" rx="4"/><path d="M21 38h6"/><path d="M18 14h12M18 20h8"/>',
 balance:'<path d="M24 6v36M14 42h20M8 14h32"/><path d="M8 14l-5 12h10zM40 14l-5 12h10z"/>',
 key:'<circle cx="15" cy="24" r="8"/><path d="M23 24h20M37 24v6M42 24v4"/>',
 handshake:'<path d="M4 18l8-4 8 4 6-3 6 3 8-4 8 4"/><path d="M12 14v14l10 9a3 3 0 0 0 4 0l10-9V14"/><path d="M20 22l6 5"/>',
 globe:'<circle cx="24" cy="24" r="18"/><path d="M6 24h36M24 6c-7 8-7 28 0 36M24 6c7 8 7 28 0 36"/>',
 eye:'<path d="M3 24s8-13 21-13 21 13 21 13-8 13-21 13S3 24 3 24z"/><circle cx="24" cy="24" r="6"/>',
 thumb:'<path d="M14 22h-6v18h6zM14 22l8-14c3 0 5 2 4 6l-2 7h12a3 3 0 0 1 3 4l-4 13a3 3 0 0 1-3 2H14"/>',
 group:'<circle cx="24" cy="13" r="5"/><circle cx="11" cy="19" r="4"/><circle cx="37" cy="19" r="4"/><path d="M15 40c0-9 4-15 9-15s9 6 9 15"/><path d="M4 38c0-7 3-11 7-11 2 0 4 1 5 3M44 38c0-7-3-11-7-11-2 0-4 1-5 3"/>',
 school:'<path d="M4 18L24 7l20 11-20 11z"/><path d="M12 23v10c4 4 20 4 24 0V23"/><path d="M44 18v12"/>',
 cross:'<path d="M12 12l24 24M36 12L12 36"/>',
 thanks:'<path d="M24 41S7 31 7 18a9 9 0 0 1 17-4 9 9 0 0 1 17 4c0 13-17 23-17 23z"/><path d="M17 21l5 5 9-9"/>'
});

/* A. floating word bubbles (tap to light; special word shakes then gets crossed out) */
function bubbles(words,{special='',struck=false}={}){
  return `<div class="bub-wrap" data-bub>${words.map((w,k)=>`<button class="bub ${w===special?'sp':''} ${w===special&&struck?'struck':''}" style="--k:${KC[k%KC.length]};--d:${(k*.37)%2.4}s;--t:${5+(k%4)}s"><span>${w}</span></button>`).join('')}</div>`}

/* B. stop / choose / go traffic light */
function light(rows){
  const C=['#E81123','#FFB900','#13A10E'];
  return `<div class="tl3" data-tl3><div class="tl3-box" aria-hidden="true">${C.map((c,k)=>`<button class="lamp" data-k="${k}" style="--lc:${c}" tabindex="-1"></button>`).join('')}</div><div class="tl3-rows">${rows.map((r,k)=>`<button class="tl3-row" data-k="${k}" style="--lc:${C[k]}"><span class="dot"></span><span class="txt">${r}</span></button>`).join('')}</div></div>`}

/* C. spinner wheel that picks one of the scenario cards */
function wheel(labels){
  const n=labels.length,R=150,cx=160,cy=160;let segs='';
  for(let k=0;k<n;k++){const a0=(k/n)*2*Math.PI-Math.PI/2,a1=((k+1)/n)*2*Math.PI-Math.PI/2,am=(a0+a1)/2;
    const p=(a,r)=>[cx+r*Math.cos(a),cy+r*Math.sin(a)];const [x0,y0]=p(a0,R),[x1,y1]=p(a1,R),[tx,ty]=p(am,R*.62);
    segs+=`<path d="M${cx} ${cy}L${x0} ${y0}A${R} ${R} 0 ${n<=2?1:0} 1 ${x1} ${y1}Z" fill="${KC[k%KC.length]}" stroke="#fff" stroke-width="3"/><text x="${tx}" y="${ty+12}" text-anchor="middle" font-size="38" font-weight="700" fill="#fff">${labels[k]}</text>`}
  return `<div class="wheel" data-wheel="${n}"><div class="wheel-ptr" aria-hidden="true"></div><svg viewBox="0 0 320 320" class="wheel-svg" role="img" aria-label="Scenario wheel"><g class="wrot">${segs}</g><circle cx="160" cy="160" r="30" fill="#fff"/></svg><button class="wheel-go" aria-label="Spin the wheel">${ico('cycle','',3)}</button></div>`}

/* D. bullying roles diagram (Bully → Target ← Bystander, Defender breaks the cycle) */
function roles(defs){
  const R=84,RT=96,T=[380,270];
  const N=[['Bully',110,270,'#C50F1F',0],['Bystander',650,110,'#8764B8',2],['Defender',650,430,'#107C10',3]];
  const fig=`<circle cx="0" cy="-12" r="12"/><path d="M-22 26c0-15 9-24 22-24s22 9 22 24"/>`;
  const arrow=([w,x,y],k)=>{const dx=T[0]-x,dy=T[1]-y,d=Math.hypot(dx,dy),ux=dx/d,uy=dy/d;const x1=x+ux*(R+10),y1=y+uy*(R+10),x2=T[0]-ux*(RT+16),y2=T[1]-uy*(RT+16);
    return `<path class="rl ${k===2?'def':''}" d="M${x1.toFixed(1)} ${y1.toFixed(1)}L${x2.toFixed(1)} ${y2.toFixed(1)}" marker-end="url(#rah)"/>`+(k===2?`<g class="shield" transform="translate(${((x1+x2)/2).toFixed(1)} ${((y1+y2)/2).toFixed(1)})"><path d="M0 -24l19 7v13c0 13-8 21-19 25-11-4-19-12-19-25v-13z"/><path d="M-8 2l6 6 10-11" fill="none" stroke="#fff" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/></g>`:'')};
  const node=(w,x,y,c,r,rad,tgt)=>`<g class="rnode${tgt?' tgt':''}" data-r="${r}" tabindex="0" role="button" aria-label="${w}" style="--rc:${c}"><circle class="rc" cx="${x}" cy="${y}" r="${rad}"/><g transform="translate(${x} ${y-14})" class="rfig">${fig}</g><text x="${x}" y="${y+46}" text-anchor="middle" dominant-baseline="middle">${w}</text></g>`;
  return `<svg class="roles" viewBox="0 0 760 580" role="img" aria-label="Roles in bullying: bully, target, bystander, defender" data-defs='${JSON.stringify(defs).replace(/'/g,'&#39;')}'>
   <defs><marker id="rah" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="4.5" markerHeight="4.5" orient="auto"><path d="M0 0L10 5 0 10z" fill="#fff"/></marker></defs>
   ${N.map(arrow).join('')}
   ${node('Target',T[0],T[1],'#fff',1,RT,true)}
   ${N.map(([w,x,y,c,r])=>node(w,x,y,c,r,R)).join('')}
   <text x="650" y="548" text-anchor="middle" class="rsub">(breaks the cycle)</text>
  </svg>`}

/* E. TAF detail rows synced with the circle */
function tafRows(rows){return `<div class="taf-rows" data-tafrows>${rows.map((r,k)=>`<button class="taf-row" data-k="${k}">${r}</button>`).join('')}</div>`}

/* F. tap counter (show of hands / please stand) */
function counter(icon='hand'){return `<button class="counter" data-counter aria-label="Tap to count">${ico(icon,'',2.4)}<span class="cnum">0</span><span class="cfig" aria-hidden="true"></span></button>`}

/* G. balloon: ignoring vs managing */
function balloon(){return `<div class="balloon" data-balloon aria-hidden="true"><svg viewBox="0 0 200 260"><g class="bal"><ellipse cx="100" cy="100" rx="70" ry="84"/><path d="M92 182h16l-8 10z"/></g><path class="str" d="M100 192q-12 22 4 40t-6 26" fill="none"/></svg><div class="pop"></div></div>`}

/* H. breathing / count-to-10 bubble */
function breath(){return `<button class="breath" data-breath aria-label="Tap to count"><span class="b1"></span><span class="b2"></span><span class="bn">1</span></button>`}

/* I. rumor network */
function rumor(phrases){
  const pts=[[90,300],[190,210],[200,370],[300,120],[320,290],[330,430],[440,200],[450,360],[560,110],[560,270],[580,420],[680,200],[690,340],[100,150],[420,40]];
  const links=[[0,1],[0,2],[1,3],[1,4],[2,4],[2,5],[3,6],[4,6],[4,7],[5,7],[6,8],[6,9],[7,9],[7,10],[8,11],[9,11],[9,12],[10,12],[13,1],[13,0],[14,3],[14,8]];
  return `<div class="rumor" data-rumor><svg viewBox="0 0 780 480" role="img" aria-label="A rumor spreading from person to person">
   ${links.map(([a,b])=>`<line class="rk" data-a="${a}" data-b="${b}" x1="${pts[a][0]}" y1="${pts[a][1]}" x2="${pts[b][0]}" y2="${pts[b][1]}"/>`).join('')}
   ${pts.map(([x,y],k)=>`<g class="rp" data-k="${k}" transform="translate(${x} ${y})"><circle r="26"/><circle cy="-6" r="8" class="hd"/><path d="M-13 14c0-9 6-13 13-13s13 4 13 13" class="bd"/></g>`).join('')}
  </svg><div class="rbubs">${phrases.map((p,k)=>`<span class="rb" data-k="${k}">${p}</span>`).join('')}</div><button class="rgo">${ico('whisper','',3)}</button></div>`}

/* J. include circle: one person outside the group */
function include(mode='out'){
  const R=120,cx=250,cy=230,n=7;let ppl='';
  for(let k=0;k<n;k++){const a=-Math.PI/2+k*2*Math.PI/n;ppl+=`<g class="ip" style="--x:${(cx+R*Math.cos(a)).toFixed(1)}px;--y:${(cy+R*Math.sin(a)).toFixed(1)}px;--k:${KC[k%KC.length]}"><circle r="24"/><circle cy="-5" r="8" class="hd"/><path d="M-12 14c0-8 5-12 12-12s12 4 12 12" class="bd"/></g>`}
  return `<div class="incl ${mode==='in'?'can':''}" data-incl><svg viewBox="0 0 500 460" role="img" aria-label="${mode==='in'?'Tap the person outside the circle to include them':'One person left out of the group'}"><circle class="ring" cx="${cx}" cy="${cy}" r="${R}"/>${ppl}<g class="ip lone" style="--x:450px;--y:400px;--k:#FFB900"><circle r="24"/><circle cy="-5" r="8" class="hd"/><path d="M-12 14c0-8 5-12 12-12s12 4 12 12" class="bd"/></g></svg></div>`}

/* K. join-the-circle (class safety circle) */
function joinCircle(max=14){return `<div class="join" data-join="${max}"><svg viewBox="0 0 440 440" role="img" aria-label="Tap to add people to our class circle"><circle class="jr" cx="220" cy="220" r="160"/><g class="jp"></g><g class="jc">${P.heart?`<g transform="translate(196 196)" fill="none" stroke="#fff" stroke-width="3">${P.heart}</g>`:''}</g></svg></div>`}

/* L. sorter: Positive Pat vs Negative Ned */
function sorter(items,left,right){
  return `<div class="sorter" data-sorter><div class="scol l"><div class="sh">${left}</div><div class="sbin" data-bin="l"></div></div><div class="spool">${items.map(([t,side],k)=>`<button class="chip" data-side="${side}" style="--d:${k*.08}s">${t}</button>`).join('')}</div><div class="scol r"><div class="sh">${right}</div><div class="sbin" data-bin="r"></div></div></div>`}

/* M. own it / pass it tally buttons */
function tally(a,b,ia='check',ib='forward'){return `<div class="tally"><button class="tb own" data-tally>${ico(ia,'',3)}<span class="tl">${a}</span><span class="tn">0</span></button><button class="tb pass" data-tally>${ico(ib,'',3)}<span class="tl">${b}</span><span class="tn">0</span></button></div>`}

/* N. vote chips with live counts */
function votes(items){return `<div class="votes">${items.map(([w,i],k)=>`<button class="vote" data-vote style="--k:${KC[k%KC.length]}">${ico(i,'',2.4)}<span class="vw">${w}</span><span class="vbar"><i></i></span><span class="vn">0</span></button>`).join('')}</div>`}

/* ------------- wiring ------------- */
function burstAt(el,tb,count=16,dist=140){const r=el.getBoundingClientRect();tb(r.left+r.width/2,r.top+r.height/2,count,dist)}
function wire(pg,X){const {tileBurst,jump}=X;
  /* shrink long flip-card backs so text never spills out */
  const fitBacks=()=>$$('.fc-back',pg).forEach(f=>{const b=$('.big',f);if(!b)return;b.style.fontSize='';const cs=getComputedStyle(f);const avail=f.clientHeight-parseFloat(cs.paddingTop)-parseFloat(cs.paddingBottom)-($('.ico',f)?Math.min(70,f.clientHeight*.18):0);let fs=parseFloat(getComputedStyle(b).fontSize),i=0;while(b.offsetHeight>avail&&i<40&&fs>13){fs*=.93;b.style.fontSize=fs+'px';i++}});
  requestAnimationFrame(fitBacks);setTimeout(fitBacks,750);const ro=new ResizeObserver(()=>{if(!pg.isConnected){ro.disconnect();return}fitBacks()});$$('.fc',pg).forEach(c=>ro.observe(c));
  /* bubbles */
  $$('[data-bub] .bub',pg).forEach(b=>b.addEventListener('click',()=>{
    if(b.classList.contains('sp')){b.classList.remove('shake');void b.offsetWidth;b.classList.add('shake');setTimeout(()=>b.classList.add('struck'),500);return}
    b.classList.toggle('on');if(b.classList.contains('on'))burstAt(b,tileBurst,12,110)}));
  /* traffic light */
  $$('[data-tl3]',pg).forEach(w=>{const lamps=$$('.lamp',w),rows=$$('.tl3-row',w);let man=false,k=-1;
    const set=i=>{lamps.forEach((l,j)=>l.classList.toggle('on',j===i));rows.forEach((r,j)=>{r.classList.toggle('on',j===i);if(j===i)r.classList.add('seen')})};
    const auto=setInterval(()=>{if(!pg.isConnected){clearInterval(auto);return}if(man||RM.matches)return;k=(k+1)%3;set(k)},1800);
    const pick=i=>{man=true;set(i);burstAt(rows[i],tileBurst,14,120)};
    lamps.forEach((l,i)=>l.addEventListener('click',()=>pick(i)));rows.forEach((r,i)=>r.addEventListener('click',()=>pick(i)))});
  /* wheel */
  $$('[data-wheel]',pg).forEach(w=>{const n=+w.dataset.wheel,g=$('.wrot',w);let rot=0,busy=false;const cards=$$('[data-scn]',pg);
    const spin=()=>{if(busy)return;busy=true;cards.forEach(c=>c.classList.remove('picked'));const pick=Math.floor(Math.random()*n);
      const seg=360/n;const target=360-(pick*seg+seg/2);rot+=(5*360)+((target-(rot%360))+360)%360;
      g.style.transition=RM.matches?'none':'transform 3.2s cubic-bezier(.15,.85,.2,1)';g.style.transform=`rotate(${rot}deg)`;
      setTimeout(()=>{busy=false;const c=cards[pick];if(c){c.classList.add('picked');burstAt(c,tileBurst,22,170)}},RM.matches?50:3250)};
    $('.wheel-go',w).addEventListener('click',spin);$('.wheel-svg',w).addEventListener('click',spin);
    cards.forEach((c,i)=>c.addEventListener('click',()=>{cards.forEach(x=>x.classList.toggle('picked',x===c))}))});
  /* roles */
  $$('.roles',pg).forEach(svg=>{const D=JSON.parse(svg.dataset.defs);const box=$('#ringDef',pg);const ns=$$('.rnode',svg);let k=0;const order=[0,1,2,3];
    const show=(r,open)=>{ns.forEach(x=>x.classList.toggle('on',+x.dataset.r===r));svg.classList.toggle('dim',r>=0);
      if(open&&box){$('.rdef-t',box).textContent=D[r][0];$('.rdef-d',box).textContent=D[r][1];$('.rdef-ico',box).innerHTML='<circle cx="0" cy="-9" r="9"/><path d="M-17 20c0-11 7-18 17-18s17 7 17 18"/>';box.classList.remove('open');void box.offsetWidth;box.classList.add('open')}};
    const auto=setInterval(()=>{if(!pg.isConnected){clearInterval(auto);return}if(RM.matches)return;show(order[k%4],true);k++},2600);show(0,true);k=1;
    ns.forEach(g=>{const f=()=>{clearInterval(auto);show(+g.dataset.r,true);burstAt(g,tileBurst,14,120)};g.addEventListener('click',f);g.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();f()}})})});
  /* TAF rows sync */
  $$('[data-tafrows]',pg).forEach(w=>{const rows=$$('.taf-row',w);const svg=$('.taf',pg);if(!svg)return;const nodes=$$('.node',svg);
    const sync=setInterval(()=>{if(!pg.isConnected){clearInterval(sync);return}const i=nodes.findIndex(n=>n.classList.contains('on'));rows.forEach((r,j)=>r.classList.toggle('on',j===i))},120);
    rows.forEach((r,i)=>r.addEventListener('click',()=>nodes[i]&&nodes[i].dispatchEvent(new MouseEvent('click',{bubbles:true}))))});
  /* counter */
  $$('[data-counter]',pg).forEach(b=>{let n=0;const num=$('.cnum',b),fig=$('.cfig',b);b.addEventListener('click',()=>{n++;num.textContent=n;num.animate([{transform:'scale(1.6)'},{transform:'scale(1)'}],{duration:350,easing:'cubic-bezier(.3,1.6,.5,1)'});
    const i=document.createElement('i');i.style.setProperty('--k',KC[n%KC.length]);i.style.left=(10+Math.random()*80)+'%';fig.appendChild(i);setTimeout(()=>i.remove(),1600);burstAt(b,tileBurst,10,120)})});
  /* balloon */
  $$('[data-balloon]',pg).forEach(bw=>{const g=$('.bal',bw);let s=1,popped=false;const apply=()=>{g.style.transform=`scale(${s})`};
    const up=()=>{if(popped){popped=false;bw.classList.remove('popped');s=1;apply();return}s=Math.min(1.75,s+.15);apply();bw.classList.add('tense');if(s>=1.75){popped=true;bw.classList.add('popped');burstAt(bw,tileBurst,30,220)}};
    const down=()=>{popped=false;bw.classList.remove('popped','tense');s=.8;apply();setTimeout(()=>{s=1;apply()},700);burstAt(bw,tileBurst,8,90)};
    $$('[data-bal]',pg).forEach(c=>c.addEventListener('click',()=>{c.dataset.bal==='up'?up():down();c.animate([{transform:'scale(.96)'},{transform:'scale(1)'}],{duration:250})}));
    bw.addEventListener('click',up)});
  /* breath */
  $$('[data-breath]',pg).forEach(b=>{let n=1;b.addEventListener('click',()=>{n++;if(n>10){n=1;burstAt(b,tileBurst,26,200)}$('.bn',b).textContent=n;$('.bn',b).animate([{transform:'scale(1.4)',opacity:.4},{transform:'scale(1)',opacity:1}],{duration:400,easing:'ease-out'})})});
  /* rumor */
  $$('[data-rumor]',pg).forEach(w=>{const ps=$$('.rp',w),ls=$$('.rk',w),bs=$$('.rb',w);let wave=0;const lit=new Set();
    const step=()=>{if(wave>=5||lit.size===ps.length){lit.clear();wave=0;ps.forEach(p=>p.classList.remove('hot'));ls.forEach(l=>l.classList.remove('hot'));bs.forEach(b=>b.classList.remove('on'));return}
      if(!lit.size){lit.add(0)}else{const add=[];ls.forEach(l=>{const a=+l.dataset.a,b=+l.dataset.b;if(lit.has(a)&&!lit.has(b)){add.push(b);l.classList.add('hot')}else if(lit.has(b)&&!lit.has(a)){add.push(a);l.classList.add('hot')}});add.forEach(x=>lit.add(x))}
      ps.forEach((p,k)=>p.classList.toggle('hot',lit.has(k)));const b=bs[Math.min(wave,bs.length-1)];if(b)b.classList.add('on');wave++;burstAt($('.rgo',w),tileBurst,10,100)};
    $('.rgo',w).addEventListener('click',step);$('svg',w).addEventListener('click',step)});
  /* include */
  $$('[data-incl].can',pg).forEach(w=>{const lone=$('.lone',w),ring=$('.ring',w);const ips=$$('.ip:not(.lone)',w);let inc=false;
    const go=()=>{inc=!inc;w.classList.toggle('done',inc);const n=8,R=inc?150:120;
      [...ips,lone].forEach((p,k)=>{if(!inc&&p===lone){p.style.setProperty('--x','450px');p.style.setProperty('--y','400px');return}const nn=inc?n:7;const a=-Math.PI/2+k*2*Math.PI/nn;if(!inc&&k>=7)return;p.style.setProperty('--x',(250+R*Math.cos(a)).toFixed(1)+'px');p.style.setProperty('--y',(230+R*Math.sin(a)).toFixed(1)+'px')});
      ring.setAttribute('r',R);if(inc)burstAt(w,tileBurst,30,220)};
    w.addEventListener('click',go)});
  /* join circle */
  $$('[data-join]',pg).forEach(w=>{const max=+w.dataset.join,g=$('.jp',w);let n=0;
    const add=()=>{if(n>=max){g.innerHTML='';n=0;w.classList.remove('full');return}n++;g.innerHTML='';for(let k=0;k<n;k++){const a=-Math.PI/2+k*2*Math.PI/max,x=220+160*Math.cos(a),y=220+160*Math.sin(a);
      g.insertAdjacentHTML('beforeend',`<g transform="translate(${x.toFixed(1)} ${y.toFixed(1)})" class="${k===n-1?'new':''}" style="--k:${KC[k%KC.length]}"><circle r="22"/><circle cy="-5" r="7" fill="#fff"/><path d="M-11 13c0-7 5-11 11-11s11 4 11 11" fill="#fff"/></g>`)}
      if(n===max){w.classList.add('full');burstAt(w,tileBurst,34,240)}};
    w.addEventListener('click',add)});
  /* sorter */
  $$('[data-sorter]',pg).forEach(w=>{const chips=$$('.chip',w);chips.forEach(c=>c.addEventListener('click',()=>{if(c.classList.contains('placed'))return;const bin=$(`.sbin[data-bin="${c.dataset.side}"]`,w);
    const r0=c.getBoundingClientRect();bin.appendChild(c);c.classList.add('placed');const r1=c.getBoundingClientRect();
    c.animate([{transform:`translate(${r0.left-r1.left}px,${r0.top-r1.top}px) scale(1.1)`},{transform:'none'}],{duration:600,easing:'cubic-bezier(.3,.7,.2,1)'});burstAt(c,tileBurst,12,100);
    if(chips.every(x=>x.classList.contains('placed'))){w.classList.add('done');setTimeout(()=>burstAt(w,tileBurst,30,240),500)}}))});
  /* tally */
  $$('[data-tally]',pg).forEach(b=>{let n=0;b.addEventListener('click',()=>{n++;$('.tn',b).textContent=n;burstAt(b,tileBurst,16,140);b.animate([{transform:'perspective(800px) rotateX(0)'},{transform:'perspective(800px) rotateX(360deg)'}],{duration:600,easing:'cubic-bezier(.3,.7,.2,1)'})})});
  /* votes */
  {const vs=$$('[data-vote]',pg);if(vs.length){const c=vs.map(()=>0);const paint=()=>{const m=Math.max(1,...c);vs.forEach((v,k)=>{$('.vn',v).textContent=c[k];$('.vbar i',v).style.transform=`scaleX(${c[k]/m})`;v.classList.toggle('top',c[k]===m&&c[k]>0)})};
    vs.forEach((v,k)=>v.addEventListener('click',()=>{c[k]++;paint();burstAt(v,tileBurst,10,100)}))}}
  /* pop chips */
  $$('[data-chip]',pg).forEach(c=>c.addEventListener('click',()=>{c.classList.toggle('on');if(c.classList.contains('on'))burstAt(c,tileBurst,12,110)}));
}
return {votes,bubbles,light,wheel,roles,tafRows,counter,balloon,breath,rumor,include,joinCircle,sorter,tally,wire,KC};
};
