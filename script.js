(function(){
'use strict';

var T={
  ru:{
    nav_about:'Обо мне',nav_work:'Проекты',nav_roadmap:'Дорожная карта',nav_contact:'Контакты',
    menu_title:'Меню',
    hero_greeting:'Привет, я',hero_name:'Сергей.',
    hero_lead:'Fullstack-разработчик-самоучка из России. Создаю веб-приложения на <strong>Python</strong>, <strong>React</strong> и современном стеке.',
    btn_projects:'Мои проекты',btn_contact:'Связаться',
    stat1_num:'3+',stat1_label:'Публичных проекта',stat2_num:'8+',stat2_label:'Технологий',
    stat3_num:'4+',stat3_label:'Года в разработке',stat4_num:'2026',stat4_label:'Активный год',
    about_title:'Обо мне',about_meta:'FULLSTACK · SELF-TAUGHT',
    about_p1:'Я fullstack-разработчик-самоучка. Начал с любопытства — а сейчас создаю продукты на стыке <strong>фронтенда и бэкенда</strong>.',
    about_p2:'Работаю с <strong>Python</strong> и <strong>JavaScript/React</strong>, разбираюсь в базах данных, API и внешних сервисах.',
    about_p3:'Развиваюсь в сторону <strong>AI-интеграций</strong> и современного frontend. Открыт к коллаборациям.',
    projects_title:'Проекты',projects_meta:'03 РАБОТЫ · GITHUB',
    proj1_title:'Telegram-бот для заметок',proj1_desc:'Бот на Python с aiogram и SQLite.',
    proj2_title:'Дашборд для IoT',proj2_desc:'React-интерфейс для умного дома.',
    proj3_title:'Документация умного дома',proj3_desc:'Тех. документация IoT-системы.',
    all_projects_title:'Все проекты',all_projects_desc:'Полный список моих работ на GitHub',
    cta_title:'Все проекты',cta_desc:'Полный список работ',
    rm_title:'Дорожная карта',rm_meta:'ПУТЬ РАЗРАБОТЧИКА',
    tl1:'<strong>Начало пути</strong> — первые шаги в программировании',
    tl2:'<strong>Python</strong> — основы, скрипты, автоматизация',
    tl3:'<strong>Первые проекты</strong> — Git, GitHub, публичный код',
    tl4:'<strong>HTML / CSS</strong> — вёрстка, адаптив, семантика',
    tl5:'<strong>JavaScript</strong> — DOM, асинхронность, модули',
    tl6:'<strong>React</strong> — компоненты, хуки, frontend',
    tl7:'<strong>REST API</strong> — бэкенд, базы данных, серверы',
    tl8:'<strong>AI-интеграции</strong> — Telegram-боты, внешние API',
    tl9:'<strong>Fullstack-разработчик</strong> — собственные проекты',
    ss_label:'Стек:',
    contact_prep:'Мои',contact_green:'контакты',contact_desc:'Самый быстрый способ — GitHub или Telegram. Отвечаю быстро.',
    contact_readme_val:'Подробнее обо мне',
    page_projects_title:'Все проекты',page_projects_subtitle:'Полный список моих работ — от пет-проектов до экспериментов',
    breadcrumb_home:'Главная',
    link_github:'GitHub',link_demo:'Demo',
    footer_phrases:[
      'Сергей · разработчик · 2026','Python · React · JavaScript','Открыт к проектам','Fullstack · Self-taught','GitHub: @seregannj'
    ]
  },
  en:{
    nav_about:'About',nav_work:'Projects',nav_roadmap:'Roadmap',nav_contact:'Contact',
    menu_title:'Menu',
    hero_greeting:"Hello, I'm",hero_name:'Sergey.',
    hero_lead:'Self-taught fullstack developer from Russia. I build web apps with <strong>Python</strong>, <strong>React</strong> and modern stack.',
    btn_projects:'My projects',btn_contact:'Get in touch',
    stat1_num:'3+',stat1_label:'Public projects',stat2_num:'8+',stat2_label:'Technologies',
    stat3_num:'4+',stat3_label:'Years in dev',stat4_num:'2026',stat4_label:'Active year',
    about_title:'About me',about_meta:'FULLSTACK · SELF-TAUGHT',
    about_p1:"I'm a self-taught fullstack developer. Started out of curiosity — now building products across <strong>frontend and backend</strong>.",
    about_p2:'Working with <strong>Python</strong> and <strong>JavaScript/React</strong>, experienced with databases, APIs and external services.',
    about_p3:'Growing towards <strong>AI integrations</strong> and modern frontend. Open to collaborations.',
    projects_title:'Projects',projects_meta:'03 WORKS · GITHUB',
    proj1_title:'Telegram Notes Bot',proj1_desc:'Python bot with aiogram and SQLite.',
    proj2_title:'IoT Dashboard',proj2_desc:'React interface for smart home.',
    proj3_title:'Smart Home Docs',proj3_desc:'Tech docs for IoT system.',
    all_projects_title:'All projects',all_projects_desc:'Full list of my works on GitHub',
    cta_title:'All projects',cta_desc:'Full list of works',
    rm_title:'Roadmap',rm_meta:'DEVELOPER PATH',
    tl1:'<strong>The beginning</strong> — first steps in programming',
    tl2:'<strong>Python</strong> — basics, scripts, automation',
    tl3:'<strong>First projects</strong> — Git, GitHub, public code',
    tl4:'<strong>HTML / CSS</strong> — layouts, responsive, semantics',
    tl5:'<strong>JavaScript</strong> — DOM, async, modules',
    tl6:'<strong>React</strong> — components, hooks, frontend',
    tl7:'<strong>REST API</strong> — backend, databases, servers',
    tl8:'<strong>AI integrations</strong> — Telegram bots, external APIs',
    tl9:'<strong>Fullstack developer</strong> — personal projects',
    ss_label:'Stack:',
    contact_prep:'My',contact_green:'contacts',contact_desc:'Fastest way — GitHub or Telegram. I reply quickly.',
    contact_readme_val:'Read more about me',
    page_projects_title:'All projects',page_projects_subtitle:'Full list of my works — from pet projects to experiments',
    breadcrumb_home:'Home',
    link_github:'GitHub',link_demo:'Demo',
    footer_phrases:[
      'Sergey · developer · 2026','Python · React · JavaScript','Open to projects','Fullstack · Self-taught','GitHub: @seregannj'
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
  var navObs=new IntersectionObserver(function(entries){entries.forEach(function(entry){if(entry.isIntersecting){var id=entry.target.id;navLinks.forEach(function(l){l.style.color=l.getAttribute('href')==='#'+id?'var(--ink)':''})}})},{rootMargin:'-40% 0px -55% 0px'});
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
