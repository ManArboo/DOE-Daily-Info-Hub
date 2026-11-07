(function(){
  'use strict';
  const appUrl = window.DOE_PORTAL_CONFIG && window.DOE_PORTAL_CONFIG.appUrl;
  const valid = typeof appUrl === 'string' && /^https:\/\/script\.google\.com\/macros\/s\/[A-Za-z0-9_-]+\/exec(?:\?.*)?$/.test(appUrl);
  const notice = document.getElementById('errorToast');
  document.querySelectorAll('.app-link').forEach(function(link){
    if(valid){
      link.href = appUrl;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
    }else{
      link.removeAttribute('href');
      link.setAttribute('role','button');
      link.tabIndex=0;
      const show = function(event){event.preventDefault();notice.hidden=false;};
      link.addEventListener('click',show);
      link.addEventListener('keydown',function(event){if(event.key==='Enter'||event.key===' '){show(event);}});
    }
  });
})();
