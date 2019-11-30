const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const minifyOptions = {
  html5: true,
  collapseWhitespace: true,
  minifyCSS: true,
  minifyJS: true,
  minifyURLs: false,
  removeAttributeQuotes: true,
  removeComments: true,
  removeEmptyAttributes: true,
  removeOptionalTags: true,
  removeRedundantAttributes: true,
  removeScriptTypeAttributes: true,
  removeStyleLinkTypeAttributese: true,
  useShortDoctype: true
};

const title = 'Edinei Cavalcanti';

const HtmlWebpackPluginConfigIndex = new HtmlWebpackPlugin({
  template: path.join(__dirname, 'src/index.html'),
  filename: 'index.html',
  minify: minifyOptions,
  title,
  keywords: `neiesc,Edinei,developer,desenvolvedor,programador,programmer,
  dotnet,dotnetcore,csharp,nodejs,python`,
  description: `Olá sou Edinei aka neiesc.
  Começei profissionalmente em 2010 minha carreira, sólido conhecimente em TI,
  mais especificamente em desenvolvimento de software em C#, .NET, .NET Core, Node.js e Python
  com experiência em grandes aplicações.`,
  author: 'Edinei aka neiesc'
});

const HtmlWebpackPluginConfigPalestras = new HtmlWebpackPlugin({
  template: path.join(__dirname, 'src/palestras/index.html'),
  filename: 'palestras/index.html',
  minify: minifyOptions,
  title: `Palestras - ${title}`,
  keywords: 'palestras,eventos,workshop',
  description:
    'Lista das palestras (Palestra, Eventos ou Workshop) que palestrei.',
  author: 'Edinei aka neiesc'
});

const HtmlWebpackPluginConfigPodcasts = new HtmlWebpackPlugin({
  template: path.join(__dirname, 'src/podcasts/index.html'),
  filename: 'podcasts/index.html',
  minify: minifyOptions,
  title: `Podcasts - ${title}`,
  keywords: 'podcasts,podcast',
  description: 'Lista dos podcasts que eu constumo escutar.',
  author: 'Edinei aka neiesc'
});

module.exports = {
  entry: ['babel-polyfill', './src/assets/js/app.js'],
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../'
            }
          },
          'css-loader'
        ]
      },
      {
        test: /\.js$/,
        enforce: 'pre',
        exclude: /(node_modules|public|scripts)/,
        use: ['babel-loader']
      }
    ]
  },
  plugins: [
    HtmlWebpackPluginConfigIndex,
    HtmlWebpackPluginConfigPalestras,
    HtmlWebpackPluginConfigPodcasts,
    new CopyWebpackPlugin([
      { from: path.join(__dirname, '.gitignore') },
      { from: path.join(__dirname, 'CNAME') },
      { from: path.join(__dirname, 'src/assets/js/particles.json') },
      { from: path.join(__dirname, 'src/assets/js/podcasts.json') },
      { from: path.join(__dirname, '*.png') },
      { from: path.join(__dirname, 'browserconfig.xml') },
      { from: path.join(__dirname, 'favicon.ico') },
      { from: path.join(__dirname, 'safari-pinned-tab.svg') },
      { from: path.join(__dirname, 'site.webmanifest') }
    ]),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    })
  ]
};
