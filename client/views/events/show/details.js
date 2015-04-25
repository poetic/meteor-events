Template.EventsShowDetails.created = function(){
  this.state = new ReactiveDict();
};

Template.EventsShowDetails.rendered = function(){
  this.state.set('mapWidth', $('.map-container').width());
};

Template.EventsShowDetails.events({
  'click .touch-area': function(event){
    stopEvent(event);

    var touchArea = event.target;
    var activityCard = $(touchArea).parent();
    var arrow = activityCard.find('.more-details');

      // remove the 40px top/bottom padding of the li
    var parentHeight = activityCard[0].scrollHeight - 40;

    if (arrow.hasClass('expanded')) {
      arrow.removeClass('expanded');

      arrow.velocity('reverse');
      activityCard.velocity('reverse');
    } else {
      arrow.addClass('expanded');

      $.Velocity(arrow, { rotateZ: '180deg' }, { duration: 200 });
      $.Velocity(activityCard,
        { height: parentHeight }, { duration: 200 }
      );
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
    var fullAddress = encodeFullAddress(this.address);

    if (mapWidth) {
      return buildMapUrl(fullAddress, mapHeight, mapWidth);
    }
  }
});

function encodeFullAddress (address){
  var fullAddress = (
    address.address1 + ' ' +
    address.address2 + ' ' +
    address.city + ', ' +
    address.state + ' ' +
    address.zipCode
  );

  return encodeURIComponent(fullAddress);
};

function buildMapUrl (address, mapHeight, mapWidth){
  var url = Meteor.settings.public.googleApiUrl +
    '?markers=' + address +
    '&size=' + mapWidth + 'x' + mapHeight +
    '&key=' + Meteor.settings.public.googleApiKey;

  return url;
};
