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
  'submit #new-post': function(event){
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

  'click #back-arrow': function(){
    stopEvent(event);
    var userId = Router.current().params.user_id;

    Router.go('events.index', { user_id: userId });
  },

  'click #edit-button': function(event){
    stopEvent(event);
    console.log('click')
  },
});

function setEventsShowHeight (){
  var windowHeight = $(window).height();
  var occupied = (
    $('#status-bar').height() + $('.img-preview-inner').height() + ($('.navbar').height() + 1)
  );
  var availableHeight = windowHeight - occupied;

  this.$('.swiper-slide-main').height(availableHeight);
};

function setCommentFieldPosition (){
  var windowWidth = $(window).width();
  var leftOffset = windowWidth * 2;

  this.$('.form-bottom').css({ left: leftOffset });
};

function scrollToBottom (){
  var newPost = $('.wall-slide li').last();

  newPost.velocity('scroll', { container: $('.wall-slide') });
};
