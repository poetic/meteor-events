Template.EventsIndex.created = function(){
  this.data.linksOptions = {
    centeredSlides: true,
    slidesPerView: 'auto',
    slideToClickedSlide: true,
    touchRatio: 0.35,
    initialSlide: 1,
  };

  this.data.slidesOptions = {
    initialSlide: 1,
  };

  this.data.param = 'slides';
};


Template.EventsIndex.rendered = function(){
  var swiper1 = this.$('.swiper-container')[0].swiper;
  var swiper2 = this.$('.swiper-container')[1].swiper;

  swiper1.params.control = swiper2;
  swiper2.params.control = swiper1;
};
