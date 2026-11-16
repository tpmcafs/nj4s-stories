window.LESSON_DEF=function(H){
const {ico,K,ct,tick,cap,fc,fhint,hint,tafSVG,smileSVG,IMG}=H;
const X=KIT_INIT(H);
const GROUPS=[
 {id:'g1',name:'Start Here'},
 {id:'g2',name:'Positive Action'},
 {id:'g3',name:'Body & Mind'},
 {id:'g4',name:'Safe Circles'}
];
const TOPICS=[['1/16:','What is Bullying and Why it Matters'],['1/23:','Self-Concept and Personal Responsibility'],['1/30:','Respect, Empathy, and Perspective-Taking'],['2/6:','Bystanders, Upstanders, and Making Positive Choices'],['2/13:','Cyberbullying and Digital Responsibility'],['2/27:','Building a Positive School Culture']];
const S=[
 {n:1,g:'g1',t:'Lesson 2',c:'#0B6A0B',i:'book',sz:'l',pos:[0,0],
  live:[`<div class="f-big">Lesson 2</div>`,`<div class="f-title">Positive Actions, Strong Minds, Safe Circles</div>`]},
 {n:2,g:'g1',t:'Class Rules',c:'#5C2D91',i:'rules',sz:'w',pos:[0,4],
  live:['Be kind','Be respectful','Don’t judge','This is a safe space'].map(w=>`<div class="f-title">${w}</div>`)},
 {n:3,g:'g1',t:'Course Outline',c:'#00777F',i:'today',sz:'m',pos:[4,4],badge:'6',live:[`<div class="f-base">Every Friday, 6 sessions</div>`]},

 {n:4,g:'g2',t:'Recap',c:'#C2410C',i:'review',sz:'w',pos:[0,0],
  live:[`<div class="f-base">When we do positive actions, we feel good about ourselves</div>`,`<div class="f-base">Looking for the best in others protects our own self-respect</div>`]},
 {n:5,g:'g2',t:'Intro',c:'#B4004E',i:'hand',sz:'m',pos:[4,0],live:[`<div class="f-base">Show of hands!</div>`]},
 {n:6,g:'g2',t:'Positive Action Philosophy',c:'#C239B3',i:'smile',sz:'m',pos:[4,2],
  live:[`<div class="f-base">There is a positive way to do everything.</div>`]},
 {n:7,g:'g2',t:'TAF Circle',c:'#005FB8',i:'cycle',sz:'w',pos:[0,2],
  live:['Thought','Action','Feeling','Result'].map((w,k)=>`<div class="f-title">${w}</div><div class="dotring">${[0,1,2,3].map(j=>`<i class="${j===k?'on':''}"></i>`).join('')}</div>`)},

 {n:8,g:'g3',t:'Physical Positive Actions',c:'#B83200',i:'run',sz:'l',pos:[0,0],
  live:['Exercise','Keeping clean & taking care of yourself','Staying Safe'].map(w=>`<div class="f-title">${w}</div>`)},
 {n:9,g:'g3',t:'Bullying Behaviors & Better Choices',c:'#A4262C',i:'balance',sz:'w',pos:[0,4],
  live:[`<div class="f-title">Being gentle and respectful</div>`,`<div class="f-title">Helping or getting help</div>`]},
 {n:10,g:'g3',t:'Intellectual Positive Actions',c:'#3F51C9',i:'bulb',sz:'m',pos:[4,0],
  live:['Learning new things','Problem solving not reacting','Supporting others’ goals'].map(w=>`<div class="f-base">${w}</div>`)},

 {n:11,g:'g4',t:'Activity: What would you do?',c:'#036E72',i:'chat',sz:'l',pos:[0,0],
  live:[1,2,3,4].map(k=>`<div class="f-big">Scenario ${k}</div>`)},
 {n:12,g:'g4',t:'Class Safety Circle',c:'#6B48A8',i:'group',sz:'m',pos:[4,0],live:[`<div class="f-base">One action we can all agree to do this week</div>`]},
 {n:13,g:'g4',t:'Thank you!',c:'#107C10',i:'thanks',sz:'m',pos:[4,2],live:[`<div class="f-big">Thank you!</div>`]}
];
const tk=(label,html,step=false)=>`<div class="takeaway rg ${step?'step':''}">${label?`<span class="tk">${label}</span>`:''}${html}</div>`;
const PAGES={
 1:s=>`<div class="sprinkles" aria-hidden="true">${[[3,7,30,'#FFB900'],[44,5,22,'#107C10'],[93,10,34,'#00B294'],[54,90,26,'#FFB900'],[6,88,36,'#8764B8'],[96,84,22,'#F7630C'],[64,12,18,'#7FBA00'],[91,48,24,'#E81123'],[29,93,20,'#00BCF2']].map(([x,y,sz,k],j)=>`<i style="left:${x}%;top:${y}%;--s:${sz}px;--k:${k};--d:${.6+j*.15}s;--t:${6+j%4}s"></i>`).join('')}</div><div class="split p1wrap" style="flex:1"><div class="title-hero"><span class="l6 rg">Lesson 2</span><h2 class="rg">Positive Actions, Strong Minds, Safe Circles</h2></div><div class="rg" style="position:relative;padding:4%"><div class="hero-photo"><i style="background-image:url(${IMG[1]});background-position:center 35%"></i></div>${[['#7FBA00','0','0'],['#FFB900','auto','0;right:0'],['#00B294','0;bottom:0','auto'],['#F7630C','auto;bottom:0;right:0','auto']].map((q,k)=>`<span class="hero-sq" style="background:${q[0]};top:${q[1]};left:${q[2]};animation-delay:${.5+k*.12}s"></span>`).join('')}</div></div>`,
 2:s=>`${K(s)}<h2 class="ph rg">Class Rules</h2><div class="ctiles fgrid rg" style="grid-template-columns:repeat(auto-fit,minmax(min(240px,100%),1fr))">${[['Be kind','heart'],['Be respectful','handshake'],['Don’t judge','balance'],['This is a safe space','shield']].map(([w,i],k)=>fc(w,{num:k+1,icon:i})).join('')}</div>${fhint}`,
 3:s=>`${K(s)}<h2 class="ph rg">Course Outline</h2><div class="kick rg" style="opacity:.95">Meeting Time: Every Friday, 6 sessions</div><div class="kick rg" style="opacity:.8;margin-top:-1vh">Topics:</div><div class="timeline rg">${TOPICS.map(([d,w],k)=>`<button class="ct link ${k===1?'now':''}" ${k!==1?`data-lesson="${k+1}"`:''}><span class="n">${k+1}</span><span class="tag" style="top:auto;position:static;margin-bottom:6px;font-size:clamp(14px,1.2vw,20px);font-weight:700">${d}</span><div class="big">${w}</div></button>`).join('')}</div>`,
 4:s=>`${K(s)}<h2 class="ph rg">Recap</h2><div class="ctiles fgrid rg tallfc" style="grid-template-columns:repeat(auto-fit,minmax(min(300px,100%),1fr))">${fc('When we do positive actions, we feel good about ourselves',{num:1,icon:'smile'})}${fc('Looking for the best in others protects our own self-respect',{num:2,icon:'eye'})}${fc('When enough people do that, bullying fades - and school becomes a place we actually want to be',{num:3,icon:'school'})}</div>${fhint}`,
 5:s=>`${K(s)}<h2 class="ph rg">Intro</h2><div class="split" style="grid-template-columns:1.2fr .8fr"><div class="rg"><p class="lead" style="font-size:clamp(24px,2.6vw,44px)">The choices we make - our actions - can either create a safe, positive school... or make things harder for everyone</p><div style="height:3vh"></div>${ct('<b>Show of hands:</b> Who wants to feel confident, respected, and safe at school?',{icon:'hand',cls:'hl'})}</div><div class="rg">${X.counter('hand')}</div></div>`,
 6:s=>`${K(s)}<h2 class="ph rg">Positive Action Philosophy</h2><div class="split"><p class="quote rg">When we do positive actions, we feel good about ourselves, <span class="q2">and there is a positive way to do everything.</span></p><div class="rg" style="display:grid;place-items:center"><div id="smileHost">${smileSVG()}</div><div class="smile-cap">${ico('tap')}<span>Tap to play again</span></div></div></div>`,
 7:s=>`${K(s)}<h2 class="ph sm rg">TAF Circle</h2><div class="taf-flex"><div class="circle-wrap rg">${tafSVG()}</div><div class="rg" style="display:flex;flex-direction:column;gap:2vh">${ct('When someone is acting mean or bullying others, how do you think they feel about themselves?',{icon:'question'})}<div class="step">${tk('Key Point:','People who feel good about themselves don’t need to bully others')}</div></div></div>${hint}`,
 8:s=>`${K(s)}<h2 class="ph rg">Physical Positive Actions</h2><div class="split" style="grid-template-columns:1fr 1fr;align-items:start"><div class="rg"><div class="kick" style="margin-bottom:12px;opacity:.95">When we feel confident and in control:</div><ul class="qlist"><li>we’re less likely to bully</li><li>less likely to be targeted</li><li>more likely to step in or get help</li></ul></div><div class="rg" style="display:flex;flex-direction:column;gap:12px">${[['Exercise','run'],['Keeping clean &amp; taking care of yourself','clean'],['Staying Safe','shield']].map(([w,i])=>`<button data-chip style="justify-content:flex-start;font-size:clamp(22px,2.4vw,42px);padding:clamp(16px,1.8vw,30px)">${ico(i,'',2.4)}<span>${w}</span></button>`).join('')}</div></div>`,
 9:s=>`${K(s)}<h2 class="ph sm rg">Bullying Behaviors &amp; Better Choices</h2><div class="split" style="grid-template-columns:1fr 1fr;gap:2vw;margin-bottom:1.6vh;align-items:start"><div class="kick rg" style="opacity:.95;text-transform:none;letter-spacing:0;font-size:clamp(18px,1.7vw,30px)">What are some examples of physical bullying?</div><div class="kick rg" style="opacity:.95;text-transform:none;letter-spacing:0;font-size:clamp(18px,1.7vw,30px)">What should replace those behaviors?</div></div><div class="ctiles fgrid rg">${[['Pushing and shoving','Being gentle and respectful','handshake'],['Making fun of others','Saying positive or neutral things','chat'],['Standing by','Helping or getting help','hand']].map(([a,b,i],k)=>fc(b,{icon:i,front:a,tag:String(k+1)})).join('')}</div>${fhint}`,
 10:s=>`${K(s)}<h2 class="ph sm rg">Intellectual Positive Actions</h2><div class="ctiles rg" style="grid-template-columns:repeat(4,1fr)">${[['Learning new things','bulb'],['Problem solving not reacting','puzzle'],['Going to school, staying engaged','school'],['Supporting others’ goals','people']].map(([w,i])=>ct(w,{icon:i})).join('')}</div><div class="split" style="grid-template-columns:1fr 1fr;gap:2vw;margin-top:2vh;align-items:stretch"><div class="rg">${ct('If you’re focused on learning, improving, and reaching goals - do you have time or energy to bully others?',{icon:'question',cls:'hl'})}</div><div class="step">${tk('','Bullying often happens when people feel stuck, jealous, or insecure. Positive thinking and learning interrupt that cycle')}</div></div>${hint}`,
 11:s=>`${K(s)}<h2 class="ph sm rg">Activity: What would you do?</h2><div class="split" style="grid-template-columns:.62fr 1.38fr;gap:3vw;align-items:start"><div class="rg">${X.wheel(['1','2','3','4'])}</div><div class="rg"><div class="kick" style="margin-bottom:8px;opacity:.95;text-transform:none;letter-spacing:0">For each scenario, turn to a partner and discuss:</div><ul class="qlist" style="margin-bottom:12px"><li>What’s a negative action?</li><li>What’s a positive action instead?</li></ul><div class="ctiles" style="grid-template-columns:1fr 1fr;gap:10px">${['Someone is pushed in the hallway','A group chat starts making fun of someone','A student trips another “as a joke”','Someone is embarrassed during class'].map((w,k)=>`<button class="ct scn" data-scn style="min-height:clamp(110px,16vh,200px)"><span class="tag">Scenario ${k+1}:</span><div class="big">${w}</div></button>`).join('')}</div></div></div><div class="rg" style="margin-top:2vh">${tk('Key point:','Positive actions protect everyone, not just the victim')}</div>`,
 12:s=>`${K(s)}<h2 class="ph rg">Class Safety Circle</h2><div class="split"><p class="lead rg">What is ONE action we can all agree to do this week to make our class safer?</p><div class="rg">${X.joinCircle(14)}<div class="smile-cap">${ico('tap')}<span>Tap to join the circle</span></div></div></div>`,
 13:s=>`<div class="done-wrap" id="doneWrap" style="background-image:linear-gradient(rgba(11,106,11,.84),rgba(11,106,11,.9)),url(${IMG[13]})"><div class="confetti" id="confetti"></div><div style="position:relative;z-index:1"><div class="done-h rg">Thank you!</div></div></div>`
};
const wire={};S.forEach(s=>{wire[s.n]=(pg,x)=>X.wire(pg,x)});
return {num:2,title:'Positive Actions, Strong Minds, Safe Circles',sub:'',
 lockImg:'img/t1.webp',lockCls:'photo',theme:'l2',groups:GROUPS,slides:S,pages:PAGES,wire,
 photos:[1,2,3,4,5,8,9,10,11,12,13],
 noBanner:[1,13],sprinkle:[2,5,8,12],
 bpos:{1:'center 40%',2:'center 52%',3:'center 28%',4:'center 56%',5:'center 23%',8:'center 50%',9:'center 46%',10:'center 25%',11:'center 25%',12:'center 18%',13:'center 34%'},
 tpos:{1:'center 40%',2:'center 50%',3:'center 30%',4:'center 53%',5:'center 26%',8:'center 48%',9:'center 45%',10:'center 28%',11:'center 28%',12:'center 22%',13:'center 35%'}};
};
