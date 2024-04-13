// $(document).ready(function(){
//     $('#wrap').css({
//     opacity: 1
//     })
// })
// script.js 파일 내용
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        alert('성공적으로 접수되었습니다.');
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