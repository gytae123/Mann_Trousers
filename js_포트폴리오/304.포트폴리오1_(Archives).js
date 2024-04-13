$(document).ready(function () {
  $('#wrap').css({
    opacity: 1
  })
})


document.addEventListener("DOMContentLoaded", function () {
  const slideTrack = document.querySelector('.slide-track');
  const slides = document.querySelectorAll('.slide');
  const totalWidth = slides.length * 400; // 원본 슬라이드의 총 너비

  // 슬라이드 복제 후 슬라이드 트랙에 추가
  slides.forEach(slide => {
    const cloneSlide = slide.cloneNode(true);
    slideTrack.appendChild(cloneSlide);
  });

  let currentPosition = 0;
  function scrollSlides() {
    currentPosition -= 2; // 슬라이드 이동 속도 조절
    if (currentPosition <= -totalWidth) {
      currentPosition = 0;
    }
    slideTrack.style.transform = `translateX(${currentPosition}px)`;
    requestAnimationFrame(scrollSlides);
  }

  scrollSlides(); // 슬라이드 스크롤 시작
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