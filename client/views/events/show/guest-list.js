Template.EventsShowGuestList.helpers({
  yesGuests: function(){
    var guests = this.currentEvent().guests;
    return filterAttendingGuests(guests);
  },

  noGuests: function(){
    var guests = this.currentEvent().guests;
    return guests.filter(function(guest){ return !guest.attending });
  },

  noReplyGuests: function(){
    var guests = this.currentEvent().guests;
    return guests.filter(function(guest){ return !guest.replied });
  },

  uninvitedGuests: function(){
    var guests = this.currentEvent().guests;
    return guests.filter(function(guest){ return !guest.invited });
  },

  attendingCount: function(){
    var guests = this.currentEvent().guests;
    return filterAttendingGuests(guests).length;
  },
});

function filterAttendingGuests (guests){
  return guests.filter(function(guest){ return guest.attending });
};
