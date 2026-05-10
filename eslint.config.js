// eslint.config.js
module.exports = [
	{
		rules: {
			'no-cond-assign': [
				'error',
				'always'
			],

			indent: [
				'error',
				'tab',
				{
					SwitchCase: 1
				}
			],

			'linebreak-style': [
				'error',
				'unix'
			],

			quotes: [
				'error',
				'double'
			],

			'no-unused-vars': 'warn',

			semi: [
				'error',
				'always'
			],

			brace-style: [
				'error',
				'1tbs'
			]
		}
	}
];
