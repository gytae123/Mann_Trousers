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
    $(document).ready(function(){
      $('#wrap').css({
        opacity: 1
      })
      
      $('.btn_R').click(function(){
        // fadeInUp  
        idx=(idx+1) % 4;
        // console.log(idx)
        $('.img_box').find('.txt').removeClass('fadeInUp')
        // $('.img_box').eq($('.swiper-slide-active').index()).find('.txt').addClass('fadeInUp')
        $('.swiper-slide-active').find('.txt').addClass('fadeInUp')
      })
    })

    $(document).ready(function(){
      $('.btn_L').click(function(){
        // fadeInUp  
        idx=(idx+1) % 4;
        // console.log(idx)
        $('.img_box').find('.txt').removeClass('fadeInUp')
        // $('.img_box').eq($('.swiper-slide-active').index()).find('.txt').addClass('fadeInUp')
        $('.swiper-slide-active').find('.txt').addClass('fadeInUp')
      })
    })