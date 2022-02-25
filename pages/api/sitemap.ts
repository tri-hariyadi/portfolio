import { SitemapStream, streamToPromise } from 'sitemap';
import { Readable } from 'stream';
import globby from 'globby';

function addPage(page) {
	const path = page.replace('pages', '').replace('.tsx', '').replace('.mdx', '');
	const route = path === '/index' ? '' : path;
	return {
		url: `${process.env.WEBSITE_URL}${route}`,
		changefreq: 'daily',
		priority: 0.3,
	};
}

const generateSitemap = async (req, res) => {
	// An array with your links
	const pages = await globby(['pages/**/*{.tsx,.mdx}', '!pages/_*.tsx', '!pages/api']);
	const links = pages.map(addPage);
	// const links = [
	// 	{ url: '/blog/my-first-blog-post/', changefreq: 'daily', priority: 0.3 },
	// 	{ url: '/blog/my-second-blog-post', changefreq: 'daily', priority: 0.3 },
	// 	{ url: '/blog/my-third-blog-post/', changefreq: 'daily', priority: 0.3 },
	// ];

	// Create a stream to write to
	const stream = new SitemapStream({ hostname: `https://${req.headers.host}` });

	res.writeHead(200, {
		'Content-Type': 'application/xml',
	});

	const xmlString = await streamToPromise(Readable.from(links).pipe(stream)).then(data =>
		data.toString()
	);

	res.end(xmlString);
};

export default generateSitemap;
