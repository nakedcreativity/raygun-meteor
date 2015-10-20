Package.describe({
  name: 'raygun',
  version: '0.0.1',
  summary: 'Wrapper for Raygun NPM package',
  git: '',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.2');
  api.addFiles('raygun.js', 'server');
  api.export('Raygun', 'server');
});

Npm.depends({
  'raygun': '0.7.1'
});

// Package.onTest(function(api) {
//   api.use('ecmascript');
//   api.use('tinytest');
//   api.use('raygun');
//   api.addFiles('raygun-tests.js');
// });
