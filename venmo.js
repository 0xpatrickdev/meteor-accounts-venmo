Accounts.oauth.registerService('venmo');

if (Meteor.isClient) {
  Meteor.loginWithVenmo = function(options, callback) {
    // support a callback without options
    if (! callback && typeof options === "function") {
      callback = options;
      options = null;
    }

    var credentialRequestCompleteCallback = Accounts.oauth.credentialRequestCompleteHandler(callback);
    Venmo.requestCredential(options, credentialRequestCompleteCallback);
  };
} else {
  Accounts.addAutopublishFields({
    forLoggedInUser: ['services.venmo'],
    forOtherUsers: [
      'services.venmo.username',
      'services.venmo.first_name',
      'services.venmo.last_name',
      'services.venmo.display_name',
      'services.venmo.profile_picture_url'
    ]
  });
}