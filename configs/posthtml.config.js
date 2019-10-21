const postcssConfig = require('./postcss.config');
module.exports = {
  input: 'src/templates/pages/*.html',
  output: 'dist',
  plugins: [
    require('posthtml-extend')({
      encoding: 'utf8',
      root: 'src/templates'
    }),
    require('posthtml-include')({
      encoding: 'utf8',
      root: 'src/templates'
    }),
    require('posthtml-modules')({
      'root': 'src/templates'
    }),
    require('posthtml-inline-assets')({
      cwd: './src/assets/',
      errors: 'warn'
    }),
    require('posthtml-postcss')(postcssConfig.plugins, postcssConfig.options),
    require('posthtml-inline-css')(),
    require('posthtml-remove-tags')({
      tags: ['style']
    }),
    require('posthtml-remove-attributes')(['class']),
    require('posthtml-beautify')()
  ]
}