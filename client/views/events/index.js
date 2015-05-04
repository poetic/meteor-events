Template.EventsIndex.rendered = function(){
  setSlideHeight.call(this);

  var swiper1 = this.$('.swiper-container')[0].swiper;
  var swiper2 = this.$('.swiper-container')[1].swiper;

  swiper1.params.control = swiper2;
  swiper2.params.control = swiper1;
};

function setSlideHeight (){
 var windowHeight    = $(window).height();
 var navHeight       = $('.navbar').height();
 var statusBarHeight = $('#status-bar').height();

   // take off 1 extra pixel to prevent outer template from scrolling
 var availableHeight = windowHeight - statusBarHeight - (navHeight + 1);

 this.$('.swiper-slide-main').height(availableHeight);
};

Template.EventsIndex.events({
  'click #fixed-settings': function(event) {
    stopEvent(event);

    var accountBtn = $('#acct-btn');
    var accountPage = $('#account');

    accountPage.css('display', 'initial');

    ramjet.transform(accountBtn[0], accountPage[0], {
      //easing: ramjet.easeInOut,
      duration: 250,
      done: function(){
        accountPage.css('display', 'initial');
      },
    });

    accountPage.css('display', 'none');
  },
});

