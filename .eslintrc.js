module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	plugins: [
		'@typescript-eslint', //https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/docs/rules
		'prettier', //https://github.com/prettier/eslint-plugin-prettier
		'unicorn', // https://github.com/sindresorhus/eslint-plugin-unicorn/tree/main/docs/rules
		'ava', // https://github.com/avajs/eslint-plugin-ava/tree/main/docs/rules
	],
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:unicorn/recommended',
	],
};
