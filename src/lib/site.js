export const SITE_URL = 'https://jessewilliams.dev';

export const SITE_ROUTES = [
	'/',
	'/background/',
	'/projects/',
	'/projects/ableton_v/',
	'/projects/draw/',
	'/projects/excavator/',
	'/projects/gecco/',
	'/projects/kid_soma_website/',
	'/projects/mysql_translate/',
	'/projects/pipeline.nvim/',
	'/projects/rivergraph/',
	'/projects/utapi-go/',
	'/thoughts/',
	'/thoughts/language-exploration/',
	'/contact/'
];

export const absoluteUrl = (path = '/') => `${SITE_URL}${path === '/' ? '/' : path}`;
