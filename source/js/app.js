$(function() {
  
  $('.slider__directions').slick({  
    infinite: true,  
    slidesToShow: 5,
    slidesToScroll: 1,
    variableWidth: true
  });

  $('.slider__specialists').slick({  
  infinite: true,  
  slidesToShow: 4,
  slidesToScroll: 1,
  variableWidth: true   
  });

  $('.slider__sertificates').slick({  
    infinite: true,  
    slidesToShow: 4,
    slidesToScroll: 1,
    variableWidth: true   
    });

  $('.slider__reviews').slick({  
    infinite: false,  
    slidesToShow: 2,
    slidesToScroll: 1,    
    vertical: true    
    });

});