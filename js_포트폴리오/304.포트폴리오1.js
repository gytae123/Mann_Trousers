// Initialize Swiper
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  // spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

let idx = 0;
$(document).ready(function () {
  $('#wrap').css({
    opacity: 1
  })

  $('.btn_R').click(function () {
    // fadeInUp  
    idx = (idx + 1) % 4;
    // console.log(idx)
    $('.img_box').find('.txt').removeClass('fadeInUp')
    // $('.img_box').eq($('.swiper-slide-active').index()).find('.txt').addClass('fadeInUp')
    $('.swiper-slide-active').find('.txt').addClass('fadeInUp')
  })
})

$(document).ready(function () {
  $('.btn_L').click(function () {
    // fadeInUp  
    idx = (idx + 1) % 4;
    // console.log(idx)
    $('.img_box').find('.txt').removeClass('fadeInUp')
    // $('.img_box').eq($('.swiper-slide-active').index()).find('.txt').addClass('fadeInUp')
    $('.swiper-slide-active').find('.txt').addClass('fadeInUp')
  })
})

$(document).ready(function () {
  $('#hamburger-button').click(function () {
    var panel = $('#side-panel');
    var overlay = $('#overlay');

    if (panel.css('right') == '-250px') {
      overlay.fadeIn(200); // 오버레이를 먼저 표시
      panel.animate({ right: '0px' }, 200, 'linear'); // 그 다음 패널을 보여줌
    } else {
      overlay.fadeOut(200); // 오버레이를 숨김
      panel.animate({ right: '-250px' }, 200, 'linear'); // 패널을 숨김
    }
  });

  // 오버레이 클릭 시 패널과 오버레이 숨김
  $('#overlay').click(function () {
    $(this).fadeOut(200); // 오버레이를 먼저 숨김
    $('#side-panel').animate({ right: '-250px' }, 200, 'linear'); // 패널을 숨김
  });
});