import { error } from '@sveltejs/kit';
import type { TourListResponse } from '$lib/types';
import { PUBLIC_API_ADRESS } from '$env/static/public';

// Construct the base URL dynamically
const API_BASE = `${PUBLIC_API_ADRESS}`;

export async function getToursList(fetchImpl: typeof fetch): Promise<TourListResponse[]> {
    const res = await fetchImpl(`${API_BASE}/tours?number_of_tours=5`);

    if (!res.ok) {
        throw error(res.status, 'Failed to load tour list');
    }

    const data = await res.json();

    return data.map((t: any) => ({
        id: t.id,
        name: t.name,
        total_km: t.total_km,
        total_elevation: t.total_elevation
    }));
}