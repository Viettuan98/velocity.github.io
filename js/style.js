$(document).ready(function() {
    $(window).scroll(function(event) {
        var pos_body = $('html,body').scrollTop();
        if (pos_body > 130) {
            $('.logo').addClass('chucam');
            $('.menu').removeClass('bg-transparent');
            $('.menu').addClass('doinen');
            $('.top .navbar-nav.menuright a.nav-link').attr('style','color:#808080;');
            $('.btnsignup').attr('style','background-color:#ec6952;');
        } else if (pos_body <= 130) {
            $('.logo').removeClass('chucam');
            $('.menu').addClass('bg-transparent');
            $('.menu').removeClass('doinen');
            $('.top .navbar-nav.menuright a.nav-link').removeAttr('style','color:#808080;');
            $('.btnsignup').removeAttr('style','background-color:#ec6952;');
        }
        if (pos_body > 500) {
            $('.backtop').addClass('hienthi');
        } else if (pos_body <= 500) {
            $('.backtop').removeClass('hienthi');
        }
    });
    $('.backtop').click(function() {
      //   $('body').animate({ 'scrollTop': 0 });
        $('body').animate({scrollTop: 0}, 1000);

    })
 

  //Click event to scroll to top
  $('.backtop').click(function(){
      $('html, body').animate({scrollTop : 0},800);
      return false;
  });

})