import { Suspense } from 'react';
import { create, props } from '@stylexjs/stylex';
import RedirectContent from '@/components/links/RedirectContent';

const pageStyles = create({
	container: {
		display: 'grid',
		gap: '0.75rem',
		width: '100%',
		margin: '1rem',
		padding: '1rem',
		borderRadius: '0.5rem',
		backgroundColor: {
			default: '#fff',
			'@media (prefers-color-scheme: dark)': '#27272a'
		},
		boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)'
	}
});

export default function Home() {
	return (
		<main {...props(pageStyles.container)}>
			<Suspense fallback={<p>Loading...</p>}>
				<RedirectContent />
			</Suspense>
		</main>
	);
}
