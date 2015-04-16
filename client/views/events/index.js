Template.EventsIndex.rendered = function(){
  var linkSwiper = this.$('.events-index-links').swiper({
    centeredSlides: true,
    slidesPerView: 3,
    slideToClickedSlide: true,
    touchRatio: 0.3,
    initialSlide: 1,
  });

  var slideSwiper = this.$('.events-index-slides').swiper({
    initialSlide: 1,
  });

  slideSwiper.params.control = linkSwiper;
  linkSwiper.params.control = slideSwiper;
};
