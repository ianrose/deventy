module.exports = function(eleventyConfig) {

  // Copy images into the static site
  eleventyConfig.addPassthroughCopy('src/images')

  return {
    dir: { input: 'src', output: 'dist' },
    passthroughFileCopy: true,
    templateFormats: ['njk', 'md', 'css', 'html', 'yml'],
    htmlTemplateEngine: 'njk'
  }
}
