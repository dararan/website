$(function(){
  $('p').hide().fadeIn('slow');
});

$(function(){
  var icon = $('.icon');
  // ボタン非表示
  icon.hide();

  // 100px スクロールしたらボタン表示
  $(window).scroll(function () {
     if ($(this).scrollTop() > 100) {
          icon.fadeIn();
     } else {
          icon.fadeOut();
     }
  });
  icon.click(function () {
     $('body, html').animate({ scrollTop: 0 }, 500);
     return false;
  });
});


