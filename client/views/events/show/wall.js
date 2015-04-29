Template.EventsShowWall.helpers({
  timeAgoPosted: function(){
    return moment(this.created).fromNow();
  },

  username: function(){
    var user = Meteor.user();
    if (user) {
      return user.profile.fullName;
    }
  }
});
