Template.swiperSlides.created = function(){
  //console.log(history.state)
  //var param = this.data.param;

  //if (routeHasQueryParam(param)) {
    //this.data.initialSlideOverride = Router.current().params.query[param];
  //}
};

Template.swiperSlides.rendered = function(){
  var options = this.data.options;
  var defaults = { onTransitionEnd: onTransitionEnd.bind(this) };

  //if (_.has(this.data, 'initialSlideOverride')) {
    //defaults.initialSlide = this.data.initialSlideOverride;
  //}

  var swiperOptions = _.extend(options, defaults);

  this.$('.swiper-container').swiper(swiperOptions);
};

function onTransitionEnd (event){
  var param = this.data.param;
  var newState = {}

  if (history.state[param] !== event.activeIndex) {
    newState[param] = event.activeIndex;
    history.pushState(newState, '',  '?' + param + '=' + event.activeIndex);
  }

  //var query = { query: param + '=' + e.activeIndex };
  //Router.go(currentRoute, {}, query);
};
