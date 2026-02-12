export type GeoPoint = [number, number];

export interface Waypoint {
	lat: number;
	lon: number;
	ele: number;
	dist_so_far: number;
	ele_gain_so_far: number;
	cals_so_far: number;
}

export interface TourResponse {
	id: string;
	name: string;
	total_km: number;
	total_elevation: number;
	points: Waypoint[];
	number_of_days: number;
	target_speed_kmh: number;
	total_weight: number;
	day_split_indices: number[];
}
