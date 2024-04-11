$(window).scroll(function(){
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
      if(h >= 150) {
        $(img1).css({"opacity": "1", "transform": "translateY(0px)"})
        $(txtL1).css({"opacity": "1", "transform": "translateX(0px)"})
      }
      if(h >= 900) {
        $(img2).css({"opacity": "1", "transform": "translateY(0px)"})
        $(txtR1).css({"opacity": "1", "transform": "translateX(0px)"})
      }
      if(h >= 1800) {
        $(img3).css({"opacity": "1", "transform": "translateY(0px)"})
        $(txtL2).css({"opacity": "1", "transform": "translateX(0px)"})
      }
      if(h >= 2700) {
        $(img4).css({"opacity": "1", "transform": "translateY(0px)"})
        $(txtR2).css({"opacity": "1", "transform": "translateX(0px)"})
      }
      if(h >= 3800) {
        $(img5).css({"opacity": "1", "transform": "translateY(0px)"})
        $(txtL3).css({"opacity": "1", "transform": "translateX(0px)"})
      }
      if(h >= 4900) {
        $(img6).css({"opacity": "1", "transform": "translateY(0px)"})
        $(txtR3).css({"opacity": "1", "transform": "translateX(0px)"})
      }
    });

    $(document).ready(function(){
    $('#wrap').css({
      opacity: 1
      })
    })