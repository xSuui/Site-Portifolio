/* eslint-disable @typescript-eslint/no-require-imports */
const { generateFiles } = require("./createFile.cjs");

generateFiles({
  componentTemplate: "templates/components/index.tsx.hbs",
  styleTemplate: "templates/components/styles.module.css.hbs",
  filePath: "../src/components/",
});
