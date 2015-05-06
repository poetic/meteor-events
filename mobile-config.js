App.info({
  id: 'com.poeticsystems.eventassist',
  name: 'EventAssist',
  description: 'an event management app',
  author: 'Poetic Systems',
  website: 'http://poeticsystems.com'
});

App.setPreference('Orientation', 'portrait');
App.setPreference('StatusBarBackgroundColor', '#000000');

App.accessRule('*://lorempixel.com/*');
App.accessRule('*.google.com/*');
App.accessRule('*.googleapis.com/*');
App.accessRule('*.gstatic.com/*');
App.accessRule('mailto:*', { launchExternal: true });
App.accessRule('sms:*', { launchExternal: true });
