module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:vue/vue3-recommended", // 使用插件支持vue3
    "plugin:vue/vue3-essential",
    "plugin:@typescript-eslint/recommended",
    "eslint-config-prettier",
    //1.继承.prettierrc.js文件规则  2.开启rules的 "prettier/prettier": "error"  3.eslint fix的同时执行prettier格式化
    "plugin:prettier/recommended",
  ],
  //全局变量
  globals: {
    chrome: true,
  },
  overrides: [],
  // parser: "@typescript-eslint/parser",
  parser: "vue-eslint-parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    parser: "@typescript-eslint/parser",
  },
  plugins: ["vue", "@typescript-eslint"],
  rules: { "vue/multi-word-component-names": 0 },
};
