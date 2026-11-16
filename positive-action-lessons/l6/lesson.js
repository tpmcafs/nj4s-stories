window.LESSON_DEF=function(H){
const {ico,K,ct,tick,cap,fc,fhint,hint,tafSVG,ringSVG,smileSVG,targetSVG,treeSVG,IMG,TH}=H;
const SIGN="img/signpost.webp";
const RD=['Someone who hurts, scares, or leaves out another person on purpose, again and again.','The person who is being picked on or hurt by the bullying.','Someone who sees the bullying happen. A bystander can choose to stay silent or to help.','Bullying leaves everyone in the circle feeling hurt, guilty, or bad about themselves.'];
const GROUPS=[
 {id:'g1',name:'Start Here'},
 {id:'g2',name:'Quick Review'},
 {id:'g3',name:'Looking Ahead'},
 {id:'g4',name:'Reaching Our Goals'},
 {id:'g5',name:'Team Time & Wrap-Up'}
];
/* tile: size s/m/w/l, pos [x,y] in units within a 6-row group grid */
const S=[
 {n:1,g:'g1',t:'Lesson 6',c:'#0063B1',i:'book',sz:'l',pos:[0,0],
  live:[`<div class="f-big">Lesson 6</div>`,
        `<div class="f-title">Getting Yourself Pointed in a Positive Direction</div>`,
        `<div class="f-body">Growing, Setting Goals, and Staying Out of the Bullying Circle</div>`]},
 {n:2,g:'g1',t:'About Today',c:'#5C2D91',i:'today',sz:'w',pos:[0,4],
  live:[`<div class="f-base">Today, we’re going to review what we’ve learned so far…</div>`,
        `<div class="f-base">…then we’ll look ahead at how setting goals helps us keep growing in a positive direction.</div>`]},

 {n:3,g:'g2',t:'Quick Review',c:'#00777F',i:'review',sz:'m',pos:[0,0]},
 {n:4,g:'g2',t:'Positive Action Philosophy',c:'#C2410C',i:'smile',sz:'w',pos:[0,2],
  live:[`<div class="f-title">You feel good about yourself when you do positive actions,</div>`,
        `<div class="f-title">and there is a positive way to do everything.</div>`]},
 {n:5,g:'g2',t:'Thoughts–Actions–Feelings Circle',c:'#005FB8',i:'cycle',sz:'m',pos:[2,0],
  live:['Thought','Action','Feeling','Result'].map((w,k)=>`<div class="f-title">${w}</div><div class="dotring">${[0,1,2,3].map(j=>`<i class="${j===k?'on':''}"></i>`).join('')}</div>`)},
 {n:6,g:'g2',t:'What We’ve Learned So Far',c:'#107C10',i:'layers',sz:'w',pos:[4,0],badge:'5',
  live:['Positive actions for our bodies','Positive actions for our minds','Managing ourselves','Getting along with others','Telling the truth'].map(w=>`<div class="f-title">${w}</div>`)},
 {n:7,g:'g2',t:'Managing Ourselves',c:'#A1008B',i:'sliders',sz:'m',pos:[0,4],
  live:['Managing fear','Managing anger','Managing jealousy'].map(w=>`<div class="f-title">${w}</div>`)},
 {n:8,g:'g2',t:'Getting Along With Others',c:'#B4004E',i:'people',sz:'m',pos:[2,4],
  live:[`<div class="f-base">Treat others the way you want to be treated</div>`]},
 {n:9,g:'g2',t:'Honesty',c:'#036E72',i:'shield',sz:'m',pos:[4,2],
  live:[`<div class="f-base">Telling ourselves the truth</div>`,`<div class="f-base">Telling others the truth</div>`]},
 {n:10,g:'g2',t:'Bullying Check',c:'#C50F1F',i:'question',sz:'m',pos:[6,2],badge:'?',
  live:[`<div class="f-base">Is bullying ever a positive action?</div>`]},
 {n:11,g:'g2',t:'The Painful Bullying Circle',c:'#7A1631',i:'brokencycle',sz:'w',pos:[4,4],
  live:['Bully','Victim','Bystander','Feeling Bad About Self'].map(w=>`<div class="row">${ico('brokencycle')}<div class="f-title">${w}</div></div>`)},

 {n:12,g:'g3',t:'Looking Ahead',c:'#00698F',i:'forward',sz:'m',pos:[0,0]},
 {n:13,g:'g3',t:'Goals',c:'#B4470F',i:'target',sz:'m',pos:[0,2],
  live:[`<div class="f-title">What are Goals?</div>`]},
 {n:14,g:'g3',t:'Goals as Direction',c:'#0F7B3A',i:'sign',sz:'l',pos:[2,0],peek:true,
  live:[`<div class="f-title">Goals help point us in the right direction.</div>`]},
 {n:15,g:'g3',t:'Our Lesson Goals',c:'#3F51C9',i:'flag',sz:'w',pos:[0,4],badge:'6',
  live:['Positive Action philosophy','Body & mind','Managing ourselves','Getting along with others','Being honest','Setting goals'].map((w,k)=>`<div class="row"><div class="f-num" style="font-size:calc(var(--u)*.7)">${k+1}</div><div class="f-title">${w}</div></div>`)},
 {n:16,g:'g3',t:'Activity: Growing Toward My Goals',c:'#3F7404',i:'sprout',sz:'m',pos:[4,4],
  live:[`<div class="f-base">Choose one positive action from each unit</div>`,`<div class="f-base">Turn it into a goal</div>`]},

 {n:17,g:'g4',t:'Reaching Our Goals',c:'#6B48A8',i:'mountain',sz:'w',pos:[0,0],
  live:['Believe in your potential','Have courage','Be persistent','Turn problems into opportunities'].map(w=>`<div class="f-title">${w}</div>`)},
 {n:18,g:'g4',t:'Believe in Your Potential',c:'#9A2A90',i:'star',sz:'m',pos:[4,0],
  live:[`<div class="f-title">Everyone has potential</div>`]},
 {n:19,g:'g4',t:'Courage & Persistence',c:'#B83200',i:'stairs',sz:'m',pos:[0,2],
  live:[`<div class="f-base">Courage = trying even when it’s hard</div>`,`<div class="f-base">Persistence = not giving up</div>`]},
 {n:20,g:'g4',t:'Protecting Property',c:'#4C6E66',i:'house',sz:'w',pos:[2,2],
  live:['Be constructive','Care for property','Create, don’t destroy'].map(w=>`<div class="f-title">${w}</div>`)},
 {n:21,g:'g4',t:'Our Commitment',c:'#0B6A0B',i:'heart',sz:'w',pos:[0,4],
  live:[`<div class="f-base">We choose to create useful and beautiful things and protect others’ property.</div>`]},

 {n:22,g:'g5',t:'Team Activity: Choices & Consequences Relay',c:'#B5006F',i:'timer',sz:'l',pos:[0,0],timer:true},
 {n:23,g:'g5',t:'Debrief',c:'#246F8A',i:'chat',sz:'m',pos:[4,0],
  live:[`<div class="f-base">Which choices were hardest?</div>`,`<div class="f-base">How do positive choices change outcomes?</div>`]},
 {n:24,g:'g5',t:'Exit Reflection',c:'#4F4CC2',i:'exit',sz:'m',pos:[4,2],
  live:['One positive action I’ll work on','One goal I’m setting','One way I’ll stay out of the bullying circle'].map(w=>`<div class="f-base">${w}</div>`)},
 {n:25,g:'g5',t:'Closing',c:'#00735F',i:'sunrise',sz:'m',pos:[0,4],
  live:[`<div class="f-base">Positive actions help us grow.</div>`,`<div class="f-base">Goals help us stay on track.</div>`]},
 {n:26,g:'g5',t:'Well Done!',c:'#FFB900',fg:'#1B1A19',i:'trophy',sz:'w',pos:[2,4],
  live:[`<div class="f-big">Well done!</div>`,`<div class="f-title">Thanks for paying attention!</div>`]}
];
const PAGES={
 1:s=>`<div class="sprinkles" aria-hidden="true">${[[3,7,30,'#FFB900'],[44,5,22,'#E3008C'],[93,10,34,'#00B294'],[54,90,26,'#FFB900'],[6,88,36,'#8764B8'],[96,84,22,'#F7630C'],[64,12,18,'#7FBA00'],[91,48,24,'#E81123'],[29,93,20,'#00BCF2']].map(([x,y,sz,k],j)=>`<i style="left:${x}%;top:${y}%;--s:${sz}px;--k:${k};--d:${.6+j*.15}s;--t:${6+j%4}s"></i>`).join('')}</div><div class="split p1wrap" style="flex:1"><div class="title-hero"><span class="l6 rg">Lesson 6</span><h2 class="rg">Getting Yourself Pointed in a Positive Direction</h2><p class="rg">Growing, Setting Goals, and Staying Out of the Bullying Circle</p></div><div class="rg" style="position:relative;padding:4%"><div class="hero-photo"><i style="background-image:url(${IMG[1]})"></i></div>${[['#FFB900','0','0'],['#107C10','auto','0;right:0'],['#C50F1F','0;bottom:0','auto'],['#5C2D91','auto;bottom:0;right:0','auto']].map((q,k)=>`<span class="hero-sq" style="background:${q[0]};top:${q[1]};left:${q[2]};animation-delay:${.5+k*.12}s"></span>`).join('')}</div></div>`,
 2:s=>`${K(s)}<h2 class="ph rg">About Today</h2><div class="split"><p class="lead rg">Today, we’re going to review what we’ve learned so far about Positive Action and bullying, then we’ll look ahead at how setting goals helps us keep growing in a positive direction.</p><div class="rg"><div class="hero-photo"><i style="background-image:url(${IMG[2]})"></i></div></div></div>`,
 3:s=>`${K(s)}<h2 class="ph rg">Quick Review</h2><div class="split"><p class="lead rg">We’ve come a long way in learning how to stop bullying and how to be our greatest selves. Let’s start with a quick review.</p><div class="rg" style="display:grid;place-items:center"><div class="minis">${S.slice(3,11).map((x,k)=>`<button class="mini" data-go="${x.n}" style="--c:${x.c};animation-delay:${.3+k*.07}s" aria-label="Go to ${x.t}"><span class="mf a">${ico(x.i,'',2)}</span><span class="mf b"><span>${x.t}</span></span></button>`).join('')}</div></div></div>`,
 4:s=>`${K(s)}<h2 class="ph rg">Positive Action Philosophy</h2><div class="split"><p class="quote rg">You feel good about yourself when you do positive actions, <span class="q2">and there is a positive way to do everything.</span></p><div class="rg" style="display:grid;place-items:center"><div id="smileHost">${smileSVG()}</div><div class="smile-cap">${ico('tap')}<span>Tap to play again</span></div></div></div>`,
 5:s=>`${K(s)}<h2 class="ph sm rg">Thoughts–Actions–Feelings Circle</h2><div class="split" style="grid-template-columns:1.2fr .8fr"><div class="circle-wrap rg">${tafSVG()}</div><p class="lead rg" style="font-size:clamp(24px,2.6vw,42px)">We use this circle to help us switch from a negative action to a positive one.</p></div>`,
 6:s=>`${K(s)}<h2 class="ph sm rg">What We’ve Learned So Far</h2><div class="ctiles fgrid rg" style="grid-template-columns:repeat(auto-fit,minmax(min(220px,100%),1fr))">
   ${fc('Positive actions for our bodies',{num:1,tag:'1',icon:'heart'})}${fc('Positive actions for our minds',{num:2,tag:'2',icon:'smile'})}${fc('Managing ourselves',{num:3,tag:'3',icon:'sliders',go:7})}${fc('Getting along with others',{num:4,tag:'4',icon:'people',go:8})}${fc('Telling the truth',{num:5,tag:'5',icon:'shield',go:9})}</div>${cap('Each unit has helped us grow in a different way.')}${fhint}`,
 7:s=>`${K(s)}<h2 class="ph rg">Managing Ourselves</h2><div class="ctiles fgrid rg">${fc('Managing fear',{num:1,tag:'1',icon:'fear'})}${fc('Managing anger',{num:2,tag:'2',icon:'anger'})}${fc('Managing jealousy',{num:3,tag:'3',icon:'jealous'})}</div><div class="cap rg">Does anyone remember what this set of behaviors is called?</div>${fhint}`,
 8:s=>`${K(s)}<h2 class="ph rg">Getting Along With Others</h2><div class="split"><div class="rg">${ct('Treat others the way you want to be treated',{icon:'people',cls:'hl'}).replace('class="big"','class="big" style="font-size:clamp(30px,3.6vw,60px)"')}</div><p class="lead rg" style="font-size:clamp(24px,2.6vw,42px)">This is how we manage our relationships with friends, classmates, and family.</p></div>`,
 9:s=>`${K(s)}<h2 class="ph rg">Honesty</h2><div class="ctiles fgrid rg" style="grid-template-columns:repeat(auto-fit,minmax(min(320px,100%),1fr))">${fc('Telling ourselves the truth',{num:1,icon:'shield'})}${fc('Telling others the truth',{num:2,icon:'people'})}</div>${cap('This was the positive action we worked on most recently.')}${fhint}`,
 10:s=>`${K(s)}<h2 class="ph rg">Bullying Check</h2><div class="ctiles fgrid rg" style="grid-template-columns:repeat(auto-fit,minmax(min(340px,100%),1fr))">${ct('Is bullying ever a positive action?',{icon:'question',cls:'hl'})}${fc('Why not?<span class="ans">Bullying is a negative action for everyone involved.</span>',{icon:'question'})}</div>${fhint}`,
 11:s=>`${K(s)}<h2 class="ph sm rg">The Painful Bullying Circle</h2><div class="split" style="grid-template-columns:1.1fr .9fr"><div class="circle-wrap rg" id="ringWrap">${ringSVG({defs:RD})}</div><div class="rg"><p class="lead" style="font-size:clamp(24px,2.6vw,42px)">Bullying always pulls people into a negative cycle that makes everyone feel bad.</p><div class="rdef" id="ringDef" aria-live="polite"><div class="rdef-in"><svg class="rdef-ico" viewBox="-30 -30 60 60" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></svg><div><b class="rdef-t"></b><p class="rdef-d"></p></div></div></div><div class="smile-cap" style="justify-content:flex-start;margin-top:2vh">${ico('tap')}<span>Tap a part of the circle to learn what it means</span></div></div></div>`,
 12:s=>`${K(s)}<h2 class="ph rg">Looking Ahead</h2><div class="split"><p class="lead rg">Today, we’ll focus on how to keep improving ourselves.</p><div class="rg" style="position:relative"><div class="hero-photo"><i style="background-image:url(${IMG[12]});background-position:center 70%"></i></div>${ico('forward','',2.4).replace('<svg','<svg style="position:absolute;left:-6%;bottom:8%;width:min(14vh,10vw);height:auto;filter:drop-shadow(0 4px 10px rgba(0,0,0,.4));animation:nudgeX 1.6s ease-in-out infinite"')}</div></div><style>@keyframes nudgeX{0%,100%{transform:translateX(-10px)}50%{transform:translateX(14px)}}</style>`,
 13:s=>`${K(s)}<h2 class="ph rg">Goals</h2><div class="split" style="grid-template-columns:1fr 1fr;align-items:center"><div class="goal-stack fgrid rg">${ct('What are Goals?',{icon:'target',cls:'hl'})}${fc('A goal is something important to us that we really want to do.',{icon:'target'})}${fhint}</div><div class="target-wrap rg">${targetSVG()}<div class="smile-cap">${ico('tap')}<span>Tap the target</span></div></div></div>`,
 14:s=>`${K(s)}<h2 class="ph rg">Goals as Direction</h2><div class="split" style="grid-template-columns:.9fr 1.1fr"><div class="rg" style="display:grid;place-items:center"><img class="sign" id="signImg" src="${SIGN}" alt="Signpost: Growth, Positive Choices, Staying Out of Bullying"></div><p class="lead rg">Goals help point us in the right direction.</p></div>`,
 15:s=>`${K(s)}<h2 class="ph rg">Our Lesson Goals</h2><div class="timeline rg">${[['Positive Action philosophy',4],['Body & mind',6],['Managing ourselves',7],['Getting along with others',8],['Being honest',9],['Setting goals',13]].map(([w,go],k)=>`<button class="ct link ${k===5?'now':''}" data-go="${go}"><span class="n">${k+1}</span><span class="tag" style="top:auto;position:static;margin-bottom:6px;font-size:clamp(14px,1.1vw,18px);font-weight:600">Lesson ${k+1}</span><div class="big">${w}</div></button>`).join('')}</div>`,
 16:s=>`${K(s)}<h2 class="ph sm rg">Activity: Growing Toward My Goals</h2><div class="ctiles rg">${tick('Choose one positive action from each unit',1)}${tick('Turn it into a goal',2)}</div>${cap('Work quietly, be honest with yourself')}`,
 17:s=>`${K(s)}<h2 class="ph rg">Reaching Our Goals</h2><div class="ctiles rg" style="grid-template-columns:repeat(auto-fit,minmax(min(230px,100%),1fr))">${ct('Believe in your potential',{icon:'star',go:18})}${ct('Have courage',{icon:'stairs',go:19})}${ct('Be persistent',{icon:'mountain',go:19})}${ct('Turn problems into opportunities',{icon:'sprout'})}</div>${cap('These ideas help us keep going even when things are hard.')}`,
 18:s=>`${K(s)}<h2 class="ph rg">Believe in Your Potential</h2><div class="split"><div class="rg">${ct('Everyone has potential',{icon:'star',cls:'hl'}).replace('class="big"','class="big" style="font-size:clamp(34px,4vw,68px)"')}</div><p class="lead rg" style="font-size:clamp(24px,2.6vw,42px)">Potential means you have the power to reach your goals.</p></div>`,
 19:s=>`${K(s)}<h2 class="ph rg">Courage &amp; Persistence</h2><div class="ctiles rg" style="grid-template-columns:repeat(auto-fit,minmax(min(380px,100%),1fr))">${ct('<span class="eq"><b>Courage</b> = <span>trying even when it’s hard</span></span>',{icon:'stairs'})}${ct('<span class="eq"><b>Persistence</b> = <span>not giving up</span></span>',{icon:'mountain'})}</div><div class="stairs rg" aria-hidden="true">${Array.from({length:8},(_,k)=>`<i style="height:${(k+1)*12.5}%;animation-delay:${.5+k*.12}s"></i>`).join('')}</div>${cap('Growth doesn’t happen all at once. It happens step by step.')}`,
 20:s=>`${K(s)}<h2 class="ph rg">Protecting Property</h2><div class="ctiles fgrid rg">${fc('Be constructive',{num:1,icon:'house'})}${fc('Care for property',{num:2,icon:'heart'})}${fc('Create, don’t destroy',{num:3,icon:'sprout'})}</div>${cap('Destroying property is a bullying behavior. Being constructive is a positive action.')}${fhint}`,
 21:s=>`${K(s)}<h2 class="ph rg">Our Commitment</h2><div class="split"><div class="rg">${ct('We choose to create useful and beautiful things and protect others’ property.',{icon:'heart',cls:'hl'}).replace('class="big"','class="big" style="font-size:clamp(28px,3vw,52px)"')}</div><p class="lead rg" style="font-size:clamp(24px,2.6vw,42px)">This is one more goal we’re setting together.</p></div>`,
 22:s=>`${K(s)}<h2 class="ph sm rg">Team Activity: Choices &amp; Consequences Relay</h2><div class="split" style="grid-template-columns:1.25fr .75fr;align-items:stretch"><div class="rg"><div class="kick" style="margin-bottom:12px">How It Works:</div><ol class="howto"><li>There is one scenario at different spots around the room</li><li>Each station has a real-life situation. As a team, decide the most positive choice you could make and what the likely outcome would be.</li><li>You’ll rotate when I call time (every 2 minutes)</li></ol></div><div class="timer rg" id="timerBox"><span class="tl" id="tRound">Rotation 1</span>
   <svg class="ring-prog" viewBox="0 0 120 120"><circle cx="60" cy="60" r="52" fill="none" stroke="rgba(255,255,255,.2)" stroke-width="8"/><circle id="tArc" cx="60" cy="60" r="52" fill="none" stroke="#fff" stroke-width="8" stroke-linecap="butt" transform="rotate(-90 60 60)" stroke-dasharray="326.7" stroke-dashoffset="0"/><text id="tVal" x="60" y="70" text-anchor="middle" font-size="30" font-weight="300" fill="#fff" font-family="inherit">2:00</text></svg>
   <div class="btns"><button class="tbtn" id="tGo">${ico('play','',3)}<span>Start</span></button><button class="tbtn ghost" id="tReset" aria-label="Reset timer">${ico('reset','',3)}</button></div></div></div>`,
 23:s=>`${K(s)}<h2 class="ph rg">Debrief</h2><div class="kick rg" style="opacity:.95">Discuss:</div><div class="ctiles fgrid rg" style="grid-template-columns:repeat(auto-fit,minmax(min(380px,100%),1fr))">${fc('Which choices were hardest?',{num:1,icon:'chat'})}${fc('How do positive choices change outcomes?',{num:2,icon:'chat'})}</div>${fhint}`,
 24:s=>`${K(s)}<h2 class="ph rg">Exit Reflection</h2><div class="ctiles rg">${tick('One positive action I’ll work on',1)}${tick('One goal I’m setting',2)}${tick('One way I’ll stay out of the bullying circle',3)}</div><div class="exitbar rg" id="exitBar"><i></i><i></i><i></i>${ico('star','star',2.4).replace('<svg class="star"','<svg class="star" fill="currentColor"')}</div>${cap('This helps us lock in what we learned today.')}<div class="confetti" id="confetti"></div>`,
 25:s=>`${K(s)}<h2 class="ph rg">Closing</h2><div class="closing-split"><div class="fgrid rg">${fc('Positive actions help us grow.',{num:1,icon:'sprout'})}${fc('Goals help us stay on track.',{num:2,icon:'target'})}${fhint}</div><div class="rg" id="treeHost" style="height:100%;display:grid;place-items:center">${treeSVG()}</div></div>`,
 26:s=>`<div class="done-wrap" id="doneWrap" style="background-image:linear-gradient(rgba(255,185,0,.86),rgba(255,185,0,.9)),url(${IMG[26]})"><div class="confetti" id="confetti"></div><div style="position:relative;z-index:1"><div class="done-h rg">Well Done!</div><div class="done-s rg">Thanks for paying attention!</div></div></div>`
};
return {num:6,title:'Getting Yourself Pointed in a Positive Direction',sub:'Growing, Setting Goals, and Staying Out of the Bullying Circle',
 lockImg:SIGN,theme:'l6',groups:GROUPS,slides:S,pages:PAGES,
 photos:[1,2,3,7,8,9,11,12,13,16,17,18,19,20,21,22,23,24,25,26],
 noBanner:[1,2,12,13,25,26],sprinkle:[3,12,17,22,25],
 bpos:{8:'center 40%',3:'center 30%',23:'center 35%',17:'center 60%',22:'center 22%',7:'center 32%',9:'center 32%',19:'center 30%',20:'center 22%',16:'center 40%',24:'center 44%',21:'center 45%'},
 ringDefs:['Someone who hurts, scares, or leaves out another person on purpose, again and again.','The person who is being picked on or hurt by the bullying.','Someone who sees the bullying happen. A bystander can choose to stay silent or to help.','Bullying leaves everyone in the circle feeling hurt, guilty, or bad about themselves.']};
};
