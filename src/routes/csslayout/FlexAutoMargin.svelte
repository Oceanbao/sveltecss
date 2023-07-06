<script lang="ts">
	// Auto Margin trick to effect JUSTIFY-SELF on indiviual item
	// margin-auto makes left or right (top-down) takes available space
	// Demo: last item align to the right by left-margin: auto
	export let num: number;
</script>

<p>Parent: w-600px align-content: between;</p>

<ul class="flex gap-4 text-black">
	{#each [...Array(num).keys()] as index}
		<li
			class="border-1 rounded border-solid border-slate-200 bg-blue-200 p-2"
			style={`margin-left: ${index === 4 ? 'auto' : ''}`}
		>
			<h2>{`Card ${index + 1}`}</h2>
		</li>
	{/each}
</ul>
