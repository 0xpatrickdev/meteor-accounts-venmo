Package.describe({
  name: 'pcooney10:accounts-venmo',
  version: '1.0.0',
  // Brief, one-line summary of the package.
  summary: 'Venmo account login for Meteor',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/pcooney10/meteor-accounts-venmo',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.on_use(function(api) {
  api.versionsFrom("1.2.0");
  api.use('accounts-base', ['client', 'server']);
  api.imply('accounts-base', ['client', 'server']);
  api.use('accounts-oauth', ['client', 'server']);
  api.imply('accounts-oauth', ['client', 'server']);

  api.use('oauth', ['client', 'server']);
  api.use('oauth2', ['client', 'server']);
  api.use('http', ['server']);
  api.use('templating', 'client');
  api.use('underscore', 'server');
  api.use('random', 'client');
  api.use('service-configuration', ['client', 'server']);

  api.add_files('venmo_client.js', 'client');
  api.add_files('venmo_server.js', 'server');
  api.add_files("venmo.js");

  api.export('venmo');

  api.add_files([
    'venmo_configuration.html',
    'venmo_configuration.js'
  ],'client');
});
