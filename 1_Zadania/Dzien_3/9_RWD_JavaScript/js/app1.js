document.addEventListener("DOMContentLoaded", function(){
  // console.log('Ahoj!');
  var bodyDom = document.querySelector('body');
  var mobileSection = document.querySelector('.mobile-section');

  /*--- event resize ---*/
  function onResizeByEvent(){
    if(window.innerWidth < 500){
      bodyDom.style.backgroundColor = 'cyan';
    }else{
      bodyDom.style.backgroundColor = 'magenta';
    }
  }

  window.addEventListener('resize', onResizeByEvent);
  onResizeByEvent();

  /*--- match media ---*/
  function onResizeByMatchMedia(mobile){
    if(mobile.matches){
      mobileSection.innerText = 'Im mobile';
    }else{
      mobileSection.innerText = 'Im desktop';
    }
  }

  var mobile = window.matchMedia("(max-width: 499px)");

  onResizeByMatchMedia(mobile);

  mobile.addListener(function(mobile){
    onResizeByMatchMedia(mobile);
  });





});
