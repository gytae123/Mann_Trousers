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


      // if (window.scrollY >= 150) {
      //   if (window.innerWidth <= 480) {
      //     logobox.style.width = '90px';
      //     logobox.style.height = '90px';
      //     logobox.style.transform = 'translate(-50%, -80%)'
      //   }
      //   // else {
      //   // logobox.style.width = '400px';
      //   // logobox.style.height = '400px';
      //   // logobox.style.transform = 'translate(-50%, 12%)'
      //   // }

      //   else if (window.innerWidth <= 768) {
      //     logobox.style.width = '100px';
      //     logobox.style.height = '100px';
      //     logobox.style.transform = 'translate(-50%, -80%)'
      //   }
      //   else {
      //     logobox.style.width = '300px';
      //     logobox.style.height = '300px';
      //     logobox.style.transform = 'translate(-50%, 12%)'
      //   }
      // }
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