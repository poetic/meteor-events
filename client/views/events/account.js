Template.Account.onRendered(function(){
  if(Router.current().params['show-account']) {
    $(this.firstNode).css('display', 'block').css('top', 0);
  }
});

Template.Account.helpers({
  user: function() {
    return Meteor.user();
  },
});

Template.Account.events({
  'submit form': function(event) {
    stopEvent(event);

    var accountBtn = $('#acct-btn');
    var accountPage = $('#account');

    ramjet.transform(accountPage[0], accountBtn[0], {
      //easing: ramjet.easeInOut,
      duration: 250,
    });

    accountPage.css('display', 'none');

    //Meteor.users.update(Meteor.userId(), {
      //$set: {
        //'profile.fullName':       event.target.fullName.value,
        //'profile.email':          event.target.email.value,
        //'profile.secondaryEmail': event.target.secondaryEmail.value,
        //'profile.phone':          event.target.phone.value
      //}
    //});

    //closeAccount();

    //return false;
  },

  'click .close': function(event){
    stopEvent(event);

    var accountBtn = $('#acct-btn-wrapper');
    var accountPage = $('#account');

    ramjet.transform(accountPage[0], accountBtn[0], {
      //easing: ramjet.easeInOut,
      duration: 250,
    });

    accountPage.css('display', 'none');
  }
});

function closeAccount() {
}
