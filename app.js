document.addEventListener('DOMContentLoaded',function(){
  var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.12});
  document.querySelectorAll('.rv').forEach(function(el){io.observe(el)});
  document.addEventListener('click',function(e){
    var a=e.target.closest('a'); if(!a) return;
    var href=a.getAttribute('href')||'';
    if(href.charAt(0)==='#'){ var t=document.querySelector(href); if(t){ e.preventDefault(); t.scrollIntoView({behavior:'smooth'}); } }
  });
});
