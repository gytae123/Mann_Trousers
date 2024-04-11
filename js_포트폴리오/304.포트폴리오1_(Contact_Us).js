$(document).ready(function(){
    $('#wrap').css({
    opacity: 1
    })
})
    // script.js 파일 내용
document.addEventListener('DOMContentLoaded', function() {
const form = document.getElementById('contact-form');
form.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('성공적으로 접수되었습니다.');
});
});