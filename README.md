fis3工程化
=========

## 功能合集
- [x] 自定义不被编译的文件
- [x] 模块打包 commonjs
- [x] 自动生成雪碧图
- [x] less编译
- [x] js/css/图片压缩
- [x] 指定文件添加时间戳
- [x] 可给发布版本添加实现路径

## 使用
````
    开发调用：
    npm run start 启动服务器
    npm run dev 编译文件

    发布调用：
    npm run build

    关闭服务器：
    npm run stop
````

## 目录说明
    ├── dist 发布的目录
    ├── src 开发的目录
    │   ├── css 可以放css文件，也可以放less文件，会自动编译为css
    │       ├── commons 基础的框架css 
    │       ├── plugins 插件（包括开源插件、自由插件）
    │       ├── pages 页面的css(可省略，可以直接将这一段css内嵌去html)
    │   ├── modules js模块化文件
    │       ├── util.js 模块util
    │   ├── scripts js文件
    │       ├── commons 基础的框架js 如jquery/zepto/vue等
    │       ├── plugins 插件（包括开源插件、自由插件）
    │       ├── pages 页面的js(可省略，可以直接将这一段js内嵌去html)
    │   ├── widget 所有widget目录
    │       ├── widget01 某一个widget目录
    │           ├── images 图片 widget01图片目录
    │           ├── widget01.js widget01的css
    │           ├── widget01.css widget01的js
    │           ├── widget01.html widget01的html
    ├── fis-conf.js 配置文件
    ├── index.html 首页
    ├── user.html 用户中心

## 相关
1. 样式文件：less
2. 模板引擎：jsrender
3. js操作：
````
    1. 内嵌js __inline(a.js) 不能设置为isMod:true
        Math对象名必须与util.js内的一致
        __inline('util.js');
        console.log(Math);
        
    2. 模块引入module.export = {}; require(); 新引入的均为一个新的请求
        可自定义方法名，但util.js文件要module.export={]导出
        var mathCommonjs = require('../../modules/util');
        console.log(mathCommonjs)
        console.log("hello index" + mathCommonjs.area(2, 8))
````

## 问题集锦
1. ~~使用fis3 release发布时，若设置了fis.set('project.files', ['src/**']);则使用fis.hook()会报错~~ 莫名其妙地就不报错了，哈哈
2. ~~发布时，将所有图片放置images/**下~~ 分批次，匹配项目图片
3. 接口请求转发
4. ~~样式分类放 打包放在css/文件下~~
5. 打包的时候不需要src/文件 处理不了，暂时不支持配置不发布已内嵌文件
6. ~~html页面挪动到src文件下~~ 已处理
7. ~~fis3有没有动态配置内容的插件？~~ 新增jsrender
8. 支持es6