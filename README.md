# vue-e2e-test-with-karma

## desc

test vue e2e with karma

note: you can also test your project with [Vue CLI 3](https://cli.vuejs.org/)

## some deps for test

- webpack4
- vue2
- babel7
- mocha6
- karma4


## some config

`karma.config.js`

01.tell karma which file to  test ([karma.config.js](/test.e2e//karma.config.js#L9-#L11))

02.tell karma to process test files with karma-webpack and karma-sourcemap-loader ([karma.config.js](/test.e2e//karma.config.js#L13-#L15))

03.tell karma to use mocha framework with karma-mocha ([karma.config.js](./test/e2e/karma.config.js#L5-#L7))

04.tell karma to use spec reporter likes mocha spec reporter with karma-spec-reporter ([karma.config.js](./test/e2e/karma.config.js#L19))

05.tell karma to use Istanbul  with karma-coverage ([karma.config.js](./test/e2e/karma.config.js#L19-L26))

06.tell karma to test in browser chrome with karma-chrome-launcher ([karma.config.js](./test/e2e/karma.config.js#L31))

07.tell karma to use chai with karma-chai ([karma.config.js](/test.e2e//karma.config.js#L7))

note: if use mocha , remember to install mocha lib . if you use chai,remember to install chai lib .


## some command
```sh
# install dependencies
npm install
#install tes deps (esstional)
#npm run install:tes
#npm run install:tes:e2e
#install dev deps (optional)
#npm run install:dev
#install pro deps (optional)
#npm run install:pro

# run build for dev
npm run dev

# run build for pro
#npm run build
npm run build:pro

#run test
npm run test
#run test for e2e
npm run test:e2e
npm run test:tes:with-ci
```

## get more

For detailed explanation on how he work, consult the docs [vuejs.vue-template-compiler.github](https://github.com/vuejs/vue/tree/dev/packages/vue-template-compiler)

For detailed explanation on how he work, consult the docs  [vuejs.vue-style-loader.github](https://github.com/vuejs/vue-style-loader)

For detailed explanation on how he work, consult the docs  [webpack-contrib.css-loader.github](https://github.com/webpack-contrib/css-loader)

For detailed explanation on how he work, consult the docs [zinserjan.mocha-webpack.github](https://github.com/zinserjan/mocha-webpack)

[webpack-contrib.karma-webpack.github](https://github.com/webpack-contrib/karma-webpack)

For detailed explanation on how he work, consult the docs [karma-runner.karma-mocha.github](https://github.com/karma-runner/karma-mocha)

For detailed explanation on how he work, consult the docs [xdissent.karma-chai.github](https://github.com/xdissent/karma-chai)

[mlex.karma-spec-reporter.github](https://github.com/mlex/karma-spec-reporter)

For detailed explanation on how he work, consult the docs [karma-runner.karma-coverage.github](https://github.com/karma-runner/karma-coverage)

For detailed explanation on how he work, consult the docs [karma-runner.karma-chrome-launcher.github](https://github.com/karma-runner/karma-chrome-launcher)

For detailed explanation on how he work, consult the docs [vuejs.vue-test-utils.github](https://github.com/vuejs/vue-test-utils)

For detailed explanation on how he work, consult the docs [vuejs.eslint-plugin-vue.github](https://github.com/vuejs/eslint-plugin-vue)

## author

yemiancheng <ymc-github@gmail.com>

## contributor

Evan You <yyx990803@gmail.com>

## License

MIT