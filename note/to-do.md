#### 目录结构
build(*): initing project structor

  uses npm to manage project
  uses git to manage project

#### 搭建环境
build(*): using coverage,istanbul

build(*): using babel

    "@babel/core": "^7.5.5",
    "@babel/preset-env": "^7.5.5",
    "@babel/runtime": "^7.5.5",
    "@babel/plugin-transform-runtime": "^7.5.5",

build(*): leting webpack uses babel

    "babel-loader": "^8.0.6",

build(*): using webpack

    "webpack": "^4.39.1",
    "webpack-cli": "^3.3.6",
    "webpack-dev-server": "^3.8.0"
    "compression-webpack-plugin": "^1.1.12",
    "uglifyjs-webpack-plugin": "^1.3.0",

build(*): leting webpack uses css

    "css-loader": "^3.2.0",
    "file-loader": "^1.1.4",
    "autoprefixer": "^8.6.5",

build(*): leting webpack uses vue

    "vue-loader": "^14.2.4",
    "vue-style-loader": "^4.1.2",
    "vue-template-compiler": "^2.6.10",

build(*): using mocha

    "mocha": "^6.2.0",


build(*): using chai

    "chai": "^4.1.2",

build(*): using  karma
    "karma": "^4.2.0",

build(*): leting karma uses chai

    "karma-chai": "^0.1.0",

build(*): leting karma uses coverage

    "karma-coverage": "^1.1.1",

build(*): leting karma uses chrome

    "karma-chrome-launcher": "^2.2.0",

build(*): leting karma uses mocha

    "karma-mocha": "^1.3.0",
    "karma-spec-reporter": "0.0.32",

build(*): leting karma uses webpack

    "karma-sourcemap-loader": "^0.3.7",
    "karma-webpack": "^2.0.9",

build(*): leting test in travis ci


#### 更新环境

build(vue): updating vue-loader

  updates from 14 to 15
