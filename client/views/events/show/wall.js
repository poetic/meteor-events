Template.EventsShowWall.events({
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
