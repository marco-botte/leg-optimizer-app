<script lang="ts">
	import Map from '$lib/components/Map.svelte';
	import { UserMarker } from '$lib/userMarker';
	import type { LngLatLike } from 'maplibre-gl';

	let pos: LngLatLike = $state([9.9937, 53.5511]);
	const userMarker = new UserMarker(pos);
</script>

<Map zoom={13} markerInstance={userMarker} />
