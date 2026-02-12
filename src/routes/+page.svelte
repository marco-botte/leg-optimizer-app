<script lang="ts">
	import { onMount } from 'svelte';
	import maplibregl from 'maplibre-gl';
	import { PUBLIC_PROTOMAPS_KEY } from '$env/static/public';
	import { Protocol } from 'pmtiles';
	import 'maplibre-gl/dist/maplibre-gl.css';

	// 1. Tell TypeScript it starts as null but will be an HTMLElement
	let mapContainer: HTMLElement | null = null;
	onMount(() => {
		// 2. The Guard: If for some reason the div isn't there, don't run
		if (!mapContainer) return;

		const protocol = new Protocol();
		maplibregl.addProtocol('pmtiles', protocol.tile);

		const map = new maplibregl.Map({
			container: mapContainer, // TypeScript is now happy because of the check above
			style: `https://api.protomaps.com/styles/v3/light.json?key=${PUBLIC_PROTOMAPS_KEY}`,
			center: [8.5417, 47.3769],
			zoom: 12,
			attributionControl: false
		});

		return () => map.remove();
	});
</script>

<div
	bind:this={mapContainer}
	style="position: absolute; top: 0; left: 0; width: 100vw; height: 100vh; background-color: red; border: 5px solid blue;"
></div>
