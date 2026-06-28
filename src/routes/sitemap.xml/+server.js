import { absoluteUrl, SITE_ROUTES } from '$lib/site.js';

export const prerender = true;

export const GET = () => {
	const lastmod = new Date().toISOString().slice(0, 10);
	const urls = SITE_ROUTES.map(
		(route) => `
	<url>
		<loc>${absoluteUrl(route)}</loc>
		<lastmod>${lastmod}</lastmod>
	</url>`
	).join('');

	return new Response(`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}
</urlset>
`, {
		headers: {
			'Content-Type': 'application/xml; charset=utf-8'
		}
	});
};
