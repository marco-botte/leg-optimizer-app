import { error } from '@sveltejs/kit';
import type { TourResponse, Waypoint } from '$lib/types';
import { PUBLIC_API_IP, PUBLIC_API_PORT } from '$env/static/public';

// Construct the base URL dynamically
const API_BASE = `http://${PUBLIC_API_IP}:${PUBLIC_API_PORT}`;

export async function getTour(id: string, fetchImpl: typeof fetch): Promise<TourResponse> {
    const res = await fetchImpl(`${API_BASE}/tours/${id}`);

    if (!res.ok) {
        throw error(res.status, `Failed to load tour ${id}`);
    }

    const data = await res.json();

    // We parse the strings and cast them to our known types
    const parsedPoints: Waypoint[] = typeof data.points_json === 'string' 
        ? JSON.parse(data.points_json) 
        : (data.points || []);

    const parsedIndices: number[] = typeof data.day_split_indices === 'string' 
        ? JSON.parse(data.day_split_indices) 
        : (data.day_split_indices || []);

    return {
        id: data.id,
        name: data.name,
        total_km: data.total_km,
        total_elevation: data.total_elevation,
        number_of_days: data.number_of_days,
        target_speed_kmh: data.target_speed_kmh,
        points: parsedPoints,
        total_weight: data.total_weight,
        day_split_indices: parsedIndices
    };
}
