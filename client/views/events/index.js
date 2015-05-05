Template.EventsIndex.created = function(){
  this.subscribe('events');
};

Template.EventsIndex.rendered = function(){
  Meteor.setTimeout(function(){
    setSlideHeight.call(this);

    var swiper1 = this.$('.swiper-container')[0].swiper;
    var swiper2 = this.$('.swiper-container')[1].swiper;

    swiper1.params.control = swiper2;
    swiper2.params.control = swiper1;
  }.bind(this), 1000);
};

Template.EventsIndex.events({
  'click #acct-btn-wrapper': function(event) {
    stopEvent(event);

    transformOpen({
      from: $('#acct-btn'),
      to: $('#account')
    });
  },

  'click #add-event-btn-wrapper': function(event){
    stopEvent(event);

    transformOpen({
      from: $('#event-edit-btn'),
      to: $('#events-edit')
    });
  },
});

function setSlideHeight (){
 var windowHeight    = $(window).height();
 var navHeight       = $('.navbar').height();
 var statusBarHeight = $('#status-bar').height();

   // take off 1 extra pixel to prevent outer template from scrolling
 var availableHeight = windowHeight - statusBarHeight - (navHeight + 1);

 this.$('.swiper-slide-main').height(availableHeight);
};
