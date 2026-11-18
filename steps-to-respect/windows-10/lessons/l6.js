/* Steps to Respect · Lesson 6: Refusing and Reporting Bullying — slide text and notes verbatim. Group names, scoreboard and the report form fields are added. */
(function(){
const {ico}=STR,K=STR.K,N=o=>K.N(6,o);
const LESSONS=[['FRIENDSHIP','Lesson 1'],['CONFLICTS BETWEEN FRIENDS','Lesson 2'],['ARE YOU MAD AT ME?','Lesson 3'],['CONFLICT AND BULLYING','Lesson 4'],['CULTURAL DIVERSITY','Lesson 5'],['REFUSING AND REPORTING','Lesson 6'],['BYSTANDERS CAN HELP','Lesson 7'],['TAKING RESPONSIBILITY','Lesson 8'],['MAKING IT HAPPEN','Lesson 9'],['SAFE, CARING, RESPECTFUL SCHOOL','Lesson 10']];
const UNSAFE=['Is the person bigger/older?','Are there multiple people?','Is no adult nearby?','Do I feel trapped?','Do I have friends/allies around?'];
STR.lesson({num:6,full:'LESSON 6:  REFUSING AND REPORTING BULLYING',hero:'l6-hero.jpg',k:'teal',
 keywords:[{w:'Refuse',n:5},{w:'Report',n:6},{w:'Safe to refuse?',n:10},{w:'Assertive',n:14},{w:'Four Ws',n:18},{w:'Carlos and Jody',n:7}],
 groups:[{name:'Start here',k:'sky',n:[1,2,3,4]},{name:'Refuse or report',k:'teal',n:[5,6,7,8,9,10]},{name:'How to refuse',k:'coral',n:[11,12,13,14,15]},{name:'Reporting',k:'violet',n:[16,17,18,19,20]},{name:'Games',k:'sun',n:[21,22,23]}],
 slides:[
 {n:1,t:'Steps to Respect',title:'LESSON 6: REFUSING AND REPORTING BULLYING',k:'teal',icon:'book',sz:'l',faces:[{photo:'l6-hero.jpg'},{html:'Steps to<br>Respect',cls:'xl'},{html:'LESSON 6: REFUSING AND REPORTING BULLYING'}],
  html:()=>K.title({kick:'LESSON 6:  REFUSING AND REPORTING BULLYING',img:'l6-hero.jpg'}),notes:N(1)},
 {n:2,t:'Class Objectives',k:'violet',icon:'cal',faces:[{icon:'cal'},...LESSONS.map(([t,n])=>({html:`${t}<br><span style="font-weight:400;font-size:12px">${n}</span>`,cls:'sm'}))],
  html:()=>K.classObj({items:LESSONS,today:'Lesson 6'}),notes:N(2)},
 {n:3,t:'Lesson 6 Objectives',k:'teal',icon:'list',faces:[{icon:'list'},{html:'Apply assertiveness skills'}],
  html:()=>K.lessonObj({tag:'Reporting and Refusing',num:6,h:'Lesson 6 Objectives',kick:"WHAT WE'LL DISCUSS TODAY:",items:['Evaluate situations and determine a safe response','Apply assertiveness skills','Apply emotion-management techniques','Apply bullying-reporting skills']}),wire:pg=>K.wireChk(pg),notes:N(3)},
 {n:4,t:'Review',k:'sky',icon:'eye',faces:[{icon:'eye'},{html:'RECOGNIZING BULLYING',cls:'sm'}],
  html:()=>K.text({h:'Review',kick:'RECOGNIZING BULLYING',cards:['Is it fair?','Is it one-sided?','Is someone using power in a hurtful way?','How does it feel?'],cardIcon:['scale','stop','hand','heart'],icon:'eye'}),notes:N(4)},
 {n:5,t:'Refuse',title:'REFUSE',k:'coral',icon:'hand',faces:[{icon:'hand'},{html:'saying no to, bullying.',cls:'sm'}],
  html:()=>K.def({word:'REFUSE',kick:'WHAT DOES IT MEAN TO REFUSE BULLYING?',defs:['When you refuse bullying, you are rejecting, or saying no to, bullying.'],icon:'hand'}),notes:N(5)},
 {n:6,t:'Report',title:'REPORT',k:'violet',icon:'flag',faces:[{photo:'l6-report.jpg'},{html:'WHEN SHOULD YOU REPORT BULLYING?',cls:'sm'}],
  html:()=>K.def({word:'REPORT',kick:'WHEN SHOULD YOU REPORT BULLYING?',defs:['You should report bullying to an adult immediately when:'],img:'l6-report.jpg',
   after:`<div class="card acr ent" style="padding:20px 30px"><ul class="blist">${['You or someone else is in danger','Refusing the bullying doesn’t work'].map(t=>`<li class="step">${t}</li>`).join('')}</ul></div>`}),notes:N(6)},
 {n:7,t:'Scenario',k:'sun',icon:'book',sz:'w',faces:[{photo:'l6-scenario.jpg'},{html:'Carlos and Jody',cls:'sm'}],
  html:()=>`<div class="wrap" style="flex-direction:column;gap:20px"><div class="ent"><div class="h1">Scenario</div></div><div class="scene ent"><div class="win acr"><div class="wt"><span>${ico('people')}</span><span>Photos · Scenario</span><span class="sp"></span><span class="wb">${ico('min')}</span><span class="wb">${ico('max')}</span><span class="wb">${ico('x')}</span></div><div class="imgbox"><img src="img/l6-scenario.jpg" alt="A girl talking to a boy who covers his face with his hand" style="width:960px;max-height:600px;object-fit:cover"></div></div></div></div>`,notes:N(7)},
 {n:8,t:'Discussion',k:'sky',icon:'chat',faces:[{icon:'chat'},{html:'THINK ABOUT HOW JODY WAS TALKING TO CARLOS',cls:'sm'}],
  html:()=>K.steps({h:'Discussion',kick:'THINK ABOUT HOW JODY WAS TALKING TO CARLOS',steps:[[1,'Is it fair?'],[2,'How would you feel?'],[3,'Do you think this is bullying?'],[4,'What should he do?']],ts:30,icon:'chat',iconStyle:'flex:.4'}),notes:N(8)},
 {n:9,t:'Brainstorm',k:'teal',icon:'bulb',faces:[{photo:'l6-help.jpg'},{html:'WHAT SHOULD YOU DO',cls:'sm'}],
  html:()=>K.text({h:'Brainstorm',kick:'WHAT SHOULD YOU DO',paras:['What are some things that should be considered as you make a decision?'],ps:36,img:'l6-help.jpg',left:true}),notes:N(9)},
 {n:10,t:'When Is It Safe to Refuse?',k:'coral',icon:'shield',faces:[{icon:'shield'},{html:'If it’s not safe, do NOT refuse.',cls:'sm'}],
  html:()=>K.text({h:'When Is It Safe to Refuse?',hs:'font-size:64px',kick:'THINGS TO CONSIDER',cards:UNSAFE,cardIcon:'question',foot:'If it’s not safe, do NOT refuse.<br>Go straight to reporting',footIcon:'stop',icon:'shield',iconStyle:'flex:.35'}),notes:N(10)},
 {n:11,t:'Steps to Refuse Bullying',k:'coral',icon:'list',faces:[{icon:'list'},{html:'Check your feelings',cls:'sm'}],
  html:()=>K.steps({h:'Steps to Refuse Bullying',ts:24,pad:16,steps:[[1,'Check your feelings'],[2,'Stay or get calm<div class="subs"><span>Take 3 deep breaths</span><span>Say a calming phrase: “Slow down,” “Keep calm”</span></div>'],[3,'Use assertive behaviors<div class="subs"><span>Stand tall</span><span>Look at the person</span><span>Strong, clear voice</span><span>Words that mean “Stop”</span><span>Label behavior (“That’s bullying.”)</span></div>'],[4,'Walk away calmly']],icon:'hand',iconStyle:'flex:.35'}),notes:N(11)},
 {n:12,t:'Step 1: Check your feelings',title:'STEP 1: CHECK YOUR FEELINGS',k:'violet',icon:'heart',faces:[{photo:'l6-feel.png'},{html:'How might you feel if you get bullied?',cls:'sm'}],
  html:()=>K.text({h:'STEP 1: CHECK YOUR FEELINGS',hs:'font-size:60px',kick:'How might you feel if you get bullied?',paras:['It’s normal to feel scared, hurt, angry, or upset.','But sometimes it’s better not to show your emotions to the bully.'],ps:29,ask:'Why?',art:'l6-feel.png'}),notes:N(12)},
 {n:13,t:'Step 2: Stay calm',title:'STEP 2: STAY CALM OR GET CALM',k:'sky',icon:'leaf',faces:[{photo:'l6-breathe.png'},{html:'Let’s practice together!',cls:'sm'}],
  html:()=>K.text({h:'STEP 2: STAY CALM OR GET CALM',hs:'font-size:58px',kick:'Let’s practice together!',cards:['Take a deep breath','Tell yourself “Slow down”'],cardIcon:['leaf','chat'],art:'l6-breathe.png',left:true,after:'<div class="ask acr step">'+STR.ico('question')+'<span>How does your body feel now compared to before?</span><span class="caret"></span></div>'}),notes:N(13)},
 {n:14,t:'Assertive vs. Aggressive',k:'lime',icon:'scale',faces:[{icon:'scale'},{html:'Assertive · Aggressive',cls:'sm'}],
  html:()=>K.cols({h:'Assertive vs. Aggressive',is:30,step:true,cols:[{h:'Assertive',icon:'check',k:'lime',items:['Clear','Respectful','Confident','Strong voice']},{h:'Aggressive',icon:'x',k:'coral',items:['Mean','Hurtful','Yelling','Rude']}],foot:'Being <b>assertive</b> is powerful because it shows confidence without being disrespectful.',footIcon:'award'}),notes:N(14)},
 {n:15,t:'Step 3: Assertive behaviors',title:'STEP 3: USE ASSERTIVE BEHAVIORS',k:'teal',icon:'hand',faces:[{photo:'l6-stop.png'},{html:'Assertive Body Language',cls:'sm'}],
  html:()=>K.text({h:'STEP 3: USE ASSERTIVE BEHAVIORS',hs:'font-size:56px',kick:'Assertive Body Language',list:['Standing or sitting tall','Holding your head up','Keeping eye contact','Using a strong and clear tone','Using words that mean “stop”','Labeling the behavior'],listStep:true,art:'l6-stop.png'}),notes:N(15)},
 {n:16,t:'When to Report Bullying',k:'violet',icon:'flag',faces:[{icon:'flag'},{html:'REPORT IMMEDIATELY WHEN:',cls:'sm'}],
  html:()=>K.text({h:'When to Report Bullying',kick:'REPORT IMMEDIATELY WHEN:',list:['It is not safe to refuse','Someone is in danger','Someone is doing something inappropriate','Your refusing did not work'],listStep:true,
   after:'<div class="kick step" style="font-size:20px">EVEN IF YOU REFUSE SAFELY, REPORT LATER.</div>',foot:'You are never tattling when you are trying to keep someone safe.',footIcon:'shield',icon:'flag',iconStyle:'flex:.35'}),notes:N(16)},
 {n:17,t:'When It May Be Unsafe',k:'coral',icon:'eye',faces:[{icon:'eye'},{html:'THINGS TO CONSIDER',cls:'sm'}],
  html:()=>K.text({h:'When It May Be Unsafe',kick:'THINGS TO CONSIDER',cards:UNSAFE,cardIcon:'question',icon:'eye',iconStyle:'flex:.4'}),notes:N(17)},
 {n:18,t:'Four Ws of Reporting',title:'FOUR WS OF REPORTING',k:'sky',icon:'list',faces:[{photo:'l6-four.png'},{html:'Who? What? When? Where?',cls:'sm'}],
  html:()=>K.steps({h:'FOUR WS OF REPORTING',lead:'Adults need four details:',steps:[['Who','Who was involved?'],['What','What happened?'],['When','When did it happen?'],['Where','Where did it happen?']],ts:30,foot:'These help adults understand the situation so they can stop the bullying',footIcon:'shield',art:'l6-four.png',artStyle:'flex:.55'}),notes:N(18)},
 {n:19,t:'Let’s Practice Reporting',k:'violet',icon:'note',faces:[{icon:'note'},{html:'SCENARIO · REPORT',cls:'sm'}],
  html:()=>`<div class="wrap"><div class="col" style="flex:1;gap:16px"><div class="ent"><div class="h1">Let’s Practice Reporting</div></div>
   <div class="win acr ent story"><div class="wt">${ico('book')}<span>SCENARIO</span></div><div class="lead" style="padding:22px 28px;font-size:28px">Jeremy and Paul tell Ronny “if you don’t give us the homework, you’re going to have to watch your back” at recess and laugh while holding  scissors</div></div></div>
   <div class="col ent" style="flex:.85"><div class="win acr reportform"><div class="wt" style="background:var(--k);color:var(--kf)">${ico('flag')}<span style="font-weight:600">REPORT</span></div>
   <div style="padding:22px 26px;display:flex;flex-direction:column;gap:12px">${['Who?','What?','When?','Where?'].map(q=>`<label class="rf"><span>${q}</span><input type="text" autocomplete="off"></label>`).join('')}</div></div></div></div>`,
  wire:pg=>STR.$$('input',pg).forEach(i=>i.addEventListener('keydown',e=>e.stopPropagation())),notes:N(19)},
 {n:20,t:'An Unsafe Situation',title:'Let’s Practice An Unsafe Situation',k:'coral',icon:'stop',faces:[{icon:'stop'},{html:'IS IT SAFE TO REFUSE? NO',cls:'sm'}],
  html:()=>`<div class="wrap"><div class="col" style="flex:.9;gap:16px"><div class="ent"><div class="h1" style="font-size:52px">Let’s Practice An Unsafe Situation:</div><div class="h2" style="margin-top:10px;font-weight:300">What Do You Do?</div></div>
   <div class="win acr ent story"><div class="wt">${ico('book')}<span>SCENARIO</span></div><div class="lead" style="padding:22px 28px;font-size:30px">Walking home, three older students jump out and demand money</div></div>
   <div class="card acr ent" style="display:flex;align-items:center;gap:18px;padding:18px 24px"><span class="kick" style="font-size:20px">IS IT SAFE TO REFUSE?</span><span class="chip step k-coral" style="font-size:26px;padding:8px 18px">NO</span></div></div>
   <div class="col" style="flex:1;gap:10px"><div class="kick ent" style="font-size:20px">WHAT SHOULD YOU DO?</div>${['Stay calm','Go along until escape is possible','Make an excuse','Call for help if others are around','Ask an observer to get help','Report ASAP'].map((t,i)=>`<div class="tip card acr step" style="padding:14px 20px;align-items:center"><span class="no" style="width:46px;height:46px;font-size:22px">${i+1}</span><div class="tx" style="font-size:25px">${t}</div></div>`).join('')}</div></div>`,notes:N(20)},
 {n:21,t:'Game Time: Refuse or Report?',title:'GAME TIME · “REFUSE OR REPORT?” RELAY',k:'sun',icon:'award',faces:[{icon:'award'},{html:'REFUSE OR REPORT?',cls:'sm'}],
  html:()=>`<div class="wrap" style="position:relative">${K.score('l6')}<div class="col" style="flex:1.1;gap:16px"><div class="ent"><div class="kick" style="font-size:20px">GAME TIME</div><div class="h1" style="font-size:60px;margin-top:8px">REFUSE OR REPORT?” RELAY</div></div>
   <div class="card acr ent" style="padding:24px 30px"><div class="kick" style="margin-bottom:12px">HOW TO PLAY:</div><ul class="blist">${['WE WILL PLAY IN TEAMS','I WILL READ A BULLYING SCENARIO','TEAMS HOLD UP A CARD:'].map(t=>`<li>${t}</li>`).join('')}</ul></div>
   <div class="ent" style="display:flex;gap:12px"><div class="gcard" style="background:#C2401C">🟥 “REFUSE”</div><div class="gcard" style="background:#0063B1">🟦 “REPORT”</div></div>
   <div class="card solid ent" style="padding:16px 24px;font-size:24px;font-weight:700">CORRECT ANSWER EARNS 1 POINT.</div></div>
   <div class="col solid sweep ent icotile" style="flex:.35">${ico('award')}</div></div>`,wire:pg=>K.wireScore(pg),notes:N(21)},
 {n:22,t:'Game Time: Assertive or not?',title:'GAME TIME · ASSERTIVE OR NOT?',k:'lime',icon:'scale',faces:[{icon:'scale'},{html:'ASSERTIVE OR NOT?',cls:'sm'}],
  html:()=>`<div class="wrap" style="flex-direction:column;gap:20px;justify-content:center"><div class="ent"><div class="kick" style="font-size:20px">GAME TIME</div><div class="h1" style="font-size:66px;margin-top:8px">ASSERTIVE OR NOT?</div></div>
   <div class="card acr ent" style="padding:22px 30px"><div class="kick" style="margin-bottom:12px">HOW TO PLAY:</div><ul class="blist">${['I WILL READ SOME PHRASES','MOVE TO THE ASSERTIVE OR NOT ASSERTIVE SIDE OF THE ROOM.'].map(t=>`<li>${t}</li>`).join('')}</ul></div>
   <div class="ent" style="display:grid;grid-template-columns:1fr 1fr;gap:12px;height:220px"><div class="zone k-lime solid">${ico('check')}ASSERTIVE</div><div class="zone k-coral solid">${ico('x')}NOT ASSERTIVE</div></div></div>`,notes:N(22)},
 {n:23,t:'Thank You',title:'THANK YOU',k:'sun',icon:'sparkle',faces:[{photo:'l6-thanks.jpg'},{html:'THANK YOU'}],
  html:()=>K.thanks({img:'l6-thanks.jpg',h:'THANK YOU',size:96,sub:''}),enter:K.thanksEnter,notes:N(23)}
 ]});
})();
