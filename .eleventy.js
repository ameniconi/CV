module.exports = function (eleventyConfig) {
  // Passthrough copies
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("favicon.ico");
  eleventyConfig.addPassthroughCopy("CNAME");

  return {
    dir: {
      input: ".",
      includes: "_includes",
      output: "_site"
    },
    pathPrefix: "/gh-pages" // ← your repo name
  };
};
