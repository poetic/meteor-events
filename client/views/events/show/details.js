Template.EventsShowDetails.created = function(){
  this.state = new ReactiveDict();
};

Template.EventsShowDetails.rendered = function(){
  this.state.set('mapWidth', $('.li-lrg-banner').width());
};

Template.EventsShowDetails.events({
  'click .li-lrg-touch-footer': function(event){
    stopEvent(event);

    var touchArea = event.target;
    var activityCard = $(touchArea).parent();
    var arrow = activityCard.find('.arrow');

      // remove 40px vertical padding from total height because it opens too far
    var totalCardHeight = activityCard[0].scrollHeight - 40;

    if (!arrow.hasClass('expanded')) {
      arrow.addClass('expanded');

      $.Velocity(arrow, { rotateZ: '180deg' }, { duration: 200 });
      $.Velocity(activityCard,
        { height: totalCardHeight }, { duration: 200 }
      );
    } else {
      arrow.removeClass('expanded');

      arrow.velocity('reverse');
      activityCard.velocity('reverse');
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

  staticMapUrl: function(address){
    var mapHeight = '100';
    var mapWidth = Template.instance().state.get('mapWidth');
    var encodedAddress = encodeFullAddress(this.address);

    if (mapWidth) {
      return buildMapUrl(encodedAddress, {
        width: mapWidth, height: mapHeight
      });
    }
  }
});
