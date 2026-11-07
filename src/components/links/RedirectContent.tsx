'use client';

import { create, props } from '@stylexjs/stylex';
import { useSearchParams } from 'next/navigation';

const styles = create({
	illustration: {
		display: 'flex',
		justifyContent: 'center'
	},
	content: {
		display: 'grid',
		gap: '0.75rem',
		textAlign: 'center'
	},
	title: {
		fontSize: '1.5rem'
	},
	hint: {
		fontSize: '0.875rem'
	}
});

function getExternalUrl(value: string | null): string | undefined {
	if (!value) {
		return undefined;
	}

	try {
		const url = new URL(value);
		return url.protocol === 'http:' || url.protocol === 'https:' ? value : undefined;
	} catch {
		return undefined;
	}
}

function StatusIllustration({ hasLink }: { hasLink: boolean }) {
	return (
		<div {...props(styles.illustration)}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="64"
				height="64"
				viewBox="0 0 32 32"
				aria-hidden="true"
				focusable="false"
			>
				<g fill="none">
					<path
						fill="#FFB02E"
						d="M15.999 29.998c9.334 0 13.999-6.268 13.999-14c0-7.73-4.665-13.998-14-13.998C6.665 2 2 8.268 2 15.999s4.664 13.999 13.999 13.999"
					/>
					{hasLink ? (
						<>
							<path
								fill="#FFB02E"
								d="M10 21.5v-3.06A1.44 1.44 0 0 0 8.56 17c-.84 0-1.505.718-1.517 1.559C7.023 19.92 6.835 21.722 6 22c-3 1-4 5.5-1.5 7.5c2 1.6 4 1.5 5.5 1.5h2.764a1.236 1.236 0 0 0 .553-2.342L13 28.5h.72a1 1 0 0 0 .97-.758l.067-.272A.78.78 0 0 0 14 26.5l.33-.165a1.214 1.214 0 0 0 0-2.17L14 24h1.75a1.25 1.25 0 1 0 0-2.5z"
							/>
							<path
								fill="#fff"
								d="M10.42 16.224a4.206 4.206 0 1 0 0-8.411a4.206 4.206 0 0 0 0 8.411m11.148.077a4.244 4.244 0 1 0 0-8.489a4.244 4.244 0 0 0 0 8.49"
							/>
							<path
								fill="#FF822D"
								d="M10 21.5v-3.06A1.44 1.44 0 0 0 8.56 17c-.84 0-1.505.718-1.517 1.559C7.023 19.92 6.835 21.722 6 22c-3 1-4 5.5-1.5 7.5c2 1.6 4 1.5 5.5 1.5h2.764a1.236 1.236 0 0 0 .553-2.342L13 28.5h.72a1 1 0 0 0 .97-.758l.067-.272A.78.78 0 0 0 14 26.5l.33-.165a1.214 1.214 0 0 0 0-2.17L14 24h1.75a1.25 1.25 0 1 0 0-2.5z"
							/>
							<path
								fill="#402A32"
								d="M7.146 4.146C7.543 3.75 8.63 3 10 3s2.457.75 2.854 1.146a.5.5 0 0 1-.708.708C11.876 4.584 11.03 4 10 4s-1.877.584-2.146.854a.5.5 0 1 1-.708-.708m11.034 3.97C18.65 7.724 19.92 7 21.5 7s2.85.724 3.32 1.116a.5.5 0 0 1-.64.768C23.85 8.61 22.8 8 21.5 8s-2.35.61-2.68.884a.5.5 0 0 1-.64-.768M13 11.5a3 3 0 1 1-6 0a3 3 0 0 1 6 0"
							/>
							<path
								fill="#402A32"
								d="M24 11.5a3 3 0 1 1-6 0a3 3 0 0 1 6 0m-7.919 7.486a2.73 2.73 0 0 0-2.374.721a1 1 0 0 1-1.414-1.414a4.73 4.73 0 0 1 4.126-1.279c1.962.336 2.973 1.457 3.488 2.565a1 1 0 0 1-1.814.842c-.28-.604-.791-1.227-2.012-1.435"
							/>
						</>
					) : (
						<>
							<path
								fill="#fff"
								d="M10.5 18a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9m11 0a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9"
							/>
							<path
								fill="#402A32"
								d="M19.923 7.767c.102-.161.25-.347.485-.495c.23-.145.573-.272 1.092-.272c.514 0 .851.131 1.082.28c.237.154.39.344.514.514a.5.5 0 0 0 .808-.588a2.9 2.9 0 0 0-.779-.765C22.727 6.183 22.2 6 21.5 6c-.693 0-1.224.172-1.626.426c-.4.252-.644.566-.796.807a.5.5 0 1 0 .845.534M14 14a3 3 0 1 1-6 0a3 3 0 0 1 6 0m10 0a3 3 0 1 1-6 0a3 3 0 0 1 6 0M9.407 8.728a1.55 1.55 0 0 1-.484-.495a.5.5 0 0 0-.846.534c.153.241.398.555.797.807c.402.254.933.426 1.626.426c.7 0 1.227-.183 1.625-.44c.393-.255.633-.564.78-.766a.5.5 0 0 0-.81-.588c-.123.17-.276.36-.513.514c-.231.149-.569.28-1.082.28c-.52 0-.862-.126-1.093-.272M13 20a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2z"
							/>
						</>
					)}
				</g>
			</svg>
		</div>
	);
}

export default function RedirectContent() {
	const searchParams = useSearchParams();
	const target = getExternalUrl(searchParams.get('target'));

	if (!target) {
		return (
			<>
				<StatusIllustration hasLink={false} />
				<section {...props(styles.content)}>
					<h1 {...props(styles.title)}>你怎么在这里？</h1>
					<p>请确保携带了正确的 Query Params 访问本站。</p>
					<a href="https://sirvr.win" rel="noopener noreferrer">
						← 返回 Sliver Complex
					</a>
				</section>
			</>
		);
	}

	return (
		<>
			<StatusIllustration hasLink />
			<section {...props(styles.content)}>
				<h1 {...props(styles.title)}>即将访问外部网站</h1>
				<p>你正在尝试访问下述链接：</p>
				<a href={target} rel="noopener noreferrer">
					{target}
				</a>
				<div>
					<p {...props(styles.hint)}>
						注意：该网站不属于 Sliver Complex，我们无法保证其可用和可信状况。
					</p>
					<p {...props(styles.hint)}>请经过慎重思考后，点击该链接继续访问。</p>
				</div>
			</section>
		</>
	);
}
