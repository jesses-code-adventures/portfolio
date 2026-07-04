export const SITE_URL = 'https://jessewilliams.dev';

export const SITE_ROUTES = [
	'/',
	'/background',
	'/projects',
	'/projects/ableton_v',
	'/projects/draw',
	'/projects/excavator',
	'/projects/gecco',
	'/projects/kid_soma_website',
	'/projects/mysql_translate',
	'/projects/pipeline.nvim',
	'/projects/rivergraph',
	'/projects/utapi-go',
	'/thoughts',
	'/thoughts/language-exploration',
	'/contact'
];

export const cleanPath = (path = '/') => {
	if (path === '/') return '/';
	return path.endsWith('/') ? path.slice(0, -1) : path;
};

export const absoluteUrl = (path = '/') => `${SITE_URL}${cleanPath(path)}`;
