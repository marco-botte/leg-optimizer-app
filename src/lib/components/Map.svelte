<script lang="ts">
	import maplibregl from 'maplibre-gl';
	import { Protocol } from 'pmtiles';
	import { PUBLIC_PROTOMAPS_KEY } from '$env/static/public';
	import 'maplibre-gl/dist/maplibre-gl.css';

	let { zoom, userMarker, line } = $props();

	let mapContainer: HTMLElement | undefined = $state();
	let map: maplibregl.Map | null = null;

	$effect(() => {
		if (!mapContainer) return;

		const protocol = new Protocol();
		maplibregl.addProtocol('pmtiles', protocol.tile);

		map = new maplibregl.Map({
			container: mapContainer,
			style: `https://api.protomaps.com/styles/v3/dark.json?key=${PUBLIC_PROTOMAPS_KEY}`,
			center: userMarker.center,
			zoom,
			attributionControl: false
		});

		map.on('load', () => {
			// Add the Tour Line
			map?.addSource('route', {
				type: 'geojson',
				data: {
					type: 'Feature',
					properties: {},
					geometry: {
						type: 'LineString',
						coordinates: line
					}
				}
			});

			map?.addLayer({
				id: 'route',
				type: 'line',
				source: 'route',
				layout: { 'line-join': 'round', 'line-cap': 'round' },
				paint: {
					'line-color': '#3b82f6', // Tailwind blue-500
					'line-width': 6,
					'line-opacity': 0.8
				}
			});
		});

		if (userMarker) {
			new maplibregl.Marker({ element: userMarker.element })
				.setLngLat(userMarker.center)
				.addTo(map);
		}

		return () => {
			map?.remove();
			maplibregl.removeProtocol('pmtiles');
		};
	});
</script>

<div bind:this={mapContainer} class="fixed inset-0 h-full w-full bg-slate-900"></div>
