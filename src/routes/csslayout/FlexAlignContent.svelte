<script lang="ts">
	export let num: number;
</script>

<p>Parent: w-600px align-content: between;</p>

<ul class="flex h-[50vh] w-[600px] flex-wrap content-between p-0 text-black">
	{#each [...Array(num).keys()] as index}
		<li
			class="border-1 mt-0 mr-2 mb-4 ml-2 flex-[1_1_250px] rounded border-solid border-slate-200 bg-blue-200 p-2"
		>
			<h2>{`Card ${index + 1}`} (flex: 1 1 250px)</h2>
		</li>
	{/each}
</ul>
