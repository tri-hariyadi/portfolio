import React from 'react';
import Head from 'next/head';

const Metadata: React.FC<{ title?: string; desc?: string; canonical?: string }> = ({
	title,
	desc,
	canonical,
}) => {
	return (
		<Head>
			<title>{title || 'Tri Hariyadi'}</title>
			<meta name='description' content={desc || 'Tri Hariyadi Portfolio'} />
			<meta name='author' content='Tri Hariyadi' />
			<meta property='og:title' content={title || 'Tri Hariyadi Portfolio'} />
			<meta property='og:type' content='portfolio' />
			<meta
				name='og:description'
				property='og:description'
				content={desc || 'Tri Hariyadi Portfolio'}
			/>
			<meta property='og:site_name' content='Portfolio' />
			<meta property='og:url' content='http://localhost:3000/' />
			<meta name='twitter:card' content='portfolio' />
			<meta property='twitter:title' content={title || 'Tri Hariyadi'} />
			<meta property='twitter:description' content={desc || 'Tri Hariyadi Portfolio'} />
			<meta name='twitter:site' content='Tri Hariyadi Portfolio' />
			<meta name='twitter:creator' content='Tri Hariyadi' />
			<meta name='viewport' content='initial-scale=1.0, width=device-width' />
			<link rel='icon' type='image/png' href='/favicon.ico' />
			<link rel='apple-touch-icon' href='/static/images/favicon.ico' />
			<meta property='og:image' content='' />
			<meta name='twitter:image' content='' />
			<link rel='canonical' href={`http://localhost:3000${canonical}`} />
		</Head>
	);
};

export default Metadata;
