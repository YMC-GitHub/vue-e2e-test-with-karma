let webpackConfig = require('./webpack.config.js')
const path = require('path')

let useIE =false;
// 哪些框架
let frameworks = [];
frameworks.push('mocha');

// 哪些文件
let files = [];
files.push('e2e/**/*.spec.js');

// 预处理器
let preprocessors = {};
preprocessors['e2e/**/*.spec.js']=['webpack', 'sourcemap']

// 报告格式
let reporters = [];
reporters.push('spec', 'coverage');
let coverageReporter = {
  dir: './coverage',
  reporters: [
    { type: 'lcov', subdir: '.' },
    { type: 'text-summary' }
  ]
}

// 何浏览器
let browsers = [];
let customLaunchers = {};
browsers.push('Chrome');
/*
browsers.push('Chrome_without_security');
customLaunchers['Chrome_without_security']= {
  base: 'Chrome',
  flags: ['--disable-web-security', '--disable-site-isolation-trials']
}
browsers.push('CustomChrome');
customLaunchers['CustomChrome']= {
  base: 'Chrome',
  flags: ['--disable-web-security', '--disable-site-isolation-trials'],
  chromeDataDir: path.resolve(__dirname, '.chrome'),
};
*/

if(useIE){
  browsers.push('IE','IE9','IE8','IE_no_addons');
  Object.assign(customLaunchers,{IE9: {
    base: 'IE',
    'x-ua-compatible': 'IE=EmulateIE9'
  },
  IE8: {
    base: 'IE',
    'x-ua-compatible': 'IE=EmulateIE8'
  },
  IE_no_addons: {
    base:  'IE',
    flags: ['-extoff']
  }})

}


module.exports = function(config) {
  config.set({
    // 哪些框架
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks,

    // 哪些文件
    files,
    //basePath: '',
    //exclude: [],

    // 预处理器
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors,
    webpack: webpackConfig,

    // 报告格式
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters,
    coverageReporter,

    // 何浏览器
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers,
    // you can define custom flags
    customLaunchers,

    port: 9898,

    // 集成模式
    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // 并发控制
    // how many browser should be started simultaneous
    concurrency: Infinity,

    // 监控模式
    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // 记录类型
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,
  })
}
