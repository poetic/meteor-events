Template.EventsIndex.created = function(){
  this.data.navOptions = {
    centeredSlides: true,
    slidesPerView: 'auto',
    slideToClickedSlide: true,
    touchRatio: 0.5,
    initialSlide: 1,
  };

  this.data.slideOptions = {
    initialSlide: 1,
  };
};

Template.EventsIndex.rendered = function(){
  setSlideHeight.call(this);

  var swiper1 = this.$('.swiper-container')[0].swiper;
  var swiper2 = this.$('.swiper-container')[1].swiper;

  swiper1.params.control = swiper2;
  swiper2.params.control = swiper1;
};

function setSlideHeight (){
 var windowHeight    = $(window).height();
 var navHeight       = $('.navbar').height();
 var statusBarHeight = $('#status-bar').height();

   // take off 1 extra pixel to prevent outer template from scrolling
 var availableHeight = windowHeight - statusBarHeight - (navHeight + 1);

 this.$('.main-slides').height(availableHeight);
};

Template.EventsIndex.events({
  'click #fixed-settings': function() {
    $('#account').css('display', 'block');
    $('#account').velocity({top: 0}, "swing");
    return false;
  },
});
