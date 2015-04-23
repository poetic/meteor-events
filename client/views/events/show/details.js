Template.EventsShowDetails.events({
  'click .more-details': function(event){
    event.preventDefault();
    event.stopPropagation();
  },
});

Template.EventsShowDetails.helpers({
  formattedDate: function(){
    return moment(this.startTime).format('dddd MMM D');
  },

  formattedStartTime: function(){
    return moment(this.startTime).format('h:mm a');
  },

  formattedEndTime: function(){
    return moment(this.endTime).format('h:mm a');
  },
})
