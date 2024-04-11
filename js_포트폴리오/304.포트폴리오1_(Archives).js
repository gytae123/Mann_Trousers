$(document).ready(function(){
    $('#wrap').css({
      opacity: 1
    })
  })

  document.addEventListener("DOMContentLoaded", function() {
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