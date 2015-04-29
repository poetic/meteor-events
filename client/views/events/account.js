Template.Account.onRendered(function(){
  if(Router.current().params['show-account']) {
    this.$('form').css('display', 'block').css('top', 0);
  }
});

Template.Account.helpers({
  profile: function() {
    return Meteor.user().profile;
  },
});

Template.Account.events({
  'submit form': function(event) {
    event.preventDefault();

    Meteor.users.update(Meteor.userId(), {
      $set: {
        'profile.fullName':       event.target.fullName.value,
        'profile.email':          event.target.email.value,
        'profile.secondaryEmail': event.target.secondaryEmail.value,
        'profile.phone':          event.target.phone.value
      }
    });

    closeAccount();

    return false;
  },
  'click .close': closeAccount,
});

function closeAccount() {
  $('#account').velocity({top: '100%'}, "swing", function() {
    $('#account').css('display', 'none');
  });
}
