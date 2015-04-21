Template.EventsShowPlanning.created = function(){
  if (!this.data) { this.data = {} }

  this.data.linksOptions = {
    centeredSlides: true,
    slidesPerView: 'auto',
    slideToClickedSlide: true,
    touchRatio: 0.5,
    initialSlide: 2,
  };

  this.data.slidesOptions = {
    initialSlide: 2,
  };
};

Template.EventsShowPlanning.rendered = function(){
  var swiper1 = this.$('.swiper-container')[0].swiper;
  var swiper2 = this.$('.swiper-container')[1].swiper;

  swiper1.params.control = swiper2;
  swiper2.params.control = swiper1;
};

Template.EventsShowPlanning.helpers({
  isPlanner: function(){
    if (this.currentEvent && this.currentEvent()) {
      return Router.current().params._id === this.currentEvent().user;
    }
  },
  commentedAt: function(){

  }
});
