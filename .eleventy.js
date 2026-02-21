module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("favicon.ico");

  return {
    dir: { input: ".", includes: "_includes", output: "_site" },
    pathPrefix: "/gh-repo/"  // <-- your GitHub repo name
  };
};