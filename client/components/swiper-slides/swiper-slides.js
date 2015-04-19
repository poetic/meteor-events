Template.swiperSlides.created = function(){
  var param = this.data.param;
  var routeParams = Router.current().params.query;

  if (_.has(routeParams, param)) {
    this.data.options.initialSlide = routeParams[param];
  }
};

Template.swiperSlides.rendered = function(){
  var options = this.data.options;
  var defaults = { onTransitionEnd: onTransitionEnd.bind(this) };
  var swiperOptions = _.extend(options, defaults);

  this.$('.swiper-container').swiper(swiperOptions);

  addStateListener.call(this);
};

function onTransitionEnd (event){
  var param = this.data.param;
  var newState = {};

  if (history.state[param] !== event.activeIndex) {
    newState[param] = event.activeIndex;
    history.pushState(newState, '',  '?' + param + '=' + event.activeIndex);
  };
};

function addStateListener (){
  var swiper = this.$('.swiper-container')[0].swiper;
  var param = this.data.param;

  window.onpopstate = function(event){
    swiper.slideTo(event.state[param]);
  };
};
