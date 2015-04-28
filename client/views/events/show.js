Template.EventsShow.created = function(){
  this.subscribe('event');
};

Template.EventsShow.rendered = function(){
  Meteor.setTimeout(function(){
    setEventsShowHeight.call(this);
    setCommentFieldPosition.call(this);

    var swiper1 = this.$('.swiper-container')[0].swiper;
    var swiper2 = this.$('.swiper-container')[1].swiper;

    swiper1.params.control = swiper2;
    swiper2.params.control = swiper1;
  }.bind(this), 1000);
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
    stopEvent(event);

    var routeParams = Router.current().params;
    var eventId = routeParams.event_id;

    var comment = {
      user: routeParams.user_id,
      body: event.target.comment.value,
      created: new Date(),
    };

    Meteor.call('addComment', eventId, comment);
    scrollToBottom();

    event.target.comment.value = '';
  },

  'click .cover-photo-icon': function(){
    stopEvent(event);
    var userId = Router.current().params.user_id;

    Router.go('events.index', { user_id: userId });
  },

  'click #edit-button': function(event){
    stopEvent(event);
    var routeParams = Router.current().params;

    //Router.go('events.edit', {
      //user_id: routeParams.user_id, event_id: routeParams.event_id
    //});
  },
});

function setEventsShowHeight (){
  var windowHeight = $(window).height();
  var occupied = (
    $('#status-bar').height() + $('.cover-photo-inner').height() + ($('.navbar').height() + 1)
  );
  var availableHeight = windowHeight - occupied;

  this.$('.main-slides').height(availableHeight);
};

function setCommentFieldPosition (){
  var windowWidth = $(window).width();
  var leftOffset = windowWidth * 2;

  this.$('.new-comment').css({ left: leftOffset });
};

function scrollToBottom (){
  var newPost = $('.wall-slide li').last();

  newPost.velocity('scroll', { container: $('.wall-slide') });
};
