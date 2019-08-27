# Testing Single-File Components with Karma

#### what ?

01.Karma is a test runner

02.it launches browsers

03.it runs tests

04.and reports them back to us.

#### why ?


#### how ?

`setting up Mocha`
```md
# install mocha
npm install --save-dev mocha
# config mocha

# run mocha
"test": "mocha"
```

npm install --save-dev @vue/test-utils karma karma-chrome-launcher karma-mocha karma-sourcemap-loader karma-spec-reporter karma-webpack mocha

`setting up Karma`
```md
# install solft
npm install --save-dev karma
#2 let karma runs in chrome
npm install --save-dev karma-chrome-launcher
#2 let karma use mocha
npm install --save-dev karma-mocha
#2 let karma use webpack
npm install --save-dev karma-webpack karma-sourcemap-loader
#2 let karma use chai
npm install --save-dev karma-chai
#2 let karma use coverage
npm install --save-dev karma-coverage cross-env babel-plugin-istanbul

# config solft
#2 let karma use mocha
frameworks: ['mocha'],
reporters: ['spec'],
#2 let karma runs in chrome
browsers: ['Chrome']
#2 let karma use webpack
webpack: webpackConfig,
files: ['test/**/*.spec.js'],
preprocessors: {
'**/*.spec.js': ['webpack', 'sourcemap']
},

#2 let karma use coverage
  "env": {
    "test": {
      "plugins": ["istanbul"]
    }
  }
    reporters: ['spec', 'coverage'],

    coverageReporter: {
      dir: './coverage',
      reporters: [
        { type: 'lcov', subdir: '.' },
        { type: 'text-summary' }
      ]
    },


# run solft
"test": "karma start --single-run"
```

`setting up babel`

```md
# install solft
npm install --save-dev @babel/core @babel/preset-env @babel/runtime @babel/plugin-transform-runtime
#2 let webpack use babel

# config solft

# run soflt
#2 here i use babel using webpack
```

`setting up webpack`

```md
# install solft
npm install --save-dev webpack webpack-cli webpack-dev-server
#2 let webpack use babel
npm install --save-dev babel-loader
#2 let webpack use css
npm install --save-dev css-loader
#2 let webpack use file
npm install --save-dev file-loader
#2 let webpack use vuejs
npm install --save-dev vue-loader vue-template-compiler vue-style-loader

# config solft

```
