<script lang="ts">
	import maplibregl from 'maplibre-gl';
	import { Protocol } from 'pmtiles';
	import { PUBLIC_PROTOMAPS_KEY } from '$env/static/public';
	import 'maplibre-gl/dist/maplibre-gl.css';

	let { zoom, theme, markerInstance } = $props();

	let mapContainer: HTMLElement | undefined = $state();
	let map: maplibregl.Map | null = null;
	let mapMarker: maplibregl.Marker | null = null;

	$effect(() => {
		if (!mapContainer) return;

		const protocol = new Protocol();
		maplibregl.addProtocol('pmtiles', protocol.tile);

		map = new maplibregl.Map({
			container: mapContainer,
			style: `https://api.protomaps.com/styles/v3/${theme}.json?key=${PUBLIC_PROTOMAPS_KEY}`,
			center: markerInstance.center,
			zoom,
			attributionControl: false
		});

		if (markerInstance) {
			mapMarker = new maplibregl.Marker({ element: markerInstance.element })
				.setLngLat(markerInstance.center)
				.addTo(map);
		}

		return () => {
			map?.remove();
			maplibregl.removeProtocol('pmtiles');
		};
	});

	$effect(() => {
		if (mapMarker) mapMarker.setLngLat(markerInstance.center);
	});
</script>

<div bind:this={mapContainer} class="fixed inset-0 h-full w-full bg-slate-900"></div>
