'use strict';

function include(url) {
  var script = document.createElement('script');
  script.src = url;
  document.getElementsByTagName('head')[0].appendChild(script);
  script.onload = function () {
    includeSlick('js/slick/slick.min.js');
  };
  script.onerror = function() {
    include('js/jquery-3.4.1.js');
  };
}

function includeSlick(url) {
  var script = document.createElement('script');
  script.src = url;
  document.getElementsByTagName('head')[0].appendChild(script);
  script.onload = function () {
    $(document).ready(function(){
      $('.coaches-list').slick({
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
         responsive: [
          {
            breakpoint: 1199,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });

      $('.responses-list').slick({
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
      });
    });
  };
}

include('https://code.jquery.com/jquery-3.4.1.min.js');
