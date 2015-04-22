Template.EventsShow.created = function(){
  this.subscribe('event')
};

Template.EventsShow.rendered = function(){
  var swiper1 = this.$('.swiper-container')[0].swiper;
  var swiper2 = this.$('.swiper-container')[1].swiper;

  swiper1.params.control = swiper2;
  swiper2.params.control = swiper1;
};

Template.EventsShow.helpers({
  isPlanner: function(){
    if (this.currentEvent && this.currentEvent()) {
      return Router.current().params.user_id === this.currentEvent().user;
    }
  },
});
