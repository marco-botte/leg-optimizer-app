import { getToursList } from '$lib/api/getToursList'; // Adjust path to your getToursList function
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
    const tours = await getToursList(fetch);
    return {tours};
};