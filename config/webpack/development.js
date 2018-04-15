process.env.NODE_ENV = process.env.NODE_ENV || 'development'

const environment = require('./environment')

// const cssLoaders = environment.loaders.get('css');
// const loader = cssLoaders.use.find(x => x.loader === 'css-loader');
// loader.options.modules = true;

module.exports = environment.toWebpackConfig()
