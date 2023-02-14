# 按需打包

打包cjs(CommonJS)和esm(ESModule)两种形式,cjs模式主要用于服务端引用(ssr),而esm就是我们现在经常使用的方式，它本身自带treeShaking而不需要额外配置按需引入(前提是你将模块分别导出)