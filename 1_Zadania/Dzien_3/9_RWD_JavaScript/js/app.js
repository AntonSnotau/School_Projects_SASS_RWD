document.addEventListener("DOMContentLoaded", function(){

  var menu = document.querySelector('.menu');
  var trigger = document.querySelector('#menu-trigger');
  var mobile = window.matchMedia("(max-width: 539px)");

  trigger.addEventListener('click', function(){
      if (menu.style.visibility == "hidden") {
        menu.style.visibility = "visible";
      }
      else {
        menu.style.visibility = "hidden";
      }
  });

  function onResize(mobile){
    if(mobile.matches){
      menu.style.visibility = "hidden";
      trigger.style.visibility = "visible";
    }else{
      trigger.style.visibility = "hidden";
      menu.style.visibility = "visible";
    }
  };

  onResize(mobile);

  mobile.addListener(function(mobile){
    onResize(mobile);
  });

  });
