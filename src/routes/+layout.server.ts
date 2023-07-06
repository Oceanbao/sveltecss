import fs from 'fs';
import type { LayoutServerLoad } from './$types';

const getDirs = (source: string) => {
	return fs
		.readdirSync(source, { withFileTypes: true })
		.filter((dir) => dir.isDirectory())
		.map((dir) => dir.name);
};

export const load: LayoutServerLoad = (event) => {
	return {
		routes: getDirs('./src/routes')
	};
};
