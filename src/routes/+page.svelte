<script lang="ts">
	import { goto } from '$app/navigation';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
	const tours = $derived(data.tours ?? []);
</script>

<div class="min-h-screen bg-base-200 p-4 pb-20">
	<header class="mx-auto mb-6 max-w-md pt-4">
		<h1 class="text-3xl font-extrabold text-base-content">Tours</h1>
		<p class="text-sm font-medium text-base-content/60">Select a route to begin</p>
	</header>

	<div class="mx-auto flex max-w-md flex-col gap-4">
		{#each tours as tour, i}
			<div class="card border border-base-300 bg-base-100 shadow-sm">
				<div class="card-body p-5">
					<div class="flex items-start justify-between gap-2">
						<h2 class="card-title line-clamp-1 text-base-content">
							{tour.name}
						</h2>
						<div class="badge badge-outline font-bold badge-primary">
							#{i + 1}
						</div>
					</div>

					<div class="stats mt-2 stats-horizontal border-none bg-base-200">
						<div class="stat p-2 px-4">
							<div class="stat-title text-[10px] font-bold uppercase">Distance</div>
							<div class="stat-value flex items-center gap-1 text-sm">
								{Math.round(tour.total_km)}
								<span class="text-[10px] opacity-50">KM</span>
							</div>
						</div>

						<div class="stat border-l border-base-300 p-2 px-4">
							<div class="stat-title text-[10px] font-bold uppercase">Elev.</div>
							<div class="stat-value flex items-center gap-1 text-sm">
								{Math.round(tour.total_elevation)}
								<span class="text-[10px] opacity-50">M</span>
							</div>
						</div>
					</div>

					<div class="mt-4 card-actions">
						<button
							class="group btn btn-block shadow-md btn-primary"
							onclick={() => goto(`/roadbook/${tour.id}`)}
						>
							Open Roadbook
							<span
								class="material-icons-outlined text-sm transition-transform group-hover:translate-x-1"
							>
								arrow_forward
							</span>
						</button>
					</div>
				</div>
			</div>
		{/each}
	</div>
</div>
