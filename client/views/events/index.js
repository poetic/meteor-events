Template.eventsIndex.rendered = function(){
  var linkSwiper = new Swiper('.events-index-links', {
    initialSlide: 1
  });

  var slideSwiper = new Swiper('.events-index-slides', {
    initialSlide: 1
  });

  associateSwipers(linkSwiper, slideSwiper);
};

function associateSwipers (linkSwiper, slideSwiper){
  linkSwiper.params.control = slideSwiper;
  slideSwiper.params.control = linkSwiper;
}
