<script lang="ts">
	import { goto } from '$app/navigation';

	const tourID = '51e7ec9a-c37b-479f-b6c0-7d3000251443';
</script>

<div class="flex h-screen items-center justify-center">
	<button
		class="btn btn-xl btn-primary"
		aria-label="load book"
		onclick={() => goto(`/roadbook/${tourID}`)}
	>
		Load Tour
	</button>
</div>
