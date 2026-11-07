const postcssConfig = {
	plugins: {
		'@stylexswc/postcss-plugin': {
			include: ['src/**/*.{js,jsx,mjs,cjs,ts,tsx,mts,cts}']
		}
	}
};

export default postcssConfig;
