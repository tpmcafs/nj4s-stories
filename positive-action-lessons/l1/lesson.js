window.LESSON_DEF=function(H){
const {ico,K,ct,tick,cap,fc,fhint,hint,tafSVG,smileSVG,treeSVG,IMG}=H;
const X=KIT_INIT(H);
const GROUPS=[
 {id:'g1',name:'Start Here'},
 {id:'g2',name:'Your Best Self'},
 {id:'g3',name:'Thoughts–Actions–Feelings'},
 {id:'g4',name:'Bullying & School Climate'},
 {id:'g5',name:'Activity 1: Stop, Choose, Go'},
 {id:'g6',name:'Wrap-Up'}
];
const TOPICS=['What is Bullying and Why it Matters','Self-Concept and Personal Responsibility','Respect, Empathy, and Perspective-Taking','Bystanders, Upstanders, and Making Positive Choices','Cyberbullying and Digital Responsibility','Building a Positive School Culture'];
const BEST=['Confident','Respected','Kind','Calm','Perfect?','Successful','Included','Authentic'];
const POS=['<b>Thought:</b> “I want to treat people with respect”','<b>Action:</b> You include someone or speak up','<b>Feeling:</b> You feel confident, proud, calm','<b>Result:</b> It’s easier to keep making positive choices'];
const NEG=['<b>Thought:</b> “I’ll feel better if I embarrass them”','<b>Action:</b> Teasing, mocking, excluding','<b>Feeling:</b> Guilt, regret, insecurity','<b>Result:</b> More negative thoughts and actions'];
const ROLEDEFS=[['Bully','Someone who hurts, scares, or leaves out another person on purpose, again and again.'],['Target','The person who is being picked on or hurt by the bullying.'],['Bystander','Someone who sees the bullying happen but doesn’t step in.'],['Defender','Someone who steps in or gets help for the target. A defender breaks the cycle.']];
const BSH='What does “your <span class="hl-w">BEST SELF</span>” look like?';
const S=[
 {n:1,g:'g1',t:'Lesson 1',c:'#B4145A',i:'book',sz:'l',pos:[0,0],
  live:[`<div class="f-big">Lesson 1</div>`,`<div class="f-title">DOING GOOD, FEELING GOOD</div>`,`<div class="f-body">Creating a Positive, Bully-Free School</div>`]},
 {n:2,g:'g1',t:'Class Rules',c:'#5C2D91',i:'rules',sz:'w',pos:[0,4],
  live:['Be kind','Be respectful','Don’t judge','This is a safe space'].map(w=>`<div class="f-title">${w}</div>`)},
 {n:3,g:'g1',t:'Course Outline',c:'#00777F',i:'layers',sz:'m',pos:[4,4],badge:'6'},

 {n:4,g:'g2',t:'Your Best Self',c:'#C2410C',i:'star',sz:'l',pos:[0,0],
  live:['Confident','Respected','Kind','Calm','Successful','Included','Authentic'].map(w=>`<div class="f-title">${w}</div>`)},
 {n:5,g:'g2',t:'What is Positive Action?',c:'#107C10',i:'heart',sz:'w',pos:[0,4],
  live:[`<div class="f-base">When we do positive actions, we feel good about ourselves, and there is a positive way to do everything.</div>`]},

 {n:6,g:'g3',t:'Thoughts-Actions-Feelings Circle',c:'#005FB8',i:'cycle',sz:'l',pos:[0,0],
  live:['Thought','Action','Feeling','Result'].map((w,k)=>`<div class="f-title">${w}</div><div class="dotring">${[0,1,2,3].map(j=>`<i class="${j===k?'on':''}"></i>`).join('')}</div>`)},
 {n:7,g:'g3',t:'Key Takeaway',c:'#3F51C9',i:'bulb',sz:'m',pos:[4,0],live:[`<div class="f-base">Bullying doesn’t start with actions - it starts with thoughts</div>`]},
 {n:8,g:'g3',t:'Negative Circle',c:'#A4262C',i:'brokencycle',sz:'m',pos:[4,2],live:[`<div class="f-base">Teasing, mocking, excluding</div>`,`<div class="f-base">Guilt, regret, insecurity</div>`]},
 {n:9,g:'g3',t:'Positive Circle',c:'#0B6A0B',i:'cycle',sz:'w',pos:[0,4],live:[`<div class="f-title">It’s easier to keep making positive choices</div>`]},

 {n:10,g:'g4',t:'Bullying & School Climate',c:'#B4004E',i:'school',sz:'w',pos:[0,0],
  live:[`<div class="f-title">Bullying always damages school climate</div>`]},
 {n:11,g:'g4',t:'Roles in Bullying',c:'#6B48A8',i:'group',sz:'l',pos:[0,2],
  live:['Bully','Target','Bystander','Defender'].map(w=>`<div class="f-title">${w}</div>`)},

 {n:12,g:'g5',t:'Instructions',c:'#036E72',i:'group',sz:'m',pos:[0,0],live:[`<div class="f-base">Students work 4 groups</div>`]},
 {n:13,g:'g5',t:'Stop, Choose, Go',c:'#C50F1F',i:'stop',sz:'l',pos:[2,0],
  live:[`<div class="f-big" style="color:#ff8a8a">STOP</div>`,`<div class="f-big" style="color:#FFD34D">CHOOSE</div>`,`<div class="f-big" style="color:#7CE07C">GO</div>`]},
 {n:14,g:'g5',t:'Key Takeaway',c:'#4C6E66',i:'sign',sz:'m',pos:[0,2],live:[`<div class="f-base">Choosing better actions</div>`]},

 {n:15,g:'g6',t:'Looking for the Best in Others',c:'#B83200',i:'eye',sz:'w',pos:[0,0],
  live:[`<div class="f-title">Looking for the best in others protects your own self-respect</div>`]},
 {n:16,g:'g6',t:'Reflect',c:'#4F4CC2',i:'pen',sz:'m',pos:[4,0],live:['One negative thought I can stop','One positive action I can choose','One way I can improve our school climate'].map(w=>`<div class="f-base">${w}</div>`)},
 {n:17,g:'g6',t:'Conclusion',c:'#00735F',i:'sunrise',sz:'w',pos:[0,2],live:[`<div class="f-title">When we do positive actions, we feel good about ourselves</div>`]},
 {n:18,g:'g6',t:'Thank You!',c:'#E3008C',i:'thanks',sz:'m',pos:[4,2],live:[`<div class="f-big">THANK YOU!</div>`]}
];
const tafPage=(s,rows,extra='',center)=>`${K(s)}<h2 class="ph sm rg">Thoughts-Actions-Feelings Circle</h2><div class="taf-flex"><div class="circle-wrap rg">${tafSVG(center?{center}:{})}</div><div class="rg">${extra}${X.tafRows(rows)}</div></div>`;
const tk=(label,html,step=false)=>`<div class="takeaway rg ${step?'step':''}"><span class="tk">${label}</span>${html}</div>`;
const PAGES={
 1:s=>`<div class="sprinkles" aria-hidden="true">${[[3,7,30,'#FFB900'],[44,5,22,'#E3008C'],[93,10,34,'#00B294'],[54,90,26,'#FFB900'],[6,88,36,'#8764B8'],[96,84,22,'#F7630C'],[64,12,18,'#7FBA00'],[91,48,24,'#E81123'],[29,93,20,'#00BCF2']].map(([x,y,sz,k],j)=>`<i style="left:${x}%;top:${y}%;--s:${sz}px;--k:${k};--d:${.6+j*.15}s;--t:${6+j%4}s"></i>`).join('')}</div><div class="split p1wrap" style="flex:1"><div class="title-hero"><span class="l6 rg">Lesson 1</span><h2 class="rg">DOING GOOD, FEELING GOOD</h2><p class="rg">Creating a Positive, Bully-Free School</p></div><div class="rg" style="position:relative;padding:4%"><div class="hero-photo"><i style="background-image:url(${IMG[1]});background-position:center 30%"></i></div>${[['#FFB900','0','0'],['#E3008C','auto','0;right:0'],['#0078D4','0;bottom:0','auto'],['#107C10','auto;bottom:0;right:0','auto']].map((q,k)=>`<span class="hero-sq" style="background:${q[0]};top:${q[1]};left:${q[2]};animation-delay:${.5+k*.12}s"></span>`).join('')}</div></div>`,
 2:s=>`${K(s)}<h2 class="ph rg">Class Rules</h2><div class="ctiles rg" style="grid-template-columns:repeat(auto-fit,minmax(min(240px,100%),1fr))">${['Be kind','Be respectful','Don’t judge','This is a safe space'].map((w,k)=>tick(w,k+1)).join('')}</div><div class="exitbar rg" id="exitBar"><i></i><i></i><i></i><i></i>${ico('star','star',2.4).replace('<svg class="star"','<svg class="star" fill="currentColor"')}</div><div class="confetti" id="confetti"></div>`,
 3:s=>`${K(s)}<h2 class="ph rg">Course Outline</h2><div class="kick rg" style="opacity:.95">Topics:</div><div class="timeline rg">${TOPICS.map((w,k)=>`<button class="ct link ${k===0?'now':''}" ${k?`data-lesson="${k+1}"`:''}><span class="n">${k+1}</span><div class="big">${w}</div></button>`).join('')}</div>`,
 4:s=>`${K(s)}<h2 class="ph sm rg">${BSH}</h2><div class="rg" style="flex:1;display:grid;place-items:center;align-content:center;gap:3vh">${X.bubbles(BEST,{special:'Perfect?'})}<div class="takeaway step" style="text-align:center">How you think, act, and treat others</div></div><div class="smile-cap rg">${ico('tap')}<span>Tap the words, then tap “Perfect?”</span></div>`,
 5:s=>`${K(s)}<h2 class="ph rg">What is Positive Action?</h2><div class="ctiles fgrid rg tallfc" style="grid-template-columns:repeat(auto-fit,minmax(min(380px,100%),1fr))">${fc('<b>Philosophy:</b> When we do positive actions, we feel good about ourselves, and there is a positive way to do everything. Why do you think is true?',{num:1,icon:'smile'})}${fc('When everyone is positively their best - happy, strong, smart, and caring - there’s not much room for negative actions (i.e. bullying)',{num:2,icon:'heart'})}</div>${fhint}`,
 6:s=>tafPage(s,POS),
 7:s=>tafPage(s,POS,tk('Key Takeaway:','Bullying doesn’t start with actions - it starts with thoughts',true)+'<div style="height:12px"></div>')+hint,
 8:s=>`${K(s)}<h2 class="ph sm rg">Thoughts-Actions-Feelings Circle</h2><div class="taf-flex"><div class="circle-wrap rg">${tafSVG({center:['Negative','Circle']})}</div><div class="rg"><div class="seg2" role="tablist"><button data-mode="pos">Positive Circle</button><button data-mode="neg" class="on">Negative Circle</button></div><div data-set="pos" hidden>${X.tafRows(POS)}</div><div data-set="neg">${X.tafRows(NEG)}</div></div></div>`,
 9:s=>tafPage(s,POS,tk('Key Takeaway:','Bullying doesn’t start with actions - it starts with thoughts')+'<div style="height:12px"></div>'),
 10:s=>`${K(s)}<h2 class="ph rg">Bullying &amp; School Climate</h2><div class="ctiles rg" style="grid-template-columns:repeat(auto-fit,minmax(min(260px,100%),1fr))">${ct('How does bullying affect the <b>person targeted?</b>',{tag:'1',icon:'question'})}${ct('How does it affect the <b>person doing it?</b>',{tag:'2',icon:'question'})}${ct('How does it affect people who just watch?',{tag:'3',icon:'eye'})}</div><div class="step" style="margin-top:2vh">${tk('','Bullying always damages <b><i>school climate</i></b><br>Everyone involved feels worse - even if they don’t show it')}</div>${hint}`,
 11:s=>`${K(s)}<h2 class="ph sm rg">Bullying &amp; School Climate</h2><div class="split" style="grid-template-columns:1.2fr .8fr"><div class="rg"><div class="kick" style="opacity:.95">Roles in bullying:</div>${X.roles(ROLEDEFS)}</div><div class="rg"><div class="rdef" id="ringDef" aria-live="polite"><div class="rdef-in"><svg class="rdef-ico" viewBox="-30 -30 60 60" fill="none" stroke="currentColor" stroke-width="3.2" stroke-linecap="round"></svg><div><b class="rdef-t"></b><p class="rdef-d"></p></div></div></div><div class="smile-cap" style="justify-content:flex-start;margin-top:2vh">${ico('tap')}<span>Tap a role to learn what it means</span></div></div></div>`,
 12:s=>`${K(s)}<h2 class="ph rg">Activity 1: Stop, Choose, Go</h2><div class="split" style="grid-template-columns:1.1fr .9fr;align-items:center"><div class="rg"><div class="kick" style="margin-bottom:12px">Instructions:</div><ol class="howto"><li>Students work 4 groups</li><li>Each group will receive a scenario</li></ol></div><div class="rg">${X.counter('group')}</div></div>`,
 13:s=>`${K(s)}<h2 class="ph sm rg">Activity 1: Stop, Choose, Go</h2><div class="split" style="grid-template-columns:.7fr 1.3fr;gap:3vw;align-items:start"><div class="rg">${X.wheel(['a','b','c','d'])}</div><div class="rg"><div class="kick" style="margin-bottom:10px">Scenario:</div><div class="ctiles" style="grid-template-columns:1fr 1fr;gap:10px">${['Someone’s outfit becomes a group joke','A group chat turns into teasing','A student is excluded from a project or table','A rumor spreads online'].map((w,k)=>`<button class="ct scn" data-scn><span class="tag">${'abcd'[k]})</span><div class="big">${w}</div></button>`).join('')}</div></div></div><div class="rg" style="margin-top:2.4vh">${X.light(['<b>STOP</b> - what negative thought needs to stop?','<b>CHOOSE</b> - what’s a better thought?','<b>GO</b> - what positive action could you take?'])}</div>`,
 14:s=>`${K(s)}<h2 class="ph rg">Activity 1: Stop, Choose, Go</h2><div class="split"><div class="rg">${tk('Key Takeaway:','Stopping bullying doesn’t mean confrontation - it means <b>choosing better actions</b>')}</div><div class="rg"><div class="hero-photo"><i style="background-image:url(${IMG[14]})"></i></div></div></div>`,
 15:s=>`${K(s)}<h2 class="ph rg">Looking for the Best in Others</h2><div class="ctiles rg" style="grid-template-columns:repeat(auto-fit,minmax(min(380px,100%),1fr))">${ct('Why is it easier to tear people down than build them up?',{icon:'question',tag:'1'})}${ct('What happens to your confidence when you lift someone else up?',{icon:'thumb',tag:'2'})}</div><div class="step" style="margin-top:2.4vh">${tk('Key Principle:','Looking for the best in others protects your own <b>self-respect</b>')}</div>${hint}`,
 16:s=>`${K(s)}<h2 class="ph rg">Reflect:</h2><div class="ctiles rg">${tick('One negative thought I can stop',1)}${tick('One positive action I can choose',2)}${tick('One way I can improve our school climate',3)}</div><div class="exitbar rg" id="exitBar"><i></i><i></i><i></i>${ico('star','star',2.4).replace('<svg class="star"','<svg class="star" fill="currentColor"')}</div>${cap('You don’t need power or popularity to make change. You just need awareness, choice, and action')}<div class="confetti" id="confetti"></div>`,
 17:s=>`${K(s)}<h2 class="ph rg">Conclusion</h2><div class="closing-split"><div class="fgrid rg tallfc">${fc('When we do positive actions, we feel good about ourselves',{num:1,icon:'smile'})}${fc('When enough people do that, bullying fades - and school becomes a place we actually want to be',{num:2,icon:'school'})}${fhint}</div><div class="rg" id="treeHost" style="height:100%;display:grid;place-items:center">${treeSVG()}</div></div>`,
 18:s=>`<div class="done-wrap" id="doneWrap" style="background-image:linear-gradient(rgba(180,20,90,.84),rgba(180,20,90,.9)),url(${IMG[18]})"><div class="confetti" id="confetti"></div><div style="position:relative;z-index:1"><div class="done-h rg">THANK YOU!</div></div></div>`
};
const EXTRA={
 4:pg=>{const b=pg.querySelector('.bub.sp'),st=pg.querySelector('.step');b&&b.addEventListener('click',()=>setTimeout(()=>{st&&st.classList.add('shown')},700))},
 8:pg=>{const svg=pg.querySelector('.taf');const t=svg.querySelectorAll('.tcenter text');pg.querySelectorAll('.seg2 button').forEach(b=>b.addEventListener('click',()=>{const m=b.dataset.mode;pg.querySelectorAll('.seg2 button').forEach(x=>x.classList.toggle('on',x===b));pg.querySelectorAll('[data-set]').forEach(d=>d.hidden=d.dataset.set!==m);t[0].textContent=m==='pos'?'Positive':'Negative';pg.classList.toggle('neg',m==='neg');svg.animate([{transform:'perspective(1400px) rotateY(0)'},{transform:'perspective(1400px) rotateY(360deg)'}],{duration:900,easing:'cubic-bezier(.3,.7,.2,1)'})}));pg.classList.add('neg')},
 9:pg=>{}
};
const wire={};S.forEach(s=>{wire[s.n]=(pg,x)=>{X.wire(pg,x);EXTRA[s.n]&&EXTRA[s.n](pg,x)}});
return {num:1,title:'DOING GOOD, FEELING GOOD',sub:'Creating a Positive, Bully-Free School',
 lockImg:'img/t1.webp',lockCls:'photo',theme:'l1',groups:GROUPS,slides:S,pages:PAGES,wire,
 photos:[1,2,3,4,5,10,12,14,15,16,17,18],
 noBanner:[1,14,18],sprinkle:[2,4,12,16],
 bpos:{1:'center 28%',2:'center 50%',3:'center 25%',4:'center 30%',5:'center 40%',10:'center 34%',12:'center 20%',14:'center 28%',15:'center 42%',16:'center 22%',17:'center 23%',18:'center 28%'},
 tpos:{1:'center 30%',2:'center 48%',3:'center 28%',4:'center 32%',5:'center 40%',10:'center 35%',12:'center 24%',14:'center 30%',15:'center 42%',16:'center 25%',17:'center 26%',18:'center 30%'}};
};
