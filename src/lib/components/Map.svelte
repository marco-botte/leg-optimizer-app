<script lang="ts">
	import maplibregl from 'maplibre-gl';
	import { Protocol } from 'pmtiles';
	import { PUBLIC_PROTOMAPS_KEY } from '$env/static/public';
	import 'maplibre-gl/dist/maplibre-gl.css';

	type LngLat = [number, number];

	let {
		center = [9.9937, 53.5511],
		zoom = 12,
		theme = 'dark'
	}: { center: LngLat; zoom: number; theme: string } = $props();

	let mapContainer: HTMLElement | undefined = $state();
	let map: maplibregl.Map | null = null;

	$effect(() => {
		if (!mapContainer) return;

		const protocol = new Protocol();
		maplibregl.addProtocol('pmtiles', protocol.tile);

		map = new maplibregl.Map({
			container: mapContainer,
			style: `https://api.protomaps.com/styles/v3/${theme}.json?key=${PUBLIC_PROTOMAPS_KEY}`,
			center: center,
			zoom: zoom,
			attributionControl: false
		});

		// const el = document.createElement('div');
		// el.className = 'relative h-5 w-5 rounded-full border-2 border-white bg-blue-500 shadow-lg';

		// const pulse = document.createElement('div');
		// pulse.className = 'absolute -inset-0.5 rounded-full bg-blue-500 animate-ping opacity-40';
		// el.appendChild(pulse);

		// new maplibregl.Marker({ element: el }).setLngLat(center).addTo(map);

		return () => {
			map?.remove();
			maplibregl.removeProtocol('pmtiles');
		};
	});
</script>

<div bind:this={mapContainer} class="absolute inset-0 h-full w-full touch-none bg-slate-900"></div>
