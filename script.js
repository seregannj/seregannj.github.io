(function(){
'use strict';

var T={
  ru:{
    nav_about:'Обо мне',nav_work:'Проекты',nav_roadmap:'Дорожная карта',nav_contact:'Контакты',
    menu_title:'Меню',
    hero_greeting:'Привет, я',hero_name:'Серёга.',
    hero_lead:'Fullstack-разработчик-самоучка. Ценю прозрачные сервисы, которым доверяют миллионы.',
    btn_projects:'Мои проекты',btn_contact:'Связаться',
    stat1_num:'7+',stat1_label:'Публичных проектов',stat2_num:'5+',stat2_label:'Технологий',
    stat3_num:'6+',stat3_label:'Лет в разработке',stat4_num:'2026',stat4_label:'Активный год',
    about_title:'Обо мне',about_meta:'FULLSTACK · SELF-TAUGHT',
    about_p1:'Я fullstack-разработчик-самоучка. Для меня программирование — место больших возможностей.',
    about_p2:'Основной стек — <strong>Python</strong> + <strong>React</strong>. Умею поднимать бэкенд, верстать интерфейсы, работать с <strong>Git</strong> и <strong>API</strong>.',
    about_p3:'Интересуюсь <strong>AI</strong>, <strong>Open Source</strong> и тем, как делать прозрачные продукты, которым не страшно доверить свои данные.',
    projects_title:'Проекты',projects_meta:'3 РАБОТЫ · OPEN SOURCE',
    proj1_title:'GenDocly',proj1_desc:'Бесплатный сервис генерации документов для студентов.',
    proj2_title:'System Home',proj2_desc:'Умный дом своими руками.',
    proj3_title:'AppFor4roid',proj3_desc:'Репозиторий приложений для Android 4+.',
    all_projects_title:'Все проекты',all_projects_desc:'GenDocly, System Home, AppFor4roid',
    cta_title:'Все проекты',
    rm_title:'Дорожная карта',rm_meta:'ПУТЬ РАЗРАБОТЧИКА',
    tl1:'<strong>Начало пути</strong> — HTML, первые шаги',
    tl2:'<strong>Python</strong> — первые шаги',
    tl3:'<strong>HTML, CSS, JS</strong> — возобновление учёбы',
    tl4:'<strong>Python</strong> — консольные боты',
    tl5:'<strong>Telegram-боты</strong> на Python',
    tl6:'<strong>C++</strong> — основы',
    tl7:'<strong>AI + Telegram-боты</strong> — интеграции',
    tl8:'<strong>React</strong> — компоненты, хуки, frontend',
    tl9:'<strong>Python + Web</strong> — совмещение бэкенда и фронта',
    tl10:'<strong>Fullstack-проекты</strong> — собственные продукты',
    tl11:'<strong>Будущее</strong> — цели, проекты и идеи на годы вперёд',
    ss_label:'Стек:',
    contact_prep:'Мои',contact_green:'контакты',contact_desc:'Самый быстрый способ — Telegram или Email. Открыт к коллаборациям.',
    contact_readme_val:'Подробнее обо мне',
    page_projects_title:'Все проекты',page_projects_subtitle:'GenDocly, System Home, AppFor4roid — мои Open Source работы',
    breadcrumb_home:'Главная',
    link_github:'GitHub',link_demo:'Demo',
    pc1_title:'GenDocly',pc1_desc:'Бесплатный сервис генерации документов для студентов. Python + Web.',
    pc2_title:'System Home',pc2_desc:'Умный дом своими руками: Python, IoT, железо.',
    pc3_title:'AppFor4roid',pc3_desc:'Репозиторий приложений для Android 4+. Открытый код, простые сборки.',
    footer_phrases:[
      'Будущее начинается здесь',
      'Ракета не взлетела если бы у неё не горел хвост',
      'Python · AI · React',
      'Дорогу осилит идущий',
      'seregannj.is-a.dev'
    ]
  },
  en:{
    nav_about:'About',nav_work:'Projects',nav_roadmap:'Roadmap',nav_contact:'Contact',
    menu_title:'Menu',
    hero_greeting:"Hello, I'm",hero_name:'Seregannj.',
    hero_lead:'Self-taught fullstack developer. I value transparent services trusted by millions.',
    btn_projects:'My projects',btn_contact:'Get in touch',
    stat1_num:'7+',stat1_label:'Public projects',stat2_num:'5+',stat2_label:'Technologies',
    stat3_num:'6+',stat3_label:'Years coding',stat4_num:'2026',stat4_label:'Active year',
    about_title:'About me',about_meta:'FULLSTACK · SELF-TAUGHT',
    about_p1:"I'm a self-taught fullstack developer. For me, programming is a place of big opportunities.",
    about_p2:'My main stack is <strong>Python</strong> + <strong>React</strong>. I can spin up a backend, build interfaces, and work with <strong>Git</strong> and <strong>APIs</strong>.',
    about_p3:'Interested in <strong>AI</strong>, <strong>Open Source</strong>, and building transparent products users aren\'t afraid to trust with their data.',
    projects_title:'Projects',projects_meta:'3 WORKS · OPEN SOURCE',
    proj1_title:'GenDocly',proj1_desc:'Free document generation service for students.',
    proj2_title:'System Home',proj2_desc:'DIY smart home system.',
    proj3_title:'AppFor4roid',proj3_desc:'App repository for Android 4+.',
    all_projects_title:'All projects',all_projects_desc:'GenDocly, System Home, AppFor4roid',
    cta_title:'All projects',
    rm_title:'Roadmap',rm_meta:'DEVELOPER PATH',
    tl1:'<strong>The beginning</strong> — HTML, first steps',
    tl2:'<strong>Python</strong> — first steps',
    tl3:'<strong>HTML, CSS, JS</strong> — resuming studies',
    tl4:'<strong>Python</strong> — console bots',
    tl5:'<strong>Telegram bots</strong> with Python',
    tl6:'<strong>C++</strong> — basics',
    tl7:'<strong>AI + Telegram bots</strong> — integrations',
    tl8:'<strong>React</strong> — components, hooks, frontend',
    tl9:'<strong>Python + Web</strong> — combining backend and frontend',
    tl10:'<strong>Fullstack projects</strong> — own products',
    tl11:'<strong>The future</strong> — goals, projects and ideas for years ahead',
    ss_label:'Stack:',
    contact_prep:'My',contact_green:'contacts',contact_desc:'The fastest way — Telegram or Email. Open to collaborations.',
    contact_readme_val:'More about me',
    page_projects_title:'All projects',page_projects_subtitle:'GenDocly, System Home, AppFor4roid — my Open Source works',
    breadcrumb_home:'Home',
    link_github:'GitHub',link_demo:'Demo',
    pc1_title:'GenDocly',pc1_desc:'Free document generation service for students. Python + Web.',
    pc2_title:'System Home',pc2_desc:'DIY smart home system: Python, IoT, hardware.',
    pc3_title:'AppFor4roid',pc3_desc:'App repository for Android 4+. Open source, simple builds.',
    footer_phrases:[
      'The future starts here',
      "A rocket wouldn't take off without fire in its tail",
      'Python · AI · React',
      'The road is mastered by walking',
      'seregannj.is-a.dev'
    ]
  }
};

var root=document.documentElement;
var userLang=(navigator.language||navigator.userLanguage||'en').slice(0,2);
var currentLang='ru';

function getStore(k){try{return localStorage.getItem('p:'+k)}catch(e){return null}}
function setStore(k,v){try{localStorage.setItem('p:'+k,v)}catch(e){}}

function detectLang(){var s=getStore('lang');if(s==='ru'||s==='en')return s;return userLang==='ru'?'ru':'en'}

function setLang(lang){
  currentLang=lang;
  var t=T[lang];if(!t)return;
  root.setAttribute('lang',lang==='ru'?'ru':'en');
  document.querySelectorAll('[data-i18n]').forEach(function(el){
    var key=el.getAttribute('data-i18n');
    if(t[key]){
      if(el.hasAttribute('data-i18n-html'))el.innerHTML=t[key];
      else el.textContent=t[key];
    }
  });
  document.getElementById('langToggle').textContent=lang==='ru'?'EN':'RU';
  if(typeof startTypingLoop==='function')startTypingLoop();
}

document.getElementById('langToggle').addEventListener('click',function(){
  var next=currentLang==='ru'?'en':'ru';setLang(next);setStore('lang',next);
});

var themeBtn=document.getElementById('themeToggle');
function applyTheme(t){root.setAttribute('data-theme',t)}
(function(){var s=getStore('theme');if(s==='light'||s==='dark')applyTheme(s);else applyTheme(window.matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light')})();
themeBtn.addEventListener('click',function(){var next=root.getAttribute('data-theme')==='dark'?'light':'dark';applyTheme(next);setStore('theme',next)});
window.matchMedia('(prefers-color-scheme:dark)').addEventListener('change',function(e){if(!getStore('theme'))applyTheme(e.matches?'dark':'light')});

var menuBtn=document.getElementById('menuBtn'),panel=document.getElementById('navPanel'),closeB=document.getElementById('closeBtn'),bg=document.getElementById('navBackdrop'),panelLinks=panel.querySelectorAll('a'),scrollY=0;
function openMenu(){scrollY=window.scrollY;document.body.style.cssText='position:fixed;top:-'+scrollY+'px;left:0;right:0;width:100%';menuBtn.classList.add('active');panel.classList.add('open');bg.classList.add('open');menuBtn.setAttribute('aria-expanded','true');panel.setAttribute('aria-hidden','false');panelLinks.forEach(function(a){a.setAttribute('tabindex','0')});closeB.focus()}
function closeMenu(){menuBtn.classList.remove('active');panel.classList.remove('open');bg.classList.remove('open');menuBtn.setAttribute('aria-expanded','false');panel.setAttribute('aria-hidden','true');document.body.style.cssText='';window.scrollTo({top:scrollY,behavior:'instant'});panelLinks.forEach(function(a){a.setAttribute('tabindex','-1')});menuBtn.focus()}
menuBtn.addEventListener('click',function(e){e.stopPropagation();panel.classList.contains('open')?closeMenu():openMenu()});
closeB.addEventListener('click',closeMenu);bg.addEventListener('click',closeMenu);panelLinks.forEach(function(a){a.addEventListener('click',closeMenu)});
document.addEventListener('keydown',function(e){if(e.key==='Escape'&&panel.classList.contains('open'))closeMenu()});
window.addEventListener('resize',function(){clearTimeout(window._rt);window._rt=setTimeout(function(){if(window.innerWidth>=1024&&panel.classList.contains('open'))closeMenu()},150)});

var revealObs=new IntersectionObserver(function(entries){entries.forEach(function(entry){if(entry.isIntersecting)entry.target.classList.add('visible')})},{threshold:0.12,rootMargin:'0px 0px -40px 0px'});
document.querySelectorAll('.reveal').forEach(function(el){revealObs.observe(el)});

var tlItems=document.querySelectorAll('.timeline-item');
if(tlItems.length){
  tlItems.forEach(function(item,i){item.style.transitionDelay=(i*0.08)+'s'});
  var tlObs=new IntersectionObserver(function(entries){entries.forEach(function(entry){if(entry.isIntersecting)entry.target.classList.add('visible')})},{threshold:0.15,rootMargin:'0px 0px -30px 0px'});
  tlItems.forEach(function(el){tlObs.observe(el)});
}

var sections=document.querySelectorAll('main section[id]');
var navLinks=document.querySelectorAll('nav ul a');
if(sections.length && navLinks.length){
  var navObs=new IntersectionObserver(function(entries){entries.forEach(function(entry){if(entry.isIntersecting){var id=entry.target.id;navLinks.forEach(function(l){var href=l.getAttribute('href')||'';l.style.color=href.endsWith('#'+id)?'var(--ink)':''})}})},{rootMargin:'-40% 0px -55% 0px'});
  sections.forEach(function(s){navObs.observe(s)});
}

var backBtn=document.getElementById('backTop');
if(backBtn){
  window.addEventListener('scroll',function(){backBtn.classList.toggle('show',window.scrollY>500)},{passive:true});
  backBtn.addEventListener('click',function(){window.scrollTo({top:0,behavior:'smooth'})});
}

var typingEl=document.getElementById('footerTyping');
var typingTimer=null;
var phase='typing',phraseIdx=0,charIdx=0;
var TYPE_SPEED=65,DELETE_SPEED=30,PAUSE_AFTER_TYPE=1800,PAUSE_BEFORE_TYPE=400;

function typingTick(){
  var list=(T[currentLang]&&T[currentLang].footer_phrases)||T.ru.footer_phrases;
  var cur=list[phraseIdx];
  if(phase==='typing'){
    if(charIdx<cur.length){typingEl.textContent=cur.substring(0,charIdx+1);charIdx++;typingTimer=setTimeout(typingTick,TYPE_SPEED);}
    else{phase='pausing';typingTimer=setTimeout(typingTick,PAUSE_AFTER_TYPE);}
  }else if(phase==='pausing'){phase='deleting';typingTimer=setTimeout(typingTick,0);}
  else if(phase==='deleting'){
    if(typingEl.textContent.length>0){typingEl.textContent=cur.substring(0,typingEl.textContent.length-1);typingTimer=setTimeout(typingTick,DELETE_SPEED);}
    else{phase='typing';phraseIdx=(phraseIdx+1)%list.length;charIdx=0;typingTimer=setTimeout(typingTick,PAUSE_BEFORE_TYPE);}
  }
}

function startTypingLoop(){
  if(!typingEl)return;
  if(typingTimer)clearTimeout(typingTimer);
  phase='typing';phraseIdx=0;charIdx=0;
  typingEl.textContent='';
  typingTick();
}

setLang(detectLang());

})();
