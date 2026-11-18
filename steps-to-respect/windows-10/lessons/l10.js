/* Steps to Respect · Session 10: Maintaining a Safe, Caring, Respectful School Community — slide text and notes verbatim.
   Added: group names, timer button on the pamphlet slide. */
(function(){
const {ico}=STR,K=STR.K,N=o=>K.N(10,o);
const LESSONS=[['FRIENDSHIP','Lesson 1'],['CONFLICTS BETWEEN FRIENDS','Lesson 2'],['ARE YOU MAD AT ME?','Lesson 3'],['CONFLICT AND BULLYING','Lesson 4'],['BODIES AND BULLYING','Lesson 5'],['REFUSING AND REPORTING','Lesson 6'],['BYSTANDERS CAN HELP','Lesson 7'],['TAKING RESPONSIBILITY','Lesson 8'],['MAKING IT HAPPEN','Lesson 9'],['SAFE, CARING, RESPECTFUL SCHOOL','Lesson 10']];
const INSTR=`<div class="card acr ent k-sky" style="padding:20px 24px"><div class="kick" style="color:var(--kt)">Instructions</div><ul class="blist" style="font-size:24px;margin-top:6px">${['Create a tri-fold pamphlet to teach on key aspect of Steps to Respect','Keep ideas simple and clear'].map(t=>`<li>${t}</li>`).join('')}</ul></div>
 <div class="card acr ent k-coral" style="padding:20px 24px"><div class="kick" style="color:var(--kt)">Content Ideas</div><ul class="blist" style="font-size:24px;margin-top:6px">${['Bullying prevention tips','Friendship skills','What to do if you see bullying','How to report','Simple activity (word search/message)'].map(t=>`<li>${t}</li>`).join('')}</ul></div>`;
STR.lesson({num:10,full:'Session 10: Maintaining a Safe, Caring, Respectful School Community',short:'Safe, Caring, Respectful School',hero:'l10-hero.jpg',k:'teal',
 keywords:[{w:'Community',n:5},{w:'Why Steps to Respect',n:6},{w:'Pamphlet',n:7},{w:'Share and Reflect',n:9}],
 groups:[{name:'Start here',k:'sky',n:[1,2,3,4]},{name:'Community',k:'teal',n:[5,6]},{name:'Pamphlet project',k:'coral',n:[7,8,9,10]}],
 slides:[
 {n:1,t:'Steps to Respect',title:'Session 10: Maintaining a Safe, Caring, Respectful School Community',k:'teal',icon:'book',sz:'l',faces:[{photo:'l10-hero.jpg'},{html:'Steps to<br>Respect',cls:'xl'},{html:'Session 10: Maintaining a Safe, Caring, Respectful School Community',cls:'sm'}],
  html:()=>K.title({kick:'Session 10: Maintaining a Safe, Caring, Respectful School Community',img:'l10-hero.jpg'}),notes:N(1)},
 {n:2,t:'Workshop Objectives',k:'violet',icon:'cal',faces:[{icon:'cal'},...LESSONS.map(([t,n])=>({html:`${t}<br><span style="font-weight:400;font-size:12px">${n}</span>`,cls:'sm'}))],
  html:()=>K.classObj({h:'WORKSHOP OBJECTIVES',items:LESSONS,today:'Lesson 10'}),notes:N(2)},
 {n:3,t:'Lesson 10 Objectives',k:'teal',icon:'list',faces:[{icon:'list'},{html:'Define community'}],
  html:()=>K.lessonObj({tag:'Safe, Caring, Respectful School',num:10,h:'Lesson 10 Objectives',kick:'TODAY WE WILL LEARN',intro:'By the end of this lesson, students will be able to:',items:['Define community','Explain why Steps to Respect is important','Identify skills that improve school climate','Apply perspective-taking skills']}),wire:pg=>K.wireChk(pg),notes:N(3)},
 {n:4,t:'Why This Matters',title:'WHY THIS MATTERS',k:'coral',icon:'bulb',faces:[{icon:'bulb'},{html:'We all contribute to a safe, caring school',cls:'sm'}],
  html:()=>K.text({h:'WHY THIS MATTERS',hs:'font-size:64px',paras:['<b>Main Idea:</b> Communities rely on responsible members who share knowledge to help everyone succeed'],ps:34,cards:['Humans form communities to meet shared needs','We all contribute to a safe, caring school','Steps to Respect skills strengthen our community'],cardIcon:'check',icon:'bulb',iconStyle:'flex:.35'}),notes:N(4)},
 {n:5,t:'What is Community?',k:'teal',icon:'people',faces:[{photo:'l10-community.jpg'},{html:'What is Community?',cls:'xl'}],
  html:()=>K.def({word:'What is Community?',defs:['A GROUP LINKED BY COMMON INTERESTS, HISTORY, POLICY, CONCERNS, OR NEEDS'],after:`<div class="card acr step k-teal" style="padding:20px 26px"><div class="kick" style="color:var(--kt)">COMMUNITY MEMBERS:</div><ul class="blist" style="font-size:26px;margin-top:6px"><li>WORK TOGETHER FOR THE COMMUNITY’S GOOD</li><li>RELY ON RESPECT, COOPERATION, AND GIVE-AND-TAKE</li></ul></div>`,img:'l10-community.jpg',imgLeft:true}),notes:N(5)},
 {n:6,t:'Why We Studied Steps to Respect',k:'pink',icon:'heart',faces:[{photo:'l10-heart.jpg'},{html:'Why We Studied Steps to Respect',cls:'sm'}],
  html:()=>K.cols({h:'Why We Studied Steps to Respect',hs:'font-size:60px',cols:[{h:'Prompts/Content',icon:'book',k:'sky',items:['Builds a respectful school culture','Helps to prevent bullying','Offers tools for solving social problems']},{h:'Examples of Helpful Behaviors',icon:'hands',k:'coral',items:['Using friendship skills','Reporting bullying safely','Including others','Standing up for fairness']}],step:true,is:30}),notes:N(6)},
 {n:7,t:'Activity: Tri-fold Pamphlet Project',k:'coral',icon:'poster',faces:[{photo:'l10-pamphlet.jpg'},{html:'Tri-fold Pamphlet Project',cls:'sm'}],
  html:()=>`<div class="wrap"><div class="col" style="flex:1;gap:14px"><div class="ent"><div class="kick">Activity</div><div class="h1" style="font-size:62px">Tri-fold Pamphlet Project</div></div>${INSTR}</div>${K.pic('l10-pamphlet.jpg','flex:.75')}</div>`,notes:N(7)},
 {n:8,t:'Pamphlet Structure',title:'Activity: Tri-fold Pamphlet Project',k:'coral',icon:'grid',faces:[{icon:'grid'},{html:'PAMPHLET STRUCTURE',cls:'sm'}],
  html:()=>`<div class="wrap"><div class="col" style="flex:1.1;gap:14px"><div class="ent"><div class="kick">Activity: Tri-fold Pamphlet Project</div><div class="h1" style="font-size:58px">PAMPHLET STRUCTURE</div></div>
   <div class="trifold ent">${[['Cover: Title + Name + Art','poster'],['Key Concept #1','star'],['Key concept #2','star'],['Key Concept #3','star'],['Activity or Message','puzzle'],['Closing or “Most Important Thing”','heart']].map(([t,i],j)=>`<div class="tf step k-${K.KS[j%K.KS.length]}"><span>${ico(i)}</span><b>${t}</b></div>`).join('')}</div>
   <button class="btn ui ent" id="t15" style="align-self:flex-start">${ico('timer')}15:00</button></div>
   <div class="col" style="flex:.8;gap:12px">${INSTR}</div></div>`,
  wire:(pg,H)=>{STR.$('#t15',pg).onclick=()=>{H.timer(900,'Pamphlet Project');H.timerGo()}},notes:N(8)},
 {n:9,t:'Share and Reflect',k:'violet',icon:'chat',faces:[{icon:'chat'},{html:'WHAT WENT WELL?',cls:'sm'}],
  html:()=>`<div class="wrap" style="flex-direction:column;gap:20px"><div class="ent"><div class="h1">Share and Reflect</div></div>
   <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:4px">${[['WHAT WENT WELL?','check','sky'],['WHAT DID YOU ENJOY?','smile','coral'],['HOW ELSE CAN YOU SHARE WHAT YOU LEARNED?','megaphone','lime']].map(([t,i,k])=>`<div class="card acr step k-${k}" style="padding:30px;min-height:220px;display:flex;flex-direction:column;gap:18px"><span class="chip ic" style="align-self:flex-start">${ico(i)}</span><div style="font-size:34px;font-weight:700;line-height:1.1">${t}</div></div>`).join('')}</div>
   <div class="card solid step" style="padding:30px 36px;display:flex;gap:26px;align-items:center"><span class="bigi">${ico('heart')}</span><div><div class="kick">Closing Thoughts</div><div class="mix" style="font-size:34px;margin-top:6px">Being part of a community means sharing what we know to keep our school safe, caring, and respectful</div></div></div></div>`,notes:N(9)},
 {n:10,t:'Thank You',k:'sun',icon:'sparkle',faces:[{photo:'l10-thanks.jpg'},{html:'Thank You',cls:'xl'}],
  html:()=>K.thanks({img:'l10-thanks.jpg',h:'Thank<br>You',sub:'ANY QUESTIONS?'}),enter:K.thanksEnter,notes:N(10)}
 ]});
})();
