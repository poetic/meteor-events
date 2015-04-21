Template.EventsShowWall.rendered = function(){
  var windowHeight = $(window).height();

  var occupied = $('.cover-photo').height() + $('.link-swiper').height();
  var availableHeight = windowHeight - occupied;

  this.$('.wall-posts').height(availableHeight);
};

Template.EventsShowWall.events({
  'submit .new-comment': function(event){
    event.preventDefault();

    var routeParams = Router.current().params;
    var eventId = routeParams.event_id

    var comment = {
      user: routeParams._id,
      body: event.target.comment.value,
      created: new Date(),
    };

    Events.update({ _id: eventId }, { $push: { comments: comment } });

    event.target.comment.value = '';
  }
});

Template.EventsShowWall.helpers({
  commentedAt: function(){
    return moment(this.created).fromNow();
  },
  username: function(){
    var userId = this.user;

    if (Users.findOne(userId)) {
      return Users.findOne(userId).fullName;
    }
  }
});