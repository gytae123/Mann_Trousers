// $(document).ready(function(){
//     $('#wrap').css({
//     opacity: 1
//     })
// })


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

    $('#hamburger-button').click(function () {
        $(this).toggleClass('white');
    })

    // 오버레이 클릭 시 패널과 오버레이 숨김
    $('#overlay').click(function () {
        $(this).fadeOut(200); // 오버레이를 먼저 숨김
        $('#side-panel').animate({ right: '-250px' }, 200, 'linear'); // 패널을 숨김
    });
});