$(function () {
  'use strict';
  
  $('.mainImg').height($('.mainImg img').height());
  $('.thumbnails img').click(function () {
    $(this).addClass('active').parent().siblings().find('img').removeClass('active');
    $('.mainImg img').hide().attr('src', $(this).attr('src')).fadeIn(300);
  });
   $('.mainImg i').click(function () {    
    if ($(this).hasClass('fa-chevron-right')) {
      console.log('right');
      if ($('.thumbnails .active').parent().is(':last-of-type')) {
        $('.thumbnails .active').parent().parent().find('li:eq(0)').find('img').click();
      } else {
        $('.thumbnails .active').parent().next().find('img').click();
      }
    } else {
      console.log('left');
      if ($('.thumbnails .active').parent().is(':first-of-type')) {
        $('.thumbnails .active').parent().parent().find('li:last-of-type').find('img').click();
      } else {
        $('.thumbnails .active').parent().prev().find('img').click();
      }
    }
  });
});
