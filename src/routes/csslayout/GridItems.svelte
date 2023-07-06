<script lang="ts">
</script>

<p>grid-cols-4 grid-rows-repeat(3,200px) align-items: end; justify-items-end</p>
<pre>
  Grid Area:
    a a a b
    a a a b
    c d d d
</pre>

<ul
	class="griditems grid grid-cols-4 grid-rows-[repeat(3,200px)] items-end justify-items-end p-0 text-black"
>
	<li
		class="border-1 mt-0 mr-2 mb-4 ml-2 rounded border-solid border-slate-200 bg-blue-200 p-2"
		style="grid-area: a;"
	>
		<h2>Card 1</h2>
		<p>(grid-area: a)</p>
	</li>

	<li
		class="border-1 mt-0 mr-2 mb-4 ml-2 rounded border-solid border-slate-200 bg-blue-200 p-2"
		style="grid-area: b; align-self: stretch;"
	>
		<h2>Card 2</h2>
		<p>(grid-area: b) (align-self: stretch)</p>
	</li>

	<li
		class="border-1 mt-0 mr-2 mb-4 ml-2 rounded border-solid border-slate-200 bg-blue-200 p-2"
		style="grid-area: c; align-self: start;"
	>
		<h2>Card 3</h2>
		<p>(grid-area: c) (align-self: start)</p>
	</li>

	<li
		class="border-1 mt-0 mr-2 mb-4 ml-2 rounded border-solid border-slate-200 bg-blue-200 p-2"
		style="grid-area: d; align-self: center; justify-self: stretch;"
	>
		<h2>Card 4</h2>
		<p>(grid-area: d) (align-self: center) (justify-self: stretch)</p>
	</li>
</ul>

<style>
	.griditems {
		grid-template-areas:
			'a a a b'
			'a a a b'
			'c d d d';
	}
</style>
