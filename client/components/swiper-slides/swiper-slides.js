Template.swiperSlides.rendered = function(){
  setInitialParamValue.call(this);

  var options = this.data.options;
  var defaults = { onTransitionEnd: onTransitionEnd.bind(this) };
  var swiperOptions = _.extend(options, defaults);

  this.$('.swiper-container').swiper(swiperOptions);
};

Template.swiperSlides.destroyed = function(){
  var param = this.data.param;

  if (ParamManager.isRegistered(param)) {
    ParamManager.DeRegisterParam(param);
  }
};

function onTransitionEnd (event){
  var param = this.data.param;
  var currentSlide = event.activeIndex.toString();

  if (ParamManager.getParam(param) !== currentSlide) {
    ParamManager.setParam(param, currentSlide);
  }
};

function setInitialParamValue (){
  var param = this.data.param;
  var initialSlide = this.data.options.initialSlide;
  var routeParams = Router.current().params.query;

  if (!ParamManager.isRegistered(param)) {
    ParamManager.RegisterParam(param, onParamChange.bind(this));
  }

  if (routeParams[param] !== initialSlide) {
    ParamManager.setParam(param, initialSlide, true);
  }
};

function onParamChange (index){
  var swiper = this.$('.swiper-container')[0].swiper;

  if (swiper) { swiper.slideTo(index) }
};

