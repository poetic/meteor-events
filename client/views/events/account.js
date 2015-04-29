Template.Account.events({
  'submit form': function(event) {
    Meteor.users.update(Meteor.userId(), {
      $set: {
        'profile.fullName':       event.target.fullName.value,
        'profile.email':          event.target.email.value,
        'profile.secondaryEmail': event.target.secondaryEmail.value,
        'profile.phone':          event.target.phone.value
      }
    });
    return false;
  },
  'click .close': function() {
    $('#account').velocity('reverse', function() {
      $('#account').css('display', 'none');
    });
  },
});
