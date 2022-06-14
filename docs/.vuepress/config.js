const { defaultTheme } = require("vuepress");

module.exports = {
  title: "Hello VuePress",
  description: "Just playing around",
  theme: defaultTheme({
    sidebar: [
      {
        text: "Components",
        collapsable: false,
        children: ["/components/input-text.md"],
      },
    ],
  }),
};
