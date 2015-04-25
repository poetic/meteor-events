Template.EventsShowHost.events({
  'click .mdi-communication-email': function(event){
    stopEvent(event);
    window.open('mailto:' + this.email, '_system');
  },

  'click .mdi-communication-phone': function(event){
    stopEvent(event);
    location.href = 'tel:' + this.phone;
  },

  'click .mdi-communication-message': function(event){
    stopEvent(event);
    window.open('sms:' + this.phone, '_system');
  },
});
