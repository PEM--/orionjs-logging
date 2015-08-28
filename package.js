Package.describe({
  name: 'pierreeric:orionjs-logging',
  version: '1.4.1',
  summary: 'Orion - Logger',
  git: 'https://github.com/orionjs/orion',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  // Meteor version compatibility
  api.versionsFrom('1.0');

  // NPM modules
  Npm.depends({
    'bunyan': '1.4.0',
    'bunyan-format': '0.2.1',
    'process': '0.11.1',
    'log-with-style': '0.1.5'
  });

  // Exported dependencies
  api.use(['cosmos:browserify@0.5.0'], 'client');
  //api.use('orionjs:namespace@1.4.0');
  api.use('orionjs:core@1.4.0');

  // Dependecies used in this package
  //api.imply('orionjs:namespace');
  api.imply('orionjs:core');

  // Exported files
  api.addFiles('logging_client.browserify.js', 'client');
  api.addFiles('logging_server.js', 'server');
  api.addFiles('logging_both.js');

  // Exported variables
  api.export(['orion', 'bunyan']);
  api.export(['process', 'WritableStream', 'inherits', 'logStyle'], 'client');
  api.export('bunyanFormat', 'server');
});
