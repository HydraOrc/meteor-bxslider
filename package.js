Package.describe({
  summary: "Velocity.js oriented bxSlider-4.2.5, Responsive jQuery content slider. Based on rexzh0u:bxslider@4.2.3, percolate:velocityjs@1.2.1_1 and stevenwanderski/bxslider-4@4.2.5",
  version: "4.2.5_1",
  git: "https://github.com/HydraOrc/meteor-bxslider.git",
  name: "hydraorc:bxslider"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@1.0');
  api.use('jquery');
  api.addFiles('lib/bxslider-4/dist/jquery.bxslider.min.js', 'client');
  api.addFiles('lib/bxslider-4/dist/jquery.bxslider.css', 'client');
  api.addFiles('lib/bxslider-4/dist/images/bx_loader.gif', 'client');
  api.addFiles('lib/bxslider-4/dist/images/controls.png', 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('jquery');
  api.use('rexzh0u:bxslider');
  api.addFiles('rexzh0u:bxslider-tests.js', 'client');
});
