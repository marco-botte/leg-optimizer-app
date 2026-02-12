import type { PageLoad } from './$types';
import { getTour } from '$lib/getTour';

export const load: PageLoad = async ({ params, fetch }) => {
	const tour = await getTour(params.tour_id, fetch);
	return { tour };
};
