<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<div class="app-wrapper" style="width: 100%; height: 100%;">
	{@render children()}
</div>
