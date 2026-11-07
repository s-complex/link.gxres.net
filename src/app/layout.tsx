import type { Metadata } from 'next';
import './globals.css';
import './stylex.css';
import { create, props } from '@stylexjs/stylex';

const rootLayoutStyles = create({
	rootContainer: {
		marginInline: 'auto',
		padding: '1rem',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		position: 'relative',
		minHeight: '100svh',
		maxWidth: '42rem'
	},
	footerContainer: {
		textAlign: 'center',
		position: 'absolute',
		bottom: '1rem'
	}
});

export const metadata: Metadata = {
	title: 'Hyperlink Redirect - Sliver Complex',
	description: 'Hyperlink Redirect by Sliver Complex.',
	icons: {
		icon: 'https://library.gxres.net/images/icons/favicon.ico',
		apple: 'https://library.gxres.net/images/icons/big-favicon.webp'
	},
	alternates: {
		canonical: '/'
	}
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
	return (
		<html lang="zh-CN">
			<body {...props(rootLayoutStyles.rootContainer)}>
				{children}
				<footer {...props(rootLayoutStyles.footerContainer)}>
					<p>
						© {new Date().getFullYear()}{' '}
						<a href="https://github.com/s-complex" target="_blank" rel="noopener noreferrer">
							Sliver Complex
						</a>
						. Powered by{' '}
						<a href="https://nextjs.org" target="_blank" rel="noopener noreferrer">
							Next.js
						</a>
						.
					</p>
				</footer>
			</body>
		</html>
	);
}
