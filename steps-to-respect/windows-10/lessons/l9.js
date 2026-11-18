/* Steps to Respect · Lesson 9: Making It Happen — slide text and notes verbatim.
   Added: group names, countdown rings and answer reveals in the memory game (answers come from the presenter notes), timer button. */
(function(){
const {ico}=STR,K=STR.K,N=o=>K.N(9,o);
const LESSONS=[['FRIENDSHIP','Lesson 1'],['CONFLICTS BETWEEN FRIENDS','Lesson 2'],['ARE YOU MAD AT ME?','Lesson 3'],['CONFLICT AND BULLYING','Lesson 4'],['CULTURAL HUMILITY','Lesson 5'],['REFUSING AND REPORTING','Lesson 6'],['BYSTANDERS CAN HELP','Lesson 7'],['TAKING RESPONSIBILITY','Lesson 8'],['MAKING IT HAPPEN','Lesson 9']];
/* pixel-game scene for the Memory Game icebreaker */
const game=(inner,opt={})=>`<div class="wrap" style="max-height:none"><div class="win gamewin ent" style="flex:1"><div class="wt">${ico('award')}<span>Memory Game</span><span class="sp"></span><span class="wb">${ico('min')}</span><span class="wb">${ico('max')}</span><span class="wb">${ico('x')}</span></div>
 <div class="gscene"><img class="g cl1" src="img/l9-cloud.png" alt=""><img class="g cl2" src="img/l9-cloud.png" alt=""><img class="g tree" src="img/l9-tree.png" alt=""><img class="g bld" src="img/l9-building.png" alt="">${opt.pipe?'<img class="g pipe" src="img/l9-pipe.png" alt="">':''}<img class="g coin" src="img/l9-coin.png" alt=""><div class="ground"></div>
 <div class="gin">${inner}</div></div></div></div>`;
const ycard=(t,st)=>`<div class="ycard" style="${st||''}">${t}</div>`;
const ring=s=>`<div class="cdown" data-s="${s}"><svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="44"/><circle class="f" cx="50" cy="50" r="44"/></svg><b>${s}</b></div>`;
const wireRing=pg=>{const r=STR.$('.cdown',pg);if(!r)return;const s=+r.dataset.s,f=STR.$('.f',r),b=STR.$('b',r),t0=Date.now();const tick=()=>{if(!r.isConnected)return;const left=Math.max(0,s-(Date.now()-t0)/1000);b.textContent=Math.ceil(left);f.style.strokeDashoffset=(276.5*(1-left/s)).toFixed(1);if(left>0)requestAnimationFrame(tick);else r.classList.add('done')};setTimeout(tick,600)};
const q=(n,h,question,ans)=>({n,t:h,k:'sun',icon:'question',faces:[{icon:'question'},{html:question,cls:'sm'}],
 html:()=>game(`<div class="gh">${h}</div>${ycard(question,'font-size:46px;padding:44px 60px;max-width:900px')}<div class="ans step">${ans}</div>`),notes:N(n)});
STR.lesson({num:9,full:'LESSON 9: MAKING IT HAPPEN',hero:'l9-hero.jpg',k:'sun',
 keywords:[{w:'Memory Game',n:3},{w:'Goal setting',n:20},{w:'Good goal',n:23},{w:'Passport',n:25},{w:'Contact',n:28}],
 groups:[{name:'Start here',k:'sky',n:[1,2]},{name:'Memory game',k:'violet',n:[3,4,5,6,7,8,9,10,11,12,13,14]},{name:'Making it happen',k:'coral',n:[15,16,17,18,19,20,21,22]},{name:'Goals',k:'teal',n:[23,24,25,26,27,28]}],
 slides:[
 {n:1,t:'Steps to Respect',title:'LESSON 9: MAKING IT HAPPEN',k:'sun',icon:'book',sz:'l',faces:[{photo:'l9-hero.jpg'},{html:'Steps to<br>Respect',cls:'xl'},{html:'LESSON 9: MAKING IT HAPPEN'}],
  html:()=>K.title({kick:'LESSON 9: MAKING IT HAPPEN',img:'l9-hero.jpg'}),notes:N(1)},
 {n:2,t:'Class Objectives',k:'violet',icon:'cal',faces:[{icon:'cal'},...LESSONS.map(([t,n])=>({html:`${t}<br><span style="font-weight:400;font-size:12px">${n}</span>`,cls:'sm'}))],
  html:()=>K.classObj({items:LESSONS,today:'Lesson 9'}),notes:N(2)},
 {n:3,t:'Memory Game',title:'Icebreaker · Memory Game',k:'violet',icon:'award',faces:[{icon:'award'},{html:'Icebreaker<br>Memory Game'}],
  html:()=>game(`<div class="gtag">Icebreaker</div><div class="gbig">Memory<br>Game</div><div class="garrow">➜</div>`),notes:N(3)},
 {n:4,t:'Rules',k:'violet',icon:'list',faces:[{icon:'list'},{html:'Let’s see how good your memory is!',cls:'sm'}],
  html:()=>game(`<div class="gh" style="font-size:54px">Rules</div><div class="grules">${['You will see different types of memory challenges.','Pay close attention to the given information.','After a few seconds, a question will appear.','Try to answer correctly before the answer is revealed.','Let’s see how good your memory is!'].map(t=>`<div class="step"><span>${ico('check')}</span>${t}</div>`).join('')}</div>`),notes:N(4)},
 {n:5,t:'Are You Ready To Play?',k:'violet',icon:'run',faces:[{icon:'run'},{html:'Are You Ready To Play?',cls:'sm'}],
  html:()=>game(`<div class="gbig" style="font-size:96px">Are You Ready To Play?</div><img class="heartbar" src="img/l9-heart.png" alt="">`,{pipe:1}),notes:N(5)},
 {n:6,t:'Observation Challenge',k:'sun',icon:'eye',faces:[{photo:'l9-leaves.jpg'},{html:'Look at the following image for 5 seconds',cls:'sm'}],
  html:()=>game(`<div class="gh">Observation Challenge</div><div style="display:flex;gap:30px;align-items:center"><img src="img/l9-leaves.jpg" alt="A row of leaves hanging on a string, changing from green to orange to red" style="height:420px;box-shadow:0 10px 30px rgba(0,0,0,.4)">${ring(5)}</div>${ycard('Look at the following image for 5 seconds','font-size:24px;padding:14px 30px')}`),wire:wireRing,notes:N(6)},
 q(7,'Observation Question','How many red objects were in the image?','2'),
 {n:8,t:'Word Sequence Challenge',k:'sun',icon:'list',faces:[{icon:'list'},{html:'apple · banana · carrot · donut · Elephant',cls:'sm'}],
  html:()=>game(`<div class="gh">Word Sequence Challenge</div><div class="gsub">Memorize these words</div><div class="gwords">${['apple','banana','carrot','donut','Elephant'].map((w,i)=>ycard(w,`animation-delay:${.2+i*.15}s`)).join('')}</div>`),notes:N(8)},
 q(9,'Word Sequence Question','What was the third word in the sequence?','carrot'),
 {n:10,t:'Number Memory Challenge',k:'sun',icon:'grid',faces:[{icon:'grid'},{html:'4 7 9 2 1 6',cls:'xl'}],
  html:()=>game(`<div class="gh">Number Memory Challenge</div><div class="gsub">Memorize this number in 5 seconds</div><div style="display:flex;gap:40px;align-items:center"><div class="gnums">${[4,7,9,2,1,6].map((d,i)=>`<span style="animation-delay:${.2+i*.1}s">${d}</span>`).join('')}</div>${ring(5)}</div>`),wire:wireRing,notes:N(10)},
 q(11,'Number Memory Question','What were the last two digits?','1 and 6'),
 {n:12,t:'Shape Memory Challenge',k:'sun',icon:'star',faces:[{icon:'star'},{html:'Look at the following image for 10 seconds',cls:'sm'}],
  html:()=>game(`<div class="gh">Shape Memory Challenge</div><div style="display:flex;gap:40px;align-items:center"><svg class="gshapes" viewBox="0 0 640 300" aria-label="A green circle, a yellow plus sign, a blue-grey square, a purple oval and a red triangle">
   <circle cx="110" cy="80" r="62" fill="#76BE34" stroke="#111" stroke-width="7"/><path d="M262 22h56v58h58v56h-58v58h-56v-58h-58V80h58z" transform="translate(-10 -6) scale(.85) translate(30 10)" fill="#FFCB05" stroke="#111" stroke-width="8"/><rect x="430" y="20" width="120" height="120" fill="#7FA6AD" stroke="#111" stroke-width="7"/>
   <ellipse cx="200" cy="225" rx="110" ry="60" fill="#9B6DBE" stroke="#111" stroke-width="7"/><path d="M440 290L505 165L570 290z" fill="#E05A5A" stroke="#111" stroke-width="7" stroke-linejoin="round"/></svg>${ring(10)}</div>${ycard('Look at the following image for 10 seconds','font-size:24px;padding:14px 30px')}`,{pipe:1}),wire:wireRing,notes:N(12)},
 q(13,'Shape Memory Question','What was the color of the triangle?','red'),
 {n:14,t:'Thank You',tile:'Memory Game: Thank You',k:'violet',icon:'sparkle',faces:[{icon:'sparkle'},{html:'Great job! You have tested your memory skills.',cls:'sm'}],
  html:()=>game(`<div class="gbig" style="font-size:120px">Thank<br>You</div>${ycard('Great job! You have tested your memory skills.','font-size:26px;padding:16px 34px')}`),enter:(pg,H)=>{const r=STR.$('.gbig',pg).getBoundingClientRect();H.burst((r.left+r.width/2)/H.SC(),(r.top+r.height/2)/H.SC(),24)},notes:N(14)},
 {n:15,t:'Lesson 9 Objectives',k:'teal',icon:'list',faces:[{icon:'list'},{html:'Develop a personal goal'}],
  html:()=>K.lessonObj({tag:'Making It Happen',num:9,h:'Lesson 9 Objectives',kick:"WHAT WE'LL DISCUSS TODAY:",items:['Understand how to set personal goals','Develop a personal goal','Understand how to measure progress toward personal goals','Identify ways to cope with setbacks']}),wire:pg=>K.wireChk(pg),notes:N(15)},
 {n:16,t:'Turning Ideas Into Action',title:'TURNING IDEAS INTO ACTION',k:'lime',icon:'home',faces:[{photo:'l9-house.png'},{html:'Safe, respectful, caring, bully-free',cls:'sm'}],
  html:()=>K.text({h:'Who knows how to describe the school environment we all want to create?',hs:'font-size:52px',chip:'TURNING IDEAS INTO ACTION',art:'l9-house.png',artStyle:'flex:.5',after:'<div class="card solid step" style="padding:30px 36px"><div style="font-size:64px;font-weight:800;line-height:1.05">Safe, respectful,<br>caring, bully-free</div></div>'}),notes:N(16)},
 {n:17,t:'Group Activity',k:'coral',icon:'group',faces:[{photo:'l9-group.jpg'},{html:'OTHERS AT RECESS · OTHERS IN CLASS',cls:'sm'}],
  html:()=>K.text({h:'Group Activity',paras:['In your groups, you are going to list different ways to show respect to:'],ps:28,after:K.chips(['OTHERS AT RECESS','OTHERS IN CLASS','YOUNGER STUDENTS','FAMILY MEMBERS'],true,2).replace(/class="chipgrid"/,'class="chipgrid big"')+`<button class="btn ui ent" id="t5" style="align-self:flex-start">${ico('timer')}5:00</button>`,img:'l9-group.jpg'}),
  wire:(pg,H)=>{STR.$('#t5',pg).onclick=()=>{H.timer(300,'Group Activity');H.timerGo()}},notes:N(17)},
 {n:18,t:'Share Outs',k:'violet',icon:'chat',faces:[{icon:'chat'},{html:'Is each idea stated positively?',cls:'sm'}],
  html:()=>K.text({h:'Share Outs',paras:['What did you guys come up with as a group for showing respect to:'],ps:28,after:K.chips(['OTHERS AT RECESS','OTHERS IN CLASS','YOUNGER STUDENTS','FAMILY MEMBERS'],false,4),cards:['Is each idea stated positively?','Is each one stated as a behavior?'],cardIcon:'question',icon:'chat',iconStyle:'flex:.35'}),notes:N(18)},
 {n:19,t:'Behaving Respectfully',k:'pink',icon:'heart',faces:[{icon:'heart'},{html:'CREATING A CARING SCHOOL',cls:'sm'}],
  html:()=>K.text({h:'Behaving Respectfully',kick:'CREATING A CARING SCHOOL',paras:['Think about the list of things we came up with and choose a behavior you would like to improve.'],ps:36,icon:'heart'}),notes:N(19)},
 {n:20,t:'Goal Setting',k:'sky',icon:'target',faces:[{photo:'l9-goal.jpg'},{html:'WHAT DOES IT MEAN TO SET A GOAL?',cls:'sm'}],
  html:()=>K.def({word:'Goal Setting',kick:'WHAT DOES IT MEAN TO SET A GOAL?',defs:['You decide on a specific thing that you want to work toward.'],img:'l9-goal.jpg',imgLeft:true}),notes:N(20)},
 {n:21,t:'Goal Setting',tile:'Why set goals?',k:'sky',icon:'target',faces:[{icon:'target'},{html:'WHY DO PEOPLE SET GOALS?',cls:'sm'}],
  html:()=>K.def({word:'Goal Setting',kick:'WHY DO PEOPLE SET GOALS?',defs:['People set goals when there is something they want or need to achieve.'],icon:'target'}),notes:N(21)},
 {n:22,t:'Behavior Goals',k:'teal',icon:'award',faces:[{icon:'award'},{html:'WAYS TO SET GOALS FOR YOURSELF',cls:'sm'}],
  html:()=>K.text({h:'Behavior Goals',kick:'WAYS TO SET GOALS FOR YOURSELF',paras:['One of the best ways to achieve a goal is to make a plan and keep track of your progress.'],ps:36,icon:'award'}),notes:N(22)},
 {n:23,t:'Setting a Good Goal',title:'Setting a Good Goal and Planning for Success',k:'coral',icon:'target',faces:[{icon:'target'},{html:'MEANINGFUL · MEASURABLE · REALISTIC · MANAGEABLE',cls:'sm'}],
  html:()=>K.flips({h:'Setting a Good Goal and Planning for Success',ch:420,fs:30,bs:28,cards:[['MEANINGFUL','Why is this important to me?','heart','sky'],['MEASURABLE','What needs to happen and when? How many resources do I need?','scale','coral'],['REALISTIC','What resources can I use? Can it be achieved in a certain amount of time?','check','violet'],['MANAGEABLE','What is the schedule for the steps involved? What is first, second, third?','cal','lime']]}),notes:N(23)},
 {n:24,t:'Example',k:'teal',icon:'star',faces:[{icon:'star'},{html:'I want to be nicer to my sibling',cls:'sm'}],
  html:()=>`<div class="wrap"><div class="col solid sweep ent" style="flex:.8;padding:48px;justify-content:center;gap:24px"><div style="font-size:84px;font-weight:700">Example</div><div class="mix" style="font-size:38px;font-weight:600">I want to be nicer to my sibling and help them get better at a sport.</div></div>
   <div class="col" style="flex:1.2;gap:10px">${[['MEANINGFUL','I only have one sibling and we know each other the best.','sky'],['MEASURABLE','I can help my sibling with sports by practicing with them once a week.','coral'],['REALISITIC','We can play at the field by my house and ask our parents to come with us.','violet'],['MANAGEABLE','First, I am going to make sure we choose a day that we are all free. Next, I will try to make sure my sibling makes the team at school.','lime']].map(([h,t,k])=>`<div class="card acr step k-${k}" style="padding:16px 22px"><div class="kick" style="color:var(--kt)">${h}</div><div class="lead" style="font-size:24px;margin-top:4px">${t}</div></div>`).join('')}</div></div>`,notes:N(24)},
 {n:25,t:'Passport to My Future',title:'PASSPORT TO MY FUTURE',k:'violet',icon:'globe',faces:[{icon:'globe'},{html:'Imagine yourself in ten years.',cls:'sm'}],
  html:()=>`<div class="wrap" style="align-items:center"><div class="col solid sweep ent" style="flex:1.2;align-self:stretch;justify-content:center;gap:26px;padding:60px"><div class="chip" style="align-self:flex-start;background:#1b1a19;color:#fff;font-size:18px">PASSPORT TO MY FUTURE</div><div class="mix" style="font-size:56px">Imagine yourself in ten years.<br><b>What kind of person would you want to be?</b></div><div class="kick" style="font-size:22px">FILL OUT THE PASSPORT TO GET YOU THERE!</div></div>
   <div class="passport-cover ent">${ico('globe')}<span>PASSPORT</span></div></div>`,notes:N(25)},
 {n:26,t:'Instructions: Passport',title:'INSTRUCTIONS',k:'violet',icon:'book',faces:[{photo:'l9-kid.png'},{html:'PASSPORT · VISAS',cls:'sm'}],
  html:()=>`<div class="wrap"><div class="col" style="flex:.6;gap:18px"><div class="ent"><div class="h1" style="font-size:58px">INSTRUCTIONS</div></div><div class="body ent" style="font-size:30px">Think about a goal you want to achieve for your personality.</div></div>
   <div class="passport ent"><div class="pp-page"><div class="pp-h">PASSPORT</div><div class="pp-photo"><img src="img/l9-kid.png" alt="Drawing of a smiling girl"><span>This is me today</span></div><div class="pp-row"><span>NAME</span><b>Miss KaTIE</b></div><div class="pp-row"><span>This year I will:</span><b>Be a kinder sister by helping my sibling get better at sports.</b></div></div>
   <div class="pp-page"><div class="pp-h">VISAS</div>${[['First Stop','Practice afterschool'],['Second Stop','Speak kindly'],['Third Stop','Be encouraging']].map(([s,t],i)=>`<div class="visa step" style="--r:${[-4,3,-2][i]}deg"><span>${s}</span><b>${t}</b></div>`).join('')}<div class="pp-row step"><span>This is me in 10 years</span><b>Someone who is helpful, kind, and caring, especially to my family.</b></div></div></div></div>`,notes:N(26)},
 {n:27,t:'Good Luck!',k:'sun',icon:'sparkle',faces:[{photo:'l9-luck.jpg'},{html:'Good Luck!',cls:'xl'}],
  html:()=>K.thanks({img:'l9-luck.jpg',h:'Good Luck!',size:110,sub:''}),enter:K.thanksEnter,notes:N(27)},
 {n:28,t:'Contact Information',k:'sky',icon:'phone',faces:[{icon:'phone'},{html:'(201) 225-8849',cls:'sm'}],
  html:()=>`<div class="wrap"><div class="col" style="flex:1;gap:16px"><div class="ent"><div class="kick" style="font-size:18px">IF YOU HAVE ANY QUESTIONS...</div><div class="h1" style="margin-top:8px">Contact Information</div></div>
   ${[['phone','PHONE NUMBER','(201) 225-8849'],['mail','EMAIL ADDRESS','info@nj4sbergen.org'],['sparkle','INSTAGRAM','@NJ4S_BERGEN']].map(([i,h,t],j)=>`<div class="card acr ent row-card k-${K.KS[j]}"><span class="chip" style="padding:12px">${ico(i)}</span><div><div class="kick" style="color:var(--kt)">${h}</div><div class="lead" style="font-size:32px;font-weight:700">${t}</div></div></div>`).join('')}</div>
   <div class="artbox ent" style="flex:.8"><img src="img/nj4s.png" alt="NJ4S Bergen Hub logo"></div></div>`,notes:N(28)}
 ]});
})();
