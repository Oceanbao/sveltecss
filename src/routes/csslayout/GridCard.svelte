<script lang="ts">
	export let num: number;
</script>

<p>GridCard: parent grid-cols-[1fr 1fr 1fr]</p>

<ul class="grid grid-cols-[1fr_1fr_1fr] p-0 text-black">
	{#each [...Array(num).keys()] as index}
		<li class="border-1 mt-0 mr-2 mb-4 ml-2 rounded border-solid border-slate-200 bg-blue-200 p-2">
			<h2>{`Card ${index + 1}`}</h2>
			<p>These cards laid via grid.</p>
		</li>
	{/each}
</ul>
