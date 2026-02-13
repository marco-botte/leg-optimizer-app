<script lang="ts">
	import Map from '$lib/components/Map.svelte';
	import { UserMarker } from '$lib/userMarker';
	import type { GeoPoint } from '$lib/types';
	import { goto } from '$app/navigation';

	let { data } = $props();
	const tour = $derived(data.tour);
	const geoPoints = $derived<GeoPoint[]>(
		tour?.points ? tour.points.map((p) => [p.lon, p.lat] as GeoPoint) : []
	);
	const userMarker = $derived(geoPoints.length > 0 ? new UserMarker(geoPoints[0]) : null);
</script>

<div class="relative h-screen w-full overflow-hidden">
	<nav
		class="pointer-events-none absolute inset-x-0 top-0 z-50 flex p-4 pt-[env(safe-area-inset-top)]"
	>
		<button
			class="btn pointer-events-auto btn-circle border-none bg-base-100/60 shadow-lg backdrop-blur-md hover:bg-base-100"
			onclick={() => goto('/')}
			aria-label="Back to Tours"
		>
			<span class="material-icons-outlined text-2xl">chevron_left</span>
		</button>
	</nav>

	{#if tour && userMarker}
		<Map {userMarker} line={geoPoints} zoom={8} />
	{:else}
		<div class="flex h-full w-full flex-col items-center justify-center gap-4 bg-slate-900">
			<span class="loading loading-lg loading-spinner text-primary"></span>
			<p class="text-sm font-bold tracking-widest text-slate-400 uppercase">Initializing Map</p>
		</div>
	{/if}
</div>
