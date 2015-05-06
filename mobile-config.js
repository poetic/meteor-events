App.setPreference('Orientation', 'portrait');
App.setPreference('StatusBarBackgroundColor', '#000000');
App.setPreference('StatusBarOverlaysWebView', false);
App.setPreference('StatusBarStyle', 'lightcontent');

App.accessRule('*://lorempixel.com/*');
App.accessRule('*.google.com/*');
App.accessRule('*.googleapis.com/*');
App.accessRule('*.gstatic.com/*');
App.accessRule('mailto:*', { launchExternal: true });
App.accessRule('sms:*', { launchExternal: true });
