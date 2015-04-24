Template.EventsShowDetails.created = function(){
  this.state = new ReactiveDict();
};

Template.EventsShowDetails.rendered = function(){
  this.state.set('mapWidth', $('.map-container').width());
};

Template.EventsShowDetails.events({
  'click .more-details': function(event){
    event.preventDefault();
    event.stopPropagation();

    var el = event.target;

      // remove the 40px top/bottom padding of the li
    var parentHeight = el.parentNode.parentNode.scrollHeight - 40;

    if ($(el).hasClass('expanded')) {
      $(el).removeClass('expanded');

      $(el).velocity('reverse');
      $(el).parent().parent().velocity('reverse');
    } else {
      $(el).addClass('expanded');

      $.Velocity(el, { rotateZ: '180deg' }, { duration: 200 });
      $.Velocity($(el).parent().parent(),
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
