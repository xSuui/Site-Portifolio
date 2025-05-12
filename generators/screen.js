/* eslint-disable @typescript-eslint/no-require-imports */
const { generateFiles } = require("./createFile.cjs");

generateFiles({
  componentTemplate: "templates/screen/index.tsx.hbs",
  styleTemplate: "templates/screen/styles.module.css.hbs",
  filePath: "../src/screens/",
});
