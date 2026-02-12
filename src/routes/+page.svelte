<script lang="ts">
	import Map from '$lib/components/Map.svelte';
	import { UserMarker } from '$lib/userMarker';
	import { mockTour } from '$lib/mockTour';

	const myMarker = new UserMarker(mockTour[0]);
</script>

<Map userMarker={myMarker} line={mockTour} zoom={15} />
