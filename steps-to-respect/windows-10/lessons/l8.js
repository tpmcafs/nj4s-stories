/* Steps to Respect · Lesson 8: Taking Responsibility — slide text and notes verbatim. Hidden slide 14 left out.
   Group names, the timer buttons and the "Dim the screen" button are added. */
(function(){
const {ico}=STR,K=STR.K,N=o=>K.N(8,o);
const LESSONS=[['FRIENDSHIP','Lesson 1'],['CONFLICTS BETWEEN FRIENDS','Lesson 2'],['ARE YOU MAD AT ME?','Lesson 3'],['CONFLICT AND BULLYING','Lesson 4'],['CULTURAL HUMILITY','Lesson 5'],['REFUSING AND REPORTING','Lesson 6'],['BYSTANDERS CAN HELP','Lesson 7'],['TAKING RESPONSIBILITY','Lesson 8'],['MAKING IT HAPPEN','Lesson 9'],['SAFE, CARING, RESPECTFUL SCHOOL','Lesson 10']];
const tbtn=(id,s,label,txt)=>`<button class="btn ui" id="${id}" data-s="${s}" data-l="${label}">${ico('timer')}${txt}</button>`;
const wireT=(pg,H)=>STR.$$('[data-s]',pg).forEach(b=>b.onclick=()=>{H.timer(+b.dataset.s,b.dataset.l);H.timerGo()});
STR.lesson({num:8,full:'Lesson 8: Taking Responsibility',hero:'l8-hero.jpg',k:'violet',
 keywords:[{w:'Responsibility',n:4},{w:'Mind movie',n:7},{w:'Note cards',n:10},{w:'Older students',n:13},{w:'Good example',n:14}],
 groups:[{name:'Start here',k:'sky',n:[1,2,3,4,5]},{name:'Mind movie',k:'violet',n:[6,7,8,9]},{name:'Taking responsibility',k:'coral',n:[10,11,12,13]},{name:'Practice',k:'teal',n:[14,15,16,17]}],
 slides:[
 {n:1,t:'Steps to Respect',title:'Lesson 8: Taking Responsibility',k:'violet',icon:'book',sz:'l',faces:[{photo:'l8-hero.jpg'},{html:'Steps to<br>Respect',cls:'xl'},{html:'Lesson 8: Taking Responsibility'}],
  html:()=>K.title({kick:'Lesson 8: Taking Responsibility',img:'l8-hero.jpg'}),notes:N(1)},
 {n:2,t:'Class Objectives',k:'violet',icon:'cal',faces:[{icon:'cal'},...LESSONS.map(([t,n])=>({html:`${t}<br><span style="font-weight:400;font-size:12px">${n}</span>`,cls:'sm'}))],
  html:()=>K.classObj({items:LESSONS,today:'Lesson 8'}),notes:N(2)},
 {n:3,t:'Last Week: Bystanders can help',title:'LAST WEEK · Bystanders can help',k:'lime',icon:'eye',faces:[{icon:'eye'},{html:'LET’S SHARE SOME EXAMPLES FOR EACH',cls:'sm'}],
  html:()=>K.tiles({h:'Bystanders can help',kick:'LAST WEEK',items:[['Why it matters to speak up','megaphone','sky'],['How to respond safely','shield','coral'],['How to recognize bullying','eye','violet']],th:240,ts:30,foot:'LET’S SHARE SOME EXAMPLES FOR EACH'}),notes:N(3)},
 {n:4,t:'Today’s Topic',k:'coral',icon:'target',faces:[{icon:'target'},{html:'Stopping bullying is everyone’s responsibility',cls:'sm'}],
  html:()=>K.text({h:'Today’s Topic',cards:['Stopping bullying is <b>everyone’s responsibility</b>','How can we be part of the solution','Setting a good example'],cardIcon:['group','puzzle','star'],
   after:'<div class="kick ent" style="font-size:22px;color:#C2401C">Remember</div>',foot:'“RESPONSIBILITY” DOESN’T MEAN “GETTING INVOLVED IN UNSAFE WAYS."',footIcon:'shield',icon:'target',iconStyle:'flex:.4'}),notes:N(4)},
 {n:5,t:'Lesson 8 Objectives',k:'teal',icon:'list',faces:[{icon:'list'},{html:'Identify positive behaviors'}],
  html:()=>K.lessonObj({tag:'Taking Responsibility',num:8,h:'Lesson 8 Objectives',kick:"WHAT WE'LL DISCUSS TODAY:",items:['Identify problem behaviors','Identify positive behaviors','Explain how taking responsibility helps stop bullying','Understand how older students influence others','Describe what you can do to help']}),wire:pg=>K.wireChk(pg),notes:N(5)},
 {n:6,t:'A safer school',title:'Today we’ll learn how our actions help create a safer school',k:'sky',icon:'school',faces:[{icon:'school'},{html:'how each of us plays a part',cls:'sm'}],
  html:()=>`<div class="wrap"><div class="col solid sweep ent" style="flex:1.1;padding:52px 56px;justify-content:center"><div class="mix" style="font-size:52px">Today we’ll learn how our actions help create a safer school and <b>how each of us plays a part</b></div></div>
   <div class="col" style="flex:.9">${['Stopping bullying is everyone’s responsibility','How we can be part of the solution','Setting a good example'].map((t,i)=>`<div class="card acr step row-card">${ico(['group','puzzle','star'][i])}<div class="lead">${t}</div></div>`).join('')}</div></div>`,notes:N(6)},
 {n:7,t:'Mind Movie Activity',k:'violet',icon:'eye',faces:[{icon:'eye'},{html:'Close your eyes and imagine…',cls:'sm'}],
  html:()=>`<div class="wrap"><div class="col" style="flex:1;gap:22px"><div class="ent"><div class="h1">Mind Movie Activity</div><div class="kick" style="margin-top:12px;font-size:18px">INSTRUCTIONS</div></div>
   <div class="body ent" style="font-size:34px">Close your eyes and imagine…</div>
   <div class="card solid ent" style="padding:34px 38px"><div class="mix" style="font-size:40px">“You’ve moved to a new school where bullying happens a lot...<b>and no one stops it.</b>”</div></div>
   <button class="btn ghost ui" data-act="night" style="align-self:flex-start">${ico('moon')}Dim the screen</button></div>
   <div class="col solid sweep ent icotile mm" style="flex:.55">${ico('eye')}</div></div>`,notes:N(7)},
 {n:8,t:'Mind Movie: Visualize',title:'Mind Movie Activity · VISUALIZE...',k:'violet',icon:'eye',faces:[{icon:'eye'},{html:'VISUALIZE...',cls:'sm'}],
  html:()=>K.text({h:'Mind Movie Activity',kick:'VISUALIZE...',cards:['What it’s like living there','How older kids treat younger ones','How kids act when adults aren’t around','How does it feel to make friends'],cardIcon:['home','group','eye','heart'],icon:'eye',iconStyle:'flex:.4'}),notes:N(8)},
 {n:9,t:'Mind Movie Reflection',k:'sky',icon:'chat',faces:[{icon:'chat'},{html:'WHAT DID YOU SEE?',cls:'sm'}],
  html:()=>K.text({h:'Mind Movie Reflection',kick:'WHAT DID YOU SEE?',cards:['What was the school like?','How were younger kids treated?','How did bullying affect everyone?','How did YOU feel in your mind movie?'],cardIcon:'question',icon:'chat',iconStyle:'flex:.4'}),notes:N(9)},
 {n:10,t:'Note Card Activity',k:'sun',icon:'note',faces:[{icon:'note'},{html:'2 MINUTES PER SIDE.',cls:'sm'}],
  html:()=>`<div class="wrap" style="flex-direction:column;gap:20px;justify-content:center"><div class="ent"><div class="h1">Note Card Activity</div></div>
   <div style="display:grid;grid-template-columns:1fr 1fr;gap:14px">${[['SIDE 1:','Write 2–3 ways students can be part of the bullying problem','sky'],['SIDE 2:','Write 2–3 things that might happen if students don’t take responsibility','coral']].map(([h,t,k])=>`<div class="notecard ent k-${k}"><div class="nc-h solid">${h}</div><div class="nc-b">${t}</div></div>`).join('')}</div>
   <div class="ent" style="display:flex;gap:14px;align-items:center"><div class="card solid" style="padding:16px 24px;font-size:24px;font-weight:700;flex:1">2 MINUTES PER SIDE.<br>NO NAMES ON CARDS.</div>${tbtn('t2',120,'2 MINUTES PER SIDE.','2:00')}</div></div>`,wire:wireT,notes:N(10)},
 {n:11,t:'Share-Out',k:'teal',icon:'chat',faces:[{icon:'chat'},{html:'What did you write?',cls:'sm'}],
  html:()=>K.text({h:'Share-Out',kick:'What did you write?',ps:30,after:K.chips(['Responsibility','Influence','Setting a good example','Safety for all students'],true,2).replace(/class="chipgrid"/,'class="chipgrid big"'),icon:'chat',iconStyle:'flex:.45'}),notes:N(11)},
 {n:12,t:'Small actions',title:'You can make a big difference, even with small actions.',k:'coral',icon:'sparkle',faces:[{icon:'sparkle'},{html:'You can make a big difference, even with small actions.',cls:'sm'}],
  html:()=>`<div class="wrap" style="align-items:center;justify-content:center"><div class="col solid sweep ent" style="flex:1;align-self:stretch;justify-content:center;align-items:center;text-align:center;gap:34px;padding:60px">${ico('sparkle','bigico')}<div style="font-size:84px;font-weight:700;line-height:1.05;max-width:1150px">You can make a big difference, even with small actions.</div></div></div>`,notes:N(12)},
 {n:13,t:'Group Activity Discussion',k:'violet',icon:'group',faces:[{photo:'l8-older.jpg'},{html:'DISCUSS THE FOLLOWING:',cls:'sm'}],
  html:()=>K.steps({h:'Group Activity Discussion',hs:'font-size:58px',kick:'DISCUSS THE FOLLOWING:',steps:[[1,'Why should everyone take responsibility for stopping bullying?'],[2,'Why do older students have special responsibility?'],[3,'What can older students do to decrease bullying?']],ts:27,img:'l8-older.jpg',imgStyle:'flex:.7',after:'<div class="ent" style="margin-top:4px">'+tbtn('t3',180,'Group Activity Discussion','3:00')+'</div>'}),wire:wireT,notes:N(13)},
 {n:14,t:'Skill Practice: Setting a Good Example',k:'lime',icon:'star',faces:[{icon:'star'},{html:'Partner A · Partner B · Positive observer',cls:'sm'}],
  html:()=>`<div class="wrap"><div class="col" style="flex:1.1;gap:16px"><div class="ent"><div class="kick" style="font-size:20px">Skill Practice:</div><div class="h1" style="font-size:60px;margin-top:6px">Setting a Good Example</div></div>
   <div class="body ent" style="font-size:24px;font-weight:600">IN PAIRS, SOME OF YOU WILL ACT OUT ONE POSITIVE ACTION FROM THE GOOD EXAMPLE CARDS.</div>
   <div class="card acr ent" style="padding:24px 30px"><div class="kick" style="margin-bottom:12px">PRACTICE INSTRUCTIONS</div><ul class="blist"><li><b>Partner A:</b> Act out the positive behavior</li><li><b>Partner B:</b> Respond respectfully</li><li><b>Positive observer:</b> Answer the questions on your card while you are observing. Use your Cards to record them.</li></ul></div></div>
   <div class="col" style="flex:.7">${[['Partner A','user','sky'],['Partner B','user','coral'],['Positive observer','eye','violet']].map(([t,i,k])=>`<div class="ftile step sweep k-${k}" style="min-height:150px">${ico(i)}<div class="tx">${t}</div></div>`).join('')}</div></div>`,notes:N(15)},
 {n:15,t:'Demonstrations',k:'sun',icon:'award',faces:[{icon:'award'},{html:'VOLUNTEERS PRESENT!',cls:'sm'}],
  html:()=>`<div class="wrap" style="align-items:center"><div class="col solid sweep ent" style="flex:1;align-self:stretch;justify-content:center;gap:30px;padding:60px"><div style="font-size:96px;font-weight:700;line-height:1">Demonstrations</div><div class="kick" style="font-size:30px">VOLUNTEERS PRESENT!</div><div class="lead" style="font-size:30px;font-weight:600">POSITIVE OBSERVER FEEDBACK</div></div><div class="col solid ent icotile k-sky" style="flex:.45">${ico('award')}</div></div>`,notes:N(16)},
 {n:16,t:'Wrap-Up',k:'teal',icon:'check',faces:[{icon:'check'},{html:'Everyone has a responsibility',cls:'sm'}],
  html:()=>K.tiles({h:'Wrap-Up',items:[['Everyone has a responsibility','group','sky'],['Older students influence younger ones','user','coral'],['Small actions can stop bullying','sparkle','violet'],['You can set a good example every day','star','lime']],th:260,ts:28,foot:'Doing the right thing encourages others to follow.'}),notes:N(17)},
 {n:17,t:'Thank You',k:'sun',icon:'sparkle',faces:[{photo:'l8-thanks.jpg'},{html:'ANY QUESTIONS?'}],
  html:()=>K.thanks({img:'l8-thanks.jpg'}),enter:K.thanksEnter,notes:N(18)}
 ]});
})();
