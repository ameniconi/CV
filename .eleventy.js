module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("favicon.ico");

  return {
    dir: { input: ".", includes: "_includes", output: "_site" },
    pathPrefix: "/gh-pages"  // <-- replace with your GitHub repo name
  };
};

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/CNAME");
};

module.exports = function (eleventyConfig) {
  return {
    dir: {
      input: "src",
      output: "_site"
    }
  };
};
