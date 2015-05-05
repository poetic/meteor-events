ParamManager = Meteor.Poetic.ParamManager;
Settings = Meteor.settings;

stopEvent = function(event){
  event.preventDefault();
  event.stopPropagation();
};

encodeFullAddress = function(address){
  var addressParts = [
    address.address1, address.city,
    address.state, address.zipCode
  ];

  if (address.address2) {
    addressParts.splice(1, 0, address.address2);
  }

  return encodeURIComponent(addressParts.join(' '));
};

buildMapUrl = function(encodedAddress, dimensions){
  var url = Settings.public.googleApiUrl +
    '?markers=' + encodedAddress +
    '&size=' + dimensions.width + 'x' + dimensions.height +
    '&key=' + Settings.public.googleApiKey;

  return url;
};

transformOpen = function(els){
  els.to.css('display', 'initial');

  ramjet.transform(els.from[0], els.to[0], {
    duration: 250,
    done: function(){
      els.to.css('display', 'initial')
    },
  });

  els.to.css('display', 'none');
};

transformClose = function(els){
  ramjet.transform(els.from[0], els.to[0], {
    duration: 250
  });

  els.from.css('display', 'none');
};

deregisterParam = function(param){
  if (ParamManager.isRegistered(param)) {
    ParamManager.DeRegisterParam(param);
  }
};

registerEditFormParam = function(){
  if (!ParamManager.isRegistered('edit-form')) {
    ParamManager.RegisterParam('edit-form', function(value){

      if (value) {
        transformOpen({
          from: $('#event-edit-btn'), to: $('#events-edit')
        });
      } else {
        if ($('#events-edit').css('display') !== 'none') {
          transformClose({
            from: $('#events-edit'), to: $('#event-edit-btn')
          });
        }
      }
    });
  }
};
