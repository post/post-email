module.exports = {
  options: {
    from: undefined
  },
  plugins: [
    require('postcss-devtools')(),
    require('postcss-easy-import')({
      root: 'src/assets/styles',
      prefix: '_',
      extensions: '.css'
    }).plugins[0],
    require('postcss-each')(),
    require('postcss-at-rules-variables')(),
    require('postcss-css-variables')(),
    require('postcss-for')(),
    require('postcss-conditionals')(),
    require('postcss-nested')(),
    require('postcss-calc')(),
    require('postcss-discard-comments')()
  ]
}

