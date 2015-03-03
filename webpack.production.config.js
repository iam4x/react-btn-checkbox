var webpack = require('webpack');

module.exports = {
  entry: './src/index',
  output: {
    libraryTarget: 'umd',
    library: 'ReactBtn'
  },
  module: {
    loaders: [
      {test: /\.js/, loaders: ['babel'], exclude: /node_modules/}
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  externals: [
    {
      'react': {
        root: 'React',
        commonjs2: 'react',
        commonjs: 'react',
        amd: 'react'
      }
    },
    {
      'react/addons': {
        root: 'React',
        commonjs2: 'react',
        commonjs: 'react',
        amd: 'react'
      }
    }
  ],
  node: {
    Buffer: false
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ]
};
