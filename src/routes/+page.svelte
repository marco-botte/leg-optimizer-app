<script lang="ts">
	import { goto } from '$app/navigation';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
	const tours = $derived(data.tours ?? []);
</script>

<div class="flex min-h-screen items-center justify-center bg-base-200 p-4">
	<ul class="list w-full max-w-2xl rounded-box border border-base-300 bg-base-100 shadow-xl">
		<li class="p-4 pb-2 text-xs font-bold tracking-widest text-primary uppercase opacity-70">
			Available Tours
		</li>

		{#each tours as tour, i}
			<li
				class="list-row flex items-center gap-4 border-t border-base-200 p-4 transition-colors hover:bg-base-200/50"
			>
				<div class="w-8 text-xl font-black opacity-20">{i + 1}</div>

				<div class="flex-1 truncate font-semibold text-base-content">
					{tour.name.slice(0, 10)}{tour.name.length > 10 ? '...' : ''}
				</div>

				<div class="flex items-center gap-6 px-4 text-sm font-medium whitespace-nowrap">
					<div class="flex w-20 items-center gap-1.5">
						<span class="material-icons-outlined text-[18px] text-accent">east</span>
						<span
							>{Math.round(tour.total_km)}<span class="ml-0.5 text-[10px] opacity-50">KM</span
							></span
						>
					</div>

					<div class="flex w-20 items-center gap-1.5">
						<span class="material-icons-outlined text-[18px] text-secondary">north</span>
						<span
							>{Math.round(tour.total_elevation)}<span class="ml-0.5 text-[10px] opacity-50">M</span
							></span
						>
					</div>
				</div>

				<button
					class="btn shadow-sm btn-sm btn-primary md:btn-md"
					aria-label="load book"
					onclick={() => goto(`/roadbook/${tour.id}`)}
				>
					Load
				</button>
			</li>
		{/each}
	</ul>
</div>
