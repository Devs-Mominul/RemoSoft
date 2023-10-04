
  $('.preload').delay(500).fadeOut();

  AOS.init();
$(document).ready(function(){

  $('.back_top').click(function(){
    $('html,body').animate(
      {
        scrollTop:0,
      },500
    )
  })
})
$(document).ready(function(){
  $('navbar-custom').click(function(){
    var minar=$(this).scrollTop()
    if(minar<20){
      $('.back_top').css({
        display:none
      })

    }
  })
})
$(window).scroll(function(){
  var minar=$(this).scrollTop();
  if(minar >20){
      $('.back_top').fadeIn();
  }else{
      $('.back_top').fadeOut();

  }
  if(minar > 20){
      $('.navbar-custom').addClass("minar-bg")
  }
  else{
      $('.navbar-custom').removeClass("minar-bg")
  }
})
