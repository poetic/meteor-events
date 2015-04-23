Template.EventsShowDetails.events({
  'click .more-details': function(event){
    event.preventDefault();
    event.stopPropagation();

    var el = event.target;

      // remove the 40px top/bottom padding of the li
    var parentHeight = el.parentNode.scrollHeight - 40;

    if ($(el).hasClass('expanded')) {
      $(el).removeClass('expanded');

      $(el).velocity('reverse');
      $(el).parent().velocity('reverse');
    } else {
      $(el).addClass('expanded');

      $.Velocity(el, { rotateZ: '180deg' }, { duration: 200 });
      $.Velocity($(el).parent(), { height: parentHeight }, { duration: 200 });
    }
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
});
