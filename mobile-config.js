App.accessRule('*://lorempixel.com/*');
App.accessRule('*.google.com/*');
App.accessRule('*.googleapis.com/*');
App.accessRule('*.gstatic.com/*');
App.accessRule('mailto:*', { launchExternal: true });
App.accessRule('sms:*', { launchExternal: true });
