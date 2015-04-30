Template.EventsShowWall.helpers({
  timeAgoPosted: function(){
    return moment(this.created).fromNow();
  },

  username: function(){
    var user = Meteor.users.findOne({ '_id': this.user })

    if (user) { return user.profile.fullName }
  }
});
