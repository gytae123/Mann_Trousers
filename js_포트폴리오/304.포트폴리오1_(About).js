let logobox = document.querySelector('.logobox');

    init()

    window.addEventListener('scroll', function() {
      init()
    })
    function init() {
      console.log(window.scrollY, window.innerWidth);

      // 화면세로가 150보다 밑에 내려왔을때
      // 가로가 768초과면 로고를 100,100
      // 가로가 768이하면 로고를 100,100
      // 가로가 480이하면 로고를 90, 90
      
      // 화면세로가 150보다 위에 있을때
      // 세로가 768초과면 로고를 500,500
      // 가로가 768이하면 로고를 400,400
      // 가로가 480이하면 로고를 300, 300
      
      if (window.scrollY >= 150) {
        if (window.innerWidth <= 480) {
          logobox.style.width = '90px';
          logobox.style.height = '90px';
          logobox.style.transform = 'translate(-50%, -80%)'
        }
        else if (window.innerWidth <= 768) {
          logobox.style.width = '100px';
          logobox.style.height = '100px';
          logobox.style.transform = 'translate(-50%, -80%)'
        }
        else if (window.innerWidth > 768) {
          logobox.style.width = '100px';
          logobox.style.height = '100px';
          logobox.style.transform = 'translate(-50%, -80%)'
        }
      }
      else if (window.scrollY < 150){
        if (window.innerWidth <= 480) {
          logobox.style.width = '300px';
          logobox.style.height = '300px';
          logobox.style.transform = 'translate(-50%, 35%)'
        }
        else if (window.innerWidth <= 768) {
          logobox.style.width = '400px';
          logobox.style.height = '400px';
          logobox.style.transform = 'translate(-50%, 15%)'
        }
        else if (window.innerWidth > 768) {
          logobox.style.width = '500px';
          logobox.style.height = '500px';
          logobox.style.transform = 'translate(-50%, 10%)'
        }
      }
    }

    $(document).ready(function(){
      $('#wrap').css({
        opacity: 1
        })
      })

    $(window).scroll(function(){
      let img1 = document.getElementById('img_container1')
      let txtL1 = document.getElementById('txt_container_L1')

      let h = $(document).scrollTop();
        if(h >= 650) {
          $(img1).css({"opacity": "1", "transform": "translateY(0px)", "height": "91%"})
          $(txtL1).css({"opacity": "1", "transform": "translateX(0px)"})
        }
    })

    $(document).ready(function(){
      // 사용자가 스크롤을 얼마나 했는지에 따라 버튼을 표시하거나 숨깁니다
      $(window).scroll(function() {
          if ($(this).scrollTop() > 100) { // 100px 이상 스크롤했을 때 버튼을 보여줍니다
              $('#scrollToTop').fadeIn();
          } else {
              $('#scrollToTop').fadeOut();
          }
      });
  
      // 버튼을 클릭하면 페이지 맨 위로 스크롤합니다
      $('#scrollToTop').click(function() {
          $('html, body').animate({scrollTop : 0},800);
          return false;
      });
  });

  $(document).ready(function(){
    $('#hamburger-button').click(function(){
        var panel = $('#side-panel');
        var overlay = $('#overlay');
        
        if (panel.css('right') == '-250px') {
            overlay.fadeIn(200); // 오버레이를 먼저 표시
            panel.animate({right: '0px'}, 200, 'linear'); // 그 다음 패널을 보여줌
        } else {
            overlay.fadeOut(200); // 오버레이를 숨김
            panel.animate({right: '-250px'}, 200, 'linear'); // 패널을 숨김
        }
    });

    // 오버레이 클릭 시 패널과 오버레이 숨김
    $('#overlay').click(function() {
        $(this).fadeOut(200); // 오버레이를 먼저 숨김
        $('#side-panel').animate({right: '-250px'}, 200, 'linear'); // 패널을 숨김
    });
});