<script lang="ts">
	import Map from '$lib/components/Map.svelte';

	const hamburg: [number, number] = [9.9937, 53.5511];
</script>

<Map center={hamburg} zoom={12} theme="dark" />
