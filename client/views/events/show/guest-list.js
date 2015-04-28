Template.EventsShowGuestList.helpers({
  yesGuests: function(){
    var guests = this.currentEvent().guests;
    return guests.filter(function(guest){ return guest.attending });
  },

  noGuests: function(){
    var guests = this.currentEvent().guests;
    return guests.filter(function(guest){ return !guest.attending });
  },

  noReplyGuests: function(){
    var guests = this.currentEvent().guests;
    return guests.filter(function(guest){ return !guest.replied });
  },

  notYetInvitedGuests: function(){
    var guests = this.currentEvent().guests;
    return guests.filter(function(guest){ return !guest.invited });
  },
});
