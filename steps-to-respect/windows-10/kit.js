/* Steps to Respect · slide templates shared by lessons 2–10.
   Every template takes the slide's own wording verbatim; layout and icons are the only additions. */
(function(){
const {ico,esc}=STR;
const KS=['sky','coral','violet','lime','sun','teal','pink'];
const pic=(f,st)=>`<div class="pic ent" style="${st||'flex:1'}"><div class="im" style="background-image:url(img/${f})"></div></div>`;
const art=(f,st)=>`<div class="art ent" style="${st||''}"><img src="img/${f}" alt=""></div>`;
const side=(o,def)=>o.img?pic(o.img,o.imgStyle||def):o.art?`<div class="artbox ent" style="${o.artStyle||'flex:.8'}"><img src="img/${o.art}" alt=""></div>`:o.icon?`<div class="col solid sweep ent icotile" style="${o.iconStyle||'flex:.5'}">${ico(o.icon)}</div>`:'';
const rows=(items,step,icon)=>items.map((t,i)=>`<div class="card acr row-card${step?' step':''}"><span class="chip" style="padding:10px">${ico(Array.isArray(icon)?icon[i%icon.length]:(icon||'check'))}</span><div class="lead">${t}</div></div>`).join('');
const bullets=(items,step)=>`<ul class="blist">${items.map(t=>`<li class="${step?'step':''}">${t}</li>`).join('')}</ul>`;

const K=STR.K={KS,pic,art,
/* Title slide */
title:o=>`<div class="wrap">
 <div class="col card acr ent" style="flex:1;justify-content:space-between;padding:52px 56px">
  <div class="kick">${o.kick}</div>
  <div><div class="h1" style="font-size:${o.size||124}px;font-weight:700;line-height:.95;letter-spacing:-.03em">${o.big||'Steps to<br>Respect'}</div>
   <div style="display:flex;gap:8px;margin-top:30px">${KS.map((k,i)=>`<i class="k-${k} ent" style="display:block;width:44px;height:44px;background:var(--k);animation-delay:${.3+i*.07}s"></i>`).join('')}</div></div>
  <div style="display:flex;align-items:center;gap:20px"><img src="img/nj4s.png" alt="NJ4S Bergen Hub" style="height:104px"><div class="kick" style="color:#1b1a19;letter-spacing:.1em">${o.sub||'NEW JERSEY STATEWIDE STUDENT SUPPORT SERVICES - NJ4S'}</div></div>
 </div>${o.img?pic(o.img,'flex:1.05'):side(o)}</div>`,

/* Class objectives grid */
classObj:o=>`<div class="wrap" style="flex-direction:column;gap:24px">
 <div class="ent"><div class="h1">${o.h||'Class Objectives'}</div></div>
 <div class="lgrid" style="grid-template-columns:repeat(${o.items.length>10?6:5},1fr)">${o.items.map(([t,n],i)=>`<div class="lt k-${KS[i%7]}${n===o.today?' today':''}" style="animation-delay:${.15+i*.06}s"><span class="ln">${i+1}</span>${n===o.today?'<span class="badge">TODAY</span>':''}<div class="lname">${t}</div><div class="lsub">${n}</div></div>`).join('')}</div></div>`,

/* Lesson objectives */
lessonObj:o=>`<div class="wrap">
 <div class="col solid sweep ent" style="width:470px;flex:none;padding:44px 46px;justify-content:space-between">
  <div class="kick">${o.tag}</div><div style="font-size:230px;font-weight:200;line-height:.8">${o.num}</div><div class="h2">${o.h}</div></div>
 <div class="col card acr ent" style="flex:1;gap:6px;padding:40px 40px">
  ${o.kick?`<div class="kick" style="margin-bottom:${o.intro?4:12}px">${o.kick}</div>`:''}${o.intro?`<div class="body" style="font-size:22px;margin-bottom:8px">${o.intro}</div>`:''}
  ${o.items.map(t=>`<div class="chk step" role="checkbox" aria-checked="false" tabindex="0" style="font-size:${o.items.length>4?23:26}px"><span class="bx"><svg viewBox="0 0 24 24"><path d="M5 12.5l4.5 4.5L19 7"/></svg></span>${t}</div>`).join('')}
 </div></div>`,
wireChk(pg){STR.$$('.chk',pg).forEach(c=>c.onclick=()=>{c.classList.toggle('on');c.setAttribute('aria-checked',c.classList.contains('on'))})},

/* Dictionary definition */
def:o=>`<div class="wrap">${o.imgLeft?side(o,'flex:.75'):''}
 <div class="col" style="flex:1.2">
  <div class="card acr dict ent" style="padding:44px 48px;display:flex;flex-direction:column;gap:18px">
   ${o.kick?`<div class="kick">${o.kick}</div>`:''}<div class="word" style="${o.word.length>14?'font-size:64px':''}">${o.word}</div>${o.pos?`<div class="pos">${o.pos}</div>`:''}<div class="bar-acc"></div>
   ${(o.defs||[]).map(d=>`<div class="def${o.stepDefs?' step':''}">${d}</div>`).join('')}</div>
  ${o.ask?`<div class="ask acr ent" style="font-size:26px">${ico('question')}<span>${o.ask}</span><span class="caret"></span></div>`:''}
  ${o.after||''}
 </div>${o.imgLeft?'':side(o,'flex:.8')}</div>`,

/* General statement: heading, kicker, paragraphs, optional question/answer cards, list */
text:o=>`<div class="wrap">${o.left?side(o,'flex:.8'):''}
 <div class="col" style="flex:1.15">
  <div class="ent">${o.chip?`<span class="chip" style="margin-bottom:12px">${o.chip}</span>`:''}<div class="h1" style="font-size:76px;${o.hs||''}">${o.h}</div>${o.kick?`<div class="kick" style="margin-top:12px;font-size:18px">${o.kick}</div>`:''}</div>
  ${(o.paras||[]).map(p=>`<div class="body ent" style="font-size:${o.ps||31}px">${p}</div>`).join('')}
  ${o.ask?`<div class="ask acr ent">${ico('question')}<span>${o.ask}</span><span class="caret"></span></div>`:''}
  ${o.cards?rows(o.cards,o.step!==false,o.cardIcon||'question'):''}
  ${o.list?`<div class="card acr ent" style="padding:22px 30px">${bullets(o.list,o.listStep)}</div>`:''}
  ${o.after||''}
  ${o.foot?`<div class="card solid ent foot" style="display:flex;gap:16px;align-items:center;padding:20px 26px">${ico(o.footIcon||'heart')}<div class="lead" style="font-size:28px;font-weight:600">${o.foot}</div></div>`:''}
 </div>${o.left?'':side(o,'flex:.85')}</div>`,

/* Big centred statement */
big:o=>`<div class="wrap" style="align-items:center;justify-content:center">${o.img?pic(o.img,'flex:.8;align-self:stretch'):''}
 <div class="col solid sweep ent" style="flex:1.2;padding:56px 60px;align-self:stretch;justify-content:center;gap:28px">
  ${o.kick?`<div class="kick">${o.kick}</div>`:''}<div class="mix" style="font-size:${o.size||54}px">${o.text}</div>${o.sub?`<div class="lead" style="opacity:.95;font-size:${o.subSize||34}px">${o.sub}</div>`:''}</div>${o.art?`<div class="artbox ent" style="flex:.7">${`<img src="img/${o.art}" alt="">`}</div>`:''}</div>`,

/* Tiles that flip in one by one */
tiles:o=>`<div class="wrap" style="flex-direction:column;justify-content:center;gap:26px">
 <div class="ent"><div class="h1">${o.h}</div>${o.kick?`<div class="kick" style="margin-top:10px">${o.kick}</div>`:''}</div>
 ${o.lead?`<div class="h2 ent" style="font-weight:300">${o.lead}</div>`:''}
 <div style="display:grid;grid-template-columns:repeat(${o.cols||Math.min(4,o.items.length)},1fr);gap:12px">
  ${o.items.map(([t,i,k],j)=>`<div class="ftile${o.step===false?' ent':' step'} sweep k-${k||KS[j%7]}" style="${o.th?`min-height:${o.th}px`:''}">${ico(i||'check')}<div class="tx" style="${o.ts?`font-size:${o.ts}px`:''}">${t}</div></div>`).join('')}
 </div>${o.foot?`<div class="card acr ent" style="padding:18px 26px"><div class="lead" style="font-weight:600">${o.foot}</div></div>`:''}</div>`,

/* Flip cards (front word, back meaning) */
flips:o=>`<div class="wrap" style="flex-direction:column;gap:26px;justify-content:center">
 ${o.h?`<div class="ent"><div class="h1">${o.h}</div>${o.kick?`<div class="kick" style="margin-top:10px">${o.kick}</div>`:''}</div>`:''}
 <div style="display:grid;grid-template-columns:repeat(${o.cols||o.cards.length},1fr);gap:12px;height:${o.ch||430}px">
 ${o.cards.map(([w,d,i,k],j)=>`<button class="fc ent k-${k||KS[j%7]}" style="animation-delay:${.1+j*.08}s" aria-label="${esc(w.replace(/<[^>]+>/g,''))}: flip card">
  <div class="fa solid sweep" style="justify-content:space-between">${ico(i||'check')}<div style="font-size:${o.fs||(w.length>12?30:40)}px;font-weight:700;letter-spacing:.02em;line-height:1.1">${w}</div><span class="tap">${ico('chevR')}Flip</span></div>
  <div class="fb acr" style="background:rgba(255,255,255,.86);justify-content:flex-start;gap:14px"><div style="font-size:24px;font-weight:800;color:var(--kt);letter-spacing:.02em">${w}</div><div style="font-size:${o.bs||25}px;line-height:1.32">${d}</div></div></button>`).join('')}
 </div>${o.foot?`<div class="card solid ent" style="padding:20px 26px"><div class="lead" style="font-weight:600">${o.foot}</div></div>`:''}</div>`,

/* Columns: compare two or more ideas */
cols:o=>`<div class="wrap" style="flex-direction:column;gap:20px;justify-content:center">
 ${o.h?`<div class="ent"><div class="h1" style="${o.hs||''}">${o.h}</div>${o.kick?`<div class="kick" style="margin-top:10px">${o.kick}</div>`:''}</div>`:''}
 <div style="display:grid;grid-template-columns:repeat(${o.cols.length},1fr);gap:12px;align-items:stretch">
 ${o.cols.map((c,j)=>`<div class="k-${c.k||KS[j%7]} card acr ent colcard" style="padding:0;display:flex;flex-direction:column;animation-delay:${.08*j}s">
  <div class="solid" style="padding:18px 24px;display:flex;align-items:center;gap:12px">${c.icon?ico(c.icon):''}<span style="font-size:${c.hs||26}px;font-weight:700;letter-spacing:.02em">${c.h}</span></div>
  <div style="padding:20px 24px;display:flex;flex-direction:column;gap:10px;flex:1">${c.sub?`<div class="body" style="font-size:${o.ss||24}px;font-weight:600">${c.sub}</div>`:''}${c.items?bullets(c.items,o.step).replace('class="blist"',`class="blist" style="font-size:${o.is||22}px"`):''}${c.body||''}</div></div>`).join('')}
 </div>${o.extra||''}${o.foot?`<div class="card solid ent" style="display:flex;gap:16px;align-items:center;padding:20px 26px">${ico(o.footIcon||'bulb')}<div class="lead" style="font-weight:600;font-size:24px">${o.foot}</div></div>`:''}</div>`,

/* Numbered steps */
steps:o=>`<div class="wrap">${o.left?side(o,'flex:.7'):''}
 <div class="col" style="flex:1.2;gap:12px">
  <div class="ent" style="margin-bottom:8px">${o.chip?`<span class="chip" style="margin-bottom:12px">${o.chip}</span>`:''}<div class="h1" style="${o.hs||''}">${o.h}</div>${o.kick?`<div class="kick" style="margin-top:10px">${o.kick}</div>`:''}</div>
  ${o.lead?`<div class="body ent" style="font-size:24px">${o.lead}</div>`:''}
  ${o.steps.map(([n,t],i)=>`<div class="tip card acr step" style="padding:${o.pad||20}px 24px;align-items:center"><span class="no" style="${String(n).length>2?'width:auto;padding:0 14px;font-size:20px;font-weight:600':''}">${n}</span><div class="tx" style="font-size:${o.ts||25}px">${t}</div></div>`).join('')}
  ${o.foot?`<div class="card solid step" style="display:flex;gap:16px;align-items:center;padding:20px 26px">${ico(o.footIcon||'bulb')}<div class="lead" style="font-weight:600;font-size:24px">${o.foot}</div></div>`:''}${o.after||''}
 </div>${o.left?'':side(o,'flex:.75')}</div>`,

/* Scenario: story + discussion questions */
scenario:o=>`<div class="wrap">${o.img?pic(o.img,o.imgStyle||'flex:.7'):o.art?`<div class="artbox ent" style="flex:.7"><img src="img/${o.art}" alt=""></div>`:''}
 <div class="col" style="flex:1.3;gap:14px">
  <div class="ent"><div class="h1" style="${o.hs||'font-size:56px'}">${o.h}</div>${o.kick?`<div class="kick" style="margin-top:10px">${o.kick}</div>`:''}</div>
  ${o.text?`<div class="win acr ent story"><div class="wt">${ico('book')}<span>${o.wt||'Scenario'}</span><span class="sp"></span><span class="wb">${ico('min')}</span><span class="wb">${ico('x')}</span></div><div class="lead" style="padding:20px 26px;font-size:${o.ts||24}px">${o.text}</div></div>`:''}
  ${o.qs?`<div class="qgrid" style="grid-template-columns:repeat(${o.qcols||2},1fr)">${o.qs.map(q=>`<div class="card acr step qcard">${ico('question')}<span>${q}</span></div>`).join('')}</div>`:''}
  ${o.foot?`<div class="card solid step" style="display:flex;gap:16px;align-items:center;padding:18px 24px">${ico(o.footIcon||'shield')}<div class="lead" style="font-weight:700;font-size:22px;letter-spacing:.02em">${o.foot}</div></div>`:''}
 </div></div>`,

/* Icebreaker statement */
standup:o=>`<div class="wrap" style="align-items:center">
 <div class="col solid sweep ent" style="flex:1.1;padding:56px;align-self:stretch;justify-content:center;gap:24px">
  <div class="kick" style="font-size:22px">${o.lead}</div><div class="mix" style="font-size:${o.size||60}px;font-weight:700">${o.text}</div>
  ${o.foot?`<div class="lead" style="opacity:.9">${o.foot}</div>`:''}</div>
 ${o.art?`<div class="artbox ent" style="flex:.9;align-self:stretch"><img src="img/${o.art}" alt=""></div>`:o.img?pic(o.img,'flex:.9;align-self:stretch'):''}</div>`,

/* Bullying or conflict? quiz */
quiz:o=>`<div class="wrap" style="flex-direction:column;justify-content:center;gap:22px;position:relative">${o.score?K.score(o.score):''}
 <div class="ent"><div class="h1" style="font-size:52px">${o.h}</div></div>
 <div class="win acr ent story"><div class="wt">${ico('book')}<span>Scenario</span><span class="sp"></span><span class="wb">${ico('x')}</span></div><div class="lead" style="padding:26px 30px;font-size:${o.ts||29}px;line-height:1.4">${o.text}</div></div>
 <div class="qbtns ent">${o.opts.map(x=>`<button class="qb" data-v="${x}">${x}</button>`).join('')}</div>
 <div class="qans k-${o.answer==='BULLYING'?'coral':'sky'}" aria-live="polite"><span class="solid">${o.answer}</span></div></div>`,
wireQuiz(pg,o){const ans=STR.$('.qans',pg);STR.$$('.qb',pg).forEach(b=>b.onclick=()=>{STR.$$('.qb',pg).forEach(x=>x.classList.remove('right','wrong'));b.classList.add(b.dataset.v===o.answer?'right':'wrong');ans.classList.add('on');if(b.dataset.v===o.answer){const r=b.getBoundingClientRect();STR.H.burst((r.left+r.width/2)/STR.H.SC(),(r.top+r.height/2)/STR.H.SC())}})},

/* YouTube link */
video:o=>`<div class="wrap" style="align-items:center">
 <div class="col" style="flex:1;gap:20px">
  <div class="ent"><div class="h1">${o.h||''}</div>${o.kick?`<div class="kick" style="margin-top:10px">${o.kick}</div>`:''}</div>
  ${o.text?`<div class="body ent">${o.text}</div>`:''}
 </div>
 <a class="vidcard ent k-coral" href="${o.url}" target="_blank" rel="noopener">${o.img?`<div class="im" style="background-image:url(img/${o.img})"></div>`:''}<span class="playb">${ico('play')}</span><span class="vlab">${ico('play')}Watch on YouTube</span></a></div>`,

/* Thank you */
thanks:o=>`<div style="position:absolute;inset:0">${pic(o.img,'position:absolute;inset:0')}
 <div style="position:absolute;inset:0;background:linear-gradient(90deg,rgba(0,0,0,.45),rgba(0,0,0,0) 60%)"></div>
 <div class="card acr ent" style="position:absolute;left:96px;bottom:80px;padding:44px 52px;width:640px">
  <div style="font-size:${o.size||120}px;font-weight:700;line-height:.9;letter-spacing:-.03em">${o.h||'Thank<br>You'}</div>
  ${o.sub!==''?`<div class="kick" style="margin-top:22px;font-size:20px">${o.sub||'ANY QUESTIONS?'}</div>`:''}${o.extra||''}
  <div style="display:flex;gap:8px;margin-top:28px"><button class="btn" data-act="home">${ico('grid')}Back to Start</button><button class="btn ghost" data-act="up">${ico('home')}All lessons</button></div>
 </div></div>`,
thanksEnter(pg,H){const c=STR.$('.card',pg);if(!c)return;const r=c.getBoundingClientRect();H.burst((r.left+r.width*.3)/H.SC(),(r.top+60)/H.SC(),18)},

chips:(items,step,cols)=>`<div class="chipgrid" style="grid-template-columns:repeat(${cols||items.length},1fr)">${items.map((t,i)=>`<div class="cchip k-${KS[i%7]}${step?' step':' ent'}">${t}</div>`).join('')}</div>`,
score:id=>`<div class="scorebar acr ent" data-score="${id}">${[1,2].map(t=>`<div class="team k-${t===1?'sky':'coral'}"><span class="tn">Team ${t}</span><button data-d="-1" data-t="${t}" aria-label="Team ${t} minus one">−</button><b data-v="${t}">0</b><button data-d="1" data-t="${t}" aria-label="Team ${t} plus one">+</button></div>`).join('')}<button class="rs" data-r="1" title="Reset scores" aria-label="Reset scores">${ico('back')}</button></div>`,
wireScore(pg){const bar=STR.$('.scorebar',pg);if(!bar)return;const key='str-score-'+bar.dataset.score;let s=STR.store.get(key,{1:0,2:0});
 const paint=()=>{STR.$$('[data-v]',bar).forEach(b=>b.textContent=s[b.dataset.v])};paint();
 bar.onclick=e=>{const b=e.target.closest('button');if(!b)return;e.stopPropagation();if(b.dataset.r){s={1:0,2:0}}else{s[b.dataset.t]=Math.max(0,s[b.dataset.t]+(+b.dataset.d))}STR.store.set(key,s);paint()}},
/* notes helper: original slide number -> verbatim notes */
N:(l,o)=>((STR.NOTES||{})[l]||{})[o]||''
};
})();
