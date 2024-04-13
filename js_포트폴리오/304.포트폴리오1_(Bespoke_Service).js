$(window).scroll(function () {
  let img1 = document.getElementById('img_container1')
  let img2 = document.getElementById('img_container2')
  let img3 = document.getElementById('img_container3')
  let img4 = document.getElementById('img_container4')
  let img5 = document.getElementById('img_container5')
  let img6 = document.getElementById('img_container6')

  let txtL1 = document.getElementById('txt_container_L1')
  let txtL2 = document.getElementById('txt_container_L2')
  let txtL3 = document.getElementById('txt_container_L3')
  let txtR1 = document.getElementById('txt_container_R1')
  let txtR2 = document.getElementById('txt_container_R2')
  let txtR3 = document.getElementById('txt_container_R3')

  let h = $(document).scrollTop();
  if (h >= 150) {
    $(img1).css({ "opacity": "1", "transform": "translateY(0px)" })
    $(txtL1).css({ "opacity": "1", "transform": "translateX(0px)" })
  }
  if (h >= 900) {
    $(img2).css({ "opacity": "1", "transform": "translateY(0px)" })
    $(txtR1).css({ "opacity": "1", "transform": "translateX(0px)" })
  }
  if (h >= 1800) {
    $(img3).css({ "opacity": "1", "transform": "translateY(0px)" })
    $(txtL2).css({ "opacity": "1", "transform": "translateX(0px)" })
  }
  if (h >= 2700) {
    $(img4).css({ "opacity": "1", "transform": "translateY(0px)" })
    $(txtR2).css({ "opacity": "1", "transform": "translateX(0px)" })
  }
  if (h >= 3800) {
    $(img5).css({ "opacity": "1", "transform": "translateY(0px)" })
    $(txtL3).css({ "opacity": "1", "transform": "translateX(0px)" })
  }
  if (h >= 4900) {
    $(img6).css({ "opacity": "1", "transform": "translateY(0px)" })
    $(txtR3).css({ "opacity": "1", "transform": "translateX(0px)" })
  }
});

$(document).ready(function () {
  $('#wrap').css({
    opacity: 1
  })
})

$(document).ready(function () {
  // 사용자가 스크롤을 얼마나 했는지에 따라 버튼을 표시하거나 숨깁니다
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) { // 100px 이상 스크롤했을 때 버튼을 보여줍니다
      $('#scrollToTop').fadeIn();
    } else {
      $('#scrollToTop').fadeOut();
    }
  });

  // 버튼을 클릭하면 페이지 맨 위로 스크롤합니다
  $('#scrollToTop').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 800);
    return false;
  });
});

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