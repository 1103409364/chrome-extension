/**
 * @description stylelint
 */
module.exports = {
	extends: [
		"stylelint-config-standard-scss",
		"stylelint-config-recommended-vue",
		"stylelint-config-recess-order",
		"stylelint-config-prettier",
	],
	customSyntax: "postcss-html",
	overrides: [
		{
			files: ["**/*.{scss,css,sass}"], // css 相关文件由 postcss-scss 处理
			customSyntax: "postcss-scss",
		},
	],
	rules: {
		"color-function-notation": "legacy", // rgb 函数 modern 模式报错
		// 以下规则为升级 stylelint 到 14 版本后添加
		// 允许选择器带浏览器前缀，如 -moz-
		"selector-no-vendor-prefix": null,
		// 类名命名规则
		// 'selector-class-pattern': null,
		// 禁用变量命名规则
		"scss/dollar-variable-pattern": null,
		// mixin 命名规则
		"scss/at-mixin-pattern": null,
		// 这个规则会提示将 map-get 改为 map.get，但是当前版本 scss 不支持，先禁用
		"scss/no-global-function-names": null,
		// 允许在 @extend 后面使用 .类名
		"scss/at-extend-no-missing-placeholder": null,
		// 允许 import scss 文件的时候带后缀名，方便点击跳转
		"scss/at-import-partial-extension": null,
	},
};
