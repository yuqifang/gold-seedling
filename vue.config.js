module.exports = {
    configureWebpack: {
        resolve: { extensions: [".ts", ".tsx", ".js", ".json"] },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    loader: 'ts-loader',
                    exclude: /node_modules/,
                    options: {
                    appendTsSuffixTo: [/\.vue$/],
                    }
                }
            ]
        }
    },
    publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
    pages: {
        newsBoard: {
            // 应用入口配置，相当于单页面应用的main.js，必填项
            entry: 'src/pages/newsBoard/newsBoard.js',

            // 应用的模版，相当于单页面应用的public/index.html
            template: 'public/newsBoard.html',

            // 编译后在dist目录的输出文件名，可选项，省略时默认与模块名一致
            filename: 'newsBoard.html',

            // 标题，可选项，一般情况不使用，通常是在路由切换时设置title
            // 需要注意的是，当使用title属性时，template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
            title: '资讯看板',

            // 包含的模块，可选项
            chunks: ['chunk-vendors', 'chunk-common', 'newsBoard']
        },
        client: {
            entry: 'src/pages/client/client.js',
            template: 'public/client.html',
            filename: 'client.html',
            title: '客户页面',
            chunks: ['chunk-vendors', 'chunk-common', 'client']
        },
    },
    devServer: {
        open: true,
        index: '/newsBoard.html', // 默认打开资讯看板页面
        host: 'localhost',
        port: 8080,
        https: false,
        hotOnly: false,
        // publicPath: './',
        proxy: {
            '/api': {
                ws: false, // proxy websockets
                target: 'http://10.31.23.165:9527',
                changeOrigin: true, // 允许跨域
                pathRewrite: {
                    '^/api': '' // 真正访问的时候去掉/api
                }
            }
        }
    }
}