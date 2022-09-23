module.exports = {
    browsers: "chrome",
    src: "ECommerceTests/Tests/",
    skipJsErrors: true,
    hooks: {
      test: {
        before: async (t) => {
          await t.maximizeWindow();
        },
      },
    },
  };
  