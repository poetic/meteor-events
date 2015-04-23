Template.EventsShowWall.helpers({
  timeAgoPosted: function(){
    return moment(this.created).fromNow();
  },

  username: function(){
    var userId = this.user;

    if (Users.findOne(userId)) {
      return Users.findOne(userId).fullName;
    }
  }
});
