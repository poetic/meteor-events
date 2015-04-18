Template.swiperSlides.rendered = function(){
  var param = this.data.param;
  var options = this.data.options;

  var defaults = {
    onTransitionEnd: function(e){
      if (param) {
        console.log(e.activeIndex);
      }
    }
  };

  var swiperOptions = _.extend(options, defaults);

  this.$('.swiper-container').swiper(swiperOptions);
};
