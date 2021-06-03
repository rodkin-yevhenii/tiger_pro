import 'slick-carousel/slick/slick.min'

jQuery(document).ready(function ($) {
  const sectionSlider = $('.section__slider .slider')

  if (sectionSlider.length > 0) {
    sectionSlider.each(function (i, slider) {
      const sliderDOM = $(slider)
      const sliderDOMPrevBtn = sliderDOM
        .closest('.section')
        .find('.btn-arrow--left')
      const sliderDOMNextBtn = sliderDOM
        .closest('.section')
        .find('.btn-arrow--right')

      sliderDOMPrevBtn.on('click', function () {
        sliderDOM.slick('slickPrev')
      })

      sliderDOMNextBtn.on('click', function () {
        sliderDOM.slick('slickNext')
      })

      sliderDOM.slick({
        rows: 0,
        slidesToShow: 4,
        arrows: false,
        slidesToScroll: 1,
        dots: false,
        infinite: true,
        speed: 200,
        adaptiveHeight: false,
        autoplay: false,
        cssEase: 'linear',
        responsive: [
          {
            breakpoint: 1700,
            settings: {
              slidesToShow: 3
            }
          },
          {
            breakpoint: 1260,
            settings: {
              slidesToShow: sliderDOM.hasClass('slider-projects') ? 3 : 5
            }
          },
          {
            breakpoint: 1023,
            settings: {
              slidesToShow: sliderDOM.hasClass('slider-projects') ? 2 : 4
            }
          },
          {
            breakpoint: 560,
            settings: {
              slidesToShow: sliderDOM.hasClass('slider-projects') ? 1 : 2,
              swipeToSlide: true
            }
          }
        ]
      })
    })
  }
})
