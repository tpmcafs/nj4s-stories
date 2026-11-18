/* Steps to Respect · Lesson 3: Are You Mad At Me? — slide text and notes verbatim. Hidden slide 14 left out. Group names are added labels. */
(function(){
const {ico}=STR,K=STR.K,N=o=>K.N(3,o);
const LESSONS=[['FRIENDSHIP','Lesson 1'],['CONFLICTS BETWEEN FRIENDS','Lesson 2'],['ARE YOU MAD AT ME?','Lesson 3'],['CONFLICT AND BULLYING','Lesson 4'],['BODIES AND BULLYING','Lesson 5'],['REFUSING AND REPORTING','Lesson 6'],['BYSTANDERS CAN HELP','Lesson 7'],['TAKING RESPONSIBILITY','Lesson 8'],['MAKING IT HAPPEN','Lesson 9'],['SAFE, CARING, RESPECTFUL SCHOOL','Lesson 10']];
const role=part=>`<div class="wrap" style="align-items:center">
 <div class="col solid sweep ent" style="flex:1.2;align-self:stretch;justify-content:center;gap:22px;padding:56px">
  <div style="font-size:84px;font-weight:700;line-height:1">Are You Mad At Me?</div><div class="kick" style="font-size:26px">ROLE PLAY</div><div style="font-size:54px;font-weight:300">${part}</div></div>
 <div class="artbox ent" style="flex:.8;align-self:stretch"><img src="img/l3-friends.png" alt="Line drawing of two friends standing side by side"></div></div>`;
STR.lesson({num:3,full:'LESSON 3: ARE YOU MAD AT ME?',hero:'l3-hero.jpg',k:'violet',
 keywords:[{w:'Apologize',n:7},{w:'Forgiving',n:9},{w:'Working Out Conflicts',n:10},{w:'Apologies',n:11},{w:'Role play',n:5}],
 groups:[{name:'Start here',k:'sky',n:[1,2,3,4]},{name:'Role play',k:'violet',n:[5,6,7,8,9]},{name:'Working it out',k:'teal',n:[10,11,12,13]}],
 slides:[
 {n:1,t:'Steps to Respect',title:'LESSON 3: ARE YOU MAD AT ME?',k:'sky',icon:'book',sz:'l',faces:[{photo:'l3-hero.jpg'},{html:'Steps to<br>Respect',cls:'xl'},{html:'LESSON 3: ARE YOU MAD AT ME?'}],
  html:()=>K.title({kick:'LESSON 3: ARE YOU MAD AT ME?',img:'l3-hero.jpg'}),notes:N(1)},
 {n:2,t:'Class Objectives',k:'violet',icon:'cal',faces:[{icon:'cal'},...LESSONS.map(([t,n])=>({html:`${t}<br><span style="font-weight:400;font-size:12px">${n}</span>`,cls:'sm'}))],
  html:()=>K.classObj({items:LESSONS,today:'Lesson 3'}),notes:N(2)},
 {n:3,t:'Review',k:'teal',icon:'check',faces:[{icon:'check'},{html:'INTENTIONS · TRUST · CONFLICTS',cls:'sm'}],
  html:()=>K.flips({h:'Review',cards:[['INTENTIONS','Look for good intentions in our friends and others','eye','sky'],['TRUST','Keep your word and<br>be respectful','promise','coral'],['CONFLICTS','Resolve disagreements respectfully and apologize if you need to.','talk','violet']],ch:420,bs:30}),notes:N(3)},
 {n:4,t:'Lesson 3 Objectives',k:'teal',icon:'list',faces:[{icon:'list'},{html:'Apply perspective-taking skills'}],
  html:()=>K.lessonObj({tag:'Are You Mad At Me?',num:3,h:'Lesson 3 Objectives',kick:"WHAT WE'LL DISCUSS TODAY:",items:['Apply a problem-solving model and skill steps to manage conflicts respectfully','Apply perspective-taking skills','Generate ideas for making amends']}),wire:pg=>K.wireChk(pg),notes:N(4)},
 {n:5,t:'Role Play · Part 1',title:'Are You Mad At Me? ROLE PLAY Part 1',k:'violet',icon:'chat2',faces:[{icon:'chat2'},{html:'ROLE PLAY<br>Part 1'}],html:()=>role('Part 1'),notes:N(5)},
 {n:6,t:'What is the problem?',k:'coral',icon:'question',faces:[{icon:'question'},{html:'Jake is upset that Ryan has told other people that he likes Lily.',cls:'sm'}],
  html:()=>K.text({h:'What is the problem?',cards:['Jake is upset that Ryan has told other people that he likes Lily.'],cardIcon:'chat2',icon:'question'}),notes:N(6)},
 {n:7,t:'What can be done to fix this friendship?',k:'lime',icon:'sorry',faces:[{photo:'l3-sorry.jpg'},{html:'APOLOGIZE. STATE INTENTIONS.'}],
  html:()=>K.text({h:'What can be done to fix this friendship?',hs:'font-size:64px',cards:['APOLOGIZE.','STATE INTENTIONS.'],cardIcon:['sorry','talk'],img:'l3-sorry.jpg'}),notes:N(7)},
 {n:8,t:'Role Play · Part 2',title:'Are You Mad At Me? ROLE PLAY Part 2',k:'violet',icon:'chat2',faces:[{icon:'chat2'},{html:'ROLE PLAY<br>Part 2'}],html:()=>role('Part 2'),notes:N(8)},
 {n:9,t:'Discussion',k:'sky',icon:'chat',faces:[{icon:'chat'},{html:'Forgiving lets you move on.'}],
  html:()=>K.text({h:'Discussion',cards:['Forgiving lets you move on.','If you don\'t forgive, your relationship won\'t be able to grow.'],cardIcon:['heart','leaf'],icon:'chat'}),notes:N(9)},
 {n:10,t:'Working Out Conflicts',k:'teal',icon:'puzzle',faces:[{icon:'puzzle'},{html:'Step 1 → Respectfully ask what’s wrong',cls:'sm'}],
  html:()=>K.steps({h:'Working Out Conflicts',steps:[['Step 1 →','Respectfully ask what’s wrong'],['Step 2 →','Listen carefully and think about your friend’s point of view'],['Step 3 →','Figure out what to do to make it better'],['Step 4 →','Ask yourself “is it working?”<br>If it’s not, try something else']],icon:'puzzle',iconStyle:'flex:.45'}),notes:N(10)},
 {n:11,t:'Apologies',title:'APOLOGIES',k:'pink',icon:'sorry',faces:[{icon:'sorry'},{html:'Is it easier to forgive someone who apologizes sincerely?',cls:'sm'}],
  html:()=>K.big({kick:'APOLOGIES',text:'Is it easier to forgive someone who apologizes sincerely?',sub:'<b style="font-size:60px">Why?</b>',size:66}),notes:N(11)},
 {n:12,t:'Activity: Scenarios',k:'sun',icon:'note',faces:[{icon:'note'},{html:'New topics to think about',cls:'sm'}],
  html:()=>K.text({h:'Activity: Scenarios',kick:'New topics to think about',list:['Managing conflicts fairly and respectfully','Making it better with a friend'],foot:'Write something you have done, or a good idea for something you could do.',footIcon:'pen',icon:'note'}),notes:N(12)},
 {n:13,t:'Thank You',k:'sun',icon:'sparkle',faces:[{photo:'l3-thanks.jpg'},{html:'ANY QUESTIONS?'}],
  html:()=>K.thanks({img:'l3-thanks.jpg'}),enter:K.thanksEnter,notes:N(13)}
 ]});
})();
