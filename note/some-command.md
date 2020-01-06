


`构建代码`
```
# 开发时
npm run build:dev

# 产品时
npm run build:pro

# 测试时
npm run build:tes
```

`查看依赖`
```
#已经安装的
#2 查看所有
npm list --depth=0
#2 查看某包
npm list babel-loader

#note 编码风格
我不喜欢简写命令————毕竟编码是写给人读的；毕竟任务是可以自动化的。

#需要更新的
npm outdated

npm install --save-dev babel-loader
```

`安装依赖`
```
npm install --save-dev @babel/core @babel/plugin-transform-runtime @babel/preset-env @babel/runtime

npm install --save-dev css-loader
npm install --save-dev babel-loader

npm install --save-dev vue-loader vue-style-loader vue-template-compiler

npm install --save-dev mocha
npm install --save-dev @babel/register
```

`更新依赖`
```
npm uninstall --save-dev file-loader karma-chrome-launcher karma-coverage karma-webpack
npm install --save-dev file-loader karma-chrome-launcher karma-coverage karma-webpack
```

git add src e2e package.json
git commit --message "build(*): initing project structor"
