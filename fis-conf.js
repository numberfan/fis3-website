//M端项目配置
//测试包 执行 fis3 release test
var TSET_OUTPUT_PATH = './test';    //测试包路径（静态资源为相对路径）

//正式包 执行 fis3 release dist
var FORMAL_OUTPUT_PATH = './dist';  //正式包路径（静态资源为线上路径）
var STATIC_PATH = 'http://cq.qq.com';   //静态资源站点

//常规设置
fis.set('project.files', ['src/**', '**.html']);
fis.set('project.ignore', ['fis-conf.js', '.*', '*.md', 'node_modules/**', '*.json', 'test/**', 'dist/**']);
fis.set('project.charset', 'utf8');


fis.hook('relative') //支持相对路径

    //common.js模块打包
    .hook('commonjs', {
        baseUrl: './src/',
        extList: ['.js', '.es']
    })

    //模块打包
    .match('**', {
        postpackager: [
            fis.plugin('loader', {
                resourceType: 'commonJs',
                useInlineMap: true //资源映射表内嵌
            })
        ]
    })

    .match('::package', {
        //雪碧图
        spriter: fis.plugin('csssprites',{
            layout: 'matrix',
            margin: '0'
        }),

        //打包后处理插件
        postpackager: fis.plugin('loader'),
    })

    //编译less
    .match('**/*.less', {
        rExt: '.css',
        parser: fis.plugin('less')
    })

    //components 文件为模块化
    .match('/src/components/**', {
        isMod: true
    })

    //模块化
    .match('/src/modules/**', {
        isMod: true,
    })

    //不发布_mixin.less等类似文件
    .match(/^\/src\/css\/_.*\.(css|less)/i,{
        release : false
    })

    //js压缩
    .match('**.js', {
        optimizer: fis.plugin('uglify-js')
    })
    .match('**.html:js', {
        optimizer: fis.plugin('uglify-js')
    })

    //图片压缩
    .match('*.png', {
        optimizer: fis.plugin('png-compressor')
    })

    //css less压缩
    .match('*.{css,less}',{
        useSprite : true,
        optimizer: fis.plugin('clean-css')
    })

    .match('**html:css',{
        optimizer: fis.plugin('clean-css')
    })

    //widget
    .match('/src/widget/(**.{css, less})', {
        rExt: '.css'
    });

//配置测试包
fis.media('test')
    .match('**', {
        relative: true
    })

    //指定雪碧图的位置
    .match('/src/css/(**.png)', {
        release: 'src/images/$1'
    })
    .match('**', {
        deploy: [
            //过滤掉已被打包的文件
            fis.plugin('skip-packed'),
            fis.plugin('local-deliver', {
                to: TSET_OUTPUT_PATH
            })
        ]
    });

fis.set('new date', Date.now());

//配置正式包
fis.media('dist')
    .match('::package', {
        //打包插件(文件按指定顺序打包)
        packager: fis.plugin('map', {
            '/js/vendor.js': [
                '/src/scripts/commons/mod.js',
            ],
            '/js/plugins.js': [

            ],
            '/css/vendor.css': [

            ],
            '/css/plugin.css': [

            ]
        }),

        //打包后处理插件
        postpackager: fis.plugin('loader'),
    })

    //文件打包到css/*.css位置
    .match('/src/css/(**.{css, less})', {
        release: 'css/$1',
        useSprite : true,
    })
    .match(/^\/src\/css\/_.*\.(css|less)/i,{
        release : false
    })

    //文件打包到images/*.png位置
    /*.match('/src/images/(**.{png, jpg, gif})', {
        release: 'images/$1',
    })

    .match('/src/css/(**.{png, jpg, gif})', {
        release: 'images/$1'
    })

    .match('/src/widget/(**.{png, jpg, gif})', {
        release: 'images/$1'
    })*/

    .match('**/images/(**.{png, jpg, gif})', {
        release: 'images/$1',
    })
    .match('**/commons/(**.{png, jpg, gif})', {
        release: 'images/$1',
    })

    //指定文件添加时间戳
    .match('commons.js', {
        query: '?t=' + fis.get('new date')
    })

    //设置静态资源路径
    .match('**.{js, css, less, png, jpg, gif}', {
        domain: STATIC_PATH
    })

    .match('**', {
        deploy: [
            //过滤掉已被打包的文件
            fis.plugin('skip-packed'),
            fis.plugin('local-deliver', {
                to: FORMAL_OUTPUT_PATH
            })
        ]
    })
