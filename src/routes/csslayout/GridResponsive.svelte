<script lang="ts">
	// auto-fit- expand leftover track with items
	// minmax(100px, 1fr) fills gap leftover by equal spacing
	// auto-fill - fit as many as will fit (repeat(auto-fill, 200px))
	export let num: number;
</script>

<p>grid-cols-[repeat(auto-fit, minmax(100px, 1fr))]</p>

<ul class="grid grid-cols-[repeat(auto-fit,minmax(100px,1fr))] p-0 text-black">
	{#each [...Array(num).keys()] as index}
		<li class="border-1 mt-0 mr-2 mb-4 ml-2 rounded border-solid border-slate-200 bg-blue-200 p-2">
			<h2>Card {index + 1}</h2>
		</li>
	{/each}
</ul>

<p>grid-cols-[repeat(auto-fill, minmax(100px, 1fr))]</p>

<ul class="grid grid-cols-[repeat(auto-fill,minmax(100px,1fr))] p-0 text-black">
	{#each [...Array(num).keys()] as index}
		<li class="border-1 mt-0 mr-2 mb-4 ml-2 rounded border-solid border-slate-200 bg-blue-200 p-2">
			<h2>Card {index + 1}</h2>
		</li>
	{/each}
</ul>

<p>grid-cols-[repeat(auto-fit, 200px)]</p>

<ul class="grid grid-cols-[repeat(auto-fit,200px)] p-0 text-black">
	{#each [...Array(num).keys()] as index}
		<li class="border-1 mt-0 mr-2 mb-4 ml-2 rounded border-solid border-slate-200 bg-blue-200 p-2">
			<h2>Card {index + 1}</h2>
		</li>
	{/each}
</ul>

<p>grid-cols-[repeat(auto-fill, 200px)]</p>

<ul class="grid grid-cols-[repeat(auto-fill,200px)] p-0 text-black">
	{#each [...Array(num).keys()] as index}
		<li class="border-1 mt-0 mr-2 mb-4 ml-2 rounded border-solid border-slate-200 bg-blue-200 p-2">
			<h2>Card {index + 1}</h2>
		</li>
	{/each}
</ul>
