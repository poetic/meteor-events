IndexController = ApplicationController.extend({
  data: {
    users: function(){
      return Users.find();
    }
  }
});
