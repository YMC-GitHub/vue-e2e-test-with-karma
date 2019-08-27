# vue-test-utils-karma-example

> A Vue.js project


#### 一些命令
```md
# 开发
npm run build:dev

# 测试
#2 端到端测
npm run build:tes
npm run test:e2e

# 产品
npm run build:pro

```

#### 入口文件
```
::<<eof
开发时的脚本入口文件为：./src/main.js
产品时的脚本入口文件为：./src/main.js
eof
```

#### 出口文件
```
::<<eof
开发时的脚本出口文件为：./dist/build.js
产品时的脚本出口文件为：./dist/build.js
eof
```

#### 加载样式

对以.css结尾的样式文件先用css-loader加载（` interprets @import and url() like import/require()`），再用vue-style-loader加载（不用style-loader，或者说用它替换style-loader）

#### 加载脚本

对以.js结尾的脚本文件用babel-loader加载之后交给babel处理。

#### 加载组件

01.对以.vue为后缀的文件，使用vue-loader加载器加载，并经过下面的一些处理之后，最后用babel-loader加载之后交给babel处理。

02.对.vue文件中的template：用vue-template-compiler类库进行编译处理；

03.对.vue文件中的style：

如果是css写法，先用css-loader加载（` interprets @import and url() like import/require()`），再用vue-style-loader加载（不用style-loader，或者说用它替换style-loader）；
如果是less写法，先用less-loader加载器加载交给less类库处理成css，再使用postcss-loader加载交给postcss处理,最后作为css文件处理。

04.对.vue文件中的script：
使用babel-loader加载之后交给babel处理。



#### 端到端测(e2e)

使用karma类库进行集成测试。

01.通过karma-webpack实现让karma运行webpack。并使用karma-sourcemap-loader实现源码追踪。

02.通过karma-mocha(Adapter for the Mocha testing framework)实现让karma运行mocha。

03.通过karma-chai实现让karma运行chai。

04.通过karma-spec-reporter使用类似于mocha的spec报告格式。

05.通过karma-coverage使用Istanbul测覆盖率。覆盖率报告文件存放在工程根目录的`coverage`目录。

06.通过karma-chrome-launcher实现在chrome浏览器中进行测试。

用mocha这个测试框架，用chai这个断言库，对`e2e/**/*.spec.js`这些文件进行测试。
对于`e2e/**/*.spec.js`这些文件先用webpack进行处理（加载样式，加载脚本，加载组件）。

#### 建服务器

`较简单的` 使用webpack-dev-server实现。此处通过向命令行设置一些相应的选项实现。


#### 参考文献

[vuejs.vue-template-compiler.github](https://github.com/vuejs/vue/tree/dev/packages/vue-template-compiler)

[vuejs.vue-style-loader.github](https://github.com/vuejs/vue-style-loader)

[webpack-contrib.css-loader.github](https://github.com/webpack-contrib/css-loader)

[zinserjan.mocha-webpack.github](https://github.com/zinserjan/mocha-webpack)

[webpack-contrib.karma-webpack.github](https://github.com/webpack-contrib/karma-webpack)

[karma-runner.karma-mocha.github](https://github.com/karma-runner/karma-mocha)

[xdissent.karma-chai.github](https://github.com/xdissent/karma-chai)

[mlex.karma-spec-reporter.github](https://github.com/mlex/karma-spec-reporter)

[karma-runner.karma-coverage.github](https://github.com/karma-runner/karma-coverage)

[karma-runner.karma-chrome-launcher.github](https://github.com/karma-runner/karma-chrome-launcher)

[vuejs.vue-test-utils.github](https://github.com/vuejs/vue-test-utils)

[vuejs.eslint-plugin-vue.github](https://github.com/vuejs/eslint-plugin-vue)