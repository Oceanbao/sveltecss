<script lang="ts">
	// Tailwind preflight has default on overflow flex content
	// Flexbox default already responsive to each block child and its content
	// Flex-wrap on parent wraps into multiple MAIN AXIS, default to taking full width
	// Child: flex: <grow> <shrink> <basis>
	// Note flex container is single dimension, MAIN / CROSS AXIS (each item span entire axis)
	// 1 1 200px - means responsive to 200px basis for all items
	// Tailwind: (assuming no width value only content)
	// flex-1 - 1 1 0% (responsive to nothing)
	// flex-auto - 1 1 auto (spans entire axis, similar to default with no item flex?)
	// flex-initial - 0 1 0% (max fits content, no grow, shrinks?)
	// 0 0 auto + width: calc(33.3333% - 20px) - fixed with 20px gutter
	// Disabling space spanning by flexbox and hack the widdth to layout as grid
	// Keep a basis size and not span - see 5 items layout over 3 columns 33%
	export let columns: number;
	let unitPerc = 100 / columns;
</script>

<p>FlexCard: each item: flex-none, w-[calc(num_columns) - 20px]</p>

<ul class="flex list-none flex-wrap p-0 text-black">
	{#each [...Array(columns).keys()] as index}
		<li
			class="border-1 mt-0 mr-2 mb-4 ml-2 flex-none rounded border-solid border-slate-200 bg-blue-200 p-2"
			style={`width: calc(${unitPerc}% - 20px);`}
		>
			<h2>{`Card ${index + 1}`}</h2>
			<p>
				These cards have been laid out using flexbox. By setting <code>display: flex</code> on the parent.
			</p>
		</li>
	{/each}
</ul>
