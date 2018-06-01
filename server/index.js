// CSS styles will be imported on load and that complicates matters... ignore those bad boys!
require('ignore-styles');

// Set up babel to do its thing... env for the latest toys, react-app for CRA
// Notice three plugins: the first two allow us to use import rather than require, the third is for code splitting
require('babel-register')({
  ignore: /\/(build|node_modules)\//,
  presets: ['env', 'react-app'],
  plugins: [
    'syntax-dynamic-import',
    'dynamic-import-node',
    'react-loadable/babel'
  ]
});

// Now that the nonsense is over... load up the server entry point
require('./server');
