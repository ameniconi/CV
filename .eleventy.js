module.exports = function (eleventyConfig) {
  // Passthrough copies
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("favicon.ico");
  eleventyConfig.addPassthroughCopy("CNAME");
  eleventyConfig.addCollection("sitemap", collection => collection.getAll());

  return {
    dir: {
      input: ".",
      includes: "_includes",
      output: "_site"
    },
    pathPrefix: "/gh-pages" // ← your repo name
  };
};
