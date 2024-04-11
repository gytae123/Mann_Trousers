$(document).ready(function(){
    $('#wrap').css({
    opacity: 1
    })
})


document.addEventListener('DOMContentLoaded', (event) => {
// 모든 토글 가능한 입력 필드 선택
const toggles = document.querySelectorAll('.accordion-toggle');

toggles.forEach(toggle => {
    toggle.addEventListener('change', (event) => {
        // 클릭된 요소를 제외한 모든 체크박스의 체크를 해제합니다.
        toggles.forEach(other => {
            if (other !== toggle) {
                other.checked = false;
            }
        });
    });
});
});

let currentIndex = 0;
const images = document.querySelectorAll('.image');

function changeImage() {
    images[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].classList.add('active');
}

setInterval(changeImage, 7000);