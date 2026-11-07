import type { NextConfig } from 'next';
import withStylexTurbopack from '@stylexswc/nextjs-plugin/turbopack';

const nextConfig: NextConfig = {
	/* config options here */
	reactCompiler: true,
	output: 'export'
};

export default withStylexTurbopack({
	rsOptions: {
		dev: process.env.NODE_ENV == 'development'
	}
})(nextConfig);
