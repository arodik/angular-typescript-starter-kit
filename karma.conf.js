// Karma configuration
// Generated on Tue Nov 24 2015 13:53:36 GMT+0200 (EET)

module.exports = function (config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],

    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-webpack'),
      require('karma-sourcemap-loader'),
    ],

    // list of files / patterns to load in the browser
    files: [
      './app/unit/spec.loader.ts'
    ],

    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      './app/unit/spec.loader.ts': [
        'webpack',
        'sourcemap'
      ]
    },

    webpack: {
      devtool: 'source-map',
      resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
      },
      module: {
        loaders: [
          { test: /\.ts$/, loader: 'ts', exclude: /node_modules/ },
          { test: /\.html$/, loader: 'raw' }
        ]
      },
      stats: { colors: true, reasons: true },
      debug: false
    },

    webpackServer: {
      noInfo: true // prevent console spamming when running in Karma!
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultanous
    concurrency: Infinity
  })
}