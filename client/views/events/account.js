Template.Account.events({
  'submit form': function(event) {
    return false;
  },
  'click .close': function() {
    $('#account').velocity('reverse');
  },
});
