Template.swiperSlides.rendered = function(){
  var options = this.data.options;
  var defaults = { onTransitionEnd: onTransitionEnd.bind(this) };
  var swiperOptions = _.extend(options, defaults);

  this.$('.swiper-container').swiper(swiperOptions);

  addStateListener.call(this);
};

function onTransitionEnd (event){
  var param = this.data.param;
  var queryString = '?' + param + '=' + event.activeIndex;

  var newState = {};
  newState[param] = event.activeIndex;

  if (!history.state) {
    history.replaceState(newState, '', queryString);
  } else if (history.state[param] !== event.activeIndex) {
    history.pushState(newState, '', queryString);
  }
};

function addStateListener (){
  var swiper = this.$('.swiper-container')[0].swiper;
  var param = this.data.param;

  window.onpopstate = function(event){
    swiper.slideTo(event.state[param]);
  };
};
