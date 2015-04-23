Template.EventsShow.created = function(){
  this.subscribe('event');
};

Template.EventsShow.rendered = function(){
  var swiper1 = this.$('.swiper-container')[0].swiper;
  var swiper2 = this.$('.swiper-container')[1].swiper;

  swiper1.params.control = swiper2;
  swiper2.params.control = swiper1;
};

Template.EventsShow.helpers({
  isPlanner: function(){
    if (this.currentEvent()) {
      return Router.current().params.user_id === this.currentEvent().user;
    }
  },
});

Template.EventsShow.events({
  'submit .new-comment': function(event){
    event.preventDefault();

    var routeParams = Router.current().params;
    var eventId = routeParams.event_id;

    var comment = {
      user: routeParams.user_id,
      body: event.target.comment.value,
      created: new Date(),
    };

    Meteor.call('addComment', eventId, comment);

    event.target.comment.value = '';
  }
});

function setEventsShowHeight (){
  var windowHeight = $(window).height();
  var occupied = (
    $('.status-bar').height() + $('.cover-photo-inner').height() + ($('.nav-slides').height() + 1)
  );
  var availableHeight = windowHeight - occupied;

  this.$('.main-slides').height(availableHeight);
};

function setCommentFieldPosition (){
  var windowWidth = $(window).width();
  var leftOffset = windowWidth * 2;

  this.$('.new-comment').css({ left: leftOffset });
};
