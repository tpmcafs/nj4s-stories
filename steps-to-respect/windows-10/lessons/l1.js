/* Steps to Respect · Lesson 1: Friendship Calls for Respect
   Slide text and presenter notes are verbatim from the original deck.
   Added by Claude (flagged): slide 17 "Friendship check-in" activity, tile/group labels, UI hints. */
(function(){
const {ico,esc}=STR;
const LESSONS=[['FRIENDSHIP',1],['CONFLICTS BETWEEN FRIENDS',2],['ARE YOU MAD AT ME?',3],['CONFLICT AND BULLYING',4],['BODIES AND BULLYING',5],['REFUSING AND REPORTING',6],['BYSTANDERS CAN HELP',7],['TAKING RESPONSIBILITY',8],['MAKING IT HAPPEN',9],['SAFE, CARING, RESPECTFUL SCHOOL',10]];
const KS=['sky','coral','violet','lime','sun','teal','pink'];
const pic=(f,st)=>`<div class="pic ent" style="${st||'flex:1'}"><div class="im" style="background-image:url(img/${f})"></div></div>`;

/* scenario image with name tags; faces = ring centres, tags = label positions (percent) */
function scene(img,P){return `<div class="scene ent"><div class="win acr"><div class="wt"><span>${ico('people')}</span><span>Photos · ${img}</span><span class="sp"></span><span class="wb">${ico('min')}</span><span class="wb">${ico('max')}</span><span class="wb">${ico('x')}</span></div>
 <div class="imgbox"><img src="img/${img}" alt="Cartoon of three girls in a school cafeteria: Brittany and Nicole sit together at a lunch table while Amy stands holding her lunch box." style="max-height:620px">
 ${P.map((p,i)=>`<span class="ring k-${p.k}" style="left:${p.f[0]}%;top:${p.f[1]}%"></span><button class="tag k-${p.k}" data-ring="${i}" style="left:${p.t[0]}%;top:${p.t[1]}%;animation-delay:${.5+i*.15}s">${p.n}</button>`).join('')}</div></div></div>`}
function wireScene(pg){const rings=STR.$$('.ring',pg);STR.$$('.tag',pg).forEach(t=>t.onclick=e=>{e.stopPropagation();const r=rings[+t.dataset.ring];r.classList.remove('on');void r.offsetWidth;r.classList.add('on')})}

const CHECK=[
 ['Respect','I treat my friend the way I want to be treated.','heart','sky'],
 ['Fairness','The way we treat each other is fair.','target','coral'],
 ['Caring','We show we care about how each other feels.','smile','violet'],
 ['Assume','I assume my friend has good intentions.','eye','lime'],
 ['Check & communicate','When I’m unsure, I check intentions and talk it out.','chat','sun'],
 ['Apologize','I apologize if I hurt my friend by accident.','sorry','teal']];

STR.lesson({
 num:1,app:'Steps to Respect',series:'Steps to Respect',full:'LESSON 1: FRIENDSHIP CALLS FOR RESPECT',hero:'hero.jpg',k:'sky',
 keywords:[{w:'Respect',n:8},{w:'Commitment',n:6},{w:'Intention',n:10},{w:'Jumping to Conclusions',n:13},{w:'Good Intentions',n:15},{w:'Scenario',n:11},{w:'Role Play',n:14},{w:'Icebreaker',n:2},{w:'Friendship check-in',n:17}],
 groups:[
  {name:'Start here',k:'sky',tiles:[{n:1,sz:'l',pos:[0,0]},{n:2,pos:[0,4]},{n:3,pos:[2,4]},{n:4,sz:'w',pos:[4,0]},{util:'timer',label:'Timer',k:'sun',pos:[4,4],faces:[{icon:'timer'},{html:'<span class="liveclock"></span>',cls:'xl'}]},{util:'search',label:'Search this lesson',k:'sky',sz:'w',pos:[6,0],faces:[{icon:'search'},{html:'Respect · Commitment · Intention',cls:'sm'}]},{util:'ac',label:'Presenter notes',k:'violet',pos:[6,4],faces:[{icon:'ac'}]}]},
  {name:'Respect & commitment',k:'violet',tiles:[{n:5,sz:'w',pos:[0,0]},{n:6,pos:[0,4]},{n:7,pos:[2,0]},{n:8,sz:'l',pos:[2,2]},{util:'note',label:'Sticky Notes',k:'sun',pos:[4,0],faces:[{icon:'note'}]},{n:9,sz:'w',pos:[6,0]},{util:'board',label:'Whiteboard',k:'sky',pos:[6,4],faces:[{icon:'board'}]}]},
  {name:'Intentions',k:'coral',tiles:[{n:10,pos:[0,0]},{n:11,sz:'w',pos:[0,2]},{n:12,sz:'w',pos:[2,0]},{n:13,pos:[2,4]},{n:14,pos:[4,0]},{n:15,sz:'w',pos:[4,2]},{n:16,pos:[6,0]},{n:17,pos:[6,2]},{n:18,pos:[6,4]}]}
 ],
 slides:[
 /* 1 */{n:1,t:'Steps to Respect',title:'LESSON 1: FRIENDSHIP CALLS FOR RESPECT',k:'sky',icon:'book',
  faces:[{photo:'hero.jpg'},{html:'Steps to<br>Respect',cls:'xl'},{html:'LESSON 1: FRIENDSHIP CALLS FOR RESPECT'}],
  html:()=>`<div class="wrap">
   <div class="col card acr ent" style="flex:1;justify-content:space-between;padding:52px 56px">
    <div class="kick">LESSON 1: FRIENDSHIP CALLS FOR RESPECT</div>
    <div><div class="h1" style="font-size:132px;font-weight:700;line-height:.95;letter-spacing:-.03em">Steps to<br>Respect</div>
     <div style="display:flex;gap:8px;margin-top:30px">${KS.map((k,i)=>`<i class="k-${k} ent" style="display:block;width:44px;height:44px;background:var(--k);animation-delay:${.3+i*.07}s"></i>`).join('')}</div></div>
    <div style="display:flex;align-items:center;gap:20px"><img src="img/nj4s.png" alt="NJ4S Bergen Hub" style="height:104px"><div class="kick" style="color:#1b1a19;letter-spacing:.1em">NEW JERSEY STATEWIDE STUDENT SUPPORT SERVICES - NJ4S</div></div>
   </div>${pic('hero.jpg','flex:1.05')}</div>`,
  notes:`Introduce
- yourself
- NJ4S`},

 /* 2 */{n:2,t:'Class Icebreaker',k:'sun',icon:'note',
  faces:[{icon:'note'},{html:'“My name is... and I like to...”'}],
  html:()=>`<div class="wrap">
   <div class="col ent" style="width:430px;flex:none">
    <div class="h1">Class Icebreaker</div>
    <div class="lead" style="font-size:34px;font-weight:300">“My name is... and I like to...”</div>
    <form class="form card acr" id="iceF" autocomplete="off">
     <label for="iceA">My name is...</label><input id="iceA" maxlength="28">
     <label for="iceB">and I like to...</label><input id="iceB" maxlength="40">
     <div style="display:flex;gap:8px;margin-top:6px"><button class="btn" type="submit">${ico('plus')}Add sticky note</button><button class="btn ghost" type="button" id="iceClr">${ico('trash')}Clear</button></div>
    </form>
   </div>
   <div class="board card acr ent" id="iceBoard" style="padding:0"><div class="win" style="position:absolute;inset:0;background:transparent;box-shadow:none"><div class="wt" style="background:rgba(255,255,255,.5)"><span>${ico('note')}</span><span>Sticky Notes</span></div></div><div class="hintx"><div>${ico('note')}Add a note for each person.<br>Drag notes to move them.</div></div></div>
  </div>`,
  wire(pg,H){const key='str-ice-L1',B=STR.$('#iceBoard',pg);const save=()=>H.store.set(key,STR.$$('.note',B).map(n=>({x:parseFloat(n.style.left),y:parseFloat(n.style.top),c:H.NC.find(c=>n.classList.contains(c)),r:n._r,html:STR.$('.nb',n).innerHTML})));
   const add=o=>{const n=H.noteEl(o,save);n._r=o.r;B.appendChild(n);return n};
   H.store.get(key,[]).forEach(o=>add(o));
   STR.$('#iceF',pg).onsubmit=e=>{e.preventDefault();const a=STR.$('#iceA',pg),b=STR.$('#iceB',pg);if(!a.value.trim()&&!b.value.trim()){a.focus();return}
    const W=B.clientWidth,Hh=B.clientHeight,c=STR.$$('.note',B).length;
    const cols=Math.max(1,Math.floor((W-30)/232)),rows=Math.max(1,Math.floor((Hh-50)/196)),slot=c%(cols*rows);
    add({x:24+(slot%cols)*232+Math.random()*10,y:48+Math.floor(slot/cols)*196+Math.random()*8+(c>=cols*rows?14:0),c:H.NC[c%H.NC.length],r:(Math.random()*6-3).toFixed(1),edit:true,html:`<b>My name is...</b>${esc(a.value.trim())}<b style="margin-top:10px">and I like to...</b>${esc(b.value.trim())}`});
    save();a.value='';b.value='';a.focus()};
   STR.$('#iceClr',pg).onclick=()=>{STR.$$('.note',B).forEach(n=>n.remove());save()};
   STR.$$('input',pg).forEach(i=>i.addEventListener('keydown',e=>e.stopPropagation()))},
  notes:`**Have students introduce themselves with this icebreaker`},

 /* 3 */{n:3,t:'Class Objectives',k:'violet',icon:'cal',
  faces:[{icon:'cal'},...LESSONS.map(([t,n])=>({html:`${t}<br><span style="font-weight:400;font-size:12px">Lesson ${n}</span>`,cls:'sm'}))],
  html:()=>`<div class="wrap" style="flex-direction:column;gap:24px">
   <div class="ent" style="display:flex;align-items:flex-end;gap:24px"><div class="h1">Class Objectives</div></div>
   <div class="lgrid">${LESSONS.map(([t,n],i)=>`<div class="lt k-${KS[i%7]}${n===1?' today':''}" style="animation-delay:${.15+i*.07}s"><span class="ln">${n}</span>${n===1?'<span class="badge">TODAY</span>':''}<div class="lname">${t}</div><div class="lsub">Lesson ${n}</div></div>`).join('')}</div></div>`,
  notes:`Today we are starting Steps to Respect: A Bullying Prevention Program.

We will be meeting every Tuesday for 10 weeks!

The class objectives you see up here show what we will be discussing over those 10 weeks.

By the end of the program, you will become more confident when making new friends, learn to recognize bullying and what to do about it, how to reach out to someone who is being bullied, and what you can do to help.

Although it may seem we are only talking a lot about bullying, we will also discuss many different social skills which are important for you not only in school right now, but also as an adult!`},

 /* 4 */{n:4,t:'Lesson 1 Objectives',k:'teal',icon:'list',
  faces:[{icon:'list'},{html:'Define respect'},{html:'Understand the importance of clarifying intentions'},{html:'Understand why trust is important in friendship'},{html:'Determine ways to build trust in a friendship'}],
  html:()=>`<div class="wrap">
   <div class="col solid sweep ent" style="width:470px;flex:none;padding:44px 46px;justify-content:space-between">
    <div class="kick">Friendship</div><div style="font-size:230px;font-weight:200;line-height:.8">1</div><div class="h2">Lesson 1 Objectives</div></div>
   <div class="col card acr ent" style="flex:1;gap:8px;padding:40px 40px">
    <div class="kick" style="margin-bottom:12px">WHAT WE'LL DISCUSS TODAY:</div>
    ${['Define respect','Understand the importance of clarifying intentions','Understand why trust is important in friendship','Determine ways to build trust in a friendship'].map(t=>`<div class="chk step" role="checkbox" aria-checked="false" tabindex="0"><span class="bx"><svg viewBox="0 0 24 24"><path d="M5 12.5l4.5 4.5L19 7"/></svg></span>${t}</div>`).join('')}
   </div></div>`,
  wire(pg){STR.$$('.chk',pg).forEach(c=>c.onclick=()=>{c.classList.toggle('on');c.setAttribute('aria-checked',c.classList.contains('on'))})},
  notes:`
Throughout this program, we will practice treating all people with respect.

How many of you feel like you have perfect friendships?

(wait for responses)

How many of you feel like can use some help?

(wait for responses)

For our first lesson, we are going to talk about friends and friendship.

**Read through objectives`},

 /* 5 */{n:5,t:'Everyone has responsibilities.',k:'coral',icon:'school',
  faces:[{photo:'class.jpg'},{html:'WHAT ARE YOU RESPONSIBLE FOR AT SCHOOL?'}],
  html:()=>`<div class="wrap">${pic('class.jpg','flex:.85')}
   <div class="col" style="flex:1">
    <div class="h1 ent">Everyone has responsibilities.</div>
    <div class="ask acr ent">${ico('search')}<span>WHAT ARE YOU RESPONSIBLE FOR AT SCHOOL?</span><span class="caret"></span></div>
    <div class="card acr step" style="display:flex;gap:18px;align-items:flex-start"><span class="chip" style="padding:10px">${ico('star')}</span><div class="lead">Your job is to learn, grow, and become a part of the community.</div></div>
    <div class="card acr step" style="display:flex;gap:18px;align-items:flex-start"><span class="chip" style="padding:10px">${ico('people')}</span><div class="lead">People have to make the <b>commitment</b> for school to be a safe, respectful, and caring environment.</div></div>
   </div></div>`,
  notes:`**Read through/summarize slide

We need everyone at our school to work together to make this school a safe and respectful place. Everyone plays a role in making this happen. We all - adults and students must share this responsibility to help each other.`},

 /* 6 */{n:6,t:'Commitment',k:'violet',icon:'promise',
  faces:[{icon:'promise'},{html:'A promise to carry out a responsibility.'}],
  html:()=>`<div class="wrap">
   <div class="col" style="flex:1.15">
    <div class="card acr dict ent" style="padding:44px 48px;display:flex;flex-direction:column;gap:22px">
     <div class="word">Commitment</div><div class="bar-acc"></div>
     <div class="def">A promise to carry out a responsibility. An understanding that someone can be trusted to do something.</div></div>
    <div class="card solid step" style="display:flex;gap:20px;align-items:center">${ico('people','')}<div class="lead">Teachers, families, and everyone at school is part of this process in your personal growth!</div></div>
   </div>${pic('school.jpg','flex:.85')}</div>`,
  notes:`** Read through/summarize slide

There isn't one person that is responsible for this, everyone in your community needs help from each other to carry out this commitment!`},

 /* 7 */{n:7,t:'Commitment',tile:'Commitment: What do we have to do?',title:'Commitment TO A SAFE, RESPECTFUL, CARING SCHOOL',k:'teal',icon:'shield',
  faces:[{icon:'shield'},{html:'Treat others with respect'},{html:'Refuse and report bullying'},{html:'Be safe and kind'},{html:'Help keep others safe'}],
  html:()=>`<div class="wrap" style="flex-direction:column;justify-content:center;gap:30px">
   <div class="ent"><div class="h1">Commitment</div><div class="kick" style="margin-top:10px">TO A SAFE, RESPECTFUL, CARING SCHOOL</div></div>
   <div class="h2 ent" style="font-weight:300">What do we have to do?</div>
   <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:12px">
    ${[['Treat others with respect','heart','sky'],['Refuse and report bullying','flag','coral'],['Be safe and kind','smile','violet'],['Help keep others safe','shield','lime']].map(([t,i,k])=>`<div class="ftile step sweep k-${k}">${ico(i)}<div class="tx">${t}</div></div>`).join('')}
   </div></div>`,
  notes:`To keep this commitment of safety, respect and care, what do we have to do?

**Read through slide`},

 /* 8 */{n:8,t:'Respect',title:'RESPECT',k:'pink',icon:'heart',
  faces:[{photo:'respect.jpg'},{html:'Treating someone the way you want to be treated.',cls:'xl'}],
  html:()=>`<div class="wrap">${pic('respect.jpg','flex:.8')}
   <div class="col solid sweep ent" style="flex:1.2;padding:52px 56px;justify-content:space-between">
    <div style="font-size:96px;font-weight:200;letter-spacing:.04em;line-height:1">RESPECT</div>
    <div class="mix">Treating someone the way you want to be treated. <b>Everyone should be treated with respect.</b></div>
    <div class="kick">STEPS TO RESPECT DEFINITION</div></div></div>`,
  notes:`How would you define respect? Steps to respect tells us that respect is....

*read through/summarize slide*

Why is respect important?

answers to look for/relay:
It encourages others to treat you with respect and to create a culture of respect. Everybody wants and deserves respect. People who are not respectful create and unhappy environment.`},

 /* 9 */{n:9,t:'Friendships',k:'lime',icon:'people',
  faces:[{photo:'friends.jpg'},{html:'RESPECT IS THE FOUNDATION'}],
  html:()=>`<div class="wrap">
   <div class="col" style="flex:1.1">
    <div class="ent"><div class="h1">Friendships</div><div class="kick" style="margin-top:10px">RESPECT IS THE FOUNDATION</div></div>
    <div class="body ent" style="font-size:27px">Everyone wants and deserves respect. Respect is the foundation for all friendly behaviors.</div>
    <div class="body ent" style="font-size:24px;font-weight:600">If you are unsure whether something is respectful or not, ask:</div>
    <div class="card acr step" style="display:flex;gap:18px;align-items:center;padding:20px 26px"><span class="chip" style="padding:10px">${ico('question')}</span><div class="lead" style="font-weight:600">Is it fair?</div></div>
    <div class="card acr step" style="display:flex;gap:18px;align-items:center;padding:20px 26px"><span class="chip" style="padding:10px">${ico('question')}</span><div class="lead" style="font-weight:600">Does this show that the friend cares about how I feel?</div></div>
   </div>${pic('friends.jpg','flex:.9')}</div>`,
  notes:`**Say

Most of us don't typically learn how to reach out to others, join activities, and make friends. Usually, we learn this through trial and error.

In our class, we are going to concentrate on keeping friends. An important part of keeping friends is learning respectful ways to work out problems and being respectful in our relationships.

If you are unsure whether something is respectful or not, ask:

Is it fair?
Does this show that the friend cares about how I feel? and vice versa`},

 /* 10 */{n:10,t:'Intention',k:'sky',icon:'bulb',
  faces:[{icon:'bulb'},{html:'NOUN<br>An aim, plan, or goal.'}],
  html:()=>`<div class="wrap">${pic('think.jpg','flex:.75')}
   <div class="col" style="flex:1.25">
    <div class="card acr dict ent" style="padding:44px 48px;display:flex;flex-direction:column;gap:18px">
     <div class="word">Intention</div><div class="pos">NOUN</div><div class="bar-acc"></div>
     <div class="def step">An aim, plan, or goal.</div><div class="def step">What a person plans or hopes to do.</div></div>
    <div class="ask acr ent" style="font-size:26px">${ico('question')}<span>WHO CAN TELL ME WHAT THIS MEANS?</span><span class="caret"></span></div>
   </div></div>`,
  notes:`**read through and summarize slide

I am going to read through a scenario. Keep the definition of intention in the back of your mind as I read!`},

 /* 11 */{n:11,t:'Scenario',k:'coral',icon:'people',
  faces:[{photo:'scene1.jpg'},{html:'AMY · BRITTANY · NICOLE'}],
  html:()=>`<div class="wrap" style="flex-direction:column;gap:16px">
   <div class="ent" style="display:flex;align-items:center;gap:20px"><div class="h1">Scenario</div><span class="sp" style="flex:1"></span>
    <button class="btn" id="grpT">${ico('timer')}Group work · 3:00</button></div>
   ${scene('scene1.jpg',[{n:'BRITTANY',k:'sun',f:[27,36],t:[11,24]},{n:'NICOLE',k:'teal',f:[46,37],t:[46,80]},{n:'AMY',k:'violet',f:[82,18],t:[94,30]}])}</div>`,
  wire(pg,H){wireScene(pg);STR.$('#grpT',pg).onclick=()=>{H.timer(180,'Have students work in groups for 3 minutes');H.timerGo()}},
  enter(pg,H){H.toast({k:'coral',icon:'timer',title:'Group work',text:'Have students work in groups for 3 minutes',buttons:[{t:'Start 3:00 timer',pri:1,fn:()=>{H.timer(180,'Have students work in groups for 3 minutes');H.timerGo()}},{t:'Not now'}],ms:12000})},
  notes:`***SAY

Based on this image, can anyone tell me what they think is happening?

(wait for responses)

Let's find out!

***READ Scenario

Amy is new to the school. She and Nicole are in the same class. They have worked together on several projects and have started to become friends. Today they plan to eat lunch together and Amy plans to invite Nicole to do something on the weekend.

In the cafeteria, Amy finds Nicole talking to Brittany. Nicole and Brittany are busy talking and seem to be ignoring Amy.

Amy thinks "Nicole said she would eat lunch with me, but she is completely ignoring me. I don't even know this other girl. Is Nicole ignoring me on purpose?"

***Have students work in groups for 3 minutes to answer the questions on the worksheet. Afterwards, ask a member from each group to answer the questions and discuss.

**Say:

Nicole's intentions are unclear. It is hard to tell whether she is ignoring Amy on purpose.

Raise your hand if you have been in a situation where you didn't know whether someone was doing something on purpose or not.

Let's see how Amy handles this situation.`},

 /* 12 */{n:12,t:'Scenario',tile:'Scenario (continued)',k:'sun',icon:'chat2',
  faces:[{photo:'scene2.jpg'},{html:'“Oh hi Amy. I didn’t see you.”',cls:'sm'}],
  html:()=>`<div class="wrap" style="flex-direction:column;gap:16px">
   <div class="ent"><div class="h1">Scenario</div></div>
   ${scene('scene2.jpg',[{n:'BRITTANY',k:'sun',f:[34,37],t:[14,30]},{n:'NICOLE',k:'teal',f:[52,37],t:[54,12]},{n:'AMY',k:'violet',f:[77,25],t:[90,12]}])}</div>`,
  wire(pg){wireScene(pg)},
  notes:`**SAY

Amy thinks to herself. "Wait, am I overthinking this? I don't know for sure that Nicole is ignoring me. Maybe she didn't see me. I'll say hi and see what happens."

Amy says, "Hi Nicole".

Nicole replies, "Oh hi Amy. I didn't see you. I saved a spot for you. I'd like you to meet my friend Brittany."

**ASK:

What were Nicole's intentions at lunchtime?

(To have lunch with Amy. To introduce Amy to Brittany.)

How do we know this?

(She saved a place for Amy at lunch. She was friendly.)

How would you feel if you were new and someone reached out the way Nicole did?

(grateful, relieved, happy)

**SAY:

Amy misunderstood Nicole's intentions at first and felt hurt. What could have happened if Amy had acted on her misunderstanding?

(Amy could have said things she didn't mean. The girls could have gotten angry. Amy and Nicole might not have become friends.)

What have we learned from Amy's situation?

(Don't jump to conclusions. Ask what a person's intentions are. Give friends a chance to show you that their intentions are good.)`},

 /* 13 */{n:13,t:'Jumping to Conclusions',k:'sun',icon:'stop',
  faces:[{icon:'stop'},{html:'TIPS TO HELP YOU STOP'}],
  html:()=>`<div class="wrap">
   <div class="col solid sweep ent" style="width:500px;flex:none;padding:46px;justify-content:space-between">
    <svg class="i" viewBox="0 0 24 24" style="width:120px;height:120px;stroke-width:1.1">${'<path d="M8.3 3h7.4L21 8.3v7.4L15.7 21H8.3L3 15.7V8.3z"/><path d="M8 12h8"/>'}</svg>
    <div><div class="h1">Jumping to Conclusions</div><div class="kick" style="margin-top:14px">TIPS TO HELP YOU STOP</div></div></div>
   <div class="col" style="flex:1;gap:16px">
    <div class="tip card acr step"><span class="no">1</span><div class="tx">FIRST, STOP AND ASK YOURSELF, “IS THERE A GOOD WAY TO EXPLAIN THESE ACTIONS?”</div></div>
    <div class="tip card acr step"><span class="no">2</span><div class="tx">NEXT, TALK TO THE OTHER PERSON AND FIND OUT HIS OR HER INTENTIONS.</div></div>
   </div></div>`,
  notes:`**SAY

There may be different reasons for a person's actions. When you think you know the reason and don't check it out first, it's called jumping to conclusions.

But it's important to stop and give people a chance. Find out if there are good reasons for a person's actions.

Actions are something you can see. But it's hard to know why a person's intentions are unless you talk about them with him or her.

Here are some tips to help you avoid jumping to conclusions:

**Read through slide`},

 /* 14 */{n:14,t:'Role Play',k:'violet',icon:'chat2',
  faces:[{photo:'project.jpg'},{html:'WORKING ON A GROUP PROJECT'}],
  html:()=>`<div class="wrap">
   <div class="col" style="flex:1.1">
    <div class="ent"><div class="h1">Role Play</div><div class="kick" style="margin-top:10px">WORKING ON A GROUP PROJECT</div></div>
    <div class="card acr ent"><div class="lead">Maya and Jordan are working together on a science project. Jordan makes changes to their poster without asking Maya.</div></div>
    <div class="ent" style="display:flex;gap:12px">
     <div class="person card acr k-pink" style="flex:1"><span class="av">M</span><span class="nm">Maya</span></div>
     <div class="person card acr k-sky" style="flex:1"><span class="av">J</span><span class="nm">Jordan</span></div></div>
   </div>${pic('project.jpg','flex:.9')}</div>`,
  notes:`
**Hand out ROLE PLAY

 BILLY AND KYLE

**Say

What are some ways that Kyle shows his intentions to Bill?

(he apologizes when Bill confronts him)`},

 /* 15 */{n:15,t:'Good Intentions',k:'teal',icon:'heart',
  faces:[{icon:'heart'},{html:'ASSUME',cls:'xl'},{html:'CHECK',cls:'xl'},{html:'COMMUNICATE',cls:'xl'},{html:'APOLOGIZE',cls:'xl'}],
  html:()=>`<div class="wrap" style="flex-direction:column;gap:26px;justify-content:center">
   <div class="h1 ent">Good Intentions</div>
   <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:12px;height:430px">
   ${[['ASSUME','that your friends and the people around you have good intentions','eye','sky'],['CHECK','intentions when you are unsure about something','check','coral'],['COMMUNICATE','to build connection and to make your friendships last','talk','violet'],['APOLOGIZE','if you accidentally hurt someone and to show your good intentions','sorry','lime']].map(([w,d,i,k],j)=>`<button class="fc ent k-${k}" style="animation-delay:${.1+j*.08}s" aria-label="${w}: flip card">
    <div class="fa solid sweep" style="justify-content:space-between">${ico(i)}<div style="font-size:${w.length>9?34:44}px;font-weight:700;letter-spacing:.03em">${w}</div><span class="tap">${ico('chevR')}Flip</span></div>
    <div class="fb acr" style="background:rgba(255,255,255,.82);justify-content:flex-start;gap:16px"><div style="font-size:28px;font-weight:800;color:var(--kt);letter-spacing:.03em">${w}</div><div style="font-size:27px;line-height:1.3">${d}</div></div></button>`).join('')}
   </div></div>`,
  notes:`**SAY
We always want to assume our friends have good intentions. checking intentions is one way to build and keep friendships. It helps friends communicate better with each other. Good communication helps friendships develop and last.

These things build trust in relationships and help our relationships to be more secure. Nobody is perfect and assuming good intentions can help us avoid conflicts that might come from getting upset or angry.

**Read through slide`},

 /* 16 */{n:16,t:'Assume · Check · Communicate · Apologize',title:'Good Intentions: Maya and Jordan',k:'sky',icon:'question',
  faces:[{icon:'question'},{html:'Having good intentions doesn\'t always mean our actions won\'t hurt others.',cls:'sm'}],
  html:()=>`<div class="wrap" style="flex-direction:column;gap:16px;justify-content:center">
   <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:12px">
   ${[['ASSUME','How did Maya avoid assuming Jordan had bad intentions?','sky'],['CHECK','Why was it helpful for Maya to ask Jordan why he removed the drawings?','coral'],['COMMUNICATE ','What could Jordan have done differently before changing the poster?','violet'],['APOLOGIZE ','Why was it important for Jordan to apologize even though he meant well?','lime']].map(([w,q,k],j)=>`<div class="k-${k} ent card acr" style="padding:0;display:flex;flex-direction:column;animation-delay:${.08*j}s"><div class="solid" style="padding:18px 22px;font-size:26px;font-weight:700;letter-spacing:.03em">${w.trim()}</div><div style="padding:22px;font-size:24px;line-height:1.35;flex:1;min-height:200px">${q}</div></div>`).join('')}
   </div>
   <div class="card solid step k-teal" style="display:flex;gap:18px;align-items:center;padding:22px 28px">${ico('heart')}<div class="lead" style="font-size:27px">Having good intentions doesn't always mean our actions won't hurt others.</div></div>
   <div class="card solid step k-pink" style="display:flex;gap:18px;align-items:center;padding:22px 28px">${ico('people')}<div class="lead" style="font-size:27px">Healthy friendships require understanding, communication, and taking responsibility for mistakes.</div></div>
  </div>`,
  notes:``},

 /* 17 (ADDED) */{n:17,t:'Friendship check-in',title:'Friendship check-in (added activity)',k:'lime',icon:'target',
  faces:[{icon:'target'},{html:'How round is your circle?',cls:'sm'}],
  html:()=>`<div class="wrap">
   <div class="col" style="flex:1.25;gap:14px">
    <div class="ent"><span class="added">${ico('plus')}ADDED ACTIVITY</span><div class="h1" style="font-size:54px;margin-top:12px">Friendship check-in</div>
     <div class="body" style="font-size:20px;margin-top:6px">Think about one friendship. Slide each one: 1 is “not yet,” 10 is “always.”</div></div>
    <div class="set ent">${CHECK.map(([n,d,i,k],j)=>`<label class="srow k-${k}"><span class="si">${ico(i)}</span><span><div class="sn">${n}</div><div class="sd">${d}</div></span><input type="range" min="1" max="10" value="5" data-i="${j}" aria-label="${n}"><span class="sv">5</span></label>`).join('')}</div>
   </div>
   <div class="col card acr ent" style="flex:.75;align-items:center;justify-content:center;gap:14px">
    <svg class="circ" id="circ" viewBox="0 0 400 400" role="img" aria-label="A circle sliced into six strips that line up when every rating is 10"></svg>
    <div class="body" id="circMsg" style="font-size:20px;text-align:center;min-height:56px"></div>
    <button class="btn ghost" id="circR">${ico('back')}Reset</button>
   </div></div>`,
  wire(pg,H){const sv=STR.$('#circ',pg),n=CHECK.length,R=170,cy=200,top=cy-R,h=2*R/n;
   sv.innerHTML=`<defs>${CHECK.map((c,i)=>`<clipPath id="cs${i}"><rect x="0" y="${top+i*h}" width="400" height="${h+.6}"/></clipPath>`).join('')}</defs><circle cx="200" cy="200" r="${R}" fill="none" stroke="rgba(0,0,0,.15)" stroke-dasharray="4 6"/>`+
    CHECK.map((c,i)=>`<g class="strip k-${c[3]}" data-i="${i}" clip-path="url(#cs${i})"><circle cx="200" cy="200" r="${R}" style="fill:var(--k)"/></g>`).join('');
   const ins=STR.$$('input',pg),gs=STR.$$('g.strip',sv),msg=STR.$('#circMsg',pg);let done=false;
   const paint=()=>{const v=ins.map(i=>+i.value);ins.forEach((i,j)=>{i.style.setProperty('--p',((v[j]-1)/9*100)+'%');i.closest('.srow').querySelector('.sv').textContent=v[j];gs[j].style.transform=`translateX(${(10-v[j])*9*(j%2?1:-1)}px)`});
    const min=Math.min(...v);if(min===10){msg.innerHTML='<b>Full circle!</b>';if(!done){done=true;const r=sv.getBoundingClientRect();H.burst((r.left+r.width/2)/H.SC(),(r.top+r.height/2)/H.SC(),22)}}else{done=false;const j=v.indexOf(min);msg.innerHTML=`Next step to work on: <b>${CHECK[j][0]}</b>`}};
   ins.forEach(i=>{i.addEventListener('input',paint);i.addEventListener('keydown',e=>e.stopPropagation())});
   STR.$('#circR',pg).onclick=()=>{ins.forEach(i=>i.value=5);paint()};paint()},
  notes:`**ADDED ACTIVITY (not in the original Steps to Respect slides)

Ask students to think privately about one of their own friendships. They don't need to share their answers.

Model it by moving the sliders. Each strip of the circle slides out of line the lower it scores. When every answer is 10, the strips line up into a full circle.

Point out the lowest one as a "next step" and link it back to Assume, Check, Communicate and Apologize.`},

 /* 18 */{n:18,t:'Thank You',k:'sun',icon:'sparkle',
  faces:[{photo:'thanks.jpg'},{html:'ANY QUESTIONS?'}],
  html:()=>`<div style="position:absolute;inset:0">${pic('thanks.jpg','position:absolute;inset:0')}
   <div style="position:absolute;inset:0;background:linear-gradient(90deg,rgba(0,0,0,.45),rgba(0,0,0,0) 60%)"></div>
   <div class="card acr ent" style="position:absolute;left:96px;bottom:80px;padding:44px 52px;width:620px">
    <div style="font-size:120px;font-weight:700;line-height:.9;letter-spacing:-.03em">Thank<br>You</div>
    <div class="kick" style="margin-top:22px;font-size:20px">ANY QUESTIONS?</div>
    <div style="display:flex;gap:8px;margin-top:28px"><button class="btn" data-act="home">${ico('grid')}Back to Start</button><button class="btn ghost" data-act="lock">${ico('lock')}Lock screen</button></div>
   </div></div>`,
  enter(pg,H){const r=STR.$('.card',pg).getBoundingClientRect();H.burst((r.left+r.width*.3)/H.SC(),(r.top+60)/H.SC(),18)},
  notes:``}
 ]
});
})();
