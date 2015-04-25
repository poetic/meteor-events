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
  var url = Meteor.settings.public.googleApiUrl +
    '?markers=' + encodedAddress +
    '&size=' + dimensions.width + 'x' + dimensions.height +
    '&key=' + Meteor.settings.public.googleApiKey;

  return url;
};
