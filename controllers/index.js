IndexController = ApplicationController.extend({
  waitOn: function(){
    Meteor.subscribe('users');
  },

  data: {
    users: function(){
      return Users.find();
    }
  }
});
