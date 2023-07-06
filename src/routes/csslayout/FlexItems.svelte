<script lang="ts">
	// Flex vs Grid
	// ITEMS is about each itme position by either row/block/main axis (JUSTIFY) or col/cross axis (ALIGN)
	// (hence there is SELF and justify/align)
	// (place-item-center keeps the container filling the parent while centering content inside)
	// CONTENT is about spacing all items by the same matrix above: this controls all items at once, and has extra
	// props like space-evenly, space-between, space-around
	// (place-content-center resizes container to center)

	// Flexbox has no ITEMS on JUSTIFY, which is the main-axis; it has only CONTENT on JUSTIFY to
	// control the entire main axis items at once (spacing)

	// Flexbox can only ALIGN-CONTENT (cross-axis all-item spacing) when (1) flex: wrap and (2) container taller
	// than space needed for the content of item
	// Grid has the same condition for CONTENT to take effect on both ALIGN and JUSTIFY (axis)

	// ITEMS only Flexbox demo (justify-content is used)
</script>

<p>Parent: align-items: start; justify-content: end;</p>

<ul class="flex h-[50vh] flex-wrap items-start justify-end p-0 text-black">
	<li
		class="border-1 mt-0 mr-2 mb-4 ml-2 w-32 rounded border-solid border-slate-200 bg-blue-200 p-2"
		style="align-self: auto ;"
	>
		<h2>Card 1 (align-self: auto)</h2>
	</li>

	<li
		class="border-1 mt-0 mr-2 mb-4 ml-2 w-32 rounded border-solid border-slate-200 bg-blue-200 p-2"
		style="align-self: stretch ;"
	>
		<h2>Card 1 (align-self: stretch)</h2>
	</li>

	<li
		class="border-1 mt-0 mr-2 mb-4 ml-2 w-32 rounded border-solid border-slate-200 bg-blue-200 p-2"
		style="align-self: end ;"
	>
		<h2>Card 1 (align-self: end)</h2>
	</li>

	<li
		class="border-1 mt-0 mr-2 mb-4 ml-2 w-32 rounded border-solid border-slate-200 bg-blue-200 p-2"
		style="align-self: center ;"
	>
		<h2>Card 1 (align-self: center)</h2>
	</li>

	<li
		class="border-1 mt-0 mr-2 mb-4 ml-2 w-32 rounded border-solid border-slate-200 bg-blue-200 p-2"
		style="align-self: baseline ;"
	>
		<h2>Card 1 (align-self: baseline)</h2>
	</li>
</ul>
