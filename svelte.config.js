import { vitePreprocess } from '@sveltejs/kit/vite';
import adapter from '@sveltejs/adapter-netlify';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors

	kit: {
		adapter: adapter(),
		alias: {
			$components: './src/components',
			$api: './src/api'
		}
	},
	preprocess: vitePreprocess()
};

export default config;
