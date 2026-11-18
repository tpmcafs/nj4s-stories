/* Steps to Respect · Session 5: Cultural Diversity — slide text verbatim (this deck has no presenter notes).
   Hidden slide 4 and the blank last slide are left out. Group names are added labels. */
(function(){
const {ico}=STR,K=STR.K;
const OBJ=[['Friendship','Lesson 1'],['Conflicts between friends','Lesson 2'],['Are You MAd at Me?','Lesson 3'],['Conflict and Bullying','Lesson 4'],['Cultural Humility','Lesson 5'],['Cultural Diversity','Lesson 6'],['Bystanders can help','Lesson 7'],['taking responsibility','Lesson 8'],['Making it Happen','Lesson 9'],['Safe, caring, Respectful school','Lesson 10']];
const FIG=['l5-p3.png','l5-p4.png','l5-p5.png','l5-p6.png','l5-p7.png','l5-p8.png','l5-p9.png','l5-p10.png','l5-p11.png'];
const STAND=['If you eat a food at home that not everyone eats, stand up.','If your family has a special meal for holidays or celebrations, stand up.','If you celebrate a holiday that is important to your family, stand up.','If more than one language is spoken in your home, stand up.','If you know words in another language, stand up.','If your family has traditions you do every year, stand up.','If you learned something important from an older family member, stand up.','If your family celebrates birthdays or events in a special way, stand up.','If you’ve learned something from someone who is different from you, stand up.','If you like learning about how other people live, stand up.','If you think it’s important to respect people’s differences, stand up.'];
const stand=(text,i)=>({n:12+i,t:'Stand up!',tile:`Stand up! ${i+1}`,title:text,k:K.KS[i%7],icon:'run',faces:[{icon:'run'},{html:text,cls:'sm'}],
 html:()=>`<div class="wrap" style="align-items:center">
  <div class="col solid sweep ent" style="flex:1.3;align-self:stretch;justify-content:center;gap:34px;padding:60px">
   <div class="mix" style="font-size:${text.length>70?54:62}px;font-weight:700">${text}</div>
   <div class="step sitdown">${ico('check')}<span>Thank you, please sit</span></div></div>
  ${i===1?K.pic('l5-family.jpg','flex:.85;align-self:stretch'):`<div class="artbox ent" style="flex:.6;align-self:stretch"><img src="img/${FIG[i%FIG.length]}" alt=""></div>`}</div>`,notes:''});
STR.lesson({num:5,full:'Session 5: Cultural Diversity',hero:'l5-together.jpg',k:'pink',
 keywords:[{w:'Culture',n:4},{w:'Cultural respect',n:6},{w:'Stand Up! game',n:11},{w:'BINGO',n:26}],
 groups:[{name:'Start here',k:'sky',n:[1,2,3]},{name:'Culture',k:'pink',n:[4,5,6,7,8,9,10]},{name:'Stand up!',k:'sun',n:[11,12,13,14,15,16,17,18,19,20,21,22]},{name:'Same but different',k:'teal',n:[23,24,25,26,27,28,29]}],
 slides:[
 {n:1,t:'Cultural Diversity',title:'Session 5: Cultural Diversity',k:'pink',icon:'globe',sz:'l',faces:[{photo:'l5-together.jpg'},{html:'Session 5<br>Cultural Diversity',cls:'xl'}],
  html:()=>`<div class="wrap"><div class="col card acr ent" style="flex:.95;justify-content:space-between;padding:52px 56px">
   <div class="kick" style="font-size:22px">Session 5</div><div><div class="h1" style="font-size:118px;font-weight:700;line-height:.95;letter-spacing:-.03em">Cultural<br>Diversity</div>
   <div style="display:flex;gap:8px;margin-top:30px">${K.KS.map((k,i)=>`<i class="k-${k} ent" style="display:block;width:44px;height:44px;background:var(--k);animation-delay:${.3+i*.07}s"></i>`).join('')}</div></div>
   <img src="img/nj4s.png" alt="NJ4S Bergen Hub" style="height:104px;align-self:flex-start"></div>
   <div class="artbox ent figrow" style="flex:1.15">${FIG.map((f,i)=>`<img src="img/${f}" alt="" style="animation-delay:${.2+i*.07}s">`).join('')}</div></div>`,notes:''},
 {n:2,t:'Class Objectives',k:'violet',icon:'cal',faces:[{icon:'cal'},...OBJ.map(([t,n])=>({html:`${t}<br><span style="font-weight:400;font-size:12px">${n}</span>`,cls:'sm'}))],
  html:()=>K.classObj({h:'Class Objectives',items:OBJ,today:'Lesson 6'}),notes:''},
 {n:3,t:'Today’s Objectives',k:'sun',icon:'target',faces:[{photo:'l5-globe.png'},{html:'respect each other and appreciate different cultures',cls:'sm'}],
  html:()=>K.text({h:'Today’s Objectives',paras:['By the end of this workshop, you will learn how important it is to respect each other and appreciate different cultures .'],ps:36,art:'l5-globe.png',left:true}),notes:''},
 {n:4,t:'What is Culture?',k:'coral',icon:'globe',faces:[{photo:'l5-culture.jpg'},{html:'Culture is the way people live.'}],
  html:()=>K.text({h:'What is Culture?',paras:['Culture is the <b>way people live.</b>','It includes the things that make a group of people <b>unique and special.</b>'],ask:'What does culture mean to you?',art:'l5-culture.jpg'}),notes:''},
 {n:5,t:'Important to Know',k:'teal',icon:'bulb',faces:[{icon:'bulb'},{html:'Everyone has a culture'}],
  html:()=>K.tiles({h:'Important to Know',items:[['Everyone has a culture','globe','sky'],['You can belong to more than one culture','group','coral'],['No culture is better than another. Just different','scale','violet']],th:280,ts:32,foot:`<div class="figline">${['l5-row.png'].map(f=>`<img src="img/${f}" alt="">`).join('')}</div>`}),notes:''},
 {n:6,t:'What Is Cultural Respect?',k:'pink',icon:'heart',faces:[{photo:'l5-handshake.png'},{html:'Cultural respect means being kind',cls:'sm'}],
  html:()=>K.text({h:'What Is Cultural Respect?',paras:['Cultural respect means being kind and <i>respectful</i> to people who may <b>live, dress, speak, or believe</b> differently than you.','It means <b>understanding that not everyone is the same</b>, and that’s okay.'],art:'l5-handshake.png'}),notes:''},
 {n:7,t:'What Cultural Respect Looks Like',k:'lime',icon:'check',faces:[{icon:'check'},{html:'Listening when someone talks about their culture',cls:'sm'}],
  html:()=>K.text({h:'What Cultural Respect Looks Like',hs:'font-size:64px',cards:['Listening when someone talks about their culture','Being polite about traditions that are different from yours','Using people’s names the right way','Not making fun of how someone looks, talks, or celebrates'],cardIcon:['talk','heart','user','smile'],art:'l5-heart.png',artStyle:'flex:.55'}),notes:''},
 {n:8,t:'What Cultural Respect Is Not',k:'coral',icon:'x',faces:[{photo:'l5-not.png'},{html:'Making jokes about someone’s culture',cls:'sm'}],
  html:()=>K.text({h:'What Cultural Respect Is Not',hs:'font-size:64px',cards:['Making jokes about someone’s culture','Saying one culture is better than another','Leaving people out because they are different'],cardIcon:'x',art:'l5-not.png',left:true}),notes:''},
 {n:9,t:'Why Cultural Respect Is Important',k:'sky',icon:'shield',faces:[{photo:'l5-kids.png'},{html:'It helps everyone feel safe and included',cls:'sm'}],
  html:()=>K.text({h:'Why Cultural Respect Is Important',hs:'font-size:62px',cards:['It helps everyone feel safe and included','It helps people get along better','It makes schools and communities fair and friendly'],cardIcon:['shield','group','school'],art:'l5-kids.png'}),notes:''},
 {n:10,t:'Let’s Talk',k:'violet',icon:'chat',faces:[{photo:'l5-faces.png'},{html:'Where are you or your family from?',cls:'sm'}],
  html:()=>K.text({h:'Let’s Talk',cards:['Where are you or your family from?','What is something you like about your culture?'],cardIcon:['globe','heart'],art:'l5-faces.png'}),notes:''},
 {n:11,t:'“If You…... Stand Up!”',title:'“If You…... Stand Up!” Cultural Awareness Game',k:'sun',icon:'run',faces:[{icon:'run'},{html:'Cultural Awareness Game',cls:'sm'}],
  html:()=>K.text({h:'“If You…... Stand Up!” Cultural Awareness Game',hs:'font-size:56px',kick:'Game Rules:',list:['I will read a sentence. If it is true for you, quietly stand up. If not, stay seated.','There is no talking, laughing, or pointing.','You don’t have to explain why you stood','Everyone’s experience matters'],listStep:true,foot:'Let’s Go',footIcon:'run',icon:'run',iconStyle:'flex:.35'}),notes:''},
 ...STAND.map(stand),
 {n:23,t:'Let’s Reflect',k:'teal',icon:'eye',faces:[{photo:'l5-people.png'},{html:'What did you notice?'}],
  html:()=>K.text({h:'Let’s Reflect',kick:'What did you notice?',cards:['Were we all standing at the same time?','What does this tell us about our class?'],cardIcon:'question',art:'l5-people.png'}),notes:''},
 {n:24,t:'Different cultures',title:'Even though we’re in the same classroom…',k:'sky',icon:'group',faces:[{icon:'group'},{html:'we all have different cultures and experiences.',cls:'sm'}],
  html:()=>K.big({text:'Even though we’re in the same classroom, we all have different cultures and experiences. <b>Cultural respect means being kind and open to those differences.</b>',size:52}),notes:''},
 {n:25,t:'Not alone',title:'When we stood up…',k:'violet',icon:'heart',faces:[{icon:'heart'},{html:'we also weren’t alone.',cls:'sm'}],
  html:()=>K.big({text:'When we stood up, we noticed that we weren’t all the same...<b>but we also weren’t alone.</b>',sub:'Now we’re going to move into an activity that helps us see how much we actually have in common.',size:56,subSize:32}),notes:''},
 {n:26,t:'Same but Different BINGO',k:'coral',icon:'grid',faces:[{icon:'grid'},{html:'Before we start, remember:',cls:'sm'}],
  html:()=>K.text({h:'Same but Different BINGO',kick:'Before we start, remember:',list:['Ask classmates questions politely','Listen carefully','We ask questions respectfully','You cannot use the same person twice','We walk, not run'],foot:'Let’s Go',footIcon:'run',icon:'grid',iconStyle:'flex:.35',
   after:`<div class="ent" style="display:flex;gap:10px;align-items:center"><span class="kick" style="font-size:16px">Play during activity</span><a class="btn" href="https://youtu.be/ZMsvwwp6S7Q" target="_blank" rel="noopener">${ico('play')}Music 1</a><a class="btn" href="https://www.youtube.com/watch?v=6k8cpUkKK4c" target="_blank" rel="noopener">${ico('play')}Music 2</a></div>`}),notes:''},
 {n:27,t:'Let’s Reflect',tile:'Let’s Reflect: similarities',k:'lime',icon:'eye',faces:[{photo:'l5-world.png'},{html:'What similarities did you notice?',cls:'sm'}],
  html:()=>K.text({h:'Let’s Reflect',kick:'What similarities did you notice?',cards:['Did everyone’s culture look exactly the same?','What does this teach us about respecting others?'],cardIcon:'question',art:'l5-world.png'}),notes:''},
 {n:28,t:'Many things in common',title:'Even though our cultures may look different…',k:'pink',icon:'globe',faces:[{photo:'l5-earth.png'},{html:'we share many things in common.',cls:'sm'}],
  html:()=>K.big({text:'Even though our cultures may look different, <b>we share many things in common.</b> That’s why cultural respect is important',size:54,art:'l5-earth.png'}),notes:''},
 {n:29,t:'Our World, Together',k:'sun',icon:'sparkle',faces:[{photo:'l5-together.jpg'},{html:'Let’s celebrate our differences and what we share!',cls:'sm'}],
  html:()=>K.text({h:'Our World, Together',kick:'Let’s celebrate our differences and what we share!',cards:['Try a new food, learn a new word, or listen to new music.','Share what you love about your culture with a friend!','When we share our cultures, we make new friends.','Learning about others helps us grow.'],cardIcon:['food','heart','group','leaf'].map(x=>x==='food'?'sparkle':x),img:'l5-together.jpg'}),enter:K.thanksEnter,notes:''}
 ]});
})();
