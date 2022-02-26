import React from 'react';
import { GetServerSideProps } from 'next';
import fs from 'fs';

const Sitemap = () => {};

const getBaseUrl = (env: string): string => {
	const baseUrl = {
		development: 'http://localhost:3000',
		production: 'https://trihariyadi.vercel.app/',
	};
	console.log(env);
	return baseUrl[env];
};

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
	const staticPages = fs
		.readdirSync(
			{
				development: 'pages',
				production: './.next/server',
			}[process.env.NODE_ENV]
		)
		.filter(staticPage => {
			return !['_app.tsx', '_document.tsx', '_error.tsx', 'sitemap.xml.tsx', 'api'].includes(
				staticPage
			);
		})
		.map(staticPagePath => {
			const path = staticPagePath.replace('pages', '').replace('.tsx', '').replace('.mdx', '');
			const route = path === '/index' ? '' : path;
			return `${getBaseUrl(process.env.NODE_ENV)}${route}`;
		});

	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${staticPages
				.map(url => {
					return `
            <url>
              <loc>${url}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>monthly</changefreq>
              <priority>1.0</priority>
            </url>
          `;
				})
				.join('')}
    </urlset>
  `;

	res.setHeader('Content-Type', 'text/xml');
	res.write(sitemap);
	res.end();

	return {
		props: {},
	};
};

export default Sitemap;
