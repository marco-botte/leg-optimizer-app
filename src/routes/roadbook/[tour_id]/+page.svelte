<script lang="ts">
	import Map from '$lib/components/Map.svelte';
	import { UserMarker } from '$lib/userMarker';
	import type { GeoPoint } from '$lib/types';

	let { data } = $props();
	const tour = $derived(data.tour);
	const geoPoints = $derived<GeoPoint[]>(
		tour?.points ? tour.points.map((p) => [p.lon, p.lat] as GeoPoint) : []
	);
	const userMarker = $derived(geoPoints.length > 0 ? new UserMarker(geoPoints[0]) : null);
</script>

{#if tour && userMarker}
	<Map {userMarker} line={geoPoints} zoom={8} />
{:else}
	<div class="flex h-screen items-center justify-center bg-slate-900 text-white">
		<p>Loading tour data...</p>
	</div>
{/if}
